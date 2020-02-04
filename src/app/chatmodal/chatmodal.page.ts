import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { AngularFirestore} from '@angular/fire/firestore';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-chatmodal',
  templateUrl: './chatmodal.page.html',
  styleUrls: ['./chatmodal.page.scss'],
})
export class ChatmodalPage implements OnInit {
  @Input() SendTo : any ;
  text: string ;
  chatRef: any ;
  uid: string ;
  time: any ;
  // sendTo = "Nakumatt" ;

  constructor(
    private fauth: AngularFireAuth,
    private fs: AngularFirestore,
    private navCtrl: Router,
    private modalController: ModalController
  ) {
    this.uid = localStorage.getItem('userID');
    this.chatRef = this.fs.collection('chats',ref=>ref.orderBy('Time','asc')).valueChanges();

   }
   close(){
    this.modalController.dismiss();
  }
  ngOnInit() {
    // this.ScrollToBottom();
  }
  // ScrollToBottom(){
  //   this.content.scrollToBottom();
  // }

  send(){
    if( this.text != ''){
      if(this.SendTo == ''){
        alert("Please add a recepient of this message");
      }else{
          this.time = new Date() ;
          this.fs.collection('chats').add({
            Name: this.fauth.auth.currentUser.displayName,
            Message: this.text,
            UserID: this.fauth.auth.currentUser.uid,
            Time: this.time,
            SendTo: this.SendTo
          });
          this.text = '' ;
          // this.ScrollToBottom();
        }
    }
  }
}
