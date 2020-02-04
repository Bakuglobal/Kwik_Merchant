import { Component, OnInit } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { ProfilemodalPage } from '../profilemodal/profilemodal.page';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { DatabaseService } from '../database.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreService } from '../services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  image_profile;
  profile;
  docID;
  constructor( 
    private modalCtrl: ModalController,
    private fileChooser: FileChooser,
    private filePath: FilePath,
    private asC: ActionSheetController,
    private db: DatabaseService,
    private fs: AngularFirestore,
    private service: FirestoreService,
    private navCtrl: Router
    
    ) 
    {
      let id = localStorage.getItem('userID');
      console.log(id)
      this.getUser();
     }

  ngOnInit() {
    
  }

   update(){
    this.service.hiddenTabs = true ;
    // this.service.setuser(user);
    this.navCtrl.navigate(['tabs/profilemodal']);
  }

  pickFile(){
    this.fileChooser.open().then(uri => {
      this.filePath.resolveNativePath(uri).then(resolvedURI => {
        this.image_profile = resolvedURI ;
      }).catch( err => {console.log(err)})
    }).catch(err => {console.log(err)})
  }
  
//get userdetails
getUser(){
  this.profile = this.service.getuser();
}

  
  
}
