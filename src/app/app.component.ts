import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { DatabaseService } from './database.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirestoreService } from './services/firestore.service';
import { User } from './models/user';
import { FCM } from '@ionic-native/fcm/ngx';
import { OneSignalService } from './one-signal.service';
import * as $ from "jquery";
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  // varaibles
        navigate ;
        loggedIn = false;
        shop: User;
        email ;
        userID;

  constructor(
        public platform: Platform,
        public splashScreen: SplashScreen,
        public statusBar: StatusBar,
        public navCtrl: Router,
        public menuCtrl: MenuController,
        public db: DatabaseService,
        public firestore: AngularFirestore,
        public af: AngularFireAuth,
        public service: FirestoreService,
        private fcm: FCM,
        private serve: OneSignalService,
        private keyboard: Keyboard
  ) {

  // initiliaze the app

        this.initializeApp();
        if(this.platform.is('android')){
          this.keyboard.onKeyboardShow().subscribe((e) => {
            const offset = $(document.activeElement).offset().top;
            let height = (offset - e.keyboardHeight)*-1;
            height = height > 0 ? 0 : height;      
            $('body').animate({ 'marginTop': height + 'px' }, 100);
          });
          this.keyboard.onKeyboardHide().subscribe(e => {
            $('body').animate({ 'marginTop': 0 + 'px' }, 100);
          });
        
        }



  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
  // get user id from local and userDetails
        this.userID = localStorage.getItem('userID');
        this.sideMenu();
        if (this.userID !== undefined) {
          this.getUserDet(this.userID);
        }

  }

// go to login
        login() {
          this.menuCtrl.close();
          this.navCtrl.navigate(['tabs/login']);
        }
// get user details from database
        async getUserDet(id) {
          await this.service.getUserDetails(id).valueChanges().subscribe(res => {
            this.shop = res ;
            console.log(this.shop);
            this.service.setuser(this.shop);
            this.db.setShopname(this.shop.shop);
            localStorage.setItem('shop',this.shop.shop);
            console.log(this.shop.shop);
            console.log(this.shop);
            this.loggedIn = true ;
          });
        }
// initialize

        initializeApp() {
          this.platform.ready().then(() => {
            this.statusBar.styleLightContent();
            this.splashScreen.hide();

            this.fcm.getToken().then(token => {
              console.log('fcm - token' + token);
              this.serve.setToken(token);
            });
            this.fcm.onTokenRefresh().subscribe(token => {
              console.log('fcm -token' + token);
              this.serve.setToken(token);
            });
            //  get notifications
            this.fcm.onNotification().subscribe(data => {
              console.log(data);
              if (data.wasTapped) {
                console.log('Received in background');
                this.serve.takeToNotifications(data);
                this.navCtrl.navigate(['tabs/notifications']);
                // this.navCtrl.navigate([data.landing_page, data.price]);
              } else {
                console.log('Received in foreground');
                this.serve.animateNoticeIcon(data);
                // this.navCtrl.navigate([data.landing_page, data.price]);
              }
            });


          });
        }
// sidemenu
        sideMenu() {
          this.navigate =
          [
            {
              title : 'Dashboard',
              url   : 'tabs',
              icon  : 'home'
            },
            {
              title : 'Scan',
              url   : 'tabs/tab1',
              icon  : 'qr-scanner'
            },
            {
              title : 'Soko',
              url   : '/tabs/tab3',
              icon  : 'card'
            },
            {
              title : 'Customer List',
              url   : '/tabs/customers',
              icon  : 'people'
            },
            {
              title : 'Notifications',
              url   : '/tabs/notifications',
              icon  : 'notifications'
            },
            {
              title : 'Profile',
              url   : '/tabs/profile',
              icon  : 'contacts'
            }

          ];
        }
// logout

        logout() {
          this.menuCtrl.close();
          localStorage.clear();
          this.service.hiddenTabs = true ;
          this.db.logout();

        }
}
