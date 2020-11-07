(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productmodal-productmodal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/productmodal/productmodal.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/productmodal/productmodal.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content color=\"primary\" style=\"background-color: var(--ion-color-primary);\">\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-icon style=\"width: 20px; height: 20px; margin-left: 5px;\" name=\"arrow-back\" (click)=\"back()\">\n            </ion-icon>\n        </ion-buttons>\n\n        <ion-buttons slot=\"end\">\n            <ion-icon style=\"width: 20px; height: 20px; padding-right: 5px;\" name=\"trash\" (click)=\"confirmDelete(product.id)\"></ion-icon>\n        </ion-buttons>\n\n        <!-- <ion-buttons slot=\"end\" (click)=\"edit = true\" *ngIf=\"edit == false\">\n            <ion-icon style=\"width: 20px; height: 20px; margin-right: 5px;\" name=\"create\"></ion-icon>\n        </ion-buttons>\n\n        <ion-buttons slot=\"end\"(click)=\"edit = false\" *ngIf=\"edit == true\" >\n            <ion-icon style=\"width: 20px; height: 20px; margin-right: 5px;\" name=\"close\"></ion-icon>\n        </ion-buttons> -->\n        <ion-buttons *ngIf=\"product !== undefined\">\n            <ion-title class=\"ion-text-center\" *ngIf=\"product.product !== null\">{{product.product}}</ion-title>\n            <ion-title class=\"ion-text-center\" *ngIf=\"product.Meal !== undefined\">{{product.Meal}}</ion-title>\n        </ion-buttons>\n\n    </ion-toolbar>\n\n\n\n\n\n    <div class=\"body\">     \n        <div style=\"margin-top: 40%;text-align: center;\" *ngIf=\"!view\">\n            <ion-spinner name=\"circles\" color=\"primary\"></ion-spinner>\n        </div>\n        <div *ngIf=\"view\">\n            <!-- RESTAURANT -->\n            <div *ngIf=\"shopType === 'food'\" style=\"margin-top: 30px;\">\n                <form [formGroup]=\"restaurantForm\">\n                    <div class=\"details\">\n                        <ion-item>\n                            <ion-label position=\"floating\">Meal</ion-label>\n                            <ion-input style=\"font-size: 13px; color: #737373;\" *ngIf=\"product.Meal !== undefined \" [readonly]=\"!edit\" formControlName=\"Meal\"\n                                value=\"{{product.Meal}}\"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label position=\"floating\">Category</ion-label>\n                            <ion-input style=\"font-size: 13px; color: #737373;\" *ngIf=\"!edit\" readonly formControlName=\"category\" value=\"{{product.category}}\">\n                            </ion-input>\n                            <ion-select style=\"font-size: 14px; color: #737373;\" formControlName=\"category\" *ngIf=\"edit\"\n                                placeholder=\"{{product.category}}\">\n                                <ion-select-option style=\"font-size: 13px; color: #737373;\"\n                                    *ngFor=\"let item of category.categories\">{{item}}</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label position=\"floating\">Current price</ion-label>\n                            <ion-input style=\"font-size: 13px; color: #737373;\" [readonly]=\"!edit\" formControlName=\"currentprice\" value=\"{{product.currentprice}}\">\n                            </ion-input>\n                        </ion-item>\n                    </div><br><br><br><br>\n                    <div style=\"position: fixed;bottom: 10px;width: 100%;\">\n                        <ion-button *ngIf=\"!edit\" expand=\"full\" (click)=\"edit = true\">\n                            Edit\n                        </ion-button>\n                        <ion-button *ngIf=\"edit\" expand=\"full\" shape=\"block\" (click)=\"updateRestaurant(product.id)\">\n                            Save Changes\n                        </ion-button>\n                    </div>\n                </form>\n            </div>\n\n            <!-- RECIPES -->\n            <div *ngIf=\"shopType === 'recipes'\">\n                <form [formGroup]=\"recipesForm\">\n                    <div style=\"padding-left: 40px;padding-right:40px ;padding-top: 20px;\">\n                        <img [src]=\"product.image\" width=\"100%\" alt=\"product image\" height=\"150px\"\n                            *ngIf=\"product.image !== undefined\">\n                        <img src=\"../../assets/images/image-placeholder.png\" width=\"100%\" alt=\"product image\" height=\"200px\"\n                            *ngIf=\"product.image === undefined\">\n                    </div>\n                    <div class=\"details\">\n                        <ion-item>\n                            <ion-label position=\"floating\">Category</ion-label>\n                            <ion-input style=\"font-size: 13px; color: #737373;\" *ngIf=\"!edit\" readonly formControlName=\"category\" value=\"{{product.category}}\">\n                            </ion-input>\n                            <ion-select style=\"font-size: 14px; color: #737373;\" formControlName=\"category\" *ngIf=\"edit\"\n                                placeholder=\"{{product.category}}\">\n                                <ion-select-option style=\"font-size: 13px; color: #737373;\"\n                                    *ngFor=\"let item of category.categories\">{{item}}</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label position=\"floating\">Current price</ion-label>\n                            <ion-input style=\"font-size: 13px; color: #737373;\" [readonly]=\"!edit\" formControlName=\"currentprice\" value=\"{{product.currentprice}}\">\n                            </ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label position=\"floating\">Ingridients</ion-label>\n                            <ion-textarea rows=\"7\" style=\"font-size: 13px; color: #737373;\" value=\"{{product.ingridients}}\" [readonly]=\"!edit\" formControlName=\"ingridients\"></ion-textarea>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label position=\"floating\">Person</ion-label>\n                            <ion-input style=\"font-size: 13px; color: #737373;\" [readonly]=\"!edit\" formControlName=\"persons\" value=\"{{product.persons}}\">\n                            </ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label position=\"floating\">Recipe</ion-label>\n                            <ion-input style=\"font-size: 13px; color: #737373;\" [readonly]=\"!edit\" formControlName=\"recipe\" value=\"{{product.recipe}}\">\n                            </ion-input>\n                        </ion-item>\n                    </div><br><br><br><br>\n                    <div style=\"position: fixed;bottom: 10px;width: 100%;\">\n                        <ion-button *ngIf=\"!edit\" expand=\"full\" (click)=\"edit = true\">\n                            Edit\n                        </ion-button>\n                        <ion-button *ngIf=\"edit\" expand=\"full\" shape=\"block\" (click)=\"updateRecipes(product.id)\">\n                            Save Changes\n                        </ion-button>\n                    </div>\n                </form>\n            </div>\n\n\n            <!-- SHOP -->\n            <div *ngIf=\"shopType === 'Shops'\">\n                <form [formGroup]=\"shopForm\">\n                    <div style=\"padding-left: 40px;padding-right:40px ;padding-top: 20px;\">\n                        <img [src]=\"product.image\" width=\"100%\" alt=\"product image\" height=\"150px\"\n                            *ngIf=\"product.image !== undefined\">\n                        <img src=\"../../assets/images/image-placeholder.png\" width=\"100%\" alt=\"product image\" height=\"200px\"\n                            *ngIf=\"product.image === undefined\">\n                    </div>\n                    <div class=\"details\">\n                        <ion-item>\n                            <ion-label position=\"floating\">Product</ion-label>\n                            <ion-input style=\"font-size: 13px; color: #737373;\" *ngIf=\"product.product !== null\" [readonly]=\"!edit\" formControlName=\"product\"\n                                value=\"{{product.product}}\"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label position=\"floating\">Category</ion-label>\n                            <ion-input style=\"font-size: 13px; color: #737373;\" *ngIf=\"!edit\" readonly formControlName=\"category\" value=\"{{product.category}}\">\n                            </ion-input>\n                            <ion-select style=\"font-size: 14px; color: #737373;\" formControlName=\"category\" *ngIf=\"edit\"\n                                placeholder=\"{{product.category}}\">\n                                <ion-select-option style=\"font-size: 13px; color: #737373;\"\n                                    *ngFor=\"let item of category.categories\">{{item}}</ion-select-option>\n                            </ion-select>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label position=\"floating\">Stock</ion-label>\n                            <ion-input style=\"font-size: 13px; color: #737373;\" [readonly]=\"!edit\" formControlName=\"stock\" value=\"{{product.stock}}\">\n                            </ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label position=\"floating\">Quantity</ion-label>\n                            <ion-input style=\"font-size: 13px; color: #737373;\" [readonly]=\"!edit\" formControlName=\"quantity\" value=\"{{product.quantity}}\">\n                            </ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label position=\"floating\">Current price</ion-label>\n                            <ion-input style=\"font-size: 13px; color: #737373;\" [readonly]=\"!edit\" formControlName=\"currentprice\" value=\"{{product.currentprice}}\">\n                            </ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label position=\"floating\">Description</ion-label>\n                            <ion-textarea rows=\"7\" style=\"font-size: 13px; color: #737373;\" value=\"{{product.description}}\" [readonly]=\"!edit\" formControlName=\"description\"></ion-textarea>\n                        </ion-item>\n                    </div><br><br><br><br>\n                    <div style=\"position: fixed;bottom: 10px;width: 100%;\">\n                        <ion-button *ngIf=\"!edit\" expand=\"full\" (click)=\"edit = true\">\n                            Edit\n                        </ion-button>\n                        <ion-button *ngIf=\"edit\" expand=\"full\" shape=\"block\" (click)=\"updateShop(product.id)\">\n                            Save Changes\n                        </ion-button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</ion-content>"

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

module.exports = ".body {\n  color: var(--ion-color-medium);\n  background-color: white;\n  border-radius: 20px 20px 0px 0px;\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n  top: 100px;\n  overflow-y: scroll;\n}\n\n.title {\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.image {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 80%;\n  height: 80%;\n  float: right;\n}\n\n.right {\n  font-size: 2em;\n}\n\n.edits {\n  font-weight: bold;\n  color: var(--ion-color-secondary);\n}\n\n.create {\n  font-size: 1.9em;\n  padding-right: 10px;\n  padding-top: 10px;\n}\n\ntextarea {\n  border: 1px solid var(--ion-color-medium);\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGxhcmFzc2VtbWF4d2VsbC9EZXNrdG9wL05ld21hcmsvS3dpa19NZXJjaGFudC9zcmMvYXBwL3Byb2R1Y3Rtb2RhbC9wcm9kdWN0bW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9kdWN0bW9kYWwvcHJvZHVjdG1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0FDSUo7O0FERkE7RUFDSSxpQkFBQTtFQUNBLGlDQUFBO0FDS0o7O0FESEE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURHQTtFQUNJLHlDQUFBO0VBQ0EsV0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdG1vZGFsL3Byb2R1Y3Rtb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHRvcDogMTAwcHg7XG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XG59XG4udGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLmltYWdle1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4ucmlnaHR7XG4gICAgZm9udC1zaXplOiAyLjBlbTtcbn1cbi5lZGl0cyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLmNyZWF0ZXtcbiAgICBmb250LXNpemU6IDEuOWVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4vLyBpb24taW5wdXR7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyB9XG4vLyBpb24tbGFiZWx7XG4vLyAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4vLyB9XG50ZXh0YXJlYXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICB3aWR0aDogMTAwJTtcbn0iLCIuYm9keSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgdG9wOiAxMDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4udGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uaW1hZ2Uge1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucmlnaHQge1xuICBmb250LXNpemU6IDJlbTtcbn1cblxuLmVkaXRzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLmNyZWF0ZSB7XG4gIGZvbnQtc2l6ZTogMS45ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG50ZXh0YXJlYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

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
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");













let ProductmodalPage = class ProductmodalPage {
    constructor(navCtrl, service, location, formBuilder, load, fs, alert, asc, camera, imagePicker, cropService, st, file) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.location = location;
        this.formBuilder = formBuilder;
        this.load = load;
        this.fs = fs;
        this.alert = alert;
        this.asc = asc;
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.cropService = cropService;
        this.st = st;
        this.file = file;
        this.view = false;
        this.edit = false;
        this.image = '';
        this.service.hiddenTabs = true;
        this.shop = localStorage.getItem('shop');
        this.date = new Date();
    }
    ngOnInit() {
        this.shopType = localStorage.getItem('type');
        console.log("===========TYPE============");
        console.log(this.shopType);
    }
    ionViewDidEnter() {
        // get product details
        this.product = this.service.getProduct();
        console.log('======== product =========');
        console.log(this.product);
        this.view = true;
        // get categories 
        this.service.getallcategories(this.shop).valueChanges().subscribe(res => {
            this.category = res;
        });
        // RESTAURANT FORM
        this.restaurantForm = this.formBuilder.group({
            Meal: [this.product.Meal],
            category: [this.product.category],
            currentprice: [this.product.currentprice],
        });
        // RECIPES FORM
        this.recipesForm = this.formBuilder.group({
            category: [this.product.category],
            currentprice: [this.product.currentprice],
            // image: ['', Validators.required],
            ingridients: [this.product.ingridients],
            persons: [this.product.persons],
            recipe: [this.product.recipe],
        });
        // SHOP FORM
        this.shopForm = this.formBuilder.group({
            product: [this.product.product],
            category: [this.product.category],
            stock: [this.product.stock],
            quantity: [this.product.quantity],
            currentprice: [this.product.currentprice],
            description: [this.product.description],
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
    // UPDATING RESTAURANT PRODUCT
    updateRestaurant(id) {
        console.log(this.restaurantForm.value);
        this.edit = false;
        this.presentloading('Updating product ...');
        const ref = this.fs.collection(this.shop).doc(id);
        let data = this.restaurantForm.value;
        ref.update(data).then(res => {
            this.loading.dismiss();
            console.log(res);
            this.location.back();
        }).catch(error => {
            console.log(error);
        });
    }
    // UPDATING RECIPES PRODUCT
    updateRecipes(id) {
        console.log(this.recipesForm.value);
        this.edit = false;
        this.presentloading('Updating product ...');
        const ref = this.fs.collection(this.shop).doc(id);
        let data = this.recipesForm.value;
        ref.update(data).then(res => {
            this.loading.dismiss();
            console.log(res);
            this.location.back();
        }).catch(error => {
            console.log(error);
        });
    }
    // UPDATE SHOP PRODUCT
    updateShop(id) {
        console.log(this.shopForm.value);
        this.edit = false;
        this.presentloading('updating product ...');
        const ref = this.fs.collection(this.shop).doc(id);
        let data = this.shopForm.value;
        ref.update(data).then(res => {
            this.loading.dismiss();
            console.log(res);
            this.location.back();
        }).catch(error => {
            console.log(error);
        });
    }
    // DELETE PRODUCT
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
    // SHOW ALERT
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
                            if (this.shopType === 'food') {
                                this.updateRestaurant(this.product.id);
                            }
                            else if (this.shopType === 'recipes') {
                                this.updateRecipes(this.product.id);
                            }
                            else if (this.shopType === 'Shops') {
                                this.updateShop(this.product.id);
                            }
                            else {
                                console.log("Shop type not exits.");
                            }
                        }
                    }
                ]
            });
            yield alt.present();
        });
    }
    // IMAGE UPDATE
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
    // CONFIRM DELETE PRODUCT
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
    updateImageActionSheet() {
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
ProductmodalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__["ImagePicker"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__["Crop"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorage"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"] }
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
        _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__["ImagePicker"],
        _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__["Crop"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorage"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"]])
], ProductmodalPage);



/***/ })

}]);
//# sourceMappingURL=productmodal-productmodal-module-es2015.js.map