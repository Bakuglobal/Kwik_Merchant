import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

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
  @Input('phone') phone ;
  constructor(
    private modal: ModalController,
    private call: CallNumber
  ) 
  { 
  }

  ngOnInit() {
    console.log('phone',this.phone);
  }


  back(){
    this.modal.dismiss()
    }
    callCustomer(){

      let num = this.phone.toString();
      this.call.callNumber(num, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    }
}


