import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { DatabaseService } from './database.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirestoreService } from './services/firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate ;
  // userID ;
 shop = [];
 
  constructor(
    public platform: Platform,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
    public navCtrl: Router,
    public menuCtrl: MenuController,
    public db: DatabaseService,
    public firestore: AngularFirestore,
    public af: AngularFireAuth,
    public service: FirestoreService
  ) {
   
    this.initializeApp();
    let userID = localStorage.getItem('userID')
    this.sideMenu();
    this.getInfo(userID);
    

  }

login(){
  this.menuCtrl.close();
  this.navCtrl.navigate(['tabs/login'])
}
  
 async getInfo(userID){
     if(userID != null) {
    this.firestore.collection('shops',ref => ref.where('userID','==',userID)).get().subscribe(res => {
      res.docChanges().forEach(change =>{
        if(change.type == 'added'){
          this.shop.push(change.doc.data());
          console.log(this.shop);
        }
        if(change.type == 'modified'){
          this.shop.length = 0 ;
          this.shop.push(change.doc.data());
        }
        if(change.type == 'modified'){
          this.shop.length = 0;
          this.shop.push(change.doc.data());
        }
      })
    })
  }
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }
  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Dashboard",
        url   : "tabs",
        icon  : "home"
      },
      {
        title : "Scan",
        url   : "tabs/tab1",
        icon  : "qr-scanner"
      },
      {
        title : "Soko",
        url   : "/tabs/tab3",
        icon  : "card"
      },
      {
        title : "Notifications",
        url   : "/tabs/notifications",
        icon  : "notifications"
      },
      {
        title : "Profile",
        url   : "/tabs/profile",
        icon  : "contacts"
      }
     
    ]
  }
  logout() {
    this.menuCtrl.close();
    localStorage.clear();
    this.service.hiddenTabs = true ;
    this.db.logout();
    
  }

}
