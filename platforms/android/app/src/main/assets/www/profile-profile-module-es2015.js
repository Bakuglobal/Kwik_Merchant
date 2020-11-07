(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header style=\"background-color: #00ade5;\">\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button autoHide=\"false\"></ion-menu-button>\n        </ion-buttons>\n        <ion-title text-center style=\"margin-right: 25px;\">\n            My Profile\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div *ngIf=\"shop === undefined\">\n        <div>\n            <ion-skeleton-text animated style=\"width: 100%; object-fit: fill; height: 170px;\"></ion-skeleton-text>\n        </div>\n        <div>\n            <ion-avatar style=\"width: 60px; height: 60px; margin-top: -35px; margin-left: 25px;\">\n                <ion-skeleton-text animated style=\"object-fit: fill;\"></ion-skeleton-text>\n            </ion-avatar>\n        </div>\n        <div style=\"margin-top: 20px;line-height: 1;\" class=\"ion-padding\">\n            <div style=\"font-size: 15px; font-weight: bold;\">\n                <ion-skeleton-text></ion-skeleton-text>\n            </div>\n            <div style=\"font-size: 13px; color: #636363; margin-top: 8px;\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n            <div style=\"font-size: 13px; color: #636363; margin-top: 8px;\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n            <div style=\"font-size: 13px; color: #636363; margin-top: 8px;\">\n                <ion-skeleton-text animated></ion-skeleton-text>\n                <ion-skeleton-text animated></ion-skeleton-text>\n            </div>\n        </div>\n    </div>\n\n    <div style=\"padding-bottom: 0px;\" *ngIf=\"shop !== undefined\">\n        <div>\n            <img src=\"{{shop.cover}}\" alt=\"Cover image\" style=\"width: 100%; object-fit: fill; height: 150px;\">\n        </div>\n        <div>\n            <ion-avatar style=\"width: 60px; height: 60px; margin-top: -35px; margin-left: 25px;\">\n                <img src=\"{{shop.logo}}\" style=\"object-fit: fill;\">\n            </ion-avatar>\n        </div>\n        <div style=\"margin-top: 20px;line-height: 1;\" class=\"ion-padding\">\n            <div style=\"font-size: 15px; font-weight: bold; color: #636363;\">{{shopname}}</div>\n            <div style=\"font-size: 13px; color: #636363; margin-top: 8px;\" *ngIf=\"shop.businessInfo.address !== undefined\">\n              <a><ion-icon name=\"pin\"></ion-icon> {{shop.businessInfo.address[0].address1}}</a>\n            </div>\n            <div style=\"font-size: 13px; color: #636363; margin-top: 8px;\">Open from {{shop.businessInfo.Open}} - {{shop.businessInfo.Close}} Mon - Sat\n            </div>\n            <div style=\"font-size: 13px; color: #636363; margin-top: 8px;\">Website:\n              <a (click)=\"inbrowser(shop.businessInfo.Website)\">{{shop.businessInfo.Website}}</a>\n            </div>\n          </div>\n    </div>\n\n    <div class=\"third-content\"  *ngIf=\"shop !== undefined\" style=\"margin-top: -15px;\">\n        <ion-row class=\"ion-no-padding\">\n            <div style=\" margin-bottom: 10px;\">\n                <div style=\"color: var(--ion-color-primary); float: left; left: 15px; font-size: 15px;\">Seller\n                    Account\n                </div>\n                <div *ngIf=\"edit_seller_account\" style=\"color: var(--ion-color-primary); float: right; right: 15px; position: absolute;\">\n                    <div (click)=\"editSellerAccount()\">\n                        Edit\n                    </div>\n                </div>\n            </div>\n        </ion-row>\n        <ion-row class=\"ion-no-padding\" style=\"margin-bottom: 25px;\"  *ngIf=\"edit_seller_account\">\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-list class=\"ion-no-padding\">\n                <ion-item class=\"ion-no-padding\">\n                    <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Full Name <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                    <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                    name=\"owner\" type=\"text\" disabled value=\"{{shop.sellerInfo.owner}}\"></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n    \n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-list class=\"ion-no-padding\">\n                <ion-item class=\"ion-no-padding\">\n                    <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Phone Number <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                    <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                    name=\"Contacts\" type=\"text\" disabled value=\"{{shop.sellerInfo.Contacts}}\"></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n    \n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-list class=\"ion-no-padding\">\n                <ion-item class=\"ion-no-padding\">\n                    <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Shop Name <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                    <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                    name=\"shop\" type=\"text\" disabled value=\"{{shop.sellerInfo.shop}}\"></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n    \n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-list class=\"ion-no-padding\">\n                <ion-item class=\"ion-no-padding\">\n                    <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Email Address <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                    <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                    name=\"Email\" type=\"email\" disabled value=\"{{shop.sellerInfo.Email}}\"></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n        </ion-row>\n\n\n        <form [formGroup]=\"sellerAccountForm\" *ngIf=\"save_seller_account\">\n            <ion-row class=\"ion-no-padding\" style=\"margin-bottom: 25px;\">\n                <ion-col size=\"12\" class=\"ion-no-padding\">\n                  <ion-list class=\"ion-no-padding\">\n                    <ion-item class=\"ion-no-padding\">\n                        <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Full Name <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                        <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                        name=\"owner\" formControlName=\"owner\" required=\"\" type=\"text\" value=\"{{sellerInfo.owner}}\"></ion-input>\n                    </ion-item>\n                  </ion-list>\n                </ion-col>\n        \n                <ion-col size=\"12\" class=\"ion-no-padding\">\n                  <ion-list class=\"ion-no-padding\">\n                    <ion-item class=\"ion-no-padding\">\n                        <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Phone Number <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                        <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                        name=\"Contacts\" formControlName=\"Contacts\" required=\"\" type=\"text\" value=\"{{sellerInfo.Contacts}}\"></ion-input>\n                    </ion-item>\n                  </ion-list>\n                </ion-col>\n        \n                <ion-col size=\"12\" class=\"ion-no-padding\">\n                  <ion-list class=\"ion-no-padding\">\n                    <ion-item class=\"ion-no-padding\">\n                        <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Shop Name <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                        <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                        name=\"shop\" formControlName=\"shop\" type=\"text\" required=\"\" value=\"{{sellerInfo.shop}}\"></ion-input>\n                    </ion-item>\n                  </ion-list>\n                </ion-col>\n        \n                <ion-col size=\"12\" class=\"ion-no-padding\">\n                  <ion-list class=\"ion-no-padding\">\n                    <ion-item class=\"ion-no-padding\">\n                        <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Email Address <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                        <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                        name=\"Email\" formControlName=\"Email\" required=\"\" type=\"email\" value=\"{{sellerInfo.Email}}\"></ion-input>\n                    </ion-item>\n                  </ion-list>\n                </ion-col>\n            </ion-row>\n\n\n            <ion-list class=\"submit-button\" style=\"position: absolute; float: right; right: 5px; margin-top: -290px;\">\n                <div class=\"form-group\">\n                  <ion-buttons class=\"button-create-account\">\n                    <ion-button [disabled]=\"!sellerAccountForm.valid\" style=\"font-size: 13px; color: var(--ion-color-primary);\"\n                      (click)=\"saveSellerAccount()\">Save\n                    </ion-button>\n                  </ion-buttons>\n                </div>\n              </ion-list>\n        </form>\n\n\n\n        <ion-row>\n            <div style=\" margin-bottom: 15px;\">\n                <div style=\"color: var(--ion-color-primary); float: left; left: 15px; font-size: 15px;\">Business\n                    Information\n                </div>\n                <div *ngIf=\"edit_business_information\" style=\"color: var(--ion-color-primary); float: right; right: 15px; position: absolute;\">\n                    <div (click)=\"editBusinessInformation()\">\n                        Edit\n                    </div>\n                </div>\n            </div>\n        </ion-row>\n        <ion-row class=\"ion-no-padding\" style=\"margin-bottom: 25px;\" *ngIf=\"edit_business_information\">\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-list class=\"ion-no-padding\">\n                <ion-item class=\"ion-no-padding\">\n                    <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Address 1 <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                    <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                    name=\"address1\" disabled type=\"text\" value=\"{{shop.businessInfo.address[0].address1}}\"></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n    \n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-list class=\"ion-no-padding\">\n                <ion-item class=\"ion-no-padding\">\n                    <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Postal code</ion-label>\n                    <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                    name=\"postalCode\" disabled type=\"text\" value=\"{{shop.businessInfo.address[0].postalCode}}\"></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n    \n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-list class=\"ion-no-padding\">\n                <ion-item class=\"ion-no-padding\">\n                    <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">City/Town <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                    <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                    name=\"cityOrTown\" disabled type=\"text\" value=\"{{shop.businessInfo.address[0].cityOrTown}}\" ></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n    \n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-list class=\"ion-no-padding\">\n                <ion-item class=\"ion-no-padding\">\n                    <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Country <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                    <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                    name=\"Email\" disabled type=\"email\" value=\"{{shop.businessInfo.address[0].country}}\"></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n\n\n            <ion-col size=\"12\" class=\"ion-no-padding\" style=\"margin-top: 10px;\">\n                <ion-list class=\"ion-no-padding\">\n                  <ion-item class=\"ion-no-padding\" style=\"border-bottom: 1px solid #fff; margin-right: 15px; margin-top: -2px;\">\n                    <ion-label style=\"color: #696868;\">Type of Business <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                    <ion-select name=\"type\" disabled\n                      style=\"border: 1px solid var(--ion-color-primary); border-radius: 15px; padding-top: 5px; padding-bottom: 0px; padding-left: 10px; padding-right: 10px; font-size: 13px; color: var(--ion-color-primary); float: right; right: 1px; position: absolute;\"\n                      class=\"ion-no-padding\" interface=\"popover\" placeholder=\"Select type\">\n                      <ion-select-option selected value=\"{{shop.businessInfo.type}}\">{{shop.businessInfo.type}}</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-list>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n                <ion-list class=\"ion-no-padding\">\n                  <ion-item class=\"ion-no-padding\">\n                        <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">KRA PIN <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                        <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                      name=\"kraPin\" disabled type=\"text\" value=\"{{shop.businessInfo.kraPin}}\"></ion-input>\n                  </ion-item>\n                </ion-list>\n              </ion-col>\n      \n              <ion-col size=\"12\" class=\"ion-no-padding\">\n                <ion-list class=\"ion-no-padding\">\n                  <ion-item class=\"ion-no-padding\">\n                        <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Business Permit Number</ion-label>\n                        <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                      name=\"businessPermitNumber\" disabled type=\"text\" value=\"{{shop.businessInfo.businessPermitNumber}}\"></ion-input>\n                  </ion-item>\n                </ion-list>\n              </ion-col>\n      \n              <ion-col size=\"12\" class=\"ion-no-padding\">\n                <ion-list class=\"ion-no-padding\">\n                  <ion-item class=\"ion-no-padding\">\n                    <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Open Time (Am/Pm) <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                    <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                      name=\"Open\" type=\"text\" disabled value=\"{{shop.businessInfo.Open}}\"></ion-input>\n                  </ion-item>\n                </ion-list>\n              </ion-col>\n      \n              <ion-col size=\"12\" class=\"ion-no-padding\">\n                <ion-list class=\"ion-no-padding\">\n                  <ion-item class=\"ion-no-padding\">\n                        <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Close Time (Am/Pm) <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                        <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                      name=\"Close\" type=\"text\" disabled value=\"{{shop.businessInfo.Close}}\"></ion-input>\n                  </ion-item>\n                </ion-list>\n              </ion-col>\n      \n              <ion-col size=\"12\" class=\"ion-no-padding\">\n                <ion-list class=\"ion-no-padding\">\n                  <ion-item class=\"ion-no-padding\">\n                    <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Website / Social Media link <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                    <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                      name=\"Website\" disabled value=\"{{shop.businessInfo.Website}}\" type=\"text\">\n                    </ion-input>\n                  </ion-item>\n                </ion-list>\n              </ion-col>\n      \n      \n              <ion-col size=\"12\" class=\"ion-no-padding\">\n                <ion-list class=\"ion-no-padding\">\n                  <ion-item class=\"ion-no-padding\"\n                    style=\"border-bottom: 1px solid var(--ion-color-primary); border-radius: 0px; margin-right: 17px;\">\n                    <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Shop Description <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                    <ion-textarea disabled name=\"description\" rows=\"4\" style=\"font-size: 13px; color: #636363;\" value=\"{{shop.businessInfo.description}}\"></ion-textarea>\n                  </ion-item>\n                </ion-list>\n              </ion-col>\n\n              <div style=\"font-size: 15px; margin-top: 15px; margin-bottom: 7px; color: var(--ion-color-primary);\">Delivery details</div>\n              <div style=\"background-color: #F4F4F4; width: 100%; margin-right: 17px; padding: 10px;\">\n                <ion-list class=\"ion-no-padding\" style=\"margin-bottom: -20px;\">\n                  <ion-item text-center class=\"ion-no-padding\">\n                    <input type=\"checkbox\" name=\"sameDayDelivery\" disabled /><b\n                      style=\"margin-left: 25px; font-weight: normal; font-size: 12px; color: #696868;\">Same Day delivery</b>\n                  </ion-item>\n                </ion-list>\n      \n                <ion-list class=\"ion-no-padding\" style=\"margin-bottom: -20px;\">\n                  <ion-item text-center class=\"ion-no-padding\">\n                    <input type=\"checkbox\" name=\"nextDayDelivery\" disabled/><b\n                      style=\"margin-left: 25px; font-weight: normal; font-size: 12px; color: #696868;\">Next Day delivery</b>\n                  </ion-item>\n                </ion-list>\n      \n                <ion-list class=\"i-agree\" class=\"ion-no-padding\">\n                  <ion-item text-center class=\"ion-no-padding\">\n                    <div style=\"width: 27px; margin-right: 12px;\">\n                      <select name=\"daysDelivery\" >\n                        <option disabled value=\"{{ shop.businessInfo.daysDelivery}}\">{{ shop.businessInfo.daysDelivery}}</option>\n                      </select>\n                    </div><b style=\"font-weight: normal; font-size: 12px; color: #696868;\"> Days delivery</b>\n                  </ion-item>\n                </ion-list>\n              </div>\n    \n    \n        </ion-row>\n\n        <form [formGroup]=\"businessInformationForm\" *ngIf=\"save_business_information\">\n            <ion-row class=\"ion-no-padding\" style=\"margin-bottom: 25px;\">\n                <ion-col size=\"12\" class=\"ion-no-padding\">\n                  <ion-list class=\"ion-no-padding\">\n                    <ion-item class=\"ion-no-padding\">\n                        <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Address 1 <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                        <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                        name=\"address1\" required=\"\" formControlName=\"address1\" type=\"text\" value=\"{{businessInfo.address[0].address1}}\"></ion-input>\n                    </ion-item>\n                  </ion-list>\n                </ion-col>\n        \n                <ion-col size=\"12\" class=\"ion-no-padding\">\n                  <ion-list class=\"ion-no-padding\">\n                    <ion-item class=\"ion-no-padding\">\n                        <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Postal code</ion-label>\n                        <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                        name=\"postalCode\" formControlName=\"postalCode\" type=\"text\" value=\"{{businessInfo.address[0].postalCode}}\"></ion-input>\n                    </ion-item>\n                  </ion-list>\n                </ion-col>\n        \n                <ion-col size=\"12\" class=\"ion-no-padding\">\n                  <ion-list class=\"ion-no-padding\">\n                    <ion-item class=\"ion-no-padding\">\n                        <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">City/Town <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                        <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                        name=\"cityOrTown\" required=\"\" formControlName=\"cityOrTown\" type=\"text\" value=\"{{shop.businessInfo.address[0].cityOrTown}}\"></ion-input>\n                    </ion-item>\n                  </ion-list>\n                </ion-col>\n        \n                <ion-col size=\"12\" class=\"ion-no-padding\">\n                  <ion-list class=\"ion-no-padding\">\n                    <ion-item class=\"ion-no-padding\">\n                        <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Country <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                        <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                        name=\"country\" required=\"\" formControlName=\"country\" type=\"text\" value=\"{{shop.businessInfo.address[0].country}}\"></ion-input>\n                    </ion-item>\n                  </ion-list>\n                </ion-col>\n    \n    \n                <ion-col size=\"12\" class=\"ion-no-padding\" style=\"margin-top: 10px;\">\n                    <ion-list class=\"ion-no-padding\">\n                      <ion-item class=\"ion-no-padding\" style=\"border-bottom: 1px solid #fff; margin-right: 15px; margin-top: -2px;\">\n                        <ion-label style=\"color: #696868;\">Type of Business <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                        <ion-select name=\"type\" formControlName=\"type\" \n                          style=\"border: 1px solid var(--ion-color-primary); border-radius: 15px; padding-top: 5px; padding-bottom: 0px; padding-left: 10px; padding-right: 10px; font-size: 13px; color: var(--ion-color-primary); float: right; right: 1px; position: absolute;\"\n                          class=\"ion-no-padding\" interface=\"popover\" placeholder=\"Select type\">\n                          <!-- <ion-select-option selected value=\"{{shop.businessInfo.type}}\">{{shop.businessInfo.type}}</ion-select-option> -->\n                          <ion-select-option value=\"Shops\">Shop</ion-select-option>\n                          <!-- <ion-select-option value=\"recipes\">Recipes</ion-select-option> -->\n                          <ion-select-option value=\"food\">Restaurant</ion-select-option>\n                        </ion-select>\n                      </ion-item>\n                    </ion-list>\n                </ion-col>\n    \n                <ion-col size=\"12\" class=\"ion-no-padding\">\n                    <ion-list class=\"ion-no-padding\">\n                      <ion-item class=\"ion-no-padding\">\n                            <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">KRA PIN <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                            <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                          name=\"kraPin\" formControlName=\"kraPin\" type=\"text\" value=\"{{shop.businessInfo.kraPin}}\"></ion-input>\n                      </ion-item>\n                    </ion-list>\n                  </ion-col>\n          \n                  <ion-col size=\"12\" class=\"ion-no-padding\">\n                    <ion-list class=\"ion-no-padding\">\n                      <ion-item class=\"ion-no-padding\">\n                            <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Business Permit Number</ion-label>\n                            <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                          name=\"businessPermitNumber\" formControlName=\"businessPermitNumber\" type=\"text\" value=\"{{businessInfo.businessPermitNumber}}\"></ion-input>\n                      </ion-item>\n                    </ion-list>\n                  </ion-col>\n          \n                  <ion-col size=\"12\" class=\"ion-no-padding\">\n                    <ion-list class=\"ion-no-padding\">\n                      <ion-item class=\"ion-no-padding\">\n                        <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Open Time (Am/Pm) <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                        <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                          name=\"Open\" formControlName=\"Open\" required=\"\" type=\"text\" value=\"{{businessInfo.Open}}\"></ion-input>\n                      </ion-item>\n                    </ion-list>\n                  </ion-col>\n          \n                  <ion-col size=\"12\" class=\"ion-no-padding\">\n                    <ion-list class=\"ion-no-padding\">\n                      <ion-item class=\"ion-no-padding\">\n                            <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Close Time (Am/Pm) <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                            <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                          name=\"Close\" formControlName=\"Close\" required=\"\" type=\"text\" value=\"{{businessInfo.Close}}\"></ion-input>\n                      </ion-item>\n                    </ion-list>\n                  </ion-col>\n          \n                  <ion-col size=\"12\" class=\"ion-no-padding\">\n                    <ion-list class=\"ion-no-padding\">\n                      <ion-item class=\"ion-no-padding\">\n                        <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Website / Social Media link <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                        <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                          name=\"Website\" formControlName=\"Website\" required=\"\" value=\"{{businessInfo.Website}}\" type=\"text\">\n                        </ion-input>\n                      </ion-item>\n                    </ion-list>\n                  </ion-col>\n          \n          \n                  <ion-col size=\"12\" class=\"ion-no-padding\">\n                    <ion-list class=\"ion-no-padding\">\n                      <ion-item class=\"ion-no-padding\"\n                        style=\"border-bottom: 1px solid var(--ion-color-primary); border-radius: 0px; margin-right: 17px;\">\n                        <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Shop Description <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                        <ion-textarea name=\"description\" required=\"\" formControlName=\"description\" rows=\"4\" style=\"font-size: 13px; color: #636363;\" value=\"{{businessInfo.description}}\"></ion-textarea>\n                      </ion-item>\n                    </ion-list>\n                  </ion-col>\n    \n                  <div style=\"font-size: 15px; margin-top: 15px; margin-bottom: 7px; color: var(--ion-color-primary);\">Delivery details</div>\n                  <div style=\"background-color: #F4F4F4; width: 100%; margin-right: 17px; padding: 10px;\">\n                    <ion-list class=\"ion-no-padding\" style=\"margin-bottom: -20px;\">\n                      <ion-item text-center class=\"ion-no-padding\">\n                        <input type=\"checkbox\" name=\"sameDayDelivery\" formControlName=\"sameDayDelivery\"/><b\n                          style=\"margin-left: 25px; font-weight: normal; font-size: 12px; color: #696868;\">Same Day delivery</b>\n                      </ion-item>\n                    </ion-list>\n          \n                    <ion-list class=\"ion-no-padding\" style=\"margin-bottom: -20px;\">\n                      <ion-item text-center class=\"ion-no-padding\">\n                        <input type=\"checkbox\" name=\"nextDayDelivery\" formControlName=\"nextDayDelivery\"/><b\n                          style=\"margin-left: 25px; font-weight: normal; font-size: 12px; color: #696868;\">Next Day delivery</b>\n                      </ion-item>\n                    </ion-list>\n          \n                    <ion-list class=\"i-agree\" class=\"ion-no-padding\">\n                      <ion-item text-center class=\"ion-no-padding\">\n                        <div style=\"width: 27px; margin-right: 12px;\">\n                          <select formControlName=\"daysDelivery\" name=\"daysDelivery\">\n                            <option value=\"{{ businessInfo.daysDelivery}}\" >{{ businessInfo.daysDelivery}}</option>\n                          </select>\n                        </div><b style=\"font-weight: normal; font-size: 12px; color: #696868;\"> Days delivery</b>\n                      </ion-item>\n                    </ion-list>\n                </div>\n            </ion-row>\n            <ion-list class=\"submit-button\" style=\"position: absolute; float: right; right: 5px; margin-top: -890px;\">\n                <div class=\"form-group\">\n                  <ion-buttons class=\"button-create-account\">\n                    <ion-button [disabled]=\"!businessInformationForm.valid\" style=\"font-size: 13px; color: var(--ion-color-primary);\"\n                      (click)=\"saveBusinessInformation()\">Save\n                    </ion-button>\n                  </ion-buttons>\n                </div>\n            </ion-list>\n        </form>\n\n\n\n        <ion-row>\n            <div style=\" margin-bottom: 10px;\">\n                <div style=\"color: var(--ion-color-primary); float: left; left: 15px; font-size: 15px;\">Payment\n                    Details\n                </div>\n                <div *ngIf=\"edit_payment_details\" style=\"color: var(--ion-color-primary); float: right; right: 15px; position: absolute;\">\n                    <div (click)=\"editPaymentDetails()\">\n                        Edit\n                    </div>\n                </div>\n            </div>\n        </ion-row>\n        <ion-row class=\"ion-no-padding\" style=\"margin-bottom: 25px;\" *ngIf=\"edit_payment_details\">\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-list class=\"ion-no-padding\">\n                <ion-item class=\"ion-no-padding\">\n                    <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Account Name</ion-label>\n                    <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                    name=\"owner\" disabled type=\"text\" value=\"{{ shop.paymentInfo.bankAccountName}}\"></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n    \n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-list class=\"ion-no-padding\">\n                <ion-item class=\"ion-no-padding\">\n                    <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Account Number</ion-label>\n                    <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                    name=\"Contacts\" disabled type=\"text\" value=\"{{ shop.paymentInfo.bankAccountNumber}}\"></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n    \n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-list class=\"ion-no-padding\">\n                <ion-item class=\"ion-no-padding\">\n                    <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Bank</ion-label>\n                    <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                    name=\"shop\" disabled type=\"text\" value=\"{{ shop.paymentInfo.bankName}}\"></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n    \n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-list class=\"ion-no-padding\">\n                <ion-item class=\"ion-no-padding\">\n                    <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Bank Code</ion-label>\n                    <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                    name=\"Email\" disabled type=\"text\" value=\"{{ shop.paymentInfo.bankCode}}\"></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n                <ion-list class=\"ion-no-padding\">\n                  <ion-item class=\"ion-no-padding\">\n                      <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Branch</ion-label>\n                      <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                      name=\"Email\" disabled type=\"text\" value=\"{{ shop.paymentInfo.bankBranch}}\"></ion-input>\n                  </ion-item>\n                </ion-list>\n            </ion-col>\n\n            <div style=\"font-size: 15px; margin-top: 15px; margin-bottom: 7px; color: var(--ion-color-primary);\">Mpesa Account</div>\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n                <ion-list class=\"ion-no-padding\">\n                  <ion-item class=\"ion-no-padding\">\n                      <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Mpesa Registered Name <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                      <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                      name=\"Email\" disabled type=\"text\" value=\"{{ shop.paymentInfo.bankmpesaRegisteredNameBranch}}\"></ion-input>\n                  </ion-item>\n                </ion-list>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n                <ion-list class=\"ion-no-padding\">\n                  <ion-item class=\"ion-no-padding\">\n                      <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Mpesa Number <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                      <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                      name=\"Email\" disabled type=\"text\" value=\"{{ shop.paymentInfo.mpesaNumber}}\"></ion-input>\n                  </ion-item>\n                </ion-list>\n            </ion-col>\n\n            <div style=\"font-size: 15px; margin-top: 15px; margin-bottom: 7px; color: var(--ion-color-primary);\">Mpesa Till number</div>\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n                <ion-list class=\"ion-no-padding\">\n                  <ion-item class=\"ion-no-padding\">\n                      <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Mpesa Registered Name <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                      <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                      name=\"Email\" disabled type=\"text\" value=\"{{ shop.paymentInfo.mpesaTillRegisteredName}}\"></ion-input>\n                  </ion-item>\n                </ion-list>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n                <ion-list class=\"ion-no-padding\">\n                  <ion-item class=\"ion-no-padding\">\n                      <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Till number</ion-label>\n                      <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                      name=\"Email\" disabled type=\"text\" value=\"{{ shop.paymentInfo.mpesaTillNumber}}\"></ion-input>\n                  </ion-item>\n                </ion-list>\n            </ion-col>\n\n            <div style=\"font-size: 15px; margin-top: 15px; margin-bottom: 7px; color: var(--ion-color-primary);\">Mpesa Paybill</div>\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n                <ion-list class=\"ion-no-padding\">\n                  <ion-item class=\"ion-no-padding\">\n                      <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Mpesa Registered Name <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                      <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                      name=\"Email\" disabled type=\"text\" value=\"{{ shop.paymentInfo.mpesaPaybillRegisteredName}}\"></ion-input>\n                  </ion-item>\n                </ion-list>\n            </ion-col>\n\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n                <ion-list class=\"ion-no-padding\">\n                  <ion-item class=\"ion-no-padding\">\n                      <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Paybill</ion-label>\n                      <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                      name=\"Email\" disabled type=\"email\" value=\"{{ shop.paymentInfo.mpesaPaybillNumber}}\"></ion-input>\n                  </ion-item>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n\n        <form [formGroup]=\"paymentDetailsForm\" *ngIf=\"save_payment_details\">\n            <ion-row class=\"ion-no-padding\" style=\"margin-bottom: 25px;\">\n                <ion-col size=\"12\" class=\"ion-no-padding\">\n                  <ion-list class=\"ion-no-padding\">\n                    <ion-item class=\"ion-no-padding\">\n                        <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Account Name</ion-label>\n                        <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                        name=\"bankAccountName\" formControlName=\"bankAccountName\" type=\"text\" value=\"{{ paymentInfo.bankAccountName}}\"></ion-input>\n                    </ion-item>\n                  </ion-list>\n                </ion-col>\n        \n                <ion-col size=\"12\" class=\"ion-no-padding\">\n                  <ion-list class=\"ion-no-padding\">\n                    <ion-item class=\"ion-no-padding\">\n                        <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Account Number</ion-label>\n                        <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                        name=\"bankAccountNumber\" formControlName=\"bankAccountNumber\" type=\"text\" value=\"{{ paymentInfo.bankAccountNumber}}\"></ion-input>\n                    </ion-item>\n                  </ion-list>\n                </ion-col>\n        \n                <ion-col size=\"12\" class=\"ion-no-padding\">\n                  <ion-list class=\"ion-no-padding\">\n                    <ion-item class=\"ion-no-padding\">\n                        <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Bank</ion-label>\n                        <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                        name=\"bankName\" formControlName=\"bankName\" type=\"text\" value=\"{{ paymentInfo.bankName}}\"></ion-input>\n                    </ion-item>\n                  </ion-list>\n                </ion-col>\n        \n                <ion-col size=\"12\" class=\"ion-no-padding\">\n                  <ion-list class=\"ion-no-padding\">\n                    <ion-item class=\"ion-no-padding\">\n                        <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Bank Code</ion-label>\n                        <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                        name=\"bankCode\" formControlName=\"bankCode\" type=\"text\" value=\"{{ paymentInfo.bankCode}}\"></ion-input>\n                    </ion-item>\n                  </ion-list>\n                </ion-col>\n    \n                <ion-col size=\"12\" class=\"ion-no-padding\">\n                    <ion-list class=\"ion-no-padding\">\n                      <ion-item class=\"ion-no-padding\">\n                          <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Branch</ion-label>\n                          <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                          name=\"bankBranch\" formControlName=\"bankBranch\" type=\"text\" value=\"{{ paymentInfo.bankBranch}}\"></ion-input>\n                      </ion-item>\n                    </ion-list>\n                </ion-col>\n    \n                <div style=\"font-size: 15px; margin-top: 15px; margin-bottom: 7px; color: var(--ion-color-primary);\">Mpesa Account</div>\n                <ion-col size=\"12\" class=\"ion-no-padding\">\n                    <ion-list class=\"ion-no-padding\">\n                      <ion-item class=\"ion-no-padding\">\n                          <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Mpesa Registered Name <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                          <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                          name=\"mpesaRegisteredName\" formControlName=\"mpesaRegisteredName\" type=\"text\" value=\"{{ paymentInfo.bankmpesaRegisteredNameBranch}}\"></ion-input>\n                      </ion-item>\n                    </ion-list>\n                </ion-col>\n    \n                <ion-col size=\"12\" class=\"ion-no-padding\">\n                    <ion-list class=\"ion-no-padding\">\n                      <ion-item class=\"ion-no-padding\">\n                          <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Mpesa Number <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                          <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                          name=\"mpesaNumber\" formControlName=\"mpesaNumber\" type=\"text\" value=\"{{ paymentInfo.mpesaNumber}}\"></ion-input>\n                      </ion-item>\n                    </ion-list>\n                </ion-col>\n    \n                <div style=\"font-size: 15px; margin-top: 15px; margin-bottom: 7px; color: var(--ion-color-primary);\">Mpesa Till number</div>\n                <ion-col size=\"12\" class=\"ion-no-padding\">\n                    <ion-list class=\"ion-no-padding\">\n                      <ion-item class=\"ion-no-padding\">\n                          <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Mpesa Registered Name <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                          <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                          name=\"mpesaTillRegisteredName\" formControlName=\"mpesaTillRegisteredName\" type=\"text\" value=\"{{ paymentInfo.mpesaTillRegisteredName}}\"></ion-input>\n                      </ion-item>\n                    </ion-list>\n                </ion-col>\n    \n                <ion-col size=\"12\" class=\"ion-no-padding\">\n                    <ion-list class=\"ion-no-padding\">\n                      <ion-item class=\"ion-no-padding\">\n                          <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Till number</ion-label>\n                          <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                          name=\"mpesaTillNumber\" formControlName=\"mpesaTillNumber\" type=\"text\" value=\"{{ paymentInfo.mpesaTillNumber}}\"></ion-input>\n                      </ion-item>\n                    </ion-list>\n                </ion-col>\n    \n                <div style=\"font-size: 15px; margin-top: 15px; margin-bottom: 7px; color: var(--ion-color-primary);\">Mpesa Paybill</div>\n                <ion-col size=\"12\" class=\"ion-no-padding\">\n                    <ion-list class=\"ion-no-padding\">\n                      <ion-item class=\"ion-no-padding\">\n                          <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Mpesa Registered Name <span style=\"color: var(--ion-color-danger);\">*</span></ion-label>\n                          <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px;\" clearInput\n                          name=\"mpesaPaybillRegisteredName\" formControlName=\"mpesaPaybillRegisteredName\" type=\"text\" value=\"{{ paymentInfo.mpesaPaybillRegisteredName}}\"></ion-input>\n                      </ion-item>\n                    </ion-list>\n                </ion-col>\n    \n                <ion-col size=\"12\" class=\"ion-no-padding\">\n                    <ion-list class=\"ion-no-padding\">\n                      <ion-item class=\"ion-no-padding\">\n                          <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">Paybill</ion-label>\n                          <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                          name=\"mpesaPaybillNumber\" formControlName=\"mpesaPaybillNumber\" type=\"text\" value=\"{{ paymentInfo.mpesaPaybillNumber}}\"></ion-input>\n                      </ion-item>\n                    </ion-list>\n                </ion-col>\n            </ion-row>\n\n            <ion-list class=\"submit-button\" style=\"position: absolute; float: right; right: 5px; margin-top: -797px;\">\n                <div class=\"form-group\">\n                  <ion-buttons class=\"button-create-account\">\n                    <ion-button [disabled]=\"!paymentDetailsForm.valid\" style=\"font-size: 13px; color: var(--ion-color-primary);\"\n                      (click)=\"savePaymentDetails()\">Save\n                    </ion-button>\n                  </ion-buttons>\n                </div>\n            </ion-list>\n        </form>\n\n\n\n\n        <ion-row>\n            <div style=\" margin-bottom: 10px;\">\n                <div style=\"color: var(--ion-color-primary); float: left; left: 15px; margin-right: 20px; font-size: 15px;\">Know Your\n                    Customer (KYC) Information\n                </div>\n                <div *ngIf=\"edit_know_your_customer\" style=\"color: var(--ion-color-primary); float: right; right: 15px; position: absolute;\">\n                    <div (click)=\"editKnowYourCustomer()\">\n                        Change\n                    </div>\n                </div>\n            </div>\n        </ion-row>\n        <ion-row class=\"ion-no-padding\" style=\"margin-bottom: 25px;\" *ngIf=\"edit_know_your_customer\">\n            <ion-col size=\"12\" class=\"ion-no-padding\">\n              <ion-list class=\"ion-no-padding\">\n                <ion-item class=\"ion-no-padding\">\n                    <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">National ID/ Passport Number</ion-label>\n                    <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                    name=\"owner\" disabled type=\"text\" value=\"{{ shop.kyc.nationalIdOrPassportNumber}}\"></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n        </ion-row>\n\n        <form [formGroup]=\"knowYourCustomerForm\" *ngIf=\"save_know_your_customer\">\n            <ion-row class=\"ion-no-padding\" style=\"margin-bottom: 25px;\">\n                <ion-col size=\"12\" class=\"ion-no-padding\">\n                  <ion-list class=\"ion-no-padding\">\n                    <ion-item class=\"ion-no-padding\">\n                        <ion-label style=\"font-size: 13px; color: #636363;\" position=\"floating\">National ID/ Passport Number</ion-label>\n                        <ion-input style=\"border-bottom: 1px solid var(--ion-color-primary); font-size: 13px; color: #636363;\" clearInput\n                        name=\"nationalIdOrPassportNumber\" formControlName=\"nationalIdOrPassportNumber\" type=\"text\" value=\"{{ kyc.nationalIdOrPassportNumber}}\"></ion-input>\n                    </ion-item>\n                  </ion-list>\n                </ion-col>\n            </ion-row>\n            <ion-list class=\"submit-button\" style=\"position: absolute; float: right; right: 5px; margin-top: -138px;\">\n                <div class=\"form-group\">\n                  <ion-buttons class=\"button-create-account\">\n                    <ion-button [disabled]=\"!knowYourCustomerForm.valid\" style=\"font-size: 13px; color: var(--ion-color-primary);\"\n                      (click)=\"saveKnowYourCustomer()\">Save\n                    </ion-button>\n                  </ion-buttons>\n                </div>\n            </ion-list>\n        </form>\n    </div>\n\n\n\n  <!-- <div style=\"margin-top: 15px;\">\n    <div class=\"ion-padding\" *ngIf=\"!loaded\">\n      <ion-skeleton-text animated style=\"width: 100%;height: 200px;\"></ion-skeleton-text>\n      <br><br>\n      <ion-skeleton-text animated style=\"width: 100%;height: 200px;\"></ion-skeleton-text>\n    </div>\n  </div> -->\n\n  <!-- <div class=\"page-content\"><br>\n\n    <ion-card class=\"card\" *ngFor=\"let item of Posts\">\n      <div class=\"header\">\n        <div class=\"image\" (click)=\"infoModal(item.shop,item.logo)\">\n          <ion-avatar>\n            <img src=\"{{item.logo}}\">\n          </ion-avatar>\n        </div>\n        <div class=\"name\" (click)=\"infoModal(item.shop,item.logo)\">\n          {{item.shop}}\n        </div>\n        <div class=\"date\">\n          10 mins ago\n        </div>\n      </div>\n      <p class=\"description\">\n        {{item.Text}}\n      </p>\n\n      \n      <div class=\"main-image\">\n        <ion-slides>\n          <ion-slide *ngFor=\"let n of item.Images\">\n            <img src=\"{{n}}\" (click)=\"showImage()\">\n          </ion-slide>\n        </ion-slides>\n\n      </div>\n\n      <div class=\"like-comment-share\">\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-button fill=\"light\" (click)=\"like()\">\n              <ion-icon [ngClass]=\"{'color': h}\" size=\"large\" src=\"../../assets/images/heart.svg\"></ion-icon>\n              &nbsp;&nbsp;<span class=\"ion-text-lowercase\">{{item.likes}}</span>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-button fill=\"light\" (click)=\"comments()\">\n              <ion-icon size=\"large\" src=\"../../assets/images/comment.svg\"></ion-icon>\n              &nbsp;&nbsp;<span class=\"ion-text-lowercase\">{{item.comments}}</span>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-button fill=\"light\" (click)=\"share()\">\n              <ion-icon style=\"width: 14.5px; padding-right: 0px;\" size=\"large\" src=\"../../assets/images/share.svg\">\n              </ion-icon>\n              &nbsp;&nbsp;<span class=\"ion-text-lowercase\"></span>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div class=\"line\"></div>\n\n      <div class=\"user-comment\">\n        <div class=\"user-avatar\">\n          <ion-avatar>\n            <img src=\"{{item.lastComment.image}}\">\n          </ion-avatar>\n        </div>\n        <div class=\"user-name-and-date\">\n          <div class=\"name\">{{item.lastComment.user}}</div>\n          <div class=\"date\">10 mins ago</div>\n        </div>\n\n        <div class=\"comment-container\">\n          <p class=\"comment\">\n            {{item.lastComment.Text}}\n          </p>\n          <div class=\"view-all-comments\" (click)=\"comments()\">View all comments</div>\n        </div>\n\n      </div>\n    </ion-card><br>\n\n  </div> -->\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".third-content {\n  margin-left: 17px;\n  margin-right: 0px;\n  padding-top: 45px;\n}\n.third-content ion-list {\n  background: transparent;\n}\n.third-content ion-list ion-item {\n  --border-color: transparent!important;\n  --highlight-height: 0;\n  --background: none;\n}\n.third-content ion-list ion-item ion-input {\n  border-bottom: 1px solid #A9A9A9;\n}\nion-card {\n  border-radius: 5px;\n  margin-left: 0px;\n  margin-right: 0px;\n}\nion-card ion-card-content {\n  padding: 0px;\n}\na {\n  text-decoration: none;\n}\n.color {\n  color: #00ade5;\n}\n.post-img {\n  widows: 100%;\n}\nion-toolbar {\n  border-radius: 0 !important;\n}\nion-badge {\n  margin-left: -12px;\n  margin-top: -12px;\n  border-radius: 100%;\n  font-size: 9px;\n}\nion-badge div {\n  margin-bottom: -2px;\n}\n.line {\n  height: 1px;\n  background-color: #636363;\n  margin-left: 15px;\n  margin-right: 15px;\n  opacity: 0.2;\n}\n.page-content {\n  padding-left: 0px;\n  padding-right: 0px;\n  background-color: #e7ebf3;\n}\n.page-content .card {\n  margin-left: 15px;\n  margin-right: 15px;\n  background-color: white;\n}\n.page-content .card .header {\n  margin-left: 15px;\n  height: 70px;\n  margin-right: 15px;\n}\n.page-content .card .header .image {\n  position: absolute;\n  margin-top: 15px;\n}\n.page-content .card .header .image img {\n  width: 42px;\n  height: 42px;\n}\n.page-content .card .header .name {\n  position: absolute;\n  margin-left: 55px;\n  margin-top: 28px;\n  font-weight: bold;\n  font-size: 15px;\n}\n.page-content .card .header .date {\n  position: absolute;\n  margin-left: 75px;\n  float: right;\n  right: 30px;\n  margin-top: 29px;\n  color: #636363;\n  font-size: 12px;\n}\n.page-content .card .description {\n  font-size: 12px;\n  color: #636363;\n  margin-left: 15px;\n  margin-right: 15px;\n  text-align: left;\n}\n.page-content .card .main-image {\n  margin-left: 15px;\n  margin-right: 15px;\n}\n.page-content .card .main-image img {\n  width: 100%;\n  height: 200px;\n}\n.page-content .card .like-comment-share {\n  height: 53px;\n  background-color: white;\n  padding-top: 5px;\n}\n.page-content .card .like-comment-share ion-row {\n  padding: 0px;\n  text-align: center;\n}\n.page-content .card .like-comment-share ion-row ion-col ion-button {\n  font-size: 10px;\n  color: #636363;\n  font-size: 12px;\n}\n.page-content .card .like-comment-share ion-row ion-col ion-button ion-icon {\n  width: 15px;\n}\n.page-content .card .user-comment {\n  background-color: white;\n  margin-left: 15px;\n  margin-right: 15px;\n  padding-bottom: 10px;\n}\n.page-content .card .user-comment .user-avatar {\n  width: 70px;\n  padding-top: 15px;\n  padding-left: 15px;\n}\n.page-content .card .user-comment .user-avatar img {\n  width: 30px;\n  height: 30px;\n}\n.page-content .card .user-comment .user-name-and-date {\n  position: absolute;\n  margin-top: -55px;\n  left: 90px;\n  right: 30px;\n}\n.page-content .card .user-comment .user-name-and-date .name {\n  float: left;\n  font-size: 13px;\n  font-weight: bold;\n}\n.page-content .card .user-comment .user-name-and-date .date {\n  float: right;\n  padding-right: 15px;\n  color: #636363;\n  margin-top: 2px;\n  font-size: 10px;\n}\n.page-content .card .user-comment .comment-container {\n  margin-top: -40px;\n  color: #636363;\n  padding-left: 61px;\n  padding-right: 8px;\n}\n.page-content .card .user-comment .comment-container .comment {\n  font-size: 12px;\n  text-align: left;\n}\n.page-content .card .user-comment .comment-container .view-all-comments {\n  color: #636363;\n  font-size: 10px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGxhcmFzc2VtbWF4d2VsbC9EZXNrdG9wL05ld21hcmsvS3dpa19NZXJjaGFudC9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDRyxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNBSjtBRENJO0VBQ0ksdUJBQUE7QUNDUjtBREFRO0VBQ0kscUNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDRVo7QUREWTtFQUNJLGdDQUFBO0FDR2hCO0FESUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNESjtBREVJO0VBQ0ksWUFBQTtBQ0FSO0FETUU7RUFDRSxxQkFBQTtBQ0hKO0FES0k7RUFDSSxjQUFBO0FDRlI7QURJRTtFQUNFLFlBQUE7QUNESjtBRElFO0VBQ0UsMkJBQUE7QUNESjtBRE1FO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0hKO0FESUk7RUFDSSxtQkFBQTtBQ0ZSO0FET0U7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0pKO0FEVUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNQSjtBRFFJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDTlI7QURRUTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTlo7QURPWTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNMaEI7QURNZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0pwQjtBRE9ZO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDTGhCO0FET1k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDTGhCO0FEU1E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1BaO0FEVVE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDUlo7QURTWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDUGhCO0FEV1E7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ1RaO0FEVVk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNSaEI7QURTZ0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNQcEI7QURRb0I7RUFDSSxXQUFBO0FDTnhCO0FEWVE7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ1ZaO0FEV1k7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1RoQjtBRFVnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDUnBCO0FEV1k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNUaEI7QURVZ0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDUnBCO0FEVWdCO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDUnBCO0FEV1k7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDVGhCO0FEVWdCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDUnBCO0FEVWdCO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1JwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLy8gVEhJUkQgQ09OVEVOVFxuIC50aGlyZC1jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogMTdweDsgXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7IFxuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xuICAgIGlvbi1saXN0e1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcbiAgICAgICAgICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNBOUE5QTk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuaW9uLWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIGlvbi1jYXJkLWNvbnRlbnR7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gICBcbiAgfVxuXG4gIFxuICBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gICAgLmNvbG9yIHtcbiAgICAgICAgY29sb3I6ICMwMGFkZTUgO1xuICAgIH1cbiAgLnBvc3QtaW1ne1xuICAgIHdpZG93czogMTAwJTtcbiAgfVxuICBcbiAgaW9uLXRvb2xiYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgXG4gIC8vIE5PVElGSUNBVElPTiBQQVJUXG4gIGlvbi1iYWRnZSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMnB4OyBcbiAgICBtYXJnaW4tdG9wOiAtMTJweDsgXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTsgXG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgZGl2IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgICB9XG4gIH1cbiAgXG4gIFxuICAubGluZSB7XG4gICAgaGVpZ2h0OiAxcHg7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MzYzNjM7IFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDsgXG4gICAgb3BhY2l0eTogMC4yO1xuICB9XG4gIFxuICBcbiAgXG4gIFxuICAucGFnZS1jb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDsgXG4gICAgcGFkZGluZy1yaWdodDogMHB4OyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlYmYzO1xuICAgIC5jYXJkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7IFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7ICBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIC8vIENBUkQgSEVBREVSXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7IFxuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4OyBcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyAgXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDJweDsgXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNTVweDsgIFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI4cHg7IFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNzVweDsgXG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0OyBcbiAgICAgICAgICAgICAgICByaWdodDogMzBweDsgXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjlweDsgXG4gICAgICAgICAgICAgICAgY29sb3I6ICM2MzYzNjM7IFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBDQVJEIERFU0NSSVBUSU9OXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7IFxuICAgICAgICAgICAgY29sb3I6ICM2MzYzNjM7IFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7IFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4OyBcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ0FSRCBNQUlOIElNQUdFXG4gICAgICAgIC5tYWluLWltYWdlIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4OyBcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gTElLRSBDT01NRU5UIEFORCBTSEFSRVxuICAgICAgICAubGlrZS1jb21tZW50LXNoYXJlIHtcbiAgICAgICAgICAgIGhlaWdodDogNTNweDsgXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4OyBcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaW9uLWNvbCBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4OyAgXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjM2MzYzOyBcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBVU0VSIENPTU1FTlRcbiAgICAgICAgLnVzZXItY29tbWVudCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDsgXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7IFxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAudXNlci1hdmF0YXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4OyBcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDsgXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4OyBcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC51c2VyLW5hbWUtYW5kLWRhdGUge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTU1cHg7IFxuICAgICAgICAgICAgICAgIGxlZnQ6IDkwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDsgXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDsgXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDsgXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7IFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzYzNjM2MzsgXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDsgXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29tbWVudC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC00MHB4OyBcbiAgICAgICAgICAgICAgICBjb2xvcjogIzYzNjM2MzsgXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2MXB4OyAgXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgICAgICAgICAgICAgIC5jb21tZW50IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4OyBcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnZpZXctYWxsLWNvbW1lbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2MzYzNjM7IFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICB9IiwiLnRoaXJkLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIHBhZGRpbmctdG9wOiA0NXB4O1xufVxuLnRoaXJkLWNvbnRlbnQgaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi50aGlyZC1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcbiAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59XG4udGhpcmQtY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24taW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0E5QTlBOTtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbG9yIHtcbiAgY29sb3I6ICMwMGFkZTU7XG59XG5cbi5wb3N0LWltZyB7XG4gIHdpZG93czogMTAwJTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1iYWRnZSB7XG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGZvbnQtc2l6ZTogOXB4O1xufVxuaW9uLWJhZGdlIGRpdiB7XG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XG59XG5cbi5saW5lIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MzYzNjM7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuLnBhZ2UtY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2ViZjM7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC5oZWFkZXIge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC5oZWFkZXIgLmltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAuaGVhZGVyIC5pbWFnZSBpbWcge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAuaGVhZGVyIC5uYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogNTVweDtcbiAgbWFyZ2luLXRvcDogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLmhlYWRlciAuZGF0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDc1cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgcmlnaHQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDI5cHg7XG4gIGNvbG9yOiAjNjM2MzYzO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2MzYzNjM7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC5tYWluLWltYWdlIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLm1haW4taW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC5saWtlLWNvbW1lbnQtc2hhcmUge1xuICBoZWlnaHQ6IDUzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAubGlrZS1jb21tZW50LXNoYXJlIGlvbi1yb3cge1xuICBwYWRkaW5nOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLmxpa2UtY29tbWVudC1zaGFyZSBpb24tcm93IGlvbi1jb2wgaW9uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICM2MzYzNjM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLmxpa2UtY29tbWVudC1zaGFyZSBpb24tcm93IGlvbi1jb2wgaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIHdpZHRoOiAxNXB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAudXNlci1jb21tZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAudXNlci1jb21tZW50IC51c2VyLWF2YXRhciB7XG4gIHdpZHRoOiA3MHB4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAudXNlci1jb21tZW50IC51c2VyLWF2YXRhciBpbWcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAudXNlci1jb21tZW50IC51c2VyLW5hbWUtYW5kLWRhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC01NXB4O1xuICBsZWZ0OiA5MHB4O1xuICByaWdodDogMzBweDtcbn1cbi5wYWdlLWNvbnRlbnQgLmNhcmQgLnVzZXItY29tbWVudCAudXNlci1uYW1lLWFuZC1kYXRlIC5uYW1lIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC51c2VyLWNvbW1lbnQgLnVzZXItbmFtZS1hbmQtZGF0ZSAuZGF0ZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgY29sb3I6ICM2MzYzNjM7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAudXNlci1jb21tZW50IC5jb21tZW50LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IC00MHB4O1xuICBjb2xvcjogIzYzNjM2MztcbiAgcGFkZGluZy1sZWZ0OiA2MXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG4ucGFnZS1jb250ZW50IC5jYXJkIC51c2VyLWNvbW1lbnQgLmNvbW1lbnQtY29udGFpbmVyIC5jb21tZW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnBhZ2UtY29udGVudCAuY2FyZCAudXNlci1jb21tZW50IC5jb21tZW50LWNvbnRhaW5lciAudmlldy1hbGwtY29tbWVudHMge1xuICBjb2xvcjogIzYzNjM2MztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");











let ProfilePage = class ProfilePage {
    constructor(modalCtrl, fileChooser, filePath, asC, db, fs, service, navCtrl, formBuilder, alert, load) {
        this.modalCtrl = modalCtrl;
        this.fileChooser = fileChooser;
        this.filePath = filePath;
        this.asC = asC;
        this.db = db;
        this.fs = fs;
        this.service = service;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.alert = alert;
        this.load = load;
        this.Posts = [];
        this.loaded = false;
        //variables
        this.liked = false;
        this.h = false;
        this.Addcomment = false;
        this.showSearch = false;
        //objects
        this.likes = { "count": 0 };
        this.edit_seller_account = true;
        this.save_seller_account = false;
        this.edit_business_information = true;
        this.save_business_information = false;
        this.edit_payment_details = true;
        this.save_payment_details = false;
        this.edit_know_your_customer = true;
        this.save_know_your_customer = false;
        this.shopname = localStorage.getItem('shop');
        this.userID = localStorage.getItem('user');
    }
    ngOnInit() {
        this.getUserDetails(this.userID);
    }
    ionViewDidEnter() {
        this.getUserDetails(this.userID);
        // seller AccountForm
        this.sellerAccountForm = this.formBuilder.group({
            owner: [this.sellerInfo.owner],
            Contacts: [this.sellerInfo.Contacts],
            shop: [this.sellerInfo.shop],
            Email: [this.sellerInfo.Email]
        });
        // BUSINESS INFORMTION
        this.businessInformationForm = this.formBuilder.group({
            // address: this.formBuilder.array([this.newAddrGroup()]),
            address1: [this.businessInfo.address[0].address1],
            postalCode: [this.businessInfo.address[0].postalCode],
            cityOrTown: [this.businessInfo.address[0].cityOrTown],
            country: [this.businessInfo.address[0].country],
            type: [this.businessInfo.type],
            kraPin: [this.businessInfo.kraPin],
            businessPermitNumber: [this.businessInfo.businessPermitNumber],
            Open: [this.businessInfo.Open],
            Close: [this.businessInfo.Close],
            Website: [this.businessInfo.Website],
            description: [this.businessInfo.description],
            sameDayDelivery: [this.businessInfo.sameDayDelivery],
            nextDayDelivery: [this.businessInfo.nextDayDelivery],
            daysDelivery: [this.businessInfo.daysDelivery]
        });
        // payment Details Form
        this.paymentDetailsForm = this.formBuilder.group({
            bankAccountName: [this.paymentInfo.bankAccountName],
            bankAccountNumber: [this.paymentInfo.bankAccountNumber],
            bankName: [this.paymentInfo.bankName],
            bankCode: [this.paymentInfo.bankCode],
            bankBranch: [this.paymentInfo.bankBranch],
            mpesaRegisteredName: [this.paymentInfo.mpesaRegisteredName],
            mpesaNumber: [this.paymentInfo.mpesaNumber],
            mpesaTillRegisteredName: [this.paymentInfo.mpesaTillRegisteredName],
            mpesaTillNumber: [this.paymentInfo.mpesaTillNumber],
            mpesaPaybillRegisteredName: [this.paymentInfo.mpesaPaybillRegisteredName],
            mpesaPaybillNumber: [this.paymentInfo.mpesaPaybillNumber]
        });
        // know Your CustomerForm
        this.knowYourCustomerForm = this.formBuilder.group({
            nationalIdOrPassportNumber: [this.kyc.nationalIdOrPassportNumber]
        });
    }
    // GET SHOP DETAILS
    getUserDetails(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.service.getUserDetails(id).valueChanges().subscribe(res => {
                this.shop = res;
                let user = res;
                this.sellerInfo = user.sellerInfo;
                this.businessInfo = user.businessInfo;
                this.paymentInfo = user.paymentInfo;
                this.kyc = user.kyc;
                console.log("============= SHOP DATA ==========");
                console.log(this.shop);
            });
        });
    }
    scanAndPay() {
        this.modalCtrl.dismiss(["scan", this.shopname]);
        this.navCtrl.navigate(['tabs/shop']);
    }
    pickPayCollect() {
        this.modalCtrl.dismiss(["pick", this.shopname]);
        this.navCtrl.navigate(['tabs/offers']);
    }
    // goto shoppinglist page
    Delivery() {
        this.modalCtrl.dismiss(["delivery", this.shopname]);
        this.navCtrl.navigate(['tabs/offers']);
    }
    //share via whatsapp
    share() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const asc = yield this.asC.create({
                animated: true,
                backdropDismiss: true,
                cssClass: './home.page.scss',
                buttons: [{
                        icon: 'logo-whatsapp',
                        text: 'Whatsapp',
                        handler: () => {
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
    //add a comment
    AddComment() {
        if (this.Addcomment == true) {
            this.Addcomment = false;
        }
        else {
            this.Addcomment = true;
        }
    }
    // like posts
    like() {
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
    }
    //close the modal
    close() {
        this.modalCtrl.dismiss();
    }
    //go to maps to see location of the shop
    maps() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // const map = await this.modalCtrl.create({
            //   component: SokomodalPage,
            //   componentProps: {'shoplocation':this.shop.Location} 
            // });
            // console.log('location',this.shop.Location);
            // await map.present();
        });
    }
    //open a link in a browser inside the app
    inbrowser(link) {
        console.log("Opens link in the app");
        const target = '_blank';
        // const options = { location : 'no' } ;
        // this.iab.create(link,target);
    }
    show() {
    }
    infoModal(shop, logo) {
    }
    showImage() {
    }
    comments() {
    }
    getPosts() {
        let posts = this.fs.collection('posts', ref => {
            return ref.where('shop', '==', this.shopname).orderBy('time', 'desc');
        });
        let fd = posts.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(actions => {
            return actions.map(a => {
                const id = a.payload.doc.id;
                const data = a.payload.doc.data();
                return Object.assign({ id }, data);
            });
        }));
        fd.subscribe(res => {
            this.Posts = res;
            this.loaded = true;
            console.log(this.Posts);
        });
    }
    editSellerAccount() {
        this.save_seller_account = true;
        this.edit_seller_account = false;
    }
    // SAVE SELLER ACOUNT CHANGES
    saveSellerAccount() {
        this.save_seller_account = false;
        this.edit_seller_account = true;
        // this.presentloading('Updating profile ...');
        const ref = this.fs.collection("shops").doc(this.userID);
        let data = { sellerInfo: this.sellerAccountForm.value };
        ref.update(data).then(res => {
            console.log("============ SELLER ACCOUNT UPDATED ============");
            // this.loading.dismiss();
        }).catch(error => {
            // this.loading.dismiss();
            console.log(error);
        });
    }
    editBusinessInformation() {
        this.save_business_information = true;
        this.edit_business_information = false;
    }
    // SAVE BUSINESS INFO CHANGES
    saveBusinessInformation() {
        this.save_business_information = false;
        this.edit_business_information = true;
        // this.presentloading('Updating profile ...');
        const ref = this.fs.collection("shops").doc(this.userID);
        let businessData = {
            businessInfo: {
                type: this.businessInformationForm.value.type,
                kraPin: this.businessInformationForm.value.kraPin,
                businessPermitNumber: this.businessInformationForm.value.businessPermitNumber,
                Open: this.businessInformationForm.value.Open,
                Close: this.businessInformationForm.value.Close,
                Website: this.businessInformationForm.value.Website,
                description: this.businessInformationForm.value.description,
                sameDayDelivery: this.businessInformationForm.value.sameDayDelivery,
                nextDayDelivery: this.businessInformationForm.value.nextDayDelivery,
                daysDelivery: this.businessInformationForm.value.daysDelivery,
                address: [
                    {
                        address1: this.businessInformationForm.value.address1,
                        postalCode: this.businessInformationForm.value.postalCode,
                        cityOrTown: this.businessInformationForm.value.cityOrTown,
                        country: this.businessInformationForm.value.country
                    }
                ]
            }
        };
        ref.update(businessData).then(res => {
            console.log("============ BUSINESS INFO UPDATED ============");
            // this.loading.dismiss();
        }).catch(error => {
            // this.loading.dismiss();
            console.log(error);
        });
    }
    editPaymentDetails() {
        this.save_payment_details = true;
        this.edit_payment_details = false;
    }
    // SAVE PAYMENT DETAILS CHANGES
    savePaymentDetails() {
        this.save_payment_details = false;
        this.edit_payment_details = true;
        // this.presentloading('Updating profile ...');
        const ref = this.fs.collection("shops").doc(this.userID);
        let data = { paymentInfo: this.paymentDetailsForm.value };
        ref.update(data).then(res => {
            console.log("============ PAYMENT INFO UPDATED ============");
            // this.loading.dismiss();
        }).catch(error => {
            // this.loading.dismiss();
            console.log(error);
        });
    }
    editKnowYourCustomer() {
        this.save_know_your_customer = true;
        this.edit_know_your_customer = false;
    }
    // SAVE KNOW YOUR CUSTOMER CHANGES
    saveKnowYourCustomer() {
        this.save_know_your_customer = false;
        this.edit_know_your_customer = true;
        // this.presentloading('Updating profile ...');
        const ref = this.fs.collection("shops").doc(this.userID);
        let data = { kyc: this.knowYourCustomerForm.value };
        console.log("============ 1 ============");
        console.log(data);
        ref.update(data).then(res => {
            console.log("============ KNOW YOUR CUSTOMER INFO UPDATED ============");
            // this.loading.dismiss();
        }).catch(error => {
            // this.loading.dismiss();
            console.log(error);
        });
        console.log("============ 2 ============");
    }
    presentloading(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.load.create({
                message: msg,
            });
            yield this.loading.present();
        });
    }
    alertShow(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alt = yield this.alert.create({
                message: msg,
                buttons: [
                    {
                        text: 'No',
                        handler: () => {
                            // this.location.back();
                        }
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            // this.saveChanges(this.product.id) ;
                        }
                    }
                ]
            });
            yield alt.present();
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_3__["FileChooser"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__["FilePath"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _services_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
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
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map