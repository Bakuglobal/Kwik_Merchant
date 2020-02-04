import { Injectable, ChangeDetectorRef } from '@angular/core';
import { ActionSheetController, ToastController, LoadingController } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { AngularFireStorage } from '@angular/fire/storage';
import { DatabaseService } from '../database.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private navCtrl: Router,
    private asc: ActionSheetController,
    private http: HttpClient,
    // private camera: Camera,
    private upload: UploadService,
    private file: File,
    private toast: ToastController,
    private load: LoadingController,
    // private storage: Storage,
    // private ref: ChangeDetectorRef,
    private webview: WebView,
    private Firestorage: AngularFireStorage,
    private db: DatabaseService

  ) { }

  

  async presentToast(text) {
    const toasted = await this.toast.create({
      message: text,
      duration: 2000,
      position: "bottom"
    });
    await toasted.present();
  }
  
  uploadImage(imageURI){
    return new Promise<any>((resolve, reject) => {
      let storageRef = this.Firestorage.storage.ref();
      let imageRef = storageRef.child('image').child('imageName');
      this.encodeImageUri(imageURI, function(image64){
        imageRef.putString(image64, 'data_url')
        .then(snapshot => {
          resolve(snapshot.downloadURL)
          alert(snapshot.downloadURL);
        }, err => {
          reject(err);
        })
      })
    })
  }
  encodeImageUri(imageUri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function () {
      var aux:any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      var dataURL = c.toDataURL("image/jpeg");
      callback(dataURL);
    };
    img.src = imageUri;
  };
  
}
