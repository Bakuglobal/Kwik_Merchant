import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { element } from 'protractor';
import { ModalController } from '@ionic/angular';
import { OrderPreviewPage } from '../order-preview/order-preview.page';
import { CallNumber } from '@ionic-native/call-number/ngx';


@Component({
  selector: 'app-order-stats',
  templateUrl: './order-stats.page.html',
  styleUrls: ['./order-stats.page.scss'],
})
export class OrderStatsPage implements OnInit {
   
    
    customPickerOptions: any;
    // variables
    top = 'past' ;
    open = false ;
    past = true ;
    ready = true ;
    canceled = false ;
    shopname;
    loader = true ;
    CustomerNumber: any ;
    date = new Date();
    active = "Deliveries";
    Deliveredcount = 0;
    PickAndCollectPayCount = 0;
    deliveredOrders = [];
    pickAndCollectOrders = [];
    monthDeliveriesCount = 0;
    monthPickAndCollectCount = 0;
    

    monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "December"
    ];  
    last3Months:any[] = []  

    
    constructor(
        private service: FirestoreService,
        private navCtrl: Router,
        private db: DatabaseService,
        private modal: ModalController,
        private call: CallNumber
    ) {
        this.service.hiddenTabs = true ;

    }

    

    ionViewWillEnter() {
        // this.shopname = this.db.getshopname();
        this.shopname = "Kakila Organic";
        console.log("====SHOP NAME ======");
        console.log(this.shopname);
        this.getLast3Months();
        this.getDeliveredOrders();
        this.getPickAndCollectOrders(); 
    }


    ngOnInit() { }

    // GET THE LAST 3 MONTHS
    getLast3Months() {
        this.last3Months = [];
        let today = new Date();
        for (let i = 0; i < 3; i++) {
            let month = this.monthNames[(today.getMonth() - (i+1))];
            let monthObj:any = {month:month};
            if(i==0) {
                monthObj.status = 'active';
            } else {
                monthObj.status = 'inactive';
            }
            this.last3Months.push(monthObj);
        }
        console.log("======= LAST THREE MONTHS ====");
        console.log(this.last3Months);
    }

    // GET DELIVERED ORDERS
    getDeliveredOrders() {
        this.Deliveredcount = 0;
        this.monthDeliveriesCount = 0;
        this.service.getDeliveriesOrders(this.shopname).valueChanges().subscribe(res => {
            console.log("======= DELIVERIES ORDERS ====");

            this.deliveredOrders = res.filter(item => {
                console.log("DATE => "+this.date.getMonth());
                let final_data = item.Date.toDate().getMonth()===this.date.getMonth()-1;
                if(final_data) {
                    this.Deliveredcount ++;
                    this.monthDeliveriesCount ++;
                }
                return final_data
            });

        })
        this.loader = false ;
    }

    // GET PICK AND COLLECT ORDERS
    getPickAndCollectOrders() {
        this.PickAndCollectPayCount  = 0;
        this.service.getPickAndCollectOrders(this.shopname).valueChanges().subscribe(res => {
            console.log("======= PICK AND COLLECT ORDERS ====");
            this.pickAndCollectOrders = res.filter(item => {
                console.log("DATE => "+this.date.getMonth());
                let final_data = item.Date.toDate().getMonth()===this.date.getMonth()-1;
                if(final_data) {
                    this.PickAndCollectPayCount ++;
                }
                return final_data
            });

        })
        this.loader = false ;
    }

    // FILTER DERLIVERED ORDERS BY MONTH
    filterByMonth(month, i) {
        // this.last3Months.reverse();
        this.last3Months.forEach((newMonth, index) => {
            if(i == index) {
                newMonth.status = 'active';
            } else {
                newMonth.status = 'inactive';
            }
        })
        this.Deliveredcount = 0;
        this.PickAndCollectPayCount = 0;
        console.log("==== MONTH ====");
        console.log(month);
        let monthNumber = this.monthNames.indexOf(month);
        console.log(monthNumber);
        // GET DELIVERIES BY MONTH
        this.service.getDeliveriesOrders(this.shopname).valueChanges().subscribe(res => {
            this.deliveredOrders = res.filter(item => {
                let final_deliveries_data = item.Date.toDate().getMonth()===monthNumber;
                if(final_deliveries_data) {
                    this.Deliveredcount ++;
                }
                return final_deliveries_data
            });
        })

        // GET PICK AND COLLECT BY MONTH
        this.service.getPickAndCollectOrders(this.shopname).valueChanges().subscribe(res => {
            this.pickAndCollectOrders = res.filter(item => {
                let final_pick_and_collect_data = item.Date.toDate().getMonth()===monthNumber;
                if(final_pick_and_collect_data) {
                    this.PickAndCollectPayCount ++;
                }
                return final_pick_and_collect_data
            });
        })
        this.loader = false ;
    }

    getMonthDeliveriesCount(month) {
        this.monthDeliveriesCount = 0;
        console.log("=== MONTH DELIVERIES COUNT YES ===");
        let monthNumber = this.monthNames.indexOf(month);
        console.log(monthNumber);
        return this.monthDeliveriesCount;
    }


    changeCategory(event) {
        if (event.detail.value === 'delivery') {
            this.active = "Deliveries";
        }
        if (event.detail.value === "pick&pay") {
            this.active = "PickPay";
        }
    }


    home() {
        this.service.hiddenTabs = false ;
        this.navCtrl.navigate(['tabs/dashboard']);
    }


    showMore(item) {
        item.show = true ;
        this.service.getNumber(item.userID).subscribe(res => {
        this.CustomerNumber = res.phone ;
        console.log("number",this.CustomerNumber);
        });
    }


    showLess(item) {
        item.show = false ;
        console.log('less');
    }


    async viewOrder(item) {
        console.log("====== VIEW MORE =====");
        console.log(item);
        // item.phone = this.CustomerNumber ;
        const mod = await this.modal.create({
            component: OrderPreviewPage,
            componentProps:
            item
          
        });
        await mod.present();
    }

    
    callCustomer(){
        let num = this.CustomerNumber.toString();
        this.call.callNumber(num, true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
    }
}
