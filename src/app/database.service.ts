import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './models/user';
import { Router } from '@angular/router' ;
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Shop } from './models/shops';
import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
   


  private pathUsers = '/users';
  operationUser: AngularFireList<User> = null;

  constructor(
    
    private db: AngularFireDatabase,
    private af: AngularFireAuth,
    private navCtrl: Router,
    private firestore: AngularFirestore,
    public http: HttpClient
  ) { 
    this.operationUser = db.list(this.pathUsers);
  }
  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          resolve(user);
        } else {
          reject('No user logged in');
        }
      });
    });
  }
  //get transaction from database
  checktransaction(key,transId){
      return this.db.list(`Transactions/${key}/${transId}`);
  }

  logout() {
    this.af.auth.signOut().then(
      resp => {
        this.navCtrl.navigate(['tabs/login']);
      },
      error => {
        console.log(error);
      }
    );
  }

  login(email: any, password: any) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }
  
  register(email: any, password: any) {
    return this.af.auth
      .createUserWithEmailAndPassword(email, password)
      .then((authData: any) => {
        let value = {
          name: 'your name',
          phone: '',
          email: email,
          wallet: 0,
          shop: 'none'
        };

        this.operationUser
          .update(authData.user.uid, value)
          .catch(error => console.log(error));
      });
  }

  //Save shop details to firestore
  saveShop(data){
    return this.firestore.collection('shops').add(data) ;
  }
  getShopInfo(id){
    return this.firestore.collection('shops',ref => ref.where('userID','==', id)).get();
  }


 
    
}
