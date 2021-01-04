(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header [hidden]=\"hiddenHeader\">\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button autoHide=\"false\"></ion-menu-button>\n        </ion-buttons>\n        <ion-title text-center>Konnect</ion-title>\n        <ion-searchbar placeholder=\"Search for a shop \" animated type=\"text\" *ngIf=\"showSearch\"></ion-searchbar>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"openPostModal()\">\n                <ion-icon style=\"width: 23px; height: 23px;\" name=\"add-circle-outline\" size=\"small\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n\n\n    <!-- <ion-button (click)=\"single_notification()\">\n        Single Notification\n    </ion-button> -->\n      \n\n    <div class=\"page-content\">\n        <div style=\"margin-left: 5px; margin-right: 5px;\">\n            <ion-searchbar [(ngModel)]=\"searchTerm\" placeholder=\"Search for a shop \" (ionChange)=\"searchShop()\">\n            </ion-searchbar>\n        </div>\n\n        <ion-card class=\"card\" *ngFor=\"let item of Posts\">\n            <div class=\"header\">\n                <div class=\"image\" (click)=\"infoModal('Kakila Organic')\">\n                    <ion-avatar>\n                        <img src=\"{{item.logo}}\">\n                    </ion-avatar>\n                </div>\n                <div class=\"name\" style=\"margin-right: 105px;\" (click)=\"infoModal(item)\">\n                    {{item.shop}}\n                </div>\n                <div class=\"date\">\n                    {{item.time.toDate() | date}}\n                </div>\n            </div>\n            \n            <!-- DESCRIPTION -->\n            <p class=\"description\">\n                {{item.Text}}\n            </p>\n\n            <!-- MAIN IMAGE -->\n            <div class=\"main-image\">\n                <ion-slides>\n                    <ion-slide *ngFor=\"let n of item.Images\">\n                        <img src=\"{{n}}\" (click)=\"showImage(n)\">\n                    </ion-slide>\n                    <ion-slide *ngFor=\"let v of item.Videos\">\n                        <video  controls src=\"{{v}}\"></video>\n                        <!-- <video controls>\n                            <source src=\"{{v}}\">\n                          </video> -->\n                    </ion-slide>\n                </ion-slides>\n\n            </div>\n\n            <!-- LIKE, COMMENT AND SHARE -->\n            <div class=\"like-comment-share\">\n                <ion-row>\n                    <ion-col size=\"4\">\n                        <ion-button fill=\"light\" (click)=\"like(item)\">\n                            <ion-icon [ngClass]=\"{'color': item.liked === true}\" size=\"large\" src=\"../../assets/images/heart.svg\">\n                            </ion-icon>\n                            &nbsp;&nbsp;<span class=\"ion-text-lowercase\">{{item.likes}}</span>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col size=\"4\">\n                        <ion-button fill=\"light\" (click)=\"comments(item.id)\">\n                            <ion-icon size=\"large\" src=\"../../assets/images/comment.svg\"></ion-icon>\n                            &nbsp;&nbsp;<span class=\"ion-text-lowercase\">{{item.comments}}</span>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col size=\"4\">\n                        <ion-button fill=\"light\" (click)=\"share(item)\">\n                            <ion-icon style=\"width: 14.5px; padding-right: 0px;\" size=\"large\"\n                                src=\"../../assets/images/share.svg\"></ion-icon>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </div>\n\n            <div class=\"line\"></div>\n\n            <!-- LAST USER COMMENT -->\n            <div class=\"user-comment\" *ngIf=\"item.usersComments == 0\">\n\n                <div class=\"user-avatar\">\n                    <ion-avatar>\n                        <img src=\"{{item.lastComment.userLogo}}\">\n                    </ion-avatar>\n                </div>\n                <div class=\"user-name-and-date\">\n                    <div class=\"name\">{{item.lastComment.userName}}</div>\n                    <!-- <div class=\"date\">10 mins ago</div> -->\n                    <!-- <div class=\"date\">{{item.lastComment.time.toDate() | date}}</div> -->\n                </div>\n\n                <div class=\"comment-container\">\n                    <p class=\"comment\">\n                        {{item.lastComment.Text}}\n                    </p>\n                    <div class=\"view-all-comments\" (click)=\"comments(item.id)\">View all comments</div>\n                </div>\n\n            </div>\n        </ion-card><br>\n        <!-- END OF FIRST SOKO POST -->\n    </div>\n    <!-- END OF SOKO POST -->\n\n</ion-content>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
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
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  border-radius: 5px;\n  margin-left: 0px;\n  margin-right: 0px;\n}\nion-card ion-card-content {\n  padding: 0px;\n}\na {\n  text-decoration: none;\n}\n.color {\n  color: #00ade5;\n}\n.post-img {\n  widows: 100%;\n}\nion-toolbar {\n  border-radius: 0 !important;\n}\nion-badge {\n  margin-left: -12px;\n  margin-top: -12px;\n  border-radius: 100%;\n  font-size: 9px;\n}\nion-badge div {\n  margin-bottom: -2px;\n}\n.line {\n  height: 1px;\n  background-color: #636363;\n  margin-left: 15px;\n  margin-right: 15px;\n  opacity: 0.2;\n}\n.page-content {\n  padding-left: 0px;\n  padding-right: 0px;\n  background-color: #e7ebf3;\n}\n.page-content .card {\n  margin-left: 15px;\n  margin-right: 15px;\n  background-color: white;\n}\n.page-content .card .header {\n  margin-left: 15px;\n  height: 70px;\n  margin-right: 15px;\n}\n.page-content .card .header .image {\n  position: absolute;\n  margin-top: 15px;\n}\n.page-content .card .header .image img {\n  width: 42px;\n  height: 42px;\n}\n.page-content .card .header .name {\n  position: absolute;\n  margin-left: 55px;\n  margin-top: 28px;\n  font-weight: bold;\n  font-size: 15px;\n}\n.page-content .card .header .date {\n  position: absolute;\n  margin-left: 75px;\n  float: right;\n  right: 30px;\n  margin-top: 29px;\n  color: #636363;\n  font-size: 12px;\n}\n.page-content .card .description {\n  font-size: 12px;\n  color: #636363;\n  margin-left: 15px;\n  margin-right: 15px;\n  text-align: left;\n}\n.page-content .card .main-image {\n  margin-left: 15px;\n  margin-right: 15px;\n}\n.page-content .card .main-image img {\n  width: 100%;\n  height: 200px;\n}\n.page-content .card .main-image video {\n  width: 100%;\n  height: 200px;\n}\n.page-content .card .like-comment-share {\n  height: 53px;\n  background-color: white;\n  padding-top: 5px;\n}\n.page-content .card .like-comment-share ion-row {\n  padding: 0px;\n  text-align: center;\n}\n.page-content .card .like-comment-share ion-row ion-col ion-button {\n  font-size: 10px;\n  color: #636363;\n  font-size: 12px;\n}\n.page-content .card .like-comment-share ion-row ion-col ion-button ion-icon {\n  width: 15px;\n}\n.page-content .card .user-comment {\n  background-color: white;\n  margin-left: 15px;\n  margin-right: 15px;\n  padding-bottom: 10px;\n}\n.page-content .card .user-comment .user-avatar {\n  width: 70px;\n  padding-top: 15px;\n  padding-left: 15px;\n}\n.page-content .card .user-comment .user-avatar img {\n  width: 30px;\n  height: 30px;\n}\n.page-content .card .user-comment .user-name-and-date {\n  position: absolute;\n  margin-top: -55px;\n  left: 90px;\n  right: 30px;\n}\n.page-content .card .user-comment .user-name-and-date .name {\n  float: left;\n  font-size: 13px;\n  font-weight: bold;\n}\n.page-content .card .user-comment .user-name-and-date .date {\n  float: right;\n  padding-right: 15px;\n  color: #636363;\n  margin-top: 2px;\n  font-size: 10px;\n}\n.page-content .card .user-comment .comment-container {\n  margin-top: -40px;\n  color: #636363;\n  padding-left: 61px;\n  padding-right: 8px;\n}\n.page-content .card .user-comment .comment-container .comment {\n  font-size: 12px;\n  text-align: left;\n}\n.page-content .card .user-comment .comment-container .view-all-comments {\n  color: #636363;\n  font-size: 10px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGxhcmFzc2VtbWF4d2VsbC9EZXNrdG9wL05ld21hcmsvS3dpa19NZXJjaGFudC9zcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjtBREFFO0VBQ0ksWUFBQTtBQ0VOO0FER0E7RUFDRSxxQkFBQTtBQ0FGO0FERUU7RUFDSSxjQUFBO0FDQ047QURDQTtFQUNFLFlBQUE7QUNFRjtBRENBO0VBQ0UsMkJBQUE7QUNFRjtBREdBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0FGO0FEQ0U7RUFDSSxtQkFBQTtBQ0NOO0FESUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0RGO0FET0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNKRjtBREtFO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDSE47QURLTTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSFY7QURJVTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGZDtBREdjO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNEbEI7QURJVTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0ZkO0FESVU7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRmQ7QURNTTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDSlY7QURPTTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNMVjtBRE1VO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNKZDtBRE1VO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNKWjtBRFFNO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNOVjtBRE9VO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDTGQ7QURNYztFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0psQjtBREtrQjtFQUNJLFdBQUE7QUNIdEI7QURTTTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDUFY7QURRVTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDTmQ7QURPYztFQUNJLFdBQUE7RUFDQSxZQUFBO0FDTGxCO0FEUVU7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNOZDtBRE9jO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0xsQjtBRE9jO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDTGxCO0FEUVU7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTmQ7QURPYztFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0xsQjtBRE9jO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0xsQiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGlvbi1jYXJkLWNvbnRlbnR7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiBcbn1cblxuYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIC5jb2xvciB7XG4gICAgICBjb2xvcjogIzAwYWRlNSA7XG4gIH1cbi5wb3N0LWltZ3tcbiAgd2lkb3dzOiAxMDAlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cblxuXG4vLyBOT1RJRklDQVRJT04gUEFSVFxuaW9uLWJhZGdlIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMnB4OyBcbiAgbWFyZ2luLXRvcDogLTEycHg7IFxuICBib3JkZXItcmFkaXVzOiAxMDAlOyBcbiAgZm9udC1zaXplOiA5cHg7XG4gIGRpdiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xuICB9XG59XG5cblxuLmxpbmUge1xuICBoZWlnaHQ6IDFweDsgXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MzYzNjM7IFxuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4OyBcbiAgb3BhY2l0eTogMC4yO1xufVxuXG5cblxuXG4ucGFnZS1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7IFxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7IFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlYmYzO1xuICAuY2FyZCB7XG4gICAgICBtYXJnaW4tbGVmdDogMTVweDsgXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7ICBcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgLy8gQ0FSRCBIRUFERVJcbiAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4OyBcbiAgICAgICAgICBoZWlnaHQ6IDcwcHg7IFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICBcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MnB4OyBcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1NXB4OyAgXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI4cHg7IFxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDsgXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNzVweDsgXG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDsgXG4gICAgICAgICAgICAgIHJpZ2h0OiAzMHB4OyBcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjlweDsgXG4gICAgICAgICAgICAgIGNvbG9yOiAjNjM2MzYzOyBcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIENBUkQgREVTQ1JJUFRJT05cbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4OyBcbiAgICAgICAgICBjb2xvcjogIzYzNjM2MzsgXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7IFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDsgXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cbiAgICAgIC8vIENBUkQgTUFJTiBJTUFHRVxuICAgICAgLm1haW4taW1hZ2Uge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4OyBcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICB2aWRlbyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIExJS0UgQ09NTUVOVCBBTkQgU0hBUkVcbiAgICAgIC5saWtlLWNvbW1lbnQtc2hhcmUge1xuICAgICAgICAgIGhlaWdodDogNTNweDsgXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxuICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweDsgXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgaW9uLWNvbCBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDsgIFxuICAgICAgICAgICAgICAgICAgY29sb3I6ICM2MzYzNjM7IFxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gVVNFUiBDT01NRU5UXG4gICAgICAudXNlci1jb21tZW50IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7IFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDsgXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgLnVzZXItYXZhdGFyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7IFxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDsgXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4OyBcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAudXNlci1uYW1lLWFuZC1kYXRlIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTU1cHg7IFxuICAgICAgICAgICAgICBsZWZ0OiA5MHB4O1xuICAgICAgICAgICAgICByaWdodDogMzBweDtcbiAgICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7IFxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4OyBcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5kYXRlIHtcbiAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDsgXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4OyBcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjM2MzYzOyBcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDsgXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbW1lbnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTQwcHg7IFxuICAgICAgICAgICAgICBjb2xvcjogIzYzNjM2MzsgXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNjFweDsgIFxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICAgIC5jb21tZW50IHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDsgXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC52aWV3LWFsbC1jb21tZW50cyB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzYzNjM2MzsgXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgIH1cbiAgfVxufSIsImlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb2xvciB7XG4gIGNvbG9yOiAjMDBhZGU1O1xufVxuXG4ucG9zdC1pbWcge1xuICB3aWRvd3M6IDEwMCU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tYmFkZ2Uge1xuICBtYXJnaW4tbGVmdDogLTEycHg7XG4gIG1hcmdpbi10b3A6IC0xMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBmb250LXNpemU6IDlweDtcbn1cbmlvbi1iYWRnZSBkaXYge1xuICBtYXJnaW4tYm90dG9tOiAtMnB4O1xufVxuXG4ubGluZSB7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM2MzYzO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5wYWdlLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlYmYzO1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAuaGVhZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAuaGVhZGVyIC5pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLmhlYWRlciAuaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLmhlYWRlciAubmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDU1cHg7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC5oZWFkZXIgLmRhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiA3NXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHJpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAyOXB4O1xuICBjb2xvcjogIzYzNjM2MztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAuZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNjM2MzYzO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAubWFpbi1pbWFnZSB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC5tYWluLWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAubWFpbi1pbWFnZSB2aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAubGlrZS1jb21tZW50LXNoYXJlIHtcbiAgaGVpZ2h0OiA1M3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLmxpa2UtY29tbWVudC1zaGFyZSBpb24tcm93IHtcbiAgcGFkZGluZzogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC5saWtlLWNvbW1lbnQtc2hhcmUgaW9uLXJvdyBpb24tY29sIGlvbi1idXR0b24ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjNjM2MzYzO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC5saWtlLWNvbW1lbnQtc2hhcmUgaW9uLXJvdyBpb24tY29sIGlvbi1idXR0b24gaW9uLWljb24ge1xuICB3aWR0aDogMTVweDtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLnVzZXItY29tbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLnVzZXItY29tbWVudCAudXNlci1hdmF0YXIge1xuICB3aWR0aDogNzBweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLnVzZXItY29tbWVudCAudXNlci1hdmF0YXIgaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLnVzZXItY29tbWVudCAudXNlci1uYW1lLWFuZC1kYXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtNTVweDtcbiAgbGVmdDogOTBweDtcbiAgcmlnaHQ6IDMwcHg7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC51c2VyLWNvbW1lbnQgLnVzZXItbmFtZS1hbmQtZGF0ZSAubmFtZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAudXNlci1jb21tZW50IC51c2VyLW5hbWUtYW5kLWRhdGUgLmRhdGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjNjM2MzYzO1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLnVzZXItY29tbWVudCAuY29tbWVudC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgY29sb3I6ICM2MzYzNjM7XG4gIHBhZGRpbmctbGVmdDogNjFweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAudXNlci1jb21tZW50IC5jb21tZW50LWNvbnRhaW5lciAuY29tbWVudCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLnVzZXItY29tbWVudCAuY29tbWVudC1jb250YWluZXIgLnZpZXctYWxsLWNvbW1lbnRzIHtcbiAgY29sb3I6ICM2MzYzNjM7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _postmodal_postmodal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../postmodal/postmodal.page */ "./src/app/postmodal/postmodal.page.ts");
/* harmony import */ var _infomodal_infomodal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../infomodal/infomodal.page */ "./src/app/infomodal/infomodal.page.ts");
/* harmony import */ var _comments_comments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comments/comments.page */ "./src/app/comments/comments.page.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _image_display_image_display_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../image-display/image-display.page */ "./src/app/image-display/image-display.page.ts");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");





// import { FilePath } from '@ionic-native/file-path/ngx';
// import { FileChooser } from '@ionic-native/file-chooser/ngx';









var Tab3Page = /** @class */ (function () {
    function Tab3Page(navCtrl, modalCtrl, 
    // private fileChooser: FileChooser,
    // private filePath: FilePath,
    asC, storage, db, service, socialSharing, fs, localNotifications) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.asC = asC;
        this.storage = storage;
        this.db = db;
        this.service = service;
        this.socialSharing = socialSharing;
        this.fs = fs;
        this.localNotifications = localNotifications;
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
    Tab3Page.prototype.onScroll = function (event) {
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
    };
    Tab3Page.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.service.getuser();
        console.log(this.user);
        this.db.getPosts().subscribe(function (res) {
            _this.Posts = res;
            _this.unfilteredPosts = res;
            console.log('POSTS :', res);
            _this.Posts.forEach(function (post) {
                _this.alreadyLiked(post);
            });
        });
    };
    Tab3Page.prototype.getLikes = function (postId) {
        return this.service.getLikes(postId).valueChanges();
    };
    Tab3Page.prototype.AddComment = function () {
        if (this.Addcomment == true) {
            this.Addcomment = false;
        }
        else {
            this.Addcomment = true;
        }
    };
    Tab3Page.prototype.whatsappshare = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var msg, img, url;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                msg = item.Text;
                img = item.logo;
                url = item.id;
                this.socialSharing.shareViaWhatsApp(msg, img, url).then(function () {
                    console.log("whatsapp share successful");
                }).catch(function (err) { console.log(err); });
                return [2 /*return*/];
            });
        });
    };
    Tab3Page.prototype.searchShop = function () {
        if (this.searchTerm !== '' || this.searchTerm !== null) {
            this.Posts = this.filterItems();
            console.log(this.Posts);
        }
    };
    Tab3Page.prototype.filterItems = function () {
        var _this = this;
        return this.unfilteredPosts.filter(function (item) {
            return item.shop.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
        });
    };
    Tab3Page.prototype.share = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var asc;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.asC.create({
                            animated: true,
                            backdropDismiss: true,
                            cssClass: './home.page.scss',
                            buttons: [{
                                    icon: 'logo-whatsapp',
                                    text: 'Whatsapp',
                                    handler: function () {
                                        _this.whatsappshare(item);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        asc = _a.sent();
                        return [4 /*yield*/, asc.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.prototype.comments = function (postId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var com;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _comments_comments_page__WEBPACK_IMPORTED_MODULE_6__["CommentsPage"],
                            componentProps: { "postId": postId, "owner": this.user }
                        })];
                    case 1:
                        com = _a.sent();
                        return [4 /*yield*/, com.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.prototype.like = function (item) {
        var _this = this;
        console.log("=====LIKES===");
        var user = localStorage.getItem('user');
        console.log(user);
        this.unSubscribe = this.getLikes(item.id).subscribe(function (res) {
            if (res === undefined) {
                _this.likes.count++;
                _this.likes.userId.push(user);
                _this.liked = true;
                var likeRef = _this.fs.collection('Likes').doc(item.id);
                likeRef.set({
                    likes: _this.likes,
                    disLikes: _this.disLikes
                });
                // this.updateLikewIcon();
                return _this.unSubscribe.unsubscribe();
            }
            else {
                _this.likesReaction = res;
                console.log("=====reaction======");
                console.log(res);
                _this.likes = _this.likesReaction.likes;
                _this.disLikes = _this.likesReaction.disLikes;
                if (_this.liked == false) {
                    _this.likes.count++;
                    var index = _this.disLikes.userId.indexOf(user);
                    _this.disLikes.userId.splice(index, 1);
                    _this.disLikes.count--;
                    _this.likes.userId.push(user);
                    _this.liked = true;
                    var likeRef = _this.fs.collection('Likes').doc(item.id);
                    likeRef.update({
                        likes: _this.likes,
                        disLikes: _this.disLikes
                    });
                    _this.updateLikewIcon();
                    return _this.unSubscribe.unsubscribe();
                }
                else {
                    _this.likes.count--;
                    var index = _this.likes.userId.indexOf(user);
                    _this.likes.userId.splice(index, 1);
                    console.log("=====LIKES ======");
                    console.log(_this.likes);
                    _this.disLikes.count++;
                    _this.disLikes.userId.push(user);
                    _this.liked = false;
                    var likeRef = _this.fs.collection('Likes').doc(item.id);
                    likeRef.update({
                        disLikes: _this.disLikes,
                        likes: _this.likes
                    });
                    _this.updateLikewIcon();
                    return _this.unSubscribe.unsubscribe();
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    Tab3Page.prototype.alreadyLiked = function (post) {
        var _this = this;
        this.service.alreadyLiked(post.id).valueChanges().subscribe(function (res) {
            console.log("===ALREADY LIKED====");
            console.log(res);
            if (res == undefined) {
                return;
            }
            else {
                if (res.likes.userId.includes(localStorage.getItem('user'))) {
                    var index = _this.Posts.indexOf(post);
                    _this.Posts[index].liked = true;
                    console.log("===SECOND ALREADY LIKED====");
                    console.log(_this.Posts[index]);
                }
            }
        });
    };
    Tab3Page.prototype.updateLikewIcon = function () {
        if (this.h == false) {
            this.h = true;
        }
        else {
            this.h = false;
        }
    };
    Tab3Page.prototype.infoModal = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _infomodal_infomodal_page__WEBPACK_IMPORTED_MODULE_5__["InfomodalPage"],
                            componentProps: {
                                "shopname": item.shop,
                                "logo": item.logo
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.prototype.openPostModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _postmodal_postmodal_page__WEBPACK_IMPORTED_MODULE_4__["PostmodalPage"],
                            componentProps: this.user
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.prototype.postFile = function (url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _postmodal_postmodal_page__WEBPACK_IMPORTED_MODULE_4__["PostmodalPage"],
                            componentProps: { url: url }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.prototype.notifications = function () {
        this.navCtrl.navigate(['tabs/notifications']);
    };
    Tab3Page.prototype.Post = function () {
        this.text = null;
    };
    Tab3Page.prototype.show = function () {
        if (this.showSearch == false) {
            this.showSearch = true;
        }
        else {
            this.showSearch = false;
        }
    };
    // DISPLAY IMAGE IN A MODEL
    Tab3Page.prototype.showImage = function (url) {
        this.modalCtrl.create({
            component: _image_display_image_display_page__WEBPACK_IMPORTED_MODULE_11__["ImageDisplayPage"],
            componentProps: {
                img: url
            }
        }).then(function (modal) { return modal.present(); });
    };
    Tab3Page.prototype.single_notification = function () {
        this.fs.collection('Orders').doc('22GHPD93').set({
            Complete: 'False',
            Date: new Date(),
            Delivery: 'deliver',
            DeliveryFee: 166,
            Location: 'T-Mall',
            OrderID: '22GHPD93',
            notes: '',
            payment: 'unpaid',
            products: [{
                    barcode: 0,
                    category: 'Soaps',
                    count: 1,
                    currentprice: 700,
                    description: 'Get  handcrafted Moringa Soap from Kipusa beauty.It contains anti-inflammatory and antiseptic properties ,that prevents premature ageing of the skin and protects it from the environment.It also detoxifies and cleanses the skin',
                    id: 'tuoktUrkamWy7TnP8Wjq',
                    image: 'https://firebasestorage.googleapis.com/v0/b/kwikapp-77d77.appspot.com/o/Kipusa%20Beauty%2Fmoringa%20soap.webp?alt=media&token=502a73fe-a1d5-4c85-b52c-945b2b1311fd',
                    product: 'Moringa Soap',
                    quantity: 1,
                    shop: 'Kipusa Beauty',
                    shopID: '7RKckWZtYFaV0UsiHJbwC55Xt673',
                    status: 'Available',
                    stock: 5
                }],
            shopID: 'gJyEV9XffKSYHvg2jxpp8DWswMw2',
            shop: 'Alumni Club by the Caballeros',
            status: 'open',
            userID: 'ZJIGdz653TSpLzBLtPDIGJM1mas2',
            username: 'Stephen Gachoka'
        });
    };
    Tab3Page.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] },
        { type: _database_service__WEBPACK_IMPORTED_MODULE_12__["DatabaseService"] },
        { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_9__["FirestoreService"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
        { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_13__["LocalNotifications"] }
    ]; };
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
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_13__["LocalNotifications"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map