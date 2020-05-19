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


  // variables
  top = 'past' ;
  open = false ;
  past = true ;
  ready = true ;
  canceled = false ;
  shopname;
  myOpenOrders = [] ;
  CanceledOrders = [] ;
  ReadyOrders = [] ;
  OpenOrderForFilter = [] ;
  TotalPastOrders = 0 ;
  TotalOpenOrders = 0 ;
  loader = true ;
  CustomerNumber: any ;


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
    this.shopname = this.db.getshopname();
    console.log(this.shopname);
    this.getOpenOrders();
    this.getcanceledOrders();
    this.getreadyOders();
  }
  ngOnInit() {
  }

  home() {
    this.service.hiddenTabs = false ;
    this.navCtrl.navigate(['tabs/dashboard']);

  }


  DaysegmentChanged(event) {
    // console.log(event.detail.value);
    switch (event.detail.value) {
      case 'Today':
        this.filterOpenOders(event.detail.value);
        console.log(event.detail.value);
        break;
      case 'Mon':
        this.filterOpenOders(event.detail.value);
        console.log(event.detail.value);
        break;
      case 'Tue':
        this.filterOpenOders(event.detail.value);
        console.log(event.detail.value);
        break;
      case 'Wed':
        this.filterOpenOders(event.detail.value);
        console.log(event.detail.value);
        break;
      case 'Thur':
        this.filterOpenOders(event.detail.value);
        console.log(event.detail.value);
        break;
      case 'Fri':
        this.filterOpenOders(event.detail.value);
        console.log(event.detail.value);
        break;
      case 'Sat':
        this.filterOpenOders(event.detail.value);
        console.log(event.detail.value);
        break;
      case 'Sun':
        this.filterOpenOders(event.detail.value);
        console.log(event.detail.value);
        break;
      default:
        break;
    }

  }
  TopsegmentChanged(event) {
    // console.log(event);
    switch (event.detail.value) {
      case 'canceled':
        this.past = true ;
        this.ready = false ;
        this.canceled = true ;
        console.log(event.detail.value);
        break;
      case 'ready':
        this.past = true ;
        this.ready = true ;
        this.canceled = false ;
        console.log(event.detail.value);
        break;
      default:
        break;
    }
  }
  openOrders() {
    if (this.top !== 'open') {
      this.top = 'open' ;
      this.open = true ;
      this.past = false ;
      this.canceled = false ;
      this.ready = false ;
      this.filterOpenOders('Today');
    }
  }
  pastOrders() {
    if (this.top !== 'past') {
      this.top = 'past' ;
      this.open = false ;
      this.past = true ;
      this.ready = true ;
    }
  }
  // get open orders
  getOpenOrders() {
    this.service.getOpenOders(this.shopname).valueChanges().subscribe(res => {
      this.myOpenOrders = res ;
      this.OpenOrderForFilter = res ;
      this.TotalOpenOrders = this.myOpenOrders.length ;
      this.loader = false ;
      console.log('open orders' + this.myOpenOrders);
    });
  }
  // get canceled orders
  getcanceledOrders() {
    this.service.getCanceledOrders(this.shopname).valueChanges().subscribe(res => {
      this.CanceledOrders = res ;
      this.loader = false ;
      console.log('canceled orders' + this.CanceledOrders);
    });
  }
  // get Ready orders
  getreadyOders() {
    this.service.getReadyOrders(this.shopname).valueChanges().subscribe(res => {
      this.ReadyOrders = res ;
      this.loader = false ;
      this.TotalPastOrders = this.ReadyOrders.length + this.CanceledOrders.length ;
      console.log('ready orders' + this.ReadyOrders);
    });
  }
  // filter open orders by day of pick up
  filterOpenOders(event) {
    const unfiltered = this.OpenOrderForFilter ;
    const filtered = [] ;
    // tslint:disable-next-line: no-shadowed-variable
    unfiltered.forEach( element => {
      if (element.pickDay === event) {
         filtered.push(element);
      } else {
        return ;
      }
      return ;
    });
    this.loader = false ;
    this.myOpenOrders = filtered ;
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
    item.phone = this.CustomerNumber ;
    const mod = await this.modal.create({
      component: OrderPreviewPage,
      componentProps: item
    });
    console.log(item);
    await mod.present();
  }
  callCustomer(){
    let num = this.CustomerNumber.toString();
    this.call.callNumber(num, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
}
