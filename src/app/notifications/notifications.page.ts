import { Component, OnInit } from '@angular/core';
import { ActionSheetController, PopoverController, ModalController, LoadingController } from '@ionic/angular';
import { DatabaseService } from '../database.service';
import { OneSignalService } from '../one-signal.service';
import { ViewNotificationPage } from '../view-notification/view-notification.page';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../models/order';
import { OrderPreviewPage } from '../order-preview/order-preview.page';
import { Location } from '@angular/common';
import { Notice } from '../models/notice';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.page.html',
    styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

    notices: Notice[];
    shop;
    Order: Order;
    none = false;

    constructor(
        private asC: ActionSheetController,
        private db: DatabaseService,
        private mod: ModalController,
        private signal: OneSignalService,
        private fs: AngularFirestore,
        private load: LoadingController,
        private location: Location
    ) {
        this.shop = localStorage.getItem('shop');
    }
    ionViewWillEnter() {
        this.signal.getmyNotification().subscribe(res => {
            this.notices = res;
            if (this.notices.length == 0) {
                this.none = true;
            }
            console.log(res);
        });
    }
    back() {
        this.location.back();
    }
    ngOnInit() {
    }
    async viewNotice(data) {
        const mod = await this.mod.create({
            component: ViewNotificationPage,
            componentProps: data
        });
        console.log(data);
        await mod.present();
    }

    async logout() {
        const asc = await this.asC.create({
            animated: true,
            backdropDismiss: true,
            cssClass: './home.page.scss',
            buttons: [{
                text: 'Logout',
                handler: () => {
                    this.db.logout();
                    localStorage.clear();
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
    // viewOrder(title) {
    //   let id = title.substring(0, 8);
    //   console.log(id);
    //   this.getOder(id);
    //   if (this.Order == undefined) {
    //     this.loader();
    //     setTimeout( () => {
    //       this.gotoModal(this.Order);
    //     },2500)
    //   } else {
    //     this.gotoModal(this.Order);
    //   }

    // }
    async getOder(id) {
        await this.fs.collection('Orders').doc(id).valueChanges().subscribe(res => {
            this.Order = res;
            console.log(this.Order);
        },
            err => { console.log(err) }
        )
    }
    async gotoModal(order) {
        const mod = await this.mod.create({
            component: OrderPreviewPage,
            componentProps: order
        });
        console.log(order);
        await mod.present();
    }
    async loader() {
        const ld = await this.load.create({
            message: 'Getting order ...',
            duration: 2500,
        });
        await ld.present();
    }

    // update(){
    //   let data  = {
    //     "Area":this.area,
    //     "Zone": this.zone
    //   }
    //   console.log(data);
    //   this.fs.collection('Areas').add(data).then(
    //     res => {
    //       console.log('added');
    //     }
    //   ).catch(err => { console.log(err)});
    // }
}
