(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{THFJ:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J"),u=t("mrSG"),o=t("YWyl"),r=t("c92J"),i=t("ZZ/e"),s=t("bR2Y"),a=t("hnS/");class c{constructor(l,n,t,e,u){this.service=l,this.navCtrl=n,this.db=t,this.modal=e,this.call=u,this.top="past",this.open=!1,this.past=!0,this.ready=!0,this.canceled=!1,this.myOpenOrders=[],this.CanceledOrders=[],this.ReadyOrders=[],this.OpenOrderForFilter=[],this.TotalPastOrders=0,this.TotalOpenOrders=0,this.loader=!0,this.date=new Date,this.service.hiddenTabs=!0,this.customPickerOptions={buttons:[{text:"Cancel",handler:()=>(console.log("Clicked Log. Do not Dismiss."),!1)},{text:"Done",handler:l=>{let n=Number(l.day.text);console.log("=====BUTTON====="),console.log(n),this.myOpenOrders=this.filterByDate(n)}}]}}ionViewWillEnter(){this.shopname=this.db.getshopname(),console.log(this.shopname),this.getOpenOrders()}ngOnInit(){}home(){this.service.hiddenTabs=!1,this.navCtrl.navigate(["tabs/dashboard"])}DaysegmentChanged(l){switch(l.detail.value){case"Today":case"Mon":case"Tue":case"Wed":case"Thur":case"Fri":case"Sat":case"Sun":this.filterOpenOders(l.detail.value),console.log(l.detail.value)}}TopsegmentChanged(l){switch(l.detail.value){case"canceled":this.past=!0,this.ready=!1,this.canceled=!0,console.log(l.detail.value);break;case"ready":this.past=!0,this.ready=!0,this.canceled=!1,console.log(l.detail.value)}}openOrders(){"open"!==this.top&&(this.top="open",this.open=!0,this.past=!1,this.canceled=!1,this.ready=!1,this.filterOpenOders("Today"))}pastOrders(){"past"!==this.top&&(this.top="past",this.open=!1,this.past=!0,this.ready=!0)}getOpenOrders(){console.log("=======TIMESTAMP===="),console.log(this.date),this.service.getReadyOrders(this.shopname).valueChanges().subscribe(l=>{this.myOpenOrders=l,this.OpenOrderForFilter=l,this.TotalOpenOrders=this.myOpenOrders.length,this.loader=!1,this.formatDate(),this.myOpenOrders=this.filterByDate(this.date.getDate()),console.log("=========FILTERING =========="),console.log(this.myOpenOrders),console.log("open orders"+this.myOpenOrders)})}formatDate(){this.OpenOrderForFilter.forEach(l=>{l.Date=l.Date.toDate().getDate()}),console.log("=== MY OPEN ORDER ====="),console.log(this.OpenOrderForFilter)}filterByDate(l){return this.OpenOrderForFilter.filter(n=>(console.log("=== CHECK DATES ====="),console.log(n.Date),console.log(l),n.Date==l))}getcanceledOrders(){this.service.getCanceledOrders(this.shopname).valueChanges().subscribe(l=>{this.CanceledOrders=l,this.loader=!1,console.log("canceled orders"+this.CanceledOrders)})}getreadyOders(){this.service.getReadyOrders(this.shopname).valueChanges().subscribe(l=>{this.ReadyOrders=l,console.log("========DATE HERE======"),console.log(l),this.loader=!1,this.TotalPastOrders=this.ReadyOrders.length+this.CanceledOrders.length,console.log("ready orders"+this.ReadyOrders)})}filterOpenOders(l){const n=[];this.OpenOrderForFilter.forEach(t=>{t.pickDay===l&&n.push(t)}),this.loader=!1,this.myOpenOrders=n}showMore(l){l.show=!0,this.service.getNumber(l.userID).subscribe(l=>{this.CustomerNumber=l.phone,console.log("number",this.CustomerNumber)})}showLess(l){l.show=!1,console.log("less")}viewOrder(l){return u.__awaiter(this,void 0,void 0,(function*(){l.phone=this.CustomerNumber;const n=yield this.modal.create({component:s.a,componentProps:{data:l}});console.log("VIEW MORE"),console.log(l),console.log("VIEW MORE"),yield n.present()}))}callCustomer(){let l=this.CustomerNumber.toString();this.call.callNumber(l,!0).then(l=>console.log("Launched dialer!",l)).catch(l=>console.log("Error launching dialer",l))}}class b{}var p=t("pMnS"),d=t("oBZk"),h=t("SVse"),m=t("s7LF"),g=t("iInd"),f=e.pb({encapsulation:0,styles:[["ion-card[_ngcontent-%COMP%]{border-radius:15px;text-align:center;padding:10px 20px}.card-main[_ngcontent-%COMP%]{color:var(--ion-color-medium);background-color:#fff;border-radius:20px 20px 0 0;width:100%;position:fixed;bottom:0;top:100px;overflow-y:scroll}.top[_ngcontent-%COMP%]{text-align:center}.top[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-weight:bolder;font-size:2em}.top[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-weight:700}.active[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.pick[_ngcontent-%COMP%]{color:var(--ion-color-success);text-transform:capitalize}.ready[_ngcontent-%COMP%]{background-color:#06b7f13d}.openOrder[_ngcontent-%COMP%]{position:fixed;bottom:0;overflow-y:scroll;width:100%;top:35%}@media only screen and (max-width:320px){.openOrder[_ngcontent-%COMP%]{top:35%}}"]],data:{}});function O(l){return e.Nb(0,[(l()(),e.rb(0,0,null,null,3,"div",[["style","padding-top: 50px;text-align: center;"],["text-center",""]],null,null,null,null,null)),e.qb(1,16384,null,0,i.f,[e.k],null,null),(l()(),e.rb(2,0,null,null,1,"ion-spinner",[["class","loader"],["color","primary"],["name","lines"]],null,null,null,d.Lb,d.O)),e.qb(3,49152,null,0,i.ub,[e.h,e.k,e.x],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,3,0,"primary","lines")}),null)}function x(l){return e.Nb(0,[(l()(),e.rb(0,0,null,null,2,"div",[["style","padding-top: 130px;text-align: center;"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,1,"div",[["style","color: #737373; font-size: 13px;"]],null,null,null,null,null)),(l()(),e.Lb(-1,null,["No Order is due Today"]))],null,null)}function y(l){return e.Nb(0,[(l()(),e.rb(0,0,null,null,2,"ion-label",[["color","success"]],null,null,null,d.wb,d.z)),e.qb(1,49152,null,0,i.P,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Lb(-1,0,["Ready"]))],(function(l,n){l(n,1,0,"success")}),null)}function k(l){return e.Nb(0,[(l()(),e.rb(0,0,null,null,2,"ion-label",[],null,null,null,d.wb,d.z)),e.qb(1,49152,null,0,i.P,[e.h,e.k,e.x],null,null),(l()(),e.Lb(2,0,["",", "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.product)}))}function v(l){return e.Nb(0,[(l()(),e.rb(0,0,null,null,1,"span",[["class","pick"]],null,null,null,null,null)),(l()(),e.Lb(1,null,["Delivery To : "," "]))],null,(function(l,n){l(n,1,0,n.parent.parent.context.$implicit.Location)}))}function q(l){return e.Nb(0,[(l()(),e.rb(0,0,null,null,1,"span",[["class","pick"]],null,null,null,null,null)),(l()(),e.Lb(1,null,["Pick up : ",":"," ",""]))],null,(function(l,n){l(n,1,0,n.parent.parent.context.$implicit.pickHour,n.parent.parent.context.$implicit.pickMins,n.parent.parent.context.$implicit.pickDay)}))}function w(l){return e.Nb(0,[(l()(),e.rb(0,0,null,null,22,"div",[],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,1,"ion-icon",[["color","primary"],["name","funnel"],["style","float: left;"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.showMore(l.parent.context.$implicit)&&e),e}),d.ob,d.r)),e.qb(2,49152,null,0,i.E,[e.h,e.k,e.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),e.Lb(-1,null,["\xa0 "])),(l()(),e.gb(16777216,null,null,1,null,y)),e.qb(5,16384,null,0,h.m,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(6,0,null,null,2,"ion-label",[["color","primary"],["style","float: right;"]],null,null,null,d.wb,d.z)),e.qb(7,49152,null,0,i.P,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Lb(8,0,["",""])),(l()(),e.rb(9,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(10,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(11,0,null,null,4,"div",[["style","text-align:start;"]],null,null,null,null,null)),(l()(),e.Lb(-1,null,[" Order for "])),(l()(),e.gb(16777216,null,null,1,null,k)),e.qb(14,278528,null,0,h.l,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Lb(-1,null,[" ... "])),(l()(),e.rb(16,0,null,null,1,"span",[["style","float: left;margin-top: 10px;"]],null,null,null,null,null)),(l()(),e.Lb(17,null,[" "," "])),(l()(),e.rb(18,0,null,null,4,"span",[["style","float: right;bottom:0;margin-top: 10px;"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,v)),e.qb(20,16384,null,0,h.m,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,null,1,null,q)),e.qb(22,16384,null,0,h.m,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,"primary","funnel"),l(n,5,0,"Ready"==n.parent.context.$implicit.status),l(n,7,0,"primary"),l(n,14,0,n.parent.context.$implicit.products),l(n,20,0,"Deliver it to me"==n.parent.context.$implicit.Delivery),l(n,22,0,"I will pick it"==n.parent.context.$implicit.Delivery)}),(function(l,n){l(n,8,0,n.parent.context.$implicit.OrderID),l(n,17,0,n.parent.context.$implicit.username)}))}function C(l){return e.Nb(0,[(l()(),e.rb(0,0,null,null,10,"ion-row",[],null,null,null,d.Cb,d.F)),e.qb(1,49152,null,0,i.lb,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,2,"ion-col",[],null,null,null,d.gb,d.j)),e.qb(3,49152,null,0,i.v,[e.h,e.k,e.x],null,null),(l()(),e.Lb(4,0,[" "," "])),(l()(),e.rb(5,0,null,0,2,"ion-col",[],null,null,null,d.gb,d.j)),e.qb(6,49152,null,0,i.v,[e.h,e.k,e.x],null,null),(l()(),e.Lb(7,0,[" "," "])),(l()(),e.rb(8,0,null,0,2,"ion-col",[],null,null,null,d.gb,d.j)),e.qb(9,49152,null,0,i.v,[e.h,e.k,e.x],null,null),(l()(),e.Lb(10,0,["",""]))],null,(function(l,n){l(n,4,0,n.context.$implicit.product),l(n,7,0,n.context.$implicit.currentprice),l(n,10,0,n.context.$implicit.quantity)}))}function D(l){return e.Nb(0,[(l()(),e.rb(0,0,null,null,26,"div",[],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,9,"ion-card-title",[["style","font-size: 15px; color: var(--ion-color-primary);"],["text-center",""]],null,null,null,d.db,d.h)),e.qb(2,49152,null,0,i.s,[e.h,e.k,e.x],null,null),e.qb(3,16384,null,0,i.f,[e.k],null,null),(l()(),e.rb(4,0,null,0,1,"ion-icon",[["color","primary"],["name","arrow-dropup"],["style","float: left;"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.showLess(l.parent.context.$implicit)&&e),e}),d.ob,d.r)),e.qb(5,49152,null,0,i.E,[e.h,e.k,e.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),e.Lb(6,0,[" ",""])),(l()(),e.rb(7,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Lb(8,0,[""," "])),(l()(),e.rb(9,0,null,0,1,"ion-icon",[["color","success"],["name","call"],["style","float: right;"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.callCustomer()&&e),e}),d.ob,d.r)),e.qb(10,49152,null,0,i.E,[e.h,e.k,e.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),e.rb(11,0,null,null,15,"ion-card-content",[],null,null,null,d.cb,d.g)),e.qb(12,49152,null,0,i.p,[e.h,e.k,e.x],null,null),(l()(),e.gb(16777216,null,0,1,null,C)),e.qb(14,278528,null,0,h.l,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.rb(15,0,null,0,11,"ion-row",[],null,null,null,d.Cb,d.F)),e.qb(16,49152,null,0,i.lb,[e.h,e.k,e.x],null,null),(l()(),e.rb(17,0,null,0,9,"ion-col",[],null,null,null,d.gb,d.j)),e.qb(18,49152,null,0,i.v,[e.h,e.k,e.x],null,null),(l()(),e.rb(19,0,null,0,3,"span",[["style","float: left;bottom:0;margin-top: 10px;color:var(--ion-color-primary);font-weight: bold;"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.viewOrder(l.parent.context.$implicit)&&e),e}),null,null)),(l()(),e.rb(20,0,null,null,2,"ion-label",[],null,null,null,d.wb,d.z)),e.qb(21,49152,null,0,i.P,[e.h,e.k,e.x],null,null),(l()(),e.Lb(-1,0,["View more"])),(l()(),e.rb(23,0,null,0,3,"span",[["style","float: right;bottom:0;margin-top: 10px;color:var(--ion-color-primary)"]],null,null,null,null,null)),(l()(),e.rb(24,0,null,null,2,"span",[["class","pick"]],null,null,null,null,null)),(l()(),e.Lb(25,null,["",""])),e.Hb(26,2)],(function(l,n){l(n,5,0,"primary","arrow-dropup"),l(n,10,0,"success","call"),l(n,14,0,n.parent.context.$implicit.products)}),(function(l,n){l(n,6,0,n.parent.context.$implicit.OrderID),l(n,8,0,n.parent.context.$implicit.username);var t=e.Mb(n,25,0,l(n,26,0,e.Db(n.parent.parent,0),n.parent.context.$implicit.Date.toDate(),"dd/MM/yyyy"));l(n,25,0,t)}))}function M(l){return e.Nb(0,[(l()(),e.rb(0,0,null,null,6,"ion-card",[["padding",""],["style","background-color: white;"]],null,null,null,d.eb,d.f)),e.qb(1,49152,null,0,i.o,[e.h,e.k,e.x],null,null),e.qb(2,16384,null,0,i.f,[e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,w)),e.qb(4,16384,null,0,h.m,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,D)),e.qb(6,16384,null,0,h.m,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,4,0,!n.context.$implicit.show),l(n,6,0,n.context.$implicit.show)}),null)}function P(l){return e.Nb(0,[e.Fb(0,h.e,[e.s]),(l()(),e.rb(1,0,null,null,44,"ion-content",[["color","primary"],["style","background-color: var(--ion-color-primary);"]],null,null,null,d.hb,d.k)),e.qb(2,49152,null,0,i.w,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.rb(3,0,null,0,20,"ion-toolbar",[["color","primary"],["style","margin-top: 10px;"]],null,null,null,d.Tb,d.W)),e.qb(4,49152,null,0,i.Eb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.rb(5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,d.bb,d.e)),e.qb(6,49152,null,0,i.n,[e.h,e.k,e.x],null,null),(l()(),e.rb(7,0,null,0,1,"ion-icon",[["name","arrow-back"],["style","width: 20px; height: 20px; margin-left: 5px;"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.home()&&e),e}),d.ob,d.r)),e.qb(8,49152,null,0,i.E,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(9,0,null,0,14,"ion-title",[["style","margin-right: 10px;"],["text-center",""]],null,null,null,d.Rb,d.U)),e.qb(10,49152,null,0,i.Cb,[e.h,e.k,e.x],null,null),e.qb(11,16384,null,0,i.f,[e.k],null,null),(l()(),e.rb(12,0,null,0,11,"ion-item",[["no-padding",""],["style","font-size: 14px; --background: var(--ion-color-primary); color: white;"]],null,null,null,d.vb,d.t)),e.qb(13,49152,null,0,i.J,[e.h,e.k,e.x],null,null),e.qb(14,16384,null,0,i.f,[e.k],null,null),(l()(),e.rb(15,0,null,0,3,"ion-label",[["no-padding",""],["style","font-size: 14px; background-color: var(--ion-color-primary);"]],null,null,null,d.wb,d.z)),e.qb(16,49152,null,0,i.P,[e.h,e.k,e.x],null,null),e.qb(17,16384,null,0,i.f,[e.k],null,null),(l()(),e.Lb(-1,0,["Performance for this month"])),(l()(),e.rb(19,0,null,0,4,"ion-datetime",[["displayFormat","DDDD"],["no-padding",""]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var u=!0;return"ionBlur"===n&&(u=!1!==e.Db(l,22)._handleBlurEvent(t.target)&&u),"ionChange"===n&&(u=!1!==e.Db(l,22)._handleChangeEvent(t.target)&&u),u}),d.ib,d.l)),e.Ib(5120,null,m.m,(function(l){return[l]}),[i.Rb]),e.qb(21,49152,null,0,i.x,[e.h,e.k,e.x],{displayFormat:[0,"displayFormat"],pickerOptions:[1,"pickerOptions"],value:[2,"value"]},null),e.qb(22,16384,null,0,i.Rb,[e.k],null,null),e.qb(23,16384,null,0,i.f,[e.k],null,null),(l()(),e.rb(24,0,null,0,21,"div",[["class","card-main"]],null,null,null,null,null)),(l()(),e.rb(25,0,null,null,12,"ion-card",[["style","background-color: white; margin-top: 20px; border-radius: 10px 10px 10px 10px;"]],null,null,null,d.eb,d.f)),e.qb(26,49152,null,0,i.o,[e.h,e.k,e.x],null,null),(l()(),e.rb(27,0,null,0,10,"ion-row",[],null,null,null,d.Cb,d.F)),e.qb(28,49152,null,0,i.lb,[e.h,e.k,e.x],null,null),(l()(),e.rb(29,0,null,0,8,"ion-col",[["class","top"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.pastOrders()&&e),e}),d.gb,d.j)),e.Ib(512,null,h.t,h.u,[e.q,e.r,e.k,e.B]),e.qb(31,278528,null,0,h.k,[h.t],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Gb(32,{active:0}),e.qb(33,49152,null,0,i.v,[e.h,e.k,e.x],null,null),(l()(),e.rb(34,0,null,0,1,"div",[["style","font-size: 18px; margin-bottom: 10px;"]],null,null,null,null,null)),(l()(),e.Lb(35,null,["",""])),(l()(),e.rb(36,0,null,0,1,"div",[["style","font-size: 14px;"]],null,null,null,null,null)),(l()(),e.Lb(-1,null,["Past Orders"])),(l()(),e.rb(38,0,null,null,7,"div",[["class","openOrder"],["style","margin-top: -45px;"]],null,null,null,null,null)),(l()(),e.rb(39,0,null,null,6,"div",[["style","margin-top: 60px;"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,O)),e.qb(41,16384,null,0,h.m,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,null,1,null,x)),e.qb(43,16384,null,0,h.m,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,null,1,null,M)),e.qb(45,278528,null,0,h.l,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,2,0,"primary"),l(n,4,0,"primary"),l(n,8,0,"arrow-back"),l(n,21,0,"DDDD",t.customPickerOptions,e.vb(1,"",t.date,""));var u=l(n,32,0,"past"==t.top);l(n,31,0,"top",u),l(n,41,0,t.loader),l(n,43,0,0==t.myOpenOrders.length),l(n,45,0,t.myOpenOrders)}),(function(l,n){l(n,35,0,n.component.TotalPastOrders)}))}function F(l){return e.Nb(0,[(l()(),e.rb(0,0,null,null,1,"app-order-stats",[],null,null,null,P,f)),e.qb(1,114688,null,0,c,[o.a,g.m,r.a,i.Kb,a.a],null,null)],(function(l,n){l(n,1,0)}),null)}var L=e.nb("app-order-stats",c,F,{},{},[]);t.d(n,"OrderStatsPageModuleNgFactory",(function(){return I}));var I=e.ob(b,[],(function(l){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[p.a,L]],[3,e.j],e.v]),e.Bb(4608,h.o,h.n,[e.s,[2,h.w]]),e.Bb(4608,m.y,m.y,[]),e.Bb(4608,i.c,i.c,[e.x,e.g]),e.Bb(4608,i.Kb,i.Kb,[i.c,e.j,e.p]),e.Bb(4608,i.Pb,i.Pb,[i.c,e.j,e.p]),e.Bb(1073742336,h.c,h.c,[]),e.Bb(1073742336,m.x,m.x,[]),e.Bb(1073742336,m.j,m.j,[]),e.Bb(1073742336,i.Gb,i.Gb,[]),e.Bb(1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),e.Bb(1073742336,b,b,[]),e.Bb(1024,g.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);