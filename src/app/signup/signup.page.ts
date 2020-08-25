import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastController, LoadingController, MenuController, AlertController } from "@ionic/angular";


import * as firebase from 'firebase/app';
import { DatabaseService } from '../database.service';
import { FirestoreService } from '../services/firestore.service';
import { Location } from '@angular/common';
import { User } from '../models/user';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { AppComponent } from '../app.component';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { AngularFireStorage } from '@angular/fire/storage';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { UploadService } from '../upload/upload.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  // variables
  shouldHeight = document.body.clientHeight + 'px'
  data: User;
  public sellerAccountForm: FormGroup;
  public businessInformationForm: FormGroup;
  public paymentDetailsForm: FormGroup;
  public knowYourCustomerForm: FormGroup;
  loading: any;
  verify = false;
  code = false;

  seller_account_form = true;
  business_information_form = false;
  payment_details_form = false;
  know_your_customer_form = false;

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  confirmPasswordType: string = 'password';
  confirmPasswordIcon: string = 'eye-off';
  provider;
  userID;

// variables holders for base64 Image URL selected
  imgURLBack = null;
  imgURLFront = null;

//  Boolean variables for form validation
  submitSeller = false ;

  constructor(
    public db: DatabaseService,
    public navigation: Router,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public menuCtrl: MenuController,
    public service: FirestoreService,
    public location: Location,
    private formBuilder: FormBuilder,
    private ref: AppComponent,
    public alertController: AlertController,
    private pdf: DocumentViewer,
    private camera: Camera,
    private st: AngularFireStorage,
    private webview: WebView,
    private upload: UploadService,
  ) {
    this.provider = new firebase.auth.GoogleAuthProvider();
    this.service.hiddenTabs = true;


    // seller AccountForm
    this.sellerAccountForm = this.formBuilder.group({
      owner: ['', Validators.compose([Validators.maxLength(100), Validators.required])],
      Contacts: ['', Validators.required],
      shop: ['', Validators.compose([Validators.maxLength(100), Validators.required])],
      Email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      termsAndConditions: ['', Validators.required]

    })

    // business Information Form

    this.businessInformationForm = this.formBuilder.group({
      address: this.formBuilder.array([this.newAddrGroup()]),

      type: ['', Validators.compose([Validators.required])],
      kraPin: ['', Validators.compose([Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9_-]*$/), Validators.required])],
      businessPermitNumber: ['', Validators.compose([Validators.maxLength(15), Validators.pattern('[0-9 ]*')])],
      Open: ['', Validators.compose([Validators.required])],
      Close: ['', Validators.compose([Validators.required])],
      Website: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      sameDayDelivery: [''],
      nextDayDelivery: [''],
      daysDelivery: [''],
    })



    // payment Details Form
    this.paymentDetailsForm = this.formBuilder.group({
      bankAccountName: ['', Validators.compose([Validators.maxLength(100)])],
      bankAccountNumber: ['', Validators.compose([Validators.maxLength(16), Validators.pattern('[0-9 ]*')])],
      bankName: ['', Validators.compose([Validators.maxLength(100)])],
      bankCode: ['', Validators.compose([Validators.maxLength(4), Validators.pattern('[0-9 ]*')])],
      bankBranch: ['', Validators.compose([Validators.maxLength(100)])],
      mpesaRegisteredName: ['', Validators.compose([Validators.maxLength(100), Validators.required])],
      mpesaNumber: ['', Validators.compose([Validators.maxLength(15), Validators.pattern('[0-9 ]*'), Validators.required])],
      mpesaTillRegisteredName: ['', Validators.compose([Validators.maxLength(100), Validators.required])],
      mpesaTillNumber: ['', Validators.compose([Validators.maxLength(15), Validators.pattern('[0-9 ]*')])],
      mpesaPaybillRegisteredName: ['', Validators.compose([Validators.maxLength(100), Validators.required])],
      mpesaPaybillNumber: ['', Validators.compose([Validators.maxLength(15), Validators.pattern('[0-9 ]*')])]
    })


    // know Your CustomerForm
    this.knowYourCustomerForm = this.formBuilder.group({
      nationalIdOrPassportNumber: ['', Validators.required],
      frontImage: ['', Validators.required],
      backImage: ['', Validators.required]
    })




  }

  ngOnInit() {
    this.menuCtrl.enable(false);
    
  }
 get  GetsellerAccountForm(){
   return this.sellerAccountForm.controls ;
 }
  newAddrGroup() {
    return this.formBuilder.group({
      Primary: [false, Validators.compose([Validators.maxLength(100), Validators.required])],
      address1: ['', Validators.compose([Validators.maxLength(100), Validators.required])],
      postalCode: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[0-9 ]*')])],
      cityOrTown: ['', Validators.compose([Validators.maxLength(100), Validators.required])],
      country: ['', Validators.compose([Validators.maxLength(100), Validators.required])],
    })
  }
  get altInput() {
    return this.businessInformationForm.get('address') as FormArray;
  }
  addNewAddr() {
    this.altInput.push(this.newAddrGroup());
  }
  removeAddr(index) {
    this.altInput.removeAt(index);
  }
  viewTermsAndConditions() {
    const options: DocumentViewerOptions = {
      title: 'Terms And Conditions'
    }
    this.pdf.viewDocument('../../assets/pdf/terms_and_conditions.png', 'application/pdf', options)
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  hideShowConfirmPassword() {
    this.confirmPasswordType = this.confirmPasswordType === 'text' ? 'password' : 'text';
    this.confirmPasswordIcon = this.confirmPasswordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
  checkIfPrimaryAddressExists(id) {
    if (this.businessInformationForm.value.address.length === 1) {
      return;
    }
    this.businessInformationForm.value.address.forEach(item => {
      if (item.Primary === true) {
        let index = this.businessInformationForm.value.address.indexOf(item);
        this.businessInformationForm.value.address[index].Primary === false;
        this.presentAlert("You can not have two  Primary addresses.");
      }
    })
  }

  // SELLER ACCOUNT
  async seller_account() {
    if (this.sellerAccountForm.value.password !== this.sellerAccountForm.value.confirmPassword) {
      this.presentAlert("Passwords do not match");
    } else {
      this.submitSeller = true ;
      this.seller_account_form = false;
      this.business_information_form = true;
      this.payment_details_form = false;
      this.know_your_customer_form = false;
    }
  }

  // BUSINESS INFORMATION
  async business_information() {
    console.log(this.businessInformationForm.value);
    if (this.businessInformationForm.value.sameDayDelivery && this.businessInformationForm.value.nextDayDelivery && this.businessInformationForm.value.daysDelivery) {
      console.log("Oops 1");
      this.presentAlert("Please select one of the options: Same day, Next day and Days delivery");
    }
    else if (!this.businessInformationForm.value.sameDayDelivery && !this.businessInformationForm.value.nextDayDelivery && !this.businessInformationForm.value.daysDelivery) {
      console.log("Oops 2");
      this.presentAlert("Please select one of the options: Same day, Next day and Days delivery");
    }
    else {


      this.seller_account_form = false;
      this.business_information_form = false;
      this.payment_details_form = true;
      this.know_your_customer_form = false;
    }

  }
  skipPaymentDetails() {
    this.seller_account_form = false;
    this.business_information_form = false;
    this.payment_details_form = false;
    this.know_your_customer_form = true;
  }

  // PAYMENT DETAILS
  async payment_details() {


    console.log("==============================");
    console.log(this.paymentDetailsForm.value);
    console.log("==============================");

    this.seller_account_form = false;
    this.business_information_form = false;
    this.payment_details_form = false;
    this.know_your_customer_form = true;
  }


  goBackToLogin() {
    this.service.hiddenTabs = true;
    this.location.back();
  }


  goBackToSellerAccount() {
    this.seller_account_form = true;
    this.business_information_form = false;
    this.payment_details_form = false;
    this.know_your_customer_form = false;
  }

  goBackToBusinessInformation() {
    this.seller_account_form = false;
    this.business_information_form = true;
    this.payment_details_form = false;
    this.know_your_customer_form = false;
  }

  goBackToPaymentDetails() {
    this.seller_account_form = false;
    this.business_information_form = false;
    this.payment_details_form = true;
    this.know_your_customer_form = false;
  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert !!',
      //   subHeader: 'Subtitle',
      message: '' + message + '',
      buttons: ['OK']
    });

    await alert.present();
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

  getImageGallery(type) {
    this.camera.getPicture({
      // sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 50,
      targetHeight: 600,
      targetWidth: 600,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }).then((res) => {
      if (type === 'front') {
        this.imgURLFront = 'data:image/jpeg;base64,' + res;
        this.knowYourCustomerForm.value.frontImage = this.uploadTostorage(this.imgURLFront);
      } else {
        this.imgURLBack = 'data:image/jpeg;base64,' + res;
        this.knowYourCustomerForm.value.backImage = this.uploadTostorage(this.imgURLBack);
      }

    });
  }

  submit() {
    this.presentLoading();
    console.table('back',this.knowYourCustomerForm.value.backImage.__zone_symbol__value);
    let user = {
      sellerInfo: this.sellerAccountForm.value,
      businessInfo: this.businessInformationForm.value,
      paymentInfo: this.paymentDetailsForm.value,
      kyc: {
        backImage:this.knowYourCustomerForm.value.backImage.__zone_symbol__value,
        frontImage: this.knowYourCustomerForm.value.frontImage.__zone_symbol__value,
        nationalIdOrPassportNumber: this.knowYourCustomerForm.value.nationalIdOrPassportNumber
      }
    }
    console.table(user);

    // CREATE USER BY EMAIL & PASSWORD THEN CREATE PROFILE USER
    this.service.register(this.sellerAccountForm.value.Email, this.sellerAccountForm.value.password).then(res => {
      localStorage.setItem('user', res.user.uid);
      // create profile
      this.service.profile().doc(res.user.uid).set(user).then(() => {
        // go to dashboard
        this.loading.dismiss();
        this.ref.getUserDet(res.user.uid);
        this.navigation.navigate(['tabs/dashboard']);
      }).catch(error => {
        console.log(error);
        this.service.deleteUser().then(function() {
          // User deleted.
          console.log("a/c deleted");
        }).catch(function(error) {
          // An error happened.
          console.log(error)
        });
        this.loading.dismiss();
        this.presentToast('Something went wrong profile not created')
      })
    }).catch(error => {
      console.log(error);
      this.loading.dismiss();
      this.presentToast("your network is unstable");
    })
  }

  uploadTostorage(image) {
    console.log('shop -->',this.sellerAccountForm.value.shop);
    let date = new Date().getTime();
    const pictures = this.st.storage.ref(this.sellerAccountForm.value.shop + '/' + date);
   return pictures.putString(image, 'data_url').then(res => {
      return pictures.getDownloadURL()
    }).catch(error => {
      console.log('error',error);
    })
    
  }


  
}