function zm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Oi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Tf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Lm(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var If={exports:{}},cl={},zf={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wi=Symbol.for("react.element"),Rm=Symbol.for("react.portal"),Nm=Symbol.for("react.fragment"),Mm=Symbol.for("react.strict_mode"),Fm=Symbol.for("react.profiler"),Dm=Symbol.for("react.provider"),Am=Symbol.for("react.context"),$m=Symbol.for("react.forward_ref"),Bm=Symbol.for("react.suspense"),Wm=Symbol.for("react.memo"),Qm=Symbol.for("react.lazy"),uc=Symbol.iterator;function Um(e){return e===null||typeof e!="object"?null:(e=uc&&e[uc]||e["@@iterator"],typeof e=="function"?e:null)}var Lf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rf=Object.assign,Nf={};function Sr(e,t,n){this.props=e,this.context=t,this.refs=Nf,this.updater=n||Lf}Sr.prototype.isReactComponent={};Sr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mf(){}Mf.prototype=Sr.prototype;function Ya(e,t,n){this.props=e,this.context=t,this.refs=Nf,this.updater=n||Lf}var Xa=Ya.prototype=new Mf;Xa.constructor=Ya;Rf(Xa,Sr.prototype);Xa.isPureReactComponent=!0;var cc=Array.isArray,Ff=Object.prototype.hasOwnProperty,Za={current:null},Df={key:!0,ref:!0,__self:!0,__source:!0};function Af(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Ff.call(t,r)&&!Df.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:wi,type:e,key:o,ref:s,props:i,_owner:Za.current}}function Hm(e,t){return{$$typeof:wi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ja(e){return typeof e=="object"&&e!==null&&e.$$typeof===wi}function Vm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var dc=/\/+/g;function Bl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Vm(""+e.key):t.toString(36)}function Zi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case wi:case Rm:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Bl(s,0):r,cc(i)?(n="",e!=null&&(n=e.replace(dc,"$&/")+"/"),Zi(i,t,n,"",function(c){return c})):i!=null&&(Ja(i)&&(i=Hm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(dc,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",cc(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+Bl(o,a);s+=Zi(o,t,n,u,i)}else if(u=Um(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+Bl(o,a++),s+=Zi(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ti(e,t,n){if(e==null)return e;var r=[],i=0;return Zi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Gm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},Ji={transition:null},Km={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:Ji,ReactCurrentOwner:Za};function $f(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Ti,forEach:function(e,t,n){Ti(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ti(e,function(){t++}),t},toArray:function(e){return Ti(e,function(t){return t})||[]},only:function(e){if(!Ja(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Sr;U.Fragment=Nm;U.Profiler=Fm;U.PureComponent=Ya;U.StrictMode=Mm;U.Suspense=Bm;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Km;U.act=$f;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Rf({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Za.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Ff.call(t,u)&&!Df.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:wi,type:e.type,key:i,ref:o,props:r,_owner:s}};U.createContext=function(e){return e={$$typeof:Am,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Dm,_context:e},e.Consumer=e};U.createElement=Af;U.createFactory=function(e){var t=Af.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:$m,render:e}};U.isValidElement=Ja;U.lazy=function(e){return{$$typeof:Qm,_payload:{_status:-1,_result:e},_init:Gm}};U.memo=function(e,t){return{$$typeof:Wm,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Ji.transition;Ji.transition={};try{e()}finally{Ji.transition=t}};U.unstable_act=$f;U.useCallback=function(e,t){return ze.current.useCallback(e,t)};U.useContext=function(e){return ze.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};U.useEffect=function(e,t){return ze.current.useEffect(e,t)};U.useId=function(){return ze.current.useId()};U.useImperativeHandle=function(e,t,n){return ze.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return ze.current.useMemo(e,t)};U.useReducer=function(e,t,n){return ze.current.useReducer(e,t,n)};U.useRef=function(e){return ze.current.useRef(e)};U.useState=function(e){return ze.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return ze.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return ze.current.useTransition()};U.version="18.3.1";zf.exports=U;var k=zf.exports;const fe=Tf(k),qm=zm({__proto__:null,default:fe},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym=k,Xm=Symbol.for("react.element"),Zm=Symbol.for("react.fragment"),Jm=Object.prototype.hasOwnProperty,eg=Ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tg={key:!0,ref:!0,__self:!0,__source:!0};function Bf(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Jm.call(t,r)&&!tg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Xm,type:e,key:o,ref:s,props:i,_owner:eg.current}}cl.Fragment=Zm;cl.jsx=Bf;cl.jsxs=Bf;If.exports=cl;var l=If.exports,Ls={},Wf={exports:{}},Ke={},Qf={exports:{}},Uf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,R){var $=z.length;z.push(R);e:for(;0<$;){var H=$-1>>>1,G=z[H];if(0<i(G,R))z[H]=R,z[$]=G,$=H;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var R=z[0],$=z.pop();if($!==R){z[0]=$;e:for(var H=0,G=z.length,Pe=G>>>1;H<Pe;){var Be=2*(H+1)-1,Re=z[Be],We=Be+1,yt=z[We];if(0>i(Re,$))We<G&&0>i(yt,Re)?(z[H]=yt,z[We]=$,H=We):(z[H]=Re,z[Be]=$,H=Be);else if(We<G&&0>i(yt,$))z[H]=yt,z[We]=$,H=We;else break e}}return R}function i(z,R){var $=z.sortIndex-R.sortIndex;return $!==0?$:z.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var u=[],c=[],h=1,f=null,g=3,x=!1,y=!1,v=!1,j=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(z){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=z)r(c),R.sortIndex=R.expirationTime,t(u,R);else break;R=n(c)}}function w(z){if(v=!1,m(z),!y)if(n(u)!==null)y=!0,le(b);else{var R=n(c);R!==null&&we(w,R.startTime-z)}}function b(z,R){y=!1,v&&(v=!1,p(T),T=-1),x=!0;var $=g;try{for(m(R),f=n(u);f!==null&&(!(f.expirationTime>R)||z&&!M());){var H=f.callback;if(typeof H=="function"){f.callback=null,g=f.priorityLevel;var G=H(f.expirationTime<=R);R=e.unstable_now(),typeof G=="function"?f.callback=G:f===n(u)&&r(u),m(R)}else r(u);f=n(u)}if(f!==null)var Pe=!0;else{var Be=n(c);Be!==null&&we(w,Be.startTime-R),Pe=!1}return Pe}finally{f=null,g=$,x=!1}}var C=!1,E=null,T=-1,P=5,_=-1;function M(){return!(e.unstable_now()-_<P)}function N(){if(E!==null){var z=e.unstable_now();_=z;var R=!0;try{R=E(!0,z)}finally{R?F():(C=!1,E=null)}}else C=!1}var F;if(typeof d=="function")F=function(){d(N)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,it=A.port2;A.port1.onmessage=N,F=function(){it.postMessage(null)}}else F=function(){j(N,0)};function le(z){E=z,C||(C=!0,F())}function we(z,R){T=j(function(){z(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,le(b))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var $=g;g=R;try{return z()}finally{g=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,R){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=g;g=z;try{return R()}finally{g=$}},e.unstable_scheduleCallback=function(z,R,$){var H=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?H+$:H):$=H,z){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=$+G,z={id:h++,callback:R,priorityLevel:z,startTime:$,expirationTime:G,sortIndex:-1},$>H?(z.sortIndex=$,t(c,z),n(u)===null&&z===n(c)&&(v?(p(T),T=-1):v=!0,we(w,$-H))):(z.sortIndex=G,t(u,z),y||x||(y=!0,le(b))),z},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(z){var R=g;return function(){var $=g;g=R;try{return z.apply(this,arguments)}finally{g=$}}}})(Uf);Qf.exports=Uf;var ng=Qf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg=k,Ge=ng;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hf=new Set,Zr={};function En(e,t){nr(e,t),nr(e+"Capture",t)}function nr(e,t){for(Zr[e]=t,e=0;e<t.length;e++)Hf.add(t[e])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rs=Object.prototype.hasOwnProperty,ig=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fc={},pc={};function og(e){return Rs.call(pc,e)?!0:Rs.call(fc,e)?!1:ig.test(e)?pc[e]=!0:(fc[e]=!0,!1)}function lg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sg(e,t,n,r){if(t===null||typeof t>"u"||lg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Le(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new Le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Le(e,5,!1,e.toLowerCase(),null,!1,!1)});var eu=/[\-:]([a-z])/g;function tu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(eu,tu);ke[t]=new Le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(eu,tu);ke[t]=new Le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(eu,tu);ke[t]=new Le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Le(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Le(e,1,!1,e.toLowerCase(),null,!0,!0)});function nu(e,t,n,r){var i=ke.hasOwnProperty(t)?ke[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sg(t,n,i,r)&&(n=null),r||i===null?og(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zt=rg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ii=Symbol.for("react.element"),Rn=Symbol.for("react.portal"),Nn=Symbol.for("react.fragment"),ru=Symbol.for("react.strict_mode"),Ns=Symbol.for("react.profiler"),Vf=Symbol.for("react.provider"),Gf=Symbol.for("react.context"),iu=Symbol.for("react.forward_ref"),Ms=Symbol.for("react.suspense"),Fs=Symbol.for("react.suspense_list"),ou=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),Kf=Symbol.for("react.offscreen"),hc=Symbol.iterator;function Pr(e){return e===null||typeof e!="object"?null:(e=hc&&e[hc]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,Wl;function Fr(e){if(Wl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wl=t&&t[1]||""}return`
`+Wl+e}var Ql=!1;function Ul(e,t){if(!e||Ql)return"";Ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var u=`
`+i[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{Ql=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fr(e):""}function ag(e){switch(e.tag){case 5:return Fr(e.type);case 16:return Fr("Lazy");case 13:return Fr("Suspense");case 19:return Fr("SuspenseList");case 0:case 2:case 15:return e=Ul(e.type,!1),e;case 11:return e=Ul(e.type.render,!1),e;case 1:return e=Ul(e.type,!0),e;default:return""}}function Ds(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nn:return"Fragment";case Rn:return"Portal";case Ns:return"Profiler";case ru:return"StrictMode";case Ms:return"Suspense";case Fs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gf:return(e.displayName||"Context")+".Consumer";case Vf:return(e._context.displayName||"Context")+".Provider";case iu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ou:return t=e.displayName||null,t!==null?t:Ds(e.type)||"Memo";case Mt:t=e._payload,e=e._init;try{return Ds(e(t))}catch{}}return null}function ug(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ds(t);case 8:return t===ru?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function en(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cg(e){var t=qf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zi(e){e._valueTracker||(e._valueTracker=cg(e))}function Yf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=qf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function xo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function As(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function mc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xf(e,t){t=t.checked,t!=null&&nu(e,"checked",t,!1)}function $s(e,t){Xf(e,t);var n=en(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bs(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bs(e,t,n){(t!=="number"||xo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dr=Array.isArray;function Gn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ws(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(Dr(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}function Zf(e,t){var n=en(t.value),r=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function xc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Li,ep=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Li=Li||document.createElement("div"),Li.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dg=["Webkit","ms","Moz","O"];Object.keys(Wr).forEach(function(e){dg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wr[t]=Wr[e]})});function tp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wr.hasOwnProperty(e)&&Wr[e]?(""+t).trim():t+"px"}function np(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=tp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var fg=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Us(e,t){if(t){if(fg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function Hs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vs=null;function lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gs=null,Kn=null,qn=null;function yc(e){if(e=ki(e)){if(typeof Gs!="function")throw Error(O(280));var t=e.stateNode;t&&(t=ml(t),Gs(e.stateNode,e.type,t))}}function rp(e){Kn?qn?qn.push(e):qn=[e]:Kn=e}function ip(){if(Kn){var e=Kn,t=qn;if(qn=Kn=null,yc(e),t)for(e=0;e<t.length;e++)yc(t[e])}}function op(e,t){return e(t)}function lp(){}var Hl=!1;function sp(e,t,n){if(Hl)return e(t,n);Hl=!0;try{return op(e,t,n)}finally{Hl=!1,(Kn!==null||qn!==null)&&(lp(),ip())}}function ei(e,t){var n=e.stateNode;if(n===null)return null;var r=ml(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var Ks=!1;if(Pt)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Ks=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Ks=!1}function pg(e,t,n,r,i,o,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Qr=!1,yo=null,wo=!1,qs=null,hg={onError:function(e){Qr=!0,yo=e}};function mg(e,t,n,r,i,o,s,a,u){Qr=!1,yo=null,pg.apply(hg,arguments)}function gg(e,t,n,r,i,o,s,a,u){if(mg.apply(this,arguments),Qr){if(Qr){var c=yo;Qr=!1,yo=null}else throw Error(O(198));wo||(wo=!0,qs=c)}}function _n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ap(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wc(e){if(_n(e)!==e)throw Error(O(188))}function vg(e){var t=e.alternate;if(!t){if(t=_n(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return wc(i),e;if(o===r)return wc(i),t;o=o.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function up(e){return e=vg(e),e!==null?cp(e):null}function cp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cp(e);if(t!==null)return t;e=e.sibling}return null}var dp=Ge.unstable_scheduleCallback,Sc=Ge.unstable_cancelCallback,xg=Ge.unstable_shouldYield,yg=Ge.unstable_requestPaint,ae=Ge.unstable_now,wg=Ge.unstable_getCurrentPriorityLevel,su=Ge.unstable_ImmediatePriority,fp=Ge.unstable_UserBlockingPriority,So=Ge.unstable_NormalPriority,Sg=Ge.unstable_LowPriority,pp=Ge.unstable_IdlePriority,dl=null,vt=null;function jg(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(dl,e,void 0,(e.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:Cg,kg=Math.log,bg=Math.LN2;function Cg(e){return e>>>=0,e===0?32:31-(kg(e)/bg|0)|0}var Ri=64,Ni=4194304;function Ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function jo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Ar(a):(o&=s,o!==0&&(r=Ar(o)))}else s=n&~i,s!==0?r=Ar(s):o!==0&&(r=Ar(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ut(t),i=1<<n,r|=e[n],t&=~i;return r}function Eg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _g(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ut(o),a=1<<s,u=i[s];u===-1?(!(a&n)||a&r)&&(i[s]=Eg(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function Ys(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hp(){var e=Ri;return Ri<<=1,!(Ri&4194240)&&(Ri=64),e}function Vl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Si(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ut(t),e[t]=n}function Pg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ut(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function au(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ut(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var q=0;function mp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gp,uu,vp,xp,yp,Xs=!1,Mi=[],Ut=null,Ht=null,Vt=null,ti=new Map,ni=new Map,At=[],Og="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jc(e,t){switch(e){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":ti.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ni.delete(t.pointerId)}}function Tr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ki(t),t!==null&&uu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tg(e,t,n,r,i){switch(t){case"focusin":return Ut=Tr(Ut,e,t,n,r,i),!0;case"dragenter":return Ht=Tr(Ht,e,t,n,r,i),!0;case"mouseover":return Vt=Tr(Vt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ti.set(o,Tr(ti.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ni.set(o,Tr(ni.get(o)||null,e,t,n,r,i)),!0}return!1}function wp(e){var t=cn(e.target);if(t!==null){var n=_n(t);if(n!==null){if(t=n.tag,t===13){if(t=ap(n),t!==null){e.blockedOn=t,yp(e.priority,function(){vp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function eo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Vs=r,n.target.dispatchEvent(r),Vs=null}else return t=ki(n),t!==null&&uu(t),e.blockedOn=n,!1;t.shift()}return!0}function kc(e,t,n){eo(e)&&n.delete(t)}function Ig(){Xs=!1,Ut!==null&&eo(Ut)&&(Ut=null),Ht!==null&&eo(Ht)&&(Ht=null),Vt!==null&&eo(Vt)&&(Vt=null),ti.forEach(kc),ni.forEach(kc)}function Ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Xs||(Xs=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,Ig)))}function ri(e){function t(i){return Ir(i,e)}if(0<Mi.length){Ir(Mi[0],e);for(var n=1;n<Mi.length;n++){var r=Mi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ut!==null&&Ir(Ut,e),Ht!==null&&Ir(Ht,e),Vt!==null&&Ir(Vt,e),ti.forEach(t),ni.forEach(t),n=0;n<At.length;n++)r=At[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)wp(n),n.blockedOn===null&&At.shift()}var Yn=zt.ReactCurrentBatchConfig,ko=!0;function zg(e,t,n,r){var i=q,o=Yn.transition;Yn.transition=null;try{q=1,cu(e,t,n,r)}finally{q=i,Yn.transition=o}}function Lg(e,t,n,r){var i=q,o=Yn.transition;Yn.transition=null;try{q=4,cu(e,t,n,r)}finally{q=i,Yn.transition=o}}function cu(e,t,n,r){if(ko){var i=Zs(e,t,n,r);if(i===null)ns(e,t,r,bo,n),jc(e,r);else if(Tg(i,e,t,n,r))r.stopPropagation();else if(jc(e,r),t&4&&-1<Og.indexOf(e)){for(;i!==null;){var o=ki(i);if(o!==null&&gp(o),o=Zs(e,t,n,r),o===null&&ns(e,t,r,bo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ns(e,t,r,null,n)}}var bo=null;function Zs(e,t,n,r){if(bo=null,e=lu(r),e=cn(e),e!==null)if(t=_n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ap(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bo=e,null}function Sp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wg()){case su:return 1;case fp:return 4;case So:case Sg:return 16;case pp:return 536870912;default:return 16}default:return 16}}var Bt=null,du=null,to=null;function jp(){if(to)return to;var e,t=du,n=t.length,r,i="value"in Bt?Bt.value:Bt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return to=i.slice(e,1<r?1-r:void 0)}function no(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fi(){return!0}function bc(){return!1}function qe(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Fi:bc,this.isPropagationStopped=bc,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fi)},persist:function(){},isPersistent:Fi}),t}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fu=qe(jr),ji=oe({},jr,{view:0,detail:0}),Rg=qe(ji),Gl,Kl,zr,fl=oe({},ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(Gl=e.screenX-zr.screenX,Kl=e.screenY-zr.screenY):Kl=Gl=0,zr=e),Gl)},movementY:function(e){return"movementY"in e?e.movementY:Kl}}),Cc=qe(fl),Ng=oe({},fl,{dataTransfer:0}),Mg=qe(Ng),Fg=oe({},ji,{relatedTarget:0}),ql=qe(Fg),Dg=oe({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ag=qe(Dg),$g=oe({},jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bg=qe($g),Wg=oe({},jr,{data:0}),Ec=qe(Wg),Qg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ug={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hg[e])?!!t[e]:!1}function pu(){return Vg}var Gg=oe({},ji,{key:function(e){if(e.key){var t=Qg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=no(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ug[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(e){return e.type==="keypress"?no(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?no(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kg=qe(Gg),qg=oe({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_c=qe(qg),Yg=oe({},ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),Xg=qe(Yg),Zg=oe({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jg=qe(Zg),e1=oe({},fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),t1=qe(e1),n1=[9,13,27,32],hu=Pt&&"CompositionEvent"in window,Ur=null;Pt&&"documentMode"in document&&(Ur=document.documentMode);var r1=Pt&&"TextEvent"in window&&!Ur,kp=Pt&&(!hu||Ur&&8<Ur&&11>=Ur),Pc=" ",Oc=!1;function bp(e,t){switch(e){case"keyup":return n1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mn=!1;function i1(e,t){switch(e){case"compositionend":return Cp(t);case"keypress":return t.which!==32?null:(Oc=!0,Pc);case"textInput":return e=t.data,e===Pc&&Oc?null:e;default:return null}}function o1(e,t){if(Mn)return e==="compositionend"||!hu&&bp(e,t)?(e=jp(),to=du=Bt=null,Mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kp&&t.locale!=="ko"?null:t.data;default:return null}}var l1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!l1[e.type]:t==="textarea"}function Ep(e,t,n,r){rp(r),t=Co(t,"onChange"),0<t.length&&(n=new fu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hr=null,ii=null;function s1(e){Fp(e,0)}function pl(e){var t=An(e);if(Yf(t))return e}function a1(e,t){if(e==="change")return t}var _p=!1;if(Pt){var Yl;if(Pt){var Xl="oninput"in document;if(!Xl){var Ic=document.createElement("div");Ic.setAttribute("oninput","return;"),Xl=typeof Ic.oninput=="function"}Yl=Xl}else Yl=!1;_p=Yl&&(!document.documentMode||9<document.documentMode)}function zc(){Hr&&(Hr.detachEvent("onpropertychange",Pp),ii=Hr=null)}function Pp(e){if(e.propertyName==="value"&&pl(ii)){var t=[];Ep(t,ii,e,lu(e)),sp(s1,t)}}function u1(e,t,n){e==="focusin"?(zc(),Hr=t,ii=n,Hr.attachEvent("onpropertychange",Pp)):e==="focusout"&&zc()}function c1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(ii)}function d1(e,t){if(e==="click")return pl(t)}function f1(e,t){if(e==="input"||e==="change")return pl(t)}function p1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:p1;function oi(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rs.call(t,i)||!ft(e[i],t[i]))return!1}return!0}function Lc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rc(e,t){var n=Lc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lc(n)}}function Op(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Op(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tp(){for(var e=window,t=xo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xo(e.document)}return t}function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function h1(e){var t=Tp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Op(n.ownerDocument.documentElement,n)){if(r!==null&&mu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Rc(n,o);var s=Rc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var m1=Pt&&"documentMode"in document&&11>=document.documentMode,Fn=null,Js=null,Vr=null,ea=!1;function Nc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ea||Fn==null||Fn!==xo(r)||(r=Fn,"selectionStart"in r&&mu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&oi(Vr,r)||(Vr=r,r=Co(Js,"onSelect"),0<r.length&&(t=new fu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Fn)))}function Di(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dn={animationend:Di("Animation","AnimationEnd"),animationiteration:Di("Animation","AnimationIteration"),animationstart:Di("Animation","AnimationStart"),transitionend:Di("Transition","TransitionEnd")},Zl={},Ip={};Pt&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function hl(e){if(Zl[e])return Zl[e];if(!Dn[e])return e;var t=Dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ip)return Zl[e]=t[n];return e}var zp=hl("animationend"),Lp=hl("animationiteration"),Rp=hl("animationstart"),Np=hl("transitionend"),Mp=new Map,Mc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(e,t){Mp.set(e,t),En(t,[e])}for(var Jl=0;Jl<Mc.length;Jl++){var es=Mc[Jl],g1=es.toLowerCase(),v1=es[0].toUpperCase()+es.slice(1);nn(g1,"on"+v1)}nn(zp,"onAnimationEnd");nn(Lp,"onAnimationIteration");nn(Rp,"onAnimationStart");nn("dblclick","onDoubleClick");nn("focusin","onFocus");nn("focusout","onBlur");nn(Np,"onTransitionEnd");nr("onMouseEnter",["mouseout","mouseover"]);nr("onMouseLeave",["mouseout","mouseover"]);nr("onPointerEnter",["pointerout","pointerover"]);nr("onPointerLeave",["pointerout","pointerover"]);En("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));En("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));En("onBeforeInput",["compositionend","keypress","textInput","paste"]);En("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));En("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));En("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x1=new Set("cancel close invalid load scroll toggle".split(" ").concat($r));function Fc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,gg(r,t,void 0,e),e.currentTarget=null}function Fp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;Fc(i,a,c),o=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;Fc(i,a,c),o=u}}}if(wo)throw e=qs,wo=!1,qs=null,e}function X(e,t){var n=t[oa];n===void 0&&(n=t[oa]=new Set);var r=e+"__bubble";n.has(r)||(Dp(t,e,2,!1),n.add(r))}function ts(e,t,n){var r=0;t&&(r|=4),Dp(n,e,r,t)}var Ai="_reactListening"+Math.random().toString(36).slice(2);function li(e){if(!e[Ai]){e[Ai]=!0,Hf.forEach(function(n){n!=="selectionchange"&&(x1.has(n)||ts(n,!1,e),ts(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ai]||(t[Ai]=!0,ts("selectionchange",!1,t))}}function Dp(e,t,n,r){switch(Sp(t)){case 1:var i=zg;break;case 4:i=Lg;break;default:i=cu}n=i.bind(null,t,n,e),i=void 0,!Ks||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ns(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;a!==null;){if(s=cn(a),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}a=a.parentNode}}r=r.return}sp(function(){var c=o,h=lu(n),f=[];e:{var g=Mp.get(e);if(g!==void 0){var x=fu,y=e;switch(e){case"keypress":if(no(n)===0)break e;case"keydown":case"keyup":x=Kg;break;case"focusin":y="focus",x=ql;break;case"focusout":y="blur",x=ql;break;case"beforeblur":case"afterblur":x=ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Cc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Mg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Xg;break;case zp:case Lp:case Rp:x=Ag;break;case Np:x=Jg;break;case"scroll":x=Rg;break;case"wheel":x=t1;break;case"copy":case"cut":case"paste":x=Bg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=_c}var v=(t&4)!==0,j=!v&&e==="scroll",p=v?g!==null?g+"Capture":null:g;v=[];for(var d=c,m;d!==null;){m=d;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=ei(d,p),w!=null&&v.push(si(d,w,m)))),j)break;d=d.return}0<v.length&&(g=new x(g,y,null,n,h),f.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==Vs&&(y=n.relatedTarget||n.fromElement)&&(cn(y)||y[Ot]))break e;if((x||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=c,y=y?cn(y):null,y!==null&&(j=_n(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=c),x!==y)){if(v=Cc,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=_c,w="onPointerLeave",p="onPointerEnter",d="pointer"),j=x==null?g:An(x),m=y==null?g:An(y),g=new v(w,d+"leave",x,n,h),g.target=j,g.relatedTarget=m,w=null,cn(h)===c&&(v=new v(p,d+"enter",y,n,h),v.target=m,v.relatedTarget=j,w=v),j=w,x&&y)t:{for(v=x,p=y,d=0,m=v;m;m=On(m))d++;for(m=0,w=p;w;w=On(w))m++;for(;0<d-m;)v=On(v),d--;for(;0<m-d;)p=On(p),m--;for(;d--;){if(v===p||p!==null&&v===p.alternate)break t;v=On(v),p=On(p)}v=null}else v=null;x!==null&&Dc(f,g,x,v,!1),y!==null&&j!==null&&Dc(f,j,y,v,!0)}}e:{if(g=c?An(c):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var b=a1;else if(Tc(g))if(_p)b=f1;else{b=c1;var C=u1}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=d1);if(b&&(b=b(e,c))){Ep(f,b,n,h);break e}C&&C(e,g,c),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&Bs(g,"number",g.value)}switch(C=c?An(c):window,e){case"focusin":(Tc(C)||C.contentEditable==="true")&&(Fn=C,Js=c,Vr=null);break;case"focusout":Vr=Js=Fn=null;break;case"mousedown":ea=!0;break;case"contextmenu":case"mouseup":case"dragend":ea=!1,Nc(f,n,h);break;case"selectionchange":if(m1)break;case"keydown":case"keyup":Nc(f,n,h)}var E;if(hu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Mn?bp(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(kp&&n.locale!=="ko"&&(Mn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Mn&&(E=jp()):(Bt=h,du="value"in Bt?Bt.value:Bt.textContent,Mn=!0)),C=Co(c,T),0<C.length&&(T=new Ec(T,e,null,n,h),f.push({event:T,listeners:C}),E?T.data=E:(E=Cp(n),E!==null&&(T.data=E)))),(E=r1?i1(e,n):o1(e,n))&&(c=Co(c,"onBeforeInput"),0<c.length&&(h=new Ec("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=E))}Fp(f,t)})}function si(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Co(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ei(e,n),o!=null&&r.unshift(si(e,o,i)),o=ei(e,t),o!=null&&r.push(si(e,o,i))),e=e.return}return r}function On(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Dc(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=ei(n,o),u!=null&&s.unshift(si(n,u,a))):i||(u=ei(n,o),u!=null&&s.push(si(n,u,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var y1=/\r\n?/g,w1=/\u0000|\uFFFD/g;function Ac(e){return(typeof e=="string"?e:""+e).replace(y1,`
`).replace(w1,"")}function $i(e,t,n){if(t=Ac(t),Ac(e)!==t&&n)throw Error(O(425))}function Eo(){}var ta=null,na=null;function ra(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ia=typeof setTimeout=="function"?setTimeout:void 0,S1=typeof clearTimeout=="function"?clearTimeout:void 0,$c=typeof Promise=="function"?Promise:void 0,j1=typeof queueMicrotask=="function"?queueMicrotask:typeof $c<"u"?function(e){return $c.resolve(null).then(e).catch(k1)}:ia;function k1(e){setTimeout(function(){throw e})}function rs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ri(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ri(t)}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kr=Math.random().toString(36).slice(2),gt="__reactFiber$"+kr,ai="__reactProps$"+kr,Ot="__reactContainer$"+kr,oa="__reactEvents$"+kr,b1="__reactListeners$"+kr,C1="__reactHandles$"+kr;function cn(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bc(e);e!==null;){if(n=e[gt])return n;e=Bc(e)}return t}e=n,n=e.parentNode}return null}function ki(e){return e=e[gt]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function An(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function ml(e){return e[ai]||null}var la=[],$n=-1;function rn(e){return{current:e}}function J(e){0>$n||(e.current=la[$n],la[$n]=null,$n--)}function Y(e,t){$n++,la[$n]=e.current,e.current=t}var tn={},_e=rn(tn),De=rn(!1),vn=tn;function rr(e,t){var n=e.type.contextTypes;if(!n)return tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(e){return e=e.childContextTypes,e!=null}function _o(){J(De),J(_e)}function Wc(e,t,n){if(_e.current!==tn)throw Error(O(168));Y(_e,t),Y(De,n)}function Ap(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(O(108,ug(e)||"Unknown",i));return oe({},n,r)}function Po(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tn,vn=_e.current,Y(_e,e),Y(De,De.current),!0}function Qc(e,t,n){var r=e.stateNode;if(!r)throw Error(O(169));n?(e=Ap(e,t,vn),r.__reactInternalMemoizedMergedChildContext=e,J(De),J(_e),Y(_e,e)):J(De),Y(De,n)}var kt=null,gl=!1,is=!1;function $p(e){kt===null?kt=[e]:kt.push(e)}function E1(e){gl=!0,$p(e)}function on(){if(!is&&kt!==null){is=!0;var e=0,t=q;try{var n=kt;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kt=null,gl=!1}catch(i){throw kt!==null&&(kt=kt.slice(e+1)),dp(su,on),i}finally{q=t,is=!1}}return null}var Bn=[],Wn=0,Oo=null,To=0,Ye=[],Xe=0,xn=null,Ct=1,Et="";function an(e,t){Bn[Wn++]=To,Bn[Wn++]=Oo,Oo=e,To=t}function Bp(e,t,n){Ye[Xe++]=Ct,Ye[Xe++]=Et,Ye[Xe++]=xn,xn=e;var r=Ct;e=Et;var i=32-ut(r)-1;r&=~(1<<i),n+=1;var o=32-ut(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ct=1<<32-ut(t)+i|n<<i|r,Et=o+e}else Ct=1<<o|n<<i|r,Et=e}function gu(e){e.return!==null&&(an(e,1),Bp(e,1,0))}function vu(e){for(;e===Oo;)Oo=Bn[--Wn],Bn[Wn]=null,To=Bn[--Wn],Bn[Wn]=null;for(;e===xn;)xn=Ye[--Xe],Ye[Xe]=null,Et=Ye[--Xe],Ye[Xe]=null,Ct=Ye[--Xe],Ye[Xe]=null}var Ve=null,He=null,te=!1,at=null;function Wp(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Uc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,He=Gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xn!==null?{id:Ct,overflow:Et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,He=null,!0):!1;default:return!1}}function sa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function aa(e){if(te){var t=He;if(t){var n=t;if(!Uc(e,t)){if(sa(e))throw Error(O(418));t=Gt(n.nextSibling);var r=Ve;t&&Uc(e,t)?Wp(r,n):(e.flags=e.flags&-4097|2,te=!1,Ve=e)}}else{if(sa(e))throw Error(O(418));e.flags=e.flags&-4097|2,te=!1,Ve=e}}}function Hc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function Bi(e){if(e!==Ve)return!1;if(!te)return Hc(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ra(e.type,e.memoizedProps)),t&&(t=He)){if(sa(e))throw Qp(),Error(O(418));for(;t;)Wp(e,t),t=Gt(t.nextSibling)}if(Hc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=Gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=Ve?Gt(e.stateNode.nextSibling):null;return!0}function Qp(){for(var e=He;e;)e=Gt(e.nextSibling)}function ir(){He=Ve=null,te=!1}function xu(e){at===null?at=[e]:at.push(e)}var _1=zt.ReactCurrentBatchConfig;function Lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function Wi(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vc(e){var t=e._init;return t(e._payload)}function Up(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=Xt(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,w){return d===null||d.tag!==6?(d=ds(m,p.mode,w),d.return=p,d):(d=i(d,m),d.return=p,d)}function u(p,d,m,w){var b=m.type;return b===Nn?h(p,d,m.props.children,w,m.key):d!==null&&(d.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Mt&&Vc(b)===d.type)?(w=i(d,m.props),w.ref=Lr(p,d,m),w.return=p,w):(w=uo(m.type,m.key,m.props,null,p.mode,w),w.ref=Lr(p,d,m),w.return=p,w)}function c(p,d,m,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=fs(m,p.mode,w),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function h(p,d,m,w,b){return d===null||d.tag!==7?(d=mn(m,p.mode,w,b),d.return=p,d):(d=i(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ds(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ii:return m=uo(d.type,d.key,d.props,null,p.mode,m),m.ref=Lr(p,null,d),m.return=p,m;case Rn:return d=fs(d,p.mode,m),d.return=p,d;case Mt:var w=d._init;return f(p,w(d._payload),m)}if(Dr(d)||Pr(d))return d=mn(d,p.mode,m,null),d.return=p,d;Wi(p,d)}return null}function g(p,d,m,w){var b=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return b!==null?null:a(p,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ii:return m.key===b?u(p,d,m,w):null;case Rn:return m.key===b?c(p,d,m,w):null;case Mt:return b=m._init,g(p,d,b(m._payload),w)}if(Dr(m)||Pr(m))return b!==null?null:h(p,d,m,w,null);Wi(p,m)}return null}function x(p,d,m,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(d,p,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ii:return p=p.get(w.key===null?m:w.key)||null,u(d,p,w,b);case Rn:return p=p.get(w.key===null?m:w.key)||null,c(d,p,w,b);case Mt:var C=w._init;return x(p,d,m,C(w._payload),b)}if(Dr(w)||Pr(w))return p=p.get(m)||null,h(d,p,w,b,null);Wi(d,w)}return null}function y(p,d,m,w){for(var b=null,C=null,E=d,T=d=0,P=null;E!==null&&T<m.length;T++){E.index>T?(P=E,E=null):P=E.sibling;var _=g(p,E,m[T],w);if(_===null){E===null&&(E=P);break}e&&E&&_.alternate===null&&t(p,E),d=o(_,d,T),C===null?b=_:C.sibling=_,C=_,E=P}if(T===m.length)return n(p,E),te&&an(p,T),b;if(E===null){for(;T<m.length;T++)E=f(p,m[T],w),E!==null&&(d=o(E,d,T),C===null?b=E:C.sibling=E,C=E);return te&&an(p,T),b}for(E=r(p,E);T<m.length;T++)P=x(E,p,T,m[T],w),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?T:P.key),d=o(P,d,T),C===null?b=P:C.sibling=P,C=P);return e&&E.forEach(function(M){return t(p,M)}),te&&an(p,T),b}function v(p,d,m,w){var b=Pr(m);if(typeof b!="function")throw Error(O(150));if(m=b.call(m),m==null)throw Error(O(151));for(var C=b=null,E=d,T=d=0,P=null,_=m.next();E!==null&&!_.done;T++,_=m.next()){E.index>T?(P=E,E=null):P=E.sibling;var M=g(p,E,_.value,w);if(M===null){E===null&&(E=P);break}e&&E&&M.alternate===null&&t(p,E),d=o(M,d,T),C===null?b=M:C.sibling=M,C=M,E=P}if(_.done)return n(p,E),te&&an(p,T),b;if(E===null){for(;!_.done;T++,_=m.next())_=f(p,_.value,w),_!==null&&(d=o(_,d,T),C===null?b=_:C.sibling=_,C=_);return te&&an(p,T),b}for(E=r(p,E);!_.done;T++,_=m.next())_=x(E,p,T,_.value,w),_!==null&&(e&&_.alternate!==null&&E.delete(_.key===null?T:_.key),d=o(_,d,T),C===null?b=_:C.sibling=_,C=_);return e&&E.forEach(function(N){return t(p,N)}),te&&an(p,T),b}function j(p,d,m,w){if(typeof m=="object"&&m!==null&&m.type===Nn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ii:e:{for(var b=m.key,C=d;C!==null;){if(C.key===b){if(b=m.type,b===Nn){if(C.tag===7){n(p,C.sibling),d=i(C,m.props.children),d.return=p,p=d;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Mt&&Vc(b)===C.type){n(p,C.sibling),d=i(C,m.props),d.ref=Lr(p,C,m),d.return=p,p=d;break e}n(p,C);break}else t(p,C);C=C.sibling}m.type===Nn?(d=mn(m.props.children,p.mode,w,m.key),d.return=p,p=d):(w=uo(m.type,m.key,m.props,null,p.mode,w),w.ref=Lr(p,d,m),w.return=p,p=w)}return s(p);case Rn:e:{for(C=m.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=fs(m,p.mode,w),d.return=p,p=d}return s(p);case Mt:return C=m._init,j(p,d,C(m._payload),w)}if(Dr(m))return y(p,d,m,w);if(Pr(m))return v(p,d,m,w);Wi(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=ds(m,p.mode,w),d.return=p,p=d),s(p)):n(p,d)}return j}var or=Up(!0),Hp=Up(!1),Io=rn(null),zo=null,Qn=null,yu=null;function wu(){yu=Qn=zo=null}function Su(e){var t=Io.current;J(Io),e._currentValue=t}function ua(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xn(e,t){zo=e,yu=Qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function et(e){var t=e._currentValue;if(yu!==e)if(e={context:e,memoizedValue:t,next:null},Qn===null){if(zo===null)throw Error(O(308));Qn=e,zo.dependencies={lanes:0,firstContext:e}}else Qn=Qn.next=e;return t}var dn=null;function ju(e){dn===null?dn=[e]:dn.push(e)}function Vp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ju(t)):(n.next=i.next,i.next=n),t.interleaved=n,Tt(e,r)}function Tt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ft=!1;function ku(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Tt(e,n)}return i=r.interleaved,i===null?(t.next=t,ju(r)):(t.next=i.next,i.next=t),r.interleaved=t,Tt(e,n)}function ro(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,au(e,n)}}function Gc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Lo(e,t,n,r){var i=e.updateQueue;Ft=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(o!==null){var f=i.baseState;s=0,h=c=u=null,a=o;do{var g=a.lane,x=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(g=t,x=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(x,f,g);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,g=typeof y=="function"?y.call(x,f,g):y,g==null)break e;f=oe({},f,g);break e;case 2:Ft=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else x={eventTime:x,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=x,u=f):h=h.next=x,s|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);wn|=s,e.lanes=s,e.memoizedState=f}}function Kc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var bi={},xt=rn(bi),ui=rn(bi),ci=rn(bi);function fn(e){if(e===bi)throw Error(O(174));return e}function bu(e,t){switch(Y(ci,t),Y(ui,e),Y(xt,bi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qs(t,e)}J(xt),Y(xt,t)}function lr(){J(xt),J(ui),J(ci)}function Kp(e){fn(ci.current);var t=fn(xt.current),n=Qs(t,e.type);t!==n&&(Y(ui,e),Y(xt,n))}function Cu(e){ui.current===e&&(J(xt),J(ui))}var re=rn(0);function Ro(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var os=[];function Eu(){for(var e=0;e<os.length;e++)os[e]._workInProgressVersionPrimary=null;os.length=0}var io=zt.ReactCurrentDispatcher,ls=zt.ReactCurrentBatchConfig,yn=0,ie=null,he=null,ge=null,No=!1,Gr=!1,di=0,P1=0;function be(){throw Error(O(321))}function _u(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function Pu(e,t,n,r,i,o){if(yn=o,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,io.current=e===null||e.memoizedState===null?z1:L1,e=n(r,i),Gr){o=0;do{if(Gr=!1,di=0,25<=o)throw Error(O(301));o+=1,ge=he=null,t.updateQueue=null,io.current=R1,e=n(r,i)}while(Gr)}if(io.current=Mo,t=he!==null&&he.next!==null,yn=0,ge=he=ie=null,No=!1,t)throw Error(O(300));return e}function Ou(){var e=di!==0;return di=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ie.memoizedState=ge=e:ge=ge.next=e,ge}function tt(){if(he===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ge===null?ie.memoizedState:ge.next;if(t!==null)ge=t,he=e;else{if(e===null)throw Error(O(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ge===null?ie.memoizedState=ge=e:ge=ge.next=e}return ge}function fi(e,t){return typeof t=="function"?t(e):t}function ss(e){var t=tt(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=he,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,u=null,c=o;do{var h=c.lane;if((yn&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,s=r):u=u.next=f,ie.lanes|=h,wn|=h}c=c.next}while(c!==null&&c!==o);u===null?s=r:u.next=a,ft(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ie.lanes|=o,wn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function as(e){var t=tt(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);ft(o,t.memoizedState)||(Fe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function qp(){}function Yp(e,t){var n=ie,r=tt(),i=t(),o=!ft(r.memoizedState,i);if(o&&(r.memoizedState=i,Fe=!0),r=r.queue,Tu(Jp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,pi(9,Zp.bind(null,n,r,i,t),void 0,null),ye===null)throw Error(O(349));yn&30||Xp(n,t,i)}return i}function Xp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zp(e,t,n,r){t.value=n,t.getSnapshot=r,e0(t)&&t0(e)}function Jp(e,t,n){return n(function(){e0(t)&&t0(e)})}function e0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function t0(e){var t=Tt(e,1);t!==null&&ct(t,e,1,-1)}function qc(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fi,lastRenderedState:e},t.queue=e,e=e.dispatch=I1.bind(null,ie,e),[t.memoizedState,e]}function pi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function n0(){return tt().memoizedState}function oo(e,t,n,r){var i=ht();ie.flags|=e,i.memoizedState=pi(1|t,n,void 0,r===void 0?null:r)}function vl(e,t,n,r){var i=tt();r=r===void 0?null:r;var o=void 0;if(he!==null){var s=he.memoizedState;if(o=s.destroy,r!==null&&_u(r,s.deps)){i.memoizedState=pi(t,n,o,r);return}}ie.flags|=e,i.memoizedState=pi(1|t,n,o,r)}function Yc(e,t){return oo(8390656,8,e,t)}function Tu(e,t){return vl(2048,8,e,t)}function r0(e,t){return vl(4,2,e,t)}function i0(e,t){return vl(4,4,e,t)}function o0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function l0(e,t,n){return n=n!=null?n.concat([e]):null,vl(4,4,o0.bind(null,t,e),n)}function Iu(){}function s0(e,t){var n=tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_u(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function a0(e,t){var n=tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_u(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function u0(e,t,n){return yn&21?(ft(n,t)||(n=hp(),ie.lanes|=n,wn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n)}function O1(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=ls.transition;ls.transition={};try{e(!1),t()}finally{q=n,ls.transition=r}}function c0(){return tt().memoizedState}function T1(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},d0(e))f0(t,n);else if(n=Vp(e,t,n,r),n!==null){var i=Ie();ct(n,e,r,i),p0(n,t,r)}}function I1(e,t,n){var r=Yt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(d0(e))f0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,ft(a,s)){var u=t.interleaved;u===null?(i.next=i,ju(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Vp(e,t,i,r),n!==null&&(i=Ie(),ct(n,e,r,i),p0(n,t,r))}}function d0(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function f0(e,t){Gr=No=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function p0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,au(e,n)}}var Mo={readContext:et,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},z1={readContext:et,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:Yc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,oo(4194308,4,o0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return oo(4194308,4,e,t)},useInsertionEffect:function(e,t){return oo(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=T1.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:qc,useDebugValue:Iu,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=qc(!1),t=e[0];return e=O1.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,i=ht();if(te){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),ye===null)throw Error(O(349));yn&30||Xp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Yc(Jp.bind(null,r,o,e),[e]),r.flags|=2048,pi(9,Zp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ht(),t=ye.identifierPrefix;if(te){var n=Et,r=Ct;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=di++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=P1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},L1={readContext:et,useCallback:s0,useContext:et,useEffect:Tu,useImperativeHandle:l0,useInsertionEffect:r0,useLayoutEffect:i0,useMemo:a0,useReducer:ss,useRef:n0,useState:function(){return ss(fi)},useDebugValue:Iu,useDeferredValue:function(e){var t=tt();return u0(t,he.memoizedState,e)},useTransition:function(){var e=ss(fi)[0],t=tt().memoizedState;return[e,t]},useMutableSource:qp,useSyncExternalStore:Yp,useId:c0,unstable_isNewReconciler:!1},R1={readContext:et,useCallback:s0,useContext:et,useEffect:Tu,useImperativeHandle:l0,useInsertionEffect:r0,useLayoutEffect:i0,useMemo:a0,useReducer:as,useRef:n0,useState:function(){return as(fi)},useDebugValue:Iu,useDeferredValue:function(e){var t=tt();return he===null?t.memoizedState=e:u0(t,he.memoizedState,e)},useTransition:function(){var e=as(fi)[0],t=tt().memoizedState;return[e,t]},useMutableSource:qp,useSyncExternalStore:Yp,useId:c0,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ca(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xl={isMounted:function(e){return(e=e._reactInternals)?_n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ie(),i=Yt(e),o=_t(r,i);o.payload=t,n!=null&&(o.callback=n),t=Kt(e,o,i),t!==null&&(ct(t,e,i,r),ro(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ie(),i=Yt(e),o=_t(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Kt(e,o,i),t!==null&&(ct(t,e,i,r),ro(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ie(),r=Yt(e),i=_t(n,r);i.tag=2,t!=null&&(i.callback=t),t=Kt(e,i,r),t!==null&&(ct(t,e,r,n),ro(t,e,r))}};function Xc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!oi(n,r)||!oi(i,o):!0}function h0(e,t,n){var r=!1,i=tn,o=t.contextType;return typeof o=="object"&&o!==null?o=et(o):(i=Ae(t)?vn:_e.current,r=t.contextTypes,o=(r=r!=null)?rr(e,i):tn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Zc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xl.enqueueReplaceState(t,t.state,null)}function da(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ku(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=et(o):(o=Ae(t)?vn:_e.current,i.context=rr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ca(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&xl.enqueueReplaceState(i,i.state,null),Lo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function sr(e,t){try{var n="",r=t;do n+=ag(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function us(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var N1=typeof WeakMap=="function"?WeakMap:Map;function m0(e,t,n){n=_t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Do||(Do=!0,ja=r),fa(e,t)},n}function g0(e,t,n){n=_t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){fa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){fa(e,t),typeof r!="function"&&(qt===null?qt=new Set([this]):qt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Jc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new N1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=q1.bind(null,e,t,n),t.then(e,e))}function ed(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function td(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=_t(-1,1),t.tag=2,Kt(n,t,1))),n.lanes|=1),e)}var M1=zt.ReactCurrentOwner,Fe=!1;function Te(e,t,n,r){t.child=e===null?Hp(t,null,n,r):or(t,e.child,n,r)}function nd(e,t,n,r,i){n=n.render;var o=t.ref;return Xn(t,i),r=Pu(e,t,n,r,o,i),n=Ou(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,It(e,t,i)):(te&&n&&gu(t),t.flags|=1,Te(e,t,r,i),t.child)}function rd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Au(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,v0(e,t,o,r,i)):(e=uo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:oi,n(s,r)&&e.ref===t.ref)return It(e,t,i)}return t.flags|=1,e=Xt(o,r),e.ref=t.ref,e.return=t,t.child=e}function v0(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(oi(o,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,It(e,t,i)}return pa(e,t,n,r,i)}function x0(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Hn,Ue),Ue|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(Hn,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Y(Hn,Ue),Ue|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Y(Hn,Ue),Ue|=r;return Te(e,t,i,n),t.child}function y0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function pa(e,t,n,r,i){var o=Ae(n)?vn:_e.current;return o=rr(t,o),Xn(t,i),n=Pu(e,t,n,r,o,i),r=Ou(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,It(e,t,i)):(te&&r&&gu(t),t.flags|=1,Te(e,t,n,i),t.child)}function id(e,t,n,r,i){if(Ae(n)){var o=!0;Po(t)}else o=!1;if(Xn(t,i),t.stateNode===null)lo(e,t),h0(t,n,r),da(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=et(c):(c=Ae(n)?vn:_e.current,c=rr(t,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Zc(t,s,r,c),Ft=!1;var g=t.memoizedState;s.state=g,Lo(t,r,s,i),u=t.memoizedState,a!==r||g!==u||De.current||Ft?(typeof h=="function"&&(ca(t,n,h,r),u=t.memoizedState),(a=Ft||Xc(t,n,a,r,g,u,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Gp(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:lt(t.type,a),s.props=c,f=t.pendingProps,g=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=et(u):(u=Ae(n)?vn:_e.current,u=rr(t,u));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||g!==u)&&Zc(t,s,r,u),Ft=!1,g=t.memoizedState,s.state=g,Lo(t,r,s,i);var y=t.memoizedState;a!==f||g!==y||De.current||Ft?(typeof x=="function"&&(ca(t,n,x,r),y=t.memoizedState),(c=Ft||Xc(t,n,c,r,g,y,u)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ha(e,t,n,r,o,i)}function ha(e,t,n,r,i,o){y0(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Qc(t,n,!1),It(e,t,o);r=t.stateNode,M1.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=or(t,e.child,null,o),t.child=or(t,null,a,o)):Te(e,t,a,o),t.memoizedState=r.state,i&&Qc(t,n,!0),t.child}function w0(e){var t=e.stateNode;t.pendingContext?Wc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wc(e,t.context,!1),bu(e,t.containerInfo)}function od(e,t,n,r,i){return ir(),xu(i),t.flags|=256,Te(e,t,n,r),t.child}var ma={dehydrated:null,treeContext:null,retryLane:0};function ga(e){return{baseLanes:e,cachePool:null,transitions:null}}function S0(e,t,n){var r=t.pendingProps,i=re.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(re,i&1),e===null)return aa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Sl(s,r,0,null),e=mn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ga(n),t.memoizedState=ma,e):zu(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return F1(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Xt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Xt(a,o):(o=mn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?ga(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ma,r}return o=e.child,e=o.sibling,r=Xt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function zu(e,t){return t=Sl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Qi(e,t,n,r){return r!==null&&xu(r),or(t,e.child,null,n),e=zu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function F1(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=us(Error(O(422))),Qi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Sl({mode:"visible",children:r.children},i,0,null),o=mn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&or(t,e.child,null,s),t.child.memoizedState=ga(s),t.memoizedState=ma,o);if(!(t.mode&1))return Qi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(O(419)),r=us(o,r,void 0),Qi(e,t,s,r)}if(a=(s&e.childLanes)!==0,Fe||a){if(r=ye,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Tt(e,i),ct(r,e,i,-1))}return Du(),r=us(Error(O(421))),Qi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Y1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,He=Gt(i.nextSibling),Ve=t,te=!0,at=null,e!==null&&(Ye[Xe++]=Ct,Ye[Xe++]=Et,Ye[Xe++]=xn,Ct=e.id,Et=e.overflow,xn=t),t=zu(t,r.children),t.flags|=4096,t)}function ld(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ua(e.return,t,n)}function cs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function j0(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Te(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ld(e,n,t);else if(e.tag===19)ld(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(re,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ro(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),cs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ro(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}cs(t,!0,n,null,o);break;case"together":cs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function lo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=Xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function D1(e,t,n){switch(t.tag){case 3:w0(t),ir();break;case 5:Kp(t);break;case 1:Ae(t.type)&&Po(t);break;case 4:bu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(Io,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?S0(e,t,n):(Y(re,re.current&1),e=It(e,t,n),e!==null?e.sibling:null);Y(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return j0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,x0(e,t,n)}return It(e,t,n)}var k0,va,b0,C0;k0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};va=function(){};b0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,fn(xt.current);var o=null;switch(n){case"input":i=As(e,i),r=As(e,r),o=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),o=[];break;case"textarea":i=Ws(e,i),r=Ws(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Eo)}Us(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Zr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Zr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&X("scroll",e),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};C0=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function A1(e,t,n){var r=t.pendingProps;switch(vu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ae(t.type)&&_o(),Ce(t),null;case 3:return r=t.stateNode,lr(),J(De),J(_e),Eu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Bi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,at!==null&&(Ca(at),at=null))),va(e,t),Ce(t),null;case 5:Cu(t);var i=fn(ci.current);if(n=t.type,e!==null&&t.stateNode!=null)b0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(O(166));return Ce(t),null}if(e=fn(xt.current),Bi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[gt]=t,r[ai]=o,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<$r.length;i++)X($r[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":mc(r,o),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},X("invalid",r);break;case"textarea":vc(r,o),X("invalid",r)}Us(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&$i(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&$i(r.textContent,a,e),i=["children",""+a]):Zr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&X("scroll",r)}switch(n){case"input":zi(r),gc(r,o,!0);break;case"textarea":zi(r),xc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Eo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[gt]=t,e[ai]=r,k0(e,t,!1,!1),t.stateNode=e;e:{switch(s=Hs(n,r),n){case"dialog":X("cancel",e),X("close",e),i=r;break;case"iframe":case"object":case"embed":X("load",e),i=r;break;case"video":case"audio":for(i=0;i<$r.length;i++)X($r[i],e);i=r;break;case"source":X("error",e),i=r;break;case"img":case"image":case"link":X("error",e),X("load",e),i=r;break;case"details":X("toggle",e),i=r;break;case"input":mc(e,r),i=As(e,r),X("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),X("invalid",e);break;case"textarea":vc(e,r),i=Ws(e,r),X("invalid",e);break;default:i=r}Us(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?np(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ep(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Jr(e,u):typeof u=="number"&&Jr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Zr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&X("scroll",e):u!=null&&nu(e,o,u,s))}switch(n){case"input":zi(e),gc(e,r,!1);break;case"textarea":zi(e),xc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+en(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Gn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Gn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Eo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)C0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(O(166));if(n=fn(ci.current),fn(xt.current),Bi(t)){if(r=t.stateNode,n=t.memoizedProps,r[gt]=t,(o=r.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:$i(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$i(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=t,t.stateNode=r}return Ce(t),null;case 13:if(J(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&He!==null&&t.mode&1&&!(t.flags&128))Qp(),ir(),t.flags|=98560,o=!1;else if(o=Bi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(O(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(O(317));o[gt]=t}else ir(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),o=!1}else at!==null&&(Ca(at),at=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?me===0&&(me=3):Du())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return lr(),va(e,t),e===null&&li(t.stateNode.containerInfo),Ce(t),null;case 10:return Su(t.type._context),Ce(t),null;case 17:return Ae(t.type)&&_o(),Ce(t),null;case 19:if(J(re),o=t.memoizedState,o===null)return Ce(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Rr(o,!1);else{if(me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ro(e),s!==null){for(t.flags|=128,Rr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(re,re.current&1|2),t.child}e=e.sibling}o.tail!==null&&ae()>ar&&(t.flags|=128,r=!0,Rr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ro(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!te)return Ce(t),null}else 2*ae()-o.renderingStartTime>ar&&n!==1073741824&&(t.flags|=128,r=!0,Rr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ae(),t.sibling=null,n=re.current,Y(re,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return Fu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function $1(e,t){switch(vu(t),t.tag){case 1:return Ae(t.type)&&_o(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return lr(),J(De),J(_e),Eu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Cu(t),null;case 13:if(J(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(re),null;case 4:return lr(),null;case 10:return Su(t.type._context),null;case 22:case 23:return Fu(),null;case 24:return null;default:return null}}var Ui=!1,Ee=!1,B1=typeof WeakSet=="function"?WeakSet:Set,L=null;function Un(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function xa(e,t,n){try{n()}catch(r){se(e,t,r)}}var sd=!1;function W1(e,t){if(ta=ko,e=Tp(),mu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,c=0,h=0,f=e,g=null;t:for(;;){for(var x;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(u=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(x=f.firstChild)!==null;)g=f,f=x;for(;;){if(f===e)break t;if(g===n&&++c===i&&(a=s),g===o&&++h===r&&(u=s),(x=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=x}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(na={focusedElem:e,selectionRange:n},ko=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,j=y.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:lt(t.type,v),j);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(w){se(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return y=sd,sd=!1,y}function Kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&xa(t,n,o)}i=i.next}while(i!==r)}}function yl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ya(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function E0(e){var t=e.alternate;t!==null&&(e.alternate=null,E0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gt],delete t[ai],delete t[oa],delete t[b1],delete t[C1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _0(e){return e.tag===5||e.tag===3||e.tag===4}function ad(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Eo));else if(r!==4&&(e=e.child,e!==null))for(wa(e,t,n),e=e.sibling;e!==null;)wa(e,t,n),e=e.sibling}function Sa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Sa(e,t,n),e=e.sibling;e!==null;)Sa(e,t,n),e=e.sibling}var Se=null,st=!1;function Rt(e,t,n){for(n=n.child;n!==null;)P0(e,t,n),n=n.sibling}function P0(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(dl,n)}catch{}switch(n.tag){case 5:Ee||Un(n,t);case 6:var r=Se,i=st;Se=null,Rt(e,t,n),Se=r,st=i,Se!==null&&(st?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(st?(e=Se,n=n.stateNode,e.nodeType===8?rs(e.parentNode,n):e.nodeType===1&&rs(e,n),ri(e)):rs(Se,n.stateNode));break;case 4:r=Se,i=st,Se=n.stateNode.containerInfo,st=!0,Rt(e,t,n),Se=r,st=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&xa(n,t,s),i=i.next}while(i!==r)}Rt(e,t,n);break;case 1:if(!Ee&&(Un(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){se(n,t,a)}Rt(e,t,n);break;case 21:Rt(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Rt(e,t,n),Ee=r):Rt(e,t,n);break;default:Rt(e,t,n)}}function ud(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new B1),t.forEach(function(r){var i=X1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Se=a.stateNode,st=!1;break e;case 3:Se=a.stateNode.containerInfo,st=!0;break e;case 4:Se=a.stateNode.containerInfo,st=!0;break e}a=a.return}if(Se===null)throw Error(O(160));P0(o,s,i),Se=null,st=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){se(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)O0(t,e),t=t.sibling}function O0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),pt(e),r&4){try{Kr(3,e,e.return),yl(3,e)}catch(v){se(e,e.return,v)}try{Kr(5,e,e.return)}catch(v){se(e,e.return,v)}}break;case 1:ot(t,e),pt(e),r&512&&n!==null&&Un(n,n.return);break;case 5:if(ot(t,e),pt(e),r&512&&n!==null&&Un(n,n.return),e.flags&32){var i=e.stateNode;try{Jr(i,"")}catch(v){se(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Xf(i,o),Hs(a,s);var c=Hs(a,o);for(s=0;s<u.length;s+=2){var h=u[s],f=u[s+1];h==="style"?np(i,f):h==="dangerouslySetInnerHTML"?ep(i,f):h==="children"?Jr(i,f):nu(i,h,f,c)}switch(a){case"input":$s(i,o);break;case"textarea":Zf(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Gn(i,!!o.multiple,x,!1):g!==!!o.multiple&&(o.defaultValue!=null?Gn(i,!!o.multiple,o.defaultValue,!0):Gn(i,!!o.multiple,o.multiple?[]:"",!1))}i[ai]=o}catch(v){se(e,e.return,v)}}break;case 6:if(ot(t,e),pt(e),r&4){if(e.stateNode===null)throw Error(O(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){se(e,e.return,v)}}break;case 3:if(ot(t,e),pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ri(t.containerInfo)}catch(v){se(e,e.return,v)}break;case 4:ot(t,e),pt(e);break;case 13:ot(t,e),pt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Nu=ae())),r&4&&ud(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(c=Ee)||h,ot(t,e),Ee=c):ot(t,e),pt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(L=e,h=e.child;h!==null;){for(f=L=h;L!==null;){switch(g=L,x=g.child,g.tag){case 0:case 11:case 14:case 15:Kr(4,g,g.return);break;case 1:Un(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){se(r,n,v)}}break;case 5:Un(g,g.return);break;case 22:if(g.memoizedState!==null){dd(f);continue}}x!==null?(x.return=g,L=x):dd(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,u=f.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=tp("display",s))}catch(v){se(e,e.return,v)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){se(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ot(t,e),pt(e),r&4&&ud(e);break;case 21:break;default:ot(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_0(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Jr(i,""),r.flags&=-33);var o=ad(e);Sa(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=ad(e);wa(e,a,s);break;default:throw Error(O(161))}}catch(u){se(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Q1(e,t,n){L=e,T0(e)}function T0(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ui;if(!s){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Ee;a=Ui;var c=Ee;if(Ui=s,(Ee=u)&&!c)for(L=i;L!==null;)s=L,u=s.child,s.tag===22&&s.memoizedState!==null?fd(i):u!==null?(u.return=s,L=u):fd(i);for(;o!==null;)L=o,T0(o),o=o.sibling;L=i,Ui=a,Ee=c}cd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):cd(e)}}function cd(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||yl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Kc(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Kc(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ri(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Ee||t.flags&512&&ya(t)}catch(g){se(t,t.return,g)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function dd(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function fd(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yl(4,t)}catch(u){se(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){se(t,i,u)}}var o=t.return;try{ya(t)}catch(u){se(t,o,u)}break;case 5:var s=t.return;try{ya(t)}catch(u){se(t,s,u)}}}catch(u){se(t,t.return,u)}if(t===e){L=null;break}var a=t.sibling;if(a!==null){a.return=t.return,L=a;break}L=t.return}}var U1=Math.ceil,Fo=zt.ReactCurrentDispatcher,Lu=zt.ReactCurrentOwner,Je=zt.ReactCurrentBatchConfig,V=0,ye=null,de=null,je=0,Ue=0,Hn=rn(0),me=0,hi=null,wn=0,wl=0,Ru=0,qr=null,Me=null,Nu=0,ar=1/0,wt=null,Do=!1,ja=null,qt=null,Hi=!1,Wt=null,Ao=0,Yr=0,ka=null,so=-1,ao=0;function Ie(){return V&6?ae():so!==-1?so:so=ae()}function Yt(e){return e.mode&1?V&2&&je!==0?je&-je:_1.transition!==null?(ao===0&&(ao=hp()),ao):(e=q,e!==0||(e=window.event,e=e===void 0?16:Sp(e.type)),e):1}function ct(e,t,n,r){if(50<Yr)throw Yr=0,ka=null,Error(O(185));Si(e,n,r),(!(V&2)||e!==ye)&&(e===ye&&(!(V&2)&&(wl|=n),me===4&&$t(e,je)),$e(e,r),n===1&&V===0&&!(t.mode&1)&&(ar=ae()+500,gl&&on()))}function $e(e,t){var n=e.callbackNode;_g(e,t);var r=jo(e,e===ye?je:0);if(r===0)n!==null&&Sc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Sc(n),t===1)e.tag===0?E1(pd.bind(null,e)):$p(pd.bind(null,e)),j1(function(){!(V&6)&&on()}),n=null;else{switch(mp(r)){case 1:n=su;break;case 4:n=fp;break;case 16:n=So;break;case 536870912:n=pp;break;default:n=So}n=D0(n,I0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function I0(e,t){if(so=-1,ao=0,V&6)throw Error(O(327));var n=e.callbackNode;if(Zn()&&e.callbackNode!==n)return null;var r=jo(e,e===ye?je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$o(e,r);else{t=r;var i=V;V|=2;var o=L0();(ye!==e||je!==t)&&(wt=null,ar=ae()+500,hn(e,t));do try{G1();break}catch(a){z0(e,a)}while(!0);wu(),Fo.current=o,V=i,de!==null?t=0:(ye=null,je=0,t=me)}if(t!==0){if(t===2&&(i=Ys(e),i!==0&&(r=i,t=ba(e,i))),t===1)throw n=hi,hn(e,0),$t(e,r),$e(e,ae()),n;if(t===6)$t(e,r);else{if(i=e.current.alternate,!(r&30)&&!H1(i)&&(t=$o(e,r),t===2&&(o=Ys(e),o!==0&&(r=o,t=ba(e,o))),t===1))throw n=hi,hn(e,0),$t(e,r),$e(e,ae()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(O(345));case 2:un(e,Me,wt);break;case 3:if($t(e,r),(r&130023424)===r&&(t=Nu+500-ae(),10<t)){if(jo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ie(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ia(un.bind(null,e,Me,wt),t);break}un(e,Me,wt);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ut(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*U1(r/1960))-r,10<r){e.timeoutHandle=ia(un.bind(null,e,Me,wt),r);break}un(e,Me,wt);break;case 5:un(e,Me,wt);break;default:throw Error(O(329))}}}return $e(e,ae()),e.callbackNode===n?I0.bind(null,e):null}function ba(e,t){var n=qr;return e.current.memoizedState.isDehydrated&&(hn(e,t).flags|=256),e=$o(e,t),e!==2&&(t=Me,Me=n,t!==null&&Ca(t)),e}function Ca(e){Me===null?Me=e:Me.push.apply(Me,e)}function H1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ft(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~Ru,t&=~wl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ut(t),r=1<<n;e[n]=-1,t&=~r}}function pd(e){if(V&6)throw Error(O(327));Zn();var t=jo(e,0);if(!(t&1))return $e(e,ae()),null;var n=$o(e,t);if(e.tag!==0&&n===2){var r=Ys(e);r!==0&&(t=r,n=ba(e,r))}if(n===1)throw n=hi,hn(e,0),$t(e,t),$e(e,ae()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,un(e,Me,wt),$e(e,ae()),null}function Mu(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(ar=ae()+500,gl&&on())}}function Sn(e){Wt!==null&&Wt.tag===0&&!(V&6)&&Zn();var t=V;V|=1;var n=Je.transition,r=q;try{if(Je.transition=null,q=1,e)return e()}finally{q=r,Je.transition=n,V=t,!(V&6)&&on()}}function Fu(){Ue=Hn.current,J(Hn)}function hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,S1(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(vu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_o();break;case 3:lr(),J(De),J(_e),Eu();break;case 5:Cu(r);break;case 4:lr();break;case 13:J(re);break;case 19:J(re);break;case 10:Su(r.type._context);break;case 22:case 23:Fu()}n=n.return}if(ye=e,de=e=Xt(e.current,null),je=Ue=t,me=0,hi=null,Ru=wl=wn=0,Me=qr=null,dn!==null){for(t=0;t<dn.length;t++)if(n=dn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}dn=null}return e}function z0(e,t){do{var n=de;try{if(wu(),io.current=Mo,No){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}No=!1}if(yn=0,ge=he=ie=null,Gr=!1,di=0,Lu.current=null,n===null||n.return===null){me=1,hi=t,de=null;break}e:{var o=e,s=n.return,a=n,u=t;if(t=je,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=ed(s);if(x!==null){x.flags&=-257,td(x,s,a,o,t),x.mode&1&&Jc(o,c,t),t=x,u=c;var y=t.updateQueue;if(y===null){var v=new Set;v.add(u),t.updateQueue=v}else y.add(u);break e}else{if(!(t&1)){Jc(o,c,t),Du();break e}u=Error(O(426))}}else if(te&&a.mode&1){var j=ed(s);if(j!==null){!(j.flags&65536)&&(j.flags|=256),td(j,s,a,o,t),xu(sr(u,a));break e}}o=u=sr(u,a),me!==4&&(me=2),qr===null?qr=[o]:qr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=m0(o,u,t);Gc(o,p);break e;case 1:a=u;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(qt===null||!qt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=g0(o,a,t);Gc(o,w);break e}}o=o.return}while(o!==null)}N0(n)}catch(b){t=b,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function L0(){var e=Fo.current;return Fo.current=Mo,e===null?Mo:e}function Du(){(me===0||me===3||me===2)&&(me=4),ye===null||!(wn&268435455)&&!(wl&268435455)||$t(ye,je)}function $o(e,t){var n=V;V|=2;var r=L0();(ye!==e||je!==t)&&(wt=null,hn(e,t));do try{V1();break}catch(i){z0(e,i)}while(!0);if(wu(),V=n,Fo.current=r,de!==null)throw Error(O(261));return ye=null,je=0,me}function V1(){for(;de!==null;)R0(de)}function G1(){for(;de!==null&&!xg();)R0(de)}function R0(e){var t=F0(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?N0(e):de=t,Lu.current=null}function N0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=$1(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,de=null;return}}else if(n=A1(n,t,Ue),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);me===0&&(me=5)}function un(e,t,n){var r=q,i=Je.transition;try{Je.transition=null,q=1,K1(e,t,n,r)}finally{Je.transition=i,q=r}return null}function K1(e,t,n,r){do Zn();while(Wt!==null);if(V&6)throw Error(O(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Pg(e,o),e===ye&&(de=ye=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hi||(Hi=!0,D0(So,function(){return Zn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Je.transition,Je.transition=null;var s=q;q=1;var a=V;V|=4,Lu.current=null,W1(e,n),O0(n,e),h1(na),ko=!!ta,na=ta=null,e.current=n,Q1(n),yg(),V=a,q=s,Je.transition=o}else e.current=n;if(Hi&&(Hi=!1,Wt=e,Ao=i),o=e.pendingLanes,o===0&&(qt=null),jg(n.stateNode),$e(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Do)throw Do=!1,e=ja,ja=null,e;return Ao&1&&e.tag!==0&&Zn(),o=e.pendingLanes,o&1?e===ka?Yr++:(Yr=0,ka=e):Yr=0,on(),null}function Zn(){if(Wt!==null){var e=mp(Ao),t=Je.transition,n=q;try{if(Je.transition=null,q=16>e?16:e,Wt===null)var r=!1;else{if(e=Wt,Wt=null,Ao=0,V&6)throw Error(O(331));var i=V;for(V|=4,L=e.current;L!==null;){var o=L,s=o.child;if(L.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(L=c;L!==null;){var h=L;switch(h.tag){case 0:case 11:case 15:Kr(8,h,o)}var f=h.child;if(f!==null)f.return=h,L=f;else for(;L!==null;){h=L;var g=h.sibling,x=h.return;if(E0(h),h===c){L=null;break}if(g!==null){g.return=x,L=g;break}L=x}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var j=v.sibling;v.sibling=null,v=j}while(v!==null)}}L=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,L=s;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Kr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,L=p;break e}L=o.return}}var d=e.current;for(L=d;L!==null;){s=L;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,L=m;else e:for(s=d;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yl(9,a)}}catch(b){se(a,a.return,b)}if(a===s){L=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,L=w;break e}L=a.return}}if(V=i,on(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(dl,e)}catch{}r=!0}return r}finally{q=n,Je.transition=t}}return!1}function hd(e,t,n){t=sr(n,t),t=m0(e,t,1),e=Kt(e,t,1),t=Ie(),e!==null&&(Si(e,1,t),$e(e,t))}function se(e,t,n){if(e.tag===3)hd(e,e,n);else for(;t!==null;){if(t.tag===3){hd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qt===null||!qt.has(r))){e=sr(n,e),e=g0(t,e,1),t=Kt(t,e,1),e=Ie(),t!==null&&(Si(t,1,e),$e(t,e));break}}t=t.return}}function q1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ie(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(je&n)===n&&(me===4||me===3&&(je&130023424)===je&&500>ae()-Nu?hn(e,0):Ru|=n),$e(e,t)}function M0(e,t){t===0&&(e.mode&1?(t=Ni,Ni<<=1,!(Ni&130023424)&&(Ni=4194304)):t=1);var n=Ie();e=Tt(e,t),e!==null&&(Si(e,t,n),$e(e,n))}function Y1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),M0(e,n)}function X1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(t),M0(e,n)}var F0;F0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Fe=!1,D1(e,t,n);Fe=!!(e.flags&131072)}else Fe=!1,te&&t.flags&1048576&&Bp(t,To,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;lo(e,t),e=t.pendingProps;var i=rr(t,_e.current);Xn(t,n),i=Pu(null,t,r,e,i,n);var o=Ou();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(o=!0,Po(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ku(t),i.updater=xl,t.stateNode=i,i._reactInternals=t,da(t,r,e,n),t=ha(null,t,r,!0,o,n)):(t.tag=0,te&&o&&gu(t),Te(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(lo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=J1(r),e=lt(r,e),i){case 0:t=pa(null,t,r,e,n);break e;case 1:t=id(null,t,r,e,n);break e;case 11:t=nd(null,t,r,e,n);break e;case 14:t=rd(null,t,r,lt(r.type,e),n);break e}throw Error(O(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),pa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),id(e,t,r,i,n);case 3:e:{if(w0(t),e===null)throw Error(O(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Gp(e,t),Lo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=sr(Error(O(423)),t),t=od(e,t,r,n,i);break e}else if(r!==i){i=sr(Error(O(424)),t),t=od(e,t,r,n,i);break e}else for(He=Gt(t.stateNode.containerInfo.firstChild),Ve=t,te=!0,at=null,n=Hp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ir(),r===i){t=It(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return Kp(t),e===null&&aa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,ra(r,i)?s=null:o!==null&&ra(r,o)&&(t.flags|=32),y0(e,t),Te(e,t,s,n),t.child;case 6:return e===null&&aa(t),null;case 13:return S0(e,t,n);case 4:return bu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=or(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),nd(e,t,r,i,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Y(Io,r._currentValue),r._currentValue=s,o!==null)if(ft(o.value,s)){if(o.children===i.children&&!De.current){t=It(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=_t(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),ua(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(O(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ua(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Te(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Xn(t,n),i=et(i),r=r(i),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,i=lt(r,t.pendingProps),i=lt(r.type,i),rd(e,t,r,i,n);case 15:return v0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),lo(e,t),t.tag=1,Ae(r)?(e=!0,Po(t)):e=!1,Xn(t,n),h0(t,r,i),da(t,r,i,n),ha(null,t,r,!0,e,n);case 19:return j0(e,t,n);case 22:return x0(e,t,n)}throw Error(O(156,t.tag))};function D0(e,t){return dp(e,t)}function Z1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,r){return new Z1(e,t,n,r)}function Au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function J1(e){if(typeof e=="function")return Au(e)?1:0;if(e!=null){if(e=e.$$typeof,e===iu)return 11;if(e===ou)return 14}return 2}function Xt(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function uo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Au(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Nn:return mn(n.children,i,o,t);case ru:s=8,i|=8;break;case Ns:return e=Ze(12,n,t,i|2),e.elementType=Ns,e.lanes=o,e;case Ms:return e=Ze(13,n,t,i),e.elementType=Ms,e.lanes=o,e;case Fs:return e=Ze(19,n,t,i),e.elementType=Fs,e.lanes=o,e;case Kf:return Sl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vf:s=10;break e;case Gf:s=9;break e;case iu:s=11;break e;case ou:s=14;break e;case Mt:s=16,r=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=Ze(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function mn(e,t,n,r){return e=Ze(7,e,r,t),e.lanes=n,e}function Sl(e,t,n,r){return e=Ze(22,e,r,t),e.elementType=Kf,e.lanes=n,e.stateNode={isHidden:!1},e}function ds(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function fs(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function e2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vl(0),this.expirationTimes=Vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $u(e,t,n,r,i,o,s,a,u){return e=new e2(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ze(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ku(o),e}function t2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function A0(e){if(!e)return tn;e=e._reactInternals;e:{if(_n(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if(Ae(n))return Ap(e,n,t)}return t}function $0(e,t,n,r,i,o,s,a,u){return e=$u(n,r,!0,e,i,o,s,a,u),e.context=A0(null),n=e.current,r=Ie(),i=Yt(n),o=_t(r,i),o.callback=t??null,Kt(n,o,i),e.current.lanes=i,Si(e,i,r),$e(e,r),e}function jl(e,t,n,r){var i=t.current,o=Ie(),s=Yt(i);return n=A0(n),t.context===null?t.context=n:t.pendingContext=n,t=_t(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kt(i,t,s),e!==null&&(ct(e,i,s,o),ro(e,i,s)),s}function Bo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function md(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bu(e,t){md(e,t),(e=e.alternate)&&md(e,t)}function n2(){return null}var B0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wu(e){this._internalRoot=e}kl.prototype.render=Wu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));jl(e,t,null,null)};kl.prototype.unmount=Wu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sn(function(){jl(null,e,null,null)}),t[Ot]=null}};function kl(e){this._internalRoot=e}kl.prototype.unstable_scheduleHydration=function(e){if(e){var t=xp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&t!==0&&t<At[n].priority;n++);At.splice(n,0,e),n===0&&wp(e)}};function Qu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gd(){}function r2(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Bo(s);o.call(c)}}var s=$0(t,r,e,0,null,!1,!1,"",gd);return e._reactRootContainer=s,e[Ot]=s.current,li(e.nodeType===8?e.parentNode:e),Sn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Bo(u);a.call(c)}}var u=$u(e,0,!1,null,null,!1,!1,"",gd);return e._reactRootContainer=u,e[Ot]=u.current,li(e.nodeType===8?e.parentNode:e),Sn(function(){jl(t,u,n,r)}),u}function Cl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var u=Bo(s);a.call(u)}}jl(t,s,e,i)}else s=r2(n,t,e,i,r);return Bo(s)}gp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ar(t.pendingLanes);n!==0&&(au(t,n|1),$e(t,ae()),!(V&6)&&(ar=ae()+500,on()))}break;case 13:Sn(function(){var r=Tt(e,1);if(r!==null){var i=Ie();ct(r,e,1,i)}}),Bu(e,1)}};uu=function(e){if(e.tag===13){var t=Tt(e,134217728);if(t!==null){var n=Ie();ct(t,e,134217728,n)}Bu(e,134217728)}};vp=function(e){if(e.tag===13){var t=Yt(e),n=Tt(e,t);if(n!==null){var r=Ie();ct(n,e,t,r)}Bu(e,t)}};xp=function(){return q};yp=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};Gs=function(e,t,n){switch(t){case"input":if($s(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ml(r);if(!i)throw Error(O(90));Yf(r),$s(r,i)}}}break;case"textarea":Zf(e,n);break;case"select":t=n.value,t!=null&&Gn(e,!!n.multiple,t,!1)}};op=Mu;lp=Sn;var i2={usingClientEntryPoint:!1,Events:[ki,An,ml,rp,ip,Mu]},Nr={findFiberByHostInstance:cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},o2={bundleType:Nr.bundleType,version:Nr.version,rendererPackageName:Nr.rendererPackageName,rendererConfig:Nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=up(e),e===null?null:e.stateNode},findFiberByHostInstance:Nr.findFiberByHostInstance||n2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vi.isDisabled&&Vi.supportsFiber)try{dl=Vi.inject(o2),vt=Vi}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i2;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qu(t))throw Error(O(200));return t2(e,t,null,n)};Ke.createRoot=function(e,t){if(!Qu(e))throw Error(O(299));var n=!1,r="",i=B0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=$u(e,1,!1,null,null,n,!1,r,i),e[Ot]=t.current,li(e.nodeType===8?e.parentNode:e),new Wu(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=up(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return Sn(e)};Ke.hydrate=function(e,t,n){if(!bl(t))throw Error(O(200));return Cl(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!Qu(e))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=B0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=$0(t,null,e,1,n??null,i,!1,o,s),e[Ot]=t.current,li(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new kl(t)};Ke.render=function(e,t,n){if(!bl(t))throw Error(O(200));return Cl(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!bl(e))throw Error(O(40));return e._reactRootContainer?(Sn(function(){Cl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1};Ke.unstable_batchedUpdates=Mu;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bl(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return Cl(e,t,n,!1,r)};Ke.version="18.3.1-next-f1338f8080-20240426";function W0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W0)}catch(e){console.error(e)}}W0(),Wf.exports=Ke;var l2=Wf.exports,vd=l2;Ls.createRoot=vd.createRoot,Ls.hydrateRoot=vd.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mi(){return mi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mi.apply(this,arguments)}var Qt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Qt||(Qt={}));const xd="popstate";function s2(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Ea("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Wo(i)}return u2(t,n,null,e)}function pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Q0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function a2(){return Math.random().toString(36).substr(2,8)}function yd(e,t){return{usr:e.state,key:e.key,idx:t}}function Ea(e,t,n,r){return n===void 0&&(n=null),mi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?br(t):t,{state:n,key:t&&t.key||r||a2()})}function Wo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function br(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function u2(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Qt.Pop,u=null,c=h();c==null&&(c=0,s.replaceState(mi({},s.state,{idx:c}),""));function h(){return(s.state||{idx:null}).idx}function f(){a=Qt.Pop;let j=h(),p=j==null?null:j-c;c=j,u&&u({action:a,location:v.location,delta:p})}function g(j,p){a=Qt.Push;let d=Ea(v.location,j,p);c=h()+1;let m=yd(d,c),w=v.createHref(d);try{s.pushState(m,"",w)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(w)}o&&u&&u({action:a,location:v.location,delta:1})}function x(j,p){a=Qt.Replace;let d=Ea(v.location,j,p);c=h();let m=yd(d,c),w=v.createHref(d);s.replaceState(m,"",w),o&&u&&u({action:a,location:v.location,delta:0})}function y(j){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof j=="string"?j:Wo(j);return d=d.replace(/ $/,"%20"),pe(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let v={get action(){return a},get location(){return e(i,s)},listen(j){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(xd,f),u=j,()=>{i.removeEventListener(xd,f),u=null}},createHref(j){return t(i,j)},createURL:y,encodeLocation(j){let p=y(j);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:x,go(j){return s.go(j)}};return v}var wd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wd||(wd={}));function c2(e,t,n){return n===void 0&&(n="/"),d2(e,t,n,!1)}function d2(e,t,n,r){let i=typeof t=="string"?br(t):t,o=Uu(i.pathname||"/",n);if(o==null)return null;let s=U0(e);f2(s);let a=null;for(let u=0;a==null&&u<s.length;++u){let c=k2(o);a=S2(s[u],c,r)}return a}function U0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};u.relativePath.startsWith("/")&&(pe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Zt([r,u.relativePath]),h=n.concat(u);o.children&&o.children.length>0&&(pe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),U0(o.children,t,h,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:y2(c,o.index),routesMeta:h})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let u of H0(o.path))i(o,s,u)}),t}function H0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=H0(r.join("/")),a=[];return a.push(...s.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...s),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function f2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:w2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const p2=/^:[\w-]+$/,h2=3,m2=2,g2=1,v2=10,x2=-2,Sd=e=>e==="*";function y2(e,t){let n=e.split("/"),r=n.length;return n.some(Sd)&&(r+=x2),t&&(r+=m2),n.filter(i=>!Sd(i)).reduce((i,o)=>i+(p2.test(o)?h2:o===""?g2:v2),r)}function w2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function S2(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,h=o==="/"?t:t.slice(o.length)||"/",f=jd({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),g=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=jd({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},h)),!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:Zt([o,f.pathname]),pathnameBase:_2(Zt([o,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(o=Zt([o,f.pathnameBase]))}return s}function jd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=j2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:g,isOptional:x}=h;if(g==="*"){let v=a[f]||"";s=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[f];return x&&!y?c[g]=void 0:c[g]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function j2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Q0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function k2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Q0(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Uu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function b2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?br(e):e;return{pathname:n?n.startsWith("/")?n:C2(n,t):t,search:P2(r),hash:O2(i)}}function C2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ps(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function E2(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function V0(e,t){let n=E2(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function G0(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=br(e):(i=mi({},e),pe(!i.pathname||!i.pathname.includes("?"),ps("?","pathname","search",i)),pe(!i.pathname||!i.pathname.includes("#"),ps("#","pathname","hash",i)),pe(!i.search||!i.search.includes("#"),ps("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}a=f>=0?t[f]:"/"}let u=b2(i,a),c=s&&s!=="/"&&s.endsWith("/"),h=(o||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Zt=e=>e.join("/").replace(/\/\/+/g,"/"),_2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),P2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,O2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function T2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const K0=["post","put","patch","delete"];new Set(K0);const I2=["get",...K0];new Set(I2);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gi(){return gi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gi.apply(this,arguments)}const Hu=k.createContext(null),z2=k.createContext(null),Pn=k.createContext(null),El=k.createContext(null),ln=k.createContext({outlet:null,matches:[],isDataRoute:!1}),q0=k.createContext(null);function L2(e,t){let{relative:n}=t===void 0?{}:t;Ci()||pe(!1);let{basename:r,navigator:i}=k.useContext(Pn),{hash:o,pathname:s,search:a}=Z0(e,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:Zt([r,s])),i.createHref({pathname:u,search:a,hash:o})}function Ci(){return k.useContext(El)!=null}function Ei(){return Ci()||pe(!1),k.useContext(El).location}function Y0(e){k.useContext(Pn).static||k.useLayoutEffect(e)}function rt(){let{isDataRoute:e}=k.useContext(ln);return e?V2():R2()}function R2(){Ci()||pe(!1);let e=k.useContext(Hu),{basename:t,future:n,navigator:r}=k.useContext(Pn),{matches:i}=k.useContext(ln),{pathname:o}=Ei(),s=JSON.stringify(V0(i,n.v7_relativeSplatPath)),a=k.useRef(!1);return Y0(()=>{a.current=!0}),k.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=G0(c,JSON.parse(s),o,h.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Zt([t,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[t,r,s,o,e])}function X0(){let{matches:e}=k.useContext(ln),t=e[e.length-1];return t?t.params:{}}function Z0(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(Pn),{matches:i}=k.useContext(ln),{pathname:o}=Ei(),s=JSON.stringify(V0(i,r.v7_relativeSplatPath));return k.useMemo(()=>G0(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function N2(e,t){return M2(e,t)}function M2(e,t,n,r){Ci()||pe(!1);let{navigator:i}=k.useContext(Pn),{matches:o}=k.useContext(ln),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=Ei(),h;if(t){var f;let j=typeof t=="string"?br(t):t;u==="/"||(f=j.pathname)!=null&&f.startsWith(u)||pe(!1),h=j}else h=c;let g=h.pathname||"/",x=g;if(u!=="/"){let j=u.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(j.length).join("/")}let y=c2(e,{pathname:x}),v=B2(y&&y.map(j=>Object.assign({},j,{params:Object.assign({},a,j.params),pathname:Zt([u,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?u:Zt([u,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),o,n,r);return t&&v?k.createElement(El.Provider,{value:{location:gi({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Qt.Pop}},v):v}function F2(){let e=H2(),t=T2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,null)}const D2=k.createElement(F2,null);class A2 extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(ln.Provider,{value:this.props.routeContext},k.createElement(q0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $2(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(Hu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(ln.Provider,{value:t},r)}function B2(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||pe(!1),s=s.slice(0,Math.min(s.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<s.length;h++){let f=s[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:g,errors:x}=n,y=f.route.loader&&g[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||y){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((h,f,g)=>{let x,y=!1,v=null,j=null;n&&(x=a&&f.route.id?a[f.route.id]:void 0,v=f.route.errorElement||D2,u&&(c<0&&g===0?(y=!0,j=null):c===g&&(y=!0,j=f.route.hydrateFallbackElement||null)));let p=t.concat(s.slice(0,g+1)),d=()=>{let m;return x?m=v:y?m=j:f.route.Component?m=k.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=h,k.createElement($2,{match:f,routeContext:{outlet:h,matches:p,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?k.createElement(A2,{location:n.location,revalidation:n.revalidation,component:v,error:x,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var J0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(J0||{}),Qo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Qo||{});function W2(e){let t=k.useContext(Hu);return t||pe(!1),t}function Q2(e){let t=k.useContext(z2);return t||pe(!1),t}function U2(e){let t=k.useContext(ln);return t||pe(!1),t}function eh(e){let t=U2(),n=t.matches[t.matches.length-1];return n.route.id||pe(!1),n.route.id}function H2(){var e;let t=k.useContext(q0),n=Q2(Qo.UseRouteError),r=eh(Qo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function V2(){let{router:e}=W2(J0.UseNavigateStable),t=eh(Qo.UseNavigateStable),n=k.useRef(!1);return Y0(()=>{n.current=!0}),k.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,gi({fromRouteId:t},o)))},[e,t])}const kd={};function G2(e,t){kd[t]||(kd[t]=!0,console.warn(t))}const bd=(e,t,n)=>G2(e,"⚠️ React Router Future Flag Warning: "+t+". "+("You can use the `"+e+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function K2(e,t){e!=null&&e.v7_startTransition||bd("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(e!=null&&e.v7_relativeSplatPath)&&!t&&bd("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function ue(e){pe(!1)}function q2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Qt.Pop,navigator:o,static:s=!1,future:a}=e;Ci()&&pe(!1);let u=t.replace(/^\/*/,"/"),c=k.useMemo(()=>({basename:u,navigator:o,static:s,future:gi({v7_relativeSplatPath:!1},a)}),[u,a,o,s]);typeof r=="string"&&(r=br(r));let{pathname:h="/",search:f="",hash:g="",state:x=null,key:y="default"}=r,v=k.useMemo(()=>{let j=Uu(h,u);return j==null?null:{location:{pathname:j,search:f,hash:g,state:x,key:y},navigationType:i}},[u,h,f,g,x,y,i]);return v==null?null:k.createElement(Pn.Provider,{value:c},k.createElement(El.Provider,{children:n,value:v}))}function Y2(e){let{children:t,location:n}=e;return N2(_a(t),n)}new Promise(()=>{});function _a(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let o=[...t,i];if(r.type===k.Fragment){n.push.apply(n,_a(r.props.children,o));return}r.type!==ue&&pe(!1),!r.props.index||!r.props.children||pe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=_a(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pa(){return Pa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pa.apply(this,arguments)}function X2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Z2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function J2(e,t){return e.button===0&&(!t||t==="_self")&&!Z2(e)}const ev=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],tv="6";try{window.__reactRouterVersion=tv}catch{}const nv="startTransition",Cd=qm[nv];function rv(e){let{basename:t,children:n,future:r,window:i}=e,o=k.useRef();o.current==null&&(o.current=s2({window:i,v5Compat:!0}));let s=o.current,[a,u]=k.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},h=k.useCallback(f=>{c&&Cd?Cd(()=>u(f)):u(f)},[u,c]);return k.useLayoutEffect(()=>s.listen(h),[s,h]),k.useEffect(()=>K2(r),[r]),k.createElement(q2,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const iv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ov=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lv=k.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:u,to:c,preventScrollReset:h,viewTransition:f}=t,g=X2(t,ev),{basename:x}=k.useContext(Pn),y,v=!1;if(typeof c=="string"&&ov.test(c)&&(y=c,iv))try{let m=new URL(window.location.href),w=c.startsWith("//")?new URL(m.protocol+c):new URL(c),b=Uu(w.pathname,x);w.origin===m.origin&&b!=null?c=b+w.search+w.hash:v=!0}catch{}let j=L2(c,{relative:i}),p=sv(c,{replace:s,state:a,target:u,preventScrollReset:h,relative:i,viewTransition:f});function d(m){r&&r(m),m.defaultPrevented||p(m)}return k.createElement("a",Pa({},g,{href:y||j,onClick:v||o?r:d,ref:n,target:u}))});var Ed;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ed||(Ed={}));var _d;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(_d||(_d={}));function sv(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=t===void 0?{}:t,u=rt(),c=Ei(),h=Z0(e,{relative:s});return k.useCallback(f=>{if(J2(f,n)){f.preventDefault();let g=r!==void 0?r:Wo(c)===Wo(h);u(e,{replace:g,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[c,u,h,r,i,n,e,o,s,a])}const av="/assets/image4-49UFiRL9.svg",uv="/assets/image2-D3-QMNJW.svg",cv="/assets/image3-Dw7jqlw9.svg",dv="data:image/svg+xml,%3csvg%20width='66'%20height='66'%20viewBox='0%200%2066%2066'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='33'%20cy='33'%20r='30.5'%20transform='rotate(-180%2033%2033)'%20stroke='white'%20stroke-width='5'/%3e%3cpath%20d='M39.375%2022.2219V42.7039C39.3749%2043.0664%2039.2404%2043.4208%2038.9886%2043.7222C38.7368%2044.0237%2038.3789%2044.2586%2037.9602%2044.3973C37.5416%2044.536%2037.0809%2044.5723%2036.6364%2044.5016C36.1919%2044.4309%2035.7836%2044.2564%2035.4631%2044.0001L22.6619%2033.7591C22.2323%2033.4153%2021.9909%2032.949%2021.9909%2032.4629C21.9909%2031.9768%2022.2323%2031.5105%2022.6619%2031.1667L35.4631%2020.9257C35.7836%2020.6694%2036.1919%2020.4949%2036.6364%2020.4242C37.0809%2020.3535%2037.5416%2020.3898%2037.9602%2020.5285C38.3789%2020.6672%2038.7368%2020.9021%2038.9886%2021.2036C39.2404%2021.505%2039.3749%2021.8594%2039.375%2022.2219Z'%20fill='white'/%3e%3c/svg%3e",fv="data:image/svg+xml,%3csvg%20width='66'%20height='66'%20viewBox='0%200%2066%2066'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='33'%20cy='33'%20r='30.5'%20stroke='white'%20stroke-width='5'/%3e%3cpath%20d='M26.625%2043.7781V23.2961C26.6251%2022.9336%2026.7596%2022.5792%2027.0114%2022.2778C27.2632%2021.9763%2027.6211%2021.7414%2028.0397%2021.6027C28.4584%2021.464%2028.9191%2021.4277%2029.3636%2021.4984C29.8081%2021.5691%2030.2164%2021.7436%2030.5369%2021.9999L43.3381%2032.2409C43.7677%2032.5847%2044.0091%2033.051%2044.0091%2033.5371C44.0091%2034.0232%2043.7677%2034.4895%2043.3381%2034.8333L30.5369%2045.0743C30.2164%2045.3306%2029.8081%2045.5051%2029.3636%2045.5758C28.9191%2045.6465%2028.4584%2045.6102%2028.0397%2045.4715C27.6211%2045.3328%2027.2632%2045.0979%2027.0114%2044.7964C26.7596%2044.495%2026.6251%2044.1406%2026.625%2043.7781Z'%20fill='white'/%3e%3c/svg%3e";var xe=function(){return xe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},xe.apply(this,arguments)};function ur(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Z="-ms-",Xr="-moz-",K="-webkit-",th="comm",_l="rule",Vu="decl",pv="@import",nh="@keyframes",hv="@layer",rh=Math.abs,Gu=String.fromCharCode,Oa=Object.assign;function mv(e,t){return ve(e,0)^45?(((t<<2^ve(e,0))<<2^ve(e,1))<<2^ve(e,2))<<2^ve(e,3):0}function ih(e){return e.trim()}function St(e,t){return(e=t.exec(e))?e[0]:e}function B(e,t,n){return e.replace(t,n)}function co(e,t,n){return e.indexOf(t,n)}function ve(e,t){return e.charCodeAt(t)|0}function cr(e,t,n){return e.slice(t,n)}function mt(e){return e.length}function oh(e){return e.length}function Br(e,t){return t.push(e),e}function gv(e,t){return e.map(t).join("")}function Pd(e,t){return e.filter(function(n){return!St(n,t)})}var Pl=1,dr=1,lh=0,nt=0,ce=0,Cr="";function Ol(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Pl,column:dr,length:s,return:"",siblings:a}}function Nt(e,t){return Oa(Ol("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Tn(e){for(;e.root;)e=Nt(e.root,{children:[e]});Br(e,e.siblings)}function vv(){return ce}function xv(){return ce=nt>0?ve(Cr,--nt):0,dr--,ce===10&&(dr=1,Pl--),ce}function dt(){return ce=nt<lh?ve(Cr,nt++):0,dr++,ce===10&&(dr=1,Pl++),ce}function gn(){return ve(Cr,nt)}function fo(){return nt}function Tl(e,t){return cr(Cr,e,t)}function Ta(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function yv(e){return Pl=dr=1,lh=mt(Cr=e),nt=0,[]}function wv(e){return Cr="",e}function hs(e){return ih(Tl(nt-1,Ia(e===91?e+2:e===40?e+1:e)))}function Sv(e){for(;(ce=gn())&&ce<33;)dt();return Ta(e)>2||Ta(ce)>3?"":" "}function jv(e,t){for(;--t&&dt()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return Tl(e,fo()+(t<6&&gn()==32&&dt()==32))}function Ia(e){for(;dt();)switch(ce){case e:return nt;case 34:case 39:e!==34&&e!==39&&Ia(ce);break;case 40:e===41&&Ia(e);break;case 92:dt();break}return nt}function kv(e,t){for(;dt()&&e+ce!==57;)if(e+ce===84&&gn()===47)break;return"/*"+Tl(t,nt-1)+"*"+Gu(e===47?e:dt())}function bv(e){for(;!Ta(gn());)dt();return Tl(e,nt)}function Cv(e){return wv(po("",null,null,null,[""],e=yv(e),0,[0],e))}function po(e,t,n,r,i,o,s,a,u){for(var c=0,h=0,f=s,g=0,x=0,y=0,v=1,j=1,p=1,d=0,m="",w=i,b=o,C=r,E=m;j;)switch(y=d,d=dt()){case 40:if(y!=108&&ve(E,f-1)==58){co(E+=B(hs(d),"&","&\f"),"&\f",rh(c?a[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:E+=hs(d);break;case 9:case 10:case 13:case 32:E+=Sv(y);break;case 92:E+=jv(fo()-1,7);continue;case 47:switch(gn()){case 42:case 47:Br(Ev(kv(dt(),fo()),t,n,u),u);break;default:E+="/"}break;case 123*v:a[c++]=mt(E)*p;case 125*v:case 59:case 0:switch(d){case 0:case 125:j=0;case 59+h:p==-1&&(E=B(E,/\f/g,"")),x>0&&mt(E)-f&&Br(x>32?Td(E+";",r,n,f-1,u):Td(B(E," ","")+";",r,n,f-2,u),u);break;case 59:E+=";";default:if(Br(C=Od(E,t,n,c,h,i,a,m,w=[],b=[],f,o),o),d===123)if(h===0)po(E,t,C,C,w,o,f,a,b);else switch(g===99&&ve(E,3)===110?100:g){case 100:case 108:case 109:case 115:po(e,C,C,r&&Br(Od(e,C,C,0,0,i,a,m,i,w=[],f,b),b),i,b,f,a,r?w:b);break;default:po(E,C,C,C,[""],b,0,a,b)}}c=h=x=0,v=p=1,m=E="",f=s;break;case 58:f=1+mt(E),x=y;default:if(v<1){if(d==123)--v;else if(d==125&&v++==0&&xv()==125)continue}switch(E+=Gu(d),d*v){case 38:p=h>0?1:(E+="\f",-1);break;case 44:a[c++]=(mt(E)-1)*p,p=1;break;case 64:gn()===45&&(E+=hs(dt())),g=gn(),h=f=mt(m=E+=bv(fo())),d++;break;case 45:y===45&&mt(E)==2&&(v=0)}}return o}function Od(e,t,n,r,i,o,s,a,u,c,h,f){for(var g=i-1,x=i===0?o:[""],y=oh(x),v=0,j=0,p=0;v<r;++v)for(var d=0,m=cr(e,g+1,g=rh(j=s[v])),w=e;d<y;++d)(w=ih(j>0?x[d]+" "+m:B(m,/&\f/g,x[d])))&&(u[p++]=w);return Ol(e,t,n,i===0?_l:a,u,c,h,f)}function Ev(e,t,n,r){return Ol(e,t,n,th,Gu(vv()),cr(e,2,-2),0,r)}function Td(e,t,n,r,i){return Ol(e,t,n,Vu,cr(e,0,r),cr(e,r+1,-1),r,i)}function sh(e,t,n){switch(mv(e,t)){case 5103:return K+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 4789:return Xr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+Xr+e+Z+e+e;case 5936:switch(ve(e,t+11)){case 114:return K+e+Z+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return K+e+Z+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return K+e+Z+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return K+e+Z+e+e;case 6165:return K+e+Z+"flex-"+e+e;case 5187:return K+e+B(e,/(\w+).+(:[^]+)/,K+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return K+e+Z+"flex-item-"+B(e,/flex-|-self/g,"")+(St(e,/flex-|baseline/)?"":Z+"grid-row-"+B(e,/flex-|-self/g,""))+e;case 4675:return K+e+Z+"flex-line-pack"+B(e,/align-content|flex-|-self/g,"")+e;case 5548:return K+e+Z+B(e,"shrink","negative")+e;case 5292:return K+e+Z+B(e,"basis","preferred-size")+e;case 6060:return K+"box-"+B(e,"-grow","")+K+e+Z+B(e,"grow","positive")+e;case 4554:return K+B(e,/([^-])(transform)/g,"$1"+K+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,K+"$1"),/(image-set)/,K+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,K+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+K+e+e;case 4200:if(!St(e,/flex-|baseline/))return Z+"grid-column-align"+cr(e,t)+e;break;case 2592:case 3360:return Z+B(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,St(r.props,/grid-\w+-end/)})?~co(e+(n=n[t].value),"span",0)?e:Z+B(e,"-start","")+e+Z+"grid-row-span:"+(~co(n,"span",0)?St(n,/\d+/):+St(n,/\d+/)-+St(e,/\d+/))+";":Z+B(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return St(r.props,/grid-\w+-start/)})?e:Z+B(B(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,K+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(mt(e)-1-t>6)switch(ve(e,t+1)){case 109:if(ve(e,t+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+K+"$2-$3$1"+Xr+(ve(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~co(e,"stretch",0)?sh(B(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return B(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,u,c){return Z+i+":"+o+c+(s?Z+i+"-span:"+(a?u:+u-+o)+c:"")+e});case 4949:if(ve(e,t+6)===121)return B(e,":",":"+K)+e;break;case 6444:switch(ve(e,ve(e,14)===45?18:11)){case 120:return B(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+K+(ve(e,14)===45?"inline-":"")+"box$3$1"+K+"$2$3$1"+Z+"$2box$3")+e;case 100:return B(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(e,"scroll-","scroll-snap-")+e}return e}function Uo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function _v(e,t,n,r){switch(e.type){case hv:if(e.children.length)break;case pv:case Vu:return e.return=e.return||e.value;case th:return"";case nh:return e.return=e.value+"{"+Uo(e.children,r)+"}";case _l:if(!mt(e.value=e.props.join(",")))return""}return mt(n=Uo(e.children,r))?e.return=e.value+"{"+n+"}":""}function Pv(e){var t=oh(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function Ov(e){return function(t){t.root||(t=t.return)&&e(t)}}function Tv(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Vu:e.return=sh(e.value,e.length,n);return;case nh:return Uo([Nt(e,{value:B(e.value,"@","@"+K)})],r);case _l:if(e.length)return gv(n=e.props,function(i){switch(St(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Tn(Nt(e,{props:[B(i,/:(read-\w+)/,":"+Xr+"$1")]})),Tn(Nt(e,{props:[i]})),Oa(e,{props:Pd(n,r)});break;case"::placeholder":Tn(Nt(e,{props:[B(i,/:(plac\w+)/,":"+K+"input-$1")]})),Tn(Nt(e,{props:[B(i,/:(plac\w+)/,":"+Xr+"$1")]})),Tn(Nt(e,{props:[B(i,/:(plac\w+)/,Z+"input-$1")]})),Tn(Nt(e,{props:[i]})),Oa(e,{props:Pd(n,r)});break}return""})}}var Iv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Qe={},fr=typeof process<"u"&&Qe!==void 0&&(Qe.REACT_APP_SC_ATTR||Qe.SC_ATTR)||"data-styled",ah="active",uh="data-styled-version",Il="6.1.13",Ku=`/*!sc*/
`,Ho=typeof window<"u"&&"HTMLElement"in window,zv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Qe!==void 0&&Qe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Qe.REACT_APP_SC_DISABLE_SPEEDY!==""?Qe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Qe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Qe!==void 0&&Qe.SC_DISABLE_SPEEDY!==void 0&&Qe.SC_DISABLE_SPEEDY!==""&&Qe.SC_DISABLE_SPEEDY!=="false"&&Qe.SC_DISABLE_SPEEDY),Lv={},zl=Object.freeze([]),pr=Object.freeze({});function ch(e,t,n){return n===void 0&&(n=pr),e.theme!==n.theme&&e.theme||t||n.theme}var dh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Rv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Nv=/(^-|-$)/g;function Id(e){return e.replace(Rv,"-").replace(Nv,"")}var Mv=/(a)(d)/gi,Gi=52,zd=function(e){return String.fromCharCode(e+(e>25?39:97))};function za(e){var t,n="";for(t=Math.abs(e);t>Gi;t=t/Gi|0)n=zd(t%Gi)+n;return(zd(t%Gi)+n).replace(Mv,"$1-$2")}var ms,fh=5381,Vn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ph=function(e){return Vn(fh,e)};function qu(e){return za(ph(e)>>>0)}function Fv(e){return e.displayName||e.name||"Component"}function gs(e){return typeof e=="string"&&!0}var hh=typeof Symbol=="function"&&Symbol.for,mh=hh?Symbol.for("react.memo"):60115,Dv=hh?Symbol.for("react.forward_ref"):60112,Av={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$v={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Bv=((ms={})[Dv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ms[mh]=gh,ms);function Ld(e){return("type"in(t=e)&&t.type.$$typeof)===mh?gh:"$$typeof"in e?Bv[e.$$typeof]:Av;var t}var Wv=Object.defineProperty,Qv=Object.getOwnPropertyNames,Rd=Object.getOwnPropertySymbols,Uv=Object.getOwnPropertyDescriptor,Hv=Object.getPrototypeOf,Nd=Object.prototype;function vh(e,t,n){if(typeof t!="string"){if(Nd){var r=Hv(t);r&&r!==Nd&&vh(e,r,n)}var i=Qv(t);Rd&&(i=i.concat(Rd(t)));for(var o=Ld(e),s=Ld(t),a=0;a<i.length;++a){var u=i[a];if(!(u in $v||n&&n[u]||s&&u in s||o&&u in o)){var c=Uv(t,u);try{Wv(e,u,c)}catch{}}}}return e}function jn(e){return typeof e=="function"}function Yu(e){return typeof e=="object"&&"styledComponentId"in e}function pn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Vo(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function vi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function La(e,t,n){if(n===void 0&&(n=!1),!n&&!vi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=La(e[r],t[r]);else if(vi(t))for(var r in t)e[r]=La(e[r],t[r]);return e}function Xu(e,t){Object.defineProperty(e,"toString",{value:t})}function kn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Vv=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw kn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),u=(s=0,n.length);s<u;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Ku);return n},e}(),ho=new Map,Go=new Map,mo=1,Ki=function(e){if(ho.has(e))return ho.get(e);for(;Go.has(mo);)mo++;var t=mo++;return ho.set(e,t),Go.set(t,e),t},Gv=function(e,t){mo=t+1,ho.set(e,t),Go.set(t,e)},Kv="style[".concat(fr,"][").concat(uh,'="').concat(Il,'"]'),qv=new RegExp("^".concat(fr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Yv=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},Xv=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Ku),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var u=a.match(qv);if(u){var c=0|parseInt(u[1],10),h=u[2];c!==0&&(Gv(h,c),Yv(e,h,u[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},Md=function(e){for(var t=document.querySelectorAll(Kv),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(fr)!==ah&&(Xv(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Zv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var xh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(fr,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(fr,ah),r.setAttribute(uh,Il);var s=Zv();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},Jv=function(){function e(t){this.element=xh(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw kn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),ex=function(){function e(t){this.element=xh(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),tx=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Fd=Ho,nx={isServer:!Ho,useCSSOMInjection:!zv},Ko=function(){function e(t,n,r){t===void 0&&(t=pr),n===void 0&&(n={});var i=this;this.options=xe(xe({},nx),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ho&&Fd&&(Fd=!1,Md(this)),Xu(this,function(){return function(o){for(var s=o.getTag(),a=s.length,u="",c=function(f){var g=function(p){return Go.get(p)}(f);if(g===void 0)return"continue";var x=o.names.get(g),y=s.getGroup(f);if(x===void 0||!x.size||y.length===0)return"continue";var v="".concat(fr,".g").concat(f,'[id="').concat(g,'"]'),j="";x!==void 0&&x.forEach(function(p){p.length>0&&(j+="".concat(p,","))}),u+="".concat(y).concat(v,'{content:"').concat(j,'"}').concat(Ku)},h=0;h<a;h++)c(h);return u}(i)})}return e.registerId=function(t){return Ki(t)},e.prototype.rehydrate=function(){!this.server&&Ho&&Md(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(xe(xe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new tx(i):r?new Jv(i):new ex(i)}(this.options),new Vv(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ki(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ki(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ki(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),rx=/&/g,ix=/^\s*\/\/.*$/gm;function yh(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=yh(n.children,t)),n})}function ox(e){var t,n,r,i=pr,o=i.options,s=o===void 0?pr:o,a=i.plugins,u=a===void 0?zl:a,c=function(g,x,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):g},h=u.slice();h.push(function(g){g.type===_l&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(rx,n).replace(r,c))}),s.prefix&&h.push(Tv),h.push(_v);var f=function(g,x,y,v){x===void 0&&(x=""),y===void 0&&(y=""),v===void 0&&(v="&"),t=v,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var j=g.replace(ix,""),p=Cv(y||x?"".concat(y," ").concat(x," { ").concat(j," }"):j);s.namespace&&(p=yh(p,s.namespace));var d=[];return Uo(p,Pv(h.concat(Ov(function(m){return d.push(m)})))),d};return f.hash=u.length?u.reduce(function(g,x){return x.name||kn(15),Vn(g,x.name)},fh).toString():"",f}var lx=new Ko,Ra=ox(),wh=fe.createContext({shouldForwardProp:void 0,styleSheet:lx,stylis:Ra});wh.Consumer;fe.createContext(void 0);function Na(){return k.useContext(wh)}var Sh=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ra);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Xu(this,function(){throw kn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ra),this.name+t.hash},e}(),sx=function(e){return e>="A"&&e<="Z"};function Dd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;sx(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var jh=function(e){return e==null||e===!1||e===""},kh=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!jh(o)&&(Array.isArray(o)&&o.isCss||jn(o)?r.push("".concat(Dd(i),":"),o,";"):vi(o)?r.push.apply(r,ur(ur(["".concat(i," {")],kh(o),!1),["}"],!1)):r.push("".concat(Dd(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Iv||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Jt(e,t,n,r){if(jh(e))return[];if(Yu(e))return[".".concat(e.styledComponentId)];if(jn(e)){if(!jn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Jt(i,t,n,r)}var o;return e instanceof Sh?n?(e.inject(n,r),[e.getName(r)]):[e]:vi(e)?kh(e):Array.isArray(e)?Array.prototype.concat.apply(zl,e.map(function(s){return Jt(s,t,n,r)})):[e.toString()]}function bh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(jn(n)&&!Yu(n))return!1}return!0}var ax=ph(Il),ux=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&bh(t),this.componentId=n,this.baseHash=Vn(ax,n),this.baseStyle=r,Ko.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=pn(i,this.staticRulesId);else{var o=Vo(Jt(this.rules,t,n,r)),s=za(Vn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=pn(i,s),this.staticRulesId=s}else{for(var u=Vn(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var f=this.rules[h];if(typeof f=="string")c+=f;else if(f){var g=Vo(Jt(f,t,n,r));u=Vn(u,g+h),c+=g}}if(c){var x=za(u>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(c,".".concat(x),void 0,this.componentId)),i=pn(i,x)}}return i},e}(),xi=fe.createContext(void 0);xi.Consumer;function cx(e){var t=fe.useContext(xi),n=k.useMemo(function(){return function(r,i){if(!r)throw kn(14);if(jn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw kn(8);return i?xe(xe({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?fe.createElement(xi.Provider,{value:n},e.children):null}var vs={};function dx(e,t,n){var r=Yu(e),i=e,o=!gs(e),s=t.attrs,a=s===void 0?zl:s,u=t.componentId,c=u===void 0?function(w,b){var C=typeof w!="string"?"sc":Id(w);vs[C]=(vs[C]||0)+1;var E="".concat(C,"-").concat(qu(Il+C+vs[C]));return b?"".concat(b,"-").concat(E):E}(t.displayName,t.parentComponentId):u,h=t.displayName,f=h===void 0?function(w){return gs(w)?"styled.".concat(w):"Styled(".concat(Fv(w),")")}(e):h,g=t.displayName&&t.componentId?"".concat(Id(t.displayName),"-").concat(t.componentId):t.componentId||c,x=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var j=t.shouldForwardProp;y=function(w,b){return v(w,b)&&j(w,b)}}else y=v}var p=new ux(n,g,r?i.componentStyle:void 0);function d(w,b){return function(C,E,T){var P=C.attrs,_=C.componentStyle,M=C.defaultProps,N=C.foldedComponentIds,F=C.styledComponentId,A=C.target,it=fe.useContext(xi),le=Na(),we=C.shouldForwardProp||le.shouldForwardProp,z=ch(E,it,M)||pr,R=function(Re,We,yt){for(var _r,sn=xe(xe({},We),{className:void 0,theme:yt}),$l=0;$l<Re.length;$l+=1){var Pi=jn(_r=Re[$l])?_r(sn):_r;for(var Lt in Pi)sn[Lt]=Lt==="className"?pn(sn[Lt],Pi[Lt]):Lt==="style"?xe(xe({},sn[Lt]),Pi[Lt]):Pi[Lt]}return We.className&&(sn.className=pn(sn.className,We.className)),sn}(P,E,z),$=R.as||A,H={};for(var G in R)R[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&R.theme===z||(G==="forwardedAs"?H.as=R.forwardedAs:we&&!we(G,$)||(H[G]=R[G]));var Pe=function(Re,We){var yt=Na(),_r=Re.generateAndInjectStyles(We,yt.styleSheet,yt.stylis);return _r}(_,R),Be=pn(N,F);return Pe&&(Be+=" "+Pe),R.className&&(Be+=" "+R.className),H[gs($)&&!dh.has($)?"class":"className"]=Be,H.ref=T,k.createElement($,H)}(m,w,b)}d.displayName=f;var m=fe.forwardRef(d);return m.attrs=x,m.componentStyle=p,m.displayName=f,m.shouldForwardProp=y,m.foldedComponentIds=r?pn(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=g,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(b){for(var C=[],E=1;E<arguments.length;E++)C[E-1]=arguments[E];for(var T=0,P=C;T<P.length;T++)La(b,P[T],!0);return b}({},i.defaultProps,w):w}}),Xu(m,function(){return".".concat(m.styledComponentId)}),o&&vh(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Ad(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var $d=function(e){return Object.assign(e,{isCss:!0})};function bn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(jn(e)||vi(e))return $d(Jt(Ad(zl,ur([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Jt(r):$d(Jt(Ad(r,t)))}function Ma(e,t,n){if(n===void 0&&(n=pr),!t)throw kn(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,bn.apply(void 0,ur([i],o,!1)))};return r.attrs=function(i){return Ma(e,t,xe(xe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ma(e,t,xe(xe({},n),i))},r}var Ch=function(e){return Ma(dx,e)},S=Ch;dh.forEach(function(e){S[e]=Ch(e)});var fx=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=bh(t),Ko.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Vo(Jt(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ko.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function px(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=bn.apply(void 0,ur([e],t,!1)),i="sc-global-".concat(qu(JSON.stringify(r))),o=new fx(r,i),s=function(u){var c=Na(),h=fe.useContext(xi),f=fe.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(f,u,c.styleSheet,h,c.stylis),fe.useLayoutEffect(function(){if(!c.styleSheet.server)return a(f,u,c.styleSheet,h,c.stylis),function(){return o.removeStyles(f,c.styleSheet)}},[f,u,c.styleSheet,h,c.stylis]),null};function a(u,c,h,f,g){if(o.isStatic)o.renderStyles(u,Lv,h,g);else{var x=xe(xe({},c),{theme:ch(c,f,s.defaultProps)});o.renderStyles(u,x,h,g)}}return fe.memo(s)}function Er(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Vo(bn.apply(void 0,ur([e],t,!1))),i=qu(r);return new Sh(i,r)}const hx=S.div`
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
`,mx=S.div`
  display: flex;
  width: ${e=>e.count*100}%;  
  transform: translateX(-${e=>e.currentIndex*100}%); 
  transition: transform 0.5s ease-in-out;
`,gx=S.img`
  flex-shrink: 0;  
  width: 100%;  
  height: 90vh;
  object-fit: cover;
`,vx=S.div`
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
`,zn=S.div`
  font-size: 1.5rem;
  white-space: nowrap;
  font-weight: bold;
  color: #000;
`,Ln=S.div`
  text-align: center;
  display: ${e=>e.isVisible?"block":"none"}; 
  animation: ${e=>e.isVisible?Bd:"none"} 0.4s ease-in-out;
  font-size: 1.1rem;
  color: #222;

  @media (max-width: 500px) {
    display: ${e=>e.isVisible?"block":"none"};
    animation: ${e=>e.isVisible?Bd:"none"} 0.4s ease-in-out;
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
`,Mr=S.div`
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
`,Bd=Er`
  from { opacity: 0; }
  to { opacity: 1; }
`,bt="/assets/Genie1-_KHwDxeg.svg",hr="/assets/Genie2-BwCRixq0.svg",xx=Er`
  from {
    transform: translateY(0);
    opacity: 1;  
  }
  to {
    transform: translateY(-100px);
    opacity: 0;
  }
`;S.img`
  position: fixed;
  top: 23%;
  max-width: 30%;
  left: 36%;
  z-index: 10000;
  transition: opacity 0.5s ease-out;
  animation: ${e=>e.isDisappearing?bn`${xx} 0.5s forwards`:"none"};
`;const yx=()=>{const[e,t]=k.useState(null),[n,r]=k.useState(0),[i,o]=k.useState(!1),s=[av,uv,cv],[a,u]=k.useState(!0),[c,h]=k.useState(!1),[f,g]=k.useState(bt),[x,y]=k.useState(!1),[v,j]=k.useState(!1),[p,d]=k.useState(null),m=rt(),w=P=>{t(P)},b=(P,_)=>{p===P?m(_):d(P)};k.useEffect(()=>{if(p!==null){const P=setTimeout(()=>{d(null)},4e3);return()=>clearTimeout(P)}},[p]);const C=()=>{t(null)};k.useEffect(()=>{const P=setTimeout(()=>{h(!0)},1e3),_=setInterval(()=>{g(N=>N===bt?hr:bt)},600),M=setTimeout(()=>{j(!0),setTimeout(()=>{u(!1)},1e3),clearInterval(_)},3e3);return()=>{clearTimeout(P),clearTimeout(M),clearInterval(_)}},[]);const E=()=>{const _=n===0?s.length-1:n-1;r(_)},T=()=>{const _=n===s.length-1?0:n+1;r(_)};return k.useEffect(()=>{if(window.innerWidth<=500){const P=setInterval(()=>{T()},3e3);return()=>{clearInterval(P)}}},[n]),l.jsx(l.Fragment,{children:l.jsxs(hx,{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[l.jsx("img",{src:dv,alt:"Previous",onClick:E,onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),style:{cursor:"pointer",position:"absolute",top:"50%",left:"2.5vw",zIndex:1e3,transform:`translateY(-50%) scale(${x?1.1:1})`,opacity:i?.4:0,transition:"opacity 1s ease-in-out, transform 0.3s ease-in-out",transitionDelay:i?"0.1s":"0s",display:window.innerWidth<=500?"none":"block"}}),l.jsx("img",{src:fv,alt:"Next",onClick:T,onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),style:{cursor:"pointer",position:"absolute",top:"50%",right:"2.5vw",zIndex:1e3,transform:`translateY(-50%) scale(${x?1.1:1})`,opacity:i?.4:0,transition:"opacity 1s ease-in-out, transform 0.3s ease-in-out",transitionDelay:i?"0.1s":"0s",display:window.innerWidth<=500?"none":"block"}}),l.jsx(mx,{currentIndex:n,count:s.length,children:s.map((P,_)=>l.jsx(gx,{src:P,alt:`Slide ${_}`,style:{borderBottomLeftRadius:"20vw"}},_))}),l.jsxs(vx,{children:[l.jsx("div",{style:{width:"100%"},children:l.jsxs(Mr,{onClick:()=>b(0,"/concept"),style:{backgroundColor:"#F1F5F9"},isHovered:e===0||p===0,onMouseEnter:()=>w(0),onMouseLeave:C,isClicked:p===0,children:[l.jsx(zn,{children:"양자 개념"}),l.jsxs(Ln,{onClick:P=>m("/concept"),isVisible:e===0,children:["양자란 무엇일까요? 쉽게 알아봅시다!!",l.jsx("p",{})]})]})}),l.jsx("div",{style:{width:"100%"},children:l.jsxs(Mr,{onClick:()=>b(1,"/description"),style:{backgroundColor:"#D0E7FE"},isHovered:e===1||p===1,onMouseEnter:()=>w(1),onMouseLeave:C,isClicked:p===1,children:[l.jsx(zn,{children:"활용 분야"}),l.jsxs(Ln,{onClick:P=>m("/description"),isVisible:e===1,children:["양자 컴퓨터, 양자 암호 통신 등 양자 기술이 활용되고 있는 분야에 대해 알아봅시다.",l.jsx("p",{})]})]})}),l.jsx("div",{style:{width:"100%"},children:l.jsxs(Mr,{onClick:()=>b(2,"/"),style:{backgroundColor:"#A5D2FF"},isHovered:e===2||p===2,onMouseEnter:()=>w(2),onMouseLeave:C,isClicked:p===2,children:[l.jsx(zn,{children:"최근 동향"}),l.jsxs(Ln,{onClick:P=>m("/recent"),isVisible:e===2,children:["양자 기술의 최근 동향에 대해 알아봅시다.",l.jsx("p",{})]})]})}),l.jsx("div",{style:{width:"100%"},children:l.jsxs(Mr,{onClick:()=>b(3,"/"),style:{backgroundColor:"#7EAFE0"},isHovered:e===3||p===3,onMouseEnter:()=>w(3),onMouseLeave:C,isClicked:p===3,children:[l.jsx(zn,{children:"주요 기업"}),l.jsxs(Ln,{onClick:P=>m("/company"),isVisible:e===3,children:["양자 기술의 발전을 이끌고 있는 국내, 해외 주요 기업들을 모아봤어요.",l.jsx("p",{})]})]})}),l.jsx("div",{style:{width:"100%"},children:l.jsxs(Mr,{onClick:()=>b(4,"/quiz"),style:{backgroundColor:"#E2E0FF"},isHovered:e===4||p===4,onMouseEnter:()=>w(4),onMouseLeave:C,isClicked:p===4,children:[l.jsx(zn,{children:"양자 퀴즈"}),l.jsxs(Ln,{onClick:P=>m("/quizmain"),isVisible:e===4,children:["간단한 양자 개념을 확인하는 Quiz Quiz!!",l.jsx("p",{})]})]})})]})]})})};function wx(){return l.jsx(l.Fragment,{children:l.jsx(yx,{})})}var Eh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Wd=fe.createContext&&fe.createContext(Eh),Sx=["attr","size","title"];function jx(e,t){if(e==null)return{};var n=kx(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function kx(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function qo(){return qo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qo.apply(this,arguments)}function Qd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Yo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qd(Object(n),!0).forEach(function(r){bx(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function bx(e,t,n){return t=Cx(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Cx(e){var t=Ex(e,"string");return typeof t=="symbol"?t:t+""}function Ex(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _h(e){return e&&e.map((t,n)=>fe.createElement(t.tag,Yo({key:n},t.attr),_h(t.child)))}function Zu(e){return t=>fe.createElement(_x,qo({attr:Yo({},e.attr)},t),_h(e.child))}function _x(e){var t=n=>{var{attr:r,size:i,title:o}=e,s=jx(e,Sx),a=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),fe.createElement("svg",qo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:u,style:Yo(Yo({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&fe.createElement("title",null,o),e.children)};return Wd!==void 0?fe.createElement(Wd.Consumer,null,n=>t(n)):t(Eh)}function Px(e){return Zu({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function Ox(e){return Zu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function Xo(e){return Zu({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}const Tx=S.div`
  font-size: 3.8rem;
  font-weight: bold;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`,Ix=S.img`
  max-width: 40%;
  width: 40%;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`,zx=S.div`
  font-size: 3rem;
  cursor: pointer;
`;S(zx)`
  font-size: 3rem;
  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`;const In=S.div`
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
`,Lx=S.nav`
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
`,Rx=S.div`
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
`,Ud=S.div`
  font-size: 3.4rem;
  cursor: pointer;
  @media (max-width: 700px) {
    padding-right: -10px;
    font-size: 2.5rem;
  }
`,Nx="/assets/Genie-Bb0VnGpq.svg",Mx="data:image/svg+xml,%3csvg%20width='95'%20height='95'%20viewBox='0%200%2095%2095'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='47.4595'%20y='0.438599'%20width='31.3747'%20height='31.3747'%20rx='3.92184'%20transform='rotate(45%2047.4595%200.438599)'%20fill='%238E8D94'/%3e%3crect%20x='72.417'%20y='25.3972'%20width='31.3747'%20height='66.6713'%20rx='3.92184'%20transform='rotate(45%2072.417%2025.3972)'%20fill='%23BBBBBB'/%3e%3crect%20x='22.502'%20y='25.3972'%20width='31.3747'%20height='31.3747'%20rx='3.92184'%20transform='rotate(45%2022.502%2025.3972)'%20fill='%23D9D9D9'/%3e%3c/svg%3e";function Fx(){const[e,t]=k.useState(!1),[n,r]=k.useState(!1),i=rt();k.useEffect(()=>{const s=()=>{window.scrollY>0?t(!0):t(!1)};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]);const o=()=>{r(!n)};return l.jsxs(l.Fragment,{children:[l.jsxs(Lx,{isScrolled:e,style:{paddingLeft:"5%",paddingRight:"3%"},children:[l.jsxs("div",{onClick:()=>i("/"),style:{cursor:"pointer",maxWidth:"100%",marginRight:"0px",display:"flex",flexDirection:"row",gap:"10%",alignItems:"center",justifyContent:"space-between"},children:[l.jsx(Ix,{src:Nx,alt:"Logo"}),l.jsx(Tx,{children:"Jenie"})]}),l.jsx("div",{style:{display:"flex",flexDirection:"row",gap:"25px",alignItems:"center",justifyContent:"flex-end"},children:l.jsx(Ud,{onClick:o,children:n?l.jsx(Xo,{}):l.jsx(Px,{})})})]}),n&&l.jsxs(Rx,{children:[l.jsxs("div",{style:{marginBottom:"4%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",fontSize:"1.7rem",gap:"5%"},children:[l.jsx("img",{src:Mx}),l.jsx("h1",{children:"Menu List"})]}),l.jsx(Ud,{onClick:o,style:{fontSize:"3rem",marginTop:"0.5vw"},children:l.jsx(Xo,{})})]}),l.jsx(In,{onClick:()=>{i("/concept"),r(!1)},children:"양자 개념"}),l.jsx(In,{onClick:()=>{i("/description"),r(!1)},children:"양자 활용"}),l.jsx(In,{onClick:()=>{i("/recent"),r(!1)},children:"최근 동향"}),l.jsx(In,{onClick:()=>{i("/company"),r(!1)},children:"주요 기업"}),l.jsx(In,{onClick:()=>{i("/quizmain"),r(!1)},children:"양자 퀴즈"}),l.jsx(In,{onClick:()=>{i("/character"),r(!1)},children:"캐릭터 소개"})]})]})}const Dx=S.footer`
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
`,Ax=S.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 85%;
  margin-left: 7.5%;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`,$x=S.div`
  display: flex;
  flex-direction: column;
`,Bx=S.div`
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
`,Wx=S.img`
  max-width: 150px;
  margin-bottom: 5.5%;
  cursor: pointer;
  @media (max-width: 960px) {
    margin-bottom: 3.5%;
  }
`,Qx=S.div`
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
`,Ux=S.div`
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
`,Hx=S.div`
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
    
`,Hd=S.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  span {
    font-size: 1.1rem;
    margin-left: 10px;
    margin-right: 20px;
  }
`,Vd=S.div`
  background-color: #000;
  border-radius: 100%;
  align-items: center;
  text-align: center;
  p{
    font-size: 2rem;
    text-align: center;
  }
`,Gd=S.div`
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
`,Vx=S.div`
  text-align: center;
  margin-top: 2%;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 3%;

  p {
    font-size: 1rem;
    opacity: 0.8;
  }
`,Kd=S.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5%;
  @media (max-width: 960px) {
      display: none;
  }
`,qd="data:image/svg+xml,%3csvg%20width='43'%20height='43'%20viewBox='0%200%2043%2043'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cellipse%20cx='21'%20cy='22.5'%20rx='18'%20ry='19.5'%20fill='white'/%3e%3cg%20clip-path='url(%23clip0_0_1)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21.1676%201.05875C16.172%201.06134%2011.3402%202.83067%207.53623%206.05038C3.73223%209.27008%201.20408%2013.7302%200.403813%2018.6332C-0.396452%2023.5362%200.583349%2028.5624%203.16804%2032.813C5.75273%2037.0637%209.77375%2040.2616%2014.5121%2041.8349C15.5575%2042.0289%2015.9512%2041.381%2015.9512%2040.8301C15.9512%2040.2792%2015.9303%2038.682%2015.9233%2036.9358C10.0693%2038.2004%208.83233%2034.4655%208.83233%2034.4655C7.87757%2032.0402%206.49769%2031.4027%206.49769%2031.4027C4.58817%2030.1069%206.64057%2030.1311%206.64057%2030.1311C8.75568%2030.2801%209.86725%2032.2896%209.86725%2032.2896C11.7419%2035.4875%2014.7909%2034.5625%2015.9895%2034.022C16.1777%2032.6673%2016.7248%2031.7457%2017.3276%2031.2225C12.6514%2030.6959%207.73819%2028.9011%207.73819%2020.8838C7.7092%2018.8045%208.48519%2016.7938%209.90557%2015.2675C9.68953%2014.7409%208.96822%2012.6135%2010.1111%209.72398C10.1111%209.72398%2011.8778%209.1627%2015.899%2011.8686C19.348%2010.9308%2022.9871%2010.9308%2026.4362%2011.8686C30.4538%209.1627%2032.217%209.72398%2032.217%209.72398C33.3634%2012.6066%2032.6421%2014.7339%2032.4261%2015.2675C33.8509%2016.794%2034.6286%2018.8083%2034.5969%2020.8907C34.5969%2028.9254%2029.6733%2030.6959%2024.9901%2031.2121C25.7427%2031.8635%2026.4153%2033.135%2026.4153%2035.0891C26.4153%2037.8886%2026.3909%2040.1406%2026.3909%2040.8301C26.3909%2041.3879%2026.7707%2042.0393%2027.8369%2041.8349C32.5759%2040.2614%2036.5973%2037.0629%2039.1819%2032.8116C41.7666%2028.5602%2042.7458%2023.5333%2041.9447%2018.6298C41.1435%2013.7263%2038.6141%209.26616%2034.8088%206.04701C31.0036%202.82787%2026.1707%201.0597%2021.1745%201.05875H21.1676Z'%20fill='%23191717'/%3e%3cpath%20d='M8.09314%2031.1012C8.04784%2031.2052%207.88058%2031.2363%207.74469%2031.1636C7.60879%2031.0908%207.50775%2030.9557%207.55653%2030.8483C7.60531%2030.7409%207.76909%2030.7132%207.90498%2030.7859C8.04088%2030.8587%208.14541%2030.9973%208.09314%2031.1012Z'%20fill='%23191717'/%3e%3cpath%20d='M8.9469%2032.0471C8.87474%2032.0832%208.79218%2032.0933%208.71336%2032.0756C8.63454%2032.0579%208.56436%2032.0135%208.51482%2031.9501C8.37892%2031.8045%208.35103%2031.6036%208.45557%2031.5135C8.5601%2031.4234%208.74828%2031.465%208.88418%2031.6105C9.02008%2031.756%209.05143%2031.957%208.9469%2032.0471Z'%20fill='%23191717'/%3e%3cpath%20d='M9.77616%2033.2493C9.64723%2033.3394%209.42769%2033.2493%209.30573%2033.0691C9.27201%2033.0368%209.24519%2032.9981%209.22687%2032.9552C9.20855%2032.9124%209.1991%2032.8663%209.1991%2032.8197C9.1991%2032.7731%209.20855%2032.727%209.22687%2032.6842C9.24519%2032.6413%209.27201%2032.6026%209.30573%2032.5702C9.43466%2032.4836%209.6542%2032.5702%209.77616%2032.7469C9.89812%2032.9236%209.9016%2033.1592%209.77616%2033.2493V33.2493Z'%20fill='%23191717'/%3e%3cpath%20d='M10.9017%2034.4135C10.7867%2034.5417%2010.5533%2034.507%2010.3616%2034.3338C10.17%2034.1606%2010.1247%2033.925%2010.2396%2033.8002C10.3546%2033.6755%2010.5881%2033.7101%2010.7867%2033.8799C10.9853%2034.0497%2011.0237%2034.2887%2010.9017%2034.4135V34.4135Z'%20fill='%23191717'/%3e%3cpath%20d='M12.4801%2035.0925C12.4279%2035.2554%2012.1909%2035.3281%2011.954%2035.2588C11.717%2035.1895%2011.5602%2034.9955%2011.6055%2034.8292C11.6508%2034.6629%2011.8912%2034.5867%2012.1317%2034.6629C12.3721%2034.7391%2012.5254%2034.9228%2012.4801%2035.0925Z'%20fill='%23191717'/%3e%3cpath%20d='M14.2017%2035.2103C14.2017%2035.3801%2014.0066%2035.5256%2013.7557%2035.5291C13.5048%2035.5326%2013.2992%2035.394%2013.2992%2035.2242C13.2992%2035.0544%2013.4943%2034.9089%2013.7452%2034.9054C13.9961%2034.902%2014.2017%2035.0371%2014.2017%2035.2103Z'%20fill='%23191717'/%3e%3cpath%20d='M15.8043%2034.9436C15.8357%2035.1134%2015.6615%2035.2901%2015.4106%2035.3316C15.1597%2035.3732%2014.9402%2035.2727%2014.9088%2035.1064C14.8774%2034.9401%2015.0586%2034.76%2015.3026%2034.7149C15.5465%2034.6699%2015.773%2034.7738%2015.8043%2034.9436Z'%20fill='%23191717'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_0_1'%3e%3crect%20width='42.35'%20height='42.35'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Yd="data:image/svg+xml,%3csvg%20width='43'%20height='43'%20viewBox='0%200%2043%2043'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='21.175'%20cy='21.175'%20r='21.175'%20fill='white'/%3e%3cpath%20d='M9.77273%2030.7548H13.9091V20.7093L8%2016.2775V28.982C8%2029.9615%208.7933%2030.7548%209.77273%2030.7548Z'%20fill='%234285F4'/%3e%3cpath%20d='M28.0909%2030.7548H32.2272C33.2067%2030.7548%2034%2029.9615%2034%2028.982V16.2775L28.0909%2020.7093V30.7548Z'%20fill='%2334A853'/%3e%3cpath%20d='M28.0909%2013.0275V20.7093L34%2016.2775V13.9139C34%2011.7231%2031.4989%2010.4718%2029.7454%2011.7866L28.0909%2013.0275Z'%20fill='%23FBBC04'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.9091%2020.7093V13.0275L21%2018.3457L28.0909%2013.0275V20.7093L21%2026.0275L13.9091%2020.7093Z'%20fill='%23EA4335'/%3e%3cpath%20d='M8%2013.9139V16.2775L13.9091%2020.7093V13.0275L12.2545%2011.7866C10.501%2010.4718%208%2011.7231%208%2013.9139Z'%20fill='%23C5221F'/%3e%3c/svg%3e",Gx="/assets/Jininfra-Czzd3TNl.svg",Kx=()=>l.jsxs(Dx,{children:[l.jsxs(Ax,{children:[l.jsxs($x,{children:[l.jsx(Wx,{onClick:()=>window.location.href="https://jininfra.com/",src:Gx,alt:"Footer Logo"}),l.jsx(Bx,{children:l.jsx("h1",{children:"주식회사 진인프라"})}),l.jsxs(Qx,{children:[l.jsxs(Kd,{style:{marginBottom:"2%"},children:[l.jsx("p",{children:"Email"}),l.jsx("a",{href:"mailto:jininfra@jininfra.com",children:"jininfra@jininfra.com"})]}),l.jsxs(Kd,{children:[l.jsx("p",{children:"Call"}),l.jsx("a",{href:"tel:02-330-3900",children:"02-330-3900"})]}),l.jsx("h3",{style:{marginTop:"3%"},children:"서울센터 | 서울시 송파구 가락로16길3-20 진인프라빌딩"})]})]}),l.jsxs(Ux,{children:[l.jsx("h2",{children:"Contact Us"}),l.jsxs(Hx,{children:[l.jsx("hr",{style:{borderColor:"rgba(255, 255, 255, 0.2)"}}),l.jsx("h3",{style:{marginTop:"6%",marginBottom:"6%"},children:"Frontend Developer"})]}),l.jsxs(Hd,{children:[l.jsx(Vd,{children:l.jsx("p",{children:"👤"})}),l.jsx("span",{children:"YeEun Shin"}),l.jsxs(Gd,{children:[l.jsx("a",{href:"https://github.com/yengeun",children:l.jsx("img",{src:qd,alt:"Github"})}),l.jsx("a",{href:"mailto:7613ez@gmail.com",children:l.jsx("img",{src:Yd,alt:"Gmail"})})]})]}),l.jsxs(Hd,{children:[l.jsx(Vd,{children:l.jsx("p",{children:"👤"})}),l.jsx("span",{children:"Soeun Yoon"}),l.jsxs(Gd,{children:[l.jsx("a",{href:"https://github.com/Dubabbi",children:l.jsx("img",{src:qd,alt:"Github"})}),l.jsx("a",{href:"mailto:thdms3160@naver.com",children:l.jsx("img",{src:Yd,alt:"Gmail"})})]})]})]})]}),l.jsx(Vx,{children:l.jsx("p",{style:{textAlign:"left",marginLeft:"7.5%"},children:"© 2024 Jenie. All rights reserved."})})]});var Ph={},Oh={},Ll={},Th={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};e.default=t})(Th);var qx="Expected a function",Xd=NaN,Yx="[object Symbol]",Xx=/^\s+|\s+$/g,Zx=/^[-+]0x[0-9a-f]+$/i,Jx=/^0b[01]+$/i,ey=/^0o[0-7]+$/i,ty=parseInt,ny=typeof Oi=="object"&&Oi&&Oi.Object===Object&&Oi,ry=typeof self=="object"&&self&&self.Object===Object&&self,iy=ny||ry||Function("return this")(),oy=Object.prototype,ly=oy.toString,sy=Math.max,ay=Math.min,xs=function(){return iy.Date.now()};function uy(e,t,n){var r,i,o,s,a,u,c=0,h=!1,f=!1,g=!0;if(typeof e!="function")throw new TypeError(qx);t=Zd(t)||0,Fa(n)&&(h=!!n.leading,f="maxWait"in n,o=f?sy(Zd(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g);function x(C){var E=r,T=i;return r=i=void 0,c=C,s=e.apply(T,E),s}function y(C){return c=C,a=setTimeout(p,t),h?x(C):s}function v(C){var E=C-u,T=C-c,P=t-E;return f?ay(P,o-T):P}function j(C){var E=C-u,T=C-c;return u===void 0||E>=t||E<0||f&&T>=o}function p(){var C=xs();if(j(C))return d(C);a=setTimeout(p,v(C))}function d(C){return a=void 0,g&&r?x(C):(r=i=void 0,s)}function m(){a!==void 0&&clearTimeout(a),c=0,r=u=i=a=void 0}function w(){return a===void 0?s:d(xs())}function b(){var C=xs(),E=j(C);if(r=arguments,i=this,u=C,E){if(a===void 0)return y(u);if(f)return a=setTimeout(p,t),x(u)}return a===void 0&&(a=setTimeout(p,t)),s}return b.cancel=m,b.flush=w,b}function Fa(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function cy(e){return!!e&&typeof e=="object"}function dy(e){return typeof e=="symbol"||cy(e)&&ly.call(e)==Yx}function Zd(e){if(typeof e=="number")return e;if(dy(e))return Xd;if(Fa(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Fa(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Xx,"");var n=Jx.test(e);return n||ey.test(e)?ty(e.slice(2),n?2:8):Zx.test(e)?Xd:+e}var fy=uy,Ih={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",s=0;s<arguments.length;s++){var a=arguments[s];a&&(o=i(o,r(a)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var s="";for(var a in o)t.call(o,a)&&o[a]&&(s=i(s,a));return s}function i(o,s){return s?o?o+" "+s:o+s:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Ih);var Rl=Ih.exports,I={},Ju={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(k);function n(i){return i&&i.__esModule?i:{default:i}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(o){return t.default.createElement("ul",{style:{display:"block"}},o)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(o){return t.default.createElement("button",null,o+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null};e.default=r})(Ju);Object.defineProperty(I,"__esModule",{value:!0});I.checkSpecKeys=I.checkNavigable=I.changeSlide=I.canUseDOM=I.canGoNext=void 0;I.clamp=Lh;I.extractObject=void 0;I.filterSettings=_y;I.validSettings=I.swipeStart=I.swipeMove=I.swipeEnd=I.slidesOnRight=I.slidesOnLeft=I.slideHandler=I.siblingDirection=I.safePreventDefault=I.lazyStartIndex=I.lazySlidesOnRight=I.lazySlidesOnLeft=I.lazyEndIndex=I.keyHandler=I.initializedState=I.getWidth=I.getTrackLeft=I.getTrackCSS=I.getTrackAnimateCSS=I.getTotalSlides=I.getSwipeDirection=I.getSlideCount=I.getRequiredLazySlides=I.getPreClones=I.getPostClones=I.getOnDemandLazySlides=I.getNavigableIndexes=I.getHeight=void 0;var py=zh(k),hy=zh(Ju);function zh(e){return e&&e.__esModule?e:{default:e}}function yi(e){"@babel/helpers - typeof";return yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yi(e)}function Jd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jd(Object(n),!0).forEach(function(r){my(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function my(e,t,n){return t=gy(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gy(e){var t=vy(e,"string");return yi(t)=="symbol"?t:String(t)}function vy(e,t){if(yi(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(yi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Lh(e,t,n){return Math.max(t,Math.min(e,n))}var Jn=I.safePreventDefault=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()},Rh=I.getOnDemandLazySlides=function(t){for(var n=[],r=Nh(t),i=Mh(t),o=r;o<i;o++)t.lazyLoadedList.indexOf(o)<0&&n.push(o);return n};I.getRequiredLazySlides=function(t){for(var n=[],r=Nh(t),i=Mh(t),o=r;o<i;o++)n.push(o);return n};var Nh=I.lazyStartIndex=function(t){return t.currentSlide-xy(t)},Mh=I.lazyEndIndex=function(t){return t.currentSlide+yy(t)},xy=I.lazySlidesOnLeft=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0},yy=I.lazySlidesOnRight=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow},Da=I.getWidth=function(t){return t&&t.offsetWidth||0},Fh=I.getHeight=function(t){return t&&t.offsetHeight||0},Dh=I.getSwipeDirection=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,o,s;return r=t.startX-t.curX,i=t.startY-t.curY,o=Math.atan2(i,r),s=Math.round(o*180/Math.PI),s<0&&(s=360-Math.abs(s)),s<=45&&s>=0||s<=360&&s>=315?"left":s>=135&&s<=225?"right":n===!0?s>=35&&s<=135?"up":"down":"vertical"},Ah=I.canGoNext=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};I.extractObject=function(t,n){var r={};return n.forEach(function(i){return r[i]=t[i]}),r};I.initializedState=function(t){var n=py.default.Children.count(t.children),r=t.listRef,i=Math.ceil(Da(r)),o=t.trackRef&&t.trackRef.node,s=Math.ceil(Da(o)),a;if(t.vertical)a=i;else{var u=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(u*=i/100),a=Math.ceil((i-u)/t.slidesToShow)}var c=r&&Fh(r.querySelector('[data-index="0"]')),h=c*t.slidesToShow,f=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(f=n-1-t.initialSlide);var g=t.lazyLoadedList||[],x=Rh(ee(ee({},t),{},{currentSlide:f,lazyLoadedList:g}));g=g.concat(x);var y={slideCount:n,slideWidth:a,listWidth:i,trackWidth:s,currentSlide:f,slideHeight:c,listHeight:h,lazyLoadedList:g};return t.autoplaying===null&&t.autoplay&&(y.autoplaying="playing"),y};I.slideHandler=function(t){var n=t.waitForAnimate,r=t.animating,i=t.fade,o=t.infinite,s=t.index,a=t.slideCount,u=t.lazyLoad,c=t.currentSlide,h=t.centerMode,f=t.slidesToScroll,g=t.slidesToShow,x=t.useCSS,y=t.lazyLoadedList;if(n&&r)return{};var v=s,j,p,d,m={},w={},b=o?s:Lh(s,0,a-1);if(i){if(!o&&(s<0||s>=a))return{};s<0?v=s+a:s>=a&&(v=s-a),u&&y.indexOf(v)<0&&(y=y.concat(v)),m={animating:!0,currentSlide:v,lazyLoadedList:y,targetSlide:v},w={animating:!1,targetSlide:v}}else j=v,v<0?(j=v+a,o?a%f!==0&&(j=a-a%f):j=0):!Ah(t)&&v>c?v=j=c:h&&v>=a?(v=o?a:a-1,j=o?0:a-1):v>=a&&(j=v-a,o?a%f!==0&&(j=0):j=a-g),!o&&v+g>=a&&(j=a-g),p=Jo(ee(ee({},t),{},{slideIndex:v})),d=Jo(ee(ee({},t),{},{slideIndex:j})),o||(p===d&&(v=j),p=d),u&&(y=y.concat(Rh(ee(ee({},t),{},{currentSlide:v})))),x?(m={animating:!0,currentSlide:j,trackStyle:$h(ee(ee({},t),{},{left:p})),lazyLoadedList:y,targetSlide:b},w={animating:!1,currentSlide:j,trackStyle:Zo(ee(ee({},t),{},{left:d})),swipeLeft:null,targetSlide:b}):m={currentSlide:j,trackStyle:Zo(ee(ee({},t),{},{left:d})),lazyLoadedList:y,targetSlide:b};return{state:m,nextState:w}};I.changeSlide=function(t,n){var r,i,o,s,a,u=t.slidesToScroll,c=t.slidesToShow,h=t.slideCount,f=t.currentSlide,g=t.targetSlide,x=t.lazyLoad,y=t.infinite;if(s=h%u!==0,r=s?0:(h-f)%u,n.message==="previous")o=r===0?u:c-r,a=f-o,x&&!y&&(i=f-o,a=i===-1?h-1:i),y||(a=g-u);else if(n.message==="next")o=r===0?u:r,a=f+o,x&&!y&&(a=(f+u)%h+r),y||(a=g+u);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,y){var v=ky(ee(ee({},t),{},{targetSlide:a}));a>n.currentSlide&&v==="left"?a=a-h:a<n.currentSlide&&v==="right"&&(a=a+h)}}else n.message==="index"&&(a=Number(n.index));return a};I.keyHandler=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};I.swipeStart=function(t,n,r){return t.target.tagName==="IMG"&&Jn(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};I.swipeMove=function(t,n){var r=n.scrolling,i=n.animating,o=n.vertical,s=n.swipeToSlide,a=n.verticalSwiping,u=n.rtl,c=n.currentSlide,h=n.edgeFriction,f=n.edgeDragged,g=n.onEdge,x=n.swiped,y=n.swiping,v=n.slideCount,j=n.slidesToScroll,p=n.infinite,d=n.touchObject,m=n.swipeEvent,w=n.listHeight,b=n.listWidth;if(!r){if(i)return Jn(t);o&&s&&a&&Jn(t);var C,E={},T=Jo(n);d.curX=t.touches?t.touches[0].pageX:t.clientX,d.curY=t.touches?t.touches[0].pageY:t.clientY,d.swipeLength=Math.round(Math.sqrt(Math.pow(d.curX-d.startX,2)));var P=Math.round(Math.sqrt(Math.pow(d.curY-d.startY,2)));if(!a&&!y&&P>10)return{scrolling:!0};a&&(d.swipeLength=P);var _=(u?-1:1)*(d.curX>d.startX?1:-1);a&&(_=d.curY>d.startY?1:-1);var M=Math.ceil(v/j),N=Dh(n.touchObject,a),F=d.swipeLength;return p||(c===0&&(N==="right"||N==="down")||c+1>=M&&(N==="left"||N==="up")||!Ah(n)&&(N==="left"||N==="up"))&&(F=d.swipeLength*h,f===!1&&g&&(g(N),E.edgeDragged=!0)),!x&&m&&(m(N),E.swiped=!0),o?C=T+F*(w/b)*_:u?C=T-F*_:C=T+F*_,a&&(C=T+F*_),E=ee(ee({},E),{},{touchObject:d,swipeLeft:C,trackStyle:Zo(ee(ee({},n),{},{left:C}))}),Math.abs(d.curX-d.startX)<Math.abs(d.curY-d.startY)*.8||d.swipeLength>10&&(E.swiping=!0,Jn(t)),E}};I.swipeEnd=function(t,n){var r=n.dragging,i=n.swipe,o=n.touchObject,s=n.listWidth,a=n.touchThreshold,u=n.verticalSwiping,c=n.listHeight,h=n.swipeToSlide,f=n.scrolling,g=n.onSwipe,x=n.targetSlide,y=n.currentSlide,v=n.infinite;if(!r)return i&&Jn(t),{};var j=u?c/a:s/a,p=Dh(o,u),d={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(f||!o.swipeLength)return d;if(o.swipeLength>j){Jn(t),g&&g(p);var m,w,b=v?y:x;switch(p){case"left":case"up":w=b+tf(n),m=h?ef(n,w):w,d.currentDirection=0;break;case"right":case"down":w=b-tf(n),m=h?ef(n,w):w,d.currentDirection=1;break;default:m=b}d.triggerSlideHandler=m}else{var C=Jo(n);d.trackStyle=$h(ee(ee({},n),{},{left:C}))}return d};var wy=I.getNavigableIndexes=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,i=t.infinite?t.slidesToShow*-1:0,o=[];r<n;)o.push(r),r=i+t.slidesToScroll,i+=Math.min(t.slidesToScroll,t.slidesToShow);return o},ef=I.checkNavigable=function(t,n){var r=wy(t),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var o in r){if(n<r[o]){n=i;break}i=r[o]}return n},tf=I.getSlideCount=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,i=t.listRef,o=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(o).every(function(u){if(t.vertical){if(u.offsetTop+Fh(u)/2>t.swipeLeft*-1)return r=u,!1}else if(u.offsetLeft-n+Da(u)/2>t.swipeLeft*-1)return r=u,!1;return!0}),!r)return 0;var s=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,a=Math.abs(r.dataset.index-s)||1;return a}else return t.slidesToScroll},ec=I.checkSpecKeys=function(t,n){return n.reduce(function(r,i){return r&&t.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",t)},Zo=I.getTrackCSS=function(t){ec(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=t.slideCount+2*t.slidesToShow;t.vertical?r=i*t.slideHeight:n=jy(t)*t.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var s=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",a=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",u=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";o=ee(ee({},o),{},{WebkitTransform:s,transform:a,msTransform:u})}else t.vertical?o.top=t.left:o.left=t.left;return t.fade&&(o={opacity:1}),n&&(o.width=n),r&&(o.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?o.marginTop=t.left+"px":o.marginLeft=t.left+"px"),o},$h=I.getTrackAnimateCSS=function(t){ec(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Zo(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n},Jo=I.getTrackLeft=function(t){if(t.unslick)return 0;ec(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,i=t.infinite,o=t.centerMode,s=t.slideCount,a=t.slidesToShow,u=t.slidesToScroll,c=t.slideWidth,h=t.listWidth,f=t.variableWidth,g=t.slideHeight,x=t.fade,y=t.vertical,v=0,j,p,d=0;if(x||t.slideCount===1)return 0;var m=0;if(i?(m=-go(t),s%u!==0&&n+u>s&&(m=-(n>s?a-(n-s):s%u)),o&&(m+=parseInt(a/2))):(s%u!==0&&n+u>s&&(m=a-s%u),o&&(m=parseInt(a/2))),v=m*c,d=m*g,y?j=n*g*-1+d:j=n*c*-1+v,f===!0){var w,b=r&&r.node;if(w=n+go(t),p=b&&b.childNodes[w],j=p?p.offsetLeft*-1:0,o===!0){w=i?n+go(t):n,p=b&&b.children[w],j=0;for(var C=0;C<w;C++)j-=b&&b.children[C]&&b.children[C].offsetWidth;j-=parseInt(t.centerPadding),j+=p&&(h-p.offsetWidth)/2}}return j},go=I.getPreClones=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)},Sy=I.getPostClones=function(t){return t.unslick||!t.infinite?0:t.slideCount},jy=I.getTotalSlides=function(t){return t.slideCount===1?1:go(t)+t.slideCount+Sy(t)},ky=I.siblingDirection=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+by(t)?"left":"right":t.targetSlide<t.currentSlide-Cy(t)?"right":"left"},by=I.slidesOnRight=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var s=(n-1)/2+1;return parseInt(o)>0&&(s+=1),i&&n%2===0&&(s+=1),s}return i?0:n-1},Cy=I.slidesOnLeft=function(t){var n=t.slidesToShow,r=t.centerMode,i=t.rtl,o=t.centerPadding;if(r){var s=(n-1)/2+1;return parseInt(o)>0&&(s+=1),!i&&n%2===0&&(s+=1),s}return i?n-1:0};I.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var Ey=I.validSettings=Object.keys(hy.default);function _y(e){return Ey.reduce(function(t,n){return e.hasOwnProperty(n)&&(t[n]=e[n]),t},{})}var Nl={};Object.defineProperty(Nl,"__esModule",{value:!0});Nl.Track=void 0;var Dt=Bh(k),ys=Bh(Rl),ws=I;function Bh(e){return e&&e.__esModule?e:{default:e}}function mr(e){"@babel/helpers - typeof";return mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mr(e)}function Aa(){return Aa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Aa.apply(this,arguments)}function Py(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Oy(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Qh(r.key),r)}}function Ty(e,t,n){return t&&Oy(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Iy(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$a(e,t)}function $a(e,t){return $a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},$a(e,t)}function zy(e){var t=Wh();return function(){var r=el(e),i;if(t){var o=el(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Ly(this,i)}}function Ly(e,t){if(t&&(mr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ba(e)}function Ba(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Wh(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Wh=function(){return!!e})()}function el(e){return el=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},el(e)}function nf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nf(Object(n),!0).forEach(function(r){Wa(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wa(e,t,n){return t=Qh(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qh(e){var t=Ry(e,"string");return mr(t)=="symbol"?t:String(t)}function Ry(e,t){if(mr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(mr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Ss=function(t){var n,r,i,o,s;t.rtl?s=t.slideCount-1-t.index:s=t.index,i=s<0||s>=t.slideCount,t.centerMode?(o=Math.floor(t.slidesToShow/2),r=(s-t.currentSlide)%t.slideCount===0,s>t.currentSlide-o-1&&s<=t.currentSlide+o&&(n=!0)):n=t.currentSlide<=s&&s<t.currentSlide+t.slidesToShow;var a;t.targetSlide<0?a=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?a=t.targetSlide-t.slideCount:a=t.targetSlide;var u=s===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":u}},Ny=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,n.zIndex=t.currentSlide===t.index?999:998,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},js=function(t,n){return t.key||n},My=function(t){var n,r=[],i=[],o=[],s=Dt.default.Children.count(t.children),a=(0,ws.lazyStartIndex)(t),u=(0,ws.lazyEndIndex)(t);return Dt.default.Children.forEach(t.children,function(c,h){var f,g={message:"children",index:h,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(h)>=0?f=c:f=Dt.default.createElement("div",null);var x=Ny(Ne(Ne({},t),{},{index:h})),y=f.props.className||"",v=Ss(Ne(Ne({},t),{},{index:h}));if(r.push(Dt.default.cloneElement(f,{key:"original"+js(f,h),"data-index":h,className:(0,ys.default)(v,y),tabIndex:"-1","aria-hidden":!v["slick-active"],style:Ne(Ne({outline:"none"},f.props.style||{}),x),onClick:function(d){f.props&&f.props.onClick&&f.props.onClick(d),t.focusOnSelect&&t.focusOnSelect(g)}})),t.infinite&&t.fade===!1){var j=s-h;j<=(0,ws.getPreClones)(t)&&(n=-j,n>=a&&(f=c),v=Ss(Ne(Ne({},t),{},{index:n})),i.push(Dt.default.cloneElement(f,{key:"precloned"+js(f,n),"data-index":n,tabIndex:"-1",className:(0,ys.default)(v,y),"aria-hidden":!v["slick-active"],style:Ne(Ne({},f.props.style||{}),x),onClick:function(d){f.props&&f.props.onClick&&f.props.onClick(d),t.focusOnSelect&&t.focusOnSelect(g)}}))),n=s+h,n<u&&(f=c),v=Ss(Ne(Ne({},t),{},{index:n})),o.push(Dt.default.cloneElement(f,{key:"postcloned"+js(f,n),"data-index":n,tabIndex:"-1",className:(0,ys.default)(v,y),"aria-hidden":!v["slick-active"],style:Ne(Ne({},f.props.style||{}),x),onClick:function(d){f.props&&f.props.onClick&&f.props.onClick(d),t.focusOnSelect&&t.focusOnSelect(g)}}))}}),t.rtl?i.concat(r,o).reverse():i.concat(r,o)};Nl.Track=function(e){Iy(n,e);var t=zy(n);function n(){var r;Py(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return r=t.call.apply(t,[this].concat(o)),Wa(Ba(r),"node",null),Wa(Ba(r),"handleRef",function(a){r.node=a}),r}return Ty(n,[{key:"render",value:function(){var i=My(this.props),o=this.props,s=o.onMouseEnter,a=o.onMouseOver,u=o.onMouseLeave,c={onMouseEnter:s,onMouseOver:a,onMouseLeave:u};return Dt.default.createElement("div",Aa({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},c),i)}}]),n}(Dt.default.PureComponent);var Ml={};function gr(e){"@babel/helpers - typeof";return gr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gr(e)}Object.defineProperty(Ml,"__esModule",{value:!0});Ml.Dots=void 0;var qi=Uh(k),Fy=Uh(Rl),rf=I;function Uh(e){return e&&e.__esModule?e:{default:e}}function of(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Dy(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?of(Object(n),!0).forEach(function(r){Ay(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):of(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ay(e,t,n){return t=Hh(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function By(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Hh(r.key),r)}}function Wy(e,t,n){return t&&By(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Hh(e){var t=Qy(e,"string");return gr(t)=="symbol"?t:String(t)}function Qy(e,t){if(gr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(gr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Uy(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Qa(e,t)}function Qa(e,t){return Qa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Qa(e,t)}function Hy(e){var t=Vh();return function(){var r=tl(e),i;if(t){var o=tl(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Vy(this,i)}}function Vy(e,t){if(t&&(gr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Gy(e)}function Gy(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Vh(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Vh=function(){return!!e})()}function tl(e){return tl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},tl(e)}var Ky=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n};Ml.Dots=function(e){Uy(n,e);var t=Hy(n);function n(){return $y(this,n),t.apply(this,arguments)}return Wy(n,[{key:"clickHandler",value:function(i,o){o.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,o=i.onMouseEnter,s=i.onMouseOver,a=i.onMouseLeave,u=i.infinite,c=i.slidesToScroll,h=i.slidesToShow,f=i.slideCount,g=i.currentSlide,x=Ky({slideCount:f,slidesToScroll:c,slidesToShow:h,infinite:u}),y={onMouseEnter:o,onMouseOver:s,onMouseLeave:a},v=[],j=0;j<x;j++){var p=(j+1)*c-1,d=u?p:(0,rf.clamp)(p,0,f-1),m=d-(c-1),w=u?m:(0,rf.clamp)(m,0,f-1),b=(0,Fy.default)({"slick-active":u?g>=w&&g<=d:g===w}),C={message:"dots",index:j,slidesToScroll:c,currentSlide:g},E=this.clickHandler.bind(this,C);v=v.concat(qi.default.createElement("li",{key:j,className:b},qi.default.cloneElement(this.props.customPaging(j),{onClick:E})))}return qi.default.cloneElement(this.props.appendDots(v),Dy({className:this.props.dotsClass},y))}}]),n}(qi.default.PureComponent);var vr={};function xr(e){"@babel/helpers - typeof";return xr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xr(e)}Object.defineProperty(vr,"__esModule",{value:!0});vr.PrevArrow=vr.NextArrow=void 0;var er=Kh(k),Gh=Kh(Rl),qy=I;function Kh(e){return e&&e.__esModule?e:{default:e}}function nl(){return nl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nl.apply(this,arguments)}function lf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function rl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lf(Object(n),!0).forEach(function(r){Yy(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Yy(e,t,n){return t=Xh(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qh(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xy(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Xh(r.key),r)}}function Yh(e,t,n){return t&&Xy(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Xh(e){var t=Zy(e,"string");return xr(t)=="symbol"?t:String(t)}function Zy(e,t){if(xr(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(xr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Zh(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ua(e,t)}function Ua(e,t){return Ua=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Ua(e,t)}function Jh(e){var t=em();return function(){var r=il(e),i;if(t){var o=il(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return Jy(this,i)}}function Jy(e,t){if(t&&(xr(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return e3(e)}function e3(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function em(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(em=function(){return!!e})()}function il(e){return il=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},il(e)}vr.PrevArrow=function(e){Zh(n,e);var t=Jh(n);function n(){return qh(this,n),t.apply(this,arguments)}return Yh(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},o=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,o=null);var s={key:"0","data-role":"none",className:(0,Gh.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},u;return this.props.prevArrow?u=er.default.cloneElement(this.props.prevArrow,rl(rl({},s),a)):u=er.default.createElement("button",nl({key:"0",type:"button"},s)," ","Previous"),u}}]),n}(er.default.PureComponent);vr.NextArrow=function(e){Zh(n,e);var t=Jh(n);function n(){return qh(this,n),t.apply(this,arguments)}return Yh(n,[{key:"clickHandler",value:function(i,o){o&&o.preventDefault(),this.props.clickHandler(i,o)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},o=this.clickHandler.bind(this,{message:"next"});(0,qy.canGoNext)(this.props)||(i["slick-disabled"]=!0,o=null);var s={key:"1","data-role":"none",className:(0,Gh.default)(i),style:{display:"block"},onClick:o},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},u;return this.props.nextArrow?u=er.default.cloneElement(this.props.nextArrow,rl(rl({},s),a)):u=er.default.createElement("button",nl({key:"1",type:"button"},s)," ","Next"),u}}]),n}(er.default.PureComponent);var tm=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var s=o[i];n.call(r,s[1],s[0])}},t}()}(),Ha=typeof window<"u"&&typeof document<"u"&&window.document===document,ol=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),t3=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(ol):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),n3=2;function r3(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&a()}function s(){t3(o)}function a(){var u=Date.now();if(n){if(u-i<n3)return;r=!0}else n=!0,r=!1,setTimeout(s,t);i=u}return a}var i3=20,o3=["top","right","bottom","left","width","height","size","weight"],l3=typeof MutationObserver<"u",s3=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=r3(this.refresh.bind(this),i3)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Ha||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),l3?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Ha||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=o3.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),nm=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},yr=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||ol},rm=Fl(0,0,0,0);function ll(e){return parseFloat(e)||0}function sf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+ll(o)},0)}function a3(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],s=e["padding-"+o];n[o]=ll(s)}return n}function u3(e){var t=e.getBBox();return Fl(0,0,t.width,t.height)}function c3(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return rm;var r=yr(e).getComputedStyle(e),i=a3(r),o=i.left+i.right,s=i.top+i.bottom,a=ll(r.width),u=ll(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+o)!==t&&(a-=sf(r,"left","right")+o),Math.round(u+s)!==n&&(u-=sf(r,"top","bottom")+s)),!f3(e)){var c=Math.round(a+o)-t,h=Math.round(u+s)-n;Math.abs(c)!==1&&(a-=c),Math.abs(h)!==1&&(u-=h)}return Fl(i.left,i.top,a,u)}var d3=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof yr(e).SVGGraphicsElement}:function(e){return e instanceof yr(e).SVGElement&&typeof e.getBBox=="function"}}();function f3(e){return e===yr(e).document.documentElement}function p3(e){return Ha?d3(e)?u3(e):c3(e):rm}function h3(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(o.prototype);return nm(s,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),s}function Fl(e,t,n,r){return{x:e,y:t,width:n,height:r}}var m3=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Fl(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=p3(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),g3=function(){function e(t,n){var r=h3(n);nm(this,{target:t,contentRect:r})}return e}(),v3=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new tm,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof yr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new m3(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof yr(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new g3(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),im=typeof WeakMap<"u"?new WeakMap:new tm,om=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=s3.getInstance(),r=new v3(t,n,this);im.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){om.prototype[e]=function(){var t;return(t=im.get(this))[e].apply(t,arguments)}});var x3=function(){return typeof ol.ResizeObserver<"u"?ol.ResizeObserver:om}();const y3=Object.freeze(Object.defineProperty({__proto__:null,default:x3},Symbol.toStringTag,{value:"Module"})),w3=Lm(y3);Object.defineProperty(Ll,"__esModule",{value:!0});Ll.InnerSlider=void 0;var Oe=_i(k),S3=_i(Th),j3=_i(fy),k3=_i(Rl),ne=I,b3=Nl,C3=Ml,af=vr,E3=_i(w3);function _i(e){return e&&e.__esModule?e:{default:e}}function Cn(e){"@babel/helpers - typeof";return Cn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cn(e)}function sl(){return sl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sl.apply(this,arguments)}function _3(e,t){if(e==null)return{};var n=P3(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function P3(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function uf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?uf(Object(n),!0).forEach(function(r){Q(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):uf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function O3(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T3(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,sm(r.key),r)}}function I3(e,t,n){return t&&T3(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function z3(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Va(e,t)}function Va(e,t){return Va=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Va(e,t)}function L3(e){var t=lm();return function(){var r=al(e),i;if(t){var o=al(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return R3(this,i)}}function R3(e,t){if(t&&(Cn(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return W(e)}function W(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function lm(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(lm=function(){return!!e})()}function al(e){return al=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},al(e)}function Q(e,t,n){return t=sm(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sm(e){var t=N3(e,"string");return Cn(t)=="symbol"?t:String(t)}function N3(e,t){if(Cn(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Cn(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}Ll.InnerSlider=function(e){z3(n,e);var t=L3(n);function n(r){var i;O3(this,n),i=t.call(this,r),Q(W(i),"listRefHandler",function(s){return i.list=s}),Q(W(i),"trackRefHandler",function(s){return i.track=s}),Q(W(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var s=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,ne.getHeight)(s)+"px"}}),Q(W(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var s=(0,ne.getOnDemandLazySlides)(D(D({},i.props),i.state));s.length>0&&(i.setState(function(u){return{lazyLoadedList:u.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s))}var a=D({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new E3.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(u){u.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,u.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),Q(W(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(s){return clearTimeout(s)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),Q(W(i),"componentDidUpdate",function(s){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,ne.getOnDemandLazySlides)(D(D({},i.props),i.state));a.length>0&&(i.setState(function(h){return{lazyLoadedList:h.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var u=D(D({listRef:i.list,trackRef:i.track},i.props),i.state),c=i.didPropsChange(s);c&&i.updateState(u,c,function(){i.state.currentSlide>=Oe.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Oe.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),Q(W(i),"onWindowResized",function(s){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,j3.default)(function(){return i.resizeWindow(s)},50),i.debouncedResize()}),Q(W(i),"resizeWindow",function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=!!(i.track&&i.track.node);if(a){var u=D(D({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(u,s,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),Q(W(i),"updateState",function(s,a,u){var c=(0,ne.initializedState)(s);s=D(D(D({},s),c),{},{slideIndex:c.currentSlide});var h=(0,ne.getTrackLeft)(s);s=D(D({},s),{},{left:h});var f=(0,ne.getTrackCSS)(s);(a||Oe.default.Children.count(i.props.children)!==Oe.default.Children.count(s.children))&&(c.trackStyle=f),i.setState(c,u)}),Q(W(i),"ssrInit",function(){if(i.props.variableWidth){var s=0,a=0,u=[],c=(0,ne.getPreClones)(D(D(D({},i.props),i.state),{},{slideCount:i.props.children.length})),h=(0,ne.getPostClones)(D(D(D({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(E){u.push(E.props.style.width),s+=E.props.style.width});for(var f=0;f<c;f++)a+=u[u.length-1-f],s+=u[u.length-1-f];for(var g=0;g<h;g++)s+=u[g];for(var x=0;x<i.state.currentSlide;x++)a+=u[x];var y={width:s+"px",left:-a+"px"};if(i.props.centerMode){var v="".concat(u[i.state.currentSlide],"px");y.left="calc(".concat(y.left," + (100% - ").concat(v,") / 2 ) ")}return{trackStyle:y}}var j=Oe.default.Children.count(i.props.children),p=D(D(D({},i.props),i.state),{},{slideCount:j}),d=(0,ne.getPreClones)(p)+(0,ne.getPostClones)(p)+j,m=100/i.props.slidesToShow*d,w=100/d,b=-w*((0,ne.getPreClones)(p)+i.state.currentSlide)*m/100;i.props.centerMode&&(b+=(100-w*m/100)/2);var C={width:m+"%",left:b+"%"};return{slideWidth:w+"%",trackStyle:C}}),Q(W(i),"checkImagesLoad",function(){var s=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=s.length,u=0;Array.prototype.forEach.call(s,function(c){var h=function(){return++u&&u>=a&&i.onWindowResized()};if(!c.onclick)c.onclick=function(){return c.parentNode.focus()};else{var f=c.onclick;c.onclick=function(g){f(g),c.parentNode.focus()}}c.onload||(i.props.lazyLoad?c.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(c.onload=h,c.onerror=function(){h(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),Q(W(i),"progressiveLazyLoad",function(){for(var s=[],a=D(D({},i.props),i.state),u=i.state.currentSlide;u<i.state.slideCount+(0,ne.getPostClones)(a);u++)if(i.state.lazyLoadedList.indexOf(u)<0){s.push(u);break}for(var c=i.state.currentSlide-1;c>=-(0,ne.getPreClones)(a);c--)if(i.state.lazyLoadedList.indexOf(c)<0){s.push(c);break}s.length>0?(i.setState(function(h){return{lazyLoadedList:h.lazyLoadedList.concat(s)}}),i.props.onLazyLoad&&i.props.onLazyLoad(s)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),Q(W(i),"slideHandler",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=i.props,c=u.asNavFor,h=u.beforeChange,f=u.onLazyLoad,g=u.speed,x=u.afterChange,y=i.state.currentSlide,v=(0,ne.slideHandler)(D(D(D({index:s},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),j=v.state,p=v.nextState;if(j){h&&h(y,j.currentSlide);var d=j.lazyLoadedList.filter(function(m){return i.state.lazyLoadedList.indexOf(m)<0});f&&d.length>0&&f(d),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),x&&x(y),delete i.animationEndCallback),i.setState(j,function(){c&&i.asNavForIndex!==s&&(i.asNavForIndex=s,c.innerSlider.slideHandler(s)),p&&(i.animationEndCallback=setTimeout(function(){var m=p.animating,w=_3(p,["animating"]);i.setState(w,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:m})},10)),x&&x(j.currentSlide),delete i.animationEndCallback})},g))})}}),Q(W(i),"changeSlide",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=D(D({},i.props),i.state),c=(0,ne.changeSlide)(u,s);if(!(c!==0&&!c)&&(a===!0?i.slideHandler(c,a):i.slideHandler(c),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var h=i.list.querySelectorAll(".slick-current");h[0]&&h[0].focus()}}),Q(W(i),"clickHandler",function(s){i.clickable===!1&&(s.stopPropagation(),s.preventDefault()),i.clickable=!0}),Q(W(i),"keyHandler",function(s){var a=(0,ne.keyHandler)(s,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),Q(W(i),"selectHandler",function(s){i.changeSlide(s)}),Q(W(i),"disableBodyScroll",function(){var s=function(u){u=u||window.event,u.preventDefault&&u.preventDefault(),u.returnValue=!1};window.ontouchmove=s}),Q(W(i),"enableBodyScroll",function(){window.ontouchmove=null}),Q(W(i),"swipeStart",function(s){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,ne.swipeStart)(s,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),Q(W(i),"swipeMove",function(s){var a=(0,ne.swipeMove)(s,D(D(D({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));a&&(a.swiping&&(i.clickable=!1),i.setState(a))}),Q(W(i),"swipeEnd",function(s){var a=(0,ne.swipeEnd)(s,D(D(D({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(a){var u=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),u!==void 0&&(i.slideHandler(u),i.props.verticalSwiping&&i.enableBodyScroll())}}),Q(W(i),"touchEnd",function(s){i.swipeEnd(s),i.clickable=!0}),Q(W(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),Q(W(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),Q(W(i),"slickGoTo",function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(s=Number(s),isNaN(s))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:s,currentSlide:i.state.currentSlide},a)},0))}),Q(W(i),"play",function(){var s;if(i.props.rtl)s=i.state.currentSlide-i.props.slidesToScroll;else if((0,ne.canGoNext)(D(D({},i.props),i.state)))s=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(s)}),Q(W(i),"autoPlay",function(s){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(s==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(s==="leave"){if(a==="paused"||a==="focused")return}else if(s==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),Q(W(i),"pause",function(s){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;s==="paused"?i.setState({autoplaying:"paused"}):s==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),Q(W(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),Q(W(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),Q(W(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),Q(W(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),Q(W(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),Q(W(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),Q(W(i),"render",function(){var s=(0,k3.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=D(D({},i.props),i.state),u=(0,ne.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),c=i.props.pauseOnHover;u=D(D({},u),{},{onMouseEnter:c?i.onTrackOver:null,onMouseLeave:c?i.onTrackLeave:null,onMouseOver:c?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var h;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var f=(0,ne.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),g=i.props.pauseOnDotsHover;f=D(D({},f),{},{clickHandler:i.changeSlide,onMouseEnter:g?i.onDotsLeave:null,onMouseOver:g?i.onDotsOver:null,onMouseLeave:g?i.onDotsLeave:null}),h=Oe.default.createElement(C3.Dots,f)}var x,y,v=(0,ne.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);v.clickHandler=i.changeSlide,i.props.arrows&&(x=Oe.default.createElement(af.PrevArrow,v),y=Oe.default.createElement(af.NextArrow,v));var j=null;i.props.vertical&&(j={height:i.state.listHeight});var p=null;i.props.vertical===!1?i.props.centerMode===!0&&(p={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(p={padding:i.props.centerPadding+" 0px"});var d=D(D({},j),p),m=i.props.touchMove,w={className:"slick-list",style:d,onClick:i.clickHandler,onMouseDown:m?i.swipeStart:null,onMouseMove:i.state.dragging&&m?i.swipeMove:null,onMouseUp:m?i.swipeEnd:null,onMouseLeave:i.state.dragging&&m?i.swipeEnd:null,onTouchStart:m?i.swipeStart:null,onTouchMove:i.state.dragging&&m?i.swipeMove:null,onTouchEnd:m?i.touchEnd:null,onTouchCancel:i.state.dragging&&m?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},b={className:s,dir:"ltr",style:i.props.style};return i.props.unslick&&(w={className:"slick-list"},b={className:s}),Oe.default.createElement("div",b,i.props.unslick?"":x,Oe.default.createElement("div",sl({ref:i.listRefHandler},w),Oe.default.createElement(b3.Track,sl({ref:i.trackRefHandler},u),i.props.children)),i.props.unslick?"":y,i.props.unslick?"":h)}),i.list=null,i.track=null,i.state=D(D({},S3.default),{},{currentSlide:i.props.initialSlide,targetSlide:i.props.initialSlide?i.props.initialSlide:0,slideCount:Oe.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var o=i.ssrInit();return i.state=D(D({},i.state),o),i}return I3(n,[{key:"didPropsChange",value:function(i){for(var o=!1,s=0,a=Object.keys(this.props);s<a.length;s++){var u=a[s];if(!i.hasOwnProperty(u)){o=!0;break}if(!(Cn(i[u])==="object"||typeof i[u]=="function"||isNaN(i[u]))&&i[u]!==this.props[u]){o=!0;break}}return o||Oe.default.Children.count(this.props.children)!==Oe.default.Children.count(i.children)}}]),n}(Oe.default.Component);var M3=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},F3=M3,D3=F3,A3=function(e){var t=/[height|width]$/;return t.test(e)},cf=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,i){var o=e[r];r=D3(r),A3(r)&&typeof o=="number"&&(o=o+"px"),o===!0?t+=r:o===!1?t+="not "+r:t+="("+r+": "+o+")",i<n.length-1&&(t+=" and ")}),t},$3=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=cf(n),r<e.length-1&&(t+=", ")}),t):cf(e)},B3=$3,ks,df;function W3(){if(df)return ks;df=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},ks=e,ks}var bs,ff;function am(){if(ff)return bs;ff=1;function e(r,i){var o=0,s=r.length,a;for(o;o<s&&(a=i(r[o],o),a!==!1);o++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return bs={isFunction:n,isArray:t,each:e},bs}var Cs,pf;function Q3(){if(pf)return Cs;pf=1;var e=W3(),t=am().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var o=this;this.listener=function(s){o.mql=s.currentTarget||s,o.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new e(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;t(i,function(o,s){if(o.equals(r))return o.destroy(),!i.splice(s,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(i){i[r]()})}},Cs=n,Cs}var Es,hf;function U3(){if(hf)return Es;hf=1;var e=Q3(),t=am(),n=t.each,r=t.isFunction,i=t.isArray;function o(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return o.prototype={constructor:o,register:function(s,a,u){var c=this.queries,h=u&&this.browserIsIncapable;return c[s]||(c[s]=new e(s,h)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(f){r(f)&&(f={match:f}),c[s].addHandler(f)}),this},unregister:function(s,a){var u=this.queries[s];return u&&(a?u.removeHandler(a):(u.clear(),delete this.queries[s])),this}},Es=o,Es}var _s,mf;function H3(){if(mf)return _s;mf=1;var e=U3();return _s=new e,_s}(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=s(k),n=Ll,r=s(B3),i=s(Ju),o=I;function s(P){return P&&P.__esModule?P:{default:P}}function a(P){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},a(P)}function u(){return u=Object.assign?Object.assign.bind():function(P){for(var _=1;_<arguments.length;_++){var M=arguments[_];for(var N in M)Object.prototype.hasOwnProperty.call(M,N)&&(P[N]=M[N])}return P},u.apply(this,arguments)}function c(P,_){var M=Object.keys(P);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(P);_&&(N=N.filter(function(F){return Object.getOwnPropertyDescriptor(P,F).enumerable})),M.push.apply(M,N)}return M}function h(P){for(var _=1;_<arguments.length;_++){var M=arguments[_]!=null?arguments[_]:{};_%2?c(Object(M),!0).forEach(function(N){b(P,N,M[N])}):Object.getOwnPropertyDescriptors?Object.defineProperties(P,Object.getOwnPropertyDescriptors(M)):c(Object(M)).forEach(function(N){Object.defineProperty(P,N,Object.getOwnPropertyDescriptor(M,N))})}return P}function f(P,_){if(!(P instanceof _))throw new TypeError("Cannot call a class as a function")}function g(P,_){for(var M=0;M<_.length;M++){var N=_[M];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(P,C(N.key),N)}}function x(P,_,M){return _&&g(P.prototype,_),Object.defineProperty(P,"prototype",{writable:!1}),P}function y(P,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function");P.prototype=Object.create(_&&_.prototype,{constructor:{value:P,writable:!0,configurable:!0}}),Object.defineProperty(P,"prototype",{writable:!1}),_&&v(P,_)}function v(P,_){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(N,F){return N.__proto__=F,N},v(P,_)}function j(P){var _=m();return function(){var N=w(P),F;if(_){var A=w(this).constructor;F=Reflect.construct(N,arguments,A)}else F=N.apply(this,arguments);return p(this,F)}}function p(P,_){if(_&&(a(_)==="object"||typeof _=="function"))return _;if(_!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return d(P)}function d(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}function m(){try{var P=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(m=function(){return!!P})()}function w(P){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(M){return M.__proto__||Object.getPrototypeOf(M)},w(P)}function b(P,_,M){return _=C(_),_ in P?Object.defineProperty(P,_,{value:M,enumerable:!0,configurable:!0,writable:!0}):P[_]=M,P}function C(P){var _=E(P,"string");return a(_)=="symbol"?_:String(_)}function E(P,_){if(a(P)!="object"||!P)return P;var M=P[Symbol.toPrimitive];if(M!==void 0){var N=M.call(P,_||"default");if(a(N)!="object")return N;throw new TypeError("@@toPrimitive must return a primitive value.")}return(_==="string"?String:Number)(P)}var T=(0,o.canUseDOM)()&&H3();e.default=function(P){y(M,P);var _=j(M);function M(N){var F;return f(this,M),F=_.call(this,N),b(d(F),"innerSliderRefHandler",function(A){return F.innerSlider=A}),b(d(F),"slickPrev",function(){return F.innerSlider.slickPrev()}),b(d(F),"slickNext",function(){return F.innerSlider.slickNext()}),b(d(F),"slickGoTo",function(A){var it=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return F.innerSlider.slickGoTo(A,it)}),b(d(F),"slickPause",function(){return F.innerSlider.pause("paused")}),b(d(F),"slickPlay",function(){return F.innerSlider.autoPlay("play")}),F.state={breakpoint:null},F._responsiveMediaHandlers=[],F}return x(M,[{key:"media",value:function(F,A){T.register(F,A),this._responsiveMediaHandlers.push({query:F,handler:A})}},{key:"componentDidMount",value:function(){var F=this;if(this.props.responsive){var A=this.props.responsive.map(function(le){return le.breakpoint});A.sort(function(le,we){return le-we}),A.forEach(function(le,we){var z;we===0?z=(0,r.default)({minWidth:0,maxWidth:le}):z=(0,r.default)({minWidth:A[we-1]+1,maxWidth:le}),(0,o.canUseDOM)()&&F.media(z,function(){F.setState({breakpoint:le})})});var it=(0,r.default)({minWidth:A.slice(-1)[0]});(0,o.canUseDOM)()&&this.media(it,function(){F.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(F){T.unregister(F.query,F.handler)})}},{key:"render",value:function(){var F=this,A,it;this.state.breakpoint?(it=this.props.responsive.filter(function(Re){return Re.breakpoint===F.state.breakpoint}),A=it[0].settings==="unslick"?"unslick":h(h(h({},i.default),this.props),it[0].settings)):A=h(h({},i.default),this.props),A.centerMode&&(A.slidesToScroll>1,A.slidesToScroll=1),A.fade&&(A.slidesToShow>1,A.slidesToScroll>1,A.slidesToShow=1,A.slidesToScroll=1);var le=t.default.Children.toArray(this.props.children);le=le.filter(function(Re){return typeof Re=="string"?!!Re.trim():!!Re}),A.variableWidth&&(A.rows>1||A.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),A.variableWidth=!1);for(var we=[],z=null,R=0;R<le.length;R+=A.rows*A.slidesPerRow){for(var $=[],H=R;H<R+A.rows*A.slidesPerRow;H+=A.slidesPerRow){for(var G=[],Pe=H;Pe<H+A.slidesPerRow&&(A.variableWidth&&le[Pe].props.style&&(z=le[Pe].props.style.width),!(Pe>=le.length));Pe+=1)G.push(t.default.cloneElement(le[Pe],{key:100*R+10*H+Pe,tabIndex:-1,style:{width:"".concat(100/A.slidesPerRow,"%"),display:"inline-block"}}));$.push(t.default.createElement("div",{key:10*R+H},G))}A.variableWidth?we.push(t.default.createElement("div",{key:R,style:{width:z}},$)):we.push(t.default.createElement("div",{key:R},$))}if(A==="unslick"){var Be="regular slider "+(this.props.className||"");return t.default.createElement("div",{className:Be},le)}else we.length<=A.slidesToShow&&!A.infinite&&(A.unslick=!0);return t.default.createElement(n.InnerSlider,u({style:this.props.style,ref:this.innerSliderRefHandler},(0,o.filterSettings)(A)),we)}}]),M}(t.default.Component)})(Oh);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(Oh);function n(r){return r&&r.__esModule?r:{default:r}}e.default=t.default})(Ph);const V3=Tf(Ph),tc=S.div`
  max-width: 100%;
  overflow: hidden;
  cursor: text;
  user-select: text;
  @media(max-width: 780px){
    margin: 0 auto;
  }
`,G3=S.div`
  max-width: 100%;
  @media(max-width: 780px){
    max-width: 93%;
    margin: 0 auto;
  }
`,nc=S.header`
  position: relative;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
`,rc=S.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; 
`,K3=S.div`
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
`,ic=S.h1`
  font-size: 2.5rem;
  font-weight: bold;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,Ps=S.h2`
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
`,q3=S.div`
  width: 100%;
  overflow: visible;
  padding: 0 50px;
  margin-top: 5%;
  margin-bottom: 3%;
  @media(max-width: 780px){
    margin-top: 12%;
    padding: 0 30px;
  }
`,Y3=S.div`
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
`,X3=Er`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`,Os=S.img`
  height: 35vh;
  cursor: pointer;
  width: 97%;
  object-fit: cover;
  margin-bottom: 1%;
`,Z3=S.div`
  display: flex;
  animation: ${X3} 15s linear infinite;
`,gf=S.div`
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
`,vf=S.img`
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
`,xf=S.div`
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
`,J3=S.div`
  padding: 20px;
  max-width: 90%;
  margin: 0 auto;
  display: flex; 
  flex-direction: column;
`,ew=S.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`,tw=S.div`
  padding: 15px 0;
`,nw=S.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`;S.div`
  display: flex;
  justify-content: space-between;
  color: #7d7d7d;
  font-size: 0.9rem;
  margin-bottom: 10px;
`;const rw=S.p`
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
`,iw=S.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  padding: 10% 0;
  @media (max-width: 780px) {
    flex-direction: column-reverse; 
  }
`,ow=S.img`
  width: 250px;
  height: auto;
  @media (max-width: 780px) {
    margin-right:43%;
    width: 170px;
    margin-top: 5%;
  }
`,lw=S.div`
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
`,sw=S.p`
  line-height: 1.7;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  @media(max-width: 780px){
    line-height: 1.65;
    font-size: 1.35rem;
  }
`,aw=S.p`
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
`,Ga=S.div`
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
`,um=S.a`
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
`,uw=S.a`
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
`,Ka=S.div`
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
`,cw=S.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
  text-align: center;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,dw=S.div`
  margin-bottom: 20px;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,fw=S.h3`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,pw=S.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,hw="/assets/ball-RuGWw7hf.svg",mw="/assets/ball2-_4ZmxEbj.svg",vo="/assets/cat-B7n9BXOC.svg",cm="/assets/cat2-DFpCBDnE.svg",gw="/assets/quantum2-Z_9Fj8HX.svg",vw="/assets/window-BGzfOsee.svg",xw=S.div`
    margin-top: -5%;
    padding-top: 5%;
    background-color: #eee;
`,dm=S.div`
    height: 320vh;
    max-height: 320vh;
    margin-top: -5%;
    margin-bottom: 20%;
    padding-top: 5%;
    background-color: #eee;

`,fm=S.div`
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
`,yw=S.div`
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
`;S.div`
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
`;S.div`
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
`;const qa=S.button`
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
`,pm=S.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 2%;
    top: 2%;
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
`,ww=S.div`
  margin: 0px 13% 3% 13%;
  display: flex;
  flex-direction: row;
  @media(max-width: 780px){
    margin: 0px 5% 3% 5%;
  }
`,Sw=S.div`
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
`,jw=S.p`
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
`,kw=Er`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,bw=S.img`
  max-width: 33%;
  animation: ${kw} 8s linear infinite;
  @media(max-width: 800px){
    max-width: 60%;
  }
`,yf=S.button`
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
`,Cw=()=>{k.useState(!1);const e=rt(),[t,n]=k.useState([]),r=i=>{t.includes(i)?n(t.filter(o=>o!==i)):n([...t,i])};return l.jsxs(xw,{children:[l.jsxs(yw,{style:{marginBottom:"0px"},children:[l.jsx("h1",{children:"양자 개념"}),l.jsx("hr",{}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${t.includes(0)?"active":""}`,onClick:()=>r(0),children:[l.jsx("span",{children:"양자란 ?"}),l.jsx("span",{children:t.includes(0)?"▲":"▼"})]}),t.includes(0)&&l.jsxs("div",{className:"accordion-content",children:[l.jsxs("p",{children:["양자란, 더 이상 나눌 수 없는 에너지의 최소량의 단위입니다. 쉽게 말해, ",l.jsx("span",{style:{fontFamily:"Arial",color:"#B0E3FF"},children:"우리가 에너지를 가장 작은 단위로 쪼개면 그 단위를 양자"}),"라고 부릅니다. 처음으로 양자는 빛에서 발견되었으며, 이 작은 에너지가 어떻게 움직이는지 연구하는 것이 바로 양자 물리학, 양자 역학의 시작입니다."]}),l.jsx("div",{style:{textAlign:"center",height:"auto"},children:l.jsx(bw,{src:gw})})]})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${t.includes(1)?"active":""}`,onClick:()=>r(1),children:[l.jsx("span",{children:"양자역학이란 ?"}),l.jsx("span",{children:t.includes(1)?"▲":"▼"})]}),t.includes(1)&&l.jsx("div",{className:"accordion-content",children:l.jsxs("p",{children:["양자역학은 ",l.jsx("span",{style:{fontFamily:"Arial",color:"#B0E3FF"},children:"원자와 전자 같은 매우 작은 입자들이 작용하는 방식을 설명하는 이론"}),"으로, 양자역학은 양자라는 에너지의 최소 단위를 포함한 아주 작은 입자들(전자, 광자 등)의 행동과 상호작용을 연구하는 물리학의 한 분야입니다. 이는 입자들이 고전 물리학의 법칙을 따르지 않고, 파동과 입자 성질을 동시에 가지며, 불확정성과 중첩 등의 독특한 성질을 나타내는 현상들을 설명합니다."]})})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${t.includes(2)?"active":""}`,onClick:()=>r(2),children:[l.jsx("span",{children:"불확정성의 원리"}),l.jsx("span",{children:t.includes(2)?"▲":"▼"})]}),t.includes(2)&&l.jsxs("div",{className:"accordion-content",children:[l.jsx("h1",{style:{marginBottom:"1%",color:"#eee"},children:'"입자의 위치나 운동량을 동시에 정확하게 알 수 없다"'}),l.jsx("hr",{style:{border:"none",borderTop:"0.5px solid #ddd"}}),l.jsxs("p",{children:["하이젠베르크라는 물리학자는 실험을 통해, 우리가 아무리 정밀한 장비를 사용하더라도 입자의 위치를 알면 그 입자의 속도를 정확히 알 수 없고, 반대로 속도를 알면 위치를 정확히 알 수 없다는 것을 발견했습니다. 이는 마치",l.jsx("span",{style:{fontFamily:"Arial",color:"#B0E3FF"},children:" 우리가 축구공을 발로 찬 후에 그 공의 정확한 위치와 속도를 동시에 파악하기 어려운 것"}),"과 비슷합니다."]}),l.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",gap:"10%",height:"auto"},children:[l.jsx("img",{src:mw,style:{width:"100px",minWidth:"20%"},alt:"Ball"}),l.jsx("img",{src:hw,style:{width:"100px",minWidth:"15%"},alt:"Ball"})]})]})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${t.includes(3)?"active":""}`,onClick:()=>r(3),children:[l.jsx("span",{children:"양자 중첩(슈뢰딩거의 고양이)"}),l.jsx("span",{children:t.includes(3)?"▲":"▼"})]}),t.includes(3)&&l.jsxs("div",{className:"accordion-content",children:[l.jsxs("p",{children:["슈뢰딩거의 고양이는 양자역학의 개념을 설명하기 위해 1935년 오스트리아의 물리학자 ",l.jsx("span",{style:{fontFamily:"Arial",color:"#B0E3FF"},children:"에르빈 슈뢰딩거"}),"가 제안한 사고 실험입니다. 이 실험은 양자역학의 중첩 상태와 그로 인한 철학적 문제를 쉽게 설명하기 위한 것입니다. 특히 양자역학의 코펜하겐 해석을 이해하는 데 중요한 역할을 합니다."]}),l.jsx("div",{style:{textAlign:"center"},children:l.jsx(yf,{style:{cursor:"pointer"},onClick:i=>e("/cat"),children:" 고양이 보러가기"})})]})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${t.includes(4)?"active":""}`,onClick:()=>r(4),children:[l.jsx("span",{children:"파동 함수 붕괴"}),l.jsx("span",{children:t.includes(4)?"▲":"▼"})]}),t.includes(4)&&l.jsxs("div",{className:"accordion-content",children:[l.jsx("h1",{style:{marginBottom:"1%",color:"#eee"},children:"중첩 상태가 관측되었을 때, 그 상태가 하나로 확정되는 과정"}),l.jsx("hr",{style:{border:"none",borderTop:"0.5px solid #ddd"}}),l.jsxs("p",{children:["양자 물체는 여러 상태가 동시에 존재할 수 있는데, 이 상태를 기술하는 것이 ",l.jsx("span",{style:{fontFamily:"Arial",color:"#B0E3FF"},children:"파동 함수"}),"입니다. 여러 상태가 있더라도 외부에서 관측을 하면 파동 함수가 붕괴하면서 입자는 하나의 확정된 상태로 변화합니다. 파동 함수 붕괴는 양자 중첩 상태에 있는 입자가 관측되었을 때 하나의 확정된 상태로 변하는 과정입니다. 양자 시스템은 여러 상태(중첩 상태)로 존재할 수 있지만, 누군가 그 시스템을 관측하는 순간, 그 시스템은 중첩된 여러 상태 중 하나로 결정됩니다. 이를 파동 함수가 붕괴했다고 표현합니다."]}),l.jsxs(jw,{children:[l.jsx("img",{src:vo,alt:"cat",style:{maxWidth:"40%"}})," ",l.jsx("img",{src:cm,alt:"cat2",style:{minWidth:"19%",width:"177px",marginBottom:"0px"}})]}),l.jsx("p",{style:{marginTop:"5%"},children:"파동 함수 붕괴는 슈뢰딩거의 고양이에서 상자를 열고 난 후에 발생하는 과정으로 이해할 수 있습니다."})]})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${t.includes(5)?"active":""}`,onClick:()=>r(5),children:[l.jsx("span",{children:"파동-입자 이중성"}),l.jsx("span",{children:t.includes(5)?"▲":"▼"})]}),t.includes(5)&&l.jsxs("div",{className:"accordion-content",children:[l.jsxs("p",{children:["양자역학의 중요한 개념 중 하나는 ",l.jsx("span",{style:{fontFamily:"Arial",color:"#B0E3FF"},children:"파동-입자 이중성"}),"입니다. 이는 빛과 물질이 파동과 입자 두 가지 성질을 동시에 가진다는 것입니다. 예를 들어, 전자는 파동처럼 간섭 패턴을 만들 수 있지만, 입자처럼 공간에서 특정 위치에 있을 수 있습니다. 파동-입자 이중성은 물질과 빛이 파동과 입자의 성질을 동시에 가진다는 개념입니다."]}),l.jsxs(Sw,{children:[l.jsx("div",{style:{flex:"1 1 40%",textAlign:"center"},children:l.jsx("img",{src:vw})}),l.jsx("div",{style:{flex:"1 1 60%",textAlign:"left"},children:l.jsx("p",{children:'빛을 생각해봅시다. 빛은 우리가 매일 접하는 것인데, 고전적인 관점에서 보면 빛은 파동처럼 퍼지며, 렌즈를 통과해 굴절되고 반사되기도 합니다. 예를 들어, 햇빛이 창문을 통해 들어올 때, 그 빛은 창문에서 굴절되고 반사되어 방 안에 퍼집니다. 이때 빛은 파동처럼 행동합니다. 그러나 빛을 어두운 방에서 레이저 포인터로 쏘면 그 레이저 포인터는 특정한 지점에만 빛이 도달하는 것을 볼 수 있습니다. 이때 빛은 마치 총알처럼 특정한 점에 도달하는 "입자"처럼 행동합니다. 이처럼, 빛은 파동처럼 창문에서 굴절되고 퍼질 수 있지만, 특정 조건에서는 입자처럼 특정한 지점에 정확히 도달하는 두 가지 성질을 동시에 가집니다.'})})]})]})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${t.includes(6)?"active":""}`,onClick:()=>r(6),children:[l.jsx("span",{children:"양자 얽힘"}),l.jsx("span",{children:t.includes(6)?"▲":"▼"})]}),t.includes(6)&&l.jsxs("div",{className:"accordion-content",children:[l.jsxs("p",{children:["양자 얽힘은 ",l.jsx("span",{style:{fontFamily:"Arial",color:"#B0E3FF"},children:"두 개 이상의 입자가 서로 강하게 연결되어 있는 상태"}),"를 말합니다. 얽힌 입자들은 멀리 떨어져 있어도 얽혀 있어, 서로의 상태에 영향을 미칠 수 있습니다."]}),l.jsx("p",{children:'양자 얽힘에서는 두 입자가 얽힌 상태에 있으면, 한 입자의 상태가 결정되는 순간 다른 입자의 상태도 그에 맞춰 즉각적으로 결정됩니다. 얽힘 상태에서는 물리적으로 떨어져 있어도 정보가 "순간적으로" 전해지는 것처럼 보입니다.'}),l.jsx("div",{style:{textAlign:"center"},children:l.jsx(yf,{style:{cursor:"pointer"},onClick:i=>e("/coinentanglement"),children:" 예시 보기"})})]})]})]}),l.jsxs(ww,{children:[l.jsx(um,{href:"/industry",rel:"양자정보기술 백서",style:{marginRight:"2%"},children:"양자정보기술 백서"}),l.jsx(uw,{href:"/QuantumTimeline",rel:"양자타임라인",children:"양자 타임라인"})]})]})};function Ew(){return l.jsx(l.Fragment,{children:l.jsx(Cw,{})})}const Dl=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 160vh;
  max-height: 160vh;
  margin-top: -15%;
  margin-bottom: -10%;
  background-color: #eee;
    @media (max-width: 700px) {
    margin-top:-50%;
    }
`,oc=S.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
    @media (max-width: 700px) {
    margin-left:3%;
    font-size:18px;
    padding:10px;
    }
`,wr=S.button`
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

`,lc=S.div`
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
`;S.div`
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
`;const sc=S.div`
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
      margin-top:10%;

      img
      {
        height:300px;
      }
    }
`,tr=S.button`
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

`,ac="/assets/sad-BYYytyiN.svg",_w=()=>{const e=[{question:"양자 얽힘 현상은 거리에 상관없이 두 입자가 서로 연결된 상태를 유지하는 것을 의미한다.",correctAnswer:"O",explanation:"양자 얽힘은 두 입자가 멀리 떨어져 있어도 서로의 상태가 연관된 상태를 유지하는 현상입니다. 한 입자의 상태가 변하면 즉시 다른 입자의 상태도 변합니다."},{question:"불확정성의 원리를 최초로 밝힌 사람은 하이젠베르크이다",correctAnswer:"O",explanation:"불확정성의 원리를 최초로 밝힌 사람은 하이젠베르크이다"},{question:"진인프라의 설립일은 2006년 5월 4일이다.",correctAnswer:"O",explanation:"진인프라의 설립일은 2006년 5월 4일이다."},{question:"양자란 화학 원소로서의 특성을 잃지 않는 범위에서 도달할 수 있는 물질의 기본적인 최소입자이다.",correctAnswer:"X",explanation:'해당 설명은 "원자"에 대한 설명으로, 양자란 더 이상 나눌 수 없는 에너지의 최소량의 단위이다'},{question:"양자 컴퓨터는 모든 문제를 일반 컴퓨터보다 빠르게 해결할 수 있다.",correctAnswer:"X",explanation:" 양자 컴퓨터는 특정한 문제, 특히 복잡한 최적화 문제나 암호 해독 등에서 더 뛰어난 성능을 발휘합니다. "},{question:"슈뢰딩거의 고양이 실험에서 고양이는 살았다.",correctAnswer:"X",explanation:'양자역학의 해석에 따르자면 고양이의 생사 여부를 확인해보기 전까지는 고양이의 상태를 살아있으면서도 동시에 죽어있는 상태라고 규정하기 때문에 정답은 "알 수 없다"이다.'}],[t,n]=k.useState(0),[r,i]=k.useState(0),[o,s]=k.useState(!1),[a,u]=k.useState(""),[c,h]=k.useState(""),[f,g]=k.useState(!1),x=v=>{const j=e[t];let p;v===j.correctAnswer?(i(r+1),u("정답입니다!"),p=1e3,h("")):(u("오답입니다!"),h(j.explanation),p=4e3),s(!0),setTimeout(()=>{s(!1),t<e.length-1?n(t+1):g(!0)},p)},y=rt();return l.jsx(Dl,{children:f?l.jsxs(sc,{children:[l.jsx("h2",{children:"퀴즈 완료!"}),l.jsxs("p",{children:["총 ",l.jsxs("span",{style:{color:"#0015ff"},children:[e.length,"문제"]})," 중 ",l.jsxs("span",{style:{color:"#0015ff"},children:[r,"문제"]})," 맞추셨습니다."]}),r<4?l.jsx("img",{src:ac,alt:"Genie1"}):l.jsx("img",{src:hr,alt:"Genie2"}),l.jsx(tr,{onClick:()=>y("/quizmain"),children:" 처음으로 "})]}):l.jsxs(l.Fragment,{children:[l.jsx(oc,{children:e[t].question}),l.jsxs("div",{children:[l.jsx(wr,{onClick:()=>x("O"),children:"O"}),l.jsx(wr,{onClick:()=>x("X"),children:"X"})]}),o&&l.jsxs(lc,{children:[l.jsx("p",{children:a}),c&&l.jsx("small",{children:c})]})]})})};function Pw(){return l.jsx(l.Fragment,{children:l.jsx(_w,{})})}const Ow=()=>{const e=rt();return l.jsxs(Dl,{children:[l.jsx(tr,{onClick:()=>e("/quiz"),children:" 기초 퀴즈"}),l.jsx(tr,{onClick:()=>e("/medium"),children:" 중급 퀴즈"}),l.jsx(tr,{onClick:()=>e("/advanced"),children:" 고급 퀴즈"})]})};function Tw(){return l.jsx(l.Fragment,{children:l.jsx(Ow,{})})}const Iw=()=>{const e=[{question:"양자 얽힘 상태에 있는 두 입자는 한 입자의 상태가 바뀌면 즉시 다른 입자의 상태도 바뀐다.",correctAnswer:"O",explanation:"양자 얽힘은 두 입자가 서로 먼 거리에 떨어져 있어도 서로 연결된 상태를 유지하는 현상입니다. 한 입자의 상태가 변화하면 즉시 다른 입자의 상태도 바뀝니다. "},{question:"불확정성 원리는 입자의 위치와 속도를 동시에 정확히 측정할 수 있다는 이론이다",correctAnswer:"X",explanation:"불확정성 원리는 입자의 위치와 속도를 동시에 정확히 측정할 수 없다는 원리입니다. 위치를 정확히 알수록 속도에 대한 정보는 불확실해집니다."},{question:"양자 상태는 외부 관측이 이루어지면 즉시 붕괴된다.",correctAnswer:"O",explanation:"양자 상태는 관측에 의해 결정됩니다. 관측이 이루어지면 입자의 상태가 고정되어 양자 중첩 상태는 붕괴됩니다."},{question:"양자 터널링은 입자가 에너지를 충분히 갖고 있을 때만 장벽을 통과할 수 있는 현상이다.",correctAnswer:"X",explanation:"양자 터널링은 입자가 에너지 장벽을 넘을 수 없을 때도 통과하는 현상입니다. 이는 고전적인 물리학으로 설명할 수 없는 양자적 현상입니다."},{question:"양자 얽힘을 이용하면 정보를 빛의 속도보다 빠르게 전달할 수 있다",correctAnswer:"X",explanation:"양자 얽힘은 입자의 상태 변화를 즉시 반영하지만, 이를 통해 실제 정보를 빛의 속도보다 빠르게 전달할 수는 없습니다."},{question:"양자역학에서 파동함수는 입자의 위치를 정확히 예측해준다",correctAnswer:"X",explanation:"파동함수는 입자의 위치를 정확히 예측하는 것이 아니라, 입자가 특정 위치에 있을 확률을 나타냅니다."}],[t,n]=k.useState(0),[r,i]=k.useState(0),[o,s]=k.useState(!1),[a,u]=k.useState(""),[c,h]=k.useState(""),[f,g]=k.useState(!1),x=v=>{const j=e[t];let p;v===j.correctAnswer?(i(r+1),u("정답입니다!"),h(""),p=1e3):(u("오답입니다!"),h(j.explanation),p=5e3),s(!0),setTimeout(()=>{s(!1),t<e.length-1?n(t+1):g(!0)},p)},y=rt();return l.jsx(Dl,{children:f?l.jsxs(sc,{children:[l.jsx("h2",{children:"퀴즈 완료!"}),l.jsxs("p",{children:["총 ",l.jsxs("span",{style:{color:"#0015ff"},children:[e.length,"문제"]})," 중 ",l.jsxs("span",{style:{color:"#0015ff"},children:[r,"문제"]})," 맞추셨습니다."]}),r<4?l.jsx("img",{src:ac,alt:"Genie1"}):l.jsx("img",{src:hr,alt:"Genie2"}),l.jsx(tr,{onClick:()=>y("/quizmain"),children:" 처음으로 "})]}):l.jsxs(l.Fragment,{children:[l.jsx(oc,{children:e[t].question}),l.jsxs("div",{children:[l.jsx(wr,{onClick:()=>x("O"),children:"O"}),l.jsx(wr,{onClick:()=>x("X"),children:"X"})]}),o&&l.jsxs(lc,{children:[l.jsx("p",{children:a}),c&&l.jsx("small",{children:c})]})]})})};function zw(){return l.jsx(l.Fragment,{children:l.jsx(Iw,{})})}const Lw=()=>{const e=[{question:"양자 게이트는 고전적인 논리 게이트와 동일한 방식으로 동작한다",correctAnswer:"X",explanation:"양자 게이트는 큐비트의 상태를 변화시키는 양자 연산을 수행하며, 고전적인 논리 게이트와는 다른 방식으로 동작합니다."},{question:"양자 컴퓨터는 오류가 발생할 가능성이 고전 컴퓨터보다 높다.",correctAnswer:"O",explanation:"양자 컴퓨터는 큐비트의 민감한 상태 때문에 오류가 발생할 가능성이 높습니다. 이를 해결하기 위해 오류 정정 기술이 연구되고 있습니다."},{question:"양자 상태의 코히런스(coherence)는 환경과의 상호작용에 의해 손실되며, 이는 양자 디코히런스(decoherence)라고 불린다.",correctAnswer:"O",explanation:"코히런스는 양자 상태가 다른 상태들과 정렬된 특성을 말합니다.환경과의 상호작용에 의해 이 정렬이 깨지면 디코히런스가 발생하여 양자 상태의 정보를 잃게 됩니다."},{question:"양자 컴퓨터의 성능은 큐비트의 개수에 비례하여 선형적으로 증가한다",correctAnswer:"X",explanation:"큐비트가 추가될수록 양자 컴퓨터의 성능은 기하급수적으로 증가하며, 선형적으로 증가하는 것이 아닙니다."},{question:"양자 컴퓨터에서 큐비트의 상태를 측정하는 것은 양자 얽힘을 유지한 채로 이루어질 수 있다.",correctAnswer:"X",explanation:"큐비트의 상태를 측정하면 양자 얽힘 상태가 붕괴됩니다. 얽힌 상태에서는 측정이 이루어지면 더 이상 얽힌 상태를 유지할 수 없습니다. "},{question:"양자 상호작용에서는 양자 터널링 효과를 이용해 에너지 장벽을 넘지 않고도 전자가 이동할 수 있다.",correctAnswer:"O",explanation:' 양자 터널링은 고전 물리학적으로 넘을 수 없는 에너지 장벽을 양자역학적으로 입자가 "통과"할 수 있는 현상입니다. 이 현상은 반도체와 같은 분야에서도 중요한 역할을 합니다.'}],[t,n]=k.useState(0),[r,i]=k.useState(0),[o,s]=k.useState(!1),[a,u]=k.useState(""),[c,h]=k.useState(""),[f,g]=k.useState(!1),x=v=>{const j=e[t];let p;v===j.correctAnswer?(i(r+1),u("정답입니다!"),h(""),p=1e3):(u("오답입니다!"),h(j.explanation),p=5e3),s(!0),setTimeout(()=>{s(!1),t<e.length-1?n(t+1):g(!0)},p)},y=rt();return l.jsx(Dl,{children:f?l.jsxs(sc,{children:[l.jsx("h2",{children:"퀴즈 완료!"}),l.jsxs("p",{children:["총 ",l.jsxs("span",{style:{color:"#0015ff"},children:[e.length,"문제"]})," 중 ",l.jsxs("span",{style:{color:"#0015ff"},children:[r,"문제"]})," 맞추셨습니다."]}),r<5?l.jsx("img",{src:ac,alt:"Genie1"}):l.jsx("img",{src:hr,alt:"Genie2"}),l.jsx(tr,{onClick:()=>y("/quizmain"),children:" 처음으로 "})]}):l.jsxs(l.Fragment,{children:[l.jsx(oc,{children:e[t].question}),l.jsxs("div",{children:[l.jsx(wr,{onClick:()=>x("O"),children:"O"}),l.jsx(wr,{onClick:()=>x("X"),children:"X"})]}),o&&l.jsxs(lc,{children:[l.jsx("p",{children:a}),c&&l.jsx("small",{children:c})]})]})})};function Rw(){return l.jsx(l.Fragment,{children:l.jsx(Lw,{})})}const hm="/assets/idq-D5yb6MGO.svg",mm="/assets/ibm-CNkfYoK9.svg",gm="/assets/dwave-KW-mNalY.svg",ul="data:image/svg+xml,%3csvg%20width='1920'%20height='1080'%20viewBox='0%200%201920%201080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_22_433)'%3e%3crect%20width='1080'%20height='1920'%20transform='matrix(0%20-1%201%200%200%201080)'%20fill='%230B212E'/%3e%3cg%20filter='url(%23filter0_f_22_433)'%3e%3ccircle%20cx='1713.5'%20cy='132.5'%20r='449.5'%20transform='rotate(-90%201713.5%20132.5)'%20fill='%23909BA4'/%3e%3c/g%3e%3cg%20filter='url(%23filter1_f_22_433)'%3e%3ccircle%20cx='211.5'%20cy='129.5'%20r='449.5'%20transform='rotate(-90%20211.5%20129.5)'%20fill='%230B212E'/%3e%3c/g%3e%3cg%20filter='url(%23filter2_f_22_433)'%3e%3ccircle%20cx='964.5'%20cy='1006.5'%20r='449.5'%20transform='rotate(-90%20964.5%201006.5)'%20fill='%230B212E'%20fill-opacity='0.2'/%3e%3c/g%3e%3cg%20filter='url(%23filter3_f_22_433)'%3e%3ccircle%20cx='628.5'%20cy='662.5'%20r='449.5'%20transform='rotate(-90%20628.5%20662.5)'%20fill='%230B212E'%20fill-opacity='0.6'/%3e%3c/g%3e%3cg%20filter='url(%23filter4_f_22_433)'%3e%3ccircle%20cx='1301.5'%20cy='398.5'%20r='449.5'%20transform='rotate(-90%201301.5%20398.5)'%20fill='%230B212E'/%3e%3c/g%3e%3ccircle%20cx='1514'%20cy='189'%20r='24'%20fill='%2318A8FB'/%3e%3cg%20filter='url(%23filter5_f_22_433)'%3e%3ccircle%20cx='1538.5'%20cy='870.5'%20r='449.5'%20transform='rotate(-90%201538.5%20870.5)'%20fill='%23394F5C'/%3e%3c/g%3e%3ccircle%20cx='303'%20cy='530'%20r='14'%20fill='%23B2E3FF'/%3e%3ccircle%20cx='1474'%20cy='615'%20r='48'%20fill='%2318A8FB'%20fill-opacity='0.08'/%3e%3ccircle%20cx='1474'%20cy='615'%20r='23.2727'%20fill='%230E2938'%20stroke='%2318A8FB'%20stroke-width='2.90909'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_22_433'%20x='764'%20y='-817'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter1_f_22_433'%20x='-738'%20y='-820'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter2_f_22_433'%20x='15'%20y='57'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter3_f_22_433'%20x='-321'%20y='-287'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter4_f_22_433'%20x='352'%20y='-551'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cfilter%20id='filter5_f_22_433'%20x='589'%20y='-79'%20width='1899'%20height='1899'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='250'%20result='effect1_foregroundBlur_22_433'/%3e%3c/filter%3e%3cclipPath%20id='clip0_22_433'%3e%3crect%20width='1080'%20height='1920'%20fill='white'%20transform='matrix(0%20-1%201%200%200%201080)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",vm="/assets/rigetti-B38wHO1L.svg",xm="/assets/honeywell-DtZFAC9P.svg",ym="/assets/google-D4sFVtJt.svg",wm="/assets/microsoft-pU5O44ch.svg",Sm="/assets/jininfra-BFpSQJ6H.svg",jm="/assets/intel-D1wbAq3Q.svg",km="/assets/alibaba-Dbpd8-e1.svg",Nw="/assets/banner1-ghMK8vM5.svg",Mw="/assets/banner2-IBbiRC_e.svg",Fw="/assets/banner3-4obiNHZT.svg",Dw=()=>{const e=rt(),t=[{title:"IBM",subtitle:"IBM Quantum은 클라우드 기반 양자 컴퓨팅 서비스로, 개발자와 연구자들에게 실용적인 양자 컴퓨팅을 제공합니다.",imgSrc:mm,route:"ibm"},{title:"D-Wave",subtitle:"D-Wave는 양자 어닐링(annealing) 기반 시스템을 제공하며, 최적화 문제 해결에 특화된 양자 컴퓨터를 개발합니다.",imgSrc:gm,route:"dwave"},{title:"Rigetti Computing",subtitle:"Rigetti Computing은 양자 회로 기반 시스템을 개발하며, 하이브리드 양자-클래식 컴퓨팅을 통해 양자 컴퓨팅을 상용화하려고 합니다.",imgSrc:vm,route:"rigetti"},{title:"Honeywell",subtitle:"Honeywell Quantum Solutions는 이온 트랩 기술을 사용한 양자 컴퓨터를 개발하여 정밀한 양자 계산을 제공합니다.",imgSrc:xm,route:"honeywell"},{title:"Google",subtitle:"Google Quantum AI는 시너지 효과를 노리며, 인공지능과 양자 컴퓨팅의 결합을 통해 양자 우월성을 목표로 연구 중입니다.",imgSrc:ym,route:"google"},{title:"Microsoft",subtitle:"Microsoft는 Azure Quantum 플랫폼을 통해 클라우드 기반 양자 컴퓨팅 서비스와 도구를 제공하며, 트래픽슘 기반의 양자 컴퓨터를 개발 중입니다.",imgSrc:wm,route:"microsoft"},{title:"Intel",subtitle:"Intel은 양자 컴퓨팅 하드웨어와 소프트웨어 생태계를 구축하고 있으며, 상용화 가능한 양자 프로세서를 개발 중입니다.",imgSrc:jm,route:"intel"},{title:"Alibaba",subtitle:"Alibaba는 클라우드 기반의 양자 컴퓨팅 서비스를 제공하며, 양자 암호화 및 인공지능 연구에 집중하고 있습니다.",imgSrc:km,route:"alibaba"},{title:"JinInfra",subtitle:"JinInfra는 양자 네트워크 인프라와 보안 솔루션을 개발하여 양자 통신 기술 상용화에 주력하고 있습니다.",imgSrc:Sm,route:"jininfra"},{title:"IDQ",subtitle:"IDQ는 양자 키 분배(QKD) 기반 보안 솔루션을 제공하며, 양자 암호화 및 통신 보안 기술을 연구하고 있습니다.",imgSrc:hm,route:"idq"}],n=k.useRef(null),r=u=>{e(`/business/${u.toLowerCase()}`)},i={dots:!0,infinite:!1,speed:500,slidesToShow:1,centerMode:!0,centerPadding:"30px"},o=()=>{n.current&&n.current.slickPause()},s=()=>{n.current&&n.current.slickPlay()},a=u=>{e(`/company/${u}`)};return l.jsxs(tc,{children:[l.jsxs(nc,{children:[l.jsx(rc,{src:ul,alt:"banner image"}),l.jsx(ic,{children:"양자 관련 주요 기업들"}),l.jsx(K3,{children:l.jsx(Ox,{style:{margin:"0 auto"},size:24})})]}),l.jsx(Ps,{style:{marginTop:"5%"},children:"주요 기업들"}),l.jsx(q3,{children:l.jsxs(Z3,{onMouseEnter:o,onMouseLeave:s,children:[t.map((u,c)=>l.jsxs(gf,{onClick:()=>a(u.route),children:[l.jsx(vf,{src:u.imgSrc,alt:u.title}),l.jsxs(xf,{children:[l.jsx("p",{className:"title",children:u.title}),l.jsx("p",{className:"subtitle",children:u.subtitle})]})]},c)),t.map((u,c)=>l.jsxs(gf,{children:[l.jsx(vf,{src:u.imgSrc,alt:u.title}),l.jsxs(xf,{children:[l.jsx("p",{className:"title",children:u.title}),l.jsx("p",{className:"subtitle",children:u.subtitle})]})]},c+t.length))]})}),l.jsxs("div",{style:{padding:"50px 0"},children:[l.jsx(Ps,{children:"About"}),l.jsxs(J3,{children:[l.jsx(ew,{src:ul,alt:"Nusantara Image"}),l.jsxs(tw,{children:[l.jsx(nw,{children:"Jininfra"}),l.jsxs(rw,{children:[l.jsx("p",{children:"진인프라는 ICT 및 클라우드 기술을 중심으로 다양한 서비스를 제공하는 기업으로,"}),l.jsx("p",{children:"주요 사업 분야로는 네트워크 구축, 클라우드 솔루션, 정보보안, 유지보수 서비스, e-커머스, 그리고 공사 관련 솔루션이 있습니다. "})]})]})]})]}),l.jsx(Ps,{children:"양자 사업 소개"}),l.jsx(Y3,{children:l.jsxs(V3,{ref:n,...i,children:[l.jsxs("div",{onClick:()=>r("Finance"),children:[l.jsx(Os,{src:Nw,alt:"Finance"}),l.jsx("p",{children:"금융"})]}),l.jsxs("div",{onClick:()=>r("Chemistry"),children:[l.jsx(Os,{src:Mw,alt:"Chemistry"}),l.jsx("p",{children:"화학 및 기타 과학"})]}),l.jsxs("div",{onClick:()=>r("Logistics"),children:[l.jsx(Os,{src:Fw,alt:"Logistics"}),l.jsx("p",{children:"물류 및 최적화"})]})]})})]})};function Aw(){return l.jsx(l.Fragment,{children:l.jsx(Dw,{})})}const $w=S.div`
    margin-top: -7%;
    padding-top: 5%;
    background-color: #eee;
`,Bw=S.div`
  padding: 4%;
  max-width: 80%;
  margin-top: 5%;
  margin-bottom: 10%;
  margin-left: 10%;
  border-radius: 0.7vw;
   p{
      font-family: 'Arial', sans-serif;
      font-size: 1.5rem;
      letter-spacing: 0px;
       @media (max-width: 900px) {
          font-size: 1.4rem;
          margin-bottom: 1%;
       }
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
      font-family: 'Arial', sans-serif;
      font-size: 1.5rem;
      letter-spacing: 0px;
       @media (max-width: 900px) {
          font-size: 1.4rem;
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
      h1{
      margin-top: 16%;
      } 
      padding: 4%;
     font-size: 1rem;
    }
}
`,Ww=S.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);  /* 4열 그리드 */
  gap: 20px;  
  margin-top: 3%;
  margin-bottom: 1%;
  padding: 2%;


  @media (max-width: 700px) {
    grid-template-columns: 1fr;  /* 작은 화면에서는 1열로 표시 */
  }
`,Qw=S.div`
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
`,Uw=S.button`
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

`,wf=({articles:e})=>l.jsx(Ww,{children:e.map((t,n)=>l.jsx(Qw,{children:l.jsxs("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",children:[l.jsx("img",{src:t.thumbnail,alt:t.title}),l.jsx("h3",{children:t.title.length>30?`${t.title.slice(0,30)}...`:t.title})]})},n))}),Hw=()=>{const e=[{title:"NIA·IITP, 산·학·연 모아 양자정보 생태계 활성화 모색",thumbnail:"https://image.zdnet.co.kr/2024/12/17/b9decdf81ca08201c6366b2660937a64.jpg",url:"https://zdnet.co.kr/view/?no=20241217104208"},{title:"대전시-노르마-나노종합기술원, 양자컴퓨팅 산업화 맞손",thumbnail:"https://cdn.straightnews.co.kr/news/photo/202412/259942_165071_1349.jpg",url:"https://www.straightnews.co.kr/news/articleView.html?idxno=259942"},{title:"LG유플러스, 양자내성암호 우수표준으로 양자기술 생태계 확장",thumbnail:"https://www.koreaittimes.com/news/photo/202412/137016_85748_3358.jpg",url:"https://www.koreaittimes.com/news/articleView.html?idxno=137016"},{title:'"연구·인증기관 시너지로 양자기술 상용화"…KIST·TTA 맞손',thumbnail:"https://www.news1.kr/_next/image?url=https%3A%2F%2Fi3n.news1.kr%2Fsystem%2Fphotos%2F2024%2F12%2F11%2F7033060%2Fhigh.jpg&w=1920&q=75",url:"https://www.news1.kr/it-science/general-it/5628710"},{title:"노르마, 사우디 IT 기업과 1800만 달러 규모 양자 컴퓨터 공급 계약",thumbnail:"https://cdn.itdaily.kr/news/photo/202412/229403_233998_4838.jpg",url:"http://www.itdaily.kr/news/articleView.html?idxno=229403"},{title:"한컴위드, 양자보안 기술 적용 '한컴 엑스디비 5.0' 출시",thumbnail:"https://cdn.ngetnews.com/news/photo/202412/515870_80059_848.jpg",url:"https://www.ngetnews.com/news/articleView.html?idxno=515870"},{title:"양자 스핀 네마틱 상 존재 최초 관찰···김범준 교수 12월 과기인상",thumbnail:"https://cdn.hellodd.com/news/photo/202412/106255_326904_5924.jpg",url:"https://www.hellodd.com/news/articleView.html?idxno=106255"},{title:"GIST, IBS ‘양자변환연구단’ 킥오프 심포지엄 개최",thumbnail:"https://wimg.heraldcorp.com/news/cms/2024/12/04/news-p.v1.20241204.eee3eba012264377839e53f0b07ff946_P1.jpg",url:"https://biz.heraldcorp.com/article/10008681"}],t=[{title:"제27회 한국양자정보학회 정기워크샵: 양자정보과학기술 대학생 · 대학원생 간담회",thumbnail:"https://askcorp.co.kr/uploaded/summernote/202402/3e9663fb10ed932de5e8167b0164393b.png",url:"https://www.qisk.or.kr/content/conferences/pre_reg_main.php?id=43"},{title:"The Blaise Pascal Quantumn Challenge",thumbnail:"https://qcenter.kr/uploaded/summernote/202412/2e2b8d580d352c16a2f336a9de8c5389.png",url:"https://www.agorize.com/en/challenges/blaisepascalquantumchallenge2025?lang=en"},{title:"제 4회 양자정보과학 겨울학교",thumbnail:"https://qschool.info/wp-content/uploads/2024/12/img_02-2048x1365.png",url:"https://qschool.info/"},{title:"[QisK] 2025 한국양자정보학회 정기학술대회 및 정기총회",thumbnail:"https://qisk.inforang.com/upload/tmp/1732250083_53275900_215561998.jpg",url:"https://www.qisk.or.kr/content/conferences/pre_reg_guide.php?id=40"}],[n,r]=k.useState(null),i=o=>{r(n===o?null:o)};return rt(),l.jsx($w,{children:l.jsxs(Bw,{children:[l.jsx("h1",{children:"양자 기술 동향"}),l.jsx("hr",{}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${n===0?"active":""}`,onClick:()=>i(0),children:[l.jsx("span",{children:"글로벌 시장 동향"}),l.jsx("span",{children:n===0?"▲":"▼"})]}),n===0&&l.jsxs("div",{className:"accordion-content",children:[l.jsx("p",{children:"2023년 기준, 전 세계 양자기술 시장 규모는 약 20.65억 달러로 추산되며, 연평균 22.7%의 성장률을 보일 것으로 예상됩니다."}),l.jsx("br",{}),l.jsxs("p",{children:[l.jsx("span",{style:{color:"#B0E3FF"},children:"미국"}),"에서는 2019년부터 5년간 최대 13억 달러를 양자기술 연구개발에 투자하고 있으며, 국방부와 정보기관, 연구소가 중심이 되어 개발 사업을 본격화하고 있습니다. ",l.jsx("br",{}),l.jsx("br",{}),l.jsx("span",{style:{color:"#B0E3FF"},children:"중국"}),"은 세계 최대 규모의 국립양자정보과학연구소를 설립하고, 2018년부터 2022년까지 ",l.jsx("br",{}),"약 1천억 위안(약 16.5조 원)을 투자하여 양자통신 분야에서 두각을 나타내고 있습니다. ",l.jsx("br",{}),l.jsx("br",{}),l.jsx("span",{style:{color:"#B0E3FF"},children:"유럽연합"}),"에서는 Quantum Flagship' 프로그램을 통해 양자컴퓨팅, 양자통신 등 양자응용연구와 상용화를 추진하고 있으며, 2028년까지 10억 유로를 투자하여 양자 연구 리더십 유지와 산업 경쟁력 향상을 목표로 하고 있습니다."]})]})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${n===1?"active":""}`,onClick:()=>i(1),children:[l.jsx("span",{children:"국내외 정책 동향"}),l.jsx("span",{children:n===1?"▲":"▼"})]}),n===1&&l.jsxs("div",{className:"accordion-content",children:[l.jsx("p",{children:l.jsx("span",{style:{color:"#B0E3FF"},children:"국내 정책"})}),l.jsx("p",{children:"한국 정부는 2021년 '양자기술 연구개발 투자전략'을 수립하여 2030년대 양자 기술 4대 강국 진입을 목표로 중장기 비전을 제시하였습니다."}),l.jsx("br",{}),l.jsx("p",{children:l.jsx("span",{style:{color:"#B0E3FF"},children:"국외 정책"})}),l.jsxs("p",{children:[" 미국, 중국, 유럽 등 주요 국가들은 양자 기술의 전략적 중요성을 인식하고 대규모 투자를 진행하고 있습니다.",l.jsx("br",{}),"미국은 양자과학기술을 미래 게임체인저로 인식하고, 2019년부터 2022년까지 약 4조 원을 투자하여 양자기술 전략화 경쟁의 주도권 확보에 나서고 있습니다.",l.jsx("br",{})," 또한, 양자네트워크 전략 비전을 통해 장기 20년간의 양자네트워크 비전을 제시하였습니다."]})]})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${n===2?"active":""}`,onClick:()=>i(2),children:[l.jsx("span",{children:"양자 기술 R&D 동향"}),l.jsx("span",{children:n===2?"▲":"▼"})]}),n===2&&l.jsxs("div",{className:"accordion-content",children:[l.jsxs("p",{children:["양자 기술의 연구개발은 ",l.jsx("span",{style:{color:"#B0E3FF"},children:"양자 컴퓨팅, 양자 통신, 양자 센싱"})," 등 다양한 분야에서 활발히 진행되고 있습니다.",l.jsx("br",{}),"국내에서는 연세대학교가 127큐비트 성능의 'IBM 퀀텀 시스템 원'을 도입하여 양자 컴퓨팅 연구를 선도하고 있습니다"]}),l.jsx("br",{}),l.jsxs("p",{children:["유럽 주요국은 양자 과학기술 분야에서 공동연구 및 인력교류 등 ",l.jsx("span",{style:{color:"#B0E3FF"},children:"국가 간 협력사업"}),"을 추진하고 있습니다. 이를 통해 양자기술의 발전과 산업화를 촉진하고 있습니다."]}),l.jsx("br",{}),l.jsxs("p",{children:["정부는 국내 산·학·연이 해외 우수 연구기관과 협업할 수 있도록 벨기에에 ",l.jsx("span",{style:{color:"#B0E3FF"},children:"'한-유럽 양자 과학센터'"}),"를 개소하였습니다. 이를 통해 국제 협력을 강화하고 양자 과학기술의 발전을 도모하고 있습니다."]})]})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${n===3?"active":""}`,onClick:()=>i(3),children:[l.jsx("span",{children:"양자 기술 산업 생태계"}),l.jsx("span",{children:n===3?"▲":"▼"})]}),n===3&&l.jsxs("div",{className:"accordion-content",children:[l.jsx("p",{children:"양자 기술 산업 생태계는 기업, 연구기관, 정부 등이 협력하여 발전하고 있습니다."}),l.jsx("br",{}),l.jsxs("p",{children:["국내에서는  ",l.jsx("span",{style:{color:"#B0E3FF"},children:"양자산업생태계지원센터(K-QIC)"}),"가 설립되어 양자 기술 사업화 및 혁신기업 육성, 양자 정보통신 테스트베드 기반 시험·검증 등을 지원하고 있습니다. "]}),l.jsx("br",{}),l.jsxs("p",{children:[" 서울시와 한국과학기술연구원(KIST)은 양자 산업 기반을 구축하기 위해 ",l.jsx("span",{style:{color:"#B0E3FF"},children:"'양자기술 산업전문과정'"}),"을 개설하여 운영하고 있습니다. 이를 통해 양자 기술의 이해와 활용법을 습득하여 연구개발과 사업화를 활성화하고자 합니다."]}),l.jsx("br",{}),l.jsx("p",{children:"이러한 동향은 양자 기술이 미래 산업의 핵심으로 부상하고 있음을 보여주며, 각국의 적극적인 투자와 연구개발이 지속되고 있습니다."})]})]}),l.jsxs("div",{children:[l.jsx("h1",{children:"양자 기술 관련 뉴스"}),l.jsx("hr",{}),l.jsx(wf,{articles:e}),l.jsx("a",{href:"https://www.kqic.kr/main/q_info_tech_whitepaper_2023.pdf",download:"2023 양자정보기술 백서.pdf",children:l.jsx(Uw,{children:"2023 양자정보기술 백서 다운로드 하기 📥"})})]}),l.jsxs("div",{children:[l.jsx("h1",{children:"양자 관련 행사 정보"}),l.jsx("hr",{}),l.jsx(wf,{articles:t})]})]})})};function Vw(){return l.jsx(l.Fragment,{children:l.jsx(Hw,{})})}const Gw=S.div`
    margin-top: -5%;
    padding-top: 5%;
    background-color: #eee;
`,Kw=S.div`
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
      font-family: 'Arial', sans-serif;
      font-size: 1.5rem;
      letter-spacing: 0px;
       @media (max-width: 900px) {
          font-size: 1.4rem;
          margin-bottom: 1%;
       }
    }
       h2{
        margin-top:10px;
        font-size:1.7rem;
        }
      h1{
        font-size:1.9rem;
        color:#eee;
        @media (max-width:900px){
          font-size:1.7rem;}
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
`,bm=S.div`
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

`,Cm=S.div`
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
`,Em=S.div`
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
`,Sf=S.button`
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
`,qw=()=>{const[e,t]=k.useState(null),n=i=>{t(e===i?null:i)},r=rt();return l.jsx(Gw,{children:l.jsxs(Kw,{children:[l.jsx("h1",{children:"양자 활용"}),l.jsx("hr",{}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${e===0?"active":""}`,onClick:()=>n(0),children:[l.jsx("span",{children:"양자 컴퓨터"}),l.jsx("span",{children:e===0?"▲":"▼"})]}),e===0&&l.jsxs("div",{className:"accordion-content",children:[l.jsxs("p",{children:["기존 디지털컴퓨터와는 달리 양자역학의 중첩 상태를 활용한 ",l.jsx("span",{style:{color:"#B0E3FF"},children:"큐비트(Quantum bit)를 기본 단위로  0과 1 두 상태를 동시에 처리할 수 있다."})]}),l.jsx("br",{})," ",l.jsx("p",{children:"이 같은 특성 때문에 양자컴퓨터는 기존 컴퓨터보다 월등한 계산 속도와 연산 처리 능력을 갖는데, 이는 슈퍼컴퓨터보다 1000배 이상 빠른 연산이 가능해 인공지능(AI), 의료·제약, 암호통신 등 다양한 분야에 활용될 수 있다."}),l.jsx("div",{style:{textAlign:"center",marginTop:"3%"},children:l.jsx(Sf,{onClick:i=>r("/computing"),children:" 양자 컴퓨팅과 계산 복잡도 이론"})}),l.jsx("hr",{}),l.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/gjp9301in0U",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${e===1?"active":""}`,onClick:()=>n(1),children:[l.jsx("span",{children:"양자 암호통신"}),l.jsx("span",{children:e===1?"▲":"▼"})]}),e===1&&l.jsxs("div",{className:"accordion-content",children:[l.jsx("p",{children:"양자암호통신 기술은 통신상의 보안을 자연의 기본원리인 양자역학의 법칙에 의해서 보장하므로 도청이나 감청이 절대적으로 불가능한 차세대 통신보안 기술로서 최근 크게 주목받고 있다."}),l.jsx("br",{}),l.jsxs("p",{children:["즉, 양자암호통신 기술은 ",l.jsx("span",{style:{color:"#B0E3FF"},children:"“양자 복제불가능성”"}),"과 같은 양자물리학의 법칙에 기초해서 송신자와 수신자 사이에 암호 키(일회용 난수표)를 절대적으로 안전하게 실시간으로 분배하는 기술로서 ",l.jsx("span",{style:{color:"#B0E3FF"},children:"“양자 키 분배 기술”"}),"로도 알려져 있다."]}),l.jsx("br",{}),l.jsx("hr",{}),l.jsx("h1",{children:"양자 암호화의 유형"}),l.jsx("h2",{children:l.jsx("span",{style:{boxShadow:"inset 0 -20px 0 rgba(90, 158, 207, 0.5)"},children:"양자 키 분배(QKD)"})}),l.jsxs("p",{children:["양자 키 분배(Quantum Key Distribution; QKD) 시스템은 보안 데이터를  ",l.jsx("span",{style:{color:"#B0E3FF"},children:"직접 암호화하는 것이 아니라, 두 사람이 함께 사용할 비밀 키를 안전하게 공유하는 방법이다."})]}),l.jsx("p",{children:"미세한 자극에도 상태가 변하는 양자의 물리적 특성을 활용해 대칭 암호키를 분배하는 기술이다. 제3자가 해킹할 수 없는 암호화된 비밀키를 만들어 보안이 필요한 송신자와 수신자에게 안전하게 공유한다."}),l.jsx("br",{}),l.jsx("h2",{children:l.jsx("span",{style:{boxShadow:"inset 0 -20px 0 rgba(90, 158, 207, 0.5)"},children:"양자내성암호(PQC)"})}),l.jsxs("p",{children:["양자내성암호(Post Quantum Cryptography; PQC)는 양자컴퓨터로도 풀어내는 데 수십억 년이 걸리는 ",l.jsx("span",{style:{color:"#B0E3FF"},children:"복잡한 수학 알고리즘을 사용하는 암호화 방식이다."})]}),l.jsx("br",{}),l.jsx("hr",{}),l.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/fF1cJ5F7ArI?si=9nIUWin5E9jQ6qRT",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${e===2?"active":""}`,onClick:()=>n(2),children:[l.jsx("span",{children:"양자 센서"}),l.jsx("span",{children:e===2?"▲":"▼"})]}),e===2&&l.jsxs("div",{className:"accordion-content",children:[l.jsxs("p",{children:["양자 센서의 기본 원리는  ",l.jsx("span",{style:{color:"#B0E3FF"},children:"센서와 탐지 대상 물체 사이의 상호작용을 통해 발생하는 미세한 양자 위상변화(Quantum Phase Accumulation)를 측정하는 것이다."}),"이때 중첩, 이중성, 얽힘과 같은 미시 세계의 양자역학적 특성들이 측정 기술로 활용된다."]}),l.jsx("br",{}),l.jsx("p",{children:"양자 센싱은 측정 대상과 센서의 종류에 따라 다양하게 분류되며, 일반적으로 큐비트와 같은 양자 시스템을 사용해 시간, 자기장 등의 물리량을 정밀하게 측정한다."}),l.jsx("hr",{}),l.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/jS6fiujLTzo?si=JBji-IeWWDn1tFDX",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${e===3?"active":""}`,onClick:()=>n(3),children:[l.jsx("span",{children:"산업별 양자 기술 활용 사례"}),l.jsx("span",{children:e===3?"▲":"▼"})]}),e===3&&l.jsxs("div",{className:"accordion-content",children:[l.jsxs("p",{children:[l.jsx("span",{style:{color:"#B0E3FF"},children:"1) 의료"}),l.jsx("br",{}),"신약 개발 : 분자의 복잡한 상호작용을 분석해 신약 개발 시간 단축",l.jsx("br",{}),"정밀 진단 : 양자 센서를 활용해 암 조기 진단 및 의료 기기 정밀도 향상"]}),l.jsx("hr",{}),l.jsxs("p",{children:[l.jsx("span",{style:{color:"#B0E3FF"},children:"2) 금융"}),l.jsx("br",{}),"투자 최적화 : 양자 컴퓨팅으로 금융 시장의 복잡한 데이터를 분석 ",l.jsx("br",{}),"거래 보안 강화 : 양자 암호화로 실시간 거래 보호"]}),l.jsx("hr",{}),l.jsxs("p",{children:[l.jsx("span",{style:{color:"#B0E3FF"},children:"3) 기후 및 에너지"}),l.jsx("br",{}),"지속 가능한 에너지 솔루션 : 태양광 및 풍력 발전의 효율성 최적화 ",l.jsx("br",{}),"기후 모델링 : 기후 변화에 대한 정확한 데이터 기반 시뮬레이션"]}),l.jsx("hr",{}),l.jsxs("p",{children:[l.jsx("span",{style:{color:"#B0E3FF"},children:"4) 물류 및 교통"}),l.jsx("br",{}),"최적 경로 계산 : 항공, 선박, 트럭등의 물류 네트워크 최적화를 통한 물류 시스템의 효율성 극대화 ",l.jsx("br",{})]}),l.jsx("hr",{}),l.jsxs("p",{children:[l.jsx("span",{style:{color:"#B0E3FF"},children:"5) 항공우주"}),l.jsx("br",{}),"양자 GPS : 전통적인 GPS보다 수십 배 더 정밀한 위치 추적 가능 ",l.jsx("br",{}),"우주 탐사 : 양자 기반의 초정밀 기기와 통신으로 우주선 운행 효율 향상"]}),l.jsx("hr",{}),l.jsx("div",{style:{textAlign:"center"},children:l.jsx(Sf,{onClick:i=>r("/example"),rel:"산업활용사례 더보기",children:"산업활용사례 더보기"})})]})]}),l.jsxs("div",{className:"accordion-item",children:[l.jsxs("div",{className:`accordion-title ${e===4?"active":""}`,onClick:()=>n(4),children:[l.jsx("span",{children:"미래를 이끌 양자 기술 활용 트랜드"}),l.jsx("span",{children:e===4?"▲":"▼"})]}),e===4&&l.jsxs("div",{className:"accordion-content",children:[l.jsxs("p",{children:[l.jsx("span",{style:{color:"#B0E3FF"},children:"1) 양자 인터넷"}),l.jsx("br",{}),"양자 기술 기반의 초보안 네트워크 : 전 세계 데이터를 안전하게 연결하는 차세대 인터넷 개발"]}),l.jsx("hr",{}),l.jsxs("p",{children:[l.jsx("span",{style:{color:"#B0E3FF"},children:"2) 스마트 시티"}),l.jsx("br",{}),"IoT와 양자의 융합 : 양자 암호화로 스마트 시티의 보안 강화 및 자율주행차와 교통 관리 시스템 최적화"]}),l.jsx("hr",{}),l.jsxs("p",{children:[l.jsx("span",{style:{color:"#B0E3FF"},children:"3) 연구 및 개발"}),l.jsx("br",{}),"양자 컴퓨팅 교육 확대 : 기업과 학계에서 양자 기술 전문인력 양성 ",l.jsx("br",{}),"양자 클라우드 서비스 : IBM과 Google의 양자 컴퓨팅 클라우드 서비스"]}),l.jsx("hr",{})]})]})]})})};function Yw(){return l.jsx(l.Fragment,{children:l.jsx(qw,{})})}const Xw="data:image/svg+xml,%3csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='50'%20cy='50'%20r='50'%20fill='%23F1F5F9'/%3e%3cpath%20d='M48.25%2070C48.25%2070.9665%2049.0335%2071.75%2050%2071.75C50.9665%2071.75%2051.75%2070.9665%2051.75%2070H48.25ZM51.2374%2034.7626C50.554%2034.0791%2049.446%2034.0791%2048.7626%2034.7626L37.6256%2045.8995C36.9422%2046.5829%2036.9422%2047.691%2037.6256%2048.3744C38.309%2049.0578%2039.4171%2049.0578%2040.1005%2048.3744L50%2038.4749L59.8995%2048.3744C60.5829%2049.0578%2061.691%2049.0578%2062.3744%2048.3744C63.0578%2047.691%2063.0578%2046.5829%2062.3744%2045.8995L51.2374%2034.7626ZM51.75%2070L51.75%2036H48.25L48.25%2070H51.75Z'%20fill='%2336597D'/%3e%3c/svg%3e",Zw=S.img`
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
`,Jw=()=>{const e=()=>{window.scrollTo({top:0,behavior:"smooth"})};return l.jsx(l.Fragment,{children:l.jsx(Zw,{onClick:e,src:Xw,alt:"Scroll to top"})})},eS="/assets/message-D6wtI_nO.svg",tS="/assets/flag-DnSs5bf4.svg",nS="data:image/svg+xml,%3csvg%20width='744'%20height='619'%20viewBox='0%200%20744%20619'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_f_0_1)'%3e%3cellipse%20cx='352.58'%20cy='364.807'%20rx='208.58'%20ry='110.044'%20fill='%23FDE598'%20fill-opacity='0.7'/%3e%3c/g%3e%3cg%20filter='url(%23filter1_f_0_1)'%3e%3cellipse%20cx='395.735'%20cy='254.044'%20rx='204.265'%20ry='110.044'%20fill='%236955FF'%20fill-opacity='0.5'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_0_1'%20x='0.151413'%20y='110.915'%20width='704.858'%20height='507.786'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='71.9243'%20result='effect1_foregroundBlur_0_1'/%3e%3c/filter%3e%3cfilter%20id='filter1_f_0_1'%20x='47.6214'%20y='0.151413'%20width='696.227'%20height='507.786'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='71.9243'%20result='effect1_foregroundBlur_0_1'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",rS="/assets/planet-B734ADp0.svg",iS=S.div`
    margin-top: -5%;
    margin-bottom: 10%;
    padding-top: 5%;
    background-color: #eee;

`,oS=S.div`
  max-width: 100%;
  margin-top: 5%;
  border-radius: 0.7vw;
  position: relative;
`,lS=S.div`
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
`,sS=S.div`
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
`,aS=S.img`
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
`,uS=S.div`
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
`,cS=S.img`
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
`,dS=S.div`
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
`,fS=S.div`
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
`;S.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 40%; 
  display: flex;
`;const pS=S.div`
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
`,hS=S.div`
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
`,mS=S.img`
  width: 35%;
  margin-left: 35%;
  @media (max-width: 800px) {
    min-width: 45%;
    max-width: 45%;
    margin-left: 20%;
  }
`,gS=Er`
  from {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
  to {
    transform: translateX(-50%) translateY(-100px);
    opacity: 0;
  }
`,vS=S.img`
  position: fixed;
  margin: 0 auto;
  max-width: 45%;
  display: block;
  z-index: 10000;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.5s ease-out;
  animation: ${e=>e.isdisappearing?bn`${gS} 0.5s forwards`:"none"};
  @media (max-width: 800px) {
    position: fixed;
    max-width: 56%;
    transform: translateX(-50%);
    top: 20%;
  }
`,xS=S.img`
  position: relative;
  margin-top: 10%;
  min-width: 80%;
  max-width: 80%;
  margin-right: 15%;
`,yS=()=>{const[e,t]=k.useState(bt),[n,r]=k.useState(!1),[i,o]=k.useState(!0),[s,a]=k.useState(!1);k.useEffect(()=>{const g=setTimeout(()=>{a(!0)},1e3),x=setInterval(()=>{t(v=>v===bt?hr:bt)},600),y=setTimeout(()=>{r(!0),setTimeout(()=>{o(!1)},1e3),clearInterval(x)},3e3);return()=>{clearTimeout(g),clearTimeout(y),clearInterval(x)}},[]);const[u,c]=k.useState(bt),[h,f]=k.useState(!1);return k.useEffect(()=>{const g=setTimeout(()=>{f(!0)},1e3),x=setInterval(()=>{c(y=>y===bt?hr:bt)},600);return()=>{clearTimeout(g),clearInterval(x)}},[]),l.jsx(l.Fragment,{children:l.jsxs(iS,{children:[l.jsxs(oS,{children:[i&&l.jsx(l.Fragment,{children:l.jsx(vS,{src:e,alt:"Waving Genie",isdisappearing:n})}),l.jsxs(pS,{children:[l.jsxs(dS,{children:[l.jsx("img",{src:nS,alt:"Gradient Background"}),l.jsxs(fS,{children:[l.jsx("h1",{children:"진인프라의"}),l.jsx("h1",{children:"양자 캐릭터"}),l.jsx("h1",{children:"‘지니’"})]})]}),l.jsx(sS,{children:l.jsx(aS,{src:tS,alt:"Flag"})})]}),l.jsxs(hS,{children:[l.jsx(uS,{children:l.jsx(cS,{src:rS,alt:"planet"})}),l.jsxs(lS,{children:[l.jsx("h1",{children:"지니"}),l.jsx("p",{style:{color:"#0000ff"},children:"지니(진인프라의 진+  접사 ‘-이‘)"}),l.jsx("p",{children:"🧬알라딘에 나오는 무엇이든 할 수 있는 캐릭터 지니처럼"}),l.jsx("p",{children:"🔭양자 정보 관련해서는 무엇이든 알려준다는 의미"})]})]})]}),l.jsxs("div",{style:{maxWidth:"50%",display:"flex",flexDirection:"column",marginLeft:"32%",marginTop:"10%"},children:[l.jsx(mS,{src:eS,style:{width:"35%",marginLeft:"40%"}}),l.jsx(xS,{style:{marginLeft:"0",marginTop:"3%",marginBottom:"15%"},src:u,alt:"Waving Genie"})]})]})})};function wS(){return l.jsx(l.Fragment,{children:l.jsx(yS,{})})}const SS="/assets/cat3-Bspolb1q.svg",jS="/assets/bunker-cRaJc6Me.svg",jf="/assets/bottle1-BxjrYTB1.svg",kS="/assets/bottle2-BVqZZ2-9.svg",Al="data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_2_1185)'%3e%3cpath%20d='M40%2021.9999H15.66L26.83%2010.8299L24%207.99994L8%2023.9999L24%2039.9999L26.83%2037.1699L15.66%2025.9999H40V21.9999Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2_1185'%3e%3crect%20width='48'%20height='48'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",bS=()=>{const[e,t]=k.useState(!1),[n,r]=k.useState(!1),[i,o]=k.useState(null);rt();const s=()=>{const a=Math.random()>.5?"살아 있습니다":"죽었습니다";o(a),t(!0)};return l.jsxs(dm,{children:[l.jsx(pm,{children:l.jsx("a",{href:"/concept",children:l.jsx("img",{src:Al,alt:"Back to main"})})}),l.jsxs(fm,{children:[l.jsx("h1",{children:"슈뢰딩거의 고양이"}),l.jsx("hr",{}),l.jsxs(Yi,{children:[l.jsxs(Xi,{children:[l.jsx("img",{src:jS,alt:"bunker",style:{maxWidth:"80%"}})," "]}),l.jsxs(Xi,{children:[l.jsx("img",{src:jf,alt:"bottle1"})," ",l.jsx(Ef,{src:vo,alt:"cat"})]}),l.jsx("p",{children:"고양이 한 마리와 독이 든 병을 벙커 안에 넣고 벙커를 닫습니다."})]}),l.jsxs(Yi,{children:[l.jsxs(Xi,{children:[l.jsx("img",{src:jf,alt:"bottle1"})," ",l.jsx("img",{src:kS,alt:"bottle2"})]}),l.jsx("p",{children:"독이 든 병은 50%의 확률로 깨질 수도, 깨지지 않을 수도 있습니다."})]}),l.jsxs(Yi,{children:[l.jsxs(Xi,{children:[l.jsx(Ef,{src:vo,alt:"cat"})," ",l.jsx(CS,{src:cm,alt:"cat2"})]}),l.jsx("p",{style:{marginBottom:"1%"},children:"이에 따라 고양이도 죽을 수도 있고 살아 있을 수도 있습니다."}),l.jsxs("p",{style:{padding:"0 2%",marginTop:"0px"},children:["이러한 상태를 ",l.jsx("span",{style:{color:"#0000ff"},children:"양자 중첩 상태"}),"라고 합니다."]}),l.jsx(qa,{onClick:s,children:"벙커 안에 고양이가 있는지 확인하기"})]}),l.jsxs(Yi,{children:[l.jsx("p",{style:{padding:"0 2%",marginBottom:"1%"},children:"슈뢰딩거의 고양이는 1935년 에르빈 슈뢰딩거가 양자역학의 이상한 특성을 설명하기 위해 제안한 사고 실험입니다."}),l.jsxs("p",{style:{padding:"0 2%",marginTop:"0px"},children:[l.jsx("span",{children:"이 실험은 고양이를 상자에 넣고, 고양이의 생사 여부가 양자적 현상인 중첩에 의해 결정된다는 개념"}),"을 보여줍니다."]}),l.jsx("div",{style:{textAlign:"center",display:"flex",marginTop:"1%"}}),l.jsx("div",{style:{textAlign:"center",display:"flex",marginTop:"1%"},children:l.jsx(qa,{onClick:()=>r(!0),children:"추가 설명 보기"})})]}),e&&l.jsx(kf,{children:l.jsxs(bf,{style:{backgroundColor:"#ddd"},children:[l.jsx(Cf,{onClick:()=>t(!1)}),l.jsx("h2",{children:"벙커의 문이 열렸습니다!"}),l.jsx("hr",{}),i==="살아 있습니다"?l.jsxs("div",{children:[l.jsx("p",{children:"고양이는 살아 있습니다!"}),l.jsx("img",{src:vo,alt:"살아 있는 고양이",style:{maxWidth:"100%"}})]}):l.jsxs("div",{children:[l.jsx("p",{children:"고양이는 죽었습니다...."}),l.jsx("img",{src:SS,alt:"죽은 고양이",style:{maxWidth:"60%",margin:"1%"}})]})]})}),n&&l.jsx(kf,{children:l.jsxs(bf,{children:[l.jsx(Cf,{onClick:()=>r(!1)}),l.jsx("h2",{children:"추가 설명"}),l.jsx("hr",{}),l.jsxs("p",{children:["이 사고 실험은 양자역학의 중요한 해석 중 하나인 ",l.jsx("span",{style:{fontWeight:"bold"},children:"코펜하겐 해석"}),"을 설명하기 위한 것이었습니다."]}),l.jsx("p",{children:"양자적 입자들은 측정되기 전까지 여러 상태가 동시에 존재하는데, 이 중첩 상태가 외부 관찰에 의해 무너지면서 하나의 확정된 상태가 된다는 것입니다."}),l.jsx("p",{children:l.jsx("span",{children:"고양이 역시 상자를 열어 관찰하기 전까지는 살아있으면서 동시에 죽어있는 상태로 존재합니다."})}),l.jsx("p",{children:"이 실험은 양자역학의 관측 문제와 파동 함수의 붕괴라는 개념을 설명하는 데 중요한 역할을 합니다."}),l.jsxs("p",{children:["슈뢰딩거는 이 실험을 통해 양자역학의 코펜하겐 해석이 현실에 적용될 때 얼마나 비현실적일 수 있는지를 비판했습니다. 실제로 고양이가 ",l.jsx("span",{style:{fontWeight:"bold"},children:'"살아 있으면서 죽어있다"'}),"는 개념은 우리의 일상적인 직관과는 맞지 않기 때문에, 이 실험은 양자역학의 해석에 대한 논쟁을 불러일으켰습니다."]})]})})]})]})},Yi=S.div`
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
`,Xi=S.p`
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
`,kf=S.div`
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
`,bf=S.div`
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
`,Cf=S(Xo)`
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
`,Ef=S.img`
  max-width: 100%;
  @media (max-width: 700px) {
    max-width: 50%;
  }
`,CS=S.img`
  max-width: 210px;
  margin-bottom: -45px;
  @media (max-width: 700px) {
    max-width: 50%;
  }
`;function ES(){return l.jsx(l.Fragment,{children:l.jsx(bS,{})})}const _f="/assets/coinf-BD3uUSm1.svg",Pf="/assets/coinb-CO2sn5vL.svg",_S="/assets/box1-M57zrF-g.svg",PS="/assets/box2-BABTIy2V.svg",OS=Er`
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,TS=S.div`
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
`,IS=S.img`
  max-width: 40%;
  cursor: pointer;
  margin: 2%;
`,zS=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin-top: 20px;
  animation: ${OS} 0.8s ease-in-out;
  h3{
    font-size: 2rem;
    color: #333;
  }
`,LS=S.div`
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
`,RS=S.div`
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
`,NS=S(Xo)`
  position: absolute;
  top: 30px;
  right: 33px;
  cursor: pointer;
  font-size: 2.5rem;
  color: #000000;

  &:hover {
    color: #e00000;
  }
`,MS=()=>{const[e,t]=k.useState(!1),[n,r]=k.useState(null),[i,o]=k.useState(null),[s,a]=k.useState(!1),u=()=>{const c=Math.random()>.5?"앞면":"뒷면";r(c),o(c==="앞면"?"뒷면":"앞면"),a(!0)};return l.jsxs(dm,{children:[l.jsx(pm,{children:l.jsx("a",{href:"/concept",children:l.jsx("img",{src:Al,alt:"Back to main"})})}),l.jsxs(fm,{children:[l.jsx("h1",{children:"양자 얽힘: 두 개의 얽힌 동전"}),l.jsx("hr",{}),l.jsxs(TS,{children:[l.jsx("p",{children:"두 개의 동전이 특별한 방식으로 얽혀 있습니다."}),l.jsx("p",{children:"한 동전의 상태가 결정되면 다른 동전의 상태도 자동으로 결정됩니다!"}),l.jsx("p",{children:"박스를 열어서 동전 A를 확인하세요."}),l.jsx("h1",{style:{color:"#0183ff",margin:"5%"},children:"박스 클릭하기"}),s&&l.jsxs(zS,{children:[l.jsxs("div",{style:{textAlign:"center"},children:[l.jsx("h3",{children:"동전 A"}),l.jsx("img",{src:n==="앞면"?_f:Pf,alt:"동전 A",style:{maxWidth:"160px"}}),l.jsx("p",{children:n})]}),l.jsxs("div",{style:{textAlign:"center"},children:[l.jsx("h3",{children:"동전 B"}),l.jsx("img",{src:i==="앞면"?_f:Pf,alt:"동전 B",style:{maxWidth:"160px"}}),l.jsx("p",{children:i})]})]}),l.jsx(IS,{src:s?PS:_S,alt:"박스",onClick:u}),l.jsx("div",{style:{textAlign:"center",display:"flex",marginTop:"1%"},children:l.jsx(qa,{onClick:()=>t(!0),children:"추가 설명 보기"})})]}),e&&l.jsx(LS,{children:l.jsxs(RS,{children:[l.jsx(NS,{onClick:()=>t(!1)}),l.jsx("h2",{children:"양자 얽힘 설명"}),l.jsx("hr",{}),l.jsx("p",{children:"두 개의 동전이 특별한 방법으로 얽혀 있다고 상상해봅시다. 이 동전들을 각각 상자에 넣고 지구의 반대편으로 떨어뜨립니다. 그 후, A 동전의 상자를 열어 동전을 확인했을 때, 앞면이 나왔습니다."}),l.jsx("p",{children:"이때, 멀리 떨어진 B 동전은 즉각적으로 뒤집혀서 반드시 뒷면이 나옵니다. 그들은 어떤 방식으로든 얽혀 있어서, A 동전이 앞면이면 B 동전은 뒷면이 될 것이고, 반대로도 성립됩니다."}),l.jsx("p",{children:'이처럼 양자 얽힘에서는 두 입자가 얽힌 상태에 있으면, 한 입자의 상태가 결정되는 순간 다른 입자의 상태도 그에 맞춰 즉각적으로 결정됩니다. 얽힘 상태에서는 물리적으로 떨어져 있어도 정보가 "순간적으로" 전해지는 것처럼 보입니다.'})]})})]})]})};function FS(){return l.jsx(l.Fragment,{children:l.jsx(MS,{})})}const DS=()=>{const{pathname:e}=Ei();return k.useEffect(()=>{window.scrollTo(0,0)},[e]),null},AS="/assets/Jenie1-BXj_GSaG.svg",$S="/assets/Jenie2-D8KlYSrv.svg",BS={ibm:{title:"IBM",description:"IBM Quantum은 클라우드 기반 양자 컴퓨팅 서비스로, 개발자와 연구자들에게 실용적인 양자 컴퓨팅을 제공합니다.",content:"IBM은 2016년 IBM Quantum Experience를 통해 양자 컴퓨팅을 대중에게 공개했습니다. Qiskit이라는 오픈 소스 프레임워크를 제공하며, 연구자와 학생들이 양자 알고리즘을 쉽게 개발하고 테스트할 수 있는 환경을 제공합니다. IBM은 1,000 큐비트 이상의 양자 컴퓨터를 2029년까지 구현하는 것을 목표로 하며, 화학 시뮬레이션, 금융 리스크 분석, 물질 개발, 공급망 최적화 등 다양한 분야에서 양자 컴퓨팅의 응용을 확대하고 있습니다. IBM은 슈퍼컴퓨터와 양자 컴퓨터를 결합한 하이브리드 컴퓨팅 모델도 연구 중입니다.",businessTitle:"양자 컴퓨팅 사업",business:"IBM은 IBM Quantum Experience를 통해 누구나 양자 컴퓨터에 접근할 수 있는 클라우드 기반의 플랫폼을 제공하고 있습니다. 연구자, 학생, 기업 고객은 Qiskit 오픈 소스 프레임워크를 사용해 양자 알고리즘을 개발할 수 있습니다. 또한, 양자 컴퓨터와 기존 컴퓨터의 결합을 통한 하이브리드 컴퓨팅 모델 개발에 주력하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"IBM은 세계 최초로 양자 컴퓨터를 클라우드에 공개했으며, 127 큐비트 시스템(IBM Eagle)을 발표했습니다. IBM의 로드맵에 따르면, 2029년까지 1,000 큐비트 이상의 양자 컴퓨터를 구축할 예정입니다. 이들은 화학 시뮬레이션, 공급망 최적화, 금융 리스크 관리와 같은 문제에 양자 컴퓨팅을 적용하고 있으며, 주요 고객으로는 금융 기관과 제약 회사가 있습니다.",imgSrc:mm,link:"https://www.ibm.com/quantum"},idq:{title:"IDQ",description:"IDQ는 양자 키 분배(QKD) 기술을 통해 통신 보안을 강화하는 양자 암호화 솔루션을 제공합니다.",content:"IDQ는 양자 기술을 활용한 보안 솔루션을 선도하는 기업으로, 금융 및 국방과 같은 민감한 산업에서 안전한 통신을 보장하는 기술을 제공합니다. 특히 양자 키 분배(QKD) 시스템은 도청을 탐지할 수 있는 능력을 갖추고 있어 최고 수준의 보안을 제공합니다. 유럽연합(EU)의 양자 통신 인프라 구축 프로젝트에 참여하고 있으며, 글로벌 표준을 수립하는 데 기여하고 있습니다.",businessTitle:"양자 암호화 및 통신 보안 사업",business:"IDQ는 양자 키 분배(QKD) 기술을 개발해 보안 통신 솔루션을 제공하는 선도 기업입니다. QKD는 도청을 감지하고 공격으로부터 네트워크를 보호하는 데 사용됩니다. 금융 기관, 국방, 통신 등 민감한 분야에서 양자 보안을 제공합니다.",businessTitle2:"성과 및 연구 방향",business2:"IDQ는 유럽 연합의 양자 통신 인프라 구축 프로젝트에 적극 참여하고 있으며, 다양한 파트너와 협력해 양자 암호화 표준을 개발하고 있습니다. 스위스와 싱가포르 등 여러 국가의 정부와 협력해 양자 통신망 구축에 기여하고 있습니다.",imgSrc:hm,link:"https://idquantique.co.kr/"},dwave:{title:"D-Wave",description:"D-Wave는 양자 어닐링 기술을 활용한 최적화 문제 해결에 특화된 양자 컴퓨터를 제공합니다.",content:"D-Wave는 세계 최초로 상용 양자 컴퓨터를 개발한 기업으로, 주로 최적화 문제를 해결하는 데 강점을 가지고 있습니다. D-Wave의 Advantage 시스템은 5,000개 이상의 큐비트를 제공하며, 금융, 물류, 인공지능(AI) 등의 분야에서 복잡한 문제를 해결합니다. 양자 어닐링은 최적화 문제를 매우 효율적으로 해결하는 기술로, 특히 재무 포트폴리오 최적화와 물류 경로 최적화에 활용됩니다.",businessTitle:"최적화 문제 해결",business:"D-Wave는 양자 어닐링(annealing) 기술을 사용하여 최적화 문제를 해결합니다. D-Wave의 Advantage 시스템은 5,000개 이상의 큐비트를 제공하며, 물류 최적화, AI 훈련 가속화, 재무 포트폴리오 구성 등의 분야에서 활용됩니다.",businessTitle2:"성과 및 연구 방향",business2:"D-Wave는 최초의 상용 양자 컴퓨터를 도입한 기업으로, 고객에게 클라우드를 통한 원격 접근 서비스를 제공합니다. 양자 어닐링을 통한 최적화 솔루션은 특히 물류와 인공지능 분야에서 강력한 성과를 내고 있습니다.",imgSrc:gm,link:"https://www.dwavesys.com/"},rigetti:{title:"Rigetti Computing",description:"Rigetti는 양자-클래식 하이브리드 컴퓨팅 시스템을 제공하며, 양자 컴퓨팅의 상용화를 목표로 합니다.",content:"Rigetti는 Quantum Cloud Services(QCS)를 통해 클라우드 기반의 양자 컴퓨팅을 제공하며, 양자 회로와 기존 컴퓨팅 자원을 결합한 하이브리드 솔루션을 개발 중입니다. 이 회사는 특히 의료와 금융 산업에서 양자 컴퓨팅의 응용 가능성을 연구하며, 신약 개발 및 기후 변화 모델링에 집중하고 있습니다.",businessTitle:"양자-클래식 하이브리드 컴퓨팅",business:"Rigetti는 주요 대학 및 연구 기관과 협력하여 양자 알고리즘을 개발하며, 연구자들이 쉽게 양자 컴퓨팅에 접근할 수 있도록 클라우드 플랫폼을 제공합니다. 또한 Quantum Cloud Services(QCS)를 통해 클라우드 기반 양자 컴퓨팅 환경을 제공합니다. 양자와 기존 컴퓨터를 결합한 하이브리드 솔루션을 개발해 더 빠른 문제 해결을 가능하게 합니다.",businessTitle2:"성과 및 연구 방향",business2:"Rigetti는 신약 개발, 금융 모델링, 기후 변화 연구 등 다양한 응용 분야에 양자 컴퓨팅을 도입하고 있습니다. 이 회사는 양자 컴퓨터와 기존 서버 간의 원활한 통합을 목표로 연구를 진행하고 있으며, 빠른 계산이 요구되는 환경에서 강점을 발휘하고 있습니다.",imgSrc:vm,link:"https://www.rigetti.com/"},honeywell:{title:"Honeywell",description:"Honeywell은 이온 트랩 기술을 활용한 정밀한 양자 컴퓨팅을 제공합니다.",content:"Honeywell의 양자 컴퓨터는 이온 트랩 기술을 기반으로 매우 높은 정밀도를 자랑합니다. 이 회사는 Cambridge Quantum과의 합병을 통해 소프트웨어와 하드웨어 개발 능력을 더욱 강화했으며, 공급망 최적화와 화학 물질 분석과 같은 분야에 양자 컴퓨팅을 활용하고 있습니다.",businessTitle:"이온 트랩 양자 컴퓨터",business:" Honeywell은 이온 트랩 기술을 이용한 양자 컴퓨터를 개발합니다. 이온 트랩은 높은 정확도와 정밀한 제어를 제공하며, 물류 및 화학 분야에서 활용되고 있습니다. 또한 제조, 물류 및 화학 산업에 양자 컴퓨팅 솔루션을 제공합니다. 특히 정밀한 양자 계산 능력을 활용해 화학 반응을 시뮬레이션하고 산업 공정을 최적화하는 데 주력하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"Honeywell은 2021년 Cambridge Quantum과 합병하여 양자 컴퓨팅 소프트웨어 개발을 강화했습니다. 이 회사의 양자 컴퓨터는 화학 시뮬레이션, 최적화 문제 해결에 특화되어 있으며, 특히 화학 반응 시뮬레이션에서 탁월한 성능을 보여주고 있습니다.",imgSrc:xm,link:"https://www.honeywell.com/us/en/company/quantum"},google:{title:"Google Quantum AI",description:"Google Quantum AI는 인공지능과 양자 컴퓨팅의 결합을 통해 양자 우월성을 목표로 합니다.",content:"Google은 2019년에 양자 우월성(Quantum Supremacy)을 발표하며 양자 컴퓨팅이 기존 컴퓨터보다 더 복잡한 문제를 해결할 수 있음을 증명했습니다. Google의 연구는 주로 인공지능(AI), 화학 및 물리학 분야에 중점을 두고 있으며, 양자 알고리즘을 통해 새로운 연구 방향을 제시하고 있습니다.",businessTitle:"양자 우월성 달성 및 인공지능 연구",business:"Google은 2019년에 양자 우월성(Quantum Supremacy)을 선언하며, 기존 컴퓨터로는 해결하기 어려운 문제를 양자 컴퓨터로 처리하는 데 성공했습니다. Google의 연구는 인공지능과 양자 알고리즘 개발에 중점을 두고 있습니다. 머신러닝 및 데이터 분석 분야에서 양자 컴퓨팅을 적극 활용하고 있으며, AI 모델의 학습 속도를 높이기 위한 연구를 지속하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"Google은 화학, 물리학 분야에 양자 컴퓨팅을 활용하며, 머신러닝 모델의 훈련 속도를 가속화하기 위해 연구를 진행 중입니다. 또한, Google은 양자 컴퓨팅과 인공지능의 결합을 통해 새로운 데이터 분석 기술을 개발하고 있습니다.",imgSrc:ym,link:"https://quantumai.google/"},microsoft:{title:"Microsoft",description:"Microsoft는 Azure Quantum 플랫폼을 통해 다양한 양자 하드웨어와 소프트웨어를 제공합니다.",content:"Microsoft는 토폴로지 큐비트 개발에 주력하며, Azure Quantum 플랫폼을 통해 여러 양자 하드웨어와 소프트웨어 생태계를 지원합니다. 이 플랫폼은 연구자들이 양자 컴퓨팅을 쉽게 활용할 수 있도록 설계되었습니다.",businessTitle:"양자 클라우드 서비스",business:"Microsoft는 Azure Quantum을 통해 다양한 양자 하드웨어와 소프트웨어를 지원합니다. Microsoft는 토폴로지 큐비트를 연구하며, 이를 통해 안정적이고 확장 가능한 양자 컴퓨팅 환경을 개발하고 있습니다. 암호화와 최적화 문제를 해결하기 위해 양자 컴퓨팅을 활용하며, 물리학 및 재료 과학 연구에도 기여하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"Microsoft는 암호화 및 최적화 문제 해결에 양자 컴퓨팅을 활용하며, 물리학 및 재료 과학 연구를 지원하기 위한 도구도 개발 중입니다. 주요 고객들은 클라우드를 통해 양자 컴퓨터에 접근해 다양한 연구를 수행하고 있습니다.",imgSrc:wm,link:"https://quantum.microsoft.com/"},intel:{title:"Intel",description:"Intel은 양자 프로세서 개발과 하드웨어 소프트웨어 생태계 구축에 집중하고 있습니다.",content:"Intel은 고성능 양자 프로세서를 개발 중이며, Quantum SDK를 통해 양자 알고리즘 개발을 지원합니다. Intel은 양자 컴퓨터와 슈퍼컴퓨터 간의 협업을 통해 더욱 강력한 컴퓨팅 성능을 구현하려고 합니다.",businessTitle:"양자 프로세서 개발",business:"Intel은 고성능 큐비트 프로세서를 개발하며, Quantum SDK를 통해 연구자들에게 양자 알고리즘 개발 환경을 제공합니다. Intel은 양자 컴퓨터와 슈퍼컴퓨터를 결합한 하이브리드 컴퓨팅 시스템 개발을 목표로 하고 있습니다. 그뿐 아니라, 반도체 기술과 양자 컴퓨팅을 결합해 상용화 가능한 솔루션을 개발하며, 다양한 산업 응용을 위해 파트너들과 협력하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"Intel은 다양한 산업에서 상용화 가능한 양자 컴퓨터를 구축하는 데 중점을 두고 있으며, 반도체 기술과 양자 프로세서를 결합해 성능을 극대화하고 있습니다.",imgSrc:jm,link:"https://www.intel.co.kr/content/www/kr/ko/research/quantum-computing.html"},alibaba:{title:"Alibaba",description:"Alibaba는 클라우드와 양자 컴퓨팅을 결합해 보안 솔루션을 개발합니다.",content:"Alibaba는 양자 연구소(AQML)를 설립하고 양자 컴퓨팅과 인공지능(AI)을 결합한 연구를 수행 중입니다. 이 회사는 특히 데이터 보안을 강화하기 위해 양자 암호화 기술을 연구하고 있습니다.",businessTitle:"양자 클라우드와 암호화 연구",business:"Alibaba는 AQML(Alibaba Quantum Laboratory)을 통해 양자 컴퓨팅과 인공지능을 결합한 연구를 수행하고 있습니다. 양자 컴퓨팅은 보안 기술에 사용되어 데이터 보호를 강화합니다. 또한 데이터 센터와 클라우드 서비스에 양자 컴퓨팅을 도입하며, AI와 결합된 양자 알고리즘 개발에 주력하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"Alibaba는 데이터 센터와 클라우드 서비스에 양자 컴퓨팅을 도입하며, 양자 암호화 솔루션을 개발해 보안을 강화하고 있습니다.",imgSrc:km,link:"https://www.alibabacloud.com/en/press-room/alibaba-cloud-and-cas-launch-one-of-the-worlds-most?_p_lc=1"},jininfra:{title:"JinInfra",description:"JinInfra는 양자 네트워크 인프라를 개발하며 보안 솔루션을 제공합니다.",content:"JinInfra는 양자 키 분배(QKD)를 기반으로 한 보안 네트워크 구축을 목표로 하고 있으며, 정부 및 기업과 협력해 차세대 통신 인프라를 개발합니다.",businessTitle:"양자 통신 인프라 개발",business:"JinInfra는 양자 키 분배(QKD)를 사용해 안전한 통신망을 구축합니다. 이 회사는 정부 및 기업과 협력해 차세대 통신 인프라를 개발하고 있습니다. 양자 통신 기술을 상용화하기 위해 노력하며, 보안이 중요한 분야에 최적화된 통신망을 구축하고 있습니다.",businessTitle2:"성과 및 연구 방향",business2:"JinInfra는 양자 통신망 구축 프로젝트를 주도하며, 보안이 중요한 분야에 최적화된 양자 솔루션을 제공합니다. 이 회사는 양자 암호화 기술을 통해 네트워크 보안을 강화하는 데 중점을 두고 있습니다.",imgSrc:Sm,link:"https://jininfra.com/"}},WS=()=>{const{companyName:e}=X0(),t=BS[e.toLowerCase()],[n,r]=k.useState(!1);return k.useEffect(()=>{const i=setInterval(()=>{r(o=>!o)},500);return()=>clearInterval(i)},[]),t?l.jsxs(tc,{children:[l.jsxs(nc,{children:[l.jsx(rc,{src:ul,alt:"banner image"}),l.jsx(ic,{children:t.title})]}),l.jsxs(G3,{children:[l.jsxs(iw,{children:[l.jsx(ow,{src:n?$S:AS,alt:`${t.title} speaking`}),l.jsxs(lw,{children:[l.jsx(sw,{children:t.description}),l.jsx(aw,{children:t.content})]})]}),l.jsxs(Ka,{children:[l.jsx("h1",{children:"Q. 양자와 관련된 어떤 사업을 하고 어떤 성과를 냈나요?"})," "]}),l.jsxs(Ga,{style:{marginBottom:"15px"},children:[l.jsx("h1",{children:t.businessTitle}),l.jsx("p",{children:t.business})]}),l.jsxs(Ga,{children:[l.jsx("h1",{children:t.businessTitle2}),l.jsx("p",{children:t.business2})]}),l.jsx("div",{style:{margin:"5% 0"},children:l.jsx(Ka,{children:l.jsx(um,{href:t.link,target:"_blank",rel:"noopener noreferrer",children:"홈페이지로 이동"})})})]})]}):l.jsx("p",{children:"존재하지 않는 기업입니다."})},QS={finance:{title:"금융 (Finance)",intro:"양자 컴퓨팅은 금융 리스크 분석과 포트폴리오 최적화에 사용됩니다.",content:[{subtitle:"리스크 분석",text:"양자 컴퓨터는 복잡한 금융 상품들의 리스크를 빠르게 분석하며, 양자 알고리즘으로 리스크 예측의 정확성을 높입니다."},{subtitle:"포트폴리오 최적화",text:"투자 포트폴리오의 수익을 극대화하고 리스크를 최소화하기 위해 양자 알고리즘을 사용합니다."},{subtitle:"사례",text:"Goldman Sachs와 IBM은 포트폴리오 최적화와 옵션 가격 책정에 양자 알고리즘을 활용한 연구를 진행 중입니다."}]},chemistry:{title:"화학 및 재료 과학 (Chemistry & Material Science)",intro:"양자 컴퓨터는 화학 반응 시뮬레이션과 신약 개발에 활용됩니다.",content:[{subtitle:"신약 개발",text:"단백질과 화합물 간의 상호작용을 정확하게 시뮬레이션하여 신약 개발 시간을 단축합니다."},{subtitle:"화학 반응 시뮬레이션",text:"분자 구조와 화학 반응을 정확하게 예측해 연구 시간을 단축하고 정확도를 높입니다."},{subtitle:"사례",text:"Pfizer와 IBM은 양자 컴퓨터를 활용한 신약 개발 연구를 진행하고 있습니다."}]},logistics:{title:"물류 및 최적화 (Logistics & Optimization)",intro:"물류 경로 최적화와 공급망 관리를 통해 비용 절감과 효율성을 극대화합니다.",content:[{subtitle:"물류 최적화",text:"수많은 경로와 제약 조건을 고려해 최적의 운송 경로를 제시합니다."},{subtitle:"공급망 최적화",text:"공급망의 모든 단계를 고려해 효율적인 경로와 재고 관리를 계산합니다."},{subtitle:"사례",text:"Volkswagen은 양자 컴퓨터로 교통 흐름을 최적화하고, DHL은 배송 경로 최적화를 연구 중입니다."}]}},US=()=>{const{businessName:e}=X0(),t=QS[e];return t?l.jsxs(tc,{children:[l.jsxs(nc,{children:[l.jsx(rc,{src:ul,alt:"banner image"}),l.jsx(ic,{children:t.title})]}),l.jsxs(Ka,{style:{padding:"5% 0"},children:[l.jsx(cw,{children:t.intro}),t.content.map((n,r)=>l.jsx(Ga,{style:{marginBottom:"2%",alignItems:"center"},children:l.jsxs(dw,{children:[l.jsx(fw,{children:n.subtitle}),l.jsx(pw,{children:n.text})]},r)}))]})]}):l.jsx("p",{children:"존재하지 않는 산업입니다."})},Of=S.div`
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
`,HS=()=>l.jsxs(bm,{children:[l.jsx(Em,{children:l.jsx("a",{href:"/description",children:l.jsx("img",{src:Al,alt:"Back to main"})})}),l.jsxs(Cm,{children:[l.jsx("h1",{children:"양자 컴퓨팅과 계산 복잡도 이론"}),l.jsx("hr",{}),l.jsx("h2",{children:"(1)BPQ(Bounded-Error Quantum Polynomial Time)"}),l.jsxs(Of,{children:[l.jsxs("p",{children:[l.jsxs("span",{children:["양자 컴퓨터가 효율적으로 풀 수 있는 문제군을 ",l.jsx("span",{style:{color:"#0489B1"},children:"BQP"}),"라 한다."]}),l.jsx("br",{})," 여기서 효율적이란, '정해진 오차범위 내에서 다항 시간 안에' 푼다는 뜻이다. 양자 컴퓨터는 확률적 알고리즘을 실행할 뿐이므로 양자 컴퓨터에 대한 BQP는 기존 컴퓨터에 대한 BPP에 대응한다. ",l.jsx("span",{children:"BPP는 오차 확률을 1/4로 제한하며 다항 시간에 풀 수 있는 문제의 집합으로 정의된다."}),' 양자 컴퓨터가 문제를 "푼다"는 것은 모든 예제에 대해 높은 확률로 올바른 결과가 나온다는 뜻이다. 그 결과가 다항 시간에 나왔다면 그 문제는 BQP에 속한다.',l.jsx("br",{}),"이는 고전적 컴퓨터의 P(Polynomial Time) 클래스와 NP(Nondeterministic Polynomial Time) 클래스에 대응됩니다."]}),l.jsxs("p",{children:["BQP에 속하는 대표적인 문제로는 ",l.jsx("span",{children:"Shor의 소인수분해 알고리즘"}),"과 ",l.jsx("span",{children:"Grover의 검색 알고리즘"}),"이 있습니다. ",l.jsx("br",{}),"Shor의 알고리즘은 고전적인 알고리즘보다 훨씬 효율적으로 큰 수를 소인수분해할 수 있으며, ",l.jsx("br",{}),"Grover의 알고리즘은 비정렬 데이터베이스에서 특정 항목을 검색하는 데 있어 고전적인 알고리즘의 제곱근 시간만큼 소요됩니다."]})]}),l.jsx("h2",{children:"(2)QMA(Quantum Merlin-Arthur)"}),l.jsxs(Of,{children:[l.jsxs("p",{children:[l.jsxs("span",{children:["QMA는 ",l.jsx("span",{style:{color:"#0489B1"},children:"양자 컴퓨터의 비판자 증명 시스템"}),"에 해당합니다."]})," QMA 클래스는 고전적인 복잡도 이론의 NP 클래스와 유사하지만, 차이점은  ",l.jsx("span",{style:{color:"#0489B1"},children:"증명(proof)이 양자 상태로 제공"}),"된다는 것입니다. 구체적으로, QMA는 검증자가 다항 시간 내에 주어진 양자 증명을 확인할 수 있는 문제들을 포함합니다.",l.jsx("br",{}),"이는 고전적 컴퓨터의 P(Polynomial Time) 클래스와 NP(Nondeterministic Polynomial Time) 클래스에 대응됩니다."]}),l.jsxs("p",{children:["QMA 클래스에 속하는 문제들은 일반적으로 ",l.jsx("span",{children:"QMA-완전(Quantum Merlin-Arthur-comlete)"}),"문제로 분류됩니다. 이는 이러한 문제들이 QMA 내의 모든 문제를 다항식 시간 내에 변환할 수 있을 만큼 복잡하다는 것을 의미합니다. 다표적인 예로는 ",l.jsx("span",{children:"양자 회로의 3-SAT 문제"}),"등 이 있습니다. QMA 클래스의 문제들은 고전적인 컴퓨터로는 해결하기 어려운 문제들이 많으며, 이는 양자 컴퓨팅이 해결할 수 있는 문제의 범위를 확장하는 데 핵심 역할을 합니다."]})]})]})]});function VS(){return l.jsx(l.Fragment,{children:l.jsx(HS,{})})}const GS=()=>{const[e,t]=k.useState(!1),n=()=>{t(!e)};return l.jsxs("div",{children:[l.jsx("div",{style:{zIndex:"20000",position:"fixed",bottom:"9rem",right:"3rem"},children:l.jsx("button",{onClick:n,style:{backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"50%",width:"5rem",height:"5rem",fontSize:"24px",cursor:"pointer"},title:"챗봇 열기",children:e?"X":"💬"})}),e&&l.jsx(KS,{children:l.jsx(qS,{allow:"microphone;",src:"https://console.dialogflow.com/api-client/demo/embedded/87fdfc94-6875-4699-a61e-ee1c7fcc7ab2"})})]})},KS=S.div`
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
`,qS=S.iframe`
  display: block; 
  max-width: 95%;
  width: 400px;
  height: 500px; 
  margin: 0 auto; 
  @media (max-width: 780px) {
    height: 480px;
  }
`,YS=S.div`
  height: 11vh;
  min-height: 80px;
  background-color: #292f36;

  @media (max-width: 780px) {
    min-height: 60px;
  }
`,_m=S.div`
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
`,XS=S.nav`
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
`,ZS=S.button`
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
`,JS=S.div`
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
`,Pm=S.div`
  flex: 1;
  padding: 50px;
  overflow-y: auto;
  margin-bottom: 30vh;
  @media(max-width: 780px){
    padding: 50px 20px;
  }
`,Om=S.h1`
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
`,ej=S.p`
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
`,Tm=S.div`
  margin-top: 25px;
  border-radius: 10px;
`,Im=S.h2`
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
`,jt=S.p`
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
`,tj=S.div`
  position: sticky;
  top: 0; /* 화면 상단에 고정 */
  z-index: 110; /* 다른 요소보다 위로 배치 */
  background-color: #141a1f; /* 배경색을 고정 */
  padding-top: 20px; /* 내부 간격 추가 */
`,nj="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M31.8327%2017.6433L23.0177%208.82166L20.6661%2011.1783L29.4811%2020L20.6661%2028.8217L23.0244%2031.1783L31.8327%2022.3567C32.4576%2021.7316%2032.8087%2020.8839%2032.8087%2020C32.8087%2019.1161%2032.4576%2018.2684%2031.8327%2017.6433Z'%20fill='white'/%3e%3cpath%20d='M21.3514%2018.8217L11.3514%208.82166L8.99976%2011.1783L17.8148%2020L8.99976%2028.8217L11.3581%2031.1783L21.3581%2021.1783C21.6697%2020.8649%2021.844%2020.4405%2021.8427%2019.9986C21.8415%2019.5567%2021.6648%2019.1333%2021.3514%2018.8217Z'%20fill='white'/%3e%3c/svg%3e",rj="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.6487%2011.1783L16.2921%208.82166L7.4704%2017.6433C6.8455%2018.2684%206.49445%2019.1161%206.49445%2020C6.49445%2020.8839%206.8455%2021.7316%207.4704%2022.3567L16.2921%2031.1783L18.6487%2028.8217L9.83373%2020L18.6487%2011.1783Z'%20fill='white'/%3e%3cpath%20d='M30.3158%2011.1783L27.9591%208.82166L17.9591%2018.8217C17.6467%2019.1342%2017.4711%2019.558%2017.4711%2020C17.4711%2020.4419%2017.6467%2020.8658%2017.9591%2021.1783L27.9591%2031.1783L30.3158%2028.8217L21.5008%2020L30.3158%2011.1783Z'%20fill='white'/%3e%3c/svg%3e",Ts=[{id:"양자기술동향",title:"양자기술동향",content:"양자기술동향의 개요입니다.",subsections:[{id:"국내외 시장 동향",title:"국내외 시장 동향",content:"전 세계 양자기술 시장의 총규모는 2023년 25조 9,024억 원이며, 연평균 29.2%의 높은 성장률을 지속해 2030년에는 155조 5,112억 원으로 커질 것으로 전망된다. 부문별로 살펴보면 양자통신 시장은 2023년 5조 209억 원에서 연평균 25.6% 성장해 2030년 24조 7,368억 원으로 커질 전망이다. 양자센싱은 2023년 2조 464억 원에서 연평균 19.1% 성장해 2030년 6조 9,482억 원으로 확대될 예정이다. 한편 양자컴퓨팅 시장은 2023년 18조 8,352억 원에서 연평균 30.9% 성장해 2030년 123조 8,263억원을 기록할 것으로 보인다. 이처럼 양자통신과 양자컴퓨팅은 무척 빠르게 성장할 예정이며, 양자센싱은 통신과 컴퓨팅보다 규모는 작지만 산업화 과정이 비교적 일찍 진행될 것으로 전망된다.",content2:""},{id:"국내외 정책 동향",title:"국내외 정책 동향",content:"해외 주요국들은 양자분야 활성화를 위해 정부 주도로 법·제도적 기반 마련과 함께 국가 양자기술 확보 정책 및 로드맵 수립에 나서고 있다. 이를 기반으로 대규모 예산을 장기적으로 투입해 기초연구를 지원하고, 산업적 응용 가능성이 높은 분야를 중심으로 산업화를 촉진하고 있다.",content2:"미국에서는 2020년 7월 네트워크 전략비전을 수립해 향후 10년 내 양자네트워크를 전국적으로 구현한다는 방침을 제시했다. 단기적으로는 2025년까지 양자 상호연결과 양자중계기, 양자메모리 개발 등에 역점을 둔다는 계획이며, 장기적으로는 2040년까지 국가 차원에서 양자네트워크를 통합한다는 전략이다. 양자센서 분야의 밑그림은 2022년 3월 백악관 국가과학기술심의회 양자정보과학 소위원회를 통해 제시됐다. 그 내용을 들여다보면 양자센서는 양자컴퓨팅 및 양자통신에 비해 비교적 성숙시장이나, 전체적으로는 아직 초기단계에 불과하고 향후 다양한 산업영역에서의 활용이 기대되므로 지속적 투자를 통한 단기적 산업 활성화가 필요하다는 방향성을 담고 있었다.",content3:"유럽은 ‘양자 선언문(Quantum Manifesto)’에 근거한 10억 유로(약 1조 3,500억 원) 규모의 연구개발 투자가 진행 중에 있다. 과학 연구와 산업경쟁력을 강화해 ‘제2의 양자 혁명’에 불을 붙이는 것이 목적으로 영국, 독일, 네덜란드 등의 국가에서는 독자적인 양자기술 전략과 정부 투자도 준비하고 있다. ",content4:"중국은 국가적으로 양자기술에 주력하고 있다. 특히 양자통신 분야에서의 기술이 눈에 띄게 발전 중인데, 베이징과 상하이를 연결하는 총 2,000km가 넘는 양자통신 간선 네트워크를 구축했고 인공위성 ‘묵자’에 의해 양자암호키를 분배하고 양자 텔레포테이션 실험에 성공하는 등 대표적인 성과들을 내놓고 있다. 양자컴퓨터 분야에서도 ‘지우장(九章) 2호’, ‘쭈층즈(祖沖之) 2호’를 통해 양자초월 실험을 검증하는 등 매우 적극적으로 연구개발을 진행하고 있다. ",content5:"일본은 2017년 8월 문부과학성이 ‘양자과학기술(광ㆍ양자기술)의 새로운 추진 방책’을 발표하며 양자기술 육성의 신호탄을 쐈다. 이어 2018년 12월에는 내각부가 “향후 이노베이션을 추진하는데 있어 중요한 3가지 분야”로 AI, 바이오와 더불어 ‘광ㆍ양자’를 언급했다. 또 2020년 1월에는 일본 최초의 양자기술에 관한 통합 전략인 ‘양자기술 이노베이션 전략’을 발표하며, 양자기술 개발에 대한 글로벌 트렌드에 합류하기 시작했다. 또한 2022년 4월 ‘양자미래사회비전’을 공표하여 양자기술을 사회경제시스템 전체에 도입하고 기존 기술 시스템과의 융합을 통해 일본 산업의 성장기회를 창출하고 사회 과제를 해결하기 위한 노력을 진행하고 있다.",content6:"우리나라의 경우 출발이 상대적으로 늦은 탓에 다른 나라에 비해 큰 기술격차를 보이고 있다. 이에 과학기술정보통신부에서는 2019년부터 양자센서 분야ㆍ양자컴퓨터 분야ㆍ양자암호통신 분야 신규사업지원을 확대하고 있다. 구체적으로 대학, 연구소 등 연구조직을 강화하고, 양자암호통신인프라 시범사업을 추진 중에 있으며, 산업 생태계 활성화를 위한 다양한 노력을 기울이고 있다."},{id:"국내외 투자 동향",title:"국내외 투자 동향",content:"해외 주요국은 양자시장을 초기 선점하기 위해, 경쟁적으로 대규모 관련 예산을 편성하고 장기적 관점에서 투자를 확대하고 있다. 미국, 중국 등 선진국 간 패권 경쟁에 의한 국가 차원의 투자는 물론이고, 민간 차원의 투자 규모도 대폭 늘어나는 추세이다. 현재 세계 주요국의 양자분야 투자 규모를 간략히 살펴보면 다음과 같다. ",content2:"미국의 경우 2023년 美 연방정부 및 각 기관으로부터 요청된 관련 예산 총합은 8억 4,400만 달러(약 1조 972억 원)이다. 2022년의 경우 8억 7,700만 달러(약 1조 1,401억 원)가 요청됐지만, 실제로는 9억 1,800만 달러(약 1조 1,934억 원)가 투입된 것으로 추정된다. 유럽연합(EU)은 2018년 10월 양자플래그십(Quantum Flagship)을 출범시키고, 이를 통해 2018년부터 향후 10년간 양자기술에 10억 유로(약 1조 3,000억 원)의 예산 투입 계획을 밝히고, 현재 활발한 투자를 진행하고 있다. 2014년 영국은 향후 10년 동안 민관 공동으로 10억 파운드(약 1조 5,000억 원)의 투자를 발표한 바 있다. 이후 2023년 2월 국가양자전략(National Quantum Strategy, NQS)를 통해 2024년부터 향후 10년간 양자기술에 25억 파운드(약 3조 7,500억 원)를 투자할 계획임을 밝혔다. 독일은 양자기술-기초에서 시장까지(Quantum technologies-from basic research to market)라는 이름의 프레임워크 프로그램을 통해 2018년부터 2022년까지 양자기술 R&D에 6억 5,000만 유로(약 8,450억 원)를 투자했으며, 2023년 4월 양자기술에 대한 실행 계획(Germany’s Action Plan for Quantum Technologies)을 발표하며 2026년까지 30억 유로(약 3조 9,000억 원)를 투자할 계획임을 밝혔다. 프랑스는 2021년 국가양자기술전략(Stratégie nationale sur les technologies quantiques)을 발표하면서 2025년까지 5년 동안 양자기술에 18억 1,500만 유로(약 2조 3,595억 원)를 투자할 것이라고 밝혔다. 캐나다의 경우, 2023년 1월 국가양자전략(National Quantum Strategy, NQS)을 통해 향후 7년간 양자기술에 3억 6,000만 캐나다 달러(약 3,600억 원)의 투자를 발표했다.",content3:"중국은 제14차 5개년 계획(2021~2025) 및 2035 중장기 목표를 발표하며 양자통신과 양자컴퓨터에 투입되는 연구개발비를 매년 7% 이상 증액하겠다고 밝혔다. 일본은 양자기술 이노베이션 전략을 수립하며 추경 예산을 통해 양자기술에 대한 예산을 증액했고, 2022 회계연도 예산은 추경 예산까지 포함된다면 기존 대비 2배 이상 확대된 800억 엔(약 8,000억 원)이 투입된 것으로 추정되고 있다. 한국의 경우, 2022년 양자 R&D 전용사업에 699억 원 수준의 예산이 투입됐으며, 2023년 6월에는 과학기술정보통신부가 대한민국 양자과학기술전략을 발표하면서 2035년까지 민관 공동으로 3조 원을 투자할 것임을 밝혔다. "},{id:"국내외 표준화 동향",title:"국내외 표준화 동향",content:"양자기술은 크게 양자통신, 양자센서, 양자컴퓨팅 세 분야로 구분할 수 있다. 그 중 국내외 표준화가 가장 활발한 분야는 양자통신(양자암호통신/양자 키 분배 중심)이며, 다음으로 양자컴퓨팅과 양자센서 순으로 활성화가 예상된다. 이와 동시에 세 분야의 양자디바이스를 네트워크 형태로 묶기 위한 양자네트워크 혹은 양자인터넷도 표준화 시도가 한창이다. ",content2:"양자암호통신은 2008년 ETSI(유럽전기통신표준화기구, European Telecommunication Standard Institute)에서 QKD ISG(Quantum Key Distribution Industry Specification Group)가 설립되면서 표준화가 시작됐다. 주로 양자암호통신 시스템 구현을 위한 표준기술이 연구됐으며, 장비 제조사와 대학 및 연구기관들이 주로 참여했다. 반면 ITU(국제전기통신연합, International Telecommunication Union)에서는 2018년 한국의 KT 및 SKT가 각각 양자암호 네트워크 표준 및 양자암호 보안 표준화 제안이 착수됐다. 그동안 ETSI 표준이 제공하지 못하던, 비용효율적인 양자암호 인프라 구축과 서비스를 위한 기술 표준개발이 시작된 것이다. 현재 ETSI는 20여 개의 산업규격 문서를 발간했고, ITU는 50개 이상의 권고안을 개발하는 등 국제표준 기반 상용화가 어느 정도 준비된 것으로 여겨지고 있다. 특히 ITU의 양자암호 네트워크 국제 표준화는 한국이 선도하고 있다.",content3:"양자컴퓨팅은 ISO/IEC(국제표준화기구, International Organization for Standardization/국제전기기술위원회, International Electrotechnical Commission) 중심으로 표준화를 준비하고 있으나, 실질적인 표준 문서의 개발은 미진한 상황이다. 최근 IEC에서 한 국 주도하에 Quantum SEG(Standardization Evaluation Group)가 설립된 후 ISO/IEC 간에 JTC-Q(Joint Technical Committee – Quantum)를 설립하고 QT(Quantum Technology) 분야에 대한 실제 표준화에 착수하기로 잠정 합의되었기에, 향후 해당 분야의 국제 표준화 과정에서 한국의 활약이 기대된다. 한편 양자디바이스(양자컴퓨터, 양자센서, 양자 키 분배 시스템 등) 간 정보를 양자상태로 교환할 수 있는 양자네트워크 혹은 양자인터넷에 대한 국제표준화도 ITU와 IETF/IRTF(인터넷 기술 전문위원회, Internet Engineering Task Force/인터넷 연구 전문위원회, Internet Research Task Force)에서 착수에 들어가 주요 표준화 경쟁 이슈로 대두하고 있다."}]},{id:"양자기술 R&D 동향",title:"양자기술 R&D 동향",content:"양자기술 R&D 동향 개요입니다.",subsections:[{id:"국내외 양자통신 R&D 동향",title:"국내외 양자통신 R&D 동향",content:"양자통신은 양자시스템을 이용해 정보를 전달하는 기술을 통칭한다. 통신에 활용되는 양자기술은 주로 빛의 입자적 특성을 가지는 광자이다. 기존의 광통신기술은 빛 다발(100만 개 이상의 광자)을 이용해 정보를 전달한다. 반면 양자통신은 단일광자 혹은 결맞음 광자를 이용하기 때문에, 양자역학을 이용한 보안성 강화에 활용할 수 있는 장점이 있지만, 구현상 많은 제약이 존재한다. 양자통신은 양자 상태로부터 암호키를 추출하는 양자 키 분배 기술과 양자상태를 전송하는 양자 네트워킹 기술이 주로 구현되고 있으며, 거리를 확장하기 위한 중계기 기술들이 연구되고 있다. 구현 방법에 따라 전용 광 선로가 필요한 유선 방법과 대기 중으로 신호를 송수신하는 무선 방법이 있는데, 국내외 기술은 유선과 무선에서 차이가 있다. ",content2:"유선의 경우 국내 양자 키 분배 기술은 주요 선진국의 기술을 바짝 추격하고 있으며 최근 대기업 및 중소기업들이 양자 키 분배 장비를 생산하며 산업생태계도 활성화되었다. 2020년부터 양자암호통신을 공공 및 민간 분야 26개 기관에 시범 구축하여 실제 망에서의 운용 레퍼런스를 확보함으로써 2023년에는 산업체가 개발한 양자 키 분배 장비를 국내 국가공공망에 도입하기 위한 인증 제도가 세계 최초로 시행되었다. 양자 키 분배 외에 양자를 이용한 보안기술 제공을 위해서는 양자 인증 및 서명 등이 필요한데, 국내외 기술 수준은 연구 단계로서 실험실 수준에 머물러 있으나 양자 인증을 중심으로 점차 실증 단계에 접어들 것으로 예상된다. ",content3:"무선의 경우 국내외 격차가 작지 않다. 국내 무선 양자통신은 2018년 한국전자통신연구원(ETRI)이 100 m 실험을 성공한 뒤 KT가 2022년에 1 km 실험에 성공한 것이 주목할 성과이다. 최근에는 드론을 이용한 양자통신연구도 진행 중이나 아직은 가시적 성과를 나타내기엔 이르다. 반면 해외의 경우 중국을 중심으로 위성을 이용한 무선 양자암호통신이 상당한 성과를 보이고 있다. 최근에는 지상의 유선 양자통신과 결합하여 총 4,600 km의 양자암호통신에 성공하였다. 여기에 유럽, 일본, 캐나다 등의 주요 선진국들이 위성을 이용한 양자통신 계획을 수립하여 진행 중이다. 현재는 양자 키 분배를 넘어 양자인터넷으로 가기 위한 기술개발이 국내외에서 활발히 이루어지고 있다."},{id:"국내외 양자센싱 R&D 동향",title:"국내외 양자센싱 R&D 동향",content:"양자센서는 특정 물리량의 측정을 위해 양자 결맞음, 양자 간섭, 양자 얽힘과 같은 현상을 이용하여 매우 민감도 높은 센싱이 가능하도록 구현된 양자시스템 형태의 센서를 의미한다. 이를 측정 물리량으로 구분 시 대표적으로 양자관성센서, 양자시간·주파수센서, 양자 전기장·자기장 센서, 양자광학센서 등으로 나눌 수 있다. 이러한 양자센서 기반의 응용분야들은 원자 시계, 양자 자이로, 양자 중력계, 양자 이미징 센서 등으로 알려져 있으며, 본 기술들을 이용하여 뇌 스캐너, 지하 구조물 측정, 헬스케어, 반도체, 국방 등에 활용될 기술을 구현하기 위한 노력이 이루어지고 있다.",content2:"양자관성센서의 경우 물리량에 따라서 중력, 가속도, 회전 등의 측정을 위해 원자, 물질파, 광역학계 등의 양자 현상을 이용하고 있으며, 국방 분야, 자동차 자율주행 등에 활용 가능한 관성항법 및 지문항법용 양자관성센서 연구가 활발히 진행 중이다. 최근 중력 및 항법 기술의 수요로 현장 이동형 및 탑재형 양자 중력계 연구가 활발히 진행 중이며, 또한, 양자중력계의 활용도를 높이기 위한 소형화 연구도 진행중이다. ",content3:"양자중력센서의 경우 지하 싱크홀 및 지하수 수위 등 지층의 변화를 탐지하여 재난대비, 지하 마그마 이동 감지 등을 통한 화산 및 지진 조기 탐지 등에 활용 가능하며, 탑재 가능하도록 개발하면 자원 탐사, 해양 및 지질 조사, 중력지도 작성 및 중력 항법 등을 위한 센서가 될 것으로 바라보고 있다. 양자관성센서 기반의 고정밀의 관성항법 및 지문항법을 하게 되면 GPS 등과 같은 항법위성이 불가한 환경이나 지역에서 항법이 가능하므로, 기존 관성센서의 성능을 뛰어넘는 양자관성센서 개발 연구가 활발히 진행되고 있다. 양자시간·주파수센서의 경우 높은 정확도 및 안정도의 시간 및 주파수를 발생, 동기 및 측정에 결맞음, 간섭 등의 양자현상을 이용하고 있으며, 첨단산업, 국방분야, 방송·통신 등의 기술 발전에 따라 더 정확하고 안정적인 기준 시각 및 주파수원을 필요로 하고 있어, 고정밀 또는 초소형의 양자시간·주파수센서 연구가 활발히 진행되고 있다. 기존의 마이크로파 전이를 이용하는 양자시계(마이크로파 원자시계)의 정확도 및 안정도를 뛰어넘는 광주파수 전이 기반의 양자시계(광시계) 연구가 되고 있으며, 최근에는 원자의 핵전이를 이용하는 핵시계 개발을 시도하고 있다. 시간은 모든 물리량 중에 가장 정확한 측정이 가능하고, 다른 물리량 측정이 소급되어 사용된다. 정확한 시간 측정은 기초과학 및 측정과학의 발전에 기본이 되는 기술이다. 시계는 통신·방송 뿐 아니라 대부분의 측정 장비에 내장되어 사용되므로 그 활용도를 높이기 위한 초소형 원자시계도 활발히 연구되고 있다. 또한, 위성항법이 시간 및 주파수를 기반으로 하고 있으므로, 위성에 탑재하기 위한 위성탑재형 양자시계, 지상국의 시각 및 주파수원을 위한 초정밀 양자시계 등에 관한 연구도 진행되고 있다. 특히, 양자관성센서 기반의 관성 및 지문 항법에는 고정밀 시계가 필수적이며, 사용되고 있는 시계의 정확도 및 안정도가 항법의 정확도를 결정하는 가장 기본적인 것이므로 항법용 고정밀 원자시계, 항법장비 및 측정장비에 내장하기 위한 초소형 원자시계, 초소형 광주파수합성기 등에 관한 연구가 활발히 진행하고 있다. ",content4:"양자전기장 센서는 비교적 근래에 주목받고 있는 양자센서이다. 전기장의 측정 감도를 고전 기술 이상으로 극복함과 동시에, DC부터 THz 대역까지 광대역 주파수에서 전기장의 측정이 가능한 기술로 알려져 있다. 최근 리드버그 원자를 구현할 수 있는 요소 기술들이 개발되면서 활발히 연구가 진행되고 있으며, 특히 국방 분야와 통신 분야에서 유망한 기술로 알려져 있다. 주로 미국과 유럽이 선도하여 연구를 진행해 왔으나, 최근에는 중국에서 많은 연구 결과가 도출되는 특징이 있다. 미국의 경우 미국 표준기술연구소(National Institute of Standards and Technology, NIST)와 콜로라도 대학이 통신 분야의 연구를 주도하고 있으며, 관련회사가 창업되어 상업화가 진행 중이다. 또한 광대역 주파수에 해당하는 전기장을 안테나 크기와 무관하게 단일 센서로 측정할 수 있어, DARPA와 미 육군 연구소에서는 국방관련 기술로 활용하기 위한 연구가 진행되고 있다. NASA의 경우 지구관측을 위해 위성에 탑재하는 연구를 시작하였다. 유럽의 경우 산업에 활용될 전기장 이미징 기술 연구를 진행하고 있다.",content5:"양자자기장 센서의 경우 원자, 점결함 스핀 큐비트의 Zeeman 효과를 이용해 자기장을 정밀하게 측정함으로써, 고전적인 자기장 측정 방법의 한계를 극복하는 기술로 알려져 있다. DC에서 AC까지 넓은 주파수 영역의 자기장을 측정하고, 측정 대상도 단일 스핀, 자성 물질, 전류 소자, 바이오 활성, 지구자기장 왜곡 등 다양하므로 기초물리, 생명 분야에서부터 공학, 산업, 의료, 국방에 이르기까지 활용 분야가 넓다. 대표적인 플랫폼으로는 원자 증기 기반의 원자자력계와 다이아몬드 NV(Nitrogen-Vacancy) 센터로 대표되는 고체 점결함 기반 자력계가 있다.",content6:`양자광학센서는 얽힘 상태 등의 양자광원을 이용해 고전적인 측정의 한계를 돌파하는 기술이다.최근 양자조명, 양자라이다, 양자레이다, 양자이미징, 양자가스센싱 등의 다양한 분야에서 활발한 연구가 진행되고 있다. 고전 광원 기반 이미징은 근본적으로 분해능(Rayleigh) 한계, 감도(Shot-Noise) 한계 이상의 계측이 불가능한데, 양자광원의 양자이득을 이용해 분해능 한계를 극복하거나, 샷노이즈 이하의 고감도 측정이 가능하다. 그뿐만 아니라 양자광원을 이용해 피사체와 상호작용 없이 측정이 가능한 고스트 이미징(Ghost Imaging) 등의 양자광학센서 기술이 존재한다. 양자광학센서는 기본적으로 양자광원기술이 선행돼야 하며, 양자광원의 상관관계 특성, 얽힘 특성 등을 이용해 배경 잡음 환경 또는 약한 조명에서 측정하는 연구들에 응용되고 있다. 이 때문에 낮은 광량을 요구하는 바이오 분야에 적용할 수 있으며, 양자레이더와 같이 탐지 회피를 시도하는 스텔스 비행기에 대응하는 기술로도 주목받고 있다.

양자 계측(Quantum Metrology)은 얽힌 상태(Entangled State)나 진공 압축 상태(Squeezed Vacuum State)를 이용하여 고전적 방식으로 도달할 수 있는 측정 한계를 뛰어넘는 기술로, 양자 변수 추정(Quantum Parameter Estimation)과 양자 가설 시험(Quantum Hypothesis Testing)으로 나누어 생각할 수 있다.
양자 변수 추정에서는 변수 측정 정밀도를 최소화하는 것이 목표인데, 고전 상태(혹은 표준 양자 상태)를 이용하는 경우 도달할 수 있는 측정 정밀도 한계가 입력 평균 광자 수 N의 제곱근에 반비례하지만, 얽힌 상태나 진공 압축 상태를 이용하면 측정 정밀도 한계가 N에 반비례하게 된다. 즉, 더 적은 양의 입력 평균 광자수로도 고전 측정 정밀도의 한계에 도달할 수 있으며, 같은 양의 입력 평균 광자수를 고려할 경우에는 고전 측정 한계보다 N의 제곱근만큼 측정의 정밀도를 향상시킬 수 있다.
양자 가설 시험에서는 물체 탐지 오류율을 최소화하는 것이 목표인데, 얽힌 상태를 이용하면 표준 양자 상태(Standard Quantum State)로 도달할 수 있는 물체 탐지 오류율을 지수 (Exponent)의 4배까지 향상시킬 수 있게 된다. 현재, 양자 변수 추정은 다중 변수(Multi-Parameter)의 측정 정밀도에 대한 연구가 광학 및 원자 시스템에서 이루어지고 있고, 양자 가설 시험은 물체 탐지 오류율을 최소화하는 것뿐만 아니라 반사율이 다른 2개의 물체를 구분하는 연구가 광학 및 극저온 시스템에서 이루어지고 있다.근대에 들어 눈부신 과학기술의 발전으로 이미 수많은 센서가 발명됐고 일상생활부터 첨단과학 분야까지 널리 사용되고 있다. 그러나 국방, 우주, 반도체, 바이오, 원자력, 기후 변화, 자율주행, 전기차, 로봇 등 첨단과학 기술의 발전과 함께 새로운 센서의 개발도 끊임없이 요구되고 있다. 최근 우리는 코로나로 인한 전 세계적 팬데믹 현상을 통해 사회가 요구하는 새로운 센서의 개발 필요성과 이와 연관된산업의 발전을 볼 수 있었다. 다가온 양자혁명 2.0 시대를 맞이해 미래를 대비하고 새로운 수요에 대응하려면, 우리도 양자센서기술에 대한 집중 투자와 개발을 서둘러야 할 것이다.`},{id:"국내외 양자컴퓨팅 R&D 동향",title:"국내외 양자컴퓨팅 R&D 동향",content:`기존 컴퓨터 시스템에서 통용되던 무어의 법칙(Moore’s law)은 한계에 도달했고, 양자컴퓨팅은 그 한계를 넘어서는 새로운 컴퓨팅 방식을 우리에게 제시하고 있다. 양자컴퓨팅은 양자이론의 법칙을 따르는 미시세계의 물리시스템을 활용해 실제 구현할 수 있으며, 양자원리를 바탕으로 계산을 수행함으로써 기존 컴퓨팅에서 불가능하다고 여겨졌던 연산을 수행할 수 있다. 대표적인 예로 현재 컴퓨팅에서 어렵다고 여겨지는 소인수분해 문제를 양자컴퓨팅은 손쉽게 해결한다. 이러한 양자컴퓨팅 능력을 잘 활용한다면 국방, 금융, 의료, 인공지능 등 다양한 첨단산업에서 엄청난 경제·사회적 효과를 기대할 수 있다. 따라서 세계 주요 국가들은 정부 주도의 R&D 투자를 통해 발 빠르게 대응 중이며, 민간 부문 투자와 산·학·연의 연구개발도 전 세계적으로 활발히 진행되고 있다. 

양자컴퓨팅은 큐비트(Qubit)의 물리적 근원에 따라 다양한 플랫폼 영역에서 구현되며, 양자컴퓨터 하드웨어 및 소프트웨어는 양자중첩상태를 유지하는 결맞음 시간(Coherence Time) 내에 연산 가능 횟수를 증대시키는 방향으로 발전하고 있다. 또한 양자컴퓨팅의 역사는 수십 년간 지속된 이론적 검증과 실험적 증명을 거쳐 명확한 목표를 가진 실용화 및 범용화 단계에 이르렀고, 이를 구체화한 ‘확장형 양자컴퓨터’를 개발하려는 노력이 전 세계적으로 진행 중이다. 현재 개발 중인 양자컴퓨팅은 플랫폼에 따라 각각의 특성이 명확하며, 다음과 같이 크게 여섯 종류로 구분할 수 있다.`,content2:"첫째, 초전도 큐비트 기반의 양자컴퓨팅 플랫폼이다. 초전도는 전자빔 및 포토리소그래피, 식각 공정 등과 같은 기존에 확립된 반도체 공정을 이용해 제작할 수 있어, 확장성이 높아 현재 가장 주목받는 양자컴퓨팅 플랫폼이다. 다른 플랫폼이 이온, 원자 등의 에너지 준위가 정해진 순수한 양자상태를 이용하는 것과 달리, 초전도 큐비트는 양자상태의 에너지 준위를 ‘설계’할 수 있어 원하는 작동 주파수 대역을 정의 가능한 장점이 있다. 초전도 큐비트는 회로의 구성 요소 및 배열에 따라 전하(Charge) 큐비트, 위상(Phase) 큐비트, 플럭스(Flux) 큐비트, 트랜스몬(Transmon) 큐비트, 플럭소니움(Fluxonium) 큐비트 등 다양하게 구분되며, 각각의 장단점이 명확하므로 개발에 참여한 기업들도 저마다 다른 플랫폼을 채택해 양자컴퓨터를 구축하고 있다.",content3:"두 번째로 소개할 양자컴퓨팅 플랫폼은 반도체 양자점이다. 전계효과 트랜지스터와 흡사한 반도체소자의 게이트 구조로 에너지 우물을 형성하고, 그곳에 갇힌 전자나 홀 같은 입자의 스핀 상태를 큐비트 에너지 준위로 사용하는 방법이다. 스핀 자유도와 전하 자유도의 혼합 정도에 따라 단일전자 스핀 큐비트(큐비트당 1개 양자점), 싱글렛-트리플렛 큐비트(큐비트당 2개 양자점), 교환 상호작용 큐비트(큐비트당 3개 양자점) 등으로 구분할 수 있다. 높은 게이트 충실도를 시연하기까지 다른 플랫폼에 비해 오랜 기간이 소요됐지만, 최근 스핀 잡음을 최소화한 동위원소 정제형 실리콘 기판의 개발과 함께 급격히 발전하고 있는 플랫폼이다. 실리콘 내부 스핀의 높은 결맞음 시간뿐 아니라 높은 충실도의 단발 측정이 가능하고, 큐비트 계의 양자제어를 위한 파라미터를 게이트 전압으로 쉽게 조절할 수 있는 특징을 가진다. 특히 모든 플랫폼 중 현대 반도체 산업의 상보성 금속산화물 반도체(Complementary Metal-Oxide Semiconductor, CMOS) 공정과 가장 높은 호환성을 보여, 향후 대규모 집적형 양자프로세서 제작 과정에서 70년 이상 발전해온 실리콘 산업공정을 그대로 사용할 수 있는 장점을 갖고 있다. 또한, 실리콘과 같은 4족 원소로서 게르마늄(Ge)은 전자가 아닌 양공(hole)의 스핀을 이용하는 p-type 반도체 양자컴퓨팅 소재로 새롭게 부각되고 있다. 이는 같은 핵스핀 밀도에 의해 양공 스핀이 잡음이 적으며, 인위적인 마이크로 자석 공정 없이도 전기적으로 스핀을 조절할 수 있는 스핀-궤도 상호작용이 적정하기때문이다. ",content4:"셋째, 이온 트랩 기술이다. 이온 트랩은 레이저 쿨링 및 전자기적인 포텐셜을 이용해 초고진공하에서 개별 이온들을 포획하는 방법으로, 포획된 이온들의 잘 정의된 양자상태를 큐비트로 규정하고, 외부에서 레이저나 라디오파로 큐비트를 조작해 양자계산을 구현하는 기술이다. 포획된 개별 이온들은 외부 환경과 잘 분리되어 있으므로 긴 양자결맞음 시간을 가지며 초기화, 측정, 양자게이트 각각에 대한 높은 신뢰도를 보여주는 장점이 있다. 또한 포획된 이온 간에 공유하는 양자운동을 활용해, 임의의 두 큐비트 간 고신뢰도 양자얽힘도 가능하므로 상호 연결성이 높으며, 이는 이온 트랩 기반의 양자컴퓨터가 가지는 중요한 장점이다. ",content5:"넷째, 양자광학에 기반한 컴퓨팅이다. 양자광학은 빛을 구성하는 근본적 단위인 광자를 이용해 광학 현상을 설명하는 이론이며, 광자는 한자리에 고정된 다른 물리계와 달리 멀리 보낼 수 있어 흔히 플라잉(Flying) 큐비트라고 부른다. 이러한 특성은 양자통신이나 양자네트워크에 적합해, 이를 이용한 양자컴퓨터/양자 시뮬레이터의 확장성 제고에 큰 도움을 줄 것으로 기대된다. 또한 광자시스템 자체를 양자컴퓨터나 양자 시뮬레이터에 이용할 수 있는데, 이 경우 주변환경과의 상호작용으로 인한 결잃음(Decoherence)에 강인한 특성이 큰 장점이 된다. 이러한 양자광학 기반의 양자컴퓨터를 구성하기 위해선 양자광원의 생성, 제어, 검출이 필요하다. 이와 관련된 기술은 지난 수십 년간 크게 발전했으며, 최근에는 기존 슈퍼컴퓨터로 불가능했던 연산을 양자광학 기반 양자 시뮬레이터를 이용해 가능케 한, 이른바 ‘양자이득 실험’을 성공하기에 이르렀다. 이처럼 급격하게 발전하는 집적광학 기술을 양자컴퓨터/양자 시뮬레이터에 적용하기 위한 연구가 널리 진행되고 있으며, 이는 양자컴퓨터의 실용성을 크게 높일 것으로 기대한다. ",content6:"다섯째, 다이아몬드 Nitrogen Vacancy(NV) 센터이다. 긴 결맞음 시간과 잘 정의된 광학 특성으로 인해 양자정보 기술 분야에서 주목받는 소재로 떠올랐다. 다이아몬드 NV 센터를 이용한 컴퓨팅 개발은 소재, 공정, 전자기 신호 처리 및 제어, 광학 회로설계 및 구성과 같이 다양한 분야의 기술들이 접목돼 있다. 먼저 다이아몬드 소재를 양자현상 관찰에 적합한 수준으로 성장시키고, 성장한 다이아몬드기판의 원하는 위치에 NV 센터를 형성할 수 있어야 한다. NV 센터의 전자스핀과 주변 핵스핀들을 연산에 활용하기 위해 스핀들의 상태를 읽고, 제어하고, 작업에 필요한 시간을 충분히 확보할 수 있도록 결맞음 시간을 확장하는 기술이 필요하다. 덧붙여, 활용 가능한 큐비트의 개수를 늘리고 서로 연결이 가능하게끔 만들어 시스템의 확장성을 늘릴 필요가 있다. ",content7:"마지막으로 리드버그(Rydberg) 기반의 양자컴퓨팅을 들 수 있다. 중성원자의 리드버그 원자 상태(마이크로미터 크기의 원자 상태)를 이용해 기존 컴퓨터로는 불가능한 고난도 계산을 수행할 것으로 기대된다. 중성원자를 수 마이크로미터 간격으로 이동 배치해 임의의 큐비트 연결 구조로 만드는 기술이 개발되면서 빠른 발전을 보여주고 있다. 양자단열형(또는 양자회로형과 결합한 혼합형) 양자컴퓨팅 방식으로 NP(비결정적 다항)-완전 문제를 계산하는 개념증명 실험이 완료됐고, 상업적 활용을 위한 개발 연구가 본격적으로 이뤄지고 있다."}]},{id:"양자기술 소재·부품·장비 산업생태계 동향",title:"양자기술 소재·부품·장비 산업생태계 동향",content:"양자기술 소재·부품·장비 산업생태계에 대한 개요입니다.",subsections:[{id:"양자통신분야 주요기술과 소부장",title:"양자통신분야 주요기술과 소부장",content:"양자산업을 구성하는 소재, 부품, 장비, 서비스의 개념을 살펴보면 소재는 양자기술을 구현하기 위한 바탕이 되는 재료를 말하며 고순도 단결정 양자소재, 반도체 소재, 유전체 소재, 초전도 소재 등이 이에 해당한다. 부품은 독립적인 동작도 가능하고 다른 부품과 함께 장비를 이루는 요소 기술도 될 수 있는데 단일광자 검출기, 양자난수 생성기(QRNG), 광분리기 등이 이에 해당한다. 그리고 장비는 양자기술을 활용하여 서비스 제공이 가능한 장치를 말하며, 어떤 서비스를 제공하느냐에 따라 다른 장비와 함께 구성할 수 있는 가능성도 존재한다. 또한, 장비의 일부로서 양자 환경을 제공하는 장치 또한 장비의 정의에 포함할 수 있다. 마지막으로 서비스의 경우 양자기술이 적용된 장비 등을 활용해 유·무형의 생산물을 사용자에게 제공하는 것을 말하는데, 양자 암호 서비스, 양자컴퓨팅 클라우드 등이 이에 해당한다.",content2:"전 세계적으로 초기 단계인 양자산업의 현실을 고려할 때, 주요 양자기술의 확보를 통해 시장 선점에 성공할 경우 공급망 안정은 물론 해외시장 개척까지 기대할 수 있다. 그러나 시장 선점에 심패한다면 국내 양자산업은 주요 소재·부품·장비 공급을 해외 수입에 전적으로 의존해야 하는 등 취약한 구조로 내린 위험 성이 높다. 더욱이 각국의 양자기술에 대한 전략적 수출규제가 예상되는 상황에서, 미래 국가경쟁력 유지를 위해 양자기술 관련 글로벌 공급망의 다원화와 함께 주요 소재·부품·장비에 대한 내재화가 절실하게 요구된다. "},{id:"양자센싱분야 주요기술과 소부장",title:"양자센싱분야 주요기술과 소부장",content:"고전 센서로는 측정할 수 없었던 신호를 측정할 수 있고 높은 정밀도를 갖는 고감도 센서와 정밀 측정에 의한 각종 데이터의 중요성이 증가하고 있다. 특히 강조되고 있는 분야가 국방, 바이오, 의료, 자율 주행, 반도체 등의 부문이다. 양자센서 기술을 통해 탐지 회피를 시도하는 스텔스기에 대응하는 국방 분야에서부터 첨단 MRI와 같은 낮은 광량을 요구하는 의료 분야에 이르기까지 산업도메인별로 다양하게 활용가능한 첨단 서비스를 제공함으로써 국민 생명 및 안전과 직결된 분야인 만큼 매우 높은 수준의 센서 정밀도가 요구되고 있다. 그런 측면에서 기존 센서로는 도달하지 못하는 수준의 높은 분해능 및 정밀도, 높은 감도, 그리고 측정 속도가 빠른 양자센서가 미래 핵심산업으로 각광받고 있다.",content2:`양자센서는 측정하고자 하는 물리량에 따라 양자관성센서, 양자 시간·주파수 센서, 양자 전기장센서, 양자 자기장센서, 양자광학센서 등으로 구분된다. 이 중 양자관성센서는 중력센서, 가속도센서, 회전센서로 구성된다. 양자중력센서는 극저온 원자를 이 용한 양자간섭현상을 이용하고, 가속도계는 원자간섭계 기반의 센서, 광역학계 기반의 센서등이 있고, 회 전센서는 원자간섭계 기반의 센서, 원자스핀 기반의 센서, NV 센터 기반의 센서 등이 있다. 양자 시간·주파 수 센서의 경우, 원자의 결맞음 현상이나 양자간섭현상을 이용해 시간 및 주파수를 생성하거나 측정한다.

원자를 기반으로 하는 양자센서 기술에 사용되는 주요 소부장으로는 원자소스, 레이저 다이오드, 원 자증기, 냉각 원자빔 소스, 음향 광학 및 전기 광학 변조기, 파형 생성기 등이 있다. 양자 전기장센서는 원자를 리드버그 상태로 만들어 전기장을 측정하는데 주요 소부장으로는 원자증기셀, 조사광용 및 분석 광용 레이저, 파장계 등이 있다. 또 양자 자기장센서의 경우 원자증기를 이용한 센서, 자기장센서와 고체 의 점 결합을 이용한 센서 등이 있다. 그 구현 방식에 따라 원자증기셀, 고순도 단결정 다이아몬드 등의 소재를 사용하며 포토다이오드, 음향 광학 변조기, 임의파형 생성기 등을 주요 소부장으로 볼 수 있다.

끝으로 양자광학센서는 비선형 결정, 반도체 양자 점소재, 비선형 양자광원, 단일광자 광원 등의 주요 소부장이 있다. 양자센서는 큐비트, 양자결맞음, 양자얽힘 등 다양한 특성을 이용해 측정작업을 수행하기에 다양한 소부장으로 구성되어 있다.`,content3:"기본적으로 센서 영역은 측정하고자 하는 물리량의 종류가 다양하다. 따라서 다양한 종류의 센서로 구분될 수밖에 없다. 결과값으로 제시되는 물리량은 서로 다르나 유사한 원리로 동작하기에, 일부 센서의 경우 동일한 소부장을 사용하기도 한다. "},{id:"양자컴퓨팅분야 주요기술과 소부장",title:"양자컴퓨팅분야 주요기술과 소부장",content:"양자컴퓨터는 '꿈의 컴퓨터'로 불리고 있다. 세계 최고 슈퍼컴퓨터를 사용해도 1만 년이 걸리는 계 산을 수분 만에 계산하기 때문이다. 기존 컴퓨터의 가장 작은 연산단위인 '비트(bit)하나는 0' 또는 '1' 중 정보 하나만을 가질 수 있다. 반면 양자컴퓨터의 정보처리 단위인 '큐비트'는 0의 결과를 제시하는 양자상태와 1의 결과를 제시하는 양자상태의 중첩상태에 존재할 수 있다. 중첩된 상태에 존재하는 큐 비트를 측정할 경우 0' 혹은 1'의 비트를 확률적으로 얻을 수 있고, n개의 큐비트를 측정할 때 그 모든 가능성을 기술하려면 2의 n제곱만큼의 비트가 필요하다. 따라서 큐비트를 사용해 컴퓨팅을 수행하면 비트를 사용해 계산할 때 어렵다고 여겨졌던 문제들이 쉽게 해결될 수 있으며, 소인수분해 문제가 그 대 표적인 예이다.",content2:"현재는 IBM, 구글 등 글로벌 기업들이 초전도체 기반의 양자컴퓨터 개발을 선도하고 있다. 비록 완 벽한 양자오류 보정을 구현하며 실용적인 계산을 수행할 수 있는 범용양자컴퓨터의 출현을 위해서는 앞으로도 10년 이상의 연구개발이 필요하지만, 가장 최근으로는 IBM 128 큐비트 양자컴퓨터를 사용 한 오류완화 실험에서 분자계의 에너지 계산 등 실용성이 높은 분야에 있어서도 양자컴퓨터가 고전 슈 퍼컴퓨터로 계산하는데 장시간이 요구되는 계산을 해내는 사례를 보이기도 하였다. 이렇게 큐비트의 개 수를 확장하고 오류율을 낮게 양자컴퓨터를 제작하기 위해서는 하드웨어를 구성하는 소재, 부품, 장비 의 역할이 중요하다. 단적인 예로, 초전도체 기반 양자컴퓨터는 절대온도 0 K까지 냉각되는 환경을 구 성해야 하므로 상온에선 동작이 어려운 단점이 있다. 따라서 양자컴퓨터 구현 방식으론 초전도체뿐만 아니라 반도체 양자점(스핀 큐비트용 소재), 광기반, NV센터, 리드버그원자, 이온트랩 등 다양한 방식이 연구되고 있다. 이렇게 다양한 양자컴퓨터 구현방식 중 가장 먼저 상용화될 방식이 어떤 것인지는 아직 알 수 없다.",content3:"양자컴퓨터 구현을 위해 공통적으로 필요한 일부 소재·부품·장비가 있는 반면, 방식에 따라 특정 소재·부품·장비가 필요한 경우도 있다. 대표적인 소재로 초전도 양자컴퓨터에는 고정항 실리콘 웨이퍼 또는 사파이어 웨이퍼가 필요하다. 반도체 양자점 스핀큐비트에는 동위원소 정제형 초고순도 반도체 웨 이퍼 및 양자품질 HEMT 등이 필요하고, NV다이아몬드 양자컴퓨터엔 양자품질 단결정 다이아몬드 가, 리드버그원자 컴퓨터에는 루비듐 원소 등이 필수적이다. 대표적인 부품으로는 광학부품과 RF 부품(극저온 증폭기, 방향성 결합기, 양자-limited 증폭기, 극저온 용 고집적 고주파 라인 등), 임의파형 발생기(Arbitrary Waveform Generator, AWG) 등이 필 요하다. 또 장비의 경우 각종 신호 제어장치와 양자상태 유지를 위한 초저온 냉각장치 및 진공챔버, 양자회로 컨트롤러 등이 필수적이다. "}]},{id:"양자기술 통계",title:"양자기술 통계",content:"양자기술 통계에 대한 개요입니다.",subsections:[{id:"국내외 논문 통계",title:"국내외 논문 통계",content:"KISTI의 분석에 따르면 2016~2020년까지 양자기술 분야의 SCIE급 논문은 총 8,213건으로, 2016년 1,270건에서 2020년에 2,245건으로 증가하였다. 국가별로는 중국이 2,809건, 미국 1,986건, 독일 749건 순이고, 한국은 200건으로 16위를 나타냈다. 분야별 논문 수는 양자통신 4,478건, 양자센서 714건, 양자컴퓨팅 4,877건이고, 양자통신분야에서 눈문은 중국 2,029건, 미국 632건, 한국 125건으로 나타난다. 그리고 양자센서 분야에서는 미국 192건, 중국 188건, 한국 18건이며, 양자컴퓨팅에서는 미국 1,644건, 중국 1,189건, 한국 103건으로 나타난다. 기관별 순위는 1, 2위가 모두 중국으로 Chinese Academy of Sciences가 687건으로 1위, University of Science Technology of China가 486건으로 2위이고, 전체 논문 수의 14.3%를 차지한다. 기간별 논문 게재 수 상위 20위 안에 한국 기관은 전무하다. 세분야별로 살펴보면 논문 피인용 수의 경우 양자암호, 양자 시뮬레이터 분야, 양자 알고리즘 및 SW가 일등 국가와 대비하여 0.4 정도에 근사한 값을 보여 상대적으로 우수한 분야로 나타난다. 반면에 논문의 양적인 측면에서는 모든 분야가 일등 국가 대비 매우 저조하고, 특히 건수나 피인용 수가 가장 낮은 두 분야로 양자시간측정센서와 논리양자비트로 나타난다. ",content2:"NRF의 논문 분석에 의하면 양자통신 분야에서는 University of Science and Technology of China, Delft University of Technology, MIT, Harvard University 등이 우수한 성과를 창출하고 있으며, 양자센서 분야는 중국 대학들이 상위권을 선점하고 있고, 양자컴퓨팅 분야를 선도하고 있는 연구기관은 University of Oxford, University of Cambridge, UCL, MIT, ETH Zurich 등으로 나타난다. 한국은 양자기술에 대해 추격형 인재 양성과 연구 투자전략을 수행 중이나, 2010~2022년까지 논문 출간 수를 보면 아직 상위 10위 국가들에 비해서 매우 낮은 것으로 나타나고 있다. 양자암호, 양자시뮬레이터와 양자 알고리즘 및 SW 분야에서는 평균 피인용지수가 0.4에 가까우나 1위 국가 대비 발표건수는 0.09 미만으로 매우 부족하다. 또한 양자시간측정센서나 논리양자비트와 같은 분야에서는 연구가 많이 이루어지지 않는 것으로 판단된다. 향후 양자기술 분야 전반에 대해 우선 국내 전문 인력 확보와 도전적 연구 강화를 기반으로 해외 협력 기반을 구축해야 할 것이다. 논문 게재 수가 연구의 질을 대변하는 것은 아니지만, 양자기술 분야에 기술력과 연구 능력 확보 수준을 보여주는 지표로 사용될 수 있다. 연구 생산성, 효과성 및 인용 횟수를 포함하는 연구 업적 향상뿐만 아니라 연구 자금, 국제적 연구 협력, 교육 및 인프라 구축 등을 통해 양자기술 분야의 연구 능력을 향상시켜야 할 것이다. "},{id:"국내외 특허 통계",title:"국내외 특허 통계",content:"KISTI 보고서에 의하면, 2014~2020년까지 한국, 미국, 중국, 유럽, 일본, WIPO의 출원 특허 수는 연평균 41% 증가했고, 중국이 60.9%로 가장 높은 증가율을 보여준다. 출원인별 출원 특허 수는 미국 IBM이 115건으로 가장 많고, 중국 Ruban Quantum Tech와 University of Beijing Posts & Telecommunication이 각각 96건, 90건을 출원하면서 뒤를 따르고 있다. KIIP 보고서에서는 2002~2022년까지 한국, 미국, 중국, 유럽, 일본, PCT의 측허 출원 건수는 15,261건으로 중국 33.29%와 미국 32.68%로 전체 특허출원 건수의 약 66%를 차지하고 있다. 양자통신 분야는 중국 특허가 가장 큰 비중을 차지하고 있다. 중국이 양자통신 분야를 주도하는 것으로 분석되나 주로 자국 출원 위주로 보인다. 주요 출원인으로는 일본 Toshiba가 최상위로 나타나고 있다. 한국의 경우, IITP는 삼성전자 66건으로 최다 출원 특허 수를 보여주지만, 2014~2020년에는 개인으로 추정되는 채령이 30건을 출원해 최다 출원인으로 분석된다. 이 분야의 특허는 R&D의 급격한 증가 및 경쟁의 격화 단계인 성장기에 있는 것으로 분석된다. KIIP는 2002~2022년까지 Ruban Quantum이 가장 많은 특허출원하고 있는 것으로 나타나고 있다. 양자센싱·계측 분야 또는 양자센서 분야는 미국 특허가 가장 큰 비중을 차지하고 있다. 중국, 일본, 유럽, 한국은 유사한 비중을 차지하고 있으며, 중국의 경우 자국 출원 위주로 확인된다. IITP는 주요 출원인으로는 대만 TSMC가 최상위로 보고 있다. 한국의 경우, 2014~2019년에는 KAIST가 최다 출원인으로 분석된다. 이 분야의 특허는 지속적인 연구개발 활동과 일부 업체의 도태, 특허 수의 정체와 특허 출원인의 정체 또는 감소 추세인 성숙기에 있는 것으로 분석된다. KIIP는 2002~2022년에 IBM이 122건으로 가장 많은 특허를 출원한 것으로 보고 있고, 한국에서는 고려대학교가 3건으로 출원 순위 1위로 보고 있다. ",content2:"양자컴퓨팅 분야는 미국 특허가 가장 큰 비중을 차지하고 있다. IITP는 미국이 29% 이상으로 가장크고 중국과 일본이 20% 이상의 비중을 차지하는 것으로 분석하고 있고 주요 출원인으로는 미국 IBM이 최상위로 나타나고 있다. 한국의 경우, 2010~2019년에 삼성이 67건, 2014~2019년에는 ETRI가 4건으로 최다 출원인이 서로 다르게 나타난다. 이 분야의 특허는 R&D의 급격한 증가 및 경쟁의 격화 단계인 성장기에 있는 것으로 분석된다. KIIP는 2002~2022년에 KIIP와 마찬가지로 미국이 가장 많은 출원 건수를 기록하고 있고, 중국이 이를 추격하고 있는 것으로 보고 있다. 또한 IBM이 최상위임도 동일하게 나타나고 있다. 이는 2020~2021년에 IBM의 특허출원이 지속되고 있음을 암시하는 것으로 볼 수 있다. 한국은 삼성이 가장 많은 출원 건수를 기록한 것으로 보고 있지만, 그 수치는 서로 상이하다. 한국은 2000년대 초반 양자컴퓨팅 분야의 특허출원이 높은 비중을 보였지만, 이후 양자통신 분야의 출원이 늘어나면서 최근 5년의 출원 비중이 가장 높다. 미국도 초반에 양자컴퓨팅 분야의 출원 비중이 가장 높고 전 구간에 걸쳐 유사한 패턴을 보이지만, 최근에는 오히려 세부 기술별 비중의 격차가 줄어들어 양자센서와 양자컴퓨팅 분야는 근소한 차이가 있는 것으로 보인다. 중국의 경우 초기에는 양자컴퓨팅과 양자통신 분야가 유사한 경향을 보이며 구간에 따라 양자컴퓨팅과 양자센서의 비중이 높아지지만, 최근 5년간에는 다시 양자센서의 출원 비중이 높아지는 경향을 보이고 있다. 유럽과 PCT는 전 구간에 대해서 양자센서의 특허 양자컴퓨팅 분야의 출원 비중이 높게 나타나고 있으며, 최근 5년은 양자컴퓨팅 분야의 출원 비중이 더욱 증가한 것으로 보인다. 일본도 양자컴퓨팅 분야가 가장 출원 비중이 높은 상태를 유지하면서 양자센서와 양자통신 분야 분야의 특허 출원 비중이 증가했다가 최근 5년간에는 다시 양자컴퓨팅 분야가 증가하고 있다. 2002년부터 2021년까지 IP5 양자기술의 세부 기술별 출원 비중은 양자컴퓨팅(51.2%) ＞ 양자통신(33.6%) ＞ 양자센서(15.2%) 순으로 나타난다. 즉, 전 세계적으로 양자컴퓨팅 분야의 R&D가 급격히 증가하고 경쟁의 격화 단계인 성장기에 있는 것으로 보인다."},{id:"양자기술 인력 통계",title:"양자기술 인력 통계",content:`국내의 양자기술 전문인력의 수급전망을 조사하는 단계 초기에 한국연구재단과 미래양자융합포럼이 공동으로 자료조사에 대한 가이드라인을 작성하여 자료조사를 추진한 점에서 본 양자 인력조사가 전년에 비해 보다 체계적으로 진행되고 있음을 알 수 있었다. 물론 자료조사에 대한 검증 부분에서 좀 더 보완이 필요한 부분도 있지만, 연도마다 양자 인력조사에 대한 체계화·고도화가 이루어진다는 점이 고무적이라 할 수 있다. 차기년도부터 조사가 이루어질 때는 이러한 부분을 염두에 두고 좀 더 진전되고 체계화된 조사를 진행할 필요가 있을 것이다.

아울러 양자기술이 바로 매출로 연계되지 않는 현재 상황에서는 학계 배출인력의 산업계 취업과 산업계의 수요가 서로 연계되지 않는 미스매치 현상이 발생할 수 있다. 이는 실제 산업계의 양자 전문인력에 대한 수요는 있으나 학계 배출인력이 바로 취업하기 어려운 상황이 존재함을 의미한다. 본 조사에서 이루어진 산업계 인력수요 조사는 인력채용 부서가 아닌 양자 사업을 담당하는 부서의 인력 수요를 파악한 것으로, 대기업의 경우 양자기술 관련 사업부서 또는 연구부서에서는 양자 전문인력을 필요로 하지만, 막상 인력채용을 총괄하는 인력부서에서는 바로 매출이 발생하지 않는 양자분야의 인력채용에 대해 어려움을 표하는 경우가 있음을 알 수 있었다. 본 양자 인력조사는 양자 전문인력 현황·수요·공급 측면에서 조사를 진행하였으나 다소 한계점이 존재한다. 첫 번째로 양자기술 등 첨단 과학기술과 관련된 산업의 경우, 축적된 자료가 많지 않아 과거의 통계자료를 확보하는 데에 어려움이 있다. 따라서 전수조사를 통해 현장 자료를 수집하여 자료의 정확성을 높이고, 수집된 통계자료를 지속적으로 축적하며, 이를 기반으로 미래 수급을 예측하는 통계분석이 진행되었으면 하는 아쉬움이 있다. 두 번째로 양자통신·센싱·컴퓨팅 등 기술분야별 인력 미스매치 현상을 해소하기 위해서는 기술분야별 인력 현황과 수급전망에 대한 조사가 이뤄져야 하나, 학계의 경우 기술분야별 인력공급 전망 대신 인력공급의 총량만 전망했다는 점에서 한계를 갖는다. `,content2:"마지막으로 학계의 양자기술 전문인력 현황 및 연간 배출인력을 파악하는 데에 있어 응답률이 저조하여 기존 자료와의 연계가 곤란하다는 점에서 한계가 있다고 할 수 있다. 위와 같은 한계점을 개선하기 위해서는 두 가지 노력이 필요하다. 첫 번째로 매년 양자기술 전문인력 현황에 대한 체계적인 실태조사를 지속적으로 시행해야 한다. 올해 한국연구재단과 미래양자융합포럼이 조사단계 초기에서 설정한 인력조사 가이드라인에 대해 세분화‧체계화를 지속적으로 진행하는 것이 필요하다. 이를 통해 산·학·연 기관별 양자기술 전문인력 현황, 소요인력 및 배출인력 전망에 대한 보다 정확한 자료를 축적해갈 수 있을 것이며, 이렇게 지속적으로 축적된 자료는 미래 수급 예측을 위한 과거 자료로써 의미를 갖게 될 것이다. 미래양자융합포럼에서는 매년 백서 출간을 통하여 이러한 사항을 체계적으로 추진해 나갈 예정이다. 두 번째는 첫 번째 노력을 기반으로 한 양자기술 전문인력 수급 모니터링 방안을 모색하는 것이다. 실태조사를 통해 파악된 양자기술 전문인력 현황을 바탕으로 전문가 자문단 구성·운영을 통해 수급전망 진단과 지속적 모니터링 체계를 갖추어 나가는 것이 필요할 것이다. 이를 통해 범국가적 차원으로 양자기술 전문인력 순환생태계의 미스매치 현상을 해결하고 선순환 구조를 만들어 갈 수 있을 것이다. 양자기술 전문인력 양성을 위하여 현재 정부에서도 적극적으로 추진하고 있는 양자융합대학원과정이나 융합대학과정 커리큘럼의 신설 등을 확대하고 학계-연구계-산업계로 이어지는 전문인력 선순환 사이클을 마련하여 대·중·소기업 등 적극적인 산업계 전환인력 양성 프로그램 개발을 추진할 필요가 있다. "}]},{id:"양자기술 산업화 모델",title:"양자기술 산업화 모델",content:"양자기술 산업화 모델에 대한 개요입니다.",subsections:[{id:"산업화 모델 개요",title:"산업화 모델 개요",content:"양자기술에 대한 산업계의 수요는 무궁무진하다. 이미 미국, 유럽, 중국, 일본, 한국 200여개 이상의 기업들이 양자기술 개발 및 상용화를 시작하고 있다. 양자통신 분야는 국내외 주요 통신사 간 선점 경쟁이 치열하다. 각 기업들이 테스트베드를 구축하고 상용서비스를 가속하고 있고, 양자센서 분야는 시제품 개발을 통한 초기 상용화를 서두르고 있으며, 양자컴퓨터 활용의 증가로 인해 배터리, 항공, 제약 등에서 양자컴퓨팅 클라우드 서비스가 본격화되고 있다."},{id:"양자통신 산업화 모델",title:"양자통신 산업화 모델",content:"양자암호, 양자전송, 양자네트워크를 포함하는 양자통신은 현재 암호기기의 메시지 암·복호화에 필수적인 비밀키 교환에 집중되고 있지만 향후 양자기기 간 양자상태 정보전송으로 확장될 것으로 보인다. 초기에는 단거리 응용 분야 적용을 위한 상용화 기술 개발을 통해 암호화가 필요한 금융, 의료, 연구, 행정, 국방망 등에 사용되어 점진적으로 시장을 확대하고, 궁극적으로는 양자중계기 기반 장거리 광섬유 및 위성 링크를 기반으로 하는 안전한 글로벌 양자통신 네트워크로 발전시키고자 하는 것이다. 또한 양자컴퓨터, 양자센서 등의 양자정보처리 노드 간 양자정보를 전송하고, 양자정보처리 자원을 공유하고 분배하는 양자인터넷이 형성될 것으로 예상된다."},{id:"양자센싱 산업화 모델",title:"양자센싱 산업화 모델",content:"양자센싱은 양자관성센서, 양자시간측정센서, 양자자기장·전기장센서, 양자광학센서 등 다양한 센서 기술을 기반으로 여러 산업에 다양하게 적용할 수 있다. 양자센서 종류별 응용될 주요 사업군에 대해 산업 및 농업, 의료, 석유 가스, 유틸리티 및 건설, 국방 및 안보, 로봇공학 등 다양하게 분포되어 있다.42) 산업 및 농업 분야에서는 전력전송상태 모니터링, 추적자 감지, 공정제어, 가스감지, 네트워크 시간 분포 등, 의료분야에서는 신경감지, 새로운 MRI 시스템, 진단이미징 기술이 적용 가능한 것처럼 양자센서는 다양한 분야에서 양자이론을 기반으로 보다 정밀한 센싱을 통해서 원하는 정보를 제공하는 역할을 수행할 수 있는 것으로 보여진다."},{id:"양자컴퓨팅 산업화 모델",title:"양자컴퓨팅 산업화 모델",content:"양자컴퓨터는 빠른 시일 내에 기존 컴퓨터가 담당하던 일기예보와 기후변화, 암호해독, 자율주행, 신약후보물질 발굴, 도시교통 최적화, 우주탐사, 인공지능, 사이버 보안, 전자재료 발견, 재무 모델링, 태양광 포집 등 아주 복잡한 계산이 필요한 많은 부분을 대체할 수 있을 것이다.115) 양자컴퓨팅은 빠르게 발전하는 분야로 아직은 고전적인 컴퓨터 프로그램의 하위 분야로 적용되지만, 향후 산업적으로 미치는 영향은 막대할 것으로 보인다. 실제로 2010년 이후 양자컴퓨팅에 관련된 연구를 하는 기업과 벤처가 폭발적으로 증가하고 있다. MarketsandMarkets의 2021년 2월 조사에 따르면, 상위 5개 업체의 세계 양자컴퓨팅 시장의 점유율은 2019년 기준 50~55%로 캐나다 D-Wave Systems 15~20%, 미국 IBM 20~25%, Microsoft 10~12%, Amazon 8~10% 및 Rigetti Computing 6~8%를 차지하고 있다. 특히 IBM과 D-Wave Systems는 양자컴퓨팅 시장의 선두 주자로, 저명한 브랜드, 광범위한 제품 및 강력한 유통망을 보유하고 있다. Microsoft와 Amazon은 주로 제품 출시를 통해 양자컴퓨팅 시장에서 입지를 강화해왔으며, 이들 업체의 매출은 경쟁사 매출보다 더 빨리 증가하고 있다. 향후 3~5년내에 IBM과 D-Wave Systems은 양자컴퓨팅 시장에서 입지를 확고히 할 것으로 예상되며, Amazon은 주로 아시아태평양 지역에서 사업 성장으로 인해 시장 내 점유율이 증가할 것으로 예상되고 있다."},{id:"산업화 모델 시사점",title:"산업화 모델 시사점",content:"양자기술의 발전은 앞으로 많은 변화를 가져올 것이다. 화학 물리 분야에서는 원자-분자 간의 새로운 과학적인 현상을 규명해 줄 수 있는 도구가 되어줄 것이다. 나노소재, 미세구조의 시뮬레이션을 통해 새로운 소재를 발견해 낼 수 있을 뿐만 아니라, 분자구조의 정확한 모델링을 통해 수년이 소요되는 의약산업의 경제적 비용을 앞당겨 줄 수 있다. 정보보호와 국방 등 암호해독 분야에 활용할 수 있을 뿐만 아니라, 금융, 교통 등에 이르기까지 복잡하면서도 월등한 연산 속도를 필요로 하는 다양한 산업분야에 걸쳐 혁신을 가져올 것으로 기대된다. 특히 바이오·생명공학 분야에서 3차원으로 접힘 형태를 지니고 있는 단백질과 유전자 구조를 정확하게 예측하고 분석하여 신약개발, 유전자 질환 치료 등이 가속화되게 될 것이다. 또한 계산의 범주가 조합론에 한정되어 최적화된 배열을 찾는 복잡한 교통, 물류분야에서도 양자컴퓨팅 기술 도입은 긍정적인 영향을 미칠 수 있다. 그런데 양자컴퓨터의 시대는 곧 열릴 수 있을까? 현실 세계의 중요한 특정 문제들을 해결하는 수준으로 발전하기 위해서는 적게는 수백개에서 수만 개 큐비트 수준의 양자컴퓨터가 필요할 것으로 보이는데, 앞으로 10년 혹은 그 이상의 시간이 더 필요할 것이라고 전망한다. ",content2:"IBM은 2023년도 말을 목표로 1,000 큐비트 개발을 예고하고 있으며, Google, Microsoft 등의 기업들도 10년 이내 개발을 목표로 하고 있다. 물론 10년 후에도 여전히 양자오류정정, 유용한 양자알고리듬 개발 등 아직 넘어야할 산이 여전히 많이 남아있을 수도 있다. 수십 큐비트의 양자컴퓨터 시스템이 실현되면서 우리는 현재까지 모사할 수 없던 미지의 영역으로 한 발자국 내딛게 되었다. 향후 대규모 양자컴퓨터가 구현이 된다면 강력한 사회·경제적 파급효과가 있을 것이며, 현재 단계의 중규모 큐비트 시스템의 구현과 이를 바탕으로 한 풀 스택 양자컴퓨터의 구현은 이를 대비하여 중요한 기술적·경험적 토대가 될 것이다. 아직 대규모 양자컴퓨터를 구현하기 위한 확고한 기술적 로드맵이 없음을 고려할 때 개방된 테스트베드를 보유하고 양자컴퓨터 시스템에 대한 도전적이고 기초적인 연구를 수행할 수 있는 환경을 구축하는 것은 매우 중요하고 유의미하다 할 수 있다. 또한 이러한 테스트베드 운영을 통해서 기존 컴퓨팅 연구자들이나 공학자들이 양자컴퓨팅 커뮤니티에서 공동연구를 할 수 있는 기반을 만들 수도 있을 것이다. 현재 해외 기업들은 각자의 개발 로드맵을 가지고 양자컴퓨터 개발에 박차를 가하고 있다. 물론 가장 핵심적인 기술은 고품질의 큐비트를 많이 확보하는 것이겠지만 큐비트 수와 함께 풀 스택 양자컴퓨터의 다른 요소들을 확장하는데도 많은 노력이 필요할 것으로 예상된다. 실제 기업들의 로드맵들을 잘 살펴보면 흥미롭게도 이러한 이슈들에 대한 언급 및 계획이 포함되어 있는 경우가 많다. 기술 성숙도가 높은 플랫폼 시스템 통합을 위한 다학적 협력 연구에 집중적인 투자를 하면서 동시에 새로운 큐비트 플랫폼 연구와 같은 도전적인 기초연구들에도 폭넓게 투자를 하여 좋은 양자정보연구 환경을 만들어 나간다면 국내에서도 훌륭한 성과들을 많이 얻을 수 있을 것이다.",content3:"최근 양자기술 전반에 관한 관심이 급증하며 세계 주요국 및 국내에서도 양자기술에 대한 투자와 기술개발에 집중하고 있는 추세이다. 양자기술은 무기체계에서 창과 방패로 모두 사용될 수 있다. 초고속 양자컴퓨터에 의한 사이버 공격, 양자레이다에 의한 스텔스 표적 탐지, 양자센싱에 의한 초고감도 표적식별 등이 일례이다. 양자 무기 전력화는 아직까지 각 기술별로 많은 장벽과 한계가 있다. 그러나 양자 무기는 기술 혁신성으로 인해 미래 전장의 패러다임을 바꿀 와해적이고 파괴적인 신무기가 될 것이라 확신되고 있다. 따라서, 국방 선진국들은 양자무기 핵심기술 확보와 체계개발을 위해 열을 올리고 있다. 우리는 양자기술의 혁신성을 무기체계에 어떻게 적용할 것인가 고민하고, 양자 원천기술을 융합하여 미래 전장의 주역이 될 수 있는 신개념 양자 무기체계를 개발하여야 할 것이다. 이를 위해서는 민·군을 막론하고 국내외 관련기술 공동연구 및 정부/기관 간 상호 협업이 무엇보다 중요하다 할 것이다. 우리나라가 디지털정보기술 분야에서 세계적으로 우위에 있지만, 양자컴퓨터와 양자암호 실험연구에서는 다른 선진국에 비해 많이 뒤진 것이 사실이다. 그렇지만 양자컴퓨터와 양자암호 기술이 아직 세계적으로도 충분한 수준에 이르지 못한 데다, 양자센서는 양자컴퓨터와 양자암호를 위한 요소 기술이고 우리나라가 앞서 나갈 수 있는 여지도 있어 좋은 기회가 열리고 있다.",content4:"미래의 게임 체인저가 해결해야 할 과제들에 대해 전문가들은 양자컴퓨터가 소인수분해, 대량 데이터 탐색, 최적경로 예측 등 동시다발적으로 발생되는 정보의 처리가 요구되는 복잡한 계산과 데이터 처리에 강점이 있는 만큼 다양한 산업 분야에서 게임 체인저, 즉 시장의 흐름을 통째로 바꾸거나 판도를 뒤집어 놓을 만한 결정적인 역할을 할 것으로 예측된다. 양자기술의 산업계 적용은 우리가 생각하는 것 이상으로 다양하며, 아직도 개발되지 않은 분야가 무궁무진하다. 미국과 유럽이 미개척 분야를 개척하기 위해, 그리고 시장이 확장될 가능성이 매우 높다고 판단하기 때문에, 그 시장을 선점할 수 있도록 다양한 응용 분야를 발굴하여 개발하는 것이 필요하다. 이제 한국도 기술 선도국과의 격차를 줄여야할 시기가 되었다. 우리나라는 수십 년 이상 꾸준히 투자해온 선도국에 비해 기술 수준이나 연구개발비 규모 면에서나 극복해야할 장벽이 많다. 기술 개발에 난이도가 큰 만큼 정부 차원에서 국가의 미래를 좌우할 핵심기술로 인식하고 긴 안목에서의 지속적인 투자와 종합적인 청사진 설계가 필요하다. 양자 분야의 기초 연구에서부터 응용, 개발 연구에 이르기까지 일관성 있는 중장기 전략이 필요하며, 무엇보다도 국내외 협력기반을 구축하여 다학제 융합연구에 힘써 앞으로의 10~20년 뒤를 대비해야 한다. 출연(연)을 중심으로 대학과 산업계가 참여하는 협업 생태계를 구축하고, 그 어느 때 보다도 협력의 리더십을 발휘하여 학문적 난제뿐만 아니라 인류 공통의 문제를 해결해야 한다. ",content5:"양자시대에는 아직 압도적 기술 우위로 기득권을 가진 선발주자가 없다. 양자기술은 미래 기술 패권을 정할 게임 체인저 기술로 세계 각국과 글로벌 기술이 각축전을 벌이고 있어 한국도 시급한 대책 마련이 필요한 상황이다. 양자기술 분야는 매우 다양한 기술을 활용하고 있으며 확장가능성이 무궁무진 할뿐만 아니라, 위에서 언급한 것과 같이 다양한 사업서비스 분야를 발굴할 수 있는 가능성도 다양하다고 할 수 있다. 이미 많은 국가와 기업들이 이러한 가능성을 파악하여 의료, 금융 및 교통과 더불어, 보안과 안보 분야에서 주요 활성화되었던 통신 분야도 점점 교통 및 의료와 접목한 사업군을 속속들이 발굴하고 있다. 하지만 아직 독점 기업이 나타나지 않은 것으로 보인다. 즉 아직 추격의 기회는 열려 있으므로, 한국이 보유하고 있는 ICT 인프라 및 역량이나 반도체 제조 분야와 같은 기존 강점을 살릴 수 있는 비교 우위점을 찾아 전략을 세우는 것도 향후 산업경쟁력의 미래를 결정하는데 중요한 역할을 할 것이다. ",content6:`한국 정부는 2035년까지 양자기술에 3조 원 이상을 투자해 국내 기술 수준을 선도국 대비 85%까지 끌어올리겠다고 밝혔다. 또한 양자 분야 종사자를 확보하고 공급·수요 기업도 1,200개 규모로 육성하는 등 기술개발과 생태계 육성을 병행할 계획이다. 현재 양자 기술 주요 분야는 연산, 통신, 계측 등으로 우리 기술로 양자컴퓨터를 개발하고(연산), 양자 인터넷 강국으로 나아가며(통신), 세계 최고 수준의 양자센서(계측)로 시장을 선점한다는 계획을 세우고 있다. 우선 2031년까지 1000큐비트급 양자컴퓨터를 우리 힘으로 개발해 2035년 상용화할 방침이다. 고성능 양자컴퓨터 개발을 위해 반도체 역량을 적극 활용하고, 민간 주도로 주문형 생산 시설(양자 파운드리)도 별도로 구축할 계획이다. 기술 수준이 비교적 높은 양자통신 분야에선 도시 간 양자 네트워크를 구축하고자 한다. 통신 거리를 100㎞대로 구현하고 이 구간에 양자암호통신을 적용하는 등 양자암호통신 전국망을 구축할 예정이다. 

이 밖에도 관성, 시간, 전자기장, 광학 등을 계측하는 양자센서 원천기술을 개발해 각 산업군에 적용할 계획이다. 이를 위해서 양자의 물리적 원리와 현상을 이해하고 이를 산업에 적용할 수 있는 핵심 인력을 2035년까지 현재 384명에서 2,500명으로 늘리고, 실제 산업 현장에서 양자 시스템을 구현하는 양자 엔지니어도 1만 명을 육성해 생태계를 꾸릴 계획이다. 한국이 아직 강국과 비교해 기술이 아직 뒤처져 있지만 이러한 계획 등을 통해 향후 다양한 분야에서 양자기술을 충분히 이끌어갈 수 있을 것으로 기대하고 있다. `}]},{id:"글로벌 양자분야 주요 산·학·연 협의체 동향",title:"글로벌 양자분야 주요 산·학·연 협의체 동향",content:"글로벌 양자분야 주요 산·학·연 협의체 동향에 대한 개요입니다.",subsections:[{id:"북미(미국 QED-C, 캐나다 QIC)",title:"북미(미국 QED-C, 캐나다 QIC)",content:"미국의 QED-C는 강력한 양자 기반 산업 및 관련 공급망을 활성화하고 성장시킨다는 사명을 갖고, NOI법에 근거하여 책임자인 NIST의 위탁을 받은 SRI International이 관리하는 산업 중심 연합체이다. QED-C는 미국 상무부 산하 국립표준기술연구소(NIST)와 부품 공급업체/제조업체, 소프트웨어 및 하드웨어 시스템을 포함한 양자분야 이해당사자 전반을 아우르는 단체로 150개 기업을 포함해 개발자, 서비스 제공업체 및 실사용자 등 200개 이상의 회원을 지원하고 있다. 캐나다 QIC는 양자컴퓨팅, 양자통신 및 암호화, 양자 감지 및 양자 안전 암호화 기술 개발자와 이러한 기술에 대한 응용 프로그램을 개발하는 회사를 포함하는 캐나다 양자 기술 회사의 컨소시엄이다. 두 컨소시엄은 2022년 대비 2023년 회원사가 증가하였고, 특히 미국의 경우 2022년 대비 2023년 111개 회원기관이 증가하였는데, 산업계의 경우 178개 기업으로 전년도 대비 44개의 회원사가 증가하였다. ",content2:"반면 캐나다의 경우 전년도 대비 5개의 회원사가 증가하였다. 미국의 QED-C는 산업계 뿐만 아니라 학계, 연구소 및 정부 관련 기관 등 양자 관련 연구, 서비스, 기금을 지원하는 모든 기관을 회원기관으로 등록하고 있는 반면, 캐나다의 QIC는 산업계 위주로 구성되어 있으며 정부 기관이나 자금 지원 기관과 연계하고 별도의 회원기관으로 관리하지 않는 것이 특징이다. 2022년까지 QED-C의 회원사였던 Anyon는 현재 QIC의 회원사로 전환하였고, D-Wave, Ki3 Photonics, Xanadu, Zapata Computing는 2022년에 QED-C 회원사로 가입한 후 2023년에는 QIC의 회원사로도 등록했다. 북미는 양자시장이 가장 빠르게 발달하는 곳으로 지난 2년간 관련 기업이 급속히 증가하는 것으로 나타나고 있다. 캐나다는 미국에 비해 그 수가 적으나, 양자기술 전 분야에 걸쳐 고르게 산업군이 분포 된 편이다. 두 나라를 합해 약 200개의 양자관련 기업이 활동하고 있으며 이 중 일부 스타트업은 이미 유니콘 기업으로 성장하고 있다. 양자기술 뿐만 아니라 양자시장의 확장도 가속화되고 있는 북미 시장을 보면 우리도 빠르게 이에 대응할 수 있도록 양자시장의 확보가 필요할 것으로 보인다."},{id:"유럽(유럽 QuIC, 핀란드 InstituteQ, 독일 QUTAC, 영국 UKQuantum) ",title:"유럽(유럽 QuIC, 핀란드 InstituteQ, 독일 QUTAC, 영국 UKQuantum) ",content:"유럽에서는 공동을 목표로 양자과학 및 기술을 발전시키기 위해서 다수의 양자기술 관련 협회가 구성되고 있다. 대표적으로 2021년 구성된 비영리 산업협회 'European Quantum Industry Consortium(QulC)은 EU 국가와 그 외의 유럽 국가의 양자기술 관련 기업 및 기관들의 협의체로 가장 큰 규모를 이루고 있다. 독일 Quantum Technology and Application Consortium(QUTAC)은 양자컴퓨팅 응용 및 실제 적용에 대한 가속을 위해 13개 기업이 협의체를 이뤄 활동하고 있다. 이외에도 핀란드의 InsituteQ는 대학교와 국립 연구 센터가 중심으로 운영되고 있고, 영국의 UKQuantum 은 영국 정부와 글로벌 협의체에 공동의 목소리를 내기 위해서 구성된 협의체로 기업 및 연구기관으로 구성되어 있다. 독일, 핀란드, 영국의 각 협의체는 각 나라의 양자기술 우위를 차지하고, 양자 시장을 선점하기 위한 공통의 목표를 위해 협력하는 것을 목적으로 하고 있다. 각 협의체의 회원수는 작년 대비 증가하였는데 이는 양자기술 관련 기업의 증가와 관련 있는 것으로 보인다. 일부 기업 및 기관은 미국의 QED-C와 유럽의 QuIC에 동시에 가입하고 있는데 이는 각 지역에 본사나 사업장이 있는 경우 가입 가능한 제약으로 인한 것으로 보인다. 유럽 각국의 양자협의체는 독일, 핀란드, 영국처럼 향후 각 나라 의 이익을 위해서 구성될 가능성이 있으며, 이미 구성되어 있는 소수의 협의체가 확장될 가능성도 있을 것으로 보인다. 이러한 변화에 대한 지속적인 모니터링이 필요한데, 이는 유럽 국가의 양자기술 개발 방 향에 대한 지표로 활용할 수 있기 때문이다."},{id:"기타(일본 Q-STAR, 호주 AQA) ",title:"기타(일본 Q-STAR, 호주 AQA) ",content:"2018년 미국을 시작으로 2023년 10월까지 8개의 협의체가 전 세계적으로 확인되고 이다. 특히 2021년에는 유럽 QuIC, 한국 FQCF, 독일 QUTAC, 일본 Q-STAR, 핀란드 InstituteQ를 포함한 5개의 협의체가 발족하였고, 2022년에는 AQA와 UKQauntum 협의체가 새롭게 구성되었다. 일본 양자기술신산업창출협의회(Quantum STrategic industry Alliance for Revolution, Q-STAR)는 20여 개의 기업과 기관으로 시작하여 2023년 5월 기준 약 59개로 증가하였고, 호주의 호주 양자동맹(Australian Quantum Alliance, AQA)은 10개의 창설 회원 기업과 함께 가장 늦게 구성되었지만 2023년 10월 기준 150개의 회원 기업 및 기관이 가입하고 있다. Q-STAR의 경우 가입 회원 수는 적지만 다양한 사업군이 분포되어 있고 AQA는 짧은 기간 동안 가장 빠르게 규모가 확장되고 있는 것으로 보인다. "}]},{id:"요약",title:"요약",content:"양자정보기술 백서 전체 요약",subsections:[{id:"양자기술의 글로벌 동향",title:"양자기술의 글로벌 동향",content:'양자 기술은 전 세계적으로 통신, 센싱, 컴퓨팅의 세 가지 핵심 분야에서 빠르게 성장하고 있습니다. 특히 양자 컴퓨팅은 높은 응용 가능성을 보이며 기업과 국가의 대규모 투자를 유도하고 있습니다. 글로벌 시장에서는 하드웨어가 주도적인 역할을 하고 있으며, 국방, 금융, 의료 산업이 주요 응용 분야로 부상하고 있습니다. 미국은 "국가양자이니셔티브(NQI)"를 통해 양자 기술의 테스트베드 및 산업화 촉진을 지원하고 있으며, 유럽은 양자 플래그십 프로젝트를 중심으로 주요 국가들이 양자 기술 로드맵을 발표하고 있습니다. 한국은 "국가 양자과학기술 원년"을 선포하며 양자기술 육성을 위한 법률안을 통과시켰고, R&D와 투자 규모를 지속적으로 확대하고 있습니다. 이러한 노력은 국제 표준화 기구인 ITU-T와 ISO/IEC가 주도하는 글로벌 표준화 활동과 함께 진행되고 있으며, 유럽 CEN/CENELEC 같은 지역 표준화 기구도 활발히 참여하고 있습니다.'},{id:"양자기술 R&D의 진전",title:"양자기술 R&D의 진전",content:"양자통신은 보안 통신 기술로서의 강점이 부각되며, 양자키분배(QKD) 기술과 양자 메모리 및 중계기 개발이 주요 연구 분야로 자리잡고 있습니다. 양자 네트워크 구축을 목표로 한 연구도 점차 늘어나고 있으며, 국방과 금융 분야에서의 응용 가능성이 주목받고 있습니다. 양자센싱은 고감도 기술이 요구되는 의료, 국방, 환경 분야에서 활용 가능성이 높습니다. 예를 들어, 양자 중력계, 시간 및 주파수 센서 개발이 활발히 진행되고 있습니다. 양자컴퓨팅은 하드웨어와 소프트웨어 두 가지 측면에서 크게 발전하고 있습니다. 트랜스몬 큐비트와 이온 큐비트 같은 초전도 기반 기술이 대표적이며, 양자 알고리즘 및 오류 정정 기술 연구가 강화되고 있습니다. 특히 금융 데이터 분석, 물류 최적화, 신소재 개발 등에서의 실질적인 응용이 기대됩니다."},{id:"소재·부품·장비 산업생태계 ",title:"소재·부품·장비 산업생태계",content:"양자 기술의 발전을 뒷받침하는 소재·부품·장비의 역할이 점점 중요해지고 있습니다. 주요 소재로는 실리카(SiO2), 리튬나이오베이트(LiNbO3), 반도체 기반 소재(InP) 등이 있으며, 이들의 내재화와 공급망 다변화가 강조되고 있습니다. 부품으로는 단일광자 검출기(APD), 양자 난수 생성기(QRNG), 광분리기 등이 주로 사용됩니다. 양자통신 장비(QKD), 냉각장치 등 장비 개발도 중요한 연구 분야로 자리잡고 있습니다. 이러한 기술들을 기반으로 양자 암호화 서비스와 양자 컴퓨팅 클라우드 같은 상업적 응용이 활성화되고 있습니다."},{id:"산업화와 글로벌 협력 ",title:"산업화와 글로벌 협력",content:"양자 기술의 산업화는 통신, 센싱, 컴퓨팅의 각 분야에서 다른 방식으로 이루어지고 있습니다. 양자통신은 금융과 국방 분야에서 보안 통신 서비스로 시작되어 점차 확대되고 있으며, 양자센싱은 의료, 제조, 환경 모니터링 분야에서 응용되고 있습니다. 양자컴퓨팅은 금융 데이터 분석, 최적화 문제 해결, 신소재 개발과 같은 고도화된 작업에서 활용되고 있습니다. 이 과정에서 IBM, 구글, IonQ와 같은 글로벌 기업들이 주도적인 역할을 하고 있으며, 북미, 유럽, 아시아를 중심으로 협력체와 연구 프로젝트가 활성화되고 있습니다. 미국의 QED-C, 캐나다의 QIC, 유럽의 양자 플래그십 프로젝트, 일본의 Q-STAR, 호주의 AQA 등이 주요 협력체로 활동하고 있습니다."},{id:"통계와 미래 전망",title:"통계와 미래 전망",content:"양자 기술에 대한 논문과 특허 데이터는 주요국들의 연구 성과와 시장 선점 노력을 잘 보여줍니다. 미국, 일본, 유럽이 특허와 연구에서 앞서 나가고 있으며, 한국은 비교적 후발주자로 평가되지만, 점차 논문과 특허의 비중을 높이고 있습니다. 특히 양자통신 분야의 특허가 전체에서 가장 높은 비중을 차지하고 있습니다. 한편, 한국의 양자 기술 전문 인력은 약 403명으로, 산업화를 위한 추가적인 인력 양성이 필요합니다. 이와 함께 양자 기술의 산업화 모델은 단기적으로 파일럿 프로젝트 중심으로, 중장기적으로 모든 산업으로 확대될 것으로 전망됩니다."},{id:"총평",title:"총평",content:"이 백서는 양자 기술이 급격히 발전하면서 정부와 산업계가 협력해 새로운 생태계를 구축하고 있다는 점을 강조합니다. 국제 협력과 표준화는 기술적 진보뿐 아니라 상용화를 촉진하는 데 중요한 역할을 하고 있습니다. 이를 통해 양자 기술은 통신, 센싱, 컴퓨팅을 넘어 다양한 산업 분야로 확대될 전망입니다."}]},{id:"출처",title:"출처",content:"양자정보기술 백서",subsections:[{content:l.jsxs("p",{children:["이 문서는"," ",l.jsx("a",{href:"https://www.kqic.kr/main/publication.html?sub1=47&menu=19",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline",color:"#ffaa00"},children:"2023 양자 기술 백서"})," ","를 기반으로 작성되었습니다. 해당 백서는 2023년 한국양자산업협회에서 발행되었으며, 자세한 내용은 위 링크를 통해 확인할 수 있습니다."]})}]}],ij=()=>{const[e,t]=k.useState(Ts[0].id),[n,r]=k.useState(!1),i=Ts.find(s=>s.id===e),o=()=>{r(!n)};return l.jsxs(l.Fragment,{children:[l.jsx(JS,{onClick:o,children:l.jsx("img",{src:n?rj:nj,alt:"Menu Toggle",className:"menu-icon"})}),l.jsx(YS,{}),l.jsxs(_m,{children:[l.jsx(XS,{$isMenuOpen:n,children:l.jsx(tj,{children:Ts.map(s=>l.jsx(ZS,{$isActive:e===s.id,onClick:()=>t(s.id),children:s.title},s.id))})}),l.jsxs(Pm,{children:[l.jsx(Om,{children:i.title}),l.jsx(ej,{children:i.content}),i.subsections&&l.jsx(Tm,{children:i.subsections.map(s=>l.jsxs("div",{children:[l.jsx(Im,{children:s.title}),l.jsx(jt,{children:s.content}),s.content2&&l.jsx(jt,{children:s.content2}),s.content3&&l.jsx(jt,{children:s.content3}),s.content4&&l.jsx(jt,{children:s.content4}),s.content5&&l.jsx(jt,{children:s.content5}),s.content6&&l.jsx(jt,{children:s.content6}),s.content7&&l.jsx(jt,{children:s.content7})]},s.id))})]})]})]})},oj="/assets/person1-B_vibWHo.svg",lj="/assets/person2-X_gPPwlY.svg",sj="/assets/person3-B_2PykZ2.svg",aj="/assets/person4-DR680jHw.svg",uj="/assets/person5-wrCyR2jw.svg",cj=[{year:1900,event:"막스 플랑크, 양자역학의 기초 확립",details:`
      막스 플랑크는 에너지의 불연속성을 제안하며 양자 이론의 기초를 마련했습니다. 
      이 발견은 고전 물리학으로 설명할 수 없었던 현상을 해결하는 데 중요한 역할을 했습니다. 
      특히 흑체 복사 문제를 설명하기 위해 에너지가 일정한 양자 단위로 방출되고 흡수된다는 이론을 도입했습니다.
    `,image:oj},{year:1925,event:"하이젠베르크, 양자역학 수학적 공식화",details:`
      하이젠베르크는 행렬 역학을 도입하여 양자역학의 수학적 기반을 확립했습니다. 
      이 공식화는 이후 슈뢰딩거의 파동역학과 통합되어 현대 양자역학의 토대를 이뤘습니다. 
      또한, 불확정성 원리를 제안하며 입자 위치와 운동량의 정확한 측정이 동시에 불가능함을 설명했습니다.
    `,image:lj},{year:1981,event:"리처드 파인만, 양자 컴퓨팅 개념 제안",details:`
      리처드 파인만은 양자 시스템을 시뮬레이션하기 위해 기존의 고전 컴퓨터로는 한계가 있음을 지적했습니다. 
      그는 양자 물리학의 법칙에 따라 동작하는 컴퓨터, 즉 양자 컴퓨터의 필요성을 제안하며, 
      양자 알고리즘 개발의 새로운 장을 열었습니다.
    `,image:sj},{year:1994,event:"피터 쇼어, 쇼어 알고리즘 발표",details:`
      피터 쇼어는 양자 컴퓨터가 고전 컴퓨터보다 효율적으로 소인수분해를 수행할 수 있음을 보여주는 쇼어 알고리즘을 개발했습니다. 
      이 알고리즘은 현대 암호 체계를 위협하며 양자 암호학과 양자 내성 암호학의 연구를 촉진하는 계기가 되었습니다.
    `,image:aj},{year:2019,event:"구글, 양자 우월성 선언",details:`
      구글은 양자 컴퓨터로 고전 컴퓨터가 수만 년이 걸릴 문제를 200초 만에 해결했다고 발표하며 양자 우월성을 선언했습니다. 
      이 사건은 양자 컴퓨팅이 실제로 강력한 계산 능력을 가질 수 있음을 보여주는 중요한 이정표로 평가됩니다.
    `,image:uj}],dj=[{title:"양자 우월성",description:`
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
    `}],fj=S.div`
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
`,pj=S.h2`
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
`,hj=S.div`
  margin-bottom: 30px;
  user-select: text;
  &:last-child {
    margin-bottom: 0;
  }
`,mj=S.h3`
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
`,gj=S.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #ccc;
  user-select: text;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,vj=S.div`
  width: 100%;
  background-color: #1c2329;
  color: #ffffff;
  min-height: 140vh;
  height: auto;
  margin-bottom: -30vh;
`,xj=S.div`
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
`,yj=S.h1`
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
`,wj=S.div`
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
`,Sj=S.div`
  position: relative;
  margin-bottom: 40px;
  padding-left: 50px;

  &:last-child {
    margin-bottom: 0;
  }
`,jj=S.h2`
  font-size: 1.65rem;
  font-weight: bold;
  color: #60e6f2;
  cursor: text;
  user-select: text;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,kj=S.h3`
  font-size: 1.55rem;
  color: #ddd;
  margin-bottom: 10px;
  cursor: text;
  user-select: text;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
`,bj=S.p`
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
`,Cj=S.img`
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`,Ej=S.div`
  position: absolute;
  left: 10px;
  top: 0;
  width: 20px;
  height: 20px;
  background: #4caf50;
  border-radius: 50%;
  border: 4px solid #1c2329;
  box-shadow: 0 0 0 2px #60e6f2;
`,_j=()=>l.jsx(vj,{children:l.jsxs(xj,{children:[l.jsx(yj,{children:"Quantum Technology Timeline"}),l.jsx(wj,{children:cj.map((e,t)=>l.jsxs(Sj,{children:[l.jsx(Ej,{}),l.jsx(jj,{children:e.year}),l.jsx(kj,{children:e.event}),l.jsx(Cj,{src:e.image,alt:`${e.year} event`}),l.jsx(bj,{children:e.details})]},t))}),l.jsxs(fj,{children:[l.jsx(pj,{children:"양자 개념 정리"}),dj.map((e,t)=>l.jsxs(hj,{children:[l.jsx(mj,{children:e.title}),l.jsx(gj,{children:e.description})]},t))]})]})});S.nav`
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
`;const Pj=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
    @media (max-width: 780px) {
    justify-content: space-between;
    flex-wrap:wrap; /*넘치면 줄바꿈*/
  }
`,Oj=S.button`
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

`,Tj=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-bottom: 20px; 
`;S.h1`
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
  &::selection {
    background-color: #60E6F2;
    color: #000;
  }
  @media(max-width: 780px){
    font-size: 18px; /* 작은 화면에서 글씨 크기 조정 */
  }
`;const Is=[{id:"sum",title:"양자 산업 활용",subsections:[{id:"sum1",title:"정보통신 분야",content:l.jsxs(l.Fragment,{children:["양자 암호 기술은 데이터 전송의 보안성을 획기적으로 높입니다. 기존 암호화 방식은 시간이 지남에 따라 해킹 위험이 증가하지만, ",l.jsx("br",{}),"양자암호 기술은 도청이나 데이터 변조 시도를 원천적으로 방어할 수 있습니다."]})},{id:"sum2",title:"금융 서비스 분야",content:l.jsxs(l.Fragment,{children:["은행 간 거래, 온라인 결제 등 금융 거래에서 데이터 보안은 핵심적인 요소입니다.",l.jsx("br",{}),"양자암호는 이를 보다 안전하게 보호할 수 있으며, 해킹 시도를 즉각적으로 감지하여 거래 신뢰성을 높입니다."]})},{id:"sum3",title:"의료 분야",content:l.jsxs(l.Fragment,{children:["양자암호 기술을 의료 시스템에 도입하면 환자의 진료 기록, 유전자 데이터 등 중요한 정보가 안전하게 보호될 수 있습니다. ",l.jsx("br",{}),"특히 양자컴퓨팅 기술을 활용한 신약 개발 및 연구 과정에서도 데이터 보안을 강화할 수 있어, 의료 분야의 혁신을 촉진하는 데 기여할 수 있습니다. "]})},{id:"sum4",title:"국가 안보와 군사 통신 분야",content:l.jsxs(l.Fragment,{children:["양자암호 기술은 군사 통신과 정부의 기밀 정보 보호에 있어서 중요한 역할을 합니다. 특히 외부의 해킹이나 스파이 활동을 차단하는 데 매우 효과적입니다. ",l.jsx("br",{}),"양자 키 분배(QKD) 방식은 기밀 정보를 안전하게 전달할 수 있는 방법을 제공하며, 도청 시도를 실시간으로 탐지하여 대응할 수 있습니다"]})},{id:"sum5",title:"사물인터넷 분야",content:l.jsxs(l.Fragment,{children:["사물인터넷(IoT) 기기가 점점 증가하면서, 기기 간의 통신 보안이 큰 이슈로 떠오르고 있습니다. ",l.jsx("br",{}),"양자암호 기술을 IoT 네트워크에 적용하면 기기 간 통신의 무결성을 보장하고, 외부의 해킹 위협을 방지할 수 있습니다.",l.jsx("br",{}),"이를 통해 스마트 홈, 스마트 팩토리와 같은 다양한 분야에서 안전한 IoT 환경이 구축될 수 있습니다."]})}]},{id:"it",title:"정보통신 분야",subsections:[{id:"qkd",title:"양자암호통신",content:l.jsxs(l.Fragment,{children:["양자암호통신은 양자역학의 원리를 이용하여 도청이 불가능한 통신을 구현합니다. 양자 키 분배(QKD)를 통해 송신자와 수신자 간에 안전한 암호 키를 공유할 수 있습니다.",l.jsx("br",{}),"이 기술은 금융, 국방 등 보안이 중요한 분야에서 활발히 연구되고 있습니다."]}),content2:l.jsxs(l.Fragment,{children:["한국전자통신연구원(ETRI)은 양자암호통신 기술을 개발하여 상용화에 박차를 가하고 있습니다. ",l.jsx("br",{}),"또한, KT는 양자암호통신을 적용한 네트워크를 구축하여 금융기관과 협력하고 있습니다.",l.jsx("br",{}),"중국은 세계 최초로 위성 기반의 양자암호통신망을 구축하여 장거리 통신에 성공하였으며, 미국과 유럽은 양자 네트워크 연구에 막대한 투자를 하고 있습니다."]})},{id:"network",title:"양자 네트워크",content:l.jsxs(l.Fragment,{children:["양자 네트워크는 양자 상태를 유지하며 정보를 전달하는 네트워크로, 기존 인터넷보다 높은 보안성을 제공합니다. ",l.jsx("br",{}),"양자 중계기와 양자 메모리 등의 기술 개발이 진행 중이며, 장거리 양자 통신을 위한 연구가 활발합니다."]})},{id:"data",title:"양자컴퓨팅을 활용한 데이터 처리",content:l.jsxs(l.Fragment,{children:["양자컴퓨터는 복잡한 계산을 기존 컴퓨터보다 빠르게 처리할 수 있어, 대용량 데이터 분석, 암호 해독 등 정보통신 분야에서의 활용이 기대됩니다. ",l.jsx("br",{}),"특히, 최적화 문제나 머신러닝 분야에서의 응용이 주목받고 있습니다."]})}]},{id:"eco",title:"금융서비스 분야",subsections:[{id:"components",title:"양자 암호화 기술 도입",content:l.jsxs(l.Fragment,{children:["BBVA",l.jsx("br",{}),"스페인의 다국적 금융 그룹인 BBVA는 양자 기술을 금융 서비스에 접목하는 프로젝트에 적극 참여하고 있습니다. 이는 양자 컴퓨터가 금융에서 요구하는 복잡한 연산 등을 효율적으로 해결하는 방안으로 각광받고 있기 때문입니다."]}),content2:l.jsxs(l.Fragment,{children:["골드만삭스(GOldman Sachs)",l.jsx("br",{}),"글로벌 투자은행인 골드만삭스는 양자 컴퓨팅을 활용하여 금융 모델링과 리스크 관리의 효율성을 높이기 위한 연구를 진행하고 있습니다. 이는 양자 기술을 활용한 금융 서비스의 혁신을 목표로 하고 있습니다."]})}]},{id:"med",title:"의료",subsections:[{id:"view",title:"의료 영상",content:l.jsxs(l.Fragment,{children:[l.jsx(lv,{to:"/qimage",style:{textDecoration:"underline"},children:"양자 이미징 기술"}),"은 포톤의 얽힘 상태를 활용하여 기존보다 선명하고 정확한 의료 영상을 제공합니다.",l.jsx("br",{}),"이를 통해 진단의 정확성을 높이고, 조기 발견이 어려운 질병의 진단에 기여합니다."]})},{id:"pill",title:"약물 개발",content:l.jsxs(l.Fragment,{children:["양자 컴퓨팅은 복잡한 분자 구조와 상호작용을 모델링하여 새로운 약물 후보 물질을 발견하거나 기존 약물의 효능을 개선하는 데 활용됩니다.",l.jsx("br",{}),"이는 약물 개발 과정을 가속화하고 비용을 절감하는 데 도움이 됩니다. "]})},{id:"bio",title:"바이오센서",content:"양자 바이오센서는 양자역학적 특성을 이용하여 매우 미세한 농도 변화도 정확하게 감지합니다. 이를 통해 질병의 조기 진단이나 치료 과정의 모니터링에 큰 도움이 됩니다."}]},{id:"gov",title:"국가 안보와 군사 통신",subsections:[{id:"components",title:"해군 3함대사령부의 양자암호통신망 구축",content:l.jsxs(l.Fragment,{children:["2021년 1월, KT는 전라남도청과 해군 3함대사령부에 양자암호 비화통신 보안통신망을 구축하였습니다.",l.jsx("br",{}),"이를 통해 군사 통신의 보안성을 강화하고, 도청 및 해킹을 방지하는 데 기여하고 있습니다."]})},{id:"applications",title:"무선 양자암호통신 기술 개발",content:l.jsxs(l.Fragment,{children:["2023년 10월, KT는 무선 양자암호통신 기술 개발에 속도를 내어 국내 국방 분야를 선점하겠다는 의지를 밝혔습니다.",l.jsx("br",{}),"이를 위해 통신 신호 범위를 현재 2km 수준에서 10km로 5배 늘리고, 외산 의존도가 높은 송·수신기 등의 국산화를 목표로 하고 있습니다.",l.jsx("br",{}),"이 기술은 사단 규모의 군부대가 작전을 수행할 때 데이터 손실 없이 소통할 수 있도록 지원합니다."]})}]},{id:"iot",title:"사물인터넷(IoT)",subsections:[{id:"components",title:"양자 암호화 통신을 통한 IoT 보안 강화",content:l.jsxs(l.Fragment,{children:["양자 암호화 기술은 양자 역학의 원리를 이용하여 도청이 불가능한 통신을 구현합니다. 이를 통해 IoT 기기 간의 데이터 전송 시 보안성을 크게 향상시킬 수 있습니다.",l.jsx("br",{}),"예를 들어, 스마트 홈이나 스마트 시티의 센서 네트워크에서 양자 암호화를 적용하면 외부 공격으로부터 데이터를 안전하게 보호할 수 있습니다"]})},{id:"applications",title:"양자 센서를 활용한 고정밀 데이터 수집",content:l.jsxs(l.Fragment,{children:["양자 센서는 기존 센서보다 높은 정밀도와 민감도를 제공합니다. 이를 통해 IoT 시스템에서 환경 변화나 물리적 상태를 더욱 정확하게 감지할 수 있습니다.",l.jsx("br",{}),"예를 들어, 스마트 팜에서는 양자 센서를 활용하여 토양의 미세한 변화나 작물의 상태를 정밀하게 모니터링하여 생산성을 높일 수 있습니다."]})},{id:"applications",title:"양자 컴퓨팅을 통한 IoT 데이터 처리 효율 향상",content:l.jsxs(l.Fragment,{children:["양자 컴퓨팅은 복잡한 연산을 기존 컴퓨터보다 빠르게 처리할 수 있습니다. 이를 통해 IoT 기기에서 수집되는 방대한 데이터를 효율적으로 분석하고 처리할 수 있습니다.",l.jsx("br",{}),"예를 들어, 스마트 시티의 교통 관리 시스템에서 양자 컴퓨팅을 활용하면 실시간 교통 데이터를 빠르게 분석하여 최적의 교통 흐름을 유지할 수 있습니다."]})}]}],Ij=()=>{const[e,t]=k.useState(Is[0].id),[n,r]=k.useState(!0),i=Is.find(s=>s.id===e),o=()=>{r(!n)};return l.jsx(l.Fragment,{children:l.jsx(_m,{children:l.jsxs(Pm,{children:[l.jsx(Tj,{onClick:o}),n&&l.jsx(Pj,{children:Is.map(s=>l.jsx(Oj,{$isActive:e===s.id,onClick:()=>t(s.id),children:s.title},s.id))}),l.jsx(Om,{children:i.title}),i.subsections&&l.jsx(Tm,{children:i.subsections.map(s=>l.jsxs("div",{children:[l.jsx(Im,{children:s.title}),l.jsx(jt,{children:s.content}),s.content2&&l.jsx(jt,{children:s.content2})]},s.id))})]})})})},zs=S.div`
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
`,zj=()=>l.jsxs(bm,{children:[l.jsx(Em,{children:l.jsx("a",{href:"/example",children:l.jsx("img",{src:Al})})}),l.jsxs(Cm,{children:[l.jsx("h1",{children:"양자 이미징"}),l.jsx("hr",{}),l.jsxs("h2",{style:{fontWeight:"400",marginBottom:"2%"},children:[l.jsx("span",{children:"양자 이미징 기술(Quantum Imaging)"}),"이란 양자 역학의 원리를 활용하여 기존 이미징 기술의 한계를 뛰어넘는 방식으로 이미지를 획득하는 기술입니다.",l.jsx("br",{}),"양자 이미징은 특히 ",l.jsx("span",{children:"얽힘(entanglement), 단일광자(single-photon), 양자 간섭(quantum interference)"}),"과 같은 양자 현상을 이용합니다."]}),l.jsx("h3",{children:"1) 양자 이미징 기술의 특징 "}),l.jsx(zs,{children:l.jsxs("p",{children:["고감도 : 단일광자 수준의 민감도로 이미지를 생성할 수 있어, 매우 약한 빛에서도 고품질의 이미지를 획득할 수 있습니다. ",l.jsx("br",{})," 고해상도 : 양자광원의 특성을 활용해 기존 광학계에서의 회절 한계(Diffraction Limit)를 뛰어넘는 이미징이 가능하며, 더 정밀한 세부 정보를 담을 수 있습니다.",l.jsx("br",{}),"낮은 광량 요구 : 얽힘 상태의 광자를 활용해, 낮은 광량으로도 고품질 이미지를 생성할 수 있어 생체 조직이나 민감한 물질의 손상을 줄이는 데 유리합니다. ",l.jsx("br",{}),"비파괴 측정 : 양자 이미징 기술은 물체와 직접 상호작용하지 않고도 이미지를 얻을 수 있어, 섬세한 물체를 손상시키지 않고 관찰할 수 있습니다."]})}),l.jsx("h3",{children:"2) 대표적인 양자 이미징 기술"}),l.jsxs(zs,{children:[l.jsxs("p",{children:[l.jsx("span",{style:{color:"#0489B1"},children:"고스트 이미징(Ghost Imaging)"}),l.jsx("br",{}),"얽힘 광자를 이용하여 대상 물체와 직접 상호작용하지 않고 이미지를 얻는 기술입니다. 하나의 광자는 물체를 관통하지 않고도, 얽힘 상태에 있는 다른 광자의 정보를 통해 이미지를 생성합니다."]}),l.jsxs("p",{children:[l.jsx("span",{style:{color:"#0489B1"},children:"양자 라이다(Quantum LiDAR)"}),l.jsx("br",{}),"빛의 반사 시간을 이용해 거리와 이미지를 측정하는 기술로, 양자 기술을 적용하여 더 정밀한 측정이 가능합니다."]}),l.jsxs("p",{children:[l.jsx("span",{style:{color:"#0489B1"},children:"양자 광학 현미경(Quantum Optical Microscopy)"}),l.jsx("br",{}),"얽힘 광자와 단일광자를 이용해 기존 현미경보다 더 높은 해상도로 이미지를 획득합니다."]})]}),l.jsx("h3",{children:"3) 현재 연구 진척도"}),l.jsxs(zs,{children:[l.jsx("p",{children:' - 얽힘 광자와 단일광자를 활용한 기초 연구가 활발히 진행 중입니다."고스트 이미징" 등 원리를 기반으로 한 실험에서 상당한 성공을 거두었으며, 양자 광원 및 센서 기술이 발전하고 있습니다.'}),l.jsx("p",{children:" - MIT, NASA 등 주요 연구 기관은 양자 이미징 기술의 성능을 증명하는 시범 연구를 수행하고 있습니다.광학 정밀도를 높이기 위해 양자 센서와의 결합이 연구되고 있습니다."}),l.jsx("p",{children:" - 양자 이미징 기술을 국방, 의료 분야에서 시범적으로 도입. 일부 고급 의료 장비와 산업 검사 장비에 제한적으로 적용되고 있습니다."})]})]})]});function Lj(){return l.jsxs(rv,{children:[l.jsx(Fx,{}),l.jsx(DS,{}),l.jsxs(Y2,{children:[l.jsx(ue,{path:"/",element:l.jsx(wx,{})}),l.jsx(ue,{path:"/concept",element:l.jsx(Ew,{})}),l.jsx(ue,{path:"/description",element:l.jsx(Yw,{})}),l.jsx(ue,{path:"/quiz",element:l.jsx(Pw,{})}),l.jsx(ue,{path:"/medium",element:l.jsx(zw,{})}),l.jsx(ue,{path:"/advanced",element:l.jsx(Rw,{})}),l.jsx(ue,{path:"/quizmain",element:l.jsx(Tw,{})}),l.jsx(ue,{path:"/character",element:l.jsx(wS,{})}),l.jsx(ue,{path:"/cat",element:l.jsx(ES,{})}),l.jsx(ue,{path:"/company",element:l.jsx(Aw,{})}),l.jsx(ue,{path:"/company/:companyName",element:l.jsx(WS,{})}),l.jsx(ue,{path:"/business/:businessName",element:l.jsx(US,{})}),l.jsx(ue,{path:"/recent",element:l.jsx(Vw,{})}),l.jsx(ue,{path:"/coinentanglement",element:l.jsx(FS,{})}),l.jsx(ue,{path:"/computing",element:l.jsx(VS,{})}),l.jsx(ue,{path:"/industry",element:l.jsx(ij,{})}),l.jsx(ue,{path:"/quantumTimeline",element:l.jsx(_j,{})}),l.jsx(ue,{path:"/example",element:l.jsx(Ij,{})}),l.jsx(ue,{path:"/qimage",element:l.jsx(zj,{})})]}),l.jsx(Jw,{}),l.jsx(GS,{}),l.jsx(Kx,{})]})}const Rj=px`
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
`,Nj={title:bn`
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 800;
      font-size: 4rem;
      letter-spacing: 0.07em;
    `,text:bn`
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 500;
      font-size: 1.5rem;
      letter-spacing: 0.07em;
    `},Mj={fonts:Nj};function Fj(){return l.jsx(l.Fragment,{children:l.jsxs(cx,{theme:Mj,children:[l.jsx(Rj,{}),l.jsx(Lj,{})]})})}Ls.createRoot(document.getElementById("root")).render(l.jsx(fe.StrictMode,{children:l.jsx(Fj,{})}));
