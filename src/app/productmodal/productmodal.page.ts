import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

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
  productForm: FormGroup
  shop;
  loading;
  constructor(
    private navCtrl: Router,
    private service: FirestoreService,
    private location: Location,
    private formBuilder: FormBuilder,
    private load: LoadingController,
    private fs: AngularFirestore,
    private alert: AlertController

  ) {
    this.service.hiddenTabs = true;

    this.shop = localStorage.getItem('shop');

  }

  ngOnInit() {

  }
  ionViewDidEnter() {
    // get product details
    this.product = this.service.getProduct();
    console.log('product -->' + this.product);
    this.view = true;
    // get categories 
    this.service.getallcategories(this.shop).valueChanges().subscribe(res => {
      this.category = res;
    });
    this.productForm = this.formBuilder.group({
      product: [this.product.product],
      description: [this.product.description],
      currentprice: [this.product.currentprice],
      status: [this.product.status],
      quantity: [this.product.quantity],
      stock: [this.product.stock],
      barcode: [this.product.barcode],
      category: [this.product.category]
    });
  }

  back() {
    if(this.edit == true){
      this.alertShow('Would you like to save the changes you made');
    }else {
      this.location.back();
    }
  }
  saveChanges(id) {
    console.log(this.productForm.value);
    this.edit = false;
    this.presentloading('updating product ...');
    const ref = this.fs.collection(this.shop).doc(id) ;
    let data = this.productForm.value ;
    ref.update(data).then(res => {
      this.loading.dismiss();
      console.log(res);
      this.location.back();
    }).catch(error => {
      console.log(error);
    })
  }
 deleteProduct(id){
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
async alertShow(msg){
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
          this.saveChanges(this.product.id) ;
        }
      }
    ]
  });
  await alt.present();
}
async imageupdate(){
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
async confirmDelete(id){
  const alt = await this.alert.create({
    message: 'Do you want to remove this product from Inventory ?',
    buttons: [
      {
        text: 'No',
        role: 'cancel'
      },
      {
        text: 'Yes',
        handler: ()=>{
          this.deleteProduct(id);
        }
      }
    ]
  });
  await alt.present();
}

}
