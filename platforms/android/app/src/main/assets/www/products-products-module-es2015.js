(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content color=\"primary\">\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n        <ion-icon style=\"width: 20px; height: 20px; margin-left: 5px;\" name=\"arrow-back\" (click)=\"back()\"></ion-icon>\n        </ion-buttons>\n        <ion-title text-center style=\"margin-right: 15px;\">Add to stock</ion-title>\n    </ion-toolbar>\n\n\n    <div class=\"card-main\" style=\"background-color: white;\" *ngIf=\"type\">\n\n        <div class=\"buttons\">\n            <ion-button expand=\"full\" (click)=\"addNewProduct()\">New Product</ion-button><br>\n            <ion-button expand=\"full\" (click)=\"existingProduct()\">Existing Product</ion-button><br>\n            <ion-button expand=\"full\" (click)=\"categoryModal()\">New Category</ion-button>\n        </div>\n    </div>\n\n    <!-- EXISTING PRODUCT -->\n    <div class=\"body\" *ngIf=\"existing\">\n        <ion-buttons slot=\"start\" style=\"padding-top: 10px; margin-bottom: 5px;\">\n            <ion-button (click)=\"close()\">\n                <ion-icon size=\"small\" style=\"width: 20px; height: 20px;\" color=\"primary\" name=\"close\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-row no-padding text-center>\n            <ion-col>\n                <ion-label style=\"font-size: 15px;\" class=\"title\">Choose category to filter</ion-label>\n                <!-- <ion-select placeholder=\"category\" [(ngModel)]=\"category\" (ionChange)=\"setFilteredItems()\">\n                <ion-select-option style=\"font-size: 13px;\" *ngFor=\"let item of categories.categories\">{{item}}</ion-select-option>\n                </ion-select> -->\n                <ion-icon style=\"width: 20px; height: 20px; margin-right: 5px;\" name=\"pricetags\" class=\"image\" color=\"primary\"></ion-icon>\n            </ion-col>\n            <!-- <ion-col size=\"4\">\n                <ion-icon style=\"width: 20px; height: 20px; margin-right: 5px;\" name=\"pricetags\" class=\"image\" color=\"primary\"></ion-icon>\n            </ion-col> -->\n        </ion-row>\n        <ion-row>\n            <ion-segment scrollable  [(ngModel)]=\"category\"  (ionChange)=\"setFilteredItems()\">\n                <ion-segment-button selected value=\"\">\n                    <ion-label>All</ion-label>\n                  </ion-segment-button>\n                <ion-segment-button value=\"{{item}}\" *ngFor=\"let item of categories.categories\">\n                    <ion-label>{{item}}</ion-label>\n                </ion-segment-button>\n              </ion-segment>\n        </ion-row>\n        <ion-item *ngIf=\"category != null\">\n            <ion-input style=\"font-size: 15px;\" type=\"text\" clearInput placeholder=\"Enter product name\"></ion-input>\n            <ion-icon style=\"width: 20px; height: 20px;\" name=\"search\" slot=\"end\"></ion-icon>\n        </ion-item>\n\n\n        <ion-item no-padding text-center style=\"background-color: #dedede; color: var(--ion-color-primary); font-size: 15px;\">\n            <ion-col size=\"2\">\n                Icon\n            </ion-col>\n            <ion-col size=\"4\">\n                Product\n            </ion-col>\n            <ion-col size=\"2\">\n                Stock\n            </ion-col>\n            <ion-col size=\"2\">\n                Units\n            </ion-col>\n            <ion-col size=\"2\">\n                Price\n            </ion-col>\n        </ion-item>\n        <ion-item no-padding text-center (click)=\"viewProduct(item)\" *ngFor=\"let item of products\" style=\"font-size: 13px; color: #737373; \">\n            <ion-col text-center size=\"2\">\n                <img [src]=\"item.image\" style=\"width: 50px;\">\n            </ion-col>\n            <ion-col size=\"4\">\n                {{item.product}}\n            </ion-col>\n            <ion-col size=\"2\">\n                {{item.stock}}\n            </ion-col>\n            <ion-col size=\"2\">\n                {{item.quantity}}\n            </ion-col>\n            <ion-col size=\"2\">\n                {{item.currentprice}}\n            </ion-col>\n        </ion-item>\n    </div>\n\n\n    <!-- NEW PRODUCT -->\n    <div *ngIf=\"newProduct\" class=\"body\">\n        <ion-buttons slot=\"start\" style=\"padding-top: 10px; margin-bottom: 5px;\">\n            <ion-button (click)=\"close()\">\n                <ion-icon size=\"small\" style=\"width: 20px; height: 20px;\" color=\"primary\" name=\"close\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <form (ngSubmit)=\"addProduct()\" [formGroup]=\"productForm\" style=\"margin-right: 15px; margin-left: 15px;\">\n            <ion-list no-padding>\n                <ion-item no-padding>\n                    <ion-input  style=\"font-size: 13px; color: #737373;\" type=\"text\" formControlName=\"product\" placeholder=\"Enter Product name\" required></ion-input>\n                </ion-item>\n                <ion-item no-padding>\n                    <ion-input  style=\"font-size: 13px; color: #737373;\" no-padding type=\"number\" formControlName=\"barcode\" placeholder=\"Scan or Enter barcode\" value=\"{{scannedcode}}\" ></ion-input>\n                    <ion-icon style=\"width: 20px; height: 20px; float: right; right: 0px; position: absolute;\" slot=\"end\" name=\"qr-scanner\" (click)=\"scan()\"></ion-icon>\n                </ion-item>\n                <ion-item no-padding (click)=\"selectCategory()\">\n                    <ion-label style=\"font-size: 13px; color: #737373;\">Select Category </ion-label>\n                    <ion-input style=\"font-size: 13px; color: #737373; float: right; right: 0px;\" no-padding placeholder=\"Select Category\" required slot=\"end\" formControlName=\"category\" value=\"{{value}}\">\n                        <ion-icon style=\"width: 20px; height: 20px;\" name=\"arrow-dropdown\" color=\"medium\"></ion-icon>\n                    </ion-input>\n                </ion-item>\n                <ion-item no-padding>\n                    <ion-input style=\"font-size: 13px; color: #737373;\" type=\"number\" formControlName=\"stock\" placeholder=\"Enter Quantity available\" required>\n                </ion-input>\n                </ion-item>\n                <ion-item no-padding>\n                    <ion-input style=\"font-size: 13px; color: #737373;\" type=\"text\" formControlName=\"quantity\" placeholder=\"Enter Product Unit\" required></ion-input>\n                </ion-item>\n                <ion-item no-padding>\n                    <ion-input style=\"font-size: 13px; color: #737373;\" type=\"text\" formControlName=\"currentprice\" placeholder=\"Enter Product Price\" required></ion-input>\n                </ion-item>\n                <ion-item no-padding>\n                    <ion-input style=\"font-size: 13px; color: #737373;\" type=\"text\" formControlName=\"description\" placeholder=\"Enter Description\"></ion-input>\n                </ion-item>\n                <!-- <ion-item>\n                <ion-label>Set product status </ion-label>\n                <ion-select formControlName=\"status\" slot=\"end\" placeholder=\"Select\">\n                    <ion-select-option selected>Available</ion-select-option>\n                    <ion-select-option>Unavailable</ion-select-option>\n                </ion-select>\n                <ion-toggle checked slot=\"end\" formControlName=\"status\"></ion-toggle>\n                </ion-item> -->\n                <ion-item no-padding (click)=\"openCamera()\">\n                    <ion-label style=\"font-size: 13px; color: #737373;\">Image:</ion-label>\n                    <ion-input style=\"font-size: 13px; color: #737373;\" formControlName=\"image\" value=\"{{image}}\" readonly required></ion-input>\n                    <ion-icon style=\"width: 20px; height: 20px; float: right; right: 0px; position: absolute;\" slot=\"end\" name=\"camera\"></ion-icon>\n                </ion-item>\n                <ion-button expand=\"full \" type=\"submit\" [disabled]=\"!productForm.valid\"\n                style=\"margin-top: 50px; margin-bottom: 10px;\">Save</ion-button>\n            </ion-list>\n        </form>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.page */ "./src/app/products/products.page.ts");







const routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]
    }
];
let ProductsPageModule = class ProductsPageModule {
};
ProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]]
    })
], ProductsPageModule);



/***/ }),

/***/ "./src/app/products/products.page.scss":
/*!*********************************************!*\
  !*** ./src/app/products/products.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-main {\n  color: var(--ion-color-medium);\n  background-color: white;\n  border-radius: 20px 20px 0px 0px;\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n  top: 100px;\n  overflow-y: scroll;\n}\n\nion-slides {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\nion-slides img {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 100%;\n}\n\nion-select {\n  color: var(--ion-color-primary);\n}\n\n.loader {\n  text-align: center;\n  margin-top: 40%;\n}\n\n.body {\n  color: #737373;\n  background-color: white;\n  border-radius: 20px 20px 0px 0px;\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n  top: 10%;\n  overflow-y: scroll;\n  margin-bottom: 0px;\n}\n\n.buttons {\n  margin-top: 30px;\n  margin-left: 10px;\n  margin-right: 10px;\n  text-align: center;\n}\n\n.title {\n  font-weight: bold;\n  font-size: 1.1em;\n}\n\n.image {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 50%;\n  height: 50%;\n  float: right;\n}\n\nion-thumnail {\n  width: 100%;\n  height: 100%;\n}\n\nion-thumnail img {\n  -o-object-fit: contain;\n     object-fit: contain;\n  -o-object-position: center;\n     object-position: center;\n}\n\n.asc {\n  background-color: var(--ion-color-primary);\n}\n\n.asc button {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0tXSUsvS3dpa19NZXJjaGFudC9zcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNFSjs7QURESTtFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7QUNHUjs7QURBQTtFQUNJLCtCQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNJSjs7QURGQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7QUNJSjs7QUREQTtFQUNJLGdCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEREE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDSUo7O0FERkE7RUFDSSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDS0o7O0FESEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ01KOztBRExJO0VBQ0ksc0JBQUE7S0FBQSxtQkFBQTtFQUNBLDBCQUFBO0tBQUEsdUJBQUE7QUNPUjs7QURKQTtFQUtJLDBDQUFBO0FDR0o7O0FEUEk7RUFDSSwrQkFBQTtBQ1NSIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtbWFpbntcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHRvcDogMTAwcHg7XG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XG59XG5pb24tc2xpZGVzIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQgO1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbn1cbmlvbi1zZWxlY3R7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5sb2FkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA0MCU7XG59XG4uYm9keXtcbiAgICBjb2xvcjogIzczNzM3MztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgdG9wOiAxMCU7XG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XG4gICAgLy8gaGVpZ2h0OiAxMDAwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLmJ1dHRvbnN7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAvLyBwYWRkaW5nLXRvcDogNjAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbn1cbi5pbWFnZXtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuaW9uLXRodW1uYWlse1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBpbWd7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgIH1cbn1cbi5hc2N7XG4gICAgYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgXG4gICAgfVxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuIiwiLmNhcmQtbWFpbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgdG9wOiAxMDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuaW9uLXNsaWRlcyBpbWcge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5sb2FkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQwJTtcbn1cblxuLmJvZHkge1xuICBjb2xvcjogIzczNzM3MztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgdG9wOiAxMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbi5pbWFnZSB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmlvbi10aHVtbmFpbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5pb24tdGh1bW5haWwgaW1nIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5hc2Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uYXNjIGJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/products/products.page.ts":
/*!*******************************************!*\
  !*** ./src/app/products/products.page.ts ***!
  \*******************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _category_category_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../category/category.page */ "./src/app/category/category.page.ts");
/* harmony import */ var _upload_upload_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../upload/upload.service */ "./src/app/upload/upload.service.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");




















let ProductsPage = class ProductsPage {
    constructor(navCtrl, service, asc, scannner, http, db, camera, formBuilder, modal, upload, file, loader, load, storage, ref, webview, fs, imagePicker, cropService, fileChooser, st) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.asc = asc;
        this.scannner = scannner;
        this.http = http;
        this.db = db;
        this.camera = camera;
        this.formBuilder = formBuilder;
        this.modal = modal;
        this.upload = upload;
        this.file = file;
        this.loader = loader;
        this.load = load;
        this.storage = storage;
        this.ref = ref;
        this.webview = webview;
        this.fs = fs;
        this.imagePicker = imagePicker;
        this.cropService = cropService;
        this.fileChooser = fileChooser;
        this.st = st;
        // variables
        this.type = true;
        this.existing = false;
        this.newProduct = false;
        this.value = '';
        this.scannedcode = '';
        this.image = '';
        this.images = [];
        this.service.hiddenTabs = true;
        this.date = new Date();
        this.productForm = formBuilder.group({
            product: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            barcode: [this.scannedcode],
            category: [this.value, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            stock: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            currentprice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('[a-zA-Z ]*')])],
            status: ['Available'],
            image: [this.image, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]
        });
        this.shop = localStorage.getItem('shop');
        this.service.getallcategories(this.shop).valueChanges().subscribe(res => {
            this.categories = res;
        });
        this.getproducts();
    }
    getproducts() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.service.getallProducts(this.shop).subscribe(res => {
                this.products = res;
                this.unfilteredProducts = res;
            });
            console.log(this.products);
        });
    }
    // filter products
    setFilteredItems() {
        if (this.category !== null || this.category !== '') {
            this.products = this.filterItems();
            console.log(this.products);
        }
    }
    filterItems() {
        return this.unfilteredProducts.filter(item => {
            return item.category.toLowerCase().indexOf(this.category.toLowerCase()) > -1;
        });
    }
    ngOnInit() {
    }
    back() {
        this.service.hiddenTabs = false;
        this.close();
        this.navCtrl.navigate(['tabs/stock']);
    }
    addNewProduct() {
        this.newProduct = true;
        this.type = false;
    }
    existingProduct() {
        this.existing = true;
        this.type = false;
    }
    close() {
        this.existing = false;
        this.type = true;
        this.newProduct = false;
        this.category = null;
    }
    viewProduct(item) {
        this.service.hiddenTabs = true;
        this.service.setProduct(item);
        console.log(item);
        this.navCtrl.navigate(['tabs/productmodal']);
    }
    addProduct() {
        this.Toast('uploading...');
        this.uploadTostorage(this.image);
        let data = {
            "shop": this.shop,
            "currentprice": this.productForm.value.currentprice,
            "quantity": this.productForm.value.quantity,
            "product": this.productForm.value.product,
            "image": this.productForm.value.image,
            "status": this.productForm.value.status,
            "stock": this.productForm.value.stock,
            "category": this.productForm.value.category,
            "description": this.productForm.value.description,
            "barcode": this.productForm.value.barcode
        };
        console.log(data);
        this.fs.collection(this.shop).add(data).then(res => {
            this.productForm.reset();
            this.category = '';
            this.upload.presentToast('Product upload successful');
        }).catch(err => {
            console.log(err);
        });
    }
    scan() {
        this.scannner.scan().then(code => {
            if (code.cancelled) {
                return;
            }
            this.scannedcode = code.text;
        });
    }
    selectCategory() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.asc.create({
                header: 'Categories',
                buttons: this.createButtons()
            });
            yield actionSheet.present();
        });
    }
    createButtons() {
        const buttons = [];
        console.log(this.categories.categories);
        // tslint:disable-next-line: forin
        for (let index in this.categories.categories) {
            const button = {
                text: this.categories.categories[index],
                // icon: this.Allcategories[index].icon,
                handler: () => {
                    console.log('button text ' + this.categories.categories[index]);
                    this.value = this.categories.categories[index];
                    return true;
                }
            };
            buttons.push(button);
        }
        const adbutton = {
            text: 'Add New',
            cssClass: 'asc',
            handler: () => {
                console.log('adding new');
                this.categoryModal();
            }
        };
        buttons.push(adbutton);
        return buttons;
    }
    categoryModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _category_category_page__WEBPACK_IMPORTED_MODULE_10__["CategoryPage"],
                componentProps: { shopname: this.db.getshopname() }
            });
            localStorage.setItem('shop', this.db.getshopname());
            yield modal.present();
        });
    }
    selectImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.asc.create({
                header: "Select Image Source",
                buttons: [
                    {
                        text: 'Load from Library',
                        handler: () => {
                            this.openImagePickerCrop();
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    openImagePickerCrop() {
        this.imagePicker.hasReadPermission().then((result) => {
            if (result == false) {
                // no callbacks required as this opens a popup which returns async
                this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                this.imagePicker.getPictures({
                    maximumImagesCount: 1
                }).then((results) => {
                    for (var i = 0; i < results.length; i++) {
                        this.cropService.crop(results[i], { quality: 75 }).then(newImage => {
                            this.uploadImageToFirebase(newImage);
                        }, error => alert("Error cropping image" + error));
                    }
                }, (err) => alert(err)).catch(err => console.log(err));
            }
        }, (err) => {
            alert(err);
        }).catch(err => alert(err));
    }
    uploadImageToFirebase(image) {
        image = this.webview.convertFileSrc(image);
        //uploads img to firebase storage
        this.upload.uploadImage(image)
            .then(photoURL => {
            console.log(photoURL);
            this.upload.presentToast('Image was updated successfully');
        });
    }
    Toast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loader.create({
                message: msg,
                duration: 2000,
            });
            yield this.loading.present();
        });
    }
    openCamera() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                // camera options
                const options = {
                    quality: 50,
                    targetHeight: 600,
                    targetWidth: 600,
                    destinationType: this.camera.DestinationType.DATA_URL,
                    encodingType: this.camera.EncodingType.JPEG,
                    mediaType: this.camera.MediaType.PICTURE,
                    correctOrientation: true
                };
                const results = yield this.camera.getPicture(options);
                const image = `data:image/jpeg;base64,${results}`;
                this.image = image;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    uploadTostorage(image) {
        const pictures = this.st.storage.ref(this.shop + '/' + this.date);
        pictures.putString(image, 'data_url').then(url => {
            this.image = url.downloadURL;
        });
    }
};
ProductsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] },
    { type: _upload_upload_service__WEBPACK_IMPORTED_MODULE_11__["UploadService"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_14__["WebView"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestore"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_16__["ImagePicker"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_17__["Crop"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_18__["FileChooser"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_19__["AngularFireStorage"] }
];
ProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: __webpack_require__(/*! raw-loader!./products.page.html */ "./node_modules/raw-loader/index.js!./src/app/products/products.page.html"),
        styles: [__webpack_require__(/*! ./products.page.scss */ "./src/app/products/products.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"],
        _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"],
        _upload_upload_service__WEBPACK_IMPORTED_MODULE_11__["UploadService"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_14__["WebView"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestore"],
        _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_16__["ImagePicker"],
        _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_17__["Crop"],
        _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_18__["FileChooser"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_19__["AngularFireStorage"]])
], ProductsPage);



/***/ })

}]);
//# sourceMappingURL=products-products-module-es2015.js.map