(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n\n<ion-content  [style.background-size]=\"'100% ' + shouldHeight\">\n  <div style=\"background-color: var(--ion-color-primary);height: 100%;\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          \n        </ion-col>\n        <ion-col class=\"center\">\n\n          <form #loginform=ngForm style=\"margin-top: 30%;\">\n\n            <img src=\"/assets/images/icon.png\" class=\"logo\">\n\n            <ion-list   >\n              <ion-item >\n                <ion-icon name=\"mail\" slot=\"start\" size=\"small\"></ion-icon>\n                  <ion-input clearInput name=\"email\" [(ngModel)]=\"data.email\" required type=\"text\" placeholder=\"Email Address\"></ion-input>\n              </ion-item>\n            </ion-list>\n            <ion-list    >\n                <ion-item >\n                    <ion-icon name=\"lock\" slot=\"start\" size=\"small\"></ion-icon>\n                    <ion-icon slot=\"end\" [name]=\"passwordIcon\" (click)='hideShowPassword()' size=\"small\"></ion-icon>\n                    \n                    <ion-input  [type]=\"passwordType\" clearOnEdit=\"false\" type=\"password\"  name=\"password\" [(ngModel)]=\"data.password\" required placeholder=\"********\" >\n                    \n                    </ion-input>\n                  </ion-item>\n            </ion-list>\n           \n          \n            <div class=\"form-group\" style=\"margin-top: 20px;\">\n              <ion-button expand=\"full\" shape=\"round\" [disabled]=\"!loginform.valid\" (click)=\"submit()\" color=\"primary\" >Login</ion-button>\n            </div>\n\n            <div  style=\"background-color: var(--ion-color-primary);text-align: center;color: white;\">\n              Don't have an account<br/><a routerLink=\"/tabs/signup\" style=\"color: white;\">Sign up</a>\n            </div>\n            <h6 text-center (click)=\"reset()\" style=\"padding-top: 10px;color: white\">Forgot password?</h6>\n        \n          </form>\n\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content> -->\n\n<ion-content>\n  \n  <div class=\"logo-background-color\">\n      <img src=\"../../app/../assets/images/login-icon.png\" class=\"logo\">\n      <h2 class=\"top-sign-in\">SIGN IN</h2>\n  </div>\n\n<div class=\"bg-text\">\n      <!-- FORM -->\n      <form #loginform=ngForm>\n          <ion-list>\n              <ion-item color=\"medium\">\n                  <ion-label color=\"primary\">\n                      <ion-icon color=\"primary\" name=\"mail\" slot=\"start\" size=\"small\"></ion-icon>\n                  </ion-label>\n                  <ion-input clearInput name=\"email\" [(ngModel)]=\"data.email\" required type=\"email\" style=\"color: black; height: 47px;\" placeholder=\"Email\"></ion-input>\n              </ion-item>\n          </ion-list>\n\n          <ion-list>\n              <ion-item color=\"medium\">\n                  <ion-label color=\"primary\">\n                      <ion-icon color=\"primary\" name=\"lock\" slot=\"start\" size=\"small\"></ion-icon>\n                  </ion-label>\n                  <ion-icon color=\"primary\" slot=\"end\" [name]=\"passwordIcon\" (click)='hideShowPassword()' size=\"small\"></ion-icon>\n                  <ion-input [type]=\"passwordType\" clearOnEdit=\"false\" type=\"password\"  name=\"password\" [(ngModel)]=\"data.password\" style=\"color: black; height: 47px;\" required placeholder=\"Password\">\n                  </ion-input>\n              </ion-item>\n          </ion-list>\n\n          <ion-list>\n              <div class=\"form-group\">\n                  <ion-buttons  class=\"button-sign-in\" (click)=\"submit()\">\n                      <ion-button class=\"button-sign-in\" [disabled]=\"!loginform.valid\"><b>SIGN IN</b>\n                      </ion-button>\n                  </ion-buttons>\n              </div>\n          </ion-list>\n          <hr>\n\n          <ion-list>\n              <div class=\"form-group\">\n                  <ion-row>\n                      <!-- <ion-col size=\"5.5\">\n                          <div class=\"ion-text-center\" style=\"color: #00ade5; font-size: 13px; padding-top: 10px;\">\n                              Don't have an account?<br>\n                              <a routerLink=\"/tabs/signup\" style=\"color: #00ade5;\">Sign up!</a>\n                          </div>\n                      </ion-col> -->\n                      <!-- <ion-col size=\"1\">\n                          <div class=\"vertical-line\"></div>\n                      </ion-col> -->\n                      <ion-col size=\"5.5\" text-center> \n                          <div class=\"ion-text-center\" style=\"color: #00ade5; font-size: 13px; padding-top: 20px;\">\n                              <a (click)=\"reset()\" style=\"text-decoration: none;\">Forgot password?</a>\n                          </div>\n                      </ion-col>\n                  </ion-row>\n              </div>\n          </ion-list>\n\n      </form>\n</div>\n</ion-content>\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  text-transform: none !important;\n}\n\n.passwordIcon {\n  font-size: 2rem !important;\n  position: relative !important;\n  top: 22px !important;\n  margin: 0 auto !important;\n}\n\nion-list {\n  background: transparent;\n}\n\nion-list ion-row {\n  background: transparent !important;\n}\n\nion-item {\n  border-radius: 20px;\n}\n\nlogo {\n  color: white;\n}\n\nion-content {\n  font-size: 13px;\n}\n\n.logo-background-color {\n  border-bottom-left-radius: 350px 30px;\n  border-bottom-right-radius: 350px 40px;\n  background-color: #00ade5;\n}\n\n.logo-background-color .logo {\n  margin-left: 35%;\n  padding-top: 10px;\n}\n\n.logo-background-color .top-sign-in {\n  color: white;\n  text-align: center;\n  margin-top: -10px;\n  padding-bottom: 50px;\n}\n\n.bg-text {\n  margin-top: 25px;\n  padding: 20px 20px 20px 20px;\n}\n\n.button-sign-in {\n  font-size: 15px;\n  border-radius: 15px;\n  color: white;\n  background-color: #00ade5;\n  width: 100%;\n  height: 47px;\n}\n\nion-item {\n  font-size: 15px;\n  border-radius: 15px;\n}\n\nhr {\n  height: 2px;\n  background-color: #e4e4e4;\n  margin-top: 10px;\n}\n\n.vertical-line {\n  border-left: 2px solid #e4e4e4;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0t3aWtfTWVyY2hhbnQvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ0VKOztBRENDO0VBQ0ksdUJBQUE7QUNFTDs7QURESztFQUNHLGtDQUFBO0FDR1I7O0FEQ0M7RUFDSSxtQkFBQTtBQ0VMOztBREFDO0VBQ0ksWUFBQTtBQ0dMOztBRERDO0VBQ0csZUFBQTtBQ0lKOztBRERBO0VBQ0kscUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHlCQUFBO0FDSUo7O0FEREE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDSUo7O0FEREE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDSUo7O0FEREE7RUFDSSxnQkFBQTtFQUNBLDRCQUFBO0FDSUo7O0FEREE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0lKOztBRERBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDSUo7O0FEREE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0lKOztBRERBO0VBQ0ksOEJBQUE7RUFDQSxZQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuLnBhc3N3b3JkSWNvbntcbiAgICBmb250LXNpemU6MnJlbSAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogMjJweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gfVxuXG4gaW9uLWxpc3R7XG4gICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICBpb24tcm93IHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgXG4gfVxuIGlvbi1pdGVte1xuICAgICBib3JkZXItcmFkaXVzOiAyMHB4IDtcbiB9XG4gbG9nb3tcbiAgICAgY29sb3I6IHdoaXRlO1xuIH1cbiBpb24tY29udGVudCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubG9nby1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzNTBweCAzMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzNTBweCA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFkZTU7XG59XG5cbi5sb2dvLWJhY2tncm91bmQtY29sb3IgLmxvZ28ge1xuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5sb2dvLWJhY2tncm91bmQtY29sb3IgLnRvcC1zaWduLWluIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4uYmctdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xufVxuXG4uYnV0dG9uLXNpZ24taW4ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZGU1O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDdweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG5ociB7XG4gICAgaGVpZ2h0OiAycHg7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7IFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi52ZXJ0aWNhbC1saW5lIHtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNlNGU0ZTQ7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuIiwiaW9uLWNvbnRlbnQge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucGFzc3dvcmRJY29uIHtcbiAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICB0b3A6IDIycHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1saXN0IGlvbi1yb3cge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbmxvZ28ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubG9nby1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzUwcHggMzBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDM1MHB4IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFkZTU7XG59XG5cbi5sb2dvLWJhY2tncm91bmQtY29sb3IgLmxvZ28ge1xuICBtYXJnaW4tbGVmdDogMzUlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmxvZ28tYmFja2dyb3VuZC1jb2xvciAudG9wLXNpZ24taW4ge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4uYmctdGV4dCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XG59XG5cbi5idXR0b24tc2lnbi1pbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZGU1O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0N3B4O1xufVxuXG5pb24taXRlbSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuaHIge1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnZlcnRpY2FsLWxpbmUge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNlNGU0ZTQ7XG4gIGhlaWdodDogNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");
/* harmony import */ var _one_signal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../one-signal.service */ "./src/app/one-signal.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");













let LoginPage = class LoginPage {
    constructor(db, loadingController, toastController, navCtrl, events, alertCtrl, menuCtrl, platform, service, location, ref, oneSignal, notice, fs, fcm) {
        this.db = db;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.service = service;
        this.location = location;
        this.ref = ref;
        this.oneSignal = oneSignal;
        this.notice = notice;
        this.fs = fs;
        this.fcm = fcm;
        this.shouldHeight = document.body.clientHeight + 'px';
        this.data = {
            email: null,
            password: null,
        };
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.service.hiddenTabs = true;
        this.userId = localStorage.getItem('userID');
    }
    ngOnInit() {
        this.menuCtrl.enable(false);
        this.redirect();
    }
    redirect() {
        if (this.userId !== undefined) {
            this.navCtrl.navigate(['tabs/dashboard']);
        }
    }
    back() {
        this.service.hiddenTabs = false;
        this.menuCtrl.enable(true);
        this.location.back();
    }
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
    submit() {
        this.presentLoading();
        this.db.login(this.data.email, this.data.password).then(resp => {
            this.next(resp);
        }, error => {
            this.loading.dismiss();
            this.presentToast('wrong email and password match', 'bottom');
        });
    }
    next(resp) {
        const id = resp.user.uid;
        console.log('user id is----:' + id);
        localStorage.setItem('userID', id);
        this.loading.dismiss();
        this.ref.getUserDet(id);
        let shopname = this.db.getshopname();
        this.notice.sendTokenToFirebase(shopname);
        this.service.hiddenTabs = false;
        this.menuCtrl.enable(true);
        this.navCtrl.navigate(['tabs/dashboard']);
    }
    // Loader
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Wait ...'
            });
            return yield this.loading.present();
        });
    }
    // Toaster
    presentToast(data, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: data,
                duration: 3000,
                position: position
            });
            toast.present();
        });
    }
    // Google sign in
    //forgot password
    reset() {
        this.password();
    }
    forgotPassword(email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().sendPasswordResetEmail(email)
                .then(res => this.presentToast('Password reset link send to ' + ' ' + email, 'bottom'))
                .catch(error => this.presentToast('No user record with ' + email, 'bottom'));
        });
    }
    password() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let pop = yield this.alertCtrl.create({
                header: 'Password Reset',
                message: 'Enter email address to receive password reset link',
                inputs: [
                    {
                        name: 'email',
                        placeholder: 'you@example.com'
                    }
                ],
                buttons: [
                    {
                        text: 'cancel',
                        role: 'cansel'
                    },
                    {
                        text: 'Send',
                        handler: data => {
                            let email = data.email;
                            console.log(email);
                            this.forgotPassword(email);
                            //send pass reset link to email
                        }
                    }
                ]
            });
            pop.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"] },
    { type: _one_signal_service__WEBPACK_IMPORTED_MODULE_10__["OneSignalService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"] },
    { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_12__["FCM"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _services_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
        _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"],
        _one_signal_service__WEBPACK_IMPORTED_MODULE_10__["OneSignalService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_12__["FCM"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map