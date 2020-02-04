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
  @ViewChild('lineChart', {static : false}) lineChart;


  // variables
  date ;
  text = 'Week';
  line: any;
  colorArray: any;
  category: any ;

  constructor(
    private navCtrl: Router,
    private service: FirestoreService,
    private platform: Platform
  ) {
    this.service.hiddenTabs = true ;
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.createBarChart();
  }
  createBarChart() {
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

  home() {
    this.service.hiddenTabs = false ;
    this.navCtrl.navigate(['tabs/dashboard']);

  }
  segmentChanged(event) {
    // this.date
    this.text = event.detail.value ;
  }
  edit() {
    if (this.text === 'Week') {

    }
  }

}
