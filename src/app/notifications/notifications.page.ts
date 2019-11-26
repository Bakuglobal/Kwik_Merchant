import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  constructor(
    private asC: ActionSheetController,
    private db: DatabaseService
  ) { }

  ngOnInit() {
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
