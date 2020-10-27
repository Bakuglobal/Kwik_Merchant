(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [hidden]=\"hiddenHeader\">\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button autoHide=\"false\"></ion-menu-button>\n        </ion-buttons>\n        <ion-title text-center>Konnect</ion-title>\n        <ion-searchbar placeholder=\"Search for a shop \" animated type=\"text\" *ngIf=\"showSearch\"></ion-searchbar>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"openPostModal()\">\n                <ion-icon style=\"width: 23px; height: 23px;\" name=\"add-circle-outline\" size=\"small\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n\n\n    <div class=\"page-content\">\n        <div style=\"margin-left: 5px; margin-right: 5px;\">\n            <ion-searchbar [(ngModel)]=\"searchTerm\" placeholder=\"Search for a shop \" (ionChange)=\"searchShop()\">\n            </ion-searchbar>\n        </div>\n\n        <ion-card class=\"card\" *ngFor=\"let item of Posts\">\n            <div class=\"header\">\n                <div class=\"image\" (click)=\"infoModal('Kakila Organic')\">\n                    <ion-avatar>\n                        <img src=\"{{item.logo}}\">\n                    </ion-avatar>\n                </div>\n                <div class=\"name\" (click)=\"infoModal(item)\">\n                    {{item.shop.slice(0, 12)}}\n                </div>\n                <div class=\"date\">\n                    {{item.time.toDate() | date}}\n                </div>\n            </div>\n            <!-- DESCRIPTION -->\n            <p class=\"description\">\n                {{item.Text}}\n            </p>\n\n            <!-- MAIN IMAGE -->\n            <div class=\"main-image\">\n                <ion-slides>\n                    <ion-slide *ngFor=\"let n of item.Images\">\n                        <img src=\"{{n}}\" (click)=\"showImage(n)\">\n                    </ion-slide>\n                </ion-slides>\n\n            </div>\n\n            <!-- LIKE, COMMENT AND SHARE -->\n            <div class=\"like-comment-share\">\n                <ion-row>\n                    <ion-col size=\"4\">\n                        <ion-button fill=\"light\" (click)=\"like(item)\">\n                            <ion-icon [ngClass]=\"{'color': item.liked === true}\" size=\"large\" src=\"../../assets/images/heart.svg\">\n                            </ion-icon>\n                            &nbsp;&nbsp;<span class=\"ion-text-lowercase\">{{item.likes}}</span>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col size=\"4\">\n                        <ion-button fill=\"light\" (click)=\"comments(item.id)\">\n                            <ion-icon size=\"large\" src=\"../../assets/images/comment.svg\"></ion-icon>\n                            &nbsp;&nbsp;<span class=\"ion-text-lowercase\">{{item.comments}}</span>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col size=\"4\">\n                        <ion-button fill=\"light\" (click)=\"share(item)\">\n                            <ion-icon style=\"width: 14.5px; padding-right: 0px;\" size=\"large\"\n                                src=\"../../assets/images/share.svg\"></ion-icon>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </div>\n\n            <div class=\"line\"></div>\n\n            <!-- LAST USER COMMENT -->\n            <div class=\"user-comment\" *ngIf=\"item.usersComments == 0\">\n\n                <div class=\"user-avatar\">\n                    <ion-avatar>\n                        <img src=\"{{item.lastComment.userLogo}}\">\n                    </ion-avatar>\n                </div>\n                <div class=\"user-name-and-date\">\n                    <div class=\"name\">{{item.lastComment.userName}}</div>\n                    <!-- <div class=\"date\">10 mins ago</div> -->\n                    <!-- <div class=\"date\">{{item.lastComment.time.toDate() | date}}</div> -->\n                </div>\n\n                <div class=\"comment-container\">\n                    <p class=\"comment\">\n                        {{item.lastComment.Text}}\n                    </p>\n                    <div class=\"view-all-comments\" (click)=\"comments(item.id)\">View all comments</div>\n                </div>\n\n            </div>\n        </ion-card><br>\n        <!-- END OF FIRST SOKO POST -->\n    </div>\n    <!-- END OF SOKO POST -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  border-radius: 5px;\n  margin-left: 0px;\n  margin-right: 0px;\n}\nion-card ion-card-content {\n  padding: 0px;\n}\na {\n  text-decoration: none;\n}\n.color {\n  color: #00ade5;\n}\n.post-img {\n  widows: 100%;\n}\nion-toolbar {\n  border-radius: 0 !important;\n}\nion-badge {\n  margin-left: -12px;\n  margin-top: -12px;\n  border-radius: 100%;\n  font-size: 9px;\n}\nion-badge div {\n  margin-bottom: -2px;\n}\n.line {\n  height: 1px;\n  background-color: #636363;\n  margin-left: 15px;\n  margin-right: 15px;\n  opacity: 0.2;\n}\n.page-content {\n  padding-left: 0px;\n  padding-right: 0px;\n  background-color: #e7ebf3;\n}\n.page-content .card {\n  margin-left: 15px;\n  margin-right: 15px;\n  background-color: white;\n}\n.page-content .card .header {\n  margin-left: 15px;\n  height: 70px;\n  margin-right: 15px;\n}\n.page-content .card .header .image {\n  position: absolute;\n  margin-top: 15px;\n}\n.page-content .card .header .image img {\n  width: 42px;\n  height: 42px;\n}\n.page-content .card .header .name {\n  position: absolute;\n  margin-left: 55px;\n  margin-top: 28px;\n  font-weight: bold;\n  font-size: 15px;\n}\n.page-content .card .header .date {\n  position: absolute;\n  margin-left: 75px;\n  float: right;\n  right: 30px;\n  margin-top: 29px;\n  color: #636363;\n  font-size: 12px;\n}\n.page-content .card .description {\n  font-size: 12px;\n  color: #636363;\n  margin-left: 15px;\n  margin-right: 15px;\n  text-align: left;\n}\n.page-content .card .main-image {\n  margin-left: 15px;\n  margin-right: 15px;\n}\n.page-content .card .main-image img {\n  width: 100%;\n  height: 200px;\n}\n.page-content .card .like-comment-share {\n  height: 53px;\n  background-color: white;\n  padding-top: 5px;\n}\n.page-content .card .like-comment-share ion-row {\n  padding: 0px;\n  text-align: center;\n}\n.page-content .card .like-comment-share ion-row ion-col ion-button {\n  font-size: 10px;\n  color: #636363;\n  font-size: 12px;\n}\n.page-content .card .like-comment-share ion-row ion-col ion-button ion-icon {\n  width: 15px;\n}\n.page-content .card .user-comment {\n  background-color: white;\n  margin-left: 15px;\n  margin-right: 15px;\n  padding-bottom: 10px;\n}\n.page-content .card .user-comment .user-avatar {\n  width: 70px;\n  padding-top: 15px;\n  padding-left: 15px;\n}\n.page-content .card .user-comment .user-avatar img {\n  width: 30px;\n  height: 30px;\n}\n.page-content .card .user-comment .user-name-and-date {\n  position: absolute;\n  margin-top: -55px;\n  left: 90px;\n  right: 30px;\n}\n.page-content .card .user-comment .user-name-and-date .name {\n  float: left;\n  font-size: 13px;\n  font-weight: bold;\n}\n.page-content .card .user-comment .user-name-and-date .date {\n  float: right;\n  padding-right: 15px;\n  color: #636363;\n  margin-top: 2px;\n  font-size: 10px;\n}\n.page-content .card .user-comment .comment-container {\n  margin-top: -40px;\n  color: #636363;\n  padding-left: 61px;\n  padding-right: 8px;\n}\n.page-content .card .user-comment .comment-container .comment {\n  font-size: 12px;\n  text-align: left;\n}\n.page-content .card .user-comment .comment-container .view-all-comments {\n  color: #636363;\n  font-size: 10px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGxhcmFzc2VtbWF4d2VsbC9EZXNrdG9wL0t3aWtfTWVyY2hhbnQvc3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURBRTtFQUNJLFlBQUE7QUNFTjtBREdBO0VBQ0UscUJBQUE7QUNBRjtBREVFO0VBQ0ksY0FBQTtBQ0NOO0FEQ0E7RUFDRSxZQUFBO0FDRUY7QURDQTtFQUNFLDJCQUFBO0FDRUY7QURHQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNBRjtBRENFO0VBQ0ksbUJBQUE7QUNDTjtBRElBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNERjtBRE9BO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDSkY7QURLRTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0hOO0FES007RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0hWO0FESVU7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDRmQ7QURHYztFQUNJLFdBQUE7RUFDQSxZQUFBO0FDRGxCO0FESVU7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNGZDtBRElVO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0ZkO0FETU07RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0pWO0FET007RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDTFY7QURNVTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDSmQ7QURRTTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDTlY7QURPVTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0xkO0FETWM7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNKbEI7QURLa0I7RUFDSSxXQUFBO0FDSHRCO0FEU007RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ1BWO0FEUVU7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ05kO0FET2M7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0xsQjtBRFFVO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDTmQ7QURPYztFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNMbEI7QURPYztFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0xsQjtBRFFVO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ05kO0FET2M7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNMbEI7QURPYztFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNMbEIiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBpb24tY2FyZC1jb250ZW50e1xuICAgICAgcGFkZGluZzogMHB4O1xuICB9XG4gXG59XG5cbmF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAuY29sb3Ige1xuICAgICAgY29sb3I6ICMwMGFkZTUgO1xuICB9XG4ucG9zdC1pbWd7XG4gIHdpZG93czogMTAwJTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG5cblxuLy8gTk9USUZJQ0FUSU9OIFBBUlRcbmlvbi1iYWRnZSB7XG4gIG1hcmdpbi1sZWZ0OiAtMTJweDsgXG4gIG1hcmdpbi10b3A6IC0xMnB4OyBcbiAgYm9yZGVyLXJhZGl1czogMTAwJTsgXG4gIGZvbnQtc2l6ZTogOXB4O1xuICBkaXYge1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgfVxufVxuXG5cbi5saW5lIHtcbiAgaGVpZ2h0OiAxcHg7IFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM2MzYzOyBcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDsgXG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuXG5cblxuLnBhZ2UtY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogMHB4OyBcbiAgcGFkZGluZy1yaWdodDogMHB4OyBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZWJmMztcbiAgLmNhcmQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7IFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4OyAgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIC8vIENBUkQgSEVBREVSXG4gICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDsgXG4gICAgICAgICAgaGVpZ2h0OiA3MHB4OyBcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyAgXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogNDJweDsgXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNTVweDsgIFxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyOHB4OyBcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kYXRlIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDc1cHg7IFxuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7IFxuICAgICAgICAgICAgICByaWdodDogMzBweDsgXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI5cHg7IFxuICAgICAgICAgICAgICBjb2xvcjogIzYzNjM2MzsgXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBDQVJEIERFU0NSSVBUSU9OXG4gICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDsgXG4gICAgICAgICAgY29sb3I6ICM2MzYzNjM7IFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4OyBcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7IFxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG4gICAgICAvLyBDQVJEIE1BSU4gSU1BR0VcbiAgICAgIC5tYWluLWltYWdlIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDsgXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBMSUtFIENPTU1FTlQgQU5EIFNIQVJFXG4gICAgICAubGlrZS1jb21tZW50LXNoYXJlIHtcbiAgICAgICAgICBoZWlnaHQ6IDUzcHg7IFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7IFxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGlvbi1jb2wgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7ICBcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjM2MzYzOyBcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFVTRVIgQ09NTUVOVFxuICAgICAgLnVzZXItY29tbWVudCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4OyBcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7IFxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgIC51c2VyLWF2YXRhciB7XG4gICAgICAgICAgICAgIHdpZHRoOiA3MHB4OyBcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7IFxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDsgXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLnVzZXItbmFtZS1hbmQtZGF0ZSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01NXB4OyBcbiAgICAgICAgICAgICAgbGVmdDogOTBweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0OyBcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDsgXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7IFxuICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDsgXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzYzNjM2MzsgXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7IFxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb21tZW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC00MHB4OyBcbiAgICAgICAgICAgICAgY29sb3I6ICM2MzYzNjM7IFxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDYxcHg7ICBcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgICAgICAgICAgICAuY29tbWVudCB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7IFxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAudmlldy1hbGwtY29tbWVudHMge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICM2MzYzNjM7IFxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICB9XG4gIH1cbn0iLCJpb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29sb3Ige1xuICBjb2xvcjogIzAwYWRlNTtcbn1cblxuLnBvc3QtaW1nIHtcbiAgd2lkb3dzOiAxMDAlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLWJhZGdlIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xuICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgZm9udC1zaXplOiA5cHg7XG59XG5pb24tYmFkZ2UgZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcbn1cblxuLmxpbmUge1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzNjM2MztcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG4ucGFnZS1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZWJmMztcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLmhlYWRlciB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLmhlYWRlciAuaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC5oZWFkZXIgLmltYWdlIGltZyB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC5oZWFkZXIgLm5hbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiA1NXB4O1xuICBtYXJnaW4tdG9wOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAuaGVhZGVyIC5kYXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogNzVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICByaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogMjlweDtcbiAgY29sb3I6ICM2MzYzNjM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzYzNjM2MztcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLm1haW4taW1hZ2Uge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAubWFpbi1pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLmxpa2UtY29tbWVudC1zaGFyZSB7XG4gIGhlaWdodDogNTNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC5saWtlLWNvbW1lbnQtc2hhcmUgaW9uLXJvdyB7XG4gIHBhZGRpbmc6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAubGlrZS1jb21tZW50LXNoYXJlIGlvbi1yb3cgaW9uLWNvbCBpb24tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzYzNjM2MztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAubGlrZS1jb21tZW50LXNoYXJlIGlvbi1yb3cgaW9uLWNvbCBpb24tYnV0dG9uIGlvbi1pY29uIHtcbiAgd2lkdGg6IDE1cHg7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC51c2VyLWNvbW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC51c2VyLWNvbW1lbnQgLnVzZXItYXZhdGFyIHtcbiAgd2lkdGg6IDcwcHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC51c2VyLWNvbW1lbnQgLnVzZXItYXZhdGFyIGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC51c2VyLWNvbW1lbnQgLnVzZXItbmFtZS1hbmQtZGF0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogLTU1cHg7XG4gIGxlZnQ6IDkwcHg7XG4gIHJpZ2h0OiAzMHB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAudXNlci1jb21tZW50IC51c2VyLW5hbWUtYW5kLWRhdGUgLm5hbWUge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLnVzZXItY29tbWVudCAudXNlci1uYW1lLWFuZC1kYXRlIC5kYXRlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBjb2xvcjogIzYzNjM2MztcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC51c2VyLWNvbW1lbnQgLmNvbW1lbnQtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogLTQwcHg7XG4gIGNvbG9yOiAjNjM2MzYzO1xuICBwYWRkaW5nLWxlZnQ6IDYxcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLnVzZXItY29tbWVudCAuY29tbWVudC1jb250YWluZXIgLmNvbW1lbnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC51c2VyLWNvbW1lbnQgLmNvbW1lbnQtY29udGFpbmVyIC52aWV3LWFsbC1jb21tZW50cyB7XG4gIGNvbG9yOiAjNjM2MzYzO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _postmodal_postmodal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../postmodal/postmodal.page */ "./src/app/postmodal/postmodal.page.ts");
/* harmony import */ var _infomodal_infomodal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../infomodal/infomodal.page */ "./src/app/infomodal/infomodal.page.ts");
/* harmony import */ var _comments_comments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comments/comments.page */ "./src/app/comments/comments.page.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _image_display_image_display_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../image-display/image-display.page */ "./src/app/image-display/image-display.page.ts");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");





// import { FilePath } from '@ionic-native/file-path/ngx';
// import { FileChooser } from '@ionic-native/file-chooser/ngx';








let Tab3Page = class Tab3Page {
    constructor(navCtrl, modalCtrl, 
    // private fileChooser: FileChooser,
    // private filePath: FilePath,
    asC, storage, db, service, socialSharing, fs) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.asC = asC;
        this.storage = storage;
        this.db = db;
        this.service = service;
        this.socialSharing = socialSharing;
        this.fs = fs;
        this.videoPath = [];
        this.imagePath = [];
        this.likes = { "count": 0, 'userId': [] };
        this.disLikes = { "count": 0, 'userId': [] };
        this.liked = false;
        this.h = false;
        this.Addcomment = false;
        this.hiddenHeader = false;
        this.unfilteredPosts = [];
        // SHOW SEARCHBAR
        this.showSearch = false;
        this.Posts = [];
        this.comment = [];
        this.isUploading = false;
        this.isUploaded = false;
    }
    onScroll(event) {
        if (event.detail.scrollTop == 0) {
            this.service.hiddenTabs = false;
            this.hiddenHeader = false;
            console.log("00000000");
        }
        else {
            if (event.detail.scrollTop > 30) {
                console.log(">>>> 30");
                this.service.hiddenTabs = true;
                this.hiddenHeader = true;
            }
            else {
                this.service.hiddenTabs = false;
            }
        }
    }
    ngOnInit() {
        this.user = this.service.getuser();
        console.log(this.user);
        this.db.getPosts().subscribe(res => {
            this.Posts = res;
            this.unfilteredPosts = res;
            console.log('POSTS :', res);
            this.Posts.forEach(post => {
                this.alreadyLiked(post);
            });
        });
    }
    getLikes(postId) {
        return this.service.getLikes(postId).valueChanges();
    }
    AddComment() {
        if (this.Addcomment == true) {
            this.Addcomment = false;
        }
        else {
            this.Addcomment = true;
        }
    }
    whatsappshare(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let msg = item.Text;
            let img = item.logo;
            let url = item.id;
            this.socialSharing.shareViaWhatsApp(msg, img, url).then(() => {
                console.log("whatsapp share successful");
            }).catch(err => { console.log(err); });
        });
    }
    searchShop() {
        if (this.searchTerm !== '' || this.searchTerm !== null) {
            this.Posts = this.filterItems();
            console.log(this.Posts);
        }
    }
    filterItems() {
        return this.unfilteredPosts.filter(item => {
            return item.shop.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        });
    }
    share(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const asc = yield this.asC.create({
                animated: true,
                backdropDismiss: true,
                cssClass: './home.page.scss',
                buttons: [{
                        icon: 'logo-whatsapp',
                        text: 'Whatsapp',
                        handler: () => {
                            this.whatsappshare(item);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield asc.present();
        });
    }
    comments(postId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const com = yield this.modalCtrl.create({
                component: _comments_comments_page__WEBPACK_IMPORTED_MODULE_6__["CommentsPage"],
                componentProps: { "postId": postId, "owner": this.user }
            });
            yield com.present();
        });
    }
    like(item) {
        console.log("=====LIKES===");
        let user = localStorage.getItem('user');
        console.log(user);
        this.unSubscribe = this.getLikes(item.id).subscribe(res => {
            if (res === undefined) {
                this.likes.count++;
                this.likes.userId.push(user);
                this.liked = true;
                let likeRef = this.fs.collection('Likes').doc(item.id);
                likeRef.set({
                    likes: this.likes,
                    disLikes: this.disLikes
                });
                // this.updateLikewIcon();
                return this.unSubscribe.unsubscribe();
            }
            else {
                this.likesReaction = res;
                console.log("=====reaction======");
                console.log(res);
                this.likes = this.likesReaction.likes;
                this.disLikes = this.likesReaction.disLikes;
                if (this.liked == false) {
                    this.likes.count++;
                    let index = this.disLikes.userId.indexOf(user);
                    this.disLikes.userId.splice(index, 1);
                    this.disLikes.count--;
                    this.likes.userId.push(user);
                    this.liked = true;
                    let likeRef = this.fs.collection('Likes').doc(item.id);
                    likeRef.update({
                        likes: this.likes,
                        disLikes: this.disLikes
                    });
                    this.updateLikewIcon();
                    return this.unSubscribe.unsubscribe();
                }
                else {
                    this.likes.count--;
                    let index = this.likes.userId.indexOf(user);
                    this.likes.userId.splice(index, 1);
                    console.log("=====LIKES ======");
                    console.log(this.likes);
                    this.disLikes.count++;
                    this.disLikes.userId.push(user);
                    this.liked = false;
                    let likeRef = this.fs.collection('Likes').doc(item.id);
                    likeRef.update({
                        disLikes: this.disLikes,
                        likes: this.likes
                    });
                    this.updateLikewIcon();
                    return this.unSubscribe.unsubscribe();
                }
            }
        }, error => {
            console.log(error);
        });
    }
    alreadyLiked(post) {
        this.service.alreadyLiked(post.id).valueChanges().subscribe(res => {
            console.log("===ALREADY LIKED====");
            console.log(res);
            if (res == undefined) {
                return;
            }
            else {
                if (res.likes.userId.includes(localStorage.getItem('user'))) {
                    let index = this.Posts.indexOf(post);
                    this.Posts[index].liked = true;
                    console.log("===SECOND ALREADY LIKED====");
                    console.log(this.Posts[index]);
                }
            }
        });
    }
    updateLikewIcon() {
        if (this.h == false) {
            this.h = true;
        }
        else {
            this.h = false;
        }
    }
    infoModal(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _infomodal_infomodal_page__WEBPACK_IMPORTED_MODULE_5__["InfomodalPage"],
                componentProps: {
                    "shopname": item.shop,
                    "logo": item.logo
                }
            });
            yield modal.present();
        });
    }
    openPostModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _postmodal_postmodal_page__WEBPACK_IMPORTED_MODULE_4__["PostmodalPage"],
                componentProps: this.user
            });
            yield modal.present();
        });
    }
    postFile(url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _postmodal_postmodal_page__WEBPACK_IMPORTED_MODULE_4__["PostmodalPage"],
                componentProps: { url }
            });
            yield modal.present();
        });
    }
    notifications() {
        this.navCtrl.navigate(['tabs/notifications']);
    }
    Post() {
        this.text = null;
    }
    show() {
        if (this.showSearch == false) {
            this.showSearch = true;
        }
        else {
            this.showSearch = false;
        }
    }
    // DISPLAY IMAGE IN A MODEL
    showImage(url) {
        this.modalCtrl.create({
            component: _image_display_image_display_page__WEBPACK_IMPORTED_MODULE_11__["ImageDisplayPage"],
            componentProps: {
                img: url
            }
        }).then(modal => modal.present());
    }
};
Tab3Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_12__["DatabaseService"] },
    { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_9__["FirestoreService"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] }
];
Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html"),
        styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"],
        _database_service__WEBPACK_IMPORTED_MODULE_12__["DatabaseService"],
        _services_firestore_service__WEBPACK_IMPORTED_MODULE_9__["FirestoreService"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]])
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map