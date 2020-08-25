(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productmodal-productmodal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/productmodal/productmodal.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/productmodal/productmodal.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content color=\"primary\" style=\"background-color: var(--ion-color-primary);\">\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-icon style=\"width: 20px; height: 20px; margin-left: 5px;\" name=\"arrow-back\" (click)=\"back()\">\n            </ion-icon>\n        </ion-buttons>\n\n        <!-- <ion-buttons slot=\"end\">\n            <ion-icon style=\"width: 20px; height: 20px; padding-right: 5px;\" name=\"trash\" (click)=\"confirmDelete(product.id)\"></ion-icon>\n        </ion-buttons> -->\n\n        <!-- <ion-buttons slot=\"end\" (click)=\"edit = true\" *ngIf=\"edit == false\">\n            <ion-icon style=\"width: 20px; height: 20px; margin-right: 5px;\" name=\"create\"></ion-icon>\n        </ion-buttons>\n\n        <ion-buttons slot=\"end\"(click)=\"edit = false\" *ngIf=\"edit == true\" >\n            <ion-icon style=\"width: 20px; height: 20px; margin-right: 5px;\" name=\"close\"></ion-icon>\n        </ion-buttons> -->\n        <ion-buttons *ngIf=\"product !== undefined\">\n            <ion-title class=\"ion-text-center\" *ngIf=\"product.product !== null\">{{product.product}}</ion-title>\n            <ion-title class=\"ion-text-center\" *ngIf=\"product.Meal !== undefined\">{{product.Meal}}</ion-title>\n        </ion-buttons>\n\n    </ion-toolbar>\n\n\n\n\n\n    <div class=\"body\">\n        <div style=\"margin-top: 40%;text-align: center;\" *ngIf=\"!view\">\n            <ion-spinner name=\"circles\" color=\"primary\"></ion-spinner>\n        </div>\n\n        <div *ngIf=\"view\">\n            <form [formGroup]=\"productForm\">\n\n                <!--    <ion-row style=\"margin-left: 10px; margin-top: 20px;\">\n                    <div style=\"font-size: 17px; color: var(--ion-color-primary);\">\n                        Click on image to change\n                    </div>\n\n                    <div style=\"position: absolute; float: right; right: 0px; margin-right: 15px; font-size: 13px;\">\n                        <img class=\"image\" style=\"width: 35px; height: 35px; margin-top: -5px;\" alt=\"image\" [src]=\"product.image\" (click)=\"imageupdate()\">\n                    </div>\n                </ion-row>\n\n                <ion-row style=\"margin-top: 20px; margin-left: 5px; margin-right: 10px;\">\n                    <ion-col>\n                        <ion-label style=\"font-size: 14px; color: #737373;\">Product Name :</ion-label>\n                    </ion-col>\n                    <ion-col style=\"text-align:right\">\n                        <ion-label style=\"font-size: 14px; color: #737373;\" *ngIf=\"!edit\">{{product.product}}</ion-label>\n                        <ion-input style=\"font-size: 14px; color: #737373;\" type=\"text\" formControlName=\"product\" value=\"{{product.product}}\" *ngIf=\"edit\"></ion-input>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row style=\"margin-top: 5px; margin-left: 5px; margin-right: 10px;\">\n                    <ion-col>\n                        <ion-label style=\"font-size: 14px; color: #737373;\">Product Barcode :</ion-label>\n                    </ion-col>\n                    <ion-col style=\"text-align:right\">\n                        <ion-label style=\"font-size: 14px; color: #737373;\" *ngIf=\"!edit\">{{product.barcode}}</ion-label>\n                        <ion-input style=\"font-size: 14px; color: #737373;\" type=\"text\" formControlName=\"barcode\" value=\"{{product.barcode}}\" *ngIf=\"edit\"></ion-input>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row style=\"margin-top: 1px; margin-left: 5px; margin-right: 10px;\">\n                    <ion-col>\n                        <ion-label style=\"font-size: 14px; color: #737373;\">Product Category :</ion-label>\n                    </ion-col>\n                    <ion-col style=\"text-align:right\">\n                        <ion-label style=\"font-size: 14px; color: #737373;\" *ngIf=\"!edit\">{{product.category}}</ion-label>\n                        <ion-select style=\"font-size: 14px; color: #737373;\" formControlName=\"category\" *ngIf=\"edit\" placeholder=\"{{product.category}}\">\n                        <ion-select-option style=\"font-size: 14px; color: #737373;\" *ngFor=\"let item of category.categories\">{{item.name}}</ion-select-option>\n                        </ion-select>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row style=\"margin-top: 5px; margin-left: 5px; margin-right: 10px;\">\n                    <ion-col>\n                        <ion-label style=\"font-size: 14px; color: #737373;\">Available Stock :</ion-label>\n                    </ion-col>\n                    <ion-col style=\"text-align:right\">\n                        <ion-label style=\"font-size: 14px; color: #737373;\" *ngIf=\"!edit\">{{product.stock}}</ion-label>\n                        <ion-input style=\"font-size: 14px; color: #737373;\" type=\"text\" formControlName=\"stock\" value=\"{{product.stock}}\"*ngIf=\"edit\"></ion-input>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row style=\"margin-top: 5px; margin-left: 5px; margin-right: 10px;\">\n                    <ion-col>\n                        <ion-label style=\"font-size: 14px; color: #737373;\">Product Unit :</ion-label>\n                    </ion-col>\n                    <ion-col style=\"text-align:right\">\n                        <ion-label style=\"font-size: 14px; color: #737373;\" *ngIf=\"!edit\">{{product.quantity}}</ion-label>\n                        <ion-input style=\"font-size: 14px; color: #737373;\" type=\"text\" formControlName=\"quantity\" value=\"{{product.quantity}}\"*ngIf=\"edit\"></ion-input>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row style=\"margin-top: 5px; margin-left: 5px; margin-right: 10px;\">\n                    <ion-col>\n                        <ion-label style=\"font-size: 14px; color: #737373;\">Product Price :</ion-label>\n                    </ion-col>\n                    <ion-col style=\"text-align:right\">\n                        <ion-label style=\"font-size: 14px; color: #737373;\" *ngIf=\"!edit\">{{product.currentprice}}</ion-label>\n                        <ion-input style=\"font-size: 14px; color: #737373;\" type=\"text\" formControlName=\"currentprice\" value=\"{{product.currentprice}}\"*ngIf=\"edit\"></ion-input>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row style=\"margin-top: 5px; margin-left: 5px; margin-right: 10px;\">\n                    <ion-col size=\"12\">\n                        <ion-label style=\"font-size: 14px; color: #737373;\">Product Description :</ion-label>\n                    </ion-col>\n                    <ion-col size=\"12\" style=\"margin-left: 10px; margin-right: 10px; font-size: 12px; color: #737373;\">\n                        <ion-label *ngIf=\"!edit\">{{product.description}}</ion-label>\n                        <div style=\"margin-right: 20px;\">\n                            <textarea type=\"text\" style=\"margin-right: 40px;\" rows=\"6\" formControlName=\"description\" value=\"{{product.description}}\"*ngIf=\"edit\"></textarea>\n                        </div>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row style=\"margin-top: 5px; margin-left: 5px; margin-right: 10px;\">\n                    <ion-col>\n                        <ion-label style=\"font-size: 14px; color: #737373;\">Product status :</ion-label>\n                    </ion-col>\n                    <ion-col style=\"text-align:right\">\n                        <ion-label style=\"font-size: 14px; color: #737373;\" *ngIf=\"!edit\">{{product.status}}</ion-label>\n                        <ion-select style=\"font-size: 14px; color: #737373;\" formControlName=\"status\" *ngIf=\"edit\" placeholder=\"{{product.status}}\">\n                        <ion-select-option checked style=\"font-size: 14px; color: #737373;\">Available</ion-select-option>\n                        <ion-select-option style=\"font-size: 14px; color: #737373;\">Unavailable</ion-select-option>\n                        </ion-select>\n                    </ion-col>\n                </ion-row>\n\n                <div style=\"margin-left: 8px; margin-right: 10px;\">\n                    <ion-button style=\"font-size: 13px; margin-bottom: 10px;\" disabled expand=\"full\" style=\"margin-top: 50px;\" [disabled]=\"!edit\" (click)=\"saveChanges(product.id)\">\n                        Save Changes\n                    </ion-button>\n                </div>  -->\n\n                <div style=\"padding-left: 40px;padding-right:40px ;padding-top: 20px;\">\n                    <img [src]=\"product.image\" width=\"100%\" alt=\"product image\" height=\"200px\"\n                        *ngIf=\"product.image !== undefined\">\n                    <img src=\"../../assets/images/image-placeholder.png\" width=\"100%\" alt=\"product image\" height=\"200px\"\n                        *ngIf=\"product.image === undefined\">\n                </div>\n                <div class=\"details\">\n                    <ion-item>\n                        <ion-col size=\"3\" class=\"ion-text-left\">\n                            <ion-label>Product</ion-label>\n                        </ion-col>\n                        <ion-col class=\"ion-text-center\">\n                            <ion-input *ngIf=\"product.Meal !== undefined \" [readonly]=\"!edit\" formControlName=\"product\"\n                                value=\"{{product.Meal}}\"></ion-input>\n                            <ion-input *ngIf=\"product.product !== null\" [readonly]=\"!edit\" formControlName=\"product\"\n                                value=\"{{product.product}}\"></ion-input>\n                        </ion-col>\n                    </ion-item>\n                    <ion-item>\n                        <ion-col size=\"3\" class=\"ion-text-left\">\n                            <ion-label>Category</ion-label>\n                        </ion-col>\n                        <ion-col class=\"ion-text-center\">\n                            <ion-input *ngIf=\"!edit\" readonly formControlName=\"category\" value=\"{{product.category}}\">\n                            </ion-input>\n                            <ion-select style=\"font-size: 14px; color: #737373;\" formControlName=\"category\" *ngIf=\"edit\"\n                                placeholder=\"{{product.category}}\">\n                                <ion-select-option style=\"font-size: 14px; color: #737373;\"\n                                    *ngFor=\"let item of category.categories\">{{item}}</ion-select-option>\n                            </ion-select>\n                        </ion-col>\n                    </ion-item>\n                    <ion-item>\n                        <ion-col size=\"3\" class=\"ion-text-left\">\n                            <ion-label>Quantity</ion-label>\n                        </ion-col>\n                        <ion-col class=\"ion-text-center\">\n                            <ion-input [readonly]=\"!edit\" formControlName=\"quantity\" value=\"{{product.quantity}}\">\n                            </ion-input>\n                        </ion-col>\n                    </ion-item>\n                    <ion-item>\n                        <ion-col size=\"3\" class=\"ion-text-left\">\n                            <ion-label>Price</ion-label>\n                        </ion-col>\n                        <ion-col class=\"ion-text-center\">\n                            <ion-input [readonly]=\"!edit\" formControlName=\"currentprice\"\n                                value=\"{{product.currentprice}}\"></ion-input>\n                        </ion-col>\n                    </ion-item>\n                    <ion-item>\n                        <ion-col size=\"3\" class=\"ion-text-left\">\n                            <ion-label>Description</ion-label>\n                        </ion-col>\n                        <ion-col class=\"ion-text-center\">\n                            <textarea [readonly]=\"!edit\" formControlName=\"description\" value=\"{{product.description}}\"\n                                rows=\"7\"></textarea>\n                        </ion-col>\n                    </ion-item>\n                </div>\n                <div style=\"position: fixed;bottom: 10px;width: 100%;\">\n                    <ion-button *ngIf=\"!edit\" expand=\"full\" (click)=\"edit = true\">\n                        Edit\n                    </ion-button>\n                    <ion-button *ngIf=\"edit\" expand=\"full\" shape=\"block\" (click)=\"saveChanges(product.id)\">\n                        Save Changes\n                    </ion-button>\n                </div>\n            </form>\n        </div>\n    </div>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _productmodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productmodal.page */ "./src/app/productmodal/productmodal.page.ts");







var routes = [
    {
        path: '',
        component: _productmodal_page__WEBPACK_IMPORTED_MODULE_6__["ProductmodalPage"]
    }
];
var ProductmodalPageModule = /** @class */ (function () {
    function ProductmodalPageModule() {
    }
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
    return ProductmodalPageModule;
}());



/***/ }),

/***/ "./src/app/productmodal/productmodal.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/productmodal/productmodal.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n  color: var(--ion-color-medium);\n  background-color: white;\n  border-radius: 20px 20px 0px 0px;\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n  top: 100px;\n  overflow-y: scroll;\n}\n\n.title {\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.image {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 80%;\n  height: 80%;\n  float: right;\n}\n\n.right {\n  font-size: 2em;\n}\n\n.edits {\n  font-weight: bold;\n  color: var(--ion-color-secondary);\n}\n\n.create {\n  font-size: 1.9em;\n  padding-right: 10px;\n  padding-top: 10px;\n}\n\nion-input {\n  border: 1px solid var(--ion-color-medium);\n  width: 100%;\n}\n\nion-label {\n  padding-top: 10px;\n}\n\ntextarea {\n  border: 1px solid var(--ion-color-medium);\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0tXSUsvS3dpa19NZXJjaGFudC9zcmMvYXBwL3Byb2R1Y3Rtb2RhbC9wcm9kdWN0bW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9kdWN0bW9kYWwvcHJvZHVjdG1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0FDSUo7O0FERkE7RUFDSSxpQkFBQTtFQUNBLGlDQUFBO0FDS0o7O0FESEE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURKQTtFQUNJLHlDQUFBO0VBQ0EsV0FBQTtBQ09KOztBRExBO0VBQ0ksaUJBQUE7QUNRSjs7QUROQTtFQUNJLHlDQUFBO0VBQ0EsV0FBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdG1vZGFsL3Byb2R1Y3Rtb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHRvcDogMTAwcHg7XG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XG59XG4udGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLmltYWdle1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4ucmlnaHR7XG4gICAgZm9udC1zaXplOiAyLjBlbTtcbn1cbi5lZGl0cyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLmNyZWF0ZXtcbiAgICBmb250LXNpemU6IDEuOWVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5pb24taW5wdXR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5pb24tbGFiZWx7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG50ZXh0YXJlYXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICB3aWR0aDogMTAwJTtcbn0iLCIuYm9keSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgdG9wOiAxMDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4udGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uaW1hZ2Uge1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucmlnaHQge1xuICBmb250LXNpemU6IDJlbTtcbn1cblxuLmVkaXRzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLmNyZWF0ZSB7XG4gIGZvbnQtc2l6ZTogMS45ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5pb24taW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1sYWJlbCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG50ZXh0YXJlYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");








var ProductmodalPage = /** @class */ (function () {
    function ProductmodalPage(navCtrl, service, location, formBuilder, load, fs, alert) {
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
    ProductmodalPage.prototype.ngOnInit = function () {
    };
    ProductmodalPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // get product details
        this.product = this.service.getProduct();
        console.log('product -->' + this.product);
        this.view = true;
        // get categories 
        this.service.getallcategories(this.shop).valueChanges().subscribe(function (res) {
            _this.category = res;
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
    };
    ProductmodalPage.prototype.back = function () {
        if (this.edit == true) {
            this.alertShow('Would you like to save the changes you made');
        }
        else {
            this.location.back();
        }
    };
    ProductmodalPage.prototype.saveChanges = function (id) {
        var _this = this;
        console.log(this.productForm.value);
        this.edit = false;
        this.presentloading('updating product ...');
        var ref = this.fs.collection(this.shop).doc(id);
        var data = this.productForm.value;
        ref.update(data).then(function (res) {
            _this.loading.dismiss();
            console.log(res);
            _this.location.back();
        }).catch(function (error) {
            console.log(error);
        });
    };
    ProductmodalPage.prototype.deleteProduct = function (id) {
        var _this = this;
        this.presentloading('deleting product ...');
        this.fs.collection(this.shop).doc(id).delete().then(function (res) {
            _this.loading.dismiss();
            _this.location.back();
        }).catch(function (err) {
            console.log(err);
            _this.loading.dismiss();
        });
    };
    ProductmodalPage.prototype.presentloading = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.load.create({
                                message: msg,
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductmodalPage.prototype.alertShow = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alt;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            message: msg,
                            buttons: [
                                {
                                    text: 'No',
                                    handler: function () {
                                        _this.location.back();
                                    }
                                },
                                {
                                    text: 'Yes',
                                    handler: function () {
                                        _this.saveChanges(_this.product.id);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alt = _a.sent();
                        return [4 /*yield*/, alt.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductmodalPage.prototype.imageupdate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alt;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            message: 'Image Update is disabled for now',
                            buttons: [
                                {
                                    text: 'Close',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        alt = _a.sent();
                        return [4 /*yield*/, alt.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductmodalPage.prototype.confirmDelete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alt;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            message: 'Do you want to remove this product from Inventory ?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel'
                                },
                                {
                                    text: 'Yes',
                                    handler: function () {
                                        _this.deleteProduct(id);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alt = _a.sent();
                        return [4 /*yield*/, alt.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductmodalPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
    ]; };
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
    return ProductmodalPage;
}());



/***/ })

}]);
//# sourceMappingURL=productmodal-productmodal-module-es5.js.map