(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{Coe3:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=u("mrSG"),e=u("YWyl"),i=u("ZZ/e"),s=u("Uncc"),r=u("c92J"),c=function(){function l(l,n,u,t,o,e){this.navCtrl=l,this.service=n,this.Asc=u,this.modal=t,this.fs=o,this.db=e,this.products=[],this.show=!1,this.service.hiddenTabs=!0,this.shopname=localStorage.getItem("shop"),console.log(this.shopname)}return l.prototype.ionViewDidEnter=function(){var l=this;this.service.getallcategories(this.shopname).valueChanges().subscribe((function(n){l.categories=n,l.show=!0,console.log(l.categories)})),this.getproducts()},l.prototype.ngOnInit=function(){},l.prototype.getproducts=function(){var l=this;this.service.getallProducts(this.shopname).subscribe((function(n){l.products=n,l.unfilteredProducts=n})),console.log(this.products)},l.prototype.filterProducts=function(){null===this.category&&void 0===this.category||(console.log(this.category),this.products=this.filterItems(),console.log(this.products))},l.prototype.filterItems=function(){var l=this;return this.unfilteredProducts.filter((function(n){return console.log(n.category),n.category.toLowerCase().indexOf(l.category.toLowerCase())>-1}))},l.prototype.home=function(){this.service.hiddenTabs=!1,this.navCtrl.navigate(["tabs/dashboard"])},l.prototype.sortCategory=function(){return o.__awaiter(this,void 0,void 0,(function(){return o.__generator(this,(function(l){switch(l.label){case 0:return[4,this.Asc.create({header:"Sort category in",buttons:[{text:"ASC",handler:function(){console.log("asc")}},{text:"DSC",handler:function(){console.log("asc")}}]})];case 1:return l.sent().present(),[2]}}))}))},l.prototype.settings=function(){return o.__awaiter(this,void 0,void 0,(function(){return o.__generator(this,(function(l){switch(l.label){case 0:return[4,this.modal.create({component:s.a,componentProps:{}})];case 1:return l.sent().present(),[2]}}))}))},l.prototype.addProduct=function(){this.navCtrl.navigate(["tabs/products"])},l.prototype.viewProduct=function(l){this.service.hiddenTabs=!0,this.service.setProduct(l),console.log(l),this.navCtrl.navigate(["tabs/productmodal"])},l}(),b=function(){return function(){}}(),a=u("pMnS"),d=u("oBZk"),g=u("gIcY"),h=u("Ip0R"),p=u("ZYCi"),m=u("fvl4"),f=t.rb({encapsulation:0,styles:[[".card-main[_ngcontent-%COMP%]{color:var(--ion-color-medium);background-color:#fff;border-radius:20px 20px 0 0;width:100%;height:10000px;margin-bottom:0;margin-top:40px}.image[_ngcontent-%COMP%]{-o-object-fit:contain;object-fit:contain;width:50%;height:50%;float:right}.title[_ngcontent-%COMP%]{font-weight:700;font-size:1.1em}ion-select[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.float[_ngcontent-%COMP%]{float:right;color:var(--ion-color-primary)}.content[_ngcontent-%COMP%]{margin-top:20px}.content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.1em;color:var(--ion-color-primary)}.spinner[_ngcontent-%COMP%]{margin-top:70px;margin-left:45%}.section-two[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}.stock[_ngcontent-%COMP%]{border-radius:20px}.stock[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-weight:700;padding-top:20px}.stock[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-size:1em}.stock[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.7em;font-weight:700;float:right}"]],data:{}});function k(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,2,"ion-select-option",[],null,null,null,d.wb,d.G)),t.sb(1,49152,null,0,i.qb,[t.h,t.k,t.z],null,null),(l()(),t.Mb(2,0,["",""]))],null,(function(l,n){l(n,2,0,n.context.$implicit.name)}))}function z(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,8,"ion-select",[["placeholder","category"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var o=!0,e=l.component;return"ionBlur"===n&&(o=!1!==t.Fb(l,1)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Fb(l,1)._handleChangeEvent(u.target)&&o),"ngModelChange"===n&&(o=!1!==(e.category=u)&&o),"ionChange"===n&&(o=!1!==e.filterProducts()&&o),o}),d.xb,d.F)),t.sb(1,16384,null,0,i.Qb,[t.k],null,null),t.Jb(1024,null,g.l,(function(l){return[l]}),[i.Qb]),t.sb(3,671744,null,0,g.q,[[8,null],[8,null],[8,null],[6,g.l]],{model:[0,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,g.m,null,[g.q]),t.sb(5,16384,null,0,g.n,[[4,g.m]],null,null),t.sb(6,49152,null,0,i.pb,[t.h,t.k,t.z],{placeholder:[0,"placeholder"]},null),(l()(),t.ib(16777216,null,0,1,null,k)),t.sb(8,278528,null,0,h.l,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,3,0,u.category),l(n,6,0,"category"),l(n,8,0,u.categories.categories)}),(function(l,n){l(n,0,0,t.Fb(n,5).ngClassUntouched,t.Fb(n,5).ngClassTouched,t.Fb(n,5).ngClassPristine,t.Fb(n,5).ngClassDirty,t.Fb(n,5).ngClassValid,t.Fb(n,5).ngClassInvalid,t.Fb(n,5).ngClassPending)}))}function v(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,1,"ion-spinner",[["class","spinner"],["color","primary"],["name","circles"]],null,null,null,d.yb,d.H)),t.sb(1,49152,null,0,i.ub,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,1,0,"primary","circles")}),null)}function C(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,23,"ion-card",[["class","stock"],["padding",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.viewProduct(l.context.$implicit)&&t),t}),d.Z,d.f)),t.sb(1,49152,null,0,i.o,[t.h,t.k,t.z],null,null),t.sb(2,16384,null,0,i.f,[t.k],null,null),(l()(),t.tb(3,0,null,0,20,"ion-row",[],null,null,null,d.sb,d.B)),t.sb(4,49152,null,0,i.lb,[t.h,t.k,t.z],null,null),(l()(),t.tb(5,0,null,0,3,"ion-col",[["size","2"]],null,null,null,d.bb,d.k)),t.sb(6,49152,null,0,i.v,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(7,0,null,0,1,"ion-icon",[["color","success"],["name","trending-up"],["size","large"]],null,null,null,d.ib,d.r)),t.sb(8,49152,null,0,i.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"],size:[2,"size"]},null),(l()(),t.tb(9,0,null,0,9,"ion-col",[["size","7"]],null,null,null,d.bb,d.k)),t.sb(10,49152,null,0,i.v,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(11,0,null,0,7,"ion-text",[],null,null,null,d.Cb,d.L)),t.sb(12,49152,null,0,i.zb,[t.h,t.k,t.z],null,null),(l()(),t.Mb(13,0,[" "," "])),(l()(),t.tb(14,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Mb(-1,0,[" Last updated "])),(l()(),t.tb(16,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["4"])),(l()(),t.Mb(-1,0,[" days ago "])),(l()(),t.tb(19,0,null,0,4,"ion-col",[["size","3"]],null,null,null,d.bb,d.k)),t.sb(20,49152,null,0,i.v,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(21,0,null,0,2,"ion-label",[],null,null,null,d.nb,d.w)),t.sb(22,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(23,0,["",""]))],(function(l,n){l(n,6,0,"2"),l(n,8,0,"success","trending-up","large"),l(n,10,0,"7"),l(n,20,0,"3")}),(function(l,n){l(n,13,0,n.context.$implicit.product),l(n,23,0,n.context.$implicit.stock)}))}function y(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,104,"ion-content",[["color","primary"],["style","background-color: var(--ion-color-primary);"]],null,null,null,d.cb,d.l)),t.sb(1,49152,null,0,i.w,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(2,0,null,0,14,"ion-toolbar",[["color","primary"]],null,null,null,d.Hb,d.Q)),t.sb(3,49152,null,0,i.Eb,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(4,0,null,0,4,"ion-buttons",[["padding",""],["slot","start"]],null,null,null,d.V,d.e)),t.sb(5,49152,null,0,i.n,[t.h,t.k,t.z],null,null),t.sb(6,16384,null,0,i.f,[t.k],null,null),(l()(),t.tb(7,0,null,0,1,"ion-icon",[["name","home"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.home()&&t),t}),d.ib,d.r)),t.sb(8,49152,null,0,i.E,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.tb(9,0,null,0,2,"ion-title",[],null,null,null,d.Fb,d.O)),t.sb(10,49152,null,0,i.Cb,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["Stock"])),(l()(),t.tb(12,0,null,0,4,"ion-buttons",[["padding",""],["slot","end"]],null,null,null,d.V,d.e)),t.sb(13,49152,null,0,i.n,[t.h,t.k,t.z],null,null),t.sb(14,16384,null,0,i.f,[t.k],null,null),(l()(),t.tb(15,0,null,0,1,"ion-icon",[["name","settings"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.settings()&&t),t}),d.ib,d.r)),t.sb(16,49152,null,0,i.E,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.tb(17,0,null,0,81,"div",[["class","card-main"],["style","background-color: white;"]],null,null,null,null,null)),(l()(),t.tb(18,0,null,null,15,"ion-card-title",[["padding",""]],null,null,null,d.Y,d.i)),t.sb(19,49152,null,0,i.s,[t.h,t.k,t.z],null,null),t.sb(20,16384,null,0,i.f,[t.k],null,null),(l()(),t.tb(21,0,null,0,12,"ion-row",[],null,null,null,d.sb,d.B)),t.sb(22,49152,null,0,i.lb,[t.h,t.k,t.z],null,null),(l()(),t.tb(23,0,null,0,6,"ion-col",[],null,null,null,d.bb,d.k)),t.sb(24,49152,null,0,i.v,[t.h,t.k,t.z],null,null),(l()(),t.tb(25,0,null,0,2,"ion-label",[["class","title"]],null,null,null,d.nb,d.w)),t.sb(26,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["Choose category"])),(l()(),t.ib(16777216,null,0,1,null,z)),t.sb(29,16384,null,0,h.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(30,0,null,0,3,"ion-col",[],null,null,null,d.bb,d.k)),t.sb(31,49152,null,0,i.v,[t.h,t.k,t.z],null,null),(l()(),t.tb(32,0,null,0,1,"ion-icon",[["class","image"],["color","primary"],["name","pricetags"],["src",""]],null,null,null,d.ib,d.r)),t.sb(33,49152,null,0,i.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"],src:[2,"src"]},null),(l()(),t.tb(34,0,null,null,64,"ion-card-content",[["class","content"]],null,null,null,d.W,d.g)),t.sb(35,49152,null,0,i.p,[t.h,t.k,t.z],null,null),(l()(),t.tb(36,0,null,0,51,"div",[],null,null,null,null,null)),(l()(),t.tb(37,0,null,null,2,"ion-label",[],null,null,null,d.nb,d.w)),t.sb(38,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["Low on stock"])),(l()(),t.tb(40,0,null,null,23,"ion-card",[["class","stock"],["disabled",""],["padding",""]],null,null,null,d.Z,d.f)),t.sb(41,49152,null,0,i.o,[t.h,t.k,t.z],{disabled:[0,"disabled"]},null),t.sb(42,16384,null,0,i.f,[t.k],null,null),(l()(),t.tb(43,0,null,0,20,"ion-row",[],null,null,null,d.sb,d.B)),t.sb(44,49152,null,0,i.lb,[t.h,t.k,t.z],null,null),(l()(),t.tb(45,0,null,0,3,"ion-col",[["size","2"]],null,null,null,d.bb,d.k)),t.sb(46,49152,null,0,i.v,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(47,0,null,0,1,"ion-icon",[["color","danger"],["name","trending-down"],["size","large"]],null,null,null,d.ib,d.r)),t.sb(48,49152,null,0,i.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"],size:[2,"size"]},null),(l()(),t.tb(49,0,null,0,9,"ion-col",[["size","7"]],null,null,null,d.bb,d.k)),t.sb(50,49152,null,0,i.v,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(51,0,null,0,7,"ion-text",[],null,null,null,d.Cb,d.L)),t.sb(52,49152,null,0,i.zb,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,[" Banana "])),(l()(),t.tb(54,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Mb(-1,0,[" Last updated "])),(l()(),t.tb(56,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["4"])),(l()(),t.Mb(-1,0,[" days ago "])),(l()(),t.tb(59,0,null,0,4,"ion-col",[["size","3"]],null,null,null,d.bb,d.k)),t.sb(60,49152,null,0,i.v,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(61,0,null,0,2,"ion-label",[],null,null,null,d.nb,d.w)),t.sb(62,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["20"])),(l()(),t.tb(64,0,null,null,23,"ion-card",[["class","stock"],["disabled",""],["padding",""]],null,null,null,d.Z,d.f)),t.sb(65,49152,null,0,i.o,[t.h,t.k,t.z],{disabled:[0,"disabled"]},null),t.sb(66,16384,null,0,i.f,[t.k],null,null),(l()(),t.tb(67,0,null,0,20,"ion-row",[],null,null,null,d.sb,d.B)),t.sb(68,49152,null,0,i.lb,[t.h,t.k,t.z],null,null),(l()(),t.tb(69,0,null,0,3,"ion-col",[["size","2"]],null,null,null,d.bb,d.k)),t.sb(70,49152,null,0,i.v,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(71,0,null,0,1,"ion-icon",[["color","danger"],["name","trending-down"],["size","large"]],null,null,null,d.ib,d.r)),t.sb(72,49152,null,0,i.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"],size:[2,"size"]},null),(l()(),t.tb(73,0,null,0,9,"ion-col",[["size","7"]],null,null,null,d.bb,d.k)),t.sb(74,49152,null,0,i.v,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(75,0,null,0,7,"ion-text",[],null,null,null,d.Cb,d.L)),t.sb(76,49152,null,0,i.zb,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,[" Carrots "])),(l()(),t.tb(78,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Mb(-1,0,[" Last updated "])),(l()(),t.tb(80,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),t.Mb(-1,null,["5"])),(l()(),t.Mb(-1,0,[" days ago "])),(l()(),t.tb(83,0,null,0,4,"ion-col",[["size","3"]],null,null,null,d.bb,d.k)),t.sb(84,49152,null,0,i.v,[t.h,t.k,t.z],{size:[0,"size"]},null),(l()(),t.tb(85,0,null,0,2,"ion-label",[],null,null,null,d.nb,d.w)),t.sb(86,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["40"])),(l()(),t.tb(88,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),t.tb(89,0,null,null,5,"div",[["class","section-two"]],null,null,null,null,null)),(l()(),t.tb(90,0,null,null,2,"ion-label",[],null,null,null,d.nb,d.w)),t.sb(91,49152,null,0,i.P,[t.h,t.k,t.z],null,null),(l()(),t.Mb(-1,0,["Available products"])),(l()(),t.tb(93,0,null,null,1,"ion-icon",[["class","float"],["name","git-compare"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.sortCategory()&&t),t}),d.ib,d.r)),t.sb(94,49152,null,0,i.E,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.ib(16777216,null,null,1,null,v)),t.sb(96,16384,null,0,h.m,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,C)),t.sb(98,278528,null,0,h.l,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(99,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.addProduct()&&t),t}),d.eb,d.m)),t.sb(100,49152,null,0,i.y,[t.h,t.k,t.z],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t.tb(101,0,null,0,3,"ion-fab-button",[],null,null,null,d.db,d.n)),t.sb(102,49152,null,0,i.z,[t.h,t.k,t.z],null,null),(l()(),t.tb(103,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,d.ib,d.r)),t.sb(104,49152,null,0,i.E,[t.h,t.k,t.z],{name:[0,"name"]},null)],(function(l,n){var u=n.component;l(n,1,0,"primary"),l(n,3,0,"primary"),l(n,8,0,"home"),l(n,16,0,"settings"),l(n,29,0,u.show),l(n,33,0,"primary","pricetags",""),l(n,41,0,""),l(n,46,0,"2"),l(n,48,0,"danger","trending-down","large"),l(n,50,0,"7"),l(n,60,0,"3"),l(n,65,0,""),l(n,70,0,"2"),l(n,72,0,"danger","trending-down","large"),l(n,74,0,"7"),l(n,84,0,"3"),l(n,94,0,"git-compare"),l(n,96,0,0==u.products.length),l(n,98,0,u.products),l(n,100,0,"end","bottom"),l(n,104,0,"add")}),null)}function w(l){return t.Ob(0,[(l()(),t.tb(0,0,null,null,1,"app-stock",[],null,null,null,y,f)),t.sb(1,114688,null,0,c,[p.m,e.a,i.a,i.Kb,m.a,r.a],null,null)],(function(l,n){l(n,1,0)}),null)}var M=t.pb("app-stock",c,w,{},{},[]);u.d(n,"StockPageModuleNgFactory",(function(){return P}));var P=t.qb(b,[],(function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[a.a,M]],[3,t.j],t.x]),t.Db(4608,h.o,h.n,[t.u,[2,h.w]]),t.Db(4608,g.v,g.v,[]),t.Db(4608,i.c,i.c,[t.z,t.g]),t.Db(4608,i.Kb,i.Kb,[i.c,t.j,t.q]),t.Db(4608,i.Ob,i.Ob,[i.c,t.j,t.q]),t.Db(1073742336,h.c,h.c,[]),t.Db(1073742336,g.u,g.u,[]),t.Db(1073742336,g.i,g.i,[]),t.Db(1073742336,i.Gb,i.Gb,[]),t.Db(1073742336,p.p,p.p,[[2,p.u],[2,p.m]]),t.Db(1073742336,b,b,[]),t.Db(1024,p.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);