import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ModalController, ToastController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';

@Component({
    selector: 'app-view-notification',
    templateUrl: './view-notification.page.html',
    styleUrls: ['./view-notification.page.scss'],
})

export class ViewNotificationPage implements OnInit {
    @Input('Title') Title;
    @Input('Date') Date;
    prod;
    total;
    userDetail;
    view = false;
    isready = false;


    constructor(
        private mod: ModalController,
        private fs: AngularFirestore,
        private service: FirestoreService,
        private call: CallNumber, private ts: ToastController,
        private navCtrl: Router,
    ) {

    }

    ionViewDidEnter() {
        let OrderId = this.Title.slice(0, 8);
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

    ngOnInit() { }


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




    close() {
        this.mod.dismiss();
    }


}
