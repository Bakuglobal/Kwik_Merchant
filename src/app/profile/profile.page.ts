import { Component, OnInit } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { ProfilemodalPage } from '../profilemodal/profilemodal.page';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { DatabaseService } from '../database.service';
import { AngularFirestore } from '@angular/fire/firestore';

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
    private fs: AngularFirestore
    
    ) { }

  ngOnInit() {
    localStorage.getItem('')
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
//get orders from firestore
async profileDetails(id){

  return await this.fs.collection('shops').ref.where('userID', '==', id)
    .onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          console.log('New oder: ', change.doc.data());
          this.docID.push(change.doc.id);
          this.profile.push(change.doc.data());
                  
        } 
        if (change.type === 'modified') {
          console.log('Modified order: ', change.doc.data());
          //find index of product in local array
          let id = change.doc.id ;
          let index = this.docID.indexOf(id)
 
          let modified =  change.doc.data() ;
          
          //replace the product in the local array <--Myorders--> with the modified one
          this.profile[index] = modified;
 
          } 
        if (change.type === 'removed'){
          console.log('Removed order: ', change.doc.data());
          //find index of product in local array
          let id = change.doc.id ;
          let index = this.docID.indexOf(id)
 
          let removed =  change.doc.data() ;
          
          //remove the order from the local array <--Myorders--> 
          this.profile.splice(index,1);
         
        }
      });
  });
  
  }
}
