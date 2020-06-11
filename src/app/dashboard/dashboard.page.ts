import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { Shop } from '../models/shops';
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
  filterOrder;
  searchTerm;
  date: Date;
  shopname;
  userID;
  login = false;
  loader = true;
  search = false;
  inputSearch = false;
  count = 0;
  DeliveryOrders = [];
  PickPayOrders = [];
  active = "Deliveries";
  Deliverycount = 0;
  PickPayCount = 0;

  constructor(
    private fs: AngularFirestore,
    private navCtrl: Router,
    private service: FirestoreService,
    private modal: ModalController,
    private db: DatabaseService,
  ) {
    this.service.hiddenTabs = false;
    this.date = new Date();
    
  }
  // scroll events
  onScroll(event) {
    if (event.detail.scrollTop === 148) {
      this.inputSearch = true;
    } else {
      this.inputSearch = false;
    }
  }
  // ionviewwill enter function
  ionViewWillEnter() {
    this.getShop();

  }
  changeCategory(event) {
    if (event.detail.value === 'delivery') {
      this.active = "Deliveries";
    }
    if (event.detail.value === "pick&pay") {
      this.active = "PickPay";
    }
  }
  getCount() {
    return this.count;
  }
  // oninit method

  ngOnInit() {
    this.userID = localStorage.getItem('userID');
    console.log(this.userID);
    if (this.userID != null) {
      // this.getOrders();
    } else {
      this.login = true;
    }
    this.service.shopFirst();
  }
  // show searchbar
  showsearch() {
    if (this.search === false) {
      this.search = true;
    } else {
      this.search = false;
    }
  }
  // filter searchbar
  setFilteredItems() {
    if (this.searchTerm !== null || this.searchTerm !== '') {
      // this.Myorders = this.filterItems();
      this.readyOrders = this.filterItems();
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
    this.service.hiddenTabs = true;
    this.navCtrl.navigate(['tabs/sales']);
  }
  // to stock page
  stock() {
    this.service.hiddenTabs = true;
    this.navCtrl.navigate(['tabs/stock']);
  }
  // to orders stats page
  orders() {
    this.service.hiddenTabs = true;
    this.navCtrl.navigate(['tabs/order-stats']);
  }

  // count unprepared orders of the day

  // get the shop name
  async  getShop() {
    this.shopname = localStorage.getItem('shop');
    console.log(this.shopname);
    this.getOrders();

    //  this.getDeliveryOrders();
  }
  // get orders from firestore
  getOrders() {
    this.service.getTodaysOrders(this.shopname).valueChanges().subscribe(res => {
      this.Myorders = res;
      this.filterOrder = res;
      console.log(this.Myorders);
      this.filterDelivery();
      this.filterPickPay();
      this.loader = false;
      if (this.Myorders.length > 0) {
        this.count = 0;
        let count = 0;
        this.Myorders.forEach(item => {
          if (item.status == 'open') {
            count++;
          }
        });
        this.count = count;
      }
    });
  }

  // view order
  openOrder(item) {
    console.log(item);
    this.service.setItems(item);
    this.service.hiddenTabs = true;
    this.navCtrl.navigate(['tabs/orders']);
  }
  // filter delivery orders
  filterDelivery() {
    this.DeliveryOrders = this.filter('Deliver it to me');
    this.Deliverycount = 0;
    this.DeliveryOrders.forEach(item => {
      if (item.status == 'open') {
        this.Deliverycount++;
      }
    });

  }
  filterPickPay() {
    this.PickPayOrders = this.filter('I will pick it');
    this.PickPayCount = 0;
    this.PickPayOrders.forEach(item => {
      if (item.status == 'open') {
        this.PickPayCount++;
      }
    });
  }
  filter(check) {
    return this.Myorders.filter(item => {
      return item.Delivery.toLowerCase().indexOf(check.toLowerCase()) > -1;
    });
  }

  
}
