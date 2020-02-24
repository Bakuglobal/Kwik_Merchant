import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, LoadingController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-profilemodal',
  templateUrl: './profilemodal.page.html',
  styleUrls: ['./profilemodal.page.scss'],
})
export class ProfilemodalPage implements OnInit {

  // variables
  profile ;
  load ;

  constructor(
    private modalCtrl: ModalController,
    private service: FirestoreService,
    private navCtrl: Router,
    private fs: AngularFirestore,
    private toast: ToastController,
    private loading: LoadingController
  ) { }

  ngOnInit() {
    this.service.hiddenTabs = true;
    this.profile = this.service.getuser()
    console.log(this.profile);
  }


  close() {
    this.service.hiddenTabs = false;
    this.navCtrl.navigate(['tabs/profile'])
  }
  save() {
    this.loader('Updating');
    let data = {
      Close: this.profile.Close,
      Contacts: this.profile.Contacts,
      Email: this.profile.Email,
      Location: this.profile.Location,
      Open: this.profile.Open,
      Website: this.profile.Website,
      logo: this.profile.logo,
      shop: this.profile.shop
    }

    this.fs.collection('shops').doc(localStorage.getItem('userID'))
      .update(data).then(res => {
        this.toasted('Profile update successful');
        this.load.dismiss();
      }).catch(err => {
        console.log(err);
        this.load.dismiss();
      })
  }
  async toasted(msg){
    const ts = await this.toast.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });
    await ts.present();
  }
  async loader(msg){
     this.load = await this.loading.create({
      message: msg ,
    });
     await this.load.present() ;
  }
}
