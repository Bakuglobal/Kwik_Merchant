import { Component, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ActionSheetController, AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreService } from '../services/firestore.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
@ViewChild('menu',{static: true}) menu:ElementRef;

  transaction ;
  barcode: any ;
  scanbutton = true ;
  currentDate ;
  transID;
  key;
  shop = [];
  userID
  constructor(
    private barcodeScanner: BarcodeScanner,
    private db: DatabaseService,
    private navCtrl:Router,
    private alertctrl: AlertController,
    private asC: ActionSheetController,
    private menuCtrl: MenuController,
    private af: AngularFireAuth,
    private firestore: AngularFirestore,
    private service: FirestoreService
  ) {
    this.service.hiddenTabs = false ;
  }

  ngOnInit(){
    this.getDate();
    document.querySelector('ion-tab-bar').style.display = 'flex';
    this.menuCtrl.enable(true);
    this.af.user.subscribe(res => {
      this.userID = res.uid ;
      console.log('user'+res.uid)
    });
   
  }
  
  notifications(){
    this.navCtrl.navigate(['tabs/notifications'])
  }

  close(){
    this.scanbutton = true;
    this.transaction = [] ;
  }
  async print(){
    let popup = await this.alertctrl.create({
      header: 'Sorry can not print now ',
      message: 'printer is not connected',
      buttons: [
        {
          text:'close',
          role: 'cancel'
        }
      ]
    });
    popup.present();
  }

  getDate(){

    this.currentDate = new Date().getTime();
   
 }
 //separate userID and transID
 truncate(barcode){
   //let qr = "8FxNjxpLCKQLFSZPzOcaUrYSK2M2"+"lthRbbyEWrxRduB"
   this.key = barcode.substring(0,28);
   this.transID = barcode.slice(-15)
   console.log(this.key);
   console.log(this.transID);
 }
scan(){
  this.barcodeScanner.scan().then( barcode => {

    //get key and transID from barcode
    this.truncate(barcode);

    //search the code from db
    this.getTransaction(this.key,this.transID);
  })
}
check(){
  this.scanbutton = false ;
  let key = "8FxNjxpLCKQLFSZPzOcaUrYSK2M2" ;
  let transID = "lthRbbyEWrxRduB" ;
  this.getTransaction(key,transID);
  //this.truncate();
}

getTransaction(key,transID){
  //get transaction
  this.db.checktransaction(key,transID)
  .snapshotChanges().pipe(map(changes => {
    return changes.map(c => ({
      key: c.payload.key,
      ...c.payload.val()
    }));
  }))
  .subscribe(trans => {
    this.transaction = trans ;
  })
  console.log(this.transaction);
}

}
