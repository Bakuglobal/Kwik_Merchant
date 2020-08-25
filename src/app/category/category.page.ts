import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Category } from '../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  // @Input("shopname") shopname ;
  form: FormGroup;
  shopname;
  Allcategories ;
  view = "show all categories";
  showCat = false;

  constructor(
    private modal: ModalController,
    private formBuilder: FormBuilder,
    private fs: AngularFirestore
  ) {


    this.shopname = localStorage.getItem('shop');
    console.log('shop is ==> ' + this.shopname);

    this.form = this.formBuilder.group({
      Date: [Date().toString()],
      categories: this.formBuilder.array([
        this.initTechnologyFields()
      ])
    });

    // get all categories 

    this.fs.collection('Categories').doc(this.shopname).valueChanges().subscribe(res => {
      this.Allcategories = res;
    });

  }

  ngOnInit() {
  }

  back() {
    this.modal.dismiss();
  }
  showallCategories() {
    if (this.view === "show all categories") {
      this.view = "Hide categories";
      this.showCat = true;
    }else{
    if (this.view = "Hide categories") {
      this.view === "show all categories";
      this.showCat = false;
    }}
  }
  initTechnologyFields(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required]
    });
  }
  addNewInputField(): void {
    const control = <FormArray>this.form.get('categories')['controls' ];
    control.push(this.initTechnologyFields());
  }
  removeInputField(i: number): void {
    const control = <FormArray>this.form.controls.categories;
    control.removeAt(i);
  }
  manage(val: any): void {
    let arr = [];
    val.categories.forEach(item => {
      arr.push(item.name)
    });
    let cat = {
      Date: new Date(),
      categories: arr
    }
    this.upload(cat);
    console.dir(cat);
    this.form.reset();
  }
  async upload(data) {

    let ref = this.fs.collection('Categories').doc(this.shopname);
    if (this.Allcategories == null) {
      await ref.set(data);
    } else {
      console.log(this.Allcategories)
      this.Allcategories.categories.forEach(item => {
        data.categories.push(item);
      })
      await ref.update(data);
    }

  }

}
