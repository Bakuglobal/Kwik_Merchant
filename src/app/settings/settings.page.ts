import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RemoveCategoryPage } from '../remove-category/remove-category.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  // variables
  category: string ;
  setAlertLimit = true ;
  limit = 100 ;
  constructor(
    private modal: ModalController,
    private navCtrl: Router
  ) { }

  ngOnInit() {
  }

  close() {
    this.modal.dismiss();
  }
  addLimit() {
    this.limit ++ ;
  }
  reduceLimit() {
    this.limit -- ;
  }
  setLimit() {
    this.category =  null;
  }
   removeCategory() {
     this.navCtrl.navigate(['tabs/remove']);
     this.modal.dismiss();
  }

}
