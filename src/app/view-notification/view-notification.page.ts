import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-notification',
  templateUrl: './view-notification.page.html',
  styleUrls: ['./view-notification.page.scss'],
})
export class ViewNotificationPage implements OnInit {
  @Input('Title')Title ;
  @Input('message')message;

  constructor(
    private mod: ModalController
  ) { }

  ngOnInit() {
  }


  close(){
    this.mod.dismiss();
  }
}
