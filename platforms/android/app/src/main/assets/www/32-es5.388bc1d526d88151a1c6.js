(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"8cDG":function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),o=function(){return function(){}}(),e=t("pMnS"),r=t("oBZk"),i=t("ZZ/e"),a=t("Ip0R"),s=t("mrSG"),c=t("nRyb"),b=t("c92J"),h=t("+HrT"),d=function(){function l(l,n,t,u,o){this.navCtrl=l,this.modalCtrl=n,this.fs=t,this.db=u,this.asC=o,this.myChat=[],this.recepients=[],this.sender=[]}return l.prototype.ngOnInit=function(){this.userID=localStorage.getItem("userID"),this.userPhone=localStorage.getItem("userPhone"),this.getChatsFromMe(),this.getChatsToMe()},l.prototype.logout=function(){return s.__awaiter(this,void 0,void 0,(function(){var l=this;return s.__generator(this,(function(n){switch(n.label){case 0:return[4,this.asC.create({animated:!0,backdropDismiss:!0,cssClass:"./home.page.scss",buttons:[{text:"Logout",handler:function(){l.db.logout(),localStorage.clear()}},{text:"Cancel",role:"cancel"}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}}))}))},l.prototype.getChatsFromMe=function(){return s.__awaiter(this,void 0,void 0,(function(){var l=this;return s.__generator(this,(function(n){return this.fs.collection("chats",(function(l){return l.orderBy("Time","asc")})).ref.where("UserID","==",this.userID).onSnapshot((function(n){n.docChanges().forEach((function(n){"added"===n.type&&(console.log("New chat: ",n.doc.data()),l.myChat.push(n.doc.data()),console.log(l.myChat),l.receivedMsg=l.myChat[0].Message,console.log(l.receivedMsg.length),l.msg=l.receivedMsg.length>100?l.receivedMsg.substring(0,80)+"...":l.receivedMsg),"modified"===n.type&&console.log("Modified chat: ",n.doc.data()),"removed"===n.type&&console.log("Removed chat: ",n.doc.data())}))})),[2]}))}))},l.prototype.getChatsToMe=function(){return s.__awaiter(this,void 0,void 0,(function(){return s.__generator(this,(function(l){return this.fs.collection("chats").ref.where("sendTo","==",this.userPhone).onSnapshot((function(l){l.docChanges().forEach((function(l){"added"===l.type&&console.log("New chat: ",l.doc.data()),"modified"===l.type&&console.log("Modified chat: ",l.doc.data()),"removed"===l.type&&console.log("Removed chat: ",l.doc.data())}))})),[2]}))}))},l.prototype.groupChats=function(l){var n=this;l.forEach((function(l){n.recepients.push(l.sendTo)}))},l.prototype.chatModal=function(l){return s.__awaiter(this,void 0,void 0,(function(){return s.__generator(this,(function(n){switch(n.label){case 0:return[4,this.modalCtrl.create({component:c.a,componentProps:{SendTo:l.SendTo}})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}}))}))},l.prototype.newChatModal=function(){return s.__awaiter(this,void 0,void 0,(function(){return s.__generator(this,(function(l){switch(l.label){case 0:return[4,this.modalCtrl.create({component:h.a,componentProps:{}})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}}))}))},l}(),p=t("ZYCi"),f=t("fvl4"),g=u.rb({encapsulation:0,styles:[["ion-toolbar[_ngcontent-%COMP%]{border-radius:10px}"]],data:{}});function m(l){return u.Ob(0,[(l()(),u.tb(0,0,null,null,3,"div",[["class","ion-text-center"],["style","margin-top: 200px;"]],null,null,null,null,null)),(l()(),u.tb(1,0,null,null,2,"ion-label",[],null,null,null,r.nb,r.v)),u.sb(2,49152,null,0,i.P,[u.h,u.k,u.z],null,null),(l()(),u.Mb(-1,0,["You have no messages"]))],null,null)}function v(l){return u.Ob(0,[(l()(),u.tb(0,0,null,null,16,"ion-card",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.chatModal(l.context.$implicit)&&u),u}),r.Z,r.f)),u.sb(1,49152,null,0,i.o,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,14,"ion-row",[],null,null,null,r.sb,r.A)),u.sb(3,49152,null,0,i.lb,[u.h,u.k,u.z],null,null),(l()(),u.tb(4,0,null,0,4,"ion-col",[["size","2"]],null,null,null,r.bb,r.j)),u.sb(5,49152,null,0,i.v,[u.h,u.k,u.z],{size:[0,"size"]},null),(l()(),u.tb(6,0,null,0,2,"ion-avatar",[],null,null,null,r.T,r.b)),u.sb(7,49152,null,0,i.i,[u.h,u.k,u.z],null,null),(l()(),u.tb(8,0,null,0,0,"img",[["alt","img"],["src","../../assets/images/icon.png"]],null,null,null,null,null)),(l()(),u.tb(9,0,null,0,7,"ion-col",[["padding",""]],null,null,null,r.bb,r.j)),u.sb(10,49152,null,0,i.v,[u.h,u.k,u.z],null,null),u.sb(11,16384,null,0,i.f,[u.k],null,null),(l()(),u.tb(12,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),u.Mb(13,null,["",""])),(l()(),u.tb(14,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.tb(15,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),u.Mb(16,null,["",""]))],(function(l,n){l(n,5,0,"2")}),(function(l,n){var t=n.component;l(n,13,0,n.context.$implicit.SendTo),l(n,16,0,t.msg)}))}function k(l){return u.Ob(0,[(l()(),u.tb(0,0,null,null,14,"ion-header",[["style","background-color: #3880ff;"]],null,null,null,r.hb,r.p)),u.sb(1,49152,null,0,i.D,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,12,"ion-toolbar",[["color","primary"]],null,null,null,r.Jb,r.R)),u.sb(3,49152,null,0,i.Eb,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.tb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.W,r.e)),u.sb(5,49152,null,0,i.n,[u.h,u.k,u.z],null,null),(l()(),u.tb(6,0,null,0,1,"ion-menu-button",[["autoHide","false"]],null,null,null,r.pb,r.y)),u.sb(7,49152,null,0,i.T,[u.h,u.k,u.z],{autoHide:[0,"autoHide"]},null),(l()(),u.tb(8,0,null,0,2,"ion-title",[],null,null,null,r.Hb,r.P)),u.sb(9,49152,null,0,i.Cb,[u.h,u.k,u.z],null,null),(l()(),u.Mb(-1,0,[" Chats "])),(l()(),u.tb(11,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,r.W,r.e)),u.sb(12,49152,null,0,i.n,[u.h,u.k,u.z],null,null),(l()(),u.tb(13,0,null,0,1,"ion-icon",[["name","log-out"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.logout()&&u),u}),r.ib,r.q)),u.sb(14,49152,null,0,i.E,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.tb(15,0,null,null,11,"ion-content",[],null,null,null,r.cb,r.k)),u.sb(16,49152,null,0,i.w,[u.h,u.k,u.z],null,null),(l()(),u.ib(16777216,null,0,1,null,m)),u.sb(18,16384,null,0,a.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.ib(16777216,null,0,1,null,v)),u.sb(20,278528,null,0,a.l,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u.tb(21,0,null,0,5,"ion-fab",[["horizontal","end"],["vertical","bottom"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.newChatModal()&&u),u}),r.eb,r.l)),u.sb(22,49152,null,0,i.y,[u.h,u.k,u.z],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.tb(23,0,null,0,3,"ion-fab-button",[["icon-only",""]],null,null,null,r.db,r.m)),u.sb(24,49152,null,0,i.z,[u.h,u.k,u.z],null,null),(l()(),u.tb(25,0,null,0,1,"ion-icon",[["name","chatbubbles"]],null,null,null,r.ib,r.q)),u.sb(26,49152,null,0,i.E,[u.h,u.k,u.z],{name:[0,"name"]},null)],(function(l,n){var t=n.component;l(n,3,0,"primary"),l(n,7,0,"false"),l(n,14,0,"log-out"),l(n,18,0,0==t.myChat.length),l(n,20,0,t.myChat),l(n,22,0,"end","bottom"),l(n,26,0,"chatbubbles")}),null)}function y(l){return u.Ob(0,[(l()(),u.tb(0,0,null,null,1,"app-tab2",[],null,null,null,k,g)),u.sb(1,114688,null,0,d,[p.m,i.Kb,f.a,b.a,i.a],null,null)],(function(l,n){l(n,1,0)}),null)}var C=u.pb("app-tab2",d,y,{},{},[]),z=t("gIcY");t.d(n,"Tab2PageModuleNgFactory",(function(){return w}));var w=u.qb(o,[],(function(l){return u.Cb([u.Db(512,u.j,u.bb,[[8,[e.a,C]],[3,u.j],u.x]),u.Db(4608,a.o,a.n,[u.u,[2,a.w]]),u.Db(4608,i.c,i.c,[u.z,u.g]),u.Db(4608,i.Kb,i.Kb,[i.c,u.j,u.q]),u.Db(4608,i.Pb,i.Pb,[i.c,u.j,u.q]),u.Db(4608,z.v,z.v,[]),u.Db(1073742336,a.c,a.c,[]),u.Db(1073742336,i.Gb,i.Gb,[]),u.Db(1073742336,z.u,z.u,[]),u.Db(1073742336,z.i,z.i,[]),u.Db(1073742336,p.p,p.p,[[2,p.u],[2,p.m]]),u.Db(1073742336,o,o,[]),u.Db(1024,p.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);