(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{W9vR:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class o{}var u=t("pMnS"),i=t("oBZk"),c=t("s7LF"),r=t("ZZ/e"),a=t("SVse"),s=t("mrSG"),g=t("CKys"),d=t("cShL"),h=t("mvCV"),b=t("YWyl"),p=t("EK+r"),m=t("c92J");class C{constructor(n,l,t,e,o,u){this.navCtrl=n,this.modalCtrl=l,this.asC=t,this.storage=e,this.db=o,this.service=u,this.videoPath=[],this.imagePath=[],this.likes={count:0},this.liked=!1,this.h=!1,this.Addcomment=!1,this.hiddenHeader=!1,this.unfilteredPosts=[],this.showSearch=!1,this.Posts=[],this.comment=[],this.isUploading=!1,this.isUploaded=!1}onScroll(n){0==n.detail.scrollTop?(this.service.hiddenTabs=!1,this.hiddenHeader=!1,console.log("00000000")):n.detail.scrollTop>30?(console.log(">>>> 30"),this.service.hiddenTabs=!0,this.hiddenHeader=!0):this.service.hiddenTabs=!1}ngOnInit(){this.user=this.service.getuser(),console.log(this.user),this.db.getPosts().subscribe(n=>{this.Posts=n,this.unfilteredPosts=n,console.log("POSTS :",n)})}AddComment(){this.Addcomment=1!=this.Addcomment}whatsappshare(){return s.__awaiter(this,void 0,void 0,(function*(){}))}searchShop(){""===this.searchTerm&&null===this.searchTerm||(this.Posts=this.filterItems(),console.log(this.Posts))}filterItems(){return this.unfilteredPosts.filter(n=>n.shop.toLowerCase().indexOf(this.searchTerm.toLowerCase())>-1)}share(){return s.__awaiter(this,void 0,void 0,(function*(){const n=yield this.asC.create({animated:!0,backdropDismiss:!0,cssClass:"./home.page.scss",buttons:[{icon:"logo-whatsapp",text:"Whatsapp",handler:()=>{this.whatsappshare()}},{text:"Cancel",role:"cancel"}]});yield n.present()}))}comments(){return s.__awaiter(this,void 0,void 0,(function*(){const n=yield this.modalCtrl.create({component:h.a,componentProps:{}});yield n.present()}))}like(){0==this.liked?(this.likes.count++,this.liked=!0):(this.likes.count--,this.liked=!1),this.h=0==this.h}infoModal(n){return s.__awaiter(this,void 0,void 0,(function*(){const l=yield this.modalCtrl.create({component:d.a,componentProps:{shopname:n.shop,logo:n.logo}});yield l.present()}))}openPostModal(){return s.__awaiter(this,void 0,void 0,(function*(){const n=yield this.modalCtrl.create({component:g.a,componentProps:this.user});yield n.present()}))}postFile(n){return s.__awaiter(this,void 0,void 0,(function*(){const l=yield this.modalCtrl.create({component:g.a,componentProps:{url:n}});yield l.present()}))}notifications(){this.navCtrl.navigate(["tabs/notifications"])}Post(){this.text=null}show(){this.showSearch=0==this.showSearch}showImage(n){this.modalCtrl.create({component:p.a,componentProps:{img:n}}).then(n=>n.present())}}var P=t("iInd"),M=t("gJ2e"),_=e.pb({encapsulation:0,styles:[["ion-card[_ngcontent-%COMP%]{border-radius:5px;margin-left:0;margin-right:0}ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:0}a[_ngcontent-%COMP%]{text-decoration:none}.color[_ngcontent-%COMP%]{color:#00ade5}.post-img[_ngcontent-%COMP%]{widows:100%}ion-toolbar[_ngcontent-%COMP%]{border-radius:0!important}ion-badge[_ngcontent-%COMP%]{margin-left:-12px;margin-top:-12px;border-radius:100%;font-size:9px}ion-badge[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-bottom:-2px}.line[_ngcontent-%COMP%]{height:1px;background-color:#636363;margin-left:15px;margin-right:15px;opacity:.2}.page-content[_ngcontent-%COMP%]{padding-left:0;padding-right:0;background-color:#e7ebf3}.page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin-left:15px;margin-right:15px;background-color:#fff}.page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{margin-left:15px;height:70px;margin-right:15px}.page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{position:absolute;margin-top:15px}.page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:42px;height:42px}.page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{position:absolute;margin-left:55px;margin-top:28px;font-weight:700;font-size:15px}.page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{position:absolute;margin-left:75px;float:right;right:30px;margin-top:29px;color:#636363;font-size:12px}.page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:12px;color:#636363;margin-left:15px;margin-right:15px;text-align:left}.page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%]{margin-left:15px;margin-right:15px}.page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:200px}.page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .like-comment-share[_ngcontent-%COMP%]{height:53px;background-color:#fff;padding-top:5px}.page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .like-comment-share[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{padding:0;text-align:center}.page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .like-comment-share[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{color:#636363;font-size:12px}.page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .like-comment-share[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:15px}.page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .user-comment[_ngcontent-%COMP%]{background-color:#fff;margin-left:15px;margin-right:15px;padding-bottom:10px}.page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .user-comment[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]{width:70px;padding-top:15px;padding-left:15px}.page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .user-comment[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px}.page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .user-comment[_ngcontent-%COMP%]   .user-name-and-date[_ngcontent-%COMP%]{position:absolute;margin-top:-55px;left:90px;right:30px}.page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .user-comment[_ngcontent-%COMP%]   .user-name-and-date[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{float:left;font-size:13px;font-weight:700}.page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .user-comment[_ngcontent-%COMP%]   .user-name-and-date[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{float:right;padding-right:15px;color:#636363;margin-top:2px;font-size:10px}.page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .user-comment[_ngcontent-%COMP%]   .comment-container[_ngcontent-%COMP%]{margin-top:-40px;color:#636363;padding-left:61px;padding-right:8px}.page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .user-comment[_ngcontent-%COMP%]   .comment-container[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]{font-size:12px;text-align:left}.page-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .user-comment[_ngcontent-%COMP%]   .comment-container[_ngcontent-%COMP%]   .view-all-comments[_ngcontent-%COMP%]{color:#636363;font-size:10px;font-weight:700}"]],data:{}});function O(n){return e.Mb(0,[(n()(),e.rb(0,0,null,null,3,"ion-searchbar",[["animated",""],["placeholder","Search for a shop "],["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var o=!0;return"ionBlur"===l&&(o=!1!==e.Db(n,3)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==e.Db(n,3)._handleInputEvent(t.target)&&o),o}),i.ub,i.B)),e.Hb(5120,null,c.l,(function(n){return[n]}),[r.Sb]),e.qb(2,49152,null,0,r.mb,[e.h,e.k,e.x],{animated:[0,"animated"],placeholder:[1,"placeholder"],type:[2,"type"]},null),e.qb(3,16384,null,0,r.Sb,[e.k],null,null)],(function(n,l){n(l,2,0,"","Search for a shop ","text")}),null)}function f(n){return e.Mb(0,[(n()(),e.rb(0,0,null,null,2,"ion-slide",[],null,null,null,i.Ab,i.H)),e.qb(1,49152,null,0,r.sb,[e.h,e.k,e.x],null,null),(n()(),e.rb(2,0,null,0,0,"img",[],[[8,"src",4]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.showImage(n.context.$implicit)&&e),e}),null,null))],null,(function(n,l){n(l,2,0,e.vb(1,"",l.context.$implicit,""))}))}function x(n){return e.Mb(0,[(n()(),e.rb(0,0,null,null,65,"ion-card",[["class","card"]],null,null,null,i.ab,i.f)),e.qb(1,49152,null,0,r.o,[e.h,e.k,e.x],null,null),(n()(),e.rb(2,0,null,0,8,"div",[["class","header"]],null,null,null,null,null)),(n()(),e.rb(3,0,null,null,3,"div",[["class","image"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.infoModal("Kakila Organic")&&e),e}),null,null)),(n()(),e.rb(4,0,null,null,2,"ion-avatar",[],null,null,null,i.U,i.b)),e.qb(5,49152,null,0,r.i,[e.h,e.k,e.x],null,null),(n()(),e.rb(6,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),e.rb(7,0,null,null,1,"div",[["class","name"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.infoModal(n.context.$implicit)&&e),e}),null,null)),(n()(),e.Kb(8,null,[" "," "])),(n()(),e.rb(9,0,null,null,1,"div",[["class","date"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,[" 10 mins ago "])),(n()(),e.rb(11,0,null,0,1,"p",[["class","description"]],null,null,null,null,null)),(n()(),e.Kb(12,null,[" "," "])),(n()(),e.rb(13,0,null,0,4,"div",[["class","main-image"]],null,null,null,null,null)),(n()(),e.rb(14,0,null,null,3,"ion-slides",[],null,null,null,i.Bb,i.I)),e.qb(15,49152,null,0,r.tb,[e.h,e.k,e.x],null,null),(n()(),e.gb(16777216,null,0,1,null,f)),e.qb(17,278528,null,0,a.l,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.rb(18,0,null,0,31,"div",[["class","like-comment-share"]],null,null,null,null,null)),(n()(),e.rb(19,0,null,null,30,"ion-row",[],null,null,null,i.tb,i.A)),e.qb(20,49152,null,0,r.lb,[e.h,e.k,e.x],null,null),(n()(),e.rb(21,0,null,0,11,"ion-col",[["size","4"]],null,null,null,i.cb,i.j)),e.qb(22,49152,null,0,r.v,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.rb(23,0,null,0,9,"ion-button",[["fill","light"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.like()&&e),e}),i.W,i.d)),e.qb(24,49152,null,0,r.m,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(n()(),e.rb(25,0,null,0,4,"ion-icon",[["size","large"],["src","../../assets/images/heart.svg"]],null,null,null,i.jb,i.q)),e.qb(26,49152,null,0,r.E,[e.h,e.k,e.x],{size:[0,"size"],src:[1,"src"]},null),e.Hb(512,null,a.t,a.u,[e.q,e.r,e.k,e.B]),e.qb(28,278528,null,0,a.k,[a.t],{ngClass:[0,"ngClass"]},null),e.Fb(29,{color:0}),(n()(),e.Kb(-1,0,[" \xa0\xa0"])),(n()(),e.rb(31,0,null,0,1,"span",[["class","ion-text-lowercase"]],null,null,null,null,null)),(n()(),e.Kb(32,null,["",""])),(n()(),e.rb(33,0,null,0,8,"ion-col",[["size","4"]],null,null,null,i.cb,i.j)),e.qb(34,49152,null,0,r.v,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.rb(35,0,null,0,6,"ion-button",[["fill","light"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.comments()&&e),e}),i.W,i.d)),e.qb(36,49152,null,0,r.m,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(n()(),e.rb(37,0,null,0,1,"ion-icon",[["size","large"],["src","../../assets/images/comment.svg"]],null,null,null,i.jb,i.q)),e.qb(38,49152,null,0,r.E,[e.h,e.k,e.x],{size:[0,"size"],src:[1,"src"]},null),(n()(),e.Kb(-1,0,[" \xa0\xa0"])),(n()(),e.rb(40,0,null,0,1,"span",[["class","ion-text-lowercase"]],null,null,null,null,null)),(n()(),e.Kb(41,null,["",""])),(n()(),e.rb(42,0,null,0,7,"ion-col",[["size","4"]],null,null,null,i.cb,i.j)),e.qb(43,49152,null,0,r.v,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.rb(44,0,null,0,5,"ion-button",[["fill","light"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.share()&&e),e}),i.W,i.d)),e.qb(45,49152,null,0,r.m,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(n()(),e.rb(46,0,null,0,1,"ion-icon",[["size","large"],["src","../../assets/images/share.svg"],["style","width: 14.5px; padding-right: 0px;"]],null,null,null,i.jb,i.q)),e.qb(47,49152,null,0,r.E,[e.h,e.k,e.x],{size:[0,"size"],src:[1,"src"]},null),(n()(),e.Kb(-1,0,[" \xa0\xa0"])),(n()(),e.rb(49,0,null,0,0,"span",[["class","ion-text-lowercase"]],null,null,null,null,null)),(n()(),e.rb(50,0,null,0,0,"div",[["class","line"]],null,null,null,null,null)),(n()(),e.rb(51,0,null,0,14,"div",[["class","user-comment"]],null,null,null,null,null)),(n()(),e.rb(52,0,null,null,3,"div",[["class","user-avatar"]],null,null,null,null,null)),(n()(),e.rb(53,0,null,null,2,"ion-avatar",[],null,null,null,i.U,i.b)),e.qb(54,49152,null,0,r.i,[e.h,e.k,e.x],null,null),(n()(),e.rb(55,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),e.rb(56,0,null,null,4,"div",[["class","user-name-and-date"]],null,null,null,null,null)),(n()(),e.rb(57,0,null,null,1,"div",[["class","name"]],null,null,null,null,null)),(n()(),e.Kb(58,null,["",""])),(n()(),e.rb(59,0,null,null,1,"div",[["class","date"]],null,null,null,null,null)),(n()(),e.Kb(-1,null,["10 mins ago"])),(n()(),e.rb(61,0,null,null,4,"div",[["class","comment-container"]],null,null,null,null,null)),(n()(),e.rb(62,0,null,null,1,"p",[["class","comment"]],null,null,null,null,null)),(n()(),e.Kb(63,null,[" "," "])),(n()(),e.rb(64,0,null,null,1,"div",[["class","view-all-comments"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.comments()&&e),e}),null,null)),(n()(),e.Kb(-1,null,["View all comments"]))],(function(n,l){var t=l.component;n(l,17,0,l.context.$implicit.Images),n(l,22,0,"4"),n(l,24,0,"light"),n(l,26,0,"large","../../assets/images/heart.svg");var e=n(l,29,0,t.h);n(l,28,0,e),n(l,34,0,"4"),n(l,36,0,"light"),n(l,38,0,"large","../../assets/images/comment.svg"),n(l,43,0,"4"),n(l,45,0,"light"),n(l,47,0,"large","../../assets/images/share.svg")}),(function(n,l){n(l,6,0,e.vb(1,"",l.context.$implicit.logo,"")),n(l,8,0,l.context.$implicit.shop),n(l,12,0,l.context.$implicit.Text),n(l,32,0,l.context.$implicit.likes),n(l,41,0,l.context.$implicit.comments),n(l,55,0,e.vb(1,"",l.context.$implicit.lastComment.image,"")),n(l,58,0,l.context.$implicit.lastComment.user),n(l,63,0,l.context.$implicit.lastComment.Text)}))}function v(n){return e.Mb(0,[(n()(),e.rb(0,0,null,null,18,"ion-header",[["color","primary"]],[[8,"hidden",0]],null,null,i.ib,i.p)),e.qb(1,49152,null,0,r.D,[e.h,e.k,e.x],null,null),(n()(),e.rb(2,0,null,0,16,"ion-toolbar",[["color","primary"]],null,null,null,i.Lb,i.S)),e.qb(3,49152,null,0,r.Eb,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.rb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.X,i.e)),e.qb(5,49152,null,0,r.n,[e.h,e.k,e.x],null,null),(n()(),e.rb(6,0,null,0,1,"ion-menu-button",[["autoHide","false"]],null,null,null,i.qb,i.y)),e.qb(7,49152,null,0,r.T,[e.h,e.k,e.x],{autoHide:[0,"autoHide"]},null),(n()(),e.rb(8,0,null,0,2,"ion-title",[],null,null,null,i.Jb,i.Q)),e.qb(9,49152,null,0,r.Cb,[e.h,e.k,e.x],null,null),(n()(),e.Kb(-1,0,["Soko"])),(n()(),e.gb(16777216,null,0,1,null,O)),e.qb(12,16384,null,0,a.m,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(13,0,null,0,5,"ion-buttons",[["slot","end"],["style","padding-right: 5px;"]],null,null,null,i.X,i.e)),e.qb(14,49152,null,0,r.n,[e.h,e.k,e.x],null,null),(n()(),e.rb(15,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.openPostModal()&&e),e}),i.W,i.d)),e.qb(16,49152,null,0,r.m,[e.h,e.k,e.x],null,null),(n()(),e.rb(17,0,null,0,1,"ion-icon",[["name","add-circle-outline"],["size","large"]],null,null,null,i.jb,i.q)),e.qb(18,49152,null,0,r.E,[e.h,e.k,e.x],{name:[0,"name"],size:[1,"size"]},null),(n()(),e.rb(19,0,null,null,14,"ion-content",[],null,[[null,"ionScroll"]],(function(n,l,t){var e=!0;return"ionScroll"===l&&(e=!1!==n.component.onScroll(t)&&e),e}),i.db,i.k)),e.qb(20,49152,null,0,r.w,[e.h,e.k,e.x],{scrollEvents:[0,"scrollEvents"]},null),(n()(),e.rb(21,0,null,0,12,"div",[["class","page-content"]],null,null,null,null,null)),(n()(),e.rb(22,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.rb(23,0,null,null,7,"div",[],null,null,null,null,null)),(n()(),e.rb(24,0,null,null,6,"ion-searchbar",[["placeholder","Search for a shop "]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var o=!0,u=n.component;return"ionBlur"===l&&(o=!1!==e.Db(n,26)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==e.Db(n,26)._handleInputEvent(t.target)&&o),"ngModelChange"===l&&(o=!1!==(u.searchTerm=t)&&o),"ionChange"===l&&(o=!1!==u.searchShop()&&o),o}),i.ub,i.B)),e.qb(25,49152,null,0,r.mb,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null),e.qb(26,16384,null,0,r.Sb,[e.k],null,null),e.Hb(1024,null,c.l,(function(n){return[n]}),[r.Sb]),e.qb(28,671744,null,0,c.q,[[8,null],[8,null],[8,null],[6,c.l]],{model:[0,"model"]},{update:"ngModelChange"}),e.Hb(2048,null,c.m,null,[c.q]),e.qb(30,16384,null,0,c.n,[[4,c.m]],null,null),(n()(),e.gb(16777216,null,null,1,null,x)),e.qb(32,278528,null,0,a.l,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.rb(33,0,null,null,0,"br",[],null,null,null,null,null))],(function(n,l){var t=l.component;n(l,3,0,"primary"),n(l,7,0,"false"),n(l,12,0,t.showSearch),n(l,18,0,"add-circle-outline","large"),n(l,20,0,!0),n(l,25,0,"Search for a shop "),n(l,28,0,t.searchTerm),n(l,32,0,t.Posts)}),(function(n,l){n(l,0,0,l.component.hiddenHeader),n(l,24,0,e.Db(l,30).ngClassUntouched,e.Db(l,30).ngClassTouched,e.Db(l,30).ngClassPristine,e.Db(l,30).ngClassDirty,e.Db(l,30).ngClassValid,e.Db(l,30).ngClassInvalid,e.Db(l,30).ngClassPending)}))}function k(n){return e.Mb(0,[(n()(),e.rb(0,0,null,null,1,"app-tab3",[],null,null,null,v,_)),e.qb(1,114688,null,0,C,[P.m,r.Kb,r.a,M.a,m.a,b.a],null,null)],(function(n,l){n(l,1,0)}),null)}var w=e.nb("app-tab3",C,k,{},{},[]);t.d(l,"Tab3PageModuleNgFactory",(function(){return q}));var q=e.ob(o,[],(function(n){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[u.a,w]],[3,e.j],e.v]),e.Bb(4608,a.o,a.n,[e.s,[2,a.w]]),e.Bb(4608,r.c,r.c,[e.x,e.g]),e.Bb(4608,r.Kb,r.Kb,[r.c,e.j,e.p]),e.Bb(4608,r.Pb,r.Pb,[r.c,e.j,e.p]),e.Bb(4608,c.v,c.v,[]),e.Bb(1073742336,a.c,a.c,[]),e.Bb(1073742336,r.Gb,r.Gb,[]),e.Bb(1073742336,c.u,c.u,[]),e.Bb(1073742336,c.i,c.i,[]),e.Bb(1073742336,P.p,P.p,[[2,P.u],[2,P.m]]),e.Bb(1073742336,o,o,[]),e.Bb(1024,P.k,(function(){return[[{path:"",component:C}]]}),[])])}))}}]);