import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoadingController, AlertController, ActionSheetController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { AngularFireStorage } from '@angular/fire/storage';
import { File } from '@ionic-native/file/ngx';



@Component({
    selector: 'app-productmodal',
    templateUrl: './productmodal.page.html',
    styleUrls: ['./productmodal.page.scss'],
})
export class ProductmodalPage implements OnInit {
    // variables
    product;
    view = false;
    edit = false;
    category;
    shopForm: FormGroup;
    restaurantForm: FormGroup;
    recipesForm: FormGroup;
    shop;
    loading;
    shopType: any;
    image = '';
    date;


    constructor(
        private navCtrl: Router,
        private service: FirestoreService,
        private location: Location,
        private formBuilder: FormBuilder,
        private load: LoadingController,
        private fs: AngularFirestore,
        private alert: AlertController,
        private asc: ActionSheetController,
        private camera: Camera,
        private imagePicker: ImagePicker,
        private cropService: Crop,
        private st: AngularFireStorage,
        private file: File,
    ) {
        this.service.hiddenTabs = true;
        this.shop = localStorage.getItem('shop');
        this.date = new Date();
    }

    ngOnInit() {
        this.shopType = localStorage.getItem('type');
        console.log("===========TYPE============");
        console.log(this.shopType);
    }


    ionViewDidEnter() {
        // get product details
        this.product = this.service.getProduct();
        console.log('======== product =========');
        console.log(this.product);
        this.view = true;
        // get categories 
        this.service.getallcategories(this.shop).subscribe(res => {
            this.category = res;
        });

        // RESTAURANT FORM
        this.restaurantForm = this.formBuilder.group({
            Meal: [this.product.Meal],
            category: [this.product.category],
            currentprice: [this.product.currentprice],
        });

        // RECIPES FORM
        this.recipesForm = this.formBuilder.group({
            category: [this.product.category],
            currentprice: [this.product.currentprice],
            // image: ['', Validators.required],
            ingridients: [this.product.ingridients],
            persons: [this.product.persons],
            recipe: [this.product.recipe],
        });

        // SHOP FORM
        this.shopForm = this.formBuilder.group({
            product: [this.product.product],
            category: [this.product.category],
            stock: [this.product.stock],
            quantity: [this.product.quantity],
            currentprice: [this.product.currentprice],
            description: [this.product.description],
            // barcode: [this.product.barcode],
            // image: ['', Validators.required],
        });
    }

    back() {
        if (this.edit == true) {
            this.alertShow('Would you like to save the changes you made');
        } else {
            this.location.back();
        }
    }

    // UPDATING RESTAURANT PRODUCT
    updateRestaurant(id) {
        console.log(this.restaurantForm.value);
        this.edit = false;
        this.presentloading('Updating product ...');
        const ref = this.fs.collection(this.shop).doc(id);
        let data = this.restaurantForm.value;
        ref.update(data).then(res => {
            this.loading.dismiss();
            console.log(res);
            this.location.back();
        }).catch(error => {
            console.log(error);
        })
    }

    // UPDATING RECIPES PRODUCT
    updateRecipes(id) {
        console.log(this.recipesForm.value);
        this.edit = false;
        this.presentloading('Updating product ...');
        const ref = this.fs.collection(this.shop).doc(id);
        let data = this.recipesForm.value;
        ref.update(data).then(res => {
            this.loading.dismiss();
            console.log(res);
            this.location.back();
        }).catch(error => {
            console.log(error);
        })
    }

    // UPDATE SHOP PRODUCT
    updateShop(id) {
        console.log(this.shopForm.value);
        this.edit = false;
        this.presentloading('updating product ...');
        const ref = this.fs.collection(this.shop).doc(id);
        let data = this.shopForm.value;
        ref.update(data).then(res => {
            this.loading.dismiss();
            console.log(res);
            this.location.back();
        }).catch(error => {
            console.log(error);
        })
    }

    // DELETE PRODUCT
    deleteProduct(id) {
        this.presentloading('deleting product ...');
        this.fs.collection(this.shop).doc(id).delete().then(res => {
            this.loading.dismiss();
            this.location.back();
        }).catch(err => {
            console.log(err);
            this.loading.dismiss();
        });

    }

    async presentloading(msg) {
        this.loading = await this.load.create({
            message: msg,
        });
        await this.loading.present();
    }

    // SHOW ALERT
    async alertShow(msg) {
        const alt = await this.alert.create({
            message: msg,
            buttons: [
                {
                    text: 'No',
                    handler: () => {
                        this.location.back();
                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                        if (this.shopType === 'food') {
                            this.updateRestaurant(this.product.id);
                        } else if (this.shopType === 'recipes') {
                            this.updateRecipes(this.product.id);
                        } else if (this.shopType === 'Shops'){
                            this.updateShop(this.product.id);
                        } else {
                            console.log("Shop type not exits.");
                        }
                    }
                }
            ]
        });
        await alt.present();
    }

    // IMAGE UPDATE
    async imageupdate() {
        const alt = await this.alert.create({
            message: 'Image Update is disabled for now',
            buttons: [
                {
                    text: 'Close',
                    role: 'cancel'
                }
            ]
        });
        await alt.present();
    }

    // CONFIRM DELETE PRODUCT
    async confirmDelete(id) {
        const alt = await this.alert.create({
            message: 'Do you want to remove this product from Inventory ?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel'
                },
                {
                    text: 'Yes',
                    handler: () => {
                        this.deleteProduct(id);
                    }
                }
            ]
        });
        await alt.present();
    }


    async updateImageActionSheet() {
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
        const pictures = this.st.storage.ref('XXX' + '/' + this.date);
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
