(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["remove-category-remove-category-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/remove-category/remove-category.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/remove-category/remove-category.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\n  <div class=\"body\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" padding>\n      <ion-icon  name=\"arrow-back\" (click)=\"back()\"></ion-icon>\n    </ion-buttons>\n    <ion-title  text-center>Remove  Category</ion-title>\n  </ion-toolbar>\n<div class=\"container\" *ngIf=\"show\">\n  <ion-label padding class=\"label\">Slide left on a category to delete</ion-label>\n  <!-- <ion-item text-center *ngFor=\"let item of categories.categories\">\n     <ion-icon name=\"bulb\"></ion-icon> \n    <ion-label>{{item}}</ion-label>\n  </ion-item> -->\n  <ion-item-sliding *ngFor=\"let item of categories.categories;let i = index\">\n    <ion-item  class=\"ion-text-center\">\n      <ion-label>{{item}}</ion-label>\n    </ion-item>\n    <ion-item-options>\n      <ion-item-option color=\"danger\" (click)=\"DeleteCat(i)\">\n        <ion-icon slot=\"end\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\n        Delete\n      </ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n  \n</div>\n\n</div>\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"full\" (click)=\"newCat()\">\n    Add New Category\n  </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/remove-category/remove-category.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/remove-category/remove-category.module.ts ***!
  \***********************************************************/
/*! exports provided: RemoveCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveCategoryPageModule", function() { return RemoveCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _remove_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./remove-category.page */ "./src/app/remove-category/remove-category.page.ts");







const routes = [
    {
        path: '',
        component: _remove_category_page__WEBPACK_IMPORTED_MODULE_6__["RemoveCategoryPage"]
    }
];
let RemoveCategoryPageModule = class RemoveCategoryPageModule {
};
RemoveCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_remove_category_page__WEBPACK_IMPORTED_MODULE_6__["RemoveCategoryPage"]]
    })
], RemoveCategoryPageModule);



/***/ }),

/***/ "./src/app/remove-category/remove-category.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/remove-category/remove-category.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  font-size: 1.2em;\n  color: white;\n  font-weight: bold;\n}\n\n.body {\n  background-color: transparent;\n  height: 100%;\n  width: 100%;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.label {\n  font-size: 1.3em;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n  margin-bottom: 15px;\n}\n\n.container {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGxhcmFzc2VtbWF4d2VsbC9EZXNrdG9wL0t3aWtfTWVyY2hhbnQvc3JjL2FwcC9yZW1vdmUtY2F0ZWdvcnkvcmVtb3ZlLWNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVtb3ZlLWNhdGVnb3J5L3JlbW92ZS1jYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QUREQTtFQUNJLGdCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9yZW1vdmUtY2F0ZWdvcnkvcmVtb3ZlLWNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG4iLCJpb24tdGl0bGUge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/remove-category/remove-category.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/remove-category/remove-category.page.ts ***!
  \*********************************************************/
/*! exports provided: RemoveCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveCategoryPage", function() { return RemoveCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let RemoveCategoryPage = class RemoveCategoryPage {
    constructor(location, service, db, alert) {
        this.location = location;
        this.service = service;
        this.db = db;
        this.alert = alert;
        this.show = false;
        this.service.getallcategories(localStorage.getItem('shop')).valueChanges().subscribe(res => {
            this.categories = res;
            this.show = true;
            console.log('categories', this.categories);
        });
    }
    ngOnInit() {
    }
    back() {
        this.location.back();
    }
    newCat() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const pop = yield this.alert.create({
                header: "Enter name of the new category",
                inputs: [
                    {
                        name: "catName",
                        placeholder: "Enter Category name"
                    }
                ],
                buttons: [
                    {
                        text: "Cancel",
                        role: 'cancel'
                    },
                    {
                        text: "Add",
                        handler: (data) => {
                            console.log('form popup', data);
                            let cats = this.categories.categories;
                            cats.push(data.catName);
                            this.service.getallcategories(localStorage.getItem('shop')).update({
                                categories: cats
                            });
                        }
                    }
                ]
            });
            yield pop.present();
        });
    }
    DeleteCat(index) {
        let cats = this.categories.categories;
        cats.splice(index, 1);
        this.service.getallcategories(localStorage.getItem('shop')).update({
            categories: cats
        });
    }
};
RemoveCategoryPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
RemoveCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-remove-category',
        template: __webpack_require__(/*! raw-loader!./remove-category.page.html */ "./node_modules/raw-loader/index.js!./src/app/remove-category/remove-category.page.html"),
        styles: [__webpack_require__(/*! ./remove-category.page.scss */ "./src/app/remove-category/remove-category.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
        _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"],
        _database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
], RemoveCategoryPage);



/***/ })

}]);
//# sourceMappingURL=remove-category-remove-category-module-es2015.js.map