(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stock-stock-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/stock/stock.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stock/stock.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content color=\"primary\" style=\"background-color: var(--ion-color-primary);\">\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-icon style=\"width: 20px; height: 20px; margin-left: 5px;\" name=\"arrow-back\" (click)=\"home()\"></ion-icon>\n        </ion-buttons>\n        <ion-title text-center>Stock</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-icon style=\"width: 20px; height: 20px; margin-right: 5px;\" name=\"settings\" (click)=\"settings()\"></ion-icon>\n        </ion-buttons>\n    </ion-toolbar>\n\n    \n    <div class=\"card-main\" style=\"background-color: white;\">\n        <ion-card-title no-padding>\n            <ion-row  style=\"margin-top: 10px;\">\n                <ion-col>\n                    <ion-label class=\"title\">Choose category</ion-label>\n                </ion-col>\n                <ion-col>\n                    <ion-icon name=\"pricetags\" class=\"image\" color=\"primary\"></ion-icon>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-segment scrollable  [(ngModel)]=\"category\" *ngIf=\"show\" (ionChange)=\"filterProducts()\">\n                    <ion-segment-button selected value=\"\">\n                        <ion-label>All</ion-label>\n                      </ion-segment-button>\n                    <ion-segment-button value=\"{{item}}\" *ngFor=\"let item of categories.categories\">\n                        <ion-label>{{item}}</ion-label>\n                    </ion-segment-button>\n                  </ion-segment>\n                <!-- <ion-col>\n                    <ion-select style=\"font-size: 15px; margin-left: -10px;\" placeholder=\"category\" [(ngModel)]=\"category\" *ngIf=\"show\" (ionChange)=\"filterProducts()\">\n                        <ion-select-option *ngFor=\"let item of categories.categories\">{{item}}</ion-select-option>\n                    </ion-select>\n\n                </ion-col> -->\n            </ion-row>\n        </ion-card-title>\n\n        <ion-card-content class=\"content\">\n            <div>\n                <ion-label>Low on stock</ion-label>\n                <div style=\"color: #737373; font-size: 13px; margin-top: 10px;\" *ngIf=\"myAlerts === undefined\">\n                    <div>You haven't set any low limit stock alerts on your products.</div>\n                    <div style=\"margin-top: 10px;\">Click on settings <ion-icon name=\"settings\"></ion-icon> and get started</div>\n                </div>\n                <div *ngIf=\"myAlerts !== undefined\">\n                    <br><br>\n                    <!-- <div *ngIf=\"myAlerts[0].categories.length > 0 \">\n                        <ion-label style=\"color: #737373;font-size: .8rem;\">Generating report ...</ion-label>\n                        <ion-progress-bar value=\"0.25\" buffer=\"0.5\"></ion-progress-bar>\n                    </div> -->\n                    <div *ngIf=\"myAlerts[0].categories.length === 0 \">\n                        <ion-text color=\"dark\">You have 0 alerts left</ion-text>\n                    </div>\n                    \n                </div>\n            </div>\n\n            <div>\n                <div class=\"section-two\">\n                    <ion-label>Available products</ion-label>\n                    <ion-icon name=\"git-compare\" class=\"float\" (click)=\"sortCategory()\"></ion-icon>\n                </div>\n\n                <ion-spinner name=\"circles\" color=\"primary\" *ngIf=\"products.length  == 0\" class=\"spinner\"></ion-spinner>\n                <!-- <ion-card no-padding class=\"stock\" style=\"margin-left: -5px; margin-right: -5px;\" *ngFor=\"let item of products\" (click)=\"viewProduct(item)\">\n                    <ion-row style=\"margin-top: 10px; margin-bottom: 10px;\">\n                        <div style=\"margin-left: 10px;\">\n                            <ion-icon size=\"large\" color=\"success\" name=\"trending-up\"></ion-icon>\n                        </div>\n                        <div style=\"margin-left: 10px;\">\n                            <div style=\"font-size: 15px; font-weight: bold;\">\n                                {{item.product}}\n                            </div>\n                            <div style=\"font-size: 13px; color: #737373;\">\n                                Last updated <b style=\"color: var(--ion-color-primary);\">4</b> days ago\n                            </div>\n                        </div>\n                        <div style=\"position: absolute; float: right; right: 0px; margin-right: 10px; font-size: 15px; color: var(--ion-color-primary);\">\n                            {{item.stock}}\n                        </div>\n                    </ion-row>\n                </ion-card> -->\n                <ion-row>\n                    <ion-col size=\"6\" *ngFor=\"let item of products\">\n                      <ion-card  style=\"height: 200px;\" >\n                        <img *ngIf=\"item.image !== undefined\" style=\"height: 150px;\" src=\"{{item.image}}\" (click)=\"viewProduct(item)\" alt=\"product image\">\n                        <ion-card-content>\n                          <ion-label class=\"pr-name\">{{item.Meal}}</ion-label><br>\n                          <ion-label class=\"pr-price\">Ksh {{item.currentprice}}</ion-label><br>\n                        </ion-card-content>\n                        <div class=\"prTag\" >\n                          <ion-label id=\"lb\" (click)=\"viewProduct(item)\" >View\n                          </ion-label>\n                        </div>\n                      </ion-card>\n                    </ion-col>\n                  </ion-row>\n            </div>\n        </ion-card-content>\n\n    </div>\n \n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"addProduct()\">\n        <ion-fab-button size=\"small\">\n        <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stock_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock.page */ "./src/app/stock/stock.page.ts");







var routes = [
    {
        path: '',
        component: _stock_page__WEBPACK_IMPORTED_MODULE_6__["StockPage"]
    }
];
var StockPageModule = /** @class */ (function () {
    function StockPageModule() {
    }
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
    return StockPageModule;
}());



/***/ }),

/***/ "./src/app/stock/stock.page.scss":
/*!***************************************!*\
  !*** ./src/app/stock/stock.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-main {\n  color: var(--ion-color-medium);\n  background-color: white;\n  border-radius: 20px 20px 0px 0px;\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n  top: 100px;\n  overflow-y: scroll;\n}\n\n.image {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 20px;\n  height: 20px;\n  float: right;\n  right: 0px;\n  margin-right: 5px;\n}\n\n.title {\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--ion-color-primary);\n  margin-left: 5px;\n}\n\nion-select {\n  color: var(--ion-color-primary);\n}\n\n.float {\n  float: right;\n  color: var(--ion-color-primary);\n}\n\n.content {\n  margin-top: 20px;\n}\n\n.content ion-label {\n  font-size: 1.1em;\n  color: var(--ion-color-primary);\n}\n\n.prTag {\n  text-align: center;\n  position: absolute;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  width: 100%;\n  bottom: 0px;\n  background-color: var(--ion-color-primary);\n}\n\n.prTag #lb {\n  border-radius: 10px;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n  width: 85%;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 30px;\n  padding-right: 30px;\n  background-color: white;\n}\n\n.pr-name {\n  font-weight: bold;\n  font-size: 1.1em;\n  text-transform: capitalize;\n}\n\n.pr-price {\n  font-size: 0.8em;\n  color: grey;\n}\n\n.spinner {\n  margin-top: 70px;\n  margin-left: 45%;\n}\n\n.section-two {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.stock {\n  border-radius: 10px;\n}\n\n.stock ion-text {\n  font-weight: bold;\n  padding-top: 20px;\n}\n\n.stock ion-text span {\n  color: var(--ion-color-primary);\n  font-size: 1em;\n}\n\n.stock ion-label {\n  font-size: 1.7em;\n  font-weight: bold;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGxhcmFzc2VtbWF4d2VsbC9EZXNrdG9wL05ld21hcmsvS3dpa19NZXJjaGFudC9zcmMvYXBwL3N0b2NrL3N0b2NrLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3RvY2svc3RvY2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFDSSwrQkFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtFQUNBLCtCQUFBO0FDS0o7O0FESEE7RUFDSSxnQkFBQTtBQ01KOztBRExJO0VBQ0ksZ0JBQUE7RUFDQSwrQkFBQTtBQ09SOztBREhBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0FDTUo7O0FETEk7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ09SOztBREpBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDT0o7O0FETEE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUNRSjs7QURMQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNRSjs7QUROQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNTSjs7QURQQTtFQUNJLG1CQUFBO0FDVUo7O0FEVEk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDV1I7O0FEVlE7RUFDSSwrQkFBQTtFQUNBLGNBQUE7QUNZWjs7QURUSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDV1IiLCJmaWxlIjoic3JjL2FwcC9zdG9jay9zdG9jay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1tYWlue1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgdG9wOiAxMDBweDtcbiAgICBvdmVyZmxvdy15OnNjcm9sbDtcbn1cbi5pbWFnZXtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi50aXRsZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuaW9uLXNlbGVjdHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLmZsb2F0e1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpXG59XG4uY29udGVudHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KVxuICAgIH1cbiAgICBcbn1cbi5wclRhZ3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlIDtcbiAgICBib3R0b206IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgI2xie1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG59XG4ucHItbmFtZXtcbiAgICBmb250LXdlaWdodDogYm9sZDsgXG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5wci1wcmljZXtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgY29sb3I6IGdyZXk7XG5cbn1cbi5zcGlubmVye1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1JTs7XG59XG4uc2VjdGlvbi10d297XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnN0b2Nre1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaW9uLXRleHR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMGVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gICAgXG59IiwiLmNhcmQtbWFpbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgdG9wOiAxMDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uaW1hZ2Uge1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4udGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmZsb2F0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uY29udGVudCBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEuMWVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ucHJUYWcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5wclRhZyAjbGIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgd2lkdGg6IDg1JTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnByLW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5wci1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiBncmV5O1xufVxuXG4uc3Bpbm5lciB7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0NSU7XG59XG5cbi5zZWN0aW9uLXR3byB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5zdG9jayB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc3RvY2sgaW9uLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uc3RvY2sgaW9uLXRleHQgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLnN0b2NrIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS43ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_settings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../settings/settings.page */ "./src/app/settings/settings.page.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");








var StockPage = /** @class */ (function () {
    function StockPage(navCtrl, service, Asc, modal, fs, db) {
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
    StockPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.shopname = localStorage.getItem('shop');
        console.log(this.shopname);
        this.service.getallcategories(this.shopname).valueChanges().subscribe(function (res) {
            _this.categories = res;
            _this.show = true;
            console.log(_this.categories);
        });
        this.getproducts();
    };
    StockPage.prototype.ngOnInit = function () {
    };
    StockPage.prototype.getproducts = function () {
        var _this = this;
        this.service.getallProducts(this.shopname).subscribe(function (res) {
            _this.products = res;
            _this.unfilteredProducts = res;
            console.log('products', _this.products);
        });
    };
    // filter products
    StockPage.prototype.filterProducts = function () {
        if (this.category !== null || this.category !== undefined) {
            console.log(this.category);
            this.products = this.filterItems();
            console.log(this.products);
        }
    };
    StockPage.prototype.filterItems = function () {
        var _this = this;
        return this.unfilteredProducts.filter(function (item) {
            console.log(item.category);
            return item.category.toLowerCase().indexOf(_this.category.toLowerCase()) > -1;
        });
    };
    StockPage.prototype.home = function () {
        this.service.hiddenTabs = false;
        this.navCtrl.navigate(['tabs/dashboard']);
    };
    StockPage.prototype.sortCategory = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var asc;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Asc.create({
                            header: "Sort category by Price in",
                            buttons: [
                                {
                                    text: 'Ascending Order',
                                    handler: function () {
                                        console.log('asc');
                                        _this.products = _this.products.sort(function (a, b) { return a.currentprice - b.currentprice; });
                                    }
                                },
                                {
                                    text: 'Descending Order',
                                    handler: function () {
                                        console.log('asc');
                                        _this.products = _this.products.sort(function (a, b) { return b.currentprice - a.currentprice; });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        asc = _a.sent();
                        asc.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    StockPage.prototype.sortByPriceAsc = function (a, b) {
        return a.currentprice - b.currentprice;
    };
    StockPage.prototype.sortByPriceDsc = function (a, b) {
        return b.currentprice - a.currentprice;
    };
    StockPage.prototype.settings = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mod;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: _settings_settings_page__WEBPACK_IMPORTED_MODULE_5__["SettingsPage"],
                            componentProps: {}
                        })];
                    case 1:
                        mod = _a.sent();
                        mod.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    StockPage.prototype.addProduct = function () {
        this.navCtrl.navigate(['tabs/products']);
    };
    StockPage.prototype.viewProduct = function (item) {
        this.service.hiddenTabs = true;
        this.service.setProduct(item);
        console.log(item);
        this.navCtrl.navigate(['tabs/productmodal']);
    };
    StockPage.prototype.getStockLimits = function () {
        var _this = this;
        this.db.getAlaerts(localStorage.getItem("user")).subscribe(function (res) {
            console.log(res);
            _this.myAlerts = res;
        });
    };
    StockPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
        { type: _database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"] }
    ]; };
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
    return StockPage;
}());



/***/ })

}]);
//# sourceMappingURL=stock-stock-module-es5.js.map