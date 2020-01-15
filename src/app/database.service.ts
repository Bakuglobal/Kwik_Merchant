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
  
  register(email: any, password: any,name: any,phone: any,website: any,location: any,openStart: any,openStop: any) {
    return this.af.auth
      .createUserWithEmailAndPassword(email, password)
      .then((authData: any) => {
        localStorage.setItem('userID', authData.user.uid);
        let userData = {
          "Shopname": name,
          "Contacts": phone,
          "Email": email,
          "Website": website,
          "logo": '',
          "userID": localStorage.getItem('userID'),
          "Location": location,
          "OpenHours": openStart+''+'Am'+''+openStop+''+'PM'
        };

        this.createUser(userData);
      });
  }

  
  getShopInfo(id){
    return this.firestore.collection('shops',ref => ref.where('userID','==', id)).get();
  }
  //create a user account
  createUser(data){
    this.firestore.collection('shops').add(data);
  }


 
    
}
