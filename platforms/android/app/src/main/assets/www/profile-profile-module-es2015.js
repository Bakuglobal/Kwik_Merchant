(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"background-color: #00ade5;\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\"></ion-menu-button>\n      </ion-buttons>\n  <ion-title>\n    My Profile\n  </ion-title>\n  \n</ion-toolbar>\n</ion-header>\n<ion-content>\n  \n\n<div class=\"profile_pic\" no-padding>\n  <ion-avatar style=\"margin-top:15px;\"><img src=\"{{profile.logo}}\"></ion-avatar>\n  <ion-icon (click)=\"pickFile()\" float-right color=\"primary\" name=\"camera\" slot=\"end\"></ion-icon>\n</div>\n<div class=\"profile\">\n    \n</div>\n<div>\n<ion-card>\n  <ion-item>\n      <ion-label>Shop Name :</ion-label>\n      <ion-text>{{profile.shop}}</ion-text>\n  </ion-item>\n  <ion-item>\n      <ion-label >Email :</ion-label>\n      <ion-text>{{profile.Email}}</ion-text>\n  </ion-item>\n  <ion-item>\n      <ion-label >Contact :</ion-label>\n      <ion-text>{{profile.Contacts}}</ion-text>\n  </ion-item>\n  <ion-item>\n      <ion-label >Location :</ion-label>\n      <ion-text>{{profile.Location}}</ion-text>\n  </ion-item>\n  <ion-item>\n      <ion-label >Open hours :</ion-label>\n      <ion-text>{{profile.Open}} to {{profile.Close}}</ion-text>\n  </ion-item>\n  <ion-item>\n      <ion-label>Website :</ion-label>\n      <ion-text>{{profile.Website}}</ion-text>\n  </ion-item>\n\n</ion-card>\n<ion-button expand=\"block\" shape=\"round\" (click)=\"update()\">Update</ion-button>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  border-radius: 10px;\n}\n\n.profile {\n  height: 20px;\n}\n\n.profile_pic {\n  margin-top: 15px;\n  padding-left: 40%;\n}\n\n.profile_pic ion-avatar {\n  border: 2px solid #3880ff;\n}\n\n.profile_pic ion-icon {\n  padding-top: 0px;\n  padding-right: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0t3aWtfTWVyY2hhbnQvc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNHLFlBQUE7QUNDSDs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURESTtFQUNJLHlCQUFBO0FDR1I7O0FEREk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDR1IiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogMjdweDtcbn1cbi5wcm9maWxle1xuICAgaGVpZ2h0OiAyMHB4O1xufVxuLnByb2ZpbGVfcGlje1xuICAgIG1hcmdpbi10b3A6MTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6NDAlO1xuICAgIGlvbi1hdmF0YXJ7XG4gICAgICAgIGJvcmRlcjoycHggc29saWQgIzM4ODBmZiA7XG4gICAgfVxuICAgIGlvbi1pY29ue1xuICAgICAgICBwYWRkaW5nLXRvcDowcHggO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA3MCVcbiAgICB9XG59IiwiaW9uLXRvb2xiYXIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ucHJvZmlsZSB7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLnByb2ZpbGVfcGljIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiA0MCU7XG59XG4ucHJvZmlsZV9waWMgaW9uLWF2YXRhciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzODgwZmY7XG59XG4ucHJvZmlsZV9waWMgaW9uLWljb24ge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA3MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let ProfilePage = class ProfilePage {
    constructor(modalCtrl, fileChooser, filePath, asC, db, fs, service, navCtrl) {
        this.modalCtrl = modalCtrl;
        this.fileChooser = fileChooser;
        this.filePath = filePath;
        this.asC = asC;
        this.db = db;
        this.fs = fs;
        this.service = service;
        this.navCtrl = navCtrl;
        let id = localStorage.getItem('userID');
        console.log(id);
        this.getUser();
    }
    ngOnInit() {
    }
    update() {
        this.service.hiddenTabs = true;
        // this.service.setuser(user);
        this.navCtrl.navigate(['tabs/profilemodal']);
    }
    pickFile() {
        this.fileChooser.open().then(uri => {
            this.filePath.resolveNativePath(uri).then(resolvedURI => {
                this.image_profile = resolvedURI;
            }).catch(err => { console.log(err); });
        }).catch(err => { console.log(err); });
    }
    //get userdetails
    getUser() {
        this.profile = this.service.getuser();
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__["FileChooser"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__["FilePath"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html"),
        styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__["FileChooser"],
        _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__["FilePath"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"],
        _services_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map