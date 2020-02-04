import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { Location } from '@angular/common';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatabaseService } from '../database.service';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { ActionSheetController, ModalController, ToastController, LoadingController } from '@ionic/angular';
import { CategoryPage } from '../category/category.page';
import { UploadService } from '../upload/upload.service';
import { File } from '@ionic-native/file/ngx';
import { Storage } from '@ionic/storage';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  // variables
  type = true;
  existing = false;
  newProduct = false;
  category: string;
  productForm: FormGroup;
  value = '';
  scannedcode = '';
  image = ''
  images = [];
  categories;
  products ;
  unfilteredProducts ;
  shop ;
  loading ;

  constructor(
    private navCtrl: Router,
    private service: FirestoreService,
    private asc: ActionSheetController,
    private scannner: BarcodeScanner,
    private http: HttpClient,
    private db: DatabaseService,
    private camera: Camera,
    private formBuilder: FormBuilder,
    private modal: ModalController,
    private upload: UploadService,
    private file: File,
    private loader: LoadingController,
    private load: LoadingController,
    private storage: Storage,
    private ref: ChangeDetectorRef,
    private webview: WebView,
    private fs: AngularFirestore,
    private imagePicker: ImagePicker,
    private cropService: Crop,
    private fileChooser: FileChooser,

  ) {

    this.service.hiddenTabs = true;

    this.productForm = formBuilder.group({
      productName: ['', Validators.required],
      barcode: [this.scannedcode],
      category: [this.value, Validators.required],
      quantity: ['', Validators.required],
      unit: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*')])],
      status: [''],
      // image: [this.image, Validators.required]
    });

    this.service.getallcategories(this.db.getshopname()).valueChanges().subscribe(res => {
      this.categories = res ;
    })
    this.shop = this.db.getshopname() ;
    this.getproducts();
  }

  async getproducts(){
    await this.fs.collection(this.shop).valueChanges().subscribe(res => {
      console.log(res)
      this.products =  res ;
      this.unfilteredProducts = res ;

    })
 }
// toObject(arr) {
//   var rv = {};
//   for (var i = 0; i < arr.length; ++i)
//     rv[i] = arr[i];
    
//   return rv;
// }
//  updateprod(){
//    this.products.forEach(item => {
//      item.stock = 0 ;
//      item.description = '' ;
//     //  item =  this.toObject(this.products);
//      this.fs.collection(this.shop).add(item);
//    });
// }
  
  // filter products
  setFilteredItems() {
    if (this.category !== null || this.category !== '') {
      this.products = this.filterItems();
      console.log(this.products);
    }
  }
  filterItems() {
    return this.unfilteredProducts.filter(item => {
      return item.category.toLowerCase().indexOf(this.category.toLowerCase()) > -1;
    });
  }
  

  ngOnInit() {
  }
  back() {
    this.service.hiddenTabs = false;
    this.close();
    this.navCtrl.navigate(['tabs/stock']);
  }
  addNewProduct() {
    this.newProduct = true;
    this.type = false;
  }
  existingProduct() {
    this.existing = true;
    this.type = false;
  }
  close() {
    this.existing = false;
    this.type = true;
    this.newProduct = false;
    this.category = null;
  }
  viewProduct(item) {
    this.service.hiddenTabs = true;
    this.service.setProduct(item);
    console.log(item)
    this.navCtrl.navigate(['tabs/productmodal']);
  }
  addProduct() {
    console.log(this.productForm.value);
    this.productForm.reset();
    this.category = '';
    this.Toast('uploading...');
    this.upload.presentToast('Product upload successful');


  }
  scan() {
    this.scannner.scan().then(code => {
      if (code.cancelled) { return; }
      this.scannedcode = code.toString();
    });
  }
  async selectCategory() {
    const actionSheet = await this.asc.create({
      header: 'Categories',
      buttons: this.createButtons()
    });
    await actionSheet.present();
  }
  createButtons() {
    const buttons = [];
    
    console.log(this.categories.categories)
    // tslint:disable-next-line: forin
    for (let index in this.categories.categories) {
      const button = {
        text: this.categories.categories[index].name,
        // icon: this.Allcategories[index].icon,
        handler: () => {
          console.log('button text ' + this.categories.categories[index].name);
          this.value = this.categories.categories[index].name;
          return true;
        }
      };
      buttons.push(button);
    }
    const adbutton = {
      text: 'Add New',
      cssClass: 'asc',
      handler: () => {
        console.log('adding new');
        this.categoryModal();
      }
    };
    buttons.push(adbutton);
    return buttons;
  }
  async categoryModal() {
    const modal = await this.modal.create({
      component: CategoryPage,
      componentProps: { shopname: this.db.getshopname() }
    });
    localStorage.setItem('shop', this.db.getshopname());
    await modal.present();
  }
 
  async selectImage() {
    const actionSheet = await this.asc.create({
      header: "Select Image Source",
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.openImagePickerCrop();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }
  openImagePickerCrop(){
    this.imagePicker.hasReadPermission().then(
      (result) => {
        if(result == false){
          // no callbacks required as this opens a popup which returns async
          this.imagePicker.requestReadPermission();
        }
        else if(result == true){
          this.imagePicker.getPictures({
            maximumImagesCount: 1
          }).then(
            (results) => {
              for (var i = 0; i < results.length; i++) {
                this.cropService.crop(results[i], {quality: 75}).then(
                  newImage => {
                    this.uploadImageToFirebase(newImage);
                  },
                  error => alert("Error cropping image"+error)
                );
              }
            }, (err) => alert(err)
          ).catch(err => console.log(err));
        }
      }, (err) => {
        alert(err);
      }).catch(err => alert(err))
    }
    uploadImageToFirebase(image){
      image = this.webview.convertFileSrc(image);
    
      //uploads img to firebase storage
      this.upload.uploadImage(image)
      .then(photoURL => {

        this.upload.presentToast('Image was updated successfully');
        
        })
      }
    async Toast(msg){
      this.loading = await this.loader.create({
        message: msg,
        duration: 2000,
      });
      await this.loading.present();
    }
 
}
