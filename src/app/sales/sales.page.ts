import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { Platform } from '@ionic/angular';
import { Chart } from 'chart.js';

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

    constructor(
        private navCtrl: Router,
        private service: FirestoreService,
        private platform: Platform,
    ) {
        this.service.hiddenTabs = true;
    }

    ngOnInit() {

    }

    ionViewDidEnter() {
        // this.shopname = this.db.getshopname();
        this.shopname = "Kakila Organic";
        console.log("====SHOP NAME ======");
        console.log(this.shopname);
        this.getOrders();
        this.createBarChart();
    }


    // GET ORDERS
    getOrders() {
        let now = new Date();
        let onejan = new Date(now.getFullYear(), 0, 1);
        let week = Math.ceil((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
        console.log("===WEEK NUMBER===");
        console.log(week);

        this.service.getOrders(this.shopname).valueChanges().subscribe(res => {
            this.orders = res.filter(item => {
                return item.Date.toDate().getMonth() === this.date.getMonth();
            });
            console.log(this.orders);
        })
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

    // FILTER BY WEEK
    filterByWeek() {
        console.log("===== FILTER BY WEEK ======");
        this.getOrders();
    }

    // FILTER BY MONTH
    filterByMonth() {
        console.log("===== FILTER BY MONTH ======");
        this.service.getOrders(this.shopname).valueChanges().subscribe(res => {
            this.service.getOrders(this.shopname).valueChanges().subscribe(res => {
                this.orders = res.filter(item => {
                    return item.Date.toDate().getMonth()===this.date.getMonth();
                });
                console.log(this.orders);
            })
        })
    }

    // FILTER BY YEAR
    filterByYear() {
        console.log("===== FILTER BY YEAR ======");
        this.service.getOrders(this.shopname).valueChanges().subscribe(res => {
            this.service.getOrders(this.shopname).valueChanges().subscribe(res => {
                this.orders = res.filter(item => {
                    return item.Date.toDate().getFullYear()===this.date.getFullYear();
                });
                console.log(this.orders);
            })
        })
    }

    // CREATE BAR CHART
    createBarChart() {
        let labelArr:any = [];
        this.orders.forEach(element => {
            if(labelArr.includes(labelArr)) {
                // Do nothing
            } else {
                labelArr.push(element['username']);
            }
            console.log("===LABEL HERE===");
            console.log(element);
            
        });
        this.line = new Chart(this.lineChart.nativeElement, {
            type: 'line',
            height: 400,
            data: {
                labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
                datasets: [{
                    label: 'Sales Report',
                    data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
                    backgroundColor: '#00ade5', // array should have same number of elements as number of dataset
                    borderColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }


}


