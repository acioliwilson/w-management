"use strict";(self["webpackChunkwdevdashboard"]=self["webpackChunkwdevdashboard"]||[]).push([[315],{444:function(t,e,n){n.d(e,{BH:function(){return c},L:function(){return a},LL:function(){return E},Mn:function(){return p},ZR:function(){return w},b$:function(){return d},d:function(){return f},eu:function(){return y},hl:function(){return m},m9:function(){return C},ru:function(){return l},uI:function(){return h},vZ:function(){return I},w1:function(){return g}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&s+1<t.length&&56320===(64512&t.charCodeAt(s+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++s)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},r=function(t){const e=[];let n=0,s=0;while(n<t.length){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((7&r)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o)}}return e.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const e=t[r],i=r+1<t.length,o=i?t[r+1]:0,a=r+2<t.length,c=a?t[r+2]:0,u=e>>2,h=(3&e)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(l=64)),s.push(n[u],n[h],n[l],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],i=r<t.length,o=i?n[t.charAt(r)]:0;++r;const a=r<t.length,c=a?n[t.charAt(r)]:64;++r;const u=r<t.length,h=u?n[t.charAt(r)]:64;if(++r,null==e||null==o||null==c||null==h)throw Error();const l=e<<2|o>>4;if(s.push(l),64!==c){const t=o<<4&240|c>>2;if(s.push(t),64!==h){const t=c<<6&192|h;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=s(t);return i.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function h(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function l(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function d(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function f(){return u().indexOf("Electron/")>=0}function g(){const t=u();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function p(){return u().indexOf("MSAppHost/")>=0}function m(){return"object"===typeof indexedDB}function y(){return new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v="FirebaseError";class w extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=v,Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E.prototype.create)}}class E{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,r=this.errors[t],i=r?b(r,n):"Error",o=`${this.serviceName}: ${i} (${s}).`,a=new w(s,o,n);return a}}function b(t,e){return t.replace(T,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}const T=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const n=t[r],i=e[r];if(S(n)&&S(i)){if(!I(n,i))return!1}else if(n!==i)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function S(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function C(t){return t&&t._delegate?t._delegate:t}},503:function(t,e,n){n.d(e,{ZF:function(){return s.ZF}});var s=n(816),r="firebase",i="9.9.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s.KN)(r,i,"app")},321:function(t,e,n){n.d(e,{ET:function(){return gl},hJ:function(){return Ch},oe:function(){return fl},JU:function(){return Ah},QT:function(){return ul},PL:function(){return ll},ad:function(){return Nh},pl:function(){return dl}});var s,r=n(816),i=n(463),o=n(333),a=n(444),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={},h=h||{},l=c||self;function d(){}function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function g(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function p(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++y)}var m="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function E(t,e,n){return E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w,E.apply(null,arguments)}function b(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function T(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}}function I(){this.s=this.s,this.o=this.o}var S=0,C={};I.prototype.s=!1,I.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=S)){var t=p(this);delete C[t]}},I.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const A=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},_=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function D(t){t:{var e=Hn;const n=t.length,s="string"===typeof t?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function N(t){return Array.prototype.concat.apply([],arguments)}function k(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function L(t){return/^[\s\xa0]*$/.test(t)}var R,O=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function x(t,e){return-1!=t.indexOf(e)}function M(t,e){return t<e?-1:t>e?1:0}t:{var V=l.navigator;if(V){var F=V.userAgent;if(F){R=F;break t}}R=""}function P(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function U(t){const e={};for(const n in t)e[n]=t[n];return e}var B="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j(t,e){let n,s;for(let r=1;r<arguments.length;r++){for(n in s=arguments[r],s)t[n]=s[n];for(let e=0;e<B.length;e++)n=B[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function q(t){return q[" "](t),t}function $(t){var e=nt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}q[" "]=d;var K,G=x(R,"Opera"),H=x(R,"Trident")||x(R,"MSIE"),z=x(R,"Edge"),Q=z||H,W=x(R,"Gecko")&&!(x(R.toLowerCase(),"webkit")&&!x(R,"Edge"))&&!(x(R,"Trident")||x(R,"MSIE"))&&!x(R,"Edge"),X=x(R.toLowerCase(),"webkit")&&!x(R,"Edge");function Y(){var t=l.document;return t?t.documentMode:void 0}t:{var J="",Z=function(){var t=R;return W?/rv:([^\);]+)(\)|;)/.exec(t):z?/Edge\/([\d\.]+)/.exec(t):H?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):X?/WebKit\/(\S+)/.exec(t):G?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Z&&(J=Z?Z[1]:""),H){var tt=Y();if(null!=tt&&tt>parseFloat(J)){K=String(tt);break t}}K=J}var et,nt={};function st(){return $((function(){let t=0;const e=O(String(K)).split("."),n=O("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==r[0].length&&0==i[0].length)break;t=M(0==r[1].length?0:parseInt(r[1],10),0==i[1].length?0:parseInt(i[1],10))||M(0==r[2].length,0==i[2].length)||M(r[2],i[2]),r=r[3],i=i[3]}while(0==t)}return 0<=t}))}if(l.document&&H){var rt=Y();et=rt||(parseInt(K,10)||void 0)}else et=void 0;var it=et,ot=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{l.addEventListener("test",d,e),l.removeEventListener("test",d,e)}catch(n){}return t}();function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function ct(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(W){t:{try{q(e.nodeName);var r=!0;break t}catch(i){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:ut[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ct.Z.h.call(this)}}at.prototype.h=function(){this.defaultPrevented=!0},T(ct,at);var ut={2:"touch",3:"pen",4:"mouse"};ct.prototype.h=function(){ct.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ht="closure_listenable_"+(1e6*Math.random()|0),lt=0;function dt(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++lt,this.ca=this.fa=!1}function ft(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function gt(t){this.src=t,this.g={},this.h=0}function pt(t,e){var n=e.type;if(n in t.g){var s,r=t.g[n],i=A(r,e);(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ft(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function mt(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}gt.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=mt(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new dt(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};var yt="closure_lm_"+(1e6*Math.random()|0),vt={};function wt(t,e,n,s,r){if(s&&s.once)return Tt(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)wt(t,e[i],n,s,r);return null}return n=Nt(n),t&&t[ht]?t.N(e,n,g(s)?!!s.capture:!!s,r):Et(t,e,n,!1,s,r)}function Et(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=g(r)?!!r.capture:!!r,a=_t(t);if(a||(t[yt]=a=new gt(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=bt(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)ot||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Ct(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function bt(){function t(n){return e.call(t.src,t.listener,n)}var e=At;return t}function Tt(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Tt(t,e[i],n,s,r);return null}return n=Nt(n),t&&t[ht]?t.O(e,n,g(s)?!!s.capture:!!s,r):Et(t,e,n,!0,s,r)}function It(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)It(t,e[i],n,s,r);else s=g(s)?!!s.capture:!!s,n=Nt(n),t&&t[ht]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=mt(i,n,s,r),-1<n&&(ft(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=_t(t))&&(e=t.g[e.toString()],t=-1,e&&(t=mt(e,n,s,r)),(n=-1<t?e[t]:null)&&St(n))}function St(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ht])pt(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ct(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=_t(e))?(pt(n,t),0==n.h&&(n.src=null,e[yt]=null)):ft(t)}}}function Ct(t){return t in vt?vt[t]:vt[t]="on"+t}function At(t,e){if(t.ca)t=!0;else{e=new ct(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&St(t),t=n.call(s,e)}return t}function _t(t){return t=t[yt],t instanceof gt?t:null}var Dt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nt(t){return"function"===typeof t?t:(t[Dt]||(t[Dt]=function(e){return t.handleEvent(e)}),t[Dt])}function kt(){I.call(this),this.i=new gt(this),this.P=this,this.I=null}function Lt(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"===typeof e)e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var r=e;e=new at(s,t),j(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Rt(o,s,!0,e)&&r}if(o=e.g=t,r=Rt(o,s,!0,e)&&r,r=Rt(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Rt(o,s,!1,e)&&r}function Rt(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&pt(t.i,o),r=!1!==a.call(c,s)&&r}}return r&&!s.defaultPrevented}T(kt,I),kt.prototype[ht]=!0,kt.prototype.removeEventListener=function(t,e,n,s){It(this,t,e,n,s)},kt.prototype.M=function(){if(kt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)ft(n[s]);delete e.g[t],e.h--}}this.I=null},kt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},kt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var Ot=l.JSON.stringify;function xt(){var t=$t;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Mt{constructor(){this.h=this.g=null}add(t,e){const n=Ft.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Vt,Ft=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Pt),(t=>t.reset()));class Pt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ut(t){l.setTimeout((()=>{throw t}),0)}function Bt(t,e){Vt||jt(),qt||(Vt(),qt=!0),$t.add(t,e)}function jt(){var t=l.Promise.resolve(void 0);Vt=function(){t.then(Kt)}}var qt=!1,$t=new Mt;function Kt(){for(var t;t=xt();){try{t.h.call(t.g)}catch(n){Ut(n)}var e=Ft;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}qt=!1}function Gt(t,e){kt.call(this),this.h=t||1,this.g=e||l,this.j=E(this.kb,this),this.l=Date.now()}function Ht(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function zt(t,e,n){if("function"===typeof t)n&&(t=E(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=E(t.handleEvent,t)}return 2147483647<Number(e)?-1:l.setTimeout(t,e||0)}function Qt(t){t.g=zt((()=>{t.g=null,t.i&&(t.i=!1,Qt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}T(Gt,kt),s=Gt.prototype,s.da=!1,s.S=null,s.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Lt(this,"tick"),this.da&&(Ht(this),this.start()))}},s.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.M=function(){Gt.Z.M.call(this),Ht(this),delete this.g};class Wt extends I{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Qt(this)}M(){super.M(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xt(t){I.call(this),this.h=t,this.g={}}T(Xt,I);var Yt=[];function Jt(t,e,n,s){Array.isArray(n)||(n&&(Yt[0]=n.toString()),n=Yt);for(var r=0;r<n.length;r++){var i=wt(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Zt(t){P(t.g,(function(t,e){this.g.hasOwnProperty(e)&&St(t)}),t),t.g={}}function te(){this.g=!0}function ee(t,e,n,s,r,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function ne(t,e,n,s,r,i,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function se(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ie(t,n)+(s?" "+s:"")}))}function re(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ie(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<r.length;o++)r[o]=""}}}return Ot(n)}catch(a){return e}}Xt.prototype.M=function(){Xt.Z.M.call(this),Zt(this)},Xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},te.prototype.Aa=function(){this.g=!1},te.prototype.info=function(){};var oe={},ae=null;function ce(){return ae=ae||new kt}function ue(t){at.call(this,oe.Ma,t)}function he(t){const e=ce();Lt(e,new ue(e,t))}function le(t,e){at.call(this,oe.STAT_EVENT,t),this.stat=e}function de(t){const e=ce();Lt(e,new le(e,t))}function fe(t,e){at.call(this,oe.Na,t),this.size=e}function ge(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return l.setTimeout((function(){t()}),e)}oe.Ma="serverreachability",T(ue,at),oe.STAT_EVENT="statevent",T(le,at),oe.Na="timingevent",T(fe,at);var pe={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},me={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ye(){}function ve(t){return t.h||(t.h=t.i())}function we(){}ye.prototype.h=null;var Ee,be={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Te(){at.call(this,"d")}function Ie(){at.call(this,"c")}function Se(){}function Ce(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Xt(this),this.P=_e,t=Q?125:void 0,this.W=new Gt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ae}function Ae(){this.i=null,this.g="",this.h=!1}T(Te,at),T(Ie,at),T(Se,ye),Se.prototype.g=function(){return new XMLHttpRequest},Se.prototype.i=function(){return{}},Ee=new Se;var _e=45e3,De={},Ne={};function ke(t,e,n){t.K=1,t.v=en(We(e)),t.s=n,t.U=!0,Le(t,null)}function Le(t,e){t.F=Date.now(),Me(t),t.A=We(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),yn(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Ae,t.g=Is(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Wt(E(t.Ia,t,t.g),t.O)),Jt(t.V,t.g,"readystatechange",t.gb),e=t.H?U(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),he(1),ee(t.j,t.u,t.A,t.m,t.X,t.s)}function Re(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Oe(t,e,n){let s,r=!0;for(;!t.I&&t.C<n.length;){if(s=xe(t,n),s==Ne){4==e&&(t.o=4,de(14),r=!1),se(t.j,t.m,null,"[Incomplete Response]");break}if(s==De){t.o=4,de(15),se(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}se(t.j,t.m,s,null),Be(t,s)}Re(t)&&s!=Ne&&s!=De&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,de(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ps(e),e.L=!0,de(11))):(se(t.j,t.m,n,"[Invalid Chunked Response]"),Ue(t),Pe(t))}function xe(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Ne:(n=Number(e.substring(n,s)),isNaN(n)?De:(s+=1,s+n>e.length?Ne:(e=e.substr(s,n),t.C=s+n,e)))}function Me(t){t.Y=Date.now()+t.P,Ve(t,t.P)}function Ve(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ge(E(t.eb,t),e)}function Fe(t){t.B&&(l.clearTimeout(t.B),t.B=null)}function Pe(t){0==t.l.G||t.I||vs(t.l,t)}function Ue(t){Fe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Ht(t.W),Zt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Be(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Cn(n.i,t)))if(n.I=t.N,!t.J&&Cn(n.i,t)&&3==n.G){try{var s=n.Ca.g.parse(e)}catch(u){s=null}if(Array.isArray(s)&&3==s.length){var r=s;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;ys(n),is(n)}gs(n),de(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=ge(E(n.ab,n),6e3));if(1>=Sn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else Es(n,11)}else if((t.J||n.g==t)&&ys(n),!L(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const r=u[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const h=u[5];null!=h&&"number"===typeof h&&0<h&&(s=1.5*h,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=s.i;!i.g&&(x(t,"spdy")||x(t,"quic")||x(t,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(An(i,i.h),i.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.sa=t,tn(s.F,s.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=Ts(s,s.H?s.la:null,s.W),o.J){_n(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Fe(a),Me(a)),s.g=o}else fs(s);0<n.l.length&&cs(n)}else"stop"!=u[0]&&"close"!=u[0]||Es(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Es(n,7):rs(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}he(4)}catch(u){}}function je(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}function qe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)_(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(f(t)||"string"===typeof t){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=je(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function $e(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof $e)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}function Ke(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Ge(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],Ge(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}function Ge(t,e){return Object.prototype.hasOwnProperty.call(t,e)}s=Ce.prototype,s.setTimeout=function(t){this.P=t},s.gb=function(t){t=t.target;const e=this.L;e&&3==Jn(t)?e.l():this.Ia(t)},s.Ia=function(t){try{if(t==this.g)t:{const h=Jn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||Q||this.g&&(this.h.h||this.g.ga()||Zn(this.g)))){this.I||4!=h||7==e||he(8==e||0>=d?3:2),Fe(this);var n=this.g.ba();this.N=n;e:if(Re(this)){var s=Zn(this.g);t="";var r=s.length,i=4==Jn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ue(this),Pe(this);var o="";break e}this.h.i=new l.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,ne(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,de(12),Ue(this),Pe(this);break t}se(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Be(this,n)}this.U?(Oe(this,h,o),Q&&this.i&&3==h&&(Jt(this.V,this.W,"tick",this.fb),this.W.start())):(se(this.j,this.m,o,null),Be(this,o)),4==h&&Ue(this),this.i&&!this.I&&(4==h?vs(this.l,this):(this.i=!1,Me(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,de(12)):(this.o=0,de(13)),Ue(this),Pe(this)}}}catch(h){}},s.fb=function(){if(this.g){var t=Jn(this.g),e=this.g.ga();this.C<e.length&&(Fe(this),Oe(this,t,e),this.i&&4!=t&&Me(this))}},s.cancel=function(){this.I=!0,Ue(this)},s.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(re(this.j,this.A),2!=this.K&&(he(3),de(17)),Ue(this),this.o=2,Pe(this)):Ve(this,this.Y-t)},s=$e.prototype,s.R=function(){Ke(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},s.T=function(){return Ke(this),this.g.concat()},s.get=function(t,e){return Ge(this.h,t)?this.h[t]:e},s.set=function(t,e){Ge(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},s.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};var He=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ze(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Qe(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Qe){this.g=void 0!==e?e:t.g,Xe(this,t.j),this.s=t.s,Ye(this,t.i),Je(this,t.m),this.l=t.l,e=t.h;var n=new fn;n.i=e.i,e.g&&(n.g=new $e(e.g),n.h=e.h),Ze(this,n),this.o=t.o}else t&&(n=String(t).match(He))?(this.g=!!e,Xe(this,n[1]||"",!0),this.s=rn(n[2]||""),Ye(this,n[3]||"",!0),Je(this,n[4]),this.l=rn(n[5]||"",!0),Ze(this,n[6]||"",!0),this.o=rn(n[7]||"")):(this.g=!!e,this.h=new fn(null,this.g))}function We(t){return new Qe(t)}function Xe(t,e,n){t.j=n?rn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ye(t,e,n){t.i=n?rn(e,!0):e}function Je(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ze(t,e,n){e instanceof fn?(t.h=e,wn(t.h,t.g)):(n||(e=on(e,ln)),t.h=new fn(e,t.g))}function tn(t,e,n){t.h.set(e,n)}function en(t){return tn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nn(t){return t instanceof Qe?We(t):new Qe(t,void 0)}function sn(t,e,n,s){var r=new Qe(null,void 0);return t&&Xe(r,t),e&&Ye(r,e),n&&Je(r,n),s&&(r.l=s),r}function rn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function on(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,an),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function an(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Qe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(on(e,cn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(on(e,cn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(on(n,"/"==n.charAt(0)?hn:un,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",on(n,dn)),t.join("")};var cn=/[#\/\?@]/g,un=/[#\?:]/g,hn=/[#\?]/g,ln=/[#\?@]/g,dn=/#/g;function fn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function gn(t){t.g||(t.g=new $e,t.h=0,t.i&&ze(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function pn(t,e){gn(t),e=vn(t,e),Ge(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ge(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ke(t)))}function mn(t,e){return gn(t),e=vn(t,e),Ge(t.g.h,e)}function yn(t,e,n){pn(t,e),0<n.length&&(t.i=null,t.g.set(vn(t,e),k(n)),t.h+=n.length)}function vn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function wn(t,e){e&&!t.j&&(gn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(pn(this,e),yn(this,n,t))}),t)),t.j=e}s=fn.prototype,s.add=function(t,e){gn(this),this.i=null,t=vn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},s.forEach=function(t,e){gn(this),this.g.forEach((function(n,s){_(n,(function(n){t.call(e,n,s,this)}),this)}),this)},s.T=function(){gn(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n},s.R=function(t){gn(this);var e=[];if("string"===typeof t)mn(this,t)&&(e=N(e,this.g.get(vn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=N(e,t[n])}return e},s.set=function(t,e){return gn(this),this.i=null,t=vn(this,t),mn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},s.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;""!==s[i]&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};var En=class{constructor(t,e){this.h=t,this.g=e}};function bn(t){this.l=t||Tn,l.PerformanceNavigationTiming?(t=l.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(l.g&&l.g.Ea&&l.g.Ea()&&l.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Tn=10;function In(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Sn(t){return t.h?1:t.g?t.g.size:0}function Cn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function An(t,e){t.g?t.g.add(e):t.h=e}function _n(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Dn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return k(t.i)}function Nn(){}function kn(){this.g=new Nn}function Ln(t,e,n){const s=n||"";try{qe(t,(function(t,n){let r=t;g(t)&&(r=Ot(t)),e.push(s+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Rn(t,e){const n=new te;if(l.Image){const s=new Image;s.onload=b(On,n,s,"TestLoadImage: loaded",!0,e),s.onerror=b(On,n,s,"TestLoadImage: error",!1,e),s.onabort=b(On,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=b(On,n,s,"TestLoadImage: timeout",!1,e),l.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}function On(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch(i){}}function xn(t){this.l=t.$b||null,this.j=t.ib||!1}function Mn(t,e){kt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Vn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bn.prototype.cancel=function(){if(this.i=Dn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Nn.prototype.stringify=function(t){return l.JSON.stringify(t,void 0)},Nn.prototype.parse=function(t){return l.JSON.parse(t,void 0)},T(xn,ye),xn.prototype.g=function(){return new Mn(this.l,this.j)},xn.prototype.i=function(t){return function(){return t}}({}),T(Mn,kt);var Vn=0;function Fn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Pn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Un(t)}function Un(t){t.onreadystatechange&&t.onreadystatechange.call(t)}s=Mn.prototype,s.open=function(t,e){if(this.readyState!=Vn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Un(this)},s.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||l).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Pn(this)),this.readyState=Vn},s.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Un(this)),this.g&&(this.readyState=3,Un(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof l.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},s.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Pn(this):Un(this),3==this.readyState&&Fn(this)}},s.Ua=function(t){this.g&&(this.response=this.responseText=t,Pn(this))},s.Ta=function(t){this.g&&(this.response=t,Pn(this))},s.ha=function(){this.g&&Pn(this)},s.setRequestHeader=function(t,e){this.v.append(t,e)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Mn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Bn=l.JSON.parse;function jn(t){kt.call(this),this.headers=new $e,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=qn,this.K=this.L=!1}T(jn,kt);var qn="",$n=/^https?$/i,Kn=["POST","PUT"];function Gn(t){return H&&st()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Hn(t){return"content-type"==t.toLowerCase()}function zn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Qn(t),Xn(t)}function Qn(t){t.D||(t.D=!0,Lt(t,"complete"),Lt(t,"error"))}function Wn(t){if(t.h&&"undefined"!=typeof h&&(!t.C[1]||4!=Jn(t)||2!=t.ba()))if(t.v&&4==Jn(t))zt(t.Fa,0,t);else if(Lt(t,"readystatechange"),4==Jn(t)){t.h=!1;try{const c=t.ba();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===c){var r=String(t.H).match(He)[1]||null;if(!r&&l.self&&l.self.location){var i=l.self.location.protocol;r=i.substr(0,i.length-1)}s=!$n.test(r?r.toLowerCase():"")}n=s}if(n)Lt(t,"complete"),Lt(t,"success");else{t.m=6;try{var o=2<Jn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",Qn(t)}}finally{Xn(t)}}}function Xn(t,e){if(t.g){Yn(t);const s=t.g,r=t.C[0]?d:null;t.g=null,t.C=null,e||Lt(t,"ready");try{s.onreadystatechange=r}catch(n){}}}function Yn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(l.clearTimeout(t.A),t.A=null)}function Jn(t){return t.g?t.g.readyState:0}function Zn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case qn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ts(t){let e="";return P(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function es(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=ts(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):tn(t,e,n))}function ns(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ss(t){this.za=0,this.l=[],this.h=new te,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ns("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ns("baseRetryDelayMs",5e3,t),this.$a=ns("retryDelaySeedMs",1e4,t),this.Ya=ns("forwardChannelMaxRetries",2,t),this.ra=ns("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new bn(t&&t.concurrentRequestLimit),this.Ca=new kn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function rs(t){if(os(t),3==t.G){var e=t.V++,n=We(t.F);tn(n,"SID",t.J),tn(n,"RID",e),tn(n,"TYPE","terminate"),ls(t,n),e=new Ce(t,t.h,e,void 0),e.K=2,e.v=en(We(n)),n=!1,l.navigator&&l.navigator.sendBeacon&&(n=l.navigator.sendBeacon(e.v.toString(),"")),!n&&l.Image&&((new Image).src=e.v,n=!0),n||(e.g=Is(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Me(e)}bs(t)}function is(t){t.g&&(ps(t),t.g.cancel(),t.g=null)}function os(t){is(t),t.u&&(l.clearTimeout(t.u),t.u=null),ys(t),t.i.cancel(),t.m&&("number"===typeof t.m&&l.clearTimeout(t.m),t.m=null)}function as(t,e){t.l.push(new En(t.Za++,e)),3==t.G&&cs(t)}function cs(t){In(t.i)||t.m||(t.m=!0,Bt(t.Ha,t),t.C=0)}function us(t,e){return!(Sn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=ge(E(t.Ha,t,e),ws(t,t.C)),t.C++,!0))}function hs(t,e){var n;n=e?e.m:t.V++;const s=We(t.F);tn(s,"SID",t.J),tn(s,"RID",n),tn(s,"AID",t.U),ls(t,s),t.o&&t.s&&es(s,t.o,t.s),n=new Ce(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=ds(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),An(t.i,n),ke(n,s,e)}function ls(t,e){t.j&&qe({},(function(t,n){tn(e,n,t)}))}function ds(t,e,n){n=Math.min(t.l.length,n);var s=t.j?E(t.j.Oa,t.j,t):null;t:{var r=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let i=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),i=!1;else try{Ln(a,t,"req"+n+"_")}catch(Ys){s&&s(a)}}if(i){s=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,s}function fs(t){t.g||t.u||(t.Y=1,Bt(t.Ga,t),t.A=0)}function gs(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=ge(E(t.Ga,t),ws(t,t.A)),t.A++,!0)}function ps(t){null!=t.B&&(l.clearTimeout(t.B),t.B=null)}function ms(t){t.g=new Ce(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=We(t.oa);tn(e,"RID","rpc"),tn(e,"SID",t.J),tn(e,"CI",t.N?"0":"1"),tn(e,"AID",t.U),ls(t,e),tn(e,"TYPE","xmlhttp"),t.o&&t.s&&es(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=en(We(e)),n.s=null,n.U=!0,Le(n,t)}function ys(t){null!=t.v&&(l.clearTimeout(t.v),t.v=null)}function vs(t,e){var n=null;if(t.g==e){ys(t),ps(t),t.g=null;var s=2}else{if(!Cn(t.i,e))return;n=e.D,_n(t.i,e),s=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ce(),Lt(s,new fe(s,n,e,r)),cs(t)}else fs(t);else if(r=e.o,3==r||0==r&&0<t.I||!(1==s&&us(t,e)||2==s&&gs(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Es(t,5);break;case 4:Es(t,10);break;case 3:Es(t,6);break;default:Es(t,2)}}function ws(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Es(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var s=E(t.jb,t);n||(n=new Qe("//www.google.com/images/cleardot.gif"),l.location&&"http"==l.location.protocol||Xe(n,"https"),en(n)),Rn(n.toString(),s)}else de(2);t.G=0,t.j&&t.j.va(e),bs(t),os(t)}function bs(t){t.G=0,t.I=-1,t.j&&(0==Dn(t.i).length&&0==t.l.length||(t.i.i.length=0,k(t.l),t.l.length=0),t.j.ua())}function Ts(t,e,n){let s=nn(n);if(""!=s.i)e&&Ye(s,e+"."+s.i),Je(s,s.m);else{const t=l.location;s=sn(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&P(t.aa,(function(t,e){tn(s,e,t)})),e=t.D,n=t.sa,e&&n&&tn(s,e,n),tn(s,"VER",t.ma),ls(t,s),s}function Is(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new jn(new xn({ib:!0})):new jn(t.qa),e.L=t.H,e}function Ss(){}function Cs(){if(H&&!(10<=Number(it)))throw Error("Environmental error: no available transport.")}function As(t,e){kt.call(this),this.g=new ss(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!L(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!L(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ns(this)}function _s(t){Te.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ds(){Ie.call(this),this.status=1}function Ns(t){this.g=t}s=jn.prototype,s.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ee.g(),this.C=this.u?ve(this.u):ve(Ee),this.g.onreadystatechange=E(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void zn(this,i)}t=n||"";const r=new $e(this.headers);s&&qe(s,(function(t,e){r.set(e,t)})),s=D(r.T()),n=l.FormData&&t instanceof l.FormData,!(0<=A(Kn,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Yn(this),0<this.B&&((this.K=Gn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=E(this.pa,this)):this.A=zt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){zn(this,i)}},s.pa=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Lt(this,"timeout"),this.abort(8))},s.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Lt(this,"complete"),Lt(this,"abort"),Xn(this))},s.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xn(this,!0)),jn.Z.M.call(this)},s.Fa=function(){this.s||(this.F||this.v||this.l?Wn(this):this.cb())},s.cb=function(){Wn(this)},s.ba=function(){try{return 2<Jn(this)?this.g.status:-1}catch(t){return-1}},s.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},s.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Bn(e)}},s.Da=function(){return this.m},s.La=function(){return"string"===typeof this.j?this.j:String(this.j)},s=ss.prototype,s.ma=8,s.G=1,s.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},s.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Ce(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=U(i),j(i,this.P)):i=this.P),null===this.o&&(r.H=i),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var s=this.l[n];if(s="__data__"in s.g&&(s=s.g.__data__,"string"===typeof s)?s.length:void 0,void 0===s)break;if(e+=s,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ds(this,r,e),n=We(this.F),tn(n,"RID",t),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),ls(this,n),this.o&&i&&es(n,this.o,i),An(this.i,r),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",e),tn(n,"SID","null"),r.$=!0,ke(r,n,null)):ke(r,n,e),this.G=2}}else 3==this.G&&(t?hs(this,t):0==this.l.length||In(this.i)||hs(this))},s.Ga=function(){if(this.u=null,ms(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ge(E(this.bb,this),t)}},s.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,de(10),is(this),ms(this))},s.ab=function(){null!=this.v&&(this.v=null,is(this),gs(this),de(19))},s.jb=function(t){t?(this.h.info("Successfully pinged google.com"),de(2)):(this.h.info("Failed to ping google.com"),de(1))},s=Ss.prototype,s.xa=function(){},s.wa=function(){},s.va=function(){},s.ua=function(){},s.Oa=function(){},Cs.prototype.g=function(t,e){return new As(t,e)},T(As,kt),As.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Bt(E(t.hb,t,e))),de(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ts(t,null,t.W),cs(t)},As.prototype.close=function(){rs(this.g)},As.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,as(this.g,e)}else this.v?(e={},e.__data__=Ot(t),as(this.g,e)):as(this.g,t)},As.prototype.M=function(){this.g.j=null,delete this.j,rs(this.g),delete this.g,As.Z.M.call(this)},T(_s,Te),T(Ds,Ie),T(Ns,Ss),Ns.prototype.xa=function(){Lt(this.g,"a")},Ns.prototype.wa=function(t){Lt(this.g,new _s(t))},Ns.prototype.va=function(t){Lt(this.g,new Ds(t))},Ns.prototype.ua=function(){Lt(this.g,"b")},Cs.prototype.createWebChannel=Cs.prototype.g,As.prototype.send=As.prototype.u,As.prototype.open=As.prototype.m,As.prototype.close=As.prototype.close,pe.NO_ERROR=0,pe.TIMEOUT=8,pe.HTTP_ERROR=6,me.COMPLETE="complete",we.EventType=be,be.OPEN="a",be.CLOSE="b",be.ERROR="c",be.MESSAGE="d",kt.prototype.listen=kt.prototype.N,jn.prototype.listenOnce=jn.prototype.O,jn.prototype.getLastError=jn.prototype.La,jn.prototype.getLastErrorCode=jn.prototype.Da,jn.prototype.getStatus=jn.prototype.ba,jn.prototype.getResponseJson=jn.prototype.Qa,jn.prototype.getResponseText=jn.prototype.ga,jn.prototype.send=jn.prototype.ea;var ks=u.createWebChannelTransport=function(){return new Cs},Ls=u.getStatEventTarget=function(){return ce()},Rs=u.ErrorCode=pe,Os=u.EventType=me,xs=u.Event=oe,Ms=u.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Vs=u.FetchXmlHttpFactory=xn,Fs=u.WebChannel=we,Ps=u.XhrIo=jn;const Us="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Bs.UNAUTHENTICATED=new Bs(null),Bs.GOOGLE_CREDENTIALS=new Bs("google-credentials-uid"),Bs.FIRST_PARTY=new Bs("first-party-uid"),Bs.MOCK_USER=new Bs("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let js="9.9.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=new o.Yd("@firebase/firestore");function $s(){return qs.logLevel}function Ks(t,...e){if(qs.logLevel<=o["in"].DEBUG){const n=e.map(zs);qs.debug(`Firestore (${js}): ${t}`,...n)}}function Gs(t,...e){if(qs.logLevel<=o["in"].ERROR){const n=e.map(zs);qs.error(`Firestore (${js}): ${t}`,...n)}}function Hs(t,...e){if(qs.logLevel<=o["in"].WARN){const n=e.map(zs);qs.warn(`Firestore (${js}): ${t}`,...n)}}function zs(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t="Unexpected state"){const e=`FIRESTORE (${js}) INTERNAL ASSERTION FAILED: `+t;throw Gs(e),new Error(e)}function Ws(t,e){t||Qs()}function Xs(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Js extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class er{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Bs.UNAUTHENTICATED)))}shutdown(){}}class nr{constructor(t){this.t=t,this.currentUser=Bs.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new Zs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Zs,t.enqueueRetryable((()=>s(this.currentUser)))};const i=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{Ks("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ks("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Zs)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ks("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Ws("string"==typeof e.accessToken),new tr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ws(null===t||"string"==typeof t),new Bs(t)}}class sr{constructor(t,e,n){this.type="FirstParty",this.user=Bs.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const s=t.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class rr{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new sr(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Bs.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ir{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class or{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Ks("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Ks("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{Ks("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?s(t):Ks("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Ws("string"==typeof t.token),this.p=t.token,new ir(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ar(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=ar(40);for(let r=0;r<s.length;++r)n.length<20&&s[r]<e&&(n+=t.charAt(s[r]%t.length))}return n}}function ur(t,e){return t<e?-1:t>e?1:0}function hr(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lr{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Js(Ys.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Js(Ys.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Js(Ys.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Js(Ys.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return lr.fromMillis(Date.now())}static fromDate(t){return lr.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new lr(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ur(this.nanoseconds,t.nanoseconds):ur(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t){this.timestamp=t}static fromTimestamp(t){return new dr(t)}static min(){return new dr(new lr(0,0))}static max(){return new dr(new lr(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t,e,n){void 0===e?e=0:e>t.length&&Qs(),void 0===n?n=t.length-e:n>t.length-e&&Qs(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===fr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof fr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),r=e.get(s);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class gr extends fr{construct(t,e,n){return new gr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Js(Ys.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new gr(e)}static emptyPath(){return new gr([])}}const pr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mr extends fr{construct(t,e,n){return new mr(t,e,n)}static isValidIdentifier(t){return pr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new mr(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const r=()=>{if(0===n.length)throw new Js(Ys.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new Js(Ys.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Js(Ys.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(i=!i,s++):"."!==e||i?(n+=e,s++):(r(),s++)}if(r(),i)throw new Js(Ys.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new mr(e)}static emptyPath(){return new mr([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t){this.path=t}static fromPath(t){return new yr(gr.fromString(t))}static fromName(t){return new yr(gr.fromString(t).popFirst(5))}static empty(){return new yr(gr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===gr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return gr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new yr(new gr(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}vr.UNKNOWN_ID=-1;function wr(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=dr.fromTimestamp(1e9===s?new lr(n+1,0):new lr(n,s));return new br(r,yr.empty(),e)}function Er(t){return new br(t.readTime,t.key,-1)}class br{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new br(dr.min(),yr.empty(),-1)}static max(){return new br(dr.max(),yr.empty(),-1)}}function Tr(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=yr.comparator(t.documentKey,e.documentKey),0!==n?n:ur(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Sr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(t){if(t.code!==Ys.FAILED_PRECONDITION||t.message!==Ir)throw t;Ks("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Qs(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ar(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ar?e:Ar.resolve(e)}catch(t){return Ar.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ar.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ar.reject(e)}static resolve(t){return new Ar(((e,n)=>{e(t)}))}static reject(t){return new Ar(((e,n)=>{n(t)}))}static waitFor(t){return new Ar(((e,n)=>{let s=0,r=0,i=!1;t.forEach((t=>{++s,t.next((()=>{++r,i&&r===s&&e()}),(t=>n(t)))})),i=!0,r===s&&e()}))}static or(t){let e=Ar.resolve(!1);for(const n of t)e=e.next((t=>t?Ar.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new Ar(((n,s)=>{const r=t.length,i=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===r&&n(i)}),(t=>s(t)))}}))}static doWhile(t,e){return new Ar(((n,s)=>{const r=()=>{!0===t()?e().next((()=>{r()}),s):n()};r()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function kr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Lr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dr.ot=-1;class Rr{constructor(t,e){this.comparator=t,this.root=e||xr.EMPTY}insert(t,e){return new Rr(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,xr.BLACK,null,null))}remove(t){return new Rr(this.comparator,this.root.remove(t,this.comparator).copy(null,null,xr.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Or(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Or(this.root,t,this.comparator,!1)}getReverseIterator(){return new Or(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Or(this.root,t,this.comparator,!0)}}class Or{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class xr{constructor(t,e,n,s,r){this.key=t,this.value=e,this.color=null!=n?n:xr.RED,this.left=null!=s?s:xr.EMPTY,this.right=null!=r?r:xr.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,r){return new xr(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const r=n(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===r?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return xr.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return xr.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,xr.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,xr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Qs();if(this.right.isRed())throw Qs();const t=this.left.check();if(t!==this.right.check())throw Qs();return t+(this.isRed()?0:1)}}xr.EMPTY=null,xr.RED=!0,xr.BLACK=!1,xr.EMPTY=new class{constructor(){this.size=0}get key(){throw Qs()}get value(){throw Qs()}get color(){throw Qs()}get left(){throw Qs()}get right(){throw Qs()}copy(t,e,n,s,r){return this}insert(t,e,n){return new xr(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mr{constructor(t){this.comparator=t,this.data=new Rr(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Vr(this.data.getIterator())}getIteratorFrom(t){return new Vr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Mr))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Mr(this.comparator);return e.data=t,e}}class Vr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fr{constructor(t){this.fields=t,t.sort(mr.comparator)}static empty(){return new Fr([])}unionWith(t){let e=new Mr(mr.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Fr(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return hr(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pr{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Pr(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Pr(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ur(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Pr.EMPTY_BYTE_STRING=new Pr("");const Ur=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Br(t){if(Ws(!!t),"string"==typeof t){let e=0;const n=Ur.exec(t);if(Ws(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:jr(t.seconds),nanos:jr(t.nanos)}}function jr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function qr(t){return"string"==typeof t?Pr.fromBase64String(t):Pr.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Kr(t){const e=t.mapValue.fields.__previous_value__;return $r(e)?Kr(e):e}function Gr(t){const e=Br(t.mapValue.fields.__local_write_time__.timestampValue);return new lr(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t,e,n,s,r,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class zr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new zr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof zr&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t){return null==t}function Wr(t){return 0===t&&1/t==-1/0}function Xr(t){return"number"==typeof t&&Number.isInteger(t)&&!Wr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Jr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$r(t)?4:li(t)?9007199254740991:10:Qs()}function Zr(t,e){if(t===e)return!0;const n=Jr(t);if(n!==Jr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gr(t).isEqual(Gr(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Br(t.timestampValue),s=Br(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return qr(t.bytesValue).isEqual(qr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return jr(t.geoPointValue.latitude)===jr(e.geoPointValue.latitude)&&jr(t.geoPointValue.longitude)===jr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return jr(t.integerValue)===jr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=jr(t.doubleValue),s=jr(e.doubleValue);return n===s?Wr(n)===Wr(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return hr(t.arrayValue.values||[],e.arrayValue.values||[],Zr);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Nr(n)!==Nr(s))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===s[r]||!Zr(n[r],s[r])))return!1;return!0}(t,e);default:return Qs()}}function ti(t,e){return void 0!==(t.values||[]).find((t=>Zr(t,e)))}function ei(t,e){if(t===e)return 0;const n=Jr(t),s=Jr(e);if(n!==s)return ur(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ur(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=jr(t.integerValue||t.doubleValue),s=jr(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return ni(t.timestampValue,e.timestampValue);case 4:return ni(Gr(t),Gr(e));case 5:return ur(t.stringValue,e.stringValue);case 6:return function(t,e){const n=qr(t),s=qr(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let r=0;r<n.length&&r<s.length;r++){const t=ur(n[r],s[r]);if(0!==t)return t}return ur(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ur(jr(t.latitude),jr(e.latitude));return 0!==n?n:ur(jr(t.longitude),jr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const t=ei(n[r],s[r]);if(t)return t}return ur(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Yr.mapValue&&e===Yr.mapValue)return 0;if(t===Yr.mapValue)return 1;if(e===Yr.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),r=e.fields||{},i=Object.keys(r);s.sort(),i.sort();for(let o=0;o<s.length&&o<i.length;++o){const t=ur(s[o],i[o]);if(0!==t)return t;const e=ei(n[s[o]],r[i[o]]);if(0!==e)return e}return ur(s.length,i.length)}(t.mapValue,e.mapValue);default:throw Qs()}}function ni(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ur(t,e);const n=Br(t),s=Br(e),r=ur(n.seconds,s.seconds);return 0!==r?r:ur(n.nanos,s.nanos)}function si(t){return ri(t)}function ri(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Br(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?qr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,yr.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=ri(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const r of e)s?s=!1:n+=",",n+=`${r}:${ri(t.fields[r])}`;return n+"}"}(t.mapValue):Qs();var e,n}function ii(t){return!!t&&"integerValue"in t}function oi(t){return!!t&&"arrayValue"in t}function ai(t){return!!t&&"nullValue"in t}function ci(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ui(t){return!!t&&"mapValue"in t}function hi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return kr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=hi(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function li(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class di{constructor(t){this.value=t}static empty(){return new di({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ui(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=hi(e)}setAll(t){let e=mr.emptyPath(),n={},s=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=r.popLast()}t?n[r.lastSegment()]=hi(t):s.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,s)}delete(t){const e=this.field(t.popLast());ui(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Zr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];ui(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){kr(e,((e,n)=>t[e]=n));for(const s of n)delete t[s]}clone(){return new di(hi(this.value))}}function fi(t){const e=[];return kr(t.fields,((t,n)=>{const s=new mr([t]);if(ui(n)){const t=fi(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new Fr(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class gi{constructor(t,e,n,s,r,i){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.data=r,this.documentState=i}static newInvalidDocument(t){return new gi(t,0,dr.min(),dr.min(),di.empty(),0)}static newFoundDocument(t,e,n){return new gi(t,1,e,dr.min(),n,0)}static newNoDocument(t,e){return new gi(t,2,e,dr.min(),di.empty(),0)}static newUnknownDocument(t,e){return new gi(t,3,e,dr.min(),di.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=di.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=di.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=dr.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof gi&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gi(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t,e=null,n=[],s=[],r=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=i,this.endAt=o,this.ut=null}}function mi(t,e=null,n=[],s=[],r=null,i=null,o=null){return new pi(t,e,n,s,r,i,o)}function yi(t){const e=Xs(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+si(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Qr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>si(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>si(t))).join(",")),e.ut=t}return e.ut}function vi(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${si(e.value)}`;var e})).join(", ")}]`),Qr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>si(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>si(t))).join(",")),`Target(${e})`}function wi(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!Ri(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Zr(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xi(t.startAt,e.startAt)&&xi(t.endAt,e.endAt)}function Ei(t){return yr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class bi extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new Ti(t,e,n):"array-contains"===e?new Ai(t,n):"in"===e?new _i(t,n):"not-in"===e?new Di(t,n):"array-contains-any"===e?new Ni(t,n):new bi(t,e,n)}static ct(t,e,n){return"in"===e?new Ii(t,n):new Si(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(ei(e,this.value)):null!==e&&Jr(this.value)===Jr(e)&&this.at(ei(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Qs()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ti extends bi{constructor(t,e,n){super(t,e,n),this.key=yr.fromName(n.referenceValue)}matches(t){const e=yr.comparator(t.key,this.key);return this.at(e)}}class Ii extends bi{constructor(t,e){super(t,"in",e),this.keys=Ci("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Si extends bi{constructor(t,e){super(t,"not-in",e),this.keys=Ci("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ci(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>yr.fromName(t.referenceValue)))}class Ai extends bi{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return oi(e)&&ti(e.arrayValue,this.value)}}class _i extends bi{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ti(this.value.arrayValue,e)}}class Di extends bi{constructor(t,e){super(t,"not-in",e)}matches(t){if(ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ti(this.value.arrayValue,e)}}class Ni extends bi{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!oi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>ti(this.value.arrayValue,t)))}}class ki{constructor(t,e){this.position=t,this.inclusive=e}}class Li{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ri(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Oi(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(s=i.field.isKeyField()?yr.comparator(yr.fromName(o.referenceValue),n.key):ei(o,n.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return s}function xi(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zr(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t,e=null,n=[],s=[],r=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Vi(t,e,n,s,r,i,o,a){return new Mi(t,e,n,s,r,i,o,a)}function Fi(t){return new Mi(t)}function Pi(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ui(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Bi(t){for(const e of t.filters)if(e.ht())return e.field;return null}function ji(t){return null!==t.collectionGroup}function qi(t){const e=Xs(t);if(null===e.lt){e.lt=[];const t=Bi(e),n=Ui(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new Li(t)),e.lt.push(new Li(mr.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Li(mr.keyField(),t))}}}return e.lt}function $i(t){const e=Xs(t);if(!e.ft)if("F"===e.limitType)e.ft=mi(e.path,e.collectionGroup,qi(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of qi(e)){const e="desc"===r.dir?"asc":"desc";t.push(new Li(r.field,e))}const n=e.endAt?new ki(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new ki(e.startAt.position,e.startAt.inclusive):null;e.ft=mi(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.ft}function Ki(t,e,n){return new Mi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gi(t,e){return wi($i(t),$i(e))&&t.limitType===e.limitType}function Hi(t){return`${yi($i(t))}|lt:${t.limitType}`}function zi(t){return`Query(target=${vi($i(t))}; limitType=${t.limitType})`}function Qi(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):yr.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=Oi(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,qi(t),e))&&!(t.endAt&&!function(t,e,n){const s=Oi(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,qi(t),e))}(t,e)}function Wi(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xi(t){return(e,n)=>{let s=!1;for(const r of qi(t)){const t=Yi(r,e,n);if(0!==t)return t;s=s||r.field.isKeyField()}return 0}}function Yi(t,e,n){const s=t.field.isKeyField()?yr.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),r=n.data.field(t);return null!==s&&null!==r?ei(s,r):Qs()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Qs()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wr(e)?"-0":e}}function Zi(t){return{integerValue:""+t}}function to(t,e){return Xr(e)?Zi(e):Ji(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this._=void 0}}function no(t,e,n){return t instanceof io?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof oo?ao(t,e):t instanceof co?uo(t,e):function(t,e){const n=ro(t,e),s=lo(n)+lo(t._t);return ii(n)&&ii(t._t)?Zi(s):Ji(t.wt,s)}(t,e)}function so(t,e,n){return t instanceof oo?ao(t,e):t instanceof co?uo(t,e):n}function ro(t,e){return t instanceof ho?ii(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class io extends eo{}class oo extends eo{constructor(t){super(),this.elements=t}}function ao(t,e){const n=fo(e);for(const s of t.elements)n.some((t=>Zr(t,s)))||n.push(s);return{arrayValue:{values:n}}}class co extends eo{constructor(t){super(),this.elements=t}}function uo(t,e){let n=fo(e);for(const s of t.elements)n=n.filter((t=>!Zr(t,s)));return{arrayValue:{values:n}}}class ho extends eo{constructor(t,e){super(),this.wt=t,this._t=e}}function lo(t){return jr(t.integerValue||t.doubleValue)}function fo(t){return oi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof oo&&e instanceof oo||t instanceof co&&e instanceof co?hr(t.elements,e.elements,Zr):t instanceof ho&&e instanceof ho?Zr(t._t,e._t):t instanceof io&&e instanceof io}(t.transform,e.transform)}class po{constructor(t,e){this.version=t,this.transformResults=e}}class mo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new mo}static exists(t){return new mo(void 0,t)}static updateTime(t){return new mo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function yo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class vo{}function wo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new No(t.key,mo.none()):new So(t.key,t.data,mo.none());{const n=t.data,s=di.empty();let r=new Mr(mr.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),r=r.add(t)}return new Co(t.key,s,new Fr(r.toArray()),mo.none())}}function Eo(t,e,n){t instanceof So?function(t,e,n){const s=t.value.clone(),r=_o(t.fieldTransforms,e,n.transformResults);s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Co?function(t,e,n){if(!yo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=_o(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Ao(t)),r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function bo(t,e,n,s){return t instanceof So?function(t,e,n,s){if(!yo(t.precondition,e))return n;const r=t.value.clone(),i=Do(t.fieldTransforms,s,e);return r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,s):t instanceof Co?function(t,e,n,s){if(!yo(t.precondition,e))return n;const r=Do(t.fieldTransforms,s,e),i=e.data;return i.setAll(Ao(t)),i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return yo(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function To(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),r=ro(s.transform,t||null);null!=r&&(null===n&&(n=di.empty()),n.set(s.field,r))}return n||null}function Io(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&hr(t,e,((t,e)=>go(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class So extends vo{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Co extends vo{constructor(t,e,n,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Ao(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function _o(t,e,n){const s=new Map;Ws(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,so(o,a,n[r]))}return s}function Do(t,e,n){const s=new Map;for(const r of t){const t=r.transform,i=n.data.field(r.field);s.set(r.field,no(t,i,e))}return s}class No extends vo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ko extends vo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ro,Oo;function xo(t){switch(t){default:return Qs();case Ys.CANCELLED:case Ys.UNKNOWN:case Ys.DEADLINE_EXCEEDED:case Ys.RESOURCE_EXHAUSTED:case Ys.INTERNAL:case Ys.UNAVAILABLE:case Ys.UNAUTHENTICATED:return!1;case Ys.INVALID_ARGUMENT:case Ys.NOT_FOUND:case Ys.ALREADY_EXISTS:case Ys.PERMISSION_DENIED:case Ys.FAILED_PRECONDITION:case Ys.ABORTED:case Ys.OUT_OF_RANGE:case Ys.UNIMPLEMENTED:case Ys.DATA_LOSS:return!0}}function Mo(t){if(void 0===t)return Gs("GRPC error has no .code"),Ys.UNKNOWN;switch(t){case Ro.OK:return Ys.OK;case Ro.CANCELLED:return Ys.CANCELLED;case Ro.UNKNOWN:return Ys.UNKNOWN;case Ro.DEADLINE_EXCEEDED:return Ys.DEADLINE_EXCEEDED;case Ro.RESOURCE_EXHAUSTED:return Ys.RESOURCE_EXHAUSTED;case Ro.INTERNAL:return Ys.INTERNAL;case Ro.UNAVAILABLE:return Ys.UNAVAILABLE;case Ro.UNAUTHENTICATED:return Ys.UNAUTHENTICATED;case Ro.INVALID_ARGUMENT:return Ys.INVALID_ARGUMENT;case Ro.NOT_FOUND:return Ys.NOT_FOUND;case Ro.ALREADY_EXISTS:return Ys.ALREADY_EXISTS;case Ro.PERMISSION_DENIED:return Ys.PERMISSION_DENIED;case Ro.FAILED_PRECONDITION:return Ys.FAILED_PRECONDITION;case Ro.ABORTED:return Ys.ABORTED;case Ro.OUT_OF_RANGE:return Ys.OUT_OF_RANGE;case Ro.UNIMPLEMENTED:return Ys.UNIMPLEMENTED;case Ro.DATA_LOSS:return Ys.DATA_LOSS;default:return Qs()}}(Oo=Ro||(Ro={}))[Oo.OK=0]="OK",Oo[Oo.CANCELLED=1]="CANCELLED",Oo[Oo.UNKNOWN=2]="UNKNOWN",Oo[Oo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oo[Oo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oo[Oo.NOT_FOUND=5]="NOT_FOUND",Oo[Oo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oo[Oo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oo[Oo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oo[Oo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oo[Oo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oo[Oo.ABORTED=10]="ABORTED",Oo[Oo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oo[Oo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oo[Oo.INTERNAL=13]="INTERNAL",Oo[Oo.UNAVAILABLE=14]="UNAVAILABLE",Oo[Oo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,r]of n)if(this.equalsFn(s,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){kr(this.inner,((e,n)=>{for(const[s,r]of n)t(s,r)}))}isEmpty(){return Lr(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=new Rr(yr.comparator);function Po(){return Fo}const Uo=new Rr(yr.comparator);function Bo(...t){let e=Uo;for(const n of t)e=e.insert(n.key,n);return e}function jo(t){let e=Uo;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function qo(){return Ko()}function $o(){return Ko()}function Ko(){return new Vo((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Go=new Rr(yr.comparator),Ho=new Mr(yr.comparator);function zo(...t){let e=Ho;for(const n of t)e=e.add(n);return e}const Qo=new Mr(ur);function Wo(){return Qo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(t,e,n,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Yo.createSynthesizedTargetChangeForCurrentChange(t,e)),new Xo(dr.min(),n,Wo(),Po(),zo())}}class Yo{constructor(t,e,n,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Yo(Pr.EMPTY_BYTE_STRING,e,zo(),zo(),zo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(t,e,n,s){this.gt=t,this.removedTargetIds=e,this.key=n,this.yt=s}}class Zo{constructor(t,e){this.targetId=t,this.It=e}}class ta{constructor(t,e,n=Pr.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class ea{constructor(){this.Tt=0,this.Et=ra(),this.At=Pr.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=zo(),e=zo(),n=zo();return this.Et.forEach(((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:Qs()}})),new Yo(this.At,this.Rt,t,e,n)}Dt(){this.bt=!1,this.Et=ra()}Ct(t,e){this.bt=!0,this.Et=this.Et.insert(t,e)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class na{constructor(t){this.Mt=t,this.Ft=new Map,this.$t=Po(),this.Bt=sa(),this.Lt=new Mr(ur)}Ut(t){for(const e of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(e,t.yt):this.Kt(e,t.key,t.yt);for(const e of t.removedTargetIds)this.Kt(e,t.key,t.yt)}Gt(t){this.forEachTarget(t,(e=>{const n=this.Qt(e);switch(t.state){case 0:this.jt(e)&&n.Vt(t.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(t.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(e);break;case 3:this.jt(e)&&(n.Ot(),n.Vt(t.resumeToken));break;case 4:this.jt(e)&&(this.Wt(e),n.Vt(t.resumeToken));break;default:Qs()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ft.forEach(((t,n)=>{this.jt(n)&&e(n)}))}zt(t){const e=t.targetId,n=t.It.count,s=this.Ht(e);if(s){const t=s.target;if(Ei(t))if(0===n){const n=new yr(t.path);this.Kt(e,n,gi.newNoDocument(n,dr.min()))}else Ws(1===n);else this.Jt(e)!==n&&(this.Wt(e),this.Lt=this.Lt.add(e))}}Yt(t){const e=new Map;this.Ft.forEach(((n,s)=>{const r=this.Ht(s);if(r){if(n.current&&Ei(r.target)){const e=new yr(r.target.path);null!==this.$t.get(e)||this.Xt(s,e)||this.Kt(s,e,gi.newNoDocument(e,t))}n.vt&&(e.set(s,n.St()),n.Dt())}}));let n=zo();this.Bt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Ht(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.$t.forEach(((e,n)=>n.setReadTime(t)));const s=new Xo(t,e,this.Lt,this.$t,n);return this.$t=Po(),this.Bt=sa(),this.Lt=new Mr(ur),s}qt(t,e){if(!this.jt(t))return;const n=this.Xt(t,e.key)?2:0;this.Qt(t).Ct(e.key,n),this.$t=this.$t.insert(e.key,e),this.Bt=this.Bt.insert(e.key,this.Zt(e.key).add(t))}Kt(t,e,n){if(!this.jt(t))return;const s=this.Qt(t);this.Xt(t,e)?s.Ct(e,1):s.xt(e),this.Bt=this.Bt.insert(e,this.Zt(e).delete(t)),n&&(this.$t=this.$t.insert(e,n))}removeTarget(t){this.Ft.delete(t)}Jt(t){const e=this.Qt(t).St();return this.Mt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let e=this.Ft.get(t);return e||(e=new ea,this.Ft.set(t,e)),e}Zt(t){let e=this.Bt.get(t);return e||(e=new Mr(ur),this.Bt=this.Bt.insert(t,e)),e}jt(t){const e=null!==this.Ht(t);return e||Ks("WatchChangeAggregator","Detected inactive target",t),e}Ht(t){const e=this.Ft.get(t);return e&&e.Pt?null:this.Mt.te(t)}Wt(t){this.Ft.set(t,new ea),this.Mt.getRemoteKeysForTarget(t).forEach((e=>{this.Kt(t,e,null)}))}Xt(t,e){return this.Mt.getRemoteKeysForTarget(t).has(e)}}function sa(){return new Rr(yr.comparator)}function ra(){return new Rr(yr.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),oa=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class aa{constructor(t,e){this.databaseId=t,this.dt=e}}function ca(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ua(t,e){return t.dt?e.toBase64():e.toUint8Array()}function ha(t,e){return ca(t,e.toTimestamp())}function la(t){return Ws(!!t),dr.fromTimestamp(function(t){const e=Br(t);return new lr(e.seconds,e.nanos)}(t))}function da(t,e){return function(t){return new gr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function fa(t){const e=gr.fromString(t);return Ws(Va(e)),e}function ga(t,e){return da(t.databaseId,e.path)}function pa(t,e){const n=fa(e);if(n.get(1)!==t.databaseId.projectId)throw new Js(Ys.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Js(Ys.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new yr(wa(n))}function ma(t,e){return da(t.databaseId,e)}function ya(t){const e=fa(t);return 4===e.length?gr.emptyPath():wa(e)}function va(t){return new gr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wa(t){return Ws(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Ea(t,e,n){return{name:ga(t,e),fields:n.value.mapValue.fields}}function ba(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Qs()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(t,e){return t.dt?(Ws(void 0===e||"string"==typeof e),Pr.fromBase64String(e||"")):(Ws(void 0===e||e instanceof Uint8Array),Pr.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Ys.UNKNOWN:Mo(t.code);return new Js(e,t.message||"")}(o);n=new ta(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=pa(t,s.document.name),i=la(s.document.updateTime),o=new di({mapValue:{fields:s.document.fields}}),a=gi.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Jo(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=pa(t,s.document),i=s.readTime?la(s.readTime):dr.min(),o=gi.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Jo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=pa(t,s.document),i=s.removedTargetIds||[];n=new Jo([],i,r,null)}else{if(!("filter"in e))return Qs();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,r=new Lo(s),i=t.targetId;n=new Zo(i,r)}}return n}function Ta(t,e){let n;if(e instanceof So)n={update:Ea(t,e.key,e.value)};else if(e instanceof No)n={delete:ga(t,e.key)};else if(e instanceof Co)n={update:Ea(t,e.key,e.data),updateMask:Ma(e.fieldMask)};else{if(!(e instanceof ko))return Qs();n={verify:ga(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof io)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof oo)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof co)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ho)return{fieldPath:e.field.canonicalString(),increment:n._t};throw Qs()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:ha(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Qs()}(t,e.precondition)),n}function Ia(t,e){return t&&t.length>0?(Ws(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?la(t.updateTime):la(e);return n.isEqual(dr.min())&&(n=la(e)),new po(n,t.transformResults||[])}(t,e)))):[]}function Sa(t,e){return{documents:[ma(t,e.path)]}}function Ca(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=ma(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ma(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(ci(t.value))return{unaryFilter:{field:La(t.field),op:"IS_NAN"}};if(ai(t.value))return{unaryFilter:{field:La(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ci(t.value))return{unaryFilter:{field:La(t.field),op:"IS_NOT_NAN"}};if(ai(t.value))return{unaryFilter:{field:La(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:La(t.field),op:ka(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:La(t.field),direction:Na(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.dt||Qr(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Aa(t){let e=ya(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ws(1===s);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=Da(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Li(Ra(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Qr(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new ki(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new ki(n,e)}(n.endAt)),Vi(e,r,o,i,a,"F",c,u)}function _a(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Qs()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Da(t){return t?void 0!==t.unaryFilter?[xa(t)]:void 0!==t.fieldFilter?[Oa(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Da(t))).reduce(((t,e)=>t.concat(e))):Qs():[]}function Na(t){return ia[t]}function ka(t){return oa[t]}function La(t){return{fieldPath:t.canonicalString()}}function Ra(t){return mr.fromServerFormat(t.fieldPath)}function Oa(t){return bi.create(Ra(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Qs()}}(t.fieldFilter.op),t.fieldFilter.value)}function xa(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ra(t.unaryFilter.field);return bi.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ra(t.unaryFilter.field);return bi.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ra(t.unaryFilter.field);return bi.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ra(t.unaryFilter.field);return bi.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Qs()}}function Ma(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Va(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Pa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ua=Pa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ba{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&Eo(e,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=bo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=bo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=$o();return this.mutations.forEach((s=>{const r=t.get(s.key),i=r.overlayedDocument;let o=this.applyToLocalView(i,r.mutatedFields);o=e.has(s.key)?null:o;const a=wo(i,o);null!==a&&n.set(s.key,a),i.isValidDocument()||i.convertToNoDocument(dr.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),zo())}isEqual(t){return this.batchId===t.batchId&&hr(this.mutations,t.mutations,((t,e)=>Io(t,e)))&&hr(this.baseMutations,t.baseMutations,((t,e)=>Io(t,e)))}}class ja{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){Ws(t.mutations.length===n.length);let s=Go;const r=t.mutations;for(let i=0;i<r.length;i++)s=s.insert(r[i].key,n[i].version);return new ja(t,e,n,s)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t,e,n,s,r=dr.min(),i=dr.min(),o=Pr.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new $a(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new $a(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new $a(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(t){this.ne=t}}function Ga(t){const e=Aa({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ki(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ha{constructor(){}re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(jr(t.integerValue));else if("doubleValue"in t){const n=jr(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),Wr(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(`${n.seconds||""}`),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(qr(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?li(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):Qs()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const s of Object.keys(n))this.le(s,e),this.oe(n[s],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const s of n)this.oe(s,e)}_e(t,e){this.ce(e,37),yr.fromName(t).path.forEach((t=>{this.ce(e,60),this.ge(t,e)}))}ce(t,e){t.ae(e)}fe(t){t.ae(2)}}Ha.ye=new Ha;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class za{constructor(){this.ze=new Qa}addToCollectionParentIndex(t,e){return this.ze.add(e),Ar.resolve()}getCollectionParents(t,e){return Ar.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return Ar.resolve()}deleteFieldIndex(t,e){return Ar.resolve()}getDocumentsMatchingTarget(t,e){return Ar.resolve(null)}getIndexType(t,e){return Ar.resolve(0)}getFieldIndexes(t,e){return Ar.resolve([])}getNextCollectionGroupToUpdate(t){return Ar.resolve(null)}getMinOffset(t,e){return Ar.resolve(br.min())}getMinOffsetFromCollectionGroup(t,e){return Ar.resolve(br.min())}updateCollectionGroup(t,e,n){return Ar.resolve()}updateIndexEntries(t,e){return Ar.resolve()}}class Qa{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Mr(gr.comparator),r=!s.has(n);return this.index[e]=s.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Mr(gr.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Wa{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Wa(t,Wa.DEFAULT_COLLECTION_PERCENTILE,Wa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wa.DEFAULT_COLLECTION_PERCENTILE=10,Wa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Wa.DEFAULT=new Wa(41943040,Wa.DEFAULT_COLLECTION_PERCENTILE,Wa.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Wa.DISABLED=new Wa(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xa{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new Xa(0)}static Rn(){return new Xa(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ya{constructor(){this.changes=new Vo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gi.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ar.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ja{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&bo(n.mutation,t,Fr.empty(),lr.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,zo()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=zo()){const s=qo();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=Bo();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=qo();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,zo())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let r=Po();const i=Ko(),o=Ko();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof Co)?r=r.insert(e.key,e):void 0!==o&&(i.set(e.key,o.mutation.getFieldMask()),bo(o.mutation,e,o.mutation.getFieldMask(),lr.now()))})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Ja(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Ko();let s=new Rr(((t,e)=>t-e)),r=zo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||Fr.empty();o=r.applyToLocalView(i,o),n.set(t,o);const a=(s.get(r.batchId)||zo()).add(t);s=s.insert(r.batchId,a)}))})).next((()=>{const i=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,u=$o();c.forEach((t=>{if(!r.has(t)){const s=wo(e.get(t),n.get(t));null!==s&&u.set(t,s),r=r.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Ar.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return yr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ji(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((r=>{const i=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-r.size):Ar.resolve(qo());let o=-1,a=r;return i.next((e=>Ar.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?Ar.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,zo()))).next((t=>({batchId:o,changes:jo(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new yr(e)).next((t=>{let e=Bo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let r=Bo();return this.indexManager.getCollectionParents(t,s).next((i=>Ar.forEach(i,(i=>{const o=function(t,e){return new Mi(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((r=>(s=r,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===s.get(n)&&(s=s.insert(n,gi.newInvalidDocument(n)))}));let n=Bo();return s.forEach(((s,r)=>{const i=t.get(s);void 0!==i&&bo(i.mutation,r,Fr.empty(),lr.now()),Qi(e,r)&&(n=n.insert(s,r))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):Ar.resolve(gi.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,e){return Ar.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:la(n.createTime)}),Ar.resolve()}getNamedQuery(t,e){return Ar.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,function(t){return{name:t.name,query:Ga(t.bundledQuery),readTime:la(t.readTime)}}(e)),Ar.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.overlays=new Rr(yr.comparator),this.Xn=new Map}getOverlay(t,e){return Ar.resolve(this.overlays.get(e))}getOverlays(t,e){const n=qo();return Ar.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.ie(t,e,s)})),Ar.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Xn.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),Ar.resolve()}getOverlaysForCollection(t,e,n){const s=qo(),r=e.length+1,i=new yr(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===r&&t.largestBatchId>n&&s.set(t.getKey(),t)}return Ar.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let r=new Rr(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=qo(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=qo(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=s)break;return Ar.resolve(o)}ie(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.Xn.get(s.largestBatchId).delete(n.key);this.Xn.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new qa(e,n));let r=this.Xn.get(e);void 0===r&&(r=zo(),this.Xn.set(e,r)),this.Xn.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this.Zn=new Mr(sc.ts),this.es=new Mr(sc.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new sc(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new sc(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new yr(new gr([])),n=new sc(e,t),s=new sc(e,t+1),r=[];return this.es.forEachInRange([n,s],(t=>{this.rs(t),r.push(t.key)})),r}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new yr(new gr([])),n=new sc(e,t),s=new sc(e,t+1);let r=zo();return this.es.forEachInRange([n,s],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new sc(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class sc{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return yr.comparator(t.key,e.key)||ur(t.ls,e.ls)}static ns(t,e){return ur(t.ls,e.ls)||yr.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new Mr(sc.ts)}checkEmpty(t){return Ar.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const r=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Ba(r,e,n,s);this.mutationQueue.push(i);for(const o of s)this.ds=this.ds.add(new sc(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Ar.resolve(i)}lookupMutationBatch(t,e){return Ar.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ws(n),r=s<0?0:s;return Ar.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Ar.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return Ar.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new sc(e,0),s=new sc(e,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([n,s],(t=>{const e=this._s(t.ls);r.push(e)})),Ar.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Mr(ur);return e.forEach((t=>{const e=new sc(t,0),s=new sc(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,s],(t=>{n=n.add(t.ls)}))})),Ar.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let r=n;yr.isDocumentKey(r)||(r=r.child(""));const i=new sc(new yr(r),0);let o=new Mr(ur);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.ls)),!0)}),i),Ar.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Ws(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return Ar.forEach(e.mutations,(s=>{const r=new sc(s.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new sc(e,0),s=this.ds.firstAfterOrEqual(n);return Ar.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,Ar.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(t){this.ps=t,this.docs=new Rr(yr.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),r=s?s.size:0,i=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ar.resolve(n?n.document.mutableCopy():gi.newInvalidDocument(e))}getEntries(t,e){let n=Po();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():gi.newInvalidDocument(t))})),Ar.resolve(n)}getAllFromCollection(t,e,n){let s=Po();const r=new yr(e.child("")),i=this.docs.getIteratorFrom(r);for(;i.hasNext();){const{key:t,value:{document:r}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||Tr(Er(r),n)<=0||(s=s.insert(r.key,r.mutableCopy()))}return Ar.resolve(s)}getAllFromCollectionGroup(t,e,n,s){Qs()}Is(t,e){return Ar.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new oc(this)}getSize(t){return Ar.resolve(this.size)}}class oc extends Ya{constructor(t){super(),this.zn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.zn.addEntry(t,s)):this.zn.removeEntry(n)})),Ar.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t){this.persistence=t,this.Ts=new Vo((t=>yi(t)),wi),this.lastRemoteSnapshotVersion=dr.min(),this.highestTargetId=0,this.Es=0,this.As=new nc,this.targetCount=0,this.Rs=Xa.An()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),Ar.resolve()}getLastRemoteSnapshotVersion(t){return Ar.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ar.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Ar.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),Ar.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Xa(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,Ar.resolve()}updateTargetData(t,e){return this.vn(e),Ar.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,Ar.resolve()}removeTargets(t,e,n){let s=0;const r=[];return this.Ts.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(i),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Ar.waitFor(r).next((()=>s))}getTargetCount(t){return Ar.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return Ar.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Ar.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach((e=>{r.push(s.markPotentiallyOrphaned(t,e))})),Ar.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),Ar.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Ar.resolve(n)}containsKey(t,e){return Ar.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t,e){this.bs={},this.overlays={},this.Ps=new Dr(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new ac(this),this.indexManager=new za,this.remoteDocumentCache=function(t){return new ic(t)}((t=>this.referenceDelegate.Ss(t))),this.wt=new Ka(e),this.Ds=new tc(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ec,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new rc(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){Ks("MemoryPersistence","Starting transaction:",t);const s=new uc(this.Ps.next());return this.referenceDelegate.Cs(),n(s).next((t=>this.referenceDelegate.xs(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Ns(t,e){return Ar.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class uc extends Sr{constructor(t){super(),this.currentSequenceNumber=t}}class hc{constructor(t){this.persistence=t,this.ks=new nc,this.Os=null}static Ms(t){return new hc(t)}get Fs(){if(this.Os)return this.Os;throw Qs()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),Ar.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),Ar.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),Ar.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ar.forEach(this.Fs,(n=>{const s=yr.fromPath(n);return this.$s(t,s).next((t=>{t||e.removeEntry(s,dr.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return Ar.or([()=>Ar.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lc{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=s}static Vi(t,e){let n=zo(),s=zo();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new lc(t,e.fromCache,n,s)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){this.Si=!1}initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,s){return this.Ci(t,e).next((r=>r||this.xi(t,e,s,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return Ar.resolve(null)}xi(t,e,n,s){return Pi(e)||s.isEqual(dr.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((r=>{const i=this.ki(e,r);return this.Oi(e,i,n,s)?this.Ni(t,e):($s()<=o["in"].DEBUG&&Ks("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),zi(e)),this.Mi(t,i,e,wr(s,-1)))}))}ki(t,e){let n=new Mr(Xi(t));return e.forEach(((e,s)=>{Qi(t,s)&&(n=n.add(s))})),n}Oi(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Ni(t,e){return $s()<=o["in"].DEBUG&&Ks("QueryEngine","Using full collection scan to execute query:",zi(e)),this.Di.getDocumentsMatchingQuery(t,e,br.min())}Mi(t,e,n,s){return this.Di.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t,e,n,s){this.persistence=t,this.Fi=e,this.wt=s,this.$i=new Rr(ur),this.Bi=new Vo((t=>yi(t)),wi),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Za(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}}function gc(t,e,n,s){return new fc(t,e,n,s)}async function pc(t,e){const n=Xs(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((r=>(s=r,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],i=[];let o=zo();for(const t of s){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:r,addedBatchIds:i})))}))}))}function mc(t,e){const n=Xs(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),r=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const r=n.batch,i=r.keys();let o=Ar.resolve();return i.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);Ws(null!==i),e.version.compareTo(i)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=zo();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}function yc(t){const e=Xs(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function vc(t,e){const n=Xs(t),s=e.snapshotVersion;let r=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.Ui.newChangeBuffer({trackRemovals:!0});r=n.$i;const o=[];e.targetChanges.forEach(((i,a)=>{const c=r.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(t,i.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(Pr.EMPTY_BYTE_STRING,dr.min()).withLastLimboFreeSnapshotVersion(dr.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,s)),r=r.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Vs.updateTargetData(t,u))}));let a=Po(),c=zo();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(wc(t,i,e.documentUpdates).next((t=>{a=t.Gi,c=t.Qi}))),!s.isEqual(dr.min())){const e=n.Vs.getLastRemoteSnapshotVersion(t).next((e=>n.Vs.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return Ar.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.$i=r,t)))}function wc(t,e,n){let s=zo(),r=zo();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=Po();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),i.isNoDocument()&&i.version.isEqual(dr.min())?(e.removeEntry(n,i.readTime),s=s.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),s=s.insert(n,i)):Ks("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Gi:s,Qi:r}}))}function Ec(t,e){const n=Xs(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function bc(t,e){const n=Xs(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Vs.getTargetData(t,e).next((r=>r?(s=r,Ar.resolve(s)):n.Vs.allocateTargetId(t).next((r=>(s=new $a(e,r,0,t.currentSequenceNumber),n.Vs.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.$i.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.$i=n.$i.insert(t.targetId,t),n.Bi.set(e,t.targetId)),t}))}async function Tc(t,e,n){const s=Xs(t),r=s.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(t=>s.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!_r(t))throw t;Ks("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.$i=s.$i.remove(e),s.Bi.delete(r.target)}function Ic(t,e,n){const s=Xs(t);let r=dr.min(),i=zo();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=Xs(t),r=s.Bi.get(n);return void 0!==r?Ar.resolve(s.$i.get(r)):s.Vs.getTargetData(e,n)}(s,t,$i(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>s.Fi.getDocumentsMatchingQuery(t,e,n?r:dr.min(),n?i:zo()))).next((t=>(Sc(s,Wi(e),t),{documents:t,ji:i})))))}function Sc(t,e,n){let s=dr.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Li.set(e,s)}class Cc{constructor(){this.activeTargetIds=Wo()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ac{constructor(){this.Fr=new Cc,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new Cc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{Br(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Ks("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){Ks("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,s,r){const i=this.oo(t,e);Ks("RestConnection","Sending: ",i,n);const o={};return this.uo(o,s,r),this.co(t,i,o,n).then((t=>(Ks("RestConnection","Received: ",t),t)),(e=>{throw Hs("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}ao(t,e,n,s,r,i){return this.ro(t,e,n,s,r)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+js,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=Nc[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,s){return new Promise(((r,i)=>{const o=new Ps;o.listenOnce(Os.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Rs.NO_ERROR:const e=o.getResponseJson();Ks("Connection","XHR received:",JSON.stringify(e)),r(e);break;case Rs.TIMEOUT:Ks("Connection",'RPC "'+t+'" timed out'),i(new Js(Ys.DEADLINE_EXCEEDED,"Request time out"));break;case Rs.HTTP_ERROR:const n=o.getStatus();if(Ks("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Ys).indexOf(e)>=0?e:Ys.UNKNOWN}(t.status);i(new Js(e,t.message))}else i(new Js(Ys.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new Js(Ys.UNAVAILABLE,"Connection failed."));break;default:Qs()}}finally{Ks("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const s=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=ks(),i=Ls(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Vs({})),this.uo(o.initMessageHeaders,e,n),(0,a.uI)()||(0,a.b$)()||(0,a.d)()||(0,a.w1)()||(0,a.Mn)()||(0,a.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");Ks("Connection","Creating WebChannel: "+c,o);const u=r.createWebChannel(c,o);let h=!1,l=!1;const d=new kc({jr:t=>{l?Ks("Connection","Not sending because WebChannel is closed:",t):(h||(Ks("Connection","Opening WebChannel transport."),u.open(),h=!0),Ks("Connection","WebChannel sending:",t),u.send(t))},Wr:()=>u.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(u,Fs.EventType.OPEN,(()=>{l||Ks("Connection","WebChannel transport opened.")})),f(u,Fs.EventType.CLOSE,(()=>{l||(l=!0,Ks("Connection","WebChannel transport closed"),d.eo())})),f(u,Fs.EventType.ERROR,(t=>{l||(l=!0,Hs("Connection","WebChannel transport errored:",t),d.eo(new Js(Ys.UNAVAILABLE,"The operation could not be completed")))})),f(u,Fs.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];Ws(!!n);const s=n,r=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(r){Ks("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=Ro[t];if(void 0!==e)return Mo(e)}(t),n=r.message;void 0===e&&(e=Ys.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),l=!0,d.eo(new Js(e,n)),u.close()}else Ks("Connection","WebChannel received:",n),d.no(n)}})),f(i,xs.STAT_EVENT,(t=>{t.stat===Ms.PROXY?Ks("Connection","Detected buffering proxy"):t.stat===Ms.NOPROXY&&Ks("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.Zr()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(t){return new aa(t,!0)}class xc{constructor(t,e,n=1e3,s=1.5,r=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=s,this._o=r,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),s=Math.max(0,e-n);s>0&&Ks("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,s,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t,e,n,s,r,i,o,a){this.js=t,this.Ao=n,this.Ro=s,this.bo=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new xc(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===Ys.RESOURCE_EXHAUSTED?(Gs(e.toString()),Gs("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===Ys.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new Js(Ys.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return Ks("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(Ks("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Vc extends Mc{constructor(t,e,n,s,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,i),this.wt=r}Ko(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=ba(this.wt,t),n=function(t){if(!("targetChange"in t))return dr.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?dr.min():e.readTime?la(e.readTime):dr.min()}(t);return this.listener.Go(e,n)}Qo(t){const e={};e.database=va(this.wt),e.addTarget=function(t,e){let n;const s=e.target;return n=Ei(s)?{documents:Sa(t,s)}:{query:Ca(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ua(t,e.resumeToken):e.snapshotVersion.compareTo(dr.min())>0&&(n.readTime=ca(t,e.snapshotVersion.toTimestamp())),n}(this.wt,t);const n=_a(this.wt,t);n&&(e.labels=n),this.Mo(e)}jo(t){const e={};e.database=va(this.wt),e.removeTarget=t,this.Mo(e)}}class Fc extends Mc{constructor(t,e,n,s,r,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,i),this.wt=r,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(Ws(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const e=Ia(t.writeResults,t.commitTime),n=la(t.commitTime);return this.listener.Jo(n,e)}return Ws(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=va(this.wt),this.Mo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Ta(this.wt,t)))};this.Mo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=s,this.Zo=!1}tu(){if(this.Zo)throw new Js(Ys.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.bo.ro(t,e,n,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ys.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Js(Ys.UNKNOWN,t.toString())}))}ao(t,e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.bo.ao(t,e,n,r,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ys.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Js(Ys.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}}class Uc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Gs(e),this.su=!1):Ks("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t,e,n,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=r,this.du.Br((t=>{n.enqueueAndForget((async()=>{Wc(this)&&(Ks("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Xs(t);e.lu.add(4),await qc(e),e._u.set("Unknown"),e.lu.delete(4),await jc(e)}(this))}))})),this._u=new Uc(n,s)}}async function jc(t){if(Wc(t))for(const e of t.fu)await e(!0)}async function qc(t){for(const e of t.fu)await e(!1)}function $c(t,e){const n=Xs(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Qc(n)?zc(n):fu(n).Co()&&Gc(n,e))}function Kc(t,e){const n=Xs(t),s=fu(n);n.hu.delete(e),s.Co()&&Hc(n,e),0===n.hu.size&&(s.Co()?s.ko():Wc(n)&&n._u.set("Unknown"))}function Gc(t,e){t.wu.Nt(e.targetId),fu(t).Qo(e)}function Hc(t,e){t.wu.Nt(e),fu(t).jo(e)}function zc(t){t.wu=new na({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),fu(t).start(),t._u.iu()}function Qc(t){return Wc(t)&&!fu(t).Do()&&t.hu.size>0}function Wc(t){return 0===Xs(t).lu.size}function Xc(t){t.wu=void 0}async function Yc(t){t.hu.forEach(((e,n)=>{Gc(t,e)}))}async function Jc(t,e){Xc(t),Qc(t)?(t._u.uu(e),zc(t)):t._u.set("Unknown")}async function Zc(t,e,n){if(t._u.set("Online"),e instanceof ta&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.hu.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.hu.delete(s),t.wu.removeTarget(s))}(t,e)}catch(n){Ks("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await tu(t,n)}else if(e instanceof Jo?t.wu.Ut(e):e instanceof Zo?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(dr.min()))try{const e=await yc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.Yt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.hu.get(s);r&&t.hu.set(s,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(Pr.EMPTY_BYTE_STRING,n.snapshotVersion)),Hc(t,e);const s=new $a(n.target,e,1,n.sequenceNumber);Gc(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Ks("RemoteStore","Failed to raise snapshot:",e),await tu(t,e)}}async function tu(t,e,n){if(!_r(e))throw e;t.lu.add(1),await qc(t),t._u.set("Offline"),n||(n=()=>yc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Ks("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await jc(t)}))}function eu(t,e){return e().catch((n=>tu(t,n,e)))}async function nu(t){const e=Xs(t),n=gu(e);let s=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;su(e);)try{const t=await Ec(e.localStore,s);if(null===t){0===e.au.length&&n.ko();break}s=t.batchId,ru(e,t)}catch(t){await tu(e,t)}iu(e)&&ou(e)}function su(t){return Wc(t)&&t.au.length<10}function ru(t,e){t.au.push(e);const n=gu(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function iu(t){return Wc(t)&&!gu(t).Do()&&t.au.length>0}function ou(t){gu(t).start()}async function au(t){gu(t).Xo()}async function cu(t){const e=gu(t);for(const n of t.au)e.Ho(n.mutations)}async function uu(t,e,n){const s=t.au.shift(),r=ja.from(s,e,n);await eu(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await nu(t)}async function hu(t,e){e&&gu(t).zo&&await async function(t,e){if(n=e.code,xo(n)&&n!==Ys.ABORTED){const n=t.au.shift();gu(t).No(),await eu(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await nu(t)}var n}(t,e),iu(t)&&ou(t)}async function lu(t,e){const n=Xs(t);n.asyncQueue.verifyOperationInProgress(),Ks("RemoteStore","RemoteStore received new credentials");const s=Wc(n);n.lu.add(3),await qc(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await jc(n)}async function du(t,e){const n=Xs(t);e?(n.lu.delete(2),await jc(n)):e||(n.lu.add(2),await qc(n),n._u.set("Unknown"))}function fu(t){return t.mu||(t.mu=function(t,e,n){const s=Xs(t);return s.tu(),new Vc(e,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{zr:Yc.bind(null,t),Jr:Jc.bind(null,t),Go:Zc.bind(null,t)}),t.fu.push((async e=>{e?(t.mu.No(),Qc(t)?zc(t):t._u.set("Unknown")):(await t.mu.stop(),Xc(t))}))),t.mu}function gu(t){return t.gu||(t.gu=function(t,e,n){const s=Xs(t);return s.tu(),new Fc(e,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,n)}(t.datastore,t.asyncQueue,{zr:au.bind(null,t),Jr:hu.bind(null,t),Yo:cu.bind(null,t),Jo:uu.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await nu(t)):(await t.gu.stop(),t.au.length>0&&(Ks("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))}))),t.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class pu{constructor(t,e,n,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new Zs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,r){const i=Date.now()+n,o=new pu(t,e,i,s,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Js(Ys.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mu(t,e){if(Gs("AsyncQueue",`${e}: ${t}`),_r(t))return new Js(Ys.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(t){this.comparator=t?(e,n)=>t(e,n)||yr.comparator(e.key,n.key):(t,e)=>yr.comparator(t.key,e.key),this.keyedMap=Bo(),this.sortedSet=new Rr(this.comparator)}static emptySet(t){return new yu(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof yu))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new yu;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(){this.yu=new Rr(yr.comparator)}track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):Qs():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class wu{constructor(t,e,n,s,r,i,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new wu(t,e,yu.emptySet(e),r,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Gi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(){this.Iu=void 0,this.listeners=[]}}class bu{constructor(){this.queries=new Vo((t=>Hi(t)),Gi),this.onlineState="Unknown",this.Tu=new Set}}async function Tu(t,e){const n=Xs(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Eu),r)try{i.Iu=await n.onListen(s)}catch(t){const n=mu(t,`Initialization of query '${zi(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&Au(n)}async function Iu(t,e){const n=Xs(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),r=0===i.listeners.length)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Su(t,e){const n=Xs(t);let s=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Au(r)&&(s=!0);e.Iu=r}}s&&Au(n)}function Cu(t,e,n){const s=Xs(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Au(t){t.Tu.forEach((t=>{t.next()}))}class _u{constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new wu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),e=!0):this.Vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}Vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Du||!n)&&(!t.docs.isEmpty()||"Offline"===e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=wu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Du{constructor(t){this.key=t}}class Nu{constructor(t){this.key=t}}class ku{constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=zo(),this.mutatedKeys=zo(),this.Lu=Xi(t),this.Uu=new yu(this.Lu)}get qu(){return this.Fu}Ku(t,e){const n=e?e.Gu:new vu,s=e?e.Uu:this.Uu;let r=e?e.mutatedKeys:this.mutatedKeys,i=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const u=s.get(t),h=Qi(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Qu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Lu(h,a)>0||c&&this.Lu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(i=i.add(h),r=d?r.add(t):r.delete(t)):(i=i.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Uu:i,Gu:n,Oi:o,mutatedKeys:r}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const r=t.Gu.pu();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Qs()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Lu(t.doc,e.doc))),this.ju(n);const i=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==r.length||a?{snapshot:new wu(this.query,t.Uu,s,r,t.mutatedKeys,0===o,a,!1),zu:i}:{zu:i}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new vu,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach((t=>this.Fu=this.Fu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Fu=this.Fu.delete(t))),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=zo(),this.Uu.forEach((t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))}));const e=[];return t.forEach((t=>{this.Bu.has(t)||e.push(new Nu(t))})),this.Bu.forEach((n=>{t.has(n)||e.push(new Du(n))})),e}Ju(t){this.Fu=t.ji,this.Bu=zo();const e=this.Ku(t.documents);return this.applyChanges(e,!0)}Yu(){return wu.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class Lu{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Ru{constructor(t){this.key=t,this.Xu=!1}}class Ou{constructor(t,e,n,s,r,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.Zu={},this.tc=new Vo((t=>Hi(t)),Gi),this.ec=new Map,this.nc=new Set,this.sc=new Rr(yr.comparator),this.ic=new Map,this.rc=new nc,this.oc={},this.uc=new Map,this.cc=Xa.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function xu(t,e){const n=Zu(t);let s,r;const i=n.tc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Yu();else{const t=await bc(n.localStore,$i(e));n.isPrimaryClient&&$c(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,r=await Mu(n,e,s,"current"===i)}return r}async function Mu(t,e,n,s){t.hc=(e,n,s)=>async function(t,e,n,s){let r=e.view.Ku(n);r.Oi&&(r=await Ic(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ku(t,r))));const i=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,i);return zu(t,e.targetId,o.zu),o.snapshot}(t,e,n,s);const r=await Ic(t.localStore,e,!0),i=new ku(e,r.ji),o=i.Ku(r.documents),a=Yo.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),c=i.applyChanges(o,t.isPrimaryClient,a);zu(t,n,c.zu);const u=new Lu(e,n,i);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function Vu(t,e){const n=Xs(t),s=n.tc.get(e),r=n.ec.get(s.targetId);if(r.length>1)return n.ec.set(s.targetId,r.filter((t=>!Gi(t,e)))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Tc(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),Kc(n.remoteStore,s.targetId),Gu(n,s.targetId)})).catch(Cr)):(Gu(n,s.targetId),await Tc(n.localStore,s.targetId,!0))}async function Fu(t,e,n){const s=th(t);try{const t=await function(t,e){const n=Xs(t),s=lr.now(),r=e.reduce(((t,e)=>t.add(e.key)),zo());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Po(),c=zo();return n.Ui.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{i=r;const o=[];for(const t of e){const e=To(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new Co(t.key,e,fi(e.value.mapValue),mo.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:jo(i)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.oc[t.currentUser.toKey()];s||(s=new Rr(ur)),s=s.insert(e,n),t.oc[t.currentUser.toKey()]=s}(s,t.batchId,n),await Xu(s,t.changes),await nu(s.remoteStore)}catch(t){const e=mu(t,"Failed to persist write");n.reject(e)}}async function Pu(t,e){const n=Xs(t);try{const t=await vc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.ic.get(e);s&&(Ws(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.Xu=!0:t.modifiedDocuments.size>0?Ws(s.Xu):t.removedDocuments.size>0&&(Ws(s.Xu),s.Xu=!1))})),await Xu(n,t,e)}catch(t){await Cr(t)}}function Uu(t,e,n){const s=Xs(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.tc.forEach(((n,s)=>{const r=s.view.Eu(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=Xs(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const r of n.listeners)r.Eu(e)&&(s=!0)})),s&&Au(n)}(s.eventManager,e),t.length&&s.Zu.Go(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Bu(t,e,n){const s=Xs(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ic.get(e),i=r&&r.key;if(i){let t=new Rr(yr.comparator);t=t.insert(i,gi.newNoDocument(i,dr.min()));const n=zo().add(i),r=new Xo(dr.min(),new Map,new Mr(ur),t,n);await Pu(s,r),s.sc=s.sc.remove(i),s.ic.delete(e),Wu(s)}else await Tc(s.localStore,e,!1).then((()=>Gu(s,e,n))).catch(Cr)}async function ju(t,e){const n=Xs(t),s=e.batch.batchId;try{const t=await mc(n.localStore,e);Ku(n,s,null),$u(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Xu(n,t)}catch(t){await Cr(t)}}async function qu(t,e,n){const s=Xs(t);try{const t=await function(t,e){const n=Xs(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Ws(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);Ku(s,e,n),$u(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Xu(s,t)}catch(n){await Cr(n)}}function $u(t,e){(t.uc.get(e)||[]).forEach((t=>{t.resolve()})),t.uc.delete(e)}function Ku(t,e,n){const s=Xs(t);let r=s.oc[s.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),s.oc[s.currentUser.toKey()]=r}}function Gu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ec.get(e))t.tc.delete(s),n&&t.Zu.lc(s,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach((e=>{t.rc.containsKey(e)||Hu(t,e)}))}function Hu(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);null!==n&&(Kc(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Wu(t))}function zu(t,e,n){for(const s of n)s instanceof Du?(t.rc.addReference(s.key,e),Qu(t,s)):s instanceof Nu?(Ks("SyncEngine","Document no longer in limbo: "+s.key),t.rc.removeReference(s.key,e),t.rc.containsKey(s.key)||Hu(t,s.key)):Qs()}function Qu(t,e){const n=e.key,s=n.path.canonicalString();t.sc.get(n)||t.nc.has(s)||(Ks("SyncEngine","New document in limbo: "+n),t.nc.add(s),Wu(t))}function Wu(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new yr(gr.fromString(e)),s=t.cc.next();t.ic.set(s,new Ru(n)),t.sc=t.sc.insert(n,s),$c(t.remoteStore,new $a($i(Fi(n.path)),s,2,Dr.ot))}}async function Xu(t,e,n){const s=Xs(t),r=[],i=[],o=[];s.tc.isEmpty()||(s.tc.forEach(((t,a)=>{o.push(s.hc(a,e,n).then((t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),r.push(t);const e=lc.Vi(a.targetId,t);i.push(e)}})))})),await Promise.all(o),s.Zu.Go(r),await async function(t,e){const n=Xs(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ar.forEach(e,(e=>Ar.forEach(e.Pi,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Ar.forEach(e.vi,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!_r(t))throw t;Ks("LocalStore","Failed to update sequence numbers: "+t)}for(const s of e){const t=s.targetId;if(!s.fromCache){const e=n.$i.get(t),s=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(s);n.$i=n.$i.insert(t,r)}}}(s.localStore,i))}async function Yu(t,e){const n=Xs(t);if(!n.currentUser.isEqual(e)){Ks("SyncEngine","User change. New user:",e.toKey());const t=await pc(n.localStore,e);n.currentUser=e,function(t,e){t.uc.forEach((t=>{t.forEach((t=>{t.reject(new Js(Ys.CANCELLED,e))}))})),t.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Xu(n,t.Ki)}}function Ju(t,e){const n=Xs(t),s=n.ic.get(e);if(s&&s.Xu)return zo().add(s.key);{let t=zo();const s=n.ec.get(e);if(!s)return t;for(const e of s){const s=n.tc.get(e);t=t.unionWith(s.view.qu)}return t}}function Zu(t){const e=Xs(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ju.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Bu.bind(null,e),e.Zu.Go=Su.bind(null,e.eventManager),e.Zu.lc=Cu.bind(null,e.eventManager),e}function th(t){const e=Xs(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ju.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qu.bind(null,e),e}class eh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=Oc(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return gc(this.persistence,new dc,t.initialUser,this.wt)}_c(t){return new cc(hc.Ms,this.wt)}dc(t){return new Ac}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nh{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Uu(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Yu.bind(null,this.syncEngine),await du(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new bu}createDatastore(t){const e=Oc(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new Lc(s));var s;return function(t,e,n,s){return new Pc(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,r=t=>Uu(this.syncEngine,t,0),i=Dc.V()?new Dc:new _c,new Bc(e,n,s,r,i);var e,n,s,r,i}createSyncEngine(t,e){return function(t,e,n,s,r,i,o){const a=new Ou(t,e,n,s,r,i);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Xs(t);Ks("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await qc(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sh{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rh{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Bs.UNAUTHENTICATED,this.clientId=cr.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Ks("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Ks("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Js(Ys.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=mu(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function ih(t,e){t.asyncQueue.verifyOperationInProgress(),Ks("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await pc(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function oh(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ah(t);Ks("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>lu(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>lu(e.remoteStore,n))),t.onlineComponents=e}async function ah(t){return t.offlineComponents||(Ks("FirestoreClient","Using default OfflineComponentProvider"),await ih(t,new eh)),t.offlineComponents}async function ch(t){return t.onlineComponents||(Ks("FirestoreClient","Using default OnlineComponentProvider"),await oh(t,new nh)),t.onlineComponents}function uh(t){return ch(t).then((t=>t.syncEngine))}async function hh(t){const e=await ch(t),n=e.eventManager;return n.onListen=xu.bind(null,e.syncEngine),n.onUnlisten=Vu.bind(null,e.syncEngine),n}function lh(t,e,n={}){const s=new Zs;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,r){const i=new sh({next:i=>{e.enqueueAndForget((()=>Iu(t,o)));const a=i.docs.has(n);!a&&i.fromCache?r.reject(new Js(Ys.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&s&&"server"===s.source?r.reject(new Js(Ys.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(i)},error:t=>r.reject(t)}),o=new _u(Fi(n.path),i,{includeMetadataChanges:!0,Du:!0});return Tu(t,o)}(await hh(t),t.asyncQueue,e,n,s))),s.promise}function dh(t,e,n={}){const s=new Zs;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,r){const i=new sh({next:n=>{e.enqueueAndForget((()=>Iu(t,o))),n.fromCache&&"server"===s.source?r.reject(new Js(Ys.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new _u(n,i,{includeMetadataChanges:!0,Du:!0});return Tu(t,o)}(await hh(t),t.asyncQueue,e,n,s))),s.promise}const fh=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(t,e,n){if(!n)throw new Js(Ys.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ph(t,e,n,s){if(!0===e&&!0===s)throw new Js(Ys.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mh(t){if(!yr.isDocumentKey(t))throw new Js(Ys.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yh(t){if(yr.isDocumentKey(t))throw new Js(Ys.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vh(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Qs()}function wh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Js(Ys.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vh(t);throw new Js(Ys.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eh{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Js(Ys.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Js(Ys.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,ph("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Eh({}),this._settingsFrozen=!1,t instanceof zr?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Js(Ys.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zr(t.options.projectId)}(t))}get app(){if(!this._app)throw new Js(Ys.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Js(Ys.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Eh(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new er;switch(t.type){case"gapi":const e=t.client;return Ws(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new rr(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Js(Ys.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=fh.get(t);e&&(Ks("ComponentProvider","Removing Datastore"),fh.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Th{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sh(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Th(this.firestore,t,this._key)}}class Ih{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ih(this.firestore,t,this._query)}}class Sh extends Ih{constructor(t,e,n){super(t,e,Fi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Th(this.firestore,null,new yr(t))}withConverter(t){return new Sh(this.firestore,t,this._path)}}function Ch(t,e,...n){if(t=(0,a.m9)(t),gh("collection","path",e),t instanceof bh){const s=gr.fromString(e,...n);return yh(s),new Sh(t,null,s)}{if(!(t instanceof Th||t instanceof Sh))throw new Js(Ys.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(gr.fromString(e,...n));return yh(s),new Sh(t.firestore,null,s)}}function Ah(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=cr.I()),gh("doc","path",e),t instanceof bh){const s=gr.fromString(e,...n);return mh(s),new Th(t,null,new yr(s))}{if(!(t instanceof Th||t instanceof Sh))throw new Js(Ys.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(gr.fromString(e,...n));return mh(s),new Th(t.firestore,t instanceof Sh?t.converter:null,new yr(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _h{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new xc(this,"async_queue_retry"),this.Kc=()=>{const t=Rc();t&&Ks("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Rc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=Rc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new Zs;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(T){if(!_r(T))throw T;Ks("AsyncQueue","Operation failed with retryable error: "+T)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Gs("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const s=pu.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(s),s}Gc(){this.Bc&&Qs()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class Dh extends bh{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new _h,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Lh(this),this._firestoreClient.terminate()}}function Nh(t=(0,r.Mq)()){return(0,r.qX)(t,"firestore").getImmediate()}function kh(t){return t._firestoreClient||Lh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Lh(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new Hr(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new rh(t._authCredentials,t._appCheckCredentials,t._queue,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rh{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Js(Ys.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mr(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oh{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Oh(Pr.fromBase64String(t))}catch(t){throw new Js(Ys.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Oh(Pr.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Js(Ys.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Js(Ys.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ur(this._lat,t._lat)||ur(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=/^__.*__$/;class Fh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Co(t,this.data,this.fieldMask,e,this.fieldTransforms):new So(t,this.data,e,this.fieldTransforms)}}function Ph(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Qs()}}class Uh{constructor(t,e,n,s,r,i){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=s,void 0===r&&this.Xc(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new Uh(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.ta({path:n,na:!1});return s.sa(t),s}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.ta({path:n,na:!1});return s.Xc(),s}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return Xh(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(Ph(this.Zc)&&Vh.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class Bh{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||Oc(t)}aa(t,e,n,s=!1){return new Uh({Zc:t,methodName:e,ca:n,path:mr.emptyPath(),na:!1,ua:s},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function jh(t){const e=t._freezeSettings(),n=Oc(t._databaseId);return new Bh(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qh(t,e,n,s,r,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,r);Hh("Data must be an object, but it was:",o,s);const a=Kh(s,o);let c,u;if(i.merge)c=new Fr(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const s of i.mergeFields){const r=zh(e,s,n);if(!o.contains(r))throw new Js(Ys.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Yh(t,r)||t.push(r)}c=new Fr(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Fh(new di(a),c,u)}function $h(t,e){if(Gh(t=(0,a.m9)(t)))return Hh("Unsupported field value:",e,t),Kh(t,e);if(t instanceof xh)return function(t,e){if(!Ph(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const r of t){let t=$h(r,e.ra(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return to(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=lr.fromDate(t);return{timestampValue:ca(e.wt,n)}}if(t instanceof lr){const n=new lr(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ca(e.wt,n)}}if(t instanceof Mh)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Oh)return{bytesValue:ua(e.wt,t._byteString)};if(t instanceof Th){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.oa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:da(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${vh(t)}`)}(t,e)}function Kh(t,e){const n={};return Lr(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kr(t,((t,s)=>{const r=$h(s,e.ea(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function Gh(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof lr||t instanceof Mh||t instanceof Oh||t instanceof Th||t instanceof xh)}function Hh(t,e,n){if(!Gh(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=vh(n);throw"an object"===s?e.oa(t+" a custom object"):e.oa(t+" "+s)}}function zh(t,e,n){if((e=(0,a.m9)(e))instanceof Rh)return e._internalPath;if("string"==typeof e)return Wh(t,e);throw Xh("Field path arguments must be of type string or ",t,!1,void 0,n)}const Qh=new RegExp("[~\\*/\\[\\]]");function Wh(t,e,n){if(e.search(Qh)>=0)throw Xh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Rh(...e.split("."))._internalPath}catch(s){throw Xh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xh(t,e,n,s,r){const i=s&&!s.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new Js(Ys.INVALID_ARGUMENT,a+t+c)}function Yh(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(t,e,n,s,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Th(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Zh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(tl("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Zh extends Jh{data(){return super.data()}}function tl(t,e){return"string"==typeof e?Wh(t,e):e instanceof Rh?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class nl extends Jh{constructor(t,e,n,s,r,i){super(t,e,n,s,i),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new sl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(tl("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class sl extends nl{data(t={}){return super.data(t)}}class rl{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new el(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new sl(this._firestore,this._userDataWriter,n.key,n,new el(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Js(Ys.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new sl(t._firestore,t._userDataWriter,n.doc.key,n.doc,new el(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new sl(t._firestore,t._userDataWriter,e.doc.key,e.doc,new el(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,i=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:il(e.type),doc:s,oldIndex:r,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function il(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Qs()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ol(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Js(Ys.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class al{convertValue(t,e="none"){switch(Jr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return jr(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(qr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Qs()}}convertObject(t,e){const n={};return kr(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new Mh(jr(t.latitude),jr(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Kr(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Gr(t));default:return null}}convertTimestamp(t){const e=Br(t);return new lr(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=gr.fromString(t);Ws(Va(n));const s=new zr(n.get(1),n.get(3)),r=new yr(n.popFirst(5));return s.isEqual(e)||Gs(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ul(t){t=wh(t,Th);const e=wh(t.firestore,Dh);return lh(kh(e),t._key).then((n=>ml(e,t,n)))}class hl extends al{constructor(t){super(),this.firestore=t}convertBytes(t){return new Oh(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Th(this.firestore,null,e)}}function ll(t){t=wh(t,Ih);const e=wh(t.firestore,Dh),n=kh(e),s=new hl(e);return ol(t._query),dh(n,t._query).then((n=>new rl(e,s,t,n)))}function dl(t,e,n){t=wh(t,Th);const s=wh(t.firestore,Dh),r=cl(t.converter,e,n);return pl(s,[qh(jh(s),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,mo.none())])}function fl(t){return pl(wh(t.firestore,Dh),[new No(t._key,mo.none())])}function gl(t,e){const n=wh(t.firestore,Dh),s=Ah(t),r=cl(t.converter,e);return pl(n,[qh(jh(t.firestore),"addDoc",s._key,r,null!==t.converter,{}).toMutation(s._key,mo.exists(!1))]).then((()=>s))}function pl(t,e){return function(t,e){const n=new Zs;return t.asyncQueue.enqueueAndForget((async()=>Fu(await uh(t),e,n))),n.promise}(kh(t),e)}function ml(t,e,n){const s=n.docs.get(e._key),r=new hl(t);return new nl(t,r,e._key,s,new el(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){js=t}(r.Jn),(0,r.Xd)(new i.wA("firestore",((t,{options:n})=>{const s=t.getProvider("app").getImmediate(),r=new Dh(s,new nr(t.getProvider("auth-internal")),new or(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),r._setSettings(n),r}),"PUBLIC")),(0,r.KN)(Us,"3.4.13",t),(0,r.KN)(Us,"3.4.13","esm2017")}()},816:function(t,e,n){n.d(e,{Jn:function(){return pt},qX:function(){return lt},Xd:function(){return ht},Mq:function(){return yt},ZF:function(){return mt},KN:function(){return vt}});var s=n(463),r=n(333),i=n(444);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const l=new WeakMap,d=new WeakMap,f=new WeakMap,g=new WeakMap,p=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",i)},r=()=>{e(T(t.result)),s()},i=()=>{n(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&l.set(e,t)})).catch((()=>{})),p.set(e,t),e}function y(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",i),t.removeEventListener("abort",i)},r=()=>{e(),s()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",i),t.addEventListener("abort",i)}));d.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return T(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function E(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?h().includes(t)?function(...e){return t.apply(I(this),e),T(l.get(this))}:function(...e){return T(t.apply(I(this),e))}:function(e,...n){const s=t.call(I(this),e,...n);return f.set(s,e.sort?e.sort():[e]),T(s)}}function b(t){return"function"===typeof t?E(t):(t instanceof IDBTransaction&&y(t),o(t,u())?new Proxy(t,v):t)}function T(t){if(t instanceof IDBRequest)return m(t);if(g.has(t))return g.get(t);const e=b(t);return e!==t&&(g.set(t,e),p.set(e,t)),e}const I=t=>p.get(t);function S(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=T(o);return s&&o.addEventListener("upgradeneeded",(t=>{s(T(o.result),t.oldVersion,t.newVersion,T(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{i&&t.addEventListener("close",(()=>i())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const C=["get","getKey","getAll","getAllKeys","count"],A=["put","add","delete","clear"],_=new Map;function D(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(_.get(e))return _.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=A.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!r&&!C.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,r?"readwrite":"readonly");let o=i.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&i.done]))[0]};return _.set(e,i),i}w((t=>({...t,get:(e,n,s)=>D(e,n)||t.get(e,n,s),has:(e,n)=>!!D(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(k(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function k(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const L="@firebase/app",R="0.7.29",O=new r.Yd("@firebase/app"),x="@firebase/app-compat",M="@firebase/analytics-compat",V="@firebase/analytics",F="@firebase/app-check-compat",P="@firebase/app-check",U="@firebase/auth",B="@firebase/auth-compat",j="@firebase/database",q="@firebase/database-compat",$="@firebase/functions",K="@firebase/functions-compat",G="@firebase/installations",H="@firebase/installations-compat",z="@firebase/messaging",Q="@firebase/messaging-compat",W="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",st="firebase",rt="9.9.1",it="[DEFAULT]",ot={[L]:"fire-core",[x]:"fire-core-compat",[V]:"fire-analytics",[M]:"fire-analytics-compat",[P]:"fire-app-check",[F]:"fire-app-check-compat",[U]:"fire-auth",[B]:"fire-auth-compat",[j]:"fire-rtdb",[q]:"fire-rtdb-compat",[$]:"fire-fn",[K]:"fire-fn-compat",[G]:"fire-iid",[H]:"fire-iid-compat",[z]:"fire-fcm",[Q]:"fire-fcm-compat",[W]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[st]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){O.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ht(t){const e=t.name;if(ct.has(e))return O.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function lt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ft=new i.LL("app","Firebase",dt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new s.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=rt;function mt(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:it,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!==typeof r||!r)throw ft.create("bad-app-name",{appName:String(r)});const o=at.get(r);if(o){if((0,i.vZ)(t,o.options)&&(0,i.vZ)(n,o.config))return o;throw ft.create("duplicate-app",{appName:r})}const a=new s.H0(r);for(const s of ct.values())a.addComponent(s);const c=new gt(t,n,a);return at.set(r,c),c}function yt(t=it){const e=at.get(t);if(!e)throw ft.create("no-app",{appName:t});return e}function vt(t,e,n){var r;let i=null!==(r=ot[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void O.warn(t.join(" "))}ht(new s.wA(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wt="firebase-heartbeat-database",Et=1,bt="firebase-heartbeat-store";let Tt=null;function It(){return Tt||(Tt=S(wt,Et,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bt)}}}).catch((t=>{throw ft.create("storage-open",{originalErrorMessage:t.message})}))),Tt}async function St(t){var e;try{const e=await It();return e.transaction(bt).objectStore(bt).get(At(t))}catch(n){throw ft.create("storage-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message})}}async function Ct(t,e){var n;try{const n=await It(),s=n.transaction(bt,"readwrite"),r=s.objectStore(bt);return await r.put(e,At(t)),s.done}catch(s){throw ft.create("storage-set",{originalErrorMessage:null===(n=s)||void 0===n?void 0:n.message})}}function At(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=1024,Dt=2592e6;class Nt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Rt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=kt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Dt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=kt(),{heartbeatsToSend:e,unsentEntries:n}=Lt(this._heartbeatsCache.heartbeats),s=(0,i.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function kt(){const t=new Date;return t.toISOString().substring(0,10)}function Lt(t,e=_t){const n=[];let s=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Ot(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ot(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Rt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await St(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ct(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ct(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Ot(t){return(0,i.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t){ht(new s.wA("platform-logger",(t=>new N(t)),"PRIVATE")),ht(new s.wA("heartbeat",(t=>new Nt(t)),"PRIVATE")),vt(L,R,t),vt(L,R,"esm2017"),vt("fire-js","")}xt("")},463:function(t,e,n){n.d(e,{H0:function(){return u},wA:function(){return r}});var s=n(444);class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new s.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),s=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:s});n.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);n===t&&i.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&t(i,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(s){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(s){}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===i?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},333:function(t,e,n){n.d(e,{Yd:function(){return u},in:function(){return r}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const i={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),r=a[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${s}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}}}]);
//# sourceMappingURL=315.2466a673.js.map