import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Router} from '@angular/router';
import { ModalController, ActionSheetController} from '@ionic/angular';
import { ChatmodalPage} from '../chatmodal/chatmodal.page';
import { DatabaseService } from '../database.service';
import { NewchatmodalPage } from '../newchatmodal/newchatmodal.page';




@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  myChat= [] ;
  msg ;
  receivedMsg ;
  userID ;
  userPhone ;
  recepients = [] ;
  sender = [] ;
  constructor(
    private navCtrl: Router ,
    private modalCtrl: ModalController,
    private fs: AngularFirestore,
    private db: DatabaseService,
    private asC: ActionSheetController
  ) {}
  ngOnInit() {
    this.userID = localStorage.getItem('userID');
    this.userPhone = localStorage.getItem('userPhone')
    this.getChatsFromMe();
    this.getChatsToMe();
    
   
  }
  async logout(){
    const asc = await this.asC.create({
      animated: true ,
      backdropDismiss: true ,
      cssClass: './home.page.scss',
      buttons: [{
        text: 'Logout',
        handler: () => {
          this.db.logout();
          localStorage.clear();
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ]
    });
    await asc.present();
    
  }
  async getChatsFromMe(){
    this.fs.collection('chats',ref=>ref.orderBy('Time','asc')).ref.where('UserID', '==', this.userID)
    .onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          console.log('New chat: ', change.doc.data());
          this.myChat.push(change.doc.data());
          console.log(this.myChat);
          this.receivedMsg = this.myChat[0].Message ;
          console.log(this.receivedMsg.length)
          if(this.receivedMsg.length > 100){
          this.msg = this.receivedMsg.substring(0,80)+'...';
          }else {
          this.msg = this.receivedMsg ;
          }
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
   async getChatsToMe(){
    this.fs.collection('chats').ref.where('sendTo', '==', this.userPhone)
    .onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          console.log('New chat: ', change.doc.data());
          
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
   groupChats(allchats){
     var i ;
     allchats.forEach(chat =>{
        this.recepients.push(chat.sendTo);
     }
     );
     
   }

 async chatModal(chat){
  const modal = await this.modalCtrl.create({
    component: ChatmodalPage,
    componentProps: { SendTo: chat.SendTo },
  }) 
  await modal.present();
 }
 async newChatModal(){
  const modal = await this.modalCtrl.create({
    component: NewchatmodalPage,
    componentProps: {}
  })
  await modal.present();
 }
}