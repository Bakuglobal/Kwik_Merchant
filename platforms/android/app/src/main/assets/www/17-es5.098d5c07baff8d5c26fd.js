(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"uP/6":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=u("mrSG"),e=u("YWyl"),i=u("ZZ/e"),r=u("c92J"),s=function(){function l(l,n,u,t,o){this.fs=l,this.navCtrl=n,this.service=u,this.modal=t,this.db=o,this.Myorders=[],this.readyOrders=[],this.login=!1,this.loader=!0,this.search=!1,this.inputSearch=!1,this.count=0,this.DeliveryOrders=[],this.PickPayOrders=[],this.active="Deliveries",this.Deliverycount=0,this.PickPayCount=0,this.service.hiddenTabs=!1,this.date=new Date}return l.prototype.onScroll=function(l){this.inputSearch=148===l.detail.scrollTop},l.prototype.ionViewWillEnter=function(){this.getShop()},l.prototype.changeCategory=function(l){"delivery"===l.detail.value&&(this.active="Deliveries"),"pick&pay"===l.detail.value&&(this.active="PickPay")},l.prototype.getCount=function(){return this.count},l.prototype.ngOnInit=function(){this.userID=localStorage.getItem("user"),console.log(this.userID),null!=this.userID||(this.login=!0),this.service.shopFirst()},l.prototype.showsearch=function(){this.search=!1===this.search},l.prototype.setFilteredItems=function(){null===this.searchTerm&&""===this.searchTerm||(this.readyOrders=this.filterItems(),console.log(this.Myorders))},l.prototype.filterItems=function(){var l=this;return this.filterOrder.filter((function(n){return n.OrderID.toLowerCase().indexOf(l.searchTerm.toLowerCase())>-1}))},l.prototype.sales=function(){this.service.hiddenTabs=!0,this.navCtrl.navigate(["tabs/sales"])},l.prototype.stock=function(){this.service.hiddenTabs=!0,this.navCtrl.navigate(["tabs/stock"])},l.prototype.orders=function(){this.service.hiddenTabs=!0,this.navCtrl.navigate(["tabs/order-stats"])},l.prototype.getShop=function(){return o.__awaiter(this,void 0,void 0,(function(){return o.__generator(this,(function(l){return this.shopname=localStorage.getItem("shop"),console.log(this.shopname),this.getOrders(),[2]}))}))},l.prototype.getOrders=function(){var l=this;this.service.getTodaysOrders(this.shopname).valueChanges().subscribe((function(n){if(l.Myorders=n,l.filterOrder=n,console.log(l.Myorders),l.filterDelivery(),l.filterPickPay(),l.loader=!1,l.Myorders.length>0){l.count=0;var u=0;l.Myorders.forEach((function(l){"open"==l.status&&u++})),l.count=u}}))},l.prototype.sortDeliveryOrders=function(){return this.DeliveryOrders.sort((function(l,n){return"complete"===l.status?1:-1}))},l.prototype.sortPickPayOrders=function(){return this.PickPayOrders.sort((function(l,n){return"Ready"===l.status?1:-1}))},l.prototype.openOrder=function(l){console.log(l),this.service.setItems(l),this.service.hiddenTabs=!0,this.navCtrl.navigate(["tabs/orders"])},l.prototype.filterDelivery=function(){var l=this;this.DeliveryOrders=this.filter("Deliver it to me"),this.Deliverycount=0,this.DeliveryOrders.forEach((function(n){"open"==n.status&&l.Deliverycount++}))},l.prototype.filterPickPay=function(){var l=this;this.PickPayOrders=this.filter("I will pick it"),this.PickPayCount=0,this.PickPayOrders.forEach((function(n){"open"==n.status&&l.PickPayCount++}))},l.prototype.filter=function(l){return this.Myorders.filter((function(n){return n.Delivery.toLowerCase().indexOf(l.toLowerCase())>-1}))},l}(),c=function(){return function(){}}(),a=u("pMnS"),b=u("oBZk"),p=u("gIcY"),f=u("Ip0R"),d=u("fvl4"),h=u("ZYCi"),m=t.rb({encapsulation:0,styles:[[".card[_ngcontent-%COMP%]{border-radius:15px;text-align:center;padding-top:10px;padding-bottom:10px;background-color:#fff}ion-card[_ngcontent-%COMP%]{border-radius:15px}.main-nav[_ngcontent-%COMP%]{-o-object-position:center;object-position:center;-o-object-fit:contain;object-fit:contain}.loader[_ngcontent-%COMP%]{margin-top:40%}.pick[_ngcontent-%COMP%]{color:var(--ion-color-success);text-transform:capitalize}.name[_ngcontent-%COMP%]{-webkit-box-pack:center;justify-content:center;text-align:center}.top[_ngcontent-%COMP%]{background-color:var(--ion-color-primary)}.body[_ngcontent-%COMP%]{border-radius:20px 20px 0 0;background-color:var(--ion-color-light);position:fixed;overflow-y:scroll;width:100%;bottom:0;top:165px}.ready[_ngcontent-%COMP%]{background-color:#f3f3f3}.complete[_ngcontent-%COMP%]{background-color:var(--ion-color-medium)}"]],data:{}});function g(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,6,"ion-searchbar",[["animated",""],["mode","ios"],["placeholder","Enter OrderID"],["style","margin-top: 10px; font-size: 13px;"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var o=!0,e=l.component;return"ionBlur"===n&&(o=!1!==t.Fb(l,1)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Fb(l,1)._handleInputEvent(u.target)&&o),"ngModelChange"===n&&(o=!1!==(e.searchTerm=u)&&o),"ionChange"===n&&(o=!1!==e.setFilteredItems()&&o),o}),b.Db,b.G)),t.sb(1,16384,null,0,i.Sb,[t.k],null,null),t.Kb(1024,null,p.m,(function(l){return[l]}),[i.Sb]),t.sb(3,671744,null,0,p.r,[[8,null],[8,null],[8,null],[6,p.m]],{model:[0,"model"]},{update:"ngModelChange"}),t.Kb(2048,null,p.n,null,[p.r]),t.sb(5,16384,null,0,p.o,[[4,p.n]],null,null),t.sb(6,49152,null,0,i.mb,[t.h,t.k,t.z],{animated:[0,"animated"],mode:[1,"mode"],placeholder:[2,"placeholder"]},null)],(function(l,n){l(n,3,0,n.component.searchTerm),l(n,6,0,"","ios","Enter OrderID")}),(function(l,n){l(n,0,0,t.Fb(n,5).ngClassUntouched,t.Fb(n,5).ngClassTouched,t.Fb(n,5).ngClassPristine,t.Fb(n,5).ngClassDirty,t.Fb(n,5).ngClassValid,t.Fb(n,5).ngClassInvalid,t.Fb(n,5).ngClassPending)}))}function y(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,3,"ion-title",[["text-center",""]],null,null,null,b.Rb,b.U)),t.sb(1,49152,null,0,i.Cb,[t.h,t.k,t.z],null,null),t.sb(2,16384,null,0,i.f,[t.k],null,null),(l()(),t.Nb(-1,0,["Dashboard"]))],null,null)}function k(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,3,"div",[["text-center",""]],null,null,null,null,null)),t.sb(1,16384,null,0,i.f,[t.k],null,null),(l()(),t.tb(2,0,null,null,1,"ion-spinner",[["class","loader"],["color","primary"],["name","lines"]],null,null,null,b.Lb,b.O)),t.sb(3,49152,null,0,i.ub,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,3,0,"primary","lines")}),null)}function v(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,3,"div",[["style","padding-top: 50px; text-align: center;"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,2,"ion-label",[["style","font-size: 13px; color: #737373;"]],null,null,null,b.wb,b.z)),t.sb(2,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Nb(-1,0,["No Pending Orders"]))],null,null)}function z(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,2,"ion-label",[["color","success"],["style","font-size: 13px;"]],null,null,null,b.wb,b.z)),t.sb(1,49152,null,0,i.P,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Nb(-1,0,["Ready"]))],(function(l,n){l(n,1,0,"success")}),null)}function x(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,2,"ion-label",[["color","warning"],["style","font-size: 13px;"]],null,null,null,b.wb,b.z)),t.sb(1,49152,null,0,i.P,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Nb(-1,0,["Open"]))],(function(l,n){l(n,1,0,"warning")}),null)}function P(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,2,"ion-label",[["color","success"],["style","font-size: 13px;"]],null,null,null,b.wb,b.z)),t.sb(1,49152,null,0,i.P,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Nb(-1,0,["Complete"]))],(function(l,n){l(n,1,0,"success")}),null)}function O(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,3,"ion-label",[["style","font-size: 13px;"]],null,null,null,b.wb,b.z)),t.sb(1,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),t.Nb(3,null,["",""]))],null,(function(l,n){l(n,3,0,n.context.$implicit.product)}))}function C(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,30,"ion-card",[["padding",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.openOrder(l.context.$implicit)&&t),t}),b.eb,b.f)),t.Kb(512,null,f.t,f.u,[t.s,t.t,t.k,t.D]),t.sb(2,278528,null,0,f.k,[f.t],{ngClass:[0,"ngClass"]},null),t.Ib(3,{ready:0,complete:1}),t.sb(4,49152,null,0,i.o,[t.h,t.k,t.z],null,null),t.sb(5,16384,null,0,i.f,[t.k],null,null),(l()(),t.tb(6,0,null,0,1,"ion-icon",[["color","primary"],["name","funnel"],["style","float: left;"]],null,null,null,b.ob,b.r)),t.sb(7,49152,null,0,i.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.Nb(-1,0,["\xa0 "])),(l()(),t.ib(16777216,null,0,1,null,z)),t.sb(10,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,0,1,null,x)),t.sb(12,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,0,1,null,P)),t.sb(14,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(15,0,null,0,2,"ion-label",[["color","primary"],["style","float: right; font-size: 13px;"]],null,null,null,b.wb,b.z)),t.sb(16,49152,null,0,i.P,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Nb(17,0,["",""])),(l()(),t.tb(18,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.tb(19,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.tb(20,0,null,0,4,"div",[["style","text-align:start; font-size: 13px;"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,[" Order for: "])),(l()(),t.ib(16777216,null,null,1,null,O)),t.sb(23,278528,null,0,f.l,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Nb(-1,null,[" ... "])),(l()(),t.tb(25,0,null,0,2,"span",[["style","float: left;margin-top: 20px;"]],null,null,null,null,null)),(l()(),t.tb(26,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Nb(27,null,["",""])),(l()(),t.tb(28,0,null,0,2,"span",[["style","float: right; bottom:0; margin-top: 20px;"]],null,null,null,null,null)),(l()(),t.tb(29,0,null,null,1,"span",[["class","pick"],["style","font-size: 13px;"]],null,null,null,null,null)),(l()(),t.Nb(30,null,["Delivery To : "," "]))],(function(l,n){var u=l(n,3,0,"Ready"==n.context.$implicit.status,"complete"==n.context.$implicit.status);l(n,2,0,u),l(n,7,0,"primary","funnel"),l(n,10,0,"Ready"==n.context.$implicit.status&&"False"==n.context.$implicit.paid),l(n,12,0,"open"==n.context.$implicit.status),l(n,14,0,"complete"==n.context.$implicit.status),l(n,16,0,"primary"),l(n,23,0,n.context.$implicit.products)}),(function(l,n){l(n,17,0,n.context.$implicit.OrderID),l(n,27,0,n.context.$implicit.username),l(n,30,0,n.context.$implicit.Location)}))}function I(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,C)),t.sb(2,278528,null,0,f.l,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.sortDeliveryOrders())}),null)}function D(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,2,"div",[["style","padding-top: -10px; margin-bottom: 35px;margin-bottom: 60px;"]],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,I)),t.sb(2,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,!n.component.loader)}),null)}function w(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,2,"ion-label",[["color","success"],["style","font-size: 13px;"]],null,null,null,b.wb,b.z)),t.sb(1,49152,null,0,i.P,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Nb(-1,0,["Ready"]))],(function(l,n){l(n,1,0,"success")}),null)}function N(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,2,"ion-label",[["color","warning"],["style","font-size: 13px;"]],null,null,null,b.wb,b.z)),t.sb(1,49152,null,0,i.P,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Nb(-1,0,["Open"]))],(function(l,n){l(n,1,0,"warning")}),null)}function F(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,2,"ion-label",[["color","success"],["style","font-size: 13px;"]],null,null,null,b.wb,b.z)),t.sb(1,49152,null,0,i.P,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Nb(-1,0,["Complete"]))],(function(l,n){l(n,1,0,"success")}),null)}function L(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,3,"ion-label",[["style","font-size: 13px;"]],null,null,null,b.wb,b.z)),t.sb(1,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),t.Nb(3,null,["",""]))],null,(function(l,n){l(n,3,0,n.context.$implicit.product)}))}function M(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,27,"ion-card",[["padding",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.openOrder(l.context.$implicit)&&t),t}),b.eb,b.f)),t.Kb(512,null,f.t,f.u,[t.s,t.t,t.k,t.D]),t.sb(2,278528,null,0,f.k,[f.t],{ngClass:[0,"ngClass"]},null),t.Ib(3,{ready:0}),t.sb(4,49152,null,0,i.o,[t.h,t.k,t.z],null,null),t.sb(5,16384,null,0,i.f,[t.k],null,null),(l()(),t.tb(6,0,null,0,1,"ion-icon",[["color","primary"],["name","funnel"],["style","float: left;"]],null,null,null,b.ob,b.r)),t.sb(7,49152,null,0,i.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.Nb(-1,0,["\xa0 "])),(l()(),t.ib(16777216,null,0,1,null,w)),t.sb(10,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,0,1,null,N)),t.sb(12,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,0,1,null,F)),t.sb(14,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(15,0,null,0,2,"ion-label",[["color","primary"],["style","float: right; font-size: 13px;"]],null,null,null,b.wb,b.z)),t.sb(16,49152,null,0,i.P,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Nb(17,0,["",""])),(l()(),t.tb(18,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.tb(19,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.tb(20,0,null,0,4,"div",[["style","text-align:start; font-size: 13px;"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,[" Order for: "])),(l()(),t.ib(16777216,null,null,1,null,L)),t.sb(23,278528,null,0,f.l,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Nb(-1,null,[" ... "])),(l()(),t.tb(25,0,null,0,2,"span",[["style","float: left;margin-top: 20px; font-size: 13px;"]],null,null,null,null,null)),(l()(),t.tb(26,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Nb(27,null,["",""]))],(function(l,n){var u=l(n,3,0,"Ready"==n.context.$implicit.status);l(n,2,0,u),l(n,7,0,"primary","funnel"),l(n,10,0,"Ready"==n.context.$implicit.status),l(n,12,0,"open"==n.context.$implicit.status),l(n,14,0,"True"==n.context.$implicit.Complete),l(n,16,0,"primary"),l(n,23,0,n.context.$implicit.products)}),(function(l,n){l(n,17,0,n.context.$implicit.OrderID),l(n,27,0,n.context.$implicit.username)}))}function E(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,M)),t.sb(2,278528,null,0,f.l,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.sortPickPayOrders())}),null)}function $(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,2,"div",[["style","padding-top: -10px; margin-bottom: 60px;"]],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,E)),t.sb(2,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,!n.component.loader)}),null)}function T(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,89,"ion-content",[["color","primary"]],null,[[null,"ionScroll"]],(function(l,n,u){var t=!0;return"ionScroll"===n&&(t=!1!==l.component.onScroll(u)&&t),t}),b.hb,b.k)),t.sb(1,49152,null,0,i.w,[t.h,t.k,t.z],{color:[0,"color"],scrollEvents:[1,"scrollEvents"]},null),(l()(),t.tb(2,0,null,0,50,"div",[["class","top"]],null,null,null,null,null)),(l()(),t.tb(3,0,null,null,13,"ion-toolbar",[["color","primary"]],null,null,null,b.Tb,b.W)),t.sb(4,49152,null,0,i.Eb,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,b.bb,b.e)),t.sb(6,49152,null,0,i.n,[t.h,t.k,t.z],null,null),(l()(),t.tb(7,0,null,0,1,"ion-menu-button",[],null,null,null,b.yb,b.C)),t.sb(8,49152,null,0,i.T,[t.h,t.k,t.z],null,null),(l()(),t.tb(9,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,b.bb,b.e)),t.sb(10,49152,null,0,i.n,[t.h,t.k,t.z],null,null),(l()(),t.tb(11,0,null,0,1,"ion-icon",[["name","search"],["size","small"],["style","width: 23px; height: 23px; margin-top: 10px; margin-right: 10px;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showsearch()&&t),t}),b.ob,b.r)),t.sb(12,49152,null,0,i.E,[t.h,t.k,t.z],{name:[0,"name"],size:[1,"size"]},null),(l()(),t.ib(16777216,null,0,1,null,g)),t.sb(14,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,0,1,null,y)),t.sb(16,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(17,0,null,null,35,"div",[],null,null,null,null,null)),(l()(),t.tb(18,0,null,null,34,"ion-row",[],null,null,null,b.Cb,b.F)),t.sb(19,49152,null,0,i.lb,[t.h,t.k,t.z],null,null),(l()(),t.tb(20,0,null,0,10,"ion-col",[["class","main-nav"],["size","4"],["tappable",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.stock()&&t),t}),b.gb,b.j)),t.sb(21,49152,null,0,i.v,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(22,0,null,0,8,"ion-card",[["class","card"]],null,null,null,b.eb,b.f)),t.sb(23,49152,null,0,i.o,[t.h,t.k,t.z],null,null),(l()(),t.tb(24,0,null,0,3,"ion-card-title",[],null,null,null,b.db,b.h)),t.sb(25,49152,null,0,i.s,[t.h,t.k,t.z],null,null),(l()(),t.tb(26,0,null,0,1,"ion-icon",[["color","primary"],["name","pricetags"]],null,null,null,b.ob,b.r)),t.sb(27,49152,null,0,i.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.tb(28,0,null,0,2,"label",[["text-center",""]],null,null,null,null,null)),t.sb(29,16384,null,0,i.f,[t.k],null,null),(l()(),t.Nb(-1,null,["Stock"])),(l()(),t.tb(31,0,null,0,10,"ion-col",[["class","main-nav"],["size","4"],["tappable",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.sales()&&t),t}),b.gb,b.j)),t.sb(32,49152,null,0,i.v,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(33,0,null,0,8,"ion-card",[["class","card"]],null,null,null,b.eb,b.f)),t.sb(34,49152,null,0,i.o,[t.h,t.k,t.z],null,null),(l()(),t.tb(35,0,null,0,3,"ion-card-title",[],null,null,null,b.db,b.h)),t.sb(36,49152,null,0,i.s,[t.h,t.k,t.z],null,null),(l()(),t.tb(37,0,null,0,1,"ion-icon",[["color","primary"],["name","pulse"]],null,null,null,b.ob,b.r)),t.sb(38,49152,null,0,i.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.tb(39,0,null,0,2,"label",[["text-center",""]],null,null,null,null,null)),t.sb(40,16384,null,0,i.f,[t.k],null,null),(l()(),t.Nb(-1,null,["Sales"])),(l()(),t.tb(42,0,null,0,10,"ion-col",[["class","main-nav"],["size","4"],["tappable",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.orders()&&t),t}),b.gb,b.j)),t.sb(43,49152,null,0,i.v,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(44,0,null,0,8,"ion-card",[["class","card"]],null,null,null,b.eb,b.f)),t.sb(45,49152,null,0,i.o,[t.h,t.k,t.z],null,null),(l()(),t.tb(46,0,null,0,3,"ion-card-title",[],null,null,null,b.db,b.h)),t.sb(47,49152,null,0,i.s,[t.h,t.k,t.z],null,null),(l()(),t.tb(48,0,null,0,1,"ion-icon",[["color","primary"],["name","podium"]],null,null,null,b.ob,b.r)),t.sb(49,49152,null,0,i.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.tb(50,0,null,0,2,"label",[["text-center",""]],null,null,null,null,null)),t.sb(51,16384,null,0,i.f,[t.k],null,null),(l()(),t.Nb(-1,null,["Orders"])),(l()(),t.tb(53,0,null,0,36,"div",[["class","body"],["style","background-color: white;"]],null,null,null,null,null)),(l()(),t.tb(54,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),t.tb(55,0,null,null,5,"ion-item",[["color","light"]],null,null,null,b.vb,b.t)),t.sb(56,49152,null,0,i.J,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(57,0,null,0,2,"ion-label",[["color","primary"],["style","font-size: 15px;"]],null,null,null,b.wb,b.z)),t.sb(58,49152,null,0,i.P,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Nb(-1,0,["Orders Due Today"])),(l()(),t.Nb(-1,0,["\xa0\xa0\xa0\xa0\xa0\xa0 "])),(l()(),t.tb(61,0,null,null,19,"ion-segment",[["style","background-color: white; padding-top: 7px;"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var o=!0,e=l.component;return"ionBlur"===n&&(o=!1!==t.Fb(l,64)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Fb(l,64)._handleChangeEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.changeCategory(u)&&o),o}),b.Fb,b.H)),t.Kb(5120,null,p.m,(function(l){return[l]}),[i.Rb]),t.sb(63,49152,null,0,i.nb,[t.h,t.k,t.z],null,null),t.sb(64,16384,null,0,i.Rb,[t.k],null,null),(l()(),t.tb(65,0,null,0,7,"ion-segment-button",[["checked",""],["value","delivery"]],null,null,null,b.Eb,b.I)),t.sb(66,49152,null,0,i.ob,[t.h,t.k,t.z],{checked:[0,"checked"],value:[1,"value"]},null),(l()(),t.tb(67,0,null,0,2,"ion-badge",[["class","ion-float-right"]],null,null,null,b.Z,b.c)),t.sb(68,49152,null,0,i.l,[t.h,t.k,t.z],null,null),(l()(),t.Nb(69,0,["",""])),(l()(),t.tb(70,0,null,0,2,"ion-label",[["style","font-size: 12px; margin-top: 10px; margin-bottom: 2px;"]],null,null,null,b.wb,b.z)),t.sb(71,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Nb(-1,0,["Deliveries"])),(l()(),t.tb(73,0,null,0,7,"ion-segment-button",[["value","pick&pay"]],null,null,null,b.Eb,b.I)),t.sb(74,49152,null,0,i.ob,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.tb(75,0,null,0,2,"ion-badge",[["class","ion-float-right"]],null,null,null,b.Z,b.c)),t.sb(76,49152,null,0,i.l,[t.h,t.k,t.z],null,null),(l()(),t.Nb(77,0,["",""])),(l()(),t.tb(78,0,null,0,2,"ion-label",[["style","font-size: 12px; margin-top: 10px; margin-bottom: 2px;"]],null,null,null,b.wb,b.z)),t.sb(79,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Nb(-1,0,["Pay & Collect"])),(l()(),t.ib(16777216,null,null,1,null,k)),t.sb(82,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,v)),t.sb(84,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(85,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,D)),t.sb(87,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,$)),t.sb(89,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,"primary",!0),l(n,4,0,"primary"),l(n,12,0,"search","small"),l(n,14,0,u.search),l(n,16,0,!u.search),l(n,21,0,"4"),l(n,27,0,"primary","pricetags"),l(n,32,0,"4"),l(n,38,0,"primary","pulse"),l(n,43,0,"4"),l(n,49,0,"primary","podium"),l(n,56,0,"light"),l(n,58,0,"primary"),l(n,66,0,"","delivery"),l(n,74,0,"pick&pay"),l(n,82,0,u.loader),l(n,84,0,0==u.Myorders.length),l(n,87,0,"Deliveries"===u.active),l(n,89,0,"PickPay"===u.active)}),(function(l,n){var u=n.component;l(n,69,0,u.Deliverycount),l(n,77,0,u.PickPayCount)}))}function _(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"app-dashboard",[],null,null,null,T,m)),t.sb(1,114688,null,0,s,[d.a,h.m,e.a,i.Kb,r.a],null,null)],(function(l,n){l(n,1,0)}),null)}var S=t.pb("app-dashboard",s,_,{},{},[]);u.d(n,"DashboardPageModuleNgFactory",(function(){return j}));var j=t.qb(c,[],(function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[a.a,S]],[3,t.j],t.x]),t.Db(4608,f.o,f.n,[t.u,[2,f.w]]),t.Db(4608,p.y,p.y,[]),t.Db(4608,i.c,i.c,[t.z,t.g]),t.Db(4608,i.Kb,i.Kb,[i.c,t.j,t.q]),t.Db(4608,i.Pb,i.Pb,[i.c,t.j,t.q]),t.Db(1073742336,f.c,f.c,[]),t.Db(1073742336,p.x,p.x,[]),t.Db(1073742336,p.j,p.j,[]),t.Db(1073742336,i.Gb,i.Gb,[]),t.Db(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),t.Db(1073742336,c,c,[]),t.Db(1024,h.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);