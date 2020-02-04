import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Router } from '@angular/router';
import { Customer } from '../models/customer';
import { AlertController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  customer = [] ;
  shop ;

  constructor(
    private service: FirestoreService,
    private navCtrl: Router,
    private altCntrl: AlertController,
    private fs: AngularFirestore,
    private toast:  ToastController
  ) 
  { 
    this.service.hiddenTabs = true ;
    this.shop = localStorage.getItem('shop') ;
    this.getCustomers();

  }

  ngOnInit() {
  }

  close(){
    this.service.hiddenTabs = false ;
    this.navCtrl.navigate(['tabs/dashboard']);
  }
 async  addCustomer(){
   const alert = await this.altCntrl.create({
     header: 'Enter customer Details',
     inputs: [
       {
         name: 'name',
         type: 'text',
         id:'name',
         placeholder:'Enter Name '
       },
       {
        name: 'phone',
        type: 'text',
        id:'phone',
        placeholder:'Enter phone Number'
      },
      {
        name: 'email',
        type: 'text',
        id:'email',
        placeholder:'Enter Email '
      }
     ],
     buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: data => {
          console.log(data);
          this.saveCustomer(data);
        }
      }
    ]
   });
   await alert.present();
 }
 saveCustomer(data){
   const ref = this.fs.collection(this.shop+'_Customers') ;

   ref.add(data).then(res => {
     this.toaster('New customer added ');
   }).catch(error => {
     console.log(error);
     this.toaster('sorry an error occured');
   })
 }
 async toaster(msg){
   const ts = await this.toast.create({
     message: msg,
     duration: 2000,
     position: 'bottom'
   });
   await ts.present();
 }
 getCustomers(){
   const ref = this.fs.collection(this.shop+'_Customers') ;
  ref.valueChanges().subscribe(res => {
    this.customer = res ;
  })
 }

}
