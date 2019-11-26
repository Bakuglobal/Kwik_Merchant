import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastController, LoadingController, MenuController } from "@ionic/angular";


import * as firebase from 'firebase/app';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import { async } from "@angular/core/testing";
import { DatabaseService } from '../database.service';
import { FirestoreService } from '../services/firestore.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
 

  shouldHeight = document.body.clientHeight + 'px'
  
  public data: { email: any; password: any ; contact: any ; name: any ;location: any ;open: any ;website: any} = {
    email: null,
    password: null,
    contact: null ,
    name: null,
    open: null,
    website: null,
    location: null
  };

  loading: any;
  verify = false ;
  code = false ;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
   provider ;
   userID ;
  constructor(
    public db: DatabaseService,
    public navigation: Router,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public googleplus:GooglePlus,
    public menuCtrl: MenuController,
    public service: FirestoreService,
    public location : Location
  ) { 
    this.provider = new firebase.auth.GoogleAuthProvider();
    this.service.hiddenTabs = true;

  }

  back(){
    this.service.hiddenTabs = false;
    this.location.back();
  }
  ngOnInit() {
    this.menuCtrl.enable(false);

      }
     
      hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
      
    
    
      async register() {
        this.presentLoading();
        
        this.db.register(this.data.email, this.data.password).then(
          resp => {
           
            this.loading.dismiss();
            this.navigation.navigate(["tabs/login"]);
          },
          error => {
            this.presentToast(error.message);
            this.loading.dismiss();
          }
        );
        this.getUserID()
        this.saveShop(this.data);
        this.data.email = null;
        this.data.password = null;
        this.data.contact = null;
        this.data.location = null;
        this.data.name = null;
        this.data.website = null;
        this.data.open = null ;
      }
      getUserID(){
        this.db.getCurrentUser().then(user => {
          this.userID = user.uid 
          console.log("userID"+ this.userID);
          console.log("user"+ user);
        })
      }
      saveShop(data){
        localStorage.setItem('name',data.name);
        localStorage.setItem('email',data.email);
        localStorage.setItem('userID',this.userID)
        let shop = {
          "Shop name": data.name,
          "Email" : data.email,
          "Contacts" :data.contact,
          "Location": data.location,
          "Open Hours": data.open,
          "Website": data.website,
          "userID": this.userID
        }
        this.db.saveShop(shop).then(res => {console.log(res)}).catch(err => {console.log(err)});
      }
    
      // Loader
      async presentLoading() {
        this.loading = await this.loadingController.create({
          message: "Wait ..."
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
    }
    