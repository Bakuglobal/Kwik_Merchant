import { Component, OnInit ,OnDestroy, AfterViewInit  } from '@angular/core';
import { LoadingController, ToastController, Events, AlertController, MenuController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { map, tap } from 'rxjs/operators';
import { DatabaseService } from '../database.service';
import { FirestoreService } from '../services/firestore.service';
import { Location } from '@angular/common';
import { AppComponent} from '../app.component' ;
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { OneSignalService } from '../one-signal.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  shouldHeight = document.body.clientHeight + 'px';

  public data: { email: any; password: any } = {
    email: null,
    password: null,

  };

  loading: any;

  errorCode: any;

  errorMessage: any;
  userId ;

  passwordType: string = 'password';
 passwordIcon: string = 'eye-off';
 backButtonSubscription ;
  constructor(
    public db: DatabaseService,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public navCtrl: Router,
    public events: Events,
    private alertCtrl: AlertController,
    public menuCtrl: MenuController,
    private platform: Platform,
    private service: FirestoreService,
    private location : Location,
    public  ref: AppComponent,
    private oneSignal: OneSignal,
    private notice: OneSignalService,
    private fs: AngularFirestore,
    private fcm: FCM
  ) { 
    
    this.service.hiddenTabs = true ; 
    this.userId = localStorage.getItem('userID');
  }

  
  ngOnInit() {
    
    this.menuCtrl.enable(false);
    this.redirect();

  }
  redirect(){
    if(this.userId !== undefined){
      this.navCtrl.navigate(['tabs/dashboard'])
    }
  }
  back(){
    this.service.hiddenTabs = false;
    this.menuCtrl.enable(true);
    this.location.back();
  }


  // go to register page
  async register(){
    this.navCtrl.navigate(['/register']);
    
  }
  
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
}

submit() {
  this.presentLoading();
  this.db.login(this.data.email, this.data.password).then(
    resp => {
      this.next(resp);
    },
    error => {
      this.loading.dismiss();
      this.presentToast('wrong email and password match','bottom');
      
    }
  );
}

next(resp) {
  
  const id = resp.user.uid;console.log('user id is----:'+id)
  localStorage.setItem('userID', id);
  this.loading.dismiss();
  this.ref.getUserDet(id);
  let shopname = this.db.getshopname();
  this.notice.sendTokenToFirebase(shopname);
  this.service.hiddenTabs = false ;
  this.menuCtrl.enable(true);
  this.navCtrl.navigate(['tabs/dashboard']);
}

// Loader
async presentLoading() {
  this.loading = await this.loadingController.create({
    message: 'Wait ...'
  });
  return await this.loading.present();
}

// Toaster
async presentToast(data,position) {
  const toast = await this.toastController.create({
    message: data,
    duration: 3000,
    position: position
  });
  toast.present();
}

// Google sign in


//forgot password
reset(){
  this.password();
  
}
async forgotPassword(email){
   return firebase.auth().sendPasswordResetEmail(email)
   .then(res =>  this.presentToast('Password reset link send to '+' '+email,'bottom'))
   .catch(error => this.presentToast('No user record with '+email,'bottom'))
   
}
async password(){
  let pop = await this.alertCtrl.create({
    header: 'Password Reset',
    message: 'Enter email address to receive password reset link',
    inputs: [
      {
        name: 'email',
        placeholder: 'you@example.com'
      }
    ],
    buttons: [
      {
        text: 'cancel',
        role: 'cansel'
      },
      {
        text: 'Send',
        handler: data => {
          let email = data.email ;
          console.log(email);
          this.forgotPassword(email);
          //send pass reset link to email
        }
      }
    ]
  });
  pop.present();
}



}
