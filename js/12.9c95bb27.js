"use strict";(self["webpackChunkwdevdashboard"]=self["webpackChunkwdevdashboard"]||[]).push([[12],{8855:function(a,n,e){e.d(n,{Z:function(){return h}});var t=e(3396),s=e(7139);const r=a=>((0,t.dD)("data-v-474292c9"),a=a(),(0,t.Cn)(),a),o={class:"body-management"},d={class:"welcome-heading"},l=(0,t.Uk)(" Hi "),c={class:"semi-bold"},u=r((()=>(0,t._)("span",{class:"primary-text"},[(0,t._)("i",{class:"fa-brands fa-angellist"})],-1))),i={class:"latest-login"};function m(a,n,e,r,m,g){return(0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("h1",d,[l,(0,t._)("span",c,(0,s.zw)(m.username),1),u]),(0,t._)("span",i," Your last login has been "+(0,s.zw)(m.month+"/"+m.day)+", at "+(0,s.zw)(m.hour)+" o’clock. ",1)])}const g=new Date;var f={name:"BodyManagement",data(){return{username:"Wilson",day:g.getDate(),month:g.getMonth()+1,hour:g.getHours()>11?g.getHours()+" pm":g.getHours()+" am"}}},v=e(89);const _=(0,v.Z)(f,[["render",m],["__scopeId","data-v-474292c9"]]);var h=_},8752:function(a,n,e){e.d(n,{Z:function(){return m}});var t=e(3396);const s=a=>((0,t.dD)("data-v-c91994a6"),a=a(),(0,t.Cn)(),a),r={class:"header-management"},o=["src"],d=s((()=>(0,t._)("div",{class:"label"},[(0,t._)("h2",null,"IMS"),(0,t._)("span",null,"Integrated Management System")],-1)));function l(a,n,e,s,l,c){return(0,t.wg)(),(0,t.iD)("div",r,[(0,t._)("img",{src:l.logo,class:"management-logo"},null,8,o),d])}var c={name:"HeaderManagement",data(){return{logo:"./logo.png"}}},u=e(89);const i=(0,u.Z)(c,[["render",l],["__scopeId","data-v-c91994a6"]]);var m=i},6170:function(a,n,e){e.d(n,{Z:function(){return f}});var t=e(3396);const s=a=>((0,t.dD)("data-v-b3d6053c"),a=a(),(0,t.Cn)(),a),r={class:"dashboard-nav"},o=s((()=>(0,t._)("i",{class:"fa-solid fa-house"},null,-1))),d=s((()=>(0,t._)("i",{class:"fa-solid fa-rectangle-list"},null,-1))),l=s((()=>(0,t._)("i",{class:"fa-solid fa-file"},null,-1))),c=s((()=>(0,t._)("i",{class:"fa-solid fa-arrow-right-from-bracket"},null,-1)));function u(a,n){const e=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",r,[(0,t._)("nav",null,[(0,t.Wm)(e,{to:"/management"},{default:(0,t.w5)((()=>[o])),_:1}),(0,t.Wm)(e,{to:"/users"},{default:(0,t.w5)((()=>[d])),_:1}),(0,t.Wm)(e,{to:"/tutorials"},{default:(0,t.w5)((()=>[l])),_:1})]),(0,t.Wm)(e,{to:"/",class:"log-out"},{default:(0,t.w5)((()=>[c])),_:1})])}var i=e(89);const m={},g=(0,i.Z)(m,[["render",u],["__scopeId","data-v-b3d6053c"]]);var f=g},1012:function(a,n,e){e.r(n),e.d(n,{default:function(){return g}});var t=e(3396);const s={class:"dashboard"},r={class:"iframe"};function o(a,n,e,o,d,l){const c=(0,t.up)("SideBar"),u=(0,t.up)("HeaderManagement"),i=(0,t.up)("BodyManagement");return(0,t.wg)(),(0,t.iD)("div",s,[(0,t.Wm)(c),(0,t._)("div",r,[(0,t.Wm)(u),(0,t.Wm)(i)])])}var d=e(6170),l=e(8752),c=e(8855),u={name:"DashboardView",components:{SideBar:d.Z,HeaderManagement:l.Z,BodyManagement:c.Z},data(){return{}}},i=e(89);const m=(0,i.Z)(u,[["render",o],["__scopeId","data-v-85019994"]]);var g=m}}]);
//# sourceMappingURL=12.9c95bb27.js.map