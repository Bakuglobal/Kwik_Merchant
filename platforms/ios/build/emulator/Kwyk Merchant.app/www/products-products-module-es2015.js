(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content color=\"primary\">\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-icon style=\"width: 20px; height: 20px; margin-left: 5px;\" name=\"arrow-back\" (click)=\"back()\">\n            </ion-icon>\n        </ion-buttons>\n        <ion-title text-center style=\"margin-right: 15px;\">Add to stock</ion-title>\n    </ion-toolbar>\n\n\n    <div class=\"card-main\" style=\"background-color: white;\" *ngIf=\"type\">\n\n        <div class=\"buttons\">\n            <ion-button expand=\"full\" (click)=\"addNewProduct()\">New Product</ion-button><br>\n            <ion-button expand=\"full\" (click)=\"existingProduct()\">Existing Product</ion-button><br>\n            <ion-button expand=\"full\" (click)=\"categoryModal()\">New Category</ion-button>\n        </div>\n    </div>\n\n    <!-- EXISTING PRODUCT -->\n    <div class=\"body\" *ngIf=\"existing\">\n        <ion-buttons slot=\"start\" style=\"padding-top: 10px; margin-bottom: 5px;\">\n            <ion-button (click)=\"close()\">\n                <ion-icon size=\"small\" style=\"width: 20px; height: 20px;\" color=\"primary\" name=\"close\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-row no-padding text-center>\n            <ion-col>\n                <ion-label style=\"font-size: 15px;\" class=\"title\">Choose category to filter</ion-label>\n                <!-- <ion-select placeholder=\"category\" [(ngModel)]=\"category\" (ionChange)=\"setFilteredItems()\">\n                <ion-select-option style=\"font-size: 13px;\" *ngFor=\"let item of categories.categories\">{{item}}</ion-select-option>\n                </ion-select> -->\n                <ion-icon style=\"width: 20px; height: 20px; margin-right: 5px;\" name=\"pricetags\" class=\"image\"\n                    color=\"primary\"></ion-icon>\n            </ion-col>\n            <!-- <ion-col size=\"4\">\n                <ion-icon style=\"width: 20px; height: 20px; margin-right: 5px;\" name=\"pricetags\" class=\"image\" color=\"primary\"></ion-icon>\n            </ion-col> -->\n        </ion-row>\n        <ion-row>\n            <ion-segment scrollable [(ngModel)]=\"category\" (ionChange)=\"setFilteredItems()\">\n                <ion-segment-button selected value=\"\">\n                    <ion-label style=\"font-size: 12px;\">All</ion-label>\n                </ion-segment-button>\n                <ion-segment-button value=\"{{item}}\" *ngFor=\"let item of categories.categories\">\n                    <ion-label style=\"font-size: 12px;\">{{item}}</ion-label>\n                </ion-segment-button>\n            </ion-segment>\n        </ion-row>\n        <ion-item *ngIf=\"category != null\">\n            <ion-input style=\"font-size: 15px;\" type=\"text\" clearInput placeholder=\"Enter product name\"></ion-input>\n            <ion-icon style=\"width: 20px; height: 20px;\" name=\"search\" slot=\"end\"></ion-icon>\n        </ion-item>\n\n        <!-- RESTAURANT -->\n        <div *ngIf=\"shopType === 'food'\">\n            <ion-item no-padding text-center\n                style=\"background-color: #dedede; color: var(--ion-color-primary); font-size: 15px;\">\n                <ion-col size=\"9\" style=\"text-align: left; margin-left: 10px;\">\n                    Meal\n                </ion-col>\n                <ion-col size=\"3\" style=\"text-align: right; padding-right: 10px;\">\n                    Price\n                </ion-col>\n            </ion-item>\n            <ion-item no-padding text-center (click)=\"viewProduct(item)\" *ngFor=\"let item of products\"\n                style=\"font-size: 13px; color: #737373; \">\n                <ion-col size=\"9\" style=\"text-align: left; margin-left: 10px;\">\n                    {{item.Meal}}\n                </ion-col>\n                <ion-col size=\"3\" style=\"text-align: right; padding-right: 10px;\">\n                    {{item.currentprice}}\n                </ion-col>\n            </ion-item>\n        </div>\n\n        <!-- RECIPES -->\n        <div *ngIf=\"shopType === 'recipes'\">\n            <ion-item no-padding text-center\n                style=\"background-color: #dedede; color: var(--ion-color-primary); font-size: 15px;\">\n                <ion-col size=\"3\">\n                    Icon\n                </ion-col>\n                <ion-col size=\"6\" style=\"text-align: left; padding-left: 5px;\">\n                    Recipe\n                </ion-col>\n                <ion-col size=\"3\" style=\"text-align: right; padding-right: 10px;\">\n                    Price\n                </ion-col>\n            </ion-item>\n            <ion-item no-padding text-center (click)=\"viewProduct(item)\" *ngFor=\"let item of products\"\n                style=\"font-size: 13px; color: #737373; \">\n                <ion-col text-center size=\"3\">\n                    <img [src]=\"item.image\" style=\"width: 75px; height: 50px;\">\n                </ion-col>\n                <ion-col size=\"6\" style=\"text-align: left; padding-left: 5px;\">\n                    {{item.recipe}}\n                </ion-col>\n                <ion-col size=\"3\" style=\"text-align: right; padding-right: 10px;\">\n                    {{item.currentprice}}\n                </ion-col>\n            </ion-item>\n        </div>\n\n        <!-- SHOP -->\n        <div *ngIf=\"shopType === 'Shops'\">\n            <ion-item no-padding text-center\n                style=\"background-color: #dedede; color: var(--ion-color-primary); font-size: 15px;\">\n                <ion-col size=\"2\">\n                    Icon\n                </ion-col>\n                <ion-col size=\"4\" style=\"text-align: left;\">\n                    Product\n                </ion-col>\n                <ion-col size=\"2\">\n                    Stock\n                </ion-col>\n                <ion-col size=\"2\">\n                    Units\n                </ion-col>\n                <ion-col size=\"2\">\n                    Price\n                </ion-col>\n            </ion-item>\n            <ion-item no-padding text-center (click)=\"viewProduct(item)\" *ngFor=\"let item of products\"\n                style=\"font-size: 13px; color: #737373; \">\n                <ion-col text-center size=\"2\">\n                    <img [src]=\"item.image\"  style=\"width: 75px; height: 50px;\">\n                </ion-col>\n                <ion-col size=\"4\" style=\"text-align: left;\">\n                    {{item.product}}\n                </ion-col>\n                <ion-col size=\"2\">\n                    {{item.stock}}\n                </ion-col>\n                <ion-col size=\"2\">\n                    {{item.quantity}}\n                </ion-col>\n                <ion-col size=\"2\">\n                    {{item.currentprice}}\n                </ion-col>\n            </ion-item>\n        </div><br><br>\n    </div>\n\n\n    <!-- NEW PRODUCT -->\n    <div *ngIf=\"newProduct\" class=\"body\">\n        <!-- RESTAURANT -->\n        <div *ngIf=\"shopType === 'food'\">\n            <ion-buttons slot=\"start\" style=\"padding-top: 10px; margin-bottom: 5px;\">\n                <ion-button (click)=\"close()\">\n                    <ion-icon size=\"small\" style=\"width: 20px; height: 20px;\" color=\"primary\" name=\"close\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n            <form (ngSubmit)=\"addRestaurant()\" [formGroup]=\"restaurantForm\" style=\"margin-right: 15px; margin-left: 15px;\">\n                <ion-list no-padding>\n                    <ion-item no-padding>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" type=\"text\" formControlName=\"Meal\"\n                            placeholder=\"Enter meal name\" required></ion-input>\n                    </ion-item>\n                    <ion-item no-padding (click)=\"selectCategory()\">\n                        <ion-label style=\"font-size: 13px; color: #737373;\">Select Category </ion-label>\n                        <ion-input style=\"font-size: 13px; color: #737373; float: right; right: 0px;\" no-padding\n                            placeholder=\"Select Category\" required slot=\"end\" formControlName=\"category\" value=\"{{value}}\">\n                            <ion-icon style=\"width: 20px; height: 20px;\" name=\"arrow-dropdown\" color=\"medium\"></ion-icon>\n                        </ion-input>\n                    </ion-item>\n                    <ion-item no-padding>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" type=\"number\" formControlName=\"currentprice\"\n                            placeholder=\"Enter meal price\" required>\n                        </ion-input>\n                    </ion-item>\n\n                    <ion-button expand=\"full \" type=\"submit\" [disabled]=\"!restaurantForm.valid\"\n                        style=\"margin-top: 50px; margin-bottom: 10px;\">Save</ion-button>\n                </ion-list>\n            </form>\n        </div>\n        <!-- RECIPES -->\n        <div *ngIf=\"shopType === 'recipes'\">\n            <ion-buttons slot=\"start\" style=\"padding-top: 10px; margin-bottom: 5px;\">\n                <ion-button (click)=\"close()\">\n                    <ion-icon size=\"small\" style=\"width: 20px; height: 20px;\" color=\"primary\" name=\"close\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n            <form (ngSubmit)=\"addRecipes()\" [formGroup]=\"recipesForm\" style=\"margin-right: 15px; margin-left: 15px;\">\n                <ion-list no-padding>\n                    <ion-item no-padding (click)=\"selectCategory()\">\n                        <ion-label style=\"font-size: 13px; color: #737373;\">Select Category </ion-label>\n                        <ion-input style=\"font-size: 13px; color: #737373; float: right; right: 0px;\" no-padding\n                            placeholder=\"Select Category\" slot=\"end\" formControlName=\"category\" value=\"{{value}}\">\n                            <ion-icon style=\"width: 20px; height: 20px;\" name=\"arrow-dropdown\" color=\"medium\"></ion-icon>\n                        </ion-input>\n                    </ion-item>\n                    <ion-item no-padding>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" type=\"number\" formControlName=\"currentprice\"\n                            placeholder=\"Enter meal price\">\n                        </ion-input>\n                    </ion-item>\n                    <ion-item no-padding (click)=\"newProductUploadImage()\">\n                        <ion-label style=\"font-size: 13px; color: #737373;\">Image:</ion-label>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" formControlName=\"image\" value=\"{{image}}\"\n                            readonly required></ion-input>\n                        <ion-icon style=\"width: 20px; height: 20px; float: right; right: 0px; position: absolute;\"\n                            slot=\"end\" name=\"camera\"></ion-icon>\n                    </ion-item>\n                    <ion-item no-padding>\n                        <ion-textarea rows=\"6\" formControlName=\"ingridients\"\n                          value=\"\" placeholder=\"Ingridients\">\n                        </ion-textarea>\n                    </ion-item>\n                    <ion-item no-padding>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" type=\"number\" formControlName=\"persons\"\n                            placeholder=\"Persons\">\n                        </ion-input>\n                    </ion-item>\n                    <ion-item no-padding>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" type=\"text\" formControlName=\"recipe\"\n                            placeholder=\"recipe\">\n                        </ion-input>\n                    </ion-item>\n\n                    <ion-button expand=\"full \" type=\"submit\" [disabled]=\"!recipesForm.valid\"\n                        style=\"margin-top: 50px; margin-bottom: 10px;\">Save</ion-button>\n                </ion-list>\n            </form>\n        </div>\n        <!-- SHOP -->\n        <div *ngIf=\"shopType === 'Shops'\">\n            <ion-buttons slot=\"start\" style=\"padding-top: 10px; margin-bottom: 5px;\">\n                <ion-button (click)=\"close()\">\n                    <ion-icon size=\"small\" style=\"width: 20px; height: 20px;\" color=\"primary\" name=\"close\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n            <form (ngSubmit)=\"addProduct()\" [formGroup]=\"productForm\" style=\"margin-right: 15px; margin-left: 15px;\">\n                <ion-list no-padding>\n                    <ion-item no-padding>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" type=\"text\" formControlName=\"product\"\n                            placeholder=\"Enter Product name\" required></ion-input>\n                    </ion-item>\n                    <ion-item no-padding>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" no-padding type=\"number\"\n                            formControlName=\"barcode\" placeholder=\"Scan or Enter barcode\" value=\"{{scannedcode}}\">\n                        </ion-input>\n                        <ion-icon style=\"width: 20px; height: 20px; float: right; right: 0px; position: absolute;\"\n                            slot=\"end\" name=\"qr-scanner\" (click)=\"scan()\"></ion-icon>\n                    </ion-item>\n                    <ion-item no-padding (click)=\"selectCategory()\">\n                        <ion-label style=\"font-size: 13px; color: #737373;\">Select Category </ion-label>\n                        <ion-input style=\"font-size: 13px; color: #737373; float: right; right: 0px;\" no-padding\n                            placeholder=\"Select Category\" required slot=\"end\" formControlName=\"category\" value=\"{{value}}\">\n                            <ion-icon style=\"width: 20px; height: 20px;\" name=\"arrow-dropdown\" color=\"medium\"></ion-icon>\n                        </ion-input>\n                    </ion-item>\n                    <ion-item no-padding>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" type=\"number\" formControlName=\"stock\"\n                            placeholder=\"Enter Quantity available\" required>\n                        </ion-input>\n                    </ion-item>\n                    <ion-item no-padding>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" type=\"text\" formControlName=\"quantity\"\n                            placeholder=\"Enter Product Unit\" required></ion-input>\n                    </ion-item>\n                    <ion-item no-padding>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" type=\"text\" formControlName=\"currentprice\"\n                            placeholder=\"Enter Product Price\" required></ion-input>\n                    </ion-item>\n                    <ion-item no-padding>\n                        <ion-textarea rows=\"6\" style=\"font-size: 13px; color: #737373;\" formControlName=\"description\"\n                            placeholder=\"Enter Description\"></ion-textarea>\n                    </ion-item>\n                    <!-- <ion-item>\n                    <ion-label>Set product status </ion-label>\n                    <ion-select formControlName=\"status\" slot=\"end\" placeholder=\"Select\">\n                        <ion-select-option selected>Available</ion-select-option>\n                        <ion-select-option>Unavailable</ion-select-option>\n                    </ion-select>\n                    <ion-toggle checked slot=\"end\" formControlName=\"status\"></ion-toggle>\n                    </ion-item> -->\n                    <ion-item no-padding (click)=\"newProductUploadImage()\">\n                        <!-- <div style=\"width: 100%; height: 50px;\">\n                            <img src=\"{{image}}\" alt=\"\">\n                        </div> -->\n                        <ion-label style=\"font-size: 13px; color: #737373;\">Image:</ion-label>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" formControlName=\"image\" value=\"{{image}}\"\n                            readonly required></ion-input>\n                        <ion-icon style=\"width: 20px; height: 20px; float: right; right: 0px; position: absolute;\"\n                            slot=\"end\" name=\"camera\"></ion-icon>\n                    </ion-item>\n                    <ion-button expand=\"full \" type=\"submit\" [disabled]=\"!productForm.valid\"\n                        style=\"margin-top: 50px; margin-bottom: 10px;\">Save</ion-button>\n                </ion-list>\n            </form>\n        </div>\n    </div>\n</ion-content>"

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

module.exports = ".card-main {\n  color: var(--ion-color-medium);\n  background-color: white;\n  border-radius: 20px 20px 0px 0px;\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n  top: 100px;\n  overflow-y: scroll;\n}\n\nion-slides {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\nion-slides img {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 100%;\n}\n\nion-select {\n  color: var(--ion-color-primary);\n}\n\n.loader {\n  text-align: center;\n  margin-top: 40%;\n}\n\n.body {\n  color: #737373;\n  background-color: white;\n  border-radius: 20px 20px 0px 0px;\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n  top: 10%;\n  overflow-y: scroll;\n  margin-bottom: 0px;\n}\n\n.buttons {\n  margin-top: 30px;\n  margin-left: 10px;\n  margin-right: 10px;\n  text-align: center;\n}\n\n.title {\n  font-weight: bold;\n  font-size: 1.1em;\n}\n\n.image {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 50%;\n  height: 50%;\n  float: right;\n}\n\nion-thumnail {\n  width: 100%;\n  height: 100%;\n}\n\nion-thumnail img {\n  -o-object-fit: contain;\n     object-fit: contain;\n  -o-object-position: center;\n     object-position: center;\n}\n\n.asc {\n  background-color: var(--ion-color-primary);\n}\n\n.asc button {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGxhcmFzc2VtbWF4d2VsbC9EZXNrdG9wL0t3aWtfTWVyY2hhbnQvc3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDRUo7O0FEREk7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0FDR1I7O0FEQUE7RUFDSSwrQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkE7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0FDSUo7O0FEREE7RUFDSSxnQkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksc0JBQUE7S0FBQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0tKOztBREhBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNNSjs7QURMSTtFQUNJLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO0FDT1I7O0FESkE7RUFLSSwwQ0FBQTtBQ0dKOztBRFBJO0VBQ0ksK0JBQUE7QUNTUiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLW1haW57XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICB0b3A6IDEwMHB4O1xuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xufVxuaW9uLXNsaWRlcyB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50IDtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG59XG5pb24tc2VsZWN0e1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4ubG9hZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNDAlO1xufVxuLmJvZHl7XG4gICAgY29sb3I6ICM3MzczNzM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHRvcDogMTAlO1xuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xuICAgIC8vIGhlaWdodDogMTAwMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogNDBweDtcbn1cbi5idXR0b25ze1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgLy8gcGFkZGluZy10b3A6IDYwJTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG59XG4uaW1hZ2V7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIGZsb2F0OiByaWdodDtcbn1cbmlvbi10aHVtbmFpbHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgaW1ne1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICB9XG59XG4uYXNje1xuICAgIGJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbiIsIi5jYXJkLW1haW4ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHRvcDogMTAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbmlvbi1zbGlkZXMgaW1nIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ubG9hZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MCU7XG59XG5cbi5ib2R5IHtcbiAgY29sb3I6ICM3MzczNzM7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHRvcDogMTAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMWVtO1xufVxuXG4uaW1hZ2Uge1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5pb24tdGh1bW5haWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLXRodW1uYWlsIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uYXNjIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLmFzYyBidXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */"

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
        this.restaurantForm = formBuilder.group({
            Meal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            category: [this.value, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            currentprice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
        });
        this.recipesForm = formBuilder.group({
            category: [this.value, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            currentprice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            ingridients: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            persons: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            recipe: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
        });
        this.shop = localStorage.getItem('shop');
        this.user = localStorage.getItem('user');
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
        this.shopType = localStorage.getItem('type');
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
    addRestaurant() {
        this.Toast('uploading...');
        let data = {
            "Restaurant": this.shop,
            "Meal": this.restaurantForm.value.Meal,
            "category": this.restaurantForm.value.category,
            "currentprice": this.restaurantForm.value.currentprice,
            "shopID": this.user,
            "date": new Date()
        };
        console.log(data);
        this.fs.collection(this.shop).add(data).then(res => {
            this.restaurantForm.reset();
            this.category = '';
            this.upload.presentToast('Meal uploaded successful');
        }).catch(err => {
            console.log(err);
        });
    }
    addRecipes() {
        this.Toast('uploading...');
        let data = {
            "category": this.recipesForm.value.category,
            "currentprice": this.recipesForm.value.currentprice,
            "image": this.recipesForm.value.image,
            "ingridients": this.recipesForm.value.ingridients,
            "persons": this.recipesForm.value.persons,
            "recipe": this.recipesForm.value.recipe,
            "shop": this.shop,
            "shopID": this.user,
            "Date": new Date()
        };
        console.log(data);
        this.fs.collection(this.shop).add(data).then(res => {
            this.restaurantForm.reset();
            this.category = '';
            this.upload.presentToast('Recipes uploaded successful');
        }).catch(err => {
            console.log(err);
        });
    }
    addProduct() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.Toast('Uploading product...');
            // alert(1);
            yield this.uploadTostorage(this.image);
            // alert('shop => ' + this.shop);
            let data = {
                "shop": this.shop,
                "currentprice": this.productForm.value.currentprice,
                "quantity": this.productForm.value.quantity,
                "product": this.productForm.value.product,
                "image": this.image,
                "status": this.productForm.value.status,
                "stock": this.productForm.value.stock,
                "category": this.productForm.value.category,
                "description": this.productForm.value.description,
                "barcode": this.productForm.value.barcode,
                "date": new Date()
            };
            console.log(data);
            this.fs.collection(this.shop).add(data).then(res => {
                this.productForm.reset();
                this.category = '';
                this.image = '';
                this.upload.presentToast('Product uploaded successfully');
                // alert(2)
                this.loading.dismiss();
            }).catch(err => {
                // alert(err);
                this.loading.dismiss();
                // alert(3)
            });
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
    Toast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loader.create({
                message: msg,
            });
            yield this.loading.present();
        });
    }
    newProductUploadImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.asc.create({
                header: "Select Image Source",
                buttons: [
                    {
                        text: 'Camera',
                        handler: () => {
                            this.openCamera();
                        }
                    },
                    {
                        text: 'Gallery',
                        handler: () => {
                            this.getImageGallery();
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
    sanitizeBase64Path(ImagePath) {
        var copyPath = ImagePath;
        var splitPath = copyPath.split('/');
        var imageName = splitPath[splitPath.length - 1];
        var filePath = ImagePath.split(imageName)[0];
        this.file.readAsDataURL(filePath, imageName).then(base64 => {
            this.image = base64;
        }, error => {
            alert('Error in sanitizing image' + error);
        });
    }
    getImageGallery() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.imagePicker.hasReadPermission().then((result) => {
                if (result == false) {
                    this.imagePicker.requestReadPermission();
                }
                else if (result == true) {
                    this.imagePicker.getPictures({
                        maximumImagesCount: 1
                    }).then((results) => {
                        for (var i = 0; i < results.length; i++) {
                            this.cropService.crop(results[i], { quality: 75 }).then(newImage => {
                                this.sanitizeBase64Path(newImage.split('?')[0]);
                            }).catch(error => alert("Error cropping image" + error));
                        }
                    }, (err) => alert(err)).catch(err => console.log(err));
                }
            }, (err) => {
                alert(err);
            }).catch(err => alert(err));
        });
    }
    uploadTostorage(image) {
        // alert(image);
        const pictures = this.st.storage.ref('XXX' + '/' + this.date);
        pictures.putString(image).then(url => {
            url.ref.getDownloadURL().then(url => {
                this.image = url;
                // alert('image URL ' + this.image);
            }).catch(error => {
                // alert('get url error ' + error);
            });
        }).catch(error => {
            // alert('put to storage error ' + error);
        });
        // alert('image URL ' + this.image);
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