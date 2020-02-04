import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ModalController , IonContent} from '@ionic/angular';
import { Contacts, ContactFieldType, ContactFindOptions } from '@ionic-native/contacts';

@Component({
  selector: 'app-newchatmodal',
  templateUrl: './newchatmodal.page.html',
  styleUrls: ['./newchatmodal.page.scss'],
})
export class NewchatmodalPage implements OnInit {
  @ViewChild(IonContent,{static: true}) content: IonContent;

  text: string ;
  chatRef: any ;
  uid: string ;
  time: any ;
  sendTo: any ;
  phoneNumber = '' ;
  myNumber ;
  chats = [] ;
  mychat = [];
  constructor(
    private fauth: AngularFireAuth,
    private fs: AngularFirestore,
    private navCtrl: Router,
    private modalController: ModalController,
    public contacts: Contacts
  ) { 
    this.uid = localStorage.getItem('userID');
    // this.chatRef = this.fs.collection('chats',ref=>ref.orderBy('Time','asc')).valueChanges();
    this.myNumber = localStorage.getItem('userPhone');


  }
  async getChats(){
    // gets the chat i have send and listens for updates
     this.fs.collection('chats',ref=>ref.orderBy('Time','asc')).ref.where('Recepient_Number', '==', this.phoneNumber) 
     .onSnapshot(querySnapshot => {
       querySnapshot.docChanges().forEach(change => {
         if (change.type === 'added') {
           console.log('New chat: ', change.doc.data());
           this.chats.push(change.doc.data());
           console.log(this.chatRef)
         } 
         if (change.type === 'modified') {
           console.log('Modified chat: ', change.doc.data());
          
         } 
         if (change.type === 'removed'){
           console.log('Removed chat: ', change.doc.data());
         }
       })
     });
     //get the chats replies and listens for updates
     this.fs.collection('chats',ref=>ref.orderBy('Time','asc')).ref.where('Recepient_Number', '==', this.myNumber) 
     .onSnapshot(querySnapshot => {
       querySnapshot.docChanges().forEach(change => {
         if (change.type === 'added') {
           console.log('New chat: ', change.doc.data());
           this.mychat.push(change.doc.data());
           console.log(this.chatRef)
         } 
         if (change.type === 'modified') {
           console.log('Modified chat: ', change.doc.data());
          
         } 
         if (change.type === 'removed'){
           console.log('Removed chat: ', change.doc.data());
         }
       })
     });
    }

  close(){
    this.modalController.dismiss();
  }
  ngOnInit() {
    this.ScrollToBottom();
  }
  ScrollToBottom(){
  }

  send(){
    if( this.text != ''){
      if(this.sendTo == null && this.sendTo == undefined){
        alert("Please add a recepient of this message");
      }else{
          this.time = new Date() ;
          this.fs.collection('chats').add({
            Name: this.fauth.auth.currentUser.displayName,
            Message: this.text,
            UserID: this.fauth.auth.currentUser.uid,
            Time: this.time,
            SendTo: this.sendTo,
            Recepient_Number: this.phoneNumber
          });
          this.text = '' ;
          this.ScrollToBottom();
        }
    }
  }
  pickContact(){
    this.contacts.pickContact().then( det => {
      this.sendTo = det.name.givenName ;
      this.phoneNumber = det.phoneNumbers[0].value.toString() ;
    })
  }
}
