import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { Shop } from '../models/shops' ;
import { ModalController } from '@ionic/angular';
import { OrdersPage } from '../orders/orders.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  Myorders = [];
  orderId = [] ;
  date:  Date ;
  userDetails: Shop ;
  userID;
  login = false ;
  loader = true ;

  constructor(
    private fs: AngularFirestore,
    private navCtrl: Router,
    private service: FirestoreService,
    private modal: ModalController
    
  ) { 
    this.service.hiddenTabs = false ;
  }

  ngOnInit() {
    this.date = new Date() ;
    this.userID = localStorage.getItem('userID') ;
    if(this.userID != null){
      console.log('Today is date ==> '+ this.date)
      this.getShop();
      
      
      
    }else{
      this.login = true ;
    }
  }
  


  //get the shop name
  async  getShop(){
     this.service.getShop(this.userID).onSnapshot(query => {
      query.docChanges().forEach(change => {
        if(change.type == 'added'){
          console.log(change.doc.data())
         this.orderId.push(change.doc.id);
         this.userDetails = change.doc.data() ;
  
        }
        if(change.type == 'modified'){
          console.log(change.doc.data())
  
  
        }
        if(change.type == 'removed'){
          console.log(change.doc.data())
  
        }
      });
      this.Orders();
    });
  
    console.log(this.userDetails);

  }

  //get orders 
async Orders(){

   this.fs.collection('Orders').ref.where('shop', '==', this.userDetails.Shopname).where('status','==','open')
   .onSnapshot(querySnapshot => {
     querySnapshot.docChanges().forEach(change => {
       if (change.type === 'added') {
         console.log('New oder: ', change.doc.data());
         this.Myorders.push(change.doc.data());
                 
       } 
       if (change.type === 'modified') {
         console.log('Modified order: ', change.doc.data());
               } 
       if (change.type === 'removed'){
         console.log('Removed order: ', change.doc.data());
        
       }
     });
 });
 
   this.loader = false ;
 }

 //view order
 async openOrder(item){
   console.log(item)
   this.service.setItems(item);
   this.service.hiddenTabs = true ;
   this.navCtrl.navigate(['tabs/orders']);
 } 

}
