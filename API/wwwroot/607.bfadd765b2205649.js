"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[607],{7894:(b,c,d)=>{d.r(c),d.d(c,{OrdersModule:()=>T});var i=d(6895),s=d(6811),e=d(1571),l=d(2340),a=d(529);let u=(()=>{class t{constructor(r){this.http=r,this.baseUrl=l.N.apiUrl}getOrdersForUser(){return this.http.get(this.baseUrl+"orders")}getOrderDetailed(r){return this.http.get(this.baseUrl+"orders/"+r)}}return t.\u0275fac=function(r){return new(r||t)(e.LFG(a.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function p(t,o){if(1&t&&(e.TgZ(0,"tr",5)(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.ALo(8,"currency"),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA()()),2&t){const r=o.$implicit;e.MGl("routerLink","/orders/",r.id,""),e.xp6(2),e.hij("# ",r.id,""),e.xp6(2),e.Oqu(e.xi3(5,5,r.orderDate,"medium")),e.xp6(3),e.Oqu(e.lcZ(8,8,r.total)),e.xp6(3),e.Oqu(r.status)}}let g=(()=>{class t{constructor(r){this.ordersService=r,this.orders=[]}ngOnInit(){this.getOrders()}getOrders(){this.ordersService.getOrdersForUser().subscribe({next:r=>{this.orders=r},error:r=>{console.log(r)}})}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(u))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-orders"]],decls:16,vars:1,consts:[[1,"container","mt-4"],[1,"row"],[1,"col-12"],[1,"table","table-hover",2,"cursor","pointer"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(r,n){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"table",3)(4,"thead")(5,"tr")(6,"th"),e._uU(7,"Order"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Date"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Total"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Status"),e.qZA()()(),e.TgZ(14,"tbody"),e.YNc(15,p,11,10,"tr",4),e.qZA()()()()()),2&r&&(e.xp6(15),e.Q6J("ngForOf",n.orders))},dependencies:[i.sg,s.rH,i.H9,i.uU]}),t})();var m=d(8909);function Z(t,o){if(1&t&&(e.TgZ(0,"tr")(1,"th",15)(2,"div",16),e._UZ(3,"img",17),e.TgZ(4,"div",18)(5,"h5",19),e._uU(6),e.qZA()()()(),e.TgZ(7,"td",20)(8,"strong"),e._uU(9),e.ALo(10,"currency"),e.qZA()(),e.TgZ(11,"td",20)(12,"span",21),e._uU(13),e.qZA()(),e.TgZ(14,"td",20)(15,"strong"),e._uU(16),e.ALo(17,"currency"),e.qZA()()()),2&t){const r=o.$implicit;e.xp6(3),e.s9C("src",r.pictureUrl,e.LSH),e.s9C("alt",r.productName),e.xp6(3),e.hij(" ",r.productName," "),e.xp6(3),e.Oqu(e.lcZ(10,6,r.price)),e.xp6(4),e.Oqu(r.quantity),e.xp6(3),e.Oqu(e.lcZ(17,8,r.price*r.quantity))}}function h(t,o){if(1&t&&(e.TgZ(0,"div",2)(1,"div",3)(2,"div")(3,"div",4)(4,"table",5)(5,"thead")(6,"tr")(7,"th",6)(8,"div",7),e._uU(9,"Product"),e.qZA()(),e.TgZ(10,"th",6)(11,"div",7),e._uU(12,"Price"),e.qZA()(),e.TgZ(13,"th",6)(14,"div",7),e._uU(15,"Quantity"),e.qZA()(),e.TgZ(16,"th",6)(17,"div",7),e._uU(18,"Total"),e.qZA()()()(),e.TgZ(19,"tbody"),e.YNc(20,Z,18,10,"tr",8),e.qZA()()()()(),e.TgZ(21,"div",9)(22,"div",10),e._uU(23,"Order Summary"),e.qZA(),e.TgZ(24,"div",11)(25,"ul",12)(26,"li",13)(27,"strong",14),e._uU(28,"Order Subtotal"),e.qZA(),e.TgZ(29,"strong"),e._uU(30),e.ALo(31,"currency"),e.qZA()(),e.TgZ(32,"li",13)(33,"strong",14),e._uU(34,"Shipping and handling"),e.qZA(),e.TgZ(35,"strong"),e._uU(36),e.ALo(37,"currency"),e.qZA()(),e.TgZ(38,"li",13)(39,"strong",14),e._uU(40,"Total"),e.qZA(),e.TgZ(41,"strong"),e._uU(42),e.ALo(43,"currency"),e.qZA()()()()()()),2&t){const r=e.oxw();e.xp6(20),e.Q6J("ngForOf",r.order.orderItems),e.xp6(10),e.Oqu(e.lcZ(31,4,r.order.subTotal)),e.xp6(6),e.Oqu(e.lcZ(37,6,r.order.shippingPrice)),e.xp6(6),e.Oqu(e.lcZ(43,8,r.order.total))}}const O=[{path:"",component:g},{path:":id",component:(()=>{class t{constructor(r,n,A){this.route=r,this.breadcrumbService=n,this.ordersService=A,this.breadcrumbService.set("@OrderDetailed","")}ngOnInit(){const r=this.route.snapshot.paramMap?.get("id");r&&this.ordersService.getOrderDetailed(+r).subscribe({next:n=>{this.order=n,this.breadcrumbService.set("@OrderDetailed",`Order# ${n.id} - ${n.status}`)},error:n=>{console.log(n)}})}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(s.gz),e.Y36(m.pm),e.Y36(u))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-order-detailed"]],decls:2,vars:1,consts:[[1,"container","mt-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-8"],[1,"table-responsive"],[1,"table"],["scope","col",1,"border-0","bg-light"],[1,"p-1","test-uppercase"],[4,"ngFor","ngForOf"],[1,"col-4"],[1,"bg-light","px-4","py-3","text-uppercase","fw-bold"],[1,"p-4"],[1,"list-unstyled","mb-1"],[1,"d-flex","justify-content-between","py-3","border-bottom"],[1,"text-muted"],["scope","row"],[1,"p-2"],[1,"img-fluid",2,"max-height","50px",3,"src","alt"],[1,"ms-3","d-inline-block","align-middle"],[1,"mb-0"],[1,"align-middle"],[1,"fw-bold","px-2"]],template:function(r,n){1&r&&(e.TgZ(0,"div",0),e.YNc(1,h,44,10,"div",1),e.qZA()),2&r&&(e.xp6(1),e.Q6J("ngIf",n.order))},dependencies:[i.sg,i.O5,i.H9]}),t})(),data:{breadcrumb:{alias:"OrderDetailed"}}}];let v=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Bz.forChild(O),s.Bz]}),t})();var f=d(4466);let T=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.ez,v,f.m]}),t})()}}]);