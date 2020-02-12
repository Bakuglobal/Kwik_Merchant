(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-button (click)=\"back()\">\n      <ion-icon size=\"large\" color=\"primary\" name=\"close\"></ion-icon>\n    </ion-button>\n</ion-buttons>\n<ion-title text-center>\n  \n</ion-title>\n</ion-toolbar> -->\n<ion-content >\n    \n  <div style=\"background-color: var(--ion-color-primary);height: 100%;\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col class=\"center\">\n            <h4 class=\"title\" >\n                SIGN UP\n              </h4>\n          <form style=\"margin-top: 10%;\" [formGroup]=\"registerForm\">\n         \n          <ion-list class=\"\" >\n            <ion-item text-wrap>\n                <ion-icon name=\"person\" slot=\"start\" size=\"small\"></ion-icon>\n                <ion-input clearInput  type=\"text\"  name=\"name\" formControlName=\"name\" required placeholder=\"Shop name\" >\n                </ion-input>\n            </ion-item>\n          </ion-list>\n          <ion-list class=\"\" >\n              <ion-item text-wrap>\n                  <ion-icon name=\"call\" slot=\"start\" size=\"small\"></ion-icon>\n                  <ion-input clearInput  type=\"tel\"  name=\"contact\" formControlName=\"contact\" required placeholder=\"Contact\" >\n                  </ion-input>\n              </ion-item>\n            </ion-list>\n            <ion-list class=\"\" no-lines>\n                <ion-item text-wrap>\n                    <ion-icon name=\"mail\" slot=\"start\" size=\"small\"></ion-icon>\n                    <ion-input   type=\"email\"  name=\"email\" formControlName=\"email\" required placeholder=\"Email Address\" >\n                    </ion-input>\n                </ion-item>\n              </ion-list>\n            <ion-list class=\"\" no-lines>\n                  <ion-item text-wrap>\n                      <ion-icon name=\"pin\" slot=\"start\" size=\"small\"></ion-icon>\n                      <ion-input   type=\"search\"  name=\"location\" formControlName=\"location\" required placeholder=\"Location\" >\n                      </ion-input>\n                  </ion-item>\n            </ion-list>\n            <ion-list class=\"\" no-lines>\n                <ion-item text-wrap>\n                    <ion-icon name=\"time\" slot=\"start\" size=\"small\"></ion-icon>\n                    <ion-input placeholder=\"Open\"  name=\"openStart\" formControlName=\"openStart\" required ></ion-input> And\n                    <ion-input placeholder=\"Close\" type=\"text\"  name=\"openStop\" formControlName=\"openStop\" required slot=\"end\"></ion-input>\n                </ion-item>\n                \n              </ion-list>\n              <ion-list class=\"\" no-lines>\n                  <ion-item text-wrap>\n                      <ion-icon name=\"globe\" slot=\"start\" size=\"small\"></ion-icon>\n                      <ion-input   type=\"url\"  name=\"website\" formControlName=\"website\" required placeholder=\"Website\" >\n                      </ion-input>\n                  </ion-item>\n                </ion-list>\n          <ion-list class=\"\" no-lines>\n            <ion-item text-wrap>\n                <ion-icon name=\"lock\" slot=\"start\" size=\"small\"></ion-icon>\n                <ion-icon slot=\"end\" [name]=\"passwordIcon\" (click)='hideShowPassword()' size=\"small\"></ion-icon>\n                <ion-input  [type]=\"passwordType\" clearOnEdit=\"false\" type=\"password\"  name=\"password\" formControlName=\"password\" required placeholder=\"********\" >\n                </ion-input>\n            </ion-item>\n          </ion-list>\n\n          <div class=\"form-group\" style=\"margin-top: 20px;\">\n              <ion-button expand=\"full\" shape=\"round\" [disabled]=\"!registerForm.valid\" (click)=\"register()\" color=\"primary\" >Sign Up</ion-button>\n          </div>\n          <div text-center style=\"background-color: var(--ion-color-primary);color: white;\">\n            Have an account ?<br/><a routerLink=\"/tabs/login\" class=\"link\">Login</a>\n          </div>\n        </form>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");







var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-family: Mermaid;\n  color: #fff;\n  font-size: 25px;\n}\n\n.passwordIcon {\n  font-size: 2rem !important;\n  position: relative !important;\n  top: 22px !important;\n  margin: 0 auto !important;\n}\n\nion-item {\n  border-radius: 10px;\n  padding: auto;\n}\n\nion-list {\n  background: transparent;\n  border: none;\n}\n\na {\n  color: var(--ion-color-light);\n  text-decoration: none;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0t3aWtfTWVyY2hhbnQvc3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ0NKOztBRENFO0VBQ0csbUJBQUE7RUFDQSxhQUFBO0FDRUw7O0FEQUM7RUFDSSx1QkFBQTtFQUNBLFlBQUE7QUNHTDs7QURBQztFQUNHLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBNZXJtYWlkO1xuICAgIGNvbG9yOiNmZmY7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ucGFzc3dvcmRJY29ue1xuICAgIGZvbnQtc2l6ZToycmVtICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAyMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiB9XG4gIGlvbi1pdGVte1xuICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDtcbiAgICAgcGFkZGluZzogYXV0bztcbiB9XG4gaW9uLWxpc3R7XG4gICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICBib3JkZXI6IG5vbmU7XG4gICAgIFxuIH1cbiBhe1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiB9IiwiLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IE1lcm1haWQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5wYXNzd29yZEljb24ge1xuICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIHRvcDogMjJweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IGF1dG87XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuYSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");










var SignupPage = /** @class */ (function () {
    function SignupPage(db, navigation, loadingController, toastController, menuCtrl, service, location, formBuilder, ref) {
        this.db = db;
        this.navigation = navigation;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.menuCtrl = menuCtrl;
        this.service = service;
        this.location = location;
        this.formBuilder = formBuilder;
        this.ref = ref;
        // variables
        this.shouldHeight = document.body.clientHeight + 'px';
        this.verify = false;
        this.code = false;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.provider = new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider();
        this.service.hiddenTabs = true;
        // formbuilder
        this.registerForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            contact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            openStart: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            openStop: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            website: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]
        });
    }
    SignupPage.prototype.back = function () {
        this.service.hiddenTabs = false;
        this.location.back();
    };
    SignupPage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(false);
    };
    SignupPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    SignupPage.prototype.register = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.presentLoading();
                data = this.registerForm.value;
                console.log(data);
                this.db.register(data).then(function (resp) {
                    console.log(resp);
                    _this.loading.dismiss();
                    _this.service.hiddenTabs = false;
                    _this.menuCtrl.enable(true);
                    _this.ref.getUserDet(localStorage.getItem('userID'));
                    _this.navigation.navigate(["tabs/dashboard"]);
                }, function (error) {
                    _this.presentToast(error.message);
                    _this.loading.dismiss();
                });
                return [2 /*return*/];
            });
        });
    };
    // Loader
    SignupPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: "Wait ..."
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
    SignupPage.prototype.presentToast = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: data,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupPage.ctorParameters = function () { return [
        { type: _database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"] }
    ]; };
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _services_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es5.js.map