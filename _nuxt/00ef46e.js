(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{144:function(t,e,r){"use strict";r(13),r(33),r(37),r(32),r(25),r(5),r(43),r(36);var n=r(0),o=r(137),l=r.n(o),c=r(198),d=r.n(c);function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var m,v=r(296),h=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}(v.keys());try{for(h.s();!(m=h.n()).done;){var y=m.value,S=v(y),x=y.replace(/index.js/,"").replace(/^\.\//,"").replace(/\.\w+$/,""),_=l()(d()(x));n.a.component("StoreBase".concat(_),S.default||S)}}catch(t){h.e(t)}finally{h.f()}},190:function(t,e,r){var content=r(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("34391ff0",content,!0,{sourceMap:!1})},192:function(t,e,r){var content=r(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("7d4a212c",content,!0,{sourceMap:!1})},200:function(t,e,r){"use strict";var n={name:"StoreLayout",head:{title:"App",titleTemplate:"%s | BaBao Food",htmlAttrs:{lang:"en"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"}]},components:{HomeAppBar:function(){return Promise.all([r.e(34),r.e(44)]).then(r.bind(null,656))},HomeFooter:function(){return r.e(41).then(r.bind(null,649))}}},o=r(4),l=r(24),c=r.n(l),d=r(351),f=r(147),m=r(352),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("home-app-bar"),e("v-main",[e("v-fade-transition",{attrs:{mode:"out-in"}},[e("Nuxt")],1)],1),e("home-footer")],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:d.a,VFadeTransition:f.c,VMain:m.a})},208:function(t,e,r){t.exports=r(209)},246:function(t,e){},296:function(t,e,r){var map={"./AsyncImg.vue":324,"./Avatar.vue":325,"./AvatarCard.vue":326,"./Body.vue":327,"./Btn.vue":328,"./BusinessContact.vue":329,"./Divider.vue":330,"./Heading.vue":64,"./Icon.vue":331,"./Img.vue":332,"./InfoCard.vue":333,"./Section.vue":334,"./SectionHeading.vue":335,"./Subheading.vue":336,"./Subtitle.vue":337,"./Title.vue":338};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=296},306:function(t,e,r){"use strict";r(190)},307:function(t,e,r){var n=r(22)(!1);n.push([t.i,".store-base-avatar{border-radius:50%;position:relative;overflow:visible}.store-base-avatar__outline{position:absolute!important;left:0;top:0}.store-base-avatar--outlined{background-color:#fff}.store-base-avatar--outlined .store-base-avatar__avatar{border:thin solid rgba(0,0,0,.12)!important}",""]),t.exports=n},319:function(t,e,r){"use strict";r(192)},320:function(t,e,r){var n=r(22)(!1);n.push([t.i,".store-base-divider .v-divider{border-width:3px 0 0!important}.store-base-divider.store-base-divider--dense .v-divider{border-width:2px 0 0!important}",""]),t.exports=n},324:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(55),{name:"StoreBaseAsyncImage",props:{imageId:{type:String}},data:function(){return{imageSrc:""}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,e.next=3,r.$get("http://icanhazip.com");case 3:return n=e.sent,e.abrupt("return",{context:n});case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/channel/".concat(t.imageId,"/logo"));case 2:r=e.sent,t.imageSrc=r;case 4:case"end":return e.stop()}}),e)})))()}}),l=r(4),c=r(24),d=r.n(c),f=r(345),m=r(139),v=r(353),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-img",t._g(t._b({attrs:{src:t.imageSrc},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])},"v-img",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VImg:f.a,VProgressCircular:m.a,VRow:v.a})},325:function(t,e,r){"use strict";r.r(e);r(17);var n={name:"StoreBaseAvatar",props:{color:String,dark:Boolean,icon:String,outlined:Boolean,size:{type:[Number,String],default:56}},data:function(){return{multiply:6}},computed:{classes:function(){return[this.outlined&&"store-base-avatar--outlined"]},outlineSize:function(){return Number(this.size)+this.size/this.multiply},styles:function(){var t=this.size/(2*this.multiply);return{margin:"-".concat(t,"px 0 0 -").concat(t,"px")}}}},o=(r(306),r(4)),l=r(24),c=r.n(l),d=r(346),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"store-base-avatar d-inline-flex",class:t.classes},[t.outlined?r("v-avatar",{staticClass:"store-base-avatar__outline",staticStyle:{opacity:".4"},style:t.styles,attrs:{color:t.color||"grey lighten-3",size:t.outlineSize}}):t._e(),r("v-avatar",t._g(t._b({staticClass:"store-base-avatar__avatar",attrs:{color:t.color||"white",size:t.size}},"v-avatar",t.$attrs,!1),t.$listeners),[t.icon?r("store-base-icon",{attrs:{dark:t.dark,size:t.size/2}},[t._v(t._s(t.icon))]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAvatar:d.a})},326:function(t,e,r){"use strict";r.r(e);r(17);var n={name:"StoreBaseAvatarCard",mixins:[r(41).a],props:{align:{type:String,default:"left"},color:String,dark:Boolean,horizontal:Boolean,icon:String,outlined:{type:Boolean,default:!0},space:{type:[Number,String],default:8},size:{type:[Number,String],default:72},text:String,title:String},computed:{classes:function(){var t=["mb-".concat(this.space)];return this.horizontal&&(t.push("d-flex"),this.$slots.default||this.text||t.push("align-center")),t}}},o=r(4),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pt-2",class:t.classes},[t.icon?r("store-base-avatar",{staticClass:"mb-3",attrs:{color:t.color,dark:t.dark,icon:t.icon,outlined:t.outlined,size:t.size}}):t._e(),r("div",{class:t.horizontal&&t.title&&"ml-6"},[r("store-base-title",{staticClass:"text-uppercase",attrs:{title:t.title,space:"3"}}),t.text||t.$slots.default?r("store-base-body",{staticClass:"mx-auto",attrs:{space:t.horizontal?0:void 0,text:t.text,"max-width":"700"}},[t._t("default")],2):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports},327:function(t,e,r){"use strict";r.r(e);r(17);var n={name:"StoreBaseBody",mixins:[r(41).a],inject:["theme"],props:{html:String,maxWidth:{type:[Number,String],default:void 0},space:{type:[Number,String],default:10},tag:{type:String,default:"p"},text:String},computed:{classes:function(){return["grey--text",this.theme.isDark?"text--lighten-1":"text--darken-1","text-".concat(this.align),"mb-".concat(this.space)]},styles:function(){return{maxWidth:"".concat(this.maxWidth,"px")}}}},o=r(4),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(t.tag,t._g(t._b({tag:"component",staticClass:"base-body body-1",class:t.classes,style:t.styles},"component",t.$attrs,!1),t.$listeners),[t.text?r("div",{domProps:{textContent:t._s(t.text)}}):t.html?r("div",{domProps:{innerHTML:t._s(t.html)}}):t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},328:function(t,e,r){"use strict";r.r(e);r(17);var n={name:"StoreBaseBtn",props:{color:{type:String,default:"primary"},depressed:{type:Boolean,default:!0},minWidth:{type:[Number,String],default:164},tile:{type:Boolean,default:!0}}},o=r(4),l=r(24),c=r.n(l),d=r(341),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-btn",t._g(t._b({staticClass:"font-weight-bold",attrs:{color:t.color,depressed:t.depressed,"min-width":t.minWidth,tile:t.tile,"x-large":""}},"v-btn",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a})},329:function(t,e,r){"use strict";r.r(e);var n={name:"StoreBaseBusinessContact",props:{dark:Boolean,dense:Boolean,title:String},data:function(){return{business:[{icon:"mdi-map-marker-outline",title:"Address",text:"390 Springbank Dr. Unit 17<br>London, Ontario N6J 1G9"},{icon:"mdi-cellphone",title:"Phone",text:"01 (519) 601-7077"},{icon:"mdi-email",title:"Email",text:"BaBaoFood2020@gmail.com"}]}}},o=r(4),l=r(24),c=r.n(l),d=r(344),f=r(354),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-theme-provider",{attrs:{dark:t.dark}},[r("div",[r("store-base-info-card",{attrs:{title:t.title,color:"primary"}},[t._t("default")],2),t._l(t.business,(function(e,i){var n=e.icon,text=e.text,o=e.title;return[r("store-base-avatar-card",{key:i,attrs:{icon:n,outlined:!1,title:t.dense?void 0:o,horizontal:"",space:"0"}},[r("div",{domProps:{innerHTML:t._s(text)}})]),i+1!==t.business.length?r("v-divider",{key:"divider-"+i,staticClass:"my-2"}):t._e()]}))],2)])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VDivider:d.a,VThemeProvider:f.a})},330:function(t,e,r){"use strict";r.r(e);r(17);var n={name:"StoreBaseDivider",mixins:[r(41).a],props:{color:String,dense:Boolean,space:{type:[Number,String],default:6}},computed:{classes:function(){return[this.color,this.margin,"mb-".concat(this.space),this.dense&&"store-base-divider--dense"]},margin:function(){switch(this.align){case"left":return"mr-auto";case"right":return"ml-auto";default:return"mx-auto"}}}},o=(r(319),r(4)),l=r(24),c=r.n(l),d=r(344),f=r(138),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-responsive",t._g(t._b({staticClass:"store-base-divider",class:t.classes,attrs:{"max-width":"28"}},"v-responsive",t.$attrs,!1),t.$listeners),[r("v-divider")],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VDivider:d.a,VResponsive:f.a})},331:function(t,e,r){"use strict";r.r(e);r(17);var n={name:"StoreBaseIcon",props:{size:{type:[Number,String],default:56}}},o=r(4),l=r(24),c=r.n(l),d=r(342),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-icon",t._g(t._b({attrs:{size:t.size}},"v-icon",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VIcon:d.a})},332:function(t,e,r){"use strict";r.r(e);var n={name:"StoreBaseImage"},o=r(4),l=r(24),c=r.n(l),d=r(345),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-img",t._g(t._b({},"v-img",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VImg:d.a})},333:function(t,e,r){"use strict";r.r(e);var n={name:"StoreBaseInfoCard",mixins:[r(41).a],props:{dark:Boolean,callout:String,color:{type:String,default:"primary"},icon:String,subtitle:String,text:String,title:String}},o=r(4),l=r(24),c=r.n(l),d=r(355),f=r(356),m=r(353),v=r(354),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-theme-provider",{attrs:{dark:t.dark}},[r("v-container",{staticClass:"pa-0"},[r("v-row",{attrs:{justify:t.justify,"no-gutters":""}},[t.icon?r("v-col",{staticClass:"mb-4",class:"text-"+t.align,attrs:{cols:"12"}},[r("store-base-icon",{attrs:{color:t.color}},[t._v(t._s(t.icon))])],1):t._e(),t.title||t.subtitle?r("v-col",{attrs:{cols:t.callout?9:12}},[t.subtitle?r("store-base-subtitle",{attrs:{title:t.subtitle,space:"1"}}):t._e(),r("store-base-title",{attrs:{title:t.title,space:"1"}}),r("store-base-divider",{attrs:{color:t.color}}),t.text||t.$slots.default?r("store-base-body",{attrs:{text:t.text,space:"6"}},[t._t("default")],2):t._e()],1):t._e(),t.callout?r("v-col",{attrs:{cols:"2"}},[r("div",{staticClass:"text-h2 grey--text text--lighten-4 font-weight-bold pr-8",domProps:{textContent:t._s(t.callout)}})]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:d.a,VContainer:f.a,VRow:m.a,VThemeProvider:v.a})},334:function(t,e,r){"use strict";r.r(e);r(9),r(5),r(7),r(14),r(15);var n=r(1);r(17);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={name:"StoreBaseSection",mixins:[r(63).a],props:{space:{type:[Number,String],default:26}},computed:{styles:function(){var t=this.$vuetify.breakpoint.mdAndUp?this.space:this.space/2;return l(l({},this.measurableStyles),{},{padding:"".concat(t,"px 0")})}}},d=r(4),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("section",t._g(t._b({style:t.styles},"section",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},335:function(t,e,r){"use strict";r.r(e);r(17);var n={name:"StoreBaseSectionHeading",mixins:[r(41).a],props:{align:{type:String,default:"center"},color:{type:String,default:"primary"},icon:String,outlined:Boolean,space:{type:[Number,String],default:12},subtitle:String,text:String,title:String},computed:{classes:function(){return["text-".concat(this.align),"mb-".concat(this.space)]}}},o=r(4),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"base-section-heading",class:t.classes},[t.icon?r("store-base-avatar",{staticClass:"mb-4",attrs:{icon:t.icon,outlined:t.outlined,color:"primary",dark:""}}):t._e(),t.subtitle?r("store-base-subtitle",{attrs:{title:t.subtitle,space:"1",tag:"h2"}}):t._e(),t.title?r("store-base-subheading",{attrs:{align:t.align,title:t.title,space:"2"}}):t._e(),r("store-base-divider",{attrs:{color:t.color}}),t.$slots.default||t.text?r("store-base-body",{staticClass:"mx-auto",attrs:{"max-width":"700"}},[t.$slots.default?t._t("default"):[t._v(t._s(t.text))]],2):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},336:function(t,e,r){"use strict";r.r(e);var n={name:"StoreBaseSubheading",extends:r(64).default,props:{size:{type:String,default:"text-h5"},sizeMobile:{type:String,default:"text-h6"},weight:{type:String,default:"bold"}}},o=r(4),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},337:function(t,e,r){"use strict";r.r(e);var n=r(146),o=(r(17),r(64)),l={name:"StoreBaseSubtitle",extends:o.default,props:{size:{type:String,default:"text-body-2"},mobileSize:{type:String,default:"text-body-1"},space:{type:[String,Number],default:0},tag:{type:String,default:"div"},weight:{type:[Number,String],default:"regular"}},computed:{classes:function(){return[].concat(Object(n.a)(o.default.computed.classes.call(this)),["grey--text"])}}},c=r(4),component=Object(c.a)(l,undefined,undefined,!1,null,null,null);e.default=component.exports},338:function(t,e,r){"use strict";r.r(e);var n=r(64),o=r(41),l={name:"StoreBaseTitle",extends:n.default,mixins:[o.a],props:{size:{type:String,default:"text-h6"},mobileSize:{type:String,default:"text-subtitle-1"},tag:{type:String,default:"h3"},weight:{type:String,default:"bold"}}},c=r(4),component=Object(c.a)(l,undefined,undefined,!1,null,null,null);e.default=component.exports},41:function(t,e,r){"use strict";e.a={name:"Heading",inject:{heading:{default:function(){return{align:"left"}}}},provide:function(){return{heading:{align:this.align}}},props:{align:{type:String,default:function(){return this.heading.align}}},computed:{justify:function(){switch(this.align){case"center":return"center";case"right":return"end";default:return"start"}}}}},64:function(t,e,r){"use strict";r.r(e);r(17);var n={name:"StoreBaseHeading",inject:{theme:{default:function(){return{isDark:!1}}},heading:{default:function(){return{align:"left"}}}},provide:function(){return{heading:{align:this.align}}},props:{align:{type:String,default:function(){return this.heading.align}},dense:{type:Boolean,default:function(){return this.isDense}},size:{type:String,default:"display-2"},space:{type:[Number,String],default:4},mobileSize:{type:String,default:"display-1"},mobileBreakPoint:{type:[Number,String],default:768},tag:{type:String,default:"h1"},title:String,weight:{type:String,default:"black"}},computed:{classes:function(){var t=[this.fontSize,"font-weight-".concat(this.weight),"mb-".concat(this.space),"text-".concat(this.align),this.theme.isDark&&"white--text"];return t},fontSize:function(){return this.$vuetify.breakpoint.width>=this.mobileBreakPoint?this.size:this.mobileSize}}},o=r(4),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,t._g(t._b({tag:"component",class:t.classes},"component",t.$attrs,!1),t.$listeners),[t.title?[t._v(t._s(t.title))]:t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports}},[[208,27,9,28]]]);