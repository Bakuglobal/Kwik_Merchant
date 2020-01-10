import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Shop } from '../models/shops' ;


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  hiddenTabs = false ;
  products = [] ;
  categories = [] ;
  userDetails : Shop ;

  constructor(
    private fauth: AngularFireAuth,
    private http: HttpClient,
    private fs: AngularFirestore
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

}
