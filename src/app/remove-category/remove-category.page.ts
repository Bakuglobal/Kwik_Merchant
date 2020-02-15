import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FirestoreService } from '../services/firestore.service';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-remove-category',
  templateUrl: './remove-category.page.html',
  styleUrls: ['./remove-category.page.scss'],
})
export class RemoveCategoryPage implements OnInit {
  // variables
  categories ;
  show = false ;

  constructor(
    private location: Location,
    private service: FirestoreService,
    private db: DatabaseService
  ) { 
    this.service.getallcategories(localStorage.getItem('shop')).valueChanges().subscribe(res => {
      this.categories = res ;
      this.show = true ;
    })
  }

  ngOnInit() {
  }
back(){
  this.location.back();
}

}
