(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"f+ep":function(l,n,e){"use strict";e.r(n);var u=e("8Y7J"),t=e("mrSG"),i=e("ZZ/e"),s=e("Wcq6"),r=e("NzdG"),o=e("c92J"),a=e("YWyl"),d=e("Sy1n");class b{constructor(l,n,e,u,t,i,s,r,o,a,d,b){this.db=l,this.loadingController=n,this.toastController=e,this.navCtrl=u,this.googleplus=t,this.events=i,this.alertCtrl=s,this.menuCtrl=r,this.platform=o,this.service=a,this.location=d,this.ref=b,this.shouldHeight=document.body.clientHeight+"px",this.data={email:null,password:null},this.passwordType="password",this.passwordIcon="eye-off",this.redirect(),this.service.hiddenTabs=!0}ngOnInit(){this.menuCtrl.enable(!1)}back(){this.service.hiddenTabs=!1,this.menuCtrl.enable(!0),this.location.back()}hideShowPassword(){this.passwordType="text"===this.passwordType?"password":"text",this.passwordIcon="eye-off"===this.passwordIcon?"eye":"eye-off"}redirect(){null!==localStorage.getItem("userID")&&this.navCtrl.navigate(["tabs/tab1"])}submit(){this.presentLoading(),this.db.login(this.data.email,this.data.password).then(l=>{this.next(l)},l=>{this.loading.dismiss(),this.presentToast(l.message)})}next(l){const n=l.user.uid;console.log("user id is----:"+n),localStorage.setItem("userID",n),this.loading.dismiss(),this.menuCtrl.enable(!0),this.service.hiddenTabs=!1,this.ref.getInfo(n),this.navCtrl.navigate(["tabs/tab1"])}presentLoading(){return t.__awaiter(this,void 0,void 0,(function*(){return this.loading=yield this.loadingController.create({message:"Wait ..."}),yield this.loading.present()}))}presentToast(l){return t.__awaiter(this,void 0,void 0,(function*(){(yield this.toastController.create({message:l,duration:3e3})).present()}))}login(){this.googleplus.login({webClientId:"587167744825-38lfevsqb2h7o3jave51237cteov4vd2.apps.googleusercontent.com",offline:!0}).then(l=>{s.auth().signInWithCredential(s.auth.GoogleAuthProvider.credential(l.IdToken)).then(l=>{alert("login successful")}).catch(l=>{alert("login not successful")})})}reset(){this.password()}forgotPassword(l){return t.__awaiter(this,void 0,void 0,(function*(){return s.auth().sendPasswordResetEmail(l).then(n=>this.presentToast("Password reset link send to  "+l)).catch(n=>this.presentToast("No user record with "+l))}))}password(){return t.__awaiter(this,void 0,void 0,(function*(){(yield this.alertCtrl.create({header:"Password Reset",message:"Enter email address to receive password reset link",inputs:[{name:"email",placeholder:"you@example.com"}],buttons:[{text:"cancel",role:"cansel"},{text:"Send",handler:l=>{let n=l.email;console.log(n),this.forgotPassword(n)}}]})).present()}))}}class c{}var h=e("pMnS"),g=e("oBZk"),p=e("s7LF"),m=e("SVse"),f=e("iInd"),v=u.pb({encapsulation:0,styles:[[".passwordIcon[_ngcontent-%COMP%]{font-size:2rem!important;position:relative!important;top:22px!important;margin:0 auto!important}ion-list[_ngcontent-%COMP%]{background:0 0}ion-list[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{background:0 0!important}ion-item[_ngcontent-%COMP%]{border-radius:20px}"]],data:{}});function C(l){return u.Mb(0,[(l()(),u.rb(0,0,null,null,64,"ion-content",[],[[4,"background-size",null]],null,null,g.S,g.j)),u.qb(1,49152,null,0,i.v,[u.h,u.k,u.x],null,null),(l()(),u.rb(2,0,null,0,62,"div",[["class",""]],null,null,null,null,null)),(l()(),u.rb(3,0,null,null,61,"ion-grid",[],null,null,null,g.W,g.n)),u.qb(4,49152,null,0,i.B,[u.h,u.k,u.x],null,null),(l()(),u.rb(5,0,null,0,59,"ion-row",[],null,null,null,g.gb,g.x)),u.qb(6,49152,null,0,i.kb,[u.h,u.k,u.x],null,null),(l()(),u.rb(7,0,null,0,1,"ion-col",[["size","1"]],null,null,null,g.R,g.i)),u.qb(8,49152,null,0,i.u,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.rb(9,0,null,0,53,"ion-col",[["class","center"]],null,null,null,g.R,g.i)),u.qb(10,49152,null,0,i.u,[u.h,u.k,u.x],null,null),(l()(),u.rb(11,0,null,0,51,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,e){var t=!0;return"submit"===n&&(t=!1!==u.Db(l,13).onSubmit(e)&&t),"reset"===n&&(t=!1!==u.Db(l,13).onReset()&&t),t}),null,null)),u.qb(12,16384,null,0,p.m,[],null,null),u.qb(13,4210688,[["loginform",4]],0,p.h,[[8,null],[8,null]],null,null),u.Hb(2048,null,p.a,null,[p.h]),u.qb(15,16384,null,0,p.g,[[4,p.a]],null,null),(l()(),u.rb(16,0,null,null,0,"img",[["class","logo"],["src","/assets/images/icon.png"]],null,null,null,null,null)),(l()(),u.rb(17,0,null,null,14,"ion-list",[],null,null,null,g.cb,g.t)),u.qb(18,49152,null,0,i.P,[u.h,u.k,u.x],null,null),(l()(),u.rb(19,0,null,0,12,"ion-item",[],null,null,null,g.ab,g.r)),u.qb(20,49152,null,0,i.I,[u.h,u.k,u.x],null,null),(l()(),u.rb(21,0,null,0,1,"ion-icon",[["name","mail"],["size","small"],["slot","start"]],null,null,null,g.Y,g.p)),u.qb(22,49152,null,0,i.D,[u.h,u.k,u.x],{name:[0,"name"],size:[1,"size"]},null),(l()(),u.rb(23,0,null,0,8,"ion-input",[["clearInput",""],["name","email"],["placeholder","Email Address"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==u.Db(l,26)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Db(l,26)._handleInputEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(i.data.email=e)&&t),t}),g.Z,g.q)),u.qb(24,16384,null,0,p.j,[],{required:[0,"required"]},null),u.Hb(1024,null,p.c,(function(l){return[l]}),[p.j]),u.qb(26,16384,null,0,i.Qb,[u.k],null,null),u.Hb(1024,null,p.d,(function(l){return[l]}),[i.Qb]),u.qb(28,671744,null,0,p.i,[[2,p.a],[6,p.c],[8,null],[6,p.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Hb(2048,null,p.e,null,[p.i]),u.qb(30,16384,null,0,p.f,[[4,p.e]],null,null),u.qb(31,49152,null,0,i.H,[u.h,u.k,u.x],{clearInput:[0,"clearInput"],name:[1,"name"],placeholder:[2,"placeholder"],required:[3,"required"],type:[4,"type"]},null),(l()(),u.rb(32,0,null,null,16,"ion-list",[],null,null,null,g.cb,g.t)),u.qb(33,49152,null,0,i.P,[u.h,u.k,u.x],null,null),(l()(),u.rb(34,0,null,0,14,"ion-item",[],null,null,null,g.ab,g.r)),u.qb(35,49152,null,0,i.I,[u.h,u.k,u.x],null,null),(l()(),u.rb(36,0,null,0,1,"ion-icon",[["name","lock"],["size","small"],["slot","start"]],null,null,null,g.Y,g.p)),u.qb(37,49152,null,0,i.D,[u.h,u.k,u.x],{name:[0,"name"],size:[1,"size"]},null),(l()(),u.rb(38,0,null,0,1,"ion-icon",[["size","small"],["slot","end"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.hideShowPassword()&&u),u}),g.Y,g.p)),u.qb(39,49152,null,0,i.D,[u.h,u.k,u.x],{name:[0,"name"],size:[1,"size"]},null),(l()(),u.rb(40,0,null,0,8,"ion-input",[["clearOnEdit","false"],["name","password"],["placeholder","********"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==u.Db(l,43)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Db(l,43)._handleInputEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(i.data.password=e)&&t),t}),g.Z,g.q)),u.qb(41,16384,null,0,p.j,[],{required:[0,"required"]},null),u.Hb(1024,null,p.c,(function(l){return[l]}),[p.j]),u.qb(43,16384,null,0,i.Qb,[u.k],null,null),u.Hb(1024,null,p.d,(function(l){return[l]}),[i.Qb]),u.qb(45,671744,null,0,p.i,[[2,p.a],[6,p.c],[8,null],[6,p.d]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Hb(2048,null,p.e,null,[p.i]),u.qb(47,16384,null,0,p.f,[[4,p.e]],null,null),u.qb(48,49152,null,0,i.H,[u.h,u.k,u.x],{clearOnEdit:[0,"clearOnEdit"],name:[1,"name"],placeholder:[2,"placeholder"],required:[3,"required"],type:[4,"type"]},null),(l()(),u.rb(49,0,null,null,3,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u.rb(50,0,null,null,2,"ion-button",[["color","primary"],["shape","round"],["width","40%"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.submit()&&u),u}),g.L,g.c)),u.qb(51,49152,null,0,i.l,[u.h,u.k,u.x],{color:[0,"color"],disabled:[1,"disabled"],shape:[2,"shape"]},null),(l()(),u.Kb(-1,0,["Login"])),(l()(),u.rb(53,0,null,null,6,"div",[["class","form-group extra"],["style","color: #3880ff;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" Don't have an account"])),(l()(),u.rb(55,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.rb(56,0,null,null,3,"a",[["class","link"],["routerLink","/tabs/signup"],["style","color: #3880ff;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Db(l,57).onClick(e)&&t),"click"===n&&(t=!1!==u.Db(l,58).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t}),null,null)),u.qb(57,737280,null,0,i.Ob,[m.i,i.Kb,u.k,f.m,[2,f.n]],null,null),u.qb(58,671744,null,0,f.o,[f.m,f.a,m.i],{routerLink:[0,"routerLink"]},null),(l()(),u.Kb(-1,null,["Sign up"])),(l()(),u.rb(60,0,null,null,2,"h6",[["style","padding-top: 10px;color: #3880ff"],["text-center",""]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.reset()&&u),u}),null,null)),u.qb(61,16384,null,0,i.e,[u.k],null,null),(l()(),u.Kb(-1,null,["Forgot password?"])),(l()(),u.rb(63,0,null,0,1,"ion-col",[["size","1"]],null,null,null,g.R,g.i)),u.qb(64,49152,null,0,i.u,[u.h,u.k,u.x],{size:[0,"size"]},null)],(function(l,n){var e=n.component;l(n,8,0,"1"),l(n,22,0,"mail","small"),l(n,24,0,""),l(n,28,0,"email",e.data.email),l(n,31,0,"","email","Email Address","","text"),l(n,37,0,"lock","small"),l(n,39,0,e.passwordIcon,"small"),l(n,41,0,""),l(n,45,0,"password",e.data.password),l(n,48,0,"false","password","********","",e.passwordType),l(n,51,0,"primary",!u.Db(n,13).valid,"round"),l(n,57,0),l(n,58,0,"/tabs/signup"),l(n,64,0,"1")}),(function(l,n){l(n,0,0,"100% "+n.component.shouldHeight),l(n,11,0,u.Db(n,15).ngClassUntouched,u.Db(n,15).ngClassTouched,u.Db(n,15).ngClassPristine,u.Db(n,15).ngClassDirty,u.Db(n,15).ngClassValid,u.Db(n,15).ngClassInvalid,u.Db(n,15).ngClassPending),l(n,23,0,u.Db(n,24).required?"":null,u.Db(n,30).ngClassUntouched,u.Db(n,30).ngClassTouched,u.Db(n,30).ngClassPristine,u.Db(n,30).ngClassDirty,u.Db(n,30).ngClassValid,u.Db(n,30).ngClassInvalid,u.Db(n,30).ngClassPending),l(n,40,0,u.Db(n,41).required?"":null,u.Db(n,47).ngClassUntouched,u.Db(n,47).ngClassTouched,u.Db(n,47).ngClassPristine,u.Db(n,47).ngClassDirty,u.Db(n,47).ngClassValid,u.Db(n,47).ngClassInvalid,u.Db(n,47).ngClassPending),l(n,56,0,u.Db(n,58).target,u.Db(n,58).href)}))}function k(l){return u.Mb(0,[(l()(),u.rb(0,0,null,null,1,"app-login",[],null,null,null,C,v)),u.qb(1,114688,null,0,b,[o.a,i.Hb,i.Rb,f.m,r.a,i.f,i.b,i.Ib,i.Mb,a.a,m.h,d.a],null,null)],(function(l,n){l(n,1,0)}),null)}var q=u.nb("app-login",b,k,{},{},[]);e.d(n,"LoginPageModuleNgFactory",(function(){return w}));var w=u.ob(c,[],(function(l){return u.Ab([u.Bb(512,u.j,u.Z,[[8,[h.a,q]],[3,u.j],u.v]),u.Bb(4608,m.n,m.m,[u.s,[2,m.v]]),u.Bb(4608,p.l,p.l,[]),u.Bb(4608,i.c,i.c,[u.x,u.g]),u.Bb(4608,i.Jb,i.Jb,[i.c,u.j,u.p]),u.Bb(4608,i.Nb,i.Nb,[i.c,u.j,u.p]),u.Bb(1073742336,m.c,m.c,[]),u.Bb(1073742336,p.k,p.k,[]),u.Bb(1073742336,p.b,p.b,[]),u.Bb(1073742336,i.Fb,i.Fb,[]),u.Bb(1073742336,f.p,f.p,[[2,f.u],[2,f.m]]),u.Bb(1073742336,c,c,[]),u.Bb(1024,f.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);