(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"top\">\n  <ion-toolbar  *ngIf=\"scanbutton\"  color=\"primary\">\n    <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\" #menu ></ion-menu-button>\n      </ion-buttons>\n  <ion-title >\n    Kwik Merchant\n  </ion-title>\n</ion-toolbar>\n</div>\n<div>\n <!--create list button-->\n <div style=\"text-align: center;margin-top: 200px;font-size: 0.9em;\" (click)=scan() *ngIf=\"scanbutton\">\n <ion-label class=\"ion-text-center\">Tap to scan and Verify</ion-label><br><br><br>\n \n      <ion-col size=\"1\" ><ion-icon  style=\"height: 80px;width: 80px;\"name=\"qr-scanner\" size=\"large\" color=\"primary\"></ion-icon></ion-col>\n \n</div>\n  \n\n</div>\n<div *ngIf=\"!scanbutton\" class=\"btn\">\n  <ion-list *ngFor=\"let trans of transaction\">\n      <ion-button (click)=\"close()\" class=\"ion-float-left\"shape=\"round\" >CLOSE</ion-button>\n      <ion-button (click)=\"print()\" class=\"ion-float-right\" shape=\"round\">Approve</ion-button>\n\n  </ion-list>\n</div>\n\n<div id=\"invoice-POS\" *ngIf=\"!scanbutton\">\n    \n    <div center id=\"top\">\n      <div class=\"logo\"></div>\n      <div class=\"info\"> \n        <!--<h2>{{shopSelected}}</h2>-->\n      </div><!--End Info-->\n    </div ><!--End InvoiceTop-->\n\t<p style=\"text-align:center\">\n\t\t\n      Date: {{currentDate | date: 'EEEE, MMMM d y, h:mm:ss a'}}\n\t\t\n\t</p>\n    <div id=\"mid\">\n      <div class=\"info\">\n        <h2>Contact Info</h2>\n        <p> \n            Address : street city, state 0000<br>\n            Email   : supermarket@gmail.com<br>\n            Phone   : 555-555-5555<br>\n        </p>\n      </div>\n    </div><!--End Invoice Mid-->\n    \n    <div id=\"bot\">\n\n\t\t\t\t\t<div id=\"table\">\n\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t<tr class=\"tabletitle\">\n\t\t\t\t\t\t\t\t<td class=\"item\"><h2>Item</h2></td>\n\t\t\t\t\t\t\t\t<td class=\"Hours\"><h2>Qty</h2></td>\n\t\t\t\t\t\t\t\t<td class=\"Rate\"><h2>Sub Total Kshs</h2></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"service\" *ngFor=\"let trans of transaction\" >\n\t\t\t\t\t\t\t\t<td class=\"tableitem\"><p class=\"itemtext\">{{trans.name}}</p></td>\n\t\t\t\t\t\t\t\t<td class=\"tableitem\"><p class=\"itemtext\">{{trans.count}}</p></td>\n\t\t\t\t\t\t\t\t<td class=\"tableitem\"><p class=\"itemtext\">{{trans.price}}</p></td>\n\t\t\t\t\t\t\t</tr>\n              \n\t\t\t\t\t\t\t<tr class=\"tabletitle\" *ngFor=\"let trans of transaction\">\n\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t<td class=\"Rate\"><h2>Total</h2></td>\n\t\t\t\t\t\t\t\t<td class=\"payment\"><h2>{{trans.count * trans.price}}</h2></td>\n\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t<div style=\"text-align: center\"><p><strong>Thank you for shopping with us</strong></p></div>\n\t\t\t\t\t</div><!--End Table-->\n          <div class=\"legalcopy\" style=\"text-align: center\" *ngFor=\"let trans of transaction\"> \n            <h3>{{trans.shopname}}</h3>\n\t\t\t\t\t  </div>\n          <div class=\"legalcopy\">\n          </div>\n\t\t\t\t</div><!--End InvoiceBot-->\n  </div><!--End Invoice-->\n  \n    \n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  position: fixed;\n  width: 100%;\n  background: transparent;\n}\n\n#invoice-POS {\n  box-shadow: 0 0 1in -0.25in rgba(0, 0, 0, 0.5);\n  padding: 2mm;\n  margin: 0 auto;\n  width: 80%;\n  background: #FFF;\n}\n\n#invoice-POS ::-moz-selection {\n  background: #f31544;\n  color: #FFF;\n}\n\n#invoice-POS ::selection {\n  background: #f31544;\n  color: #FFF;\n}\n\n#invoice-POS h1 {\n  font-size: 1.5em;\n  color: #222;\n}\n\n#invoice-POS h2 {\n  font-size: 0.9em;\n}\n\n#invoice-POS h3 {\n  font-size: 1.2em;\n  font-weight: 300;\n  line-height: 2em;\n}\n\n#invoice-POS p {\n  font-size: 0.7em;\n  color: #666;\n  line-height: 1.2em;\n}\n\n#invoice-POS #top, #invoice-POS #mid, #invoice-POS #bot {\n  /* Targets all id with 'col-' */\n  border-bottom: 1px solid #EEE;\n}\n\n#invoice-POS .logo {\n  margin: 20% auto 10%;\n}\n\n#invoice-POS #top {\n  min-height: 100px;\n}\n\n#invoice-POS #mid {\n  min-height: 80px;\n}\n\n#invoice-POS #bot {\n  min-height: 50px;\n}\n\n#invoice-POS #top .logo {\n  text-align: center;\n  height: 60px;\n  width: 60px;\n  background: url('icon.png') no-repeat;\n  background-size: 60px 60px;\n}\n\n#invoice-POS .clientlogo {\n  float: left;\n  height: 60px;\n  width: 60px;\n  background: url(http://michaeltruong.ca/images/client.jpg) no-repeat;\n  background-size: 60px 60px;\n  border-radius: 50px;\n}\n\n#invoice-POS .info {\n  display: block;\n  text-align: center;\n  margin-left: 0;\n}\n\n#invoice-POS .title {\n  float: right;\n}\n\n#invoice-POS .title p {\n  text-align: right;\n}\n\n#invoice-POS table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n#invoice-POS .tabletitle {\n  font-size: 0.9em;\n  background: #EEE;\n}\n\n#invoice-POS .service {\n  border-bottom: 1px solid #EEE;\n}\n\n#invoice-POS .item {\n  width: 40%;\n}\n\n#invoice-POS .itemtext {\n  font-size: 0.9em;\n}\n\n#invoice-POS #legalcopy {\n  margin-top: 5mm;\n  text-align: center;\n}\n\nion-card {\n  border-radius: 10px;\n}\n\nion-toolbar {\n  margin-top: 0px;\n  background-color: va(--ion-color-primary);\n  padding-bottom: 20px;\n  color: white;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0tXSUsvS3dpa19NZXJjaGFudC9zcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRyxlQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDQUg7O0FESUE7RUFDRSw4Q0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFBYSxtQkFBQTtFQUFxQixXQUFBO0FDQWxDOztBREFBO0VBQWEsbUJBQUE7RUFBcUIsV0FBQTtBQ0FsQzs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREVBO0VBQUcsZ0JBQUE7QUNDSDs7QURBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0VGOztBREFBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURDQTtFQUFpQiwrQkFBQTtFQUNmLDZCQUFBO0FDRUY7O0FEQUE7RUFDSSxvQkFBQTtBQ0VKOztBRENBO0VBQUssaUJBQUE7QUNFTDs7QUREQTtFQUFLLGdCQUFBO0FDSUw7O0FESEE7RUFBTSxnQkFBQTtBQ01OOztBREpBO0VBQ0ksa0JBQUE7RUFDSCxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsMEJBQUE7QUNNRDs7QURKQTtFQUNFLFdBQUE7RUFDRCxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9FQUFBO0VBQ0EsMEJBQUE7RUFDQyxtQkFBQTtBQ01GOztBREpBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ01GOztBREpBO0VBQ0UsWUFBQTtBQ01GOztBREpBO0VBQVMsaUJBQUE7QUNPVDs7QUROQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQ1FGOztBRExBO0VBRUUsZ0JBQUE7RUFDQSxnQkFBQTtBQ01GOztBREpBO0VBQVMsNkJBQUE7QUNPVDs7QUROQTtFQUFNLFVBQUE7QUNTTjs7QURSQTtFQUFVLGdCQUFBO0FDV1Y7O0FEVEE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNXRjs7QURQQTtFQUNFLG1CQUFBO0FDVUY7O0FEUkE7RUFDRSxlQUFBO0VBQ0EseUNBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDV0YiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYnRue1xuICAgcG9zaXRpb246Zml4ZWQ7XG4gICB3aWR0aDogMTAwJTtcbiAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuIFxufVxuLy8vL1wiQGlvbmljLW5hdGl2ZS9maXJlYmFzZVwiOiBcIl41LjEyLjBcIiwgICBcImNvcmRvdmEtcGx1Z2luLWZpcmViYXNlXCI6IFwiXjUuMTIuMFwiLCBcImZpcmViYXNlXCI6IFwiXjUuMTIuMFwiLFwiY29yZG92YS1wbHVnaW4tZmlyZWJhc2VcIjoge30sXG4jaW52b2ljZS1QT1N7XG4gIGJveC1zaGFkb3c6IDAgMCAxaW4gLTAuMjVpbiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBhZGRpbmc6Mm1tO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDgwJTtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgXG4gIFxuOjpzZWxlY3Rpb24ge2JhY2tncm91bmQ6ICNmMzE1NDQ7IGNvbG9yOiAjRkZGO31cbi8vOjptb3otc2VsZWN0aW9uIHtiYWNrZ3JvdW5kOiAjZjMxNTQ0OyBjb2xvcjogI0ZGRjt9XG5oMXtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY29sb3I6ICMyMjI7XG59XG5oMntmb250LXNpemU6IC45ZW07fVxuaDN7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG59XG5we1xuICBmb250LXNpemU6IC43ZW07XG4gIGNvbG9yOiAjNjY2O1xuICBsaW5lLWhlaWdodDogMS4yZW07XG59XG4gXG4jdG9wLCAjbWlkLCNib3R7IC8qIFRhcmdldHMgYWxsIGlkIHdpdGggJ2NvbC0nICovXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUVFO1xufVxuLmxvZ297XG4gICAgbWFyZ2luOiAyMCUgYXV0byAxMCUgO1xufVxuXG4jdG9we21pbi1oZWlnaHQ6IDEwMHB4O31cbiNtaWR7bWluLWhlaWdodDogODBweDt9IFxuI2JvdHsgbWluLWhlaWdodDogNTBweDt9XG5cbiN0b3AgLmxvZ297XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG5cdGhlaWdodDogNjBweDtcblx0d2lkdGg6IDYwcHg7XG5cdGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uLnBuZycpIG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiA2MHB4IDYwcHg7XG59XG4uY2xpZW50bG9nb3tcbiAgZmxvYXQ6IGxlZnQ7XG5cdGhlaWdodDogNjBweDtcblx0d2lkdGg6IDYwcHg7XG5cdGJhY2tncm91bmQ6IHVybChodHRwOi8vbWljaGFlbHRydW9uZy5jYS9pbWFnZXMvY2xpZW50LmpwZykgbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXNpemU6IDYwcHggNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbi5pbmZve1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyIDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4udGl0bGV7XG4gIGZsb2F0OiByaWdodDtcbn1cbi50aXRsZSBwe3RleHQtYWxpZ246IHJpZ2h0O30gXG50YWJsZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi50YWJsZXRpdGxle1xuICAvL3BhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAuOWVtO1xuICBiYWNrZ3JvdW5kOiAjRUVFO1xufVxuLnNlcnZpY2V7Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRUU7fVxuLml0ZW17d2lkdGg6IDQwJTt9XG4uaXRlbXRleHR7Zm9udC1zaXplOiAwLjllbTt9XG5cbiNsZWdhbGNvcHl7XG4gIG1hcmdpbi10b3A6IDVtbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyIDtcbn1cblxufVxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDtcbn1cbmlvbi10b29sYmFye1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbn0iLCIuYnRuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbiNpbnZvaWNlLVBPUyB7XG4gIGJveC1zaGFkb3c6IDAgMCAxaW4gLTAuMjVpbiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBhZGRpbmc6IDJtbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG59XG4jaW52b2ljZS1QT1MgOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjZjMxNTQ0O1xuICBjb2xvcjogI0ZGRjtcbn1cbiNpbnZvaWNlLVBPUyBoMSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGNvbG9yOiAjMjIyO1xufVxuI2ludm9pY2UtUE9TIGgyIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cbiNpbnZvaWNlLVBPUyBoMyB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG59XG4jaW52b2ljZS1QT1MgcCB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGNvbG9yOiAjNjY2O1xuICBsaW5lLWhlaWdodDogMS4yZW07XG59XG4jaW52b2ljZS1QT1MgI3RvcCwgI2ludm9pY2UtUE9TICNtaWQsICNpbnZvaWNlLVBPUyAjYm90IHtcbiAgLyogVGFyZ2V0cyBhbGwgaWQgd2l0aCAnY29sLScgKi9cbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRUU7XG59XG4jaW52b2ljZS1QT1MgLmxvZ28ge1xuICBtYXJnaW46IDIwJSBhdXRvIDEwJTtcbn1cbiNpbnZvaWNlLVBPUyAjdG9wIHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG59XG4jaW52b2ljZS1QT1MgI21pZCB7XG4gIG1pbi1oZWlnaHQ6IDgwcHg7XG59XG4jaW52b2ljZS1QT1MgI2JvdCB7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG59XG4jaW52b2ljZS1QT1MgI3RvcCAubG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29uLnBuZ1wiKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNjBweCA2MHB4O1xufVxuI2ludm9pY2UtUE9TIC5jbGllbnRsb2dvIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQ6IHVybChodHRwOi8vbWljaGFlbHRydW9uZy5jYS9pbWFnZXMvY2xpZW50LmpwZykgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDYwcHggNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbiNpbnZvaWNlLVBPUyAuaW5mbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuI2ludm9pY2UtUE9TIC50aXRsZSB7XG4gIGZsb2F0OiByaWdodDtcbn1cbiNpbnZvaWNlLVBPUyAudGl0bGUgcCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuI2ludm9pY2UtUE9TIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG4jaW52b2ljZS1QT1MgLnRhYmxldGl0bGUge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBiYWNrZ3JvdW5kOiAjRUVFO1xufVxuI2ludm9pY2UtUE9TIC5zZXJ2aWNlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRUU7XG59XG4jaW52b2ljZS1QT1MgLml0ZW0ge1xuICB3aWR0aDogNDAlO1xufVxuI2ludm9pY2UtUE9TIC5pdGVtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG4jaW52b2ljZS1QT1MgI2xlZ2FsY29weSB7XG4gIG1hcmdpbi10b3A6IDVtbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YSgtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");










let Tab1Page = class Tab1Page {
    constructor(barcodeScanner, db, navCtrl, alertctrl, asC, menuCtrl, af, firestore, service) {
        this.barcodeScanner = barcodeScanner;
        this.db = db;
        this.navCtrl = navCtrl;
        this.alertctrl = alertctrl;
        this.asC = asC;
        this.menuCtrl = menuCtrl;
        this.af = af;
        this.firestore = firestore;
        this.service = service;
        this.scanbutton = true;
        this.shop = [];
        this.service.hiddenTabs = false;
    }
    ngOnInit() {
        this.getDate();
        document.querySelector('ion-tab-bar').style.display = 'flex';
        this.menuCtrl.enable(true);
        this.af.user.subscribe(res => {
            this.userID = res.uid;
            console.log('user' + res.uid);
        });
    }
    notifications() {
        this.navCtrl.navigate(['tabs/notifications']);
    }
    close() {
        this.scanbutton = true;
        this.transaction = [];
    }
    print() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let popup = yield this.alertctrl.create({
                header: 'Sorry can not print now ',
                message: 'printer is not connected',
                buttons: [
                    {
                        text: 'close',
                        role: 'cancel'
                    }
                ]
            });
            popup.present();
        });
    }
    getDate() {
        this.currentDate = new Date().getTime();
    }
    //separate userID and transID
    truncate(barcode) {
        //let qr = "8FxNjxpLCKQLFSZPzOcaUrYSK2M2"+"lthRbbyEWrxRduB"
        this.key = barcode.substring(0, 28);
        this.transID = barcode.slice(-15);
        console.log(this.key);
        console.log(this.transID);
    }
    scan() {
        this.barcodeScanner.scan().then(barcode => {
            //get key and transID from barcode
            this.truncate(barcode);
            //search the code from db
            this.getTransaction(this.key, this.transID);
        });
    }
    check() {
        this.scanbutton = false;
        let key = "8FxNjxpLCKQLFSZPzOcaUrYSK2M2";
        let transID = "lthRbbyEWrxRduB";
        this.getTransaction(key, transID);
        //this.truncate();
    }
    getTransaction(key, transID) {
        //get transaction
        this.db.checktransaction(key, transID)
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(changes => {
            return changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())));
        }))
            .subscribe(trans => {
            this.transaction = trans;
        });
        console.log(this.transaction);
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
    { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_9__["FirestoreService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('menu', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], Tab1Page.prototype, "menu", void 0);
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"],
        _database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"],
        _services_firestore_service__WEBPACK_IMPORTED_MODULE_9__["FirestoreService"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map