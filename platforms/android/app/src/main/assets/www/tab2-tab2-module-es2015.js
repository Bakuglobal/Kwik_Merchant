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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







let Tab2PageModule = class Tab2PageModule {
};
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



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0t3aWtfTWVyY2hhbnQvc3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi10b29sYmFye1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogMjdweDtcbiAgfSIsImlvbi10b29sYmFyIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chatmodal_chatmodal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chatmodal/chatmodal.page */ "./src/app/chatmodal/chatmodal.page.ts");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _newchatmodal_newchatmodal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../newchatmodal/newchatmodal.page */ "./src/app/newchatmodal/newchatmodal.page.ts");








let Tab2Page = class Tab2Page {
    constructor(navCtrl, modalCtrl, fs, db, asC) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.fs = fs;
        this.db = db;
        this.asC = asC;
        this.myChat = [];
        this.recepients = [];
        this.sender = [];
    }
    ngOnInit() {
        this.userID = localStorage.getItem('userID');
        this.userPhone = localStorage.getItem('userPhone');
        this.getChatsFromMe();
        this.getChatsToMe();
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
    getChatsFromMe() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.fs.collection('chats', ref => ref.orderBy('Time', 'asc')).ref.where('UserID', '==', this.userID)
                .onSnapshot(querySnapshot => {
                querySnapshot.docChanges().forEach(change => {
                    if (change.type === 'added') {
                        console.log('New chat: ', change.doc.data());
                        this.myChat.push(change.doc.data());
                        console.log(this.myChat);
                        this.receivedMsg = this.myChat[0].Message;
                        console.log(this.receivedMsg.length);
                        if (this.receivedMsg.length > 100) {
                            this.msg = this.receivedMsg.substring(0, 80) + '...';
                        }
                        else {
                            this.msg = this.receivedMsg;
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
        });
    }
    getChatsToMe() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.fs.collection('chats').ref.where('sendTo', '==', this.userPhone)
                .onSnapshot(querySnapshot => {
                querySnapshot.docChanges().forEach(change => {
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
        });
    }
    groupChats(allchats) {
        var i;
        allchats.forEach(chat => {
            this.recepients.push(chat.sendTo);
        });
    }
    chatModal(chat) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _chatmodal_chatmodal_page__WEBPACK_IMPORTED_MODULE_5__["ChatmodalPage"],
                componentProps: { SendTo: chat.SendTo },
            });
            yield modal.present();
        });
    }
    newChatModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _newchatmodal_newchatmodal_page__WEBPACK_IMPORTED_MODULE_7__["NewchatmodalPage"],
                componentProps: {}
            });
            yield modal.present();
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] }
];
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



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map