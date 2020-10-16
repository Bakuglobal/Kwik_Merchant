import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { IonSlides, ModalController } from '@ionic/angular';
import { DatabaseService } from '../database.service';
import { Order } from '../models/order';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
    @ViewChild('slide',{static:false}) slides: IonSlides;
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
        initialSlide:0,
        slidesPerView: 7,
    };
    deliveryInitialData: Order[] = [];
    pickPayInitialData: Order[] = [];
    currentMonth: any;
    currentYear: any;
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    days   = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    daysOfCurrentMonth = [];
    currentDay: any;
    allOrd = false ;

    constructor(
        private fs: AngularFirestore,
        private navCtrl: Router,
        private service: FirestoreService,
        private modal: ModalController,
        private db: DatabaseService,
    ) {
        this.service.hiddenTabs = false;

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
                        this.DeliveryOrders = this.deliveryInitialData;
                        this.PickPayOrders = this.pickPayInitialData;
                    }
                },
                {
                    text: 'Done',
                    handler: (res) => {
                        let newDate = Number(res.day.text);
                        console.log(newDate);
                        this.formatDate(newDate)
                    }
                }
            ]
        }
    }

    // GET DAYS OF THE CURRENT MONTH
    getDaysOfTheCurrentMonth() {
        let totalDays = this.extractDays(this.date.getMonth(), this.date.getFullYear());

        console.log("======= GET TOTAL DAYS ======");
        console.log(totalDays);

        for (var i = 1; i < totalDays+1; i++) {
            let element = {day:i};
            this.daysOfCurrentMonth.push(element);
        }
    }
    

    // EXTRACT DAYS 
    extractDays(month, year) {
        return new Date(year, month+1, 0).getDate();
    }

    getDay(y, m, d) {  
        if(d === this.currentDay){
            this.slides.slideTo(d-1,500);
        }
        // let days = ['Sunday','Monday','Tuesday', 'Wednesday','Thursday','Friday','Saturday']; 
        let day = new Date(y, m, d); 
        return d && this.days[day.getDay()];
    }

    // RETURN NAME
    returnName(date) {
        return this.days[date];
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
        this.date = new Date();
        this.currentYear  = this.date.getFullYear();
        this.currentMonth = this.months[this.date.getMonth()];
        this.currentDay   = this.date.getDate();
        console.log("============ GET DAY =======");
        console.log(this.currentDay);
        console.log(this.date.getDate());
        console.log("=========== END GET DAY =======");

        this.getDaysOfTheCurrentMonth();
        console.log("=========== DAYS OF THE CURRENT MONTH  =======");
        console.log(this.daysOfCurrentMonth);
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
            this.formatDate(this.date.getDate());
            this.loader = false;
        });
    }
    sortDeliveryOrders() {
        return this.DeliveryOrders.sort((a, b) => {
            if (a.status === 'open' ) { return -1 } else { return 1 }
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
        // get orders for delivery from this.Myorders
        this.DeliveryOrders = this.filter('deliver');
        console.log('delivery orders',this.DeliveryOrders);
        this.deliveryInitialData = this.DeliveryOrders;

        // filter them to current month
        this.DeliveryOrders = this.filterOrdersToCurrentMonth();
        console.log("==== This month Orders ====");
        console.log('delivery orders for this month',this.DeliveryOrders);

        // sort the delivery orders for this month
        this.DeliveryOrders = this.sortDeliveryOrders();
        console.log('sorted delivery orders for this month',this.DeliveryOrders);

        // remove the complete delivey orders for this month
        this.removeCompleteOrders(this.DeliveryOrders);
        console.log("========= final orders array list =========");
        console.log('delivery orders without complete orders',this.DeliveryOrders);
        

        this.Deliverycount = 0;
        this.DeliveryOrders.forEach(item => {
            if (item.status == 'open' && item.status == 'Ready' || item.status == 'canceled') {
                this.Deliverycount++;
            }
        });
    }

    filterOrdersToCurrentMonth() {
        return this.deliveryInitialData.filter(item => {
            console.log( item.Date.toDate().getMonth(),this.date.getMonth())
          return  item.Date.toDate().getMonth()===this.date.getMonth();
        })
    }

    // FILTER PICKPAY
    filterPickPay() {
        // get orders for delivery from this.Myorders
        this.PickPayOrders = this.filter('pick');
        console.log('pick orders',this.PickPayOrders);
        this.pickPayInitialData = this.PickPayOrders;

         // filter them to current month
        this.PickPayOrders = this.filterPickPayToCurrentMonth();
        console.log("==== This month Orders ====");
        console.log('pick orders for this month',this.PickPayOrders);

         // sort the delivery orders for this month
        this.PickPayOrders = this.sortPickPayOrders();
        console.log('sorted pick orders for this month',this.PickPayOrders);

        // remove the complete delivey orders for this month
        this.removeCompleteOrders(this.PickPayOrders);
        // this.pickPayInitialData = this.PickPayOrders;
        console.log("========= final orders array list =========");
        console.log('pick orders without complete orders',this.PickPayOrders);

        this.PickPayCount = 0;
        this.PickPayOrders.forEach(item => {
            if (item.status == 'open' || item.status == 'Ready' || item.status == 'canceled') {
                this.PickPayCount++;
            }
        });
    }


    filterPickPayToCurrentMonth() {
        return this.pickPayInitialData.filter(item => {
          return  item.Date.toDate().getMonth()===this.date.getMonth();
        })
    }

    filter(check) {
        return this.Myorders.filter(item => {
            return item.Delivery.toLowerCase().indexOf(check.toLowerCase()) > -1;
        });
    }
    updateCounts(){
        this.Deliverycount = 0 ;
        this.DeliveryOrders.forEach(item => {
            if (item.status == 'open' || item.status == 'Ready' || item.status == 'canceled') {
                this.Deliverycount++;
            }
        });
        this.PickPayCount = 0
        this.PickPayOrders.forEach(item => {
            if (item.status == 'open' || item.status == 'Ready' || item.status == 'canceled') {
                this.PickPayCount++;
            }
        });
    }

    // REMOVE COMPLETE ORDER
    removeCompleteOrders(arr:Order[]){
        let tempArr: Order[] = arr;
        if(tempArr.length > 0) {
            tempArr.forEach(item => {
                if(item.status == 'complete') {
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

    // FORMAT DATE
    formatDate(date) {
        this.allOrd = false;
        this.currentDay = date;
        let delivaryTemp = this.deliveryInitialData;
        let pickPayTemp = this.pickPayInitialData;
        this.DeliveryOrders = this.filterByDate(date, delivaryTemp);
        this.PickPayOrders  = this.filterByDate(date, pickPayTemp);
        this.updateCounts();
    }
    allOrders(){
        this.allOrd = true ;
        this.filterDelivery();
        this.filterPickPay();
        this.updateCounts();
    }

    // FILTER BY DATE
    filterByDate(date, arr) {
        return arr.filter(item => {
            return item.Date.toDate().getDate() == date;
        })
    }





}
