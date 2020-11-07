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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _remove_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./remove-category.page */ "./src/app/remove-category/remove-category.page.ts");







var routes = [
    {
        path: '',
        component: _remove_category_page__WEBPACK_IMPORTED_MODULE_6__["RemoveCategoryPage"]
    }
];
var RemoveCategoryPageModule = /** @class */ (function () {
    function RemoveCategoryPageModule() {
    }
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
    return RemoveCategoryPageModule;
}());



/***/ }),

/***/ "./src/app/remove-category/remove-category.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/remove-category/remove-category.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  font-size: 1.2em;\n  color: white;\n  font-weight: bold;\n}\n\n.body {\n  background-color: transparent;\n  height: 100%;\n  width: 100%;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.label {\n  font-size: 1.3em;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n  margin-bottom: 15px;\n}\n\n.container {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGxhcmFzc2VtbWF4d2VsbC9EZXNrdG9wL05ld21hcmsvS3dpa19NZXJjaGFudC9zcmMvYXBwL3JlbW92ZS1jYXRlZ29yeS9yZW1vdmUtY2F0ZWdvcnkucGFnZS5zY3NzIiwic3JjL2FwcC9yZW1vdmUtY2F0ZWdvcnkvcmVtb3ZlLWNhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksZ0JBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3JlbW92ZS1jYXRlZ29yeS9yZW1vdmUtY2F0ZWdvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmxhYmVsIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cbiIsImlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubGFiZWwge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var RemoveCategoryPage = /** @class */ (function () {
    function RemoveCategoryPage(location, service, db, alert) {
        var _this = this;
        this.location = location;
        this.service = service;
        this.db = db;
        this.alert = alert;
        this.show = false;
        this.service.getallcategories(localStorage.getItem('shop')).valueChanges().subscribe(function (res) {
            _this.categories = res;
            _this.show = true;
            console.log('categories', _this.categories);
        });
    }
    RemoveCategoryPage.prototype.ngOnInit = function () {
    };
    RemoveCategoryPage.prototype.back = function () {
        this.location.back();
    };
    RemoveCategoryPage.prototype.newCat = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var pop;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
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
                                    handler: function (data) {
                                        console.log('form popup', data);
                                        var cats = _this.categories.categories;
                                        cats.push(data.catName);
                                        _this.service.getallcategories(localStorage.getItem('shop')).update({
                                            categories: cats
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        pop = _a.sent();
                        return [4 /*yield*/, pop.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RemoveCategoryPage.prototype.DeleteCat = function (index) {
        var cats = this.categories.categories;
        cats.splice(index, 1);
        this.service.getallcategories(localStorage.getItem('shop')).update({
            categories: cats
        });
    };
    RemoveCategoryPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] },
        { type: _database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
    ]; };
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
    return RemoveCategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=remove-category-remove-category-module-es5.js.map