"use strict";(self["webpackChunkwdevdashboard"]=self["webpackChunkwdevdashboard"]||[]).push([[368],{5368:function(a,o,t){t.r(o),t.d(o,{default:function(){return A}});var l=t(3396),d=t(9242);const e=a=>((0,l.dD)("data-v-36c4601a"),a=a(),(0,l.Cn)(),a),r={class:"addModal"},s={class:"modal"},n=e((()=>(0,l._)("h2",{class:"modal-heading"},"Add Tutorial",-1))),c=e((()=>(0,l._)("span",null,"Add a new tutorial article.",-1))),u={class:"form-group"},i={class:"form-group"},p=e((()=>(0,l._)("div",{class:"form-group"},[(0,l._)("button",{class:"btn btn-primary w-100"},"Add")],-1)));function f(a,o,t,e,f,m){return(0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("div",s,[(0,l._)("i",{class:"fa-solid fa-xmark close-modal",onClick:o[0]||(o[0]=(...o)=>a.closeAddModal&&a.closeAddModal(...o))}),n,c,(0,l._)("form",{onSubmit:o[3]||(o[3]=(0,d.iM)(((...a)=>m.addTutorial&&m.addTutorial(...a)),["prevent"]))},[(0,l._)("div",u,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":o[1]||(o[1]=a=>f.title=a),placeholder:"Title"},null,512),[[d.nr,f.title]])]),(0,l._)("div",i,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control","onUpdate:modelValue":o[2]||(o[2]=a=>f.url=a),placeholder:"URL"},null,512),[[d.nr,f.url]])]),p],32)])])}var m=t(4275),h=t(6035);const v={apiKey:"AIzaSyBMHJcISZ5OP_U1gdGD0MEFpqC4aHAy7T4",authDomain:"portfolio-65454.firebaseapp.com",projectId:"portfolio-65454",storageBucket:"portfolio-65454.appspot.com",messagingSenderId:"330355731809",appId:"1:330355731809:web:97dc40d4f54b9bfa392920"},_=(0,m.ZF)(v),b=(0,h.ad)(_),g=(0,h.hJ)(b,"tutorials");var w={data(){return{title:null,url:null}},methods:{async addTutorial(){console.log("Creating Document");const a=await(0,h.ET)(g,this.$data);alert("Document created successfully!"),console.log(a),this.$router.push("/tutorials")}}},y=t(89);const k=(0,y.Z)(w,[["render",f],["__scopeId","data-v-36c4601a"]]);var A=k}}]);
//# sourceMappingURL=368.f53640eb.js.map