function C0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function j0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var jc={exports:{}},xo={},Ec={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gr=Symbol.for("react.element"),E0=Symbol.for("react.portal"),_0=Symbol.for("react.fragment"),P0=Symbol.for("react.strict_mode"),z0=Symbol.for("react.profiler"),N0=Symbol.for("react.provider"),I0=Symbol.for("react.context"),L0=Symbol.for("react.forward_ref"),T0=Symbol.for("react.suspense"),R0=Symbol.for("react.memo"),$0=Symbol.for("react.lazy"),La=Symbol.iterator;function O0(e){return e===null||typeof e!="object"?null:(e=La&&e[La]||e["@@iterator"],typeof e=="function"?e:null)}var _c={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pc=Object.assign,zc={};function Yn(e,t,n){this.props=e,this.context=t,this.refs=zc,this.updater=n||_c}Yn.prototype.isReactComponent={};Yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Nc(){}Nc.prototype=Yn.prototype;function Is(e,t,n){this.props=e,this.context=t,this.refs=zc,this.updater=n||_c}var Ls=Is.prototype=new Nc;Ls.constructor=Is;Pc(Ls,Yn.prototype);Ls.isPureReactComponent=!0;var Ta=Array.isArray,Ic=Object.prototype.hasOwnProperty,Ts={current:null},Lc={key:!0,ref:!0,__self:!0,__source:!0};function Tc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Ic.call(t,r)&&!Lc.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Gr,type:e,key:o,ref:l,props:i,_owner:Ts.current}}function F0(e,t){return{$$typeof:Gr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Rs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gr}function M0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ra=/\/+/g;function Ko(e,t){return typeof e=="object"&&e!==null&&e.key!=null?M0(""+e.key):t.toString(36)}function Si(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Gr:case E0:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Ko(l,0):r,Ta(i)?(n="",e!=null&&(n=e.replace(Ra,"$&/")+"/"),Si(i,t,n,"",function(c){return c})):i!=null&&(Rs(i)&&(i=F0(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ra,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Ta(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+Ko(o,s);l+=Si(o,t,n,a,i)}else if(a=O0(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+Ko(o,s++),l+=Si(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function br(e,t,n){if(e==null)return e;var r=[],i=0;return Si(e,r,"","",function(o){return t.call(n,o,i++)}),r}function D0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},ki={transition:null},B0={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:ki,ReactCurrentOwner:Ts};F.Children={map:br,forEach:function(e,t,n){br(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return br(e,function(){t++}),t},toArray:function(e){return br(e,function(t){return t})||[]},only:function(e){if(!Rs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Yn;F.Fragment=_0;F.Profiler=z0;F.PureComponent=Is;F.StrictMode=P0;F.Suspense=T0;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B0;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Pc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Ts.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Ic.call(t,a)&&!Lc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Gr,type:e.type,key:i,ref:o,props:r,_owner:l}};F.createContext=function(e){return e={$$typeof:I0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:N0,_context:e},e.Consumer=e};F.createElement=Tc;F.createFactory=function(e){var t=Tc.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:L0,render:e}};F.isValidElement=Rs;F.lazy=function(e){return{$$typeof:$0,_payload:{_status:-1,_result:e},_init:D0}};F.memo=function(e,t){return{$$typeof:R0,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=ki.transition;ki.transition={};try{e()}finally{ki.transition=t}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(e,t){return ye.current.useCallback(e,t)};F.useContext=function(e){return ye.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};F.useEffect=function(e,t){return ye.current.useEffect(e,t)};F.useId=function(){return ye.current.useId()};F.useImperativeHandle=function(e,t,n){return ye.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return ye.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return ye.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return ye.current.useMemo(e,t)};F.useReducer=function(e,t,n){return ye.current.useReducer(e,t,n)};F.useRef=function(e){return ye.current.useRef(e)};F.useState=function(e){return ye.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return ye.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return ye.current.useTransition()};F.version="18.2.0";Ec.exports=F;var C=Ec.exports;const ee=j0(C),A0=C0({__proto__:null,default:ee},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0=C,W0=Symbol.for("react.element"),V0=Symbol.for("react.fragment"),H0=Object.prototype.hasOwnProperty,Q0=U0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G0={key:!0,ref:!0,__self:!0,__source:!0};function Rc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)H0.call(t,r)&&!G0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:W0,type:e,key:o,ref:l,props:i,_owner:Q0.current}}xo.Fragment=V0;xo.jsx=Rc;xo.jsxs=Rc;jc.exports=xo;var u=jc.exports,El={},$c={exports:{}},Le={},Oc={exports:{}},Fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,L){var $=z.length;z.push(L);e:for(;0<$;){var A=$-1>>>1,U=z[A];if(0<i(U,L))z[A]=L,z[$]=U,$=A;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var L=z[0],$=z.pop();if($!==L){z[0]=$;e:for(var A=0,U=z.length,Wt=U>>>1;A<Wt;){var Ae=2*(A+1)-1,mt=z[Ae],Ee=Ae+1,nt=z[Ee];if(0>i(mt,$))Ee<U&&0>i(nt,mt)?(z[A]=nt,z[Ee]=$,A=Ee):(z[A]=mt,z[Ae]=$,A=Ae);else if(Ee<U&&0>i(nt,$))z[A]=nt,z[Ee]=$,A=Ee;else break e}}return L}function i(z,L){var $=z.sortIndex-L.sortIndex;return $!==0?$:z.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],c=[],m=1,h=null,g=3,v=!1,x=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(z){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=z)r(c),L.sortIndex=L.expirationTime,t(a,L);else break;L=n(c)}}function y(z){if(w=!1,p(z),!x)if(n(a)!==null)x=!0,bn(k);else{var L=n(c);L!==null&&Ut(y,L.startTime-z)}}function k(z,L){x=!1,w&&(w=!1,f(I),I=-1),v=!0;var $=g;try{for(p(L),h=n(a);h!==null&&(!(h.expirationTime>L)||z&&!me());){var A=h.callback;if(typeof A=="function"){h.callback=null,g=h.priorityLevel;var U=A(h.expirationTime<=L);L=e.unstable_now(),typeof U=="function"?h.callback=U:h===n(a)&&r(a),p(L)}else r(a);h=n(a)}if(h!==null)var Wt=!0;else{var Ae=n(c);Ae!==null&&Ut(y,Ae.startTime-L),Wt=!1}return Wt}finally{h=null,g=$,v=!1}}var E=!1,S=null,I=-1,R=5,T=-1;function me(){return!(e.unstable_now()-T<R)}function tt(){if(S!==null){var z=e.unstable_now();T=z;var L=!0;try{L=S(!0,z)}finally{L?At():(E=!1,S=null)}}else E=!1}var At;if(typeof d=="function")At=function(){d(tt)};else if(typeof MessageChannel<"u"){var Jr=new MessageChannel,Go=Jr.port2;Jr.port1.onmessage=tt,At=function(){Go.postMessage(null)}}else At=function(){_(tt,0)};function bn(z){S=z,E||(E=!0,At())}function Ut(z,L){I=_(function(){z(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,bn(k))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var $=g;g=L;try{return z()}finally{g=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,L){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=g;g=z;try{return L()}finally{g=$}},e.unstable_scheduleCallback=function(z,L,$){var A=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?A+$:A):$=A,z){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=$+U,z={id:m++,callback:L,priorityLevel:z,startTime:$,expirationTime:U,sortIndex:-1},$>A?(z.sortIndex=$,t(c,z),n(a)===null&&z===n(c)&&(w?(f(I),I=-1):w=!0,Ut(y,$-A))):(z.sortIndex=U,t(a,z),x||v||(x=!0,bn(k))),z},e.unstable_shouldYield=me,e.unstable_wrapCallback=function(z){var L=g;return function(){var $=g;g=L;try{return z.apply(this,arguments)}finally{g=$}}}})(Fc);Oc.exports=Fc;var Y0=Oc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mc=C,Ie=Y0;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dc=new Set,Er={};function cn(e,t){On(e,t),On(e+"Capture",t)}function On(e,t){for(Er[e]=t,e=0;e<t.length;e++)Dc.add(t[e])}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_l=Object.prototype.hasOwnProperty,K0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$a={},Oa={};function Z0(e){return _l.call(Oa,e)?!0:_l.call($a,e)?!1:K0.test(e)?Oa[e]=!0:($a[e]=!0,!1)}function X0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function J0(e,t,n,r){if(t===null||typeof t>"u"||X0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var $s=/[\-:]([a-z])/g;function Os(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($s,Os);ce[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($s,Os);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($s,Os);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fs(e,t,n,r){var i=ce.hasOwnProperty(t)?ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(J0(t,n,i,r)&&(n=null),r||i===null?Z0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ht=Mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ei=Symbol.for("react.element"),gn=Symbol.for("react.portal"),vn=Symbol.for("react.fragment"),Ms=Symbol.for("react.strict_mode"),Pl=Symbol.for("react.profiler"),Bc=Symbol.for("react.provider"),Ac=Symbol.for("react.context"),Ds=Symbol.for("react.forward_ref"),zl=Symbol.for("react.suspense"),Nl=Symbol.for("react.suspense_list"),Bs=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),Uc=Symbol.for("react.offscreen"),Fa=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=Fa&&e[Fa]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Zo;function cr(e){if(Zo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zo=t&&t[1]||""}return`
`+Zo+e}var Xo=!1;function Jo(e,t){if(!e||Xo)return"";Xo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Xo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?cr(e):""}function q0(e){switch(e.tag){case 5:return cr(e.type);case 16:return cr("Lazy");case 13:return cr("Suspense");case 19:return cr("SuspenseList");case 0:case 2:case 15:return e=Jo(e.type,!1),e;case 11:return e=Jo(e.type.render,!1),e;case 1:return e=Jo(e.type,!0),e;default:return""}}function Il(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vn:return"Fragment";case gn:return"Portal";case Pl:return"Profiler";case Ms:return"StrictMode";case zl:return"Suspense";case Nl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ac:return(e.displayName||"Context")+".Consumer";case Bc:return(e._context.displayName||"Context")+".Provider";case Ds:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Bs:return t=e.displayName||null,t!==null?t:Il(e.type)||"Memo";case xt:t=e._payload,e=e._init;try{return Il(e(t))}catch{}}return null}function b0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Il(t);case 8:return t===Ms?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ot(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ep(e){var t=Wc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ti(e){e._valueTracker||(e._valueTracker=ep(e))}function Vc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Wc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ll(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ma(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ot(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Hc(e,t){t=t.checked,t!=null&&Fs(e,"checked",t,!1)}function Tl(e,t){Hc(e,t);var n=Ot(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Rl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Rl(e,t.type,Ot(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Da(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Rl(e,t,n){(t!=="number"||Bi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var dr=Array.isArray;function Nn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ot(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $l(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ba(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(dr(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ot(n)}}function Qc(e,t){var n=Ot(t.value),r=Ot(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Aa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ol(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ni,Yc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ni=ni||document.createElement("div"),ni.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ni.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tp=["Webkit","ms","Moz","O"];Object.keys(mr).forEach(function(e){tp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mr[t]=mr[e]})});function Kc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||mr.hasOwnProperty(e)&&mr[e]?(""+t).trim():t+"px"}function Zc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Kc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var np=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fl(e,t){if(t){if(np[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Ml(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dl=null;function As(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bl=null,In=null,Ln=null;function Ua(e){if(e=Zr(e)){if(typeof Bl!="function")throw Error(j(280));var t=e.stateNode;t&&(t=jo(t),Bl(e.stateNode,e.type,t))}}function Xc(e){In?Ln?Ln.push(e):Ln=[e]:In=e}function Jc(){if(In){var e=In,t=Ln;if(Ln=In=null,Ua(e),t)for(e=0;e<t.length;e++)Ua(t[e])}}function qc(e,t){return e(t)}function bc(){}var qo=!1;function ed(e,t,n){if(qo)return e(t,n);qo=!0;try{return qc(e,t,n)}finally{qo=!1,(In!==null||Ln!==null)&&(bc(),Jc())}}function Pr(e,t){var n=e.stateNode;if(n===null)return null;var r=jo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Al=!1;if(ct)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){Al=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{Al=!1}function rp(e,t,n,r,i,o,l,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var gr=!1,Ai=null,Ui=!1,Ul=null,ip={onError:function(e){gr=!0,Ai=e}};function op(e,t,n,r,i,o,l,s,a){gr=!1,Ai=null,rp.apply(ip,arguments)}function lp(e,t,n,r,i,o,l,s,a){if(op.apply(this,arguments),gr){if(gr){var c=Ai;gr=!1,Ai=null}else throw Error(j(198));Ui||(Ui=!0,Ul=c)}}function dn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function td(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wa(e){if(dn(e)!==e)throw Error(j(188))}function sp(e){var t=e.alternate;if(!t){if(t=dn(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Wa(i),e;if(o===r)return Wa(i),t;o=o.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function nd(e){return e=sp(e),e!==null?rd(e):null}function rd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=rd(e);if(t!==null)return t;e=e.sibling}return null}var id=Ie.unstable_scheduleCallback,Va=Ie.unstable_cancelCallback,ap=Ie.unstable_shouldYield,up=Ie.unstable_requestPaint,J=Ie.unstable_now,cp=Ie.unstable_getCurrentPriorityLevel,Us=Ie.unstable_ImmediatePriority,od=Ie.unstable_UserBlockingPriority,Wi=Ie.unstable_NormalPriority,dp=Ie.unstable_LowPriority,ld=Ie.unstable_IdlePriority,wo=null,be=null;function fp(e){if(be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(wo,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:mp,pp=Math.log,hp=Math.LN2;function mp(e){return e>>>=0,e===0?32:31-(pp(e)/hp|0)|0}var ri=64,ii=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=fr(s):(o&=l,o!==0&&(r=fr(o)))}else l=n&~i,l!==0?r=fr(l):o!==0&&(r=fr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qe(t),i=1<<n,r|=e[n],t&=~i;return r}function gp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Qe(o),s=1<<l,a=i[l];a===-1?(!(s&n)||s&r)&&(i[l]=gp(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function Wl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sd(){var e=ri;return ri<<=1,!(ri&4194240)&&(ri=64),e}function bo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=n}function yp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Qe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ws(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var B=0;function ad(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ud,Vs,cd,dd,fd,Vl=!1,oi=[],_t=null,Pt=null,zt=null,zr=new Map,Nr=new Map,St=[],xp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ha(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(t.pointerId)}}function rr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Zr(t),t!==null&&Vs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function wp(e,t,n,r,i){switch(t){case"focusin":return _t=rr(_t,e,t,n,r,i),!0;case"dragenter":return Pt=rr(Pt,e,t,n,r,i),!0;case"mouseover":return zt=rr(zt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return zr.set(o,rr(zr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Nr.set(o,rr(Nr.get(o)||null,e,t,n,r,i)),!0}return!1}function pd(e){var t=Yt(e.target);if(t!==null){var n=dn(t);if(n!==null){if(t=n.tag,t===13){if(t=td(n),t!==null){e.blockedOn=t,fd(e.priority,function(){cd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ci(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Dl=r,n.target.dispatchEvent(r),Dl=null}else return t=Zr(n),t!==null&&Vs(t),e.blockedOn=n,!1;t.shift()}return!0}function Qa(e,t,n){Ci(e)&&n.delete(t)}function Sp(){Vl=!1,_t!==null&&Ci(_t)&&(_t=null),Pt!==null&&Ci(Pt)&&(Pt=null),zt!==null&&Ci(zt)&&(zt=null),zr.forEach(Qa),Nr.forEach(Qa)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Vl||(Vl=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Sp)))}function Ir(e){function t(i){return ir(i,e)}if(0<oi.length){ir(oi[0],e);for(var n=1;n<oi.length;n++){var r=oi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&ir(_t,e),Pt!==null&&ir(Pt,e),zt!==null&&ir(zt,e),zr.forEach(t),Nr.forEach(t),n=0;n<St.length;n++)r=St[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<St.length&&(n=St[0],n.blockedOn===null);)pd(n),n.blockedOn===null&&St.shift()}var Tn=ht.ReactCurrentBatchConfig,Hi=!0;function kp(e,t,n,r){var i=B,o=Tn.transition;Tn.transition=null;try{B=1,Hs(e,t,n,r)}finally{B=i,Tn.transition=o}}function Cp(e,t,n,r){var i=B,o=Tn.transition;Tn.transition=null;try{B=4,Hs(e,t,n,r)}finally{B=i,Tn.transition=o}}function Hs(e,t,n,r){if(Hi){var i=Hl(e,t,n,r);if(i===null)ul(e,t,r,Qi,n),Ha(e,r);else if(wp(i,e,t,n,r))r.stopPropagation();else if(Ha(e,r),t&4&&-1<xp.indexOf(e)){for(;i!==null;){var o=Zr(i);if(o!==null&&ud(o),o=Hl(e,t,n,r),o===null&&ul(e,t,r,Qi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ul(e,t,r,null,n)}}var Qi=null;function Hl(e,t,n,r){if(Qi=null,e=As(r),e=Yt(e),e!==null)if(t=dn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=td(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qi=e,null}function hd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cp()){case Us:return 1;case od:return 4;case Wi:case dp:return 16;case ld:return 536870912;default:return 16}default:return 16}}var Ct=null,Qs=null,ji=null;function md(){if(ji)return ji;var e,t=Qs,n=t.length,r,i="value"in Ct?Ct.value:Ct.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return ji=i.slice(e,1<r?1-r:void 0)}function Ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function li(){return!0}function Ga(){return!1}function Te(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?li:Ga,this.isPropagationStopped=Ga,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=li)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=li)},persist:function(){},isPersistent:li}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gs=Te(Kn),Kr=Z({},Kn,{view:0,detail:0}),jp=Te(Kr),el,tl,or,So=Z({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(el=e.screenX-or.screenX,tl=e.screenY-or.screenY):tl=el=0,or=e),el)},movementY:function(e){return"movementY"in e?e.movementY:tl}}),Ya=Te(So),Ep=Z({},So,{dataTransfer:0}),_p=Te(Ep),Pp=Z({},Kr,{relatedTarget:0}),nl=Te(Pp),zp=Z({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),Np=Te(zp),Ip=Z({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lp=Te(Ip),Tp=Z({},Kn,{data:0}),Ka=Te(Tp),Rp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$p={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Op={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Op[e])?!!t[e]:!1}function Ys(){return Fp}var Mp=Z({},Kr,{key:function(e){if(e.key){var t=Rp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$p[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ys,charCode:function(e){return e.type==="keypress"?Ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dp=Te(Mp),Bp=Z({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Za=Te(Bp),Ap=Z({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ys}),Up=Te(Ap),Wp=Z({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vp=Te(Wp),Hp=Z({},So,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qp=Te(Hp),Gp=[9,13,27,32],Ks=ct&&"CompositionEvent"in window,vr=null;ct&&"documentMode"in document&&(vr=document.documentMode);var Yp=ct&&"TextEvent"in window&&!vr,gd=ct&&(!Ks||vr&&8<vr&&11>=vr),Xa=" ",Ja=!1;function vd(e,t){switch(e){case"keyup":return Gp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yn=!1;function Kp(e,t){switch(e){case"compositionend":return yd(t);case"keypress":return t.which!==32?null:(Ja=!0,Xa);case"textInput":return e=t.data,e===Xa&&Ja?null:e;default:return null}}function Zp(e,t){if(yn)return e==="compositionend"||!Ks&&vd(e,t)?(e=md(),ji=Qs=Ct=null,yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gd&&t.locale!=="ko"?null:t.data;default:return null}}var Xp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xp[e.type]:t==="textarea"}function xd(e,t,n,r){Xc(r),t=Gi(t,"onChange"),0<t.length&&(n=new Gs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var yr=null,Lr=null;function Jp(e){Id(e,0)}function ko(e){var t=Sn(e);if(Vc(t))return e}function qp(e,t){if(e==="change")return t}var wd=!1;if(ct){var rl;if(ct){var il="oninput"in document;if(!il){var ba=document.createElement("div");ba.setAttribute("oninput","return;"),il=typeof ba.oninput=="function"}rl=il}else rl=!1;wd=rl&&(!document.documentMode||9<document.documentMode)}function eu(){yr&&(yr.detachEvent("onpropertychange",Sd),Lr=yr=null)}function Sd(e){if(e.propertyName==="value"&&ko(Lr)){var t=[];xd(t,Lr,e,As(e)),ed(Jp,t)}}function bp(e,t,n){e==="focusin"?(eu(),yr=t,Lr=n,yr.attachEvent("onpropertychange",Sd)):e==="focusout"&&eu()}function eh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ko(Lr)}function th(e,t){if(e==="click")return ko(t)}function nh(e,t){if(e==="input"||e==="change")return ko(t)}function rh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:rh;function Tr(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_l.call(t,i)||!Ke(e[i],t[i]))return!1}return!0}function tu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nu(e,t){var n=tu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tu(n)}}function kd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cd(){for(var e=window,t=Bi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bi(e.document)}return t}function Zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ih(e){var t=Cd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&kd(n.ownerDocument.documentElement,n)){if(r!==null&&Zs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=nu(n,o);var l=nu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var oh=ct&&"documentMode"in document&&11>=document.documentMode,xn=null,Ql=null,xr=null,Gl=!1;function ru(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gl||xn==null||xn!==Bi(r)||(r=xn,"selectionStart"in r&&Zs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xr&&Tr(xr,r)||(xr=r,r=Gi(Ql,"onSelect"),0<r.length&&(t=new Gs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xn)))}function si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wn={animationend:si("Animation","AnimationEnd"),animationiteration:si("Animation","AnimationIteration"),animationstart:si("Animation","AnimationStart"),transitionend:si("Transition","TransitionEnd")},ol={},jd={};ct&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete wn.animationend.animation,delete wn.animationiteration.animation,delete wn.animationstart.animation),"TransitionEvent"in window||delete wn.transitionend.transition);function Co(e){if(ol[e])return ol[e];if(!wn[e])return e;var t=wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jd)return ol[e]=t[n];return e}var Ed=Co("animationend"),_d=Co("animationiteration"),Pd=Co("animationstart"),zd=Co("transitionend"),Nd=new Map,iu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,t){Nd.set(e,t),cn(t,[e])}for(var ll=0;ll<iu.length;ll++){var sl=iu[ll],lh=sl.toLowerCase(),sh=sl[0].toUpperCase()+sl.slice(1);Mt(lh,"on"+sh)}Mt(Ed,"onAnimationEnd");Mt(_d,"onAnimationIteration");Mt(Pd,"onAnimationStart");Mt("dblclick","onDoubleClick");Mt("focusin","onFocus");Mt("focusout","onBlur");Mt(zd,"onTransitionEnd");On("onMouseEnter",["mouseout","mouseover"]);On("onMouseLeave",["mouseout","mouseover"]);On("onPointerEnter",["pointerout","pointerover"]);On("onPointerLeave",["pointerout","pointerover"]);cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ah=new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));function ou(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,lp(r,t,void 0,e),e.currentTarget=null}function Id(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==o&&i.isPropagationStopped())break e;ou(i,s,c),o=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,c=s.currentTarget,s=s.listener,a!==o&&i.isPropagationStopped())break e;ou(i,s,c),o=a}}}if(Ui)throw e=Ul,Ui=!1,Ul=null,e}function V(e,t){var n=t[Jl];n===void 0&&(n=t[Jl]=new Set);var r=e+"__bubble";n.has(r)||(Ld(t,e,2,!1),n.add(r))}function al(e,t,n){var r=0;t&&(r|=4),Ld(n,e,r,t)}var ai="_reactListening"+Math.random().toString(36).slice(2);function Rr(e){if(!e[ai]){e[ai]=!0,Dc.forEach(function(n){n!=="selectionchange"&&(ah.has(n)||al(n,!1,e),al(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ai]||(t[ai]=!0,al("selectionchange",!1,t))}}function Ld(e,t,n,r){switch(hd(t)){case 1:var i=kp;break;case 4:i=Cp;break;default:i=Hs}n=i.bind(null,t,n,e),i=void 0,!Al||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ul(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Yt(s),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}s=s.parentNode}}r=r.return}ed(function(){var c=o,m=As(n),h=[];e:{var g=Nd.get(e);if(g!==void 0){var v=Gs,x=e;switch(e){case"keypress":if(Ei(n)===0)break e;case"keydown":case"keyup":v=Dp;break;case"focusin":x="focus",v=nl;break;case"focusout":x="blur",v=nl;break;case"beforeblur":case"afterblur":v=nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ya;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=_p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Up;break;case Ed:case _d:case Pd:v=Np;break;case zd:v=Vp;break;case"scroll":v=jp;break;case"wheel":v=Qp;break;case"copy":case"cut":case"paste":v=Lp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Za}var w=(t&4)!==0,_=!w&&e==="scroll",f=w?g!==null?g+"Capture":null:g;w=[];for(var d=c,p;d!==null;){p=d;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=Pr(d,f),y!=null&&w.push($r(d,y,p)))),_)break;d=d.return}0<w.length&&(g=new v(g,x,null,n,m),h.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==Dl&&(x=n.relatedTarget||n.fromElement)&&(Yt(x)||x[dt]))break e;if((v||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=c,x=x?Yt(x):null,x!==null&&(_=dn(x),x!==_||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=c),v!==x)){if(w=Ya,y="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Za,y="onPointerLeave",f="onPointerEnter",d="pointer"),_=v==null?g:Sn(v),p=x==null?g:Sn(x),g=new w(y,d+"leave",v,n,m),g.target=_,g.relatedTarget=p,y=null,Yt(m)===c&&(w=new w(f,d+"enter",x,n,m),w.target=p,w.relatedTarget=_,y=w),_=y,v&&x)t:{for(w=v,f=x,d=0,p=w;p;p=fn(p))d++;for(p=0,y=f;y;y=fn(y))p++;for(;0<d-p;)w=fn(w),d--;for(;0<p-d;)f=fn(f),p--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=fn(w),f=fn(f)}w=null}else w=null;v!==null&&lu(h,g,v,w,!1),x!==null&&_!==null&&lu(h,_,x,w,!0)}}e:{if(g=c?Sn(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var k=qp;else if(qa(g))if(wd)k=nh;else{k=eh;var E=bp}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=th);if(k&&(k=k(e,c))){xd(h,k,n,m);break e}E&&E(e,g,c),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Rl(g,"number",g.value)}switch(E=c?Sn(c):window,e){case"focusin":(qa(E)||E.contentEditable==="true")&&(xn=E,Ql=c,xr=null);break;case"focusout":xr=Ql=xn=null;break;case"mousedown":Gl=!0;break;case"contextmenu":case"mouseup":case"dragend":Gl=!1,ru(h,n,m);break;case"selectionchange":if(oh)break;case"keydown":case"keyup":ru(h,n,m)}var S;if(Ks)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else yn?vd(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(gd&&n.locale!=="ko"&&(yn||I!=="onCompositionStart"?I==="onCompositionEnd"&&yn&&(S=md()):(Ct=m,Qs="value"in Ct?Ct.value:Ct.textContent,yn=!0)),E=Gi(c,I),0<E.length&&(I=new Ka(I,e,null,n,m),h.push({event:I,listeners:E}),S?I.data=S:(S=yd(n),S!==null&&(I.data=S)))),(S=Yp?Kp(e,n):Zp(e,n))&&(c=Gi(c,"onBeforeInput"),0<c.length&&(m=new Ka("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:c}),m.data=S))}Id(h,t)})}function $r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Pr(e,n),o!=null&&r.unshift($r(e,o,i)),o=Pr(e,t),o!=null&&r.push($r(e,o,i))),e=e.return}return r}function fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function lu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,i?(a=Pr(n,o),a!=null&&l.unshift($r(n,a,s))):i||(a=Pr(n,o),a!=null&&l.push($r(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var uh=/\r\n?/g,ch=/\u0000|\uFFFD/g;function su(e){return(typeof e=="string"?e:""+e).replace(uh,`
`).replace(ch,"")}function ui(e,t,n){if(t=su(t),su(e)!==t&&n)throw Error(j(425))}function Yi(){}var Yl=null,Kl=null;function Zl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xl=typeof setTimeout=="function"?setTimeout:void 0,dh=typeof clearTimeout=="function"?clearTimeout:void 0,au=typeof Promise=="function"?Promise:void 0,fh=typeof queueMicrotask=="function"?queueMicrotask:typeof au<"u"?function(e){return au.resolve(null).then(e).catch(ph)}:Xl;function ph(e){setTimeout(function(){throw e})}function cl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ir(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ir(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function uu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zn=Math.random().toString(36).slice(2),qe="__reactFiber$"+Zn,Or="__reactProps$"+Zn,dt="__reactContainer$"+Zn,Jl="__reactEvents$"+Zn,hh="__reactListeners$"+Zn,mh="__reactHandles$"+Zn;function Yt(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=uu(e);e!==null;){if(n=e[qe])return n;e=uu(e)}return t}e=n,n=e.parentNode}return null}function Zr(e){return e=e[qe]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function jo(e){return e[Or]||null}var ql=[],kn=-1;function Dt(e){return{current:e}}function Q(e){0>kn||(e.current=ql[kn],ql[kn]=null,kn--)}function W(e,t){kn++,ql[kn]=e.current,e.current=t}var Ft={},he=Dt(Ft),ke=Dt(!1),tn=Ft;function Fn(e,t){var n=e.type.contextTypes;if(!n)return Ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ce(e){return e=e.childContextTypes,e!=null}function Ki(){Q(ke),Q(he)}function cu(e,t,n){if(he.current!==Ft)throw Error(j(168));W(he,t),W(ke,n)}function Td(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,b0(e)||"Unknown",i));return Z({},n,r)}function Zi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ft,tn=he.current,W(he,e),W(ke,ke.current),!0}function du(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Td(e,t,tn),r.__reactInternalMemoizedMergedChildContext=e,Q(ke),Q(he),W(he,e)):Q(ke),W(ke,n)}var ot=null,Eo=!1,dl=!1;function Rd(e){ot===null?ot=[e]:ot.push(e)}function gh(e){Eo=!0,Rd(e)}function Bt(){if(!dl&&ot!==null){dl=!0;var e=0,t=B;try{var n=ot;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ot=null,Eo=!1}catch(i){throw ot!==null&&(ot=ot.slice(e+1)),id(Us,Bt),i}finally{B=t,dl=!1}}return null}var Cn=[],jn=0,Xi=null,Ji=0,Re=[],$e=0,nn=null,st=1,at="";function Ht(e,t){Cn[jn++]=Ji,Cn[jn++]=Xi,Xi=e,Ji=t}function $d(e,t,n){Re[$e++]=st,Re[$e++]=at,Re[$e++]=nn,nn=e;var r=st;e=at;var i=32-Qe(r)-1;r&=~(1<<i),n+=1;var o=32-Qe(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,st=1<<32-Qe(t)+i|n<<i|r,at=o+e}else st=1<<o|n<<i|r,at=e}function Xs(e){e.return!==null&&(Ht(e,1),$d(e,1,0))}function Js(e){for(;e===Xi;)Xi=Cn[--jn],Cn[jn]=null,Ji=Cn[--jn],Cn[jn]=null;for(;e===nn;)nn=Re[--$e],Re[$e]=null,at=Re[--$e],Re[$e]=null,st=Re[--$e],Re[$e]=null}var Ne=null,ze=null,G=!1,He=null;function Od(e,t){var n=Oe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,ze=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nn!==null?{id:st,overflow:at}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Oe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,ze=null,!0):!1;default:return!1}}function bl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function es(e){if(G){var t=ze;if(t){var n=t;if(!fu(e,t)){if(bl(e))throw Error(j(418));t=Nt(n.nextSibling);var r=Ne;t&&fu(e,t)?Od(r,n):(e.flags=e.flags&-4097|2,G=!1,Ne=e)}}else{if(bl(e))throw Error(j(418));e.flags=e.flags&-4097|2,G=!1,Ne=e}}}function pu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function ci(e){if(e!==Ne)return!1;if(!G)return pu(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zl(e.type,e.memoizedProps)),t&&(t=ze)){if(bl(e))throw Fd(),Error(j(418));for(;t;)Od(e,t),t=Nt(t.nextSibling)}if(pu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Ne?Nt(e.stateNode.nextSibling):null;return!0}function Fd(){for(var e=ze;e;)e=Nt(e.nextSibling)}function Mn(){ze=Ne=null,G=!1}function qs(e){He===null?He=[e]:He.push(e)}var vh=ht.ReactCurrentBatchConfig;function We(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var qi=Dt(null),bi=null,En=null,bs=null;function ea(){bs=En=bi=null}function ta(e){var t=qi.current;Q(qi),e._currentValue=t}function ts(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Rn(e,t){bi=e,bs=En=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(bs!==e)if(e={context:e,memoizedValue:t,next:null},En===null){if(bi===null)throw Error(j(308));En=e,bi.dependencies={lanes:0,firstContext:e}}else En=En.next=e;return t}var Kt=null;function na(e){Kt===null?Kt=[e]:Kt.push(e)}function Md(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,na(t)):(n.next=i.next,i.next=n),t.interleaved=n,ft(e,r)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wt=!1;function ra(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function It(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ft(e,n)}return i=r.interleaved,i===null?(t.next=t,na(r)):(t.next=i.next,i.next=t),r.interleaved=t,ft(e,n)}function _i(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ws(e,n)}}function hu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function eo(e,t,n,r){var i=e.updateQueue;wt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,c=a.next;a.next=null,l===null?o=c:l.next=c,l=a;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==l&&(s===null?m.firstBaseUpdate=c:s.next=c,m.lastBaseUpdate=a))}if(o!==null){var h=i.baseState;l=0,m=c=a=null,s=o;do{var g=s.lane,v=s.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,w=s;switch(g=t,v=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){h=x.call(v,h,g);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,g=typeof x=="function"?x.call(v,h,g):x,g==null)break e;h=Z({},h,g);break e;case 2:wt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else v={eventTime:v,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(c=m=v,a=h):m=m.next=v,l|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(m===null&&(a=h),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);on|=l,e.lanes=l,e.memoizedState=h}}function mu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Bd=new Mc.Component().refs;function ns(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _o={isMounted:function(e){return(e=e._reactInternals)?dn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Tt(e),o=ut(r,i);o.payload=t,n!=null&&(o.callback=n),t=It(e,o,i),t!==null&&(Ge(t,e,i,r),_i(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Tt(e),o=ut(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=It(e,o,i),t!==null&&(Ge(t,e,i,r),_i(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=Tt(e),i=ut(n,r);i.tag=2,t!=null&&(i.callback=t),t=It(e,i,r),t!==null&&(Ge(t,e,r,n),_i(t,e,r))}};function gu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Tr(n,r)||!Tr(i,o):!0}function Ad(e,t,n){var r=!1,i=Ft,o=t.contextType;return typeof o=="object"&&o!==null?o=Me(o):(i=Ce(t)?tn:he.current,r=t.contextTypes,o=(r=r!=null)?Fn(e,i):Ft),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_o,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function vu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_o.enqueueReplaceState(t,t.state,null)}function rs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Bd,ra(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Me(o):(o=Ce(t)?tn:he.current,i.context=Fn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ns(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&_o.enqueueReplaceState(i,i.state,null),eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===Bd&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function di(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yu(e){var t=e._init;return t(e._payload)}function Ud(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=Rt(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,y){return d===null||d.tag!==6?(d=yl(p,f.mode,y),d.return=f,d):(d=i(d,p),d.return=f,d)}function a(f,d,p,y){var k=p.type;return k===vn?m(f,d,p.props.children,y,p.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===xt&&yu(k)===d.type)?(y=i(d,p.props),y.ref=lr(f,d,p),y.return=f,y):(y=Ti(p.type,p.key,p.props,null,f.mode,y),y.ref=lr(f,d,p),y.return=f,y)}function c(f,d,p,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=xl(p,f.mode,y),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function m(f,d,p,y,k){return d===null||d.tag!==7?(d=qt(p,f.mode,y,k),d.return=f,d):(d=i(d,p),d.return=f,d)}function h(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=yl(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ei:return p=Ti(d.type,d.key,d.props,null,f.mode,p),p.ref=lr(f,null,d),p.return=f,p;case gn:return d=xl(d,f.mode,p),d.return=f,d;case xt:var y=d._init;return h(f,y(d._payload),p)}if(dr(d)||tr(d))return d=qt(d,f.mode,p,null),d.return=f,d;di(f,d)}return null}function g(f,d,p,y){var k=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:s(f,d,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ei:return p.key===k?a(f,d,p,y):null;case gn:return p.key===k?c(f,d,p,y):null;case xt:return k=p._init,g(f,d,k(p._payload),y)}if(dr(p)||tr(p))return k!==null?null:m(f,d,p,y,null);di(f,p)}return null}function v(f,d,p,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,s(d,f,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ei:return f=f.get(y.key===null?p:y.key)||null,a(d,f,y,k);case gn:return f=f.get(y.key===null?p:y.key)||null,c(d,f,y,k);case xt:var E=y._init;return v(f,d,p,E(y._payload),k)}if(dr(y)||tr(y))return f=f.get(p)||null,m(d,f,y,k,null);di(d,y)}return null}function x(f,d,p,y){for(var k=null,E=null,S=d,I=d=0,R=null;S!==null&&I<p.length;I++){S.index>I?(R=S,S=null):R=S.sibling;var T=g(f,S,p[I],y);if(T===null){S===null&&(S=R);break}e&&S&&T.alternate===null&&t(f,S),d=o(T,d,I),E===null?k=T:E.sibling=T,E=T,S=R}if(I===p.length)return n(f,S),G&&Ht(f,I),k;if(S===null){for(;I<p.length;I++)S=h(f,p[I],y),S!==null&&(d=o(S,d,I),E===null?k=S:E.sibling=S,E=S);return G&&Ht(f,I),k}for(S=r(f,S);I<p.length;I++)R=v(S,f,I,p[I],y),R!==null&&(e&&R.alternate!==null&&S.delete(R.key===null?I:R.key),d=o(R,d,I),E===null?k=R:E.sibling=R,E=R);return e&&S.forEach(function(me){return t(f,me)}),G&&Ht(f,I),k}function w(f,d,p,y){var k=tr(p);if(typeof k!="function")throw Error(j(150));if(p=k.call(p),p==null)throw Error(j(151));for(var E=k=null,S=d,I=d=0,R=null,T=p.next();S!==null&&!T.done;I++,T=p.next()){S.index>I?(R=S,S=null):R=S.sibling;var me=g(f,S,T.value,y);if(me===null){S===null&&(S=R);break}e&&S&&me.alternate===null&&t(f,S),d=o(me,d,I),E===null?k=me:E.sibling=me,E=me,S=R}if(T.done)return n(f,S),G&&Ht(f,I),k;if(S===null){for(;!T.done;I++,T=p.next())T=h(f,T.value,y),T!==null&&(d=o(T,d,I),E===null?k=T:E.sibling=T,E=T);return G&&Ht(f,I),k}for(S=r(f,S);!T.done;I++,T=p.next())T=v(S,f,I,T.value,y),T!==null&&(e&&T.alternate!==null&&S.delete(T.key===null?I:T.key),d=o(T,d,I),E===null?k=T:E.sibling=T,E=T);return e&&S.forEach(function(tt){return t(f,tt)}),G&&Ht(f,I),k}function _(f,d,p,y){if(typeof p=="object"&&p!==null&&p.type===vn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ei:e:{for(var k=p.key,E=d;E!==null;){if(E.key===k){if(k=p.type,k===vn){if(E.tag===7){n(f,E.sibling),d=i(E,p.props.children),d.return=f,f=d;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===xt&&yu(k)===E.type){n(f,E.sibling),d=i(E,p.props),d.ref=lr(f,E,p),d.return=f,f=d;break e}n(f,E);break}else t(f,E);E=E.sibling}p.type===vn?(d=qt(p.props.children,f.mode,y,p.key),d.return=f,f=d):(y=Ti(p.type,p.key,p.props,null,f.mode,y),y.ref=lr(f,d,p),y.return=f,f=y)}return l(f);case gn:e:{for(E=p.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=xl(p,f.mode,y),d.return=f,f=d}return l(f);case xt:return E=p._init,_(f,d,E(p._payload),y)}if(dr(p))return x(f,d,p,y);if(tr(p))return w(f,d,p,y);di(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,p),d.return=f,f=d):(n(f,d),d=yl(p,f.mode,y),d.return=f,f=d),l(f)):n(f,d)}return _}var Dn=Ud(!0),Wd=Ud(!1),Xr={},et=Dt(Xr),Fr=Dt(Xr),Mr=Dt(Xr);function Zt(e){if(e===Xr)throw Error(j(174));return e}function ia(e,t){switch(W(Mr,t),W(Fr,e),W(et,Xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ol(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ol(t,e)}Q(et),W(et,t)}function Bn(){Q(et),Q(Fr),Q(Mr)}function Vd(e){Zt(Mr.current);var t=Zt(et.current),n=Ol(t,e.type);t!==n&&(W(Fr,e),W(et,n))}function oa(e){Fr.current===e&&(Q(et),Q(Fr))}var Y=Dt(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fl=[];function la(){for(var e=0;e<fl.length;e++)fl[e]._workInProgressVersionPrimary=null;fl.length=0}var Pi=ht.ReactCurrentDispatcher,pl=ht.ReactCurrentBatchConfig,rn=0,K=null,te=null,ie=null,no=!1,wr=!1,Dr=0,yh=0;function de(){throw Error(j(321))}function sa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function aa(e,t,n,r,i,o){if(rn=o,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pi.current=e===null||e.memoizedState===null?kh:Ch,e=n(r,i),wr){o=0;do{if(wr=!1,Dr=0,25<=o)throw Error(j(301));o+=1,ie=te=null,t.updateQueue=null,Pi.current=jh,e=n(r,i)}while(wr)}if(Pi.current=ro,t=te!==null&&te.next!==null,rn=0,ie=te=K=null,no=!1,t)throw Error(j(300));return e}function ua(){var e=Dr!==0;return Dr=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?K.memoizedState=ie=e:ie=ie.next=e,ie}function De(){if(te===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=ie===null?K.memoizedState:ie.next;if(t!==null)ie=t,te=e;else{if(e===null)throw Error(j(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ie===null?K.memoizedState=ie=e:ie=ie.next=e}return ie}function Br(e,t){return typeof t=="function"?t(e):t}function hl(e){var t=De(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=te,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,a=null,c=o;do{var m=c.lane;if((rn&m)===m)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=h,l=r):a=a.next=h,K.lanes|=m,on|=m}c=c.next}while(c!==null&&c!==o);a===null?l=r:a.next=s,Ke(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,K.lanes|=o,on|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ml(e){var t=De(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ke(o,t.memoizedState)||(Se=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Hd(){}function Qd(e,t){var n=K,r=De(),i=t(),o=!Ke(r.memoizedState,i);if(o&&(r.memoizedState=i,Se=!0),r=r.queue,ca(Kd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,Ar(9,Yd.bind(null,n,r,i,t),void 0,null),se===null)throw Error(j(349));rn&30||Gd(n,t,i)}return i}function Gd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yd(e,t,n,r){t.value=n,t.getSnapshot=r,Zd(t)&&Xd(e)}function Kd(e,t,n){return n(function(){Zd(t)&&Xd(e)})}function Zd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function Xd(e){var t=ft(e,1);t!==null&&Ge(t,e,1,-1)}function xu(e){var t=Xe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:e},t.queue=e,e=e.dispatch=Sh.bind(null,K,e),[t.memoizedState,e]}function Ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jd(){return De().memoizedState}function zi(e,t,n,r){var i=Xe();K.flags|=e,i.memoizedState=Ar(1|t,n,void 0,r===void 0?null:r)}function Po(e,t,n,r){var i=De();r=r===void 0?null:r;var o=void 0;if(te!==null){var l=te.memoizedState;if(o=l.destroy,r!==null&&sa(r,l.deps)){i.memoizedState=Ar(t,n,o,r);return}}K.flags|=e,i.memoizedState=Ar(1|t,n,o,r)}function wu(e,t){return zi(8390656,8,e,t)}function ca(e,t){return Po(2048,8,e,t)}function qd(e,t){return Po(4,2,e,t)}function bd(e,t){return Po(4,4,e,t)}function ef(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tf(e,t,n){return n=n!=null?n.concat([e]):null,Po(4,4,ef.bind(null,t,e),n)}function da(){}function nf(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rf(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function of(e,t,n){return rn&21?(Ke(n,t)||(n=sd(),K.lanes|=n,on|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function xh(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=pl.transition;pl.transition={};try{e(!1),t()}finally{B=n,pl.transition=r}}function lf(){return De().memoizedState}function wh(e,t,n){var r=Tt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sf(e))af(t,n);else if(n=Md(e,t,n,r),n!==null){var i=ve();Ge(n,e,r,i),uf(n,t,r)}}function Sh(e,t,n){var r=Tt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sf(e))af(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Ke(s,l)){var a=t.interleaved;a===null?(i.next=i,na(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Md(e,t,i,r),n!==null&&(i=ve(),Ge(n,e,r,i),uf(n,t,r))}}function sf(e){var t=e.alternate;return e===K||t!==null&&t===K}function af(e,t){wr=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function uf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ws(e,n)}}var ro={readContext:Me,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},kh={readContext:Me,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:wu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zi(4194308,4,ef.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return zi(4,2,e,t)},useMemo:function(e,t){var n=Xe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=wh.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:xu,useDebugValue:da,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=xu(!1),t=e[0];return e=xh.bind(null,e[1]),Xe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,i=Xe();if(G){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),se===null)throw Error(j(349));rn&30||Gd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,wu(Kd.bind(null,r,o,e),[e]),r.flags|=2048,Ar(9,Yd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Xe(),t=se.identifierPrefix;if(G){var n=at,r=st;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=yh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ch={readContext:Me,useCallback:nf,useContext:Me,useEffect:ca,useImperativeHandle:tf,useInsertionEffect:qd,useLayoutEffect:bd,useMemo:rf,useReducer:hl,useRef:Jd,useState:function(){return hl(Br)},useDebugValue:da,useDeferredValue:function(e){var t=De();return of(t,te.memoizedState,e)},useTransition:function(){var e=hl(Br)[0],t=De().memoizedState;return[e,t]},useMutableSource:Hd,useSyncExternalStore:Qd,useId:lf,unstable_isNewReconciler:!1},jh={readContext:Me,useCallback:nf,useContext:Me,useEffect:ca,useImperativeHandle:tf,useInsertionEffect:qd,useLayoutEffect:bd,useMemo:rf,useReducer:ml,useRef:Jd,useState:function(){return ml(Br)},useDebugValue:da,useDeferredValue:function(e){var t=De();return te===null?t.memoizedState=e:of(t,te.memoizedState,e)},useTransition:function(){var e=ml(Br)[0],t=De().memoizedState;return[e,t]},useMutableSource:Hd,useSyncExternalStore:Qd,useId:lf,unstable_isNewReconciler:!1};function An(e,t){try{var n="",r=t;do n+=q0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function gl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function is(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Eh=typeof WeakMap=="function"?WeakMap:Map;function cf(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oo||(oo=!0,hs=r),is(e,t)},n}function df(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){is(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){is(e,t),typeof r!="function"&&(Lt===null?Lt=new Set([this]):Lt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Su(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Eh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Bh.bind(null,e,t,n),t.then(e,e))}function ku(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,It(n,t,1))),n.lanes|=1),e)}var _h=ht.ReactCurrentOwner,Se=!1;function ge(e,t,n,r){t.child=e===null?Wd(t,null,n,r):Dn(t,e.child,n,r)}function ju(e,t,n,r,i){n=n.render;var o=t.ref;return Rn(t,i),r=aa(e,t,n,r,o,i),n=ua(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pt(e,t,i)):(G&&n&&Xs(t),t.flags|=1,ge(e,t,r,i),t.child)}function Eu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!xa(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ff(e,t,o,r,i)):(e=Ti(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Tr,n(l,r)&&e.ref===t.ref)return pt(e,t,i)}return t.flags|=1,e=Rt(o,r),e.ref=t.ref,e.return=t,t.child=e}function ff(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Tr(o,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,pt(e,t,i)}return os(e,t,n,r,i)}function pf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Pn,Pe),Pe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Pn,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(Pn,Pe),Pe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(Pn,Pe),Pe|=r;return ge(e,t,i,n),t.child}function hf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function os(e,t,n,r,i){var o=Ce(n)?tn:he.current;return o=Fn(t,o),Rn(t,i),n=aa(e,t,n,r,o,i),r=ua(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pt(e,t,i)):(G&&r&&Xs(t),t.flags|=1,ge(e,t,n,i),t.child)}function _u(e,t,n,r,i){if(Ce(n)){var o=!0;Zi(t)}else o=!1;if(Rn(t,i),t.stateNode===null)Ni(e,t),Ad(t,n,r),rs(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Me(c):(c=Ce(n)?tn:he.current,c=Fn(t,c));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==c)&&vu(t,l,r,c),wt=!1;var g=t.memoizedState;l.state=g,eo(t,r,l,i),a=t.memoizedState,s!==r||g!==a||ke.current||wt?(typeof m=="function"&&(ns(t,n,m,r),a=t.memoizedState),(s=wt||gu(t,n,s,r,g,a,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Dd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:We(t.type,s),l.props=c,h=t.pendingProps,g=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Me(a):(a=Ce(n)?tn:he.current,a=Fn(t,a));var v=n.getDerivedStateFromProps;(m=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||g!==a)&&vu(t,l,r,a),wt=!1,g=t.memoizedState,l.state=g,eo(t,r,l,i);var x=t.memoizedState;s!==h||g!==x||ke.current||wt?(typeof v=="function"&&(ns(t,n,v,r),x=t.memoizedState),(c=wt||gu(t,n,c,r,g,x,a)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ls(e,t,n,r,o,i)}function ls(e,t,n,r,i,o){hf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&du(t,n,!1),pt(e,t,o);r=t.stateNode,_h.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Dn(t,e.child,null,o),t.child=Dn(t,null,s,o)):ge(e,t,s,o),t.memoizedState=r.state,i&&du(t,n,!0),t.child}function mf(e){var t=e.stateNode;t.pendingContext?cu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cu(e,t.context,!1),ia(e,t.containerInfo)}function Pu(e,t,n,r,i){return Mn(),qs(i),t.flags|=256,ge(e,t,n,r),t.child}var ss={dehydrated:null,treeContext:null,retryLane:0};function as(e){return{baseLanes:e,cachePool:null,transitions:null}}function gf(e,t,n){var r=t.pendingProps,i=Y.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(Y,i&1),e===null)return es(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Io(l,r,0,null),e=qt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=as(n),t.memoizedState=ss,e):fa(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Ph(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Rt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Rt(s,o):(o=qt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?as(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ss,r}return o=e.child,e=o.sibling,r=Rt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function fa(e,t){return t=Io({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fi(e,t,n,r){return r!==null&&qs(r),Dn(t,e.child,null,n),e=fa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ph(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=gl(Error(j(422))),fi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Io({mode:"visible",children:r.children},i,0,null),o=qt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Dn(t,e.child,null,l),t.child.memoizedState=as(l),t.memoizedState=ss,o);if(!(t.mode&1))return fi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(j(419)),r=gl(o,r,void 0),fi(e,t,l,r)}if(s=(l&e.childLanes)!==0,Se||s){if(r=se,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ft(e,i),Ge(r,e,i,-1))}return ya(),r=gl(Error(j(421))),fi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ah.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ze=Nt(i.nextSibling),Ne=t,G=!0,He=null,e!==null&&(Re[$e++]=st,Re[$e++]=at,Re[$e++]=nn,st=e.id,at=e.overflow,nn=t),t=fa(t,r.children),t.flags|=4096,t)}function zu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ts(e.return,t,n)}function vl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function vf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ge(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zu(e,n,t);else if(e.tag===19)zu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Y,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),vl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}vl(t,!0,n,null,o);break;case"together":vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ni(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),on|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Rt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Rt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zh(e,t,n){switch(t.tag){case 3:mf(t),Mn();break;case 5:Vd(t);break;case 1:Ce(t.type)&&Zi(t);break;case 4:ia(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(qi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?gf(e,t,n):(W(Y,Y.current&1),e=pt(e,t,n),e!==null?e.sibling:null);W(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,pf(e,t,n)}return pt(e,t,n)}var yf,us,xf,wf;yf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};us=function(){};xf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Zt(et.current);var o=null;switch(n){case"input":i=Ll(e,i),r=Ll(e,r),o=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),o=[];break;case"textarea":i=$l(e,i),r=$l(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yi)}Fl(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Er.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Er.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&V("scroll",e),o||s===a||(o=[])):(o=o||[]).push(c,a))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};wf=function(e,t,n,r){n!==r&&(t.flags|=4)};function sr(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Nh(e,t,n){var r=t.pendingProps;switch(Js(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return Ce(t.type)&&Ki(),fe(t),null;case 3:return r=t.stateNode,Bn(),Q(ke),Q(he),la(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ci(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,He!==null&&(vs(He),He=null))),us(e,t),fe(t),null;case 5:oa(t);var i=Zt(Mr.current);if(n=t.type,e!==null&&t.stateNode!=null)xf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return fe(t),null}if(e=Zt(et.current),ci(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[qe]=t,r[Or]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<pr.length;i++)V(pr[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Ma(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":Ba(r,o),V("invalid",r)}Fl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ui(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ui(r.textContent,s,e),i=["children",""+s]):Er.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&V("scroll",r)}switch(n){case"input":ti(r),Da(r,o,!0);break;case"textarea":ti(r),Aa(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Yi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[qe]=t,e[Or]=r,yf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ml(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<pr.length;i++)V(pr[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":Ma(e,r),i=Ll(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),V("invalid",e);break;case"textarea":Ba(e,r),i=$l(e,r),V("invalid",e);break;default:i=r}Fl(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?Zc(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Yc(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&_r(e,a):typeof a=="number"&&_r(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Er.hasOwnProperty(o)?a!=null&&o==="onScroll"&&V("scroll",e):a!=null&&Fs(e,o,a,l))}switch(n){case"input":ti(e),Da(e,r,!1);break;case"textarea":ti(e),Aa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ot(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Nn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Yi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.stateNode!=null)wf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Zt(Mr.current),Zt(et.current),ci(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(o=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:ui(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ui(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return fe(t),null;case 13:if(Q(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&ze!==null&&t.mode&1&&!(t.flags&128))Fd(),Mn(),t.flags|=98560,o=!1;else if(o=ci(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[qe]=t}else Mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;fe(t),o=!1}else He!==null&&(vs(He),He=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?ne===0&&(ne=3):ya())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return Bn(),us(e,t),e===null&&Rr(t.stateNode.containerInfo),fe(t),null;case 10:return ta(t.type._context),fe(t),null;case 17:return Ce(t.type)&&Ki(),fe(t),null;case 19:if(Q(Y),o=t.memoizedState,o===null)return fe(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)sr(o,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=to(e),l!==null){for(t.flags|=128,sr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Y,Y.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>Un&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304)}else{if(!r)if(e=to(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!G)return fe(t),null}else 2*J()-o.renderingStartTime>Un&&n!==1073741824&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,n=Y.current,W(Y,r?n&1|2:n&1),t):(fe(t),null);case 22:case 23:return va(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pe&1073741824&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Ih(e,t){switch(Js(t),t.tag){case 1:return Ce(t.type)&&Ki(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bn(),Q(ke),Q(he),la(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return oa(t),null;case 13:if(Q(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(Y),null;case 4:return Bn(),null;case 10:return ta(t.type._context),null;case 22:case 23:return va(),null;case 24:return null;default:return null}}var pi=!1,pe=!1,Lh=typeof WeakSet=="function"?WeakSet:Set,N=null;function _n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function cs(e,t,n){try{n()}catch(r){X(e,t,r)}}var Nu=!1;function Th(e,t){if(Yl=Hi,e=Cd(),Zs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,c=0,m=0,h=e,g=null;t:for(;;){for(var v;h!==n||i!==0&&h.nodeType!==3||(s=l+i),h!==o||r!==0&&h.nodeType!==3||(a=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(v=h.firstChild)!==null;)g=h,h=v;for(;;){if(h===e)break t;if(g===n&&++c===i&&(s=l),g===o&&++m===r&&(a=l),(v=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kl={focusedElem:e,selectionRange:n},Hi=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,_=x.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:We(t.type,w),_);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(y){X(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return x=Nu,Nu=!1,x}function Sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&cs(t,n,o)}i=i.next}while(i!==r)}}function zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ds(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sf(e){var t=e.alternate;t!==null&&(e.alternate=null,Sf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],delete t[Or],delete t[Jl],delete t[hh],delete t[mh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kf(e){return e.tag===5||e.tag===3||e.tag===4}function Iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yi));else if(r!==4&&(e=e.child,e!==null))for(fs(e,t,n),e=e.sibling;e!==null;)fs(e,t,n),e=e.sibling}function ps(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ps(e,t,n),e=e.sibling;e!==null;)ps(e,t,n),e=e.sibling}var ae=null,Ve=!1;function vt(e,t,n){for(n=n.child;n!==null;)Cf(e,t,n),n=n.sibling}function Cf(e,t,n){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(wo,n)}catch{}switch(n.tag){case 5:pe||_n(n,t);case 6:var r=ae,i=Ve;ae=null,vt(e,t,n),ae=r,Ve=i,ae!==null&&(Ve?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Ve?(e=ae,n=n.stateNode,e.nodeType===8?cl(e.parentNode,n):e.nodeType===1&&cl(e,n),Ir(e)):cl(ae,n.stateNode));break;case 4:r=ae,i=Ve,ae=n.stateNode.containerInfo,Ve=!0,vt(e,t,n),ae=r,Ve=i;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&cs(n,t,l),i=i.next}while(i!==r)}vt(e,t,n);break;case 1:if(!pe&&(_n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){X(n,t,s)}vt(e,t,n);break;case 21:vt(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,vt(e,t,n),pe=r):vt(e,t,n);break;default:vt(e,t,n)}}function Lu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Lh),t.forEach(function(r){var i=Uh.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ae=s.stateNode,Ve=!1;break e;case 3:ae=s.stateNode.containerInfo,Ve=!0;break e;case 4:ae=s.stateNode.containerInfo,Ve=!0;break e}s=s.return}if(ae===null)throw Error(j(160));Cf(o,l,i),ae=null,Ve=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){X(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jf(t,e),t=t.sibling}function jf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),Ze(e),r&4){try{Sr(3,e,e.return),zo(3,e)}catch(w){X(e,e.return,w)}try{Sr(5,e,e.return)}catch(w){X(e,e.return,w)}}break;case 1:Ue(t,e),Ze(e),r&512&&n!==null&&_n(n,n.return);break;case 5:if(Ue(t,e),Ze(e),r&512&&n!==null&&_n(n,n.return),e.flags&32){var i=e.stateNode;try{_r(i,"")}catch(w){X(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Hc(i,o),Ml(s,l);var c=Ml(s,o);for(l=0;l<a.length;l+=2){var m=a[l],h=a[l+1];m==="style"?Zc(i,h):m==="dangerouslySetInnerHTML"?Yc(i,h):m==="children"?_r(i,h):Fs(i,m,h,c)}switch(s){case"input":Tl(i,o);break;case"textarea":Qc(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Nn(i,!!o.multiple,v,!1):g!==!!o.multiple&&(o.defaultValue!=null?Nn(i,!!o.multiple,o.defaultValue,!0):Nn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Or]=o}catch(w){X(e,e.return,w)}}break;case 6:if(Ue(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){X(e,e.return,w)}}break;case 3:if(Ue(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ir(t.containerInfo)}catch(w){X(e,e.return,w)}break;case 4:Ue(t,e),Ze(e);break;case 13:Ue(t,e),Ze(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ma=J())),r&4&&Lu(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(c=pe)||m,Ue(t,e),pe=c):Ue(t,e),Ze(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(N=e,m=e.child;m!==null;){for(h=N=m;N!==null;){switch(g=N,v=g.child,g.tag){case 0:case 11:case 14:case 15:Sr(4,g,g.return);break;case 1:_n(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){X(r,n,w)}}break;case 5:_n(g,g.return);break;case 22:if(g.memoizedState!==null){Ru(h);continue}}v!==null?(v.return=g,N=v):Ru(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,a=h.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Kc("display",l))}catch(w){X(e,e.return,w)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(w){X(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ue(t,e),Ze(e),r&4&&Lu(e);break;case 21:break;default:Ue(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(kf(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_r(i,""),r.flags&=-33);var o=Iu(e);ps(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Iu(e);fs(e,s,l);break;default:throw Error(j(161))}}catch(a){X(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rh(e,t,n){N=e,Ef(e)}function Ef(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||pi;if(!l){var s=i.alternate,a=s!==null&&s.memoizedState!==null||pe;s=pi;var c=pe;if(pi=l,(pe=a)&&!c)for(N=i;N!==null;)l=N,a=l.child,l.tag===22&&l.memoizedState!==null?$u(i):a!==null?(a.return=l,N=a):$u(i);for(;o!==null;)N=o,Ef(o),o=o.sibling;N=i,pi=s,pe=c}Tu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):Tu(e)}}function Tu(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||zo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&mu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}mu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Ir(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}pe||t.flags&512&&ds(t)}catch(g){X(t,t.return,g)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Ru(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function $u(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zo(4,t)}catch(a){X(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){X(t,i,a)}}var o=t.return;try{ds(t)}catch(a){X(t,o,a)}break;case 5:var l=t.return;try{ds(t)}catch(a){X(t,l,a)}}}catch(a){X(t,t.return,a)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var $h=Math.ceil,io=ht.ReactCurrentDispatcher,pa=ht.ReactCurrentOwner,Fe=ht.ReactCurrentBatchConfig,M=0,se=null,b=null,ue=0,Pe=0,Pn=Dt(0),ne=0,Ur=null,on=0,No=0,ha=0,kr=null,we=null,ma=0,Un=1/0,rt=null,oo=!1,hs=null,Lt=null,hi=!1,jt=null,lo=0,Cr=0,ms=null,Ii=-1,Li=0;function ve(){return M&6?J():Ii!==-1?Ii:Ii=J()}function Tt(e){return e.mode&1?M&2&&ue!==0?ue&-ue:vh.transition!==null?(Li===0&&(Li=sd()),Li):(e=B,e!==0||(e=window.event,e=e===void 0?16:hd(e.type)),e):1}function Ge(e,t,n,r){if(50<Cr)throw Cr=0,ms=null,Error(j(185));Yr(e,n,r),(!(M&2)||e!==se)&&(e===se&&(!(M&2)&&(No|=n),ne===4&&kt(e,ue)),je(e,r),n===1&&M===0&&!(t.mode&1)&&(Un=J()+500,Eo&&Bt()))}function je(e,t){var n=e.callbackNode;vp(e,t);var r=Vi(e,e===se?ue:0);if(r===0)n!==null&&Va(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Va(n),t===1)e.tag===0?gh(Ou.bind(null,e)):Rd(Ou.bind(null,e)),fh(function(){!(M&6)&&Bt()}),n=null;else{switch(ad(r)){case 1:n=Us;break;case 4:n=od;break;case 16:n=Wi;break;case 536870912:n=ld;break;default:n=Wi}n=Rf(n,_f.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _f(e,t){if(Ii=-1,Li=0,M&6)throw Error(j(327));var n=e.callbackNode;if($n()&&e.callbackNode!==n)return null;var r=Vi(e,e===se?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=so(e,r);else{t=r;var i=M;M|=2;var o=zf();(se!==e||ue!==t)&&(rt=null,Un=J()+500,Jt(e,t));do try{Mh();break}catch(s){Pf(e,s)}while(!0);ea(),io.current=o,M=i,b!==null?t=0:(se=null,ue=0,t=ne)}if(t!==0){if(t===2&&(i=Wl(e),i!==0&&(r=i,t=gs(e,i))),t===1)throw n=Ur,Jt(e,0),kt(e,r),je(e,J()),n;if(t===6)kt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Oh(i)&&(t=so(e,r),t===2&&(o=Wl(e),o!==0&&(r=o,t=gs(e,o))),t===1))throw n=Ur,Jt(e,0),kt(e,r),je(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Qt(e,we,rt);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=ma+500-J(),10<t)){if(Vi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Xl(Qt.bind(null,e,we,rt),t);break}Qt(e,we,rt);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Qe(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$h(r/1960))-r,10<r){e.timeoutHandle=Xl(Qt.bind(null,e,we,rt),r);break}Qt(e,we,rt);break;case 5:Qt(e,we,rt);break;default:throw Error(j(329))}}}return je(e,J()),e.callbackNode===n?_f.bind(null,e):null}function gs(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(Jt(e,t).flags|=256),e=so(e,t),e!==2&&(t=we,we=n,t!==null&&vs(t)),e}function vs(e){we===null?we=e:we.push.apply(we,e)}function Oh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ke(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~ha,t&=~No,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qe(t),r=1<<n;e[n]=-1,t&=~r}}function Ou(e){if(M&6)throw Error(j(327));$n();var t=Vi(e,0);if(!(t&1))return je(e,J()),null;var n=so(e,t);if(e.tag!==0&&n===2){var r=Wl(e);r!==0&&(t=r,n=gs(e,r))}if(n===1)throw n=Ur,Jt(e,0),kt(e,t),je(e,J()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qt(e,we,rt),je(e,J()),null}function ga(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Un=J()+500,Eo&&Bt())}}function ln(e){jt!==null&&jt.tag===0&&!(M&6)&&$n();var t=M;M|=1;var n=Fe.transition,r=B;try{if(Fe.transition=null,B=1,e)return e()}finally{B=r,Fe.transition=n,M=t,!(M&6)&&Bt()}}function va(){Pe=Pn.current,Q(Pn)}function Jt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,dh(n)),b!==null)for(n=b.return;n!==null;){var r=n;switch(Js(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ki();break;case 3:Bn(),Q(ke),Q(he),la();break;case 5:oa(r);break;case 4:Bn();break;case 13:Q(Y);break;case 19:Q(Y);break;case 10:ta(r.type._context);break;case 22:case 23:va()}n=n.return}if(se=e,b=e=Rt(e.current,null),ue=Pe=t,ne=0,Ur=null,ha=No=on=0,we=kr=null,Kt!==null){for(t=0;t<Kt.length;t++)if(n=Kt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Kt=null}return e}function Pf(e,t){do{var n=b;try{if(ea(),Pi.current=ro,no){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}no=!1}if(rn=0,ie=te=K=null,wr=!1,Dr=0,pa.current=null,n===null||n.return===null){ne=1,Ur=t,b=null;break}e:{var o=e,l=n.return,s=n,a=t;if(t=ue,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,m=s,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=ku(l);if(v!==null){v.flags&=-257,Cu(v,l,s,o,t),v.mode&1&&Su(o,c,t),t=v,a=c;var x=t.updateQueue;if(x===null){var w=new Set;w.add(a),t.updateQueue=w}else x.add(a);break e}else{if(!(t&1)){Su(o,c,t),ya();break e}a=Error(j(426))}}else if(G&&s.mode&1){var _=ku(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Cu(_,l,s,o,t),qs(An(a,s));break e}}o=a=An(a,s),ne!==4&&(ne=2),kr===null?kr=[o]:kr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=cf(o,a,t);hu(o,f);break e;case 1:s=a;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Lt===null||!Lt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=df(o,s,t);hu(o,y);break e}}o=o.return}while(o!==null)}If(n)}catch(k){t=k,b===n&&n!==null&&(b=n=n.return);continue}break}while(!0)}function zf(){var e=io.current;return io.current=ro,e===null?ro:e}function ya(){(ne===0||ne===3||ne===2)&&(ne=4),se===null||!(on&268435455)&&!(No&268435455)||kt(se,ue)}function so(e,t){var n=M;M|=2;var r=zf();(se!==e||ue!==t)&&(rt=null,Jt(e,t));do try{Fh();break}catch(i){Pf(e,i)}while(!0);if(ea(),M=n,io.current=r,b!==null)throw Error(j(261));return se=null,ue=0,ne}function Fh(){for(;b!==null;)Nf(b)}function Mh(){for(;b!==null&&!ap();)Nf(b)}function Nf(e){var t=Tf(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?If(e):b=t,pa.current=null}function If(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ih(n,t),n!==null){n.flags&=32767,b=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,b=null;return}}else if(n=Nh(n,t,Pe),n!==null){b=n;return}if(t=t.sibling,t!==null){b=t;return}b=t=e}while(t!==null);ne===0&&(ne=5)}function Qt(e,t,n){var r=B,i=Fe.transition;try{Fe.transition=null,B=1,Dh(e,t,n,r)}finally{Fe.transition=i,B=r}return null}function Dh(e,t,n,r){do $n();while(jt!==null);if(M&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(yp(e,o),e===se&&(b=se=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hi||(hi=!0,Rf(Wi,function(){return $n(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Fe.transition,Fe.transition=null;var l=B;B=1;var s=M;M|=4,pa.current=null,Th(e,n),jf(n,e),ih(Kl),Hi=!!Yl,Kl=Yl=null,e.current=n,Rh(n),up(),M=s,B=l,Fe.transition=o}else e.current=n;if(hi&&(hi=!1,jt=e,lo=i),o=e.pendingLanes,o===0&&(Lt=null),fp(n.stateNode),je(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,e=hs,hs=null,e;return lo&1&&e.tag!==0&&$n(),o=e.pendingLanes,o&1?e===ms?Cr++:(Cr=0,ms=e):Cr=0,Bt(),null}function $n(){if(jt!==null){var e=ad(lo),t=Fe.transition,n=B;try{if(Fe.transition=null,B=16>e?16:e,jt===null)var r=!1;else{if(e=jt,jt=null,lo=0,M&6)throw Error(j(331));var i=M;for(M|=4,N=e.current;N!==null;){var o=N,l=o.child;if(N.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(N=c;N!==null;){var m=N;switch(m.tag){case 0:case 11:case 15:Sr(8,m,o)}var h=m.child;if(h!==null)h.return=m,N=h;else for(;N!==null;){m=N;var g=m.sibling,v=m.return;if(Sf(m),m===c){N=null;break}if(g!==null){g.return=v,N=g;break}N=v}}}var x=o.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}N=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,N=l;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Sr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,N=f;break e}N=o.return}}var d=e.current;for(N=d;N!==null;){l=N;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,N=p;else e:for(l=d;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:zo(9,s)}}catch(k){X(s,s.return,k)}if(s===l){N=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,N=y;break e}N=s.return}}if(M=i,Bt(),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(wo,e)}catch{}r=!0}return r}finally{B=n,Fe.transition=t}}return!1}function Fu(e,t,n){t=An(n,t),t=cf(e,t,1),e=It(e,t,1),t=ve(),e!==null&&(Yr(e,1,t),je(e,t))}function X(e,t,n){if(e.tag===3)Fu(e,e,n);else for(;t!==null;){if(t.tag===3){Fu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lt===null||!Lt.has(r))){e=An(n,e),e=df(t,e,1),t=It(t,e,1),e=ve(),t!==null&&(Yr(t,1,e),je(t,e));break}}t=t.return}}function Bh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ue&n)===n&&(ne===4||ne===3&&(ue&130023424)===ue&&500>J()-ma?Jt(e,0):ha|=n),je(e,t)}function Lf(e,t){t===0&&(e.mode&1?(t=ii,ii<<=1,!(ii&130023424)&&(ii=4194304)):t=1);var n=ve();e=ft(e,t),e!==null&&(Yr(e,t,n),je(e,n))}function Ah(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lf(e,n)}function Uh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Lf(e,n)}var Tf;Tf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,zh(e,t,n);Se=!!(e.flags&131072)}else Se=!1,G&&t.flags&1048576&&$d(t,Ji,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ni(e,t),e=t.pendingProps;var i=Fn(t,he.current);Rn(t,n),i=aa(null,t,r,e,i,n);var o=ua();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(o=!0,Zi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ra(t),i.updater=_o,t.stateNode=i,i._reactInternals=t,rs(t,r,e,n),t=ls(null,t,r,!0,o,n)):(t.tag=0,G&&o&&Xs(t),ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ni(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Vh(r),e=We(r,e),i){case 0:t=os(null,t,r,e,n);break e;case 1:t=_u(null,t,r,e,n);break e;case 11:t=ju(null,t,r,e,n);break e;case 14:t=Eu(null,t,r,We(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),os(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),_u(e,t,r,i,n);case 3:e:{if(mf(t),e===null)throw Error(j(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Dd(e,t),eo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=An(Error(j(423)),t),t=Pu(e,t,r,n,i);break e}else if(r!==i){i=An(Error(j(424)),t),t=Pu(e,t,r,n,i);break e}else for(ze=Nt(t.stateNode.containerInfo.firstChild),Ne=t,G=!0,He=null,n=Wd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mn(),r===i){t=pt(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return Vd(t),e===null&&es(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Zl(r,i)?l=null:o!==null&&Zl(r,o)&&(t.flags|=32),hf(e,t),ge(e,t,l,n),t.child;case 6:return e===null&&es(t),null;case 13:return gf(e,t,n);case 4:return ia(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Dn(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),ju(e,t,r,i,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,W(qi,r._currentValue),r._currentValue=l,o!==null)if(Ke(o.value,l)){if(o.children===i.children&&!ke.current){t=pt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=ut(-1,n&-n),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?a.next=a:(a.next=m.next,m.next=a),c.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ts(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(j(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ts(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Rn(t,n),i=Me(i),r=r(i),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,i=We(r,t.pendingProps),i=We(r.type,i),Eu(e,t,r,i,n);case 15:return ff(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),Ni(e,t),t.tag=1,Ce(r)?(e=!0,Zi(t)):e=!1,Rn(t,n),Ad(t,r,i),rs(t,r,i,n),ls(null,t,r,!0,e,n);case 19:return vf(e,t,n);case 22:return pf(e,t,n)}throw Error(j(156,t.tag))};function Rf(e,t){return id(e,t)}function Wh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,t,n,r){return new Wh(e,t,n,r)}function xa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vh(e){if(typeof e=="function")return xa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ds)return 11;if(e===Bs)return 14}return 2}function Rt(e,t){var n=e.alternate;return n===null?(n=Oe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ti(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")xa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case vn:return qt(n.children,i,o,t);case Ms:l=8,i|=8;break;case Pl:return e=Oe(12,n,t,i|2),e.elementType=Pl,e.lanes=o,e;case zl:return e=Oe(13,n,t,i),e.elementType=zl,e.lanes=o,e;case Nl:return e=Oe(19,n,t,i),e.elementType=Nl,e.lanes=o,e;case Uc:return Io(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bc:l=10;break e;case Ac:l=9;break e;case Ds:l=11;break e;case Bs:l=14;break e;case xt:l=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Oe(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function qt(e,t,n,r){return e=Oe(7,e,r,t),e.lanes=n,e}function Io(e,t,n,r){return e=Oe(22,e,r,t),e.elementType=Uc,e.lanes=n,e.stateNode={isHidden:!1},e}function yl(e,t,n){return e=Oe(6,e,null,t),e.lanes=n,e}function xl(e,t,n){return t=Oe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hh(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bo(0),this.expirationTimes=bo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wa(e,t,n,r,i,o,l,s,a){return e=new Hh(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Oe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ra(o),e}function Qh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $f(e){if(!e)return Ft;e=e._reactInternals;e:{if(dn(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Ce(n))return Td(e,n,t)}return t}function Of(e,t,n,r,i,o,l,s,a){return e=wa(n,r,!0,e,i,o,l,s,a),e.context=$f(null),n=e.current,r=ve(),i=Tt(n),o=ut(r,i),o.callback=t??null,It(n,o,i),e.current.lanes=i,Yr(e,i,r),je(e,r),e}function Lo(e,t,n,r){var i=t.current,o=ve(),l=Tt(i);return n=$f(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=It(i,t,l),e!==null&&(Ge(e,i,l,o),_i(e,i,l)),l}function ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Sa(e,t){Mu(e,t),(e=e.alternate)&&Mu(e,t)}function Gh(){return null}var Ff=typeof reportError=="function"?reportError:function(e){console.error(e)};function ka(e){this._internalRoot=e}To.prototype.render=ka.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Lo(e,t,null,null)};To.prototype.unmount=ka.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ln(function(){Lo(null,e,null,null)}),t[dt]=null}};function To(e){this._internalRoot=e}To.prototype.unstable_scheduleHydration=function(e){if(e){var t=dd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<St.length&&t!==0&&t<St[n].priority;n++);St.splice(n,0,e),n===0&&pd(e)}};function Ca(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Du(){}function Yh(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=ao(l);o.call(c)}}var l=Of(t,r,e,0,null,!1,!1,"",Du);return e._reactRootContainer=l,e[dt]=l.current,Rr(e.nodeType===8?e.parentNode:e),ln(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=ao(a);s.call(c)}}var a=wa(e,0,!1,null,null,!1,!1,"",Du);return e._reactRootContainer=a,e[dt]=a.current,Rr(e.nodeType===8?e.parentNode:e),ln(function(){Lo(t,a,n,r)}),a}function $o(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var a=ao(l);s.call(a)}}Lo(t,l,e,i)}else l=Yh(n,t,e,i,r);return ao(l)}ud=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fr(t.pendingLanes);n!==0&&(Ws(t,n|1),je(t,J()),!(M&6)&&(Un=J()+500,Bt()))}break;case 13:ln(function(){var r=ft(e,1);if(r!==null){var i=ve();Ge(r,e,1,i)}}),Sa(e,1)}};Vs=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=ve();Ge(t,e,134217728,n)}Sa(e,134217728)}};cd=function(e){if(e.tag===13){var t=Tt(e),n=ft(e,t);if(n!==null){var r=ve();Ge(n,e,t,r)}Sa(e,t)}};dd=function(){return B};fd=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};Bl=function(e,t,n){switch(t){case"input":if(Tl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=jo(r);if(!i)throw Error(j(90));Vc(r),Tl(r,i)}}}break;case"textarea":Qc(e,n);break;case"select":t=n.value,t!=null&&Nn(e,!!n.multiple,t,!1)}};qc=ga;bc=ln;var Kh={usingClientEntryPoint:!1,Events:[Zr,Sn,jo,Xc,Jc,ga]},ar={findFiberByHostInstance:Yt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Zh={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=nd(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||Gh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mi.isDisabled&&mi.supportsFiber)try{wo=mi.inject(Zh),be=mi}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kh;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ca(t))throw Error(j(200));return Qh(e,t,null,n)};Le.createRoot=function(e,t){if(!Ca(e))throw Error(j(299));var n=!1,r="",i=Ff;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=wa(e,1,!1,null,null,n,!1,r,i),e[dt]=t.current,Rr(e.nodeType===8?e.parentNode:e),new ka(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=nd(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return ln(e)};Le.hydrate=function(e,t,n){if(!Ro(t))throw Error(j(200));return $o(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!Ca(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Ff;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Of(t,null,e,1,n??null,i,!1,o,l),e[dt]=t.current,Rr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new To(t)};Le.render=function(e,t,n){if(!Ro(t))throw Error(j(200));return $o(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!Ro(e))throw Error(j(40));return e._reactRootContainer?(ln(function(){$o(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1};Le.unstable_batchedUpdates=ga;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ro(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return $o(e,t,n,!1,r)};Le.version="18.2.0-next-9e3b772b8-20220608";function Mf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mf)}catch(e){console.error(e)}}Mf(),$c.exports=Le;var Xh=$c.exports,Bu=Xh;El.createRoot=Bu.createRoot,El.hydrateRoot=Bu.hydrateRoot;/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wr(){return Wr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wr.apply(this,arguments)}var Et;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Et||(Et={}));const Au="popstate";function Jh(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:s}=r.location;return ys("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Bf(i)}return bh(t,n,null,e)}function re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Df(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function qh(){return Math.random().toString(36).substr(2,8)}function Uu(e,t){return{usr:e.state,key:e.key,idx:t}}function ys(e,t,n,r){return n===void 0&&(n=null),Wr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Xn(t):t,{state:n,key:t&&t.key||r||qh()})}function Bf(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Xn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function bh(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=Et.Pop,a=null,c=m();c==null&&(c=0,l.replaceState(Wr({},l.state,{idx:c}),""));function m(){return(l.state||{idx:null}).idx}function h(){s=Et.Pop;let _=m(),f=_==null?null:_-c;c=_,a&&a({action:s,location:w.location,delta:f})}function g(_,f){s=Et.Push;let d=ys(w.location,_,f);n&&n(d,_),c=m()+1;let p=Uu(d,c),y=w.createHref(d);try{l.pushState(p,"",y)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(y)}o&&a&&a({action:s,location:w.location,delta:1})}function v(_,f){s=Et.Replace;let d=ys(w.location,_,f);n&&n(d,_),c=m();let p=Uu(d,c),y=w.createHref(d);l.replaceState(p,"",y),o&&a&&a({action:s,location:w.location,delta:0})}function x(_){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof _=="string"?_:Bf(_);return d=d.replace(/ $/,"%20"),re(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let w={get action(){return s},get location(){return e(i,l)},listen(_){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Au,h),a=_,()=>{i.removeEventListener(Au,h),a=null}},createHref(_){return t(i,_)},createURL:x,encodeLocation(_){let f=x(_);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:v,go(_){return l.go(_)}};return w}var Wu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Wu||(Wu={}));function em(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Xn(t):t,i=Wf(r.pathname||"/",n);if(i==null)return null;let o=Af(e);tm(o);let l=null;for(let s=0;l==null&&s<o.length;++s){let a=pm(i);l=cm(o[s],a)}return l}function Af(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let a={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};a.relativePath.startsWith("/")&&(re(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=bt([r,a.relativePath]),m=n.concat(a);o.children&&o.children.length>0&&(re(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Af(o.children,t,m,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:am(c,o.index),routesMeta:m})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let a of Uf(o.path))i(o,l,a)}),t}function Uf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Uf(r.join("/")),s=[];return s.push(...l.map(a=>a===""?o:[o,a].join("/"))),i&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function tm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:um(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const nm=/^:[\w-]+$/,rm=3,im=2,om=1,lm=10,sm=-2,Vu=e=>e==="*";function am(e,t){let n=e.split("/"),r=n.length;return n.some(Vu)&&(r+=sm),t&&(r+=im),n.filter(i=>!Vu(i)).reduce((i,o)=>i+(nm.test(o)?rm:o===""?om:lm),r)}function um(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function cm(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let s=n[l],a=l===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",m=dm({path:s.relativePath,caseSensitive:s.caseSensitive,end:a},c);if(!m)return null;Object.assign(r,m.params);let h=s.route;o.push({params:r,pathname:bt([i,m.pathname]),pathnameBase:xm(bt([i,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(i=bt([i,m.pathnameBase]))}return o}function dm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=fm(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,m,h)=>{let{paramName:g,isOptional:v}=m;if(g==="*"){let w=s[h]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const x=s[h];return v&&!x?c[g]=void 0:c[g]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function fm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Df(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function pm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Df(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Wf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function hm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Xn(e):e;return{pathname:n?n.startsWith("/")?n:mm(n,t):t,search:wm(r),hash:Sm(i)}}function mm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function vm(e,t){let n=gm(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ym(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Xn(e):(i=Wr({},e),re(!i.pathname||!i.pathname.includes("?"),wl("?","pathname","search",i)),re(!i.pathname||!i.pathname.includes("#"),wl("#","pathname","hash",i)),re(!i.search||!i.search.includes("#"),wl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(l==null)s=n;else{let h=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}s=h>=0?t[h]:"/"}let a=hm(i,s),c=l&&l!=="/"&&l.endsWith("/"),m=(o||l===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(c||m)&&(a.pathname+="/"),a}const bt=e=>e.join("/").replace(/\/\/+/g,"/"),xm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),wm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Sm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function km(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Vf=["post","put","patch","delete"];new Set(Vf);const Cm=["get",...Vf];new Set(Cm);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vr(){return Vr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vr.apply(this,arguments)}const ja=C.createContext(null),jm=C.createContext(null),Oo=C.createContext(null),Fo=C.createContext(null),Jn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Hf=C.createContext(null);function Mo(){return C.useContext(Fo)!=null}function Qf(){return Mo()||re(!1),C.useContext(Fo).location}function Gf(e){C.useContext(Oo).static||C.useLayoutEffect(e)}function Do(){let{isDataRoute:e}=C.useContext(Jn);return e?Mm():Em()}function Em(){Mo()||re(!1);let e=C.useContext(ja),{basename:t,future:n,navigator:r}=C.useContext(Oo),{matches:i}=C.useContext(Jn),{pathname:o}=Qf(),l=JSON.stringify(vm(i,n.v7_relativeSplatPath)),s=C.useRef(!1);return Gf(()=>{s.current=!0}),C.useCallback(function(c,m){if(m===void 0&&(m={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let h=ym(c,JSON.parse(l),o,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:bt([t,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[t,r,l,o,e])}function _m(e,t){return Pm(e,t)}function Pm(e,t,n,r){Mo()||re(!1);let{navigator:i}=C.useContext(Oo),{matches:o}=C.useContext(Jn),l=o[o.length-1],s=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let c=Qf(),m;if(t){var h;let _=typeof t=="string"?Xn(t):t;a==="/"||(h=_.pathname)!=null&&h.startsWith(a)||re(!1),m=_}else m=c;let g=m.pathname||"/",v=g;if(a!=="/"){let _=a.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(_.length).join("/")}let x=em(e,{pathname:v}),w=Tm(x&&x.map(_=>Object.assign({},_,{params:Object.assign({},s,_.params),pathname:bt([a,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:bt([a,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),o,n,r);return t&&w?C.createElement(Fo.Provider,{value:{location:Vr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Et.Pop}},w):w}function zm(){let e=Fm(),t=km(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,null)}const Nm=C.createElement(zm,null);class Im extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(Jn.Provider,{value:this.props.routeContext},C.createElement(Hf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Lm(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(ja);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Jn.Provider,{value:t},r)}function Tm(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let m=l.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);m>=0||re(!1),l=l.slice(0,Math.min(l.length,m+1))}let a=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<l.length;m++){let h=l[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=m),h.route.id){let{loaderData:g,errors:v}=n,x=h.route.loader&&g[h.route.id]===void 0&&(!v||v[h.route.id]===void 0);if(h.route.lazy||x){a=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((m,h,g)=>{let v,x=!1,w=null,_=null;n&&(v=s&&h.route.id?s[h.route.id]:void 0,w=h.route.errorElement||Nm,a&&(c<0&&g===0?(Dm("route-fallback",!1),x=!0,_=null):c===g&&(x=!0,_=h.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,g+1)),d=()=>{let p;return v?p=w:x?p=_:h.route.Component?p=C.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=m,C.createElement(Lm,{match:h,routeContext:{outlet:m,matches:f,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?C.createElement(Im,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var Yf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Yf||{}),uo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(uo||{});function Rm(e){let t=C.useContext(ja);return t||re(!1),t}function $m(e){let t=C.useContext(jm);return t||re(!1),t}function Om(e){let t=C.useContext(Jn);return t||re(!1),t}function Kf(e){let t=Om(),n=t.matches[t.matches.length-1];return n.route.id||re(!1),n.route.id}function Fm(){var e;let t=C.useContext(Hf),n=$m(uo.UseRouteError),r=Kf(uo.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Mm(){let{router:e}=Rm(Yf.UseNavigateStable),t=Kf(uo.UseNavigateStable),n=C.useRef(!1);return Gf(()=>{n.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Vr({fromRouteId:t},o)))},[e,t])}const Hu={};function Dm(e,t,n){!t&&!Hu[e]&&(Hu[e]=!0)}function Gt(e){re(!1)}function Bm(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Et.Pop,navigator:o,static:l=!1,future:s}=e;Mo()&&re(!1);let a=t.replace(/^\/*/,"/"),c=C.useMemo(()=>({basename:a,navigator:o,static:l,future:Vr({v7_relativeSplatPath:!1},s)}),[a,s,o,l]);typeof r=="string"&&(r=Xn(r));let{pathname:m="/",search:h="",hash:g="",state:v=null,key:x="default"}=r,w=C.useMemo(()=>{let _=Wf(m,a);return _==null?null:{location:{pathname:_,search:h,hash:g,state:v,key:x},navigationType:i}},[a,m,h,g,v,x,i]);return w==null?null:C.createElement(Oo.Provider,{value:c},C.createElement(Fo.Provider,{children:n,value:w}))}function Am(e){let{children:t,location:n}=e;return _m(xs(t),n)}new Promise(()=>{});function xs(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,xs(r.props.children,o));return}r.type!==Gt&&re(!1),!r.props.index||!r.props.children||re(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=xs(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Um="6";try{window.__reactRouterVersion=Um}catch{}const Wm="startTransition",Qu=A0[Wm];function Vm(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=Jh({window:i,v5Compat:!0}));let l=o.current,[s,a]=C.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},m=C.useCallback(h=>{c&&Qu?Qu(()=>a(h)):a(h)},[a,c]);return C.useLayoutEffect(()=>l.listen(m),[l,m]),C.createElement(Bm,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}var Gu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Gu||(Gu={}));var Yu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Yu||(Yu={}));const Hm="/assets/image4-49UFiRL9.svg",Qm="/assets/image2-D3-QMNJW.svg",Gm="/assets/image3-Dw7jqlw9.svg",Ym="data:image/svg+xml,%3csvg%20width='66'%20height='66'%20viewBox='0%200%2066%2066'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='33'%20cy='33'%20r='30.5'%20transform='rotate(-180%2033%2033)'%20stroke='white'%20stroke-width='5'/%3e%3cpath%20d='M39.375%2022.2219V42.7039C39.3749%2043.0664%2039.2404%2043.4208%2038.9886%2043.7222C38.7368%2044.0237%2038.3789%2044.2586%2037.9602%2044.3973C37.5416%2044.536%2037.0809%2044.5723%2036.6364%2044.5016C36.1919%2044.4309%2035.7836%2044.2564%2035.4631%2044.0001L22.6619%2033.7591C22.2323%2033.4153%2021.9909%2032.949%2021.9909%2032.4629C21.9909%2031.9768%2022.2323%2031.5105%2022.6619%2031.1667L35.4631%2020.9257C35.7836%2020.6694%2036.1919%2020.4949%2036.6364%2020.4242C37.0809%2020.3535%2037.5416%2020.3898%2037.9602%2020.5285C38.3789%2020.6672%2038.7368%2020.9021%2038.9886%2021.2036C39.2404%2021.505%2039.3749%2021.8594%2039.375%2022.2219Z'%20fill='white'/%3e%3c/svg%3e",Km="data:image/svg+xml,%3csvg%20width='66'%20height='66'%20viewBox='0%200%2066%2066'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='33'%20cy='33'%20r='30.5'%20stroke='white'%20stroke-width='5'/%3e%3cpath%20d='M26.625%2043.7781V23.2961C26.6251%2022.9336%2026.7596%2022.5792%2027.0114%2022.2778C27.2632%2021.9763%2027.6211%2021.7414%2028.0397%2021.6027C28.4584%2021.464%2028.9191%2021.4277%2029.3636%2021.4984C29.8081%2021.5691%2030.2164%2021.7436%2030.5369%2021.9999L43.3381%2032.2409C43.7677%2032.5847%2044.0091%2033.051%2044.0091%2033.5371C44.0091%2034.0232%2043.7677%2034.4895%2043.3381%2034.8333L30.5369%2045.0743C30.2164%2045.3306%2029.8081%2045.5051%2029.3636%2045.5758C28.9191%2045.6465%2028.4584%2045.6102%2028.0397%2045.4715C27.6211%2045.3328%2027.2632%2045.0979%2027.0114%2044.7964C26.7596%2044.495%2026.6251%2044.1406%2026.625%2043.7781Z'%20fill='white'/%3e%3c/svg%3e";var le=function(){return le=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},le.apply(this,arguments)};function Wn(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var H="-ms-",jr="-moz-",D="-webkit-",Zf="comm",Bo="rule",Ea="decl",Zm="@import",Xf="@keyframes",Xm="@layer",Jf=Math.abs,_a=String.fromCharCode,ws=Object.assign;function Jm(e,t){return oe(e,0)^45?(((t<<2^oe(e,0))<<2^oe(e,1))<<2^oe(e,2))<<2^oe(e,3):0}function qf(e){return e.trim()}function it(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,n){return e.replace(t,n)}function Ri(e,t,n){return e.indexOf(t,n)}function oe(e,t){return e.charCodeAt(t)|0}function Vn(e,t,n){return e.slice(t,n)}function Je(e){return e.length}function bf(e){return e.length}function hr(e,t){return t.push(e),e}function qm(e,t){return e.map(t).join("")}function Ku(e,t){return e.filter(function(n){return!it(n,t)})}var Ao=1,Hn=1,e0=0,Be=0,q=0,qn="";function Uo(e,t,n,r,i,o,l,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ao,column:Hn,length:l,return:"",siblings:s}}function yt(e,t){return ws(Uo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function pn(e){for(;e.root;)e=yt(e.root,{children:[e]});hr(e,e.siblings)}function bm(){return q}function e1(){return q=Be>0?oe(qn,--Be):0,Hn--,q===10&&(Hn=1,Ao--),q}function Ye(){return q=Be<e0?oe(qn,Be++):0,Hn++,q===10&&(Hn=1,Ao++),q}function en(){return oe(qn,Be)}function $i(){return Be}function Wo(e,t){return Vn(qn,e,t)}function Ss(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function t1(e){return Ao=Hn=1,e0=Je(qn=e),Be=0,[]}function n1(e){return qn="",e}function Sl(e){return qf(Wo(Be-1,ks(e===91?e+2:e===40?e+1:e)))}function r1(e){for(;(q=en())&&q<33;)Ye();return Ss(e)>2||Ss(q)>3?"":" "}function i1(e,t){for(;--t&&Ye()&&!(q<48||q>102||q>57&&q<65||q>70&&q<97););return Wo(e,$i()+(t<6&&en()==32&&Ye()==32))}function ks(e){for(;Ye();)switch(q){case e:return Be;case 34:case 39:e!==34&&e!==39&&ks(q);break;case 40:e===41&&ks(e);break;case 92:Ye();break}return Be}function o1(e,t){for(;Ye()&&e+q!==57;)if(e+q===84&&en()===47)break;return"/*"+Wo(t,Be-1)+"*"+_a(e===47?e:Ye())}function l1(e){for(;!Ss(en());)Ye();return Wo(e,Be)}function s1(e){return n1(Oi("",null,null,null,[""],e=t1(e),0,[0],e))}function Oi(e,t,n,r,i,o,l,s,a){for(var c=0,m=0,h=l,g=0,v=0,x=0,w=1,_=1,f=1,d=0,p="",y=i,k=o,E=r,S=p;_;)switch(x=d,d=Ye()){case 40:if(x!=108&&oe(S,h-1)==58){Ri(S+=O(Sl(d),"&","&\f"),"&\f",Jf(c?s[c-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:S+=Sl(d);break;case 9:case 10:case 13:case 32:S+=r1(x);break;case 92:S+=i1($i()-1,7);continue;case 47:switch(en()){case 42:case 47:hr(a1(o1(Ye(),$i()),t,n,a),a);break;default:S+="/"}break;case 123*w:s[c++]=Je(S)*f;case 125*w:case 59:case 0:switch(d){case 0:case 125:_=0;case 59+m:f==-1&&(S=O(S,/\f/g,"")),v>0&&Je(S)-h&&hr(v>32?Xu(S+";",r,n,h-1,a):Xu(O(S," ","")+";",r,n,h-2,a),a);break;case 59:S+=";";default:if(hr(E=Zu(S,t,n,c,m,i,s,p,y=[],k=[],h,o),o),d===123)if(m===0)Oi(S,t,E,E,y,o,h,s,k);else switch(g===99&&oe(S,3)===110?100:g){case 100:case 108:case 109:case 115:Oi(e,E,E,r&&hr(Zu(e,E,E,0,0,i,s,p,i,y=[],h,k),k),i,k,h,s,r?y:k);break;default:Oi(S,E,E,E,[""],k,0,s,k)}}c=m=v=0,w=f=1,p=S="",h=l;break;case 58:h=1+Je(S),v=x;default:if(w<1){if(d==123)--w;else if(d==125&&w++==0&&e1()==125)continue}switch(S+=_a(d),d*w){case 38:f=m>0?1:(S+="\f",-1);break;case 44:s[c++]=(Je(S)-1)*f,f=1;break;case 64:en()===45&&(S+=Sl(Ye())),g=en(),m=h=Je(p=S+=l1($i())),d++;break;case 45:x===45&&Je(S)==2&&(w=0)}}return o}function Zu(e,t,n,r,i,o,l,s,a,c,m,h){for(var g=i-1,v=i===0?o:[""],x=bf(v),w=0,_=0,f=0;w<r;++w)for(var d=0,p=Vn(e,g+1,g=Jf(_=l[w])),y=e;d<x;++d)(y=qf(_>0?v[d]+" "+p:O(p,/&\f/g,v[d])))&&(a[f++]=y);return Uo(e,t,n,i===0?Bo:s,a,c,m,h)}function a1(e,t,n,r){return Uo(e,t,n,Zf,_a(bm()),Vn(e,2,-2),0,r)}function Xu(e,t,n,r,i){return Uo(e,t,n,Ea,Vn(e,0,r),Vn(e,r+1,-1),r,i)}function t0(e,t,n){switch(Jm(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 4789:return jr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+jr+e+H+e+e;case 5936:switch(oe(e,t+11)){case 114:return D+e+H+O(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+H+O(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+H+O(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return D+e+H+e+e;case 6165:return D+e+H+"flex-"+e+e;case 5187:return D+e+O(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+H+"flex-$1$2")+e;case 5443:return D+e+H+"flex-item-"+O(e,/flex-|-self/g,"")+(it(e,/flex-|baseline/)?"":H+"grid-row-"+O(e,/flex-|-self/g,""))+e;case 4675:return D+e+H+"flex-line-pack"+O(e,/align-content|flex-|-self/g,"")+e;case 5548:return D+e+H+O(e,"shrink","negative")+e;case 5292:return D+e+H+O(e,"basis","preferred-size")+e;case 6060:return D+"box-"+O(e,"-grow","")+D+e+H+O(e,"grow","positive")+e;case 4554:return D+O(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return O(O(O(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+H+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4200:if(!it(e,/flex-|baseline/))return H+"grid-column-align"+Vn(e,t)+e;break;case 2592:case 3360:return H+O(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,it(r.props,/grid-\w+-end/)})?~Ri(e+(n=n[t].value),"span",0)?e:H+O(e,"-start","")+e+H+"grid-row-span:"+(~Ri(n,"span",0)?it(n,/\d+/):+it(n,/\d+/)-+it(e,/\d+/))+";":H+O(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return it(r.props,/grid-\w+-start/)})?e:H+O(O(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Je(e)-1-t>6)switch(oe(e,t+1)){case 109:if(oe(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+jr+(oe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ri(e,"stretch",0)?t0(O(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,s,a,c){return H+i+":"+o+c+(l?H+i+"-span:"+(s?a:+a-+o)+c:"")+e});case 4949:if(oe(e,t+6)===121)return O(e,":",":"+D)+e;break;case 6444:switch(oe(e,oe(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+D+(oe(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+H+"$2box$3")+e;case 100:return O(e,":",":"+H)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,"scroll-","scroll-snap-")+e}return e}function co(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function u1(e,t,n,r){switch(e.type){case Xm:if(e.children.length)break;case Zm:case Ea:return e.return=e.return||e.value;case Zf:return"";case Xf:return e.return=e.value+"{"+co(e.children,r)+"}";case Bo:if(!Je(e.value=e.props.join(",")))return""}return Je(n=co(e.children,r))?e.return=e.value+"{"+n+"}":""}function c1(e){var t=bf(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function d1(e){return function(t){t.root||(t=t.return)&&e(t)}}function f1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ea:e.return=t0(e.value,e.length,n);return;case Xf:return co([yt(e,{value:O(e.value,"@","@"+D)})],r);case Bo:if(e.length)return qm(n=e.props,function(i){switch(it(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":pn(yt(e,{props:[O(i,/:(read-\w+)/,":"+jr+"$1")]})),pn(yt(e,{props:[i]})),ws(e,{props:Ku(n,r)});break;case"::placeholder":pn(yt(e,{props:[O(i,/:(plac\w+)/,":"+D+"input-$1")]})),pn(yt(e,{props:[O(i,/:(plac\w+)/,":"+jr+"$1")]})),pn(yt(e,{props:[O(i,/:(plac\w+)/,H+"input-$1")]})),pn(yt(e,{props:[i]})),ws(e,{props:Ku(n,r)});break}return""})}}var p1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_e={},Qn=typeof process<"u"&&_e!==void 0&&(_e.REACT_APP_SC_ATTR||_e.SC_ATTR)||"data-styled",n0="active",r0="data-styled-version",Vo="6.1.13",Pa=`/*!sc*/
`,fo=typeof window<"u"&&"HTMLElement"in window,h1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&_e!==void 0&&_e.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&_e.REACT_APP_SC_DISABLE_SPEEDY!==""?_e.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&_e.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&_e!==void 0&&_e.SC_DISABLE_SPEEDY!==void 0&&_e.SC_DISABLE_SPEEDY!==""&&_e.SC_DISABLE_SPEEDY!=="false"&&_e.SC_DISABLE_SPEEDY),m1={},Ho=Object.freeze([]),Gn=Object.freeze({});function i0(e,t,n){return n===void 0&&(n=Gn),e.theme!==n.theme&&e.theme||t||n.theme}var o0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),g1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,v1=/(^-|-$)/g;function Ju(e){return e.replace(g1,"-").replace(v1,"")}var y1=/(a)(d)/gi,gi=52,qu=function(e){return String.fromCharCode(e+(e>25?39:97))};function Cs(e){var t,n="";for(t=Math.abs(e);t>gi;t=t/gi|0)n=qu(t%gi)+n;return(qu(t%gi)+n).replace(y1,"$1-$2")}var kl,l0=5381,zn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},s0=function(e){return zn(l0,e)};function za(e){return Cs(s0(e)>>>0)}function x1(e){return e.displayName||e.name||"Component"}function Cl(e){return typeof e=="string"&&!0}var a0=typeof Symbol=="function"&&Symbol.for,u0=a0?Symbol.for("react.memo"):60115,w1=a0?Symbol.for("react.forward_ref"):60112,S1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},k1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},C1=((kl={})[w1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},kl[u0]=c0,kl);function bu(e){return("type"in(t=e)&&t.type.$$typeof)===u0?c0:"$$typeof"in e?C1[e.$$typeof]:S1;var t}var j1=Object.defineProperty,E1=Object.getOwnPropertyNames,ec=Object.getOwnPropertySymbols,_1=Object.getOwnPropertyDescriptor,P1=Object.getPrototypeOf,tc=Object.prototype;function d0(e,t,n){if(typeof t!="string"){if(tc){var r=P1(t);r&&r!==tc&&d0(e,r,n)}var i=E1(t);ec&&(i=i.concat(ec(t)));for(var o=bu(e),l=bu(t),s=0;s<i.length;++s){var a=i[s];if(!(a in k1||n&&n[a]||l&&a in l||o&&a in o)){var c=_1(t,a);try{j1(e,a,c)}catch{}}}}return e}function sn(e){return typeof e=="function"}function Na(e){return typeof e=="object"&&"styledComponentId"in e}function Xt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function po(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Hr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function js(e,t,n){if(n===void 0&&(n=!1),!n&&!Hr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=js(e[r],t[r]);else if(Hr(t))for(var r in t)e[r]=js(e[r],t[r]);return e}function Ia(e,t){Object.defineProperty(e,"toString",{value:t})}function an(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var z1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw an(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(Pa);return n},e}(),Fi=new Map,ho=new Map,Mi=1,vi=function(e){if(Fi.has(e))return Fi.get(e);for(;ho.has(Mi);)Mi++;var t=Mi++;return Fi.set(e,t),ho.set(t,e),t},N1=function(e,t){Mi=t+1,Fi.set(e,t),ho.set(t,e)},I1="style[".concat(Qn,"][").concat(r0,'="').concat(Vo,'"]'),L1=new RegExp("^".concat(Qn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),T1=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},R1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Pa),i=[],o=0,l=r.length;o<l;o++){var s=r[o].trim();if(s){var a=s.match(L1);if(a){var c=0|parseInt(a[1],10),m=a[2];c!==0&&(N1(m,c),T1(e,m,a[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},nc=function(e){for(var t=document.querySelectorAll(I1),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Qn)!==n0&&(R1(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function $1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var f0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var a=Array.from(s.querySelectorAll("style[".concat(Qn,"]")));return a[a.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Qn,n0),r.setAttribute(r0,Vo);var l=$1();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},O1=function(){function e(t){this.element=f0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw an(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),F1=function(){function e(t){this.element=f0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),M1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),rc=fo,D1={isServer:!fo,useCSSOMInjection:!h1},mo=function(){function e(t,n,r){t===void 0&&(t=Gn),n===void 0&&(n={});var i=this;this.options=le(le({},D1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&fo&&rc&&(rc=!1,nc(this)),Ia(this,function(){return function(o){for(var l=o.getTag(),s=l.length,a="",c=function(h){var g=function(f){return ho.get(f)}(h);if(g===void 0)return"continue";var v=o.names.get(g),x=l.getGroup(h);if(v===void 0||!v.size||x.length===0)return"continue";var w="".concat(Qn,".g").concat(h,'[id="').concat(g,'"]'),_="";v!==void 0&&v.forEach(function(f){f.length>0&&(_+="".concat(f,","))}),a+="".concat(x).concat(w,'{content:"').concat(_,'"}').concat(Pa)},m=0;m<s;m++)c(m);return a}(i)})}return e.registerId=function(t){return vi(t)},e.prototype.rehydrate=function(){!this.server&&fo&&nc(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(le(le({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new M1(i):r?new O1(i):new F1(i)}(this.options),new z1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(vi(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(vi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(vi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),B1=/&/g,A1=/^\s*\/\/.*$/gm;function p0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=p0(n.children,t)),n})}function U1(e){var t,n,r,i=e===void 0?Gn:e,o=i.options,l=o===void 0?Gn:o,s=i.plugins,a=s===void 0?Ho:s,c=function(g,v,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):g},m=a.slice();m.push(function(g){g.type===Bo&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(B1,n).replace(r,c))}),l.prefix&&m.push(f1),m.push(u1);var h=function(g,v,x,w){v===void 0&&(v=""),x===void 0&&(x=""),w===void 0&&(w="&"),t=w,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var _=g.replace(A1,""),f=s1(x||v?"".concat(x," ").concat(v," { ").concat(_," }"):_);l.namespace&&(f=p0(f,l.namespace));var d=[];return co(f,c1(m.concat(d1(function(p){return d.push(p)})))),d};return h.hash=a.length?a.reduce(function(g,v){return v.name||an(15),zn(g,v.name)},l0).toString():"",h}var W1=new mo,Es=U1(),h0=ee.createContext({shouldForwardProp:void 0,styleSheet:W1,stylis:Es});h0.Consumer;ee.createContext(void 0);function _s(){return C.useContext(h0)}var m0=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Es);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ia(this,function(){throw an(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Es),this.name+t.hash},e}(),V1=function(e){return e>="A"&&e<="Z"};function ic(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;V1(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var g0=function(e){return e==null||e===!1||e===""},v0=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!g0(o)&&(Array.isArray(o)&&o.isCss||sn(o)?r.push("".concat(ic(i),":"),o,";"):Hr(o)?r.push.apply(r,Wn(Wn(["".concat(i," {")],v0(o),!1),["}"],!1)):r.push("".concat(ic(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in p1||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function $t(e,t,n,r){if(g0(e))return[];if(Na(e))return[".".concat(e.styledComponentId)];if(sn(e)){if(!sn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return $t(i,t,n,r)}var o;return e instanceof m0?n?(e.inject(n,r),[e.getName(r)]):[e]:Hr(e)?v0(e):Array.isArray(e)?Array.prototype.concat.apply(Ho,e.map(function(l){return $t(l,t,n,r)})):[e.toString()]}function y0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(sn(n)&&!Na(n))return!1}return!0}var H1=s0(Vo),Q1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&y0(t),this.componentId=n,this.baseHash=zn(H1,n),this.baseStyle=r,mo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Xt(i,this.staticRulesId);else{var o=po($t(this.rules,t,n,r)),l=Cs(zn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}i=Xt(i,l),this.staticRulesId=l}else{for(var a=zn(this.baseHash,r.hash),c="",m=0;m<this.rules.length;m++){var h=this.rules[m];if(typeof h=="string")c+=h;else if(h){var g=po($t(h,t,n,r));a=zn(a,g+m),c+=g}}if(c){var v=Cs(a>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(c,".".concat(v),void 0,this.componentId)),i=Xt(i,v)}}return i},e}(),Qr=ee.createContext(void 0);Qr.Consumer;function G1(e){var t=ee.useContext(Qr),n=C.useMemo(function(){return function(r,i){if(!r)throw an(14);if(sn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw an(8);return i?le(le({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?ee.createElement(Qr.Provider,{value:n},e.children):null}var jl={};function Y1(e,t,n){var r=Na(e),i=e,o=!Cl(e),l=t.attrs,s=l===void 0?Ho:l,a=t.componentId,c=a===void 0?function(y,k){var E=typeof y!="string"?"sc":Ju(y);jl[E]=(jl[E]||0)+1;var S="".concat(E,"-").concat(za(Vo+E+jl[E]));return k?"".concat(k,"-").concat(S):S}(t.displayName,t.parentComponentId):a,m=t.displayName,h=m===void 0?function(y){return Cl(y)?"styled.".concat(y):"Styled(".concat(x1(y),")")}(e):m,g=t.displayName&&t.componentId?"".concat(Ju(t.displayName),"-").concat(t.componentId):t.componentId||c,v=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;x=function(y,k){return w(y,k)&&_(y,k)}}else x=w}var f=new Q1(n,g,r?i.componentStyle:void 0);function d(y,k){return function(E,S,I){var R=E.attrs,T=E.componentStyle,me=E.defaultProps,tt=E.foldedComponentIds,At=E.styledComponentId,Jr=E.target,Go=ee.useContext(Qr),bn=_s(),Ut=E.shouldForwardProp||bn.shouldForwardProp,z=i0(S,Go,me)||Gn,L=function(mt,Ee,nt){for(var er,Vt=le(le({},Ee),{className:void 0,theme:nt}),Yo=0;Yo<mt.length;Yo+=1){var qr=sn(er=mt[Yo])?er(Vt):er;for(var gt in qr)Vt[gt]=gt==="className"?Xt(Vt[gt],qr[gt]):gt==="style"?le(le({},Vt[gt]),qr[gt]):qr[gt]}return Ee.className&&(Vt.className=Xt(Vt.className,Ee.className)),Vt}(R,S,z),$=L.as||Jr,A={};for(var U in L)L[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&L.theme===z||(U==="forwardedAs"?A.as=L.forwardedAs:Ut&&!Ut(U,$)||(A[U]=L[U]));var Wt=function(mt,Ee){var nt=_s(),er=mt.generateAndInjectStyles(Ee,nt.styleSheet,nt.stylis);return er}(T,L),Ae=Xt(tt,At);return Wt&&(Ae+=" "+Wt),L.className&&(Ae+=" "+L.className),A[Cl($)&&!o0.has($)?"class":"className"]=Ae,A.ref=I,C.createElement($,A)}(p,y,k)}d.displayName=h;var p=ee.forwardRef(d);return p.attrs=v,p.componentStyle=f,p.displayName=h,p.shouldForwardProp=x,p.foldedComponentIds=r?Xt(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=g,p.target=r?i.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(k){for(var E=[],S=1;S<arguments.length;S++)E[S-1]=arguments[S];for(var I=0,R=E;I<R.length;I++)js(k,R[I],!0);return k}({},i.defaultProps,y):y}}),Ia(p,function(){return".".concat(p.styledComponentId)}),o&&d0(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function oc(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var lc=function(e){return Object.assign(e,{isCss:!0})};function un(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(sn(e)||Hr(e))return lc($t(oc(Ho,Wn([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?$t(r):lc($t(oc(r,t)))}function Ps(e,t,n){if(n===void 0&&(n=Gn),!t)throw an(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,un.apply(void 0,Wn([i],o,!1)))};return r.attrs=function(i){return Ps(e,t,le(le({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ps(e,t,le(le({},n),i))},r}var x0=function(e){return Ps(Y1,e)},P=x0;o0.forEach(function(e){P[e]=x0(e)});var K1=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=y0(t),mo.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(po($t(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&mo.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Z1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=un.apply(void 0,Wn([e],t,!1)),i="sc-global-".concat(za(JSON.stringify(r))),o=new K1(r,i),l=function(a){var c=_s(),m=ee.useContext(Qr),h=ee.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&s(h,a,c.styleSheet,m,c.stylis),ee.useLayoutEffect(function(){if(!c.styleSheet.server)return s(h,a,c.styleSheet,m,c.stylis),function(){return o.removeStyles(h,c.styleSheet)}},[h,a,c.styleSheet,m,c.stylis]),null};function s(a,c,m,h,g){if(o.isStatic)o.renderStyles(a,m1,m,g);else{var v=le(le({},c),{theme:i0(c,h,l.defaultProps)});o.renderStyles(a,v,m,g)}}return ee.memo(l)}function Qo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=po(un.apply(void 0,Wn([e],t,!1))),i=za(r);return new m0(i,r)}const X1=P.div`
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
`,J1=P.div`
  display: flex;
  width: ${e=>e.count*100}%;  
  transform: translateX(-${e=>e.currentIndex*100}%); 
  transition: transform 0.5s ease-in-out;
`,q1=P.img`
  flex-shrink: 0;  
  width: 100%;  
  height: 90vh;
  object-fit: cover;
`,b1=P.div`
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
`,hn=P.div`
  font-size: 1.5rem;
  white-space: nowrap;
  font-weight: bold;
  color: #000;
`,mn=P.div`
  text-align: center;
  display: ${e=>e.isVisible?"block":"none"}; 
  animation: ${e=>e.isVisible?sc:"none"} 0.4s ease-in-out;
  font-size: 1.1rem;
  color: #222;

  @media (max-width: 500px) {
    display: ${e=>e.isVisible?"block":"none"};
    animation: ${e=>e.isVisible?sc:"none"} 0.4s ease-in-out;
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
`,ur=P.div`
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

  &:hover ${hn} {
    margin: 2%;
  }

  &:hover ${mn} {
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
`,sc=Qo`
  from { opacity: 0; }
  to { opacity: 1; }
`,lt="/assets/Genie1-_KHwDxeg.svg",go="/assets/Genie2-BwCRixq0.svg",eg=Qo`
  from {
    transform: translateY(0);
    opacity: 1;  
  }
  to {
    transform: translateY(-100px);
    opacity: 0;
  }
`;P.img`
  position: fixed;
  top: 23%;
  max-width: 30%;
  left: 36%;
  z-index: 10000;
  transition: opacity 0.5s ease-out;
  animation: ${e=>e.isDisappearing?un`${eg} 0.5s forwards`:"none"};
`;const tg=()=>{const[e,t]=C.useState(null),[n,r]=C.useState(0),[i,o]=C.useState(!1),l=[Hm,Qm,Gm],[s,a]=C.useState(!0),[c,m]=C.useState(!1),[h,g]=C.useState(lt),[v,x]=C.useState(!1),[w,_]=C.useState(!1),[f,d]=C.useState(null),p=Do(),y=R=>{t(R)},k=(R,T)=>{f===R?p(T):d(R)};C.useEffect(()=>{if(f!==null){const R=setTimeout(()=>{d(null)},4e3);return()=>clearTimeout(R)}},[f]);const E=()=>{t(null)};C.useEffect(()=>{const R=setTimeout(()=>{m(!0)},1e3),T=setInterval(()=>{g(tt=>tt===lt?go:lt)},600),me=setTimeout(()=>{_(!0),setTimeout(()=>{a(!1)},1e3),clearInterval(T)},3e3);return()=>{clearTimeout(R),clearTimeout(me),clearInterval(T)}},[]);const S=()=>{const T=n===0?l.length-1:n-1;r(T)},I=()=>{const T=n===l.length-1?0:n+1;r(T)};return C.useEffect(()=>{if(window.innerWidth<=500){const R=setInterval(()=>{I()},3e3);return()=>{clearInterval(R)}}},[n]),u.jsx(u.Fragment,{children:u.jsxs(X1,{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[u.jsx("img",{src:Ym,alt:"Previous",onClick:S,onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),style:{cursor:"pointer",position:"absolute",top:"50%",left:"2.5vw",zIndex:1e3,transform:`translateY(-50%) scale(${v?1.1:1})`,opacity:i?.4:0,transition:"opacity 1s ease-in-out, transform 0.3s ease-in-out",transitionDelay:i?"0.1s":"0s",display:window.innerWidth<=500?"none":"block"}}),u.jsx("img",{src:Km,alt:"Next",onClick:I,onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),style:{cursor:"pointer",position:"absolute",top:"50%",right:"2.5vw",zIndex:1e3,transform:`translateY(-50%) scale(${v?1.1:1})`,opacity:i?.4:0,transition:"opacity 1s ease-in-out, transform 0.3s ease-in-out",transitionDelay:i?"0.1s":"0s",display:window.innerWidth<=500?"none":"block"}}),u.jsx(J1,{currentIndex:n,count:l.length,children:l.map((R,T)=>u.jsx(q1,{src:R,alt:`Slide ${T}`,style:{borderBottomLeftRadius:"20vw"}},T))}),u.jsxs(b1,{children:[u.jsx("div",{style:{width:"100%"},children:u.jsxs(ur,{onClick:()=>k(0,"/concept"),style:{backgroundColor:"#F1F5F9"},isHovered:e===0||f===0,onMouseEnter:()=>y(0),onMouseLeave:E,isClicked:f===0,children:[u.jsx(hn,{children:"양자 개념"}),u.jsxs(mn,{onClick:R=>p("/concept"),isVisible:e===0,children:["양자란 무엇일까요? 쉽게 알아봅시다!!",u.jsx("p",{})]})]})}),u.jsx("div",{style:{width:"100%"},children:u.jsxs(ur,{onClick:()=>k(1,"/description"),style:{backgroundColor:"#D0E7FE"},isHovered:e===1||f===1,onMouseEnter:()=>y(1),onMouseLeave:E,isClicked:f===1,children:[u.jsx(hn,{children:"활용 분야"}),u.jsxs(mn,{onClick:R=>p("/description"),isVisible:e===1,children:["양자 컴퓨터, 양자 암호 통신 등 양자 기술이 활용되고 있는 분야에 대해 알아봅시다.",u.jsx("p",{})]})]})}),u.jsx("div",{style:{width:"100%"},children:u.jsxs(ur,{onClick:()=>k(2,"/"),style:{backgroundColor:"#A5D2FF"},isHovered:e===2||f===2,onMouseEnter:()=>y(2),onMouseLeave:E,isClicked:f===2,children:[u.jsx(hn,{children:"최근 동향"}),u.jsxs(mn,{onClick:R=>p("/"),isVisible:e===2,children:["양자 기술의 최근 동향에 대해 알아봅시다.",u.jsx("p",{})]})]})}),u.jsx("div",{style:{width:"100%"},children:u.jsxs(ur,{onClick:()=>k(3,"/"),style:{backgroundColor:"#7EAFE0"},isHovered:e===3||f===3,onMouseEnter:()=>y(3),onMouseLeave:E,isClicked:f===3,children:[u.jsx(hn,{children:"주요 기업"}),u.jsxs(mn,{onClick:R=>p("/"),isVisible:e===3,children:["양자 기술의 발전을 이끌고 있는 국내, 해외 주요 기업들을 모아봤어요.",u.jsx("p",{})]})]})}),u.jsx("div",{style:{width:"100%"},children:u.jsxs(ur,{onClick:()=>k(4,"/quiz"),style:{backgroundColor:"#E2E0FF"},isHovered:e===4||f===4,onMouseEnter:()=>y(4),onMouseLeave:E,isClicked:f===4,children:[u.jsx(hn,{children:"양자 퀴즈"}),u.jsxs(mn,{onClick:R=>p("/quiz"),isVisible:e===4,children:["간단한 양자 개념을 확인하는 Quiz Quiz!!",u.jsx("p",{})]})]})})]})]})})};function ng(){return u.jsx(u.Fragment,{children:u.jsx(tg,{})})}var w0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ac=ee.createContext&&ee.createContext(w0),rg=["attr","size","title"];function ig(e,t){if(e==null)return{};var n=og(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function og(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function vo(){return vo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vo.apply(this,arguments)}function uc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function yo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?uc(Object(n),!0).forEach(function(r){lg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):uc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lg(e,t,n){return t=sg(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sg(e){var t=ag(e,"string");return typeof t=="symbol"?t:t+""}function ag(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function S0(e){return e&&e.map((t,n)=>ee.createElement(t.tag,yo({key:n},t.attr),S0(t.child)))}function k0(e){return t=>ee.createElement(ug,vo({attr:yo({},e.attr)},t),S0(e.child))}function ug(e){var t=n=>{var{attr:r,size:i,title:o}=e,l=ig(e,rg),s=i||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),ee.createElement("svg",vo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:a,style:yo(yo({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&ee.createElement("title",null,o),e.children)};return ac!==void 0?ee.createElement(ac.Consumer,null,n=>t(n)):t(w0)}function cg(e){return k0({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function zs(e){return k0({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}const dg=P.div`
  font-size: 3.8rem;
  font-weight: bold;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`,fg=P.img`
  max-width: 40%;
  width: 40%;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`,pg=P.div`
  font-size: 3rem;
  cursor: pointer;
`;P(pg)`
  font-size: 3rem;
  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`;const yi=P.div`
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
`,hg=P.nav`
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
`,mg=P.div`
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
`,cc=P.div`
  font-size: 3.4rem;
  cursor: pointer;
  @media (max-width: 700px) {
    padding-right: -10px;
    font-size: 2.5rem;
  }
`,dc="/assets/Genie-Bb0VnGpq.svg";function gg(){const[e,t]=C.useState(!1),[n,r]=C.useState(!1),i=Do();C.useEffect(()=>{const l=()=>{window.scrollY>0?t(!0):t(!1)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[]);const o=()=>{r(!n)};return u.jsxs(u.Fragment,{children:[u.jsxs(hg,{isScrolled:e,style:{paddingLeft:"5%",paddingRight:"3%"},children:[u.jsxs("div",{onClick:()=>i("/"),style:{cursor:"pointer",maxWidth:"100%",marginRight:"0px",display:"flex",flexDirection:"row",gap:"10%",alignItems:"center",justifyContent:"space-between"},children:[u.jsx(fg,{src:dc,alt:"Logo"}),u.jsx(dg,{children:"Jenie"})]}),u.jsx("div",{style:{display:"flex",flexDirection:"row",gap:"25px",alignItems:"center",justifyContent:"flex-end"},children:u.jsx(cc,{onClick:o,children:n?u.jsx(zs,{}):u.jsx(cg,{})})})]}),n&&u.jsxs(mg,{children:[u.jsxs("div",{style:{marginBottom:"4%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[u.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",fontSize:"1.7rem",gap:"5%"},children:[u.jsx("img",{src:dc}),u.jsx("h1",{children:"Menu List"})]}),u.jsx(cc,{onClick:o,style:{fontSize:"3rem",marginTop:"0.5vw"},children:u.jsx(zs,{})})]}),u.jsx(yi,{onClick:()=>{i("/concept"),r(!1)},children:"양자 개념"}),u.jsx(yi,{onClick:()=>{i("/description"),r(!1)},children:"양자 활용"}),u.jsx(yi,{onClick:()=>{i("/quiz"),r(!1)},children:"양자 퀴즈"}),u.jsx(yi,{onClick:()=>{i("/character"),r(!1)},children:"캐릭터 소개"})]})]})}const vg=P.footer`
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
`,yg=P.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 85%;
  margin-left: 7.5%;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`,xg=P.div`
  display: flex;
  flex-direction: column;
`,wg=P.div`
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
`,Sg=P.img`
  max-width: 150px;
  margin-bottom: 5.5%;
  cursor: pointer;
  @media (max-width: 960px) {
    margin-bottom: 3.5%;
  }
`,kg=P.div`
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
`,Cg=P.div`
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
`,jg=P.div`
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
    
`,fc=P.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  span {
    font-size: 1.1rem;
    margin-left: 10px;
    margin-right: 20px;
  }
`,pc=P.div`
  background-color: #000;
  border-radius: 100%;
  align-items: center;
  text-align: center;
  p{
    font-size: 2rem;
    text-align: center;
  }
`,hc=P.div`
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
`,Eg=P.div`
  text-align: center;
  margin-top: 2%;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 3%;

  p {
    font-size: 1rem;
    opacity: 0.8;
  }
`,mc=P.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5%;
  @media (max-width: 960px) {
      display: none;
  }
`,gc="data:image/svg+xml,%3csvg%20width='43'%20height='43'%20viewBox='0%200%2043%2043'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cellipse%20cx='21'%20cy='22.5'%20rx='18'%20ry='19.5'%20fill='white'/%3e%3cg%20clip-path='url(%23clip0_0_1)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21.1676%201.05875C16.172%201.06134%2011.3402%202.83067%207.53623%206.05038C3.73223%209.27008%201.20408%2013.7302%200.403813%2018.6332C-0.396452%2023.5362%200.583349%2028.5624%203.16804%2032.813C5.75273%2037.0637%209.77375%2040.2616%2014.5121%2041.8349C15.5575%2042.0289%2015.9512%2041.381%2015.9512%2040.8301C15.9512%2040.2792%2015.9303%2038.682%2015.9233%2036.9358C10.0693%2038.2004%208.83233%2034.4655%208.83233%2034.4655C7.87757%2032.0402%206.49769%2031.4027%206.49769%2031.4027C4.58817%2030.1069%206.64057%2030.1311%206.64057%2030.1311C8.75568%2030.2801%209.86725%2032.2896%209.86725%2032.2896C11.7419%2035.4875%2014.7909%2034.5625%2015.9895%2034.022C16.1777%2032.6673%2016.7248%2031.7457%2017.3276%2031.2225C12.6514%2030.6959%207.73819%2028.9011%207.73819%2020.8838C7.7092%2018.8045%208.48519%2016.7938%209.90557%2015.2675C9.68953%2014.7409%208.96822%2012.6135%2010.1111%209.72398C10.1111%209.72398%2011.8778%209.1627%2015.899%2011.8686C19.348%2010.9308%2022.9871%2010.9308%2026.4362%2011.8686C30.4538%209.1627%2032.217%209.72398%2032.217%209.72398C33.3634%2012.6066%2032.6421%2014.7339%2032.4261%2015.2675C33.8509%2016.794%2034.6286%2018.8083%2034.5969%2020.8907C34.5969%2028.9254%2029.6733%2030.6959%2024.9901%2031.2121C25.7427%2031.8635%2026.4153%2033.135%2026.4153%2035.0891C26.4153%2037.8886%2026.3909%2040.1406%2026.3909%2040.8301C26.3909%2041.3879%2026.7707%2042.0393%2027.8369%2041.8349C32.5759%2040.2614%2036.5973%2037.0629%2039.1819%2032.8116C41.7666%2028.5602%2042.7458%2023.5333%2041.9447%2018.6298C41.1435%2013.7263%2038.6141%209.26616%2034.8088%206.04701C31.0036%202.82787%2026.1707%201.0597%2021.1745%201.05875H21.1676Z'%20fill='%23191717'/%3e%3cpath%20d='M8.09314%2031.1012C8.04784%2031.2052%207.88058%2031.2363%207.74469%2031.1636C7.60879%2031.0908%207.50775%2030.9557%207.55653%2030.8483C7.60531%2030.7409%207.76909%2030.7132%207.90498%2030.7859C8.04088%2030.8587%208.14541%2030.9973%208.09314%2031.1012Z'%20fill='%23191717'/%3e%3cpath%20d='M8.9469%2032.0471C8.87474%2032.0832%208.79218%2032.0933%208.71336%2032.0756C8.63454%2032.0579%208.56436%2032.0135%208.51482%2031.9501C8.37892%2031.8045%208.35103%2031.6036%208.45557%2031.5135C8.5601%2031.4234%208.74828%2031.465%208.88418%2031.6105C9.02008%2031.756%209.05143%2031.957%208.9469%2032.0471Z'%20fill='%23191717'/%3e%3cpath%20d='M9.77616%2033.2493C9.64723%2033.3394%209.42769%2033.2493%209.30573%2033.0691C9.27201%2033.0368%209.24519%2032.9981%209.22687%2032.9552C9.20855%2032.9124%209.1991%2032.8663%209.1991%2032.8197C9.1991%2032.7731%209.20855%2032.727%209.22687%2032.6842C9.24519%2032.6413%209.27201%2032.6026%209.30573%2032.5702C9.43466%2032.4836%209.6542%2032.5702%209.77616%2032.7469C9.89812%2032.9236%209.9016%2033.1592%209.77616%2033.2493V33.2493Z'%20fill='%23191717'/%3e%3cpath%20d='M10.9017%2034.4135C10.7867%2034.5417%2010.5533%2034.507%2010.3616%2034.3338C10.17%2034.1606%2010.1247%2033.925%2010.2396%2033.8002C10.3546%2033.6755%2010.5881%2033.7101%2010.7867%2033.8799C10.9853%2034.0497%2011.0237%2034.2887%2010.9017%2034.4135V34.4135Z'%20fill='%23191717'/%3e%3cpath%20d='M12.4801%2035.0925C12.4279%2035.2554%2012.1909%2035.3281%2011.954%2035.2588C11.717%2035.1895%2011.5602%2034.9955%2011.6055%2034.8292C11.6508%2034.6629%2011.8912%2034.5867%2012.1317%2034.6629C12.3721%2034.7391%2012.5254%2034.9228%2012.4801%2035.0925Z'%20fill='%23191717'/%3e%3cpath%20d='M14.2017%2035.2103C14.2017%2035.3801%2014.0066%2035.5256%2013.7557%2035.5291C13.5048%2035.5326%2013.2992%2035.394%2013.2992%2035.2242C13.2992%2035.0544%2013.4943%2034.9089%2013.7452%2034.9054C13.9961%2034.902%2014.2017%2035.0371%2014.2017%2035.2103Z'%20fill='%23191717'/%3e%3cpath%20d='M15.8043%2034.9436C15.8357%2035.1134%2015.6615%2035.2901%2015.4106%2035.3316C15.1597%2035.3732%2014.9402%2035.2727%2014.9088%2035.1064C14.8774%2034.9401%2015.0586%2034.76%2015.3026%2034.7149C15.5465%2034.6699%2015.773%2034.7738%2015.8043%2034.9436Z'%20fill='%23191717'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_0_1'%3e%3crect%20width='42.35'%20height='42.35'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",vc="data:image/svg+xml,%3csvg%20width='43'%20height='43'%20viewBox='0%200%2043%2043'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='21.175'%20cy='21.175'%20r='21.175'%20fill='white'/%3e%3cpath%20d='M9.77273%2030.7548H13.9091V20.7093L8%2016.2775V28.982C8%2029.9615%208.7933%2030.7548%209.77273%2030.7548Z'%20fill='%234285F4'/%3e%3cpath%20d='M28.0909%2030.7548H32.2272C33.2067%2030.7548%2034%2029.9615%2034%2028.982V16.2775L28.0909%2020.7093V30.7548Z'%20fill='%2334A853'/%3e%3cpath%20d='M28.0909%2013.0275V20.7093L34%2016.2775V13.9139C34%2011.7231%2031.4989%2010.4718%2029.7454%2011.7866L28.0909%2013.0275Z'%20fill='%23FBBC04'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.9091%2020.7093V13.0275L21%2018.3457L28.0909%2013.0275V20.7093L21%2026.0275L13.9091%2020.7093Z'%20fill='%23EA4335'/%3e%3cpath%20d='M8%2013.9139V16.2775L13.9091%2020.7093V13.0275L12.2545%2011.7866C10.501%2010.4718%208%2011.7231%208%2013.9139Z'%20fill='%23C5221F'/%3e%3c/svg%3e",_g="/assets/Jininfra-Czzd3TNl.svg",Pg=()=>u.jsxs(vg,{children:[u.jsxs(yg,{children:[u.jsxs(xg,{children:[u.jsx(Sg,{onClick:()=>window.location.href="https://jininfra.com/",src:_g,alt:"Footer Logo"}),u.jsx(wg,{children:u.jsx("h1",{children:"주식회사 진인프라"})}),u.jsxs(kg,{children:[u.jsxs(mc,{style:{marginBottom:"2%"},children:[u.jsx("p",{children:"Email"}),u.jsx("a",{href:"mailto:jininfra@jininfra.com",children:"jininfra@jininfra.com"})]}),u.jsxs(mc,{children:[u.jsx("p",{children:"Call"}),u.jsx("a",{href:"tel:02-330-3900",children:"02-330-3900"})]}),u.jsx("h3",{style:{marginTop:"3%"},children:"서울센터 | 서울시 송파구 가락로16길3-20 진인프라빌딩"})]})]}),u.jsxs(Cg,{children:[u.jsx("h2",{children:"Contact Us"}),u.jsxs(jg,{children:[u.jsx("hr",{style:{borderColor:"rgba(255, 255, 255, 0.2)"}}),u.jsx("h3",{style:{marginTop:"6%",marginBottom:"6%"},children:"Frontend Developer"})]}),u.jsxs(fc,{children:[u.jsx(pc,{children:u.jsx("p",{children:"👤"})}),u.jsx("span",{children:"YeEun Shin"}),u.jsxs(hc,{children:[u.jsx("a",{href:"https://github.com/yengeun",children:u.jsx("img",{src:gc,alt:"Github"})}),u.jsx("a",{href:"mailto:7613ez@gmail.com",children:u.jsx("img",{src:vc,alt:"Gmail"})})]})]}),u.jsxs(fc,{children:[u.jsx(pc,{children:u.jsx("p",{children:"👤"})}),u.jsx("span",{children:"Soeun Yoon"}),u.jsxs(hc,{children:[u.jsx("a",{href:"https://github.com/Dubabbi",children:u.jsx("img",{src:gc,alt:"Github"})}),u.jsx("a",{href:"mailto:thdms3160@naver.com",children:u.jsx("img",{src:vc,alt:"Gmail"})})]})]})]})]}),u.jsx(Eg,{children:u.jsx("p",{style:{textAlign:"left",marginLeft:"7.5%"},children:"© 2024 Jenie. All rights reserved."})})]}),zg="/assets/ball-RuGWw7hf.svg",Ng="/assets/ball2-_4ZmxEbj.svg",Di="/assets/cat-B7n9BXOC.svg",Ns="/assets/cat2-CQzvjkke.svg",Ig="/assets/quantum2-Z_9Fj8HX.svg",Lg=P.div`
    height: 250vh;
    max-height: 250vh;
    margin-top: -5%;
    margin-bottom: -20%;
    padding-top: 5%;
    background-color: #eee;
    @media(max-width: 600px){
      height: 190vh;
      max-height: 190vh; 
      margin-bottom: -10%;
    }
`,Tg=P.div`
    height: 320vh;
    max-height: 320vh;
    margin-top: -5%;
    margin-bottom: -20%;
    padding-top: 5%;
    background-color: #eee;
    @media(max-width: 600px){
      height: 250vh;
      max-height: 250vh; 
      margin-bottom: -10%;
    }
`,Rg=P.div`
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
`,$g=P.div`
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
      font-size: 2.2rem;
       @media (max-width: 900px) {
          font-size: 1.5rem;
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
`;P.div`
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
`;P.div`
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
`;const yc=P.button`
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
`,Og=P.p`
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
`,Fg=P.div`
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
`,Mg=P.div`
  text-align: center;
  height: 48vh;
  @media (max-width: 700px) {
    height: 20vh; 
  }
`,Dg=Qo`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Bg=P.img`
  max-width: 33%;
  animation: ${Dg} 8s linear infinite;
`,Ag=P.button`
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
`,Ug=()=>{C.useState(!1),C.useState(!1);const[e,t]=C.useState(null),n=Do(),r=i=>{t(e===i?null:i)};return u.jsx(Lg,{children:u.jsxs($g,{children:[u.jsx("h1",{children:"양자 개념"}),u.jsx("hr",{}),u.jsxs("div",{className:"accordion-item",children:[u.jsxs("div",{className:`accordion-title ${e===0?"active":""}`,onClick:()=>r(0),children:[u.jsx("span",{children:"양자란 ?"}),u.jsx("span",{children:e===0?"▲":"▼"})]}),e===0&&u.jsxs("div",{className:"accordion-content",children:[u.jsxs("p",{style:{marginBottom:"2%"},children:["양자란, 더 이상 나눌 수 없는 에너지의 최소량의 단위입니다. 쉽게 말해, ",u.jsx("span",{style:{color:"#B0E3FF"},children:"우리가 에너지를 가장 작은 단위로 쪼개면 그 단위를 양자"}),"라고 부릅니다. 처음으로 양자는 빛에서 발견되었으며, 이 작은 에너지가 어떻게 움직이는지 연구하는 것이 바로 양자 물리학, 양자 역학의 시작입니다."]}),u.jsx(Mg,{children:u.jsx(Bg,{style:{maxWidth:"30%"},src:Ig})})]})]}),u.jsxs("div",{className:"accordion-item",children:[u.jsxs("div",{className:`accordion-title ${e===1?"active":""}`,onClick:()=>r(1),children:[u.jsx("span",{children:"양자역학이란 ?"}),u.jsx("span",{children:e===1?"▲":"▼"})]}),e===1&&u.jsx("div",{className:"accordion-content",children:u.jsxs("p",{children:["입자 및 입자 집단을 다루는 현대 물리학의 기초 이론입니다. 양자역학은 ",u.jsx("span",{style:{color:"#B0E3FF"},children:"원자와 전자 같은 매우 작은 입자들이 작용하는 방식을 설명하는 이론"}),"으로, 이 입자들은 고전 물리학과는 다르게 파동과 입자 모두의 성질을 가집니다. 그로 인해 입자의 위치나 운동량을 동시에 정확하게 알 수 없다는 불확정성 원리가 등장합니다."]})})]}),u.jsxs("div",{className:"accordion-item",children:[u.jsxs("div",{className:`accordion-title ${e===2?"active":""}`,onClick:()=>r(2),children:[u.jsx("span",{children:"불확정성의 원리"}),u.jsx("span",{children:e===2?"▲":"▼"})]}),e===2&&u.jsxs("div",{className:"accordion-content",children:[u.jsx("h1",{style:{marginBottom:"1%",color:"#eee"},children:'"입자의 위치나 운동량을 동시에 정확하게 알 수 없다"'}),u.jsx("hr",{style:{border:"none",borderTop:"0.5px solid #ddd"}}),u.jsxs("p",{children:["하이젠베르크라는 물리학자는 실험을 통해, 우리가 아무리 정밀한 장비를 사용하더라도 입자의 위치를 알면 그 입자의 속도를 정확히 알 수 없고, 반대로 속도를 알면 위치를 정확히 알 수 없다는 것을 발견했습니다. 이는 마치 ",u.jsx("span",{style:{color:"#B0E3FF"},children:"우리가 축구공을 발로 찬 후에 그 공의 정확한 위치와 속도를 동시에 파악하기 어려운 것"}),"과 비슷합니다. 특히, 측정 차원의 오류가 아니라, 사용하는 장비가 아무리 정확해도 운동량과 위치를 동시에 정확히 알 수 없습니다. 오히려 하나의 값을 고정하면 다른 값은 더욱 불확실해집니다."]}),u.jsxs(Fg,{children:[u.jsx("img",{src:Ng}),u.jsx("img",{src:zg})]})]})]}),u.jsxs("div",{className:"accordion-item",children:[u.jsxs("div",{className:`accordion-title ${e===3?"active":""}`,onClick:()=>r(3),children:[u.jsx("span",{children:"파동-입자 이중성"}),u.jsx("span",{children:e===3?"▲":"▼"})]}),e===3&&u.jsxs("div",{className:"accordion-content",children:[u.jsxs("p",{children:["양자역학의 중요한 개념 중 하나는 ",u.jsx("span",{style:{color:"#B0E3FF"},children:"파동-입자 이중성"}),"입니다. 이는 빛과 물질이 파동과 입자 두 가지 성질을 동시에 가진다는 것입니다. 예를 들어, 전자는 파동처럼 간섭 패턴을 만들 수 있지만, 입자처럼 공간에서 특정 위치에 있을 수 있습니다."]}),"파동-입자 이중성은 물질과 빛이 파동과 입자의 성질을 동시에 가진다는 개념입니다.",u.jsx("p",{children:"빛과 그림자"}),'빛을 생각해보세요. 빛은 우리가 매일 접하는 것인데, 고전적인 관점에서 보면 빛은 파동처럼 퍼지며, 렌즈를 통과해 굴절되고 반사되기도 합니다. 예를 들어, 햇빛이 창문을 통해 들어올 때, 그 빛은 창문에서 굴절되고 반사되어 방 안에 퍼집니다. 이때 빛은 파동처럼 행동합니다. 그러나 빛을 어두운 방에서 레이저 포인터로 쏘면 그 레이저 포인터는 특정한 지점에만 빛이 도달하는 것을 볼 수 있습니다. 이때 빛은 마치 총알처럼 특정한 점에 도달하는 "입자"처럼 행동합니다. 이처럼, 빛은 파동처럼 창문에서 굴절되고 퍼질 수 있지만, 특정 조건에서는 입자처럼 특정한 지점에 정확히 도달하는 두 가지 성질을 동시에 가집니다.']})]}),u.jsxs("div",{className:"accordion-item",children:[u.jsxs("div",{className:`accordion-title ${e===4?"active":""}`,onClick:()=>r(4),children:[u.jsx("span",{children:"양자 얽힘"}),u.jsx("span",{children:e===4?"▲":"▼"})]}),e===4&&u.jsxs("div",{className:"accordion-content",children:[u.jsxs("p",{children:["양자 얽힘은 ",u.jsx("span",{style:{color:"#B0E3FF"},children:"두 개 이상의 입자가 서로 강하게 연결되어 있는 상태"}),"를 말합니다. 얽힌 입자들은 멀리 떨어져 있어도 얽혀 있어, 서로의 상태에 영향을 미칠 수 있습니다."]}),u.jsx("p",{children:'두 개의 얽힌 동전 두 개의 동전이 특별한 방법으로 얽혀 있다고 상상해봅시다. 이 동전들을 각각 상자에 넣고 지구의 반대편으로 떨어뜨립니다. 그 후, 당신이 A 동전의 상자를 열어 동전을 던졌을 때, 앞면이 나왔습니다. 신기하게도, 멀리 떨어진 B 동전은 즉각적으로 뒤집혀서 반드시 뒷면이 나오는 현상을 보여줍니다. 그들은 어떤 방식으로든 얽혀 있어서, A 동전이 앞면이면 B 동전은 뒷면이 될 것이고, 반대로도 성립됩니다. 이처럼 양자 얽힘에서는 두 입자가 얽힌 상태에 있으면, 한 입자의 상태가 결정되는 순간 다른 입자의 상태도 그에 맞춰 즉각적으로 결정됩니다. 얽힘 상태에서는 물리적으로 떨어져 있어도 정보가 "순간적으로" 전해지는 것처럼 보입니다.'})]})]}),u.jsxs("div",{className:"accordion-item",children:[u.jsxs("div",{className:`accordion-title ${e===5?"active":""}`,onClick:()=>r(5),children:[u.jsx("span",{children:"양자 중첩(슈뢰딩거의 고양이)"}),u.jsx("span",{children:e===5?"▲":"▼"})]}),e===5&&u.jsxs("div",{className:"accordion-content",children:[u.jsxs("p",{children:["슈뢰딩거의 고양이는 양자역학의 개념을 설명하기 위해 1935년 오스트리아의 물리학자 ",u.jsx("span",{style:{color:"#B0E3FF"},children:"에르빈 슈뢰딩거"}),"가 제안한 사고 실험입니다. 이 실험은 양자역학의 중첩 상태와 그로 인한 철학적 문제를 쉽게 설명하기 위한 것입니다. 특히 양자역학의 코펜하겐 해석을 이해하는 데 중요한 역할을 합니다."]}),u.jsx("div",{style:{textAlign:"center"},children:u.jsx(Ag,{style:{cursor:"pointer"},onClick:i=>n("/cat"),children:" More"})})]})]}),u.jsxs("div",{className:"accordion-item",children:[u.jsxs("div",{className:`accordion-title ${e===6?"active":""}`,onClick:()=>r(6),children:[u.jsx("span",{children:"파동 함수 붕괴"}),u.jsx("span",{children:e===6?"▲":"▼"})]}),e===6&&u.jsxs("div",{className:"accordion-content",children:[u.jsx("h1",{style:{marginBottom:"1%",color:"#eee"},children:"중첩 상태가 관측되었을 때, 그 상태가 하나로 확정되는 과정"}),u.jsx("hr",{style:{border:"none",borderTop:"0.5px solid #ddd"}}),u.jsxs("p",{children:["양자 물체는 여러 상태가 동시에 존재할 수 있는데, 이 상태를 기술하는 것이 ",u.jsx("span",{style:{color:"#B0E3FF"},children:"파동 함수"}),"입니다. 여러 상태가 있더라도 외부에서 관측을 하면 파동 함수가 붕괴하면서 입자는 하나의 확정된 상태로 변화합니다. 파동 함수 붕괴는 양자 중첩 상태에 있는 입자가 관측되었을 때 하나의 확정된 상태로 변하는 과정입니다. 양자 시스템은 여러 상태(중첩 상태)로 존재할 수 있지만, 누군가 그 시스템을 관측하는 순간, 그 시스템은 중첩된 여러 상태 중 하나로 결정됩니다. 이를 파동 함수가 붕괴했다고 표현합니다."]}),u.jsxs(Og,{children:[u.jsx("img",{src:Di,alt:"cat"})," ",u.jsx("img",{src:Ns,alt:"cat2",style:{maxWidth:"200px",marginBottom:"-47px"}})]}),u.jsx("p",{children:"파동 함수 붕괴는 슈뢰딩거의 고양이에서 상자를 열고 난 후에 발생하는 과정으로 이해할 수 있습니다."})]})]})]})})};function Wg(){return u.jsx(u.Fragment,{children:u.jsx(Ug,{})})}const Vg=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 160vh;
  max-height: 160vh;
  margin-top: -5%;
  margin-bottom: -10%;
  background-color: #eee;
`,Hg=P.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
    @media (max-width: 700px) {
    margin-left:3%;
    font-size:20px;
    margin-top:-100%;
    padding:10px;
    }
`,xc=P.button`
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
`,Qg=P.div`
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
`;P.div`
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
`;const Gg=P.div`
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
`,Yg="/assets/sad-BYYytyiN.svg",Kg=()=>{const e=[{question:"양자 얽힘 현상은 거리에 상관없이 두 입자가 서로 연결된 상태를 유지하는 것을 의미한다.",correctAnswer:"O",explanation:"양자 얽힘은 두 입자가 멀리 떨어져 있어도 서로의 상태가 연관된 상태를 유지하는 현상입니다. 한 입자의 상태가 변하면 즉시 다른 입자의 상태도 변합니다."},{question:"불확정성의 원리를 최초로 밝힌 사람은 하이젠베르크이다",correctAnswer:"O",explanation:"불확정성의 원리를 최초로 밝힌 사람은 하이젠베르크이다"},{question:"진인프라의 설립일은 2006년 5월 4일이다.",correctAnswer:"O",explanation:"진인프라의 설립일은 2006년 5월 4일이다."},{question:"양자란 화학 원소로서의 특성을 잃지 않는 범위에서 도달할 수 있는 물질의 기본적인 최소입자이다.",correctAnswer:"X",explanation:'해당 설명은 "원자"에 대한 설명으로, 양자란 더 이상 나눌 수 없는 에너지의 최소량의 단위이다'},{question:"양자 컴퓨터는 모든 문제를 일반 컴퓨터보다 빠르게 해결할 수 있다.",correctAnswer:"X",explanation:" 양자 컴퓨터는 특정한 문제, 특히 복잡한 최적화 문제나 암호 해독 등에서 더 뛰어난 성능을 발휘합니다. "},{question:"슈뢰딩거의 고양이 실험에서 고양이는 살았다.",correctAnswer:"X",explanation:'양자역학의 해석에 따르자면 고양이의 생사 여부를 확인해보기 전까지는 고양이의 상태를 살아있으면서도 동시에 죽어있는 상태라고 규정하기 때문에 정답은 "알 수 없다"이다.'}],[t,n]=C.useState(0),[r,i]=C.useState(0),[o,l]=C.useState(!1),[s,a]=C.useState(""),[c,m]=C.useState(""),[h,g]=C.useState(!1),v=x=>{const w=e[t];let _=1500;x===w.correctAnswer?(i(r+1),a("정답입니다!"),m("")):(a("오답입니다!"),m(w.explanation),_=3e3),l(!0),setTimeout(()=>{l(!1),t<e.length-1?n(t+1):g(!0)},_)};return u.jsx(Vg,{children:h?u.jsxs(Gg,{children:[u.jsx("h2",{children:"퀴즈 완료!"}),u.jsxs("p",{children:["총 ",u.jsxs("span",{style:{color:"#0015ff"},children:[e.length,"문제"]})," 중 ",u.jsxs("span",{style:{color:"#0015ff"},children:[r,"문제"]})," 맞추셨습니다."]}),r<5?u.jsx("img",{src:Yg,alt:"Genie1"}):u.jsx("img",{src:go,alt:"Genie2"})]}):u.jsxs(u.Fragment,{children:[u.jsx(Hg,{children:e[t].question}),u.jsxs("div",{children:[u.jsx(xc,{onClick:()=>v("O"),children:"O"}),u.jsx(xc,{onClick:()=>v("X"),children:"X"})]}),o&&u.jsxs(Qg,{children:[u.jsx("p",{children:s}),c&&u.jsx("small",{children:c})]})]})})};function Zg(){return u.jsx(u.Fragment,{children:u.jsx(Kg,{})})}const Xg=P.div`
    height: 160vh;
    max-height: 200vh;
    margin-top: -5%;
    margin-bottom: -20%;
    padding-top: 5%;
    background-color: #eee;
`,Jg=P.div`
  padding: 4%;
  max-width: 80%;
  margin-top: 5%;
  margin-bottom: 10%;
  margin-left: 10%;
  border-radius: 0.7vw;

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
    color: #eee;
    font-size: 2rem;
    line-height: 1.8;
    border-top: 1px solid #007bff;
    max-height: 330px;  /* Fixed height for content */
    overflow-y: auto;  /* Scroll if content exceeds height */
      p{
      font-size:1.6rem
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
  }
  .accordion-content {
    font-size:1.2rem;
    padding:4%;
    }
  a{
    color: #007bff;
    font-size: 1.7rem;
    padding-left: 40%;
  }
`,qg=()=>{const[e,t]=C.useState(null),n=r=>{t(e===r?null:r)};return u.jsx(Xg,{children:u.jsxs(Jg,{children:[u.jsx("h1",{children:"양자 활용"}),u.jsx("hr",{}),u.jsxs("div",{className:"accordion-item",children:[u.jsxs("div",{className:`accordion-title ${e===0?"active":""}`,onClick:()=>n(0),children:[u.jsx("span",{children:"양자 컴퓨터"}),u.jsx("span",{children:e===0?"▲":"▼"})]}),e===0&&u.jsxs("div",{className:"accordion-content",children:[u.jsxs("p",{children:["기존 디지털컴퓨터와는 달리 양자역학의 중첩 상태를 활용한 ",u.jsx("span",{style:{color:"#B0E3FF"},children:"큐비트(Quantum bit)를 기본 단위로  0과 1 두 상태를 동시에 처리할 수 있다."})]}),u.jsx("br",{})," ",u.jsx("p",{children:"이 같은 특성 때문에 양자컴퓨터는 기존 컴퓨터보다 월등한 계산 속도와 연산 처리 능력을 갖는데, 이는 슈퍼컴퓨터보다 1000배 이상 빠른 연산이 가능해 인공지능(AI), 의료·제약, 암호통신 등 다양한 분야에 활용될 수 있다."}),u.jsx("hr",{}),u.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/gjp9301in0U",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})]}),u.jsxs("div",{className:"accordion-item",children:[u.jsxs("div",{className:`accordion-title ${e===1?"active":""}`,onClick:()=>n(1),children:[u.jsx("span",{children:"양자 암호통신"}),u.jsx("span",{children:e===1?"▲":"▼"})]}),e===1&&u.jsxs("div",{className:"accordion-content",children:[u.jsx("p",{children:"양자암호통신 기술은 통신상의 보안을 자연의 기본원리인 양자역학의 법칙에 의해서 보장하므로 도청이나 감청이 절대적으로 불가능한 차세대 통신보안 기술로서 최근 크게 주목받고 있다."}),u.jsx("br",{}),u.jsxs("p",{children:["즉, 양자암호통신 기술은 ",u.jsx("span",{style:{color:"#B0E3FF"},children:"“양자 복제불가능성”"}),"과 같은 양자물리학의 법칙에 기초해서 송신자와 수신자 사이에 암호 키(일회용 난수표)를 절대적으로 안전하게 실시간으로 분배하는 기술로서 ",u.jsx("span",{style:{color:"#B0E3FF"},children:"“양자 키 분배 기술”"}),"로도 알려져 있다."]}),u.jsx("hr",{}),u.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/fF1cJ5F7ArI?si=9nIUWin5E9jQ6qRT",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})]}),u.jsxs("div",{className:"accordion-item",children:[u.jsxs("div",{className:`accordion-title ${e===2?"active":""}`,onClick:()=>n(2),children:[u.jsx("span",{children:"양자 센서"}),u.jsx("span",{children:e===2?"▲":"▼"})]}),e===2&&u.jsxs("div",{className:"accordion-content",children:[u.jsxs("p",{children:["양자 센서의 기본 원리는  ",u.jsx("span",{style:{color:"#B0E3FF"},children:"센서와 탐지 대상 물체 사이의 상호작용을 통해 발생하는 미세한 양자 위상변화(Quantum Phase Accumulation)를 측정하는 것이다."}),"이때 중첩, 이중성, 얽힘과 같은 미시 세계의 양자역학적 특성들이 측정 기술로 활용된다."]}),u.jsx("br",{}),u.jsx("p",{children:"양자 센싱은 측정 대상과 센서의 종류에 따라 다양하게 분류되며, 일반적으로 큐비트와 같은 양자 시스템을 사용해 시간, 자기장 등의 물리량을 정밀하게 측정한다."}),u.jsx("hr",{}),u.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/jS6fiujLTzo?si=JBji-IeWWDn1tFDX",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})]})]})})};function bg(){return u.jsx(u.Fragment,{children:u.jsx(qg,{})})}const ev="data:image/svg+xml,%3csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='50'%20cy='50'%20r='50'%20fill='%23F1F5F9'/%3e%3cpath%20d='M48.25%2070C48.25%2070.9665%2049.0335%2071.75%2050%2071.75C50.9665%2071.75%2051.75%2070.9665%2051.75%2070H48.25ZM51.2374%2034.7626C50.554%2034.0791%2049.446%2034.0791%2048.7626%2034.7626L37.6256%2045.8995C36.9422%2046.5829%2036.9422%2047.691%2037.6256%2048.3744C38.309%2049.0578%2039.4171%2049.0578%2040.1005%2048.3744L50%2038.4749L59.8995%2048.3744C60.5829%2049.0578%2061.691%2049.0578%2062.3744%2048.3744C63.0578%2047.691%2063.0578%2046.5829%2062.3744%2045.8995L51.2374%2034.7626ZM51.75%2070L51.75%2036H48.25L48.25%2070H51.75Z'%20fill='%2336597D'/%3e%3c/svg%3e",tv=P.img`
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
`,nv=()=>{const e=()=>{window.scrollTo({top:0,behavior:"smooth"})};return u.jsx(u.Fragment,{children:u.jsx(tv,{onClick:e,src:ev,alt:"Scroll to top"})})},rv="/assets/message-D6wtI_nO.svg",iv="/assets/flag-DnSs5bf4.svg",ov="data:image/svg+xml,%3csvg%20width='744'%20height='619'%20viewBox='0%200%20744%20619'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_f_0_1)'%3e%3cellipse%20cx='352.58'%20cy='364.807'%20rx='208.58'%20ry='110.044'%20fill='%23FDE598'%20fill-opacity='0.7'/%3e%3c/g%3e%3cg%20filter='url(%23filter1_f_0_1)'%3e%3cellipse%20cx='395.735'%20cy='254.044'%20rx='204.265'%20ry='110.044'%20fill='%236955FF'%20fill-opacity='0.5'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_0_1'%20x='0.151413'%20y='110.915'%20width='704.858'%20height='507.786'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='71.9243'%20result='effect1_foregroundBlur_0_1'/%3e%3c/filter%3e%3cfilter%20id='filter1_f_0_1'%20x='47.6214'%20y='0.151413'%20width='696.227'%20height='507.786'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='71.9243'%20result='effect1_foregroundBlur_0_1'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",lv="/assets/planet-B734ADp0.svg",sv=P.div`
    margin-top: -5%;
    height: 330vh;
    max-height: 330vh;
    margin-bottom: -20%;
    padding-top: 5%;
    background-color: #eee;

`,av=P.div`
  max-width: 100%;
  margin-top: 5%;
  border-radius: 0.7vw;
  position: relative;
`,uv=P.div`
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
`,cv=P.div`
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
    height: 35vh;
  } 
`,dv=P.img`
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
`,fv=P.div`
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
    min-width: 90%;
    height: 35vh;
  } 
`,pv=P.img`
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
`,hv=P.div`
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
`,mv=P.div`
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
`;P.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 40%; 
  display: flex;
`;const gv=P.div`
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
`,vv=P.div`
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
`,yv=P.img`
  width: 35%;
  margin-left: 35%;
  @media (max-width: 800px) {
    min-width: 45%;
    max-width: 45%;
    margin-left: 20%;
  }
`,xv=Qo`
  from {
    transform: translateY(0);
    opacity: 1;  
  }
  to {
    transform: translateY(-100px);
    opacity: 0;
  }
`,wv=P.img`
  position: fixed;
  top: 30%;
  max-width: 30%;
  left: 36%;
  z-index: 10000;
  transition: opacity 0.5s ease-out;
  animation: ${e=>e.isdisappearing?un`${xv} 0.5s forwards`:"none"};
  @media (max-width: 700px) {
    position: fixed;
    max-width: 40%;
  }
`,Sv=P.img`
  position: relative;
  margin-top: 10%;
  min-width: 80%;
  max-width: 80%;
  margin-right: 15%;
`,kv=()=>{const[e,t]=C.useState(lt),[n,r]=C.useState(!1),[i,o]=C.useState(!0),[l,s]=C.useState(!1);C.useEffect(()=>{const g=setTimeout(()=>{s(!0)},1e3),v=setInterval(()=>{t(w=>w===lt?go:lt)},600),x=setTimeout(()=>{r(!0),setTimeout(()=>{o(!1)},1e3),clearInterval(v)},3e3);return()=>{clearTimeout(g),clearTimeout(x),clearInterval(v)}},[]);const[a,c]=C.useState(lt),[m,h]=C.useState(!1);return C.useEffect(()=>{const g=setTimeout(()=>{h(!0)},1e3),v=setInterval(()=>{c(x=>x===lt?go:lt)},600);return()=>{clearTimeout(g),clearInterval(v)}},[]),u.jsx(u.Fragment,{children:u.jsxs(sv,{children:[u.jsxs(av,{children:[i&&u.jsx(u.Fragment,{children:u.jsx(wv,{src:e,alt:"Waving Genie",isdisappearing:n})}),u.jsxs(gv,{children:[u.jsxs(hv,{children:[u.jsx("img",{src:ov,alt:"Gradient Background"}),u.jsxs(mv,{children:[u.jsx("h1",{children:"진인프라의"}),u.jsx("h1",{children:"양자 캐릭터"}),u.jsx("h1",{children:"‘지니’"})]})]}),u.jsx(cv,{children:u.jsx(dv,{src:iv,alt:"Flag"})})]}),u.jsxs(vv,{children:[u.jsx(fv,{children:u.jsx(pv,{src:lv,alt:"planet"})}),u.jsxs(uv,{children:[u.jsx("h1",{children:"지니"}),u.jsx("p",{style:{color:"#0000ff"},children:"지니(진인프라의 진+  접사 ‘-이‘)"}),u.jsx("p",{children:"🧬알라딘에 나오는 무엇이든 할 수 있는 캐릭터 지니처럼"}),u.jsx("p",{children:"🔭양자 정보 관련해서는 무엇이든 알려준다는 의미"})]})]})]}),u.jsxs("div",{style:{maxWidth:"50%",display:"flex",flexDirection:"column",marginLeft:"32%",marginTop:"10%"},children:[u.jsx(yv,{src:rv,style:{width:"35%",marginLeft:"40%"}}),u.jsx(Sv,{style:{marginLeft:"0",marginTop:"3%",marginBottom:"15%"},src:a,alt:"Waving Genie"})]})]})})};function Cv(){return u.jsx(u.Fragment,{children:u.jsx(kv,{})})}const jv="/assets/bunker-cRaJc6Me.svg",wc="/assets/bottle1-BxjrYTB1.svg",Ev="/assets/bottle2-BVqZZ2-9.svg",xi=P.div`
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
`,wi=P.p`
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  white-space: nowrap;
  gap: 2%;
`,Sc=P.div`
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
`,kc=P.div`
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
`,Cc=P(zs)`
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
`,_v=()=>{const[e,t]=C.useState(!1),[n,r]=C.useState(!1),[i,o]=C.useState(null);Do();const l=()=>{const s=Math.random()>.5?"살아 있습니다":"죽었습니다";o(s),t(!0)};return u.jsx(Tg,{children:u.jsxs(Rg,{children:[u.jsx("h1",{children:"슈뢰딩거의 고양이"}),u.jsx("hr",{}),u.jsxs(xi,{children:[u.jsxs(wi,{children:[u.jsx("img",{src:jv,alt:"bunker",style:{maxWidth:"80%"}})," "]}),u.jsxs(wi,{children:[u.jsx("img",{src:wc,alt:"bottle1"})," ",u.jsx("img",{src:Di,alt:"cat"})]}),u.jsx("p",{children:"고양이 한 마리와 독이 든 병을 벙커 안에 넣고 벙커를 닫습니다."})]}),u.jsxs(xi,{children:[u.jsxs(wi,{children:[u.jsx("img",{src:wc,alt:"bottle1"})," ",u.jsx("img",{src:Ev,alt:"bottle2"})]}),u.jsx("p",{children:"독이 든 병은 50%의 확률로 깨질 수도, 깨지지 않을 수도 있습니다."})]}),u.jsxs(xi,{children:[u.jsxs(wi,{children:[u.jsx("img",{src:Di,alt:"cat"})," ",u.jsx("img",{src:Ns,alt:"cat2",style:{maxWidth:"200px",marginBottom:"-47px"}})]}),u.jsx("p",{style:{marginBottom:"1%"},children:"이에 따라 고양이도 죽을 수도 있고 살아 있을 수도 있습니다."}),u.jsxs("p",{style:{padding:"0 2%",marginTop:"0px"},children:["이러한 상태를 ",u.jsx("span",{style:{color:"#0000ff"},children:"양자 중첩 상태"}),"라고 합니다."]}),u.jsx(yc,{onClick:l,children:"상자 안에 고양이가 있는지 확인하기"})]}),u.jsxs(xi,{children:[u.jsx("p",{style:{padding:"0 2%",marginBottom:"1%"},children:"슈뢰딩거의 고양이는 1935년 에르빈 슈뢰딩거가 양자역학의 이상한 특성을 설명하기 위해 제안한 사고 실험입니다."}),u.jsxs("p",{style:{padding:"0 2%",marginTop:"0px"},children:[u.jsx("span",{children:"이 실험은 고양이를 상자에 넣고, 고양이의 생사 여부가 양자적 현상인 중첩에 의해 결정된다는 개념"}),"을 보여줍니다."]}),u.jsx("div",{style:{textAlign:"center",display:"flex",marginTop:"1%"}}),u.jsx("div",{style:{textAlign:"center",display:"flex",marginTop:"1%"},children:u.jsx(yc,{onClick:()=>r(!0),children:"추가 설명 보기"})})]}),e&&u.jsx(Sc,{children:u.jsxs(kc,{style:{backgroundColor:"#ddd"},children:[u.jsx(Cc,{onClick:()=>t(!1)}),u.jsx("h2",{children:"고양이 상태"}),u.jsx("hr",{}),i==="살아 있습니다"?u.jsxs("div",{children:[u.jsx("p",{children:"고양이는 살아 있습니다!"}),u.jsx("img",{src:Di,alt:"살아 있는 고양이",style:{maxWidth:"100%"}})]}):u.jsxs("div",{children:[u.jsx("p",{children:"고양이는 죽었습니다...."}),u.jsx("img",{src:Ns,alt:"죽은 고양이",style:{maxWidth:"100%"}})]})]})}),n&&u.jsx(Sc,{children:u.jsxs(kc,{children:[u.jsx(Cc,{onClick:()=>r(!1)}),u.jsx("h2",{children:"추가 설명"}),u.jsx("hr",{}),u.jsxs("p",{children:["이 사고 실험은 양자역학의 중요한 해석 중 하나인 ",u.jsx("span",{style:{fontWeight:"bold"},children:"코펜하겐 해석"}),"을 설명하기 위한 것이었습니다."]}),u.jsx("p",{children:"양자적 입자들은 측정되기 전까지 여러 상태가 동시에 존재하는데, 이 중첩 상태가 외부 관찰에 의해 무너지면서 하나의 확정된 상태가 된다는 것입니다."}),u.jsx("p",{children:u.jsx("span",{children:"고양이 역시 상자를 열어 관찰하기 전까지는 살아있으면서 동시에 죽어있는 상태로 존재합니다."})}),u.jsx("p",{children:"이 실험은 양자역학의 관측 문제와 파동 함수의 붕괴라는 개념을 설명하는 데 중요한 역할을 합니다."}),u.jsxs("p",{children:["슈뢰딩거는 이 실험을 통해 양자역학의 코펜하겐 해석이 현실에 적용될 때 얼마나 비현실적일 수 있는지를 비판했습니다. 실제로 고양이가 ",u.jsx("span",{style:{fontWeight:"bold"},children:'"살아 있으면서 죽어있다"'}),"는 개념은 우리의 일상적인 직관과는 맞지 않기 때문에, 이 실험은 양자역학의 해석에 대한 논쟁을 불러일으켰습니다."]})]})})]})})};function Pv(){return u.jsx(u.Fragment,{children:u.jsx(_v,{})})}function zv(){return u.jsxs(Vm,{children:[u.jsx(gg,{}),u.jsxs(Am,{children:[u.jsx(Gt,{path:"/",element:u.jsx(ng,{})}),u.jsx(Gt,{path:"/concept",element:u.jsx(Wg,{})}),u.jsx(Gt,{path:"/description",element:u.jsx(bg,{})}),u.jsx(Gt,{path:"/quiz",element:u.jsx(Zg,{})}),u.jsx(Gt,{path:"/character",element:u.jsx(Cv,{})}),u.jsx(Gt,{path:"/cat",element:u.jsx(Pv,{})})]}),u.jsx(nv,{}),u.jsx(Pg,{})]})}const Nv=Z1`
  :root {
    --vh: 100%;
    background-color: #FFFFFF;
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
`,Iv={title:un`
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 800;
      font-size: 4rem;
      letter-spacing: 0.07em;
    `,text:un`
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 500;
      font-size: 1.5rem;
      letter-spacing: 0.07em;
    `},Lv={fonts:Iv};function Tv(){return u.jsx(u.Fragment,{children:u.jsxs(G1,{theme:Lv,children:[u.jsx(Nv,{}),u.jsx(zv,{})]})})}El.createRoot(document.getElementById("root")).render(u.jsx(ee.StrictMode,{children:u.jsx(Tv,{})}));
