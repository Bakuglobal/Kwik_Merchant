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
import { Restaurant } from '../models/restaurant';
import { Recipes } from '../models/recipes';

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
    restaurantForm: FormGroup;
    recipesForm: FormGroup;
    value = '';
    scannedcode = '';
    image = '';
    images = [];
    categories;
    products;
    unfilteredProducts;
    shop;
    loading: any;
    date;
    shopType: any;
    user: any;

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
        this.date = new Date();
        this.productForm = formBuilder.group({
            product: ['', Validators.required],
            barcode: [this.scannedcode],
            category: [this.value, Validators.required],
            stock: ['', Validators.required],
            quantity: ['', Validators.required],
            currentprice: ['', Validators.required],
            description: [''],
            status: ['Available'],
            image: [this.image, Validators.required]
        });

        
        this.restaurantForm = formBuilder.group({
            Meal: ['', Validators.required],
            category: [this.value, Validators.required],
            currentprice: ['', Validators.required],
        });

        this.recipesForm = formBuilder.group({
            category: [this.value, Validators.required],
            currentprice: ['', Validators.required],
            image: ['', Validators.required],
            ingridients: ['', Validators.required],
            persons: ['', Validators.required],
            recipe: ['', Validators.required],
        });
        this.shop = localStorage.getItem('shop');
        this.user = localStorage.getItem('user');
        this.service.getallcategories(this.shop).valueChanges().subscribe(res => {
            this.categories = res;
        })
        this.getproducts();
    }

    async getproducts() {
        this.service.getallProducts(this.shop).subscribe(res => {
            this.products = res;
            this.unfilteredProducts = res;
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
        this.shopType = localStorage.getItem('type');
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

    addRestaurant() {
        this.Toast('uploading...');
        let data: Restaurant = {
            "Restaurant": this.shop,
            "Meal": this.restaurantForm.value.Meal,
            "category": this.restaurantForm.value.category,
            "currentprice": this.restaurantForm.value.currentprice,
            "shopID": this.user,
            "date": new Date()
        }
        console.log(data);
        this.fs.collection(this.shop).add(data).then(res => {
            this.restaurantForm.reset();
            this.category = '';
            this.upload.presentToast('Meal uploaded successful');
        }).catch(err => {
            console.log(err);
        })
    }

    addRecipes() {
        this.Toast('uploading...');
        let data: Recipes = {
            "category": this.recipesForm.value.category,
            "currentprice": this.recipesForm.value.currentprice,
            "image": this.recipesForm.value.image,
            "ingridients": this.recipesForm.value.ingridients,
            "persons": this.recipesForm.value.persons,
            "recipe": this.recipesForm.value.recipe,
            "shop": this.shop,
            "shopID": this.user,
            "Date": new Date()
        }
        console.log(data);
        this.fs.collection(this.shop).add(data).then(res => {
            this.restaurantForm.reset();
            this.category = '';
            this.upload.presentToast('Recipes uploaded successful');
        }).catch(err => {
            console.log(err);
        })
    }

    async addProduct() {
        this.Toast('Uploading product...');
        // alert(1);
       await  this.uploadTostorage(this.image);
        // alert('shop => ' + this.shop);
        let data: Product = {
            "shop": this.shop,
            "currentprice": this.productForm.value.currentprice,
            "quantity": this.productForm.value.quantity,
            "product": this.productForm.value.product,
            "image": this.image,
            "status": this.productForm.value.status,
            "stock": this.productForm.value.stock,
            "category": this.productForm.value.category,
            "description": this.productForm.value.description,
            "barcode": this.productForm.value.barcode,
            "date": new Date()
        }
        console.log(data);
        this.fs.collection(this.shop).add(data).then(res => {
            this.productForm.reset();
            this.category = '';
            this.image = '';
            this.upload.presentToast('Product uploaded successfully');
            // alert(2)
             this.loading.dismiss();
        }).catch(err => {
            // alert(err);
            this.loading.dismiss();
            // alert(3)
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

    async Toast(msg) {
        this.loading = await this.loader.create({
            message: msg,
            // duration: 2000,
        });
        await this.loading.present();
    }

    async newProductUploadImage() {
        const actionSheet = await this.asc.create({
            header: "Select Image Source",
            buttons: [
                {
                    text: 'Camera',
                    handler: () => {
                        this.openCamera();
                    }
                },
                {
                    text: 'Gallery',
                    handler: () => {
                        this.getImageGallery();
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


    async openCamera() {
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
            const results = await this.camera.getPicture(options);
            const image = `data:image/jpeg;base64,${results}`;
            this.image = image;
        }
        catch (e) {
            console.log(e);
        }
    }
    sanitizeBase64Path(ImagePath) {
        var copyPath = ImagePath;
        var splitPath = copyPath.split('/');
        var imageName = splitPath[splitPath.length - 1];
        var filePath = ImagePath.split(imageName)[0];
        this.file.readAsDataURL(filePath, imageName).then(base64 => {
          this.image = base64;
        }, error => {
          alert('Error in sanitizing image' + error);
        });
    }

    async getImageGallery() {
        this.imagePicker.hasReadPermission().then(
            (result) => {
                if (result == false) {
                    this.imagePicker.requestReadPermission();
                }
                else if (result == true) {
                    this.imagePicker.getPictures({
                        maximumImagesCount: 1
                    }).then(
                        (results) => {
                            for (var i = 0; i < results.length; i++) {
                                this.cropService.crop(results[i], { quality: 75 }).then(newImage => {
                                    this.sanitizeBase64Path(newImage.split('?')[0]);
                                }
                                ).catch(error => alert("Error cropping image" + error));
                            }
                        }, (err) => alert(err)
                    ).catch(err => console.log(err));
                }
            }, (err) => {
                alert(err);
            }).catch(err => alert(err))
    }


    uploadTostorage(image) {
        // alert(image);
        const pictures = this.st.storage.ref('Products' + '/' + this.date);
        pictures.putString(image).then(url => {
            url.ref.getDownloadURL().then(url => {
                this.image = url;
                // alert('image URL ' + this.image);
            }).catch(error => {
                // alert('get url error ' + error);
            })
        }).catch(error => {
            // alert('put to storage error ' + error);
        })
        // alert('image URL ' + this.image);
    }
}
