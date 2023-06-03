"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[717],{3717:(j,m,a)=>{a.r(m),a.d(m,{ShopModule:()=>B});var C=a(4466),p=a(6895),c=a(5825);class g{constructor(){this.brandId=0,this.typeId=0,this.sort="sort",this.pageNumber=1,this.pageSize=6,this.searchTerm=""}}var t=a(8256),f=a(529),u=a(9646),d=a(4004);class P{constructor(){this.pageIndex=0,this.pageSize=0,this.count=0,this.data=[]}}var S=a(2340);let _=(()=>{class o{constructor(e){this.http=e,this.baseUrl=S.N.apiUrl,this.products=[],this.brands=[],this.types=[],this.pagination=new P,this.shopParams=new g,this.productCache=new Map}getProducts(e){if(!1===e&&(this.productCache=new Map),this.productCache.size>0&&!0===e&&this.productCache.has(Object.values(this.shopParams).join("-")))return this.pagination.data=this.productCache.get(Object.values(this.shopParams).join("-")),(0,u.of)(this.pagination);let n=new f.LE;return 0!==this.shopParams.brandId&&(n=n.append("brandId",this.shopParams.brandId.toString())),0!==this.shopParams.typeId&&(n=n.append("typeId",this.shopParams.typeId.toString())),this.shopParams.searchTerm&&(n=n.append("search",this.shopParams.searchTerm)),n=n.append("sort",this.shopParams.sort),n=n.append("pageIndex",this.shopParams.pageNumber?.toString()??""),n=n.append("pageSize",this.shopParams.pageSize?.toString()??""),this.http.get(this.baseUrl+"products",{observe:"response",params:n}).pipe((0,d.U)(r=>(this.productCache.set(Object.values(this.shopParams).join("-"),r.body?.data),null!==r.body&&(this.pagination=r.body),this.pagination)))}setShopParams(e){this.shopParams=e}getShopParams(){return this.shopParams}getProduct(e){let n;return this.productCache.forEach(r=>{n=r.find(i=>i.id===e)}),n?(0,u.of)(n):this.http.get(this.baseUrl+"products/"+e)}getBrands(){return void 0!==this.brands&&this.brands.length>0?(0,u.of)(this.brands):this.http.get(this.baseUrl+"products/brands").pipe((0,d.U)(e=>(void 0!==this.brands&&(this.brands=e),e)))}getTypes(){return void 0!==this.types&&this.types.length>0?(0,u.of)(this.types):this.http.get(this.baseUrl+"products/types").pipe((0,d.U)(e=>(void 0!==this.types&&(this.types=e),e)))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(f.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function b(o,s){if(1&o&&(t.TgZ(0,"span"),t._uU(1," Showing "),t.TgZ(2,"strong"),t._uU(3),t.qZA(),t._uU(4," of "),t.TgZ(5,"strong"),t._uU(6),t.qZA(),t._uU(7," Results "),t.qZA()),2&o){const e=t.oxw();let n;t.xp6(3),t.AsE(" ",((null!==(n=e.pageNumber)&&void 0!==n?n:1)-1)*(null!==(n=e.pageSize)&&void 0!==n?n:0)+1," - ",(null!==(n=e.pageNumber)&&void 0!==n?n:1)*(null!==(n=e.pageSize)&&void 0!==n?n:0)>e.totalCount?e.totalCount:(null!==(n=e.pageNumber)&&void 0!==n?n:1)*(null!==(n=e.pageSize)&&void 0!==n?n:0)," "),t.xp6(3),t.Oqu(e.totalCount)}}function y(o,s){1&o&&(t.TgZ(0,"span"),t._uU(1," No products found!! "),t.qZA())}let T=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-paging-header"]],inputs:{totalCount:"totalCount",pageNumber:"pageNumber",pageSize:"pageSize"},decls:3,vars:2,consts:[[4,"ngIf"]],template:function(e,n){1&e&&(t.TgZ(0,"header"),t.YNc(1,b,8,3,"span",0),t.YNc(2,y,2,0,"span",0),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",n.totalCount&&n.totalCount>0),t.xp6(1),t.Q6J("ngIf",0===n.totalCount))},dependencies:[p.O5]}),o})();var x=a(2521),l=a(433);let Z=(()=>{class o{constructor(){this.pageChanged=new t.vpe}onPagerChange(e){this.pageChanged.emit(e.page)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-pager"]],inputs:{totalCount:"totalCount",pageSize:"pageSize",pageNumber:"pageNumber"},outputs:{pageChanged:"pageChanged"},decls:1,vars:4,consts:[["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"boundaryLinks","totalItems","ngModel","itemsPerPage","pageChanged"]],template:function(e,n){if(1&e&&(t.TgZ(0,"pagination",0),t.NdJ("pageChanged",function(i){return n.onPagerChange(i)}),t.qZA()),2&e){let r,i;t.Q6J("boundaryLinks",!0)("totalItems",null!==(r=n.totalCount)&&void 0!==r?r:0)("ngModel",n.pageNumber)("itemsPerPage",null!==(i=n.pageSize)&&void 0!==i?i:0)}},dependencies:[x.Qt,l.JJ,l.On]}),o})();var v=a(8607);let A=(()=>{class o{constructor(e){this.basketService=e}addItemToBasket(){this.product&&this.basketService.addItemToBasket(this.product)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(v.v))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-item"]],inputs:{product:"product"},decls:16,vars:8,consts:[[1,"col","h-100","w-100"],[1,"card","h-100","shadow-sm"],[1,"image","position-relative",2,"cursor","pointer"],[1,"img-fluid","bg-secondary",3,"src","alt"],[1,"d-flex","justify-content-center","align-items-center","hover-overlay"],["type","button",1,"btn","btn-sm","btn-primary","me-2",3,"click"],[1,"fa","fa-shopping-cart","me-2"],["type","button",1,"btn","btn-sm","btn-primary",3,"routerLink"],[1,"card-body","d-flex","flex-column","bg-dark","text-light","text-center"],[3,"routerLink"],[1,"text-uppercase"],[1,"mb-2"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"div",4)(5,"button",5),t.NdJ("click",function(){return n.addItemToBasket()}),t._UZ(6,"i",6),t.qZA(),t.TgZ(7,"button",7),t._uU(8," View "),t.qZA()()(),t.TgZ(9,"div",8)(10,"a",9)(11,"h6",10),t._uU(12),t.qZA()(),t.TgZ(13,"span",11),t._uU(14),t.ALo(15,"currency"),t.qZA()()()()),2&e&&(t.xp6(3),t.s9C("src",null==n.product?null:n.product.pictureUrl,t.LSH),t.s9C("alt",null==n.product?null:n.product.name),t.xp6(4),t.MGl("routerLink","/shop/",null==n.product?null:n.product.id,""),t.xp6(3),t.MGl("routerLink","/shop/",null==n.product?null:n.product.id,""),t.xp6(2),t.Oqu(null==n.product?null:n.product.name),t.xp6(2),t.Oqu(t.lcZ(15,6,null==n.product?null:n.product.price)))},dependencies:[c.rH,p.H9],styles:[".btn[_ngcontent-%COMP%]{width:30%;height:40px}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{opacity:1}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{transform:none;opacity:1}.hover-overlay[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;background:rgba(255,255,255,.5);opacity:0;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{z-index:1000;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{transform:translate(-20px)}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type{transform:translate(20px)}"]}),o})();const N=["searchTerm"];function k(o,s){if(1&o&&(t.TgZ(0,"option",21),t._uU(1),t.qZA()),2&o){const e=s.$implicit,n=t.oxw(2);t.Q6J("selected",(null==n.shopParams?null:n.shopParams.sort)===e.value)("value",e.value),t.xp6(1),t.hij(" ",e.name," ")}}function w(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"a",22),t.NdJ("click",function(){const i=t.CHM(e).$implicit,h=t.oxw(2);return t.KtG(h.onBrandSelected(i.id))}),t._uU(1),t.qZA()}if(2&o){const e=s.$implicit,n=t.oxw(2);t.Q6J("ngClass",e.id===(null==n.shopParams?null:n.shopParams.brandId)?"active":""),t.xp6(1),t.hij(" ",null==e?null:e.name," ")}}function M(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"a",23),t.NdJ("click",function(){const i=t.CHM(e).$implicit,h=t.oxw(2);return t.KtG(h.onTypeSelected(i.id))}),t._uU(1),t.qZA()}if(2&o){const e=s.$implicit,n=t.oxw(2);t.ekj("active",e.id===(null==n.shopParams?null:n.shopParams.typeId)),t.xp6(1),t.hij(" ",null==e?null:e.name," ")}}function O(o,s){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",12)(2,"h5",13),t._uU(3,"Sort Products"),t.qZA(),t.TgZ(4,"select",14,15),t.NdJ("change",function(){t.CHM(e);const r=t.MAs(5),i=t.oxw();return t.KtG(i.onSort(r.value))}),t.YNc(6,k,2,3,"option",16),t.qZA()(),t.TgZ(7,"h5",13),t._uU(8,"Brands"),t.qZA(),t.TgZ(9,"div",17),t.YNc(10,w,2,2,"a",18),t.qZA(),t.TgZ(11,"h5",19),t._uU(12,"Types"),t.qZA(),t.TgZ(13,"div",17),t.YNc(14,M,2,3,"a",20),t.qZA(),t.BQk()}if(2&o){const e=t.oxw();t.xp6(6),t.Q6J("ngForOf",e.sortOptions),t.xp6(4),t.Q6J("ngForOf",e.brands),t.xp6(4),t.Q6J("ngForOf",e.types)}}function I(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",24)(1,"input",25,26),t.NdJ("keyup.enter",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.onSearch())}),t.qZA(),t.TgZ(3,"button",27),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.onSearch())}),t._uU(4," Search "),t.qZA(),t.TgZ(5,"button",28),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.onReset())}),t._uU(6," Reset "),t.qZA()()}}function U(o,s){if(1&o&&(t.TgZ(0,"div"),t._UZ(1,"app-product-item",29),t.qZA()),2&o){const e=s.$implicit;t.xp6(1),t.Q6J("product",e)}}function q(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",30)(1,"app-pager",31),t.NdJ("pageChanged",function(r){t.CHM(e);const i=t.oxw();return t.KtG(i.onPageChange(r))}),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("totalCount",e.totalCount)("pageSize",null==e.shopParams?null:e.shopParams.pageSize)("pageNumber",null==e.shopParams?null:e.shopParams.pageNumber)}}let J=(()=>{class o{constructor(e){this.shopService=e,this.sortOptions=[{name:"Alphabetical",value:"name"},{name:"Low Price",value:"priceAsc"},{name:"High Price",value:"priceDesc"}],this.shopParams=this.shopService.getShopParams()}ngOnInit(){this.getProducts(!0),this.getBrands(),this.getTypes()}getProducts(e=!1){this.shopService.getProducts(e).subscribe({next:n=>{this.products=n?.data,this.totalCount=n?.count},error:n=>{console.log(n)}})}getProduct(e){this.shopService.getProduct(e).subscribe({})}getBrands(){this.shopService.getBrands().subscribe({next:e=>{this.brands=[{id:0,name:"All"},...e]},error:e=>{console.log(e)}})}getTypes(){this.shopService.getTypes().subscribe({next:e=>{this.types=[{id:0,name:"All"},...e]},error:e=>{console.log(e)}})}onBrandSelected(e){const n=this.shopService.getShopParams();n.brandId=e,n.pageNumber=1,this.shopService.setShopParams(n),this.getProducts()}onTypeSelected(e){const n=this.shopService.getShopParams();n.typeId=e,n.pageNumber=1,this.shopService.setShopParams(n),this.getProducts()}onSort(e){const n=this.shopService.getShopParams();n.sort=e,this.shopService.setShopParams(n),this.getProducts()}onPageChange(e){const n=this.shopService.getShopParams();n.pageNumber!==e&&(n.pageNumber=e,this.shopService.setShopParams(n),this.getProducts(!0))}onSearch(){const e=this.shopService.getShopParams();e.searchTerm=this.searchTerm?.nativeElement.value,e.pageNumber=1,this.shopService.setShopParams(e),this.getProducts()}onReset(){void 0!==this.searchTerm?.nativeElement.value&&(this.searchTerm.nativeElement.value=""),this.shopParams=new g,this.shopService.setShopParams(this.shopParams),this.getProducts()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-shop"]],viewQuery:function(e,n){if(1&e&&t.Gf(N,5),2&e){let r;t.iGM(r=t.CRH())&&(n.searchTerm=r.first)}},decls:12,vars:7,consts:[["id","top_sale"],[1,"container","py-5"],[1,"row"],[1,"col-3"],[4,"ngIf"],[1,"col-9"],[1,"d-flex","justify-content-between","align-items-center","mb-2"],[3,"totalCount","pageNumber","pageSize"],["class","mt-2 d-flex justify-content-around",4,"ngIf"],[1,"row","row-cols-1","row-cols-sm-2","row-cols-md-3","g-3"],[4,"ngFor","ngForOf"],["class","d-flex justify-content-center mt-4",4,"ngIf"],[1,"my-3"],[1,"text-warning"],[1,"form-select",3,"change"],["sortTerm",""],[3,"selected","value",4,"ngFor","ngForOf"],[1,"list-group","my-3"],["style","cursor: pointer","class","list-group-item list-group-item-action","aria-current","true",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"text-warning","mt-5"],["style","cursor: pointer","class","list-group-item list-group-item-action","aria-current","true",3,"active","click",4,"ngFor","ngForOf"],[3,"selected","value"],["aria-current","true",1,"list-group-item","list-group-item-action",2,"cursor","pointer",3,"ngClass","click"],["aria-current","true",1,"list-group-item","list-group-item-action",2,"cursor","pointer",3,"click"],[1,"mt-2","d-flex","justify-content-around"],["type","text","placeholder","Search",1,"form-control",2,"width","300px","height","50px",3,"keyup.enter"],["searchTerm",""],[1,"btn","btn-outline-primary","mx-2",3,"click"],[1,"btn","btn-outline-success",3,"click"],[3,"product"],[1,"d-flex","justify-content-center","mt-4"],[3,"totalCount","pageSize","pageNumber","pageChanged"]],template:function(e,n){if(1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"section",3),t.YNc(4,O,15,3,"ng-container",4),t.qZA(),t.TgZ(5,"section",5)(6,"div",6),t._UZ(7,"app-paging-header",7),t.YNc(8,I,7,0,"div",8),t.qZA(),t.TgZ(9,"div",9),t.YNc(10,U,2,1,"div",10),t.qZA(),t.YNc(11,q,2,3,"div",11),t.qZA()()()()),2&e){let r;t.xp6(4),t.Q6J("ngIf",n.types&&n.brands),t.xp6(3),t.Q6J("totalCount",n.totalCount)("pageNumber",null==n.shopParams?null:n.shopParams.pageNumber)("pageSize",null==n.shopParams?null:n.shopParams.pageSize),t.xp6(1),t.Q6J("ngIf",n.products),t.xp6(2),t.Q6J("ngForOf",n.products),t.xp6(1),t.Q6J("ngIf",null!==(r=n.totalCount)&&void 0!==r&&r)}},dependencies:[p.mk,p.sg,p.O5,T,Z,l.YN,l.Kr,A],styles:[".list-group-item[_ngcontent-%COMP%]{cursor:pointer;border:none;padding:10px 20px;font-size:1.1em}.list-group-item[_ngcontent-%COMP%]:focus{outline:none}.list-group-item.active[_ngcontent-%COMP%]{border-radius:10px}.list-group-item[_ngcontent-%COMP%]:not(.active):hover{color:#fff;background-color:#0d6dfdbb;border-radius:10px}"]}),o})();var z=a(8909);function F(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",1)(1,"div",2),t._UZ(2,"img",3),t.qZA(),t.TgZ(3,"div",4)(4,"h3"),t._uU(5),t.qZA(),t.TgZ(6,"p",5),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"div",6)(10,"div",7)(11,"i",8),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.dncrementQuantity())}),t.qZA(),t.TgZ(12,"span",9),t._uU(13),t.qZA(),t.TgZ(14,"i",10),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.incrementQuantity())}),t.qZA()(),t.TgZ(15,"button",11),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.addItemToBasket())}),t._uU(16," Add to Cart "),t.qZA()(),t.TgZ(17,"div",12)(18,"h4"),t._uU(19,"Description"),t.qZA(),t.TgZ(20,"p"),t._uU(21),t.qZA()()()()}if(2&o){const e=t.oxw();t.xp6(2),t.s9C("src",e.product.pictureUrl,t.LSH),t.s9C("alt",e.product.name),t.xp6(3),t.Oqu(e.product.name),t.xp6(2),t.Oqu(t.lcZ(8,6,e.product.price)),t.xp6(6),t.Oqu(e.quantity),t.xp6(8),t.Oqu(e.product.description)}}const Q=[{path:"",component:J},{path:":id",component:(()=>{class o{constructor(e,n,r,i){this.shopService=e,this.activatedRoute=n,this.bcService=r,this.basketService=i,this.quantity=1,this.bcService.set("@productDetails"," ")}ngOnInit(){this.loadProduct()}addItemToBasket(){this.product&&this.basketService.addItemToBasket(this.product,this.quantity)}incrementQuantity(){this.quantity++}dncrementQuantity(){this.quantity>1&&this.quantity--}loadProduct(){const e=this.activatedRoute.snapshot.paramMap?.get("id");e&&this.shopService.getProduct(+e).subscribe({next:n=>{this.product=n,this.bcService.set("@productDetails",n.name)},error:n=>{console.log(n)}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_),t.Y36(c.gz),t.Y36(z.pm),t.Y36(v.v))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-details"]],decls:1,vars:1,consts:[["class","row mt-3",4,"ngIf"],[1,"row","mt-3"],[1,"col-6"],[1,"img-fluid","w-100",3,"src","alt"],[1,"col-6","pt-5"],[2,"font-size","2em"],[1,"d-flex","justify-content-start","align-content-center","text-center"],[1,"pt-2"],[1,"fa","fa-minus-circle","text-warning","me-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"fw-bold",2,"font-size","1.5em"],[1,"fa","fa-plus-circle","text-warning","mx-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"btn","btn-outline-primary","btn-lg","ms-4",3,"click"],[1,"mt-3","pe-5"]],template:function(e,n){1&e&&t.YNc(0,F,22,8,"div",0),2&e&&t.Q6J("ngIf",n.product)},dependencies:[p.O5,p.H9]}),o})(),data:{breadcrumb:{alias:"productDetails"}}}];let H=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.Bz.forChild(Q),c.Bz]}),o})(),B=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.ez,C.m,H]}),o})()}}]);