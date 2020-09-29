(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/notifications/notifications.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/notifications/notifications.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button autoHide=\"false\"></ion-menu-button>\n          </ion-buttons>\n        <!-- <ion-buttons slot=\"start\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\" size=\"large\"></ion-icon>\n        </ion-buttons> -->\n        <ion-title text-center style=\"margin-right: 25px;\">Notifications</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content style=\"background: #dedede;\">\n    <div style=\"text-align: center; margin-top: 40%;\" *ngIf=\"none\">\n        <div class=\"icon\">\n            <ion-icon  size=\"large\" src=\"../../assets/images/alarm.svg\"></ion-icon>\n        </div>\n        <ion-spinner  *ngIf=\"!none\" color=\"primary\"></ion-spinner><br>\n        <ion-label style=\"color: #737373; font-size: 13px;\">You have no notifications</ion-label>\n    </div>\n\n\n    <div style=\"margin-right: 15px; margin-left: 15px;\">\n        <ion-card *ngFor=\"let item of notices\"  [ngClass]=\"{'unread': item.status == 'unread'}\">\n            <div style=\"margin-left: 15px; margin-top: 10px;\">\n                    <img src=\"../../assets/images/icon.png\" style=\"width: 30px; height: 30px;\">\n            </div>\n            <div style=\"position: absolute; margin-top: -30px; margin-left: 55px;\">\n                <div style=\"font-size: 13px; color: #737373; font-weight: bold; margin-bottom: 5px;\">{{item.Title}}</div>\n                <div style=\"font-size: 11px; color: #737373;\">{{ item.Date.toDate() | date }}</div>\n            </div>\n            <ion-card-content style=\"margin-top: 5px;\">\n                <div style=\"font-size: 13px; font-weight: bold; color: #737373;\">A New  order for :</div>\n                <div style=\"font-size: 12px; color: #737373;\" *ngFor=\"let n of item.message\">{{n}}, </div>\n            </ion-card-content>\n        </ion-card>\n    </div>\n  <!-- <div class=\"ion-text-center\" style=\"margin-top: 200px;\">\n    <ion-icon size=\"large\" name=\"flash\"></ion-icon><br>\n    <ion-label>You have no Notifications</ion-label>\n  </div> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/notifications/notifications.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");







const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]
    }
];
let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
    })
], NotificationsPageModule);



/***/ }),

/***/ "./src/app/notifications/notifications.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  margin-left: 0px;\n  margin-right: 0px;\n  border-radius: 5px;\n}\n\nion-avatar {\n  text-align: center;\n  width: 50px;\n  height: 50px;\n}\n\nspan {\n  text-transform: capitalize;\n  color: grey;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0tXSUsvQW5kL0t3aWtfTWVyY2hhbnQvc3JjL2FwcC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic3JjL2FwcC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XG59XG5pb24tYXZhdGFye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5zcGFue1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6IGdyZXkgO1xuICBmb250LXdlaWdodDogYm9sZCA7XG59IiwiaW9uLWNhcmQge1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5pb24tYXZhdGFyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG5zcGFuIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/notifications/notifications.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _one_signal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../one-signal.service */ "./src/app/one-signal.service.ts");
/* harmony import */ var _view_notification_view_notification_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view-notification/view-notification.page */ "./src/app/view-notification/view-notification.page.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _order_preview_order_preview_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../order-preview/order-preview.page */ "./src/app/order-preview/order-preview.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");









let NotificationsPage = class NotificationsPage {
    constructor(asC, db, mod, signal, fs, load, location) {
        this.asC = asC;
        this.db = db;
        this.mod = mod;
        this.signal = signal;
        this.fs = fs;
        this.load = load;
        this.location = location;
        this.none = false;
        this.shop = localStorage.getItem('shop');
    }
    ionViewWillEnter() {
        this.signal.getmyNotification().subscribe(res => {
            this.notices = res;
            if (this.notices.length == 0) {
                this.none = true;
            }
            console.log(res);
        });
    }
    back() {
        this.location.back();
    }
    ngOnInit() {
    }
    viewNotice(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const mod = yield this.mod.create({
                component: _view_notification_view_notification_page__WEBPACK_IMPORTED_MODULE_5__["ViewNotificationPage"],
                componentProps: data
            });
            console.log(data);
            yield mod.present();
        });
    }
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const asc = yield this.asC.create({
                animated: true,
                backdropDismiss: true,
                cssClass: './home.page.scss',
                buttons: [{
                        text: 'Logout',
                        handler: () => {
                            this.db.logout();
                            localStorage.clear();
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
    // viewOrder(title) {
    //   let id = title.substring(0, 8);
    //   console.log(id);
    //   this.getOder(id);
    //   if (this.Order == undefined) {
    //     this.loader();
    //     setTimeout( () => {
    //       this.gotoModal(this.Order);
    //     },2500)
    //   } else {
    //     this.gotoModal(this.Order);
    //   }
    // }
    getOder(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.fs.collection('Orders').doc(id).valueChanges().subscribe(res => {
                this.Order = res;
                console.log(this.Order);
            }, err => { console.log(err); });
        });
    }
    gotoModal(order) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const mod = yield this.mod.create({
                component: _order_preview_order_preview_page__WEBPACK_IMPORTED_MODULE_7__["OrderPreviewPage"],
                componentProps: order
            });
            console.log(order);
            yield mod.present();
        });
    }
    loader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const ld = yield this.load.create({
                message: 'Getting order ...',
                duration: 2500,
            });
            yield ld.present();
        });
    }
};
NotificationsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _one_signal_service__WEBPACK_IMPORTED_MODULE_4__["OneSignalService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] }
];
NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications',
        template: __webpack_require__(/*! raw-loader!./notifications.page.html */ "./node_modules/raw-loader/index.js!./src/app/notifications/notifications.page.html"),
        styles: [__webpack_require__(/*! ./notifications.page.scss */ "./src/app/notifications/notifications.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _one_signal_service__WEBPACK_IMPORTED_MODULE_4__["OneSignalService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
], NotificationsPage);



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module-es2015.js.map