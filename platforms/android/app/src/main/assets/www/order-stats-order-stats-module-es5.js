(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-stats-order-stats-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/order-stats/order-stats.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order-stats/order-stats.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content color=\"primary\" style=\"background-color: var(--ion-color-primary);\">\n\n    <ion-toolbar color=\"primary\" style=\"margin-top: 10px;\">\n        <ion-buttons slot=\"start\">\n            <ion-icon style=\"width: 20px; height: 20px; margin-left: 5px;\" name=\"arrow-back\" (click)=\"home()\">\n            </ion-icon>\n        </ion-buttons>\n        <ion-title text-center style=\"margin-right: 10px;\">\n            Order for the past three months\n        </ion-title>\n    </ion-toolbar>\n\n\n\n\n    <div class=\"card-main\">\n        <ion-row style=\"margin-top: 0px;\">\n            <ion-col [ngClass]=\"{activeMonth: month.status == 'active'}\" *ngFor=\"let month of last3Months; let i = index\" style=\"height: 70px; background-color: var(--ion-color-primary); margin: 15px; border-radius: 25px;\" (click)=\"filterByMonth(month.month, i)\">\n                <div style=\"font-size: 12px; text-align: center; padding-top: 10px; margin-top: 15px;\">\n                    {{month.month}}\n                </div>\n                <!-- <div style=\"font-size: 12px; text-align: center; padding-top: 10px;\">\n                    Total orders\n                </div>\n                <div style=\"font-size: 12px; text-align: center; padding-top: 10px;\">\n                    <div *ngIf=\"active === 'Deliveries'\">\n                        {{ monthDeliveriesCount }}\n                    </div>\n                    <div *ngIf=\"active === 'PickPay'\">\n                        {{ monthPickAndCollectCount }}\n                    </div>\n                </div> -->\n            </ion-col>\n        </ion-row>\n\n        \n        \n        <ion-segment (ionChange)=\"changeCategory($event)\" style=\"background-color: white; padding-top: 7px;\">\n            <ion-segment-button value=\"delivery\" checked>\n                <ion-badge class=\"ion-float-right\">{{Deliveredcount}}</ion-badge>\n                <ion-label style=\"font-size: 12px; margin-top: 10px; margin-bottom: 2px;\">Deliveries</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"pick&pay\" >\n                <ion-badge class=\"ion-float-right\">{{PickAndCollectPayCount}}</ion-badge>\n                <ion-label style=\"font-size: 12px; margin-top: 10px; margin-bottom: 2px;\">Pay & Collect</ion-label>\n            </ion-segment-button>\n        </ion-segment>\n\n        <div *ngIf=\"loader\" text-center>\n            <ion-spinner class=\"loader\" name=\"lines\" color=\"primary\"></ion-spinner>\n        </div>\n\n\n        <div *ngIf=\"active === 'Deliveries'\" style=\"padding-top: -10px; margin-bottom: 35px;margin-bottom: 60px;\">\n            <div *ngIf=\"!loader\">\n                \n                <div *ngIf=\"deliveredOrders.length == 0\" style=\"padding-top: 50px; text-align: center;\">\n                    <ion-label style=\"font-size: 13px; color: #737373;\">No Past Orders for this month</ion-label>\n                </div> <br>\n\n                <ion-card padding style=\"background-color: white;\" *ngFor=\"let item of deliveredOrders\" (click)=\"viewOrder(item)\">\n                    <div *ngIf=\"!item.show\">\n                        <ion-icon name=\"funnel\" style=\"float: left;\" color=\"primary\">\n                        </ion-icon>&nbsp;\n                        <ion-label style=\"float: left; margin-left: 10px; color: var(--ion-color-danger);\" *ngIf=\"item.status == 'canceled'\">Canceled</ion-label>\n                        <ion-label style=\"float: left; margin-left: 10px;\" color=\"success\" *ngIf=\"item.status == 'open'\">Open</ion-label>\n                        <ion-label style=\"float: left; margin-left: 10px;\" color=\"success\" *ngIf=\"item.Complete == 'True'\">Complete</ion-label>\n                        <ion-label style=\"float: left; margin-left: 10px;\" color=\"success\" *ngIf=\"item.status == 'Ready'\">Ready</ion-label>\n                        <ion-label style=\"float: right;\" color=\"primary\">{{item.OrderID}}</ion-label><br><br>\n                        <div style=\"text-align:start;\">\n                            Order for <ion-label *ngFor=\"let item of item.products\">{{item.product}}, </ion-label> ...\n                        </div>\n                        <span style=\"float: left;margin-top: 10px;\">\n                            {{item.username}}\n                        </span>\n                        <span style=\"float: right;margin-top: 10px;\">\n                            {{item.Date.toDate()  | date: 'dd/MM/yyyy' }}\n                        </span>\n                        <span style=\"float: right;bottom:0;margin-top: 10px;\">\n                            <span class=\"pick\" *ngIf=\"item.Delivery == 'Deliver it to me'\">Delivery To :\n                                {{item.Location}} </span>\n                            <span class=\"pick\" *ngIf=\"item.Delivery == 'I will pick it'\">Pick up :\n                                {{item.pickHour}}:{{item.pickMins}}\n                                {{item.pickDay}}</span>\n                        </span>\n                    </div>\n                    <div *ngIf=\"item.show\">\n                        <ion-card-title text-center style=\"font-size: 15px; color: var(--ion-color-primary);\">\n                            <ion-icon name=\"arrow-dropup\" color=\"primary\" style=\"float: left;\" (click)=\"showLess(item)\">\n                            </ion-icon>\n                            {{item.OrderID}}<br>{{item.username}}\n                            <ion-icon name=\"call\" color=\"success\" style=\"float: right;\" (click)=\"callCustomer()\">\n                            </ion-icon>\n                        </ion-card-title>\n                        <ion-card-content>\n                            <ion-row *ngFor=\"let item of item.products\">\n                                <ion-col>\n                                    {{item.product}}\n                                </ion-col>\n                                <ion-col>\n                                    {{item.currentprice}}\n                                </ion-col>\n                                <ion-col>{{item.quantity}}</ion-col>\n                            </ion-row>\n                            <ion-row>\n                                <ion-col>\n                                    <span\n                                        style=\"float: left;bottom:0;margin-top: 10px;color:var(--ion-color-primary);font-weight: bold;\"\n                                        (click)=\"viewOrder(item)\">\n                                        <ion-label>View more</ion-label>\n                                    </span>\n                                    <span style=\"float: right;bottom:0;margin-top: 10px;color:var(--ion-color-primary)\">\n                                        <span class=\"pick\">{{item.Date.toDate()  | date: 'dd/MM/yyyy' }}</span>\n                                    </span>\n\n                                </ion-col>\n                            </ion-row>\n                        </ion-card-content>\n                    </div>\n                </ion-card>\n            </div>\n        </div>\n\n        <div *ngIf=\"active === 'PickPay'\" style=\"padding-top: -10px; margin-bottom: 60px;\">\n            <div *ngIf=\"!loader\">\n                \n                <div *ngIf=\"pickAndCollectOrders.length == 0\" style=\"padding-top: 50px; text-align: center;\">\n                    <ion-label style=\"font-size: 13px; color: #737373;\">No Past Orders for this month</ion-label>\n                </div> <br>\n\n                <ion-card padding style=\"background-color: white;\" *ngFor=\"let item of pickAndCollectOrders\" (click)=\"viewOrder(item)\">\n                    <div *ngIf=\"!item.show\">\n                        <ion-icon name=\"funnel\" style=\"float: left;\" color=\"primary\">\n                        </ion-icon>&nbsp;\n                        <ion-label style=\"float: left; margin-left: 10px; color: var(--ion-color-danger);\" *ngIf=\"item.status == 'canceled'\">Canceled</ion-label>\n                        <ion-label style=\"float: left; margin-left: 10px;\" color=\"success\" *ngIf=\"item.status == 'open'\">Open</ion-label>\n                        <ion-label style=\"float: left; margin-left: 10px;\" color=\"success\" *ngIf=\"item.Complete == 'True'\">Complete</ion-label>\n                        <ion-label style=\"float: left; margin-left: 10px;\" color=\"success\" *ngIf=\"item.status == 'Ready'\">Ready</ion-label>\n                        <ion-label style=\"float: right;\" color=\"primary\">{{item.OrderID}}</ion-label><br><br>\n                        <div style=\"text-align:start;\">\n                            Order for <ion-label *ngFor=\"let item of item.products\">{{item.product}}, </ion-label> ...\n                        </div>\n                        <span style=\"float: left;margin-top: 10px;\">\n                            {{item.username}}\n                        </span>\n                        <span style=\"float: right;margin-top: 10px;\">\n                            {{item.Date.toDate()  | date: 'dd/MM/yyyy' }}\n                        </span>\n                        <span style=\"float: right;bottom:0;margin-top: 10px;\">\n                            <span class=\"pick\" *ngIf=\"item.Delivery == 'Deliver it to me'\">Delivery To :\n                                {{item.Location}} </span>\n                            <span class=\"pick\" *ngIf=\"item.Delivery == 'I will pick it'\">Pick up :\n                                {{item.pickHour}}:{{item.pickMins}}\n                                {{item.pickDay}}</span>\n                        </span>\n                    </div>\n                    <div *ngIf=\"item.show\">\n                        <ion-card-title text-center style=\"font-size: 15px; color: var(--ion-color-primary);\">\n                            <ion-icon name=\"arrow-dropup\" color=\"primary\" style=\"float: left;\" (click)=\"showLess(item)\">\n                            </ion-icon>\n                            {{item.OrderID}}<br>{{item.username}}\n                            <ion-icon name=\"call\" color=\"success\" style=\"float: right;\" (click)=\"callCustomer()\">\n                            </ion-icon>\n                        </ion-card-title>\n                        <ion-card-content>\n                            <ion-row *ngFor=\"let item of item.products\">\n                                <ion-col>\n                                    {{item.product}}\n                                </ion-col>\n                                <ion-col>\n                                    {{item.currentprice}}\n                                </ion-col>\n                                <ion-col>{{item.quantity}}</ion-col>\n                            </ion-row>\n                            <ion-row>\n                                <ion-col>\n                                    <span\n                                        style=\"float: left;bottom:0;margin-top: 10px;color:var(--ion-color-primary);font-weight: bold;\"\n                                        (click)=\"viewOrder(item)\">\n                                        <ion-label>View more</ion-label>\n                                    </span>\n                                    <span style=\"float: right;bottom:0;margin-top: 10px;color:var(--ion-color-primary)\">\n                                        <span class=\"pick\">{{item.Date.toDate()  | date: 'dd/MM/yyyy' }}</span>\n                                    </span>\n\n                                </ion-col>\n                            </ion-row>\n                        </ion-card-content>\n                    </div>\n                </ion-card>\n            </div>\n        </div>\n\n    </div>\n\n\n\n\n</ion-content>"

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

module.exports = "ion-card {\n  border-radius: 15px;\n  text-align: center;\n  padding: 10px 20px 10px;\n}\n\n.card-main {\n  background-color: white;\n  color: var(--ion-color-medium);\n  background-color: white;\n  border-radius: 20px 20px 0px 0px;\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n  top: 100px;\n  overflow-y: scroll;\n}\n\n.top {\n  text-align: center;\n}\n\n.top ion-label {\n  font-weight: bolder;\n  font-size: 2em;\n}\n\n.top ion-text {\n  font-weight: bold;\n}\n\n.active {\n  color: var(--ion-color-primary);\n}\n\n.pick {\n  color: var(--ion-color-success);\n  text-transform: capitalize;\n}\n\n.ready {\n  background-color: #06b7f13d;\n}\n\n.openOrder {\n  position: fixed;\n  bottom: 0px;\n  overflow-y: scroll;\n  width: 100%;\n  top: 35%;\n}\n\n.activeMonth {\n  background-color: var(--ion-color-dark) !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .openOrder {\n    top: 35%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGxhcmFzc2VtbWF4d2VsbC9EZXNrdG9wL05ld21hcmsvS3dpa19NZXJjaGFudC9zcmMvYXBwL29yZGVyLXN0YXRzL29yZGVyLXN0YXRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb3JkZXItc3RhdHMvb3JkZXItc3RhdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7QUNHSjs7QURGSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ0lSOztBREZJO0VBQ0ksaUJBQUE7QUNJUjs7QURBQTtFQUNJLCtCQUFBO0FDR0o7O0FEREE7RUFDSSwrQkFBQTtFQUNBLDBCQUFBO0FDSUo7O0FERkE7RUFDSSwyQkFBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtFQUFnQixXQUFBO0VBQVksa0JBQUE7RUFBbUIsV0FBQTtFQUFZLFFBQUE7QUNVL0Q7O0FEUEE7RUFDSSxrREFBQTtBQ1VKOztBRE5BO0VBQ0c7SUFDQyxRQUFBO0VDU0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLXN0YXRzL29yZGVyLXN0YXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4XG59XG4uY2FyZC1tYWluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgICAgIFxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgYm90dG9tOiAwcHg7IFxuICAgIHRvcDogMTAwcHg7IFxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xufVxuLnRvcHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICB9XG4gICAgaW9uLXRleHR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxufVxuLmFjdGl2ZXtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLnBpY2t7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5yZWFkeXsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2YjdmMTNkO1xufVxuLm9wZW5PcmRlcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7Ym90dG9tOiAwcHg7b3ZlcmZsb3cteTogc2Nyb2xsO3dpZHRoOiAxMDAlO3RvcDogMzUlO1xufVxuXG4uYWN0aXZlTW9udGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKSFpbXBvcnRhbnQ7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAgLm9wZW5PcmRlcntcbiAgICB0b3A6IDM1JTtcbiAgIH1cbiAgfSIsImlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweDtcbn1cblxuLmNhcmQtbWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHRvcDogMTAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnRvcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50b3AgaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAyZW07XG59XG4udG9wIGlvbi10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ucGljayB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ucmVhZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDZiN2YxM2Q7XG59XG5cbi5vcGVuT3JkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDM1JTtcbn1cblxuLmFjdGl2ZU1vbnRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLm9wZW5PcmRlciB7XG4gICAgdG9wOiAzNSU7XG4gIH1cbn0iXX0= */"

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
        this.loader = true;
        this.date = new Date();
        this.active = "Deliveries";
        this.Deliveredcount = 0;
        this.PickAndCollectPayCount = 0;
        this.deliveredOrders = [];
        this.pickAndCollectOrders = [];
        this.monthDeliveriesCount = 0;
        this.monthPickAndCollectCount = 0;
        this.monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        this.last3Months = [];
        this.service.hiddenTabs = true;
    }
    OrderStatsPage.prototype.ionViewWillEnter = function () {
        this.shopname = this.db.getshopname();
        // this.shopname = "Kakila Organic";
        // console.log("====SHOP NAME ======");
        console.log(this.shopname);
        this.getLast3Months();
        this.getDeliveredOrders();
        this.getPickAndCollectOrders();
    };
    OrderStatsPage.prototype.ngOnInit = function () { };
    // GET THE LAST 3 MONTHS
    OrderStatsPage.prototype.getLast3Months = function () {
        this.last3Months = [];
        var today = new Date();
        for (var i = 0; i < 3; i++) {
            var month = this.monthNames[(today.getMonth() - (i + 1))];
            var monthObj = { month: month };
            if (i == 0) {
                monthObj.status = 'active';
            }
            else {
                monthObj.status = 'inactive';
            }
            this.last3Months.push(monthObj);
        }
        console.log("======= LAST THREE MONTHS ====");
        console.log(this.last3Months);
    };
    // GET DELIVERED ORDERS
    OrderStatsPage.prototype.getDeliveredOrders = function () {
        var _this = this;
        this.Deliveredcount = 0;
        this.monthDeliveriesCount = 0;
        this.service.getDeliveriesOrders(this.shopname).valueChanges().subscribe(function (res) {
            console.log("======= DELIVERIES ORDERS ====");
            _this.deliveredOrders = res.filter(function (item) {
                console.log("DATE => " + _this.date.getMonth());
                var final_data = item.Date.toDate().getMonth() === _this.date.getMonth() - 1;
                if (final_data) {
                    _this.Deliveredcount++;
                    _this.monthDeliveriesCount++;
                }
                return final_data;
            });
        });
        this.loader = false;
    };
    // GET PICK AND COLLECT ORDERS
    OrderStatsPage.prototype.getPickAndCollectOrders = function () {
        var _this = this;
        this.PickAndCollectPayCount = 0;
        this.service.getPickAndCollectOrders(this.shopname).valueChanges().subscribe(function (res) {
            console.log("======= PICK AND COLLECT ORDERS ====");
            _this.pickAndCollectOrders = res.filter(function (item) {
                console.log("DATE => " + _this.date.getMonth());
                var final_data = item.Date.toDate().getMonth() === _this.date.getMonth() - 1;
                if (final_data) {
                    _this.PickAndCollectPayCount++;
                }
                return final_data;
            });
        });
        this.loader = false;
    };
    // FILTER DERLIVERED ORDERS BY MONTH
    OrderStatsPage.prototype.filterByMonth = function (month, i) {
        var _this = this;
        // this.last3Months.reverse();
        this.last3Months.forEach(function (newMonth, index) {
            if (i == index) {
                newMonth.status = 'active';
            }
            else {
                newMonth.status = 'inactive';
            }
        });
        this.Deliveredcount = 0;
        this.PickAndCollectPayCount = 0;
        console.log("==== MONTH ====");
        console.log(month);
        var monthNumber = this.monthNames.indexOf(month);
        console.log(monthNumber);
        // GET DELIVERIES BY MONTH
        this.service.getDeliveriesOrders(this.shopname).valueChanges().subscribe(function (res) {
            _this.deliveredOrders = res.filter(function (item) {
                var final_deliveries_data = item.Date.toDate().getMonth() === monthNumber;
                if (final_deliveries_data) {
                    _this.Deliveredcount++;
                }
                return final_deliveries_data;
            });
        });
        // GET PICK AND COLLECT BY MONTH
        this.service.getPickAndCollectOrders(this.shopname).valueChanges().subscribe(function (res) {
            _this.pickAndCollectOrders = res.filter(function (item) {
                var final_pick_and_collect_data = item.Date.toDate().getMonth() === monthNumber;
                if (final_pick_and_collect_data) {
                    _this.PickAndCollectPayCount++;
                }
                return final_pick_and_collect_data;
            });
        });
        this.loader = false;
    };
    OrderStatsPage.prototype.getMonthDeliveriesCount = function (month) {
        this.monthDeliveriesCount = 0;
        console.log("=== MONTH DELIVERIES COUNT YES ===");
        var monthNumber = this.monthNames.indexOf(month);
        console.log(monthNumber);
        return this.monthDeliveriesCount;
    };
    OrderStatsPage.prototype.changeCategory = function (event) {
        if (event.detail.value === 'delivery') {
            this.active = "Deliveries";
        }
        if (event.detail.value === "pick&pay") {
            this.active = "PickPay";
        }
    };
    OrderStatsPage.prototype.home = function () {
        this.service.hiddenTabs = false;
        this.navCtrl.navigate(['tabs/dashboard']);
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
                        console.log("====== VIEW MORE =====");
                        console.log(item);
                        return [4 /*yield*/, this.modal.create({
                                component: _order_preview_order_preview_page__WEBPACK_IMPORTED_MODULE_6__["OrderPreviewPage"],
                                componentProps: item
                            })];
                    case 1:
                        mod = _a.sent();
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