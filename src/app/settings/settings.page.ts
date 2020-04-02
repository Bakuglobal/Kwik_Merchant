import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RemoveCategoryPage } from '../remove-category/remove-category.page';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Category } from '../models/category';

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
  shop ;
  categories: Category ;
  constructor(
    private modal: ModalController,
    private navCtrl: Router,
    private fs: AngularFirestore
  ) { 
    this.shop = localStorage.getItem('shop');
  }

  ngOnInit() {
    this.getCategories();
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
  getCategories(){
    this.fs.collection<Category>('Categories').doc(this.shop).valueChanges().subscribe(res => {
      this.categories = res ;
    })
  }

}
