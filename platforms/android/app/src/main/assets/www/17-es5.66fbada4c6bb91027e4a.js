(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"uP/6":function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),e=t("mrSG"),o=t("YWyl"),i=t("ZZ/e"),r=t("c92J"),s=function(){function l(l,n,t,u,e){var o=this;this.fs=l,this.navCtrl=n,this.service=t,this.modal=u,this.db=e,this.Myorders=[],this.readyOrders=[],this.login=!1,this.loader=!0,this.search=!1,this.inputSearch=!1,this.count=0,this.DeliveryOrders=[],this.PickPayOrders=[],this.active="Deliveries",this.Deliverycount=0,this.PickPayCount=0,this.slideOptions={initialSlide:0,slidesPerView:7},this.deliveryInitialData=[],this.pickPayInitialData=[],this.months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],this.days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],this.daysOfCurrentMonth=[],this.allOrd=!1,this.service.hiddenTabs=!1,this.customPickerOptions={buttons:[{text:"Cancel",handler:function(){return console.log("Clicked Log. Do not Dismiss."),!0}},{text:"This month",handler:function(l){o.DeliveryOrders=o.deliveryInitialData,o.PickPayOrders=o.pickPayInitialData}},{text:"Done",handler:function(l){var n=Number(l.day.text);console.log(n),o.formatDate(n)}}]}}return l.prototype.getDaysOfTheCurrentMonth=function(){var l=this.extractDays(this.date.getMonth(),this.date.getFullYear());console.log("======= GET TOTAL DAYS ======"),console.log(l);for(var n=1;n<l+1;n++)this.daysOfCurrentMonth.push({day:n})},l.prototype.extractDays=function(l,n){return new Date(n,l+1,0).getDate()},l.prototype.getDay=function(l,n,t){t===this.currentDay&&this.slides.slideTo(t-1,500);var u=new Date(l,n,t);return t&&this.days[u.getDay()]},l.prototype.returnName=function(l){return this.days[l]},l.prototype.onScroll=function(l){this.inputSearch=148===l.detail.scrollTop},l.prototype.ionViewWillEnter=function(){this.getShop(),this.date=new Date,this.currentYear=this.date.getFullYear(),this.currentMonth=this.months[this.date.getMonth()],this.currentDay=this.date.getDate(),console.log("============ GET DAY ======="),console.log(this.currentDay),console.log(this.date.getDate()),console.log("=========== END GET DAY ======="),this.getDaysOfTheCurrentMonth(),console.log("=========== DAYS OF THE CURRENT MONTH  ======="),console.log(this.daysOfCurrentMonth)},l.prototype.changeCategory=function(l){"delivery"===l.detail.value&&(this.active="Deliveries"),"pick&pay"===l.detail.value&&(this.active="PickPay")},l.prototype.getCount=function(){return this.count},l.prototype.ngOnInit=function(){this.userID=localStorage.getItem("user"),console.log(this.userID),null!=this.userID||(this.login=!0),this.service.shopFirst()},l.prototype.showsearch=function(){this.search=!1===this.search},l.prototype.setFilteredItems=function(){null===this.searchTerm&&""===this.searchTerm||(this.DeliveryOrders=this.filterItems(),this.PickPayOrders=this.filterItems(),console.log(this.Myorders))},l.prototype.filterItems=function(){var l=this;return this.filterOrder.filter((function(n){return n.OrderID.toLowerCase().indexOf(l.searchTerm.toLowerCase())>-1}))},l.prototype.sales=function(){this.service.hiddenTabs=!0,this.navCtrl.navigate(["tabs/sales"])},l.prototype.stock=function(){this.service.hiddenTabs=!0,this.navCtrl.navigate(["tabs/stock"])},l.prototype.orders=function(){this.service.hiddenTabs=!0,this.navCtrl.navigate(["tabs/order-stats"])},l.prototype.getShop=function(){return e.__awaiter(this,void 0,void 0,(function(){return e.__generator(this,(function(l){return this.shopname=localStorage.getItem("shop"),console.log(this.shopname),this.getOrders(),[2]}))}))},l.prototype.getOrders=function(){var l=this;this.service.getTodaysOrders(this.shopname).valueChanges().subscribe((function(n){l.Myorders=n,l.filterOrder=n,console.log("======================"),console.log(l.Myorders),console.log("======================="),l.filterDelivery(),l.filterPickPay(),l.formatDate(l.date.getDate()),l.loader=!1}))},l.prototype.sortDeliveryOrders=function(){return this.DeliveryOrders.sort((function(l,n){return"open"===l.status?-1:1}))},l.prototype.sortPickPayOrders=function(){return this.PickPayOrders.sort((function(l,n){return"open"===l.status?-1:1}))},l.prototype.openOrder=function(l){console.log(l),this.service.setItems(l),this.service.hiddenTabs=!0,this.navCtrl.navigate(["tabs/orders"])},l.prototype.filterDelivery=function(){var l=this;this.DeliveryOrders=this.filter("deliver"),console.log("delivery orders",this.DeliveryOrders),this.deliveryInitialData=this.DeliveryOrders,this.DeliveryOrders=this.filterOrdersToCurrentMonth(),console.log("==== This month Orders ===="),console.log("delivery orders for this month",this.DeliveryOrders),this.DeliveryOrders=this.sortDeliveryOrders(),console.log("sorted delivery orders for this month",this.DeliveryOrders),this.removeCompleteOrders(this.DeliveryOrders),console.log("========= final orders array list ========="),console.log("delivery orders without complete orders",this.DeliveryOrders),this.Deliverycount=0,this.DeliveryOrders.forEach((function(n){"open"!=n.status&&"Ready"!=n.status||l.Deliverycount++}))},l.prototype.filterOrdersToCurrentMonth=function(){var l=this;return this.deliveryInitialData.filter((function(n){return console.log(n.Date.toDate().getMonth(),l.date.getMonth()),n.Date.toDate().getMonth()===l.date.getMonth()}))},l.prototype.filterPickPay=function(){var l=this;this.PickPayOrders=this.filter("pick"),this.PickPayOrders=this.filterPickPayToCurrentMonth(),this.PickPayOrders=this.sortPickPayOrders(),this.removeCompleteOrders(this.PickPayOrders),this.pickPayInitialData=this.PickPayOrders,this.PickPayCount=0,this.PickPayOrders.forEach((function(n){"open"!=n.status&&"Ready"!=n.status||l.PickPayCount++}))},l.prototype.filterPickPayToCurrentMonth=function(){var l=this;return this.pickPayInitialData.filter((function(n){n.Date.toDate().getMonth(),l.date.getMonth()}))},l.prototype.filter=function(l){return this.Myorders.filter((function(n){return n.Delivery.toLowerCase().indexOf(l.toLowerCase())>-1}))},l.prototype.removeCompleteOrders=function(l){l.length>0&&l.forEach((function(n){if("canceled"==n.status||"complete"==n.status){var t=l.indexOf(n);console.log("========   ARR 1 1   ======"),console.log(t),l.splice(t,1),console.log("========   ARR 1 2   ======"),console.log(l)}}))},l.prototype.formatDate=function(l){var n=this;this.allOrd=!1,this.currentDay=l;var t=this.pickPayInitialData;this.DeliveryOrders=this.filterByDate(l,this.deliveryInitialData),this.PickPayOrders=this.filterByDate(l,t),this.Deliverycount=0,this.DeliveryOrders.forEach((function(l){"open"!=l.status&&"Ready"!=l.status||n.Deliverycount++})),this.PickPayCount=0,this.PickPayOrders.forEach((function(l){"open"!=l.status&&"Ready"!=l.status||n.PickPayCount++}))},l.prototype.allOrders=function(){this.allOrd=!0,this.filterDelivery(),this.filterPickPay()},l.prototype.filterByDate=function(l,n){return n.filter((function(n){return n.Date.toDate().getDate()==l}))},l}(),a=function(){return function(){}}(),c=t("pMnS"),b=t("oBZk"),p=t("gIcY"),h=t("Ip0R"),d=t("fvl4"),f=t("ZYCi"),g=u.rb({encapsulation:0,styles:[[".card[_ngcontent-%COMP%]{border-radius:15px;text-align:center;padding-top:10px;padding-bottom:10px;background-color:#fff}ion-card[_ngcontent-%COMP%]{border-radius:15px}.main-nav[_ngcontent-%COMP%]{-o-object-position:center;object-position:center;-o-object-fit:contain;object-fit:contain}.loader[_ngcontent-%COMP%]{margin-top:40%}.pick[_ngcontent-%COMP%]{color:var(--ion-color-success);text-transform:capitalize}.name[_ngcontent-%COMP%]{-webkit-box-pack:center;justify-content:center;text-align:center}.top[_ngcontent-%COMP%]{background-color:var(--ion-color-primary)}.body[_ngcontent-%COMP%]{border-radius:20px 20px 0 0;background-color:var(--ion-color-light);position:fixed;overflow-y:scroll;width:100%;bottom:0;top:165px}.ready[_ngcontent-%COMP%]{background-color:#f3f3f3}.complete[_ngcontent-%COMP%]{background-color:var(--ion-color-medium)}.active[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);color:#fff;font-weight:700;text-align:center}"]],data:{}});function y(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,6,"ion-searchbar",[["animated",""],["mode","ios"],["placeholder","Enter OrderID"],["style","margin-top: 10px; font-size: 13px;"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,t){var e=!0,o=l.component;return"ionBlur"===n&&(e=!1!==u.Fb(l,1)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Fb(l,1)._handleInputEvent(t.target)&&e),"ngModelChange"===n&&(e=!1!==(o.searchTerm=t)&&e),"ionChange"===n&&(e=!1!==o.setFilteredItems()&&e),e}),b.Db,b.G)),u.sb(1,16384,null,0,i.Sb,[u.k],null,null),u.Kb(1024,null,p.m,(function(l){return[l]}),[i.Sb]),u.sb(3,671744,null,0,p.r,[[8,null],[8,null],[8,null],[6,p.m]],{model:[0,"model"]},{update:"ngModelChange"}),u.Kb(2048,null,p.n,null,[p.r]),u.sb(5,16384,null,0,p.o,[[4,p.n]],null,null),u.sb(6,49152,null,0,i.mb,[u.h,u.k,u.z],{animated:[0,"animated"],mode:[1,"mode"],placeholder:[2,"placeholder"]},null)],(function(l,n){l(n,3,0,n.component.searchTerm),l(n,6,0,"","ios","Enter OrderID")}),(function(l,n){l(n,0,0,u.Fb(n,5).ngClassUntouched,u.Fb(n,5).ngClassTouched,u.Fb(n,5).ngClassPristine,u.Fb(n,5).ngClassDirty,u.Fb(n,5).ngClassValid,u.Fb(n,5).ngClassInvalid,u.Fb(n,5).ngClassPending)}))}function m(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,3,"ion-title",[["text-center",""]],null,null,null,b.Rb,b.U)),u.sb(1,49152,null,0,i.Cb,[u.h,u.k,u.z],null,null),u.sb(2,16384,null,0,i.f,[u.k],null,null),(l()(),u.Nb(-1,0,["Dashboard"]))],null,null)}function v(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,13,"ion-slide",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.formatDate(l.context.$implicit.day)&&u),u}),b.Jb,b.M)),u.Kb(512,null,h.t,h.u,[u.s,u.t,u.k,u.D]),u.sb(2,278528,null,0,h.k,[h.t],{ngClass:[0,"ngClass"]},null),u.Ib(3,{active:0}),u.sb(4,49152,null,0,i.sb,[u.h,u.k,u.z],null,null),(l()(),u.tb(5,0,null,0,8,"div",[["style","padding-bottom: 7px; padding-top: 7px; margin-bottom: 2px;"]],null,null,null,null,null)),(l()(),u.tb(6,0,null,null,2,"ion-label",[["style","font-size: 13px; margin-bottom: 7px;"]],null,null,null,b.wb,b.z)),u.sb(7,49152,null,0,i.P,[u.h,u.k,u.z],null,null),(l()(),u.Nb(8,0,["",""])),(l()(),u.tb(9,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.tb(10,0,null,null,2,"ion-label",[["style","font-size: 13px; margin-bottom: 10px; margin-top: 5px;"]],null,null,null,b.wb,b.z)),u.sb(11,49152,null,0,i.P,[u.h,u.k,u.z],null,null),(l()(),u.Nb(12,0,["",""])),(l()(),u.tb(13,0,null,null,0,"br",[],null,null,null,null,null))],(function(l,n){var t=n.component,u=l(n,3,0,n.context.$implicit.day===t.currentDay&&!t.allOrd);l(n,2,0,u)}),(function(l,n){var t=n.component;l(n,8,0,t.getDay(t.currentYear,t.date.getMonth(),n.context.$implicit.day)),l(n,12,0,n.context.$implicit.day)}))}function k(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,3,"div",[["text-center",""]],null,null,null,null,null)),u.sb(1,16384,null,0,i.f,[u.k],null,null),(l()(),u.tb(2,0,null,null,1,"ion-spinner",[["class","loader"],["color","primary"],["name","lines"]],null,null,null,b.Lb,b.O)),u.sb(3,49152,null,0,i.ub,[u.h,u.k,u.z],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,3,0,"primary","lines")}),null)}function O(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,3,"div",[["style","padding-top: 50px; text-align: center;"]],null,null,null,null,null)),(l()(),u.tb(1,0,null,null,2,"ion-label",[["style","font-size: 13px; color: #737373;"]],null,null,null,b.wb,b.z)),u.sb(2,49152,null,0,i.P,[u.h,u.k,u.z],null,null),(l()(),u.Nb(-1,0,["No Pending Orders"]))],null,null)}function D(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,2,"ion-label",[["color","success"],["style","font-size: 13px;"]],null,null,null,b.wb,b.z)),u.sb(1,49152,null,0,i.P,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.Nb(-1,0,["Ready"]))],(function(l,n){l(n,1,0,"success")}),null)}function P(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,2,"ion-label",[["color","warning"],["style","font-size: 13px;"]],null,null,null,b.wb,b.z)),u.sb(1,49152,null,0,i.P,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.Nb(-1,0,["Open"]))],(function(l,n){l(n,1,0,"warning")}),null)}function x(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,3,"ion-label",[["style","font-size: 13px;"]],null,null,null,b.wb,b.z)),u.sb(1,49152,null,0,i.P,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),u.Nb(3,null,["",""]))],null,(function(l,n){l(n,3,0,n.context.$implicit.product)}))}function z(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,28,"ion-card",[["padding",""]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.openOrder(l.context.$implicit)&&u),u}),b.eb,b.f)),u.Kb(512,null,h.t,h.u,[u.s,u.t,u.k,u.D]),u.sb(2,278528,null,0,h.k,[h.t],{ngClass:[0,"ngClass"]},null),u.Ib(3,{ready:0,complete:1}),u.sb(4,49152,null,0,i.o,[u.h,u.k,u.z],null,null),u.sb(5,16384,null,0,i.f,[u.k],null,null),(l()(),u.tb(6,0,null,0,1,"ion-icon",[["color","primary"],["name","funnel"],["style","float: left;"]],null,null,null,b.ob,b.r)),u.sb(7,49152,null,0,i.E,[u.h,u.k,u.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),u.Nb(-1,0,["\xa0 "])),(l()(),u.ib(16777216,null,0,1,null,D)),u.sb(10,16384,null,0,h.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.ib(16777216,null,0,1,null,P)),u.sb(12,16384,null,0,h.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.tb(13,0,null,0,2,"ion-label",[["color","primary"],["style","float: right; font-size: 13px;"]],null,null,null,b.wb,b.z)),u.sb(14,49152,null,0,i.P,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.Nb(15,0,["",""])),(l()(),u.tb(16,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.tb(17,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.tb(18,0,null,0,4,"div",[["style","text-align:start; font-size: 13px;"]],null,null,null,null,null)),(l()(),u.Nb(-1,null,[" Order for: "])),(l()(),u.ib(16777216,null,null,1,null,x)),u.sb(21,278528,null,0,h.l,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u.Nb(-1,null,[" ... "])),(l()(),u.tb(23,0,null,0,2,"span",[["style","float: left;margin-top: 20px;"]],null,null,null,null,null)),(l()(),u.tb(24,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Nb(25,null,["",""])),(l()(),u.tb(26,0,null,0,2,"span",[["style","float: right; bottom:0; margin-top: 20px;"]],null,null,null,null,null)),(l()(),u.tb(27,0,null,null,1,"span",[["class","pick"],["style","font-size: 13px;"]],null,null,null,null,null)),(l()(),u.Nb(28,null,["Delivery To : "," "]))],(function(l,n){var t=l(n,3,0,"Ready"==n.context.$implicit.status,"complete"==n.context.$implicit.status);l(n,2,0,t),l(n,7,0,"primary","funnel"),l(n,10,0,"Ready"==n.context.$implicit.status),l(n,12,0,"open"==n.context.$implicit.status),l(n,14,0,"primary"),l(n,21,0,n.context.$implicit.products)}),(function(l,n){l(n,15,0,n.context.$implicit.OrderID),l(n,25,0,n.context.$implicit.username),l(n,28,0,n.context.$implicit.Location)}))}function C(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.ib(16777216,null,null,1,null,z)),u.sb(2,278528,null,0,h.l,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.DeliveryOrders)}),null)}function I(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,2,"div",[["style","padding-top: -10px; margin-bottom: 35px;margin-bottom: 60px;"]],null,null,null,null,null)),(l()(),u.ib(16777216,null,null,1,null,C)),u.sb(2,16384,null,0,h.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,!n.component.loader)}),null)}function w(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,2,"ion-label",[["color","success"],["style","font-size: 13px;"]],null,null,null,b.wb,b.z)),u.sb(1,49152,null,0,i.P,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.Nb(-1,0,["Ready"]))],(function(l,n){l(n,1,0,"success")}),null)}function M(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,2,"ion-label",[["color","warning"],["style","font-size: 13px;"]],null,null,null,b.wb,b.z)),u.sb(1,49152,null,0,i.P,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.Nb(-1,0,["Open"]))],(function(l,n){l(n,1,0,"warning")}),null)}function N(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,2,"ion-label",[["color","success"],["style","font-size: 13px;"]],null,null,null,b.wb,b.z)),u.sb(1,49152,null,0,i.P,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.Nb(-1,0,["Complete"]))],(function(l,n){l(n,1,0,"success")}),null)}function T(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,3,"ion-label",[["style","font-size: 13px;"]],null,null,null,b.wb,b.z)),u.sb(1,49152,null,0,i.P,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),u.Nb(3,null,["",""]))],null,(function(l,n){l(n,3,0,n.context.$implicit.product)}))}function F(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,27,"ion-card",[["padding",""]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.openOrder(l.context.$implicit)&&u),u}),b.eb,b.f)),u.Kb(512,null,h.t,h.u,[u.s,u.t,u.k,u.D]),u.sb(2,278528,null,0,h.k,[h.t],{ngClass:[0,"ngClass"]},null),u.Ib(3,{ready:0}),u.sb(4,49152,null,0,i.o,[u.h,u.k,u.z],null,null),u.sb(5,16384,null,0,i.f,[u.k],null,null),(l()(),u.tb(6,0,null,0,1,"ion-icon",[["color","primary"],["name","funnel"],["style","float: left;"]],null,null,null,b.ob,b.r)),u.sb(7,49152,null,0,i.E,[u.h,u.k,u.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),u.Nb(-1,0,["\xa0 "])),(l()(),u.ib(16777216,null,0,1,null,w)),u.sb(10,16384,null,0,h.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.ib(16777216,null,0,1,null,M)),u.sb(12,16384,null,0,h.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.ib(16777216,null,0,1,null,N)),u.sb(14,16384,null,0,h.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.tb(15,0,null,0,2,"ion-label",[["color","primary"],["style","float: right; font-size: 13px;"]],null,null,null,b.wb,b.z)),u.sb(16,49152,null,0,i.P,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.Nb(17,0,["",""])),(l()(),u.tb(18,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.tb(19,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.tb(20,0,null,0,4,"div",[["style","text-align:start; font-size: 13px;"]],null,null,null,null,null)),(l()(),u.Nb(-1,null,[" Order for: "])),(l()(),u.ib(16777216,null,null,1,null,T)),u.sb(23,278528,null,0,h.l,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u.Nb(-1,null,[" ... "])),(l()(),u.tb(25,0,null,0,2,"span",[["style","float: left;margin-top: 20px; font-size: 13px;"]],null,null,null,null,null)),(l()(),u.tb(26,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Nb(27,null,["",""]))],(function(l,n){var t=l(n,3,0,"Ready"==n.context.$implicit.status);l(n,2,0,t),l(n,7,0,"primary","funnel"),l(n,10,0,"Ready"==n.context.$implicit.status),l(n,12,0,"open"==n.context.$implicit.status),l(n,14,0,"True"==n.context.$implicit.Complete),l(n,16,0,"primary"),l(n,23,0,n.context.$implicit.products)}),(function(l,n){l(n,17,0,n.context.$implicit.OrderID),l(n,27,0,n.context.$implicit.username)}))}function E(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.ib(16777216,null,null,1,null,F)),u.sb(2,278528,null,0,h.l,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.PickPayOrders)}),null)}function L(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,2,"div",[["style","padding-top: -10px; margin-bottom: 60px;"]],null,null,null,null,null)),(l()(),u.ib(16777216,null,null,1,null,E)),u.sb(2,16384,null,0,h.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,!n.component.loader)}),null)}function $(l){return u.Pb(0,[u.Lb(671088640,1,{slides:0}),(l()(),u.tb(1,0,null,null,96,"ion-content",[["color","primary"]],null,[[null,"ionScroll"]],(function(l,n,t){var u=!0;return"ionScroll"===n&&(u=!1!==l.component.onScroll(t)&&u),u}),b.hb,b.k)),u.sb(2,49152,null,0,i.w,[u.h,u.k,u.z],{color:[0,"color"],scrollEvents:[1,"scrollEvents"]},null),(l()(),u.tb(3,0,null,0,50,"div",[["class","top"]],null,null,null,null,null)),(l()(),u.tb(4,0,null,null,13,"ion-toolbar",[["color","primary"]],null,null,null,b.Tb,b.W)),u.sb(5,49152,null,0,i.Eb,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.tb(6,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,b.bb,b.e)),u.sb(7,49152,null,0,i.n,[u.h,u.k,u.z],null,null),(l()(),u.tb(8,0,null,0,1,"ion-menu-button",[],null,null,null,b.yb,b.C)),u.sb(9,49152,null,0,i.T,[u.h,u.k,u.z],null,null),(l()(),u.tb(10,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,b.bb,b.e)),u.sb(11,49152,null,0,i.n,[u.h,u.k,u.z],null,null),(l()(),u.tb(12,0,null,0,1,"ion-icon",[["name","search"],["size","small"],["style","width: 23px; height: 23px; margin-top: 10px; margin-right: 10px;"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.showsearch()&&u),u}),b.ob,b.r)),u.sb(13,49152,null,0,i.E,[u.h,u.k,u.z],{name:[0,"name"],size:[1,"size"]},null),(l()(),u.ib(16777216,null,0,1,null,y)),u.sb(15,16384,null,0,h.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.ib(16777216,null,0,1,null,m)),u.sb(17,16384,null,0,h.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.tb(18,0,null,null,35,"div",[],null,null,null,null,null)),(l()(),u.tb(19,0,null,null,34,"ion-row",[],null,null,null,b.Cb,b.F)),u.sb(20,49152,null,0,i.lb,[u.h,u.k,u.z],null,null),(l()(),u.tb(21,0,null,0,10,"ion-col",[["class","main-nav"],["size","4"],["tappable",""]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.stock()&&u),u}),b.gb,b.j)),u.sb(22,49152,null,0,i.v,[u.h,u.k,u.z],{size:[0,"size"]},null),(l()(),u.tb(23,0,null,0,8,"ion-card",[["class","card"]],null,null,null,b.eb,b.f)),u.sb(24,49152,null,0,i.o,[u.h,u.k,u.z],null,null),(l()(),u.tb(25,0,null,0,3,"ion-card-title",[],null,null,null,b.db,b.h)),u.sb(26,49152,null,0,i.s,[u.h,u.k,u.z],null,null),(l()(),u.tb(27,0,null,0,1,"ion-icon",[["color","primary"],["name","pricetags"]],null,null,null,b.ob,b.r)),u.sb(28,49152,null,0,i.E,[u.h,u.k,u.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),u.tb(29,0,null,0,2,"label",[["text-center",""]],null,null,null,null,null)),u.sb(30,16384,null,0,i.f,[u.k],null,null),(l()(),u.Nb(-1,null,["Stock"])),(l()(),u.tb(32,0,null,0,10,"ion-col",[["class","main-nav"],["size","4"],["tappable",""]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.sales()&&u),u}),b.gb,b.j)),u.sb(33,49152,null,0,i.v,[u.h,u.k,u.z],{size:[0,"size"]},null),(l()(),u.tb(34,0,null,0,8,"ion-card",[["class","card"]],null,null,null,b.eb,b.f)),u.sb(35,49152,null,0,i.o,[u.h,u.k,u.z],null,null),(l()(),u.tb(36,0,null,0,3,"ion-card-title",[],null,null,null,b.db,b.h)),u.sb(37,49152,null,0,i.s,[u.h,u.k,u.z],null,null),(l()(),u.tb(38,0,null,0,1,"ion-icon",[["color","primary"],["name","pulse"]],null,null,null,b.ob,b.r)),u.sb(39,49152,null,0,i.E,[u.h,u.k,u.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),u.tb(40,0,null,0,2,"label",[["text-center",""]],null,null,null,null,null)),u.sb(41,16384,null,0,i.f,[u.k],null,null),(l()(),u.Nb(-1,null,["Sales"])),(l()(),u.tb(43,0,null,0,10,"ion-col",[["class","main-nav"],["size","4"],["tappable",""]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.orders()&&u),u}),b.gb,b.j)),u.sb(44,49152,null,0,i.v,[u.h,u.k,u.z],{size:[0,"size"]},null),(l()(),u.tb(45,0,null,0,8,"ion-card",[["class","card"]],null,null,null,b.eb,b.f)),u.sb(46,49152,null,0,i.o,[u.h,u.k,u.z],null,null),(l()(),u.tb(47,0,null,0,3,"ion-card-title",[],null,null,null,b.db,b.h)),u.sb(48,49152,null,0,i.s,[u.h,u.k,u.z],null,null),(l()(),u.tb(49,0,null,0,1,"ion-icon",[["color","primary"],["name","podium"]],null,null,null,b.ob,b.r)),u.sb(50,49152,null,0,i.E,[u.h,u.k,u.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),u.tb(51,0,null,0,2,"label",[["text-center",""]],null,null,null,null,null)),u.sb(52,16384,null,0,i.f,[u.k],null,null),(l()(),u.Nb(-1,null,["Orders"])),(l()(),u.tb(54,0,null,0,43,"div",[["class","body"],["style","background-color: white;"]],null,null,null,null,null)),(l()(),u.tb(55,0,null,null,13,"div",[],null,null,null,null,null)),(l()(),u.tb(56,0,null,null,12,"div",[["style","width: 100%; color: #737373; padding-left: 15px; padding-right: 15px; padding-top: 10px;"]],null,null,null,null,null)),(l()(),u.tb(57,0,null,null,7,"div",[["style","margin-top: 5px; margin-bottom: 15px; font-size: 15px;"]],null,null,null,null,null)),(l()(),u.tb(58,0,null,null,1,"div",[["style","margin-left: 5px"]],null,null,null,null,null)),(l()(),u.Nb(-1,null,["My shop performance for this month"])),(l()(),u.tb(60,0,null,null,4,"div",[["style","color: var(--ion-color-warning); position: absolute; float: right; right: 20px; margin-top: -17px;padding: 5px;"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.allOrders()&&u),u}),null,null)),u.Kb(512,null,h.t,h.u,[u.s,u.t,u.k,u.D]),u.sb(62,278528,null,0,h.k,[h.t],{ngClass:[0,"ngClass"]},null),u.Ib(63,{active:0}),(l()(),u.Nb(-1,null,["All orders"])),(l()(),u.tb(65,0,null,null,3,"ion-slides",[["pager","false"]],null,null,null,b.Kb,b.N)),u.sb(66,49152,[[1,4],["slide",4]],0,i.tb,[u.h,u.k,u.z],{options:[0,"options"],pager:[1,"pager"]},null),(l()(),u.ib(16777216,null,0,1,null,v)),u.sb(68,278528,null,0,h.l,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u.tb(69,0,null,null,19,"ion-segment",[["style","background-color: white; padding-top: 7px;"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,t){var e=!0,o=l.component;return"ionBlur"===n&&(e=!1!==u.Fb(l,72)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Fb(l,72)._handleChangeEvent(t.target)&&e),"ionChange"===n&&(e=!1!==o.changeCategory(t)&&e),e}),b.Fb,b.H)),u.Kb(5120,null,p.m,(function(l){return[l]}),[i.Rb]),u.sb(71,49152,null,0,i.nb,[u.h,u.k,u.z],null,null),u.sb(72,16384,null,0,i.Rb,[u.k],null,null),(l()(),u.tb(73,0,null,0,7,"ion-segment-button",[["checked",""],["value","delivery"]],null,null,null,b.Eb,b.I)),u.sb(74,49152,null,0,i.ob,[u.h,u.k,u.z],{checked:[0,"checked"],value:[1,"value"]},null),(l()(),u.tb(75,0,null,0,2,"ion-badge",[["class","ion-float-right"]],null,null,null,b.Z,b.c)),u.sb(76,49152,null,0,i.l,[u.h,u.k,u.z],null,null),(l()(),u.Nb(77,0,["",""])),(l()(),u.tb(78,0,null,0,2,"ion-label",[["style","font-size: 12px; margin-top: 10px; margin-bottom: 2px;"]],null,null,null,b.wb,b.z)),u.sb(79,49152,null,0,i.P,[u.h,u.k,u.z],null,null),(l()(),u.Nb(-1,0,["Deliveries"])),(l()(),u.tb(81,0,null,0,7,"ion-segment-button",[["value","pick&pay"]],null,null,null,b.Eb,b.I)),u.sb(82,49152,null,0,i.ob,[u.h,u.k,u.z],{value:[0,"value"]},null),(l()(),u.tb(83,0,null,0,2,"ion-badge",[["class","ion-float-right"]],null,null,null,b.Z,b.c)),u.sb(84,49152,null,0,i.l,[u.h,u.k,u.z],null,null),(l()(),u.Nb(85,0,["",""])),(l()(),u.tb(86,0,null,0,2,"ion-label",[["style","font-size: 12px; margin-top: 10px; margin-bottom: 2px;"]],null,null,null,b.wb,b.z)),u.sb(87,49152,null,0,i.P,[u.h,u.k,u.z],null,null),(l()(),u.Nb(-1,0,["Pay & Collect"])),(l()(),u.ib(16777216,null,null,1,null,k)),u.sb(90,16384,null,0,h.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.ib(16777216,null,null,1,null,O)),u.sb(92,16384,null,0,h.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.tb(93,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.ib(16777216,null,null,1,null,I)),u.sb(95,16384,null,0,h.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.ib(16777216,null,null,1,null,L)),u.sb(97,16384,null,0,h.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,2,0,"primary",!0),l(n,5,0,"primary"),l(n,13,0,"search","small"),l(n,15,0,t.search),l(n,17,0,!t.search),l(n,22,0,"4"),l(n,28,0,"primary","pricetags"),l(n,33,0,"4"),l(n,39,0,"primary","pulse"),l(n,44,0,"4"),l(n,50,0,"primary","podium");var u=l(n,63,0,t.allOrd);l(n,62,0,u),l(n,66,0,t.slideOptions,"false"),l(n,68,0,t.daysOfCurrentMonth),l(n,74,0,"","delivery"),l(n,82,0,"pick&pay"),l(n,90,0,t.loader),l(n,92,0,0==t.Myorders.length),l(n,95,0,"Deliveries"===t.active),l(n,97,0,"PickPay"===t.active)}),(function(l,n){var t=n.component;l(n,77,0,t.Deliverycount),l(n,85,0,t.PickPayCount)}))}function S(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,1,"app-dashboard",[],null,null,null,$,g)),u.sb(1,114688,null,0,s,[d.a,f.m,o.a,i.Kb,r.a],null,null)],(function(l,n){l(n,1,0)}),null)}var R=u.pb("app-dashboard",s,S,{},{},[]);t.d(n,"DashboardPageModuleNgFactory",(function(){return _}));var _=u.qb(a,[],(function(l){return u.Cb([u.Db(512,u.j,u.bb,[[8,[c.a,R]],[3,u.j],u.x]),u.Db(4608,h.o,h.n,[u.u,[2,h.w]]),u.Db(4608,p.y,p.y,[]),u.Db(4608,i.c,i.c,[u.z,u.g]),u.Db(4608,i.Kb,i.Kb,[i.c,u.j,u.q]),u.Db(4608,i.Pb,i.Pb,[i.c,u.j,u.q]),u.Db(1073742336,h.c,h.c,[]),u.Db(1073742336,p.x,p.x,[]),u.Db(1073742336,p.j,p.j,[]),u.Db(1073742336,i.Gb,i.Gb,[]),u.Db(1073742336,f.o,f.o,[[2,f.t],[2,f.m]]),u.Db(1073742336,a,a,[]),u.Db(1024,f.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);