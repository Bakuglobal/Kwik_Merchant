(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stock-stock-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/stock/stock.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stock/stock.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content color=\"primary\" style=\"background-color: var(--ion-color-primary);\">\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-icon style=\"width: 20px; height: 20px; margin-left: 5px;\" name=\"arrow-back\" (click)=\"home()\"></ion-icon>\n        </ion-buttons>\n        <ion-title text-center>Stock</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-icon style=\"width: 20px; height: 20px; margin-right: 5px;\" name=\"settings\" (click)=\"settings()\"></ion-icon>\n        </ion-buttons>\n    </ion-toolbar>\n\n    \n    <div class=\"card-main\" style=\"background-color: white;\">\n        <ion-card-title no-padding>\n            <ion-row  style=\"margin-top: 10px;\">\n                <ion-col>\n                    <ion-label class=\"title\">Choose category</ion-label>\n                </ion-col>\n                <ion-col>\n                    <ion-icon name=\"pricetags\" class=\"image\" color=\"primary\"></ion-icon>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-segment scrollable  [(ngModel)]=\"category\" *ngIf=\"show\" (ionChange)=\"filterProducts()\">\n                    <ion-segment-button selected value=\"\">\n                        <ion-label>All</ion-label>\n                      </ion-segment-button>\n                    <ion-segment-button value=\"{{item}}\" *ngFor=\"let item of categories.categories\">\n                        <ion-label>{{item}}</ion-label>\n                    </ion-segment-button>\n                  </ion-segment>\n                <!-- <ion-col>\n                    <ion-select style=\"font-size: 15px; margin-left: -10px;\" placeholder=\"category\" [(ngModel)]=\"category\" *ngIf=\"show\" (ionChange)=\"filterProducts()\">\n                        <ion-select-option *ngFor=\"let item of categories.categories\">{{item}}</ion-select-option>\n                    </ion-select>\n\n                </ion-col> -->\n            </ion-row>\n        </ion-card-title>\n\n        <ion-card-content class=\"content\">\n            <div>\n                <ion-label>Low on stock</ion-label>\n                <div style=\"color: #737373; font-size: 13px; margin-top: 10px;\" *ngIf=\"myAlerts === undefined\">\n                    <div>You haven't set any low limit stock alerts on your products.</div>\n                    <div style=\"margin-top: 10px;\">Click on settings <ion-icon name=\"settings\"></ion-icon> and get started</div>\n                </div>\n                <div *ngIf=\"myAlerts !== undefined\">\n                    <br><br>\n                    <div *ngIf=\"myAlerts[0].categories.length > 0 \">\n                        <ion-label style=\"color: #737373;font-size: .8rem;\">Generating report ...</ion-label>\n                        <ion-progress-bar value=\"0.25\" buffer=\"0.5\"></ion-progress-bar>\n                    </div>\n                    <div *ngIf=\"myAlerts[0].categories.length === 0 \">\n                        <ion-text color=\"dark\">You have 0 alerts left</ion-text>\n                    </div>\n                    \n                </div>\n            </div>\n\n            <div>\n                <div class=\"section-two\">\n                    <ion-label>Available products</ion-label>\n                    <ion-icon name=\"git-compare\" class=\"float\" (click)=\"sortCategory()\"></ion-icon>\n                </div>\n\n                <ion-spinner name=\"circles\" color=\"primary\" *ngIf=\"products.length  == 0\" class=\"spinner\"></ion-spinner>\n                <!-- <ion-card no-padding class=\"stock\" style=\"margin-left: -5px; margin-right: -5px;\" *ngFor=\"let item of products\" (click)=\"viewProduct(item)\">\n                    <ion-row style=\"margin-top: 10px; margin-bottom: 10px;\">\n                        <div style=\"margin-left: 10px;\">\n                            <ion-icon size=\"large\" color=\"success\" name=\"trending-up\"></ion-icon>\n                        </div>\n                        <div style=\"margin-left: 10px;\">\n                            <div style=\"font-size: 15px; font-weight: bold;\">\n                                {{item.product}}\n                            </div>\n                            <div style=\"font-size: 13px; color: #737373;\">\n                                Last updated <b style=\"color: var(--ion-color-primary);\">4</b> days ago\n                            </div>\n                        </div>\n                        <div style=\"position: absolute; float: right; right: 0px; margin-right: 10px; font-size: 15px; color: var(--ion-color-primary);\">\n                            {{item.stock}}\n                        </div>\n                    </ion-row>\n                </ion-card> -->\n                <ion-row>\n                    <ion-col size=\"6\" *ngFor=\"let item of products\">\n                      <ion-card  style=\"height: 200px;\" >\n                        <img *ngIf=\"item.image !== undefined\" style=\"height: 150px;\" src=\"{{item.image}}\" (click)=\"viewProduct(item)\" alt=\"product image\">\n                        <ion-card-content>\n                          <ion-label class=\"pr-name\">{{item.Meal}}</ion-label><br>\n                          <ion-label class=\"pr-price\">Ksh {{item.currentprice}}</ion-label><br>\n                        </ion-card-content>\n                        <div class=\"prTag\" >\n                          <ion-label id=\"lb\" (click)=\"viewProduct(item)\" >View\n                          </ion-label>\n                        </div>\n                      </ion-card>\n                    </ion-col>\n                  </ion-row>\n            </div>\n        </ion-card-content>\n\n    </div>\n \n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"addProduct()\">\n        <ion-fab-button size=\"small\">\n        <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n</ion-content>"

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

module.exports = ".card-main {\n  color: var(--ion-color-medium);\n  background-color: white;\n  border-radius: 20px 20px 0px 0px;\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n  top: 100px;\n  overflow-y: scroll;\n}\n\n.image {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 20px;\n  height: 20px;\n  float: right;\n  right: 0px;\n  margin-right: 5px;\n}\n\n.title {\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--ion-color-primary);\n  margin-left: 5px;\n}\n\nion-select {\n  color: var(--ion-color-primary);\n}\n\n.float {\n  float: right;\n  color: var(--ion-color-primary);\n}\n\n.content {\n  margin-top: 20px;\n}\n\n.content ion-label {\n  font-size: 1.1em;\n  color: var(--ion-color-primary);\n}\n\n.prTag {\n  text-align: center;\n  position: absolute;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  width: 100%;\n  bottom: 0px;\n  background-color: var(--ion-color-primary);\n}\n\n.prTag #lb {\n  border-radius: 10px;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n  width: 85%;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 30px;\n  padding-right: 30px;\n  background-color: white;\n}\n\n.pr-name {\n  font-weight: bold;\n  font-size: 1.1em;\n  text-transform: capitalize;\n}\n\n.pr-price {\n  font-size: 0.8em;\n  color: grey;\n}\n\n.spinner {\n  margin-top: 70px;\n  margin-left: 45%;\n}\n\n.section-two {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.stock {\n  border-radius: 10px;\n}\n\n.stock ion-text {\n  font-weight: bold;\n  padding-top: 20px;\n}\n\n.stock ion-text span {\n  color: var(--ion-color-primary);\n  font-size: 1em;\n}\n\n.stock ion-label {\n  font-size: 1.7em;\n  font-weight: bold;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0tXSUsvQW5kL0t3aWtfTWVyY2hhbnQvc3JjL2FwcC9zdG9jay9zdG9jay5wYWdlLnNjc3MiLCJzcmMvYXBwL3N0b2NrL3N0b2NrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksc0JBQUE7S0FBQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksK0JBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7RUFDQSwrQkFBQTtBQ0tKOztBREhBO0VBQ0ksZ0JBQUE7QUNNSjs7QURMSTtFQUNJLGdCQUFBO0VBQ0EsK0JBQUE7QUNPUjs7QURIQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtBQ01KOztBRExJO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNPUjs7QURKQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ09KOztBRExBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FDUUo7O0FETEE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDUUo7O0FETkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDU0o7O0FEUEE7RUFDSSxtQkFBQTtBQ1VKOztBRFRJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ1dSOztBRFZRO0VBQ0ksK0JBQUE7RUFDQSxjQUFBO0FDWVo7O0FEVEk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ1dSIiwiZmlsZSI6InNyYy9hcHAvc3RvY2svc3RvY2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtbWFpbntcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHRvcDogMTAwcHg7XG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XG59XG4uaW1hZ2V7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4udGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbmlvbi1zZWxlY3R7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5mbG9hdHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KVxufVxuLmNvbnRlbnR7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSlcbiAgICB9XG4gICAgXG59XG4ucHJUYWd7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB3aWR0aDogMTAwJSA7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICNsYntcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxufVxuLnByLW5hbWV7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ucHItcHJpY2V7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIGNvbG9yOiBncmV5O1xuXG59XG4uc3Bpbm5lcntcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0NSU7O1xufVxuLnNlY3Rpb24tdHdve1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5zdG9ja3tcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGlvbi10ZXh0e1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjBlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICAgIFxufSIsIi5jYXJkLW1haW4ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHRvcDogMTAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmltYWdlIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICByaWdodDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5mbG9hdCB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmNvbnRlbnQgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnByVGFnIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4ucHJUYWcgI2xiIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHdpZHRoOiA4NSU7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5wci1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ucHItcHJpY2Uge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogZ3JleTtcbn1cblxuLnNwaW5uZXIge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBtYXJnaW4tbGVmdDogNDUlO1xufVxuXG4uc2VjdGlvbi10d28ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uc3RvY2sge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnN0b2NrIGlvbi10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLnN0b2NrIGlvbi10ZXh0IHNwYW4ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5zdG9jayBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEuN2VtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */"

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
        // variables
        this.products = [];
        this.show = false;
        this.service.hiddenTabs = true;
        this.getStockLimits();
    }
    ionViewDidEnter() {
        this.shopname = localStorage.getItem('shop');
        console.log(this.shopname);
        this.service.getallcategories(this.shopname).valueChanges().subscribe(res => {
            this.categories = res;
            this.show = true;
            console.log(this.categories);
        });
        this.getproducts();
    }
    ngOnInit() {
    }
    getproducts() {
        this.service.getallProducts(this.shopname).subscribe(res => {
            this.products = res;
            this.unfilteredProducts = res;
            console.log('products', this.products);
        });
    }
    // filter products
    filterProducts() {
        if (this.category !== null || this.category !== undefined) {
            console.log(this.category);
            this.products = this.filterItems();
            console.log(this.products);
        }
    }
    filterItems() {
        return this.unfilteredProducts.filter(item => {
            console.log(item.category);
            return item.category.toLowerCase().indexOf(this.category.toLowerCase()) > -1;
        });
    }
    home() {
        this.service.hiddenTabs = false;
        this.navCtrl.navigate(['tabs/dashboard']);
    }
    sortCategory() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const asc = yield this.Asc.create({
                header: "Sort category by Price in",
                buttons: [
                    {
                        text: 'Ascending Order',
                        handler: () => {
                            console.log('asc');
                            this.products = this.products.sort(function (a, b) { return a.currentprice - b.currentprice; });
                        }
                    },
                    {
                        text: 'Descending Order',
                        handler: () => {
                            console.log('asc');
                            this.products = this.products.sort(function (a, b) { return b.currentprice - a.currentprice; });
                        }
                    }
                ]
            });
            asc.present();
        });
    }
    sortByPriceAsc(a, b) {
        return a.currentprice - b.currentprice;
    }
    sortByPriceDsc(a, b) {
        return b.currentprice - a.currentprice;
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
    getStockLimits() {
        this.db.getAlaerts(localStorage.getItem("user")).subscribe(res => {
            console.log(res);
            this.myAlerts = res;
        });
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