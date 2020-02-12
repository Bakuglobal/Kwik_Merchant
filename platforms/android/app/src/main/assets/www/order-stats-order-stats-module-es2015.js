(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-stats-order-stats-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/order-stats/order-stats.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order-stats/order-stats.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content color=\"light\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" padding>\n      <ion-icon color=\"\" name=\"home\" (click)=\"home()\"></ion-icon>\n    </ion-buttons>\n    <ion-title color=\"\">Order Summary</ion-title>\n  </ion-toolbar>\n\n  <ion-card style=\"background-color: white;\">\n    <ion-row>\n      <ion-col class=\"top\" [ngClass]=\"{'active': top == 'past'}\" (click)=\"pastOrders()\">\n        <ion-label>{{TotalPastOrders}}</ion-label><br>\n        <ion-text>Past Orders</ion-text>\n      </ion-col>\n      <ion-col class=\"top\" [ngClass]=\"{'active': top == 'open'}\" (click)=\"openOrders()\">\n        <ion-label>{{TotalOpenOrders}}</ion-label><br>\n        <ion-text>Open Orders</ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-segment (ionChange)=\"DaysegmentChanged($event)\" scrollable *ngIf=\"open\" style=\"background-color: white;\">\n    <ion-segment-button value=\"Today\" checked>\n      <ion-label>Today</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Mon\">\n      <ion-label>Mon</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Tue\">\n      <ion-label>Tue</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Wed\">\n      <ion-label>Wed</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Thur\">\n      <ion-label>Thur</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Fri\">\n      <ion-label>Fri</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Sat\">\n      <ion-label>Sat</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"Sun\">\n      <ion-label>Sun</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-segment (ionChange)=\"TopsegmentChanged($event)\" *ngIf=\"past\" style=\"background-color: white;\">\n    <ion-segment-button value=\"canceled\">\n      <ion-label>Canceled Orders</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"ready\" checked>\n      <ion-label>Completed Orders</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <div *ngIf=\"ready;open\">\n    <div *ngIf=\"loader\" text-center style=\"padding-top: 50px;text-align: center;\">\n      <ion-spinner class=\"loader\" name=\"lines\" color=\"primary\"></ion-spinner>\n    </div>\n    <div *ngIf=\"ReadyOrders.length == 0\" style=\"padding-top: 50px;text-align: center;\">\n      <ion-label color=\"medium\">No Order is due Today</ion-label>\n    </div>\n    <ion-card padding style=\"background-color: white;\" *ngFor=\"let item of ReadyOrders\">\n      <div *ngIf=\"!item.show\">\n        <ion-icon name=\"funnel\" (click)=\"showMore(item)\" style=\"float: left;\" color=\"primary\"></ion-icon>\n        <ion-label style=\"float: right;\" color=\"primary\">{{item.OrderID}}</ion-label><br><br>\n        <div style=\"text-align:start;\">\n          Order for <ion-label *ngFor=\"let item of item.products\">{{item.product}}, </ion-label> ...\n        </div>\n        <span style=\"float: left;margin-top: 10px;\">\n          {{item.username}}\n        </span>\n        <span style=\"float: right;bottom:0;margin-top: 10px;\">\n          <span class=\"pick\">{{item.Date.toDate()  | date: 'dd/MM/yyyy' }}</span>\n        </span>\n      </div>\n      <div *ngIf=\"item.show\">\n\n        <ion-card-title text-center (click)=\"showLess(item)\">\n          <ion-icon name=\"arrow-dropup\" color=\"primary\" style=\"float: left;\"></ion-icon>\n          {{item.OrderID}}<br>{{item.username}}\n        </ion-card-title>\n        <ion-card-content>\n          <ion-row *ngFor=\"let item of item.products\">\n            <ion-col>\n              {{item.product}}\n            </ion-col>\n            <ion-col>\n              {{item.currentprice}}\n            </ion-col>\n            <ion-col>{{item.quantity}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <span style=\"float: left;bottom:0;margin-top: 10px;color:var(--ion-color-primary);font-weight: bold;\"\n                (click)=\"viewOrder(item)\">\n                <ion-label>View more ...</ion-label>\n              </span>\n              <span style=\"float: right;bottom:0;margin-top: 10px;color:var(--ion-color-primary)\">\n                <span class=\"pick\">{{item.Date.toDate()  | date: 'dd/MM/yyyy' }}</span>\n              </span>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </div>\n    </ion-card>\n  </div>\n  <div *ngIf=\"canceled;open\">\n    <div *ngIf=\"loader\" text-center style=\"padding-top: 50px;text-align: center;\">\n      <ion-spinner class=\"loader\" name=\"lines\" color=\"primary\"></ion-spinner>\n    </div>\n    <div *ngIf=\"CanceledOrders.length == 0\" style=\"padding-top: 50px;text-align: center;\">\n      <ion-label color=\"medium\">No Order is due Today</ion-label>\n    </div>\n    <ion-card padding style=\"background-color: white;\" *ngFor=\"let item of CanceledOrders\">\n      <div *ngIf=\"!item.show\">\n        <ion-icon name=\"funnel\" (click)=\"showMore(item)\" style=\"float: left;\" color=\"primary\"></ion-icon>\n        <ion-label style=\"float: right;\" color=\"primary\">{{item.OrderID}}</ion-label><br><br>\n        <div style=\"text-align:start;\">\n          Order for <ion-label *ngFor=\"let item of item.products\">{{item.product}}, </ion-label> ...\n        </div>\n        <span style=\"float: left;margin-top: 10px;\">\n          {{item.username}}\n        </span>\n        <span style=\"float: right;bottom:0;margin-top: 10px;\">\n          <span class=\"pick\">{{item.Date.toDate()  | date: 'dd/MM/yyyy' }}</span>\n        </span>\n      </div>\n      <div *ngIf=\"item.show\">\n\n        <ion-card-title text-center (click)=\"showLess(item)\">\n          <ion-icon name=\"arrow-dropup\" color=\"primary\" style=\"float: left;\"></ion-icon>\n          {{item.OrderID}}<br>{{item.username}}\n        </ion-card-title>\n        <ion-card-content>\n          <ion-row *ngFor=\"let item of item.products\">\n            <ion-col>\n              {{item.product}}\n            </ion-col>\n            <ion-col>\n              {{item.currentprice}}\n            </ion-col>\n            <ion-col>{{item.quantity}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <span style=\"float: left;bottom:0;margin-top: 10px;color:var(--ion-color-primary);font-weight: bold;\"\n                (click)=\"viewOrder(item)\">\n                <ion-label>View more ...</ion-label>\n              </span>\n              <span style=\"float: right;bottom:0;margin-top: 10px;color:var(--ion-color-primary)\">\n                <span class=\"pick\">{{item.Date.toDate()  | date: 'dd/MM/yyyy' }}</span>\n              </span>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </div>\n    </ion-card>\n  </div>\n  <div *ngIf=\"open\">\n    <div *ngIf=\"loader\" text-center style=\"padding-top: 50px;text-align: center;\">\n      <ion-spinner class=\"loader\" name=\"lines\" color=\"primary\"></ion-spinner>\n    </div>\n    <div *ngIf=\"myOpenOrders.length == 0\" style=\"padding-top: 50px;text-align: center;\">\n      <ion-label color=\"medium\">No Order is due Today</ion-label>\n    </div>\n    <ion-card padding style=\"background-color: white;\" *ngFor=\"let item of myOpenOrders\">\n      <div *ngIf=\"!item.show\">\n        <ion-icon name=\"funnel\" (click)=\"showMore(item)\" style=\"float: left;\" color=\"primary\"></ion-icon>\n        <ion-label style=\"float: right;\" color=\"primary\">{{item.OrderID}}</ion-label><br><br>\n        <div style=\"text-align:start;\">\n          Order for <ion-label *ngFor=\"let item of item.products\">{{item.product}}, </ion-label> ...\n        </div>\n        <span style=\"float: left;margin-top: 10px;\">\n          {{item.username}}\n        </span>\n        <span style=\"float: right;bottom:0;margin-top: 10px;\">\n          <span class=\"pick\">Pick up : {{item.pickHour}}:{{item.pickMins}} {{item.pickDay}}</span>\n        </span>\n      </div>\n      <div *ngIf=\"item.show\">\n\n        <ion-card-title text-center (click)=\"showLess(item)\">\n          <ion-icon name=\"arrow-dropup\" color=\"primary\" style=\"float: left;\"></ion-icon>\n          {{item.OrderID}}<br>{{item.username}}\n        </ion-card-title>\n        <ion-card-content>\n          <ion-row *ngFor=\"let item of item.products\">\n            <ion-col>\n              {{item.product}}\n            </ion-col>\n            <ion-col>\n              {{item.currentprice}}\n            </ion-col>\n            <ion-col>{{item.quantity}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <span style=\"float: left;bottom:0;margin-top: 10px;color:var(--ion-color-primary);font-weight: bold;\"\n                (click)=\"viewOrder(item)\">\n                <ion-label>View more ...</ion-label>\n              </span>\n              <span style=\"float: right;bottom:0;margin-top: 10px;color:var(--ion-color-primary)\">\n                <span class=\"pick\">{{item.Date.toDate()  | date: 'dd/MM/yyyy' }}</span>\n              </span>\n             \n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </div>\n    </ion-card>\n  </div>\n</ion-content>"

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

module.exports = "ion-card {\n  border-radius: 15px;\n  text-align: center;\n  padding: 10px 20px 10px;\n}\n\n.top {\n  text-align: center;\n}\n\n.top ion-label {\n  font-weight: bolder;\n  font-size: 2em;\n}\n\n.top ion-text {\n  font-weight: bold;\n}\n\n.active {\n  color: var(--ion-color-primary);\n}\n\n.pick {\n  color: var(--ion-color-success);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0t3aWtfTWVyY2hhbnQvc3JjL2FwcC9vcmRlci1zdGF0cy9vcmRlci1zdGF0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL29yZGVyLXN0YXRzL29yZGVyLXN0YXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSx1QkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURDSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ0NSOztBRENJO0VBQ0ksaUJBQUE7QUNDUjs7QURHQTtFQUNJLCtCQUFBO0FDQUo7O0FERUE7RUFDSSwrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvb3JkZXItc3RhdHMvb3JkZXItc3RhdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4XG4gICAgXG59XG4udG9we1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIH1cbiAgICBpb24tdGV4dHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG59XG4uYWN0aXZle1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4ucGlja3tcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuIiwiaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4O1xufVxuXG4udG9wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRvcCBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDJlbTtcbn1cbi50b3AgaW9uLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5waWNrIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbn0iXX0= */"

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







let OrderStatsPage = class OrderStatsPage {
    constructor(service, navCtrl, db, modal) {
        this.service = service;
        this.navCtrl = navCtrl;
        this.db = db;
        this.modal = modal;
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
        this.service.hiddenTabs = true;
    }
    ionViewWillEnter() {
        this.shopname = this.db.getshopname();
        console.log(this.shopname);
        this.getOpenOrders();
        this.getcanceledOrders();
        this.getreadyOders();
    }
    ngOnInit() {
    }
    home() {
        this.service.hiddenTabs = false;
        this.navCtrl.navigate(['tabs/dashboard']);
    }
    DaysegmentChanged(event) {
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
    }
    TopsegmentChanged(event) {
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
    }
    openOrders() {
        if (this.top !== 'open') {
            this.top = 'open';
            this.open = true;
            this.past = false;
            this.canceled = false;
            this.ready = false;
            this.filterOpenOders('Today');
        }
    }
    pastOrders() {
        if (this.top !== 'past') {
            this.top = 'past';
            this.open = false;
            this.past = true;
            this.ready = true;
        }
    }
    // get open orders
    getOpenOrders() {
        this.service.getOpenOders(this.shopname).valueChanges().subscribe(res => {
            this.myOpenOrders = res;
            this.OpenOrderForFilter = res;
            this.TotalOpenOrders = this.myOpenOrders.length;
            this.loader = false;
            console.log('open orders' + this.myOpenOrders);
        });
    }
    // get canceled orders
    getcanceledOrders() {
        this.service.getCanceledOrders(this.shopname).valueChanges().subscribe(res => {
            this.CanceledOrders = res;
            this.loader = false;
            console.log('canceled orders' + this.CanceledOrders);
        });
    }
    // get Ready orders
    getreadyOders() {
        this.service.getReadyOrders(this.shopname).valueChanges().subscribe(res => {
            this.ReadyOrders = res;
            this.loader = false;
            this.TotalPastOrders = this.ReadyOrders.length + this.CanceledOrders.length;
            console.log('ready orders' + this.ReadyOrders);
        });
    }
    // filter open orders by day of pick up
    filterOpenOders(event) {
        const unfiltered = this.OpenOrderForFilter;
        const filtered = [];
        // tslint:disable-next-line: no-shadowed-variable
        unfiltered.forEach(element => {
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
    }
    showMore(item) {
        item.show = true;
    }
    showLess(item) {
        item.show = false;
        console.log('less');
    }
    viewOrder(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const mod = yield this.modal.create({
                component: _order_preview_order_preview_page__WEBPACK_IMPORTED_MODULE_6__["OrderPreviewPage"],
                componentProps: item
            });
            console.log(item);
            yield mod.present();
        });
    }
};
OrderStatsPage.ctorParameters = () => [
    { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
], OrderStatsPage);



/***/ })

}]);
//# sourceMappingURL=order-stats-order-stats-module-es2015.js.map