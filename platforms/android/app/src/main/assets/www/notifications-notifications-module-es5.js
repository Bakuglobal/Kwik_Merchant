(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/notifications/notifications.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/notifications/notifications.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button autoHide=\"false\"></ion-menu-button>\n          </ion-buttons>\n        <!-- <ion-buttons slot=\"start\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\" size=\"large\"></ion-icon>\n        </ion-buttons> -->\n        <ion-title text-center style=\"margin-right: 25px;\">Notifications</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content style=\"background: #dedede;\">\n    <div style=\"text-align: center; margin-top: 40%;\" *ngIf=\"none\">\n        <div class=\"icon\">\n            <ion-icon  size=\"large\" src=\"../../assets/images/alarm.svg\"></ion-icon>\n        </div>\n        <ion-spinner  *ngIf=\"!none\" color=\"primary\"></ion-spinner><br>\n        <ion-label style=\"color: #737373; font-size: 13px;\">You have no notifications</ion-label>\n    </div>\n\n\n    <div style=\"margin-right: 15px; margin-left: 15px;\">\n        <ion-card *ngFor=\"let item of notices\"  [ngClass]=\"{'unread': item.status == 'unread'}\" (click)=\"viewNotice(item)\">\n            <div style=\"margin-left: 15px; margin-top: 10px;\">\n                    <img src=\"../../assets/images/icon.png\" style=\"width: 30px; height: 30px;\">\n            </div>\n            <div style=\"position: absolute; margin-top: -30px; margin-left: 55px;\">\n                <div style=\"font-size: 13px; color: #737373; font-weight: bold; margin-bottom: 5px;\">{{item.Title}}</div>\n                <div style=\"font-size: 11px; color: #737373;\">{{ item.Date.toDate() | date }}</div>\n            </div>\n            <ion-card-content style=\"margin-top: 5px;\">\n                <div style=\"font-size: 13px; font-weight: bold; color: #737373;\">A New  order for :</div>\n                <div style=\"font-size: 12px; color: #737373;\" *ngFor=\"let n of item.message\">{{n}}, </div>\n            </ion-card-content>\n        </ion-card>\n    </div>\n  <!-- <div class=\"ion-text-center\" style=\"margin-top: 200px;\">\n    <ion-icon size=\"large\" name=\"flash\"></ion-icon><br>\n    <ion-label>You have no Notifications</ion-label>\n  </div> -->\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");







var routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]
    }
];
var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
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
    return NotificationsPageModule;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  margin-left: 0px;\n  margin-right: 0px;\n  border-radius: 5px;\n}\n\nion-avatar {\n  text-align: center;\n  width: 50px;\n  height: 50px;\n}\n\nspan {\n  text-transform: capitalize;\n  color: grey;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGxhcmFzc2VtbWF4d2VsbC9EZXNrdG9wL05ld21hcmsvS3dpa19NZXJjaGFudC9zcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiLCJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcbn1cbmlvbi1hdmF0YXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbnNwYW57XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogZ3JleSA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkIDtcbn0iLCJpb24tY2FyZCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmlvbi1hdmF0YXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbnNwYW4ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _one_signal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../one-signal.service */ "./src/app/one-signal.service.ts");
/* harmony import */ var _view_notification_view_notification_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view-notification/view-notification.page */ "./src/app/view-notification/view-notification.page.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _order_preview_order_preview_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../order-preview/order-preview.page */ "./src/app/order-preview/order-preview.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");









var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(asC, db, mod, signal, fs, load, location) {
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
    NotificationsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.signal.getmyNotification().subscribe(function (res) {
            _this.notices = res;
            if (_this.notices.length == 0) {
                _this.none = true;
            }
            console.log(res);
        });
    };
    NotificationsPage.prototype.back = function () {
        this.location.back();
    };
    NotificationsPage.prototype.ngOnInit = function () {
    };
    NotificationsPage.prototype.viewNotice = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mod;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mod.create({
                            component: _view_notification_view_notification_page__WEBPACK_IMPORTED_MODULE_5__["ViewNotificationPage"],
                            componentProps: data
                        })];
                    case 1:
                        mod = _a.sent();
                        console.log(data);
                        return [4 /*yield*/, mod.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationsPage.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var asc;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.asC.create({
                            animated: true,
                            backdropDismiss: true,
                            cssClass: './home.page.scss',
                            buttons: [{
                                    text: 'Logout',
                                    handler: function () {
                                        _this.db.logout();
                                        localStorage.clear();
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        asc = _a.sent();
                        return [4 /*yield*/, asc.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
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
    NotificationsPage.prototype.getOder = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fs.collection('Orders').doc(id).valueChanges().subscribe(function (res) {
                            _this.Order = res;
                            console.log(_this.Order);
                        }, function (err) { console.log(err); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationsPage.prototype.gotoModal = function (order) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mod;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mod.create({
                            component: _order_preview_order_preview_page__WEBPACK_IMPORTED_MODULE_7__["OrderPreviewPage"],
                            componentProps: order
                        })];
                    case 1:
                        mod = _a.sent();
                        console.log(order);
                        return [4 /*yield*/, mod.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationsPage.prototype.loader = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ld;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.load.create({
                            message: 'Getting order ...',
                            duration: 2500,
                        })];
                    case 1:
                        ld = _a.sent();
                        return [4 /*yield*/, ld.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _one_signal_service__WEBPACK_IMPORTED_MODULE_4__["OneSignalService"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] }
    ]; };
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
    return NotificationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module-es5.js.map