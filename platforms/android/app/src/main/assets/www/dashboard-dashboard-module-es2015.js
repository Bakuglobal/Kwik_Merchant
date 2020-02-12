(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content color=\"primary\" [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n  <div class=\"top\">\n        <ion-toolbar color=\"primary\">\n          <ion-buttons slot=\"start\">\n            <ion-menu-button color=\"\"></ion-menu-button>\n          </ion-buttons>\n          <ion-buttons slot=\"end\">\n            <ion-icon name=\"search\" size=\"large\" (click)=\"showsearch()\" color=\"\"></ion-icon>\n          </ion-buttons>\n          <ion-searchbar placeholder=\"Enter OrderID\" *ngIf=\"search\" [(ngModel)]=\"searchTerm\" (ionChange)=\"setFilteredItems()\"></ion-searchbar>\n          <ion-title  color=\"\" *ngIf=\"!search\">Dashboard</ion-title>\n        </ion-toolbar>\n\n      <div >\n          <ion-row >\n            <ion-col size=\"4\" class=\"main-nav\" tappable (click)=\"stock()\">\n            <ion-card class=\"card\" >\n              <ion-card-title>\n                <ion-icon color=\"primary\" name=\"pricetags\"></ion-icon>\n              </ion-card-title>\n              <label text-center>Stock</label>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"4\" class=\"main-nav\" tappable (click)=\"sales()\"> \n            <ion-card class=\"card\" >\n              <ion-card-title>\n                <ion-icon color=\"primary\" name=\"pulse\"></ion-icon>\n              </ion-card-title>\n              <label text-center>Sales</label>\n            </ion-card>\n          </ion-col>\n          <ion-col size=\"4\" class=\"main-nav\" tappable (click)=\"orders()\">\n            <ion-card class=\"card\" >\n              <ion-card-title>\n                <ion-icon color=\"primary\" name=\"podium\"></ion-icon>\n              </ion-card-title>\n              <label text-center>Orders</label>\n            </ion-card>\n          </ion-col>\n          </ion-row>\n      </div>\n </div>\n  <div class=\"body\" >\n    <ion-item color=\"light\">\n      <ion-label  color=\"primary\">Orders Due Today</ion-label>&nbsp;&nbsp;\n      <ion-input style=\"padding-top: 10px;\" clearInput type=\"text\" placeholder=\"Enter OrderID\" color=\"medium\" *ngIf=\"inputSearch\"[(ngModel)]=\"searchTerm\" (ionChange)=\"setFilteredItems()\"></ion-input>\n      <ion-icon name=\"search\" color=\"medium\" *ngIf=\"inputSearch\" ></ion-icon>\n    </ion-item>\n    <div  *ngIf=\"loader\" text-center> \n      <ion-spinner class=\"loader\" name=\"lines\" color=\"primary\"></ion-spinner> \n    </div>\n    <div *ngIf=\"Myorders.length == 0\" style=\"padding-top: 50px;text-align: center;\">\n      <ion-label color=\"medium\">No Order is due Today</ion-label>\n    </div>\n      \n      <div *ngIf=\"!loader\" >\n          <ion-card padding *ngFor=\"let item of Myorders \"  (click)=\"openOrder(item)\" style=\"background-color:#ffff;\"> \n            <ion-icon name=\"funnel\" style=\"float: left;\" color=\"primary\"></ion-icon><ion-label style=\"float: right;\" color=\"primary\">{{item.OrderID}}</ion-label><br><br>\n            <div style=\"text-align:start;\">\n              Order for {{item.products[0].product}}, {{item.products[1].product}},  ...\n            </div>\n            <span style=\"float: left;margin-top: 10px;\">\n              {{item.username}}\n            </span>\n            <span style=\"float: right;bottom:0;margin-top: 10px;\">\n              <!-- <span class=\"pick\">Pick up :</span> {{item.Date.toDate() | date: 'mm'}} mins -->\n              <span class=\"pick\">Pick up : {{item.pickHour}}:{{item.pickMins}} {{item.pickDay}}</span> \n            </span>\n          </ion-card>\n      </div>\n  </div>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");







const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]
    }
];
let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.page.scss":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  border-radius: 15px;\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: white;\n}\n\nion-card {\n  border-radius: 15px;\n}\n\n.main-nav {\n  -o-object-position: center;\n     object-position: center;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.loader {\n  margin-top: 40%;\n}\n\n.pick {\n  color: var(--ion-color-success);\n}\n\n.name {\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n\n.top {\n  background-color: var(--ion-color-primary);\n}\n\n.body {\n  border-radius: 20px 20px 0px 0px;\n  background-color: var(--ion-color-light);\n  height: 10000px;\n  margin-bottom: 0px;\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0t3aWtfTWVyY2hhbnQvc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksMEJBQUE7S0FBQSx1QkFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNFSjs7QURBQTtFQUVJLGVBQUE7QUNFSjs7QURBQTtFQUNJLCtCQUFBO0FDR0o7O0FEREE7RUFDSSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURGQTtFQUNJLDBDQUFBO0FDS0o7O0FESEE7RUFDSSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgXG59XG5pb24tY2FyZHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLm1haW4tbmF2e1xuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4ubG9hZGVyIHtcbiAgICBcbiAgICBtYXJnaW4tdG9wOiA0MCU7XG59XG4ucGlja3tcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuLm5hbWV7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRvcHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uYm9keXtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOyBcbiAgICBoZWlnaHQ6IDEwMDAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufSIsIi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5tYWluLW5hdiB7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4ubG9hZGVyIHtcbiAgbWFyZ2luLXRvcDogNDAlO1xufVxuXG4ucGljayB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG5cbi5uYW1lIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmJvZHkge1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgaGVpZ2h0OiAxMDAwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.page.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");







let DashboardPage = class DashboardPage {
    constructor(fs, navCtrl, service, modal, db) {
        this.fs = fs;
        this.navCtrl = navCtrl;
        this.service = service;
        this.modal = modal;
        this.db = db;
        // variables
        this.Myorders = [];
        this.login = false;
        this.loader = true;
        this.search = false;
        this.inputSearch = false;
        this.service.hiddenTabs = false;
        this.date = new Date();
    }
    // scroll events
    onScroll(event) {
        if (event.detail.scrollTop === 148) {
            this.inputSearch = true;
        }
        else {
            this.inputSearch = false;
        }
    }
    // ionviewwill enter function
    ionViewWillEnter() {
        this.getShop();
    }
    // oninit method
    ngOnInit() {
        this.userID = localStorage.getItem('userID');
        console.log(this.userID);
        if (this.userID != null) {
            // this.getOrders();
        }
        else {
            this.login = true;
        }
    }
    // show searchbar
    showsearch() {
        if (this.search === false) {
            this.search = true;
        }
        else {
            this.search = false;
        }
    }
    // filter searchbar
    setFilteredItems() {
        if (this.searchTerm !== null || this.searchTerm !== '') {
            this.Myorders = this.filterItems();
            console.log(this.Myorders);
        }
    }
    filterItems() {
        return this.filterOrder.filter(item => {
            return item.OrderID.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        });
    }
    // to sales page
    sales() {
        this.service.hiddenTabs = true;
        this.navCtrl.navigate(['tabs/sales']);
    }
    // to stock page
    stock() {
        this.service.hiddenTabs = true;
        this.navCtrl.navigate(['tabs/stock']);
    }
    // to orders stats page
    orders() {
        this.service.hiddenTabs = true;
        this.navCtrl.navigate(['tabs/order-stats']);
    }
    // get the shop name
    getShop() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.shopname = localStorage.getItem('shop');
            console.log(this.shopname);
            this.getOrders();
        });
    }
    // get orders from firestore
    getOrders() {
        this.service.getTodaysOrders(this.shopname).valueChanges().subscribe(res => {
            this.Myorders = res;
            this.filterOrder = res;
            console.log(this.Myorders);
            this.loader = false;
        });
    }
    // view order
    openOrder(item) {
        console.log(item);
        this.service.setItems(item);
        this.service.hiddenTabs = true;
        this.navCtrl.navigate(['tabs/orders']);
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] }
];
DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.page.html"),
        styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/dashboard/dashboard.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
        _database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"]])
], DashboardPage);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map