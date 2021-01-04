(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content color=\"primary\">\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-icon style=\"width: 20px; height: 20px; margin-left: 5px;\" name=\"arrow-back\" (click)=\"back()\">\n            </ion-icon>\n        </ion-buttons>\n        <ion-title text-center style=\"margin-right: 15px;\">Add to stock</ion-title>\n    </ion-toolbar>\n\n\n    <div class=\"card-main\" style=\"background-color: white;\" *ngIf=\"type\">\n\n        <div class=\"buttons\">\n            <ion-button expand=\"full\" (click)=\"addNewProduct()\">New Product</ion-button><br>\n            <ion-button expand=\"full\" (click)=\"existingProduct()\">Existing Product</ion-button><br>\n        </div>\n    </div>\n\n    <!-- EXISTING PRODUCT -->\n    <div class=\"body\" *ngIf=\"existing\">\n        <ion-buttons slot=\"start\" style=\"padding-top: 10px; margin-bottom: 5px;\">\n            <ion-button (click)=\"close()\">\n                <ion-icon size=\"small\" style=\"width: 20px; height: 20px;\" color=\"primary\" name=\"close\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n\n        <ion-row no-padding text-center>\n            <ion-col>\n                <ion-label style=\"font-size: 15px;\" class=\"title\">Choose category to filter</ion-label>\n                <ion-icon style=\"width: 20px; height: 20px; margin-right: 5px;\" name=\"pricetags\" class=\"image\"\n                    color=\"primary\"></ion-icon>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-segment scrollable [(ngModel)]=\"category\" (ionChange)=\"setFilteredItems()\">\n                <ion-segment-button selected value=\"\">\n                    <ion-label style=\"font-size: 12px;\">All</ion-label>\n                </ion-segment-button>\n                <ion-segment-button value=\"{{item}}\" *ngFor=\"let item of categories.categories\">\n                    <ion-label style=\"font-size: 12px;\">{{item}}</ion-label>\n                </ion-segment-button>\n            </ion-segment>\n        </ion-row>\n        <ion-item *ngIf=\"category != null\">\n            <ion-input style=\"font-size: 15px;\" type=\"text\" clearInput placeholder=\"Enter product name\"></ion-input>\n            <ion-icon style=\"width: 20px; height: 20px;\" name=\"search\" slot=\"end\"></ion-icon>\n        </ion-item>\n\n        <!-- RESTAURANT -->\n        <div *ngIf=\"shopType === 'food'\">\n            <ion-item no-padding text-center\n                style=\"background-color: #dedede; color: var(--ion-color-primary); font-size: 15px;\">\n                <ion-col size=\"9\" style=\"text-align: left; margin-left: 10px;\">\n                    Meal\n                </ion-col>\n                <ion-col size=\"3\" style=\"text-align: right; padding-right: 10px;\">\n                    Price\n                </ion-col>\n            </ion-item>\n            <ion-item no-padding text-center (click)=\"viewProduct(item)\" *ngFor=\"let item of products\"\n                style=\"font-size: 13px; color: #737373; \">\n                <ion-col size=\"9\" style=\"text-align: left; margin-left: 10px;\">\n                    {{item.Meal}}\n                </ion-col>\n                <ion-col size=\"3\" style=\"text-align: right; padding-right: 10px;\">\n                    {{item.currentprice}}\n                </ion-col>\n            </ion-item>\n        </div>\n\n        <!-- RECIPES -->\n        <div *ngIf=\"shopType === 'recipes'\">\n            <ion-item no-padding text-center\n                style=\"background-color: #dedede; color: var(--ion-color-primary); font-size: 15px;\">\n                <ion-col size=\"3\">\n                    Icon\n                </ion-col>\n                <ion-col size=\"6\" style=\"text-align: left; padding-left: 5px;\">\n                    Recipe\n                </ion-col>\n                <ion-col size=\"3\" style=\"text-align: right; padding-right: 10px;\">\n                    Price\n                </ion-col>\n            </ion-item>\n            <ion-item no-padding text-center (click)=\"viewProduct(item)\" *ngFor=\"let item of products\"\n                style=\"font-size: 13px; color: #737373; \">\n                <ion-col text-center size=\"3\">\n                    <img [src]=\"item.image\" style=\"width: 75px; height: 50px;\">\n                </ion-col>\n                <ion-col size=\"6\" style=\"text-align: left; padding-left: 5px;\">\n                    {{item.recipe}}\n                </ion-col>\n                <ion-col size=\"3\" style=\"text-align: right; padding-right: 10px;\">\n                    {{item.currentprice}}\n                </ion-col>\n            </ion-item>\n        </div>\n\n        <!-- SHOP -->\n        <div *ngIf=\"shopType === 'Shops'\">\n            <ion-item no-padding text-center\n                style=\"background-color: #dedede; color: var(--ion-color-primary); font-size: 15px;\">\n                <ion-col size=\"2\">\n                    Icon\n                </ion-col>\n                <ion-col size=\"4\" style=\"text-align: left;\">\n                    Product\n                </ion-col>\n                <ion-col size=\"2\">\n                    Stock\n                </ion-col>\n                <ion-col size=\"2\">\n                    Units\n                </ion-col>\n                <ion-col size=\"2\">\n                    Price\n                </ion-col>\n            </ion-item>\n            <ion-item no-padding text-center (click)=\"viewProduct(item)\" *ngFor=\"let item of products\"\n                style=\"font-size: 13px; color: #737373; \">\n                <ion-col text-center size=\"2\">\n                    <img [src]=\"item.image\"  style=\"width: 75px; height: 50px;\">\n                </ion-col>\n                <ion-col size=\"4\" style=\"text-align: left;\">\n                    {{item.product}}\n                </ion-col>\n                <ion-col size=\"2\">\n                    {{item.stock}}\n                </ion-col>\n                <ion-col size=\"2\">\n                    {{item.quantity}}\n                </ion-col>\n                <ion-col size=\"2\">\n                    {{item.currentprice}}\n                </ion-col>\n            </ion-item>\n        </div><br><br>\n    </div>\n\n\n    <!-- NEW PRODUCT -->\n    <div *ngIf=\"newProduct\" class=\"body\">\n        <!-- RESTAURANT -->\n        <div *ngIf=\"shopType === 'food'\">\n            <ion-buttons slot=\"start\" style=\"padding-top: 10px; margin-bottom: 5px;\">\n                <ion-button (click)=\"close()\">\n                    <ion-icon size=\"small\" style=\"width: 20px; height: 20px;\" color=\"primary\" name=\"close\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n            <form (ngSubmit)=\"addRestaurant()\" [formGroup]=\"restaurantForm\" style=\"margin-right: 15px; margin-left: 15px;\">\n                <ion-list no-padding>\n                    <ion-item no-padding>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" type=\"text\" formControlName=\"productName\"\n                            placeholder=\"Enter meal name\" required></ion-input>\n                    </ion-item>\n                    <ion-item no-padding>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" type=\"number\" formControlName=\"discount\"\n                            placeholder=\"Discount in percentage\"></ion-input>\n                    </ion-item>\n                    <ion-item no-padding (click)=\"selectCategory()\">\n                        <ion-label style=\"font-size: 13px; color: #737373;\">Select Category </ion-label>\n                        <ion-input style=\"font-size: 13px; color: #737373; float: right; right: 0px;\" no-padding\n                            placeholder=\"Select Category\" required slot=\"end\" formControlName=\"subCategory\" value=\"{{value}}\">\n                            <ion-icon style=\"width: 20px; height: 20px;\" name=\"arrow-dropdown\" color=\"medium\"></ion-icon>\n                        </ion-input>\n                    </ion-item>\n                    <ion-item no-padding>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" type=\"number\" formControlName=\"currentprice\"\n                            placeholder=\"Enter meal price\" required>\n                        </ion-input>\n                    </ion-item>\n\n                    <ion-button expand=\"full \" type=\"submit\" [disabled]=\"!restaurantForm.valid\"\n                        style=\"margin-top: 50px; margin-bottom: 10px;\">Save</ion-button>\n                </ion-list>\n            </form>\n        </div>\n        <!-- RECIPES -->\n        <div *ngIf=\"shopType === 'recipes'\">\n            <ion-buttons slot=\"start\" style=\"padding-top: 10px; margin-bottom: 5px;\">\n                <ion-button (click)=\"close()\">\n                    <ion-icon size=\"small\" style=\"width: 20px; height: 20px;\" color=\"primary\" name=\"close\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n            <form (ngSubmit)=\"addRecipes()\" [formGroup]=\"recipesForm\" style=\"margin-right: 15px; margin-left: 15px;\">\n                <ion-list no-padding>\n                    <ion-item no-padding>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" type=\"text\" formControlName=\"productName\"\n                            placeholder=\"Product Name\">\n                        </ion-input>\n                    </ion-item>\n                    <ion-item no-padding>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" type=\"number\" formControlName=\"discount\"\n                            placeholder=\"Discount in percentage\"></ion-input>\n                    </ion-item>\n                    <ion-item no-padding (click)=\"selectCategory()\">\n                        <ion-label style=\"font-size: 13px; color: #737373;\">Select Category </ion-label>\n                        <ion-input style=\"font-size: 13px; color: #737373; float: right; right: 0px;\" no-padding\n                            placeholder=\"Select Category\" slot=\"end\" formControlName=\"subCategory\" value=\"{{value}}\">\n                            <ion-icon style=\"width: 20px; height: 20px;\" name=\"arrow-dropdown\" color=\"medium\"></ion-icon>\n                        </ion-input>\n                    </ion-item>\n                    <ion-item no-padding>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" type=\"number\" formControlName=\"currentprice\"\n                            placeholder=\"Enter meal price\">\n                        </ion-input>\n                    </ion-item>\n                    <ion-item no-padding (click)=\"newProductUploadImage()\">\n                        <ion-label style=\"font-size: 13px; color: #737373;\">Image:</ion-label>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" formControlName=\"image\" value=\"{{image}}\"\n                            readonly required></ion-input>\n                        <ion-icon style=\"width: 20px; height: 20px; float: right; right: 0px; position: absolute;\"\n                            slot=\"end\" name=\"camera\"></ion-icon>\n                    </ion-item>\n                    <ion-item no-padding>\n                        <ion-textarea rows=\"6\" formControlName=\"ingridients\"\n                          value=\"\" placeholder=\"Ingridients\">\n                        </ion-textarea>\n                    </ion-item>\n                    <ion-item no-padding>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" type=\"number\" formControlName=\"persons\"\n                            placeholder=\"Persons\">\n                        </ion-input>\n                    </ion-item>\n                    \n\n                    <ion-button expand=\"full \" type=\"submit\" [disabled]=\"!recipesForm.valid\"\n                        style=\"margin-top: 50px; margin-bottom: 10px;\">Save</ion-button>\n                </ion-list>\n            </form>\n        </div>\n        <!-- SHOP -->\n        <div *ngIf=\"shopType === 'Shops'\">\n            <ion-buttons slot=\"start\" style=\"padding-top: 10px; margin-bottom: 5px;\">\n                <ion-button (click)=\"close()\">\n                    <ion-icon size=\"small\" style=\"width: 20px; height: 20px;\" color=\"primary\" name=\"close\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n            <form (ngSubmit)=\"addProduct()\" [formGroup]=\"productForm\" style=\"margin-right: 15px; margin-left: 15px;\">\n                <ion-list no-padding>\n                    <ion-item no-padding>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" type=\"text\" formControlName=\"productName\"\n                            placeholder=\"Enter Product name\" required></ion-input>\n                    </ion-item>\n                    <ion-item no-padding>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" type=\"number\" formControlName=\"discount\"\n                            placeholder=\"Discount in percentage\"></ion-input>\n                    </ion-item>\n                    <ion-item no-padding>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" no-padding type=\"number\"\n                            formControlName=\"barcode\" placeholder=\"Scan or Enter barcode\" value=\"{{scannedcode}}\">\n                        </ion-input>\n                        <ion-icon style=\"width: 20px; height: 20px; float: right; right: 0px; position: absolute;\"\n                            slot=\"end\" name=\"qr-scanner\" (click)=\"scan()\"></ion-icon>\n                    </ion-item>\n                    <ion-item no-padding (click)=\"selectCategory()\">\n                        <ion-label style=\"font-size: 13px; color: #737373;\">Select Category </ion-label>\n                        <ion-input style=\"font-size: 13px; color: #737373; float: right; right: 0px;\" no-padding\n                            placeholder=\"Select Category\" required slot=\"end\" formControlName=\"subCategory\" value=\"{{value}}\">\n                            <ion-icon style=\"width: 20px; height: 20px;\" name=\"arrow-dropdown\" color=\"medium\"></ion-icon>\n                        </ion-input>\n                    </ion-item>\n                    <ion-item no-padding>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" type=\"number\" formControlName=\"stock\"\n                            placeholder=\"Enter Quantity available\" required>\n                        </ion-input>\n                    </ion-item>\n                    <ion-item no-padding>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" type=\"text\" formControlName=\"quantity\"\n                            placeholder=\"Enter Product Unit\" required></ion-input>\n                    </ion-item>\n                    <ion-item no-padding>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" type=\"text\" formControlName=\"currentprice\"\n                            placeholder=\"Enter Product Price\" required></ion-input>\n                    </ion-item>\n                    <ion-item no-padding>\n                        <ion-textarea rows=\"6\" style=\"font-size: 13px; color: #737373;\" formControlName=\"description\"\n                            placeholder=\"Enter Description\"></ion-textarea>\n                    </ion-item>\n                    <ion-item no-padding (click)=\"newProductUploadImage()\">\n                        <ion-label style=\"font-size: 13px; color: #737373;\">Image:</ion-label>\n                        <ion-input style=\"font-size: 13px; color: #737373;\" formControlName=\"image\" value=\"{{image}}\"\n                            readonly required></ion-input>\n                        <ion-icon style=\"width: 20px; height: 20px; float: right; right: 0px; position: absolute;\"\n                            slot=\"end\" name=\"camera\"></ion-icon>\n                    </ion-item>\n                    <ion-button expand=\"full \" type=\"submit\" [disabled]=\"!productForm.valid\"\n                        style=\"margin-top: 50px; margin-bottom: 10px;\">Save</ion-button>\n                </ion-list>\n            </form>\n        </div>\n    </div>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.page */ "./src/app/products/products.page.ts");







var routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]
    }
];
var ProductsPageModule = /** @class */ (function () {
    function ProductsPageModule() {
    }
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
    return ProductsPageModule;
}());



/***/ }),

/***/ "./src/app/products/products.page.scss":
/*!*********************************************!*\
  !*** ./src/app/products/products.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-main {\n  color: var(--ion-color-medium);\n  background-color: white;\n  border-radius: 20px 20px 0px 0px;\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n  top: 100px;\n  overflow-y: scroll;\n}\n\nion-slides {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\nion-slides img {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 100%;\n}\n\nion-select {\n  color: var(--ion-color-primary);\n}\n\n.loader {\n  text-align: center;\n  margin-top: 40%;\n}\n\n.body {\n  color: #737373;\n  background-color: white;\n  border-radius: 20px 20px 0px 0px;\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n  top: 10%;\n  overflow-y: scroll;\n  margin-bottom: 0px;\n}\n\n.buttons {\n  margin-top: 30px;\n  margin-left: 10px;\n  margin-right: 10px;\n  text-align: center;\n}\n\n.title {\n  font-weight: bold;\n  font-size: 1.1em;\n}\n\n.image {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 50%;\n  height: 50%;\n  float: right;\n}\n\nion-thumnail {\n  width: 100%;\n  height: 100%;\n}\n\nion-thumnail img {\n  -o-object-fit: contain;\n     object-fit: contain;\n  -o-object-position: center;\n     object-position: center;\n}\n\n.asc {\n  background-color: var(--ion-color-primary);\n}\n\n.asc button {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGxhcmFzc2VtbWF4d2VsbC9EZXNrdG9wL05ld21hcmsvS3dpa19NZXJjaGFudC9zcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNFSjs7QURESTtFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7QUNHUjs7QURBQTtFQUNJLCtCQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNJSjs7QURGQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7QUNJSjs7QUREQTtFQUNJLGdCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEREE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDSUo7O0FERkE7RUFDSSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDS0o7O0FESEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ01KOztBRExJO0VBQ0ksc0JBQUE7S0FBQSxtQkFBQTtFQUNBLDBCQUFBO0tBQUEsdUJBQUE7QUNPUjs7QURKQTtFQUtJLDBDQUFBO0FDR0o7O0FEUEk7RUFDSSwrQkFBQTtBQ1NSIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtbWFpbntcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHRvcDogMTAwcHg7XG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XG59XG5pb24tc2xpZGVzIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQgO1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbn1cbmlvbi1zZWxlY3R7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5sb2FkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA0MCU7XG59XG4uYm9keXtcbiAgICBjb2xvcjogIzczNzM3MztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgdG9wOiAxMCU7XG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XG4gICAgLy8gaGVpZ2h0OiAxMDAwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLmJ1dHRvbnN7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAvLyBwYWRkaW5nLXRvcDogNjAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbn1cbi5pbWFnZXtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuaW9uLXRodW1uYWlse1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBpbWd7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgIH1cbn1cbi5hc2N7XG4gICAgYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgXG4gICAgfVxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuIiwiLmNhcmQtbWFpbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgdG9wOiAxMDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuaW9uLXNsaWRlcyBpbWcge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5sb2FkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQwJTtcbn1cblxuLmJvZHkge1xuICBjb2xvcjogIzczNzM3MztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgdG9wOiAxMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbi5pbWFnZSB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmlvbi10aHVtbmFpbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5pb24tdGh1bW5haWwgaW1nIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5hc2Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uYXNjIGJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _upload_upload_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../upload/upload.service */ "./src/app/upload/upload.service.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");



















var ProductsPage = /** @class */ (function () {
    function ProductsPage(navCtrl, service, asc, scannner, http, db, camera, formBuilder, modal, upload, file, loader, load, storage, ref, webview, fs, imagePicker, cropService, fileChooser, st) {
        var _this = this;
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
            productName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            discount: [''],
            barcode: [this.scannedcode],
            subCategory: [this.value, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            stock: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            currentprice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('[a-zA-Z ]*')])],
            image: [this.image, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]
        });
        this.restaurantForm = formBuilder.group({
            productName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            discount: [''],
            subCategory: [this.value, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            currentprice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
        });
        this.recipesForm = formBuilder.group({
            productName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            discount: [''],
            subCategory: [this.value, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            currentprice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            ingridients: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            persons: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
        });
        this.shop = localStorage.getItem('shop');
        this.user = localStorage.getItem('user');
        this.service.getallcategories(localStorage.getItem('type')).subscribe(function (res) {
            var categoryId = res[0].id;
            _this.service.getSubcategory(categoryId).subscribe(function (returnData) {
                _this.subCategories = returnData;
                console.log("====SUBCATEGORY=====");
                console.log(_this.subCategories);
            });
            _this.categories = res;
            console.log("=====CATEGORY=====");
            console.log(_this.categories);
        });
        this.getproducts();
    }
    ProductsPage.prototype.getproducts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.service.getallProducts(this.shop).subscribe(function (res) {
                    _this.products = res;
                    _this.unfilteredProducts = res;
                });
                console.log(this.products);
                return [2 /*return*/];
            });
        });
    };
    // filter products
    ProductsPage.prototype.setFilteredItems = function () {
        if (this.category !== null || this.category !== '') {
            this.products = this.filterItems();
            console.log(this.products);
        }
    };
    ProductsPage.prototype.filterItems = function () {
        var _this = this;
        return this.unfilteredProducts.filter(function (item) {
            return item.category.toLowerCase().indexOf(_this.category.toLowerCase()) > -1;
        });
    };
    ProductsPage.prototype.ngOnInit = function () {
        this.shopType = localStorage.getItem('type');
    };
    ProductsPage.prototype.back = function () {
        this.service.hiddenTabs = false;
        this.close();
        this.navCtrl.navigate(['tabs/stock']);
    };
    ProductsPage.prototype.addNewProduct = function () {
        this.newProduct = true;
        this.type = false;
    };
    ProductsPage.prototype.existingProduct = function () {
        this.existing = true;
        this.type = false;
    };
    ProductsPage.prototype.close = function () {
        this.existing = false;
        this.type = true;
        this.newProduct = false;
        this.category = null;
    };
    ProductsPage.prototype.viewProduct = function (item) {
        this.service.hiddenTabs = true;
        this.service.setProduct(item);
        console.log(item);
        this.navCtrl.navigate(['tabs/productmodal']);
    };
    ProductsPage.prototype.addRestaurant = function () {
        var _this = this;
        this.Toast('uploading...');
        var data = {
            "Date": new Date(),
            "barcode": '',
            "currentprice": this.restaurantForm.value.currentprice,
            "description": '',
            "discount": this.restaurantForm.value.discount,
            'images': [],
            "mainCategory": this.mainCategoryId,
            "merchandID": this.user,
            "productName": this.restaurantForm.value.productName,
            "quantity": '',
            "stock": '',
            "subCategory": this.subCategoryId,
            "ingridients": '',
            "persons": '',
        };
        console.log(data);
        this.fs.collection('products').add(data).then(function (res) {
            _this.restaurantForm.reset();
            _this.mainCategoryId = '';
            _this.subCategoryId = '';
            _this.upload.presentToast('Meal uploaded successful');
            _this.loading.dismiss();
        }).catch(function (err) {
            _this.loading.dismiss();
            console.log(err);
        });
    };
    ProductsPage.prototype.addRecipes = function () {
        var _this = this;
        this.Toast('uploading...');
        var data = {
            "Date": new Date(),
            "barcode": '',
            "currentprice": this.recipesForm.value.currentprice,
            "description": '',
            "discount": this.recipesForm.value.discount,
            "image": this.recipesForm.value.image,
            "mainCategory": this.mainCategoryId,
            "merchandID": this.user,
            "productName": this.recipesForm.value.recipe,
            "quantity": '',
            "stock": '',
            "subCategory": this.subCategoryId,
            "ingridients": this.recipesForm.value.ingridients,
            "persons": this.recipesForm.value.persons,
        };
        console.log(data);
        this.fs.collection('products').add(data).then(function (res) {
            _this.restaurantForm.reset();
            _this.mainCategoryId = '';
            _this.subCategoryId = '';
            _this.image = '';
            _this.upload.presentToast('Recipes uploaded successful');
            _this.loading.dismiss();
        }).catch(function (err) {
            console.log(err);
            _this.loading.dismiss();
        });
    };
    ProductsPage.prototype.addProduct = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.Toast('Uploading product...');
                        return [4 /*yield*/, this.uploadTostorage(this.image)];
                    case 1:
                        _a.sent();
                        data = {
                            "Date": new Date(),
                            "barcode": this.productForm.value.barcode,
                            "currentprice": this.productForm.value.currentprice,
                            "description": this.productForm.value.description,
                            "discount": this.productForm.value.discount,
                            "image": this.image,
                            "mainCategory": this.mainCategoryId,
                            "merchandID": this.user,
                            "productName": this.productForm.value.product,
                            "quantity": this.productForm.value.quantity,
                            "stock": this.productForm.value.stock,
                            "subCategory": this.subCategoryId,
                            "ingridients": '',
                            "persons": '',
                        };
                        console.log(data);
                        this.fs.collection(this.shop).add(data).then(function (res) {
                            _this.productForm.reset();
                            _this.mainCategoryId = '';
                            _this.subCategoryId = '';
                            _this.image = '';
                            _this.upload.presentToast('Product uploaded successfully');
                            _this.loading.dismiss();
                        }).catch(function (err) {
                            _this.loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsPage.prototype.scan = function () {
        var _this = this;
        this.scannner.scan().then(function (code) {
            if (code.cancelled) {
                return;
            }
            _this.scannedcode = code.text;
        });
    };
    ProductsPage.prototype.selectCategory = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.asc.create({
                            header: 'Categories',
                            buttons: this.createButtons()
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsPage.prototype.createButtons = function () {
        var _this = this;
        var buttons = [];
        console.log("===LIST SUBCATEGORY===");
        console.log(this.categories);
        var _loop_1 = function (index) {
            var button = {
                text: this_1.subCategories[index].name,
                handler: function () {
                    console.log('button text: ' + _this.subCategories[index].id);
                    _this.value = _this.subCategories[index].name;
                    _this.subCategoryId = _this.subCategories[index].id;
                    _this.mainCategoryId = _this.subCategories[index].mainCategoryId;
                    return true;
                }
            };
            buttons.push(button);
        };
        var this_1 = this;
        for (var index in this.subCategories) {
            _loop_1(index);
        }
        // const adbutton = {
        //     text: 'Add New',
        //     cssClass: 'asc',
        //     handler: () => {
        //         console.log('adding new');
        //         // this.categoryModal();
        //     }
        // };
        // buttons.push(adbutton);
        return buttons;
    };
    // async categoryModal() {
    //     const modal = await this.modal.create({
    //         component: CategoryPage,
    //         componentProps: { shopname: this.db.getshopname() }
    //     });
    //     localStorage.setItem('shop', this.db.getshopname());
    //     await modal.present();
    // }
    ProductsPage.prototype.Toast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loader.create({
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
    ProductsPage.prototype.newProductUploadImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.asc.create({
                            header: "Select Image Source",
                            buttons: [
                                {
                                    text: 'Camera',
                                    handler: function () {
                                        _this.openCamera();
                                    }
                                },
                                {
                                    text: 'Gallery',
                                    handler: function () {
                                        _this.getImageGallery();
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsPage.prototype.openCamera = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, results, image, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        options = {
                            quality: 50,
                            targetHeight: 600,
                            targetWidth: 600,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE,
                            correctOrientation: true
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1:
                        results = _a.sent();
                        image = "data:image/jpeg;base64," + results;
                        this.image = image;
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductsPage.prototype.sanitizeBase64Path = function (ImagePath) {
        var _this = this;
        var copyPath = ImagePath;
        var splitPath = copyPath.split('/');
        var imageName = splitPath[splitPath.length - 1];
        var filePath = ImagePath.split(imageName)[0];
        this.file.readAsDataURL(filePath, imageName).then(function (base64) {
            _this.image = base64;
        }, function (error) {
            alert('Error in sanitizing image' + error);
        });
    };
    ProductsPage.prototype.getImageGallery = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.imagePicker.hasReadPermission().then(function (result) {
                    if (result == false) {
                        _this.imagePicker.requestReadPermission();
                    }
                    else if (result == true) {
                        _this.imagePicker.getPictures({
                            maximumImagesCount: 1
                        }).then(function (results) {
                            for (var i = 0; i < results.length; i++) {
                                _this.cropService.crop(results[i], { quality: 75 }).then(function (newImage) {
                                    _this.sanitizeBase64Path(newImage.split('?')[0]);
                                }).catch(function (error) { return alert("Error cropping image" + error); });
                            }
                        }, function (err) { return alert(err); }).catch(function (err) { return console.log(err); });
                    }
                }, function (err) {
                    alert(err);
                }).catch(function (err) { return alert(err); });
                return [2 /*return*/];
            });
        });
    };
    ProductsPage.prototype.uploadTostorage = function (image) {
        var _this = this;
        // alert(image);
        var pictures = this.st.storage.ref('Products' + '/' + this.date);
        pictures.putString(image).then(function (url) {
            url.ref.getDownloadURL().then(function (url) {
                _this.image = url;
                // alert('image URL ' + this.image);
            }).catch(function (error) {
                // alert('get url error ' + error);
            });
        }).catch(function (error) {
            // alert('put to storage error ' + error);
        });
        // alert('image URL ' + this.image);
    };
    ProductsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"] },
        { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] },
        { type: _upload_upload_service__WEBPACK_IMPORTED_MODULE_10__["UploadService"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["Storage"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__["WebView"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestore"] },
        { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_15__["ImagePicker"] },
        { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_16__["Crop"] },
        { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_17__["FileChooser"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__["AngularFireStorage"] }
    ]; };
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
            _upload_upload_service__WEBPACK_IMPORTED_MODULE_10__["UploadService"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["Storage"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__["WebView"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestore"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_15__["ImagePicker"],
            _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_16__["Crop"],
            _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_17__["FileChooser"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__["AngularFireStorage"]])
    ], ProductsPage);
    return ProductsPage;
}());



/***/ })

}]);
//# sourceMappingURL=products-products-module-es5.js.map