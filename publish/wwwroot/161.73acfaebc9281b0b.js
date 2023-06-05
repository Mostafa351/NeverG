"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[161],{4161:(W,k,i)=>{i.r(k),i.d(k,{CheckoutModule:()=>X});var x=i(4466),u=i(6895),m=i(5825),F=i(9751),s=i(433),e=i(8256),b=i(9479),f=i(8607),T=i(9281),d=i(479);function _(r,n){if(1&r){const t=e.EpF();e.TgZ(0,"li",4)(1,"button",5),e.NdJ("click",function(){const a=e.CHM(t).index,l=e.oxw();return e.KtG(l.onClick(a))}),e._uU(2),e.qZA()()}if(2&r){const t=n.$implicit,o=n.index,c=e.oxw();e.xp6(1),e.ekj("active",c.selectedIndex===o),e.Q6J("disabled",!0),e.xp6(1),e.hij(" ",t.label," ")}}function S(r,n){if(1&r&&(e.TgZ(0,"div"),e.GkF(1,6),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",null==t.selected?null:t.selected.content)}}let A=(()=>{class r extends d.B8{constructor(){super(...arguments),this.linearModeSelected=!1}ngOnInit(){this.linear=this.linearModeSelected}onClick(t){this.selectedIndex=t}}return r.\u0275fac=function(){let n;return function(o){return(n||(n=e.n5z(r)))(o||r)}}(),r.\u0275cmp=e.Xpm({type:r,selectors:[["app-stepper"]],inputs:{linearModeSelected:"linearModeSelected"},features:[e._Bn([{provide:d.B8,useExisting:r}]),e.qOj],decls:4,vars:2,consts:[[1,"container"],[1,"nav","nav-tabs","bg-body","nav-justified"],["class","nav-item",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"nav-item"],[1,"nav-link","py-3","text-uppercase","fw-bold","btn-block",3,"disabled","click"],[3,"ngTemplateOutlet"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"ul",1),e.YNc(2,_,3,4,"li",2),e.qZA(),e.YNc(3,S,2,1,"div",3),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngForOf",o.steps),e.xp6(1),e.Q6J("ngIf",null==o.selected?null:o.selected.content))},dependencies:[u.sg,u.O5,u.tP]}),r})();var v=i(7185),C=i(4015);let U=(()=>{class r{constructor(t,o){this.accountService=t,this.toaster=o}ngOnInit(){}saveUserAddress(){this.accountService.updateUserAddress(this.checkoutForm?.get("addressForm")?.value).subscribe({next:t=>{this.toaster.success("Address Saved Successfully"),this.checkoutForm?.get("addressForm")?.reset(t)},error:t=>{this.toaster.error(t.message),console.log(t)}})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(b.B),e.Y36(v._W))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-checkout-address"]],inputs:{checkoutForm:"checkoutForm"},decls:26,vars:9,consts:[[1,"mt-4",3,"formGroup"],[1,"d-flex","justify-content-between","align-items-center"],[1,"btn","btn-outline-primary","mb-3",3,"disabled","click"],["formGroupName","addressForm",1,"row"],[1,"form-group","col-6","mb-2"],["formControlName","firstName",3,"label"],["formControlName","lastName",3,"label"],["formControlName","street",3,"label"],["formControlName","city",3,"label"],["formControlName","state",3,"label"],["formControlName","zipCode",3,"label"],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mt-3"],["routerLink","/basket",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],["cdkStepperNext","",1,"btn","btn-primary",3,"disabled"],[1,"fa","fa-angle-right"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Shipping Address"),e.qZA(),e.TgZ(4,"button",2),e.NdJ("click",function(){return o.saveUserAddress()}),e._uU(5," Save as default address "),e.qZA()(),e.TgZ(6,"div",3)(7,"div",4),e._UZ(8,"app-text-input",5),e.qZA(),e.TgZ(9,"div",4),e._UZ(10,"app-text-input",6),e.qZA(),e.TgZ(11,"div",4),e._UZ(12,"app-text-input",7),e.qZA(),e.TgZ(13,"div",4),e._UZ(14,"app-text-input",8),e.qZA(),e.TgZ(15,"div",4),e._UZ(16,"app-text-input",9),e.qZA(),e.TgZ(17,"div",4),e._UZ(18,"app-text-input",10),e.qZA()()(),e.TgZ(19,"div",11)(20,"button",12),e._UZ(21,"i",13),e._uU(22," Back To Basket "),e.qZA(),e.TgZ(23,"button",14),e._uU(24," Go To Delivery "),e._UZ(25,"i",15),e.qZA()()),2&t){let c,a;e.Q6J("formGroup",o.checkoutForm),e.xp6(4),e.Q6J("disabled",!(null!=o.checkoutForm&&null!=(c=o.checkoutForm.get("addressForm"))&&c.valid&&null!=o.checkoutForm&&null!=(c=o.checkoutForm.get("addressForm"))&&c.dirty)),e.xp6(4),e.Q6J("label","First Name"),e.xp6(2),e.Q6J("label","Last Name"),e.xp6(2),e.Q6J("label","Street"),e.xp6(2),e.Q6J("label","City"),e.xp6(2),e.Q6J("label","State"),e.xp6(2),e.Q6J("label","Zip code"),e.xp6(5),e.Q6J("disabled",null==o.checkoutForm||null==(a=o.checkoutForm.get("addressForm"))?null:a.invalid)}},dependencies:[m.rH,s.JJ,s.JL,s.sg,s.u,s.x0,C.t,d.st]}),r})();var N=i(4004),J=i(2340),q=i(529);let y=(()=>{class r{constructor(t){this.http=t,this.baseUrl=J.N.apiUrl}creatOrder(t){return this.http.post(this.baseUrl+"orders",t)}getDeliveryMethods(){return this.http.get(this.baseUrl+"orders/deliveryMethods").pipe((0,N.U)(t=>t.sort((o,c)=>c.price-o.price)))}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(q.eN))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function w(r,n){if(1&r){const t=e.EpF();e.TgZ(0,"div",9)(1,"input",10),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.setShippingPrice(a))}),e.qZA(),e.TgZ(2,"label",11)(3,"strong"),e._uU(4),e.ALo(5,"currency"),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"span",12),e._uU(8),e.qZA()(),e._UZ(9,"hr"),e.qZA()}if(2&r){const t=n.$implicit;e.xp6(1),e.s9C("id",t.id),e.s9C("value",t.id),e.xp6(1),e.s9C("for",t.id),e.xp6(2),e.AsE("",t.shortName," - ",e.lcZ(5,6,t.price)," "),e.xp6(4),e.Oqu(t.description)}}let M=(()=>{class r{constructor(t,o){this.checkoutService=t,this.basketService=o,this.deliveryMethods=[]}ngOnInit(){this.checkoutService.getDeliveryMethods().subscribe({next:t=>{this.deliveryMethods=t},error:t=>{console.log(t)}})}setShippingPrice(t){this.basketService.setShippingPrice(t)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(y),e.Y36(f.v))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-checkout-delivery"]],inputs:{checkoutForm:"checkoutForm"},decls:12,vars:3,consts:[[1,"mt-4",3,"formGroup"],[1,"mb-3"],["formGroupName","deliveryForm",1,"row","ms-1"],["class","col-6 form-group",4,"ngFor","ngForOf"],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mt-3"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],["cdkStepperNext","",1,"btn","btn-primary",3,"disabled"],[1,"fa","fa-angle-right"],[1,"col-6","form-group"],["type","radio","formControlName","deliveryMethod",1,"custom-control-input","me-1",3,"id","value","click"],[1,"custom-control-input",3,"for"],[1,"label-description"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"h4",1),e._uU(2,"Choose Delivery Method"),e.qZA(),e.TgZ(3,"div",2),e.YNc(4,w,10,8,"div",3),e.qZA()(),e.TgZ(5,"div",4)(6,"button",5),e._UZ(7,"i",6),e._uU(8," Back To Address "),e.qZA(),e.TgZ(9,"button",7),e._uU(10," Go To Review "),e._UZ(11,"i",8),e.qZA()()),2&t){let c;e.Q6J("formGroup",o.checkoutForm),e.xp6(4),e.Q6J("ngForOf",o.deliveryMethods),e.xp6(5),e.Q6J("disabled",null==o.checkoutForm||null==(c=o.checkoutForm.get("deliveryForm"))?null:c.invalid)}},dependencies:[u.sg,s.Fj,s._,s.JJ,s.JL,s.sg,s.u,s.x0,d.st,d.po,u.H9]}),r})();var Q=i(3449);let E=(()=>{class r{constructor(t,o){this.basketService=t,this.toaster=o,this.basket$=null}ngOnInit(){null!==this.basketService.basket$&&(this.basket$=this.basketService.basket$)}creatPaymentIntent(){return this.basketService.creatPaymentIntent().subscribe({next:t=>{this.appStepper?.next()},error:t=>{console.log(t)}})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(f.v),e.Y36(v._W))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-checkout-review"]],inputs:{appStepper:"appStepper"},decls:9,vars:1,consts:[[1,"mt-4"],[3,"isBasket"],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mt-3"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],[1,"btn","btn-primary",3,"click"],[1,"fa","fa-angle-right"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-basket-summary",1),e.qZA(),e.TgZ(2,"div",2)(3,"button",3),e._UZ(4,"i",4),e._uU(5," Back To Delivery "),e.qZA(),e.TgZ(6,"button",5),e.NdJ("click",function(){return o.creatPaymentIntent()}),e._uU(7," Go To Payment "),e._UZ(8,"i",6),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("isBasket",!1))},dependencies:[d.po,Q.b]}),r})();function Z(r,n,t,o,c,a,l){try{var p=r[a](l),h=p.value}catch(z){return void t(z)}p.done?n(h):Promise.resolve(h).then(o,c)}function g(r){return function(){var n=this,t=arguments;return new Promise(function(o,c){var a=r.apply(n,t);function l(h){Z(a,o,c,l,p,"next",h)}function p(h){Z(a,o,c,l,p,"throw",h)}l(void 0)})}}var I=i(6805);const G=["cardNumber"],P=["cardExpiry"],Y=["cardCvc"];function V(r,n){if(1&r&&(e.ynx(0),e.TgZ(1,"span",17),e._uU(2),e.qZA(),e.BQk()),2&r){const t=e.oxw();e.xp6(2),e.Oqu(t.cardErrors)}}function B(r,n){1&r&&e._UZ(0,"i",18)}let L=(()=>{class r{constructor(t,o,c,a){this.basketService=t,this.checkoutService=o,this.toaster=c,this.router=a,this.cardHandler=this.onChange.bind(this),this.loading=!1,this.cardNumberValid=!1,this.cardExpiryValid=!1,this.cardCvcValid=!1}ngAfterViewInit(){this.stripe=Stripe("pk_test_51NAwf0JGwTJOoZ05IrvWm1d99yeD4Bsw5JiL64ZdVdcU9MSgP9r9Wd4GNgQqYeL0NfLRxD3qvHtbuWdZ1ruYdOof00vY5gxXK2");const t=this.stripe.elements();this.cardNumber=t.create("cardNumber"),this.cardNumber.mount(this.cardNumberElement?.nativeElement),this.cardNumber.addEventListener("change",this.cardHandler),this.cardExpiry=t.create("cardExpiry"),this.cardExpiry.mount(this.cardExpiryElement?.nativeElement),this.cardExpiry.addEventListener("change",this.cardHandler),this.cardCvc=t.create("cardCvc"),this.cardCvc.mount(this.cardCvcElement?.nativeElement),this.cardCvc.addEventListener("change",this.cardHandler)}ngOnDestroy(){this.cardNumber.destroy(),this.cardExpiry.destroy(),this.cardCvc.destroy()}onChange(t){switch(this.cardErrors=void 0!==t.error?t.error.message:null,t.elementType){case"cardNumber":this.cardNumberValid=t.complete;break;case"cardExpiry":this.cardExpiryValid=t.complete;break;case"cardCvc":this.cardCvcValid=t.complete}}submitOrder(){var t=this;return g(function*(){t.loading=!0;const o=t.basketService.getCurrentBasketValue();if(o)try{const c=yield t.createOrder(o),a=yield t.confirmPaymentwithStripe(o);a.paymentIntent?(t.basketService.deleteBasket(o),t.router.navigate(["checkout/success"],{state:c})):t.toaster.error(a.error.message),t.loading=!1}catch(c){console.log(c),t.loading=!1}})()}confirmPaymentwithStripe(t){var o=this;return g(function*(){return o.stripe.confirmCardPayment(t.clientSecret,{payment_method:{card:o.cardNumber,billing_details:{name:o.checkoutForm?.get("paymentForm")?.get("nameOnCard")?.value}}})})()}createOrder(t){var o=this;return g(function*(){const c=o.getOrderToCreate(t);return function O(r,n){const t="object"==typeof n;return new Promise((o,c)=>{let l,a=!1;r.subscribe({next:p=>{l=p,a=!0},error:c,complete:()=>{a?o(l):t?o(n.defaultValue):c(new I.K)}})})}(o.checkoutService.creatOrder(c))})()}getOrderToCreate(t){return{basketId:t.id,deliveryMethodId:+this.checkoutForm?.get("deliveryForm")?.get("deliveryMethod")?.value,shipToAddress:this.checkoutForm?.get("addressForm")?.value}}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(f.v),e.Y36(y),e.Y36(v._W),e.Y36(m.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-checkout-payment"]],viewQuery:function(t,o){if(1&t&&(e.Gf(G,7),e.Gf(P,7),e.Gf(Y,7)),2&t){let c;e.iGM(c=e.CRH())&&(o.cardNumberElement=c.first),e.iGM(c=e.CRH())&&(o.cardExpiryElement=c.first),e.iGM(c=e.CRH())&&(o.cardCvcElement=c.first)}},inputs:{checkoutForm:"checkoutForm"},decls:22,vars:5,consts:[[1,"mt-4",3,"formGroup"],[1,"row"],["formGroupName","paymentForm",1,"form-group","col-12","mb-2"],["formControlName","nameOnCard",3,"label"],[1,"form-group","col-6"],[1,"form-control","py-3"],["cardNumber",""],[4,"ngIf"],[1,"form-group","col-3"],["cardExpiry",""],["cardCvc",""],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mt-3"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],[1,"btn","btn-primary",3,"disabled","click"],[1,"fa","fa-angle-right"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"text-danger"],[1,"fa","fa-spinner","fa-spin"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"app-text-input",3),e.qZA(),e.TgZ(4,"div",4),e._UZ(5,"div",5,6),e.YNc(7,V,3,1,"ng-container",7),e.qZA(),e.TgZ(8,"div",8),e._UZ(9,"div",5,9),e.qZA(),e.TgZ(11,"div",8),e._UZ(12,"div",5,10),e.qZA()()(),e.TgZ(14,"div",11)(15,"button",12),e._UZ(16,"i",13),e._uU(17," Back To Reviw "),e.qZA(),e.TgZ(18,"button",14),e.NdJ("click",function(){return o.submitOrder()}),e._uU(19," Submit Order "),e._UZ(20,"i",15),e.YNc(21,B,1,0,"i",16),e.qZA()()),2&t&&(e.Q6J("formGroup",o.checkoutForm),e.xp6(3),e.Q6J("label","Name On Card"),e.xp6(4),e.Q6J("ngIf",o.cardErrors),e.xp6(11),e.Q6J("disabled",o.loading||o.checkoutForm.get("paymentForm").invalid||!o.cardNumberValid||!o.cardExpiryValid||!o.cardCvcValid),e.xp6(3),e.Q6J("ngIf",o.loading))},dependencies:[u.O5,s.JJ,s.JL,s.sg,s.u,s.x0,C.t,d.po]}),r})();function R(r,n){if(1&r&&(e.TgZ(0,"button",5),e._uU(1," View your order "),e.qZA()),2&r){const t=e.oxw();e.MGl("routerLink","/orders/",t.order.id,"")}}function H(r,n){1&r&&(e.TgZ(0,"button",6),e._uU(1," View your orders "),e.qZA())}const j=[{path:"",component:(()=>{class r{constructor(t,o,c){this.fb=t,this.accountService=o,this.basketService=c,this.basketTotals$=new F.y}ngOnInit(){this.createCheckoutForm(),this.getAddressFormValues(),this.getDeliveryMethodValue(),this.basketTotals$=this.basketService.basketTotal$}createCheckoutForm(){this.checkoutForm=this.fb.group({addressForm:this.fb.group({firstName:[null,s.kI.required],lastName:[null,s.kI.required],street:[null,s.kI.required],city:[null,s.kI.required],state:[null,s.kI.required],zipCode:[null,s.kI.required]}),deliveryForm:this.fb.group({deliveryMethod:[null,s.kI.required]}),paymentForm:this.fb.group({nameOnCard:[null,s.kI.required]})})}getAddressFormValues(){this.accountService.getUserAddress().subscribe({next:t=>{t&&this.checkoutForm?.get("addressForm")?.patchValue(t)},error:t=>{console.log(t)}})}getDeliveryMethodValue(){const t=this.basketService.getCurrentBasketValue();null!==t?.deliveryMethodId&&this.checkoutForm?.get("deliveryForm")?.get("deliveryMethod")?.patchValue(t?.deliveryMethodId?.toString())}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(s.qu),e.Y36(b.B),e.Y36(f.v))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-checkout"]],decls:15,vars:11,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-8"],[3,"linearModeSelected"],["appStepper",""],[3,"label","completed"],[3,"checkoutForm"],[3,"label"],[3,"appStepper"],[1,"col-4"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"app-stepper",3,4)(5,"cdk-step",5),e._UZ(6,"app-checkout-address",6),e.qZA(),e.TgZ(7,"cdk-step",5),e._UZ(8,"app-checkout-delivery",6),e.qZA(),e.TgZ(9,"cdk-step",7),e._UZ(10,"app-checkout-review",8),e.qZA(),e.TgZ(11,"cdk-step",7),e._UZ(12,"app-checkout-payment",6),e.qZA()()(),e.TgZ(13,"div",9),e._UZ(14,"app-order-totals"),e.qZA()()()),2&t){const c=e.MAs(4);e.xp6(3),e.Q6J("linearModeSelected",!0),e.xp6(2),e.Q6J("label","Address")("completed",o.checkoutForm.get("addressForm").valid),e.xp6(1),e.Q6J("checkoutForm",o.checkoutForm),e.xp6(1),e.Q6J("label","Delivery Method")("completed",o.checkoutForm.get("deliveryForm").valid),e.xp6(1),e.Q6J("checkoutForm",o.checkoutForm),e.xp6(1),e.Q6J("label","Review"),e.xp6(1),e.Q6J("appStepper",c),e.xp6(1),e.Q6J("label","Payment"),e.xp6(1),e.Q6J("checkoutForm",o.checkoutForm)}},dependencies:[T.S,d.be,A,U,M,E,L]}),r})()},{path:"success",component:(()=>{class r{constructor(t){this.router=t;const o=this.router.getCurrentNavigation(),c=o&&o.extras&&o.extras.state;c&&(this.order=c)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(m.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-checkout-success"]],decls:9,vars:2,consts:[[1,"container","mt-4"],[1,"fa","fa-check-circle","fa-4x",2,"color","green"],[1,"mb-4"],["class","btn btn-outline-success",3,"routerLink",4,"ngIf"],["routerLink","/orders","class","btn btn-outline-success",4,"ngIf"],[1,"btn","btn-outline-success",3,"routerLink"],["routerLink","/orders",1,"btn","btn-outline-success"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div"),e._UZ(2,"i",1),e.qZA(),e.TgZ(3,"h2"),e._uU(4,"Thank you. Your Order is Confirmed"),e.qZA(),e.TgZ(5,"p",2),e._uU(6,"Note: your order not shipped yet"),e.qZA(),e.YNc(7,R,2,1,"button",3),e.YNc(8,H,2,0,"button",4),e.qZA()),2&t&&(e.xp6(7),e.Q6J("ngIf",o.order),e.xp6(1),e.Q6J("ngIf",!o.order))},dependencies:[u.O5,m.rH]}),r})()}];let $=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[m.Bz.forChild(j),m.Bz]}),r})(),X=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[u.ez,$,x.m]}),r})()}}]);