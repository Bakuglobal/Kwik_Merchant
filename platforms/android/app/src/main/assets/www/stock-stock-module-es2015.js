(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stock-stock-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/stock/stock.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stock/stock.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content color=\"primary\" style=\"background-color: var(--ion-color-primary);\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" padding>\n      <ion-icon name=\"home\" (click)=\"home()\"></ion-icon>\n    </ion-buttons>\n    <ion-title>Stock</ion-title>\n    <ion-buttons slot=\"end\" padding>\n      <ion-icon name=\"settings\" (click)=\"settings()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <div class=\"card-main\" style=\"background-color: white;\">\n    <ion-card-title padding>\n      <ion-row>\n        <ion-col>\n          <ion-label class=\"title\">Choose category</ion-label>\n          <ion-select placeholder=\"category\" [(ngModel)]=\"category\">\n            <!-- <ion-select-option *ngFor=\"let item of categories.categories\">{{item.name}}</ion-select-option> -->\n          </ion-select>\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"pricetags\" src=\"\" class=\"image\" color=\"primary\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-card-title>\n\n    <ion-card-content class=\"content\">\n      <div>\n\n        <ion-label>Low on stock</ion-label>\n\n        <ion-card class=\"stock\" padding disabled>\n          <ion-row>\n            <ion-col size=\"2\">\n              <ion-icon size=\"large\" color=\"danger\" name=\"trending-down\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"7\">\n              <ion-text>\n                Banana <br> Last updated <span>4</span> days ago\n              </ion-text>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-label>20</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n        <ion-card class=\"stock\" padding disabled>\n          <ion-row>\n            <ion-col size=\"2\">\n              <ion-icon size=\"large\" color=\"danger\" name=\"trending-down\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"7\">\n              <ion-text>\n                Carrots <br> Last updated <span>5</span> days ago\n              </ion-text>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-label>40</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </div>\n\n      <div>\n        <div class=\"section-two\">\n          <ion-label>Available products</ion-label>\n          <ion-icon name=\"git-compare\" class=\"float\" (click)=\"sortCategory()\"></ion-icon>\n        </div>\n\n        <ion-card class=\"stock\" padding *ngFor=\"let item of products\" (click)=\"viewProduct(item)\">\n          <ion-row>\n            <ion-col size=\"2\">\n              <ion-icon size=\"large\" color=\"success\" name=\"trending-up\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"7\">\n              <ion-text>\n                {{item.product}} <br> Last updated <span>4</span> days ago\n              </ion-text>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-label>{{item.stock}}</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n      </div>\n\n    </ion-card-content>\n    <div style=\"height: 100%;background-color: white;\">\n    </div>\n  </div>\n \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"addProduct()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/stock/stock.module.ts":
/*!***************************************!*\
  !*** ./src/app/stock/stock.module.ts ***!
  \***************************************/
/*! exports provided: StockPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPageModule", function() { return StockPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stock_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock.page */ "./src/app/stock/stock.page.ts");







const routes = [
    {
        path: '',
        component: _stock_page__WEBPACK_IMPORTED_MODULE_6__["StockPage"]
    }
];
let StockPageModule = class StockPageModule {
};
StockPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_stock_page__WEBPACK_IMPORTED_MODULE_6__["StockPage"]]
    })
], StockPageModule);



/***/ }),

/***/ "./src/app/stock/stock.page.scss":
/*!***************************************!*\
  !*** ./src/app/stock/stock.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-main {\n  color: var(--ion-color-medium);\n  background-color: white;\n  border-radius: 20px 20px 0px 0px;\n  width: 100%;\n  height: 10000px;\n  margin-bottom: 0px;\n  margin-top: 40px;\n}\n\n.image {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 50%;\n  height: 50%;\n  float: right;\n}\n\n.title {\n  font-weight: bold;\n  font-size: 1.1em;\n}\n\nion-select {\n  color: var(--ion-color-primary);\n}\n\n.float {\n  float: right;\n  color: var(--ion-color-primary);\n}\n\n.content {\n  margin-top: 20px;\n}\n\n.content ion-label {\n  font-size: 1.1em;\n  color: var(--ion-color-primary);\n}\n\n.section-two {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.stock {\n  border-radius: 20px;\n}\n\n.stock ion-text {\n  font-weight: bold;\n  padding-top: 20px;\n}\n\n.stock ion-text span {\n  color: var(--ion-color-primary);\n  font-size: 1em;\n}\n\n.stock ion-label {\n  font-size: 1.7em;\n  font-weight: bold;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0t3aWtfTWVyY2hhbnQvc3JjL2FwcC9zdG9jay9zdG9jay5wYWdlLnNjc3MiLCJzcmMvYXBwL3N0b2NrL3N0b2NrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksc0JBQUE7S0FBQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksK0JBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7RUFDQSwrQkFBQTtBQ0tKOztBREhBO0VBQ0ksZ0JBQUE7QUNNSjs7QURMSTtFQUNJLGdCQUFBO0VBQ0EsK0JBQUE7QUNPUjs7QURIQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNNSjs7QURKQTtFQUNJLG1CQUFBO0FDT0o7O0FETkk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDUVI7O0FEUFE7RUFDSSwrQkFBQTtFQUNBLGNBQUE7QUNTWjs7QUROSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDUVIiLCJmaWxlIjoic3JjL2FwcC9zdG9jay9zdG9jay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1tYWlue1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6MTAwMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5pbWFnZXtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLnRpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG59XG5pb24tc2VsZWN0e1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uZmxvYXR7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSlcbn1cbi5jb250ZW50e1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpXG4gICAgfVxuICAgIFxufVxuLnNlY3Rpb24tdHdve1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5zdG9ja3tcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGlvbi10ZXh0e1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjBlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICAgIFxufSIsIi5jYXJkLW1haW4ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uaW1hZ2Uge1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjFlbTtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5mbG9hdCB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmNvbnRlbnQgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnNlY3Rpb24tdHdvIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnN0b2NrIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5zdG9jayBpb24tdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5zdG9jayBpb24tdGV4dCBzcGFuIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxZW07XG59XG4uc3RvY2sgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjdlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/stock/stock.page.ts":
/*!*************************************!*\
  !*** ./src/app/stock/stock.page.ts ***!
  \*************************************/
/*! exports provided: StockPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPage", function() { return StockPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_settings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../settings/settings.page */ "./src/app/settings/settings.page.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");








let StockPage = class StockPage {
    constructor(navCtrl, service, Asc, modal, fs, db) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.Asc = Asc;
        this.modal = modal;
        this.fs = fs;
        this.db = db;
        this.service.hiddenTabs = true;
        this.shopname = localStorage.getItem('shop');
        console.log(this.shopname);
    }
    ionViewDidEnter() {
        this.service.getallcategories(this.shopname).valueChanges().subscribe(res => {
            console.log(res);
        });
        this.getproducts();
    }
    ngOnInit() {
    }
    getproducts() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.fs.collection(this.shopname).valueChanges().subscribe(res => {
                console.log(res);
                this.products = res;
                this.unfilteredProducts = res;
            });
        });
    }
    home() {
        this.service.hiddenTabs = false;
        this.navCtrl.navigate(['tabs/dashboard']);
    }
    sortCategory() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const asc = yield this.Asc.create({
                header: "Sort category in",
                buttons: [
                    {
                        text: 'ASC',
                        handler: () => {
                            console.log('asc');
                        }
                    },
                    {
                        text: 'DSC',
                        handler: () => {
                            console.log('asc');
                        }
                    }
                ]
            });
            asc.present();
        });
    }
    settings() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const mod = yield this.modal.create({
                component: _settings_settings_page__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"],
                componentProps: {}
            });
            mod.present();
        });
    }
    addProduct() {
        this.navCtrl.navigate(['tabs/products']);
    }
    viewProduct(item) {
        this.service.hiddenTabs = true;
        this.service.setProduct(item);
        console.log(item);
        this.navCtrl.navigate(['tabs/productmodal']);
    }
};
StockPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"] }
];
StockPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stock',
        template: __webpack_require__(/*! raw-loader!./stock.page.html */ "./node_modules/raw-loader/index.js!./src/app/stock/stock.page.html"),
        styles: [__webpack_require__(/*! ./stock.page.scss */ "./src/app/stock/stock.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"],
        _database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"]])
], StockPage);



/***/ })

}]);
//# sourceMappingURL=stock-stock-module-es2015.js.map