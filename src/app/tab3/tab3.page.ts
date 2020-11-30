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
import { post } from 'jquery';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import {Howl, Howler} from 'howler';

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
        private fs: AngularFirestore,
        private localNotifications: LocalNotifications


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
            console.log('POSTS :', res);
            this.Posts.forEach(post=> {
                this.alreadyLiked(post);
            })
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

    alreadyLiked(post) {
        this.service.alreadyLiked(post.id).valueChanges().subscribe(res => {
            console.log("===ALREADY LIKED====");
            console.log(res);
            if (res == undefined) {
                return ;
            } else {

                if (res.likes.userId.includes(localStorage.getItem('user'))) {
                    let index = this.Posts.indexOf(post);
                    this.Posts[index].liked = true;
                    console.log("===SECOND ALREADY LIKED====");
                    console.log(this.Posts[index]);
                } 
            }
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


    single_notification() {

        this.fs.collection('Orders').doc('22GHPD93').set({
            Complete: 'False',
            Date: new Date(),
            Delivery: 'deliver',
            DeliveryFee: 166,
            Location: 'T-Mall',
            OrderID: '22GHPD93',
            notes: '',
            payment: 'unpaid',
            products: [{
                barcode: 0,
                category: 'Soaps',
                count: 1,
                currentprice: 700,
                description: 'Get  handcrafted Moringa Soap from Kipusa beauty.It contains anti-inflammatory and antiseptic properties ,that prevents premature ageing of the skin and protects it from the environment.It also detoxifies and cleanses the skin',
                id: 'tuoktUrkamWy7TnP8Wjq',
                image: 'https://firebasestorage.googleapis.com/v0/b/kwikapp-77d77.appspot.com/o/Kipusa%20Beauty%2Fmoringa%20soap.webp?alt=media&token=502a73fe-a1d5-4c85-b52c-945b2b1311fd',
                product: 'Moringa Soap',
                quantity: 1,
                shop: 'Kipusa Beauty',
                shopID: '7RKckWZtYFaV0UsiHJbwC55Xt673',
                status: 'Available',
                stock: 5
            }],
            shop: 'Alumni Club by the Caballeros',
            status: 'open',
            userID: 'ZJIGdz653TSpLzBLtPDIGJM1mas2',
            username: 'Stephen Gachoka'
        });
    }


}
