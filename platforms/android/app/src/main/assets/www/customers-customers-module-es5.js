(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customers-customers-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/customers/customers.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customers/customers.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-toolbar color=\"primary\" padding>\n    <ion-buttons>\n      <ion-icon name=\"arrow-back\" (click)=\"close()\"></ion-icon>\n      <ion-title>customers</ion-title>\n    </ion-buttons>\n    \n  </ion-toolbar>\n<div>\n  <ion-list>\n    <ion-row  *ngFor=\"let item of customer\">\n      <ion-col size=\"2\" padding>\n        <ion-avatar>\n          <ion-icon name=\"person\" color=\"medium\"></ion-icon>\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"7\">\n        <ion-label color=\"dark\"> {{item.name}}</ion-label><br>\n        <ion-label color=\"dark\">Contact: {{item.phone}}</ion-label>\n      </ion-col>\n      <ion-col padding size=\"3\">\n        <ion-icon name=\"call\" color=\"success\"></ion-icon>&nbsp;&nbsp;\n        <ion-icon name=\"mail\" color=\"medium\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n</div>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"addCustomer()\">\n  <ion-fab-button>\n    <ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/customers/customers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/customers/customers.module.ts ***!
  \***********************************************/
/*! exports provided: CustomersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersPageModule", function() { return CustomersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _customers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customers.page */ "./src/app/customers/customers.page.ts");







var routes = [
    {
        path: '',
        component: _customers_page__WEBPACK_IMPORTED_MODULE_6__["CustomersPage"]
    }
];
var CustomersPageModule = /** @class */ (function () {
    function CustomersPageModule() {
    }
    CustomersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_customers_page__WEBPACK_IMPORTED_MODULE_6__["CustomersPage"]]
        })
    ], CustomersPageModule);
    return CustomersPageModule;
}());



/***/ }),

/***/ "./src/app/customers/customers.page.scss":
/*!***********************************************!*\
  !*** ./src/app/customers/customers.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lcnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/customers/customers.page.ts":
/*!*********************************************!*\
  !*** ./src/app/customers/customers.page.ts ***!
  \*********************************************/
/*! exports provided: CustomersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersPage", function() { return CustomersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");






var CustomersPage = /** @class */ (function () {
    function CustomersPage(service, navCtrl, altCntrl, fs, toast) {
        this.service = service;
        this.navCtrl = navCtrl;
        this.altCntrl = altCntrl;
        this.fs = fs;
        this.toast = toast;
        this.customer = [];
        this.service.hiddenTabs = true;
        this.shop = localStorage.getItem('shop');
        this.getCustomers();
    }
    CustomersPage.prototype.ngOnInit = function () {
    };
    CustomersPage.prototype.close = function () {
        this.service.hiddenTabs = false;
        this.navCtrl.navigate(['tabs/dashboard']);
    };
    CustomersPage.prototype.addCustomer = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.altCntrl.create({
                            header: 'Enter customer Details',
                            inputs: [
                                {
                                    name: 'name',
                                    type: 'text',
                                    id: 'name',
                                    placeholder: 'Enter Name '
                                },
                                {
                                    name: 'phone',
                                    type: 'text',
                                    id: 'phone',
                                    placeholder: 'Enter phone Number'
                                },
                                {
                                    name: 'email',
                                    type: 'text',
                                    id: 'email',
                                    placeholder: 'Enter Email '
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (data) {
                                        console.log(data);
                                        _this.saveCustomer(data);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomersPage.prototype.saveCustomer = function (data) {
        var _this = this;
        var ref = this.fs.collection(this.shop + '_Customers');
        ref.add(data).then(function (res) {
            _this.toaster('New customer added ');
        }).catch(function (error) {
            console.log(error);
            _this.toaster('sorry an error occured');
        });
    };
    CustomersPage.prototype.toaster = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ts;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: msg,
                            duration: 2000,
                            position: 'bottom'
                        })];
                    case 1:
                        ts = _a.sent();
                        return [4 /*yield*/, ts.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomersPage.prototype.getCustomers = function () {
        var _this = this;
        var ref = this.fs.collection(this.shop + '_Customers');
        ref.valueChanges().subscribe(function (res) {
            _this.customer = res;
        });
    };
    CustomersPage.ctorParameters = function () { return [
        { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
    ]; };
    CustomersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__(/*! raw-loader!./customers.page.html */ "./node_modules/raw-loader/index.js!./src/app/customers/customers.page.html"),
            styles: [__webpack_require__(/*! ./customers.page.scss */ "./src/app/customers/customers.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], CustomersPage);
    return CustomersPage;
}());



/***/ })

}]);
//# sourceMappingURL=customers-customers-module-es5.js.map