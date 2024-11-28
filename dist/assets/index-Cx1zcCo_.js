function Dm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Oi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Fm(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Nf={exports:{}},dl={},Af={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wi=Symbol.for("react.element"),Bm=Symbol.for("react.portal"),$m=Symbol.for("react.fragment"),Qm=Symbol.for("react.strict_mode"),Um=Symbol.for("react.profiler"),Wm=Symbol.for("react.provider"),Hm=Symbol.for("react.context"),Gm=Symbol.for("react.forward_ref"),Vm=Symbol.for("react.suspense"),Km=Symbol.for("react.memo"),qm=Symbol.for("react.lazy"),pc=Symbol.iterator;function Ym(e){return e===null||typeof e!="object"?null:(e=pc&&e[pc]||e["@@iterator"],typeof e=="function"?e:null)}var Df={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ff=Object.assign,Bf={};function Sr(e,t,n){this.props=e,this.context=t,this.refs=Bf,this.updater=n||Df}Sr.prototype.isReactComponent={};Sr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $f(){}$f.prototype=Sr.prototype;function eu(e,t,n){this.props=e,this.context=t,this.refs=Bf,this.updater=n||Df}var tu=eu.prototype=new $f;tu.constructor=eu;Ff(tu,Sr.prototype);tu.isPureReactComponent=!0;var hc=Array.isArray,Qf=Object.prototype.hasOwnProperty,nu={current:null},Uf={key:!0,ref:!0,__self:!0,__source:!0};function Wf(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Qf.call(t,r)&&!Uf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:wi,type:e,key:o,ref:s,props:i,_owner:nu.current}}function Xm(e,t){return{$$typeof:wi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ru(e){return typeof e=="object"&&e!==null&&e.$$typeof===wi}function Zm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mc=/\/+/g;function Ql(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Zm(""+e.key):t.toString(36)}function Ji(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case wi:case Bm:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ql(s,0):r,hc(i)?(n="",e!=null&&(n=e.replace(mc,"$&/")+"/"),Ji(i,t,n,"",function(c){return c})):i!=null&&(ru(i)&&(i=Xm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(mc,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",hc(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+Ql(o,a);s+=Ji(o,t,n,u,i)}else if(u=Ym(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+Ql(o,a++),s+=Ji(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ti(e,t,n){if(e==null)return e;var r=[],i=0;return Ji(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Jm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},eo={transition:null},eg={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:eo,ReactCurrentOwner:nu};function Hf(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:Ti,forEach:function(e,t,n){Ti(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ti(e,function(){t++}),t},toArray:function(e){return Ti(e,function(t){return t})||[]},only:function(e){if(!ru(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=Sr;W.Fragment=$m;W.Profiler=Um;W.PureComponent=eu;W.StrictMode=Qm;W.Suspense=Vm;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eg;W.act=Hf;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ff({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=nu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Qf.call(t,u)&&!Uf.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:wi,type:e.type,key:i,ref:o,props:r,_owner:s}};W.createContext=function(e){return e={$$typeof:Hm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wm,_context:e},e.Consumer=e};W.createElement=Wf;W.createFactory=function(e){var t=Wf.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:Gm,render:e}};W.isValidElement=ru;W.lazy=function(e){return{$$typeof:qm,_payload:{_status:-1,_result:e},_init:Jm}};W.memo=function(e,t){return{$$typeof:Km,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=eo.transition;eo.transition={};try{e()}finally{eo.transition=t}};W.unstable_act=Hf;W.useCallback=function(e,t){return ze.current.useCallback(e,t)};W.useContext=function(e){return ze.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};W.useEffect=function(e,t){return ze.current.useEffect(e,t)};W.useId=function(){return ze.current.useId()};W.useImperativeHandle=function(e,t,n){return ze.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return ze.current.useMemo(e,t)};W.useReducer=function(e,t,n){return ze.current.useReducer(e,t,n)};W.useRef=function(e){return ze.current.useRef(e)};W.useState=function(e){return ze.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return ze.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return ze.current.useTransition()};W.version="18.3.1";Af.exports=W;var b=Af.exports;const fe=Mf(b),tg=Dm({__proto__:null,default:fe},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng=b,rg=Symbol.for("react.element"),ig=Symbol.for("react.fragment"),og=Object.prototype.hasOwnProperty,lg=ng.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sg={key:!0,ref:!0,__self:!0,__source:!0};function Gf(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)og.call(t,r)&&!sg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:rg,type:e,key:o,ref:s,props:i,_owner:lg.current}}dl.Fragment=ig;dl.jsx=Gf;dl.jsxs=Gf;Nf.exports=dl;var l=Nf.exports,Ns={},Vf={exports:{}},Ke={},Kf={exports:{}},qf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,R){var B=z.length;z.push(R);e:for(;0<B;){var H=B-1>>>1,V=z[H];if(0<i(V,R))z[H]=R,z[B]=V,B=H;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var R=z[0],B=z.pop();if(B!==R){z[0]=B;e:for(var H=0,V=z.length,Pe=V>>>1;H<Pe;){var $e=2*(H+1)-1,Re=z[$e],Qe=$e+1,yt=z[Qe];if(0>i(Re,B))Qe<V&&0>i(yt,Re)?(z[H]=yt,z[Qe]=B,H=Qe):(z[H]=Re,z[$e]=B,H=$e);else if(Qe<V&&0>i(yt,B))z[H]=yt,z[Qe]=B,H=Qe;else break e}}return R}function i(z,R){var B=z.sortIndex-R.sortIndex;return B!==0?B:z.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var u=[],c=[],h=1,f=null,g=3,x=!1,y=!1,v=!1,j=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(z){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=z)r(c),R.sortIndex=R.expirationTime,t(u,R);else break;R=n(c)}}function S(z){if(v=!1,m(z),!y)if(n(u)!==null)y=!0,le(k);else{var R=n(c);R!==null&&we(S,R.startTime-z)}}function k(z,R){y=!1,v&&(v=!1,p(T),T=-1),x=!0;var B=g;try{for(m(R),f=n(u);f!==null&&(!(f.expirationTime>R)||z&&!N());){var H=f.callback;if(typeof H=="function"){f.callback=null,g=f.priorityLevel;var V=H(f.expirationTime<=R);R=e.unstable_now(),typeof V=="function"?f.callback=V:f===n(u)&&r(u),m(R)}else r(u);f=n(u)}if(f!==null)var Pe=!0;else{var $e=n(c);$e!==null&&we(S,$e.startTime-R),Pe=!1}return Pe}finally{f=null,g=B,x=!1}}var C=!1,E=null,T=-1,P=5,_=-1;function N(){return!(e.unstable_now()-_<P)}function M(){if(E!==null){var z=e.unstable_now();_=z;var R=!0;try{R=E(!0,z)}finally{R?A():(C=!1,E=null)}}else C=!1}var A;if(typeof d=="function")A=function(){d(M)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,it=F.port2;F.port1.onmessage=M,A=function(){it.postMessage(null)}}else A=function(){j(M,0)};function le(z){E=z,C||(C=!0,A())}function we(z,R){T=j(function(){z(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,le(k))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var B=g;g=R;try{return z()}finally{g=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,R){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var B=g;g=z;try{return R()}finally{g=B}},e.unstable_scheduleCallback=function(z,R,B){var H=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?H+B:H):B=H,z){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=B+V,z={id:h++,callback:R,priorityLevel:z,startTime:B,expirationTime:V,sortIndex:-1},B>H?(z.sortIndex=B,t(c,z),n(u)===null&&z===n(c)&&(v?(p(T),T=-1):v=!0,we(S,B-H))):(z.sortIndex=V,t(u,z),y||x||(y=!0,le(k))),z},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(z){var R=g;return function(){var B=g;g=R;try{return z.apply(this,arguments)}finally{g=B}}}})(qf);Kf.exports=qf;var ag=Kf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug=b,Ve=ag;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yf=new Set,Zr={};function _n(e,t){nr(e,t),nr(e+"Capture",t)}function nr(e,t){for(Zr[e]=t,e=0;e<t.length;e++)Yf.add(t[e])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),As=Object.prototype.hasOwnProperty,cg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gc={},vc={};function dg(e){return As.call(vc,e)?!0:As.call(gc,e)?!1:cg.test(e)?vc[e]=!0:(gc[e]=!0,!1)}function fg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function pg(e,t,n,r){if(t===null||typeof t>"u"||fg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Le(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){be[e]=new Le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];be[t]=new Le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){be[e]=new Le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){be[e]=new Le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){be[e]=new Le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){be[e]=new Le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){be[e]=new Le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){be[e]=new Le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){be[e]=new Le(e,5,!1,e.toLowerCase(),null,!1,!1)});var iu=/[\-:]([a-z])/g;function ou(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(iu,ou);be[t]=new Le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(iu,ou);be[t]=new Le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(iu,ou);be[t]=new Le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){be[e]=new Le(e,1,!1,e.toLowerCase(),null,!1,!1)});be.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){be[e]=new Le(e,1,!1,e.toLowerCase(),null,!0,!0)});function lu(e,t,n,r){var i=be.hasOwnProperty(t)?be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(pg(t,n,i,r)&&(n=null),r||i===null?dg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zt=ug.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ii=Symbol.for("react.element"),Rn=Symbol.for("react.portal"),Mn=Symbol.for("react.fragment"),su=Symbol.for("react.strict_mode"),Ds=Symbol.for("react.profiler"),Xf=Symbol.for("react.provider"),Zf=Symbol.for("react.context"),au=Symbol.for("react.forward_ref"),Fs=Symbol.for("react.suspense"),Bs=Symbol.for("react.suspense_list"),uu=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Jf=Symbol.for("react.offscreen"),xc=Symbol.iterator;function Pr(e){return e===null||typeof e!="object"?null:(e=xc&&e[xc]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,Ul;function Ar(e){if(Ul===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ul=t&&t[1]||""}return`
`+Ul+e}var Wl=!1;function Hl(e,t){if(!e||Wl)return"";Wl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var u=`
`+i[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{Wl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ar(e):""}function hg(e){switch(e.tag){case 5:return Ar(e.type);case 16:return Ar("Lazy");case 13:return Ar("Suspense");case 19:return Ar("SuspenseList");case 0:case 2:case 15:return e=Hl(e.type,!1),e;case 11:return e=Hl(e.type.render,!1),e;case 1:return e=Hl(e.type,!0),e;default:return""}}function $s(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mn:return"Fragment";case Rn:return"Portal";case Ds:return"Profiler";case su:return"StrictMode";case Fs:return"Suspense";case Bs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zf:return(e.displayName||"Context")+".Consumer";case Xf:return(e._context.displayName||"Context")+".Provider";case au:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case uu:return t=e.displayName||null,t!==null?t:$s(e.type)||"Memo";case Nt:t=e._payload,e=e._init;try{return $s(e(t))}catch{}}return null}function mg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $s(t);case 8:return t===su?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function en(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ep(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gg(e){var t=ep(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zi(e){e._valueTracker||(e._valueTracker=gg(e))}function tp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ep(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function yo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qs(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function yc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function np(e,t){t=t.checked,t!=null&&lu(e,"checked",t,!1)}function Us(e,t){np(e,t);var n=en(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ws(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ws(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ws(e,t,n){(t!=="number"||yo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dr=Array.isArray;function Vn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Hs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(Dr(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}function rp(e,t){var n=en(t.value),r=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function jc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ip(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ip(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Li,op=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Li=Li||document.createElement("div"),Li.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vg=["Webkit","ms","Moz","O"];Object.keys(Qr).forEach(function(e){vg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qr[t]=Qr[e]})});function lp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qr.hasOwnProperty(e)&&Qr[e]?(""+t).trim():t+"px"}function sp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=lp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var xg=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vs(e,t){if(t){if(xg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function Ks(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qs=null;function cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,Kn=null,qn=null;function bc(e){if(e=bi(e)){if(typeof Ys!="function")throw Error(O(280));var t=e.stateNode;t&&(t=gl(t),Ys(e.stateNode,e.type,t))}}function ap(e){Kn?qn?qn.push(e):qn=[e]:Kn=e}function up(){if(Kn){var e=Kn,t=qn;if(qn=Kn=null,bc(e),t)for(e=0;e<t.length;e++)bc(t[e])}}function cp(e,t){return e(t)}function dp(){}var Gl=!1;function fp(e,t,n){if(Gl)return e(t,n);Gl=!0;try{return cp(e,t,n)}finally{Gl=!1,(Kn!==null||qn!==null)&&(dp(),up())}}function ei(e,t){var n=e.stateNode;if(n===null)return null;var r=gl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var Xs=!1;if(Pt)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Xs=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Xs=!1}function yg(e,t,n,r,i,o,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Ur=!1,wo=null,So=!1,Zs=null,wg={onError:function(e){Ur=!0,wo=e}};function Sg(e,t,n,r,i,o,s,a,u){Ur=!1,wo=null,yg.apply(wg,arguments)}function jg(e,t,n,r,i,o,s,a,u){if(Sg.apply(this,arguments),Ur){if(Ur){var c=wo;Ur=!1,wo=null}else throw Error(O(198));So||(So=!0,Zs=c)}}function Pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function pp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kc(e){if(Pn(e)!==e)throw Error(O(188))}function bg(e){var t=e.alternate;if(!t){if(t=Pn(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return kc(i),e;if(o===r)return kc(i),t;o=o.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function hp(e){return e=bg(e),e!==null?mp(e):null}function mp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=mp(e);if(t!==null)return t;e=e.sibling}return null}var gp=Ve.unstable_scheduleCallback,Cc=Ve.unstable_cancelCallback,kg=Ve.unstable_shouldYield,Cg=Ve.unstable_requestPaint,ue=Ve.unstable_now,Eg=Ve.unstable_getCurrentPriorityLevel,du=Ve.unstable_ImmediatePriority,vp=Ve.unstable_UserBlockingPriority,jo=Ve.unstable_NormalPriority,_g=Ve.unstable_LowPriority,xp=Ve.unstable_IdlePriority,fl=null,vt=null;function Pg(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(fl,e,void 0,(e.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:Ig,Og=Math.log,Tg=Math.LN2;function Ig(e){return e>>>=0,e===0?32:31-(Og(e)/Tg|0)|0}var Ri=64,Mi=4194304;function Fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Fr(a):(o&=s,o!==0&&(r=Fr(o)))}else s=n&~i,s!==0?r=Fr(s):o!==0&&(r=Fr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ut(t),i=1<<n,r|=e[n],t&=~i;return r}function zg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ut(o),a=1<<s,u=i[s];u===-1?(!(a&n)||a&r)&&(i[s]=zg(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function Js(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yp(){var e=Ri;return Ri<<=1,!(Ri&4194240)&&(Ri=64),e}function Vl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Si(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ut(t),e[t]=n}function Rg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ut(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function fu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ut(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var q=0;function wp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Sp,pu,jp,bp,kp,ea=!1,Ni=[],Wt=null,Ht=null,Gt=null,ti=new Map,ni=new Map,Ft=[],Mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ec(e,t){switch(e){case"focusin":case"focusout":Wt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Gt=null;break;case"pointerover":case"pointerout":ti.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ni.delete(t.pointerId)}}function Tr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=bi(t),t!==null&&pu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ng(e,t,n,r,i){switch(t){case"focusin":return Wt=Tr(Wt,e,t,n,r,i),!0;case"dragenter":return Ht=Tr(Ht,e,t,n,r,i),!0;case"mouseover":return Gt=Tr(Gt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ti.set(o,Tr(ti.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ni.set(o,Tr(ni.get(o)||null,e,t,n,r,i)),!0}return!1}function Cp(e){var t=dn(e.target);if(t!==null){var n=Pn(t);if(n!==null){if(t=n.tag,t===13){if(t=pp(n),t!==null){e.blockedOn=t,kp(e.priority,function(){jp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function to(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ta(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);qs=r,n.target.dispatchEvent(r),qs=null}else return t=bi(n),t!==null&&pu(t),e.blockedOn=n,!1;t.shift()}return!0}function _c(e,t,n){to(e)&&n.delete(t)}function Ag(){ea=!1,Wt!==null&&to(Wt)&&(Wt=null),Ht!==null&&to(Ht)&&(Ht=null),Gt!==null&&to(Gt)&&(Gt=null),ti.forEach(_c),ni.forEach(_c)}function Ir(e,t){e.blockedOn===t&&(e.blockedOn=null,ea||(ea=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,Ag)))}function ri(e){function t(i){return Ir(i,e)}if(0<Ni.length){Ir(Ni[0],e);for(var n=1;n<Ni.length;n++){var r=Ni[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Wt!==null&&Ir(Wt,e),Ht!==null&&Ir(Ht,e),Gt!==null&&Ir(Gt,e),ti.forEach(t),ni.forEach(t),n=0;n<Ft.length;n++)r=Ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ft.length&&(n=Ft[0],n.blockedOn===null);)Cp(n),n.blockedOn===null&&Ft.shift()}var Yn=zt.ReactCurrentBatchConfig,ko=!0;function Dg(e,t,n,r){var i=q,o=Yn.transition;Yn.transition=null;try{q=1,hu(e,t,n,r)}finally{q=i,Yn.transition=o}}function Fg(e,t,n,r){var i=q,o=Yn.transition;Yn.transition=null;try{q=4,hu(e,t,n,r)}finally{q=i,Yn.transition=o}}function hu(e,t,n,r){if(ko){var i=ta(e,t,n,r);if(i===null)rs(e,t,r,Co,n),Ec(e,r);else if(Ng(i,e,t,n,r))r.stopPropagation();else if(Ec(e,r),t&4&&-1<Mg.indexOf(e)){for(;i!==null;){var o=bi(i);if(o!==null&&Sp(o),o=ta(e,t,n,r),o===null&&rs(e,t,r,Co,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else rs(e,t,r,null,n)}}var Co=null;function ta(e,t,n,r){if(Co=null,e=cu(r),e=dn(e),e!==null)if(t=Pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=pp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Co=e,null}function Ep(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Eg()){case du:return 1;case vp:return 4;case jo:case _g:return 16;case xp:return 536870912;default:return 16}default:return 16}}var $t=null,mu=null,no=null;function _p(){if(no)return no;var e,t=mu,n=t.length,r,i="value"in $t?$t.value:$t.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return no=i.slice(e,1<r?1-r:void 0)}function ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ai(){return!0}function Pc(){return!1}function qe(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ai:Pc,this.isPropagationStopped=Pc,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ai)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ai)},persist:function(){},isPersistent:Ai}),t}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gu=qe(jr),ji=oe({},jr,{view:0,detail:0}),Bg=qe(ji),Kl,ql,zr,pl=oe({},ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(Kl=e.screenX-zr.screenX,ql=e.screenY-zr.screenY):ql=Kl=0,zr=e),Kl)},movementY:function(e){return"movementY"in e?e.movementY:ql}}),Oc=qe(pl),$g=oe({},pl,{dataTransfer:0}),Qg=qe($g),Ug=oe({},ji,{relatedTarget:0}),Yl=qe(Ug),Wg=oe({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),Hg=qe(Wg),Gg=oe({},jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vg=qe(Gg),Kg=oe({},jr,{data:0}),Tc=qe(Kg),qg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xg[e])?!!t[e]:!1}function vu(){return Zg}var Jg=oe({},ji,{key:function(e){if(e.key){var t=qg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vu,charCode:function(e){return e.type==="keypress"?ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),e1=qe(Jg),t1=oe({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ic=qe(t1),n1=oe({},ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vu}),r1=qe(n1),i1=oe({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),o1=qe(i1),l1=oe({},pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),s1=qe(l1),a1=[9,13,27,32],xu=Pt&&"CompositionEvent"in window,Wr=null;Pt&&"documentMode"in document&&(Wr=document.documentMode);var u1=Pt&&"TextEvent"in window&&!Wr,Pp=Pt&&(!xu||Wr&&8<Wr&&11>=Wr),zc=" ",Lc=!1;function Op(e,t){switch(e){case"keyup":return a1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function c1(e,t){switch(e){case"compositionend":return Tp(t);case"keypress":return t.which!==32?null:(Lc=!0,zc);case"textInput":return e=t.data,e===zc&&Lc?null:e;default:return null}}function d1(e,t){if(Nn)return e==="compositionend"||!xu&&Op(e,t)?(e=_p(),no=mu=$t=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pp&&t.locale!=="ko"?null:t.data;default:return null}}var f1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!f1[e.type]:t==="textarea"}function Ip(e,t,n,r){ap(r),t=Eo(t,"onChange"),0<t.length&&(n=new gu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hr=null,ii=null;function p1(e){Qp(e,0)}function hl(e){var t=Fn(e);if(tp(t))return e}function h1(e,t){if(e==="change")return t}var zp=!1;if(Pt){var Xl;if(Pt){var Zl="oninput"in document;if(!Zl){var Mc=document.createElement("div");Mc.setAttribute("oninput","return;"),Zl=typeof Mc.oninput=="function"}Xl=Zl}else Xl=!1;zp=Xl&&(!document.documentMode||9<document.documentMode)}function Nc(){Hr&&(Hr.detachEvent("onpropertychange",Lp),ii=Hr=null)}function Lp(e){if(e.propertyName==="value"&&hl(ii)){var t=[];Ip(t,ii,e,cu(e)),fp(p1,t)}}function m1(e,t,n){e==="focusin"?(Nc(),Hr=t,ii=n,Hr.attachEvent("onpropertychange",Lp)):e==="focusout"&&Nc()}function g1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hl(ii)}function v1(e,t){if(e==="click")return hl(t)}function x1(e,t){if(e==="input"||e==="change")return hl(t)}function y1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:y1;function oi(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!As.call(t,i)||!ft(e[i],t[i]))return!1}return!0}function Ac(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dc(e,t){var n=Ac(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ac(n)}}function Rp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mp(){for(var e=window,t=yo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=yo(e.document)}return t}function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function w1(e){var t=Mp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Rp(n.ownerDocument.documentElement,n)){if(r!==null&&yu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Dc(n,o);var s=Dc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var S1=Pt&&"documentMode"in document&&11>=document.documentMode,An=null,na=null,Gr=null,ra=!1;function Fc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ra||An==null||An!==yo(r)||(r=An,"selectionStart"in r&&yu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gr&&oi(Gr,r)||(Gr=r,r=Eo(na,"onSelect"),0<r.length&&(t=new gu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=An)))}function Di(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dn={animationend:Di("Animation","AnimationEnd"),animationiteration:Di("Animation","AnimationIteration"),animationstart:Di("Animation","AnimationStart"),transitionend:Di("Transition","TransitionEnd")},Jl={},Np={};Pt&&(Np=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function ml(e){if(Jl[e])return Jl[e];if(!Dn[e])return e;var t=Dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Np)return Jl[e]=t[n];return e}var Ap=ml("animationend"),Dp=ml("animationiteration"),Fp=ml("animationstart"),Bp=ml("transitionend"),$p=new Map,Bc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(e,t){$p.set(e,t),_n(t,[e])}for(var es=0;es<Bc.length;es++){var ts=Bc[es],j1=ts.toLowerCase(),b1=ts[0].toUpperCase()+ts.slice(1);nn(j1,"on"+b1)}nn(Ap,"onAnimationEnd");nn(Dp,"onAnimationIteration");nn(Fp,"onAnimationStart");nn("dblclick","onDoubleClick");nn("focusin","onFocus");nn("focusout","onBlur");nn(Bp,"onTransitionEnd");nr("onMouseEnter",["mouseout","mouseover"]);nr("onMouseLeave",["mouseout","mouseover"]);nr("onPointerEnter",["pointerout","pointerover"]);nr("onPointerLeave",["pointerout","pointerover"]);_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_n("onBeforeInput",["compositionend","keypress","textInput","paste"]);_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),k1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function $c(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,jg(r,t,void 0,e),e.currentTarget=null}function Qp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;$c(i,a,c),o=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;$c(i,a,c),o=u}}}if(So)throw e=Zs,So=!1,Zs=null,e}function X(e,t){var n=t[aa];n===void 0&&(n=t[aa]=new Set);var r=e+"__bubble";n.has(r)||(Up(t,e,2,!1),n.add(r))}function ns(e,t,n){var r=0;t&&(r|=4),Up(n,e,r,t)}var Fi="_reactListening"+Math.random().toString(36).slice(2);function li(e){if(!e[Fi]){e[Fi]=!0,Yf.forEach(function(n){n!=="selectionchange"&&(k1.has(n)||ns(n,!1,e),ns(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fi]||(t[Fi]=!0,ns("selectionchange",!1,t))}}function Up(e,t,n,r){switch(Ep(t)){case 1:var i=Dg;break;case 4:i=Fg;break;default:i=hu}n=i.bind(null,t,n,e),i=void 0,!Xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function rs(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;a!==null;){if(s=dn(a),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}a=a.parentNode}}r=r.return}fp(function(){var c=o,h=cu(n),f=[];e:{var g=$p.get(e);if(g!==void 0){var x=gu,y=e;switch(e){case"keypress":if(ro(n)===0)break e;case"keydown":case"keyup":x=e1;break;case"focusin":y="focus",x=Yl;break;case"focusout":y="blur",x=Yl;break;case"beforeblur":case"afterblur":x=Yl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Oc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Qg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=r1;break;case Ap:case Dp:case Fp:x=Hg;break;case Bp:x=o1;break;case"scroll":x=Bg;break;case"wheel":x=s1;break;case"copy":case"cut":case"paste":x=Vg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ic}var v=(t&4)!==0,j=!v&&e==="scroll",p=v?g!==null?g+"Capture":null:g;v=[];for(var d=c,m;d!==null;){m=d;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,p!==null&&(S=ei(d,p),S!=null&&v.push(si(d,S,m)))),j)break;d=d.return}0<v.length&&(g=new x(g,y,null,n,h),f.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==qs&&(y=n.relatedTarget||n.fromElement)&&(dn(y)||y[Ot]))break e;if((x||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=c,y=y?dn(y):null,y!==null&&(j=Pn(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=c),x!==y)){if(v=Oc,S="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=Ic,S="onPointerLeave",p="onPointerEnter",d="pointer"),j=x==null?g:Fn(x),m=y==null?g:Fn(y),g=new v(S,d+"leave",x,n,h),g.target=j,g.relatedTarget=m,S=null,dn(h)===c&&(v=new v(p,d+"enter",y,n,h),v.target=m,v.relatedTarget=j,S=v),j=S,x&&y)t:{for(v=x,p=y,d=0,m=v;m;m=Tn(m))d++;for(m=0,S=p;S;S=Tn(S))m++;for(;0<d-m;)v=Tn(v),d--;for(;0<m-d;)p=Tn(p),m--;for(;d--;){if(v===p||p!==null&&v===p.alternate)break t;v=Tn(v),p=Tn(p)}v=null}else v=null;x!==null&&Qc(f,g,x,v,!1),y!==null&&j!==null&&Qc(f,j,y,v,!0)}}e:{if(g=c?Fn(c):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var k=h1;else if(Rc(g))if(zp)k=x1;else{k=g1;var C=m1}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=v1);if(k&&(k=k(e,c))){Ip(f,k,n,h);break e}C&&C(e,g,c),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&Ws(g,"number",g.value)}switch(C=c?Fn(c):window,e){case"focusin":(Rc(C)||C.contentEditable==="true")&&(An=C,na=c,Gr=null);break;case"focusout":Gr=na=An=null;break;case"mousedown":ra=!0;break;case"contextmenu":case"mouseup":case"dragend":ra=!1,Fc(f,n,h);break;case"selectionchange":if(S1)break;case"keydown":case"keyup":Fc(f,n,h)}var E;if(xu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Nn?Op(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Pp&&n.locale!=="ko"&&(Nn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Nn&&(E=_p()):($t=h,mu="value"in $t?$t.value:$t.textContent,Nn=!0)),C=Eo(c,T),0<C.length&&(T=new Tc(T,e,null,n,h),f.push({event:T,listeners:C}),E?T.data=E:(E=Tp(n),E!==null&&(T.data=E)))),(E=u1?c1(e,n):d1(e,n))&&(c=Eo(c,"onBeforeInput"),0<c.length&&(h=new Tc("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=E))}Qp(f,t)})}function si(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Eo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ei(e,n),o!=null&&r.unshift(si(e,o,i)),o=ei(e,t),o!=null&&r.push(si(e,o,i))),e=e.return}return r}function Tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qc(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=ei(n,o),u!=null&&s.unshift(si(n,u,a))):i||(u=ei(n,o),u!=null&&s.push(si(n,u,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var C1=/\r\n?/g,E1=/\u0000|\uFFFD/g;function Uc(e){return(typeof e=="string"?e:""+e).replace(C1,`
`).replace(E1,"")}function Bi(e,t,n){if(t=Uc(t),Uc(e)!==t&&n)throw Error(O(425))}function _o(){}var ia=null,oa=null;function la(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sa=typeof setTimeout=="function"?setTimeout:void 0,_1=typeof clearTimeout=="function"?clearTimeout:void 0,Wc=typeof Promise=="function"?Promise:void 0,P1=typeof queueMicrotask=="function"?queueMicrotask:typeof Wc<"u"?function(e){return Wc.resolve(null).then(e).catch(O1)}:sa;function O1(e){setTimeout(function(){throw e})}function is(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ri(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ri(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var br=Math.random().toString(36).slice(2),gt="__reactFiber$"+br,ai="__reactProps$"+br,Ot="__reactContainer$"+br,aa="__reactEvents$"+br,T1="__reactListeners$"+br,I1="__reactHandles$"+br;function dn(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hc(e);e!==null;){if(n=e[gt])return n;e=Hc(e)}return t}e=n,n=e.parentNode}return null}function bi(e){return e=e[gt]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function gl(e){return e[ai]||null}var ua=[],Bn=-1;function rn(e){return{current:e}}function J(e){0>Bn||(e.current=ua[Bn],ua[Bn]=null,Bn--)}function Y(e,t){Bn++,ua[Bn]=e.current,e.current=t}var tn={},_e=rn(tn),De=rn(!1),xn=tn;function rr(e,t){var n=e.type.contextTypes;if(!n)return tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Fe(e){return e=e.childContextTypes,e!=null}function Po(){J(De),J(_e)}function Gc(e,t,n){if(_e.current!==tn)throw Error(O(168));Y(_e,t),Y(De,n)}function Wp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(O(108,mg(e)||"Unknown",i));return oe({},n,r)}function Oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tn,xn=_e.current,Y(_e,e),Y(De,De.current),!0}function Vc(e,t,n){var r=e.stateNode;if(!r)throw Error(O(169));n?(e=Wp(e,t,xn),r.__reactInternalMemoizedMergedChildContext=e,J(De),J(_e),Y(_e,e)):J(De),Y(De,n)}var bt=null,vl=!1,os=!1;function Hp(e){bt===null?bt=[e]:bt.push(e)}function z1(e){vl=!0,Hp(e)}function on(){if(!os&&bt!==null){os=!0;var e=0,t=q;try{var n=bt;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}bt=null,vl=!1}catch(i){throw bt!==null&&(bt=bt.slice(e+1)),gp(du,on),i}finally{q=t,os=!1}}return null}var $n=[],Qn=0,To=null,Io=0,Xe=[],Ze=0,yn=null,Ct=1,Et="";function un(e,t){$n[Qn++]=Io,$n[Qn++]=To,To=e,Io=t}function Gp(e,t,n){Xe[Ze++]=Ct,Xe[Ze++]=Et,Xe[Ze++]=yn,yn=e;var r=Ct;e=Et;var i=32-ut(r)-1;r&=~(1<<i),n+=1;var o=32-ut(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ct=1<<32-ut(t)+i|n<<i|r,Et=o+e}else Ct=1<<o|n<<i|r,Et=e}function wu(e){e.return!==null&&(un(e,1),Gp(e,1,0))}function Su(e){for(;e===To;)To=$n[--Qn],$n[Qn]=null,Io=$n[--Qn],$n[Qn]=null;for(;e===yn;)yn=Xe[--Ze],Xe[Ze]=null,Et=Xe[--Ze],Xe[Ze]=null,Ct=Xe[--Ze],Xe[Ze]=null}var Ge=null,He=null,te=!1,at=null;function Vp(e,t){var n=Je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Kc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ge=e,He=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ge=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=yn!==null?{id:Ct,overflow:Et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ge=e,He=null,!0):!1;default:return!1}}function ca(e){return(e.mode&1)!==0&&(e.flags&128)===0}function da(e){if(te){var t=He;if(t){var n=t;if(!Kc(e,t)){if(ca(e))throw Error(O(418));t=Vt(n.nextSibling);var r=Ge;t&&Kc(e,t)?Vp(r,n):(e.flags=e.flags&-4097|2,te=!1,Ge=e)}}else{if(ca(e))throw Error(O(418));e.flags=e.flags&-4097|2,te=!1,Ge=e}}}function qc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function $i(e){if(e!==Ge)return!1;if(!te)return qc(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!la(e.type,e.memoizedProps)),t&&(t=He)){if(ca(e))throw Kp(),Error(O(418));for(;t;)Vp(e,t),t=Vt(t.nextSibling)}if(qc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=Ge?Vt(e.stateNode.nextSibling):null;return!0}function Kp(){for(var e=He;e;)e=Vt(e.nextSibling)}function ir(){He=Ge=null,te=!1}function ju(e){at===null?at=[e]:at.push(e)}var L1=zt.ReactCurrentBatchConfig;function Lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function Qi(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yc(e){var t=e._init;return t(e._payload)}function qp(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Xt(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,S){return d===null||d.tag!==6?(d=fs(m,p.mode,S),d.return=p,d):(d=i(d,m),d.return=p,d)}function u(p,d,m,S){var k=m.type;return k===Mn?h(p,d,m.props.children,S,m.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Nt&&Yc(k)===d.type)?(S=i(d,m.props),S.ref=Lr(p,d,m),S.return=p,S):(S=co(m.type,m.key,m.props,null,p.mode,S),S.ref=Lr(p,d,m),S.return=p,S)}function c(p,d,m,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=ps(m,p.mode,S),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function h(p,d,m,S,k){return d===null||d.tag!==7?(d=gn(m,p.mode,S,k),d.return=p,d):(d=i(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=fs(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ii:return m=co(d.type,d.key,d.props,null,p.mode,m),m.ref=Lr(p,null,d),m.return=p,m;case Rn:return d=ps(d,p.mode,m),d.return=p,d;case Nt:var S=d._init;return f(p,S(d._payload),m)}if(Dr(d)||Pr(d))return d=gn(d,p.mode,m,null),d.return=p,d;Qi(p,d)}return null}function g(p,d,m,S){var k=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(p,d,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ii:return m.key===k?u(p,d,m,S):null;case Rn:return m.key===k?c(p,d,m,S):null;case Nt:return k=m._init,g(p,d,k(m._payload),S)}if(Dr(m)||Pr(m))return k!==null?null:h(p,d,m,S,null);Qi(p,m)}return null}function x(p,d,m,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(m)||null,a(d,p,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ii:return p=p.get(S.key===null?m:S.key)||null,u(d,p,S,k);case Rn:return p=p.get(S.key===null?m:S.key)||null,c(d,p,S,k);case Nt:var C=S._init;return x(p,d,m,C(S._payload),k)}if(Dr(S)||Pr(S))return p=p.get(m)||null,h(d,p,S,k,null);Qi(d,S)}return null}function y(p,d,m,S){for(var k=null,C=null,E=d,T=d=0,P=null;E!==null&&T<m.length;T++){E.index>T?(P=E,E=null):P=E.sibling;var _=g(p,E,m[T],S);if(_===null){E===null&&(E=P);break}e&&E&&_.alternate===null&&t(p,E),d=o(_,d,T),C===null?k=_:C.sibling=_,C=_,E=P}if(T===m.length)return n(p,E),te&&un(p,T),k;if(E===null){for(;T<m.length;T++)E=f(p,m[T],S),E!==null&&(d=o(E,d,T),C===null?k=E:C.sibling=E,C=E);return te&&un(p,T),k}for(E=r(p,E);T<m.length;T++)P=x(E,p,T,m[T],S),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?T:P.key),d=o(P,d,T),C===null?k=P:C.sibling=P,C=P);return e&&E.forEach(function(N){return t(p,N)}),te&&un(p,T),k}function v(p,d,m,S){var k=Pr(m);if(typeof k!="function")throw Error(O(150));if(m=k.call(m),m==null)throw Error(O(151));for(var C=k=null,E=d,T=d=0,P=null,_=m.next();E!==null&&!_.done;T++,_=m.next()){E.index>T?(P=E,E=null):P=E.sibling;var N=g(p,E,_.value,S);if(N===null){E===null&&(E=P);break}e&&E&&N.alternate===null&&t(p,E),d=o(N,d,T),C===null?k=N:C.sibling=N,C=N,E=P}if(_.done)return n(p,E),te&&un(p,T),k;if(E===null){for(;!_.done;T++,_=m.next())_=f(p,_.value,S),_!==null&&(d=o(_,d,T),C===null?k=_:C.sibling=_,C=_);return te&&un(p,T),k}for(E=r(p,E);!_.done;T++,_=m.next())_=x(E,p,T,_.value,S),_!==null&&(e&&_.alternate!==null&&E.delete(_.key===null?T:_.key),d=o(_,d,T),C===null?k=_:C.sibling=_,C=_);return e&&E.forEach(function(M){return t(p,M)}),te&&un(p,T),k}function j(p,d,m,S){if(typeof m=="object"&&m!==null&&m.type===Mn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ii:e:{for(var k=m.key,C=d;C!==null;){if(C.key===k){if(k=m.type,k===Mn){if(C.tag===7){n(p,C.sibling),d=i(C,m.props.children),d.return=p,p=d;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Nt&&Yc(k)===C.type){n(p,C.sibling),d=i(C,m.props),d.ref=Lr(p,C,m),d.return=p,p=d;break e}n(p,C);break}else t(p,C);C=C.sibling}m.type===Mn?(d=gn(m.props.children,p.mode,S,m.key),d.return=p,p=d):(S=co(m.type,m.key,m.props,null,p.mode,S),S.ref=Lr(p,d,m),S.return=p,p=S)}return s(p);case Rn:e:{for(C=m.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=ps(m,p.mode,S),d.return=p,p=d}return s(p);case Nt:return C=m._init,j(p,d,C(m._payload),S)}if(Dr(m))return y(p,d,m,S);if(Pr(m))return v(p,d,m,S);Qi(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=fs(m,p.mode,S),d.return=p,p=d),s(p)):n(p,d)}return j}var or=qp(!0),Yp=qp(!1),zo=rn(null),Lo=null,Un=null,bu=null;function ku(){bu=Un=Lo=null}function Cu(e){var t=zo.current;J(zo),e._currentValue=t}function fa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xn(e,t){Lo=e,bu=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ae=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(bu!==e)if(e={context:e,memoizedValue:t,next:null},Un===null){if(Lo===null)throw Error(O(308));Un=e,Lo.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return t}var fn=null;function Eu(e){fn===null?fn=[e]:fn.push(e)}function Xp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Eu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Tt(e,r)}function Tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function _u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Tt(e,n)}return i=r.interleaved,i===null?(t.next=t,Eu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Tt(e,n)}function io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fu(e,n)}}function Xc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ro(e,t,n,r){var i=e.updateQueue;At=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(o!==null){var f=i.baseState;s=0,h=c=u=null,a=o;do{var g=a.lane,x=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(g=t,x=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(x,f,g);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,g=typeof y=="function"?y.call(x,f,g):y,g==null)break e;f=oe({},f,g);break e;case 2:At=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else x={eventTime:x,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=x,u=f):h=h.next=x,s|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Sn|=s,e.lanes=s,e.memoizedState=f}}function Zc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var ki={},xt=rn(ki),ui=rn(ki),ci=rn(ki);function pn(e){if(e===ki)throw Error(O(174));return e}function Pu(e,t){switch(Y(ci,t),Y(ui,e),Y(xt,ki),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gs(t,e)}J(xt),Y(xt,t)}function lr(){J(xt),J(ui),J(ci)}function Jp(e){pn(ci.current);var t=pn(xt.current),n=Gs(t,e.type);t!==n&&(Y(ui,e),Y(xt,n))}function Ou(e){ui.current===e&&(J(xt),J(ui))}var re=rn(0);function Mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ls=[];function Tu(){for(var e=0;e<ls.length;e++)ls[e]._workInProgressVersionPrimary=null;ls.length=0}var oo=zt.ReactCurrentDispatcher,ss=zt.ReactCurrentBatchConfig,wn=0,ie=null,he=null,ge=null,No=!1,Vr=!1,di=0,R1=0;function ke(){throw Error(O(321))}function Iu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function zu(e,t,n,r,i,o){if(wn=o,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oo.current=e===null||e.memoizedState===null?D1:F1,e=n(r,i),Vr){o=0;do{if(Vr=!1,di=0,25<=o)throw Error(O(301));o+=1,ge=he=null,t.updateQueue=null,oo.current=B1,e=n(r,i)}while(Vr)}if(oo.current=Ao,t=he!==null&&he.next!==null,wn=0,ge=he=ie=null,No=!1,t)throw Error(O(300));return e}function Lu(){var e=di!==0;return di=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ie.memoizedState=ge=e:ge=ge.next=e,ge}function nt(){if(he===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ge===null?ie.memoizedState:ge.next;if(t!==null)ge=t,he=e;else{if(e===null)throw Error(O(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ge===null?ie.memoizedState=ge=e:ge=ge.next=e}return ge}function fi(e,t){return typeof t=="function"?t(e):t}function as(e){var t=nt(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=he,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,u=null,c=o;do{var h=c.lane;if((wn&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,s=r):u=u.next=f,ie.lanes|=h,Sn|=h}c=c.next}while(c!==null&&c!==o);u===null?s=r:u.next=a,ft(r,t.memoizedState)||(Ae=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ie.lanes|=o,Sn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function us(e){var t=nt(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);ft(o,t.memoizedState)||(Ae=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function e0(){}function t0(e,t){var n=ie,r=nt(),i=t(),o=!ft(r.memoizedState,i);if(o&&(r.memoizedState=i,Ae=!0),r=r.queue,Ru(i0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,pi(9,r0.bind(null,n,r,i,t),void 0,null),ye===null)throw Error(O(349));wn&30||n0(n,t,i)}return i}function n0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function r0(e,t,n,r){t.value=n,t.getSnapshot=r,o0(t)&&l0(e)}function i0(e,t,n){return n(function(){o0(t)&&l0(e)})}function o0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function l0(e){var t=Tt(e,1);t!==null&&ct(t,e,1,-1)}function Jc(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fi,lastRenderedState:e},t.queue=e,e=e.dispatch=A1.bind(null,ie,e),[t.memoizedState,e]}function pi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function s0(){return nt().memoizedState}function lo(e,t,n,r){var i=ht();ie.flags|=e,i.memoizedState=pi(1|t,n,void 0,r===void 0?null:r)}function xl(e,t,n,r){var i=nt();r=r===void 0?null:r;var o=void 0;if(he!==null){var s=he.memoizedState;if(o=s.destroy,r!==null&&Iu(r,s.deps)){i.memoizedState=pi(t,n,o,r);return}}ie.flags|=e,i.memoizedState=pi(1|t,n,o,r)}function ed(e,t){return lo(8390656,8,e,t)}function Ru(e,t){return xl(2048,8,e,t)}function a0(e,t){return xl(4,2,e,t)}function u0(e,t){return xl(4,4,e,t)}function c0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function d0(e,t,n){return n=n!=null?n.concat([e]):null,xl(4,4,c0.bind(null,t,e),n)}function Mu(){}function f0(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Iu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function p0(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Iu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function h0(e,t,n){return wn&21?(ft(n,t)||(n=yp(),ie.lanes|=n,Sn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=n)}function M1(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=ss.transition;ss.transition={};try{e(!1),t()}finally{q=n,ss.transition=r}}function m0(){return nt().memoizedState}function N1(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},g0(e))v0(t,n);else if(n=Xp(e,t,n,r),n!==null){var i=Ie();ct(n,e,r,i),x0(n,t,r)}}function A1(e,t,n){var r=Yt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(g0(e))v0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,ft(a,s)){var u=t.interleaved;u===null?(i.next=i,Eu(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Xp(e,t,i,r),n!==null&&(i=Ie(),ct(n,e,r,i),x0(n,t,r))}}function g0(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function v0(e,t){Vr=No=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function x0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fu(e,n)}}var Ao={readContext:tt,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},D1={readContext:tt,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:ed,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,lo(4194308,4,c0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return lo(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=N1.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:Jc,useDebugValue:Mu,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=Jc(!1),t=e[0];return e=M1.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,i=ht();if(te){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),ye===null)throw Error(O(349));wn&30||n0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ed(i0.bind(null,r,o,e),[e]),r.flags|=2048,pi(9,r0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ht(),t=ye.identifierPrefix;if(te){var n=Et,r=Ct;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=di++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=R1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},F1={readContext:tt,useCallback:f0,useContext:tt,useEffect:Ru,useImperativeHandle:d0,useInsertionEffect:a0,useLayoutEffect:u0,useMemo:p0,useReducer:as,useRef:s0,useState:function(){return as(fi)},useDebugValue:Mu,useDeferredValue:function(e){var t=nt();return h0(t,he.memoizedState,e)},useTransition:function(){var e=as(fi)[0],t=nt().memoizedState;return[e,t]},useMutableSource:e0,useSyncExternalStore:t0,useId:m0,unstable_isNewReconciler:!1},B1={readContext:tt,useCallback:f0,useContext:tt,useEffect:Ru,useImperativeHandle:d0,useInsertionEffect:a0,useLayoutEffect:u0,useMemo:p0,useReducer:us,useRef:s0,useState:function(){return us(fi)},useDebugValue:Mu,useDeferredValue:function(e){var t=nt();return he===null?t.memoizedState=e:h0(t,he.memoizedState,e)},useTransition:function(){var e=us(fi)[0],t=nt().memoizedState;return[e,t]},useMutableSource:e0,useSyncExternalStore:t0,useId:m0,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function pa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yl={isMounted:function(e){return(e=e._reactInternals)?Pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ie(),i=Yt(e),o=_t(r,i);o.payload=t,n!=null&&(o.callback=n),t=Kt(e,o,i),t!==null&&(ct(t,e,i,r),io(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ie(),i=Yt(e),o=_t(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Kt(e,o,i),t!==null&&(ct(t,e,i,r),io(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ie(),r=Yt(e),i=_t(n,r);i.tag=2,t!=null&&(i.callback=t),t=Kt(e,i,r),t!==null&&(ct(t,e,r,n),io(t,e,r))}};function td(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!oi(n,r)||!oi(i,o):!0}function y0(e,t,n){var r=!1,i=tn,o=t.contextType;return typeof o=="object"&&o!==null?o=tt(o):(i=Fe(t)?xn:_e.current,r=t.contextTypes,o=(r=r!=null)?rr(e,i):tn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=yl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function nd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&yl.enqueueReplaceState(t,t.state,null)}function ha(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},_u(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=tt(o):(o=Fe(t)?xn:_e.current,i.context=rr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(pa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&yl.enqueueReplaceState(i,i.state,null),Ro(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function sr(e,t){try{var n="",r=t;do n+=hg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function cs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ma(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $1=typeof WeakMap=="function"?WeakMap:Map;function w0(e,t,n){n=_t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Fo||(Fo=!0,Ca=r),ma(e,t)},n}function S0(e,t,n){n=_t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ma(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ma(e,t),typeof r!="function"&&(qt===null?qt=new Set([this]):qt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function rd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=t2.bind(null,e,t,n),t.then(e,e))}function id(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function od(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=_t(-1,1),t.tag=2,Kt(n,t,1))),n.lanes|=1),e)}var Q1=zt.ReactCurrentOwner,Ae=!1;function Te(e,t,n,r){t.child=e===null?Yp(t,null,n,r):or(t,e.child,n,r)}function ld(e,t,n,r,i){n=n.render;var o=t.ref;return Xn(t,i),r=zu(e,t,n,r,o,i),n=Lu(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,It(e,t,i)):(te&&n&&wu(t),t.flags|=1,Te(e,t,r,i),t.child)}function sd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Uu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,j0(e,t,o,r,i)):(e=co(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:oi,n(s,r)&&e.ref===t.ref)return It(e,t,i)}return t.flags|=1,e=Xt(o,r),e.ref=t.ref,e.return=t,t.child=e}function j0(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(oi(o,r)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ae=!0);else return t.lanes=e.lanes,It(e,t,i)}return ga(e,t,n,r,i)}function b0(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Hn,We),We|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(Hn,We),We|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Y(Hn,We),We|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Y(Hn,We),We|=r;return Te(e,t,i,n),t.child}function k0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ga(e,t,n,r,i){var o=Fe(n)?xn:_e.current;return o=rr(t,o),Xn(t,i),n=zu(e,t,n,r,o,i),r=Lu(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,It(e,t,i)):(te&&r&&wu(t),t.flags|=1,Te(e,t,n,i),t.child)}function ad(e,t,n,r,i){if(Fe(n)){var o=!0;Oo(t)}else o=!1;if(Xn(t,i),t.stateNode===null)so(e,t),y0(t,n,r),ha(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=tt(c):(c=Fe(n)?xn:_e.current,c=rr(t,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==c)&&nd(t,s,r,c),At=!1;var g=t.memoizedState;s.state=g,Ro(t,r,s,i),u=t.memoizedState,a!==r||g!==u||De.current||At?(typeof h=="function"&&(pa(t,n,h,r),u=t.memoizedState),(a=At||td(t,n,a,r,g,u,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Zp(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:lt(t.type,a),s.props=c,f=t.pendingProps,g=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=tt(u):(u=Fe(n)?xn:_e.current,u=rr(t,u));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||g!==u)&&nd(t,s,r,u),At=!1,g=t.memoizedState,s.state=g,Ro(t,r,s,i);var y=t.memoizedState;a!==f||g!==y||De.current||At?(typeof x=="function"&&(pa(t,n,x,r),y=t.memoizedState),(c=At||td(t,n,c,r,g,y,u)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return va(e,t,n,r,o,i)}function va(e,t,n,r,i,o){k0(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Vc(t,n,!1),It(e,t,o);r=t.stateNode,Q1.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=or(t,e.child,null,o),t.child=or(t,null,a,o)):Te(e,t,a,o),t.memoizedState=r.state,i&&Vc(t,n,!0),t.child}function C0(e){var t=e.stateNode;t.pendingContext?Gc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gc(e,t.context,!1),Pu(e,t.containerInfo)}function ud(e,t,n,r,i){return ir(),ju(i),t.flags|=256,Te(e,t,n,r),t.child}var xa={dehydrated:null,treeContext:null,retryLane:0};function ya(e){return{baseLanes:e,cachePool:null,transitions:null}}function E0(e,t,n){var r=t.pendingProps,i=re.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(re,i&1),e===null)return da(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=jl(s,r,0,null),e=gn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ya(n),t.memoizedState=xa,e):Nu(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return U1(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Xt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Xt(a,o):(o=gn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?ya(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=xa,r}return o=e.child,e=o.sibling,r=Xt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Nu(e,t){return t=jl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ui(e,t,n,r){return r!==null&&ju(r),or(t,e.child,null,n),e=Nu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function U1(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=cs(Error(O(422))),Ui(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=jl({mode:"visible",children:r.children},i,0,null),o=gn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&or(t,e.child,null,s),t.child.memoizedState=ya(s),t.memoizedState=xa,o);if(!(t.mode&1))return Ui(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(O(419)),r=cs(o,r,void 0),Ui(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ae||a){if(r=ye,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Tt(e,i),ct(r,e,i,-1))}return Qu(),r=cs(Error(O(421))),Ui(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=n2.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,He=Vt(i.nextSibling),Ge=t,te=!0,at=null,e!==null&&(Xe[Ze++]=Ct,Xe[Ze++]=Et,Xe[Ze++]=yn,Ct=e.id,Et=e.overflow,yn=t),t=Nu(t,r.children),t.flags|=4096,t)}function cd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fa(e.return,t,n)}function ds(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function _0(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Te(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cd(e,n,t);else if(e.tag===19)cd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(re,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ds(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ds(t,!0,n,null,o);break;case"together":ds(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function so(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Sn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=Xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function W1(e,t,n){switch(t.tag){case 3:C0(t),ir();break;case 5:Jp(t);break;case 1:Fe(t.type)&&Oo(t);break;case 4:Pu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(zo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?E0(e,t,n):(Y(re,re.current&1),e=It(e,t,n),e!==null?e.sibling:null);Y(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return _0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,b0(e,t,n)}return It(e,t,n)}var P0,wa,O0,T0;P0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wa=function(){};O0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,pn(xt.current);var o=null;switch(n){case"input":i=Qs(e,i),r=Qs(e,r),o=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),o=[];break;case"textarea":i=Hs(e,i),r=Hs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=_o)}Vs(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Zr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Zr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&X("scroll",e),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};T0=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function H1(e,t,n){var r=t.pendingProps;switch(Su(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Fe(t.type)&&Po(),Ce(t),null;case 3:return r=t.stateNode,lr(),J(De),J(_e),Tu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&($i(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,at!==null&&(Pa(at),at=null))),wa(e,t),Ce(t),null;case 5:Ou(t);var i=pn(ci.current);if(n=t.type,e!==null&&t.stateNode!=null)O0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(O(166));return Ce(t),null}if(e=pn(xt.current),$i(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[gt]=t,r[ai]=o,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<Br.length;i++)X(Br[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":yc(r,o),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},X("invalid",r);break;case"textarea":Sc(r,o),X("invalid",r)}Vs(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Bi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Bi(r.textContent,a,e),i=["children",""+a]):Zr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&X("scroll",r)}switch(n){case"input":zi(r),wc(r,o,!0);break;case"textarea":zi(r),jc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=_o)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ip(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[gt]=t,e[ai]=r,P0(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ks(n,r),n){case"dialog":X("cancel",e),X("close",e),i=r;break;case"iframe":case"object":case"embed":X("load",e),i=r;break;case"video":case"audio":for(i=0;i<Br.length;i++)X(Br[i],e);i=r;break;case"source":X("error",e),i=r;break;case"img":case"image":case"link":X("error",e),X("load",e),i=r;break;case"details":X("toggle",e),i=r;break;case"input":yc(e,r),i=Qs(e,r),X("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),X("invalid",e);break;case"textarea":Sc(e,r),i=Hs(e,r),X("invalid",e);break;default:i=r}Vs(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?sp(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&op(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Jr(e,u):typeof u=="number"&&Jr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Zr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&X("scroll",e):u!=null&&lu(e,o,u,s))}switch(n){case"input":zi(e),wc(e,r,!1);break;case"textarea":zi(e),jc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+en(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Vn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Vn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=_o)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)T0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(O(166));if(n=pn(ci.current),pn(xt.current),$i(t)){if(r=t.stateNode,n=t.memoizedProps,r[gt]=t,(o=r.nodeValue!==n)&&(e=Ge,e!==null))switch(e.tag){case 3:Bi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=t,t.stateNode=r}return Ce(t),null;case 13:if(J(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&He!==null&&t.mode&1&&!(t.flags&128))Kp(),ir(),t.flags|=98560,o=!1;else if(o=$i(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(O(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(O(317));o[gt]=t}else ir(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),o=!1}else at!==null&&(Pa(at),at=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?me===0&&(me=3):Qu())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return lr(),wa(e,t),e===null&&li(t.stateNode.containerInfo),Ce(t),null;case 10:return Cu(t.type._context),Ce(t),null;case 17:return Fe(t.type)&&Po(),Ce(t),null;case 19:if(J(re),o=t.memoizedState,o===null)return Ce(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Rr(o,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Mo(e),s!==null){for(t.flags|=128,Rr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(re,re.current&1|2),t.child}e=e.sibling}o.tail!==null&&ue()>ar&&(t.flags|=128,r=!0,Rr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Mo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!te)return Ce(t),null}else 2*ue()-o.renderingStartTime>ar&&n!==1073741824&&(t.flags|=128,r=!0,Rr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ue(),t.sibling=null,n=re.current,Y(re,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return $u(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?We&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function G1(e,t){switch(Su(t),t.tag){case 1:return Fe(t.type)&&Po(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return lr(),J(De),J(_e),Tu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ou(t),null;case 13:if(J(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(re),null;case 4:return lr(),null;case 10:return Cu(t.type._context),null;case 22:case 23:return $u(),null;case 24:return null;default:return null}}var Wi=!1,Ee=!1,V1=typeof WeakSet=="function"?WeakSet:Set,L=null;function Wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function Sa(e,t,n){try{n()}catch(r){se(e,t,r)}}var dd=!1;function K1(e,t){if(ia=ko,e=Mp(),yu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,c=0,h=0,f=e,g=null;t:for(;;){for(var x;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(u=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(x=f.firstChild)!==null;)g=f,f=x;for(;;){if(f===e)break t;if(g===n&&++c===i&&(a=s),g===o&&++h===r&&(u=s),(x=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=x}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(oa={focusedElem:e,selectionRange:n},ko=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,j=y.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:lt(t.type,v),j);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(S){se(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return y=dd,dd=!1,y}function Kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Sa(t,n,o)}i=i.next}while(i!==r)}}function wl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ja(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function I0(e){var t=e.alternate;t!==null&&(e.alternate=null,I0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gt],delete t[ai],delete t[aa],delete t[T1],delete t[I1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function z0(e){return e.tag===5||e.tag===3||e.tag===4}function fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||z0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ba(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_o));else if(r!==4&&(e=e.child,e!==null))for(ba(e,t,n),e=e.sibling;e!==null;)ba(e,t,n),e=e.sibling}function ka(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ka(e,t,n),e=e.sibling;e!==null;)ka(e,t,n),e=e.sibling}var Se=null,st=!1;function Rt(e,t,n){for(n=n.child;n!==null;)L0(e,t,n),n=n.sibling}function L0(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(fl,n)}catch{}switch(n.tag){case 5:Ee||Wn(n,t);case 6:var r=Se,i=st;Se=null,Rt(e,t,n),Se=r,st=i,Se!==null&&(st?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(st?(e=Se,n=n.stateNode,e.nodeType===8?is(e.parentNode,n):e.nodeType===1&&is(e,n),ri(e)):is(Se,n.stateNode));break;case 4:r=Se,i=st,Se=n.stateNode.containerInfo,st=!0,Rt(e,t,n),Se=r,st=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Sa(n,t,s),i=i.next}while(i!==r)}Rt(e,t,n);break;case 1:if(!Ee&&(Wn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){se(n,t,a)}Rt(e,t,n);break;case 21:Rt(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Rt(e,t,n),Ee=r):Rt(e,t,n);break;default:Rt(e,t,n)}}function pd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new V1),t.forEach(function(r){var i=r2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Se=a.stateNode,st=!1;break e;case 3:Se=a.stateNode.containerInfo,st=!0;break e;case 4:Se=a.stateNode.containerInfo,st=!0;break e}a=a.return}if(Se===null)throw Error(O(160));L0(o,s,i),Se=null,st=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){se(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)R0(t,e),t=t.sibling}function R0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),pt(e),r&4){try{Kr(3,e,e.return),wl(3,e)}catch(v){se(e,e.return,v)}try{Kr(5,e,e.return)}catch(v){se(e,e.return,v)}}break;case 1:ot(t,e),pt(e),r&512&&n!==null&&Wn(n,n.return);break;case 5:if(ot(t,e),pt(e),r&512&&n!==null&&Wn(n,n.return),e.flags&32){var i=e.stateNode;try{Jr(i,"")}catch(v){se(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&np(i,o),Ks(a,s);var c=Ks(a,o);for(s=0;s<u.length;s+=2){var h=u[s],f=u[s+1];h==="style"?sp(i,f):h==="dangerouslySetInnerHTML"?op(i,f):h==="children"?Jr(i,f):lu(i,h,f,c)}switch(a){case"input":Us(i,o);break;case"textarea":rp(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Vn(i,!!o.multiple,x,!1):g!==!!o.multiple&&(o.defaultValue!=null?Vn(i,!!o.multiple,o.defaultValue,!0):Vn(i,!!o.multiple,o.multiple?[]:"",!1))}i[ai]=o}catch(v){se(e,e.return,v)}}break;case 6:if(ot(t,e),pt(e),r&4){if(e.stateNode===null)throw Error(O(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){se(e,e.return,v)}}break;case 3:if(ot(t,e),pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ri(t.containerInfo)}catch(v){se(e,e.return,v)}break;case 4:ot(t,e),pt(e);break;case 13:ot(t,e),pt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Fu=ue())),r&4&&pd(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(c=Ee)||h,ot(t,e),Ee=c):ot(t,e),pt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(L=e,h=e.child;h!==null;){for(f=L=h;L!==null;){switch(g=L,x=g.child,g.tag){case 0:case 11:case 14:case 15:Kr(4,g,g.return);break;case 1:Wn(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){se(r,n,v)}}break;case 5:Wn(g,g.return);break;case 22:if(g.memoizedState!==null){md(f);continue}}x!==null?(x.return=g,L=x):md(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,u=f.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=lp("display",s))}catch(v){se(e,e.return,v)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){se(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ot(t,e),pt(e),r&4&&pd(e);break;case 21:break;default:ot(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(z0(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Jr(i,""),r.flags&=-33);var o=fd(e);ka(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=fd(e);ba(e,a,s);break;default:throw Error(O(161))}}catch(u){se(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function q1(e,t,n){L=e,M0(e)}function M0(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Wi;if(!s){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Ee;a=Wi;var c=Ee;if(Wi=s,(Ee=u)&&!c)for(L=i;L!==null;)s=L,u=s.child,s.tag===22&&s.memoizedState!==null?gd(i):u!==null?(u.return=s,L=u):gd(i);for(;o!==null;)L=o,M0(o),o=o.sibling;L=i,Wi=a,Ee=c}hd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):hd(e)}}function hd(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||wl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Zc(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zc(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ri(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Ee||t.flags&512&&ja(t)}catch(g){se(t,t.return,g)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function md(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function gd(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{wl(4,t)}catch(u){se(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){se(t,i,u)}}var o=t.return;try{ja(t)}catch(u){se(t,o,u)}break;case 5:var s=t.return;try{ja(t)}catch(u){se(t,s,u)}}}catch(u){se(t,t.return,u)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var Y1=Math.ceil,Do=zt.ReactCurrentDispatcher,Au=zt.ReactCurrentOwner,et=zt.ReactCurrentBatchConfig,G=0,ye=null,de=null,je=0,We=0,Hn=rn(0),me=0,hi=null,Sn=0,Sl=0,Du=0,qr=null,Ne=null,Fu=0,ar=1/0,wt=null,Fo=!1,Ca=null,qt=null,Hi=!1,Qt=null,Bo=0,Yr=0,Ea=null,ao=-1,uo=0;function Ie(){return G&6?ue():ao!==-1?ao:ao=ue()}function Yt(e){return e.mode&1?G&2&&je!==0?je&-je:L1.transition!==null?(uo===0&&(uo=yp()),uo):(e=q,e!==0||(e=window.event,e=e===void 0?16:Ep(e.type)),e):1}function ct(e,t,n,r){if(50<Yr)throw Yr=0,Ea=null,Error(O(185));Si(e,n,r),(!(G&2)||e!==ye)&&(e===ye&&(!(G&2)&&(Sl|=n),me===4&&Bt(e,je)),Be(e,r),n===1&&G===0&&!(t.mode&1)&&(ar=ue()+500,vl&&on()))}function Be(e,t){var n=e.callbackNode;Lg(e,t);var r=bo(e,e===ye?je:0);if(r===0)n!==null&&Cc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Cc(n),t===1)e.tag===0?z1(vd.bind(null,e)):Hp(vd.bind(null,e)),P1(function(){!(G&6)&&on()}),n=null;else{switch(wp(r)){case 1:n=du;break;case 4:n=vp;break;case 16:n=jo;break;case 536870912:n=xp;break;default:n=jo}n=U0(n,N0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function N0(e,t){if(ao=-1,uo=0,G&6)throw Error(O(327));var n=e.callbackNode;if(Zn()&&e.callbackNode!==n)return null;var r=bo(e,e===ye?je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$o(e,r);else{t=r;var i=G;G|=2;var o=D0();(ye!==e||je!==t)&&(wt=null,ar=ue()+500,mn(e,t));do try{J1();break}catch(a){A0(e,a)}while(!0);ku(),Do.current=o,G=i,de!==null?t=0:(ye=null,je=0,t=me)}if(t!==0){if(t===2&&(i=Js(e),i!==0&&(r=i,t=_a(e,i))),t===1)throw n=hi,mn(e,0),Bt(e,r),Be(e,ue()),n;if(t===6)Bt(e,r);else{if(i=e.current.alternate,!(r&30)&&!X1(i)&&(t=$o(e,r),t===2&&(o=Js(e),o!==0&&(r=o,t=_a(e,o))),t===1))throw n=hi,mn(e,0),Bt(e,r),Be(e,ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(O(345));case 2:cn(e,Ne,wt);break;case 3:if(Bt(e,r),(r&130023424)===r&&(t=Fu+500-ue(),10<t)){if(bo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ie(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=sa(cn.bind(null,e,Ne,wt),t);break}cn(e,Ne,wt);break;case 4:if(Bt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ut(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Y1(r/1960))-r,10<r){e.timeoutHandle=sa(cn.bind(null,e,Ne,wt),r);break}cn(e,Ne,wt);break;case 5:cn(e,Ne,wt);break;default:throw Error(O(329))}}}return Be(e,ue()),e.callbackNode===n?N0.bind(null,e):null}function _a(e,t){var n=qr;return e.current.memoizedState.isDehydrated&&(mn(e,t).flags|=256),e=$o(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&Pa(t)),e}function Pa(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function X1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ft(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Bt(e,t){for(t&=~Du,t&=~Sl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ut(t),r=1<<n;e[n]=-1,t&=~r}}function vd(e){if(G&6)throw Error(O(327));Zn();var t=bo(e,0);if(!(t&1))return Be(e,ue()),null;var n=$o(e,t);if(e.tag!==0&&n===2){var r=Js(e);r!==0&&(t=r,n=_a(e,r))}if(n===1)throw n=hi,mn(e,0),Bt(e,t),Be(e,ue()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cn(e,Ne,wt),Be(e,ue()),null}function Bu(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(ar=ue()+500,vl&&on())}}function jn(e){Qt!==null&&Qt.tag===0&&!(G&6)&&Zn();var t=G;G|=1;var n=et.transition,r=q;try{if(et.transition=null,q=1,e)return e()}finally{q=r,et.transition=n,G=t,!(G&6)&&on()}}function $u(){We=Hn.current,J(Hn)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_1(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Su(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Po();break;case 3:lr(),J(De),J(_e),Tu();break;case 5:Ou(r);break;case 4:lr();break;case 13:J(re);break;case 19:J(re);break;case 10:Cu(r.type._context);break;case 22:case 23:$u()}n=n.return}if(ye=e,de=e=Xt(e.current,null),je=We=t,me=0,hi=null,Du=Sl=Sn=0,Ne=qr=null,fn!==null){for(t=0;t<fn.length;t++)if(n=fn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}fn=null}return e}function A0(e,t){do{var n=de;try{if(ku(),oo.current=Ao,No){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}No=!1}if(wn=0,ge=he=ie=null,Vr=!1,di=0,Au.current=null,n===null||n.return===null){me=1,hi=t,de=null;break}e:{var o=e,s=n.return,a=n,u=t;if(t=je,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=id(s);if(x!==null){x.flags&=-257,od(x,s,a,o,t),x.mode&1&&rd(o,c,t),t=x,u=c;var y=t.updateQueue;if(y===null){var v=new Set;v.add(u),t.updateQueue=v}else y.add(u);break e}else{if(!(t&1)){rd(o,c,t),Qu();break e}u=Error(O(426))}}else if(te&&a.mode&1){var j=id(s);if(j!==null){!(j.flags&65536)&&(j.flags|=256),od(j,s,a,o,t),ju(sr(u,a));break e}}o=u=sr(u,a),me!==4&&(me=2),qr===null?qr=[o]:qr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=w0(o,u,t);Xc(o,p);break e;case 1:a=u;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(qt===null||!qt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=S0(o,a,t);Xc(o,S);break e}}o=o.return}while(o!==null)}B0(n)}catch(k){t=k,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function D0(){var e=Do.current;return Do.current=Ao,e===null?Ao:e}function Qu(){(me===0||me===3||me===2)&&(me=4),ye===null||!(Sn&268435455)&&!(Sl&268435455)||Bt(ye,je)}function $o(e,t){var n=G;G|=2;var r=D0();(ye!==e||je!==t)&&(wt=null,mn(e,t));do try{Z1();break}catch(i){A0(e,i)}while(!0);if(ku(),G=n,Do.current=r,de!==null)throw Error(O(261));return ye=null,je=0,me}function Z1(){for(;de!==null;)F0(de)}function J1(){for(;de!==null&&!kg();)F0(de)}function F0(e){var t=Q0(e.alternate,e,We);e.memoizedProps=e.pendingProps,t===null?B0(e):de=t,Au.current=null}function B0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=G1(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,de=null;return}}else if(n=H1(n,t,We),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);me===0&&(me=5)}function cn(e,t,n){var r=q,i=et.transition;try{et.transition=null,q=1,e2(e,t,n,r)}finally{et.transition=i,q=r}return null}function e2(e,t,n,r){do Zn();while(Qt!==null);if(G&6)throw Error(O(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Rg(e,o),e===ye&&(de=ye=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hi||(Hi=!0,U0(jo,function(){return Zn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=et.transition,et.transition=null;var s=q;q=1;var a=G;G|=4,Au.current=null,K1(e,n),R0(n,e),w1(oa),ko=!!ia,oa=ia=null,e.current=n,q1(n),Cg(),G=a,q=s,et.transition=o}else e.current=n;if(Hi&&(Hi=!1,Qt=e,Bo=i),o=e.pendingLanes,o===0&&(qt=null),Pg(n.stateNode),Be(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fo)throw Fo=!1,e=Ca,Ca=null,e;return Bo&1&&e.tag!==0&&Zn(),o=e.pendingLanes,o&1?e===Ea?Yr++:(Yr=0,Ea=e):Yr=0,on(),null}function Zn(){if(Qt!==null){var e=wp(Bo),t=et.transition,n=q;try{if(et.transition=null,q=16>e?16:e,Qt===null)var r=!1;else{if(e=Qt,Qt=null,Bo=0,G&6)throw Error(O(331));var i=G;for(G|=4,L=e.current;L!==null;){var o=L,s=o.child;if(L.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(L=c;L!==null;){var h=L;switch(h.tag){case 0:case 11:case 15:Kr(8,h,o)}var f=h.child;if(f!==null)f.return=h,L=f;else for(;L!==null;){h=L;var g=h.sibling,x=h.return;if(I0(h),h===c){L=null;break}if(g!==null){g.return=x,L=g;break}L=x}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var j=v.sibling;v.sibling=null,v=j}while(v!==null)}}L=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,L=s;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Kr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,L=p;break e}L=o.return}}var d=e.current;for(L=d;L!==null;){s=L;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,L=m;else e:for(s=d;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wl(9,a)}}catch(k){se(a,a.return,k)}if(a===s){L=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,L=S;break e}L=a.return}}if(G=i,on(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(fl,e)}catch{}r=!0}return r}finally{q=n,et.transition=t}}return!1}function xd(e,t,n){t=sr(n,t),t=w0(e,t,1),e=Kt(e,t,1),t=Ie(),e!==null&&(Si(e,1,t),Be(e,t))}function se(e,t,n){if(e.tag===3)xd(e,e,n);else for(;t!==null;){if(t.tag===3){xd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qt===null||!qt.has(r))){e=sr(n,e),e=S0(t,e,1),t=Kt(t,e,1),e=Ie(),t!==null&&(Si(t,1,e),Be(t,e));break}}t=t.return}}function t2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ie(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(je&n)===n&&(me===4||me===3&&(je&130023424)===je&&500>ue()-Fu?mn(e,0):Du|=n),Be(e,t)}function $0(e,t){t===0&&(e.mode&1?(t=Mi,Mi<<=1,!(Mi&130023424)&&(Mi=4194304)):t=1);var n=Ie();e=Tt(e,t),e!==null&&(Si(e,t,n),Be(e,n))}function n2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$0(e,n)}function r2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(t),$0(e,n)}var Q0;Q0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Ae=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ae=!1,W1(e,t,n);Ae=!!(e.flags&131072)}else Ae=!1,te&&t.flags&1048576&&Gp(t,Io,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;so(e,t),e=t.pendingProps;var i=rr(t,_e.current);Xn(t,n),i=zu(null,t,r,e,i,n);var o=Lu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(o=!0,Oo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_u(t),i.updater=yl,t.stateNode=i,i._reactInternals=t,ha(t,r,e,n),t=va(null,t,r,!0,o,n)):(t.tag=0,te&&o&&wu(t),Te(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(so(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=o2(r),e=lt(r,e),i){case 0:t=ga(null,t,r,e,n);break e;case 1:t=ad(null,t,r,e,n);break e;case 11:t=ld(null,t,r,e,n);break e;case 14:t=sd(null,t,r,lt(r.type,e),n);break e}throw Error(O(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),ga(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),ad(e,t,r,i,n);case 3:e:{if(C0(t),e===null)throw Error(O(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Zp(e,t),Ro(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=sr(Error(O(423)),t),t=ud(e,t,r,n,i);break e}else if(r!==i){i=sr(Error(O(424)),t),t=ud(e,t,r,n,i);break e}else for(He=Vt(t.stateNode.containerInfo.firstChild),Ge=t,te=!0,at=null,n=Yp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ir(),r===i){t=It(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return Jp(t),e===null&&da(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,la(r,i)?s=null:o!==null&&la(r,o)&&(t.flags|=32),k0(e,t),Te(e,t,s,n),t.child;case 6:return e===null&&da(t),null;case 13:return E0(e,t,n);case 4:return Pu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=or(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),ld(e,t,r,i,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Y(zo,r._currentValue),r._currentValue=s,o!==null)if(ft(o.value,s)){if(o.children===i.children&&!De.current){t=It(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=_t(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),fa(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(O(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),fa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Te(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Xn(t,n),i=tt(i),r=r(i),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,i=lt(r,t.pendingProps),i=lt(r.type,i),sd(e,t,r,i,n);case 15:return j0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),so(e,t),t.tag=1,Fe(r)?(e=!0,Oo(t)):e=!1,Xn(t,n),y0(t,r,i),ha(t,r,i,n),va(null,t,r,!0,e,n);case 19:return _0(e,t,n);case 22:return b0(e,t,n)}throw Error(O(156,t.tag))};function U0(e,t){return gp(e,t)}function i2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,t,n,r){return new i2(e,t,n,r)}function Uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function o2(e){if(typeof e=="function")return Uu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===au)return 11;if(e===uu)return 14}return 2}function Xt(e,t){var n=e.alternate;return n===null?(n=Je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function co(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Uu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Mn:return gn(n.children,i,o,t);case su:s=8,i|=8;break;case Ds:return e=Je(12,n,t,i|2),e.elementType=Ds,e.lanes=o,e;case Fs:return e=Je(13,n,t,i),e.elementType=Fs,e.lanes=o,e;case Bs:return e=Je(19,n,t,i),e.elementType=Bs,e.lanes=o,e;case Jf:return jl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xf:s=10;break e;case Zf:s=9;break e;case au:s=11;break e;case uu:s=14;break e;case Nt:s=16,r=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=Je(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function gn(e,t,n,r){return e=Je(7,e,r,t),e.lanes=n,e}function jl(e,t,n,r){return e=Je(22,e,r,t),e.elementType=Jf,e.lanes=n,e.stateNode={isHidden:!1},e}function fs(e,t,n){return e=Je(6,e,null,t),e.lanes=n,e}function ps(e,t,n){return t=Je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function l2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vl(0),this.expirationTimes=Vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wu(e,t,n,r,i,o,s,a,u){return e=new l2(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Je(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_u(o),e}function s2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function W0(e){if(!e)return tn;e=e._reactInternals;e:{if(Pn(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if(Fe(n))return Wp(e,n,t)}return t}function H0(e,t,n,r,i,o,s,a,u){return e=Wu(n,r,!0,e,i,o,s,a,u),e.context=W0(null),n=e.current,r=Ie(),i=Yt(n),o=_t(r,i),o.callback=t??null,Kt(n,o,i),e.current.lanes=i,Si(e,i,r),Be(e,r),e}function bl(e,t,n,r){var i=t.current,o=Ie(),s=Yt(i);return n=W0(n),t.context===null?t.context=n:t.pendingContext=n,t=_t(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kt(i,t,s),e!==null&&(ct(e,i,s,o),io(e,i,s)),s}function Qo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hu(e,t){yd(e,t),(e=e.alternate)&&yd(e,t)}function a2(){return null}var G0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gu(e){this._internalRoot=e}kl.prototype.render=Gu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));bl(e,t,null,null)};kl.prototype.unmount=Gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jn(function(){bl(null,e,null,null)}),t[Ot]=null}};function kl(e){this._internalRoot=e}kl.prototype.unstable_scheduleHydration=function(e){if(e){var t=bp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ft.length&&t!==0&&t<Ft[n].priority;n++);Ft.splice(n,0,e),n===0&&Cp(e)}};function Vu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wd(){}function u2(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Qo(s);o.call(c)}}var s=H0(t,r,e,0,null,!1,!1,"",wd);return e._reactRootContainer=s,e[Ot]=s.current,li(e.nodeType===8?e.parentNode:e),jn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Qo(u);a.call(c)}}var u=Wu(e,0,!1,null,null,!1,!1,"",wd);return e._reactRootContainer=u,e[Ot]=u.current,li(e.nodeType===8?e.parentNode:e),jn(function(){bl(t,u,n,r)}),u}function El(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var u=Qo(s);a.call(u)}}bl(t,s,e,i)}else s=u2(n,t,e,i,r);return Qo(s)}Sp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fr(t.pendingLanes);n!==0&&(fu(t,n|1),Be(t,ue()),!(G&6)&&(ar=ue()+500,on()))}break;case 13:jn(function(){var r=Tt(e,1);if(r!==null){var i=Ie();ct(r,e,1,i)}}),Hu(e,1)}};pu=function(e){if(e.tag===13){var t=Tt(e,134217728);if(t!==null){var n=Ie();ct(t,e,134217728,n)}Hu(e,134217728)}};jp=function(e){if(e.tag===13){var t=Yt(e),n=Tt(e,t);if(n!==null){var r=Ie();ct(n,e,t,r)}Hu(e,t)}};bp=function(){return q};kp=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};Ys=function(e,t,n){switch(t){case"input":if(Us(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=gl(r);if(!i)throw Error(O(90));tp(r),Us(r,i)}}}break;case"textarea":rp(e,n);break;case"select":t=n.value,t!=null&&Vn(e,!!n.multiple,t,!1)}};cp=Bu;dp=jn;var c2={usingClientEntryPoint:!1,Events:[bi,Fn,gl,ap,up,Bu]},Mr={findFiberByHostInstance:dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},d2={bundleType:Mr.bundleType,version:Mr.version,rendererPackageName:Mr.rendererPackageName,rendererConfig:Mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hp(e),e===null?null:e.stateNode},findFiberByHostInstance:Mr.findFiberByHostInstance||a2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gi.isDisabled&&Gi.supportsFiber)try{fl=Gi.inject(d2),vt=Gi}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c2;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vu(t))throw Error(O(200));return s2(e,t,null,n)};Ke.createRoot=function(e,t){if(!Vu(e))throw Error(O(299));var n=!1,r="",i=G0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Wu(e,1,!1,null,null,n,!1,r,i),e[Ot]=t.current,li(e.nodeType===8?e.parentNode:e),new Gu(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=hp(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return jn(e)};Ke.hydrate=function(e,t,n){if(!Cl(t))throw Error(O(200));return El(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!Vu(e))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=G0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=H0(t,null,e,1,n??null,i,!1,o,s),e[Ot]=t.current,li(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new kl(t)};Ke.render=function(e,t,n){if(!Cl(t))throw Error(O(200));return El(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!Cl(e))throw Error(O(40));return e._reactRootContainer?(jn(function(){El(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1};Ke.unstable_batchedUpdates=Bu;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Cl(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return El(e,t,n,!1,r)};Ke.version="18.3.1-next-f1338f8080-20240426";function V0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(V0)}catch(e){console.error(e)}}V0(),Vf.exports=Ke;var f2=Vf.exports,Sd=f2;Ns.createRoot=Sd.createRoot,Ns.hydrateRoot=Sd.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mi(){return mi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mi.apply(this,arguments)}var Ut;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ut||(Ut={}));const jd="popstate";function p2(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Oa("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Uo(i)}return m2(t,n,null,e)}function pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function K0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function h2(){return Math.random().toString(36).substr(2,8)}function bd(e,t){return{usr:e.state,key:e.key,idx:t}}function Oa(e,t,n,r){return n===void 0&&(n=null),mi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?kr(t):t,{state:n,key:t&&t.key||r||h2()})}function Uo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function kr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function m2(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Ut.Pop,u=null,c=h();c==null&&(c=0,s.replaceState(mi({},s.state,{idx:c}),""));function h(){return(s.state||{idx:null}).idx}function f(){a=Ut.Pop;let j=h(),p=j==null?null:j-c;c=j,u&&u({action:a,location:v.location,delta:p})}function g(j,p){a=Ut.Push;let d=Oa(v.location,j,p);c=h()+1;let m=bd(d,c),S=v.createHref(d);try{s.pushState(m,"",S)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(S)}o&&u&&u({action:a,location:v.location,delta:1})}function x(j,p){a=Ut.Replace;let d=Oa(v.location,j,p);c=h();let m=bd(d,c),S=v.createHref(d);s.replaceState(m,"",S),o&&u&&u({action:a,location:v.location,delta:0})}function y(j){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof j=="string"?j:Uo(j);return d=d.replace(/ $/,"%20"),pe(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let v={get action(){return a},get location(){return e(i,s)},listen(j){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(jd,f),u=j,()=>{i.removeEventListener(jd,f),u=null}},createHref(j){return t(i,j)},createURL:y,encodeLocation(j){let p=y(j);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:x,go(j){return s.go(j)}};return v}var kd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(kd||(kd={}));function g2(e,t,n){return n===void 0&&(n="/"),v2(e,t,n,!1)}function v2(e,t,n,r){let i=typeof t=="string"?kr(t):t,o=Ku(i.pathname||"/",n);if(o==null)return null;let s=q0(e);x2(s);let a=null;for(let u=0;a==null&&u<s.length;++u){let c=O2(o);a=_2(s[u],c,r)}return a}function q0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};u.relativePath.startsWith("/")&&(pe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Zt([r,u.relativePath]),h=n.concat(u);o.children&&o.children.length>0&&(pe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),q0(o.children,t,h,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:C2(c,o.index),routesMeta:h})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let u of Y0(o.path))i(o,s,u)}),t}function Y0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Y0(r.join("/")),a=[];return a.push(...s.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...s),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function x2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:E2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const y2=/^:[\w-]+$/,w2=3,S2=2,j2=1,b2=10,k2=-2,Cd=e=>e==="*";function C2(e,t){let n=e.split("/"),r=n.length;return n.some(Cd)&&(r+=k2),t&&(r+=S2),n.filter(i=>!Cd(i)).reduce((i,o)=>i+(y2.test(o)?w2:o===""?j2:b2),r)}function E2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function _2(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,h=o==="/"?t:t.slice(o.length)||"/",f=Ed({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),g=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=Ed({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},h)),!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:Zt([o,f.pathname]),pathnameBase:L2(Zt([o,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(o=Zt([o,f.pathnameBase]))}return s}function Ed(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=P2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:g,isOptional:x}=h;if(g==="*"){let v=a[f]||"";s=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[f];return x&&!y?c[g]=void 0:c[g]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function P2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),K0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function O2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return K0(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ku(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function T2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?kr(e):e;return{pathname:n?n.startsWith("/")?n:I2(n,t):t,search:R2(r),hash:M2(i)}}function I2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function hs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function z2(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function X0(e,t){let n=z2(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Z0(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=kr(e):(i=mi({},e),pe(!i.pathname||!i.pathname.includes("?"),hs("?","pathname","search",i)),pe(!i.pathname||!i.pathname.includes("#"),hs("#","pathname","hash",i)),pe(!i.search||!i.search.includes("#"),hs("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}a=f>=0?t[f]:"/"}let u=T2(i,a),c=s&&s!=="/"&&s.endsWith("/"),h=(o||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Zt=e=>e.join("/").replace(/\/\/+/g,"/"),L2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),R2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,M2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function N2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const J0=["post","put","patch","delete"];new Set(J0);const A2=["get",...J0];new Set(A2);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gi(){return gi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gi.apply(this,arguments)}const qu=b.createContext(null),D2=b.createContext(null),On=b.createContext(null),_l=b.createContext(null),ln=b.createContext({outlet:null,matches:[],isDataRoute:!1}),eh=b.createContext(null);function F2(e,t){let{relative:n}=t===void 0?{}:t;Ci()||pe(!1);let{basename:r,navigator:i}=b.useContext(On),{hash:o,pathname:s,search:a}=rh(e,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:Zt([r,s])),i.createHref({pathname:u,search:a,hash:o})}function Ci(){return b.useContext(_l)!=null}function Ei(){return Ci()||pe(!1),b.useContext(_l).location}function th(e){b.useContext(On).static||b.useLayoutEffect(e)}function Ye(){let{isDataRoute:e}=b.useContext(ln);return e?Z2():B2()}function B2(){Ci()||pe(!1);let e=b.useContext(qu),{basename:t,future:n,navigator:r}=b.useContext(On),{matches:i}=b.useContext(ln),{pathname:o}=Ei(),s=JSON.stringify(X0(i,n.v7_relativeSplatPath)),a=b.useRef(!1);return th(()=>{a.current=!0}),b.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Z0(c,JSON.parse(s),o,h.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Zt([t,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[t,r,s,o,e])}function nh(){let{matches:e}=b.useContext(ln),t=e[e.length-1];return t?t.params:{}}function rh(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(On),{matches:i}=b.useContext(ln),{pathname:o}=Ei(),s=JSON.stringify(X0(i,r.v7_relativeSplatPath));return b.useMemo(()=>Z0(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function $2(e,t){return Q2(e,t)}function Q2(e,t,n,r){Ci()||pe(!1);let{navigator:i}=b.useContext(On),{matches:o}=b.useContext(ln),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=Ei(),h;if(t){var f;let j=typeof t=="string"?kr(t):t;u==="/"||(f=j.pathname)!=null&&f.startsWith(u)||pe(!1),h=j}else h=c;let g=h.pathname||"/",x=g;if(u!=="/"){let j=u.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(j.length).join("/")}let y=g2(e,{pathname:x}),v=V2(y&&y.map(j=>Object.assign({},j,{params:Object.assign({},a,j.params),pathname:Zt([u,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?u:Zt([u,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),o,n,r);return t&&v?b.createElement(_l.Provider,{value:{location:gi({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Ut.Pop}},v):v}function U2(){let e=X2(),t=N2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,null)}const W2=b.createElement(U2,null);class H2 extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(ln.Provider,{value:this.props.routeContext},b.createElement(eh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function G2(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(qu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(ln.Provider,{value:t},r)}function V2(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||pe(!1),s=s.slice(0,Math.min(s.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<s.length;h++){let f=s[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:g,errors:x}=n,y=f.route.loader&&g[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||y){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((h,f,g)=>{let x,y=!1,v=null,j=null;n&&(x=a&&f.route.id?a[f.route.id]:void 0,v=f.route.errorElement||W2,u&&(c<0&&g===0?(y=!0,j=null):c===g&&(y=!0,j=f.route.hydrateFallbackElement||null)));let p=t.concat(s.slice(0,g+1)),d=()=>{let m;return x?m=v:y?m=j:f.route.Component?m=b.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=h,b.createElement(G2,{match:f,routeContext:{outlet:h,matches:p,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?b.createElement(H2,{location:n.location,revalidation:n.revalidation,component:v,error:x,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var ih=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ih||{}),Wo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Wo||{});function K2(e){let t=b.useContext(qu);return t||pe(!1),t}function q2(e){let t=b.useContext(D2);return t||pe(!1),t}function Y2(e){let t=b.useContext(ln);return t||pe(!1),t}function oh(e){let t=Y2(),n=t.matches[t.matches.length-1];return n.route.id||pe(!1),n.route.id}function X2(){var e;let t=b.useContext(eh),n=q2(Wo.UseRouteError),r=oh(Wo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Z2(){let{router:e}=K2(ih.UseNavigateStable),t=oh(Wo.UseNavigateStable),n=b.useRef(!1);return th(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,gi({fromRouteId:t},o)))},[e,t])}const _d={};function J2(e,t){_d[t]||(_d[t]=!0,console.warn(t))}const Pd=(e,t,n)=>J2(e,"⚠️ React Router Future Flag Warning: "+t+". "+("You can use the `"+e+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function ev(e,t){e!=null&&e.v7_startTransition||Pd("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(e!=null&&e.v7_relativeSplatPath)&&!t&&Pd("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function ae(e){pe(!1)}function tv(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ut.Pop,navigator:o,static:s=!1,future:a}=e;Ci()&&pe(!1);let u=t.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:u,navigator:o,static:s,future:gi({v7_relativeSplatPath:!1},a)}),[u,a,o,s]);typeof r=="string"&&(r=kr(r));let{pathname:h="/",search:f="",hash:g="",state:x=null,key:y="default"}=r,v=b.useMemo(()=>{let j=Ku(h,u);return j==null?null:{location:{pathname:j,search:f,hash:g,state:x,key:y},navigationType:i}},[u,h,f,g,x,y,i]);return v==null?null:b.createElement(On.Provider,{value:c},b.createElement(_l.Provider,{children:n,value:v}))}function nv(e){let{children:t,location:n}=e;return $2(Ta(t),n)}new Promise(()=>{});function Ta(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,Ta(r.props.children,o));return}r.type!==ae&&pe(!1),!r.props.index||!r.props.children||pe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ta(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ia(){return Ia=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ia.apply(this,arguments)}function rv(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function iv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ov(e,t){return e.button===0&&(!t||t==="_self")&&!iv(e)}const lv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],sv="6";try{window.__reactRouterVersion=sv}catch{}const av="startTransition",Od=tg[av];function uv(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=p2({window:i,v5Compat:!0}));let s=o.current,[a,u]=b.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},h=b.useCallback(f=>{c&&Od?Od(()=>u(f)):u(f)},[u,c]);return b.useLayoutEffect(()=>s.listen(h),[s,h]),b.useEffect(()=>ev(r),[r]),b.createElement(tv,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const cv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fv=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:u,to:c,preventScrollReset:h,viewTransition:f}=t,g=rv(t,lv),{basename:x}=b.useContext(On),y,v=!1;if(typeof c=="string"&&dv.test(c)&&(y=c,cv))try{let m=new URL(window.location.href),S=c.startsWith("//")?new URL(m.protocol+c):new URL(c),k=Ku(S.pathname,x);S.origin===m.origin&&k!=null?c=k+S.search+S.hash:v=!0}catch{}let j=F2(c,{relative:i}),p=pv(c,{replace:s,state:a,target:u,preventScrollReset:h,relative:i,viewTransition:f});function d(m){r&&r(m),m.defaultPrevented||p(m)}return b.createElement("a",Ia({},g,{href:y||j,onClick:v||o?r:d,ref:n,target:u}))});var Td;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Td||(Td={}));var Id;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Id||(Id={}));function pv(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=t===void 0?{}:t,u=Ye(),c=Ei(),h=rh(e,{relative:s});return b.useCallback(f=>{if(ov(f,n)){f.preventDefault();let g=r!==void 0?r:Uo(c)===Uo(h);u(e,{replace:g,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[c,u,h,r,i,n,e,o,s,a])}const hv="/assets/image4-49UFiRL9.svg",mv="/assets/image2-D3-QMNJW.svg",gv="/assets/image3-Dw7jqlw9.svg",vv="data:image/svg+xml,%3csvg%20width='66'%20height='66'%20viewBox='0%200%2066%2066'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='33'%20cy='33'%20r='30.5'%20transform='rotate(-180%2033%2033)'%20stroke='white'%20stroke-width='5'/%3e%3cpath%20d='M39.375%2022.2219V42.7039C39.3749%2043.0664%2039.2404%2043.4208%2038.9886%2043.7222C38.7368%2044.0237%2038.3789%2044.2586%2037.9602%2044.3973C37.5416%2044.536%2037.0809%2044.5723%2036.6364%2044.5016C36.1919%2044.4309%2035.7836%2044.2564%2035.4631%2044.0001L22.6619%2033.7591C22.2323%2033.4153%2021.9909%2032.949%2021.9909%2032.4629C21.9909%2031.9768%2022.2323%2031.5105%2022.6619%2031.1667L35.4631%2020.9257C35.7836%2020.6694%2036.1919%2020.4949%2036.6364%2020.4242C37.0809%2020.3535%2037.5416%2020.3898%2037.9602%2020.5285C38.3789%2020.6672%2038.7368%2020.9021%2038.9886%2021.2036C39.2404%2021.505%2039.3749%2021.8594%2039.375%2022.2219Z'%20fill='white'/%3e%3c/svg%3e",xv="data:image/svg+xml,%3csvg%20width='66'%20height='66'%20viewBox='0%200%2066%2066'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='33'%20cy='33'%20r='30.5'%20stroke='white'%20stroke-width='5'/%3e%3cpath%20d='M26.625%2043.7781V23.2961C26.6251%2022.9336%2026.7596%2022.5792%2027.0114%2022.2778C27.2632%2021.9763%2027.6211%2021.7414%2028.0397%2021.6027C28.4584%2021.464%2028.9191%2021.4277%2029.3636%2021.4984C29.8081%2021.5691%2030.2164%2021.7436%2030.5369%2021.9999L43.3381%2032.2409C43.7677%2032.5847%2044.0091%2033.051%2044.0091%2033.5371C44.0091%2034.0232%2043.7677%2034.4895%2043.3381%2034.8333L30.5369%2045.0743C30.2164%2045.3306%2029.8081%2045.5051%2029.3636%2045.5758C28.9191%2045.6465%2028.4584%2045.6102%2028.0397%2045.4715C27.6211%2045.3328%2027.2632%2045.0979%2027.0114%2044.7964C26.7596%2044.495%2026.6251%2044.1406%2026.625%2043.7781Z'%20fill='white'/%3e%3c/svg%3e";var xe=function(){return xe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},xe.apply(this,arguments)};function ur(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Z="-ms-",Xr="-moz-",K="-webkit-",lh="comm",Pl="rule",Yu="decl",yv="@import",sh="@keyframes",wv="@layer",ah=Math.abs,Xu=String.fromCharCode,za=Object.assign;function Sv(e,t){return ve(e,0)^45?(((t<<2^ve(e,0))<<2^ve(e,1))<<2^ve(e,2))<<2^ve(e,3):0}function uh(e){return e.trim()}function St(e,t){return(e=t.exec(e))?e[0]:e}function $(e,t,n){return e.replace(t,n)}function fo(e,t,n){return e.indexOf(t,n)}function ve(e,t){return e.charCodeAt(t)|0}function cr(e,t,n){return e.slice(t,n)}function mt(e){return e.length}function ch(e){return e.length}function $r(e,t){return t.push(e),e}function jv(e,t){return e.map(t).join("")}function zd(e,t){return e.filter(function(n){return!St(n,t)})}var Ol=1,dr=1,dh=0,rt=0,ce=0,Cr="";function Tl(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ol,column:dr,length:s,return:"",siblings:a}}function Mt(e,t){return za(Tl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function In(e){for(;e.root;)e=Mt(e.root,{children:[e]});$r(e,e.siblings)}function bv(){return ce}function kv(){return ce=rt>0?ve(Cr,--rt):0,dr--,ce===10&&(dr=1,Ol--),ce}function dt(){return ce=rt<dh?ve(Cr,rt++):0,dr++,ce===10&&(dr=1,Ol++),ce}function vn(){return ve(Cr,rt)}function po(){return rt}function Il(e,t){return cr(Cr,e,t)}function La(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Cv(e){return Ol=dr=1,dh=mt(Cr=e),rt=0,[]}function Ev(e){return Cr="",e}function ms(e){return uh(Il(rt-1,Ra(e===91?e+2:e===40?e+1:e)))}function _v(e){for(;(ce=vn())&&ce<33;)dt();return La(e)>2||La(ce)>3?"":" "}function Pv(e,t){for(;--t&&dt()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return Il(e,po()+(t<6&&vn()==32&&dt()==32))}function Ra(e){for(;dt();)switch(ce){case e:return rt;case 34:case 39:e!==34&&e!==39&&Ra(ce);break;case 40:e===41&&Ra(e);break;case 92:dt();break}return rt}function Ov(e,t){for(;dt()&&e+ce!==57;)if(e+ce===84&&vn()===47)break;return"/*"+Il(t,rt-1)+"*"+Xu(e===47?e:dt())}function Tv(e){for(;!La(vn());)dt();return Il(e,rt)}function Iv(e){return Ev(ho("",null,null,null,[""],e=Cv(e),0,[0],e))}function ho(e,t,n,r,i,o,s,a,u){for(var c=0,h=0,f=s,g=0,x=0,y=0,v=1,j=1,p=1,d=0,m="",S=i,k=o,C=r,E=m;j;)switch(y=d,d=dt()){case 40:if(y!=108&&ve(E,f-1)==58){fo(E+=$(ms(d),"&","&\f"),"&\f",ah(c?a[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:E+=ms(d);break;case 9:case 10:case 13:case 32:E+=_v(y);break;case 92:E+=Pv(po()-1,7);continue;case 47:switch(vn()){case 42:case 47:$r(zv(Ov(dt(),po()),t,n,u),u);break;default:E+="/"}break;case 123*v:a[c++]=mt(E)*p;case 125*v:case 59:case 0:switch(d){case 0:case 125:j=0;case 59+h:p==-1&&(E=$(E,/\f/g,"")),x>0&&mt(E)-f&&$r(x>32?Rd(E+";",r,n,f-1,u):Rd($(E," ","")+";",r,n,f-2,u),u);break;case 59:E+=";";default:if($r(C=Ld(E,t,n,c,h,i,a,m,S=[],k=[],f,o),o),d===123)if(h===0)ho(E,t,C,C,S,o,f,a,k);else switch(g===99&&ve(E,3)===110?100:g){case 100:case 108:case 109:case 115:ho(e,C,C,r&&$r(Ld(e,C,C,0,0,i,a,m,i,S=[],f,k),k),i,k,f,a,r?S:k);break;default:ho(E,C,C,C,[""],k,0,a,k)}}c=h=x=0,v=p=1,m=E="",f=s;break;case 58:f=1+mt(E),x=y;default:if(v<1){if(d==123)--v;else if(d==125&&v++==0&&kv()==125)continue}switch(E+=Xu(d),d*v){case 38:p=h>0?1:(E+="\f",-1);break;case 44:a[c++]=(mt(E)-1)*p,p=1;break;case 64:vn()===45&&(E+=ms(dt())),g=vn(),h=f=mt(m=E+=Tv(po())),d++;break;case 45:y===45&&mt(E)==2&&(v=0)}}return o}function Ld(e,t,n,r,i,o,s,a,u,c,h,f){for(var g=i-1,x=i===0?o:[""],y=ch(x),v=0,j=0,p=0;v<r;++v)for(var d=0,m=cr(e,g+1,g=ah(j=s[v])),S=e;d<y;++d)(S=uh(j>0?x[d]+" "+m:$(m,/&\f/g,x[d])))&&(u[p++]=S);return Tl(e,t,n,i===0?Pl:a,u,c,h,f)}function zv(e,t,n,r){return Tl(e,t,n,lh,Xu(bv()),cr(e,2,-2),0,r)}function Rd(e,t,n,r,i){return Tl(e,t,n,Yu,cr(e,0,r),cr(e,r+1,-1),r,i)}function fh(e,t,n){switch(Sv(e,t)){case 5103:return K+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 4789:return Xr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+Xr+e+Z+e+e;case 5936:switch(ve(e,t+11)){case 114:return K+e+Z+$(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return K+e+Z+$(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return K+e+Z+$(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return K+e+Z+e+e;case 6165:return K+e+Z+"flex-"+e+e;case 5187:return K+e+$(e,/(\w+).+(:[^]+)/,K+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return K+e+Z+"flex-item-"+$(e,/flex-|-self/g,"")+(St(e,/flex-|baseline/)?"":Z+"grid-row-"+$(e,/flex-|-self/g,""))+e;case 4675:return K+e+Z+"flex-line-pack"+$(e,/align-content|flex-|-self/g,"")+e;case 5548:return K+e+Z+$(e,"shrink","negative")+e;case 5292:return K+e+Z+$(e,"basis","preferred-size")+e;case 6060:return K+"box-"+$(e,"-grow","")+K+e+Z+$(e,"grow","positive")+e;case 4554:return K+$(e,/([^-])(transform)/g,"$1"+K+"$2")+e;case 6187:return $($($(e,/(zoom-|grab)/,K+"$1"),/(image-set)/,K+"$1"),e,"")+e;case 5495:case 3959:return $(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return $($(e,/(.+:)(flex-)?(.*)/,K+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+K+e+e;case 4200:if(!St(e,/flex-|baseline/))return Z+"grid-column-align"+cr(e,t)+e;break;case 2592:case 3360:return Z+$(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,St(r.props,/grid-\w+-end/)})?~fo(e+(n=n[t].value),"span",0)?e:Z+$(e,"-start","")+e+Z+"grid-row-span:"+(~fo(n,"span",0)?St(n,/\d+/):+St(n,/\d+/)-+St(e,/\d+/))+";":Z+$(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return St(r.props,/grid-\w+-start/)})?e:Z+$($(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $(e,/(.+)-inline(.+)/,K+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(mt(e)-1-t>6)switch(ve(e,t+1)){case 109:if(ve(e,t+4)!==45)break;case 102:return $(e,/(.+:)(.+)-([^]+)/,"$1"+K+"$2-$3$1"+Xr+(ve(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~fo(e,"stretch",0)?fh($(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return $(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,u,c){return Z+i+":"+o+c+(s?Z+i+"-span:"+(a?u:+u-+o)+c:"")+e});case 4949:if(ve(e,t+6)===121)return $(e,":",":"+K)+e;break;case 6444:switch(ve(e,ve(e,14)===45?18:11)){case 120:return $(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+K+(ve(e,14)===45?"inline-":"")+"box$3$1"+K+"$2$3$1"+Z+"$2box$3")+e;case 100:return $(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $(e,"scroll-","scroll-snap-")+e}return e}function Ho(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Lv(e,t,n,r){switch(e.type){case wv:if(e.children.length)break;case yv:case Yu:return e.return=e.return||e.value;case lh:return"";case sh:return e.return=e.value+"{"+Ho(e.children,r)+"}";case Pl:if(!mt(e.value=e.props.join(",")))return""}return mt(n=Ho(e.children,r))?e.return=e.value+"{"+n+"}":""}function Rv(e){var t=ch(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function Mv(e){return function(t){t.root||(t=t.return)&&e(t)}}function Nv(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Yu:e.return=fh(e.value,e.length,n);return;case sh:return Ho([Mt(e,{value:$(e.value,"@","@"+K)})],r);case Pl:if(e.length)return jv(n=e.props,function(i){switch(St(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":In(Mt(e,{props:[$(i,/:(read-\w+)/,":"+Xr+"$1")]})),In(Mt(e,{props:[i]})),za(e,{props:zd(n,r)});break;case"::placeholder":In(Mt(e,{props:[$(i,/:(plac\w+)/,":"+K+"input-$1")]})),In(Mt(e,{props:[$(i,/:(plac\w+)/,":"+Xr+"$1")]})),In(Mt(e,{props:[$(i,/:(plac\w+)/,Z+"input-$1")]})),In(Mt(e,{props:[i]})),za(e,{props:zd(n,r)});break}return""})}}var Av={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ue={},fr=typeof process<"u"&&Ue!==void 0&&(Ue.REACT_APP_SC_ATTR||Ue.SC_ATTR)||"data-styled",ph="active",hh="data-styled-version",zl="6.1.13",Zu=`/*!sc*/
`,Go=typeof window<"u"&&"HTMLElement"in window,Dv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==""?Ue.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ue.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.SC_DISABLE_SPEEDY!==void 0&&Ue.SC_DISABLE_SPEEDY!==""&&Ue.SC_DISABLE_SPEEDY!=="false"&&Ue.SC_DISABLE_SPEEDY),Fv={},Ll=Object.freeze([]),pr=Object.freeze({});function mh(e,t,n){return n===void 0&&(n=pr),e.theme!==n.theme&&e.theme||t||n.theme}var gh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Bv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$v=/(^-|-$)/g;function Md(e){return e.replace(Bv,"-").replace($v,"")}var Qv=/(a)(d)/gi,Vi=52,Nd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ma(e){var t,n="";for(t=Math.abs(e);t>Vi;t=t/Vi|0)n=Nd(t%Vi)+n;return(Nd(t%Vi)+n).replace(Qv,"$1-$2")}var gs,vh=5381,Gn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},xh=function(e){return Gn(vh,e)};function Ju(e){return Ma(xh(e)>>>0)}function Uv(e){return e.displayName||e.name||"Component"}function vs(e){return typeof e=="string"&&!0}var yh=typeof Symbol=="function"&&Symbol.for,wh=yh?Symbol.for("react.memo"):60115,Wv=yh?Symbol.for("react.forward_ref"):60112,Hv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Gv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Sh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vv=((gs={})[Wv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gs[wh]=Sh,gs);function Ad(e){return("type"in(t=e)&&t.type.$$typeof)===wh?Sh:"$$typeof"in e?Vv[e.$$typeof]:Hv;var t}var Kv=Object.defineProperty,qv=Object.getOwnPropertyNames,Dd=Object.getOwnPropertySymbols,Yv=Object.getOwnPropertyDescriptor,Xv=Object.getPrototypeOf,Fd=Object.prototype;function jh(e,t,n){if(typeof t!="string"){if(Fd){var r=Xv(t);r&&r!==Fd&&jh(e,r,n)}var i=qv(t);Dd&&(i=i.concat(Dd(t)));for(var o=Ad(e),s=Ad(t),a=0;a<i.length;++a){var u=i[a];if(!(u in Gv||n&&n[u]||s&&u in s||o&&u in o)){var c=Yv(t,u);try{Kv(e,u,c)}catch{}}}}return e}function bn(e){return typeof e=="function"}function ec(e){return typeof e=="object"&&"styledComponentId"in e}function hn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Vo(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function vi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Na(e,t,n){if(n===void 0&&(n=!1),!n&&!vi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Na(e[r],t[r]);else if(vi(t))for(var r in t)e[r]=Na(e[r],t[r]);return e}function tc(e,t){Object.defineProperty(e,"toString",{value:t})}function kn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Zv=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw kn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),u=(s=0,n.length);s<u;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Zu);return n},e}(),mo=new Map,Ko=new Map,go=1,Ki=function(e){if(mo.has(e))return mo.get(e);for(;Ko.has(go);)go++;var t=go++;return mo.set(e,t),Ko.set(t,e),t},Jv=function(e,t){go=t+1,mo.set(e,t),Ko.set(t,e)},ex="style[".concat(fr,"][").concat(hh,'="').concat(zl,'"]'),tx=new RegExp("^".concat(fr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),nx=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},rx=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Zu),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var u=a.match(tx);if(u){var c=0|parseInt(u[1],10),h=u[2];c!==0&&(Jv(h,c),nx(e,h,u[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},Bd=function(e){for(var t=document.querySelectorAll(ex),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(fr)!==ph&&(rx(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function ix(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var bh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(fr,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(fr,ph),r.setAttribute(hh,zl);var s=ix();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},ox=function(){function e(t){this.element=bh(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw kn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),lx=function(){function e(t){this.element=bh(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),sx=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),$d=Go,ax={isServer:!Go,useCSSOMInjection:!Dv},qo=function(){function e(t,n,r){t===void 0&&(t=pr),n===void 0&&(n={});var i=this;this.options=xe(xe({},ax),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Go&&$d&&($d=!1,Bd(this)),tc(this,function(){return function(o){for(var s=o.getTag(),a=s.length,u="",c=function(f){var g=function(p){return Ko.get(p)}(f);if(g===void 0)return"continue";var x=o.names.get(g),y=s.getGroup(f);if(x===void 0||!x.size||y.length===0)return"continue";var v="".concat(fr,".g").concat(f,'[id="').concat(g,'"]'),j="";x!==void 0&&x.forEach(function(p){p.length>0&&(j+="".concat(p,","))}),u+="".concat(y).concat(v,'{content:"').concat(j,'"}').concat(Zu)},h=0;h<a;h++)c(h);return u}(i)})}return e.registerId=function(t){return Ki(t)},e.prototype.rehydrate=function(){!this.server&&Go&&Bd(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(xe(xe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new sx(i):r?new ox(i):new lx(i)}(this.options),new Zv(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ki(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ki(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ki(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ux=/&/g,cx=/^\s*\/\/.*$/gm;function kh(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=kh(n.children,t)),n})}function dx(e){var t,n,r,i=pr,o=i.options,s=o===void 0?pr:o,a=i.plugins,u=a===void 0?Ll:a,c=function(g,x,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):g},h=u.slice();h.push(function(g){g.type===Pl&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(ux,n).replace(r,c))}),s.prefix&&h.push(Nv),h.push(Lv);var f=function(g,x,y,v){x===void 0&&(x=""),y===void 0&&(y=""),v===void 0&&(v="&"),t=v,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var j=g.replace(cx,""),p=Iv(y||x?"".concat(y," ").concat(x," { ").concat(j," }"):j);s.namespace&&(p=kh(p,s.namespace));var d=[];return Ho(p,Rv(h.concat(Mv(function(m){return d.push(m)})))),d};return f.hash=u.length?u.reduce(function(g,x){return x.name||kn(15),Gn(g,x.name)},vh).toString():"",f}var fx=new qo,Aa=dx(),Ch=fe.createContext({shouldForwardProp:void 0,styleSheet:fx,stylis:Aa});Ch.Consumer;fe.createContext(void 0);function Da(){return b.useContext(Ch)}var Eh=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Aa);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,tc(this,function(){throw kn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Aa),this.name+t.hash},e}(),px=function(e){return e>="A"&&e<="Z"};function Qd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;px(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var _h=function(e){return e==null||e===!1||e===""},Ph=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!_h(o)&&(Array.isArray(o)&&o.isCss||bn(o)?r.push("".concat(Qd(i),":"),o,";"):vi(o)?r.push.apply(r,ur(ur(["".concat(i," {")],Ph(o),!1),["}"],!1)):r.push("".concat(Qd(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Av||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Jt(e,t,n,r){if(_h(e))return[];if(ec(e))return[".".concat(e.styledComponentId)];if(bn(e)){if(!bn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Jt(i,t,n,r)}var o;return e instanceof Eh?n?(e.inject(n,r),[e.getName(r)]):[e]:vi(e)?Ph(e):Array.isArray(e)?Array.prototype.concat.apply(Ll,e.map(function(s){return Jt(s,t,n,r)})):[e.toString()]}function Oh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(bn(n)&&!ec(n))return!1}return!0}var hx=xh(zl),mx=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Oh(t),this.componentId=n,this.baseHash=Gn(hx,n),this.baseStyle=r,qo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=hn(i,this.staticRulesId);else{var o=Vo(Jt(this.rules,t,n,r)),s=Ma(Gn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=hn(i,s),this.staticRulesId=s}else{for(var u=Gn(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var f=this.rules[h];if(typeof f=="string")c+=f;else if(f){var g=Vo(Jt(f,t,n,r));u=Gn(u,g+h),c+=g}}if(c){var x=Ma(u>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(c,".".concat(x),void 0,this.componentId)),i=hn(i,x)}}return i},e}(),xi=fe.createContext(void 0);xi.Consumer;function gx(e){var t=fe.useContext(xi),n=b.useMemo(function(){return function(r,i){if(!r)throw kn(14);if(bn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw kn(8);return i?xe(xe({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?fe.createElement(xi.Provider,{value:n},e.children):null}var xs={};function vx(e,t,n){var r=ec(e),i=e,o=!vs(e),s=t.attrs,a=s===void 0?Ll:s,u=t.componentId,c=u===void 0?function(S,k){var C=typeof S!="string"?"sc":Md(S);xs[C]=(xs[C]||0)+1;var E="".concat(C,"-").concat(Ju(zl+C+xs[C]));return k?"".concat(k,"-").concat(E):E}(t.displayName,t.parentComponentId):u,h=t.displayName,f=h===void 0?function(S){return vs(S)?"styled.".concat(S):"Styled(".concat(Uv(S),")")}(e):h,g=t.displayName&&t.componentId?"".concat(Md(t.displayName),"-").concat(t.componentId):t.componentId||c,x=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var j=t.shouldForwardProp;y=function(S,k){return v(S,k)&&j(S,k)}}else y=v}var p=new mx(n,g,r?i.componentStyle:void 0);function d(S,k){return function(C,E,T){var P=C.attrs,_=C.componentStyle,N=C.defaultProps,M=C.foldedComponentIds,A=C.styledComponentId,F=C.target,it=fe.useContext(xi),le=Da(),we=C.shouldForwardProp||le.shouldForwardProp,z=mh(E,it,N)||pr,R=function(Re,Qe,yt){for(var _r,sn=xe(xe({},Qe),{className:void 0,theme:yt}),$l=0;$l<Re.length;$l+=1){var Pi=bn(_r=Re[$l])?_r(sn):_r;for(var Lt in Pi)sn[Lt]=Lt==="className"?hn(sn[Lt],Pi[Lt]):Lt==="style"?xe(xe({},sn[Lt]),Pi[Lt]):Pi[Lt]}return Qe.className&&(sn.className=hn(sn.className,Qe.className)),sn}(P,E,z),B=R.as||F,H={};for(var V in R)R[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&R.theme===z||(V==="forwardedAs"?H.as=R.forwardedAs:we&&!we(V,B)||(H[V]=R[V]));var Pe=function(Re,Qe){var yt=Da(),_r=Re.generateAndInjectStyles(Qe,yt.styleSheet,yt.stylis);return _r}(_,R),$e=hn(M,A);return Pe&&($e+=" "+Pe),R.className&&($e+=" "+R.className),H[vs(B)&&!gh.has(B)?"class":"className"]=$e,H.ref=T,b.createElement(B,H)}(m,S,k)}d.displayName=f;var m=fe.forwardRef(d);return m.attrs=x,m.componentStyle=p,m.displayName=f,m.shouldForwardProp=y,m.foldedComponentIds=r?hn(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=g,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(k){for(var C=[],E=1;E<arguments.length;E++)C[E-1]=arguments[E];for(var T=0,P=C;T<P.length;T++)Na(k,P[T],!0);return k}({},i.defaultProps,S):S}}),tc(m,function(){return".".concat(m.styledComponentId)}),o&&jh(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Ud(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Wd=function(e){return Object.assign(e,{isCss:!0})};function Cn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(bn(e)||vi(e))return Wd(Jt(Ud(Ll,ur([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Jt(r):Wd(Jt(Ud(r,t)))}function Fa(e,t,n){if(n===void 0&&(n=pr),!t)throw kn(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Cn.apply(void 0,ur([i],o,!1)))};return r.attrs=function(i){return Fa(e,t,xe(xe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Fa(e,t,xe(xe({},n),i))},r}var Th=function(e){return Fa(vx,e)},w=Th;gh.forEach(function(e){w[e]=Th(e)});var xx=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Oh(t),qo.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Vo(Jt(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&qo.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function yx(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Cn.apply(void 0,ur([e],t,!1)),i="sc-global-".concat(Ju(JSON.stringify(r))),o=new xx(r,i),s=function(u){var c=Da(),h=fe.useContext(xi),f=fe.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(f,u,c.styleSheet,h,c.stylis),fe.useLayoutEffect(function(){if(!c.styleSheet.server)return a(f,u,c.styleSheet,h,c.stylis),function(){return o.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,h,c.stylis]),null};function a(u,c,h,f,g){if(o.isStatic)o.renderStyles(u,Fv,h,g);else{var x=xe(xe({},c),{theme:mh(c,f,s.defaultProps)});o.renderStyles(u,x,h,g)}}return fe.memo(s)}function Er(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Vo(Cn.apply(void 0,ur([e],t,!1))),i=Ju(r);return new Eh(i,r)}const wx=w.div`
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
`,Sx=w.div`
  display: flex;
  width: ${e=>e.count*100}%;  
  transform: translateX(-${e=>e.currentIndex*100}%); 
  transition: transform 0.5s ease-in-out;
`,jx=w.img`
  flex-shrink: 0;  
  width: 100%;  
  height: 90vh;
  object-fit: cover;
`,bx=w.div`
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
`,zn=w.div`
  font-size: 1.5rem;
  white-space: nowrap;
  font-weight: bold;
  color: #000;
`,Ln=w.div`
  text-align: center;
  display: ${e=>e.isVisible?"block":"none"}; 
  animation: ${e=>e.isVisible?Hd:"none"} 0.4s ease-in-out;
  font-size: 1.1rem;
  color: #222;

  @media (max-width: 500px) {
    display: ${e=>e.isVisible?"block":"none"};
    animation: ${e=>e.isVisible?Hd:"none"} 0.4s ease-in-out;
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
`,Nr=w.div`
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

  &:hover ${zn} {
    margin: 2%;
  }

  &:hover ${Ln} {
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
`,Hd=Er`
  from { opacity: 0; }
  to { opacity: 1; }
`,kt="/assets/Genie1-_KHwDxeg.svg",hr="/assets/Genie2-BwCRixq0.svg",kx=Er`
  from {
    transform: translateY(0);
    opacity: 1;  
  }
  to {
    transform: translateY(-100px);
    opacity: 0;
  }
`;w.img`
  position: fixed;
  top: 23%;
  max-width: 30%;
  left: 36%;
  z-index: 10000;
  transition: opacity 0.5s ease-out;
  animation: ${e=>e.isDisappearing?Cn`${kx} 0.5s forwards`:"none"};
`;const Cx=()=>{const[e,t]=b.useState(null),[n,r]=b.useState(0),[i,o]=b.useState(!1),s=[hv,mv,gv],[a,u]=b.useState(!0),[c,h]=b.useState(!1),[f,g]=b.useState(kt),[x,y]=b.useState(!1),[v,j]=b.useState(!1),[p,d]=b.useState(null),m=Ye(),S=P=>{t(P)},k=(P,_)=>{p===P?m(_):d(P)};b.useEffect(()=>{if(p!==null){const P=setTimeout(()=>{d(null)},4e3);return()=>clearTimeout(P)}},[p]);const C=()=>{t(null)};b.useEffect(()=>{const P=setTimeout(()=>{h(!0)},1e3),_=setInterval(()=>{g(M=>M===kt?hr:kt)},600),N=setTimeout(()=>{j(!0),setTimeout(()=>{u(!1)},1e3),clearInterval(_)},3e3);return()=>{clearTimeout(P),clearTimeout(N),clearInterval(_)}},[]);const E=()=>{const _=n===0?s.length-1:n-1;r(_)},T=()=>{const _=n===s.length-1?0:n+1;r(_)};return b.useEffect(()=>{if(window.innerWidth<=500){const P=setInterval(()=>{T()},3e3);return()=>{clearInterval(P)}}},[n]),l.jsx(l.Fragment,{children:l.jsxs(wx,{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[l.jsx("img",{src:vv,alt:"Previous",onClick:E,onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),style:{cursor:"pointer",position:"absolute",top:"50%",left:"2.5vw",zIndex:1e3,transform:`translateY(-50%) scale(${x?1.1:1})`,opacity:i?.4:0,transition:"opacity 1s ease-in-out, transform 0.3s ease-in-out",transitionDelay:i?"0.1s":"0s",display:window.innerWidth<=500?"none":"block"}}),l.jsx("img",{src:xv,alt:"Next",onClick:T,onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),style:{cursor:"pointer",position:"absolute",top:"50%",right:"2.5vw",zIndex:1e3,transform:`translateY(-50%) scale(${x?1.1:1})`,opacity:i?.4:0,transition:"opacity 1s ease-in-out, transform 0.3s ease-in-out",transitionDelay:i?"0.1s":"0s",display:window.innerWidth<=500?"none":"block"}}),l.jsx(Sx,{currentIndex:n,count:s.length,children:s.map((P,_)=>l.jsx(jx,{src:P,alt:`Slide ${_}`,style:{borderBottomLeftRadius:"20vw"}},_))}),l.jsxs(bx,{children:[l.jsx("div",{style:{width:"100%"},children:l.jsxs(Nr,{onClick:()=>k(0,"/concept"),style:{backgroundColor:"#F1F5F9"},isHovered:e===0||p===0,onMouseEnter:()=>S(0),onMouseLeave:C,isClicked:p===0,children:[l.jsx(zn,{children:"양자 개념"}),l.jsxs(Ln,{onClick:P=>m("/concept"),isVisible:e===0,children:["양자란 무엇일까요? 쉽게 알아봅시다!!",l.jsx("p",{})]})]})}),l.jsx("div",{style:{width:"100%"},children:l.jsxs(Nr,{onClick:()=>k(1,"/description"),style:{backgroundColor:"#D0E7FE"},isHovered:e===1||p===1,onMouseEnter:()=>S(1),onMouseLeave:C,isClicked:p===1,children:[l.jsx(zn,{children:"활용 분야"}),l.jsxs(Ln,{onClick:P=>m("/description"),isVisible:e===1,children:["양자 컴퓨터, 양자 암호 통신 등 양자 기술이 활용되고 있는 분야에 대해 알아봅시다.",l.jsx("p",{})]})]})}),l.jsx("div",{style:{width:"100%"},children:l.jsxs(Nr,{onClick:()=>k(2,"/"),style:{backgroundColor:"#A5D2FF"},isHovered:e===2||p===2,onMouseEnter:()=>S(2),onMouseLeave:C,isClicked:p===2,children:[l.jsx(zn,{children:"최근 동향"}),l.jsxs(Ln,{onClick:P=>m("/recent"),isVisible:e===2,children:["양자 기술의 최근 동향에 대해 알아봅시다.",l.jsx("p",{})]})]})}),l.jsx("div",{style:{width:"100%"},children:l.jsxs(Nr,{onClick:()=>k(3,"/"),style:{backgroundColor:"#7EAFE0"},isHovered:e===3||p===3,onMouseEnter:()=>S(3),onMouseLeave:C,isClicked:p===3,children:[l.jsx(zn,{children:"주요 기업"}),l.jsxs(Ln,{onClick:P=>m("/company"),isVisible:e===3,children:["양자 기술의 발전을 이끌고 있는 국내, 해외 주요 기업들을 모아봤어요.",l.jsx("p",{})]})]})}),l.jsx("div",{style:{width:"100%"},children:l.jsxs(Nr,{onClick:()=>k(4,"/quiz"),style:{backgroundColor:"#E2E0FF"},isHovered:e===4||p===4,onMouseEnter:()=>S(4),onMouseLeave:C,isClicked:p===4,children:[l.jsx(zn,{children:"양자 퀴즈"}),l.jsxs(Ln,{onClick:P=>m("/quizmain"),isVisible:e===4,children:["간단한 양자 개념을 확인하는 Quiz Quiz!!",l.jsx("p",{})]})]})})]})]})})};function Ex(){return l.jsx(l.Fragment,{children:l.jsx(Cx,{})})}var Ih={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Gd=fe.createContext&&fe.createContext(Ih),_x=["attr","size","title"];function Px(e,t){if(e==null)return{};var n=Ox(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ox(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Yo(){return Yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yo.apply(this,arguments)}function Vd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Xo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vd(Object(n),!0).forEach(function(r){Tx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Tx(e,t,n){return t=Ix(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ix(e){var t=zx(e,"string");return typeof t=="symbol"?t:t+""}function zx(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function zh(e){return e&&e.map((t,n)=>fe.createElement(t.tag,Xo({key:n},t.attr),zh(t.child)))}function nc(e){return t=>fe.createElement(Lx,Yo({attr:Xo({},e.attr)},t),zh(e.child))}function Lx(e){var t=n=>{var{attr:r,size:i,title:o}=e,s=Px(e,_x),a=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),fe.createElement("svg",Yo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:u,style:Xo(Xo({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&fe.createElement("title",null,o),e.children)};return Gd!==void 0?fe.createElement(Gd.Consumer,null,n=>t(n)):t(Ih)}function Rx(e){return nc({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function Mx(e){return nc({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function Zo(e){return nc({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}const Nx=w.div`
  font-size: 3.8rem;
  font-weight: bold;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`,Ax=w.img`
  max-width: 40%;
  width: 40%;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`,Dx=w.div`
  font-size: 3rem;
  cursor: pointer;
`;w(Dx)`
  font-size: 3rem;
  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`;const an=w.div`
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
`,Fx=w.nav`
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
`,Bx=w.div`
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
    width: 25%;
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
`,Kd=w.div`
  font-size: 3.4rem;
  cursor: pointer;
  @media (max-width: 700px) {
    padding-right: -10px;
    font-size: 2.5rem;
  }
`,$x="/assets/Genie-Bb0VnGpq.svg",Lh="data:image/svg+xml,%3csvg%20width='95'%20height='95'%20viewBox='0%200%2095%2095'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='47.4595'%20y='0.438599'%20width='31.3747'%20height='31.3747'%20rx='3.92184'%20transform='rotate(45%2047.4595%200.438599)'%20fill='%238E8D94'/%3e%3crect%20x='72.417'%20y='25.3972'%20width='31.3747'%20height='66.6713'%20rx='3.92184'%20transform='rotate(45%2072.417%2025.3972)'%20fill='%23BBBBBB'/%3e%3crect%20x='22.502'%20y='25.3972'%20width='31.3747'%20height='31.3747'%20rx='3.92184'%20transform='rotate(45%2022.502%2025.3972)'%20fill='%23D9D9D9'/%3e%3c/svg%3e";function Qx(){const[e,t]=b.useState(!1),[n,r]=b.useState(!1),i=Ye();b.useEffect(()=>{const s=()=>{window.scrollY>0?t(!0):t(!1)};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]);const o=()=>{r(!n)};return l.jsxs(l.Fragment,{children:[l.jsxs(Fx,{isScrolled:e,style:{paddingLeft:"5%",paddingRight:"3%"},children:[l.jsxs("div",{onClick:()=>i("/"),style:{cursor:"pointer",maxWidth:"100%",marginRight:"0px",display:"flex",flexDirection:"row",gap:"10%",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Ax,{src:$x,alt:"Logo"}),l.jsx(Nx,{children:"Jenie"})]}),l.jsx("div",{style:{display:"flex",flexDirection:"row",gap:"25px",alignItems:"center",justifyContent:"flex-end"},children:l.jsx(Kd,{onClick:o,children:n?l.jsx(Zo,{}):l.jsx(Rx,{})})})]}),n&&l.jsxs(Bx,{children:[l.jsxs("div",{style:{marginBottom:"4%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",fontSize:"1.7rem",gap:"5%"},children:[l.jsx("img",{src:Lh}),l.jsx("h1",{children:"Menu List"})]}),l.jsx(Kd,{onClick:o,style:{fontSize:"3rem",marginTop:"0.5vw"},children:l.jsx(Zo,{})})]}),l.jsx(an,{onClick:()=>{i("/concept"),r(!1)},children:"양자 개념"}),l.jsx(an,{onClick:()=>{i("/description"),r(!1)},children:"양자 활용"}),l.jsx(an,{onClick:()=>{i("/recent"),r(!1)},children:"최근 동향"}),l.jsx(an,{onClick:()=>{i("/company"),r(!1)},children:"주요 기업"}),l.jsx(an,{onClick:()=>{i("/about"),r(!1)},children:"양자 인턴십 소개"}),l.jsx(an,{onClick:()=>{i("/quizmain"),r(!1)},children:"양자 퀴즈"}),l.jsx(an,{onClick:()=>{i("/character"),r(!1)},children:"캐릭터 소개"})]})]})}const Ux=w.footer`
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
`,Wx=w.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 85%;
  margin-left: 7.5%;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`,Hx=w.div`
  display: flex;
  flex-direction: column;
`,Gx=w.div`
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
`,Vx=w.img`
  max-width: 150px;
  margin-bottom: 5.5%;
  cursor: pointer;
  @media (max-width: 960px) {
    margin-bottom: 3.5%;
  }
`,Kx=w.div`
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
`,qx=w.div`
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
`,Yx=w.div`
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
    
`,qd=w.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  span {
    font-size: 1.1rem;
    margin-left: 10px;
    margin-right: 20px;
  }
`,Yd=w.div`
  background-color: #000;
  border-radius: 100%;
  align-items: center;
  text-align: center;
  p{
    font-size: 2rem;
    text-align: center;
  }
`,Xd=w.div`
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
`,Xx=w.div`
  text-align: center;
  margin-top: 2%;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 3%;

  p {
    font-size: 1rem;
    opacity: 0.8;
  }
`,Zd=w.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5%;
  @media (max-width: 960px) {
      display: none;
  }
`,Jd="data:image/svg+xml,%3csvg%20width='43'%20height='43'%20viewBox='0%200%2043%2043'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cellipse%20cx='21'%20cy='22.5'%20rx='18'%20ry='19.5'%20fill='white'/%3e%3cg%20clip-path='url(%23clip0_0_1)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21.1676%201.05875C16.172%201.06134%2011.3402%202.83067%207.53623%206.05038C3.73223%209.27008%201.20408%2013.7302%200.403813%2018.6332C-0.396452%2023.5362%200.583349%2028.5624%203.16804%2032.813C5.75273%2037.0637%209.77375%2040.2616%2014.5121%2041.8349C15.5575%2042.0289%2015.9512%2041.381%2015.9512%2040.8301C15.9512%2040.2792%2015.9303%2038.682%2015.9233%2036.9358C10.0693%2038.2004%208.83233%2034.4655%208.83233%2034.4655C7.87757%2032.0402%206.49769%2031.4027%206.49769%2031.4027C4.58817%2030.1069%206.64057%2030.1311%206.64057%2030.1311C8.75568%2030.2801%209.86725%2032.2896%209.86725%2032.2896C11.7419%2035.4875%2014.7909%2034.5625%2015.9895%2034.022C16.1777%2032.6673%2016.7248%2031.7457%2017.3276%2031.2225C12.6514%2030.6959%207.73819%2028.9011%207.73819%2020.8838C7.7092%2018.8045%208.48519%2016.7938%209.90557%2015.2675C9.68953%2014.7409%208.96822%2012.6135%2010.1111%209.72398C10.1111%209.72398%2011.8778%209.1627%2015.899%2011.8686C19.348%2010.9308%2022.9871%2010.9308%2026.4362%2011.8686C30.4538%209.1627%2032.217%209.72398%2032.217%209.72398C33.3634%2012.6066%2032.6421%2014.7339%2032.4261%2015.2675C33.8509%2016.794%2034.6286%2018.8083%2034.5969%2020.8907C34.5969%2028.9254%2029.6733%2030.6959%2024.9901%2031.2121C25.7427%2031.8635%2026.4153%2033.135%2026.4153%2035.0891C26.4153%2037.8886%2026.3909%2040.1406%2026.3909%2040.8301C26.3909%2041.3879%2026.7707%2042.0393%2027.8369%2041.8349C32.5759%2040.2614%2036.5973%2037.0629%2039.1819%2032.8116C41.7666%2028.5602%2042.7458%2023.5333%2041.9447%2018.6298C41.1435%2013.7263%2038.6141%209.26616%2034.8088%206.04701C31.0036%202.82787%2026.1707%201.0597%2021.1745%201.05875H21.1676Z'%20fill='%23191717'/%3e%3cpath%20d='M8.09314%2031.1012C8.04784%2031.2052%207.88058%2031.2363%207.74469%2031.1636C7.60879%2031.0908%207.50775%2030.9557%207.55653%2030.8483C7.60531%2030.7409%207.76909%2030.7132%207.90498%2030.7859C8.04088%2030.8587%208.14541%2030.9973%208.09314%2031.1012Z'%20fill='%23191717'/%3e%3cpath%20d='M8.9469%2032.0471C8.87474%2032.0832%208.79218%2032.0933%208.71336%2032.0756C8.63454%2032.0579%208.56436%2032.0135%208.51482%2031.9501C8.37892%2031.8045%208.35103%2031.6036%208.45557%2031.5135C8.5601%2031.4234%208.74828%2031.465%208.88418%2031.6105C9.02008%2031.756%209.05143%2031.957%208.9469%2032.0471Z'%20fill='%23191717'/%3e%3cpath%20d='M9.77616%2033.2493C9.64723%2033.3394%209.42769%2033.2493%209.30573%2033.0691C9.27201%2033.0368%209.24519%2032.9981%209.22687%2032.9552C9.20855%2032.9124%209.1991%2032.8663%209.1991%2032.8197C9.1991%2032.7731%209.20855%2032.727%209.22687%2032.6842C9.24519%2032.6413%209.27201%2032.6026%209.30573%2032.5702C9.43466%2032.4836%209.6542%2032.5702%209.77616%2032.7469C9.89812%2032.9236%209.9016%2033.1592%209.77616%2033.2493V33.2493Z'%20fill='%23191717'/%3e%3cpath%20d='M10.9017%2034.4135C10.7867%2034.5417%2010.5533%2034.507%2010.3616%2034.3338C10.17%2034.1606%2010.1247%2033.925%2010.2396%2033.8002C10.3546%2033.6755%2010.5881%2033.7101%2010.7867%2033.8799C10.9853%2034.0497%2011.0237%2034.2887%2010.9017%2034.4135V34.4135Z'%20fill='%23191717'/%3e%3cpath%20d='M12.4801%2035.0925C12.4279%2035.2554%2012.1909%2035.3281%2011.954%2035.2588C11.717%2035.1895%2011.5602%2034.9955%2011.6055%2034.8292C11.6508%2034.6629%2011.8912%2034.5867%2012.1317%2034.6629C12.3721%2034.7391%2012.5254%2034.9228%2012.4801%2035.0925Z'%20fill='%23191717'/%3e%3cpath%20d='M14.2017%2035.2103C14.2017%2035.3801%2014.0066%2035.5256%2013.7557%2035.5291C13.5048%2035.5326%2013.2992%2035.394%2013.2992%2035.2242C13.2992%2035.0544%2013.4943%2034.9089%2013.7452%2034.9054C13.9961%2034.902%2014.2017%2035.0371%2014.2017%2035.2103Z'%20fill='%23191717'/%3e%3cpath%20d='M15.8043%2034.9436C15.8357%2035.1134%2015.6615%2035.2901%2015.4106%2035.3316C15.1597%2035.3732%2014.9402%2035.2727%2014.9088%2035.1064C14.8774%2034.9401%2015.0586%2034.76%2015.3026%2034.7149C15.5465%2034.6699%2015.773%2034.7738%2015.8043%2034.9436Z'%20fill='%23191717'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_0_1'%3e%3crect%20width='42.35'%20height='42.35'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",ef="data:image/svg+xml,%3csvg%20width='43'%20height='43'%20viewBox='0%200%2043%2043'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='21.175'%20cy='21.175'%20r='21.175'%20fill='white'/%3e%3cpath%20d='M9.77273%2030.7548H13.9091V20.7093L8%2016.2775V28.982C8%2029.9615%208.7933%2030.7548%209.77273%2030.7548Z'%20fill='%234285F4'/%3e%3cpath%20d='M28.0909%2030.7548H32.2272C33.2067%2030.7548%2034%2029.9615%2034%2028.982V16.2775L28.0909%2020.7093V30.7548Z'%20fill='%2334A853'/%3e%3cpath%20d='M28.0909%2013.0275V20.7093L34%2016.2775V13.9139C34%2011.7231%2031.4989%2010.4718%2029.7454%2011.7866L28.0909%2013.0275Z'%20fill='%23FBBC04'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.9091%2020.7093V13.0275L21%2018.3457L28.0909%2013.0275V20.7093L21%2026.0275L13.9091%2020.7093Z'%20fill='%23EA4335'/%3e%3cpath%20d='M8%2013.9139V16.2775L13.9091%2020.7093V13.0275L12.2545%2011.7866C10.501%2010.4718%208%2011.7231%208%2013.9139Z'%20fill='%23C5221F'/%3e%3c/svg%3e",Zx="/assets/Jininfra-Czzd3TNl.svg",Jx=()=>l.jsxs(Ux,{children:[l.jsxs(Wx,{children:[l.jsxs(Hx,{children:[l.jsx(Vx,{onClick:()=>window.location.href="https://jininfra.com/",src:Zx,alt:"Footer Logo"}),l.jsx(Gx,{children:l.jsx("h1",{children:"주식회사 진인프라"})}),l.jsxs(Kx,{children:[l.jsxs(Zd,{style:{marginBottom:"2%"},children:[l.jsx("p",{children:"Email"}),l.jsx("a",{href:"mailto:jininfra@jininfra.com",children:"jininfra@jininfra.com"})]}),l.jsxs(Zd,{children:[l.jsx("p",{children:"Call"}),l.jsx("a",{href:"tel:02-330-3900",children:"02-330-3900"})]}),l.jsx("h3",{style:{marginTop:"3%"},children:"서울센터 | 서울시 송파구 가락로16길3-20 진인프라빌딩"})]})]}),l.jsxs(qx,{children:[l.jsx("h2",{children:"Contact Us"}),l.jsxs(Yx,{children:[l.jsx("hr",{style:{borderColor:"rgba(255, 255, 255, 0.2)"}}),l.jsx("h3",{style:{marginTop:"6%",marginBottom:"6%"},children:"Frontend Developer"})]}),l.jsxs(qd,{children:[l.jsx(Yd,{children:l.jsx("p",{children:"👤"})}),l.jsx("span",{children:"YeEun Shin"}),l.jsxs(Xd,{children:[l.jsx("a",{href:"https://github.com/yengeun",children:l.jsx("img",{src:Jd,alt:"Github"})}),l.jsx("a",{href:"mailto:7613ez@gmail.com",children:l.jsx("img",{src:ef,alt:"Gmail"})})]})]}),l.jsxs(qd,{children:[l.jsx(Yd,{children:l.jsx("p",{children:"👤"})}),l.jsx("span",{children:"Soeun Yoon"}),l.jsxs(Xd,{children:[l.jsx("a",{href:"https://github.com/Dubabbi",children:l.jsx("img",{src:Jd,alt:"Github"})}),l.jsx("a",{href:"mailto:thdms3160@naver.com",children:l.jsx("img",{src:ef,alt:"Gmail"})})]})]})]})]}),l.jsx(Xx,{children:l.jsx("p",{style:{textAlign:"left",marginLeft:"7.5%"},children:"© 2024 Jenie. All rights reserved."})})]});var Rh={},Mh={},Rl={},Nh={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};e.default=t})(Nh);var ey="Expected a function",tf=NaN,ty="[object Symbol]",ny=/^\s+|\s+$/g,ry=/^[-+]0x[0-9a-f]+$/i,iy=/^0b[01]+$/i,oy=/^0o[0-7]+$/i,ly=parseInt,sy=typeof Oi=="object"&&Oi&&Oi.Object===Object&&Oi,ay=typeof self=="object"&&self&&self.Object===Object&&self,uy=sy||ay||Function("return this")(),cy=Object.prototype,dy=cy.toString,fy=Math.max,py=Math.min,ys=function(){return uy.Date.now()};function hy(e,t,n){var r,i,o,s,a,u,c=0,h=!1,f=!1,g=!0;if(typeof e!="function")throw new TypeError(ey);t=nf(t)||0,Ba(n)&&(h=!!n.leading,f="maxWait"in n,o=f?fy(nf(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g);function x(C){var E=r,T=i;return r=i=void 0,c=C,s=e.apply(T,E),s}function y(C){return c=C,a=setTimeout(p,t),h?x(C):s}function v(C){var E=C-u,T=C-c,P=t-E;return f?py(P,o-T):P}function j(C){var E=C-u,T=C-c;return u===void 0||E>=t||E<0||f&&T>=o}function p(){var C=ys();if(j(C))return d(C);a=setTimeout(p,v(C))}function d(C){return a=void 0,g&&r?x(C):(r=i=void 0,s)}function m(){a!==void 0&&clearTimeout(a),c=0,r=u=i=a=void 0}function S(){return a===void 0?s:d(ys())}function k(){var C=ys(),E=j(C);if(r=arguments,i=this,u=C,E){if(a===void 0)return y(u);if(f)return a=setTimeout(p,t),x(u)}return a===void 0&&(a=setTimeout(p,t)),s}return k.cancel=m,k.flush=S,k}function Ba(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function my(e){return!!e&&typeof e=="object"}function gy(e){return typeof e=="symbol"||my(e)&&dy.call(e)==ty}function nf(e){if(typeof e=="number")return e;if(gy(e))return tf;if(Ba(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Ba(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(ny,"");var n=iy.test(e);return n||oy.test(e)?ly(e.slice(2),n?2:8):ry.test(e)?tf:+e}var vy=hy,Ah={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",s=0;s<arguments.length;s++){var a=arguments[s];a&&(o=i(o,r(a)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var s="";for(var a in o)t.call(o,a)&&o[a]&&(s=i(s,a));return s}function i(o,s){return s?o?o+" "+s:o+s:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Ah);var Ml=Ah.exports,I={},rc={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(b);function n(i){return i&&i.__esModule?i:{default:i}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(o){return t.default.createElement("ul",{style:{display:"block"}},o)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(o){return t.default.createElement("button",null,o+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null};e.default=r})(rc);Object.defineProperty(I,"__esModule",{value:!0});I.checkSpecKeys=I.checkNavigable=I.changeSlide=I.canUseDOM=I.canGoNext=void 0;I.clamp=Fh;I.extractObject=void 0;I.filterSettings=zy;I.validSettings=I.swipeStart=I.swipeMove=I.swipeEnd=I.slidesOnRight=I.slidesOnLeft=I.slideHandler=I.siblingDirection=I.safePreventDefault=I.lazyStartIndex=I.lazySlidesOnRight=I.lazySlidesOnLeft=I.lazyEndIndex=I.keyHandler=I.initializedState=I.getWidth=I.getTrackLeft=I.getTrackCSS=I.getTrackAnimateCSS=I.getTotalSlides=I.getSwipeDirection=I.getSlideCount=I.getRequiredLazySlides=I.getPreClones=I.getPostClones=I.getOnDemandLazySlides=I.getNavigableIndexes=I.getHeight=void 0;var xy=Dh(b),yy=Dh(rc);function Dh(e){return e&&e.__esModule?e:{default:e}}function yi(e){"@babel/helpers - typeof";return yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yi(e)}function rf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rf(Object(n),!0).forEach(function(r){wy(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wy(e,t,n){return t=Sy(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Sy(e){var t=jy(e,"string");return yi(t)=="symbol"?t:String(t)}function jy(e,t){if(yi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(yi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Fh(e,t,n){return Math.max(t,Math.min(e,n))}var Jn=I.safePreventDefault=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()},Bh=I.getOnDemandLazySlides=function(t){for(var n=[],r=$h(t),i=Qh(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};I.getRequiredLazySlides=function(t){for(var n=[],r=$h(t),i=Qh(t),o=r;o<i;o++)n.push(o);return n};var $h=I.lazyStartIndex=function(t){return t.currentSlide-by(t)},Qh=I.lazyEndIndex=function(t){return t.currentSlide+ky(t)},by=I.lazySlidesOnLeft=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0},ky=I.lazySlidesOnRight=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow},$a=I.getWidth=function(t){return t&&t.offsetWidth||0},Uh=I.getHeight=function(t){return t&&t.offsetHeight||0},Wh=I.getSwipeDirection=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,s;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),s=Math.round(o*180/Math.PI),s<0&&(s=360-Math.abs(s)),s<=45&&s>=0||s<=360&&s>=315?"left":s>=135&&s<=225?"right":n===!0?s>=35&&s<=135?"up":"down":"vertical"},Hh=I.canGoNext=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};I.extractObject=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};I.initializedState=function(t){var n=xy.default.Children.count(t.children),r=t.listRef,i=Math.ceil($a(r)),o=t.trackRef&&t.trackRef.node,s=Math.ceil($a(o)),a;if(t.vertical)a=i;else{var u=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(u*=i/100),a=Math.ceil((i-u)/t.slidesToShow)}var c=r&&Uh(r.querySelector('[data-index="0"]')),h=c*t.slidesToShow,f=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(f=n-1-t.initialSlide);var g=t.lazyLoadedList||[],x=Bh(ee(ee({},t),{},{currentSlide:f,lazyLoadedList:g}));g=g.concat(x);var y={slideCount:n,slideWidth:a,listWidth:i,trackWidth:s,currentSlide:f,slideHeight:c,listHeight:h,lazyLoadedList:g};return t.autoplaying===null&&t.autoplay&&(y.autoplaying="playing"),y};I.slideHandler=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,s=t.index,a=t.slideCount,u=t.lazyLoad,c=t.currentSlide,h=t.centerMode,f=t.slidesToScroll,g=t.slidesToShow,x=t.useCSS,y=t.lazyLoadedList;if(n&&r)return{};var v=s,j,p,d,m={},S={},k=o?s:Fh(s,0,a-1);if(i){if(!o&&(s<0||s>=a))return{};s<0?v=s+a:s>=a&&(v=s-a),u&&y.indexOf(v)<0&&(y=y.concat(v)),m={animating:!0,currentSlide:v,lazyLoadedList:y,targetSlide:v},S={animating:!1,targetSlide:v}}else j=v,v<0?(j=v+a,o?a%f!==0&&(j=a-a%f):j=0):!Hh(t)&&v>c?v=j=c:h&&v>=a?(v=o?a:a-1,j=o?0:a-1):v>=a&&(j=v-a,o?a%f!==0&&(j=0):j=a-g),!o&&v+g>=a&&(j=a-g),p=el(ee(ee({},t),{},{slideIndex:v})),d=el(ee(ee({},t),{},{slideIndex:j})),o||(p===d&&(v=j),p=d),u&&(y=y.concat(Bh(ee(ee({},t),{},{currentSlide:v})))),x?(m={animating:!0,currentSlide:j,trackStyle:Gh(ee(ee({},t),{},{left:p})),lazyLoadedList:y,targetSlide:k},S={animating:!1,currentSlide:j,trackStyle:Jo(ee(ee({},t),{},{left:d})),swipeLeft:null,targetSlide:k}):m={currentSlide:j,trackStyle:Jo(ee(ee({},t),{},{left:d})),lazyLoadedList:y,targetSlide:k};return{state:m,nextState:S}};I.changeSlide=function(t,n){var r,i,o,s,a,u=t.slidesToScroll,c=t.slidesToShow,h=t.slideCount,f=t.currentSlide,g=t.targetSlide,x=t.lazyLoad,y=t.infinite;if(s=h%u!==0,r=s?0:(h-f)%u,n.message==="previous")o=r===0?u:c-r,a=f-o,x&&!y&&(i=f-o,a=i===-1?h-1:i),y||(a=g-u);else if(n.message==="next")o=r===0?u:r,a=f+o,x&&!y&&(a=(f+u)%h+r),y||(a=g+u);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,y){var v=Py(ee(ee({},t),{},{targetSlide:a}));a>n.currentSlide&&v==="left"?a=a-h:a<n.currentSlide&&v==="right"&&(a=a+h)}}else n.message==="index"&&(a=Number(n.index));return a};I.keyHandler=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};I.swipeStart=function(t,n,r){return t.target.tagName==="IMG"&&Jn(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};I.swipeMove=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,s=n.swipeToSlide,a=n.verticalSwiping,u=n.rtl,c=n.currentSlide,h=n.edgeFriction,f=n.edgeDragged,g=n.onEdge,x=n.swiped,y=n.swiping,v=n.slideCount,j=n.slidesToScroll,p=n.infinite,d=n.touchObject,m=n.swipeEvent,S=n.listHeight,k=n.listWidth;if(!r){if(i)return Jn(t);o&&s&&a&&Jn(t);var C,E={},T=el(n);d.curX=t.touches?t.touches[0].pageX:t.clientX,d.curY=t.touches?t.touches[0].pageY:t.clientY,d.swipeLength=Math.round(Math.sqrt(Math.pow(d.curX-d.startX,2)));var P=Math.round(Math.sqrt(Math.pow(d.curY-d.startY,2)));if(!a&&!y&&P>10)return{scrolling:!0};a&&(d.swipeLength=P);var _=(u?-1:1)*(d.curX>d.startX?1:-1);a&&(_=d.curY>d.startY?1:-1);var N=Math.ceil(v/j),M=Wh(n.touchObject,a),A=d.swipeLength;return p||(c===0&&(M==="right"||M==="down")||c+1>=N&&(M==="left"||M==="up")||!Hh(n)&&(M==="left"||M==="up"))&&(A=d.swipeLength*h,f===!1&&g&&(g(M),E.edgeDragged=!0)),!x&&m&&(m(M),E.swiped=!0),o?C=T+A*(S/k)*_:u?C=T-A*_:C=T+A*_,a&&(C=T+A*_),E=ee(ee({},E),{},{touchObject:d,swipeLeft:C,trackStyle:Jo(ee(ee({},n),{},{left:C}))}),Math.abs(d.curX-d.startX)<Math.abs(d.curY-d.startY)*.8||d.swipeLength>10&&(E.swiping=!0,Jn(t)),E}};I.swipeEnd=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,s=n.listWidth,a=n.touchThreshold,u=n.verticalSwiping,c=n.listHeight,h=n.swipeToSlide,f=n.scrolling,g=n.onSwipe,x=n.targetSlide,y=n.currentSlide,v=n.infinite;if(!r)return i&&Jn(t),{};var j=u?c/a:s/a,p=Wh(o,u),d={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(f||!o.swipeLength)return d;if(o.swipeLength>j){Jn(t),g&&g(p);var m,S,k=v?y:x;switch(p){case"left":case"up":S=k+lf(n),m=h?of(n,S):S,d.currentDirection=0;break;case"right":case"down":S=k-lf(n),m=h?of(n,S):S,d.currentDirection=1;break;default:m=k}d.triggerSlideHandler=m}else{var C=el(n);d.trackStyle=Gh(ee(ee({},n),{},{left:C}))}return d};var Cy=I.getNavigableIndexes=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o},of=I.checkNavigable=function(t,n){var r=Cy(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n},lf=I.getSlideCount=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(u){if(t.vertical){if(u.offsetTop+Uh(u)/2>t.swipeLeft*-1)return r=u,!1}else if(u.offsetLeft-n+$a(u)/2>t.swipeLeft*-1)return r=u,!1;return!0}),!r)return 0;var s=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,a=Math.abs(r.dataset.index-s)||1;return a}else return t.slidesToScroll},ic=I.checkSpecKeys=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)},Jo=I.getTrackCSS=function(t){ic(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=_y(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var s=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",u=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=ee(ee({},o),{},{WebkitTransform:s,transform:a,msTransform:u})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o},Gh=I.getTrackAnimateCSS=function(t){ic(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Jo(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n},el=I.getTrackLeft=function(t){if(t.unslick)return 0;ic(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,s=t.slideCount,a=t.slidesToShow,u=t.slidesToScroll,c=t.slideWidth,h=t.listWidth,f=t.variableWidth,g=t.slideHeight,x=t.fade,y=t.vertical,v=0,j,p,d=0;if(x||t.slideCount===1)return 0;var m=0;if(i?(m=-vo(t),s%u!==0&&n+u>s&&(m=-(n>s?a-(n-s):s%u)),o&&(m+=parseInt(a/2))):(s%u!==0&&n+u>s&&(m=a-s%u),o&&(m=parseInt(a/2))),v=m*c,d=m*g,y?j=n*g*-1+d:j=n*c*-1+v,f===!0){var S,k=r&&r.node;if(S=n+vo(t),p=k&&k.childNodes[S],j=p?p.offsetLeft*-1:0,o===!0){S=i?n+vo(t):n,p=k&&k.children[S],j=0;for(var C=0;C<S;C++)j-=k&&k.children[C]&&k.children[C].offsetWidth;j-=parseInt(t.centerPadding),j+=p&&(h-p.offsetWidth)/2}}return j},vo=I.getPreClones=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)},Ey=I.getPostClones=function(t){return t.unslick||!t.infinite?0:t.slideCount},_y=I.getTotalSlides=function(t){return t.slideCount===1?1:vo(t)+t.slideCount+Ey(t)},Py=I.siblingDirection=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+Oy(t)?"left":"right":t.targetSlide<t.currentSlide-Ty(t)?"right":"left"},Oy=I.slidesOnRight=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var s=(n-1)/2+1;return parseInt(o)>0&&(s+=1),i&&n%2===0&&(s+=1),s}return i?0:n-1},Ty=I.slidesOnLeft=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var s=(n-1)/2+1;return parseInt(o)>0&&(s+=1),!i&&n%2===0&&(s+=1),s}return i?n-1:0};I.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var Iy=I.validSettings=Object.keys(yy.default);function zy(e){return Iy.reduce(function(t,n){return e.hasOwnProperty(n)&&(t[n]=e[n]),t},{})}var Nl={};Object.defineProperty(Nl,"__esModule",{value:!0});Nl.Track=void 0;var Dt=Vh(b),ws=Vh(Ml),Ss=I;function Vh(e){return e&&e.__esModule?e:{default:e}}function mr(e){"@babel/helpers - typeof";return mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mr(e)}function Qa(){return Qa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qa.apply(this,arguments)}function Ly(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ry(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,qh(r.key),r)}}function My(e,t,n){return t&&Ry(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ny(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ua(e,t)}function Ua(e,t){return Ua=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Ua(e,t)}function Ay(e){var t=Kh();return function(){var r=tl(e),i;if(t){var o=tl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Dy(this,i)}}function Dy(e,t){if(t&&(mr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Wa(e)}function Wa(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Kh(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Kh=function(){return!!e})()}function tl(e){return tl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},tl(e)}function sf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sf(Object(n),!0).forEach(function(r){Ha(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ha(e,t,n){return t=qh(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qh(e){var t=Fy(e,"string");return mr(t)=="symbol"?t:String(t)}function Fy(e,t){if(mr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(mr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var js=function(t){var n,r,i,o,s;t.rtl?s=t.slideCount-1-t.index:s=t.index,i=s<0||s>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(s-t.currentSlide)%t.slideCount===0,s>t.currentSlide-o-1&&s<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=s&&s<t.currentSlide+t.slidesToShow;var a;t.targetSlide<0?a=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?a=t.targetSlide-t.slideCount:a=t.targetSlide;var u=s===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":u}},By=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,n.zIndex=t.currentSlide===t.index?999:998,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},bs=function(t,n){return t.key||n},$y=function(t){var n,r=[],i=[],o=[],s=Dt.default.Children.count(t.children),a=(0,Ss.lazyStartIndex)(t),u=(0,Ss.lazyEndIndex)(t);return Dt.default.Children.forEach(t.children,function(c,h){var f,g={message:"children",index:h,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(h)>=0?f=c:f=Dt.default.createElement("div",null);var x=By(Me(Me({},t),{},{index:h})),y=f.props.className||"",v=js(Me(Me({},t),{},{index:h}));if(r.push(Dt.default.cloneElement(f,{key:"original"+bs(f,h),"data-index":h,className:(0,ws.default)(v,y),tabIndex:"-1","aria-hidden":!v["slick-active"],style:Me(Me({outline:"none"},f.props.style||{}),x),onClick:function(d){f.props&&f.props.onClick&&f.props.onClick(d),t.focusOnSelect&&t.focusOnSelect(g)}})),t.infinite&&t.fade===!1){var j=s-h;j<=(0,Ss.getPreClones)(t)&&(n=-j,n>=a&&(f=c),v=js(Me(Me({},t),{},{index:n})),i.push(Dt.default.cloneElement(f,{key:"precloned"+bs(f,n),"data-index":n,tabIndex:"-1",className:(0,ws.default)(v,y),"aria-hidden":!v["slick-active"],style:Me(Me({},f.props.style||{}),x),onClick:function(d){f.props&&f.props.onClick&&f.props.onClick(d),t.focusOnSelect&&t.focusOnSelect(g)}}))),n=s+h,n<u&&(f=c),v=js(Me(Me({},t),{},{index:n})),o.push(Dt.default.cloneElement(f,{key:"postcloned"+bs(f,n),"data-index":n,tabIndex:"-1",className:(0,ws.default)(v,y),"aria-hidden":!v["slick-active"],style:Me(Me({},f.props.style||{}),x),onClick:function(d){f.props&&f.props.onClick&&f.props.onClick(d),t.focusOnSelect&&t.focusOnSelect(g)}}))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)};Nl.Track=function(e){Ny(n,e);var t=Ay(n);function n(){var r;Ly(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return r=t.call.apply(t,[this].concat(o)),Ha(Wa(r),"node",null),Ha(Wa(r),"handleRef",function(a){r.node=a}),r}return My(n,[{key:"render",value:function(){var i=$y(this.props),o=this.props,s=o.onMouseEnter,a=o.onMouseOver,u=o.onMouseLeave,c={onMouseEnter:s,onMouseOver:a,onMouseLeave:u};return Dt.default.createElement("div",Qa({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},c),i)}}]),n}(Dt.default.PureComponent);var Al={};function gr(e){"@babel/helpers - typeof";return gr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gr(e)}Object.defineProperty(Al,"__esModule",{value:!0});Al.Dots=void 0;var qi=Yh(b),Qy=Yh(Ml),af=I;function Yh(e){return e&&e.__esModule?e:{default:e}}function uf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Uy(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?uf(Object(n),!0).forEach(function(r){Wy(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):uf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wy(e,t,n){return t=Xh(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Hy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Gy(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Xh(r.key),r)}}function Vy(e,t,n){return t&&Gy(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Xh(e){var t=Ky(e,"string");return gr(t)=="symbol"?t:String(t)}function Ky(e,t){if(gr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(gr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function qy(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ga(e,t)}function Ga(e,t){return Ga=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Ga(e,t)}function Yy(e){var t=Zh();return function(){var r=nl(e),i;if(t){var o=nl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Xy(this,i)}}function Xy(e,t){if(t&&(gr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Zy(e)}function Zy(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Zh(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Zh=function(){return!!e})()}function nl(e){return nl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},nl(e)}var Jy=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n};Al.Dots=function(e){qy(n,e);var t=Yy(n);function n(){return Hy(this,n),t.apply(this,arguments)}return Vy(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,s=i.onMouseOver,a=i.onMouseLeave,u=i.infinite,c=i.slidesToScroll,h=i.slidesToShow,f=i.slideCount,g=i.currentSlide,x=Jy({slideCount:f,slidesToScroll:c,slidesToShow:h,infinite:u}),y={onMouseEnter:o,onMouseOver:s,onMouseLeave:a},v=[],j=0;j<x;j++){var p=(j+1)*c-1,d=u?p:(0,af.clamp)(p,0,f-1),m=d-(c-1),S=u?m:(0,af.clamp)(m,0,f-1),k=(0,Qy.default)({"slick-active":u?g>=S&&g<=d:g===S}),C={message:"dots",index:j,slidesToScroll:c,currentSlide:g},E=this.clickHandler.bind(this,C);v=v.concat(qi.default.createElement("li",{key:j,className:k},qi.default.cloneElement(this.props.customPaging(j),{onClick:E})))}return qi.default.cloneElement(this.props.appendDots(v),Uy({className:this.props.dotsClass},y))}}]),n}(qi.default.PureComponent);var vr={};function xr(e){"@babel/helpers - typeof";return xr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xr(e)}Object.defineProperty(vr,"__esModule",{value:!0});vr.PrevArrow=vr.NextArrow=void 0;var er=em(b),Jh=em(Ml),e3=I;function em(e){return e&&e.__esModule?e:{default:e}}function rl(){return rl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rl.apply(this,arguments)}function cf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function il(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cf(Object(n),!0).forEach(function(r){t3(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function t3(e,t,n){return t=rm(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tm(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,rm(r.key),r)}}function nm(e,t,n){return t&&n3(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function rm(e){var t=r3(e,"string");return xr(t)=="symbol"?t:String(t)}function r3(e,t){if(xr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(xr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function im(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Va(e,t)}function Va(e,t){return Va=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Va(e,t)}function om(e){var t=lm();return function(){var r=ol(e),i;if(t){var o=ol(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return i3(this,i)}}function i3(e,t){if(t&&(xr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return o3(e)}function o3(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function lm(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(lm=function(){return!!e})()}function ol(e){return ol=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},ol(e)}vr.PrevArrow=function(e){im(n,e);var t=om(n);function n(){return tm(this,n),t.apply(this,arguments)}return nm(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var s={key:"0","data-role":"none",className:(0,Jh.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},u;return this.props.prevArrow?u=er.default.cloneElement(this.props.prevArrow,il(il({},s),a)):u=er.default.createElement("button",rl({key:"0",type:"button"},s)," ","Previous"),u}}]),n}(er.default.PureComponent);vr.NextArrow=function(e){im(n,e);var t=om(n);function n(){return tm(this,n),t.apply(this,arguments)}return nm(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,e3.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var s={key:"1","data-role":"none",className:(0,Jh.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},u;return this.props.nextArrow?u=er.default.cloneElement(this.props.nextArrow,il(il({},s),a)):u=er.default.createElement("button",rl({key:"1",type:"button"},s)," ","Next"),u}}]),n}(er.default.PureComponent);var sm=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var s=o[i];n.call(r,s[1],s[0])}},t}()}(),Ka=typeof window<"u"&&typeof document<"u"&&window.document===document,ll=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),l3=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(ll):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),s3=2;function a3(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function s(){l3(o)}function a(){var u=Date.now();if(n){if(u-i<s3)return;r=!0}else n=!0,r=!1,setTimeout(s,t);i=u}return a}var u3=20,c3=["top","right","bottom","left","width","height","size","weight"],d3=typeof MutationObserver<"u",f3=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=a3(this.refresh.bind(this),u3)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Ka||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),d3?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Ka||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=c3.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),am=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},yr=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||ll},um=Dl(0,0,0,0);function sl(e){return parseFloat(e)||0}function df(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+sl(o)},0)}function p3(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],s=e["padding-"+o];n[o]=sl(s)}return n}function h3(e){var t=e.getBBox();return Dl(0,0,t.width,t.height)}function m3(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return um;var r=yr(e).getComputedStyle(e),i=p3(r),o=i.left+i.right,s=i.top+i.bottom,a=sl(r.width),u=sl(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==t&&(a-=df(r,"left","right")+o),Math.round(u+s)!==n&&(u-=df(r,"top","bottom")+s)),!v3(e)){var c=Math.round(a+o)-t,h=Math.round(u+s)-n;Math.abs(c)!==1&&(a-=c),Math.abs(h)!==1&&(u-=h)}return Dl(i.left,i.top,a,u)}var g3=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof yr(e).SVGGraphicsElement}:function(e){return e instanceof yr(e).SVGElement&&typeof e.getBBox=="function"}}();function v3(e){return e===yr(e).document.documentElement}function x3(e){return Ka?g3(e)?h3(e):m3(e):um}function y3(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(o.prototype);return am(s,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),s}function Dl(e,t,n,r){return{x:e,y:t,width:n,height:r}}var w3=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Dl(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=x3(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),S3=function(){function e(t,n){var r=y3(n);am(this,{target:t,contentRect:r})}return e}(),j3=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new sm,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof yr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new w3(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof yr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new S3(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),cm=typeof WeakMap<"u"?new WeakMap:new sm,dm=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=f3.getInstance(),r=new j3(t,n,this);cm.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){dm.prototype[e]=function(){var t;return(t=cm.get(this))[e].apply(t,arguments)}});var b3=function(){return typeof ll.ResizeObserver<"u"?ll.ResizeObserver:dm}();const k3=Object.freeze(Object.defineProperty({__proto__:null,default:b3},Symbol.toStringTag,{value:"Module"})),C3=Fm(k3);Object.defineProperty(Rl,"__esModule",{value:!0});Rl.InnerSlider=void 0;var Oe=_i(b),E3=_i(Nh),_3=_i(vy),P3=_i(Ml),ne=I,O3=Nl,T3=Al,ff=vr,I3=_i(C3);function _i(e){return e&&e.__esModule?e:{default:e}}function En(e){"@babel/helpers - typeof";return En=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},En(e)}function al(){return al=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},al.apply(this,arguments)}function z3(e,t){if(e==null)return{};var n=L3(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function L3(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function pf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pf(Object(n),!0).forEach(function(r){U(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function R3(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,pm(r.key),r)}}function N3(e,t,n){return t&&M3(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function A3(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&qa(e,t)}function qa(e,t){return qa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},qa(e,t)}function D3(e){var t=fm();return function(){var r=ul(e),i;if(t){var o=ul(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return F3(this,i)}}function F3(e,t){if(t&&(En(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Q(e)}function Q(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function fm(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(fm=function(){return!!e})()}function ul(e){return ul=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},ul(e)}function U(e,t,n){return t=pm(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pm(e){var t=B3(e,"string");return En(t)=="symbol"?t:String(t)}function B3(e,t){if(En(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(En(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}Rl.InnerSlider=function(e){A3(n,e);var t=D3(n);function n(r){var i;R3(this,n),i=t.call(this,r),U(Q(i),"listRefHandler",function(s){return i.list=s}),U(Q(i),"trackRefHandler",function(s){return i.track=s}),U(Q(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var s=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,ne.getHeight)(s)+"px"}}),U(Q(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var s=(0,ne.getOnDemandLazySlides)(D(D({},i.props),i.state));s.length>0&&(i.setState(function(u){return{lazyLoadedList:u.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s))}var a=D({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new I3.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(u){u.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,u.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),U(Q(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(s){return clearTimeout(s)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),U(Q(i),"componentDidUpdate",function(s){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,ne.getOnDemandLazySlides)(D(D({},i.props),i.state));a.length>0&&(i.setState(function(h){return{lazyLoadedList:h.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var u=D(D({listRef:i.list,trackRef:i.track},i.props),i.state),c=i.didPropsChange(s);c&&i.updateState(u,c,function(){i.state.currentSlide>=Oe.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Oe.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),U(Q(i),"onWindowResized",function(s){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,_3.default)(function(){return i.resizeWindow(s)},50),i.debouncedResize()}),U(Q(i),"resizeWindow",function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(i.track&&i.track.node);if(a){var u=D(D({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(u,s,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),U(Q(i),"updateState",function(s,a,u){var c=(0,ne.initializedState)(s);s=D(D(D({},s),c),{},{slideIndex:c.currentSlide});var h=(0,ne.getTrackLeft)(s);s=D(D({},s),{},{left:h});var f=(0,ne.getTrackCSS)(s);(a||Oe.default.Children.count(i.props.children)!==Oe.default.Children.count(s.children))&&(c.trackStyle=f),i.setState(c,u)}),U(Q(i),"ssrInit",function(){if(i.props.variableWidth){var s=0,a=0,u=[],c=(0,ne.getPreClones)(D(D(D({},i.props),i.state),{},{slideCount:i.props.children.length})),h=(0,ne.getPostClones)(D(D(D({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(E){u.push(E.props.style.width),s+=E.props.style.width});for(var f=0;f<c;f++)a+=u[u.length-1-f],s+=u[u.length-1-f];for(var g=0;g<h;g++)s+=u[g];for(var x=0;x<i.state.currentSlide;x++)a+=u[x];var y={width:s+"px",left:-a+"px"};if(i.props.centerMode){var v="".concat(u[i.state.currentSlide],"px");y.left="calc(".concat(y.left," + (100% - ").concat(v,") / 2 ) ")}return{trackStyle:y}}var j=Oe.default.Children.count(i.props.children),p=D(D(D({},i.props),i.state),{},{slideCount:j}),d=(0,ne.getPreClones)(p)+(0,ne.getPostClones)(p)+j,m=100/i.props.slidesToShow*d,S=100/d,k=-S*((0,ne.getPreClones)(p)+i.state.currentSlide)*m/100;i.props.centerMode&&(k+=(100-S*m/100)/2);var C={width:m+"%",left:k+"%"};return{slideWidth:S+"%",trackStyle:C}}),U(Q(i),"checkImagesLoad",function(){var s=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=s.length,u=0;Array.prototype.forEach.call(s,function(c){var h=function(){return++u&&u>=a&&i.onWindowResized()};if(!c.onclick)c.onclick=function(){return c.parentNode.focus()};else{var f=c.onclick;c.onclick=function(g){f(g),c.parentNode.focus()}}c.onload||(i.props.lazyLoad?c.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(c.onload=h,c.onerror=function(){h(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),U(Q(i),"progressiveLazyLoad",function(){for(var s=[],a=D(D({},i.props),i.state),u=i.state.currentSlide;u<i.state.slideCount+(0,ne.getPostClones)(a);u++)if(i.state.lazyLoadedList.indexOf(u)<0){s.push(u);break}for(var c=i.state.currentSlide-1;c>=-(0,ne.getPreClones)(a);c--)if(i.state.lazyLoadedList.indexOf(c)<0){s.push(c);break}s.length>0?(i.setState(function(h){return{lazyLoadedList:h.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),U(Q(i),"slideHandler",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=i.props,c=u.asNavFor,h=u.beforeChange,f=u.onLazyLoad,g=u.speed,x=u.afterChange,y=i.state.currentSlide,v=(0,ne.slideHandler)(D(D(D({index:s},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),j=v.state,p=v.nextState;if(j){h&&h(y,j.currentSlide);var d=j.lazyLoadedList.filter(function(m){return i.state.lazyLoadedList.indexOf(m)<0});f&&d.length>0&&f(d),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),x&&x(y),delete i.animationEndCallback),i.setState(j,function(){c&&i.asNavForIndex!==s&&(i.asNavForIndex=s,c.innerSlider.slideHandler(s)),p&&(i.animationEndCallback=setTimeout(function(){var m=p.animating,S=z3(p,["animating"]);i.setState(S,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:m})},10)),x&&x(j.currentSlide),delete i.animationEndCallback})},g))})}}),U(Q(i),"changeSlide",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=D(D({},i.props),i.state),c=(0,ne.changeSlide)(u,s);if(!(c!==0&&!c)&&(a===!0?i.slideHandler(c,a):i.slideHandler(c),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var h=i.list.querySelectorAll(".slick-current");h[0]&&h[0].focus()}}),U(Q(i),"clickHandler",function(s){i.clickable===!1&&(s.stopPropagation(),s.preventDefault()),i.clickable=!0}),U(Q(i),"keyHandler",function(s){var a=(0,ne.keyHandler)(s,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),U(Q(i),"selectHandler",function(s){i.changeSlide(s)}),U(Q(i),"disableBodyScroll",function(){var s=function(u){u=u||window.event,u.preventDefault&&u.preventDefault(),u.returnValue=!1};window.ontouchmove=s}),U(Q(i),"enableBodyScroll",function(){window.ontouchmove=null}),U(Q(i),"swipeStart",function(s){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,ne.swipeStart)(s,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),U(Q(i),"swipeMove",function(s){var a=(0,ne.swipeMove)(s,D(D(D({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));a&&(a.swiping&&(i.clickable=!1),i.setState(a))}),U(Q(i),"swipeEnd",function(s){var a=(0,ne.swipeEnd)(s,D(D(D({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(a){var u=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),u!==void 0&&(i.slideHandler(u),i.props.verticalSwiping&&i.enableBodyScroll())}}),U(Q(i),"touchEnd",function(s){i.swipeEnd(s),i.clickable=!0}),U(Q(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),U(Q(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),U(Q(i),"slickGoTo",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(s=Number(s),isNaN(s))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:s,currentSlide:i.state.currentSlide},a)},0))}),U(Q(i),"play",function(){var s;if(i.props.rtl)s=i.state.currentSlide-i.props.slidesToScroll;else if((0,ne.canGoNext)(D(D({},i.props),i.state)))s=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(s)}),U(Q(i),"autoPlay",function(s){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(s==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(s==="leave"){if(a==="paused"||a==="focused")return}else if(s==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),U(Q(i),"pause",function(s){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;s==="paused"?i.setState({autoplaying:"paused"}):s==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),U(Q(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),U(Q(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),U(Q(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),U(Q(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),U(Q(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),U(Q(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),U(Q(i),"render",function(){var s=(0,P3.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=D(D({},i.props),i.state),u=(0,ne.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),c=i.props.pauseOnHover;u=D(D({},u),{},{onMouseEnter:c?i.onTrackOver:null,onMouseLeave:c?i.onTrackLeave:null,onMouseOver:c?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var h;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var f=(0,ne.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),g=i.props.pauseOnDotsHover;f=D(D({},f),{},{clickHandler:i.changeSlide,onMouseEnter:g?i.onDotsLeave:null,onMouseOver:g?i.onDotsOver:null,onMouseLeave:g?i.onDotsLeave:null}),h=Oe.default.createElement(T3.Dots,f)}var x,y,v=(0,ne.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);v.clickHandler=i.changeSlide,i.props.arrows&&(x=Oe.default.createElement(ff.PrevArrow,v),y=Oe.default.createElement(ff.NextArrow,v));var j=null;i.props.vertical&&(j={height:i.state.listHeight});var p=null;i.props.vertical===!1?i.props.centerMode===!0&&(p={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(p={padding:i.props.centerPadding+" 0px"});var d=D(D({},j),p),m=i.props.touchMove,S={className:"slick-list",style:d,onClick:i.clickHandler,onMouseDown:m?i.swipeStart:null,onMouseMove:i.state.dragging&&m?i.swipeMove:null,onMouseUp:m?i.swipeEnd:null,onMouseLeave:i.state.dragging&&m?i.swipeEnd:null,onTouchStart:m?i.swipeStart:null,onTouchMove:i.state.dragging&&m?i.swipeMove:null,onTouchEnd:m?i.touchEnd:null,onTouchCancel:i.state.dragging&&m?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},k={className:s,dir:"ltr",style:i.props.style};return i.props.unslick&&(S={className:"slick-list"},k={className:s}),Oe.default.createElement("div",k,i.props.unslick?"":x,Oe.default.createElement("div",al({ref:i.listRefHandler},S),Oe.default.createElement(O3.Track,al({ref:i.trackRefHandler},u),i.props.children)),i.props.unslick?"":y,i.props.unslick?"":h)}),i.list=null,i.track=null,i.state=D(D({},E3.default),{},{currentSlide:i.props.initialSlide,targetSlide:i.props.initialSlide?i.props.initialSlide:0,slideCount:Oe.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=D(D({},i.state),o),i}return N3(n,[{key:"didPropsChange",value:function(i){for(var o=!1,s=0,a=Object.keys(this.props);s<a.length;s++){var u=a[s];if(!i.hasOwnProperty(u)){o=!0;break}if(!(En(i[u])==="object"||typeof i[u]=="function"||isNaN(i[u]))&&i[u]!==this.props[u]){o=!0;break}}return o||Oe.default.Children.count(this.props.children)!==Oe.default.Children.count(i.children)}}]),n}(Oe.default.Component);var $3=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},Q3=$3,U3=Q3,W3=function(e){var t=/[height|width]$/;return t.test(e)},hf=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=U3(r),W3(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},H3=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=hf(n),r<e.length-1&&(t+=", ")}),t):hf(e)},G3=H3,ks,mf;function V3(){if(mf)return ks;mf=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},ks=e,ks}var Cs,gf;function hm(){if(gf)return Cs;gf=1;function e(r,i){var o=0,s=r.length,a;for(o;o<s&&(a=i(r[o],o),a!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return Cs={isFunction:n,isArray:t,each:e},Cs}var Es,vf;function K3(){if(vf)return Es;vf=1;var e=V3(),t=hm().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(s){o.mql=s.currentTarget||s,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,s){if(o.equals(r))return o.destroy(),!i.splice(s,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},Es=n,Es}var _s,xf;function q3(){if(xf)return _s;xf=1;var e=K3(),t=hm(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(s,a,u){var c=this.queries,h=u&&this.browserIsIncapable;return c[s]||(c[s]=new e(s,h)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(f){r(f)&&(f={match:f}),c[s].addHandler(f)}),this},unregister:function(s,a){var u=this.queries[s];return u&&(a?u.removeHandler(a):(u.clear(),delete this.queries[s])),this}},_s=o,_s}var Ps,yf;function Y3(){if(yf)return Ps;yf=1;var e=q3();return Ps=new e,Ps}(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=s(b),n=Rl,r=s(G3),i=s(rc),o=I;function s(P){return P&&P.__esModule?P:{default:P}}function a(P){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},a(P)}function u(){return u=Object.assign?Object.assign.bind():function(P){for(var _=1;_<arguments.length;_++){var N=arguments[_];for(var M in N)Object.prototype.hasOwnProperty.call(N,M)&&(P[M]=N[M])}return P},u.apply(this,arguments)}function c(P,_){var N=Object.keys(P);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(P);_&&(M=M.filter(function(A){return Object.getOwnPropertyDescriptor(P,A).enumerable})),N.push.apply(N,M)}return N}function h(P){for(var _=1;_<arguments.length;_++){var N=arguments[_]!=null?arguments[_]:{};_%2?c(Object(N),!0).forEach(function(M){k(P,M,N[M])}):Object.getOwnPropertyDescriptors?Object.defineProperties(P,Object.getOwnPropertyDescriptors(N)):c(Object(N)).forEach(function(M){Object.defineProperty(P,M,Object.getOwnPropertyDescriptor(N,M))})}return P}function f(P,_){if(!(P instanceof _))throw new TypeError("Cannot call a class as a function")}function g(P,_){for(var N=0;N<_.length;N++){var M=_[N];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(P,C(M.key),M)}}function x(P,_,N){return _&&g(P.prototype,_),Object.defineProperty(P,"prototype",{writable:!1}),P}function y(P,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function");P.prototype=Object.create(_&&_.prototype,{constructor:{value:P,writable:!0,configurable:!0}}),Object.defineProperty(P,"prototype",{writable:!1}),_&&v(P,_)}function v(P,_){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(M,A){return M.__proto__=A,M},v(P,_)}function j(P){var _=m();return function(){var M=S(P),A;if(_){var F=S(this).constructor;A=Reflect.construct(M,arguments,F)}else A=M.apply(this,arguments);return p(this,A)}}function p(P,_){if(_&&(a(_)==="object"||typeof _=="function"))return _;if(_!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return d(P)}function d(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}function m(){try{var P=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(m=function(){return!!P})()}function S(P){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(N){return N.__proto__||Object.getPrototypeOf(N)},S(P)}function k(P,_,N){return _=C(_),_ in P?Object.defineProperty(P,_,{value:N,enumerable:!0,configurable:!0,writable:!0}):P[_]=N,P}function C(P){var _=E(P,"string");return a(_)=="symbol"?_:String(_)}function E(P,_){if(a(P)!="object"||!P)return P;var N=P[Symbol.toPrimitive];if(N!==void 0){var M=N.call(P,_||"default");if(a(M)!="object")return M;throw new TypeError("@@toPrimitive must return a primitive value.")}return(_==="string"?String:Number)(P)}var T=(0,o.canUseDOM)()&&Y3();e.default=function(P){y(N,P);var _=j(N);function N(M){var A;return f(this,N),A=_.call(this,M),k(d(A),"innerSliderRefHandler",function(F){return A.innerSlider=F}),k(d(A),"slickPrev",function(){return A.innerSlider.slickPrev()}),k(d(A),"slickNext",function(){return A.innerSlider.slickNext()}),k(d(A),"slickGoTo",function(F){var it=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return A.innerSlider.slickGoTo(F,it)}),k(d(A),"slickPause",function(){return A.innerSlider.pause("paused")}),k(d(A),"slickPlay",function(){return A.innerSlider.autoPlay("play")}),A.state={breakpoint:null},A._responsiveMediaHandlers=[],A}return x(N,[{key:"media",value:function(A,F){T.register(A,F),this._responsiveMediaHandlers.push({query:A,handler:F})}},{key:"componentDidMount",value:function(){var A=this;if(this.props.responsive){var F=this.props.responsive.map(function(le){return le.breakpoint});F.sort(function(le,we){return le-we}),F.forEach(function(le,we){var z;we===0?z=(0,r.default)({minWidth:0,maxWidth:le}):z=(0,r.default)({minWidth:F[we-1]+1,maxWidth:le}),(0,o.canUseDOM)()&&A.media(z,function(){A.setState({breakpoint:le})})});var it=(0,r.default)({minWidth:F.slice(-1)[0]});(0,o.canUseDOM)()&&this.media(it,function(){A.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(A){T.unregister(A.query,A.handler)})}},{key:"render",value:function(){var A=this,F,it;this.state.breakpoint?(it=this.props.responsive.filter(function(Re){return Re.breakpoint===A.state.breakpoint}),F=it[0].settings==="unslick"?"unslick":h(h(h({},i.default),this.props),it[0].settings)):F=h(h({},i.default),this.props),F.centerMode&&(F.slidesToScroll>1,F.slidesToScroll=1),F.fade&&(F.slidesToShow>1,F.slidesToScroll>1,F.slidesToShow=1,F.slidesToScroll=1);var le=t.default.Children.toArray(this.props.children);le=le.filter(function(Re){return typeof Re=="string"?!!Re.trim():!!Re}),F.variableWidth&&(F.rows>1||F.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),F.variableWidth=!1);for(var we=[],z=null,R=0;R<le.length;R+=F.rows*F.slidesPerRow){for(var B=[],H=R;H<R+F.rows*F.slidesPerRow;H+=F.slidesPerRow){for(var V=[],Pe=H;Pe<H+F.slidesPerRow&&(F.variableWidth&&le[Pe].props.style&&(z=le[Pe].props.style.width),!(Pe>=le.length));Pe+=1)V.push(t.default.cloneElement(le[Pe],{key:100*R+10*H+Pe,tabIndex:-1,style:{width:"".concat(100/F.slidesPerRow,"%"),display:"inline-block"}}));B.push(t.default.createElement("div",{key:10*R+H},V))}F.variableWidth?we.push(t.default.createElement("div",{key:R,style:{width:z}},B)):we.push(t.default.createElement("div",{key:R},B))}if(F==="unslick"){var $e="regular slider "+(this.props.className||"");return t.default.createElement("div",{className:$e},le)}else we.length<=F.slidesToShow&&!F.infinite&&(F.unslick=!0);return t.default.createElement(n.InnerSlider,u({style:this.props.style,ref:this.innerSliderRefHandler},(0,o.filterSettings)(F)),we)}}]),N}(t.default.Component)})(Mh);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(Mh);function n(r){return r&&r.__esModule?r:{default:r}}e.default=t.default})(Rh);const X3=Mf(Rh),oc=w.div`
  max-width: 100%;
  overflow: hidden;
  cursor: text;
  user-select: text;
  @media(max-width: 780px){
    margin: 0 auto;
  }
`,Z3=w.div`
  max-width: 100%;
  @media(max-width: 780px){
    max-width: 93%;
    margin: 0 auto;
  }
`,lc=w.header`
  position: relative;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`,sc=w.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; 
`,J3=w.div`
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
`,ac=w.h1`
  font-size: 2.5rem;
  font-weight: bold;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,Os=w.h2`
  font-size: 2.2rem;
  color: #0B212E;
  margin: 20px;
  padding: 0 50px;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  @media(max-width: 780px){
    margin-top: 5%;
  }
`,ew=w.div`
  width: 100%;
  overflow: visible;
  padding: 0 50px;
  margin-top: 5%;
  margin-bottom: 3%;
  @media(max-width: 780px){
    margin-top: 12%;
    padding: 0 30px;
  }
`,tw=w.div`
  padding-left: 5%;
  margin-bottom: 6%;
  p{
    font-size: 1.6rem;
    &::selection {
      background-color: #60E6F2;
      color: #000;
    }
  }
  .slick-prev, .slick-next {
    z-index: 1;
  }

  .slick-dots li button:before {
    color: #0B212E;
  }

  .slick-dots li.slick-active button:before {
    color: #0B212E;
  }
`,nw=Er`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`,Ts=w.img`
  height: 35vh;
  cursor: pointer;
  width: 97%;
  object-fit: cover;
  margin-bottom: 1%;
`,rw=w.div`
  display: flex;
  animation: ${nw} 15s linear infinite;
`,wf=w.div`
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
    width: 68%;
    padding-top: 80px;
    padding-bottom: 1px;
    margin-top: 15%;
  }
  &:hover {
    transform: scale(1.04); 
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
`,Sf=w.img`
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
`,jf=w.div`
  padding: 20px 0 10px;
  line-height: 1.7;
  .title {
    font-size: 1.6rem;
    font-weight: bold;
    color: #0B212E;
    margin: 10px 0 5px 0;
    &::selection {
      background-color: #60E6F2;
      color: #000;
    }
  }

  .subtitle {
    font-size: 1.2rem;
    color: #000;
    max-width: 93%;
    margin: 0 auto;
    &::selection {
      background-color: #60E6F2;
      color: #000;
    }
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
`,iw=w.div`
  padding: 20px;
  max-width: 90%;
  margin: 0 auto;
  display: flex; 
  flex-direction: column;
`,ow=w.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`,lw=w.div`
  padding: 15px 0;
`,sw=w.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`;w.div`
  display: flex;
  justify-content: space-between;
  color: #7d7d7d;
  font-size: 0.9rem;
  margin-bottom: 10px;
`;const aw=w.p`
  font-size: 1.1rem;
  line-height: 1.5;
  color: #4a4a4a;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  p{
    &::selection {
      background-color: #60E6F2;
      color: #000;
    }
  }
`,uw=w.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  padding: 10% 0;
  @media (max-width: 780px) {
    flex-direction: column-reverse; 
  }
`,cw=w.img`
  width: 250px;
  height: auto;
  @media (max-width: 780px) {
    margin-right:43%;
    width: 170px;
    margin-top: 5%;
  }
`,dw=w.div`
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
  @media (max-width: 780px) {
    margin: 20px 10px;
    padding: 5%;
    &::before {
      top: auto;
      bottom: -20px; 
      left: 10%; 
      margin-left: -10px; 
      border-color: white transparent transparent transparent; 
    }
  }
`,fw=w.p`
  line-height: 1.7;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  @media(max-width: 780px){
    line-height: 1.65;
    font-size: 1.35rem;
  }
`,pw=w.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.7;
  color: #444;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  @media(max-width: 780px){
    line-height: 1.65;
    font-size: 1.16rem;
  }
`,Ya=w.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  padding: 3%;
  margin: 0 auto;
  position: relative;
  max-width: 700px;
  font-size: 13px;
  line-height: 1.7;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  
   transition: transform 0.3s ease-in-out;
  &:hover{
    transform: scale(1.03);
  }
  h1{
    color: #170F49;
    font-size: 1.7rem;
    line-height: 1.8;
    margin-bottom: 2px;
    &::selection {
      background-color: #60E6F2;
      color: #000;
    }
  }
  p{
    color: #666;
    font-size: 1.3rem;
    &::selection {
      background-color: #60E6F2;
      color: #000;
    }
  }
  @media(max-width: 780px){
    margin: 2% 3%;
    h1{
      font-size: 1.3rem;
    }
    p{
      font-size: 1rem;
    }
    &:hover{
      transform: scale(1.02);
    }
  }
`,mm=w.a`
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
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  &:hover {
    background-color: #0056b3;
  }

  &::before {
    content: '↗';
    margin-right: 8px;
  }
`,hw=w.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #28a745; 
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
  &::selection {
    background-color: #90ee90;
    color: #000;
  }
  &:hover {
    background-color: #218838; 
  }

  &::before {
    content: '↗'; 
    margin-right: 8px;
  }
`,Xa=w.div`
  max-width: 700px;
  margin: 0 auto;
  h1{
    margin: 3% 0;
    font-size: 2rem;
    &::selection {
      background-color: #60E6F2;
      color: #000;
    }
  }
  @media(max-width: 780px){
    max-width: 93%;
    margin: 0 auto;
    h1{
      font-size: 1.7rem;
      &::selection {
        background-color: #60E6F2;
        color: #000;
      }
    }
  }
`,mw=w.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
  text-align: center;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,gw=w.div`
  margin-bottom: 20px;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,vw=w.h3`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,xw=w.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,yw="/assets/ball-RuGWw7hf.svg",ww="/assets/ball2-_4ZmxEbj.svg",xo="/assets/cat-B7n9BXOC.svg",gm="/assets/cat2-DFpCBDnE.svg",Sw="/assets/quantum2-Z_9Fj8HX.svg",jw="/assets/window-BGzfOsee.svg",bw=w.div`
    margin-top: -5%;
    padding-top: 5%;
    background-color: #eee;
`,vm=w.div`
    height: 320vh;
    max-height: 320vh;
    margin-top: -5%;
    margin-bottom: 20%;
    padding-top: 5%;
    background-color: #eee;

`,xm=w.div`
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
`,kw=w.div`
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
      font-size: 1.9rem;
       @media (max-width: 900px) {
          font-size: 1.7rem;
       }
    }
    p{
      font-family: 'Arial', sans-serif;
      font-size: 1.5rem;
      letter-spacing: 0px;
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
`;w.div`
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
`;w.div`
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
`;const Za=w.button`
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
`,ym=w.div`
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
`,Cw=w.div`
  margin: 0px 13% 3% 13%;
  display: flex;
  flex-direction: row;
  @media(max-width: 780px){
    margin: 0px 5% 3% 5%;
  }
`,Ew=w.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  text-align: center;
  align-items: center;
  margin-top: 3%;
  flex-wrap: wrap;

  & > div:first-child {
    flex: 1 1 40%; 
    text-align: center;
    img{
      max-width: 60%;
       @media (max-width: 700px) {
        max-width: 30%;
       }
    }
  }

  & > div:last-child {
    background-color:  rgba(223, 245, 255, 0.78);
    color: #333;
    flex: 1 1 60%; 
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
`,_w=w.p`
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
`,Pw=Er`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ow=w.img`
  max-width: 33%;
  animation: ${Pw} 8s linear infinite;
  @media(max-width: 800px){
    max-width: 60%;
  }
`,bf=w.button`
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
`,Tw=()=>{b.useState(!1);const e=Ye(),[t,n]=b.useState([]),r=i=>{t.includes(i)?n(t.filter(o=>o!==i)):n([...t,i])};return l.jsxs(bw,{children:[l.jsxs(kw,{style:{marginBottom:"0px"},children:[l.jsx("h1",{children:"양자 개념"}),l.jsx("hr",{}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${t.includes(0)?"active":""}`,onClick:()=>r(0),children:[l.jsx("span",{children:"양자란 ?"}),l.jsx("span",{children:t.includes(0)?"▲":"▼"})]}),t.includes(0)&&l.jsxs("div",{className:"accordion-content",children:[l.jsxs("p",{children:["양자란, 더 이상 나눌 수 없는 에너지의 최소량의 단위입니다. 쉽게 말해, ",l.jsx("span",{style:{fontFamily:"Arial",color:"#B0E3FF"},children:"우리가 에너지를 가장 작은 단위로 쪼개면 그 단위를 양자"}),"라고 부릅니다. 처음으로 양자는 빛에서 발견되었으며, 이 작은 에너지가 어떻게 움직이는지 연구하는 것이 바로 양자 물리학, 양자 역학의 시작입니다."]}),l.jsx("div",{style:{textAlign:"center",height:"auto"},children:l.jsx(Ow,{src:Sw})})]})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${t.includes(1)?"active":""}`,onClick:()=>r(1),children:[l.jsx("span",{children:"양자역학이란 ?"}),l.jsx("span",{children:t.includes(1)?"▲":"▼"})]}),t.includes(1)&&l.jsx("div",{className:"accordion-content",children:l.jsxs("p",{children:["양자역학은 ",l.jsx("span",{style:{fontFamily:"Arial",color:"#B0E3FF"},children:"원자와 전자 같은 매우 작은 입자들이 작용하는 방식을 설명하는 이론"}),"으로, 양자역학은 양자라는 에너지의 최소 단위를 포함한 아주 작은 입자들(전자, 광자 등)의 행동과 상호작용을 연구하는 물리학의 한 분야입니다. 이는 입자들이 고전 물리학의 법칙을 따르지 않고, 파동과 입자 성질을 동시에 가지며, 불확정성과 중첩 등의 독특한 성질을 나타내는 현상들을 설명합니다."]})})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${t.includes(2)?"active":""}`,onClick:()=>r(2),children:[l.jsx("span",{children:"불확정성의 원리"}),l.jsx("span",{children:t.includes(2)?"▲":"▼"})]}),t.includes(2)&&l.jsxs("div",{className:"accordion-content",children:[l.jsx("h1",{style:{marginBottom:"1%",color:"#eee"},children:'"입자의 위치나 운동량을 동시에 정확하게 알 수 없다"'}),l.jsx("hr",{style:{border:"none",borderTop:"0.5px solid #ddd"}}),l.jsxs("p",{children:["하이젠베르크라는 물리학자는 실험을 통해, 우리가 아무리 정밀한 장비를 사용하더라도 입자의 위치를 알면 그 입자의 속도를 정확히 알 수 없고, 반대로 속도를 알면 위치를 정확히 알 수 없다는 것을 발견했습니다. 이는 마치",l.jsx("span",{style:{fontFamily:"Arial",color:"#B0E3FF"},children:" 우리가 축구공을 발로 찬 후에 그 공의 정확한 위치와 속도를 동시에 파악하기 어려운 것"}),"과 비슷합니다."]}),l.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",gap:"10%",height:"auto"},children:[l.jsx("img",{src:ww,style:{width:"100px",minWidth:"20%"},alt:"Ball"}),l.jsx("img",{src:yw,style:{width:"100px",minWidth:"15%"},alt:"Ball"})]})]})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${t.includes(3)?"active":""}`,onClick:()=>r(3),children:[l.jsx("span",{children:"양자 중첩(슈뢰딩거의 고양이)"}),l.jsx("span",{children:t.includes(3)?"▲":"▼"})]}),t.includes(3)&&l.jsxs("div",{className:"accordion-content",children:[l.jsxs("p",{children:["슈뢰딩거의 고양이는 양자역학의 개념을 설명하기 위해 1935년 오스트리아의 물리학자 ",l.jsx("span",{style:{fontFamily:"Arial",color:"#B0E3FF"},children:"에르빈 슈뢰딩거"}),"가 제안한 사고 실험입니다. 이 실험은 양자역학의 중첩 상태와 그로 인한 철학적 문제를 쉽게 설명하기 위한 것입니다. 특히 양자역학의 코펜하겐 해석을 이해하는 데 중요한 역할을 합니다."]}),l.jsx("div",{style:{textAlign:"center"},children:l.jsx(bf,{style:{cursor:"pointer"},onClick:i=>e("/cat"),children:" 고양이 보러가기"})})]})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${t.includes(4)?"active":""}`,onClick:()=>r(4),children:[l.jsx("span",{children:"파동 함수 붕괴"}),l.jsx("span",{children:t.includes(4)?"▲":"▼"})]}),t.includes(4)&&l.jsxs("div",{className:"accordion-content",children:[l.jsx("h1",{style:{marginBottom:"1%",color:"#eee"},children:"중첩 상태가 관측되었을 때, 그 상태가 하나로 확정되는 과정"}),l.jsx("hr",{style:{border:"none",borderTop:"0.5px solid #ddd"}}),l.jsxs("p",{children:["양자 물체는 여러 상태가 동시에 존재할 수 있는데, 이 상태를 기술하는 것이 ",l.jsx("span",{style:{fontFamily:"Arial",color:"#B0E3FF"},children:"파동 함수"}),"입니다. 여러 상태가 있더라도 외부에서 관측을 하면 파동 함수가 붕괴하면서 입자는 하나의 확정된 상태로 변화합니다. 파동 함수 붕괴는 양자 중첩 상태에 있는 입자가 관측되었을 때 하나의 확정된 상태로 변하는 과정입니다. 양자 시스템은 여러 상태(중첩 상태)로 존재할 수 있지만, 누군가 그 시스템을 관측하는 순간, 그 시스템은 중첩된 여러 상태 중 하나로 결정됩니다. 이를 파동 함수가 붕괴했다고 표현합니다."]}),l.jsxs(_w,{children:[l.jsx("img",{src:xo,alt:"cat",style:{maxWidth:"40%"}})," ",l.jsx("img",{src:gm,alt:"cat2",style:{minWidth:"19%",width:"177px",marginBottom:"0px"}})]}),l.jsx("p",{style:{marginTop:"5%"},children:"파동 함수 붕괴는 슈뢰딩거의 고양이에서 상자를 열고 난 후에 발생하는 과정으로 이해할 수 있습니다."})]})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${t.includes(5)?"active":""}`,onClick:()=>r(5),children:[l.jsx("span",{children:"파동-입자 이중성"}),l.jsx("span",{children:t.includes(5)?"▲":"▼"})]}),t.includes(5)&&l.jsxs("div",{className:"accordion-content",children:[l.jsxs("p",{children:["양자역학의 중요한 개념 중 하나는 ",l.jsx("span",{style:{fontFamily:"Arial",color:"#B0E3FF"},children:"파동-입자 이중성"}),"입니다. 이는 빛과 물질이 파동과 입자 두 가지 성질을 동시에 가진다는 것입니다. 예를 들어, 전자는 파동처럼 간섭 패턴을 만들 수 있지만, 입자처럼 공간에서 특정 위치에 있을 수 있습니다. 파동-입자 이중성은 물질과 빛이 파동과 입자의 성질을 동시에 가진다는 개념입니다."]}),l.jsxs(Ew,{children:[l.jsx("div",{style:{flex:"1 1 40%",textAlign:"center"},children:l.jsx("img",{src:jw})}),l.jsx("div",{style:{flex:"1 1 60%",textAlign:"left"},children:l.jsx("p",{children:'빛을 생각해봅시다. 빛은 우리가 매일 접하는 것인데, 고전적인 관점에서 보면 빛은 파동처럼 퍼지며, 렌즈를 통과해 굴절되고 반사되기도 합니다. 예를 들어, 햇빛이 창문을 통해 들어올 때, 그 빛은 창문에서 굴절되고 반사되어 방 안에 퍼집니다. 이때 빛은 파동처럼 행동합니다. 그러나 빛을 어두운 방에서 레이저 포인터로 쏘면 그 레이저 포인터는 특정한 지점에만 빛이 도달하는 것을 볼 수 있습니다. 이때 빛은 마치 총알처럼 특정한 점에 도달하는 "입자"처럼 행동합니다. 이처럼, 빛은 파동처럼 창문에서 굴절되고 퍼질 수 있지만, 특정 조건에서는 입자처럼 특정한 지점에 정확히 도달하는 두 가지 성질을 동시에 가집니다.'})})]})]})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${t.includes(6)?"active":""}`,onClick:()=>r(6),children:[l.jsx("span",{children:"양자 얽힘"}),l.jsx("span",{children:t.includes(6)?"▲":"▼"})]}),t.includes(6)&&l.jsxs("div",{className:"accordion-content",children:[l.jsxs("p",{children:["양자 얽힘은 ",l.jsx("span",{style:{fontFamily:"Arial",color:"#B0E3FF"},children:"두 개 이상의 입자가 서로 강하게 연결되어 있는 상태"}),"를 말합니다. 얽힌 입자들은 멀리 떨어져 있어도 얽혀 있어, 서로의 상태에 영향을 미칠 수 있습니다."]}),l.jsx("p",{children:'양자 얽힘에서는 두 입자가 얽힌 상태에 있으면, 한 입자의 상태가 결정되는 순간 다른 입자의 상태도 그에 맞춰 즉각적으로 결정됩니다. 얽힘 상태에서는 물리적으로 떨어져 있어도 정보가 "순간적으로" 전해지는 것처럼 보입니다.'}),l.jsx("div",{style:{textAlign:"center"},children:l.jsx(bf,{style:{cursor:"pointer"},onClick:i=>e("/coinentanglement"),children:" 예시 보기"})})]})]})]}),l.jsxs(Cw,{children:[l.jsx(mm,{href:"/industry",rel:"양자정보기술 백서",style:{marginRight:"2%"},children:"양자정보기술 백서"}),l.jsx(hw,{href:"/QuantumTimeline",rel:"양자타임라인",children:"양자 타임라인"})]})]})};function Iw(){return l.jsx(l.Fragment,{children:l.jsx(Tw,{})})}const Fl=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 160vh;
  margin-top: -20%;
  margin-bottom: -20%;
  background-color: #eee;
    @media (max-width: 700px) {
    margin-top:-50%;
    }
`,uc=w.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
    @media (max-width: 700px) {
    margin-left:3%;
    font-size:20px;
    margin-top:-100%;
    padding:10px;
    }
`,wr=w.button`
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

`,cc=w.div`
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
`;w.div`
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
`;const dc=w.div`
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
`,tr=w.button`
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

`,fc="/assets/sad-BYYytyiN.svg",zw=()=>{const e=[{question:"양자 얽힘 현상은 거리에 상관없이 두 입자가 서로 연결된 상태를 유지하는 것을 의미한다.",correctAnswer:"O",explanation:"양자 얽힘은 두 입자가 멀리 떨어져 있어도 서로의 상태가 연관된 상태를 유지하는 현상입니다. 한 입자의 상태가 변하면 즉시 다른 입자의 상태도 변합니다."},{question:"불확정성의 원리를 최초로 밝힌 사람은 하이젠베르크이다",correctAnswer:"O",explanation:"불확정성의 원리를 최초로 밝힌 사람은 하이젠베르크이다"},{question:"진인프라의 설립일은 2006년 5월 4일이다.",correctAnswer:"O",explanation:"진인프라의 설립일은 2006년 5월 4일이다."},{question:"양자란 화학 원소로서의 특성을 잃지 않는 범위에서 도달할 수 있는 물질의 기본적인 최소입자이다.",correctAnswer:"X",explanation:'해당 설명은 "원자"에 대한 설명으로, 양자란 더 이상 나눌 수 없는 에너지의 최소량의 단위이다'},{question:"양자 컴퓨터는 모든 문제를 일반 컴퓨터보다 빠르게 해결할 수 있다.",correctAnswer:"X",explanation:" 양자 컴퓨터는 특정한 문제, 특히 복잡한 최적화 문제나 암호 해독 등에서 더 뛰어난 성능을 발휘합니다. "},{question:"슈뢰딩거의 고양이 실험에서 고양이는 살았다.",correctAnswer:"X",explanation:'양자역학의 해석에 따르자면 고양이의 생사 여부를 확인해보기 전까지는 고양이의 상태를 살아있으면서도 동시에 죽어있는 상태라고 규정하기 때문에 정답은 "알 수 없다"이다.'}],[t,n]=b.useState(0),[r,i]=b.useState(0),[o,s]=b.useState(!1),[a,u]=b.useState(""),[c,h]=b.useState(""),[f,g]=b.useState(!1),x=v=>{const j=e[t];let p;v===j.correctAnswer?(i(r+1),u("정답입니다!"),p=1e3,h("")):(u("오답입니다!"),h(j.explanation),p=4e3),s(!0),setTimeout(()=>{s(!1),t<e.length-1?n(t+1):g(!0)},p)},y=Ye();return l.jsx(Fl,{children:f?l.jsxs(dc,{children:[l.jsx("h2",{children:"퀴즈 완료!"}),l.jsxs("p",{children:["총 ",l.jsxs("span",{style:{color:"#0015ff"},children:[e.length,"문제"]})," 중 ",l.jsxs("span",{style:{color:"#0015ff"},children:[r,"문제"]})," 맞추셨습니다."]}),r<4?l.jsx("img",{src:fc,alt:"Genie1"}):l.jsx("img",{src:hr,alt:"Genie2"}),l.jsx(tr,{onClick:()=>y("/quizmain"),children:" 처음으로 "})]}):l.jsxs(l.Fragment,{children:[l.jsx(uc,{children:e[t].question}),l.jsxs("div",{children:[l.jsx(wr,{onClick:()=>x("O"),children:"O"}),l.jsx(wr,{onClick:()=>x("X"),children:"X"})]}),o&&l.jsxs(cc,{children:[l.jsx("p",{children:a}),c&&l.jsx("small",{children:c})]})]})})};function Lw(){return l.jsx(l.Fragment,{children:l.jsx(zw,{})})}const Rw=()=>{const e=Ye();return l.jsxs(Fl,{children:[l.jsx(tr,{onClick:()=>e("/quiz"),children:" 기초 퀴즈"}),l.jsx(tr,{onClick:()=>e("/medium"),children:" 중급 퀴즈"}),l.jsx(tr,{onClick:()=>e("/advanced"),children:" 고급 퀴즈"})]})};function Mw(){return l.jsx(l.Fragment,{children:l.jsx(Rw,{})})}const Nw=()=>{const e=[{question:"양자 얽힘 상태에 있는 두 입자는 한 입자의 상태가 바뀌면 즉시 다른 입자의 상태도 바뀐다.",correctAnswer:"O",explanation:"양자 얽힘은 두 입자가 서로 먼 거리에 떨어져 있어도 서로 연결된 상태를 유지하는 현상입니다. 한 입자의 상태가 변화하면 즉시 다른 입자의 상태도 바뀝니다. "},{question:"불확정성 원리는 입자의 위치와 속도를 동시에 정확히 측정할 수 있다는 이론이다",correctAnswer:"X",explanation:"불확정성 원리는 입자의 위치와 속도를 동시에 정확히 측정할 수 없다는 원리입니다. 위치를 정확히 알수록 속도에 대한 정보는 불확실해집니다."},{question:"양자 상태는 외부 관측이 이루어지면 즉시 붕괴된다.",correctAnswer:"O",explanation:"양자 상태는 관측에 의해 결정됩니다. 관측이 이루어지면 입자의 상태가 고정되어 양자 중첩 상태는 붕괴됩니다."},{question:"양자 터널링은 입자가 에너지를 충분히 갖고 있을 때만 장벽을 통과할 수 있는 현상이다.",correctAnswer:"X",explanation:"양자 터널링은 입자가 에너지 장벽을 넘을 수 없을 때도 통과하는 현상입니다. 이는 고전적인 물리학으로 설명할 수 없는 양자적 현상입니다."},{question:"양자 얽힘을 이용하면 정보를 빛의 속도보다 빠르게 전달할 수 있다",correctAnswer:"X",explanation:"양자 얽힘은 입자의 상태 변화를 즉시 반영하지만, 이를 통해 실제 정보를 빛의 속도보다 빠르게 전달할 수는 없습니다."},{question:"양자역학에서 파동함수는 입자의 위치를 정확히 예측해준다",correctAnswer:"X",explanation:"파동함수는 입자의 위치를 정확히 예측하는 것이 아니라, 입자가 특정 위치에 있을 확률을 나타냅니다."}],[t,n]=b.useState(0),[r,i]=b.useState(0),[o,s]=b.useState(!1),[a,u]=b.useState(""),[c,h]=b.useState(""),[f,g]=b.useState(!1),x=v=>{const j=e[t];let p;v===j.correctAnswer?(i(r+1),u("정답입니다!"),h(""),p=1e3):(u("오답입니다!"),h(j.explanation),p=5e3),s(!0),setTimeout(()=>{s(!1),t<e.length-1?n(t+1):g(!0)},p)},y=Ye();return l.jsx(Fl,{children:f?l.jsxs(dc,{children:[l.jsx("h2",{children:"퀴즈 완료!"}),l.jsxs("p",{children:["총 ",l.jsxs("span",{style:{color:"#0015ff"},children:[e.length,"문제"]})," 중 ",l.jsxs("span",{style:{color:"#0015ff"},children:[r,"문제"]})," 맞추셨습니다."]}),r<4?l.jsx("img",{src:fc,alt:"Genie1"}):l.jsx("img",{src:hr,alt:"Genie2"}),l.jsx(tr,{onClick:()=>y("/quizmain"),children:" 처음으로 "})]}):l.jsxs(l.Fragment,{children:[l.jsx(uc,{children:e[t].question}),l.jsxs("div",{children:[l.jsx(wr,{onClick:()=>x("O"),children:"O"}),l.jsx(wr,{onClick:()=>x("X"),children:"X"})]}),o&&l.jsxs(cc,{children:[l.jsx("p",{children:a}),c&&l.jsx("small",{children:c})]})]})})};function Aw(){return l.jsx(l.Fragment,{children:l.jsx(Nw,{})})}const Dw=()=>{const e=[{question:"양자 게이트는 고전적인 논리 게이트와 동일한 방식으로 동작한다",correctAnswer:"X",explanation:"양자 게이트는 큐비트의 상태를 변화시키는 양자 연산을 수행하며, 고전적인 논리 게이트와는 다른 방식으로 동작합니다."},{question:"양자 컴퓨터는 오류가 발생할 가능성이 고전 컴퓨터보다 높다.",correctAnswer:"O",explanation:"양자 컴퓨터는 큐비트의 민감한 상태 때문에 오류가 발생할 가능성이 높습니다. 이를 해결하기 위해 오류 정정 기술이 연구되고 있습니다."},{question:"양자 상태의 코히런스(coherence)는 환경과의 상호작용에 의해 손실되며, 이는 양자 디코히런스(decoherence)라고 불린다.",correctAnswer:"O",explanation:"코히런스는 양자 상태가 다른 상태들과 정렬된 특성을 말합니다.환경과의 상호작용에 의해 이 정렬이 깨지면 디코히런스가 발생하여 양자 상태의 정보를 잃게 됩니다."},{question:"양자 컴퓨터의 성능은 큐비트의 개수에 비례하여 선형적으로 증가한다",correctAnswer:"X",explanation:"큐비트가 추가될수록 양자 컴퓨터의 성능은 기하급수적으로 증가하며, 선형적으로 증가하는 것이 아닙니다."},{question:"양자 컴퓨터에서 큐비트의 상태를 측정하는 것은 양자 얽힘을 유지한 채로 이루어질 수 있다.",correctAnswer:"X",explanation:"큐비트의 상태를 측정하면 양자 얽힘 상태가 붕괴됩니다. 얽힌 상태에서는 측정이 이루어지면 더 이상 얽힌 상태를 유지할 수 없습니다. "},{question:"양자 상호작용에서는 양자 터널링 효과를 이용해 에너지 장벽을 넘지 않고도 전자가 이동할 수 있다.",correctAnswer:"O",explanation:' 양자 터널링은 고전 물리학적으로 넘을 수 없는 에너지 장벽을 양자역학적으로 입자가 "통과"할 수 있는 현상입니다. 이 현상은 반도체와 같은 분야에서도 중요한 역할을 합니다.'}],[t,n]=b.useState(0),[r,i]=b.useState(0),[o,s]=b.useState(!1),[a,u]=b.useState(""),[c,h]=b.useState(""),[f,g]=b.useState(!1),x=v=>{const j=e[t];let p;v===j.correctAnswer?(i(r+1),u("정답입니다!"),h(""),p=1e3):(u("오답입니다!"),h(j.explanation),p=5e3),s(!0),setTimeout(()=>{s(!1),t<e.length-1?n(t+1):g(!0)},p)},y=Ye();return l.jsx(Fl,{children:f?l.jsxs(dc,{children:[l.jsx("h2",{children:"퀴즈 완료!"}),l.jsxs("p",{children:["총 ",l.jsxs("span",{style:{color:"#0015ff"},children:[e.length,"문제"]})," 중 ",l.jsxs("span",{style:{color:"#0015ff"},children:[r,"문제"]})," 맞추셨습니다."]}),r<5?l.jsx("img",{src:fc,alt:"Genie1"}):l.jsx("img",{src:hr,alt:"Genie2"}),l.jsx(tr,{onClick:()=>y("/quizmain"),children:" 처음으로 "})]}):l.jsxs(l.Fragment,{children:[l.jsx(uc,{children:e[t].question}),l.jsxs("div",{children:[l.jsx(wr,{onClick:()=>x("O"),children:"O"}),l.jsx(wr,{onClick:()=>x("X"),children:"X"})]}),o&&l.jsxs(cc,{children:[l.jsx("p",{children:a}),c&&l.jsx("small",{children:c})]})]})})};function Fw(){return l.jsx(l.Fragment,{children:l.jsx(Dw,{})})}const wm="/assets/idq-D5yb6MGO.svg",Sm="/assets/ibm-CNkfYoK9.svg",jm="/assets/dwave-KW-mNalY.svg",cl="data:image/svg+xml,%3csvg%20width='1920'%20height='1080'%20viewBox='0%200%201920%201080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_22_433)'%3e%3crect%20width='1080'%20height='1920'%20transform='matrix(0%20-1%201%200%200%201080)'%20fill='%230B212E'/%3e%3cg%20filter='url(%23filter0_f_22_433)'%3e%3ccircle%20cx='1713.5'%20cy='132.5'%20r='449.5'%20transform='rotate(-90%201713.5%20132.5)'%20fill='%23909BA4'/%3e%3c/g%3e%3cg%20filter='url(%23filter1_f_22_433)'%3e%3ccircle%20cx='211.5'%20cy='129.5'%20r='449.5'%20transform='rotate(-90%20211.5%20129.5)'%20fill='%230B212E'/%3e%3c/g%3e%3cg%20filter='url(%23filter2_f_22_433)'%3e%3ccircle%20cx='964.5'%20cy='1006.5'%20r='449.5'%20transform='rotate(-90%20964.5%201006.5)'%20fill='%230B212E'%20fill-opacity='0.2'/%3e%3c/g%3e%3cg%20filter='url(%23filter3_f_22_433)'%3e%3ccircle%20cx='628.5'%20cy='662.5'%20r='449.5'%20transform='rotate(-90%20628.5%20662.5)'%20fill='%230B212E'%20fill-opacity='0.6'/%3e%3c/g%3e%3cg%20filter='url(%23filter4_f_22_433)'%3e%3ccircle%20cx='1301.5'%20cy='398.5'%20r='449.5'%20transform='rotate(-90%201301.5%20398.5)'%20fill='%230B212E'/%3e%3c/g%3e%3ccircle%20cx='1514'%20cy='189'%20r='24'%20fill='%2318A8FB'/%3e%3cg%20filter='url(%23filter5_f_22_433)'%3e%3ccircle%20cx='1538.5'%20cy='870.5'%20r='449.5'%20transform='rotate(-90%201538.5%20870.5)'%20fill='%23394F5C'/%3e%3c/g%3e%3ccircle%20cx='303'%20cy='530'%20r='14'%20fill='%23B2E3FF'/%3e%3ccircle%20cx='1474'%20cy='615'%20r='48'%20fill='%2318A8FB'%20fill-opacity='0.08'/%3e%3ccircle%20cx='1474'%20cy='615'%20r='23.2727'%20fill='%230E2938'%20stroke='%2318A8FB'%20stroke-width='2.90909'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_22_433'%20x='764'%20y='-817'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter1_f_22_433'%20x='-738'%20y='-820'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter2_f_22_433'%20x='15'%20y='57'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter3_f_22_433'%20x='-321'%20y='-287'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter4_f_22_433'%20x='352'%20y='-551'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter5_f_22_433'%20x='589'%20y='-79'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cclipPath%20id='clip0_22_433'%3e%3crect%20width='1080'%20height='1920'%20fill='white'%20transform='matrix(0%20-1%201%200%200%201080)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",bm="/assets/rigetti-B38wHO1L.svg",km="/assets/honeywell-DtZFAC9P.svg",Cm="/assets/google-D4sFVtJt.svg",Em="/assets/microsoft-pU5O44ch.svg",_m="/assets/jininfra-BFpSQJ6H.svg",Pm="/assets/intel-D1wbAq3Q.svg",Om="/assets/alibaba-Dbpd8-e1.svg",Bw="/assets/banner1-ghMK8vM5.svg",$w="/assets/banner2-IBbiRC_e.svg",Qw="/assets/banner3-4obiNHZT.svg",Uw=()=>{const e=Ye(),t=[{title:"IBM",subtitle:"IBM Quantum은 클라우드 기반 양자 컴퓨팅 서비스로, 개발자와 연구자들에게 실용적인 양자 컴퓨팅을 제공합니다.",imgSrc:Sm,route:"ibm"},{title:"D-Wave",subtitle:"D-Wave는 양자 어닐링(annealing) 기반 시스템을 제공하며, 최적화 문제 해결에 특화된 양자 컴퓨터를 개발합니다.",imgSrc:jm,route:"dwave"},{title:"Rigetti Computing",subtitle:"Rigetti Computing은 양자 회로 기반 시스템을 개발하며, 하이브리드 양자-클래식 컴퓨팅을 통해 양자 컴퓨팅을 상용화하려고 합니다.",imgSrc:bm,route:"rigetti"},{title:"Honeywell",subtitle:"Honeywell Quantum Solutions는 이온 트랩 기술을 사용한 양자 컴퓨터를 개발하여 정밀한 양자 계산을 제공합니다.",imgSrc:km,route:"honeywell"},{title:"Google",subtitle:"Google Quantum AI는 시너지 효과를 노리며, 인공지능과 양자 컴퓨팅의 결합을 통해 양자 우월성을 목표로 연구 중입니다.",imgSrc:Cm,route:"google"},{title:"Microsoft",subtitle:"Microsoft는 Azure Quantum 플랫폼을 통해 클라우드 기반 양자 컴퓨팅 서비스와 도구를 제공하며, 트래픽슘 기반의 양자 컴퓨터를 개발 중입니다.",imgSrc:Em,route:"microsoft"},{title:"Intel",subtitle:"Intel은 양자 컴퓨팅 하드웨어와 소프트웨어 생태계를 구축하고 있으며, 상용화 가능한 양자 프로세서를 개발 중입니다.",imgSrc:Pm,route:"intel"},{title:"Alibaba",subtitle:"Alibaba는 클라우드 기반의 양자 컴퓨팅 서비스를 제공하며, 양자 암호화 및 인공지능 연구에 집중하고 있습니다.",imgSrc:Om,route:"alibaba"},{title:"JinInfra",subtitle:"JinInfra는 양자 네트워크 인프라와 보안 솔루션을 개발하여 양자 통신 기술 상용화에 주력하고 있습니다.",imgSrc:_m,route:"jininfra"},{title:"IDQ",subtitle:"IDQ는 양자 키 분배(QKD) 기반 보안 솔루션을 제공하며, 양자 암호화 및 통신 보안 기술을 연구하고 있습니다.",imgSrc:wm,route:"idq"}],n=b.useRef(null),r=u=>{e(`/business/${u.toLowerCase()}`)},i={dots:!0,infinite:!1,speed:500,slidesToShow:1,centerMode:!0,centerPadding:"30px"},o=()=>{n.current&&n.current.slickPause()},s=()=>{n.current&&n.current.slickPlay()},a=u=>{e(`/company/${u}`)};return l.jsxs(oc,{children:[l.jsxs(lc,{children:[l.jsx(sc,{src:cl,alt:"banner image"}),l.jsx(ac,{children:"양자 관련 주요 기업들"}),l.jsx(J3,{children:l.jsx(Mx,{style:{margin:"0 auto"},size:24})})]}),l.jsx(Os,{style:{marginTop:"5%"},children:"주요 기업들"}),l.jsx(ew,{children:l.jsxs(rw,{onMouseEnter:o,onMouseLeave:s,children:[t.map((u,c)=>l.jsxs(wf,{onClick:()=>a(u.route),children:[l.jsx(Sf,{src:u.imgSrc,alt:u.title}),l.jsxs(jf,{children:[l.jsx("p",{className:"title",children:u.title}),l.jsx("p",{className:"subtitle",children:u.subtitle})]})]},c)),t.map((u,c)=>l.jsxs(wf,{children:[l.jsx(Sf,{src:u.imgSrc,alt:u.title}),l.jsxs(jf,{children:[l.jsx("p",{className:"title",children:u.title}),l.jsx("p",{className:"subtitle",children:u.subtitle})]})]},c+t.length))]})}),l.jsxs("div",{style:{padding:"50px 0"},children:[l.jsx(Os,{children:"About"}),l.jsxs(iw,{children:[l.jsx(ow,{src:cl,alt:"Nusantara Image"}),l.jsxs(lw,{children:[l.jsx(sw,{children:"Jininfra"}),l.jsxs(aw,{children:[l.jsx("p",{children:"진인프라는 ICT 및 클라우드 기술을 중심으로 다양한 서비스를 제공하는 기업으로,"}),l.jsx("p",{children:"주요 사업 분야로는 네트워크 구축, 클라우드 솔루션, 정보보안, 유지보수 서비스, e-커머스, 그리고 공사 관련 솔루션이 있습니다. "})]})]})]})]}),l.jsx(Os,{children:"양자 사업 소개"}),l.jsx(tw,{children:l.jsxs(X3,{ref:n,...i,children:[l.jsxs("div",{onClick:()=>r("Finance"),children:[l.jsx(Ts,{src:Bw,alt:"Finance"}),l.jsx("p",{children:"금융"})]}),l.jsxs("div",{onClick:()=>r("Chemistry"),children:[l.jsx(Ts,{src:$w,alt:"Chemistry"}),l.jsx("p",{children:"화학 및 기타 과학"})]}),l.jsxs("div",{onClick:()=>r("Logistics"),children:[l.jsx(Ts,{src:Qw,alt:"Logistics"}),l.jsx("p",{children:"물류 및 최적화"})]})]})})]})};function Ww(){return l.jsx(l.Fragment,{children:l.jsx(Uw,{})})}const Hw=w.div`
    margin-top: -7%;
    padding-top: 5%;
    background-color: #eee;
`,Gw=w.div`
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
    margin-top:5%;
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
}
`,Vw=w.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);  /* 4열 그리드 */
  gap: 20px;  
  margin-top: 3%;
  margin-bottom: 1%;
  padding: 2%;


  @media (max-width: 700px) {
    grid-template-columns: 1fr;  /* 작은 화면에서는 1열로 표시 */
  }
`,Kw=w.div`
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
    @media (max-width: 700px) {
        display: flex;
      } 
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
`,qw=w.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #5caafe;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 20px;
  margin-left: 2%;
  border-radius: 25px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  &:hover {
    background-color: #2b89ec;
  }
    @media (max-width: 700px) {
        display: flex;
      } 

`,kf=({articles:e})=>l.jsx(Vw,{children:e.map((t,n)=>l.jsx(Kw,{children:l.jsxs("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",children:[l.jsx("img",{src:t.thumbnail,alt:t.title}),l.jsx("h3",{children:t.title.length>30?`${t.title.slice(0,30)}...`:t.title})]})},n))}),Yw=()=>{const e=[{title:"127큐비트 IBM 양자컴퓨터, 연세대서 국내 첫 가동",thumbnail:"https://img.etnews.com/news/article/2024/11/20/news-p.v1.20241120.e311d51dfa2f4a3e9ec7e3abd4487c24_P1.jpg",url:"https://www.etnews.com/20241120000271"},{title:"한국 양자기술 기업 SDT, 초전도 양자컴 생산 나서",thumbnail:"https://image.dongascience.com/Photo/2024/11/125a2f11fb9b5e7e689c3553f15a289e.jpg",url:"https://www.dongascience.com/news.php?idx=68541"},{title:"국가기술표준원, 양자기술 국제표준 선점 전략 청사진 마련",thumbnail:"https://www.boannews.com/media/upFiles2/2024/11/825356645_385.jpg",url:"https://m.boannews.com/html/detail.html?mtype=3&tab_type=6&idx=134347"},{title:"키사이트, 구글 퀀텀 AI와 협력해 양자 회로 시뮬레이션 출시",thumbnail:"https://www.hellot.net/data/photos/20241147/art_17321490211573_6be184.jpg",url:"https://www.hellot.net/news/article.html?no=95575"},{title:"KT, '하이브리드 양자보안 VPN' 기술 실증…이중보안 구현",thumbnail:"https://image.newsis.com/2024/11/19/NISI20241119_0001706762_web.jpg?rnd=20241119090950",url:"https://www.newsis.com/view/NISX20241119_0002964011"},{title:"큐비트 대신 '큐디트'로 구현한 양자컴, 16차원 계산 성공",thumbnail:"https://image.dongascience.com/Photo/2024/11/450054b59fc6e3b494019d3e5272e60f.jpg",url:"https://m.dongascience.com/news.php?idx=68315"},{title:"표준硏, 양자 과학기술 연구 'K-퀀텀 국제협력본부' 운영",thumbnail:"https://img2.yna.co.kr/etc/inner/KR/2024/11/18/AKR20241118035500063_01_i_P4.jpg",url:"https://www.yna.co.kr/view/AKR20241118035500063?input=1195m"},{title:"서울대, 하이브리드 양자컴퓨팅 센터 (IRC) 개소식 개최",thumbnail:"https://cdn.news.unn.net/news/photo/202411/571300_385789_341.jpg",url:"https://news.unn.net/news/articleView.html?idxno=571300"}],t=[{title:"2025년 KAIST-MIT Quantum Winter Camp",thumbnail:"https://quantumschool.kaist.ac.kr/_files/board/20241104//bdbb84d4aaddc3ab3580bb4b3b01b6a0.jpg",url:"https://quantumschool.kaist.ac.kr/notice/view/id/30#u"},{title:"2024 DIPS GLOBAL TECH CON(양자기술) 행사",thumbnail:"https://eventusstorage.blob.core.windows.net/evs/Image/2024dips/94529/ProjectInfo/Cover/889059be4f7f43cb83a3c445b4a7b2a4.jpg",url:"https://event-us.kr/2024dips/event/94529"},{title:"2024 제6회 양자정보세미나",thumbnail:"https://qcenter.kr/uploaded/summernote/202411/0836bb7fd39848b9d214e91ae04439bc.png",url:"https://qcenter.kr/sub/sub06_03.php?boardid=seminar&mode=view&idx=89&sk=&sw=&offset=&category="},{title:"2024 퀀텀 영상 콘텐츠 공모전",thumbnail:"https://qcenter.kr/uploaded/summernote/202411/e893e963d4cc47d701e1be2f513c4f11.jpg",url:"https://qcenter.kr/sub/sub06_03.php?boardid=seminar&mode=view&idx=84&sk=&sw=&offset=&category="}],[n,r]=b.useState(null),i=o=>{r(n===o?null:o)};return Ye(),l.jsx(Hw,{children:l.jsxs(Gw,{children:[l.jsx("h1",{children:"양자 기술 동향"}),l.jsx("hr",{}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${n===0?"active":""}`,onClick:()=>i(0),children:[l.jsx("span",{children:"글로벌 시장 동향"}),l.jsx("span",{children:n===0?"▲":"▼"})]}),n===0&&l.jsxs("div",{className:"accordion-content",children:[l.jsx("p",{children:"2023년 기준, 전 세계 양자기술 시장 규모는 약 20.65억 달러로 추산되며, 연평균 22.7%의 성장률을 보일 것으로 예상됩니다."}),l.jsx("br",{}),l.jsxs("p",{children:[l.jsx("span",{style:{color:"#B0E3FF"},children:"미국"}),"에서는 2019년부터 5년간 최대 13억 달러를 양자기술 연구개발에 투자하고 있으며, 국방부와 정보기관, 연구소가 중심이 되어 개발 사업을 본격화하고 있습니다. ",l.jsx("br",{}),l.jsx("br",{}),l.jsx("span",{style:{color:"#B0E3FF"},children:"중국"}),"은 세계 최대 규모의 국립양자정보과학연구소를 설립하고, 2018년부터 2022년까지 ",l.jsx("br",{}),"약 1천억 위안(약 16.5조 원)을 투자하여 양자통신 분야에서 두각을 나타내고 있습니다. ",l.jsx("br",{}),l.jsx("br",{}),l.jsx("span",{style:{color:"#B0E3FF"},children:"유럽연합"}),"에서는 Quantum Flagship' 프로그램을 통해 양자컴퓨팅, 양자통신 등 양자응용연구와 상용화를 추진하고 있으며, 2028년까지 10억 유로를 투자하여 양자 연구 리더십 유지와 산업 경쟁력 향상을 목표로 하고 있습니다."]})]})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${n===1?"active":""}`,onClick:()=>i(1),children:[l.jsx("span",{children:"국내외 정책 동향"}),l.jsx("span",{children:n===1?"▲":"▼"})]}),n===1&&l.jsxs("div",{className:"accordion-content",children:[l.jsx("p",{children:l.jsx("span",{style:{color:"#B0E3FF"},children:"국내 정책"})}),l.jsx("p",{children:"한국 정부는 2021년 '양자기술 연구개발 투자전략'을 수립하여 2030년대 양자 기술 4대 강국 진입을 목표로 중장기 비전을 제시하였습니다."}),l.jsx("br",{}),l.jsx("p",{children:l.jsx("span",{style:{color:"#B0E3FF"},children:"국외 정책"})}),l.jsxs("p",{children:[" 미국, 중국, 유럽 등 주요 국가들은 양자 기술의 전략적 중요성을 인식하고 대규모 투자를 진행하고 있습니다.",l.jsx("br",{}),"미국은 양자과학기술을 미래 게임체인저로 인식하고, 2019년부터 2022년까지 약 4조 원을 투자하여 양자기술 전략화 경쟁의 주도권 확보에 나서고 있습니다.",l.jsx("br",{})," 또한, 양자네트워크 전략 비전을 통해 장기 20년간의 양자네트워크 비전을 제시하였습니다."]})]})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${n===2?"active":""}`,onClick:()=>i(2),children:[l.jsx("span",{children:"양자 기술 R&D 동향"}),l.jsx("span",{children:n===2?"▲":"▼"})]}),n===2&&l.jsxs("div",{className:"accordion-content",children:[l.jsxs("p",{children:["양자 기술의 연구개발은 ",l.jsx("span",{style:{color:"#B0E3FF"},children:"양자 컴퓨팅, 양자 통신, 양자 센싱"})," 등 다양한 분야에서 활발히 진행되고 있습니다.",l.jsx("br",{}),"국내에서는 연세대학교가 127큐비트 성능의 'IBM 퀀텀 시스템 원'을 도입하여 양자 컴퓨팅 연구를 선도하고 있습니다"]}),l.jsx("br",{}),l.jsxs("p",{children:["유럽 주요국은 양자 과학기술 분야에서 공동연구 및 인력교류 등 ",l.jsx("span",{style:{color:"#B0E3FF"},children:"국가 간 협력사업"}),"을 추진하고 있습니다. 이를 통해 양자기술의 발전과 산업화를 촉진하고 있습니다."]}),l.jsx("br",{}),l.jsxs("p",{children:["정부는 국내 산·학·연이 해외 우수 연구기관과 협업할 수 있도록 벨기에에 ",l.jsx("span",{style:{color:"#B0E3FF"},children:"'한-유럽 양자 과학센터'"}),"를 개소하였습니다. 이를 통해 국제 협력을 강화하고 양자 과학기술의 발전을 도모하고 있습니다."]})]})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${n===3?"active":""}`,onClick:()=>i(3),children:[l.jsx("span",{children:"양자 기술 산업 생태계"}),l.jsx("span",{children:n===3?"▲":"▼"})]}),n===3&&l.jsxs("div",{className:"accordion-content",children:[l.jsx("p",{children:"양자 기술 산업 생태계는 기업, 연구기관, 정부 등이 협력하여 발전하고 있습니다."}),l.jsx("br",{}),l.jsxs("p",{children:["국내에서는  ",l.jsx("span",{style:{color:"#B0E3FF"},children:"양자산업생태계지원센터(K-QIC)"}),"가 설립되어 양자 기술 사업화 및 혁신기업 육성, 양자 정보통신 테스트베드 기반 시험·검증 등을 지원하고 있습니다. "]}),l.jsx("br",{}),l.jsxs("p",{children:[" 서울시와 한국과학기술연구원(KIST)은 양자 산업 기반을 구축하기 위해 ",l.jsx("span",{style:{color:"#B0E3FF"},children:"'양자기술 산업전문과정'"}),"을 개설하여 운영하고 있습니다. 이를 통해 양자 기술의 이해와 활용법을 습득하여 연구개발과 사업화를 활성화하고자 합니다."]}),l.jsx("br",{}),l.jsx("p",{children:"이러한 동향은 양자 기술이 미래 산업의 핵심으로 부상하고 있음을 보여주며, 각국의 적극적인 투자와 연구개발이 지속되고 있습니다."})]})]}),l.jsxs("div",{children:[l.jsx("h1",{children:"양자 기술 관련 뉴스"}),l.jsx("hr",{}),l.jsx(kf,{articles:e}),l.jsx("a",{href:"https://www.kqic.kr/main/q_info_tech_whitepaper_2023.pdf",download:"2023 양자정보기술 백서.pdf",children:l.jsx(qw,{children:"2023 양자정보기술 백서 다운로드 하기 📥"})})]}),l.jsxs("div",{children:[l.jsx("h1",{children:"양자 관련 행사 정보"}),l.jsx("hr",{}),l.jsx(kf,{articles:t})]})]})})};function Xw(){return l.jsx(l.Fragment,{children:l.jsx(Yw,{})})}const Zw=w.div`
    margin-top: -5%;
    padding-top: 5%;
    background-color: #eee;
`,Jw=w.div`
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
    font-size: 1.9rem;
    color: #eee;
    line-height: 1.8;
    border-top: 1px solid #007bff;
    max-height: 330px; 
    overflow-y: auto;  
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

  

  /* Flexbox to center the video */
  iframe {
    display: block;
    margin-left: 25%;
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
`,Tm=w.div`
    height: 320vh;
    max-height: 320vh;
    margin-top: -5%;
    margin-bottom: 20%;
    padding-top: 5%;
    background-color: #eee;

    h2{
        margin-top:10px;
        font-size:2rem;
        margin-left:3%;
    }

`,Im=w.div`
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
  span{
    background: linear-gradient(to top, #D0E7FE 40%, transparent 10%);
  }
  h3{
    margin-left: 2%;
    margin-top:5%;
    font-size: 2rem;
  }
`,zm=w.div`
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
`,Cf=w.button`
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
  cursor:pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  &:hover {
    background-color: #0056b3;
  }
`,eS=()=>{const[e,t]=b.useState(null),n=i=>{t(e===i?null:i)},r=Ye();return l.jsx(Zw,{children:l.jsxs(Jw,{children:[l.jsx("h1",{children:"양자 활용"}),l.jsx("hr",{}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${e===0?"active":""}`,onClick:()=>n(0),children:[l.jsx("span",{children:"양자 컴퓨터"}),l.jsx("span",{children:e===0?"▲":"▼"})]}),e===0&&l.jsxs("div",{className:"accordion-content",children:[l.jsxs("p",{children:["기존 디지털컴퓨터와는 달리 양자역학의 중첩 상태를 활용한 ",l.jsx("span",{style:{color:"#B0E3FF"},children:"큐비트(Quantum bit)를 기본 단위로  0과 1 두 상태를 동시에 처리할 수 있다."})]}),l.jsx("br",{})," ",l.jsx("p",{children:"이 같은 특성 때문에 양자컴퓨터는 기존 컴퓨터보다 월등한 계산 속도와 연산 처리 능력을 갖는데, 이는 슈퍼컴퓨터보다 1000배 이상 빠른 연산이 가능해 인공지능(AI), 의료·제약, 암호통신 등 다양한 분야에 활용될 수 있다."}),l.jsx("div",{style:{textAlign:"center",marginTop:"3%"},children:l.jsx(Cf,{onClick:i=>r("/computing"),children:" 양자 컴퓨팅과 계산 복잡도 이론"})}),l.jsx("hr",{}),l.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/gjp9301in0U",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${e===1?"active":""}`,onClick:()=>n(1),children:[l.jsx("span",{children:"양자 암호통신"}),l.jsx("span",{children:e===1?"▲":"▼"})]}),e===1&&l.jsxs("div",{className:"accordion-content",children:[l.jsx("p",{children:"양자암호통신 기술은 통신상의 보안을 자연의 기본원리인 양자역학의 법칙에 의해서 보장하므로 도청이나 감청이 절대적으로 불가능한 차세대 통신보안 기술로서 최근 크게 주목받고 있다."}),l.jsx("br",{}),l.jsxs("p",{children:["즉, 양자암호통신 기술은 ",l.jsx("span",{style:{color:"#B0E3FF"},children:"“양자 복제불가능성”"}),"과 같은 양자물리학의 법칙에 기초해서 송신자와 수신자 사이에 암호 키(일회용 난수표)를 절대적으로 안전하게 실시간으로 분배하는 기술로서 ",l.jsx("span",{style:{color:"#B0E3FF"},children:"“양자 키 분배 기술”"}),"로도 알려져 있다."]}),l.jsx("br",{}),l.jsx("hr",{}),l.jsx("h1",{children:"양자 암호화의 유형"}),l.jsx("h2",{children:l.jsx("span",{style:{boxShadow:"inset 0 -20px 0 rgba(90, 158, 207, 0.5)"},children:"양자 키 분배(QKD)"})}),l.jsxs("p",{children:["양자 키 분배(Quantum Key Distribution; QKD) 시스템은 보안 데이터를  ",l.jsx("span",{style:{color:"#B0E3FF"},children:"직접 암호화하는 것이 아니라, 두 사람이 함께 사용할 비밀 키를 안전하게 공유하는 방법이다."})]}),l.jsx("p",{children:"미세한 자극에도 상태가 변하는 양자의 물리적 특성을 활용해 대칭 암호키를 분배하는 기술이다. 제3자가 해킹할 수 없는 암호화된 비밀키를 만들어 보안이 필요한 송신자와 수신자에게 안전하게 공유한다."}),l.jsx("br",{}),l.jsx("h2",{children:l.jsx("span",{style:{boxShadow:"inset 0 -20px 0 rgba(90, 158, 207, 0.5)"},children:"양자내성암호(PQC)"})}),l.jsxs("p",{children:["양자내성암호(Post Quantum Cryptography; PQC)는 양자컴퓨터로도 풀어내는 데 수십억 년이 걸리는 ",l.jsx("span",{style:{color:"#B0E3FF"},children:"복잡한 수학 알고리즘을 사용하는 암호화 방식이다."})]}),l.jsx("br",{}),l.jsx("hr",{}),l.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/fF1cJ5F7ArI?si=9nIUWin5E9jQ6qRT",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${e===2?"active":""}`,onClick:()=>n(2),children:[l.jsx("span",{children:"양자 센서"}),l.jsx("span",{children:e===2?"▲":"▼"})]}),e===2&&l.jsxs("div",{className:"accordion-content",children:[l.jsxs("p",{children:["양자 센서의 기본 원리는  ",l.jsx("span",{style:{color:"#B0E3FF"},children:"센서와 탐지 대상 물체 사이의 상호작용을 통해 발생하는 미세한 양자 위상변화(Quantum Phase Accumulation)를 측정하는 것이다."}),"이때 중첩, 이중성, 얽힘과 같은 미시 세계의 양자역학적 특성들이 측정 기술로 활용된다."]}),l.jsx("br",{}),l.jsx("p",{children:"양자 센싱은 측정 대상과 센서의 종류에 따라 다양하게 분류되며, 일반적으로 큐비트와 같은 양자 시스템을 사용해 시간, 자기장 등의 물리량을 정밀하게 측정한다."}),l.jsx("hr",{}),l.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/jS6fiujLTzo?si=JBji-IeWWDn1tFDX",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${e===3?"active":""}`,onClick:()=>n(3),children:[l.jsx("span",{children:"산업별 양자 기술 활용 사례"}),l.jsx("span",{children:e===3?"▲":"▼"})]}),e===3&&l.jsxs("div",{className:"accordion-content",children:[l.jsxs("p",{children:[l.jsx("span",{style:{color:"#B0E3FF"},children:"1) 의료"}),l.jsx("br",{}),"신약 개발 : 분자의 복잡한 상호작용을 분석해 신약 개발 시간 단축",l.jsx("br",{}),"정밀 진단 : 양자 센서를 활용해 암 조기 진단 및 의료 기기 정밀도 향상"]}),l.jsx("hr",{}),l.jsxs("p",{children:[l.jsx("span",{style:{color:"#B0E3FF"},children:"2) 금융"}),l.jsx("br",{}),"투자 최적화 : 양자 컴퓨팅으로 금융 시장의 복잡한 데이터를 분석 ",l.jsx("br",{}),"거래 보안 강화 : 양자 암호화로 실시간 거래 보호"]}),l.jsx("hr",{}),l.jsxs("p",{children:[l.jsx("span",{style:{color:"#B0E3FF"},children:"3) 기후 및 에너지"}),l.jsx("br",{}),"지속 가능한 에너지 솔루션 : 태양광 및 풍력 발전의 효율성 최적화 ",l.jsx("br",{}),"기후 모델링 : 기후 변화에 대한 정확한 데이터 기반 시뮬레이션"]}),l.jsx("hr",{}),l.jsxs("p",{children:[l.jsx("span",{style:{color:"#B0E3FF"},children:"4) 물류 및 교통"}),l.jsx("br",{}),"최적 경로 계산 : 항공, 선박, 트럭등의 물류 네트워크 최적화를 통한 물류 시스템의 효율성 극대화 ",l.jsx("br",{})]}),l.jsx("hr",{}),l.jsxs("p",{children:[l.jsx("span",{style:{color:"#B0E3FF"},children:"5) 항공우주"}),l.jsx("br",{}),"양자 GPS : 전통적인 GPS보다 수십 배 더 정밀한 위치 추적 가능 ",l.jsx("br",{}),"우주 탐사 : 양자 기반의 초정밀 기기와 통신으로 우주선 운행 효율 향상"]}),l.jsx("hr",{}),l.jsx("div",{style:{textAlign:"center"},children:l.jsx(Cf,{onClick:i=>r("/example"),rel:"산업활용사례 더보기",children:"산업활용사례 더보기"})})]})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${e===4?"active":""}`,onClick:()=>n(4),children:[l.jsx("span",{children:"미래를 이끌 양자 기술 활용 트랜드"}),l.jsx("span",{children:e===4?"▲":"▼"})]}),e===4&&l.jsxs("div",{className:"accordion-content",children:[l.jsxs("p",{children:[l.jsx("span",{style:{color:"#B0E3FF"},children:"1) 양자 인터넷"}),l.jsx("br",{}),"양자 기술 기반의 초보안 네트워크 : 전 세계 데이터를 안전하게 연결하는 차세대 인터넷 개발"]}),l.jsx("hr",{}),l.jsxs("p",{children:[l.jsx("span",{style:{color:"#B0E3FF"},children:"2) 스마트 시티"}),l.jsx("br",{}),"IoT와 양자의 융합 : 양자 암호화로 스마트 시티의 보안 강화 및 자율주행차와 교통 관리 시스템 최적화"]}),l.jsx("hr",{}),l.jsxs("p",{children:[l.jsx("span",{style:{color:"#B0E3FF"},children:"3) 연구 및 개발"}),l.jsx("br",{}),"양자 컴퓨팅 교육 확대 : 기업과 학계에서 양자 기술 전문인력 양성 ",l.jsx("br",{}),"양자 클라우드 서비스 : IBM과 Google의 양자 컴퓨팅 클라우드 서비스"]}),l.jsx("hr",{})]})]})]})})};function tS(){return l.jsx(l.Fragment,{children:l.jsx(eS,{})})}const nS="data:image/svg+xml,%3csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='50'%20cy='50'%20r='50'%20fill='%23F1F5F9'/%3e%3cpath%20d='M48.25%2070C48.25%2070.9665%2049.0335%2071.75%2050%2071.75C50.9665%2071.75%2051.75%2070.9665%2051.75%2070H48.25ZM51.2374%2034.7626C50.554%2034.0791%2049.446%2034.0791%2048.7626%2034.7626L37.6256%2045.8995C36.9422%2046.5829%2036.9422%2047.691%2037.6256%2048.3744C38.309%2049.0578%2039.4171%2049.0578%2040.1005%2048.3744L50%2038.4749L59.8995%2048.3744C60.5829%2049.0578%2061.691%2049.0578%2062.3744%2048.3744C63.0578%2047.691%2063.0578%2046.5829%2062.3744%2045.8995L51.2374%2034.7626ZM51.75%2070L51.75%2036H48.25L48.25%2070H51.75Z'%20fill='%2336597D'/%3e%3c/svg%3e",rS=w.img`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  z-index: 9000;
  @media(max-width: 800px){
    width: 4.5rem;
    height: 4.5rem;
  }
`,iS=()=>{const e=()=>{window.scrollTo({top:0,behavior:"smooth"})};return l.jsx(l.Fragment,{children:l.jsx(rS,{onClick:e,src:nS,alt:"Scroll to top"})})},oS="/assets/message-D6wtI_nO.svg",lS="/assets/flag-DnSs5bf4.svg",sS="data:image/svg+xml,%3csvg%20width='744'%20height='619'%20viewBox='0%200%20744%20619'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_f_0_1)'%3e%3cellipse%20cx='352.58'%20cy='364.807'%20rx='208.58'%20ry='110.044'%20fill='%23FDE598'%20fill-opacity='0.7'/%3e%3c/g%3e%3cg%20filter='url(%23filter1_f_0_1)'%3e%3cellipse%20cx='395.735'%20cy='254.044'%20rx='204.265'%20ry='110.044'%20fill='%236955FF'%20fill-opacity='0.5'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_0_1'%20x='0.151413'%20y='110.915'%20width='704.858'%20height='507.786'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='71.9243'%20result='effect1_foregroundBlur_0_1'/%3e%3c/filter%3e%3cfilter%20id='filter1_f_0_1'%20x='47.6214'%20y='0.151413'%20width='696.227'%20height='507.786'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='71.9243'%20result='effect1_foregroundBlur_0_1'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",aS="/assets/planet-B734ADp0.svg",uS=w.div`
    margin-top: -5%;
    margin-bottom: 10%;
    padding-top: 5%;
    background-color: #eee;

`,cS=w.div`
  max-width: 100%;
  margin-top: 5%;
  border-radius: 0.7vw;
  position: relative;
`,dS=w.div`
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
`,fS=w.div`
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
`,pS=w.img`
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
`,hS=w.div`
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
`,mS=w.img`
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
`,gS=w.div`
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
`,vS=w.div`
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
`;w.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 40%; 
  display: flex;
`;const xS=w.div`
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
`,yS=w.div`
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
`,wS=w.img`
  width: 35%;
  margin-left: 35%;
  @media (max-width: 800px) {
    min-width: 45%;
    max-width: 45%;
    margin-left: 20%;
  }
`,SS=Er`
  from {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
  to {
    transform: translateX(-50%) translateY(-100px);
    opacity: 0;
  }
`,jS=w.img`
  position: fixed;
  margin: 0 auto;
  max-width: 45%;
  display: block;
  z-index: 10000;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.5s ease-out;
  animation: ${e=>e.isdisappearing?Cn`${SS} 0.5s forwards`:"none"};
  @media (max-width: 800px) {
    position: fixed;
    max-width: 56%;
    transform: translateX(-50%);
    top: 20%;
  }
`,bS=w.img`
  position: relative;
  margin-top: 10%;
  min-width: 80%;
  max-width: 80%;
  margin-right: 15%;
`,kS=()=>{const[e,t]=b.useState(kt),[n,r]=b.useState(!1),[i,o]=b.useState(!0),[s,a]=b.useState(!1);b.useEffect(()=>{const g=setTimeout(()=>{a(!0)},1e3),x=setInterval(()=>{t(v=>v===kt?hr:kt)},600),y=setTimeout(()=>{r(!0),setTimeout(()=>{o(!1)},1e3),clearInterval(x)},3e3);return()=>{clearTimeout(g),clearTimeout(y),clearInterval(x)}},[]);const[u,c]=b.useState(kt),[h,f]=b.useState(!1);return b.useEffect(()=>{const g=setTimeout(()=>{f(!0)},1e3),x=setInterval(()=>{c(y=>y===kt?hr:kt)},600);return()=>{clearTimeout(g),clearInterval(x)}},[]),l.jsx(l.Fragment,{children:l.jsxs(uS,{children:[l.jsxs(cS,{children:[i&&l.jsx(l.Fragment,{children:l.jsx(jS,{src:e,alt:"Waving Genie",isdisappearing:n})}),l.jsxs(xS,{children:[l.jsxs(gS,{children:[l.jsx("img",{src:sS,alt:"Gradient Background"}),l.jsxs(vS,{children:[l.jsx("h1",{children:"진인프라의"}),l.jsx("h1",{children:"양자 캐릭터"}),l.jsx("h1",{children:"‘지니’"})]})]}),l.jsx(fS,{children:l.jsx(pS,{src:lS,alt:"Flag"})})]}),l.jsxs(yS,{children:[l.jsx(hS,{children:l.jsx(mS,{src:aS,alt:"planet"})}),l.jsxs(dS,{children:[l.jsx("h1",{children:"지니"}),l.jsx("p",{style:{color:"#0000ff"},children:"지니(진인프라의 진+  접사 ‘-이‘)"}),l.jsx("p",{children:"🧬알라딘에 나오는 무엇이든 할 수 있는 캐릭터 지니처럼"}),l.jsx("p",{children:"🔭양자 정보 관련해서는 무엇이든 알려준다는 의미"})]})]})]}),l.jsxs("div",{style:{maxWidth:"50%",display:"flex",flexDirection:"column",marginLeft:"32%",marginTop:"10%"},children:[l.jsx(wS,{src:oS,style:{width:"35%",marginLeft:"40%"}}),l.jsx(bS,{style:{marginLeft:"0",marginTop:"3%",marginBottom:"15%"},src:u,alt:"Waving Genie"})]})]})})};function CS(){return l.jsx(l.Fragment,{children:l.jsx(kS,{})})}const ES="/assets/cat3-Bspolb1q.svg",_S="/assets/bunker-cRaJc6Me.svg",Ef="/assets/bottle1-BxjrYTB1.svg",PS="/assets/bottle2-BVqZZ2-9.svg",Bl="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2_1185)'%3e%3cpath%20d='M40%2021.9999H15.66L26.83%2010.8299L24%207.99994L8%2023.9999L24%2039.9999L26.83%2037.1699L15.66%2025.9999H40V21.9999Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2_1185'%3e%3crect%20width='48'%20height='48'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",OS=()=>{const[e,t]=b.useState(!1),[n,r]=b.useState(!1),[i,o]=b.useState(null);Ye();const s=()=>{const a=Math.random()>.5?"살아 있습니다":"죽었습니다";o(a),t(!0)};return l.jsxs(vm,{children:[l.jsx(ym,{children:l.jsx("a",{href:"/concept",children:l.jsx("img",{src:Bl,alt:"Back to main"})})}),l.jsxs(xm,{children:[l.jsx("h1",{children:"슈뢰딩거의 고양이"}),l.jsx("hr",{}),l.jsxs(Yi,{children:[l.jsxs(Xi,{children:[l.jsx("img",{src:_S,alt:"bunker",style:{maxWidth:"80%"}})," "]}),l.jsxs(Xi,{children:[l.jsx("img",{src:Ef,alt:"bottle1"})," ",l.jsx(Tf,{src:xo,alt:"cat"})]}),l.jsx("p",{children:"고양이 한 마리와 독이 든 병을 벙커 안에 넣고 벙커를 닫습니다."})]}),l.jsxs(Yi,{children:[l.jsxs(Xi,{children:[l.jsx("img",{src:Ef,alt:"bottle1"})," ",l.jsx("img",{src:PS,alt:"bottle2"})]}),l.jsx("p",{children:"독이 든 병은 50%의 확률로 깨질 수도, 깨지지 않을 수도 있습니다."})]}),l.jsxs(Yi,{children:[l.jsxs(Xi,{children:[l.jsx(Tf,{src:xo,alt:"cat"})," ",l.jsx(TS,{src:gm,alt:"cat2"})]}),l.jsx("p",{style:{marginBottom:"1%"},children:"이에 따라 고양이도 죽을 수도 있고 살아 있을 수도 있습니다."}),l.jsxs("p",{style:{padding:"0 2%",marginTop:"0px"},children:["이러한 상태를 ",l.jsx("span",{style:{color:"#0000ff"},children:"양자 중첩 상태"}),"라고 합니다."]}),l.jsx(Za,{onClick:s,children:"벙커 안에 고양이가 있는지 확인하기"})]}),l.jsxs(Yi,{children:[l.jsx("p",{style:{padding:"0 2%",marginBottom:"1%"},children:"슈뢰딩거의 고양이는 1935년 에르빈 슈뢰딩거가 양자역학의 이상한 특성을 설명하기 위해 제안한 사고 실험입니다."}),l.jsxs("p",{style:{padding:"0 2%",marginTop:"0px"},children:[l.jsx("span",{children:"이 실험은 고양이를 상자에 넣고, 고양이의 생사 여부가 양자적 현상인 중첩에 의해 결정된다는 개념"}),"을 보여줍니다."]}),l.jsx("div",{style:{textAlign:"center",display:"flex",marginTop:"1%"}}),l.jsx("div",{style:{textAlign:"center",display:"flex",marginTop:"1%"},children:l.jsx(Za,{onClick:()=>r(!0),children:"추가 설명 보기"})})]}),e&&l.jsx(_f,{children:l.jsxs(Pf,{style:{backgroundColor:"#ddd"},children:[l.jsx(Of,{onClick:()=>t(!1)}),l.jsx("h2",{children:"벙커의 문이 열렸습니다!"}),l.jsx("hr",{}),i==="살아 있습니다"?l.jsxs("div",{children:[l.jsx("p",{children:"고양이는 살아 있습니다!"}),l.jsx("img",{src:xo,alt:"살아 있는 고양이",style:{maxWidth:"100%"}})]}):l.jsxs("div",{children:[l.jsx("p",{children:"고양이는 죽었습니다...."}),l.jsx("img",{src:ES,alt:"죽은 고양이",style:{maxWidth:"60%",margin:"1%"}})]})]})}),n&&l.jsx(_f,{children:l.jsxs(Pf,{children:[l.jsx(Of,{onClick:()=>r(!1)}),l.jsx("h2",{children:"추가 설명"}),l.jsx("hr",{}),l.jsxs("p",{children:["이 사고 실험은 양자역학의 중요한 해석 중 하나인 ",l.jsx("span",{style:{fontWeight:"bold"},children:"코펜하겐 해석"}),"을 설명하기 위한 것이었습니다."]}),l.jsx("p",{children:"양자적 입자들은 측정되기 전까지 여러 상태가 동시에 존재하는데, 이 중첩 상태가 외부 관찰에 의해 무너지면서 하나의 확정된 상태가 된다는 것입니다."}),l.jsx("p",{children:l.jsx("span",{children:"고양이 역시 상자를 열어 관찰하기 전까지는 살아있으면서 동시에 죽어있는 상태로 존재합니다."})}),l.jsx("p",{children:"이 실험은 양자역학의 관측 문제와 파동 함수의 붕괴라는 개념을 설명하는 데 중요한 역할을 합니다."}),l.jsxs("p",{children:["슈뢰딩거는 이 실험을 통해 양자역학의 코펜하겐 해석이 현실에 적용될 때 얼마나 비현실적일 수 있는지를 비판했습니다. 실제로 고양이가 ",l.jsx("span",{style:{fontWeight:"bold"},children:'"살아 있으면서 죽어있다"'}),"는 개념은 우리의 일상적인 직관과는 맞지 않기 때문에, 이 실험은 양자역학의 해석에 대한 논쟁을 불러일으켰습니다."]})]})})]})]})},Yi=w.div`
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
`,Xi=w.p`
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
`,_f=w.div`
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
`,Pf=w.div`
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
`,Of=w(Zo)`
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
`,Tf=w.img`
  max-width: 100%;
  @media (max-width: 700px) {
    max-width: 50%;
  }
`,TS=w.img`
  max-width: 210px;
  margin-bottom: -45px;
  @media (max-width: 700px) {
    max-width: 50%;
  }
`;function IS(){return l.jsx(l.Fragment,{children:l.jsx(OS,{})})}const If="/assets/coinf-BD3uUSm1.svg",zf="/assets/coinb-CO2sn5vL.svg",zS="/assets/box1-M57zrF-g.svg",LS="/assets/box2-BABTIy2V.svg",RS=Er`
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,MS=w.div`
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
`,NS=w.img`
  max-width: 40%;
  cursor: pointer;
  margin: 2%;
`,AS=w.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin-top: 20px;
  animation: ${RS} 0.8s ease-in-out;
  h3{
    font-size: 2rem;
    color: #333;
  }
`,DS=w.div`
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
`,FS=w.div`
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
`,BS=w(Zo)`
  position: absolute;
  top: 30px;
  right: 33px;
  cursor: pointer;
  font-size: 2.5rem;
  color: #000000;

  &:hover {
    color: #e00000;
  }
`,$S=()=>{const[e,t]=b.useState(!1),[n,r]=b.useState(null),[i,o]=b.useState(null),[s,a]=b.useState(!1),u=()=>{const c=Math.random()>.5?"앞면":"뒷면";r(c),o(c==="앞면"?"뒷면":"앞면"),a(!0)};return l.jsxs(vm,{children:[l.jsx(ym,{children:l.jsx("a",{href:"/concept",children:l.jsx("img",{src:Bl,alt:"Back to main"})})}),l.jsxs(xm,{children:[l.jsx("h1",{children:"양자 얽힘: 두 개의 얽힌 동전"}),l.jsx("hr",{}),l.jsxs(MS,{children:[l.jsx("p",{children:"두 개의 동전이 특별한 방식으로 얽혀 있습니다."}),l.jsx("p",{children:"한 동전의 상태가 결정되면 다른 동전의 상태도 자동으로 결정됩니다!"}),l.jsx("p",{children:"박스를 열어서 동전 A를 확인하세요."}),l.jsx("h1",{style:{color:"#0183ff",margin:"5%"},children:"박스 클릭하기"}),s&&l.jsxs(AS,{children:[l.jsxs("div",{style:{textAlign:"center"},children:[l.jsx("h3",{children:"동전 A"}),l.jsx("img",{src:n==="앞면"?If:zf,alt:"동전 A",style:{maxWidth:"160px"}}),l.jsx("p",{children:n})]}),l.jsxs("div",{style:{textAlign:"center"},children:[l.jsx("h3",{children:"동전 B"}),l.jsx("img",{src:i==="앞면"?If:zf,alt:"동전 B",style:{maxWidth:"160px"}}),l.jsx("p",{children:i})]})]}),l.jsx(NS,{src:s?LS:zS,alt:"박스",onClick:u}),l.jsx("div",{style:{textAlign:"center",display:"flex",marginTop:"1%"},children:l.jsx(Za,{onClick:()=>t(!0),children:"추가 설명 보기"})})]}),e&&l.jsx(DS,{children:l.jsxs(FS,{children:[l.jsx(BS,{onClick:()=>t(!1)}),l.jsx("h2",{children:"양자 얽힘 설명"}),l.jsx("hr",{}),l.jsx("p",{children:"두 개의 동전이 특별한 방법으로 얽혀 있다고 상상해봅시다. 이 동전들을 각각 상자에 넣고 지구의 반대편으로 떨어뜨립니다. 그 후, A 동전의 상자를 열어 동전을 확인했을 때, 앞면이 나왔습니다."}),l.jsx("p",{children:"이때, 멀리 떨어진 B 동전은 즉각적으로 뒤집혀서 반드시 뒷면이 나옵니다. 그들은 어떤 방식으로든 얽혀 있어서, A 동전이 앞면이면 B 동전은 뒷면이 될 것이고, 반대로도 성립됩니다."}),l.jsx("p",{children:'이처럼 양자 얽힘에서는 두 입자가 얽힌 상태에 있으면, 한 입자의 상태가 결정되는 순간 다른 입자의 상태도 그에 맞춰 즉각적으로 결정됩니다. 얽힘 상태에서는 물리적으로 떨어져 있어도 정보가 "순간적으로" 전해지는 것처럼 보입니다.'})]})})]})]})};function QS(){return l.jsx(l.Fragment,{children:l.jsx($S,{})})}const US=()=>{const{pathname:e}=Ei();return b.useEffect(()=>{window.scrollTo(0,0)},[e]),null},WS="/assets/Jenie1-BXj_GSaG.svg",HS="/assets/Jenie2-D8KlYSrv.svg",GS={ibm:{title:"IBM",description:"IBM Quantum은 클라우드 기반 양자 컴퓨팅 서비스로, 개발자와 연구자들에게 실용적인 양자 컴퓨팅을 제공합니다.",content:"IBM은 2016년 IBM Quantum Experience를 통해 양자 컴퓨팅을 대중에게 공개했습니다. Qiskit이라는 오픈 소스 프레임워크를 제공하며, 연구자와 학생들이 양자 알고리즘을 쉽게 개발하고 테스트할 수 있는 환경을 제공합니다. IBM은 1,000 큐비트 이상의 양자 컴퓨터를 2029년까지 구현하는 것을 목표로 하며, 화학 시뮬레이션, 금융 리스크 분석, 물질 개발, 공급망 최적화 등 다양한 분야에서 양자 컴퓨팅의 응용을 확대하고 있습니다. IBM은 슈퍼컴퓨터와 양자 컴퓨터를 결합한 하이브리드 컴퓨팅 모델도 연구 중입니다.",businessTitle:"양자 컴퓨팅 사업",business:"IBM은 IBM Quantum Experience를 통해 누구나 양자 컴퓨터에 접근할 수 있는 클라우드 기반의 플랫폼을 제공하고 있습니다. 연구자, 학생, 기업 고객은 Qiskit 오픈 소스 프레임워크를 사용해 양자 알고리즘을 개발할 수 있습니다. 또한, 양자 컴퓨터와 기존 컴퓨터의 결합을 통한 하이브리드 컴퓨팅 모델 개발에 주력하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"IBM은 세계 최초로 양자 컴퓨터를 클라우드에 공개했으며, 127 큐비트 시스템(IBM Eagle)을 발표했습니다. IBM의 로드맵에 따르면, 2029년까지 1,000 큐비트 이상의 양자 컴퓨터를 구축할 예정입니다. 이들은 화학 시뮬레이션, 공급망 최적화, 금융 리스크 관리와 같은 문제에 양자 컴퓨팅을 적용하고 있으며, 주요 고객으로는 금융 기관과 제약 회사가 있습니다.",imgSrc:Sm,link:"https://www.ibm.com/quantum"},idq:{title:"IDQ",description:"IDQ는 양자 키 분배(QKD) 기술을 통해 통신 보안을 강화하는 양자 암호화 솔루션을 제공합니다.",content:"IDQ는 양자 기술을 활용한 보안 솔루션을 선도하는 기업으로, 금융 및 국방과 같은 민감한 산업에서 안전한 통신을 보장하는 기술을 제공합니다. 특히 양자 키 분배(QKD) 시스템은 도청을 탐지할 수 있는 능력을 갖추고 있어 최고 수준의 보안을 제공합니다. 유럽연합(EU)의 양자 통신 인프라 구축 프로젝트에 참여하고 있으며, 글로벌 표준을 수립하는 데 기여하고 있습니다.",businessTitle:"양자 암호화 및 통신 보안 사업",business:"IDQ는 양자 키 분배(QKD) 기술을 개발해 보안 통신 솔루션을 제공하는 선도 기업입니다. QKD는 도청을 감지하고 공격으로부터 네트워크를 보호하는 데 사용됩니다. 금융 기관, 국방, 통신 등 민감한 분야에서 양자 보안을 제공합니다.",businessTitle2:"성과 및 연구 방향",business2:"IDQ는 유럽 연합의 양자 통신 인프라 구축 프로젝트에 적극 참여하고 있으며, 다양한 파트너와 협력해 양자 암호화 표준을 개발하고 있습니다. 스위스와 싱가포르 등 여러 국가의 정부와 협력해 양자 통신망 구축에 기여하고 있습니다.",imgSrc:wm,link:"https://idquantique.co.kr/"},dwave:{title:"D-Wave",description:"D-Wave는 양자 어닐링 기술을 활용한 최적화 문제 해결에 특화된 양자 컴퓨터를 제공합니다.",content:"D-Wave는 세계 최초로 상용 양자 컴퓨터를 개발한 기업으로, 주로 최적화 문제를 해결하는 데 강점을 가지고 있습니다. D-Wave의 Advantage 시스템은 5,000개 이상의 큐비트를 제공하며, 금융, 물류, 인공지능(AI) 등의 분야에서 복잡한 문제를 해결합니다. 양자 어닐링은 최적화 문제를 매우 효율적으로 해결하는 기술로, 특히 재무 포트폴리오 최적화와 물류 경로 최적화에 활용됩니다.",businessTitle:"최적화 문제 해결",business:"D-Wave는 양자 어닐링(annealing) 기술을 사용하여 최적화 문제를 해결합니다. D-Wave의 Advantage 시스템은 5,000개 이상의 큐비트를 제공하며, 물류 최적화, AI 훈련 가속화, 재무 포트폴리오 구성 등의 분야에서 활용됩니다.",businessTitle2:"성과 및 연구 방향",business2:"D-Wave는 최초의 상용 양자 컴퓨터를 도입한 기업으로, 고객에게 클라우드를 통한 원격 접근 서비스를 제공합니다. 양자 어닐링을 통한 최적화 솔루션은 특히 물류와 인공지능 분야에서 강력한 성과를 내고 있습니다.",imgSrc:jm,link:"https://www.dwavesys.com/"},rigetti:{title:"Rigetti Computing",description:"Rigetti는 양자-클래식 하이브리드 컴퓨팅 시스템을 제공하며, 양자 컴퓨팅의 상용화를 목표로 합니다.",content:"Rigetti는 Quantum Cloud Services(QCS)를 통해 클라우드 기반의 양자 컴퓨팅을 제공하며, 양자 회로와 기존 컴퓨팅 자원을 결합한 하이브리드 솔루션을 개발 중입니다. 이 회사는 특히 의료와 금융 산업에서 양자 컴퓨팅의 응용 가능성을 연구하며, 신약 개발 및 기후 변화 모델링에 집중하고 있습니다.",businessTitle:"양자-클래식 하이브리드 컴퓨팅",business:"Rigetti는 주요 대학 및 연구 기관과 협력하여 양자 알고리즘을 개발하며, 연구자들이 쉽게 양자 컴퓨팅에 접근할 수 있도록 클라우드 플랫폼을 제공합니다. 또한 Quantum Cloud Services(QCS)를 통해 클라우드 기반 양자 컴퓨팅 환경을 제공합니다. 양자와 기존 컴퓨터를 결합한 하이브리드 솔루션을 개발해 더 빠른 문제 해결을 가능하게 합니다.",businessTitle2:"성과 및 연구 방향",business2:"Rigetti는 신약 개발, 금융 모델링, 기후 변화 연구 등 다양한 응용 분야에 양자 컴퓨팅을 도입하고 있습니다. 이 회사는 양자 컴퓨터와 기존 서버 간의 원활한 통합을 목표로 연구를 진행하고 있으며, 빠른 계산이 요구되는 환경에서 강점을 발휘하고 있습니다.",imgSrc:bm,link:"https://www.rigetti.com/"},honeywell:{title:"Honeywell",description:"Honeywell은 이온 트랩 기술을 활용한 정밀한 양자 컴퓨팅을 제공합니다.",content:"Honeywell의 양자 컴퓨터는 이온 트랩 기술을 기반으로 매우 높은 정밀도를 자랑합니다. 이 회사는 Cambridge Quantum과의 합병을 통해 소프트웨어와 하드웨어 개발 능력을 더욱 강화했으며, 공급망 최적화와 화학 물질 분석과 같은 분야에 양자 컴퓨팅을 활용하고 있습니다.",businessTitle:"이온 트랩 양자 컴퓨터",business:" Honeywell은 이온 트랩 기술을 이용한 양자 컴퓨터를 개발합니다. 이온 트랩은 높은 정확도와 정밀한 제어를 제공하며, 물류 및 화학 분야에서 활용되고 있습니다. 또한 제조, 물류 및 화학 산업에 양자 컴퓨팅 솔루션을 제공합니다. 특히 정밀한 양자 계산 능력을 활용해 화학 반응을 시뮬레이션하고 산업 공정을 최적화하는 데 주력하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"Honeywell은 2021년 Cambridge Quantum과 합병하여 양자 컴퓨팅 소프트웨어 개발을 강화했습니다. 이 회사의 양자 컴퓨터는 화학 시뮬레이션, 최적화 문제 해결에 특화되어 있으며, 특히 화학 반응 시뮬레이션에서 탁월한 성능을 보여주고 있습니다.",imgSrc:km,link:"https://www.honeywell.com/us/en/company/quantum"},google:{title:"Google Quantum AI",description:"Google Quantum AI는 인공지능과 양자 컴퓨팅의 결합을 통해 양자 우월성을 목표로 합니다.",content:"Google은 2019년에 양자 우월성(Quantum Supremacy)을 발표하며 양자 컴퓨팅이 기존 컴퓨터보다 더 복잡한 문제를 해결할 수 있음을 증명했습니다. Google의 연구는 주로 인공지능(AI), 화학 및 물리학 분야에 중점을 두고 있으며, 양자 알고리즘을 통해 새로운 연구 방향을 제시하고 있습니다.",businessTitle:"양자 우월성 달성 및 인공지능 연구",business:"Google은 2019년에 양자 우월성(Quantum Supremacy)을 선언하며, 기존 컴퓨터로는 해결하기 어려운 문제를 양자 컴퓨터로 처리하는 데 성공했습니다. Google의 연구는 인공지능과 양자 알고리즘 개발에 중점을 두고 있습니다. 머신러닝 및 데이터 분석 분야에서 양자 컴퓨팅을 적극 활용하고 있으며, AI 모델의 학습 속도를 높이기 위한 연구를 지속하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"Google은 화학, 물리학 분야에 양자 컴퓨팅을 활용하며, 머신러닝 모델의 훈련 속도를 가속화하기 위해 연구를 진행 중입니다. 또한, Google은 양자 컴퓨팅과 인공지능의 결합을 통해 새로운 데이터 분석 기술을 개발하고 있습니다.",imgSrc:Cm,link:"https://quantumai.google/"},microsoft:{title:"Microsoft",description:"Microsoft는 Azure Quantum 플랫폼을 통해 다양한 양자 하드웨어와 소프트웨어를 제공합니다.",content:"Microsoft는 토폴로지 큐비트 개발에 주력하며, Azure Quantum 플랫폼을 통해 여러 양자 하드웨어와 소프트웨어 생태계를 지원합니다. 이 플랫폼은 연구자들이 양자 컴퓨팅을 쉽게 활용할 수 있도록 설계되었습니다.",businessTitle:"양자 클라우드 서비스",business:"Microsoft는 Azure Quantum을 통해 다양한 양자 하드웨어와 소프트웨어를 지원합니다. Microsoft는 토폴로지 큐비트를 연구하며, 이를 통해 안정적이고 확장 가능한 양자 컴퓨팅 환경을 개발하고 있습니다. 암호화와 최적화 문제를 해결하기 위해 양자 컴퓨팅을 활용하며, 물리학 및 재료 과학 연구에도 기여하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"Microsoft는 암호화 및 최적화 문제 해결에 양자 컴퓨팅을 활용하며, 물리학 및 재료 과학 연구를 지원하기 위한 도구도 개발 중입니다. 주요 고객들은 클라우드를 통해 양자 컴퓨터에 접근해 다양한 연구를 수행하고 있습니다.",imgSrc:Em,link:"https://quantum.microsoft.com/"},intel:{title:"Intel",description:"Intel은 양자 프로세서 개발과 하드웨어 소프트웨어 생태계 구축에 집중하고 있습니다.",content:"Intel은 고성능 양자 프로세서를 개발 중이며, Quantum SDK를 통해 양자 알고리즘 개발을 지원합니다. Intel은 양자 컴퓨터와 슈퍼컴퓨터 간의 협업을 통해 더욱 강력한 컴퓨팅 성능을 구현하려고 합니다.",businessTitle:"양자 프로세서 개발",business:"Intel은 고성능 큐비트 프로세서를 개발하며, Quantum SDK를 통해 연구자들에게 양자 알고리즘 개발 환경을 제공합니다. Intel은 양자 컴퓨터와 슈퍼컴퓨터를 결합한 하이브리드 컴퓨팅 시스템 개발을 목표로 하고 있습니다. 그뿐 아니라, 반도체 기술과 양자 컴퓨팅을 결합해 상용화 가능한 솔루션을 개발하며, 다양한 산업 응용을 위해 파트너들과 협력하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"Intel은 다양한 산업에서 상용화 가능한 양자 컴퓨터를 구축하는 데 중점을 두고 있으며, 반도체 기술과 양자 프로세서를 결합해 성능을 극대화하고 있습니다.",imgSrc:Pm,link:"https://www.intel.co.kr/content/www/kr/ko/research/quantum-computing.html"},alibaba:{title:"Alibaba",description:"Alibaba는 클라우드와 양자 컴퓨팅을 결합해 보안 솔루션을 개발합니다.",content:"Alibaba는 양자 연구소(AQML)를 설립하고 양자 컴퓨팅과 인공지능(AI)을 결합한 연구를 수행 중입니다. 이 회사는 특히 데이터 보안을 강화하기 위해 양자 암호화 기술을 연구하고 있습니다.",businessTitle:"양자 클라우드와 암호화 연구",business:"Alibaba는 AQML(Alibaba Quantum Laboratory)을 통해 양자 컴퓨팅과 인공지능을 결합한 연구를 수행하고 있습니다. 양자 컴퓨팅은 보안 기술에 사용되어 데이터 보호를 강화합니다. 또한 데이터 센터와 클라우드 서비스에 양자 컴퓨팅을 도입하며, AI와 결합된 양자 알고리즘 개발에 주력하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"Alibaba는 데이터 센터와 클라우드 서비스에 양자 컴퓨팅을 도입하며, 양자 암호화 솔루션을 개발해 보안을 강화하고 있습니다.",imgSrc:Om,link:"https://www.alibabacloud.com/en/press-room/alibaba-cloud-and-cas-launch-one-of-the-worlds-most?_p_lc=1"},jininfra:{title:"JinInfra",description:"JinInfra는 양자 네트워크 인프라를 개발하며 보안 솔루션을 제공합니다.",content:"JinInfra는 양자 키 분배(QKD)를 기반으로 한 보안 네트워크 구축을 목표로 하고 있으며, 정부 및 기업과 협력해 차세대 통신 인프라를 개발합니다.",businessTitle:"양자 통신 인프라 개발",business:"JinInfra는 양자 키 분배(QKD)를 사용해 안전한 통신망을 구축합니다. 이 회사는 정부 및 기업과 협력해 차세대 통신 인프라를 개발하고 있습니다. 양자 통신 기술을 상용화하기 위해 노력하며, 보안이 중요한 분야에 최적화된 통신망을 구축하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"JinInfra는 양자 통신망 구축 프로젝트를 주도하며, 보안이 중요한 분야에 최적화된 양자 솔루션을 제공합니다. 이 회사는 양자 암호화 기술을 통해 네트워크 보안을 강화하는 데 중점을 두고 있습니다.",imgSrc:_m,link:"https://jininfra.com/"}},VS=()=>{const{companyName:e}=nh(),t=GS[e.toLowerCase()],[n,r]=b.useState(!1);return b.useEffect(()=>{const i=setInterval(()=>{r(o=>!o)},500);return()=>clearInterval(i)},[]),t?l.jsxs(oc,{children:[l.jsxs(lc,{children:[l.jsx(sc,{src:cl,alt:"banner image"}),l.jsx(ac,{children:t.title})]}),l.jsxs(Z3,{children:[l.jsxs(uw,{children:[l.jsx(cw,{src:n?HS:WS,alt:`${t.title} speaking`}),l.jsxs(dw,{children:[l.jsx(fw,{children:t.description}),l.jsx(pw,{children:t.content})]})]}),l.jsxs(Xa,{children:[l.jsx("h1",{children:"Q. 양자와 관련된 어떤 사업을 하고 어떤 성과를 냈나요?"})," "]}),l.jsxs(Ya,{style:{marginBottom:"15px"},children:[l.jsx("h1",{children:t.businessTitle}),l.jsx("p",{children:t.business})]}),l.jsxs(Ya,{children:[l.jsx("h1",{children:t.businessTitle2}),l.jsx("p",{children:t.business2})]}),l.jsx("div",{style:{margin:"5% 0"},children:l.jsx(Xa,{children:l.jsx(mm,{href:t.link,target:"_blank",rel:"noopener noreferrer",children:"홈페이지로 이동"})})})]})]}):l.jsx("p",{children:"존재하지 않는 기업입니다."})},KS={finance:{title:"금융 (Finance)",intro:"양자 컴퓨팅은 금융 리스크 분석과 포트폴리오 최적화에 사용됩니다.",content:[{subtitle:"리스크 분석",text:"양자 컴퓨터는 복잡한 금융 상품들의 리스크를 빠르게 분석하며, 양자 알고리즘으로 리스크 예측의 정확성을 높입니다."},{subtitle:"포트폴리오 최적화",text:"투자 포트폴리오의 수익을 극대화하고 리스크를 최소화하기 위해 양자 알고리즘을 사용합니다."},{subtitle:"사례",text:"Goldman Sachs와 IBM은 포트폴리오 최적화와 옵션 가격 책정에 양자 알고리즘을 활용한 연구를 진행 중입니다."}]},chemistry:{title:"화학 및 재료 과학 (Chemistry & Material Science)",intro:"양자 컴퓨터는 화학 반응 시뮬레이션과 신약 개발에 활용됩니다.",content:[{subtitle:"신약 개발",text:"단백질과 화합물 간의 상호작용을 정확하게 시뮬레이션하여 신약 개발 시간을 단축합니다."},{subtitle:"화학 반응 시뮬레이션",text:"분자 구조와 화학 반응을 정확하게 예측해 연구 시간을 단축하고 정확도를 높입니다."},{subtitle:"사례",text:"Pfizer와 IBM은 양자 컴퓨터를 활용한 신약 개발 연구를 진행하고 있습니다."}]},logistics:{title:"물류 및 최적화 (Logistics & Optimization)",intro:"물류 경로 최적화와 공급망 관리를 통해 비용 절감과 효율성을 극대화합니다.",content:[{subtitle:"물류 최적화",text:"수많은 경로와 제약 조건을 고려해 최적의 운송 경로를 제시합니다."},{subtitle:"공급망 최적화",text:"공급망의 모든 단계를 고려해 효율적인 경로와 재고 관리를 계산합니다."},{subtitle:"사례",text:"Volkswagen은 양자 컴퓨터로 교통 흐름을 최적화하고, DHL은 배송 경로 최적화를 연구 중입니다."}]}},qS=()=>{const{businessName:e}=nh(),t=KS[e];return t?l.jsxs(oc,{children:[l.jsxs(lc,{children:[l.jsx(sc,{src:cl,alt:"banner image"}),l.jsx(ac,{children:t.title})]}),l.jsxs(Xa,{style:{padding:"5% 0"},children:[l.jsx(mw,{children:t.intro}),t.content.map((n,r)=>l.jsx(Ya,{style:{marginBottom:"2%",alignItems:"center"},children:l.jsxs(gw,{children:[l.jsx(vw,{children:n.subtitle}),l.jsx(xw,{children:n.text})]},r)}))]})]}):l.jsx("p",{children:"존재하지 않는 산업입니다."})},Lf=w.div`
  border: 2px solid #333;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.8;
  margin-bottom:50px;

  p {
      font-size: 1.7rem;
      margin-bottom:20px;
  }
  span{
    background: linear-gradient(to top, #D0E7FE 40%, transparent 10%);
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
`,YS=()=>l.jsxs(Tm,{children:[l.jsx(zm,{children:l.jsx("a",{href:"/description",children:l.jsx("img",{src:Bl,alt:"Back to main"})})}),l.jsxs(Im,{children:[l.jsx("h1",{children:"양자 컴퓨팅과 계산 복잡도 이론"}),l.jsx("hr",{}),l.jsx("h2",{children:"(1)BPQ(Bounded-Error Quantum Polynomial Time)"}),l.jsxs(Lf,{children:[l.jsxs("p",{children:[l.jsxs("span",{children:["양자 컴퓨터가 효율적으로 풀 수 있는 문제군을 ",l.jsx("span",{style:{color:"#0489B1"},children:"BQP"}),"라 한다."]}),l.jsx("br",{})," 여기서 효율적이란, '정해진 오차범위 내에서 다항 시간 안에' 푼다는 뜻이다. 양자 컴퓨터는 확률적 알고리즘을 실행할 뿐이므로 양자 컴퓨터에 대한 BQP는 기존 컴퓨터에 대한 BPP에 대응한다. ",l.jsx("span",{children:"BPP는 오차 확률을 1/4로 제한하며 다항 시간에 풀 수 있는 문제의 집합으로 정의된다."}),' 양자 컴퓨터가 문제를 "푼다"는 것은 모든 예제에 대해 높은 확률로 올바른 결과가 나온다는 뜻이다. 그 결과가 다항 시간에 나왔다면 그 문제는 BQP에 속한다.',l.jsx("br",{}),"이는 고전적 컴퓨터의 P(Polynomial Time) 클래스와 NP(Nondeterministic Polynomial Time) 클래스에 대응됩니다."]}),l.jsxs("p",{children:["BQP에 속하는 대표적인 문제로는 ",l.jsx("span",{children:"Shor의 소인수분해 알고리즘"}),"과 ",l.jsx("span",{children:"Grover의 검색 알고리즘"}),"이 있습니다. ",l.jsx("br",{}),"Shor의 알고리즘은 고전적인 알고리즘보다 훨씬 효율적으로 큰 수를 소인수분해할 수 있으며, ",l.jsx("br",{}),"Grover의 알고리즘은 비정렬 데이터베이스에서 특정 항목을 검색하는 데 있어 고전적인 알고리즘의 제곱근 시간만큼 소요됩니다."]})]}),l.jsx("h2",{children:"(2)QMA(Quantum Merlin-Arthur)"}),l.jsxs(Lf,{children:[l.jsxs("p",{children:[l.jsxs("span",{children:["QMA는 ",l.jsx("span",{style:{color:"#0489B1"},children:"양자 컴퓨터의 비판자 증명 시스템"}),"에 해당합니다."]})," QMA 클래스는 고전적인 복잡도 이론의 NP 클래스와 유사하지만, 차이점은  ",l.jsx("span",{style:{color:"#0489B1"},children:"증명(proof)이 양자 상태로 제공"}),"된다는 것입니다. 구체적으로, QMA는 검증자가 다항 시간 내에 주어진 양자 증명을 확인할 수 있는 문제들을 포함합니다.",l.jsx("br",{}),"이는 고전적 컴퓨터의 P(Polynomial Time) 클래스와 NP(Nondeterministic Polynomial Time) 클래스에 대응됩니다."]}),l.jsxs("p",{children:["QMA 클래스에 속하는 문제들은 일반적으로 ",l.jsx("span",{children:"QMA-완전(Quantum Merlin-Arthur-comlete)"}),"문제로 분류됩니다. 이는 이러한 문제들이 QMA 내의 모든 문제를 다항식 시간 내에 변환할 수 있을 만큼 복잡하다는 것을 의미합니다. 다표적인 예로는 ",l.jsx("span",{children:"양자 회로의 3-SAT 문제"}),"등 이 있습니다. QMA 클래스의 문제들은 고전적인 컴퓨터로는 해결하기 어려운 문제들이 많으며, 이는 양자 컴퓨팅이 해결할 수 있는 문제의 범위를 확장하는 데 핵심 역할을 합니다."]})]})]})]});function XS(){return l.jsx(l.Fragment,{children:l.jsx(YS,{})})}const ZS=()=>{const[e,t]=b.useState(!1),n=()=>{t(!e)};return l.jsxs("div",{children:[l.jsx("div",{style:{zIndex:"20000",position:"fixed",bottom:"9rem",right:"3rem"},children:l.jsx("button",{onClick:n,style:{backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"50%",width:"5rem",height:"5rem",fontSize:"24px",cursor:"pointer"},title:"챗봇 열기",children:e?"X":"💬"})}),e&&l.jsx(JS,{children:l.jsx(ej,{allow:"microphone;",src:"https://console.dialogflow.com/api-client/demo/embedded/87fdfc94-6875-4699-a61e-ee1c7fcc7ab2"})})]})},JS=w.div`
  z-index: 10000;
  position: fixed;
  bottom: 3rem;
  right: 9rem;
  width: auto; 
  
  @media (max-width: 780px) {
    right: 0;
    left: 0;
    top: auto;
    bottom: 2rem;
    width: 95%;
  }
`,ej=w.iframe`
  display: block; 
  max-width: 95%;
  width: 400px;
  height: 500px; 
  margin: 0 auto; 
  @media (max-width: 780px) {
    height: 480px;
  }
`,tj="data:image/svg+xml,%3csvg%20width='19'%20height='19'%20viewBox='0%200%2019%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='19'%20height='18.3214'%20fill='url(%23pattern0_23_318)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_23_318'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_23_318'%20transform='scale(0.0357143%200.037037)'/%3e%3c/pattern%3e%3cimage%20id='image0_23_318'%20width='28'%20height='27'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAYAAABvCO8sAAADBElEQVRIDa2Wv2sUQRTHJxDT+Q+kTGVjH2JzRaoUdgeKxe6GSOwkICQWWthYiBbBMgQCgWS9vUsKfxxEkUC0iCASYiN2FmnERhDBYuTz7r6bXXb37lZvYHg7OzPf7/u+92Z2navRpm48u+zCVsNFSWCd56s70zUgRlgKaNjuXlja87NrXX/r6Tt//dGhX3jwxjrvmHNRe9ccGgGydAmbJ5f2fgD4MP7kt15/sS4yLP3z1zMjXN089jO3n3u32Dmprfrizc4TqXn54ZspQwUdhThA59nUNWMbQ0rvKU6CUiWFl1F7F8/ZCKBrxn59/9Sfff/pqxpzUojFGUhxvICffcECcgMB4eH51+8/VTyF9xBrHxjst+LKkqTPYavBYi1E3b820oFSImV5LatkCoQwsBjP/reBpcKyQkqV8RAlgdSRszphrHJM1at85o/MYueECTwipONq4BExOuc0FYl8iLCqRjzc6Ryl3KhmzDw9O8eiFwcfracbvLczSnrS42OM/WKRdG0A0E0u+5X72/YKEsY48vbo1J4VeixzdDksHERwlrE9hVES4AEKCYEahNNX7qUkAi0jZO38tcfW1zdeCcKsokdYe3mMkoABZJSymghlBxHiGOsI68SlO4IwCzaCLI/cy1QoLyDEqgGgzQASWsZZhaxlrFDKKUKuppCeK+znkMuZSbUsofJXRihHlEPWKO9gcdyI3HkOnXMMKBom8ZIGISBq5IYxigidVGGzilRQOMlasIlejpCbAEJkj/MckiKOBQpz55A84oF5MaabxtLQjA0T3PxN0w8rCjkz47hLwaAuCGfxLuVEhq0G0hXa7BFRHke1kOE8hBbOsq8FnHwPkU8eIWajimgUMsKojwCR4kNQ/T3s3TuOHya80kbZQcQQsYciUbVjh37xxclCEaHSwtKM09sIMDoEhI48ET5VOXuGKxObbNhqZMFwQDmBDCewhB+CXIFU5UzYA22UBHN3u+/JLaAQQ4QqnlFpxylsd+0neSBYzUk7S/rr7tvC+RqC+Rfm5NAxZj03IwAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e",nj="data:image/svg+xml,%3csvg%20width='50'%20height='51'%20viewBox='0%200%2050%2051'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='50'%20height='50.8929'%20fill='url(%23pattern0_23_312)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_23_312'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_23_312'%20transform='scale(0.0178571%200.0175439)'/%3e%3c/pattern%3e%3cimage%20id='image0_23_312'%20width='56'%20height='57'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA5CAYAAABj2ui7AAAJqklEQVRoBe1aCZBcVRX9PcGoiArugoXGCigiblEL17iVC6KgBCKpck1JaRnFUkuLkpn/s5AFMDELJDEbJAyBoEkgwYRYhIGJgcGs/3XP1jM9W2cm05k1PVvPkqvn9vzu1++/30vSk3RZeVW//vLeu//ed++799z7v2FcbBdXQL8Cfz52lVEiZheZ/rU+S5T5LHHIZ4qYzxQ0fsT4mSXKMAZjDcwp6FZs32BYdsm4MI4guZ0tcQg0DNAqmGYFZvgsUS1pJzehklpNnWeJasMKzLhwchbb032mqMi7YG6BK4xie/r5E/Te41N8lth9HgRTNbrbuPf4lIkVFOZoip7zLlxSqz0TZrZFllhwAQVL0SZ4yZ8mb982qcgS6wtFOIcP8GTcvm3SOQtaZPo3OUQL7QzezknAItO/qNCEUvkBj2cnZImYqRIr1HujRMzMTUiEgjx4y9fP99NHHg7SD//RQgtfitCjx7ppe2Uv7ajqpc3Huun+A6foZzvD9Ik1QbrsvkCKI8lxMXtyCiGMH5OuWfviIiuBK139ly4I0E93hGlPMErdg6OUqUVjY7SvLkq/fraV3rq40kUPwn704SD9bm8rn7XCW6IsOy1a9iwtAVMQNPL+v9bQB1bU0rUravj44MpafuYw9vXNDfTv5v5MMnn2Hz85SN/b2kRYwLcsrky8b8UrHVQZGaKnq0/T+5ZV0xsWuDVuWPas9EJagck+UzTpBIQJfWhVLV35YBW9br6fJlmCXjPXT9DWFYsq6d0PVNGSA6doaOSMJ/PZdoyOnaE1/+mk9/ylmmnjfbCIXTWnWYvvvL+Kpq2p02m7ybACk72FLBGzdcLd9kQTLT3YwQLq+vFsXlk7nclCtv7hMeqLjWU1dvkrHaxJ0MdCwlomz/OzCWNRYbYqP5x6eUnoM0VQnYD7w60D9Gp4gH6yo8VFEP2/3dPqqRxo9IWGPrJeaKevPhKi9y6t5uOLG0Nk7m+n5+qidHpozHM+5ul4wjM4ME1fUC9fPDvQTaD5L0ZoZ1UvfX5Dvav/03+rIzgJXRPtg/Sd0kae89p5fja5q5dW09TlNXxcvijuUL68KcSLqKMB2t/Y3OB6L/zBx1drBSRt9pEOjoG5z6yrJ9i+vGLYg3D5unasbZCdgTMeexaO6VtbGuibWxrY3Jw+nLG3DzTpndPzoT52cPJ4WAJMVn7mXDOMU9Xos0TEGaA7Y8WgQTDq9GPlB4bd2oPJ3biuLjEODgj38L6XzI07KAgLMwWjDj2YXFt0RLdedNNjcUvAWND41No69rLOXOXcmSpfsX2DMiDxUvk5PJdj93DjcDy6trKig+fDMXxsdZA+ubaOHHOU6cFRYNG+sKGe3rww7vYXvBjRkaRSuzvBE0KVw4dMT75OLXuUiLvlTq9ruGvsKZgTvNnRtkEXM71DYzR9Y4jevqSSPre+njUkgwLEtqserCKYvfOea5bX0C2PN7IJT1lWQ6ChtuaeYQ4Zb7wvwIsiz3foyGejRNyd0GK6/SdPwjVi03cfb2TN6JwLgjE0Bhcuwy8E5h9vb6GHXu2kTUe7aN3hLoKJO/TftDBAAAlf2hSil1vcexFmj/GwiLct0aMdhxbOKZmGzxTlcmema3jCReURbSx7qbGPNSTTwL6dvTNMT/p7aP3hLtpwpIvKGvooEBli85THXreylmGbqsGRsTNUsr9da+ryfOm6PKFBnylCUkdiVdM9+/nTYZUHvt94pMs1HyYJqLX2UCet/h9CgZAIO62nR2jL8W52GvK7AMx17Y/72ly05XnKdUgWMKp0ZiQ06+/NOh5YCJUWzBWOB/ALBwQEpgx1xagiPEDvUMIPAICu/X5vTgJGZQEzCqQyPePJJh0P9MjRpLdz5gDDrqqICycL2Ng9zKaqeliYv64h23BoZnM+JwHhKXVtbzDqYgIhAEAc+SBMFA4GwPlU/yhDOJVZOCG1AYDfsa3ZRVudK93HZAFzNlEEaV3mUNMxpA3ACBlwLltFDzubg839HNve9UAqOkIQB/ZVG5wMHJUkQKbrZLDP1ckAhXx2fT2Va6AVhPYyJUArpD2/+WcrawOBXmUYUC426k5LsHAztzUz+lHneNynOJmswwQC8dcebeA0Bkhf15B5YI9irMfLXc8BHgCeUdLQNZg2ws2PtrdkRDHj70yGiWxLg0ARQDJAIyCCTEJXkujoH+XUCoDg5tJGzuW8BAUiAh0coN3e58aiME/sedCAQ7rrmTAjJS+aeJ4S6AFr0g12+pDPwSM699gvcPm6hhAAMwbjQDAffqg2BagDvqH04KAi4NFgZ0xHimOmDPIRdmCuDh+6cwpUAzDVDZKfAaJhhWVciX7sRwRsXYv0jXDVDKYKTSKvgxUgzQKcg+NxMvQ/7WsjjFdb18AolydkXsDDnU81c3YiP5evU8G2YRg+U3TKA9RraA/CqM9xj9XUeVSHWezJxeURhndAOkA12L9zy9o5fPxi1wmGd1gI9Mvtl7tOaN+J/Qrt6/iBLIkQ4VykA9zIBaGBdCAXZQvslXRtUCpIqQsS7h3mBUB1Dl4WtRukTh4CMJD3KqFoE16k+V7EEKiRzqiIQx0Ps6nz2EfpBJf77JODbMrQEBZWfYdzjz2Jve3cy2dtyQJfaryKTnAmcPuZkky8BPvsSKs7T5SFyHTdMzhKP3gqvROB0wIelgUbv/YoOsFWLfsuzQQmAvNEkP72Y41cMAICQZaA9Ab1GiwA+rEvUIaABwUka+iOsbl5CSWbrTwGJvyH59rY+8Jzw8nhnShYoXyBUKHWiMA7ZHC2nfuMwq8lwl5CwuMBon3/iSauPqMCjZrpV8bDB0oU6lzsKQCDOc+eYKey7OUOwoH9hWcoQCFP1DXUWYufP8ljbt0afycWEkmxnEwn3mmJcPrCb1yLnqX7BKEM3y1yHQfItj/Up5OR9zSy+GxoZi7dj+s01ww/m5dnGoMqgQ5kQ+r6rhibagYaSWjmtk3liRWYmo/PZxkYcmnl+lW1aYVEqdCDJn5OmKpIkeH2An0AhSP51e4TnPnjGyISaBwA4ff86yR/+FGFzP0D6Ljs/9+fsJNClqorVij3Raa/NIMdZtGN30gK8E8LTofy8RuJswSFZK5n/2eFI43XOf4rV871mzyadHTCfuVKyMwhxN6TR6a9XL/y3N6TeyhIcH0WF8g+4n/yKowkP6/lZRHwk+x5/Z1SXYv4XxnaT9/nKGAwa+il8jQh98X2tCLTP9dnCfusBbOEDRpGsT1tQnjMG1EzcLVh2XPGf0o/qBUaC2GJg/xTumXPMTDnYsttBf4LoCZViqQnTEMAAAAASUVORK5CYII='/%3e%3c/defs%3e%3c/svg%3e",rj=w.div`
  background: #1c2329;
  max-width: 100%;
  width: 100%;
  min-height: 200vh;
  cursor: text;
  user-select: text;
  padding: 0;
  height: 200vh;
  margin-bottom: -30vh;
`,ij=w.div`
  font-family: 'Arial', sans-serif;
  padding: 40px;
  max-width: 100%;
  margin: 0 auto;
  background-color: #1c2329;
  color: #fff;
`,oj=w.section`
  display: flex;
  align-items: left;
  margin-bottom: 40px;
  margin-top: 70px;
`,lj=w.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,sj=w.img`
  width: 70px;
  height: auto;
`,aj=w.h1`
  font-size: 2.5rem;
  margin: 0;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,Is=w.p`
  font-size: 1.2rem;
  color: #ccc;
  line-height: 1.7;
  h3{
    font-size: 1.5rem;
    &::selection {
      background-color: #60E6F2;
      color: #000;
    }
  }
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,uj=w.div`
  display: none;
  width: 95%;
  margin: 0 auto;
  padding-bottom: 10px;

  p {
    line-height: 1.6;
    color: #bbb;
    &::selection {
        background-color: #60E6F2;
        color: #000;
    }
  }
`,cj=w.section`
  background-color: #1c2329;
  padding: 20px 30px;
  border-radius: 8px;
  border: 1px solid #444;
  margin-bottom: 40px;
`,zs=w.h2`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,Rf=w.section`
  margin-bottom: 40px;
`,Ja=w.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media(max-width: 780px){
    grid-template-columns: repeat(1, 1fr);
  }
`,Zi=w.div`
  background-color: #1c2329;
  border: 1px solid #444;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  padding: 20px;
  transition: box-shadow 0.3s ease;
  img{
    max-width: 40px;
    width: 40px;
  }
  &:hover {
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
  }
  hr{
    border: none; 
    margin: 10px 0;
    color: #bbb;
    height: 0px;
    box-shadow: inset 0 0.5px 0 0 #bbb;
  }
  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    &::selection {
        background-color: #60E6F2;
        color: #000;
    }
  }
  a{
    font-size: 1.3rem;
    margin: 5px 0;
    color: #60E6F2;
    line-height: 1.8;
  }
  p {
    font-size: 1.2rem;
    color: #aaa;
    line-height: 1.7;
    &::selection {
        background-color: #60E6F2;
        color: #000;
    }
  }
`,dj=w(uj)`
  @media (max-width: 768px) {
    display: flex;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
      color: #eee;
        &::selection {
            background-color: #60E6F2;
            color: #000;
        }
    }
    h2 {
      font-size: 1.4rem;
        &::selection {
            background-color: #60E6F2;
            color: #000;
        }
    }
    ${Ja} {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`,fj=w.a`
  display: inline-flex;
  margin-top: 5px;
  align-items: center;
  justify-content: center;
  background-color: #007bff;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 20px;
  border-radius: 25px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  &:hover {
    background-color: #0056b3;
  }

  &::before {
    content: '↗';
    margin-right: 8px;
  }
`,pj=w.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #28a745; 
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 20px;
  border-radius: 25px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
  &::selection {
    background-color: #90ee90;
    color: #000;
  }
  &:hover {
    background-color: #218838; 
  }

  &::before {
    content: '↗'; 
    margin-right: 8px;
  }
`,hj=()=>(Ye(),l.jsx(rj,{children:l.jsxs(ij,{children:[l.jsx(oj,{children:l.jsxs(lj,{children:[l.jsx(sj,{src:Lh,alt:"CS Logo"}),l.jsxs("div",{children:[l.jsx(aj,{children:"양자 인턴십 소개"}),l.jsx(Is,{children:l.jsx("h3",{children:"양자 인턴십 3기"})})]})]})}),l.jsx(dj,{children:l.jsx(Is,{children:"국내 양자기술 관련 기업의 인턴 수요 조사를 통해 국내 대학과 연계 매칭으로 신진 유입인력 확보하기 위한 목적."})}),l.jsxs(cj,{children:[l.jsx(zs,{children:"🌟 KQIC 양자기술 인력양성 프로그램"}),l.jsxs(Is,{children:["미래 양자인재 양성을 위한 인턴십",l.jsx("br",{}),"ICT 전공 대학(원)생 대상으로 국내 기업 연계 인턴십 프로그램 운영"]})]}),l.jsxs(Rf,{children:[l.jsx(zs,{children:"기관 소개"}),l.jsxs(Ja,{children:[l.jsxs(Zi,{children:[l.jsx("h3",{children:"KQIC"}),l.jsx("img",{src:nj,alt:"Operating Systems"}),l.jsx("p",{children:"KQIC는 한국의 주요 양자 정보 기술 연구 및 개발을 담당하는 기관입니다. 이 센터는 양자 컴퓨팅, 양자 암호, 양자 통신 등 다양한 양자 기술 분야에서의 연구와 개발을 촉진하며, 국가적인 양자 정보 과학 기술의 진보를 지원합니다. 양자 기술의 상용화 및 기술 전수를 위한 플랫폼 역할을 하면서 산학연 네트워크를 구축하고 있습니다."}),l.jsx(fj,{href:"https://www.kqic.kr/main/index.html",target:"_blank",rel:"KQIC",style:{color:"#fff",marginTop:"15px"},children:"홈페이지 방문"})]}),l.jsxs(Zi,{children:[l.jsx("h3",{children:"NIA"}),l.jsx("img",{src:tj,alt:"Operating Systems"}),l.jsx("p",{children:"NIA는 대한민국의 정보화를 총괄하는 정부 기관입니다. 이 기관은 정보화 정책의 수립 및 실행, 정보통신 기술(ICT)의 연구 개발을 지원하고, 디지털 격차 해소 및 정보 접근성 향상을 목표로 활동합니다. 또한, 국민의 정보화 역량 강화 및 디지털 전환을 위한 다양한 프로그램과 서비스를 제공하고 있습니다."}),l.jsx(pj,{href:"https://www.nia.or.kr/site/nia_kor/main.do",target:"_blank",rel:"NIA",style:{color:"#fff",marginTop:"15px"},children:"홈페이지 방문"})]})]})]}),l.jsxs(Rf,{children:[l.jsx(zs,{children:"지원 자격 & 방법"}),l.jsxs(Ja,{children:[l.jsxs(Zi,{children:[l.jsx("h3",{children:"지원 자격"}),l.jsx("p",{children:"1) 대한민국 국적의 만 19세 이상 만 34세 이하 청년"}),l.jsx("p",{children:"2) 국내 양자기술 및 ICT 관련학과 전공자"}),l.jsx("p",{style:{paddingLeft:"12px"},children:"※ 물리학, 전기‧전자 공학, 전산‧컴퓨터 공학, 정보‧통신 공학 등"}),l.jsx("p",{children:"3) 1일 8시간, 주 5일 전일제 근무가 가능한 자 "}),l.jsx("p",{children:"4) 채용일 기준 미취업 상태의 자 "})]}),l.jsxs(Zi,{children:[l.jsx("h3",{children:"지원 방법"}),l.jsx("p",{children:"양자산업생태계지원센터(KQIC) 홈페이지 참고"}),l.jsx("a",{href:"https://www.kqic.kr/main/educenter.html?sub1=31&menu=28",children:"바로가기"}),l.jsx("hr",{}),l.jsx("h3",{children:"수행 직무"}),l.jsx("p",{children:"지원기업 소속 인턴으로서 양자기술 분야 직무 수행 (2지망까지 선택하여 지원) "}),l.jsx("p",{style:{paddingLeft:"12px"},children:"※ 기업별 자세한 직무내용은 첨부의 '참여기업별 직무기술서' 필수 확인"})]})]})]})]})}));function mj(){return l.jsx(l.Fragment,{children:l.jsx(hj,{})})}const gj=w.div`
  height: 11vh;
  min-height: 80px;
  background-color: #292f36;

  @media (max-width: 780px) {
    min-height: 60px;
  }
`,Lm=w.div`
  display: flex;
  height: 100vh;
  background-color: #1c2329;
  color: #ffffff;
  min-height: 170vh;
  letter-spacing: 2px;
  cursor: text;
  user-select: text;
  height: auto;
  margin-bottom: -30vh;

  @media (max-width: 780px) {
    margin-left: ${({$isMenuOpen:e})=>e?"250px":"0"};
    transition: margin-left 0.3s ease;
  }
`,vj=w.nav`
  position: fixed;
  top: 0;
  left: ${({$isMenuOpen:e})=>e?"0":"-250px"};
  width: 250px;
  height: 100%;
  background-color: #141a1f;
  padding: 120px 20px;
  border-right: 1px solid #333;
  z-index: 100;
  transition: left 0.3s ease;
  overflow-y: auto;

  @media (min-width: 780px) {
    position: static;
    padding: 20px;
    left: 0;
    height: auto;
    z-index: auto;
  }
`,xj=w.button`
  display: block;
  width: 100%;
  background-color: ${({$isActive:e})=>e?"#333":"transparent"};
  color: ${({$isActive:e})=>e?"#fff":"#aaa"};
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  text-align: left;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;

  &:hover {
    background-color: #2a2f35;
    color: #fff;
  }
`,yj=w.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #141a1f;
  border-radius: 10px;
  position: fixed;
  top: 55px;
  left: 20px;
  z-index: 1000;
  cursor: pointer;

  .menu-icon {
    width: 30px;
    height: auto;
  }

  @media (min-width: 780px) {
    display: none;
  }

  &:hover {
    background-color: #333; 
  }
  &:active {
    border: 2px solid #60E6F2;
    background-color: rgba(0, 0, 0, 0.1); 
  }
`,Rm=w.div`
  flex: 1;
  padding: 50px;
  overflow-y: auto;
  margin-bottom: 30vh;
  @media(max-width: 780px){
    padding: 50px 20px;
  }
`,Mm=w.h1`
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  @media(max-width: 780px){
    font-size: 21px;
  }
`,wj=w.p`
  font-size: 17px;
  line-height: 1.7; 
  font-weight: 400;
  padding: 10px;
  border-left: 4px solid #60e6f2;
  margin-bottom: 20px;
  background-color: #2a2f35; 
  border-radius: 4px;
  color: #ccc; 
  &::selection {
    background-color: #60e6f2;
    color: #000;
    font-weight:
  }
  @media(max-width: 780px){
    font-size: 16px;
  }
`,Nm=w.div`
  margin-top: 25px;
  border-radius: 10px;
`,Am=w.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: #60E6F2;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  @media(max-width: 780px){
    font-size: 17px;
  }
`,jt=w.p`
  font-size: 16px; 
  line-height: 1.65; 
  margin-right: 20px;
  white-space: pre-wrap;
  margin-bottom: 25px; 
  padding: 10px 15px; 
  font-family: 'Arial', sans-serif;
  font-weight: 400; 
  letter-spacing: 0.8px; 
  background-color: #2a2f35; 
  border-radius: 5px; 
  color: #ddd; 
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  &::selection {
    background-color: #60e6f2;
    color: #000;
    font-weight: bold;
  }
  @media(max-width: 780px){
    margin-right: 0px;
    font-size: 13px; 
    line-height: 1.6;
    margin-bottom: 15px; 
  }
`,Sj=w.div`
  position: sticky;
  top: 0; /* 화면 상단에 고정 */
  z-index: 110; /* 다른 요소보다 위로 배치 */
  background-color: #141a1f; /* 배경색을 고정 */
  padding-top: 20px; /* 내부 간격 추가 */
`,jj="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M31.8327%2017.6433L23.0177%208.82166L20.6661%2011.1783L29.4811%2020L20.6661%2028.8217L23.0244%2031.1783L31.8327%2022.3567C32.4576%2021.7316%2032.8087%2020.8839%2032.8087%2020C32.8087%2019.1161%2032.4576%2018.2684%2031.8327%2017.6433Z'%20fill='white'/%3e%3cpath%20d='M21.3514%2018.8217L11.3514%208.82166L8.99976%2011.1783L17.8148%2020L8.99976%2028.8217L11.3581%2031.1783L21.3581%2021.1783C21.6697%2020.8649%2021.844%2020.4405%2021.8427%2019.9986C21.8415%2019.5567%2021.6648%2019.1333%2021.3514%2018.8217Z'%20fill='white'/%3e%3c/svg%3e",bj="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.6487%2011.1783L16.2921%208.82166L7.4704%2017.6433C6.8455%2018.2684%206.49445%2019.1161%206.49445%2020C6.49445%2020.8839%206.8455%2021.7316%207.4704%2022.3567L16.2921%2031.1783L18.6487%2028.8217L9.83373%2020L18.6487%2011.1783Z'%20fill='white'/%3e%3cpath%20d='M30.3158%2011.1783L27.9591%208.82166L17.9591%2018.8217C17.6467%2019.1342%2017.4711%2019.558%2017.4711%2020C17.4711%2020.4419%2017.6467%2020.8658%2017.9591%2021.1783L27.9591%2031.1783L30.3158%2028.8217L21.5008%2020L30.3158%2011.1783Z'%20fill='white'/%3e%3c/svg%3e",Ls=[{id:"양자기술동향",title:"양자기술동향",content:"양자기술동향의 개요입니다.",subsections:[{id:"국내외 시장 동향",title:"국내외 시장 동향",content:"전 세계 양자기술 시장의 총규모는 2023년 25조 9,024억 원이며, 연평균 29.2%의 높은 성장률을 지속해 2030년에는 155조 5,112억 원으로 커질 것으로 전망된다. 부문별로 살펴보면 양자통신 시장은 2023년 5조 209억 원에서 연평균 25.6% 성장해 2030년 24조 7,368억 원으로 커질 전망이다. 양자센싱은 2023년 2조 464억 원에서 연평균 19.1% 성장해 2030년 6조 9,482억 원으로 확대될 예정이다. 한편 양자컴퓨팅 시장은 2023년 18조 8,352억 원에서 연평균 30.9% 성장해 2030년 123조 8,263억원을 기록할 것으로 보인다. 이처럼 양자통신과 양자컴퓨팅은 무척 빠르게 성장할 예정이며, 양자센싱은 통신과 컴퓨팅보다 규모는 작지만 산업화 과정이 비교적 일찍 진행될 것으로 전망된다.",content2:""},{id:"국내외 정책 동향",title:"국내외 정책 동향",content:"해외 주요국들은 양자분야 활성화를 위해 정부 주도로 법·제도적 기반 마련과 함께 국가 양자기술 확보 정책 및 로드맵 수립에 나서고 있다. 이를 기반으로 대규모 예산을 장기적으로 투입해 기초연구를 지원하고, 산업적 응용 가능성이 높은 분야를 중심으로 산업화를 촉진하고 있다.",content2:"미국에서는 2020년 7월 네트워크 전략비전을 수립해 향후 10년 내 양자네트워크를 전국적으로 구현한다는 방침을 제시했다. 단기적으로는 2025년까지 양자 상호연결과 양자중계기, 양자메모리 개발 등에 역점을 둔다는 계획이며, 장기적으로는 2040년까지 국가 차원에서 양자네트워크를 통합한다는 전략이다. 양자센서 분야의 밑그림은 2022년 3월 백악관 국가과학기술심의회 양자정보과학 소위원회를 통해 제시됐다. 그 내용을 들여다보면 양자센서는 양자컴퓨팅 및 양자통신에 비해 비교적 성숙시장이나, 전체적으로는 아직 초기단계에 불과하고 향후 다양한 산업영역에서의 활용이 기대되므로 지속적 투자를 통한 단기적 산업 활성화가 필요하다는 방향성을 담고 있었다.",content3:"유럽은 ‘양자 선언문(Quantum Manifesto)’에 근거한 10억 유로(약 1조 3,500억 원) 규모의 연구개발 투자가 진행 중에 있다. 과학 연구와 산업경쟁력을 강화해 ‘제2의 양자 혁명’에 불을 붙이는 것이 목적으로 영국, 독일, 네덜란드 등의 국가에서는 독자적인 양자기술 전략과 정부 투자도 준비하고 있다. ",content4:"중국은 국가적으로 양자기술에 주력하고 있다. 특히 양자통신 분야에서의 기술이 눈에 띄게 발전 중인데, 베이징과 상하이를 연결하는 총 2,000km가 넘는 양자통신 간선 네트워크를 구축했고 인공위성 ‘묵자’에 의해 양자암호키를 분배하고 양자 텔레포테이션 실험에 성공하는 등 대표적인 성과들을 내놓고 있다. 양자컴퓨터 분야에서도 ‘지우장(九章) 2호’, ‘쭈층즈(祖沖之) 2호’를 통해 양자초월 실험을 검증하는 등 매우 적극적으로 연구개발을 진행하고 있다. ",content5:"일본은 2017년 8월 문부과학성이 ‘양자과학기술(광ㆍ양자기술)의 새로운 추진 방책’을 발표하며 양자기술 육성의 신호탄을 쐈다. 이어 2018년 12월에는 내각부가 “향후 이노베이션을 추진하는데 있어 중요한 3가지 분야”로 AI, 바이오와 더불어 ‘광ㆍ양자’를 언급했다. 또 2020년 1월에는 일본 최초의 양자기술에 관한 통합 전략인 ‘양자기술 이노베이션 전략’을 발표하며, 양자기술 개발에 대한 글로벌 트렌드에 합류하기 시작했다. 또한 2022년 4월 ‘양자미래사회비전’을 공표하여 양자기술을 사회경제시스템 전체에 도입하고 기존 기술 시스템과의 융합을 통해 일본 산업의 성장기회를 창출하고 사회 과제를 해결하기 위한 노력을 진행하고 있다.",content6:"우리나라의 경우 출발이 상대적으로 늦은 탓에 다른 나라에 비해 큰 기술격차를 보이고 있다. 이에 과학기술정보통신부에서는 2019년부터 양자센서 분야ㆍ양자컴퓨터 분야ㆍ양자암호통신 분야 신규사업지원을 확대하고 있다. 구체적으로 대학, 연구소 등 연구조직을 강화하고, 양자암호통신인프라 시범사업을 추진 중에 있으며, 산업 생태계 활성화를 위한 다양한 노력을 기울이고 있다."},{id:"국내외 투자 동향",title:"국내외 투자 동향",content:"해외 주요국은 양자시장을 초기 선점하기 위해, 경쟁적으로 대규모 관련 예산을 편성하고 장기적 관점에서 투자를 확대하고 있다. 미국, 중국 등 선진국 간 패권 경쟁에 의한 국가 차원의 투자는 물론이고, 민간 차원의 투자 규모도 대폭 늘어나는 추세이다. 현재 세계 주요국의 양자분야 투자 규모를 간략히 살펴보면 다음과 같다. ",content2:"미국의 경우 2023년 美 연방정부 및 각 기관으로부터 요청된 관련 예산 총합은 8억 4,400만 달러(약 1조 972억 원)이다. 2022년의 경우 8억 7,700만 달러(약 1조 1,401억 원)가 요청됐지만, 실제로는 9억 1,800만 달러(약 1조 1,934억 원)가 투입된 것으로 추정된다. 유럽연합(EU)은 2018년 10월 양자플래그십(Quantum Flagship)을 출범시키고, 이를 통해 2018년부터 향후 10년간 양자기술에 10억 유로(약 1조 3,000억 원)의 예산 투입 계획을 밝히고, 현재 활발한 투자를 진행하고 있다. 2014년 영국은 향후 10년 동안 민관 공동으로 10억 파운드(약 1조 5,000억 원)의 투자를 발표한 바 있다. 이후 2023년 2월 국가양자전략(National Quantum Strategy, NQS)를 통해 2024년부터 향후 10년간 양자기술에 25억 파운드(약 3조 7,500억 원)를 투자할 계획임을 밝혔다. 독일은 양자기술-기초에서 시장까지(Quantum technologies-from basic research to market)라는 이름의 프레임워크 프로그램을 통해 2018년부터 2022년까지 양자기술 R&D에 6억 5,000만 유로(약 8,450억 원)를 투자했으며, 2023년 4월 양자기술에 대한 실행 계획(Germany’s Action Plan for Quantum Technologies)을 발표하며 2026년까지 30억 유로(약 3조 9,000억 원)를 투자할 계획임을 밝혔다. 프랑스는 2021년 국가양자기술전략(Stratégie nationale sur les technologies quantiques)을 발표하면서 2025년까지 5년 동안 양자기술에 18억 1,500만 유로(약 2조 3,595억 원)를 투자할 것이라고 밝혔다. 캐나다의 경우, 2023년 1월 국가양자전략(National Quantum Strategy, NQS)을 통해 향후 7년간 양자기술에 3억 6,000만 캐나다 달러(약 3,600억 원)의 투자를 발표했다.",content3:"중국은 제14차 5개년 계획(2021~2025) 및 2035 중장기 목표를 발표하며 양자통신과 양자컴퓨터에 투입되는 연구개발비를 매년 7% 이상 증액하겠다고 밝혔다. 일본은 양자기술 이노베이션 전략을 수립하며 추경 예산을 통해 양자기술에 대한 예산을 증액했고, 2022 회계연도 예산은 추경 예산까지 포함된다면 기존 대비 2배 이상 확대된 800억 엔(약 8,000억 원)이 투입된 것으로 추정되고 있다. 한국의 경우, 2022년 양자 R&D 전용사업에 699억 원 수준의 예산이 투입됐으며, 2023년 6월에는 과학기술정보통신부가 대한민국 양자과학기술전략을 발표하면서 2035년까지 민관 공동으로 3조 원을 투자할 것임을 밝혔다. "},{id:"국내외 표준화 동향",title:"국내외 표준화 동향",content:"양자기술은 크게 양자통신, 양자센서, 양자컴퓨팅 세 분야로 구분할 수 있다. 그 중 국내외 표준화가 가장 활발한 분야는 양자통신(양자암호통신/양자 키 분배 중심)이며, 다음으로 양자컴퓨팅과 양자센서 순으로 활성화가 예상된다. 이와 동시에 세 분야의 양자디바이스를 네트워크 형태로 묶기 위한 양자네트워크 혹은 양자인터넷도 표준화 시도가 한창이다. ",content2:"양자암호통신은 2008년 ETSI(유럽전기통신표준화기구, European Telecommunication Standard Institute)에서 QKD ISG(Quantum Key Distribution Industry Specification Group)가 설립되면서 표준화가 시작됐다. 주로 양자암호통신 시스템 구현을 위한 표준기술이 연구됐으며, 장비 제조사와 대학 및 연구기관들이 주로 참여했다. 반면 ITU(국제전기통신연합, International Telecommunication Union)에서는 2018년 한국의 KT 및 SKT가 각각 양자암호 네트워크 표준 및 양자암호 보안 표준화 제안이 착수됐다. 그동안 ETSI 표준이 제공하지 못하던, 비용효율적인 양자암호 인프라 구축과 서비스를 위한 기술 표준개발이 시작된 것이다. 현재 ETSI는 20여 개의 산업규격 문서를 발간했고, ITU는 50개 이상의 권고안을 개발하는 등 국제표준 기반 상용화가 어느 정도 준비된 것으로 여겨지고 있다. 특히 ITU의 양자암호 네트워크 국제 표준화는 한국이 선도하고 있다.",content3:"양자컴퓨팅은 ISO/IEC(국제표준화기구, International Organization for Standardization/국제전기기술위원회, International Electrotechnical Commission) 중심으로 표준화를 준비하고 있으나, 실질적인 표준 문서의 개발은 미진한 상황이다. 최근 IEC에서 한 국 주도하에 Quantum SEG(Standardization Evaluation Group)가 설립된 후 ISO/IEC 간에 JTC-Q(Joint Technical Committee – Quantum)를 설립하고 QT(Quantum Technology) 분야에 대한 실제 표준화에 착수하기로 잠정 합의되었기에, 향후 해당 분야의 국제 표준화 과정에서 한국의 활약이 기대된다. 한편 양자디바이스(양자컴퓨터, 양자센서, 양자 키 분배 시스템 등) 간 정보를 양자상태로 교환할 수 있는 양자네트워크 혹은 양자인터넷에 대한 국제표준화도 ITU와 IETF/IRTF(인터넷 기술 전문위원회, Internet Engineering Task Force/인터넷 연구 전문위원회, Internet Research Task Force)에서 착수에 들어가 주요 표준화 경쟁 이슈로 대두하고 있다."}]},{id:"양자기술 R&D 동향",title:"양자기술 R&D 동향",content:"양자기술 R&D 동향 개요입니다.",subsections:[{id:"국내외 양자통신 R&D 동향",title:"국내외 양자통신 R&D 동향",content:"양자통신은 양자시스템을 이용해 정보를 전달하는 기술을 통칭한다. 통신에 활용되는 양자기술은 주로 빛의 입자적 특성을 가지는 광자이다. 기존의 광통신기술은 빛 다발(100만 개 이상의 광자)을 이용해 정보를 전달한다. 반면 양자통신은 단일광자 혹은 결맞음 광자를 이용하기 때문에, 양자역학을 이용한 보안성 강화에 활용할 수 있는 장점이 있지만, 구현상 많은 제약이 존재한다. 양자통신은 양자 상태로부터 암호키를 추출하는 양자 키 분배 기술과 양자상태를 전송하는 양자 네트워킹 기술이 주로 구현되고 있으며, 거리를 확장하기 위한 중계기 기술들이 연구되고 있다. 구현 방법에 따라 전용 광 선로가 필요한 유선 방법과 대기 중으로 신호를 송수신하는 무선 방법이 있는데, 국내외 기술은 유선과 무선에서 차이가 있다. ",content2:"유선의 경우 국내 양자 키 분배 기술은 주요 선진국의 기술을 바짝 추격하고 있으며 최근 대기업 및 중소기업들이 양자 키 분배 장비를 생산하며 산업생태계도 활성화되었다. 2020년부터 양자암호통신을 공공 및 민간 분야 26개 기관에 시범 구축하여 실제 망에서의 운용 레퍼런스를 확보함으로써 2023년에는 산업체가 개발한 양자 키 분배 장비를 국내 국가공공망에 도입하기 위한 인증 제도가 세계 최초로 시행되었다. 양자 키 분배 외에 양자를 이용한 보안기술 제공을 위해서는 양자 인증 및 서명 등이 필요한데, 국내외 기술 수준은 연구 단계로서 실험실 수준에 머물러 있으나 양자 인증을 중심으로 점차 실증 단계에 접어들 것으로 예상된다. ",content3:"무선의 경우 국내외 격차가 작지 않다. 국내 무선 양자통신은 2018년 한국전자통신연구원(ETRI)이 100 m 실험을 성공한 뒤 KT가 2022년에 1 km 실험에 성공한 것이 주목할 성과이다. 최근에는 드론을 이용한 양자통신연구도 진행 중이나 아직은 가시적 성과를 나타내기엔 이르다. 반면 해외의 경우 중국을 중심으로 위성을 이용한 무선 양자암호통신이 상당한 성과를 보이고 있다. 최근에는 지상의 유선 양자통신과 결합하여 총 4,600 km의 양자암호통신에 성공하였다. 여기에 유럽, 일본, 캐나다 등의 주요 선진국들이 위성을 이용한 양자통신 계획을 수립하여 진행 중이다. 현재는 양자 키 분배를 넘어 양자인터넷으로 가기 위한 기술개발이 국내외에서 활발히 이루어지고 있다."},{id:"국내외 양자센싱 R&D 동향",title:"국내외 양자센싱 R&D 동향",content:"양자센서는 특정 물리량의 측정을 위해 양자 결맞음, 양자 간섭, 양자 얽힘과 같은 현상을 이용하여 매우 민감도 높은 센싱이 가능하도록 구현된 양자시스템 형태의 센서를 의미한다. 이를 측정 물리량으로 구분 시 대표적으로 양자관성센서, 양자시간·주파수센서, 양자 전기장·자기장 센서, 양자광학센서 등으로 나눌 수 있다. 이러한 양자센서 기반의 응용분야들은 원자 시계, 양자 자이로, 양자 중력계, 양자 이미징 센서 등으로 알려져 있으며, 본 기술들을 이용하여 뇌 스캐너, 지하 구조물 측정, 헬스케어, 반도체, 국방 등에 활용될 기술을 구현하기 위한 노력이 이루어지고 있다.",content2:"양자관성센서의 경우 물리량에 따라서 중력, 가속도, 회전 등의 측정을 위해 원자, 물질파, 광역학계 등의 양자 현상을 이용하고 있으며, 국방 분야, 자동차 자율주행 등에 활용 가능한 관성항법 및 지문항법용 양자관성센서 연구가 활발히 진행 중이다. 최근 중력 및 항법 기술의 수요로 현장 이동형 및 탑재형 양자 중력계 연구가 활발히 진행 중이며, 또한, 양자중력계의 활용도를 높이기 위한 소형화 연구도 진행중이다. ",content3:"양자중력센서의 경우 지하 싱크홀 및 지하수 수위 등 지층의 변화를 탐지하여 재난대비, 지하 마그마 이동 감지 등을 통한 화산 및 지진 조기 탐지 등에 활용 가능하며, 탑재 가능하도록 개발하면 자원 탐사, 해양 및 지질 조사, 중력지도 작성 및 중력 항법 등을 위한 센서가 될 것으로 바라보고 있다. 양자관성센서 기반의 고정밀의 관성항법 및 지문항법을 하게 되면 GPS 등과 같은 항법위성이 불가한 환경이나 지역에서 항법이 가능하므로, 기존 관성센서의 성능을 뛰어넘는 양자관성센서 개발 연구가 활발히 진행되고 있다. 양자시간·주파수센서의 경우 높은 정확도 및 안정도의 시간 및 주파수를 발생, 동기 및 측정에 결맞음, 간섭 등의 양자현상을 이용하고 있으며, 첨단산업, 국방분야, 방송·통신 등의 기술 발전에 따라 더 정확하고 안정적인 기준 시각 및 주파수원을 필요로 하고 있어, 고정밀 또는 초소형의 양자시간·주파수센서 연구가 활발히 진행되고 있다. 기존의 마이크로파 전이를 이용하는 양자시계(마이크로파 원자시계)의 정확도 및 안정도를 뛰어넘는 광주파수 전이 기반의 양자시계(광시계) 연구가 되고 있으며, 최근에는 원자의 핵전이를 이용하는 핵시계 개발을 시도하고 있다. 시간은 모든 물리량 중에 가장 정확한 측정이 가능하고, 다른 물리량 측정이 소급되어 사용된다. 정확한 시간 측정은 기초과학 및 측정과학의 발전에 기본이 되는 기술이다. 시계는 통신·방송 뿐 아니라 대부분의 측정 장비에 내장되어 사용되므로 그 활용도를 높이기 위한 초소형 원자시계도 활발히 연구되고 있다. 또한, 위성항법이 시간 및 주파수를 기반으로 하고 있으므로, 위성에 탑재하기 위한 위성탑재형 양자시계, 지상국의 시각 및 주파수원을 위한 초정밀 양자시계 등에 관한 연구도 진행되고 있다. 특히, 양자관성센서 기반의 관성 및 지문 항법에는 고정밀 시계가 필수적이며, 사용되고 있는 시계의 정확도 및 안정도가 항법의 정확도를 결정하는 가장 기본적인 것이므로 항법용 고정밀 원자시계, 항법장비 및 측정장비에 내장하기 위한 초소형 원자시계, 초소형 광주파수합성기 등에 관한 연구가 활발히 진행하고 있다. ",content4:"양자전기장 센서는 비교적 근래에 주목받고 있는 양자센서이다. 전기장의 측정 감도를 고전 기술 이상으로 극복함과 동시에, DC부터 THz 대역까지 광대역 주파수에서 전기장의 측정이 가능한 기술로 알려져 있다. 최근 리드버그 원자를 구현할 수 있는 요소 기술들이 개발되면서 활발히 연구가 진행되고 있으며, 특히 국방 분야와 통신 분야에서 유망한 기술로 알려져 있다. 주로 미국과 유럽이 선도하여 연구를 진행해 왔으나, 최근에는 중국에서 많은 연구 결과가 도출되는 특징이 있다. 미국의 경우 미국 표준기술연구소(National Institute of Standards and Technology, NIST)와 콜로라도 대학이 통신 분야의 연구를 주도하고 있으며, 관련회사가 창업되어 상업화가 진행 중이다. 또한 광대역 주파수에 해당하는 전기장을 안테나 크기와 무관하게 단일 센서로 측정할 수 있어, DARPA와 미 육군 연구소에서는 국방관련 기술로 활용하기 위한 연구가 진행되고 있다. NASA의 경우 지구관측을 위해 위성에 탑재하는 연구를 시작하였다. 유럽의 경우 산업에 활용될 전기장 이미징 기술 연구를 진행하고 있다.",content5:"양자자기장 센서의 경우 원자, 점결함 스핀 큐비트의 Zeeman 효과를 이용해 자기장을 정밀하게 측정함으로써, 고전적인 자기장 측정 방법의 한계를 극복하는 기술로 알려져 있다. DC에서 AC까지 넓은 주파수 영역의 자기장을 측정하고, 측정 대상도 단일 스핀, 자성 물질, 전류 소자, 바이오 활성, 지구자기장 왜곡 등 다양하므로 기초물리, 생명 분야에서부터 공학, 산업, 의료, 국방에 이르기까지 활용 분야가 넓다. 대표적인 플랫폼으로는 원자 증기 기반의 원자자력계와 다이아몬드 NV(Nitrogen-Vacancy) 센터로 대표되는 고체 점결함 기반 자력계가 있다.",content6:`양자광학센서는 얽힘 상태 등의 양자광원을 이용해 고전적인 측정의 한계를 돌파하는 기술이다.최근 양자조명, 양자라이다, 양자레이다, 양자이미징, 양자가스센싱 등의 다양한 분야에서 활발한 연구가 진행되고 있다. 고전 광원 기반 이미징은 근본적으로 분해능(Rayleigh) 한계, 감도(Shot-Noise) 한계 이상의 계측이 불가능한데, 양자광원의 양자이득을 이용해 분해능 한계를 극복하거나, 샷노이즈 이하의 고감도 측정이 가능하다. 그뿐만 아니라 양자광원을 이용해 피사체와 상호작용 없이 측정이 가능한 고스트 이미징(Ghost Imaging) 등의 양자광학센서 기술이 존재한다. 양자광학센서는 기본적으로 양자광원기술이 선행돼야 하며, 양자광원의 상관관계 특성, 얽힘 특성 등을 이용해 배경 잡음 환경 또는 약한 조명에서 측정하는 연구들에 응용되고 있다. 이 때문에 낮은 광량을 요구하는 바이오 분야에 적용할 수 있으며, 양자레이더와 같이 탐지 회피를 시도하는 스텔스 비행기에 대응하는 기술로도 주목받고 있다.

양자 계측(Quantum Metrology)은 얽힌 상태(Entangled State)나 진공 압축 상태(Squeezed Vacuum State)를 이용하여 고전적 방식으로 도달할 수 있는 측정 한계를 뛰어넘는 기술로, 양자 변수 추정(Quantum Parameter Estimation)과 양자 가설 시험(Quantum Hypothesis Testing)으로 나누어 생각할 수 있다.
양자 변수 추정에서는 변수 측정 정밀도를 최소화하는 것이 목표인데, 고전 상태(혹은 표준 양자 상태)를 이용하는 경우 도달할 수 있는 측정 정밀도 한계가 입력 평균 광자 수 N의 제곱근에 반비례하지만, 얽힌 상태나 진공 압축 상태를 이용하면 측정 정밀도 한계가 N에 반비례하게 된다. 즉, 더 적은 양의 입력 평균 광자수로도 고전 측정 정밀도의 한계에 도달할 수 있으며, 같은 양의 입력 평균 광자수를 고려할 경우에는 고전 측정 한계보다 N의 제곱근만큼 측정의 정밀도를 향상시킬 수 있다.
양자 가설 시험에서는 물체 탐지 오류율을 최소화하는 것이 목표인데, 얽힌 상태를 이용하면 표준 양자 상태(Standard Quantum State)로 도달할 수 있는 물체 탐지 오류율을 지수 (Exponent)의 4배까지 향상시킬 수 있게 된다. 현재, 양자 변수 추정은 다중 변수(Multi-Parameter)의 측정 정밀도에 대한 연구가 광학 및 원자 시스템에서 이루어지고 있고, 양자 가설 시험은 물체 탐지 오류율을 최소화하는 것뿐만 아니라 반사율이 다른 2개의 물체를 구분하는 연구가 광학 및 극저온 시스템에서 이루어지고 있다.근대에 들어 눈부신 과학기술의 발전으로 이미 수많은 센서가 발명됐고 일상생활부터 첨단과학 분야까지 널리 사용되고 있다. 그러나 국방, 우주, 반도체, 바이오, 원자력, 기후 변화, 자율주행, 전기차, 로봇 등 첨단과학 기술의 발전과 함께 새로운 센서의 개발도 끊임없이 요구되고 있다. 최근 우리는 코로나로 인한 전 세계적 팬데믹 현상을 통해 사회가 요구하는 새로운 센서의 개발 필요성과 이와 연관된산업의 발전을 볼 수 있었다. 다가온 양자혁명 2.0 시대를 맞이해 미래를 대비하고 새로운 수요에 대응하려면, 우리도 양자센서기술에 대한 집중 투자와 개발을 서둘러야 할 것이다.`},{id:"국내외 양자컴퓨팅 R&D 동향",title:"국내외 양자컴퓨팅 R&D 동향",content:`기존 컴퓨터 시스템에서 통용되던 무어의 법칙(Moore’s law)은 한계에 도달했고, 양자컴퓨팅은 그 한계를 넘어서는 새로운 컴퓨팅 방식을 우리에게 제시하고 있다. 양자컴퓨팅은 양자이론의 법칙을 따르는 미시세계의 물리시스템을 활용해 실제 구현할 수 있으며, 양자원리를 바탕으로 계산을 수행함으로써 기존 컴퓨팅에서 불가능하다고 여겨졌던 연산을 수행할 수 있다. 대표적인 예로 현재 컴퓨팅에서 어렵다고 여겨지는 소인수분해 문제를 양자컴퓨팅은 손쉽게 해결한다. 이러한 양자컴퓨팅 능력을 잘 활용한다면 국방, 금융, 의료, 인공지능 등 다양한 첨단산업에서 엄청난 경제·사회적 효과를 기대할 수 있다. 따라서 세계 주요 국가들은 정부 주도의 R&D 투자를 통해 발 빠르게 대응 중이며, 민간 부문 투자와 산·학·연의 연구개발도 전 세계적으로 활발히 진행되고 있다. 

양자컴퓨팅은 큐비트(Qubit)의 물리적 근원에 따라 다양한 플랫폼 영역에서 구현되며, 양자컴퓨터 하드웨어 및 소프트웨어는 양자중첩상태를 유지하는 결맞음 시간(Coherence Time) 내에 연산 가능 횟수를 증대시키는 방향으로 발전하고 있다. 또한 양자컴퓨팅의 역사는 수십 년간 지속된 이론적 검증과 실험적 증명을 거쳐 명확한 목표를 가진 실용화 및 범용화 단계에 이르렀고, 이를 구체화한 ‘확장형 양자컴퓨터’를 개발하려는 노력이 전 세계적으로 진행 중이다. 현재 개발 중인 양자컴퓨팅은 플랫폼에 따라 각각의 특성이 명확하며, 다음과 같이 크게 여섯 종류로 구분할 수 있다.`,content2:"첫째, 초전도 큐비트 기반의 양자컴퓨팅 플랫폼이다. 초전도는 전자빔 및 포토리소그래피, 식각 공정 등과 같은 기존에 확립된 반도체 공정을 이용해 제작할 수 있어, 확장성이 높아 현재 가장 주목받는 양자컴퓨팅 플랫폼이다. 다른 플랫폼이 이온, 원자 등의 에너지 준위가 정해진 순수한 양자상태를 이용하는 것과 달리, 초전도 큐비트는 양자상태의 에너지 준위를 ‘설계’할 수 있어 원하는 작동 주파수 대역을 정의 가능한 장점이 있다. 초전도 큐비트는 회로의 구성 요소 및 배열에 따라 전하(Charge) 큐비트, 위상(Phase) 큐비트, 플럭스(Flux) 큐비트, 트랜스몬(Transmon) 큐비트, 플럭소니움(Fluxonium) 큐비트 등 다양하게 구분되며, 각각의 장단점이 명확하므로 개발에 참여한 기업들도 저마다 다른 플랫폼을 채택해 양자컴퓨터를 구축하고 있다.",content3:"두 번째로 소개할 양자컴퓨팅 플랫폼은 반도체 양자점이다. 전계효과 트랜지스터와 흡사한 반도체소자의 게이트 구조로 에너지 우물을 형성하고, 그곳에 갇힌 전자나 홀 같은 입자의 스핀 상태를 큐비트 에너지 준위로 사용하는 방법이다. 스핀 자유도와 전하 자유도의 혼합 정도에 따라 단일전자 스핀 큐비트(큐비트당 1개 양자점), 싱글렛-트리플렛 큐비트(큐비트당 2개 양자점), 교환 상호작용 큐비트(큐비트당 3개 양자점) 등으로 구분할 수 있다. 높은 게이트 충실도를 시연하기까지 다른 플랫폼에 비해 오랜 기간이 소요됐지만, 최근 스핀 잡음을 최소화한 동위원소 정제형 실리콘 기판의 개발과 함께 급격히 발전하고 있는 플랫폼이다. 실리콘 내부 스핀의 높은 결맞음 시간뿐 아니라 높은 충실도의 단발 측정이 가능하고, 큐비트 계의 양자제어를 위한 파라미터를 게이트 전압으로 쉽게 조절할 수 있는 특징을 가진다. 특히 모든 플랫폼 중 현대 반도체 산업의 상보성 금속산화물 반도체(Complementary Metal-Oxide Semiconductor, CMOS) 공정과 가장 높은 호환성을 보여, 향후 대규모 집적형 양자프로세서 제작 과정에서 70년 이상 발전해온 실리콘 산업공정을 그대로 사용할 수 있는 장점을 갖고 있다. 또한, 실리콘과 같은 4족 원소로서 게르마늄(Ge)은 전자가 아닌 양공(hole)의 스핀을 이용하는 p-type 반도체 양자컴퓨팅 소재로 새롭게 부각되고 있다. 이는 같은 핵스핀 밀도에 의해 양공 스핀이 잡음이 적으며, 인위적인 마이크로 자석 공정 없이도 전기적으로 스핀을 조절할 수 있는 스핀-궤도 상호작용이 적정하기때문이다. ",content4:"셋째, 이온 트랩 기술이다. 이온 트랩은 레이저 쿨링 및 전자기적인 포텐셜을 이용해 초고진공하에서 개별 이온들을 포획하는 방법으로, 포획된 이온들의 잘 정의된 양자상태를 큐비트로 규정하고, 외부에서 레이저나 라디오파로 큐비트를 조작해 양자계산을 구현하는 기술이다. 포획된 개별 이온들은 외부 환경과 잘 분리되어 있으므로 긴 양자결맞음 시간을 가지며 초기화, 측정, 양자게이트 각각에 대한 높은 신뢰도를 보여주는 장점이 있다. 또한 포획된 이온 간에 공유하는 양자운동을 활용해, 임의의 두 큐비트 간 고신뢰도 양자얽힘도 가능하므로 상호 연결성이 높으며, 이는 이온 트랩 기반의 양자컴퓨터가 가지는 중요한 장점이다. ",content5:"넷째, 양자광학에 기반한 컴퓨팅이다. 양자광학은 빛을 구성하는 근본적 단위인 광자를 이용해 광학 현상을 설명하는 이론이며, 광자는 한자리에 고정된 다른 물리계와 달리 멀리 보낼 수 있어 흔히 플라잉(Flying) 큐비트라고 부른다. 이러한 특성은 양자통신이나 양자네트워크에 적합해, 이를 이용한 양자컴퓨터/양자 시뮬레이터의 확장성 제고에 큰 도움을 줄 것으로 기대된다. 또한 광자시스템 자체를 양자컴퓨터나 양자 시뮬레이터에 이용할 수 있는데, 이 경우 주변환경과의 상호작용으로 인한 결잃음(Decoherence)에 강인한 특성이 큰 장점이 된다. 이러한 양자광학 기반의 양자컴퓨터를 구성하기 위해선 양자광원의 생성, 제어, 검출이 필요하다. 이와 관련된 기술은 지난 수십 년간 크게 발전했으며, 최근에는 기존 슈퍼컴퓨터로 불가능했던 연산을 양자광학 기반 양자 시뮬레이터를 이용해 가능케 한, 이른바 ‘양자이득 실험’을 성공하기에 이르렀다. 이처럼 급격하게 발전하는 집적광학 기술을 양자컴퓨터/양자 시뮬레이터에 적용하기 위한 연구가 널리 진행되고 있으며, 이는 양자컴퓨터의 실용성을 크게 높일 것으로 기대한다. ",content6:"다섯째, 다이아몬드 Nitrogen Vacancy(NV) 센터이다. 긴 결맞음 시간과 잘 정의된 광학 특성으로 인해 양자정보 기술 분야에서 주목받는 소재로 떠올랐다. 다이아몬드 NV 센터를 이용한 컴퓨팅 개발은 소재, 공정, 전자기 신호 처리 및 제어, 광학 회로설계 및 구성과 같이 다양한 분야의 기술들이 접목돼 있다. 먼저 다이아몬드 소재를 양자현상 관찰에 적합한 수준으로 성장시키고, 성장한 다이아몬드기판의 원하는 위치에 NV 센터를 형성할 수 있어야 한다. NV 센터의 전자스핀과 주변 핵스핀들을 연산에 활용하기 위해 스핀들의 상태를 읽고, 제어하고, 작업에 필요한 시간을 충분히 확보할 수 있도록 결맞음 시간을 확장하는 기술이 필요하다. 덧붙여, 활용 가능한 큐비트의 개수를 늘리고 서로 연결이 가능하게끔 만들어 시스템의 확장성을 늘릴 필요가 있다. ",content7:"마지막으로 리드버그(Rydberg) 기반의 양자컴퓨팅을 들 수 있다. 중성원자의 리드버그 원자 상태(마이크로미터 크기의 원자 상태)를 이용해 기존 컴퓨터로는 불가능한 고난도 계산을 수행할 것으로 기대된다. 중성원자를 수 마이크로미터 간격으로 이동 배치해 임의의 큐비트 연결 구조로 만드는 기술이 개발되면서 빠른 발전을 보여주고 있다. 양자단열형(또는 양자회로형과 결합한 혼합형) 양자컴퓨팅 방식으로 NP(비결정적 다항)-완전 문제를 계산하는 개념증명 실험이 완료됐고, 상업적 활용을 위한 개발 연구가 본격적으로 이뤄지고 있다."}]},{id:"양자기술 소재·부품·장비 산업생태계 동향",title:"양자기술 소재·부품·장비 산업생태계 동향",content:"양자기술 소재·부품·장비 산업생태계에 대한 개요입니다.",subsections:[{id:"양자통신분야 주요기술과 소부장",title:"양자통신분야 주요기술과 소부장",content:"양자산업을 구성하는 소재, 부품, 장비, 서비스의 개념을 살펴보면 소재는 양자기술을 구현하기 위한 바탕이 되는 재료를 말하며 고순도 단결정 양자소재, 반도체 소재, 유전체 소재, 초전도 소재 등이 이에 해당한다. 부품은 독립적인 동작도 가능하고 다른 부품과 함께 장비를 이루는 요소 기술도 될 수 있는데 단일광자 검출기, 양자난수 생성기(QRNG), 광분리기 등이 이에 해당한다. 그리고 장비는 양자기술을 활용하여 서비스 제공이 가능한 장치를 말하며, 어떤 서비스를 제공하느냐에 따라 다른 장비와 함께 구성할 수 있는 가능성도 존재한다. 또한, 장비의 일부로서 양자 환경을 제공하는 장치 또한 장비의 정의에 포함할 수 있다. 마지막으로 서비스의 경우 양자기술이 적용된 장비 등을 활용해 유·무형의 생산물을 사용자에게 제공하는 것을 말하는데, 양자 암호 서비스, 양자컴퓨팅 클라우드 등이 이에 해당한다.",content2:"전 세계적으로 초기 단계인 양자산업의 현실을 고려할 때, 주요 양자기술의 확보를 통해 시장 선점에 성공할 경우 공급망 안정은 물론 해외시장 개척까지 기대할 수 있다. 그러나 시장 선점에 심패한다면 국내 양자산업은 주요 소재·부품·장비 공급을 해외 수입에 전적으로 의존해야 하는 등 취약한 구조로 내린 위험 성이 높다. 더욱이 각국의 양자기술에 대한 전략적 수출규제가 예상되는 상황에서, 미래 국가경쟁력 유지를 위해 양자기술 관련 글로벌 공급망의 다원화와 함께 주요 소재·부품·장비에 대한 내재화가 절실하게 요구된다. "},{id:"양자센싱분야 주요기술과 소부장",title:"양자센싱분야 주요기술과 소부장",content:"고전 센서로는 측정할 수 없었던 신호를 측정할 수 있고 높은 정밀도를 갖는 고감도 센서와 정밀 측정에 의한 각종 데이터의 중요성이 증가하고 있다. 특히 강조되고 있는 분야가 국방, 바이오, 의료, 자율 주행, 반도체 등의 부문이다. 양자센서 기술을 통해 탐지 회피를 시도하는 스텔스기에 대응하는 국방 분야에서부터 첨단 MRI와 같은 낮은 광량을 요구하는 의료 분야에 이르기까지 산업도메인별로 다양하게 활용가능한 첨단 서비스를 제공함으로써 국민 생명 및 안전과 직결된 분야인 만큼 매우 높은 수준의 센서 정밀도가 요구되고 있다. 그런 측면에서 기존 센서로는 도달하지 못하는 수준의 높은 분해능 및 정밀도, 높은 감도, 그리고 측정 속도가 빠른 양자센서가 미래 핵심산업으로 각광받고 있다.",content2:`양자센서는 측정하고자 하는 물리량에 따라 양자관성센서, 양자 시간·주파수 센서, 양자 전기장센서, 양자 자기장센서, 양자광학센서 등으로 구분된다. 이 중 양자관성센서는 중력센서, 가속도센서, 회전센서로 구성된다. 양자중력센서는 극저온 원자를 이 용한 양자간섭현상을 이용하고, 가속도계는 원자간섭계 기반의 센서, 광역학계 기반의 센서등이 있고, 회 전센서는 원자간섭계 기반의 센서, 원자스핀 기반의 센서, NV 센터 기반의 센서 등이 있다. 양자 시간·주파 수 센서의 경우, 원자의 결맞음 현상이나 양자간섭현상을 이용해 시간 및 주파수를 생성하거나 측정한다.

원자를 기반으로 하는 양자센서 기술에 사용되는 주요 소부장으로는 원자소스, 레이저 다이오드, 원 자증기, 냉각 원자빔 소스, 음향 광학 및 전기 광학 변조기, 파형 생성기 등이 있다. 양자 전기장센서는 원자를 리드버그 상태로 만들어 전기장을 측정하는데 주요 소부장으로는 원자증기셀, 조사광용 및 분석 광용 레이저, 파장계 등이 있다. 또 양자 자기장센서의 경우 원자증기를 이용한 센서, 자기장센서와 고체 의 점 결합을 이용한 센서 등이 있다. 그 구현 방식에 따라 원자증기셀, 고순도 단결정 다이아몬드 등의 소재를 사용하며 포토다이오드, 음향 광학 변조기, 임의파형 생성기 등을 주요 소부장으로 볼 수 있다.

끝으로 양자광학센서는 비선형 결정, 반도체 양자 점소재, 비선형 양자광원, 단일광자 광원 등의 주요 소부장이 있다. 양자센서는 큐비트, 양자결맞음, 양자얽힘 등 다양한 특성을 이용해 측정작업을 수행하기에 다양한 소부장으로 구성되어 있다.`,content3:"기본적으로 센서 영역은 측정하고자 하는 물리량의 종류가 다양하다. 따라서 다양한 종류의 센서로 구분될 수밖에 없다. 결과값으로 제시되는 물리량은 서로 다르나 유사한 원리로 동작하기에, 일부 센서의 경우 동일한 소부장을 사용하기도 한다. "},{id:"양자컴퓨팅분야 주요기술과 소부장",title:"양자컴퓨팅분야 주요기술과 소부장",content:"양자컴퓨터는 '꿈의 컴퓨터'로 불리고 있다. 세계 최고 슈퍼컴퓨터를 사용해도 1만 년이 걸리는 계 산을 수분 만에 계산하기 때문이다. 기존 컴퓨터의 가장 작은 연산단위인 '비트(bit)하나는 0' 또는 '1' 중 정보 하나만을 가질 수 있다. 반면 양자컴퓨터의 정보처리 단위인 '큐비트'는 0의 결과를 제시하는 양자상태와 1의 결과를 제시하는 양자상태의 중첩상태에 존재할 수 있다. 중첩된 상태에 존재하는 큐 비트를 측정할 경우 0' 혹은 1'의 비트를 확률적으로 얻을 수 있고, n개의 큐비트를 측정할 때 그 모든 가능성을 기술하려면 2의 n제곱만큼의 비트가 필요하다. 따라서 큐비트를 사용해 컴퓨팅을 수행하면 비트를 사용해 계산할 때 어렵다고 여겨졌던 문제들이 쉽게 해결될 수 있으며, 소인수분해 문제가 그 대 표적인 예이다.",content2:"현재는 IBM, 구글 등 글로벌 기업들이 초전도체 기반의 양자컴퓨터 개발을 선도하고 있다. 비록 완 벽한 양자오류 보정을 구현하며 실용적인 계산을 수행할 수 있는 범용양자컴퓨터의 출현을 위해서는 앞으로도 10년 이상의 연구개발이 필요하지만, 가장 최근으로는 IBM 128 큐비트 양자컴퓨터를 사용 한 오류완화 실험에서 분자계의 에너지 계산 등 실용성이 높은 분야에 있어서도 양자컴퓨터가 고전 슈 퍼컴퓨터로 계산하는데 장시간이 요구되는 계산을 해내는 사례를 보이기도 하였다. 이렇게 큐비트의 개 수를 확장하고 오류율을 낮게 양자컴퓨터를 제작하기 위해서는 하드웨어를 구성하는 소재, 부품, 장비 의 역할이 중요하다. 단적인 예로, 초전도체 기반 양자컴퓨터는 절대온도 0 K까지 냉각되는 환경을 구 성해야 하므로 상온에선 동작이 어려운 단점이 있다. 따라서 양자컴퓨터 구현 방식으론 초전도체뿐만 아니라 반도체 양자점(스핀 큐비트용 소재), 광기반, NV센터, 리드버그원자, 이온트랩 등 다양한 방식이 연구되고 있다. 이렇게 다양한 양자컴퓨터 구현방식 중 가장 먼저 상용화될 방식이 어떤 것인지는 아직 알 수 없다.",content3:"양자컴퓨터 구현을 위해 공통적으로 필요한 일부 소재·부품·장비가 있는 반면, 방식에 따라 특정 소재·부품·장비가 필요한 경우도 있다. 대표적인 소재로 초전도 양자컴퓨터에는 고정항 실리콘 웨이퍼 또는 사파이어 웨이퍼가 필요하다. 반도체 양자점 스핀큐비트에는 동위원소 정제형 초고순도 반도체 웨 이퍼 및 양자품질 HEMT 등이 필요하고, NV다이아몬드 양자컴퓨터엔 양자품질 단결정 다이아몬드 가, 리드버그원자 컴퓨터에는 루비듐 원소 등이 필수적이다. 대표적인 부품으로는 광학부품과 RF 부품(극저온 증폭기, 방향성 결합기, 양자-limited 증폭기, 극저온 용 고집적 고주파 라인 등), 임의파형 발생기(Arbitrary Waveform Generator, AWG) 등이 필 요하다. 또 장비의 경우 각종 신호 제어장치와 양자상태 유지를 위한 초저온 냉각장치 및 진공챔버, 양자회로 컨트롤러 등이 필수적이다. "}]},{id:"양자기술 통계",title:"양자기술 통계",content:"양자기술 통계에 대한 개요입니다.",subsections:[{id:"국내외 논문 통계",title:"국내외 논문 통계",content:"KISTI의 분석에 따르면 2016~2020년까지 양자기술 분야의 SCIE급 논문은 총 8,213건으로, 2016년 1,270건에서 2020년에 2,245건으로 증가하였다. 국가별로는 중국이 2,809건, 미국 1,986건, 독일 749건 순이고, 한국은 200건으로 16위를 나타냈다. 분야별 논문 수는 양자통신 4,478건, 양자센서 714건, 양자컴퓨팅 4,877건이고, 양자통신분야에서 눈문은 중국 2,029건, 미국 632건, 한국 125건으로 나타난다. 그리고 양자센서 분야에서는 미국 192건, 중국 188건, 한국 18건이며, 양자컴퓨팅에서는 미국 1,644건, 중국 1,189건, 한국 103건으로 나타난다. 기관별 순위는 1, 2위가 모두 중국으로 Chinese Academy of Sciences가 687건으로 1위, University of Science Technology of China가 486건으로 2위이고, 전체 논문 수의 14.3%를 차지한다. 기간별 논문 게재 수 상위 20위 안에 한국 기관은 전무하다. 세분야별로 살펴보면 논문 피인용 수의 경우 양자암호, 양자 시뮬레이터 분야, 양자 알고리즘 및 SW가 일등 국가와 대비하여 0.4 정도에 근사한 값을 보여 상대적으로 우수한 분야로 나타난다. 반면에 논문의 양적인 측면에서는 모든 분야가 일등 국가 대비 매우 저조하고, 특히 건수나 피인용 수가 가장 낮은 두 분야로 양자시간측정센서와 논리양자비트로 나타난다. ",content2:"NRF의 논문 분석에 의하면 양자통신 분야에서는 University of Science and Technology of China, Delft University of Technology, MIT, Harvard University 등이 우수한 성과를 창출하고 있으며, 양자센서 분야는 중국 대학들이 상위권을 선점하고 있고, 양자컴퓨팅 분야를 선도하고 있는 연구기관은 University of Oxford, University of Cambridge, UCL, MIT, ETH Zurich 등으로 나타난다. 한국은 양자기술에 대해 추격형 인재 양성과 연구 투자전략을 수행 중이나, 2010~2022년까지 논문 출간 수를 보면 아직 상위 10위 국가들에 비해서 매우 낮은 것으로 나타나고 있다. 양자암호, 양자시뮬레이터와 양자 알고리즘 및 SW 분야에서는 평균 피인용지수가 0.4에 가까우나 1위 국가 대비 발표건수는 0.09 미만으로 매우 부족하다. 또한 양자시간측정센서나 논리양자비트와 같은 분야에서는 연구가 많이 이루어지지 않는 것으로 판단된다. 향후 양자기술 분야 전반에 대해 우선 국내 전문 인력 확보와 도전적 연구 강화를 기반으로 해외 협력 기반을 구축해야 할 것이다. 논문 게재 수가 연구의 질을 대변하는 것은 아니지만, 양자기술 분야에 기술력과 연구 능력 확보 수준을 보여주는 지표로 사용될 수 있다. 연구 생산성, 효과성 및 인용 횟수를 포함하는 연구 업적 향상뿐만 아니라 연구 자금, 국제적 연구 협력, 교육 및 인프라 구축 등을 통해 양자기술 분야의 연구 능력을 향상시켜야 할 것이다. "},{id:"국내외 특허 통계",title:"국내외 특허 통계",content:"KISTI 보고서에 의하면, 2014~2020년까지 한국, 미국, 중국, 유럽, 일본, WIPO의 출원 특허 수는 연평균 41% 증가했고, 중국이 60.9%로 가장 높은 증가율을 보여준다. 출원인별 출원 특허 수는 미국 IBM이 115건으로 가장 많고, 중국 Ruban Quantum Tech와 University of Beijing Posts & Telecommunication이 각각 96건, 90건을 출원하면서 뒤를 따르고 있다. KIIP 보고서에서는 2002~2022년까지 한국, 미국, 중국, 유럽, 일본, PCT의 측허 출원 건수는 15,261건으로 중국 33.29%와 미국 32.68%로 전체 특허출원 건수의 약 66%를 차지하고 있다. 양자통신 분야는 중국 특허가 가장 큰 비중을 차지하고 있다. 중국이 양자통신 분야를 주도하는 것으로 분석되나 주로 자국 출원 위주로 보인다. 주요 출원인으로는 일본 Toshiba가 최상위로 나타나고 있다. 한국의 경우, IITP는 삼성전자 66건으로 최다 출원 특허 수를 보여주지만, 2014~2020년에는 개인으로 추정되는 채령이 30건을 출원해 최다 출원인으로 분석된다. 이 분야의 특허는 R&D의 급격한 증가 및 경쟁의 격화 단계인 성장기에 있는 것으로 분석된다. KIIP는 2002~2022년까지 Ruban Quantum이 가장 많은 특허출원하고 있는 것으로 나타나고 있다. 양자센싱·계측 분야 또는 양자센서 분야는 미국 특허가 가장 큰 비중을 차지하고 있다. 중국, 일본, 유럽, 한국은 유사한 비중을 차지하고 있으며, 중국의 경우 자국 출원 위주로 확인된다. IITP는 주요 출원인으로는 대만 TSMC가 최상위로 보고 있다. 한국의 경우, 2014~2019년에는 KAIST가 최다 출원인으로 분석된다. 이 분야의 특허는 지속적인 연구개발 활동과 일부 업체의 도태, 특허 수의 정체와 특허 출원인의 정체 또는 감소 추세인 성숙기에 있는 것으로 분석된다. KIIP는 2002~2022년에 IBM이 122건으로 가장 많은 특허를 출원한 것으로 보고 있고, 한국에서는 고려대학교가 3건으로 출원 순위 1위로 보고 있다. ",content2:"양자컴퓨팅 분야는 미국 특허가 가장 큰 비중을 차지하고 있다. IITP는 미국이 29% 이상으로 가장크고 중국과 일본이 20% 이상의 비중을 차지하는 것으로 분석하고 있고 주요 출원인으로는 미국 IBM이 최상위로 나타나고 있다. 한국의 경우, 2010~2019년에 삼성이 67건, 2014~2019년에는 ETRI가 4건으로 최다 출원인이 서로 다르게 나타난다. 이 분야의 특허는 R&D의 급격한 증가 및 경쟁의 격화 단계인 성장기에 있는 것으로 분석된다. KIIP는 2002~2022년에 KIIP와 마찬가지로 미국이 가장 많은 출원 건수를 기록하고 있고, 중국이 이를 추격하고 있는 것으로 보고 있다. 또한 IBM이 최상위임도 동일하게 나타나고 있다. 이는 2020~2021년에 IBM의 특허출원이 지속되고 있음을 암시하는 것으로 볼 수 있다. 한국은 삼성이 가장 많은 출원 건수를 기록한 것으로 보고 있지만, 그 수치는 서로 상이하다. 한국은 2000년대 초반 양자컴퓨팅 분야의 특허출원이 높은 비중을 보였지만, 이후 양자통신 분야의 출원이 늘어나면서 최근 5년의 출원 비중이 가장 높다. 미국도 초반에 양자컴퓨팅 분야의 출원 비중이 가장 높고 전 구간에 걸쳐 유사한 패턴을 보이지만, 최근에는 오히려 세부 기술별 비중의 격차가 줄어들어 양자센서와 양자컴퓨팅 분야는 근소한 차이가 있는 것으로 보인다. 중국의 경우 초기에는 양자컴퓨팅과 양자통신 분야가 유사한 경향을 보이며 구간에 따라 양자컴퓨팅과 양자센서의 비중이 높아지지만, 최근 5년간에는 다시 양자센서의 출원 비중이 높아지는 경향을 보이고 있다. 유럽과 PCT는 전 구간에 대해서 양자센서의 특허 양자컴퓨팅 분야의 출원 비중이 높게 나타나고 있으며, 최근 5년은 양자컴퓨팅 분야의 출원 비중이 더욱 증가한 것으로 보인다. 일본도 양자컴퓨팅 분야가 가장 출원 비중이 높은 상태를 유지하면서 양자센서와 양자통신 분야 분야의 특허 출원 비중이 증가했다가 최근 5년간에는 다시 양자컴퓨팅 분야가 증가하고 있다. 2002년부터 2021년까지 IP5 양자기술의 세부 기술별 출원 비중은 양자컴퓨팅(51.2%) ＞ 양자통신(33.6%) ＞ 양자센서(15.2%) 순으로 나타난다. 즉, 전 세계적으로 양자컴퓨팅 분야의 R&D가 급격히 증가하고 경쟁의 격화 단계인 성장기에 있는 것으로 보인다."},{id:"양자기술 인력 통계",title:"양자기술 인력 통계",content:`국내의 양자기술 전문인력의 수급전망을 조사하는 단계 초기에 한국연구재단과 미래양자융합포럼이 공동으로 자료조사에 대한 가이드라인을 작성하여 자료조사를 추진한 점에서 본 양자 인력조사가 전년에 비해 보다 체계적으로 진행되고 있음을 알 수 있었다. 물론 자료조사에 대한 검증 부분에서 좀 더 보완이 필요한 부분도 있지만, 연도마다 양자 인력조사에 대한 체계화·고도화가 이루어진다는 점이 고무적이라 할 수 있다. 차기년도부터 조사가 이루어질 때는 이러한 부분을 염두에 두고 좀 더 진전되고 체계화된 조사를 진행할 필요가 있을 것이다.

아울러 양자기술이 바로 매출로 연계되지 않는 현재 상황에서는 학계 배출인력의 산업계 취업과 산업계의 수요가 서로 연계되지 않는 미스매치 현상이 발생할 수 있다. 이는 실제 산업계의 양자 전문인력에 대한 수요는 있으나 학계 배출인력이 바로 취업하기 어려운 상황이 존재함을 의미한다. 본 조사에서 이루어진 산업계 인력수요 조사는 인력채용 부서가 아닌 양자 사업을 담당하는 부서의 인력 수요를 파악한 것으로, 대기업의 경우 양자기술 관련 사업부서 또는 연구부서에서는 양자 전문인력을 필요로 하지만, 막상 인력채용을 총괄하는 인력부서에서는 바로 매출이 발생하지 않는 양자분야의 인력채용에 대해 어려움을 표하는 경우가 있음을 알 수 있었다. 본 양자 인력조사는 양자 전문인력 현황·수요·공급 측면에서 조사를 진행하였으나 다소 한계점이 존재한다. 첫 번째로 양자기술 등 첨단 과학기술과 관련된 산업의 경우, 축적된 자료가 많지 않아 과거의 통계자료를 확보하는 데에 어려움이 있다. 따라서 전수조사를 통해 현장 자료를 수집하여 자료의 정확성을 높이고, 수집된 통계자료를 지속적으로 축적하며, 이를 기반으로 미래 수급을 예측하는 통계분석이 진행되었으면 하는 아쉬움이 있다. 두 번째로 양자통신·센싱·컴퓨팅 등 기술분야별 인력 미스매치 현상을 해소하기 위해서는 기술분야별 인력 현황과 수급전망에 대한 조사가 이뤄져야 하나, 학계의 경우 기술분야별 인력공급 전망 대신 인력공급의 총량만 전망했다는 점에서 한계를 갖는다. `,content2:"마지막으로 학계의 양자기술 전문인력 현황 및 연간 배출인력을 파악하는 데에 있어 응답률이 저조하여 기존 자료와의 연계가 곤란하다는 점에서 한계가 있다고 할 수 있다. 위와 같은 한계점을 개선하기 위해서는 두 가지 노력이 필요하다. 첫 번째로 매년 양자기술 전문인력 현황에 대한 체계적인 실태조사를 지속적으로 시행해야 한다. 올해 한국연구재단과 미래양자융합포럼이 조사단계 초기에서 설정한 인력조사 가이드라인에 대해 세분화‧체계화를 지속적으로 진행하는 것이 필요하다. 이를 통해 산·학·연 기관별 양자기술 전문인력 현황, 소요인력 및 배출인력 전망에 대한 보다 정확한 자료를 축적해갈 수 있을 것이며, 이렇게 지속적으로 축적된 자료는 미래 수급 예측을 위한 과거 자료로써 의미를 갖게 될 것이다. 미래양자융합포럼에서는 매년 백서 출간을 통하여 이러한 사항을 체계적으로 추진해 나갈 예정이다. 두 번째는 첫 번째 노력을 기반으로 한 양자기술 전문인력 수급 모니터링 방안을 모색하는 것이다. 실태조사를 통해 파악된 양자기술 전문인력 현황을 바탕으로 전문가 자문단 구성·운영을 통해 수급전망 진단과 지속적 모니터링 체계를 갖추어 나가는 것이 필요할 것이다. 이를 통해 범국가적 차원으로 양자기술 전문인력 순환생태계의 미스매치 현상을 해결하고 선순환 구조를 만들어 갈 수 있을 것이다. 양자기술 전문인력 양성을 위하여 현재 정부에서도 적극적으로 추진하고 있는 양자융합대학원과정이나 융합대학과정 커리큘럼의 신설 등을 확대하고 학계-연구계-산업계로 이어지는 전문인력 선순환 사이클을 마련하여 대·중·소기업 등 적극적인 산업계 전환인력 양성 프로그램 개발을 추진할 필요가 있다. "}]},{id:"양자기술 산업화 모델",title:"양자기술 산업화 모델",content:"양자기술 산업화 모델에 대한 개요입니다.",subsections:[{id:"산업화 모델 개요",title:"산업화 모델 개요",content:"양자기술에 대한 산업계의 수요는 무궁무진하다. 이미 미국, 유럽, 중국, 일본, 한국 200여개 이상의 기업들이 양자기술 개발 및 상용화를 시작하고 있다. 양자통신 분야는 국내외 주요 통신사 간 선점 경쟁이 치열하다. 각 기업들이 테스트베드를 구축하고 상용서비스를 가속하고 있고, 양자센서 분야는 시제품 개발을 통한 초기 상용화를 서두르고 있으며, 양자컴퓨터 활용의 증가로 인해 배터리, 항공, 제약 등에서 양자컴퓨팅 클라우드 서비스가 본격화되고 있다."},{id:"양자통신 산업화 모델",title:"양자통신 산업화 모델",content:"양자암호, 양자전송, 양자네트워크를 포함하는 양자통신은 현재 암호기기의 메시지 암·복호화에 필수적인 비밀키 교환에 집중되고 있지만 향후 양자기기 간 양자상태 정보전송으로 확장될 것으로 보인다. 초기에는 단거리 응용 분야 적용을 위한 상용화 기술 개발을 통해 암호화가 필요한 금융, 의료, 연구, 행정, 국방망 등에 사용되어 점진적으로 시장을 확대하고, 궁극적으로는 양자중계기 기반 장거리 광섬유 및 위성 링크를 기반으로 하는 안전한 글로벌 양자통신 네트워크로 발전시키고자 하는 것이다. 또한 양자컴퓨터, 양자센서 등의 양자정보처리 노드 간 양자정보를 전송하고, 양자정보처리 자원을 공유하고 분배하는 양자인터넷이 형성될 것으로 예상된다."},{id:"양자센싱 산업화 모델",title:"양자센싱 산업화 모델",content:"양자센싱은 양자관성센서, 양자시간측정센서, 양자자기장·전기장센서, 양자광학센서 등 다양한 센서 기술을 기반으로 여러 산업에 다양하게 적용할 수 있다. 양자센서 종류별 응용될 주요 사업군에 대해 산업 및 농업, 의료, 석유 가스, 유틸리티 및 건설, 국방 및 안보, 로봇공학 등 다양하게 분포되어 있다.42) 산업 및 농업 분야에서는 전력전송상태 모니터링, 추적자 감지, 공정제어, 가스감지, 네트워크 시간 분포 등, 의료분야에서는 신경감지, 새로운 MRI 시스템, 진단이미징 기술이 적용 가능한 것처럼 양자센서는 다양한 분야에서 양자이론을 기반으로 보다 정밀한 센싱을 통해서 원하는 정보를 제공하는 역할을 수행할 수 있는 것으로 보여진다."},{id:"양자컴퓨팅 산업화 모델",title:"양자컴퓨팅 산업화 모델",content:"양자컴퓨터는 빠른 시일 내에 기존 컴퓨터가 담당하던 일기예보와 기후변화, 암호해독, 자율주행, 신약후보물질 발굴, 도시교통 최적화, 우주탐사, 인공지능, 사이버 보안, 전자재료 발견, 재무 모델링, 태양광 포집 등 아주 복잡한 계산이 필요한 많은 부분을 대체할 수 있을 것이다.115) 양자컴퓨팅은 빠르게 발전하는 분야로 아직은 고전적인 컴퓨터 프로그램의 하위 분야로 적용되지만, 향후 산업적으로 미치는 영향은 막대할 것으로 보인다. 실제로 2010년 이후 양자컴퓨팅에 관련된 연구를 하는 기업과 벤처가 폭발적으로 증가하고 있다. MarketsandMarkets의 2021년 2월 조사에 따르면, 상위 5개 업체의 세계 양자컴퓨팅 시장의 점유율은 2019년 기준 50~55%로 캐나다 D-Wave Systems 15~20%, 미국 IBM 20~25%, Microsoft 10~12%, Amazon 8~10% 및 Rigetti Computing 6~8%를 차지하고 있다. 특히 IBM과 D-Wave Systems는 양자컴퓨팅 시장의 선두 주자로, 저명한 브랜드, 광범위한 제품 및 강력한 유통망을 보유하고 있다. Microsoft와 Amazon은 주로 제품 출시를 통해 양자컴퓨팅 시장에서 입지를 강화해왔으며, 이들 업체의 매출은 경쟁사 매출보다 더 빨리 증가하고 있다. 향후 3~5년내에 IBM과 D-Wave Systems은 양자컴퓨팅 시장에서 입지를 확고히 할 것으로 예상되며, Amazon은 주로 아시아태평양 지역에서 사업 성장으로 인해 시장 내 점유율이 증가할 것으로 예상되고 있다."},{id:"산업화 모델 시사점",title:"산업화 모델 시사점",content:"양자기술의 발전은 앞으로 많은 변화를 가져올 것이다. 화학 물리 분야에서는 원자-분자 간의 새로운 과학적인 현상을 규명해 줄 수 있는 도구가 되어줄 것이다. 나노소재, 미세구조의 시뮬레이션을 통해 새로운 소재를 발견해 낼 수 있을 뿐만 아니라, 분자구조의 정확한 모델링을 통해 수년이 소요되는 의약산업의 경제적 비용을 앞당겨 줄 수 있다. 정보보호와 국방 등 암호해독 분야에 활용할 수 있을 뿐만 아니라, 금융, 교통 등에 이르기까지 복잡하면서도 월등한 연산 속도를 필요로 하는 다양한 산업분야에 걸쳐 혁신을 가져올 것으로 기대된다. 특히 바이오·생명공학 분야에서 3차원으로 접힘 형태를 지니고 있는 단백질과 유전자 구조를 정확하게 예측하고 분석하여 신약개발, 유전자 질환 치료 등이 가속화되게 될 것이다. 또한 계산의 범주가 조합론에 한정되어 최적화된 배열을 찾는 복잡한 교통, 물류분야에서도 양자컴퓨팅 기술 도입은 긍정적인 영향을 미칠 수 있다. 그런데 양자컴퓨터의 시대는 곧 열릴 수 있을까? 현실 세계의 중요한 특정 문제들을 해결하는 수준으로 발전하기 위해서는 적게는 수백개에서 수만 개 큐비트 수준의 양자컴퓨터가 필요할 것으로 보이는데, 앞으로 10년 혹은 그 이상의 시간이 더 필요할 것이라고 전망한다. ",content2:"IBM은 2023년도 말을 목표로 1,000 큐비트 개발을 예고하고 있으며, Google, Microsoft 등의 기업들도 10년 이내 개발을 목표로 하고 있다. 물론 10년 후에도 여전히 양자오류정정, 유용한 양자알고리듬 개발 등 아직 넘어야할 산이 여전히 많이 남아있을 수도 있다. 수십 큐비트의 양자컴퓨터 시스템이 실현되면서 우리는 현재까지 모사할 수 없던 미지의 영역으로 한 발자국 내딛게 되었다. 향후 대규모 양자컴퓨터가 구현이 된다면 강력한 사회·경제적 파급효과가 있을 것이며, 현재 단계의 중규모 큐비트 시스템의 구현과 이를 바탕으로 한 풀 스택 양자컴퓨터의 구현은 이를 대비하여 중요한 기술적·경험적 토대가 될 것이다. 아직 대규모 양자컴퓨터를 구현하기 위한 확고한 기술적 로드맵이 없음을 고려할 때 개방된 테스트베드를 보유하고 양자컴퓨터 시스템에 대한 도전적이고 기초적인 연구를 수행할 수 있는 환경을 구축하는 것은 매우 중요하고 유의미하다 할 수 있다. 또한 이러한 테스트베드 운영을 통해서 기존 컴퓨팅 연구자들이나 공학자들이 양자컴퓨팅 커뮤니티에서 공동연구를 할 수 있는 기반을 만들 수도 있을 것이다. 현재 해외 기업들은 각자의 개발 로드맵을 가지고 양자컴퓨터 개발에 박차를 가하고 있다. 물론 가장 핵심적인 기술은 고품질의 큐비트를 많이 확보하는 것이겠지만 큐비트 수와 함께 풀 스택 양자컴퓨터의 다른 요소들을 확장하는데도 많은 노력이 필요할 것으로 예상된다. 실제 기업들의 로드맵들을 잘 살펴보면 흥미롭게도 이러한 이슈들에 대한 언급 및 계획이 포함되어 있는 경우가 많다. 기술 성숙도가 높은 플랫폼 시스템 통합을 위한 다학적 협력 연구에 집중적인 투자를 하면서 동시에 새로운 큐비트 플랫폼 연구와 같은 도전적인 기초연구들에도 폭넓게 투자를 하여 좋은 양자정보연구 환경을 만들어 나간다면 국내에서도 훌륭한 성과들을 많이 얻을 수 있을 것이다.",content3:"최근 양자기술 전반에 관한 관심이 급증하며 세계 주요국 및 국내에서도 양자기술에 대한 투자와 기술개발에 집중하고 있는 추세이다. 양자기술은 무기체계에서 창과 방패로 모두 사용될 수 있다. 초고속 양자컴퓨터에 의한 사이버 공격, 양자레이다에 의한 스텔스 표적 탐지, 양자센싱에 의한 초고감도 표적식별 등이 일례이다. 양자 무기 전력화는 아직까지 각 기술별로 많은 장벽과 한계가 있다. 그러나 양자 무기는 기술 혁신성으로 인해 미래 전장의 패러다임을 바꿀 와해적이고 파괴적인 신무기가 될 것이라 확신되고 있다. 따라서, 국방 선진국들은 양자무기 핵심기술 확보와 체계개발을 위해 열을 올리고 있다. 우리는 양자기술의 혁신성을 무기체계에 어떻게 적용할 것인가 고민하고, 양자 원천기술을 융합하여 미래 전장의 주역이 될 수 있는 신개념 양자 무기체계를 개발하여야 할 것이다. 이를 위해서는 민·군을 막론하고 국내외 관련기술 공동연구 및 정부/기관 간 상호 협업이 무엇보다 중요하다 할 것이다. 우리나라가 디지털정보기술 분야에서 세계적으로 우위에 있지만, 양자컴퓨터와 양자암호 실험연구에서는 다른 선진국에 비해 많이 뒤진 것이 사실이다. 그렇지만 양자컴퓨터와 양자암호 기술이 아직 세계적으로도 충분한 수준에 이르지 못한 데다, 양자센서는 양자컴퓨터와 양자암호를 위한 요소 기술이고 우리나라가 앞서 나갈 수 있는 여지도 있어 좋은 기회가 열리고 있다.",content4:"미래의 게임 체인저가 해결해야 할 과제들에 대해 전문가들은 양자컴퓨터가 소인수분해, 대량 데이터 탐색, 최적경로 예측 등 동시다발적으로 발생되는 정보의 처리가 요구되는 복잡한 계산과 데이터 처리에 강점이 있는 만큼 다양한 산업 분야에서 게임 체인저, 즉 시장의 흐름을 통째로 바꾸거나 판도를 뒤집어 놓을 만한 결정적인 역할을 할 것으로 예측된다. 양자기술의 산업계 적용은 우리가 생각하는 것 이상으로 다양하며, 아직도 개발되지 않은 분야가 무궁무진하다. 미국과 유럽이 미개척 분야를 개척하기 위해, 그리고 시장이 확장될 가능성이 매우 높다고 판단하기 때문에, 그 시장을 선점할 수 있도록 다양한 응용 분야를 발굴하여 개발하는 것이 필요하다. 이제 한국도 기술 선도국과의 격차를 줄여야할 시기가 되었다. 우리나라는 수십 년 이상 꾸준히 투자해온 선도국에 비해 기술 수준이나 연구개발비 규모 면에서나 극복해야할 장벽이 많다. 기술 개발에 난이도가 큰 만큼 정부 차원에서 국가의 미래를 좌우할 핵심기술로 인식하고 긴 안목에서의 지속적인 투자와 종합적인 청사진 설계가 필요하다. 양자 분야의 기초 연구에서부터 응용, 개발 연구에 이르기까지 일관성 있는 중장기 전략이 필요하며, 무엇보다도 국내외 협력기반을 구축하여 다학제 융합연구에 힘써 앞으로의 10~20년 뒤를 대비해야 한다. 출연(연)을 중심으로 대학과 산업계가 참여하는 협업 생태계를 구축하고, 그 어느 때 보다도 협력의 리더십을 발휘하여 학문적 난제뿐만 아니라 인류 공통의 문제를 해결해야 한다. ",content5:"양자시대에는 아직 압도적 기술 우위로 기득권을 가진 선발주자가 없다. 양자기술은 미래 기술 패권을 정할 게임 체인저 기술로 세계 각국과 글로벌 기술이 각축전을 벌이고 있어 한국도 시급한 대책 마련이 필요한 상황이다. 양자기술 분야는 매우 다양한 기술을 활용하고 있으며 확장가능성이 무궁무진 할뿐만 아니라, 위에서 언급한 것과 같이 다양한 사업서비스 분야를 발굴할 수 있는 가능성도 다양하다고 할 수 있다. 이미 많은 국가와 기업들이 이러한 가능성을 파악하여 의료, 금융 및 교통과 더불어, 보안과 안보 분야에서 주요 활성화되었던 통신 분야도 점점 교통 및 의료와 접목한 사업군을 속속들이 발굴하고 있다. 하지만 아직 독점 기업이 나타나지 않은 것으로 보인다. 즉 아직 추격의 기회는 열려 있으므로, 한국이 보유하고 있는 ICT 인프라 및 역량이나 반도체 제조 분야와 같은 기존 강점을 살릴 수 있는 비교 우위점을 찾아 전략을 세우는 것도 향후 산업경쟁력의 미래를 결정하는데 중요한 역할을 할 것이다. ",content6:`한국 정부는 2035년까지 양자기술에 3조 원 이상을 투자해 국내 기술 수준을 선도국 대비 85%까지 끌어올리겠다고 밝혔다. 또한 양자 분야 종사자를 확보하고 공급·수요 기업도 1,200개 규모로 육성하는 등 기술개발과 생태계 육성을 병행할 계획이다. 현재 양자 기술 주요 분야는 연산, 통신, 계측 등으로 우리 기술로 양자컴퓨터를 개발하고(연산), 양자 인터넷 강국으로 나아가며(통신), 세계 최고 수준의 양자센서(계측)로 시장을 선점한다는 계획을 세우고 있다. 우선 2031년까지 1000큐비트급 양자컴퓨터를 우리 힘으로 개발해 2035년 상용화할 방침이다. 고성능 양자컴퓨터 개발을 위해 반도체 역량을 적극 활용하고, 민간 주도로 주문형 생산 시설(양자 파운드리)도 별도로 구축할 계획이다. 기술 수준이 비교적 높은 양자통신 분야에선 도시 간 양자 네트워크를 구축하고자 한다. 통신 거리를 100㎞대로 구현하고 이 구간에 양자암호통신을 적용하는 등 양자암호통신 전국망을 구축할 예정이다. 

이 밖에도 관성, 시간, 전자기장, 광학 등을 계측하는 양자센서 원천기술을 개발해 각 산업군에 적용할 계획이다. 이를 위해서 양자의 물리적 원리와 현상을 이해하고 이를 산업에 적용할 수 있는 핵심 인력을 2035년까지 현재 384명에서 2,500명으로 늘리고, 실제 산업 현장에서 양자 시스템을 구현하는 양자 엔지니어도 1만 명을 육성해 생태계를 꾸릴 계획이다. 한국이 아직 강국과 비교해 기술이 아직 뒤처져 있지만 이러한 계획 등을 통해 향후 다양한 분야에서 양자기술을 충분히 이끌어갈 수 있을 것으로 기대하고 있다. `}]},{id:"글로벌 양자분야 주요 산·학·연 협의체 동향",title:"글로벌 양자분야 주요 산·학·연 협의체 동향",content:"글로벌 양자분야 주요 산·학·연 협의체 동향에 대한 개요입니다.",subsections:[{id:"북미(미국 QED-C, 캐나다 QIC)",title:"북미(미국 QED-C, 캐나다 QIC)",content:"미국의 QED-C는 강력한 양자 기반 산업 및 관련 공급망을 활성화하고 성장시킨다는 사명을 갖고, NOI법에 근거하여 책임자인 NIST의 위탁을 받은 SRI International이 관리하는 산업 중심 연합체이다. QED-C는 미국 상무부 산하 국립표준기술연구소(NIST)와 부품 공급업체/제조업체, 소프트웨어 및 하드웨어 시스템을 포함한 양자분야 이해당사자 전반을 아우르는 단체로 150개 기업을 포함해 개발자, 서비스 제공업체 및 실사용자 등 200개 이상의 회원을 지원하고 있다. 캐나다 QIC는 양자컴퓨팅, 양자통신 및 암호화, 양자 감지 및 양자 안전 암호화 기술 개발자와 이러한 기술에 대한 응용 프로그램을 개발하는 회사를 포함하는 캐나다 양자 기술 회사의 컨소시엄이다. 두 컨소시엄은 2022년 대비 2023년 회원사가 증가하였고, 특히 미국의 경우 2022년 대비 2023년 111개 회원기관이 증가하였는데, 산업계의 경우 178개 기업으로 전년도 대비 44개의 회원사가 증가하였다. ",content2:"반면 캐나다의 경우 전년도 대비 5개의 회원사가 증가하였다. 미국의 QED-C는 산업계 뿐만 아니라 학계, 연구소 및 정부 관련 기관 등 양자 관련 연구, 서비스, 기금을 지원하는 모든 기관을 회원기관으로 등록하고 있는 반면, 캐나다의 QIC는 산업계 위주로 구성되어 있으며 정부 기관이나 자금 지원 기관과 연계하고 별도의 회원기관으로 관리하지 않는 것이 특징이다. 2022년까지 QED-C의 회원사였던 Anyon는 현재 QIC의 회원사로 전환하였고, D-Wave, Ki3 Photonics, Xanadu, Zapata Computing는 2022년에 QED-C 회원사로 가입한 후 2023년에는 QIC의 회원사로도 등록했다. 북미는 양자시장이 가장 빠르게 발달하는 곳으로 지난 2년간 관련 기업이 급속히 증가하는 것으로 나타나고 있다. 캐나다는 미국에 비해 그 수가 적으나, 양자기술 전 분야에 걸쳐 고르게 산업군이 분포 된 편이다. 두 나라를 합해 약 200개의 양자관련 기업이 활동하고 있으며 이 중 일부 스타트업은 이미 유니콘 기업으로 성장하고 있다. 양자기술 뿐만 아니라 양자시장의 확장도 가속화되고 있는 북미 시장을 보면 우리도 빠르게 이에 대응할 수 있도록 양자시장의 확보가 필요할 것으로 보인다."},{id:"유럽(유럽 QuIC, 핀란드 InstituteQ, 독일 QUTAC, 영국 UKQuantum) ",title:"유럽(유럽 QuIC, 핀란드 InstituteQ, 독일 QUTAC, 영국 UKQuantum) ",content:"유럽에서는 공동을 목표로 양자과학 및 기술을 발전시키기 위해서 다수의 양자기술 관련 협회가 구성되고 있다. 대표적으로 2021년 구성된 비영리 산업협회 'European Quantum Industry Consortium(QulC)은 EU 국가와 그 외의 유럽 국가의 양자기술 관련 기업 및 기관들의 협의체로 가장 큰 규모를 이루고 있다. 독일 Quantum Technology and Application Consortium(QUTAC)은 양자컴퓨팅 응용 및 실제 적용에 대한 가속을 위해 13개 기업이 협의체를 이뤄 활동하고 있다. 이외에도 핀란드의 InsituteQ는 대학교와 국립 연구 센터가 중심으로 운영되고 있고, 영국의 UKQuantum 은 영국 정부와 글로벌 협의체에 공동의 목소리를 내기 위해서 구성된 협의체로 기업 및 연구기관으로 구성되어 있다. 독일, 핀란드, 영국의 각 협의체는 각 나라의 양자기술 우위를 차지하고, 양자 시장을 선점하기 위한 공통의 목표를 위해 협력하는 것을 목적으로 하고 있다. 각 협의체의 회원수는 작년 대비 증가하였는데 이는 양자기술 관련 기업의 증가와 관련 있는 것으로 보인다. 일부 기업 및 기관은 미국의 QED-C와 유럽의 QuIC에 동시에 가입하고 있는데 이는 각 지역에 본사나 사업장이 있는 경우 가입 가능한 제약으로 인한 것으로 보인다. 유럽 각국의 양자협의체는 독일, 핀란드, 영국처럼 향후 각 나라 의 이익을 위해서 구성될 가능성이 있으며, 이미 구성되어 있는 소수의 협의체가 확장될 가능성도 있을 것으로 보인다. 이러한 변화에 대한 지속적인 모니터링이 필요한데, 이는 유럽 국가의 양자기술 개발 방 향에 대한 지표로 활용할 수 있기 때문이다."},{id:"기타(일본 Q-STAR, 호주 AQA) ",title:"기타(일본 Q-STAR, 호주 AQA) ",content:"2018년 미국을 시작으로 2023년 10월까지 8개의 협의체가 전 세계적으로 확인되고 이다. 특히 2021년에는 유럽 QuIC, 한국 FQCF, 독일 QUTAC, 일본 Q-STAR, 핀란드 InstituteQ를 포함한 5개의 협의체가 발족하였고, 2022년에는 AQA와 UKQauntum 협의체가 새롭게 구성되었다. 일본 양자기술신산업창출협의회(Quantum STrategic industry Alliance for Revolution, Q-STAR)는 20여 개의 기업과 기관으로 시작하여 2023년 5월 기준 약 59개로 증가하였고, 호주의 호주 양자동맹(Australian Quantum Alliance, AQA)은 10개의 창설 회원 기업과 함께 가장 늦게 구성되었지만 2023년 10월 기준 150개의 회원 기업 및 기관이 가입하고 있다. Q-STAR의 경우 가입 회원 수는 적지만 다양한 사업군이 분포되어 있고 AQA는 짧은 기간 동안 가장 빠르게 규모가 확장되고 있는 것으로 보인다. "}]},{id:"요약",title:"요약",content:"양자정보기술 백서 전체 요약",subsections:[{id:"양자기술의 글로벌 동향",title:"양자기술의 글로벌 동향",content:'양자 기술은 전 세계적으로 통신, 센싱, 컴퓨팅의 세 가지 핵심 분야에서 빠르게 성장하고 있습니다. 특히 양자 컴퓨팅은 높은 응용 가능성을 보이며 기업과 국가의 대규모 투자를 유도하고 있습니다. 글로벌 시장에서는 하드웨어가 주도적인 역할을 하고 있으며, 국방, 금융, 의료 산업이 주요 응용 분야로 부상하고 있습니다. 미국은 "국가양자이니셔티브(NQI)"를 통해 양자 기술의 테스트베드 및 산업화 촉진을 지원하고 있으며, 유럽은 양자 플래그십 프로젝트를 중심으로 주요 국가들이 양자 기술 로드맵을 발표하고 있습니다. 한국은 "국가 양자과학기술 원년"을 선포하며 양자기술 육성을 위한 법률안을 통과시켰고, R&D와 투자 규모를 지속적으로 확대하고 있습니다. 이러한 노력은 국제 표준화 기구인 ITU-T와 ISO/IEC가 주도하는 글로벌 표준화 활동과 함께 진행되고 있으며, 유럽 CEN/CENELEC 같은 지역 표준화 기구도 활발히 참여하고 있습니다.'},{id:"양자기술 R&D의 진전",title:"양자기술 R&D의 진전",content:"양자통신은 보안 통신 기술로서의 강점이 부각되며, 양자키분배(QKD) 기술과 양자 메모리 및 중계기 개발이 주요 연구 분야로 자리잡고 있습니다. 양자 네트워크 구축을 목표로 한 연구도 점차 늘어나고 있으며, 국방과 금융 분야에서의 응용 가능성이 주목받고 있습니다. 양자센싱은 고감도 기술이 요구되는 의료, 국방, 환경 분야에서 활용 가능성이 높습니다. 예를 들어, 양자 중력계, 시간 및 주파수 센서 개발이 활발히 진행되고 있습니다. 양자컴퓨팅은 하드웨어와 소프트웨어 두 가지 측면에서 크게 발전하고 있습니다. 트랜스몬 큐비트와 이온 큐비트 같은 초전도 기반 기술이 대표적이며, 양자 알고리즘 및 오류 정정 기술 연구가 강화되고 있습니다. 특히 금융 데이터 분석, 물류 최적화, 신소재 개발 등에서의 실질적인 응용이 기대됩니다."},{id:"소재·부품·장비 산업생태계 ",title:"소재·부품·장비 산업생태계",content:"양자 기술의 발전을 뒷받침하는 소재·부품·장비의 역할이 점점 중요해지고 있습니다. 주요 소재로는 실리카(SiO2), 리튬나이오베이트(LiNbO3), 반도체 기반 소재(InP) 등이 있으며, 이들의 내재화와 공급망 다변화가 강조되고 있습니다. 부품으로는 단일광자 검출기(APD), 양자 난수 생성기(QRNG), 광분리기 등이 주로 사용됩니다. 양자통신 장비(QKD), 냉각장치 등 장비 개발도 중요한 연구 분야로 자리잡고 있습니다. 이러한 기술들을 기반으로 양자 암호화 서비스와 양자 컴퓨팅 클라우드 같은 상업적 응용이 활성화되고 있습니다."},{id:"산업화와 글로벌 협력 ",title:"산업화와 글로벌 협력",content:"양자 기술의 산업화는 통신, 센싱, 컴퓨팅의 각 분야에서 다른 방식으로 이루어지고 있습니다. 양자통신은 금융과 국방 분야에서 보안 통신 서비스로 시작되어 점차 확대되고 있으며, 양자센싱은 의료, 제조, 환경 모니터링 분야에서 응용되고 있습니다. 양자컴퓨팅은 금융 데이터 분석, 최적화 문제 해결, 신소재 개발과 같은 고도화된 작업에서 활용되고 있습니다. 이 과정에서 IBM, 구글, IonQ와 같은 글로벌 기업들이 주도적인 역할을 하고 있으며, 북미, 유럽, 아시아를 중심으로 협력체와 연구 프로젝트가 활성화되고 있습니다. 미국의 QED-C, 캐나다의 QIC, 유럽의 양자 플래그십 프로젝트, 일본의 Q-STAR, 호주의 AQA 등이 주요 협력체로 활동하고 있습니다."},{id:"통계와 미래 전망",title:"통계와 미래 전망",content:"양자 기술에 대한 논문과 특허 데이터는 주요국들의 연구 성과와 시장 선점 노력을 잘 보여줍니다. 미국, 일본, 유럽이 특허와 연구에서 앞서 나가고 있으며, 한국은 비교적 후발주자로 평가되지만, 점차 논문과 특허의 비중을 높이고 있습니다. 특히 양자통신 분야의 특허가 전체에서 가장 높은 비중을 차지하고 있습니다. 한편, 한국의 양자 기술 전문 인력은 약 403명으로, 산업화를 위한 추가적인 인력 양성이 필요합니다. 이와 함께 양자 기술의 산업화 모델은 단기적으로 파일럿 프로젝트 중심으로, 중장기적으로 모든 산업으로 확대될 것으로 전망됩니다."},{id:"총평",title:"총평",content:"이 백서는 양자 기술이 급격히 발전하면서 정부와 산업계가 협력해 새로운 생태계를 구축하고 있다는 점을 강조합니다. 국제 협력과 표준화는 기술적 진보뿐 아니라 상용화를 촉진하는 데 중요한 역할을 하고 있습니다. 이를 통해 양자 기술은 통신, 센싱, 컴퓨팅을 넘어 다양한 산업 분야로 확대될 전망입니다."}]},{id:"출처",title:"출처",content:"양자정보기술 백서",subsections:[{content:l.jsxs("p",{children:["이 문서는"," ",l.jsx("a",{href:"https://www.kqic.kr/main/publication.html?sub1=47&menu=19",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline",color:"#ffaa00"},children:"2023 양자 기술 백서"})," ","를 기반으로 작성되었습니다. 해당 백서는 2023년 한국양자산업협회에서 발행되었으며, 자세한 내용은 위 링크를 통해 확인할 수 있습니다."]})}]}],kj=()=>{const[e,t]=b.useState(Ls[0].id),[n,r]=b.useState(!1),i=Ls.find(s=>s.id===e),o=()=>{r(!n)};return l.jsxs(l.Fragment,{children:[l.jsx(yj,{onClick:o,children:l.jsx("img",{src:n?bj:jj,alt:"Menu Toggle",className:"menu-icon"})}),l.jsx(gj,{}),l.jsxs(Lm,{children:[l.jsx(vj,{$isMenuOpen:n,children:l.jsx(Sj,{children:Ls.map(s=>l.jsx(xj,{$isActive:e===s.id,onClick:()=>t(s.id),children:s.title},s.id))})}),l.jsxs(Rm,{children:[l.jsx(Mm,{children:i.title}),l.jsx(wj,{children:i.content}),i.subsections&&l.jsx(Nm,{children:i.subsections.map(s=>l.jsxs("div",{children:[l.jsx(Am,{children:s.title}),l.jsx(jt,{children:s.content}),s.content2&&l.jsx(jt,{children:s.content2}),s.content3&&l.jsx(jt,{children:s.content3}),s.content4&&l.jsx(jt,{children:s.content4}),s.content5&&l.jsx(jt,{children:s.content5}),s.content6&&l.jsx(jt,{children:s.content6}),s.content7&&l.jsx(jt,{children:s.content7})]},s.id))})]})]})]})},Cj="/assets/person1-B_vibWHo.svg",Ej="/assets/person2-X_gPPwlY.svg",_j="/assets/person3-B_2PykZ2.svg",Pj="/assets/person4-DR680jHw.svg",Oj="/assets/person5-wrCyR2jw.svg",Tj=[{year:1900,event:"막스 플랑크, 양자역학의 기초 확립",details:`
      막스 플랑크는 에너지의 불연속성을 제안하며 양자 이론의 기초를 마련했습니다. 
      이 발견은 고전 물리학으로 설명할 수 없었던 현상을 해결하는 데 중요한 역할을 했습니다. 
      특히 흑체 복사 문제를 설명하기 위해 에너지가 일정한 양자 단위로 방출되고 흡수된다는 이론을 도입했습니다.
    `,image:Cj},{year:1925,event:"하이젠베르크, 양자역학 수학적 공식화",details:`
      하이젠베르크는 행렬 역학을 도입하여 양자역학의 수학적 기반을 확립했습니다. 
      이 공식화는 이후 슈뢰딩거의 파동역학과 통합되어 현대 양자역학의 토대를 이뤘습니다. 
      또한, 불확정성 원리를 제안하며 입자 위치와 운동량의 정확한 측정이 동시에 불가능함을 설명했습니다.
    `,image:Ej},{year:1981,event:"리처드 파인만, 양자 컴퓨팅 개념 제안",details:`
      리처드 파인만은 양자 시스템을 시뮬레이션하기 위해 기존의 고전 컴퓨터로는 한계가 있음을 지적했습니다. 
      그는 양자 물리학의 법칙에 따라 동작하는 컴퓨터, 즉 양자 컴퓨터의 필요성을 제안하며, 
      양자 알고리즘 개발의 새로운 장을 열었습니다.
    `,image:_j},{year:1994,event:"피터 쇼어, 쇼어 알고리즘 발표",details:`
      피터 쇼어는 양자 컴퓨터가 고전 컴퓨터보다 효율적으로 소인수분해를 수행할 수 있음을 보여주는 쇼어 알고리즘을 개발했습니다. 
      이 알고리즘은 현대 암호 체계를 위협하며 양자 암호학과 양자 내성 암호학의 연구를 촉진하는 계기가 되었습니다.
    `,image:Pj},{year:2019,event:"구글, 양자 우월성 선언",details:`
      구글은 양자 컴퓨터로 고전 컴퓨터가 수만 년이 걸릴 문제를 200초 만에 해결했다고 발표하며 양자 우월성을 선언했습니다. 
      이 사건은 양자 컴퓨팅이 실제로 강력한 계산 능력을 가질 수 있음을 보여주는 중요한 이정표로 평가됩니다.
    `,image:Oj}],Ij=[{title:"양자 우월성",description:`
      양자 우월성은 양자 컴퓨터가 고전 컴퓨터로는 현실적인 시간 내에 풀 수 없는 문제를 해결할 수 있는 능력을 나타냅니다.
      2019년 구글이 이를 선언하며 양자 컴퓨팅의 실질적 가능성을 입증했습니다.
    `},{title:"양자 컴퓨팅",description:`
      양자 컴퓨팅은 양자역학의 원리를 기반으로 동작하는 컴퓨터 기술입니다.
      고전 컴퓨터가 이진법으로 계산하는 것과 달리, 양자 컴퓨터는 큐비트를 활용하여 병렬 연산을 수행할 수 있습니다.
    `},{title:"쇼어 알고리즘",description:`
      쇼어 알고리즘은 양자 컴퓨터를 이용해 고전 컴퓨터보다 빠르게 소인수분해를 수행할 수 있는 알고리즘입니다.
      이 알고리즘은 현대 암호 체계를 위협하며 양자 암호학 연구를 촉진했습니다.
    `},{title:"양자역학",description:`
      양자역학은 미시 세계의 입자와 파동의 행동을 설명하는 물리학의 한 분야입니다.
      에너지의 불연속성, 입자-파동 이중성, 불확정성 원리 등이 핵심 개념에 포함됩니다.
    `}],zj=w.div`
  margin: 50px 0;
  padding: 40px;
  cursor: text;
  user-select: text;
  background-color: #292f36;
  border-radius: 6px;
  color: #fff;
@media (max-width: 780px) {
  padding: 20px 12px;
  background-color: transparent;
  border-radius: 0px;
  border-top: 1px solid #aaa; 
  border-bottom: 1px solid #aaa;
}
`,Lj=w.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #60e6f2;
  user-select: text;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  @media(max-width: 780px){
    font-size: 1.7rem;
  }
`,Rj=w.div`
  margin-bottom: 30px;
  user-select: text;
  &:last-child {
    margin-bottom: 0;
  }
`,Mj=w.h3`
  font-size: 1.6rem;
  margin-bottom: 10px;
  color: #fff;
  user-select: text;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  @media(max-width: 780px){
    font-size: 1.45rem;
  }
`,Nj=w.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #ccc;
  user-select: text;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,Aj=w.div`
  width: 100%;
  background-color: #1c2329;
  color: #ffffff;
  min-height: 140vh;
  height: auto;
  margin-bottom: -30vh;
`,Dj=w.div`
  font-family: Arial, sans-serif;
  padding-top: 7%;
  max-width: 70%;
  margin-left: 15%;
  padding-bottom: 33vh;
  @media(max-width: 780px){
    max-width: 100%;
    margin-left: 0;
    padding-top: 20%;
  }
`,Fj=w.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
  color: #60e6f2;
  cursor: text;
  user-select: text;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  @media(max-width: 780px){
    font-size: 2rem;
  }
`,Bj=w.div`
  display: flex;
  flex-direction: column;
  cursor: text;
  user-select: text;
  position: relative;
  margin: 20px 0;
  padding: 0 20px;

  &:before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #333;
  }
`,$j=w.div`
  position: relative;
  margin-bottom: 40px;
  padding-left: 50px;

  &:last-child {
    margin-bottom: 0;
  }
`,Qj=w.h2`
  font-size: 1.65rem;
  font-weight: bold;
  color: #60e6f2;
  cursor: text;
  user-select: text;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,Uj=w.h3`
  font-size: 1.55rem;
  color: #ddd;
  margin-bottom: 10px;
  cursor: text;
  user-select: text;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,Wj=w.p`
  font-size: 1.4rem;
  color: #ccc;
  letter-spacing: 1px;
  line-height: 1.6;
  margin-bottom: 20px;
  cursor: text;
  user-select: text;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  @media(max-width: 780px){
    font-size: 1.27rem;
  }
`,Hj=w.img`
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`,Gj=w.div`
  position: absolute;
  left: 10px;
  top: 0;
  width: 20px;
  height: 20px;
  background: #4caf50;
  border-radius: 50%;
  border: 4px solid #1c2329;
  box-shadow: 0 0 0 2px #60e6f2;
`,Vj=()=>l.jsx(Aj,{children:l.jsxs(Dj,{children:[l.jsx(Fj,{children:"Quantum Technology Timeline"}),l.jsx(Bj,{children:Tj.map((e,t)=>l.jsxs($j,{children:[l.jsx(Gj,{}),l.jsx(Qj,{children:e.year}),l.jsx(Uj,{children:e.event}),l.jsx(Hj,{src:e.image,alt:`${e.year} event`}),l.jsx(Wj,{children:e.details})]},t))}),l.jsxs(zj,{children:[l.jsx(Lj,{children:"양자 개념 정리"}),Ij.map((e,t)=>l.jsxs(Rj,{children:[l.jsx(Mj,{children:e.title}),l.jsx(Nj,{children:e.description})]},t))]})]})});w.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #141a1f;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;const Kj=w.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`,qj=w.button`
  background-color: ${({$isActive:e})=>e?"#60E6F2":"transparent"};
  color: ${({$isActive:e})=>e?"#000":"#fff"};
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #333;
    color: #fff;
  }
    @media (max-width: 400px) {
      font-size: 12px; /* 글씨 크기 조정 */
      overflow: hidden; /* 텍스트가 화면 밖으로 넘지 않도록 설정 */
      white-space: normal; /* 줄바꿈 허용 */
      word-wrap: break-word; /* 단어가 화면 너비를 넘을 경우 줄바꿈 */
    }

`,Yj=w.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #141a1f;
  border-radius: 10px;
  margin-bottom: 20px; 
  cursor: pointer;

  .menu-icon {
    width: 30px;
    height: auto;
  }

  &:hover {
    background-color: #333;
  }
`,Rs=[{id:"sum",title:"양자 산업 활용",subsections:[{id:"sum1",title:"정보통신 분야",content:l.jsxs(l.Fragment,{children:["양자 암호 기술은 데이터 전송의 보안성을 획기적으로 높입니다. 기존 암호화 방식은 시간이 지남에 따라 해킹 위험이 증가하지만, ",l.jsx("br",{}),"양자암호 기술은 도청이나 데이터 변조 시도를 원천적으로 방어할 수 있습니다."]})},{id:"sum2",title:"금융 서비스 분야",content:l.jsxs(l.Fragment,{children:["은행 간 거래, 온라인 결제 등 금융 거래에서 데이터 보안은 핵심적인 요소입니다.",l.jsx("br",{}),"양자암호는 이를 보다 안전하게 보호할 수 있으며, 해킹 시도를 즉각적으로 감지하여 거래 신뢰성을 높입니다."]})},{id:"sum3",title:"의료 분야",content:l.jsxs(l.Fragment,{children:["양자암호 기술을 의료 시스템에 도입하면 환자의 진료 기록, 유전자 데이터 등 중요한 정보가 안전하게 보호될 수 있습니다. ",l.jsx("br",{}),"특히 양자컴퓨팅 기술을 활용한 신약 개발 및 연구 과정에서도 데이터 보안을 강화할 수 있어, 의료 분야의 혁신을 촉진하는 데 기여할 수 있습니다. "]})},{id:"sum4",title:"국가 안보와 군사 통신 분야",content:l.jsxs(l.Fragment,{children:["양자암호 기술은 군사 통신과 정부의 기밀 정보 보호에 있어서 중요한 역할을 합니다. 특히 외부의 해킹이나 스파이 활동을 차단하는 데 매우 효과적입니다. ",l.jsx("br",{}),"양자 키 분배(QKD) 방식은 기밀 정보를 안전하게 전달할 수 있는 방법을 제공하며, 도청 시도를 실시간으로 탐지하여 대응할 수 있습니다"]})},{id:"sum5",title:"사물인터넷 분야",content:l.jsxs(l.Fragment,{children:["사물인터넷(IoT) 기기가 점점 증가하면서, 기기 간의 통신 보안이 큰 이슈로 떠오르고 있습니다. ",l.jsx("br",{}),"양자암호 기술을 IoT 네트워크에 적용하면 기기 간 통신의 무결성을 보장하고, 외부의 해킹 위협을 방지할 수 있습니다.",l.jsx("br",{}),"이를 통해 스마트 홈, 스마트 팩토리와 같은 다양한 분야에서 안전한 IoT 환경이 구축될 수 있습니다."]})}]},{id:"it",title:"정보통신 분야",subsections:[{id:"qkd",title:"양자암호통신",content:l.jsxs(l.Fragment,{children:["양자암호통신은 양자역학의 원리를 이용하여 도청이 불가능한 통신을 구현합니다. 양자 키 분배(QKD)를 통해 송신자와 수신자 간에 안전한 암호 키를 공유할 수 있습니다.",l.jsx("br",{}),"이 기술은 금융, 국방 등 보안이 중요한 분야에서 활발히 연구되고 있습니다."]}),content2:l.jsxs(l.Fragment,{children:["한국전자통신연구원(ETRI)은 양자암호통신 기술을 개발하여 상용화에 박차를 가하고 있습니다. ",l.jsx("br",{}),"또한, KT는 양자암호통신을 적용한 네트워크를 구축하여 금융기관과 협력하고 있습니다.",l.jsx("br",{}),"중국은 세계 최초로 위성 기반의 양자암호통신망을 구축하여 장거리 통신에 성공하였으며, 미국과 유럽은 양자 네트워크 연구에 막대한 투자를 하고 있습니다."]})},{id:"network",title:"양자 네트워크",content:l.jsxs(l.Fragment,{children:["양자 네트워크는 양자 상태를 유지하며 정보를 전달하는 네트워크로, 기존 인터넷보다 높은 보안성을 제공합니다. ",l.jsx("br",{}),"양자 중계기와 양자 메모리 등의 기술 개발이 진행 중이며, 장거리 양자 통신을 위한 연구가 활발합니다."]})},{id:"data",title:"양자컴퓨팅을 활용한 데이터 처리",content:l.jsxs(l.Fragment,{children:["양자컴퓨터는 복잡한 계산을 기존 컴퓨터보다 빠르게 처리할 수 있어, 대용량 데이터 분석, 암호 해독 등 정보통신 분야에서의 활용이 기대됩니다. ",l.jsx("br",{}),"특히, 최적화 문제나 머신러닝 분야에서의 응용이 주목받고 있습니다."]})}]},{id:"eco",title:"금융서비스 분야",subsections:[{id:"components",title:"양자 암호화 기술 도입",content:l.jsxs(l.Fragment,{children:["BBVA",l.jsx("br",{}),"스페인의 다국적 금융 그룹인 BBVA는 양자 기술을 금융 서비스에 접목하는 프로젝트에 적극 참여하고 있습니다. 이는 양자 컴퓨터가 금융에서 요구하는 복잡한 연산 등을 효율적으로 해결하는 방안으로 각광받고 있기 때문입니다."]}),content2:l.jsxs(l.Fragment,{children:["골드만삭스(GOldman Sachs)",l.jsx("br",{}),"글로벌 투자은행인 골드만삭스는 양자 컴퓨팅을 활용하여 금융 모델링과 리스크 관리의 효율성을 높이기 위한 연구를 진행하고 있습니다. 이는 양자 기술을 활용한 금융 서비스의 혁신을 목표로 하고 있습니다."]})}]},{id:"med",title:"의료",subsections:[{id:"view",title:"의료 영상",content:l.jsxs(l.Fragment,{children:[l.jsx(fv,{to:"/qimage",style:{textDecoration:"underline"},children:"양자 이미징 기술"}),"은 포톤의 얽힘 상태를 활용하여 기존보다 선명하고 정확한 의료 영상을 제공합니다.",l.jsx("br",{}),"이를 통해 진단의 정확성을 높이고, 조기 발견이 어려운 질병의 진단에 기여합니다."]})},{id:"pill",title:"약물 개발",content:l.jsxs(l.Fragment,{children:["양자 컴퓨팅은 복잡한 분자 구조와 상호작용을 모델링하여 새로운 약물 후보 물질을 발견하거나 기존 약물의 효능을 개선하는 데 활용됩니다.",l.jsx("br",{}),"이는 약물 개발 과정을 가속화하고 비용을 절감하는 데 도움이 됩니다. "]})},{id:"bio",title:"바이오센서",content:"양자 바이오센서는 양자역학적 특성을 이용하여 매우 미세한 농도 변화도 정확하게 감지합니다. 이를 통해 질병의 조기 진단이나 치료 과정의 모니터링에 큰 도움이 됩니다."}]},{id:"gov",title:"국가 안보와 군사 통신",subsections:[{id:"components",title:"해군 3함대사령부의 양자암호통신망 구축",content:l.jsxs(l.Fragment,{children:["2021년 1월, KT는 전라남도청과 해군 3함대사령부에 양자암호 비화통신 보안통신망을 구축하였습니다.",l.jsx("br",{}),"이를 통해 군사 통신의 보안성을 강화하고, 도청 및 해킹을 방지하는 데 기여하고 있습니다."]})},{id:"applications",title:"무선 양자암호통신 기술 개발",content:l.jsxs(l.Fragment,{children:["2023년 10월, KT는 무선 양자암호통신 기술 개발에 속도를 내어 국내 국방 분야를 선점하겠다는 의지를 밝혔습니다.",l.jsx("br",{}),"이를 위해 통신 신호 범위를 현재 2km 수준에서 10km로 5배 늘리고, 외산 의존도가 높은 송·수신기 등의 국산화를 목표로 하고 있습니다.",l.jsx("br",{}),"이 기술은 사단 규모의 군부대가 작전을 수행할 때 데이터 손실 없이 소통할 수 있도록 지원합니다."]})}]},{id:"iot",title:"사물인터넷(IoT)",subsections:[{id:"components",title:"양자 암호화 통신을 통한 IoT 보안 강화",content:l.jsxs(l.Fragment,{children:["양자 암호화 기술은 양자 역학의 원리를 이용하여 도청이 불가능한 통신을 구현합니다. 이를 통해 IoT 기기 간의 데이터 전송 시 보안성을 크게 향상시킬 수 있습니다.",l.jsx("br",{}),"예를 들어, 스마트 홈이나 스마트 시티의 센서 네트워크에서 양자 암호화를 적용하면 외부 공격으로부터 데이터를 안전하게 보호할 수 있습니다"]})},{id:"applications",title:"양자 센서를 활용한 고정밀 데이터 수집",content:l.jsxs(l.Fragment,{children:["양자 센서는 기존 센서보다 높은 정밀도와 민감도를 제공합니다. 이를 통해 IoT 시스템에서 환경 변화나 물리적 상태를 더욱 정확하게 감지할 수 있습니다.",l.jsx("br",{}),"예를 들어, 스마트 팜에서는 양자 센서를 활용하여 토양의 미세한 변화나 작물의 상태를 정밀하게 모니터링하여 생산성을 높일 수 있습니다."]})},{id:"applications",title:"양자 컴퓨팅을 통한 IoT 데이터 처리 효율 향상",content:l.jsxs(l.Fragment,{children:["양자 컴퓨팅은 복잡한 연산을 기존 컴퓨터보다 빠르게 처리할 수 있습니다. 이를 통해 IoT 기기에서 수집되는 방대한 데이터를 효율적으로 분석하고 처리할 수 있습니다.",l.jsx("br",{}),"예를 들어, 스마트 시티의 교통 관리 시스템에서 양자 컴퓨팅을 활용하면 실시간 교통 데이터를 빠르게 분석하여 최적의 교통 흐름을 유지할 수 있습니다."]})}]}],Xj=()=>{const[e,t]=b.useState(Rs[0].id),[n,r]=b.useState(!0),i=Rs.find(s=>s.id===e),o=()=>{r(!n)};return l.jsx(l.Fragment,{children:l.jsx(Lm,{children:l.jsxs(Rm,{children:[l.jsx(Yj,{onClick:o}),n&&l.jsx(Kj,{children:Rs.map(s=>l.jsx(qj,{$isActive:e===s.id,onClick:()=>t(s.id),children:s.title},s.id))}),l.jsx(Mm,{children:i.title}),i.subsections&&l.jsx(Nm,{children:i.subsections.map(s=>l.jsxs("div",{children:[l.jsx(Am,{children:s.title}),l.jsx(jt,{children:s.content}),s.content2&&l.jsx(jt,{children:s.content2})]},s.id))})]})})})},Ms=w.div`
  border: 2px solid #333;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.8;
  margin-bottom:50px;
  span{
    background: linear-gradient(to top, #D0E7FE 40%, transparent 10%);
  }

  p {
      margin-top: 5px;
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
`,Zj=()=>l.jsxs(Tm,{children:[l.jsx(zm,{children:l.jsx("a",{href:"/example",children:l.jsx("img",{src:Bl})})}),l.jsxs(Im,{children:[l.jsx("h1",{children:"양자 이미징"}),l.jsx("hr",{}),l.jsxs("h2",{style:{fontWeight:"400",marginBottom:"2%"},children:[l.jsx("span",{children:"양자 이미징 기술(Quantum Imaging)"}),"이란 양자 역학의 원리를 활용하여 기존 이미징 기술의 한계를 뛰어넘는 방식으로 이미지를 획득하는 기술입니다.",l.jsx("br",{}),"양자 이미징은 특히 ",l.jsx("span",{children:"얽힘(entanglement), 단일광자(single-photon), 양자 간섭(quantum interference)"}),"과 같은 양자 현상을 이용합니다."]}),l.jsx("h3",{children:"1) 양자 이미징 기술의 특징 "}),l.jsx(Ms,{children:l.jsxs("p",{children:["고감도 : 단일광자 수준의 민감도로 이미지를 생성할 수 있어, 매우 약한 빛에서도 고품질의 이미지를 획득할 수 있습니다. ",l.jsx("br",{})," 고해상도 : 양자광원의 특성을 활용해 기존 광학계에서의 회절 한계(Diffraction Limit)를 뛰어넘는 이미징이 가능하며, 더 정밀한 세부 정보를 담을 수 있습니다.",l.jsx("br",{}),"낮은 광량 요구 : 얽힘 상태의 광자를 활용해, 낮은 광량으로도 고품질 이미지를 생성할 수 있어 생체 조직이나 민감한 물질의 손상을 줄이는 데 유리합니다. ",l.jsx("br",{}),"비파괴 측정 : 양자 이미징 기술은 물체와 직접 상호작용하지 않고도 이미지를 얻을 수 있어, 섬세한 물체를 손상시키지 않고 관찰할 수 있습니다."]})}),l.jsx("h3",{children:"2) 대표적인 양자 이미징 기술"}),l.jsxs(Ms,{children:[l.jsxs("p",{children:[l.jsx("span",{style:{color:"#0489B1"},children:"고스트 이미징(Ghost Imaging)"}),l.jsx("br",{}),"얽힘 광자를 이용하여 대상 물체와 직접 상호작용하지 않고 이미지를 얻는 기술입니다. 하나의 광자는 물체를 관통하지 않고도, 얽힘 상태에 있는 다른 광자의 정보를 통해 이미지를 생성합니다."]}),l.jsxs("p",{children:[l.jsx("span",{style:{color:"#0489B1"},children:"양자 라이다(Quantum LiDAR)"}),l.jsx("br",{}),"빛의 반사 시간을 이용해 거리와 이미지를 측정하는 기술로, 양자 기술을 적용하여 더 정밀한 측정이 가능합니다."]}),l.jsxs("p",{children:[l.jsx("span",{style:{color:"#0489B1"},children:"양자 광학 현미경(Quantum Optical Microscopy)"}),l.jsx("br",{}),"얽힘 광자와 단일광자를 이용해 기존 현미경보다 더 높은 해상도로 이미지를 획득합니다."]})]}),l.jsx("h3",{children:"3) 현재 연구 진척도"}),l.jsxs(Ms,{children:[l.jsx("p",{children:' - 얽힘 광자와 단일광자를 활용한 기초 연구가 활발히 진행 중입니다."고스트 이미징" 등 원리를 기반으로 한 실험에서 상당한 성공을 거두었으며, 양자 광원 및 센서 기술이 발전하고 있습니다.'}),l.jsx("p",{children:" - MIT, NASA 등 주요 연구 기관은 양자 이미징 기술의 성능을 증명하는 시범 연구를 수행하고 있습니다.광학 정밀도를 높이기 위해 양자 센서와의 결합이 연구되고 있습니다."}),l.jsx("p",{children:" - 양자 이미징 기술을 국방, 의료 분야에서 시범적으로 도입. 일부 고급 의료 장비와 산업 검사 장비에 제한적으로 적용되고 있습니다."})]})]})]});function Jj(){return l.jsxs(uv,{children:[l.jsx(Qx,{}),l.jsx(US,{}),l.jsxs(nv,{children:[l.jsx(ae,{path:"/",element:l.jsx(Ex,{})}),l.jsx(ae,{path:"/concept",element:l.jsx(Iw,{})}),l.jsx(ae,{path:"/description",element:l.jsx(tS,{})}),l.jsx(ae,{path:"/quiz",element:l.jsx(Lw,{})}),l.jsx(ae,{path:"/medium",element:l.jsx(Aw,{})}),l.jsx(ae,{path:"/advanced",element:l.jsx(Fw,{})}),l.jsx(ae,{path:"/quizmain",element:l.jsx(Mw,{})}),l.jsx(ae,{path:"/character",element:l.jsx(CS,{})}),l.jsx(ae,{path:"/cat",element:l.jsx(IS,{})}),l.jsx(ae,{path:"/company",element:l.jsx(Ww,{})}),l.jsx(ae,{path:"/company/:companyName",element:l.jsx(VS,{})}),l.jsx(ae,{path:"/business/:businessName",element:l.jsx(qS,{})}),l.jsx(ae,{path:"/recent",element:l.jsx(Xw,{})}),l.jsx(ae,{path:"/coinentanglement",element:l.jsx(QS,{})}),l.jsx(ae,{path:"/computing",element:l.jsx(XS,{})}),l.jsx(ae,{path:"/about",element:l.jsx(mj,{})}),l.jsx(ae,{path:"/industry",element:l.jsx(kj,{})}),l.jsx(ae,{path:"/quantumTimeline",element:l.jsx(Vj,{})}),l.jsx(ae,{path:"/example",element:l.jsx(Xj,{})}),l.jsx(ae,{path:"/qimage",element:l.jsx(Zj,{})})]}),l.jsx(iS,{}),l.jsx(ZS,{}),l.jsx(Jx,{})]})}const e4=yx`
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
`,t4={title:Cn`
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 800;
      font-size: 4rem;
      letter-spacing: 0.07em;
    `,text:Cn`
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 500;
      font-size: 1.5rem;
      letter-spacing: 0.07em;
    `},n4={fonts:t4};function r4(){return l.jsx(l.Fragment,{children:l.jsxs(gx,{theme:n4,children:[l.jsx(e4,{}),l.jsx(Jj,{})]})})}Ns.createRoot(document.getElementById("root")).render(l.jsx(fe.StrictMode,{children:l.jsx(r4,{})}));
