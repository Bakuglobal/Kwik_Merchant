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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
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
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  position: fixed;\n  width: 100%;\n  background: transparent;\n}\n\n#invoice-POS {\n  box-shadow: 0 0 1in -0.25in rgba(0, 0, 0, 0.5);\n  padding: 2mm;\n  margin: 0 auto;\n  width: 80%;\n  background: #FFF;\n}\n\n#invoice-POS ::-moz-selection {\n  background: #f31544;\n  color: #FFF;\n}\n\n#invoice-POS ::selection {\n  background: #f31544;\n  color: #FFF;\n}\n\n#invoice-POS h1 {\n  font-size: 1.5em;\n  color: #222;\n}\n\n#invoice-POS h2 {\n  font-size: 0.9em;\n}\n\n#invoice-POS h3 {\n  font-size: 1.2em;\n  font-weight: 300;\n  line-height: 2em;\n}\n\n#invoice-POS p {\n  font-size: 0.7em;\n  color: #666;\n  line-height: 1.2em;\n}\n\n#invoice-POS #top, #invoice-POS #mid, #invoice-POS #bot {\n  /* Targets all id with 'col-' */\n  border-bottom: 1px solid #EEE;\n}\n\n#invoice-POS .logo {\n  margin: 20% auto 10%;\n}\n\n#invoice-POS #top {\n  min-height: 100px;\n}\n\n#invoice-POS #mid {\n  min-height: 80px;\n}\n\n#invoice-POS #bot {\n  min-height: 50px;\n}\n\n#invoice-POS #top .logo {\n  text-align: center;\n  height: 60px;\n  width: 60px;\n  background: url('icon.png') no-repeat;\n  background-size: 60px 60px;\n}\n\n#invoice-POS .clientlogo {\n  float: left;\n  height: 60px;\n  width: 60px;\n  background: url(http://michaeltruong.ca/images/client.jpg) no-repeat;\n  background-size: 60px 60px;\n  border-radius: 50px;\n}\n\n#invoice-POS .info {\n  display: block;\n  text-align: center;\n  margin-left: 0;\n}\n\n#invoice-POS .title {\n  float: right;\n}\n\n#invoice-POS .title p {\n  text-align: right;\n}\n\n#invoice-POS table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n#invoice-POS .tabletitle {\n  font-size: 0.9em;\n  background: #EEE;\n}\n\n#invoice-POS .service {\n  border-bottom: 1px solid #EEE;\n}\n\n#invoice-POS .item {\n  width: 40%;\n}\n\n#invoice-POS .itemtext {\n  font-size: 0.9em;\n}\n\n#invoice-POS #legalcopy {\n  margin-top: 5mm;\n  text-align: center;\n}\n\nion-card {\n  border-radius: 10px;\n}\n\nion-toolbar {\n  margin-top: 0px;\n  background-color: va(--ion-color-primary);\n  padding-bottom: 20px;\n  color: white;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGxhcmFzc2VtbWF4d2VsbC9EZXNrdG9wL0t3aWtfTWVyY2hhbnQvc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0csZUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ0FIOztBRElBO0VBQ0UsOENBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQWEsbUJBQUE7RUFBcUIsV0FBQTtBQ0FsQzs7QURBQTtFQUFhLG1CQUFBO0VBQXFCLFdBQUE7QUNBbEM7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNBRjs7QURFQTtFQUFHLGdCQUFBO0FDQ0g7O0FEQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQ0E7RUFBaUIsK0JBQUE7RUFDZiw2QkFBQTtBQ0VGOztBREFBO0VBQ0ksb0JBQUE7QUNFSjs7QURDQTtFQUFLLGlCQUFBO0FDRUw7O0FEREE7RUFBSyxnQkFBQTtBQ0lMOztBREhBO0VBQU0sZ0JBQUE7QUNNTjs7QURKQTtFQUNJLGtCQUFBO0VBQ0gsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLDBCQUFBO0FDTUQ7O0FESkE7RUFDRSxXQUFBO0VBQ0QsWUFBQTtFQUNBLFdBQUE7RUFDQSxvRUFBQTtFQUNBLDBCQUFBO0VBQ0MsbUJBQUE7QUNNRjs7QURKQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNNRjs7QURKQTtFQUNFLFlBQUE7QUNNRjs7QURKQTtFQUFTLGlCQUFBO0FDT1Q7O0FETkE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUNRRjs7QURMQTtFQUVFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNNRjs7QURKQTtFQUFTLDZCQUFBO0FDT1Q7O0FETkE7RUFBTSxVQUFBO0FDU047O0FEUkE7RUFBVSxnQkFBQTtBQ1dWOztBRFRBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDV0Y7O0FEUEE7RUFDRSxtQkFBQTtBQ1VGOztBRFJBO0VBQ0UsZUFBQTtFQUNBLHlDQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1dGIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJ0bntcbiAgIHBvc2l0aW9uOmZpeGVkO1xuICAgd2lkdGg6IDEwMCU7XG4gICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiBcbn1cbi8vLy9cIkBpb25pYy1uYXRpdmUvZmlyZWJhc2VcIjogXCJeNS4xMi4wXCIsICAgXCJjb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZVwiOiBcIl41LjEyLjBcIiwgXCJmaXJlYmFzZVwiOiBcIl41LjEyLjBcIixcImNvcmRvdmEtcGx1Z2luLWZpcmViYXNlXCI6IHt9LFxuI2ludm9pY2UtUE9Te1xuICBib3gtc2hhZG93OiAwIDAgMWluIC0wLjI1aW4gcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwYWRkaW5nOjJtbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIFxuICBcbjo6c2VsZWN0aW9uIHtiYWNrZ3JvdW5kOiAjZjMxNTQ0OyBjb2xvcjogI0ZGRjt9XG4vLzo6bW96LXNlbGVjdGlvbiB7YmFja2dyb3VuZDogI2YzMTU0NDsgY29sb3I6ICNGRkY7fVxuaDF7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGNvbG9yOiAjMjIyO1xufVxuaDJ7Zm9udC1zaXplOiAuOWVtO31cbmgze1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMmVtO1xufVxucHtcbiAgZm9udC1zaXplOiAuN2VtO1xuICBjb2xvcjogIzY2NjtcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xufVxuIFxuI3RvcCwgI21pZCwjYm90eyAvKiBUYXJnZXRzIGFsbCBpZCB3aXRoICdjb2wtJyAqL1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VFRTtcbn1cbi5sb2dve1xuICAgIG1hcmdpbjogMjAlIGF1dG8gMTAlIDtcbn1cblxuI3RvcHttaW4taGVpZ2h0OiAxMDBweDt9XG4jbWlke21pbi1oZWlnaHQ6IDgwcHg7fSBcbiNib3R7IG1pbi1oZWlnaHQ6IDUwcHg7fVxuXG4jdG9wIC5sb2dve1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuXHRoZWlnaHQ6IDYwcHg7XG5cdHdpZHRoOiA2MHB4O1xuXHRiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmcnKSBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtc2l6ZTogNjBweCA2MHB4O1xufVxuLmNsaWVudGxvZ297XG4gIGZsb2F0OiBsZWZ0O1xuXHRoZWlnaHQ6IDYwcHg7XG5cdHdpZHRoOiA2MHB4O1xuXHRiYWNrZ3JvdW5kOiB1cmwoaHR0cDovL21pY2hhZWx0cnVvbmcuY2EvaW1hZ2VzL2NsaWVudC5qcGcpIG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiA2MHB4IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4uaW5mb3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlciA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLnRpdGxle1xuICBmbG9hdDogcmlnaHQ7XG59XG4udGl0bGUgcHt0ZXh0LWFsaWduOiByaWdodDt9IFxudGFibGV7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4udGFibGV0aXRsZXtcbiAgLy9wYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogLjllbTtcbiAgYmFja2dyb3VuZDogI0VFRTtcbn1cbi5zZXJ2aWNle2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUVFO31cbi5pdGVte3dpZHRoOiA0MCU7fVxuLml0ZW10ZXh0e2ZvbnQtc2l6ZTogMC45ZW07fVxuXG4jbGVnYWxjb3B5e1xuICBtYXJnaW4tdG9wOiA1bW07XG4gIHRleHQtYWxpZ246IGNlbnRlciA7XG59XG5cbn1cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCA7XG59XG5pb24tdG9vbGJhcntcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YSgtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG59IiwiLmJ0biB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4jaW52b2ljZS1QT1Mge1xuICBib3gtc2hhZG93OiAwIDAgMWluIC0wLjI1aW4gcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwYWRkaW5nOiAybW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xufVxuI2ludm9pY2UtUE9TIDo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2YzMTU0NDtcbiAgY29sb3I6ICNGRkY7XG59XG4jaW52b2ljZS1QT1MgaDEge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBjb2xvcjogIzIyMjtcbn1cbiNpbnZvaWNlLVBPUyBoMiB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG4jaW52b2ljZS1QT1MgaDMge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMmVtO1xufVxuI2ludm9pY2UtUE9TIHAge1xuICBmb250LXNpemU6IDAuN2VtO1xuICBjb2xvcjogIzY2NjtcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xufVxuI2ludm9pY2UtUE9TICN0b3AsICNpbnZvaWNlLVBPUyAjbWlkLCAjaW52b2ljZS1QT1MgI2JvdCB7XG4gIC8qIFRhcmdldHMgYWxsIGlkIHdpdGggJ2NvbC0nICovXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUVFO1xufVxuI2ludm9pY2UtUE9TIC5sb2dvIHtcbiAgbWFyZ2luOiAyMCUgYXV0byAxMCU7XG59XG4jaW52b2ljZS1QT1MgI3RvcCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xufVxuI2ludm9pY2UtUE9TICNtaWQge1xuICBtaW4taGVpZ2h0OiA4MHB4O1xufVxuI2ludm9pY2UtUE9TICNib3Qge1xuICBtaW4taGVpZ2h0OiA1MHB4O1xufVxuI2ludm9pY2UtUE9TICN0b3AgLmxvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi5wbmdcIikgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDYwcHggNjBweDtcbn1cbiNpbnZvaWNlLVBPUyAuY2xpZW50bG9nbyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cDovL21pY2hhZWx0cnVvbmcuY2EvaW1hZ2VzL2NsaWVudC5qcGcpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiA2MHB4IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4jaW52b2ljZS1QT1MgLmluZm8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbiNpbnZvaWNlLVBPUyAudGl0bGUge1xuICBmbG9hdDogcmlnaHQ7XG59XG4jaW52b2ljZS1QT1MgLnRpdGxlIHAge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbiNpbnZvaWNlLVBPUyB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuI2ludm9pY2UtUE9TIC50YWJsZXRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgYmFja2dyb3VuZDogI0VFRTtcbn1cbiNpbnZvaWNlLVBPUyAuc2VydmljZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUVFO1xufVxuI2ludm9pY2UtUE9TIC5pdGVtIHtcbiAgd2lkdGg6IDQwJTtcbn1cbiNpbnZvaWNlLVBPUyAuaXRlbXRleHQge1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuI2ludm9pY2UtUE9TICNsZWdhbGNvcHkge1xuICBtYXJnaW4tdG9wOiA1bW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmEoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");










var Tab1Page = /** @class */ (function () {
    function Tab1Page(barcodeScanner, db, navCtrl, alertctrl, asC, menuCtrl, af, firestore, service) {
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
    Tab1Page.prototype.ngOnInit = function () {
        var _this = this;
        this.getDate();
        document.querySelector('ion-tab-bar').style.display = 'flex';
        this.menuCtrl.enable(true);
        this.af.user.subscribe(function (res) {
            _this.userID = res.uid;
            console.log('user' + res.uid);
        });
    };
    Tab1Page.prototype.notifications = function () {
        this.navCtrl.navigate(['tabs/notifications']);
    };
    Tab1Page.prototype.close = function () {
        this.scanbutton = true;
        this.transaction = [];
    };
    Tab1Page.prototype.print = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popup;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertctrl.create({
                            header: 'Sorry can not print now ',
                            message: 'printer is not connected',
                            buttons: [
                                {
                                    text: 'close',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        popup = _a.sent();
                        popup.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.prototype.getDate = function () {
        this.currentDate = new Date().getTime();
    };
    //separate userID and transID
    Tab1Page.prototype.truncate = function (barcode) {
        //let qr = "8FxNjxpLCKQLFSZPzOcaUrYSK2M2"+"lthRbbyEWrxRduB"
        this.key = barcode.substring(0, 28);
        this.transID = barcode.slice(-15);
        console.log(this.key);
        console.log(this.transID);
    };
    Tab1Page.prototype.scan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcode) {
            //get key and transID from barcode
            _this.truncate(barcode);
            //search the code from db
            _this.getTransaction(_this.key, _this.transID);
        });
    };
    Tab1Page.prototype.check = function () {
        this.scanbutton = false;
        var key = "8FxNjxpLCKQLFSZPzOcaUrYSK2M2";
        var transID = "lthRbbyEWrxRduB";
        this.getTransaction(key, transID);
        //this.truncate();
    };
    Tab1Page.prototype.getTransaction = function (key, transID) {
        var _this = this;
        //get transaction
        this.db.checktransaction(key, transID)
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (changes) {
            return changes.map(function (c) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.payload.key }, c.payload.val())); });
        }))
            .subscribe(function (trans) {
            _this.transaction = trans;
        });
        console.log(this.transaction);
    };
    Tab1Page.ctorParameters = function () { return [
        { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"] },
        { type: _database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
        { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_9__["FirestoreService"] }
    ]; };
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
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map