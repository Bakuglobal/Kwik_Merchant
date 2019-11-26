import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private menuCtrl: MenuController,
    public service: FirestoreService,
  ) {
    this.menuCtrl.enable(true);
  }

}
