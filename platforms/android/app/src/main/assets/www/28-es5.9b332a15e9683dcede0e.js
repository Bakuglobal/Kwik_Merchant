(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{Coe3:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=u("mrSG"),e=u("YWyl"),i=u("ZZ/e"),s=u("Uncc"),b=u("c92J"),r=function(){function l(l,n,u,t,o,e){this.navCtrl=l,this.service=n,this.Asc=u,this.modal=t,this.fs=o,this.db=e,this.padding=!0,this.service.hiddenTabs=!0,this.shopname=this.db.getshopname(),console.log(this.shopname),this.getproducts()}return l.prototype.ionViewDidEnter=function(){this.service.getallcategories(this.shopname).valueChanges().subscribe((function(l){console.log(l)}))},l.prototype.getCategories=function(){},l.prototype.ngOnInit=function(){},l.prototype.getproducts=function(){return o.__awaiter(this,void 0,void 0,(function(){var l=this;return o.__generator(this,(function(n){switch(n.label){case 0:return[4,this.fs.collection(this.shopname).valueChanges().subscribe((function(n){console.log(n),l.products=n,l.unfilteredProducts=n}))];case 1:return n.sent(),[2]}}))}))},l.prototype.home=function(){this.service.hiddenTabs=!1,this.navCtrl.navigate(["tabs/dashboard"])},l.prototype.sortCategory=function(){return o.__awaiter(this,void 0,void 0,(function(){return o.__generator(this,(function(l){switch(l.label){case 0:return[4,this.Asc.create({header:"Sort category in",buttons:[{text:"ASC",handler:function(){console.log("asc")}},{text:"DSC",handler:function(){console.log("asc")}}]})];case 1:return l.sent().present(),[2]}}))}))},l.prototype.settings=function(){return o.__awaiter(this,void 0,void 0,(function(){return o.__generator(this,(function(l){switch(l.label){case 0:return[4,this.modal.create({component:s.a,componentProps:{}})];case 1:return l.sent().present(),[2]}}))}))},l.prototype.addProduct=function(){this.navCtrl.navigate(["tabs/products"])},l.prototype.viewProduct=function(l){this.service.hiddenTabs=!0,this.service.setProduct(l),console.log(l),this.navCtrl.navigate(["tabs/productmodal"])},l}(),c=function(){return function(){}}(),a=u("pMnS"),d=u("oBZk"),g=u("gIcY"),h=u("Ip0R"),p=u("ZYCi"),k=u("fvl4"),z=t.rb({encapsulation:0,styles:[[".card-main[_ngcontent-%COMP%]{color:var(--ion-color-medium);background-color:#fff;border-radius:20px 20px 0 0;width:100%;height:100%;margin-bottom:0;margin-top:40px}.image[_ngcontent-%COMP%]{-o-object-fit:contain;object-fit:contain;width:50%;height:50%;float:right}.title[_ngcontent-%COMP%]{font-weight:700;font-size:1.1em}ion-select[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.float[_ngcontent-%COMP%]{float:right;color:var(--ion-color-primary)}.content[_ngcontent-%COMP%]{margin-top:20px}.content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.1em;color:var(--ion-color-primary)}.section-two[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}.stock[_ngcontent-%COMP%]{border-radius:20px}.stock[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-weight:700;padding-top:20px}.stock[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-size:1em}.stock[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.7em;font-weight:700;float:right}"]],data:{}});function m(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,23,"ion-card",[["class","stock"],["padding",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.viewProduct(l.context.$implicit)&&t),t}),d.Z,d.f)),t.sb(1,49152,null,0,i.o,[t.h,t.k,t.z],null,null),t.sb(2,16384,null,0,i.f,[t.k],null,null),(l()(),t.tb(3,0,null,0,20,"ion-row",[],null,null,null,d.sb,d.B)),t.sb(4,49152,null,0,i.lb,[t.h,t.k,t.z],null,null),(l()(),t.tb(5,0,null,0,3,"ion-col",[["size","2"]],null,null,null,d.bb,d.k)),t.sb(6,49152,null,0,i.v,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(7,0,null,0,1,"ion-icon",[["color","success"],["name","trending-up"],["size","large"]],null,null,null,d.ib,d.r)),t.sb(8,49152,null,0,i.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"],size:[2,"size"]},null),(l()(),t.tb(9,0,null,0,9,"ion-col",[["size","7"]],null,null,null,d.bb,d.k)),t.sb(10,49152,null,0,i.v,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(11,0,null,0,7,"ion-text",[],null,null,null,d.Cb,d.L)),t.sb(12,49152,null,0,i.zb,[t.h,t.k,t.z],null,null),(l()(),t.Mb(13,0,[" "," "])),(l()(),t.tb(14,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Mb(-1,0,[" Last updated "])),(l()(),t.tb(16,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["4"])),(l()(),t.Mb(-1,0,[" days ago "])),(l()(),t.tb(19,0,null,0,4,"ion-col",[["size","3"]],null,null,null,d.bb,d.k)),t.sb(20,49152,null,0,i.v,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(21,0,null,0,2,"ion-label",[],null,null,null,d.nb,d.w)),t.sb(22,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(23,0,["",""]))],(function(l,n){l(n,6,0,"2"),l(n,8,0,"success","trending-up","large"),l(n,10,0,"7"),l(n,20,0,"3")}),(function(l,n){l(n,13,0,n.context.$implicit.product),l(n,23,0,n.context.$implicit.stock)}))}function f(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,108,"ion-content",[["color","primary"],["style","background-color: var(--ion-color-primary);"]],null,null,null,d.cb,d.l)),t.sb(1,49152,null,0,i.w,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(2,0,null,0,14,"ion-toolbar",[["color","primary"]],null,null,null,d.Hb,d.Q)),t.sb(3,49152,null,0,i.Eb,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(4,0,null,0,4,"ion-buttons",[["padding",""],["slot","start"]],null,null,null,d.V,d.e)),t.sb(5,49152,null,0,i.n,[t.h,t.k,t.z],null,null),t.sb(6,16384,null,0,i.f,[t.k],null,null),(l()(),t.tb(7,0,null,0,1,"ion-icon",[["name","home"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.home()&&t),t}),d.ib,d.r)),t.sb(8,49152,null,0,i.E,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.tb(9,0,null,0,2,"ion-title",[],null,null,null,d.Fb,d.O)),t.sb(10,49152,null,0,i.Cb,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["Stock"])),(l()(),t.tb(12,0,null,0,4,"ion-buttons",[["padding",""],["slot","end"]],null,null,null,d.V,d.e)),t.sb(13,49152,null,0,i.n,[t.h,t.k,t.z],null,null),t.sb(14,16384,null,0,i.f,[t.k],null,null),(l()(),t.tb(15,0,null,0,1,"ion-icon",[["name","settings"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.settings()&&t),t}),d.ib,d.r)),t.sb(16,49152,null,0,i.E,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.tb(17,0,null,0,85,"div",[["class","card-main"],["style","background-color: white;"]],null,null,null,null,null)),(l()(),t.tb(18,0,null,null,20,"ion-card-title",[["padding",""]],null,null,null,d.Y,d.i)),t.sb(19,49152,null,0,i.s,[t.h,t.k,t.z],null,null),t.sb(20,16384,null,0,i.f,[t.k],null,null),(l()(),t.tb(21,0,null,0,17,"ion-row",[],null,null,null,d.sb,d.B)),t.sb(22,49152,null,0,i.lb,[t.h,t.k,t.z],null,null),(l()(),t.tb(23,0,null,0,11,"ion-col",[],null,null,null,d.bb,d.k)),t.sb(24,49152,null,0,i.v,[t.h,t.k,t.z],null,null),(l()(),t.tb(25,0,null,0,2,"ion-label",[["class","title"]],null,null,null,d.nb,d.w)),t.sb(26,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["Choose category"])),(l()(),t.tb(28,0,null,0,6,"ion-select",[["placeholder","category"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0,e=l.component;return"ionBlur"===n&&(o=!1!==t.Fb(l,29)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Fb(l,29)._handleChangeEvent(u.target)&&o),"ngModelChange"===n&&(o=!1!==(e.category=u)&&o),o}),d.xb,d.F)),t.sb(29,16384,null,0,i.Qb,[t.k],null,null),t.Jb(1024,null,g.j,(function(l){return[l]}),[i.Qb]),t.sb(31,671744,null,0,g.o,[[8,null],[8,null],[8,null],[6,g.j]],{model:[0,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,g.k,null,[g.o]),t.sb(33,16384,null,0,g.l,[[4,g.k]],null,null),t.sb(34,49152,null,0,i.pb,[t.h,t.k,t.z],{placeholder:[0,"placeholder"]},null),(l()(),t.tb(35,0,null,0,3,"ion-col",[],null,null,null,d.bb,d.k)),t.sb(36,49152,null,0,i.v,[t.h,t.k,t.z],null,null),(l()(),t.tb(37,0,null,0,1,"ion-icon",[["class","image"],["color","primary"],["name","pricetags"],["src",""]],null,null,null,d.ib,d.r)),t.sb(38,49152,null,0,i.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"],src:[2,"src"]},null),(l()(),t.tb(39,0,null,null,62,"ion-card-content",[["class","content"]],null,null,null,d.W,d.g)),t.sb(40,49152,null,0,i.p,[t.h,t.k,t.z],null,null),(l()(),t.tb(41,0,null,0,51,"div",[],null,null,null,null,null)),(l()(),t.tb(42,0,null,null,2,"ion-label",[],null,null,null,d.nb,d.w)),t.sb(43,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["Low on stock"])),(l()(),t.tb(45,0,null,null,23,"ion-card",[["class","stock"],["disabled",""],["padding",""]],null,null,null,d.Z,d.f)),t.sb(46,49152,null,0,i.o,[t.h,t.k,t.z],{disabled:[0,"disabled"]},null),t.sb(47,16384,null,0,i.f,[t.k],null,null),(l()(),t.tb(48,0,null,0,20,"ion-row",[],null,null,null,d.sb,d.B)),t.sb(49,49152,null,0,i.lb,[t.h,t.k,t.z],null,null),(l()(),t.tb(50,0,null,0,3,"ion-col",[["size","2"]],null,null,null,d.bb,d.k)),t.sb(51,49152,null,0,i.v,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(52,0,null,0,1,"ion-icon",[["color","danger"],["name","trending-down"],["size","large"]],null,null,null,d.ib,d.r)),t.sb(53,49152,null,0,i.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"],size:[2,"size"]},null),(l()(),t.tb(54,0,null,0,9,"ion-col",[["size","7"]],null,null,null,d.bb,d.k)),t.sb(55,49152,null,0,i.v,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(56,0,null,0,7,"ion-text",[],null,null,null,d.Cb,d.L)),t.sb(57,49152,null,0,i.zb,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,[" Banana "])),(l()(),t.tb(59,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Mb(-1,0,[" Last updated "])),(l()(),t.tb(61,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["4"])),(l()(),t.Mb(-1,0,[" days ago "])),(l()(),t.tb(64,0,null,0,4,"ion-col",[["size","3"]],null,null,null,d.bb,d.k)),t.sb(65,49152,null,0,i.v,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(66,0,null,0,2,"ion-label",[],null,null,null,d.nb,d.w)),t.sb(67,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["20"])),(l()(),t.tb(69,0,null,null,23,"ion-card",[["class","stock"],["disabled",""],["padding",""]],null,null,null,d.Z,d.f)),t.sb(70,49152,null,0,i.o,[t.h,t.k,t.z],{disabled:[0,"disabled"]},null),t.sb(71,16384,null,0,i.f,[t.k],null,null),(l()(),t.tb(72,0,null,0,20,"ion-row",[],null,null,null,d.sb,d.B)),t.sb(73,49152,null,0,i.lb,[t.h,t.k,t.z],null,null),(l()(),t.tb(74,0,null,0,3,"ion-col",[["size","2"]],null,null,null,d.bb,d.k)),t.sb(75,49152,null,0,i.v,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(76,0,null,0,1,"ion-icon",[["color","danger"],["name","trending-down"],["size","large"]],null,null,null,d.ib,d.r)),t.sb(77,49152,null,0,i.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"],size:[2,"size"]},null),(l()(),t.tb(78,0,null,0,9,"ion-col",[["size","7"]],null,null,null,d.bb,d.k)),t.sb(79,49152,null,0,i.v,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(80,0,null,0,7,"ion-text",[],null,null,null,d.Cb,d.L)),t.sb(81,49152,null,0,i.zb,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,[" Carrots "])),(l()(),t.tb(83,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Mb(-1,0,[" Last updated "])),(l()(),t.tb(85,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["5"])),(l()(),t.Mb(-1,0,[" days ago "])),(l()(),t.tb(88,0,null,0,4,"ion-col",[["size","3"]],null,null,null,d.bb,d.k)),t.sb(89,49152,null,0,i.v,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(90,0,null,0,2,"ion-label",[],null,null,null,d.nb,d.w)),t.sb(91,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["40"])),(l()(),t.tb(93,0,null,0,8,"div",[],null,null,null,null,null)),(l()(),t.tb(94,0,null,null,5,"div",[["class","section-two"]],null,null,null,null,null)),(l()(),t.tb(95,0,null,null,2,"ion-label",[],null,null,null,d.nb,d.w)),t.sb(96,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["Available products"])),(l()(),t.tb(98,0,null,null,1,"ion-icon",[["class","float"],["name","git-compare"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.sortCategory()&&t),t}),d.ib,d.r)),t.sb(99,49152,null,0,i.E,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.ib(16777216,null,null,1,null,m)),t.sb(101,278528,null,0,h.l,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(102,0,null,null,0,"div",[["style","height: 100%;background-color: white;"]],null,null,null,null,null)),(l()(),t.tb(103,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.addProduct()&&t),t}),d.eb,d.m)),t.sb(104,49152,null,0,i.y,[t.h,t.k,t.z],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t.tb(105,0,null,0,3,"ion-fab-button",[],null,null,null,d.db,d.n)),t.sb(106,49152,null,0,i.z,[t.h,t.k,t.z],null,null),(l()(),t.tb(107,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,d.ib,d.r)),t.sb(108,49152,null,0,i.E,[t.h,t.k,t.z],{name:[0,"name"]},null)],(function(l,n){var u=n.component;l(n,1,0,"primary"),l(n,3,0,"primary"),l(n,8,0,"home"),l(n,16,0,"settings"),l(n,31,0,u.category),l(n,34,0,"category"),l(n,38,0,"primary","pricetags",""),l(n,46,0,""),l(n,51,0,"2"),l(n,53,0,"danger","trending-down","large"),l(n,55,0,"7"),l(n,65,0,"3"),l(n,70,0,""),l(n,75,0,"2"),l(n,77,0,"danger","trending-down","large"),l(n,79,0,"7"),l(n,89,0,"3"),l(n,99,0,"git-compare"),l(n,101,0,u.products),l(n,104,0,"end","bottom"),l(n,108,0,"add")}),(function(l,n){l(n,28,0,t.Fb(n,33).ngClassUntouched,t.Fb(n,33).ngClassTouched,t.Fb(n,33).ngClassPristine,t.Fb(n,33).ngClassDirty,t.Fb(n,33).ngClassValid,t.Fb(n,33).ngClassInvalid,t.Fb(n,33).ngClassPending)}))}function v(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,1,"app-stock",[],null,null,null,f,z)),t.sb(1,114688,null,0,r,[p.m,e.a,i.a,i.Kb,k.a,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var C=t.pb("app-stock",r,v,{},{},[]);u.d(n,"StockPageModuleNgFactory",(function(){return w}));var w=t.qb(c,[],(function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[a.a,C]],[3,t.j],t.x]),t.Db(4608,h.o,h.n,[t.u,[2,h.w]]),t.Db(4608,g.t,g.t,[]),t.Db(4608,i.c,i.c,[t.z,t.g]),t.Db(4608,i.Kb,i.Kb,[i.c,t.j,t.q]),t.Db(4608,i.Ob,i.Ob,[i.c,t.j,t.q]),t.Db(1073742336,h.c,h.c,[]),t.Db(1073742336,g.s,g.s,[]),t.Db(1073742336,g.g,g.g,[]),t.Db(1073742336,i.Gb,i.Gb,[]),t.Db(1073742336,p.p,p.p,[[2,p.u],[2,p.m]]),t.Db(1073742336,c,c,[]),t.Db(1024,p.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);