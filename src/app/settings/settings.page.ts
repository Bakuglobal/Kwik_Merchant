import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Category } from '../models/category';
import { StockAlert } from '../models/stockAlert';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  // variables
  category: string;
  setAlertLimit = true;
  limit = 100;
  shop;
  categories: Category;
  userID: string;
  stockAlert: StockAlert;
  MyAlerts : StockAlert[] = [];
  alerts = [];
  constructor(
    private modal: ModalController,
    private navCtrl: Router,
    private fs: AngularFirestore,
    private ts: ToastController,
    private db: DatabaseService
  ) {
    this.shop = localStorage.getItem('shop');
    this.userID = localStorage.getItem('user');

  }

  ngOnInit() {
    this.getCategories();
    this.getAlerts();
  }

  close() {
    this.modal.dismiss();
  }
  addLimit() {
    this.limit++;
  }
  reduceLimit() {
    this.limit--;
  }
  setLimit() {
    this.alerts.push({
      name: this.category,
      limit: this.limit
    });
    this.setAlert();

  }
  removeCategory() {
    this.navCtrl.navigate(['tabs/remove']);
    this.modal.dismiss();
  }
  getCategories() {
    this.fs.collection<Category>('Categories').doc(this.shop).valueChanges().subscribe(res => {
      this.categories = res;
    })
  }
  getAlerts() {
    this.db.getAlaerts(this.userID).subscribe(res => {
      this.MyAlerts = res[0].categories
      console.log(res);
    })
  }
  DeleteAlert(index){
    this.MyAlerts.splice(index,1);
    this.alerts = this.MyAlerts ;
    this.stockAlert = {
      Date: new Date(),
      Status: "on",
      categories: this.alerts
    }
    this.db.StockAlert(this.userID).update(this.stockAlert).then(res => {
      console.log(res);
      this.toast("Alert deleted ✅");
      this.category = null;
      this.limit = 100;
    }).catch(error => {
      console.log(error);
    })
  }
  setAlert() {
    this.stockAlert = {
      Date: new Date(),
      Status: "on",
      categories: this.alerts
    }
    if (this.MyAlerts.length > 0) {
      this.db.StockAlert(this.userID).update(this.stockAlert).then(res => {
        console.log(res);
        this.toast("Alert for" + this.category + " " + " Set ✅");
        this.category = null;
        this.limit = 100;
      }).catch(error => {
        console.log(error);
      })
    } else {
      this.db.StockAlert(this.userID).set(this.stockAlert).then(res => {
        console.log(res);
        this.toast("Alert for" + this.category + " " + " Set ✅");
        this.category = null;
        this.limit = 100;
      }).catch(error => {
        console.log(error);
      })
    }

  }
  async toast(data) {
    const tspop = await this.ts.create({
      message: data,
      duration: 1000,
      position: 'bottom'
    });
    await tspop.present();
  }
  setOffAlert() {
    var state;
    if (this.setAlertLimit) {
      state = "off";
      this.db.StockAlert(this.userID).update({
        Status: state
      }).then(res => {
        this.toast("Stock alerts is OFF 🔕");
      })
    } else {
      state = "on";
      this.db.StockAlert(this.userID).update({
        Status: state
      }).then(res => {
        this.toast("Stock alerts is ON 🔛");
      })
    }
  }

}
