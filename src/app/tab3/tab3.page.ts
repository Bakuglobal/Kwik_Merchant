import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { PostmodalPage } from '../postmodal/postmodal.page';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { InfomodalPage } from '../infomodal/infomodal.page';
import { CommentsPage } from '../comments/comments.page';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FirestoreService } from '../services/firestore.service';


 

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  videos = [];
  images = [];
  likes = {"count": 0} ;
  liked = false ;
  h = false ;
  Addcomment = false ;

   
  constructor(
    private navCtrl: Router,
    private modalCtrl: ModalController,
    private fileChooser: FileChooser,
    private filePath: FilePath,
    private asC: ActionSheetController,
    private storage: AngularFireStorage, 
    private database: AngularFirestore,
    private camera: Camera,
    private service : FirestoreService


  ) {
   
  this.service.hiddenTabs = false ;
  }

  ngOnInit(): void {
    
  }
  onScroll(event){
    if(event.detail.scrollTop == 0){
      this.service.hiddenTabs = false ;
      console.log("00000000")
    }else{
    if (event.detail.scrollTop > 30) {
      console.log(">>>> 30");
      this.service.hiddenTabs = true ;
    } else {
      this.service.hiddenTabs = false ;
    }
  }
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
  async infoModal(url){
    const modal = await this.modalCtrl.create({
      component: InfomodalPage,
      componentProps: {
        shopname: url
      }
    })
    await modal.present();
   }
  async openPostModal(){
    const modal = await this.modalCtrl.create({
      component: PostmodalPage,
      componentProps: {}
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
  pickFile(value){
    if(value == 'image'){
        //pick images
        const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.FILE_URI,
          sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          targetHeight: 100,
        }
        this.camera.getPicture(options).then((image) => {
          this.images.push(image);
          //send image to create post modal
          this.postFile(this.images);
        }, (err) => {
          //handle err
        })

    }else{
     //pick videos
     const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      // encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.VIDEO,
      targetHeight: 100,
    }
    this.camera.getPicture(options).then((video) => {
      this.videos.push(video);
    },(err) => {
      //handel err
    })

    }

  }

}
