(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n\n<ion-content  [style.background-size]=\"'100% ' + shouldHeight\">\n  <div style=\"background-color: var(--ion-color-primary);height: 100%;\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          \n        </ion-col>\n        <ion-col class=\"center\">\n\n          <form #loginform=ngForm style=\"margin-top: 30%;\">\n\n            <img src=\"/assets/images/icon.png\" class=\"logo\">\n\n            <ion-list   >\n              <ion-item >\n                <ion-icon name=\"mail\" slot=\"start\" size=\"small\"></ion-icon>\n                  <ion-input clearInput name=\"email\" [(ngModel)]=\"data.email\" required type=\"text\" placeholder=\"Email Address\"></ion-input>\n              </ion-item>\n            </ion-list>\n            <ion-list    >\n                <ion-item >\n                    <ion-icon name=\"lock\" slot=\"start\" size=\"small\"></ion-icon>\n                    <ion-icon slot=\"end\" [name]=\"passwordIcon\" (click)='hideShowPassword()' size=\"small\"></ion-icon>\n                    \n                    <ion-input  [type]=\"passwordType\" clearOnEdit=\"false\" type=\"password\"  name=\"password\" [(ngModel)]=\"data.password\" required placeholder=\"********\" >\n                    \n                    </ion-input>\n                  </ion-item>\n            </ion-list>\n           \n          \n            <div class=\"form-group\" style=\"margin-top: 20px;\">\n              <ion-button expand=\"full\" shape=\"round\" [disabled]=\"!loginform.valid\" (click)=\"submit()\" color=\"primary\" >Login</ion-button>\n            </div>\n\n            <div  style=\"background-color: var(--ion-color-primary);text-align: center;color: white;\">\n              Don't have an account<br/><a routerLink=\"/tabs/signup\" style=\"color: white;\">Sign up</a>\n            </div>\n            <h6 text-center (click)=\"reset()\" style=\"padding-top: 10px;color: white\">Forgot password?</h6>\n        \n          </form>\n\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content> -->\n\n<ion-content>\n  \n  <div class=\"logo-background-color\">\n      <img src=\"../../app/../assets/images/login-icon.png\" class=\"logo\">\n      <h2 class=\"top-sign-in\">SIGN IN</h2>\n  </div>\n\n<div class=\"bg-text\">\n      <!-- FORM -->\n      <form #loginform=ngForm>\n          <ion-list>\n              <ion-item color=\"medium\">\n                  <ion-label color=\"primary\">\n                      <ion-icon color=\"primary\" name=\"mail\" slot=\"start\" size=\"small\"></ion-icon>\n                  </ion-label>\n                  <ion-input clearInput name=\"email\" [(ngModel)]=\"data.email\" required type=\"email\" style=\"color: black; height: 47px;\" placeholder=\"Email\"></ion-input>\n              </ion-item>\n          </ion-list>\n\n          <ion-list>\n              <ion-item color=\"medium\">\n                  <ion-label color=\"primary\">\n                      <ion-icon color=\"primary\" name=\"lock\" slot=\"start\" size=\"small\"></ion-icon>\n                  </ion-label>\n                  <ion-icon color=\"primary\" slot=\"end\" [name]=\"passwordIcon\" (click)='hideShowPassword()' size=\"small\"></ion-icon>\n                  <ion-input [type]=\"passwordType\" clearOnEdit=\"false\" type=\"password\"  name=\"password\" [(ngModel)]=\"data.password\" style=\"color: black; height: 47px;\" required placeholder=\"Password\">\n                  </ion-input>\n              </ion-item>\n          </ion-list>\n\n          <ion-list>\n              <div class=\"form-group\">\n                  <ion-buttons  class=\"button-sign-in\" (click)=\"submit()\">\n                      <ion-button class=\"button-sign-in\" [disabled]=\"!loginform.valid\"><b>SIGN IN</b>\n                      </ion-button>\n                  </ion-buttons>\n              </div>\n          </ion-list>\n          <hr>\n\n          <ion-list>\n              <div class=\"form-group\">\n                  <ion-row>\n                      <ion-col size=\"5.5\">\n                          <div class=\"ion-text-center\" style=\"color: #00ade5; font-size: 13px; padding-top: 10px;\">\n                              Don't have an account?<br>\n                              <a (click)=\"signup()\" style=\"color: #00ade5;\">Sign up!</a>\n                          </div>\n                      </ion-col>\n                      <ion-col size=\"1\">\n                          <div class=\"vertical-line\"></div>\n                      </ion-col>\n                      <ion-col size=\"5.5\" text-center> \n                          <div class=\"ion-text-center\" style=\"color: #00ade5; font-size: 13px; padding-top: 20px;\">\n                              <a (click)=\"reset()\" style=\"text-decoration: none;\">Forgot password?</a>\n                          </div>\n                      </ion-col>\n                  </ion-row>\n              </div>\n          </ion-list>\n\n      </form>\n</div>\n</ion-content>\n\n\n\n\n\n\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
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
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  font-size: 13px;\n  text-transform: none !important;\n}\n\n.logo-background-color {\n  border-bottom-left-radius: 350px 30px;\n  border-bottom-right-radius: 350px 40px;\n  background-color: #00ade5;\n}\n\n.logo-background-color .logo {\n  margin-left: 35%;\n  padding-top: 10px;\n}\n\n.logo-background-color .top-sign-in {\n  color: white;\n  text-align: center;\n  margin-top: -10px;\n  padding-bottom: 50px;\n}\n\n.bg-text {\n  margin-top: 25px;\n  padding: 20px 20px 20px 20px;\n}\n\n.button-sign-in {\n  font-size: 15px;\n  border-radius: 15px;\n  color: white;\n  background-color: #00ade5;\n  width: 100%;\n  height: 47px;\n}\n\nion-item {\n  font-size: 15px;\n  border-radius: 15px;\n}\n\nhr {\n  height: 2px;\n  background-color: #e4e4e4;\n  margin-top: 10px;\n}\n\n.vertical-line {\n  border-left: 2px solid #e4e4e4;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGxhcmFzc2VtbWF4d2VsbC9EZXNrdG9wL0t3aWtfTWVyY2hhbnQvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtBQ0NKOztBREVBO0VBQ0kscUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dvLWJhY2tncm91bmQtY29sb3Ige1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDM1MHB4IDMwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDM1MHB4IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWRlNTtcbn1cblxuLmxvZ28tYmFja2dyb3VuZC1jb2xvciAubG9nbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmxvZ28tYmFja2dyb3VuZC1jb2xvciAudG9wLXNpZ24taW4ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbi5iZy10ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XG59XG5cbi5idXR0b24tc2lnbi1pbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFkZTU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0N3B4O1xufVxuXG5pb24taXRlbSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbmhyIHtcbiAgICBoZWlnaHQ6IDJweDsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDsgXG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnZlcnRpY2FsLWxpbmUge1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2U0ZTRlNDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4iLCJpb24tY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmxvZ28tYmFja2dyb3VuZC1jb2xvciB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDM1MHB4IDMwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzNTBweCA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZGU1O1xufVxuXG4ubG9nby1iYWNrZ3JvdW5kLWNvbG9yIC5sb2dvIHtcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5sb2dvLWJhY2tncm91bmQtY29sb3IgLnRvcC1zaWduLWluIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuLmJnLXRleHQge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xufVxuXG4uYnV0dG9uLXNpZ24taW4ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWRlNTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDdweDtcbn1cblxuaW9uLWl0ZW0ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbmhyIHtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi52ZXJ0aWNhbC1saW5lIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZTRlNGU0O1xuICBoZWlnaHQ6IDUwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");
/* harmony import */ var _one_signal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../one-signal.service */ "./src/app/one-signal.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");













var LoginPage = /** @class */ (function () {
    function LoginPage(db, loadingController, toastController, navCtrl, events, alertCtrl, menuCtrl, platform, service, location, ref, oneSignal, notice, fs, fcm) {
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
        this.userId = localStorage.getItem('user');
    }
    LoginPage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(false);
        this.redirect();
    };
    LoginPage.prototype.redirect = function () {
        if (this.userId !== undefined) {
            this.navCtrl.navigate(['tabs/dashboard']);
        }
    };
    LoginPage.prototype.back = function () {
        this.service.hiddenTabs = false;
        this.menuCtrl.enable(true);
        this.location.back();
    };
    // go to register page
    LoginPage.prototype.register = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.navCtrl.navigate(['/register']);
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.navigate(['tabs/signup']);
    };
    LoginPage.prototype.submit = function () {
        var _this = this;
        this.presentLoading();
        this.db.login(this.data.email, this.data.password).then(function (resp) {
            _this.next(resp);
        }, function (error) {
            _this.loading.dismiss();
            _this.presentToast('wrong email and password match', 'bottom');
        });
    };
    LoginPage.prototype.next = function (resp) {
        var id = resp.user.uid;
        console.log('user id is----:' + id);
        localStorage.setItem('user', id);
        this.loading.dismiss();
        this.ref.getUserDet(id);
        var shopname = this.db.getshopname();
        this.notice.sendTokenToFirebase(shopname);
        this.service.hiddenTabs = false;
        this.menuCtrl.enable(true);
        this.navCtrl.navigate(['tabs/dashboard']);
    };
    // Loader
    LoginPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Wait ...'
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    // Toaster
    LoginPage.prototype.presentToast = function (data, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: data,
                            duration: 3000,
                            position: position
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Google sign in
    //forgot password
    LoginPage.prototype.reset = function () {
        this.password();
    };
    LoginPage.prototype.forgotPassword = function (email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().sendPasswordResetEmail(email)
                        .then(function (res) { return _this.presentToast('Password reset link send to ' + ' ' + email, 'bottom'); })
                        .catch(function (error) { return _this.presentToast('No user record with ' + email, 'bottom'); })];
            });
        });
    };
    LoginPage.prototype.password = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var pop;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
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
                                    handler: function (data) {
                                        var email = data.email;
                                        console.log(email);
                                        _this.forgotPassword(email);
                                        //send pass reset link to email
                                    }
                                }
                            ]
                        })];
                    case 1:
                        pop = _a.sent();
                        pop.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.ctorParameters = function () { return [
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
    ]; };
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
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map