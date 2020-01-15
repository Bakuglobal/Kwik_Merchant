import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Shop } from '../models/shops' ;
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  hiddenTabs = false ;
  products = [] ;
  categories = [] ;
  userDetails : Shop ;
  items ;

  constructor(
    private fauth: AngularFireAuth,
    private http: HttpClient,
    private fs: AngularFirestore,
    public db: AngularFireDatabase,
  
  ) { }

  async UserID(){
    let id = this.fauth.auth.currentUser.uid ;
    return  id ;
  }

// Get all products from digital ocean database 
 allProducts(){
  let header  = new HttpHeaders () ;
     header.append('Content-Type','application/json');
     header.append('Access-Control-Allow-Origin','*');
  return this.http.get('https://kwik-db-api.glitch.me/api/allProducts',{headers: header})
  
}

//Get all categories of products
 allCategories(){
  let header  = new HttpHeaders () ;
     header.append('Content-Type','application/json');
     header.append('Access-Control-Allow-Origin','*');
  return this.http.get('https://kwik-db-api.glitch.me/api/allCategories',{headers: header})
}

//get shop name
 getShop(id){
   return this.fs.collection('shops').ref.where('userID','==',id);
}

//set order for view
setItems(item,index){
  this.items = item ;
  this.items.docID = index ;
}
getItems(){
  return this.items ;
}
 
// //Get orders
//     async Orders(){
//   return new Observable(observer => {
//         const unsubscribe = this.fs.collection('Orders').ref.where('shop', '==', 'Kakila Organic').where('status','==','open')
//         .onSnapshot(querySnapshot => {
//           querySnapshot.docChanges().forEach(change => {
//            return change ;
//           });
//       });
      
//       }
//       })
//     }
getOrders() {
      let orders = [];
      return new Observable(observer => {
        const unsubscribe = this.fs.collection("Orders").ref.where('shop', '==', 'Kakila Organic').where('status','==','open')
        .onSnapshot(querySnapshot => {
          querySnapshot.forEach(function(doc) {
            orders.push(doc.data());
          });
    
            observer.next(orders);
          });
    
        return () => {
          unsubscribe();
        };
      });
    }  
    getUserDetails(key) {
      return this.db.list('users', ref => {
        let q = ref.orderByKey().equalTo(key);
        return q;
      });
    }  

}
