(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"4/Id":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),o=u("mrSG"),i=u("ZZ/e"),e=u("c92J"),r=u("P7/M"),s=u("qlZX"),a=u("bR2Y");class b{constructor(l,n,u,t,o,i,e){this.asC=l,this.db=n,this.mod=u,this.signal=t,this.fs=o,this.load=i,this.location=e,this.none=!1,this.shop=localStorage.getItem("shop")}ionViewWillEnter(){this.signal.getmyNotification().subscribe(l=>{this.notices=l,0==this.notices.length&&(this.none=!0),console.log(l)})}back(){this.location.back()}ngOnInit(){}viewNotice(l){return o.__awaiter(this,void 0,void 0,(function*(){const n=yield this.mod.create({component:s.a,componentProps:l});console.log(l),yield n.present()}))}logout(){return o.__awaiter(this,void 0,void 0,(function*(){const l=yield this.asC.create({animated:!0,backdropDismiss:!0,cssClass:"./home.page.scss",buttons:[{text:"Logout",handler:()=>{this.db.logout(),localStorage.clear()}},{text:"Cancel",role:"cancel"}]});yield l.present()}))}getOder(l){return o.__awaiter(this,void 0,void 0,(function*(){yield this.fs.collection("Orders").doc(l).valueChanges().subscribe(l=>{this.Order=l,console.log(this.Order)},l=>{console.log(l)})}))}gotoModal(l){return o.__awaiter(this,void 0,void 0,(function*(){const n=yield this.mod.create({component:a.a,componentProps:l});console.log(l),yield n.present()}))}loader(){return o.__awaiter(this,void 0,void 0,(function*(){const l=yield this.load.create({message:"Getting order ...",duration:2500});yield l.present()}))}}class c{}var g=u("pMnS"),d=u("oBZk"),p=u("SVse"),h=u("Xr7G"),f=t.pb({encapsulation:0,styles:[["ion-card[_ngcontent-%COMP%]{margin-left:0;margin-right:0;border-radius:10px;background-color:#e6e6fa}ion-avatar[_ngcontent-%COMP%]{text-align:center;width:50px;height:50px}span[_ngcontent-%COMP%]{text-transform:capitalize;color:grey;font-weight:700}"]],data:{}});function m(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,1,"ion-spinner",[["color","primary"]],null,null,null,d.Cb,d.J)),t.qb(1,49152,null,0,i.ub,[t.h,t.k,t.x],{color:[0,"color"]},null)],(function(l,n){l(n,1,0,"primary")}),null)}function v(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,9,"div",[["style","text-align: center; margin-top: 40%;"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,2,"div",[["class","icon"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,1,"ion-icon",[["size","large"],["src","../../assets/images/alarm.svg"]],null,null,null,d.jb,d.q)),t.qb(3,49152,null,0,i.E,[t.h,t.k,t.x],{size:[0,"size"],src:[1,"src"]},null),(l()(),t.gb(16777216,null,null,1,null,m)),t.qb(5,16384,null,0,p.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(6,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.rb(7,0,null,null,2,"ion-label",[["style","color: #737373; font-size: 13px;"]],null,null,null,d.ob,d.v)),t.qb(8,49152,null,0,i.P,[t.h,t.k,t.x],null,null),(l()(),t.Kb(-1,0,["You have no notifications"]))],(function(l,n){var u=n.component;l(n,3,0,"large","../../assets/images/alarm.svg"),l(n,5,0,!u.none)}),null)}function x(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Kb(1,null,["","\xa0,"]))],null,(function(l,n){l(n,1,0,n.context.$implicit)}))}function k(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,29,"ion-card",[],null,null,null,d.ab,d.f)),t.Hb(512,null,p.t,p.u,[t.q,t.r,t.k,t.B]),t.qb(2,278528,null,0,p.k,[p.t],{ngClass:[0,"ngClass"]},null),t.Fb(3,{unread:0}),t.qb(4,49152,null,0,i.o,[t.h,t.k,t.x],null,null),(l()(),t.rb(5,0,null,0,17,"ion-row",[["padding",""]],null,null,null,d.tb,d.A)),t.qb(6,49152,null,0,i.lb,[t.h,t.k,t.x],null,null),t.qb(7,16384,null,0,i.f,[t.k],null,null),(l()(),t.rb(8,0,null,0,4,"ion-col",[["size","3"]],null,null,null,d.cb,d.j)),t.qb(9,49152,null,0,i.v,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.rb(10,0,null,0,2,"ion-avatar",[],null,null,null,d.U,d.b)),t.qb(11,49152,null,0,i.i,[t.h,t.k,t.x],null,null),(l()(),t.rb(12,0,null,0,0,"img",[["src","../../assets/images/icon.png"]],null,null,null,null,null)),(l()(),t.rb(13,0,null,0,9,"ion-col",[["style","text-align: left;padding-top: 20px;"]],null,null,null,d.cb,d.j)),t.qb(14,49152,null,0,i.v,[t.h,t.k,t.x],null,null),(l()(),t.rb(15,0,null,0,2,"ion-label",[],null,null,null,d.ob,d.v)),t.qb(16,49152,null,0,i.P,[t.h,t.k,t.x],null,null),(l()(),t.Kb(17,0,["",""])),(l()(),t.rb(18,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.rb(19,0,null,0,3,"ion-label",[],null,null,null,d.ob,d.v)),t.qb(20,49152,null,0,i.P,[t.h,t.k,t.x],null,null),(l()(),t.Kb(21,0,["",""])),t.Gb(22,1),(l()(),t.rb(23,0,null,0,6,"ion-card-content",[],null,null,null,d.Y,d.g)),t.qb(24,49152,null,0,i.p,[t.h,t.k,t.x],null,null),(l()(),t.rb(25,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,[" A New order for : "])),(l()(),t.rb(27,0,null,0,2,"blockquote",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,x)),t.qb(29,278528,null,0,p.l,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=l(n,3,0,"unread"==n.context.$implicit.status);l(n,2,0,u),l(n,9,0,"3"),l(n,29,0,n.context.$implicit.message)}),(function(l,n){l(n,17,0,n.context.$implicit.Title);var u=t.Lb(n,21,0,l(n,22,0,t.Db(n.parent,0),n.context.$implicit.Date.toDate()));l(n,21,0,u)}))}function q(l){return t.Mb(0,[t.Eb(0,p.e,[t.s]),(l()(),t.rb(1,0,null,null,7,"ion-header",[],null,null,null,d.ib,d.p)),t.qb(2,49152,null,0,i.D,[t.h,t.k,t.x],null,null),(l()(),t.rb(3,0,null,0,5,"ion-toolbar",[["color","primary"]],null,null,null,d.Lb,d.S)),t.qb(4,49152,null,0,i.Eb,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(5,0,null,0,3,"ion-title",[["text-center",""]],null,null,null,d.Jb,d.Q)),t.qb(6,49152,null,0,i.Cb,[t.h,t.k,t.x],null,null),t.qb(7,16384,null,0,i.f,[t.k],null,null),(l()(),t.Kb(-1,0,["Notifications"])),(l()(),t.rb(9,0,null,null,6,"ion-content",[],null,null,null,d.db,d.k)),t.qb(10,49152,null,0,i.w,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,v)),t.qb(12,16384,null,0,p.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(13,0,null,0,2,"div",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,k)),t.qb(15,278528,null,0,p.l,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,4,0,"primary"),l(n,12,0,u.none),l(n,15,0,u.notices)}),null)}function y(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,1,"app-notifications",[],null,null,null,q,f)),t.qb(1,114688,null,0,b,[i.a,e.a,i.Kb,r.a,h.a,i.Ib,p.i],null,null)],(function(l,n){l(n,1,0)}),null)}var w=t.nb("app-notifications",b,y,{},{},[]),M=u("s7LF"),B=u("iInd");u.d(n,"NotificationsPageModuleNgFactory",(function(){return _}));var _=t.ob(c,[],(function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[g.a,w]],[3,t.j],t.v]),t.Bb(4608,p.o,p.n,[t.s,[2,p.w]]),t.Bb(4608,M.v,M.v,[]),t.Bb(4608,i.c,i.c,[t.x,t.g]),t.Bb(4608,i.Kb,i.Kb,[i.c,t.j,t.p]),t.Bb(4608,i.Pb,i.Pb,[i.c,t.j,t.p]),t.Bb(1073742336,p.c,p.c,[]),t.Bb(1073742336,M.u,M.u,[]),t.Bb(1073742336,M.i,M.i,[]),t.Bb(1073742336,i.Gb,i.Gb,[]),t.Bb(1073742336,B.p,B.p,[[2,B.u],[2,B.m]]),t.Bb(1073742336,c,c,[]),t.Bb(1024,B.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);