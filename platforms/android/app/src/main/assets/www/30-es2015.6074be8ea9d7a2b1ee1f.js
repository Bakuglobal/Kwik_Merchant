(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{Coe3:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),o=u("mrSG"),r=u("YWyl"),e=u("ZZ/e"),i=u("Uncc"),c=u("c92J");class b{constructor(l,n,u,t,o,r){this.navCtrl=l,this.service=n,this.Asc=u,this.modal=t,this.fs=o,this.db=r,this.products=[],this.show=!1,this.service.hiddenTabs=!0,this.getStockLimits()}ionViewDidEnter(){this.shopname=localStorage.getItem("shop"),console.log(this.shopname),this.service.getallcategories(this.shopname).valueChanges().subscribe(l=>{this.categories=l,this.show=!0,console.log(this.categories)}),this.getproducts()}ngOnInit(){}getproducts(){this.service.getallProducts(this.shopname).subscribe(l=>{this.products=l,this.unfilteredProducts=l,console.log("products",this.products)})}filterProducts(){null===this.category&&void 0===this.category||(console.log(this.category),this.products=this.filterItems(),console.log(this.products))}filterItems(){return this.unfilteredProducts.filter(l=>(console.log(l.category),l.category.toLowerCase().indexOf(this.category.toLowerCase())>-1))}home(){this.service.hiddenTabs=!1,this.navCtrl.navigate(["tabs/dashboard"])}sortCategory(){return o.__awaiter(this,void 0,void 0,(function*(){(yield this.Asc.create({header:"Sort category by Price in",buttons:[{text:"Ascending Order",handler:()=>{console.log("asc"),this.products=this.products.sort((function(l,n){return l.currentprice-n.currentprice}))}},{text:"Descending Order",handler:()=>{console.log("asc"),this.products=this.products.sort((function(l,n){return n.currentprice-l.currentprice}))}}]})).present()}))}sortByPriceAsc(l,n){return l.currentprice-n.currentprice}sortByPriceDsc(l,n){return n.currentprice-l.currentprice}settings(){return o.__awaiter(this,void 0,void 0,(function*(){(yield this.modal.create({component:i.a,componentProps:{}})).present()}))}addProduct(){this.navCtrl.navigate(["tabs/products"])}viewProduct(l){this.service.hiddenTabs=!0,this.service.setProduct(l),console.log(l),this.navCtrl.navigate(["tabs/productmodal"])}getStockLimits(){this.db.getAlaerts(localStorage.getItem("user")).subscribe(l=>{console.log(l),this.myAlerts=l})}}class a{}var s=u("pMnS"),g=u("oBZk"),p=u("s7LF"),h=u("SVse"),d=u("iInd"),m=u("Xr7G"),f=t.pb({encapsulation:0,styles:[[".card-main[_ngcontent-%COMP%]{color:var(--ion-color-medium);background-color:#fff;border-radius:20px 20px 0 0;width:100%;position:fixed;bottom:0;top:100px;overflow-y:scroll}.image[_ngcontent-%COMP%]{-o-object-fit:contain;object-fit:contain;width:20px;height:20px;float:right;right:0;margin-right:5px}.title[_ngcontent-%COMP%]{font-weight:700;font-size:15px;color:var(--ion-color-primary);margin-left:5px}ion-select[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.float[_ngcontent-%COMP%]{float:right;color:var(--ion-color-primary)}.content[_ngcontent-%COMP%]{margin-top:20px}.content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.1em;color:var(--ion-color-primary)}.prTag[_ngcontent-%COMP%]{text-align:center;position:absolute;padding-top:10px;padding-bottom:10px;width:100%;bottom:0;background-color:var(--ion-color-primary)}.prTag[_ngcontent-%COMP%]   #lb[_ngcontent-%COMP%]{border-radius:10px;font-weight:700;color:var(--ion-color-primary);width:85%;background-color:#fff;padding:5px 30px}.pr-name[_ngcontent-%COMP%]{font-weight:700;font-size:1.1em;text-transform:capitalize}.pr-price[_ngcontent-%COMP%]{font-size:.8em;color:grey}.spinner[_ngcontent-%COMP%]{margin-top:70px;margin-left:45%}.section-two[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}.stock[_ngcontent-%COMP%]{border-radius:10px}.stock[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-weight:700;padding-top:20px}.stock[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-size:1em}.stock[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.7em;font-weight:700;float:right}"]],data:{}});function x(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,4,"ion-segment-button",[],null,null,null,g.Eb,g.I)),t.qb(1,49152,null,0,e.ob,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.rb(2,0,null,0,2,"ion-label",[],null,null,null,g.wb,g.z)),t.qb(3,49152,null,0,e.P,[t.h,t.k,t.x],null,null),(l()(),t.Lb(4,0,["",""]))],(function(l,n){l(n,1,0,t.vb(1,"",n.context.$implicit,""))}),(function(l,n){l(n,4,0,n.context.$implicit)}))}function v(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,13,"ion-segment",[["scrollable",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var o=!0,r=l.component;return"ionBlur"===n&&(o=!1!==t.Db(l,1)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Db(l,1)._handleChangeEvent(u.target)&&o),"ngModelChange"===n&&(o=!1!==(r.category=u)&&o),"ionChange"===n&&(o=!1!==r.filterProducts()&&o),o}),g.Fb,g.H)),t.qb(1,16384,null,0,e.Rb,[t.k],null,null),t.Ib(1024,null,p.m,(function(l){return[l]}),[e.Rb]),t.qb(3,671744,null,0,p.r,[[8,null],[8,null],[8,null],[6,p.m]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ib(2048,null,p.n,null,[p.r]),t.qb(5,16384,null,0,p.o,[[4,p.n]],null,null),t.qb(6,49152,null,0,e.nb,[t.h,t.k,t.x],{scrollable:[0,"scrollable"]},null),(l()(),t.rb(7,0,null,0,4,"ion-segment-button",[["selected",""],["value",""]],null,null,null,g.Eb,g.I)),t.qb(8,49152,null,0,e.ob,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.rb(9,0,null,0,2,"ion-label",[],null,null,null,g.wb,g.z)),t.qb(10,49152,null,0,e.P,[t.h,t.k,t.x],null,null),(l()(),t.Lb(-1,0,["All"])),(l()(),t.gb(16777216,null,0,1,null,x)),t.qb(13,278528,null,0,h.l,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,3,0,u.category),l(n,6,0,""),l(n,8,0,""),l(n,13,0,u.categories.categories)}),(function(l,n){l(n,0,0,t.Db(n,5).ngClassUntouched,t.Db(n,5).ngClassTouched,t.Db(n,5).ngClassPristine,t.Db(n,5).ngClassDirty,t.Db(n,5).ngClassValid,t.Db(n,5).ngClassInvalid,t.Db(n,5).ngClassPending)}))}function k(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,7,"div",[["style","color: #737373; font-size: 13px; margin-top: 10px;"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["You haven't set any low limit stock alerts on your products."])),(l()(),t.rb(3,0,null,null,4,"div",[["style","margin-top: 10px;"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Click on settings "])),(l()(),t.rb(5,0,null,null,1,"ion-icon",[["name","settings"]],null,null,null,g.ob,g.r)),t.qb(6,49152,null,0,e.E,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.Lb(-1,null,[" and get started"]))],(function(l,n){l(n,6,0,"settings")}),null)}function y(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,2,"ion-label",[["style","color: #737373;font-size: .8rem;"]],null,null,null,g.wb,g.z)),t.qb(2,49152,null,0,e.P,[t.h,t.k,t.x],null,null),(l()(),t.Lb(-1,0,["Generating report ..."])),(l()(),t.rb(4,0,null,null,1,"ion-progress-bar",[["buffer","0.5"],["value","0.25"]],null,null,null,g.Bb,g.E)),t.qb(5,49152,null,0,e.bb,[t.h,t.k,t.x],{buffer:[0,"buffer"],value:[1,"value"]},null)],(function(l,n){l(n,5,0,"0.5","0.25")}),null)}function q(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,2,"ion-text",[["color","dark"]],null,null,null,g.Pb,g.S)),t.qb(2,49152,null,0,e.zb,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.Lb(-1,0,["You have 0 alerts left"]))],(function(l,n){l(n,2,0,"dark")}),null)}function C(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,y)),t.qb(4,16384,null,0,h.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,q)),t.qb(6,16384,null,0,h.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,4,0,u.myAlerts[0].categories.length>0),l(n,6,0,0===u.myAlerts[0].categories.length)}),null)}function P(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,1,"ion-spinner",[["class","spinner"],["color","primary"],["name","circles"]],null,null,null,g.Lb,g.O)),t.qb(1,49152,null,0,e.ub,[t.h,t.k,t.x],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,1,0,"primary","circles")}),null)}function w(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,0,"img",[["alt","product image"],["style","height: 150px;"]],[[8,"src",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.viewProduct(l.parent.context.$implicit)&&t),t}),null,null))],null,(function(l,n){l(n,0,0,t.vb(1,"",n.parent.context.$implicit.image,""))}))}function M(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,19,"ion-col",[["size","6"]],null,null,null,g.gb,g.j)),t.qb(1,49152,null,0,e.v,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.rb(2,0,null,0,17,"ion-card",[["style","height: 200px;"]],null,null,null,g.eb,g.f)),t.qb(3,49152,null,0,e.o,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,w)),t.qb(5,16384,null,0,h.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(6,0,null,0,9,"ion-card-content",[],null,null,null,g.cb,g.g)),t.qb(7,49152,null,0,e.p,[t.h,t.k,t.x],null,null),(l()(),t.rb(8,0,null,0,2,"ion-label",[["class","pr-name"]],null,null,null,g.wb,g.z)),t.qb(9,49152,null,0,e.P,[t.h,t.k,t.x],null,null),(l()(),t.Lb(10,0,["",""])),(l()(),t.rb(11,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.rb(12,0,null,0,2,"ion-label",[["class","pr-price"]],null,null,null,g.wb,g.z)),t.qb(13,49152,null,0,e.P,[t.h,t.k,t.x],null,null),(l()(),t.Lb(14,0,["Ksh ",""])),(l()(),t.rb(15,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.rb(16,0,null,0,3,"div",[["class","prTag"]],null,null,null,null,null)),(l()(),t.rb(17,0,null,null,2,"ion-label",[["id","lb"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.viewProduct(l.context.$implicit)&&t),t}),g.wb,g.z)),t.qb(18,49152,null,0,e.P,[t.h,t.k,t.x],null,null),(l()(),t.Lb(-1,0,["View "]))],(function(l,n){l(n,1,0,"6"),l(n,5,0,void 0!==n.context.$implicit.image)}),(function(l,n){l(n,10,0,n.context.$implicit.Meal),l(n,14,0,n.context.$implicit.currentprice)}))}function O(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,63,"ion-content",[["color","primary"],["style","background-color: var(--ion-color-primary);"]],null,null,null,g.hb,g.k)),t.qb(1,49152,null,0,e.w,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(2,0,null,0,13,"ion-toolbar",[["color","primary"]],null,null,null,g.Tb,g.W)),t.qb(3,49152,null,0,e.Eb,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,g.bb,g.e)),t.qb(5,49152,null,0,e.n,[t.h,t.k,t.x],null,null),(l()(),t.rb(6,0,null,0,1,"ion-icon",[["name","arrow-back"],["style","width: 20px; height: 20px; margin-left: 5px;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.home()&&t),t}),g.ob,g.r)),t.qb(7,49152,null,0,e.E,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.rb(8,0,null,0,3,"ion-title",[["text-center",""]],null,null,null,g.Rb,g.U)),t.qb(9,49152,null,0,e.Cb,[t.h,t.k,t.x],null,null),t.qb(10,16384,null,0,e.f,[t.k],null,null),(l()(),t.Lb(-1,0,["Stock"])),(l()(),t.rb(12,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,g.bb,g.e)),t.qb(13,49152,null,0,e.n,[t.h,t.k,t.x],null,null),(l()(),t.rb(14,0,null,0,1,"ion-icon",[["name","settings"],["style","width: 20px; height: 20px; margin-right: 5px;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.settings()&&t),t}),g.ob,g.r)),t.qb(15,49152,null,0,e.E,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.rb(16,0,null,0,41,"div",[["class","card-main"],["style","background-color: white;"]],null,null,null,null,null)),(l()(),t.rb(17,0,null,null,17,"ion-card-title",[["no-padding",""]],null,null,null,g.db,g.h)),t.qb(18,49152,null,0,e.s,[t.h,t.k,t.x],null,null),t.qb(19,16384,null,0,e.f,[t.k],null,null),(l()(),t.rb(20,0,null,0,10,"ion-row",[["style","margin-top: 10px;"]],null,null,null,g.Cb,g.F)),t.qb(21,49152,null,0,e.lb,[t.h,t.k,t.x],null,null),(l()(),t.rb(22,0,null,0,4,"ion-col",[],null,null,null,g.gb,g.j)),t.qb(23,49152,null,0,e.v,[t.h,t.k,t.x],null,null),(l()(),t.rb(24,0,null,0,2,"ion-label",[["class","title"]],null,null,null,g.wb,g.z)),t.qb(25,49152,null,0,e.P,[t.h,t.k,t.x],null,null),(l()(),t.Lb(-1,0,["Choose category"])),(l()(),t.rb(27,0,null,0,3,"ion-col",[],null,null,null,g.gb,g.j)),t.qb(28,49152,null,0,e.v,[t.h,t.k,t.x],null,null),(l()(),t.rb(29,0,null,0,1,"ion-icon",[["class","image"],["color","primary"],["name","pricetags"]],null,null,null,g.ob,g.r)),t.qb(30,49152,null,0,e.E,[t.h,t.k,t.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.rb(31,0,null,0,3,"ion-row",[],null,null,null,g.Cb,g.F)),t.qb(32,49152,null,0,e.lb,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,v)),t.qb(34,16384,null,0,h.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(35,0,null,null,22,"ion-card-content",[["class","content"]],null,null,null,g.cb,g.g)),t.qb(36,49152,null,0,e.p,[t.h,t.k,t.x],null,null),(l()(),t.rb(37,0,null,0,7,"div",[],null,null,null,null,null)),(l()(),t.rb(38,0,null,null,2,"ion-label",[],null,null,null,g.wb,g.z)),t.qb(39,49152,null,0,e.P,[t.h,t.k,t.x],null,null),(l()(),t.Lb(-1,0,["Low on stock"])),(l()(),t.gb(16777216,null,null,1,null,k)),t.qb(42,16384,null,0,h.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,C)),t.qb(44,16384,null,0,h.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(45,0,null,0,12,"div",[],null,null,null,null,null)),(l()(),t.rb(46,0,null,null,5,"div",[["class","section-two"]],null,null,null,null,null)),(l()(),t.rb(47,0,null,null,2,"ion-label",[],null,null,null,g.wb,g.z)),t.qb(48,49152,null,0,e.P,[t.h,t.k,t.x],null,null),(l()(),t.Lb(-1,0,["Available products"])),(l()(),t.rb(50,0,null,null,1,"ion-icon",[["class","float"],["name","git-compare"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.sortCategory()&&t),t}),g.ob,g.r)),t.qb(51,49152,null,0,e.E,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.gb(16777216,null,null,1,null,P)),t.qb(53,16384,null,0,h.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(54,0,null,null,3,"ion-row",[],null,null,null,g.Cb,g.F)),t.qb(55,49152,null,0,e.lb,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,M)),t.qb(57,278528,null,0,h.l,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.rb(58,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.addProduct()&&t),t}),g.kb,g.m)),t.qb(59,49152,null,0,e.y,[t.h,t.k,t.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t.rb(60,0,null,0,3,"ion-fab-button",[["size","small"]],null,null,null,g.jb,g.n)),t.qb(61,49152,null,0,e.z,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.rb(62,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,g.ob,g.r)),t.qb(63,49152,null,0,e.E,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(l,n){var u=n.component;l(n,1,0,"primary"),l(n,3,0,"primary"),l(n,7,0,"arrow-back"),l(n,15,0,"settings"),l(n,30,0,"primary","pricetags"),l(n,34,0,u.show),l(n,42,0,void 0===u.myAlerts),l(n,44,0,void 0!==u.myAlerts),l(n,51,0,"git-compare"),l(n,53,0,0==u.products.length),l(n,57,0,u.products),l(n,59,0,"end","bottom"),l(n,61,0,"small"),l(n,63,0,"add")}),null)}function z(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,1,"app-stock",[],null,null,null,O,f)),t.qb(1,114688,null,0,b,[d.m,r.a,e.a,e.Kb,m.a,c.a],null,null)],(function(l,n){l(n,1,0)}),null)}var _=t.nb("app-stock",b,z,{},{},[]);u.d(n,"StockPageModuleNgFactory",(function(){return I}));var I=t.ob(a,[],(function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[s.a,_]],[3,t.j],t.v]),t.Bb(4608,h.o,h.n,[t.s,[2,h.w]]),t.Bb(4608,p.y,p.y,[]),t.Bb(4608,e.c,e.c,[t.x,t.g]),t.Bb(4608,e.Kb,e.Kb,[e.c,t.j,t.p]),t.Bb(4608,e.Pb,e.Pb,[e.c,t.j,t.p]),t.Bb(1073742336,h.c,h.c,[]),t.Bb(1073742336,p.x,p.x,[]),t.Bb(1073742336,p.j,p.j,[]),t.Bb(1073742336,e.Gb,e.Gb,[]),t.Bb(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),t.Bb(1073742336,a,a,[]),t.Bb(1024,d.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);