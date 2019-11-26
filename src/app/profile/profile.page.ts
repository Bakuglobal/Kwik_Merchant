import { Component, OnInit } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { ProfilemodalPage } from '../profilemodal/profilemodal.page';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  image_profile;
  constructor( 
    private modalCtrl: ModalController,
    private fileChooser: FileChooser,
    private filePath: FilePath,
    private asC: ActionSheetController,
    private db: DatabaseService
    
    ) { }

  ngOnInit() {
  }


  async update(){
    const upd = await this.modalCtrl.create({
      component: ProfilemodalPage,
      componentProps: {}
    })
    await upd.present();
  }

  pickFile(){
    this.fileChooser.open().then(uri => {
      this.filePath.resolveNativePath(uri).then(resolvedURI => {
        this.image_profile = resolvedURI ;
      }).catch( err => {console.log(err)})
    }).catch(err => {console.log(err)})
  }
  async logout(){
    const asc = await this.asC.create({
      animated: true ,
      backdropDismiss: true ,
      cssClass: './home.page.scss',
      buttons: [{
        text: 'Logout',
        handler: () => {
          this.db.logout();
          localStorage.clear();
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
}
