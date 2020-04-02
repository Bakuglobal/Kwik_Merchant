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
import { Product } from '../models/product';
import { AngularFireStorage } from '@angular/fire/storage';

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
  image = '';
  images = [];
  categories;
  products ;
  unfilteredProducts ;
  shop ;
  loading ;
  date ;

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
    private st: AngularFireStorage,


  ) {

    this.service.hiddenTabs = true;
    this.date = new Date() ;
    this.productForm = formBuilder.group({
      product: ['', Validators.required],
      barcode: [this.scannedcode],
      category: [this.value, Validators.required],
      stock: ['', Validators.required],
      quantity: ['', Validators.required],
      currentprice: ['', Validators.required],
      description: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*')])],
      status: ['Available'],
      image: [this.image,Validators.required]
    });
    this.shop = localStorage.getItem('shop');
    this.service.getallcategories(this.shop).valueChanges().subscribe(res => {
      this.categories = res ;
    })
    
    this.getproducts();
  }

  async getproducts(){
    this.service.getallProducts(this.shop).subscribe(res => {
      this.products = res ;
      this.unfilteredProducts = res ;
    });
     console.log(this.products);
 }
  
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
    this.Toast('uploading...');
    this.uploadTostorage(this.image);
    let data: Product = {
      "shop": this.shop,
      "currentprice": this.productForm.value.currentprice,
      "quantity": this.productForm.value.quantity,
      "product": this.productForm.value.product,
      "image": this.productForm.value.image,
      "status": this.productForm.value.status,
      "stock": this.productForm.value.stock,
      "category": this.productForm.value.category,
      "description": this.productForm.value.description,
      "barcode": this.productForm.value.barcode
    }
    console.log(data);
    this.fs.collection(this.shop).add(data).then(res => {
      this.productForm.reset();
      this.category = '';
      this.upload.presentToast('Product upload successful');
    }).catch(err => {
      console.log(err);
    })
    

  }
  scan() {
    this.scannner.scan().then(code => {
      if (code.cancelled) { return; }
      this.scannedcode = code.text;
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
        text: this.categories.categories[index],
        // icon: this.Allcategories[index].icon,
        handler: () => {
          console.log('button text ' + this.categories.categories[index]);
          this.value = this.categories.categories[index];
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
        console.log(photoURL);
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
   async openCamera(){
      try {
        // camera options
        const options: CameraOptions = {
          quality: 50,
          targetHeight: 600,
          targetWidth: 600,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          correctOrientation: true
        }
        const results  =  await this.camera.getPicture(options) ;
        const image = `data:image/jpeg;base64,${results}`;
    
        this.image = image ;

        }
        catch (e){
          console.log(e);
        }
    }
    uploadTostorage(image){
      const pictures = this.st.storage.ref(this.shop+'/'+this.date); 
        pictures.putString(image, 'data_url').then(url => {
          this.image = url.downloadURL ;
        });
    }
 
}
