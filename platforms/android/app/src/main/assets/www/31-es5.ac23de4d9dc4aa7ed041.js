(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{W9vR:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),i=u("pMnS"),o=u("oBZk"),a=u("ZZ/e"),s=u("gIcY"),r=u("Ip0R"),b=u("mrSG"),c=u("CKys"),h=u("iWj2"),d=u("uRF+"),m=u("cShL"),p=u("mvCV"),g=u("Pn9U"),k=u("YWyl"),f=function(){function l(l,n,u,t,e,i,o,a,s){this.navCtrl=l,this.modalCtrl=n,this.fileChooser=u,this.filePath=t,this.asC=e,this.storage=i,this.database=o,this.camera=a,this.service=s,this.videos=[],this.images=[],this.likes={count:0},this.liked=!1,this.h=!1,this.Addcomment=!1,this.service.hiddenTabs=!1}return l.prototype.ngOnInit=function(){},l.prototype.onScroll=function(l){148===l.detail.scrollTop?(this.service.hiddenTabs=!1,console.log("00000000")):l.detail.scrollTop>30?(console.log(">>>> 30"),this.service.hiddenTabs=!0):this.service.hiddenTabs=!1},l.prototype.share=function(){return b.__awaiter(this,void 0,void 0,(function(){return b.__generator(this,(function(l){switch(l.label){case 0:return[4,this.asC.create({animated:!0,backdropDismiss:!0,cssClass:"./home.page.scss",buttons:[{icon:"logo-whatsapp",text:"Whatsapp",handler:function(){}},{text:"Cancel",role:"cancel"}]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}}))}))},l.prototype.comments=function(){return b.__awaiter(this,void 0,void 0,(function(){return b.__generator(this,(function(l){switch(l.label){case 0:return[4,this.modalCtrl.create({component:p.a,componentProps:{}})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}}))}))},l.prototype.like=function(){!1===this.liked?(this.likes.count++,this.liked=!0):(this.likes.count--,this.liked=!1),this.h=!1===this.h},l.prototype.infoModal=function(l){return b.__awaiter(this,void 0,void 0,(function(){return b.__generator(this,(function(n){switch(n.label){case 0:return[4,this.modalCtrl.create({component:m.a,componentProps:{shopname:l}})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}}))}))},l.prototype.openPostModal=function(){return b.__awaiter(this,void 0,void 0,(function(){return b.__generator(this,(function(l){switch(l.label){case 0:return[4,this.modalCtrl.create({component:c.a,componentProps:{}})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}}))}))},l.prototype.postFile=function(l){return b.__awaiter(this,void 0,void 0,(function(){return b.__generator(this,(function(n){switch(n.label){case 0:return[4,this.modalCtrl.create({component:c.a,componentProps:{url:l}})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}}))}))},l.prototype.pickFile=function(l){var n=this;"image"===l?this.camera.getPicture({quality:100,destinationType:this.camera.DestinationType.FILE_URI,sourceType:this.camera.PictureSourceType.SAVEDPHOTOALBUM,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,targetHeight:100}).then((function(l){n.images.push(l),n.postFile(n.images)}),(function(l){})):this.camera.getPicture({quality:100,destinationType:this.camera.DestinationType.FILE_URI,sourceType:this.camera.PictureSourceType.SAVEDPHOTOALBUM,mediaType:this.camera.MediaType.VIDEO,targetHeight:100}).then((function(l){n.videos.push(l)}),(function(l){}))},l}(),z=u("ZYCi"),v=u("VRER"),M=u("fvl4"),y=t.rb({encapsulation:0,styles:[["a[_ngcontent-%COMP%]{text-decoration:none}.color[_ngcontent-%COMP%]{color:#3880ff}ion-card[_ngcontent-%COMP%]{margin-right:0;margin-left:0}.img[_ngcontent-%COMP%]{width:100%}.top-card[_ngcontent-%COMP%]{border-bottom:5px var(--ion-color-secondary);margin-top:0;padding-top:10px;margin-left:0;margin-right:0}"]],data:{}});function C(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,12,"div",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,11,"ion-item",[],null,null,null,o.mb,o.t)),t.sb(2,49152,null,0,a.J,[t.h,t.k,t.z],null,null),(l()(),t.tb(3,0,null,0,2,"ion-avatar",[],null,null,null,o.S,o.b)),t.sb(4,49152,null,0,a.i,[t.h,t.k,t.z],null,null),(l()(),t.tb(5,0,null,0,0,"img",[["src","../../assets/images/icon.png"]],null,null,null,null,null)),(l()(),t.Mb(-1,0,["\xa0\xa0 "])),(l()(),t.tb(7,0,null,0,3,"ion-textarea",[["name","text"],["placeholder","Add a comment..."],["required",""]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.Fb(l,10)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Fb(l,10)._handleInputEvent(u.target)&&e),e}),o.Db,o.M)),t.Jb(5120,null,s.j,(function(l){return[l]}),[a.Rb]),t.sb(9,49152,null,0,a.Ab,[t.h,t.k,t.z],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"]},null),t.sb(10,16384,null,0,a.Rb,[t.k],null,null),(l()(),t.tb(11,0,null,0,1,"a",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Post"]))],(function(l,n){l(n,9,0,"text","Add a comment...","")}),null)}function w(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,12,"div",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,11,"ion-item",[],null,null,null,o.mb,o.t)),t.sb(2,49152,null,0,a.J,[t.h,t.k,t.z],null,null),(l()(),t.tb(3,0,null,0,2,"ion-avatar",[],null,null,null,o.S,o.b)),t.sb(4,49152,null,0,a.i,[t.h,t.k,t.z],null,null),(l()(),t.tb(5,0,null,0,0,"img",[["src","../../assets/images/icon.png"]],null,null,null,null,null)),(l()(),t.Mb(-1,0,["\xa0\xa0 "])),(l()(),t.tb(7,0,null,0,3,"ion-textarea",[["name","text"],["placeholder","Add a comment..."],["required",""]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.Fb(l,10)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Fb(l,10)._handleInputEvent(u.target)&&e),e}),o.Db,o.M)),t.Jb(5120,null,s.j,(function(l){return[l]}),[a.Rb]),t.sb(9,49152,null,0,a.Ab,[t.h,t.k,t.z],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"]},null),t.sb(10,16384,null,0,a.Rb,[t.k],null,null),(l()(),t.tb(11,0,null,0,1,"a",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["Post"]))],(function(l,n){l(n,9,0,"text","Add a comment...","")}),null)}function P(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,40,"ion-card",[["class","top-card"],["disabled",""]],null,null,null,o.Z,o.f)),t.sb(1,49152,null,0,a.o,[t.h,t.k,t.z],{disabled:[0,"disabled"]},null),(l()(),t.tb(2,0,null,0,18,"ion-row",[],null,null,null,o.sb,o.B)),t.sb(3,49152,null,0,a.lb,[t.h,t.k,t.z],null,null),(l()(),t.tb(4,0,null,0,7,"ion-chip",[],null,null,null,o.ab,o.j)),t.sb(5,49152,null,0,a.u,[t.h,t.k,t.z],null,null),(l()(),t.tb(6,0,null,0,2,"ion-avatar",[],null,null,null,o.S,o.b)),t.sb(7,49152,null,0,a.i,[t.h,t.k,t.z],null,null),(l()(),t.tb(8,0,null,0,0,"img",[["src","../../assets/images/icon.png"]],null,null,null,null,null)),(l()(),t.tb(9,0,null,0,2,"ion-label",[],null,null,null,o.nb,o.w)),t.sb(10,49152,null,0,a.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["You"])),(l()(),t.tb(12,0,null,0,8,"ion-input",[["clearInput",""],["placeholder","Enter a new post"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"click"],[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Fb(l,14)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Fb(l,14)._handleInputEvent(u.target)&&e),"click"===n&&(e=!1!==i.openPostModal()&&e),"ngModelChange"===n&&(e=!1!==(i.post=u)&&e),e}),o.jb,o.s)),t.sb(13,49152,null,0,a.I,[t.h,t.k,t.z],{clearInput:[0,"clearInput"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),t.sb(14,16384,null,0,a.Rb,[t.k],null,null),t.sb(15,16384,null,0,s.q,[],{required:[0,"required"]},null),t.Jb(1024,null,s.i,(function(l){return[l]}),[s.q]),t.Jb(1024,null,s.j,(function(l){return[l]}),[a.Rb]),t.sb(18,671744,null,0,s.o,[[8,null],[6,s.i],[8,null],[6,s.j]],{model:[0,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,s.k,null,[s.o]),t.sb(20,16384,null,0,s.l,[[4,s.k]],null,null),(l()(),t.tb(21,0,null,0,19,"ion-item",[["class","ion-text-center"]],null,null,null,o.mb,o.t)),t.sb(22,49152,null,0,a.J,[t.h,t.k,t.z],null,null),(l()(),t.tb(23,0,null,0,7,"ion-buttons",[["slot","start"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.pickFile("image")&&t),t}),o.V,o.e)),t.sb(24,49152,null,0,a.n,[t.h,t.k,t.z],null,null),(l()(),t.tb(25,0,null,0,1,"ion-icon",[["name","image"]],null,null,null,o.ib,o.r)),t.sb(26,49152,null,0,a.E,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.Mb(-1,0,["\xa0\xa0 "])),(l()(),t.tb(28,0,null,0,2,"ion-label",[],null,null,null,o.nb,o.w)),t.sb(29,49152,null,0,a.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["Image"])),(l()(),t.tb(31,0,null,0,1,"b",[["style","margin-left: 45%;"]],null,null,null,null,null)),(l()(),t.Mb(-1,null,["|"])),(l()(),t.tb(33,0,null,0,7,"ion-buttons",[["slot","end"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.pickFile("video")&&t),t}),o.V,o.e)),t.sb(34,49152,null,0,a.n,[t.h,t.k,t.z],null,null),(l()(),t.tb(35,0,null,0,1,"ion-icon",[["name","videocam"]],null,null,null,o.ib,o.r)),t.sb(36,49152,null,0,a.E,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.Mb(-1,0,["\xa0\xa0 "])),(l()(),t.tb(38,0,null,0,2,"ion-label",[],null,null,null,o.nb,o.w)),t.sb(39,49152,null,0,a.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["video"])),(l()(),t.tb(41,0,null,null,133,"ion-content",[],null,[[null,"ionScroll"]],(function(l,n,u){var t=!0;return"ionScroll"===n&&(t=!1!==l.component.onScroll(u)&&t),t}),o.cb,o.l)),t.sb(42,49152,null,0,a.w,[t.h,t.k,t.z],{scrollEvents:[0,"scrollEvents"]},null),(l()(),t.tb(43,0,null,0,65,"ion-card",[["disabled",""]],null,null,null,o.Z,o.f)),t.sb(44,49152,null,0,a.o,[t.h,t.k,t.z],{disabled:[0,"disabled"]},null),(l()(),t.tb(45,0,null,0,12,"ion-card-header",[],null,null,null,o.X,o.h)),t.sb(46,49152,null,0,a.q,[t.h,t.k,t.z],null,null),(l()(),t.tb(47,0,null,0,7,"ion-chip",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.infoModal("shop")&&t),t}),o.ab,o.j)),t.sb(48,49152,null,0,a.u,[t.h,t.k,t.z],null,null),(l()(),t.tb(49,0,null,0,2,"ion-avatar",[],null,null,null,o.S,o.b)),t.sb(50,49152,null,0,a.i,[t.h,t.k,t.z],null,null),(l()(),t.tb(51,0,null,0,0,"img",[["src","../../assets/images/icon.png"]],null,null,null,null,null)),(l()(),t.tb(52,0,null,0,2,"ion-label",[],null,null,null,o.nb,o.w)),t.sb(53,49152,null,0,a.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["QuickMatt"])),(l()(),t.Mb(-1,0,[" 1 hr . "])),(l()(),t.tb(56,0,null,0,1,"ion-icon",[["name","globe"]],null,null,null,o.ib,o.r)),t.sb(57,49152,null,0,a.E,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.tb(58,0,null,0,6,"ion-card-content",[["no-padding",""]],null,null,null,o.W,o.g)),t.sb(59,49152,null,0,a.p,[t.h,t.k,t.z],null,null),t.sb(60,16384,null,0,a.f,[t.k],null,null),(l()(),t.tb(61,0,null,0,0,"img",[["src","../../assets/images/ad.jpg"],["width","100%"]],null,null,null,null,null)),(l()(),t.tb(62,0,null,0,2,"ion-text",[],null,null,null,o.Cb,o.L)),t.sb(63,49152,null,0,a.zb,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,[" Mega discounts this friday . "])),(l()(),t.tb(65,0,null,0,12,"ion-item",[["style","margin-left:0;margin-right:0;"]],null,null,null,o.mb,o.t)),t.sb(66,49152,null,0,a.J,[t.h,t.k,t.z],null,null),(l()(),t.tb(67,0,null,0,4,"ion-icon",[["name","heart"],["size","large"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.like()&&t),t}),o.ib,o.r)),t.sb(68,49152,null,0,a.E,[t.h,t.k,t.z],{name:[0,"name"],size:[1,"size"]},null),t.Jb(512,null,r.t,r.u,[t.s,t.t,t.k,t.D]),t.sb(70,278528,null,0,r.k,[r.t],{ngClass:[0,"ngClass"]},null),t.Hb(71,{color:0}),(l()(),t.Mb(-1,0,["\xa0\xa0\xa0\xa0 "])),(l()(),t.tb(73,0,null,0,1,"ion-icon",[["name","chatboxes"],["size","large"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=0!=(l.component.Addcomment=!0)&&t),t}),o.ib,o.r)),t.sb(74,49152,null,0,a.E,[t.h,t.k,t.z],{name:[0,"name"],size:[1,"size"]},null),(l()(),t.Mb(-1,0,["\xa0\xa0\xa0\xa0 "])),(l()(),t.tb(76,0,null,0,1,"ion-icon",[["name","share-alt"],["size","large"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.share()&&t),t}),o.ib,o.r)),t.sb(77,49152,null,0,a.E,[t.h,t.k,t.z],{name:[0,"name"],size:[1,"size"]},null),(l()(),t.tb(78,0,null,0,30,"div",[],null,null,null,null,null)),(l()(),t.tb(79,0,null,null,3,"ion-label",[["padding",""]],null,null,null,o.nb,o.w)),t.sb(80,49152,null,0,a.P,[t.h,t.k,t.z],null,null),t.sb(81,16384,null,0,a.f,[t.k],null,null),(l()(),t.Mb(82,0,[""," likes"])),(l()(),t.tb(83,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(84,0,null,null,21,"div",[],null,null,null,null,null)),(l()(),t.tb(85,0,null,null,18,"ion-item",[],null,null,null,o.mb,o.t)),t.sb(86,49152,null,0,a.J,[t.h,t.k,t.z],null,null),(l()(),t.tb(87,0,null,0,7,"ion-chip",[],null,null,null,o.ab,o.j)),t.sb(88,49152,null,0,a.u,[t.h,t.k,t.z],null,null),(l()(),t.tb(89,0,null,0,2,"ion-avatar",[],null,null,null,o.S,o.b)),t.sb(90,49152,null,0,a.i,[t.h,t.k,t.z],null,null),(l()(),t.tb(91,0,null,0,0,"img",[["src","../../assets/images/icon.png"]],null,null,null,null,null)),(l()(),t.tb(92,0,null,0,2,"ion-label",[],null,null,null,o.nb,o.w)),t.sb(93,49152,null,0,a.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["1 hr ."])),(l()(),t.tb(95,0,null,0,8,"ion-col",[],null,null,null,o.bb,o.k)),t.sb(96,49152,null,0,a.v,[t.h,t.k,t.z],null,null),(l()(),t.tb(97,0,null,0,2,"ion-label",[["style","font-size: 11pt;"]],null,null,null,o.nb,o.w)),t.sb(98,49152,null,0,a.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["Joseph"])),(l()(),t.tb(100,0,null,0,2,"ion-text",[["style","font-size: 10pt;"]],null,null,null,o.Cb,o.L)),t.sb(101,49152,null,0,a.zb,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["We are very pleased with the turn up this week. looking forward to set out another mega sale discount"])),(l()(),t.tb(103,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,C)),t.sb(105,16384,null,0,r.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(106,0,null,null,2,"a",[["padding",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.comments()&&t),t}),null,null)),t.sb(107,16384,null,0,a.f,[t.k],null,null),(l()(),t.Mb(-1,null,["view all comments"])),(l()(),t.tb(109,0,null,0,65,"ion-card",[["disabled",""]],null,null,null,o.Z,o.f)),t.sb(110,49152,null,0,a.o,[t.h,t.k,t.z],{disabled:[0,"disabled"]},null),(l()(),t.tb(111,0,null,0,12,"ion-card-header",[],null,null,null,o.X,o.h)),t.sb(112,49152,null,0,a.q,[t.h,t.k,t.z],null,null),(l()(),t.tb(113,0,null,0,7,"ion-chip",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.infoModal("shop")&&t),t}),o.ab,o.j)),t.sb(114,49152,null,0,a.u,[t.h,t.k,t.z],null,null),(l()(),t.tb(115,0,null,0,2,"ion-avatar",[],null,null,null,o.S,o.b)),t.sb(116,49152,null,0,a.i,[t.h,t.k,t.z],null,null),(l()(),t.tb(117,0,null,0,0,"img",[["src","../../assets/images/icon.png"]],null,null,null,null,null)),(l()(),t.tb(118,0,null,0,2,"ion-label",[],null,null,null,o.nb,o.w)),t.sb(119,49152,null,0,a.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["QuickMatt"])),(l()(),t.Mb(-1,0,[" 1 hr . "])),(l()(),t.tb(122,0,null,0,1,"ion-icon",[["name","globe"]],null,null,null,o.ib,o.r)),t.sb(123,49152,null,0,a.E,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.tb(124,0,null,0,6,"ion-card-content",[["no-padding",""]],null,null,null,o.W,o.g)),t.sb(125,49152,null,0,a.p,[t.h,t.k,t.z],null,null),t.sb(126,16384,null,0,a.f,[t.k],null,null),(l()(),t.tb(127,0,null,0,0,"img",[["src","../../assets/images/ad.jpg"],["width","100%"]],null,null,null,null,null)),(l()(),t.tb(128,0,null,0,2,"ion-text",[],null,null,null,o.Cb,o.L)),t.sb(129,49152,null,0,a.zb,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,[" Mega discounts this friday . "])),(l()(),t.tb(131,0,null,0,12,"ion-item",[["style","margin-left:0;margin-right:0;"]],null,null,null,o.mb,o.t)),t.sb(132,49152,null,0,a.J,[t.h,t.k,t.z],null,null),(l()(),t.tb(133,0,null,0,4,"ion-icon",[["name","heart"],["size","large"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.like()&&t),t}),o.ib,o.r)),t.sb(134,49152,null,0,a.E,[t.h,t.k,t.z],{name:[0,"name"],size:[1,"size"]},null),t.Jb(512,null,r.t,r.u,[t.s,t.t,t.k,t.D]),t.sb(136,278528,null,0,r.k,[r.t],{ngClass:[0,"ngClass"]},null),t.Hb(137,{color:0}),(l()(),t.Mb(-1,0,["\xa0\xa0\xa0\xa0 "])),(l()(),t.tb(139,0,null,0,1,"ion-icon",[["name","chatboxes"],["size","large"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=0!=(l.component.Addcomment=!0)&&t),t}),o.ib,o.r)),t.sb(140,49152,null,0,a.E,[t.h,t.k,t.z],{name:[0,"name"],size:[1,"size"]},null),(l()(),t.Mb(-1,0,["\xa0\xa0\xa0\xa0 "])),(l()(),t.tb(142,0,null,0,1,"ion-icon",[["name","share-alt"],["size","large"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.share()&&t),t}),o.ib,o.r)),t.sb(143,49152,null,0,a.E,[t.h,t.k,t.z],{name:[0,"name"],size:[1,"size"]},null),(l()(),t.tb(144,0,null,0,30,"div",[],null,null,null,null,null)),(l()(),t.tb(145,0,null,null,3,"ion-label",[["padding",""]],null,null,null,o.nb,o.w)),t.sb(146,49152,null,0,a.P,[t.h,t.k,t.z],null,null),t.sb(147,16384,null,0,a.f,[t.k],null,null),(l()(),t.Mb(148,0,[""," likes"])),(l()(),t.tb(149,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.tb(150,0,null,null,21,"div",[],null,null,null,null,null)),(l()(),t.tb(151,0,null,null,18,"ion-item",[],null,null,null,o.mb,o.t)),t.sb(152,49152,null,0,a.J,[t.h,t.k,t.z],null,null),(l()(),t.tb(153,0,null,0,7,"ion-chip",[],null,null,null,o.ab,o.j)),t.sb(154,49152,null,0,a.u,[t.h,t.k,t.z],null,null),(l()(),t.tb(155,0,null,0,2,"ion-avatar",[],null,null,null,o.S,o.b)),t.sb(156,49152,null,0,a.i,[t.h,t.k,t.z],null,null),(l()(),t.tb(157,0,null,0,0,"img",[["src","../../assets/images/icon.png"]],null,null,null,null,null)),(l()(),t.tb(158,0,null,0,2,"ion-label",[],null,null,null,o.nb,o.w)),t.sb(159,49152,null,0,a.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["1 hr ."])),(l()(),t.tb(161,0,null,0,8,"ion-col",[],null,null,null,o.bb,o.k)),t.sb(162,49152,null,0,a.v,[t.h,t.k,t.z],null,null),(l()(),t.tb(163,0,null,0,2,"ion-label",[["style","font-size: 11pt;"]],null,null,null,o.nb,o.w)),t.sb(164,49152,null,0,a.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["Joseph"])),(l()(),t.tb(166,0,null,0,2,"ion-text",[["style","font-size: 10pt;"]],null,null,null,o.Cb,o.L)),t.sb(167,49152,null,0,a.zb,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["We are very pleased with the turn up this week. looking forward to set out another mega sale discount"])),(l()(),t.tb(169,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,w)),t.sb(171,16384,null,0,r.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(172,0,null,null,2,"a",[["padding",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.comments()&&t),t}),null,null)),t.sb(173,16384,null,0,a.f,[t.k],null,null),(l()(),t.Mb(-1,null,["view all comments"]))],(function(l,n){var u=n.component;l(n,1,0,""),l(n,13,0,"","Enter a new post","","text"),l(n,15,0,""),l(n,18,0,u.post),l(n,26,0,"image"),l(n,36,0,"videocam"),l(n,42,0,!0),l(n,44,0,""),l(n,57,0,"globe"),l(n,68,0,"heart","large");var t=l(n,71,0,u.h);l(n,70,0,t),l(n,74,0,"chatboxes","large"),l(n,77,0,"share-alt","large"),l(n,105,0,u.Addcomment),l(n,110,0,""),l(n,123,0,"globe"),l(n,134,0,"heart","large");var e=l(n,137,0,u.h);l(n,136,0,e),l(n,140,0,"chatboxes","large"),l(n,143,0,"share-alt","large"),l(n,171,0,u.Addcomment)}),(function(l,n){var u=n.component;l(n,12,0,t.Fb(n,15).required?"":null,t.Fb(n,20).ngClassUntouched,t.Fb(n,20).ngClassTouched,t.Fb(n,20).ngClassPristine,t.Fb(n,20).ngClassDirty,t.Fb(n,20).ngClassValid,t.Fb(n,20).ngClassInvalid,t.Fb(n,20).ngClassPending),l(n,82,0,u.likes.count),l(n,148,0,u.likes.count)}))}function _(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,1,"app-tab3",[],null,null,null,P,y)),t.sb(1,114688,null,0,f,[z.m,a.Kb,d.a,h.a,a.a,v.a,M.a,g.a,k.a],null,null)],(function(l,n){l(n,1,0)}),null)}var E=t.pb("app-tab3",f,_,{},{},[]);u.d(n,"Tab3PageModuleNgFactory",(function(){return T}));var T=t.qb(e,[],(function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[i.a,E]],[3,t.j],t.x]),t.Db(4608,r.o,r.n,[t.u,[2,r.w]]),t.Db(4608,a.c,a.c,[t.z,t.g]),t.Db(4608,a.Kb,a.Kb,[a.c,t.j,t.q]),t.Db(4608,a.Ob,a.Ob,[a.c,t.j,t.q]),t.Db(4608,s.t,s.t,[]),t.Db(1073742336,r.c,r.c,[]),t.Db(1073742336,a.Gb,a.Gb,[]),t.Db(1073742336,s.s,s.s,[]),t.Db(1073742336,s.g,s.g,[]),t.Db(1073742336,z.p,z.p,[[2,z.u],[2,z.m]]),t.Db(1073742336,e,e,[]),t.Db(1024,z.k,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);