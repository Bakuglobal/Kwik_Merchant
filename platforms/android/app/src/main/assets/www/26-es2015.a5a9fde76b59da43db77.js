(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{JLuJ:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var o=u("pMnS"),i=u("oBZk"),c=u("ZZ/e"),r=u("SVse"),a=u("mrSG"),b=u("c92J"),s=u("zA0m"),g=u("lJxs"),h=u("YWyl");class p{constructor(l,n,u,t,e,o,i,c,r){this.barcodeScanner=l,this.db=n,this.navCtrl=u,this.alertctrl=t,this.asC=e,this.menuCtrl=o,this.af=i,this.firestore=c,this.service=r,this.scanbutton=!0,this.shop=[],this.service.hiddenTabs=!1}ngOnInit(){this.getDate(),document.querySelector("ion-tab-bar").style.display="flex",this.menuCtrl.enable(!0),this.af.user.subscribe(l=>{this.userID=l.uid,console.log("user"+l.uid)})}notifications(){this.navCtrl.navigate(["tabs/notifications"])}close(){this.scanbutton=!0,this.transaction=[]}print(){return a.__awaiter(this,void 0,void 0,(function*(){(yield this.alertctrl.create({header:"Sorry can not print now ",message:"printer is not connected",buttons:[{text:"close",role:"cancel"}]})).present()}))}getDate(){this.currentDate=(new Date).getTime()}truncate(l){this.key=l.substring(0,28),this.transID=l.slice(-15),console.log(this.key),console.log(this.transID)}scan(){this.barcodeScanner.scan().then(l=>{this.truncate(l),this.getTransaction(this.key,this.transID)})}check(){this.scanbutton=!1,this.getTransaction("8FxNjxpLCKQLFSZPzOcaUrYSK2M2","lthRbbyEWrxRduB")}getTransaction(l,n){this.db.checktransaction(l,n).snapshotChanges().pipe(Object(g.a)(l=>l.map(l=>Object.assign({key:l.payload.key},l.payload.val())))).subscribe(l=>{this.transaction=l}),console.log(this.transaction)}}var d=u("iInd"),O=u("irV9"),f=u("Xr7G"),m=t.pb({encapsulation:0,styles:[["ion-toolbar[_ngcontent-%COMP%]{border-radius:10px}.btn[_ngcontent-%COMP%]{position:fixed;width:100%;background:0 0}#invoice-POS[_ngcontent-%COMP%]{box-shadow:0 0 1in -.25in rgba(0,0,0,.5);padding:2mm;margin:0 auto;width:80%;background:#fff}#invoice-POS[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-selection{background:#f31544;color:#fff}#invoice-POS[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::selection{background:#f31544;color:#fff}#invoice-POS[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5em;color:#222}#invoice-POS[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:.9em}#invoice-POS[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.2em;font-weight:300;line-height:2em}#invoice-POS[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.7em;color:#666;line-height:1.2em}#invoice-POS[_ngcontent-%COMP%]   #bot[_ngcontent-%COMP%], #invoice-POS[_ngcontent-%COMP%]   #mid[_ngcontent-%COMP%], #invoice-POS[_ngcontent-%COMP%]   #top[_ngcontent-%COMP%]{border-bottom:1px solid #eee}#invoice-POS[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin:20% auto 10%}#invoice-POS[_ngcontent-%COMP%]   #top[_ngcontent-%COMP%]{min-height:100px}#invoice-POS[_ngcontent-%COMP%]   #mid[_ngcontent-%COMP%]{min-height:80px}#invoice-POS[_ngcontent-%COMP%]   #bot[_ngcontent-%COMP%]{min-height:50px}#invoice-POS[_ngcontent-%COMP%]   #top[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{text-align:center;height:60px;width:60px;background:url(icon.622e892ed663ee97107d.png) 0 0/60px 60px no-repeat}#invoice-POS[_ngcontent-%COMP%]   .clientlogo[_ngcontent-%COMP%]{float:left;height:60px;width:60px;background:url(http://michaeltruong.ca/images/client.jpg) 0 0/60px 60px no-repeat;border-radius:50px}#invoice-POS[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:block;text-align:center;margin-left:0}#invoice-POS[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{float:right}#invoice-POS[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:right}#invoice-POS[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}#invoice-POS[_ngcontent-%COMP%]   .tabletitle[_ngcontent-%COMP%]{font-size:.9em;background:#eee}#invoice-POS[_ngcontent-%COMP%]   .service[_ngcontent-%COMP%]{border-bottom:1px solid #eee}#invoice-POS[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{width:40%}#invoice-POS[_ngcontent-%COMP%]   .itemtext[_ngcontent-%COMP%]{font-size:.9em}#invoice-POS[_ngcontent-%COMP%]   #legalcopy[_ngcontent-%COMP%]{margin-top:5mm;text-align:center}ion-card[_ngcontent-%COMP%]{border-radius:10px}"]],data:{}});function P(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,12,"ion-toolbar",[["color","primary"]],null,null,null,i.rb,i.I)),t.qb(1,49152,null,0,c.Db,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(2,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.M,i.d)),t.qb(3,49152,null,0,c.m,[t.h,t.k,t.x],null,null),(l()(),t.rb(4,0,null,0,1,"ion-menu-button",[["autoHide","false"]],null,null,null,i.db,i.v)),t.qb(5,49152,[[1,4],["menu",4]],0,c.S,[t.h,t.k,t.x],{autoHide:[0,"autoHide"]},null),(l()(),t.rb(6,0,null,0,2,"ion-title",[],null,null,null,i.qb,i.H)),t.qb(7,49152,null,0,c.Bb,[t.h,t.k,t.x],null,null),(l()(),t.Kb(-1,0,[" Kwik Merchant "])),(l()(),t.rb(9,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,i.M,i.d)),t.qb(10,49152,null,0,c.m,[t.h,t.k,t.x],null,null),(l()(),t.rb(11,0,null,0,1,"ion-icon",[["name","notifications"],["size","large"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.notifications()&&t),t}),i.Y,i.p)),t.qb(12,49152,null,0,c.D,[t.h,t.k,t.x],{name:[0,"name"],size:[1,"size"]},null)],(function(l,n){l(n,1,0,"primary"),l(n,5,0,"false"),l(n,12,0,"notifications","large")}),null)}function M(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,10,"div",[["style","text-align: center;margin-top: 200px;font-size: 0.9em;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.scan()&&t),t}),null,null)),(l()(),t.rb(1,0,null,null,2,"ion-label",[["class","ion-text-center"]],null,null,null,i.bb,i.s)),t.qb(2,49152,null,0,c.O,[t.h,t.k,t.x],null,null),(l()(),t.Kb(-1,0,["Tap to scan and Verify"])),(l()(),t.rb(4,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.rb(6,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.rb(7,0,null,null,3,"ion-col",[["size","1"]],null,null,null,i.R,i.i)),t.qb(8,49152,null,0,c.u,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.rb(9,0,null,0,1,"ion-icon",[["color","primary"],["name","qr-scanner"],["size","large"],["style","height: 80px;width: 80px;"]],null,null,null,i.Y,i.p)),t.qb(10,49152,null,0,c.D,[t.h,t.k,t.x],{color:[0,"color"],name:[1,"name"],size:[2,"size"]},null)],(function(l,n){l(n,8,0,"1"),l(n,10,0,"primary","qr-scanner","large")}),null)}function v(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,7,"ion-list",[],null,null,null,i.cb,i.t)),t.qb(1,49152,null,0,c.P,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,2,"ion-button",[["class","ion-float-left"],["shape","round"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.close()&&t),t}),i.L,i.c)),t.qb(3,49152,null,0,c.l,[t.h,t.k,t.x],{shape:[0,"shape"]},null),(l()(),t.Kb(-1,0,["CLOSE"])),(l()(),t.rb(5,0,null,0,2,"ion-button",[["class","ion-float-right"],["shape","round"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.print()&&t),t}),i.L,i.c)),t.qb(6,49152,null,0,c.l,[t.h,t.k,t.x],{shape:[0,"shape"]},null),(l()(),t.Kb(-1,0,["Approve"]))],(function(l,n){l(n,3,0,"round"),l(n,6,0,"round")}),null)}function C(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,2,"div",[["class","btn"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,v)),t.qb(2,278528,null,0,r.k,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.transaction)}),null)}function x(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,9,"tr",[["class","service"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,2,"td",[["class","tableitem"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,1,"p",[["class","itemtext"]],null,null,null,null,null)),(l()(),t.Kb(3,null,["",""])),(l()(),t.rb(4,0,null,null,2,"td",[["class","tableitem"]],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,1,"p",[["class","itemtext"]],null,null,null,null,null)),(l()(),t.Kb(6,null,["",""])),(l()(),t.rb(7,0,null,null,2,"td",[["class","tableitem"]],null,null,null,null,null)),(l()(),t.rb(8,0,null,null,1,"p",[["class","itemtext"]],null,null,null,null,null)),(l()(),t.Kb(9,null,["",""]))],null,(function(l,n){l(n,3,0,n.context.$implicit.name),l(n,6,0,n.context.$implicit.count),l(n,9,0,n.context.$implicit.price)}))}function _(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,7,"tr",[["class","tabletitle"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,0,"td",[],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,2,"td",[["class","Rate"]],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Total"])),(l()(),t.rb(5,0,null,null,2,"td",[["class","payment"]],null,null,null,null,null)),(l()(),t.rb(6,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Kb(7,null,["",""]))],null,(function(l,n){l(n,7,0,n.context.$implicit.count*n.context.$implicit.price)}))}function k(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,2,"div",[["class","legalcopy"],["style","text-align: center"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Kb(2,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.shopname)}))}function S(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,41,"div",[["id","invoice-POS"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,2,"div",[["center",""],["id","top"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,0,"div",[["class","logo"]],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,0,"div",[["class","info"]],null,null,null,null,null)),(l()(),t.rb(4,0,null,null,2,"p",[["style","text-align:center"]],null,null,null,null,null)),(l()(),t.Kb(5,null,[" Date: "," "])),t.Gb(6,2),(l()(),t.rb(7,0,null,null,10,"div",[["id","mid"]],null,null,null,null,null)),(l()(),t.rb(8,0,null,null,9,"div",[["class","info"]],null,null,null,null,null)),(l()(),t.rb(9,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Contact Info"])),(l()(),t.rb(11,0,null,null,6,"p",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,[" Address : street city, state 0000"])),(l()(),t.rb(13,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,[" Email : supermarket@gmail.com"])),(l()(),t.rb(15,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,[" Phone : 555-555-5555"])),(l()(),t.rb(17,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.rb(18,0,null,null,23,"div",[["id","bot"]],null,null,null,null,null)),(l()(),t.rb(19,0,null,null,19,"div",[["id","table"]],null,null,null,null,null)),(l()(),t.rb(20,0,null,null,14,"table",[],null,null,null,null,null)),(l()(),t.rb(21,0,null,null,9,"tr",[["class","tabletitle"]],null,null,null,null,null)),(l()(),t.rb(22,0,null,null,2,"td",[["class","item"]],null,null,null,null,null)),(l()(),t.rb(23,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Item"])),(l()(),t.rb(25,0,null,null,2,"td",[["class","Hours"]],null,null,null,null,null)),(l()(),t.rb(26,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Qty"])),(l()(),t.rb(28,0,null,null,2,"td",[["class","Rate"]],null,null,null,null,null)),(l()(),t.rb(29,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Sub Total Kshs"])),(l()(),t.gb(16777216,null,null,1,null,x)),t.qb(32,278528,null,0,r.k,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.gb(16777216,null,null,1,null,_)),t.qb(34,278528,null,0,r.k,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.rb(35,0,null,null,3,"div",[["style","text-align: center"]],null,null,null,null,null)),(l()(),t.rb(36,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t.rb(37,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Kb(-1,null,["Thank you for shopping with us"])),(l()(),t.gb(16777216,null,null,1,null,k)),t.qb(40,278528,null,0,r.k,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.rb(41,0,null,null,0,"div",[["class","legalcopy"]],null,null,null,null,null))],(function(l,n){var u=n.component;l(n,32,0,u.transaction),l(n,34,0,u.transaction),l(n,40,0,u.transaction)}),(function(l,n){var u=n.component,e=t.Lb(n,5,0,l(n,6,0,t.Db(n.parent,0),u.currentDate,"EEEE, MMMM d y, h:mm:ss a"));l(n,5,0,e)}))}function y(l){return t.Mb(0,[t.Eb(0,r.e,[t.s]),t.Ib(402653184,1,{menu:0}),(l()(),t.rb(2,0,null,null,3,"ion-header",[["style","background-color: #3880ff"]],null,null,null,i.X,i.o)),t.qb(3,49152,null,0,c.C,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,P)),t.qb(5,16384,null,0,r.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(6,0,null,null,8,"ion-content",[],null,null,null,i.S,i.j)),t.qb(7,49152,null,0,c.v,[t.h,t.k,t.x],null,null),(l()(),t.rb(8,0,null,0,2,"div",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,M)),t.qb(10,16384,null,0,r.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,C)),t.qb(12,16384,null,0,r.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,0,1,null,S)),t.qb(14,16384,null,0,r.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,5,0,u.scanbutton),l(n,10,0,u.scanbutton),l(n,12,0,!u.scanbutton),l(n,14,0,!u.scanbutton)}),null)}function q(l){return t.Mb(0,[(l()(),t.rb(0,0,null,null,1,"app-tab1",[],null,null,null,y,m)),t.qb(1,114688,null,0,p,[s.a,b.a,d.m,c.b,c.a,c.Ib,O.a,f.a,h.a],null,null)],(function(l,n){l(n,1,0)}),null)}var K=t.nb("app-tab1",p,q,{},{},[]),w=u("s7LF");u.d(n,"Tab1PageModuleNgFactory",(function(){return z}));var z=t.ob(e,[],(function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[o.a,K]],[3,t.j],t.v]),t.Bb(4608,r.n,r.m,[t.s,[2,r.v]]),t.Bb(4608,c.c,c.c,[t.x,t.g]),t.Bb(4608,c.Jb,c.Jb,[c.c,t.j,t.p]),t.Bb(4608,c.Nb,c.Nb,[c.c,t.j,t.p]),t.Bb(4608,w.l,w.l,[]),t.Bb(1073742336,r.c,r.c,[]),t.Bb(1073742336,c.Fb,c.Fb,[]),t.Bb(1073742336,w.k,w.k,[]),t.Bb(1073742336,w.b,w.b,[]),t.Bb(1073742336,d.p,d.p,[[2,d.u],[2,d.m]]),t.Bb(1073742336,e,e,[]),t.Bb(1024,d.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);