import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewchatmodalPage } from './newchatmodal.page';

const routes: Routes = [
  {
    path: '',
    component: NewchatmodalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewchatmodalPage]
})
export class NewchatmodalPageModule {}
