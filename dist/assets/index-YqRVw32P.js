function cv(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Tu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ih={exports:{}},Cs={},oh={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hi=Symbol.for("react.element"),dv=Symbol.for("react.portal"),fv=Symbol.for("react.fragment"),hv=Symbol.for("react.strict_mode"),pv=Symbol.for("react.profiler"),mv=Symbol.for("react.provider"),gv=Symbol.for("react.context"),vv=Symbol.for("react.forward_ref"),yv=Symbol.for("react.suspense"),_v=Symbol.for("react.memo"),wv=Symbol.for("react.lazy"),nd=Symbol.iterator;function Ev(t){return t===null||typeof t!="object"?null:(t=nd&&t[nd]||t["@@iterator"],typeof t=="function"?t:null)}var sh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ah=Object.assign,lh={};function Nr(t,e,n){this.props=t,this.context=e,this.refs=lh,this.updater=n||sh}Nr.prototype.isReactComponent={};Nr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Nr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function uh(){}uh.prototype=Nr.prototype;function Pu(t,e,n){this.props=t,this.context=e,this.refs=lh,this.updater=n||sh}var Cu=Pu.prototype=new uh;Cu.constructor=Pu;ah(Cu,Nr.prototype);Cu.isPureReactComponent=!0;var rd=Array.isArray,ch=Object.prototype.hasOwnProperty,Ou={current:null},dh={key:!0,ref:!0,__self:!0,__source:!0};function fh(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)ch.call(e,r)&&!dh.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Hi,type:t,key:o,ref:s,props:i,_owner:Ou.current}}function Iv(t,e){return{$$typeof:Hi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Hi}function Sv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var id=/\/+/g;function ia(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Sv(""+t.key):e.toString(36)}function ko(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Hi:case dv:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+ia(s,0):r,rd(i)?(n="",t!=null&&(n=t.replace(id,"$&/")+"/"),ko(i,e,n,"",function(u){return u})):i!=null&&(bu(i)&&(i=Iv(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(id,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",rd(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+ia(o,a);s+=ko(o,e,n,l,i)}else if(l=Ev(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+ia(o,a++),s+=ko(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function oo(t,e,n){if(t==null)return t;var r=[],i=0;return ko(t,r,"","",function(o){return e.call(n,o,i++)}),r}function kv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Pe={current:null},To={transition:null},Tv={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:To,ReactCurrentOwner:Ou};function hh(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:oo,forEach:function(t,e,n){oo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return oo(t,function(){e++}),e},toArray:function(t){return oo(t,function(e){return e})||[]},only:function(t){if(!bu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};D.Component=Nr;D.Fragment=fv;D.Profiler=pv;D.PureComponent=Pu;D.StrictMode=hv;D.Suspense=yv;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tv;D.act=hh;D.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ah({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Ou.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ch.call(e,l)&&!dh.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Hi,type:t.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(t){return t={$$typeof:gv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:mv,_context:t},t.Consumer=t};D.createElement=fh;D.createFactory=function(t){var e=fh.bind(null,t);return e.type=t,e};D.createRef=function(){return{current:null}};D.forwardRef=function(t){return{$$typeof:vv,render:t}};D.isValidElement=bu;D.lazy=function(t){return{$$typeof:wv,_payload:{_status:-1,_result:t},_init:kv}};D.memo=function(t,e){return{$$typeof:_v,type:t,compare:e===void 0?null:e}};D.startTransition=function(t){var e=To.transition;To.transition={};try{t()}finally{To.transition=e}};D.unstable_act=hh;D.useCallback=function(t,e){return Pe.current.useCallback(t,e)};D.useContext=function(t){return Pe.current.useContext(t)};D.useDebugValue=function(){};D.useDeferredValue=function(t){return Pe.current.useDeferredValue(t)};D.useEffect=function(t,e){return Pe.current.useEffect(t,e)};D.useId=function(){return Pe.current.useId()};D.useImperativeHandle=function(t,e,n){return Pe.current.useImperativeHandle(t,e,n)};D.useInsertionEffect=function(t,e){return Pe.current.useInsertionEffect(t,e)};D.useLayoutEffect=function(t,e){return Pe.current.useLayoutEffect(t,e)};D.useMemo=function(t,e){return Pe.current.useMemo(t,e)};D.useReducer=function(t,e,n){return Pe.current.useReducer(t,e,n)};D.useRef=function(t){return Pe.current.useRef(t)};D.useState=function(t){return Pe.current.useState(t)};D.useSyncExternalStore=function(t,e,n){return Pe.current.useSyncExternalStore(t,e,n)};D.useTransition=function(){return Pe.current.useTransition()};D.version="18.3.1";oh.exports=D;var P=oh.exports;const $=Tu(P),Pv=cv({__proto__:null,default:$},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv=P,Ov=Symbol.for("react.element"),bv=Symbol.for("react.fragment"),Rv=Object.prototype.hasOwnProperty,Nv=Cv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xv={key:!0,ref:!0,__self:!0,__source:!0};function ph(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)Rv.call(e,r)&&!xv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ov,type:t,key:o,ref:s,props:i,_owner:Nv.current}}Cs.Fragment=bv;Cs.jsx=ph;Cs.jsxs=ph;ih.exports=Cs;var v=ih.exports,Ha={},mh={exports:{}},We={},gh={exports:{}},vh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,x){var A=R.length;R.push(x);e:for(;0<A;){var ee=A-1>>>1,ue=R[ee];if(0<i(ue,x))R[ee]=x,R[A]=ue,A=ee;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var x=R[0],A=R.pop();if(A!==x){R[0]=A;e:for(var ee=0,ue=R.length,ro=ue>>>1;ee<ro;){var hn=2*(ee+1)-1,ra=R[hn],pn=hn+1,io=R[pn];if(0>i(ra,A))pn<ue&&0>i(io,ra)?(R[ee]=io,R[pn]=A,ee=pn):(R[ee]=ra,R[hn]=A,ee=hn);else if(pn<ue&&0>i(io,A))R[ee]=io,R[pn]=A,ee=pn;else break e}}return x}function i(R,x){var A=R.sortIndex-x.sortIndex;return A!==0?A:R.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,c=null,h=3,y=!1,_=!1,E=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var x=n(u);x!==null;){if(x.callback===null)r(u);else if(x.startTime<=R)r(u),x.sortIndex=x.expirationTime,e(l,x);else break;x=n(u)}}function w(R){if(E=!1,m(R),!_)if(n(l)!==null)_=!0,ta(T);else{var x=n(u);x!==null&&na(w,x.startTime-R)}}function T(R,x){_=!1,E&&(E=!1,p(N),N=-1),y=!0;var A=h;try{for(m(x),c=n(l);c!==null&&(!(c.expirationTime>x)||R&&!Xe());){var ee=c.callback;if(typeof ee=="function"){c.callback=null,h=c.priorityLevel;var ue=ee(c.expirationTime<=x);x=t.unstable_now(),typeof ue=="function"?c.callback=ue:c===n(l)&&r(l),m(x)}else r(l);c=n(l)}if(c!==null)var ro=!0;else{var hn=n(u);hn!==null&&na(w,hn.startTime-x),ro=!1}return ro}finally{c=null,h=A,y=!1}}var C=!1,O=null,N=-1,W=5,L=-1;function Xe(){return!(t.unstable_now()-L<W)}function zr(){if(O!==null){var R=t.unstable_now();L=R;var x=!0;try{x=O(!0,R)}finally{x?Wr():(C=!1,O=null)}}else C=!1}var Wr;if(typeof f=="function")Wr=function(){f(zr)};else if(typeof MessageChannel<"u"){var td=new MessageChannel,uv=td.port2;td.port1.onmessage=zr,Wr=function(){uv.postMessage(null)}}else Wr=function(){k(zr,0)};function ta(R){O=R,C||(C=!0,Wr())}function na(R,x){N=k(function(){R(t.unstable_now())},x)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){_||y||(_=!0,ta(T))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(h){case 1:case 2:case 3:var x=3;break;default:x=h}var A=h;h=x;try{return R()}finally{h=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,x){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var A=h;h=R;try{return x()}finally{h=A}},t.unstable_scheduleCallback=function(R,x,A){var ee=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?ee+A:ee):A=ee,R){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=A+ue,R={id:d++,callback:x,priorityLevel:R,startTime:A,expirationTime:ue,sortIndex:-1},A>ee?(R.sortIndex=A,e(u,R),n(l)===null&&R===n(u)&&(E?(p(N),N=-1):E=!0,na(w,A-ee))):(R.sortIndex=ue,e(l,R),_||y||(_=!0,ta(T))),R},t.unstable_shouldYield=Xe,t.unstable_wrapCallback=function(R){var x=h;return function(){var A=h;h=x;try{return R.apply(this,arguments)}finally{h=A}}}})(vh);gh.exports=vh;var Av=gh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv=P,ze=Av;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yh=new Set,_i={};function jn(t,e){wr(t,e),wr(t+"Capture",e)}function wr(t,e){for(_i[t]=e,t=0;t<e.length;t++)yh.add(e[t])}var bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ga=Object.prototype.hasOwnProperty,Dv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,od={},sd={};function jv(t){return Ga.call(sd,t)?!0:Ga.call(od,t)?!1:Dv.test(t)?sd[t]=!0:(od[t]=!0,!1)}function Mv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Uv(t,e,n,r){if(e===null||typeof e>"u"||Mv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ce(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){me[t]=new Ce(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];me[e]=new Ce(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){me[t]=new Ce(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){me[t]=new Ce(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){me[t]=new Ce(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){me[t]=new Ce(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){me[t]=new Ce(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){me[t]=new Ce(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){me[t]=new Ce(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ru=/[\-:]([a-z])/g;function Nu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ru,Nu);me[e]=new Ce(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ru,Nu);me[e]=new Ce(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ru,Nu);me[e]=new Ce(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){me[t]=new Ce(t,1,!1,t.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){me[t]=new Ce(t,1,!1,t.toLowerCase(),null,!0,!0)});function xu(t,e,n,r){var i=me.hasOwnProperty(e)?me[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Uv(e,n,i,r)&&(n=null),r||i===null?jv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Lt=Lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,so=Symbol.for("react.element"),qn=Symbol.for("react.portal"),Yn=Symbol.for("react.fragment"),Au=Symbol.for("react.strict_mode"),Ka=Symbol.for("react.profiler"),_h=Symbol.for("react.provider"),wh=Symbol.for("react.context"),Lu=Symbol.for("react.forward_ref"),qa=Symbol.for("react.suspense"),Ya=Symbol.for("react.suspense_list"),Du=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),Eh=Symbol.for("react.offscreen"),ad=Symbol.iterator;function Vr(t){return t===null||typeof t!="object"?null:(t=ad&&t[ad]||t["@@iterator"],typeof t=="function"?t:null)}var q=Object.assign,oa;function ei(t){if(oa===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);oa=e&&e[1]||""}return`
`+oa+t}var sa=!1;function aa(t,e){if(!t||sa)return"";sa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{sa=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ei(t):""}function Fv(t){switch(t.tag){case 5:return ei(t.type);case 16:return ei("Lazy");case 13:return ei("Suspense");case 19:return ei("SuspenseList");case 0:case 2:case 15:return t=aa(t.type,!1),t;case 11:return t=aa(t.type.render,!1),t;case 1:return t=aa(t.type,!0),t;default:return""}}function Qa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yn:return"Fragment";case qn:return"Portal";case Ka:return"Profiler";case Au:return"StrictMode";case qa:return"Suspense";case Ya:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wh:return(t.displayName||"Context")+".Consumer";case _h:return(t._context.displayName||"Context")+".Provider";case Lu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Du:return e=t.displayName||null,e!==null?e:Qa(t.type)||"Memo";case Ft:e=t._payload,t=t._init;try{return Qa(t(e))}catch{}}return null}function $v(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(e);case 8:return e===Au?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ih(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zv(t){var e=Ih(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ao(t){t._valueTracker||(t._valueTracker=zv(t))}function Sh(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ih(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function $o(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ja(t,e){var n=e.checked;return q({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ld(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=rn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function kh(t,e){e=e.checked,e!=null&&xu(t,"checked",e,!1)}function Xa(t,e){kh(t,e);var n=rn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Za(t,e.type,n):e.hasOwnProperty("defaultValue")&&Za(t,e.type,rn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ud(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Za(t,e,n){(e!=="number"||$o(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ti=Array.isArray;function ar(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+rn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function el(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return q({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(ti(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rn(n)}}function Th(t,e){var n=rn(e.value),r=rn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function dd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ph(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tl(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ph(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var lo,Ch=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(lo=lo||document.createElement("div"),lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wv=["Webkit","ms","Moz","O"];Object.keys(ai).forEach(function(t){Wv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ai[e]=ai[t]})});function Oh(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ai.hasOwnProperty(t)&&ai[t]?(""+e).trim():e+"px"}function bh(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Oh(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Vv=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nl(t,e){if(e){if(Vv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function rl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var il=null;function ju(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ol=null,lr=null,ur=null;function fd(t){if(t=qi(t)){if(typeof ol!="function")throw Error(I(280));var e=t.stateNode;e&&(e=xs(e),ol(t.stateNode,t.type,e))}}function Rh(t){lr?ur?ur.push(t):ur=[t]:lr=t}function Nh(){if(lr){var t=lr,e=ur;if(ur=lr=null,fd(t),e)for(t=0;t<e.length;t++)fd(e[t])}}function xh(t,e){return t(e)}function Ah(){}var la=!1;function Lh(t,e,n){if(la)return t(e,n);la=!0;try{return xh(t,e,n)}finally{la=!1,(lr!==null||ur!==null)&&(Ah(),Nh())}}function Ei(t,e){var n=t.stateNode;if(n===null)return null;var r=xs(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var sl=!1;if(bt)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){sl=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{sl=!1}function Bv(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var li=!1,zo=null,Wo=!1,al=null,Hv={onError:function(t){li=!0,zo=t}};function Gv(t,e,n,r,i,o,s,a,l){li=!1,zo=null,Bv.apply(Hv,arguments)}function Kv(t,e,n,r,i,o,s,a,l){if(Gv.apply(this,arguments),li){if(li){var u=zo;li=!1,zo=null}else throw Error(I(198));Wo||(Wo=!0,al=u)}}function Mn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Dh(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hd(t){if(Mn(t)!==t)throw Error(I(188))}function qv(t){var e=t.alternate;if(!e){if(e=Mn(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return hd(i),t;if(o===r)return hd(i),e;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function jh(t){return t=qv(t),t!==null?Mh(t):null}function Mh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Mh(t);if(e!==null)return e;t=t.sibling}return null}var Uh=ze.unstable_scheduleCallback,pd=ze.unstable_cancelCallback,Yv=ze.unstable_shouldYield,Qv=ze.unstable_requestPaint,te=ze.unstable_now,Jv=ze.unstable_getCurrentPriorityLevel,Mu=ze.unstable_ImmediatePriority,Fh=ze.unstable_UserBlockingPriority,Vo=ze.unstable_NormalPriority,Xv=ze.unstable_LowPriority,$h=ze.unstable_IdlePriority,Os=null,mt=null;function Zv(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Os,t,void 0,(t.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:ny,ey=Math.log,ty=Math.LN2;function ny(t){return t>>>=0,t===0?32:31-(ey(t)/ty|0)|0}var uo=64,co=4194304;function ni(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ni(a):(o&=s,o!==0&&(r=ni(o)))}else s=n&~i,s!==0?r=ni(s):o!==0&&(r=ni(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rt(e),i=1<<n,r|=t[n],e&=~i;return r}function ry(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iy(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-rt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=ry(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function ll(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function zh(){var t=uo;return uo<<=1,!(uo&4194240)&&(uo=64),t}function ua(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Gi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rt(e),t[e]=n}function oy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-rt(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Uu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var U=0;function Wh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Vh,Fu,Bh,Hh,Gh,ul=!1,fo=[],Kt=null,qt=null,Yt=null,Ii=new Map,Si=new Map,zt=[],sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function md(t,e){switch(t){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Yt=null;break;case"pointerover":case"pointerout":Ii.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(e.pointerId)}}function Hr(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=qi(e),e!==null&&Fu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ay(t,e,n,r,i){switch(e){case"focusin":return Kt=Hr(Kt,t,e,n,r,i),!0;case"dragenter":return qt=Hr(qt,t,e,n,r,i),!0;case"mouseover":return Yt=Hr(Yt,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ii.set(o,Hr(Ii.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Si.set(o,Hr(Si.get(o)||null,t,e,n,r,i)),!0}return!1}function Kh(t){var e=yn(t.target);if(e!==null){var n=Mn(e);if(n!==null){if(e=n.tag,e===13){if(e=Dh(n),e!==null){t.blockedOn=e,Gh(t.priority,function(){Bh(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Po(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cl(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);il=r,n.target.dispatchEvent(r),il=null}else return e=qi(n),e!==null&&Fu(e),t.blockedOn=n,!1;e.shift()}return!0}function gd(t,e,n){Po(t)&&n.delete(e)}function ly(){ul=!1,Kt!==null&&Po(Kt)&&(Kt=null),qt!==null&&Po(qt)&&(qt=null),Yt!==null&&Po(Yt)&&(Yt=null),Ii.forEach(gd),Si.forEach(gd)}function Gr(t,e){t.blockedOn===e&&(t.blockedOn=null,ul||(ul=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,ly)))}function ki(t){function e(i){return Gr(i,t)}if(0<fo.length){Gr(fo[0],t);for(var n=1;n<fo.length;n++){var r=fo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Kt!==null&&Gr(Kt,t),qt!==null&&Gr(qt,t),Yt!==null&&Gr(Yt,t),Ii.forEach(e),Si.forEach(e),n=0;n<zt.length;n++)r=zt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<zt.length&&(n=zt[0],n.blockedOn===null);)Kh(n),n.blockedOn===null&&zt.shift()}var cr=Lt.ReactCurrentBatchConfig,Ho=!0;function uy(t,e,n,r){var i=U,o=cr.transition;cr.transition=null;try{U=1,$u(t,e,n,r)}finally{U=i,cr.transition=o}}function cy(t,e,n,r){var i=U,o=cr.transition;cr.transition=null;try{U=4,$u(t,e,n,r)}finally{U=i,cr.transition=o}}function $u(t,e,n,r){if(Ho){var i=cl(t,e,n,r);if(i===null)_a(t,e,r,Go,n),md(t,r);else if(ay(i,t,e,n,r))r.stopPropagation();else if(md(t,r),e&4&&-1<sy.indexOf(t)){for(;i!==null;){var o=qi(i);if(o!==null&&Vh(o),o=cl(t,e,n,r),o===null&&_a(t,e,r,Go,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else _a(t,e,r,null,n)}}var Go=null;function cl(t,e,n,r){if(Go=null,t=ju(r),t=yn(t),t!==null)if(e=Mn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Dh(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Go=t,null}function qh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jv()){case Mu:return 1;case Fh:return 4;case Vo:case Xv:return 16;case $h:return 536870912;default:return 16}default:return 16}}var Vt=null,zu=null,Co=null;function Yh(){if(Co)return Co;var t,e=zu,n=e.length,r,i="value"in Vt?Vt.value:Vt.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Co=i.slice(t,1<r?1-r:void 0)}function Oo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ho(){return!0}function vd(){return!1}function Ve(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ho:vd,this.isPropagationStopped=vd,this}return q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ho)},persist:function(){},isPersistent:ho}),e}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wu=Ve(xr),Ki=q({},xr,{view:0,detail:0}),dy=Ve(Ki),ca,da,Kr,bs=q({},Ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Kr&&(Kr&&t.type==="mousemove"?(ca=t.screenX-Kr.screenX,da=t.screenY-Kr.screenY):da=ca=0,Kr=t),ca)},movementY:function(t){return"movementY"in t?t.movementY:da}}),yd=Ve(bs),fy=q({},bs,{dataTransfer:0}),hy=Ve(fy),py=q({},Ki,{relatedTarget:0}),fa=Ve(py),my=q({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),gy=Ve(my),vy=q({},xr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yy=Ve(vy),_y=q({},xr,{data:0}),_d=Ve(_y),wy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Iy[t])?!!e[t]:!1}function Vu(){return Sy}var ky=q({},Ki,{key:function(t){if(t.key){var e=wy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Oo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ey[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(t){return t.type==="keypress"?Oo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ty=Ve(ky),Py=q({},bs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wd=Ve(Py),Cy=q({},Ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),Oy=Ve(Cy),by=q({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ry=Ve(by),Ny=q({},bs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xy=Ve(Ny),Ay=[9,13,27,32],Bu=bt&&"CompositionEvent"in window,ui=null;bt&&"documentMode"in document&&(ui=document.documentMode);var Ly=bt&&"TextEvent"in window&&!ui,Qh=bt&&(!Bu||ui&&8<ui&&11>=ui),Ed=" ",Id=!1;function Jh(t,e){switch(t){case"keyup":return Ay.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qn=!1;function Dy(t,e){switch(t){case"compositionend":return Xh(e);case"keypress":return e.which!==32?null:(Id=!0,Ed);case"textInput":return t=e.data,t===Ed&&Id?null:t;default:return null}}function jy(t,e){if(Qn)return t==="compositionend"||!Bu&&Jh(t,e)?(t=Yh(),Co=zu=Vt=null,Qn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Qh&&e.locale!=="ko"?null:e.data;default:return null}}var My={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!My[t.type]:e==="textarea"}function Zh(t,e,n,r){Rh(r),e=Ko(e,"onChange"),0<e.length&&(n=new Wu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ci=null,Ti=null;function Uy(t){cp(t,0)}function Rs(t){var e=Zn(t);if(Sh(e))return t}function Fy(t,e){if(t==="change")return e}var ep=!1;if(bt){var ha;if(bt){var pa="oninput"in document;if(!pa){var kd=document.createElement("div");kd.setAttribute("oninput","return;"),pa=typeof kd.oninput=="function"}ha=pa}else ha=!1;ep=ha&&(!document.documentMode||9<document.documentMode)}function Td(){ci&&(ci.detachEvent("onpropertychange",tp),Ti=ci=null)}function tp(t){if(t.propertyName==="value"&&Rs(Ti)){var e=[];Zh(e,Ti,t,ju(t)),Lh(Uy,e)}}function $y(t,e,n){t==="focusin"?(Td(),ci=e,Ti=n,ci.attachEvent("onpropertychange",tp)):t==="focusout"&&Td()}function zy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rs(Ti)}function Wy(t,e){if(t==="click")return Rs(e)}function Vy(t,e){if(t==="input"||t==="change")return Rs(e)}function By(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ot=typeof Object.is=="function"?Object.is:By;function Pi(t,e){if(ot(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ga.call(e,i)||!ot(t[i],e[i]))return!1}return!0}function Pd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cd(t,e){var n=Pd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pd(n)}}function np(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?np(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function rp(){for(var t=window,e=$o();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$o(t.document)}return e}function Hu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Hy(t){var e=rp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&np(n.ownerDocument.documentElement,n)){if(r!==null&&Hu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Cd(n,o);var s=Cd(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Gy=bt&&"documentMode"in document&&11>=document.documentMode,Jn=null,dl=null,di=null,fl=!1;function Od(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fl||Jn==null||Jn!==$o(r)||(r=Jn,"selectionStart"in r&&Hu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),di&&Pi(di,r)||(di=r,r=Ko(dl,"onSelect"),0<r.length&&(e=new Wu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Jn)))}function po(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xn={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},ma={},ip={};bt&&(ip=document.createElement("div").style,"AnimationEvent"in window||(delete Xn.animationend.animation,delete Xn.animationiteration.animation,delete Xn.animationstart.animation),"TransitionEvent"in window||delete Xn.transitionend.transition);function Ns(t){if(ma[t])return ma[t];if(!Xn[t])return t;var e=Xn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ip)return ma[t]=e[n];return t}var op=Ns("animationend"),sp=Ns("animationiteration"),ap=Ns("animationstart"),lp=Ns("transitionend"),up=new Map,bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(t,e){up.set(t,e),jn(e,[t])}for(var ga=0;ga<bd.length;ga++){var va=bd[ga],Ky=va.toLowerCase(),qy=va[0].toUpperCase()+va.slice(1);un(Ky,"on"+qy)}un(op,"onAnimationEnd");un(sp,"onAnimationIteration");un(ap,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(lp,"onTransitionEnd");wr("onMouseEnter",["mouseout","mouseover"]);wr("onMouseLeave",["mouseout","mouseover"]);wr("onPointerEnter",["pointerout","pointerover"]);wr("onPointerLeave",["pointerout","pointerover"]);jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ri));function Rd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Kv(r,e,void 0,t),t.currentTarget=null}function cp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Rd(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Rd(i,a,u),o=l}}}if(Wo)throw t=al,Wo=!1,al=null,t}function V(t,e){var n=e[vl];n===void 0&&(n=e[vl]=new Set);var r=t+"__bubble";n.has(r)||(dp(e,t,2,!1),n.add(r))}function ya(t,e,n){var r=0;e&&(r|=4),dp(n,t,r,e)}var mo="_reactListening"+Math.random().toString(36).slice(2);function Ci(t){if(!t[mo]){t[mo]=!0,yh.forEach(function(n){n!=="selectionchange"&&(Yy.has(n)||ya(n,!1,t),ya(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[mo]||(e[mo]=!0,ya("selectionchange",!1,e))}}function dp(t,e,n,r){switch(qh(e)){case 1:var i=uy;break;case 4:i=cy;break;default:i=$u}n=i.bind(null,e,n,t),i=void 0,!sl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function _a(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=yn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Lh(function(){var u=o,d=ju(n),c=[];e:{var h=up.get(t);if(h!==void 0){var y=Wu,_=t;switch(t){case"keypress":if(Oo(n)===0)break e;case"keydown":case"keyup":y=Ty;break;case"focusin":_="focus",y=fa;break;case"focusout":_="blur",y=fa;break;case"beforeblur":case"afterblur":y=fa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=hy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Oy;break;case op:case sp:case ap:y=gy;break;case lp:y=Ry;break;case"scroll":y=dy;break;case"wheel":y=xy;break;case"copy":case"cut":case"paste":y=yy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=wd}var E=(e&4)!==0,k=!E&&t==="scroll",p=E?h!==null?h+"Capture":null:h;E=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Ei(f,p),w!=null&&E.push(Oi(f,w,m)))),k)break;f=f.return}0<E.length&&(h=new y(h,_,null,n,d),c.push({event:h,listeners:E}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",h&&n!==il&&(_=n.relatedTarget||n.fromElement)&&(yn(_)||_[Rt]))break e;if((y||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,y?(_=n.relatedTarget||n.toElement,y=u,_=_?yn(_):null,_!==null&&(k=Mn(_),_!==k||_.tag!==5&&_.tag!==6)&&(_=null)):(y=null,_=u),y!==_)){if(E=yd,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(E=wd,w="onPointerLeave",p="onPointerEnter",f="pointer"),k=y==null?h:Zn(y),m=_==null?h:Zn(_),h=new E(w,f+"leave",y,n,d),h.target=k,h.relatedTarget=m,w=null,yn(d)===u&&(E=new E(p,f+"enter",_,n,d),E.target=m,E.relatedTarget=k,w=E),k=w,y&&_)t:{for(E=y,p=_,f=0,m=E;m;m=Vn(m))f++;for(m=0,w=p;w;w=Vn(w))m++;for(;0<f-m;)E=Vn(E),f--;for(;0<m-f;)p=Vn(p),m--;for(;f--;){if(E===p||p!==null&&E===p.alternate)break t;E=Vn(E),p=Vn(p)}E=null}else E=null;y!==null&&Nd(c,h,y,E,!1),_!==null&&k!==null&&Nd(c,k,_,E,!0)}}e:{if(h=u?Zn(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var T=Fy;else if(Sd(h))if(ep)T=Vy;else{T=zy;var C=$y}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=Wy);if(T&&(T=T(t,u))){Zh(c,T,n,d);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Za(h,"number",h.value)}switch(C=u?Zn(u):window,t){case"focusin":(Sd(C)||C.contentEditable==="true")&&(Jn=C,dl=u,di=null);break;case"focusout":di=dl=Jn=null;break;case"mousedown":fl=!0;break;case"contextmenu":case"mouseup":case"dragend":fl=!1,Od(c,n,d);break;case"selectionchange":if(Gy)break;case"keydown":case"keyup":Od(c,n,d)}var O;if(Bu)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Qn?Jh(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Qh&&n.locale!=="ko"&&(Qn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Qn&&(O=Yh()):(Vt=d,zu="value"in Vt?Vt.value:Vt.textContent,Qn=!0)),C=Ko(u,N),0<C.length&&(N=new _d(N,t,null,n,d),c.push({event:N,listeners:C}),O?N.data=O:(O=Xh(n),O!==null&&(N.data=O)))),(O=Ly?Dy(t,n):jy(t,n))&&(u=Ko(u,"onBeforeInput"),0<u.length&&(d=new _d("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=O))}cp(c,e)})}function Oi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ko(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ei(t,n),o!=null&&r.unshift(Oi(t,o,i)),o=Ei(t,e),o!=null&&r.push(Oi(t,o,i))),t=t.return}return r}function Vn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nd(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ei(n,o),l!=null&&s.unshift(Oi(n,l,a))):i||(l=Ei(n,o),l!=null&&s.push(Oi(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Qy=/\r\n?/g,Jy=/\u0000|\uFFFD/g;function xd(t){return(typeof t=="string"?t:""+t).replace(Qy,`
`).replace(Jy,"")}function go(t,e,n){if(e=xd(e),xd(t)!==e&&n)throw Error(I(425))}function qo(){}var hl=null,pl=null;function ml(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gl=typeof setTimeout=="function"?setTimeout:void 0,Xy=typeof clearTimeout=="function"?clearTimeout:void 0,Ad=typeof Promise=="function"?Promise:void 0,Zy=typeof queueMicrotask=="function"?queueMicrotask:typeof Ad<"u"?function(t){return Ad.resolve(null).then(t).catch(e0)}:gl;function e0(t){setTimeout(function(){throw t})}function wa(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ki(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ki(e)}function Qt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ld(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ar=Math.random().toString(36).slice(2),ut="__reactFiber$"+Ar,bi="__reactProps$"+Ar,Rt="__reactContainer$"+Ar,vl="__reactEvents$"+Ar,t0="__reactListeners$"+Ar,n0="__reactHandles$"+Ar;function yn(t){var e=t[ut];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rt]||n[ut]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ld(t);t!==null;){if(n=t[ut])return n;t=Ld(t)}return e}t=n,n=t.parentNode}return null}function qi(t){return t=t[ut]||t[Rt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function xs(t){return t[bi]||null}var yl=[],er=-1;function cn(t){return{current:t}}function B(t){0>er||(t.current=yl[er],yl[er]=null,er--)}function z(t,e){er++,yl[er]=t.current,t.current=e}var on={},Ee=cn(on),Ne=cn(!1),Pn=on;function Er(t,e){var n=t.type.contextTypes;if(!n)return on;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function xe(t){return t=t.childContextTypes,t!=null}function Yo(){B(Ne),B(Ee)}function Dd(t,e,n){if(Ee.current!==on)throw Error(I(168));z(Ee,e),z(Ne,n)}function fp(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,$v(t)||"Unknown",i));return q({},n,r)}function Qo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||on,Pn=Ee.current,z(Ee,t),z(Ne,Ne.current),!0}function jd(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=fp(t,e,Pn),r.__reactInternalMemoizedMergedChildContext=t,B(Ne),B(Ee),z(Ee,t)):B(Ne),z(Ne,n)}var _t=null,As=!1,Ea=!1;function hp(t){_t===null?_t=[t]:_t.push(t)}function r0(t){As=!0,hp(t)}function dn(){if(!Ea&&_t!==null){Ea=!0;var t=0,e=U;try{var n=_t;for(U=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_t=null,As=!1}catch(i){throw _t!==null&&(_t=_t.slice(t+1)),Uh(Mu,dn),i}finally{U=e,Ea=!1}}return null}var tr=[],nr=0,Jo=null,Xo=0,Be=[],He=0,Cn=null,Et=1,It="";function mn(t,e){tr[nr++]=Xo,tr[nr++]=Jo,Jo=t,Xo=e}function pp(t,e,n){Be[He++]=Et,Be[He++]=It,Be[He++]=Cn,Cn=t;var r=Et;t=It;var i=32-rt(r)-1;r&=~(1<<i),n+=1;var o=32-rt(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Et=1<<32-rt(e)+i|n<<i|r,It=o+t}else Et=1<<o|n<<i|r,It=t}function Gu(t){t.return!==null&&(mn(t,1),pp(t,1,0))}function Ku(t){for(;t===Jo;)Jo=tr[--nr],tr[nr]=null,Xo=tr[--nr],tr[nr]=null;for(;t===Cn;)Cn=Be[--He],Be[He]=null,It=Be[--He],Be[He]=null,Et=Be[--He],Be[He]=null}var $e=null,Ue=null,H=!1,nt=null;function mp(t,e){var n=Ge(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Md(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$e=t,Ue=Qt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$e=t,Ue=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cn!==null?{id:Et,overflow:It}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ge(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$e=t,Ue=null,!0):!1;default:return!1}}function _l(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wl(t){if(H){var e=Ue;if(e){var n=e;if(!Md(t,e)){if(_l(t))throw Error(I(418));e=Qt(n.nextSibling);var r=$e;e&&Md(t,e)?mp(r,n):(t.flags=t.flags&-4097|2,H=!1,$e=t)}}else{if(_l(t))throw Error(I(418));t.flags=t.flags&-4097|2,H=!1,$e=t}}}function Ud(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$e=t}function vo(t){if(t!==$e)return!1;if(!H)return Ud(t),H=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ml(t.type,t.memoizedProps)),e&&(e=Ue)){if(_l(t))throw gp(),Error(I(418));for(;e;)mp(t,e),e=Qt(e.nextSibling)}if(Ud(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ue=Qt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ue=null}}else Ue=$e?Qt(t.stateNode.nextSibling):null;return!0}function gp(){for(var t=Ue;t;)t=Qt(t.nextSibling)}function Ir(){Ue=$e=null,H=!1}function qu(t){nt===null?nt=[t]:nt.push(t)}var i0=Lt.ReactCurrentBatchConfig;function qr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function yo(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Fd(t){var e=t._init;return e(t._payload)}function vp(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=en(p,f),p.index=0,p.sibling=null,p}function o(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function s(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,w){return f===null||f.tag!==6?(f=Oa(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,w){var T=m.type;return T===Yn?d(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ft&&Fd(T)===f.type)?(w=i(f,m.props),w.ref=qr(p,f,m),w.return=p,w):(w=Do(m.type,m.key,m.props,null,p.mode,w),w.ref=qr(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=ba(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,w,T){return f===null||f.tag!==7?(f=Sn(m,p.mode,w,T),f.return=p,f):(f=i(f,m),f.return=p,f)}function c(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Oa(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case so:return m=Do(f.type,f.key,f.props,null,p.mode,m),m.ref=qr(p,null,f),m.return=p,m;case qn:return f=ba(f,p.mode,m),f.return=p,f;case Ft:var w=f._init;return c(p,w(f._payload),m)}if(ti(f)||Vr(f))return f=Sn(f,p.mode,m,null),f.return=p,f;yo(p,f)}return null}function h(p,f,m,w){var T=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case so:return m.key===T?l(p,f,m,w):null;case qn:return m.key===T?u(p,f,m,w):null;case Ft:return T=m._init,h(p,f,T(m._payload),w)}if(ti(m)||Vr(m))return T!==null?null:d(p,f,m,w,null);yo(p,m)}return null}function y(p,f,m,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(f,p,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case so:return p=p.get(w.key===null?m:w.key)||null,l(f,p,w,T);case qn:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,T);case Ft:var C=w._init;return y(p,f,m,C(w._payload),T)}if(ti(w)||Vr(w))return p=p.get(m)||null,d(f,p,w,T,null);yo(f,w)}return null}function _(p,f,m,w){for(var T=null,C=null,O=f,N=f=0,W=null;O!==null&&N<m.length;N++){O.index>N?(W=O,O=null):W=O.sibling;var L=h(p,O,m[N],w);if(L===null){O===null&&(O=W);break}t&&O&&L.alternate===null&&e(p,O),f=o(L,f,N),C===null?T=L:C.sibling=L,C=L,O=W}if(N===m.length)return n(p,O),H&&mn(p,N),T;if(O===null){for(;N<m.length;N++)O=c(p,m[N],w),O!==null&&(f=o(O,f,N),C===null?T=O:C.sibling=O,C=O);return H&&mn(p,N),T}for(O=r(p,O);N<m.length;N++)W=y(O,p,N,m[N],w),W!==null&&(t&&W.alternate!==null&&O.delete(W.key===null?N:W.key),f=o(W,f,N),C===null?T=W:C.sibling=W,C=W);return t&&O.forEach(function(Xe){return e(p,Xe)}),H&&mn(p,N),T}function E(p,f,m,w){var T=Vr(m);if(typeof T!="function")throw Error(I(150));if(m=T.call(m),m==null)throw Error(I(151));for(var C=T=null,O=f,N=f=0,W=null,L=m.next();O!==null&&!L.done;N++,L=m.next()){O.index>N?(W=O,O=null):W=O.sibling;var Xe=h(p,O,L.value,w);if(Xe===null){O===null&&(O=W);break}t&&O&&Xe.alternate===null&&e(p,O),f=o(Xe,f,N),C===null?T=Xe:C.sibling=Xe,C=Xe,O=W}if(L.done)return n(p,O),H&&mn(p,N),T;if(O===null){for(;!L.done;N++,L=m.next())L=c(p,L.value,w),L!==null&&(f=o(L,f,N),C===null?T=L:C.sibling=L,C=L);return H&&mn(p,N),T}for(O=r(p,O);!L.done;N++,L=m.next())L=y(O,p,N,L.value,w),L!==null&&(t&&L.alternate!==null&&O.delete(L.key===null?N:L.key),f=o(L,f,N),C===null?T=L:C.sibling=L,C=L);return t&&O.forEach(function(zr){return e(p,zr)}),H&&mn(p,N),T}function k(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===Yn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case so:e:{for(var T=m.key,C=f;C!==null;){if(C.key===T){if(T=m.type,T===Yn){if(C.tag===7){n(p,C.sibling),f=i(C,m.props.children),f.return=p,p=f;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ft&&Fd(T)===C.type){n(p,C.sibling),f=i(C,m.props),f.ref=qr(p,C,m),f.return=p,p=f;break e}n(p,C);break}else e(p,C);C=C.sibling}m.type===Yn?(f=Sn(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=Do(m.type,m.key,m.props,null,p.mode,w),w.ref=qr(p,f,m),w.return=p,p=w)}return s(p);case qn:e:{for(C=m.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=ba(m,p.mode,w),f.return=p,p=f}return s(p);case Ft:return C=m._init,k(p,f,C(m._payload),w)}if(ti(m))return _(p,f,m,w);if(Vr(m))return E(p,f,m,w);yo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Oa(m,p.mode,w),f.return=p,p=f),s(p)):n(p,f)}return k}var Sr=vp(!0),yp=vp(!1),Zo=cn(null),es=null,rr=null,Yu=null;function Qu(){Yu=rr=es=null}function Ju(t){var e=Zo.current;B(Zo),t._currentValue=e}function El(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function dr(t,e){es=t,Yu=rr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Re=!0),t.firstContext=null)}function Ye(t){var e=t._currentValue;if(Yu!==t)if(t={context:t,memoizedValue:e,next:null},rr===null){if(es===null)throw Error(I(308));rr=t,es.dependencies={lanes:0,firstContext:t}}else rr=rr.next=t;return e}var _n=null;function Xu(t){_n===null?_n=[t]:_n.push(t)}function _p(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Xu(e)):(n.next=i.next,i.next=n),e.interleaved=n,Nt(t,r)}function Nt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $t=!1;function Zu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Jt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Nt(t,n)}return i=r.interleaved,i===null?(e.next=e,Xu(r)):(e.next=i.next,i.next=e),r.interleaved=e,Nt(t,n)}function bo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Uu(t,n)}}function $d(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ts(t,e,n,r){var i=t.updateQueue;$t=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var c=i.baseState;s=0,d=u=l=null,a=o;do{var h=a.lane,y=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,E=a;switch(h=e,y=n,E.tag){case 1:if(_=E.payload,typeof _=="function"){c=_.call(y,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=E.payload,h=typeof _=="function"?_.call(y,c,h):_,h==null)break e;c=q({},c,h);break e;case 2:$t=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=y,l=c):d=d.next=y,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);bn|=s,t.lanes=s,t.memoizedState=c}}function zd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Yi={},gt=cn(Yi),Ri=cn(Yi),Ni=cn(Yi);function wn(t){if(t===Yi)throw Error(I(174));return t}function ec(t,e){switch(z(Ni,e),z(Ri,t),z(gt,Yi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tl(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=tl(e,t)}B(gt),z(gt,e)}function kr(){B(gt),B(Ri),B(Ni)}function Ep(t){wn(Ni.current);var e=wn(gt.current),n=tl(e,t.type);e!==n&&(z(Ri,t),z(gt,n))}function tc(t){Ri.current===t&&(B(gt),B(Ri))}var G=cn(0);function ns(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ia=[];function nc(){for(var t=0;t<Ia.length;t++)Ia[t]._workInProgressVersionPrimary=null;Ia.length=0}var Ro=Lt.ReactCurrentDispatcher,Sa=Lt.ReactCurrentBatchConfig,On=0,K=null,se=null,ce=null,rs=!1,fi=!1,xi=0,o0=0;function ye(){throw Error(I(321))}function rc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ot(t[n],e[n]))return!1;return!0}function ic(t,e,n,r,i,o){if(On=o,K=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ro.current=t===null||t.memoizedState===null?u0:c0,t=n(r,i),fi){o=0;do{if(fi=!1,xi=0,25<=o)throw Error(I(301));o+=1,ce=se=null,e.updateQueue=null,Ro.current=d0,t=n(r,i)}while(fi)}if(Ro.current=is,e=se!==null&&se.next!==null,On=0,ce=se=K=null,rs=!1,e)throw Error(I(300));return t}function oc(){var t=xi!==0;return xi=0,t}function lt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?K.memoizedState=ce=t:ce=ce.next=t,ce}function Qe(){if(se===null){var t=K.alternate;t=t!==null?t.memoizedState:null}else t=se.next;var e=ce===null?K.memoizedState:ce.next;if(e!==null)ce=e,se=t;else{if(t===null)throw Error(I(310));se=t,t={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},ce===null?K.memoizedState=ce=t:ce=ce.next=t}return ce}function Ai(t,e){return typeof e=="function"?e(t):e}function ka(t){var e=Qe(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=se,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((On&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,s=r):l=l.next=c,K.lanes|=d,bn|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,ot(r,e.memoizedState)||(Re=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,K.lanes|=o,bn|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ta(t){var e=Qe(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);ot(o,e.memoizedState)||(Re=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function Ip(){}function Sp(t,e){var n=K,r=Qe(),i=e(),o=!ot(r.memoizedState,i);if(o&&(r.memoizedState=i,Re=!0),r=r.queue,sc(Pp.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,Li(9,Tp.bind(null,n,r,i,e),void 0,null),de===null)throw Error(I(349));On&30||kp(n,e,i)}return i}function kp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=K.updateQueue,e===null?(e={lastEffect:null,stores:null},K.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Tp(t,e,n,r){e.value=n,e.getSnapshot=r,Cp(e)&&Op(t)}function Pp(t,e,n){return n(function(){Cp(e)&&Op(t)})}function Cp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ot(t,n)}catch{return!0}}function Op(t){var e=Nt(t,1);e!==null&&it(e,t,1,-1)}function Wd(t){var e=lt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ai,lastRenderedState:t},e.queue=t,t=t.dispatch=l0.bind(null,K,t),[e.memoizedState,t]}function Li(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=K.updateQueue,e===null?(e={lastEffect:null,stores:null},K.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function bp(){return Qe().memoizedState}function No(t,e,n,r){var i=lt();K.flags|=t,i.memoizedState=Li(1|e,n,void 0,r===void 0?null:r)}function Ls(t,e,n,r){var i=Qe();r=r===void 0?null:r;var o=void 0;if(se!==null){var s=se.memoizedState;if(o=s.destroy,r!==null&&rc(r,s.deps)){i.memoizedState=Li(e,n,o,r);return}}K.flags|=t,i.memoizedState=Li(1|e,n,o,r)}function Vd(t,e){return No(8390656,8,t,e)}function sc(t,e){return Ls(2048,8,t,e)}function Rp(t,e){return Ls(4,2,t,e)}function Np(t,e){return Ls(4,4,t,e)}function xp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ap(t,e,n){return n=n!=null?n.concat([t]):null,Ls(4,4,xp.bind(null,e,t),n)}function ac(){}function Lp(t,e){var n=Qe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Dp(t,e){var n=Qe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function jp(t,e,n){return On&21?(ot(n,e)||(n=zh(),K.lanes|=n,bn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Re=!0),t.memoizedState=n)}function s0(t,e){var n=U;U=n!==0&&4>n?n:4,t(!0);var r=Sa.transition;Sa.transition={};try{t(!1),e()}finally{U=n,Sa.transition=r}}function Mp(){return Qe().memoizedState}function a0(t,e,n){var r=Zt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Up(t))Fp(e,n);else if(n=_p(t,e,n,r),n!==null){var i=Te();it(n,t,r,i),$p(n,e,r)}}function l0(t,e,n){var r=Zt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Up(t))Fp(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,ot(a,s)){var l=e.interleaved;l===null?(i.next=i,Xu(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=_p(t,e,i,r),n!==null&&(i=Te(),it(n,t,r,i),$p(n,e,r))}}function Up(t){var e=t.alternate;return t===K||e!==null&&e===K}function Fp(t,e){fi=rs=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $p(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Uu(t,n)}}var is={readContext:Ye,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},u0={readContext:Ye,useCallback:function(t,e){return lt().memoizedState=[t,e===void 0?null:e],t},useContext:Ye,useEffect:Vd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,No(4194308,4,xp.bind(null,e,t),n)},useLayoutEffect:function(t,e){return No(4194308,4,t,e)},useInsertionEffect:function(t,e){return No(4,2,t,e)},useMemo:function(t,e){var n=lt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=lt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=a0.bind(null,K,t),[r.memoizedState,t]},useRef:function(t){var e=lt();return t={current:t},e.memoizedState=t},useState:Wd,useDebugValue:ac,useDeferredValue:function(t){return lt().memoizedState=t},useTransition:function(){var t=Wd(!1),e=t[0];return t=s0.bind(null,t[1]),lt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=K,i=lt();if(H){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),de===null)throw Error(I(349));On&30||kp(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Vd(Pp.bind(null,r,o,t),[t]),r.flags|=2048,Li(9,Tp.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=lt(),e=de.identifierPrefix;if(H){var n=It,r=Et;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=xi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=o0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},c0={readContext:Ye,useCallback:Lp,useContext:Ye,useEffect:sc,useImperativeHandle:Ap,useInsertionEffect:Rp,useLayoutEffect:Np,useMemo:Dp,useReducer:ka,useRef:bp,useState:function(){return ka(Ai)},useDebugValue:ac,useDeferredValue:function(t){var e=Qe();return jp(e,se.memoizedState,t)},useTransition:function(){var t=ka(Ai)[0],e=Qe().memoizedState;return[t,e]},useMutableSource:Ip,useSyncExternalStore:Sp,useId:Mp,unstable_isNewReconciler:!1},d0={readContext:Ye,useCallback:Lp,useContext:Ye,useEffect:sc,useImperativeHandle:Ap,useInsertionEffect:Rp,useLayoutEffect:Np,useMemo:Dp,useReducer:Ta,useRef:bp,useState:function(){return Ta(Ai)},useDebugValue:ac,useDeferredValue:function(t){var e=Qe();return se===null?e.memoizedState=t:jp(e,se.memoizedState,t)},useTransition:function(){var t=Ta(Ai)[0],e=Qe().memoizedState;return[t,e]},useMutableSource:Ip,useSyncExternalStore:Sp,useId:Mp,unstable_isNewReconciler:!1};function et(t,e){if(t&&t.defaultProps){e=q({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Il(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:q({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ds={isMounted:function(t){return(t=t._reactInternals)?Mn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Te(),i=Zt(t),o=Pt(r,i);o.payload=e,n!=null&&(o.callback=n),e=Jt(t,o,i),e!==null&&(it(e,t,i,r),bo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Te(),i=Zt(t),o=Pt(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Jt(t,o,i),e!==null&&(it(e,t,i,r),bo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Te(),r=Zt(t),i=Pt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Jt(t,i,r),e!==null&&(it(e,t,r,n),bo(e,t,r))}};function Bd(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Pi(n,r)||!Pi(i,o):!0}function zp(t,e,n){var r=!1,i=on,o=e.contextType;return typeof o=="object"&&o!==null?o=Ye(o):(i=xe(e)?Pn:Ee.current,r=e.contextTypes,o=(r=r!=null)?Er(t,i):on),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ds,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Hd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ds.enqueueReplaceState(e,e.state,null)}function Sl(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Zu(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Ye(o):(o=xe(e)?Pn:Ee.current,i.context=Er(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Il(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ds.enqueueReplaceState(i,i.state,null),ts(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Tr(t,e){try{var n="",r=e;do n+=Fv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Pa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function kl(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var f0=typeof WeakMap=="function"?WeakMap:Map;function Wp(t,e,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ss||(ss=!0,Ll=r),kl(t,e)},n}function Vp(t,e,n){n=Pt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){kl(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){kl(t,e),typeof r!="function"&&(Xt===null?Xt=new Set([this]):Xt.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Gd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new f0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=P0.bind(null,t,e,n),e.then(t,t))}function Kd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qd(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pt(-1,1),e.tag=2,Jt(n,e,1))),n.lanes|=1),t)}var h0=Lt.ReactCurrentOwner,Re=!1;function Se(t,e,n,r){e.child=t===null?yp(e,null,n,r):Sr(e,t.child,n,r)}function Yd(t,e,n,r,i){n=n.render;var o=e.ref;return dr(e,i),r=ic(t,e,n,r,o,i),n=oc(),t!==null&&!Re?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xt(t,e,i)):(H&&n&&Gu(e),e.flags|=1,Se(t,e,r,i),e.child)}function Qd(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!mc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Bp(t,e,o,r,i)):(t=Do(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Pi,n(s,r)&&t.ref===e.ref)return xt(t,e,i)}return e.flags|=1,t=en(o,r),t.ref=e.ref,t.return=e,e.child=t}function Bp(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Pi(o,r)&&t.ref===e.ref)if(Re=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Re=!0);else return e.lanes=t.lanes,xt(t,e,i)}return Tl(t,e,n,r,i)}function Hp(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(or,je),je|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,z(or,je),je|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,z(or,je),je|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,z(or,je),je|=r;return Se(t,e,i,n),e.child}function Gp(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Tl(t,e,n,r,i){var o=xe(n)?Pn:Ee.current;return o=Er(e,o),dr(e,i),n=ic(t,e,n,r,o,i),r=oc(),t!==null&&!Re?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xt(t,e,i)):(H&&r&&Gu(e),e.flags|=1,Se(t,e,n,i),e.child)}function Jd(t,e,n,r,i){if(xe(n)){var o=!0;Qo(e)}else o=!1;if(dr(e,i),e.stateNode===null)xo(t,e),zp(e,n,r),Sl(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=xe(n)?Pn:Ee.current,u=Er(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";c||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Hd(e,s,r,u),$t=!1;var h=e.memoizedState;s.state=h,ts(e,r,s,i),l=e.memoizedState,a!==r||h!==l||Ne.current||$t?(typeof d=="function"&&(Il(e,n,d,r),l=e.memoizedState),(a=$t||Bd(e,n,a,r,h,l,u))?(c||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,wp(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:et(e.type,a),s.props=u,c=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ye(l):(l=xe(n)?Pn:Ee.current,l=Er(e,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==c||h!==l)&&Hd(e,s,r,l),$t=!1,h=e.memoizedState,s.state=h,ts(e,r,s,i);var _=e.memoizedState;a!==c||h!==_||Ne.current||$t?(typeof y=="function"&&(Il(e,n,y,r),_=e.memoizedState),(u=$t||Bd(e,n,u,r,h,_,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),s.props=r,s.state=_,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Pl(t,e,n,r,o,i)}function Pl(t,e,n,r,i,o){Gp(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&jd(e,n,!1),xt(t,e,o);r=e.stateNode,h0.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Sr(e,t.child,null,o),e.child=Sr(e,null,a,o)):Se(t,e,a,o),e.memoizedState=r.state,i&&jd(e,n,!0),e.child}function Kp(t){var e=t.stateNode;e.pendingContext?Dd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Dd(t,e.context,!1),ec(t,e.containerInfo)}function Xd(t,e,n,r,i){return Ir(),qu(i),e.flags|=256,Se(t,e,n,r),e.child}var Cl={dehydrated:null,treeContext:null,retryLane:0};function Ol(t){return{baseLanes:t,cachePool:null,transitions:null}}function qp(t,e,n){var r=e.pendingProps,i=G.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),z(G,i&1),t===null)return wl(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Us(s,r,0,null),t=Sn(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Ol(n),e.memoizedState=Cl,t):lc(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return p0(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=en(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=en(a,o):(o=Sn(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Ol(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Cl,r}return o=t.child,t=o.sibling,r=en(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function lc(t,e){return e=Us({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _o(t,e,n,r){return r!==null&&qu(r),Sr(e,t.child,null,n),t=lc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function p0(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Pa(Error(I(422))),_o(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Us({mode:"visible",children:r.children},i,0,null),o=Sn(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Sr(e,t.child,null,s),e.child.memoizedState=Ol(s),e.memoizedState=Cl,o);if(!(e.mode&1))return _o(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(I(419)),r=Pa(o,r,void 0),_o(t,e,s,r)}if(a=(s&t.childLanes)!==0,Re||a){if(r=de,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Nt(t,i),it(r,t,i,-1))}return pc(),r=Pa(Error(I(421))),_o(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=C0.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Ue=Qt(i.nextSibling),$e=e,H=!0,nt=null,t!==null&&(Be[He++]=Et,Be[He++]=It,Be[He++]=Cn,Et=t.id,It=t.overflow,Cn=e),e=lc(e,r.children),e.flags|=4096,e)}function Zd(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),El(t.return,e,n)}function Ca(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Yp(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Se(t,e,r.children,n),r=G.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zd(t,n,e);else if(t.tag===19)Zd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(z(G,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ns(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ca(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ns(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ca(e,!0,n,null,o);break;case"together":Ca(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),bn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=en(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=en(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function m0(t,e,n){switch(e.tag){case 3:Kp(e),Ir();break;case 5:Ep(e);break;case 1:xe(e.type)&&Qo(e);break;case 4:ec(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;z(Zo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(z(G,G.current&1),e.flags|=128,null):n&e.child.childLanes?qp(t,e,n):(z(G,G.current&1),t=xt(t,e,n),t!==null?t.sibling:null);z(G,G.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Yp(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(G,G.current),r)break;return null;case 22:case 23:return e.lanes=0,Hp(t,e,n)}return xt(t,e,n)}var Qp,bl,Jp,Xp;Qp=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bl=function(){};Jp=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,wn(gt.current);var o=null;switch(n){case"input":i=Ja(t,i),r=Ja(t,r),o=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),o=[];break;case"textarea":i=el(t,i),r=el(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=qo)}nl(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_i.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_i.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&V("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Xp=function(t,e,n,r){n!==r&&(e.flags|=4)};function Yr(t,e){if(!H)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _e(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function g0(t,e,n){var r=e.pendingProps;switch(Ku(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(e),null;case 1:return xe(e.type)&&Yo(),_e(e),null;case 3:return r=e.stateNode,kr(),B(Ne),B(Ee),nc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,nt!==null&&(Ml(nt),nt=null))),bl(t,e),_e(e),null;case 5:tc(e);var i=wn(Ni.current);if(n=e.type,t!==null&&e.stateNode!=null)Jp(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return _e(e),null}if(t=wn(gt.current),vo(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[ut]=e,r[bi]=o,t=(e.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<ri.length;i++)V(ri[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":ld(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":cd(r,o),V("invalid",r)}nl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&go(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&go(r.textContent,a,t),i=["children",""+a]):_i.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&V("scroll",r)}switch(n){case"input":ao(r),ud(r,o,!0);break;case"textarea":ao(r),dd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=qo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ph(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[ut]=e,t[bi]=r,Qp(t,e,!1,!1),e.stateNode=t;e:{switch(s=rl(n,r),n){case"dialog":V("cancel",t),V("close",t),i=r;break;case"iframe":case"object":case"embed":V("load",t),i=r;break;case"video":case"audio":for(i=0;i<ri.length;i++)V(ri[i],t);i=r;break;case"source":V("error",t),i=r;break;case"img":case"image":case"link":V("error",t),V("load",t),i=r;break;case"details":V("toggle",t),i=r;break;case"input":ld(t,r),i=Ja(t,r),V("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),V("invalid",t);break;case"textarea":cd(t,r),i=el(t,r),V("invalid",t);break;default:i=r}nl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?bh(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ch(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wi(t,l):typeof l=="number"&&wi(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(_i.hasOwnProperty(o)?l!=null&&o==="onScroll"&&V("scroll",t):l!=null&&xu(t,o,l,s))}switch(n){case"input":ao(t),ud(t,r,!1);break;case"textarea":ao(t),dd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+rn(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?ar(t,!!r.multiple,o,!1):r.defaultValue!=null&&ar(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _e(e),null;case 6:if(t&&e.stateNode!=null)Xp(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=wn(Ni.current),wn(gt.current),vo(e)){if(r=e.stateNode,n=e.memoizedProps,r[ut]=e,(o=r.nodeValue!==n)&&(t=$e,t!==null))switch(t.tag){case 3:go(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&go(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ut]=e,e.stateNode=r}return _e(e),null;case 13:if(B(G),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(H&&Ue!==null&&e.mode&1&&!(e.flags&128))gp(),Ir(),e.flags|=98560,o=!1;else if(o=vo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(I(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[ut]=e}else Ir(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;_e(e),o=!1}else nt!==null&&(Ml(nt),nt=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||G.current&1?ae===0&&(ae=3):pc())),e.updateQueue!==null&&(e.flags|=4),_e(e),null);case 4:return kr(),bl(t,e),t===null&&Ci(e.stateNode.containerInfo),_e(e),null;case 10:return Ju(e.type._context),_e(e),null;case 17:return xe(e.type)&&Yo(),_e(e),null;case 19:if(B(G),o=e.memoizedState,o===null)return _e(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Yr(o,!1);else{if(ae!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=ns(t),s!==null){for(e.flags|=128,Yr(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return z(G,G.current&1|2),e.child}t=t.sibling}o.tail!==null&&te()>Pr&&(e.flags|=128,r=!0,Yr(o,!1),e.lanes=4194304)}else{if(!r)if(t=ns(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Yr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!H)return _e(e),null}else 2*te()-o.renderingStartTime>Pr&&n!==1073741824&&(e.flags|=128,r=!0,Yr(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=te(),e.sibling=null,n=G.current,z(G,r?n&1|2:n&1),e):(_e(e),null);case 22:case 23:return hc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?je&1073741824&&(_e(e),e.subtreeFlags&6&&(e.flags|=8192)):_e(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function v0(t,e){switch(Ku(e),e.tag){case 1:return xe(e.type)&&Yo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return kr(),B(Ne),B(Ee),nc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return tc(e),null;case 13:if(B(G),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));Ir()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return B(G),null;case 4:return kr(),null;case 10:return Ju(e.type._context),null;case 22:case 23:return hc(),null;case 24:return null;default:return null}}var wo=!1,we=!1,y0=typeof WeakSet=="function"?WeakSet:Set,b=null;function ir(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(t,e,r)}else n.current=null}function Rl(t,e,n){try{n()}catch(r){Y(t,e,r)}}var ef=!1;function _0(t,e){if(hl=Ho,t=rp(),Hu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var y;c!==n||i!==0&&c.nodeType!==3||(a=s+i),c!==o||r!==0&&c.nodeType!==3||(l=s+r),c.nodeType===3&&(s+=c.nodeValue.length),(y=c.firstChild)!==null;)h=c,c=y;for(;;){if(c===t)break t;if(h===n&&++u===i&&(a=s),h===o&&++d===r&&(l=s),(y=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pl={focusedElem:t,selectionRange:n},Ho=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var E=_.memoizedProps,k=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?E:et(e.type,E),k);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(w){Y(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return _=ef,ef=!1,_}function hi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Rl(e,n,o)}i=i.next}while(i!==r)}}function js(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Nl(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Zp(t){var e=t.alternate;e!==null&&(t.alternate=null,Zp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ut],delete e[bi],delete e[vl],delete e[t0],delete e[n0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function em(t){return t.tag===5||t.tag===3||t.tag===4}function tf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||em(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qo));else if(r!==4&&(t=t.child,t!==null))for(xl(t,e,n),t=t.sibling;t!==null;)xl(t,e,n),t=t.sibling}function Al(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Al(t,e,n),t=t.sibling;t!==null;)Al(t,e,n),t=t.sibling}var he=null,tt=!1;function Mt(t,e,n){for(n=n.child;n!==null;)tm(t,e,n),n=n.sibling}function tm(t,e,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Os,n)}catch{}switch(n.tag){case 5:we||ir(n,e);case 6:var r=he,i=tt;he=null,Mt(t,e,n),he=r,tt=i,he!==null&&(tt?(t=he,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(tt?(t=he,n=n.stateNode,t.nodeType===8?wa(t.parentNode,n):t.nodeType===1&&wa(t,n),ki(t)):wa(he,n.stateNode));break;case 4:r=he,i=tt,he=n.stateNode.containerInfo,tt=!0,Mt(t,e,n),he=r,tt=i;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Rl(n,e,s),i=i.next}while(i!==r)}Mt(t,e,n);break;case 1:if(!we&&(ir(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Y(n,e,a)}Mt(t,e,n);break;case 21:Mt(t,e,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,Mt(t,e,n),we=r):Mt(t,e,n);break;default:Mt(t,e,n)}}function nf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new y0),e.forEach(function(r){var i=O0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ze(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:he=a.stateNode,tt=!1;break e;case 3:he=a.stateNode.containerInfo,tt=!0;break e;case 4:he=a.stateNode.containerInfo,tt=!0;break e}a=a.return}if(he===null)throw Error(I(160));tm(o,s,i),he=null,tt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Y(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)nm(e,t),e=e.sibling}function nm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ze(e,t),at(t),r&4){try{hi(3,t,t.return),js(3,t)}catch(E){Y(t,t.return,E)}try{hi(5,t,t.return)}catch(E){Y(t,t.return,E)}}break;case 1:Ze(e,t),at(t),r&512&&n!==null&&ir(n,n.return);break;case 5:if(Ze(e,t),at(t),r&512&&n!==null&&ir(n,n.return),t.flags&32){var i=t.stateNode;try{wi(i,"")}catch(E){Y(t,t.return,E)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&kh(i,o),rl(a,s);var u=rl(a,o);for(s=0;s<l.length;s+=2){var d=l[s],c=l[s+1];d==="style"?bh(i,c):d==="dangerouslySetInnerHTML"?Ch(i,c):d==="children"?wi(i,c):xu(i,d,c,u)}switch(a){case"input":Xa(i,o);break;case"textarea":Th(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?ar(i,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?ar(i,!!o.multiple,o.defaultValue,!0):ar(i,!!o.multiple,o.multiple?[]:"",!1))}i[bi]=o}catch(E){Y(t,t.return,E)}}break;case 6:if(Ze(e,t),at(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(E){Y(t,t.return,E)}}break;case 3:if(Ze(e,t),at(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ki(e.containerInfo)}catch(E){Y(t,t.return,E)}break;case 4:Ze(e,t),at(t);break;case 13:Ze(e,t),at(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(dc=te())),r&4&&nf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(we=(u=we)||d,Ze(e,t),we=u):Ze(e,t),at(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(b=t,d=t.child;d!==null;){for(c=b=d;b!==null;){switch(h=b,y=h.child,h.tag){case 0:case 11:case 14:case 15:hi(4,h,h.return);break;case 1:ir(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(E){Y(r,n,E)}}break;case 5:ir(h,h.return);break;case 22:if(h.memoizedState!==null){of(c);continue}}y!==null?(y.return=h,b=y):of(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=c.stateNode,l=c.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Oh("display",s))}catch(E){Y(t,t.return,E)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(E){Y(t,t.return,E)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ze(e,t),at(t),r&4&&nf(t);break;case 21:break;default:Ze(e,t),at(t)}}function at(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(em(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wi(i,""),r.flags&=-33);var o=tf(t);Al(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=tf(t);xl(t,a,s);break;default:throw Error(I(161))}}catch(l){Y(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function w0(t,e,n){b=t,rm(t)}function rm(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var i=b,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||wo;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||we;a=wo;var u=we;if(wo=s,(we=l)&&!u)for(b=i;b!==null;)s=b,l=s.child,s.tag===22&&s.memoizedState!==null?sf(i):l!==null?(l.return=s,b=l):sf(i);for(;o!==null;)b=o,rm(o),o=o.sibling;b=i,wo=a,we=u}rf(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,b=o):rf(t)}}function rf(t){for(;b!==null;){var e=b;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:we||js(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!we)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:et(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&zd(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zd(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&ki(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}we||e.flags&512&&Nl(e)}catch(h){Y(e,e.return,h)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function of(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function sf(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{js(4,e)}catch(l){Y(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Y(e,i,l)}}var o=e.return;try{Nl(e)}catch(l){Y(e,o,l)}break;case 5:var s=e.return;try{Nl(e)}catch(l){Y(e,s,l)}}}catch(l){Y(e,e.return,l)}if(e===t){b=null;break}var a=e.sibling;if(a!==null){a.return=e.return,b=a;break}b=e.return}}var E0=Math.ceil,os=Lt.ReactCurrentDispatcher,uc=Lt.ReactCurrentOwner,Ke=Lt.ReactCurrentBatchConfig,j=0,de=null,re=null,pe=0,je=0,or=cn(0),ae=0,Di=null,bn=0,Ms=0,cc=0,pi=null,be=null,dc=0,Pr=1/0,yt=null,ss=!1,Ll=null,Xt=null,Eo=!1,Bt=null,as=0,mi=0,Dl=null,Ao=-1,Lo=0;function Te(){return j&6?te():Ao!==-1?Ao:Ao=te()}function Zt(t){return t.mode&1?j&2&&pe!==0?pe&-pe:i0.transition!==null?(Lo===0&&(Lo=zh()),Lo):(t=U,t!==0||(t=window.event,t=t===void 0?16:qh(t.type)),t):1}function it(t,e,n,r){if(50<mi)throw mi=0,Dl=null,Error(I(185));Gi(t,n,r),(!(j&2)||t!==de)&&(t===de&&(!(j&2)&&(Ms|=n),ae===4&&Wt(t,pe)),Ae(t,r),n===1&&j===0&&!(e.mode&1)&&(Pr=te()+500,As&&dn()))}function Ae(t,e){var n=t.callbackNode;iy(t,e);var r=Bo(t,t===de?pe:0);if(r===0)n!==null&&pd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&pd(n),e===1)t.tag===0?r0(af.bind(null,t)):hp(af.bind(null,t)),Zy(function(){!(j&6)&&dn()}),n=null;else{switch(Wh(r)){case 1:n=Mu;break;case 4:n=Fh;break;case 16:n=Vo;break;case 536870912:n=$h;break;default:n=Vo}n=dm(n,im.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function im(t,e){if(Ao=-1,Lo=0,j&6)throw Error(I(327));var n=t.callbackNode;if(fr()&&t.callbackNode!==n)return null;var r=Bo(t,t===de?pe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ls(t,r);else{e=r;var i=j;j|=2;var o=sm();(de!==t||pe!==e)&&(yt=null,Pr=te()+500,In(t,e));do try{k0();break}catch(a){om(t,a)}while(!0);Qu(),os.current=o,j=i,re!==null?e=0:(de=null,pe=0,e=ae)}if(e!==0){if(e===2&&(i=ll(t),i!==0&&(r=i,e=jl(t,i))),e===1)throw n=Di,In(t,0),Wt(t,r),Ae(t,te()),n;if(e===6)Wt(t,r);else{if(i=t.current.alternate,!(r&30)&&!I0(i)&&(e=ls(t,r),e===2&&(o=ll(t),o!==0&&(r=o,e=jl(t,o))),e===1))throw n=Di,In(t,0),Wt(t,r),Ae(t,te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:gn(t,be,yt);break;case 3:if(Wt(t,r),(r&130023424)===r&&(e=dc+500-te(),10<e)){if(Bo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Te(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=gl(gn.bind(null,t,be,yt),e);break}gn(t,be,yt);break;case 4:if(Wt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-rt(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*E0(r/1960))-r,10<r){t.timeoutHandle=gl(gn.bind(null,t,be,yt),r);break}gn(t,be,yt);break;case 5:gn(t,be,yt);break;default:throw Error(I(329))}}}return Ae(t,te()),t.callbackNode===n?im.bind(null,t):null}function jl(t,e){var n=pi;return t.current.memoizedState.isDehydrated&&(In(t,e).flags|=256),t=ls(t,e),t!==2&&(e=be,be=n,e!==null&&Ml(e)),t}function Ml(t){be===null?be=t:be.push.apply(be,t)}function I0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ot(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wt(t,e){for(e&=~cc,e&=~Ms,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rt(e),r=1<<n;t[n]=-1,e&=~r}}function af(t){if(j&6)throw Error(I(327));fr();var e=Bo(t,0);if(!(e&1))return Ae(t,te()),null;var n=ls(t,e);if(t.tag!==0&&n===2){var r=ll(t);r!==0&&(e=r,n=jl(t,r))}if(n===1)throw n=Di,In(t,0),Wt(t,e),Ae(t,te()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gn(t,be,yt),Ae(t,te()),null}function fc(t,e){var n=j;j|=1;try{return t(e)}finally{j=n,j===0&&(Pr=te()+500,As&&dn())}}function Rn(t){Bt!==null&&Bt.tag===0&&!(j&6)&&fr();var e=j;j|=1;var n=Ke.transition,r=U;try{if(Ke.transition=null,U=1,t)return t()}finally{U=r,Ke.transition=n,j=e,!(j&6)&&dn()}}function hc(){je=or.current,B(or)}function In(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Xy(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Ku(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yo();break;case 3:kr(),B(Ne),B(Ee),nc();break;case 5:tc(r);break;case 4:kr();break;case 13:B(G);break;case 19:B(G);break;case 10:Ju(r.type._context);break;case 22:case 23:hc()}n=n.return}if(de=t,re=t=en(t.current,null),pe=je=e,ae=0,Di=null,cc=Ms=bn=0,be=pi=null,_n!==null){for(e=0;e<_n.length;e++)if(n=_n[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}_n=null}return t}function om(t,e){do{var n=re;try{if(Qu(),Ro.current=is,rs){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}rs=!1}if(On=0,ce=se=K=null,fi=!1,xi=0,uc.current=null,n===null||n.return===null){ae=1,Di=e,re=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=pe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Kd(s);if(y!==null){y.flags&=-257,qd(y,s,a,o,e),y.mode&1&&Gd(o,u,e),e=y,l=u;var _=e.updateQueue;if(_===null){var E=new Set;E.add(l),e.updateQueue=E}else _.add(l);break e}else{if(!(e&1)){Gd(o,u,e),pc();break e}l=Error(I(426))}}else if(H&&a.mode&1){var k=Kd(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),qd(k,s,a,o,e),qu(Tr(l,a));break e}}o=l=Tr(l,a),ae!==4&&(ae=2),pi===null?pi=[o]:pi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var p=Wp(o,l,e);$d(o,p);break e;case 1:a=l;var f=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Xt===null||!Xt.has(m)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=Vp(o,a,e);$d(o,w);break e}}o=o.return}while(o!==null)}lm(n)}catch(T){e=T,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function sm(){var t=os.current;return os.current=is,t===null?is:t}function pc(){(ae===0||ae===3||ae===2)&&(ae=4),de===null||!(bn&268435455)&&!(Ms&268435455)||Wt(de,pe)}function ls(t,e){var n=j;j|=2;var r=sm();(de!==t||pe!==e)&&(yt=null,In(t,e));do try{S0();break}catch(i){om(t,i)}while(!0);if(Qu(),j=n,os.current=r,re!==null)throw Error(I(261));return de=null,pe=0,ae}function S0(){for(;re!==null;)am(re)}function k0(){for(;re!==null&&!Yv();)am(re)}function am(t){var e=cm(t.alternate,t,je);t.memoizedProps=t.pendingProps,e===null?lm(t):re=e,uc.current=null}function lm(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=v0(n,e),n!==null){n.flags&=32767,re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ae=6,re=null;return}}else if(n=g0(n,e,je),n!==null){re=n;return}if(e=e.sibling,e!==null){re=e;return}re=e=t}while(e!==null);ae===0&&(ae=5)}function gn(t,e,n){var r=U,i=Ke.transition;try{Ke.transition=null,U=1,T0(t,e,n,r)}finally{Ke.transition=i,U=r}return null}function T0(t,e,n,r){do fr();while(Bt!==null);if(j&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(oy(t,o),t===de&&(re=de=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Eo||(Eo=!0,dm(Vo,function(){return fr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ke.transition,Ke.transition=null;var s=U;U=1;var a=j;j|=4,uc.current=null,_0(t,n),nm(n,t),Hy(pl),Ho=!!hl,pl=hl=null,t.current=n,w0(n),Qv(),j=a,U=s,Ke.transition=o}else t.current=n;if(Eo&&(Eo=!1,Bt=t,as=i),o=t.pendingLanes,o===0&&(Xt=null),Zv(n.stateNode),Ae(t,te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ss)throw ss=!1,t=Ll,Ll=null,t;return as&1&&t.tag!==0&&fr(),o=t.pendingLanes,o&1?t===Dl?mi++:(mi=0,Dl=t):mi=0,dn(),null}function fr(){if(Bt!==null){var t=Wh(as),e=Ke.transition,n=U;try{if(Ke.transition=null,U=16>t?16:t,Bt===null)var r=!1;else{if(t=Bt,Bt=null,as=0,j&6)throw Error(I(331));var i=j;for(j|=4,b=t.current;b!==null;){var o=b,s=o.child;if(b.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(b=u;b!==null;){var d=b;switch(d.tag){case 0:case 11:case 15:hi(8,d,o)}var c=d.child;if(c!==null)c.return=d,b=c;else for(;b!==null;){d=b;var h=d.sibling,y=d.return;if(Zp(d),d===u){b=null;break}if(h!==null){h.return=y,b=h;break}b=y}}}var _=o.alternate;if(_!==null){var E=_.child;if(E!==null){_.child=null;do{var k=E.sibling;E.sibling=null,E=k}while(E!==null)}}b=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,b=s;else e:for(;b!==null;){if(o=b,o.flags&2048)switch(o.tag){case 0:case 11:case 15:hi(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,b=p;break e}b=o.return}}var f=t.current;for(b=f;b!==null;){s=b;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,b=m;else e:for(s=f;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:js(9,a)}}catch(T){Y(a,a.return,T)}if(a===s){b=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,b=w;break e}b=a.return}}if(j=i,dn(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Os,t)}catch{}r=!0}return r}finally{U=n,Ke.transition=e}}return!1}function lf(t,e,n){e=Tr(n,e),e=Wp(t,e,1),t=Jt(t,e,1),e=Te(),t!==null&&(Gi(t,1,e),Ae(t,e))}function Y(t,e,n){if(t.tag===3)lf(t,t,n);else for(;e!==null;){if(e.tag===3){lf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xt===null||!Xt.has(r))){t=Tr(n,t),t=Vp(e,t,1),e=Jt(e,t,1),t=Te(),e!==null&&(Gi(e,1,t),Ae(e,t));break}}e=e.return}}function P0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Te(),t.pingedLanes|=t.suspendedLanes&n,de===t&&(pe&n)===n&&(ae===4||ae===3&&(pe&130023424)===pe&&500>te()-dc?In(t,0):cc|=n),Ae(t,e)}function um(t,e){e===0&&(t.mode&1?(e=co,co<<=1,!(co&130023424)&&(co=4194304)):e=1);var n=Te();t=Nt(t,e),t!==null&&(Gi(t,e,n),Ae(t,n))}function C0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),um(t,n)}function O0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),um(t,n)}var cm;cm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ne.current)Re=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Re=!1,m0(t,e,n);Re=!!(t.flags&131072)}else Re=!1,H&&e.flags&1048576&&pp(e,Xo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;xo(t,e),t=e.pendingProps;var i=Er(e,Ee.current);dr(e,n),i=ic(null,e,r,t,i,n);var o=oc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xe(r)?(o=!0,Qo(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zu(e),i.updater=Ds,e.stateNode=i,i._reactInternals=e,Sl(e,r,t,n),e=Pl(null,e,r,!0,o,n)):(e.tag=0,H&&o&&Gu(e),Se(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(xo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=R0(r),t=et(r,t),i){case 0:e=Tl(null,e,r,t,n);break e;case 1:e=Jd(null,e,r,t,n);break e;case 11:e=Yd(null,e,r,t,n);break e;case 14:e=Qd(null,e,r,et(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),Tl(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),Jd(t,e,r,i,n);case 3:e:{if(Kp(e),t===null)throw Error(I(387));r=e.pendingProps,o=e.memoizedState,i=o.element,wp(t,e),ts(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Tr(Error(I(423)),e),e=Xd(t,e,r,n,i);break e}else if(r!==i){i=Tr(Error(I(424)),e),e=Xd(t,e,r,n,i);break e}else for(Ue=Qt(e.stateNode.containerInfo.firstChild),$e=e,H=!0,nt=null,n=yp(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ir(),r===i){e=xt(t,e,n);break e}Se(t,e,r,n)}e=e.child}return e;case 5:return Ep(e),t===null&&wl(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,ml(r,i)?s=null:o!==null&&ml(r,o)&&(e.flags|=32),Gp(t,e),Se(t,e,s,n),e.child;case 6:return t===null&&wl(e),null;case 13:return qp(t,e,n);case 4:return ec(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Sr(e,null,r,n):Se(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),Yd(t,e,r,i,n);case 7:return Se(t,e,e.pendingProps,n),e.child;case 8:return Se(t,e,e.pendingProps.children,n),e.child;case 12:return Se(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,z(Zo,r._currentValue),r._currentValue=s,o!==null)if(ot(o.value,s)){if(o.children===i.children&&!Ne.current){e=xt(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Pt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),El(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(I(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),El(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Se(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,dr(e,n),i=Ye(i),r=r(i),e.flags|=1,Se(t,e,r,n),e.child;case 14:return r=e.type,i=et(r,e.pendingProps),i=et(r.type,i),Qd(t,e,r,i,n);case 15:return Bp(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:et(r,i),xo(t,e),e.tag=1,xe(r)?(t=!0,Qo(e)):t=!1,dr(e,n),zp(e,r,i),Sl(e,r,i,n),Pl(null,e,r,!0,t,n);case 19:return Yp(t,e,n);case 22:return Hp(t,e,n)}throw Error(I(156,e.tag))};function dm(t,e){return Uh(t,e)}function b0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(t,e,n,r){return new b0(t,e,n,r)}function mc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function R0(t){if(typeof t=="function")return mc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lu)return 11;if(t===Du)return 14}return 2}function en(t,e){var n=t.alternate;return n===null?(n=Ge(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Do(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")mc(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Yn:return Sn(n.children,i,o,e);case Au:s=8,i|=8;break;case Ka:return t=Ge(12,n,e,i|2),t.elementType=Ka,t.lanes=o,t;case qa:return t=Ge(13,n,e,i),t.elementType=qa,t.lanes=o,t;case Ya:return t=Ge(19,n,e,i),t.elementType=Ya,t.lanes=o,t;case Eh:return Us(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _h:s=10;break e;case wh:s=9;break e;case Lu:s=11;break e;case Du:s=14;break e;case Ft:s=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=Ge(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Sn(t,e,n,r){return t=Ge(7,t,r,e),t.lanes=n,t}function Us(t,e,n,r){return t=Ge(22,t,r,e),t.elementType=Eh,t.lanes=n,t.stateNode={isHidden:!1},t}function Oa(t,e,n){return t=Ge(6,t,null,e),t.lanes=n,t}function ba(t,e,n){return e=Ge(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function N0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ua(0),this.expirationTimes=ua(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ua(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gc(t,e,n,r,i,o,s,a,l){return t=new N0(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Ge(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zu(o),t}function x0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function fm(t){if(!t)return on;t=t._reactInternals;e:{if(Mn(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(xe(n))return fp(t,n,e)}return e}function hm(t,e,n,r,i,o,s,a,l){return t=gc(n,r,!0,t,i,o,s,a,l),t.context=fm(null),n=t.current,r=Te(),i=Zt(n),o=Pt(r,i),o.callback=e??null,Jt(n,o,i),t.current.lanes=i,Gi(t,i,r),Ae(t,r),t}function Fs(t,e,n,r){var i=e.current,o=Te(),s=Zt(i);return n=fm(n),e.context===null?e.context=n:e.pendingContext=n,e=Pt(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Jt(i,e,s),t!==null&&(it(t,i,s,o),bo(t,i,s)),s}function us(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function uf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vc(t,e){uf(t,e),(t=t.alternate)&&uf(t,e)}function A0(){return null}var pm=typeof reportError=="function"?reportError:function(t){console.error(t)};function yc(t){this._internalRoot=t}$s.prototype.render=yc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Fs(t,e,null,null)};$s.prototype.unmount=yc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rn(function(){Fs(null,t,null,null)}),e[Rt]=null}};function $s(t){this._internalRoot=t}$s.prototype.unstable_scheduleHydration=function(t){if(t){var e=Hh();t={blockedOn:null,target:t,priority:e};for(var n=0;n<zt.length&&e!==0&&e<zt[n].priority;n++);zt.splice(n,0,t),n===0&&Kh(t)}};function _c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function cf(){}function L0(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=us(s);o.call(u)}}var s=hm(e,r,t,0,null,!1,!1,"",cf);return t._reactRootContainer=s,t[Rt]=s.current,Ci(t.nodeType===8?t.parentNode:t),Rn(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=us(l);a.call(u)}}var l=gc(t,0,!1,null,null,!1,!1,"",cf);return t._reactRootContainer=l,t[Rt]=l.current,Ci(t.nodeType===8?t.parentNode:t),Rn(function(){Fs(e,l,n,r)}),l}function Ws(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=us(s);a.call(l)}}Fs(e,s,t,i)}else s=L0(n,e,t,i,r);return us(s)}Vh=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ni(e.pendingLanes);n!==0&&(Uu(e,n|1),Ae(e,te()),!(j&6)&&(Pr=te()+500,dn()))}break;case 13:Rn(function(){var r=Nt(t,1);if(r!==null){var i=Te();it(r,t,1,i)}}),vc(t,1)}};Fu=function(t){if(t.tag===13){var e=Nt(t,134217728);if(e!==null){var n=Te();it(e,t,134217728,n)}vc(t,134217728)}};Bh=function(t){if(t.tag===13){var e=Zt(t),n=Nt(t,e);if(n!==null){var r=Te();it(n,t,e,r)}vc(t,e)}};Hh=function(){return U};Gh=function(t,e){var n=U;try{return U=t,e()}finally{U=n}};ol=function(t,e,n){switch(e){case"input":if(Xa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=xs(r);if(!i)throw Error(I(90));Sh(r),Xa(r,i)}}}break;case"textarea":Th(t,n);break;case"select":e=n.value,e!=null&&ar(t,!!n.multiple,e,!1)}};xh=fc;Ah=Rn;var D0={usingClientEntryPoint:!1,Events:[qi,Zn,xs,Rh,Nh,fc]},Qr={findFiberByHostInstance:yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j0={bundleType:Qr.bundleType,version:Qr.version,rendererPackageName:Qr.rendererPackageName,rendererConfig:Qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jh(t),t===null?null:t.stateNode},findFiberByHostInstance:Qr.findFiberByHostInstance||A0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Io.isDisabled&&Io.supportsFiber)try{Os=Io.inject(j0),mt=Io}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D0;We.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_c(e))throw Error(I(200));return x0(t,e,null,n)};We.createRoot=function(t,e){if(!_c(t))throw Error(I(299));var n=!1,r="",i=pm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=gc(t,1,!1,null,null,n,!1,r,i),t[Rt]=e.current,Ci(t.nodeType===8?t.parentNode:t),new yc(e)};We.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=jh(e),t=t===null?null:t.stateNode,t};We.flushSync=function(t){return Rn(t)};We.hydrate=function(t,e,n){if(!zs(e))throw Error(I(200));return Ws(null,t,e,!0,n)};We.hydrateRoot=function(t,e,n){if(!_c(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=pm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=hm(e,null,t,1,n??null,i,!1,o,s),t[Rt]=e.current,Ci(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new $s(e)};We.render=function(t,e,n){if(!zs(e))throw Error(I(200));return Ws(null,t,e,!1,n)};We.unmountComponentAtNode=function(t){if(!zs(t))throw Error(I(40));return t._reactRootContainer?(Rn(function(){Ws(null,null,t,!1,function(){t._reactRootContainer=null,t[Rt]=null})}),!0):!1};We.unstable_batchedUpdates=fc;We.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!zs(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return Ws(t,e,n,!1,r)};We.version="18.3.1-next-f1338f8080-20240426";function mm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mm)}catch(t){console.error(t)}}mm(),mh.exports=We;var M0=mh.exports,df=M0;Ha.createRoot=df.createRoot,Ha.hydrateRoot=df.hydrateRoot;/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ji(){return ji=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ji.apply(this,arguments)}var Ht;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ht||(Ht={}));const ff="popstate";function U0(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return Ul("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:cs(i)}return $0(e,n,null,t)}function ie(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function gm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function F0(){return Math.random().toString(36).substr(2,8)}function hf(t,e){return{usr:t.state,key:t.key,idx:e}}function Ul(t,e,n,r){return n===void 0&&(n=null),ji({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Lr(e):e,{state:n,key:e&&e.key||r||F0()})}function cs(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Lr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function $0(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Ht.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(ji({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function c(){a=Ht.Pop;let k=d(),p=k==null?null:k-u;u=k,l&&l({action:a,location:E.location,delta:p})}function h(k,p){a=Ht.Push;let f=Ul(E.location,k,p);u=d()+1;let m=hf(f,u),w=E.createHref(f);try{s.pushState(m,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}o&&l&&l({action:a,location:E.location,delta:1})}function y(k,p){a=Ht.Replace;let f=Ul(E.location,k,p);u=d();let m=hf(f,u),w=E.createHref(f);s.replaceState(m,"",w),o&&l&&l({action:a,location:E.location,delta:0})}function _(k){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof k=="string"?k:cs(k);return f=f.replace(/ $/,"%20"),ie(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let E={get action(){return a},get location(){return t(i,s)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ff,c),l=k,()=>{i.removeEventListener(ff,c),l=null}},createHref(k){return e(i,k)},createURL:_,encodeLocation(k){let p=_(k);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:y,go(k){return s.go(k)}};return E}var pf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(pf||(pf={}));function z0(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Lr(e):e,i=wc(r.pathname||"/",n);if(i==null)return null;let o=vm(t);W0(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let l=e_(i);s=J0(o[a],l)}return s}function vm(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(ie(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=tn([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(ie(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),vm(o.children,e,d,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:Y0(u,o.index),routesMeta:d})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of ym(o.path))i(o,s,l)}),e}function ym(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=ym(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function W0(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Q0(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const V0=/^:[\w-]+$/,B0=3,H0=2,G0=1,K0=10,q0=-2,mf=t=>t==="*";function Y0(t,e){let n=t.split("/"),r=n.length;return n.some(mf)&&(r+=q0),e&&(r+=H0),n.filter(i=>!mf(i)).reduce((i,o)=>i+(V0.test(o)?B0:o===""?G0:K0),r)}function Q0(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function J0(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=X0({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;o.push({params:r,pathname:tn([i,d.pathname]),pathnameBase:i_(tn([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=tn([i,d.pathnameBase]))}return o}function X0(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Z0(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:h,isOptional:y}=d;if(h==="*"){let E=a[c]||"";s=o.slice(0,o.length-E.length).replace(/(.)\/+$/,"$1")}const _=a[c];return y&&!_?u[h]=void 0:u[h]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:t}}function Z0(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),gm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function e_(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return gm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function wc(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function t_(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Lr(t):t;return{pathname:n?n.startsWith("/")?n:n_(n,e):e,search:o_(r),hash:s_(i)}}function n_(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ra(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function r_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function _m(t,e){let n=r_(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function wm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Lr(t):(i=ji({},t),ie(!i.pathname||!i.pathname.includes("?"),Ra("?","pathname","search",i)),ie(!i.pathname||!i.pathname.includes("#"),Ra("#","pathname","hash",i)),ie(!i.search||!i.search.includes("#"),Ra("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let c=e.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}a=c>=0?e[c]:"/"}let l=t_(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const tn=t=>t.join("/").replace(/\/\/+/g,"/"),i_=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),o_=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,s_=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function a_(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Em=["post","put","patch","delete"];new Set(Em);const l_=["get",...Em];new Set(l_);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mi(){return Mi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Mi.apply(this,arguments)}const Ec=P.createContext(null),u_=P.createContext(null),Un=P.createContext(null),Vs=P.createContext(null),Fn=P.createContext({outlet:null,matches:[],isDataRoute:!1}),Im=P.createContext(null);function c_(t,e){let{relative:n}=e===void 0?{}:e;Qi()||ie(!1);let{basename:r,navigator:i}=P.useContext(Un),{hash:o,pathname:s,search:a}=km(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:tn([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Qi(){return P.useContext(Vs)!=null}function Bs(){return Qi()||ie(!1),P.useContext(Vs).location}function Sm(t){P.useContext(Un).static||P.useLayoutEffect(t)}function Ic(){let{isDataRoute:t}=P.useContext(Fn);return t?S_():d_()}function d_(){Qi()||ie(!1);let t=P.useContext(Ec),{basename:e,future:n,navigator:r}=P.useContext(Un),{matches:i}=P.useContext(Fn),{pathname:o}=Bs(),s=JSON.stringify(_m(i,n.v7_relativeSplatPath)),a=P.useRef(!1);return Sm(()=>{a.current=!0}),P.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=wm(u,JSON.parse(s),o,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:tn([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,s,o,t])}function km(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=P.useContext(Un),{matches:i}=P.useContext(Fn),{pathname:o}=Bs(),s=JSON.stringify(_m(i,r.v7_relativeSplatPath));return P.useMemo(()=>wm(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function f_(t,e){return h_(t,e)}function h_(t,e,n,r){Qi()||ie(!1);let{navigator:i}=P.useContext(Un),{matches:o}=P.useContext(Fn),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=Bs(),d;if(e){var c;let k=typeof e=="string"?Lr(e):e;l==="/"||(c=k.pathname)!=null&&c.startsWith(l)||ie(!1),d=k}else d=u;let h=d.pathname||"/",y=h;if(l!=="/"){let k=l.replace(/^\//,"").split("/");y="/"+h.replace(/^\//,"").split("/").slice(k.length).join("/")}let _=z0(t,{pathname:y}),E=y_(_&&_.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:tn([l,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:tn([l,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),o,n,r);return e&&E?P.createElement(Vs.Provider,{value:{location:Mi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Ht.Pop}},E):E}function p_(){let t=I_(),e=a_(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:i},n):null,null)}const m_=P.createElement(p_,null);class g_ extends P.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?P.createElement(Fn.Provider,{value:this.props.routeContext},P.createElement(Im.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function v_(t){let{routeContext:e,match:n,children:r}=t,i=P.useContext(Ec);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(Fn.Provider,{value:e},r)}function y_(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if((o=n)!=null&&o.errors)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=s.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);d>=0||ie(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let c=s[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:h,errors:y}=n,_=c.route.loader&&h[c.route.id]===void 0&&(!y||y[c.route.id]===void 0);if(c.route.lazy||_){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,c,h)=>{let y,_=!1,E=null,k=null;n&&(y=a&&c.route.id?a[c.route.id]:void 0,E=c.route.errorElement||m_,l&&(u<0&&h===0?(_=!0,k=null):u===h&&(_=!0,k=c.route.hydrateFallbackElement||null)));let p=e.concat(s.slice(0,h+1)),f=()=>{let m;return y?m=E:_?m=k:c.route.Component?m=P.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=d,P.createElement(v_,{match:c,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:m})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?P.createElement(g_,{location:n.location,revalidation:n.revalidation,component:E,error:y,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var Tm=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Tm||{}),ds=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ds||{});function __(t){let e=P.useContext(Ec);return e||ie(!1),e}function w_(t){let e=P.useContext(u_);return e||ie(!1),e}function E_(t){let e=P.useContext(Fn);return e||ie(!1),e}function Pm(t){let e=E_(),n=e.matches[e.matches.length-1];return n.route.id||ie(!1),n.route.id}function I_(){var t;let e=P.useContext(Im),n=w_(ds.UseRouteError),r=Pm(ds.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function S_(){let{router:t}=__(Tm.UseNavigateStable),e=Pm(ds.UseNavigateStable),n=P.useRef(!1);return Sm(()=>{n.current=!0}),P.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Mi({fromRouteId:e},o)))},[t,e])}function ii(t){ie(!1)}function k_(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ht.Pop,navigator:o,static:s=!1,future:a}=t;Qi()&&ie(!1);let l=e.replace(/^\/*/,"/"),u=P.useMemo(()=>({basename:l,navigator:o,static:s,future:Mi({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Lr(r));let{pathname:d="/",search:c="",hash:h="",state:y=null,key:_="default"}=r,E=P.useMemo(()=>{let k=wc(d,l);return k==null?null:{location:{pathname:k,search:c,hash:h,state:y,key:_},navigationType:i}},[l,d,c,h,y,_,i]);return E==null?null:P.createElement(Un.Provider,{value:u},P.createElement(Vs.Provider,{children:n,value:E}))}function T_(t){let{children:e,location:n}=t;return f_(Fl(e),n)}new Promise(()=>{});function Fl(t,e){e===void 0&&(e=[]);let n=[];return P.Children.forEach(t,(r,i)=>{if(!P.isValidElement(r))return;let o=[...e,i];if(r.type===P.Fragment){n.push.apply(n,Fl(r.props.children,o));return}r.type!==ii&&ie(!1),!r.props.index||!r.props.children||ie(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Fl(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $l(){return $l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$l.apply(this,arguments)}function P_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function C_(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function O_(t,e){return t.button===0&&(!e||e==="_self")&&!C_(t)}const b_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],R_="6";try{window.__reactRouterVersion=R_}catch{}const N_="startTransition",gf=Pv[N_];function x_(t){let{basename:e,children:n,future:r,window:i}=t,o=P.useRef();o.current==null&&(o.current=U0({window:i,v5Compat:!0}));let s=o.current,[a,l]=P.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=P.useCallback(c=>{u&&gf?gf(()=>l(c)):l(c)},[l,u]);return P.useLayoutEffect(()=>s.listen(d),[s,d]),P.createElement(k_,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const A_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",L_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vf=P.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:c}=e,h=P_(e,b_),{basename:y}=P.useContext(Un),_,E=!1;if(typeof u=="string"&&L_.test(u)&&(_=u,A_))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),T=wc(w.pathname,y);w.origin===m.origin&&T!=null?u=T+w.search+w.hash:E=!0}catch{}let k=c_(u,{relative:i}),p=D_(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:c});function f(m){r&&r(m),m.defaultPrevented||p(m)}return P.createElement("a",$l({},h,{href:_||k,onClick:E||o?r:f,ref:n,target:l}))});var yf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(yf||(yf={}));var _f;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(_f||(_f={}));function D_(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=e===void 0?{}:e,l=Ic(),u=Bs(),d=km(t,{relative:s});return P.useCallback(c=>{if(O_(c,n)){c.preventDefault();let h=r!==void 0?r:cs(u)===cs(d);l(t,{replace:h,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[u,l,d,r,i,n,t,o,s,a])}const fs="cMaqmX04a4Y9OGnuunW35X8SgDg5WfbXBMfrwxsg",j_=async(t,e)=>(console.log(fs),await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${t}&per_page=${e}&api_key=${fs}`)),M_=async()=>(console.log(fs),await fetch(`https://api.nasa.gov/planetary/apod?api_key=${fs}`));var Cm={exports:{}},U_="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",F_=U_,$_=F_;function Om(){}function bm(){}bm.resetWarningCache=Om;var z_=function(){function t(r,i,o,s,a,l){if(l!==$_){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:bm,resetWarningCache:Om};return n.PropTypes=n,n};Cm.exports=z_();var W_=Cm.exports;const g=Tu(W_);var Rm={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var o="",s=0;s<arguments.length;s++){var a=arguments[s];a&&(o=i(o,r(a)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var s="";for(var a in o)e.call(o,a)&&o[a]&&(s=i(s,a));return s}function i(o,s){return s?o?o+" "+s:o+s:o}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Rm);var V_=Rm.exports;const Ie=Tu(V_);function hs(t){"@babel/helpers - typeof";return hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},hs(t)}var B_;function ge(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B_;return e?t.split(" ").map(function(n){return e[n]||n}).join(" "):t}var wf={};function zl(t){wf[t]||(typeof console<"u"&&console.error(t),wf[t]=!0)}function H_(t,e){return function(r,i,o){r[i]!==null&&typeof r[i]<"u"&&zl('"'.concat(i,'" property of "').concat(o,`" has been deprecated.
`).concat(e));for(var s=arguments.length,a=new Array(s>3?s-3:0),l=3;l<s;l++)a[l-3]=arguments[l];return t.apply(void 0,[r,i,o].concat(a))}}var G_=(typeof window>"u"?"undefined":hs(window))==="object"&&window.Element||function(){};function K_(t,e,n){if(!(t[e]instanceof G_))return new Error("Invalid prop `"+e+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}g.oneOfType([g.string,g.func,K_,g.shape({current:g.any})]);var De=g.oneOfType([g.func,g.string,g.shape({$$typeof:g.symbol,render:g.func}),g.arrayOf(g.oneOfType([g.func,g.string,g.shape({$$typeof:g.symbol,render:g.func})]))]);function Nm(t){var e=hs(t);return t!=null&&(e==="object"||e==="function")}var q_=["className","cssModule","noGutters","tag","widths"];function Wl(){return Wl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wl.apply(this,arguments)}function Y_(t,e){if(t==null)return{};var n=Q_(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Q_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var J_=["xs","sm","md","lg","xl","xxl"],Bn=g.oneOfType([g.number,g.string]),X_={tag:De,noGutters:H_(g.bool,"Please use Bootstrap 5 gutter utility classes. https://getbootstrap.com/docs/5.0/layout/gutters/"),className:g.string,cssModule:g.object,xs:Bn,sm:Bn,md:Bn,lg:Bn,xl:Bn,xxl:Bn,widths:g.array};function ke(t){var e=t.className,n=t.cssModule,r=t.noGutters,i=t.tag,o=i===void 0?"div":i,s=t.widths,a=s===void 0?J_:s,l=Y_(t,q_),u=[];a.forEach(function(c,h){var y=t[c];if(delete l[c],!!y){var _=!h;u.push(_?"row-cols-".concat(y):"row-cols-".concat(c,"-").concat(y))}});var d=ge(Ie(e,r?"gx-0":null,"row",u),n);return $.createElement(o,Wl({},l,{className:d}))}ke.propTypes=X_;var Z_=["className","cssModule","widths","tag"];function Vl(){return Vl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vl.apply(this,arguments)}function ew(t,e){if(t==null)return{};var n=tw(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function tw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Na(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var xm=["xs","sm","md","lg","xl","xxl"],Ef=g.oneOfType([g.number,g.string]),Hn=g.oneOfType([g.bool,g.number,g.string,g.shape({size:g.oneOfType([g.bool,g.number,g.string]),order:Ef,offset:Ef})]),nw={tag:De,xs:Hn,sm:Hn,md:Hn,lg:Hn,xl:Hn,xxl:Hn,className:g.string,cssModule:g.object,widths:g.array},If=function(e,n,r){return r===!0||r===""?e?"col":"col-".concat(n):r==="auto"?e?"col-auto":"col-".concat(n,"-auto"):e?"col-".concat(r):"col-".concat(n,"-").concat(r)},rw=function(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:xm,i=e,o=[];return r.forEach(function(s,a){var l=i[s];if(delete i[s],!(!l&&l!=="")){var u=!a;if(Nm(l)){var d,c=u?"-":"-".concat(s,"-"),h=If(u,s,l.size);o.push(ge(Ie((d={},Na(d,h,l.size||l.size===""),Na(d,"order".concat(c).concat(l.order),l.order||l.order===0),Na(d,"offset".concat(c).concat(l.offset),l.offset||l.offset===0),d)),n))}else{var y=If(u,s,l);o.push(y)}}}),{colClasses:o,modifiedAttributes:i}};function wt(t){var e=t.className,n=t.cssModule,r=t.widths,i=r===void 0?xm:r,o=t.tag,s=o===void 0?"div":o,a=ew(t,Z_),l=rw(a,n,i),u=l.modifiedAttributes,d=l.colClasses;d.length||d.push("col");var c=ge(Ie(e,d),n);return $.createElement(s,Vl({},u,{className:c}))}wt.propTypes=nw;var iw=["expand","className","cssModule","light","dark","fixed","sticky","color","container","tag","children"];function Bl(){return Bl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bl.apply(this,arguments)}function xa(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ow(t,e){if(t==null)return{};var n=sw(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function sw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var aw={children:g.node,className:g.string,color:g.string,container:g.oneOfType([g.bool,g.string]),cssModule:g.object,dark:g.bool,expand:g.oneOfType([g.bool,g.string]),fixed:g.string,light:g.bool,role:g.string,sticky:g.string,tag:De},lw=function(e){return e===!1?!1:e===!0||e==="xs"?"navbar-expand":"navbar-expand-".concat(e)};function Am(t){var e,n=t.expand,r=n===void 0?!1:n,i=t.className,o=t.cssModule,s=t.light,a=t.dark,l=t.fixed,u=t.sticky,d=t.color,c=t.container,h=c===void 0?"fluid":c,y=t.tag,_=y===void 0?"nav":y,E=t.children,k=ow(t,iw),p=ge(Ie(i,"navbar",lw(r),(e={"navbar-light":s,"navbar-dark":a},xa(e,"bg-".concat(d),d),xa(e,"fixed-".concat(l),l),xa(e,"sticky-".concat(u),u),e)),o),f=h&&h===!0?"container":"container-".concat(h);return $.createElement(_,Bl({},k,{className:p}),h?$.createElement("div",{className:f},E):E)}Am.propTypes=aw;var uw=["className","cssModule","tag"];function Hl(){return Hl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hl.apply(this,arguments)}function cw(t,e){if(t==null)return{};var n=dw(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function dw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var fw={className:g.string,cssModule:g.object,tag:De};function Lm(t){var e=t.className,n=t.cssModule,r=t.tag,i=r===void 0?"a":r,o=cw(t,uw),s=ge(Ie(e,"navbar-brand"),n);return $.createElement(i,Hl({},o,{className:s}))}Lm.propTypes=fw;var hw=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"];function Gl(){return Gl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gl.apply(this,arguments)}function pw(t,e){if(t==null)return{};var n=mw(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function mw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var gw={card:g.bool,className:g.string,cssModule:g.object,fill:g.bool,horizontal:g.oneOf(["center","end"]),justified:g.bool,navbar:g.bool,pills:g.bool,tabs:g.bool,tag:De,vertical:g.oneOfType([g.bool,g.string])},vw=function(e){return e===!1?!1:e===!0||e==="xs"?"flex-column":"flex-".concat(e,"-column")};function Dm(t){var e=t.className,n=t.cssModule,r=t.tabs,i=t.pills,o=t.vertical,s=o===void 0?!1:o,a=t.horizontal,l=t.justified,u=t.fill,d=t.navbar,c=t.card,h=t.tag,y=h===void 0?"ul":h,_=pw(t,hw),E=ge(Ie(e,d?"navbar-nav":"nav",a?"justify-content-".concat(a):!1,vw(s),{"nav-tabs":r,"card-header-tabs":c&&r,"nav-pills":i,"card-header-pills":c&&i,"nav-justified":l,"nav-fill":u}),n);return $.createElement(y,Gl({},_,{className:E}))}Dm.propTypes=gw;var yw=["className","cssModule","active","tag"];function Kl(){return Kl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Kl.apply(this,arguments)}function _w(t,e){if(t==null)return{};var n=ww(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function ww(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var Ew={active:g.bool,className:g.string,cssModule:g.object,tag:De};function ql(t){var e=t.className,n=t.cssModule,r=t.active,i=t.tag,o=i===void 0?"li":i,s=_w(t,yw),a=ge(Ie(e,"nav-item",r?"active":!1),n);return $.createElement(o,Kl({},s,{className:a}))}ql.propTypes=Ew;function Yl(t){"@babel/helpers - typeof";return Yl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yl(t)}var Iw=["className","cssModule","active","tag","innerRef"];function Ql(){return Ql=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ql.apply(this,arguments)}function Sw(t,e){if(t==null)return{};var n=kw(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function kw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Tw(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Pw(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Cw(t,e,n){return e&&Pw(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ow(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Jl(t,e)}function Jl(t,e){return Jl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Jl(t,e)}function bw(t){var e=Nw();return function(){var r=ps(t),i;if(e){var o=ps(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Rw(this,i)}}function Rw(t,e){if(e&&(Yl(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return jm(t)}function jm(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Nw(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ps(t){return ps=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},ps(t)}var xw={active:g.bool,className:g.string,cssModule:g.object,disabled:g.bool,href:g.any,innerRef:g.oneOfType([g.object,g.func,g.string]),onClick:g.func,tag:De},Xl=function(t){Ow(n,t);var e=bw(n);function n(r){var i;return Tw(this,n),i=e.call(this,r),i.onClick=i.onClick.bind(jm(i)),i}return Cw(n,[{key:"onClick",value:function(i){if(this.props.disabled){i.preventDefault();return}this.props.href==="#"&&i.preventDefault(),this.props.onClick&&this.props.onClick(i)}},{key:"render",value:function(){var i=this.props,o=i.className,s=i.cssModule,a=i.active,l=i.tag,u=l===void 0?"a":l,d=i.innerRef,c=Sw(i,Iw),h=ge(Ie(o,"nav-link",{disabled:c.disabled,active:a}),s);return $.createElement(u,Ql({},c,{ref:d,onClick:this.onClick,className:h}))}}]),n}($.Component);Xl.propTypes=xw;var Aw=["className","cssModule","variant","innerRef"];function Zl(){return Zl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Zl.apply(this,arguments)}function Sf(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Lw(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Sf(Object(n),!0).forEach(function(r){Dw(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Sf(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Dw(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function jw(t,e){if(t==null)return{};var n=Mw(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Mw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var Uw={active:g.bool,"aria-label":g.string,onClick:g.func,variant:g.oneOf(["white"]),className:g.string,cssModule:g.object,innerRef:g.oneOfType([g.object,g.string,g.func])};function Mm(t){var e=t.className;t.cssModule;var n=t.variant,r=t.innerRef,i=jw(t,Aw),o=ge(Ie(e,"btn-close",n&&"btn-close-".concat(n)));return $.createElement("button",Zl({ref:r,type:"button",className:o},Lw({"aria-label":"close"},i)))}Mm.propTypes=Uw;var Fw=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"];function eu(){return eu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},eu.apply(this,arguments)}function $w(t,e){if(t==null)return{};var n=zw(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function zw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var Ww={active:g.bool,"aria-label":g.string,block:g.bool,children:g.node,className:g.string,cssModule:g.object,close:g.bool,color:g.string,disabled:g.bool,innerRef:g.oneOfType([g.object,g.func,g.string]),onClick:g.func,outline:g.bool,size:g.string,tag:De};function Sc(t){var e=P.useCallback(function(f){if(t.disabled){f.preventDefault();return}if(t.onClick)return t.onClick(f)},[t.onClick,t.disabled]),n=t.active,r=t["aria-label"],i=t.block,o=t.className,s=t.close,a=t.cssModule,l=t.color,u=l===void 0?"secondary":l,d=t.outline,c=t.size,h=t.tag,y=h===void 0?"button":h,_=t.innerRef,E=$w(t,Fw);if(s)return $.createElement(Mm,E);var k="btn".concat(d?"-outline":"","-").concat(u),p=ge(Ie(o,"btn",k,c?"btn-".concat(c):!1,i?"d-block w-100":!1,{active:n,disabled:t.disabled}),a);return E.href&&y==="button"&&(y="a"),$.createElement(y,eu({type:y==="button"&&E.onClick?"button":void 0},E,{className:p,ref:_,onClick:e,"aria-label":r}))}Sc.propTypes=Ww;var Vw=["className","cssModule","color","body","inverse","outline","tag","innerRef"];function tu(){return tu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tu.apply(this,arguments)}function Bw(t,e){if(t==null)return{};var n=Hw(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Hw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var Gw={body:g.bool,className:g.string,color:g.string,cssModule:g.object,innerRef:g.oneOfType([g.object,g.string,g.func]),inverse:g.bool,outline:g.bool,tag:De};function Um(t){var e=t.className,n=t.cssModule,r=t.color,i=t.body,o=t.inverse,s=t.outline,a=t.tag,l=a===void 0?"div":a,u=t.innerRef,d=Bw(t,Vw),c=ge(Ie(e,"card",o?"text-white":!1,i?"card-body":!1,r?"".concat(s?"border":"bg","-").concat(r):!1),n);return $.createElement(l,tu({},d,{className:c,ref:u}))}Um.propTypes=Gw;var Kw=["className","cssModule","innerRef","tag"];function nu(){return nu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nu.apply(this,arguments)}function qw(t,e){if(t==null)return{};var n=Yw(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Yw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var Qw={className:g.string,cssModule:g.object,innerRef:g.oneOfType([g.object,g.string,g.func]),tag:De};function Fm(t){var e=t.className,n=t.cssModule,r=t.innerRef,i=t.tag,o=i===void 0?"div":i,s=qw(t,Kw),a=ge(Ie(e,"card-body"),n);return $.createElement(o,nu({},s,{className:a,ref:r}))}Fm.propTypes=Qw;function ru(t){"@babel/helpers - typeof";return ru=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ru(t)}var Jw=["className","cssModule","tag","innerRef"];function iu(){return iu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},iu.apply(this,arguments)}function Xw(t,e){if(t==null)return{};var n=Zw(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Zw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function eE(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function tE(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function nE(t,e,n){return e&&tE(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function rE(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ou(t,e)}function ou(t,e){return ou=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},ou(t,e)}function iE(t){var e=sE();return function(){var r=ms(t),i;if(e){var o=ms(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return oE(this,i)}}function oE(t,e){if(e&&(ru(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return su(t)}function su(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function sE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ms(t){return ms=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},ms(t)}var aE={children:g.node,tag:De,innerRef:g.oneOfType([g.object,g.func,g.string]),className:g.string,cssModule:g.object},kc=function(t){rE(n,t);var e=iE(n);function n(r){var i;return eE(this,n),i=e.call(this,r),i.getRef=i.getRef.bind(su(i)),i.submit=i.submit.bind(su(i)),i}return nE(n,[{key:"getRef",value:function(i){this.props.innerRef&&this.props.innerRef(i),this.ref=i}},{key:"submit",value:function(){this.ref&&this.ref.submit()}},{key:"render",value:function(){var i=this.props,o=i.className,s=i.cssModule,a=i.tag,l=a===void 0?"form":a,u=i.innerRef,d=Xw(i,Jw),c=ge(o,s);return $.createElement(l,iu({},d,{ref:u,className:c}))}}]),n}(P.Component);kc.propTypes=aE;var lE=["className","cssModule","row","disabled","check","inline","floating","noMargin","tag","switch"];function au(){return au=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},au.apply(this,arguments)}function uE(t,e){if(t==null)return{};var n=cE(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function cE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var dE={children:g.node,row:g.bool,check:g.bool,switch:g.bool,inline:g.bool,floating:g.bool,noMargin:g.bool,disabled:g.bool,tag:De,className:g.string,cssModule:g.object};function hr(t){var e=t.className,n=t.cssModule,r=t.row,i=t.disabled,o=t.check,s=t.inline,a=t.floating,l=t.noMargin,u=t.tag,d=u===void 0?"div":u,c=t.switch,h=uE(t,lE),y=o||c,_=ge(Ie(e,r?"row":!1,y?"form-check":!1,c?"form-switch":!1,y||l?!1:"mb-3",y&&s?"form-check-inline":!1,y&&i?"disabled":!1,a&&"form-floating"),n);return d==="fieldset"&&(h.disabled=i),$.createElement(d,au({},h,{className:_}))}hr.propTypes=dE;function lu(t){"@babel/helpers - typeof";return lu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lu(t)}var fE=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"];function uu(){return uu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},uu.apply(this,arguments)}function hE(t,e){if(t==null)return{};var n=pE(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function pE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function mE(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function gE(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function vE(t,e,n){return e&&gE(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function yE(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&cu(t,e)}function cu(t,e){return cu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},cu(t,e)}function _E(t){var e=EE();return function(){var r=gs(t),i;if(e){var o=gs(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return wE(this,i)}}function wE(t,e){if(e&&(lu(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return du(t)}function du(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function EE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function gs(t){return gs=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},gs(t)}var IE={children:g.node,type:g.string,size:g.oneOfType([g.number,g.string]),bsSize:g.string,valid:g.bool,invalid:g.bool,tag:De,innerRef:g.oneOfType([g.object,g.func,g.string]),plaintext:g.bool,addon:g.bool,className:g.string,cssModule:g.object},pr=function(t){yE(n,t);var e=_E(n);function n(r){var i;return mE(this,n),i=e.call(this,r),i.getRef=i.getRef.bind(du(i)),i.focus=i.focus.bind(du(i)),i}return vE(n,[{key:"getRef",value:function(i){this.props.innerRef&&this.props.innerRef(i),this.ref=i}},{key:"focus",value:function(){this.ref&&this.ref.focus()}},{key:"render",value:function(){var i=this.props,o=i.className,s=i.cssModule,a=i.type,l=a===void 0?"text":a,u=i.bsSize,d=i.valid,c=i.invalid,h=i.tag,y=i.addon,_=i.plaintext,E=i.innerRef,k=hE(i,fE),p=["switch","radio","checkbox"].indexOf(l)>-1,f=/\D/g,m=l==="textarea",w=l==="select",T=l==="range",C=h||(w||m?l:"input"),O="form-control";_?(O="".concat(O,"-plaintext"),C=h||"input"):T?O="form-range":w?O="form-select":p&&(y?O=null:O="form-check-input"),k.size&&f.test(k.size)&&(zl(`Please use the prop "bsSize" instead of the "size" to bootstrap's input sizing.`),u=k.size,delete k.size);var N=ge(Ie(o,c&&"is-invalid",d&&"is-valid",u?w?"form-select-".concat(u):"form-control-".concat(u):!1,O),s);return(C==="input"||h&&typeof h=="function")&&(k.type=l==="switch"?"checkbox":l),k.children&&!(_||l==="select"||typeof C!="string"||C==="select")&&(zl('Input with a type of "'.concat(l,'" cannot have children. Please use "value"/"defaultValue" instead.')),delete k.children),$.createElement(C,uu({},k,{ref:E,className:N,"aria-invalid":c}))}}]),n}($.Component);pr.propTypes=IE;var SE=["className","cssModule","hidden","widths","tag","check","size","for"];function fu(){return fu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fu.apply(this,arguments)}function Aa(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function kE(t,e){if(t==null)return{};var n=TE(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function TE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var PE=["xs","sm","md","lg","xl","xxl"],La=g.oneOfType([g.number,g.string]),Gn=g.oneOfType([g.bool,g.string,g.number,g.shape({size:La,order:La,offset:La})]),CE={children:g.node,hidden:g.bool,check:g.bool,size:g.string,for:g.string,tag:De,className:g.string,cssModule:g.object,xs:Gn,sm:Gn,md:Gn,lg:Gn,xl:Gn,xxl:Gn,widths:g.array},kf=function(e,n,r){return r===!0||r===""?e?"col":"col-".concat(n):r==="auto"?e?"col-auto":"col-".concat(n,"-auto"):e?"col-".concat(r):"col-".concat(n,"-").concat(r)};function mr(t){var e=t.className,n=t.cssModule,r=t.hidden,i=t.widths,o=i===void 0?PE:i,s=t.tag,a=s===void 0?"label":s,l=t.check,u=t.size,d=t.for,c=kE(t,SE),h=[];o.forEach(function(k,p){var f=t[k];if(delete c[k],!(!f&&f!=="")){var m=!p,w;if(Nm(f)){var T,C=m?"-":"-".concat(k,"-");w=kf(m,k,f.size),h.push(ge(Ie((T={},Aa(T,w,f.size||f.size===""),Aa(T,"order".concat(C).concat(f.order),f.order||f.order===0),Aa(T,"offset".concat(C).concat(f.offset),f.offset||f.offset===0),T))),n)}else w=kf(m,k,f),h.push(w)}});var y=u||h.length,_=!(l||y),E=ge(Ie(e,r?"visually-hidden":!1,l?"form-check-label":!1,u?"col-form-label-".concat(u):!1,h,y?"col-form-label":!1,_?"form-label":!1),n);return $.createElement(a,fu({htmlFor:d},c,{className:E}))}mr.propTypes=CE;function OE(){const[t,e]=P.useState({}),n=async()=>{const i=await(await M_()).json();console.log("apod ",i),e(i)};return P.useEffect(()=>{n()},[]),v.jsxs(v.Fragment,{children:[v.jsx(ke,{className:"mt-5 ms-5 f-pink",children:v.jsx("h2",{children:" Astronomy Picture of the Day"})}),t?v.jsxs(ke,{className:"mo-5 position-relative",children:[v.jsx("img",{className:"url-img",src:t.url,alt:"cover"}),v.jsxs("div",{className:"position-absolute t-50 text-center w-100 text-white",children:[v.jsxs("p",{className:"h1",children:[v.jsx("span",{className:"f-perpal",style:{animation:"blinkingText 1s infinite"},children:"|"})," ",v.jsx("span",{style:{color:"rgba(0, 204, 255, 0.76)"},children:t.title})," ",v.jsx("span",{className:"f-pink",style:{animation:"blinkingText 1s infinite"},children:"|"})]}),v.jsx("div",{className:"w-res-75 text-center mx-auto",children:v.jsx("p",{className:"h3 t-black",children:t.explanation})})]})]}):"Loading.. . ."]})}const bE="/assets/cover-DDmpK4FQ.jpg",Tc="/assets/logo-XAJZSEDf.png",RE=t=>{localStorage.setItem("token",t),localStorage.setItem("status","success")},NE=()=>{localStorage.clear()},$m=()=>{const[t,e]=P.useState(!1),n=Ic();P.useEffect(()=>{const i=()=>{window.pageYOffset>100?e(!0):e(!1)};return localStorage.getItem("status")!=="success"&&r(),window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}},[]);const r=()=>{NE(),n("/login")};return v.jsxs(Am,{dark:!0,expand:"md",className:"fixed-top mt-3 mx-auto",children:[v.jsx(Lm,{style:{borderRadius:"100%",backgroundColor:t?"rgba(7, 7, 7, 0.685)":""},href:"/",children:v.jsx("img",{className:"logo-img",src:Tc,alt:"logo"})}),v.jsxs(Dm,{className:"w-nav-100 mx-sm-0 mx-4 rounded-4",style:t?{backgroundColor:"rgba(140, 54, 238, 1)"}:{backgroundColor:"rgba(0, 204, 255, 0.76)"},navbar:!0,children:[v.jsxs("div",{className:"d-flex mx-auto",children:[v.jsx(ql,{children:v.jsx(Xl,{className:"fs-4 fw-bold",tag:vf,to:"/",children:"Home"})}),v.jsx(ql,{children:v.jsx(Xl,{className:"fs-4 fw-bold",tag:vf,to:"/about",children:"About Us"})})]}),v.jsx("span",{onClick:r,className:"cursor-pointer text-danger d-flex align-items-center justify-content-end fs-5 fw-bold me-3 px-3 rounded-3",children:"LogOut"})]})]})};function xE(){return v.jsxs(v.Fragment,{children:[v.jsx("img",{src:bE,className:"cover-img",alt:"cover"}),v.jsx($m,{}),v.jsxs("div",{className:"position-absolute top-50 text-center w-100 text-white",children:[v.jsxs("h1",{className:"",children:["Embark on a Cosmic Journey with"," ",v.jsxs("span",{style:{color:"rgba(0, 204, 255, 0.76)"},children:["GalaxySTD..",v.jsx("span",{style:{animation:"blinkingText 1s infinite"},children:"|"})]})]}),v.jsx("div",{className:"w-75 text-center mx-auto",children:v.jsxs("h3",{children:["Discover the Wonders of the ",v.jsx("span",{style:{color:"rgba(73, 197, 228, 0.76)"},children:"Universe"}),", Engage with Fellow ",v.jsx("span",{style:{color:"rgba(0, 204, 255, 0.76)"},children:"Space Enthusiasts"}),", and Stay Updated on the Latest Celestial Adventures."]})})]})]})}var zm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Tf=$.createContext&&$.createContext(zm),AE=["attr","size","title"];function LE(t,e){if(t==null)return{};var n=DE(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function DE(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function vs(){return vs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vs.apply(this,arguments)}function Pf(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ys(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Pf(Object(n),!0).forEach(function(r){jE(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Pf(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function jE(t,e,n){return e=ME(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ME(t){var e=UE(t,"string");return typeof e=="symbol"?e:e+""}function UE(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Wm(t){return t&&t.map((e,n)=>$.createElement(e.tag,ys({key:n},e.attr),Wm(e.child)))}function Vm(t){return e=>$.createElement(FE,vs({attr:ys({},t.attr)},e),Wm(t.child))}function FE(t){var e=n=>{var{attr:r,size:i,title:o}=t,s=LE(t,AE),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),$.createElement("svg",vs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:ys(ys({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&$.createElement("title",null,o),t.children)};return Tf!==void 0?$.createElement(Tf.Consumer,null,n=>e(n)):e(zm)}function $E(t){return Vm({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M301.3 147.6c-7.5-7.5-19.8-7.5-27.3 0l-95.4 95.7c-7.3 7.3-7.5 19.1-.6 26.6l94 94.3c3.8 3.8 8.7 5.7 13.7 5.7 4.9 0 9.9-1.9 13.6-5.6 7.5-7.5 7.6-19.7 0-27.3l-79.8-81 81.9-81.1c7.5-7.5 7.5-19.7-.1-27.3z"},child:[]},{tag:"path",attr:{d:"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm124.4 332.4C347.2 413.7 303 432 256 432s-91.2-18.3-124.4-51.6C98.3 347.2 80 303 80 256s18.3-91.2 51.6-124.4C164.8 98.3 209 80 256 80s91.2 18.3 124.4 51.6C413.7 164.8 432 209 432 256s-18.3 91.2-51.6 124.4z"},child:[]}]})(t)}function zE(t){return Vm({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M210.7 147.6c7.5-7.5 19.8-7.5 27.3 0l95.4 95.7c7.3 7.3 7.5 19.1.6 26.6l-94 94.3c-3.8 3.8-8.7 5.7-13.7 5.7-4.9 0-9.9-1.9-13.6-5.6-7.5-7.5-7.6-19.7 0-27.3l79.9-81.1-81.9-81.1c-7.6-7.4-7.6-19.6 0-27.2z"},child:[]},{tag:"path",attr:{d:"M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm32 0c0-47 18.3-91.2 51.6-124.4C164.8 98.3 209 80 256 80s91.2 18.3 124.4 51.6C413.7 164.8 432 209 432 256s-18.3 91.2-51.6 124.4C347.2 413.7 303 432 256 432s-91.2-18.3-124.4-51.6C98.3 347.2 80 303 80 256z"},child:[]}]})(t)}const WE=()=>{const[t,e]=P.useState([]),[n,r]=P.useState(1);P.useEffect(()=>{(async()=>{const l=await(await j_(n,2)).json();console.log(l),e(l.photos)})()},[n]);const i=()=>{r(n+1)},o=()=>{n>1&&r(n-1)};return v.jsxs("div",{children:[v.jsx("h1",{className:"my-5 ms-5 f-pink",children:"Welcome to Mars Exploration!"}),v.jsx(ke,{children:t&&t.length>0?t.map((s,a)=>v.jsx(ke,{className:"my-3",children:v.jsx(Um,{className:"mx-auto w-75 rounded-5 shadow-lg bg-dark text-white",children:v.jsx(Fm,{children:v.jsxs(ke,{className:"w-100",children:[v.jsx(wt,{className:"p-2",lg:6,children:v.jsx("img",{className:"w-100 rounded-5",src:s.img_src,alt:"Mars Rover Image"})}),v.jsxs(wt,{lg:6,children:[v.jsxs("h2",{className:"mt-4 f-blue ",children:["Meet the Martian Rover: ",s.rover.name]}),v.jsxs("p",{className:"fs-4",children:["Curious about Mars? You're in luck! Rovers are like remote-controlled vehicles that explore the surface of the Red Planet, sending back images and information to help scientists learn more about Mars. Today, we'll be exploring an image captured by the ",s.rover.name," ","rover."]}),v.jsxs("h2",{className:"mt-4 f-perpal",children:["Interesting Details from Mars Sol ",s.sol]}),v.jsxs("ul",{className:"fs-4",children:[v.jsxs("li",{children:["Image ID: ",s.id]}),v.jsxs("li",{children:["Camera: ",s.camera.full_name]}),v.jsxs("li",{children:["Martian Day (Sol): ",s.sol," (A Martian day, or sol, is slightly longer than an Earth day.)"]}),v.jsxs("li",{children:["Earth Date: ",s.earth_date]}),v.jsxs("li",{children:["This rover, ",s.rover.name,", has been exploring Mars since ",s.rover.landing_date,". It has captured a whopping ",s.rover.total_photos," images so far!"]})]})]})]})})})},a)):v.jsx("p",{children:"Loading data from Mars..."})}),v.jsxs("div",{className:"d-flex justify-content-center align-items-center hp-80",children:[v.jsx($E,{className:"icon-button",onClick:o})," ",v.jsx(zE,{className:"icon-button",onClick:i})," "]})]})};function VE(){return v.jsxs(v.Fragment,{children:[v.jsx(xE,{}),v.jsx(WE,{}),v.jsx(OE,{})]})}var Cf={};/**
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
 */const Bm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},BE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},Hm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=o>>2,c=(o&3)<<4|a>>4;let h=(a&15)<<2|u>>6,y=u&63;l||(y=64,s||(h=64)),r.push(n[d],n[c],n[h],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||c==null)throw new HE;const h=o<<2|a>>4;if(r.push(h),u!==64){const y=a<<4&240|u>>2;if(r.push(y),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class HE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const GE=function(t){const e=Bm(t);return Hm.encodeByteArray(e,!0)},Gm=function(t){return GE(t).replace(/\./g,"")},Km=function(t){try{return Hm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function _s(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!KE(n)||(t[n]=_s(t[n],e[n]));return t}function KE(t){return t!=="__proto__"}/**
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
 */function qE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const YE=()=>qE().__FIREBASE_DEFAULTS__,QE=()=>{if(typeof process>"u"||typeof Cf>"u")return;const t=Cf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},JE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Km(t[1]);return e&&JSON.parse(e)},Pc=()=>{try{return YE()||QE()||JE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qm=()=>{var t;return(t=Pc())===null||t===void 0?void 0:t.config},XE=t=>{var e;return(e=Pc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ZE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(oe())}function Ym(){var t;const e=(t=Pc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qm(){return typeof self=="object"&&self.self===self}function Jm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Cc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xm(){const t=oe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ws(){try{return typeof indexedDB=="object"}catch{return!1}}function tI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const nI="FirebaseError";class Le extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nI,Object.setPrototypeOf(this,Le.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$n.prototype.create)}}class $n{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?rI(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Le(i,a,r)}}function rI(t,e){return t.replace(iI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const iI=/\{\$([^}]+)}/g;/**
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
 */function Of(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function oI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(bf(o)&&bf(s)){if(!hu(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function bf(t){return t!==null&&typeof t=="object"}/**
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
 */function Dr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function sr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function oi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Zm(t,e){const n=new sI(t,e);return n.subscribe.bind(n)}class sI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");aI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Da),i.error===void 0&&(i.error=Da),i.complete===void 0&&(i.complete=Da);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Da(){}/**
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
 */function M(t){return t&&t._delegate?t._delegate:t}class sn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vn="[DEFAULT]";/**
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
 */class lI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ZE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cI(e))try{this.getOrInitializeService({instanceIdentifier:vn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vn){return this.instances.has(e)}getOptions(e=vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vn){return this.component?this.component.multipleInstances?e:vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uI(t){return t===vn?void 0:t}function cI(t){return t.instantiationMode==="EAGER"}/**
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
 */class eg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Oc=[];var F;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(F||(F={}));const tg={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},dI=F.INFO,fI={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},hI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=fI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bc{constructor(e){this.name=e,this._logLevel=dI,this._logHandler=hI,this._userLogHandler=null,Oc.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}function pI(t){Oc.forEach(e=>{e.setLogLevel(t)})}function mI(t,e){for(const n of Oc){let r=null;e&&e.level&&(r=tg[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,o,...s)=>{const a=s.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");o>=(r??i.logLevel)&&t({level:F[o].toLowerCase(),message:a,args:s,type:i.name})}}}const gI=(t,e)=>e.some(n=>t instanceof n);let Rf,Nf;function vI(){return Rf||(Rf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yI(){return Nf||(Nf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ng=new WeakMap,pu=new WeakMap,rg=new WeakMap,ja=new WeakMap,Rc=new WeakMap;function _I(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(nn(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&ng.set(n,t)}).catch(()=>{}),Rc.set(e,t),e}function wI(t){if(pu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});pu.set(t,e)}let mu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function EI(t){mu=t(mu)}function II(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ma(this),e,...n);return rg.set(r,e.sort?e.sort():[e]),nn(r)}:yI().includes(t)?function(...e){return t.apply(Ma(this),e),nn(ng.get(this))}:function(...e){return nn(t.apply(Ma(this),e))}}function SI(t){return typeof t=="function"?II(t):(t instanceof IDBTransaction&&wI(t),gI(t,vI())?new Proxy(t,mu):t)}function nn(t){if(t instanceof IDBRequest)return _I(t);if(ja.has(t))return ja.get(t);const e=SI(t);return e!==t&&(ja.set(t,e),Rc.set(e,t)),e}const Ma=t=>Rc.get(t);function kI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=nn(s);return r&&s.addEventListener("upgradeneeded",l=>{r(nn(s.result),l.oldVersion,l.newVersion,nn(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const TI=["get","getKey","getAll","getAllKeys","count"],PI=["put","add","delete","clear"],Ua=new Map;function xf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ua.get(e))return Ua.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=PI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||TI.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ua.set(e,o),o}EI(t=>({...t,get:(e,n,r)=>xf(e,n)||t.get(e,n,r),has:(e,n)=>!!xf(e,n)||t.has(e,n)}));/**
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
 */class CI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(OI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function OI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Es="@firebase/app",gu="0.10.2";/**
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
 */const Nn=new bc("@firebase/app"),bI="@firebase/app-compat",RI="@firebase/analytics-compat",NI="@firebase/analytics",xI="@firebase/app-check-compat",AI="@firebase/app-check",LI="@firebase/auth",DI="@firebase/auth-compat",jI="@firebase/database",MI="@firebase/database-compat",UI="@firebase/functions",FI="@firebase/functions-compat",$I="@firebase/installations",zI="@firebase/installations-compat",WI="@firebase/messaging",VI="@firebase/messaging-compat",BI="@firebase/performance",HI="@firebase/performance-compat",GI="@firebase/remote-config",KI="@firebase/remote-config-compat",qI="@firebase/storage",YI="@firebase/storage-compat",QI="@firebase/firestore",JI="@firebase/firestore-compat",XI="firebase",ZI="10.11.1";/**
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
 */const an="[DEFAULT]",eS={[Es]:"fire-core",[bI]:"fire-core-compat",[NI]:"fire-analytics",[RI]:"fire-analytics-compat",[AI]:"fire-app-check",[xI]:"fire-app-check-compat",[LI]:"fire-auth",[DI]:"fire-auth-compat",[jI]:"fire-rtdb",[MI]:"fire-rtdb-compat",[UI]:"fire-fn",[FI]:"fire-fn-compat",[$I]:"fire-iid",[zI]:"fire-iid-compat",[WI]:"fire-fcm",[VI]:"fire-fcm-compat",[BI]:"fire-perf",[HI]:"fire-perf-compat",[GI]:"fire-rc",[KI]:"fire-rc-compat",[qI]:"fire-gcs",[YI]:"fire-gcs-compat",[QI]:"fire-fst",[JI]:"fire-fst-compat","fire-js":"fire-js",[XI]:"fire-js-all"};/**
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
 */const ln=new Map,Cr=new Map,Or=new Map;function Ui(t,e){try{t.container.addComponent(e)}catch(n){Nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ig(t,e){t.container.addOrOverwriteComponent(e)}function xn(t){const e=t.name;if(Or.has(e))return Nn.debug(`There were multiple attempts to register component ${e}.`),!1;Or.set(e,t);for(const n of ln.values())Ui(n,t);for(const n of Cr.values())Ui(n,t);return!0}function og(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tS(t,e,n=an){og(t,e).clearInstance(n)}function sg(t){return t.options!==void 0}function Q(t){return t.settings!==void 0}function nS(){Or.clear()}/**
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
 */const rS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qe=new $n("app","Firebase",rS);/**
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
 */let ag=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qe.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
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
 */class iS extends ag{constructor(e,n,r,i){const o=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,s={name:r,automaticDataCollectionEnabled:o};if(e.apiKey!==void 0)super(e,s,i);else{const a=e;super(a.options,s,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:o},n),this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()}),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,Ct(Es,gu,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){xc(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw qe.create("server-app-deleted")}}/**
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
 */const zn=ZI;function Nc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:an,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw qe.create("bad-app-name",{appName:String(i)});if(n||(n=qm()),!n)throw qe.create("no-options");const o=ln.get(i);if(o){if(hu(n,o.options)&&hu(r,o.config))return o;throw qe.create("duplicate-app",{appName:i})}const s=new eg(i);for(const l of Or.values())s.addComponent(l);const a=new ag(n,r,s);return ln.set(i,a),a}function oS(t,e){if(Qm())throw qe.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;sg(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=u=>[...u].reduce((d,c)=>Math.imul(31,d)+c.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw qe.create("finalization-registry-not-supported",{});const o=""+i(JSON.stringify(r)),s=Cr.get(o);if(s)return s.incRefCount(e.releaseOnDeref),s;const a=new eg(o);for(const u of Or.values())a.addComponent(u);const l=new iS(n,e,o,a);return Cr.set(o,l),l}function sS(t=an){const e=ln.get(t);if(!e&&t===an&&qm())return Nc();if(!e)throw qe.create("no-app",{appName:t});return e}function aS(){return Array.from(ln.values())}async function xc(t){let e=!1;const n=t.name;ln.has(n)?(e=!0,ln.delete(n)):Cr.has(n)&&t.decRefCount()<=0&&(Cr.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function Ct(t,e,n){var r;let i=(r=eS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nn.warn(a.join(" "));return}xn(new sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function lg(t,e){if(t!==null&&typeof t!="function")throw qe.create("invalid-log-argument");mI(t,e)}function ug(t){pI(t)}/**
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
 */const lS="firebase-heartbeat-database",uS=1,Fi="firebase-heartbeat-store";let Fa=null;function cg(){return Fa||(Fa=kI(lS,uS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fi)}catch(n){console.warn(n)}}}}).catch(t=>{throw qe.create("idb-open",{originalErrorMessage:t.message})})),Fa}async function cS(t){try{const n=(await cg()).transaction(Fi),r=await n.objectStore(Fi).get(dg(t));return await n.done,r}catch(e){if(e instanceof Le)Nn.warn(e.message);else{const n=qe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nn.warn(n.message)}}}async function Af(t,e){try{const r=(await cg()).transaction(Fi,"readwrite");await r.objectStore(Fi).put(e,dg(t)),await r.done}catch(n){if(n instanceof Le)Nn.warn(n.message);else{const r=qe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nn.warn(r.message)}}}function dg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dS=1024,fS=30*24*60*60*1e3;class hS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Lf();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=fS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lf(),{heartbeatsToSend:r,unsentEntries:i}=pS(this._heartbeatsCache.heartbeats),o=Gm(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Lf(){return new Date().toISOString().substring(0,10)}function pS(t,e=dS){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Df(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Df(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ws()?tI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Af(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Af(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Df(t){return Gm(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function gS(t){xn(new sn("platform-logger",e=>new CI(e),"PRIVATE")),xn(new sn("heartbeat",e=>new hS(e),"PRIVATE")),Ct(Es,gu,t),Ct(Es,gu,"esm2017"),Ct("fire-js","")}gS("");const vS=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Le,SDK_VERSION:zn,_DEFAULT_ENTRY_NAME:an,_addComponent:Ui,_addOrOverwriteComponent:ig,_apps:ln,_clearComponents:nS,_components:Or,_getProvider:og,_isFirebaseApp:sg,_isFirebaseServerApp:Q,_registerComponent:xn,_removeServiceInstance:tS,_serverApps:Cr,deleteApp:xc,getApp:sS,getApps:aS,initializeApp:Nc,initializeServerApp:oS,onLog:lg,registerVersion:Ct,setLogLevel:ug},Symbol.toStringTag,{value:"Module"}));/**
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
 */class yS{constructor(e,n){this._delegate=e,this.firebase=n,Ui(e,new sn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),xc(this._delegate)))}_getService(e,n=an){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=an){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Ui(this._delegate,e)}_addOrOverwriteComponent(e){ig(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const _S={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},jf=new $n("app-compat","Firebase",_S);/**
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
 */function wS(t){const e={},n={__esModule:!0,initializeApp:o,app:i,registerVersion:Ct,setLogLevel:ug,onLog:lg,apps:null,SDK_VERSION:zn,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:vS}};n.default=n,Object.defineProperty(n,"apps",{get:s});function r(u){delete e[u]}function i(u){if(u=u||an,!Of(e,u))throw jf.create("no-app",{appName:u});return e[u]}i.App=t;function o(u,d={}){const c=Nc(u,d);if(Of(e,c.name))return e[c.name];const h=new t(c,n);return e[c.name]=h,h}function s(){return Object.keys(e).map(u=>e[u])}function a(u){const d=u.name,c=d.replace("-compat","");if(xn(u)&&u.type==="PUBLIC"){const h=(y=i())=>{if(typeof y[c]!="function")throw jf.create("invalid-app-argument",{appName:d});return y[c]()};u.serviceProps!==void 0&&_s(h,u.serviceProps),n[c]=h,t.prototype[c]=function(...y){return this._getService.bind(this,d).apply(this,u.multipleInstances?y:[])}}return u.type==="PUBLIC"?n[c]:null}function l(u,d){return d==="serverAuth"?null:d}return n}/**
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
 */function fg(){const t=wS(yS);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:fg,extendNamespace:e,createSubscribe:Zm,ErrorFactory:$n,deepExtend:_s});function e(n){_s(t,n)}return t}const ES=fg();/**
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
 */const Mf=new bc("@firebase/app-compat"),IS="@firebase/app-compat",SS="0.2.32";/**
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
 */function kS(t){Ct(IS,SS,t)}/**
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
 */if(Qm()&&self.firebase!==void 0){Mf.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Mf.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const jr=ES;kS();var TS="firebase",PS="10.11.1";/**
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
 */jr.registerVersion(TS,PS,"app-compat");function Ac(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Jr={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Kn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function CS(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function hg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OS=CS,bS=hg,pg=new $n("auth","Firebase",hg());/**
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
 */const Is=new bc("@firebase/auth");function RS(t,...e){Is.logLevel<=F.WARN&&Is.warn(`Auth (${zn}): ${t}`,...e)}function jo(t,...e){Is.logLevel<=F.ERROR&&Is.error(`Auth (${zn}): ${t}`,...e)}/**
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
 */function ve(t,...e){throw Dc(t,...e)}function le(t,...e){return Dc(t,...e)}function Lc(t,e,n){const r=Object.assign(Object.assign({},bS()),{[e]:n});return new $n("auth","Firebase",r).create(e,{appName:t.name})}function fe(t){return Lc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mr(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ve(t,"argument-error"),Lc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pg.create(t,...e)}function S(t,e,...n){if(!t)throw Dc(e,...n)}function pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jo(e),new Error(e)}function st(t,e){t||pt(e)}/**
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
 */function $i(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jc(){return Uf()==="http:"||Uf()==="https:"}function Uf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function NS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jc()||Jm()||"connection"in navigator)?navigator.onLine:!0}function xS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ji{constructor(e,n){this.shortDelay=e,this.longDelay=n,st(n>e,"Short delay should be less than long delay!"),this.isMobile=eI()||Cc()}get(){return NS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Mc(t,e){st(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class mg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const AS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const LS=new Ji(3e4,6e4);function X(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Z(t,e,n,r,i={}){return gg(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Dr(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),mg.fetch()(vg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function gg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},AS),e);try{const i=new jS(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw si(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw si(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw si(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw si(t,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Lc(t,d,u);ve(t,d)}}catch(i){if(i instanceof Le)throw i;ve(t,"network-request-failed",{message:String(i)})}}async function Dt(t,e,n,r,i={}){const o=await Z(t,e,n,r,i);return"mfaPendingCredential"in o&&ve(t,"multi-factor-auth-required",{_serverResponse:o}),o}function vg(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Mc(t.config,i):`${t.config.apiScheme}://${i}`}function DS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(le(this.auth,"network-request-failed")),LS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function si(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=le(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function Ff(t){return t!==void 0&&t.getResponse!==void 0}function $f(t){return t!==void 0&&t.enterprise!==void 0}class MS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return DS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function US(t){return(await Z(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function FS(t,e){return Z(t,"GET","/v2/recaptchaConfig",X(t,e))}/**
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
 */async function $S(t,e){return Z(t,"POST","/v1/accounts:delete",e)}async function zS(t,e){return Z(t,"POST","/v1/accounts:update",e)}async function yg(t,e){return Z(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function gi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WS(t,e=!1){const n=M(t),r=await n.getIdToken(e),i=Hs(r);S(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:gi($a(i.auth_time)),issuedAtTime:gi($a(i.iat)),expirationTime:gi($a(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function $a(t){return Number(t)*1e3}function Hs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return jo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Km(n);return i?JSON.parse(i):(jo("Failed to decode base64 JWT payload"),null)}catch(i){return jo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zf(t){const e=Hs(t);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function At(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Le&&VS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function VS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class BS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gi(this.lastLoginAt),this.creationTime=gi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zi(t){var e;const n=t.auth,r=await t.getIdToken(),i=await At(t,yg(n,{idToken:r}));S(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?_g(o.providerUserInfo):[],a=GS(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new vu(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function HS(t){const e=M(t);await zi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _g(t){return t.map(e=>{var{providerId:n}=e,r=Ac(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function KS(t,e){const n=await gg(t,{},async()=>{const r=Dr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=vg(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",mg.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qS(t,e){return Z(t,"POST","/v2/accounts:revokeToken",X(t,e))}/**
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
 */class gr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){S(e.length!==0,"internal-error");const n=zf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(S(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await KS(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new gr;return r&&(S(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(S(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(S(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gr,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
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
 */function Ut(t,e){S(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class St{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Ac(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new vu(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await At(this,this.stsTokenManager.getToken(this.auth,e));return S(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WS(this,e)}reload(){return HS(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new St(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Q(this.auth.app))return Promise.reject(fe(this.auth));const e=await this.getIdToken();return await At(this,$S(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,y=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,_=(s=n.photoURL)!==null&&s!==void 0?s:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:w,isAnonymous:T,providerData:C,stsTokenManager:O}=n;S(m&&O,e,"internal-error");const N=gr.fromJSON(this.name,O);S(typeof m=="string",e,"internal-error"),Ut(c,e.name),Ut(h,e.name),S(typeof w=="boolean",e,"internal-error"),S(typeof T=="boolean",e,"internal-error"),Ut(y,e.name),Ut(_,e.name),Ut(E,e.name),Ut(k,e.name),Ut(p,e.name),Ut(f,e.name);const W=new St({uid:m,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:T,photoURL:_,phoneNumber:y,tenantId:E,stsTokenManager:N,createdAt:p,lastLoginAt:f});return C&&Array.isArray(C)&&(W.providerData=C.map(L=>Object.assign({},L))),k&&(W._redirectEventId=k),W}static async _fromIdTokenResponse(e,n,r=!1){const i=new gr;i.updateFromServerResponse(n);const o=new St({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zi(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];S(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?_g(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new gr;a.updateFromIdToken(r);const l=new St({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new vu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,u),l}}/**
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
 */const Wf=new Map;function Fe(t){st(t instanceof Function,"Expected a class definition");let e=Wf.get(t);return e?(st(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wf.set(t,e),e)}/**
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
 */class wg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wg.type="NONE";const br=wg;/**
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
 */function kn(t,e,n){return`firebase:${t}:${e}:${n}`}class vr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=kn(this.userKey,i.apiKey,o),this.fullPersistenceKey=kn("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?St._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vr(Fe(br),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Fe(br);const s=kn(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const c=St._fromJSON(e,d);u!==o&&(a=c),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new vr(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new vr(o,e,r))}}/**
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
 */function Vf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Eg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kg(e))return"Blackberry";if(Tg(e))return"Webos";if(Uc(e))return"Safari";if((e.includes("chrome/")||Ig(e))&&!e.includes("edge/"))return"Chrome";if(Xi(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Eg(t=oe()){return/firefox\//i.test(t)}function Uc(t=oe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ig(t=oe()){return/crios\//i.test(t)}function Sg(t=oe()){return/iemobile/i.test(t)}function Xi(t=oe()){return/android/i.test(t)}function kg(t=oe()){return/blackberry/i.test(t)}function Tg(t=oe()){return/webos/i.test(t)}function Ur(t=oe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function YS(t=oe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function QS(t=oe()){var e;return Ur(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JS(){return Xm()&&document.documentMode===10}function Pg(t=oe()){return Ur(t)||Xi(t)||Tg(t)||kg(t)||/windows phone/i.test(t)||Sg(t)}function XS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Cg(t,e=[]){let n;switch(t){case"Browser":n=Vf(oe());break;case"Worker":n=`${Vf(oe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zn}/${r}`}/**
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
 */class ZS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function e1(t,e={}){return Z(t,"GET","/v2/passwordPolicy",X(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const t1=6;class n1{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:t1,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class r1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bf(this),this.idTokenSubscription=new Bf(this),this.beforeStateQueue=new ZS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fe(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await vr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yg(this,{idToken:e}),r=await St._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Q(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Q(this.app))return Promise.reject(fe(this));const n=e?M(e):null;return n&&S(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Q(this.app)?Promise.reject(fe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Q(this.app)?Promise.reject(fe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await e1(this),n=new n1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $n("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await qS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fe(e)||this._popupRedirectResolver;S(n,this,"argument-error"),this.redirectPersistenceManager=await vr.create(this,[Fe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(S(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&RS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function J(t){return M(t)}class Bf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zm(n=>this.observer=n)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Zi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function i1(t){Zi=t}function Fc(t){return Zi.loadJS(t)}function o1(){return Zi.recaptchaV2Script}function s1(){return Zi.recaptchaEnterpriseScript}function a1(){return Zi.gapiScript}function Og(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const l1="recaptcha-enterprise",u1="NO_RECAPTCHA";class c1{constructor(e){this.type=l1,this.auth=J(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{FS(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new MS(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;$f(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(u1)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&$f(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=s1();l.length!==0&&(l+=a),Fc(l).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function Hf(t,e,n,r=!1){const i=new c1(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Wi(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Hf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Hf(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}function d1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function f1(t,e,n){const r=J(t);S(r._canInitEmulator,r,"emulator-config-failed"),S(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=bg(e),{host:s,port:a}=h1(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||p1()}function bg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function h1(t){const e=bg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Gf(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Gf(s)}}}function Gf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function p1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Fr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pt("not implemented")}_getIdTokenResponse(e){return pt("not implemented")}_linkToIdToken(e,n){return pt("not implemented")}_getReauthenticationResolver(e){return pt("not implemented")}}/**
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
 */async function Rg(t,e){return Z(t,"POST","/v1/accounts:resetPassword",X(t,e))}async function m1(t,e){return Z(t,"POST","/v1/accounts:update",e)}async function g1(t,e){return Z(t,"POST","/v1/accounts:signUp",e)}async function v1(t,e){return Z(t,"POST","/v1/accounts:update",X(t,e))}/**
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
 */async function y1(t,e){return Dt(t,"POST","/v1/accounts:signInWithPassword",X(t,e))}async function Gs(t,e){return Z(t,"POST","/v1/accounts:sendOobCode",X(t,e))}async function _1(t,e){return Gs(t,e)}async function w1(t,e){return Gs(t,e)}async function E1(t,e){return Gs(t,e)}async function I1(t,e){return Gs(t,e)}/**
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
 */async function S1(t,e){return Dt(t,"POST","/v1/accounts:signInWithEmailLink",X(t,e))}async function k1(t,e){return Dt(t,"POST","/v1/accounts:signInWithEmailLink",X(t,e))}/**
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
 */class Vi extends Fr{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Vi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Vi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wi(e,n,"signInWithPassword",y1);case"emailLink":return S1(e,{email:this._email,oobCode:this._password});default:ve(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wi(e,r,"signUpPassword",g1);case"emailLink":return k1(e,{idToken:n,email:this._email,oobCode:this._password});default:ve(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ot(t,e){return Dt(t,"POST","/v1/accounts:signInWithIdp",X(t,e))}/**
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
 */const T1="http://localhost";class vt extends Fr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Ac(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new vt(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Ot(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ot(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ot(e,n)}buildRequest(){const e={requestUri:T1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Dr(n)}return e}}/**
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
 */async function P1(t,e){return Z(t,"POST","/v1/accounts:sendVerificationCode",X(t,e))}async function C1(t,e){return Dt(t,"POST","/v1/accounts:signInWithPhoneNumber",X(t,e))}async function O1(t,e){const n=await Dt(t,"POST","/v1/accounts:signInWithPhoneNumber",X(t,e));if(n.temporaryProof)throw si(t,"account-exists-with-different-credential",n);return n}const b1={USER_NOT_FOUND:"user-not-found"};async function R1(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Dt(t,"POST","/v1/accounts:signInWithPhoneNumber",X(t,n),b1)}/**
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
 */class Tn extends Fr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Tn({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Tn({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return C1(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return O1(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return R1(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o}=e;return!r&&!n&&!i&&!o?null:new Tn({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o})}}/**
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
 */function N1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function x1(t){const e=sr(oi(t)).link,n=e?sr(oi(e)).deep_link_id:null,r=sr(oi(t)).deep_link_id;return(r?sr(oi(r)).link:null)||r||n||e||t}class Ks{constructor(e){var n,r,i,o,s,a;const l=sr(oi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,c=N1((i=l.mode)!==null&&i!==void 0?i:null);S(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=x1(e);try{return new Ks(n)}catch{return null}}}/**
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
 */class fn{constructor(){this.providerId=fn.PROVIDER_ID}static credential(e,n){return Vi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ks.parseLink(n);return S(r,"argument-error"),Vi._fromEmailAndCode(e,r.code,r.tenantId)}}fn.PROVIDER_ID="password";fn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class jt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $r extends jt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class yr extends $r{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return S("providerId"in n&&"signInMethod"in n,"argument-error"),vt._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return S(e.idToken||e.accessToken,"argument-error"),vt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return yr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return yr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:o,nonce:s,providerId:a}=e;if(!r&&!i&&!n&&!o||!a)return null;try{return new yr(a)._credential({idToken:n,accessToken:r,nonce:s,pendingToken:o})}catch{return null}}}/**
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
 */class ct extends $r{constructor(){super("facebook.com")}static credential(e){return vt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";ct.PROVIDER_ID="facebook.com";/**
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
 */class dt extends $r{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dt.credential(n,r)}catch{return null}}}dt.GOOGLE_SIGN_IN_METHOD="google.com";dt.PROVIDER_ID="google.com";/**
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
 */class ft extends $r{constructor(){super("github.com")}static credential(e){return vt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.GITHUB_SIGN_IN_METHOD="github.com";ft.PROVIDER_ID="github.com";/**
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
 */const A1="http://localhost";class Rr extends Fr{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Ot(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ot(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ot(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:o}=n;return!r||!i||!o||r!==i?null:new Rr(r,o)}static _create(e,n){return new Rr(e,n)}buildRequest(){return{requestUri:A1,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const L1="saml.";class Ss extends jt{constructor(e){S(e.startsWith(L1),"argument-error"),super(e)}static credentialFromResult(e){return Ss.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ss.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Rr.fromJSON(e);return S(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Rr._create(r,n)}catch{return null}}}/**
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
 */class ht extends $r{constructor(){super("twitter.com")}static credential(e,n){return vt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ht.credential(n,r)}catch{return null}}}ht.TWITTER_SIGN_IN_METHOD="twitter.com";ht.PROVIDER_ID="twitter.com";/**
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
 */async function Ng(t,e){return Dt(t,"POST","/v1/accounts:signUp",X(t,e))}/**
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
 */class Je{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await St._fromIdTokenResponse(e,r,i),s=Kf(r);return new Je({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Kf(r);return new Je({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Kf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function D1(t){var e;if(Q(t.app))return Promise.reject(fe(t));const n=J(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Je({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Ng(n,{returnSecureToken:!0}),i=await Je._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class ks extends Le{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ks.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ks(e,n,r,i)}}function xg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ks._fromErrorAndOperation(t,o,e,r):o})}/**
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
 */function Ag(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function j1(t,e){const n=M(t);await qs(!0,n,e);const{providerUserInfo:r}=await zS(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Ag(r||[]);return n.providerData=n.providerData.filter(o=>i.has(o.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function $c(t,e,n=!1){const r=await At(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Je._forOperation(t,"link",r)}async function qs(t,e,n){await zi(e);const r=Ag(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";S(r.has(n)===t,e.auth,i)}/**
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
 */async function Lg(t,e,n=!1){const{auth:r}=t;if(Q(r.app))return Promise.reject(fe(r));const i="reauthenticate";try{const o=await At(t,xg(r,i,e,t),n);S(o.idToken,r,"internal-error");const s=Hs(o.idToken);S(s,r,"internal-error");const{sub:a}=s;return S(t.uid===a,r,"user-mismatch"),Je._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&ve(r,"user-mismatch"),o}}/**
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
 */async function Dg(t,e,n=!1){if(Q(t.app))return Promise.reject(fe(t));const r="signIn",i=await xg(t,r,e),o=await Je._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function Ys(t,e){return Dg(J(t),e)}async function jg(t,e){const n=M(t);return await qs(!1,n,e.providerId),$c(n,e)}async function Mg(t,e){return Lg(M(t),e)}/**
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
 */async function M1(t,e){return Dt(t,"POST","/v1/accounts:signInWithCustomToken",X(t,e))}/**
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
 */async function U1(t,e){if(Q(t.app))return Promise.reject(fe(t));const n=J(t),r=await M1(n,{token:e,returnSecureToken:!0}),i=await Je._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class eo{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?zc._fromServerResponse(e,n):"totpInfo"in n?Wc._fromServerResponse(e,n):ve(e,"internal-error")}}class zc extends eo{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new zc(n)}}class Wc extends eo{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Wc(n)}}/**
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
 */function Qs(t,e,n){var r;S(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),S(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(S(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(S(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Vc(t){const e=J(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function F1(t,e,n){const r=J(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Qs(r,i,n),await Wi(r,i,"getOobCode",w1)}async function $1(t,e,n){await Rg(M(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Vc(t),r})}async function z1(t,e){await v1(M(t),{oobCode:e})}async function Ug(t,e){const n=M(t),r=await Rg(n,{oobCode:e}),i=r.requestType;switch(S(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":S(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":S(r.mfaInfo,n,"internal-error");default:S(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=eo._fromServerResponse(J(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:i}}async function W1(t,e){const{data:n}=await Ug(M(t),e);return n.email}async function V1(t,e,n){if(Q(t.app))return Promise.reject(fe(t));const r=J(t),s=await Wi(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ng).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Vc(t),l}),a=await Je._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function B1(t,e,n){return Q(t.app)?Promise.reject(fe(t)):Ys(M(t),fn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Vc(t),r})}/**
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
 */async function H1(t,e,n){const r=J(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(s,a){S(a.handleCodeInApp,r,"argument-error"),a&&Qs(r,s,a)}o(i,n),await Wi(r,i,"getOobCode",E1)}function G1(t,e){const n=Ks.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function K1(t,e,n){if(Q(t.app))return Promise.reject(fe(t));const r=M(t),i=fn.credentialWithLink(e,n||$i());return S(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Ys(r,i)}/**
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
 */async function q1(t,e){return Z(t,"POST","/v1/accounts:createAuthUri",X(t,e))}/**
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
 */async function Y1(t,e){const n=jc()?$i():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await q1(M(t),r);return i||[]}async function Q1(t,e){const n=M(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Qs(n.auth,i,e);const{email:o}=await _1(n.auth,i);o!==t.email&&await t.reload()}async function J1(t,e,n){const r=M(t),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Qs(r.auth,o,n);const{email:s}=await I1(r.auth,o);s!==t.email&&await t.reload()}/**
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
 */async function X1(t,e){return Z(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Z1(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=M(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await At(r,X1(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function ek(t,e){const n=M(t);return Q(n.auth.app)?Promise.reject(fe(n.auth)):Fg(n,e,null)}function tk(t,e){return Fg(M(t),null,e)}async function Fg(t,e,n){const{auth:r}=t,o={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(o.email=e),n&&(o.password=n);const s=await At(t,m1(r,o));await t._updateTokensIfNecessary(s,!0)}/**
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
 */function nk(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},o=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const s=(n=(e=Hs(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(s){const a=s!=="anonymous"&&s!=="custom"?s:null;return new _r(o,a)}}if(!r)return null;switch(r){case"facebook.com":return new rk(o,i);case"github.com":return new ik(o,i);case"google.com":return new ok(o,i);case"twitter.com":return new sk(o,i,t.screenName||null);case"custom":case"anonymous":return new _r(o,null);default:return new _r(o,r,i)}}class _r{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class $g extends _r{constructor(e,n,r,i){super(e,n,r),this.username=i}}class rk extends _r{constructor(e,n){super(e,"facebook.com",n)}}class ik extends $g{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class ok extends _r{constructor(e,n){super(e,"google.com",n)}}class sk extends $g{constructor(e,n,r){super(e,"twitter.com",n,r)}}function ak(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:nk(n)}/**
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
 */class En{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new En("enroll",e,n)}static _fromMfaPendingCredential(e){return new En("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return En._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return En._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Bc{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=J(e),i=n.customData._serverResponse,o=(i.mfaInfo||[]).map(a=>eo._fromServerResponse(r,a));S(i.mfaPendingCredential,r,"internal-error");const s=En._fromMfaPendingCredential(i.mfaPendingCredential);return new Bc(s,o,async a=>{const l=await a._process(r,s);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const d=await Je._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return S(n.user,r,"internal-error"),Je._forOperation(n.user,n.operationType,u);default:ve(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function lk(t,e){var n;const r=M(t),i=e;return S(e.customData.operationType,r,"argument-error"),S((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Bc._fromError(r,i)}/**
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
 */function uk(t,e){return Z(t,"POST","/v2/accounts/mfaEnrollment:start",X(t,e))}function ck(t,e){return Z(t,"POST","/v2/accounts/mfaEnrollment:finalize",X(t,e))}function dk(t,e){return Z(t,"POST","/v2/accounts/mfaEnrollment:withdraw",X(t,e))}class Hc{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>eo._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Hc(e)}async getSession(){return En._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),o=await At(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await At(this.user,dk(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const za=new WeakMap;function fk(t){const e=M(t);return za.has(e)||za.set(e,Hc._fromUser(e)),za.get(e)}const Ts="__sak";/**
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
 */class zg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ts,"1"),this.storage.removeItem(Ts),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function hk(){const t=oe();return Uc(t)||Ur(t)}const pk=1e3,mk=10;class Wg extends zg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=hk()&&XS(),this.fallbackToPolling=Pg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);JS()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wg.type="LOCAL";const Gc=Wg;/**
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
 */class Vg extends zg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vg.type="SESSION";const An=Vg;/**
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
 */function gk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Js{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Js(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await gk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Js.receivers=[];/**
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
 */function to(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class vk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=to("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(h.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function ne(){return window}function yk(t){ne().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Kc(){return typeof ne().WorkerGlobalScope<"u"&&typeof ne().importScripts=="function"}async function _k(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ek(){return Kc()?self:null}/**
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
 */const Bg="firebaseLocalStorageDb",Ik=1,Ps="firebaseLocalStorage",Hg="fbase_key";class no{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xs(t,e){return t.transaction([Ps],e?"readwrite":"readonly").objectStore(Ps)}function Sk(){const t=indexedDB.deleteDatabase(Bg);return new no(t).toPromise()}function yu(){const t=indexedDB.open(Bg,Ik);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ps,{keyPath:Hg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ps)?e(r):(r.close(),await Sk(),e(await yu()))})})}async function qf(t,e,n){const r=Xs(t,!0).put({[Hg]:e,value:n});return new no(r).toPromise()}async function kk(t,e){const n=Xs(t,!1).get(e),r=await new no(n).toPromise();return r===void 0?null:r.value}function Yf(t,e){const n=Xs(t,!0).delete(e);return new no(n).toPromise()}const Tk=800,Pk=3;class Gg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Pk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Js._getInstance(Ek()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _k(),!this.activeServiceWorker)return;this.sender=new vk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yu();return await qf(e,Ts,"1"),await Yf(e,Ts),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>qf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Xs(i,!1).getAll();return new no(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gg.type="LOCAL";const Bi=Gg;/**
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
 */function Ck(t,e){return Z(t,"POST","/v2/accounts/mfaSignIn:start",X(t,e))}function Ok(t,e){return Z(t,"POST","/v2/accounts/mfaSignIn:finalize",X(t,e))}/**
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
 */const bk=500,Rk=6e4,So=1e12;class Nk{constructor(e){this.auth=e,this.counter=So,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new xk(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||So;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||So;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||So;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class xk{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;S(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Ak(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Rk)},bk))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Ak(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Wa=Og("rcb"),Lk=new Ji(3e4,6e4);class Dk{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ne().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return S(jk(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Ff(ne().grecaptcha)?Promise.resolve(ne().grecaptcha):new Promise((r,i)=>{const o=ne().setTimeout(()=>{i(le(e,"network-request-failed"))},Lk.get());ne()[Wa]=()=>{ne().clearTimeout(o),delete ne()[Wa];const a=ne().grecaptcha;if(!a||!Ff(a)){i(le(e,"internal-error"));return}const l=a.render;a.render=(u,d)=>{const c=l(u,d);return this.counter++,c},this.hostLanguage=n,r(a)};const s=`${o1()}?${Dr({onload:Wa,render:"explicit",hl:n})}`;Fc(s).catch(()=>{clearTimeout(o),i(le(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=ne().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function jk(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Mk{async load(e){return new Nk(e)}clearedOneInstance(){}}/**
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
 */const Kg="recaptcha",Uk={theme:"light",type:"image"};let Fk=class{constructor(e,n,r=Object.assign({},Uk)){this.parameters=r,this.type=Kg,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=J(e),this.isInvisible=this.parameters.size==="invisible",S(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;S(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Mk:new Dk,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const o=s=>{s&&(this.tokenChangeListeners.delete(o),i(s))};this.tokenChangeListeners.add(o),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){S(!this.parameters.sitekey,this.auth,"argument-error"),S(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),S(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=ne()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){S(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){S(jc()&&!Kc(),this.auth,"internal-error"),await $k(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await US(this.auth);S(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return S(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function $k(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class qc{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Tn._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function zk(t,e,n){if(Q(t.app))return Promise.reject(fe(t));const r=J(t),i=await Zs(r,e,M(n));return new qc(i,o=>Ys(r,o))}async function Wk(t,e,n){const r=M(t);await qs(!1,r,"phone");const i=await Zs(r.auth,e,M(n));return new qc(i,o=>jg(r,o))}async function Vk(t,e,n){const r=M(t);if(Q(r.auth.app))return Promise.reject(fe(r.auth));const i=await Zs(r.auth,e,M(n));return new qc(i,o=>Mg(r,o))}async function Zs(t,e,n){var r;const i=await n.verify();try{S(typeof i=="string",t,"argument-error"),S(n.type===Kg,t,"argument-error");let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){const s=o.session;if("phoneNumber"in o)return S(s.type==="enroll",t,"internal-error"),(await uk(t,{idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{S(s.type==="signin",t,"internal-error");const a=((r=o.multiFactorHint)===null||r===void 0?void 0:r.uid)||o.multiFactorUid;return S(a,t,"missing-multi-factor-info"),(await Ck(t,{mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:s}=await P1(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return s}}finally{n._reset()}}async function Bk(t,e){const n=M(t);if(Q(n.auth.app))return Promise.reject(fe(n.auth));await $c(n,e)}/**
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
 */let Ln=class Mo{constructor(e){this.providerId=Mo.PROVIDER_ID,this.auth=J(e)}verifyPhoneNumber(e,n){return Zs(this.auth,e,M(n))}static credential(e,n){return Tn._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Mo.credentialFromTaggedObject(n)}static credentialFromError(e){return Mo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Tn._fromTokenResponse(n,r):null}};Ln.PROVIDER_ID="phone";Ln.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Wn(t,e){return e?Fe(e):(S(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Yc extends Fr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ot(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ot(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ot(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Hk(t){return Dg(t.auth,new Yc(t),t.bypassAuthState)}function Gk(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),Lg(n,new Yc(t),t.bypassAuthState)}async function Kk(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),$c(n,new Yc(t),t.bypassAuthState)}/**
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
 */class qg{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hk;case"linkViaPopup":case"linkViaRedirect":return Kk;case"reauthViaPopup":case"reauthViaRedirect":return Gk;default:ve(this.auth,"internal-error")}}resolve(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qk=new Ji(2e3,1e4);async function Yk(t,e,n){if(Q(t.app))return Promise.reject(le(t,"operation-not-supported-in-this-environment"));const r=J(t);Mr(t,e,jt);const i=Wn(r,n);return new kt(r,"signInViaPopup",e,i).executeNotNull()}async function Qk(t,e,n){const r=M(t);if(Q(r.auth.app))return Promise.reject(le(r.auth,"operation-not-supported-in-this-environment"));Mr(r.auth,e,jt);const i=Wn(r.auth,n);return new kt(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function Jk(t,e,n){const r=M(t);Mr(r.auth,e,jt);const i=Wn(r.auth,n);return new kt(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class kt extends qg{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,kt.currentPopupAction&&kt.currentPopupAction.cancel(),kt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){st(this.filter.length===1,"Popup operations only handle one event");const e=to();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(le(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qk.get())};e()}}kt.currentPopupAction=null;/**
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
 */const Xk="pendingRedirect",vi=new Map;class Zk extends qg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vi.get(this.auth._key());if(!e){try{const r=await eT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vi.set(this.auth._key(),e)}return this.bypassAuthState||vi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eT(t,e){const n=Qg(e),r=Yg(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Qc(t,e){return Yg(t)._set(Qg(e),"true")}function tT(){vi.clear()}function Jc(t,e){vi.set(t._key(),e)}function Yg(t){return Fe(t._redirectPersistence)}function Qg(t){return kn(Xk,t.config.apiKey,t.name)}/**
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
 */function nT(t,e,n){return rT(t,e,n)}async function rT(t,e,n){if(Q(t.app))return Promise.reject(fe(t));const r=J(t);Mr(t,e,jt),await r._initializationPromise;const i=Wn(r,n);return await Qc(i,r),i._openRedirect(r,e,"signInViaRedirect")}function iT(t,e,n){return oT(t,e,n)}async function oT(t,e,n){const r=M(t);if(Mr(r.auth,e,jt),Q(r.auth.app))return Promise.reject(fe(r.auth));await r.auth._initializationPromise;const i=Wn(r.auth,n);await Qc(i,r.auth);const o=await Jg(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",o)}function sT(t,e,n){return aT(t,e,n)}async function aT(t,e,n){const r=M(t);Mr(r.auth,e,jt),await r.auth._initializationPromise;const i=Wn(r.auth,n);await qs(!1,r,e.providerId),await Qc(i,r.auth);const o=await Jg(r);return i._openRedirect(r.auth,e,"linkViaRedirect",o)}async function lT(t,e){return await J(t)._initializationPromise,ea(t,e,!1)}async function ea(t,e,n=!1){if(Q(t.app))return Promise.reject(fe(t));const r=J(t),i=Wn(r,e),s=await new Zk(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}async function Jg(t){const e=to(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const uT=10*60*1e3;class Xg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Zg(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(le(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qf(e))}saveEventToCache(e){this.cachedEventUids.add(Qf(e)),this.lastProcessedEventTime=Date.now()}}function Qf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zg(t);default:return!1}}/**
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
 */async function ev(t,e={}){return Z(t,"GET","/v1/projects",e)}/**
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
 */const dT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fT=/^https?/;async function hT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ev(t);for(const n of e)try{if(pT(n))return}catch{}ve(t,"unauthorized-domain")}function pT(t){const e=$i(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!fT.test(n))return!1;if(dT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const mT=new Ji(3e4,6e4);function Jf(){const t=ne().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gT(t){return new Promise((e,n)=>{var r,i,o;function s(){Jf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jf(),n(le(t,"network-request-failed"))},timeout:mT.get()})}if(!((i=(r=ne().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=ne().gapi)===null||o===void 0)&&o.load)s();else{const a=Og("iframefcb");return ne()[a]=()=>{gapi.load?s():n(le(t,"network-request-failed"))},Fc(`${a1()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Uo=null,e})}let Uo=null;function vT(t){return Uo=Uo||gT(t),Uo}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const yT=new Ji(5e3,15e3),_T="__/auth/iframe",wT="emulator/auth/iframe",ET={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},IT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ST(t){const e=t.config;S(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mc(e,wT):`https://${t.config.authDomain}/${_T}`,r={apiKey:e.apiKey,appName:t.name,v:zn},i=IT.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Dr(r).slice(1)}`}async function kT(t){const e=await vT(t),n=ne().gapi;return S(n,t,"internal-error"),e.open({where:document.body,url:ST(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ET,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=le(t,"network-request-failed"),a=ne().setTimeout(()=>{o(s)},yT.get());function l(){ne().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const TT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PT=500,CT=600,OT="_blank",bT="http://localhost";class Xf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RT(t,e,n,r=PT,i=CT){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},TT),{width:r.toString(),height:i.toString(),top:o,left:s}),u=oe().toLowerCase();n&&(a=Ig(u)?OT:n),Eg(u)&&(e=e||bT,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[y,_])=>`${h}${y}=${_},`,"");if(QS(u)&&a!=="_self")return NT(e||"",a),new Xf(null);const c=window.open(e||"",a,d);S(c,t,"popup-blocked");try{c.focus()}catch{}return new Xf(c)}function NT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const xT="__/auth/handler",AT="emulator/auth/handler",LT=encodeURIComponent("fac");async function _u(t,e,n,r,i,o){S(t.config.authDomain,t,"auth-domain-config-required"),S(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zn,eventId:i};if(e instanceof jt){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",oI(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries(o||{}))s[d]=c}if(e instanceof $r){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(s.scopes=d.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${LT}=${encodeURIComponent(l)}`:"";return`${DT(t)}?${Dr(a).slice(1)}${u}`}function DT({config:t}){return t.emulator?Mc(t,AT):`https://${t.authDomain}/${xT}`}/**
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
 */const Va="webStorageSupport";class jT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=An,this._completeRedirectFn=ea,this._overrideRedirectResult=Jc}async _openPopup(e,n,r,i){var o;st((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await _u(e,n,r,$i(),i);return RT(e,s,to())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await _u(e,n,r,$i(),i);return yk(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(st(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kT(e),r=new Xg(e);return n.register("authEvent",i=>(S(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Va,{type:Va},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Va];s!==void 0&&n(!!s),ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pg()||Uc()||Ur()}}const MT=jT;class UT{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return pt("unexpected MultiFactorSessionType")}}}class Xc extends UT{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Xc(e)}_finalizeEnroll(e,n,r){return ck(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return Ok(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class tv{constructor(){}static assertion(e){return Xc._fromCredential(e)}}tv.FACTOR_ID="phone";var Zf="@firebase/auth",eh="1.7.2";/**
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
 */class FT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $T(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zT(t){xn(new sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;S(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cg(t)},u=new r1(r,i,o,l);return d1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xn(new sn("auth-internal",e=>{const n=J(e.getProvider("auth").getImmediate());return(r=>new FT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ct(Zf,eh,$T(t)),Ct(Zf,eh,"esm2017")}/**
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
 */const WT=5*60;XE("authIdTokenMaxAge");function VT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}i1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=le("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",VT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zT("Browser");/**
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
 */function Dn(){return window}/**
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
 */const BT=2e3;async function HT(t,e,n){var r;const{BuildInfo:i}=Dn();st(e.sessionId,"AuthEvent did not contain a session ID");const o=await QT(e.sessionId),s={};return Ur()?s.ibi=i.packageName:Xi()?s.apn=i.packageName:ve(t,"operation-not-supported-in-this-environment"),i.displayName&&(s.appDisplayName=i.displayName),s.sessionId=o,_u(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,s)}async function GT(t){const{BuildInfo:e}=Dn(),n={};Ur()?n.iosBundleId=e.packageName:Xi()?n.androidPackageName=e.packageName:ve(t,"operation-not-supported-in-this-environment"),await ev(t,n)}function KT(t){const{cordova:e}=Dn();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,YS()?"_blank":"_system","location=yes"),n(i)})})}async function qT(t,e,n){const{cordova:r}=Dn();let i=()=>{};try{await new Promise((o,s)=>{let a=null;function l(){var c;o();const h=(c=r.plugins.browsertab)===null||c===void 0?void 0:c.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{s(le(t,"redirect-cancelled-by-user"))},BT))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Xi()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function YT(t){var e,n,r,i,o,s,a,l,u,d;const c=Dn();S(typeof((e=c==null?void 0:c.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),S(typeof((n=c==null?void 0:c.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),S(typeof((o=(i=(r=c==null?void 0:c.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S(typeof((l=(a=(s=c==null?void 0:c.cordova)===null||s===void 0?void 0:s.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S(typeof((d=(u=c==null?void 0:c.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function QT(t){const e=JT(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function JT(t){if(st(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const XT=20;class ZT extends Xg{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function eP(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:rP(),postBody:null,tenantId:t.tenantId,error:le(t,"no-auth-event")}}function tP(t,e){return wu()._set(Eu(t),e)}async function th(t){const e=await wu()._get(Eu(t));return e&&await wu()._remove(Eu(t)),e}function nP(t,e){var n,r;const i=oP(e);if(i.includes("/__/auth/callback")){const o=Fo(i),s=o.firebaseError?iP(decodeURIComponent(o.firebaseError)):null,a=(r=(n=s==null?void 0:s.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?le(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function rP(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<XT;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function wu(){return Fe(Gc)}function Eu(t){return kn("authEvent",t.config.apiKey,t.name)}function iP(t){try{return JSON.parse(t)}catch{return null}}function oP(t){const e=Fo(t),n=e.link?decodeURIComponent(e.link):void 0,r=Fo(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Fo(i).link||i||r||n||t}function Fo(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return sr(n.join("?"))}/**
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
 */const sP=500;class aP{constructor(){this._redirectPersistence=An,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ea,this._overrideRedirectResult=Jc}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new ZT(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){ve(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){YT(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),tT(),await this._originValidation(e);const s=eP(e,r,i);await tP(e,s);const a=await HT(e,s,n),l=await KT(a);return qT(e,o,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=GT(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:o}=Dn(),s=setTimeout(async()=>{await th(e),n.onEvent(nh())},sP),a=async d=>{clearTimeout(s);const c=await th(e);let h=null;c&&(d!=null&&d.url)&&(h=nP(c,d.url)),n.onEvent(h||nh())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${o.packageName.toLowerCase()}://`;Dn().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(u)&&a({url:d}),typeof l=="function")try{l(d)}catch(c){console.error(c)}}}}const lP=aP;function nh(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:le("no-auth-event")}}/**
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
 */function uP(t,e){J(t)._logFramework(e)}var cP="@firebase/auth-compat",dP="0.5.7";/**
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
 */const fP=1e3;function yi(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function hP(){return yi()==="http:"||yi()==="https:"}function nv(t=oe()){return!!((yi()==="file:"||yi()==="ionic:"||yi()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function pP(){return Cc()||Ym()}function mP(){return Xm()&&(document==null?void 0:document.documentMode)===11}function gP(t=oe()){return/Edge\/\d+/.test(t)}function vP(t=oe()){return mP()||gP(t)}function rv(){try{const t=self.localStorage,e=to();if(t)return t.setItem(e,"1"),t.removeItem(e),vP()?ws():!0}catch{return Zc()&&ws()}return!1}function Zc(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Ba(){return(hP()||Jm()||nv())&&!pP()&&rv()&&!Zc()}function iv(){return nv()&&typeof document<"u"}async function yP(){return iv()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},fP);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function _P(){return typeof window<"u"?window:null}/**
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
 */const Me={LOCAL:"local",NONE:"none",SESSION:"session"},Xr=S,ov="persistence";function wP(t,e){if(Xr(Object.values(Me).includes(e),t,"invalid-persistence-type"),Cc()){Xr(e!==Me.SESSION,t,"unsupported-persistence-type");return}if(Ym()){Xr(e===Me.NONE,t,"unsupported-persistence-type");return}if(Zc()){Xr(e===Me.NONE||e===Me.LOCAL&&ws(),t,"unsupported-persistence-type");return}Xr(e===Me.NONE||rv(),t,"unsupported-persistence-type")}async function Iu(t){await t._initializationPromise;const e=sv(),n=kn(ov,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function EP(t,e){const n=sv();if(!n)return[];const r=kn(ov,t,e);switch(n.getItem(r)){case Me.NONE:return[br];case Me.LOCAL:return[Bi,An];case Me.SESSION:return[An];default:return[]}}function sv(){var t;try{return((t=_P())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const IP=S;class Gt{constructor(){this.browserResolver=Fe(MT),this.cordovaResolver=Fe(lP),this.underlyingResolver=null,this._redirectPersistence=An,this._completeRedirectFn=ea,this._overrideRedirectResult=Jc}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return iv()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return IP(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await yP();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function av(t){return t.unwrap()}function SP(t){return t.wrapped()}/**
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
 */function kP(t){return lv(t)}function TP(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new PP(t,lk(t,e))}else if(r){const i=lv(e),o=e;i&&(o.credential=i,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function lv(t){const{_tokenResponse:e}=t instanceof Le?t.customData:t;if(!e)return null;if(!(t instanceof Le)&&"temporaryProof"in e&&"phoneNumber"in e)return Ln.credentialFromResult(t);const n=e.providerId;if(!n||n===Jr.PASSWORD)return null;let r;switch(n){case Jr.GOOGLE:r=dt;break;case Jr.FACEBOOK:r=ct;break;case Jr.GITHUB:r=ft;break;case Jr.TWITTER:r=ht;break;default:const{oauthIdToken:i,oauthAccessToken:o,oauthTokenSecret:s,pendingToken:a,nonce:l}=e;return!o&&!s&&!i&&!a?null:a?n.startsWith("saml.")?Rr._create(n,a):vt._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:o}):new yr(n).credential({idToken:i,accessToken:o,rawNonce:l})}return t instanceof Le?r.credentialFromError(t):r.credentialFromResult(t)}function Oe(t,e){return e.catch(n=>{throw n instanceof Le&&TP(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:kP(n),additionalUserInfo:ak(n),user:Tt.getOrCreate(i)}})}async function Su(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Oe(t,n.confirm(r))}}class PP{constructor(e,n){this.resolver=n,this.auth=SP(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Oe(av(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Tt{constructor(e){this._delegate=e,this.multiFactor=fk(e)}static getOrCreate(e){return Tt.USER_MAP.has(e)||Tt.USER_MAP.set(e,new Tt(e)),Tt.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Oe(this.auth,jg(this._delegate,e))}async linkWithPhoneNumber(e,n){return Su(this.auth,Wk(this._delegate,e,n))}async linkWithPopup(e){return Oe(this.auth,Jk(this._delegate,e,Gt))}async linkWithRedirect(e){return await Iu(J(this.auth)),sT(this._delegate,e,Gt)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Oe(this.auth,Mg(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Su(this.auth,Vk(this._delegate,e,n))}reauthenticateWithPopup(e){return Oe(this.auth,Qk(this._delegate,e,Gt))}async reauthenticateWithRedirect(e){return await Iu(J(this.auth)),iT(this._delegate,e,Gt)}sendEmailVerification(e){return Q1(this._delegate,e)}async unlink(e){return await j1(this._delegate,e),this}updateEmail(e){return ek(this._delegate,e)}updatePassword(e){return tk(this._delegate,e)}updatePhoneNumber(e){return Bk(this._delegate,e)}updateProfile(e){return Z1(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return J1(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Tt.USER_MAP=new WeakMap;/**
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
 */const Zr=S;let ku=class{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Zr(r,"invalid-api-key",{appName:e.name}),Zr(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Gt:void 0;this._delegate=n.initialize({options:{persistence:CP(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(OS),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Tt.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){f1(this._delegate,e,n)}applyActionCode(e){return z1(this._delegate,e)}checkActionCode(e){return Ug(this._delegate,e)}confirmPasswordReset(e,n){return $1(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Oe(this._delegate,V1(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Y1(this._delegate,e)}isSignInWithEmailLink(e){return G1(this._delegate,e)}async getRedirectResult(){Zr(Ba(),this._delegate,"operation-not-supported-in-this-environment");const e=await lT(this._delegate,Gt);return e?Oe(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){uP(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:o,complete:s}=rh(e,n,r);return this._delegate.onAuthStateChanged(i,o,s)}onIdTokenChanged(e,n,r){const{next:i,error:o,complete:s}=rh(e,n,r);return this._delegate.onIdTokenChanged(i,o,s)}sendSignInLinkToEmail(e,n){return H1(this._delegate,e,n)}sendPasswordResetEmail(e,n){return F1(this._delegate,e,n||void 0)}async setPersistence(e){wP(this._delegate,e);let n;switch(e){case Me.SESSION:n=An;break;case Me.LOCAL:n=await Fe(Bi)._isAvailable()?Bi:Gc;break;case Me.NONE:n=br;break;default:return ve("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Oe(this._delegate,D1(this._delegate))}signInWithCredential(e){return Oe(this._delegate,Ys(this._delegate,e))}signInWithCustomToken(e){return Oe(this._delegate,U1(this._delegate,e))}signInWithEmailAndPassword(e,n){return Oe(this._delegate,B1(this._delegate,e,n))}signInWithEmailLink(e,n){return Oe(this._delegate,K1(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Su(this._delegate,zk(this._delegate,e,n))}async signInWithPopup(e){return Zr(Ba(),this._delegate,"operation-not-supported-in-this-environment"),Oe(this._delegate,Yk(this._delegate,e,Gt))}async signInWithRedirect(e){return Zr(Ba(),this._delegate,"operation-not-supported-in-this-environment"),await Iu(this._delegate),nT(this._delegate,e,Gt)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return W1(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}};ku.Persistence=Me;function rh(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:s=>i(s&&Tt.getOrCreate(s)),error:e,complete:n}}function CP(t,e){const n=EP(t,e);if(typeof self<"u"&&!n.includes(Bi)&&n.push(Bi),typeof window<"u")for(const r of[Gc,An])n.includes(r)||n.push(r);return n.includes(br)||n.push(br),n}/**
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
 */class ed{constructor(){this.providerId="phone",this._delegate=new Ln(av(jr.auth()))}static credential(e,n){return Ln.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}ed.PHONE_SIGN_IN_METHOD=Ln.PHONE_SIGN_IN_METHOD;ed.PROVIDER_ID=Ln.PROVIDER_ID;/**
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
 */const OP=S;class bP{constructor(e,n,r=jr.app()){var i;OP((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new Fk(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const RP="auth-compat";function NP(t){t.INTERNAL.registerComponent(new sn(RP,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new ku(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Kn.EMAIL_SIGNIN,PASSWORD_RESET:Kn.PASSWORD_RESET,RECOVER_EMAIL:Kn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Kn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Kn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Kn.VERIFY_EMAIL}},EmailAuthProvider:fn,FacebookAuthProvider:ct,GithubAuthProvider:ft,GoogleAuthProvider:dt,OAuthProvider:yr,SAMLAuthProvider:Ss,PhoneAuthProvider:ed,PhoneMultiFactorGenerator:tv,RecaptchaVerifier:bP,TwitterAuthProvider:ht,Auth:ku,AuthCredential:Fr,Error:Le}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(cP,dP)}NP(jr);const xP={apiKey:"AIzaSyBncPDS3kVCikqnmyKsQCOUdIjCW7_jbOo",authDomain:"authapp-c1f86.firebaseapp.com",projectId:"authapp-c1f86",storageBucket:"authapp-c1f86.appspot.com",messagingSenderId:"584987945198",appId:"1:584987945198:web:69d84c0042986ae9d56bff"};jr.initializeApp(xP);const AP=jr.auth();function LP(t,e){AP.signInWithEmailAndPassword(t,e).then(n=>{n.user.getIdToken().then(r=>{console.log("t",r),RE(r)})}).catch(n=>console.log(n))}const DP=()=>{const[t,e]=P.useState(""),[n,r]=P.useState(""),i=Ic(),o=async s=>{s.preventDefault(),console.log(t,n),LP(t,n),await localStorage.getItem("status")==="success"&&i("/")};return v.jsxs("div",{className:"login-container d-flex justify-content-center align-items-center",children:[v.jsx("div",{className:"position-absolute t-5",children:v.jsx("img",{width:250,src:Tc,alt:"logo"})}),v.jsx(ke,{md:12,lg:12,children:v.jsx(ke,{md:12,lg:12,children:v.jsx("div",{className:"pb-3 pt-3 d-flex justify-content-center align-items-center rounded-5 mt-md-5",style:{width:535,backgroundColor:"rgba(235, 13, 224, 0.747)"},children:v.jsxs("div",{className:"p-5 rounded-5",style:{backgroundColor:"rgba(34, 152, 207, 0.664)",width:500},children:[v.jsx("h2",{className:"text-center mb-5",children:"Login to your account"}),v.jsxs(kc,{onSubmit:o,children:[v.jsxs(hr,{children:[v.jsx(mr,{for:"name",children:"Email"}),v.jsx(pr,{type:"email",name:"email",id:"email",placeholder:"Enter Your Email",value:t,onChange:s=>e(s.target.value)})]}),v.jsxs(hr,{children:[v.jsx(mr,{for:"password",children:"Password"}),v.jsx(pr,{type:"password",name:"password",id:"password",placeholder:"Enter Your Password",value:n,onChange:s=>r(s.target.value)})]}),v.jsx("div",{className:"mt-5",children:v.jsx(Sc,{type:"submit",className:"rounded-3",color:"primary",block:!0,children:"Log in"})})]})]})})})}),v.jsx("div",{className:"position-absolute b-5",children:v.jsx("p",{className:"text-center mt-5 h4",children:"GalaxySTD"})})]})},jP=()=>{const[t,e]=P.useState({email:"",password:""}),n=i=>{e({...t,[i.target.email]:i.target.value})},r=i=>{i.preventDefault(),console.log("Form submitted:",t)};return v.jsxs("div",{className:"login-container d-flex justify-content-center align-items-center",children:[v.jsx("div",{className:"position-absolute t-2",children:v.jsx("img",{width:230,src:Tc,alt:"logo"})}),v.jsx(ke,{md:12,lg:12,children:v.jsx(ke,{md:12,lg:12,children:v.jsx("div",{className:"pb-3 pt-3 d-flex justify-content-center align-items-center rounded-5 mt-5",style:{width:535,backgroundColor:"rgba(235, 13, 224, 0.747)"},children:v.jsxs("div",{className:"p-5 rounded-5",style:{backgroundColor:"rgba(34, 152, 207, 0.664)",width:500},children:[v.jsx("h2",{className:"text-center mb-5",children:"Create your account"}),v.jsxs(kc,{onSubmit:r,children:[v.jsxs(hr,{children:[v.jsx(mr,{for:"name",children:"Email"}),v.jsx(pr,{type:"email",name:"email",id:"email",placeholder:"Enter Your Email",value:t.email,onChange:n})]}),v.jsxs(hr,{children:[v.jsx(mr,{for:"password",children:"Password"}),v.jsx(pr,{type:"password",name:"password",id:"password",placeholder:"Enter Your Password",value:t.password,onChange:n})]}),v.jsxs(hr,{children:[v.jsx(mr,{for:"re-password",children:"Password"}),v.jsx(pr,{type:"password",name:"re-password",id:"re-password",placeholder:"Enter Your Password",value:t.password,onChange:n})]}),v.jsx("div",{className:"mt-5",children:v.jsx(Sc,{className:"rounded-3",color:"primary",block:!0,children:"Register"})})]})]})})})}),v.jsx("div",{className:"position-absolute b-5",children:v.jsx("p",{className:"text-center mt-5 h4",children:"GalaxySTD"})})]})};function MP(){return console.log("h & w :",window.innerHeight,window,innerWidth),v.jsxs("div",{className:"about-container",children:[v.jsx(ke,{children:v.jsx($m,{})}),v.jsx("br",{}),v.jsx(ke,{className:"mt-5 res-w-80",children:v.jsxs("div",{className:"text-white p-5",children:[v.jsxs(ke,{className:"mt-5",children:[v.jsxs(wt,{sm:12,md:6,lg:6,children:[v.jsx("h1",{className:"",children:"About Us"}),v.jsx("h3",{className:"",children:"Welcome to our Mars Rover Explorer application!"})]}),v.jsxs(wt,{sm:12,md:6,lg:6,children:[v.jsx("h1",{className:"",children:"Our Mission"}),v.jsx("h3",{className:"",children:"At Mars Rover Explorer, our mission is to bring the wonders of Mars closer to you. We're passionate about space exploration and believe that everyone should have access to the fascinating discoveries being made on the Red Planet."})]})]}),v.jsxs(ke,{className:"mt-5",children:[v.jsxs(wt,{sm:12,md:6,lg:6,children:[v.jsx("h1",{className:"",children:"What We Do"}),v.jsx("h3",{className:"",children:"Using NASA's public APIs, we collect and present the latest images and information captured by the Mars rovers. Our application allows you to explore these images, learn about the Martian terrain, and delve into the details of each rover's mission."})]}),v.jsxs(wt,{sm:12,md:6,lg:6,children:[v.jsx("h1",{className:"",children:"Why Mars?"}),v.jsx("h3",{className:"",children:"Mars has long captured the imagination of humanity. It's the next frontier for human exploration and holds the key to understanding our place in the universe. By studying Mars, we can learn more about the history of our solar system, the potential for life beyond Earth, and the possibilities for future human colonization."})]})]}),v.jsxs(ke,{className:"mt-5",children:[v.jsxs(wt,{sm:12,md:6,lg:6,children:[v.jsx("h1",{className:"",children:"Our Team"}),v.jsx("h3",{className:"",children:"We are a team of passionate developers and space enthusiasts dedicated to creating an immersive and educational experience for our users. With expertise in frontend development, backend integration, and a love for all things space-related, we strive to make Mars Rover Explorer the go-to destination for Mars exploration."})]}),v.jsxs(wt,{sm:12,md:6,lg:6,children:[v.jsx("h1",{className:"",children:"Connect With Us"}),v.jsx("h3",{className:"",children:"We'd love to hear from you! Whether you have feedback, suggestions, or just want to say hello, feel free to reach out to us through our contact form or social media channels."})]})]})]})})]})}Ha.createRoot(document.getElementById("root")).render(v.jsx($.StrictMode,{children:v.jsx(x_,{children:v.jsxs(T_,{children:[v.jsx(ii,{path:"/login",element:v.jsx(DP,{})}),v.jsx(ii,{path:"/register",element:v.jsx(jP,{})}),v.jsx(ii,{path:"/about",element:v.jsx(MP,{})}),v.jsx(ii,{path:"/",element:v.jsx(VE,{})})]})})}));
