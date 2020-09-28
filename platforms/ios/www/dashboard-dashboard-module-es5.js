(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content color=\"primary\" [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n    <div class=\"top\">\n        <ion-toolbar color=\"primary\">\n            <ion-buttons slot=\"start\">\n                <ion-menu-button></ion-menu-button>\n            </ion-buttons>\n            <ion-buttons slot=\"end\">\n                <ion-icon style=\"width: 23px; height: 23px; margin-top: 10px; margin-right: 10px;\" name=\"search\" size=\"small\" (click)=\"showsearch()\"></ion-icon>\n            </ion-buttons>\n            <ion-searchbar mode=\"ios\" animated placeholder=\"Enter OrderID\" *ngIf=\"search\" [(ngModel)]=\"searchTerm\" style=\"margin-top: 10px; font-size: 13px;\"\n                (ionChange)=\"setFilteredItems()\"></ion-searchbar>\n            <ion-title text-center *ngIf=\"!search\">Dashboard</ion-title>\n        </ion-toolbar>\n        <div>\n            <ion-row>\n                <ion-col size=\"4\" class=\"main-nav\" tappable (click)=\"stock()\">\n                <ion-card class=\"card\">\n                    <ion-card-title>\n                    <ion-icon color=\"primary\" name=\"pricetags\"></ion-icon>\n                    </ion-card-title>\n                    <label text-center>Stock</label>\n                </ion-card>\n                </ion-col>\n                <ion-col size=\"4\" class=\"main-nav\" tappable (click)=\"sales()\">\n                <ion-card class=\"card\">\n                    <ion-card-title>\n                    <ion-icon color=\"primary\" name=\"pulse\"></ion-icon>\n                    </ion-card-title>\n                    <label text-center>Sales</label>\n                </ion-card>\n                </ion-col>\n                <ion-col size=\"4\" class=\"main-nav\" tappable (click)=\"orders()\">\n                <ion-card class=\"card\">\n                    <ion-card-title>\n                    <ion-icon color=\"primary\" name=\"podium\"></ion-icon>\n                    </ion-card-title>\n                    <label text-center>Orders</label>\n                </ion-card>\n                </ion-col>\n            </ion-row>\n        </div>\n    </div>\n\n    <div class=\"body\" style=\"background-color: white;\">\n        <div>\n            <div style=\"width: 100%; color: #737373; padding-left: 15px; padding-right: 15px; padding-top: 10px;\">\n                <div style=\"margin-top: 5px; margin-bottom: 15px; font-size: 15px;\">\n                    <div style=\"margin-left: 5px\">My shop performance for this month</div>\n                    <div style=\"color: var(--ion-color-primary); position: absolute; float: right; right: 20px; margin-top: -17px;\">{{ currentMonth }}, {{ currentYear }}</div>\n                </div>\n                <ion-slides pager=\"false\" [options]=\"slideOptions\">\n                    <ion-slide *ngFor=\"let item of daysOfCurrentMonth\" [ngClass]=\"{active: item.day === currentDay}\" (click)=\"formatDate(item.day)\">\n                        <div style=\"padding-bottom: 7px; padding-top: 7px; margin-bottom: 2px;\">\n                            <!-- <ion-label style=\"font-size: .5em;\">{{ currentMonth }}, {{ currentYear }}</ion-label><br> -->\n\n                            <ion-label style=\"font-size: 13px; margin-bottom: 7px;\">{{ getDay(currentYear,date.getMonth(),item.day)}}</ion-label><br>\n\n                            <ion-label style=\"font-size: 13px; margin-bottom: 10px; margin-top: 5px;\">{{ item.day }}</ion-label><br>\n                        </div>\n                    </ion-slide>\n                </ion-slides>\n            </div>\n\n\n\n            <!-- <ion-item color=\"light\">\n                <div no-padding style=\"font-size: 14px; width: 100%;\">\n                    <ion-label no-padding style=\"font-size: 14px; color: #737373;\">Click to filter by date &nbsp;&nbsp;&nbsp;</ion-label>\n                    <ion-datetime no-padding [pickerOptions]=\"customPickerOptions\" style=\"color: #737373; float: right; margin-top: -15px;\" displayFormat=\"DDDD\" [max]=\"\"\n                        value=\"{{ date }}\">\n                    </ion-datetime>\n                </div>\n            </ion-item> -->\n        </div>\n\n        <ion-segment (ionChange)=\"changeCategory($event)\" style=\"background-color: white; padding-top: 7px;\">\n            <ion-segment-button value=\"delivery\" checked>\n                <ion-badge class=\"ion-float-right\">{{Deliverycount}}</ion-badge>\n                <ion-label style=\"font-size: 12px; margin-top: 10px; margin-bottom: 2px;\">Deliveries</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"pick&pay\" >\n                <ion-badge class=\"ion-float-right\">{{PickPayCount}}</ion-badge>\n                <ion-label style=\"font-size: 12px; margin-top: 10px; margin-bottom: 2px;\">Pay & Collect</ion-label>\n            </ion-segment-button>\n        </ion-segment>\n\n        <div *ngIf=\"loader\" text-center>\n            <ion-spinner class=\"loader\" name=\"lines\" color=\"primary\"></ion-spinner>\n        </div>\n\n        <div *ngIf=\"Myorders.length == 0\" style=\"padding-top: 50px; text-align: center;\">\n            <ion-label style=\"font-size: 13px; color: #737373;\">No Pending Orders</ion-label>\n        </div> <br>\n\n        <div *ngIf=\"active === 'Deliveries'\" style=\"padding-top: -10px; margin-bottom: 35px;margin-bottom: 60px;\">\n            <div *ngIf=\"!loader\">\n                <ion-card padding *ngFor=\"let item of DeliveryOrders \" (click)=\"openOrder(item)\" [ngClass]=\"{'ready': item.status == 'Ready','complete': item.status == 'complete'}\">\n                    <ion-icon name=\"funnel\" style=\"float: left;\" color=\"primary\"></ion-icon>&nbsp;\n                    <ion-label color=\"success\" style=\"font-size: 13px;\" *ngIf=\"item.status == 'Ready'\">Ready</ion-label>\n                    <ion-label color=\"warning\" style=\"font-size: 13px;\" *ngIf=\"item.status == 'open'\">Open</ion-label>\n                    <!-- <ion-label color=\"success\" style=\"font-size: 13px;\" *ngIf=\"item.status == 'complete'\">Complete</ion-label> -->\n                    <ion-label style=\"float: right; font-size: 13px;\" color=\"primary\">{{item.OrderID}}</ion-label><br><br>\n                    <div style=\"text-align:start; font-size: 13px;\">\n                        Order for: <ion-label style=\"font-size: 13px;\" *ngFor=\"let item of item.products\"><b>{{item.product}}</b></ion-label> ...\n                    </div>\n                    <span style=\"float: left;margin-top: 20px;\">\n                        <b>{{item.username}}</b>\n                    </span>\n                    <span style=\"float: right; bottom:0; margin-top: 20px;\">\n                        <span style=\"font-size: 13px;\" class=\"pick\">Delivery To : {{item.Location}} </span>\n                    </span>\n                </ion-card>\n            </div>\n        </div> \n\n\n        <div *ngIf=\"active === 'PickPay'\" style=\"padding-top: -10px; margin-bottom: 60px;\">\n            <div *ngIf=\"!loader\">\n                <ion-card padding *ngFor=\"let item of PickPayOrders \" (click)=\"openOrder(item)\"\n                [ngClass]=\"{'ready': item.status == 'Ready'}\">\n                <ion-icon name=\"funnel\" style=\"float: left;\" color=\"primary\"></ion-icon>&nbsp;\n                <ion-label color=\"success\" style=\"font-size: 13px;\" *ngIf=\"item.status == 'Ready'\">Ready</ion-label>\n                <ion-label color=\"warning\" style=\"font-size: 13px;\" *ngIf=\"item.status == 'open'\">Open</ion-label>\n                <ion-label color=\"success\" style=\"font-size: 13px;\" *ngIf=\"item.Complete == 'True'\">Complete</ion-label>\n                <ion-label style=\"float: right; font-size: 13px;\" color=\"primary\">{{item.OrderID}}</ion-label><br><br>\n                <div style=\"text-align:start; font-size: 13px;\">\n                    Order for: <ion-label style=\"font-size: 13px;\" *ngFor=\"let item of item.products\"><b>{{item.product}}</b></ion-label> ...\n                </div>\n                <span style=\"float: left;margin-top: 20px; font-size: 13px;\">\n                    <b>{{item.username}}</b>\n                </span>\n                <!-- <span style=\"float: right;bottom:0;margin-top: 20px; font-size: 13px;\">\n                    <span style=\"font-size: 13px;\" class=\"pick\">Pick up : {{item.pickHour}}:{{item.pickMins}} {{item.pickDay}}</span>\n                </span> -->\n                </ion-card>\n\n            </div>\n        </div>\n        <!-- <div *ngIf=\"!loader\" style=\"padding-top: 5%;\">\n            <ion-card padding *ngFor=\"let item of Myorders \"  (click)=\"openOrder(item)\" [ngClass]=\"{'ready': item.status == 'Ready'}\"> \n                <ion-icon name=\"funnel\" style=\"float: left;\" color=\"primary\"></ion-icon>&nbsp;\n                <ion-label color=\"success\" *ngIf=\"item.status == 'Ready' && item.paid == 'False'\">Ready</ion-label>\n                <ion-label color=\"warning\" *ngIf=\"item.status == 'open'\">Open</ion-label>\n                <ion-label color=\"success\" *ngIf=\"item.paid == 'True'\">Complete</ion-label>\n                <ion-label style=\"float: right;\" color=\"primary\">{{item.OrderID}}</ion-label><br><br>\n                <div style=\"text-align:start;\">\n                Order for <ion-label *ngFor=\"let item of item.products\">{{item.product}}</ion-label> ...\n                </div>\n                <span style=\"float: left;margin-top: 10px;\">\n                {{item.username}}\n                </span>\n                <span style=\"float: right;bottom:0;margin-top: 10px;\">\n                <span class=\"pick\" *ngIf=\"item.Delivery == 'Deliver it to me'\">Delivery To : {{item.Location}} </span>\n                <span class=\"pick\" *ngIf=\"item.Delivery == 'I will pick it'\">Pick up : {{item.pickHour}}:{{item.pickMins}} {{item.pickDay}}</span> \n                </span>\n            </ion-card>\n            \n        </div> -->\n    </div> \n\n    </ion-content>"

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

module.exports = ".card {\n  border-radius: 15px;\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: white;\n}\n\nion-card {\n  border-radius: 15px;\n}\n\n.main-nav {\n  -o-object-position: center;\n     object-position: center;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.loader {\n  margin-top: 40%;\n}\n\n.pick {\n  color: var(--ion-color-success);\n  text-transform: capitalize;\n}\n\n.name {\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n\n.top {\n  background-color: var(--ion-color-primary);\n}\n\n.body {\n  border-radius: 20px 20px 0px 0px;\n  background-color: var(--ion-color-light);\n  position: fixed;\n  overflow-y: scroll;\n  width: 100%;\n  bottom: 0px;\n  top: 165px;\n}\n\n.ready {\n  background-color: #f3f3f3;\n}\n\n.complete {\n  background-color: var(--ion-color-medium);\n}\n\n.active {\n  background-color: var(--ion-color-primary);\n  color: white;\n  font-weight: bold;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGxhcmFzc2VtbWF4d2VsbC9EZXNrdG9wL0t3aWtfTWVyY2hhbnQvc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksMEJBQUE7S0FBQSx1QkFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNFSjs7QURBQTtFQUVJLGVBQUE7QUNFSjs7QURBQTtFQUNJLCtCQUFBO0VBQ0EsMEJBQUE7QUNHSjs7QUREQTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtBQ0lKOztBRERBO0VBQ0ksMENBQUE7QUNJSjs7QURGQTtFQUNJLGdDQUFBO0VBQ0Esd0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUFhLFVBQUE7QUNNakI7O0FESEE7RUFDSSx5QkFBQTtBQ01KOztBREpBO0VBQ0kseUNBQUE7QUNPSjs7QURKQTtFQUNJLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgXG59XG5pb24tY2FyZHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLm1haW4tbmF2e1xuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4ubG9hZGVyIHtcbiAgICBcbiAgICBtYXJnaW4tdG9wOiA0MCU7XG59XG4ucGlja3tcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLm5hbWV7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxufVxuLnRvcHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uYm9keXtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsgXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG92ZXJmbG93LXk6c2Nyb2xsOyBcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgYm90dG9tOiAwcHg7IHRvcDogMTY1cHg7XG4gICAgXG59XG4ucmVhZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbn1cbi5jb21wbGV0ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cblxuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLm1haW4tbmF2IHtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5sb2FkZXIge1xuICBtYXJnaW4tdG9wOiA0MCU7XG59XG5cbi5waWNrIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5uYW1lIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmJvZHkge1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDBweDtcbiAgdG9wOiAxNjVweDtcbn1cblxuLnJlYWR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbn1cblxuLmNvbXBsZXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

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
        var _this = this;
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
        this.slideOptions = {
            slidesPerView: 7,
        };
        this.deliveryInitialData = [];
        this.pickPayInitialData = [];
        this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.daysOfCurrentMonth = [];
        this.service.hiddenTabs = false;
        // this.date = new Date();
        // this.currentMonth = this.date.getMonth();
        // this.getDaysOfTheCurrentMonth();
        this.customPickerOptions = {
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Clicked Log. Do not Dismiss.');
                        return true;
                    }
                },
                {
                    text: 'This month',
                    handler: function (res) {
                        _this.DeliveryOrders = _this.deliveryInitialData;
                        _this.PickPayOrders = _this.pickPayInitialData;
                    }
                },
                {
                    text: 'Done',
                    handler: function (res) {
                        var newDate = Number(res.day.text);
                        console.log(newDate);
                        _this.formatDate(newDate);
                    }
                }
            ]
        };
    }
    // GET DAYS OF THE CURRENT MONTH
    DashboardPage.prototype.getDaysOfTheCurrentMonth = function () {
        var totalDays = this.extractDays(this.date.getMonth(), this.date.getFullYear());
        console.log("======= GET TOTAL DAYS ======");
        console.log(totalDays);
        for (var i = 1; i < totalDays + 1; i++) {
            var element = { day: i };
            this.daysOfCurrentMonth.push(element);
        }
    };
    // EXTRACT DAYS 
    DashboardPage.prototype.extractDays = function (month, year) {
        return new Date(year, month + 1, 0).getDate();
    };
    DashboardPage.prototype.getDay = function (y, m, d) {
        // let days = ['Sunday','Monday','Tuesday', 'Wednesday','Thursday','Friday','Saturday']; 
        var day = new Date(y, --m, d);
        return d && this.days[day.getDay()];
    };
    // RETURN NAME
    DashboardPage.prototype.returnName = function (date) {
        return this.days[date];
    };
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
        this.date = new Date();
        this.currentYear = this.date.getFullYear();
        this.currentMonth = this.months[this.date.getMonth()];
        this.currentDay = this.date.getDate();
        console.log("============ GET DAY =======");
        console.log(this.currentDay);
        console.log(this.date.getDate());
        console.log("=========== END GET DAY =======");
        this.getDaysOfTheCurrentMonth();
        console.log("=========== DAYS OF THE CURRENT MONTH  =======");
        console.log(this.daysOfCurrentMonth);
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
            this.DeliveryOrders = this.filterItems();
            this.PickPayOrders = this.filterItems();
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
            console.log("======================");
            console.log(_this.Myorders);
            console.log("=======================");
            _this.filterDelivery();
            _this.filterPickPay();
            _this.loader = false;
        });
    };
    DashboardPage.prototype.sortDeliveryOrders = function () {
        return this.DeliveryOrders.sort(function (a, b) {
            if (a.status === 'open') {
                return -1;
            }
            else {
                return 1;
            }
        });
    };
    DashboardPage.prototype.sortPickPayOrders = function () {
        return this.PickPayOrders.sort(function (a, b) {
            if (a.status === 'open') {
                return -1;
            }
            else {
                return 1;
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
        this.DeliveryOrders = this.filterOrdersToCurrentMonth();
        console.log("CONSOLE DELIVERY ORDERS");
        console.log(this.DeliveryOrders);
        console.log("========= FILTER DELIVERY 1 =========");
        this.DeliveryOrders = this.sortDeliveryOrders();
        console.log(this.DeliveryOrders);
        this.removeCompleteOrders(this.DeliveryOrders);
        console.log("========= FILTER DELIVERY 2 =========");
        console.log(this.DeliveryOrders);
        this.deliveryInitialData = this.DeliveryOrders;
        this.Deliverycount = 0;
        this.DeliveryOrders.forEach(function (item) {
            if (item.status == 'open' || item.status == 'Ready') {
                _this.Deliverycount++;
            }
        });
    };
    DashboardPage.prototype.filterOrdersToCurrentMonth = function () {
        var _this = this;
        return this.deliveryInitialData.filter(function (item) {
            item.Date.toDate().getMonth() === _this.date.getMonth();
        });
    };
    // FILTER PICKPAY
    DashboardPage.prototype.filterPickPay = function () {
        var _this = this;
        this.PickPayOrders = this.filter('I will pick it');
        this.PickPayOrders = this.filterPickPayToCurrentMonth();
        this.PickPayOrders = this.sortPickPayOrders();
        this.removeCompleteOrders(this.PickPayOrders);
        this.pickPayInitialData = this.PickPayOrders;
        this.PickPayCount = 0;
        this.PickPayOrders.forEach(function (item) {
            if (item.status == 'open' || item.status == 'Ready') {
                _this.PickPayCount++;
            }
        });
    };
    DashboardPage.prototype.filterPickPayToCurrentMonth = function () {
        var _this = this;
        return this.pickPayInitialData.filter(function (item) {
            item.Date.toDate().getMonth() === _this.date.getMonth();
        });
    };
    DashboardPage.prototype.filter = function (check) {
        return this.Myorders.filter(function (item) {
            return item.Delivery.toLowerCase().indexOf(check.toLowerCase()) > -1;
        });
    };
    // REMOVE COMPLETE ORDER
    DashboardPage.prototype.removeCompleteOrders = function (arr) {
        var tempArr = arr;
        if (tempArr.length > 0) {
            tempArr.forEach(function (item) {
                if (item.status == 'canceled' || item.status == 'complete') {
                    var index = arr.indexOf(item);
                    console.log("========   ARR 1 1   ======");
                    console.log(index);
                    arr.splice(index, 1);
                    console.log("========   ARR 1 2   ======");
                    console.log(arr);
                }
            });
        }
    };
    // FORMAT DATE
    DashboardPage.prototype.formatDate = function (date) {
        this.currentDay = date;
        var delivaryTemp = this.deliveryInitialData;
        var pickPayTemp = this.pickPayInitialData;
        this.DeliveryOrders = this.filterByDate(date, delivaryTemp);
        this.PickPayOrders = this.filterByDate(date, pickPayTemp);
    };
    // FILTER BY DATE
    DashboardPage.prototype.filterByDate = function (date, arr) {
        return arr.filter(function (item) {
            return item.Date.toDate().getDate() == date;
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