(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"8cDG":function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),o=function(){return function(){}}(),e=t("pMnS"),r=t("oBZk"),i=t("ZZ/e"),a=t("Ip0R"),s=t("mrSG"),c=t("nRyb"),b=t("c92J"),h=t("+HrT"),d=function(){function n(n,l,t,u,o){this.navCtrl=n,this.modalCtrl=l,this.fs=t,this.db=u,this.asC=o,this.myChat=[],this.recepients=[],this.sender=[]}return n.prototype.ngOnInit=function(){this.userID=localStorage.getItem("userID"),this.userPhone=localStorage.getItem("userPhone"),this.getChatsFromMe(),this.getChatsToMe()},n.prototype.logout=function(){return s.__awaiter(this,void 0,void 0,(function(){var n=this;return s.__generator(this,(function(l){switch(l.label){case 0:return[4,this.asC.create({animated:!0,backdropDismiss:!0,cssClass:"./home.page.scss",buttons:[{text:"Logout",handler:function(){n.db.logout(),localStorage.clear()}},{text:"Cancel",role:"cancel"}]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}}))}))},n.prototype.getChatsFromMe=function(){return s.__awaiter(this,void 0,void 0,(function(){var n=this;return s.__generator(this,(function(l){return this.fs.collection("chats",(function(n){return n.orderBy("Time","asc")})).ref.where("UserID","==",this.userID).onSnapshot((function(l){l.docChanges().forEach((function(l){"added"===l.type&&(console.log("New chat: ",l.doc.data()),n.myChat.push(l.doc.data()),console.log(n.myChat),n.receivedMsg=n.myChat[0].Message,console.log(n.receivedMsg.length),n.msg=n.receivedMsg.length>100?n.receivedMsg.substring(0,80)+"...":n.receivedMsg),"modified"===l.type&&console.log("Modified chat: ",l.doc.data()),"removed"===l.type&&console.log("Removed chat: ",l.doc.data())}))})),[2]}))}))},n.prototype.getChatsToMe=function(){return s.__awaiter(this,void 0,void 0,(function(){return s.__generator(this,(function(n){return this.fs.collection("chats").ref.where("sendTo","==",this.userPhone).onSnapshot((function(n){n.docChanges().forEach((function(n){"added"===n.type&&console.log("New chat: ",n.doc.data()),"modified"===n.type&&console.log("Modified chat: ",n.doc.data()),"removed"===n.type&&console.log("Removed chat: ",n.doc.data())}))})),[2]}))}))},n.prototype.groupChats=function(n){var l=this;n.forEach((function(n){l.recepients.push(n.sendTo)}))},n.prototype.chatModal=function(n){return s.__awaiter(this,void 0,void 0,(function(){return s.__generator(this,(function(l){switch(l.label){case 0:return[4,this.modalCtrl.create({component:c.a,componentProps:{SendTo:n.SendTo}})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}}))}))},n.prototype.newChatModal=function(){return s.__awaiter(this,void 0,void 0,(function(){return s.__generator(this,(function(n){switch(n.label){case 0:return[4,this.modalCtrl.create({component:h.a,componentProps:{}})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}}))}))},n}(),p=t("ZYCi"),f=t("fvl4"),g=u.rb({encapsulation:0,styles:[["ion-toolbar[_ngcontent-%COMP%]{border-radius:10px}"]],data:{}});function m(n){return u.Pb(0,[(n()(),u.tb(0,0,null,null,3,"div",[["class","ion-text-center"],["style","margin-top: 200px;"]],null,null,null,null,null)),(n()(),u.tb(1,0,null,null,2,"ion-label",[],null,null,null,r.wb,r.z)),u.sb(2,49152,null,0,i.P,[u.h,u.k,u.z],null,null),(n()(),u.Nb(-1,0,["You have no messages"]))],null,null)}function v(n){return u.Pb(0,[(n()(),u.tb(0,0,null,null,16,"ion-card",[],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.chatModal(n.context.$implicit)&&u),u}),r.eb,r.f)),u.sb(1,49152,null,0,i.o,[u.h,u.k,u.z],null,null),(n()(),u.tb(2,0,null,0,14,"ion-row",[],null,null,null,r.Cb,r.F)),u.sb(3,49152,null,0,i.lb,[u.h,u.k,u.z],null,null),(n()(),u.tb(4,0,null,0,4,"ion-col",[["size","2"]],null,null,null,r.gb,r.j)),u.sb(5,49152,null,0,i.v,[u.h,u.k,u.z],{size:[0,"size"]},null),(n()(),u.tb(6,0,null,0,2,"ion-avatar",[],null,null,null,r.Y,r.b)),u.sb(7,49152,null,0,i.i,[u.h,u.k,u.z],null,null),(n()(),u.tb(8,0,null,0,0,"img",[["alt","img"],["src","../../assets/images/icon.png"]],null,null,null,null,null)),(n()(),u.tb(9,0,null,0,7,"ion-col",[["padding",""]],null,null,null,r.gb,r.j)),u.sb(10,49152,null,0,i.v,[u.h,u.k,u.z],null,null),u.sb(11,16384,null,0,i.f,[u.k],null,null),(n()(),u.tb(12,0,null,0,1,"span",[],null,null,null,null,null)),(n()(),u.Nb(13,null,["",""])),(n()(),u.tb(14,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),u.tb(15,0,null,0,1,"span",[],null,null,null,null,null)),(n()(),u.Nb(16,null,["",""]))],(function(n,l){n(l,5,0,"2")}),(function(n,l){var t=l.component;n(l,13,0,l.context.$implicit.SendTo),n(l,16,0,t.msg)}))}function k(n){return u.Pb(0,[(n()(),u.tb(0,0,null,null,14,"ion-header",[["style","background-color: #3880ff;"]],null,null,null,r.nb,r.q)),u.sb(1,49152,null,0,i.D,[u.h,u.k,u.z],null,null),(n()(),u.tb(2,0,null,0,12,"ion-toolbar",[["color","primary"]],null,null,null,r.Tb,r.W)),u.sb(3,49152,null,0,i.Eb,[u.h,u.k,u.z],{color:[0,"color"]},null),(n()(),u.tb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.bb,r.e)),u.sb(5,49152,null,0,i.n,[u.h,u.k,u.z],null,null),(n()(),u.tb(6,0,null,0,1,"ion-menu-button",[["autoHide","false"]],null,null,null,r.yb,r.C)),u.sb(7,49152,null,0,i.T,[u.h,u.k,u.z],{autoHide:[0,"autoHide"]},null),(n()(),u.tb(8,0,null,0,2,"ion-title",[],null,null,null,r.Rb,r.U)),u.sb(9,49152,null,0,i.Cb,[u.h,u.k,u.z],null,null),(n()(),u.Nb(-1,0,[" Chats "])),(n()(),u.tb(11,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,r.bb,r.e)),u.sb(12,49152,null,0,i.n,[u.h,u.k,u.z],null,null),(n()(),u.tb(13,0,null,0,1,"ion-icon",[["name","log-out"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.logout()&&u),u}),r.ob,r.r)),u.sb(14,49152,null,0,i.E,[u.h,u.k,u.z],{name:[0,"name"]},null),(n()(),u.tb(15,0,null,null,11,"ion-content",[],null,null,null,r.hb,r.k)),u.sb(16,49152,null,0,i.w,[u.h,u.k,u.z],null,null),(n()(),u.ib(16777216,null,0,1,null,m)),u.sb(18,16384,null,0,a.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.ib(16777216,null,0,1,null,v)),u.sb(20,278528,null,0,a.l,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(n()(),u.tb(21,0,null,0,5,"ion-fab",[["horizontal","end"],["vertical","bottom"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.newChatModal()&&u),u}),r.kb,r.m)),u.sb(22,49152,null,0,i.y,[u.h,u.k,u.z],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),u.tb(23,0,null,0,3,"ion-fab-button",[["icon-only",""]],null,null,null,r.jb,r.n)),u.sb(24,49152,null,0,i.z,[u.h,u.k,u.z],null,null),(n()(),u.tb(25,0,null,0,1,"ion-icon",[["name","chatbubbles"]],null,null,null,r.ob,r.r)),u.sb(26,49152,null,0,i.E,[u.h,u.k,u.z],{name:[0,"name"]},null)],(function(n,l){var t=l.component;n(l,3,0,"primary"),n(l,7,0,"false"),n(l,14,0,"log-out"),n(l,18,0,0==t.myChat.length),n(l,20,0,t.myChat),n(l,22,0,"end","bottom"),n(l,26,0,"chatbubbles")}),null)}function y(n){return u.Pb(0,[(n()(),u.tb(0,0,null,null,1,"app-tab2",[],null,null,null,k,g)),u.sb(1,114688,null,0,d,[p.m,i.Kb,f.a,b.a,i.a],null,null)],(function(n,l){n(l,1,0)}),null)}var C=u.pb("app-tab2",d,y,{},{},[]),z=t("gIcY");t.d(l,"Tab2PageModuleNgFactory",(function(){return w}));var w=u.qb(o,[],(function(n){return u.Cb([u.Db(512,u.j,u.bb,[[8,[e.a,C]],[3,u.j],u.x]),u.Db(4608,a.o,a.n,[u.u,[2,a.w]]),u.Db(4608,i.c,i.c,[u.z,u.g]),u.Db(4608,i.Kb,i.Kb,[i.c,u.j,u.q]),u.Db(4608,i.Pb,i.Pb,[i.c,u.j,u.q]),u.Db(4608,z.y,z.y,[]),u.Db(1073742336,a.c,a.c,[]),u.Db(1073742336,i.Gb,i.Gb,[]),u.Db(1073742336,z.x,z.x,[]),u.Db(1073742336,z.j,z.j,[]),u.Db(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),u.Db(1073742336,o,o,[]),u.Db(1024,p.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);