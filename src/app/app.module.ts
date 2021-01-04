import { NgModule, } from '@angular/core';
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
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

// FIREBASE
import { AngularFireModule, } from '@angular/fire';
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
import {FileChooser} from '@ionic-native/file-chooser/ngx';
import {FilePath} from '@ionic-native/file-path/ngx';
import { File} from '@ionic-native/file/ngx';
import {MediaCapture} from '@ionic-native/media-capture/ngx';
import {Media} from '@ionic-native/media/ngx';
import { IonicStorageModule} from '@ionic/storage';
import { Contacts } from '@ionic-native/contacts';
import { ProfilemodalPageModule } from './profilemodal/profilemodal.module';
import { Camera} from '@ionic-native/camera/ngx';
import { HttpClientModule } from '@angular/common/http';
import { OrdersPageModule } from './orders/orders.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SettingsPageModule } from './settings/settings.module';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx' ;
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { OrderPreviewPageModule } from './order-preview/order-preview.module';
import { ViewNotificationPageModule } from './view-notification/view-notification.module';
import { ImageDisplayPageModule } from './image-display/image-display.module';
import { Badge } from '@ionic-native/badge/ngx';
import { Network } from '@ionic-native/network/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { NotificationModelPageModule } from './notification-model/notification-model.module';




@NgModule({
  declarations: [AppComponent],
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
    ProfilemodalPageModule,
    OrdersPageModule,
    ReactiveFormsModule,
    SettingsPageModule,
    OrderPreviewPageModule,
    ViewNotificationPageModule,
    ImageDisplayPageModule,
    NotificationModelPageModule

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    ImagePicker,
    Contacts,
    OpenNativeSettings,
    BarcodeScanner,
    AngularFireDatabase,
    AngularFirestore,
    AngularFireStorage,
    FileChooser,
    Badge,
    Geolocation,
    NativeGeocoder,
    FilePath,
    Keyboard,
    Crop,
    File,
    MediaCapture,
    Media,
    WebView,
    OneSignal,
    CallNumber,
    Firebase,
    Camera,
    Network,
    DocumentViewer,
    FCM,
    LocalNotifications,
    SocialSharing,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
