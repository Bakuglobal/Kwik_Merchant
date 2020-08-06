import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform, PopoverController } from '@ionic/angular';
import { Notice } from './models/notice';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OneSignalService {
 // variables
    userID;
    token ;
    notification ;
    shop ;
    unreadMsg : any;
    Notice : AngularFirestoreCollection<Notice> ;
    UnReadNotice : AngularFirestoreCollection<Notice> ;
    count = 0 ;
  constructor(
    private http: HttpClient,
    private fs: AngularFirestore,
    private FB: Firebase,
    private platform: Platform,
    private pop: PopoverController
  ) {
    this.userID = localStorage.getItem('userID');
    this.shop = localStorage.getItem('shop');
  }
// set token
setToken(token) {
  this.token = token ;
}
// send token to firebase
sendTokenToFirebase(name) {
  if (this.token === undefined) {return ; }
  const ref = this.fs.collection('MerchantDevices').doc(name);
  ref.set({
    'token': this.token,
    'userID': this.userID
  });
}
sendNotificationTodb(data){
   // send to firebase 
   if (data === undefined) {return ; }
   const ref = this.fs.collection(this.shop+'_Notifications');
   let notice = {
     userID: this.userID,
     Title: data.title,
     message: data.body,
     status: 'unread',
     Date: Date()
   }
   ref.add(notice).catch(err => console.log(err))
}

// get notification from db
getmyNotification(){
  this.Notice = this.fs.collection<Notice>(this.shop+'_Notifications',ref => {
   return ref.orderBy('Date','desc');
 });

 return this.Notice.snapshotChanges().pipe(
   map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data();
      const id = a.payload.doc.id ;
      return { id, ... data};
    })
   })
 );
}
//------show new notification 
private dataSource = new BehaviorSubject("Read");
noticeNew = this.dataSource.asObservable();
showNew(string: any){
  this.dataSource.next(string);
}

// share notice count 
private noticeCount = new BehaviorSubject(0);
notice = this.noticeCount.asObservable();
showCount(number: number){
  this.noticeCount.next(number);
}

// get unread messages from db
 getUnreadNotices(){
  this.UnReadNotice = this.fs.collection<Notice>(this.shop+'_Notifications',ref => {
    return ref.where('status','==','unread').orderBy('Date','asc');
  })
 
  return this.UnReadNotice.snapshotChanges().pipe(
    map(actions => {
     return actions.map(a => {
       const data = a.payload.doc.data();
       const id = a.payload.doc.id ;
       return { id, ... data};
     })
    })
  );
}



}
