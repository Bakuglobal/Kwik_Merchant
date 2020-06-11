import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Shop } from '../models/shops';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Order } from '../models/order';
import { Product} from '../models/product';
import { Category } from '../models/category';
import { map } from 'rxjs/operators';
import { Customer } from '../models/customer';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  // varaibles
  hiddenTabs = false;
  products = [];
  // categories = [];
  userDetails: Shop;
  items;
  user;
  extract ;
  product : Observable<Product>;
  cat: Observable<Category>;

  OderCollection: AngularFirestoreCollection<Order>;
  Shopdetails: AngularFirestoreCollection<Shop>;
  categories: AngularFirestoreCollection<Category>
  allproducts: AngularFirestoreCollection<Product>

  constructor(
    private fauth: AngularFireAuth,
    private http: HttpClient,
    private fs: AngularFirestore,
    public db: AngularFireDatabase,

  ) { }

  UserID() {
    const id = this.fauth.auth.currentUser.uid;
    return id;
  }
  // Get all products from digital ocean database
  allProducts() {
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get('https://kwik-db-api.glitch.me/api/allProducts', { headers: header });
  }
  // Get all categories of products
  allCategories() {
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Origin', '*');
    return this.http.get('https://kwik-db-api.glitch.me/api/allCategories', { headers: header });
  }
  // get shop name
  getShop(id) {
    return this.fs.collection('shops').ref.where('userID', '==', id);
  }
  // set user data
  setuser(user) {
    this.user = user;
  }
  // send user data
  getuser() {
    return this.user;
  }
  // set order for view
  setItems(item) {
    this.items = item;
    // this.items.docID = index ;
  }
  getItems() {
    return this.items;
  }
  // set product for view 
  setProduct(prod){
    this.product = prod ;
    console.log(this.product);
  }
  getProduct(){
    return this.product ;
  }
  // get open orders
  getOpenOders(shop) {
    return this.OderCollection = this.fs.collection('Orders', ref => {
      return ref.where('status', '==', 'open').where('shop', '==', shop).orderBy('Date', 'asc');
    });
  }
  getTodaysOrders(shop) {
    return this.OderCollection = this.fs.collection('Orders', ref => {
      return ref.where('shop', '==', shop).orderBy('Date', 'desc').where('pickDay', '==', 'Today');
    });
  }
  // getTodaysReadyOrders(shop) {
  //   return this.OderCollection = this.fs.collection('Orders', ref => {
  //     return ref.where('status', '==', 'Ready').where('shop', '==', shop).orderBy('Date', 'asc').where('pickDay', '==', 'Today');
  //   });
  // }
  // get past orders
  getReadyOrders(shop) {
    return this.OderCollection = this.fs.collection('Orders', ref => {
      return ref.where('status', '==', 'Ready').where('shop', '==', shop).orderBy('Date', 'asc');
    });
  }
  getCanceledOrders(shop) {
    return this.OderCollection = this.fs.collection('Orders', ref => {
      return ref.where('status', '==', 'canceled').where('shop', '==', shop).orderBy('Date', 'asc');
    });
  }
  // get user details
  getUserDetails(id) {
    return this.fs.collection('shops').doc(id);
  }
  // get customer Details
  getCustomer(id) {
    return this.fs.collection('users').doc(id);
  }
  //get all categories from firestore
    getallcategories(shop) {
   return  this.fs.collection<Category>('Categories').doc(shop);
  }

  // get all products
  getallProducts(shop){
    this.allproducts = this.fs.collection<Product>(shop, ref => {
      return ref.orderBy('currentprice','asc')
    })
    return this.allproducts.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id ;
          return { id, ... data};
        })
      })
    )
  }

  // get customer contact
  getNumber(id){
    return this.fs.collection('users').doc<Customer>(id).valueChanges();
  }

  shopFirst(){
    // this.restaurantThird();
   }
  
   restaurantThird(){
     let rest = [];
     this.fs.collection('restaurants').valueChanges().subscribe(res => {
       rest = res;
       rest.forEach(item => {
         item.type = "Restaurant";
         this.fs.collection('shops').add(item);
         console.log('done');
       });
 
     });
   }
}
