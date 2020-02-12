import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Router } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { SettingsPage } from '../settings/settings.page';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { DatabaseService } from '../database.service';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {
// variables
products = [];
unfilteredProducts;
categories ;
category: string ;
shopname ;
  constructor(
    private navCtrl: Router,
    private service: FirestoreService,
    private Asc: ActionSheetController,
    private modal: ModalController,
    private fs : AngularFirestore,
    private db: DatabaseService
  ) { 
    this.service.hiddenTabs = true ;
    this.shopname = localStorage.getItem('shop');
    console.log(this.shopname);
  }
  ionViewDidEnter(){
   this.service.getallcategories(this.shopname).valueChanges().subscribe(res => {
      this.categories = res ;
      console.log(this.categories);
    })
    this.getproducts();
  }
  ngOnInit() {
  }
  getproducts(){
    this.service.getallProducts(this.shopname).subscribe(res => {
      this.products = res ;
    });
     console.log(this.products);
  }

  home(){
    this.service.hiddenTabs = false ;
    this.navCtrl.navigate(['tabs/dashboard'])
  }
  async  sortCategory(){
    const asc = await this.Asc.create({
      header: "Sort category in",
      buttons: [
        {
          text: 'ASC',
          handler: () => {
            console.log('asc');
          }
        },
        {
          text: 'DSC',
          handler: () => {
            console.log('asc');
          }
        }
      ]
    });
    asc.present() ;
  }
  async settings() {
    const mod = await this.modal.create({
      component: SettingsPage,
      componentProps: {}
    });
    mod.present();
  }
  addProduct(){
    this.navCtrl.navigate(['tabs/products']);
  }
  viewProduct(item) {
    this.service.hiddenTabs = true;
    this.service.setProduct(item);
    console.log(item)
    this.navCtrl.navigate(['tabs/productmodal']);
  }
}
