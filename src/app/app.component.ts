import { Component, ViewChildren, QueryList } from '@angular/core';

import { Platform, MenuController, ActionSheetController, ToastController, ModalController, PopoverController, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterOutlet } from '@angular/router';
import { DatabaseService } from './database.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirestoreService } from './services/firestore.service';
import { User } from './models/user';
import { FCM } from '@ionic-native/fcm/ngx';
import { OneSignalService } from './one-signal.service';
import * as $ from "jquery";
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { map } from 'rxjs/operators';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  showSplash = true;
  data = [];

  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  // varaibles
        navigate ;
        loggedIn = false;
        shop: User;
        email ;
        userID;
        unreadNotice = [];

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
        public popoverCtrl: PopoverController,
        private fcm: FCM,
        private modalCtrl: ModalController,
        private serve: OneSignalService,
        private keyboard: Keyboard,
        private actionSheetCtrl : ActionSheetController,
        private toast: ToastController,
        private network: Network
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
 // get user id from local and userDetails
 this.userID = localStorage.getItem('user');
       
 this.sideMenu();
 if (this.userID !== null) {
   this.getUserDet(this.userID);
 }


  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
 
    this.backButtonEvent();
    this.checkConnection();
  }

// go to login
        login() {
          this.menuCtrl.close();
          this.navCtrl.navigate(['tabs/login']);
        }
// get user details from database
        async getUserDet(id) {
           this.service.getUserDetails(id).valueChanges().subscribe(res => {
             let user: any = res ;
            this.shop = user.sellerInfo ;
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
                this.serve.sendNotificationTodb(data);
                this.navCtrl.navigate(['tabs/notifications']);
                // this.navCtrl.navigate([data.landing_page, data.price]);
              } else {
                console.log('Received in foreground');
                this.serve.sendNotificationTodb(data);
                this.serve.showNew('Unread');
                this.serve.getUnreadNotices().subscribe(res => {
                  this.unreadNotice = res ;
                });
                setTimeout(() => {
                  this.serve.showCount(this.unreadNotice.length);
                },2500);
              }
            });
          });
          
        }
 // active hardware back button
 backButtonEvent() {
  this.platform.backButton.subscribe(async () => {
    // close action sheet
    try {
      const element = await this.actionSheetCtrl.getTop();
      if (element) {
        element.dismiss();
        return;
      }
    } catch (error) {
    }

    // close popover
    try {
      const element = await this.popoverCtrl.getTop();
      if (element) {
        element.dismiss();
        return;
      }
    } catch (error) {
    }

    // close modal
    try {
      const element = await this.modalCtrl.getTop();
      if (element) {
        element.dismiss();
        return;
      }
    } catch (error) {
      console.log(error);

    }

    // close side menu
    try {
      const element = await this.menuCtrl.getOpen();
      if (element) {
        this.menuCtrl.close();
        return;

      }

    } catch (error) {

    }

    this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
      if (outlet && outlet.canGoBack()) {
        outlet.pop();

      } else if (this.navCtrl.url === '/home') {
        if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
          // this.platform.exitApp(); // Exit from app
          navigator['app'].exitApp(); // work in ionic 4

        } else {
          this.toasted(
            'Press back again to exit App.')
          this.lastTimeBackPress = new Date().getTime();
        }
      }
    });
  });
}
async toasted(msg) {
  const ts = await this.toast.create({
    message: msg,
    duration: 2000,
    position: 'middle'
  });
  ts.present();
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
            // {
            //   title : 'Scan',
            //   url   : 'tabs/tab1',
            //   icon  : 'qr-scanner'
            // },
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
checkConnection(){
  // watch network for a connection
this.network.onConnect().subscribe(() => {
  console.log('network connected!');
  // We just got a connection but we need to wait briefly
   // before we determine the connection type. Might need to wait.
  // prior to doing any api requests as well.
  setTimeout(() => {
    if (this.network.type === 'none') {
      console.log('we got a wifi connection, woohoo!');
      this.toasted('You are offline');
    }
  }, 3000);
});
}
}
