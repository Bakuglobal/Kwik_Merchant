import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastController, LoadingController, MenuController } from "@ionic/angular";


import * as firebase from 'firebase/app';
import { DatabaseService } from '../database.service';
import { FirestoreService } from '../services/firestore.service';
import { Location } from '@angular/common';
import { User } from '../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
 
// variables
      shouldHeight = document.body.clientHeight + 'px'
      data: User ;
      public registerForm: FormGroup;
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
    public menuCtrl: MenuController,
    public service: FirestoreService,
    public location : Location,
    private formBuilder: FormBuilder,
    private ref: AppComponent
  ) 
  { 
    this.provider = new firebase.auth.GoogleAuthProvider();
    this.service.hiddenTabs = true;

    // formbuilder
    this.registerForm = this.formBuilder.group({
        email: ['',Validators.required],
        password: ['',Validators.required],
        contact: ['',Validators.required] ,
        name:[ '', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        openStart: ['',Validators.required],
        openStop: ['',Validators.required],
        website: ['',Validators.required],
        location: ['',Validators.required]

    })


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
        let data = this.registerForm.value ;
        console.log(data);
        this.db.register(data).then(
          resp => {
            console.log(resp);
            this.loading.dismiss();
            this.service.hiddenTabs =false ;
            this.menuCtrl.enable(true);
            this.ref.getUserDet(localStorage.getItem('userID'));
            this.navigation.navigate(["tabs/dashboard"]);
          },
          error => {
            this.presentToast(error.message);
            this.loading.dismiss();
          }
        );
        // this.saveShop(this.data);
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
    