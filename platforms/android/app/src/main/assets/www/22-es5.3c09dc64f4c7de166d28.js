(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{THFJ:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=u("mrSG"),e=u("YWyl"),r=u("c92J"),i=u("ZZ/e"),c=u("bR2Y"),b=u("hnS/"),a=function(){function l(l,n,u,t,o){this.service=l,this.navCtrl=n,this.db=u,this.modal=t,this.call=o,this.top="past",this.open=!1,this.past=!0,this.ready=!0,this.canceled=!1,this.myOpenOrders=[],this.CanceledOrders=[],this.ReadyOrders=[],this.OpenOrderForFilter=[],this.TotalPastOrders=0,this.TotalOpenOrders=0,this.loader=!0,this.service.hiddenTabs=!0}return l.prototype.ionViewWillEnter=function(){this.shopname=this.db.getshopname(),console.log(this.shopname),this.getOpenOrders(),this.getcanceledOrders(),this.getreadyOders()},l.prototype.ngOnInit=function(){},l.prototype.home=function(){this.service.hiddenTabs=!1,this.navCtrl.navigate(["tabs/dashboard"])},l.prototype.DaysegmentChanged=function(l){switch(l.detail.value){case"Today":case"Mon":case"Tue":case"Wed":case"Thur":case"Fri":case"Sat":case"Sun":this.filterOpenOders(l.detail.value),console.log(l.detail.value)}},l.prototype.TopsegmentChanged=function(l){switch(l.detail.value){case"canceled":this.past=!0,this.ready=!1,this.canceled=!0,console.log(l.detail.value);break;case"ready":this.past=!0,this.ready=!0,this.canceled=!1,console.log(l.detail.value)}},l.prototype.openOrders=function(){"open"!==this.top&&(this.top="open",this.open=!0,this.past=!1,this.canceled=!1,this.ready=!1,this.filterOpenOders("Today"))},l.prototype.pastOrders=function(){"past"!==this.top&&(this.top="past",this.open=!1,this.past=!0,this.ready=!0)},l.prototype.getOpenOrders=function(){var l=this;this.service.getOpenOders(this.shopname).valueChanges().subscribe((function(n){l.myOpenOrders=n,l.OpenOrderForFilter=n,l.TotalOpenOrders=l.myOpenOrders.length,l.loader=!1,console.log("open orders"+l.myOpenOrders)}))},l.prototype.getcanceledOrders=function(){var l=this;this.service.getCanceledOrders(this.shopname).valueChanges().subscribe((function(n){l.CanceledOrders=n,l.loader=!1,console.log("canceled orders"+l.CanceledOrders)}))},l.prototype.getreadyOders=function(){var l=this;this.service.getReadyOrders(this.shopname).valueChanges().subscribe((function(n){l.ReadyOrders=n,l.loader=!1,l.TotalPastOrders=l.ReadyOrders.length+l.CanceledOrders.length,console.log("ready orders"+l.ReadyOrders)}))},l.prototype.filterOpenOders=function(l){var n=[];this.OpenOrderForFilter.forEach((function(u){u.pickDay===l&&n.push(u)})),this.loader=!1,this.myOpenOrders=n},l.prototype.showMore=function(l){var n=this;l.show=!0,this.service.getNumber(l.userID).subscribe((function(l){n.CustomerNumber=l.phone,console.log("number",n.CustomerNumber)}))},l.prototype.showLess=function(l){l.show=!1,console.log("less")},l.prototype.viewOrder=function(l){return o.__awaiter(this,void 0,void 0,(function(){var n;return o.__generator(this,(function(u){switch(u.label){case 0:return l.phone=this.CustomerNumber,[4,this.modal.create({component:c.a,componentProps:l})];case 1:return n=u.sent(),console.log(l),[4,n.present()];case 2:return u.sent(),[2]}}))}))},l.prototype.callCustomer=function(){var l=this.CustomerNumber.toString();this.call.callNumber(l,!0).then((function(l){return console.log("Launched dialer!",l)})).catch((function(l){return console.log("Error launching dialer",l)}))},l}(),s=function(){return function(){}}(),p=u("pMnS"),m=u("oBZk"),d=u("gIcY"),f=u("Ip0R"),h=u("ZYCi"),g=t.rb({encapsulation:0,styles:[["ion-card[_ngcontent-%COMP%]{border-radius:15px;text-align:center;padding:10px 20px}.card-main[_ngcontent-%COMP%]{color:var(--ion-color-medium);background-color:#fff;border-radius:20px 20px 0 0;width:100%;position:fixed;bottom:0;top:100px;overflow-y:scroll}.top[_ngcontent-%COMP%]{text-align:center}.top[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-weight:bolder;font-size:2em}.top[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-weight:700}.active[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.pick[_ngcontent-%COMP%]{color:var(--ion-color-success);text-transform:capitalize}.ready[_ngcontent-%COMP%]{background-color:#06b7f13d}.openOrder[_ngcontent-%COMP%]{position:fixed;bottom:0;overflow-y:scroll;width:100%;top:35%}@media only screen and (max-width:320px){.openOrder[_ngcontent-%COMP%]{top:35%}}"]],data:{}});function y(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,43,"ion-segment",[["scrollable",""],["style","background-color: white; margin-top: -15px;"]],null,[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var o=!0,e=l.component;return"ionBlur"===n&&(o=!1!==t.Fb(l,3)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Fb(l,3)._handleChangeEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.DaysegmentChanged(u)&&o),o}),m.vb,m.C)),t.Jb(5120,null,d.l,(function(l){return[l]}),[i.Rb]),t.sb(2,49152,null,0,i.nb,[t.h,t.k,t.z],{scrollable:[0,"scrollable"]},null),t.sb(3,16384,null,0,i.Rb,[t.k],null,null),(l()(),t.tb(4,0,null,0,4,"ion-segment-button",[["checked",""],["value","Today"]],null,null,null,m.ub,m.D)),t.sb(5,49152,null,0,i.ob,[t.h,t.k,t.z],{checked:[0,"checked"],value:[1,"value"]},null),(l()(),t.tb(6,0,null,0,2,"ion-label",[["style","font-size: 12px; margin-bottom: -5px;"]],null,null,null,m.nb,m.v)),t.sb(7,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["Today"])),(l()(),t.tb(9,0,null,0,4,"ion-segment-button",[["value","Mon"]],null,null,null,m.ub,m.D)),t.sb(10,49152,null,0,i.ob,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.tb(11,0,null,0,2,"ion-label",[["style","font-size: 12px; margin-bottom: -5px;"]],null,null,null,m.nb,m.v)),t.sb(12,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["Mon"])),(l()(),t.tb(14,0,null,0,4,"ion-segment-button",[["value","Tue"]],null,null,null,m.ub,m.D)),t.sb(15,49152,null,0,i.ob,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.tb(16,0,null,0,2,"ion-label",[["style","font-size: 12px; margin-bottom: -5px; padding-right: -15px;"]],null,null,null,m.nb,m.v)),t.sb(17,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["Tue"])),(l()(),t.tb(19,0,null,0,4,"ion-segment-button",[["value","Wed"]],null,null,null,m.ub,m.D)),t.sb(20,49152,null,0,i.ob,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.tb(21,0,null,0,2,"ion-label",[["style","font-size: 12px; margin-bottom: -5px;"]],null,null,null,m.nb,m.v)),t.sb(22,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["Wed"])),(l()(),t.tb(24,0,null,0,4,"ion-segment-button",[["value","Thur"]],null,null,null,m.ub,m.D)),t.sb(25,49152,null,0,i.ob,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.tb(26,0,null,0,2,"ion-label",[["style","font-size: 12px; margin-bottom: -5px;"]],null,null,null,m.nb,m.v)),t.sb(27,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["Thur"])),(l()(),t.tb(29,0,null,0,4,"ion-segment-button",[["value","Fri"]],null,null,null,m.ub,m.D)),t.sb(30,49152,null,0,i.ob,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.tb(31,0,null,0,2,"ion-label",[["style","font-size: 12px; margin-bottom: -5px;"]],null,null,null,m.nb,m.v)),t.sb(32,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["Fri"])),(l()(),t.tb(34,0,null,0,4,"ion-segment-button",[["value","Sat"]],null,null,null,m.ub,m.D)),t.sb(35,49152,null,0,i.ob,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.tb(36,0,null,0,2,"ion-label",[["style","font-size: 12px; margin-bottom: -5px;"]],null,null,null,m.nb,m.v)),t.sb(37,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["Sat"])),(l()(),t.tb(39,0,null,0,4,"ion-segment-button",[["value","Sun"]],null,null,null,m.ub,m.D)),t.sb(40,49152,null,0,i.ob,[t.h,t.k,t.z],{value:[0,"value"]},null),(l()(),t.tb(41,0,null,0,2,"ion-label",[["style","font-size: 12px; margin-bottom: -5px;"]],null,null,null,m.nb,m.v)),t.sb(42,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["Sun"]))],(function(l,n){l(n,2,0,""),l(n,5,0,"","Today"),l(n,10,0,"Mon"),l(n,15,0,"Tue"),l(n,20,0,"Wed"),l(n,25,0,"Thur"),l(n,30,0,"Fri"),l(n,35,0,"Sat"),l(n,40,0,"Sun")}),null)}function O(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,3,"div",[["style","padding-top: 50px;text-align: center;"],["text-center",""]],null,null,null,null,null)),t.sb(1,16384,null,0,i.f,[t.k],null,null),(l()(),t.tb(2,0,null,null,1,"ion-spinner",[["class","loader"],["color","primary"],["name","lines"]],null,null,null,m.Bb,m.J)),t.sb(3,49152,null,0,i.ub,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,3,0,"primary","lines")}),null)}function v(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,3,"div",[["style","padding-top: 130px;text-align: center;"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,2,"ion-label",[["style","font-size: 13px; color: #737373;"]],null,null,null,m.nb,m.v)),t.sb(2,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["No Order is due Today"]))],null,null)}function k(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,2,"ion-label",[],null,null,null,m.nb,m.v)),t.sb(1,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(2,0,["",", "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.product)}))}function x(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,15,"div",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,1,"ion-icon",[["color","primary"],["name","funnel"],["style","float: left;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showMore(l.parent.context.$implicit)&&t),t}),m.ib,m.q)),t.sb(2,49152,null,0,i.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.tb(3,0,null,null,2,"ion-label",[["color","primary"],["style","float: right; font-size: 13px;"]],null,null,null,m.nb,m.v)),t.sb(4,49152,null,0,i.P,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Mb(5,0,["",""])),(l()(),t.tb(6,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(7,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(8,0,null,null,4,"div",[["style","text-align:start;"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,[" Order for "])),(l()(),t.ib(16777216,null,null,1,null,k)),t.sb(11,278528,null,0,f.l,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Mb(-1,null,[" ... "])),(l()(),t.tb(13,0,null,null,1,"span",[["style","float: left;margin-top: 10px;"]],null,null,null,null,null)),(l()(),t.Mb(14,null,[" "," "])),(l()(),t.tb(15,0,null,null,0,"span",[["style","float: right;bottom:0;margin-top: 10px;"]],null,null,null,null,null))],(function(l,n){l(n,2,0,"primary","funnel"),l(n,4,0,"primary"),l(n,11,0,n.parent.context.$implicit.products)}),(function(l,n){l(n,5,0,n.parent.context.$implicit.OrderID),l(n,14,0,n.parent.context.$implicit.username)}))}function z(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,10,"ion-row",[],null,null,null,m.sb,m.A)),t.sb(1,49152,null,0,i.lb,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,2,"ion-col",[],null,null,null,m.bb,m.j)),t.sb(3,49152,null,0,i.v,[t.h,t.k,t.z],null,null),(l()(),t.Mb(4,0,[" "," "])),(l()(),t.tb(5,0,null,0,2,"ion-col",[],null,null,null,m.bb,m.j)),t.sb(6,49152,null,0,i.v,[t.h,t.k,t.z],null,null),(l()(),t.Mb(7,0,[" "," "])),(l()(),t.tb(8,0,null,0,2,"ion-col",[],null,null,null,m.bb,m.j)),t.sb(9,49152,null,0,i.v,[t.h,t.k,t.z],null,null),(l()(),t.Mb(10,0,["",""]))],null,(function(l,n){l(n,4,0,n.context.$implicit.product),l(n,7,0,n.context.$implicit.currentprice),l(n,10,0,n.context.$implicit.quantity)}))}function M(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,24,"div",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,7,"ion-card-title",[["style"," font-size: 15px; color: var(--ion-color-primary);"],["text-center",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showLess(l.parent.context.$implicit)&&t),t}),m.Y,m.h)),t.sb(2,49152,null,0,i.s,[t.h,t.k,t.z],null,null),t.sb(3,16384,null,0,i.f,[t.k],null,null),(l()(),t.tb(4,0,null,0,1,"ion-icon",[["color","primary"],["name","arrow-dropup"],["style","float: left;"]],null,null,null,m.ib,m.q)),t.sb(5,49152,null,0,i.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.Mb(6,0,[" ",""])),(l()(),t.tb(7,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Mb(8,0,[""," "])),(l()(),t.tb(9,0,null,null,15,"ion-card-content",[],null,null,null,m.X,m.g)),t.sb(10,49152,null,0,i.p,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,z)),t.sb(12,278528,null,0,f.l,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(13,0,null,0,11,"ion-row",[],null,null,null,m.sb,m.A)),t.sb(14,49152,null,0,i.lb,[t.h,t.k,t.z],null,null),(l()(),t.tb(15,0,null,0,9,"ion-col",[],null,null,null,m.bb,m.j)),t.sb(16,49152,null,0,i.v,[t.h,t.k,t.z],null,null),(l()(),t.tb(17,0,null,0,3,"span",[["style","float: left;bottom:0;margin-top: 10px;color:var(--ion-color-primary);font-weight: bold;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.viewOrder(l.parent.context.$implicit)&&t),t}),null,null)),(l()(),t.tb(18,0,null,null,2,"ion-label",[],null,null,null,m.nb,m.v)),t.sb(19,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["View more ..."])),(l()(),t.tb(21,0,null,0,3,"span",[["style","float: right;bottom:0;margin-top: 10px;color:var(--ion-color-primary)"]],null,null,null,null,null)),(l()(),t.tb(22,0,null,null,2,"span",[["class","pick"]],null,null,null,null,null)),(l()(),t.Mb(23,null,["",""])),t.Ib(24,2)],(function(l,n){l(n,5,0,"primary","arrow-dropup"),l(n,12,0,n.parent.context.$implicit.products)}),(function(l,n){l(n,6,0,n.parent.context.$implicit.OrderID),l(n,8,0,n.parent.context.$implicit.username);var u=t.Nb(n,23,0,l(n,24,0,t.Fb(n.parent.parent.parent,0),n.parent.context.$implicit.Date.toDate(),"dd/MM/yyyy"));l(n,23,0,u)}))}function w(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,6,"ion-card",[["padding",""],["style","background-color: white;"]],null,null,null,m.Z,m.f)),t.sb(1,49152,null,0,i.o,[t.h,t.k,t.z],null,null),t.sb(2,16384,null,0,i.f,[t.k],null,null),(l()(),t.ib(16777216,null,0,1,null,x)),t.sb(4,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,0,1,null,M)),t.sb(6,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,4,0,!n.context.$implicit.show),l(n,6,0,n.context.$implicit.show)}),null)}function $(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,O)),t.sb(2,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,v)),t.sb(4,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,w)),t.sb(6,278528,null,0,f.l,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,2,0,u.loader),l(n,4,0,0==u.ReadyOrders.length),l(n,6,0,u.ReadyOrders)}),null)}function I(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,3,"div",[["style","padding-top: 50px;text-align: center;"],["text-center",""]],null,null,null,null,null)),t.sb(1,16384,null,0,i.f,[t.k],null,null),(l()(),t.tb(2,0,null,null,1,"ion-spinner",[["class","loader"],["color","primary"],["name","lines"]],null,null,null,m.Bb,m.J)),t.sb(3,49152,null,0,i.ub,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,3,0,"primary","lines")}),null)}function C(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,3,"div",[["style","padding-top: 130px;text-align: center;"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,2,"ion-label",[["color","medium"]],null,null,null,m.nb,m.v)),t.sb(2,49152,null,0,i.P,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Mb(-1,0,["No Order is due Today"]))],(function(l,n){l(n,2,0,"medium")}),null)}function D(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,2,"ion-label",[],null,null,null,m.nb,m.v)),t.sb(1,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(2,0,["",", "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.product)}))}function P(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,18,"div",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,1,"ion-icon",[["color","primary"],["name","funnel"],["style","float: left;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showMore(l.parent.context.$implicit)&&t),t}),m.ib,m.q)),t.sb(2,49152,null,0,i.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.tb(3,0,null,null,2,"ion-label",[["color","primary"],["style","float: right;"]],null,null,null,m.nb,m.v)),t.sb(4,49152,null,0,i.P,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Mb(5,0,["",""])),(l()(),t.tb(6,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(7,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(8,0,null,null,4,"div",[["style","text-align:start;"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,[" Order for "])),(l()(),t.ib(16777216,null,null,1,null,D)),t.sb(11,278528,null,0,f.l,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Mb(-1,null,[" ... "])),(l()(),t.tb(13,0,null,null,1,"span",[["style","float: left;margin-top: 10px;"]],null,null,null,null,null)),(l()(),t.Mb(14,null,[" "," "])),(l()(),t.tb(15,0,null,null,3,"span",[["style","float: right;bottom:0;margin-top: 10px;"]],null,null,null,null,null)),(l()(),t.tb(16,0,null,null,2,"span",[["class","pick"]],null,null,null,null,null)),(l()(),t.Mb(17,null,["",""])),t.Ib(18,2)],(function(l,n){l(n,2,0,"primary","funnel"),l(n,4,0,"primary"),l(n,11,0,n.parent.context.$implicit.products)}),(function(l,n){l(n,5,0,n.parent.context.$implicit.OrderID),l(n,14,0,n.parent.context.$implicit.username);var u=t.Nb(n,17,0,l(n,18,0,t.Fb(n.parent.parent.parent,0),n.parent.context.$implicit.Date.toDate(),"dd/MM/yyyy"));l(n,17,0,u)}))}function F(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,10,"ion-row",[],null,null,null,m.sb,m.A)),t.sb(1,49152,null,0,i.lb,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,2,"ion-col",[],null,null,null,m.bb,m.j)),t.sb(3,49152,null,0,i.v,[t.h,t.k,t.z],null,null),(l()(),t.Mb(4,0,[" "," "])),(l()(),t.tb(5,0,null,0,2,"ion-col",[],null,null,null,m.bb,m.j)),t.sb(6,49152,null,0,i.v,[t.h,t.k,t.z],null,null),(l()(),t.Mb(7,0,[" "," "])),(l()(),t.tb(8,0,null,0,2,"ion-col",[],null,null,null,m.bb,m.j)),t.sb(9,49152,null,0,i.v,[t.h,t.k,t.z],null,null),(l()(),t.Mb(10,0,["",""]))],null,(function(l,n){l(n,4,0,n.context.$implicit.product),l(n,7,0,n.context.$implicit.currentprice),l(n,10,0,n.context.$implicit.quantity)}))}function L(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,24,"div",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,7,"ion-card-title",[["text-center",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showLess(l.parent.context.$implicit)&&t),t}),m.Y,m.h)),t.sb(2,49152,null,0,i.s,[t.h,t.k,t.z],null,null),t.sb(3,16384,null,0,i.f,[t.k],null,null),(l()(),t.tb(4,0,null,0,1,"ion-icon",[["color","primary"],["name","arrow-dropup"],["style","float: left;"]],null,null,null,m.ib,m.q)),t.sb(5,49152,null,0,i.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.Mb(6,0,[" ",""])),(l()(),t.tb(7,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Mb(8,0,[""," "])),(l()(),t.tb(9,0,null,null,15,"ion-card-content",[],null,null,null,m.X,m.g)),t.sb(10,49152,null,0,i.p,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,F)),t.sb(12,278528,null,0,f.l,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(13,0,null,0,11,"ion-row",[],null,null,null,m.sb,m.A)),t.sb(14,49152,null,0,i.lb,[t.h,t.k,t.z],null,null),(l()(),t.tb(15,0,null,0,9,"ion-col",[],null,null,null,m.bb,m.j)),t.sb(16,49152,null,0,i.v,[t.h,t.k,t.z],null,null),(l()(),t.tb(17,0,null,0,3,"span",[["style","float: left;bottom:0;margin-top: 10px;color:var(--ion-color-primary);font-weight: bold;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.viewOrder(l.parent.context.$implicit)&&t),t}),null,null)),(l()(),t.tb(18,0,null,null,2,"ion-label",[],null,null,null,m.nb,m.v)),t.sb(19,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["View more ..."])),(l()(),t.tb(21,0,null,0,3,"span",[["style","float: right;bottom:0;margin-top: 10px;color:var(--ion-color-primary)"]],null,null,null,null,null)),(l()(),t.tb(22,0,null,null,2,"span",[["class","pick"]],null,null,null,null,null)),(l()(),t.Mb(23,null,["",""])),t.Ib(24,2)],(function(l,n){l(n,5,0,"primary","arrow-dropup"),l(n,12,0,n.parent.context.$implicit.products)}),(function(l,n){l(n,6,0,n.parent.context.$implicit.OrderID),l(n,8,0,n.parent.context.$implicit.username);var u=t.Nb(n,23,0,l(n,24,0,t.Fb(n.parent.parent.parent,0),n.parent.context.$implicit.Date.toDate(),"dd/MM/yyyy"));l(n,23,0,u)}))}function T(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,6,"ion-card",[["padding",""],["style","background-color: white;"]],null,null,null,m.Z,m.f)),t.sb(1,49152,null,0,i.o,[t.h,t.k,t.z],null,null),t.sb(2,16384,null,0,i.f,[t.k],null,null),(l()(),t.ib(16777216,null,0,1,null,P)),t.sb(4,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,0,1,null,L)),t.sb(6,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,4,0,!n.context.$implicit.show),l(n,6,0,n.context.$implicit.show)}),null)}function j(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,I)),t.sb(2,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,C)),t.sb(4,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,T)),t.sb(6,278528,null,0,f.l,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,2,0,u.loader),l(n,4,0,0==u.CanceledOrders.length),l(n,6,0,u.CanceledOrders)}),null)}function _(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,3,"div",[["style","padding-top: 50px;text-align: center;"],["text-center",""]],null,null,null,null,null)),t.sb(1,16384,null,0,i.f,[t.k],null,null),(l()(),t.tb(2,0,null,null,1,"ion-spinner",[["class","loader"],["color","primary"],["name","lines"]],null,null,null,m.Bb,m.J)),t.sb(3,49152,null,0,i.ub,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,3,0,"primary","lines")}),null)}function q(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,2,"div",[["style","padding-top: 130px;text-align: center;"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,1,"div",[["style","color: #737373; font-size: 13px;"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["No Order is due Today"]))],null,null)}function E(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,2,"ion-label",[["color","success"]],null,null,null,m.nb,m.v)),t.sb(1,49152,null,0,i.P,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Mb(-1,0,["Ready"]))],(function(l,n){l(n,1,0,"success")}),null)}function N(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,2,"ion-label",[],null,null,null,m.nb,m.v)),t.sb(1,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(2,0,["",", "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.product)}))}function R(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,1,"span",[["class","pick"]],null,null,null,null,null)),(l()(),t.Mb(1,null,["Delivery To : "," "]))],null,(function(l,n){l(n,1,0,n.parent.parent.context.$implicit.Location)}))}function S(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,1,"span",[["class","pick"]],null,null,null,null,null)),(l()(),t.Mb(1,null,["Pick up : ",":"," ",""]))],null,(function(l,n){l(n,1,0,n.parent.parent.context.$implicit.pickHour,n.parent.parent.context.$implicit.pickMins,n.parent.parent.context.$implicit.pickDay)}))}function J(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,22,"div",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,1,"ion-icon",[["color","primary"],["name","funnel"],["style","float: left;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showMore(l.parent.context.$implicit)&&t),t}),m.ib,m.q)),t.sb(2,49152,null,0,i.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.Mb(-1,null,["\xa0 "])),(l()(),t.ib(16777216,null,null,1,null,E)),t.sb(5,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(6,0,null,null,2,"ion-label",[["color","primary"],["style","float: right;"]],null,null,null,m.nb,m.v)),t.sb(7,49152,null,0,i.P,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Mb(8,0,["",""])),(l()(),t.tb(9,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(10,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(11,0,null,null,4,"div",[["style","text-align:start;"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,[" Order for "])),(l()(),t.ib(16777216,null,null,1,null,N)),t.sb(14,278528,null,0,f.l,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Mb(-1,null,[" ... "])),(l()(),t.tb(16,0,null,null,1,"span",[["style","float: left;margin-top: 10px;"]],null,null,null,null,null)),(l()(),t.Mb(17,null,[" "," "])),(l()(),t.tb(18,0,null,null,4,"span",[["style","float: right;bottom:0;margin-top: 10px;"]],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,R)),t.sb(20,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,S)),t.sb(22,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,"primary","funnel"),l(n,5,0,"Ready"==n.parent.context.$implicit.status),l(n,7,0,"primary"),l(n,14,0,n.parent.context.$implicit.products),l(n,20,0,"Deliver it to me"==n.parent.context.$implicit.Delivery),l(n,22,0,"I will pick it"==n.parent.context.$implicit.Delivery)}),(function(l,n){l(n,8,0,n.parent.context.$implicit.OrderID),l(n,17,0,n.parent.context.$implicit.username)}))}function Z(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,10,"ion-row",[],null,null,null,m.sb,m.A)),t.sb(1,49152,null,0,i.lb,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,2,"ion-col",[],null,null,null,m.bb,m.j)),t.sb(3,49152,null,0,i.v,[t.h,t.k,t.z],null,null),(l()(),t.Mb(4,0,[" "," "])),(l()(),t.tb(5,0,null,0,2,"ion-col",[],null,null,null,m.bb,m.j)),t.sb(6,49152,null,0,i.v,[t.h,t.k,t.z],null,null),(l()(),t.Mb(7,0,[" "," "])),(l()(),t.tb(8,0,null,0,2,"ion-col",[],null,null,null,m.bb,m.j)),t.sb(9,49152,null,0,i.v,[t.h,t.k,t.z],null,null),(l()(),t.Mb(10,0,["",""]))],null,(function(l,n){l(n,4,0,n.context.$implicit.product),l(n,7,0,n.context.$implicit.currentprice),l(n,10,0,n.context.$implicit.quantity)}))}function A(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,26,"div",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,9,"ion-card-title",[["style","font-size: 15px; color: var(--ion-color-primary);"],["text-center",""]],null,null,null,m.Y,m.h)),t.sb(2,49152,null,0,i.s,[t.h,t.k,t.z],null,null),t.sb(3,16384,null,0,i.f,[t.k],null,null),(l()(),t.tb(4,0,null,0,1,"ion-icon",[["color","primary"],["name","arrow-dropup"],["style","float: left;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showLess(l.parent.context.$implicit)&&t),t}),m.ib,m.q)),t.sb(5,49152,null,0,i.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.Mb(6,0,[" ",""])),(l()(),t.tb(7,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Mb(8,0,[""," "])),(l()(),t.tb(9,0,null,0,1,"ion-icon",[["color","success"],["name","call"],["style","float: right;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.callCustomer()&&t),t}),m.ib,m.q)),t.sb(10,49152,null,0,i.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.tb(11,0,null,null,15,"ion-card-content",[],null,null,null,m.X,m.g)),t.sb(12,49152,null,0,i.p,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,Z)),t.sb(14,278528,null,0,f.l,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(15,0,null,0,11,"ion-row",[],null,null,null,m.sb,m.A)),t.sb(16,49152,null,0,i.lb,[t.h,t.k,t.z],null,null),(l()(),t.tb(17,0,null,0,9,"ion-col",[],null,null,null,m.bb,m.j)),t.sb(18,49152,null,0,i.v,[t.h,t.k,t.z],null,null),(l()(),t.tb(19,0,null,0,3,"span",[["style","float: left;bottom:0;margin-top: 10px;color:var(--ion-color-primary);font-weight: bold;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.viewOrder(l.parent.context.$implicit)&&t),t}),null,null)),(l()(),t.tb(20,0,null,null,2,"ion-label",[],null,null,null,m.nb,m.v)),t.sb(21,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["View more ..."])),(l()(),t.tb(23,0,null,0,3,"span",[["style","float: right;bottom:0;margin-top: 10px;color:var(--ion-color-primary)"]],null,null,null,null,null)),(l()(),t.tb(24,0,null,null,2,"span",[["class","pick"]],null,null,null,null,null)),(l()(),t.Mb(25,null,["",""])),t.Ib(26,2)],(function(l,n){l(n,5,0,"primary","arrow-dropup"),l(n,10,0,"success","call"),l(n,14,0,n.parent.context.$implicit.products)}),(function(l,n){l(n,6,0,n.parent.context.$implicit.OrderID),l(n,8,0,n.parent.context.$implicit.username);var u=t.Nb(n,25,0,l(n,26,0,t.Fb(n.parent.parent.parent,0),n.parent.context.$implicit.Date.toDate(),"dd/MM/yyyy"));l(n,25,0,u)}))}function B(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,6,"ion-card",[["padding",""],["style","background-color: white;"]],null,null,null,m.Z,m.f)),t.sb(1,49152,null,0,i.o,[t.h,t.k,t.z],null,null),t.sb(2,16384,null,0,i.f,[t.k],null,null),(l()(),t.ib(16777216,null,0,1,null,J)),t.sb(4,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,0,1,null,A)),t.sb(6,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,4,0,!n.context.$implicit.show),l(n,6,0,n.context.$implicit.show)}),null)}function W(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,6,"div",[["style","margin-top: 60px;"]],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,_)),t.sb(2,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,q)),t.sb(4,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,B)),t.sb(6,278528,null,0,f.l,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,2,0,u.loader),l(n,4,0,0==u.myOpenOrders.length),l(n,6,0,u.myOpenOrders)}),null)}function Y(l){return t.Ob(0,[t.Gb(0,f.e,[t.u]),(l()(),t.tb(1,0,null,null,43,"ion-content",[["color","primary"],["style","background-color: var(--ion-color-primary);"]],null,null,null,m.cb,m.k)),t.sb(2,49152,null,0,i.w,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(3,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,m.Jb,m.R)),t.sb(4,49152,null,0,i.Eb,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,m.W,m.e)),t.sb(6,49152,null,0,i.n,[t.h,t.k,t.z],null,null),(l()(),t.tb(7,0,null,0,1,"ion-icon",[["name","arrow-back"],["style","width: 20px; height: 20px; margin-left: 5px;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.home()&&t),t}),m.ib,m.q)),t.sb(8,49152,null,0,i.E,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.tb(9,0,null,0,3,"ion-title",[["style","margin-right: 10px;"],["text-center",""]],null,null,null,m.Hb,m.P)),t.sb(10,49152,null,0,i.Cb,[t.h,t.k,t.z],null,null),t.sb(11,16384,null,0,i.f,[t.k],null,null),(l()(),t.Mb(-1,0,["Order Summary"])),(l()(),t.tb(13,0,null,0,31,"div",[["class","card-main"]],null,null,null,null,null)),(l()(),t.tb(14,0,null,null,21,"ion-card",[["style","background-color: white; margin-top: 20px; border-radius: 10px 10px 10px 10px;"]],null,null,null,m.Z,m.f)),t.sb(15,49152,null,0,i.o,[t.h,t.k,t.z],null,null),(l()(),t.tb(16,0,null,0,19,"ion-row",[],null,null,null,m.sb,m.A)),t.sb(17,49152,null,0,i.lb,[t.h,t.k,t.z],null,null),(l()(),t.tb(18,0,null,0,8,"ion-col",[["class","top"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.pastOrders()&&t),t}),m.bb,m.j)),t.Jb(512,null,f.t,f.u,[t.s,t.t,t.k,t.D]),t.sb(20,278528,null,0,f.k,[f.t],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Hb(21,{active:0}),t.sb(22,49152,null,0,i.v,[t.h,t.k,t.z],null,null),(l()(),t.tb(23,0,null,0,1,"div",[["style","font-size: 18px; margin-bottom: 10px;"]],null,null,null,null,null)),(l()(),t.Mb(24,null,["",""])),(l()(),t.tb(25,0,null,0,1,"div",[["style","font-size: 14px;"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Past Orders"])),(l()(),t.tb(27,0,null,0,8,"ion-col",[["class","top"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.openOrders()&&t),t}),m.bb,m.j)),t.Jb(512,null,f.t,f.u,[t.s,t.t,t.k,t.D]),t.sb(29,278528,null,0,f.k,[f.t],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Hb(30,{active:0}),t.sb(31,49152,null,0,i.v,[t.h,t.k,t.z],null,null),(l()(),t.tb(32,0,null,0,1,"div",[["style","font-size: 18px; margin-bottom: 10px;"]],null,null,null,null,null)),(l()(),t.Mb(33,null,["",""])),(l()(),t.tb(34,0,null,0,1,"div",[["style","font-size: 14px;"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Open Orders"])),(l()(),t.ib(16777216,null,null,1,null,y)),t.sb(37,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(38,0,null,null,6,"div",[["class","openOrder"]],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,$)),t.sb(40,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,j)),t.sb(42,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,W)),t.sb(44,16384,null,0,f.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,2,0,"primary"),l(n,4,0,"primary"),l(n,8,0,"arrow-back");var t=l(n,21,0,"past"==u.top);l(n,20,0,"top",t);var o=l(n,30,0,"open"==u.top);l(n,29,0,"top",o),l(n,37,0,u.open),l(n,40,0,u.ready),l(n,42,0,u.canceled),l(n,44,0,u.open)}),(function(l,n){var u=n.component;l(n,24,0,u.TotalPastOrders),l(n,33,0,u.TotalOpenOrders)}))}function G(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,1,"app-order-stats",[],null,null,null,Y,g)),t.sb(1,114688,null,0,a,[e.a,h.m,r.a,i.Kb,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var H=t.pb("app-order-stats",a,G,{},{},[]);u.d(n,"OrderStatsPageModuleNgFactory",(function(){return V}));var V=t.qb(s,[],(function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[p.a,H]],[3,t.j],t.x]),t.Db(4608,f.o,f.n,[t.u,[2,f.w]]),t.Db(4608,d.v,d.v,[]),t.Db(4608,i.c,i.c,[t.z,t.g]),t.Db(4608,i.Kb,i.Kb,[i.c,t.j,t.q]),t.Db(4608,i.Pb,i.Pb,[i.c,t.j,t.q]),t.Db(1073742336,f.c,f.c,[]),t.Db(1073742336,d.u,d.u,[]),t.Db(1073742336,d.i,d.i,[]),t.Db(1073742336,i.Gb,i.Gb,[]),t.Db(1073742336,h.p,h.p,[[2,h.u],[2,h.m]]),t.Db(1073742336,s,s,[]),t.Db(1024,h.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);