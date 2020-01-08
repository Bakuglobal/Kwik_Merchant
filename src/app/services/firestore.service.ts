import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  hiddenTabs = false ;
  products = [] ;
  categories = [] ;

  constructor(
    private fauth: AngularFireAuth,
    private http: HttpClient
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
  


}
