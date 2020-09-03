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
import { StockAlert } from '../models/stockAlert';

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
show = false ;
myAlerts: StockAlert[];
  constructor(
    private navCtrl: Router,
    private service: FirestoreService,
    private Asc: ActionSheetController,
    private modal: ModalController,
    private fs : AngularFirestore,
    private db: DatabaseService,
  ) { 
    this.service.hiddenTabs = true ;
    this.getStockLimits();
    
  }
  ionViewDidEnter(){
    this.shopname = localStorage.getItem('shop');
    console.log(this.shopname);
   this.service.getallcategories(this.shopname).valueChanges().subscribe(res => {
      this.categories = res ;
      this.show = true ;
      console.log(this.categories);
    })
    this.getproducts();
  }
  ngOnInit() {
  }
  getproducts(){
    this.service.getallProducts(this.shopname).subscribe(res => {
      this.products = res ;
      this.unfilteredProducts = res ;
      console.log('products',this.products);
    });
     
  }
   // filter products
   filterProducts() {
    if (this.category !== null || this.category !== undefined) {
      console.log(this.category)
      this.products = this.filterItems();
      console.log(this.products);
    }
  }
  filterItems() {
    return this.unfilteredProducts.filter(item => {
      console.log(item.category);
      return item.category.toLowerCase().indexOf(this.category.toLowerCase()) > -1;
    });
  }


  home(){
    this.service.hiddenTabs = false ;
    this.navCtrl.navigate(['tabs/dashboard'])
  }
  async  sortCategory(){
    const asc = await this.Asc.create({
      header: "Sort category by Price in",
      buttons: [
        {
          text: 'Ascending Order',
          handler: () => {
            console.log('asc');
           this.products = this.products.sort(function(a, b){return a.currentprice - b.currentprice});
          }
        },
        {
          text: 'Descending Order',
          handler: () => {
            console.log('asc');
            this.products = this.products.sort(function(a, b){return b.currentprice - a.currentprice});
          }
        }
      ]
    });
    asc.present() ;
  }
  sortByPriceAsc(a,b){
    return a.currentprice - b.currentprice ;
  }
  sortByPriceDsc(a,b){
    return b.currentprice - a.currentprice ;
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
  getStockLimits(){
    this.db.getAlaerts(localStorage.getItem("user")).subscribe(res => {
      console.log(res);
      this.myAlerts = res ;
    })
  }
}
