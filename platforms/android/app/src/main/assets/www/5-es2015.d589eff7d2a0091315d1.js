(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{lIfX:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),o=u("mrSG"),e=u("YWyl"),i=u("ZZ/e");class r{constructor(l,n,u,t,o,e,i){this.navCtrl=l,this.service=n,this.location=u,this.formBuilder=t,this.load=o,this.fs=e,this.alert=i,this.view=!1,this.edit=!1,this.service.hiddenTabs=!0,this.shop=localStorage.getItem("shop")}ngOnInit(){}ionViewDidEnter(){this.product=this.service.getProduct(),console.log("product --\x3e"+this.product),this.view=!0,this.service.getallcategories(this.shop).valueChanges().subscribe(l=>{this.category=l}),this.productForm=this.formBuilder.group({product:[this.product.product],description:[this.product.description],currentprice:[this.product.currentprice],status:[this.product.status],quantity:[this.product.quantity],stock:[this.product.stock],barcode:[this.product.barcode],category:[this.product.category]})}back(){1==this.edit?this.alertShow("Would you like to save the changes you made"):this.location.back()}saveChanges(l){console.log(this.productForm.value),this.edit=!1,this.presentloading("updating product ..."),this.fs.collection(this.shop).doc(l).update(this.productForm.value).then(l=>{this.loading.dismiss(),console.log(l),this.location.back()}).catch(l=>{console.log(l)})}deleteProduct(l){this.presentloading("deleting product ..."),this.fs.collection(this.shop).doc(l).delete().then(l=>{this.loading.dismiss(),this.location.back()}).catch(l=>{console.log(l),this.loading.dismiss()})}presentloading(l){return o.__awaiter(this,void 0,void 0,(function*(){this.loading=yield this.load.create({message:l}),yield this.loading.present()}))}alertShow(l){return o.__awaiter(this,void 0,void 0,(function*(){const n=yield this.alert.create({message:l,buttons:[{text:"No",handler:()=>{this.location.back()}},{text:"Yes",handler:()=>{this.saveChanges(this.product.id)}}]});yield n.present()}))}imageupdate(){return o.__awaiter(this,void 0,void 0,(function*(){const l=yield this.alert.create({message:"Image Update is disabled for now",buttons:[{text:"Close",role:"cancel"}]});yield l.present()}))}confirmDelete(l){return o.__awaiter(this,void 0,void 0,(function*(){const n=yield this.alert.create({message:"Do you want to remove this product from Inventory ?",buttons:[{text:"No",role:"cancel"},{text:"Yes",handler:()=>{this.deleteProduct(l)}}]});yield n.present()}))}}class b{}var a=u("pMnS"),c=u("oBZk"),s=u("s7LF"),g=u("SVse"),d=u("iInd"),p=u("Xr7G"),h=t.pb({encapsulation:0,styles:[[".body[_ngcontent-%COMP%]{color:var(--ion-color-medium);background-color:#fff;border-radius:20px 20px 0 0;width:100%;position:fixed;bottom:0;top:100px;overflow-y:scroll}.title[_ngcontent-%COMP%]{font-weight:700;font-size:15px}.image[_ngcontent-%COMP%]{-o-object-fit:contain;object-fit:contain;width:80%;height:80%;float:right}.right[_ngcontent-%COMP%]{font-size:2em}.edits[_ngcontent-%COMP%]{font-weight:700;color:var(--ion-color-secondary)}.create[_ngcontent-%COMP%]{font-size:1.9em;padding-right:10px;padding-top:10px}ion-input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{border:1px solid var(--ion-color-medium);width:100%}ion-label[_ngcontent-%COMP%]{padding-top:10px}"]],data:{}});function f(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,3,"ion-buttons",[["slot","end"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=0!=(l.component.edit=!0)&&t),t}),c.X,c.e)),t.qb(1,49152,null,0,i.n,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,1,"ion-icon",[["name","create"],["style","width: 20px; height: 20px; margin-right: 5px;"]],null,null,null,c.jb,c.q)),t.qb(3,49152,null,0,i.E,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"create")}),null)}function m(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,3,"ion-buttons",[["slot","end"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=0!=(l.component.edit=!1)&&t),t}),c.X,c.e)),t.qb(1,49152,null,0,i.n,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,1,"ion-icon",[["name","close"],["style","width: 20px; height: 20px; margin-right: 5px;"]],null,null,null,c.jb,c.q)),t.qb(3,49152,null,0,i.E,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"close")}),null)}function x(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,3,"ion-title",[["text-center",""]],null,null,null,c.Jb,c.Q)),t.qb(1,49152,null,0,i.Cb,[t.h,t.k,t.x],null,null),t.qb(2,16384,null,0,i.f,[t.k],null,null),(l()(),t.Kb(3,0,["",""]))],null,(function(l,n){l(n,3,0,n.component.product.product)}))}function v(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,2,"div",[["style","margin-top: 40%;text-align: center;"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"ion-spinner",[["color","primary"],["name","circles"]],null,null,null,c.Cb,c.J)),t.qb(2,49152,null,0,i.ub,[t.h,t.k,t.x],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,2,0,"primary","circles")}),null)}function y(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,2,"ion-label",[["style","font-size: 14px; color: #737373;"]],null,null,null,c.ob,c.v)),t.qb(1,49152,null,0,i.P,[t.h,t.k,t.x],null,null),(l()(),t.Kb(2,0,["",""]))],null,(function(l,n){l(n,2,0,n.component.product.product)}))}function q(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,6,"ion-input",[["formControlName","product"],["style","font-size: 14px; color: #737373;"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==t.Db(l,1)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Db(l,1)._handleInputEvent(u.target)&&o),o}),c.kb,c.r)),t.qb(1,16384,null,0,i.Sb,[t.k],null,null),t.Hb(1024,null,s.l,(function(l){return[l]}),[i.Sb]),t.qb(3,671744,null,0,s.f,[[3,s.b],[8,null],[8,null],[6,s.l],[2,s.w]],{name:[0,"name"]},null),t.Hb(2048,null,s.m,null,[s.f]),t.qb(5,16384,null,0,s.n,[[4,s.m]],null,null),t.qb(6,49152,null,0,i.I,[t.h,t.k,t.x],{type:[0,"type"],value:[1,"value"]},null)],(function(l,n){var u=n.component;l(n,3,0,"product"),l(n,6,0,"text",t.vb(1,"",u.product.product,""))}),(function(l,n){l(n,0,0,t.Db(n,5).ngClassUntouched,t.Db(n,5).ngClassTouched,t.Db(n,5).ngClassPristine,t.Db(n,5).ngClassDirty,t.Db(n,5).ngClassValid,t.Db(n,5).ngClassInvalid,t.Db(n,5).ngClassPending)}))}function k(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,2,"ion-label",[["style","font-size: 14px; color: #737373;"]],null,null,null,c.ob,c.v)),t.qb(1,49152,null,0,i.P,[t.h,t.k,t.x],null,null),(l()(),t.Kb(2,0,["",""]))],null,(function(l,n){l(n,2,0,n.component.product.barcode)}))}function C(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,6,"ion-input",[["formControlName","barcode"],["style","font-size: 14px; color: #737373;"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==t.Db(l,1)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Db(l,1)._handleInputEvent(u.target)&&o),o}),c.kb,c.r)),t.qb(1,16384,null,0,i.Sb,[t.k],null,null),t.Hb(1024,null,s.l,(function(l){return[l]}),[i.Sb]),t.qb(3,671744,null,0,s.f,[[3,s.b],[8,null],[8,null],[6,s.l],[2,s.w]],{name:[0,"name"]},null),t.Hb(2048,null,s.m,null,[s.f]),t.qb(5,16384,null,0,s.n,[[4,s.m]],null,null),t.qb(6,49152,null,0,i.I,[t.h,t.k,t.x],{type:[0,"type"],value:[1,"value"]},null)],(function(l,n){var u=n.component;l(n,3,0,"barcode"),l(n,6,0,"text",t.vb(1,"",u.product.barcode,""))}),(function(l,n){l(n,0,0,t.Db(n,5).ngClassUntouched,t.Db(n,5).ngClassTouched,t.Db(n,5).ngClassPristine,t.Db(n,5).ngClassDirty,t.Db(n,5).ngClassValid,t.Db(n,5).ngClassInvalid,t.Db(n,5).ngClassPending)}))}function D(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,2,"ion-label",[["style","font-size: 14px; color: #737373;"]],null,null,null,c.ob,c.v)),t.qb(1,49152,null,0,i.P,[t.h,t.k,t.x],null,null),(l()(),t.Kb(2,0,["",""]))],null,(function(l,n){l(n,2,0,n.component.product.category)}))}function I(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,2,"ion-select-option",[["style","font-size: 14px; color: #737373;"]],null,null,null,c.xb,c.F)),t.qb(1,49152,null,0,i.qb,[t.h,t.k,t.x],null,null),(l()(),t.Kb(2,0,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.name)}))}function P(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,8,"ion-select",[["formControlName","category"],["style","font-size: 14px; color: #737373;"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==t.Db(l,1)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Db(l,1)._handleChangeEvent(u.target)&&o),o}),c.yb,c.E)),t.qb(1,16384,null,0,i.Rb,[t.k],null,null),t.Hb(1024,null,s.l,(function(l){return[l]}),[i.Rb]),t.qb(3,671744,null,0,s.f,[[3,s.b],[8,null],[8,null],[6,s.l],[2,s.w]],{name:[0,"name"]},null),t.Hb(2048,null,s.m,null,[s.f]),t.qb(5,16384,null,0,s.n,[[4,s.m]],null,null),t.qb(6,49152,null,0,i.pb,[t.h,t.k,t.x],{placeholder:[0,"placeholder"]},null),(l()(),t.gb(16777216,null,0,1,null,I)),t.qb(8,278528,null,0,g.l,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,3,0,"category"),l(n,6,0,t.vb(1,"",u.product.category,"")),l(n,8,0,u.category.categories)}),(function(l,n){l(n,0,0,t.Db(n,5).ngClassUntouched,t.Db(n,5).ngClassTouched,t.Db(n,5).ngClassPristine,t.Db(n,5).ngClassDirty,t.Db(n,5).ngClassValid,t.Db(n,5).ngClassInvalid,t.Db(n,5).ngClassPending)}))}function M(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,2,"ion-label",[["style","font-size: 14px; color: #737373;"]],null,null,null,c.ob,c.v)),t.qb(1,49152,null,0,i.P,[t.h,t.k,t.x],null,null),(l()(),t.Kb(2,0,["",""]))],null,(function(l,n){l(n,2,0,n.component.product.stock)}))}function w(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,6,"ion-input",[["formControlName","stock"],["style","font-size: 14px; color: #737373;"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==t.Db(l,1)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Db(l,1)._handleInputEvent(u.target)&&o),o}),c.kb,c.r)),t.qb(1,16384,null,0,i.Sb,[t.k],null,null),t.Hb(1024,null,s.l,(function(l){return[l]}),[i.Sb]),t.qb(3,671744,null,0,s.f,[[3,s.b],[8,null],[8,null],[6,s.l],[2,s.w]],{name:[0,"name"]},null),t.Hb(2048,null,s.m,null,[s.f]),t.qb(5,16384,null,0,s.n,[[4,s.m]],null,null),t.qb(6,49152,null,0,i.I,[t.h,t.k,t.x],{type:[0,"type"],value:[1,"value"]},null)],(function(l,n){var u=n.component;l(n,3,0,"stock"),l(n,6,0,"text",t.vb(1,"",u.product.stock,""))}),(function(l,n){l(n,0,0,t.Db(n,5).ngClassUntouched,t.Db(n,5).ngClassTouched,t.Db(n,5).ngClassPristine,t.Db(n,5).ngClassDirty,t.Db(n,5).ngClassValid,t.Db(n,5).ngClassInvalid,t.Db(n,5).ngClassPending)}))}function B(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,2,"ion-label",[["style","font-size: 14px; color: #737373;"]],null,null,null,c.ob,c.v)),t.qb(1,49152,null,0,i.P,[t.h,t.k,t.x],null,null),(l()(),t.Kb(2,0,["",""]))],null,(function(l,n){l(n,2,0,n.component.product.quantity)}))}function _(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,6,"ion-input",[["formControlName","quantity"],["style","font-size: 14px; color: #737373;"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==t.Db(l,1)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Db(l,1)._handleInputEvent(u.target)&&o),o}),c.kb,c.r)),t.qb(1,16384,null,0,i.Sb,[t.k],null,null),t.Hb(1024,null,s.l,(function(l){return[l]}),[i.Sb]),t.qb(3,671744,null,0,s.f,[[3,s.b],[8,null],[8,null],[6,s.l],[2,s.w]],{name:[0,"name"]},null),t.Hb(2048,null,s.m,null,[s.f]),t.qb(5,16384,null,0,s.n,[[4,s.m]],null,null),t.qb(6,49152,null,0,i.I,[t.h,t.k,t.x],{type:[0,"type"],value:[1,"value"]},null)],(function(l,n){var u=n.component;l(n,3,0,"quantity"),l(n,6,0,"text",t.vb(1,"",u.product.quantity,""))}),(function(l,n){l(n,0,0,t.Db(n,5).ngClassUntouched,t.Db(n,5).ngClassTouched,t.Db(n,5).ngClassPristine,t.Db(n,5).ngClassDirty,t.Db(n,5).ngClassValid,t.Db(n,5).ngClassInvalid,t.Db(n,5).ngClassPending)}))}function z(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,2,"ion-label",[["style","font-size: 14px; color: #737373;"]],null,null,null,c.ob,c.v)),t.qb(1,49152,null,0,i.P,[t.h,t.k,t.x],null,null),(l()(),t.Kb(2,0,["",""]))],null,(function(l,n){l(n,2,0,n.component.product.currentprice)}))}function J(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,6,"ion-input",[["formControlName","currentprice"],["style","font-size: 14px; color: #737373;"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==t.Db(l,1)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Db(l,1)._handleInputEvent(u.target)&&o),o}),c.kb,c.r)),t.qb(1,16384,null,0,i.Sb,[t.k],null,null),t.Hb(1024,null,s.l,(function(l){return[l]}),[i.Sb]),t.qb(3,671744,null,0,s.f,[[3,s.b],[8,null],[8,null],[6,s.l],[2,s.w]],{name:[0,"name"]},null),t.Hb(2048,null,s.m,null,[s.f]),t.qb(5,16384,null,0,s.n,[[4,s.m]],null,null),t.qb(6,49152,null,0,i.I,[t.h,t.k,t.x],{type:[0,"type"],value:[1,"value"]},null)],(function(l,n){var u=n.component;l(n,3,0,"currentprice"),l(n,6,0,"text",t.vb(1,"",u.product.currentprice,""))}),(function(l,n){l(n,0,0,t.Db(n,5).ngClassUntouched,t.Db(n,5).ngClassTouched,t.Db(n,5).ngClassPristine,t.Db(n,5).ngClassDirty,t.Db(n,5).ngClassValid,t.Db(n,5).ngClassInvalid,t.Db(n,5).ngClassPending)}))}function j(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,2,"ion-label",[["style","font-size: 14px; color: #737373;"]],null,null,null,c.ob,c.v)),t.qb(1,49152,null,0,i.P,[t.h,t.k,t.x],null,null),(l()(),t.Kb(2,0,["",""]))],null,(function(l,n){l(n,2,0,n.component.product.description)}))}function K(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,5,"textarea",[["formControlName","description"],["style","font-size: 14px; color: #737373;"],["type","text"]],[[8,"value",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Db(l,1)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Db(l,1).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Db(l,1)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Db(l,1)._compositionEnd(u.target.value)&&o),o}),null,null)),t.qb(1,16384,null,0,s.c,[t.B,t.k,[2,s.a]],null,null),t.Hb(1024,null,s.l,(function(l){return[l]}),[s.c]),t.qb(3,671744,null,0,s.f,[[3,s.b],[8,null],[8,null],[6,s.l],[2,s.w]],{name:[0,"name"]},null),t.Hb(2048,null,s.m,null,[s.f]),t.qb(5,16384,null,0,s.n,[[4,s.m]],null,null)],(function(l,n){l(n,3,0,"description")}),(function(l,n){l(n,0,0,t.vb(1,"",n.component.product.description,""),t.Db(n,5).ngClassUntouched,t.Db(n,5).ngClassTouched,t.Db(n,5).ngClassPristine,t.Db(n,5).ngClassDirty,t.Db(n,5).ngClassValid,t.Db(n,5).ngClassInvalid,t.Db(n,5).ngClassPending)}))}function E(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,2,"ion-label",[["style","font-size: 14px; color: #737373;"]],null,null,null,c.ob,c.v)),t.qb(1,49152,null,0,i.P,[t.h,t.k,t.x],null,null),(l()(),t.Kb(2,0,["",""]))],null,(function(l,n){l(n,2,0,n.component.product.status)}))}function S(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,12,"ion-select",[["formControlName","status"],["style","font-size: 14px; color: #737373;"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==t.Db(l,1)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Db(l,1)._handleChangeEvent(u.target)&&o),o}),c.yb,c.E)),t.qb(1,16384,null,0,i.Rb,[t.k],null,null),t.Hb(1024,null,s.l,(function(l){return[l]}),[i.Rb]),t.qb(3,671744,null,0,s.f,[[3,s.b],[8,null],[8,null],[6,s.l],[2,s.w]],{name:[0,"name"]},null),t.Hb(2048,null,s.m,null,[s.f]),t.qb(5,16384,null,0,s.n,[[4,s.m]],null,null),t.qb(6,49152,null,0,i.pb,[t.h,t.k,t.x],{placeholder:[0,"placeholder"]},null),(l()(),t.rb(7,0,null,0,2,"ion-select-option",[["checked",""],["style","font-size: 14px; color: #737373;"]],null,null,null,c.xb,c.F)),t.qb(8,49152,null,0,i.qb,[t.h,t.k,t.x],null,null),(l()(),t.Kb(-1,0,["Available"])),(l()(),t.rb(10,0,null,0,2,"ion-select-option",[["style","font-size: 14px; color: #737373;"]],null,null,null,c.xb,c.F)),t.qb(11,49152,null,0,i.qb,[t.h,t.k,t.x],null,null),(l()(),t.Kb(-1,0,["Unavailable"]))],(function(l,n){var u=n.component;l(n,3,0,"status"),l(n,6,0,t.vb(1,"",u.product.status,""))}),(function(l,n){l(n,0,0,t.Db(n,5).ngClassUntouched,t.Db(n,5).ngClassTouched,t.Db(n,5).ngClassPristine,t.Db(n,5).ngClassDirty,t.Db(n,5).ngClassValid,t.Db(n,5).ngClassInvalid,t.Db(n,5).ngClassPending)}))}function H(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,119,"div",[],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,118,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0;return"submit"===n&&(o=!1!==t.Db(l,3).onSubmit(u)&&o),"reset"===n&&(o=!1!==t.Db(l,3).onReset()&&o),o}),null,null)),t.qb(2,16384,null,0,s.x,[],null,null),t.qb(3,540672,null,0,s.g,[[8,null],[8,null]],{form:[0,"form"]},null),t.Hb(2048,null,s.b,null,[s.g]),t.qb(5,16384,null,0,s.o,[[4,s.b]],null,null),(l()(),t.rb(6,0,null,null,5,"ion-row",[["style","margin-left: 10px; margin-top: 20px;"]],null,null,null,c.tb,c.A)),t.qb(7,49152,null,0,i.lb,[t.h,t.k,t.x],null,null),(l()(),t.rb(8,0,null,0,1,"div",[["style","font-size: 17px; color: var(--ion-color-primary);"]],null,null,null,null,null)),(l()(),t.Kb(-1,null,[" Click on image to change "])),(l()(),t.rb(10,0,null,0,1,"div",[["style","position: absolute; float: right; right: 0px; margin-right: 15px; font-size: 13px;"]],null,null,null,null,null)),(l()(),t.rb(11,0,null,null,0,"img",[["alt","image"],["class","image"],["style","width: 35px; height: 35px; margin-top: -5px;"]],[[8,"src",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.imageupdate()&&t),t}),null,null)),(l()(),t.rb(12,0,null,null,12,"ion-row",[["style","margin-top: 20px; margin-left: 5px; margin-right: 10px;"]],null,null,null,c.tb,c.A)),t.qb(13,49152,null,0,i.lb,[t.h,t.k,t.x],null,null),(l()(),t.rb(14,0,null,0,4,"ion-col",[],null,null,null,c.cb,c.j)),t.qb(15,49152,null,0,i.v,[t.h,t.k,t.x],null,null),(l()(),t.rb(16,0,null,0,2,"ion-label",[["style","font-size: 14px; color: #737373;"]],null,null,null,c.ob,c.v)),t.qb(17,49152,null,0,i.P,[t.h,t.k,t.x],null,null),(l()(),t.Kb(-1,0,["Product Name :"])),(l()(),t.rb(19,0,null,0,5,"ion-col",[["style","text-align:right"]],null,null,null,c.cb,c.j)),t.qb(20,49152,null,0,i.v,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,y)),t.qb(22,16384,null,0,g.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,q)),t.qb(24,16384,null,0,g.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(25,0,null,null,12,"ion-row",[["style","margin-top: 5px; margin-left: 5px; margin-right: 10px;"]],null,null,null,c.tb,c.A)),t.qb(26,49152,null,0,i.lb,[t.h,t.k,t.x],null,null),(l()(),t.rb(27,0,null,0,4,"ion-col",[],null,null,null,c.cb,c.j)),t.qb(28,49152,null,0,i.v,[t.h,t.k,t.x],null,null),(l()(),t.rb(29,0,null,0,2,"ion-label",[["style","font-size: 14px; color: #737373;"]],null,null,null,c.ob,c.v)),t.qb(30,49152,null,0,i.P,[t.h,t.k,t.x],null,null),(l()(),t.Kb(-1,0,["Product Barcode :"])),(l()(),t.rb(32,0,null,0,5,"ion-col",[["style","text-align:right"]],null,null,null,c.cb,c.j)),t.qb(33,49152,null,0,i.v,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,k)),t.qb(35,16384,null,0,g.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,C)),t.qb(37,16384,null,0,g.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(38,0,null,null,12,"ion-row",[["style","margin-top: 1px; margin-left: 5px; margin-right: 10px;"]],null,null,null,c.tb,c.A)),t.qb(39,49152,null,0,i.lb,[t.h,t.k,t.x],null,null),(l()(),t.rb(40,0,null,0,4,"ion-col",[],null,null,null,c.cb,c.j)),t.qb(41,49152,null,0,i.v,[t.h,t.k,t.x],null,null),(l()(),t.rb(42,0,null,0,2,"ion-label",[["style","font-size: 14px; color: #737373;"]],null,null,null,c.ob,c.v)),t.qb(43,49152,null,0,i.P,[t.h,t.k,t.x],null,null),(l()(),t.Kb(-1,0,["Product Category :"])),(l()(),t.rb(45,0,null,0,5,"ion-col",[["style","text-align:right"]],null,null,null,c.cb,c.j)),t.qb(46,49152,null,0,i.v,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,D)),t.qb(48,16384,null,0,g.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,P)),t.qb(50,16384,null,0,g.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(51,0,null,null,12,"ion-row",[["style","margin-top: 5px; margin-left: 5px; margin-right: 10px;"]],null,null,null,c.tb,c.A)),t.qb(52,49152,null,0,i.lb,[t.h,t.k,t.x],null,null),(l()(),t.rb(53,0,null,0,4,"ion-col",[],null,null,null,c.cb,c.j)),t.qb(54,49152,null,0,i.v,[t.h,t.k,t.x],null,null),(l()(),t.rb(55,0,null,0,2,"ion-label",[["style","font-size: 14px; color: #737373;"]],null,null,null,c.ob,c.v)),t.qb(56,49152,null,0,i.P,[t.h,t.k,t.x],null,null),(l()(),t.Kb(-1,0,["Available Stock :"])),(l()(),t.rb(58,0,null,0,5,"ion-col",[["style","text-align:right"]],null,null,null,c.cb,c.j)),t.qb(59,49152,null,0,i.v,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,M)),t.qb(61,16384,null,0,g.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,w)),t.qb(63,16384,null,0,g.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(64,0,null,null,12,"ion-row",[["style","margin-top: 5px; margin-left: 5px; margin-right: 10px;"]],null,null,null,c.tb,c.A)),t.qb(65,49152,null,0,i.lb,[t.h,t.k,t.x],null,null),(l()(),t.rb(66,0,null,0,4,"ion-col",[],null,null,null,c.cb,c.j)),t.qb(67,49152,null,0,i.v,[t.h,t.k,t.x],null,null),(l()(),t.rb(68,0,null,0,2,"ion-label",[["style","font-size: 14px; color: #737373;"]],null,null,null,c.ob,c.v)),t.qb(69,49152,null,0,i.P,[t.h,t.k,t.x],null,null),(l()(),t.Kb(-1,0,["Product Unit :"])),(l()(),t.rb(71,0,null,0,5,"ion-col",[["style","text-align:right"]],null,null,null,c.cb,c.j)),t.qb(72,49152,null,0,i.v,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,B)),t.qb(74,16384,null,0,g.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,_)),t.qb(76,16384,null,0,g.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(77,0,null,null,12,"ion-row",[["style","margin-top: 5px; margin-left: 5px; margin-right: 10px;"]],null,null,null,c.tb,c.A)),t.qb(78,49152,null,0,i.lb,[t.h,t.k,t.x],null,null),(l()(),t.rb(79,0,null,0,4,"ion-col",[],null,null,null,c.cb,c.j)),t.qb(80,49152,null,0,i.v,[t.h,t.k,t.x],null,null),(l()(),t.rb(81,0,null,0,2,"ion-label",[["style","font-size: 14px; color: #737373;"]],null,null,null,c.ob,c.v)),t.qb(82,49152,null,0,i.P,[t.h,t.k,t.x],null,null),(l()(),t.Kb(-1,0,["Product Price :"])),(l()(),t.rb(84,0,null,0,5,"ion-col",[["style","text-align:right"]],null,null,null,c.cb,c.j)),t.qb(85,49152,null,0,i.v,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,z)),t.qb(87,16384,null,0,g.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,J)),t.qb(89,16384,null,0,g.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(90,0,null,null,12,"ion-row",[["style","margin-top: 5px; margin-left: 5px; margin-right: 10px;"]],null,null,null,c.tb,c.A)),t.qb(91,49152,null,0,i.lb,[t.h,t.k,t.x],null,null),(l()(),t.rb(92,0,null,0,4,"ion-col",[],null,null,null,c.cb,c.j)),t.qb(93,49152,null,0,i.v,[t.h,t.k,t.x],null,null),(l()(),t.rb(94,0,null,0,2,"ion-label",[["style","font-size: 14px; color: #737373;"]],null,null,null,c.ob,c.v)),t.qb(95,49152,null,0,i.P,[t.h,t.k,t.x],null,null),(l()(),t.Kb(-1,0,["Product Description :"])),(l()(),t.rb(97,0,null,0,5,"ion-col",[["style","text-align:right"]],null,null,null,c.cb,c.j)),t.qb(98,49152,null,0,i.v,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,j)),t.qb(100,16384,null,0,g.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,K)),t.qb(102,16384,null,0,g.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(103,0,null,null,12,"ion-row",[["style","margin-top: 5px; margin-left: 5px; margin-right: 10px;"]],null,null,null,c.tb,c.A)),t.qb(104,49152,null,0,i.lb,[t.h,t.k,t.x],null,null),(l()(),t.rb(105,0,null,0,4,"ion-col",[],null,null,null,c.cb,c.j)),t.qb(106,49152,null,0,i.v,[t.h,t.k,t.x],null,null),(l()(),t.rb(107,0,null,0,2,"ion-label",[["style","font-size: 14px; color: #737373;"]],null,null,null,c.ob,c.v)),t.qb(108,49152,null,0,i.P,[t.h,t.k,t.x],null,null),(l()(),t.Kb(-1,0,["Product status :"])),(l()(),t.rb(110,0,null,0,5,"ion-col",[["style","text-align:right"]],null,null,null,c.cb,c.j)),t.qb(111,49152,null,0,i.v,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,E)),t.qb(113,16384,null,0,g.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,S)),t.qb(115,16384,null,0,g.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(116,0,null,null,3,"div",[["style","margin-left: 8px; margin-right: 10px;"]],null,null,null,null,null)),(l()(),t.rb(117,0,null,null,2,"ion-button",[["disabled",""],["expand","full"],["style","margin-top: 50px;"]],null,[[null,"click"]],(function(l,n,u){var t=!0,o=l.component;return"click"===n&&(t=!1!==o.saveChanges(o.product.id)&&t),t}),c.W,c.d)),t.qb(118,49152,null,0,i.m,[t.h,t.k,t.x],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(l()(),t.Kb(-1,0,[" Save Changes "]))],(function(l,n){var u=n.component;l(n,3,0,u.productForm),l(n,22,0,!u.edit),l(n,24,0,u.edit),l(n,35,0,!u.edit),l(n,37,0,u.edit),l(n,48,0,!u.edit),l(n,50,0,u.edit),l(n,61,0,!u.edit),l(n,63,0,u.edit),l(n,74,0,!u.edit),l(n,76,0,u.edit),l(n,87,0,!u.edit),l(n,89,0,u.edit),l(n,100,0,!u.edit),l(n,102,0,u.edit),l(n,113,0,!u.edit),l(n,115,0,u.edit),l(n,118,0,!u.edit,"full")}),(function(l,n){var u=n.component;l(n,1,0,t.Db(n,5).ngClassUntouched,t.Db(n,5).ngClassTouched,t.Db(n,5).ngClassPristine,t.Db(n,5).ngClassDirty,t.Db(n,5).ngClassValid,t.Db(n,5).ngClassInvalid,t.Db(n,5).ngClassPending),l(n,11,0,u.product.image)}))}function A(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,22,"ion-content",[["color","primary"],["style","background-color: var(--ion-color-primary);"]],null,null,null,c.db,c.k)),t.qb(1,49152,null,0,i.w,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(2,0,null,0,15,"ion-toolbar",[["color","primary"]],null,null,null,c.Lb,c.S)),t.qb(3,49152,null,0,i.Eb,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,c.X,c.e)),t.qb(5,49152,null,0,i.n,[t.h,t.k,t.x],null,null),(l()(),t.rb(6,0,null,0,1,"ion-icon",[["name","arrow-back"],["style","width: 20px; height: 20px; margin-left: 5px;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.back()&&t),t}),c.jb,c.q)),t.qb(7,49152,null,0,i.E,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.rb(8,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,c.X,c.e)),t.qb(9,49152,null,0,i.n,[t.h,t.k,t.x],null,null),(l()(),t.rb(10,0,null,0,1,"ion-icon",[["name","trash"],["style","width: 20px; height: 20px; padding-right: 5px;"]],null,[[null,"click"]],(function(l,n,u){var t=!0,o=l.component;return"click"===n&&(t=!1!==o.confirmDelete(o.product.id)&&t),t}),c.jb,c.q)),t.qb(11,49152,null,0,i.E,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.gb(16777216,null,0,1,null,f)),t.qb(13,16384,null,0,g.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,m)),t.qb(15,16384,null,0,g.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,x)),t.qb(17,16384,null,0,g.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(18,0,null,0,4,"div",[["class","body"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,v)),t.qb(20,16384,null,0,g.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,H)),t.qb(22,16384,null,0,g.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,"primary"),l(n,3,0,"primary"),l(n,7,0,"arrow-back"),l(n,11,0,"trash"),l(n,13,0,0==u.edit),l(n,15,0,1==u.edit),l(n,17,0,u.view),l(n,20,0,!u.view),l(n,22,0,u.view)}),null)}function N(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,1,"app-productmodal",[],null,null,null,A,h)),t.qb(1,114688,null,0,r,[d.m,e.a,g.i,s.e,i.Ib,p.a,i.b],null,null)],(function(l,n){l(n,1,0)}),null)}var O=t.nb("app-productmodal",r,N,{},{},[]);u.d(n,"ProductmodalPageModuleNgFactory",(function(){return U}));var U=t.ob(b,[],(function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[a.a,O]],[3,t.j],t.v]),t.Bb(4608,g.o,g.n,[t.s,[2,g.w]]),t.Bb(4608,s.v,s.v,[]),t.Bb(4608,i.c,i.c,[t.x,t.g]),t.Bb(4608,i.Kb,i.Kb,[i.c,t.j,t.p]),t.Bb(4608,i.Pb,i.Pb,[i.c,t.j,t.p]),t.Bb(4608,s.e,s.e,[]),t.Bb(1073742336,g.c,g.c,[]),t.Bb(1073742336,s.u,s.u,[]),t.Bb(1073742336,s.i,s.i,[]),t.Bb(1073742336,i.Gb,i.Gb,[]),t.Bb(1073742336,s.r,s.r,[]),t.Bb(1073742336,d.p,d.p,[[2,d.u],[2,d.m]]),t.Bb(1073742336,b,b,[]),t.Bb(1024,d.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);