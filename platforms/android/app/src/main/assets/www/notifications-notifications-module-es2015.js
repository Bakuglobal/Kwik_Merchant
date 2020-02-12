(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/notifications/notifications.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/notifications/notifications.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content color=\"primary\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" padding>\n      <ion-menu-button color=\"\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Notifications</ion-title>\n\n  </ion-toolbar>\n\n  <ion-card class=\"card-main\">\n\n    <div class=\"ion-text-center\" style=\"margin-top: 200px;\" *ngIf=\"!none\">\n      <ion-label padding>You have no Notifications</ion-label>\n    </div>\n    <!-- Unread notices -->\n    <!-- <ion-label padding color=\"primary\">Unread Notifications</ion-label> -->\n    <!-- <ion-card class=\"notice-unread\" padding (click)=\"viewNotice(item)\">\n      <ion-card-title>9DOB4K Order canceled</ion-card-title>\n      <ion-card-content>Mangoes, sugar,maize...</ion-card-content>\n      <ion-label style=\"float: left;\">James</ion-label>\n      <ion-label style=\"float: right;\">4:30Pm</ion-label>\n    </ion-card> -->\n  <!-- read notices -->\n  <!-- <ion-label padding color=\"primary\">Read Notifications </ion-label> -->\n  <ion-card class=\"notice-unread\" padding (click)=\"viewNotice(item)\" *ngFor=\"let item of notices\">\n    <ion-card-title>{{item.Title}}</ion-card-title>\n    <ion-card-content>{{item.message}}</ion-card-content>\n    <ion-label style=\"float: left;\"></ion-label>\n    <ion-label style=\"float: right;\">4:30Pm</ion-label>\n  </ion-card>\n  </ion-card>\n</ion-content>"

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

module.exports = ".card-main {\n  background-color: var(--ion-color-light);\n  border-radius: 20px 20px 0px 0px;\n  margin-bottom: 0px;\n  width: 100%;\n  height: 100%;\n  margin-left: 0px;\n}\n\n.notice-unread {\n  border-radius: 15px;\n  background-color: white;\n  text-transform: capitalize;\n}\n\n.notice-read {\n  border-radius: 15px;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0t3aWtfTWVyY2hhbnQvc3JjL2FwcC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic3JjL2FwcC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usd0NBQUE7RUFDQSxnQ0FBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FDREY7O0FER0E7RUFDRSxtQkFBQTtFQUNBLDBCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2FyZC1tYWlue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcbiAgLy8gbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMHB4O1xuXG59XG4ubm90aWNlLXVucmVhZHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLm5vdGljZS1yZWFke1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn0iLCIuY2FyZC1tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLm5vdGljZS11bnJlYWQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5ub3RpY2UtcmVhZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufSJdfQ== */"

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






let NotificationsPage = class NotificationsPage {
    constructor(asC, db, mod, signal) {
        this.asC = asC;
        this.db = db;
        this.mod = mod;
        this.signal = signal;
        this.none = false;
        this.newNotice = this.signal.getNoticeData();
        console.log(this.newNotice);
        if (this.newNotice !== undefined) {
            this.viewNotice(this.newNotice);
        }
        this.signal.getmyNotification().valueChanges().subscribe(res => {
            this.notices = res;
            this.none = true;
        });
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
};
NotificationsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _one_signal_service__WEBPACK_IMPORTED_MODULE_4__["OneSignalService"] }
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
        _one_signal_service__WEBPACK_IMPORTED_MODULE_4__["OneSignalService"]])
], NotificationsPage);



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module-es2015.js.map