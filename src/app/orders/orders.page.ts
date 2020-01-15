import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ModalController, ToastController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  
//variables

      prod ;
      total ;
      userDetail = [];

   constructor(
     private modalCtrl : ModalController,
     private service: FirestoreService,
     private navCtrl: Router,
     private fs: AngularFirestore,
     private ts: ToastController
   ) { 
     this.service.hiddenTabs = true ;
      this.prod = this.service.getItems();
      console.log(this.prod);
      let id = this.prod.userID;
      this.getCustomerDetails(id);

   }


   close(){
     this.service.hiddenTabs = false ;
     this.navCtrl.navigate(['tabs/dashboard'])
   }
  ngOnInit() {
  }
  getTotalCart() {
    return this.total = this.prod.products.reduce((a,b) => a + (b.count * b.currentprice),0) ;
    }
  //Decline order
  decline(id){
    let ref = this.fs.collection('Orders').doc(id);
    ref.update(
      {status: 'Decline'}
    )
      this.toast('Order decline successful').then( 
        res => {
               this.navCtrl.navigate(['tabs/dashboard'])
              }
      )
  }
  getCustomerDetails(id){
    this.service.getUserDetails(id).valueChanges().subscribe(res => {
      this.userDetail = res ;
      console.log(res)
    })
  }
  //accept order
  accept(id){
    let ref = this.fs.collection('Orders').doc(id);
    ref.update(
      {status: 'Accepted'}
    )
    this.toast('Order Accept successful').then( 
      res => {
             this.navCtrl.navigate(['tabs/dashboard'])
            }
    )
  }

  //toast
      async toast(data){
        const toasted = await this.ts.create({
          message: data,
          duration: 2000
        })
        toasted.present();
      }
}
