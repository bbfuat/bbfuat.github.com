(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{401:function(e,t,n){"use strict";n.r(t);var o=n(498),c=n(499),r=n(540),l={name:"SectionMenuAdmin",components:{"search-box":o.a,"category-filter":c.a,"item-card":r.a},data:function(){return{items:[],totalItems:0,categories:[],currentPage:1,perPage:10,totalPages:0,totalVisible:7}},methods:{queryItems:function(e){var t=this,n={query:"*:*",start:e,rows:t.perPage};t.$axios.get("/s/bbf/menuitems",{params:n}).then((function(e){t.items=e.data.docs,t.categories=e.data.cats,t.totalItems=e.data.numFound,t.totalPages=Math.ceil(t.totalItems/t.perPage),t.$vuetify.goTo(0)}))},flipPage:function(){this.queryItems((this.currentPage-1)*this.perPage)},handleCategorySelect:function(e){console.log("selected category: ",e)}},computed:{paginationSummary:function(){var e=(this.currentPage-1)*this.perPage+1,t=this.currentPage===this.totalPages?this.totalItems:this.currentPage*this.perPage;return"".concat(e," - ").concat(t," of ").concat(this.totalItems," Items")}},beforeMount:function(){this.queryItems(0)}},m=n(5),f=n(24),d=n.n(f),j=n(143),h=n(376),x=n(378),k=n(546),v=n(374),y=n(513),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("store-base-section",{attrs:{id:"menuadmin"}},[n("store-base-section-heading",{attrs:{title:"Menu Items Management",space:"1"}}),n("v-container",[n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"3"}},[n("search-box",{attrs:{label:"Search Items"}}),n("v-container",{staticClass:"pt-0"},[n("v-btn",{attrs:{color:"success",align:"right"}},[e._v("New Menu Item")])],1),n("category-filter",{attrs:{categories:e.categories},on:{"category-select":e.handleCategorySelect}})],1),n("v-col",{attrs:{cols:"9"}},[e.items.length>0?n("v-row",[n("v-col",{staticClass:"pa-0"},[n("v-btn",{attrs:{text:"",color:"primary",large:""}},[e._v(e._s(e.paginationSummary))])],1),n("v-spacer"),n("v-col",{staticClass:"pa-0"},[n("v-pagination",{attrs:{length:e.totalPages,"total-visible":e.totalVisible,circle:""},on:{input:e.flipPage},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1):e._e(),n("v-row",e._l(e.items,(function(e,t){return n("v-col",{key:e.id,attrs:{cols:"12"}},[n("item-card",{attrs:{item:e}})],1)})),1),e.items.length>0?n("v-row",[n("v-col",{staticClass:"pa-0"},[n("v-pagination",{attrs:{length:e.totalPages,"total-visible":e.totalVisible,circle:""},on:{input:e.flipPage},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1):e._e()],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:j.a,VCol:h.a,VContainer:x.a,VPagination:k.a,VRow:v.a,VSpacer:y.a})},425:function(e,t,n){e.exports=n.p+"img/A01 princess rose mooncake.078fa28.jpg"},426:function(e,t,n){e.exports=n.p+"img/A02 princess jasmine mooncake.bbca0d5.jpg"},427:function(e,t,n){e.exports=n.p+"img/A03 Mr.ham mooncake.cfd5ff0.jpg"},428:function(e,t,n){e.exports=n.p+"img/A04 Ms.bean mooncake.6a27dec.jpg"},429:function(e,t,n){e.exports=n.p+"img/B01 king-sized rice dumplings.9b71ee8.jpg"},430:function(e,t,n){e.exports=n.p+"img/B011 seasme sauce.afc4913.jpg"},431:function(e,t,n){e.exports=n.p+"img/B011-B019 king-sized rice dumpling stuffing.0f8ce6b.jpg"},432:function(e,t,n){e.exports=n.p+"img/B012 hazelnut butter.df40b59.jpg"},433:function(e,t,n){e.exports=n.p+"img/B015 cheese fermented tofu sauce.6e195a7.jpg"},434:function(e,t,n){e.exports=n.p+"img/B017 yunan tofu condiments.5b94c84.jpg"},435:function(e,t,n){e.exports=n.p+"img/B21-B210 regula dumplings.b2bba3e.jpg"},436:function(e,t,n){e.exports=n.p+"img/B31-B37 stuffed bun.0772021.jpg"},437:function(e,t,n){e.exports=n.p+"img/B51B52 ham potato rice.854e8ae.jpg"},438:function(e,t,n){e.exports=n.p+"img/B71B72 soy sauce scallion noodles.c692ebc.jpg"},439:function(e,t,n){e.exports=n.p+"img/C01C02 half chicken.f639138.jpg"},440:function(e,t,n){e.exports=n.p+"img/C03 chicked leg.077d6cb.jpg"},441:function(e,t,n){e.exports=n.p+"img/C03 chicken leg.a7a9d6a.jpg"},442:function(e,t,n){e.exports=n.p+"img/C05 chicken wings.959e213.jpg"},443:function(e,t,n){e.exports=n.p+"img/C07 beef.d9421f4.jpg"},444:function(e,t,n){e.exports=n.p+"img/C09 pork.3f7ddcb.jpg"},445:function(e,t,n){e.exports=n.p+"img/C10 minced pork.2709e15.jpg"},446:function(e,t,n){e.exports=n.p+"img/C11 steamed egg.ceb9bf8.jpg"},447:function(e,t,n){e.exports=n.p+"img/C12 lime pork hock.7cebe67.jpg"},448:function(e,t,n){e.exports=n.p+"img/C15 boiled egg.846ad9d.jpg"},449:function(e,t,n){e.exports=n.p+"img/D01-D03 snow princess bowls.939647f.jpg"},450:function(e,t,n){e.exports=n.p+"img/D05 mango prince.05da342.jpg"},451:function(e,t,n){e.exports=n.p+"img/D05 sweet minnow waffles _ red bean.66ddb76.jpg"},452:function(e,t,n){e.exports=n.p+"img/D07 king-sized sweet dumplings.c8c477b.jpg"},453:function(e,t,n){e.exports=n.p+"img/D09 sweet minnow waffles cones _ red bean.9350cb6.jpg"},454:function(e,t,n){e.exports=n.p+"img/E01E02 super nutritious breakfast drink.acb2715.jpg"},455:function(e,t,n){e.exports=n.p+"img/E021 soy milk macchiato.f923e09.jpg"},456:function(e,t,n){e.exports=n.p+"img/E022-E023 milk tea rose and milk tea jasimine macchiato.31568de.jpg"},457:function(e,t,n){e.exports=n.p+"img/E025 bubble tea macchiato.c7b4a3a.jpg"},458:function(e,t,n){e.exports=n.p+"img/E027 milk mango machiato.db6da89.jpg"},459:function(e,t,n){e.exports=n.p+"img/E031E032 fresh soy milk.d02fae5.jpg"},460:function(e,t,n){e.exports=n.p+"img/E051 bubble tea.47607df.jpg"},461:function(e,t,n){e.exports=n.p+"img/E71 black tea.34563be.jpg"},462:function(e,t,n){e.exports=n.p+"img/E72 iced  tea.3826e63.jpg"},463:function(e,t,n){e.exports=n.p+"img/E73 ice rose tea.196452c.jpg"},464:function(e,t,n){e.exports=n.p+"img/E74 ice jasmine tea.abde3c0.jpg"},465:function(e,t,n){e.exports=n.p+"img/E75 milk tea.1bfbe42.jpg"},466:function(e,t,n){e.exports=n.p+"img/E95 plum fruit.4ed0d19.jpg"},467:function(e,t,n){e.exports=n.p+"img/E97 lemon tangerine fruit.887358f.jpg"},468:function(e,t,n){e.exports=n.p+"img/E98 pomelo smoothie.b182c31.jpg"},469:function(e,t,n){e.exports=n.p+"img/E99 coconut milk bread.f5676c1.jpg"},470:function(e,t,n){e.exports=n.p+"img/F01 extra beef.9763fc8.jpg"},471:function(e,t,n){e.exports=n.p+"img/F03 extra 1 piece chicken.a7a9d6a.jpg"},472:function(e,t,n){e.exports=n.p+"img/F11 extra tomato or lettuce.4d567ba.jpg"},473:function(e,t,n){e.exports=n.p+"img/F15 add amazing chili.adb2b51.jpg"},474:function(e,t,n){e.exports=n.p+"img/F17F18 extre fresh parsley fresh green onion.e02bdac.jpg"},475:function(e,t,n){e.exports=n.p+"img/F19 lime.3826e63.jpg"},476:function(e,t,n){e.exports=n.p+"img/F21-F25 dipping sauce.b610e77.jpg"},477:function(e,t,n){e.exports=n.p+"img/F27 dipping sauce for dumplings or stuffed buns.36e77c2.jpg"},478:function(e,t,n){e.exports=n.p+"img/F28 dipping sauce for dumplings or stuffed buns.f2a8357.jpg"},479:function(e,t,n){e.exports=n.p+"img/F29 frothy sea salt cap.5dfe8de.jpg"},480:function(e,t,n){e.exports=n.p+"img/F30 add pearl.c758013.jpg"},481:function(e,t,n){e.exports=n.p+"img/M01M02 dumplings soup.c61a4ce.jpg"},482:function(e,t,n){e.exports=n.p+"img/S01pineapple.3a86a92.jpg"},483:function(e,t,n){e.exports=n.p+"img/S02Strawberry Salad.0c5ffdc.jpg"},484:function(e,t,n){e.exports=n.p+"img/S03toothpick tomato.eeaeb61.jpg"},485:function(e,t,n){e.exports=n.p+"img/S05 tofu puffs.11ed27a.jpg"},486:function(e,t,n){e.exports=n.p+"img/S07 mushroom.efd562a.jpg"},487:function(e,t,n){e.exports=n.p+"img/S08 potato fingers.0b5ebc5.jpg"},488:function(e,t,n){e.exports=n.p+"img/S09shredded potato.dd76424.jpg"},489:function(e,t,n){e.exports=n.p+"img/S10 pickled cucumber.9eb1cc9.jpg"},490:function(e,t,n){e.exports=n.p+"img/S11 seaweed.fae43ea.jpg"},491:function(e,t,n){e.exports=n.p+"img/S12 edamame.3ecaddb.jpg"},492:function(e,t,n){e.exports=n.p+"img/S15 spicky pickled chili.3f1d6b9.jpg"},493:function(e,t,n){e.exports=n.p+"img/S17 picky kimchi.562705c.jpg"},494:function(e,t,n){e.exports=n.p+"img/S18 pickle garlic.3d47e7f.jpg"},495:function(e,t,n){e.exports=n.p+"img/S19 picked white radish.dd7f54a.jpg"},496:function(e,t,n){e.exports=n.p+"img/S20 sweet pepper _ feta cheese.3638c4b.jpg"},498:function(e,t,n){"use strict";var o={name:"ChannelSearch",props:{label:{type:String,default:"Search"}},data:function(){return{query:null}},methods:{handleClickAppend:function(){var e="*:*";null!==this.query&&this.query.length>0&&(e=this.query),this.$emit("searchbox-search",e)}}},c=n(5),r=n(24),l=n.n(r),m=n(378),f=n(362),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-text-field",{attrs:{outlined:"",id:"input-query",autocomplete:"off",label:e.label,clearable:"","append-icon":"mdi-magnify"},on:{"click:clear":function(t){return e.$emit("searchbox-search","*:*")},"click:append":e.handleClickAppend,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleClickAppend(t)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}})],1)}),[],!1,null,null,null);t.a=component.exports;l()(component,{VContainer:m.a,VTextField:f.a})},499:function(e,t,n){"use strict";var o={name:"CategoryFilter",props:{label:{type:String,default:"Filter by categories"},categories:{type:Array,default:function(){return[{name:"movies",counts:20},{name:"sports",counts:120}]}}},data:function(){return{}},methods:{}},c=n(5),r=n(24),l=n.n(r),m=n(422),f=n(378),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("h3",{staticClass:"mb-2"},[e._v(e._s(e.label))]),e._l(e.categories,(function(t,o){return n("v-chip",{key:t.name,staticClass:"ma-1",attrs:{color:"primary"},on:{click:function(n){return e.$emit("category-select",t)}}},[e._v(e._s(t.name)+" ("+e._s(t.counts)+")")])}))],2)}),[],!1,null,null,null);t.a=component.exports;l()(component,{VChip:m.a,VContainer:f.a})},536:function(e,t,n){var map={"./A01 princess rose mooncake.jpg":425,"./A02 princess jasmine mooncake.jpg":426,"./A03 Mr.ham mooncake.jpg":427,"./A04 Ms.bean mooncake.jpg":428,"./B01 king-sized rice dumplings.jpg":429,"./B011 seasme sauce.jpg":430,"./B011-B019 king-sized rice dumpling stuffing.jpg":431,"./B012 hazelnut butter.jpg":432,"./B015 cheese fermented tofu sauce.jpg":433,"./B017 yunan tofu condiments.jpg":434,"./B21-B210 regula dumplings.jpg":435,"./B31-B37 stuffed bun.jpg":436,"./B51B52 ham potato rice.jpg":437,"./B71B72 soy sauce scallion noodles.jpg":438,"./C01C02 half chicken.jpg":439,"./C03 chicked leg.jpg":440,"./C03 chicken leg.jpg":441,"./C05 chicken wings.jpg":442,"./C07 beef.jpg":443,"./C09 pork.jpg":444,"./C10 minced pork.jpg":445,"./C11 steamed egg.jpg":446,"./C12 lime pork hock.jpg":447,"./C15 boiled egg.jpg":448,"./D01-D03 snow princess bowls.jpg":449,"./D05 mango prince.jpg":450,"./D05 sweet minnow waffles _ red bean.jpg":451,"./D07 king-sized sweet dumplings.jpg":452,"./D09 sweet minnow waffles cones _ red bean.jpg":453,"./E01E02 super nutritious breakfast drink.jpg":454,"./E021 soy milk macchiato.jpg":455,"./E022-E023 milk tea rose and milk tea jasimine macchiato.jpg":456,"./E025 bubble tea macchiato.jpg":457,"./E027 milk mango machiato.jpg":458,"./E031E032 fresh soy milk.jpg":459,"./E051 bubble tea.jpg":460,"./E71 black tea.jpg":461,"./E72 iced  tea.jpg":462,"./E73 ice rose tea.jpg":463,"./E74 ice jasmine tea.jpg":464,"./E75 milk tea.jpg":465,"./E95 plum fruit.jpg":466,"./E97 lemon tangerine fruit.jpg":467,"./E98 pomelo smoothie.jpg":468,"./E99 coconut milk bread.jpg":469,"./F01 extra beef.jpg":470,"./F03 extra 1 piece chicken.jpg":471,"./F11 extra tomato or lettuce.jpg":472,"./F15 add amazing chili.jpg":473,"./F17F18 extre fresh parsley fresh green onion.jpg":474,"./F19 lime.jpg":475,"./F21-F25 dipping sauce.jpg":476,"./F27 dipping sauce for dumplings or stuffed buns.jpg":477,"./F28 dipping sauce for dumplings or stuffed buns.jpg":478,"./F29 frothy sea salt cap.jpg":479,"./F30 add pearl.jpg":480,"./M01M02 dumplings soup.jpg":481,"./S01pineapple.jpg":482,"./S02Strawberry Salad.jpg":483,"./S03toothpick tomato.jpg":484,"./S05 tofu puffs.jpg":485,"./S07 mushroom.jpg":486,"./S08 potato fingers.jpg":487,"./S09shredded potato.jpg":488,"./S10 pickled cucumber.jpg":489,"./S11 seaweed.jpg":490,"./S12 edamame.jpg":491,"./S15 spicky pickled chili.jpg":492,"./S17 picky kimchi.jpg":493,"./S18 pickle garlic.jpg":494,"./S19 picked white radish.jpg":495,"./S20 sweet pepper _ feta cheese.jpg":496};function o(e){var t=c(e);return n(t)}function c(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=c,e.exports=o,o.id=536},540:function(e,t,n){"use strict";var o={name:"MenuItemCard",props:{item:{type:Object,default:function(){return{id:"1234sdis12",number:"A01",name:"item name",ingredients:"short description"}}}},data:function(){return{}},computed:{imagePath:function(){return this.item.image_path?this.item.image_path:"A01 princess rose mooncake.jpg"}}},c=n(5),r=n(24),l=n.n(r),m=n(366),f=n(382),d=n(380),j=n(422),h=n(616),x=n(147),k=n(365),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-card",{staticClass:"pa-1",attrs:{nocolor:"#1F7087",dark:!1}},[o("div",{staticClass:"d-flex flex-no-wrap justify-start"},[o("v-avatar",{attrs:{size:"350",tile:""}},[o("v-img",{attrs:{src:n(536)("./"+e.imagePath)}})],1),o("div",[o("v-card-title",{staticClass:"headline"},[o("v-chip",[e._v(e._s(e.item.number))]),o("span",{staticClass:"ml-2"},[e._v(e._s(e.item.name))])],1),o("v-card-subtitle",[e.item.ingredients?o("div",[e._v("Ingredients: "),o("strong",[e._v(e._s(e.item.ingredients))])]):e._e(),o("div",{staticClass:"mt-4"},[o("v-chip-group",{attrs:{column:""}},[o("v-chip",[o("v-icon",[e._v("mdi-alpha-d-circle-outline")]),e._v(e._s(e.item.dietary))],1),o("v-chip",[o("v-icon",[e._v("mdi-alpha-c-circle-outline")]),e._v(e._s(e.item.cooking_method))],1),o("v-chip",[o("v-icon",[e._v("mdi-alpha-f-circle-outline")]),e._v(e._s(e.item.flavour))],1)],1)],1)]),o("v-card-actions",[o("v-icon",[e._v("mdi-currency-usd")]),o("span",{staticClass:"subheading"},[e._v(e._s(e.item.price))])],1)],1)],1)])}),[],!1,null,null,null);t.a=component.exports;l()(component,{VAvatar:m.a,VCard:f.a,VCardActions:d.a,VCardSubtitle:d.b,VCardTitle:d.d,VChip:j.a,VChipGroup:h.a,VIcon:x.a,VImg:k.a})}}]);