import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { Platform } from '@ionic/angular';
import { Chart } from 'chart.js';
import { DatabaseService } from '../database.service';
import { Console, count } from 'console';

@Component({
    selector: 'app-sales',
    templateUrl: './sales.page.html',
    styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {
    @ViewChild('lineChart', { static: false }) lineChart;


    // variables
    date = new Date();
    text = 'Week';
    line: any;
    colorArray: any;
    category: any;
    shopname;
    orders: any = [];
    price: any;
    monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]; 

    constructor(
        private navCtrl: Router,
        private service: FirestoreService,
        private platform: Platform,
        private db: DatabaseService,
    ) {
        this.service.hiddenTabs = true;
    }

    ngOnInit() {

    }

    ionViewDidEnter() {
        this.shopname = this.db.getshopname();
        // this.shopname = "Kakila Organic";
        console.log("====SHOP NAME ======");
        console.log(this.shopname);
        this.filterByMonth();
    }

    
    home() {
        this.service.hiddenTabs = false;
        this.navCtrl.navigate(['tabs/dashboard']);
    }

    segmentChanged(event) {
        // this.date
        this.text = event.detail.value;
    }

    edit() {
        if (this.text === 'Week') {
        }
    }

    
    // FILTER BY MONTH
    filterByYear() {
        console.log("===== FILTER BY YEAR ======");
        this.service.getOrders(this.shopname).valueChanges().subscribe(res => {
            this.orders = res.filter(item => {
                return item.Date.toDate().getFullYear();
            });
            console.log(this.orders);
            this.createBarChartForYear();
        })
    }

    // FILTER BY YEAR
    filterByMonth() {
        console.log("===== FILTER BY MONTH ======");
        this.service.getOrders(this.shopname).valueChanges().subscribe(res => {
            this.orders = res.filter(item => {
                return item.Date.toDate().getFullYear() === this.date.getFullYear();
            });
            console.log(this.orders);
            this.createBarChartForMonth();
        })
    }

    // CREATE BAR CHART
    createBarChartForMonth() {
        let labelArr: any = [];
        let totalArr: any = [];
        let price:any = [];
        let total:any = [];

        this.orders.forEach(element => {
            if(labelArr.includes(this.monthNames[(element.Date.toDate().getMonth())])) {
                // Do nothing
            } else {
                labelArr.push(this.monthNames[(element.Date.toDate().getMonth())]);
                console.log(this.monthNames[(element.Date.toDate().getMonth())]);
            }
        });

        labelArr.forEach(element1 => {
            this.orders.forEach(element2 => {
                if(this.monthNames[(element2.Date.toDate().getMonth())] === element1) {
                    console.log("=== Y ===");
                    console.log(element2);
                    element2.products.forEach(currentPrice => {
                        console.log("=== Y VALUES ===");
                        console.log(currentPrice.currentprice * currentPrice.count);
                        price.push(currentPrice.currentprice * currentPrice.count);
                    });
                }
            });
            console.log("===== PRICE HERE ======");
            console.log(price);
            total = price.reduce( (previousValue, currentValue) => previousValue + currentValue, 0);
            totalArr.push({y: total});
            console.log("===== TOTAL ======");
            console.log(totalArr);

        });

        this.line = new Chart(this.lineChart.nativeElement, {
            type: 'bar',
            height: 400,
            data: {
                labels: labelArr.reverse(),
                datasets: [{
                    label: 'Sales Report',
                    data: totalArr,
                    backgroundColor: '#00ade5', 
                    borderColor: 'rgb(38, 194, 129)', 
                    borderWidth: 1
                }]
            }
        });  
    }



    // CREATE BAR CHART
    createBarChartForYear() {
        let labelArr: any = [];
        let totalArr: any = [];
        let price:any = [];
        let total: any = [];

        this.orders.forEach(element => {
            if(labelArr.includes(element.Date.toDate().getFullYear())) {
                // Do nothing
            } else {
                labelArr.push(element.Date.toDate().getFullYear());
                console.log(element.Date.toDate().getFullYear());
            }
        });
        console.log("=== LABEL MONTH HERE ===");
        console.log(labelArr);

        labelArr.forEach(element1 => {
            this.orders.forEach(element2 => {
                if(element2.Date.toDate().getFullYear() === element1) {
                    console.log("=== Y ===");
                    console.log(element2);
                    element2.products.forEach(currentPrice => {
                        console.log("=== Y VALUES ===");
                        console.log(currentPrice.currentprice * currentPrice.count);
                        price.push(currentPrice.currentprice * currentPrice.count);
                    });
                }
            });
            console.log("===== PRICE HERE ======");
            console.log(price);
            total = price.reduce( (previousValue, currentValue) => previousValue + currentValue, 0);
            totalArr.push({y: total});
            console.log("===== TOTAL ======");
            console.log(totalArr);
        });

        this.line = new Chart(this.lineChart.nativeElement, {
            type: 'bar',
            height: 400,
            data: {
                labels: labelArr,
                datasets: [{
                    label: 'Sales Report',
                    data: totalArr,
                    backgroundColor: '#00ade5', 
                    borderColor: 'rgb(38, 194, 129)', 
                    borderWidth: 1
                }]
            }
        });  
    }


}


