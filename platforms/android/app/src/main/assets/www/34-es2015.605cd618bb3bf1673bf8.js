(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{pZl2:function(n,t,l){"use strict";l.r(t);var a=l("8Y7J");class e{}var o=l("pMnS"),r=l("oBZk"),i=l("ZZ/e"),u=l("SVse"),b=l("YWyl"),s=l("P7/M");class c{constructor(n,t,l){this.menuCtrl=n,this.service=t,this.signal=l,this.animate=!1}ionViewWillEnter(){this.menuCtrl.enable(!0),"Unread"==this.signal.noticeNew.toString()&&this.setAnimationTimeout(),this.signal.notice.subscribe(n=>{this.count=n}),console.log(this.count)}setAnimationTimeout(){this.animate=!0,setTimeout(()=>{this.animate=!1},2e3)}}var d=a.pb({encapsulation:0,styles:[[".animate[_ngcontent-%COMP%]{-webkit-animation:5s cubic-bezier(.36,.07,.19,.97) both shake;animation:5s cubic-bezier(.36,.07,.19,.97) both shake;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px;color:var(--ion-color-warning)}.animate[_ngcontent-%COMP%]   #notifications-badge[_ngcontent-%COMP%]{background-color:var(--ion-color-primary)!important;position:absolute;top:15px;right:20px;border-radius:100%}@-webkit-keyframes shake{10%,90%{-webkit-transform:translate3d(-1px,0,0);transform:translate3d(-1px,0,0)}20%,80%{-webkit-transform:translate3d(2px,0,0);transform:translate3d(2px,0,0)}30%,50%,70%{-webkit-transform:translate3d(-4px,0,0);transform:translate3d(-4px,0,0)}40%,60%{-webkit-transform:translate3d(4px,0,0);transform:translate3d(4px,0,0)}}@keyframes shake{10%,90%{-webkit-transform:translate3d(-1px,0,0);transform:translate3d(-1px,0,0)}20%,80%{-webkit-transform:translate3d(2px,0,0);transform:translate3d(2px,0,0)}30%,50%,70%{-webkit-transform:translate3d(-4px,0,0);transform:translate3d(-4px,0,0)}40%,60%{-webkit-transform:translate3d(4px,0,0);transform:translate3d(4px,0,0)}}ion-badge[_ngcontent-%COMP%]{background-color:#fff;color:var(--ion-color-danger);font-size:.8em}"]],data:{}});function h(n){return a.Nb(0,[(n()(),a.rb(0,0,null,null,2,"ion-badge",[["id","notifications-badge"]],null,null,null,r.Z,r.c)),a.qb(1,49152,null,0,i.l,[a.h,a.k,a.x],null,null),(n()(),a.Lb(2,0,["",""]))],null,(function(n,t){n(t,2,0,t.component.count)}))}function p(n){return a.Nb(0,[(n()(),a.rb(0,0,null,null,25,"ion-tabs",[],null,[[null,"ionTabButtonClick"]],(function(n,t,l){var e=!0;return"ionTabButtonClick"===t&&(e=!1!==a.Db(n,1).select(l.detail.tab)&&e),e}),r.Ob,r.R)),a.qb(1,49152,null,1,i.yb,[i.Lb],null,null),a.Jb(335544320,1,{tabBar:0}),(n()(),a.rb(3,0,null,1,22,"ion-tab-bar",[["slot","bottom"]],[[8,"hidden",0]],null,null,r.Mb,r.P)),a.qb(4,49152,[[1,4]],0,i.wb,[a.h,a.k,a.x],null,null),(n()(),a.rb(5,0,null,0,3,"ion-tab-button",[["tab","dashboard"]],null,null,null,r.Nb,r.Q)),a.qb(6,49152,null,0,i.xb,[a.h,a.k,a.x],{tab:[0,"tab"]},null),(n()(),a.rb(7,0,null,0,1,"ion-icon",[["name","home"]],null,null,null,r.ob,r.r)),a.qb(8,49152,null,0,i.E,[a.h,a.k,a.x],{name:[0,"name"]},null),(n()(),a.rb(9,0,null,0,3,"ion-tab-button",[["tab","tab3"]],null,null,null,r.Nb,r.Q)),a.qb(10,49152,null,0,i.xb,[a.h,a.k,a.x],{tab:[0,"tab"]},null),(n()(),a.rb(11,0,null,0,1,"ion-icon",[["name","easel"]],null,null,null,r.ob,r.r)),a.qb(12,49152,null,0,i.E,[a.h,a.k,a.x],{name:[0,"name"]},null),(n()(),a.rb(13,0,null,0,8,"ion-tab-button",[["tab","notifications"]],null,null,null,r.Nb,r.Q)),a.qb(14,49152,null,0,i.xb,[a.h,a.k,a.x],{tab:[0,"tab"]},null),a.Ib(512,null,u.t,u.u,[a.q,a.r,a.k,a.B]),a.qb(16,278528,null,0,u.k,[u.t],{ngClass:[0,"ngClass"]},null),a.Gb(17,{animate:0}),(n()(),a.rb(18,0,null,0,1,"ion-icon",[["name","notifications"]],null,null,null,r.ob,r.r)),a.qb(19,49152,null,0,i.E,[a.h,a.k,a.x],{name:[0,"name"]},null),(n()(),a.gb(16777216,null,0,1,null,h)),a.qb(21,16384,null,0,u.m,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(n()(),a.rb(22,0,null,0,3,"ion-tab-button",[["tab","profile"]],null,null,null,r.Nb,r.Q)),a.qb(23,49152,null,0,i.xb,[a.h,a.k,a.x],{tab:[0,"tab"]},null),(n()(),a.rb(24,0,null,0,1,"ion-icon",[["name","person"]],null,null,null,r.ob,r.r)),a.qb(25,49152,null,0,i.E,[a.h,a.k,a.x],{name:[0,"name"]},null)],(function(n,t){var l=t.component;n(t,6,0,"dashboard"),n(t,8,0,"home"),n(t,10,0,"tab3"),n(t,12,0,"easel"),n(t,14,0,"notifications");var a=n(t,17,0,1==l.animate);n(t,16,0,a),n(t,19,0,"notifications"),n(t,21,0,0!==l.count),n(t,23,0,"profile"),n(t,25,0,"person")}),(function(n,t){n(t,3,0,t.component.service.hiddenTabs)}))}function g(n){return a.Nb(0,[(n()(),a.rb(0,0,null,null,1,"app-tabs",[],null,null,null,p,d)),a.qb(1,49152,null,0,c,[i.Jb,b.a,s.a],null,null)],null,null)}var m=a.nb("app-tabs",c,g,{},{},[]),f=l("s7LF"),k=l("iInd"),v=l("irV9");let x=(()=>{class n{constructor(n,t,l){this.router=n,this.fauth=t,this.service=l}canActivate(n){let t=localStorage.getItem("user");if(console.log(t),null!=t)return!0;this.service.hiddenTabs=!0,this.router.navigate(["tabs/login"])}}return n.ngInjectableDef=a.Qb({factory:function(){return new n(a.Rb(k.m),a.Rb(v.a),a.Rb(b.a))},token:n,providedIn:"root"}),n})(),P=(()=>{class n{constructor(n,t,l){this.router=n,this.fauth=t,this.service=l}canActivate(n){let t=localStorage.getItem("userID");if(console.log(t),null==t)return!0;this.router.navigate(["tabs/dashboard"])}}return n.ngInjectableDef=a.Qb({factory:function(){return new n(a.Rb(k.m),a.Rb(v.a),a.Rb(b.a))},token:n,providedIn:"root"}),n})();const y=()=>l.e(31).then(l.bind(null,"JLuJ")).then(n=>n.Tab1PageModuleNgFactory),C=()=>l.e(32).then(l.bind(null,"8cDG")).then(n=>n.Tab2PageModuleNgFactory),M=()=>l.e(33).then(l.bind(null,"W9vR")).then(n=>n.Tab3PageModuleNgFactory),N=()=>l.e(26).then(l.bind(null,"UIoA")).then(n=>n.ProfilePageModuleNgFactory),w=()=>l.e(21).then(l.bind(null,"4/Id")).then(n=>n.NotificationsPageModuleNgFactory),F=()=>l.e(20).then(l.bind(null,"f+ep")).then(n=>n.LoginPageModuleNgFactory),A=()=>Promise.all([l.e(0),l.e(29)]).then(l.bind(null,"mH0F")).then(n=>n.SignupPageModuleNgFactory),B=()=>Promise.all([l.e(0),l.e(25)]).then(l.bind(null,"G8AK")).then(n=>n.ProductsPageModuleNgFactory),q=()=>l.e(18).then(l.bind(null,"uP/6")).then(n=>n.DashboardPageModuleNgFactory),I=()=>l.e(24).then(l.bind(null,"F/Pw")).then(n=>n.OrdersPageModuleNgFactory),T=()=>l.e(23).then(l.bind(null,"THFJ")).then(n=>n.OrderStatsPageModuleNgFactory),J=()=>l.e(17).then(l.bind(null,"3BoA")).then(n=>n.SalesPageModuleNgFactory),j=()=>l.e(30).then(l.bind(null,"Coe3")).then(n=>n.StockPageModuleNgFactory),R=()=>l.e(4).then(l.bind(null,"6ZY7")).then(n=>n.CustomersPageModuleNgFactory),S=()=>l.e(27).then(l.bind(null,"rsjc")).then(n=>n.ProfilemodalPageModuleNgFactory),O=()=>l.e(5).then(l.bind(null,"lIfX")).then(n=>n.ProductmodalPageModuleNgFactory),Z=()=>l.e(3).then(l.bind(null,"sfF8")).then(n=>n.CategoryPageModuleNgFactory),D=()=>l.e(6).then(l.bind(null,"MVrJ")).then(n=>n.RemoveCategoryPageModuleNgFactory);class Q{}l.d(t,"TabsPageModuleNgFactory",(function(){return E}));var E=a.ob(e,[],(function(n){return a.Ab([a.Bb(512,a.j,a.Z,[[8,[o.a,m]],[3,a.j],a.v]),a.Bb(4608,u.o,u.n,[a.s,[2,u.w]]),a.Bb(4608,i.c,i.c,[a.x,a.g]),a.Bb(4608,i.Kb,i.Kb,[i.c,a.j,a.p]),a.Bb(4608,i.Pb,i.Pb,[i.c,a.j,a.p]),a.Bb(4608,f.y,f.y,[]),a.Bb(1073742336,u.c,u.c,[]),a.Bb(1073742336,i.Gb,i.Gb,[]),a.Bb(1073742336,f.x,f.x,[]),a.Bb(1073742336,f.j,f.j,[]),a.Bb(1073742336,k.o,k.o,[[2,k.t],[2,k.m]]),a.Bb(1073742336,Q,Q,[]),a.Bb(1073742336,e,e,[]),a.Bb(1024,k.k,(function(){return[[{path:"tabs",component:c,children:[{path:"tab1",children:[{path:"",loadChildren:y,canActivate:[x]}]},{path:"tab2",children:[{path:"",loadChildren:C,canActivate:[x]}]},{path:"tab3",children:[{path:"",loadChildren:M}]},{path:"profile",loadChildren:N,canActivate:[x]},{path:"notifications",loadChildren:w,canActivate:[x]},{path:"login",loadChildren:F,canActivate:[P]},{path:"signup",loadChildren:A},{path:"products",loadChildren:B,canActivate:[x]},{path:"dashboard",loadChildren:q,canActivate:[x]},{path:"orders",loadChildren:I,canActivate:[x]},{path:"order-stats",loadChildren:T,canActivate:[x]},{path:"sales",loadChildren:J,canActivate:[x]},{path:"stock",loadChildren:j,canActivate:[x]},{path:"customers",loadChildren:R,canActivate:[x]},{path:"profilemodal",loadChildren:S},{path:"productmodal",loadChildren:O,canActivate:[x]},{path:"category",loadChildren:Z,canActivate:[x]},{path:"remove",loadChildren:D,canActivate:[x]},{path:"",redirectTo:"/tabs/dashboard",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/login",pathMatch:"full"}]]}),[])])}))}}]);