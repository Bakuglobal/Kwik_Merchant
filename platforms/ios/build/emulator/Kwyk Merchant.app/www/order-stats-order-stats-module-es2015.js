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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_stats_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-stats.page */ "./src/app/order-stats/order-stats.page.ts");







const routes = [
    {
        path: '',
        component: _order_stats_page__WEBPACK_IMPORTED_MODULE_6__["OrderStatsPage"]
    }
];
let OrderStatsPageModule = class OrderStatsPageModule {
};
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



/***/ }),

/***/ "./src/app/order-stats/order-stats.page.scss":
/*!***************************************************!*\
  !*** ./src/app/order-stats/order-stats.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  border-radius: 15px;\n  text-align: center;\n  padding: 10px 20px 10px;\n}\n\n.card-main {\n  background-color: white;\n  color: var(--ion-color-medium);\n  background-color: white;\n  border-radius: 20px 20px 0px 0px;\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n  top: 100px;\n  overflow-y: scroll;\n}\n\n.top {\n  text-align: center;\n}\n\n.top ion-label {\n  font-weight: bolder;\n  font-size: 2em;\n}\n\n.top ion-text {\n  font-weight: bold;\n}\n\n.active {\n  color: var(--ion-color-primary);\n}\n\n.pick {\n  color: var(--ion-color-success);\n  text-transform: capitalize;\n}\n\n.ready {\n  background-color: #06b7f13d;\n}\n\n.openOrder {\n  position: fixed;\n  bottom: 0px;\n  overflow-y: scroll;\n  width: 100%;\n  top: 35%;\n}\n\n.activeMonth {\n  background-color: var(--ion-color-dark) !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .openOrder {\n    top: 35%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGxhcmFzc2VtbWF4d2VsbC9EZXNrdG9wL0t3aWtfTWVyY2hhbnQvc3JjL2FwcC9vcmRlci1zdGF0cy9vcmRlci1zdGF0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL29yZGVyLXN0YXRzL29yZGVyLXN0YXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0NKOztBRENBO0VBQ0ksdUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0FDR0o7O0FERkk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUNJUjs7QURGSTtFQUNJLGlCQUFBO0FDSVI7O0FEQUE7RUFDSSwrQkFBQTtBQ0dKOztBRERBO0VBQ0ksK0JBQUE7RUFDQSwwQkFBQTtBQ0lKOztBREZBO0VBQ0ksMkJBQUE7QUNLSjs7QURIQTtFQUNJLGVBQUE7RUFBZ0IsV0FBQTtFQUFZLGtCQUFBO0VBQW1CLFdBQUE7RUFBWSxRQUFBO0FDVS9EOztBRFBBO0VBQ0ksa0RBQUE7QUNVSjs7QUROQTtFQUNHO0lBQ0MsUUFBQTtFQ1NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9vcmRlci1zdGF0cy9vcmRlci1zdGF0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweFxufVxuLmNhcmQtbWFpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICAgICBcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgIGJvdHRvbTogMHB4OyBcbiAgICB0b3A6IDEwMHB4OyBcbiAgICBvdmVyZmxvdy15OnNjcm9sbDtcbn1cbi50b3B7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgfVxuICAgIGlvbi10ZXh0e1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbn1cbi5hY3RpdmV7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5waWNre1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ucmVhZHl7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNmI3ZjEzZDtcbn1cbi5vcGVuT3JkZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO2JvdHRvbTogMHB4O292ZXJmbG93LXk6IHNjcm9sbDt3aWR0aDogMTAwJTt0b3A6IDM1JTtcbn1cblxuLmFjdGl2ZU1vbnRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaykhaW1wb3J0YW50O1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgIC5vcGVuT3JkZXJ7XG4gICAgdG9wOiAzNSU7XG4gICB9XG4gIH0iLCJpb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAyMHB4IDEwcHg7XG59XG5cbi5jYXJkLW1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICB0b3A6IDEwMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi50b3Age1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udG9wIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuLnRvcCBpb24tdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnBpY2sge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnJlYWR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2YjdmMTNkO1xufVxuXG4ub3Blbk9yZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAzNSU7XG59XG5cbi5hY3RpdmVNb250aCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5vcGVuT3JkZXIge1xuICAgIHRvcDogMzUlO1xuICB9XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_preview_order_preview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../order-preview/order-preview.page */ "./src/app/order-preview/order-preview.page.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");








let OrderStatsPage = class OrderStatsPage {
    constructor(service, navCtrl, db, modal, call) {
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
            "Jul", "Aug", "Sep", "Oct", "Nov", "December"
        ];
        this.last3Months = [];
        this.service.hiddenTabs = true;
    }
    ionViewWillEnter() {
        this.shopname = this.db.getshopname();
        // this.shopname = "Kakila Organic";
        // console.log("====SHOP NAME ======");
        console.log(this.shopname);
        this.getLast3Months();
        this.getDeliveredOrders();
        this.getPickAndCollectOrders();
    }
    ngOnInit() { }
    // GET THE LAST 3 MONTHS
    getLast3Months() {
        this.last3Months = [];
        let today = new Date();
        for (let i = 0; i < 3; i++) {
            let month = this.monthNames[(today.getMonth() - (i + 1))];
            let monthObj = { month: month };
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
    }
    // GET DELIVERED ORDERS
    getDeliveredOrders() {
        this.Deliveredcount = 0;
        this.monthDeliveriesCount = 0;
        this.service.getDeliveriesOrders(this.shopname).valueChanges().subscribe(res => {
            console.log("======= DELIVERIES ORDERS ====");
            this.deliveredOrders = res.filter(item => {
                console.log("DATE => " + this.date.getMonth());
                let final_data = item.Date.toDate().getMonth() === this.date.getMonth() - 1;
                if (final_data) {
                    this.Deliveredcount++;
                    this.monthDeliveriesCount++;
                }
                return final_data;
            });
        });
        this.loader = false;
    }
    // GET PICK AND COLLECT ORDERS
    getPickAndCollectOrders() {
        this.PickAndCollectPayCount = 0;
        this.service.getPickAndCollectOrders(this.shopname).valueChanges().subscribe(res => {
            console.log("======= PICK AND COLLECT ORDERS ====");
            this.pickAndCollectOrders = res.filter(item => {
                console.log("DATE => " + this.date.getMonth());
                let final_data = item.Date.toDate().getMonth() === this.date.getMonth() - 1;
                if (final_data) {
                    this.PickAndCollectPayCount++;
                }
                return final_data;
            });
        });
        this.loader = false;
    }
    // FILTER DERLIVERED ORDERS BY MONTH
    filterByMonth(month, i) {
        // this.last3Months.reverse();
        this.last3Months.forEach((newMonth, index) => {
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
        let monthNumber = this.monthNames.indexOf(month);
        console.log(monthNumber);
        // GET DELIVERIES BY MONTH
        this.service.getDeliveriesOrders(this.shopname).valueChanges().subscribe(res => {
            this.deliveredOrders = res.filter(item => {
                let final_deliveries_data = item.Date.toDate().getMonth() === monthNumber;
                if (final_deliveries_data) {
                    this.Deliveredcount++;
                }
                return final_deliveries_data;
            });
        });
        // GET PICK AND COLLECT BY MONTH
        this.service.getPickAndCollectOrders(this.shopname).valueChanges().subscribe(res => {
            this.pickAndCollectOrders = res.filter(item => {
                let final_pick_and_collect_data = item.Date.toDate().getMonth() === monthNumber;
                if (final_pick_and_collect_data) {
                    this.PickAndCollectPayCount++;
                }
                return final_pick_and_collect_data;
            });
        });
        this.loader = false;
    }
    getMonthDeliveriesCount(month) {
        this.monthDeliveriesCount = 0;
        console.log("=== MONTH DELIVERIES COUNT YES ===");
        let monthNumber = this.monthNames.indexOf(month);
        console.log(monthNumber);
        return this.monthDeliveriesCount;
    }
    changeCategory(event) {
        if (event.detail.value === 'delivery') {
            this.active = "Deliveries";
        }
        if (event.detail.value === "pick&pay") {
            this.active = "PickPay";
        }
    }
    home() {
        this.service.hiddenTabs = false;
        this.navCtrl.navigate(['tabs/dashboard']);
    }
    showMore(item) {
        item.show = true;
        this.service.getNumber(item.userID).subscribe(res => {
            this.CustomerNumber = res.phone;
            console.log("number", this.CustomerNumber);
        });
    }
    showLess(item) {
        item.show = false;
        console.log('less');
    }
    viewOrder(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("====== VIEW MORE =====");
            console.log(item);
            // item.phone = this.CustomerNumber ;
            const mod = yield this.modal.create({
                component: _order_preview_order_preview_page__WEBPACK_IMPORTED_MODULE_6__["OrderPreviewPage"],
                componentProps: item
            });
            yield mod.present();
        });
    }
    callCustomer() {
        let num = this.CustomerNumber.toString();
        this.call.callNumber(num, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
};
OrderStatsPage.ctorParameters = () => [
    { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"] }
];
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



/***/ })

}]);
//# sourceMappingURL=order-stats-order-stats-module-es2015.js.map