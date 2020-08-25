(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content color=\"primary\" [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n    <div class=\"top\">\n        <ion-toolbar color=\"primary\">\n            <ion-buttons slot=\"start\">\n                <ion-menu-button></ion-menu-button>\n            </ion-buttons>\n            <ion-buttons slot=\"end\">\n                <ion-icon style=\"width: 23px; height: 23px; margin-top: 10px; margin-right: 10px;\" name=\"search\" size=\"small\" (click)=\"showsearch()\"></ion-icon>\n            </ion-buttons>\n            <ion-searchbar mode=\"ios\" animated placeholder=\"Enter OrderID\" *ngIf=\"search\" [(ngModel)]=\"searchTerm\" style=\"margin-top: 10px; font-size: 13px;\"\n                (ionChange)=\"setFilteredItems()\"></ion-searchbar>\n            <ion-title text-center *ngIf=\"!search\">Dashboard</ion-title>\n        </ion-toolbar>\n\n\n        <div>\n            <ion-row>\n                <ion-col size=\"4\" class=\"main-nav\" tappable (click)=\"stock()\">\n                <ion-card class=\"card\">\n                    <ion-card-title>\n                    <ion-icon color=\"primary\" name=\"pricetags\"></ion-icon>\n                    </ion-card-title>\n                    <label text-center>Stock</label>\n                </ion-card>\n                </ion-col>\n                <ion-col size=\"4\" class=\"main-nav\" tappable (click)=\"sales()\">\n                <ion-card class=\"card\">\n                    <ion-card-title>\n                    <ion-icon color=\"primary\" name=\"pulse\"></ion-icon>\n                    </ion-card-title>\n                    <label text-center>Sales</label>\n                </ion-card>\n                </ion-col>\n                <ion-col size=\"4\" class=\"main-nav\" tappable (click)=\"orders()\">\n                <ion-card class=\"card\">\n                    <ion-card-title>\n                    <ion-icon color=\"primary\" name=\"podium\"></ion-icon>\n                    </ion-card-title>\n                    <label text-center>Orders</label>\n                </ion-card>\n                </ion-col>\n            </ion-row>\n        </div>\n    </div>\n\n\n    <div class=\"body\" style=\"background-color: white;\">\n        <div>\n            <ion-item color=\"light\">\n                <ion-label color=\"primary\" style=\"font-size: 15px;\">Orders Due Today</ion-label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                <!-- <ion-label>{{getCount()}} Pending </ion-label> -->\n                <!-- <ion-input style=\"padding-top: 10px; font-size: 15px;\" clearInput type=\"text\" placeholder=\"Enter OrderID\" color=\"medium\"\n                *ngIf=\"inputSearch\" [(ngModel)]=\"searchTerm\" (ionChange)=\"setFilteredItems()\">\n                </ion-input>\n                <ion-icon style=\"width: 20px; height: 20px;\" name=\"search\" color=\"medium\" *ngIf=\"inputSearch\"></ion-icon> -->\n            </ion-item>\n        </div>\n\n        <ion-segment (ionChange)=\"changeCategory($event)\" style=\"background-color: white; padding-top: 7px;\">\n            <ion-segment-button value=\"delivery\" checked>\n                <ion-badge class=\"ion-float-right\">{{Deliverycount}}</ion-badge>\n                <ion-label style=\"font-size: 12px; margin-top: 10px; margin-bottom: 2px;\">Deliveries</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"pick&pay\" >\n                <ion-badge class=\"ion-float-right\">{{PickPayCount}}</ion-badge>\n                <ion-label style=\"font-size: 12px; margin-top: 10px; margin-bottom: 2px;\">Pay & Collect</ion-label>\n            </ion-segment-button>\n        </ion-segment>\n\n        <div *ngIf=\"loader\" text-center>\n            <ion-spinner class=\"loader\" name=\"lines\" color=\"primary\"></ion-spinner>\n        </div>\n\n        <div *ngIf=\"Myorders.length == 0\" style=\"padding-top: 50px; text-align: center;\">\n            <ion-label style=\"font-size: 13px; color: #737373;\">No Pending Orders</ion-label>\n        </div> <br>\n\n        <div *ngIf=\"active === 'Deliveries'\" style=\"padding-top: -10px; margin-bottom: 35px;margin-bottom: 60px;\">\n            <div *ngIf=\"!loader\">\n                <ion-card padding *ngFor=\"let item of DeliveryOrders \" (click)=\"openOrder(item)\" [ngClass]=\"{'ready': item.status == 'Ready','complete': item.status == 'complete'}\">\n                    <ion-icon name=\"funnel\" style=\"float: left;\" color=\"primary\"></ion-icon>&nbsp;\n                    <ion-label color=\"success\" style=\"font-size: 13px;\" *ngIf=\"item.status == 'Ready' && item.paid == 'False'\">Ready</ion-label>\n                    <ion-label color=\"warning\" style=\"font-size: 13px;\" *ngIf=\"item.status == 'open'\">Open</ion-label>\n                    <ion-label color=\"success\" style=\"font-size: 13px;\" *ngIf=\"item.status == 'complete'\">Complete</ion-label>\n                    <ion-label style=\"float: right; font-size: 13px;\" color=\"primary\">{{item.OrderID}}</ion-label><br><br>\n                    <div style=\"text-align:start; font-size: 13px;\">\n                        Order for: <ion-label style=\"font-size: 13px;\" *ngFor=\"let item of item.products\"><b>{{item.product}}</b></ion-label> ...\n                    </div>\n                    <span style=\"float: left;margin-top: 20px;\">\n                        <b>{{item.username}}</b>\n                    </span>\n                    <span style=\"float: right; bottom:0; margin-top: 20px;\">\n                        <span style=\"font-size: 13px;\" class=\"pick\">Delivery To : {{item.Location}} </span>\n                    </span>\n                </ion-card>\n            </div>\n        </div> \n\n\n        <div *ngIf=\"active === 'PickPay'\" style=\"padding-top: -10px; margin-bottom: 60px;\">\n            <div *ngIf=\"!loader\">\n                <ion-card padding *ngFor=\"let item of PickPayOrders \" (click)=\"openOrder(item)\"\n                [ngClass]=\"{'ready': item.status == 'Ready'}\">\n                <ion-icon name=\"funnel\" style=\"float: left;\" color=\"primary\"></ion-icon>&nbsp;\n                <ion-label color=\"success\" style=\"font-size: 13px;\" *ngIf=\"item.status == 'Ready'\">Ready</ion-label>\n                <ion-label color=\"warning\" style=\"font-size: 13px;\" *ngIf=\"item.status == 'open'\">Open</ion-label>\n                <ion-label color=\"success\" style=\"font-size: 13px;\" *ngIf=\"item.Complete == 'True'\">Complete</ion-label>\n                <ion-label style=\"float: right; font-size: 13px;\" color=\"primary\">{{item.OrderID}}</ion-label><br><br>\n                <div style=\"text-align:start; font-size: 13px;\">\n                    Order for: <ion-label style=\"font-size: 13px;\" *ngFor=\"let item of item.products\"><b>{{item.product}}</b></ion-label> ...\n                </div>\n                <span style=\"float: left;margin-top: 20px; font-size: 13px;\">\n                    <b>{{item.username}}</b>\n                </span>\n                <!-- <span style=\"float: right;bottom:0;margin-top: 20px; font-size: 13px;\">\n                    <span style=\"font-size: 13px;\" class=\"pick\">Pick up : {{item.pickHour}}:{{item.pickMins}} {{item.pickDay}}</span>\n                </span> -->\n                </ion-card>\n\n            </div>\n        </div>\n        <!-- <div *ngIf=\"!loader\" style=\"padding-top: 5%;\">\n            <ion-card padding *ngFor=\"let item of Myorders \"  (click)=\"openOrder(item)\" [ngClass]=\"{'ready': item.status == 'Ready'}\"> \n                <ion-icon name=\"funnel\" style=\"float: left;\" color=\"primary\"></ion-icon>&nbsp;\n                <ion-label color=\"success\" *ngIf=\"item.status == 'Ready' && item.paid == 'False'\">Ready</ion-label>\n                <ion-label color=\"warning\" *ngIf=\"item.status == 'open'\">Open</ion-label>\n                <ion-label color=\"success\" *ngIf=\"item.paid == 'True'\">Complete</ion-label>\n                <ion-label style=\"float: right;\" color=\"primary\">{{item.OrderID}}</ion-label><br><br>\n                <div style=\"text-align:start;\">\n                Order for <ion-label *ngFor=\"let item of item.products\">{{item.product}}</ion-label> ...\n                </div>\n                <span style=\"float: left;margin-top: 10px;\">\n                {{item.username}}\n                </span>\n                <span style=\"float: right;bottom:0;margin-top: 10px;\">\n                <span class=\"pick\" *ngIf=\"item.Delivery == 'Deliver it to me'\">Delivery To : {{item.Location}} </span>\n                <span class=\"pick\" *ngIf=\"item.Delivery == 'I will pick it'\">Pick up : {{item.pickHour}}:{{item.pickMins}} {{item.pickDay}}</span> \n                </span>\n            </ion-card>\n            \n        </div> -->\n    </div> \n\n    </ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");







var routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]
    }
];
var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
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
    return DashboardPageModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.page.scss":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  border-radius: 15px;\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: white;\n}\n\nion-card {\n  border-radius: 15px;\n}\n\n.main-nav {\n  -o-object-position: center;\n     object-position: center;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.loader {\n  margin-top: 40%;\n}\n\n.pick {\n  color: var(--ion-color-success);\n  text-transform: capitalize;\n}\n\n.name {\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n\n.top {\n  background-color: var(--ion-color-primary);\n}\n\n.body {\n  border-radius: 20px 20px 0px 0px;\n  background-color: var(--ion-color-light);\n  position: fixed;\n  overflow-y: scroll;\n  width: 100%;\n  bottom: 0px;\n  top: 165px;\n}\n\n.ready {\n  background-color: #f3f3f3;\n}\n\n.complete {\n  background-color: #4883f0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0tXSUsvS3dpa19NZXJjaGFudC9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSwwQkFBQTtLQUFBLHVCQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQ0VKOztBREFBO0VBRUksZUFBQTtBQ0VKOztBREFBO0VBQ0ksK0JBQUE7RUFDQSwwQkFBQTtBQ0dKOztBRERBO0VBQ0ksd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FEREE7RUFDSSwwQ0FBQTtBQ0lKOztBREZBO0VBQ0ksZ0NBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQWEsVUFBQTtBQ01qQjs7QURIQTtFQUNJLHlCQUFBO0FDTUo7O0FESkE7RUFDSSx5QkFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBcbn1cbmlvbi1jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4ubWFpbi1uYXZ7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5sb2FkZXIge1xuICAgIFxuICAgIG1hcmdpbi10b3A6IDQwJTtcbn1cbi5waWNre1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ubmFtZXtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG59XG4udG9we1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5ib2R5e1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4OyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOyBcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7IFxuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBib3R0b206IDBweDsgdG9wOiAxNjVweDtcbiAgICBcbn1cbi5yZWFkeXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xufVxuLmNvbXBsZXRle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ODgzZjA7XG59IiwiLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLm1haW4tbmF2IHtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5sb2FkZXIge1xuICBtYXJnaW4tdG9wOiA0MCU7XG59XG5cbi5waWNrIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5uYW1lIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmJvZHkge1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDBweDtcbiAgdG9wOiAxNjVweDtcbn1cblxuLnJlYWR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbn1cblxuLmNvbXBsZXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4ODNmMDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");







var DashboardPage = /** @class */ (function () {
    function DashboardPage(fs, navCtrl, service, modal, db) {
        this.fs = fs;
        this.navCtrl = navCtrl;
        this.service = service;
        this.modal = modal;
        this.db = db;
        // variables
        this.Myorders = [];
        this.readyOrders = [];
        this.login = false;
        this.loader = true;
        this.search = false;
        this.inputSearch = false;
        this.count = 0;
        this.DeliveryOrders = [];
        this.PickPayOrders = [];
        this.active = "Deliveries";
        this.Deliverycount = 0;
        this.PickPayCount = 0;
        this.service.hiddenTabs = false;
        this.date = new Date();
    }
    // scroll events
    DashboardPage.prototype.onScroll = function (event) {
        if (event.detail.scrollTop === 148) {
            this.inputSearch = true;
        }
        else {
            this.inputSearch = false;
        }
    };
    // ionviewwill enter function
    DashboardPage.prototype.ionViewWillEnter = function () {
        this.getShop();
    };
    DashboardPage.prototype.changeCategory = function (event) {
        if (event.detail.value === 'delivery') {
            this.active = "Deliveries";
        }
        if (event.detail.value === "pick&pay") {
            this.active = "PickPay";
        }
    };
    DashboardPage.prototype.getCount = function () {
        return this.count;
    };
    // oninit method
    DashboardPage.prototype.ngOnInit = function () {
        this.userID = localStorage.getItem('user');
        console.log(this.userID);
        if (this.userID != null) {
            // this.getOrders();
        }
        else {
            this.login = true;
        }
        this.service.shopFirst();
    };
    // show searchbar
    DashboardPage.prototype.showsearch = function () {
        if (this.search === false) {
            this.search = true;
        }
        else {
            this.search = false;
        }
    };
    // filter searchbar
    DashboardPage.prototype.setFilteredItems = function () {
        if (this.searchTerm !== null || this.searchTerm !== '') {
            // this.Myorders = this.filterItems();
            this.readyOrders = this.filterItems();
            console.log(this.Myorders);
        }
    };
    DashboardPage.prototype.filterItems = function () {
        var _this = this;
        return this.filterOrder.filter(function (item) {
            return item.OrderID.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
        });
    };
    // to sales page
    DashboardPage.prototype.sales = function () {
        this.service.hiddenTabs = true;
        this.navCtrl.navigate(['tabs/sales']);
    };
    // to stock page
    DashboardPage.prototype.stock = function () {
        this.service.hiddenTabs = true;
        this.navCtrl.navigate(['tabs/stock']);
    };
    // to orders stats page
    DashboardPage.prototype.orders = function () {
        this.service.hiddenTabs = true;
        this.navCtrl.navigate(['tabs/order-stats']);
    };
    // count unprepared orders of the day
    // get the shop name
    DashboardPage.prototype.getShop = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.shopname = localStorage.getItem('shop');
                console.log(this.shopname);
                this.getOrders();
                return [2 /*return*/];
            });
        });
    };
    // get orders from firestore
    DashboardPage.prototype.getOrders = function () {
        var _this = this;
        this.service.getTodaysOrders(this.shopname).valueChanges().subscribe(function (res) {
            _this.Myorders = res;
            _this.filterOrder = res;
            console.log(_this.Myorders);
            _this.filterDelivery();
            _this.filterPickPay();
            _this.loader = false;
            if (_this.Myorders.length > 0) {
                _this.count = 0;
                var count_1 = 0;
                _this.Myorders.forEach(function (item) {
                    if (item.status == 'open') {
                        count_1++;
                    }
                });
                _this.count = count_1;
            }
        });
    };
    // view order
    DashboardPage.prototype.openOrder = function (item) {
        console.log(item);
        this.service.setItems(item);
        this.service.hiddenTabs = true;
        this.navCtrl.navigate(['tabs/orders']);
    };
    // filter delivery orders
    DashboardPage.prototype.filterDelivery = function () {
        var _this = this;
        this.DeliveryOrders = this.filter('Deliver it to me');
        this.Deliverycount = 0;
        this.DeliveryOrders.forEach(function (item) {
            if (item.status == 'open') {
                _this.Deliverycount++;
            }
        });
    };
    DashboardPage.prototype.filterPickPay = function () {
        var _this = this;
        this.PickPayOrders = this.filter('I will pick it');
        this.PickPayCount = 0;
        this.PickPayOrders.forEach(function (item) {
            if (item.status == 'open') {
                _this.PickPayCount++;
            }
        });
    };
    DashboardPage.prototype.filter = function (check) {
        return this.Myorders.filter(function (item) {
            return item.Delivery.toLowerCase().indexOf(check.toLowerCase()) > -1;
        });
    };
    DashboardPage.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: _database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] }
    ]; };
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
    return DashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map