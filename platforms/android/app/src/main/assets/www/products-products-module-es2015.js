(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content color=\"primary\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" padding>\n      <ion-icon name=\"arrow-back\" (click)=\"back()\"></ion-icon>\n    </ion-buttons>\n    <ion-title>Add to stock</ion-title>\n  </ion-toolbar>\n  <div class=\"body\" *ngIf=\"type\">\n\n    <div class=\"buttons\">\n      <ion-button expand=\"block\" shape=\"round\" (click)=\"addNewProduct()\">New Product</ion-button><br><br><br>\n      <ion-button expand=\"block\" shape=\"round\" (click)=\"existingProduct()\">Existing Product</ion-button><br><br><br>\n      <ion-button expand=\"block\" shape=\"round\" (click)=\"categoryModal()\">New Category</ion-button>\n    </div>\n  </div>\n  <div class=\"body\" *ngIf=\"existing\">\n    <ion-buttons slot=\"start\" style=\"padding-top: 10px;\">\n      <ion-button (click)=\"close()\">\n        <ion-icon size=\"large\" color=\"primary\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-row padding text-center>\n      <ion-col>\n        <ion-label class=\"title\">Choose category to filter</ion-label>\n        <ion-select placeholder=\"category\" [(ngModel)]=\"category\" (ionChange)=\"setFilteredItems()\">\n          <ion-select-option *ngFor=\"let item of categories.categories\">{{item.name}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-icon name=\"pricetags\" class=\"image\" color=\"primary\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-item text-center *ngIf=\"category != null\">\n      <ion-input type=\"text\" clearInput placeholder=\"Enter product name\"></ion-input>\n      <ion-icon name=\"search\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item text-center color=\"medium\">\n      <ion-col size=\"2\">\n        Icon\n      </ion-col>\n      <ion-col size=\"4\">\n        Product\n      </ion-col>\n      <ion-col size=\"2\">\n        Stock\n      </ion-col>\n      <ion-col size=\"2\">\n        Units\n      </ion-col>\n      <ion-col size=\"2\">\n        Price\n      </ion-col>\n    </ion-item>\n    <ion-item text-center (click)=\"viewProduct(item)\" *ngFor=\"let item of products\">\n      <ion-col text-center size=\"2\">\n        <ion-thumbnail>\n          <img [src]=\"item.image\">\n        </ion-thumbnail>\n      </ion-col>\n      <ion-col size=\"4\">\n        {{item.product}}\n      </ion-col>\n      <ion-col size=\"2\">\n        {{item.stock}}\n      </ion-col>\n      <ion-col size=\"2\">\n        {{item.quantity}}\n      </ion-col>\n      <ion-col size=\"2\">\n        {{item.currentprice}}\n      </ion-col>\n    </ion-item>\n\n  </div>\n\n  <div *ngIf=\"newProduct\" class=\"body\">\n    <ion-buttons slot=\"start\" style=\"padding-top: 10px;\">\n      <ion-button (click)=\"close()\">\n        <ion-icon size=\"large\" color=\"primary\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <form (ngSubmit)=\"addProduct()\" [formGroup]=\"productForm\">\n      <ion-list>\n        <ion-item>\n          <ion-input type=\"text\" formControlName=\"productName\" placeholder=\"Enter Product name\" required></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type=\"number\" formControlName=\"barcode\" placeholder=\"scan barcode\"></ion-input>\n          <ion-icon slot=\"end\" name=\"qr-scanner\" (click)=\"scan()\"></ion-icon>\n        </ion-item>\n        <ion-item (click)=\"selectCategory()\">\n          <ion-label>Select Category </ion-label>\n          <ion-input placeholder=\"Select Category\" required slot=\"end\" formControlName=\"category\" value=\"{{value}}\">\n            <ion-icon name=\"arrow-dropdown\" color=\"medium\"></ion-icon>\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type=\"number\" formControlName=\"quantity\" placeholder=\"Enter Quantity available\" required>\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type=\"text\" formControlName=\"unit\" placeholder=\"Enter Product Unit\" required></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type=\"text\" formControlName=\"price\" placeholder=\"Enter Product Price\" required></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type=\"text\" formControlName=\"description\" placeholder=\"Enter Description\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Set status as Available</ion-label>\n          <ion-toggle checked slot=\"end\" formControlName=\"status\"></ion-toggle>\n        </ion-item>\n        <ion-item (click)=\"selectImage()\">\n          <ion-label>Image:</ion-label>\n          <ion-input formControlName=\"image\" value=\"{{image}}\" required></ion-input>\n          <ion-icon slot=\"end\" name=\"camera\"></ion-icon>\n        </ion-item>\n        <ion-button expand=\"full \" type=\"submit\" shape=\"round\" [disabled]=\"!productForm.valid\"\n          style=\"margin-top: 50px;\">Save</ion-button>\n      </ion-list>\n    </form>\n  </div>\n</ion-content>"

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

module.exports = "ion-card {\n  border-radius: 10px 10px 0px 0px;\n  background-color: #3880ff;\n  margin-left: 0px;\n  margin-right: 0px;\n  text-align: center;\n  margin-bottom: 0px;\n  text-shadow: 2px 2px 5px #3881f3;\n  height: 200px;\n}\n\nion-slides {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\nion-slides img {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 100%;\n}\n\nion-select {\n  color: var(--ion-color-primary);\n}\n\n.loader {\n  text-align: center;\n  margin-top: 40%;\n}\n\n.body {\n  color: var(--ion-color-medium);\n  background-color: white;\n  border-radius: 20px 20px 0px 0px;\n  width: 100%;\n  height: 10000px;\n  margin-bottom: 0px;\n  margin-top: 40px;\n}\n\n.buttons {\n  padding-top: 60%;\n  text-align: center;\n}\n\n.title {\n  font-weight: bold;\n  font-size: 1.1em;\n}\n\n.image {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 50%;\n  height: 50%;\n  float: right;\n}\n\nion-thumnail {\n  width: 100%;\n  height: 100%;\n}\n\nion-thumnail img {\n  -o-object-fit: contain;\n     object-fit: contain;\n  -o-object-position: center;\n     object-position: center;\n}\n\n.asc {\n  background-color: var(--ion-color-primary);\n}\n\n.asc button {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0t3aWtfTWVyY2hhbnQvc3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENBO0VBQ0ksMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDRUo7O0FEREk7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0FDR1I7O0FEQUE7RUFDSSwrQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFDSSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNLSjs7QURIQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURKQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNPSjs7QURMQTtFQUNJLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNRSjs7QUROQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDU0o7O0FEUkk7RUFDSSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsMEJBQUE7S0FBQSx1QkFBQTtBQ1VSOztBRFBBO0VBS0ksMENBQUE7QUNNSjs7QURWSTtFQUNJLCtCQUFBO0FDWVIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czoxMHB4IDEwcHggMHB4IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg4MGZmO1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggIzM4ODFmMztcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuaW9uLXNsaWRlcyB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50IDtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG59XG5pb24tc2VsZWN0e1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4ubG9hZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNDAlO1xufVxuLmJvZHl7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5idXR0b25ze1xuICAgIHBhZGRpbmctdG9wOiA2MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG59XG4uaW1hZ2V7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIGZsb2F0OiByaWdodDtcbn1cbmlvbi10aHVtbmFpbHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgaW1ne1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICB9XG59XG4uYXNje1xuICAgIGJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbiIsImlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODgwZmY7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4ICMzODgxZjM7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbmlvbi1zbGlkZXMge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5pb24tc2xpZGVzIGltZyB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmxvYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDAlO1xufVxuXG4uYm9keSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5idXR0b25zIHtcbiAgcGFkZGluZy10b3A6IDYwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjFlbTtcbn1cblxuLmltYWdlIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuaW9uLXRodW1uYWlsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbmlvbi10aHVtbmFpbCBpbWcge1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmFzYyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5hc2MgYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */"

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



















let ProductsPage = class ProductsPage {
    constructor(navCtrl, service, asc, scannner, http, db, camera, formBuilder, modal, upload, file, loader, load, storage, ref, webview, fs, imagePicker, cropService, fileChooser) {
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
        // variables
        this.type = true;
        this.existing = false;
        this.newProduct = false;
        this.value = '';
        this.scannedcode = '';
        this.image = '';
        this.images = [];
        this.service.hiddenTabs = true;
        this.productForm = formBuilder.group({
            productName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            barcode: [this.scannedcode],
            category: [this.value, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            unit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('[a-zA-Z ]*')])],
            status: [''],
        });
        this.service.getallcategories(this.db.getshopname()).valueChanges().subscribe(res => {
            this.categories = res;
        });
        this.shop = this.db.getshopname();
        this.getproducts();
    }
    getproducts() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.fs.collection(this.shop).valueChanges().subscribe(res => {
                console.log(res);
                this.products = res;
                this.unfilteredProducts = res;
            });
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
        console.log(this.productForm.value);
        this.productForm.reset();
        this.category = '';
        this.Toast('uploading...');
        this.upload.presentToast('Product upload successful');
    }
    scan() {
        this.scannner.scan().then(code => {
            if (code.cancelled) {
                return;
            }
            this.scannedcode = code.toString();
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
                text: this.categories.categories[index].name,
                // icon: this.Allcategories[index].icon,
                handler: () => {
                    console.log('button text ' + this.categories.categories[index].name);
                    this.value = this.categories.categories[index].name;
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
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_18__["FileChooser"] }
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
        _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_18__["FileChooser"]])
], ProductsPage);



/***/ }),

/***/ "./src/app/upload/upload.service.ts":
/*!******************************************!*\
  !*** ./src/app/upload/upload.service.ts ***!
  \******************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");









let UploadService = class UploadService {
    constructor(navCtrl, asc, http, 
    // private camera: Camera,
    upload, file, toast, load, 
    // private storage: Storage,
    // private ref: ChangeDetectorRef,
    webview, Firestorage, db) {
        this.navCtrl = navCtrl;
        this.asc = asc;
        this.http = http;
        this.upload = upload;
        this.file = file;
        this.toast = toast;
        this.load = load;
        this.webview = webview;
        this.Firestorage = Firestorage;
        this.db = db;
    }
    presentToast(text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toasted = yield this.toast.create({
                message: text,
                duration: 2000,
                position: "bottom"
            });
            yield toasted.present();
        });
    }
    uploadImage(imageURI) {
        return new Promise((resolve, reject) => {
            let storageRef = this.Firestorage.storage.ref();
            let imageRef = storageRef.child('image').child('imageName');
            this.encodeImageUri(imageURI, function (image64) {
                imageRef.putString(image64, 'data_url')
                    .then(snapshot => {
                    resolve(snapshot.downloadURL);
                    alert(snapshot.downloadURL);
                }, err => {
                    reject(err);
                });
            });
        });
    }
    encodeImageUri(imageUri, callback) {
        var c = document.createElement('canvas');
        var ctx = c.getContext("2d");
        var img = new Image();
        img.onload = function () {
            var aux = this;
            c.width = aux.width;
            c.height = aux.height;
            ctx.drawImage(img, 0, 0);
            var dataURL = c.toDataURL("image/jpeg");
            callback(dataURL);
        };
        img.src = imageUri;
    }
    ;
};
UploadService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: UploadService },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_3__["WebView"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_8__["DatabaseService"] }
];
UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        UploadService,
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_3__["WebView"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"],
        _database_service__WEBPACK_IMPORTED_MODULE_8__["DatabaseService"]])
], UploadService);



/***/ })

}]);
//# sourceMappingURL=products-products-module-es2015.js.map