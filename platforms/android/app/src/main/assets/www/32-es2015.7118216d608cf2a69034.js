(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{W9vR:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class i{}var t=u("pMnS"),r=u("oBZk"),a=u("ZZ/e"),o=u("s7LF"),b=u("SVse"),s=u("mrSG"),c=u("CKys"),h=u("iWj2"),d=u("uRF+"),m=u("cShL"),p=u("mvCV"),g=u("Pn9U"),k=u("YWyl");class q{constructor(l,n,u,e,i,t,r,a,o){this.navCtrl=l,this.modalCtrl=n,this.fileChooser=u,this.filePath=e,this.asC=i,this.storage=t,this.database=r,this.camera=a,this.service=o,this.videos=[],this.images=[],this.likes={count:0},this.liked=!1,this.h=!1,this.Addcomment=!1,this.service.hiddenTabs=!1}ngOnInit(){}onScroll(l){148===l.detail.scrollTop?(this.service.hiddenTabs=!1,console.log("00000000")):l.detail.scrollTop>30?(console.log(">>>> 30"),this.service.hiddenTabs=!0):this.service.hiddenTabs=!1}share(){return s.__awaiter(this,void 0,void 0,(function*(){const l=yield this.asC.create({animated:!0,backdropDismiss:!0,cssClass:"./home.page.scss",buttons:[{icon:"logo-whatsapp",text:"Whatsapp",handler:()=>{}},{text:"Cancel",role:"cancel"}]});yield l.present()}))}comments(){return s.__awaiter(this,void 0,void 0,(function*(){const l=yield this.modalCtrl.create({component:p.a,componentProps:{}});yield l.present()}))}like(){!1===this.liked?(this.likes.count++,this.liked=!0):(this.likes.count--,this.liked=!1),this.h=!1===this.h}infoModal(l){return s.__awaiter(this,void 0,void 0,(function*(){const n=yield this.modalCtrl.create({component:m.a,componentProps:{shopname:l}});yield n.present()}))}openPostModal(){return s.__awaiter(this,void 0,void 0,(function*(){const l=yield this.modalCtrl.create({component:c.a,componentProps:{}});yield l.present()}))}postFile(l){return s.__awaiter(this,void 0,void 0,(function*(){const n=yield this.modalCtrl.create({component:c.a,componentProps:{url:l}});yield n.present()}))}pickFile(l){"image"===l?this.camera.getPicture({quality:100,destinationType:this.camera.DestinationType.FILE_URI,sourceType:this.camera.PictureSourceType.SAVEDPHOTOALBUM,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,targetHeight:100}).then(l=>{this.images.push(l),this.postFile(this.images)},l=>{}):this.camera.getPicture({quality:100,destinationType:this.camera.DestinationType.FILE_URI,sourceType:this.camera.PictureSourceType.SAVEDPHOTOALBUM,mediaType:this.camera.MediaType.VIDEO,targetHeight:100}).then(l=>{this.videos.push(l)},l=>{})}}var v=u("iInd"),x=u("gJ2e"),f=u("Xr7G"),y=e.pb({encapsulation:0,styles:[["a[_ngcontent-%COMP%]{text-decoration:none}.color[_ngcontent-%COMP%]{color:#3880ff}ion-card[_ngcontent-%COMP%]{margin-right:0;margin-left:0}.img[_ngcontent-%COMP%]{width:100%}.top-card[_ngcontent-%COMP%]{border-bottom:5px var(--ion-color-secondary);margin-top:0;padding-top:10px;margin-left:0;margin-right:0}"]],data:{}});function C(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,12,"div",[],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,11,"ion-item",[],null,null,null,r.mb,r.t)),e.qb(2,49152,null,0,a.J,[e.h,e.k,e.x],null,null),(l()(),e.rb(3,0,null,0,2,"ion-avatar",[],null,null,null,r.S,r.b)),e.qb(4,49152,null,0,a.i,[e.h,e.k,e.x],null,null),(l()(),e.rb(5,0,null,0,0,"img",[["src","../../assets/images/icon.png"]],null,null,null,null,null)),(l()(),e.Kb(-1,0,["\xa0\xa0 "])),(l()(),e.rb(7,0,null,0,3,"ion-textarea",[["name","text"],["placeholder","Add a comment..."],["required",""]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Db(l,10)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Db(l,10)._handleInputEvent(u.target)&&i),i}),r.Db,r.M)),e.Hb(5120,null,o.l,(function(l){return[l]}),[a.Rb]),e.qb(9,49152,null,0,a.Ab,[e.h,e.k,e.x],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"]},null),e.qb(10,16384,null,0,a.Rb,[e.k],null,null),(l()(),e.rb(11,0,null,0,1,"a",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Post"]))],(function(l,n){l(n,9,0,"text","Add a comment...","")}),null)}function w(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,12,"div",[],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,11,"ion-item",[],null,null,null,r.mb,r.t)),e.qb(2,49152,null,0,a.J,[e.h,e.k,e.x],null,null),(l()(),e.rb(3,0,null,0,2,"ion-avatar",[],null,null,null,r.S,r.b)),e.qb(4,49152,null,0,a.i,[e.h,e.k,e.x],null,null),(l()(),e.rb(5,0,null,0,0,"img",[["src","../../assets/images/icon.png"]],null,null,null,null,null)),(l()(),e.Kb(-1,0,["\xa0\xa0 "])),(l()(),e.rb(7,0,null,0,3,"ion-textarea",[["name","text"],["placeholder","Add a comment..."],["required",""]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Db(l,10)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Db(l,10)._handleInputEvent(u.target)&&i),i}),r.Db,r.M)),e.Hb(5120,null,o.l,(function(l){return[l]}),[a.Rb]),e.qb(9,49152,null,0,a.Ab,[e.h,e.k,e.x],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"]},null),e.qb(10,16384,null,0,a.Rb,[e.k],null,null),(l()(),e.rb(11,0,null,0,1,"a",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Post"]))],(function(l,n){l(n,9,0,"text","Add a comment...","")}),null)}function P(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,40,"ion-card",[["class","top-card"],["disabled",""]],null,null,null,r.Z,r.f)),e.qb(1,49152,null,0,a.o,[e.h,e.k,e.x],{disabled:[0,"disabled"]},null),(l()(),e.rb(2,0,null,0,18,"ion-row",[],null,null,null,r.sb,r.B)),e.qb(3,49152,null,0,a.lb,[e.h,e.k,e.x],null,null),(l()(),e.rb(4,0,null,0,7,"ion-chip",[],null,null,null,r.ab,r.j)),e.qb(5,49152,null,0,a.u,[e.h,e.k,e.x],null,null),(l()(),e.rb(6,0,null,0,2,"ion-avatar",[],null,null,null,r.S,r.b)),e.qb(7,49152,null,0,a.i,[e.h,e.k,e.x],null,null),(l()(),e.rb(8,0,null,0,0,"img",[["src","../../assets/images/icon.png"]],null,null,null,null,null)),(l()(),e.rb(9,0,null,0,2,"ion-label",[],null,null,null,r.nb,r.w)),e.qb(10,49152,null,0,a.P,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,["You"])),(l()(),e.rb(12,0,null,0,8,"ion-input",[["clearInput",""],["placeholder","Enter a new post"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"click"],[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==e.Db(l,14)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Db(l,14)._handleInputEvent(u.target)&&i),"click"===n&&(i=!1!==t.openPostModal()&&i),"ngModelChange"===n&&(i=!1!==(t.post=u)&&i),i}),r.jb,r.s)),e.qb(13,49152,null,0,a.I,[e.h,e.k,e.x],{clearInput:[0,"clearInput"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),e.qb(14,16384,null,0,a.Rb,[e.k],null,null),e.qb(15,16384,null,0,o.s,[],{required:[0,"required"]},null),e.Hb(1024,null,o.k,(function(l){return[l]}),[o.s]),e.Hb(1024,null,o.l,(function(l){return[l]}),[a.Rb]),e.qb(18,671744,null,0,o.q,[[8,null],[6,o.k],[8,null],[6,o.l]],{model:[0,"model"]},{update:"ngModelChange"}),e.Hb(2048,null,o.m,null,[o.q]),e.qb(20,16384,null,0,o.n,[[4,o.m]],null,null),(l()(),e.rb(21,0,null,0,19,"ion-item",[["class","ion-text-center"]],null,null,null,r.mb,r.t)),e.qb(22,49152,null,0,a.J,[e.h,e.k,e.x],null,null),(l()(),e.rb(23,0,null,0,7,"ion-buttons",[["slot","start"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.pickFile("image")&&e),e}),r.V,r.e)),e.qb(24,49152,null,0,a.n,[e.h,e.k,e.x],null,null),(l()(),e.rb(25,0,null,0,1,"ion-icon",[["name","image"]],null,null,null,r.ib,r.r)),e.qb(26,49152,null,0,a.E,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.Kb(-1,0,["\xa0\xa0 "])),(l()(),e.rb(28,0,null,0,2,"ion-label",[],null,null,null,r.nb,r.w)),e.qb(29,49152,null,0,a.P,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,["Image"])),(l()(),e.rb(31,0,null,0,1,"b",[["style","margin-left: 45%;"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["|"])),(l()(),e.rb(33,0,null,0,7,"ion-buttons",[["slot","end"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.pickFile("video")&&e),e}),r.V,r.e)),e.qb(34,49152,null,0,a.n,[e.h,e.k,e.x],null,null),(l()(),e.rb(35,0,null,0,1,"ion-icon",[["name","videocam"]],null,null,null,r.ib,r.r)),e.qb(36,49152,null,0,a.E,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.Kb(-1,0,["\xa0\xa0 "])),(l()(),e.rb(38,0,null,0,2,"ion-label",[],null,null,null,r.nb,r.w)),e.qb(39,49152,null,0,a.P,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,["video"])),(l()(),e.rb(41,0,null,null,133,"ion-content",[],null,[[null,"ionScroll"]],(function(l,n,u){var e=!0;return"ionScroll"===n&&(e=!1!==l.component.onScroll(u)&&e),e}),r.cb,r.l)),e.qb(42,49152,null,0,a.w,[e.h,e.k,e.x],{scrollEvents:[0,"scrollEvents"]},null),(l()(),e.rb(43,0,null,0,65,"ion-card",[["disabled",""]],null,null,null,r.Z,r.f)),e.qb(44,49152,null,0,a.o,[e.h,e.k,e.x],{disabled:[0,"disabled"]},null),(l()(),e.rb(45,0,null,0,12,"ion-card-header",[],null,null,null,r.X,r.h)),e.qb(46,49152,null,0,a.q,[e.h,e.k,e.x],null,null),(l()(),e.rb(47,0,null,0,7,"ion-chip",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.infoModal("shop")&&e),e}),r.ab,r.j)),e.qb(48,49152,null,0,a.u,[e.h,e.k,e.x],null,null),(l()(),e.rb(49,0,null,0,2,"ion-avatar",[],null,null,null,r.S,r.b)),e.qb(50,49152,null,0,a.i,[e.h,e.k,e.x],null,null),(l()(),e.rb(51,0,null,0,0,"img",[["src","../../assets/images/icon.png"]],null,null,null,null,null)),(l()(),e.rb(52,0,null,0,2,"ion-label",[],null,null,null,r.nb,r.w)),e.qb(53,49152,null,0,a.P,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,["QuickMatt"])),(l()(),e.Kb(-1,0,[" 1 hr . "])),(l()(),e.rb(56,0,null,0,1,"ion-icon",[["name","globe"]],null,null,null,r.ib,r.r)),e.qb(57,49152,null,0,a.E,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(58,0,null,0,6,"ion-card-content",[["no-padding",""]],null,null,null,r.W,r.g)),e.qb(59,49152,null,0,a.p,[e.h,e.k,e.x],null,null),e.qb(60,16384,null,0,a.f,[e.k],null,null),(l()(),e.rb(61,0,null,0,0,"img",[["src","../../assets/images/ad.jpg"],["width","100%"]],null,null,null,null,null)),(l()(),e.rb(62,0,null,0,2,"ion-text",[],null,null,null,r.Cb,r.L)),e.qb(63,49152,null,0,a.zb,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,[" Mega discounts this friday . "])),(l()(),e.rb(65,0,null,0,12,"ion-item",[["style","margin-left:0;margin-right:0;"]],null,null,null,r.mb,r.t)),e.qb(66,49152,null,0,a.J,[e.h,e.k,e.x],null,null),(l()(),e.rb(67,0,null,0,4,"ion-icon",[["name","heart"],["size","large"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.like()&&e),e}),r.ib,r.r)),e.qb(68,49152,null,0,a.E,[e.h,e.k,e.x],{name:[0,"name"],size:[1,"size"]},null),e.Hb(512,null,b.t,b.u,[e.q,e.r,e.k,e.B]),e.qb(70,278528,null,0,b.k,[b.t],{ngClass:[0,"ngClass"]},null),e.Fb(71,{color:0}),(l()(),e.Kb(-1,0,["\xa0\xa0\xa0\xa0 "])),(l()(),e.rb(73,0,null,0,1,"ion-icon",[["name","chatboxes"],["size","large"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=0!=(l.component.Addcomment=!0)&&e),e}),r.ib,r.r)),e.qb(74,49152,null,0,a.E,[e.h,e.k,e.x],{name:[0,"name"],size:[1,"size"]},null),(l()(),e.Kb(-1,0,["\xa0\xa0\xa0\xa0 "])),(l()(),e.rb(76,0,null,0,1,"ion-icon",[["name","share-alt"],["size","large"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.share()&&e),e}),r.ib,r.r)),e.qb(77,49152,null,0,a.E,[e.h,e.k,e.x],{name:[0,"name"],size:[1,"size"]},null),(l()(),e.rb(78,0,null,0,30,"div",[],null,null,null,null,null)),(l()(),e.rb(79,0,null,null,3,"ion-label",[["padding",""]],null,null,null,r.nb,r.w)),e.qb(80,49152,null,0,a.P,[e.h,e.k,e.x],null,null),e.qb(81,16384,null,0,a.f,[e.k],null,null),(l()(),e.Kb(82,0,[""," likes"])),(l()(),e.rb(83,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(84,0,null,null,21,"div",[],null,null,null,null,null)),(l()(),e.rb(85,0,null,null,18,"ion-item",[],null,null,null,r.mb,r.t)),e.qb(86,49152,null,0,a.J,[e.h,e.k,e.x],null,null),(l()(),e.rb(87,0,null,0,7,"ion-chip",[],null,null,null,r.ab,r.j)),e.qb(88,49152,null,0,a.u,[e.h,e.k,e.x],null,null),(l()(),e.rb(89,0,null,0,2,"ion-avatar",[],null,null,null,r.S,r.b)),e.qb(90,49152,null,0,a.i,[e.h,e.k,e.x],null,null),(l()(),e.rb(91,0,null,0,0,"img",[["src","../../assets/images/icon.png"]],null,null,null,null,null)),(l()(),e.rb(92,0,null,0,2,"ion-label",[],null,null,null,r.nb,r.w)),e.qb(93,49152,null,0,a.P,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,["1 hr ."])),(l()(),e.rb(95,0,null,0,8,"ion-col",[],null,null,null,r.bb,r.k)),e.qb(96,49152,null,0,a.v,[e.h,e.k,e.x],null,null),(l()(),e.rb(97,0,null,0,2,"ion-label",[["style","font-size: 11pt;"]],null,null,null,r.nb,r.w)),e.qb(98,49152,null,0,a.P,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,["Joseph"])),(l()(),e.rb(100,0,null,0,2,"ion-text",[["style","font-size: 10pt;"]],null,null,null,r.Cb,r.L)),e.qb(101,49152,null,0,a.zb,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,["We are very pleased with the turn up this week. looking forward to set out another mega sale discount"])),(l()(),e.rb(103,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,C)),e.qb(105,16384,null,0,b.m,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(106,0,null,null,2,"a",[["padding",""]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.comments()&&e),e}),null,null)),e.qb(107,16384,null,0,a.f,[e.k],null,null),(l()(),e.Kb(-1,null,["view all comments"])),(l()(),e.rb(109,0,null,0,65,"ion-card",[["disabled",""]],null,null,null,r.Z,r.f)),e.qb(110,49152,null,0,a.o,[e.h,e.k,e.x],{disabled:[0,"disabled"]},null),(l()(),e.rb(111,0,null,0,12,"ion-card-header",[],null,null,null,r.X,r.h)),e.qb(112,49152,null,0,a.q,[e.h,e.k,e.x],null,null),(l()(),e.rb(113,0,null,0,7,"ion-chip",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.infoModal("shop")&&e),e}),r.ab,r.j)),e.qb(114,49152,null,0,a.u,[e.h,e.k,e.x],null,null),(l()(),e.rb(115,0,null,0,2,"ion-avatar",[],null,null,null,r.S,r.b)),e.qb(116,49152,null,0,a.i,[e.h,e.k,e.x],null,null),(l()(),e.rb(117,0,null,0,0,"img",[["src","../../assets/images/icon.png"]],null,null,null,null,null)),(l()(),e.rb(118,0,null,0,2,"ion-label",[],null,null,null,r.nb,r.w)),e.qb(119,49152,null,0,a.P,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,["QuickMatt"])),(l()(),e.Kb(-1,0,[" 1 hr . "])),(l()(),e.rb(122,0,null,0,1,"ion-icon",[["name","globe"]],null,null,null,r.ib,r.r)),e.qb(123,49152,null,0,a.E,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(124,0,null,0,6,"ion-card-content",[["no-padding",""]],null,null,null,r.W,r.g)),e.qb(125,49152,null,0,a.p,[e.h,e.k,e.x],null,null),e.qb(126,16384,null,0,a.f,[e.k],null,null),(l()(),e.rb(127,0,null,0,0,"img",[["src","../../assets/images/ad.jpg"],["width","100%"]],null,null,null,null,null)),(l()(),e.rb(128,0,null,0,2,"ion-text",[],null,null,null,r.Cb,r.L)),e.qb(129,49152,null,0,a.zb,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,[" Mega discounts this friday . "])),(l()(),e.rb(131,0,null,0,12,"ion-item",[["style","margin-left:0;margin-right:0;"]],null,null,null,r.mb,r.t)),e.qb(132,49152,null,0,a.J,[e.h,e.k,e.x],null,null),(l()(),e.rb(133,0,null,0,4,"ion-icon",[["name","heart"],["size","large"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.like()&&e),e}),r.ib,r.r)),e.qb(134,49152,null,0,a.E,[e.h,e.k,e.x],{name:[0,"name"],size:[1,"size"]},null),e.Hb(512,null,b.t,b.u,[e.q,e.r,e.k,e.B]),e.qb(136,278528,null,0,b.k,[b.t],{ngClass:[0,"ngClass"]},null),e.Fb(137,{color:0}),(l()(),e.Kb(-1,0,["\xa0\xa0\xa0\xa0 "])),(l()(),e.rb(139,0,null,0,1,"ion-icon",[["name","chatboxes"],["size","large"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=0!=(l.component.Addcomment=!0)&&e),e}),r.ib,r.r)),e.qb(140,49152,null,0,a.E,[e.h,e.k,e.x],{name:[0,"name"],size:[1,"size"]},null),(l()(),e.Kb(-1,0,["\xa0\xa0\xa0\xa0 "])),(l()(),e.rb(142,0,null,0,1,"ion-icon",[["name","share-alt"],["size","large"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.share()&&e),e}),r.ib,r.r)),e.qb(143,49152,null,0,a.E,[e.h,e.k,e.x],{name:[0,"name"],size:[1,"size"]},null),(l()(),e.rb(144,0,null,0,30,"div",[],null,null,null,null,null)),(l()(),e.rb(145,0,null,null,3,"ion-label",[["padding",""]],null,null,null,r.nb,r.w)),e.qb(146,49152,null,0,a.P,[e.h,e.k,e.x],null,null),e.qb(147,16384,null,0,a.f,[e.k],null,null),(l()(),e.Kb(148,0,[""," likes"])),(l()(),e.rb(149,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.rb(150,0,null,null,21,"div",[],null,null,null,null,null)),(l()(),e.rb(151,0,null,null,18,"ion-item",[],null,null,null,r.mb,r.t)),e.qb(152,49152,null,0,a.J,[e.h,e.k,e.x],null,null),(l()(),e.rb(153,0,null,0,7,"ion-chip",[],null,null,null,r.ab,r.j)),e.qb(154,49152,null,0,a.u,[e.h,e.k,e.x],null,null),(l()(),e.rb(155,0,null,0,2,"ion-avatar",[],null,null,null,r.S,r.b)),e.qb(156,49152,null,0,a.i,[e.h,e.k,e.x],null,null),(l()(),e.rb(157,0,null,0,0,"img",[["src","../../assets/images/icon.png"]],null,null,null,null,null)),(l()(),e.rb(158,0,null,0,2,"ion-label",[],null,null,null,r.nb,r.w)),e.qb(159,49152,null,0,a.P,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,["1 hr ."])),(l()(),e.rb(161,0,null,0,8,"ion-col",[],null,null,null,r.bb,r.k)),e.qb(162,49152,null,0,a.v,[e.h,e.k,e.x],null,null),(l()(),e.rb(163,0,null,0,2,"ion-label",[["style","font-size: 11pt;"]],null,null,null,r.nb,r.w)),e.qb(164,49152,null,0,a.P,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,["Joseph"])),(l()(),e.rb(166,0,null,0,2,"ion-text",[["style","font-size: 10pt;"]],null,null,null,r.Cb,r.L)),e.qb(167,49152,null,0,a.zb,[e.h,e.k,e.x],null,null),(l()(),e.Kb(-1,0,["We are very pleased with the turn up this week. looking forward to set out another mega sale discount"])),(l()(),e.rb(169,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,w)),e.qb(171,16384,null,0,b.m,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(172,0,null,null,2,"a",[["padding",""]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.comments()&&e),e}),null,null)),e.qb(173,16384,null,0,a.f,[e.k],null,null),(l()(),e.Kb(-1,null,["view all comments"]))],(function(l,n){var u=n.component;l(n,1,0,""),l(n,13,0,"","Enter a new post","","text"),l(n,15,0,""),l(n,18,0,u.post),l(n,26,0,"image"),l(n,36,0,"videocam"),l(n,42,0,!0),l(n,44,0,""),l(n,57,0,"globe"),l(n,68,0,"heart","large");var e=l(n,71,0,u.h);l(n,70,0,e),l(n,74,0,"chatboxes","large"),l(n,77,0,"share-alt","large"),l(n,105,0,u.Addcomment),l(n,110,0,""),l(n,123,0,"globe"),l(n,134,0,"heart","large");var i=l(n,137,0,u.h);l(n,136,0,i),l(n,140,0,"chatboxes","large"),l(n,143,0,"share-alt","large"),l(n,171,0,u.Addcomment)}),(function(l,n){var u=n.component;l(n,12,0,e.Db(n,15).required?"":null,e.Db(n,20).ngClassUntouched,e.Db(n,20).ngClassTouched,e.Db(n,20).ngClassPristine,e.Db(n,20).ngClassDirty,e.Db(n,20).ngClassValid,e.Db(n,20).ngClassInvalid,e.Db(n,20).ngClassPending),l(n,82,0,u.likes.count),l(n,148,0,u.likes.count)}))}function K(l){return e.Mb(0,[(l()(),e.rb(0,0,null,null,1,"app-tab3",[],null,null,null,P,y)),e.qb(1,114688,null,0,q,[v.m,a.Kb,d.a,h.a,a.a,x.a,f.a,g.a,k.a],null,null)],(function(l,n){l(n,1,0)}),null)}var M=e.nb("app-tab3",q,K,{},{},[]);u.d(n,"Tab3PageModuleNgFactory",(function(){return B}));var B=e.ob(i,[],(function(l){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[t.a,M]],[3,e.j],e.v]),e.Bb(4608,b.o,b.n,[e.s,[2,b.w]]),e.Bb(4608,a.c,a.c,[e.x,e.g]),e.Bb(4608,a.Kb,a.Kb,[a.c,e.j,e.p]),e.Bb(4608,a.Ob,a.Ob,[a.c,e.j,e.p]),e.Bb(4608,o.v,o.v,[]),e.Bb(1073742336,b.c,b.c,[]),e.Bb(1073742336,a.Gb,a.Gb,[]),e.Bb(1073742336,o.u,o.u,[]),e.Bb(1073742336,o.i,o.i,[]),e.Bb(1073742336,v.p,v.p,[[2,v.u],[2,v.m]]),e.Bb(1073742336,i,i,[]),e.Bb(1024,v.k,(function(){return[[{path:"",component:q}]]}),[])])}))}}]);