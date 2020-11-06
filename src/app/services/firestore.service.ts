import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Shop } from '../models/shops';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Order } from '../models/order';
import { Product } from '../models/product';
import { Category } from '../models/category';
import { map } from 'rxjs/operators';
import { Customer } from '../models/customer';
import { AngularFireStorage } from '@angular/fire/storage';
import { Reaction } from '../models/reaction';
import { User } from '../models/user';


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
    extract;
    product: Observable<Product>;
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
        private st: AngularFireStorage

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
    setProduct(prod) {
        this.product = prod;
        console.log(this.product);
    }
    getProduct() {
        return this.product;
    }
    // get open orders
    getOpenOders(shop) {
        return this.OderCollection = this.fs.collection('Orders', ref => {
            return ref.where('status', '==', 'open').where('shop', '==', shop).orderBy('Date', 'asc');
        });
    }
    getTodaysOrders(shop) {
        return this.OderCollection = this.fs.collection('Orders', ref => {
            return ref.where('shop', '==', shop).orderBy('Date', 'desc');
        });
    }

    getOrderFromNotification(OrderID) {
        return this.fs.collection('Orders').doc(OrderID).valueChanges();
    }
    // getTodaysReadyOrders(shop) {
    //   return this.OderCollection = this.fs.collection('Orders', ref => {
    //     return ref.where('status', '==', 'Ready').where('shop', '==', shop).orderBy('Date', 'asc').where('pickDay', '==', 'Today');
    //   });
    // }
    // get past orders
    getReadyOrders(shop) {
        return this.OderCollection = this.fs.collection('Orders', ref => {
            return ref.where('status', '==', 'complete').where('shop', '==', shop).orderBy('Date', 'desc');
        });
    }

    // GET DELIVERIES ORDERS
    getDeliveriesOrders(shop) {
        return this.OderCollection = this.fs.collection('Orders', ref => {
            return ref.where('Delivery', '==', 'deliver').where('shop', '==', shop).orderBy('Date', 'desc');
        });
    }

    // GET PICK AND COLLECT ORDERS
    getPickAndCollectOrders(shop) {
        return this.OderCollection = this.fs.collection('Orders', ref => {
            return ref.where('Delivery', '==', 'pick').where('shop', '==', shop).orderBy('Date', 'desc');
        });
    }

    // GET ORDERS
    getOrders(shop) {
        return this.OderCollection = this.fs.collection('Orders', ref => {
            return ref.where('shop', '==', shop).orderBy('Date', 'desc');
        });
    }

    getCanceledOrders(shop) {
        return this.OderCollection = this.fs.collection('Orders', ref => {
            return ref.where('status', '==', 'canceled').where('shop', '==', shop).orderBy('Date', 'desc');
        });
    }
    // get user details
    getUserDetails(id) {
        return this.fs.collection('shops').doc<Shop>(id);
    }
    // get customer Details
    getCustomer(id) {
        return this.fs.collection('users').doc<User>(id);
    }
    //get all categories from firestore
    getallcategories(shop) {
        console.log(shop);
        return this.fs.collection('Categories').doc<Category>(shop);
    }
    // register user with mail and pass
    register(email, pass) {
        return this.fauth.auth.createUserWithEmailAndPassword(email, pass);
    }
    deleteUser() {
        let user = this.fauth.auth.currentUser;
        return user.delete()
    }
    profile() {
        return this.fs.collection('shops')
    }
    editprof(id) {
        return this.fs.collection('shops').doc(id)
    }
    // get all products
    getallProducts(shop) {
        this.allproducts = this.fs.collection<Product>(shop, ref => {
            return ref.orderBy('currentprice', 'asc')
        })
        return this.allproducts.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                })
            })
        )
    }

    // get customer contact
    getNumber(id) {
        return this.fs.collection('users').doc<Customer>(id).valueChanges();
    }

    shopFirst() {
        // this.restaurantThird();
    }

    restaurantThird() {
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

    getLikes(postId) {
        return this.fs.collection('Likes').doc<Reaction>(postId);
    }

    getUserNameBy(userID) {
        return this.fs.collection('shops').doc(userID).valueChanges();
    }

    alreadyLiked(postId) {
        return this.fs.collection('Likes').doc<Reaction>(postId);
    }

    

}
