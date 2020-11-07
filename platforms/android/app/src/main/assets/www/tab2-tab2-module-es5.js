(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"background-color: #3880ff;\">\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button autoHide=\"false\"></ion-menu-button>\n          </ion-buttons>\n      <ion-title>\n       Chats\n      </ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-icon name=\"log-out\"  (click)=\"logout()\"></ion-icon>\n      </ion-buttons>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n    \n  <!--no messages yet-->\n  <div class=\"ion-text-center\" *ngIf=\"myChat.length == 0\" style=\"margin-top: 200px;\">\n    <ion-label>You have no messages</ion-label>\n  </div>\n    <ion-card (click)=\"chatModal(chat)\" *ngFor=\"let chat of myChat \">\n        <ion-row>\n           <ion-col size=\"2\"> <ion-avatar><img src=\"../../assets/images/icon.png\" alt=\"img\"></ion-avatar></ion-col>\n           <ion-col padding> \n              <span>{{chat.SendTo}}</span><br>\n              <span>{{msg}}</span>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n      <ion-fab vertical=\"bottom\" horizontal=\"end\" (click)=\"newChatModal()\">\n        <ion-fab-button icon-only>\n          <ion-icon name=\"chatbubbles\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGxhcmFzc2VtbWF4d2VsbC9EZXNrdG9wL05ld21hcmsvS3dpa19NZXJjaGFudC9zcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxtQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLXRvb2xiYXJ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiAyN3B4O1xuICB9IiwiaW9uLXRvb2xiYXIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chatmodal_chatmodal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chatmodal/chatmodal.page */ "./src/app/chatmodal/chatmodal.page.ts");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _newchatmodal_newchatmodal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../newchatmodal/newchatmodal.page */ "./src/app/newchatmodal/newchatmodal.page.ts");








var Tab2Page = /** @class */ (function () {
    function Tab2Page(navCtrl, modalCtrl, fs, db, asC) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.fs = fs;
        this.db = db;
        this.asC = asC;
        this.myChat = [];
        this.recepients = [];
        this.sender = [];
    }
    Tab2Page.prototype.ngOnInit = function () {
        this.userID = localStorage.getItem('userID');
        this.userPhone = localStorage.getItem('userPhone');
        this.getChatsFromMe();
        this.getChatsToMe();
    };
    Tab2Page.prototype.logout = function () {
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
    Tab2Page.prototype.getChatsFromMe = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.fs.collection('chats', function (ref) { return ref.orderBy('Time', 'asc'); }).ref.where('UserID', '==', this.userID)
                    .onSnapshot(function (querySnapshot) {
                    querySnapshot.docChanges().forEach(function (change) {
                        if (change.type === 'added') {
                            console.log('New chat: ', change.doc.data());
                            _this.myChat.push(change.doc.data());
                            console.log(_this.myChat);
                            _this.receivedMsg = _this.myChat[0].Message;
                            console.log(_this.receivedMsg.length);
                            if (_this.receivedMsg.length > 100) {
                                _this.msg = _this.receivedMsg.substring(0, 80) + '...';
                            }
                            else {
                                _this.msg = _this.receivedMsg;
                            }
                        }
                        if (change.type === 'modified') {
                            console.log('Modified chat: ', change.doc.data());
                        }
                        if (change.type === 'removed') {
                            console.log('Removed chat: ', change.doc.data());
                        }
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    Tab2Page.prototype.getChatsToMe = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.fs.collection('chats').ref.where('sendTo', '==', this.userPhone)
                    .onSnapshot(function (querySnapshot) {
                    querySnapshot.docChanges().forEach(function (change) {
                        if (change.type === 'added') {
                            console.log('New chat: ', change.doc.data());
                        }
                        if (change.type === 'modified') {
                            console.log('Modified chat: ', change.doc.data());
                        }
                        if (change.type === 'removed') {
                            console.log('Removed chat: ', change.doc.data());
                        }
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    Tab2Page.prototype.groupChats = function (allchats) {
        var _this = this;
        var i;
        allchats.forEach(function (chat) {
            _this.recepients.push(chat.sendTo);
        });
    };
    Tab2Page.prototype.chatModal = function (chat) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _chatmodal_chatmodal_page__WEBPACK_IMPORTED_MODULE_5__["ChatmodalPage"],
                            componentProps: { SendTo: chat.SendTo },
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab2Page.prototype.newChatModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _newchatmodal_newchatmodal_page__WEBPACK_IMPORTED_MODULE_7__["NewchatmodalPage"],
                            componentProps: {}
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab2Page.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] }
    ]; };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map