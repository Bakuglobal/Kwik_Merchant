(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n        <ion-button *ngIf=\"seller_account_form\" (click)=\"goBackToLogin()\">\n            <ion-icon style=\"width: 20px; height: 20px;\" size=\"small\" color=\"light\" name=\"arrow-round-back\"></ion-icon>\n        </ion-button>\n\n        <ion-button *ngIf=\"business_information_form\" (click)=\"goBackToSellerAccount()\">\n            <ion-icon style=\"width: 20px; height: 20px;\" size=\"small\" color=\"light\" name=\"arrow-round-back\"></ion-icon>\n        </ion-button>\n\n        <ion-button *ngIf=\"payment_details_form\" (click)=\"goBackToBusinessInformation()\">\n            <ion-icon style=\"width: 20px; height: 20px;\" size=\"small\" color=\"light\" name=\"arrow-round-back\"></ion-icon>\n        </ion-button>\n\n        <ion-button *ngIf=\"know_your_customer_form\" (click)=\"goBackToPaymentDetails()\">\n            <ion-icon style=\"width: 20px; height: 20px;\" size=\"small\" color=\"light\" name=\"arrow-round-back\"></ion-icon>\n        </ion-button>\n\n        <ion-button *ngIf=\"logo_cover\" (click)=\"backToKyc()\">\n          <ion-icon style=\"width: 20px; height: 20px;\" size=\"small\" color=\"light\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title text-center style=\"margin-right: 15px;\">SIGN UP</ion-title>\n</ion-toolbar>\n\n\n\n\n\n<ion-content>\n  <div class=\"third-content\">\n\n    <div style=\"margin-right: 17px; margin-top: -10px;\">\n        <div style=\"font-size: 20px; color: #696868; padding-bottom: 15px;\">Register and start selling.</div>\n        <ion-progress-bar *ngIf=\"seller_account_form\" color=\"primary\" value=\"0.0\"></ion-progress-bar>\n        <ion-progress-bar *ngIf=\"business_information_form\" color=\"primary\" value=\"0.33\"></ion-progress-bar>\n        <ion-progress-bar *ngIf=\"payment_details_form\" color=\"primary\" value=\"0.66\"></ion-progress-bar>\n        <ion-progress-bar *ngIf=\"know_your_customer_form\" color=\"primary\" value=\"0.88\"></ion-progress-bar>\n        <ion-progress-bar *ngIf=\"logo_cover\" color=\"primary\" value=\"1\"></ion-progress-bar>\n    </div>\n\n\n\n\n\n    <!-- Seller Account -->\n    <form [formGroup]=\"sellerAccountForm\" *ngIf=\"seller_account_form\">\n      <ion-row class=\"ion-no-padding\">\n        <div style=\"color: var(--ion-color-primary); margin-top: 20px; font-size: 20px; margin-bottom: 15px;\">Seller\n          Account</div>\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                name=\"owner\" formControlName=\"owner\" type=\"text\" placeholder=\"Full Name*\"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                name=\"Contacts\" formControlName=\"Contacts\" type=\"text\" placeholder=\"Phone Number*\"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                name=\"shop\" formControlName=\"shop\" type=\"text\" placeholder=\"Shop Name *\"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                name=\"Email\" formControlName=\"Email\" type=\"email\" placeholder=\"Email Address *\"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-icon slot=\"end\" [name]=\"passwordIcon\" (click)='hideShowPassword()' size=\"small\"\n                style=\"float: right; right: 17px;\"></ion-icon>\n              <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\"\n                [type]=\"passwordType\" clearOnEdit=\"false\" name=\"password\" formControlName=\"password\"\n                placeholder=\"Password *\">\n              </ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-icon slot=\"end\" [name]=\"confirmPasswordIcon\" (click)='hideShowConfirmPassword()' size=\"small\"\n                style=\"float: right; right: 17px;\"></ion-icon>\n              <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\"\n                [type]=\"confirmPasswordType\" clearOnEdit=\"false\" name=\"confirmPassword\"\n                formControlName=\"confirmPassword\" placeholder=\"Confirm Password *\">\n              </ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <div style=\"margin-right: 17px; width: 100%;\">\n          <ion-list class=\"i-agree\" class=\"ion-no-padding\">\n            <ion-item text-center class=\"ion-no-padding\">\n              <input type=\"checkbox\" name=\"termsAndConditions\" formControlName=\"termsAndConditions\" />\n              <div style=\"margin-left: 10px; font-size: 13px; color: #696868;\">I have read and accepted <b\n                  (click)=\"viewTermsAndConditions()\" style=\"color: #00ade5;\">Terms and conditions</b></div>\n            </ion-item>\n          </ion-list>\n        </div>\n      </ion-row>\n\n      <ion-list class=\"submit-button\">\n        <div class=\"form-group\">\n          <ion-buttons class=\"button-create-account\">\n            <ion-button [disabled]=\"!sellerAccountForm.valid\" style=\"font-size: 13px;\" class=\"ion-text-center\"\n              (click)=\"seller_account()\">Continue\n            </ion-button>\n          </ion-buttons>\n        </div>\n      </ion-list>\n    </form>\n    <!-- End Of Seller Account -->\n\n\n\n\n    <!-- Business Information -->\n    <form [formGroup]=\"businessInformationForm\" *ngIf=\"business_information_form\">\n      <ion-row class=\"ion-no-padding\">\n        <div style=\"color: var(--ion-color-primary); margin-top: 20px; font-size: 20px; margin-bottom: 15px;\">Business\n          Information <br>\n          <span style=\"font-size: .5em;color: red;\">Enter at least one address</span>\n        </div>\n\n        <div style=\"margin-top: 65px; margin-bottom: 25px;\">\n          <div style=\"font-size: 18px; float: left; left: 17px; color: #696868; position: absolute;\">Address(es)</div>\n         \n        </div>\n\n        <div style=\"background-color: #F4F4F4; width: 100%; margin-right: 17px; margin-top: 10px; padding-bottom: 10px;\"\n          formArrayName=\"address\">\n          <div *ngFor=\"let group of altInput.controls;let i=index\" [formGroupName]=\"i\">\n            <ion-row>\n              <ion-col>\n               <ion-label color=\"success\">Address {{i + 1}}</ion-label> \n              </ion-col>\n              <ion-col>\n                <ion-button (click)=\"removeAddr(i)\" shape=\"round\" fill=\"clear\">Remove</ion-button>\n              </ion-col>\n            </ion-row>\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-list class=\"ion-no-padding\">\n                <ion-item style=\"padding: 5px;\">\n                  <input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" (click)=\"checkIfPrimaryAddressExists(i)\"\n                    name=\"Primary\" formControlName=\"Primary\" type=\"checkbox\"\n                    />&nbsp;&nbsp;\n                    <ion-label color=\"danger\">This is a Primary Address.</ion-label>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-list class=\"ion-no-padding\">\n                <ion-item class=\"ion-no-padding\">\n                  <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                    name=\"address1\" formControlName=\"address1\" type=\"text\" placeholder=\"Address 1 *\"></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-list class=\"ion-no-padding\">\n                <ion-item class=\"ion-no-padding\">\n                  <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                    name=\"postalCode\" formControlName=\"postalCode\" type=\"text\" placeholder=\"Postal code\"></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-list class=\"ion-no-padding\">\n                <ion-item class=\"ion-no-padding\">\n                  <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                    name=\"cityOrTown\" formControlName=\"cityOrTown\" type=\"text\" placeholder=\"City/Town *\"></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-list class=\"ion-no-padding\">\n                <ion-item class=\"ion-no-padding\">\n                  <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                    name=\"country\" formControlName=\"country\" type=\"text\" placeholder=\"Country *\"></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n          </div>\n        </div>\n        <div\n        style=\"font-size: 15px; float: right; right: 17px; background-color: var(--ion-color-primary); color: white; padding-top: 5px; padding-bottom: 5px; padding-right: 15px; padding-left: 15px; border-radius: 15px;\" (click)=\"addNewAddr()\">\n        Add\n      </div>\n\n\n        <ion-col size=\"12\" class=\"ion-no-padding\" style=\"margin-top: 10px;\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\" style=\"border-bottom: 1px solid #fff; margin-right: 15px; margin-top: -2px;\">\n              <ion-label style=\"color: #696868;\">Type of Business *</ion-label>\n              <ion-select name=\"type\" formControlName=\"type\"\n                style=\"border: 1px solid var(--ion-color-primary); border-radius: 15px; padding-top: 5px; padding-bottom: 0px; padding-left: 10px; padding-right: 10px; font-size: 13px; color: var(--ion-color-primary); float: right; right: 1px; position: absolute;\"\n                class=\"ion-no-padding\" interface=\"popover\" placeholder=\"Select type\">\n                <ion-select-option value=\"Shops\">Shop</ion-select-option>\n                <ion-select-option value=\"food\">Restaurant</ion-select-option>\n              </ion-select>\n              <ion-label *ngIf=\"!typeNull()\"color=\"danger\" style=\"font-size: .7em;float: right;\" >Select a type</ion-label>\n            </ion-item>\n            <ion-item >\n              \n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                name=\"kraPin\" formControlName=\"kraPin\" type=\"text\" placeholder=\"KRA PIN *\"></ion-input>\n            </ion-item>\n            <ion-label *ngIf=\"!kraNumber()\"color=\"danger\" style=\"font-size: .7em;\" >Required Field</ion-label>\n          </ion-list>\n        </ion-col>\n\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                name=\"businessPermitNumber\" formControlName=\"businessPermitNumber\" type=\"number\"\n                placeholder=\"Business Permit Number\"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                name=\"Open\" formControlName=\"Open\" type=\"text\" placeholder=\"Open Time (Am/Pm) *\"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                name=\"Close\" formControlName=\"Close\" type=\"text\" placeholder=\"Close Time (Am/Pm) *\"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                name=\"Website\" formControlName=\"Website\" type=\"text\" placeholder=\"Website / Social Media link *\">\n              </ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\"\n              style=\"border-bottom: 1px solid var(--ion-color-primary); border-radius: 0px; margin-right: 17px;\">\n              <ion-textarea name=\"description\" formControlName=\"description\" rows=\"4\" style=\"font-size: 13px;\"\n                placeholder=\"Shop Description *\"></ion-textarea>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <div style=\"color: #696868; font-size: 18px; margin-top: 30px; margin-bottom: 20px;\">Delivery details</div>\n\n        <div style=\"background-color: #F4F4F4; width: 100%; margin-right: 17px; padding: 10px;\">\n          <ion-list class=\"ion-no-padding\" style=\"margin-bottom: -20px;\">\n            <ion-item text-center class=\"ion-no-padding\">\n              <input type=\"checkbox\" name=\"sameDayDelivery\" formControlName=\"sameDayDelivery\" /><b\n                style=\"margin-left: 25px; font-weight: normal; font-size: 12px; color: #696868;\">Same Day delivery</b>\n            </ion-item>\n          </ion-list>\n\n          <ion-list class=\"ion-no-padding\" style=\"margin-bottom: -20px;\">\n            <ion-item text-center class=\"ion-no-padding\">\n              <input type=\"checkbox\" name=\"nextDayDelivery\" formControlName=\"nextDayDelivery\" /><b\n                style=\"margin-left: 25px; font-weight: normal; font-size: 12px; color: #696868;\">Next Day delivery</b>\n            </ion-item>\n          </ion-list>\n\n          <ion-list class=\"i-agree\" class=\"ion-no-padding\">\n            <ion-item text-center class=\"ion-no-padding\">\n              <div style=\"width: 27px; margin-right: 12px;\">\n                <select formControlName=\"daysDelivery\" name=\"daysDelivery\" >\n                  <option *ngFor=\"let item of [0,3,4,5]\">{{item}}</option>\n                </select>\n                <!-- <ion-input clearInput\n                  style=\"border: 1px solid var(--ion-color-primary); height: 25px; background-color: white; color: var(--ion-color-primary); font-size: 12px;\"\n                   type=\"number\"></ion-input> -->\n              </div><b style=\"font-weight: normal; font-size: 12px; color: #696868;\"> Days delivery</b>\n            </ion-item>\n          </ion-list>\n        </div>\n      </ion-row>\n\n      <ion-list class=\"submit-button\">\n        <div class=\"form-group\">\n          <ion-buttons class=\"button-create-account\">\n            <ion-button [disabled]=\"!businessInformationForm.valid\"  style=\"font-size: 13px;\" class=\"ion-text-center\"\n              (click)=\"business_information()\">Continue\n            </ion-button>\n          </ion-buttons>\n        </div>\n      </ion-list>\n    </form>\n    <!-- End Of Business Information -->\n\n\n\n    <!-- Payment Details  -->\n    <form [formGroup]=\"paymentDetailsForm\" *ngIf=\"payment_details_form\">\n      <ion-row class=\"ion-no-padding\">\n        <div style=\"color: var(--ion-color-primary); margin-top: 20px; font-size: 20px; margin-bottom: 15px;width: 100%;\">Payment\n          Details\n          <ion-buttons style=\"float: right;font-size: .6em;background-color: #00ade5;padding: 5px;border-radius: 10px;margin-right: 10px;\">  \n            <ion-label color=\"light\" (click)=\"skipPaymentDetails()\">Submit Later</ion-label>\n          </ion-buttons>\n        </div>\n\n        <!-- <div style=\"margin-top: 65px; margin-bottom: 25px;\">\n          <div style=\"font-size: 18px; float: left; left: 17px; color: #696868; position: absolute;\">Bank Account</div>\n          <div\n            style=\"font-size: 15px; float: right; right: 17px; position: absolute; background-color: var(--ion-color-primary); color: white; padding-top: 5px; padding-bottom: 5px; padding-right: 15px; padding-left: 15px; border-radius: 15px;\">\n            Add\n          </div>\n        </div> -->\n\n        <div\n          style=\"background-color: #F4F4F4; width: 100%; margin-right: 17px; margin-top: 10px; padding-bottom: 10px;\">\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                  name=\"bankAccountName\" formControlName=\"bankAccountName\" type=\"text\" placeholder=\"Account Name \">\n                </ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                  name=\"bankAccountNumber\" formControlName=\"bankAccountNumber\" type=\"text\" placeholder=\"Account Number\">\n                </ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary);font-size: 13px;\" clearInput\n                  name=\"bankName\" formControlName=\"bankName\" type=\"text\" placeholder=\"Bank\"></ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                  name=\"bankCode\" formControlName=\"bankCode\" type=\"text\" placeholder=\"Bank Code\"></ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                  name=\"bankBranch\" formControlName=\"bankBranch\" type=\"text\" placeholder=\"Branch\"></ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </div>\n\n\n        <div style=\"margin-top: 25px; margin-bottom: 15px;\">\n          <div style=\"font-size: 18px; float: left; left: 17px; color: #696868; position: absolute;\">Mpesa Account</div>\n        </div>\n\n        <div\n          style=\"background-color: #F4F4F4; width: 100%; margin-right: 17px; margin-top: 10px; padding-bottom: 10px;\">\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                  name=\"mpesaRegisteredName\" formControlName=\"mpesaRegisteredName\" type=\"text\"\n                  placeholder=\"Mpesa Registered Name *\"></ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                  name=\"mpesaNumber\" formControlName=\"mpesaNumber\" type=\"text\" placeholder=\"Mpesa Number *\"></ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </div>\n\n\n        <div style=\"margin-top: 25px; margin-bottom: 15px;\">\n          <div style=\"font-size: 18px; float: left; left: 17px; color: #696868; position: absolute;\">Mpesa Till number\n          </div>\n        </div>\n\n        <div\n          style=\"background-color: #F4F4F4; width: 100%; margin-right: 17px; margin-top: 10px; padding-bottom: 10px;\">\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                  name=\"mpesaTillRegisteredName\" formControlName=\"mpesaTillRegisteredName\" type=\"text\"\n                  placeholder=\"Mpesa Registered Name *\"></ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                  name=\"mpesaTillNumber\" formControlName=\"mpesaTillNumber\" type=\"text\" placeholder=\"Till number\">\n                </ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </div>\n\n\n        <div style=\"margin-top: 25px; margin-bottom: 15px;\">\n          <div style=\"font-size: 18px; float: left; left: 17px; color: #696868; position: absolute;\">Mpesa Paybill\n            number</div>\n        </div>\n\n        <div\n          style=\"background-color: #F4F4F4; width: 100%; margin-right: 17px; margin-top: 10px; padding-bottom: 10px;\">\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                  name=\"mpesaPaybillRegisteredName\" formControlName=\"mpesaPaybillRegisteredName\" type=\"text\"\n                  placeholder=\"Mpesa Registered Name *\"></ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                  name=\"mpesaPaybillNumber\" formControlName=\"mpesaPaybillNumber\" type=\"text\" placeholder=\"Paybill\">\n                </ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </div>\n\n      </ion-row>\n      <ion-list class=\"submit-button\">\n        <div class=\"form-group\">\n          <ion-buttons class=\"button-create-account\">\n            <ion-button [disabled]=\"!paymentDetailsForm.valid\" style=\"font-size: 13px;\" class=\"ion-text-center\"\n              (click)=\"payment_details()\">Continue\n            </ion-button>\n          </ion-buttons>\n        </div>\n      </ion-list>\n    </form>\n    <!-- End of Payment Details -->\n\n\n    <!-- Know your customer -->\n    <form [formGroup]=\"knowYourCustomerForm\" *ngIf=\"know_your_customer_form\">\n      <ion-row class=\"ion-no-padding\">\n        <div style=\"color: var(--ion-color-primary); margin-top: 20px; font-size: 18px; margin-bottom: 15px;\">Know Your\n          Customer (KYC) Information </div>\n\n\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                name=\"nationalIdOrPassportNumber\" formControlName=\"nationalIdOrPassportNumber\" type=\"text\"\n                placeholder=\"National ID/ Passport Number\"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <div style=\"margin-top: 20px; margin-right: 17px; width: 100%;\">\n          <div style=\"font-size: 13px; margin-bottom: 7px; color: #696868;\">Upload Image of National ID / Passport\n            Number</div>\n          <!-- <div style=\"width: 100%; background-color: #F4F4F4; height: 100px;\">\n                      <div style=\"font-size: 13px; text-align: center; padding-top: 45px; color: #696868;\">Upload Front Image</div>\n                  </div> -->\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\"\n              style=\"width: 100%; background-color: #F4F4F4; height: 100px; padding-left: 30px; padding-top: 25px;\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-col *ngIf=\"imgURLFront !== null\">\n                  <img  src=\"{{imgURLFront}}\" width=\"150px\" height=\"100px\">\n                  <ion-icon name=\"close\" color=\"danger\" (click)=\"imgURLFront = null\" style=\"float: right;\"></ion-icon>\n                </ion-col>\n                <!-- <ion-input style=\"border-bottom: 1px solid #F4F4F4; font-size: 13px; color: #696868;\" clearInput\n                  name=\"frontImage\" formControlName=\"frontImage\" type=\"file\" placeholder=\"National ID/ Passport Number\">\n                </ion-input> -->\n                <ion-col *ngIf=\"imgURLFront === null\">\n                  <ion-icon name=\"cloud-upload-outline\" color=\"dark\"></ion-icon> <br>\n                  <ion-label color=\"primary\"  (click)=\"getImageGallery('front')\">Click to Upload front image of ID / Passport</ion-label>\n                </ion-col>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </div>\n\n\n        <div style=\"margin-top: 30px; margin-right: 17px; width: 100%;\">\n          <!-- <div style=\"width: 100%; background-color: #F4F4F4; height: 100px;\">\n                      <div style=\"font-size: 13px; text-align: center; padding-top: 45px; color: #696868;\">Upload Back Image</div>\n                  </div> -->\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\"\n              style=\"width: 100%; background-color: #F4F4F4; height: 100px; padding-left: 30px; padding-top: 25px;\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-col *ngIf=\"imgURLBack !== null\">\n                  <img  src=\"{{imgURLBack}}\" width=\"150px\" height=\"100px\">\n                  <ion-icon name=\"close\" color=\"danger\" (click)=\"imgURLBack = null\" style=\"float: right;\"></ion-icon>\n                </ion-col>\n                <!-- <ion-input style=\"border-bottom: 1px solid #F4F4F4; font-size: 13px; color: #696868;\" clearInput\n                  name=\"frontImage\" formControlName=\"frontImage\" type=\"file\" placeholder=\"National ID/ Passport Number\">\n                </ion-input> -->\n                <ion-col *ngIf=\"imgURLBack === null\">\n                  <ion-icon name=\"cloud-upload-outline\" color=\"dark\"></ion-icon> <br>\n                  <ion-label color=\"primary\"  (click)=\"getImageGallery('back')\">Click to Upload back image of ID / Passport</ion-label>\n                </ion-col>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </div>\n\n        <div style=\"width: 100%; margin-right: 17px;\">\n          <div style=\"font-size: 13px; color: var(--ion-color-primary); text-align: center; margin-top: 25px;\">KYC\n            APPROVAL WILL TAKE 24 HOURS</div>\n        </div>\n      </ion-row>\n\n      <ion-list class=\"submit-button\">\n        <div class=\"form-group\">\n          <ion-buttons class=\"button-create-account\">\n            <ion-button style=\"font-size: 13px;\" class=\"ion-text-center\"  [disabled]=\"imgURLBack === null || imgURLFront === null\"\n              (click)=\"logoANDcover()\">Submit\n            </ion-button>\n          </ion-buttons><br>\n          <ion-buttons class=\"button-create-account\">\n            <ion-button style=\"font-size: 13px;\" class=\"ion-text-center\" \n              (click)=\"logoANDcover()\">Submit KYC later\n            </ion-button>\n          </ion-buttons>\n        </div>\n      </ion-list>\n    </form>\n    <!-- End oF Know your customer -->\n\n    <!-- LOGO AND COVER IMAGE -->\n    <div *ngIf=\"logo_cover\">\n      <ion-label color=\"primary\">You are almost done </ion-label>\n      <ion-item>\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\"\n            style=\"width: 100%; background-color: #F4F4F4; height: 100px; padding-left: 30px; padding-top: 25px;\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-col *ngIf=\"coverImg !== null\">\n                <img  src=\"{{coverImg}}\" width=\"150px\" height=\"100px\">\n                <ion-icon name=\"close\" color=\"danger\" (click)=\"coverImg = null\" style=\"float: right;\"></ion-icon>\n              </ion-col>\n              <ion-col *ngIf=\"coverImg === null\">\n                <ion-icon name=\"cloud-upload-outline\" color=\"dark\"></ion-icon> <br>\n                <ion-label color=\"primary\"  (click)=\"getImageGallery('cover')\">Click to Upload a cover image</ion-label>\n              </ion-col>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-item><br>\n     <ion-item>\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-list class=\"ion-no-padding\"\n          style=\"width: 100%; background-color: #F4F4F4; height: 100px; padding-left: 30px; padding-top: 25px;\">\n          <ion-item class=\"ion-no-padding\">\n            <ion-col *ngIf=\"logoImg !== null\">\n              <img  src=\"{{logoImg}}\" width=\"150px\" height=\"100px\">\n              <ion-icon name=\"close\" color=\"danger\" (click)=\"logoImg = null\" style=\"float: right;\"></ion-icon>\n            </ion-col>\n            <ion-col *ngIf=\"logoImg === null\">\n              <ion-icon name=\"cloud-upload-outline\" color=\"dark\"></ion-icon> <br>\n              <ion-label color=\"primary\"  (click)=\"getImageGallery('logo')\">Click to Upload a logo image</ion-label>\n            </ion-col>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n     </ion-item>\n     \n      <ion-list class=\"submit-button\">\n        <div class=\"form-group\">\n          <ion-buttons class=\"button-create-account\">\n            <ion-button style=\"font-size: 13px;\" class=\"ion-text-center\"  [disabled]=\"coverImg === null || logoImg === null\"\n              (click)=\"submit()\">Submit\n            </ion-button>\n          </ion-buttons>\n        </div>\n      </ion-list>\n    </div>\n  </div>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");







var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-family: Mermaid;\n  color: #fff;\n  font-size: 25px;\n}\n\n.passwordIcon {\n  font-size: 2rem !important;\n  position: relative !important;\n  top: 22px !important;\n  margin: 0 auto !important;\n}\n\nion-item {\n  border-radius: 10px;\n  padding: auto;\n}\n\nion-list {\n  background: transparent;\n  border: none;\n}\n\na {\n  color: var(--ion-color-light);\n  text-decoration: none;\n  font-weight: bold;\n}\n\n.third-content {\n  margin-left: 17px;\n  margin-right: 0px;\n  padding-top: 45px;\n}\n\n.third-content ion-list {\n  background: transparent;\n}\n\n.third-content ion-list ion-item {\n  --border-color: transparent!important;\n  --highlight-height: 0;\n  --background: none;\n}\n\n.third-content ion-list ion-item ion-input {\n  border-bottom: 1px solid #A9A9A9;\n}\n\n.third-content .button-create-account {\n  color: white;\n  background-color: #00ade5;\n  width: 100%;\n  margin-top: 20px;\n  border-radius: 25px;\n}\n\n.third-content ion-button {\n  margin-left: auto;\n  margin-right: auto;\n  height: 47px;\n}\n\n.third-content .submit-button {\n  margin-right: 15px;\n}\n\n.third-content .submit-button .have-account {\n  color: #696868;\n  margin-top: -9px;\n}\n\n.third-content .submit-button .have-account b {\n  text-align: center;\n  color: #00ade5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0tXSUsvQW5kL0t3aWtfTWVyY2hhbnQvc3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ0NKOztBRENFO0VBQ0csbUJBQUE7RUFDQSxhQUFBO0FDRUw7O0FEQUM7RUFDSSx1QkFBQTtFQUNBLFlBQUE7QUNHTDs7QURBQztFQUNHLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0dKOztBRGNBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDWEo7O0FEWUk7RUFDSSx1QkFBQTtBQ1ZSOztBRFdRO0VBQ0kscUNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDVFo7O0FEVVk7RUFDSSxnQ0FBQTtBQ1JoQjs7QURZSTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDVlI7O0FEWUk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1ZSOztBRFlJO0VBQ0ksa0JBQUE7QUNWUjs7QURXUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ1RaOztBRFVZO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FDUmhCIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBNZXJtYWlkO1xuICAgIGNvbG9yOiNmZmY7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ucGFzc3dvcmRJY29ue1xuICAgIGZvbnQtc2l6ZToycmVtICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAyMnB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiB9XG4gIGlvbi1pdGVte1xuICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDtcbiAgICAgcGFkZGluZzogYXV0bztcbiB9XG4gaW9uLWxpc3R7XG4gICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICBib3JkZXI6IG5vbmU7XG4gICAgIFxuIH1cbiBhe1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIC8vIFRISVJEIENPTlRFTlRcbi50aGlyZC1jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogMTdweDsgXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7IFxuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xuICAgIGlvbi1saXN0e1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcbiAgICAgICAgICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNBOUE5QTk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJ1dHRvbi1jcmVhdGUtYWNjb3VudCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWRlNTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7IFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIH1cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgaGVpZ2h0OiA0N3B4O1xuICAgIH1cbiAgICAuc3VibWl0LWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgLmhhdmUtYWNjb3VudCB7XG4gICAgICAgICAgICBjb2xvcjogIzY5Njg2ODsgXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtOXB4O1xuICAgICAgICAgICAgYiB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBhZGU1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBNZXJtYWlkO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ucGFzc3dvcmRJY29uIHtcbiAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICB0b3A6IDIycHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiBhdXRvO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmEge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRoaXJkLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIHBhZGRpbmctdG9wOiA0NXB4O1xufVxuLnRoaXJkLWNvbnRlbnQgaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi50aGlyZC1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcbiAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59XG4udGhpcmQtY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24taW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0E5QTlBOTtcbn1cbi50aGlyZC1jb250ZW50IC5idXR0b24tY3JlYXRlLWFjY291bnQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFkZTU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLnRoaXJkLWNvbnRlbnQgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGhlaWdodDogNDdweDtcbn1cbi50aGlyZC1jb250ZW50IC5zdWJtaXQtYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLnRoaXJkLWNvbnRlbnQgLnN1Ym1pdC1idXR0b24gLmhhdmUtYWNjb3VudCB7XG4gIGNvbG9yOiAjNjk2ODY4O1xuICBtYXJnaW4tdG9wOiAtOXB4O1xufVxuLnRoaXJkLWNvbnRlbnQgLnN1Ym1pdC1idXR0b24gLmhhdmUtYWNjb3VudCBiIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwYWRlNTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _upload_upload_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../upload/upload.service */ "./src/app/upload/upload.service.ts");















var SignupPage = /** @class */ (function () {
    function SignupPage(db, navigation, loadingController, toastController, menuCtrl, service, location, formBuilder, ref, alertController, pdf, camera, st, webview, upload) {
        this.db = db;
        this.navigation = navigation;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.menuCtrl = menuCtrl;
        this.service = service;
        this.location = location;
        this.formBuilder = formBuilder;
        this.ref = ref;
        this.alertController = alertController;
        this.pdf = pdf;
        this.camera = camera;
        this.st = st;
        this.webview = webview;
        this.upload = upload;
        // variables
        this.shouldHeight = document.body.clientHeight + 'px';
        this.verify = false;
        this.code = false;
        this.seller_account_form = true;
        this.business_information_form = false;
        this.payment_details_form = false;
        this.know_your_customer_form = false;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.confirmPasswordType = 'password';
        this.confirmPasswordIcon = 'eye-off';
        // variables holders for base64 Image URL selected
        this.imgURLBack = null;
        this.imgURLFront = null;
        this.coverImg = null;
        this.logoImg = null;
        //  Boolean variables for form validation
        this.submitSeller = false;
        this.logo_cover = false;
        this.provider = new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider();
        this.service.hiddenTabs = true;
        // seller AccountForm
        this.sellerAccountForm = this.formBuilder.group({
            owner: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            Contacts: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            shop: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            termsAndConditions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]
        });
        // business Information Form
        this.businessInformationForm = this.formBuilder.group({
            address: this.formBuilder.array([this.newAddrGroup()]),
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            kraPin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(/^[a-zA-Z0-9_-]*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            businessPermitNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('[0-9 ]*')])],
            Open: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            Close: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            Website: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            sameDayDelivery: [''],
            nextDayDelivery: [''],
            daysDelivery: [''],
        });
        // payment Details Form
        this.paymentDetailsForm = this.formBuilder.group({
            bankAccountName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(100)])],
            bankAccountNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('[0-9 ]*')])],
            bankName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(100)])],
            bankCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('[0-9 ]*')])],
            bankBranch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(100)])],
            mpesaRegisteredName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            mpesaNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('[0-9 ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            mpesaTillRegisteredName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            mpesaTillNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('[0-9 ]*')])],
            mpesaPaybillRegisteredName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            mpesaPaybillNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('[0-9 ]*')])]
        });
        // know Your CustomerForm
        this.knowYourCustomerForm = this.formBuilder.group({
            nationalIdOrPassportNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            frontImage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            backImage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]
        });
    }
    SignupPage.prototype.ngOnInit = function () {
        this.menuCtrl.enable(false);
    };
    Object.defineProperty(SignupPage.prototype, "GetsellerAccountForm", {
        get: function () {
            return this.sellerAccountForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    SignupPage.prototype.newAddrGroup = function () {
        return this.formBuilder.group({
            Primary: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            address1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            postalCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('[0-9 ]*')])],
            cityOrTown: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
        });
    };
    Object.defineProperty(SignupPage.prototype, "altInput", {
        get: function () {
            return this.businessInformationForm.get('address');
        },
        enumerable: true,
        configurable: true
    });
    SignupPage.prototype.addNewAddr = function () {
        this.altInput.push(this.newAddrGroup());
    };
    SignupPage.prototype.removeAddr = function (index) {
        this.altInput.removeAt(index);
    };
    SignupPage.prototype.viewTermsAndConditions = function () {
        var options = {
            title: 'Terms And Conditions'
        };
        this.pdf.viewDocument('../../assets/pdf/terms_and_conditions.png', 'application/pdf', options);
    };
    SignupPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    SignupPage.prototype.hideShowConfirmPassword = function () {
        this.confirmPasswordType = this.confirmPasswordType === 'text' ? 'password' : 'text';
        this.confirmPasswordIcon = this.confirmPasswordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    SignupPage.prototype.checkIfPrimaryAddressExists = function (id) {
        var _this = this;
        if (this.businessInformationForm.value.address.length === 1) {
            return;
        }
        this.businessInformationForm.value.address.forEach(function (item) {
            if (item.Primary === true) {
                var index = _this.businessInformationForm.value.address.indexOf(item);
                _this.businessInformationForm.value.address[index].Primary === false;
                _this.presentAlert("You can not have two  Primary addresses.");
            }
        });
    };
    // SELLER ACCOUNT
    SignupPage.prototype.seller_account = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.sellerAccountForm.value.password !== this.sellerAccountForm.value.confirmPassword) {
                    this.presentAlert("Passwords do not match");
                }
                else {
                    this.submitSeller = true;
                    this.seller_account_form = false;
                    this.business_information_form = true;
                    this.payment_details_form = false;
                    this.know_your_customer_form = false;
                }
                return [2 /*return*/];
            });
        });
    };
    // BUSINESS INFORMATION
    SignupPage.prototype.business_information = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log(this.businessInformationForm.value);
                if (this.businessInformationForm.value.sameDayDelivery && this.businessInformationForm.value.nextDayDelivery && this.businessInformationForm.value.daysDelivery) {
                    console.log("Oops");
                    this.presentAlert("Please select one of the options: Same day, Next day and Days delivery");
                }
                else if (!this.businessInformationForm.value.sameDayDelivery && !this.businessInformationForm.value.nextDayDelivery && !this.businessInformationForm.value.daysDelivery) {
                    console.log("Oops");
                    this.presentAlert("Please select one of the options: Same day, Next day and Days delivery");
                }
                else {
                    this.seller_account_form = false;
                    this.business_information_form = false;
                    this.payment_details_form = true;
                    this.know_your_customer_form = false;
                }
                return [2 /*return*/];
            });
        });
    };
    // upload logo and cover
    SignupPage.prototype.logoANDcover = function () {
        this.seller_account_form = false;
        this.business_information_form = false;
        this.payment_details_form = false;
        this.know_your_customer_form = false;
        this.logo_cover = true;
    };
    SignupPage.prototype.backToKyc = function () {
        this.seller_account_form = false;
        this.business_information_form = false;
        this.payment_details_form = false;
        this.know_your_customer_form = true;
        this.logo_cover = false;
    };
    SignupPage.prototype.skipPaymentDetails = function () {
        this.seller_account_form = false;
        this.business_information_form = false;
        this.payment_details_form = false;
        this.know_your_customer_form = true;
        this.logo_cover = false;
    };
    // PAYMENT DETAILS
    SignupPage.prototype.payment_details = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log("==============================");
                console.log(this.paymentDetailsForm.value);
                console.log("==============================");
                this.seller_account_form = false;
                this.business_information_form = false;
                this.payment_details_form = false;
                this.know_your_customer_form = true;
                this.logo_cover = false;
                return [2 /*return*/];
            });
        });
    };
    SignupPage.prototype.goBackToLogin = function () {
        this.service.hiddenTabs = true;
        this.location.back();
    };
    SignupPage.prototype.goBackToSellerAccount = function () {
        this.seller_account_form = true;
        this.business_information_form = false;
        this.payment_details_form = false;
        this.know_your_customer_form = false;
        this.logo_cover = false;
    };
    SignupPage.prototype.goBackToBusinessInformation = function () {
        this.seller_account_form = false;
        this.business_information_form = true;
        this.payment_details_form = false;
        this.know_your_customer_form = false;
        this.logo_cover = false;
    };
    SignupPage.prototype.goBackToPaymentDetails = function () {
        this.seller_account_form = false;
        this.business_information_form = false;
        this.payment_details_form = true;
        this.know_your_customer_form = false;
        this.logo_cover = false;
    };
    SignupPage.prototype.presentAlert = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Alert !!',
                            //   subHeader: 'Subtitle',
                            message: '' + message + '',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Loader
    SignupPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: "Wait ..."
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    // Toaster
    SignupPage.prototype.presentToast = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: data,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignupPage.prototype.getImageGallery = function (type) {
        var _this = this;
        this.camera.getPicture({
            // sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 50,
            targetHeight: 600,
            targetWidth: 600,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        }).then(function (res) {
            switch (type) {
                case 'front':
                    _this.imgURLFront = 'data:image/jpeg;base64,' + res;
                    _this.knowYourCustomerForm.value.frontImage = _this.uploadTostorage(_this.imgURLFront);
                    break;
                case 'back':
                    _this.imgURLBack = 'data:image/jpeg;base64,' + res;
                    _this.knowYourCustomerForm.value.backImage = _this.uploadTostorage(_this.imgURLBack);
                    break;
                case 'cover':
                    _this.coverImg = 'data:image/jpeg;base64,' + res;
                    _this.coverImg = _this.uploadTostorage(_this.coverImg);
                    break;
                case 'logo':
                    _this.logoImg = 'data:image/jpeg;base64,' + res;
                    _this.logoImg = _this.uploadTostorage(_this.logoImg);
                    break;
                default:
                    break;
            }
        });
    };
    SignupPage.prototype.typeNull = function () {
        if (this.businessInformationForm.value.type.length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    SignupPage.prototype.kraNumber = function () {
        if (this.businessInformationForm.value.kraPin.length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    SignupPage.prototype.submit = function () {
        var _this = this;
        this.presentLoading();
        var user = {};
        if (this.imgURLFront === null || this.imgURLBack === null) {
            user = {
                sellerInfo: this.sellerAccountForm.value,
                businessInfo: this.businessInformationForm.value,
                paymentInfo: this.paymentDetailsForm.value,
                kyc: this.knowYourCustomerForm.value,
                Date: new Date(),
                cover: this.coverImg.__zone_symbol__value,
                logo: this.logoImg.__zone_symbol__value
            };
        }
        else {
            console.table('back', this.knowYourCustomerForm.value.backImage.__zone_symbol__value);
            user = {
                sellerInfo: this.sellerAccountForm.value,
                businessInfo: this.businessInformationForm.value,
                paymentInfo: this.paymentDetailsForm.value,
                kyc: {
                    backImage: this.knowYourCustomerForm.value.backImage.__zone_symbol__value,
                    frontImage: this.knowYourCustomerForm.value.frontImage.__zone_symbol__value,
                    nationalIdOrPassportNumber: this.knowYourCustomerForm.value.nationalIdOrPassportNumber
                },
                Date: new Date(),
                cover: this.coverImg.__zone_symbol__value,
                logo: this.logoImg.__zone_symbol__value
            };
            console.table(user);
        }
        // CREATE USER BY EMAIL & PASSWORD THEN CREATE PROFILE USER
        this.service.register(this.sellerAccountForm.value.Email, this.sellerAccountForm.value.password).then(function (res) {
            localStorage.setItem('user', res.user.uid);
            // create profile
            _this.service.profile().doc(res.user.uid).set(user).then(function () {
                // go to dashboard
                _this.loading.dismiss();
                _this.ref.getUserDet(res.user.uid);
                _this.navigation.navigate(['tabs/dashboard']);
            }).catch(function (error) {
                console.log(error);
                _this.service.deleteUser().then(function () {
                    // User deleted.
                    console.log("a/c deleted");
                }).catch(function (error) {
                    // An error happened.
                    console.log(error);
                });
                _this.loading.dismiss();
                _this.presentToast('Something went wrong profile not created');
            });
        }).catch(function (error) {
            console.log(error);
            _this.loading.dismiss();
            _this.presentToast("your network is unstable");
        });
    };
    SignupPage.prototype.uploadTostorage = function (image) {
        console.log('shop -->', this.sellerAccountForm.value.shop);
        var date = new Date().getTime();
        var pictures = this.st.storage.ref(this.sellerAccountForm.value.shop + '/' + date);
        return pictures.putString(image, 'data_url').then(function (res) {
            return pictures.getDownloadURL();
        }).catch(function (error) {
            console.log('error', error);
        });
    };
    SignupPage.ctorParameters = function () { return [
        { type: _database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__["DocumentViewer"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__["AngularFireStorage"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__["WebView"] },
        { type: _upload_upload_service__WEBPACK_IMPORTED_MODULE_14__["UploadService"] }
    ]; };
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _services_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__["DocumentViewer"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__["AngularFireStorage"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__["WebView"],
            _upload_upload_service__WEBPACK_IMPORTED_MODULE_14__["UploadService"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es5.js.map