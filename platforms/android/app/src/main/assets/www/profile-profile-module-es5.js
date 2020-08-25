(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"background-color: #00ade5;\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title text-center style=\"margin-right: 25px;\">\n      My Profile\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"shop === undefined\">\n    <div>\n      <ion-skeleton-text animated style=\"width: 100%; object-fit: fill; height: 170px;\"></ion-skeleton-text>\n    </div>\n    <div>\n      <ion-avatar style=\"width: 60px; height: 60px; margin-top: -35px; margin-left: 25px;\">\n        <ion-skeleton-text animated style=\"object-fit: fill;\"></ion-skeleton-text>\n      </ion-avatar>\n    </div>\n    <div style=\"margin-top: 20px;line-height: 1;\" class=\"ion-padding\">\n      <div style=\"font-size: 15px; font-weight: bold;\">\n        <ion-skeleton-text></ion-skeleton-text>\n      </div>\n      <div style=\"font-size: 13px; color: #636363; margin-top: 8px;\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </div>\n      <div style=\"font-size: 13px; color: #636363; margin-top: 8px;\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </div>\n      <div style=\"font-size: 13px; color: #636363; margin-top: 8px;\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </div>\n    </div>\n  </div>\n\n  <div style=\"padding-bottom: 15px;\" *ngIf=\"shop !== undefined\">\n    <div>\n      <img src=\"{{shop.cover}}\" alt=\"Cover image\" style=\"width: 100%; object-fit: fill; height: 170px;\">\n    </div>\n    <div>\n      <ion-avatar style=\"width: 60px; height: 60px; margin-top: -35px; margin-left: 25px;\">\n        <img src=\"{{shop.logo}}\" style=\"object-fit: fill;\">\n      </ion-avatar>\n    </div>\n    <div style=\"margin-top: 20px;line-height: 1;\" class=\"ion-padding\">\n      <div style=\"font-size: 15px; font-weight: bold;\">{{shopname}}</div>\n      <div style=\"font-size: 13px; color: #636363; margin-top: 8px;\">\n        <a >{{shop.Location}} <ion-icon name=\"pin\"></ion-icon></a>\n      </div>\n      <div style=\"font-size: 13px; color: #636363; margin-top: 8px;\">Open from {{shop.Open}} - {{shop.Close}} Mon - Sat\n      </div>\n      <div style=\"font-size: 13px; color: #636363; margin-top: 8px;\">Website:\n        <a >{{shop.Website}}</a>\n      </div>\n    </div>\n  </div>\n  <div style=\"margin-top: 15px;\">\n    <!-- <ion-label class=\"ion-padding\">Your Posts</ion-label><br> -->\n    <div class=\"ion-padding\" *ngIf=\"!loaded\">\n      <ion-skeleton-text animated style=\"width: 100%;height: 200px;\"></ion-skeleton-text>\n      <br><br>\n      <ion-skeleton-text animated style=\"width: 100%;height: 200px;\"></ion-skeleton-text>\n    </div>\n    <!-- <div class=\"ion-text-center ion-padding\" *ngIf=\"Posts.length == 0\">\n      <ion-label>  You have no recents posts </ion-label>\n    </div> -->\n  </div>\n\n  <div class=\"page-content\"><br>\n\n    <ion-card class=\"card\" *ngFor=\"let item of Posts\">\n      <div class=\"header\">\n        <div class=\"image\" (click)=\"infoModal(item.shop,item.logo)\">\n          <ion-avatar>\n            <img src=\"{{item.logo}}\">\n          </ion-avatar>\n        </div>\n        <div class=\"name\" (click)=\"infoModal(item.shop,item.logo)\">\n          {{item.shop}}\n        </div>\n        <div class=\"date\">\n          10 mins ago\n        </div>\n      </div>\n      <!-- DESCRIPTION -->\n      <p class=\"description\">\n        {{item.Text}}\n      </p>\n\n      <!-- MAIN IMAGE -->\n      <div class=\"main-image\">\n        <ion-slides>\n          <ion-slide *ngFor=\"let n of item.Images\">\n            <img src=\"{{n}}\" (click)=\"showImage()\">\n          </ion-slide>\n        </ion-slides>\n\n      </div>\n\n      <!-- LIKE, COMMENT AND SHARE -->\n      <div class=\"like-comment-share\">\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-button fill=\"light\" (click)=\"like()\">\n              <ion-icon [ngClass]=\"{'color': h}\" size=\"large\" src=\"../../assets/images/heart.svg\"></ion-icon>\n              &nbsp;&nbsp;<span class=\"ion-text-lowercase\">{{item.likes}}</span>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-button fill=\"light\" (click)=\"comments()\">\n              <ion-icon size=\"large\" src=\"../../assets/images/comment.svg\"></ion-icon>\n              &nbsp;&nbsp;<span class=\"ion-text-lowercase\">{{item.comments}}</span>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-button fill=\"light\" (click)=\"share()\">\n              <ion-icon style=\"width: 14.5px; padding-right: 0px;\" size=\"large\" src=\"../../assets/images/share.svg\">\n              </ion-icon>\n              &nbsp;&nbsp;<span class=\"ion-text-lowercase\"></span>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div class=\"line\"></div>\n\n      <!-- LAST USER COMMENT -->\n      <div class=\"user-comment\">\n        <div class=\"user-avatar\">\n          <ion-avatar>\n            <img src=\"{{item.lastComment.image}}\">\n          </ion-avatar>\n        </div>\n        <div class=\"user-name-and-date\">\n          <div class=\"name\">{{item.lastComment.user}}</div>\n          <div class=\"date\">10 mins ago</div>\n        </div>\n\n        <div class=\"comment-container\">\n          <p class=\"comment\">\n            {{item.lastComment.Text}}\n          </p>\n          <div class=\"view-all-comments\" (click)=\"comments()\">View all comments</div>\n        </div>\n\n      </div>\n    </ion-card><br>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  border-radius: 5px;\n  margin-left: 0px;\n  margin-right: 0px;\n}\nion-card ion-card-content {\n  padding: 0px;\n}\na {\n  text-decoration: none;\n}\n.color {\n  color: #00ade5;\n}\n.post-img {\n  widows: 100%;\n}\nion-toolbar {\n  border-radius: 0 !important;\n}\nion-badge {\n  margin-left: -12px;\n  margin-top: -12px;\n  border-radius: 100%;\n  font-size: 9px;\n}\nion-badge div {\n  margin-bottom: -2px;\n}\n.line {\n  height: 1px;\n  background-color: #636363;\n  margin-left: 15px;\n  margin-right: 15px;\n  opacity: 0.2;\n}\n.page-content {\n  padding-left: 0px;\n  padding-right: 0px;\n  background-color: #e7ebf3;\n}\n.page-content .card {\n  margin-left: 15px;\n  margin-right: 15px;\n  background-color: white;\n}\n.page-content .card .header {\n  margin-left: 15px;\n  height: 70px;\n  margin-right: 15px;\n}\n.page-content .card .header .image {\n  position: absolute;\n  margin-top: 15px;\n}\n.page-content .card .header .image img {\n  width: 42px;\n  height: 42px;\n}\n.page-content .card .header .name {\n  position: absolute;\n  margin-left: 55px;\n  margin-top: 28px;\n  font-weight: bold;\n  font-size: 15px;\n}\n.page-content .card .header .date {\n  position: absolute;\n  margin-left: 75px;\n  float: right;\n  right: 30px;\n  margin-top: 29px;\n  color: #636363;\n  font-size: 12px;\n}\n.page-content .card .description {\n  font-size: 12px;\n  color: #636363;\n  margin-left: 15px;\n  margin-right: 15px;\n  text-align: left;\n}\n.page-content .card .main-image {\n  margin-left: 15px;\n  margin-right: 15px;\n}\n.page-content .card .main-image img {\n  width: 100%;\n  height: 200px;\n}\n.page-content .card .like-comment-share {\n  height: 53px;\n  background-color: white;\n  padding-top: 5px;\n}\n.page-content .card .like-comment-share ion-row {\n  padding: 0px;\n  text-align: center;\n}\n.page-content .card .like-comment-share ion-row ion-col ion-button {\n  font-size: 10px;\n  color: #636363;\n  font-size: 12px;\n}\n.page-content .card .like-comment-share ion-row ion-col ion-button ion-icon {\n  width: 15px;\n}\n.page-content .card .user-comment {\n  background-color: white;\n  margin-left: 15px;\n  margin-right: 15px;\n  padding-bottom: 10px;\n}\n.page-content .card .user-comment .user-avatar {\n  width: 70px;\n  padding-top: 15px;\n  padding-left: 15px;\n}\n.page-content .card .user-comment .user-avatar img {\n  width: 30px;\n  height: 30px;\n}\n.page-content .card .user-comment .user-name-and-date {\n  position: absolute;\n  margin-top: -55px;\n  left: 90px;\n  right: 30px;\n}\n.page-content .card .user-comment .user-name-and-date .name {\n  float: left;\n  font-size: 13px;\n  font-weight: bold;\n}\n.page-content .card .user-comment .user-name-and-date .date {\n  float: right;\n  padding-right: 15px;\n  color: #636363;\n  margin-top: 2px;\n  font-size: 10px;\n}\n.page-content .card .user-comment .comment-container {\n  margin-top: -40px;\n  color: #636363;\n  padding-left: 61px;\n  padding-right: 8px;\n}\n.page-content .card .user-comment .comment-container .comment {\n  font-size: 12px;\n  text-align: left;\n}\n.page-content .card .user-comment .comment-container .view-all-comments {\n  color: #636363;\n  font-size: 10px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0tXSUsvS3dpa19NZXJjaGFudC9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtBQ0VSO0FER0U7RUFDRSxxQkFBQTtBQ0FKO0FERUk7RUFDSSxjQUFBO0FDQ1I7QURDRTtFQUNFLFlBQUE7QUNFSjtBRENFO0VBQ0UsMkJBQUE7QUNFSjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0FKO0FEQ0k7RUFDSSxtQkFBQTtBQ0NSO0FESUU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0RKO0FET0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNKSjtBREtJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDSFI7QURLUTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSFo7QURJWTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGaEI7QURHZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0RwQjtBRElZO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRmhCO0FESVk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRmhCO0FETVE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0paO0FET1E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDTFo7QURNWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDSmhCO0FEUVE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ05aO0FET1k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNMaEI7QURNZ0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNKcEI7QURLb0I7RUFDSSxXQUFBO0FDSHhCO0FEU1E7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ1BaO0FEUVk7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ05oQjtBRE9nQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDTHBCO0FEUVk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNOaEI7QURPZ0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTHBCO0FET2dCO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDTHBCO0FEUVk7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTmhCO0FET2dCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDTHBCO0FET2dCO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0xwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgaW9uLWNhcmQtY29udGVudHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbiAgIFxuICB9XG4gIFxuICBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gICAgLmNvbG9yIHtcbiAgICAgICAgY29sb3I6ICMwMGFkZTUgO1xuICAgIH1cbiAgLnBvc3QtaW1ne1xuICAgIHdpZG93czogMTAwJTtcbiAgfVxuICBcbiAgaW9uLXRvb2xiYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgXG4gIC8vIE5PVElGSUNBVElPTiBQQVJUXG4gIGlvbi1iYWRnZSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMnB4OyBcbiAgICBtYXJnaW4tdG9wOiAtMTJweDsgXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTsgXG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgZGl2IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgICB9XG4gIH1cbiAgXG4gIFxuICAubGluZSB7XG4gICAgaGVpZ2h0OiAxcHg7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MzYzNjM7IFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDsgXG4gICAgb3BhY2l0eTogMC4yO1xuICB9XG4gIFxuICBcbiAgXG4gIFxuICAucGFnZS1jb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDsgXG4gICAgcGFkZGluZy1yaWdodDogMHB4OyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlYmYzO1xuICAgIC5jYXJkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7IFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7ICBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIC8vIENBUkQgSEVBREVSXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7IFxuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4OyBcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyAgXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDJweDsgXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNTVweDsgIFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI4cHg7IFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNzVweDsgXG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0OyBcbiAgICAgICAgICAgICAgICByaWdodDogMzBweDsgXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjlweDsgXG4gICAgICAgICAgICAgICAgY29sb3I6ICM2MzYzNjM7IFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBDQVJEIERFU0NSSVBUSU9OXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7IFxuICAgICAgICAgICAgY29sb3I6ICM2MzYzNjM7IFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7IFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4OyBcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ0FSRCBNQUlOIElNQUdFXG4gICAgICAgIC5tYWluLWltYWdlIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4OyBcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gTElLRSBDT01NRU5UIEFORCBTSEFSRVxuICAgICAgICAubGlrZS1jb21tZW50LXNoYXJlIHtcbiAgICAgICAgICAgIGhlaWdodDogNTNweDsgXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4OyBcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaW9uLWNvbCBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4OyAgXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjM2MzYzOyBcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBVU0VSIENPTU1FTlRcbiAgICAgICAgLnVzZXItY29tbWVudCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDsgXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7IFxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAudXNlci1hdmF0YXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4OyBcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDsgXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4OyBcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC51c2VyLW5hbWUtYW5kLWRhdGUge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTU1cHg7IFxuICAgICAgICAgICAgICAgIGxlZnQ6IDkwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDsgXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDsgXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDsgXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7IFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzYzNjM2MzsgXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDsgXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29tbWVudC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC00MHB4OyBcbiAgICAgICAgICAgICAgICBjb2xvcjogIzYzNjM2MzsgXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2MXB4OyAgXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgICAgICAgICAgICAgIC5jb21tZW50IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4OyBcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnZpZXctYWxsLWNvbW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2MzYzNjM7IFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICB9IiwiaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbG9yIHtcbiAgY29sb3I6ICMwMGFkZTU7XG59XG5cbi5wb3N0LWltZyB7XG4gIHdpZG93czogMTAwJTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1iYWRnZSB7XG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGZvbnQtc2l6ZTogOXB4O1xufVxuaW9uLWJhZGdlIGRpdiB7XG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XG59XG5cbi5saW5lIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MzYzNjM7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuLnBhZ2UtY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2ViZjM7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC5oZWFkZXIge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC5oZWFkZXIgLmltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAuaGVhZGVyIC5pbWFnZSBpbWcge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAuaGVhZGVyIC5uYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogNTVweDtcbiAgbWFyZ2luLXRvcDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLmhlYWRlciAuZGF0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDc1cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgcmlnaHQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDI5cHg7XG4gIGNvbG9yOiAjNjM2MzYzO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2MzYzNjM7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC5tYWluLWltYWdlIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLm1haW4taW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC5saWtlLWNvbW1lbnQtc2hhcmUge1xuICBoZWlnaHQ6IDUzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAubGlrZS1jb21tZW50LXNoYXJlIGlvbi1yb3cge1xuICBwYWRkaW5nOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLmxpa2UtY29tbWVudC1zaGFyZSBpb24tcm93IGlvbi1jb2wgaW9uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICM2MzYzNjM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLmxpa2UtY29tbWVudC1zaGFyZSBpb24tcm93IGlvbi1jb2wgaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIHdpZHRoOiAxNXB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAudXNlci1jb21tZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAudXNlci1jb21tZW50IC51c2VyLWF2YXRhciB7XG4gIHdpZHRoOiA3MHB4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAudXNlci1jb21tZW50IC51c2VyLWF2YXRhciBpbWcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAudXNlci1jb21tZW50IC51c2VyLW5hbWUtYW5kLWRhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC01NXB4O1xuICBsZWZ0OiA5MHB4O1xuICByaWdodDogMzBweDtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLnVzZXItY29tbWVudCAudXNlci1uYW1lLWFuZC1kYXRlIC5uYW1lIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC51c2VyLWNvbW1lbnQgLnVzZXItbmFtZS1hbmQtZGF0ZSAuZGF0ZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgY29sb3I6ICM2MzYzNjM7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAudXNlci1jb21tZW50IC5jb21tZW50LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IC00MHB4O1xuICBjb2xvcjogIzYzNjM2MztcbiAgcGFkZGluZy1sZWZ0OiA2MXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC51c2VyLWNvbW1lbnQgLmNvbW1lbnQtY29udGFpbmVyIC5jb21tZW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAudXNlci1jb21tZW50IC5jb21tZW50LWNvbnRhaW5lciAudmlldy1hbGwtY29tbWVudHMge1xuICBjb2xvcjogIzYzNjM2MztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");










var ProfilePage = /** @class */ (function () {
    function ProfilePage(modalCtrl, fileChooser, filePath, asC, db, fs, service, navCtrl) {
        this.modalCtrl = modalCtrl;
        this.fileChooser = fileChooser;
        this.filePath = filePath;
        this.asC = asC;
        this.db = db;
        this.fs = fs;
        this.service = service;
        this.navCtrl = navCtrl;
        this.Posts = [];
        this.loaded = false;
        //variables
        this.liked = false;
        this.h = false;
        this.Addcomment = false;
        this.showSearch = false;
        //objects
        this.likes = { "count": 0 };
        this.shopname = localStorage.getItem('shop');
    }
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.getShop();
    };
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.scanAndPay = function () {
        this.modalCtrl.dismiss(["scan", this.shopname]);
        this.navCtrl.navigate(['tabs/shop']);
    };
    ProfilePage.prototype.pickPayCollect = function () {
        this.modalCtrl.dismiss(["pick", this.shopname]);
        this.navCtrl.navigate(['tabs/offers']);
    };
    // goto shoppinglist page
    ProfilePage.prototype.Delivery = function () {
        this.modalCtrl.dismiss(["delivery", this.shopname]);
        this.navCtrl.navigate(['tabs/offers']);
    };
    //share via whatsapp
    ProfilePage.prototype.share = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var asc;
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
    //add a comment
    ProfilePage.prototype.AddComment = function () {
        if (this.Addcomment == true) {
            this.Addcomment = false;
        }
        else {
            this.Addcomment = true;
        }
    };
    // like posts
    ProfilePage.prototype.like = function () {
        if (this.liked == false) {
            this.likes.count++;
            this.liked = true;
        }
        else {
            this.likes.count--;
            this.liked = false;
        }
        if (this.h == false) {
            this.h = true;
        }
        else {
            this.h = false;
        }
    };
    //close the modal
    ProfilePage.prototype.close = function () {
        this.modalCtrl.dismiss();
    };
    //go to maps to see location of the shop
    ProfilePage.prototype.maps = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    //open a link in a browser inside the app
    ProfilePage.prototype.inbrowser = function (link) {
        console.log("Opens link in the app");
        var target = '_blank';
        // const options = { location : 'no' } ;
        // this.iab.create(link,target);
    };
    ProfilePage.prototype.show = function () {
    };
    ProfilePage.prototype.infoModal = function (shop, logo) {
    };
    ProfilePage.prototype.showImage = function () {
    };
    ProfilePage.prototype.comments = function () {
    };
    // get shop details
    ProfilePage.prototype.getShop = function () {
        var _this = this;
        var data = this.fs.collection('shops', function (ref) {
            return ref.where('shop', '==', _this.shopname);
        });
        var snap = data.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
        snap.subscribe(function (res) {
            _this.shop = res[0];
            console.log('shop details', _this.shop);
        });
        this.getPosts();
    };
    ProfilePage.prototype.getPosts = function () {
        var _this = this;
        var posts = this.fs.collection('posts', function (ref) {
            return ref.where('shop', '==', _this.shopname).orderBy('time', 'desc');
        });
        var fd = posts.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (actions) {
            return actions.map(function (a) {
                var id = a.payload.doc.id;
                var data = a.payload.doc.data();
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
        fd.subscribe(function (res) {
            _this.Posts = res;
            _this.loaded = true;
            console.log(_this.Posts);
        });
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__["FileChooser"] },
        { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__["FilePath"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
        { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__["FileChooser"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__["FilePath"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"],
            _services_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es5.js.map