function gm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var _i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function vm(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var xf={exports:{}},il={},wf={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yi=Symbol.for("react.element"),ym=Symbol.for("react.portal"),xm=Symbol.for("react.fragment"),wm=Symbol.for("react.strict_mode"),Sm=Symbol.for("react.profiler"),jm=Symbol.for("react.provider"),km=Symbol.for("react.context"),Cm=Symbol.for("react.forward_ref"),_m=Symbol.for("react.suspense"),Em=Symbol.for("react.memo"),Om=Symbol.for("react.lazy"),Xu=Symbol.iterator;function bm(e){return e===null||typeof e!="object"?null:(e=Xu&&e[Xu]||e["@@iterator"],typeof e=="function"?e:null)}var Sf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jf=Object.assign,kf={};function xr(e,t,n){this.props=e,this.context=t,this.refs=kf,this.updater=n||Sf}xr.prototype.isReactComponent={};xr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cf(){}Cf.prototype=xr.prototype;function Ws(e,t,n){this.props=e,this.context=t,this.refs=kf,this.updater=n||Sf}var Hs=Ws.prototype=new Cf;Hs.constructor=Ws;jf(Hs,xr.prototype);Hs.isPureReactComponent=!0;var Zu=Array.isArray,_f=Object.prototype.hasOwnProperty,Us={current:null},Ef={key:!0,ref:!0,__self:!0,__source:!0};function Of(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)_f.call(t,r)&&!Ef.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:yi,type:e,key:o,ref:l,props:i,_owner:Us.current}}function Pm(e,t){return{$$typeof:yi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vs(e){return typeof e=="object"&&e!==null&&e.$$typeof===yi}function Tm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ju=/\/+/g;function Ml(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Tm(""+e.key):t.toString(36)}function qi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case yi:case ym:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Ml(l,0):r,Zu(i)?(n="",e!=null&&(n=e.replace(Ju,"$&/")+"/"),qi(i,t,n,"",function(c){return c})):i!=null&&(Vs(i)&&(i=Pm(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ju,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Zu(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+Ml(o,a);l+=qi(o,t,n,u,i)}else if(u=bm(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+Ml(o,a++),l+=qi(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ei(e,t,n){if(e==null)return e;var r=[],i=0;return qi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function zm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},Ki={transition:null},Lm={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:Ki,ReactCurrentOwner:Us};U.Children={map:Ei,forEach:function(e,t,n){Ei(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ei(e,function(){t++}),t},toArray:function(e){return Ei(e,function(t){return t})||[]},only:function(e){if(!Vs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=xr;U.Fragment=xm;U.Profiler=Sm;U.PureComponent=Ws;U.StrictMode=wm;U.Suspense=_m;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lm;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=jf({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Us.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)_f.call(t,u)&&!Ef.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:yi,type:e.type,key:i,ref:o,props:r,_owner:l}};U.createContext=function(e){return e={$$typeof:km,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jm,_context:e},e.Consumer=e};U.createElement=Of;U.createFactory=function(e){var t=Of.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:Cm,render:e}};U.isValidElement=Vs;U.lazy=function(e){return{$$typeof:Om,_payload:{_status:-1,_result:e},_init:zm}};U.memo=function(e,t){return{$$typeof:Em,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Ki.transition;Ki.transition={};try{e()}finally{Ki.transition=t}};U.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};U.useCallback=function(e,t){return ze.current.useCallback(e,t)};U.useContext=function(e){return ze.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};U.useEffect=function(e,t){return ze.current.useEffect(e,t)};U.useId=function(){return ze.current.useId()};U.useImperativeHandle=function(e,t,n){return ze.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return ze.current.useMemo(e,t)};U.useReducer=function(e,t,n){return ze.current.useReducer(e,t,n)};U.useRef=function(e){return ze.current.useRef(e)};U.useState=function(e){return ze.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return ze.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return ze.current.useTransition()};U.version="18.2.0";wf.exports=U;var _=wf.exports;const de=yf(_),Im=gm({__proto__:null,default:de},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm=_,Nm=Symbol.for("react.element"),Mm=Symbol.for("react.fragment"),$m=Object.prototype.hasOwnProperty,Dm=Rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fm={key:!0,ref:!0,__self:!0,__source:!0};function bf(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)$m.call(t,r)&&!Fm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Nm,type:e,key:o,ref:l,props:i,_owner:Dm.current}}il.Fragment=Mm;il.jsx=bf;il.jsxs=bf;xf.exports=il;var s=xf.exports,Ea={},Pf={exports:{}},qe={},Tf={exports:{}},zf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,R){var A=L.length;L.push(R);e:for(;0<A;){var V=A-1>>>1,G=L[V];if(0<i(G,R))L[V]=R,L[A]=G,A=V;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var R=L[0],A=L.pop();if(A!==R){L[0]=A;e:for(var V=0,G=L.length,Oe=G>>>1;V<Oe;){var Be=2*(V+1)-1,Ie=L[Be],We=Be+1,yt=L[We];if(0>i(Ie,A))We<G&&0>i(yt,Ie)?(L[V]=yt,L[We]=A,V=We):(L[V]=Ie,L[Be]=A,V=Be);else if(We<G&&0>i(yt,A))L[V]=yt,L[We]=A,V=We;else break e}}return R}function i(L,R){var A=L.sortIndex-R.sortIndex;return A!==0?A:L.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],c=[],h=1,f=null,g=3,y=!1,x=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=L)r(c),R.sortIndex=R.expirationTime,t(u,R);else break;R=n(c)}}function w(L){if(v=!1,m(L),!x)if(n(u)!==null)x=!0,le(j);else{var R=n(c);R!==null&&xe(w,R.startTime-L)}}function j(L,R){x=!1,v&&(v=!1,p(T),T=-1),y=!0;var A=g;try{for(m(R),f=n(u);f!==null&&(!(f.expirationTime>R)||L&&!N());){var V=f.callback;if(typeof V=="function"){f.callback=null,g=f.priorityLevel;var G=V(f.expirationTime<=R);R=e.unstable_now(),typeof G=="function"?f.callback=G:f===n(u)&&r(u),m(R)}else r(u);f=n(u)}if(f!==null)var Oe=!0;else{var Be=n(c);Be!==null&&xe(w,Be.startTime-R),Oe=!1}return Oe}finally{f=null,g=A,y=!1}}var k=!1,C=null,T=-1,O=5,E=-1;function N(){return!(e.unstable_now()-E<O)}function M(){if(C!==null){var L=e.unstable_now();E=L;var R=!0;try{R=C(!0,L)}finally{R?$():(k=!1,C=null)}}else k=!1}var $;if(typeof d=="function")$=function(){d(M)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,rt=F.port2;F.port1.onmessage=M,$=function(){rt.postMessage(null)}}else $=function(){S(M,0)};function le(L){C=L,k||(k=!0,$())}function xe(L,R){T=S(function(){L(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,le(j))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(L){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var A=g;g=R;try{return L()}finally{g=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,R){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var A=g;g=L;try{return R()}finally{g=A}},e.unstable_scheduleCallback=function(L,R,A){var V=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?V+A:V):A=V,L){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=A+G,L={id:h++,callback:R,priorityLevel:L,startTime:A,expirationTime:G,sortIndex:-1},A>V?(L.sortIndex=A,t(c,L),n(u)===null&&L===n(c)&&(v?(p(T),T=-1):v=!0,xe(w,A-V))):(L.sortIndex=G,t(u,L),x||y||(x=!0,le(j))),L},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(L){var R=g;return function(){var A=g;g=R;try{return L.apply(this,arguments)}finally{g=A}}}})(zf);Tf.exports=zf;var Am=Tf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lf=_,Ge=Am;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var If=new Set,Yr={};function Cn(e,t){er(e,t),er(e+"Capture",t)}function er(e,t){for(Yr[e]=t,e=0;e<t.length;e++)If.add(t[e])}var Et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oa=Object.prototype.hasOwnProperty,Bm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ec={},tc={};function Wm(e){return Oa.call(tc,e)?!0:Oa.call(ec,e)?!1:Bm.test(e)?tc[e]=!0:(ec[e]=!0,!1)}function Hm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Um(e,t,n,r){if(t===null||typeof t>"u"||Hm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Le(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new Le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new Le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new Le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new Le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new Le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new Le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new Le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new Le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new Le(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qs=/[\-:]([a-z])/g;function Gs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qs,Gs);je[t]=new Le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qs,Gs);je[t]=new Le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qs,Gs);je[t]=new Le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new Le(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new Le(e,1,!1,e.toLowerCase(),null,!0,!0)});function qs(e,t,n,r){var i=je.hasOwnProperty(t)?je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Um(t,n,i,r)&&(n=null),r||i===null?Wm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Tt=Lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oi=Symbol.for("react.element"),Ln=Symbol.for("react.portal"),In=Symbol.for("react.fragment"),Ks=Symbol.for("react.strict_mode"),ba=Symbol.for("react.profiler"),Rf=Symbol.for("react.provider"),Nf=Symbol.for("react.context"),Ys=Symbol.for("react.forward_ref"),Pa=Symbol.for("react.suspense"),Ta=Symbol.for("react.suspense_list"),Xs=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Mf=Symbol.for("react.offscreen"),nc=Symbol.iterator;function Er(e){return e===null||typeof e!="object"?null:(e=nc&&e[nc]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,$l;function Nr(e){if($l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$l=t&&t[1]||""}return`
`+$l+e}var Dl=!1;function Fl(e,t){if(!e||Dl)return"";Dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{Dl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Nr(e):""}function Vm(e){switch(e.tag){case 5:return Nr(e.type);case 16:return Nr("Lazy");case 13:return Nr("Suspense");case 19:return Nr("SuspenseList");case 0:case 2:case 15:return e=Fl(e.type,!1),e;case 11:return e=Fl(e.type.render,!1),e;case 1:return e=Fl(e.type,!0),e;default:return""}}function za(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case In:return"Fragment";case Ln:return"Portal";case ba:return"Profiler";case Ks:return"StrictMode";case Pa:return"Suspense";case Ta:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nf:return(e.displayName||"Context")+".Consumer";case Rf:return(e._context.displayName||"Context")+".Provider";case Ys:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xs:return t=e.displayName||null,t!==null?t:za(e.type)||"Memo";case Nt:t=e._payload,e=e._init;try{return za(e(t))}catch{}}return null}function Qm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return za(t);case 8:return t===Ks?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $f(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gm(e){var t=$f(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bi(e){e._valueTracker||(e._valueTracker=Gm(e))}function Df(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$f(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ho(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function La(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function rc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ff(e,t){t=t.checked,t!=null&&qs(e,"checked",t,!1)}function Ia(e,t){Ff(e,t);var n=Zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ra(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ra(e,t.type,Zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ic(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ra(e,t,n){(t!=="number"||ho(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mr=Array.isArray;function Vn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Na(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Mr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zt(n)}}function Af(e,t){var n=Zt(t.value),r=Zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ma(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pi,Wf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Pi=Pi||document.createElement("div"),Pi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qm=["Webkit","ms","Moz","O"];Object.keys(Ar).forEach(function(e){qm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ar[t]=Ar[e]})});function Hf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ar.hasOwnProperty(e)&&Ar[e]?(""+t).trim():t+"px"}function Uf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Km=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $a(e,t){if(t){if(Km[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Da(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fa=null;function Zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Aa=null,Qn=null,Gn=null;function ac(e){if(e=Si(e)){if(typeof Aa!="function")throw Error(P(280));var t=e.stateNode;t&&(t=ul(t),Aa(e.stateNode,e.type,t))}}function Vf(e){Qn?Gn?Gn.push(e):Gn=[e]:Qn=e}function Qf(){if(Qn){var e=Qn,t=Gn;if(Gn=Qn=null,ac(e),t)for(e=0;e<t.length;e++)ac(t[e])}}function Gf(e,t){return e(t)}function qf(){}var Al=!1;function Kf(e,t,n){if(Al)return e(t,n);Al=!0;try{return Gf(e,t,n)}finally{Al=!1,(Qn!==null||Gn!==null)&&(qf(),Qf())}}function Zr(e,t){var n=e.stateNode;if(n===null)return null;var r=ul(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Ba=!1;if(Et)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Ba=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Ba=!1}function Ym(e,t,n,r,i,o,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Br=!1,mo=null,go=!1,Wa=null,Xm={onError:function(e){Br=!0,mo=e}};function Zm(e,t,n,r,i,o,l,a,u){Br=!1,mo=null,Ym.apply(Xm,arguments)}function Jm(e,t,n,r,i,o,l,a,u){if(Zm.apply(this,arguments),Br){if(Br){var c=mo;Br=!1,mo=null}else throw Error(P(198));go||(go=!0,Wa=c)}}function _n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sc(e){if(_n(e)!==e)throw Error(P(188))}function eg(e){var t=e.alternate;if(!t){if(t=_n(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return sc(i),e;if(o===r)return sc(i),t;o=o.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Xf(e){return e=eg(e),e!==null?Zf(e):null}function Zf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zf(e);if(t!==null)return t;e=e.sibling}return null}var Jf=Ge.unstable_scheduleCallback,uc=Ge.unstable_cancelCallback,tg=Ge.unstable_shouldYield,ng=Ge.unstable_requestPaint,se=Ge.unstable_now,rg=Ge.unstable_getCurrentPriorityLevel,Js=Ge.unstable_ImmediatePriority,ep=Ge.unstable_UserBlockingPriority,vo=Ge.unstable_NormalPriority,ig=Ge.unstable_LowPriority,tp=Ge.unstable_IdlePriority,ol=null,gt=null;function og(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(ol,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:sg,lg=Math.log,ag=Math.LN2;function sg(e){return e>>>=0,e===0?32:31-(lg(e)/ag|0)|0}var Ti=64,zi=4194304;function $r(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=$r(a):(o&=l,o!==0&&(r=$r(o)))}else l=n&~i,l!==0?r=$r(l):o!==0&&(r=$r(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-st(t),i=1<<n,r|=e[n],t&=~i;return r}function ug(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-st(o),a=1<<l,u=i[l];u===-1?(!(a&n)||a&r)&&(i[l]=ug(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function Ha(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function np(){var e=Ti;return Ti<<=1,!(Ti&4194240)&&(Ti=64),e}function Bl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-st(t),e[t]=n}function dg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-st(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function eu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var K=0;function rp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ip,tu,op,lp,ap,Ua=!1,Li=[],Ht=null,Ut=null,Vt=null,Jr=new Map,ei=new Map,Dt=[],fg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cc(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":Jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ei.delete(t.pointerId)}}function br(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Si(t),t!==null&&tu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function pg(e,t,n,r,i){switch(t){case"focusin":return Ht=br(Ht,e,t,n,r,i),!0;case"dragenter":return Ut=br(Ut,e,t,n,r,i),!0;case"mouseover":return Vt=br(Vt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Jr.set(o,br(Jr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ei.set(o,br(ei.get(o)||null,e,t,n,r,i)),!0}return!1}function sp(e){var t=an(e.target);if(t!==null){var n=_n(t);if(n!==null){if(t=n.tag,t===13){if(t=Yf(n),t!==null){e.blockedOn=t,ap(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Va(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fa=r,n.target.dispatchEvent(r),Fa=null}else return t=Si(n),t!==null&&tu(t),e.blockedOn=n,!1;t.shift()}return!0}function dc(e,t,n){Yi(e)&&n.delete(t)}function hg(){Ua=!1,Ht!==null&&Yi(Ht)&&(Ht=null),Ut!==null&&Yi(Ut)&&(Ut=null),Vt!==null&&Yi(Vt)&&(Vt=null),Jr.forEach(dc),ei.forEach(dc)}function Pr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ua||(Ua=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,hg)))}function ti(e){function t(i){return Pr(i,e)}if(0<Li.length){Pr(Li[0],e);for(var n=1;n<Li.length;n++){var r=Li[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ht!==null&&Pr(Ht,e),Ut!==null&&Pr(Ut,e),Vt!==null&&Pr(Vt,e),Jr.forEach(t),ei.forEach(t),n=0;n<Dt.length;n++)r=Dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)sp(n),n.blockedOn===null&&Dt.shift()}var qn=Tt.ReactCurrentBatchConfig,xo=!0;function mg(e,t,n,r){var i=K,o=qn.transition;qn.transition=null;try{K=1,nu(e,t,n,r)}finally{K=i,qn.transition=o}}function gg(e,t,n,r){var i=K,o=qn.transition;qn.transition=null;try{K=4,nu(e,t,n,r)}finally{K=i,qn.transition=o}}function nu(e,t,n,r){if(xo){var i=Va(e,t,n,r);if(i===null)Xl(e,t,r,wo,n),cc(e,r);else if(pg(i,e,t,n,r))r.stopPropagation();else if(cc(e,r),t&4&&-1<fg.indexOf(e)){for(;i!==null;){var o=Si(i);if(o!==null&&ip(o),o=Va(e,t,n,r),o===null&&Xl(e,t,r,wo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Xl(e,t,r,null,n)}}var wo=null;function Va(e,t,n,r){if(wo=null,e=Zs(r),e=an(e),e!==null)if(t=_n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wo=e,null}function up(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rg()){case Js:return 1;case ep:return 4;case vo:case ig:return 16;case tp:return 536870912;default:return 16}default:return 16}}var At=null,ru=null,Xi=null;function cp(){if(Xi)return Xi;var e,t=ru,n=t.length,r,i="value"in At?At.value:At.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Xi=i.slice(e,1<r?1-r:void 0)}function Zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ii(){return!0}function fc(){return!1}function Ke(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ii:fc,this.isPropagationStopped=fc,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ii)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ii)},persist:function(){},isPersistent:Ii}),t}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iu=Ke(wr),wi=oe({},wr,{view:0,detail:0}),vg=Ke(wi),Wl,Hl,Tr,ll=oe({},wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tr&&(Tr&&e.type==="mousemove"?(Wl=e.screenX-Tr.screenX,Hl=e.screenY-Tr.screenY):Hl=Wl=0,Tr=e),Wl)},movementY:function(e){return"movementY"in e?e.movementY:Hl}}),pc=Ke(ll),yg=oe({},ll,{dataTransfer:0}),xg=Ke(yg),wg=oe({},wi,{relatedTarget:0}),Ul=Ke(wg),Sg=oe({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),jg=Ke(Sg),kg=oe({},wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cg=Ke(kg),_g=oe({},wr,{data:0}),hc=Ke(_g),Eg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Og={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bg[e])?!!t[e]:!1}function ou(){return Pg}var Tg=oe({},wi,{key:function(e){if(e.key){var t=Eg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Og[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(e){return e.type==="keypress"?Zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zg=Ke(Tg),Lg=oe({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mc=Ke(Lg),Ig=oe({},wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),Rg=Ke(Ig),Ng=oe({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mg=Ke(Ng),$g=oe({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dg=Ke($g),Fg=[9,13,27,32],lu=Et&&"CompositionEvent"in window,Wr=null;Et&&"documentMode"in document&&(Wr=document.documentMode);var Ag=Et&&"TextEvent"in window&&!Wr,dp=Et&&(!lu||Wr&&8<Wr&&11>=Wr),gc=" ",vc=!1;function fp(e,t){switch(e){case"keyup":return Fg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rn=!1;function Bg(e,t){switch(e){case"compositionend":return pp(t);case"keypress":return t.which!==32?null:(vc=!0,gc);case"textInput":return e=t.data,e===gc&&vc?null:e;default:return null}}function Wg(e,t){if(Rn)return e==="compositionend"||!lu&&fp(e,t)?(e=cp(),Xi=ru=At=null,Rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dp&&t.locale!=="ko"?null:t.data;default:return null}}var Hg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hg[e.type]:t==="textarea"}function hp(e,t,n,r){Vf(r),t=So(t,"onChange"),0<t.length&&(n=new iu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hr=null,ni=null;function Ug(e){_p(e,0)}function al(e){var t=$n(e);if(Df(t))return e}function Vg(e,t){if(e==="change")return t}var mp=!1;if(Et){var Vl;if(Et){var Ql="oninput"in document;if(!Ql){var xc=document.createElement("div");xc.setAttribute("oninput","return;"),Ql=typeof xc.oninput=="function"}Vl=Ql}else Vl=!1;mp=Vl&&(!document.documentMode||9<document.documentMode)}function wc(){Hr&&(Hr.detachEvent("onpropertychange",gp),ni=Hr=null)}function gp(e){if(e.propertyName==="value"&&al(ni)){var t=[];hp(t,ni,e,Zs(e)),Kf(Ug,t)}}function Qg(e,t,n){e==="focusin"?(wc(),Hr=t,ni=n,Hr.attachEvent("onpropertychange",gp)):e==="focusout"&&wc()}function Gg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(ni)}function qg(e,t){if(e==="click")return al(t)}function Kg(e,t){if(e==="input"||e==="change")return al(t)}function Yg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dt=typeof Object.is=="function"?Object.is:Yg;function ri(e,t){if(dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oa.call(t,i)||!dt(e[i],t[i]))return!1}return!0}function Sc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jc(e,t){var n=Sc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sc(n)}}function vp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yp(){for(var e=window,t=ho();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ho(e.document)}return t}function au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xg(e){var t=yp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vp(n.ownerDocument.documentElement,n)){if(r!==null&&au(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=jc(n,o);var l=jc(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zg=Et&&"documentMode"in document&&11>=document.documentMode,Nn=null,Qa=null,Ur=null,Ga=!1;function kc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ga||Nn==null||Nn!==ho(r)||(r=Nn,"selectionStart"in r&&au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&ri(Ur,r)||(Ur=r,r=So(Qa,"onSelect"),0<r.length&&(t=new iu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nn)))}function Ri(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mn={animationend:Ri("Animation","AnimationEnd"),animationiteration:Ri("Animation","AnimationIteration"),animationstart:Ri("Animation","AnimationStart"),transitionend:Ri("Transition","TransitionEnd")},Gl={},xp={};Et&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function sl(e){if(Gl[e])return Gl[e];if(!Mn[e])return e;var t=Mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xp)return Gl[e]=t[n];return e}var wp=sl("animationend"),Sp=sl("animationiteration"),jp=sl("animationstart"),kp=sl("transitionend"),Cp=new Map,Cc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(e,t){Cp.set(e,t),Cn(t,[e])}for(var ql=0;ql<Cc.length;ql++){var Kl=Cc[ql],Jg=Kl.toLowerCase(),ev=Kl[0].toUpperCase()+Kl.slice(1);en(Jg,"on"+ev)}en(wp,"onAnimationEnd");en(Sp,"onAnimationIteration");en(jp,"onAnimationStart");en("dblclick","onDoubleClick");en("focusin","onFocus");en("focusout","onBlur");en(kp,"onTransitionEnd");er("onMouseEnter",["mouseout","mouseover"]);er("onMouseLeave",["mouseout","mouseover"]);er("onPointerEnter",["pointerout","pointerover"]);er("onPointerLeave",["pointerout","pointerover"]);Cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));function _c(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jm(r,t,void 0,e),e.currentTarget=null}function _p(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;_c(i,a,c),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;_c(i,a,c),o=u}}}if(go)throw e=Wa,go=!1,Wa=null,e}function X(e,t){var n=t[Za];n===void 0&&(n=t[Za]=new Set);var r=e+"__bubble";n.has(r)||(Ep(t,e,2,!1),n.add(r))}function Yl(e,t,n){var r=0;t&&(r|=4),Ep(n,e,r,t)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function ii(e){if(!e[Ni]){e[Ni]=!0,If.forEach(function(n){n!=="selectionchange"&&(tv.has(n)||Yl(n,!1,e),Yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ni]||(t[Ni]=!0,Yl("selectionchange",!1,t))}}function Ep(e,t,n,r){switch(up(t)){case 1:var i=mg;break;case 4:i=gg;break;default:i=nu}n=i.bind(null,t,n,e),i=void 0,!Ba||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Xl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=an(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Kf(function(){var c=o,h=Zs(n),f=[];e:{var g=Cp.get(e);if(g!==void 0){var y=iu,x=e;switch(e){case"keypress":if(Zi(n)===0)break e;case"keydown":case"keyup":y=zg;break;case"focusin":x="focus",y=Ul;break;case"focusout":x="blur",y=Ul;break;case"beforeblur":case"afterblur":y=Ul;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=pc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=xg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Rg;break;case wp:case Sp:case jp:y=jg;break;case kp:y=Mg;break;case"scroll":y=vg;break;case"wheel":y=Dg;break;case"copy":case"cut":case"paste":y=Cg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=mc}var v=(t&4)!==0,S=!v&&e==="scroll",p=v?g!==null?g+"Capture":null:g;v=[];for(var d=c,m;d!==null;){m=d;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Zr(d,p),w!=null&&v.push(oi(d,w,m)))),S)break;d=d.return}0<v.length&&(g=new y(g,x,null,n,h),f.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==Fa&&(x=n.relatedTarget||n.fromElement)&&(an(x)||x[Ot]))break e;if((y||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=c,x=x?an(x):null,x!==null&&(S=_n(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(v=pc,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=mc,w="onPointerLeave",p="onPointerEnter",d="pointer"),S=y==null?g:$n(y),m=x==null?g:$n(x),g=new v(w,d+"leave",y,n,h),g.target=S,g.relatedTarget=m,w=null,an(h)===c&&(v=new v(p,d+"enter",x,n,h),v.target=m,v.relatedTarget=S,w=v),S=w,y&&x)t:{for(v=y,p=x,d=0,m=v;m;m=On(m))d++;for(m=0,w=p;w;w=On(w))m++;for(;0<d-m;)v=On(v),d--;for(;0<m-d;)p=On(p),m--;for(;d--;){if(v===p||p!==null&&v===p.alternate)break t;v=On(v),p=On(p)}v=null}else v=null;y!==null&&Ec(f,g,y,v,!1),x!==null&&S!==null&&Ec(f,S,x,v,!0)}}e:{if(g=c?$n(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var j=Vg;else if(yc(g))if(mp)j=Kg;else{j=Gg;var k=Qg}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=qg);if(j&&(j=j(e,c))){hp(f,j,n,h);break e}k&&k(e,g,c),e==="focusout"&&(k=g._wrapperState)&&k.controlled&&g.type==="number"&&Ra(g,"number",g.value)}switch(k=c?$n(c):window,e){case"focusin":(yc(k)||k.contentEditable==="true")&&(Nn=k,Qa=c,Ur=null);break;case"focusout":Ur=Qa=Nn=null;break;case"mousedown":Ga=!0;break;case"contextmenu":case"mouseup":case"dragend":Ga=!1,kc(f,n,h);break;case"selectionchange":if(Zg)break;case"keydown":case"keyup":kc(f,n,h)}var C;if(lu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Rn?fp(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(dp&&n.locale!=="ko"&&(Rn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Rn&&(C=cp()):(At=h,ru="value"in At?At.value:At.textContent,Rn=!0)),k=So(c,T),0<k.length&&(T=new hc(T,e,null,n,h),f.push({event:T,listeners:k}),C?T.data=C:(C=pp(n),C!==null&&(T.data=C)))),(C=Ag?Bg(e,n):Wg(e,n))&&(c=So(c,"onBeforeInput"),0<c.length&&(h=new hc("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=C))}_p(f,t)})}function oi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function So(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Zr(e,n),o!=null&&r.unshift(oi(e,o,i)),o=Zr(e,t),o!=null&&r.push(oi(e,o,i))),e=e.return}return r}function On(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ec(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Zr(n,o),u!=null&&l.unshift(oi(n,u,a))):i||(u=Zr(n,o),u!=null&&l.push(oi(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var nv=/\r\n?/g,rv=/\u0000|\uFFFD/g;function Oc(e){return(typeof e=="string"?e:""+e).replace(nv,`
`).replace(rv,"")}function Mi(e,t,n){if(t=Oc(t),Oc(e)!==t&&n)throw Error(P(425))}function jo(){}var qa=null,Ka=null;function Ya(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xa=typeof setTimeout=="function"?setTimeout:void 0,iv=typeof clearTimeout=="function"?clearTimeout:void 0,bc=typeof Promise=="function"?Promise:void 0,ov=typeof queueMicrotask=="function"?queueMicrotask:typeof bc<"u"?function(e){return bc.resolve(null).then(e).catch(lv)}:Xa;function lv(e){setTimeout(function(){throw e})}function Zl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ti(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ti(t)}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sr=Math.random().toString(36).slice(2),mt="__reactFiber$"+Sr,li="__reactProps$"+Sr,Ot="__reactContainer$"+Sr,Za="__reactEvents$"+Sr,av="__reactListeners$"+Sr,sv="__reactHandles$"+Sr;function an(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pc(e);e!==null;){if(n=e[mt])return n;e=Pc(e)}return t}e=n,n=e.parentNode}return null}function Si(e){return e=e[mt]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function ul(e){return e[li]||null}var Ja=[],Dn=-1;function tn(e){return{current:e}}function J(e){0>Dn||(e.current=Ja[Dn],Ja[Dn]=null,Dn--)}function Y(e,t){Dn++,Ja[Dn]=e.current,e.current=t}var Jt={},Ee=tn(Jt),De=tn(!1),mn=Jt;function tr(e,t){var n=e.type.contextTypes;if(!n)return Jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Fe(e){return e=e.childContextTypes,e!=null}function ko(){J(De),J(Ee)}function Tc(e,t,n){if(Ee.current!==Jt)throw Error(P(168));Y(Ee,t),Y(De,n)}function Op(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,Qm(e)||"Unknown",i));return oe({},n,r)}function Co(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jt,mn=Ee.current,Y(Ee,e),Y(De,De.current),!0}function zc(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Op(e,t,mn),r.__reactInternalMemoizedMergedChildContext=e,J(De),J(Ee),Y(Ee,e)):J(De),Y(De,n)}var St=null,cl=!1,Jl=!1;function bp(e){St===null?St=[e]:St.push(e)}function uv(e){cl=!0,bp(e)}function nn(){if(!Jl&&St!==null){Jl=!0;var e=0,t=K;try{var n=St;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,cl=!1}catch(i){throw St!==null&&(St=St.slice(e+1)),Jf(Js,nn),i}finally{K=t,Jl=!1}}return null}var Fn=[],An=0,_o=null,Eo=0,Ye=[],Xe=0,gn=null,kt=1,Ct="";function on(e,t){Fn[An++]=Eo,Fn[An++]=_o,_o=e,Eo=t}function Pp(e,t,n){Ye[Xe++]=kt,Ye[Xe++]=Ct,Ye[Xe++]=gn,gn=e;var r=kt;e=Ct;var i=32-st(r)-1;r&=~(1<<i),n+=1;var o=32-st(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,kt=1<<32-st(t)+i|n<<i|r,Ct=o+e}else kt=1<<o|n<<i|r,Ct=e}function su(e){e.return!==null&&(on(e,1),Pp(e,1,0))}function uu(e){for(;e===_o;)_o=Fn[--An],Fn[An]=null,Eo=Fn[--An],Fn[An]=null;for(;e===gn;)gn=Ye[--Xe],Ye[Xe]=null,Ct=Ye[--Xe],Ye[Xe]=null,kt=Ye[--Xe],Ye[Xe]=null}var Qe=null,Ve=null,te=!1,at=null;function Tp(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Ve=Qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gn!==null?{id:kt,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Ve=null,!0):!1;default:return!1}}function es(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ts(e){if(te){var t=Ve;if(t){var n=t;if(!Lc(e,t)){if(es(e))throw Error(P(418));t=Qt(n.nextSibling);var r=Qe;t&&Lc(e,t)?Tp(r,n):(e.flags=e.flags&-4097|2,te=!1,Qe=e)}}else{if(es(e))throw Error(P(418));e.flags=e.flags&-4097|2,te=!1,Qe=e}}}function Ic(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function $i(e){if(e!==Qe)return!1;if(!te)return Ic(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ya(e.type,e.memoizedProps)),t&&(t=Ve)){if(es(e))throw zp(),Error(P(418));for(;t;)Tp(e,t),t=Qt(t.nextSibling)}if(Ic(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=Qe?Qt(e.stateNode.nextSibling):null;return!0}function zp(){for(var e=Ve;e;)e=Qt(e.nextSibling)}function nr(){Ve=Qe=null,te=!1}function cu(e){at===null?at=[e]:at.push(e)}var cv=Tt.ReactCurrentBatchConfig;function ot(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Oo=tn(null),bo=null,Bn=null,du=null;function fu(){du=Bn=bo=null}function pu(e){var t=Oo.current;J(Oo),e._currentValue=t}function ns(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Kn(e,t){bo=e,du=Bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function et(e){var t=e._currentValue;if(du!==e)if(e={context:e,memoizedValue:t,next:null},Bn===null){if(bo===null)throw Error(P(308));Bn=e,bo.dependencies={lanes:0,firstContext:e}}else Bn=Bn.next=e;return t}var sn=null;function hu(e){sn===null?sn=[e]:sn.push(e)}function Lp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,hu(t)):(n.next=i.next,i.next=n),t.interleaved=n,bt(e,r)}function bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Mt=!1;function mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ip(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,bt(e,n)}return i=r.interleaved,i===null?(t.next=t,hu(r)):(t.next=i.next,i.next=t),r.interleaved=t,bt(e,n)}function Ji(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,eu(e,n)}}function Rc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Po(e,t,n,r){var i=e.updateQueue;Mt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(o!==null){var f=i.baseState;l=0,h=c=u=null,a=o;do{var g=a.lane,y=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,v=a;switch(g=t,y=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){f=x.call(y,f,g);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,g=typeof x=="function"?x.call(y,f,g):x,g==null)break e;f=oe({},f,g);break e;case 2:Mt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=y,u=f):h=h.next=y,l|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);yn|=l,e.lanes=l,e.memoizedState=f}}function Nc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var Rp=new Lf.Component().refs;function rs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dl={isMounted:function(e){return(e=e._reactInternals)?_n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),i=Kt(e),o=_t(r,i);o.payload=t,n!=null&&(o.callback=n),t=Gt(e,o,i),t!==null&&(ut(t,e,i,r),Ji(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),i=Kt(e),o=_t(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Gt(e,o,i),t!==null&&(ut(t,e,i,r),Ji(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=Kt(e),i=_t(n,r);i.tag=2,t!=null&&(i.callback=t),t=Gt(e,i,r),t!==null&&(ut(t,e,r,n),Ji(t,e,r))}};function Mc(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!ri(n,r)||!ri(i,o):!0}function Np(e,t,n){var r=!1,i=Jt,o=t.contextType;return typeof o=="object"&&o!==null?o=et(o):(i=Fe(t)?mn:Ee.current,r=t.contextTypes,o=(r=r!=null)?tr(e,i):Jt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function $c(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&dl.enqueueReplaceState(t,t.state,null)}function is(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Rp,mu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=et(o):(o=Fe(t)?mn:Ee.current,i.context=tr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(rs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&dl.enqueueReplaceState(i,i.state,null),Po(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function zr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===Rp&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Di(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Dc(e){var t=e._init;return t(e._payload)}function Mp(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Yt(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,w){return d===null||d.tag!==6?(d=la(m,p.mode,w),d.return=p,d):(d=i(d,m),d.return=p,d)}function u(p,d,m,w){var j=m.type;return j===In?h(p,d,m.props.children,w,m.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Nt&&Dc(j)===d.type)?(w=i(d,m.props),w.ref=zr(p,d,m),w.return=p,w):(w=oo(m.type,m.key,m.props,null,p.mode,w),w.ref=zr(p,d,m),w.return=p,w)}function c(p,d,m,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=aa(m,p.mode,w),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function h(p,d,m,w,j){return d===null||d.tag!==7?(d=fn(m,p.mode,w,j),d.return=p,d):(d=i(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=la(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Oi:return m=oo(d.type,d.key,d.props,null,p.mode,m),m.ref=zr(p,null,d),m.return=p,m;case Ln:return d=aa(d,p.mode,m),d.return=p,d;case Nt:var w=d._init;return f(p,w(d._payload),m)}if(Mr(d)||Er(d))return d=fn(d,p.mode,m,null),d.return=p,d;Di(p,d)}return null}function g(p,d,m,w){var j=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return j!==null?null:a(p,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Oi:return m.key===j?u(p,d,m,w):null;case Ln:return m.key===j?c(p,d,m,w):null;case Nt:return j=m._init,g(p,d,j(m._payload),w)}if(Mr(m)||Er(m))return j!==null?null:h(p,d,m,w,null);Di(p,m)}return null}function y(p,d,m,w,j){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(d,p,""+w,j);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Oi:return p=p.get(w.key===null?m:w.key)||null,u(d,p,w,j);case Ln:return p=p.get(w.key===null?m:w.key)||null,c(d,p,w,j);case Nt:var k=w._init;return y(p,d,m,k(w._payload),j)}if(Mr(w)||Er(w))return p=p.get(m)||null,h(d,p,w,j,null);Di(d,w)}return null}function x(p,d,m,w){for(var j=null,k=null,C=d,T=d=0,O=null;C!==null&&T<m.length;T++){C.index>T?(O=C,C=null):O=C.sibling;var E=g(p,C,m[T],w);if(E===null){C===null&&(C=O);break}e&&C&&E.alternate===null&&t(p,C),d=o(E,d,T),k===null?j=E:k.sibling=E,k=E,C=O}if(T===m.length)return n(p,C),te&&on(p,T),j;if(C===null){for(;T<m.length;T++)C=f(p,m[T],w),C!==null&&(d=o(C,d,T),k===null?j=C:k.sibling=C,k=C);return te&&on(p,T),j}for(C=r(p,C);T<m.length;T++)O=y(C,p,T,m[T],w),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?T:O.key),d=o(O,d,T),k===null?j=O:k.sibling=O,k=O);return e&&C.forEach(function(N){return t(p,N)}),te&&on(p,T),j}function v(p,d,m,w){var j=Er(m);if(typeof j!="function")throw Error(P(150));if(m=j.call(m),m==null)throw Error(P(151));for(var k=j=null,C=d,T=d=0,O=null,E=m.next();C!==null&&!E.done;T++,E=m.next()){C.index>T?(O=C,C=null):O=C.sibling;var N=g(p,C,E.value,w);if(N===null){C===null&&(C=O);break}e&&C&&N.alternate===null&&t(p,C),d=o(N,d,T),k===null?j=N:k.sibling=N,k=N,C=O}if(E.done)return n(p,C),te&&on(p,T),j;if(C===null){for(;!E.done;T++,E=m.next())E=f(p,E.value,w),E!==null&&(d=o(E,d,T),k===null?j=E:k.sibling=E,k=E);return te&&on(p,T),j}for(C=r(p,C);!E.done;T++,E=m.next())E=y(C,p,T,E.value,w),E!==null&&(e&&E.alternate!==null&&C.delete(E.key===null?T:E.key),d=o(E,d,T),k===null?j=E:k.sibling=E,k=E);return e&&C.forEach(function(M){return t(p,M)}),te&&on(p,T),j}function S(p,d,m,w){if(typeof m=="object"&&m!==null&&m.type===In&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Oi:e:{for(var j=m.key,k=d;k!==null;){if(k.key===j){if(j=m.type,j===In){if(k.tag===7){n(p,k.sibling),d=i(k,m.props.children),d.return=p,p=d;break e}}else if(k.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Nt&&Dc(j)===k.type){n(p,k.sibling),d=i(k,m.props),d.ref=zr(p,k,m),d.return=p,p=d;break e}n(p,k);break}else t(p,k);k=k.sibling}m.type===In?(d=fn(m.props.children,p.mode,w,m.key),d.return=p,p=d):(w=oo(m.type,m.key,m.props,null,p.mode,w),w.ref=zr(p,d,m),w.return=p,p=w)}return l(p);case Ln:e:{for(k=m.key;d!==null;){if(d.key===k)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=aa(m,p.mode,w),d.return=p,p=d}return l(p);case Nt:return k=m._init,S(p,d,k(m._payload),w)}if(Mr(m))return x(p,d,m,w);if(Er(m))return v(p,d,m,w);Di(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=la(m,p.mode,w),d.return=p,p=d),l(p)):n(p,d)}return S}var rr=Mp(!0),$p=Mp(!1),ji={},vt=tn(ji),ai=tn(ji),si=tn(ji);function un(e){if(e===ji)throw Error(P(174));return e}function gu(e,t){switch(Y(si,t),Y(ai,e),Y(vt,ji),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ma(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ma(t,e)}J(vt),Y(vt,t)}function ir(){J(vt),J(ai),J(si)}function Dp(e){un(si.current);var t=un(vt.current),n=Ma(t,e.type);t!==n&&(Y(ai,e),Y(vt,n))}function vu(e){ai.current===e&&(J(vt),J(ai))}var re=tn(0);function To(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ea=[];function yu(){for(var e=0;e<ea.length;e++)ea[e]._workInProgressVersionPrimary=null;ea.length=0}var eo=Tt.ReactCurrentDispatcher,ta=Tt.ReactCurrentBatchConfig,vn=0,ie=null,fe=null,me=null,zo=!1,Vr=!1,ui=0,dv=0;function ke(){throw Error(P(321))}function xu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!dt(e[n],t[n]))return!1;return!0}function wu(e,t,n,r,i,o){if(vn=o,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,eo.current=e===null||e.memoizedState===null?mv:gv,e=n(r,i),Vr){o=0;do{if(Vr=!1,ui=0,25<=o)throw Error(P(301));o+=1,me=fe=null,t.updateQueue=null,eo.current=vv,e=n(r,i)}while(Vr)}if(eo.current=Lo,t=fe!==null&&fe.next!==null,vn=0,me=fe=ie=null,zo=!1,t)throw Error(P(300));return e}function Su(){var e=ui!==0;return ui=0,e}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?ie.memoizedState=me=e:me=me.next=e,me}function tt(){if(fe===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=me===null?ie.memoizedState:me.next;if(t!==null)me=t,fe=e;else{if(e===null)throw Error(P(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},me===null?ie.memoizedState=me=e:me=me.next=e}return me}function ci(e,t){return typeof t=="function"?t(e):t}function na(e){var t=tt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=fe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,u=null,c=o;do{var h=c.lane;if((vn&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,l=r):u=u.next=f,ie.lanes|=h,yn|=h}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=a,dt(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ie.lanes|=o,yn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ra(e){var t=tt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);dt(o,t.memoizedState)||($e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Fp(){}function Ap(e,t){var n=ie,r=tt(),i=t(),o=!dt(r.memoizedState,i);if(o&&(r.memoizedState=i,$e=!0),r=r.queue,ju(Hp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,di(9,Wp.bind(null,n,r,i,t),void 0,null),ye===null)throw Error(P(349));vn&30||Bp(n,t,i)}return i}function Bp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wp(e,t,n,r){t.value=n,t.getSnapshot=r,Up(t)&&Vp(e)}function Hp(e,t,n){return n(function(){Up(t)&&Vp(e)})}function Up(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!dt(e,n)}catch{return!0}}function Vp(e){var t=bt(e,1);t!==null&&ut(t,e,1,-1)}function Fc(e){var t=pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:e},t.queue=e,e=e.dispatch=hv.bind(null,ie,e),[t.memoizedState,e]}function di(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Qp(){return tt().memoizedState}function to(e,t,n,r){var i=pt();ie.flags|=e,i.memoizedState=di(1|t,n,void 0,r===void 0?null:r)}function fl(e,t,n,r){var i=tt();r=r===void 0?null:r;var o=void 0;if(fe!==null){var l=fe.memoizedState;if(o=l.destroy,r!==null&&xu(r,l.deps)){i.memoizedState=di(t,n,o,r);return}}ie.flags|=e,i.memoizedState=di(1|t,n,o,r)}function Ac(e,t){return to(8390656,8,e,t)}function ju(e,t){return fl(2048,8,e,t)}function Gp(e,t){return fl(4,2,e,t)}function qp(e,t){return fl(4,4,e,t)}function Kp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yp(e,t,n){return n=n!=null?n.concat([e]):null,fl(4,4,Kp.bind(null,t,e),n)}function ku(){}function Xp(e,t){var n=tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zp(e,t){var n=tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jp(e,t,n){return vn&21?(dt(n,t)||(n=np(),ie.lanes|=n,yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)}function fv(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=ta.transition;ta.transition={};try{e(!1),t()}finally{K=n,ta.transition=r}}function e0(){return tt().memoizedState}function pv(e,t,n){var r=Kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},t0(e))n0(t,n);else if(n=Lp(e,t,n,r),n!==null){var i=Te();ut(n,e,r,i),r0(n,t,r)}}function hv(e,t,n){var r=Kt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(t0(e))n0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,dt(a,l)){var u=t.interleaved;u===null?(i.next=i,hu(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Lp(e,t,i,r),n!==null&&(i=Te(),ut(n,e,r,i),r0(n,t,r))}}function t0(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function n0(e,t){Vr=zo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function r0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,eu(e,n)}}var Lo={readContext:et,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},mv={readContext:et,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:Ac,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,to(4194308,4,Kp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return to(4194308,4,e,t)},useInsertionEffect:function(e,t){return to(4,2,e,t)},useMemo:function(e,t){var n=pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=pv.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:Fc,useDebugValue:ku,useDeferredValue:function(e){return pt().memoizedState=e},useTransition:function(){var e=Fc(!1),t=e[0];return e=fv.bind(null,e[1]),pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,i=pt();if(te){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ye===null)throw Error(P(349));vn&30||Bp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ac(Hp.bind(null,r,o,e),[e]),r.flags|=2048,di(9,Wp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=pt(),t=ye.identifierPrefix;if(te){var n=Ct,r=kt;n=(r&~(1<<32-st(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ui++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=dv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gv={readContext:et,useCallback:Xp,useContext:et,useEffect:ju,useImperativeHandle:Yp,useInsertionEffect:Gp,useLayoutEffect:qp,useMemo:Zp,useReducer:na,useRef:Qp,useState:function(){return na(ci)},useDebugValue:ku,useDeferredValue:function(e){var t=tt();return Jp(t,fe.memoizedState,e)},useTransition:function(){var e=na(ci)[0],t=tt().memoizedState;return[e,t]},useMutableSource:Fp,useSyncExternalStore:Ap,useId:e0,unstable_isNewReconciler:!1},vv={readContext:et,useCallback:Xp,useContext:et,useEffect:ju,useImperativeHandle:Yp,useInsertionEffect:Gp,useLayoutEffect:qp,useMemo:Zp,useReducer:ra,useRef:Qp,useState:function(){return ra(ci)},useDebugValue:ku,useDeferredValue:function(e){var t=tt();return fe===null?t.memoizedState=e:Jp(t,fe.memoizedState,e)},useTransition:function(){var e=ra(ci)[0],t=tt().memoizedState;return[e,t]},useMutableSource:Fp,useSyncExternalStore:Ap,useId:e0,unstable_isNewReconciler:!1};function or(e,t){try{var n="",r=t;do n+=Vm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ia(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function os(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var yv=typeof WeakMap=="function"?WeakMap:Map;function i0(e,t,n){n=_t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ro||(Ro=!0,ms=r),os(e,t)},n}function o0(e,t,n){n=_t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){os(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){os(e,t),typeof r!="function"&&(qt===null?qt=new Set([this]):qt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Bc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new yv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Lv.bind(null,e,t,n),t.then(e,e))}function Wc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=_t(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e)}var xv=Tt.ReactCurrentOwner,$e=!1;function Pe(e,t,n,r){t.child=e===null?$p(t,null,n,r):rr(t,e.child,n,r)}function Uc(e,t,n,r,i){n=n.render;var o=t.ref;return Kn(t,i),r=wu(e,t,n,r,o,i),n=Su(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pt(e,t,i)):(te&&n&&su(t),t.flags|=1,Pe(e,t,r,i),t.child)}function Vc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!zu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,l0(e,t,o,r,i)):(e=oo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:ri,n(l,r)&&e.ref===t.ref)return Pt(e,t,i)}return t.flags|=1,e=Yt(o,r),e.ref=t.ref,e.return=t,t.child=e}function l0(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ri(o,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,Pt(e,t,i)}return ls(e,t,n,r,i)}function a0(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Hn,Ue),Ue|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(Hn,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Y(Hn,Ue),Ue|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Y(Hn,Ue),Ue|=r;return Pe(e,t,i,n),t.child}function s0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ls(e,t,n,r,i){var o=Fe(n)?mn:Ee.current;return o=tr(t,o),Kn(t,i),n=wu(e,t,n,r,o,i),r=Su(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Pt(e,t,i)):(te&&r&&su(t),t.flags|=1,Pe(e,t,n,i),t.child)}function Qc(e,t,n,r,i){if(Fe(n)){var o=!0;Co(t)}else o=!1;if(Kn(t,i),t.stateNode===null)no(e,t),Np(t,n,r),is(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=et(c):(c=Fe(n)?mn:Ee.current,c=tr(t,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==c)&&$c(t,l,r,c),Mt=!1;var g=t.memoizedState;l.state=g,Po(t,r,l,i),u=t.memoizedState,a!==r||g!==u||De.current||Mt?(typeof h=="function"&&(rs(t,n,h,r),u=t.memoizedState),(a=Mt||Mc(t,n,a,r,g,u,c))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Ip(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:ot(t.type,a),l.props=c,f=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=et(u):(u=Fe(n)?mn:Ee.current,u=tr(t,u));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||g!==u)&&$c(t,l,r,u),Mt=!1,g=t.memoizedState,l.state=g,Po(t,r,l,i);var x=t.memoizedState;a!==f||g!==x||De.current||Mt?(typeof y=="function"&&(rs(t,n,y,r),x=t.memoizedState),(c=Mt||Mc(t,n,c,r,g,x,u)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return as(e,t,n,r,o,i)}function as(e,t,n,r,i,o){s0(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&zc(t,n,!1),Pt(e,t,o);r=t.stateNode,xv.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=rr(t,e.child,null,o),t.child=rr(t,null,a,o)):Pe(e,t,a,o),t.memoizedState=r.state,i&&zc(t,n,!0),t.child}function u0(e){var t=e.stateNode;t.pendingContext?Tc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tc(e,t.context,!1),gu(e,t.containerInfo)}function Gc(e,t,n,r,i){return nr(),cu(i),t.flags|=256,Pe(e,t,n,r),t.child}var ss={dehydrated:null,treeContext:null,retryLane:0};function us(e){return{baseLanes:e,cachePool:null,transitions:null}}function c0(e,t,n){var r=t.pendingProps,i=re.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(re,i&1),e===null)return ts(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=ml(l,r,0,null),e=fn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=us(n),t.memoizedState=ss,e):Cu(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return wv(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Yt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Yt(a,o):(o=fn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?us(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ss,r}return o=e.child,e=o.sibling,r=Yt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Cu(e,t){return t=ml({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fi(e,t,n,r){return r!==null&&cu(r),rr(t,e.child,null,n),e=Cu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wv(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=ia(Error(P(422))),Fi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ml({mode:"visible",children:r.children},i,0,null),o=fn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&rr(t,e.child,null,l),t.child.memoizedState=us(l),t.memoizedState=ss,o);if(!(t.mode&1))return Fi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(P(419)),r=ia(o,r,void 0),Fi(e,t,l,r)}if(a=(l&e.childLanes)!==0,$e||a){if(r=ye,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,bt(e,i),ut(r,e,i,-1))}return Tu(),r=ia(Error(P(421))),Fi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Iv.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ve=Qt(i.nextSibling),Qe=t,te=!0,at=null,e!==null&&(Ye[Xe++]=kt,Ye[Xe++]=Ct,Ye[Xe++]=gn,kt=e.id,Ct=e.overflow,gn=t),t=Cu(t,r.children),t.flags|=4096,t)}function qc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ns(e.return,t,n)}function oa(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function d0(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Pe(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qc(e,n,t);else if(e.tag===19)qc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(re,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&To(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),oa(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&To(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}oa(t,!0,n,null,o);break;case"together":oa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function no(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sv(e,t,n){switch(t.tag){case 3:u0(t),nr();break;case 5:Dp(t);break;case 1:Fe(t.type)&&Co(t);break;case 4:gu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(Oo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?c0(e,t,n):(Y(re,re.current&1),e=Pt(e,t,n),e!==null?e.sibling:null);Y(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return d0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,a0(e,t,n)}return Pt(e,t,n)}var f0,cs,p0,h0;f0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cs=function(){};p0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,un(vt.current);var o=null;switch(n){case"input":i=La(e,i),r=La(e,r),o=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),o=[];break;case"textarea":i=Na(e,i),r=Na(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=jo)}$a(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Yr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Yr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&X("scroll",e),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};h0=function(e,t,n,r){n!==r&&(t.flags|=4)};function Lr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jv(e,t,n){var r=t.pendingProps;switch(uu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Fe(t.type)&&ko(),Ce(t),null;case 3:return r=t.stateNode,ir(),J(De),J(Ee),yu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&($i(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,at!==null&&(ys(at),at=null))),cs(e,t),Ce(t),null;case 5:vu(t);var i=un(si.current);if(n=t.type,e!==null&&t.stateNode!=null)p0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Ce(t),null}if(e=un(vt.current),$i(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[mt]=t,r[li]=o,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<Dr.length;i++)X(Dr[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":rc(r,o),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},X("invalid",r);break;case"textarea":oc(r,o),X("invalid",r)}$a(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Mi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Mi(r.textContent,a,e),i=["children",""+a]):Yr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&X("scroll",r)}switch(n){case"input":bi(r),ic(r,o,!0);break;case"textarea":bi(r),lc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=jo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[mt]=t,e[li]=r,f0(e,t,!1,!1),t.stateNode=e;e:{switch(l=Da(n,r),n){case"dialog":X("cancel",e),X("close",e),i=r;break;case"iframe":case"object":case"embed":X("load",e),i=r;break;case"video":case"audio":for(i=0;i<Dr.length;i++)X(Dr[i],e);i=r;break;case"source":X("error",e),i=r;break;case"img":case"image":case"link":X("error",e),X("load",e),i=r;break;case"details":X("toggle",e),i=r;break;case"input":rc(e,r),i=La(e,r),X("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),X("invalid",e);break;case"textarea":oc(e,r),i=Na(e,r),X("invalid",e);break;default:i=r}$a(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?Uf(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Wf(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Xr(e,u):typeof u=="number"&&Xr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Yr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&X("scroll",e):u!=null&&qs(e,o,u,l))}switch(n){case"input":bi(e),ic(e,r,!1);break;case"textarea":bi(e),lc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Vn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Vn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=jo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)h0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=un(si.current),un(vt.current),$i(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(o=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:Mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return Ce(t),null;case 13:if(J(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Ve!==null&&t.mode&1&&!(t.flags&128))zp(),nr(),t.flags|=98560,o=!1;else if(o=$i(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[mt]=t}else nr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),o=!1}else at!==null&&(ys(at),at=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?pe===0&&(pe=3):Tu())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return ir(),cs(e,t),e===null&&ii(t.stateNode.containerInfo),Ce(t),null;case 10:return pu(t.type._context),Ce(t),null;case 17:return Fe(t.type)&&ko(),Ce(t),null;case 19:if(J(re),o=t.memoizedState,o===null)return Ce(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Lr(o,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=To(e),l!==null){for(t.flags|=128,Lr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(re,re.current&1|2),t.child}e=e.sibling}o.tail!==null&&se()>lr&&(t.flags|=128,r=!0,Lr(o,!1),t.lanes=4194304)}else{if(!r)if(e=To(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Lr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!te)return Ce(t),null}else 2*se()-o.renderingStartTime>lr&&n!==1073741824&&(t.flags|=128,r=!0,Lr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=se(),t.sibling=null,n=re.current,Y(re,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return Pu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function kv(e,t){switch(uu(t),t.tag){case 1:return Fe(t.type)&&ko(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ir(),J(De),J(Ee),yu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vu(t),null;case 13:if(J(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(re),null;case 4:return ir(),null;case 10:return pu(t.type._context),null;case 22:case 23:return Pu(),null;case 24:return null;default:return null}}var Ai=!1,_e=!1,Cv=typeof WeakSet=="function"?WeakSet:Set,I=null;function Wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function ds(e,t,n){try{n()}catch(r){ae(e,t,r)}}var Kc=!1;function _v(e,t){if(qa=xo,e=yp(),au(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,c=0,h=0,f=e,g=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=l+i),f!==o||r!==0&&f.nodeType!==3||(u=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(y=f.firstChild)!==null;)g=f,f=y;for(;;){if(f===e)break t;if(g===n&&++c===i&&(a=l),g===o&&++h===r&&(u=l),(y=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ka={focusedElem:e,selectionRange:n},xo=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,S=x.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:ot(t.type,v),S);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){ae(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return x=Kc,Kc=!1,x}function Qr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ds(t,n,o)}i=i.next}while(i!==r)}}function pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function m0(e){var t=e.alternate;t!==null&&(e.alternate=null,m0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[li],delete t[Za],delete t[av],delete t[sv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function g0(e){return e.tag===5||e.tag===3||e.tag===4}function Yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||g0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ps(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=jo));else if(r!==4&&(e=e.child,e!==null))for(ps(e,t,n),e=e.sibling;e!==null;)ps(e,t,n),e=e.sibling}function hs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hs(e,t,n),e=e.sibling;e!==null;)hs(e,t,n),e=e.sibling}var we=null,lt=!1;function It(e,t,n){for(n=n.child;n!==null;)v0(e,t,n),n=n.sibling}function v0(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:_e||Wn(n,t);case 6:var r=we,i=lt;we=null,It(e,t,n),we=r,lt=i,we!==null&&(lt?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(lt?(e=we,n=n.stateNode,e.nodeType===8?Zl(e.parentNode,n):e.nodeType===1&&Zl(e,n),ti(e)):Zl(we,n.stateNode));break;case 4:r=we,i=lt,we=n.stateNode.containerInfo,lt=!0,It(e,t,n),we=r,lt=i;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ds(n,t,l),i=i.next}while(i!==r)}It(e,t,n);break;case 1:if(!_e&&(Wn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,t,a)}It(e,t,n);break;case 21:It(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,It(e,t,n),_e=r):It(e,t,n);break;default:It(e,t,n)}}function Xc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Cv),t.forEach(function(r){var i=Rv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function it(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:we=a.stateNode,lt=!1;break e;case 3:we=a.stateNode.containerInfo,lt=!0;break e;case 4:we=a.stateNode.containerInfo,lt=!0;break e}a=a.return}if(we===null)throw Error(P(160));v0(o,l,i),we=null,lt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ae(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)y0(t,e),t=t.sibling}function y0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),ft(e),r&4){try{Qr(3,e,e.return),pl(3,e)}catch(v){ae(e,e.return,v)}try{Qr(5,e,e.return)}catch(v){ae(e,e.return,v)}}break;case 1:it(t,e),ft(e),r&512&&n!==null&&Wn(n,n.return);break;case 5:if(it(t,e),ft(e),r&512&&n!==null&&Wn(n,n.return),e.flags&32){var i=e.stateNode;try{Xr(i,"")}catch(v){ae(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Ff(i,o),Da(a,l);var c=Da(a,o);for(l=0;l<u.length;l+=2){var h=u[l],f=u[l+1];h==="style"?Uf(i,f):h==="dangerouslySetInnerHTML"?Wf(i,f):h==="children"?Xr(i,f):qs(i,h,f,c)}switch(a){case"input":Ia(i,o);break;case"textarea":Af(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Vn(i,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?Vn(i,!!o.multiple,o.defaultValue,!0):Vn(i,!!o.multiple,o.multiple?[]:"",!1))}i[li]=o}catch(v){ae(e,e.return,v)}}break;case 6:if(it(t,e),ft(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){ae(e,e.return,v)}}break;case 3:if(it(t,e),ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ti(t.containerInfo)}catch(v){ae(e,e.return,v)}break;case 4:it(t,e),ft(e);break;case 13:it(t,e),ft(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ou=se())),r&4&&Xc(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(c=_e)||h,it(t,e),_e=c):it(t,e),ft(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(I=e,h=e.child;h!==null;){for(f=I=h;I!==null;){switch(g=I,y=g.child,g.tag){case 0:case 11:case 14:case 15:Qr(4,g,g.return);break;case 1:Wn(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){ae(r,n,v)}}break;case 5:Wn(g,g.return);break;case 22:if(g.memoizedState!==null){Jc(f);continue}}y!==null?(y.return=g,I=y):Jc(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,u=f.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Hf("display",l))}catch(v){ae(e,e.return,v)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){ae(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:it(t,e),ft(e),r&4&&Xc(e);break;case 21:break;default:it(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(g0(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xr(i,""),r.flags&=-33);var o=Yc(e);hs(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Yc(e);ps(e,a,l);break;default:throw Error(P(161))}}catch(u){ae(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ev(e,t,n){I=e,x0(e)}function x0(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ai;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||_e;a=Ai;var c=_e;if(Ai=l,(_e=u)&&!c)for(I=i;I!==null;)l=I,u=l.child,l.tag===22&&l.memoizedState!==null?ed(i):u!==null?(u.return=l,I=u):ed(i);for(;o!==null;)I=o,x0(o),o=o.sibling;I=i,Ai=a,_e=c}Zc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,I=o):Zc(e)}}function Zc(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_e||pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Nc(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Nc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ti(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}_e||t.flags&512&&fs(t)}catch(g){ae(t,t.return,g)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Jc(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function ed(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pl(4,t)}catch(u){ae(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){ae(t,i,u)}}var o=t.return;try{fs(t)}catch(u){ae(t,o,u)}break;case 5:var l=t.return;try{fs(t)}catch(u){ae(t,l,u)}}}catch(u){ae(t,t.return,u)}if(t===e){I=null;break}var a=t.sibling;if(a!==null){a.return=t.return,I=a;break}I=t.return}}var Ov=Math.ceil,Io=Tt.ReactCurrentDispatcher,_u=Tt.ReactCurrentOwner,Je=Tt.ReactCurrentBatchConfig,Q=0,ye=null,ce=null,Se=0,Ue=0,Hn=tn(0),pe=0,fi=null,yn=0,hl=0,Eu=0,Gr=null,Me=null,Ou=0,lr=1/0,xt=null,Ro=!1,ms=null,qt=null,Bi=!1,Bt=null,No=0,qr=0,gs=null,ro=-1,io=0;function Te(){return Q&6?se():ro!==-1?ro:ro=se()}function Kt(e){return e.mode&1?Q&2&&Se!==0?Se&-Se:cv.transition!==null?(io===0&&(io=np()),io):(e=K,e!==0||(e=window.event,e=e===void 0?16:up(e.type)),e):1}function ut(e,t,n,r){if(50<qr)throw qr=0,gs=null,Error(P(185));xi(e,n,r),(!(Q&2)||e!==ye)&&(e===ye&&(!(Q&2)&&(hl|=n),pe===4&&Ft(e,Se)),Ae(e,r),n===1&&Q===0&&!(t.mode&1)&&(lr=se()+500,cl&&nn()))}function Ae(e,t){var n=e.callbackNode;cg(e,t);var r=yo(e,e===ye?Se:0);if(r===0)n!==null&&uc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&uc(n),t===1)e.tag===0?uv(td.bind(null,e)):bp(td.bind(null,e)),ov(function(){!(Q&6)&&nn()}),n=null;else{switch(rp(r)){case 1:n=Js;break;case 4:n=ep;break;case 16:n=vo;break;case 536870912:n=tp;break;default:n=vo}n=O0(n,w0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function w0(e,t){if(ro=-1,io=0,Q&6)throw Error(P(327));var n=e.callbackNode;if(Yn()&&e.callbackNode!==n)return null;var r=yo(e,e===ye?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Mo(e,r);else{t=r;var i=Q;Q|=2;var o=j0();(ye!==e||Se!==t)&&(xt=null,lr=se()+500,dn(e,t));do try{Tv();break}catch(a){S0(e,a)}while(!0);fu(),Io.current=o,Q=i,ce!==null?t=0:(ye=null,Se=0,t=pe)}if(t!==0){if(t===2&&(i=Ha(e),i!==0&&(r=i,t=vs(e,i))),t===1)throw n=fi,dn(e,0),Ft(e,r),Ae(e,se()),n;if(t===6)Ft(e,r);else{if(i=e.current.alternate,!(r&30)&&!bv(i)&&(t=Mo(e,r),t===2&&(o=Ha(e),o!==0&&(r=o,t=vs(e,o))),t===1))throw n=fi,dn(e,0),Ft(e,r),Ae(e,se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:ln(e,Me,xt);break;case 3:if(Ft(e,r),(r&130023424)===r&&(t=Ou+500-se(),10<t)){if(yo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Xa(ln.bind(null,e,Me,xt),t);break}ln(e,Me,xt);break;case 4:if(Ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-st(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ov(r/1960))-r,10<r){e.timeoutHandle=Xa(ln.bind(null,e,Me,xt),r);break}ln(e,Me,xt);break;case 5:ln(e,Me,xt);break;default:throw Error(P(329))}}}return Ae(e,se()),e.callbackNode===n?w0.bind(null,e):null}function vs(e,t){var n=Gr;return e.current.memoizedState.isDehydrated&&(dn(e,t).flags|=256),e=Mo(e,t),e!==2&&(t=Me,Me=n,t!==null&&ys(t)),e}function ys(e){Me===null?Me=e:Me.push.apply(Me,e)}function bv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!dt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ft(e,t){for(t&=~Eu,t&=~hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),r=1<<n;e[n]=-1,t&=~r}}function td(e){if(Q&6)throw Error(P(327));Yn();var t=yo(e,0);if(!(t&1))return Ae(e,se()),null;var n=Mo(e,t);if(e.tag!==0&&n===2){var r=Ha(e);r!==0&&(t=r,n=vs(e,r))}if(n===1)throw n=fi,dn(e,0),Ft(e,t),Ae(e,se()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ln(e,Me,xt),Ae(e,se()),null}function bu(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(lr=se()+500,cl&&nn())}}function xn(e){Bt!==null&&Bt.tag===0&&!(Q&6)&&Yn();var t=Q;Q|=1;var n=Je.transition,r=K;try{if(Je.transition=null,K=1,e)return e()}finally{K=r,Je.transition=n,Q=t,!(Q&6)&&nn()}}function Pu(){Ue=Hn.current,J(Hn)}function dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,iv(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(uu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ko();break;case 3:ir(),J(De),J(Ee),yu();break;case 5:vu(r);break;case 4:ir();break;case 13:J(re);break;case 19:J(re);break;case 10:pu(r.type._context);break;case 22:case 23:Pu()}n=n.return}if(ye=e,ce=e=Yt(e.current,null),Se=Ue=t,pe=0,fi=null,Eu=hl=yn=0,Me=Gr=null,sn!==null){for(t=0;t<sn.length;t++)if(n=sn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}sn=null}return e}function S0(e,t){do{var n=ce;try{if(fu(),eo.current=Lo,zo){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zo=!1}if(vn=0,me=fe=ie=null,Vr=!1,ui=0,_u.current=null,n===null||n.return===null){pe=1,fi=t,ce=null;break}e:{var o=e,l=n.return,a=n,u=t;if(t=Se,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Wc(l);if(y!==null){y.flags&=-257,Hc(y,l,a,o,t),y.mode&1&&Bc(o,c,t),t=y,u=c;var x=t.updateQueue;if(x===null){var v=new Set;v.add(u),t.updateQueue=v}else x.add(u);break e}else{if(!(t&1)){Bc(o,c,t),Tu();break e}u=Error(P(426))}}else if(te&&a.mode&1){var S=Wc(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Hc(S,l,a,o,t),cu(or(u,a));break e}}o=u=or(u,a),pe!==4&&(pe=2),Gr===null?Gr=[o]:Gr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=i0(o,u,t);Rc(o,p);break e;case 1:a=u;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(qt===null||!qt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=o0(o,a,t);Rc(o,w);break e}}o=o.return}while(o!==null)}C0(n)}catch(j){t=j,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(!0)}function j0(){var e=Io.current;return Io.current=Lo,e===null?Lo:e}function Tu(){(pe===0||pe===3||pe===2)&&(pe=4),ye===null||!(yn&268435455)&&!(hl&268435455)||Ft(ye,Se)}function Mo(e,t){var n=Q;Q|=2;var r=j0();(ye!==e||Se!==t)&&(xt=null,dn(e,t));do try{Pv();break}catch(i){S0(e,i)}while(!0);if(fu(),Q=n,Io.current=r,ce!==null)throw Error(P(261));return ye=null,Se=0,pe}function Pv(){for(;ce!==null;)k0(ce)}function Tv(){for(;ce!==null&&!tg();)k0(ce)}function k0(e){var t=E0(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?C0(e):ce=t,_u.current=null}function C0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=kv(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,ce=null;return}}else if(n=jv(n,t,Ue),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);pe===0&&(pe=5)}function ln(e,t,n){var r=K,i=Je.transition;try{Je.transition=null,K=1,zv(e,t,n,r)}finally{Je.transition=i,K=r}return null}function zv(e,t,n,r){do Yn();while(Bt!==null);if(Q&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(dg(e,o),e===ye&&(ce=ye=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bi||(Bi=!0,O0(vo,function(){return Yn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Je.transition,Je.transition=null;var l=K;K=1;var a=Q;Q|=4,_u.current=null,_v(e,n),y0(n,e),Xg(Ka),xo=!!qa,Ka=qa=null,e.current=n,Ev(n),ng(),Q=a,K=l,Je.transition=o}else e.current=n;if(Bi&&(Bi=!1,Bt=e,No=i),o=e.pendingLanes,o===0&&(qt=null),og(n.stateNode),Ae(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ro)throw Ro=!1,e=ms,ms=null,e;return No&1&&e.tag!==0&&Yn(),o=e.pendingLanes,o&1?e===gs?qr++:(qr=0,gs=e):qr=0,nn(),null}function Yn(){if(Bt!==null){var e=rp(No),t=Je.transition,n=K;try{if(Je.transition=null,K=16>e?16:e,Bt===null)var r=!1;else{if(e=Bt,Bt=null,No=0,Q&6)throw Error(P(331));var i=Q;for(Q|=4,I=e.current;I!==null;){var o=I,l=o.child;if(I.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(I=c;I!==null;){var h=I;switch(h.tag){case 0:case 11:case 15:Qr(8,h,o)}var f=h.child;if(f!==null)f.return=h,I=f;else for(;I!==null;){h=I;var g=h.sibling,y=h.return;if(m0(h),h===c){I=null;break}if(g!==null){g.return=y,I=g;break}I=y}}}var x=o.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}I=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,I=l;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Qr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,I=p;break e}I=o.return}}var d=e.current;for(I=d;I!==null;){l=I;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,I=m;else e:for(l=d;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:pl(9,a)}}catch(j){ae(a,a.return,j)}if(a===l){I=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,I=w;break e}I=a.return}}if(Q=i,nn(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(ol,e)}catch{}r=!0}return r}finally{K=n,Je.transition=t}}return!1}function nd(e,t,n){t=or(n,t),t=i0(e,t,1),e=Gt(e,t,1),t=Te(),e!==null&&(xi(e,1,t),Ae(e,t))}function ae(e,t,n){if(e.tag===3)nd(e,e,n);else for(;t!==null;){if(t.tag===3){nd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qt===null||!qt.has(r))){e=or(n,e),e=o0(t,e,1),t=Gt(t,e,1),e=Te(),t!==null&&(xi(t,1,e),Ae(t,e));break}}t=t.return}}function Lv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(Se&n)===n&&(pe===4||pe===3&&(Se&130023424)===Se&&500>se()-Ou?dn(e,0):Eu|=n),Ae(e,t)}function _0(e,t){t===0&&(e.mode&1?(t=zi,zi<<=1,!(zi&130023424)&&(zi=4194304)):t=1);var n=Te();e=bt(e,t),e!==null&&(xi(e,t,n),Ae(e,n))}function Iv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_0(e,n)}function Rv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),_0(e,n)}var E0;E0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)$e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,Sv(e,t,n);$e=!!(e.flags&131072)}else $e=!1,te&&t.flags&1048576&&Pp(t,Eo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;no(e,t),e=t.pendingProps;var i=tr(t,Ee.current);Kn(t,n),i=wu(null,t,r,e,i,n);var o=Su();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(o=!0,Co(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,mu(t),i.updater=dl,t.stateNode=i,i._reactInternals=t,is(t,r,e,n),t=as(null,t,r,!0,o,n)):(t.tag=0,te&&o&&su(t),Pe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(no(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Mv(r),e=ot(r,e),i){case 0:t=ls(null,t,r,e,n);break e;case 1:t=Qc(null,t,r,e,n);break e;case 11:t=Uc(null,t,r,e,n);break e;case 14:t=Vc(null,t,r,ot(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),ls(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),Qc(e,t,r,i,n);case 3:e:{if(u0(t),e===null)throw Error(P(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Ip(e,t),Po(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=or(Error(P(423)),t),t=Gc(e,t,r,n,i);break e}else if(r!==i){i=or(Error(P(424)),t),t=Gc(e,t,r,n,i);break e}else for(Ve=Qt(t.stateNode.containerInfo.firstChild),Qe=t,te=!0,at=null,n=$p(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nr(),r===i){t=Pt(e,t,n);break e}Pe(e,t,r,n)}t=t.child}return t;case 5:return Dp(t),e===null&&ts(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Ya(r,i)?l=null:o!==null&&Ya(r,o)&&(t.flags|=32),s0(e,t),Pe(e,t,l,n),t.child;case 6:return e===null&&ts(t),null;case 13:return c0(e,t,n);case 4:return gu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rr(t,null,r,n):Pe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),Uc(e,t,r,i,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,Y(Oo,r._currentValue),r._currentValue=l,o!==null)if(dt(o.value,l)){if(o.children===i.children&&!De.current){t=Pt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=_t(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),ns(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(P(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ns(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Pe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Kn(t,n),i=et(i),r=r(i),t.flags|=1,Pe(e,t,r,n),t.child;case 14:return r=t.type,i=ot(r,t.pendingProps),i=ot(r.type,i),Vc(e,t,r,i,n);case 15:return l0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),no(e,t),t.tag=1,Fe(r)?(e=!0,Co(t)):e=!1,Kn(t,n),Np(t,r,i),is(t,r,i,n),as(null,t,r,!0,e,n);case 19:return d0(e,t,n);case 22:return a0(e,t,n)}throw Error(P(156,t.tag))};function O0(e,t){return Jf(e,t)}function Nv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,r){return new Nv(e,t,n,r)}function zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mv(e){if(typeof e=="function")return zu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ys)return 11;if(e===Xs)return 14}return 2}function Yt(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oo(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")zu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case In:return fn(n.children,i,o,t);case Ks:l=8,i|=8;break;case ba:return e=Ze(12,n,t,i|2),e.elementType=ba,e.lanes=o,e;case Pa:return e=Ze(13,n,t,i),e.elementType=Pa,e.lanes=o,e;case Ta:return e=Ze(19,n,t,i),e.elementType=Ta,e.lanes=o,e;case Mf:return ml(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rf:l=10;break e;case Nf:l=9;break e;case Ys:l=11;break e;case Xs:l=14;break e;case Nt:l=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Ze(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function fn(e,t,n,r){return e=Ze(7,e,r,t),e.lanes=n,e}function ml(e,t,n,r){return e=Ze(22,e,r,t),e.elementType=Mf,e.lanes=n,e.stateNode={isHidden:!1},e}function la(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function aa(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $v(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bl(0),this.expirationTimes=Bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Lu(e,t,n,r,i,o,l,a,u){return e=new $v(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ze(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mu(o),e}function Dv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ln,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function b0(e){if(!e)return Jt;e=e._reactInternals;e:{if(_n(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Fe(n))return Op(e,n,t)}return t}function P0(e,t,n,r,i,o,l,a,u){return e=Lu(n,r,!0,e,i,o,l,a,u),e.context=b0(null),n=e.current,r=Te(),i=Kt(n),o=_t(r,i),o.callback=t??null,Gt(n,o,i),e.current.lanes=i,xi(e,i,r),Ae(e,r),e}function gl(e,t,n,r){var i=t.current,o=Te(),l=Kt(i);return n=b0(n),t.context===null?t.context=n:t.pendingContext=n,t=_t(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gt(i,t,l),e!==null&&(ut(e,i,l,o),Ji(e,i,l)),l}function $o(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Iu(e,t){rd(e,t),(e=e.alternate)&&rd(e,t)}function Fv(){return null}var T0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ru(e){this._internalRoot=e}vl.prototype.render=Ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));gl(e,t,null,null)};vl.prototype.unmount=Ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){gl(null,e,null,null)}),t[Ot]=null}};function vl(e){this._internalRoot=e}vl.prototype.unstable_scheduleHydration=function(e){if(e){var t=lp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&t!==0&&t<Dt[n].priority;n++);Dt.splice(n,0,e),n===0&&sp(e)}};function Nu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function id(){}function Av(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=$o(l);o.call(c)}}var l=P0(t,r,e,0,null,!1,!1,"",id);return e._reactRootContainer=l,e[Ot]=l.current,ii(e.nodeType===8?e.parentNode:e),xn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=$o(u);a.call(c)}}var u=Lu(e,0,!1,null,null,!1,!1,"",id);return e._reactRootContainer=u,e[Ot]=u.current,ii(e.nodeType===8?e.parentNode:e),xn(function(){gl(t,u,n,r)}),u}function xl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var u=$o(l);a.call(u)}}gl(t,l,e,i)}else l=Av(n,t,e,i,r);return $o(l)}ip=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$r(t.pendingLanes);n!==0&&(eu(t,n|1),Ae(t,se()),!(Q&6)&&(lr=se()+500,nn()))}break;case 13:xn(function(){var r=bt(e,1);if(r!==null){var i=Te();ut(r,e,1,i)}}),Iu(e,1)}};tu=function(e){if(e.tag===13){var t=bt(e,134217728);if(t!==null){var n=Te();ut(t,e,134217728,n)}Iu(e,134217728)}};op=function(e){if(e.tag===13){var t=Kt(e),n=bt(e,t);if(n!==null){var r=Te();ut(n,e,t,r)}Iu(e,t)}};lp=function(){return K};ap=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};Aa=function(e,t,n){switch(t){case"input":if(Ia(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ul(r);if(!i)throw Error(P(90));Df(r),Ia(r,i)}}}break;case"textarea":Af(e,n);break;case"select":t=n.value,t!=null&&Vn(e,!!n.multiple,t,!1)}};Gf=bu;qf=xn;var Bv={usingClientEntryPoint:!1,Events:[Si,$n,ul,Vf,Qf,bu]},Ir={findFiberByHostInstance:an,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Wv={bundleType:Ir.bundleType,version:Ir.version,rendererPackageName:Ir.rendererPackageName,rendererConfig:Ir.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xf(e),e===null?null:e.stateNode},findFiberByHostInstance:Ir.findFiberByHostInstance||Fv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{ol=Wi.inject(Wv),gt=Wi}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bv;qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nu(t))throw Error(P(200));return Dv(e,t,null,n)};qe.createRoot=function(e,t){if(!Nu(e))throw Error(P(299));var n=!1,r="",i=T0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Lu(e,1,!1,null,null,n,!1,r,i),e[Ot]=t.current,ii(e.nodeType===8?e.parentNode:e),new Ru(t)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Xf(t),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return xn(e)};qe.hydrate=function(e,t,n){if(!yl(t))throw Error(P(200));return xl(null,e,t,!0,n)};qe.hydrateRoot=function(e,t,n){if(!Nu(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=T0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=P0(t,null,e,1,n??null,i,!1,o,l),e[Ot]=t.current,ii(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new vl(t)};qe.render=function(e,t,n){if(!yl(t))throw Error(P(200));return xl(null,e,t,!1,n)};qe.unmountComponentAtNode=function(e){if(!yl(e))throw Error(P(40));return e._reactRootContainer?(xn(function(){xl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1};qe.unstable_batchedUpdates=bu;qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yl(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return xl(e,t,n,!1,r)};qe.version="18.2.0-next-9e3b772b8-20220608";function z0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z0)}catch(e){console.error(e)}}z0(),Pf.exports=qe;var Hv=Pf.exports,od=Hv;Ea.createRoot=od.createRoot,Ea.hydrateRoot=od.hydrateRoot;/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pi(){return pi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pi.apply(this,arguments)}var Wt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Wt||(Wt={}));const ld="popstate";function Uv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return xs("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:I0(i)}return Qv(t,n,null,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function L0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Vv(){return Math.random().toString(36).substr(2,8)}function ad(e,t){return{usr:e.state,key:e.key,idx:t}}function xs(e,t,n,r){return n===void 0&&(n=null),pi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?jr(t):t,{state:n,key:t&&t.key||r||Vv()})}function I0(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function jr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Qv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Wt.Pop,u=null,c=h();c==null&&(c=0,l.replaceState(pi({},l.state,{idx:c}),""));function h(){return(l.state||{idx:null}).idx}function f(){a=Wt.Pop;let S=h(),p=S==null?null:S-c;c=S,u&&u({action:a,location:v.location,delta:p})}function g(S,p){a=Wt.Push;let d=xs(v.location,S,p);n&&n(d,S),c=h()+1;let m=ad(d,c),w=v.createHref(d);try{l.pushState(m,"",w)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(w)}o&&u&&u({action:a,location:v.location,delta:1})}function y(S,p){a=Wt.Replace;let d=xs(v.location,S,p);n&&n(d,S),c=h();let m=ad(d,c),w=v.createHref(d);l.replaceState(m,"",w),o&&u&&u({action:a,location:v.location,delta:0})}function x(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof S=="string"?S:I0(S);return d=d.replace(/ $/,"%20"),he(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let v={get action(){return a},get location(){return e(i,l)},listen(S){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(ld,f),u=S,()=>{i.removeEventListener(ld,f),u=null}},createHref(S){return t(i,S)},createURL:x,encodeLocation(S){let p=x(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:y,go(S){return l.go(S)}};return v}var sd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(sd||(sd={}));function Gv(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?jr(t):t,i=M0(r.pathname||"/",n);if(i==null)return null;let o=R0(e);qv(o);let l=null;for(let a=0;l==null&&a<o.length;++a){let u=l1(i);l=r1(o[a],u)}return l}function R0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(he(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=pn([r,u.relativePath]),h=n.concat(u);o.children&&o.children.length>0&&(he(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),R0(o.children,t,h,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:t1(c,o.index),routesMeta:h})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let u of N0(o.path))i(o,l,u)}),t}function N0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=N0(r.join("/")),a=[];return a.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...l),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function qv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:n1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Kv=/^:[\w-]+$/,Yv=3,Xv=2,Zv=1,Jv=10,e1=-2,ud=e=>e==="*";function t1(e,t){let n=e.split("/"),r=n.length;return n.some(ud)&&(r+=e1),t&&(r+=Xv),n.filter(i=>!ud(i)).reduce((i,o)=>i+(Kv.test(o)?Yv:o===""?Zv:Jv),r)}function n1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function r1(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],u=l===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",h=i1({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!h)return null;Object.assign(r,h.params);let f=a.route;o.push({params:r,pathname:pn([i,h.pathname]),pathnameBase:f1(pn([i,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(i=pn([i,h.pathnameBase]))}return o}function i1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=o1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:g,isOptional:y}=h;if(g==="*"){let v=a[f]||"";l=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const x=a[f];return y&&!x?c[g]=void 0:c[g]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function o1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),L0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function l1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return L0(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function M0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function a1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?jr(e):e;return{pathname:n?n.startsWith("/")?n:s1(n,t):t,search:p1(r),hash:h1(i)}}function s1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function sa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function u1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function c1(e,t){let n=u1(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function d1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=jr(e):(i=pi({},e),he(!i.pathname||!i.pathname.includes("?"),sa("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),sa("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),sa("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let f=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}a=f>=0?t[f]:"/"}let u=a1(i,a),c=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const pn=e=>e.join("/").replace(/\/\/+/g,"/"),f1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),p1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,h1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function m1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const $0=["post","put","patch","delete"];new Set($0);const g1=["get",...$0];new Set(g1);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hi(){return hi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hi.apply(this,arguments)}const Mu=_.createContext(null),v1=_.createContext(null),wl=_.createContext(null),Sl=_.createContext(null),En=_.createContext({outlet:null,matches:[],isDataRoute:!1}),D0=_.createContext(null);function jl(){return _.useContext(Sl)!=null}function $u(){return jl()||he(!1),_.useContext(Sl).location}function F0(e){_.useContext(wl).static||_.useLayoutEffect(e)}function zt(){let{isDataRoute:e}=_.useContext(En);return e?z1():y1()}function y1(){jl()||he(!1);let e=_.useContext(Mu),{basename:t,future:n,navigator:r}=_.useContext(wl),{matches:i}=_.useContext(En),{pathname:o}=$u(),l=JSON.stringify(c1(i,n.v7_relativeSplatPath)),a=_.useRef(!1);return F0(()=>{a.current=!0}),_.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=d1(c,JSON.parse(l),o,h.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:pn([t,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[t,r,l,o,e])}function x1(){let{matches:e}=_.useContext(En),t=e[e.length-1];return t?t.params:{}}function w1(e,t){return S1(e,t)}function S1(e,t,n,r){jl()||he(!1);let{navigator:i}=_.useContext(wl),{matches:o}=_.useContext(En),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let c=$u(),h;if(t){var f;let S=typeof t=="string"?jr(t):t;u==="/"||(f=S.pathname)!=null&&f.startsWith(u)||he(!1),h=S}else h=c;let g=h.pathname||"/",y=g;if(u!=="/"){let S=u.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(S.length).join("/")}let x=Gv(e,{pathname:y}),v=E1(x&&x.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:pn([u,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?u:pn([u,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&v?_.createElement(Sl.Provider,{value:{location:hi({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Wt.Pop}},v):v}function j1(){let e=T1(),t=m1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:i},n):null,null)}const k1=_.createElement(j1,null);class C1 extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?_.createElement(En.Provider,{value:this.props.routeContext},_.createElement(D0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _1(e){let{routeContext:t,match:n,children:r}=e,i=_.useContext(Mu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(En.Provider,{value:t},r)}function E1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=l.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||he(!1),l=l.slice(0,Math.min(l.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<l.length;h++){let f=l[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:g,errors:y}=n,x=f.route.loader&&g[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||x){u=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((h,f,g)=>{let y,x=!1,v=null,S=null;n&&(y=a&&f.route.id?a[f.route.id]:void 0,v=f.route.errorElement||k1,u&&(c<0&&g===0?(L1("route-fallback",!1),x=!0,S=null):c===g&&(x=!0,S=f.route.hydrateFallbackElement||null)));let p=t.concat(l.slice(0,g+1)),d=()=>{let m;return y?m=v:x?m=S:f.route.Component?m=_.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=h,_.createElement(_1,{match:f,routeContext:{outlet:h,matches:p,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?_.createElement(C1,{location:n.location,revalidation:n.revalidation,component:v,error:y,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var A0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(A0||{}),Do=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Do||{});function O1(e){let t=_.useContext(Mu);return t||he(!1),t}function b1(e){let t=_.useContext(v1);return t||he(!1),t}function P1(e){let t=_.useContext(En);return t||he(!1),t}function B0(e){let t=P1(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function T1(){var e;let t=_.useContext(D0),n=b1(Do.UseRouteError),r=B0(Do.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function z1(){let{router:e}=O1(A0.UseNavigateStable),t=B0(Do.UseNavigateStable),n=_.useRef(!1);return F0(()=>{n.current=!0}),_.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,hi({fromRouteId:t},o)))},[e,t])}const cd={};function L1(e,t,n){!t&&!cd[e]&&(cd[e]=!0)}function Ne(e){he(!1)}function I1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Wt.Pop,navigator:o,static:l=!1,future:a}=e;jl()&&he(!1);let u=t.replace(/^\/*/,"/"),c=_.useMemo(()=>({basename:u,navigator:o,static:l,future:hi({v7_relativeSplatPath:!1},a)}),[u,a,o,l]);typeof r=="string"&&(r=jr(r));let{pathname:h="/",search:f="",hash:g="",state:y=null,key:x="default"}=r,v=_.useMemo(()=>{let S=M0(h,u);return S==null?null:{location:{pathname:S,search:f,hash:g,state:y,key:x},navigationType:i}},[u,h,f,g,y,x,i]);return v==null?null:_.createElement(wl.Provider,{value:c},_.createElement(Sl.Provider,{children:n,value:v}))}function R1(e){let{children:t,location:n}=e;return w1(ws(t),n)}new Promise(()=>{});function ws(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,i)=>{if(!_.isValidElement(r))return;let o=[...t,i];if(r.type===_.Fragment){n.push.apply(n,ws(r.props.children,o));return}r.type!==Ne&&he(!1),!r.props.index||!r.props.children||he(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=ws(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const N1="6";try{window.__reactRouterVersion=N1}catch{}const M1="startTransition",dd=Im[M1];function $1(e){let{basename:t,children:n,future:r,window:i}=e,o=_.useRef();o.current==null&&(o.current=Uv({window:i,v5Compat:!0}));let l=o.current,[a,u]=_.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},h=_.useCallback(f=>{c&&dd?dd(()=>u(f)):u(f)},[u,c]);return _.useLayoutEffect(()=>l.listen(h),[l,h]),_.createElement(I1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}var fd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(fd||(fd={}));var pd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(pd||(pd={}));const D1="/assets/image4-49UFiRL9.svg",F1="/assets/image2-D3-QMNJW.svg",A1="/assets/image3-Dw7jqlw9.svg",B1="data:image/svg+xml,%3csvg%20width='66'%20height='66'%20viewBox='0%200%2066%2066'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='33'%20cy='33'%20r='30.5'%20transform='rotate(-180%2033%2033)'%20stroke='white'%20stroke-width='5'/%3e%3cpath%20d='M39.375%2022.2219V42.7039C39.3749%2043.0664%2039.2404%2043.4208%2038.9886%2043.7222C38.7368%2044.0237%2038.3789%2044.2586%2037.9602%2044.3973C37.5416%2044.536%2037.0809%2044.5723%2036.6364%2044.5016C36.1919%2044.4309%2035.7836%2044.2564%2035.4631%2044.0001L22.6619%2033.7591C22.2323%2033.4153%2021.9909%2032.949%2021.9909%2032.4629C21.9909%2031.9768%2022.2323%2031.5105%2022.6619%2031.1667L35.4631%2020.9257C35.7836%2020.6694%2036.1919%2020.4949%2036.6364%2020.4242C37.0809%2020.3535%2037.5416%2020.3898%2037.9602%2020.5285C38.3789%2020.6672%2038.7368%2020.9021%2038.9886%2021.2036C39.2404%2021.505%2039.3749%2021.8594%2039.375%2022.2219Z'%20fill='white'/%3e%3c/svg%3e",W1="data:image/svg+xml,%3csvg%20width='66'%20height='66'%20viewBox='0%200%2066%2066'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='33'%20cy='33'%20r='30.5'%20stroke='white'%20stroke-width='5'/%3e%3cpath%20d='M26.625%2043.7781V23.2961C26.6251%2022.9336%2026.7596%2022.5792%2027.0114%2022.2778C27.2632%2021.9763%2027.6211%2021.7414%2028.0397%2021.6027C28.4584%2021.464%2028.9191%2021.4277%2029.3636%2021.4984C29.8081%2021.5691%2030.2164%2021.7436%2030.5369%2021.9999L43.3381%2032.2409C43.7677%2032.5847%2044.0091%2033.051%2044.0091%2033.5371C44.0091%2034.0232%2043.7677%2034.4895%2043.3381%2034.8333L30.5369%2045.0743C30.2164%2045.3306%2029.8081%2045.5051%2029.3636%2045.5758C28.9191%2045.6465%2028.4584%2045.6102%2028.0397%2045.4715C27.6211%2045.3328%2027.2632%2045.0979%2027.0114%2044.7964C26.7596%2044.495%2026.6251%2044.1406%2026.625%2043.7781Z'%20fill='white'/%3e%3c/svg%3e";var ve=function(){return ve=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ve.apply(this,arguments)};function ar(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Z="-ms-",Kr="-moz-",q="-webkit-",W0="comm",kl="rule",Du="decl",H1="@import",H0="@keyframes",U1="@layer",U0=Math.abs,Fu=String.fromCharCode,Ss=Object.assign;function V1(e,t){return ge(e,0)^45?(((t<<2^ge(e,0))<<2^ge(e,1))<<2^ge(e,2))<<2^ge(e,3):0}function V0(e){return e.trim()}function wt(e,t){return(e=t.exec(e))?e[0]:e}function B(e,t,n){return e.replace(t,n)}function lo(e,t,n){return e.indexOf(t,n)}function ge(e,t){return e.charCodeAt(t)|0}function sr(e,t,n){return e.slice(t,n)}function ht(e){return e.length}function Q0(e){return e.length}function Fr(e,t){return t.push(e),e}function Q1(e,t){return e.map(t).join("")}function hd(e,t){return e.filter(function(n){return!wt(n,t)})}var Cl=1,ur=1,G0=0,nt=0,ue=0,kr="";function _l(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Cl,column:ur,length:l,return:"",siblings:a}}function Rt(e,t){return Ss(_l("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function bn(e){for(;e.root;)e=Rt(e.root,{children:[e]});Fr(e,e.siblings)}function G1(){return ue}function q1(){return ue=nt>0?ge(kr,--nt):0,ur--,ue===10&&(ur=1,Cl--),ue}function ct(){return ue=nt<G0?ge(kr,nt++):0,ur++,ue===10&&(ur=1,Cl++),ue}function hn(){return ge(kr,nt)}function ao(){return nt}function El(e,t){return sr(kr,e,t)}function js(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function K1(e){return Cl=ur=1,G0=ht(kr=e),nt=0,[]}function Y1(e){return kr="",e}function ua(e){return V0(El(nt-1,ks(e===91?e+2:e===40?e+1:e)))}function X1(e){for(;(ue=hn())&&ue<33;)ct();return js(e)>2||js(ue)>3?"":" "}function Z1(e,t){for(;--t&&ct()&&!(ue<48||ue>102||ue>57&&ue<65||ue>70&&ue<97););return El(e,ao()+(t<6&&hn()==32&&ct()==32))}function ks(e){for(;ct();)switch(ue){case e:return nt;case 34:case 39:e!==34&&e!==39&&ks(ue);break;case 40:e===41&&ks(e);break;case 92:ct();break}return nt}function J1(e,t){for(;ct()&&e+ue!==57;)if(e+ue===84&&hn()===47)break;return"/*"+El(t,nt-1)+"*"+Fu(e===47?e:ct())}function ey(e){for(;!js(hn());)ct();return El(e,nt)}function ty(e){return Y1(so("",null,null,null,[""],e=K1(e),0,[0],e))}function so(e,t,n,r,i,o,l,a,u){for(var c=0,h=0,f=l,g=0,y=0,x=0,v=1,S=1,p=1,d=0,m="",w=i,j=o,k=r,C=m;S;)switch(x=d,d=ct()){case 40:if(x!=108&&ge(C,f-1)==58){lo(C+=B(ua(d),"&","&\f"),"&\f",U0(c?a[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:C+=ua(d);break;case 9:case 10:case 13:case 32:C+=X1(x);break;case 92:C+=Z1(ao()-1,7);continue;case 47:switch(hn()){case 42:case 47:Fr(ny(J1(ct(),ao()),t,n,u),u);break;default:C+="/"}break;case 123*v:a[c++]=ht(C)*p;case 125*v:case 59:case 0:switch(d){case 0:case 125:S=0;case 59+h:p==-1&&(C=B(C,/\f/g,"")),y>0&&ht(C)-f&&Fr(y>32?gd(C+";",r,n,f-1,u):gd(B(C," ","")+";",r,n,f-2,u),u);break;case 59:C+=";";default:if(Fr(k=md(C,t,n,c,h,i,a,m,w=[],j=[],f,o),o),d===123)if(h===0)so(C,t,k,k,w,o,f,a,j);else switch(g===99&&ge(C,3)===110?100:g){case 100:case 108:case 109:case 115:so(e,k,k,r&&Fr(md(e,k,k,0,0,i,a,m,i,w=[],f,j),j),i,j,f,a,r?w:j);break;default:so(C,k,k,k,[""],j,0,a,j)}}c=h=y=0,v=p=1,m=C="",f=l;break;case 58:f=1+ht(C),y=x;default:if(v<1){if(d==123)--v;else if(d==125&&v++==0&&q1()==125)continue}switch(C+=Fu(d),d*v){case 38:p=h>0?1:(C+="\f",-1);break;case 44:a[c++]=(ht(C)-1)*p,p=1;break;case 64:hn()===45&&(C+=ua(ct())),g=hn(),h=f=ht(m=C+=ey(ao())),d++;break;case 45:x===45&&ht(C)==2&&(v=0)}}return o}function md(e,t,n,r,i,o,l,a,u,c,h,f){for(var g=i-1,y=i===0?o:[""],x=Q0(y),v=0,S=0,p=0;v<r;++v)for(var d=0,m=sr(e,g+1,g=U0(S=l[v])),w=e;d<x;++d)(w=V0(S>0?y[d]+" "+m:B(m,/&\f/g,y[d])))&&(u[p++]=w);return _l(e,t,n,i===0?kl:a,u,c,h,f)}function ny(e,t,n,r){return _l(e,t,n,W0,Fu(G1()),sr(e,2,-2),0,r)}function gd(e,t,n,r,i){return _l(e,t,n,Du,sr(e,0,r),sr(e,r+1,-1),r,i)}function q0(e,t,n){switch(V1(e,t)){case 5103:return q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+e+e;case 4789:return Kr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return q+e+Kr+e+Z+e+e;case 5936:switch(ge(e,t+11)){case 114:return q+e+Z+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return q+e+Z+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return q+e+Z+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return q+e+Z+e+e;case 6165:return q+e+Z+"flex-"+e+e;case 5187:return q+e+B(e,/(\w+).+(:[^]+)/,q+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return q+e+Z+"flex-item-"+B(e,/flex-|-self/g,"")+(wt(e,/flex-|baseline/)?"":Z+"grid-row-"+B(e,/flex-|-self/g,""))+e;case 4675:return q+e+Z+"flex-line-pack"+B(e,/align-content|flex-|-self/g,"")+e;case 5548:return q+e+Z+B(e,"shrink","negative")+e;case 5292:return q+e+Z+B(e,"basis","preferred-size")+e;case 6060:return q+"box-"+B(e,"-grow","")+q+e+Z+B(e,"grow","positive")+e;case 4554:return q+B(e,/([^-])(transform)/g,"$1"+q+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,q+"$1"),/(image-set)/,q+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,q+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+q+e+e;case 4200:if(!wt(e,/flex-|baseline/))return Z+"grid-column-align"+sr(e,t)+e;break;case 2592:case 3360:return Z+B(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,wt(r.props,/grid-\w+-end/)})?~lo(e+(n=n[t].value),"span",0)?e:Z+B(e,"-start","")+e+Z+"grid-row-span:"+(~lo(n,"span",0)?wt(n,/\d+/):+wt(n,/\d+/)-+wt(e,/\d+/))+";":Z+B(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return wt(r.props,/grid-\w+-start/)})?e:Z+B(B(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ht(e)-1-t>6)switch(ge(e,t+1)){case 109:if(ge(e,t+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+q+"$2-$3$1"+Kr+(ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~lo(e,"stretch",0)?q0(B(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return B(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,u,c){return Z+i+":"+o+c+(l?Z+i+"-span:"+(a?u:+u-+o)+c:"")+e});case 4949:if(ge(e,t+6)===121)return B(e,":",":"+q)+e;break;case 6444:switch(ge(e,ge(e,14)===45?18:11)){case 120:return B(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+q+(ge(e,14)===45?"inline-":"")+"box$3$1"+q+"$2$3$1"+Z+"$2box$3")+e;case 100:return B(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(e,"scroll-","scroll-snap-")+e}return e}function Fo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ry(e,t,n,r){switch(e.type){case U1:if(e.children.length)break;case H1:case Du:return e.return=e.return||e.value;case W0:return"";case H0:return e.return=e.value+"{"+Fo(e.children,r)+"}";case kl:if(!ht(e.value=e.props.join(",")))return""}return ht(n=Fo(e.children,r))?e.return=e.value+"{"+n+"}":""}function iy(e){var t=Q0(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function oy(e){return function(t){t.root||(t=t.return)&&e(t)}}function ly(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Du:e.return=q0(e.value,e.length,n);return;case H0:return Fo([Rt(e,{value:B(e.value,"@","@"+q)})],r);case kl:if(e.length)return Q1(n=e.props,function(i){switch(wt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":bn(Rt(e,{props:[B(i,/:(read-\w+)/,":"+Kr+"$1")]})),bn(Rt(e,{props:[i]})),Ss(e,{props:hd(n,r)});break;case"::placeholder":bn(Rt(e,{props:[B(i,/:(plac\w+)/,":"+q+"input-$1")]})),bn(Rt(e,{props:[B(i,/:(plac\w+)/,":"+Kr+"$1")]})),bn(Rt(e,{props:[B(i,/:(plac\w+)/,Z+"input-$1")]})),bn(Rt(e,{props:[i]})),Ss(e,{props:hd(n,r)});break}return""})}}var ay={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},He={},cr=typeof process<"u"&&He!==void 0&&(He.REACT_APP_SC_ATTR||He.SC_ATTR)||"data-styled",K0="active",Y0="data-styled-version",Ol="6.1.13",Au=`/*!sc*/
`,Ao=typeof window<"u"&&"HTMLElement"in window,sy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&He!==void 0&&He.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&He.REACT_APP_SC_DISABLE_SPEEDY!==""?He.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&He.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&He!==void 0&&He.SC_DISABLE_SPEEDY!==void 0&&He.SC_DISABLE_SPEEDY!==""&&He.SC_DISABLE_SPEEDY!=="false"&&He.SC_DISABLE_SPEEDY),uy={},bl=Object.freeze([]),dr=Object.freeze({});function X0(e,t,n){return n===void 0&&(n=dr),e.theme!==n.theme&&e.theme||t||n.theme}var Z0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),cy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,dy=/(^-|-$)/g;function vd(e){return e.replace(cy,"-").replace(dy,"")}var fy=/(a)(d)/gi,Hi=52,yd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Cs(e){var t,n="";for(t=Math.abs(e);t>Hi;t=t/Hi|0)n=yd(t%Hi)+n;return(yd(t%Hi)+n).replace(fy,"$1-$2")}var ca,J0=5381,Un=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},eh=function(e){return Un(J0,e)};function Bu(e){return Cs(eh(e)>>>0)}function py(e){return e.displayName||e.name||"Component"}function da(e){return typeof e=="string"&&!0}var th=typeof Symbol=="function"&&Symbol.for,nh=th?Symbol.for("react.memo"):60115,hy=th?Symbol.for("react.forward_ref"):60112,my={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},rh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vy=((ca={})[hy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ca[nh]=rh,ca);function xd(e){return("type"in(t=e)&&t.type.$$typeof)===nh?rh:"$$typeof"in e?vy[e.$$typeof]:my;var t}var yy=Object.defineProperty,xy=Object.getOwnPropertyNames,wd=Object.getOwnPropertySymbols,wy=Object.getOwnPropertyDescriptor,Sy=Object.getPrototypeOf,Sd=Object.prototype;function ih(e,t,n){if(typeof t!="string"){if(Sd){var r=Sy(t);r&&r!==Sd&&ih(e,r,n)}var i=xy(t);wd&&(i=i.concat(wd(t)));for(var o=xd(e),l=xd(t),a=0;a<i.length;++a){var u=i[a];if(!(u in gy||n&&n[u]||l&&u in l||o&&u in o)){var c=wy(t,u);try{yy(e,u,c)}catch{}}}}return e}function wn(e){return typeof e=="function"}function Wu(e){return typeof e=="object"&&"styledComponentId"in e}function cn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Bo(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function mi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function _s(e,t,n){if(n===void 0&&(n=!1),!n&&!mi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=_s(e[r],t[r]);else if(mi(t))for(var r in t)e[r]=_s(e[r],t[r]);return e}function Hu(e,t){Object.defineProperty(e,"toString",{value:t})}function Sn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var jy=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Sn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),u=(l=0,n.length);l<u;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(Au);return n},e}(),uo=new Map,Wo=new Map,co=1,Ui=function(e){if(uo.has(e))return uo.get(e);for(;Wo.has(co);)co++;var t=co++;return uo.set(e,t),Wo.set(t,e),t},ky=function(e,t){co=t+1,uo.set(e,t),Wo.set(t,e)},Cy="style[".concat(cr,"][").concat(Y0,'="').concat(Ol,'"]'),_y=new RegExp("^".concat(cr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ey=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},Oy=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Au),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var u=a.match(_y);if(u){var c=0|parseInt(u[1],10),h=u[2];c!==0&&(ky(h,c),Ey(e,h,u[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},jd=function(e){for(var t=document.querySelectorAll(Cy),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(cr)!==K0&&(Oy(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function by(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var oh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(cr,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(cr,K0),r.setAttribute(Y0,Ol);var l=by();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},Py=function(){function e(t){this.element=oh(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw Sn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Ty=function(){function e(t){this.element=oh(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),zy=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),kd=Ao,Ly={isServer:!Ao,useCSSOMInjection:!sy},Ho=function(){function e(t,n,r){t===void 0&&(t=dr),n===void 0&&(n={});var i=this;this.options=ve(ve({},Ly),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ao&&kd&&(kd=!1,jd(this)),Hu(this,function(){return function(o){for(var l=o.getTag(),a=l.length,u="",c=function(f){var g=function(p){return Wo.get(p)}(f);if(g===void 0)return"continue";var y=o.names.get(g),x=l.getGroup(f);if(y===void 0||!y.size||x.length===0)return"continue";var v="".concat(cr,".g").concat(f,'[id="').concat(g,'"]'),S="";y!==void 0&&y.forEach(function(p){p.length>0&&(S+="".concat(p,","))}),u+="".concat(x).concat(v,'{content:"').concat(S,'"}').concat(Au)},h=0;h<a;h++)c(h);return u}(i)})}return e.registerId=function(t){return Ui(t)},e.prototype.rehydrate=function(){!this.server&&Ao&&jd(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ve(ve({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new zy(i):r?new Py(i):new Ty(i)}(this.options),new jy(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ui(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ui(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ui(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Iy=/&/g,Ry=/^\s*\/\/.*$/gm;function lh(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=lh(n.children,t)),n})}function Ny(e){var t,n,r,i=e===void 0?dr:e,o=i.options,l=o===void 0?dr:o,a=i.plugins,u=a===void 0?bl:a,c=function(g,y,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):g},h=u.slice();h.push(function(g){g.type===kl&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Iy,n).replace(r,c))}),l.prefix&&h.push(ly),h.push(ry);var f=function(g,y,x,v){y===void 0&&(y=""),x===void 0&&(x=""),v===void 0&&(v="&"),t=v,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var S=g.replace(Ry,""),p=ty(x||y?"".concat(x," ").concat(y," { ").concat(S," }"):S);l.namespace&&(p=lh(p,l.namespace));var d=[];return Fo(p,iy(h.concat(oy(function(m){return d.push(m)})))),d};return f.hash=u.length?u.reduce(function(g,y){return y.name||Sn(15),Un(g,y.name)},J0).toString():"",f}var My=new Ho,Es=Ny(),ah=de.createContext({shouldForwardProp:void 0,styleSheet:My,stylis:Es});ah.Consumer;de.createContext(void 0);function Os(){return _.useContext(ah)}var sh=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Es);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Hu(this,function(){throw Sn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Es),this.name+t.hash},e}(),$y=function(e){return e>="A"&&e<="Z"};function Cd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;$y(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var uh=function(e){return e==null||e===!1||e===""},ch=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!uh(o)&&(Array.isArray(o)&&o.isCss||wn(o)?r.push("".concat(Cd(i),":"),o,";"):mi(o)?r.push.apply(r,ar(ar(["".concat(i," {")],ch(o),!1),["}"],!1)):r.push("".concat(Cd(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in ay||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Xt(e,t,n,r){if(uh(e))return[];if(Wu(e))return[".".concat(e.styledComponentId)];if(wn(e)){if(!wn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Xt(i,t,n,r)}var o;return e instanceof sh?n?(e.inject(n,r),[e.getName(r)]):[e]:mi(e)?ch(e):Array.isArray(e)?Array.prototype.concat.apply(bl,e.map(function(l){return Xt(l,t,n,r)})):[e.toString()]}function dh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(wn(n)&&!Wu(n))return!1}return!0}var Dy=eh(Ol),Fy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&dh(t),this.componentId=n,this.baseHash=Un(Dy,n),this.baseStyle=r,Ho.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=cn(i,this.staticRulesId);else{var o=Bo(Xt(this.rules,t,n,r)),l=Cs(Un(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=cn(i,l),this.staticRulesId=l}else{for(var u=Un(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var f=this.rules[h];if(typeof f=="string")c+=f;else if(f){var g=Bo(Xt(f,t,n,r));u=Un(u,g+h),c+=g}}if(c){var y=Cs(u>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(c,".".concat(y),void 0,this.componentId)),i=cn(i,y)}}return i},e}(),gi=de.createContext(void 0);gi.Consumer;function Ay(e){var t=de.useContext(gi),n=_.useMemo(function(){return function(r,i){if(!r)throw Sn(14);if(wn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Sn(8);return i?ve(ve({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?de.createElement(gi.Provider,{value:n},e.children):null}var fa={};function By(e,t,n){var r=Wu(e),i=e,o=!da(e),l=t.attrs,a=l===void 0?bl:l,u=t.componentId,c=u===void 0?function(w,j){var k=typeof w!="string"?"sc":vd(w);fa[k]=(fa[k]||0)+1;var C="".concat(k,"-").concat(Bu(Ol+k+fa[k]));return j?"".concat(j,"-").concat(C):C}(t.displayName,t.parentComponentId):u,h=t.displayName,f=h===void 0?function(w){return da(w)?"styled.".concat(w):"Styled(".concat(py(w),")")}(e):h,g=t.displayName&&t.componentId?"".concat(vd(t.displayName),"-").concat(t.componentId):t.componentId||c,y=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;x=function(w,j){return v(w,j)&&S(w,j)}}else x=v}var p=new Fy(n,g,r?i.componentStyle:void 0);function d(w,j){return function(k,C,T){var O=k.attrs,E=k.componentStyle,N=k.defaultProps,M=k.foldedComponentIds,$=k.styledComponentId,F=k.target,rt=de.useContext(gi),le=Os(),xe=k.shouldForwardProp||le.shouldForwardProp,L=X0(C,rt,N)||dr,R=function(Ie,We,yt){for(var _r,rn=ve(ve({},We),{className:void 0,theme:yt}),Nl=0;Nl<Ie.length;Nl+=1){var Ci=wn(_r=Ie[Nl])?_r(rn):_r;for(var Lt in Ci)rn[Lt]=Lt==="className"?cn(rn[Lt],Ci[Lt]):Lt==="style"?ve(ve({},rn[Lt]),Ci[Lt]):Ci[Lt]}return We.className&&(rn.className=cn(rn.className,We.className)),rn}(O,C,L),A=R.as||F,V={};for(var G in R)R[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&R.theme===L||(G==="forwardedAs"?V.as=R.forwardedAs:xe&&!xe(G,A)||(V[G]=R[G]));var Oe=function(Ie,We){var yt=Os(),_r=Ie.generateAndInjectStyles(We,yt.styleSheet,yt.stylis);return _r}(E,R),Be=cn(M,$);return Oe&&(Be+=" "+Oe),R.className&&(Be+=" "+R.className),V[da(A)&&!Z0.has(A)?"class":"className"]=Be,V.ref=T,_.createElement(A,V)}(m,w,j)}d.displayName=f;var m=de.forwardRef(d);return m.attrs=y,m.componentStyle=p,m.displayName=f,m.shouldForwardProp=x,m.foldedComponentIds=r?cn(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=g,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(j){for(var k=[],C=1;C<arguments.length;C++)k[C-1]=arguments[C];for(var T=0,O=k;T<O.length;T++)_s(j,O[T],!0);return j}({},i.defaultProps,w):w}}),Hu(m,function(){return".".concat(m.styledComponentId)}),o&&ih(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function _d(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Ed=function(e){return Object.assign(e,{isCss:!0})};function jn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(wn(e)||mi(e))return Ed(Xt(_d(bl,ar([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Xt(r):Ed(Xt(_d(r,t)))}function bs(e,t,n){if(n===void 0&&(n=dr),!t)throw Sn(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,jn.apply(void 0,ar([i],o,!1)))};return r.attrs=function(i){return bs(e,t,ve(ve({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return bs(e,t,ve(ve({},n),i))},r}var fh=function(e){return bs(By,e)},b=fh;Z0.forEach(function(e){b[e]=fh(e)});var Wy=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=dh(t),Ho.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Bo(Xt(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ho.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Hy(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=jn.apply(void 0,ar([e],t,!1)),i="sc-global-".concat(Bu(JSON.stringify(r))),o=new Wy(r,i),l=function(u){var c=Os(),h=de.useContext(gi),f=de.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(f,u,c.styleSheet,h,c.stylis),de.useLayoutEffect(function(){if(!c.styleSheet.server)return a(f,u,c.styleSheet,h,c.stylis),function(){return o.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,h,c.stylis]),null};function a(u,c,h,f,g){if(o.isStatic)o.renderStyles(u,uy,h,g);else{var y=ve(ve({},c),{theme:X0(c,f,l.defaultProps)});o.renderStyles(u,y,h,g)}}return de.memo(l)}function Cr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Bo(jn.apply(void 0,ar([e],t,!1))),i=Bu(r);return new sh(i,r)}const Uy=b.div`
  position: relative;
  width: 100%;
  overflow: hidden; 
  max-height: 100vh;
  display: flex;
  align-items: center;
  margin-bottom: 5%;
  justify-content: center;
  @media (max-width: 500px) {
    justify-content: flex-start;
  }
`,Vy=b.div`
  display: flex;
  width: ${e=>e.count*100}%;  
  transform: translateX(-${e=>e.currentIndex*100}%); 
  transition: transform 0.5s ease-in-out;
`,Qy=b.img`
  flex-shrink: 0;  
  width: 100%;  
  height: 90vh;
  object-fit: cover;
`,Gy=b.div`
  position: absolute;
  bottom: 0;
  width: 70%;
  margin-left: 15%;
  display: flex;
  justify-content: space-around;
  
  @media (max-width: 960px) {
    margin-left: 15%;
    width: 85%;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    max-width: 80%; 
    bottom: 10%;
    margin-left: 0;
    position: absolute;
    justify-content: flex-start;
    gap: 10px;
  }
`,Tn=b.div`
  font-size: 1.5rem;
  white-space: nowrap;
  font-weight: bold;
  color: #000;
`,zn=b.div`
  text-align: center;
  display: ${e=>e.isVisible?"block":"none"}; 
  animation: ${e=>e.isVisible?Od:"none"} 0.4s ease-in-out;
  font-size: 1.1rem;
  color: #222;

  @media (max-width: 500px) {
    display: ${e=>e.isVisible?"block":"none"};
    animation: ${e=>e.isVisible?Od:"none"} 0.4s ease-in-out;
    font-size: 1rem;
  }
  @media (min-width: 501px) {
    &::after {
      content: "→";
      margin-top: 3px;
      font-size: 1.1rem;
      color: #0000ff;
      margin-left: 5px;
    }
    &::before {
      content: " "; 
      display: block; 
      margin-bottom: 10px; 
    }
  }
`,Rr=b.div`
  position: absolute; 
  bottom: 0;
  width: 18%;
  transition: transform 0.4s ease-in-out, z-index 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #f0e5de;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin: 0 10px;
  padding: 20px;
  z-index: ${e=>e.isHovered?"2":"1"}; 
  box-shadow: ${e=>e.isHovered?"0 6px 12px rgba(0, 0, 0, 0.2)":"0 3px 6px rgba(0, 0, 0, 0.08)"};
  transform: ${e=>e.isHovered?"translateY(0px) scale(1.05)":"translateY(0px) scale(1)"};
  background: ${e=>e.isHovered?"#e0d4cc":"#f0e5de"};
  
  &:hover{
    transition: all 0.3s ease;
  }

  &:hover ${Tn} {
    margin: 2%;
  }

  &:hover ${zn} {
    margin: 2%;
  }
  @media (max-width: 500px) {
    flex-direction: row; 
    width: ${e=>e.isHovered?"95%":"40%"}; 
    border-top-left-radius: 0px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    height: 10vh;
    padding: 5%;
    transform: ${e=>e.isHovered?"translateX(0px) scale(1.05)":"translateX(0px) scale(1)"};
    margin-left: 0;
    position: relative;
  }
`,Od=Cr`
  from { opacity: 0; }
  to { opacity: 1; }
`,jt="/assets/Genie1-_KHwDxeg.svg",fr="/assets/Genie2-BwCRixq0.svg",qy=Cr`
  from {
    transform: translateY(0);
    opacity: 1;  
  }
  to {
    transform: translateY(-100px);
    opacity: 0;
  }
`;b.img`
  position: fixed;
  top: 23%;
  max-width: 30%;
  left: 36%;
  z-index: 10000;
  transition: opacity 0.5s ease-out;
  animation: ${e=>e.isDisappearing?jn`${qy} 0.5s forwards`:"none"};
`;const Ky=()=>{const[e,t]=_.useState(null),[n,r]=_.useState(0),[i,o]=_.useState(!1),l=[D1,F1,A1],[a,u]=_.useState(!0),[c,h]=_.useState(!1),[f,g]=_.useState(jt),[y,x]=_.useState(!1),[v,S]=_.useState(!1),[p,d]=_.useState(null),m=zt(),w=O=>{t(O)},j=(O,E)=>{p===O?m(E):d(O)};_.useEffect(()=>{if(p!==null){const O=setTimeout(()=>{d(null)},4e3);return()=>clearTimeout(O)}},[p]);const k=()=>{t(null)};_.useEffect(()=>{const O=setTimeout(()=>{h(!0)},1e3),E=setInterval(()=>{g(M=>M===jt?fr:jt)},600),N=setTimeout(()=>{S(!0),setTimeout(()=>{u(!1)},1e3),clearInterval(E)},3e3);return()=>{clearTimeout(O),clearTimeout(N),clearInterval(E)}},[]);const C=()=>{const E=n===0?l.length-1:n-1;r(E)},T=()=>{const E=n===l.length-1?0:n+1;r(E)};return _.useEffect(()=>{if(window.innerWidth<=500){const O=setInterval(()=>{T()},3e3);return()=>{clearInterval(O)}}},[n]),s.jsx(s.Fragment,{children:s.jsxs(Uy,{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[s.jsx("img",{src:B1,alt:"Previous",onClick:C,onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),style:{cursor:"pointer",position:"absolute",top:"50%",left:"2.5vw",zIndex:1e3,transform:`translateY(-50%) scale(${y?1.1:1})`,opacity:i?.4:0,transition:"opacity 1s ease-in-out, transform 0.3s ease-in-out",transitionDelay:i?"0.1s":"0s",display:window.innerWidth<=500?"none":"block"}}),s.jsx("img",{src:W1,alt:"Next",onClick:T,onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),style:{cursor:"pointer",position:"absolute",top:"50%",right:"2.5vw",zIndex:1e3,transform:`translateY(-50%) scale(${y?1.1:1})`,opacity:i?.4:0,transition:"opacity 1s ease-in-out, transform 0.3s ease-in-out",transitionDelay:i?"0.1s":"0s",display:window.innerWidth<=500?"none":"block"}}),s.jsx(Vy,{currentIndex:n,count:l.length,children:l.map((O,E)=>s.jsx(Qy,{src:O,alt:`Slide ${E}`,style:{borderBottomLeftRadius:"20vw"}},E))}),s.jsxs(Gy,{children:[s.jsx("div",{style:{width:"100%"},children:s.jsxs(Rr,{onClick:()=>j(0,"/concept"),style:{backgroundColor:"#F1F5F9"},isHovered:e===0||p===0,onMouseEnter:()=>w(0),onMouseLeave:k,isClicked:p===0,children:[s.jsx(Tn,{children:"양자 개념"}),s.jsxs(zn,{onClick:O=>m("/concept"),isVisible:e===0,children:["양자란 무엇일까요? 쉽게 알아봅시다!!",s.jsx("p",{})]})]})}),s.jsx("div",{style:{width:"100%"},children:s.jsxs(Rr,{onClick:()=>j(1,"/description"),style:{backgroundColor:"#D0E7FE"},isHovered:e===1||p===1,onMouseEnter:()=>w(1),onMouseLeave:k,isClicked:p===1,children:[s.jsx(Tn,{children:"활용 분야"}),s.jsxs(zn,{onClick:O=>m("/description"),isVisible:e===1,children:["양자 컴퓨터, 양자 암호 통신 등 양자 기술이 활용되고 있는 분야에 대해 알아봅시다.",s.jsx("p",{})]})]})}),s.jsx("div",{style:{width:"100%"},children:s.jsxs(Rr,{onClick:()=>j(2,"/"),style:{backgroundColor:"#A5D2FF"},isHovered:e===2||p===2,onMouseEnter:()=>w(2),onMouseLeave:k,isClicked:p===2,children:[s.jsx(Tn,{children:"최근 동향"}),s.jsxs(zn,{onClick:O=>m("/recent"),isVisible:e===2,children:["양자 기술의 최근 동향에 대해 알아봅시다.",s.jsx("p",{})]})]})}),s.jsx("div",{style:{width:"100%"},children:s.jsxs(Rr,{onClick:()=>j(3,"/"),style:{backgroundColor:"#7EAFE0"},isHovered:e===3||p===3,onMouseEnter:()=>w(3),onMouseLeave:k,isClicked:p===3,children:[s.jsx(Tn,{children:"주요 기업"}),s.jsxs(zn,{onClick:O=>m("/company"),isVisible:e===3,children:["양자 기술의 발전을 이끌고 있는 국내, 해외 주요 기업들을 모아봤어요.",s.jsx("p",{})]})]})}),s.jsx("div",{style:{width:"100%"},children:s.jsxs(Rr,{onClick:()=>j(4,"/quiz"),style:{backgroundColor:"#E2E0FF"},isHovered:e===4||p===4,onMouseEnter:()=>w(4),onMouseLeave:k,isClicked:p===4,children:[s.jsx(Tn,{children:"양자 퀴즈"}),s.jsxs(zn,{onClick:O=>m("/quizmain"),isVisible:e===4,children:["간단한 양자 개념을 확인하는 Quiz Quiz!!",s.jsx("p",{})]})]})})]})]})})};function Yy(){return s.jsx(s.Fragment,{children:s.jsx(Ky,{})})}var ph={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},bd=de.createContext&&de.createContext(ph),Xy=["attr","size","title"];function Zy(e,t){if(e==null)return{};var n=Jy(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Jy(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Uo(){return Uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Uo.apply(this,arguments)}function Pd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Vo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pd(Object(n),!0).forEach(function(r){e2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function e2(e,t,n){return t=t2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t2(e){var t=n2(e,"string");return typeof t=="symbol"?t:t+""}function n2(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function hh(e){return e&&e.map((t,n)=>de.createElement(t.tag,Vo({key:n},t.attr),hh(t.child)))}function Uu(e){return t=>de.createElement(r2,Uo({attr:Vo({},e.attr)},t),hh(e.child))}function r2(e){var t=n=>{var{attr:r,size:i,title:o}=e,l=Zy(e,Xy),a=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),de.createElement("svg",Uo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:u,style:Vo(Vo({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&de.createElement("title",null,o),e.children)};return bd!==void 0?de.createElement(bd.Consumer,null,n=>t(n)):t(ph)}function i2(e){return Uu({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function o2(e){return Uu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function Qo(e){return Uu({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}const l2=b.div`
  font-size: 3.8rem;
  font-weight: bold;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`,a2=b.img`
  max-width: 40%;
  width: 40%;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`,s2=b.div`
  font-size: 3rem;
  cursor: pointer;
`;b(s2)`
  font-size: 3rem;
  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`;const Pn=b.div`
  padding: 0.9vw 0;
  color: #292f36;
  cursor: pointer;
  font-size: 1.5rem;
  font-family: arial;
  font-weight: bold;
  text-align: left;
  padding-left: 1vw;

  &:hover {
    background-color: #ddd;
    padding-left: 1.6vw;
    transition: all 0.5s ease;
  }
  @media (max-width: 500px) {
    font-size: 1.9rem;
    padding: 2%;
    margin-bottom: 1.5%;
    
    &:hover {
      background-color: #ddd;
      padding-left: 4vw;
      transition: all 0.5s ease;
    }
  }
`,u2=b.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9vw 1vw;
  background-color: ${e=>e.isScrolled?"#292f36":"transparent"};
  color: ${e=>e.isScrolled?"#fff":"#aaa"};
  transition: background-color 0.9s ease;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  img{
    max-width: 10rem;
  }
  @media (max-width: 500px) {
    img{
      max-width: 8.5rem;
    }
    padding: 1%;
  }
`,c2=b.div`
  position: fixed;
  top: 1%;
  right: 0;
  background-color: #eee;
  width: 17%;
  padding: 1.5vw;
  padding-right: 2.5vw;
  margin-right: 1.3%;
  border-radius: 0.5vw;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1050;
  h1{
  background: linear-gradient(to top, #D0E7FE 40%, transparent 10%)
  }
  img{
    width: 27%;
  }
  @media (max-width: 1000px) {
    position: fixed;
    top: 1%;
    right: 0;
    background-color: #eee;
    width: 35%;
    padding: 2.3vw;
    padding-right: 2.7vw;
    margin-right: 1.3%;
    img{
      min-width: 30%;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    padding: 5vw;
    margin: 0;
    border-radius: 0;
    h1{
      font-size: 2.3rem;
    }
    img{
      width: 20%;
    }
  }
`,Td=b.div`
  font-size: 3.4rem;
  cursor: pointer;
  @media (max-width: 700px) {
    padding-right: -10px;
    font-size: 2.5rem;
  }
`,zd="/assets/Genie-Bb0VnGpq.svg";function d2(){const[e,t]=_.useState(!1),[n,r]=_.useState(!1),i=zt();_.useEffect(()=>{const l=()=>{window.scrollY>0?t(!0):t(!1)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[]);const o=()=>{r(!n)};return s.jsxs(s.Fragment,{children:[s.jsxs(u2,{isScrolled:e,style:{paddingLeft:"5%",paddingRight:"3%"},children:[s.jsxs("div",{onClick:()=>i("/"),style:{cursor:"pointer",maxWidth:"100%",marginRight:"0px",display:"flex",flexDirection:"row",gap:"10%",alignItems:"center",justifyContent:"space-between"},children:[s.jsx(a2,{src:zd,alt:"Logo"}),s.jsx(l2,{children:"Jenie"})]}),s.jsx("div",{style:{display:"flex",flexDirection:"row",gap:"25px",alignItems:"center",justifyContent:"flex-end"},children:s.jsx(Td,{onClick:o,children:n?s.jsx(Qo,{}):s.jsx(i2,{})})})]}),n&&s.jsxs(c2,{children:[s.jsxs("div",{style:{marginBottom:"4%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[s.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",fontSize:"1.7rem",gap:"5%"},children:[s.jsx("img",{src:zd}),s.jsx("h1",{children:"Menu List"})]}),s.jsx(Td,{onClick:o,style:{fontSize:"3rem",marginTop:"0.5vw"},children:s.jsx(Qo,{})})]}),s.jsx(Pn,{onClick:()=>{i("/concept"),r(!1)},children:"양자 개념"}),s.jsx(Pn,{onClick:()=>{i("/description"),r(!1)},children:"양자 활용"}),s.jsx(Pn,{onClick:()=>{i("/recent"),r(!1)},children:"최근 동향"}),s.jsx(Pn,{onClick:()=>{i("/company"),r(!1)},children:"주요 기업"}),s.jsx(Pn,{onClick:()=>{i("/quizmain"),r(!1)},children:"양자 퀴즈"}),s.jsx(Pn,{onClick:()=>{i("/character"),r(!1)},children:"캐릭터 소개"})]})]})}const f2=b.footer`
  background: #292F36;
  padding: 3% 0;
  border-radius: 8vw 0 0 0;
  color: #fff;
  font-family: Arial, sans-serif;
  z-index: 1000;
  position: relative; 
  
  @media (min-width: 960px) {
    padding: 4% 0;
    border-radius: 0 15vw 0 0;
  }
`,p2=b.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 85%;
  margin-left: 7.5%;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`,h2=b.div`
  display: flex;
  flex-direction: column;
`,m2=b.div`
  display: flex;
  align-items: center;
  margin-bottom: 5%;

  h1 {
    font-size: 1.5rem;
    color: #fff;
  }
  @media (max-width: 960px) {
    margin-bottom: 0px;
  }
`,g2=b.img`
  max-width: 150px;
  margin-bottom: 5.5%;
  cursor: pointer;
  @media (max-width: 960px) {
    margin-bottom: 3.5%;
  }
`,v2=b.div`
  margin-top: 4%;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    display: block;
    margin-bottom: 5px;
    &:hover {
      text-decoration: underline;
    }
  }
  p {
    color: #ddd;
    text-decoration: none;
    font-size: 1.2rem;
    display: block;
    margin-bottom: 5px;
  }
`,y2=b.div`
  margin-top: 1%;
  margin-right: 7%;
  h2 {
    font-size: 1.4rem;

  }
  @media (max-width: 960px) {
    h2{
      opacity: 0;
    }
  }
`,x2=b.div`
  margin-bottom: 1%;
  text-align: left;
  margin-left: 0px;
  padding: 1%;
  h3{
    align-items: center;
    text-align: left;
    margin: auto 0;
    font-size: 1.2rem;
  }
  @media (max-width: 960px) {
    margin-bottom: 0px;
  }
    
`,Ld=b.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  span {
    font-size: 1.1rem;
    margin-left: 10px;
    margin-right: 20px;
  }
`,Id=b.div`
  background-color: #000;
  border-radius: 100%;
  align-items: center;
  text-align: center;
  p{
    font-size: 2rem;
    text-align: center;
  }
`,Rd=b.div`
  display: flex;
  gap: 4%;
  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`,w2=b.div`
  text-align: center;
  margin-top: 2%;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 3%;

  p {
    font-size: 1rem;
    opacity: 0.8;
  }
`,Nd=b.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5%;
  @media (max-width: 960px) {
      display: none;
  }
`,Md="data:image/svg+xml,%3csvg%20width='43'%20height='43'%20viewBox='0%200%2043%2043'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cellipse%20cx='21'%20cy='22.5'%20rx='18'%20ry='19.5'%20fill='white'/%3e%3cg%20clip-path='url(%23clip0_0_1)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21.1676%201.05875C16.172%201.06134%2011.3402%202.83067%207.53623%206.05038C3.73223%209.27008%201.20408%2013.7302%200.403813%2018.6332C-0.396452%2023.5362%200.583349%2028.5624%203.16804%2032.813C5.75273%2037.0637%209.77375%2040.2616%2014.5121%2041.8349C15.5575%2042.0289%2015.9512%2041.381%2015.9512%2040.8301C15.9512%2040.2792%2015.9303%2038.682%2015.9233%2036.9358C10.0693%2038.2004%208.83233%2034.4655%208.83233%2034.4655C7.87757%2032.0402%206.49769%2031.4027%206.49769%2031.4027C4.58817%2030.1069%206.64057%2030.1311%206.64057%2030.1311C8.75568%2030.2801%209.86725%2032.2896%209.86725%2032.2896C11.7419%2035.4875%2014.7909%2034.5625%2015.9895%2034.022C16.1777%2032.6673%2016.7248%2031.7457%2017.3276%2031.2225C12.6514%2030.6959%207.73819%2028.9011%207.73819%2020.8838C7.7092%2018.8045%208.48519%2016.7938%209.90557%2015.2675C9.68953%2014.7409%208.96822%2012.6135%2010.1111%209.72398C10.1111%209.72398%2011.8778%209.1627%2015.899%2011.8686C19.348%2010.9308%2022.9871%2010.9308%2026.4362%2011.8686C30.4538%209.1627%2032.217%209.72398%2032.217%209.72398C33.3634%2012.6066%2032.6421%2014.7339%2032.4261%2015.2675C33.8509%2016.794%2034.6286%2018.8083%2034.5969%2020.8907C34.5969%2028.9254%2029.6733%2030.6959%2024.9901%2031.2121C25.7427%2031.8635%2026.4153%2033.135%2026.4153%2035.0891C26.4153%2037.8886%2026.3909%2040.1406%2026.3909%2040.8301C26.3909%2041.3879%2026.7707%2042.0393%2027.8369%2041.8349C32.5759%2040.2614%2036.5973%2037.0629%2039.1819%2032.8116C41.7666%2028.5602%2042.7458%2023.5333%2041.9447%2018.6298C41.1435%2013.7263%2038.6141%209.26616%2034.8088%206.04701C31.0036%202.82787%2026.1707%201.0597%2021.1745%201.05875H21.1676Z'%20fill='%23191717'/%3e%3cpath%20d='M8.09314%2031.1012C8.04784%2031.2052%207.88058%2031.2363%207.74469%2031.1636C7.60879%2031.0908%207.50775%2030.9557%207.55653%2030.8483C7.60531%2030.7409%207.76909%2030.7132%207.90498%2030.7859C8.04088%2030.8587%208.14541%2030.9973%208.09314%2031.1012Z'%20fill='%23191717'/%3e%3cpath%20d='M8.9469%2032.0471C8.87474%2032.0832%208.79218%2032.0933%208.71336%2032.0756C8.63454%2032.0579%208.56436%2032.0135%208.51482%2031.9501C8.37892%2031.8045%208.35103%2031.6036%208.45557%2031.5135C8.5601%2031.4234%208.74828%2031.465%208.88418%2031.6105C9.02008%2031.756%209.05143%2031.957%208.9469%2032.0471Z'%20fill='%23191717'/%3e%3cpath%20d='M9.77616%2033.2493C9.64723%2033.3394%209.42769%2033.2493%209.30573%2033.0691C9.27201%2033.0368%209.24519%2032.9981%209.22687%2032.9552C9.20855%2032.9124%209.1991%2032.8663%209.1991%2032.8197C9.1991%2032.7731%209.20855%2032.727%209.22687%2032.6842C9.24519%2032.6413%209.27201%2032.6026%209.30573%2032.5702C9.43466%2032.4836%209.6542%2032.5702%209.77616%2032.7469C9.89812%2032.9236%209.9016%2033.1592%209.77616%2033.2493V33.2493Z'%20fill='%23191717'/%3e%3cpath%20d='M10.9017%2034.4135C10.7867%2034.5417%2010.5533%2034.507%2010.3616%2034.3338C10.17%2034.1606%2010.1247%2033.925%2010.2396%2033.8002C10.3546%2033.6755%2010.5881%2033.7101%2010.7867%2033.8799C10.9853%2034.0497%2011.0237%2034.2887%2010.9017%2034.4135V34.4135Z'%20fill='%23191717'/%3e%3cpath%20d='M12.4801%2035.0925C12.4279%2035.2554%2012.1909%2035.3281%2011.954%2035.2588C11.717%2035.1895%2011.5602%2034.9955%2011.6055%2034.8292C11.6508%2034.6629%2011.8912%2034.5867%2012.1317%2034.6629C12.3721%2034.7391%2012.5254%2034.9228%2012.4801%2035.0925Z'%20fill='%23191717'/%3e%3cpath%20d='M14.2017%2035.2103C14.2017%2035.3801%2014.0066%2035.5256%2013.7557%2035.5291C13.5048%2035.5326%2013.2992%2035.394%2013.2992%2035.2242C13.2992%2035.0544%2013.4943%2034.9089%2013.7452%2034.9054C13.9961%2034.902%2014.2017%2035.0371%2014.2017%2035.2103Z'%20fill='%23191717'/%3e%3cpath%20d='M15.8043%2034.9436C15.8357%2035.1134%2015.6615%2035.2901%2015.4106%2035.3316C15.1597%2035.3732%2014.9402%2035.2727%2014.9088%2035.1064C14.8774%2034.9401%2015.0586%2034.76%2015.3026%2034.7149C15.5465%2034.6699%2015.773%2034.7738%2015.8043%2034.9436Z'%20fill='%23191717'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_0_1'%3e%3crect%20width='42.35'%20height='42.35'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",$d="data:image/svg+xml,%3csvg%20width='43'%20height='43'%20viewBox='0%200%2043%2043'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='21.175'%20cy='21.175'%20r='21.175'%20fill='white'/%3e%3cpath%20d='M9.77273%2030.7548H13.9091V20.7093L8%2016.2775V28.982C8%2029.9615%208.7933%2030.7548%209.77273%2030.7548Z'%20fill='%234285F4'/%3e%3cpath%20d='M28.0909%2030.7548H32.2272C33.2067%2030.7548%2034%2029.9615%2034%2028.982V16.2775L28.0909%2020.7093V30.7548Z'%20fill='%2334A853'/%3e%3cpath%20d='M28.0909%2013.0275V20.7093L34%2016.2775V13.9139C34%2011.7231%2031.4989%2010.4718%2029.7454%2011.7866L28.0909%2013.0275Z'%20fill='%23FBBC04'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.9091%2020.7093V13.0275L21%2018.3457L28.0909%2013.0275V20.7093L21%2026.0275L13.9091%2020.7093Z'%20fill='%23EA4335'/%3e%3cpath%20d='M8%2013.9139V16.2775L13.9091%2020.7093V13.0275L12.2545%2011.7866C10.501%2010.4718%208%2011.7231%208%2013.9139Z'%20fill='%23C5221F'/%3e%3c/svg%3e",S2="/assets/Jininfra-Czzd3TNl.svg",j2=()=>s.jsxs(f2,{children:[s.jsxs(p2,{children:[s.jsxs(h2,{children:[s.jsx(g2,{onClick:()=>window.location.href="https://jininfra.com/",src:S2,alt:"Footer Logo"}),s.jsx(m2,{children:s.jsx("h1",{children:"주식회사 진인프라"})}),s.jsxs(v2,{children:[s.jsxs(Nd,{style:{marginBottom:"2%"},children:[s.jsx("p",{children:"Email"}),s.jsx("a",{href:"mailto:jininfra@jininfra.com",children:"jininfra@jininfra.com"})]}),s.jsxs(Nd,{children:[s.jsx("p",{children:"Call"}),s.jsx("a",{href:"tel:02-330-3900",children:"02-330-3900"})]}),s.jsx("h3",{style:{marginTop:"3%"},children:"서울센터 | 서울시 송파구 가락로16길3-20 진인프라빌딩"})]})]}),s.jsxs(y2,{children:[s.jsx("h2",{children:"Contact Us"}),s.jsxs(x2,{children:[s.jsx("hr",{style:{borderColor:"rgba(255, 255, 255, 0.2)"}}),s.jsx("h3",{style:{marginTop:"6%",marginBottom:"6%"},children:"Frontend Developer"})]}),s.jsxs(Ld,{children:[s.jsx(Id,{children:s.jsx("p",{children:"👤"})}),s.jsx("span",{children:"YeEun Shin"}),s.jsxs(Rd,{children:[s.jsx("a",{href:"https://github.com/yengeun",children:s.jsx("img",{src:Md,alt:"Github"})}),s.jsx("a",{href:"mailto:7613ez@gmail.com",children:s.jsx("img",{src:$d,alt:"Gmail"})})]})]}),s.jsxs(Ld,{children:[s.jsx(Id,{children:s.jsx("p",{children:"👤"})}),s.jsx("span",{children:"Soeun Yoon"}),s.jsxs(Rd,{children:[s.jsx("a",{href:"https://github.com/Dubabbi",children:s.jsx("img",{src:Md,alt:"Github"})}),s.jsx("a",{href:"mailto:thdms3160@naver.com",children:s.jsx("img",{src:$d,alt:"Gmail"})})]})]})]})]}),s.jsx(w2,{children:s.jsx("p",{style:{textAlign:"left",marginLeft:"7.5%"},children:"© 2024 Jenie. All rights reserved."})})]}),k2="/assets/ball-RuGWw7hf.svg",C2="/assets/ball2-_4ZmxEbj.svg",fo="/assets/cat-B7n9BXOC.svg",mh="/assets/cat2-DFpCBDnE.svg",_2="/assets/quantum2-Z_9Fj8HX.svg",E2="/assets/window-BGzfOsee.svg",O2=b.div`
    margin-top: -5%;
    padding-top: 5%;
    background-color: #eee;
`,gh=b.div`
    height: 320vh;
    max-height: 320vh;
    margin-top: -5%;
    margin-bottom: 20%;
    padding-top: 5%;
    background-color: #eee;

`,vh=b.div`
  max-width: 90%;
  margin-left: 5%;
  margin-top: 10%;
  border-radius: 0.7vw;
  position: relative;
  margin-bottom: 30%;
   p{
    font-size: 2rem;
    margin-top: 2%;
   }
   h1{
    margin-left: 2%;
    font-size: 2.6rem;
      @media(max-width: 900px){
        margin-top: 15%;
        font-size: 1.9rem;
      }
      @media(max-width: 900px){
        margin-top: 18%;
      }
   }
  hr {
    border: 1px solid #333;
    margin-top: 2%;
    margin-bottom: 3%;
    max-width: 97%;
  }
`,b2=b.div`
  padding: 4%;
  max-width: 80%;
  margin-top: 5%;
  margin-bottom: 10%;
  margin-left: 10%;
  border-radius: 0.7vw;
  @media (max-width: 900px) {
      padding: 1%;
      max-width: 95%;
      margin-left: 2.5%;
  }

  h1 {
    text-align: left;
    color: #000;
    font-size: 2.6rem;
    @media (max-width: 900px) {
      font-size: 2.3rem;
    }
  }

  hr {
    border: 1px solid #333;
    margin-top: 2%;
    margin-bottom: 3%;
  }

  .accordion-item {
    border: 1px solid #007bff;
    border-radius: 5px;
    margin-bottom: 10px;
    overflow: hidden;
    background-color: #333;
  }

  .accordion-title {
    padding-top: 2%;
    padding-bottom: 1.5%;
    letter-spacing: 2px;
    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    align-items:center;
    justify-content: space-between;
    cursor: pointer;
    background-color: #333;
    color: #fff;
    font-size: 2rem;
    transition: background-color 0.3s ease;
    border-bottom: 1px solid #007bff;
    @media (max-width: 900px) {
      padding-top: 3.5%;
      padding-bottom: 2.3%;
      padding-left: 4.5%;
      padding-right: 4.5%;
    }
      
  }

  .accordion-title.active {
    background-color: #004085;
  }

  .accordion-title span:last-child {
    font-size: 1rem;
  }

  .accordion-content {
    padding: 3%;
    background-color: #444;
    letter-spacing: 1.4px;
    color: #eee;
    font-size: 1.9rem;
    line-height: 1.8;
    border-top: 1px solid #007bff;
    h1{
      font-size: 2.1rem;
       @media (max-width: 900px) {
          font-size: 1.7rem;
       }
    }
    p{
       @media (max-width: 900px) {
          font-size: 1.4rem;
          margin-bottom: 1%;
       }
    }
    a{
      color: #007bff;
      font-size: 1.7rem;
    }
      @media (max-width: 900px) {
        padding: 5%;
      }
  }
  @media (max-width: 900px) {
    margin-top: 12%;
    padding: 3%;
    font-size: 1.2rem;
    line-height: 1.7;
    a{
      color: #007bff;
      font-size: 1.6rem;
      padding-left: 40%;
    }
  }
  @media (max-width: 700px) {
    margin-top: 16%;
    padding: 4%;
    font-size: 1rem;
  }
`;b.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;b.div`
  background-color: #eee;
  padding: 20px;
  border-radius: 8px;
  width: 85%;
  max-width: 85%;
  height: 90vh;  
  position: relative;
  overflow-y: auto; 
  max-height: 90vh; 

  button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;const Ps=b.button`
padding: 10px 20px;
margin: 20px auto; 
font-size: 1.3rem;
display: block; 
cursor: pointer;
background-color: #007bff; 
color: white;
border: none;
border-radius: 5px;
text-align: center;
&:hover {
  background-color: #0056b3;
}
`,yh=b.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 2%;
    top: 1%;
    width: 100%;
    padding: 20px;

    img {
      max-width: 60px;
      @media (max-width: 768px) {
        display: none;
      } 
    }
    a {
        width: 20%;
        margin-top: 4%;
    }
`,P2=b.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  text-align: center;
  align-items: center;
  margin-top: 3%;
  flex-wrap: wrap;

  & > div:first-child {
    flex: 1 1 40%; /* 첫 번째 하위 요소의 크기를 40%로 설정 */
    text-align: center;
    img{
      max-width: 60%;
       @media (max-width: 700px) {
        max-width: 30%;
       }
    }
  }

  & > div:last-child {
    background-color: #D5E1DD;
    color: #333;
    flex: 1 1 60%; /* 두 번째 하위 요소의 크기를 60%로 설정 */
    text-align: left;
    padding: 3%;
    border-radius: 12px;
    font-size: 1.7rem;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;

    & > div {
      max-width: 100%; 
    }

    & img {
      max-width: 80%; 
    }
  }
`,T2=b.p`
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  white-space: nowrap;
  gap: 2%;
`;b.div`
  margin-left: 1%;
  height: 30vh;
  margin-top: 2%;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  gap: 10%;
  height: 50vh;
  @media (max-width: 700px) {
    height: 25vh; 
  }
  img:nth-child(1) {
    max-width: 20%;
    @media (max-width: 700px) {
      max-width: 30%;
    }
  }

  img:nth-child(2) {
    max-width: 15%;
    @media (max-width: 700px) {
      max-width: 25%;
    }
  }
`;b.div`
  text-align: center;
  height: 48vh;
  @media (max-width: 700px) {
    height: 20vh; 
  }
`;const z2=Cr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,L2=b.img`
  max-width: 33%;
  animation: ${z2} 8s linear infinite;
  @media(max-width: 800px){
    max-width: 60%;
  }
`,Dd=b.button`
  background-color: #007bff;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`,I2=()=>{_.useState(!1);const e=zt(),[t,n]=_.useState([]),r=i=>{t.includes(i)?n(t.filter(o=>o!==i)):n([...t,i])};return s.jsx(O2,{children:s.jsxs(b2,{children:[s.jsx("h1",{children:"양자 개념"}),s.jsx("hr",{}),s.jsxs("div",{className:"accordion-item",children:[s.jsxs("div",{className:`accordion-title ${t.includes(0)?"active":""}`,onClick:()=>r(0),children:[s.jsx("span",{children:"양자란 ?"}),s.jsx("span",{children:t.includes(0)?"▲":"▼"})]}),t.includes(0)&&s.jsxs("div",{className:"accordion-content",children:[s.jsxs("p",{children:["양자란, 더 이상 나눌 수 없는 에너지의 최소량의 단위입니다. 쉽게 말해, ",s.jsx("span",{style:{color:"#B0E3FF"},children:"우리가 에너지를 가장 작은 단위로 쪼개면 그 단위를 양자"}),"라고 부릅니다. 처음으로 양자는 빛에서 발견되었으며, 이 작은 에너지가 어떻게 움직이는지 연구하는 것이 바로 양자 물리학, 양자 역학의 시작입니다."]}),s.jsx("div",{style:{textAlign:"center",height:"40vh"},children:s.jsx(L2,{src:_2})})]})]}),s.jsxs("div",{className:"accordion-item",children:[s.jsxs("div",{className:`accordion-title ${t.includes(1)?"active":""}`,onClick:()=>r(1),children:[s.jsx("span",{children:"양자역학이란 ?"}),s.jsx("span",{children:t.includes(1)?"▲":"▼"})]}),t.includes(1)&&s.jsx("div",{className:"accordion-content",children:s.jsxs("p",{children:["양자역학은 ",s.jsx("span",{style:{color:"#B0E3FF"},children:"원자와 전자 같은 매우 작은 입자들이 작용하는 방식을 설명하는 이론"}),"으로, 양자역학은 양자라는 에너지의 최소 단위를 포함한 아주 작은 입자들(전자, 광자 등)의 행동과 상호작용을 연구하는 물리학의 한 분야입니다. 이는 입자들이 고전 물리학의 법칙을 따르지 않고, 파동과 입자 성질을 동시에 가지며, 불확정성과 중첩 등의 독특한 성질을 나타내는 현상들을 설명합니다."]})})]}),s.jsxs("div",{className:"accordion-item",children:[s.jsxs("div",{className:`accordion-title ${t.includes(2)?"active":""}`,onClick:()=>r(2),children:[s.jsx("span",{children:"불확정성의 원리"}),s.jsx("span",{children:t.includes(2)?"▲":"▼"})]}),t.includes(2)&&s.jsxs("div",{className:"accordion-content",children:[s.jsx("h1",{style:{marginBottom:"1%",color:"#eee"},children:'"입자의 위치나 운동량을 동시에 정확하게 알 수 없다"'}),s.jsx("hr",{style:{border:"none",borderTop:"0.5px solid #ddd"}}),s.jsxs("p",{children:["하이젠베르크라는 물리학자는 실험을 통해, 우리가 아무리 정밀한 장비를 사용하더라도 입자의 위치를 알면 그 입자의 속도를 정확히 알 수 없고, 반대로 속도를 알면 위치를 정확히 알 수 없다는 것을 발견했습니다. 이는 마치",s.jsx("span",{style:{color:"#B0E3FF"},children:"우리가 축구공을 발로 찬 후에 그 공의 정확한 위치와 속도를 동시에 파악하기 어려운 것"}),"과 비슷합니다."]}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",gap:"10%",height:"170px"},children:[s.jsx("img",{src:C2,style:{width:"100px",minWidth:"20%"},alt:"Ball"}),s.jsx("img",{src:k2,style:{width:"100px",minWidth:"15%"},alt:"Ball"})]})]})]}),s.jsxs("div",{className:"accordion-item",children:[s.jsxs("div",{className:`accordion-title ${t.includes(3)?"active":""}`,onClick:()=>r(3),children:[s.jsx("span",{children:"양자 중첩(슈뢰딩거의 고양이)"}),s.jsx("span",{children:t.includes(3)?"▲":"▼"})]}),t.includes(3)&&s.jsxs("div",{className:"accordion-content",children:[s.jsxs("p",{children:["슈뢰딩거의 고양이는 양자역학의 개념을 설명하기 위해 1935년 오스트리아의 물리학자 ",s.jsx("span",{style:{color:"#B0E3FF"},children:"에르빈 슈뢰딩거"}),"가 제안한 사고 실험입니다. 이 실험은 양자역학의 중첩 상태와 그로 인한 철학적 문제를 쉽게 설명하기 위한 것입니다. 특히 양자역학의 코펜하겐 해석을 이해하는 데 중요한 역할을 합니다."]}),s.jsx("div",{style:{textAlign:"center"},children:s.jsx(Dd,{style:{cursor:"pointer"},onClick:i=>e("/cat"),children:" More"})})]})]}),s.jsxs("div",{className:"accordion-item",children:[s.jsxs("div",{className:`accordion-title ${t.includes(4)?"active":""}`,onClick:()=>r(4),children:[s.jsx("span",{children:"파동 함수 붕괴"}),s.jsx("span",{children:t.includes(4)?"▲":"▼"})]}),t.includes(4)&&s.jsxs("div",{className:"accordion-content",children:[s.jsx("h1",{style:{marginBottom:"1%",color:"#eee"},children:"중첩 상태가 관측되었을 때, 그 상태가 하나로 확정되는 과정"}),s.jsx("hr",{style:{border:"none",borderTop:"0.5px solid #ddd"}}),s.jsxs("p",{children:["양자 물체는 여러 상태가 동시에 존재할 수 있는데, 이 상태를 기술하는 것이 ",s.jsx("span",{style:{color:"#B0E3FF"},children:"파동 함수"}),"입니다. 여러 상태가 있더라도 외부에서 관측을 하면 파동 함수가 붕괴하면서 입자는 하나의 확정된 상태로 변화합니다. 파동 함수 붕괴는 양자 중첩 상태에 있는 입자가 관측되었을 때 하나의 확정된 상태로 변하는 과정입니다. 양자 시스템은 여러 상태(중첩 상태)로 존재할 수 있지만, 누군가 그 시스템을 관측하는 순간, 그 시스템은 중첩된 여러 상태 중 하나로 결정됩니다. 이를 파동 함수가 붕괴했다고 표현합니다."]}),s.jsxs(T2,{children:[s.jsx("img",{src:fo,alt:"cat",style:{maxWidth:"40%"}})," ",s.jsx("img",{src:mh,alt:"cat2",style:{minWidth:"19%",width:"177px",marginBottom:"0px"}})]}),s.jsx("p",{style:{marginTop:"5%"},children:"파동 함수 붕괴는 슈뢰딩거의 고양이에서 상자를 열고 난 후에 발생하는 과정으로 이해할 수 있습니다."})]})]}),s.jsxs("div",{className:"accordion-item",children:[s.jsxs("div",{className:`accordion-title ${t.includes(5)?"active":""}`,onClick:()=>r(5),children:[s.jsx("span",{children:"파동-입자 이중성"}),s.jsx("span",{children:t.includes(5)?"▲":"▼"})]}),t.includes(5)&&s.jsxs("div",{className:"accordion-content",children:[s.jsxs("p",{children:["양자역학의 중요한 개념 중 하나는 ",s.jsx("span",{style:{color:"#B0E3FF"},children:"파동-입자 이중성"}),"입니다. 이는 빛과 물질이 파동과 입자 두 가지 성질을 동시에 가진다는 것입니다. 예를 들어, 전자는 파동처럼 간섭 패턴을 만들 수 있지만, 입자처럼 공간에서 특정 위치에 있을 수 있습니다. 파동-입자 이중성은 물질과 빛이 파동과 입자의 성질을 동시에 가진다는 개념입니다."]}),s.jsxs(P2,{children:[s.jsx("div",{style:{flex:"1 1 40%",textAlign:"center"},children:s.jsx("img",{src:E2})}),s.jsx("div",{style:{flex:"1 1 60%",textAlign:"left"},children:s.jsx("p",{children:'빛을 생각해봅시다. 빛은 우리가 매일 접하는 것인데, 고전적인 관점에서 보면 빛은 파동처럼 퍼지며, 렌즈를 통과해 굴절되고 반사되기도 합니다. 예를 들어, 햇빛이 창문을 통해 들어올 때, 그 빛은 창문에서 굴절되고 반사되어 방 안에 퍼집니다. 이때 빛은 파동처럼 행동합니다. 그러나 빛을 어두운 방에서 레이저 포인터로 쏘면 그 레이저 포인터는 특정한 지점에만 빛이 도달하는 것을 볼 수 있습니다. 이때 빛은 마치 총알처럼 특정한 점에 도달하는 "입자"처럼 행동합니다. 이처럼, 빛은 파동처럼 창문에서 굴절되고 퍼질 수 있지만, 특정 조건에서는 입자처럼 특정한 지점에 정확히 도달하는 두 가지 성질을 동시에 가집니다.'})})]})]})]}),s.jsxs("div",{className:"accordion-item",children:[s.jsxs("div",{className:`accordion-title ${t.includes(6)?"active":""}`,onClick:()=>r(6),children:[s.jsx("span",{children:"양자 얽힘"}),s.jsx("span",{children:t.includes(6)?"▲":"▼"})]}),t.includes(6)&&s.jsxs("div",{className:"accordion-content",children:[s.jsxs("p",{children:["양자 얽힘은 ",s.jsx("span",{style:{color:"#B0E3FF"},children:"두 개 이상의 입자가 서로 강하게 연결되어 있는 상태"}),"를 말합니다. 얽힌 입자들은 멀리 떨어져 있어도 얽혀 있어, 서로의 상태에 영향을 미칠 수 있습니다."]}),s.jsx("p",{children:'양자 얽힘에서는 두 입자가 얽힌 상태에 있으면, 한 입자의 상태가 결정되는 순간 다른 입자의 상태도 그에 맞춰 즉각적으로 결정됩니다. 얽힘 상태에서는 물리적으로 떨어져 있어도 정보가 "순간적으로" 전해지는 것처럼 보입니다.'}),s.jsx("div",{style:{textAlign:"center"},children:s.jsx(Dd,{style:{cursor:"pointer"},onClick:i=>e("/coinentanglement"),children:" 예시 보기"})})]})]})]})})};function R2(){return s.jsx(s.Fragment,{children:s.jsx(I2,{})})}const Pl=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 160vh;
  max-height: 160vh;
  margin-top: -5%;
  margin-bottom: -10%;
  background-color: #eee;
`,Vu=b.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
    @media (max-width: 700px) {
    margin-left:3%;
    font-size:20px;
    margin-top:-100%;
    padding:10px;
    }
`,pr=b.button`
  font-size: 18px;
  padding: 10px 20px;
  margin: 10px;
  border: 2px solid #333;
  background-color: white;
  color: #333;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }

  &:focus {
    outline: none;
    background-color: #bbb;
  }
`,Qu=b.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 10px;
  text-align: center;
  width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  p {
    font-size: 18px;
    margin: 0;
  }

  small {
    font-size: 14px;
    display: block;
    margin-top: 10px;
    color: #ddd;
  }
     @media (max-width: 700px) {
      width:60%;
      small{
        display:absolute;
        margin-top:20px;
        }
    }
`;b.div`
  display: grid;
  max-width: 100%;
  min-width: 100%;
  grid-template-columns: repeat(2, 1fr); 
  gap: 2%; 
  margin-top: 10%;
  align-items: center;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr); 
    
  }
  @media (max-width: 700px) {
    grid-template-areas: 
      "textWrapper"  
      "leftHalfCircle";  
  }
`;const Gu=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  padding: 20px;
  
  h2 {
    font-size: 24px;
    color: #333;
  }

  p {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 50px;
    color: #666;
  }
     @media (max-width: 700px) {
      margin-top:-100%;
    }
`,Xn=b.button`
  background-color: #ccc; /* Gray background */
  border: none;
  border-radius: 20px; /* Rounded corners */
  padding: 20px 10%;
  margin: 20px;
  font-size: 16px;
  color: #333; /* Text color */
  cursor: pointer;
  font-family: 'LINESeedKR-Bd';
  
  &:hover {
    background-color: #bbb; /* Darker gray on hover */
  }

`,qu="/assets/sad-BYYytyiN.svg",N2=()=>{const e=[{question:"양자 얽힘 현상은 거리에 상관없이 두 입자가 서로 연결된 상태를 유지하는 것을 의미한다.",correctAnswer:"O",explanation:"양자 얽힘은 두 입자가 멀리 떨어져 있어도 서로의 상태가 연관된 상태를 유지하는 현상입니다. 한 입자의 상태가 변하면 즉시 다른 입자의 상태도 변합니다."},{question:"불확정성의 원리를 최초로 밝힌 사람은 하이젠베르크이다",correctAnswer:"O",explanation:"불확정성의 원리를 최초로 밝힌 사람은 하이젠베르크이다"},{question:"진인프라의 설립일은 2006년 5월 4일이다.",correctAnswer:"O",explanation:"진인프라의 설립일은 2006년 5월 4일이다."},{question:"양자란 화학 원소로서의 특성을 잃지 않는 범위에서 도달할 수 있는 물질의 기본적인 최소입자이다.",correctAnswer:"X",explanation:'해당 설명은 "원자"에 대한 설명으로, 양자란 더 이상 나눌 수 없는 에너지의 최소량의 단위이다'},{question:"양자 컴퓨터는 모든 문제를 일반 컴퓨터보다 빠르게 해결할 수 있다.",correctAnswer:"X",explanation:" 양자 컴퓨터는 특정한 문제, 특히 복잡한 최적화 문제나 암호 해독 등에서 더 뛰어난 성능을 발휘합니다. "},{question:"슈뢰딩거의 고양이 실험에서 고양이는 살았다.",correctAnswer:"X",explanation:'양자역학의 해석에 따르자면 고양이의 생사 여부를 확인해보기 전까지는 고양이의 상태를 살아있으면서도 동시에 죽어있는 상태라고 규정하기 때문에 정답은 "알 수 없다"이다.'}],[t,n]=_.useState(0),[r,i]=_.useState(0),[o,l]=_.useState(!1),[a,u]=_.useState(""),[c,h]=_.useState(""),[f,g]=_.useState(!1),y=v=>{const S=e[t];let p=1500;v===S.correctAnswer?(i(r+1),u("정답입니다!"),h("")):(u("오답입니다!"),h(S.explanation),p=3e3),l(!0),setTimeout(()=>{l(!1),t<e.length-1?n(t+1):g(!0)},p)},x=zt();return s.jsx(Pl,{children:f?s.jsxs(Gu,{children:[s.jsx("h2",{children:"퀴즈 완료!"}),s.jsxs("p",{children:["총 ",s.jsxs("span",{style:{color:"#0015ff"},children:[e.length,"문제"]})," 중 ",s.jsxs("span",{style:{color:"#0015ff"},children:[r,"문제"]})," 맞추셨습니다."]}),r<4?s.jsx("img",{src:qu,alt:"Genie1"}):s.jsx("img",{src:fr,alt:"Genie2"}),s.jsx(Xn,{onClick:()=>x("/quizmain"),children:" 처음으로 "})]}):s.jsxs(s.Fragment,{children:[s.jsx(Vu,{children:e[t].question}),s.jsxs("div",{children:[s.jsx(pr,{onClick:()=>y("O"),children:"O"}),s.jsx(pr,{onClick:()=>y("X"),children:"X"})]}),o&&s.jsxs(Qu,{children:[s.jsx("p",{children:a}),c&&s.jsx("small",{children:c})]})]})})};function M2(){return s.jsx(s.Fragment,{children:s.jsx(N2,{})})}const $2=()=>{const e=zt();return s.jsxs(Pl,{children:[s.jsx(Xn,{onClick:()=>e("/quiz"),children:" 기초 퀴즈"}),s.jsx(Xn,{onClick:()=>e("/medium"),children:" 중급 퀴즈"}),s.jsx(Xn,{onClick:()=>e("/advanced"),children:" 고급 퀴즈"})]})};function D2(){return s.jsx(s.Fragment,{children:s.jsx($2,{})})}const F2=()=>{const e=[{question:"양자 얽힘 상태에 있는 두 입자는 한 입자의 상태가 바뀌면 즉시 다른 입자의 상태도 바뀐다.",correctAnswer:"O",explanation:"양자 얽힘은 두 입자가 서로 먼 거리에 떨어져 있어도 서로 연결된 상태를 유지하는 현상입니다. 한 입자의 상태가 변화하면 즉시 다른 입자의 상태도 바뀝니다. "},{question:"불확정성 원리는 입자의 위치와 속도를 동시에 정확히 측정할 수 있다는 이론이다",correctAnswer:"X",explanation:"불확정성 원리는 입자의 위치와 속도를 동시에 정확히 측정할 수 없다는 원리입니다. 위치를 정확히 알수록 속도에 대한 정보는 불확실해집니다."},{question:"양자 상태는 외부 관측이 이루어지면 즉시 붕괴된다.",correctAnswer:"O",explanation:"양자 상태는 관측에 의해 결정됩니다. 관측이 이루어지면 입자의 상태가 고정되어 양자 중첩 상태는 붕괴됩니다."},{question:"양자 터널링은 입자가 에너지를 충분히 갖고 있을 때만 장벽을 통과할 수 있는 현상이다.",correctAnswer:"X",explanation:"양자 터널링은 입자가 에너지 장벽을 넘을 수 없을 때도 통과하는 현상입니다. 이는 고전적인 물리학으로 설명할 수 없는 양자적 현상입니다."},{question:"양자 얽힘을 이용하면 정보를 빛의 속도보다 빠르게 전달할 수 있다",correctAnswer:"X",explanation:"양자 얽힘은 입자의 상태 변화를 즉시 반영하지만, 이를 통해 실제 정보를 빛의 속도보다 빠르게 전달할 수는 없습니다."},{question:"양자역학에서 파동함수는 입자의 위치를 정확히 예측해준다",correctAnswer:"X",explanation:"파동함수는 입자의 위치를 정확히 예측하는 것이 아니라, 입자가 특정 위치에 있을 확률을 나타냅니다."}],[t,n]=_.useState(0),[r,i]=_.useState(0),[o,l]=_.useState(!1),[a,u]=_.useState(""),[c,h]=_.useState(""),[f,g]=_.useState(!1),y=v=>{const S=e[t];let p=1500;v===S.correctAnswer?(i(r+1),u("정답입니다!"),h("")):(u("오답입니다!"),h(S.explanation),p=3e3),l(!0),setTimeout(()=>{l(!1),t<e.length-1?n(t+1):g(!0)},p)},x=zt();return s.jsx(Pl,{children:f?s.jsxs(Gu,{children:[s.jsx("h2",{children:"퀴즈 완료!"}),s.jsxs("p",{children:["총 ",s.jsxs("span",{style:{color:"#0015ff"},children:[e.length,"문제"]})," 중 ",s.jsxs("span",{style:{color:"#0015ff"},children:[r,"문제"]})," 맞추셨습니다."]}),r<4?s.jsx("img",{src:qu,alt:"Genie1"}):s.jsx("img",{src:fr,alt:"Genie2"}),s.jsx(Xn,{onClick:()=>x("/quizmain"),children:" 처음으로 "})]}):s.jsxs(s.Fragment,{children:[s.jsx(Vu,{children:e[t].question}),s.jsxs("div",{children:[s.jsx(pr,{onClick:()=>y("O"),children:"O"}),s.jsx(pr,{onClick:()=>y("X"),children:"X"})]}),o&&s.jsxs(Qu,{children:[s.jsx("p",{children:a}),c&&s.jsx("small",{children:c})]})]})})};function A2(){return s.jsx(s.Fragment,{children:s.jsx(F2,{})})}const B2=()=>{const e=[{question:"양자 게이트는 고전적인 논리 게이트와 동일한 방식으로 동작한다",correctAnswer:"X",explanation:"양자 게이트는 큐비트의 상태를 변화시키는 양자 연산을 수행하며, 고전적인 논리 게이트와는 다른 방식으로 동작합니다."},{question:"양자 컴퓨터는 오류가 발생할 가능성이 고전 컴퓨터보다 높다.",correctAnswer:"O",explanation:"양자 컴퓨터는 큐비트의 민감한 상태 때문에 오류가 발생할 가능성이 높습니다. 이를 해결하기 위해 오류 정정 기술이 연구되고 있습니다."},{question:"양자 상태의 코히런스(coherence)는 환경과의 상호작용에 의해 손실되며, 이는 양자 디코히런스(decoherence)라고 불린다.",correctAnswer:"O",explanation:"코히런스는 양자 상태가 다른 상태들과 정렬된 특성을 말합니다.환경과의 상호작용에 의해 이 정렬이 깨지면 디코히런스가 발생하여 양자 상태의 정보를 잃게 됩니다."},{question:"양자 컴퓨터의 성능은 큐비트의 개수에 비례하여 선형적으로 증가한다",correctAnswer:"X",explanation:"큐비트가 추가될수록 양자 컴퓨터의 성능은 기하급수적으로 증가하며, 선형적으로 증가하는 것이 아닙니다."},{question:"양자 컴퓨터에서 큐비트의 상태를 측정하는 것은 양자 얽힘을 유지한 채로 이루어질 수 있다.",correctAnswer:"X",explanation:"큐비트의 상태를 측정하면 양자 얽힘 상태가 붕괴됩니다. 얽힌 상태에서는 측정이 이루어지면 더 이상 얽힌 상태를 유지할 수 없습니다. "},{question:"양자 상호작용에서는 양자 터널링 효과를 이용해 에너지 장벽을 넘지 않고도 전자가 이동할 수 있다.",correctAnswer:"O",explanation:' 양자 터널링은 고전 물리학적으로 넘을 수 없는 에너지 장벽을 양자역학적으로 입자가 "통과"할 수 있는 현상입니다. 이 현상은 반도체와 같은 분야에서도 중요한 역할을 합니다.'}],[t,n]=_.useState(0),[r,i]=_.useState(0),[o,l]=_.useState(!1),[a,u]=_.useState(""),[c,h]=_.useState(""),[f,g]=_.useState(!1),y=v=>{const S=e[t];let p=1500;v===S.correctAnswer?(i(r+1),u("정답입니다!"),h("")):(u("오답입니다!"),h(S.explanation),p=3e3),l(!0),setTimeout(()=>{l(!1),t<e.length-1?n(t+1):g(!0)},p)},x=zt();return s.jsx(Pl,{children:f?s.jsxs(Gu,{children:[s.jsx("h2",{children:"퀴즈 완료!"}),s.jsxs("p",{children:["총 ",s.jsxs("span",{style:{color:"#0015ff"},children:[e.length,"문제"]})," 중 ",s.jsxs("span",{style:{color:"#0015ff"},children:[r,"문제"]})," 맞추셨습니다."]}),r<5?s.jsx("img",{src:qu,alt:"Genie1"}):s.jsx("img",{src:fr,alt:"Genie2"}),s.jsx(Xn,{onClick:()=>x("/quizmain"),children:" 처음으로 "})]}):s.jsxs(s.Fragment,{children:[s.jsx(Vu,{children:e[t].question}),s.jsxs("div",{children:[s.jsx(pr,{onClick:()=>y("O"),children:"O"}),s.jsx(pr,{onClick:()=>y("X"),children:"X"})]}),o&&s.jsxs(Qu,{children:[s.jsx("p",{children:a}),c&&s.jsx("small",{children:c})]})]})})};function W2(){return s.jsx(s.Fragment,{children:s.jsx(B2,{})})}var xh={},wh={},Tl={},Sh={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};e.default=t})(Sh);var H2="Expected a function",Fd=NaN,U2="[object Symbol]",V2=/^\s+|\s+$/g,Q2=/^[-+]0x[0-9a-f]+$/i,G2=/^0b[01]+$/i,q2=/^0o[0-7]+$/i,K2=parseInt,Y2=typeof _i=="object"&&_i&&_i.Object===Object&&_i,X2=typeof self=="object"&&self&&self.Object===Object&&self,Z2=Y2||X2||Function("return this")(),J2=Object.prototype,ex=J2.toString,tx=Math.max,nx=Math.min,pa=function(){return Z2.Date.now()};function rx(e,t,n){var r,i,o,l,a,u,c=0,h=!1,f=!1,g=!0;if(typeof e!="function")throw new TypeError(H2);t=Ad(t)||0,Ts(n)&&(h=!!n.leading,f="maxWait"in n,o=f?tx(Ad(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g);function y(k){var C=r,T=i;return r=i=void 0,c=k,l=e.apply(T,C),l}function x(k){return c=k,a=setTimeout(p,t),h?y(k):l}function v(k){var C=k-u,T=k-c,O=t-C;return f?nx(O,o-T):O}function S(k){var C=k-u,T=k-c;return u===void 0||C>=t||C<0||f&&T>=o}function p(){var k=pa();if(S(k))return d(k);a=setTimeout(p,v(k))}function d(k){return a=void 0,g&&r?y(k):(r=i=void 0,l)}function m(){a!==void 0&&clearTimeout(a),c=0,r=u=i=a=void 0}function w(){return a===void 0?l:d(pa())}function j(){var k=pa(),C=S(k);if(r=arguments,i=this,u=k,C){if(a===void 0)return x(u);if(f)return a=setTimeout(p,t),y(u)}return a===void 0&&(a=setTimeout(p,t)),l}return j.cancel=m,j.flush=w,j}function Ts(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ix(e){return!!e&&typeof e=="object"}function ox(e){return typeof e=="symbol"||ix(e)&&ex.call(e)==U2}function Ad(e){if(typeof e=="number")return e;if(ox(e))return Fd;if(Ts(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Ts(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(V2,"");var n=G2.test(e);return n||q2.test(e)?K2(e.slice(2),n?2:8):Q2.test(e)?Fd:+e}var lx=rx,jh={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",l=0;l<arguments.length;l++){var a=arguments[l];a&&(o=i(o,r(a)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var l="";for(var a in o)t.call(o,a)&&o[a]&&(l=i(l,a));return l}function i(o,l){return l?o?o+" "+l:o+l:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(jh);var zl=jh.exports,z={},Ku={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(_);function n(i){return i&&i.__esModule?i:{default:i}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(o){return t.default.createElement("ul",{style:{display:"block"}},o)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(o){return t.default.createElement("button",null,o+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null};e.default=r})(Ku);Object.defineProperty(z,"__esModule",{value:!0});z.checkSpecKeys=z.checkNavigable=z.changeSlide=z.canUseDOM=z.canGoNext=void 0;z.clamp=Ch;z.extractObject=void 0;z.filterSettings=Sx;z.validSettings=z.swipeStart=z.swipeMove=z.swipeEnd=z.slidesOnRight=z.slidesOnLeft=z.slideHandler=z.siblingDirection=z.safePreventDefault=z.lazyStartIndex=z.lazySlidesOnRight=z.lazySlidesOnLeft=z.lazyEndIndex=z.keyHandler=z.initializedState=z.getWidth=z.getTrackLeft=z.getTrackCSS=z.getTrackAnimateCSS=z.getTotalSlides=z.getSwipeDirection=z.getSlideCount=z.getRequiredLazySlides=z.getPreClones=z.getPostClones=z.getOnDemandLazySlides=z.getNavigableIndexes=z.getHeight=void 0;var ax=kh(_),sx=kh(Ku);function kh(e){return e&&e.__esModule?e:{default:e}}function vi(e){"@babel/helpers - typeof";return vi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vi(e)}function Bd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bd(Object(n),!0).forEach(function(r){ux(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ux(e,t,n){return t=cx(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cx(e){var t=dx(e,"string");return vi(t)=="symbol"?t:String(t)}function dx(e,t){if(vi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(vi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ch(e,t,n){return Math.max(t,Math.min(e,n))}var Zn=z.safePreventDefault=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()},_h=z.getOnDemandLazySlides=function(t){for(var n=[],r=Eh(t),i=Oh(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};z.getRequiredLazySlides=function(t){for(var n=[],r=Eh(t),i=Oh(t),o=r;o<i;o++)n.push(o);return n};var Eh=z.lazyStartIndex=function(t){return t.currentSlide-fx(t)},Oh=z.lazyEndIndex=function(t){return t.currentSlide+px(t)},fx=z.lazySlidesOnLeft=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0},px=z.lazySlidesOnRight=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow},zs=z.getWidth=function(t){return t&&t.offsetWidth||0},bh=z.getHeight=function(t){return t&&t.offsetHeight||0},Ph=z.getSwipeDirection=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,l;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),l=Math.round(o*180/Math.PI),l<0&&(l=360-Math.abs(l)),l<=45&&l>=0||l<=360&&l>=315?"left":l>=135&&l<=225?"right":n===!0?l>=35&&l<=135?"up":"down":"vertical"},Th=z.canGoNext=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};z.extractObject=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};z.initializedState=function(t){var n=ax.default.Children.count(t.children),r=t.listRef,i=Math.ceil(zs(r)),o=t.trackRef&&t.trackRef.node,l=Math.ceil(zs(o)),a;if(t.vertical)a=i;else{var u=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(u*=i/100),a=Math.ceil((i-u)/t.slidesToShow)}var c=r&&bh(r.querySelector('[data-index="0"]')),h=c*t.slidesToShow,f=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(f=n-1-t.initialSlide);var g=t.lazyLoadedList||[],y=_h(ee(ee({},t),{},{currentSlide:f,lazyLoadedList:g}));g=g.concat(y);var x={slideCount:n,slideWidth:a,listWidth:i,trackWidth:l,currentSlide:f,slideHeight:c,listHeight:h,lazyLoadedList:g};return t.autoplaying===null&&t.autoplay&&(x.autoplaying="playing"),x};z.slideHandler=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,l=t.index,a=t.slideCount,u=t.lazyLoad,c=t.currentSlide,h=t.centerMode,f=t.slidesToScroll,g=t.slidesToShow,y=t.useCSS,x=t.lazyLoadedList;if(n&&r)return{};var v=l,S,p,d,m={},w={},j=o?l:Ch(l,0,a-1);if(i){if(!o&&(l<0||l>=a))return{};l<0?v=l+a:l>=a&&(v=l-a),u&&x.indexOf(v)<0&&(x=x.concat(v)),m={animating:!0,currentSlide:v,lazyLoadedList:x,targetSlide:v},w={animating:!1,targetSlide:v}}else S=v,v<0?(S=v+a,o?a%f!==0&&(S=a-a%f):S=0):!Th(t)&&v>c?v=S=c:h&&v>=a?(v=o?a:a-1,S=o?0:a-1):v>=a&&(S=v-a,o?a%f!==0&&(S=0):S=a-g),!o&&v+g>=a&&(S=a-g),p=qo(ee(ee({},t),{},{slideIndex:v})),d=qo(ee(ee({},t),{},{slideIndex:S})),o||(p===d&&(v=S),p=d),u&&(x=x.concat(_h(ee(ee({},t),{},{currentSlide:v})))),y?(m={animating:!0,currentSlide:S,trackStyle:zh(ee(ee({},t),{},{left:p})),lazyLoadedList:x,targetSlide:j},w={animating:!1,currentSlide:S,trackStyle:Go(ee(ee({},t),{},{left:d})),swipeLeft:null,targetSlide:j}):m={currentSlide:S,trackStyle:Go(ee(ee({},t),{},{left:d})),lazyLoadedList:x,targetSlide:j};return{state:m,nextState:w}};z.changeSlide=function(t,n){var r,i,o,l,a,u=t.slidesToScroll,c=t.slidesToShow,h=t.slideCount,f=t.currentSlide,g=t.targetSlide,y=t.lazyLoad,x=t.infinite;if(l=h%u!==0,r=l?0:(h-f)%u,n.message==="previous")o=r===0?u:c-r,a=f-o,y&&!x&&(i=f-o,a=i===-1?h-1:i),x||(a=g-u);else if(n.message==="next")o=r===0?u:r,a=f+o,y&&!x&&(a=(f+u)%h+r),x||(a=g+u);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,x){var v=vx(ee(ee({},t),{},{targetSlide:a}));a>n.currentSlide&&v==="left"?a=a-h:a<n.currentSlide&&v==="right"&&(a=a+h)}}else n.message==="index"&&(a=Number(n.index));return a};z.keyHandler=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};z.swipeStart=function(t,n,r){return t.target.tagName==="IMG"&&Zn(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};z.swipeMove=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,l=n.swipeToSlide,a=n.verticalSwiping,u=n.rtl,c=n.currentSlide,h=n.edgeFriction,f=n.edgeDragged,g=n.onEdge,y=n.swiped,x=n.swiping,v=n.slideCount,S=n.slidesToScroll,p=n.infinite,d=n.touchObject,m=n.swipeEvent,w=n.listHeight,j=n.listWidth;if(!r){if(i)return Zn(t);o&&l&&a&&Zn(t);var k,C={},T=qo(n);d.curX=t.touches?t.touches[0].pageX:t.clientX,d.curY=t.touches?t.touches[0].pageY:t.clientY,d.swipeLength=Math.round(Math.sqrt(Math.pow(d.curX-d.startX,2)));var O=Math.round(Math.sqrt(Math.pow(d.curY-d.startY,2)));if(!a&&!x&&O>10)return{scrolling:!0};a&&(d.swipeLength=O);var E=(u?-1:1)*(d.curX>d.startX?1:-1);a&&(E=d.curY>d.startY?1:-1);var N=Math.ceil(v/S),M=Ph(n.touchObject,a),$=d.swipeLength;return p||(c===0&&(M==="right"||M==="down")||c+1>=N&&(M==="left"||M==="up")||!Th(n)&&(M==="left"||M==="up"))&&($=d.swipeLength*h,f===!1&&g&&(g(M),C.edgeDragged=!0)),!y&&m&&(m(M),C.swiped=!0),o?k=T+$*(w/j)*E:u?k=T-$*E:k=T+$*E,a&&(k=T+$*E),C=ee(ee({},C),{},{touchObject:d,swipeLeft:k,trackStyle:Go(ee(ee({},n),{},{left:k}))}),Math.abs(d.curX-d.startX)<Math.abs(d.curY-d.startY)*.8||d.swipeLength>10&&(C.swiping=!0,Zn(t)),C}};z.swipeEnd=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,l=n.listWidth,a=n.touchThreshold,u=n.verticalSwiping,c=n.listHeight,h=n.swipeToSlide,f=n.scrolling,g=n.onSwipe,y=n.targetSlide,x=n.currentSlide,v=n.infinite;if(!r)return i&&Zn(t),{};var S=u?c/a:l/a,p=Ph(o,u),d={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(f||!o.swipeLength)return d;if(o.swipeLength>S){Zn(t),g&&g(p);var m,w,j=v?x:y;switch(p){case"left":case"up":w=j+Hd(n),m=h?Wd(n,w):w,d.currentDirection=0;break;case"right":case"down":w=j-Hd(n),m=h?Wd(n,w):w,d.currentDirection=1;break;default:m=j}d.triggerSlideHandler=m}else{var k=qo(n);d.trackStyle=zh(ee(ee({},n),{},{left:k}))}return d};var hx=z.getNavigableIndexes=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o},Wd=z.checkNavigable=function(t,n){var r=hx(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n},Hd=z.getSlideCount=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(u){if(t.vertical){if(u.offsetTop+bh(u)/2>t.swipeLeft*-1)return r=u,!1}else if(u.offsetLeft-n+zs(u)/2>t.swipeLeft*-1)return r=u,!1;return!0}),!r)return 0;var l=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,a=Math.abs(r.dataset.index-l)||1;return a}else return t.slidesToScroll},Yu=z.checkSpecKeys=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)},Go=z.getTrackCSS=function(t){Yu(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=gx(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var l=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",u=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=ee(ee({},o),{},{WebkitTransform:l,transform:a,msTransform:u})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o},zh=z.getTrackAnimateCSS=function(t){Yu(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Go(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n},qo=z.getTrackLeft=function(t){if(t.unslick)return 0;Yu(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,l=t.slideCount,a=t.slidesToShow,u=t.slidesToScroll,c=t.slideWidth,h=t.listWidth,f=t.variableWidth,g=t.slideHeight,y=t.fade,x=t.vertical,v=0,S,p,d=0;if(y||t.slideCount===1)return 0;var m=0;if(i?(m=-po(t),l%u!==0&&n+u>l&&(m=-(n>l?a-(n-l):l%u)),o&&(m+=parseInt(a/2))):(l%u!==0&&n+u>l&&(m=a-l%u),o&&(m=parseInt(a/2))),v=m*c,d=m*g,x?S=n*g*-1+d:S=n*c*-1+v,f===!0){var w,j=r&&r.node;if(w=n+po(t),p=j&&j.childNodes[w],S=p?p.offsetLeft*-1:0,o===!0){w=i?n+po(t):n,p=j&&j.children[w],S=0;for(var k=0;k<w;k++)S-=j&&j.children[k]&&j.children[k].offsetWidth;S-=parseInt(t.centerPadding),S+=p&&(h-p.offsetWidth)/2}}return S},po=z.getPreClones=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)},mx=z.getPostClones=function(t){return t.unslick||!t.infinite?0:t.slideCount},gx=z.getTotalSlides=function(t){return t.slideCount===1?1:po(t)+t.slideCount+mx(t)},vx=z.siblingDirection=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+yx(t)?"left":"right":t.targetSlide<t.currentSlide-xx(t)?"right":"left"},yx=z.slidesOnRight=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),i&&n%2===0&&(l+=1),l}return i?0:n-1},xx=z.slidesOnLeft=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),!i&&n%2===0&&(l+=1),l}return i?n-1:0};z.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var wx=z.validSettings=Object.keys(sx.default);function Sx(e){return wx.reduce(function(t,n){return e.hasOwnProperty(n)&&(t[n]=e[n]),t},{})}var Ll={};Object.defineProperty(Ll,"__esModule",{value:!0});Ll.Track=void 0;var $t=Lh(_),ha=Lh(zl),ma=z;function Lh(e){return e&&e.__esModule?e:{default:e}}function hr(e){"@babel/helpers - typeof";return hr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hr(e)}function Ls(){return Ls=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ls.apply(this,arguments)}function jx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ud(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Rh(r.key),r)}}function kx(e,t,n){return t&&Ud(e.prototype,t),n&&Ud(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Cx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Is(e,t)}function Is(e,t){return Is=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Is(e,t)}function _x(e){var t=Ih();return function(){var r=Ko(e),i;if(t){var o=Ko(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Ex(this,i)}}function Ex(e,t){if(t&&(hr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Rs(e)}function Rs(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ih(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Ih=function(){return!!e})()}function Ko(e){return Ko=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ko(e)}function Vd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Re(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vd(Object(n),!0).forEach(function(r){Ns(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ns(e,t,n){return t=Rh(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Rh(e){var t=Ox(e,"string");return hr(t)=="symbol"?t:String(t)}function Ox(e,t){if(hr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(hr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ga=function(t){var n,r,i,o,l;t.rtl?l=t.slideCount-1-t.index:l=t.index,i=l<0||l>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(l-t.currentSlide)%t.slideCount===0,l>t.currentSlide-o-1&&l<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=l&&l<t.currentSlide+t.slidesToShow;var a;t.targetSlide<0?a=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?a=t.targetSlide-t.slideCount:a=t.targetSlide;var u=l===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":u}},bx=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,n.zIndex=t.currentSlide===t.index?999:998,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},va=function(t,n){return t.key||n},Px=function(t){var n,r=[],i=[],o=[],l=$t.default.Children.count(t.children),a=(0,ma.lazyStartIndex)(t),u=(0,ma.lazyEndIndex)(t);return $t.default.Children.forEach(t.children,function(c,h){var f,g={message:"children",index:h,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(h)>=0?f=c:f=$t.default.createElement("div",null);var y=bx(Re(Re({},t),{},{index:h})),x=f.props.className||"",v=ga(Re(Re({},t),{},{index:h}));if(r.push($t.default.cloneElement(f,{key:"original"+va(f,h),"data-index":h,className:(0,ha.default)(v,x),tabIndex:"-1","aria-hidden":!v["slick-active"],style:Re(Re({outline:"none"},f.props.style||{}),y),onClick:function(d){f.props&&f.props.onClick&&f.props.onClick(d),t.focusOnSelect&&t.focusOnSelect(g)}})),t.infinite&&t.fade===!1){var S=l-h;S<=(0,ma.getPreClones)(t)&&(n=-S,n>=a&&(f=c),v=ga(Re(Re({},t),{},{index:n})),i.push($t.default.cloneElement(f,{key:"precloned"+va(f,n),"data-index":n,tabIndex:"-1",className:(0,ha.default)(v,x),"aria-hidden":!v["slick-active"],style:Re(Re({},f.props.style||{}),y),onClick:function(d){f.props&&f.props.onClick&&f.props.onClick(d),t.focusOnSelect&&t.focusOnSelect(g)}}))),n=l+h,n<u&&(f=c),v=ga(Re(Re({},t),{},{index:n})),o.push($t.default.cloneElement(f,{key:"postcloned"+va(f,n),"data-index":n,tabIndex:"-1",className:(0,ha.default)(v,x),"aria-hidden":!v["slick-active"],style:Re(Re({},f.props.style||{}),y),onClick:function(d){f.props&&f.props.onClick&&f.props.onClick(d),t.focusOnSelect&&t.focusOnSelect(g)}}))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)};Ll.Track=function(e){Cx(n,e);var t=_x(n);function n(){var r;jx(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),Ns(Rs(r),"node",null),Ns(Rs(r),"handleRef",function(a){r.node=a}),r}return kx(n,[{key:"render",value:function(){var i=Px(this.props),o=this.props,l=o.onMouseEnter,a=o.onMouseOver,u=o.onMouseLeave,c={onMouseEnter:l,onMouseOver:a,onMouseLeave:u};return $t.default.createElement("div",Ls({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},c),i)}}]),n}($t.default.PureComponent);var Il={};function mr(e){"@babel/helpers - typeof";return mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mr(e)}Object.defineProperty(Il,"__esModule",{value:!0});Il.Dots=void 0;var Vi=Nh(_),Tx=Nh(zl),Qd=z;function Nh(e){return e&&e.__esModule?e:{default:e}}function Gd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function zx(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gd(Object(n),!0).forEach(function(r){Lx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Lx(e,t,n){return t=Mh(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ix(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Mh(r.key),r)}}function Rx(e,t,n){return t&&qd(e.prototype,t),n&&qd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Mh(e){var t=Nx(e,"string");return mr(t)=="symbol"?t:String(t)}function Nx(e,t){if(mr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(mr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Mx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ms(e,t)}function Ms(e,t){return Ms=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Ms(e,t)}function $x(e){var t=$h();return function(){var r=Yo(e),i;if(t){var o=Yo(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Dx(this,i)}}function Dx(e,t){if(t&&(mr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Fx(e)}function Fx(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return($h=function(){return!!e})()}function Yo(e){return Yo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Yo(e)}var Ax=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n};Il.Dots=function(e){Mx(n,e);var t=$x(n);function n(){return Ix(this,n),t.apply(this,arguments)}return Rx(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,l=i.onMouseOver,a=i.onMouseLeave,u=i.infinite,c=i.slidesToScroll,h=i.slidesToShow,f=i.slideCount,g=i.currentSlide,y=Ax({slideCount:f,slidesToScroll:c,slidesToShow:h,infinite:u}),x={onMouseEnter:o,onMouseOver:l,onMouseLeave:a},v=[],S=0;S<y;S++){var p=(S+1)*c-1,d=u?p:(0,Qd.clamp)(p,0,f-1),m=d-(c-1),w=u?m:(0,Qd.clamp)(m,0,f-1),j=(0,Tx.default)({"slick-active":u?g>=w&&g<=d:g===w}),k={message:"dots",index:S,slidesToScroll:c,currentSlide:g},C=this.clickHandler.bind(this,k);v=v.concat(Vi.default.createElement("li",{key:S,className:j},Vi.default.cloneElement(this.props.customPaging(S),{onClick:C})))}return Vi.default.cloneElement(this.props.appendDots(v),zx({className:this.props.dotsClass},x))}}]),n}(Vi.default.PureComponent);var gr={};function vr(e){"@babel/helpers - typeof";return vr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vr(e)}Object.defineProperty(gr,"__esModule",{value:!0});gr.PrevArrow=gr.NextArrow=void 0;var Jn=Fh(_),Dh=Fh(zl),Bx=z;function Fh(e){return e&&e.__esModule?e:{default:e}}function Xo(){return Xo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xo.apply(this,arguments)}function Kd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Zo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Kd(Object(n),!0).forEach(function(r){Wx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wx(e,t,n){return t=Wh(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ah(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Yd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Wh(r.key),r)}}function Bh(e,t,n){return t&&Yd(e.prototype,t),n&&Yd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Wh(e){var t=Hx(e,"string");return vr(t)=="symbol"?t:String(t)}function Hx(e,t){if(vr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(vr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Hh(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$s(e,t)}function $s(e,t){return $s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},$s(e,t)}function Uh(e){var t=Vh();return function(){var r=Jo(e),i;if(t){var o=Jo(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Ux(this,i)}}function Ux(e,t){if(t&&(vr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Vx(e)}function Vx(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Vh(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Vh=function(){return!!e})()}function Jo(e){return Jo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Jo(e)}gr.PrevArrow=function(e){Hh(n,e);var t=Uh(n);function n(){return Ah(this,n),t.apply(this,arguments)}return Bh(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var l={key:"0","data-role":"none",className:(0,Dh.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},u;return this.props.prevArrow?u=Jn.default.cloneElement(this.props.prevArrow,Zo(Zo({},l),a)):u=Jn.default.createElement("button",Xo({key:"0",type:"button"},l)," ","Previous"),u}}]),n}(Jn.default.PureComponent);gr.NextArrow=function(e){Hh(n,e);var t=Uh(n);function n(){return Ah(this,n),t.apply(this,arguments)}return Bh(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,Bx.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var l={key:"1","data-role":"none",className:(0,Dh.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},u;return this.props.nextArrow?u=Jn.default.cloneElement(this.props.nextArrow,Zo(Zo({},l),a)):u=Jn.default.createElement("button",Xo({key:"1",type:"button"},l)," ","Next"),u}}]),n}(Jn.default.PureComponent);var Qh=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var l=o[i];n.call(r,l[1],l[0])}},t}()}(),Ds=typeof window<"u"&&typeof document<"u"&&window.document===document,el=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Qx=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(el):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),Gx=2;function qx(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function l(){Qx(o)}function a(){var u=Date.now();if(n){if(u-i<Gx)return;r=!0}else n=!0,r=!1,setTimeout(l,t);i=u}return a}var Kx=20,Yx=["top","right","bottom","left","width","height","size","weight"],Xx=typeof MutationObserver<"u",Zx=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=qx(this.refresh.bind(this),Kx)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Ds||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Xx?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Ds||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=Yx.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Gh=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},yr=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||el},qh=Rl(0,0,0,0);function tl(e){return parseFloat(e)||0}function Xd(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+tl(o)},0)}function Jx(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],l=e["padding-"+o];n[o]=tl(l)}return n}function ew(e){var t=e.getBBox();return Rl(0,0,t.width,t.height)}function tw(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return qh;var r=yr(e).getComputedStyle(e),i=Jx(r),o=i.left+i.right,l=i.top+i.bottom,a=tl(r.width),u=tl(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==t&&(a-=Xd(r,"left","right")+o),Math.round(u+l)!==n&&(u-=Xd(r,"top","bottom")+l)),!rw(e)){var c=Math.round(a+o)-t,h=Math.round(u+l)-n;Math.abs(c)!==1&&(a-=c),Math.abs(h)!==1&&(u-=h)}return Rl(i.left,i.top,a,u)}var nw=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof yr(e).SVGGraphicsElement}:function(e){return e instanceof yr(e).SVGElement&&typeof e.getBBox=="function"}}();function rw(e){return e===yr(e).document.documentElement}function iw(e){return Ds?nw(e)?ew(e):tw(e):qh}function ow(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(o.prototype);return Gh(l,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),l}function Rl(e,t,n,r){return{x:e,y:t,width:n,height:r}}var lw=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Rl(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=iw(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),aw=function(){function e(t,n){var r=ow(n);Gh(this,{target:t,contentRect:r})}return e}(),sw=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new Qh,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof yr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new lw(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof yr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new aw(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Kh=typeof WeakMap<"u"?new WeakMap:new Qh,Yh=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Zx.getInstance(),r=new sw(t,n,this);Kh.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Yh.prototype[e]=function(){var t;return(t=Kh.get(this))[e].apply(t,arguments)}});var uw=function(){return typeof el.ResizeObserver<"u"?el.ResizeObserver:Yh}();const cw=Object.freeze(Object.defineProperty({__proto__:null,default:uw},Symbol.toStringTag,{value:"Module"})),dw=vm(cw);Object.defineProperty(Tl,"__esModule",{value:!0});Tl.InnerSlider=void 0;var be=ki(_),fw=ki(Sh),pw=ki(lx),hw=ki(zl),ne=z,mw=Ll,gw=Il,Zd=gr,vw=ki(dw);function ki(e){return e&&e.__esModule?e:{default:e}}function kn(e){"@babel/helpers - typeof";return kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},kn(e)}function nl(){return nl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nl.apply(this,arguments)}function yw(e,t){if(e==null)return{};var n=xw(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function xw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Jd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jd(Object(n),!0).forEach(function(r){H(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ww(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ef(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Zh(r.key),r)}}function Sw(e,t,n){return t&&ef(e.prototype,t),n&&ef(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function jw(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Fs(e,t)}function Fs(e,t){return Fs=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Fs(e,t)}function kw(e){var t=Xh();return function(){var r=rl(e),i;if(t){var o=rl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Cw(this,i)}}function Cw(e,t){if(t&&(kn(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return W(e)}function W(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Xh(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Xh=function(){return!!e})()}function rl(e){return rl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},rl(e)}function H(e,t,n){return t=Zh(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zh(e){var t=_w(e,"string");return kn(t)=="symbol"?t:String(t)}function _w(e,t){if(kn(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(kn(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}Tl.InnerSlider=function(e){jw(n,e);var t=kw(n);function n(r){var i;ww(this,n),i=t.call(this,r),H(W(i),"listRefHandler",function(l){return i.list=l}),H(W(i),"trackRefHandler",function(l){return i.track=l}),H(W(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var l=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,ne.getHeight)(l)+"px"}}),H(W(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var l=(0,ne.getOnDemandLazySlides)(D(D({},i.props),i.state));l.length>0&&(i.setState(function(u){return{lazyLoadedList:u.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l))}var a=D({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new vw.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(u){u.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,u.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),H(W(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(l){return clearTimeout(l)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),H(W(i),"componentDidUpdate",function(l){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,ne.getOnDemandLazySlides)(D(D({},i.props),i.state));a.length>0&&(i.setState(function(h){return{lazyLoadedList:h.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var u=D(D({listRef:i.list,trackRef:i.track},i.props),i.state),c=i.didPropsChange(l);c&&i.updateState(u,c,function(){i.state.currentSlide>=be.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:be.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),H(W(i),"onWindowResized",function(l){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,pw.default)(function(){return i.resizeWindow(l)},50),i.debouncedResize()}),H(W(i),"resizeWindow",function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(i.track&&i.track.node);if(a){var u=D(D({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(u,l,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),H(W(i),"updateState",function(l,a,u){var c=(0,ne.initializedState)(l);l=D(D(D({},l),c),{},{slideIndex:c.currentSlide});var h=(0,ne.getTrackLeft)(l);l=D(D({},l),{},{left:h});var f=(0,ne.getTrackCSS)(l);(a||be.default.Children.count(i.props.children)!==be.default.Children.count(l.children))&&(c.trackStyle=f),i.setState(c,u)}),H(W(i),"ssrInit",function(){if(i.props.variableWidth){var l=0,a=0,u=[],c=(0,ne.getPreClones)(D(D(D({},i.props),i.state),{},{slideCount:i.props.children.length})),h=(0,ne.getPostClones)(D(D(D({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(C){u.push(C.props.style.width),l+=C.props.style.width});for(var f=0;f<c;f++)a+=u[u.length-1-f],l+=u[u.length-1-f];for(var g=0;g<h;g++)l+=u[g];for(var y=0;y<i.state.currentSlide;y++)a+=u[y];var x={width:l+"px",left:-a+"px"};if(i.props.centerMode){var v="".concat(u[i.state.currentSlide],"px");x.left="calc(".concat(x.left," + (100% - ").concat(v,") / 2 ) ")}return{trackStyle:x}}var S=be.default.Children.count(i.props.children),p=D(D(D({},i.props),i.state),{},{slideCount:S}),d=(0,ne.getPreClones)(p)+(0,ne.getPostClones)(p)+S,m=100/i.props.slidesToShow*d,w=100/d,j=-w*((0,ne.getPreClones)(p)+i.state.currentSlide)*m/100;i.props.centerMode&&(j+=(100-w*m/100)/2);var k={width:m+"%",left:j+"%"};return{slideWidth:w+"%",trackStyle:k}}),H(W(i),"checkImagesLoad",function(){var l=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=l.length,u=0;Array.prototype.forEach.call(l,function(c){var h=function(){return++u&&u>=a&&i.onWindowResized()};if(!c.onclick)c.onclick=function(){return c.parentNode.focus()};else{var f=c.onclick;c.onclick=function(g){f(g),c.parentNode.focus()}}c.onload||(i.props.lazyLoad?c.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(c.onload=h,c.onerror=function(){h(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),H(W(i),"progressiveLazyLoad",function(){for(var l=[],a=D(D({},i.props),i.state),u=i.state.currentSlide;u<i.state.slideCount+(0,ne.getPostClones)(a);u++)if(i.state.lazyLoadedList.indexOf(u)<0){l.push(u);break}for(var c=i.state.currentSlide-1;c>=-(0,ne.getPreClones)(a);c--)if(i.state.lazyLoadedList.indexOf(c)<0){l.push(c);break}l.length>0?(i.setState(function(h){return{lazyLoadedList:h.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),H(W(i),"slideHandler",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=i.props,c=u.asNavFor,h=u.beforeChange,f=u.onLazyLoad,g=u.speed,y=u.afterChange,x=i.state.currentSlide,v=(0,ne.slideHandler)(D(D(D({index:l},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),S=v.state,p=v.nextState;if(S){h&&h(x,S.currentSlide);var d=S.lazyLoadedList.filter(function(m){return i.state.lazyLoadedList.indexOf(m)<0});f&&d.length>0&&f(d),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),y&&y(x),delete i.animationEndCallback),i.setState(S,function(){c&&i.asNavForIndex!==l&&(i.asNavForIndex=l,c.innerSlider.slideHandler(l)),p&&(i.animationEndCallback=setTimeout(function(){var m=p.animating,w=yw(p,["animating"]);i.setState(w,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:m})},10)),y&&y(S.currentSlide),delete i.animationEndCallback})},g))})}}),H(W(i),"changeSlide",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=D(D({},i.props),i.state),c=(0,ne.changeSlide)(u,l);if(!(c!==0&&!c)&&(a===!0?i.slideHandler(c,a):i.slideHandler(c),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var h=i.list.querySelectorAll(".slick-current");h[0]&&h[0].focus()}}),H(W(i),"clickHandler",function(l){i.clickable===!1&&(l.stopPropagation(),l.preventDefault()),i.clickable=!0}),H(W(i),"keyHandler",function(l){var a=(0,ne.keyHandler)(l,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),H(W(i),"selectHandler",function(l){i.changeSlide(l)}),H(W(i),"disableBodyScroll",function(){var l=function(u){u=u||window.event,u.preventDefault&&u.preventDefault(),u.returnValue=!1};window.ontouchmove=l}),H(W(i),"enableBodyScroll",function(){window.ontouchmove=null}),H(W(i),"swipeStart",function(l){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,ne.swipeStart)(l,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),H(W(i),"swipeMove",function(l){var a=(0,ne.swipeMove)(l,D(D(D({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));a&&(a.swiping&&(i.clickable=!1),i.setState(a))}),H(W(i),"swipeEnd",function(l){var a=(0,ne.swipeEnd)(l,D(D(D({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(a){var u=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),u!==void 0&&(i.slideHandler(u),i.props.verticalSwiping&&i.enableBodyScroll())}}),H(W(i),"touchEnd",function(l){i.swipeEnd(l),i.clickable=!0}),H(W(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),H(W(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),H(W(i),"slickGoTo",function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(l=Number(l),isNaN(l))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:l,currentSlide:i.state.currentSlide},a)},0))}),H(W(i),"play",function(){var l;if(i.props.rtl)l=i.state.currentSlide-i.props.slidesToScroll;else if((0,ne.canGoNext)(D(D({},i.props),i.state)))l=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(l)}),H(W(i),"autoPlay",function(l){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(l==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(l==="leave"){if(a==="paused"||a==="focused")return}else if(l==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),H(W(i),"pause",function(l){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;l==="paused"?i.setState({autoplaying:"paused"}):l==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),H(W(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),H(W(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),H(W(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),H(W(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),H(W(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),H(W(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),H(W(i),"render",function(){var l=(0,hw.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=D(D({},i.props),i.state),u=(0,ne.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),c=i.props.pauseOnHover;u=D(D({},u),{},{onMouseEnter:c?i.onTrackOver:null,onMouseLeave:c?i.onTrackLeave:null,onMouseOver:c?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var h;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var f=(0,ne.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),g=i.props.pauseOnDotsHover;f=D(D({},f),{},{clickHandler:i.changeSlide,onMouseEnter:g?i.onDotsLeave:null,onMouseOver:g?i.onDotsOver:null,onMouseLeave:g?i.onDotsLeave:null}),h=be.default.createElement(gw.Dots,f)}var y,x,v=(0,ne.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);v.clickHandler=i.changeSlide,i.props.arrows&&(y=be.default.createElement(Zd.PrevArrow,v),x=be.default.createElement(Zd.NextArrow,v));var S=null;i.props.vertical&&(S={height:i.state.listHeight});var p=null;i.props.vertical===!1?i.props.centerMode===!0&&(p={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(p={padding:i.props.centerPadding+" 0px"});var d=D(D({},S),p),m=i.props.touchMove,w={className:"slick-list",style:d,onClick:i.clickHandler,onMouseDown:m?i.swipeStart:null,onMouseMove:i.state.dragging&&m?i.swipeMove:null,onMouseUp:m?i.swipeEnd:null,onMouseLeave:i.state.dragging&&m?i.swipeEnd:null,onTouchStart:m?i.swipeStart:null,onTouchMove:i.state.dragging&&m?i.swipeMove:null,onTouchEnd:m?i.touchEnd:null,onTouchCancel:i.state.dragging&&m?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},j={className:l,dir:"ltr",style:i.props.style};return i.props.unslick&&(w={className:"slick-list"},j={className:l}),be.default.createElement("div",j,i.props.unslick?"":y,be.default.createElement("div",nl({ref:i.listRefHandler},w),be.default.createElement(mw.Track,nl({ref:i.trackRefHandler},u),i.props.children)),i.props.unslick?"":x,i.props.unslick?"":h)}),i.list=null,i.track=null,i.state=D(D({},fw.default),{},{currentSlide:i.props.initialSlide,targetSlide:i.props.initialSlide?i.props.initialSlide:0,slideCount:be.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=D(D({},i.state),o),i}return Sw(n,[{key:"didPropsChange",value:function(i){for(var o=!1,l=0,a=Object.keys(this.props);l<a.length;l++){var u=a[l];if(!i.hasOwnProperty(u)){o=!0;break}if(!(kn(i[u])==="object"||typeof i[u]=="function"||isNaN(i[u]))&&i[u]!==this.props[u]){o=!0;break}}return o||be.default.Children.count(this.props.children)!==be.default.Children.count(i.children)}}]),n}(be.default.Component);var Ew=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},Ow=Ew,bw=Ow,Pw=function(e){var t=/[height|width]$/;return t.test(e)},tf=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=bw(r),Pw(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},Tw=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=tf(n),r<e.length-1&&(t+=", ")}),t):tf(e)},zw=Tw,ya,nf;function Lw(){if(nf)return ya;nf=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},ya=e,ya}var xa,rf;function Jh(){if(rf)return xa;rf=1;function e(r,i){var o=0,l=r.length,a;for(o;o<l&&(a=i(r[o],o),a!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return xa={isFunction:n,isArray:t,each:e},xa}var wa,of;function Iw(){if(of)return wa;of=1;var e=Lw(),t=Jh().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(l){o.mql=l.currentTarget||l,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,l){if(o.equals(r))return o.destroy(),!i.splice(l,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},wa=n,wa}var Sa,lf;function Rw(){if(lf)return Sa;lf=1;var e=Iw(),t=Jh(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(l,a,u){var c=this.queries,h=u&&this.browserIsIncapable;return c[l]||(c[l]=new e(l,h)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(f){r(f)&&(f={match:f}),c[l].addHandler(f)}),this},unregister:function(l,a){var u=this.queries[l];return u&&(a?u.removeHandler(a):(u.clear(),delete this.queries[l])),this}},Sa=o,Sa}var ja,af;function Nw(){if(af)return ja;af=1;var e=Rw();return ja=new e,ja}(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=l(_),n=Tl,r=l(zw),i=l(Ku),o=z;function l(O){return O&&O.__esModule?O:{default:O}}function a(O){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(E){return typeof E}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},a(O)}function u(){return u=Object.assign?Object.assign.bind():function(O){for(var E=1;E<arguments.length;E++){var N=arguments[E];for(var M in N)Object.prototype.hasOwnProperty.call(N,M)&&(O[M]=N[M])}return O},u.apply(this,arguments)}function c(O,E){var N=Object.keys(O);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(O);E&&(M=M.filter(function($){return Object.getOwnPropertyDescriptor(O,$).enumerable})),N.push.apply(N,M)}return N}function h(O){for(var E=1;E<arguments.length;E++){var N=arguments[E]!=null?arguments[E]:{};E%2?c(Object(N),!0).forEach(function(M){j(O,M,N[M])}):Object.getOwnPropertyDescriptors?Object.defineProperties(O,Object.getOwnPropertyDescriptors(N)):c(Object(N)).forEach(function(M){Object.defineProperty(O,M,Object.getOwnPropertyDescriptor(N,M))})}return O}function f(O,E){if(!(O instanceof E))throw new TypeError("Cannot call a class as a function")}function g(O,E){for(var N=0;N<E.length;N++){var M=E[N];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(O,k(M.key),M)}}function y(O,E,N){return E&&g(O.prototype,E),N&&g(O,N),Object.defineProperty(O,"prototype",{writable:!1}),O}function x(O,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function");O.prototype=Object.create(E&&E.prototype,{constructor:{value:O,writable:!0,configurable:!0}}),Object.defineProperty(O,"prototype",{writable:!1}),E&&v(O,E)}function v(O,E){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(M,$){return M.__proto__=$,M},v(O,E)}function S(O){var E=m();return function(){var M=w(O),$;if(E){var F=w(this).constructor;$=Reflect.construct(M,arguments,F)}else $=M.apply(this,arguments);return p(this,$)}}function p(O,E){if(E&&(a(E)==="object"||typeof E=="function"))return E;if(E!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return d(O)}function d(O){if(O===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return O}function m(){try{var O=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(m=function(){return!!O})()}function w(O){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(N){return N.__proto__||Object.getPrototypeOf(N)},w(O)}function j(O,E,N){return E=k(E),E in O?Object.defineProperty(O,E,{value:N,enumerable:!0,configurable:!0,writable:!0}):O[E]=N,O}function k(O){var E=C(O,"string");return a(E)=="symbol"?E:String(E)}function C(O,E){if(a(O)!="object"||!O)return O;var N=O[Symbol.toPrimitive];if(N!==void 0){var M=N.call(O,E||"default");if(a(M)!="object")return M;throw new TypeError("@@toPrimitive must return a primitive value.")}return(E==="string"?String:Number)(O)}var T=(0,o.canUseDOM)()&&Nw();e.default=function(O){x(N,O);var E=S(N);function N(M){var $;return f(this,N),$=E.call(this,M),j(d($),"innerSliderRefHandler",function(F){return $.innerSlider=F}),j(d($),"slickPrev",function(){return $.innerSlider.slickPrev()}),j(d($),"slickNext",function(){return $.innerSlider.slickNext()}),j(d($),"slickGoTo",function(F){var rt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return $.innerSlider.slickGoTo(F,rt)}),j(d($),"slickPause",function(){return $.innerSlider.pause("paused")}),j(d($),"slickPlay",function(){return $.innerSlider.autoPlay("play")}),$.state={breakpoint:null},$._responsiveMediaHandlers=[],$}return y(N,[{key:"media",value:function($,F){T.register($,F),this._responsiveMediaHandlers.push({query:$,handler:F})}},{key:"componentDidMount",value:function(){var $=this;if(this.props.responsive){var F=this.props.responsive.map(function(le){return le.breakpoint});F.sort(function(le,xe){return le-xe}),F.forEach(function(le,xe){var L;xe===0?L=(0,r.default)({minWidth:0,maxWidth:le}):L=(0,r.default)({minWidth:F[xe-1]+1,maxWidth:le}),(0,o.canUseDOM)()&&$.media(L,function(){$.setState({breakpoint:le})})});var rt=(0,r.default)({minWidth:F.slice(-1)[0]});(0,o.canUseDOM)()&&this.media(rt,function(){$.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function($){T.unregister($.query,$.handler)})}},{key:"render",value:function(){var $=this,F,rt;this.state.breakpoint?(rt=this.props.responsive.filter(function(Ie){return Ie.breakpoint===$.state.breakpoint}),F=rt[0].settings==="unslick"?"unslick":h(h(h({},i.default),this.props),rt[0].settings)):F=h(h({},i.default),this.props),F.centerMode&&(F.slidesToScroll>1,F.slidesToScroll=1),F.fade&&(F.slidesToShow>1,F.slidesToScroll>1,F.slidesToShow=1,F.slidesToScroll=1);var le=t.default.Children.toArray(this.props.children);le=le.filter(function(Ie){return typeof Ie=="string"?!!Ie.trim():!!Ie}),F.variableWidth&&(F.rows>1||F.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),F.variableWidth=!1);for(var xe=[],L=null,R=0;R<le.length;R+=F.rows*F.slidesPerRow){for(var A=[],V=R;V<R+F.rows*F.slidesPerRow;V+=F.slidesPerRow){for(var G=[],Oe=V;Oe<V+F.slidesPerRow&&(F.variableWidth&&le[Oe].props.style&&(L=le[Oe].props.style.width),!(Oe>=le.length));Oe+=1)G.push(t.default.cloneElement(le[Oe],{key:100*R+10*V+Oe,tabIndex:-1,style:{width:"".concat(100/F.slidesPerRow,"%"),display:"inline-block"}}));A.push(t.default.createElement("div",{key:10*R+V},G))}F.variableWidth?xe.push(t.default.createElement("div",{key:R,style:{width:L}},A)):xe.push(t.default.createElement("div",{key:R},A))}if(F==="unslick"){var Be="regular slider "+(this.props.className||"");return t.default.createElement("div",{className:Be},le)}else xe.length<=F.slidesToShow&&!F.infinite&&(F.unslick=!0);return t.default.createElement(n.InnerSlider,u({style:this.props.style,ref:this.innerSliderRefHandler},(0,o.filterSettings)(F)),xe)}}]),N}(t.default.Component)})(wh);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(wh);function n(r){return r&&r.__esModule?r:{default:r}}e.default=t.default})(xh);const Mw=yf(xh),ka="data:image/svg+xml,%3csvg%20width='2453'%20height='1843'%20viewBox='0%200%202453%201843'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='2453'%20height='1843'%20fill='%23959595'/%3e%3c/svg%3e",em=b.div`
  max-width: 100%;
  overflow: hidden;
`,tm=b.header`
  position: relative;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`,nm=b.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; 
`,$w=b.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 9rem;
  right: 3rem;
  z-index: 10000;
  background-color: #f5e0da;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  align-items: center;
  border-radius: 50%;
  @media(max-width: 800px){
    width: 4.5rem;
    height: 4.5rem;
  }
`,rm=b.h1`
  font-size: 2.5rem;
  font-weight: bold;
`,Ca=b.h2`
  font-size: 2.2rem;
  color: #0B212E;
  margin: 20px;
  padding: 0 50px;
  @media(max-width: 780px){
    margin-top: 5%;
  }
`,Dw=b.div`
  width: 100%;
  overflow: visible;
  padding: 0 50px;
  margin-top: 5%;
  margin-bottom: 3%;
  @media(max-width: 780px){
    margin-top: 12%;
  }
`,Fw=b.div`
  padding-left: 5%;
  margin-bottom: 6%;
  .slick-prev, .slick-next {
    z-index: 1;
  }

  .slick-dots li button:before {
    color: #0B212E;
  }

  .slick-dots li.slick-active button:before {
    color: #0B212E;
  }
`,Aw=Cr`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`,_a=b.img`
  height: 25vh;
  width: 97%;
  object-fit: cover;
  margin-bottom: 1%;
`,Bw=b.div`
  display: flex;
  animation: ${Aw} 15s linear infinite;
`,sf=b.div`
  width: 25%;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top:6%;
  padding-top: 120px;
  padding-bottom: 12px;
  position: relative;
  margin-right: 30px; 
  flex-shrink: 0;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  @media(max-width: 780px){
    width: 50%;
  }
  &:hover {
    transform: scale(1.06); 
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
`,uf=b.img`
  width: 80%;
  height: 180px;
  object-fit: cover;
  position: absolute; 
  top: -60px; 
  left: 10%;
  border-radius: 1px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,cf=b.div`
  padding: 20px 0 10px;
  line-height: 1.7;
  .title {
    font-size: 1.6rem;
    font-weight: bold;
    color: #0B212E;
    margin: 10px 0 5px 0;
  }

  .subtitle {
    font-size: 1.2rem;
    color: #000;
    max-width: 93%;
    margin: 0 auto;
  }
`,im=b.div`
  padding: 20px;
  max-width: 90%;
  margin: 0 auto;
  display: flex; 
  flex-direction: column;
`,Ww=b.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`,om=b.div`
  padding: 15px 0;
`,lm=b.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
`,Hw=b.div`
  display: flex;
  justify-content: space-between;
  color: #7d7d7d;
  font-size: 0.9rem;
  margin-bottom: 10px;
`,am=b.p`
  font-size: 1.1rem;
  line-height: 1.5;
  color: #4a4a4a;
`,Uw="/assets/idq-D5yb6MGO.svg",sm="/assets/ibm-CNkfYoK9.svg",um="/assets/dwave-KW-mNalY.svg",As="data:image/svg+xml,%3csvg%20width='1920'%20height='1080'%20viewBox='0%200%201920%201080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_22_433)'%3e%3crect%20width='1080'%20height='1920'%20transform='matrix(0%20-1%201%200%200%201080)'%20fill='%230B212E'/%3e%3cg%20filter='url(%23filter0_f_22_433)'%3e%3ccircle%20cx='1713.5'%20cy='132.5'%20r='449.5'%20transform='rotate(-90%201713.5%20132.5)'%20fill='%23909BA4'/%3e%3c/g%3e%3cg%20filter='url(%23filter1_f_22_433)'%3e%3ccircle%20cx='211.5'%20cy='129.5'%20r='449.5'%20transform='rotate(-90%20211.5%20129.5)'%20fill='%230B212E'/%3e%3c/g%3e%3cg%20filter='url(%23filter2_f_22_433)'%3e%3ccircle%20cx='964.5'%20cy='1006.5'%20r='449.5'%20transform='rotate(-90%20964.5%201006.5)'%20fill='%230B212E'%20fill-opacity='0.2'/%3e%3c/g%3e%3cg%20filter='url(%23filter3_f_22_433)'%3e%3ccircle%20cx='628.5'%20cy='662.5'%20r='449.5'%20transform='rotate(-90%20628.5%20662.5)'%20fill='%230B212E'%20fill-opacity='0.6'/%3e%3c/g%3e%3cg%20filter='url(%23filter4_f_22_433)'%3e%3ccircle%20cx='1301.5'%20cy='398.5'%20r='449.5'%20transform='rotate(-90%201301.5%20398.5)'%20fill='%230B212E'/%3e%3c/g%3e%3ccircle%20cx='1514'%20cy='189'%20r='24'%20fill='%2318A8FB'/%3e%3cg%20filter='url(%23filter5_f_22_433)'%3e%3ccircle%20cx='1538.5'%20cy='870.5'%20r='449.5'%20transform='rotate(-90%201538.5%20870.5)'%20fill='%23394F5C'/%3e%3c/g%3e%3ccircle%20cx='303'%20cy='530'%20r='14'%20fill='%23B2E3FF'/%3e%3ccircle%20cx='1474'%20cy='615'%20r='48'%20fill='%2318A8FB'%20fill-opacity='0.08'/%3e%3ccircle%20cx='1474'%20cy='615'%20r='23.2727'%20fill='%230E2938'%20stroke='%2318A8FB'%20stroke-width='2.90909'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_22_433'%20x='764'%20y='-817'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter1_f_22_433'%20x='-738'%20y='-820'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter2_f_22_433'%20x='15'%20y='57'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter3_f_22_433'%20x='-321'%20y='-287'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter4_f_22_433'%20x='352'%20y='-551'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter5_f_22_433'%20x='589'%20y='-79'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cclipPath%20id='clip0_22_433'%3e%3crect%20width='1080'%20height='1920'%20fill='white'%20transform='matrix(0%20-1%201%200%200%201080)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",cm="/assets/rigetti-B38wHO1L.svg",Bs="/assets/honeywell-DtZFAC9P.svg",Vw="/assets/google-D4sFVtJt.svg",dm="/assets/microsoft-pU5O44ch.svg",fm="/assets/jininfra-BFpSQJ6H.svg",pm="/assets/intel-D1wbAq3Q.svg",hm="/assets/alibaba-Dbpd8-e1.svg",Qw=()=>{const e=zt(),t=[{title:"IBM",subtitle:"IBM Quantum은 클라우드 기반 양자 컴퓨팅 서비스로, 개발자와 연구자들에게 실용적인 양자 컴퓨팅을 제공합니다.",imgSrc:sm,route:"ibm"},{title:"D-Wave",subtitle:"D-Wave는 양자 어닐링(annealing) 기반 시스템을 제공하며, 최적화 문제 해결에 특화된 양자 컴퓨터를 개발합니다.",imgSrc:um,route:"dwave"},{title:"Rigetti Computing",subtitle:"Rigetti Computing은 양자 회로 기반 시스템을 개발하며, 하이브리드 양자-클래식 컴퓨팅을 통해 양자 컴퓨팅을 상용화하려고 합니다.",imgSrc:cm,route:"rigetti"},{title:"Honeywell",subtitle:"Honeywell Quantum Solutions는 이온 트랩 기술을 사용한 양자 컴퓨터를 개발하여 정밀한 양자 계산을 제공합니다.",imgSrc:Bs,route:"honeywell"},{title:"Google",subtitle:"Google Quantum AI는 시너지 효과를 노리며, 인공지능과 양자 컴퓨팅의 결합을 통해 양자 우월성을 목표로 연구 중입니다.",imgSrc:Vw,route:"google"},{title:"Microsoft",subtitle:"Microsoft는 Azure Quantum 플랫폼을 통해 클라우드 기반 양자 컴퓨팅 서비스와 도구를 제공하며, 트래픽슘 기반의 양자 컴퓨터를 개발 중입니다.",imgSrc:dm,route:"microsoft"},{title:"Intel",subtitle:"Intel은 양자 컴퓨팅 하드웨어와 소프트웨어 생태계를 구축하고 있으며, 상용화 가능한 양자 프로세서를 개발 중입니다.",imgSrc:pm,route:"intel"},{title:"Alibaba",subtitle:"Alibaba는 클라우드 기반의 양자 컴퓨팅 서비스를 제공하며, 양자 암호화 및 인공지능 연구에 집중하고 있습니다.",imgSrc:hm,route:"alibaba"},{title:"JinInfra",subtitle:"JinInfra는 양자 네트워크 인프라와 보안 솔루션을 개발하여 양자 통신 기술 상용화에 주력하고 있습니다.",imgSrc:fm,route:"jininfra"},{title:"IDQ",subtitle:"IDQ는 양자 키 분배(QKD) 기반 보안 솔루션을 제공하며, 양자 암호화 및 통신 보안 기술을 연구하고 있습니다.",imgSrc:Uw,route:"idq"}],n=_.useRef(null),r={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,centerMode:!0,centerPadding:"30px"},i=()=>{n.current&&n.current.slickPause()},o=()=>{n.current&&n.current.slickPlay()},l=a=>{e(`/company/${a}`)};return s.jsxs(em,{children:[s.jsxs(tm,{children:[s.jsx(nm,{src:As,alt:"banner image"}),s.jsx(rm,{children:"양자 관련 주요 기업들"}),s.jsx($w,{children:s.jsx(o2,{style:{margin:"0 auto"},size:24})})]}),s.jsx(Ca,{style:{marginTop:"5%"},children:"주요 기업들"}),s.jsx(Dw,{children:s.jsxs(Bw,{onMouseEnter:i,onMouseLeave:o,children:[t.map((a,u)=>s.jsxs(sf,{onClick:()=>l(a.route),children:[s.jsx(uf,{src:a.imgSrc,alt:a.title}),s.jsxs(cf,{children:[s.jsx("p",{className:"title",children:a.title}),s.jsx("p",{className:"subtitle",children:a.subtitle})]})]},u)),t.map((a,u)=>s.jsxs(sf,{children:[s.jsx(uf,{src:a.imgSrc,alt:a.title}),s.jsxs(cf,{children:[s.jsx("p",{className:"title",children:a.title}),s.jsx("p",{className:"subtitle",children:a.subtitle})]})]},u+t.length))]})}),s.jsxs("div",{style:{padding:"50px 0"},children:[s.jsx(Ca,{children:"About"}),s.jsxs(im,{children:[s.jsx(Ww,{src:As,alt:"Nusantara Image"}),s.jsxs(om,{children:[s.jsx(lm,{children:"About Jininfra"}),s.jsxs(Hw,{children:[s.jsx("span",{children:"by Sudarmo"}),s.jsx("span",{children:"28 January"})]}),s.jsx(am,{children:"설명 설명"})]})]})]}),s.jsx(Ca,{children:"사업 소개"}),s.jsx(Fw,{children:s.jsxs(Mw,{ref:n,...r,children:[s.jsxs("div",{children:[s.jsx(_a,{src:ka,alt:"slide 1"}),s.jsx("p",{children:"Story of 3"})]}),s.jsxs("div",{children:[s.jsx(_a,{src:ka,alt:"slide 2"}),s.jsx("p",{children:"Story of 3"})]}),s.jsxs("div",{children:[s.jsx(_a,{src:ka,alt:"slide 3"}),s.jsx("p",{children:"Story of 3"})]})]})})]})};function Gw(){return s.jsx(s.Fragment,{children:s.jsx(Qw,{})})}const qw=b.div`
    margin-top: -5%;
    padding-top: 5%;
    background-color: #eee;
`,Kw=b.div`
  padding: 4%;
  max-width: 80%;
  margin-top: 5%;
  margin-bottom: 10%;
  margin-left: 10%;
  border-radius: 0.7vw;
  p{
    font-size: 2rem;
    margin-top: 2%;
   }

  h1 {
    text-align: left;
    color: #000;
    font-size: 2.8rem;
  }

  hr {
    border: 1px solid #333;
    margin-top: 2%;
    margin-bottom: 3%;
  }

  
  @media (max-width: 900px) {
    margin-top: 12%;
    padding: 2%;
    font-size: 1.2rem;
    line-height: 1.7;
  }

  @media (max-width: 700px) {
    margin-top: 16%;
    padding: 4%;
  
    
     a{
      color: #007bff;
      font-size: 1.7rem;
      padding-left: 40%;
  }
`,Yw=b.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);  /* 4열 그리드 */
  gap: 20px;  /* 항목 간 간격 */
  margin-top: 5%;
  padding: 2%;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);  /* 모바일 화면에서 2열로 줄이기 */
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;  /* 작은 화면에서는 1열로 표시 */
  }
`,Xw=b.div`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);  /* 호버 시 위로 살짝 올라가는 효과 */
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;  /* 썸네일 이미지를 프레임에 맞춰 자르기 */
    border-bottom: 2px solid #007bff;
  }

  h3 {
    padding: 15px;
    font-size: 1.6rem;
    color: #333;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`,Zw=({articles:e})=>s.jsx(Yw,{children:e.map((t,n)=>s.jsx(Xw,{children:s.jsxs("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",children:[s.jsx("img",{src:t.thumbnail,alt:t.title}),s.jsx("h3",{children:t.title.length>30?`${t.title.slice(0,30)}...`:t.title})]})},n))}),Jw=()=>{const e=[{title:"‘양자 컴퓨팅·AI’, 데이터와 물리적 보안 강화 기반으로 부상",thumbnail:"https://cdn.gttkorea.com/news/photo/202409/13652_14786_5153.jpg",url:"https://www.gttkorea.com/news/articleView.html?idxno=13652"},{title:"KISTI, 유럽 최대 광통신학회서 '양자암호키' 서비스 기술 시연",thumbnail:"https://img.etnews.com/news/article/2024/09/30/news-p.v1.20240930.4bb553c3094f4e18a58b421bbec958bd_P1.jpg",url:"https://www.etnews.com/20240930000115"},{title:"KT, 양자내성암호(PQC) 솔루션 상용화 나선다",thumbnail:"https://cdn.news.dealsitetv.com/news/photo/202406/117603_104401_2646.jpg",url:"https://news.dealsitetv.com/news/articleView.html?idxno=117603"},{title:"IBM, NIST 양자내성암호 표준에 적합한 알고리즘 채택돼",thumbnail:"https://www.hellot.net/data/photos/20240833/art_1723860279271_b728b2.jpg",url:"https://www.hellot.net/news/article.html?no=92634"},{title:"[PASCON 2024-영상] 탈레스 “양자 공격 대비 양자 내성 암호(PQC)로 전환 서둘러야”",thumbnail:"https://www.dailysecu.com/news/photo/202409/159539_187007_219.jpg",url:"https://www.dailysecu.com/news/articleView.html?idxno=159539"},{title:"AI·양자·바이오…미래 결정할 3대 혁신기술 “한눈에”",thumbnail:"https://image.zdnet.co.kr/2024/09/30/14a1342f7f0d2a1757b21aec62f7b542.jpg",url:"https://zdnet.co.kr/view/?no=20240930151610"},{title:"[방산보안Q (9)] 심상국 ㈜티엔젠 대표, “유무인 복합체계의 데이터 보호를 위해 데이터 전송부터 저장까지 종단간 암호화가 필요하다”",thumbnail:"https://cdn.news2day.co.kr/data2/content/image/2024/09/30/.cache/512/20240930500040.png",url:"https://www.news2day.co.kr/article/20240930500041"},{title:"양자컴퓨팅 시대 머지않아…“준비 없이는 파국”",thumbnail:"https://www.ddaily.co.kr/photos/2024/09/26/2024092610255047013_l.png",url:"https://www.ddaily.co.kr/page/view/2024092611331007258"}];return s.jsx(qw,{children:s.jsx(Kw,{children:s.jsxs("div",{children:[s.jsx("h1",{children:"양자 기술 관련 뉴스"}),s.jsx(Zw,{articles:e})]})})})};function e3(){return s.jsx(s.Fragment,{children:s.jsx(Jw,{})})}const t3=b.div`

    margin-top: -5%;

    padding-top: 5%;
    background-color: #eee;
`,n3=b.div`
  padding: 4%;
  max-width: 80%;
  margin-top: 5%;
  margin-bottom: 10%;
  margin-left: 10%;
  border-radius: 0.7vw;
  p{
    font-size: 2rem;
    margin-top: 2%;
   }

  h1 {
    text-align: left;
    color: #000;
    font-size: 2.8rem;
  }

  hr {
    border: 1px solid #333;
    margin-top: 2%;
    margin-bottom: 3%;
  }

  .accordion-item {
    border: 1px solid #007bff;
    border-radius: 5px;
    margin-bottom: 10px;
    overflow: hidden;
    background-color: #333;
  }

  .accordion-title {
    padding-top: 2%;
    padding-bottom: 1.5%;
    letter-spacing: 2px;
    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    background-color: #333;
    color: #fff;
    font-size: 2rem;
    transition: background-color 0.3s ease;
    border-bottom: 1px solid #007bff;
  }

  .accordion-title.active {
    background-color: #004085;
  }

  .accordion-title span:last-child {
    font-size: 1rem;
  }

  .accordion-content {
    padding: 3%;
    background-color: #444;
    letter-spacing: 1.4px;
    font-size: 1.9rem;
    color: #eee;
    line-height: 1.8;
    border-top: 1px solid #007bff;
    max-height: 330px;  /* Fixed height for content */
    overflow-y: auto;  /* Scroll if content exceeds height */
      p{
       @media (max-width: 900px) {
          font-size: 1.67rem;
          margin-bottom: 1%;
       }
    }
       h2{
        margin-top:10px;
        font-size:2rem;
        }
      h1{
        color:#eee;
        }
    
    }

  

  /* Flexbox to center the video */
  iframe {
    display: block;
    margin-left: 30%;
  }

  @media (max-width: 900px) {
    margin-top: 12%;
    padding: 2%;
    font-size: 1.2rem;
    line-height: 1.7;
  }

  @media (max-width: 700px) {
    margin-top: 16%;
    padding: 4%;

    iframe{
    width:200px;
    height:200px;
    margin-left: 12%;}
  
    .accordion-content {
      font-size:1.3rem;
      padding:4%;
      }
     a{
      color: #007bff;
      font-size: 1.7rem;
      padding-left: 40%;
  }
`,r3=()=>{const[e,t]=_.useState(null),n=r=>{t(e===r?null:r)};return s.jsx(t3,{children:s.jsxs(n3,{children:[s.jsx("h1",{children:"양자 활용"}),s.jsx("hr",{}),s.jsxs("div",{className:"accordion-item",children:[s.jsxs("div",{className:`accordion-title ${e===0?"active":""}`,onClick:()=>n(0),children:[s.jsx("span",{children:"양자 컴퓨터"}),s.jsx("span",{children:e===0?"▲":"▼"})]}),e===0&&s.jsxs("div",{className:"accordion-content",children:[s.jsxs("p",{children:["기존 디지털컴퓨터와는 달리 양자역학의 중첩 상태를 활용한 ",s.jsx("span",{style:{color:"#B0E3FF"},children:"큐비트(Quantum bit)를 기본 단위로  0과 1 두 상태를 동시에 처리할 수 있다."})]}),s.jsx("br",{})," ",s.jsx("p",{children:"이 같은 특성 때문에 양자컴퓨터는 기존 컴퓨터보다 월등한 계산 속도와 연산 처리 능력을 갖는데, 이는 슈퍼컴퓨터보다 1000배 이상 빠른 연산이 가능해 인공지능(AI), 의료·제약, 암호통신 등 다양한 분야에 활용될 수 있다."}),s.jsx("hr",{}),s.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/gjp9301in0U",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})]}),s.jsxs("div",{className:"accordion-item",children:[s.jsxs("div",{className:`accordion-title ${e===1?"active":""}`,onClick:()=>n(1),children:[s.jsx("span",{children:"양자 암호통신"}),s.jsx("span",{children:e===1?"▲":"▼"})]}),e===1&&s.jsxs("div",{className:"accordion-content",children:[s.jsx("p",{children:"양자암호통신 기술은 통신상의 보안을 자연의 기본원리인 양자역학의 법칙에 의해서 보장하므로 도청이나 감청이 절대적으로 불가능한 차세대 통신보안 기술로서 최근 크게 주목받고 있다."}),s.jsx("br",{}),s.jsxs("p",{children:["즉, 양자암호통신 기술은 ",s.jsx("span",{style:{color:"#B0E3FF"},children:"“양자 복제불가능성”"}),"과 같은 양자물리학의 법칙에 기초해서 송신자와 수신자 사이에 암호 키(일회용 난수표)를 절대적으로 안전하게 실시간으로 분배하는 기술로서 ",s.jsx("span",{style:{color:"#B0E3FF"},children:"“양자 키 분배 기술”"}),"로도 알려져 있다."]}),s.jsx("br",{}),s.jsx("hr",{}),s.jsx("h1",{children:"양자 암호화의 유형"}),s.jsx("h2",{children:s.jsx("span",{style:{boxShadow:"inset 0 -20px 0 rgba(90, 158, 207, 0.5)"},children:"양자 키 분배(QKD)"})}),s.jsxs("p",{children:["양자 키 분배(Quantum Key Distribution; QKD) 시스템은 보안 데이터를  ",s.jsx("span",{style:{color:"#B0E3FF"},children:"직접 암호화하는 것이 아니라, 두 사람이 함께 사용할 비밀 키를 안전하게 공유하는 방법이다."})]}),s.jsx("p",{children:"미세한 자극에도 상태가 변하는 양자의 물리적 특성을 활용해 대칭 암호키를 분배하는 기술이다. 제3자가 해킹할 수 없는 암호화된 비밀키를 만들어 보안이 필요한 송신자와 수신자에게 안전하게 공유한다."}),s.jsx("br",{}),s.jsx("h2",{children:s.jsx("span",{style:{boxShadow:"inset 0 -20px 0 rgba(90, 158, 207, 0.5)"},children:"양자내성암호(PQC)"})}),s.jsxs("p",{children:["양자내성암호(Post Quantum Cryptography; PQC)는 양자컴퓨터로도 풀어내는 데 수십억 년이 걸리는 ",s.jsx("span",{style:{color:"#B0E3FF"},children:"복잡한 수학 알고리즘을 사용하는 암호화 방식이다."})]}),s.jsx("br",{}),s.jsx("hr",{}),s.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/fF1cJ5F7ArI?si=9nIUWin5E9jQ6qRT",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})]}),s.jsxs("div",{className:"accordion-item",children:[s.jsxs("div",{className:`accordion-title ${e===2?"active":""}`,onClick:()=>n(2),children:[s.jsx("span",{children:"양자 센서"}),s.jsx("span",{children:e===2?"▲":"▼"})]}),e===2&&s.jsxs("div",{className:"accordion-content",children:[s.jsxs("p",{children:["양자 센서의 기본 원리는  ",s.jsx("span",{style:{color:"#B0E3FF"},children:"센서와 탐지 대상 물체 사이의 상호작용을 통해 발생하는 미세한 양자 위상변화(Quantum Phase Accumulation)를 측정하는 것이다."}),"이때 중첩, 이중성, 얽힘과 같은 미시 세계의 양자역학적 특성들이 측정 기술로 활용된다."]}),s.jsx("br",{}),s.jsx("p",{children:"양자 센싱은 측정 대상과 센서의 종류에 따라 다양하게 분류되며, 일반적으로 큐비트와 같은 양자 시스템을 사용해 시간, 자기장 등의 물리량을 정밀하게 측정한다."}),s.jsx("hr",{}),s.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/jS6fiujLTzo?si=JBji-IeWWDn1tFDX",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})]})]})})};function i3(){return s.jsx(s.Fragment,{children:s.jsx(r3,{})})}const o3="data:image/svg+xml,%3csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='50'%20cy='50'%20r='50'%20fill='%23F1F5F9'/%3e%3cpath%20d='M48.25%2070C48.25%2070.9665%2049.0335%2071.75%2050%2071.75C50.9665%2071.75%2051.75%2070.9665%2051.75%2070H48.25ZM51.2374%2034.7626C50.554%2034.0791%2049.446%2034.0791%2048.7626%2034.7626L37.6256%2045.8995C36.9422%2046.5829%2036.9422%2047.691%2037.6256%2048.3744C38.309%2049.0578%2039.4171%2049.0578%2040.1005%2048.3744L50%2038.4749L59.8995%2048.3744C60.5829%2049.0578%2061.691%2049.0578%2062.3744%2048.3744C63.0578%2047.691%2063.0578%2046.5829%2062.3744%2045.8995L51.2374%2034.7626ZM51.75%2070L51.75%2036H48.25L48.25%2070H51.75Z'%20fill='%2336597D'/%3e%3c/svg%3e",l3=b.img`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  z-index: 20000;
  @media(max-width: 800px){
    width: 4.5rem;
    height: 4.5rem;
  }
`,a3=()=>{const e=()=>{window.scrollTo({top:0,behavior:"smooth"})};return s.jsx(s.Fragment,{children:s.jsx(l3,{onClick:e,src:o3,alt:"Scroll to top"})})},s3="/assets/message-D6wtI_nO.svg",u3="/assets/flag-DnSs5bf4.svg",c3="data:image/svg+xml,%3csvg%20width='744'%20height='619'%20viewBox='0%200%20744%20619'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_f_0_1)'%3e%3cellipse%20cx='352.58'%20cy='364.807'%20rx='208.58'%20ry='110.044'%20fill='%23FDE598'%20fill-opacity='0.7'/%3e%3c/g%3e%3cg%20filter='url(%23filter1_f_0_1)'%3e%3cellipse%20cx='395.735'%20cy='254.044'%20rx='204.265'%20ry='110.044'%20fill='%236955FF'%20fill-opacity='0.5'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_0_1'%20x='0.151413'%20y='110.915'%20width='704.858'%20height='507.786'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='71.9243'%20result='effect1_foregroundBlur_0_1'/%3e%3c/filter%3e%3cfilter%20id='filter1_f_0_1'%20x='47.6214'%20y='0.151413'%20width='696.227'%20height='507.786'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='71.9243'%20result='effect1_foregroundBlur_0_1'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",d3="/assets/planet-B734ADp0.svg",f3=b.div`
    margin-top: -5%;
    margin-bottom: 10%;
    padding-top: 5%;
    background-color: #eee;

`,p3=b.div`
  max-width: 100%;
  margin-top: 5%;
  border-radius: 0.7vw;
  position: relative;
`,h3=b.div`
  padding: 4%;
  max-width: 80%;
  margin-top: 15%;
  margin-bottom: 20%;
  margin-left: 10%;
  border-radius: 0.7vw;
  h1{
    font-size: 4rem;
    margin-bottom: 2%;
  }
  p{
    font-size: 1.9rem;
    margin-bottom: 1.7%;
  }
  @media (max-width: 800px) {
    font-size: 3.3rem;
      h1{
        font-size: 3.1rem;
        margin-bottom: 2%;
      }
      p{
        font-size: 1.5rem;
        margin-bottom: 1.7%;
      }
  }
  @media (max-width: 700px) {
    grid-area: textWrapper;
  }
`,m3=b.div`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  height: 60vh; 
  background-color: #0B212E;
  border-radius: 1000px 0 0 1000px; 
  right: 0;
  align-items: center;
  top: 0;
  @media (max-width: 800px) {
    min-width: 100%;
    padding: 5%;
  } 
`,g3=b.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 50%; 
  height: auto;
  z-index: 11;
  @media (max-width: 800px) {
    max-width: 60%; 
  }
`,v3=b.div`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  height: 60vh; 
  background-color: #0B212E;
  border-radius:  0 1000px 1000px 0; 
  left: 0;
  align-items: center;
  top: 0;
  @media (max-width: 800px) {
    min-width: 100%;
    padding: 5%;
  } 
`,y3=b.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 50%; 
  height: auto;
  z-index: 11;
  @media (max-width: 800px) {
    max-width: 60%; 
  }
`,x3=b.div`
  position: relative;
  margin-top: 0px;
  margin-left: -10px;
  max-width: 80%;
  height: auto;
  overflow: hidden; 
  justify-content: flex-start;
  text-align: left;
  img{
      max-width: 90%;
      margin: 5%;
      height: auto;
  }
`,w3=b.div`
  position: absolute;
  top: 22%;
  margin-left: 30%;
  width: 70%; 
  display: flex;
  align-items: center;
  justify-content: center; 
  flex-direction: column;
  color: #000;
  font-size: 4rem;
  text-align: left; 
  z-index: 10;
  h1 {
    margin-top: 3%;
    width: 90%; 
    text-align: left;
  }
  @media (max-width: 800px) {
    font-size: 3.3rem;
  }
`;b.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 40%; 
  display: flex;
`;const S3=b.div`
  display: grid;
  max-width: 100%;
  min-width: 100%;
  grid-template-columns: repeat(2, 1fr); 
  gap: 2%; 
  margin-top: 10%;
  align-items: center;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr); 
    
  }
`,j3=b.div`
  display: grid;
  max-width: 100%;
  min-width: 100%;
  grid-template-columns: repeat(2, 1fr); 
  gap: 2%; 
  margin-top: 10%;
  align-items: center;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr); 
    
  }
  @media (max-width: 700px) {
    grid-template-areas: 
      "textWrapper"  
      "leftHalfCircle";  
  }
`,k3=b.img`
  width: 35%;
  margin-left: 35%;
  @media (max-width: 800px) {
    min-width: 45%;
    max-width: 45%;
    margin-left: 20%;
  }
`,C3=Cr`
  from {
    transform: translateY(0);
    opacity: 1;  
  }
  to {
    transform: translateY(-100px);
    opacity: 0;
  }
`,_3=b.img`
  position: fixed;
  top: 30%;
  max-width: 50%;
  left: 33%;
  z-index: 10000;
  transition: opacity 0.5s ease-out;
  animation: ${e=>e.isdisappearing?jn`${C3} 0.5s forwards`:"none"};
  @media (max-width: 800px) {
    position: fixed;
    max-width: 56%;
    left: 22%;
  }
`,E3=b.img`
  position: relative;
  margin-top: 10%;
  min-width: 80%;
  max-width: 80%;
  margin-right: 15%;
`,O3=()=>{const[e,t]=_.useState(jt),[n,r]=_.useState(!1),[i,o]=_.useState(!0),[l,a]=_.useState(!1);_.useEffect(()=>{const g=setTimeout(()=>{a(!0)},1e3),y=setInterval(()=>{t(v=>v===jt?fr:jt)},600),x=setTimeout(()=>{r(!0),setTimeout(()=>{o(!1)},1e3),clearInterval(y)},3e3);return()=>{clearTimeout(g),clearTimeout(x),clearInterval(y)}},[]);const[u,c]=_.useState(jt),[h,f]=_.useState(!1);return _.useEffect(()=>{const g=setTimeout(()=>{f(!0)},1e3),y=setInterval(()=>{c(x=>x===jt?fr:jt)},600);return()=>{clearTimeout(g),clearInterval(y)}},[]),s.jsx(s.Fragment,{children:s.jsxs(f3,{children:[s.jsxs(p3,{children:[i&&s.jsx(s.Fragment,{children:s.jsx(_3,{src:e,alt:"Waving Genie",isdisappearing:n})}),s.jsxs(S3,{children:[s.jsxs(x3,{children:[s.jsx("img",{src:c3,alt:"Gradient Background"}),s.jsxs(w3,{children:[s.jsx("h1",{children:"진인프라의"}),s.jsx("h1",{children:"양자 캐릭터"}),s.jsx("h1",{children:"‘지니’"})]})]}),s.jsx(m3,{children:s.jsx(g3,{src:u3,alt:"Flag"})})]}),s.jsxs(j3,{children:[s.jsx(v3,{children:s.jsx(y3,{src:d3,alt:"planet"})}),s.jsxs(h3,{children:[s.jsx("h1",{children:"지니"}),s.jsx("p",{style:{color:"#0000ff"},children:"지니(진인프라의 진+  접사 ‘-이‘)"}),s.jsx("p",{children:"🧬알라딘에 나오는 무엇이든 할 수 있는 캐릭터 지니처럼"}),s.jsx("p",{children:"🔭양자 정보 관련해서는 무엇이든 알려준다는 의미"})]})]})]}),s.jsxs("div",{style:{maxWidth:"50%",display:"flex",flexDirection:"column",marginLeft:"32%",marginTop:"10%"},children:[s.jsx(k3,{src:s3,style:{width:"35%",marginLeft:"40%"}}),s.jsx(E3,{style:{marginLeft:"0",marginTop:"3%",marginBottom:"15%"},src:u,alt:"Waving Genie"})]})]})})};function b3(){return s.jsx(s.Fragment,{children:s.jsx(O3,{})})}const P3="/assets/cat3-Bspolb1q.svg",T3="/assets/bunker-cRaJc6Me.svg",df="/assets/bottle1-BxjrYTB1.svg",z3="/assets/bottle2-BVqZZ2-9.svg",mm="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2_1185)'%3e%3cpath%20d='M40%2021.9999H15.66L26.83%2010.8299L24%207.99994L8%2023.9999L24%2039.9999L26.83%2037.1699L15.66%2025.9999H40V21.9999Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2_1185'%3e%3crect%20width='48'%20height='48'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";b.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  text-align: center;
  align-items: center;
  margin-top: 3%;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;

    & > div {
      max-width: 100%;
    }

    & img {
      max-width: 80%;
    }
  }
`;const Qi=b.div`
  border: 2px solid #333;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.8;
  span{
    background: linear-gradient(to top, #D0E7FE 40%, transparent 10%);
  }
  p {
      font-size: 1.7rem;
  }
  @media(max-width: 900px){
    h2{
      font-size: 1.4rem;
      margin-bottom: 2%;
    }
    p {
      font-size: 1.4rem;
      margin: 10px 0;
    }
  }
`,Gi=b.p`
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  white-space: nowrap;
  gap: 2%;
  @media(max-width: 900px){
    gap: 1%;
  }
`,ff=b.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10003;
`,pf=b.div`
  position: relative;
  background: white;
  padding: 3%;
  border-radius: 10px;
  width: 60%;
  max-width: 800px;
  text-align: left;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  max-height: 80vh;
  z-index: 10003;
  line-height: 1.8;
  h2{
    font-size: 1.7rem;
    margin-bottom: 2%;
  }
  p {
    font-size: 1.5rem;
    margin: 10px 0;
    font-family: arial;
  }
  span{
    background: linear-gradient(to top, #D0E7FE 40%, transparent 10%);
  }
  hr{
    margin-bottom: 3%;
    max-width: 100%;
  }
  @media(max-width: 900px){
    width: 90%;
    max-width: 90%;
    padding: 6%;
  }
`,hf=b(Qo)`
  position: absolute;
  top: 30px;
  right: 33px;
  cursor: pointer;
  font-size: 2.5rem;
  color: #000000;

  &:hover {
    color: #e00000;
  }
  @media(max-width: 900px){
    top: 15px;
    right: 15px;
  }
`,mf=b.img`
  max-width: 100%;
  @media (max-width: 700px) {
    max-width: 50%;
  }
`,L3=b.img`
  max-width: 210px;
  margin-bottom: -45px;
  @media (max-width: 700px) {
    max-width: 50%;
  }
`,I3=()=>{const[e,t]=_.useState(!1),[n,r]=_.useState(!1),[i,o]=_.useState(null);zt();const l=()=>{const a=Math.random()>.5?"살아 있습니다":"죽었습니다";o(a),t(!0)};return s.jsxs(gh,{children:[s.jsx(yh,{children:s.jsx("a",{href:"/concept",children:s.jsx("img",{src:mm,alt:"Back to main"})})}),s.jsxs(vh,{children:[s.jsx("h1",{children:"슈뢰딩거의 고양이"}),s.jsx("hr",{}),s.jsxs(Qi,{children:[s.jsxs(Gi,{children:[s.jsx("img",{src:T3,alt:"bunker",style:{maxWidth:"80%"}})," "]}),s.jsxs(Gi,{children:[s.jsx("img",{src:df,alt:"bottle1"})," ",s.jsx(mf,{src:fo,alt:"cat"})]}),s.jsx("p",{children:"고양이 한 마리와 독이 든 병을 벙커 안에 넣고 벙커를 닫습니다."})]}),s.jsxs(Qi,{children:[s.jsxs(Gi,{children:[s.jsx("img",{src:df,alt:"bottle1"})," ",s.jsx("img",{src:z3,alt:"bottle2"})]}),s.jsx("p",{children:"독이 든 병은 50%의 확률로 깨질 수도, 깨지지 않을 수도 있습니다."})]}),s.jsxs(Qi,{children:[s.jsxs(Gi,{children:[s.jsx(mf,{src:fo,alt:"cat"})," ",s.jsx(L3,{src:mh,alt:"cat2"})]}),s.jsx("p",{style:{marginBottom:"1%"},children:"이에 따라 고양이도 죽을 수도 있고 살아 있을 수도 있습니다."}),s.jsxs("p",{style:{padding:"0 2%",marginTop:"0px"},children:["이러한 상태를 ",s.jsx("span",{style:{color:"#0000ff"},children:"양자 중첩 상태"}),"라고 합니다."]}),s.jsx(Ps,{onClick:l,children:"벙커 안에 고양이가 있는지 확인하기"})]}),s.jsxs(Qi,{children:[s.jsx("p",{style:{padding:"0 2%",marginBottom:"1%"},children:"슈뢰딩거의 고양이는 1935년 에르빈 슈뢰딩거가 양자역학의 이상한 특성을 설명하기 위해 제안한 사고 실험입니다."}),s.jsxs("p",{style:{padding:"0 2%",marginTop:"0px"},children:[s.jsx("span",{children:"이 실험은 고양이를 상자에 넣고, 고양이의 생사 여부가 양자적 현상인 중첩에 의해 결정된다는 개념"}),"을 보여줍니다."]}),s.jsx("div",{style:{textAlign:"center",display:"flex",marginTop:"1%"}}),s.jsx("div",{style:{textAlign:"center",display:"flex",marginTop:"1%"},children:s.jsx(Ps,{onClick:()=>r(!0),children:"추가 설명 보기"})})]}),e&&s.jsx(ff,{children:s.jsxs(pf,{style:{backgroundColor:"#ddd"},children:[s.jsx(hf,{onClick:()=>t(!1)}),s.jsx("h2",{children:"벙커의 문이 열렸습니다!"}),s.jsx("hr",{}),i==="살아 있습니다"?s.jsxs("div",{children:[s.jsx("p",{children:"고양이는 살아 있습니다!"}),s.jsx("img",{src:fo,alt:"살아 있는 고양이",style:{maxWidth:"100%"}})]}):s.jsxs("div",{children:[s.jsx("p",{children:"고양이는 죽었습니다...."}),s.jsx("img",{src:P3,alt:"죽은 고양이",style:{maxWidth:"60%",margin:"1%"}})]})]})}),n&&s.jsx(ff,{children:s.jsxs(pf,{children:[s.jsx(hf,{onClick:()=>r(!1)}),s.jsx("h2",{children:"추가 설명"}),s.jsx("hr",{}),s.jsxs("p",{children:["이 사고 실험은 양자역학의 중요한 해석 중 하나인 ",s.jsx("span",{style:{fontWeight:"bold"},children:"코펜하겐 해석"}),"을 설명하기 위한 것이었습니다."]}),s.jsx("p",{children:"양자적 입자들은 측정되기 전까지 여러 상태가 동시에 존재하는데, 이 중첩 상태가 외부 관찰에 의해 무너지면서 하나의 확정된 상태가 된다는 것입니다."}),s.jsx("p",{children:s.jsx("span",{children:"고양이 역시 상자를 열어 관찰하기 전까지는 살아있으면서 동시에 죽어있는 상태로 존재합니다."})}),s.jsx("p",{children:"이 실험은 양자역학의 관측 문제와 파동 함수의 붕괴라는 개념을 설명하는 데 중요한 역할을 합니다."}),s.jsxs("p",{children:["슈뢰딩거는 이 실험을 통해 양자역학의 코펜하겐 해석이 현실에 적용될 때 얼마나 비현실적일 수 있는지를 비판했습니다. 실제로 고양이가 ",s.jsx("span",{style:{fontWeight:"bold"},children:'"살아 있으면서 죽어있다"'}),"는 개념은 우리의 일상적인 직관과는 맞지 않기 때문에, 이 실험은 양자역학의 해석에 대한 논쟁을 불러일으켰습니다."]})]})})]})]})};function R3(){return s.jsx(s.Fragment,{children:s.jsx(I3,{})})}const gf="/assets/coinf-BD3uUSm1.svg",vf="/assets/coinb-CO2sn5vL.svg",N3="/assets/box1-M57zrF-g.svg",M3="/assets/box2-BABTIy2V.svg",$3=Cr`
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,D3=b.div`
  border: 2px solid #333;
  margin: 2% auto;
  padding: 0px 2%;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.8;
  span {
    background: linear-gradient(to top, #D0E7FE 40%, transparent 10%);
  }
  p {
    font-size: 1.7rem;
    @media(max-width: 900px){
      font-size: 1.2rem;
      text-align: center;
    }
  }
`,F3=b.img`
  max-width: 40%;
  cursor: pointer;
  margin: 2%;
`,A3=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin-top: 20px;
  animation: ${$3} 0.8s ease-in-out;
  h3{
    font-size: 2rem;
    color: #333;
  }
`,B3=b.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10003;
`,W3=b.div`
  position: relative;
  background: white;
  padding: 3%;
  border-radius: 10px;
  width: 60%;
  max-width: 800px;
  text-align: left;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  max-height: 80vh;
  z-index: 10003;
  line-height: 1.8;
  h2{
    font-size: 1.7rem;
    margin-bottom: 2%;
  }
  p {
    font-size: 1.5rem;
    margin: 10px 0;
    font-family: arial;
  }
  span{
    background: linear-gradient(to top, #D0E7FE 40%, transparent 10%);
  }
  hr{
    margin-bottom: 3%;
    max-width: 100%;
  }
  @media(max-width: 900px){
    width: 90%;
    max-width: 90%;
    padding: 6%;
  }
`,H3=b(Qo)`
  position: absolute;
  top: 30px;
  right: 33px;
  cursor: pointer;
  font-size: 2.5rem;
  color: #000000;

  &:hover {
    color: #e00000;
  }
`,U3=()=>{const[e,t]=_.useState(!1),[n,r]=_.useState(null),[i,o]=_.useState(null),[l,a]=_.useState(!1),u=()=>{const c=Math.random()>.5?"앞면":"뒷면";r(c),o(c==="앞면"?"뒷면":"앞면"),a(!0)};return s.jsxs(gh,{children:[s.jsx(yh,{children:s.jsx("a",{href:"/concept",children:s.jsx("img",{src:mm,alt:"Back to main"})})}),s.jsxs(vh,{children:[s.jsx("h1",{children:"양자 얽힘: 두 개의 얽힌 동전"}),s.jsx("hr",{}),s.jsxs(D3,{children:[s.jsx("p",{children:"두 개의 동전이 특별한 방식으로 얽혀 있습니다."}),s.jsx("p",{children:"한 동전의 상태가 결정되면 다른 동전의 상태도 자동으로 결정됩니다!"}),s.jsx("p",{children:"박스를 열어서 동전 A를 확인하세요."}),s.jsx("h1",{style:{color:"#0183ff",margin:"5%"},children:"박스 클릭하기"}),l&&s.jsxs(A3,{children:[s.jsxs("div",{style:{textAlign:"center"},children:[s.jsx("h3",{children:"동전 A"}),s.jsx("img",{src:n==="앞면"?gf:vf,alt:"동전 A",style:{maxWidth:"160px"}}),s.jsx("p",{children:n})]}),s.jsxs("div",{style:{textAlign:"center"},children:[s.jsx("h3",{children:"동전 B"}),s.jsx("img",{src:i==="앞면"?gf:vf,alt:"동전 B",style:{maxWidth:"160px"}}),s.jsx("p",{children:i})]})]}),s.jsx(F3,{src:l?M3:N3,alt:"박스",onClick:u}),s.jsx("div",{style:{textAlign:"center",display:"flex",marginTop:"1%"},children:s.jsx(Ps,{onClick:()=>t(!0),children:"추가 설명 보기"})})]}),e&&s.jsx(B3,{children:s.jsxs(W3,{children:[s.jsx(H3,{onClick:()=>t(!1)}),s.jsx("h2",{children:"양자 얽힘 설명"}),s.jsx("hr",{}),s.jsx("p",{children:"두 개의 동전이 특별한 방법으로 얽혀 있다고 상상해봅시다. 이 동전들을 각각 상자에 넣고 지구의 반대편으로 떨어뜨립니다. 그 후, A 동전의 상자를 열어 동전을 확인했을 때, 앞면이 나왔습니다."}),s.jsx("p",{children:"이때, 멀리 떨어진 B 동전은 즉각적으로 뒤집혀서 반드시 뒷면이 나옵니다. 그들은 어떤 방식으로든 얽혀 있어서, A 동전이 앞면이면 B 동전은 뒷면이 될 것이고, 반대로도 성립됩니다."}),s.jsx("p",{children:'이처럼 양자 얽힘에서는 두 입자가 얽힌 상태에 있으면, 한 입자의 상태가 결정되는 순간 다른 입자의 상태도 그에 맞춰 즉각적으로 결정됩니다. 얽힘 상태에서는 물리적으로 떨어져 있어도 정보가 "순간적으로" 전해지는 것처럼 보입니다.'})]})})]})]})};function V3(){return s.jsx(s.Fragment,{children:s.jsx(U3,{})})}const Q3=()=>{const{pathname:e}=$u();return _.useEffect(()=>{window.scrollTo(0,0)},[e]),null},G3={ibm:{title:"IBM",description:"IBM Quantum은 클라우드 기반 양자 컴퓨팅 서비스로, 개발자와 연구자들에게 실용적인 양자 컴퓨팅을 제공합니다.",imgSrc:sm},dwave:{title:"D-Wave",description:"D-Wave는 양자 어닐링(annealing) 기반 시스템을 제공하며, 최적화 문제 해결에 특화된 양자 컴퓨터를 개발합니다.",imgSrc:um},rigetti:{title:"Rigetti Computing",description:"Rigetti Computing은 양자 회로 기반 시스템을 개발하며, 하이브리드 양자-클래식 컴퓨팅을 통해 양자 컴퓨팅을 상용화하려고 합니다.",imgSrc:cm},honeywell:{title:"Honeywell",description:"Honeywell Quantum Solutions는 이온 트랩 기술을 사용한 양자 컴퓨터를 개발하여 정밀한 양자 계산을 제공합니다.",imgSrc:Bs},google:{title:"Google",description:"Google Quantum AI는 시너지 효과를 노리며, 인공지능과 양자 컴퓨팅의 결합을 통해 양자 우월성을 목표로 연구 중입니다.",imgSrc:Bs},microsoft:{title:"Microsoft",description:"Honeywell Quantum Solutions는 이온 트랩 기술을 사용한 양자 컴퓨터를 개발하여 정밀한 양자 계산을 제공합니다.",imgSrc:dm},intel:{title:"Intel",description:"Intel은 양자 컴퓨팅 하드웨어와 소프트웨어 생태계를 구축하고 있으며, 상용화 가능한 양자 프로세서를 개발 중입니다.",imgSrc:pm},alibaba:{title:"Alibaba",description:"Alibaba는 클라우드 기반의 양자 컴퓨팅 서비스를 제공하며, 양자 암호화 및 인공지능 연구에 집중하고 있습니다.",imgSrc:hm},jininfra:{title:"JinInfra",description:"JinInfra는 양자 네트워크 인프라와 보안 솔루션을 개발하여 양자 통신 기술 상용화에 주력하고 있습니다.",imgSrc:fm}},q3=()=>{const{companyName:e}=x1(),t=G3[e.toLowerCase()];return t?s.jsxs(em,{children:[s.jsxs(tm,{children:[s.jsx(nm,{src:As,alt:"banner image"}),s.jsx(rm,{children:t.title})]}),s.jsx(im,{children:s.jsxs(om,{children:[s.jsx(lm,{children:t.title}),s.jsx(am,{children:t.description})]})})]}):s.jsx("p",{children:"존재하지 않는 기업입니다."})};function K3(){return s.jsxs($1,{children:[s.jsx(d2,{}),s.jsx(Q3,{}),s.jsxs(R1,{children:[s.jsx(Ne,{path:"/",element:s.jsx(Yy,{})}),s.jsx(Ne,{path:"/concept",element:s.jsx(R2,{})}),s.jsx(Ne,{path:"/description",element:s.jsx(i3,{})}),s.jsx(Ne,{path:"/quiz",element:s.jsx(M2,{})}),s.jsx(Ne,{path:"/medium",element:s.jsx(A2,{})}),s.jsx(Ne,{path:"/advanced",element:s.jsx(W2,{})}),s.jsx(Ne,{path:"/quizmain",element:s.jsx(D2,{})}),s.jsx(Ne,{path:"/character",element:s.jsx(b3,{})}),s.jsx(Ne,{path:"/cat",element:s.jsx(R3,{})}),s.jsx(Ne,{path:"/company",element:s.jsx(Gw,{})}),s.jsx(Ne,{path:"/company/:companyName",element:s.jsx(q3,{})}),s.jsx(Ne,{path:"/recent",element:s.jsx(e3,{})}),s.jsx(Ne,{path:"/coinentanglement",element:s.jsx(V3,{})})]}),s.jsx(a3,{}),s.jsx(j2,{})]})}const Y3=Hy`
  :root {
    --vh: 100%;
    background-color: #eee;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    font: inherit;
    font-family: 'LINESeedKR-Bd';
  }

  /* Style resets for common elements */


  * {
    box-sizing: border-box;
  }

  html {
    -webkit-touch-callout: none; 
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    scroll-behavior: smooth;
    font-family: 'LINESeedKR-Bd', sans-serif;
    font-size: 62.5%; /* 1rem = 10px */
    user-select: none; /* disable text select */
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, button {
    outline: none;
    border: none;
    background-color: transparent;
  }

  button {
    cursor: pointer;
    padding: 0;
  }
  
  input {
    appearance: none;

    &:focus {
      outline: none;
    }
  }


  @font-face {
    font-family: 'LINESeedKR-Bd';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2') format('woff2');
    font-weight: 100;
    font-style: normal;
  }

  
@font-face {
  font-family: 'LINESeedKR-Bd';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}
  
@font-face {
  font-family: 'LINESeedKR-Bd';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}
`,X3={title:jn`
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 800;
      font-size: 4rem;
      letter-spacing: 0.07em;
    `,text:jn`
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 500;
      font-size: 1.5rem;
      letter-spacing: 0.07em;
    `},Z3={fonts:X3};function J3(){return s.jsx(s.Fragment,{children:s.jsxs(Ay,{theme:Z3,children:[s.jsx(Y3,{}),s.jsx(K3,{})]})})}Ea.createRoot(document.getElementById("root")).render(s.jsx(de.StrictMode,{children:s.jsx(J3,{})}));
