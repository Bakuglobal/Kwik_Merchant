(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{Coe3:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J"),t=u("mrSG"),e=u("YWyl"),i=u("ZZ/e"),r=u("Uncc"),b=u("c92J");class a{constructor(l,n,u,o,t,e){this.navCtrl=l,this.service=n,this.Asc=u,this.modal=o,this.fs=t,this.db=e,this.padding=!0,this.service.hiddenTabs=!0,this.shopname=this.db.getshopname(),console.log(this.shopname),this.getproducts()}ionViewDidEnter(){this.service.getallcategories(this.shopname).valueChanges().subscribe(l=>{console.log(l)})}getCategories(){}ngOnInit(){}getproducts(){return t.__awaiter(this,void 0,void 0,(function*(){yield this.fs.collection(this.shopname).valueChanges().subscribe(l=>{console.log(l),this.products=l,this.unfilteredProducts=l})}))}home(){this.service.hiddenTabs=!1,this.navCtrl.navigate(["tabs/dashboard"])}sortCategory(){return t.__awaiter(this,void 0,void 0,(function*(){(yield this.Asc.create({header:"Sort category in",buttons:[{text:"ASC",handler:()=>{console.log("asc")}},{text:"DSC",handler:()=>{console.log("asc")}}]})).present()}))}settings(){return t.__awaiter(this,void 0,void 0,(function*(){(yield this.modal.create({component:r.a,componentProps:{}})).present()}))}addProduct(){this.navCtrl.navigate(["tabs/products"])}viewProduct(l){this.service.hiddenTabs=!0,this.service.setProduct(l),console.log(l),this.navCtrl.navigate(["tabs/productmodal"])}}class c{}var s=u("pMnS"),d=u("oBZk"),g=u("s7LF"),h=u("SVse"),p=u("iInd"),k=u("Xr7G"),m=o.pb({encapsulation:0,styles:[[".card-main[_ngcontent-%COMP%]{color:var(--ion-color-medium);background-color:#fff;border-radius:20px 20px 0 0;width:100%;height:100%;margin-bottom:0;margin-top:40px}.image[_ngcontent-%COMP%]{-o-object-fit:contain;object-fit:contain;width:50%;height:50%;float:right}.title[_ngcontent-%COMP%]{font-weight:700;font-size:1.1em}ion-select[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.float[_ngcontent-%COMP%]{float:right;color:var(--ion-color-primary)}.content[_ngcontent-%COMP%]{margin-top:20px}.content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.1em;color:var(--ion-color-primary)}.section-two[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}.stock[_ngcontent-%COMP%]{border-radius:20px}.stock[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-weight:700;padding-top:20px}.stock[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-size:1em}.stock[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.7em;font-weight:700;float:right}"]],data:{}});function v(l){return o.Mb(0,[(l()(),o.rb(0,0,null,null,23,"ion-card",[["class","stock"],["padding",""]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.viewProduct(l.context.$implicit)&&o),o}),d.Z,d.f)),o.qb(1,49152,null,0,i.o,[o.h,o.k,o.x],null,null),o.qb(2,16384,null,0,i.f,[o.k],null,null),(l()(),o.rb(3,0,null,0,20,"ion-row",[],null,null,null,d.sb,d.B)),o.qb(4,49152,null,0,i.lb,[o.h,o.k,o.x],null,null),(l()(),o.rb(5,0,null,0,3,"ion-col",[["size","2"]],null,null,null,d.bb,d.k)),o.qb(6,49152,null,0,i.v,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.rb(7,0,null,0,1,"ion-icon",[["color","success"],["name","trending-up"],["size","large"]],null,null,null,d.ib,d.r)),o.qb(8,49152,null,0,i.E,[o.h,o.k,o.x],{color:[0,"color"],name:[1,"name"],size:[2,"size"]},null),(l()(),o.rb(9,0,null,0,9,"ion-col",[["size","7"]],null,null,null,d.bb,d.k)),o.qb(10,49152,null,0,i.v,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.rb(11,0,null,0,7,"ion-text",[],null,null,null,d.Cb,d.L)),o.qb(12,49152,null,0,i.zb,[o.h,o.k,o.x],null,null),(l()(),o.Kb(13,0,[" "," "])),(l()(),o.rb(14,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.Kb(-1,0,[" Last updated "])),(l()(),o.rb(16,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),o.Kb(-1,null,["4"])),(l()(),o.Kb(-1,0,[" days ago "])),(l()(),o.rb(19,0,null,0,4,"ion-col",[["size","3"]],null,null,null,d.bb,d.k)),o.qb(20,49152,null,0,i.v,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.rb(21,0,null,0,2,"ion-label",[],null,null,null,d.nb,d.w)),o.qb(22,49152,null,0,i.P,[o.h,o.k,o.x],null,null),(l()(),o.Kb(23,0,["",""]))],(function(l,n){l(n,6,0,"2"),l(n,8,0,"success","trending-up","large"),l(n,10,0,"7"),l(n,20,0,"3")}),(function(l,n){l(n,13,0,n.context.$implicit.product),l(n,23,0,n.context.$implicit.stock)}))}function x(l){return o.Mb(0,[(l()(),o.rb(0,0,null,null,108,"ion-content",[["color","primary"],["style","background-color: var(--ion-color-primary);"]],null,null,null,d.cb,d.l)),o.qb(1,49152,null,0,i.w,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.rb(2,0,null,0,14,"ion-toolbar",[["color","primary"]],null,null,null,d.Hb,d.Q)),o.qb(3,49152,null,0,i.Eb,[o.h,o.k,o.x],{color:[0,"color"]},null),(l()(),o.rb(4,0,null,0,4,"ion-buttons",[["padding",""],["slot","start"]],null,null,null,d.V,d.e)),o.qb(5,49152,null,0,i.n,[o.h,o.k,o.x],null,null),o.qb(6,16384,null,0,i.f,[o.k],null,null),(l()(),o.rb(7,0,null,0,1,"ion-icon",[["name","home"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.home()&&o),o}),d.ib,d.r)),o.qb(8,49152,null,0,i.E,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.rb(9,0,null,0,2,"ion-title",[],null,null,null,d.Fb,d.O)),o.qb(10,49152,null,0,i.Cb,[o.h,o.k,o.x],null,null),(l()(),o.Kb(-1,0,["Stock"])),(l()(),o.rb(12,0,null,0,4,"ion-buttons",[["padding",""],["slot","end"]],null,null,null,d.V,d.e)),o.qb(13,49152,null,0,i.n,[o.h,o.k,o.x],null,null),o.qb(14,16384,null,0,i.f,[o.k],null,null),(l()(),o.rb(15,0,null,0,1,"ion-icon",[["name","settings"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.settings()&&o),o}),d.ib,d.r)),o.qb(16,49152,null,0,i.E,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.rb(17,0,null,0,85,"div",[["class","card-main"],["style","background-color: white;"]],null,null,null,null,null)),(l()(),o.rb(18,0,null,null,20,"ion-card-title",[["padding",""]],null,null,null,d.Y,d.i)),o.qb(19,49152,null,0,i.s,[o.h,o.k,o.x],null,null),o.qb(20,16384,null,0,i.f,[o.k],null,null),(l()(),o.rb(21,0,null,0,17,"ion-row",[],null,null,null,d.sb,d.B)),o.qb(22,49152,null,0,i.lb,[o.h,o.k,o.x],null,null),(l()(),o.rb(23,0,null,0,11,"ion-col",[],null,null,null,d.bb,d.k)),o.qb(24,49152,null,0,i.v,[o.h,o.k,o.x],null,null),(l()(),o.rb(25,0,null,0,2,"ion-label",[["class","title"]],null,null,null,d.nb,d.w)),o.qb(26,49152,null,0,i.P,[o.h,o.k,o.x],null,null),(l()(),o.Kb(-1,0,["Choose category"])),(l()(),o.rb(28,0,null,0,6,"ion-select",[["placeholder","category"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,e=l.component;return"ionBlur"===n&&(t=!1!==o.Db(l,29)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==o.Db(l,29)._handleChangeEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(e.category=u)&&t),t}),d.xb,d.F)),o.qb(29,16384,null,0,i.Qb,[o.k],null,null),o.Hb(1024,null,g.j,(function(l){return[l]}),[i.Qb]),o.qb(31,671744,null,0,g.o,[[8,null],[8,null],[8,null],[6,g.j]],{model:[0,"model"]},{update:"ngModelChange"}),o.Hb(2048,null,g.k,null,[g.o]),o.qb(33,16384,null,0,g.l,[[4,g.k]],null,null),o.qb(34,49152,null,0,i.pb,[o.h,o.k,o.x],{placeholder:[0,"placeholder"]},null),(l()(),o.rb(35,0,null,0,3,"ion-col",[],null,null,null,d.bb,d.k)),o.qb(36,49152,null,0,i.v,[o.h,o.k,o.x],null,null),(l()(),o.rb(37,0,null,0,1,"ion-icon",[["class","image"],["color","primary"],["name","pricetags"],["src",""]],null,null,null,d.ib,d.r)),o.qb(38,49152,null,0,i.E,[o.h,o.k,o.x],{color:[0,"color"],name:[1,"name"],src:[2,"src"]},null),(l()(),o.rb(39,0,null,null,62,"ion-card-content",[["class","content"]],null,null,null,d.W,d.g)),o.qb(40,49152,null,0,i.p,[o.h,o.k,o.x],null,null),(l()(),o.rb(41,0,null,0,51,"div",[],null,null,null,null,null)),(l()(),o.rb(42,0,null,null,2,"ion-label",[],null,null,null,d.nb,d.w)),o.qb(43,49152,null,0,i.P,[o.h,o.k,o.x],null,null),(l()(),o.Kb(-1,0,["Low on stock"])),(l()(),o.rb(45,0,null,null,23,"ion-card",[["class","stock"],["disabled",""],["padding",""]],null,null,null,d.Z,d.f)),o.qb(46,49152,null,0,i.o,[o.h,o.k,o.x],{disabled:[0,"disabled"]},null),o.qb(47,16384,null,0,i.f,[o.k],null,null),(l()(),o.rb(48,0,null,0,20,"ion-row",[],null,null,null,d.sb,d.B)),o.qb(49,49152,null,0,i.lb,[o.h,o.k,o.x],null,null),(l()(),o.rb(50,0,null,0,3,"ion-col",[["size","2"]],null,null,null,d.bb,d.k)),o.qb(51,49152,null,0,i.v,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.rb(52,0,null,0,1,"ion-icon",[["color","danger"],["name","trending-down"],["size","large"]],null,null,null,d.ib,d.r)),o.qb(53,49152,null,0,i.E,[o.h,o.k,o.x],{color:[0,"color"],name:[1,"name"],size:[2,"size"]},null),(l()(),o.rb(54,0,null,0,9,"ion-col",[["size","7"]],null,null,null,d.bb,d.k)),o.qb(55,49152,null,0,i.v,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.rb(56,0,null,0,7,"ion-text",[],null,null,null,d.Cb,d.L)),o.qb(57,49152,null,0,i.zb,[o.h,o.k,o.x],null,null),(l()(),o.Kb(-1,0,[" Banana "])),(l()(),o.rb(59,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.Kb(-1,0,[" Last updated "])),(l()(),o.rb(61,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),o.Kb(-1,null,["4"])),(l()(),o.Kb(-1,0,[" days ago "])),(l()(),o.rb(64,0,null,0,4,"ion-col",[["size","3"]],null,null,null,d.bb,d.k)),o.qb(65,49152,null,0,i.v,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.rb(66,0,null,0,2,"ion-label",[],null,null,null,d.nb,d.w)),o.qb(67,49152,null,0,i.P,[o.h,o.k,o.x],null,null),(l()(),o.Kb(-1,0,["20"])),(l()(),o.rb(69,0,null,null,23,"ion-card",[["class","stock"],["disabled",""],["padding",""]],null,null,null,d.Z,d.f)),o.qb(70,49152,null,0,i.o,[o.h,o.k,o.x],{disabled:[0,"disabled"]},null),o.qb(71,16384,null,0,i.f,[o.k],null,null),(l()(),o.rb(72,0,null,0,20,"ion-row",[],null,null,null,d.sb,d.B)),o.qb(73,49152,null,0,i.lb,[o.h,o.k,o.x],null,null),(l()(),o.rb(74,0,null,0,3,"ion-col",[["size","2"]],null,null,null,d.bb,d.k)),o.qb(75,49152,null,0,i.v,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.rb(76,0,null,0,1,"ion-icon",[["color","danger"],["name","trending-down"],["size","large"]],null,null,null,d.ib,d.r)),o.qb(77,49152,null,0,i.E,[o.h,o.k,o.x],{color:[0,"color"],name:[1,"name"],size:[2,"size"]},null),(l()(),o.rb(78,0,null,0,9,"ion-col",[["size","7"]],null,null,null,d.bb,d.k)),o.qb(79,49152,null,0,i.v,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.rb(80,0,null,0,7,"ion-text",[],null,null,null,d.Cb,d.L)),o.qb(81,49152,null,0,i.zb,[o.h,o.k,o.x],null,null),(l()(),o.Kb(-1,0,[" Carrots "])),(l()(),o.rb(83,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.Kb(-1,0,[" Last updated "])),(l()(),o.rb(85,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),o.Kb(-1,null,["5"])),(l()(),o.Kb(-1,0,[" days ago "])),(l()(),o.rb(88,0,null,0,4,"ion-col",[["size","3"]],null,null,null,d.bb,d.k)),o.qb(89,49152,null,0,i.v,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.rb(90,0,null,0,2,"ion-label",[],null,null,null,d.nb,d.w)),o.qb(91,49152,null,0,i.P,[o.h,o.k,o.x],null,null),(l()(),o.Kb(-1,0,["40"])),(l()(),o.rb(93,0,null,0,8,"div",[],null,null,null,null,null)),(l()(),o.rb(94,0,null,null,5,"div",[["class","section-two"]],null,null,null,null,null)),(l()(),o.rb(95,0,null,null,2,"ion-label",[],null,null,null,d.nb,d.w)),o.qb(96,49152,null,0,i.P,[o.h,o.k,o.x],null,null),(l()(),o.Kb(-1,0,["Available products"])),(l()(),o.rb(98,0,null,null,1,"ion-icon",[["class","float"],["name","git-compare"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.sortCategory()&&o),o}),d.ib,d.r)),o.qb(99,49152,null,0,i.E,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.gb(16777216,null,null,1,null,v)),o.qb(101,278528,null,0,h.l,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null),(l()(),o.rb(102,0,null,null,0,"div",[["style","height: 100%;background-color: white;"]],null,null,null,null,null)),(l()(),o.rb(103,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.addProduct()&&o),o}),d.eb,d.m)),o.qb(104,49152,null,0,i.y,[o.h,o.k,o.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),o.rb(105,0,null,0,3,"ion-fab-button",[],null,null,null,d.db,d.n)),o.qb(106,49152,null,0,i.z,[o.h,o.k,o.x],null,null),(l()(),o.rb(107,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,d.ib,d.r)),o.qb(108,49152,null,0,i.E,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(l,n){var u=n.component;l(n,1,0,"primary"),l(n,3,0,"primary"),l(n,8,0,"home"),l(n,16,0,"settings"),l(n,31,0,u.category),l(n,34,0,"category"),l(n,38,0,"primary","pricetags",""),l(n,46,0,""),l(n,51,0,"2"),l(n,53,0,"danger","trending-down","large"),l(n,55,0,"7"),l(n,65,0,"3"),l(n,70,0,""),l(n,75,0,"2"),l(n,77,0,"danger","trending-down","large"),l(n,79,0,"7"),l(n,89,0,"3"),l(n,99,0,"git-compare"),l(n,101,0,u.products),l(n,104,0,"end","bottom"),l(n,108,0,"add")}),(function(l,n){l(n,28,0,o.Db(n,33).ngClassUntouched,o.Db(n,33).ngClassTouched,o.Db(n,33).ngClassPristine,o.Db(n,33).ngClassDirty,o.Db(n,33).ngClassValid,o.Db(n,33).ngClassInvalid,o.Db(n,33).ngClassPending)}))}function q(l){return o.Mb(0,[(l()(),o.rb(0,0,null,null,1,"app-stock",[],null,null,null,x,m)),o.qb(1,114688,null,0,a,[p.m,e.a,i.a,i.Kb,k.a,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var f=o.nb("app-stock",a,q,{},{},[]);u.d(n,"StockPageModuleNgFactory",(function(){return C}));var C=o.ob(c,[],(function(l){return o.Ab([o.Bb(512,o.j,o.Z,[[8,[s.a,f]],[3,o.j],o.v]),o.Bb(4608,h.o,h.n,[o.s,[2,h.w]]),o.Bb(4608,g.t,g.t,[]),o.Bb(4608,i.c,i.c,[o.x,o.g]),o.Bb(4608,i.Kb,i.Kb,[i.c,o.j,o.p]),o.Bb(4608,i.Ob,i.Ob,[i.c,o.j,o.p]),o.Bb(1073742336,h.c,h.c,[]),o.Bb(1073742336,g.s,g.s,[]),o.Bb(1073742336,g.g,g.g,[]),o.Bb(1073742336,i.Gb,i.Gb,[]),o.Bb(1073742336,p.p,p.p,[[2,p.u],[2,p.m]]),o.Bb(1073742336,c,c,[]),o.Bb(1024,p.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);