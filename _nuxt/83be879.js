(window.webpackJsonp=window.webpackJsonp||[]).push([[47,48],{606:function(t,e,n){"use strict";n.r(e);var l={name:"BbfLoggedInMenuItems",methods:{logout:function(){return this.$auth.logout()}}},m=n(5),o=n(24),v=n.n(o),c=n(367),r=n(147),d=n(533),_=n(552),I=n(381),h=n(537),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-list-item",[n("v-list-item-avatar",[n("img",{attrs:{src:t.$auth.user.picture}})]),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.$auth.user.name))]),n("v-list-item-subtitle",[t._v(t._s(t.$auth.user.email))])],1)],1),n("v-divider"),n("v-list-item",{attrs:{to:"/admin/members"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-account-multiple")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Members Management")])],1)],1),n("v-list-item",{attrs:{to:"/admin/menu"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-silverware")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Menu Management")])],1)],1),n("v-list-item",{on:{click:t.logout}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-logout")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Logout")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VDivider:c.a,VIcon:r.a,VListItem:d.a,VListItemAvatar:_.a,VListItemContent:I.a,VListItemIcon:h.a,VListItemSubtitle:I.b,VListItemTitle:I.c})}}]);