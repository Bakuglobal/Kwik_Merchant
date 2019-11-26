import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx' ;
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';


//FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database'; 
import { AngularFirestore } from '@angular/fire/firestore';
import { ChatmodalPageModule } from './chatmodal/chatmodal.module';
import { PostmodalPageModule } from './postmodal/postmodal.module';
import { SokomodalPageModule } from './sokomodal/sokomodal.module';
import { NewchatmodalPageModule } from './newchatmodal/newchatmodal.module';
import { CommentsPageModule } from './comments/comments.module';
import { InfomodalPageModule } from './infomodal/infomodal.module';
import  {FileChooser} from '@ionic-native/file-chooser/ngx';
import {FilePath} from '@ionic-native/file-path/ngx';
import { File} from '@ionic-native/file/ngx';
import {MediaCapture} from '@ionic-native/media-capture/ngx';
import {Media} from '@ionic-native/media/ngx';
import { IonicStorageModule} from '@ionic/storage';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Contacts } from '@ionic-native/contacts';
import { ProfilemodalPageModule } from './profilemodal/profilemodal.module';
import { FileSizeFormatPipe } from './tab3/file-size-format.pipe';
import { Camera} from '@ionic-native/camera/ngx'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent,FileSizeFormatPipe],
  entryComponents: [],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    IonicModule.forRoot(), 
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    ChatmodalPageModule,
    PostmodalPageModule,
    SokomodalPageModule,
    NewchatmodalPageModule,
    CommentsPageModule,
    InfomodalPageModule,
    ProfilemodalPageModule


  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Contacts,
    OpenNativeSettings,
    BarcodeScanner,
    AngularFireDatabase,
    AngularFirestore,
    AngularFireStorage,
    FileChooser,
    Geolocation,
    NativeGeocoder,
    GooglePlus,
    FilePath,
    File,
    MediaCapture,
    Media,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
