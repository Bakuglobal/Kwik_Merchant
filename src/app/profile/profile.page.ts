import { Component, OnInit } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { ProfilemodalPage } from '../profilemodal/profilemodal.page';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { DatabaseService } from '../database.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreService } from '../services/firestore.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Shop } from '../models/shops';
import { Post } from '../models/post';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  shopname:string ;
  logo:string;
  shop: Shop;
  Posts = [];
  loaded = false ;
    //variables
      liked = false ;
      h     = false ;
      Addcomment = false ;
      showSearch = false ;
  //objects
      likes = {"count":0}

  constructor(
    private modalCtrl: ModalController,
    private fileChooser: FileChooser,
    private filePath: FilePath,
    private asC: ActionSheetController,
    private db: DatabaseService,
    private fs: AngularFirestore,
    private service: FirestoreService,
    private navCtrl: Router

  ) {
    this.shopname = localStorage.getItem('shop');
  }
ionViewWillEnter(){
  this.getShop();

}
  ngOnInit() {
  }
  scanAndPay() {
    this.modalCtrl.dismiss(["scan",this.shopname]);
    this.navCtrl.navigate(['tabs/shop']);
  }
  pickPayCollect() {
    this.modalCtrl.dismiss(["pick",this.shopname]);
    this.navCtrl.navigate(['tabs/offers']);
  }
  // goto shoppinglist page
  Delivery() {
    this.modalCtrl.dismiss(["delivery",this.shopname]);
    this.navCtrl.navigate(['tabs/offers']);
  }
//share via whatsapp
    async share(){
      const asc = await this.asC.create({
        animated: true ,
        backdropDismiss: true ,
        cssClass: './home.page.scss',
        buttons: [{
          icon: 'logo-whatsapp',
          text: 'Whatsapp',
          handler: () => {
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
//add a comment
      AddComment(){
        if(this.Addcomment == true){
          this.Addcomment = false;
        }else {
        this.Addcomment = true;
      }
      }
// like posts
      like(){
        if(this.liked == false){
          this.likes.count++ ;
          this.liked = true ;
        }else {
          this.likes.count--;
          this.liked = false ;
        }
      if(this.h == false){
        this.h = true ;
      }else{
        this.h = false ;
      }
        
      }
//close the modal

      close(){
        this.modalCtrl.dismiss()
      }
//go to maps to see location of the shop

      async maps(){
        // const map = await this.modalCtrl.create({
        //   component: SokomodalPage,
        //   componentProps: {'shoplocation':this.shop.Location} 
        // });
        // console.log('location',this.shop.Location);
        // await map.present();
      }
//open a link in a browser inside the app

      inbrowser(link){
        console.log("Opens link in the app");
        const target = '_blank';
        // const options = { location : 'no' } ;
        // this.iab.create(link,target);
      }
      show(){

      }
      infoModal(shop,logo){

      }
      showImage(){

      }
      comments(){

      }
      // get shop details
      getShop(){
       let data = this.fs.collection<Shop>('shops',ref => {
         return  ref.where('shop','==',this.shopname)
        });
         let snap = data.snapshotChanges().pipe(
          map(actions => {
            return actions.map(a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id ;
              return { id, ... data};
            });
          })
        );
        snap.subscribe(res => {
          this.shop = res[0];
          console.log('shop details', this.shop);
        });
        this.getPosts();
      }
      getPosts(){
        let posts = this.fs.collection<Post>('posts',ref => {
          return ref.where('shop','==',this.shopname).orderBy('time','desc')
        })
        let fd = posts.snapshotChanges().pipe(
          map(actions => {
            return actions.map(a => {
              const id = a.payload.doc.id ;
              const data = a.payload.doc.data();
              return {id, ... data}
            });
          })
        );
        fd.subscribe(res => {
          this.Posts = res ;
          this.loaded = true ;
          console.log(this.Posts);
        });
      }
     
    
}
