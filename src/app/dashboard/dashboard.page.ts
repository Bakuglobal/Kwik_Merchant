import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { ModalController } from '@ionic/angular';
import { DatabaseService } from '../database.service';
import { Order } from '../models/order';
import { timeout } from 'rxjs/operators';

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
    DeliveryOrders: Order[] = [];
    PickPayOrders: Order[] = [];
    active = "Deliveries";
    Deliverycount = 0;
    PickPayCount = 0;
    customPickerOptions: any;
    slideOptions = {
        slidesPerView: 7,
    };
    deliveryInitialData: Order[] = [];
    pickPayInitialData: Order[] = [];

    constructor(
        private fs: AngularFirestore,
        private navCtrl: Router,
        private service: FirestoreService,
        private modal: ModalController,
        private db: DatabaseService,
    ) {
        this.service.hiddenTabs = false;
        this.date = new Date();

        this.customPickerOptions = {
            buttons: [
                {
                    text: 'Cancel',
                    handler: () => {
                        console.log('Clicked Log. Do not Dismiss.');
                        return true;
                    }
                },
                {
                    text: 'This month',
                    handler: (res) => {
                        // let newDate = Number(res.day.text);
                        // console.log("=====BUTTON=====");
                        this.DeliveryOrders = this.deliveryInitialData;
                        this.PickPayOrders = this.pickPayInitialData;
                    }
                },
                {
                    text: 'Done',
                    handler: (res) => {
                        let newDate = Number(res.day.text);
                        console.log("=====BUTTON=====");
                        console.log(newDate);
                        this.formatDate(newDate)
                        // this.myOpenOrders = this.filterByDate(newDate);
                    }
                }

            ]
        }

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
        this.userID = localStorage.getItem('user');
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
            this.DeliveryOrders = this.filterItems();
            this.PickPayOrders = this.filterItems();
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
    async getShop() {
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

            console.log("======================");
            console.log(this.Myorders);
            console.log("=======================");


            this.filterDelivery();
            this.filterPickPay();
            this.loader = false;
        });
    }
    sortDeliveryOrders() {
        return this.DeliveryOrders.sort((a, b) => {
            if (a.status === 'open') { return -1 } else { return 1 }
        })
    }

    sortPickPayOrders() {
        return this.PickPayOrders.sort((a, b) => {
            if (a.status === 'open') { return -1 } else { return 1 }
        })
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
            if (item.status == 'open' || item.status == 'Ready') {
                this.Deliverycount++;
            }
        });
        console.log("========= FILTER DELIVERY 1 =========");
        this.DeliveryOrders = this.sortDeliveryOrders();
        console.log(this.DeliveryOrders);
        this.removeCompleteOrders(this.DeliveryOrders);
        console.log("========= FILTER DELIVERY 2 =========");
        console.log(this.DeliveryOrders);
        this.deliveryInitialData = this.DeliveryOrders;
    }
    filterPickPay() {
        this.PickPayOrders = this.filter('I will pick it');
        this.PickPayCount = 0;
        this.PickPayOrders.forEach(item => {
            if (item.status == 'open' || item.status == 'Ready') {
                this.PickPayCount++;
            }
        });
        this.PickPayOrders = this.sortPickPayOrders();
        this.removeCompleteOrders(this.PickPayOrders);
        this.pickPayInitialData = this.PickPayOrders;
    }

    filter(check) {
        return this.Myorders.filter(item => {
            return item.Delivery.toLowerCase().indexOf(check.toLowerCase()) > -1;
        });
    }


    // REMOVE COMPLETE ORDER
    removeCompleteOrders(arr:Order[]){
        let tempArr: Order[] = arr;
        if(tempArr.length > 0) {
            tempArr.forEach(item => {
                if(item.status == 'canceled' || item.status == 'complete') {
                    let index = arr.indexOf(item);
                    console.log("========   ARR 1 1   ======");
                    console.log(index);
                    arr.splice(index, 1);
                    console.log("========   ARR 1 2   ======");
                    console.log(arr);
                } 
            })
        } 
    }

    formatDate(date) {
        let delivaryTemp = this.deliveryInitialData;
        let pickPayTemp = this.pickPayInitialData;
        this.DeliveryOrders = this.filterByDate(date, delivaryTemp);
        this.PickPayOrders  = this.filterByDate(date, pickPayTemp);
    }

    filterByDate(date, arr) {
        return arr.filter(item => {
            return item.Date.toDate().getDate() == date;
        })
    }





}
