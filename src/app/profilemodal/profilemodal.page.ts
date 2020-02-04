import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilemodal',
  templateUrl: './profilemodal.page.html',
  styleUrls: ['./profilemodal.page.scss'],
})
export class ProfilemodalPage implements OnInit {

  // variables
  profile ;

  constructor(
    private modalCtrl : ModalController,
    private service: FirestoreService,
    private navCtrl : Router
  ) { }

  ngOnInit() {
    this.service.hiddenTabs = true ;
    this.profile = this.service.getuser()
    console.log(this.profile);
  }


  close(){
    this.service.hiddenTabs = false ;
    this.navCtrl.navigate(['tabs/profile'])
  }
}
