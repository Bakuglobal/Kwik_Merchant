import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-order-preview',
  templateUrl: './order-preview.page.html',
  styleUrls: ['./order-preview.page.scss'],
})
export class OrderPreviewPage implements OnInit {

  @Input('OderID') OrderID ;
  @Input('notes') notes ;
  @Input('pickDay') pickDay ;
  @Input('username') username ;
  @Input('pickMins') pickMins ;
  @Input('pickHour') pickHour ;
  @Input('products') products ;
  @Input('Date') Date ;
  @Input('status') status ;
  @Input('Delivery') Delivery ;
  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() {
  }


  back(){
    this.modal.dismiss()
    }

}


