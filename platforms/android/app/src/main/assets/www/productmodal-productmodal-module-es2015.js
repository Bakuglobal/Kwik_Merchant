(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productmodal-productmodal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/productmodal/productmodal.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/productmodal/productmodal.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content color=\"primary\" style=\"background-color: var(--ion-color-primary);\">\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-icon style=\"width: 20px; height: 20px; margin-left: 5px;\" name=\"arrow-back\" (click)=\"back()\">\n            </ion-icon>\n        </ion-buttons>\n\n        <ion-buttons slot=\"end\">\n            <ion-icon style=\"width: 20px; height: 20px; padding-right: 5px;\" name=\"trash\" (click)=\"confirmDelete(product.id)\"></ion-icon>\n        </ion-buttons>\n\n        <!-- <ion-buttons slot=\"end\" (click)=\"edit = true\" *ngIf=\"edit == false\">\n            <ion-icon style=\"width: 20px; height: 20px; margin-right: 5px;\" name=\"create\"></ion-icon>\n        </ion-buttons>\n\n        <ion-buttons slot=\"end\"(click)=\"edit = false\" *ngIf=\"edit == true\" >\n            <ion-icon style=\"width: 20px; height: 20px; margin-right: 5px;\" name=\"close\"></ion-icon>\n        </ion-buttons> -->\n        <ion-buttons *ngIf=\"product !== undefined\">\n            <ion-title class=\"ion-text-center\" *ngIf=\"product.product !== null\">{{product.product}}</ion-title>\n            <ion-title class=\"ion-text-center\" *ngIf=\"product.Meal !== undefined\">{{product.Meal}}</ion-title>\n        </ion-buttons>\n\n    </ion-toolbar>\n\n\n\n\n\n    <div class=\"body\">\n        <div style=\"margin-top: 40%;text-align: center;\" *ngIf=\"!view\">\n            <ion-spinner name=\"circles\" color=\"primary\"></ion-spinner>\n        </div>\n\n        <div *ngIf=\"view\">\n            <form [formGroup]=\"productForm\">\n\n                <!--    <ion-row style=\"margin-left: 10px; margin-top: 20px;\">\n                    <div style=\"font-size: 17px; color: var(--ion-color-primary);\">\n                        Click on image to change\n                    </div>\n\n                    <div style=\"position: absolute; float: right; right: 0px; margin-right: 15px; font-size: 13px;\">\n                        <img class=\"image\" style=\"width: 35px; height: 35px; margin-top: -5px;\" alt=\"image\" [src]=\"product.image\" (click)=\"imageupdate()\">\n                    </div>\n                </ion-row>\n\n                <ion-row style=\"margin-top: 20px; margin-left: 5px; margin-right: 10px;\">\n                    <ion-col>\n                        <ion-label style=\"font-size: 14px; color: #737373;\">Product Name :</ion-label>\n                    </ion-col>\n                    <ion-col style=\"text-align:right\">\n                        <ion-label style=\"font-size: 14px; color: #737373;\" *ngIf=\"!edit\">{{product.product}}</ion-label>\n                        <ion-input style=\"font-size: 14px; color: #737373;\" type=\"text\" formControlName=\"product\" value=\"{{product.product}}\" *ngIf=\"edit\"></ion-input>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row style=\"margin-top: 5px; margin-left: 5px; margin-right: 10px;\">\n                    <ion-col>\n                        <ion-label style=\"font-size: 14px; color: #737373;\">Product Barcode :</ion-label>\n                    </ion-col>\n                    <ion-col style=\"text-align:right\">\n                        <ion-label style=\"font-size: 14px; color: #737373;\" *ngIf=\"!edit\">{{product.barcode}}</ion-label>\n                        <ion-input style=\"font-size: 14px; color: #737373;\" type=\"text\" formControlName=\"barcode\" value=\"{{product.barcode}}\" *ngIf=\"edit\"></ion-input>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row style=\"margin-top: 1px; margin-left: 5px; margin-right: 10px;\">\n                    <ion-col>\n                        <ion-label style=\"font-size: 14px; color: #737373;\">Product Category :</ion-label>\n                    </ion-col>\n                    <ion-col style=\"text-align:right\">\n                        <ion-label style=\"font-size: 14px; color: #737373;\" *ngIf=\"!edit\">{{product.category}}</ion-label>\n                        <ion-select style=\"font-size: 14px; color: #737373;\" formControlName=\"category\" *ngIf=\"edit\" placeholder=\"{{product.category}}\">\n                        <ion-select-option style=\"font-size: 14px; color: #737373;\" *ngFor=\"let item of category.categories\">{{item.name}}</ion-select-option>\n                        </ion-select>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row style=\"margin-top: 5px; margin-left: 5px; margin-right: 10px;\">\n                    <ion-col>\n                        <ion-label style=\"font-size: 14px; color: #737373;\">Available Stock :</ion-label>\n                    </ion-col>\n                    <ion-col style=\"text-align:right\">\n                        <ion-label style=\"font-size: 14px; color: #737373;\" *ngIf=\"!edit\">{{product.stock}}</ion-label>\n                        <ion-input style=\"font-size: 14px; color: #737373;\" type=\"text\" formControlName=\"stock\" value=\"{{product.stock}}\"*ngIf=\"edit\"></ion-input>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row style=\"margin-top: 5px; margin-left: 5px; margin-right: 10px;\">\n                    <ion-col>\n                        <ion-label style=\"font-size: 14px; color: #737373;\">Product Unit :</ion-label>\n                    </ion-col>\n                    <ion-col style=\"text-align:right\">\n                        <ion-label style=\"font-size: 14px; color: #737373;\" *ngIf=\"!edit\">{{product.quantity}}</ion-label>\n                        <ion-input style=\"font-size: 14px; color: #737373;\" type=\"text\" formControlName=\"quantity\" value=\"{{product.quantity}}\"*ngIf=\"edit\"></ion-input>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row style=\"margin-top: 5px; margin-left: 5px; margin-right: 10px;\">\n                    <ion-col>\n                        <ion-label style=\"font-size: 14px; color: #737373;\">Product Price :</ion-label>\n                    </ion-col>\n                    <ion-col style=\"text-align:right\">\n                        <ion-label style=\"font-size: 14px; color: #737373;\" *ngIf=\"!edit\">{{product.currentprice}}</ion-label>\n                        <ion-input style=\"font-size: 14px; color: #737373;\" type=\"text\" formControlName=\"currentprice\" value=\"{{product.currentprice}}\"*ngIf=\"edit\"></ion-input>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row style=\"margin-top: 5px; margin-left: 5px; margin-right: 10px;\">\n                    <ion-col size=\"12\">\n                        <ion-label style=\"font-size: 14px; color: #737373;\">Product Description :</ion-label>\n                    </ion-col>\n                    <ion-col size=\"12\" style=\"margin-left: 10px; margin-right: 10px; font-size: 12px; color: #737373;\">\n                        <ion-label *ngIf=\"!edit\">{{product.description}}</ion-label>\n                        <div style=\"margin-right: 20px;\">\n                            <textarea type=\"text\" style=\"margin-right: 40px;\" rows=\"6\" formControlName=\"description\" value=\"{{product.description}}\"*ngIf=\"edit\"></textarea>\n                        </div>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row style=\"margin-top: 5px; margin-left: 5px; margin-right: 10px;\">\n                    <ion-col>\n                        <ion-label style=\"font-size: 14px; color: #737373;\">Product status :</ion-label>\n                    </ion-col>\n                    <ion-col style=\"text-align:right\">\n                        <ion-label style=\"font-size: 14px; color: #737373;\" *ngIf=\"!edit\">{{product.status}}</ion-label>\n                        <ion-select style=\"font-size: 14px; color: #737373;\" formControlName=\"status\" *ngIf=\"edit\" placeholder=\"{{product.status}}\">\n                        <ion-select-option checked style=\"font-size: 14px; color: #737373;\">Available</ion-select-option>\n                        <ion-select-option style=\"font-size: 14px; color: #737373;\">Unavailable</ion-select-option>\n                        </ion-select>\n                    </ion-col>\n                </ion-row>\n\n                <div style=\"margin-left: 8px; margin-right: 10px;\">\n                    <ion-button style=\"font-size: 13px; margin-bottom: 10px;\" disabled expand=\"full\" style=\"margin-top: 50px;\" [disabled]=\"!edit\" (click)=\"saveChanges(product.id)\">\n                        Save Changes\n                    </ion-button>\n                </div>  -->\n\n                <div style=\"padding-left: 40px;padding-right:40px ;padding-top: 20px;\">\n                    <img [src]=\"product.image\" width=\"100%\" alt=\"product image\" height=\"200px\"\n                        *ngIf=\"product.image !== undefined\">\n                    <img src=\"../../assets/images/image-placeholder.png\" width=\"100%\" alt=\"product image\" height=\"200px\"\n                        *ngIf=\"product.image === undefined\">\n                </div>\n                <div class=\"details\">\n                    <ion-item>\n                        <ion-col size=\"3\" class=\"ion-text-left\">\n                            <ion-label>Product</ion-label>\n                        </ion-col>\n                        <ion-col class=\"ion-text-center\">\n                            <ion-input *ngIf=\"product.Meal !== undefined \" [readonly]=\"!edit\" formControlName=\"product\"\n                                value=\"{{product.Meal}}\"></ion-input>\n                            <ion-input *ngIf=\"product.product !== null\" [readonly]=\"!edit\" formControlName=\"product\"\n                                value=\"{{product.product}}\"></ion-input>\n                        </ion-col>\n                    </ion-item>\n                    <ion-item>\n                        <ion-col size=\"3\" class=\"ion-text-left\">\n                            <ion-label>Category</ion-label>\n                        </ion-col>\n                        <ion-col class=\"ion-text-center\">\n                            <ion-input *ngIf=\"!edit\" readonly formControlName=\"category\" value=\"{{product.category}}\">\n                            </ion-input>\n                            <ion-select style=\"font-size: 14px; color: #737373;\" formControlName=\"category\" *ngIf=\"edit\"\n                                placeholder=\"{{product.category}}\">\n                                <ion-select-option style=\"font-size: 14px; color: #737373;\"\n                                    *ngFor=\"let item of category.categories\">{{item}}</ion-select-option>\n                            </ion-select>\n                        </ion-col>\n                    </ion-item>\n                    <ion-item>\n                        <ion-col size=\"3\" class=\"ion-text-left\">\n                            <ion-label>Quantity</ion-label>\n                        </ion-col>\n                        <ion-col class=\"ion-text-center\">\n                            <ion-input [readonly]=\"!edit\" formControlName=\"quantity\" value=\"{{product.quantity}}\">\n                            </ion-input>\n                        </ion-col>\n                    </ion-item>\n                    <ion-item>\n                        <ion-col size=\"3\" class=\"ion-text-left\">\n                            <ion-label>Price</ion-label>\n                        </ion-col>\n                        <ion-col class=\"ion-text-center\">\n                            <ion-input [readonly]=\"!edit\" formControlName=\"currentprice\"\n                                value=\"{{product.currentprice}}\"></ion-input>\n                        </ion-col>\n                    </ion-item>\n                    <ion-item>\n                        <ion-col size=\"3\" class=\"ion-text-left\">\n                            <ion-label>Description</ion-label>\n                        </ion-col>\n                        <ion-col class=\"ion-text-center\">\n                            <textarea [readonly]=\"!edit\" formControlName=\"description\" value=\"{{product.description}}\"\n                                rows=\"7\"></textarea>\n                        </ion-col>\n                    </ion-item>\n                </div>\n                <div style=\"position: fixed;bottom: 10px;width: 100%;\">\n                    <ion-button *ngIf=\"!edit\" expand=\"full\" (click)=\"edit = true\">\n                        Edit\n                    </ion-button>\n                    <ion-button *ngIf=\"edit\" expand=\"full\" shape=\"block\" (click)=\"saveChanges(product.id)\">\n                        Save Changes\n                    </ion-button>\n                </div>\n            </form>\n        </div>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/productmodal/productmodal.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/productmodal/productmodal.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductmodalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductmodalPageModule", function() { return ProductmodalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _productmodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productmodal.page */ "./src/app/productmodal/productmodal.page.ts");







const routes = [
    {
        path: '',
        component: _productmodal_page__WEBPACK_IMPORTED_MODULE_6__["ProductmodalPage"]
    }
];
let ProductmodalPageModule = class ProductmodalPageModule {
};
ProductmodalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_productmodal_page__WEBPACK_IMPORTED_MODULE_6__["ProductmodalPage"]]
    })
], ProductmodalPageModule);



/***/ }),

/***/ "./src/app/productmodal/productmodal.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/productmodal/productmodal.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n  color: var(--ion-color-medium);\n  background-color: white;\n  border-radius: 20px 20px 0px 0px;\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n  top: 100px;\n  overflow-y: scroll;\n}\n\n.title {\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.image {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 80%;\n  height: 80%;\n  float: right;\n}\n\n.right {\n  font-size: 2em;\n}\n\n.edits {\n  font-weight: bold;\n  color: var(--ion-color-secondary);\n}\n\n.create {\n  font-size: 1.9em;\n  padding-right: 10px;\n  padding-top: 10px;\n}\n\nion-input {\n  border: 1px solid var(--ion-color-medium);\n  width: 100%;\n}\n\nion-label {\n  padding-top: 10px;\n}\n\ntextarea {\n  border: 1px solid var(--ion-color-medium);\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0tXSUsvQW5kL0t3aWtfTWVyY2hhbnQvc3JjL2FwcC9wcm9kdWN0bW9kYWwvcHJvZHVjdG1vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZHVjdG1vZGFsL3Byb2R1Y3Rtb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0ksc0JBQUE7S0FBQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0ksY0FBQTtBQ0lKOztBREZBO0VBQ0ksaUJBQUE7RUFDQSxpQ0FBQTtBQ0tKOztBREhBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDTUo7O0FESkE7RUFDSSx5Q0FBQTtFQUNBLFdBQUE7QUNPSjs7QURMQTtFQUNJLGlCQUFBO0FDUUo7O0FETkE7RUFDSSx5Q0FBQTtFQUNBLFdBQUE7QUNTSiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Rtb2RhbC9wcm9kdWN0bW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICB0b3A6IDEwMHB4O1xuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xufVxuLnRpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5pbWFnZXtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLnJpZ2h0e1xuICAgIGZvbnQtc2l6ZTogMi4wZW07XG59XG4uZWRpdHMge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5jcmVhdGV7XG4gICAgZm9udC1zaXplOiAxLjllbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuaW9uLWlucHV0e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuaW9uLWxhYmVse1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxudGV4dGFyZWF7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgd2lkdGg6IDEwMCU7XG59IiwiLmJvZHkge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHRvcDogMTAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmltYWdlIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnJpZ2h0IHtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbi5lZGl0cyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5jcmVhdGUge1xuICBmb250LXNpemU6IDEuOWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tbGFiZWwge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxudGV4dGFyZWEge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/productmodal/productmodal.page.ts":
/*!***************************************************!*\
  !*** ./src/app/productmodal/productmodal.page.ts ***!
  \***************************************************/
/*! exports provided: ProductmodalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductmodalPage", function() { return ProductmodalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");








let ProductmodalPage = class ProductmodalPage {
    constructor(navCtrl, service, location, formBuilder, load, fs, alert) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.location = location;
        this.formBuilder = formBuilder;
        this.load = load;
        this.fs = fs;
        this.alert = alert;
        this.view = false;
        this.edit = false;
        this.service.hiddenTabs = true;
        this.shop = localStorage.getItem('shop');
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        // get product details
        this.product = this.service.getProduct();
        console.log('product -->' + this.product);
        this.view = true;
        // get categories 
        this.service.getallcategories(this.shop).valueChanges().subscribe(res => {
            this.category = res;
        });
        this.productForm = this.formBuilder.group({
            product: [this.product.product],
            description: [this.product.description],
            currentprice: [this.product.currentprice],
            status: [this.product.status],
            quantity: [this.product.quantity],
            stock: [this.product.stock],
            barcode: [this.product.barcode],
            category: [this.product.category]
        });
    }
    back() {
        if (this.edit == true) {
            this.alertShow('Would you like to save the changes you made');
        }
        else {
            this.location.back();
        }
    }
    saveChanges(id) {
        console.log(this.productForm.value);
        this.edit = false;
        this.presentloading('updating product ...');
        const ref = this.fs.collection(this.shop).doc(id);
        let data = this.productForm.value;
        ref.update(data).then(res => {
            this.loading.dismiss();
            console.log(res);
            this.location.back();
        }).catch(error => {
            console.log(error);
        });
    }
    deleteProduct(id) {
        this.presentloading('deleting product ...');
        this.fs.collection(this.shop).doc(id).delete().then(res => {
            this.loading.dismiss();
            this.location.back();
        }).catch(err => {
            console.log(err);
            this.loading.dismiss();
        });
    }
    presentloading(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.load.create({
                message: msg,
            });
            yield this.loading.present();
        });
    }
    alertShow(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alt = yield this.alert.create({
                message: msg,
                buttons: [
                    {
                        text: 'No',
                        handler: () => {
                            this.location.back();
                        }
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            this.saveChanges(this.product.id);
                        }
                    }
                ]
            });
            yield alt.present();
        });
    }
    imageupdate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alt = yield this.alert.create({
                message: 'Image Update is disabled for now',
                buttons: [
                    {
                        text: 'Close',
                        role: 'cancel'
                    }
                ]
            });
            yield alt.present();
        });
    }
    confirmDelete(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alt = yield this.alert.create({
                message: 'Do you want to remove this product from Inventory ?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel'
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            this.deleteProduct(id);
                        }
                    }
                ]
            });
            yield alt.present();
        });
    }
};
ProductmodalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
ProductmodalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-productmodal',
        template: __webpack_require__(/*! raw-loader!./productmodal.page.html */ "./node_modules/raw-loader/index.js!./src/app/productmodal/productmodal.page.html"),
        styles: [__webpack_require__(/*! ./productmodal.page.scss */ "./src/app/productmodal/productmodal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
], ProductmodalPage);



/***/ })

}]);
//# sourceMappingURL=productmodal-productmodal-module-es2015.js.map