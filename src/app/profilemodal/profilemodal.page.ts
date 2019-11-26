import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profilemodal',
  templateUrl: './profilemodal.page.html',
  styleUrls: ['./profilemodal.page.scss'],
})
export class ProfilemodalPage implements OnInit {

  constructor(
    private modalCtrl : ModalController
  ) { }

  ngOnInit() {
  }


  close(){
    this.modalCtrl.dismiss();
  }
}
