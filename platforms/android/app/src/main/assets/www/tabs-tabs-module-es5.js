(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\" [hidden]=\"service.hiddenTabs\">\n    <ion-tab-button tab=\"dashboard\" >\n      <ion-icon name=\"home\" ></ion-icon>\n      <!-- <ion-label>Dashboard</ion-label> -->\n    </ion-tab-button>\n    <ion-tab-button tab=\"tab3\" >\n      <ion-icon name=\"easel\"></ion-icon>\n      <!-- <ion-label>Soko</ion-label> -->\n    </ion-tab-button>\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"qr-scanner\"></ion-icon>\n      <!-- <ion-label>Scan</ion-label> -->\n    </ion-tab-button>\n    <ion-tab-button tab=\"notifications\" [ngClass]=\"{'animate': animate == true}\" >\n      <ion-icon name=\"notifications\" >\n      </ion-icon> <ion-badge id=\"notifications-badge\" >{{count}}</ion-badge>\n    </ion-tab-button>\n    <ion-tab-button tab=\"profile\" >\n      <ion-icon name=\"person\"></ion-icon>\n      <!-- <ion-label>Products</ion-label> -->\n    </ion-tab-button>\n   \n  </ion-tab-bar>\n\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/Auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/Auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");





var AuthService = /** @class */ (function () {
    function AuthService(router, fauth, service) {
        this.router = router;
        this.fauth = fauth;
        this.service = service;
    }
    AuthService.prototype.canActivate = function (route) {
        //  let logs = this.fauth.auth.currentUser ;
        var logs = localStorage.getItem('userID');
        console.log(logs);
        if (logs != null) {
            return true;
        }
        else {
            this.service.hiddenTabs = true;
            this.router.navigate(['tabs/login']);
        }
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _services_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/Auth/logs.service.ts":
/*!**************************************!*\
  !*** ./src/app/Auth/logs.service.ts ***!
  \**************************************/
/*! exports provided: LogsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogsService", function() { return LogsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");





var LogsService = /** @class */ (function () {
    function LogsService(router, fauth, service) {
        this.router = router;
        this.fauth = fauth;
        this.service = service;
    }
    LogsService.prototype.canActivate = function (route) {
        var logs = localStorage.getItem('userID');
        console.log(logs);
        if (logs != null) {
            this.router.navigate(['tabs/dashboard']);
        }
        else {
            return true;
        }
    };
    LogsService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"] }
    ]; };
    LogsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _services_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"]])
    ], LogsService);
    return LogsService;
}());



/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _Auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Auth/auth.service */ "./src/app/Auth/auth.service.ts");
/* harmony import */ var _Auth_logs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Auth/logs.service */ "./src/app/Auth/logs.service.ts");






var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | tab1-tab1-module */ "tab1-tab1-module").then(__webpack_require__.bind(null, /*! ../tab1/tab1.module */ "./src/app/tab1/tab1.module.ts")).then(function (m) { return m.Tab1PageModule; });
                        },
                        canActivate: [_Auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]]
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | tab2-tab2-module */ "tab2-tab2-module").then(__webpack_require__.bind(null, /*! ../tab2/tab2.module */ "./src/app/tab2/tab2.module.ts")).then(function (m) { return m.Tab2PageModule; });
                        }, canActivate: [_Auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]]
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | tab3-tab3-module */ "tab3-tab3-module").then(__webpack_require__.bind(null, /*! ../tab3/tab3.module */ "./src/app/tab3/tab3.module.ts")).then(function (m) { return m.Tab3PageModule; });
                        }
                    }
                ]
            },
            {
                path: 'profile',
                loadChildren: function () { return __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ../profile/profile.module */ "./src/app/profile/profile.module.ts")).then(function (m) { return m.ProfilePageModule; }); }, canActivate: [_Auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]]
            },
            {
                path: 'notifications',
                // tslint:disable-next-line: max-line-length
                loadChildren: function () { return __webpack_require__.e(/*! import() | notifications-notifications-module */ "notifications-notifications-module").then(__webpack_require__.bind(null, /*! ../notifications/notifications.module */ "./src/app/notifications/notifications.module.ts")).then(function (m) { return m.NotificationsPageModule; }); }, canActivate: [_Auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]]
            },
            {
                path: 'login',
                loadChildren: function () { return __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ../login/login.module */ "./src/app/login/login.module.ts")).then(function (m) { return m.LoginPageModule; }); }, canActivate: [_Auth_logs_service__WEBPACK_IMPORTED_MODULE_5__["LogsService"]]
            },
            {
                path: 'signup',
                loadChildren: function () { return __webpack_require__.e(/*! import() | signup-signup-module */ "signup-signup-module").then(__webpack_require__.bind(null, /*! ../signup/signup.module */ "./src/app/signup/signup.module.ts")).then(function (m) { return m.SignupPageModule; }); }
            },
            // tslint:disable-next-line: max-line-length
            { path: 'products', loadChildren: function () { return __webpack_require__.e(/*! import() | products-products-module */ "products-products-module").then(__webpack_require__.bind(null, /*! ../products/products.module */ "./src/app/products/products.module.ts")).then(function (m) { return m.ProductsPageModule; }); }, canActivate: [_Auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]] },
            {
                // tslint:disable-next-line: max-line-length
                path: 'dashboard', loadChildren: function () { return __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardPageModule; }); }, canActivate: [_Auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]]
            },
            {
                path: 'orders', loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../orders/orders.module */ "./src/app/orders/orders.module.ts")).then(function (m) { return m.OrdersPageModule; }); }, canActivate: [_Auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]]
            },
            {
                // tslint:disable-next-line: max-line-length
                path: 'order-stats', loadChildren: function () { return __webpack_require__.e(/*! import() | order-stats-order-stats-module */ "order-stats-order-stats-module").then(__webpack_require__.bind(null, /*! ../order-stats/order-stats.module */ "./src/app/order-stats/order-stats.module.ts")).then(function (m) { return m.OrderStatsPageModule; }); }, canActivate: [_Auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]]
            },
            {
                // tslint:disable-next-line: whitespace
                path: 'sales', loadChildren: function () { return __webpack_require__.e(/*! import() | sales-sales-module */ "sales-sales-module").then(__webpack_require__.bind(null, /*! ../sales/sales.module */ "./src/app/sales/sales.module.ts")).then(function (m) { return m.SalesPageModule; }); }, canActivate: [_Auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]]
            },
            {
                path: 'stock', loadChildren: function () { return __webpack_require__.e(/*! import() | stock-stock-module */ "stock-stock-module").then(__webpack_require__.bind(null, /*! ../stock/stock.module */ "./src/app/stock/stock.module.ts")).then(function (m) { return m.StockPageModule; }); }, canActivate: [_Auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]]
            },
            {
                // tslint:disable-next-line: max-line-length
                path: 'customers', loadChildren: function () { return __webpack_require__.e(/*! import() | customers-customers-module */ "customers-customers-module").then(__webpack_require__.bind(null, /*! ../customers/customers.module */ "./src/app/customers/customers.module.ts")).then(function (m) { return m.CustomersPageModule; }); }, canActivate: [_Auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]]
            },
            {
                // tslint:disable-next-line: max-line-length
                path: 'profilemodal', loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../profilemodal/profilemodal.module */ "./src/app/profilemodal/profilemodal.module.ts")).then(function (m) { return m.ProfilemodalPageModule; }); },
            },
            {
                // tslint:disable-next-line: max-line-length
                path: 'productmodal', loadChildren: function () { return __webpack_require__.e(/*! import() | productmodal-productmodal-module */ "productmodal-productmodal-module").then(__webpack_require__.bind(null, /*! ../productmodal/productmodal.module */ "./src/app/productmodal/productmodal.module.ts")).then(function (m) { return m.ProductmodalPageModule; }); }, canActivate: [_Auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]]
            },
            {
                // tslint:disable-next-line: max-line-length
                path: 'category', loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../category/category.module */ "./src/app/category/category.module.ts")).then(function (m) { return m.CategoryPageModule; }); }, canActivate: [_Auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]]
            },
            {
                // tslint:disable-next-line: max-line-length
                path: 'remove', loadChildren: function () { return __webpack_require__.e(/*! import() | remove-category-remove-category-module */ "remove-category-remove-category-module").then(__webpack_require__.bind(null, /*! ../remove-category/remove-category.module */ "./src/app/remove-category/remove-category.module.ts")).then(function (m) { return m.RemoveCategoryPageModule; }); }, canActivate: [_Auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]]
            },
            {
                path: '',
                redirectTo: '/tabs/dashboard',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/login',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".animate {\n  -webkit-animation: shake 5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n          animation: shake 5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n  color: var(--ion-color-warning);\n}\n.animate #notifications-badge {\n  background-color: var(--ion-color-primary) !important;\n  position: absolute;\n  top: 15px;\n  right: 20px;\n  border-radius: 100%;\n}\n@-webkit-keyframes shake {\n  10%, 90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%, 80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%, 60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%, 90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n            transform: translate3d(-1px, 0, 0);\n  }\n  20%, 80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n            transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n            transform: translate3d(-4px, 0, 0);\n  }\n  40%, 60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n            transform: translate3d(4px, 0, 0);\n  }\n}\nion-badge {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0t3aWtfTWVyY2hhbnQvc3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUVBQUE7VUFBQSw2REFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLCtCQUFBO0FDQ0Y7QURBRTtFQUNFLHFEQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDRUo7QURDQTtFQUNJO0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFQ0VKO0VEQ0U7SUFDRSx5Q0FBQTtZQUFBLGlDQUFBO0VDQ0o7RURFRTtJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RUNBSjtFREdFO0lBQ0UseUNBQUE7WUFBQSxpQ0FBQTtFQ0RKO0FBQ0Y7QURkQTtFQUNJO0lBQ0UsMENBQUE7WUFBQSxrQ0FBQTtFQ0VKO0VEQ0U7SUFDRSx5Q0FBQTtZQUFBLGlDQUFBO0VDQ0o7RURFRTtJQUNFLDBDQUFBO1lBQUEsa0NBQUE7RUNBSjtFREdFO0lBQ0UseUNBQUE7WUFBQSxpQ0FBQTtFQ0RKO0FBQ0Y7QURHQztFQUNHLHVCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFuaW1hdGV7XG4gIGFuaW1hdGlvbjogc2hha2UgNXMgY3ViaWMtYmV6aWVyKC4zNiwuMDcsLjE5LC45NykgYm90aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICAjbm90aWZpY2F0aW9ucy1iYWRnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTVweDtcbiAgICByaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxufVxuQGtleWZyYW1lcyBzaGFrZSB7XG4gICAgMTAlLCA5MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcbiAgICB9XG4gICAgXG4gICAgMjAlLCA4MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xuICAgIH1cbiAgXG4gICAgMzAlLCA1MCUsIDcwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00cHgsIDAsIDApO1xuICAgIH1cbiAgXG4gICAgNDAlLCA2MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0cHgsIDAsIDApO1xuICAgIH1cbiAgfVxuIGlvbi1iYWRnZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiB9IiwiLmFuaW1hdGUge1xuICBhbmltYXRpb246IHNoYWtlIDVzIGN1YmljLWJlemllcigwLjM2LCAwLjA3LCAwLjE5LCAwLjk3KSBib3RoO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG59XG4uYW5pbWF0ZSAjbm90aWZpY2F0aW9ucy1iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAxMCUsIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcbiAgfVxuICAyMCUsIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xuICB9XG4gIDMwJSwgNTAlLCA3MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTRweCwgMCwgMCk7XG4gIH1cbiAgNDAlLCA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKTtcbiAgfVxufVxuaW9uLWJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _one_signal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../one-signal.service */ "./src/app/one-signal.service.ts");





var TabsPage = /** @class */ (function () {
    function TabsPage(menuCtrl, service, signal) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.service = service;
        this.signal = signal;
        // variables
        this.animate = false;
        this.count = '';
        this.menuCtrl.enable(true);
        this.signal.noticeCount.subscribe(function (res) {
            _this.count = res;
            if (_this.count != '0') {
                _this.setAnimationTimeout();
            }
        });
    }
    // set timeout for animation
    TabsPage.prototype.setAnimationTimeout = function () {
        var _this = this;
        this.animate = true;
        setTimeout(function () {
            _this.animate = false;
        }, 2000);
    };
    TabsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] },
        { type: _one_signal_service__WEBPACK_IMPORTED_MODULE_4__["OneSignalService"] }
    ]; };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _services_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"],
            _one_signal_service__WEBPACK_IMPORTED_MODULE_4__["OneSignalService"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map