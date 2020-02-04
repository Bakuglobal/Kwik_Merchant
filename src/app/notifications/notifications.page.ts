import { Component, OnInit } from '@angular/core';
import { ActionSheetController, PopoverController, ModalController } from '@ionic/angular';
import { DatabaseService } from '../database.service';
import { OneSignalService } from '../one-signal.service';
import { ViewNotificationPage } from '../view-notification/view-notification.page';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  newNotice;
  notices : any;
  none = false ;

  constructor(
    private asC: ActionSheetController,
    private db: DatabaseService,
    private mod: ModalController,
    private signal: OneSignalService
  )
   { 
    this.newNotice = this.signal.getNoticeData() ;
    console.log(this.newNotice)
    if(this.newNotice !== undefined){
      this.viewNotice(this.newNotice);
    }
    this.signal.getmyNotification().valueChanges().subscribe(res => {
      this.notices = res ;
      this.none = true ;
    })
   }

  ngOnInit() {
  }
 async  viewNotice(data) {
   const mod = await this.mod.create({
     component: ViewNotificationPage,
     componentProps: data
   });
   console.log(data);
   await mod.present();
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
