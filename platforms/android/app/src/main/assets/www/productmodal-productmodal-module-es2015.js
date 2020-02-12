(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productmodal-productmodal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/productmodal/productmodal.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/productmodal/productmodal.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content color=\"primary\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" padding>\n      <ion-icon name=\"arrow-back\" (click)=\"back()\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons slot=\"end\"(click)=\"edit = true\"*ngIf=\"edit == false\"style=\"padding-right: 5px;padding-top: 10px;\">\n      <ion-icon name=\"create\" class=\"create\" ></ion-icon>\n    </ion-buttons>\n    <ion-buttons slot=\"end\"(click)=\"edit = false\" *ngIf=\"edit == true\" style=\"padding-right: 5px;padding-top: 10px;\">\n      <ion-icon name=\"close\" class=\"create\" ></ion-icon>\n    </ion-buttons>\n    <ion-title *ngIf=\"view\">{{product.product}}</ion-title>\n  </ion-toolbar>\n  <div class=\"body\">\n    <div style=\"margin-top: 40%;text-align: center;\" *ngIf=\"!view\">\n      <ion-spinner name=\"circles\" color=\"primary\"></ion-spinner>\n    </div>\n    <div *ngIf=\"view\">\n      <form [formGroup]=\"productForm\">\n        <ion-row padding text-center>\n          <ion-col>\n            <ion-label class=\"title\">Tap on image to change</ion-label><br><br>\n            <ion-icon name=\"arrow-dropright\" color=\"medium\" class=\"right\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"4\">\n            <img class=\"image\" alt=\"image\" [src]=\"product.image\">\n          </ion-col>\n        </ion-row>\n        <ion-row padding>\n          <ion-col>\n            <ion-label>Product Name :</ion-label>\n          </ion-col>\n          <ion-col style=\"text-align:right\">\n            <ion-label class=\"edits\" *ngIf=\"!edit\">{{product.product}}</ion-label>\n            <ion-input type=\"text\" formControlName=\"product\" value=\"{{product.product}}\" *ngIf=\"edit\"></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row padding>\n          <ion-col>\n            <ion-label>Product Barcode :</ion-label>\n          </ion-col>\n          <ion-col style=\"text-align:right\">\n            <ion-label class=\"edits\" *ngIf=\"!edit\">{{product.barcode}}</ion-label>\n            <ion-input type=\"text\" formControlName=\"barcode\" value=\"{{product.barcode}}\" *ngIf=\"edit\"></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row padding>\n          <ion-col>\n            <ion-label>Product Category :</ion-label>\n          </ion-col>\n          <ion-col style=\"text-align:right\">\n            <ion-label class=\"edits\" *ngIf=\"!edit\">{{product.category}}</ion-label>\n            <ion-select formControlName=\"category\" *ngIf=\"edit\" placeholder=\"{{product.category}}\">\n              <ion-select-option *ngFor=\"let item of category.categories\">{{item.name}}</ion-select-option>\n            </ion-select>\n          </ion-col>\n        </ion-row>\n        <ion-row padding>\n          <ion-col>\n            <ion-label>Available Quantity :</ion-label>\n          </ion-col>\n          <ion-col style=\"text-align:right\">\n            <ion-label class=\"edits\"*ngIf=\"!edit\">{{product.stock}}</ion-label>\n            <ion-input type=\"text\" formControlName=\"stock\" value=\"{{product.stock}}\"*ngIf=\"edit\"></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row padding>\n          <ion-col>\n            <ion-label>Product Unit :</ion-label>\n          </ion-col>\n          <ion-col style=\"text-align:right\">\n            <ion-label class=\"edits\" *ngIf=\"!edit\">{{product.quantity}}</ion-label>\n            <ion-input type=\"text\" formControlName=\"quantity\" value=\"{{product.quantity}}\"*ngIf=\"edit\"></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row padding>\n          <ion-col>\n            <ion-label>Product Price :</ion-label>\n          </ion-col>\n          <ion-col style=\"text-align:right\">\n            <ion-label class=\"edits\" *ngIf=\"!edit\">{{product.currentprice}}</ion-label>\n            <ion-input type=\"text\" formControlName=\"currentprice\" value=\"{{product.currentprice}}\"*ngIf=\"edit\"></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row padding>\n          <ion-col>\n            <ion-label>Product Description :</ion-label>\n          </ion-col>\n          <ion-col style=\"text-align:right\">\n            <ion-label class=\"edits\" *ngIf=\"!edit\">{{product.description}}</ion-label>\n            <textarea type=\"text\" formControlName=\"description\" value=\"{{product.description}}\"*ngIf=\"edit\"></textarea>\n          </ion-col>\n        </ion-row>\n        <ion-row padding>\n          <ion-col>\n            <ion-label>Product status :</ion-label>\n          </ion-col>\n          <ion-col style=\"text-align:right\">\n            <ion-label class=\"edits\" *ngIf=\"!edit\">{{product.status}}</ion-label>\n            <ion-select formControlName=\"status\" value=\"{{product.status}}\" *ngIf=\"edit\">\n              <ion-select-option>Available</ion-select-option>\n              <ion-select-option>Unavailable</ion-select-option>\n            </ion-select>\n          </ion-col>\n        </ion-row>\n\n        <ion-button disabled expand=\"block\" shape=\"round\" style=\"margin-top: 50px;\" [disabled]=\"!edit\" (click)=\"alertShow('Product Update for this product is disabled')\">\n          Save Changes\n        </ion-button>\n      </form>\n    </div>\n  </div>\n</ion-content>"

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

module.exports = ".body {\n  color: var(--ion-color-medium);\n  background-color: white;\n  border-radius: 20px 20px 0px 0px;\n  width: 100%;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  padding-bottom: 50px;\n  margin-bottom: 0px;\n  margin-top: 30px;\n}\n\n.title {\n  font-weight: bold;\n  font-size: 1.4em;\n}\n\n.image {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 80%;\n  height: 80%;\n  float: right;\n}\n\n.right {\n  font-size: 2em;\n}\n\n.edits {\n  font-weight: bold;\n  color: var(--ion-color-secondary);\n}\n\n.create {\n  font-size: 1.9em;\n  padding-right: 10px;\n  padding-top: 10px;\n}\n\nion-input {\n  border: 1px solid var(--ion-color-medium);\n  width: 100%;\n}\n\nion-label {\n  padding-top: 10px;\n}\n\ntextarea {\n  border: 1px solid var(--ion-color-medium);\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0t3aWtfTWVyY2hhbnQvc3JjL2FwcC9wcm9kdWN0bW9kYWwvcHJvZHVjdG1vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZHVjdG1vZGFsL3Byb2R1Y3Rtb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0FDSUo7O0FERkE7RUFDSSxpQkFBQTtFQUNBLGlDQUFBO0FDS0o7O0FESEE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURKQTtFQUNJLHlDQUFBO0VBQ0EsV0FBQTtBQ09KOztBRExBO0VBQ0ksaUJBQUE7QUNRSjs7QUROQTtFQUNJLHlDQUFBO0VBQ0EsV0FBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdG1vZGFsL3Byb2R1Y3Rtb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi50aXRsZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuNGVtO1xufVxuLmltYWdle1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4ucmlnaHR7XG4gICAgZm9udC1zaXplOiAyLjBlbTtcbn1cbi5lZGl0cyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLmNyZWF0ZXtcbiAgICBmb250LXNpemU6IDEuOWVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5pb24taW5wdXR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5pb24tbGFiZWx7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG50ZXh0YXJlYXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICB3aWR0aDogMTAwJTtcbn0iLCIuYm9keSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG59XG5cbi5pbWFnZSB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogODAlO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5yaWdodCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4uZWRpdHMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4uY3JlYXRlIHtcbiAgZm9udC1zaXplOiAxLjllbTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbnRleHRhcmVhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

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
        this.location.back();
    }
    saveChanges() {
        console.log(this.productForm.value);
        this.edit = false;
        this.presentloading('updating product ...');
        const ref = this.fs.collection(this.shop).doc(this.product.OrderID);
        let data = this.productForm.value;
        ref.update(data).then(res => {
            this.loading.dismiss();
            console.log(res);
        }).catch(error => {
            console.log(error);
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
                        text: 'close',
                        role: 'cancel'
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