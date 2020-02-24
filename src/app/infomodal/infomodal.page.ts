import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SokomodalPage } from '../sokomodal/sokomodal.page';
import { CommentsPage } from '../comments/comments.page';

@Component({
  selector: 'app-infomodal',
  templateUrl: './infomodal.page.html',
  styleUrls: ['./infomodal.page.scss'],
})
export class InfomodalPage implements OnInit {

@Input('url') shopname ;
  likes = {"count": 0} ;
  liked = false ;
  h = false ;
  Addcomment = false ;

  constructor(
    private modalCtrl: ModalController,
    

  ) { }

  ngOnInit() {
  }


  close(){
    this.modalCtrl.dismiss()
  }
  async maps(){
    const map = await this.modalCtrl.create({
      component: SokomodalPage,
      componentProps: {} 
    })
    await map.present();
  }
  inbrowser(){
    console.log("Opens link in the app");
  }
  infoModal(shop){

  }
  like(){
    if(this.liked == false){
      this.likes.count++ ;
      this.liked = true ;
    }else {
      this.likes.count--;
      this.liked = false ;
    }
   if(this.h == false){
     this.h = true ;
   }else{
    this.h = false ;
   }
    
  }
  async comments(){
    const com = await this.modalCtrl.create({
      component: CommentsPage,
      componentProps: {}

    })
    await com.present();
  }
  share(){

  }
}
