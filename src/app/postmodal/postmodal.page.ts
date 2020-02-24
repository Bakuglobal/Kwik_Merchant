import { Component, OnInit, Input , ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ActionSheetController, ToastController } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import {Media} from '@ionic-native/media/ngx';
import {MediaCapture, CaptureImageOptions, CaptureVideoOptions, MediaFile} from '@ionic-native/media-capture/ngx'
import {File} from '@ionic-native/file/ngx';
import { Storage} from '@ionic/storage'
import { Camera , CameraOptions} from '@ionic-native/camera/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import { buffer } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

const MEDIA_FILE_KEY = 'mediaFiles';
@Component({
  selector: 'app-postmodal',
  templateUrl: './postmodal.page.html',
  styleUrls: ['./postmodal.page.scss'],
})
export class PostmodalPage implements OnInit {
  images = [];
  videos = [] ;
  @Input('logo') logo: any;
  @Input('shop') shop ;
  @ViewChild('myPosts',{static:false}) myPosts: any;
  PostedImages = [];
  PostedVideos = [];
  postText: string ;
  time ;

  constructor(
    private navCtrl: Router,
    private modalCtrl: ModalController,
    private actionSht: ActionSheetController,
    private fileChooser: FileChooser,
    private filePath: FilePath,
    private media: Media,
    private mediaCap: MediaCapture,
    private file: File,
    private storage: AngularFireStorage,
    private camera: Camera,
    private firestore: AngularFirestore,
    private toast: ToastController
  ) { }
   
  ngOnInit() {

  }
 async upload(buffer, name){
    let blob = new Blob([buffer], {type: "*"});
    let storage = this.storage.storage ;
    storage.ref('Quickmatt/' + name).put(blob).then(d=>{
      alert('upload successful '+ d)
      return d ;
    }).catch(error => { alert(JSON.stringify(error))})

  }
  
   post(){
    this.time = new Date() ;
    if(this.postText == null){
      alert('Please write something about this post');
    }else{
      //create a post in firestore
         //----first upload images or videos to storage if any
            if(this.images.length != 0){
              //upload images and get url
              this.images.forEach((element) => {
                this.file.resolveLocalFilesystemUrl(element).then((newPath) => {
                  alert(newPath);
                  let dirPath = newPath.nativeURL ;
                  let segmentsOfPath = dirPath.split('/');
                  segmentsOfPath.pop();
                  dirPath = segmentsOfPath.join('/');
                  this.file.readAsArrayBuffer(dirPath, newPath.name).then( async (buffer)=>{
                  await   this.upload(buffer, newPath.name).then(url => {
                    this.PostedImages.push(url)
                  });
                  })
                })
              })
            }
            if(this.videos.length != 0) {
              //upload videos and get url
              this.videos.forEach((element) => {
                this.file.resolveLocalFilesystemUrl(element).then((newPath) => {
                  alert(newPath);
                  let dirPath = newPath.nativeURL ;
                  let segmentsOfPath = dirPath.split('/');
                  segmentsOfPath.pop();
                  dirPath = segmentsOfPath.join('/');
                  this.file.readAsArrayBuffer(dirPath, newPath.name).then( async (buffer)=>{
                  await   this.upload(buffer, newPath.name).then(url => {
                    this.PostedVideos.push(url);
                  });
                  }).catch(err => {alert(JSON.stringify(err))})
                })
              })
            }
      //Now create the post
      this.firestore.collection('posts').add({
        Text: this.postText,
        Images: this.PostedImages,
        Videos: this.PostedVideos,
        likes: 0,
        comments: 0,
        shop: this.shop,
        logo: this.logo,
        time: this.time,
        lastComment: {
          Text: '',
          image: '',
          postID: '',
          time: '',
          user: 'Maxime Lee'
        }
      }).then(() => {
                      //if everything went well --display success toast and close postmodal
            this.images.length = 0 ;
            this.videos.length = 0 ;
            this.PostedImages.length = 0 ;
            this.PostedVideos.length = 0 ;
            this.postText = ''
            this.presentToast('Your post was created successfully')
            this.modalCtrl.dismiss();
      }).catch(err => {alert(JSON.stringify(err))})

    }
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
          allowEdit: true
        }
        this.camera.getPicture(options).then((image) => {
          this.images.push(image);
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
      //handle err
      alert(err);
    })

    }
  }

  close(){
    this.images.length = 0 ;
    this.videos.length = 0 ;
    // this.PostedImages.length = 0 ;
    // this.PostedVideos.length = 0 ;
    this.postText = ''
    this.modalCtrl.dismiss();
  }

  async actionSheet(){
    const asc = await this.actionSht.create({
      animated: true ,
      backdropDismiss: true ,
      cssClass: './postmodal.page.scss',
      buttons: [{
        text: 'Select Image',
        icon: 'image',
        handler: () => {
         this.pickFile('image');
        }
      },
      {
        text: 'Select Video',
        icon: 'play',
        handler: () => {
          this.pickFile('video');
      }
      },
      {
        text: 'Capture Video',
        icon: 'videocam',
        handler: () => {
          this.openCamera('video');
      }},
      {
        text: 'Capture Image',
        icon: 'camera',
        handler: () => {
          this.openCamera('image');
      },
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ]
    });
    await asc.present();
    
    
  }
  
  async openCamera(value){
    if(value == 'image'){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG ,
      mediaType: this.camera.MediaType.PICTURE,
      targetHeight: 100 ,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: true,
      cameraDirection: this.camera.Direction.BACK,
    }
    this.camera.getPicture(options).then((image) => {
      this.images.push(image)
    })

  }else {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      // encodingType: this.camera.EncodingType.JPEG ,
      mediaType: this.camera.MediaType.VIDEO,
      targetHeight: 100 ,
      sourceType: this.camera.PictureSourceType.CAMERA,
      cameraDirection: this.camera.Direction.BACK,
    }
    this.camera.getPicture(options).then((video) => {
      this.videos.push(video);
    })
  }
  }
  //toast messages
 async  presentToast(data){
    let toast =  await this.toast.create({
      message: data,
      duration:  2000,
      position: "bottom",
      cssClass: "msgToast"
    })
    await toast.present()
  }
  
}
