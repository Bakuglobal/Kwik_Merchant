import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform, PopoverController } from '@ionic/angular';


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
   const ref = this.fs.collection(this.shop+'Notifications');
   let notice = {
     userID: this.userID,
     Title: data.title,
     message: data.body,
     status: 'unread'
   }
   ref.add(notice).catch(err => console.log(err))
}
setNoticeData(data){
  this.notification = data ;
  this.sendNotificationTodb(data);
}
getNoticeData(){
  return this.notification ;
}
// get notification from db
getmyNotification(){
 return this.fs.collection(this.shop+'Notifications');
}

// show notifications when received

takeToNotifications(data){
  this.setNoticeData(data);

}
animateNoticeIcon(data){
  this.sendNotificationTodb(data);
  this.unreadMsg = this.getUnreadMessage() ;
  if(this.unreadMsg.length !== undefined){
    this.changeData(this.unreadMsg.length);
  }
}
checkUnreadmsg(){
  let msg = this.getUnreadMessage()
  return msg;
}

//------share notification count
private dataSource = new BehaviorSubject("0");
noticeCount = this.dataSource.asObservable();

changeData(data: any) {
  this.dataSource.next(data);
}


// get unread messages from db
async getUnreadMessage(){
let unread = await this.fs.collection(this.shop, ref => {
  return ref.where('status','==','unread')
})
 unread.valueChanges().subscribe(res => {
   return res ;
 });
  
}

}
