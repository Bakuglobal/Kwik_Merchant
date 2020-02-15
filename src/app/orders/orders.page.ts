import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ModalController, ToastController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user';
import { CallNumber } from '@ionic-native/call-number/ngx';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  //variables

  prod;
  total;
  userDetail;
  view = false;
  isready = false ;

  constructor(
    private modalCtrl: ModalController,
    private service: FirestoreService,
    private navCtrl: Router,
    private fs: AngularFirestore,
    private ts: ToastController,
    private call: CallNumber
  ) {

    this.service.hiddenTabs = true;

  }
  // call the client
  callUserNumber(number) {
    console.log(number);
    this.call.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
  //  get orders
  ionViewDidEnter() {
    this.prod = this.service.getItems();
    console.log(this.prod);
    let id = this.prod.userID;
    this.getCustomerDetails(id);
    this.view = true;

  }

  // close order page
  close() {
    this.service.hiddenTabs = false;
    this.navCtrl.navigate(['tabs/dashboard'])
  }
  // on initilize page
  ngOnInit() {


  }
  //calculate total for items
  getTotalCart() {
    return this.total = this.prod.products.reduce((a, b) => a + (b.count * b.currentprice), 0);
  }

  // get customer details
  getCustomerDetails(id) {
    this.service.getCustomer(id).valueChanges().subscribe(res => {
      this.userDetail = res;
      console.log(res)
    })
  }
  // order is ready
  ready(id,user) {
    let ref = this.fs.collection('Orders').doc(id);
    ref.update(
      { status: 'Ready' }
    )
    this.toast('Notification send to'+ ''+ user).then(
      res => {
        // this.isready  = true ;
        this.navCtrl.navigate(['tabs/dashboard'])
      }
    )
  }
  // order is paid 
  paid(id) {
    let ref = this.fs.collection('Orders').doc(id);
    ref.update(
      { paid: 'True' }
    )
    this.toast('Order completed ').then(
      res => {
        this.navCtrl.navigate(['tabs/dashboard'])
      }
    )
  }
  //toast
  async toast(data) {
    const toasted = await this.ts.create({
      message: data,
      duration: 2000
    });
    toasted.present();
  }
}
