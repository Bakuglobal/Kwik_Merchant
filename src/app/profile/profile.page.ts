import { Component, OnInit } from '@angular/core';
import { ModalController, ActionSheetController, LoadingController, AlertController } from '@ionic/angular';
import { ProfilemodalPage } from '../profilemodal/profilemodal.page';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { DatabaseService } from '../database.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreService } from '../services/firestore.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Shop } from '../models/shops';
import { Post } from '../models/post';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    shopname: string;
    logo: string;
    shop: Shop;
    userID: any;
    Posts = [];
    loaded = false;
    loading;
    //variables
    liked = false;
    h = false;
    Addcomment = false;
    showSearch = false;
    public sellerAccountForm: FormGroup;
    public businessInformationForm: FormGroup;
    public paymentDetailsForm: FormGroup;
    public knowYourCustomerForm: FormGroup;
    sellerInfo: any;
    businessInfo: any;
    paymentInfo: any;
    kyc: any;
    //objects
    likes = { "count": 0 }
    edit_seller_account = true;
    save_seller_account = false;
    edit_business_information = true;
    save_business_information = false;
    edit_payment_details = true;
    save_payment_details = false;
    edit_know_your_customer = true;
    save_know_your_customer = false;

    constructor(
        private modalCtrl: ModalController,
        private fileChooser: FileChooser,
        private filePath: FilePath,
        private asC: ActionSheetController,
        private db: DatabaseService,
        private fs: AngularFirestore,
        private service: FirestoreService,
        private navCtrl: Router,
        private formBuilder: FormBuilder,
        private alert: AlertController,
        private load: LoadingController

    ) {
        this.shopname = localStorage.getItem('shop');
        this.userID   = localStorage.getItem('user');

    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        this.getUserDetails(this.userID);

        // seller AccountForm
        this.sellerAccountForm = this.formBuilder.group({
            owner: [this.sellerInfo.owner],
            Contacts: [this.sellerInfo.Contacts],
            shop: [this.sellerInfo.shop],
            Email: [this.sellerInfo.Email]
        });

        // BUSINESS INFORMTION
        this.businessInformationForm = this.formBuilder.group({
            // address: this.formBuilder.array([this.newAddrGroup()]),
            address1: [this.businessInfo.address[0].address1],
            postalCode: [this.businessInfo.address[0].postalCode],
            cityOrTown: [this.businessInfo.address[0].cityOrTown],
            country: [this.businessInfo.address[0].country],
      
            type: [this.businessInfo.type],
            kraPin: [this.businessInfo.kraPin],
            businessPermitNumber: [this.businessInfo.businessPermitNumber],
            Open: [this.businessInfo.Open],
            Close: [this.businessInfo.Close],
            Website: [this.businessInfo.Website],
            description: [this.businessInfo.description],
            sameDayDelivery: [this.businessInfo.sameDayDelivery],
            nextDayDelivery: [this.businessInfo.nextDayDelivery],
            daysDelivery: [this.businessInfo.daysDelivery]
        });


        // payment Details Form
        this.paymentDetailsForm = this.formBuilder.group({
            bankAccountName: [this.paymentInfo.bankAccountName],
            bankAccountNumber: [this.paymentInfo.bankAccountNumber],
            bankName: [this.paymentInfo.bankName],
            bankCode: [this.paymentInfo.bankCode],
            bankBranch: [this.paymentInfo.bankBranch],
            mpesaRegisteredName: [this.paymentInfo.mpesaRegisteredName],
            mpesaNumber: [this.paymentInfo.mpesaNumber],
            mpesaTillRegisteredName: [this.paymentInfo.mpesaTillRegisteredName],
            mpesaTillNumber: [this.paymentInfo.mpesaTillNumber],
            mpesaPaybillRegisteredName: [this.paymentInfo.mpesaPaybillRegisteredName],
            mpesaPaybillNumber: [this.paymentInfo.mpesaPaybillNumber]
        })


        // know Your CustomerForm
        this.knowYourCustomerForm = this.formBuilder.group({
            nationalIdOrPassportNumber: [this.kyc.nationalIdOrPassportNumber]
        })
    }

    // GET SHOP DETAILS
    async getUserDetails(id) {
        this.service.getUserDetails(id).valueChanges().subscribe(res => {
            this.shop         = res;
            let user: any     = res;
            this.sellerInfo   = user.sellerInfo ;
            this.businessInfo = user.businessInfo;
            this.paymentInfo  = user.paymentInfo;
            this.kyc          = user.kyc;
            console.log("============= SHOP DATA ==========");
            console.log(this.shop);
        });
    }


    scanAndPay() {
        this.modalCtrl.dismiss(["scan", this.shopname]);
        this.navCtrl.navigate(['tabs/shop']);
    }
    pickPayCollect() {
        this.modalCtrl.dismiss(["pick", this.shopname]);
        this.navCtrl.navigate(['tabs/offers']);
    }
    // goto shoppinglist page
    Delivery() {
        this.modalCtrl.dismiss(["delivery", this.shopname]);
        this.navCtrl.navigate(['tabs/offers']);
    }
    //share via whatsapp
    async share() {
        const asc = await this.asC.create({
            animated: true,
            backdropDismiss: true,
            cssClass: './home.page.scss',
            buttons: [{
                icon: 'logo-whatsapp',
                text: 'Whatsapp',
                handler: () => {
                }
            },
            {
                text: 'Cancel',
                role: 'cancel'
            }
            ]
        });
        await asc.present();
    }

    //add a comment
    AddComment() {
        if (this.Addcomment == true) {
            this.Addcomment = false;
        } else {
            this.Addcomment = true;
        }
    }

    // like posts
    like() {
        if (this.liked == false) {
            this.likes.count++;
            this.liked = true;
        } else {
            this.likes.count--;
            this.liked = false;
        }
        if (this.h == false) {
            this.h = true;
        } else {
            this.h = false;
        }

    }
    //close the modal

    close() {
        this.modalCtrl.dismiss()
    }
    //go to maps to see location of the shop

    async maps() {
        // const map = await this.modalCtrl.create({
        //   component: SokomodalPage,
        //   componentProps: {'shoplocation':this.shop.Location} 
        // });
        // console.log('location',this.shop.Location);
        // await map.present();
    }
    //open a link in a browser inside the app

    inbrowser(link) {
        console.log("Opens link in the app");
        const target = '_blank';
        // const options = { location : 'no' } ;
        // this.iab.create(link,target);
    }
    show() {

    }
    infoModal(shop, logo) {

    }
    showImage() {

    }
    comments() {

    }

    getPosts() {
        let posts = this.fs.collection<Post>('posts', ref => {
            return ref.where('shop', '==', this.shopname).orderBy('time', 'desc')
        })
        let fd = posts.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const id = a.payload.doc.id;
                    const data = a.payload.doc.data();
                    return { id, ...data }
                });
            })
        );
        fd.subscribe(res => {
            this.Posts = res;
            this.loaded = true;
            console.log(this.Posts);
        });
    }

    editSellerAccount() {
        this.save_seller_account = true;
        this.edit_seller_account = false;
    }

    // SAVE SELLER ACOUNT CHANGES
    saveSellerAccount() {
        this.save_seller_account = false;
        this.edit_seller_account = true;

        this.presentloading('Updating profile ...');
        const ref = this.fs.collection("shops").doc(this.userID);
        let data  = {sellerInfo: this.sellerAccountForm.value}
        ref.update(data).then(res => {
            console.log("============ SELLER ACCOUNT UPDATED ============");
            this.loading.dismiss();
        }).catch(error => {
            this.loading.dismiss();
            console.log(error);
        })
    }

    editBusinessInformation() {
        this.save_business_information = true;
        this.edit_business_information = false;
    }

    // SAVE BUSINESS INFO CHANGES
    saveBusinessInformation() {
        this.save_business_information = false;
        this.edit_business_information = true;

        this.presentloading('Updating profile ...');
        const ref = this.fs.collection("shops").doc(this.userID);
        let data  = {businessInfo: this.businessInformationForm.value}
        ref.update(data).then(res => {
            console.log("============ BUSINESS INFO UPDATED ============");
            this.loading.dismiss();
        }).catch(error => {
            this.loading.dismiss();
            console.log(error);
        })
    }

    editPaymentDetails() {
        this.save_payment_details = true;
        this.edit_payment_details = false;
    }

    // SAVE PAYMENT DETAILS CHANGES
    savePaymentDetails() {
        this.save_payment_details = false;
        this.edit_payment_details = true;

        this.presentloading('Updating profile ...');
        const ref = this.fs.collection("shops").doc(this.userID);
        let data  = {paymentInfo: this.paymentDetailsForm.value}
        ref.update(data).then(res => {
            console.log("============ PAYMENT INFO UPDATED ============");
            this.loading.dismiss();
        }).catch(error => {
            this.loading.dismiss();
            console.log(error);
        })
    }

    editKnowYourCustomer() {
        this.save_know_your_customer = true;
        this.edit_know_your_customer = false;
    }

    // SAVE KNOW YOUR CUSTOMER CHANGES
    saveKnowYourCustomer() {
        this.save_know_your_customer = false;
        this.edit_know_your_customer = true;

        this.presentloading('Updating profile ...');
        const ref = this.fs.collection("shops").doc(this.userID);
        let data  = {kyc: this.knowYourCustomerForm.value}
        ref.update(data).then(res => {
            console.log("============ KNOW YOUR CUSTOMER INFO UPDATED ============");
            this.loading.dismiss();
        }).catch(error => {
            this.loading.dismiss();
            console.log(error);
        })
    }


    async presentloading(msg) {
        this.loading = await this.load.create({
            message: msg,
        });
        await this.loading.present();
    }

    async alertShow(msg){
        const alt = await this.alert.create({
            message: msg,
            buttons: [
                {
                    text: 'No',
                    handler: () => {
                        // this.location.back();
                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                        // this.saveChanges(this.product.id) ;
                    }
                }
            ]
        });
        await alt.present();
    }


}
