(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{MVrJ:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),o=e("mrSG"),u=e("YWyl"),r=e("c92J"),i=e("ZZ/e");class a{constructor(l,n,e,t){this.location=l,this.service=n,this.db=e,this.alert=t,this.show=!1,this.service.getallcategories(localStorage.getItem("shop")).valueChanges().subscribe(l=>{this.categories=l,this.show=!0,console.log("categories",this.categories)})}ngOnInit(){}back(){this.location.back()}newCat(){return o.__awaiter(this,void 0,void 0,(function*(){const l=yield this.alert.create({header:"Enter name of the new category",inputs:[{name:"catName",placeholder:"Enter Category name"}],buttons:[{text:"Cancel",role:"cancel"},{text:"Add",handler:l=>{console.log("form popup",l);let n=this.categories.categories;n.push(l.catName),this.service.getallcategories(localStorage.getItem("shop")).update({categories:n})}}]});yield l.present()}))}DeleteCat(l){let n=this.categories.categories;n.splice(l,1),this.service.getallcategories(localStorage.getItem("shop")).update({categories:n})}}class c{}var b=e("pMnS"),s=e("oBZk"),g=e("SVse"),p=t.pb({encapsulation:0,styles:[["ion-title[_ngcontent-%COMP%]{font-size:1.2em;color:#fff;font-weight:700}.body[_ngcontent-%COMP%]{background-color:transparent;height:100%;width:100%;margin-top:0;margin-bottom:0}.label[_ngcontent-%COMP%]{font-size:1.3em;font-weight:700;color:var(--ion-color-primary);margin-bottom:15px}.container[_ngcontent-%COMP%]{margin-top:30px}"]],data:{}});function h(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,13,"ion-item-sliding",[],null,null,null,s.ub,s.y)),t.qb(1,49152,null,0,i.O,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,4,"ion-item",[["class","ion-text-center"]],null,null,null,s.vb,s.t)),t.qb(3,49152,null,0,i.J,[t.h,t.k,t.x],null,null),(l()(),t.rb(4,0,null,0,2,"ion-label",[],null,null,null,s.wb,s.z)),t.qb(5,49152,null,0,i.P,[t.h,t.k,t.x],null,null),(l()(),t.Lb(6,0,["",""])),(l()(),t.rb(7,0,null,0,6,"ion-item-options",[],null,null,null,s.tb,s.x)),t.qb(8,49152,null,0,i.N,[t.h,t.k,t.x],null,null),(l()(),t.rb(9,0,null,0,4,"ion-item-option",[["color","danger"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.DeleteCat(l.context.index)&&t),t}),s.sb,s.w)),t.qb(10,49152,null,0,i.M,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(11,0,null,0,1,"ion-icon",[["ios","ellipsis-horizontal"],["md","ellipsis-vertical"],["slot","end"]],null,null,null,s.ob,s.r)),t.qb(12,49152,null,0,i.E,[t.h,t.k,t.x],{ios:[0,"ios"],md:[1,"md"]},null),(l()(),t.Lb(-1,0,[" Delete "]))],(function(l,n){l(n,10,0,"danger"),l(n,12,0,"ellipsis-horizontal","ellipsis-vertical")}),(function(l,n){l(n,6,0,n.context.$implicit)}))}function m(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,6,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,3,"ion-label",[["class","label"],["padding",""]],null,null,null,s.wb,s.z)),t.qb(2,49152,null,0,i.P,[t.h,t.k,t.x],null,null),t.qb(3,16384,null,0,i.f,[t.k],null,null),(l()(),t.Lb(-1,0,["Slide left on a category to delete"])),(l()(),t.gb(16777216,null,null,1,null,h)),t.qb(6,278528,null,0,g.l,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,6,0,n.component.categories.categories)}),null)}function d(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,15,"ion-content",[],null,null,null,s.hb,s.k)),t.qb(1,49152,null,0,i.w,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,13,"div",[["class","body"]],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,10,"ion-toolbar",[["color","primary"]],null,null,null,s.Tb,s.W)),t.qb(4,49152,null,0,i.Eb,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(5,0,null,0,4,"ion-buttons",[["padding",""],["slot","start"]],null,null,null,s.bb,s.e)),t.qb(6,49152,null,0,i.n,[t.h,t.k,t.x],null,null),t.qb(7,16384,null,0,i.f,[t.k],null,null),(l()(),t.rb(8,0,null,0,1,"ion-icon",[["name","arrow-back"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.back()&&t),t}),s.ob,s.r)),t.qb(9,49152,null,0,i.E,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.rb(10,0,null,0,3,"ion-title",[["text-center",""]],null,null,null,s.Rb,s.U)),t.qb(11,49152,null,0,i.Cb,[t.h,t.k,t.x],null,null),t.qb(12,16384,null,0,i.f,[t.k],null,null),(l()(),t.Lb(-1,0,["Remove Category"])),(l()(),t.gb(16777216,null,null,1,null,m)),t.qb(15,16384,null,0,g.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(16,0,null,null,4,"ion-footer",[],null,null,null,s.lb,s.o)),t.qb(17,49152,null,0,i.B,[t.h,t.k,t.x],null,null),(l()(),t.rb(18,0,null,0,2,"ion-button",[["expand","full"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.newCat()&&t),t}),s.ab,s.d)),t.qb(19,49152,null,0,i.m,[t.h,t.k,t.x],{expand:[0,"expand"]},null),(l()(),t.Lb(-1,0,[" Add New Category "]))],(function(l,n){var e=n.component;l(n,4,0,"primary"),l(n,9,0,"arrow-back"),l(n,15,0,e.show),l(n,19,0,"full")}),null)}function f(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,1,"app-remove-category",[],null,null,null,d,p)),t.qb(1,114688,null,0,a,[g.i,u.a,r.a,i.b],null,null)],(function(l,n){l(n,1,0)}),null)}var k=t.nb("app-remove-category",a,f,{},{},[]),x=e("s7LF"),v=e("iInd");e.d(n,"RemoveCategoryPageModuleNgFactory",(function(){return w}));var w=t.ob(c,[],(function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[b.a,k]],[3,t.j],t.v]),t.Bb(4608,g.o,g.n,[t.s,[2,g.w]]),t.Bb(4608,x.y,x.y,[]),t.Bb(4608,i.c,i.c,[t.x,t.g]),t.Bb(4608,i.Kb,i.Kb,[i.c,t.j,t.p]),t.Bb(4608,i.Pb,i.Pb,[i.c,t.j,t.p]),t.Bb(1073742336,g.c,g.c,[]),t.Bb(1073742336,x.x,x.x,[]),t.Bb(1073742336,x.j,x.j,[]),t.Bb(1073742336,i.Gb,i.Gb,[]),t.Bb(1073742336,v.o,v.o,[[2,v.t],[2,v.m]]),t.Bb(1073742336,c,c,[]),t.Bb(1024,v.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);