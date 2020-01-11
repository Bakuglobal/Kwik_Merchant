import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ModalController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  

  prod ;
   constructor(
     private modalCtrl : ModalController,
     private service: FirestoreService,
     private navCtrl: Router
   ) { 
     this.service.hiddenTabs = true ;
      this.prod = this.service.getItems();
     console.log(this.prod)
   }


   close(){
     this.service.hiddenTabs = false ;
     this.navCtrl.navigate(['tabs/dashboard'])
   }
  ngOnInit() {
  }

}
