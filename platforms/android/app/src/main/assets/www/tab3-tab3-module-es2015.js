(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"height: 10px;width: 100%;\"></div> -->\n  <ion-card  class=\"top-card\" disabled>\n    <ion-row>\n      <ion-chip><ion-avatar><img src=\"../../assets/images/icon.png\"></ion-avatar>\n        <ion-label>You</ion-label>\n      </ion-chip>\n      <ion-input (click)=\"openPostModal()\" type=\"text\" clearInput required [(ngModel)]=\"post\" placeholder=\"Enter a new post\"></ion-input>\n    </ion-row>\n    <ion-item class=\"ion-text-center\">\n      <ion-buttons slot=\"start\" (click)=\"pickFile('image')\">\n      <ion-icon name=\"image\"></ion-icon>&nbsp;&nbsp;\n      <ion-label >Image</ion-label>\n    </ion-buttons>\n    <b style=\"margin-left: 45%;\">|</b>\n      <ion-buttons slot=\"end\" (click)=\"pickFile('video')\">\n      <ion-icon name=\"videocam\" ></ion-icon>&nbsp;&nbsp;\n      <ion-label>video</ion-label>\n    </ion-buttons>\n    </ion-item>\n  </ion-card>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\" >\n\n  <ion-card disabled>\n    <ion-card-header>\n        <ion-chip (click)=\"infoModal('shop')\">\n          <ion-avatar><img src=\"../../assets/images/icon.png\"></ion-avatar>\n          <ion-label>QuickMatt</ion-label>\n        </ion-chip>\n        1 hr . <ion-icon name=\"globe\"></ion-icon>\n    </ion-card-header>\n    <ion-card-content no-padding>\n      <img width=\"100%\" src=\"../../assets/images/ad.jpg\">\n      <ion-text>\n        Mega discounts this friday .\n      </ion-text>\n    </ion-card-content>\n    <ion-item style=\"margin-left:0;margin-right:0;\">\n        <ion-icon [ngClass]=\"{'color': h}\" (click)=\"like()\" size=\"large\" name=\"heart\"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;\n        <ion-icon  (click)=\"Addcomment = true\" size=\"large\" name=\"chatboxes\"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;\n        <ion-icon  (click)=\"share()\" name=\"share-alt\" size=\"large\"></ion-icon>\n       \n      </ion-item>\n      <div >\n        <ion-label padding>{{likes.count}} likes</ion-label><br>\n        <div>\n            <ion-item >\n                <ion-chip><ion-avatar ><img src=\"../../assets/images/icon.png\"></ion-avatar>\n                  <ion-label>1 hr .</ion-label>\n                </ion-chip>\n              <ion-col>\n                <ion-label style=\"font-size: 11pt;\">Joseph</ion-label>\n                <ion-text style=\"font-size: 10pt;\">We are very pleased with the turn up this week. looking forward to set out another mega sale discount</ion-text><br>\n              </ion-col>\n            </ion-item>\n            <div *ngIf=\"Addcomment\">\n                <ion-item >\n                    <ion-avatar ><img src=\"../../assets/images/icon.png\"></ion-avatar>&nbsp;&nbsp;\n                    <ion-textarea name=\"text\" required placeholder=\"Add a comment...\"></ion-textarea>\n                    <a >Post</a>\n                </ion-item>\n            </div>\n        </div>\n        <a padding (click)=\"comments()\">view all comments</a>\n      </div>\n  </ion-card>\n  <ion-card disabled>\n    <ion-card-header>\n        <ion-chip (click)=\"infoModal('shop')\">\n          <ion-avatar><img src=\"../../assets/images/icon.png\"></ion-avatar>\n          <ion-label>QuickMatt</ion-label>\n        </ion-chip>\n        1 hr . <ion-icon name=\"globe\"></ion-icon>\n    </ion-card-header>\n    <ion-card-content no-padding>\n      <img width=\"100%\" src=\"../../assets/images/ad.jpg\">\n      <ion-text>\n        Mega discounts this friday .\n      </ion-text>\n    </ion-card-content>\n    <ion-item style=\"margin-left:0;margin-right:0;\">\n        <ion-icon [ngClass]=\"{'color': h}\" (click)=\"like()\" size=\"large\" name=\"heart\"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;\n        <ion-icon  (click)=\"Addcomment = true\" size=\"large\" name=\"chatboxes\"></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;\n        <ion-icon  (click)=\"share()\" name=\"share-alt\" size=\"large\"></ion-icon>\n       \n      </ion-item>\n      <div >\n        <ion-label padding>{{likes.count}} likes</ion-label><br>\n        <div>\n            <ion-item >\n                <ion-chip><ion-avatar ><img src=\"../../assets/images/icon.png\"></ion-avatar>\n                  <ion-label>1 hr .</ion-label>\n                </ion-chip>\n              <ion-col>\n                <ion-label style=\"font-size: 11pt;\">Joseph</ion-label>\n                <ion-text style=\"font-size: 10pt;\">We are very pleased with the turn up this week. looking forward to set out another mega sale discount</ion-text><br>\n              </ion-col>\n            </ion-item>\n            <div *ngIf=\"Addcomment\">\n                <ion-item >\n                    <ion-avatar ><img src=\"../../assets/images/icon.png\"></ion-avatar>&nbsp;&nbsp;\n                    <ion-textarea name=\"text\" required placeholder=\"Add a comment...\"></ion-textarea>\n                    <a >Post</a>\n                </ion-item>\n            </div>\n        </div>\n        <a padding (click)=\"comments()\">view all comments</a>\n      </div>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n}\n\n.color {\n  color: #3880ff;\n}\n\nion-card {\n  margin-right: 0px;\n  margin-left: 0px;\n}\n\n.img {\n  width: 100%;\n}\n\n.top-card {\n  border-bottom: 5px var(--ion-color-secondary);\n  margin-top: 0px;\n  padding-top: 10px;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0t3aWtfTWVyY2hhbnQvc3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0EscUJBQUE7QUNBQTs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBQTtFQUNFLFdBQUE7QUNHRjs7QUREQTtFQUNFLDZDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuYXtcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jb2xvciB7XG4gICAgY29sb3I6ICMzODgwZmYgO1xufVxuaW9uLWNhcmR7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cbi5pbWd7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRvcC1jYXJke1xuICBib3JkZXItYm90dG9tOiA1cHggdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufSIsImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb2xvciB7XG4gIGNvbG9yOiAjMzg4MGZmO1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b3AtY2FyZCB7XG4gIGJvcmRlci1ib3R0b206IDVweCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _postmodal_postmodal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../postmodal/postmodal.page */ "./src/app/postmodal/postmodal.page.ts");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _infomodal_infomodal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../infomodal/infomodal.page */ "./src/app/infomodal/infomodal.page.ts");
/* harmony import */ var _comments_comments_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../comments/comments.page */ "./src/app/comments/comments.page.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");













let Tab3Page = class Tab3Page {
    constructor(navCtrl, modalCtrl, fileChooser, filePath, asC, storage, database, camera, service) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.fileChooser = fileChooser;
        this.filePath = filePath;
        this.asC = asC;
        this.storage = storage;
        this.database = database;
        this.camera = camera;
        this.service = service;
        this.videos = [];
        this.images = [];
        this.likes = { count: 0 };
        this.liked = false;
        this.h = false;
        this.Addcomment = false;
        this.service.hiddenTabs = false;
    }
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit() {
    }
    onScroll(event) {
        if (event.detail.scrollTop === 148) {
            this.service.hiddenTabs = false;
            console.log('00000000');
        }
        else {
            if (event.detail.scrollTop > 30) {
                console.log('>>>> 30');
                this.service.hiddenTabs = true;
            }
            else {
                this.service.hiddenTabs = false;
            }
        }
    }
    share() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const asc = yield this.asC.create({
                animated: true,
                backdropDismiss: true,
                cssClass: './home.page.scss',
                buttons: [{
                        icon: 'logo-whatsapp',
                        text: 'Whatsapp',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield asc.present();
        });
    }
    comments() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const com = yield this.modalCtrl.create({
                component: _comments_comments_page__WEBPACK_IMPORTED_MODULE_8__["CommentsPage"],
                componentProps: {}
            });
            yield com.present();
        });
    }
    like() {
        if (this.liked === false) {
            this.likes.count++;
            this.liked = true;
        }
        else {
            this.likes.count--;
            this.liked = false;
        }
        if (this.h === false) {
            this.h = true;
        }
        else {
            this.h = false;
        }
    }
    infoModal(url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _infomodal_infomodal_page__WEBPACK_IMPORTED_MODULE_7__["InfomodalPage"],
                componentProps: {
                    shopname: url
                }
            });
            yield modal.present();
        });
    }
    openPostModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _postmodal_postmodal_page__WEBPACK_IMPORTED_MODULE_4__["PostmodalPage"],
                componentProps: {}
            });
            yield modal.present();
        });
    }
    postFile(url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _postmodal_postmodal_page__WEBPACK_IMPORTED_MODULE_4__["PostmodalPage"],
                componentProps: { url }
            });
            yield modal.present();
        });
    }
    pickFile(value) {
        if (value === 'image') {
            // pick images
            const options = {
                quality: 100,
                destinationType: this.camera.DestinationType.FILE_URI,
                sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                targetHeight: 100,
            };
            this.camera.getPicture(options).then((image) => {
                this.images.push(image);
                // send image to create post modal
                this.postFile(this.images);
            }, (err) => {
                // handle err
            });
        }
        else {
            // pick videos
            const options = {
                quality: 100,
                destinationType: this.camera.DestinationType.FILE_URI,
                sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                // encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.VIDEO,
                targetHeight: 100,
            };
            this.camera.getPicture(options).then((video) => {
                this.videos.push(video);
            }, (err) => {
                // handel err
            });
        }
    }
};
Tab3Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__["FileChooser"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__["FilePath"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorage"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"] },
    { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_12__["FirestoreService"] }
];
Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html"),
        styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__["FileChooser"],
        _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__["FilePath"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorage"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"],
        _services_firestore_service__WEBPACK_IMPORTED_MODULE_12__["FirestoreService"]])
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map