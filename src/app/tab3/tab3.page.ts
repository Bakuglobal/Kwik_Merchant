import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { PostmodalPage } from '../postmodal/postmodal.page';
// import { FilePath } from '@ionic-native/file-path/ngx';
// import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { InfomodalPage } from '../infomodal/infomodal.page';
import { CommentsPage } from '../comments/comments.page';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { FirestoreService } from '../services/firestore.service';
// import { SocialSharing } from '@ionic-native/social-sharing/ngx'
import { ImageDisplayPage } from '../image-display/image-display.page';
import { User } from '../models/user';
import { DatabaseService } from '../database.service';
import { Post } from '../models/post';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  videoPath = [];
  imagePath = [];
  likes = {"count": 0} ;
  liked = false ;
  h = false ;
  Addcomment = false ;
  text: string ;
  hiddenHeader = false ;
  searchTerm : string ;
  unfilteredPosts = [] ;

 
  //Status check 
  isUploading:boolean;
  isUploaded:boolean;
 
  // SHOW SEARCHBAR
  showSearch = false;
  user : User;
  Posts = [] ;
  comment = [] ;


  constructor(
    private navCtrl: Router,
    private modalCtrl: ModalController,
    // private fileChooser: FileChooser,
    // private filePath: FilePath,
    private asC: ActionSheetController,
    private storage: AngularFireStorage, 
    private db: DatabaseService,
    private service: FirestoreService,
    // private socialSharing: SocialSharing


  ) {
    this.isUploading = false;
    this.isUploaded = false;
    
  }

  onScroll(event){
    if(event.detail.scrollTop == 0){
      this.service.hiddenTabs = false ;
      this.hiddenHeader = false ;
      console.log("00000000")
    }else{
    if (event.detail.scrollTop > 30) {
      console.log(">>>> 30");
      this.service.hiddenTabs = true ;
      this.hiddenHeader = true ;
    } else {
      this.service.hiddenTabs = false ;
    }
  }
  }
  
  ngOnInit() {
    this.user = this.service.getuser() ;
    console.log(this.user);
    this.db.getPosts().subscribe(res => {
      this.Posts = res ;
      this.unfilteredPosts = res ;
      console.log('POSTS :',res)
    });
  }
  AddComment(){
    if(this.Addcomment == true){
      this.Addcomment = false;
    }else {
    this.Addcomment = true;
  }
  }
  async whatsappshare(){


    //share via whatsapp
    let msg = "Kwik Shopping List ";
    let img = '../assets/images/icon.png' ;
    let url = 'https://weza-prosoft.com';
    // this.socialSharing.shareViaWhatsApp(msg, null, url).then(()=>{
    //   console.log("whatsapp share successful")
    // }).catch(err => {console.log(err)});
}
  
searchShop(){
  if(this.searchTerm !== '' || this.searchTerm !== null){
    this.Posts = this.filterItems();
    console.log(this.Posts);
  }
}
filterItems() {
  return this.unfilteredPosts.filter(item => {
    return item.shop.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
  });
}

  async share(){
    const asc = await this.asC.create({
      animated: true ,
      backdropDismiss: true ,
      cssClass: './home.page.scss',
      buttons: [{
        icon: 'logo-whatsapp',
        text: 'Whatsapp',
        
        handler: () => {
          this.whatsappshare()
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
  async comments(){
    const com = await this.modalCtrl.create({
      component: CommentsPage,
      componentProps: {}

    })
    await com.present();
  }
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
  async infoModal(item){
    const modal = await this.modalCtrl.create({
      component: InfomodalPage,
      componentProps: {
        "shopname": item.shop,
        "logo": item.logo
      }
    })
    await modal.present();
   }
  async openPostModal(){
    const modal = await this.modalCtrl.create({
      component: PostmodalPage,
      componentProps: this.user
    })
    await modal.present();
   }
   async postFile(url){
    const modal = await this.modalCtrl.create({
      component: PostmodalPage,
      componentProps: {url}
    })
    await modal.present();
   }
   notifications(){
    this.navCtrl.navigate(['tabs/notifications']);
  }
 
  Post(){
    this.text = null ;
  }



  show(){
    if(this.showSearch == false){
      this.showSearch = true;
    }else{
      this.showSearch = false ;
    }
  }

// DISPLAY IMAGE IN A MODEL
  showImage(url){
    this.modalCtrl.create({
        component: ImageDisplayPage,
        componentProps: {
            img: url
        }
    }).then(modal => modal.present());

   }
}
