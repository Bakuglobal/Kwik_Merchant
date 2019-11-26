import { Component, OnInit ,OnDestroy, AfterViewInit  } from '@angular/core';
import { LoadingController, ToastController, Events, AlertController, MenuController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import { map } from 'rxjs/operators';
import { DatabaseService } from '../database.service';
import { FirestoreService } from '../services/firestore.service';
import { Location } from '@angular/common';
import { AppComponent} from '../app.component' ;


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  shouldHeight = document.body.clientHeight + 'px';

  public data: { email: any; password: any } = {
    email: null,
    password: null
  };

  loading: any;

  errorCode: any;

  errorMessage: any;
  user ;

  passwordType: string = 'password';
 passwordIcon: string = 'eye-off';
 backButtonSubscription ;
  constructor(
    public db: DatabaseService,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public navCtrl: Router,
    public googleplus:GooglePlus,
    public events: Events,
    private alertCtrl: AlertController,
    public menuCtrl: MenuController,
    private platform: Platform,
    private service: FirestoreService,
    private location : Location,
    public  ref: AppComponent
   
  ) { 
    this.redirect();
    this.service.hiddenTabs = true ; 
  }

  
  ngOnInit() {
    
    this.menuCtrl.enable(false);

  }
  back(){
    this.service.hiddenTabs = false;
    this.menuCtrl.enable(true);
    this.location.back();
  }
  // ngAfterViewInit() {
  //   this.backButtonSubscription = this.platform.backButton.subscribe(() => {
  //     navigator['app'].exitApp();
  //   });
  //  }
  // ngOnDestroy() { 
  //   this.backButtonSubscription.unsubscribe();
  // }
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
}
//redirect to home if logged in before
redirect(){
  const id = localStorage.getItem('userID');
  if(id !== null){
    this.navCtrl.navigate(['tabs/tab1']);
  }
}

submit() {
  this.presentLoading();
  this.db.login(this.data.email, this.data.password).then(
    resp => {
      this.next(resp);
    },
    error => {
      this.loading.dismiss();
      this.presentToast(error.message);
      
    }
  );
}

next(resp) {
  
  const id = resp.user.uid;console.log('user id is----:'+id)
  localStorage.setItem('userID', id);
  this.loading.dismiss();
  this.menuCtrl.enable(true);
  this.service.hiddenTabs = false ;
  this.ref.getInfo();
  this.navCtrl.navigate(['tabs/tab1']);
}

// Loader
async presentLoading() {
  this.loading = await this.loadingController.create({
    message: 'Wait ...'
  });
  return await this.loading.present();
}

// Toaster
async presentToast(data) {
  const toast = await this.toastController.create({
    message: data,
    duration: 3000
  });
  toast.present();
}

// Google sign in

login(){
  this.googleplus.login({
    'webClientId':'587167744825-38lfevsqb2h7o3jave51237cteov4vd2.apps.googleusercontent.com',
    'offline':true
  }).then(res=>{
    firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.IdToken))
    .then(suc=>{
      alert("login successful")
    }).catch(ns=>{
      alert("login not successful")
    })
  })
}
//forgot password
reset(){
  this.password();
  
}
async forgotPassword(email){
   return firebase.auth().sendPasswordResetEmail(email)
   .then(res =>  this.presentToast('Password reset link send to '+' '+email))
   .catch(error => this.presentToast('No user record with '+email))
   
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
