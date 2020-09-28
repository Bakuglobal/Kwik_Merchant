import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { DatabaseService } from '../database.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { FirestoreService } from '../services/firestore.service';
import { User } from '../models/user';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.page.html',
    styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
    postId: any;
    owner:any;
    comments: any;
    user;
    userName:any;
    userLogo:any;
    returnUserDetails: Subscription;
    commentText: any;
    constructor(
        private modalCtrl: ModalController,
        private navParams: NavParams,
        private storage: AngularFireStorage,
        private db: DatabaseService,
        private service: FirestoreService,
        private fs: AngularFirestore
    ) { 

    }

    ngOnInit() {
        this.user = localStorage.getItem('user');
        this.userName = localStorage.getItem('shop');
        this.userLogo = localStorage.getItem('logo');
        this.postId = this.navParams.get('postId');        
       console.log("====LOGO======");
       console.log(this.userLogo);
       
       
        this.db.getPostsComments(this.postId).subscribe(res => {
            this.comments = res;
            console.log('Comments: ', res);
        });
    }

    close() {
        this.modalCtrl.dismiss();
    }



    postComment() {
        console.log("=============");
        console.log('User: '+this.user);
        console.log('Post Id: '+this.postId);
        var comment = {
            Text: this.commentText,
            image: '',
            postID: this.postId,
            time: new Date(),
            userId: this.user,
            userName: this.userName,
            userLogo: this.userLogo
        }
        const ref = this.fs.collection("comments").doc(this.postId).collection('allComments');
        ref.add(comment).then(res => {
           this.commentText = '';
            console.log("============ OK ============");
            // this.loading.dismiss();
        }).catch(error => {
            // this.loading.dismiss();
            console.log(error);
        })
    }



}
