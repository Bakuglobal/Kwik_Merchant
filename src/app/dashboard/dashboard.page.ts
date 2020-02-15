import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { Shop } from '../models/shops' ;
import { ModalController } from '@ionic/angular';
import { OrdersPage } from '../orders/orders.page';
import { User } from '../models/user';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

// variables

      Myorders = [];
      readyOrders = [];
      filterOrder ;
      searchTerm;
      date: Date ;
      shopname;
      userID;
      login = false ;
      loader = true ;
      search = false ;
      inputSearch = false ;

  constructor (
        private fs: AngularFirestore,
        private navCtrl: Router,
        private service: FirestoreService,
        private modal: ModalController,
        private db: DatabaseService
  )
   {
        this.service.hiddenTabs = false ;
        this.date = new Date() ;
  }
  // scroll events
  onScroll(event) {
    if (event.detail.scrollTop === 148) {
      this.inputSearch = true ;
    } else {
      this.inputSearch = false ;
    }
  }
// ionviewwill enter function
ionViewWillEnter() {
  this.getShop();
}
  // oninit method

        ngOnInit() {
          this.userID = localStorage.getItem('userID') ;
          console.log(this.userID);
          if (this.userID != null) {
            // this.getOrders();
          } else {
            this.login = true ;
          }
        }
  // show searchbar
        showsearch() {
          if (this.search === false ) {
            this.search = true ;
          } else {
            this.search = false ;
          }
        }
  // filter searchbar
        setFilteredItems() {
          if (this.searchTerm !== null || this.searchTerm !== '') {
            this.Myorders = this.filterItems();
            console.log(this.Myorders);
          }
        }
        filterItems() {
          return this.filterOrder.filter(item => {
            return item.OrderID.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
          });
        }


// to sales page
        sales() {
          this.service.hiddenTabs = true ;
          this.navCtrl.navigate(['tabs/sales']);
        }
// to stock page
        stock() {
          this.service.hiddenTabs = true ;
          this.navCtrl.navigate(['tabs/stock']);
        }
// to orders stats page
        orders() {
          this.service.hiddenTabs = true ;
          this.navCtrl.navigate(['tabs/order-stats']);
        }


// get the shop name
       async  getShop() {
         this.shopname = localStorage.getItem('shop');
         console.log(this.shopname);
         this.getOrders();
         this.getReadyOrders();
        }
// get orders from firestore
        getOrders() {
          this.service.getTodaysOrders(this.shopname).valueChanges().subscribe(res => {
              this.Myorders = res ;
              this.filterOrder = res ;
              console.log(this.Myorders);
              this.loader = false ;
            });
          }
//  get todays ready orders
getReadyOrders(){
  this.service.getReadyOrders(this.shopname).valueChanges().subscribe( res => {
    this.readyOrders =  res ;
    this.filterOrder = res ;
    console.log(this.readyOrders);
  })
}
// view order
       openOrder(item) {
        console.log(item);
        this.service.setItems(item);
        this.service.hiddenTabs = true ;
        this.navCtrl.navigate(['tabs/orders']);
      }

}
