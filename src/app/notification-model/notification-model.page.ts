import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Howl, Howler } from 'howler';


@Component({
    selector: 'app-notification-model',
    templateUrl: './notification-model.page.html',
    styleUrls: ['./notification-model.page.scss'],
})
export class NotificationModelPage implements OnInit {
  @Input('title')title:string ;
  @Input('body')body:string;
  sound: any;
    constructor(private modal: ModalController) { }

    ngOnInit() {
        this.playSong();
    }

    playSong() {
        this.sound = new Howl({
            src: ['../../assets/song/song.wav']
        });
        this.sound.play();
    }


    closeButton() {
        this.sound.stop();
        this.modal.dismiss();
    }

}
