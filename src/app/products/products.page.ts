import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { Location } from '@angular/common';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatabaseService } from '../database.service';
import { Camera ,  CameraOptions} from '@ionic-native/camera/ngx';
import { Product } from '../models/product';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})

export class ProductsPage implements OnInit {
  data = {
    "barcode" : "" ,
    "name" : "" ,
    "category" : "" ,
    "wholesalePrice" : "" ,
    "retailPrice" : "" ,
    "quantity" : "" ,
    "description" : "" ,
    "image" : "" ,
  }
file: File ;
newProduct = false ;
spinner = false ;
products = [] ;
categories = [
   "stationery","beverages",
 ] ;

  constructor(
    private navCtrl: Router,
    private service: FirestoreService,
    private location: Location,
    private scannner : BarcodeScanner,
    private http : HttpClient,
    private db: DatabaseService,
    private camera: Camera,
    private alertCtrl :  AlertController
  ) {

    // this.service.hiddenTabs = true ;
   }

  ngOnInit() {
  }
  back(){
    // this.location.back();
    this.newProduct = false ;
    
  }

  new(){
    this.newProduct = true ;
  }

  addProduct(){
   if(this.data.name != "" || this.data.barcode != "" || this.data.category != "" || this.data.retailPrice !=  "" || this.data.quantity != "" || this.data.description != ""){
    this.spinner = true ;
    //upload image and get url

    //upload product info
    this.updateDb(this.data).subscribe(res => {
      if(res == 'successful'){
        alert(JSON.stringify(res));
        this.spinner = false ;
        this.newProduct = false ;
      }else {
        this.spinner = false ;
        alert(JSON.stringify(res))
      }
    })
  }else {
    this.showAlert("Fill in the fields marked with * ")
  }
  }
  scan(){
    this.scannner.scan().then( barcode => {
      this.data.barcode = barcode.toString() ;
    })
  }
  openCamera(){
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        sourceType: this.camera.PictureSourceType.CAMERA,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        targetHeight: 100,
      }
    this.camera.getPicture(options).then(img => {
      this.file = img ;
      this.fileEvent(img)
    })
  }

  updateDb(data){
     let header  = new HttpHeaders () ;
     header.append('Content-Type','application/json');
     header.append('Access-Control-Allow-Origin','*');

     let postdata = {
      "name": data.name,
      "category": data.category,
      "supplier_id": null,
      "item_number": data.barcode,
      "description": data.description,
      "cost_price": data.wholesalePrice,
      "unit_price": data.retailPrice,
      "reorder_level": 1,
      "receiving_quantity": data.quantity,
      "pic_filename": data.image,
      "allow_alt_description": 0,
      "is_serialized": 0,
      "stock_type": 0,
      "item_type": 0,
      "tax_category_id": 0,
      "deleted": 0,
      "custom1": "",
      "custom2": "",
      "custom3": "",
      "custom4": "",
      "custom5": "",
      "custom6": "",
      "custom7": "",
      "custom8": "",
      "custom9": "",
      "custom10": ""
  }

   return this.http.post("https://kwik-db-api.glitch.me/api/addproducts", postdata, {headers: header})
  }
  public fileEvent(img) {

    let header  = new HttpHeaders () ;
    header.append('Content-Type','application/json');
    header.append('Access-Control-Allow-Origin','*');

      // const elem = event.target;
      if (img != null) {
          console.log(img);
          console.log('uploading images')
          this.http.post('http://157.245.134.245/uploads',img, {headers: header}).subscribe(res => {
              console.log('succ' + res )
              this.data.image = 'http://157.245.134.245/uploads'+ img
          }, error => {
            console.log(error);
          });
      }
      
  }

  //Alert controller 
  async showAlert(msg) {
    const alert = await this.alertCtrl.create({
      header: "Missing data",
      message: msg , 
      buttons: [
        {
          text: 'Close',
          role: 'cancel'
        }
      ]
    });
    await alert.present();
  }
}
