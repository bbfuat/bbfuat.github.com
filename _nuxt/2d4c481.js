(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{351:function(e,n,t){"use strict";var r={name:"StoreBaseView",props:{id:{type:String,default:"view"}},data:function(){return{sections:[]}}},o=t(5),c=t(24),l=t.n(c),v=t(348),d=t(346),component=Object(o.a)(r,(function(){var e=this.$createElement,n=this._self._c||e;return n("section",{attrs:{id:this.id}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12"}},this._l(this.sections,(function(section){return n("store-section-"+section,{key:section,tag:"component"})})),1)],1)],1)}),[],!1,null,null,null);n.a=component.exports;l()(component,{VCol:v.a,VRow:d.a})},353:function(e,n,t){"use strict";var r=t(366);n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{name:"LoadSections",components:e.reduce((function(e,n){var o=Object(r.upperFirst)(Object(r.camelCase)(n));return e["StoreSection".concat(o)]=function(){return t(354)("./".concat(o,".vue"))},e}),{}),data:function(){return{sections:e}}}}},354:function(e,n,t){var map={"./AboutUs.vue":[371,48],"./Channels.vue":[372,39],"./ChannelsList.vue":[369,1,37],"./CustomerReviews.vue":[373,4,36],"./Hero.vue":[374,47],"./HomeHero.vue":[375,46],"./InfoAlt.vue":[376,54],"./MembersList.vue":[370,1,2,3,5,32],"./MenuAdmin.vue":[377,1,6,30],"./OnlineMenu.vue":[378,1,6,31],"./OrdersList.vue":[368,1,2,3,5,34],"./PricingPlan.vue":[379,45],"./Setup.vue":[380,29],"./SubscribeIndex.vue":[381,1,43]};function r(e){if(!t.o(map,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=map[e],r=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(r)}))}r.keys=function(){return Object.keys(map)},r.id=354,e.exports=r},656:function(e,n,t){"use strict";t.r(n);var r=t(351),o=t(353),c={layout:"store",name:"PricingPlans",metaInfo:{title:"Pricing Plans"},extends:r.a,mixins:[Object(o.a)(["pricing-plan"])],props:{id:{type:String,default:"pricing-plans"}}},l=t(5),component=Object(l.a)(c,void 0,void 0,!1,null,null,null);n.default=component.exports}}]);