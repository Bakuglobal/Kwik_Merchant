(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content color=\"primary\" [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n    <div class=\"top\">\n        <ion-toolbar color=\"primary\">\n            <ion-buttons slot=\"start\">\n                <ion-menu-button></ion-menu-button>\n            </ion-buttons>\n            <ion-buttons slot=\"end\">\n                <ion-icon style=\"width: 23px; height: 23px; margin-top: 10px; margin-right: 10px;\" name=\"search\" size=\"small\" (click)=\"showsearch()\"></ion-icon>\n            </ion-buttons>\n            <ion-searchbar mode=\"ios\" animated placeholder=\"Enter OrderID\" *ngIf=\"search\" [(ngModel)]=\"searchTerm\" style=\"margin-top: 10px; font-size: 13px;\"\n                (ionChange)=\"setFilteredItems()\"></ion-searchbar>\n            <ion-title text-center *ngIf=\"!search\">Dashboard</ion-title>\n        </ion-toolbar>\n        <div>\n            <ion-row>\n                <ion-col size=\"4\" class=\"main-nav\" tappable (click)=\"stock()\">\n                <ion-card class=\"card\">\n                    <ion-card-title>\n                    <ion-icon color=\"primary\" name=\"pricetags\"></ion-icon>\n                    </ion-card-title>\n                    <label text-center>Stock</label>\n                </ion-card>\n                </ion-col>\n                <ion-col size=\"4\" class=\"main-nav\" tappable (click)=\"sales()\">\n                <ion-card class=\"card\">\n                    <ion-card-title>\n                    <ion-icon color=\"primary\" name=\"pulse\"></ion-icon>\n                    </ion-card-title>\n                    <label text-center>Sales</label>\n                </ion-card>\n                </ion-col>\n                <ion-col size=\"4\" class=\"main-nav\" tappable (click)=\"orders()\">\n                <ion-card class=\"card\">\n                    <ion-card-title>\n                    <ion-icon color=\"primary\" name=\"podium\"></ion-icon>\n                    </ion-card-title>\n                    <label text-center>Orders</label>\n                </ion-card>\n                </ion-col>\n            </ion-row>\n        </div>\n    </div>\n\n    <div class=\"body\" style=\"background-color: white;\">\n        <div>\n            <div style=\"width: 100%; color: #737373; padding-left: 15px; padding-right: 15px; padding-top: 10px;\">\n                <div style=\"margin-top: 5px; margin-bottom: 15px; font-size: 15px;\">\n                    <div style=\"margin-left: 5px\"><b>Shop Orders for </b> <span style=\"color: var(--ion-color-primary);font-weight: bold;text-transform: capitalize;\">{{currentMonth}}</span> </div>\n                    <div  style=\"color: var(--ion-color-warning); position: absolute; float: right; right: 13px; margin-top: -29px;\" (click)=\"allOrders()\">\n                      <ion-button fill=\"clear\"[ngClass]=\"{'active': allOrd}\" shape=\"round\">All orders</ion-button> \n                    </div>\n                </div>\n                <ion-slides pager=\"false\" [options]=\"slideOptions\" #slide>\n                    <ion-slide *ngFor=\"let item of daysOfCurrentMonth\" [ngClass]=\"{active: item.day === currentDay && !allOrd}\" (click)=\"formatDate(item.day)\">\n                        <div style=\"padding-bottom: 7px; padding-top: 7px; margin-bottom: 2px;\">\n                            <!-- <ion-label style=\"font-size: .5em;\">{{ currentMonth }}, {{ currentYear }}</ion-label><br> -->\n\n                            <ion-label style=\"font-size: 13px; margin-bottom: 7px;\">{{ getDay(currentYear,date.getMonth(),item.day)}}</ion-label><br>\n\n                            <ion-label style=\"font-size: 13px; margin-bottom: 10px; margin-top: 5px;\">{{ item.day }}</ion-label><br>\n                        </div>\n                    </ion-slide>\n                </ion-slides>\n            </div>\n\n\n\n            <!-- <ion-item color=\"light\">\n                <div no-padding style=\"font-size: 14px; width: 100%;\">\n                    <ion-label no-padding style=\"font-size: 14px; color: #737373;\">Click to filter by date &nbsp;&nbsp;&nbsp;</ion-label>\n                    <ion-datetime no-padding [pickerOptions]=\"customPickerOptions\" style=\"color: #737373; float: right; margin-top: -15px;\" displayFormat=\"DDDD\" [max]=\"\"\n                        value=\"{{ date }}\">\n                    </ion-datetime>\n                </div>\n            </ion-item> -->\n        </div>\n\n        <ion-segment (ionChange)=\"changeCategory($event)\" style=\"background-color: white; padding-top: 7px;\">\n            <ion-segment-button value=\"delivery\" checked>\n                <ion-badge class=\"ion-float-right\">{{Deliverycount}}</ion-badge>\n                <ion-label style=\"font-size: 12px; margin-top: 10px; margin-bottom: 2px;\">Deliveries</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"pick&pay\" >\n                <ion-badge class=\"ion-float-right\">{{PickPayCount}}</ion-badge>\n                <ion-label style=\"font-size: 12px; margin-top: 10px; margin-bottom: 2px;\">Pay & Collect</ion-label>\n            </ion-segment-button>\n        </ion-segment>\n\n        <div *ngIf=\"loader\" text-center>\n            <ion-spinner class=\"loader\" name=\"lines\" color=\"primary\"></ion-spinner>\n        </div>\n\n        <div *ngIf=\"Myorders.length == 0\" style=\"padding-top: 50px; text-align: center;\">\n            <ion-label style=\"font-size: 13px; color: #737373;\">No Pending Orders</ion-label>\n        </div> <br>\n\n        <div *ngIf=\"active === 'Deliveries'\" style=\"padding-top: -10px; margin-bottom: 35px;margin-bottom: 60px;\">\n            <div *ngIf=\"!loader\">\n                <ion-card padding *ngFor=\"let item of DeliveryOrders \" (click)=\"openOrder(item)\" [ngClass]=\"{'ready': item.status == 'Ready','complete': item.status == 'complete'}\">\n                    <ion-icon name=\"funnel\" style=\"float: left;\" color=\"primary\"></ion-icon>&nbsp;\n                    <ion-label color=\"success\" style=\"font-size: 13px;\" *ngIf=\"item.status == 'Ready'\">Ready</ion-label>\n                    <ion-label color=\"warning\" style=\"font-size: 13px;\" *ngIf=\"item.status == 'open'\">Open</ion-label>\n                    <ion-label color=\"danger\" style=\"font-size: 13px;\" *ngIf=\"item.status == 'canceled'\">Canceled</ion-label>\n                    <ion-label style=\"float: right; font-size: 13px;\" color=\"primary\">{{item.OrderID}}</ion-label><br><br>\n                    <div style=\"text-align:start; font-size: 13px;\">\n                        Order for: <ion-label style=\"font-size: 13px;\" *ngFor=\"let item of item.products\"><b>{{item.product}}</b></ion-label> ...\n                    </div>\n                    <span style=\"float: left;margin-top: 20px; font-size: 13px;\">\n                        <b>{{item.username}}</b>\n                    </span>\n                    <span style=\"float: right; bottom:0; margin-top: 20px; font-size: 13px;\">\n                        <span style=\"font-size: 13px;\" class=\"pick\">{{ item.Date.toDate() | dateAgo }} </span>\n                    </span>\n                </ion-card>\n            </div>\n        </div> \n\n\n        <div *ngIf=\"active === 'PickPay'\" style=\"padding-top: -10px; margin-bottom: 60px;\">\n            <div *ngIf=\"!loader\">\n                <ion-card padding *ngFor=\"let item of PickPayOrders \" (click)=\"openOrder(item)\"\n                [ngClass]=\"{'ready': item.status == 'Ready'}\">\n                <ion-icon name=\"funnel\" style=\"float: left;\" color=\"primary\"></ion-icon>&nbsp;\n                <ion-label color=\"success\" style=\"font-size: 13px;\" *ngIf=\"item.status == 'Ready'\">Ready</ion-label>\n                <ion-label color=\"warning\" style=\"font-size: 13px;\" *ngIf=\"item.status == 'open'\">Open</ion-label>\n                <ion-label color=\"success\" style=\"font-size: 13px;\" *ngIf=\"item.Complete == 'True'\">Complete</ion-label>\n                <ion-label style=\"float: right; font-size: 13px;\" color=\"primary\">{{item.OrderID}}</ion-label><br><br>\n                <div style=\"text-align:start; font-size: 13px;\">\n                    Order for: <ion-label style=\"font-size: 13px;\" *ngFor=\"let item of item.products\"><b>{{item.product}}</b></ion-label> ...\n                </div>\n                <span style=\"float: left;margin-top: 20px; font-size: 13px;\">\n                    <b>{{item.username}}</b>\n                </span>\n                <span style=\"float: right; bottom:0; margin-top: 20px; font-size: 13px;\">\n                    <span style=\"font-size: 13px;\" class=\"pick\">{{ item.Date.toDate() | dateAgo }} </span>\n                </span>\n                </ion-card>\n\n            </div>\n        </div>\n    </div> \n\n    </ion-content>"

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
/* harmony import */ var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/date-ago.pipe */ "./src/app/pipes/date-ago.pipe.ts");








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
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"], _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_7__["DateAgoPipe"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.page.scss":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  border-radius: 15px;\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: white;\n}\n\nion-card {\n  border-radius: 15px;\n}\n\n.main-nav {\n  -o-object-position: center;\n     object-position: center;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.loader {\n  margin-top: 40%;\n}\n\n.pick {\n  color: var(--ion-color-success);\n  text-transform: capitalize;\n}\n\n.name {\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n\n.top {\n  background-color: var(--ion-color-primary);\n}\n\n.body {\n  border-radius: 20px 20px 0px 0px;\n  background-color: var(--ion-color-light);\n  position: fixed;\n  overflow-y: scroll;\n  width: 100%;\n  bottom: 0px;\n  top: 165px;\n}\n\n.ready {\n  background-color: #f3f3f3;\n}\n\n.complete {\n  background-color: var(--ion-color-medium);\n}\n\n.active {\n  background-color: var(--ion-color-primary);\n  color: white;\n  font-weight: bold;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGxhcmFzc2VtbWF4d2VsbC9EZXNrdG9wL05ld21hcmsvS3dpa19NZXJjaGFudC9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSwwQkFBQTtLQUFBLHVCQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQ0VKOztBREFBO0VBRUksZUFBQTtBQ0VKOztBREFBO0VBQ0ksK0JBQUE7RUFDQSwwQkFBQTtBQ0dKOztBRERBO0VBQ0ksd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FEREE7RUFDSSwwQ0FBQTtBQ0lKOztBREZBO0VBQ0ksZ0NBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQWEsVUFBQTtBQ01qQjs7QURIQTtFQUNJLHlCQUFBO0FDTUo7O0FESkE7RUFDSSx5Q0FBQTtBQ09KOztBREpBO0VBQ0ksMENBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBcbn1cbmlvbi1jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4ubWFpbi1uYXZ7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5sb2FkZXIge1xuICAgIFxuICAgIG1hcmdpbi10b3A6IDQwJTtcbn1cbi5waWNre1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ubmFtZXtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG59XG4udG9we1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5ib2R5e1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4OyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOyBcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7IFxuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBib3R0b206IDBweDsgdG9wOiAxNjVweDtcbiAgICBcbn1cbi5yZWFkeXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xufVxuLmNvbXBsZXRle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIuY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ubWFpbi1uYXYge1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmxvYWRlciB7XG4gIG1hcmdpbi10b3A6IDQwJTtcbn1cblxuLnBpY2sge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLm5hbWUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uYm9keSB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMHB4O1xuICB0b3A6IDE2NXB4O1xufVxuXG4ucmVhZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xufVxuXG4uY29tcGxldGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

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
            initialSlide: 0,
            slidesPerView: 7,
        };
        this.deliveryInitialData = [];
        this.pickPayInitialData = [];
        this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.daysOfCurrentMonth = [];
        this.allOrd = false;
        this.service.hiddenTabs = false;
        this.customPickerOptions = {
            buttons: [
                {
                    text: 'Cancel',
                    handler: () => {
                        console.log('Clicked Log. Do not Dismiss.');
                        return true;
                    }
                },
                {
                    text: 'This month',
                    handler: (res) => {
                        this.DeliveryOrders = this.deliveryInitialData;
                        this.PickPayOrders = this.pickPayInitialData;
                    }
                },
                {
                    text: 'Done',
                    handler: (res) => {
                        let newDate = Number(res.day.text);
                        console.log(newDate);
                        this.formatDate(newDate);
                    }
                }
            ]
        };
    }
    // GET DAYS OF THE CURRENT MONTH
    getDaysOfTheCurrentMonth() {
        let totalDays = this.extractDays(this.date.getMonth(), this.date.getFullYear());
        console.log("======= GET TOTAL DAYS ======");
        console.log(totalDays);
        for (var i = 1; i < totalDays + 1; i++) {
            let element = { day: i };
            this.daysOfCurrentMonth.push(element);
        }
    }
    // EXTRACT DAYS 
    extractDays(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }
    getDay(y, m, d) {
        if (d === this.currentDay) {
            this.slides.slideTo(d - 1, 500);
        }
        // let days = ['Sunday','Monday','Tuesday', 'Wednesday','Thursday','Friday','Saturday']; 
        let day = new Date(y, m, d);
        return d && this.days[day.getDay()];
    }
    // RETURN NAME
    returnName(date) {
        return this.days[date];
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
    }
    changeCategory(event) {
        if (event.detail.value === 'delivery') {
            this.active = "Deliveries";
        }
        if (event.detail.value === "pick&pay") {
            this.active = "PickPay";
        }
    }
    getCount() {
        return this.count;
    }
    // oninit method
    ngOnInit() {
        this.userID = localStorage.getItem('user');
        console.log(this.userID);
        if (this.userID != null) {
            // this.getOrders();
        }
        else {
            this.login = true;
        }
        this.service.shopFirst();
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
            this.DeliveryOrders = this.filterItems();
            this.PickPayOrders = this.filterItems();
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
    // count unprepared orders of the day
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
            console.log("======================");
            console.log(this.Myorders);
            console.log("=======================");
            this.filterDelivery();
            this.filterPickPay();
            this.formatDate(this.date.getDate());
            this.loader = false;
        });
    }
    sortDeliveryOrders() {
        return this.DeliveryOrders.sort((a, b) => {
            if (a.status === 'open') {
                return -1;
            }
            else {
                return 1;
            }
        });
    }
    sortPickPayOrders() {
        return this.PickPayOrders.sort((a, b) => {
            if (a.status === 'open') {
                return -1;
            }
            else {
                return 1;
            }
        });
    }
    // view order
    openOrder(item) {
        console.log(item);
        this.service.setItems(item);
        this.service.hiddenTabs = true;
        this.navCtrl.navigate(['tabs/orders']);
    }
    // filter delivery orders
    filterDelivery() {
        // get orders for delivery from this.Myorders
        this.DeliveryOrders = this.filter('deliver');
        console.log('delivery orders', this.DeliveryOrders);
        this.deliveryInitialData = this.DeliveryOrders;
        // filter them to current month
        this.DeliveryOrders = this.filterOrdersToCurrentMonth();
        console.log("==== This month Orders ====");
        console.log('delivery orders for this month', this.DeliveryOrders);
        // sort the delivery orders for this month
        this.DeliveryOrders = this.sortDeliveryOrders();
        console.log('sorted delivery orders for this month', this.DeliveryOrders);
        // remove the complete delivey orders for this month
        this.removeCompleteOrders(this.DeliveryOrders);
        console.log("========= final orders array list =========");
        console.log('delivery orders without complete orders', this.DeliveryOrders);
        this.Deliverycount = 0;
        this.DeliveryOrders.forEach(item => {
            if (item.status == 'open' && item.status == 'Ready' || item.status == 'canceled') {
                this.Deliverycount++;
            }
        });
    }
    filterOrdersToCurrentMonth() {
        return this.deliveryInitialData.filter(item => {
            console.log(item.Date.toDate().getMonth(), this.date.getMonth());
            return item.Date.toDate().getMonth() === this.date.getMonth();
        });
    }
    // FILTER PICKPAY
    filterPickPay() {
        // get orders for delivery from this.Myorders
        this.PickPayOrders = this.filter('pick');
        console.log('pick orders', this.PickPayOrders);
        this.pickPayInitialData = this.PickPayOrders;
        // filter them to current month
        this.PickPayOrders = this.filterPickPayToCurrentMonth();
        console.log("==== This month Orders ====");
        console.log('pick orders for this month', this.PickPayOrders);
        // sort the delivery orders for this month
        this.PickPayOrders = this.sortPickPayOrders();
        console.log('sorted pick orders for this month', this.PickPayOrders);
        // remove the complete delivey orders for this month
        this.removeCompleteOrders(this.PickPayOrders);
        // this.pickPayInitialData = this.PickPayOrders;
        console.log("========= final orders array list =========");
        console.log('pick orders without complete orders', this.PickPayOrders);
        this.PickPayCount = 0;
        this.PickPayOrders.forEach(item => {
            if (item.status == 'open' || item.status == 'Ready' || item.status == 'canceled') {
                this.PickPayCount++;
            }
        });
    }
    filterPickPayToCurrentMonth() {
        return this.pickPayInitialData.filter(item => {
            return item.Date.toDate().getMonth() === this.date.getMonth();
        });
    }
    filter(check) {
        return this.Myorders.filter(item => {
            return item.Delivery.toLowerCase().indexOf(check.toLowerCase()) > -1;
        });
    }
    updateCounts() {
        this.Deliverycount = 0;
        this.DeliveryOrders.forEach(item => {
            if (item.status == 'open' || item.status == 'Ready' || item.status == 'canceled') {
                this.Deliverycount++;
            }
        });
        this.PickPayCount = 0;
        this.PickPayOrders.forEach(item => {
            if (item.status == 'open' || item.status == 'Ready' || item.status == 'canceled') {
                this.PickPayCount++;
            }
        });
    }
    // REMOVE COMPLETE ORDER
    removeCompleteOrders(arr) {
        let tempArr = arr;
        if (tempArr.length > 0) {
            tempArr.forEach(item => {
                if (item.status == 'complete') {
                    let index = arr.indexOf(item);
                    console.log("========   ARR 1 1   ======");
                    console.log(index);
                    arr.splice(index, 1);
                    console.log("========   ARR 1 2   ======");
                    console.log(arr);
                }
            });
        }
    }
    // FORMAT DATE
    formatDate(date) {
        this.allOrd = false;
        this.currentDay = date;
        let delivaryTemp = this.deliveryInitialData;
        let pickPayTemp = this.pickPayInitialData;
        this.DeliveryOrders = this.filterByDate(date, delivaryTemp);
        this.PickPayOrders = this.filterByDate(date, pickPayTemp);
        this.updateCounts();
    }
    allOrders() {
        this.allOrd = true;
        this.filterDelivery();
        this.filterPickPay();
        this.updateCounts();
    }
    // FILTER BY DATE
    filterByDate(date, arr) {
        return arr.filter(item => {
            return item.Date.toDate().getDate() == date;
        });
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slide', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"])
], DashboardPage.prototype, "slides", void 0);
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



/***/ }),

/***/ "./src/app/pipes/date-ago.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/date-ago.pipe.ts ***!
  \****************************************/
/*! exports provided: DateAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateAgoPipe", function() { return DateAgoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DateAgoPipe = class DateAgoPipe {
    transform(value, args) {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
            const intervals = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0)
                    if (counter === 1) {
                        return counter + ' ' + i + ' ago'; // singular (1 day ago)
                    }
                    else {
                        return counter + ' ' + i + 's ago'; // plural (2 days ago)
                    }
            }
        }
        return value;
    }
};
DateAgoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'dateAgo',
        pure: true
    })
], DateAgoPipe);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map