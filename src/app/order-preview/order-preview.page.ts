import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { FirestoreService } from '../services/firestore.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
    selector: 'app-order-preview',
    templateUrl: './order-preview.page.html',
    styleUrls: ['./order-preview.page.scss'],
})
export class OrderPreviewPage implements OnInit {

    @Input('OderID') OrderID;
    @Input('notes') notes;
    @Input('pickDay') pickDay;
    @Input('username') username;
    @Input('pickMins') pickMins;
    @Input('pickHour') pickHour;
    @Input('products') products;
    @Input('Date') Date;
    @Input('status') status;
    @Input('Delivery') Delivery;
    @Input('phone') phone;

    prod;
    total;
    userDetail;
    view = false;
    isready = false;



    constructor(
        private modal: ModalController,
        private call: CallNumber,
        private service: FirestoreService,
        private ts: ToastController,
        private navCtrl: Router,
        private fs: AngularFirestore,
    ) {
    }

    ionViewDidEnter() {
        let OrderId = this.OrderID.slice(0, 8);
        console.log(OrderId);
        this.service.getOrderFromNotification(OrderId).subscribe(res => {
            console.log("===== ORDER ID =====");
            console.log(res);
            this.prod = res;
            let id = this.prod.userID;
            this.getCustomerDetails(id);
            this.view = true;
        })
    }

    ngOnInit() {
        console.log('phone', this.phone);
    }


    back() {
        this.modal.dismiss()
    }
    // call the client
    callUserNumber(number) {
        console.log(number);
        this.call.callNumber(number, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }


    //calculate total for items
    getTotalCart() {
        return this.total = this.prod.products.reduce((a, b) => a + (b.count * b.currentprice), 0);
    }

    // get customer details
    getCustomerDetails(id) {
        this.service.getCustomer(id).valueChanges().subscribe(res => {
            console.log("===== USER DETAILS =====");
            this.userDetail = res;
            console.log(res)
        })
    }



    // order is ready
    ready(id, user) {
        let ref = this.fs.collection('Orders').doc(id);
        ref.update(
            { status: 'Ready' }
        )
        this.toast('Notification send to' + '' + user).then(
            res => {
                // this.isready  = true ;
                this.navCtrl.navigate(['tabs/dashboard'])
            }
        )
    }
    // order is paid 
    complete(id) {
        let ref = this.fs.collection('Orders').doc(id);
        ref.update(
            { status: 'complete' }
        )
        this.toast('Order completed ').then(
            res => {
                this.navCtrl.navigate(['tabs/dashboard'])
            }
        )
    }


    //toast
    async toast(data) {
        const toasted = await this.ts.create({
            message: data,
            duration: 2000
        });
        toasted.present();
    }


}


