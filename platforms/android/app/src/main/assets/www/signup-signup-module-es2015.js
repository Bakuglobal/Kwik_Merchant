(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar color=\"primary\">\n  <ion-buttons slot=\"start\">\n    <ion-button *ngIf=\"seller_account_form\" (click)=\"goBackToLogin()\">\n      <ion-icon style=\"width: 20px; height: 20px;\" size=\"small\" color=\"light\" name=\"arrow-round-back\"></ion-icon>\n    </ion-button>\n\n    <ion-button *ngIf=\"business_information_form\" (click)=\"goBackToSellerAccount()\">\n      <ion-icon style=\"width: 20px; height: 20px;\" size=\"small\" color=\"light\" name=\"arrow-round-back\"></ion-icon>\n    </ion-button>\n\n    <ion-button *ngIf=\"payment_details_form\" (click)=\"goBackToBusinessInformation()\">\n      <ion-icon style=\"width: 20px; height: 20px;\" size=\"small\" color=\"light\" name=\"arrow-round-back\"></ion-icon>\n    </ion-button>\n\n    <ion-button *ngIf=\"know_your_customer_form\" (click)=\"goBackToPaymentDetails()\">\n      <ion-icon style=\"width: 20px; height: 20px;\" size=\"small\" color=\"light\" name=\"arrow-round-back\"></ion-icon>\n    </ion-button>\n\n  </ion-buttons>\n  <ion-title text-center style=\"margin-right: 15px;\">SIGN UP</ion-title>\n</ion-toolbar>\n\n\n\n\n\n<ion-content>\n  <div class=\"third-content\">\n\n    <div style=\"margin-right: 17px; margin-top: -10px;\">\n      <div style=\"font-size: 20px; color: #696868; padding-bottom: 15px;\">Register and start selling.</div>\n      <ion-progress-bar *ngIf=\"seller_account_form\" color=\"primary\" value=\"0.0\"></ion-progress-bar>\n      <ion-progress-bar *ngIf=\"business_information_form\" color=\"primary\" value=\"0.33\"></ion-progress-bar>\n      <ion-progress-bar *ngIf=\"payment_details_form\" color=\"primary\" value=\"0.66\"></ion-progress-bar>\n      <ion-progress-bar *ngIf=\"know_your_customer_form\" color=\"primary\" value=\"1\"></ion-progress-bar>\n    </div>\n\n\n\n\n\n    <!-- Seller Account -->\n    <form [formGroup]=\"sellerAccountForm\" *ngIf=\"seller_account_form\">\n      <ion-row class=\"ion-no-padding\">\n        <div style=\"color: var(--ion-color-primary); margin-top: 20px; font-size: 20px; margin-bottom: 15px;\">Seller\n          Account</div>\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                name=\"owner\" formControlName=\"owner\" type=\"text\" placeholder=\"Full Name*\"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                name=\"Contacts\" formControlName=\"Contacts\" type=\"text\" placeholder=\"Phone Number*\"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                name=\"shop\" formControlName=\"shop\" type=\"text\" placeholder=\"Shop Name *\"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                name=\"Email\" formControlName=\"Email\" type=\"email\" placeholder=\"Email Address *\"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-icon slot=\"end\" [name]=\"passwordIcon\" (click)='hideShowPassword()' size=\"small\"\n                style=\"float: right; right: 17px;\"></ion-icon>\n              <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\"\n                [type]=\"passwordType\" clearOnEdit=\"false\" name=\"password\" formControlName=\"password\"\n                placeholder=\"Password *\">\n              </ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-icon slot=\"end\" [name]=\"confirmPasswordIcon\" (click)='hideShowConfirmPassword()' size=\"small\"\n                style=\"float: right; right: 17px;\"></ion-icon>\n              <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\"\n                [type]=\"confirmPasswordType\" clearOnEdit=\"false\" name=\"confirmPassword\"\n                formControlName=\"confirmPassword\" placeholder=\"Confirm Password *\">\n              </ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <div style=\"margin-right: 17px; width: 100%;\">\n          <ion-list class=\"i-agree\" class=\"ion-no-padding\">\n            <ion-item text-center class=\"ion-no-padding\">\n              <input type=\"checkbox\" name=\"termsAndConditions\" formControlName=\"termsAndConditions\" />\n              <div style=\"margin-left: 10px; font-size: 13px; color: #696868;\">I have read and accepted <b\n                  (click)=\"viewTermsAndConditions()\" style=\"color: #00ade5;\">Terms and conditions</b></div>\n            </ion-item>\n          </ion-list>\n        </div>\n      </ion-row>\n\n      <ion-list class=\"submit-button\">\n        <div class=\"form-group\">\n          <ion-buttons class=\"button-create-account\">\n            <ion-button [disabled]=\"!sellerAccountForm.valid\" style=\"font-size: 13px;\" class=\"ion-text-center\"\n              (click)=\"seller_account()\">Continue\n            </ion-button>\n          </ion-buttons>\n        </div>\n      </ion-list>\n    </form>\n    <!-- End Of Seller Account -->\n\n\n\n\n    <!-- Business Information -->\n    <form [formGroup]=\"businessInformationForm\" *ngIf=\"business_information_form\">\n      <ion-row class=\"ion-no-padding\">\n        <div style=\"color: var(--ion-color-primary); margin-top: 20px; font-size: 20px; margin-bottom: 15px;\">Business\n          Information <br>\n          <span style=\"font-size: .5em;\">Enter atleast one address</span>\n        </div>\n\n        <div style=\"margin-top: 65px; margin-bottom: 25px;\">\n          <div style=\"font-size: 18px; float: left; left: 17px; color: #696868; position: absolute;\">Address(es)</div>\n          <div\n            style=\"font-size: 15px; float: right; right: 17px; position: absolute; background-color: var(--ion-color-primary); color: white; padding-top: 5px; padding-bottom: 5px; padding-right: 15px; padding-left: 15px; border-radius: 15px;\" (click)=\"addNewAddr()\">\n            Add\n          </div>\n        </div>\n\n        <div style=\"background-color: #F4F4F4; width: 100%; margin-right: 17px; margin-top: 10px; padding-bottom: 10px;\"\n          formArrayName=\"address\">\n          <div *ngFor=\"let group of altInput.controls;let i=index\" [formGroupName]=\"i\">\n            <ion-row>\n              <ion-col>\n               <ion-label color=\"success\">Address {{i + 1}}</ion-label> \n              </ion-col>\n              <ion-col>\n                <ion-button (click)=\"removeAddr(i)\" shape=\"round\" fill=\"clear\">Remove</ion-button>\n              </ion-col>\n            </ion-row>\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-list class=\"ion-no-padding\">\n                <ion-item style=\"padding: 5px;\">\n                  <input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" (click)=\"checkIfPrimaryAddressExists(i)\"\n                    name=\"Primary\" formControlName=\"Primary\" type=\"checkbox\"\n                    />&nbsp;&nbsp;\n                    <ion-label color=\"danger\">This is a Primary Address.</ion-label>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-list class=\"ion-no-padding\">\n                <ion-item class=\"ion-no-padding\">\n                  <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                    name=\"address1\" formControlName=\"address1\" type=\"text\" placeholder=\"Address 1 *\"></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-list class=\"ion-no-padding\">\n                <ion-item class=\"ion-no-padding\">\n                  <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                    name=\"postalCode\" formControlName=\"postalCode\" type=\"text\" placeholder=\"Postal code\"></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-list class=\"ion-no-padding\">\n                <ion-item class=\"ion-no-padding\">\n                  <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                    name=\"cityOrTown\" formControlName=\"cityOrTown\" type=\"text\" placeholder=\"City/Town *\"></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-list class=\"ion-no-padding\">\n                <ion-item class=\"ion-no-padding\">\n                  <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                    name=\"country\" formControlName=\"country\" type=\"text\" placeholder=\"Country *\"></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n          </div>\n        </div>\n\n\n        <ion-col size=\"12\" class=\"ion-no-padding\" style=\"margin-top: 10px;\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\" style=\"border-bottom: 1px solid #fff; margin-right: 15px; margin-top: -2px;\">\n              <ion-label style=\"color: #696868;\">Type of Business *</ion-label>\n              <ion-select name=\"type\" formControlName=\"type\"\n                style=\"border: 1px solid var(--ion-color-primary); border-radius: 15px; padding-top: 5px; padding-bottom: 0px; padding-left: 10px; padding-right: 10px; font-size: 13px; color: var(--ion-color-primary); float: right; right: 1px; position: absolute;\"\n                class=\"ion-no-padding\" interface=\"popover\" placeholder=\"Select type\">\n                <ion-select-option value=\"Shops\">Shop</ion-select-option>\n                <ion-select-option value=\"food\">Restaurant</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                name=\"kraPin\" formControlName=\"kraPin\" type=\"text\" placeholder=\"KRA PIN *\"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                name=\"businessPermitNumber\" formControlName=\"businessPermitNumber\" type=\"text\"\n                placeholder=\"Business Permit Number\"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                name=\"Open\" formControlName=\"Open\" type=\"text\" placeholder=\"Open Time (Am/Pm) *\"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                name=\"Close\" formControlName=\"Close\" type=\"text\" placeholder=\"Close Time (Am/Pm) *\"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                name=\"Website\" formControlName=\"Website\" type=\"text\" placeholder=\"Website / Social Media link *\">\n              </ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\"\n              style=\"border-bottom: 1px solid var(--ion-color-primary); border-radius: 0px; margin-right: 17px;\">\n              <ion-textarea name=\"description\" formControlName=\"description\" rows=\"4\" style=\"font-size: 13px;\"\n                placeholder=\"Shop Description *\"></ion-textarea>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <div style=\"color: #696868; font-size: 18px; margin-top: 30px; margin-bottom: 20px;\">Delivery details</div>\n\n        <div style=\"background-color: #F4F4F4; width: 100%; margin-right: 17px; padding: 10px;\">\n          <ion-list class=\"ion-no-padding\" style=\"margin-bottom: -20px;\">\n            <ion-item text-center class=\"ion-no-padding\">\n              <input type=\"checkbox\" name=\"sameDayDelivery\" formControlName=\"sameDayDelivery\" /><b\n                style=\"margin-left: 25px; font-weight: normal; font-size: 12px; color: #696868;\">Same Day delivery</b>\n            </ion-item>\n          </ion-list>\n\n          <ion-list class=\"ion-no-padding\" style=\"margin-bottom: -20px;\">\n            <ion-item text-center class=\"ion-no-padding\">\n              <input type=\"checkbox\" name=\"nextDayDelivery\" formControlName=\"nextDayDelivery\" /><b\n                style=\"margin-left: 25px; font-weight: normal; font-size: 12px; color: #696868;\">Next Day delivery</b>\n            </ion-item>\n          </ion-list>\n\n          <ion-list class=\"i-agree\" class=\"ion-no-padding\">\n            <ion-item text-center class=\"ion-no-padding\">\n              <div style=\"width: 27px; margin-right: 12px;\">\n                <select formControlName=\"daysDelivery\" name=\"daysDelivery\" >\n                  <option *ngFor=\"let item of [0,3,4,5]\">{{item}}</option>\n                </select>\n                <!-- <ion-input clearInput\n                  style=\"border: 1px solid var(--ion-color-primary); height: 25px; background-color: white; color: var(--ion-color-primary); font-size: 12px;\"\n                   type=\"number\"></ion-input> -->\n              </div><b style=\"font-weight: normal; font-size: 12px; color: #696868;\"> Days delivery</b>\n            </ion-item>\n          </ion-list>\n        </div>\n      </ion-row>\n\n      <ion-list class=\"submit-button\">\n        <div class=\"form-group\">\n          <ion-buttons class=\"button-create-account\">\n            <ion-button [disabled]=\"!businessInformationForm.valid\"  style=\"font-size: 13px;\" class=\"ion-text-center\"\n              (click)=\"business_information()\">Continue\n            </ion-button>\n          </ion-buttons>\n        </div>\n      </ion-list>\n    </form>\n    <!-- End Of Business Information -->\n\n\n\n    <!-- Payment Details  -->\n    <form [formGroup]=\"paymentDetailsForm\" *ngIf=\"payment_details_form\">\n      <ion-row class=\"ion-no-padding\">\n        <div style=\"color: var(--ion-color-primary); margin-top: 20px; font-size: 20px; margin-bottom: 15px;width: 100%;\">Payment\n          Details\n          <ion-buttons style=\"float: right;font-size: .6em;background-color: #00ade5;padding: 5px;border-radius: 10px;margin-right: 10px;\">  \n            <ion-label color=\"light\" (click)=\"skipPaymentDetails()\">Submit Later</ion-label>\n          </ion-buttons>\n        </div>\n\n        <!-- <div style=\"margin-top: 65px; margin-bottom: 25px;\">\n          <div style=\"font-size: 18px; float: left; left: 17px; color: #696868; position: absolute;\">Bank Account</div>\n          <div\n            style=\"font-size: 15px; float: right; right: 17px; position: absolute; background-color: var(--ion-color-primary); color: white; padding-top: 5px; padding-bottom: 5px; padding-right: 15px; padding-left: 15px; border-radius: 15px;\">\n            Add\n          </div>\n        </div> -->\n\n        <div\n          style=\"background-color: #F4F4F4; width: 100%; margin-right: 17px; margin-top: 10px; padding-bottom: 10px;\">\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                  name=\"bankAccountName\" formControlName=\"bankAccountName\" type=\"text\" placeholder=\"Account Name \">\n                </ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                  name=\"bankAccountNumber\" formControlName=\"bankAccountNumber\" type=\"text\" placeholder=\"Account Number\">\n                </ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary);font-size: 13px;\" clearInput\n                  name=\"bankName\" formControlName=\"bankName\" type=\"text\" placeholder=\"Bank\"></ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                  name=\"bankCode\" formControlName=\"bankCode\" type=\"text\" placeholder=\"Bank Code\"></ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                  name=\"bankBranch\" formControlName=\"bankBranch\" type=\"text\" placeholder=\"Branch\"></ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </div>\n\n\n        <div style=\"margin-top: 25px; margin-bottom: 15px;\">\n          <div style=\"font-size: 18px; float: left; left: 17px; color: #696868; position: absolute;\">Mpesa Account</div>\n        </div>\n\n        <div\n          style=\"background-color: #F4F4F4; width: 100%; margin-right: 17px; margin-top: 10px; padding-bottom: 10px;\">\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                  name=\"mpesaRegisteredName\" formControlName=\"mpesaRegisteredName\" type=\"text\"\n                  placeholder=\"Mpesa Registered Name *\"></ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                  name=\"mpesaNumber\" formControlName=\"mpesaNumber\" type=\"text\" placeholder=\"Mpesa Number *\"></ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </div>\n\n\n        <div style=\"margin-top: 25px; margin-bottom: 15px;\">\n          <div style=\"font-size: 18px; float: left; left: 17px; color: #696868; position: absolute;\">Mpesa Till number\n          </div>\n        </div>\n\n        <div\n          style=\"background-color: #F4F4F4; width: 100%; margin-right: 17px; margin-top: 10px; padding-bottom: 10px;\">\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                  name=\"mpesaTillRegisteredName\" formControlName=\"mpesaTillRegisteredName\" type=\"text\"\n                  placeholder=\"Mpesa Registered Name *\"></ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                  name=\"mpesaTillNumber\" formControlName=\"mpesaTillNumber\" type=\"text\" placeholder=\"Till number\">\n                </ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </div>\n\n\n        <div style=\"margin-top: 25px; margin-bottom: 15px;\">\n          <div style=\"font-size: 18px; float: left; left: 17px; color: #696868; position: absolute;\">Mpesa Paybill\n            number</div>\n        </div>\n\n        <div\n          style=\"background-color: #F4F4F4; width: 100%; margin-right: 17px; margin-top: 10px; padding-bottom: 10px;\">\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                  name=\"mpesaPaybillRegisteredName\" formControlName=\"mpesaPaybillRegisteredName\" type=\"text\"\n                  placeholder=\"Mpesa Registered Name *\"></ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                  name=\"mpesaPaybillNumber\" formControlName=\"mpesaPaybillNumber\" type=\"text\" placeholder=\"Paybill\">\n                </ion-input>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </div>\n\n      </ion-row>\n      <ion-list class=\"submit-button\">\n        <div class=\"form-group\">\n          <ion-buttons class=\"button-create-account\">\n            <ion-button [disabled]=\"!paymentDetailsForm.valid\" style=\"font-size: 13px;\" class=\"ion-text-center\"\n              (click)=\"payment_details()\">Continue\n            </ion-button>\n          </ion-buttons>\n        </div>\n      </ion-list>\n    </form>\n    <!-- End of Payment Details -->\n\n\n    <!-- Know your customer -->\n    <form [formGroup]=\"knowYourCustomerForm\" *ngIf=\"know_your_customer_form\">\n      <ion-row class=\"ion-no-padding\">\n        <div style=\"color: var(--ion-color-primary); margin-top: 20px; font-size: 18px; margin-bottom: 15px;\">Know Your\n          Customer (KYC) Information </div>\n\n\n        <ion-col size=\"12\" class=\"ion-no-padding\">\n          <ion-list class=\"ion-no-padding\">\n            <ion-item class=\"ion-no-padding\">\n              <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                name=\"nationalIdOrPassportNumber\" formControlName=\"nationalIdOrPassportNumber\" type=\"text\"\n                placeholder=\"National ID/ Passport Number\"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n\n        <div style=\"margin-top: 20px; margin-right: 17px; width: 100%;\">\n          <div style=\"font-size: 13px; margin-bottom: 7px; color: #696868;\">Upload Image of National ID / Passport\n            Number</div>\n          <!-- <div style=\"width: 100%; background-color: #F4F4F4; height: 100px;\">\n                      <div style=\"font-size: 13px; text-align: center; padding-top: 45px; color: #696868;\">Upload Front Image</div>\n                  </div> -->\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\"\n              style=\"width: 100%; background-color: #F4F4F4; height: 100px; padding-left: 30px; padding-top: 25px;\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-col *ngIf=\"imgURLFront !== null\">\n                  <img  src=\"{{imgURLFront}}\" width=\"150px\" height=\"100px\">\n                  <ion-icon name=\"close\" color=\"danger\" (click)=\"imgURLFront = null\" style=\"float: right;\"></ion-icon>\n                </ion-col>\n                <!-- <ion-input style=\"border-bottom: 1px solid #F4F4F4; font-size: 13px; color: #696868;\" clearInput\n                  name=\"frontImage\" formControlName=\"frontImage\" type=\"file\" placeholder=\"National ID/ Passport Number\">\n                </ion-input> -->\n                <ion-col *ngIf=\"imgURLFront === null\">\n                  <ion-icon name=\"cloud-upload-outline\" color=\"dark\"></ion-icon> <br>\n                  <ion-label color=\"primary\"  (click)=\"getImageGallery('front')\">Upload front image of ID / Passport</ion-label>\n                </ion-col>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </div>\n\n\n        <div style=\"margin-top: 30px; margin-right: 17px; width: 100%;\">\n          <!-- <div style=\"width: 100%; background-color: #F4F4F4; height: 100px;\">\n                      <div style=\"font-size: 13px; text-align: center; padding-top: 45px; color: #696868;\">Upload Back Image</div>\n                  </div> -->\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-list class=\"ion-no-padding\"\n              style=\"width: 100%; background-color: #F4F4F4; height: 100px; padding-left: 30px; padding-top: 25px;\">\n              <ion-item class=\"ion-no-padding\">\n                <ion-col *ngIf=\"imgURLBack !== null\">\n                  <img  src=\"{{imgURLBack}}\" width=\"150px\" height=\"100px\">\n                  <ion-icon name=\"close\" color=\"danger\" (click)=\"imgURLBack = null\" style=\"float: right;\"></ion-icon>\n                </ion-col>\n                <!-- <ion-input style=\"border-bottom: 1px solid #F4F4F4; font-size: 13px; color: #696868;\" clearInput\n                  name=\"frontImage\" formControlName=\"frontImage\" type=\"file\" placeholder=\"National ID/ Passport Number\">\n                </ion-input> -->\n                <ion-col *ngIf=\"imgURLBack === null\">\n                  <ion-icon name=\"cloud-upload-outline\" color=\"dark\"></ion-icon> <br>\n                  <ion-label color=\"primary\"  (click)=\"getImageGallery('back')\">Upload back image of ID / Passport</ion-label>\n                </ion-col>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </div>\n\n        <div style=\"width: 100%; margin-right: 17px;\">\n          <div style=\"font-size: 13px; color: var(--ion-color-primary); text-align: center; margin-top: 25px;\">KYC\n            APPROVAL WILL TAKE 24 HOURS</div>\n        </div>\n      </ion-row>\n\n      <ion-list class=\"submit-button\">\n        <div class=\"form-group\">\n          <ion-buttons class=\"button-create-account\">\n            <ion-button style=\"font-size: 13px;\" class=\"ion-text-center\"  [disabled]=\"imgURLBack === null || imgURLFront === null\"\n              (click)=\"submit()\">Submit\n            </ion-button>\n          </ion-buttons><br>\n          <ion-buttons class=\"button-create-account\">\n            <ion-button style=\"font-size: 13px;\" class=\"ion-text-center\" \n              (click)=\"submit()\">Submit KYC later\n            </ion-button>\n          </ion-buttons>\n        </div>\n      </ion-list>\n      <!-- <ion-list class=\"submit-button\">\n        <div class=\"form-group\">\n          \n        </div>\n      </ion-list> -->\n    </form>\n    <!-- End oF Know your customer -->\n  </div>\n\n\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");







const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
let SignupPageModule = class SignupPageModule {
};
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



/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-family: Mermaid;\n  color: #fff;\n  font-size: 25px;\n}\n\n.passwordIcon {\n  font-size: 2rem !important;\n  position: relative !important;\n  top: 22px !important;\n  margin: 0 auto !important;\n}\n\nion-item {\n  border-radius: 10px;\n  padding: auto;\n}\n\nion-list {\n  background: transparent;\n  border: none;\n}\n\na {\n  color: var(--ion-color-light);\n  text-decoration: none;\n  font-weight: bold;\n}\n\n.third-content {\n  margin-left: 17px;\n  margin-right: 0px;\n  padding-top: 45px;\n}\n\n.third-content ion-list {\n  background: transparent;\n}\n\n.third-content ion-list ion-item {\n  --border-color: transparent!important;\n  --highlight-height: 0;\n  --background: none;\n}\n\n.third-content ion-list ion-item ion-input {\n  border-bottom: 1px solid #A9A9A9;\n}\n\n.third-content .button-create-account {\n  color: white;\n  background-color: #00ade5;\n  width: 100%;\n  margin-top: 20px;\n  border-radius: 25px;\n}\n\n.third-content ion-button {\n  margin-left: auto;\n  margin-right: auto;\n  height: 47px;\n}\n\n.third-content .submit-button {\n  margin-right: 15px;\n}\n\n.third-content .submit-button .have-account {\n  color: #696868;\n  margin-top: -9px;\n}\n\n.third-content .submit-button .have-account b {\n  text-align: center;\n  color: #00ade5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL0tXSUsvS3dpa19NZXJjaGFudC9zcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FEQ0U7RUFDRyxtQkFBQTtFQUNBLGFBQUE7QUNFTDs7QURBQztFQUNJLHVCQUFBO0VBQ0EsWUFBQTtBQ0dMOztBREFDO0VBQ0csNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDR0o7O0FEY0E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNYSjs7QURZSTtFQUNJLHVCQUFBO0FDVlI7O0FEV1E7RUFDSSxxQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNUWjs7QURVWTtFQUNJLGdDQUFBO0FDUmhCOztBRFlJO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNWUjs7QURZSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDVlI7O0FEWUk7RUFDSSxrQkFBQTtBQ1ZSOztBRFdRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDVFo7O0FEVVk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNSaEIiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IE1lcm1haWQ7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5wYXNzd29yZEljb257XG4gICAgZm9udC1zaXplOjJyZW0gIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICB0b3A6IDIycHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuIH1cbiAgaW9uLWl0ZW17XG4gICAgIGJvcmRlci1yYWRpdXM6IDEwcHggO1xuICAgICBwYWRkaW5nOiBhdXRvO1xuIH1cbiBpb24tbGlzdHtcbiAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgIGJvcmRlcjogbm9uZTtcbiAgICAgXG4gfVxuIGF7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuIH1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gLy8gVEhJUkQgQ09OVEVOVFxuLnRoaXJkLWNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAxN3B4OyBcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDsgXG4gICAgcGFkZGluZy10b3A6IDQ1cHg7XG4gICAgaW9uLWxpc3R7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0E5QTlBOTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuYnV0dG9uLWNyZWF0ZS1hY2NvdW50IHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZGU1O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDsgXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgfVxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDQ3cHg7XG4gICAgfVxuICAgIC5zdWJtaXQtYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAuaGF2ZS1hY2NvdW50IHtcbiAgICAgICAgICAgIGNvbG9yOiAjNjk2ODY4OyBcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC05cHg7XG4gICAgICAgICAgICBiIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMGFkZTU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IE1lcm1haWQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5wYXNzd29yZEljb24ge1xuICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIHRvcDogMjJweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IGF1dG87XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuYSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGhpcmQtY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAxN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgcGFkZGluZy10b3A6IDQ1cHg7XG59XG4udGhpcmQtY29udGVudCBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLnRoaXJkLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xuICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cbi50aGlyZC1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQTlBOUE5O1xufVxuLnRoaXJkLWNvbnRlbnQgLmJ1dHRvbi1jcmVhdGUtYWNjb3VudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWRlNTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG4udGhpcmQtY29udGVudCBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgaGVpZ2h0OiA0N3B4O1xufVxuLnRoaXJkLWNvbnRlbnQgLnN1Ym1pdC1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4udGhpcmQtY29udGVudCAuc3VibWl0LWJ1dHRvbiAuaGF2ZS1hY2NvdW50IHtcbiAgY29sb3I6ICM2OTY4Njg7XG4gIG1hcmdpbi10b3A6IC05cHg7XG59XG4udGhpcmQtY29udGVudCAuc3VibWl0LWJ1dHRvbiAuaGF2ZS1hY2NvdW50IGIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDBhZGU1O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _upload_upload_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../upload/upload.service */ "./src/app/upload/upload.service.ts");















let SignupPage = class SignupPage {
    constructor(db, navigation, loadingController, toastController, menuCtrl, service, location, formBuilder, ref, alertController, pdf, camera, st, webview, upload) {
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
        //  Boolean variables for form validation
        this.submitSeller = false;
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
    ngOnInit() {
        this.menuCtrl.enable(false);
    }
    get GetsellerAccountForm() {
        return this.sellerAccountForm.controls;
    }
    newAddrGroup() {
        return this.formBuilder.group({
            Primary: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            address1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            postalCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('[0-9 ]*')])],
            cityOrTown: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])],
        });
    }
    get altInput() {
        return this.businessInformationForm.get('address');
    }
    addNewAddr() {
        this.altInput.push(this.newAddrGroup());
    }
    removeAddr(index) {
        this.altInput.removeAt(index);
    }
    viewTermsAndConditions() {
        const options = {
            title: 'Terms And Conditions'
        };
        this.pdf.viewDocument('../../assets/pdf/terms_and_conditions.png', 'application/pdf', options);
    }
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
    hideShowConfirmPassword() {
        this.confirmPasswordType = this.confirmPasswordType === 'text' ? 'password' : 'text';
        this.confirmPasswordIcon = this.confirmPasswordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
    checkIfPrimaryAddressExists(id) {
        if (this.businessInformationForm.value.address.length === 1) {
            return;
        }
        this.businessInformationForm.value.address.forEach(item => {
            if (item.Primary === true) {
                let index = this.businessInformationForm.value.address.indexOf(item);
                this.businessInformationForm.value.address[index].Primary === false;
                this.presentAlert("You can not have two  Primary addresses.");
            }
        });
    }
    // SELLER ACCOUNT
    seller_account() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
        });
    }
    // BUSINESS INFORMATION
    business_information() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.businessInformationForm.value);
            if (this.businessInformationForm.value.sameDayDelivery && this.businessInformationForm.value.nextDayDelivery && this.businessInformationForm.value.daysDelivery) {
                console.log("Oops 1");
                this.presentAlert("Please select one of the options: Same day, Next day and Days delivery");
            }
            else if (!this.businessInformationForm.value.sameDayDelivery && !this.businessInformationForm.value.nextDayDelivery && !this.businessInformationForm.value.daysDelivery) {
                console.log("Oops 2");
                this.presentAlert("Please select one of the options: Same day, Next day and Days delivery");
            }
            else {
                this.seller_account_form = false;
                this.business_information_form = false;
                this.payment_details_form = true;
                this.know_your_customer_form = false;
            }
        });
    }
    skipPaymentDetails() {
        this.seller_account_form = false;
        this.business_information_form = false;
        this.payment_details_form = false;
        this.know_your_customer_form = true;
    }
    // PAYMENT DETAILS
    payment_details() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("==============================");
            console.log(this.paymentDetailsForm.value);
            console.log("==============================");
            this.seller_account_form = false;
            this.business_information_form = false;
            this.payment_details_form = false;
            this.know_your_customer_form = true;
        });
    }
    goBackToLogin() {
        this.service.hiddenTabs = true;
        this.location.back();
    }
    goBackToSellerAccount() {
        this.seller_account_form = true;
        this.business_information_form = false;
        this.payment_details_form = false;
        this.know_your_customer_form = false;
    }
    goBackToBusinessInformation() {
        this.seller_account_form = false;
        this.business_information_form = true;
        this.payment_details_form = false;
        this.know_your_customer_form = false;
    }
    goBackToPaymentDetails() {
        this.seller_account_form = false;
        this.business_information_form = false;
        this.payment_details_form = true;
        this.know_your_customer_form = false;
    }
    presentAlert(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Alert !!',
                //   subHeader: 'Subtitle',
                message: '' + message + '',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    // Loader
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: "Wait ..."
            });
            return yield this.loading.present();
        });
    }
    // Toaster
    presentToast(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: data,
                duration: 3000
            });
            toast.present();
        });
    }
    getImageGallery(type) {
        this.camera.getPicture({
            // sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 50,
            targetHeight: 600,
            targetWidth: 600,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true
        }).then((res) => {
            if (type === 'front') {
                this.imgURLFront = 'data:image/jpeg;base64,' + res;
                this.knowYourCustomerForm.value.frontImage = this.uploadTostorage(this.imgURLFront);
            }
            else {
                this.imgURLBack = 'data:image/jpeg;base64,' + res;
                this.knowYourCustomerForm.value.backImage = this.uploadTostorage(this.imgURLBack);
            }
        });
    }
    submit() {
        this.presentLoading();
        console.table('back', this.knowYourCustomerForm.value.backImage.__zone_symbol__value);
        let user = {
            sellerInfo: this.sellerAccountForm.value,
            businessInfo: this.businessInformationForm.value,
            paymentInfo: this.paymentDetailsForm.value,
            kyc: {
                backImage: this.knowYourCustomerForm.value.backImage.__zone_symbol__value,
                frontImage: this.knowYourCustomerForm.value.frontImage.__zone_symbol__value,
                nationalIdOrPassportNumber: this.knowYourCustomerForm.value.nationalIdOrPassportNumber
            }
        };
        console.table(user);
        // CREATE USER BY EMAIL & PASSWORD THEN CREATE PROFILE USER
        this.service.register(this.sellerAccountForm.value.Email, this.sellerAccountForm.value.password).then(res => {
            localStorage.setItem('user', res.user.uid);
            // create profile
            this.service.profile().doc(res.user.uid).set(user).then(() => {
                // go to dashboard
                this.loading.dismiss();
                this.navigation.navigate(['tabs/dashboard']);
            }).catch(error => {
                console.log(error);
                this.service.deleteUser().then(function () {
                    // User deleted.
                    console.log("a/c deleted");
                }).catch(function (error) {
                    // An error happened.
                    console.log(error);
                });
                this.loading.dismiss();
                this.presentToast('Something went wrong profile not created');
            });
        }).catch(error => {
            console.log(error);
            this.loading.dismiss();
            this.presentToast("your network is unstable");
        });
    }
    uploadTostorage(image) {
        console.log('shop -->', this.sellerAccountForm.value.shop);
        let date = new Date().getTime();
        const pictures = this.st.storage.ref(this.sellerAccountForm.value.shop + '/' + date);
        return pictures.putString(image, 'data_url').then(res => {
            return pictures.getDownloadURL();
        }).catch(error => {
            console.log('error', error);
        });
    }
};
SignupPage.ctorParameters = () => [
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
];
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



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es2015.js.map