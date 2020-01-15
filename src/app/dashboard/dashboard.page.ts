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
  docID = [] ;
  shopDocID = []
  date:  Date ;
  userDetails: Shop ;
  userID;
  login = false ;
  loader = true ;
  postsObserver ;
  orderd;

  constructor(
    private fs: AngularFirestore,
    private navCtrl: Router,
    private service: FirestoreService,
    private modal: ModalController,
    
  ) { 
    this.service.hiddenTabs = false ;
    
  }

  ngOnInit() {
    const _this = this; // 'this' inside 'subscribe' refers to the observable object

    this.date = new Date() ;
    this.userID = localStorage.getItem('userID') ;
    if(this.userID != null){
      console.log('Today is date ==> '+ this.date)
      this.getShop();
      this.Orders();
      
      
    }else{
      this.login = true ;
    }

  // this.postsObserver = this.service.getOrders();
  // this.postsObserver
  //   .subscribe({
  //     next(posts) {
  //       _this.Myorders.push(posts);
  //       console.log(_this.Myorders);
  //       _this.loader = false ;
  //     },
  //     error(error) { console.log(error); }, // optional
  //   });
  }

  
  

  //to sales page
  sales(){
    this.navCtrl.navigate(['tabs/sales']);
  }
  //to stock page
  stock(){
    this.navCtrl.navigate(['tabs/stock'])
  }
  //to orders stats page
  orders(){
    this.navCtrl.navigate(['tabs/order-stats']);
  }


  //get the shop name
 async   getShop(){
      return await this.service.getShop(this.userID).onSnapshot(query => {
      query.docChanges().forEach(change => {
        if(change.type == 'added'){
          console.log(change.doc.data())
         this.shopDocID.push(change.doc.id);
         this.userDetails = change.doc.data() ;
  
        }
        if(change.type == 'modified'){
          console.log(change.doc.data())
  
  
        }
        if(change.type == 'removed'){
          console.log(change.doc.data())
  
        }
      })
      this.Orders();
    })
  
    console.log(this.userDetails);
  }
//get orders from firestore
 async Orders(){

  return await this.fs.collection('Orders').ref.where('shop', '==', 'Kakila Organic').where('status','==','open')
    .onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          console.log('New oder: ', change.doc.data());
          this.docID.push(change.doc.id);
          this.Myorders.push(change.doc.data());
                  
        } 
        if (change.type === 'modified') {
          console.log('Modified order: ', change.doc.data());
          //find index of product in local array
          let id = change.doc.id ;
          let index = this.docID.indexOf(id)
 
          let modified =  change.doc.data() ;
          
          //replace the product in the local array <--Myorders--> with the modified one
          this.Myorders[index] = modified;
 
          } 
        if (change.type === 'removed'){
          console.log('Removed order: ', change.doc.data());
          //find index of product in local array
          let id = change.doc.id ;
          let index = this.docID.indexOf(id)
 
          let removed =  change.doc.data() ;
          
          //remove the order from the local array <--Myorders--> 
          this.Myorders.splice(index,1);
         
        }
      });
      this.loader = false ;
  });
  
  }
 

 //view order
 async openOrder(item,index){
   console.log(item)
   this.service.setItems(item,this.docID[index]);
   this.service.hiddenTabs = true ;
   this.navCtrl.navigate(['tabs/orders']);
 } 

}
