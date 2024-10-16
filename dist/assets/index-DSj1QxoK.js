function mm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var _i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function gm(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var wf={exports:{}},il={},Sf={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yi=Symbol.for("react.element"),vm=Symbol.for("react.portal"),ym=Symbol.for("react.fragment"),xm=Symbol.for("react.strict_mode"),wm=Symbol.for("react.profiler"),Sm=Symbol.for("react.provider"),km=Symbol.for("react.context"),jm=Symbol.for("react.forward_ref"),Cm=Symbol.for("react.suspense"),_m=Symbol.for("react.memo"),bm=Symbol.for("react.lazy"),Xu=Symbol.iterator;function Em(e){return e===null||typeof e!="object"?null:(e=Xu&&e[Xu]||e["@@iterator"],typeof e=="function"?e:null)}var kf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jf=Object.assign,Cf={};function xr(e,t,n){this.props=e,this.context=t,this.refs=Cf,this.updater=n||kf}xr.prototype.isReactComponent={};xr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _f(){}_f.prototype=xr.prototype;function Ba(e,t,n){this.props=e,this.context=t,this.refs=Cf,this.updater=n||kf}var Wa=Ba.prototype=new _f;Wa.constructor=Ba;jf(Wa,xr.prototype);Wa.isPureReactComponent=!0;var Zu=Array.isArray,bf=Object.prototype.hasOwnProperty,Ha={current:null},Ef={key:!0,ref:!0,__self:!0,__source:!0};function Of(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)bf.call(t,r)&&!Ef.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:yi,type:e,key:o,ref:l,props:i,_owner:Ha.current}}function Om(e,t){return{$$typeof:yi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ua(e){return typeof e=="object"&&e!==null&&e.$$typeof===yi}function Pm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ju=/\/+/g;function Ml(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Pm(""+e.key):t.toString(36)}function Ki(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case yi:case vm:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Ml(l,0):r,Zu(i)?(n="",e!=null&&(n=e.replace(Ju,"$&/")+"/"),Ki(i,t,n,"",function(c){return c})):i!=null&&(Ua(i)&&(i=Om(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ju,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Zu(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Ml(o,s);l+=Ki(o,t,n,u,i)}else if(u=Em(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Ml(o,s++),l+=Ki(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function bi(e,t,n){if(e==null)return e;var r=[],i=0;return Ki(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Tm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ie={current:null},qi={transition:null},zm={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:qi,ReactCurrentOwner:Ha};U.Children={map:bi,forEach:function(e,t,n){bi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return bi(e,function(){t++}),t},toArray:function(e){return bi(e,function(t){return t})||[]},only:function(e){if(!Ua(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=xr;U.Fragment=ym;U.Profiler=wm;U.PureComponent=Ba;U.StrictMode=xm;U.Suspense=Cm;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zm;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=jf({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Ha.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)bf.call(t,u)&&!Ef.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:yi,type:e.type,key:i,ref:o,props:r,_owner:l}};U.createContext=function(e){return e={$$typeof:km,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sm,_context:e},e.Consumer=e};U.createElement=Of;U.createFactory=function(e){var t=Of.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:jm,render:e}};U.isValidElement=Ua;U.lazy=function(e){return{$$typeof:bm,_payload:{_status:-1,_result:e},_init:Tm}};U.memo=function(e,t){return{$$typeof:_m,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=qi.transition;qi.transition={};try{e()}finally{qi.transition=t}};U.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};U.useCallback=function(e,t){return Ie.current.useCallback(e,t)};U.useContext=function(e){return Ie.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Ie.current.useDeferredValue(e)};U.useEffect=function(e,t){return Ie.current.useEffect(e,t)};U.useId=function(){return Ie.current.useId()};U.useImperativeHandle=function(e,t,n){return Ie.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Ie.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Ie.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Ie.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Ie.current.useReducer(e,t,n)};U.useRef=function(e){return Ie.current.useRef(e)};U.useState=function(e){return Ie.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Ie.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Ie.current.useTransition()};U.version="18.2.0";Sf.exports=U;var C=Sf.exports;const de=xf(C),Im=mm({__proto__:null,default:de},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm=C,Rm=Symbol.for("react.element"),Nm=Symbol.for("react.fragment"),Mm=Object.prototype.hasOwnProperty,Dm=Lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$m={key:!0,ref:!0,__self:!0,__source:!0};function Pf(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Mm.call(t,r)&&!$m.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Rm,type:e,key:o,ref:l,props:i,_owner:Dm.current}}il.Fragment=Nm;il.jsx=Pf;il.jsxs=Pf;wf.exports=il;var a=wf.exports,bs={},Tf={exports:{}},Ke={},zf={exports:{}},If={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,R){var F=I.length;I.push(R);e:for(;0<F;){var Q=F-1>>>1,G=I[Q];if(0<i(G,R))I[Q]=R,I[F]=G,F=Q;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var R=I[0],F=I.pop();if(F!==R){I[0]=F;e:for(var Q=0,G=I.length,Ee=G>>>1;Q<Ee;){var Be=2*(Q+1)-1,Re=I[Be],We=Be+1,xt=I[We];if(0>i(Re,F))We<G&&0>i(xt,Re)?(I[Q]=xt,I[We]=F,Q=We):(I[Q]=Re,I[Be]=F,Q=Be);else if(We<G&&0>i(xt,F))I[Q]=xt,I[We]=F,Q=We;else break e}}return R}function i(I,R){var F=I.sortIndex-R.sortIndex;return F!==0?F:I.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],h=1,f=null,g=3,y=!1,x=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(I){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=I)r(c),R.sortIndex=R.expirationTime,t(u,R);else break;R=n(c)}}function w(I){if(v=!1,m(I),!x)if(n(u)!==null)x=!0,le(k);else{var R=n(c);R!==null&&xe(w,R.startTime-I)}}function k(I,R){x=!1,v&&(v=!1,p(T),T=-1),y=!0;var F=g;try{for(m(R),f=n(u);f!==null&&(!(f.expirationTime>R)||I&&!N());){var Q=f.callback;if(typeof Q=="function"){f.callback=null,g=f.priorityLevel;var G=Q(f.expirationTime<=R);R=e.unstable_now(),typeof G=="function"?f.callback=G:f===n(u)&&r(u),m(R)}else r(u);f=n(u)}if(f!==null)var Ee=!0;else{var Be=n(c);Be!==null&&xe(w,Be.startTime-R),Ee=!1}return Ee}finally{f=null,g=F,y=!1}}var j=!1,_=null,T=-1,O=5,E=-1;function N(){return!(e.unstable_now()-E<O)}function M(){if(_!==null){var I=e.unstable_now();E=I;var R=!0;try{R=_(!0,I)}finally{R?D():(j=!1,_=null)}}else j=!1}var D;if(typeof d=="function")D=function(){d(M)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,rt=A.port2;A.port1.onmessage=M,D=function(){rt.postMessage(null)}}else D=function(){S(M,0)};function le(I){_=I,j||(j=!0,D())}function xe(I,R){T=S(function(){I(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,le(k))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(I){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var F=g;g=R;try{return I()}finally{g=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,R){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var F=g;g=I;try{return R()}finally{g=F}},e.unstable_scheduleCallback=function(I,R,F){var Q=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?Q+F:Q):F=Q,I){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=F+G,I={id:h++,callback:R,priorityLevel:I,startTime:F,expirationTime:G,sortIndex:-1},F>Q?(I.sortIndex=F,t(c,I),n(u)===null&&I===n(c)&&(v?(p(T),T=-1):v=!0,xe(w,F-Q))):(I.sortIndex=G,t(u,I),x||y||(x=!0,le(k))),I},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(I){var R=g;return function(){var F=g;g=R;try{return I.apply(this,arguments)}finally{g=F}}}})(If);zf.exports=If;var Am=zf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lf=C,Ge=Am;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rf=new Set,Yr={};function Cn(e,t){er(e,t),er(e+"Capture",t)}function er(e,t){for(Yr[e]=t,e=0;e<t.length;e++)Rf.add(t[e])}var Et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Es=Object.prototype.hasOwnProperty,Fm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ec={},tc={};function Bm(e){return Es.call(tc,e)?!0:Es.call(ec,e)?!1:Fm.test(e)?tc[e]=!0:(ec[e]=!0,!1)}function Wm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hm(e,t,n,r){if(t===null||typeof t>"u"||Wm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Le(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new Le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Le(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qa=/[\-:]([a-z])/g;function Va(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qa,Va);ke[t]=new Le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qa,Va);ke[t]=new Le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qa,Va);ke[t]=new Le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Le(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Le(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ga(e,t,n,r){var i=ke.hasOwnProperty(t)?ke[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hm(t,n,i,r)&&(n=null),r||i===null?Bm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zt=Lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ei=Symbol.for("react.element"),In=Symbol.for("react.portal"),Ln=Symbol.for("react.fragment"),Ka=Symbol.for("react.strict_mode"),Os=Symbol.for("react.profiler"),Nf=Symbol.for("react.provider"),Mf=Symbol.for("react.context"),qa=Symbol.for("react.forward_ref"),Ps=Symbol.for("react.suspense"),Ts=Symbol.for("react.suspense_list"),Ya=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Df=Symbol.for("react.offscreen"),nc=Symbol.iterator;function br(e){return e===null||typeof e!="object"?null:(e=nc&&e[nc]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,Dl;function Nr(e){if(Dl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Dl=t&&t[1]||""}return`
`+Dl+e}var $l=!1;function Al(e,t){if(!e||$l)return"";$l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{$l=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Nr(e):""}function Um(e){switch(e.tag){case 5:return Nr(e.type);case 16:return Nr("Lazy");case 13:return Nr("Suspense");case 19:return Nr("SuspenseList");case 0:case 2:case 15:return e=Al(e.type,!1),e;case 11:return e=Al(e.type.render,!1),e;case 1:return e=Al(e.type,!0),e;default:return""}}function zs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ln:return"Fragment";case In:return"Portal";case Os:return"Profiler";case Ka:return"StrictMode";case Ps:return"Suspense";case Ts:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mf:return(e.displayName||"Context")+".Consumer";case Nf:return(e._context.displayName||"Context")+".Provider";case qa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ya:return t=e.displayName||null,t!==null?t:zs(e.type)||"Memo";case Nt:t=e._payload,e=e._init;try{return zs(e(t))}catch{}}return null}function Qm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zs(t);case 8:return t===Ka?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $f(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vm(e){var t=$f(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Oi(e){e._valueTracker||(e._valueTracker=Vm(e))}function Af(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$f(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ho(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Is(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function rc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ff(e,t){t=t.checked,t!=null&&Ga(e,"checked",t,!1)}function Ls(e,t){Ff(e,t);var n=Zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Rs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Rs(e,t.type,Zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ic(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Rs(e,t,n){(t!=="number"||ho(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mr=Array.isArray;function Qn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ns(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Mr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zt(n)}}function Bf(e,t){var n=Zt(t.value),r=Zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ms(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pi,Hf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Pi=Pi||document.createElement("div"),Pi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gm=["Webkit","ms","Moz","O"];Object.keys(Fr).forEach(function(e){Gm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fr[t]=Fr[e]})});function Uf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fr.hasOwnProperty(e)&&Fr[e]?(""+t).trim():t+"px"}function Qf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Uf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Km=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ds(e,t){if(t){if(Km[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function $s(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var As=null;function Xa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fs=null,Vn=null,Gn=null;function sc(e){if(e=Si(e)){if(typeof Fs!="function")throw Error(P(280));var t=e.stateNode;t&&(t=ul(t),Fs(e.stateNode,e.type,t))}}function Vf(e){Vn?Gn?Gn.push(e):Gn=[e]:Vn=e}function Gf(){if(Vn){var e=Vn,t=Gn;if(Gn=Vn=null,sc(e),t)for(e=0;e<t.length;e++)sc(t[e])}}function Kf(e,t){return e(t)}function qf(){}var Fl=!1;function Yf(e,t,n){if(Fl)return e(t,n);Fl=!0;try{return Kf(e,t,n)}finally{Fl=!1,(Vn!==null||Gn!==null)&&(qf(),Gf())}}function Zr(e,t){var n=e.stateNode;if(n===null)return null;var r=ul(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Bs=!1;if(Et)try{var Er={};Object.defineProperty(Er,"passive",{get:function(){Bs=!0}}),window.addEventListener("test",Er,Er),window.removeEventListener("test",Er,Er)}catch{Bs=!1}function qm(e,t,n,r,i,o,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Br=!1,mo=null,go=!1,Ws=null,Ym={onError:function(e){Br=!0,mo=e}};function Xm(e,t,n,r,i,o,l,s,u){Br=!1,mo=null,qm.apply(Ym,arguments)}function Zm(e,t,n,r,i,o,l,s,u){if(Xm.apply(this,arguments),Br){if(Br){var c=mo;Br=!1,mo=null}else throw Error(P(198));go||(go=!0,Ws=c)}}function _n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ac(e){if(_n(e)!==e)throw Error(P(188))}function Jm(e){var t=e.alternate;if(!t){if(t=_n(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ac(i),e;if(o===r)return ac(i),t;o=o.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Zf(e){return e=Jm(e),e!==null?Jf(e):null}function Jf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Jf(e);if(t!==null)return t;e=e.sibling}return null}var ep=Ge.unstable_scheduleCallback,uc=Ge.unstable_cancelCallback,eg=Ge.unstable_shouldYield,tg=Ge.unstable_requestPaint,ae=Ge.unstable_now,ng=Ge.unstable_getCurrentPriorityLevel,Za=Ge.unstable_ImmediatePriority,tp=Ge.unstable_UserBlockingPriority,vo=Ge.unstable_NormalPriority,rg=Ge.unstable_LowPriority,np=Ge.unstable_IdlePriority,ol=null,gt=null;function ig(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(ol,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:sg,og=Math.log,lg=Math.LN2;function sg(e){return e>>>=0,e===0?32:31-(og(e)/lg|0)|0}var Ti=64,zi=4194304;function Dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=Dr(s):(o&=l,o!==0&&(r=Dr(o)))}else l=n&~i,l!==0?r=Dr(l):o!==0&&(r=Dr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-at(t),i=1<<n,r|=e[n],t&=~i;return r}function ag(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ug(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-at(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=ag(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Hs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rp(){var e=Ti;return Ti<<=1,!(Ti&4194240)&&(Ti=64),e}function Bl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=n}function cg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-at(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ja(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var q=0;function ip(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var op,eu,lp,sp,ap,Us=!1,Ii=[],Ht=null,Ut=null,Qt=null,Jr=new Map,ei=new Map,$t=[],dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cc(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":Jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ei.delete(t.pointerId)}}function Or(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Si(t),t!==null&&eu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function fg(e,t,n,r,i){switch(t){case"focusin":return Ht=Or(Ht,e,t,n,r,i),!0;case"dragenter":return Ut=Or(Ut,e,t,n,r,i),!0;case"mouseover":return Qt=Or(Qt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Jr.set(o,Or(Jr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ei.set(o,Or(ei.get(o)||null,e,t,n,r,i)),!0}return!1}function up(e){var t=sn(e.target);if(t!==null){var n=_n(t);if(n!==null){if(t=n.tag,t===13){if(t=Xf(n),t!==null){e.blockedOn=t,ap(e.priority,function(){lp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);As=r,n.target.dispatchEvent(r),As=null}else return t=Si(n),t!==null&&eu(t),e.blockedOn=n,!1;t.shift()}return!0}function dc(e,t,n){Yi(e)&&n.delete(t)}function pg(){Us=!1,Ht!==null&&Yi(Ht)&&(Ht=null),Ut!==null&&Yi(Ut)&&(Ut=null),Qt!==null&&Yi(Qt)&&(Qt=null),Jr.forEach(dc),ei.forEach(dc)}function Pr(e,t){e.blockedOn===t&&(e.blockedOn=null,Us||(Us=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,pg)))}function ti(e){function t(i){return Pr(i,e)}if(0<Ii.length){Pr(Ii[0],e);for(var n=1;n<Ii.length;n++){var r=Ii[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ht!==null&&Pr(Ht,e),Ut!==null&&Pr(Ut,e),Qt!==null&&Pr(Qt,e),Jr.forEach(t),ei.forEach(t),n=0;n<$t.length;n++)r=$t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)up(n),n.blockedOn===null&&$t.shift()}var Kn=zt.ReactCurrentBatchConfig,xo=!0;function hg(e,t,n,r){var i=q,o=Kn.transition;Kn.transition=null;try{q=1,tu(e,t,n,r)}finally{q=i,Kn.transition=o}}function mg(e,t,n,r){var i=q,o=Kn.transition;Kn.transition=null;try{q=4,tu(e,t,n,r)}finally{q=i,Kn.transition=o}}function tu(e,t,n,r){if(xo){var i=Qs(e,t,n,r);if(i===null)Xl(e,t,r,wo,n),cc(e,r);else if(fg(i,e,t,n,r))r.stopPropagation();else if(cc(e,r),t&4&&-1<dg.indexOf(e)){for(;i!==null;){var o=Si(i);if(o!==null&&op(o),o=Qs(e,t,n,r),o===null&&Xl(e,t,r,wo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Xl(e,t,r,null,n)}}var wo=null;function Qs(e,t,n,r){if(wo=null,e=Xa(r),e=sn(e),e!==null)if(t=_n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wo=e,null}function cp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ng()){case Za:return 1;case tp:return 4;case vo:case rg:return 16;case np:return 536870912;default:return 16}default:return 16}}var Ft=null,nu=null,Xi=null;function dp(){if(Xi)return Xi;var e,t=nu,n=t.length,r,i="value"in Ft?Ft.value:Ft.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Xi=i.slice(e,1<r?1-r:void 0)}function Zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Li(){return!0}function fc(){return!1}function qe(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Li:fc,this.isPropagationStopped=fc,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Li)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Li)},persist:function(){},isPersistent:Li}),t}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ru=qe(wr),wi=oe({},wr,{view:0,detail:0}),gg=qe(wi),Wl,Hl,Tr,ll=oe({},wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tr&&(Tr&&e.type==="mousemove"?(Wl=e.screenX-Tr.screenX,Hl=e.screenY-Tr.screenY):Hl=Wl=0,Tr=e),Wl)},movementY:function(e){return"movementY"in e?e.movementY:Hl}}),pc=qe(ll),vg=oe({},ll,{dataTransfer:0}),yg=qe(vg),xg=oe({},wi,{relatedTarget:0}),Ul=qe(xg),wg=oe({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),Sg=qe(wg),kg=oe({},wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jg=qe(kg),Cg=oe({},wr,{data:0}),hc=qe(Cg),_g={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Eg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Og(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Eg[e])?!!t[e]:!1}function iu(){return Og}var Pg=oe({},wi,{key:function(e){if(e.key){var t=_g[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(e){return e.type==="keypress"?Zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tg=qe(Pg),zg=oe({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mc=qe(zg),Ig=oe({},wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),Lg=qe(Ig),Rg=oe({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ng=qe(Rg),Mg=oe({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dg=qe(Mg),$g=[9,13,27,32],ou=Et&&"CompositionEvent"in window,Wr=null;Et&&"documentMode"in document&&(Wr=document.documentMode);var Ag=Et&&"TextEvent"in window&&!Wr,fp=Et&&(!ou||Wr&&8<Wr&&11>=Wr),gc=" ",vc=!1;function pp(e,t){switch(e){case"keyup":return $g.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rn=!1;function Fg(e,t){switch(e){case"compositionend":return hp(t);case"keypress":return t.which!==32?null:(vc=!0,gc);case"textInput":return e=t.data,e===gc&&vc?null:e;default:return null}}function Bg(e,t){if(Rn)return e==="compositionend"||!ou&&pp(e,t)?(e=dp(),Xi=nu=Ft=null,Rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fp&&t.locale!=="ko"?null:t.data;default:return null}}var Wg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wg[e.type]:t==="textarea"}function mp(e,t,n,r){Vf(r),t=So(t,"onChange"),0<t.length&&(n=new ru("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hr=null,ni=null;function Hg(e){bp(e,0)}function sl(e){var t=Dn(e);if(Af(t))return e}function Ug(e,t){if(e==="change")return t}var gp=!1;if(Et){var Ql;if(Et){var Vl="oninput"in document;if(!Vl){var xc=document.createElement("div");xc.setAttribute("oninput","return;"),Vl=typeof xc.oninput=="function"}Ql=Vl}else Ql=!1;gp=Ql&&(!document.documentMode||9<document.documentMode)}function wc(){Hr&&(Hr.detachEvent("onpropertychange",vp),ni=Hr=null)}function vp(e){if(e.propertyName==="value"&&sl(ni)){var t=[];mp(t,ni,e,Xa(e)),Yf(Hg,t)}}function Qg(e,t,n){e==="focusin"?(wc(),Hr=t,ni=n,Hr.attachEvent("onpropertychange",vp)):e==="focusout"&&wc()}function Vg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sl(ni)}function Gg(e,t){if(e==="click")return sl(t)}function Kg(e,t){if(e==="input"||e==="change")return sl(t)}function qg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dt=typeof Object.is=="function"?Object.is:qg;function ri(e,t){if(dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Es.call(t,i)||!dt(e[i],t[i]))return!1}return!0}function Sc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kc(e,t){var n=Sc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sc(n)}}function yp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xp(){for(var e=window,t=ho();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ho(e.document)}return t}function lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yg(e){var t=xp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yp(n.ownerDocument.documentElement,n)){if(r!==null&&lu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=kc(n,o);var l=kc(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xg=Et&&"documentMode"in document&&11>=document.documentMode,Nn=null,Vs=null,Ur=null,Gs=!1;function jc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gs||Nn==null||Nn!==ho(r)||(r=Nn,"selectionStart"in r&&lu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&ri(Ur,r)||(Ur=r,r=So(Vs,"onSelect"),0<r.length&&(t=new ru("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nn)))}function Ri(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mn={animationend:Ri("Animation","AnimationEnd"),animationiteration:Ri("Animation","AnimationIteration"),animationstart:Ri("Animation","AnimationStart"),transitionend:Ri("Transition","TransitionEnd")},Gl={},wp={};Et&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function al(e){if(Gl[e])return Gl[e];if(!Mn[e])return e;var t=Mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wp)return Gl[e]=t[n];return e}var Sp=al("animationend"),kp=al("animationiteration"),jp=al("animationstart"),Cp=al("transitionend"),_p=new Map,Cc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(e,t){_p.set(e,t),Cn(t,[e])}for(var Kl=0;Kl<Cc.length;Kl++){var ql=Cc[Kl],Zg=ql.toLowerCase(),Jg=ql[0].toUpperCase()+ql.slice(1);en(Zg,"on"+Jg)}en(Sp,"onAnimationEnd");en(kp,"onAnimationIteration");en(jp,"onAnimationStart");en("dblclick","onDoubleClick");en("focusin","onFocus");en("focusout","onBlur");en(Cp,"onTransitionEnd");er("onMouseEnter",["mouseout","mouseover"]);er("onMouseLeave",["mouseout","mouseover"]);er("onPointerEnter",["pointerout","pointerover"]);er("onPointerLeave",["pointerout","pointerover"]);Cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ev=new Set("cancel close invalid load scroll toggle".split(" ").concat($r));function _c(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Zm(r,t,void 0,e),e.currentTarget=null}function bp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;_c(i,s,c),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;_c(i,s,c),o=u}}}if(go)throw e=Ws,go=!1,Ws=null,e}function X(e,t){var n=t[Zs];n===void 0&&(n=t[Zs]=new Set);var r=e+"__bubble";n.has(r)||(Ep(t,e,2,!1),n.add(r))}function Yl(e,t,n){var r=0;t&&(r|=4),Ep(n,e,r,t)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function ii(e){if(!e[Ni]){e[Ni]=!0,Rf.forEach(function(n){n!=="selectionchange"&&(ev.has(n)||Yl(n,!1,e),Yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ni]||(t[Ni]=!0,Yl("selectionchange",!1,t))}}function Ep(e,t,n,r){switch(cp(t)){case 1:var i=hg;break;case 4:i=mg;break;default:i=tu}n=i.bind(null,t,n,e),i=void 0,!Bs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Xl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=sn(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Yf(function(){var c=o,h=Xa(n),f=[];e:{var g=_p.get(e);if(g!==void 0){var y=ru,x=e;switch(e){case"keypress":if(Zi(n)===0)break e;case"keydown":case"keyup":y=Tg;break;case"focusin":x="focus",y=Ul;break;case"focusout":x="blur",y=Ul;break;case"beforeblur":case"afterblur":y=Ul;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=pc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=yg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Lg;break;case Sp:case kp:case jp:y=Sg;break;case Cp:y=Ng;break;case"scroll":y=gg;break;case"wheel":y=Dg;break;case"copy":case"cut":case"paste":y=jg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=mc}var v=(t&4)!==0,S=!v&&e==="scroll",p=v?g!==null?g+"Capture":null:g;v=[];for(var d=c,m;d!==null;){m=d;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Zr(d,p),w!=null&&v.push(oi(d,w,m)))),S)break;d=d.return}0<v.length&&(g=new y(g,x,null,n,h),f.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==As&&(x=n.relatedTarget||n.fromElement)&&(sn(x)||x[Ot]))break e;if((y||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=c,x=x?sn(x):null,x!==null&&(S=_n(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(v=pc,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=mc,w="onPointerLeave",p="onPointerEnter",d="pointer"),S=y==null?g:Dn(y),m=x==null?g:Dn(x),g=new v(w,d+"leave",y,n,h),g.target=S,g.relatedTarget=m,w=null,sn(h)===c&&(v=new v(p,d+"enter",x,n,h),v.target=m,v.relatedTarget=S,w=v),S=w,y&&x)t:{for(v=y,p=x,d=0,m=v;m;m=En(m))d++;for(m=0,w=p;w;w=En(w))m++;for(;0<d-m;)v=En(v),d--;for(;0<m-d;)p=En(p),m--;for(;d--;){if(v===p||p!==null&&v===p.alternate)break t;v=En(v),p=En(p)}v=null}else v=null;y!==null&&bc(f,g,y,v,!1),x!==null&&S!==null&&bc(f,S,x,v,!0)}}e:{if(g=c?Dn(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var k=Ug;else if(yc(g))if(gp)k=Kg;else{k=Vg;var j=Qg}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=Gg);if(k&&(k=k(e,c))){mp(f,k,n,h);break e}j&&j(e,g,c),e==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&Rs(g,"number",g.value)}switch(j=c?Dn(c):window,e){case"focusin":(yc(j)||j.contentEditable==="true")&&(Nn=j,Vs=c,Ur=null);break;case"focusout":Ur=Vs=Nn=null;break;case"mousedown":Gs=!0;break;case"contextmenu":case"mouseup":case"dragend":Gs=!1,jc(f,n,h);break;case"selectionchange":if(Xg)break;case"keydown":case"keyup":jc(f,n,h)}var _;if(ou)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Rn?pp(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(fp&&n.locale!=="ko"&&(Rn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Rn&&(_=dp()):(Ft=h,nu="value"in Ft?Ft.value:Ft.textContent,Rn=!0)),j=So(c,T),0<j.length&&(T=new hc(T,e,null,n,h),f.push({event:T,listeners:j}),_?T.data=_:(_=hp(n),_!==null&&(T.data=_)))),(_=Ag?Fg(e,n):Bg(e,n))&&(c=So(c,"onBeforeInput"),0<c.length&&(h=new hc("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=_))}bp(f,t)})}function oi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function So(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Zr(e,n),o!=null&&r.unshift(oi(e,o,i)),o=Zr(e,t),o!=null&&r.push(oi(e,o,i))),e=e.return}return r}function En(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function bc(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=Zr(n,o),u!=null&&l.unshift(oi(n,u,s))):i||(u=Zr(n,o),u!=null&&l.push(oi(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var tv=/\r\n?/g,nv=/\u0000|\uFFFD/g;function Ec(e){return(typeof e=="string"?e:""+e).replace(tv,`
`).replace(nv,"")}function Mi(e,t,n){if(t=Ec(t),Ec(e)!==t&&n)throw Error(P(425))}function ko(){}var Ks=null,qs=null;function Ys(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xs=typeof setTimeout=="function"?setTimeout:void 0,rv=typeof clearTimeout=="function"?clearTimeout:void 0,Oc=typeof Promise=="function"?Promise:void 0,iv=typeof queueMicrotask=="function"?queueMicrotask:typeof Oc<"u"?function(e){return Oc.resolve(null).then(e).catch(ov)}:Xs;function ov(e){setTimeout(function(){throw e})}function Zl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ti(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ti(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sr=Math.random().toString(36).slice(2),mt="__reactFiber$"+Sr,li="__reactProps$"+Sr,Ot="__reactContainer$"+Sr,Zs="__reactEvents$"+Sr,lv="__reactListeners$"+Sr,sv="__reactHandles$"+Sr;function sn(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pc(e);e!==null;){if(n=e[mt])return n;e=Pc(e)}return t}e=n,n=e.parentNode}return null}function Si(e){return e=e[mt]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function ul(e){return e[li]||null}var Js=[],$n=-1;function tn(e){return{current:e}}function J(e){0>$n||(e.current=Js[$n],Js[$n]=null,$n--)}function Y(e,t){$n++,Js[$n]=e.current,e.current=t}var Jt={},be=tn(Jt),$e=tn(!1),mn=Jt;function tr(e,t){var n=e.type.contextTypes;if(!n)return Jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(e){return e=e.childContextTypes,e!=null}function jo(){J($e),J(be)}function Tc(e,t,n){if(be.current!==Jt)throw Error(P(168));Y(be,t),Y($e,n)}function Op(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,Qm(e)||"Unknown",i));return oe({},n,r)}function Co(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jt,mn=be.current,Y(be,e),Y($e,$e.current),!0}function zc(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Op(e,t,mn),r.__reactInternalMemoizedMergedChildContext=e,J($e),J(be),Y(be,e)):J($e),Y($e,n)}var kt=null,cl=!1,Jl=!1;function Pp(e){kt===null?kt=[e]:kt.push(e)}function av(e){cl=!0,Pp(e)}function nn(){if(!Jl&&kt!==null){Jl=!0;var e=0,t=q;try{var n=kt;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kt=null,cl=!1}catch(i){throw kt!==null&&(kt=kt.slice(e+1)),ep(Za,nn),i}finally{q=t,Jl=!1}}return null}var An=[],Fn=0,_o=null,bo=0,Ye=[],Xe=0,gn=null,Ct=1,_t="";function on(e,t){An[Fn++]=bo,An[Fn++]=_o,_o=e,bo=t}function Tp(e,t,n){Ye[Xe++]=Ct,Ye[Xe++]=_t,Ye[Xe++]=gn,gn=e;var r=Ct;e=_t;var i=32-at(r)-1;r&=~(1<<i),n+=1;var o=32-at(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Ct=1<<32-at(t)+i|n<<i|r,_t=o+e}else Ct=1<<o|n<<i|r,_t=e}function su(e){e.return!==null&&(on(e,1),Tp(e,1,0))}function au(e){for(;e===_o;)_o=An[--Fn],An[Fn]=null,bo=An[--Fn],An[Fn]=null;for(;e===gn;)gn=Ye[--Xe],Ye[Xe]=null,_t=Ye[--Xe],Ye[Xe]=null,Ct=Ye[--Xe],Ye[Xe]=null}var Ve=null,Qe=null,te=!1,st=null;function zp(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ic(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,Qe=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gn!==null?{id:Ct,overflow:_t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,Qe=null,!0):!1;default:return!1}}function ea(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ta(e){if(te){var t=Qe;if(t){var n=t;if(!Ic(e,t)){if(ea(e))throw Error(P(418));t=Vt(n.nextSibling);var r=Ve;t&&Ic(e,t)?zp(r,n):(e.flags=e.flags&-4097|2,te=!1,Ve=e)}}else{if(ea(e))throw Error(P(418));e.flags=e.flags&-4097|2,te=!1,Ve=e}}}function Lc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function Di(e){if(e!==Ve)return!1;if(!te)return Lc(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ys(e.type,e.memoizedProps)),t&&(t=Qe)){if(ea(e))throw Ip(),Error(P(418));for(;t;)zp(e,t),t=Vt(t.nextSibling)}if(Lc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Ve?Vt(e.stateNode.nextSibling):null;return!0}function Ip(){for(var e=Qe;e;)e=Vt(e.nextSibling)}function nr(){Qe=Ve=null,te=!1}function uu(e){st===null?st=[e]:st.push(e)}var uv=zt.ReactCurrentBatchConfig;function ot(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Eo=tn(null),Oo=null,Bn=null,cu=null;function du(){cu=Bn=Oo=null}function fu(e){var t=Eo.current;J(Eo),e._currentValue=t}function na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function qn(e,t){Oo=e,cu=Bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(De=!0),e.firstContext=null)}function et(e){var t=e._currentValue;if(cu!==e)if(e={context:e,memoizedValue:t,next:null},Bn===null){if(Oo===null)throw Error(P(308));Bn=e,Oo.dependencies={lanes:0,firstContext:e}}else Bn=Bn.next=e;return t}var an=null;function pu(e){an===null?an=[e]:an.push(e)}function Lp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,pu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Pt(e,r)}function Pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Mt=!1;function hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Pt(e,n)}return i=r.interleaved,i===null?(t.next=t,pu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Pt(e,n)}function Ji(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ja(e,n)}}function Rc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Po(e,t,n,r){var i=e.updateQueue;Mt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==l&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=u))}if(o!==null){var f=i.baseState;l=0,h=c=u=null,s=o;do{var g=s.lane,y=s.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,v=s;switch(g=t,y=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){f=x.call(y,f,g);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,g=typeof x=="function"?x.call(y,f,g):x,g==null)break e;f=oe({},f,g);break e;case 2:Mt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else y={eventTime:y,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=y,u=f):h=h.next=y,l|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);yn|=l,e.lanes=l,e.memoizedState=f}}function Nc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var Np=new Lf.Component().refs;function ra(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dl={isMounted:function(e){return(e=e._reactInternals)?_n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ze(),i=qt(e),o=bt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Gt(e,o,i),t!==null&&(ut(t,e,i,r),Ji(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ze(),i=qt(e),o=bt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Gt(e,o,i),t!==null&&(ut(t,e,i,r),Ji(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ze(),r=qt(e),i=bt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Gt(e,i,r),t!==null&&(ut(t,e,r,n),Ji(t,e,r))}};function Mc(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!ri(n,r)||!ri(i,o):!0}function Mp(e,t,n){var r=!1,i=Jt,o=t.contextType;return typeof o=="object"&&o!==null?o=et(o):(i=Ae(t)?mn:be.current,r=t.contextTypes,o=(r=r!=null)?tr(e,i):Jt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Dc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&dl.enqueueReplaceState(t,t.state,null)}function ia(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Np,hu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=et(o):(o=Ae(t)?mn:be.current,i.context=tr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ra(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&dl.enqueueReplaceState(i,i.state,null),Po(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function zr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===Np&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function $i(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $c(e){var t=e._init;return t(e._payload)}function Dp(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Yt(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,m,w){return d===null||d.tag!==6?(d=ls(m,p.mode,w),d.return=p,d):(d=i(d,m),d.return=p,d)}function u(p,d,m,w){var k=m.type;return k===Ln?h(p,d,m.props.children,w,m.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Nt&&$c(k)===d.type)?(w=i(d,m.props),w.ref=zr(p,d,m),w.return=p,w):(w=oo(m.type,m.key,m.props,null,p.mode,w),w.ref=zr(p,d,m),w.return=p,w)}function c(p,d,m,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=ss(m,p.mode,w),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function h(p,d,m,w,k){return d===null||d.tag!==7?(d=fn(m,p.mode,w,k),d.return=p,d):(d=i(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ls(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ei:return m=oo(d.type,d.key,d.props,null,p.mode,m),m.ref=zr(p,null,d),m.return=p,m;case In:return d=ss(d,p.mode,m),d.return=p,d;case Nt:var w=d._init;return f(p,w(d._payload),m)}if(Mr(d)||br(d))return d=fn(d,p.mode,m,null),d.return=p,d;$i(p,d)}return null}function g(p,d,m,w){var k=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:s(p,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ei:return m.key===k?u(p,d,m,w):null;case In:return m.key===k?c(p,d,m,w):null;case Nt:return k=m._init,g(p,d,k(m._payload),w)}if(Mr(m)||br(m))return k!==null?null:h(p,d,m,w,null);$i(p,m)}return null}function y(p,d,m,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,s(d,p,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ei:return p=p.get(w.key===null?m:w.key)||null,u(d,p,w,k);case In:return p=p.get(w.key===null?m:w.key)||null,c(d,p,w,k);case Nt:var j=w._init;return y(p,d,m,j(w._payload),k)}if(Mr(w)||br(w))return p=p.get(m)||null,h(d,p,w,k,null);$i(d,w)}return null}function x(p,d,m,w){for(var k=null,j=null,_=d,T=d=0,O=null;_!==null&&T<m.length;T++){_.index>T?(O=_,_=null):O=_.sibling;var E=g(p,_,m[T],w);if(E===null){_===null&&(_=O);break}e&&_&&E.alternate===null&&t(p,_),d=o(E,d,T),j===null?k=E:j.sibling=E,j=E,_=O}if(T===m.length)return n(p,_),te&&on(p,T),k;if(_===null){for(;T<m.length;T++)_=f(p,m[T],w),_!==null&&(d=o(_,d,T),j===null?k=_:j.sibling=_,j=_);return te&&on(p,T),k}for(_=r(p,_);T<m.length;T++)O=y(_,p,T,m[T],w),O!==null&&(e&&O.alternate!==null&&_.delete(O.key===null?T:O.key),d=o(O,d,T),j===null?k=O:j.sibling=O,j=O);return e&&_.forEach(function(N){return t(p,N)}),te&&on(p,T),k}function v(p,d,m,w){var k=br(m);if(typeof k!="function")throw Error(P(150));if(m=k.call(m),m==null)throw Error(P(151));for(var j=k=null,_=d,T=d=0,O=null,E=m.next();_!==null&&!E.done;T++,E=m.next()){_.index>T?(O=_,_=null):O=_.sibling;var N=g(p,_,E.value,w);if(N===null){_===null&&(_=O);break}e&&_&&N.alternate===null&&t(p,_),d=o(N,d,T),j===null?k=N:j.sibling=N,j=N,_=O}if(E.done)return n(p,_),te&&on(p,T),k;if(_===null){for(;!E.done;T++,E=m.next())E=f(p,E.value,w),E!==null&&(d=o(E,d,T),j===null?k=E:j.sibling=E,j=E);return te&&on(p,T),k}for(_=r(p,_);!E.done;T++,E=m.next())E=y(_,p,T,E.value,w),E!==null&&(e&&E.alternate!==null&&_.delete(E.key===null?T:E.key),d=o(E,d,T),j===null?k=E:j.sibling=E,j=E);return e&&_.forEach(function(M){return t(p,M)}),te&&on(p,T),k}function S(p,d,m,w){if(typeof m=="object"&&m!==null&&m.type===Ln&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ei:e:{for(var k=m.key,j=d;j!==null;){if(j.key===k){if(k=m.type,k===Ln){if(j.tag===7){n(p,j.sibling),d=i(j,m.props.children),d.return=p,p=d;break e}}else if(j.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Nt&&$c(k)===j.type){n(p,j.sibling),d=i(j,m.props),d.ref=zr(p,j,m),d.return=p,p=d;break e}n(p,j);break}else t(p,j);j=j.sibling}m.type===Ln?(d=fn(m.props.children,p.mode,w,m.key),d.return=p,p=d):(w=oo(m.type,m.key,m.props,null,p.mode,w),w.ref=zr(p,d,m),w.return=p,p=w)}return l(p);case In:e:{for(j=m.key;d!==null;){if(d.key===j)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=ss(m,p.mode,w),d.return=p,p=d}return l(p);case Nt:return j=m._init,S(p,d,j(m._payload),w)}if(Mr(m))return x(p,d,m,w);if(br(m))return v(p,d,m,w);$i(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=ls(m,p.mode,w),d.return=p,p=d),l(p)):n(p,d)}return S}var rr=Dp(!0),$p=Dp(!1),ki={},vt=tn(ki),si=tn(ki),ai=tn(ki);function un(e){if(e===ki)throw Error(P(174));return e}function mu(e,t){switch(Y(ai,t),Y(si,e),Y(vt,ki),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ms(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ms(t,e)}J(vt),Y(vt,t)}function ir(){J(vt),J(si),J(ai)}function Ap(e){un(ai.current);var t=un(vt.current),n=Ms(t,e.type);t!==n&&(Y(si,e),Y(vt,n))}function gu(e){si.current===e&&(J(vt),J(si))}var re=tn(0);function To(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var es=[];function vu(){for(var e=0;e<es.length;e++)es[e]._workInProgressVersionPrimary=null;es.length=0}var eo=zt.ReactCurrentDispatcher,ts=zt.ReactCurrentBatchConfig,vn=0,ie=null,fe=null,me=null,zo=!1,Qr=!1,ui=0,cv=0;function je(){throw Error(P(321))}function yu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!dt(e[n],t[n]))return!1;return!0}function xu(e,t,n,r,i,o){if(vn=o,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,eo.current=e===null||e.memoizedState===null?hv:mv,e=n(r,i),Qr){o=0;do{if(Qr=!1,ui=0,25<=o)throw Error(P(301));o+=1,me=fe=null,t.updateQueue=null,eo.current=gv,e=n(r,i)}while(Qr)}if(eo.current=Io,t=fe!==null&&fe.next!==null,vn=0,me=fe=ie=null,zo=!1,t)throw Error(P(300));return e}function wu(){var e=ui!==0;return ui=0,e}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?ie.memoizedState=me=e:me=me.next=e,me}function tt(){if(fe===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=me===null?ie.memoizedState:me.next;if(t!==null)me=t,fe=e;else{if(e===null)throw Error(P(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},me===null?ie.memoizedState=me=e:me=me.next=e}return me}function ci(e,t){return typeof t=="function"?t(e):t}function ns(e){var t=tt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=fe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,c=o;do{var h=c.lane;if((vn&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=f,l=r):u=u.next=f,ie.lanes|=h,yn|=h}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=s,dt(r,t.memoizedState)||(De=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ie.lanes|=o,yn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rs(e){var t=tt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);dt(o,t.memoizedState)||(De=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Fp(){}function Bp(e,t){var n=ie,r=tt(),i=t(),o=!dt(r.memoizedState,i);if(o&&(r.memoizedState=i,De=!0),r=r.queue,Su(Up.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,di(9,Hp.bind(null,n,r,i,t),void 0,null),ye===null)throw Error(P(349));vn&30||Wp(n,t,i)}return i}function Wp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hp(e,t,n,r){t.value=n,t.getSnapshot=r,Qp(t)&&Vp(e)}function Up(e,t,n){return n(function(){Qp(t)&&Vp(e)})}function Qp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!dt(e,n)}catch{return!0}}function Vp(e){var t=Pt(e,1);t!==null&&ut(t,e,1,-1)}function Ac(e){var t=pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:e},t.queue=e,e=e.dispatch=pv.bind(null,ie,e),[t.memoizedState,e]}function di(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gp(){return tt().memoizedState}function to(e,t,n,r){var i=pt();ie.flags|=e,i.memoizedState=di(1|t,n,void 0,r===void 0?null:r)}function fl(e,t,n,r){var i=tt();r=r===void 0?null:r;var o=void 0;if(fe!==null){var l=fe.memoizedState;if(o=l.destroy,r!==null&&yu(r,l.deps)){i.memoizedState=di(t,n,o,r);return}}ie.flags|=e,i.memoizedState=di(1|t,n,o,r)}function Fc(e,t){return to(8390656,8,e,t)}function Su(e,t){return fl(2048,8,e,t)}function Kp(e,t){return fl(4,2,e,t)}function qp(e,t){return fl(4,4,e,t)}function Yp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xp(e,t,n){return n=n!=null?n.concat([e]):null,fl(4,4,Yp.bind(null,t,e),n)}function ku(){}function Zp(e,t){var n=tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Jp(e,t){var n=tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function e0(e,t,n){return vn&21?(dt(n,t)||(n=rp(),ie.lanes|=n,yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n)}function dv(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=ts.transition;ts.transition={};try{e(!1),t()}finally{q=n,ts.transition=r}}function t0(){return tt().memoizedState}function fv(e,t,n){var r=qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},n0(e))r0(t,n);else if(n=Lp(e,t,n,r),n!==null){var i=ze();ut(n,e,r,i),i0(n,t,r)}}function pv(e,t,n){var r=qt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(n0(e))r0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,dt(s,l)){var u=t.interleaved;u===null?(i.next=i,pu(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Lp(e,t,i,r),n!==null&&(i=ze(),ut(n,e,r,i),i0(n,t,r))}}function n0(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function r0(e,t){Qr=zo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function i0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ja(e,n)}}var Io={readContext:et,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},hv={readContext:et,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:Fc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,to(4194308,4,Yp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return to(4194308,4,e,t)},useInsertionEffect:function(e,t){return to(4,2,e,t)},useMemo:function(e,t){var n=pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=fv.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:Ac,useDebugValue:ku,useDeferredValue:function(e){return pt().memoizedState=e},useTransition:function(){var e=Ac(!1),t=e[0];return e=dv.bind(null,e[1]),pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,i=pt();if(te){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ye===null)throw Error(P(349));vn&30||Wp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Fc(Up.bind(null,r,o,e),[e]),r.flags|=2048,di(9,Hp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=pt(),t=ye.identifierPrefix;if(te){var n=_t,r=Ct;n=(r&~(1<<32-at(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ui++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=cv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},mv={readContext:et,useCallback:Zp,useContext:et,useEffect:Su,useImperativeHandle:Xp,useInsertionEffect:Kp,useLayoutEffect:qp,useMemo:Jp,useReducer:ns,useRef:Gp,useState:function(){return ns(ci)},useDebugValue:ku,useDeferredValue:function(e){var t=tt();return e0(t,fe.memoizedState,e)},useTransition:function(){var e=ns(ci)[0],t=tt().memoizedState;return[e,t]},useMutableSource:Fp,useSyncExternalStore:Bp,useId:t0,unstable_isNewReconciler:!1},gv={readContext:et,useCallback:Zp,useContext:et,useEffect:Su,useImperativeHandle:Xp,useInsertionEffect:Kp,useLayoutEffect:qp,useMemo:Jp,useReducer:rs,useRef:Gp,useState:function(){return rs(ci)},useDebugValue:ku,useDeferredValue:function(e){var t=tt();return fe===null?t.memoizedState=e:e0(t,fe.memoizedState,e)},useTransition:function(){var e=rs(ci)[0],t=tt().memoizedState;return[e,t]},useMutableSource:Fp,useSyncExternalStore:Bp,useId:t0,unstable_isNewReconciler:!1};function or(e,t){try{var n="",r=t;do n+=Um(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function is(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function oa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vv=typeof WeakMap=="function"?WeakMap:Map;function o0(e,t,n){n=bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ro||(Ro=!0,ma=r),oa(e,t)},n}function l0(e,t,n){n=bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){oa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){oa(e,t),typeof r!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Bc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=zv.bind(null,e,t,n),t.then(e,e))}function Wc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=bt(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e)}var yv=zt.ReactCurrentOwner,De=!1;function Te(e,t,n,r){t.child=e===null?$p(t,null,n,r):rr(t,e.child,n,r)}function Uc(e,t,n,r,i){n=n.render;var o=t.ref;return qn(t,i),r=xu(e,t,n,r,o,i),n=wu(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Tt(e,t,i)):(te&&n&&su(t),t.flags|=1,Te(e,t,r,i),t.child)}function Qc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Tu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,s0(e,t,o,r,i)):(e=oo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:ri,n(l,r)&&e.ref===t.ref)return Tt(e,t,i)}return t.flags|=1,e=Yt(o,r),e.ref=t.ref,e.return=t,t.child=e}function s0(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ri(o,r)&&e.ref===t.ref)if(De=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(De=!0);else return t.lanes=e.lanes,Tt(e,t,i)}return la(e,t,n,r,i)}function a0(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Hn,Ue),Ue|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(Hn,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Y(Hn,Ue),Ue|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Y(Hn,Ue),Ue|=r;return Te(e,t,i,n),t.child}function u0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function la(e,t,n,r,i){var o=Ae(n)?mn:be.current;return o=tr(t,o),qn(t,i),n=xu(e,t,n,r,o,i),r=wu(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Tt(e,t,i)):(te&&r&&su(t),t.flags|=1,Te(e,t,n,i),t.child)}function Vc(e,t,n,r,i){if(Ae(n)){var o=!0;Co(t)}else o=!1;if(qn(t,i),t.stateNode===null)no(e,t),Mp(t,n,r),ia(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=et(c):(c=Ae(n)?mn:be.current,c=tr(t,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Dc(t,l,r,c),Mt=!1;var g=t.memoizedState;l.state=g,Po(t,r,l,i),u=t.memoizedState,s!==r||g!==u||$e.current||Mt?(typeof h=="function"&&(ra(t,n,h,r),u=t.memoizedState),(s=Mt||Mc(t,n,s,r,g,u,c))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Rp(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ot(t.type,s),l.props=c,f=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=et(u):(u=Ae(n)?mn:be.current,u=tr(t,u));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==f||g!==u)&&Dc(t,l,r,u),Mt=!1,g=t.memoizedState,l.state=g,Po(t,r,l,i);var x=t.memoizedState;s!==f||g!==x||$e.current||Mt?(typeof y=="function"&&(ra(t,n,y,r),x=t.memoizedState),(c=Mt||Mc(t,n,c,r,g,x,u)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return sa(e,t,n,r,o,i)}function sa(e,t,n,r,i,o){u0(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&zc(t,n,!1),Tt(e,t,o);r=t.stateNode,yv.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=rr(t,e.child,null,o),t.child=rr(t,null,s,o)):Te(e,t,s,o),t.memoizedState=r.state,i&&zc(t,n,!0),t.child}function c0(e){var t=e.stateNode;t.pendingContext?Tc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tc(e,t.context,!1),mu(e,t.containerInfo)}function Gc(e,t,n,r,i){return nr(),uu(i),t.flags|=256,Te(e,t,n,r),t.child}var aa={dehydrated:null,treeContext:null,retryLane:0};function ua(e){return{baseLanes:e,cachePool:null,transitions:null}}function d0(e,t,n){var r=t.pendingProps,i=re.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(re,i&1),e===null)return ta(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=ml(l,r,0,null),e=fn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ua(n),t.memoizedState=aa,e):ju(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return xv(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Yt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Yt(s,o):(o=fn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ua(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=aa,r}return o=e.child,e=o.sibling,r=Yt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ju(e,t){return t=ml({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ai(e,t,n,r){return r!==null&&uu(r),rr(t,e.child,null,n),e=ju(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xv(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=is(Error(P(422))),Ai(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ml({mode:"visible",children:r.children},i,0,null),o=fn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&rr(t,e.child,null,l),t.child.memoizedState=ua(l),t.memoizedState=aa,o);if(!(t.mode&1))return Ai(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(P(419)),r=is(o,r,void 0),Ai(e,t,l,r)}if(s=(l&e.childLanes)!==0,De||s){if(r=ye,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Pt(e,i),ut(r,e,i,-1))}return Pu(),r=is(Error(P(421))),Ai(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Iv.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Qe=Vt(i.nextSibling),Ve=t,te=!0,st=null,e!==null&&(Ye[Xe++]=Ct,Ye[Xe++]=_t,Ye[Xe++]=gn,Ct=e.id,_t=e.overflow,gn=t),t=ju(t,r.children),t.flags|=4096,t)}function Kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),na(e.return,t,n)}function os(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function f0(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Te(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kc(e,n,t);else if(e.tag===19)Kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(re,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&To(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),os(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&To(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}os(t,!0,n,null,o);break;case"together":os(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function no(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wv(e,t,n){switch(t.tag){case 3:c0(t),nr();break;case 5:Ap(t);break;case 1:Ae(t.type)&&Co(t);break;case 4:mu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(Eo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?d0(e,t,n):(Y(re,re.current&1),e=Tt(e,t,n),e!==null?e.sibling:null);Y(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return f0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,a0(e,t,n)}return Tt(e,t,n)}var p0,ca,h0,m0;p0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ca=function(){};h0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,un(vt.current);var o=null;switch(n){case"input":i=Is(e,i),r=Is(e,r),o=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),o=[];break;case"textarea":i=Ns(e,i),r=Ns(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ko)}Ds(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Yr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Yr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&X("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};m0=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ir(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Sv(e,t,n){var r=t.pendingProps;switch(au(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ae(t.type)&&jo(),Ce(t),null;case 3:return r=t.stateNode,ir(),J($e),J(be),vu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Di(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,st!==null&&(ya(st),st=null))),ca(e,t),Ce(t),null;case 5:gu(t);var i=un(ai.current);if(n=t.type,e!==null&&t.stateNode!=null)h0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Ce(t),null}if(e=un(vt.current),Di(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[mt]=t,r[li]=o,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<$r.length;i++)X($r[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":rc(r,o),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},X("invalid",r);break;case"textarea":oc(r,o),X("invalid",r)}Ds(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Mi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Mi(r.textContent,s,e),i=["children",""+s]):Yr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&X("scroll",r)}switch(n){case"input":Oi(r),ic(r,o,!0);break;case"textarea":Oi(r),lc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ko)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[mt]=t,e[li]=r,p0(e,t,!1,!1),t.stateNode=e;e:{switch(l=$s(n,r),n){case"dialog":X("cancel",e),X("close",e),i=r;break;case"iframe":case"object":case"embed":X("load",e),i=r;break;case"video":case"audio":for(i=0;i<$r.length;i++)X($r[i],e);i=r;break;case"source":X("error",e),i=r;break;case"img":case"image":case"link":X("error",e),X("load",e),i=r;break;case"details":X("toggle",e),i=r;break;case"input":rc(e,r),i=Is(e,r),X("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),X("invalid",e);break;case"textarea":oc(e,r),i=Ns(e,r),X("invalid",e);break;default:i=r}Ds(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Qf(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Hf(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Xr(e,u):typeof u=="number"&&Xr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Yr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&X("scroll",e):u!=null&&Ga(e,o,u,l))}switch(n){case"input":Oi(e),ic(e,r,!1);break;case"textarea":Oi(e),lc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Qn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ko)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)m0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=un(ai.current),un(vt.current),Di(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(o=r.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:Mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return Ce(t),null;case 13:if(J(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Qe!==null&&t.mode&1&&!(t.flags&128))Ip(),nr(),t.flags|=98560,o=!1;else if(o=Di(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[mt]=t}else nr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),o=!1}else st!==null&&(ya(st),st=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?pe===0&&(pe=3):Pu())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return ir(),ca(e,t),e===null&&ii(t.stateNode.containerInfo),Ce(t),null;case 10:return fu(t.type._context),Ce(t),null;case 17:return Ae(t.type)&&jo(),Ce(t),null;case 19:if(J(re),o=t.memoizedState,o===null)return Ce(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Ir(o,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=To(e),l!==null){for(t.flags|=128,Ir(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(re,re.current&1|2),t.child}e=e.sibling}o.tail!==null&&ae()>lr&&(t.flags|=128,r=!0,Ir(o,!1),t.lanes=4194304)}else{if(!r)if(e=To(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ir(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!te)return Ce(t),null}else 2*ae()-o.renderingStartTime>lr&&n!==1073741824&&(t.flags|=128,r=!0,Ir(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ae(),t.sibling=null,n=re.current,Y(re,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return Ou(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function kv(e,t){switch(au(t),t.tag){case 1:return Ae(t.type)&&jo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ir(),J($e),J(be),vu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gu(t),null;case 13:if(J(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(re),null;case 4:return ir(),null;case 10:return fu(t.type._context),null;case 22:case 23:return Ou(),null;case 24:return null;default:return null}}var Fi=!1,_e=!1,jv=typeof WeakSet=="function"?WeakSet:Set,L=null;function Wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function da(e,t,n){try{n()}catch(r){se(e,t,r)}}var qc=!1;function Cv(e,t){if(Ks=xo,e=xp(),lu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,h=0,f=e,g=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(s=l+i),f!==o||r!==0&&f.nodeType!==3||(u=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(y=f.firstChild)!==null;)g=f,f=y;for(;;){if(f===e)break t;if(g===n&&++c===i&&(s=l),g===o&&++h===r&&(u=l),(y=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=y}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(qs={focusedElem:e,selectionRange:n},xo=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,S=x.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:ot(t.type,v),S);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){se(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return x=qc,qc=!1,x}function Vr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&da(t,n,o)}i=i.next}while(i!==r)}}function pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function g0(e){var t=e.alternate;t!==null&&(e.alternate=null,g0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[li],delete t[Zs],delete t[lv],delete t[sv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function v0(e){return e.tag===5||e.tag===3||e.tag===4}function Yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||v0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ko));else if(r!==4&&(e=e.child,e!==null))for(pa(e,t,n),e=e.sibling;e!==null;)pa(e,t,n),e=e.sibling}function ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ha(e,t,n),e=e.sibling;e!==null;)ha(e,t,n),e=e.sibling}var we=null,lt=!1;function Lt(e,t,n){for(n=n.child;n!==null;)y0(e,t,n),n=n.sibling}function y0(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:_e||Wn(n,t);case 6:var r=we,i=lt;we=null,Lt(e,t,n),we=r,lt=i,we!==null&&(lt?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(lt?(e=we,n=n.stateNode,e.nodeType===8?Zl(e.parentNode,n):e.nodeType===1&&Zl(e,n),ti(e)):Zl(we,n.stateNode));break;case 4:r=we,i=lt,we=n.stateNode.containerInfo,lt=!0,Lt(e,t,n),we=r,lt=i;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&da(n,t,l),i=i.next}while(i!==r)}Lt(e,t,n);break;case 1:if(!_e&&(Wn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){se(n,t,s)}Lt(e,t,n);break;case 21:Lt(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,Lt(e,t,n),_e=r):Lt(e,t,n);break;default:Lt(e,t,n)}}function Xc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jv),t.forEach(function(r){var i=Lv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function it(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:we=s.stateNode,lt=!1;break e;case 3:we=s.stateNode.containerInfo,lt=!0;break e;case 4:we=s.stateNode.containerInfo,lt=!0;break e}s=s.return}if(we===null)throw Error(P(160));y0(o,l,i),we=null,lt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){se(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)x0(t,e),t=t.sibling}function x0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),ft(e),r&4){try{Vr(3,e,e.return),pl(3,e)}catch(v){se(e,e.return,v)}try{Vr(5,e,e.return)}catch(v){se(e,e.return,v)}}break;case 1:it(t,e),ft(e),r&512&&n!==null&&Wn(n,n.return);break;case 5:if(it(t,e),ft(e),r&512&&n!==null&&Wn(n,n.return),e.flags&32){var i=e.stateNode;try{Xr(i,"")}catch(v){se(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Ff(i,o),$s(s,l);var c=$s(s,o);for(l=0;l<u.length;l+=2){var h=u[l],f=u[l+1];h==="style"?Qf(i,f):h==="dangerouslySetInnerHTML"?Hf(i,f):h==="children"?Xr(i,f):Ga(i,h,f,c)}switch(s){case"input":Ls(i,o);break;case"textarea":Bf(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Qn(i,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?Qn(i,!!o.multiple,o.defaultValue,!0):Qn(i,!!o.multiple,o.multiple?[]:"",!1))}i[li]=o}catch(v){se(e,e.return,v)}}break;case 6:if(it(t,e),ft(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){se(e,e.return,v)}}break;case 3:if(it(t,e),ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ti(t.containerInfo)}catch(v){se(e,e.return,v)}break;case 4:it(t,e),ft(e);break;case 13:it(t,e),ft(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(bu=ae())),r&4&&Xc(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(c=_e)||h,it(t,e),_e=c):it(t,e),ft(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(L=e,h=e.child;h!==null;){for(f=L=h;L!==null;){switch(g=L,y=g.child,g.tag){case 0:case 11:case 14:case 15:Vr(4,g,g.return);break;case 1:Wn(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){se(r,n,v)}}break;case 5:Wn(g,g.return);break;case 22:if(g.memoizedState!==null){Jc(f);continue}}y!==null?(y.return=g,L=y):Jc(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,u=f.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Uf("display",l))}catch(v){se(e,e.return,v)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){se(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:it(t,e),ft(e),r&4&&Xc(e);break;case 21:break;default:it(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(v0(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xr(i,""),r.flags&=-33);var o=Yc(e);ha(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Yc(e);pa(e,s,l);break;default:throw Error(P(161))}}catch(u){se(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _v(e,t,n){L=e,w0(e)}function w0(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Fi;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||_e;s=Fi;var c=_e;if(Fi=l,(_e=u)&&!c)for(L=i;L!==null;)l=L,u=l.child,l.tag===22&&l.memoizedState!==null?ed(i):u!==null?(u.return=l,L=u):ed(i);for(;o!==null;)L=o,w0(o),o=o.sibling;L=i,Fi=s,_e=c}Zc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):Zc(e)}}function Zc(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_e||pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Nc(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Nc(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ti(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}_e||t.flags&512&&fa(t)}catch(g){se(t,t.return,g)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Jc(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function ed(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pl(4,t)}catch(u){se(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){se(t,i,u)}}var o=t.return;try{fa(t)}catch(u){se(t,o,u)}break;case 5:var l=t.return;try{fa(t)}catch(u){se(t,l,u)}}}catch(u){se(t,t.return,u)}if(t===e){L=null;break}var s=t.sibling;if(s!==null){s.return=t.return,L=s;break}L=t.return}}var bv=Math.ceil,Lo=zt.ReactCurrentDispatcher,Cu=zt.ReactCurrentOwner,Je=zt.ReactCurrentBatchConfig,V=0,ye=null,ce=null,Se=0,Ue=0,Hn=tn(0),pe=0,fi=null,yn=0,hl=0,_u=0,Gr=null,Me=null,bu=0,lr=1/0,wt=null,Ro=!1,ma=null,Kt=null,Bi=!1,Bt=null,No=0,Kr=0,ga=null,ro=-1,io=0;function ze(){return V&6?ae():ro!==-1?ro:ro=ae()}function qt(e){return e.mode&1?V&2&&Se!==0?Se&-Se:uv.transition!==null?(io===0&&(io=rp()),io):(e=q,e!==0||(e=window.event,e=e===void 0?16:cp(e.type)),e):1}function ut(e,t,n,r){if(50<Kr)throw Kr=0,ga=null,Error(P(185));xi(e,n,r),(!(V&2)||e!==ye)&&(e===ye&&(!(V&2)&&(hl|=n),pe===4&&At(e,Se)),Fe(e,r),n===1&&V===0&&!(t.mode&1)&&(lr=ae()+500,cl&&nn()))}function Fe(e,t){var n=e.callbackNode;ug(e,t);var r=yo(e,e===ye?Se:0);if(r===0)n!==null&&uc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&uc(n),t===1)e.tag===0?av(td.bind(null,e)):Pp(td.bind(null,e)),iv(function(){!(V&6)&&nn()}),n=null;else{switch(ip(r)){case 1:n=Za;break;case 4:n=tp;break;case 16:n=vo;break;case 536870912:n=np;break;default:n=vo}n=O0(n,S0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function S0(e,t){if(ro=-1,io=0,V&6)throw Error(P(327));var n=e.callbackNode;if(Yn()&&e.callbackNode!==n)return null;var r=yo(e,e===ye?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Mo(e,r);else{t=r;var i=V;V|=2;var o=j0();(ye!==e||Se!==t)&&(wt=null,lr=ae()+500,dn(e,t));do try{Pv();break}catch(s){k0(e,s)}while(!0);du(),Lo.current=o,V=i,ce!==null?t=0:(ye=null,Se=0,t=pe)}if(t!==0){if(t===2&&(i=Hs(e),i!==0&&(r=i,t=va(e,i))),t===1)throw n=fi,dn(e,0),At(e,r),Fe(e,ae()),n;if(t===6)At(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ev(i)&&(t=Mo(e,r),t===2&&(o=Hs(e),o!==0&&(r=o,t=va(e,o))),t===1))throw n=fi,dn(e,0),At(e,r),Fe(e,ae()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:ln(e,Me,wt);break;case 3:if(At(e,r),(r&130023424)===r&&(t=bu+500-ae(),10<t)){if(yo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ze(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Xs(ln.bind(null,e,Me,wt),t);break}ln(e,Me,wt);break;case 4:if(At(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-at(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bv(r/1960))-r,10<r){e.timeoutHandle=Xs(ln.bind(null,e,Me,wt),r);break}ln(e,Me,wt);break;case 5:ln(e,Me,wt);break;default:throw Error(P(329))}}}return Fe(e,ae()),e.callbackNode===n?S0.bind(null,e):null}function va(e,t){var n=Gr;return e.current.memoizedState.isDehydrated&&(dn(e,t).flags|=256),e=Mo(e,t),e!==2&&(t=Me,Me=n,t!==null&&ya(t)),e}function ya(e){Me===null?Me=e:Me.push.apply(Me,e)}function Ev(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!dt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~_u,t&=~hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function td(e){if(V&6)throw Error(P(327));Yn();var t=yo(e,0);if(!(t&1))return Fe(e,ae()),null;var n=Mo(e,t);if(e.tag!==0&&n===2){var r=Hs(e);r!==0&&(t=r,n=va(e,r))}if(n===1)throw n=fi,dn(e,0),At(e,t),Fe(e,ae()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ln(e,Me,wt),Fe(e,ae()),null}function Eu(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(lr=ae()+500,cl&&nn())}}function xn(e){Bt!==null&&Bt.tag===0&&!(V&6)&&Yn();var t=V;V|=1;var n=Je.transition,r=q;try{if(Je.transition=null,q=1,e)return e()}finally{q=r,Je.transition=n,V=t,!(V&6)&&nn()}}function Ou(){Ue=Hn.current,J(Hn)}function dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rv(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(au(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jo();break;case 3:ir(),J($e),J(be),vu();break;case 5:gu(r);break;case 4:ir();break;case 13:J(re);break;case 19:J(re);break;case 10:fu(r.type._context);break;case 22:case 23:Ou()}n=n.return}if(ye=e,ce=e=Yt(e.current,null),Se=Ue=t,pe=0,fi=null,_u=hl=yn=0,Me=Gr=null,an!==null){for(t=0;t<an.length;t++)if(n=an[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}an=null}return e}function k0(e,t){do{var n=ce;try{if(du(),eo.current=Io,zo){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zo=!1}if(vn=0,me=fe=ie=null,Qr=!1,ui=0,Cu.current=null,n===null||n.return===null){pe=1,fi=t,ce=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=Se,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=s,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Wc(l);if(y!==null){y.flags&=-257,Hc(y,l,s,o,t),y.mode&1&&Bc(o,c,t),t=y,u=c;var x=t.updateQueue;if(x===null){var v=new Set;v.add(u),t.updateQueue=v}else x.add(u);break e}else{if(!(t&1)){Bc(o,c,t),Pu();break e}u=Error(P(426))}}else if(te&&s.mode&1){var S=Wc(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Hc(S,l,s,o,t),uu(or(u,s));break e}}o=u=or(u,s),pe!==4&&(pe=2),Gr===null?Gr=[o]:Gr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=o0(o,u,t);Rc(o,p);break e;case 1:s=u;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Kt===null||!Kt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=l0(o,s,t);Rc(o,w);break e}}o=o.return}while(o!==null)}_0(n)}catch(k){t=k,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(!0)}function j0(){var e=Lo.current;return Lo.current=Io,e===null?Io:e}function Pu(){(pe===0||pe===3||pe===2)&&(pe=4),ye===null||!(yn&268435455)&&!(hl&268435455)||At(ye,Se)}function Mo(e,t){var n=V;V|=2;var r=j0();(ye!==e||Se!==t)&&(wt=null,dn(e,t));do try{Ov();break}catch(i){k0(e,i)}while(!0);if(du(),V=n,Lo.current=r,ce!==null)throw Error(P(261));return ye=null,Se=0,pe}function Ov(){for(;ce!==null;)C0(ce)}function Pv(){for(;ce!==null&&!eg();)C0(ce)}function C0(e){var t=E0(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?_0(e):ce=t,Cu.current=null}function _0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=kv(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,ce=null;return}}else if(n=Sv(n,t,Ue),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);pe===0&&(pe=5)}function ln(e,t,n){var r=q,i=Je.transition;try{Je.transition=null,q=1,Tv(e,t,n,r)}finally{Je.transition=i,q=r}return null}function Tv(e,t,n,r){do Yn();while(Bt!==null);if(V&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(cg(e,o),e===ye&&(ce=ye=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bi||(Bi=!0,O0(vo,function(){return Yn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Je.transition,Je.transition=null;var l=q;q=1;var s=V;V|=4,Cu.current=null,Cv(e,n),x0(n,e),Yg(qs),xo=!!Ks,qs=Ks=null,e.current=n,_v(n),tg(),V=s,q=l,Je.transition=o}else e.current=n;if(Bi&&(Bi=!1,Bt=e,No=i),o=e.pendingLanes,o===0&&(Kt=null),ig(n.stateNode),Fe(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ro)throw Ro=!1,e=ma,ma=null,e;return No&1&&e.tag!==0&&Yn(),o=e.pendingLanes,o&1?e===ga?Kr++:(Kr=0,ga=e):Kr=0,nn(),null}function Yn(){if(Bt!==null){var e=ip(No),t=Je.transition,n=q;try{if(Je.transition=null,q=16>e?16:e,Bt===null)var r=!1;else{if(e=Bt,Bt=null,No=0,V&6)throw Error(P(331));var i=V;for(V|=4,L=e.current;L!==null;){var o=L,l=o.child;if(L.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(L=c;L!==null;){var h=L;switch(h.tag){case 0:case 11:case 15:Vr(8,h,o)}var f=h.child;if(f!==null)f.return=h,L=f;else for(;L!==null;){h=L;var g=h.sibling,y=h.return;if(g0(h),h===c){L=null;break}if(g!==null){g.return=y,L=g;break}L=y}}}var x=o.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}L=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,L=l;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Vr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,L=p;break e}L=o.return}}var d=e.current;for(L=d;L!==null;){l=L;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,L=m;else e:for(l=d;L!==null;){if(s=L,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:pl(9,s)}}catch(k){se(s,s.return,k)}if(s===l){L=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,L=w;break e}L=s.return}}if(V=i,nn(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(ol,e)}catch{}r=!0}return r}finally{q=n,Je.transition=t}}return!1}function nd(e,t,n){t=or(n,t),t=o0(e,t,1),e=Gt(e,t,1),t=ze(),e!==null&&(xi(e,1,t),Fe(e,t))}function se(e,t,n){if(e.tag===3)nd(e,e,n);else for(;t!==null;){if(t.tag===3){nd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kt===null||!Kt.has(r))){e=or(n,e),e=l0(t,e,1),t=Gt(t,e,1),e=ze(),t!==null&&(xi(t,1,e),Fe(t,e));break}}t=t.return}}function zv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(Se&n)===n&&(pe===4||pe===3&&(Se&130023424)===Se&&500>ae()-bu?dn(e,0):_u|=n),Fe(e,t)}function b0(e,t){t===0&&(e.mode&1?(t=zi,zi<<=1,!(zi&130023424)&&(zi=4194304)):t=1);var n=ze();e=Pt(e,t),e!==null&&(xi(e,t,n),Fe(e,n))}function Iv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),b0(e,n)}function Lv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),b0(e,n)}var E0;E0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)De=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return De=!1,wv(e,t,n);De=!!(e.flags&131072)}else De=!1,te&&t.flags&1048576&&Tp(t,bo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;no(e,t),e=t.pendingProps;var i=tr(t,be.current);qn(t,n),i=xu(null,t,r,e,i,n);var o=wu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(o=!0,Co(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hu(t),i.updater=dl,t.stateNode=i,i._reactInternals=t,ia(t,r,e,n),t=sa(null,t,r,!0,o,n)):(t.tag=0,te&&o&&su(t),Te(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(no(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Nv(r),e=ot(r,e),i){case 0:t=la(null,t,r,e,n);break e;case 1:t=Vc(null,t,r,e,n);break e;case 11:t=Uc(null,t,r,e,n);break e;case 14:t=Qc(null,t,r,ot(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),la(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),Vc(e,t,r,i,n);case 3:e:{if(c0(t),e===null)throw Error(P(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Rp(e,t),Po(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=or(Error(P(423)),t),t=Gc(e,t,r,n,i);break e}else if(r!==i){i=or(Error(P(424)),t),t=Gc(e,t,r,n,i);break e}else for(Qe=Vt(t.stateNode.containerInfo.firstChild),Ve=t,te=!0,st=null,n=$p(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nr(),r===i){t=Tt(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return Ap(t),e===null&&ta(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Ys(r,i)?l=null:o!==null&&Ys(r,o)&&(t.flags|=32),u0(e,t),Te(e,t,l,n),t.child;case 6:return e===null&&ta(t),null;case 13:return d0(e,t,n);case 4:return mu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rr(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),Uc(e,t,r,i,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,Y(Eo,r._currentValue),r._currentValue=l,o!==null)if(dt(o.value,l)){if(o.children===i.children&&!$e.current){t=Tt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=bt(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),na(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(P(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),na(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Te(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,qn(t,n),i=et(i),r=r(i),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,i=ot(r,t.pendingProps),i=ot(r.type,i),Qc(e,t,r,i,n);case 15:return s0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),no(e,t),t.tag=1,Ae(r)?(e=!0,Co(t)):e=!1,qn(t,n),Mp(t,r,i),ia(t,r,i,n),sa(null,t,r,!0,e,n);case 19:return f0(e,t,n);case 22:return a0(e,t,n)}throw Error(P(156,t.tag))};function O0(e,t){return ep(e,t)}function Rv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,r){return new Rv(e,t,n,r)}function Tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nv(e){if(typeof e=="function")return Tu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qa)return 11;if(e===Ya)return 14}return 2}function Yt(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oo(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Tu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ln:return fn(n.children,i,o,t);case Ka:l=8,i|=8;break;case Os:return e=Ze(12,n,t,i|2),e.elementType=Os,e.lanes=o,e;case Ps:return e=Ze(13,n,t,i),e.elementType=Ps,e.lanes=o,e;case Ts:return e=Ze(19,n,t,i),e.elementType=Ts,e.lanes=o,e;case Df:return ml(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Nf:l=10;break e;case Mf:l=9;break e;case qa:l=11;break e;case Ya:l=14;break e;case Nt:l=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Ze(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function fn(e,t,n,r){return e=Ze(7,e,r,t),e.lanes=n,e}function ml(e,t,n,r){return e=Ze(22,e,r,t),e.elementType=Df,e.lanes=n,e.stateNode={isHidden:!1},e}function ls(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function ss(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bl(0),this.expirationTimes=Bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zu(e,t,n,r,i,o,l,s,u){return e=new Mv(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ze(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hu(o),e}function Dv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function P0(e){if(!e)return Jt;e=e._reactInternals;e:{if(_n(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Ae(n))return Op(e,n,t)}return t}function T0(e,t,n,r,i,o,l,s,u){return e=zu(n,r,!0,e,i,o,l,s,u),e.context=P0(null),n=e.current,r=ze(),i=qt(n),o=bt(r,i),o.callback=t??null,Gt(n,o,i),e.current.lanes=i,xi(e,i,r),Fe(e,r),e}function gl(e,t,n,r){var i=t.current,o=ze(),l=qt(i);return n=P0(n),t.context===null?t.context=n:t.pendingContext=n,t=bt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gt(i,t,l),e!==null&&(ut(e,i,l,o),Ji(e,i,l)),l}function Do(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Iu(e,t){rd(e,t),(e=e.alternate)&&rd(e,t)}function $v(){return null}var z0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Lu(e){this._internalRoot=e}vl.prototype.render=Lu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));gl(e,t,null,null)};vl.prototype.unmount=Lu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){gl(null,e,null,null)}),t[Ot]=null}};function vl(e){this._internalRoot=e}vl.prototype.unstable_scheduleHydration=function(e){if(e){var t=sp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&t!==0&&t<$t[n].priority;n++);$t.splice(n,0,e),n===0&&up(e)}};function Ru(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function id(){}function Av(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Do(l);o.call(c)}}var l=T0(t,r,e,0,null,!1,!1,"",id);return e._reactRootContainer=l,e[Ot]=l.current,ii(e.nodeType===8?e.parentNode:e),xn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=Do(u);s.call(c)}}var u=zu(e,0,!1,null,null,!1,!1,"",id);return e._reactRootContainer=u,e[Ot]=u.current,ii(e.nodeType===8?e.parentNode:e),xn(function(){gl(t,u,n,r)}),u}function xl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=Do(l);s.call(u)}}gl(t,l,e,i)}else l=Av(n,t,e,i,r);return Do(l)}op=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Dr(t.pendingLanes);n!==0&&(Ja(t,n|1),Fe(t,ae()),!(V&6)&&(lr=ae()+500,nn()))}break;case 13:xn(function(){var r=Pt(e,1);if(r!==null){var i=ze();ut(r,e,1,i)}}),Iu(e,1)}};eu=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var n=ze();ut(t,e,134217728,n)}Iu(e,134217728)}};lp=function(e){if(e.tag===13){var t=qt(e),n=Pt(e,t);if(n!==null){var r=ze();ut(n,e,t,r)}Iu(e,t)}};sp=function(){return q};ap=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};Fs=function(e,t,n){switch(t){case"input":if(Ls(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ul(r);if(!i)throw Error(P(90));Af(r),Ls(r,i)}}}break;case"textarea":Bf(e,n);break;case"select":t=n.value,t!=null&&Qn(e,!!n.multiple,t,!1)}};Kf=Eu;qf=xn;var Fv={usingClientEntryPoint:!1,Events:[Si,Dn,ul,Vf,Gf,Eu]},Lr={findFiberByHostInstance:sn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Bv={bundleType:Lr.bundleType,version:Lr.version,rendererPackageName:Lr.rendererPackageName,rendererConfig:Lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zf(e),e===null?null:e.stateNode},findFiberByHostInstance:Lr.findFiberByHostInstance||$v,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{ol=Wi.inject(Bv),gt=Wi}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fv;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ru(t))throw Error(P(200));return Dv(e,t,null,n)};Ke.createRoot=function(e,t){if(!Ru(e))throw Error(P(299));var n=!1,r="",i=z0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=zu(e,1,!1,null,null,n,!1,r,i),e[Ot]=t.current,ii(e.nodeType===8?e.parentNode:e),new Lu(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Zf(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return xn(e)};Ke.hydrate=function(e,t,n){if(!yl(t))throw Error(P(200));return xl(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!Ru(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=z0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=T0(t,null,e,1,n??null,i,!1,o,l),e[Ot]=t.current,ii(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new vl(t)};Ke.render=function(e,t,n){if(!yl(t))throw Error(P(200));return xl(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!yl(e))throw Error(P(40));return e._reactRootContainer?(xn(function(){xl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1};Ke.unstable_batchedUpdates=Eu;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yl(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return xl(e,t,n,!1,r)};Ke.version="18.2.0-next-9e3b772b8-20220608";function I0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I0)}catch(e){console.error(e)}}I0(),Tf.exports=Ke;var Wv=Tf.exports,od=Wv;bs.createRoot=od.createRoot,bs.hydrateRoot=od.hydrateRoot;/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pi(){return pi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pi.apply(this,arguments)}var Wt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Wt||(Wt={}));const ld="popstate";function Hv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:s}=r.location;return xa("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:R0(i)}return Qv(t,n,null,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function L0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Uv(){return Math.random().toString(36).substr(2,8)}function sd(e,t){return{usr:e.state,key:e.key,idx:t}}function xa(e,t,n,r){return n===void 0&&(n=null),pi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?kr(t):t,{state:n,key:t&&t.key||r||Uv()})}function R0(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function kr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Qv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=Wt.Pop,u=null,c=h();c==null&&(c=0,l.replaceState(pi({},l.state,{idx:c}),""));function h(){return(l.state||{idx:null}).idx}function f(){s=Wt.Pop;let S=h(),p=S==null?null:S-c;c=S,u&&u({action:s,location:v.location,delta:p})}function g(S,p){s=Wt.Push;let d=xa(v.location,S,p);n&&n(d,S),c=h()+1;let m=sd(d,c),w=v.createHref(d);try{l.pushState(m,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}o&&u&&u({action:s,location:v.location,delta:1})}function y(S,p){s=Wt.Replace;let d=xa(v.location,S,p);n&&n(d,S),c=h();let m=sd(d,c),w=v.createHref(d);l.replaceState(m,"",w),o&&u&&u({action:s,location:v.location,delta:0})}function x(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof S=="string"?S:R0(S);return d=d.replace(/ $/,"%20"),he(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let v={get action(){return s},get location(){return e(i,l)},listen(S){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(ld,f),u=S,()=>{i.removeEventListener(ld,f),u=null}},createHref(S){return t(i,S)},createURL:x,encodeLocation(S){let p=x(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:y,go(S){return l.go(S)}};return v}var ad;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ad||(ad={}));function Vv(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?kr(t):t,i=D0(r.pathname||"/",n);if(i==null)return null;let o=N0(e);Gv(o);let l=null;for(let s=0;l==null&&s<o.length;++s){let u=o1(i);l=n1(o[s],u)}return l}function N0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let u={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(he(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=pn([r,u.relativePath]),h=n.concat(u);o.children&&o.children.length>0&&(he(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),N0(o.children,t,h,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:e1(c,o.index),routesMeta:h})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let u of M0(o.path))i(o,l,u)}),t}function M0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=M0(r.join("/")),s=[];return s.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&s.push(...l),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function Gv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:t1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Kv=/^:[\w-]+$/,qv=3,Yv=2,Xv=1,Zv=10,Jv=-2,ud=e=>e==="*";function e1(e,t){let n=e.split("/"),r=n.length;return n.some(ud)&&(r+=Jv),t&&(r+=Yv),n.filter(i=>!ud(i)).reduce((i,o)=>i+(Kv.test(o)?qv:o===""?Xv:Zv),r)}function t1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function n1(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let s=n[l],u=l===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",h=r1({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c);if(!h)return null;Object.assign(r,h.params);let f=s.route;o.push({params:r,pathname:pn([i,h.pathname]),pathnameBase:d1(pn([i,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(i=pn([i,h.pathnameBase]))}return o}function r1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=i1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:g,isOptional:y}=h;if(g==="*"){let v=s[f]||"";l=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const x=s[f];return y&&!x?c[g]=void 0:c[g]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function i1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),L0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function o1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return L0(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function D0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function l1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?kr(e):e;return{pathname:n?n.startsWith("/")?n:s1(n,t):t,search:f1(r),hash:p1(i)}}function s1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function as(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function a1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function u1(e,t){let n=a1(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function c1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=kr(e):(i=pi({},e),he(!i.pathname||!i.pathname.includes("?"),as("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),as("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),as("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(l==null)s=n;else{let f=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}s=f>=0?t[f]:"/"}let u=l1(i,s),c=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const pn=e=>e.join("/").replace(/\/\/+/g,"/"),d1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),f1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,p1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function h1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const $0=["post","put","patch","delete"];new Set($0);const m1=["get",...$0];new Set(m1);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hi(){return hi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hi.apply(this,arguments)}const Nu=C.createContext(null),g1=C.createContext(null),wl=C.createContext(null),Sl=C.createContext(null),bn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),A0=C.createContext(null);function kl(){return C.useContext(Sl)!=null}function Mu(){return kl()||he(!1),C.useContext(Sl).location}function F0(e){C.useContext(wl).static||C.useLayoutEffect(e)}function yt(){let{isDataRoute:e}=C.useContext(bn);return e?T1():v1()}function v1(){kl()||he(!1);let e=C.useContext(Nu),{basename:t,future:n,navigator:r}=C.useContext(wl),{matches:i}=C.useContext(bn),{pathname:o}=Mu(),l=JSON.stringify(u1(i,n.v7_relativeSplatPath)),s=C.useRef(!1);return F0(()=>{s.current=!0}),C.useCallback(function(c,h){if(h===void 0&&(h={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let f=c1(c,JSON.parse(l),o,h.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:pn([t,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[t,r,l,o,e])}function y1(){let{matches:e}=C.useContext(bn),t=e[e.length-1];return t?t.params:{}}function x1(e,t){return w1(e,t)}function w1(e,t,n,r){kl()||he(!1);let{navigator:i}=C.useContext(wl),{matches:o}=C.useContext(bn),l=o[o.length-1],s=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let c=Mu(),h;if(t){var f;let S=typeof t=="string"?kr(t):t;u==="/"||(f=S.pathname)!=null&&f.startsWith(u)||he(!1),h=S}else h=c;let g=h.pathname||"/",y=g;if(u!=="/"){let S=u.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(S.length).join("/")}let x=Vv(e,{pathname:y}),v=_1(x&&x.map(S=>Object.assign({},S,{params:Object.assign({},s,S.params),pathname:pn([u,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?u:pn([u,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&v?C.createElement(Sl.Provider,{value:{location:hi({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Wt.Pop}},v):v}function S1(){let e=P1(),t=h1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,null)}const k1=C.createElement(S1,null);class j1 extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(bn.Provider,{value:this.props.routeContext},C.createElement(A0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function C1(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(Nu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(bn.Provider,{value:t},r)}function _1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let h=l.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);h>=0||he(!1),l=l.slice(0,Math.min(l.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<l.length;h++){let f=l[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:g,errors:y}=n,x=f.route.loader&&g[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||x){u=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((h,f,g)=>{let y,x=!1,v=null,S=null;n&&(y=s&&f.route.id?s[f.route.id]:void 0,v=f.route.errorElement||k1,u&&(c<0&&g===0?(z1("route-fallback",!1),x=!0,S=null):c===g&&(x=!0,S=f.route.hydrateFallbackElement||null)));let p=t.concat(l.slice(0,g+1)),d=()=>{let m;return y?m=v:x?m=S:f.route.Component?m=C.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=h,C.createElement(C1,{match:f,routeContext:{outlet:h,matches:p,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?C.createElement(j1,{location:n.location,revalidation:n.revalidation,component:v,error:y,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var B0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(B0||{}),$o=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($o||{});function b1(e){let t=C.useContext(Nu);return t||he(!1),t}function E1(e){let t=C.useContext(g1);return t||he(!1),t}function O1(e){let t=C.useContext(bn);return t||he(!1),t}function W0(e){let t=O1(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function P1(){var e;let t=C.useContext(A0),n=E1($o.UseRouteError),r=W0($o.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function T1(){let{router:e}=b1(B0.UseNavigateStable),t=W0($o.UseNavigateStable),n=C.useRef(!1);return F0(()=>{n.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,hi({fromRouteId:t},o)))},[e,t])}const cd={};function z1(e,t,n){!t&&!cd[e]&&(cd[e]=!0)}function Pe(e){he(!1)}function I1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Wt.Pop,navigator:o,static:l=!1,future:s}=e;kl()&&he(!1);let u=t.replace(/^\/*/,"/"),c=C.useMemo(()=>({basename:u,navigator:o,static:l,future:hi({v7_relativeSplatPath:!1},s)}),[u,s,o,l]);typeof r=="string"&&(r=kr(r));let{pathname:h="/",search:f="",hash:g="",state:y=null,key:x="default"}=r,v=C.useMemo(()=>{let S=D0(h,u);return S==null?null:{location:{pathname:S,search:f,hash:g,state:y,key:x},navigationType:i}},[u,h,f,g,y,x,i]);return v==null?null:C.createElement(wl.Provider,{value:c},C.createElement(Sl.Provider,{children:n,value:v}))}function L1(e){let{children:t,location:n}=e;return x1(wa(t),n)}new Promise(()=>{});function wa(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,wa(r.props.children,o));return}r.type!==Pe&&he(!1),!r.props.index||!r.props.children||he(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=wa(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const R1="6";try{window.__reactRouterVersion=R1}catch{}const N1="startTransition",dd=Im[N1];function M1(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=Hv({window:i,v5Compat:!0}));let l=o.current,[s,u]=C.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},h=C.useCallback(f=>{c&&dd?dd(()=>u(f)):u(f)},[u,c]);return C.useLayoutEffect(()=>l.listen(h),[l,h]),C.createElement(I1,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}var fd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(fd||(fd={}));var pd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(pd||(pd={}));const D1="/assets/image4-49UFiRL9.svg",$1="/assets/image2-D3-QMNJW.svg",A1="/assets/image3-Dw7jqlw9.svg",F1="data:image/svg+xml,%3csvg%20width='66'%20height='66'%20viewBox='0%200%2066%2066'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='33'%20cy='33'%20r='30.5'%20transform='rotate(-180%2033%2033)'%20stroke='white'%20stroke-width='5'/%3e%3cpath%20d='M39.375%2022.2219V42.7039C39.3749%2043.0664%2039.2404%2043.4208%2038.9886%2043.7222C38.7368%2044.0237%2038.3789%2044.2586%2037.9602%2044.3973C37.5416%2044.536%2037.0809%2044.5723%2036.6364%2044.5016C36.1919%2044.4309%2035.7836%2044.2564%2035.4631%2044.0001L22.6619%2033.7591C22.2323%2033.4153%2021.9909%2032.949%2021.9909%2032.4629C21.9909%2031.9768%2022.2323%2031.5105%2022.6619%2031.1667L35.4631%2020.9257C35.7836%2020.6694%2036.1919%2020.4949%2036.6364%2020.4242C37.0809%2020.3535%2037.5416%2020.3898%2037.9602%2020.5285C38.3789%2020.6672%2038.7368%2020.9021%2038.9886%2021.2036C39.2404%2021.505%2039.3749%2021.8594%2039.375%2022.2219Z'%20fill='white'/%3e%3c/svg%3e",B1="data:image/svg+xml,%3csvg%20width='66'%20height='66'%20viewBox='0%200%2066%2066'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='33'%20cy='33'%20r='30.5'%20stroke='white'%20stroke-width='5'/%3e%3cpath%20d='M26.625%2043.7781V23.2961C26.6251%2022.9336%2026.7596%2022.5792%2027.0114%2022.2778C27.2632%2021.9763%2027.6211%2021.7414%2028.0397%2021.6027C28.4584%2021.464%2028.9191%2021.4277%2029.3636%2021.4984C29.8081%2021.5691%2030.2164%2021.7436%2030.5369%2021.9999L43.3381%2032.2409C43.7677%2032.5847%2044.0091%2033.051%2044.0091%2033.5371C44.0091%2034.0232%2043.7677%2034.4895%2043.3381%2034.8333L30.5369%2045.0743C30.2164%2045.3306%2029.8081%2045.5051%2029.3636%2045.5758C28.9191%2045.6465%2028.4584%2045.6102%2028.0397%2045.4715C27.6211%2045.3328%2027.2632%2045.0979%2027.0114%2044.7964C26.7596%2044.495%2026.6251%2044.1406%2026.625%2043.7781Z'%20fill='white'/%3e%3c/svg%3e";var ve=function(){return ve=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ve.apply(this,arguments)};function sr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Z="-ms-",qr="-moz-",K="-webkit-",H0="comm",jl="rule",Du="decl",W1="@import",U0="@keyframes",H1="@layer",Q0=Math.abs,$u=String.fromCharCode,Sa=Object.assign;function U1(e,t){return ge(e,0)^45?(((t<<2^ge(e,0))<<2^ge(e,1))<<2^ge(e,2))<<2^ge(e,3):0}function V0(e){return e.trim()}function St(e,t){return(e=t.exec(e))?e[0]:e}function B(e,t,n){return e.replace(t,n)}function lo(e,t,n){return e.indexOf(t,n)}function ge(e,t){return e.charCodeAt(t)|0}function ar(e,t,n){return e.slice(t,n)}function ht(e){return e.length}function G0(e){return e.length}function Ar(e,t){return t.push(e),e}function Q1(e,t){return e.map(t).join("")}function hd(e,t){return e.filter(function(n){return!St(n,t)})}var Cl=1,ur=1,K0=0,nt=0,ue=0,jr="";function _l(e,t,n,r,i,o,l,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Cl,column:ur,length:l,return:"",siblings:s}}function Rt(e,t){return Sa(_l("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function On(e){for(;e.root;)e=Rt(e.root,{children:[e]});Ar(e,e.siblings)}function V1(){return ue}function G1(){return ue=nt>0?ge(jr,--nt):0,ur--,ue===10&&(ur=1,Cl--),ue}function ct(){return ue=nt<K0?ge(jr,nt++):0,ur++,ue===10&&(ur=1,Cl++),ue}function hn(){return ge(jr,nt)}function so(){return nt}function bl(e,t){return ar(jr,e,t)}function ka(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function K1(e){return Cl=ur=1,K0=ht(jr=e),nt=0,[]}function q1(e){return jr="",e}function us(e){return V0(bl(nt-1,ja(e===91?e+2:e===40?e+1:e)))}function Y1(e){for(;(ue=hn())&&ue<33;)ct();return ka(e)>2||ka(ue)>3?"":" "}function X1(e,t){for(;--t&&ct()&&!(ue<48||ue>102||ue>57&&ue<65||ue>70&&ue<97););return bl(e,so()+(t<6&&hn()==32&&ct()==32))}function ja(e){for(;ct();)switch(ue){case e:return nt;case 34:case 39:e!==34&&e!==39&&ja(ue);break;case 40:e===41&&ja(e);break;case 92:ct();break}return nt}function Z1(e,t){for(;ct()&&e+ue!==57;)if(e+ue===84&&hn()===47)break;return"/*"+bl(t,nt-1)+"*"+$u(e===47?e:ct())}function J1(e){for(;!ka(hn());)ct();return bl(e,nt)}function ey(e){return q1(ao("",null,null,null,[""],e=K1(e),0,[0],e))}function ao(e,t,n,r,i,o,l,s,u){for(var c=0,h=0,f=l,g=0,y=0,x=0,v=1,S=1,p=1,d=0,m="",w=i,k=o,j=r,_=m;S;)switch(x=d,d=ct()){case 40:if(x!=108&&ge(_,f-1)==58){lo(_+=B(us(d),"&","&\f"),"&\f",Q0(c?s[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:_+=us(d);break;case 9:case 10:case 13:case 32:_+=Y1(x);break;case 92:_+=X1(so()-1,7);continue;case 47:switch(hn()){case 42:case 47:Ar(ty(Z1(ct(),so()),t,n,u),u);break;default:_+="/"}break;case 123*v:s[c++]=ht(_)*p;case 125*v:case 59:case 0:switch(d){case 0:case 125:S=0;case 59+h:p==-1&&(_=B(_,/\f/g,"")),y>0&&ht(_)-f&&Ar(y>32?gd(_+";",r,n,f-1,u):gd(B(_," ","")+";",r,n,f-2,u),u);break;case 59:_+=";";default:if(Ar(j=md(_,t,n,c,h,i,s,m,w=[],k=[],f,o),o),d===123)if(h===0)ao(_,t,j,j,w,o,f,s,k);else switch(g===99&&ge(_,3)===110?100:g){case 100:case 108:case 109:case 115:ao(e,j,j,r&&Ar(md(e,j,j,0,0,i,s,m,i,w=[],f,k),k),i,k,f,s,r?w:k);break;default:ao(_,j,j,j,[""],k,0,s,k)}}c=h=y=0,v=p=1,m=_="",f=l;break;case 58:f=1+ht(_),y=x;default:if(v<1){if(d==123)--v;else if(d==125&&v++==0&&G1()==125)continue}switch(_+=$u(d),d*v){case 38:p=h>0?1:(_+="\f",-1);break;case 44:s[c++]=(ht(_)-1)*p,p=1;break;case 64:hn()===45&&(_+=us(ct())),g=hn(),h=f=ht(m=_+=J1(so())),d++;break;case 45:x===45&&ht(_)==2&&(v=0)}}return o}function md(e,t,n,r,i,o,l,s,u,c,h,f){for(var g=i-1,y=i===0?o:[""],x=G0(y),v=0,S=0,p=0;v<r;++v)for(var d=0,m=ar(e,g+1,g=Q0(S=l[v])),w=e;d<x;++d)(w=V0(S>0?y[d]+" "+m:B(m,/&\f/g,y[d])))&&(u[p++]=w);return _l(e,t,n,i===0?jl:s,u,c,h,f)}function ty(e,t,n,r){return _l(e,t,n,H0,$u(V1()),ar(e,2,-2),0,r)}function gd(e,t,n,r,i){return _l(e,t,n,Du,ar(e,0,r),ar(e,r+1,-1),r,i)}function q0(e,t,n){switch(U1(e,t)){case 5103:return K+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 4789:return qr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+qr+e+Z+e+e;case 5936:switch(ge(e,t+11)){case 114:return K+e+Z+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return K+e+Z+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return K+e+Z+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return K+e+Z+e+e;case 6165:return K+e+Z+"flex-"+e+e;case 5187:return K+e+B(e,/(\w+).+(:[^]+)/,K+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return K+e+Z+"flex-item-"+B(e,/flex-|-self/g,"")+(St(e,/flex-|baseline/)?"":Z+"grid-row-"+B(e,/flex-|-self/g,""))+e;case 4675:return K+e+Z+"flex-line-pack"+B(e,/align-content|flex-|-self/g,"")+e;case 5548:return K+e+Z+B(e,"shrink","negative")+e;case 5292:return K+e+Z+B(e,"basis","preferred-size")+e;case 6060:return K+"box-"+B(e,"-grow","")+K+e+Z+B(e,"grow","positive")+e;case 4554:return K+B(e,/([^-])(transform)/g,"$1"+K+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,K+"$1"),/(image-set)/,K+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,K+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+K+e+e;case 4200:if(!St(e,/flex-|baseline/))return Z+"grid-column-align"+ar(e,t)+e;break;case 2592:case 3360:return Z+B(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,St(r.props,/grid-\w+-end/)})?~lo(e+(n=n[t].value),"span",0)?e:Z+B(e,"-start","")+e+Z+"grid-row-span:"+(~lo(n,"span",0)?St(n,/\d+/):+St(n,/\d+/)-+St(e,/\d+/))+";":Z+B(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return St(r.props,/grid-\w+-start/)})?e:Z+B(B(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,K+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ht(e)-1-t>6)switch(ge(e,t+1)){case 109:if(ge(e,t+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+K+"$2-$3$1"+qr+(ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~lo(e,"stretch",0)?q0(B(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return B(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,s,u,c){return Z+i+":"+o+c+(l?Z+i+"-span:"+(s?u:+u-+o)+c:"")+e});case 4949:if(ge(e,t+6)===121)return B(e,":",":"+K)+e;break;case 6444:switch(ge(e,ge(e,14)===45?18:11)){case 120:return B(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+K+(ge(e,14)===45?"inline-":"")+"box$3$1"+K+"$2$3$1"+Z+"$2box$3")+e;case 100:return B(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(e,"scroll-","scroll-snap-")+e}return e}function Ao(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ny(e,t,n,r){switch(e.type){case H1:if(e.children.length)break;case W1:case Du:return e.return=e.return||e.value;case H0:return"";case U0:return e.return=e.value+"{"+Ao(e.children,r)+"}";case jl:if(!ht(e.value=e.props.join(",")))return""}return ht(n=Ao(e.children,r))?e.return=e.value+"{"+n+"}":""}function ry(e){var t=G0(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function iy(e){return function(t){t.root||(t=t.return)&&e(t)}}function oy(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Du:e.return=q0(e.value,e.length,n);return;case U0:return Ao([Rt(e,{value:B(e.value,"@","@"+K)})],r);case jl:if(e.length)return Q1(n=e.props,function(i){switch(St(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":On(Rt(e,{props:[B(i,/:(read-\w+)/,":"+qr+"$1")]})),On(Rt(e,{props:[i]})),Sa(e,{props:hd(n,r)});break;case"::placeholder":On(Rt(e,{props:[B(i,/:(plac\w+)/,":"+K+"input-$1")]})),On(Rt(e,{props:[B(i,/:(plac\w+)/,":"+qr+"$1")]})),On(Rt(e,{props:[B(i,/:(plac\w+)/,Z+"input-$1")]})),On(Rt(e,{props:[i]})),Sa(e,{props:hd(n,r)});break}return""})}}var ly={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},He={},cr=typeof process<"u"&&He!==void 0&&(He.REACT_APP_SC_ATTR||He.SC_ATTR)||"data-styled",Y0="active",X0="data-styled-version",El="6.1.13",Au=`/*!sc*/
`,Fo=typeof window<"u"&&"HTMLElement"in window,sy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&He!==void 0&&He.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&He.REACT_APP_SC_DISABLE_SPEEDY!==""?He.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&He.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&He!==void 0&&He.SC_DISABLE_SPEEDY!==void 0&&He.SC_DISABLE_SPEEDY!==""&&He.SC_DISABLE_SPEEDY!=="false"&&He.SC_DISABLE_SPEEDY),ay={},Ol=Object.freeze([]),dr=Object.freeze({});function Z0(e,t,n){return n===void 0&&(n=dr),e.theme!==n.theme&&e.theme||t||n.theme}var J0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),uy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,cy=/(^-|-$)/g;function vd(e){return e.replace(uy,"-").replace(cy,"")}var dy=/(a)(d)/gi,Hi=52,yd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ca(e){var t,n="";for(t=Math.abs(e);t>Hi;t=t/Hi|0)n=yd(t%Hi)+n;return(yd(t%Hi)+n).replace(dy,"$1-$2")}var cs,eh=5381,Un=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},th=function(e){return Un(eh,e)};function Fu(e){return Ca(th(e)>>>0)}function fy(e){return e.displayName||e.name||"Component"}function ds(e){return typeof e=="string"&&!0}var nh=typeof Symbol=="function"&&Symbol.for,rh=nh?Symbol.for("react.memo"):60115,py=nh?Symbol.for("react.forward_ref"):60112,hy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},my={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ih={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gy=((cs={})[py]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cs[rh]=ih,cs);function xd(e){return("type"in(t=e)&&t.type.$$typeof)===rh?ih:"$$typeof"in e?gy[e.$$typeof]:hy;var t}var vy=Object.defineProperty,yy=Object.getOwnPropertyNames,wd=Object.getOwnPropertySymbols,xy=Object.getOwnPropertyDescriptor,wy=Object.getPrototypeOf,Sd=Object.prototype;function oh(e,t,n){if(typeof t!="string"){if(Sd){var r=wy(t);r&&r!==Sd&&oh(e,r,n)}var i=yy(t);wd&&(i=i.concat(wd(t)));for(var o=xd(e),l=xd(t),s=0;s<i.length;++s){var u=i[s];if(!(u in my||n&&n[u]||l&&u in l||o&&u in o)){var c=xy(t,u);try{vy(e,u,c)}catch{}}}}return e}function wn(e){return typeof e=="function"}function Bu(e){return typeof e=="object"&&"styledComponentId"in e}function cn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Bo(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function mi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function _a(e,t,n){if(n===void 0&&(n=!1),!n&&!mi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=_a(e[r],t[r]);else if(mi(t))for(var r in t)e[r]=_a(e[r],t[r]);return e}function Wu(e,t){Object.defineProperty(e,"toString",{value:t})}function Sn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Sy=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Sn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),u=(l=0,n.length);l<u;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(Au);return n},e}(),uo=new Map,Wo=new Map,co=1,Ui=function(e){if(uo.has(e))return uo.get(e);for(;Wo.has(co);)co++;var t=co++;return uo.set(e,t),Wo.set(t,e),t},ky=function(e,t){co=t+1,uo.set(e,t),Wo.set(t,e)},jy="style[".concat(cr,"][").concat(X0,'="').concat(El,'"]'),Cy=new RegExp("^".concat(cr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),_y=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},by=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Au),i=[],o=0,l=r.length;o<l;o++){var s=r[o].trim();if(s){var u=s.match(Cy);if(u){var c=0|parseInt(u[1],10),h=u[2];c!==0&&(ky(h,c),_y(e,h,u[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},kd=function(e){for(var t=document.querySelectorAll(jy),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(cr)!==Y0&&(by(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Ey(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var lh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var u=Array.from(s.querySelectorAll("style[".concat(cr,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(cr,Y0),r.setAttribute(X0,El);var l=Ey();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},Oy=function(){function e(t){this.element=lh(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw Sn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Py=function(){function e(t){this.element=lh(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ty=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),jd=Fo,zy={isServer:!Fo,useCSSOMInjection:!sy},Ho=function(){function e(t,n,r){t===void 0&&(t=dr),n===void 0&&(n={});var i=this;this.options=ve(ve({},zy),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Fo&&jd&&(jd=!1,kd(this)),Wu(this,function(){return function(o){for(var l=o.getTag(),s=l.length,u="",c=function(f){var g=function(p){return Wo.get(p)}(f);if(g===void 0)return"continue";var y=o.names.get(g),x=l.getGroup(f);if(y===void 0||!y.size||x.length===0)return"continue";var v="".concat(cr,".g").concat(f,'[id="').concat(g,'"]'),S="";y!==void 0&&y.forEach(function(p){p.length>0&&(S+="".concat(p,","))}),u+="".concat(x).concat(v,'{content:"').concat(S,'"}').concat(Au)},h=0;h<s;h++)c(h);return u}(i)})}return e.registerId=function(t){return Ui(t)},e.prototype.rehydrate=function(){!this.server&&Fo&&kd(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ve(ve({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Ty(i):r?new Oy(i):new Py(i)}(this.options),new Sy(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ui(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ui(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ui(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Iy=/&/g,Ly=/^\s*\/\/.*$/gm;function sh(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=sh(n.children,t)),n})}function Ry(e){var t,n,r,i=e===void 0?dr:e,o=i.options,l=o===void 0?dr:o,s=i.plugins,u=s===void 0?Ol:s,c=function(g,y,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):g},h=u.slice();h.push(function(g){g.type===jl&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Iy,n).replace(r,c))}),l.prefix&&h.push(oy),h.push(ny);var f=function(g,y,x,v){y===void 0&&(y=""),x===void 0&&(x=""),v===void 0&&(v="&"),t=v,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var S=g.replace(Ly,""),p=ey(x||y?"".concat(x," ").concat(y," { ").concat(S," }"):S);l.namespace&&(p=sh(p,l.namespace));var d=[];return Ao(p,ry(h.concat(iy(function(m){return d.push(m)})))),d};return f.hash=u.length?u.reduce(function(g,y){return y.name||Sn(15),Un(g,y.name)},eh).toString():"",f}var Ny=new Ho,ba=Ry(),ah=de.createContext({shouldForwardProp:void 0,styleSheet:Ny,stylis:ba});ah.Consumer;de.createContext(void 0);function Ea(){return C.useContext(ah)}var uh=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ba);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Wu(this,function(){throw Sn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ba),this.name+t.hash},e}(),My=function(e){return e>="A"&&e<="Z"};function Cd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;My(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var ch=function(e){return e==null||e===!1||e===""},dh=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!ch(o)&&(Array.isArray(o)&&o.isCss||wn(o)?r.push("".concat(Cd(i),":"),o,";"):mi(o)?r.push.apply(r,sr(sr(["".concat(i," {")],dh(o),!1),["}"],!1)):r.push("".concat(Cd(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in ly||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Xt(e,t,n,r){if(ch(e))return[];if(Bu(e))return[".".concat(e.styledComponentId)];if(wn(e)){if(!wn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Xt(i,t,n,r)}var o;return e instanceof uh?n?(e.inject(n,r),[e.getName(r)]):[e]:mi(e)?dh(e):Array.isArray(e)?Array.prototype.concat.apply(Ol,e.map(function(l){return Xt(l,t,n,r)})):[e.toString()]}function fh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(wn(n)&&!Bu(n))return!1}return!0}var Dy=th(El),$y=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&fh(t),this.componentId=n,this.baseHash=Un(Dy,n),this.baseStyle=r,Ho.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=cn(i,this.staticRulesId);else{var o=Bo(Xt(this.rules,t,n,r)),l=Ca(Un(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}i=cn(i,l),this.staticRulesId=l}else{for(var u=Un(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var f=this.rules[h];if(typeof f=="string")c+=f;else if(f){var g=Bo(Xt(f,t,n,r));u=Un(u,g+h),c+=g}}if(c){var y=Ca(u>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(c,".".concat(y),void 0,this.componentId)),i=cn(i,y)}}return i},e}(),gi=de.createContext(void 0);gi.Consumer;function Ay(e){var t=de.useContext(gi),n=C.useMemo(function(){return function(r,i){if(!r)throw Sn(14);if(wn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Sn(8);return i?ve(ve({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?de.createElement(gi.Provider,{value:n},e.children):null}var fs={};function Fy(e,t,n){var r=Bu(e),i=e,o=!ds(e),l=t.attrs,s=l===void 0?Ol:l,u=t.componentId,c=u===void 0?function(w,k){var j=typeof w!="string"?"sc":vd(w);fs[j]=(fs[j]||0)+1;var _="".concat(j,"-").concat(Fu(El+j+fs[j]));return k?"".concat(k,"-").concat(_):_}(t.displayName,t.parentComponentId):u,h=t.displayName,f=h===void 0?function(w){return ds(w)?"styled.".concat(w):"Styled(".concat(fy(w),")")}(e):h,g=t.displayName&&t.componentId?"".concat(vd(t.displayName),"-").concat(t.componentId):t.componentId||c,y=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;x=function(w,k){return v(w,k)&&S(w,k)}}else x=v}var p=new $y(n,g,r?i.componentStyle:void 0);function d(w,k){return function(j,_,T){var O=j.attrs,E=j.componentStyle,N=j.defaultProps,M=j.foldedComponentIds,D=j.styledComponentId,A=j.target,rt=de.useContext(gi),le=Ea(),xe=j.shouldForwardProp||le.shouldForwardProp,I=Z0(_,rt,N)||dr,R=function(Re,We,xt){for(var _r,rn=ve(ve({},We),{className:void 0,theme:xt}),Nl=0;Nl<Re.length;Nl+=1){var Ci=wn(_r=Re[Nl])?_r(rn):_r;for(var It in Ci)rn[It]=It==="className"?cn(rn[It],Ci[It]):It==="style"?ve(ve({},rn[It]),Ci[It]):Ci[It]}return We.className&&(rn.className=cn(rn.className,We.className)),rn}(O,_,I),F=R.as||A,Q={};for(var G in R)R[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&R.theme===I||(G==="forwardedAs"?Q.as=R.forwardedAs:xe&&!xe(G,F)||(Q[G]=R[G]));var Ee=function(Re,We){var xt=Ea(),_r=Re.generateAndInjectStyles(We,xt.styleSheet,xt.stylis);return _r}(E,R),Be=cn(M,D);return Ee&&(Be+=" "+Ee),R.className&&(Be+=" "+R.className),Q[ds(F)&&!J0.has(F)?"class":"className"]=Be,Q.ref=T,C.createElement(F,Q)}(m,w,k)}d.displayName=f;var m=de.forwardRef(d);return m.attrs=y,m.componentStyle=p,m.displayName=f,m.shouldForwardProp=x,m.foldedComponentIds=r?cn(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=g,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(k){for(var j=[],_=1;_<arguments.length;_++)j[_-1]=arguments[_];for(var T=0,O=j;T<O.length;T++)_a(k,O[T],!0);return k}({},i.defaultProps,w):w}}),Wu(m,function(){return".".concat(m.styledComponentId)}),o&&oh(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function _d(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var bd=function(e){return Object.assign(e,{isCss:!0})};function kn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(wn(e)||mi(e))return bd(Xt(_d(Ol,sr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Xt(r):bd(Xt(_d(r,t)))}function Oa(e,t,n){if(n===void 0&&(n=dr),!t)throw Sn(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,kn.apply(void 0,sr([i],o,!1)))};return r.attrs=function(i){return Oa(e,t,ve(ve({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Oa(e,t,ve(ve({},n),i))},r}var ph=function(e){return Oa(Fy,e)},b=ph;J0.forEach(function(e){b[e]=ph(e)});var By=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=fh(t),Ho.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Bo(Xt(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ho.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Wy(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=kn.apply(void 0,sr([e],t,!1)),i="sc-global-".concat(Fu(JSON.stringify(r))),o=new By(r,i),l=function(u){var c=Ea(),h=de.useContext(gi),f=de.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&s(f,u,c.styleSheet,h,c.stylis),de.useLayoutEffect(function(){if(!c.styleSheet.server)return s(f,u,c.styleSheet,h,c.stylis),function(){return o.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,h,c.stylis]),null};function s(u,c,h,f,g){if(o.isStatic)o.renderStyles(u,ay,h,g);else{var y=ve(ve({},c),{theme:Z0(c,f,l.defaultProps)});o.renderStyles(u,y,h,g)}}return de.memo(l)}function Cr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Bo(kn.apply(void 0,sr([e],t,!1))),i=Fu(r);return new uh(i,r)}const Hy=b.div`
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
`,Uy=b.div`
  display: flex;
  width: ${e=>e.count*100}%;  
  transform: translateX(-${e=>e.currentIndex*100}%); 
  transition: transform 0.5s ease-in-out;
`,Qy=b.img`
  flex-shrink: 0;  
  width: 100%;  
  height: 90vh;
  object-fit: cover;
`,Vy=b.div`
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
  animation: ${e=>e.isVisible?Ed:"none"} 0.4s ease-in-out;
  font-size: 1.1rem;
  color: #222;

  @media (max-width: 500px) {
    display: ${e=>e.isVisible?"block":"none"};
    animation: ${e=>e.isVisible?Ed:"none"} 0.4s ease-in-out;
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
`,Ed=Cr`
  from { opacity: 0; }
  to { opacity: 1; }
`,jt="/assets/Genie1-_KHwDxeg.svg",fr="/assets/Genie2-BwCRixq0.svg",Gy=Cr`
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
  animation: ${e=>e.isDisappearing?kn`${Gy} 0.5s forwards`:"none"};
`;const Ky=()=>{const[e,t]=C.useState(null),[n,r]=C.useState(0),[i,o]=C.useState(!1),l=[D1,$1,A1],[s,u]=C.useState(!0),[c,h]=C.useState(!1),[f,g]=C.useState(jt),[y,x]=C.useState(!1),[v,S]=C.useState(!1),[p,d]=C.useState(null),m=yt(),w=O=>{t(O)},k=(O,E)=>{p===O?m(E):d(O)};C.useEffect(()=>{if(p!==null){const O=setTimeout(()=>{d(null)},4e3);return()=>clearTimeout(O)}},[p]);const j=()=>{t(null)};C.useEffect(()=>{const O=setTimeout(()=>{h(!0)},1e3),E=setInterval(()=>{g(M=>M===jt?fr:jt)},600),N=setTimeout(()=>{S(!0),setTimeout(()=>{u(!1)},1e3),clearInterval(E)},3e3);return()=>{clearTimeout(O),clearTimeout(N),clearInterval(E)}},[]);const _=()=>{const E=n===0?l.length-1:n-1;r(E)},T=()=>{const E=n===l.length-1?0:n+1;r(E)};return C.useEffect(()=>{if(window.innerWidth<=500){const O=setInterval(()=>{T()},3e3);return()=>{clearInterval(O)}}},[n]),a.jsx(a.Fragment,{children:a.jsxs(Hy,{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[a.jsx("img",{src:F1,alt:"Previous",onClick:_,onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),style:{cursor:"pointer",position:"absolute",top:"50%",left:"2.5vw",zIndex:1e3,transform:`translateY(-50%) scale(${y?1.1:1})`,opacity:i?.4:0,transition:"opacity 1s ease-in-out, transform 0.3s ease-in-out",transitionDelay:i?"0.1s":"0s",display:window.innerWidth<=500?"none":"block"}}),a.jsx("img",{src:B1,alt:"Next",onClick:T,onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),style:{cursor:"pointer",position:"absolute",top:"50%",right:"2.5vw",zIndex:1e3,transform:`translateY(-50%) scale(${y?1.1:1})`,opacity:i?.4:0,transition:"opacity 1s ease-in-out, transform 0.3s ease-in-out",transitionDelay:i?"0.1s":"0s",display:window.innerWidth<=500?"none":"block"}}),a.jsx(Uy,{currentIndex:n,count:l.length,children:l.map((O,E)=>a.jsx(Qy,{src:O,alt:`Slide ${E}`,style:{borderBottomLeftRadius:"20vw"}},E))}),a.jsxs(Vy,{children:[a.jsx("div",{style:{width:"100%"},children:a.jsxs(Rr,{onClick:()=>k(0,"/concept"),style:{backgroundColor:"#F1F5F9"},isHovered:e===0||p===0,onMouseEnter:()=>w(0),onMouseLeave:j,isClicked:p===0,children:[a.jsx(Tn,{children:"양자 개념"}),a.jsxs(zn,{onClick:O=>m("/concept"),isVisible:e===0,children:["양자란 무엇일까요? 쉽게 알아봅시다!!",a.jsx("p",{})]})]})}),a.jsx("div",{style:{width:"100%"},children:a.jsxs(Rr,{onClick:()=>k(1,"/description"),style:{backgroundColor:"#D0E7FE"},isHovered:e===1||p===1,onMouseEnter:()=>w(1),onMouseLeave:j,isClicked:p===1,children:[a.jsx(Tn,{children:"활용 분야"}),a.jsxs(zn,{onClick:O=>m("/description"),isVisible:e===1,children:["양자 컴퓨터, 양자 암호 통신 등 양자 기술이 활용되고 있는 분야에 대해 알아봅시다.",a.jsx("p",{})]})]})}),a.jsx("div",{style:{width:"100%"},children:a.jsxs(Rr,{onClick:()=>k(2,"/"),style:{backgroundColor:"#A5D2FF"},isHovered:e===2||p===2,onMouseEnter:()=>w(2),onMouseLeave:j,isClicked:p===2,children:[a.jsx(Tn,{children:"최근 동향"}),a.jsxs(zn,{onClick:O=>m("/recent"),isVisible:e===2,children:["양자 기술의 최근 동향에 대해 알아봅시다.",a.jsx("p",{})]})]})}),a.jsx("div",{style:{width:"100%"},children:a.jsxs(Rr,{onClick:()=>k(3,"/"),style:{backgroundColor:"#7EAFE0"},isHovered:e===3||p===3,onMouseEnter:()=>w(3),onMouseLeave:j,isClicked:p===3,children:[a.jsx(Tn,{children:"주요 기업"}),a.jsxs(zn,{onClick:O=>m("/company"),isVisible:e===3,children:["양자 기술의 발전을 이끌고 있는 국내, 해외 주요 기업들을 모아봤어요.",a.jsx("p",{})]})]})}),a.jsx("div",{style:{width:"100%"},children:a.jsxs(Rr,{onClick:()=>k(4,"/quiz"),style:{backgroundColor:"#E2E0FF"},isHovered:e===4||p===4,onMouseEnter:()=>w(4),onMouseLeave:j,isClicked:p===4,children:[a.jsx(Tn,{children:"양자 퀴즈"}),a.jsxs(zn,{onClick:O=>m("/quizmain"),isVisible:e===4,children:["간단한 양자 개념을 확인하는 Quiz Quiz!!",a.jsx("p",{})]})]})})]})]})})};function qy(){return a.jsx(a.Fragment,{children:a.jsx(Ky,{})})}var hh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Od=de.createContext&&de.createContext(hh),Yy=["attr","size","title"];function Xy(e,t){if(e==null)return{};var n=Zy(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Zy(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Uo(){return Uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Uo.apply(this,arguments)}function Pd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Qo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pd(Object(n),!0).forEach(function(r){Jy(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Jy(e,t,n){return t=e2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function e2(e){var t=t2(e,"string");return typeof t=="symbol"?t:t+""}function t2(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function mh(e){return e&&e.map((t,n)=>de.createElement(t.tag,Qo({key:n},t.attr),mh(t.child)))}function Hu(e){return t=>de.createElement(n2,Uo({attr:Qo({},e.attr)},t),mh(e.child))}function n2(e){var t=n=>{var{attr:r,size:i,title:o}=e,l=Xy(e,Yy),s=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),de.createElement("svg",Uo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:u,style:Qo(Qo({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&de.createElement("title",null,o),e.children)};return Od!==void 0?de.createElement(Od.Consumer,null,n=>t(n)):t(hh)}function r2(e){return Hu({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function i2(e){return Hu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function Vo(e){return Hu({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}const o2=b.div`
  font-size: 3.8rem;
  font-weight: bold;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`,l2=b.img`
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
`,a2=b.nav`
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
`,u2=b.div`
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
`,zd="/assets/Genie-Bb0VnGpq.svg";function c2(){const[e,t]=C.useState(!1),[n,r]=C.useState(!1),i=yt();C.useEffect(()=>{const l=()=>{window.scrollY>0?t(!0):t(!1)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[]);const o=()=>{r(!n)};return a.jsxs(a.Fragment,{children:[a.jsxs(a2,{isScrolled:e,style:{paddingLeft:"5%",paddingRight:"3%"},children:[a.jsxs("div",{onClick:()=>i("/"),style:{cursor:"pointer",maxWidth:"100%",marginRight:"0px",display:"flex",flexDirection:"row",gap:"10%",alignItems:"center",justifyContent:"space-between"},children:[a.jsx(l2,{src:zd,alt:"Logo"}),a.jsx(o2,{children:"Jenie"})]}),a.jsx("div",{style:{display:"flex",flexDirection:"row",gap:"25px",alignItems:"center",justifyContent:"flex-end"},children:a.jsx(Td,{onClick:o,children:n?a.jsx(Vo,{}):a.jsx(r2,{})})})]}),n&&a.jsxs(u2,{children:[a.jsxs("div",{style:{marginBottom:"4%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[a.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",fontSize:"1.7rem",gap:"5%"},children:[a.jsx("img",{src:zd}),a.jsx("h1",{children:"Menu List"})]}),a.jsx(Td,{onClick:o,style:{fontSize:"3rem",marginTop:"0.5vw"},children:a.jsx(Vo,{})})]}),a.jsx(Pn,{onClick:()=>{i("/concept"),r(!1)},children:"양자 개념"}),a.jsx(Pn,{onClick:()=>{i("/description"),r(!1)},children:"양자 활용"}),a.jsx(Pn,{onClick:()=>{i("/recent"),r(!1)},children:"최근 동향"}),a.jsx(Pn,{onClick:()=>{i("/company"),r(!1)},children:"주요 기업"}),a.jsx(Pn,{onClick:()=>{i("/quizmain"),r(!1)},children:"양자 퀴즈"}),a.jsx(Pn,{onClick:()=>{i("/character"),r(!1)},children:"캐릭터 소개"})]})]})}const d2=b.footer`
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
`,f2=b.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 85%;
  margin-left: 7.5%;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`,p2=b.div`
  display: flex;
  flex-direction: column;
`,h2=b.div`
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
`,m2=b.img`
  max-width: 150px;
  margin-bottom: 5.5%;
  cursor: pointer;
  @media (max-width: 960px) {
    margin-bottom: 3.5%;
  }
`,g2=b.div`
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
`,v2=b.div`
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
`,y2=b.div`
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
    
`,Id=b.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  span {
    font-size: 1.1rem;
    margin-left: 10px;
    margin-right: 20px;
  }
`,Ld=b.div`
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
`,x2=b.div`
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
`,Md="data:image/svg+xml,%3csvg%20width='43'%20height='43'%20viewBox='0%200%2043%2043'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cellipse%20cx='21'%20cy='22.5'%20rx='18'%20ry='19.5'%20fill='white'/%3e%3cg%20clip-path='url(%23clip0_0_1)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21.1676%201.05875C16.172%201.06134%2011.3402%202.83067%207.53623%206.05038C3.73223%209.27008%201.20408%2013.7302%200.403813%2018.6332C-0.396452%2023.5362%200.583349%2028.5624%203.16804%2032.813C5.75273%2037.0637%209.77375%2040.2616%2014.5121%2041.8349C15.5575%2042.0289%2015.9512%2041.381%2015.9512%2040.8301C15.9512%2040.2792%2015.9303%2038.682%2015.9233%2036.9358C10.0693%2038.2004%208.83233%2034.4655%208.83233%2034.4655C7.87757%2032.0402%206.49769%2031.4027%206.49769%2031.4027C4.58817%2030.1069%206.64057%2030.1311%206.64057%2030.1311C8.75568%2030.2801%209.86725%2032.2896%209.86725%2032.2896C11.7419%2035.4875%2014.7909%2034.5625%2015.9895%2034.022C16.1777%2032.6673%2016.7248%2031.7457%2017.3276%2031.2225C12.6514%2030.6959%207.73819%2028.9011%207.73819%2020.8838C7.7092%2018.8045%208.48519%2016.7938%209.90557%2015.2675C9.68953%2014.7409%208.96822%2012.6135%2010.1111%209.72398C10.1111%209.72398%2011.8778%209.1627%2015.899%2011.8686C19.348%2010.9308%2022.9871%2010.9308%2026.4362%2011.8686C30.4538%209.1627%2032.217%209.72398%2032.217%209.72398C33.3634%2012.6066%2032.6421%2014.7339%2032.4261%2015.2675C33.8509%2016.794%2034.6286%2018.8083%2034.5969%2020.8907C34.5969%2028.9254%2029.6733%2030.6959%2024.9901%2031.2121C25.7427%2031.8635%2026.4153%2033.135%2026.4153%2035.0891C26.4153%2037.8886%2026.3909%2040.1406%2026.3909%2040.8301C26.3909%2041.3879%2026.7707%2042.0393%2027.8369%2041.8349C32.5759%2040.2614%2036.5973%2037.0629%2039.1819%2032.8116C41.7666%2028.5602%2042.7458%2023.5333%2041.9447%2018.6298C41.1435%2013.7263%2038.6141%209.26616%2034.8088%206.04701C31.0036%202.82787%2026.1707%201.0597%2021.1745%201.05875H21.1676Z'%20fill='%23191717'/%3e%3cpath%20d='M8.09314%2031.1012C8.04784%2031.2052%207.88058%2031.2363%207.74469%2031.1636C7.60879%2031.0908%207.50775%2030.9557%207.55653%2030.8483C7.60531%2030.7409%207.76909%2030.7132%207.90498%2030.7859C8.04088%2030.8587%208.14541%2030.9973%208.09314%2031.1012Z'%20fill='%23191717'/%3e%3cpath%20d='M8.9469%2032.0471C8.87474%2032.0832%208.79218%2032.0933%208.71336%2032.0756C8.63454%2032.0579%208.56436%2032.0135%208.51482%2031.9501C8.37892%2031.8045%208.35103%2031.6036%208.45557%2031.5135C8.5601%2031.4234%208.74828%2031.465%208.88418%2031.6105C9.02008%2031.756%209.05143%2031.957%208.9469%2032.0471Z'%20fill='%23191717'/%3e%3cpath%20d='M9.77616%2033.2493C9.64723%2033.3394%209.42769%2033.2493%209.30573%2033.0691C9.27201%2033.0368%209.24519%2032.9981%209.22687%2032.9552C9.20855%2032.9124%209.1991%2032.8663%209.1991%2032.8197C9.1991%2032.7731%209.20855%2032.727%209.22687%2032.6842C9.24519%2032.6413%209.27201%2032.6026%209.30573%2032.5702C9.43466%2032.4836%209.6542%2032.5702%209.77616%2032.7469C9.89812%2032.9236%209.9016%2033.1592%209.77616%2033.2493V33.2493Z'%20fill='%23191717'/%3e%3cpath%20d='M10.9017%2034.4135C10.7867%2034.5417%2010.5533%2034.507%2010.3616%2034.3338C10.17%2034.1606%2010.1247%2033.925%2010.2396%2033.8002C10.3546%2033.6755%2010.5881%2033.7101%2010.7867%2033.8799C10.9853%2034.0497%2011.0237%2034.2887%2010.9017%2034.4135V34.4135Z'%20fill='%23191717'/%3e%3cpath%20d='M12.4801%2035.0925C12.4279%2035.2554%2012.1909%2035.3281%2011.954%2035.2588C11.717%2035.1895%2011.5602%2034.9955%2011.6055%2034.8292C11.6508%2034.6629%2011.8912%2034.5867%2012.1317%2034.6629C12.3721%2034.7391%2012.5254%2034.9228%2012.4801%2035.0925Z'%20fill='%23191717'/%3e%3cpath%20d='M14.2017%2035.2103C14.2017%2035.3801%2014.0066%2035.5256%2013.7557%2035.5291C13.5048%2035.5326%2013.2992%2035.394%2013.2992%2035.2242C13.2992%2035.0544%2013.4943%2034.9089%2013.7452%2034.9054C13.9961%2034.902%2014.2017%2035.0371%2014.2017%2035.2103Z'%20fill='%23191717'/%3e%3cpath%20d='M15.8043%2034.9436C15.8357%2035.1134%2015.6615%2035.2901%2015.4106%2035.3316C15.1597%2035.3732%2014.9402%2035.2727%2014.9088%2035.1064C14.8774%2034.9401%2015.0586%2034.76%2015.3026%2034.7149C15.5465%2034.6699%2015.773%2034.7738%2015.8043%2034.9436Z'%20fill='%23191717'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_0_1'%3e%3crect%20width='42.35'%20height='42.35'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Dd="data:image/svg+xml,%3csvg%20width='43'%20height='43'%20viewBox='0%200%2043%2043'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='21.175'%20cy='21.175'%20r='21.175'%20fill='white'/%3e%3cpath%20d='M9.77273%2030.7548H13.9091V20.7093L8%2016.2775V28.982C8%2029.9615%208.7933%2030.7548%209.77273%2030.7548Z'%20fill='%234285F4'/%3e%3cpath%20d='M28.0909%2030.7548H32.2272C33.2067%2030.7548%2034%2029.9615%2034%2028.982V16.2775L28.0909%2020.7093V30.7548Z'%20fill='%2334A853'/%3e%3cpath%20d='M28.0909%2013.0275V20.7093L34%2016.2775V13.9139C34%2011.7231%2031.4989%2010.4718%2029.7454%2011.7866L28.0909%2013.0275Z'%20fill='%23FBBC04'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.9091%2020.7093V13.0275L21%2018.3457L28.0909%2013.0275V20.7093L21%2026.0275L13.9091%2020.7093Z'%20fill='%23EA4335'/%3e%3cpath%20d='M8%2013.9139V16.2775L13.9091%2020.7093V13.0275L12.2545%2011.7866C10.501%2010.4718%208%2011.7231%208%2013.9139Z'%20fill='%23C5221F'/%3e%3c/svg%3e",w2="/assets/Jininfra-Czzd3TNl.svg",S2=()=>a.jsxs(d2,{children:[a.jsxs(f2,{children:[a.jsxs(p2,{children:[a.jsx(m2,{onClick:()=>window.location.href="https://jininfra.com/",src:w2,alt:"Footer Logo"}),a.jsx(h2,{children:a.jsx("h1",{children:"주식회사 진인프라"})}),a.jsxs(g2,{children:[a.jsxs(Nd,{style:{marginBottom:"2%"},children:[a.jsx("p",{children:"Email"}),a.jsx("a",{href:"mailto:jininfra@jininfra.com",children:"jininfra@jininfra.com"})]}),a.jsxs(Nd,{children:[a.jsx("p",{children:"Call"}),a.jsx("a",{href:"tel:02-330-3900",children:"02-330-3900"})]}),a.jsx("h3",{style:{marginTop:"3%"},children:"서울센터 | 서울시 송파구 가락로16길3-20 진인프라빌딩"})]})]}),a.jsxs(v2,{children:[a.jsx("h2",{children:"Contact Us"}),a.jsxs(y2,{children:[a.jsx("hr",{style:{borderColor:"rgba(255, 255, 255, 0.2)"}}),a.jsx("h3",{style:{marginTop:"6%",marginBottom:"6%"},children:"Frontend Developer"})]}),a.jsxs(Id,{children:[a.jsx(Ld,{children:a.jsx("p",{children:"👤"})}),a.jsx("span",{children:"YeEun Shin"}),a.jsxs(Rd,{children:[a.jsx("a",{href:"https://github.com/yengeun",children:a.jsx("img",{src:Md,alt:"Github"})}),a.jsx("a",{href:"mailto:7613ez@gmail.com",children:a.jsx("img",{src:Dd,alt:"Gmail"})})]})]}),a.jsxs(Id,{children:[a.jsx(Ld,{children:a.jsx("p",{children:"👤"})}),a.jsx("span",{children:"Soeun Yoon"}),a.jsxs(Rd,{children:[a.jsx("a",{href:"https://github.com/Dubabbi",children:a.jsx("img",{src:Md,alt:"Github"})}),a.jsx("a",{href:"mailto:thdms3160@naver.com",children:a.jsx("img",{src:Dd,alt:"Gmail"})})]})]})]})]}),a.jsx(x2,{children:a.jsx("p",{style:{textAlign:"left",marginLeft:"7.5%"},children:"© 2024 Jenie. All rights reserved."})})]}),k2="/assets/ball-RuGWw7hf.svg",j2="/assets/ball2-_4ZmxEbj.svg",fo="/assets/cat-B7n9BXOC.svg",gh="/assets/cat2-DFpCBDnE.svg",C2="/assets/quantum2-Z_9Fj8HX.svg",_2="/assets/window-BGzfOsee.svg",b2=b.div`
    margin-top: -5%;
    padding-top: 5%;
    background-color: #eee;
`,vh=b.div`
    height: 320vh;
    max-height: 320vh;
    margin-top: -5%;
    margin-bottom: 20%;
    padding-top: 5%;
    background-color: #eee;

`,yh=b.div`
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
`,E2=b.div`
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
`;const Pa=b.button`
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
`,xh=b.div`
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
`,O2=b.div`
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
`,P2=b.p`
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
`;const T2=Cr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,z2=b.img`
  max-width: 33%;
  animation: ${T2} 8s linear infinite;
  @media(max-width: 800px){
    max-width: 60%;
  }
`,$d=b.button`
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
`,I2=()=>{C.useState(!1);const e=yt(),[t,n]=C.useState([]),r=i=>{t.includes(i)?n(t.filter(o=>o!==i)):n([...t,i])};return a.jsx(b2,{children:a.jsxs(E2,{children:[a.jsx("h1",{children:"양자 개념"}),a.jsx("hr",{}),a.jsxs("div",{className:"accordion-item",children:[a.jsxs("div",{className:`accordion-title ${t.includes(0)?"active":""}`,onClick:()=>r(0),children:[a.jsx("span",{children:"양자란 ?"}),a.jsx("span",{children:t.includes(0)?"▲":"▼"})]}),t.includes(0)&&a.jsxs("div",{className:"accordion-content",children:[a.jsxs("p",{children:["양자란, 더 이상 나눌 수 없는 에너지의 최소량의 단위입니다. 쉽게 말해, ",a.jsx("span",{style:{color:"#B0E3FF"},children:"우리가 에너지를 가장 작은 단위로 쪼개면 그 단위를 양자"}),"라고 부릅니다. 처음으로 양자는 빛에서 발견되었으며, 이 작은 에너지가 어떻게 움직이는지 연구하는 것이 바로 양자 물리학, 양자 역학의 시작입니다."]}),a.jsx("div",{style:{textAlign:"center",height:"40vh"},children:a.jsx(z2,{src:C2})})]})]}),a.jsxs("div",{className:"accordion-item",children:[a.jsxs("div",{className:`accordion-title ${t.includes(1)?"active":""}`,onClick:()=>r(1),children:[a.jsx("span",{children:"양자역학이란 ?"}),a.jsx("span",{children:t.includes(1)?"▲":"▼"})]}),t.includes(1)&&a.jsx("div",{className:"accordion-content",children:a.jsxs("p",{children:["양자역학은 ",a.jsx("span",{style:{color:"#B0E3FF"},children:"원자와 전자 같은 매우 작은 입자들이 작용하는 방식을 설명하는 이론"}),"으로, 양자역학은 양자라는 에너지의 최소 단위를 포함한 아주 작은 입자들(전자, 광자 등)의 행동과 상호작용을 연구하는 물리학의 한 분야입니다. 이는 입자들이 고전 물리학의 법칙을 따르지 않고, 파동과 입자 성질을 동시에 가지며, 불확정성과 중첩 등의 독특한 성질을 나타내는 현상들을 설명합니다."]})})]}),a.jsxs("div",{className:"accordion-item",children:[a.jsxs("div",{className:`accordion-title ${t.includes(2)?"active":""}`,onClick:()=>r(2),children:[a.jsx("span",{children:"불확정성의 원리"}),a.jsx("span",{children:t.includes(2)?"▲":"▼"})]}),t.includes(2)&&a.jsxs("div",{className:"accordion-content",children:[a.jsx("h1",{style:{marginBottom:"1%",color:"#eee"},children:'"입자의 위치나 운동량을 동시에 정확하게 알 수 없다"'}),a.jsx("hr",{style:{border:"none",borderTop:"0.5px solid #ddd"}}),a.jsxs("p",{children:["하이젠베르크라는 물리학자는 실험을 통해, 우리가 아무리 정밀한 장비를 사용하더라도 입자의 위치를 알면 그 입자의 속도를 정확히 알 수 없고, 반대로 속도를 알면 위치를 정확히 알 수 없다는 것을 발견했습니다. 이는 마치",a.jsx("span",{style:{color:"#B0E3FF"},children:"우리가 축구공을 발로 찬 후에 그 공의 정확한 위치와 속도를 동시에 파악하기 어려운 것"}),"과 비슷합니다."]}),a.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",gap:"10%",height:"170px"},children:[a.jsx("img",{src:j2,style:{width:"100px",minWidth:"20%"},alt:"Ball"}),a.jsx("img",{src:k2,style:{width:"100px",minWidth:"15%"},alt:"Ball"})]})]})]}),a.jsxs("div",{className:"accordion-item",children:[a.jsxs("div",{className:`accordion-title ${t.includes(3)?"active":""}`,onClick:()=>r(3),children:[a.jsx("span",{children:"양자 중첩(슈뢰딩거의 고양이)"}),a.jsx("span",{children:t.includes(3)?"▲":"▼"})]}),t.includes(3)&&a.jsxs("div",{className:"accordion-content",children:[a.jsxs("p",{children:["슈뢰딩거의 고양이는 양자역학의 개념을 설명하기 위해 1935년 오스트리아의 물리학자 ",a.jsx("span",{style:{color:"#B0E3FF"},children:"에르빈 슈뢰딩거"}),"가 제안한 사고 실험입니다. 이 실험은 양자역학의 중첩 상태와 그로 인한 철학적 문제를 쉽게 설명하기 위한 것입니다. 특히 양자역학의 코펜하겐 해석을 이해하는 데 중요한 역할을 합니다."]}),a.jsx("div",{style:{textAlign:"center"},children:a.jsx($d,{style:{cursor:"pointer"},onClick:i=>e("/cat"),children:" More"})})]})]}),a.jsxs("div",{className:"accordion-item",children:[a.jsxs("div",{className:`accordion-title ${t.includes(4)?"active":""}`,onClick:()=>r(4),children:[a.jsx("span",{children:"파동 함수 붕괴"}),a.jsx("span",{children:t.includes(4)?"▲":"▼"})]}),t.includes(4)&&a.jsxs("div",{className:"accordion-content",children:[a.jsx("h1",{style:{marginBottom:"1%",color:"#eee"},children:"중첩 상태가 관측되었을 때, 그 상태가 하나로 확정되는 과정"}),a.jsx("hr",{style:{border:"none",borderTop:"0.5px solid #ddd"}}),a.jsxs("p",{children:["양자 물체는 여러 상태가 동시에 존재할 수 있는데, 이 상태를 기술하는 것이 ",a.jsx("span",{style:{color:"#B0E3FF"},children:"파동 함수"}),"입니다. 여러 상태가 있더라도 외부에서 관측을 하면 파동 함수가 붕괴하면서 입자는 하나의 확정된 상태로 변화합니다. 파동 함수 붕괴는 양자 중첩 상태에 있는 입자가 관측되었을 때 하나의 확정된 상태로 변하는 과정입니다. 양자 시스템은 여러 상태(중첩 상태)로 존재할 수 있지만, 누군가 그 시스템을 관측하는 순간, 그 시스템은 중첩된 여러 상태 중 하나로 결정됩니다. 이를 파동 함수가 붕괴했다고 표현합니다."]}),a.jsxs(P2,{children:[a.jsx("img",{src:fo,alt:"cat",style:{maxWidth:"40%"}})," ",a.jsx("img",{src:gh,alt:"cat2",style:{minWidth:"19%",width:"177px",marginBottom:"0px"}})]}),a.jsx("p",{style:{marginTop:"5%"},children:"파동 함수 붕괴는 슈뢰딩거의 고양이에서 상자를 열고 난 후에 발생하는 과정으로 이해할 수 있습니다."})]})]}),a.jsxs("div",{className:"accordion-item",children:[a.jsxs("div",{className:`accordion-title ${t.includes(5)?"active":""}`,onClick:()=>r(5),children:[a.jsx("span",{children:"파동-입자 이중성"}),a.jsx("span",{children:t.includes(5)?"▲":"▼"})]}),t.includes(5)&&a.jsxs("div",{className:"accordion-content",children:[a.jsxs("p",{children:["양자역학의 중요한 개념 중 하나는 ",a.jsx("span",{style:{color:"#B0E3FF"},children:"파동-입자 이중성"}),"입니다. 이는 빛과 물질이 파동과 입자 두 가지 성질을 동시에 가진다는 것입니다. 예를 들어, 전자는 파동처럼 간섭 패턴을 만들 수 있지만, 입자처럼 공간에서 특정 위치에 있을 수 있습니다. 파동-입자 이중성은 물질과 빛이 파동과 입자의 성질을 동시에 가진다는 개념입니다."]}),a.jsxs(O2,{children:[a.jsx("div",{style:{flex:"1 1 40%",textAlign:"center"},children:a.jsx("img",{src:_2})}),a.jsx("div",{style:{flex:"1 1 60%",textAlign:"left"},children:a.jsx("p",{children:'빛을 생각해봅시다. 빛은 우리가 매일 접하는 것인데, 고전적인 관점에서 보면 빛은 파동처럼 퍼지며, 렌즈를 통과해 굴절되고 반사되기도 합니다. 예를 들어, 햇빛이 창문을 통해 들어올 때, 그 빛은 창문에서 굴절되고 반사되어 방 안에 퍼집니다. 이때 빛은 파동처럼 행동합니다. 그러나 빛을 어두운 방에서 레이저 포인터로 쏘면 그 레이저 포인터는 특정한 지점에만 빛이 도달하는 것을 볼 수 있습니다. 이때 빛은 마치 총알처럼 특정한 점에 도달하는 "입자"처럼 행동합니다. 이처럼, 빛은 파동처럼 창문에서 굴절되고 퍼질 수 있지만, 특정 조건에서는 입자처럼 특정한 지점에 정확히 도달하는 두 가지 성질을 동시에 가집니다.'})})]})]})]}),a.jsxs("div",{className:"accordion-item",children:[a.jsxs("div",{className:`accordion-title ${t.includes(6)?"active":""}`,onClick:()=>r(6),children:[a.jsx("span",{children:"양자 얽힘"}),a.jsx("span",{children:t.includes(6)?"▲":"▼"})]}),t.includes(6)&&a.jsxs("div",{className:"accordion-content",children:[a.jsxs("p",{children:["양자 얽힘은 ",a.jsx("span",{style:{color:"#B0E3FF"},children:"두 개 이상의 입자가 서로 강하게 연결되어 있는 상태"}),"를 말합니다. 얽힌 입자들은 멀리 떨어져 있어도 얽혀 있어, 서로의 상태에 영향을 미칠 수 있습니다."]}),a.jsx("p",{children:'양자 얽힘에서는 두 입자가 얽힌 상태에 있으면, 한 입자의 상태가 결정되는 순간 다른 입자의 상태도 그에 맞춰 즉각적으로 결정됩니다. 얽힘 상태에서는 물리적으로 떨어져 있어도 정보가 "순간적으로" 전해지는 것처럼 보입니다.'}),a.jsx("div",{style:{textAlign:"center"},children:a.jsx($d,{style:{cursor:"pointer"},onClick:i=>e("/coinentanglement"),children:" 예시 보기"})})]})]})]})})};function L2(){return a.jsx(a.Fragment,{children:a.jsx(I2,{})})}const Pl=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 160vh;
  max-height: 160vh;
  margin-top: -5%;
  margin-bottom: -10%;
  background-color: #eee;
`,Uu=b.h2`
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
`;const Vu=b.div`
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

`,Gu="/assets/sad-BYYytyiN.svg",R2=()=>{const e=[{question:"양자 얽힘 현상은 거리에 상관없이 두 입자가 서로 연결된 상태를 유지하는 것을 의미한다.",correctAnswer:"O",explanation:"양자 얽힘은 두 입자가 멀리 떨어져 있어도 서로의 상태가 연관된 상태를 유지하는 현상입니다. 한 입자의 상태가 변하면 즉시 다른 입자의 상태도 변합니다."},{question:"불확정성의 원리를 최초로 밝힌 사람은 하이젠베르크이다",correctAnswer:"O",explanation:"불확정성의 원리를 최초로 밝힌 사람은 하이젠베르크이다"},{question:"진인프라의 설립일은 2006년 5월 4일이다.",correctAnswer:"O",explanation:"진인프라의 설립일은 2006년 5월 4일이다."},{question:"양자란 화학 원소로서의 특성을 잃지 않는 범위에서 도달할 수 있는 물질의 기본적인 최소입자이다.",correctAnswer:"X",explanation:'해당 설명은 "원자"에 대한 설명으로, 양자란 더 이상 나눌 수 없는 에너지의 최소량의 단위이다'},{question:"양자 컴퓨터는 모든 문제를 일반 컴퓨터보다 빠르게 해결할 수 있다.",correctAnswer:"X",explanation:" 양자 컴퓨터는 특정한 문제, 특히 복잡한 최적화 문제나 암호 해독 등에서 더 뛰어난 성능을 발휘합니다. "},{question:"슈뢰딩거의 고양이 실험에서 고양이는 살았다.",correctAnswer:"X",explanation:'양자역학의 해석에 따르자면 고양이의 생사 여부를 확인해보기 전까지는 고양이의 상태를 살아있으면서도 동시에 죽어있는 상태라고 규정하기 때문에 정답은 "알 수 없다"이다.'}],[t,n]=C.useState(0),[r,i]=C.useState(0),[o,l]=C.useState(!1),[s,u]=C.useState(""),[c,h]=C.useState(""),[f,g]=C.useState(!1),y=v=>{const S=e[t];let p=1500;v===S.correctAnswer?(i(r+1),u("정답입니다!"),h("")):(u("오답입니다!"),h(S.explanation),p=3e3),l(!0),setTimeout(()=>{l(!1),t<e.length-1?n(t+1):g(!0)},p)},x=yt();return a.jsx(Pl,{children:f?a.jsxs(Vu,{children:[a.jsx("h2",{children:"퀴즈 완료!"}),a.jsxs("p",{children:["총 ",a.jsxs("span",{style:{color:"#0015ff"},children:[e.length,"문제"]})," 중 ",a.jsxs("span",{style:{color:"#0015ff"},children:[r,"문제"]})," 맞추셨습니다."]}),r<4?a.jsx("img",{src:Gu,alt:"Genie1"}):a.jsx("img",{src:fr,alt:"Genie2"}),a.jsx(Xn,{onClick:()=>x("/quizmain"),children:" 처음으로 "})]}):a.jsxs(a.Fragment,{children:[a.jsx(Uu,{children:e[t].question}),a.jsxs("div",{children:[a.jsx(pr,{onClick:()=>y("O"),children:"O"}),a.jsx(pr,{onClick:()=>y("X"),children:"X"})]}),o&&a.jsxs(Qu,{children:[a.jsx("p",{children:s}),c&&a.jsx("small",{children:c})]})]})})};function N2(){return a.jsx(a.Fragment,{children:a.jsx(R2,{})})}const M2=()=>{const e=yt();return a.jsxs(Pl,{children:[a.jsx(Xn,{onClick:()=>e("/quiz"),children:" 기초 퀴즈"}),a.jsx(Xn,{onClick:()=>e("/medium"),children:" 중급 퀴즈"}),a.jsx(Xn,{onClick:()=>e("/advanced"),children:" 고급 퀴즈"})]})};function D2(){return a.jsx(a.Fragment,{children:a.jsx(M2,{})})}const $2=()=>{const e=[{question:"양자 얽힘 상태에 있는 두 입자는 한 입자의 상태가 바뀌면 즉시 다른 입자의 상태도 바뀐다.",correctAnswer:"O",explanation:"양자 얽힘은 두 입자가 서로 먼 거리에 떨어져 있어도 서로 연결된 상태를 유지하는 현상입니다. 한 입자의 상태가 변화하면 즉시 다른 입자의 상태도 바뀝니다. "},{question:"불확정성 원리는 입자의 위치와 속도를 동시에 정확히 측정할 수 있다는 이론이다",correctAnswer:"X",explanation:"불확정성 원리는 입자의 위치와 속도를 동시에 정확히 측정할 수 없다는 원리입니다. 위치를 정확히 알수록 속도에 대한 정보는 불확실해집니다."},{question:"양자 상태는 외부 관측이 이루어지면 즉시 붕괴된다.",correctAnswer:"O",explanation:"양자 상태는 관측에 의해 결정됩니다. 관측이 이루어지면 입자의 상태가 고정되어 양자 중첩 상태는 붕괴됩니다."},{question:"양자 터널링은 입자가 에너지를 충분히 갖고 있을 때만 장벽을 통과할 수 있는 현상이다.",correctAnswer:"X",explanation:"양자 터널링은 입자가 에너지 장벽을 넘을 수 없을 때도 통과하는 현상입니다. 이는 고전적인 물리학으로 설명할 수 없는 양자적 현상입니다."},{question:"양자 얽힘을 이용하면 정보를 빛의 속도보다 빠르게 전달할 수 있다",correctAnswer:"X",explanation:"양자 얽힘은 입자의 상태 변화를 즉시 반영하지만, 이를 통해 실제 정보를 빛의 속도보다 빠르게 전달할 수는 없습니다."},{question:"양자역학에서 파동함수는 입자의 위치를 정확히 예측해준다",correctAnswer:"X",explanation:"파동함수는 입자의 위치를 정확히 예측하는 것이 아니라, 입자가 특정 위치에 있을 확률을 나타냅니다."}],[t,n]=C.useState(0),[r,i]=C.useState(0),[o,l]=C.useState(!1),[s,u]=C.useState(""),[c,h]=C.useState(""),[f,g]=C.useState(!1),y=v=>{const S=e[t];let p=1500;v===S.correctAnswer?(i(r+1),u("정답입니다!"),h("")):(u("오답입니다!"),h(S.explanation),p=3e3),l(!0),setTimeout(()=>{l(!1),t<e.length-1?n(t+1):g(!0)},p)},x=yt();return a.jsx(Pl,{children:f?a.jsxs(Vu,{children:[a.jsx("h2",{children:"퀴즈 완료!"}),a.jsxs("p",{children:["총 ",a.jsxs("span",{style:{color:"#0015ff"},children:[e.length,"문제"]})," 중 ",a.jsxs("span",{style:{color:"#0015ff"},children:[r,"문제"]})," 맞추셨습니다."]}),r<4?a.jsx("img",{src:Gu,alt:"Genie1"}):a.jsx("img",{src:fr,alt:"Genie2"}),a.jsx(Xn,{onClick:()=>x("/quizmain"),children:" 처음으로 "})]}):a.jsxs(a.Fragment,{children:[a.jsx(Uu,{children:e[t].question}),a.jsxs("div",{children:[a.jsx(pr,{onClick:()=>y("O"),children:"O"}),a.jsx(pr,{onClick:()=>y("X"),children:"X"})]}),o&&a.jsxs(Qu,{children:[a.jsx("p",{children:s}),c&&a.jsx("small",{children:c})]})]})})};function A2(){return a.jsx(a.Fragment,{children:a.jsx($2,{})})}const F2=()=>{const e=[{question:"양자 게이트는 고전적인 논리 게이트와 동일한 방식으로 동작한다",correctAnswer:"X",explanation:"양자 게이트는 큐비트의 상태를 변화시키는 양자 연산을 수행하며, 고전적인 논리 게이트와는 다른 방식으로 동작합니다."},{question:"양자 컴퓨터는 오류가 발생할 가능성이 고전 컴퓨터보다 높다.",correctAnswer:"O",explanation:"양자 컴퓨터는 큐비트의 민감한 상태 때문에 오류가 발생할 가능성이 높습니다. 이를 해결하기 위해 오류 정정 기술이 연구되고 있습니다."},{question:"양자 상태의 코히런스(coherence)는 환경과의 상호작용에 의해 손실되며, 이는 양자 디코히런스(decoherence)라고 불린다.",correctAnswer:"O",explanation:"코히런스는 양자 상태가 다른 상태들과 정렬된 특성을 말합니다.환경과의 상호작용에 의해 이 정렬이 깨지면 디코히런스가 발생하여 양자 상태의 정보를 잃게 됩니다."},{question:"양자 컴퓨터의 성능은 큐비트의 개수에 비례하여 선형적으로 증가한다",correctAnswer:"X",explanation:"큐비트가 추가될수록 양자 컴퓨터의 성능은 기하급수적으로 증가하며, 선형적으로 증가하는 것이 아닙니다."},{question:"양자 컴퓨터에서 큐비트의 상태를 측정하는 것은 양자 얽힘을 유지한 채로 이루어질 수 있다.",correctAnswer:"X",explanation:"큐비트의 상태를 측정하면 양자 얽힘 상태가 붕괴됩니다. 얽힌 상태에서는 측정이 이루어지면 더 이상 얽힌 상태를 유지할 수 없습니다. "},{question:"양자 상호작용에서는 양자 터널링 효과를 이용해 에너지 장벽을 넘지 않고도 전자가 이동할 수 있다.",correctAnswer:"O",explanation:' 양자 터널링은 고전 물리학적으로 넘을 수 없는 에너지 장벽을 양자역학적으로 입자가 "통과"할 수 있는 현상입니다. 이 현상은 반도체와 같은 분야에서도 중요한 역할을 합니다.'}],[t,n]=C.useState(0),[r,i]=C.useState(0),[o,l]=C.useState(!1),[s,u]=C.useState(""),[c,h]=C.useState(""),[f,g]=C.useState(!1),y=v=>{const S=e[t];let p=1500;v===S.correctAnswer?(i(r+1),u("정답입니다!"),h("")):(u("오답입니다!"),h(S.explanation),p=3e3),l(!0),setTimeout(()=>{l(!1),t<e.length-1?n(t+1):g(!0)},p)},x=yt();return a.jsx(Pl,{children:f?a.jsxs(Vu,{children:[a.jsx("h2",{children:"퀴즈 완료!"}),a.jsxs("p",{children:["총 ",a.jsxs("span",{style:{color:"#0015ff"},children:[e.length,"문제"]})," 중 ",a.jsxs("span",{style:{color:"#0015ff"},children:[r,"문제"]})," 맞추셨습니다."]}),r<5?a.jsx("img",{src:Gu,alt:"Genie1"}):a.jsx("img",{src:fr,alt:"Genie2"}),a.jsx(Xn,{onClick:()=>x("/quizmain"),children:" 처음으로 "})]}):a.jsxs(a.Fragment,{children:[a.jsx(Uu,{children:e[t].question}),a.jsxs("div",{children:[a.jsx(pr,{onClick:()=>y("O"),children:"O"}),a.jsx(pr,{onClick:()=>y("X"),children:"X"})]}),o&&a.jsxs(Qu,{children:[a.jsx("p",{children:s}),c&&a.jsx("small",{children:c})]})]})})};function B2(){return a.jsx(a.Fragment,{children:a.jsx(F2,{})})}var wh={},Sh={},Tl={},kh={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};e.default=t})(kh);var W2="Expected a function",Ad=NaN,H2="[object Symbol]",U2=/^\s+|\s+$/g,Q2=/^[-+]0x[0-9a-f]+$/i,V2=/^0b[01]+$/i,G2=/^0o[0-7]+$/i,K2=parseInt,q2=typeof _i=="object"&&_i&&_i.Object===Object&&_i,Y2=typeof self=="object"&&self&&self.Object===Object&&self,X2=q2||Y2||Function("return this")(),Z2=Object.prototype,J2=Z2.toString,ex=Math.max,tx=Math.min,ps=function(){return X2.Date.now()};function nx(e,t,n){var r,i,o,l,s,u,c=0,h=!1,f=!1,g=!0;if(typeof e!="function")throw new TypeError(W2);t=Fd(t)||0,Ta(n)&&(h=!!n.leading,f="maxWait"in n,o=f?ex(Fd(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g);function y(j){var _=r,T=i;return r=i=void 0,c=j,l=e.apply(T,_),l}function x(j){return c=j,s=setTimeout(p,t),h?y(j):l}function v(j){var _=j-u,T=j-c,O=t-_;return f?tx(O,o-T):O}function S(j){var _=j-u,T=j-c;return u===void 0||_>=t||_<0||f&&T>=o}function p(){var j=ps();if(S(j))return d(j);s=setTimeout(p,v(j))}function d(j){return s=void 0,g&&r?y(j):(r=i=void 0,l)}function m(){s!==void 0&&clearTimeout(s),c=0,r=u=i=s=void 0}function w(){return s===void 0?l:d(ps())}function k(){var j=ps(),_=S(j);if(r=arguments,i=this,u=j,_){if(s===void 0)return x(u);if(f)return s=setTimeout(p,t),y(u)}return s===void 0&&(s=setTimeout(p,t)),l}return k.cancel=m,k.flush=w,k}function Ta(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function rx(e){return!!e&&typeof e=="object"}function ix(e){return typeof e=="symbol"||rx(e)&&J2.call(e)==H2}function Fd(e){if(typeof e=="number")return e;if(ix(e))return Ad;if(Ta(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Ta(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(U2,"");var n=V2.test(e);return n||G2.test(e)?K2(e.slice(2),n?2:8):Q2.test(e)?Ad:+e}var ox=nx,jh={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",l=0;l<arguments.length;l++){var s=arguments[l];s&&(o=i(o,r(s)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var l="";for(var s in o)t.call(o,s)&&o[s]&&(l=i(l,s));return l}function i(o,l){return l?o?o+" "+l:o+l:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(jh);var zl=jh.exports,z={},Ku={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(C);function n(i){return i&&i.__esModule?i:{default:i}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(o){return t.default.createElement("ul",{style:{display:"block"}},o)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(o){return t.default.createElement("button",null,o+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null};e.default=r})(Ku);Object.defineProperty(z,"__esModule",{value:!0});z.checkSpecKeys=z.checkNavigable=z.changeSlide=z.canUseDOM=z.canGoNext=void 0;z.clamp=_h;z.extractObject=void 0;z.filterSettings=wx;z.validSettings=z.swipeStart=z.swipeMove=z.swipeEnd=z.slidesOnRight=z.slidesOnLeft=z.slideHandler=z.siblingDirection=z.safePreventDefault=z.lazyStartIndex=z.lazySlidesOnRight=z.lazySlidesOnLeft=z.lazyEndIndex=z.keyHandler=z.initializedState=z.getWidth=z.getTrackLeft=z.getTrackCSS=z.getTrackAnimateCSS=z.getTotalSlides=z.getSwipeDirection=z.getSlideCount=z.getRequiredLazySlides=z.getPreClones=z.getPostClones=z.getOnDemandLazySlides=z.getNavigableIndexes=z.getHeight=void 0;var lx=Ch(C),sx=Ch(Ku);function Ch(e){return e&&e.__esModule?e:{default:e}}function vi(e){"@babel/helpers - typeof";return vi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vi(e)}function Bd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bd(Object(n),!0).forEach(function(r){ax(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ax(e,t,n){return t=ux(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ux(e){var t=cx(e,"string");return vi(t)=="symbol"?t:String(t)}function cx(e,t){if(vi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(vi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _h(e,t,n){return Math.max(t,Math.min(e,n))}var Zn=z.safePreventDefault=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()},bh=z.getOnDemandLazySlides=function(t){for(var n=[],r=Eh(t),i=Oh(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};z.getRequiredLazySlides=function(t){for(var n=[],r=Eh(t),i=Oh(t),o=r;o<i;o++)n.push(o);return n};var Eh=z.lazyStartIndex=function(t){return t.currentSlide-dx(t)},Oh=z.lazyEndIndex=function(t){return t.currentSlide+fx(t)},dx=z.lazySlidesOnLeft=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0},fx=z.lazySlidesOnRight=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow},za=z.getWidth=function(t){return t&&t.offsetWidth||0},Ph=z.getHeight=function(t){return t&&t.offsetHeight||0},Th=z.getSwipeDirection=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,l;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),l=Math.round(o*180/Math.PI),l<0&&(l=360-Math.abs(l)),l<=45&&l>=0||l<=360&&l>=315?"left":l>=135&&l<=225?"right":n===!0?l>=35&&l<=135?"up":"down":"vertical"},zh=z.canGoNext=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};z.extractObject=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};z.initializedState=function(t){var n=lx.default.Children.count(t.children),r=t.listRef,i=Math.ceil(za(r)),o=t.trackRef&&t.trackRef.node,l=Math.ceil(za(o)),s;if(t.vertical)s=i;else{var u=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(u*=i/100),s=Math.ceil((i-u)/t.slidesToShow)}var c=r&&Ph(r.querySelector('[data-index="0"]')),h=c*t.slidesToShow,f=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(f=n-1-t.initialSlide);var g=t.lazyLoadedList||[],y=bh(ee(ee({},t),{},{currentSlide:f,lazyLoadedList:g}));g=g.concat(y);var x={slideCount:n,slideWidth:s,listWidth:i,trackWidth:l,currentSlide:f,slideHeight:c,listHeight:h,lazyLoadedList:g};return t.autoplaying===null&&t.autoplay&&(x.autoplaying="playing"),x};z.slideHandler=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,l=t.index,s=t.slideCount,u=t.lazyLoad,c=t.currentSlide,h=t.centerMode,f=t.slidesToScroll,g=t.slidesToShow,y=t.useCSS,x=t.lazyLoadedList;if(n&&r)return{};var v=l,S,p,d,m={},w={},k=o?l:_h(l,0,s-1);if(i){if(!o&&(l<0||l>=s))return{};l<0?v=l+s:l>=s&&(v=l-s),u&&x.indexOf(v)<0&&(x=x.concat(v)),m={animating:!0,currentSlide:v,lazyLoadedList:x,targetSlide:v},w={animating:!1,targetSlide:v}}else S=v,v<0?(S=v+s,o?s%f!==0&&(S=s-s%f):S=0):!zh(t)&&v>c?v=S=c:h&&v>=s?(v=o?s:s-1,S=o?0:s-1):v>=s&&(S=v-s,o?s%f!==0&&(S=0):S=s-g),!o&&v+g>=s&&(S=s-g),p=Ko(ee(ee({},t),{},{slideIndex:v})),d=Ko(ee(ee({},t),{},{slideIndex:S})),o||(p===d&&(v=S),p=d),u&&(x=x.concat(bh(ee(ee({},t),{},{currentSlide:v})))),y?(m={animating:!0,currentSlide:S,trackStyle:Ih(ee(ee({},t),{},{left:p})),lazyLoadedList:x,targetSlide:k},w={animating:!1,currentSlide:S,trackStyle:Go(ee(ee({},t),{},{left:d})),swipeLeft:null,targetSlide:k}):m={currentSlide:S,trackStyle:Go(ee(ee({},t),{},{left:d})),lazyLoadedList:x,targetSlide:k};return{state:m,nextState:w}};z.changeSlide=function(t,n){var r,i,o,l,s,u=t.slidesToScroll,c=t.slidesToShow,h=t.slideCount,f=t.currentSlide,g=t.targetSlide,y=t.lazyLoad,x=t.infinite;if(l=h%u!==0,r=l?0:(h-f)%u,n.message==="previous")o=r===0?u:c-r,s=f-o,y&&!x&&(i=f-o,s=i===-1?h-1:i),x||(s=g-u);else if(n.message==="next")o=r===0?u:r,s=f+o,y&&!x&&(s=(f+u)%h+r),x||(s=g+u);else if(n.message==="dots")s=n.index*n.slidesToScroll;else if(n.message==="children"){if(s=n.index,x){var v=gx(ee(ee({},t),{},{targetSlide:s}));s>n.currentSlide&&v==="left"?s=s-h:s<n.currentSlide&&v==="right"&&(s=s+h)}}else n.message==="index"&&(s=Number(n.index));return s};z.keyHandler=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};z.swipeStart=function(t,n,r){return t.target.tagName==="IMG"&&Zn(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};z.swipeMove=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,l=n.swipeToSlide,s=n.verticalSwiping,u=n.rtl,c=n.currentSlide,h=n.edgeFriction,f=n.edgeDragged,g=n.onEdge,y=n.swiped,x=n.swiping,v=n.slideCount,S=n.slidesToScroll,p=n.infinite,d=n.touchObject,m=n.swipeEvent,w=n.listHeight,k=n.listWidth;if(!r){if(i)return Zn(t);o&&l&&s&&Zn(t);var j,_={},T=Ko(n);d.curX=t.touches?t.touches[0].pageX:t.clientX,d.curY=t.touches?t.touches[0].pageY:t.clientY,d.swipeLength=Math.round(Math.sqrt(Math.pow(d.curX-d.startX,2)));var O=Math.round(Math.sqrt(Math.pow(d.curY-d.startY,2)));if(!s&&!x&&O>10)return{scrolling:!0};s&&(d.swipeLength=O);var E=(u?-1:1)*(d.curX>d.startX?1:-1);s&&(E=d.curY>d.startY?1:-1);var N=Math.ceil(v/S),M=Th(n.touchObject,s),D=d.swipeLength;return p||(c===0&&(M==="right"||M==="down")||c+1>=N&&(M==="left"||M==="up")||!zh(n)&&(M==="left"||M==="up"))&&(D=d.swipeLength*h,f===!1&&g&&(g(M),_.edgeDragged=!0)),!y&&m&&(m(M),_.swiped=!0),o?j=T+D*(w/k)*E:u?j=T-D*E:j=T+D*E,s&&(j=T+D*E),_=ee(ee({},_),{},{touchObject:d,swipeLeft:j,trackStyle:Go(ee(ee({},n),{},{left:j}))}),Math.abs(d.curX-d.startX)<Math.abs(d.curY-d.startY)*.8||d.swipeLength>10&&(_.swiping=!0,Zn(t)),_}};z.swipeEnd=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,l=n.listWidth,s=n.touchThreshold,u=n.verticalSwiping,c=n.listHeight,h=n.swipeToSlide,f=n.scrolling,g=n.onSwipe,y=n.targetSlide,x=n.currentSlide,v=n.infinite;if(!r)return i&&Zn(t),{};var S=u?c/s:l/s,p=Th(o,u),d={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(f||!o.swipeLength)return d;if(o.swipeLength>S){Zn(t),g&&g(p);var m,w,k=v?x:y;switch(p){case"left":case"up":w=k+Hd(n),m=h?Wd(n,w):w,d.currentDirection=0;break;case"right":case"down":w=k-Hd(n),m=h?Wd(n,w):w,d.currentDirection=1;break;default:m=k}d.triggerSlideHandler=m}else{var j=Ko(n);d.trackStyle=Ih(ee(ee({},n),{},{left:j}))}return d};var px=z.getNavigableIndexes=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o},Wd=z.checkNavigable=function(t,n){var r=px(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n},Hd=z.getSlideCount=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(u){if(t.vertical){if(u.offsetTop+Ph(u)/2>t.swipeLeft*-1)return r=u,!1}else if(u.offsetLeft-n+za(u)/2>t.swipeLeft*-1)return r=u,!1;return!0}),!r)return 0;var l=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,s=Math.abs(r.dataset.index-l)||1;return s}else return t.slidesToScroll},qu=z.checkSpecKeys=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)},Go=z.getTrackCSS=function(t){qu(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=mx(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var l=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",s=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",u=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=ee(ee({},o),{},{WebkitTransform:l,transform:s,msTransform:u})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o},Ih=z.getTrackAnimateCSS=function(t){qu(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Go(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n},Ko=z.getTrackLeft=function(t){if(t.unslick)return 0;qu(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,l=t.slideCount,s=t.slidesToShow,u=t.slidesToScroll,c=t.slideWidth,h=t.listWidth,f=t.variableWidth,g=t.slideHeight,y=t.fade,x=t.vertical,v=0,S,p,d=0;if(y||t.slideCount===1)return 0;var m=0;if(i?(m=-po(t),l%u!==0&&n+u>l&&(m=-(n>l?s-(n-l):l%u)),o&&(m+=parseInt(s/2))):(l%u!==0&&n+u>l&&(m=s-l%u),o&&(m=parseInt(s/2))),v=m*c,d=m*g,x?S=n*g*-1+d:S=n*c*-1+v,f===!0){var w,k=r&&r.node;if(w=n+po(t),p=k&&k.childNodes[w],S=p?p.offsetLeft*-1:0,o===!0){w=i?n+po(t):n,p=k&&k.children[w],S=0;for(var j=0;j<w;j++)S-=k&&k.children[j]&&k.children[j].offsetWidth;S-=parseInt(t.centerPadding),S+=p&&(h-p.offsetWidth)/2}}return S},po=z.getPreClones=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)},hx=z.getPostClones=function(t){return t.unslick||!t.infinite?0:t.slideCount},mx=z.getTotalSlides=function(t){return t.slideCount===1?1:po(t)+t.slideCount+hx(t)},gx=z.siblingDirection=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+vx(t)?"left":"right":t.targetSlide<t.currentSlide-yx(t)?"right":"left"},vx=z.slidesOnRight=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),i&&n%2===0&&(l+=1),l}return i?0:n-1},yx=z.slidesOnLeft=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var l=(n-1)/2+1;return parseInt(o)>0&&(l+=1),!i&&n%2===0&&(l+=1),l}return i?n-1:0};z.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var xx=z.validSettings=Object.keys(sx.default);function wx(e){return xx.reduce(function(t,n){return e.hasOwnProperty(n)&&(t[n]=e[n]),t},{})}var Il={};Object.defineProperty(Il,"__esModule",{value:!0});Il.Track=void 0;var Dt=Lh(C),hs=Lh(zl),ms=z;function Lh(e){return e&&e.__esModule?e:{default:e}}function hr(e){"@babel/helpers - typeof";return hr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hr(e)}function Ia(){return Ia=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ia.apply(this,arguments)}function Sx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ud(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Nh(r.key),r)}}function kx(e,t,n){return t&&Ud(e.prototype,t),n&&Ud(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function jx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&La(e,t)}function La(e,t){return La=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},La(e,t)}function Cx(e){var t=Rh();return function(){var r=qo(e),i;if(t){var o=qo(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return _x(this,i)}}function _x(e,t){if(t&&(hr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ra(e)}function Ra(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Rh(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Rh=function(){return!!e})()}function qo(e){return qo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},qo(e)}function Qd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qd(Object(n),!0).forEach(function(r){Na(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Na(e,t,n){return t=Nh(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Nh(e){var t=bx(e,"string");return hr(t)=="symbol"?t:String(t)}function bx(e,t){if(hr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(hr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var gs=function(t){var n,r,i,o,l;t.rtl?l=t.slideCount-1-t.index:l=t.index,i=l<0||l>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(l-t.currentSlide)%t.slideCount===0,l>t.currentSlide-o-1&&l<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=l&&l<t.currentSlide+t.slidesToShow;var s;t.targetSlide<0?s=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?s=t.targetSlide-t.slideCount:s=t.targetSlide;var u=l===s;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":u}},Ex=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,n.zIndex=t.currentSlide===t.index?999:998,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},vs=function(t,n){return t.key||n},Ox=function(t){var n,r=[],i=[],o=[],l=Dt.default.Children.count(t.children),s=(0,ms.lazyStartIndex)(t),u=(0,ms.lazyEndIndex)(t);return Dt.default.Children.forEach(t.children,function(c,h){var f,g={message:"children",index:h,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(h)>=0?f=c:f=Dt.default.createElement("div",null);var y=Ex(Ne(Ne({},t),{},{index:h})),x=f.props.className||"",v=gs(Ne(Ne({},t),{},{index:h}));if(r.push(Dt.default.cloneElement(f,{key:"original"+vs(f,h),"data-index":h,className:(0,hs.default)(v,x),tabIndex:"-1","aria-hidden":!v["slick-active"],style:Ne(Ne({outline:"none"},f.props.style||{}),y),onClick:function(d){f.props&&f.props.onClick&&f.props.onClick(d),t.focusOnSelect&&t.focusOnSelect(g)}})),t.infinite&&t.fade===!1){var S=l-h;S<=(0,ms.getPreClones)(t)&&(n=-S,n>=s&&(f=c),v=gs(Ne(Ne({},t),{},{index:n})),i.push(Dt.default.cloneElement(f,{key:"precloned"+vs(f,n),"data-index":n,tabIndex:"-1",className:(0,hs.default)(v,x),"aria-hidden":!v["slick-active"],style:Ne(Ne({},f.props.style||{}),y),onClick:function(d){f.props&&f.props.onClick&&f.props.onClick(d),t.focusOnSelect&&t.focusOnSelect(g)}}))),n=l+h,n<u&&(f=c),v=gs(Ne(Ne({},t),{},{index:n})),o.push(Dt.default.cloneElement(f,{key:"postcloned"+vs(f,n),"data-index":n,tabIndex:"-1",className:(0,hs.default)(v,x),"aria-hidden":!v["slick-active"],style:Ne(Ne({},f.props.style||{}),y),onClick:function(d){f.props&&f.props.onClick&&f.props.onClick(d),t.focusOnSelect&&t.focusOnSelect(g)}}))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)};Il.Track=function(e){jx(n,e);var t=Cx(n);function n(){var r;Sx(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),Na(Ra(r),"node",null),Na(Ra(r),"handleRef",function(s){r.node=s}),r}return kx(n,[{key:"render",value:function(){var i=Ox(this.props),o=this.props,l=o.onMouseEnter,s=o.onMouseOver,u=o.onMouseLeave,c={onMouseEnter:l,onMouseOver:s,onMouseLeave:u};return Dt.default.createElement("div",Ia({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},c),i)}}]),n}(Dt.default.PureComponent);var Ll={};function mr(e){"@babel/helpers - typeof";return mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mr(e)}Object.defineProperty(Ll,"__esModule",{value:!0});Ll.Dots=void 0;var Qi=Mh(C),Px=Mh(zl),Vd=z;function Mh(e){return e&&e.__esModule?e:{default:e}}function Gd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Tx(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gd(Object(n),!0).forEach(function(r){zx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zx(e,t,n){return t=Dh(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ix(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Kd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Dh(r.key),r)}}function Lx(e,t,n){return t&&Kd(e.prototype,t),n&&Kd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Dh(e){var t=Rx(e,"string");return mr(t)=="symbol"?t:String(t)}function Rx(e,t){if(mr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(mr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Nx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ma(e,t)}function Ma(e,t){return Ma=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Ma(e,t)}function Mx(e){var t=$h();return function(){var r=Yo(e),i;if(t){var o=Yo(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Dx(this,i)}}function Dx(e,t){if(t&&(mr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return $x(e)}function $x(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return($h=function(){return!!e})()}function Yo(e){return Yo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Yo(e)}var Ax=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n};Ll.Dots=function(e){Nx(n,e);var t=Mx(n);function n(){return Ix(this,n),t.apply(this,arguments)}return Lx(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,l=i.onMouseOver,s=i.onMouseLeave,u=i.infinite,c=i.slidesToScroll,h=i.slidesToShow,f=i.slideCount,g=i.currentSlide,y=Ax({slideCount:f,slidesToScroll:c,slidesToShow:h,infinite:u}),x={onMouseEnter:o,onMouseOver:l,onMouseLeave:s},v=[],S=0;S<y;S++){var p=(S+1)*c-1,d=u?p:(0,Vd.clamp)(p,0,f-1),m=d-(c-1),w=u?m:(0,Vd.clamp)(m,0,f-1),k=(0,Px.default)({"slick-active":u?g>=w&&g<=d:g===w}),j={message:"dots",index:S,slidesToScroll:c,currentSlide:g},_=this.clickHandler.bind(this,j);v=v.concat(Qi.default.createElement("li",{key:S,className:k},Qi.default.cloneElement(this.props.customPaging(S),{onClick:_})))}return Qi.default.cloneElement(this.props.appendDots(v),Tx({className:this.props.dotsClass},x))}}]),n}(Qi.default.PureComponent);var gr={};function vr(e){"@babel/helpers - typeof";return vr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vr(e)}Object.defineProperty(gr,"__esModule",{value:!0});gr.PrevArrow=gr.NextArrow=void 0;var Jn=Fh(C),Ah=Fh(zl),Fx=z;function Fh(e){return e&&e.__esModule?e:{default:e}}function Xo(){return Xo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xo.apply(this,arguments)}function qd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Zo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qd(Object(n),!0).forEach(function(r){Bx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bx(e,t,n){return t=Hh(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bh(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Yd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Hh(r.key),r)}}function Wh(e,t,n){return t&&Yd(e.prototype,t),n&&Yd(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Hh(e){var t=Wx(e,"string");return vr(t)=="symbol"?t:String(t)}function Wx(e,t){if(vr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(vr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Uh(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Da(e,t)}function Da(e,t){return Da=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Da(e,t)}function Qh(e){var t=Vh();return function(){var r=Jo(e),i;if(t){var o=Jo(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Hx(this,i)}}function Hx(e,t){if(t&&(vr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ux(e)}function Ux(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Vh(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Vh=function(){return!!e})()}function Jo(e){return Jo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Jo(e)}gr.PrevArrow=function(e){Uh(n,e);var t=Qh(n);function n(){return Bh(this,n),t.apply(this,arguments)}return Wh(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var l={key:"0","data-role":"none",className:(0,Ah.default)(i),style:{display:"block"},onClick:o},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},u;return this.props.prevArrow?u=Jn.default.cloneElement(this.props.prevArrow,Zo(Zo({},l),s)):u=Jn.default.createElement("button",Xo({key:"0",type:"button"},l)," ","Previous"),u}}]),n}(Jn.default.PureComponent);gr.NextArrow=function(e){Uh(n,e);var t=Qh(n);function n(){return Bh(this,n),t.apply(this,arguments)}return Wh(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,Fx.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var l={key:"1","data-role":"none",className:(0,Ah.default)(i),style:{display:"block"},onClick:o},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},u;return this.props.nextArrow?u=Jn.default.cloneElement(this.props.nextArrow,Zo(Zo({},l),s)):u=Jn.default.createElement("button",Xo({key:"1",type:"button"},l)," ","Next"),u}}]),n}(Jn.default.PureComponent);var Gh=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var l=o[i];n.call(r,l[1],l[0])}},t}()}(),$a=typeof window<"u"&&typeof document<"u"&&window.document===document,el=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Qx=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(el):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),Vx=2;function Gx(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&s()}function l(){Qx(o)}function s(){var u=Date.now();if(n){if(u-i<Vx)return;r=!0}else n=!0,r=!1,setTimeout(l,t);i=u}return s}var Kx=20,qx=["top","right","bottom","left","width","height","size","weight"],Yx=typeof MutationObserver<"u",Xx=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Gx(this.refresh.bind(this),Kx)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!$a||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Yx?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!$a||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=qx.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Kh=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},yr=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||el},qh=Rl(0,0,0,0);function tl(e){return parseFloat(e)||0}function Xd(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+tl(o)},0)}function Zx(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],l=e["padding-"+o];n[o]=tl(l)}return n}function Jx(e){var t=e.getBBox();return Rl(0,0,t.width,t.height)}function ew(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return qh;var r=yr(e).getComputedStyle(e),i=Zx(r),o=i.left+i.right,l=i.top+i.bottom,s=tl(r.width),u=tl(r.height);if(r.boxSizing==="border-box"&&(Math.round(s+o)!==t&&(s-=Xd(r,"left","right")+o),Math.round(u+l)!==n&&(u-=Xd(r,"top","bottom")+l)),!nw(e)){var c=Math.round(s+o)-t,h=Math.round(u+l)-n;Math.abs(c)!==1&&(s-=c),Math.abs(h)!==1&&(u-=h)}return Rl(i.left,i.top,s,u)}var tw=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof yr(e).SVGGraphicsElement}:function(e){return e instanceof yr(e).SVGElement&&typeof e.getBBox=="function"}}();function nw(e){return e===yr(e).document.documentElement}function rw(e){return $a?tw(e)?Jx(e):ew(e):qh}function iw(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(o.prototype);return Kh(l,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),l}function Rl(e,t,n,r){return{x:e,y:t,width:n,height:r}}var ow=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Rl(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=rw(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),lw=function(){function e(t,n){var r=iw(n);Kh(this,{target:t,contentRect:r})}return e}(),sw=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new Gh,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof yr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new ow(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof yr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new lw(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Yh=typeof WeakMap<"u"?new WeakMap:new Gh,Xh=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Xx.getInstance(),r=new sw(t,n,this);Yh.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Xh.prototype[e]=function(){var t;return(t=Yh.get(this))[e].apply(t,arguments)}});var aw=function(){return typeof el.ResizeObserver<"u"?el.ResizeObserver:Xh}();const uw=Object.freeze(Object.defineProperty({__proto__:null,default:aw},Symbol.toStringTag,{value:"Module"})),cw=gm(uw);Object.defineProperty(Tl,"__esModule",{value:!0});Tl.InnerSlider=void 0;var Oe=ji(C),dw=ji(kh),fw=ji(ox),pw=ji(zl),ne=z,hw=Il,mw=Ll,Zd=gr,gw=ji(cw);function ji(e){return e&&e.__esModule?e:{default:e}}function jn(e){"@babel/helpers - typeof";return jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jn(e)}function nl(){return nl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nl.apply(this,arguments)}function vw(e,t){if(e==null)return{};var n=yw(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function yw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Jd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jd(Object(n),!0).forEach(function(r){H(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function xw(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ef(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Jh(r.key),r)}}function ww(e,t,n){return t&&ef(e.prototype,t),n&&ef(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Sw(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Aa(e,t)}function Aa(e,t){return Aa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Aa(e,t)}function kw(e){var t=Zh();return function(){var r=rl(e),i;if(t){var o=rl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return jw(this,i)}}function jw(e,t){if(t&&(jn(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return W(e)}function W(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Zh(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Zh=function(){return!!e})()}function rl(e){return rl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},rl(e)}function H(e,t,n){return t=Jh(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jh(e){var t=Cw(e,"string");return jn(t)=="symbol"?t:String(t)}function Cw(e,t){if(jn(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(jn(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}Tl.InnerSlider=function(e){Sw(n,e);var t=kw(n);function n(r){var i;xw(this,n),i=t.call(this,r),H(W(i),"listRefHandler",function(l){return i.list=l}),H(W(i),"trackRefHandler",function(l){return i.track=l}),H(W(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var l=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,ne.getHeight)(l)+"px"}}),H(W(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var l=(0,ne.getOnDemandLazySlides)($($({},i.props),i.state));l.length>0&&(i.setState(function(u){return{lazyLoadedList:u.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l))}var s=$({listRef:i.list,trackRef:i.track},i.props);i.updateState(s,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new gw.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(u){u.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,u.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),H(W(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(l){return clearTimeout(l)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),H(W(i),"componentDidUpdate",function(l){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var s=(0,ne.getOnDemandLazySlides)($($({},i.props),i.state));s.length>0&&(i.setState(function(h){return{lazyLoadedList:h.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s))}i.adaptHeight();var u=$($({listRef:i.list,trackRef:i.track},i.props),i.state),c=i.didPropsChange(l);c&&i.updateState(u,c,function(){i.state.currentSlide>=Oe.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Oe.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),H(W(i),"onWindowResized",function(l){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,fw.default)(function(){return i.resizeWindow(l)},50),i.debouncedResize()}),H(W(i),"resizeWindow",function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,s=!!(i.track&&i.track.node);if(s){var u=$($({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(u,l,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),H(W(i),"updateState",function(l,s,u){var c=(0,ne.initializedState)(l);l=$($($({},l),c),{},{slideIndex:c.currentSlide});var h=(0,ne.getTrackLeft)(l);l=$($({},l),{},{left:h});var f=(0,ne.getTrackCSS)(l);(s||Oe.default.Children.count(i.props.children)!==Oe.default.Children.count(l.children))&&(c.trackStyle=f),i.setState(c,u)}),H(W(i),"ssrInit",function(){if(i.props.variableWidth){var l=0,s=0,u=[],c=(0,ne.getPreClones)($($($({},i.props),i.state),{},{slideCount:i.props.children.length})),h=(0,ne.getPostClones)($($($({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(_){u.push(_.props.style.width),l+=_.props.style.width});for(var f=0;f<c;f++)s+=u[u.length-1-f],l+=u[u.length-1-f];for(var g=0;g<h;g++)l+=u[g];for(var y=0;y<i.state.currentSlide;y++)s+=u[y];var x={width:l+"px",left:-s+"px"};if(i.props.centerMode){var v="".concat(u[i.state.currentSlide],"px");x.left="calc(".concat(x.left," + (100% - ").concat(v,") / 2 ) ")}return{trackStyle:x}}var S=Oe.default.Children.count(i.props.children),p=$($($({},i.props),i.state),{},{slideCount:S}),d=(0,ne.getPreClones)(p)+(0,ne.getPostClones)(p)+S,m=100/i.props.slidesToShow*d,w=100/d,k=-w*((0,ne.getPreClones)(p)+i.state.currentSlide)*m/100;i.props.centerMode&&(k+=(100-w*m/100)/2);var j={width:m+"%",left:k+"%"};return{slideWidth:w+"%",trackStyle:j}}),H(W(i),"checkImagesLoad",function(){var l=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],s=l.length,u=0;Array.prototype.forEach.call(l,function(c){var h=function(){return++u&&u>=s&&i.onWindowResized()};if(!c.onclick)c.onclick=function(){return c.parentNode.focus()};else{var f=c.onclick;c.onclick=function(g){f(g),c.parentNode.focus()}}c.onload||(i.props.lazyLoad?c.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(c.onload=h,c.onerror=function(){h(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),H(W(i),"progressiveLazyLoad",function(){for(var l=[],s=$($({},i.props),i.state),u=i.state.currentSlide;u<i.state.slideCount+(0,ne.getPostClones)(s);u++)if(i.state.lazyLoadedList.indexOf(u)<0){l.push(u);break}for(var c=i.state.currentSlide-1;c>=-(0,ne.getPreClones)(s);c--)if(i.state.lazyLoadedList.indexOf(c)<0){l.push(c);break}l.length>0?(i.setState(function(h){return{lazyLoadedList:h.lazyLoadedList.concat(l)}}),i.props.onLazyLoad&&i.props.onLazyLoad(l)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),H(W(i),"slideHandler",function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=i.props,c=u.asNavFor,h=u.beforeChange,f=u.onLazyLoad,g=u.speed,y=u.afterChange,x=i.state.currentSlide,v=(0,ne.slideHandler)($($($({index:l},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!s})),S=v.state,p=v.nextState;if(S){h&&h(x,S.currentSlide);var d=S.lazyLoadedList.filter(function(m){return i.state.lazyLoadedList.indexOf(m)<0});f&&d.length>0&&f(d),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),y&&y(x),delete i.animationEndCallback),i.setState(S,function(){c&&i.asNavForIndex!==l&&(i.asNavForIndex=l,c.innerSlider.slideHandler(l)),p&&(i.animationEndCallback=setTimeout(function(){var m=p.animating,w=vw(p,["animating"]);i.setState(w,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:m})},10)),y&&y(S.currentSlide),delete i.animationEndCallback})},g))})}}),H(W(i),"changeSlide",function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=$($({},i.props),i.state),c=(0,ne.changeSlide)(u,l);if(!(c!==0&&!c)&&(s===!0?i.slideHandler(c,s):i.slideHandler(c),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var h=i.list.querySelectorAll(".slick-current");h[0]&&h[0].focus()}}),H(W(i),"clickHandler",function(l){i.clickable===!1&&(l.stopPropagation(),l.preventDefault()),i.clickable=!0}),H(W(i),"keyHandler",function(l){var s=(0,ne.keyHandler)(l,i.props.accessibility,i.props.rtl);s!==""&&i.changeSlide({message:s})}),H(W(i),"selectHandler",function(l){i.changeSlide(l)}),H(W(i),"disableBodyScroll",function(){var l=function(u){u=u||window.event,u.preventDefault&&u.preventDefault(),u.returnValue=!1};window.ontouchmove=l}),H(W(i),"enableBodyScroll",function(){window.ontouchmove=null}),H(W(i),"swipeStart",function(l){i.props.verticalSwiping&&i.disableBodyScroll();var s=(0,ne.swipeStart)(l,i.props.swipe,i.props.draggable);s!==""&&i.setState(s)}),H(W(i),"swipeMove",function(l){var s=(0,ne.swipeMove)(l,$($($({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));s&&(s.swiping&&(i.clickable=!1),i.setState(s))}),H(W(i),"swipeEnd",function(l){var s=(0,ne.swipeEnd)(l,$($($({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(s){var u=s.triggerSlideHandler;delete s.triggerSlideHandler,i.setState(s),u!==void 0&&(i.slideHandler(u),i.props.verticalSwiping&&i.enableBodyScroll())}}),H(W(i),"touchEnd",function(l){i.swipeEnd(l),i.clickable=!0}),H(W(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),H(W(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),H(W(i),"slickGoTo",function(l){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(l=Number(l),isNaN(l))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:l,currentSlide:i.state.currentSlide},s)},0))}),H(W(i),"play",function(){var l;if(i.props.rtl)l=i.state.currentSlide-i.props.slidesToScroll;else if((0,ne.canGoNext)($($({},i.props),i.state)))l=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(l)}),H(W(i),"autoPlay",function(l){i.autoplayTimer&&clearInterval(i.autoplayTimer);var s=i.state.autoplaying;if(l==="update"){if(s==="hovered"||s==="focused"||s==="paused")return}else if(l==="leave"){if(s==="paused"||s==="focused")return}else if(l==="blur"&&(s==="paused"||s==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),H(W(i),"pause",function(l){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var s=i.state.autoplaying;l==="paused"?i.setState({autoplaying:"paused"}):l==="focused"?(s==="hovered"||s==="playing")&&i.setState({autoplaying:"focused"}):s==="playing"&&i.setState({autoplaying:"hovered"})}),H(W(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),H(W(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),H(W(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),H(W(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),H(W(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),H(W(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),H(W(i),"render",function(){var l=(0,pw.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),s=$($({},i.props),i.state),u=(0,ne.extractObject)(s,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),c=i.props.pauseOnHover;u=$($({},u),{},{onMouseEnter:c?i.onTrackOver:null,onMouseLeave:c?i.onTrackLeave:null,onMouseOver:c?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var h;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var f=(0,ne.extractObject)(s,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),g=i.props.pauseOnDotsHover;f=$($({},f),{},{clickHandler:i.changeSlide,onMouseEnter:g?i.onDotsLeave:null,onMouseOver:g?i.onDotsOver:null,onMouseLeave:g?i.onDotsLeave:null}),h=Oe.default.createElement(mw.Dots,f)}var y,x,v=(0,ne.extractObject)(s,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);v.clickHandler=i.changeSlide,i.props.arrows&&(y=Oe.default.createElement(Zd.PrevArrow,v),x=Oe.default.createElement(Zd.NextArrow,v));var S=null;i.props.vertical&&(S={height:i.state.listHeight});var p=null;i.props.vertical===!1?i.props.centerMode===!0&&(p={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(p={padding:i.props.centerPadding+" 0px"});var d=$($({},S),p),m=i.props.touchMove,w={className:"slick-list",style:d,onClick:i.clickHandler,onMouseDown:m?i.swipeStart:null,onMouseMove:i.state.dragging&&m?i.swipeMove:null,onMouseUp:m?i.swipeEnd:null,onMouseLeave:i.state.dragging&&m?i.swipeEnd:null,onTouchStart:m?i.swipeStart:null,onTouchMove:i.state.dragging&&m?i.swipeMove:null,onTouchEnd:m?i.touchEnd:null,onTouchCancel:i.state.dragging&&m?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},k={className:l,dir:"ltr",style:i.props.style};return i.props.unslick&&(w={className:"slick-list"},k={className:l}),Oe.default.createElement("div",k,i.props.unslick?"":y,Oe.default.createElement("div",nl({ref:i.listRefHandler},w),Oe.default.createElement(hw.Track,nl({ref:i.trackRefHandler},u),i.props.children)),i.props.unslick?"":x,i.props.unslick?"":h)}),i.list=null,i.track=null,i.state=$($({},dw.default),{},{currentSlide:i.props.initialSlide,targetSlide:i.props.initialSlide?i.props.initialSlide:0,slideCount:Oe.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=$($({},i.state),o),i}return ww(n,[{key:"didPropsChange",value:function(i){for(var o=!1,l=0,s=Object.keys(this.props);l<s.length;l++){var u=s[l];if(!i.hasOwnProperty(u)){o=!0;break}if(!(jn(i[u])==="object"||typeof i[u]=="function"||isNaN(i[u]))&&i[u]!==this.props[u]){o=!0;break}}return o||Oe.default.Children.count(this.props.children)!==Oe.default.Children.count(i.children)}}]),n}(Oe.default.Component);var _w=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},bw=_w,Ew=bw,Ow=function(e){var t=/[height|width]$/;return t.test(e)},tf=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=Ew(r),Ow(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},Pw=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=tf(n),r<e.length-1&&(t+=", ")}),t):tf(e)},Tw=Pw,ys,nf;function zw(){if(nf)return ys;nf=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},ys=e,ys}var xs,rf;function em(){if(rf)return xs;rf=1;function e(r,i){var o=0,l=r.length,s;for(o;o<l&&(s=i(r[o],o),s!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return xs={isFunction:n,isArray:t,each:e},xs}var ws,of;function Iw(){if(of)return ws;of=1;var e=zw(),t=em().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(l){o.mql=l.currentTarget||l,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,l){if(o.equals(r))return o.destroy(),!i.splice(l,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},ws=n,ws}var Ss,lf;function Lw(){if(lf)return Ss;lf=1;var e=Iw(),t=em(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(l,s,u){var c=this.queries,h=u&&this.browserIsIncapable;return c[l]||(c[l]=new e(l,h)),r(s)&&(s={match:s}),i(s)||(s=[s]),n(s,function(f){r(f)&&(f={match:f}),c[l].addHandler(f)}),this},unregister:function(l,s){var u=this.queries[l];return u&&(s?u.removeHandler(s):(u.clear(),delete this.queries[l])),this}},Ss=o,Ss}var ks,sf;function Rw(){if(sf)return ks;sf=1;var e=Lw();return ks=new e,ks}(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=l(C),n=Tl,r=l(Tw),i=l(Ku),o=z;function l(O){return O&&O.__esModule?O:{default:O}}function s(O){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(E){return typeof E}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},s(O)}function u(){return u=Object.assign?Object.assign.bind():function(O){for(var E=1;E<arguments.length;E++){var N=arguments[E];for(var M in N)Object.prototype.hasOwnProperty.call(N,M)&&(O[M]=N[M])}return O},u.apply(this,arguments)}function c(O,E){var N=Object.keys(O);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(O);E&&(M=M.filter(function(D){return Object.getOwnPropertyDescriptor(O,D).enumerable})),N.push.apply(N,M)}return N}function h(O){for(var E=1;E<arguments.length;E++){var N=arguments[E]!=null?arguments[E]:{};E%2?c(Object(N),!0).forEach(function(M){k(O,M,N[M])}):Object.getOwnPropertyDescriptors?Object.defineProperties(O,Object.getOwnPropertyDescriptors(N)):c(Object(N)).forEach(function(M){Object.defineProperty(O,M,Object.getOwnPropertyDescriptor(N,M))})}return O}function f(O,E){if(!(O instanceof E))throw new TypeError("Cannot call a class as a function")}function g(O,E){for(var N=0;N<E.length;N++){var M=E[N];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(O,j(M.key),M)}}function y(O,E,N){return E&&g(O.prototype,E),N&&g(O,N),Object.defineProperty(O,"prototype",{writable:!1}),O}function x(O,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function");O.prototype=Object.create(E&&E.prototype,{constructor:{value:O,writable:!0,configurable:!0}}),Object.defineProperty(O,"prototype",{writable:!1}),E&&v(O,E)}function v(O,E){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(M,D){return M.__proto__=D,M},v(O,E)}function S(O){var E=m();return function(){var M=w(O),D;if(E){var A=w(this).constructor;D=Reflect.construct(M,arguments,A)}else D=M.apply(this,arguments);return p(this,D)}}function p(O,E){if(E&&(s(E)==="object"||typeof E=="function"))return E;if(E!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return d(O)}function d(O){if(O===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return O}function m(){try{var O=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(m=function(){return!!O})()}function w(O){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(N){return N.__proto__||Object.getPrototypeOf(N)},w(O)}function k(O,E,N){return E=j(E),E in O?Object.defineProperty(O,E,{value:N,enumerable:!0,configurable:!0,writable:!0}):O[E]=N,O}function j(O){var E=_(O,"string");return s(E)=="symbol"?E:String(E)}function _(O,E){if(s(O)!="object"||!O)return O;var N=O[Symbol.toPrimitive];if(N!==void 0){var M=N.call(O,E||"default");if(s(M)!="object")return M;throw new TypeError("@@toPrimitive must return a primitive value.")}return(E==="string"?String:Number)(O)}var T=(0,o.canUseDOM)()&&Rw();e.default=function(O){x(N,O);var E=S(N);function N(M){var D;return f(this,N),D=E.call(this,M),k(d(D),"innerSliderRefHandler",function(A){return D.innerSlider=A}),k(d(D),"slickPrev",function(){return D.innerSlider.slickPrev()}),k(d(D),"slickNext",function(){return D.innerSlider.slickNext()}),k(d(D),"slickGoTo",function(A){var rt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return D.innerSlider.slickGoTo(A,rt)}),k(d(D),"slickPause",function(){return D.innerSlider.pause("paused")}),k(d(D),"slickPlay",function(){return D.innerSlider.autoPlay("play")}),D.state={breakpoint:null},D._responsiveMediaHandlers=[],D}return y(N,[{key:"media",value:function(D,A){T.register(D,A),this._responsiveMediaHandlers.push({query:D,handler:A})}},{key:"componentDidMount",value:function(){var D=this;if(this.props.responsive){var A=this.props.responsive.map(function(le){return le.breakpoint});A.sort(function(le,xe){return le-xe}),A.forEach(function(le,xe){var I;xe===0?I=(0,r.default)({minWidth:0,maxWidth:le}):I=(0,r.default)({minWidth:A[xe-1]+1,maxWidth:le}),(0,o.canUseDOM)()&&D.media(I,function(){D.setState({breakpoint:le})})});var rt=(0,r.default)({minWidth:A.slice(-1)[0]});(0,o.canUseDOM)()&&this.media(rt,function(){D.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(D){T.unregister(D.query,D.handler)})}},{key:"render",value:function(){var D=this,A,rt;this.state.breakpoint?(rt=this.props.responsive.filter(function(Re){return Re.breakpoint===D.state.breakpoint}),A=rt[0].settings==="unslick"?"unslick":h(h(h({},i.default),this.props),rt[0].settings)):A=h(h({},i.default),this.props),A.centerMode&&(A.slidesToScroll>1,A.slidesToScroll=1),A.fade&&(A.slidesToShow>1,A.slidesToScroll>1,A.slidesToShow=1,A.slidesToScroll=1);var le=t.default.Children.toArray(this.props.children);le=le.filter(function(Re){return typeof Re=="string"?!!Re.trim():!!Re}),A.variableWidth&&(A.rows>1||A.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),A.variableWidth=!1);for(var xe=[],I=null,R=0;R<le.length;R+=A.rows*A.slidesPerRow){for(var F=[],Q=R;Q<R+A.rows*A.slidesPerRow;Q+=A.slidesPerRow){for(var G=[],Ee=Q;Ee<Q+A.slidesPerRow&&(A.variableWidth&&le[Ee].props.style&&(I=le[Ee].props.style.width),!(Ee>=le.length));Ee+=1)G.push(t.default.cloneElement(le[Ee],{key:100*R+10*Q+Ee,tabIndex:-1,style:{width:"".concat(100/A.slidesPerRow,"%"),display:"inline-block"}}));F.push(t.default.createElement("div",{key:10*R+Q},G))}A.variableWidth?xe.push(t.default.createElement("div",{key:R,style:{width:I}},F)):xe.push(t.default.createElement("div",{key:R},F))}if(A==="unslick"){var Be="regular slider "+(this.props.className||"");return t.default.createElement("div",{className:Be},le)}else xe.length<=A.slidesToShow&&!A.infinite&&(A.unslick=!0);return t.default.createElement(n.InnerSlider,u({style:this.props.style,ref:this.innerSliderRefHandler},(0,o.filterSettings)(A)),xe)}}]),N}(t.default.Component)})(Sh);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(Sh);function n(r){return r&&r.__esModule?r:{default:r}}e.default=t.default})(wh);const Nw=xf(wh),js="data:image/svg+xml,%3csvg%20width='2453'%20height='1843'%20viewBox='0%200%202453%201843'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='2453'%20height='1843'%20fill='%23959595'/%3e%3c/svg%3e",tm=b.div`
  max-width: 100%;
  overflow: hidden;
`,nm=b.header`
  position: relative;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`,rm=b.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; 
`,Mw=b.div`
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
`,im=b.h1`
  font-size: 2.5rem;
  font-weight: bold;
`,Cs=b.h2`
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
    padding: 0 30px;
  }
`,$w=b.div`
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
`,_s=b.img`
  height: 25vh;
  width: 97%;
  object-fit: cover;
  margin-bottom: 1%;
`,Fw=b.div`
  display: flex;
  animation: ${Aw} 15s linear infinite;
`,af=b.div`
  width: 25%;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 3%;
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
    padding-top: 80px;
    padding-bottom: 1px;
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
  top: -50px; 
  left: 10%;
  border-radius: 1px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media(max-width: 780px){
    max-height: 150px;
  }
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
  @media(max-width: 780px){
    line-height: 1.6;
    .title {
      font-size: 1.3rem;
    }
    .subtitle {
      font-size: 1.1rem;
    }
}
`,Bw=b.div`
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
`,Hw=b.div`
  padding: 15px 0;
`,Uw=b.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
`,Qw=b.div`
  display: flex;
  justify-content: space-between;
  color: #7d7d7d;
  font-size: 0.9rem;
  margin-bottom: 10px;
`,Vw=b.p`
  font-size: 1.1rem;
  line-height: 1.5;
  color: #4a4a4a;
`,Gw=b.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  padding: 10% 0;
`,Kw=b.img`
  width: 250px;
  height: auto;
`,qw=b.div`
  background-color: white;
  border-radius: 15px;
  padding: 3%;
  margin-left: 20px;
  position: relative;
  max-width: 450px;
  font-size: 16px;
  color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 20px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent white transparent transparent;
  }
`,Yw=b.p`
  line-height: 1.7;
`,Xw=b.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.7;
  color: #444;
`,df=b.div`
  background-color: rgba(256, 256, 256, 0.5);
  border-radius: 5px;
  padding: 3%;
  margin: 0 auto;
  position: relative;
  max-width: 700px;
  font-size: 13px;
  line-height: 1.7;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  h1{
    color: #170F49;
    font-size: 1.7rem;
    line-height: 1.8;
    margin-bottom: 2px;
  }

  p{
    color: #666;
     font-size: 1.3rem;
  }
`,Zw=b.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #007bff;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &::before {
    content: '↗';
    margin-right: 8px;
  }
`,Jw=b.div`
  max-width: 700px;
  margin: 0 auto;
`,om="/assets/idq-D5yb6MGO.svg",lm="/assets/ibm-CNkfYoK9.svg",sm="/assets/dwave-KW-mNalY.svg",Fa="data:image/svg+xml,%3csvg%20width='1920'%20height='1080'%20viewBox='0%200%201920%201080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_22_433)'%3e%3crect%20width='1080'%20height='1920'%20transform='matrix(0%20-1%201%200%200%201080)'%20fill='%230B212E'/%3e%3cg%20filter='url(%23filter0_f_22_433)'%3e%3ccircle%20cx='1713.5'%20cy='132.5'%20r='449.5'%20transform='rotate(-90%201713.5%20132.5)'%20fill='%23909BA4'/%3e%3c/g%3e%3cg%20filter='url(%23filter1_f_22_433)'%3e%3ccircle%20cx='211.5'%20cy='129.5'%20r='449.5'%20transform='rotate(-90%20211.5%20129.5)'%20fill='%230B212E'/%3e%3c/g%3e%3cg%20filter='url(%23filter2_f_22_433)'%3e%3ccircle%20cx='964.5'%20cy='1006.5'%20r='449.5'%20transform='rotate(-90%20964.5%201006.5)'%20fill='%230B212E'%20fill-opacity='0.2'/%3e%3c/g%3e%3cg%20filter='url(%23filter3_f_22_433)'%3e%3ccircle%20cx='628.5'%20cy='662.5'%20r='449.5'%20transform='rotate(-90%20628.5%20662.5)'%20fill='%230B212E'%20fill-opacity='0.6'/%3e%3c/g%3e%3cg%20filter='url(%23filter4_f_22_433)'%3e%3ccircle%20cx='1301.5'%20cy='398.5'%20r='449.5'%20transform='rotate(-90%201301.5%20398.5)'%20fill='%230B212E'/%3e%3c/g%3e%3ccircle%20cx='1514'%20cy='189'%20r='24'%20fill='%2318A8FB'/%3e%3cg%20filter='url(%23filter5_f_22_433)'%3e%3ccircle%20cx='1538.5'%20cy='870.5'%20r='449.5'%20transform='rotate(-90%201538.5%20870.5)'%20fill='%23394F5C'/%3e%3c/g%3e%3ccircle%20cx='303'%20cy='530'%20r='14'%20fill='%23B2E3FF'/%3e%3ccircle%20cx='1474'%20cy='615'%20r='48'%20fill='%2318A8FB'%20fill-opacity='0.08'/%3e%3ccircle%20cx='1474'%20cy='615'%20r='23.2727'%20fill='%230E2938'%20stroke='%2318A8FB'%20stroke-width='2.90909'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_22_433'%20x='764'%20y='-817'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter1_f_22_433'%20x='-738'%20y='-820'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter2_f_22_433'%20x='15'%20y='57'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter3_f_22_433'%20x='-321'%20y='-287'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter4_f_22_433'%20x='352'%20y='-551'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter5_f_22_433'%20x='589'%20y='-79'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cclipPath%20id='clip0_22_433'%3e%3crect%20width='1080'%20height='1920'%20fill='white'%20transform='matrix(0%20-1%201%200%200%201080)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",am="/assets/rigetti-B38wHO1L.svg",um="/assets/honeywell-DtZFAC9P.svg",cm="/assets/google-D4sFVtJt.svg",dm="/assets/microsoft-pU5O44ch.svg",fm="/assets/jininfra-BFpSQJ6H.svg",pm="/assets/intel-D1wbAq3Q.svg",hm="/assets/alibaba-Dbpd8-e1.svg",e3=()=>{const e=yt(),t=[{title:"IBM",subtitle:"IBM Quantum은 클라우드 기반 양자 컴퓨팅 서비스로, 개발자와 연구자들에게 실용적인 양자 컴퓨팅을 제공합니다.",imgSrc:lm,route:"ibm"},{title:"D-Wave",subtitle:"D-Wave는 양자 어닐링(annealing) 기반 시스템을 제공하며, 최적화 문제 해결에 특화된 양자 컴퓨터를 개발합니다.",imgSrc:sm,route:"dwave"},{title:"Rigetti Computing",subtitle:"Rigetti Computing은 양자 회로 기반 시스템을 개발하며, 하이브리드 양자-클래식 컴퓨팅을 통해 양자 컴퓨팅을 상용화하려고 합니다.",imgSrc:am,route:"rigetti"},{title:"Honeywell",subtitle:"Honeywell Quantum Solutions는 이온 트랩 기술을 사용한 양자 컴퓨터를 개발하여 정밀한 양자 계산을 제공합니다.",imgSrc:um,route:"honeywell"},{title:"Google",subtitle:"Google Quantum AI는 시너지 효과를 노리며, 인공지능과 양자 컴퓨팅의 결합을 통해 양자 우월성을 목표로 연구 중입니다.",imgSrc:cm,route:"google"},{title:"Microsoft",subtitle:"Microsoft는 Azure Quantum 플랫폼을 통해 클라우드 기반 양자 컴퓨팅 서비스와 도구를 제공하며, 트래픽슘 기반의 양자 컴퓨터를 개발 중입니다.",imgSrc:dm,route:"microsoft"},{title:"Intel",subtitle:"Intel은 양자 컴퓨팅 하드웨어와 소프트웨어 생태계를 구축하고 있으며, 상용화 가능한 양자 프로세서를 개발 중입니다.",imgSrc:pm,route:"intel"},{title:"Alibaba",subtitle:"Alibaba는 클라우드 기반의 양자 컴퓨팅 서비스를 제공하며, 양자 암호화 및 인공지능 연구에 집중하고 있습니다.",imgSrc:hm,route:"alibaba"},{title:"JinInfra",subtitle:"JinInfra는 양자 네트워크 인프라와 보안 솔루션을 개발하여 양자 통신 기술 상용화에 주력하고 있습니다.",imgSrc:fm,route:"jininfra"},{title:"IDQ",subtitle:"IDQ는 양자 키 분배(QKD) 기반 보안 솔루션을 제공하며, 양자 암호화 및 통신 보안 기술을 연구하고 있습니다.",imgSrc:om,route:"idq"}],n=C.useRef(null),r={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,centerMode:!0,centerPadding:"30px"},i=()=>{n.current&&n.current.slickPause()},o=()=>{n.current&&n.current.slickPlay()},l=s=>{e(`/company/${s}`)};return a.jsxs(tm,{children:[a.jsxs(nm,{children:[a.jsx(rm,{src:Fa,alt:"banner image"}),a.jsx(im,{children:"양자 관련 주요 기업들"}),a.jsx(Mw,{children:a.jsx(i2,{style:{margin:"0 auto"},size:24})})]}),a.jsx(Cs,{style:{marginTop:"5%"},children:"주요 기업들"}),a.jsx(Dw,{children:a.jsxs(Fw,{onMouseEnter:i,onMouseLeave:o,children:[t.map((s,u)=>a.jsxs(af,{onClick:()=>l(s.route),children:[a.jsx(uf,{src:s.imgSrc,alt:s.title}),a.jsxs(cf,{children:[a.jsx("p",{className:"title",children:s.title}),a.jsx("p",{className:"subtitle",children:s.subtitle})]})]},u)),t.map((s,u)=>a.jsxs(af,{children:[a.jsx(uf,{src:s.imgSrc,alt:s.title}),a.jsxs(cf,{children:[a.jsx("p",{className:"title",children:s.title}),a.jsx("p",{className:"subtitle",children:s.subtitle})]})]},u+t.length))]})}),a.jsxs("div",{style:{padding:"50px 0"},children:[a.jsx(Cs,{children:"About"}),a.jsxs(Bw,{children:[a.jsx(Ww,{src:Fa,alt:"Nusantara Image"}),a.jsxs(Hw,{children:[a.jsx(Uw,{children:"About Jininfra"}),a.jsxs(Qw,{children:[a.jsx("span",{children:"by Sudarmo"}),a.jsx("span",{children:"28 January"})]}),a.jsx(Vw,{children:"설명 설명"})]})]})]}),a.jsx(Cs,{children:"사업 소개"}),a.jsx($w,{children:a.jsxs(Nw,{ref:n,...r,children:[a.jsxs("div",{children:[a.jsx(_s,{src:js,alt:"slide 1"}),a.jsx("p",{children:"Story of 3"})]}),a.jsxs("div",{children:[a.jsx(_s,{src:js,alt:"slide 2"}),a.jsx("p",{children:"Story of 3"})]}),a.jsxs("div",{children:[a.jsx(_s,{src:js,alt:"slide 3"}),a.jsx("p",{children:"Story of 3"})]})]})})]})};function t3(){return a.jsx(a.Fragment,{children:a.jsx(e3,{})})}const n3=b.div`
    margin-top: -5%;
    padding-top: 5%;
    background-color: #eee;
`,r3=b.div`
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
`,i3=b.div`
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
`,o3=b.div`
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
`,l3=({articles:e})=>a.jsx(i3,{children:e.map((t,n)=>a.jsx(o3,{children:a.jsxs("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",children:[a.jsx("img",{src:t.thumbnail,alt:t.title}),a.jsx("h3",{children:t.title.length>30?`${t.title.slice(0,30)}...`:t.title})]})},n))}),s3=()=>{const e=[{title:"SKT, 양자암호 양대 기술 QKD PQC 하나로 묶었다",thumbnail:"https://cdn.digitaltoday.co.kr/news/photo/202410/537045_501813_1137.jpg",url:"https://www.digitaltoday.co.kr/news/articleView.html?idxno=537045"},{title:"노르마 “양자 SW-HW 기술 연동해 풀스택 기업 도약”",thumbnail:"https://cdn.enewstoday.co.kr/news/photo/202410/2186172_993108_5327.jpg",url:"https://www.enewstoday.co.kr/news/articleView.html?idxno=2186172"},{title:"한국 양자기술 수준 주요국 중 최하위…양자컴은 100점 기준 2.3점",thumbnail:"https://image.dongascience.com/Photo/2024/06/5889cdb1752d35425c5c96fb03f9acb0.jpg",url:"https://m.dongascience.com/news.php?idx=66161"},{title:"정부, 양자산업 주도할 국무총리급 거버넌스 만든다",thumbnail:"https://image.zdnet.co.kr/2024/10/11/dadff46fd0a6b54d8c820aeafd8a5db1.jpg",url:"https://zdnet.co.kr/view/?no=20241011235409"},{title:"세계 최초 하이브리드 양자 오류정정 기술 개발",thumbnail:"https://image.dongascience.com/Photo/2024/10/b5179352882605f04640c1b8edce03d1.png",url:"https://www.dongascience.com/news.php?idx=67764"},{title:"불교와 만난 양자역학…“집착·걱정 버리고 현재에 충실하라”",thumbnail:"https://img1.yna.co.kr/etc/inner/KR/2024/10/10/AKR20241010085300005_01_i_P4.jpg",url:"https://www.yna.co.kr/view/AKR20241010085300005?input=1195m"},{title:"[임수연의 이과감성] 양자역학과 다중우주론의 온기",thumbnail:"https://image.cine21.com/resize/cine21/movie/2024/0927/16_44_30__66f6625e2ac97[W680-].jpg",url:"http://www.cine21.com/news/view/?mag_id=105904&utm_source=naver&utm_medium=news"},{title:"‘양자 컴퓨팅·AI’, 데이터와 물리적 보안 강화 기반으로 부상",thumbnail:"https://cdn.gttkorea.com/news/photo/202409/13652_14786_5153.jpg",url:"https://www.gttkorea.com/news/articleView.html?idxno=13652"}];return a.jsx(n3,{children:a.jsx(r3,{children:a.jsxs("div",{children:[a.jsx("h1",{children:"양자 기술 관련 뉴스"}),a.jsx(l3,{articles:e})]})})})};function a3(){return a.jsx(a.Fragment,{children:a.jsx(s3,{})})}const u3=b.div`

    margin-top: -5%;

    padding-top: 5%;
    background-color: #eee;
`,c3=b.div`
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
`,d3=b.div`
    height: 320vh;
    max-height: 320vh;
    margin-top: -5%;
    margin-bottom: 20%;
    padding-top: 5%;
    background-color: #eee;

`,f3=b.div`
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
    margin-top:13%;
    font-size: 2.6rem;
      @media(max-width: 900px){
        margin-top: 20%;
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
`,p3=b.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 2%;
    top: 3%;
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
`,h3=b.button`
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
`,m3=()=>{const[e,t]=C.useState(null),n=i=>{t(e===i?null:i)},r=yt();return a.jsx(u3,{children:a.jsxs(c3,{children:[a.jsx("h1",{children:"양자 활용"}),a.jsx("hr",{}),a.jsxs("div",{className:"accordion-item",children:[a.jsxs("div",{className:`accordion-title ${e===0?"active":""}`,onClick:()=>n(0),children:[a.jsx("span",{children:"양자 컴퓨터"}),a.jsx("span",{children:e===0?"▲":"▼"})]}),e===0&&a.jsxs("div",{className:"accordion-content",children:[a.jsxs("p",{children:["기존 디지털컴퓨터와는 달리 양자역학의 중첩 상태를 활용한 ",a.jsx("span",{style:{color:"#B0E3FF"},children:"큐비트(Quantum bit)를 기본 단위로  0과 1 두 상태를 동시에 처리할 수 있다."})]}),a.jsx("br",{})," ",a.jsx("p",{children:"이 같은 특성 때문에 양자컴퓨터는 기존 컴퓨터보다 월등한 계산 속도와 연산 처리 능력을 갖는데, 이는 슈퍼컴퓨터보다 1000배 이상 빠른 연산이 가능해 인공지능(AI), 의료·제약, 암호통신 등 다양한 분야에 활용될 수 있다."}),a.jsx("div",{style:{textAlign:"center"},children:a.jsx(h3,{style:{cursor:"pointer"},onClick:i=>r("/computing"),children:" More"})}),a.jsx("hr",{}),a.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/gjp9301in0U",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})]}),a.jsxs("div",{className:"accordion-item",children:[a.jsxs("div",{className:`accordion-title ${e===1?"active":""}`,onClick:()=>n(1),children:[a.jsx("span",{children:"양자 암호통신"}),a.jsx("span",{children:e===1?"▲":"▼"})]}),e===1&&a.jsxs("div",{className:"accordion-content",children:[a.jsx("p",{children:"양자암호통신 기술은 통신상의 보안을 자연의 기본원리인 양자역학의 법칙에 의해서 보장하므로 도청이나 감청이 절대적으로 불가능한 차세대 통신보안 기술로서 최근 크게 주목받고 있다."}),a.jsx("br",{}),a.jsxs("p",{children:["즉, 양자암호통신 기술은 ",a.jsx("span",{style:{color:"#B0E3FF"},children:"“양자 복제불가능성”"}),"과 같은 양자물리학의 법칙에 기초해서 송신자와 수신자 사이에 암호 키(일회용 난수표)를 절대적으로 안전하게 실시간으로 분배하는 기술로서 ",a.jsx("span",{style:{color:"#B0E3FF"},children:"“양자 키 분배 기술”"}),"로도 알려져 있다."]}),a.jsx("br",{}),a.jsx("hr",{}),a.jsx("h1",{children:"양자 암호화의 유형"}),a.jsx("h2",{children:a.jsx("span",{style:{boxShadow:"inset 0 -20px 0 rgba(90, 158, 207, 0.5)"},children:"양자 키 분배(QKD)"})}),a.jsxs("p",{children:["양자 키 분배(Quantum Key Distribution; QKD) 시스템은 보안 데이터를  ",a.jsx("span",{style:{color:"#B0E3FF"},children:"직접 암호화하는 것이 아니라, 두 사람이 함께 사용할 비밀 키를 안전하게 공유하는 방법이다."})]}),a.jsx("p",{children:"미세한 자극에도 상태가 변하는 양자의 물리적 특성을 활용해 대칭 암호키를 분배하는 기술이다. 제3자가 해킹할 수 없는 암호화된 비밀키를 만들어 보안이 필요한 송신자와 수신자에게 안전하게 공유한다."}),a.jsx("br",{}),a.jsx("h2",{children:a.jsx("span",{style:{boxShadow:"inset 0 -20px 0 rgba(90, 158, 207, 0.5)"},children:"양자내성암호(PQC)"})}),a.jsxs("p",{children:["양자내성암호(Post Quantum Cryptography; PQC)는 양자컴퓨터로도 풀어내는 데 수십억 년이 걸리는 ",a.jsx("span",{style:{color:"#B0E3FF"},children:"복잡한 수학 알고리즘을 사용하는 암호화 방식이다."})]}),a.jsx("br",{}),a.jsx("hr",{}),a.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/fF1cJ5F7ArI?si=9nIUWin5E9jQ6qRT",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})]}),a.jsxs("div",{className:"accordion-item",children:[a.jsxs("div",{className:`accordion-title ${e===2?"active":""}`,onClick:()=>n(2),children:[a.jsx("span",{children:"양자 센서"}),a.jsx("span",{children:e===2?"▲":"▼"})]}),e===2&&a.jsxs("div",{className:"accordion-content",children:[a.jsxs("p",{children:["양자 센서의 기본 원리는  ",a.jsx("span",{style:{color:"#B0E3FF"},children:"센서와 탐지 대상 물체 사이의 상호작용을 통해 발생하는 미세한 양자 위상변화(Quantum Phase Accumulation)를 측정하는 것이다."}),"이때 중첩, 이중성, 얽힘과 같은 미시 세계의 양자역학적 특성들이 측정 기술로 활용된다."]}),a.jsx("br",{}),a.jsx("p",{children:"양자 센싱은 측정 대상과 센서의 종류에 따라 다양하게 분류되며, 일반적으로 큐비트와 같은 양자 시스템을 사용해 시간, 자기장 등의 물리량을 정밀하게 측정한다."}),a.jsx("hr",{}),a.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/jS6fiujLTzo?si=JBji-IeWWDn1tFDX",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})]})]})})};function g3(){return a.jsx(a.Fragment,{children:a.jsx(m3,{})})}const v3="data:image/svg+xml,%3csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='50'%20cy='50'%20r='50'%20fill='%23F1F5F9'/%3e%3cpath%20d='M48.25%2070C48.25%2070.9665%2049.0335%2071.75%2050%2071.75C50.9665%2071.75%2051.75%2070.9665%2051.75%2070H48.25ZM51.2374%2034.7626C50.554%2034.0791%2049.446%2034.0791%2048.7626%2034.7626L37.6256%2045.8995C36.9422%2046.5829%2036.9422%2047.691%2037.6256%2048.3744C38.309%2049.0578%2039.4171%2049.0578%2040.1005%2048.3744L50%2038.4749L59.8995%2048.3744C60.5829%2049.0578%2061.691%2049.0578%2062.3744%2048.3744C63.0578%2047.691%2063.0578%2046.5829%2062.3744%2045.8995L51.2374%2034.7626ZM51.75%2070L51.75%2036H48.25L48.25%2070H51.75Z'%20fill='%2336597D'/%3e%3c/svg%3e",y3=b.img`
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
`,x3=()=>{const e=()=>{window.scrollTo({top:0,behavior:"smooth"})};return a.jsx(a.Fragment,{children:a.jsx(y3,{onClick:e,src:v3,alt:"Scroll to top"})})},w3="/assets/message-D6wtI_nO.svg",S3="/assets/flag-DnSs5bf4.svg",k3="data:image/svg+xml,%3csvg%20width='744'%20height='619'%20viewBox='0%200%20744%20619'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_f_0_1)'%3e%3cellipse%20cx='352.58'%20cy='364.807'%20rx='208.58'%20ry='110.044'%20fill='%23FDE598'%20fill-opacity='0.7'/%3e%3c/g%3e%3cg%20filter='url(%23filter1_f_0_1)'%3e%3cellipse%20cx='395.735'%20cy='254.044'%20rx='204.265'%20ry='110.044'%20fill='%236955FF'%20fill-opacity='0.5'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_0_1'%20x='0.151413'%20y='110.915'%20width='704.858'%20height='507.786'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='71.9243'%20result='effect1_foregroundBlur_0_1'/%3e%3c/filter%3e%3cfilter%20id='filter1_f_0_1'%20x='47.6214'%20y='0.151413'%20width='696.227'%20height='507.786'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='71.9243'%20result='effect1_foregroundBlur_0_1'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",j3="/assets/planet-B734ADp0.svg",C3=b.div`
    margin-top: -5%;
    margin-bottom: 10%;
    padding-top: 5%;
    background-color: #eee;

`,_3=b.div`
  max-width: 100%;
  margin-top: 5%;
  border-radius: 0.7vw;
  position: relative;
`,b3=b.div`
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
`,E3=b.div`
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
`,O3=b.img`
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
`,P3=b.div`
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
`,T3=b.img`
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
`,z3=b.div`
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
`,I3=b.div`
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
`;const L3=b.div`
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
`,R3=b.div`
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
`,N3=b.img`
  width: 35%;
  margin-left: 35%;
  @media (max-width: 800px) {
    min-width: 45%;
    max-width: 45%;
    margin-left: 20%;
  }
`,M3=Cr`
  from {
    transform: translateY(0);
    opacity: 1;  
  }
  to {
    transform: translateY(-100px);
    opacity: 0;
  }
`,D3=b.img`
  position: fixed;
  margin: 0 auto;
  max-width: 45%;
  display: block; 
  z-index: 10000;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.5s ease-out;
  animation: ${e=>e.isdisappearing?kn`${M3} 0.5s forwards`:"none"};
  @media (max-width: 800px) {
    position: fixed;
    max-width: 56%;
    transform: translateX(-50%);
    top: 20%;
  }
`,$3=b.img`
  position: relative;
  margin-top: 10%;
  min-width: 80%;
  max-width: 80%;
  margin-right: 15%;
`,A3=()=>{const[e,t]=C.useState(jt),[n,r]=C.useState(!1),[i,o]=C.useState(!0),[l,s]=C.useState(!1);C.useEffect(()=>{const g=setTimeout(()=>{s(!0)},1e3),y=setInterval(()=>{t(v=>v===jt?fr:jt)},600),x=setTimeout(()=>{r(!0),setTimeout(()=>{o(!1)},1e3),clearInterval(y)},3e3);return()=>{clearTimeout(g),clearTimeout(x),clearInterval(y)}},[]);const[u,c]=C.useState(jt),[h,f]=C.useState(!1);return C.useEffect(()=>{const g=setTimeout(()=>{f(!0)},1e3),y=setInterval(()=>{c(x=>x===jt?fr:jt)},600);return()=>{clearTimeout(g),clearInterval(y)}},[]),a.jsx(a.Fragment,{children:a.jsxs(C3,{children:[a.jsxs(_3,{children:[i&&a.jsx(a.Fragment,{children:a.jsx(D3,{src:e,alt:"Waving Genie",isdisappearing:n})}),a.jsxs(L3,{children:[a.jsxs(z3,{children:[a.jsx("img",{src:k3,alt:"Gradient Background"}),a.jsxs(I3,{children:[a.jsx("h1",{children:"진인프라의"}),a.jsx("h1",{children:"양자 캐릭터"}),a.jsx("h1",{children:"‘지니’"})]})]}),a.jsx(E3,{children:a.jsx(O3,{src:S3,alt:"Flag"})})]}),a.jsxs(R3,{children:[a.jsx(P3,{children:a.jsx(T3,{src:j3,alt:"planet"})}),a.jsxs(b3,{children:[a.jsx("h1",{children:"지니"}),a.jsx("p",{style:{color:"#0000ff"},children:"지니(진인프라의 진+  접사 ‘-이‘)"}),a.jsx("p",{children:"🧬알라딘에 나오는 무엇이든 할 수 있는 캐릭터 지니처럼"}),a.jsx("p",{children:"🔭양자 정보 관련해서는 무엇이든 알려준다는 의미"})]})]})]}),a.jsxs("div",{style:{maxWidth:"50%",display:"flex",flexDirection:"column",marginLeft:"32%",marginTop:"10%"},children:[a.jsx(N3,{src:w3,style:{width:"35%",marginLeft:"40%"}}),a.jsx($3,{style:{marginLeft:"0",marginTop:"3%",marginBottom:"15%"},src:u,alt:"Waving Genie"})]})]})})};function F3(){return a.jsx(a.Fragment,{children:a.jsx(A3,{})})}const B3="/assets/cat3-Bspolb1q.svg",W3="/assets/bunker-cRaJc6Me.svg",ff="/assets/bottle1-BxjrYTB1.svg",H3="/assets/bottle2-BVqZZ2-9.svg",Yu="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2_1185)'%3e%3cpath%20d='M40%2021.9999H15.66L26.83%2010.8299L24%207.99994L8%2023.9999L24%2039.9999L26.83%2037.1699L15.66%2025.9999H40V21.9999Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2_1185'%3e%3crect%20width='48'%20height='48'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";b.div`
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
`;const Vi=b.div`
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
`,pf=b.div`
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
`,hf=b.div`
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
`,mf=b(Vo)`
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
`,gf=b.img`
  max-width: 100%;
  @media (max-width: 700px) {
    max-width: 50%;
  }
`,U3=b.img`
  max-width: 210px;
  margin-bottom: -45px;
  @media (max-width: 700px) {
    max-width: 50%;
  }
`,Q3=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),[i,o]=C.useState(null);yt();const l=()=>{const s=Math.random()>.5?"살아 있습니다":"죽었습니다";o(s),t(!0)};return a.jsxs(vh,{children:[a.jsx(xh,{children:a.jsx("a",{href:"/concept",children:a.jsx("img",{src:Yu,alt:"Back to main"})})}),a.jsxs(yh,{children:[a.jsx("h1",{children:"슈뢰딩거의 고양이"}),a.jsx("hr",{}),a.jsxs(Vi,{children:[a.jsxs(Gi,{children:[a.jsx("img",{src:W3,alt:"bunker",style:{maxWidth:"80%"}})," "]}),a.jsxs(Gi,{children:[a.jsx("img",{src:ff,alt:"bottle1"})," ",a.jsx(gf,{src:fo,alt:"cat"})]}),a.jsx("p",{children:"고양이 한 마리와 독이 든 병을 벙커 안에 넣고 벙커를 닫습니다."})]}),a.jsxs(Vi,{children:[a.jsxs(Gi,{children:[a.jsx("img",{src:ff,alt:"bottle1"})," ",a.jsx("img",{src:H3,alt:"bottle2"})]}),a.jsx("p",{children:"독이 든 병은 50%의 확률로 깨질 수도, 깨지지 않을 수도 있습니다."})]}),a.jsxs(Vi,{children:[a.jsxs(Gi,{children:[a.jsx(gf,{src:fo,alt:"cat"})," ",a.jsx(U3,{src:gh,alt:"cat2"})]}),a.jsx("p",{style:{marginBottom:"1%"},children:"이에 따라 고양이도 죽을 수도 있고 살아 있을 수도 있습니다."}),a.jsxs("p",{style:{padding:"0 2%",marginTop:"0px"},children:["이러한 상태를 ",a.jsx("span",{style:{color:"#0000ff"},children:"양자 중첩 상태"}),"라고 합니다."]}),a.jsx(Pa,{onClick:l,children:"벙커 안에 고양이가 있는지 확인하기"})]}),a.jsxs(Vi,{children:[a.jsx("p",{style:{padding:"0 2%",marginBottom:"1%"},children:"슈뢰딩거의 고양이는 1935년 에르빈 슈뢰딩거가 양자역학의 이상한 특성을 설명하기 위해 제안한 사고 실험입니다."}),a.jsxs("p",{style:{padding:"0 2%",marginTop:"0px"},children:[a.jsx("span",{children:"이 실험은 고양이를 상자에 넣고, 고양이의 생사 여부가 양자적 현상인 중첩에 의해 결정된다는 개념"}),"을 보여줍니다."]}),a.jsx("div",{style:{textAlign:"center",display:"flex",marginTop:"1%"}}),a.jsx("div",{style:{textAlign:"center",display:"flex",marginTop:"1%"},children:a.jsx(Pa,{onClick:()=>r(!0),children:"추가 설명 보기"})})]}),e&&a.jsx(pf,{children:a.jsxs(hf,{style:{backgroundColor:"#ddd"},children:[a.jsx(mf,{onClick:()=>t(!1)}),a.jsx("h2",{children:"벙커의 문이 열렸습니다!"}),a.jsx("hr",{}),i==="살아 있습니다"?a.jsxs("div",{children:[a.jsx("p",{children:"고양이는 살아 있습니다!"}),a.jsx("img",{src:fo,alt:"살아 있는 고양이",style:{maxWidth:"100%"}})]}):a.jsxs("div",{children:[a.jsx("p",{children:"고양이는 죽었습니다...."}),a.jsx("img",{src:B3,alt:"죽은 고양이",style:{maxWidth:"60%",margin:"1%"}})]})]})}),n&&a.jsx(pf,{children:a.jsxs(hf,{children:[a.jsx(mf,{onClick:()=>r(!1)}),a.jsx("h2",{children:"추가 설명"}),a.jsx("hr",{}),a.jsxs("p",{children:["이 사고 실험은 양자역학의 중요한 해석 중 하나인 ",a.jsx("span",{style:{fontWeight:"bold"},children:"코펜하겐 해석"}),"을 설명하기 위한 것이었습니다."]}),a.jsx("p",{children:"양자적 입자들은 측정되기 전까지 여러 상태가 동시에 존재하는데, 이 중첩 상태가 외부 관찰에 의해 무너지면서 하나의 확정된 상태가 된다는 것입니다."}),a.jsx("p",{children:a.jsx("span",{children:"고양이 역시 상자를 열어 관찰하기 전까지는 살아있으면서 동시에 죽어있는 상태로 존재합니다."})}),a.jsx("p",{children:"이 실험은 양자역학의 관측 문제와 파동 함수의 붕괴라는 개념을 설명하는 데 중요한 역할을 합니다."}),a.jsxs("p",{children:["슈뢰딩거는 이 실험을 통해 양자역학의 코펜하겐 해석이 현실에 적용될 때 얼마나 비현실적일 수 있는지를 비판했습니다. 실제로 고양이가 ",a.jsx("span",{style:{fontWeight:"bold"},children:'"살아 있으면서 죽어있다"'}),"는 개념은 우리의 일상적인 직관과는 맞지 않기 때문에, 이 실험은 양자역학의 해석에 대한 논쟁을 불러일으켰습니다."]})]})})]})]})};function V3(){return a.jsx(a.Fragment,{children:a.jsx(Q3,{})})}const vf="/assets/coinf-BD3uUSm1.svg",yf="/assets/coinb-CO2sn5vL.svg",G3="/assets/box1-M57zrF-g.svg",K3="/assets/box2-BABTIy2V.svg",q3=Cr`
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Y3=b.div`
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
`,X3=b.img`
  max-width: 40%;
  cursor: pointer;
  margin: 2%;
`,Z3=b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin-top: 20px;
  animation: ${q3} 0.8s ease-in-out;
  h3{
    font-size: 2rem;
    color: #333;
  }
`,J3=b.div`
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
`,eS=b.div`
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
`,tS=b(Vo)`
  position: absolute;
  top: 30px;
  right: 33px;
  cursor: pointer;
  font-size: 2.5rem;
  color: #000000;

  &:hover {
    color: #e00000;
  }
`,nS=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(null),[i,o]=C.useState(null),[l,s]=C.useState(!1),u=()=>{const c=Math.random()>.5?"앞면":"뒷면";r(c),o(c==="앞면"?"뒷면":"앞면"),s(!0)};return a.jsxs(vh,{children:[a.jsx(xh,{children:a.jsx("a",{href:"/concept",children:a.jsx("img",{src:Yu,alt:"Back to main"})})}),a.jsxs(yh,{children:[a.jsx("h1",{children:"양자 얽힘: 두 개의 얽힌 동전"}),a.jsx("hr",{}),a.jsxs(Y3,{children:[a.jsx("p",{children:"두 개의 동전이 특별한 방식으로 얽혀 있습니다."}),a.jsx("p",{children:"한 동전의 상태가 결정되면 다른 동전의 상태도 자동으로 결정됩니다!"}),a.jsx("p",{children:"박스를 열어서 동전 A를 확인하세요."}),a.jsx("h1",{style:{color:"#0183ff",margin:"5%"},children:"박스 클릭하기"}),l&&a.jsxs(Z3,{children:[a.jsxs("div",{style:{textAlign:"center"},children:[a.jsx("h3",{children:"동전 A"}),a.jsx("img",{src:n==="앞면"?vf:yf,alt:"동전 A",style:{maxWidth:"160px"}}),a.jsx("p",{children:n})]}),a.jsxs("div",{style:{textAlign:"center"},children:[a.jsx("h3",{children:"동전 B"}),a.jsx("img",{src:i==="앞면"?vf:yf,alt:"동전 B",style:{maxWidth:"160px"}}),a.jsx("p",{children:i})]})]}),a.jsx(X3,{src:l?K3:G3,alt:"박스",onClick:u}),a.jsx("div",{style:{textAlign:"center",display:"flex",marginTop:"1%"},children:a.jsx(Pa,{onClick:()=>t(!0),children:"추가 설명 보기"})})]}),e&&a.jsx(J3,{children:a.jsxs(eS,{children:[a.jsx(tS,{onClick:()=>t(!1)}),a.jsx("h2",{children:"양자 얽힘 설명"}),a.jsx("hr",{}),a.jsx("p",{children:"두 개의 동전이 특별한 방법으로 얽혀 있다고 상상해봅시다. 이 동전들을 각각 상자에 넣고 지구의 반대편으로 떨어뜨립니다. 그 후, A 동전의 상자를 열어 동전을 확인했을 때, 앞면이 나왔습니다."}),a.jsx("p",{children:"이때, 멀리 떨어진 B 동전은 즉각적으로 뒤집혀서 반드시 뒷면이 나옵니다. 그들은 어떤 방식으로든 얽혀 있어서, A 동전이 앞면이면 B 동전은 뒷면이 될 것이고, 반대로도 성립됩니다."}),a.jsx("p",{children:'이처럼 양자 얽힘에서는 두 입자가 얽힌 상태에 있으면, 한 입자의 상태가 결정되는 순간 다른 입자의 상태도 그에 맞춰 즉각적으로 결정됩니다. 얽힘 상태에서는 물리적으로 떨어져 있어도 정보가 "순간적으로" 전해지는 것처럼 보입니다.'})]})})]})]})};function rS(){return a.jsx(a.Fragment,{children:a.jsx(nS,{})})}const iS=()=>{const{pathname:e}=Mu();return C.useEffect(()=>{window.scrollTo(0,0)},[e]),null},oS="/assets/Jenie1-BXj_GSaG.svg",lS="/assets/Jenie2-D8KlYSrv.svg",sS={ibm:{title:"IBM",description:"IBM Quantum은 클라우드 기반 양자 컴퓨팅 서비스로, 개발자와 연구자들에게 실용적인 양자 컴퓨팅을 제공합니다.",content:"IBM은 2016년 IBM Quantum Experience를 통해 양자 컴퓨팅을 대중에게 공개했습니다. Qiskit이라는 오픈 소스 프레임워크를 제공하며, 연구자와 학생들이 양자 알고리즘을 쉽게 개발하고 테스트할 수 있는 환경을 제공합니다. IBM은 1,000 큐비트 이상의 양자 컴퓨터를 2029년까지 구현하는 것을 목표로 하며, 화학 시뮬레이션, 금융 리스크 분석, 물질 개발, 공급망 최적화 등 다양한 분야에서 양자 컴퓨팅의 응용을 확대하고 있습니다. IBM은 슈퍼컴퓨터와 양자 컴퓨터를 결합한 하이브리드 컴퓨팅 모델도 연구 중입니다.",businessTitle:"양자 컴퓨팅 사업",business:"IBM은 IBM Quantum Experience를 통해 누구나 양자 컴퓨터에 접근할 수 있는 클라우드 기반의 플랫폼을 제공하고 있습니다. 연구자, 학생, 기업 고객은 Qiskit 오픈 소스 프레임워크를 사용해 양자 알고리즘을 개발할 수 있습니다. 또한, 양자 컴퓨터와 기존 컴퓨터의 결합을 통한 **하이브리드 컴퓨팅 모델** 개발에 주력하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"IBM은 세계 최초로 양자 컴퓨터를 클라우드에 공개했으며, 127 큐비트 시스템(IBM Eagle)을 발표했습니다. IBM의 로드맵에 따르면, 2029년까지 1,000 큐비트 이상의 양자 컴퓨터를 구축할 예정입니다. 이들은 **화학 시뮬레이션, 공급망 최적화, 금융 리스크 관리**와 같은 문제에 양자 컴퓨팅을 적용하고 있으며, 주요 고객으로는 금융 기관과 제약 회사가 있습니다.",imgSrc:lm,link:"https://www.ibm.com/quantum"},idq:{title:"IDQ",description:"IDQ는 양자 키 분배(QKD) 기술을 통해 통신 보안을 강화하는 양자 암호화 솔루션을 제공합니다.",content:"IDQ는 양자 기술을 활용한 보안 솔루션을 선도하는 기업으로, 금융 및 국방과 같은 민감한 산업에서 안전한 통신을 보장하는 기술을 제공합니다. 특히 양자 키 분배(QKD) 시스템은 도청을 탐지할 수 있는 능력을 갖추고 있어 최고 수준의 보안을 제공합니다. 유럽연합(EU)의 양자 통신 인프라 구축 프로젝트에 참여하고 있으며, 글로벌 표준을 수립하는 데 기여하고 있습니다.",businessTitle:"양자 암호화 및 통신 보안 사업",business:"IDQ는 양자 키 분배(QKD) 기술을 개발해 보안 통신 솔루션을 제공하는 선도 기업입니다. QKD는 도청을 감지하고 공격으로부터 네트워크를 보호하는 데 사용됩니다. 금융 기관, 국방, 통신 등 민감한 분야에서 양자 보안을 제공합니다.",businessTitle2:"성과 및 연구 방향",business2:"IDQ는 유럽 연합의 양자 통신 인프라 구축 프로젝트에 적극 참여하고 있으며, 다양한 파트너와 협력해 양자 암호화 표준을 개발하고 있습니다. 스위스와 싱가포르 등 여러 국가의 정부와 협력해 양자 통신망 구축에 기여하고 있습니다.",imgSrc:om,link:"https://idquantique.co.kr/"},dwave:{title:"D-Wave",description:"D-Wave는 양자 어닐링 기술을 활용한 최적화 문제 해결에 특화된 양자 컴퓨터를 제공합니다.",content:"D-Wave는 세계 최초로 상용 양자 컴퓨터를 개발한 기업으로, 주로 최적화 문제를 해결하는 데 강점을 가지고 있습니다. D-Wave의 Advantage 시스템은 5,000개 이상의 큐비트를 제공하며, 금융, 물류, 인공지능(AI) 등의 분야에서 복잡한 문제를 해결합니다. 양자 어닐링은 최적화 문제를 매우 효율적으로 해결하는 기술로, 특히 재무 포트폴리오 최적화와 물류 경로 최적화에 활용됩니다.",businessTitle:"최적화 문제 해결",business:"D-Wave는 양자 어닐링(annealing) 기술을 사용하여 최적화 문제를 해결합니다. D-Wave의 Advantage 시스템은 5,000개 이상의 큐비트를 제공하며, 물류 최적화, AI 훈련 가속화, 재무 포트폴리오 구성 등의 분야에서 활용됩니다.",businessTitle2:"성과 및 연구 방향",business2:"D-Wave는 최초의 상용 양자 컴퓨터를 도입한 기업으로, 고객에게 클라우드를 통한 원격 접근 서비스를 제공합니다. 양자 어닐링을 통한 **최적화 솔루션**은 특히 물류와 인공지능 분야에서 강력한 성과를 내고 있습니다.",imgSrc:sm,link:"https://www.dwavesys.com/"},rigetti:{title:"Rigetti Computing",description:"Rigetti는 양자-클래식 하이브리드 컴퓨팅 시스템을 제공하며, 양자 컴퓨팅의 상용화를 목표로 합니다.",content:"Rigetti는 Quantum Cloud Services(QCS)를 통해 클라우드 기반의 양자 컴퓨팅을 제공하며, 양자 회로와 기존 컴퓨팅 자원을 결합한 하이브리드 솔루션을 개발 중입니다. 이 회사는 특히 의료와 금융 산업에서 양자 컴퓨팅의 응용 가능성을 연구하며, 신약 개발 및 기후 변화 모델링에 집중하고 있습니다.",businessTitle:"양자-클래식 하이브리드 컴퓨팅",business:"Rigetti는 주요 대학 및 연구 기관과 협력하여 양자 알고리즘을 개발하며, 연구자들이 쉽게 양자 컴퓨팅에 접근할 수 있도록 클라우드 플랫폼을 제공합니다. 또한 Quantum Cloud Services(QCS)를 통해 클라우드 기반 양자 컴퓨팅 환경을 제공합니다. 양자와 기존 컴퓨터를 결합한 하이브리드 솔루션을 개발해 더 빠른 문제 해결을 가능하게 합니다.",businessTitle2:"성과 및 연구 방향",business2:"Rigetti는 신약 개발, 금융 모델링, 기후 변화 연구 등 다양한 응용 분야에 양자 컴퓨팅을 도입하고 있습니다. 이 회사는 양자 컴퓨터와 기존 서버 간의 원활한 통합을 목표로 연구를 진행하고 있으며, 빠른 계산이 요구되는 환경에서 강점을 발휘하고 있습니다.",imgSrc:am,link:"https://www.rigetti.com/"},honeywell:{title:"Honeywell",description:"Honeywell은 이온 트랩 기술을 활용한 정밀한 양자 컴퓨팅을 제공합니다.",content:"Honeywell의 양자 컴퓨터는 이온 트랩 기술을 기반으로 매우 높은 정밀도를 자랑합니다. 이 회사는 Cambridge Quantum과의 합병을 통해 소프트웨어와 하드웨어 개발 능력을 더욱 강화했으며, 공급망 최적화와 화학 물질 분석과 같은 분야에 양자 컴퓨팅을 활용하고 있습니다.",businessTitle:"이온 트랩 양자 컴퓨터",business:" Honeywell은 **이온 트랩 기술**을 이용한 양자 컴퓨터를 개발합니다. 이온 트랩은 높은 정확도와 정밀한 제어를 제공하며, 물류 및 화학 분야에서 활용되고 있습니다. 또한 제조, 물류 및 화학 산업에 양자 컴퓨팅 솔루션을 제공합니다. 특히 정밀한 양자 계산 능력을 활용해 화학 반응을 시뮬레이션하고 산업 공정을 최적화하는 데 주력하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"Honeywell은 2021년 Cambridge Quantum과 합병하여 양자 컴퓨팅 소프트웨어 개발을 강화했습니다. 이 회사의 양자 컴퓨터는 **화학 시뮬레이션, 최적화 문제 해결**에 특화되어 있으며, 특히 화학 반응 시뮬레이션에서 탁월한 성능을 보여주고 있습니다.",imgSrc:um,link:"https://www.honeywell.com/us/en/company/quantum"},google:{title:"Google Quantum AI",description:"Google Quantum AI는 인공지능과 양자 컴퓨팅의 결합을 통해 양자 우월성을 목표로 합니다.",content:"Google은 2019년에 양자 우월성(Quantum Supremacy)을 발표하며 양자 컴퓨팅이 기존 컴퓨터보다 더 복잡한 문제를 해결할 수 있음을 증명했습니다. Google의 연구는 주로 인공지능(AI), 화학 및 물리학 분야에 중점을 두고 있으며, 양자 알고리즘을 통해 새로운 연구 방향을 제시하고 있습니다.",businessTitle:"양자 우월성 달성 및 인공지능 연구",business:"Google은 2019년에 양자 우월성(Quantum Supremacy)을 선언하며, 기존 컴퓨터로는 해결하기 어려운 문제를 양자 컴퓨터로 처리하는 데 성공했습니다. Google의 연구는 인공지능과 양자 알고리즘 개발에 중점을 두고 있습니다. 머신러닝 및 데이터 분석 분야에서 양자 컴퓨팅을 적극 활용하고 있으며, AI 모델의 학습 속도를 높이기 위한 연구를 지속하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"Google은 화학, 물리학 분야에 양자 컴퓨팅을 활용하며, 머신러닝 모델의 훈련 속도를 가속화하기 위해 연구를 진행 중입니다. 또한, Google은 양자 컴퓨팅과 인공지능의 결합을 통해 새로운 데이터 분석 기술을 개발하고 있습니다.",imgSrc:cm,link:"https://quantumai.google/"},microsoft:{title:"Microsoft",description:"Microsoft는 Azure Quantum 플랫폼을 통해 다양한 양자 하드웨어와 소프트웨어를 제공합니다.",content:"Microsoft는 토폴로지 큐비트 개발에 주력하며, Azure Quantum 플랫폼을 통해 여러 양자 하드웨어와 소프트웨어 생태계를 지원합니다. 이 플랫폼은 연구자들이 양자 컴퓨팅을 쉽게 활용할 수 있도록 설계되었습니다.",businessTitle:"양자 클라우드 서비스",business:"Microsoft는 Azure Quantum을 통해 다양한 양자 하드웨어와 소프트웨어를 지원합니다. Microsoft는 토폴로지 큐비트를 연구하며, 이를 통해 안정적이고 확장 가능한 양자 컴퓨팅 환경을 개발하고 있습니다. 암호화와 최적화 문제를 해결하기 위해 양자 컴퓨팅을 활용하며, 물리학 및 재료 과학 연구에도 기여하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"Microsoft는 암호화 및 최적화 문제 해결에 양자 컴퓨팅을 활용하며, 물리학 및 재료 과학 연구를 지원하기 위한 도구도 개발 중입니다. 주요 고객들은 클라우드를 통해 양자 컴퓨터에 접근해 다양한 연구를 수행하고 있습니다.",imgSrc:dm,link:"https://quantum.microsoft.com/"},intel:{title:"Intel",description:"Intel은 양자 프로세서 개발과 하드웨어 소프트웨어 생태계 구축에 집중하고 있습니다.",content:"Intel은 고성능 양자 프로세서를 개발 중이며, Quantum SDK를 통해 양자 알고리즘 개발을 지원합니다. Intel은 양자 컴퓨터와 슈퍼컴퓨터 간의 협업을 통해 더욱 강력한 컴퓨팅 성능을 구현하려고 합니다.",businessTitle:"양자 프로세서 개발",business:"Intel은 고성능 큐비트 프로세서를 개발하며, Quantum SDK를 통해 연구자들에게 양자 알고리즘 개발 환경을 제공합니다. Intel은 양자 컴퓨터와 슈퍼컴퓨터를 결합한 하이브리드 컴퓨팅 시스템 개발을 목표로 하고 있습니다. 그뿐 아니라, 반도체 기술과 양자 컴퓨팅을 결합해 상용화 가능한 솔루션을 개발하며, 다양한 산업 응용을 위해 파트너들과 협력하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"Intel은 다양한 산업에서 상용화 가능한 양자 컴퓨터를 구축하는 데 중점을 두고 있으며, 반도체 기술과 양자 프로세서를 결합해 성능을 극대화하고 있습니다.",imgSrc:pm,link:"https://www.intel.co.kr/content/www/kr/ko/research/quantum-computing.html"},alibaba:{title:"Alibaba",description:"Alibaba는 클라우드와 양자 컴퓨팅을 결합해 보안 솔루션을 개발합니다.",content:"Alibaba는 양자 연구소(AQML)를 설립하고 양자 컴퓨팅과 인공지능(AI)을 결합한 연구를 수행 중입니다. 이 회사는 특히 데이터 보안을 강화하기 위해 양자 암호화 기술을 연구하고 있습니다.",businessTitle:"양자 클라우드와 암호화 연구",business:"Alibaba는 **AQML(Alibaba Quantum Laboratory)**을 통해 양자 컴퓨팅과 인공지능을 결합한 연구를 수행하고 있습니다. 양자 컴퓨팅은 보안 기술에 사용되어 데이터 보호를 강화합니다. 또한 데이터 센터와 클라우드 서비스에 양자 컴퓨팅을 도입하며, AI와 결합된 양자 알고리즘 개발에 주력하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"Alibaba는 데이터 센터와 클라우드 서비스에 양자 컴퓨팅을 도입하며, 양자 암호화 솔루션을 개발해 보안을 강화하고 있습니다.",imgSrc:hm,link:"https://www.alibabacloud.com/en/press-room/alibaba-cloud-and-cas-launch-one-of-the-worlds-most?_p_lc=1"},jininfra:{title:"JinInfra",description:"JinInfra는 양자 네트워크 인프라를 개발하며 보안 솔루션을 제공합니다.",content:"JinInfra는 양자 키 분배(QKD)를 기반으로 한 보안 네트워크 구축을 목표로 하고 있으며, 정부 및 기업과 협력해 차세대 통신 인프라를 개발합니다.",businessTitle:"양자 통신 인프라 개발",business:"JinInfra는 양자 키 분배(QKD)를 사용해 안전한 통신망을 구축합니다. 이 회사는 정부 및 기업과 협력해 차세대 통신 인프라를 개발하고 있습니다. 양자 통신 기술을 상용화하기 위해 노력하며, 보안이 중요한 분야에 최적화된 통신망을 구축하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"JinInfra는 양자 통신망 구축 프로젝트를 주도하며, 보안이 중요한 분야에 최적화된 양자 솔루션을 제공합니다. 이 회사는 양자 암호화 기술을 통해 네트워크 보안을 강화하는 데 중점을 두고 있습니다.",imgSrc:fm,link:"https://jininfra.com/"}},aS=()=>{const{companyName:e}=y1(),t=sS[e.toLowerCase()],[n,r]=C.useState(!1);return C.useEffect(()=>{const i=setInterval(()=>{r(o=>!o)},500);return()=>clearInterval(i)},[]),t?a.jsxs(tm,{children:[a.jsxs(nm,{children:[a.jsx(rm,{src:Fa,alt:"banner image"}),a.jsx(im,{children:t.title})]}),a.jsxs(Gw,{children:[a.jsx(Kw,{src:n?lS:oS,alt:`${t.title} speaking`}),a.jsxs(qw,{children:[a.jsx(Yw,{children:t.description}),a.jsx(Xw,{children:t.content})]})]}),a.jsxs(df,{style:{marginBottom:"15px"},children:[a.jsx("h1",{children:t.businessTitle}),a.jsx("p",{children:t.business})]}),a.jsxs(df,{children:[a.jsx("h1",{children:t.businessTitle2}),a.jsx("p",{children:t.business2})]}),a.jsx("div",{style:{margin:"5% 0"},children:a.jsx(Jw,{children:a.jsx(Zw,{href:t.link,target:"_blank",rel:"noopener noreferrer",children:"홈페이지로 이동"})})})]}):a.jsx("p",{children:"존재하지 않는 기업입니다."})},uS=()=>a.jsxs(d3,{children:[a.jsx(p3,{children:a.jsx("a",{href:"/description",children:a.jsx("img",{src:Yu,alt:"Back to main"})})}),a.jsxs(f3,{children:[a.jsx("h1",{children:"양자 컴퓨팅과 계산 복잡도 이론"}),a.jsx("hr",{})]})]});function cS(){return a.jsx(a.Fragment,{children:a.jsx(uS,{})})}function dS(){return a.jsxs(M1,{children:[a.jsx(c2,{}),a.jsx(iS,{}),a.jsxs(L1,{children:[a.jsx(Pe,{path:"/",element:a.jsx(qy,{})}),a.jsx(Pe,{path:"/concept",element:a.jsx(L2,{})}),a.jsx(Pe,{path:"/description",element:a.jsx(g3,{})}),a.jsx(Pe,{path:"/quiz",element:a.jsx(N2,{})}),a.jsx(Pe,{path:"/medium",element:a.jsx(A2,{})}),a.jsx(Pe,{path:"/advanced",element:a.jsx(B2,{})}),a.jsx(Pe,{path:"/quizmain",element:a.jsx(D2,{})}),a.jsx(Pe,{path:"/character",element:a.jsx(F3,{})}),a.jsx(Pe,{path:"/cat",element:a.jsx(V3,{})}),a.jsx(Pe,{path:"/company",element:a.jsx(t3,{})}),a.jsx(Pe,{path:"/company/:companyName",element:a.jsx(aS,{})}),a.jsx(Pe,{path:"/recent",element:a.jsx(a3,{})}),a.jsx(Pe,{path:"/coinentanglement",element:a.jsx(rS,{})}),a.jsx(Pe,{path:"/computing",element:a.jsx(cS,{})})]}),a.jsx(x3,{}),a.jsx(S2,{})]})}const fS=Wy`
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
`,pS={title:kn`
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 800;
      font-size: 4rem;
      letter-spacing: 0.07em;
    `,text:kn`
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 500;
      font-size: 1.5rem;
      letter-spacing: 0.07em;
    `},hS={fonts:pS};function mS(){return a.jsx(a.Fragment,{children:a.jsxs(Ay,{theme:hS,children:[a.jsx(fS,{}),a.jsx(dS,{})]})})}bs.createRoot(document.getElementById("root")).render(a.jsx(de.StrictMode,{children:a.jsx(mS,{})}));
