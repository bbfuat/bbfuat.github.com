(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{397:function(e,t,r){"use strict";r.r(t);var o={name:"StoreSectionCustomerReviews",provide:{heading:{align:"center"}},data:function(){return{customers:[{review:'"Do yourself a favor and visit this lovely restaurant in London. The service is unmatched. The food is absolutely amazing – everything we tasted melted in other mouths. Absolutely the best food we had while in London. Highly recommend!"',name:"Cathy Chen"},{review:'"Very unique food, you will not be disappointed if you would like to try something different!"',name:"Ryan"},{review:"“The food are freshly made and staffs are very friendly!”",name:"Chandler"}]}}},n=(r(573),r(5)),c=r(24),l=r.n(c),d=r(366),f=r(607),h=r(608),m=r(378),v=r(145),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("store-base-section",{staticClass:"grey lighten-5",attrs:{id:"customer-reviews",space:"64"}},[o("store-base-section-heading",{attrs:{icon:"mdi-chat-processing",space:"0",title:"Customer Reviews"}}),o("v-carousel",{staticClass:"mt-n12",attrs:{cycle:"",interval:"10000",height:"600",light:""}},e._l(e.customers,(function(t,i){return o("v-carousel-item",{key:i},[o("v-container",{staticClass:"fill-height"},[o("v-responsive",{staticClass:"mx-auto shrink text-center",attrs:{"max-width":"90%",width:"700"}},[o("store-base-body",{staticClass:"mb-6 d-block text-h6",attrs:{text:t.review,tag:"em"}}),o("v-avatar",{staticClass:"mb-6",attrs:{size:"128"}},[o("store-base-img",{attrs:{src:r(572)("./user-"+(i+1)+".jpg")}})],1),o("store-base-title",{attrs:{title:t.name,space:"0"}}),t.role?o("store-base-subtitle",{attrs:{title:t.role}}):e._e()],1)],1)],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VAvatar:d.a,VCarousel:f.a,VCarouselItem:h.a,VContainer:m.a,VResponsive:v.a})},528:function(e,t,r){e.exports=r.p+"img/user-1.cdedcbb.jpg"},529:function(e,t,r){e.exports=r.p+"img/user-2.ab82a70.jpg"},530:function(e,t,r){e.exports=r.p+"img/user-3.08cebfd.jpg"},549:function(e,t,r){var content=r(574);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("63524f62",content,!0,{sourceMap:!1})},572:function(e,t,r){var map={"./user-1.jpg":528,"./user-2.jpg":529,"./user-3.jpg":530};function o(e){var t=n(e);return r(t)}function n(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=n,e.exports=o,o.id=572},573:function(e,t,r){"use strict";r(549)},574:function(e,t,r){(t=r(15)(!1)).push([e.i,"#customer-reviews .v-carousel__controls{background:transparent}#customer-reviews .base-body{line-height:2}",""]),e.exports=t}}]);