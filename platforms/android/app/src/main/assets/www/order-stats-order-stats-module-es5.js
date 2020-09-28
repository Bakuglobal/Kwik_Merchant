(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-stats-order-stats-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/order-stats/order-stats.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order-stats/order-stats.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content color=\"primary\" style=\"background-color: var(--ion-color-primary);\">\n\n    <ion-toolbar color=\"primary\" style=\"margin-top: 10px;\">\n        <ion-buttons slot=\"start\">\n            <ion-icon style=\"width: 20px; height: 20px; margin-left: 5px;\" name=\"arrow-back\" (click)=\"home()\">\n            </ion-icon>\n        </ion-buttons>\n        <ion-title text-center style=\"margin-right: 10px;\">\n            <ion-item no-padding style=\"font-size: 14px; --background: var(--ion-color-primary); color: white;\">\n                <ion-label no-padding style=\"font-size: 14px; background-color: var(--ion-color-primary);\">Performance for this month</ion-label>\n                <ion-datetime no-padding [pickerOptions]=\"customPickerOptions\" displayFormat=\"DDDD\" [max]=\"\"\n                    value=\"{{ date }}\">\n                </ion-datetime>\n            </ion-item>\n        </ion-title>\n    </ion-toolbar>\n\n\n\n\n    <div class=\"card-main\">\n        <ion-card style=\"background-color: white; margin-top: 20px; border-radius: 10px 10px 10px 10px;\">\n            <ion-row>\n                <ion-col class=\"top\" [ngClass]=\"{'active': top == 'past'}\" (click)=\"pastOrders()\">\n                    <div style=\"font-size: 18px; margin-bottom: 10px;\">{{TotalPastOrders}}</div>\n                    <div style=\"font-size: 14px;\">Past Orders</div>\n                </ion-col>\n            </ion-row>\n        </ion-card>\n\n        <div class=\"openOrder\" style=\"margin-top: -45px;\">\n            <div style=\"margin-top: 60px;\">\n                <div *ngIf=\"loader\" text-center style=\"padding-top: 50px;text-align: center;\">\n                    <ion-spinner class=\"loader\" name=\"lines\" color=\"primary\"></ion-spinner>\n                </div>\n                <div *ngIf=\"myOpenOrders.length == 0\" style=\"padding-top: 130px;text-align: center;\">\n                    <div style=\"color: #737373; font-size: 13px;\">No Order is due Today</div>\n                </div>\n\n                <ion-card padding style=\"background-color: white;\" *ngFor=\"let item of myOpenOrders\">\n                    <div *ngIf=\"!item.show\">\n                        <ion-icon name=\"funnel\" style=\"float: left;\" color=\"primary\" (click)=\"showMore(item)\">\n                        </ion-icon>&nbsp;\n                        <ion-label color=\"success\" *ngIf=\"item.status == 'Ready'\">Ready</ion-label>\n                        <ion-label style=\"float: right;\" color=\"primary\">{{item.OrderID}}</ion-label><br><br>\n                        <div style=\"text-align:start;\">\n                            Order for <ion-label *ngFor=\"let item of item.products\">{{item.product}}, </ion-label> ...\n                        </div>\n                        <span style=\"float: left;margin-top: 10px;\">\n                            {{item.username}}\n                        </span>\n                        <span style=\"float: right;bottom:0;margin-top: 10px;\">\n                            <span class=\"pick\" *ngIf=\"item.Delivery == 'Deliver it to me'\">Delivery To :\n                                {{item.Location}} </span>\n                            <span class=\"pick\" *ngIf=\"item.Delivery == 'I will pick it'\">Pick up :\n                                {{item.pickHour}}:{{item.pickMins}}\n                                {{item.pickDay}}</span>\n                        </span>\n                    </div>\n                    <div *ngIf=\"item.show\">\n                        <ion-card-title text-center style=\"font-size: 15px; color: var(--ion-color-primary);\">\n                            <ion-icon name=\"arrow-dropup\" color=\"primary\" style=\"float: left;\" (click)=\"showLess(item)\">\n                            </ion-icon>\n                            {{item.OrderID}}<br>{{item.username}}\n                            <ion-icon name=\"call\" color=\"success\" style=\"float: right;\" (click)=\"callCustomer()\">\n                            </ion-icon>\n                        </ion-card-title>\n                        <ion-card-content>\n                            <ion-row *ngFor=\"let item of item.products\">\n                                <ion-col>\n                                    {{item.product}}\n                                </ion-col>\n                                <ion-col>\n                                    {{item.currentprice}}\n                                </ion-col>\n                                <ion-col>{{item.quantity}}</ion-col>\n                            </ion-row>\n                            <ion-row>\n                                <ion-col>\n                                    <span\n                                        style=\"float: left;bottom:0;margin-top: 10px;color:var(--ion-color-primary);font-weight: bold;\"\n                                        (click)=\"viewOrder(item)\">\n                                        <ion-label>View more</ion-label>\n                                    </span>\n                                    <span style=\"float: right;bottom:0;margin-top: 10px;color:var(--ion-color-primary)\">\n                                        <span class=\"pick\">{{item.Date.toDate()  | date: 'dd/MM/yyyy' }}</span>\n                                    </span>\n\n                                </ion-col>\n                            </ion-row>\n                        </ion-card-content>\n                    </div>\n                </ion-card>\n            </div>\n        </div>\n    </div>\n\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/order-stats/order-stats.module.ts":
/*!***************************************************!*\
  !*** ./src/app/order-stats/order-stats.module.ts ***!
  \***************************************************/
/*! exports provided: OrderStatsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatsPageModule", function() { return OrderStatsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_stats_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-stats.page */ "./src/app/order-stats/order-stats.page.ts");







var routes = [
    {
        path: '',
        component: _order_stats_page__WEBPACK_IMPORTED_MODULE_6__["OrderStatsPage"]
    }
];
var OrderStatsPageModule = /** @class */ (function () {
    function OrderStatsPageModule() {
    }
    OrderStatsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_order_stats_page__WEBPACK_IMPORTED_MODULE_6__["OrderStatsPage"]]
        })
    ], OrderStatsPageModule);
    return OrderStatsPageModule;
}());



/***/ }),

/***/ "./src/app/order-stats/order-stats.page.scss":
/*!***************************************************!*\
  !*** ./src/app/order-stats/order-stats.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  border-radius: 15px;\n  text-align: center;\n  padding: 10px 20px 10px;\n}\n\n.card-main {\n  background-color: white;\n  color: var(--ion-color-medium);\n  background-color: white;\n  border-radius: 20px 20px 0px 0px;\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n  top: 100px;\n  overflow-y: scroll;\n}\n\n.top {\n  text-align: center;\n}\n\n.top ion-label {\n  font-weight: bolder;\n  font-size: 2em;\n}\n\n.top ion-text {\n  font-weight: bold;\n}\n\n.active {\n  color: var(--ion-color-primary);\n}\n\n.pick {\n  color: var(--ion-color-success);\n  text-transform: capitalize;\n}\n\n.ready {\n  background-color: #06b7f13d;\n}\n\n.openOrder {\n  position: fixed;\n  bottom: 0px;\n  overflow-y: scroll;\n  width: 100%;\n  top: 35%;\n}\n\n@media only screen and (max-width: 320px) {\n  .openOrder {\n    top: 35%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGxhcmFzc2VtbWF4d2VsbC9EZXNrdG9wL0t3aWtfTWVyY2hhbnQvc3JjL2FwcC9vcmRlci1zdGF0cy9vcmRlci1zdGF0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL29yZGVyLXN0YXRzL29yZGVyLXN0YXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0NKOztBRENBO0VBQ0ksdUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0FDR0o7O0FERkk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUNJUjs7QURGSTtFQUNJLGlCQUFBO0FDSVI7O0FEQUE7RUFDSSwrQkFBQTtBQ0dKOztBRERBO0VBQ0ksK0JBQUE7RUFDQSwwQkFBQTtBQ0lKOztBREZBO0VBQ0ksMkJBQUE7QUNLSjs7QURIQTtFQUNJLGVBQUE7RUFBZ0IsV0FBQTtFQUFZLGtCQUFBO0VBQW1CLFdBQUE7RUFBWSxRQUFBO0FDVS9EOztBRE5BO0VBQ0c7SUFDQyxRQUFBO0VDU0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLXN0YXRzL29yZGVyLXN0YXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4XG59XG4uY2FyZC1tYWluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgICAgIFxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgYm90dG9tOiAwcHg7IFxuICAgIHRvcDogMTAwcHg7IFxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xufVxuLnRvcHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICB9XG4gICAgaW9uLXRleHR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxufVxuLmFjdGl2ZXtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLnBpY2t7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5yZWFkeXsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2YjdmMTNkO1xufVxuLm9wZW5PcmRlcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7Ym90dG9tOiAwcHg7b3ZlcmZsb3cteTogc2Nyb2xsO3dpZHRoOiAxMDAlO3RvcDogMzUlO1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgIC5vcGVuT3JkZXJ7XG4gICAgdG9wOiAzNSU7XG4gICB9XG4gIH0iLCJpb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAyMHB4IDEwcHg7XG59XG5cbi5jYXJkLW1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICB0b3A6IDEwMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi50b3Age1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udG9wIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuLnRvcCBpb24tdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnBpY2sge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnJlYWR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2YjdmMTNkO1xufVxuXG4ub3Blbk9yZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAzNSU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLm9wZW5PcmRlciB7XG4gICAgdG9wOiAzNSU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/order-stats/order-stats.page.ts":
/*!*************************************************!*\
  !*** ./src/app/order-stats/order-stats.page.ts ***!
  \*************************************************/
/*! exports provided: OrderStatsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatsPage", function() { return OrderStatsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_preview_order_preview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../order-preview/order-preview.page */ "./src/app/order-preview/order-preview.page.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");








var OrderStatsPage = /** @class */ (function () {
    function OrderStatsPage(service, navCtrl, db, modal, call) {
        var _this = this;
        this.service = service;
        this.navCtrl = navCtrl;
        this.db = db;
        this.modal = modal;
        this.call = call;
        // variables
        this.top = 'past';
        this.open = false;
        this.past = true;
        this.ready = true;
        this.canceled = false;
        this.myOpenOrders = [];
        this.CanceledOrders = [];
        this.ReadyOrders = [];
        this.OpenOrderForFilter = [];
        this.TotalPastOrders = 0;
        this.TotalOpenOrders = 0;
        this.loader = true;
        this.date = new Date();
        this.service.hiddenTabs = true;
        this.customPickerOptions = {
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Clicked Log. Do not Dismiss.');
                        return false;
                    }
                },
                {
                    text: 'Done',
                    handler: function (res) {
                        var newDate = Number(res.day.text);
                        console.log("=====BUTTON=====");
                        console.log(newDate);
                        _this.myOpenOrders = _this.filterByDate(newDate);
                    }
                }
            ]
        };
    }
    OrderStatsPage.prototype.ionViewWillEnter = function () {
        this.shopname = this.db.getshopname();
        console.log(this.shopname);
        this.getOpenOrders();
        // this.getcanceledOrders();
        // this.getreadyOders();
    };
    OrderStatsPage.prototype.ngOnInit = function () {
    };
    OrderStatsPage.prototype.home = function () {
        this.service.hiddenTabs = false;
        this.navCtrl.navigate(['tabs/dashboard']);
    };
    OrderStatsPage.prototype.DaysegmentChanged = function (event) {
        // console.log(event.detail.value);
        switch (event.detail.value) {
            case 'Today':
                this.filterOpenOders(event.detail.value);
                console.log(event.detail.value);
                break;
            case 'Mon':
                this.filterOpenOders(event.detail.value);
                console.log(event.detail.value);
                break;
            case 'Tue':
                this.filterOpenOders(event.detail.value);
                console.log(event.detail.value);
                break;
            case 'Wed':
                this.filterOpenOders(event.detail.value);
                console.log(event.detail.value);
                break;
            case 'Thur':
                this.filterOpenOders(event.detail.value);
                console.log(event.detail.value);
                break;
            case 'Fri':
                this.filterOpenOders(event.detail.value);
                console.log(event.detail.value);
                break;
            case 'Sat':
                this.filterOpenOders(event.detail.value);
                console.log(event.detail.value);
                break;
            case 'Sun':
                this.filterOpenOders(event.detail.value);
                console.log(event.detail.value);
                break;
            default:
                break;
        }
    };
    OrderStatsPage.prototype.TopsegmentChanged = function (event) {
        // console.log(event);
        switch (event.detail.value) {
            case 'canceled':
                this.past = true;
                this.ready = false;
                this.canceled = true;
                console.log(event.detail.value);
                break;
            case 'ready':
                this.past = true;
                this.ready = true;
                this.canceled = false;
                console.log(event.detail.value);
                break;
            default:
                break;
        }
    };
    OrderStatsPage.prototype.openOrders = function () {
        if (this.top !== 'open') {
            this.top = 'open';
            this.open = true;
            this.past = false;
            this.canceled = false;
            this.ready = false;
            this.filterOpenOders('Today');
        }
    };
    OrderStatsPage.prototype.pastOrders = function () {
        if (this.top !== 'past') {
            this.top = 'past';
            this.open = false;
            this.past = true;
            this.ready = true;
        }
    };
    // get open orders
    OrderStatsPage.prototype.getOpenOrders = function () {
        var _this = this;
        console.log("=======TIMESTAMP====");
        console.log(this.date);
        this.service.getReadyOrders(this.shopname).valueChanges().subscribe(function (res) {
            _this.myOpenOrders = res;
            _this.OpenOrderForFilter = res;
            _this.TotalOpenOrders = _this.myOpenOrders.length;
            _this.loader = false;
            _this.formatDate();
            _this.myOpenOrders = _this.filterByDate(_this.date.getDate());
            console.log("=========FILTERING ==========");
            console.log(_this.myOpenOrders);
            console.log('open orders' + _this.myOpenOrders);
        });
    };
    OrderStatsPage.prototype.formatDate = function () {
        this.OpenOrderForFilter.forEach(function (item) {
            item.Date = item.Date.toDate().getDate();
        });
        console.log("=== MY OPEN ORDER =====");
        console.log(this.OpenOrderForFilter);
    };
    OrderStatsPage.prototype.filterByDate = function (date) {
        return this.OpenOrderForFilter.filter(function (item) {
            console.log("=== CHECK DATES =====");
            console.log(item.Date);
            console.log(date);
            return item.Date == date;
        });
    };
    // get canceled orders
    OrderStatsPage.prototype.getcanceledOrders = function () {
        var _this = this;
        this.service.getCanceledOrders(this.shopname).valueChanges().subscribe(function (res) {
            _this.CanceledOrders = res;
            _this.loader = false;
            console.log('canceled orders' + _this.CanceledOrders);
        });
    };
    // get Ready orders
    OrderStatsPage.prototype.getreadyOders = function () {
        var _this = this;
        this.service.getReadyOrders(this.shopname).valueChanges().subscribe(function (res) {
            _this.ReadyOrders = res;
            console.log("========DATE HERE======");
            console.log(res);
            _this.loader = false;
            _this.TotalPastOrders = _this.ReadyOrders.length + _this.CanceledOrders.length;
            console.log('ready orders' + _this.ReadyOrders);
        });
    };
    // filter open orders by day of pick up
    OrderStatsPage.prototype.filterOpenOders = function (event) {
        var unfiltered = this.OpenOrderForFilter;
        var filtered = [];
        // tslint:disable-next-line: no-shadowed-variable
        unfiltered.forEach(function (element) {
            if (element.pickDay === event) {
                filtered.push(element);
            }
            else {
                return;
            }
            return;
        });
        this.loader = false;
        this.myOpenOrders = filtered;
    };
    OrderStatsPage.prototype.showMore = function (item) {
        var _this = this;
        item.show = true;
        this.service.getNumber(item.userID).subscribe(function (res) {
            _this.CustomerNumber = res.phone;
            console.log("number", _this.CustomerNumber);
        });
    };
    OrderStatsPage.prototype.showLess = function (item) {
        item.show = false;
        console.log('less');
    };
    OrderStatsPage.prototype.viewOrder = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mod;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item.phone = this.CustomerNumber;
                        return [4 /*yield*/, this.modal.create({
                                component: _order_preview_order_preview_page__WEBPACK_IMPORTED_MODULE_6__["OrderPreviewPage"],
                                componentProps: {
                                    data: item
                                }
                            })];
                    case 1:
                        mod = _a.sent();
                        console.log("VIEW MORE");
                        console.log(item);
                        console.log("VIEW MORE");
                        return [4 /*yield*/, mod.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderStatsPage.prototype.callCustomer = function () {
        var num = this.CustomerNumber.toString();
        this.call.callNumber(num, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    OrderStatsPage.ctorParameters = function () { return [
        { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"] }
    ]; };
    OrderStatsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-stats',
            template: __webpack_require__(/*! raw-loader!./order-stats.page.html */ "./node_modules/raw-loader/index.js!./src/app/order-stats/order-stats.page.html"),
            styles: [__webpack_require__(/*! ./order-stats.page.scss */ "./src/app/order-stats/order-stats.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"]])
    ], OrderStatsPage);
    return OrderStatsPage;
}());



/***/ })

}]);
//# sourceMappingURL=order-stats-order-stats-module-es5.js.map