import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FirestoreService } from '../services/firestore.service';
import { DatabaseService } from '../database.service';
import { Category } from '../models/category';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-remove-category',
  templateUrl: './remove-category.page.html',
  styleUrls: ['./remove-category.page.scss'],
})
export class RemoveCategoryPage implements OnInit {
  // variables
  categories: Category ;
  show = false ;

  constructor(
    private location: Location,
    private service: FirestoreService,
    private db: DatabaseService,
    private alert: AlertController
  ) { 
    this.service.getallcategories(localStorage.getItem('shop')).valueChanges().subscribe(res => {
      this.categories = res ;
      this.show = true ;
      console.log('categories',this.categories);
    })
  }

  ngOnInit() {
  }
back(){
  this.location.back();
}
async newCat(){
  const pop = await this.alert.create({
    header:"Enter name of the new category",
    inputs: [
      {
        name: "catName",
        placeholder: "Enter Category name"
      }
    ],
    buttons: [
      {
        text: "Cancel",
        role:'cancel'
      },
      {
        text:"Add",
        handler:(data) => {
          console.log('form popup',data);
          let cats = this.categories.categories ;
          cats.push(data.catName);
          this.service.getallcategories(localStorage.getItem('shop')).update({
            categories: cats
          })
        }
      }
    ]
  })
await pop.present();
}
DeleteCat(index){
  let cats = this.categories.categories ;
  cats.splice(index,1);
  this.service.getallcategories(localStorage.getItem('shop')).update({
    categories: cats
  })

}

}
