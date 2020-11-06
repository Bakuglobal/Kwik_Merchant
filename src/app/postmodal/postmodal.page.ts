import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ActionSheetController, ToastController, AlertController } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Media } from '@ionic-native/media/ngx';
import { MediaCapture, CaptureImageOptions, CaptureVideoOptions, MediaFile } from '@ionic-native/media-capture/ngx'
import { File } from '@ionic-native/file/ngx';
import { Storage } from '@ionic/storage'
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
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
    videos = [];
    @Input('logo') logo: any;
    @Input('shop') shop;
    @ViewChild('myPosts', { static: false }) myPosts: any;
    PostedImages = [];
    PostedVideos = [];
    postText: string;
    time;
    userName: string;
    userLogo: any;
    date = new Date();

    slideOpts = {
        initialSlide: 0,
        slidesPerView: 1,
        autoplay: false
    };

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
        private toast: ToastController,
        public alertController: AlertController
    ) { }

    ngOnInit() {
        this.userName = localStorage.getItem('shop');
        this.userLogo = localStorage.getItem('logo');
    }
    async upload(buffer, name) {
        let blob = new Blob([buffer], { type: "*" });
        let storage = this.storage.storage;
        storage.ref('Quickmatt/' + name).put(blob).then(d => {
            alert('upload successful ' + d)
            return d;
        }).catch(error => { alert(JSON.stringify(error)) })

    }

    post() {
        this.time = new Date();
        if (this.postText == null) {
            this.presentAlert('Please write something about this post');
        } else {
            //create a post in firestore
            //----first upload images or videos to storage if any
            if (this.images.length != 0) {
                this.images.forEach((element) => {
                    this.uploadImage(element);
                    this.PostedImages.push(element);
                })
            }
            if (this.videos.length != 0) {
                this.videos.forEach((element) => {
                    this.uploadVideo(element);
                    this.PostedVideos.push(element);
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
                logo: this.userLogo,
                time: this.time,
                lastComment: {
                    Text: '',
                    image: '',
                    postID: '',
                    time: '',
                    user: ''
                }
            }).then(() => {
                this.images.length = 0;
                this.videos.length = 0;
                this.PostedImages.length = 0;
                this.PostedVideos.length = 0;
                this.postText = ''
                this.presentToast('Your post was created successfully')
                this.modalCtrl.dismiss();
            }).catch(err => { alert(JSON.stringify(err)) })

        }
    }

    uploadImage(image) {
        const pictures = this.storage.storage.ref('PostImages' + '/' + this.date);
        pictures.putString(image).then(url => {
            url.ref.getDownloadURL().then(url => {
                this.PostedImages.push(url);
            }).catch(error => { })
        }).catch(error => { })
    }
    uploadVideo(video) {
        const pictures = this.storage.storage.ref('PostVideos' + '/' + this.date);
        pictures.putString(video).then(url => {
            url.ref.getDownloadURL().then(url => {
                this.PostedImages.push(url);
            }).catch(error => { })
        }).catch(error => { })
    }


    pickFile(value) {
        if (value == 'image') {
            //pick images
            const options: CameraOptions = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                targetHeight: 100,
                allowEdit: true
            }
            this.camera.getPicture(options).then((image) => {
                let newImage = `data:image/jpeg;base64,${image}`;
                this.images.push(newImage);
            }, (err) => {
                //handle err
            })
        } else {
            //pick videos
            const options: CameraOptions = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                // encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.VIDEO,
                targetHeight: 100,
            }
            this.camera.getPicture(options).then((video) => {
                let newVideo = `data:video/mp4;base64,${video}`;
                this.videos.push(newVideo);
            }, (err) => {
                //handle err
                alert(err);
            })

        }
    }

    close() {
        this.images.length = 0;
        this.videos.length = 0;
        this.postText = ''
        this.modalCtrl.dismiss();
    }

    async actionSheet() {
        const asc = await this.actionSht.create({
            animated: true,
            backdropDismiss: true,
            cssClass: './postmodal.page.scss',
            buttons: [{
                text: 'Select Image',
                icon: 'image',
                handler: () => {
                    this.pickFile('image');
                }
            },
            {
                text: 'Capture Image',
                icon: 'camera',
                handler: () => {
                    this.openCamera('image');
                },
            },
            // {
            //     text: 'Select Video',
            //     icon: 'play',
            //     handler: () => {
            //         this.pickFile('video');
            //     }
            // },
            // {
            //     text: 'Capture Video',
            //     icon: 'videocam',
            //     handler: () => {
            //         this.openCamera('video');
            //     }
            // },
            {
                text: 'Cancel',
                role: 'cancel'
            }
            ]
        });
        await asc.present();


    }

    async openCamera(value) {
        if (value == 'image') {
            const options: CameraOptions = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                targetHeight: 100,
                sourceType: this.camera.PictureSourceType.CAMERA,
                allowEdit: true,
                cameraDirection: this.camera.Direction.BACK,
            }
            this.camera.getPicture(options).then((image) => {
                let newImage = `data:image/jpeg;base64,${image}`;
                this.images.push(newImage);
            })

        } else {
            const options: CameraOptions = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                // encodingType: this.camera.EncodingType.JPEG ,
                mediaType: this.camera.MediaType.VIDEO,
                targetHeight: 100,
                sourceType: this.camera.PictureSourceType.CAMERA,
                cameraDirection: this.camera.Direction.BACK,
            }
            this.camera.getPicture(options).then((video) => {
                let newVideo = `data:image/jpeg;base64,${video}`;
                this.videos.push(newVideo);
            })
        }
    }
    //toast messages
    async presentToast(data) {
        let toast = await this.toast.create({
            message: data,
            duration: 2000,
            position: "bottom",
            cssClass: "msgToast"
        })
        await toast.present()
    }



    async presentAlert(message: String) {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          message: ''+message+'',
          buttons: ['OK']
        });
        await alert.present();
    }
    
      
    
      

}
