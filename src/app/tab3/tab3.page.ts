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
import { Observable, Subscription } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { FirestoreService } from '../services/firestore.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ImageDisplayPage } from '../image-display/image-display.page';
import { User } from '../models/user';
import { DatabaseService } from '../database.service';
import { Post } from '../models/post';
import { Reaction } from '../models/reaction';




@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    videoPath = [];
    imagePath = [];
    likes = { "count": 0, 'userId': [] };
    disLikes = { "count": 0, 'userId': [] };
    liked = false;
    h = false;
    Addcomment = false;
    text: string;
    hiddenHeader = false;
    searchTerm: string;
    unfilteredPosts = [];
    likesReaction: Reaction;
    unSubscribe: Subscription;


    //Status check 
    isUploading: boolean;
    isUploaded: boolean;

    // SHOW SEARCHBAR
    showSearch = false;
    user: User;
    Posts = [];
    comment = [];


    constructor(
        private navCtrl: Router,
        private modalCtrl: ModalController,
        // private fileChooser: FileChooser,
        // private filePath: FilePath,
        private asC: ActionSheetController,
        private storage: AngularFireStorage,
        private db: DatabaseService,
        private service: FirestoreService,
        private socialSharing: SocialSharing,
        private fs: AngularFirestore


    ) {
        this.isUploading = false;
        this.isUploaded = false;

    }

    onScroll(event) {
        if (event.detail.scrollTop == 0) {
            this.service.hiddenTabs = false;
            this.hiddenHeader = false;
            console.log("00000000")
        } else {
            if (event.detail.scrollTop > 30) {
                console.log(">>>> 30");
                this.service.hiddenTabs = true;
                this.hiddenHeader = true;
            } else {
                this.service.hiddenTabs = false;
            }
        }
    }

    ngOnInit() {
        this.user = this.service.getuser();
        console.log(this.user);
        this.db.getPosts().subscribe(res => {
            this.Posts = res;
            this.unfilteredPosts = res;
            console.log('POSTS :', res)
        });
    }

    getLikes(postId) {
        return this.service.getLikes(postId).valueChanges();
    }
    
    AddComment() {
        if (this.Addcomment == true) {
            this.Addcomment = false;
        } else {
            this.Addcomment = true;
        }
    }


    async whatsappshare(item) {
        let msg = item.Text;
        let img = item.logo;
        let url = item.id;
        this.socialSharing.shareViaWhatsApp(msg, img, url).then(()=>{
          console.log("whatsapp share successful");
        }).catch(err => {console.log(err)});
    }

    searchShop() {
        if (this.searchTerm !== '' || this.searchTerm !== null) {
            this.Posts = this.filterItems();
            console.log(this.Posts);
        }
    }

    filterItems() {
        return this.unfilteredPosts.filter(item => {
            return item.shop.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        });
    }

    async share(item) {
        const asc = await this.asC.create({
            animated: true,
            backdropDismiss: true,
            cssClass: './home.page.scss',
            buttons: [{
                icon: 'logo-whatsapp',
                text: 'Whatsapp',

                handler: () => {
                    this.whatsappshare(item);
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

    async comments(postId) {
        const com = await this.modalCtrl.create({
            component: CommentsPage,
            componentProps: { "postId":  postId, "owner": this.user}
        })
        await com.present();
    }


    like(item) {
        console.log("=====LIKES===");
        let user = localStorage.getItem('user');
        console.log(user);
        this.unSubscribe = this.getLikes(item.id).subscribe(res => {
            if (res === undefined) {
                this.likes.count++;
                this.likes.userId.push(user);
                this.liked = true;
                let likeRef = this.fs.collection('Likes').doc(item.id);
                likeRef.set({
                    likes: this.likes,
                    disLikes: this.disLikes
                });
                // this.updateLikewIcon();
                return this.unSubscribe.unsubscribe();
            } else {
                this.likesReaction = res;
                console.log("=====reaction======");
                console.log(res);
    
                this.likes = this.likesReaction.likes;
                this.disLikes = this.likesReaction.disLikes;
                if (this.liked == false) {
                    this.likes.count++;
                    let index = this.disLikes.userId.indexOf(user);
                    this.disLikes.userId.splice(index, 1);
                    this.disLikes.count--;
                    this.likes.userId.push(user);
                    this.liked = true;
                    let likeRef = this.fs.collection('Likes').doc(item.id);
                    likeRef.update({
                        likes: this.likes,
                        disLikes: this.disLikes
                    }); 
                    this.updateLikewIcon();
                    return this.unSubscribe.unsubscribe();
                } else {
                    this.likes.count--;
                    let index = this.likes.userId.indexOf(user);
                    this.likes.userId.splice(index, 1);
                    console.log("=====LIKES ======");
                    console.log(this.likes);
                    
                    this.disLikes.count++;
                    this.disLikes.userId.push(user);
                    this.liked = false;
                    let likeRef = this.fs.collection('Likes').doc(item.id);
                    likeRef.update({
                        disLikes: this.disLikes,
                        likes: this.likes
                    });
                    this.updateLikewIcon();
                    return this.unSubscribe.unsubscribe() ;
                }
            }
        },error => {
            console.log(error);
        });
    }

    updateLikewIcon() {
        if (this.h == false) {
            this.h = true;
        } else {
            this.h = false;
        } 
    }

    async infoModal(item) {
        const modal = await this.modalCtrl.create({
            component: InfomodalPage,
            componentProps: {
                "shopname": item.shop,
                "logo": item.logo
            }
        })
        await modal.present();
    }

    async openPostModal() {
        const modal = await this.modalCtrl.create({
            component: PostmodalPage,
            componentProps: this.user
        })
        await modal.present();
    }

    async postFile(url) {
        const modal = await this.modalCtrl.create({
            component: PostmodalPage,
            componentProps: { url }
        })
        await modal.present();
    }
    
    notifications() {
        this.navCtrl.navigate(['tabs/notifications']);
    }

    Post() {
        this.text = null;
    }



    show() {
        if (this.showSearch == false) {
            this.showSearch = true;
        } else {
            this.showSearch = false;
        }
    }

    // DISPLAY IMAGE IN A MODEL
    showImage(url) {
        this.modalCtrl.create({
            component: ImageDisplayPage,
            componentProps: {
                img: url
            }
        }).then(modal => modal.present());

    }
}
