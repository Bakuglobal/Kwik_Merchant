import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { OneSignalService } from '../one-signal.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  // variables
  animate = false;
  count ;
  constructor(
    private menuCtrl: MenuController,
    public service: FirestoreService,
    public signal: OneSignalService,
  ) {
    
  }
  ionViewWillEnter(){
    this.menuCtrl.enable(true);
    if(this.signal.noticeNew.toString() == 'Unread'){
      this.setAnimationTimeout();
    };
    this.signal.notice.subscribe(res => {
      this.count = res ;
    });
    console.log(this.count);
  }


  // set timeout for animation
  setAnimationTimeout() {
    this.animate = true;
    setTimeout(() => {
      this.animate = false;
    }, 2000);
  }


}
