function y0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function x0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wc={exports:{}},yo={},Sc={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gr=Symbol.for("react.element"),w0=Symbol.for("react.portal"),S0=Symbol.for("react.fragment"),k0=Symbol.for("react.strict_mode"),C0=Symbol.for("react.profiler"),E0=Symbol.for("react.provider"),j0=Symbol.for("react.context"),_0=Symbol.for("react.forward_ref"),P0=Symbol.for("react.suspense"),z0=Symbol.for("react.memo"),N0=Symbol.for("react.lazy"),Ia=Symbol.iterator;function I0(e){return e===null||typeof e!="object"?null:(e=Ia&&e[Ia]||e["@@iterator"],typeof e=="function"?e:null)}var kc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cc=Object.assign,Ec={};function Yn(e,t,n){this.props=e,this.context=t,this.refs=Ec,this.updater=n||kc}Yn.prototype.isReactComponent={};Yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function jc(){}jc.prototype=Yn.prototype;function Ps(e,t,n){this.props=e,this.context=t,this.refs=Ec,this.updater=n||kc}var zs=Ps.prototype=new jc;zs.constructor=Ps;Cc(zs,Yn.prototype);zs.isPureReactComponent=!0;var La=Array.isArray,_c=Object.prototype.hasOwnProperty,Ns={current:null},Pc={key:!0,ref:!0,__self:!0,__source:!0};function zc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)_c.call(t,r)&&!Pc.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Gr,type:e,key:o,ref:l,props:i,_owner:Ns.current}}function L0(e,t){return{$$typeof:Gr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Is(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gr}function R0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ra=/\/+/g;function Go(e,t){return typeof e=="object"&&e!==null&&e.key!=null?R0(""+e.key):t.toString(36)}function Si(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Gr:case w0:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Go(l,0):r,La(i)?(n="",e!=null&&(n=e.replace(Ra,"$&/")+"/"),Si(i,t,n,"",function(c){return c})):i!=null&&(Is(i)&&(i=L0(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ra,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",La(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+Go(o,s);l+=Si(o,t,n,a,i)}else if(a=I0(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+Go(o,s++),l+=Si(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function br(e,t,n){if(e==null)return e;var r=[],i=0;return Si(e,r,"","",function(o){return t.call(n,o,i++)}),r}function T0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},ki={transition:null},O0={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:ki,ReactCurrentOwner:Ns};F.Children={map:br,forEach:function(e,t,n){br(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return br(e,function(){t++}),t},toArray:function(e){return br(e,function(t){return t})||[]},only:function(e){if(!Is(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=Yn;F.Fragment=S0;F.Profiler=C0;F.PureComponent=Ps;F.StrictMode=k0;F.Suspense=P0;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O0;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Ns.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)_c.call(t,a)&&!Pc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Gr,type:e.type,key:i,ref:o,props:r,_owner:l}};F.createContext=function(e){return e={$$typeof:j0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:E0,_context:e},e.Consumer=e};F.createElement=zc;F.createFactory=function(e){var t=zc.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:_0,render:e}};F.isValidElement=Is;F.lazy=function(e){return{$$typeof:N0,_payload:{_status:-1,_result:e},_init:T0}};F.memo=function(e,t){return{$$typeof:z0,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=ki.transition;ki.transition={};try{e()}finally{ki.transition=t}};F.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};F.useCallback=function(e,t){return ye.current.useCallback(e,t)};F.useContext=function(e){return ye.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};F.useEffect=function(e,t){return ye.current.useEffect(e,t)};F.useId=function(){return ye.current.useId()};F.useImperativeHandle=function(e,t,n){return ye.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return ye.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return ye.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return ye.current.useMemo(e,t)};F.useReducer=function(e,t,n){return ye.current.useReducer(e,t,n)};F.useRef=function(e){return ye.current.useRef(e)};F.useState=function(e){return ye.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return ye.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return ye.current.useTransition()};F.version="18.2.0";Sc.exports=F;var C=Sc.exports;const ee=x0(C),$0=y0({__proto__:null,default:ee},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0=C,M0=Symbol.for("react.element"),D0=Symbol.for("react.fragment"),A0=Object.prototype.hasOwnProperty,B0=F0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U0={key:!0,ref:!0,__self:!0,__source:!0};function Nc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)A0.call(t,r)&&!U0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:M0,type:e,key:o,ref:l,props:i,_owner:B0.current}}yo.Fragment=D0;yo.jsx=Nc;yo.jsxs=Nc;wc.exports=yo;var u=wc.exports,Cl={},Ic={exports:{}},Le={},Lc={exports:{}},Rc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,L){var O=z.length;z.push(L);e:for(;0<O;){var B=O-1>>>1,U=z[B];if(0<i(U,L))z[B]=L,z[O]=U,O=B;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var L=z[0],O=z.pop();if(O!==L){z[0]=O;e:for(var B=0,U=z.length,Wt=U>>>1;B<Wt;){var Be=2*(B+1)-1,mt=z[Be],je=Be+1,nt=z[je];if(0>i(mt,O))je<U&&0>i(nt,mt)?(z[B]=nt,z[je]=O,B=je):(z[B]=mt,z[Be]=O,B=Be);else if(je<U&&0>i(nt,O))z[B]=nt,z[je]=O,B=je;else break e}}return L}function i(z,L){var O=z.sortIndex-L.sortIndex;return O!==0?O:z.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],c=[],m=1,h=null,g=3,v=!1,x=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(z){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=z)r(c),L.sortIndex=L.expirationTime,t(a,L);else break;L=n(c)}}function y(z){if(w=!1,p(z),!x)if(n(a)!==null)x=!0,bn(k);else{var L=n(c);L!==null&&Ut(y,L.startTime-z)}}function k(z,L){x=!1,w&&(w=!1,f(I),I=-1),v=!0;var O=g;try{for(p(L),h=n(a);h!==null&&(!(h.expirationTime>L)||z&&!me());){var B=h.callback;if(typeof B=="function"){h.callback=null,g=h.priorityLevel;var U=B(h.expirationTime<=L);L=e.unstable_now(),typeof U=="function"?h.callback=U:h===n(a)&&r(a),p(L)}else r(a);h=n(a)}if(h!==null)var Wt=!0;else{var Be=n(c);Be!==null&&Ut(y,Be.startTime-L),Wt=!1}return Wt}finally{h=null,g=O,v=!1}}var j=!1,S=null,I=-1,T=5,R=-1;function me(){return!(e.unstable_now()-R<T)}function tt(){if(S!==null){var z=e.unstable_now();R=z;var L=!0;try{L=S(!0,z)}finally{L?Bt():(j=!1,S=null)}}else j=!1}var Bt;if(typeof d=="function")Bt=function(){d(tt)};else if(typeof MessageChannel<"u"){var Jr=new MessageChannel,Ho=Jr.port2;Jr.port1.onmessage=tt,Bt=function(){Ho.postMessage(null)}}else Bt=function(){_(tt,0)};function bn(z){S=z,j||(j=!0,Bt())}function Ut(z,L){I=_(function(){z(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,bn(k))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var O=g;g=L;try{return z()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,L){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var O=g;g=z;try{return L()}finally{g=O}},e.unstable_scheduleCallback=function(z,L,O){var B=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?B+O:B):O=B,z){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=O+U,z={id:m++,callback:L,priorityLevel:z,startTime:O,expirationTime:U,sortIndex:-1},O>B?(z.sortIndex=O,t(c,z),n(a)===null&&z===n(c)&&(w?(f(I),I=-1):w=!0,Ut(y,O-B))):(z.sortIndex=U,t(a,z),x||v||(x=!0,bn(k))),z},e.unstable_shouldYield=me,e.unstable_wrapCallback=function(z){var L=g;return function(){var O=g;g=L;try{return z.apply(this,arguments)}finally{g=O}}}})(Rc);Lc.exports=Rc;var W0=Lc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tc=C,Ie=W0;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Oc=new Set,jr={};function cn(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(jr[e]=t,e=0;e<t.length;e++)Oc.add(t[e])}var ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),El=Object.prototype.hasOwnProperty,V0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ta={},Oa={};function H0(e){return El.call(Oa,e)?!0:El.call(Ta,e)?!1:V0.test(e)?Oa[e]=!0:(Ta[e]=!0,!1)}function Q0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function G0(e,t,n,r){if(t===null||typeof t>"u"||Q0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ls=/[\-:]([a-z])/g;function Rs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ls,Rs);ce[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ls,Rs);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ls,Rs);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ts(e,t,n,r){var i=ce.hasOwnProperty(t)?ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(G0(t,n,i,r)&&(n=null),r||i===null?H0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ht=Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ei=Symbol.for("react.element"),gn=Symbol.for("react.portal"),vn=Symbol.for("react.fragment"),Os=Symbol.for("react.strict_mode"),jl=Symbol.for("react.profiler"),$c=Symbol.for("react.provider"),Fc=Symbol.for("react.context"),$s=Symbol.for("react.forward_ref"),_l=Symbol.for("react.suspense"),Pl=Symbol.for("react.suspense_list"),Fs=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),Mc=Symbol.for("react.offscreen"),$a=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=$a&&e[$a]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Yo;function cr(e){if(Yo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yo=t&&t[1]||""}return`
`+Yo+e}var Ko=!1;function Xo(e,t){if(!e||Ko)return"";Ko=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Ko=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?cr(e):""}function Y0(e){switch(e.tag){case 5:return cr(e.type);case 16:return cr("Lazy");case 13:return cr("Suspense");case 19:return cr("SuspenseList");case 0:case 2:case 15:return e=Xo(e.type,!1),e;case 11:return e=Xo(e.type.render,!1),e;case 1:return e=Xo(e.type,!0),e;default:return""}}function zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vn:return"Fragment";case gn:return"Portal";case jl:return"Profiler";case Os:return"StrictMode";case _l:return"Suspense";case Pl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fc:return(e.displayName||"Context")+".Consumer";case $c:return(e._context.displayName||"Context")+".Provider";case $s:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fs:return t=e.displayName||null,t!==null?t:zl(e.type)||"Memo";case xt:t=e._payload,e=e._init;try{return zl(e(t))}catch{}}return null}function K0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zl(t);case 8:return t===Os?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function X0(e){var t=Dc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ti(e){e._valueTracker||(e._valueTracker=X0(e))}function Ac(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Dc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Nl(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bc(e,t){t=t.checked,t!=null&&Ts(e,"checked",t,!1)}function Il(e,t){Bc(e,t);var n=$t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ll(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ll(e,t.type,$t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ma(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ll(e,t,n){(t!=="number"||Di(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var dr=Array.isArray;function Nn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Rl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Da(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(dr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$t(n)}}function Uc(e,t){var n=$t(t.value),r=$t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Aa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ni,Vc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ni=ni||document.createElement("div"),ni.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ni.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Z0=["Webkit","ms","Moz","O"];Object.keys(mr).forEach(function(e){Z0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mr[t]=mr[e]})});function Hc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||mr.hasOwnProperty(e)&&mr[e]?(""+t).trim():t+"px"}function Qc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var J0=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ol(e,t){if(t){if(J0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function $l(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fl=null;function Ms(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ml=null,In=null,Ln=null;function Ba(e){if(e=Xr(e)){if(typeof Ml!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Co(t),Ml(e.stateNode,e.type,t))}}function Gc(e){In?Ln?Ln.push(e):Ln=[e]:In=e}function Yc(){if(In){var e=In,t=Ln;if(Ln=In=null,Ba(e),t)for(e=0;e<t.length;e++)Ba(t[e])}}function Kc(e,t){return e(t)}function Xc(){}var Zo=!1;function Zc(e,t,n){if(Zo)return e(t,n);Zo=!0;try{return Kc(e,t,n)}finally{Zo=!1,(In!==null||Ln!==null)&&(Xc(),Yc())}}function Pr(e,t){var n=e.stateNode;if(n===null)return null;var r=Co(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Dl=!1;if(ct)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){Dl=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{Dl=!1}function q0(e,t,n,r,i,o,l,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var gr=!1,Ai=null,Bi=!1,Al=null,b0={onError:function(e){gr=!0,Ai=e}};function ep(e,t,n,r,i,o,l,s,a){gr=!1,Ai=null,q0.apply(b0,arguments)}function tp(e,t,n,r,i,o,l,s,a){if(ep.apply(this,arguments),gr){if(gr){var c=Ai;gr=!1,Ai=null}else throw Error(E(198));Bi||(Bi=!0,Al=c)}}function dn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Jc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ua(e){if(dn(e)!==e)throw Error(E(188))}function np(e){var t=e.alternate;if(!t){if(t=dn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ua(i),e;if(o===r)return Ua(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function qc(e){return e=np(e),e!==null?bc(e):null}function bc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bc(e);if(t!==null)return t;e=e.sibling}return null}var ed=Ie.unstable_scheduleCallback,Wa=Ie.unstable_cancelCallback,rp=Ie.unstable_shouldYield,ip=Ie.unstable_requestPaint,J=Ie.unstable_now,op=Ie.unstable_getCurrentPriorityLevel,Ds=Ie.unstable_ImmediatePriority,td=Ie.unstable_UserBlockingPriority,Ui=Ie.unstable_NormalPriority,lp=Ie.unstable_LowPriority,nd=Ie.unstable_IdlePriority,xo=null,be=null;function sp(e){if(be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(xo,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:cp,ap=Math.log,up=Math.LN2;function cp(e){return e>>>=0,e===0?32:31-(ap(e)/up|0)|0}var ri=64,ii=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=fr(s):(o&=l,o!==0&&(r=fr(o)))}else l=n&~i,l!==0?r=fr(l):o!==0&&(r=fr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qe(t),i=1<<n,r|=e[n],t&=~i;return r}function dp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Qe(o),s=1<<l,a=i[l];a===-1?(!(s&n)||s&r)&&(i[l]=dp(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function Bl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rd(){var e=ri;return ri<<=1,!(ri&4194240)&&(ri=64),e}function Jo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=n}function pp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Qe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function As(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var A=0;function id(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var od,Bs,ld,sd,ad,Ul=!1,oi=[],_t=null,Pt=null,zt=null,zr=new Map,Nr=new Map,St=[],hp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Va(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(t.pointerId)}}function rr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Xr(t),t!==null&&Bs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function mp(e,t,n,r,i){switch(t){case"focusin":return _t=rr(_t,e,t,n,r,i),!0;case"dragenter":return Pt=rr(Pt,e,t,n,r,i),!0;case"mouseover":return zt=rr(zt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return zr.set(o,rr(zr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Nr.set(o,rr(Nr.get(o)||null,e,t,n,r,i)),!0}return!1}function ud(e){var t=Yt(e.target);if(t!==null){var n=dn(t);if(n!==null){if(t=n.tag,t===13){if(t=Jc(n),t!==null){e.blockedOn=t,ad(e.priority,function(){ld(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ci(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Wl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fl=r,n.target.dispatchEvent(r),Fl=null}else return t=Xr(n),t!==null&&Bs(t),e.blockedOn=n,!1;t.shift()}return!0}function Ha(e,t,n){Ci(e)&&n.delete(t)}function gp(){Ul=!1,_t!==null&&Ci(_t)&&(_t=null),Pt!==null&&Ci(Pt)&&(Pt=null),zt!==null&&Ci(zt)&&(zt=null),zr.forEach(Ha),Nr.forEach(Ha)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Ul||(Ul=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,gp)))}function Ir(e){function t(i){return ir(i,e)}if(0<oi.length){ir(oi[0],e);for(var n=1;n<oi.length;n++){var r=oi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&ir(_t,e),Pt!==null&&ir(Pt,e),zt!==null&&ir(zt,e),zr.forEach(t),Nr.forEach(t),n=0;n<St.length;n++)r=St[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<St.length&&(n=St[0],n.blockedOn===null);)ud(n),n.blockedOn===null&&St.shift()}var Rn=ht.ReactCurrentBatchConfig,Vi=!0;function vp(e,t,n,r){var i=A,o=Rn.transition;Rn.transition=null;try{A=1,Us(e,t,n,r)}finally{A=i,Rn.transition=o}}function yp(e,t,n,r){var i=A,o=Rn.transition;Rn.transition=null;try{A=4,Us(e,t,n,r)}finally{A=i,Rn.transition=o}}function Us(e,t,n,r){if(Vi){var i=Wl(e,t,n,r);if(i===null)sl(e,t,r,Hi,n),Va(e,r);else if(mp(i,e,t,n,r))r.stopPropagation();else if(Va(e,r),t&4&&-1<hp.indexOf(e)){for(;i!==null;){var o=Xr(i);if(o!==null&&od(o),o=Wl(e,t,n,r),o===null&&sl(e,t,r,Hi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else sl(e,t,r,null,n)}}var Hi=null;function Wl(e,t,n,r){if(Hi=null,e=Ms(r),e=Yt(e),e!==null)if(t=dn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Jc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Hi=e,null}function cd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(op()){case Ds:return 1;case td:return 4;case Ui:case lp:return 16;case nd:return 536870912;default:return 16}default:return 16}}var Ct=null,Ws=null,Ei=null;function dd(){if(Ei)return Ei;var e,t=Ws,n=t.length,r,i="value"in Ct?Ct.value:Ct.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Ei=i.slice(e,1<r?1-r:void 0)}function ji(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function li(){return!0}function Qa(){return!1}function Re(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?li:Qa,this.isPropagationStopped=Qa,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=li)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=li)},persist:function(){},isPersistent:li}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vs=Re(Kn),Kr=X({},Kn,{view:0,detail:0}),xp=Re(Kr),qo,bo,or,wo=X({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(qo=e.screenX-or.screenX,bo=e.screenY-or.screenY):bo=qo=0,or=e),qo)},movementY:function(e){return"movementY"in e?e.movementY:bo}}),Ga=Re(wo),wp=X({},wo,{dataTransfer:0}),Sp=Re(wp),kp=X({},Kr,{relatedTarget:0}),el=Re(kp),Cp=X({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ep=Re(Cp),jp=X({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_p=Re(jp),Pp=X({},Kn,{data:0}),Ya=Re(Pp),zp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Np={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ip={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ip[e])?!!t[e]:!1}function Hs(){return Lp}var Rp=X({},Kr,{key:function(e){if(e.key){var t=zp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Np[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hs,charCode:function(e){return e.type==="keypress"?ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tp=Re(Rp),Op=X({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ka=Re(Op),$p=X({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hs}),Fp=Re($p),Mp=X({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dp=Re(Mp),Ap=X({},wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bp=Re(Ap),Up=[9,13,27,32],Qs=ct&&"CompositionEvent"in window,vr=null;ct&&"documentMode"in document&&(vr=document.documentMode);var Wp=ct&&"TextEvent"in window&&!vr,fd=ct&&(!Qs||vr&&8<vr&&11>=vr),Xa=" ",Za=!1;function pd(e,t){switch(e){case"keyup":return Up.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yn=!1;function Vp(e,t){switch(e){case"compositionend":return hd(t);case"keypress":return t.which!==32?null:(Za=!0,Xa);case"textInput":return e=t.data,e===Xa&&Za?null:e;default:return null}}function Hp(e,t){if(yn)return e==="compositionend"||!Qs&&pd(e,t)?(e=dd(),Ei=Ws=Ct=null,yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fd&&t.locale!=="ko"?null:t.data;default:return null}}var Qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qp[e.type]:t==="textarea"}function md(e,t,n,r){Gc(r),t=Qi(t,"onChange"),0<t.length&&(n=new Vs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var yr=null,Lr=null;function Gp(e){_d(e,0)}function So(e){var t=Sn(e);if(Ac(t))return e}function Yp(e,t){if(e==="change")return t}var gd=!1;if(ct){var tl;if(ct){var nl="oninput"in document;if(!nl){var qa=document.createElement("div");qa.setAttribute("oninput","return;"),nl=typeof qa.oninput=="function"}tl=nl}else tl=!1;gd=tl&&(!document.documentMode||9<document.documentMode)}function ba(){yr&&(yr.detachEvent("onpropertychange",vd),Lr=yr=null)}function vd(e){if(e.propertyName==="value"&&So(Lr)){var t=[];md(t,Lr,e,Ms(e)),Zc(Gp,t)}}function Kp(e,t,n){e==="focusin"?(ba(),yr=t,Lr=n,yr.attachEvent("onpropertychange",vd)):e==="focusout"&&ba()}function Xp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return So(Lr)}function Zp(e,t){if(e==="click")return So(t)}function Jp(e,t){if(e==="input"||e==="change")return So(t)}function qp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:qp;function Rr(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!El.call(t,i)||!Ke(e[i],t[i]))return!1}return!0}function eu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tu(e,t){var n=eu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eu(n)}}function yd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xd(){for(var e=window,t=Di();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Di(e.document)}return t}function Gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function bp(e){var t=xd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yd(n.ownerDocument.documentElement,n)){if(r!==null&&Gs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=tu(n,o);var l=tu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var eh=ct&&"documentMode"in document&&11>=document.documentMode,xn=null,Vl=null,xr=null,Hl=!1;function nu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hl||xn==null||xn!==Di(r)||(r=xn,"selectionStart"in r&&Gs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xr&&Rr(xr,r)||(xr=r,r=Qi(Vl,"onSelect"),0<r.length&&(t=new Vs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xn)))}function si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wn={animationend:si("Animation","AnimationEnd"),animationiteration:si("Animation","AnimationIteration"),animationstart:si("Animation","AnimationStart"),transitionend:si("Transition","TransitionEnd")},rl={},wd={};ct&&(wd=document.createElement("div").style,"AnimationEvent"in window||(delete wn.animationend.animation,delete wn.animationiteration.animation,delete wn.animationstart.animation),"TransitionEvent"in window||delete wn.transitionend.transition);function ko(e){if(rl[e])return rl[e];if(!wn[e])return e;var t=wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wd)return rl[e]=t[n];return e}var Sd=ko("animationend"),kd=ko("animationiteration"),Cd=ko("animationstart"),Ed=ko("transitionend"),jd=new Map,ru="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,t){jd.set(e,t),cn(t,[e])}for(var il=0;il<ru.length;il++){var ol=ru[il],th=ol.toLowerCase(),nh=ol[0].toUpperCase()+ol.slice(1);Mt(th,"on"+nh)}Mt(Sd,"onAnimationEnd");Mt(kd,"onAnimationIteration");Mt(Cd,"onAnimationStart");Mt("dblclick","onDoubleClick");Mt("focusin","onFocus");Mt("focusout","onBlur");Mt(Ed,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rh=new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));function iu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,tp(r,t,void 0,e),e.currentTarget=null}function _d(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==o&&i.isPropagationStopped())break e;iu(i,s,c),o=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,c=s.currentTarget,s=s.listener,a!==o&&i.isPropagationStopped())break e;iu(i,s,c),o=a}}}if(Bi)throw e=Al,Bi=!1,Al=null,e}function V(e,t){var n=t[Xl];n===void 0&&(n=t[Xl]=new Set);var r=e+"__bubble";n.has(r)||(Pd(t,e,2,!1),n.add(r))}function ll(e,t,n){var r=0;t&&(r|=4),Pd(n,e,r,t)}var ai="_reactListening"+Math.random().toString(36).slice(2);function Tr(e){if(!e[ai]){e[ai]=!0,Oc.forEach(function(n){n!=="selectionchange"&&(rh.has(n)||ll(n,!1,e),ll(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ai]||(t[ai]=!0,ll("selectionchange",!1,t))}}function Pd(e,t,n,r){switch(cd(t)){case 1:var i=vp;break;case 4:i=yp;break;default:i=Us}n=i.bind(null,t,n,e),i=void 0,!Dl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function sl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Yt(s),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Zc(function(){var c=o,m=Ms(n),h=[];e:{var g=jd.get(e);if(g!==void 0){var v=Vs,x=e;switch(e){case"keypress":if(ji(n)===0)break e;case"keydown":case"keyup":v=Tp;break;case"focusin":x="focus",v=el;break;case"focusout":x="blur",v=el;break;case"beforeblur":case"afterblur":v=el;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ga;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Sp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Fp;break;case Sd:case kd:case Cd:v=Ep;break;case Ed:v=Dp;break;case"scroll":v=xp;break;case"wheel":v=Bp;break;case"copy":case"cut":case"paste":v=_p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ka}var w=(t&4)!==0,_=!w&&e==="scroll",f=w?g!==null?g+"Capture":null:g;w=[];for(var d=c,p;d!==null;){p=d;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=Pr(d,f),y!=null&&w.push(Or(d,y,p)))),_)break;d=d.return}0<w.length&&(g=new v(g,x,null,n,m),h.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==Fl&&(x=n.relatedTarget||n.fromElement)&&(Yt(x)||x[dt]))break e;if((v||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=c,x=x?Yt(x):null,x!==null&&(_=dn(x),x!==_||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=c),v!==x)){if(w=Ga,y="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ka,y="onPointerLeave",f="onPointerEnter",d="pointer"),_=v==null?g:Sn(v),p=x==null?g:Sn(x),g=new w(y,d+"leave",v,n,m),g.target=_,g.relatedTarget=p,y=null,Yt(m)===c&&(w=new w(f,d+"enter",x,n,m),w.target=p,w.relatedTarget=_,y=w),_=y,v&&x)t:{for(w=v,f=x,d=0,p=w;p;p=fn(p))d++;for(p=0,y=f;y;y=fn(y))p++;for(;0<d-p;)w=fn(w),d--;for(;0<p-d;)f=fn(f),p--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=fn(w),f=fn(f)}w=null}else w=null;v!==null&&ou(h,g,v,w,!1),x!==null&&_!==null&&ou(h,_,x,w,!0)}}e:{if(g=c?Sn(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var k=Yp;else if(Ja(g))if(gd)k=Jp;else{k=Xp;var j=Kp}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=Zp);if(k&&(k=k(e,c))){md(h,k,n,m);break e}j&&j(e,g,c),e==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&Ll(g,"number",g.value)}switch(j=c?Sn(c):window,e){case"focusin":(Ja(j)||j.contentEditable==="true")&&(xn=j,Vl=c,xr=null);break;case"focusout":xr=Vl=xn=null;break;case"mousedown":Hl=!0;break;case"contextmenu":case"mouseup":case"dragend":Hl=!1,nu(h,n,m);break;case"selectionchange":if(eh)break;case"keydown":case"keyup":nu(h,n,m)}var S;if(Qs)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else yn?pd(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(fd&&n.locale!=="ko"&&(yn||I!=="onCompositionStart"?I==="onCompositionEnd"&&yn&&(S=dd()):(Ct=m,Ws="value"in Ct?Ct.value:Ct.textContent,yn=!0)),j=Qi(c,I),0<j.length&&(I=new Ya(I,e,null,n,m),h.push({event:I,listeners:j}),S?I.data=S:(S=hd(n),S!==null&&(I.data=S)))),(S=Wp?Vp(e,n):Hp(e,n))&&(c=Qi(c,"onBeforeInput"),0<c.length&&(m=new Ya("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:c}),m.data=S))}_d(h,t)})}function Or(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Pr(e,n),o!=null&&r.unshift(Or(e,o,i)),o=Pr(e,t),o!=null&&r.push(Or(e,o,i))),e=e.return}return r}function fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ou(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,i?(a=Pr(n,o),a!=null&&l.unshift(Or(n,a,s))):i||(a=Pr(n,o),a!=null&&l.push(Or(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var ih=/\r\n?/g,oh=/\u0000|\uFFFD/g;function lu(e){return(typeof e=="string"?e:""+e).replace(ih,`
`).replace(oh,"")}function ui(e,t,n){if(t=lu(t),lu(e)!==t&&n)throw Error(E(425))}function Gi(){}var Ql=null,Gl=null;function Yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kl=typeof setTimeout=="function"?setTimeout:void 0,lh=typeof clearTimeout=="function"?clearTimeout:void 0,su=typeof Promise=="function"?Promise:void 0,sh=typeof queueMicrotask=="function"?queueMicrotask:typeof su<"u"?function(e){return su.resolve(null).then(e).catch(ah)}:Kl;function ah(e){setTimeout(function(){throw e})}function al(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ir(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ir(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function au(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xn=Math.random().toString(36).slice(2),qe="__reactFiber$"+Xn,$r="__reactProps$"+Xn,dt="__reactContainer$"+Xn,Xl="__reactEvents$"+Xn,uh="__reactListeners$"+Xn,ch="__reactHandles$"+Xn;function Yt(e){var t=e[qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=au(e);e!==null;){if(n=e[qe])return n;e=au(e)}return t}e=n,n=e.parentNode}return null}function Xr(e){return e=e[qe]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Co(e){return e[$r]||null}var Zl=[],kn=-1;function Dt(e){return{current:e}}function Q(e){0>kn||(e.current=Zl[kn],Zl[kn]=null,kn--)}function W(e,t){kn++,Zl[kn]=e.current,e.current=t}var Ft={},he=Dt(Ft),ke=Dt(!1),tn=Ft;function Fn(e,t){var n=e.type.contextTypes;if(!n)return Ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ce(e){return e=e.childContextTypes,e!=null}function Yi(){Q(ke),Q(he)}function uu(e,t,n){if(he.current!==Ft)throw Error(E(168));W(he,t),W(ke,n)}function zd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,K0(e)||"Unknown",i));return X({},n,r)}function Ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ft,tn=he.current,W(he,e),W(ke,ke.current),!0}function cu(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=zd(e,t,tn),r.__reactInternalMemoizedMergedChildContext=e,Q(ke),Q(he),W(he,e)):Q(ke),W(ke,n)}var ot=null,Eo=!1,ul=!1;function Nd(e){ot===null?ot=[e]:ot.push(e)}function dh(e){Eo=!0,Nd(e)}function At(){if(!ul&&ot!==null){ul=!0;var e=0,t=A;try{var n=ot;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ot=null,Eo=!1}catch(i){throw ot!==null&&(ot=ot.slice(e+1)),ed(Ds,At),i}finally{A=t,ul=!1}}return null}var Cn=[],En=0,Xi=null,Zi=0,Te=[],Oe=0,nn=null,st=1,at="";function Ht(e,t){Cn[En++]=Zi,Cn[En++]=Xi,Xi=e,Zi=t}function Id(e,t,n){Te[Oe++]=st,Te[Oe++]=at,Te[Oe++]=nn,nn=e;var r=st;e=at;var i=32-Qe(r)-1;r&=~(1<<i),n+=1;var o=32-Qe(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,st=1<<32-Qe(t)+i|n<<i|r,at=o+e}else st=1<<o|n<<i|r,at=e}function Ys(e){e.return!==null&&(Ht(e,1),Id(e,1,0))}function Ks(e){for(;e===Xi;)Xi=Cn[--En],Cn[En]=null,Zi=Cn[--En],Cn[En]=null;for(;e===nn;)nn=Te[--Oe],Te[Oe]=null,at=Te[--Oe],Te[Oe]=null,st=Te[--Oe],Te[Oe]=null}var Ne=null,ze=null,G=!1,He=null;function Ld(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function du(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,ze=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nn!==null?{id:st,overflow:at}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,ze=null,!0):!1;default:return!1}}function Jl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ql(e){if(G){var t=ze;if(t){var n=t;if(!du(e,t)){if(Jl(e))throw Error(E(418));t=Nt(n.nextSibling);var r=Ne;t&&du(e,t)?Ld(r,n):(e.flags=e.flags&-4097|2,G=!1,Ne=e)}}else{if(Jl(e))throw Error(E(418));e.flags=e.flags&-4097|2,G=!1,Ne=e}}}function fu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function ci(e){if(e!==Ne)return!1;if(!G)return fu(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Yl(e.type,e.memoizedProps)),t&&(t=ze)){if(Jl(e))throw Rd(),Error(E(418));for(;t;)Ld(e,t),t=Nt(t.nextSibling)}if(fu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Ne?Nt(e.stateNode.nextSibling):null;return!0}function Rd(){for(var e=ze;e;)e=Nt(e.nextSibling)}function Mn(){ze=Ne=null,G=!1}function Xs(e){He===null?He=[e]:He.push(e)}var fh=ht.ReactCurrentBatchConfig;function We(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ji=Dt(null),qi=null,jn=null,Zs=null;function Js(){Zs=jn=qi=null}function qs(e){var t=Ji.current;Q(Ji),e._currentValue=t}function bl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tn(e,t){qi=e,Zs=jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(Zs!==e)if(e={context:e,memoizedValue:t,next:null},jn===null){if(qi===null)throw Error(E(308));jn=e,qi.dependencies={lanes:0,firstContext:e}}else jn=jn.next=e;return t}var Kt=null;function bs(e){Kt===null?Kt=[e]:Kt.push(e)}function Td(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,bs(t)):(n.next=i.next,i.next=n),t.interleaved=n,ft(e,r)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wt=!1;function ea(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Od(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function It(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ft(e,n)}return i=r.interleaved,i===null?(t.next=t,bs(r)):(t.next=i.next,i.next=t),r.interleaved=t,ft(e,n)}function _i(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,As(e,n)}}function pu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bi(e,t,n,r){var i=e.updateQueue;wt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,c=a.next;a.next=null,l===null?o=c:l.next=c,l=a;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==l&&(s===null?m.firstBaseUpdate=c:s.next=c,m.lastBaseUpdate=a))}if(o!==null){var h=i.baseState;l=0,m=c=a=null,s=o;do{var g=s.lane,v=s.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,w=s;switch(g=t,v=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){h=x.call(v,h,g);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,g=typeof x=="function"?x.call(v,h,g):x,g==null)break e;h=X({},h,g);break e;case 2:wt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else v={eventTime:v,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(c=m=v,a=h):m=m.next=v,l|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(m===null&&(a=h),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);on|=l,e.lanes=l,e.memoizedState=h}}function hu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var $d=new Tc.Component().refs;function es(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jo={isMounted:function(e){return(e=e._reactInternals)?dn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Rt(e),o=ut(r,i);o.payload=t,n!=null&&(o.callback=n),t=It(e,o,i),t!==null&&(Ge(t,e,i,r),_i(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Rt(e),o=ut(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=It(e,o,i),t!==null&&(Ge(t,e,i,r),_i(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=Rt(e),i=ut(n,r);i.tag=2,t!=null&&(i.callback=t),t=It(e,i,r),t!==null&&(Ge(t,e,r,n),_i(t,e,r))}};function mu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Rr(n,r)||!Rr(i,o):!0}function Fd(e,t,n){var r=!1,i=Ft,o=t.contextType;return typeof o=="object"&&o!==null?o=Me(o):(i=Ce(t)?tn:he.current,r=t.contextTypes,o=(r=r!=null)?Fn(e,i):Ft),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=jo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function gu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&jo.enqueueReplaceState(t,t.state,null)}function ts(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=$d,ea(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Me(o):(o=Ce(t)?tn:he.current,i.context=Fn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(es(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&jo.enqueueReplaceState(i,i.state,null),bi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===$d&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function di(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vu(e){var t=e._init;return t(e._payload)}function Md(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=Tt(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,y){return d===null||d.tag!==6?(d=gl(p,f.mode,y),d.return=f,d):(d=i(d,p),d.return=f,d)}function a(f,d,p,y){var k=p.type;return k===vn?m(f,d,p.props.children,y,p.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===xt&&vu(k)===d.type)?(y=i(d,p.props),y.ref=lr(f,d,p),y.return=f,y):(y=Ri(p.type,p.key,p.props,null,f.mode,y),y.ref=lr(f,d,p),y.return=f,y)}function c(f,d,p,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=vl(p,f.mode,y),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function m(f,d,p,y,k){return d===null||d.tag!==7?(d=qt(p,f.mode,y,k),d.return=f,d):(d=i(d,p),d.return=f,d)}function h(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=gl(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ei:return p=Ri(d.type,d.key,d.props,null,f.mode,p),p.ref=lr(f,null,d),p.return=f,p;case gn:return d=vl(d,f.mode,p),d.return=f,d;case xt:var y=d._init;return h(f,y(d._payload),p)}if(dr(d)||tr(d))return d=qt(d,f.mode,p,null),d.return=f,d;di(f,d)}return null}function g(f,d,p,y){var k=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:s(f,d,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ei:return p.key===k?a(f,d,p,y):null;case gn:return p.key===k?c(f,d,p,y):null;case xt:return k=p._init,g(f,d,k(p._payload),y)}if(dr(p)||tr(p))return k!==null?null:m(f,d,p,y,null);di(f,p)}return null}function v(f,d,p,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,s(d,f,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ei:return f=f.get(y.key===null?p:y.key)||null,a(d,f,y,k);case gn:return f=f.get(y.key===null?p:y.key)||null,c(d,f,y,k);case xt:var j=y._init;return v(f,d,p,j(y._payload),k)}if(dr(y)||tr(y))return f=f.get(p)||null,m(d,f,y,k,null);di(d,y)}return null}function x(f,d,p,y){for(var k=null,j=null,S=d,I=d=0,T=null;S!==null&&I<p.length;I++){S.index>I?(T=S,S=null):T=S.sibling;var R=g(f,S,p[I],y);if(R===null){S===null&&(S=T);break}e&&S&&R.alternate===null&&t(f,S),d=o(R,d,I),j===null?k=R:j.sibling=R,j=R,S=T}if(I===p.length)return n(f,S),G&&Ht(f,I),k;if(S===null){for(;I<p.length;I++)S=h(f,p[I],y),S!==null&&(d=o(S,d,I),j===null?k=S:j.sibling=S,j=S);return G&&Ht(f,I),k}for(S=r(f,S);I<p.length;I++)T=v(S,f,I,p[I],y),T!==null&&(e&&T.alternate!==null&&S.delete(T.key===null?I:T.key),d=o(T,d,I),j===null?k=T:j.sibling=T,j=T);return e&&S.forEach(function(me){return t(f,me)}),G&&Ht(f,I),k}function w(f,d,p,y){var k=tr(p);if(typeof k!="function")throw Error(E(150));if(p=k.call(p),p==null)throw Error(E(151));for(var j=k=null,S=d,I=d=0,T=null,R=p.next();S!==null&&!R.done;I++,R=p.next()){S.index>I?(T=S,S=null):T=S.sibling;var me=g(f,S,R.value,y);if(me===null){S===null&&(S=T);break}e&&S&&me.alternate===null&&t(f,S),d=o(me,d,I),j===null?k=me:j.sibling=me,j=me,S=T}if(R.done)return n(f,S),G&&Ht(f,I),k;if(S===null){for(;!R.done;I++,R=p.next())R=h(f,R.value,y),R!==null&&(d=o(R,d,I),j===null?k=R:j.sibling=R,j=R);return G&&Ht(f,I),k}for(S=r(f,S);!R.done;I++,R=p.next())R=v(S,f,I,R.value,y),R!==null&&(e&&R.alternate!==null&&S.delete(R.key===null?I:R.key),d=o(R,d,I),j===null?k=R:j.sibling=R,j=R);return e&&S.forEach(function(tt){return t(f,tt)}),G&&Ht(f,I),k}function _(f,d,p,y){if(typeof p=="object"&&p!==null&&p.type===vn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ei:e:{for(var k=p.key,j=d;j!==null;){if(j.key===k){if(k=p.type,k===vn){if(j.tag===7){n(f,j.sibling),d=i(j,p.props.children),d.return=f,f=d;break e}}else if(j.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===xt&&vu(k)===j.type){n(f,j.sibling),d=i(j,p.props),d.ref=lr(f,j,p),d.return=f,f=d;break e}n(f,j);break}else t(f,j);j=j.sibling}p.type===vn?(d=qt(p.props.children,f.mode,y,p.key),d.return=f,f=d):(y=Ri(p.type,p.key,p.props,null,f.mode,y),y.ref=lr(f,d,p),y.return=f,f=y)}return l(f);case gn:e:{for(j=p.key;d!==null;){if(d.key===j)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=vl(p,f.mode,y),d.return=f,f=d}return l(f);case xt:return j=p._init,_(f,d,j(p._payload),y)}if(dr(p))return x(f,d,p,y);if(tr(p))return w(f,d,p,y);di(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,p),d.return=f,f=d):(n(f,d),d=gl(p,f.mode,y),d.return=f,f=d),l(f)):n(f,d)}return _}var Dn=Md(!0),Dd=Md(!1),Zr={},et=Dt(Zr),Fr=Dt(Zr),Mr=Dt(Zr);function Xt(e){if(e===Zr)throw Error(E(174));return e}function ta(e,t){switch(W(Mr,t),W(Fr,e),W(et,Zr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Tl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Tl(t,e)}Q(et),W(et,t)}function An(){Q(et),Q(Fr),Q(Mr)}function Ad(e){Xt(Mr.current);var t=Xt(et.current),n=Tl(t,e.type);t!==n&&(W(Fr,e),W(et,n))}function na(e){Fr.current===e&&(Q(et),Q(Fr))}var Y=Dt(0);function eo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cl=[];function ra(){for(var e=0;e<cl.length;e++)cl[e]._workInProgressVersionPrimary=null;cl.length=0}var Pi=ht.ReactCurrentDispatcher,dl=ht.ReactCurrentBatchConfig,rn=0,K=null,te=null,ie=null,to=!1,wr=!1,Dr=0,ph=0;function de(){throw Error(E(321))}function ia(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function oa(e,t,n,r,i,o){if(rn=o,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pi.current=e===null||e.memoizedState===null?vh:yh,e=n(r,i),wr){o=0;do{if(wr=!1,Dr=0,25<=o)throw Error(E(301));o+=1,ie=te=null,t.updateQueue=null,Pi.current=xh,e=n(r,i)}while(wr)}if(Pi.current=no,t=te!==null&&te.next!==null,rn=0,ie=te=K=null,to=!1,t)throw Error(E(300));return e}function la(){var e=Dr!==0;return Dr=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?K.memoizedState=ie=e:ie=ie.next=e,ie}function De(){if(te===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=ie===null?K.memoizedState:ie.next;if(t!==null)ie=t,te=e;else{if(e===null)throw Error(E(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ie===null?K.memoizedState=ie=e:ie=ie.next=e}return ie}function Ar(e,t){return typeof t=="function"?t(e):t}function fl(e){var t=De(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=te,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,a=null,c=o;do{var m=c.lane;if((rn&m)===m)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=h,l=r):a=a.next=h,K.lanes|=m,on|=m}c=c.next}while(c!==null&&c!==o);a===null?l=r:a.next=s,Ke(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,K.lanes|=o,on|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pl(e){var t=De(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ke(o,t.memoizedState)||(Se=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bd(){}function Ud(e,t){var n=K,r=De(),i=t(),o=!Ke(r.memoizedState,i);if(o&&(r.memoizedState=i,Se=!0),r=r.queue,sa(Hd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,Br(9,Vd.bind(null,n,r,i,t),void 0,null),se===null)throw Error(E(349));rn&30||Wd(n,t,i)}return i}function Wd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vd(e,t,n,r){t.value=n,t.getSnapshot=r,Qd(t)&&Gd(e)}function Hd(e,t,n){return n(function(){Qd(t)&&Gd(e)})}function Qd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function Gd(e){var t=ft(e,1);t!==null&&Ge(t,e,1,-1)}function yu(e){var t=Ze();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ar,lastRenderedState:e},t.queue=e,e=e.dispatch=gh.bind(null,K,e),[t.memoizedState,e]}function Br(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Yd(){return De().memoizedState}function zi(e,t,n,r){var i=Ze();K.flags|=e,i.memoizedState=Br(1|t,n,void 0,r===void 0?null:r)}function _o(e,t,n,r){var i=De();r=r===void 0?null:r;var o=void 0;if(te!==null){var l=te.memoizedState;if(o=l.destroy,r!==null&&ia(r,l.deps)){i.memoizedState=Br(t,n,o,r);return}}K.flags|=e,i.memoizedState=Br(1|t,n,o,r)}function xu(e,t){return zi(8390656,8,e,t)}function sa(e,t){return _o(2048,8,e,t)}function Kd(e,t){return _o(4,2,e,t)}function Xd(e,t){return _o(4,4,e,t)}function Zd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jd(e,t,n){return n=n!=null?n.concat([e]):null,_o(4,4,Zd.bind(null,t,e),n)}function aa(){}function qd(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ia(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bd(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ia(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ef(e,t,n){return rn&21?(Ke(n,t)||(n=rd(),K.lanes|=n,on|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function hh(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=dl.transition;dl.transition={};try{e(!1),t()}finally{A=n,dl.transition=r}}function tf(){return De().memoizedState}function mh(e,t,n){var r=Rt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nf(e))rf(t,n);else if(n=Td(e,t,n,r),n!==null){var i=ve();Ge(n,e,r,i),of(n,t,r)}}function gh(e,t,n){var r=Rt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nf(e))rf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Ke(s,l)){var a=t.interleaved;a===null?(i.next=i,bs(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Td(e,t,i,r),n!==null&&(i=ve(),Ge(n,e,r,i),of(n,t,r))}}function nf(e){var t=e.alternate;return e===K||t!==null&&t===K}function rf(e,t){wr=to=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function of(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,As(e,n)}}var no={readContext:Me,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},vh={readContext:Me,useCallback:function(e,t){return Ze().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:xu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zi(4194308,4,Zd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return zi(4,2,e,t)},useMemo:function(e,t){var n=Ze();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ze();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=mh.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=Ze();return e={current:e},t.memoizedState=e},useState:yu,useDebugValue:aa,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=yu(!1),t=e[0];return e=hh.bind(null,e[1]),Ze().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,i=Ze();if(G){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),se===null)throw Error(E(349));rn&30||Wd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,xu(Hd.bind(null,r,o,e),[e]),r.flags|=2048,Br(9,Vd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ze(),t=se.identifierPrefix;if(G){var n=at,r=st;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ph++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},yh={readContext:Me,useCallback:qd,useContext:Me,useEffect:sa,useImperativeHandle:Jd,useInsertionEffect:Kd,useLayoutEffect:Xd,useMemo:bd,useReducer:fl,useRef:Yd,useState:function(){return fl(Ar)},useDebugValue:aa,useDeferredValue:function(e){var t=De();return ef(t,te.memoizedState,e)},useTransition:function(){var e=fl(Ar)[0],t=De().memoizedState;return[e,t]},useMutableSource:Bd,useSyncExternalStore:Ud,useId:tf,unstable_isNewReconciler:!1},xh={readContext:Me,useCallback:qd,useContext:Me,useEffect:sa,useImperativeHandle:Jd,useInsertionEffect:Kd,useLayoutEffect:Xd,useMemo:bd,useReducer:pl,useRef:Yd,useState:function(){return pl(Ar)},useDebugValue:aa,useDeferredValue:function(e){var t=De();return te===null?t.memoizedState=e:ef(t,te.memoizedState,e)},useTransition:function(){var e=pl(Ar)[0],t=De().memoizedState;return[e,t]},useMutableSource:Bd,useSyncExternalStore:Ud,useId:tf,unstable_isNewReconciler:!1};function Bn(e,t){try{var n="",r=t;do n+=Y0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function hl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ns(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var wh=typeof WeakMap=="function"?WeakMap:Map;function lf(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){io||(io=!0,fs=r),ns(e,t)},n}function sf(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ns(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ns(e,t),typeof r!="function"&&(Lt===null?Lt=new Set([this]):Lt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new wh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Oh.bind(null,e,t,n),t.then(e,e))}function Su(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ku(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,It(n,t,1))),n.lanes|=1),e)}var Sh=ht.ReactCurrentOwner,Se=!1;function ge(e,t,n,r){t.child=e===null?Dd(t,null,n,r):Dn(t,e.child,n,r)}function Cu(e,t,n,r,i){n=n.render;var o=t.ref;return Tn(t,i),r=oa(e,t,n,r,o,i),n=la(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pt(e,t,i)):(G&&n&&Ys(t),t.flags|=1,ge(e,t,r,i),t.child)}function Eu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ga(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,af(e,t,o,r,i)):(e=Ri(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Rr,n(l,r)&&e.ref===t.ref)return pt(e,t,i)}return t.flags|=1,e=Tt(o,r),e.ref=t.ref,e.return=t,t.child=e}function af(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Rr(o,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,pt(e,t,i)}return rs(e,t,n,r,i)}function uf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Pn,Pe),Pe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Pn,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(Pn,Pe),Pe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(Pn,Pe),Pe|=r;return ge(e,t,i,n),t.child}function cf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function rs(e,t,n,r,i){var o=Ce(n)?tn:he.current;return o=Fn(t,o),Tn(t,i),n=oa(e,t,n,r,o,i),r=la(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,pt(e,t,i)):(G&&r&&Ys(t),t.flags|=1,ge(e,t,n,i),t.child)}function ju(e,t,n,r,i){if(Ce(n)){var o=!0;Ki(t)}else o=!1;if(Tn(t,i),t.stateNode===null)Ni(e,t),Fd(t,n,r),ts(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Me(c):(c=Ce(n)?tn:he.current,c=Fn(t,c));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==c)&&gu(t,l,r,c),wt=!1;var g=t.memoizedState;l.state=g,bi(t,r,l,i),a=t.memoizedState,s!==r||g!==a||ke.current||wt?(typeof m=="function"&&(es(t,n,m,r),a=t.memoizedState),(s=wt||mu(t,n,s,r,g,a,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Od(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:We(t.type,s),l.props=c,h=t.pendingProps,g=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Me(a):(a=Ce(n)?tn:he.current,a=Fn(t,a));var v=n.getDerivedStateFromProps;(m=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||g!==a)&&gu(t,l,r,a),wt=!1,g=t.memoizedState,l.state=g,bi(t,r,l,i);var x=t.memoizedState;s!==h||g!==x||ke.current||wt?(typeof v=="function"&&(es(t,n,v,r),x=t.memoizedState),(c=wt||mu(t,n,c,r,g,x,a)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return is(e,t,n,r,o,i)}function is(e,t,n,r,i,o){cf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&cu(t,n,!1),pt(e,t,o);r=t.stateNode,Sh.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Dn(t,e.child,null,o),t.child=Dn(t,null,s,o)):ge(e,t,s,o),t.memoizedState=r.state,i&&cu(t,n,!0),t.child}function df(e){var t=e.stateNode;t.pendingContext?uu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&uu(e,t.context,!1),ta(e,t.containerInfo)}function _u(e,t,n,r,i){return Mn(),Xs(i),t.flags|=256,ge(e,t,n,r),t.child}var os={dehydrated:null,treeContext:null,retryLane:0};function ls(e){return{baseLanes:e,cachePool:null,transitions:null}}function ff(e,t,n){var r=t.pendingProps,i=Y.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(Y,i&1),e===null)return ql(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=No(l,r,0,null),e=qt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ls(n),t.memoizedState=os,e):ua(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return kh(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Tt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Tt(s,o):(o=qt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ls(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=os,r}return o=e.child,e=o.sibling,r=Tt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ua(e,t){return t=No({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fi(e,t,n,r){return r!==null&&Xs(r),Dn(t,e.child,null,n),e=ua(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kh(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=hl(Error(E(422))),fi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=No({mode:"visible",children:r.children},i,0,null),o=qt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Dn(t,e.child,null,l),t.child.memoizedState=ls(l),t.memoizedState=os,o);if(!(t.mode&1))return fi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(E(419)),r=hl(o,r,void 0),fi(e,t,l,r)}if(s=(l&e.childLanes)!==0,Se||s){if(r=se,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ft(e,i),Ge(r,e,i,-1))}return ma(),r=hl(Error(E(421))),fi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=$h.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ze=Nt(i.nextSibling),Ne=t,G=!0,He=null,e!==null&&(Te[Oe++]=st,Te[Oe++]=at,Te[Oe++]=nn,st=e.id,at=e.overflow,nn=t),t=ua(t,r.children),t.flags|=4096,t)}function Pu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),bl(e.return,t,n)}function ml(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function pf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ge(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pu(e,n,t);else if(e.tag===19)Pu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Y,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&eo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ml(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&eo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ml(t,!0,n,null,o);break;case"together":ml(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ni(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),on|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Tt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ch(e,t,n){switch(t.tag){case 3:df(t),Mn();break;case 5:Ad(t);break;case 1:Ce(t.type)&&Ki(t);break;case 4:ta(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(Ji,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?ff(e,t,n):(W(Y,Y.current&1),e=pt(e,t,n),e!==null?e.sibling:null);W(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return pf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,uf(e,t,n)}return pt(e,t,n)}var hf,ss,mf,gf;hf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ss=function(){};mf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Xt(et.current);var o=null;switch(n){case"input":i=Nl(e,i),r=Nl(e,r),o=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":i=Rl(e,i),r=Rl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gi)}Ol(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(jr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(jr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&V("scroll",e),o||s===a||(o=[])):(o=o||[]).push(c,a))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};gf=function(e,t,n,r){n!==r&&(t.flags|=4)};function sr(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Eh(e,t,n){var r=t.pendingProps;switch(Ks(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return Ce(t.type)&&Yi(),fe(t),null;case 3:return r=t.stateNode,An(),Q(ke),Q(he),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ci(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,He!==null&&(ms(He),He=null))),ss(e,t),fe(t),null;case 5:na(t);var i=Xt(Mr.current);if(n=t.type,e!==null&&t.stateNode!=null)mf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return fe(t),null}if(e=Xt(et.current),ci(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[qe]=t,r[$r]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<pr.length;i++)V(pr[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Fa(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":Da(r,o),V("invalid",r)}Ol(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ui(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ui(r.textContent,s,e),i=["children",""+s]):jr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&V("scroll",r)}switch(n){case"input":ti(r),Ma(r,o,!0);break;case"textarea":ti(r),Aa(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Gi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[qe]=t,e[$r]=r,hf(e,t,!1,!1),t.stateNode=e;e:{switch(l=$l(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<pr.length;i++)V(pr[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":Fa(e,r),i=Nl(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),V("invalid",e);break;case"textarea":Da(e,r),i=Rl(e,r),V("invalid",e);break;default:i=r}Ol(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?Qc(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Vc(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&_r(e,a):typeof a=="number"&&_r(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(jr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&V("scroll",e):a!=null&&Ts(e,o,a,l))}switch(n){case"input":ti(e),Ma(e,r,!1);break;case"textarea":ti(e),Aa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$t(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Nn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Gi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.stateNode!=null)gf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Xt(Mr.current),Xt(et.current),ci(t)){if(r=t.stateNode,n=t.memoizedProps,r[qe]=t,(o=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:ui(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ui(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qe]=t,t.stateNode=r}return fe(t),null;case 13:if(Q(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&ze!==null&&t.mode&1&&!(t.flags&128))Rd(),Mn(),t.flags|=98560,o=!1;else if(o=ci(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[qe]=t}else Mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;fe(t),o=!1}else He!==null&&(ms(He),He=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?ne===0&&(ne=3):ma())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return An(),ss(e,t),e===null&&Tr(t.stateNode.containerInfo),fe(t),null;case 10:return qs(t.type._context),fe(t),null;case 17:return Ce(t.type)&&Yi(),fe(t),null;case 19:if(Q(Y),o=t.memoizedState,o===null)return fe(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)sr(o,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=eo(e),l!==null){for(t.flags|=128,sr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Y,Y.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>Un&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304)}else{if(!r)if(e=eo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!G)return fe(t),null}else 2*J()-o.renderingStartTime>Un&&n!==1073741824&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,n=Y.current,W(Y,r?n&1|2:n&1),t):(fe(t),null);case 22:case 23:return ha(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pe&1073741824&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function jh(e,t){switch(Ks(t),t.tag){case 1:return Ce(t.type)&&Yi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return An(),Q(ke),Q(he),ra(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return na(t),null;case 13:if(Q(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(Y),null;case 4:return An(),null;case 10:return qs(t.type._context),null;case 22:case 23:return ha(),null;case 24:return null;default:return null}}var pi=!1,pe=!1,_h=typeof WeakSet=="function"?WeakSet:Set,N=null;function _n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function as(e,t,n){try{n()}catch(r){Z(e,t,r)}}var zu=!1;function Ph(e,t){if(Ql=Vi,e=xd(),Gs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,c=0,m=0,h=e,g=null;t:for(;;){for(var v;h!==n||i!==0&&h.nodeType!==3||(s=l+i),h!==o||r!==0&&h.nodeType!==3||(a=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(v=h.firstChild)!==null;)g=h,h=v;for(;;){if(h===e)break t;if(g===n&&++c===i&&(s=l),g===o&&++m===r&&(a=l),(v=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gl={focusedElem:e,selectionRange:n},Vi=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,_=x.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:We(t.type,w),_);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){Z(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return x=zu,zu=!1,x}function Sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&as(t,n,o)}i=i.next}while(i!==r)}}function Po(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function us(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function vf(e){var t=e.alternate;t!==null&&(e.alternate=null,vf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qe],delete t[$r],delete t[Xl],delete t[uh],delete t[ch])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yf(e){return e.tag===5||e.tag===3||e.tag===4}function Nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gi));else if(r!==4&&(e=e.child,e!==null))for(cs(e,t,n),e=e.sibling;e!==null;)cs(e,t,n),e=e.sibling}function ds(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ds(e,t,n),e=e.sibling;e!==null;)ds(e,t,n),e=e.sibling}var ae=null,Ve=!1;function vt(e,t,n){for(n=n.child;n!==null;)xf(e,t,n),n=n.sibling}function xf(e,t,n){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(xo,n)}catch{}switch(n.tag){case 5:pe||_n(n,t);case 6:var r=ae,i=Ve;ae=null,vt(e,t,n),ae=r,Ve=i,ae!==null&&(Ve?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Ve?(e=ae,n=n.stateNode,e.nodeType===8?al(e.parentNode,n):e.nodeType===1&&al(e,n),Ir(e)):al(ae,n.stateNode));break;case 4:r=ae,i=Ve,ae=n.stateNode.containerInfo,Ve=!0,vt(e,t,n),ae=r,Ve=i;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&as(n,t,l),i=i.next}while(i!==r)}vt(e,t,n);break;case 1:if(!pe&&(_n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Z(n,t,s)}vt(e,t,n);break;case 21:vt(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,vt(e,t,n),pe=r):vt(e,t,n);break;default:vt(e,t,n)}}function Iu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _h),t.forEach(function(r){var i=Fh.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ae=s.stateNode,Ve=!1;break e;case 3:ae=s.stateNode.containerInfo,Ve=!0;break e;case 4:ae=s.stateNode.containerInfo,Ve=!0;break e}s=s.return}if(ae===null)throw Error(E(160));xf(o,l,i),ae=null,Ve=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){Z(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wf(t,e),t=t.sibling}function wf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),Xe(e),r&4){try{Sr(3,e,e.return),Po(3,e)}catch(w){Z(e,e.return,w)}try{Sr(5,e,e.return)}catch(w){Z(e,e.return,w)}}break;case 1:Ue(t,e),Xe(e),r&512&&n!==null&&_n(n,n.return);break;case 5:if(Ue(t,e),Xe(e),r&512&&n!==null&&_n(n,n.return),e.flags&32){var i=e.stateNode;try{_r(i,"")}catch(w){Z(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Bc(i,o),$l(s,l);var c=$l(s,o);for(l=0;l<a.length;l+=2){var m=a[l],h=a[l+1];m==="style"?Qc(i,h):m==="dangerouslySetInnerHTML"?Vc(i,h):m==="children"?_r(i,h):Ts(i,m,h,c)}switch(s){case"input":Il(i,o);break;case"textarea":Uc(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Nn(i,!!o.multiple,v,!1):g!==!!o.multiple&&(o.defaultValue!=null?Nn(i,!!o.multiple,o.defaultValue,!0):Nn(i,!!o.multiple,o.multiple?[]:"",!1))}i[$r]=o}catch(w){Z(e,e.return,w)}}break;case 6:if(Ue(t,e),Xe(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){Z(e,e.return,w)}}break;case 3:if(Ue(t,e),Xe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ir(t.containerInfo)}catch(w){Z(e,e.return,w)}break;case 4:Ue(t,e),Xe(e);break;case 13:Ue(t,e),Xe(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(fa=J())),r&4&&Iu(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(c=pe)||m,Ue(t,e),pe=c):Ue(t,e),Xe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(N=e,m=e.child;m!==null;){for(h=N=m;N!==null;){switch(g=N,v=g.child,g.tag){case 0:case 11:case 14:case 15:Sr(4,g,g.return);break;case 1:_n(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){Z(r,n,w)}}break;case 5:_n(g,g.return);break;case 22:if(g.memoizedState!==null){Ru(h);continue}}v!==null?(v.return=g,N=v):Ru(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,a=h.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Hc("display",l))}catch(w){Z(e,e.return,w)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(w){Z(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ue(t,e),Xe(e),r&4&&Iu(e);break;case 21:break;default:Ue(t,e),Xe(e)}}function Xe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yf(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_r(i,""),r.flags&=-33);var o=Nu(e);ds(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Nu(e);cs(e,s,l);break;default:throw Error(E(161))}}catch(a){Z(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zh(e,t,n){N=e,Sf(e)}function Sf(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||pi;if(!l){var s=i.alternate,a=s!==null&&s.memoizedState!==null||pe;s=pi;var c=pe;if(pi=l,(pe=a)&&!c)for(N=i;N!==null;)l=N,a=l.child,l.tag===22&&l.memoizedState!==null?Tu(i):a!==null?(a.return=l,N=a):Tu(i);for(;o!==null;)N=o,Sf(o),o=o.sibling;N=i,pi=s,pe=c}Lu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):Lu(e)}}function Lu(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||Po(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&hu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Ir(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}pe||t.flags&512&&us(t)}catch(g){Z(t,t.return,g)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Ru(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Tu(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Po(4,t)}catch(a){Z(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){Z(t,i,a)}}var o=t.return;try{us(t)}catch(a){Z(t,o,a)}break;case 5:var l=t.return;try{us(t)}catch(a){Z(t,l,a)}}}catch(a){Z(t,t.return,a)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var Nh=Math.ceil,ro=ht.ReactCurrentDispatcher,ca=ht.ReactCurrentOwner,Fe=ht.ReactCurrentBatchConfig,M=0,se=null,b=null,ue=0,Pe=0,Pn=Dt(0),ne=0,Ur=null,on=0,zo=0,da=0,kr=null,we=null,fa=0,Un=1/0,rt=null,io=!1,fs=null,Lt=null,hi=!1,Et=null,oo=0,Cr=0,ps=null,Ii=-1,Li=0;function ve(){return M&6?J():Ii!==-1?Ii:Ii=J()}function Rt(e){return e.mode&1?M&2&&ue!==0?ue&-ue:fh.transition!==null?(Li===0&&(Li=rd()),Li):(e=A,e!==0||(e=window.event,e=e===void 0?16:cd(e.type)),e):1}function Ge(e,t,n,r){if(50<Cr)throw Cr=0,ps=null,Error(E(185));Yr(e,n,r),(!(M&2)||e!==se)&&(e===se&&(!(M&2)&&(zo|=n),ne===4&&kt(e,ue)),Ee(e,r),n===1&&M===0&&!(t.mode&1)&&(Un=J()+500,Eo&&At()))}function Ee(e,t){var n=e.callbackNode;fp(e,t);var r=Wi(e,e===se?ue:0);if(r===0)n!==null&&Wa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wa(n),t===1)e.tag===0?dh(Ou.bind(null,e)):Nd(Ou.bind(null,e)),sh(function(){!(M&6)&&At()}),n=null;else{switch(id(r)){case 1:n=Ds;break;case 4:n=td;break;case 16:n=Ui;break;case 536870912:n=nd;break;default:n=Ui}n=Nf(n,kf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kf(e,t){if(Ii=-1,Li=0,M&6)throw Error(E(327));var n=e.callbackNode;if(On()&&e.callbackNode!==n)return null;var r=Wi(e,e===se?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=lo(e,r);else{t=r;var i=M;M|=2;var o=Ef();(se!==e||ue!==t)&&(rt=null,Un=J()+500,Jt(e,t));do try{Rh();break}catch(s){Cf(e,s)}while(!0);Js(),ro.current=o,M=i,b!==null?t=0:(se=null,ue=0,t=ne)}if(t!==0){if(t===2&&(i=Bl(e),i!==0&&(r=i,t=hs(e,i))),t===1)throw n=Ur,Jt(e,0),kt(e,r),Ee(e,J()),n;if(t===6)kt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ih(i)&&(t=lo(e,r),t===2&&(o=Bl(e),o!==0&&(r=o,t=hs(e,o))),t===1))throw n=Ur,Jt(e,0),kt(e,r),Ee(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Qt(e,we,rt);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=fa+500-J(),10<t)){if(Wi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Kl(Qt.bind(null,e,we,rt),t);break}Qt(e,we,rt);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Qe(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Nh(r/1960))-r,10<r){e.timeoutHandle=Kl(Qt.bind(null,e,we,rt),r);break}Qt(e,we,rt);break;case 5:Qt(e,we,rt);break;default:throw Error(E(329))}}}return Ee(e,J()),e.callbackNode===n?kf.bind(null,e):null}function hs(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(Jt(e,t).flags|=256),e=lo(e,t),e!==2&&(t=we,we=n,t!==null&&ms(t)),e}function ms(e){we===null?we=e:we.push.apply(we,e)}function Ih(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ke(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~da,t&=~zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qe(t),r=1<<n;e[n]=-1,t&=~r}}function Ou(e){if(M&6)throw Error(E(327));On();var t=Wi(e,0);if(!(t&1))return Ee(e,J()),null;var n=lo(e,t);if(e.tag!==0&&n===2){var r=Bl(e);r!==0&&(t=r,n=hs(e,r))}if(n===1)throw n=Ur,Jt(e,0),kt(e,t),Ee(e,J()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qt(e,we,rt),Ee(e,J()),null}function pa(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Un=J()+500,Eo&&At())}}function ln(e){Et!==null&&Et.tag===0&&!(M&6)&&On();var t=M;M|=1;var n=Fe.transition,r=A;try{if(Fe.transition=null,A=1,e)return e()}finally{A=r,Fe.transition=n,M=t,!(M&6)&&At()}}function ha(){Pe=Pn.current,Q(Pn)}function Jt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,lh(n)),b!==null)for(n=b.return;n!==null;){var r=n;switch(Ks(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yi();break;case 3:An(),Q(ke),Q(he),ra();break;case 5:na(r);break;case 4:An();break;case 13:Q(Y);break;case 19:Q(Y);break;case 10:qs(r.type._context);break;case 22:case 23:ha()}n=n.return}if(se=e,b=e=Tt(e.current,null),ue=Pe=t,ne=0,Ur=null,da=zo=on=0,we=kr=null,Kt!==null){for(t=0;t<Kt.length;t++)if(n=Kt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Kt=null}return e}function Cf(e,t){do{var n=b;try{if(Js(),Pi.current=no,to){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}to=!1}if(rn=0,ie=te=K=null,wr=!1,Dr=0,ca.current=null,n===null||n.return===null){ne=1,Ur=t,b=null;break}e:{var o=e,l=n.return,s=n,a=t;if(t=ue,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,m=s,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=Su(l);if(v!==null){v.flags&=-257,ku(v,l,s,o,t),v.mode&1&&wu(o,c,t),t=v,a=c;var x=t.updateQueue;if(x===null){var w=new Set;w.add(a),t.updateQueue=w}else x.add(a);break e}else{if(!(t&1)){wu(o,c,t),ma();break e}a=Error(E(426))}}else if(G&&s.mode&1){var _=Su(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),ku(_,l,s,o,t),Xs(Bn(a,s));break e}}o=a=Bn(a,s),ne!==4&&(ne=2),kr===null?kr=[o]:kr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=lf(o,a,t);pu(o,f);break e;case 1:s=a;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Lt===null||!Lt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=sf(o,s,t);pu(o,y);break e}}o=o.return}while(o!==null)}_f(n)}catch(k){t=k,b===n&&n!==null&&(b=n=n.return);continue}break}while(!0)}function Ef(){var e=ro.current;return ro.current=no,e===null?no:e}function ma(){(ne===0||ne===3||ne===2)&&(ne=4),se===null||!(on&268435455)&&!(zo&268435455)||kt(se,ue)}function lo(e,t){var n=M;M|=2;var r=Ef();(se!==e||ue!==t)&&(rt=null,Jt(e,t));do try{Lh();break}catch(i){Cf(e,i)}while(!0);if(Js(),M=n,ro.current=r,b!==null)throw Error(E(261));return se=null,ue=0,ne}function Lh(){for(;b!==null;)jf(b)}function Rh(){for(;b!==null&&!rp();)jf(b)}function jf(e){var t=zf(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?_f(e):b=t,ca.current=null}function _f(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=jh(n,t),n!==null){n.flags&=32767,b=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,b=null;return}}else if(n=Eh(n,t,Pe),n!==null){b=n;return}if(t=t.sibling,t!==null){b=t;return}b=t=e}while(t!==null);ne===0&&(ne=5)}function Qt(e,t,n){var r=A,i=Fe.transition;try{Fe.transition=null,A=1,Th(e,t,n,r)}finally{Fe.transition=i,A=r}return null}function Th(e,t,n,r){do On();while(Et!==null);if(M&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(pp(e,o),e===se&&(b=se=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hi||(hi=!0,Nf(Ui,function(){return On(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Fe.transition,Fe.transition=null;var l=A;A=1;var s=M;M|=4,ca.current=null,Ph(e,n),wf(n,e),bp(Gl),Vi=!!Ql,Gl=Ql=null,e.current=n,zh(n),ip(),M=s,A=l,Fe.transition=o}else e.current=n;if(hi&&(hi=!1,Et=e,oo=i),o=e.pendingLanes,o===0&&(Lt=null),sp(n.stateNode),Ee(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(io)throw io=!1,e=fs,fs=null,e;return oo&1&&e.tag!==0&&On(),o=e.pendingLanes,o&1?e===ps?Cr++:(Cr=0,ps=e):Cr=0,At(),null}function On(){if(Et!==null){var e=id(oo),t=Fe.transition,n=A;try{if(Fe.transition=null,A=16>e?16:e,Et===null)var r=!1;else{if(e=Et,Et=null,oo=0,M&6)throw Error(E(331));var i=M;for(M|=4,N=e.current;N!==null;){var o=N,l=o.child;if(N.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(N=c;N!==null;){var m=N;switch(m.tag){case 0:case 11:case 15:Sr(8,m,o)}var h=m.child;if(h!==null)h.return=m,N=h;else for(;N!==null;){m=N;var g=m.sibling,v=m.return;if(vf(m),m===c){N=null;break}if(g!==null){g.return=v,N=g;break}N=v}}}var x=o.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}N=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,N=l;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Sr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,N=f;break e}N=o.return}}var d=e.current;for(N=d;N!==null;){l=N;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,N=p;else e:for(l=d;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Po(9,s)}}catch(k){Z(s,s.return,k)}if(s===l){N=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,N=y;break e}N=s.return}}if(M=i,At(),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(xo,e)}catch{}r=!0}return r}finally{A=n,Fe.transition=t}}return!1}function $u(e,t,n){t=Bn(n,t),t=lf(e,t,1),e=It(e,t,1),t=ve(),e!==null&&(Yr(e,1,t),Ee(e,t))}function Z(e,t,n){if(e.tag===3)$u(e,e,n);else for(;t!==null;){if(t.tag===3){$u(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Lt===null||!Lt.has(r))){e=Bn(n,e),e=sf(t,e,1),t=It(t,e,1),e=ve(),t!==null&&(Yr(t,1,e),Ee(t,e));break}}t=t.return}}function Oh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ue&n)===n&&(ne===4||ne===3&&(ue&130023424)===ue&&500>J()-fa?Jt(e,0):da|=n),Ee(e,t)}function Pf(e,t){t===0&&(e.mode&1?(t=ii,ii<<=1,!(ii&130023424)&&(ii=4194304)):t=1);var n=ve();e=ft(e,t),e!==null&&(Yr(e,t,n),Ee(e,n))}function $h(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pf(e,n)}function Fh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Pf(e,n)}var zf;zf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,Ch(e,t,n);Se=!!(e.flags&131072)}else Se=!1,G&&t.flags&1048576&&Id(t,Zi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ni(e,t),e=t.pendingProps;var i=Fn(t,he.current);Tn(t,n),i=oa(null,t,r,e,i,n);var o=la();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(o=!0,Ki(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ea(t),i.updater=jo,t.stateNode=i,i._reactInternals=t,ts(t,r,e,n),t=is(null,t,r,!0,o,n)):(t.tag=0,G&&o&&Ys(t),ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ni(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Dh(r),e=We(r,e),i){case 0:t=rs(null,t,r,e,n);break e;case 1:t=ju(null,t,r,e,n);break e;case 11:t=Cu(null,t,r,e,n);break e;case 14:t=Eu(null,t,r,We(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),rs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),ju(e,t,r,i,n);case 3:e:{if(df(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Od(e,t),bi(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Bn(Error(E(423)),t),t=_u(e,t,r,n,i);break e}else if(r!==i){i=Bn(Error(E(424)),t),t=_u(e,t,r,n,i);break e}else for(ze=Nt(t.stateNode.containerInfo.firstChild),Ne=t,G=!0,He=null,n=Dd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mn(),r===i){t=pt(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return Ad(t),e===null&&ql(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Yl(r,i)?l=null:o!==null&&Yl(r,o)&&(t.flags|=32),cf(e,t),ge(e,t,l,n),t.child;case 6:return e===null&&ql(t),null;case 13:return ff(e,t,n);case 4:return ta(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Dn(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),Cu(e,t,r,i,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,W(Ji,r._currentValue),r._currentValue=l,o!==null)if(Ke(o.value,l)){if(o.children===i.children&&!ke.current){t=pt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=ut(-1,n&-n),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?a.next=a:(a.next=m.next,m.next=a),c.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),bl(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(E(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),bl(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Tn(t,n),i=Me(i),r=r(i),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,i=We(r,t.pendingProps),i=We(r.type,i),Eu(e,t,r,i,n);case 15:return af(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),Ni(e,t),t.tag=1,Ce(r)?(e=!0,Ki(t)):e=!1,Tn(t,n),Fd(t,r,i),ts(t,r,i,n),is(null,t,r,!0,e,n);case 19:return pf(e,t,n);case 22:return uf(e,t,n)}throw Error(E(156,t.tag))};function Nf(e,t){return ed(e,t)}function Mh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,r){return new Mh(e,t,n,r)}function ga(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dh(e){if(typeof e=="function")return ga(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$s)return 11;if(e===Fs)return 14}return 2}function Tt(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ri(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")ga(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case vn:return qt(n.children,i,o,t);case Os:l=8,i|=8;break;case jl:return e=$e(12,n,t,i|2),e.elementType=jl,e.lanes=o,e;case _l:return e=$e(13,n,t,i),e.elementType=_l,e.lanes=o,e;case Pl:return e=$e(19,n,t,i),e.elementType=Pl,e.lanes=o,e;case Mc:return No(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $c:l=10;break e;case Fc:l=9;break e;case $s:l=11;break e;case Fs:l=14;break e;case xt:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=$e(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function qt(e,t,n,r){return e=$e(7,e,r,t),e.lanes=n,e}function No(e,t,n,r){return e=$e(22,e,r,t),e.elementType=Mc,e.lanes=n,e.stateNode={isHidden:!1},e}function gl(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function vl(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ah(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jo(0),this.expirationTimes=Jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function va(e,t,n,r,i,o,l,s,a){return e=new Ah(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=$e(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ea(o),e}function Bh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function If(e){if(!e)return Ft;e=e._reactInternals;e:{if(dn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Ce(n))return zd(e,n,t)}return t}function Lf(e,t,n,r,i,o,l,s,a){return e=va(n,r,!0,e,i,o,l,s,a),e.context=If(null),n=e.current,r=ve(),i=Rt(n),o=ut(r,i),o.callback=t??null,It(n,o,i),e.current.lanes=i,Yr(e,i,r),Ee(e,r),e}function Io(e,t,n,r){var i=t.current,o=ve(),l=Rt(i);return n=If(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=It(i,t,l),e!==null&&(Ge(e,i,l,o),_i(e,i,l)),l}function so(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ya(e,t){Fu(e,t),(e=e.alternate)&&Fu(e,t)}function Uh(){return null}var Rf=typeof reportError=="function"?reportError:function(e){console.error(e)};function xa(e){this._internalRoot=e}Lo.prototype.render=xa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Io(e,t,null,null)};Lo.prototype.unmount=xa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ln(function(){Io(null,e,null,null)}),t[dt]=null}};function Lo(e){this._internalRoot=e}Lo.prototype.unstable_scheduleHydration=function(e){if(e){var t=sd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<St.length&&t!==0&&t<St[n].priority;n++);St.splice(n,0,e),n===0&&ud(e)}};function wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mu(){}function Wh(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=so(l);o.call(c)}}var l=Lf(t,r,e,0,null,!1,!1,"",Mu);return e._reactRootContainer=l,e[dt]=l.current,Tr(e.nodeType===8?e.parentNode:e),ln(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=so(a);s.call(c)}}var a=va(e,0,!1,null,null,!1,!1,"",Mu);return e._reactRootContainer=a,e[dt]=a.current,Tr(e.nodeType===8?e.parentNode:e),ln(function(){Io(t,a,n,r)}),a}function To(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var a=so(l);s.call(a)}}Io(t,l,e,i)}else l=Wh(n,t,e,i,r);return so(l)}od=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fr(t.pendingLanes);n!==0&&(As(t,n|1),Ee(t,J()),!(M&6)&&(Un=J()+500,At()))}break;case 13:ln(function(){var r=ft(e,1);if(r!==null){var i=ve();Ge(r,e,1,i)}}),ya(e,1)}};Bs=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=ve();Ge(t,e,134217728,n)}ya(e,134217728)}};ld=function(e){if(e.tag===13){var t=Rt(e),n=ft(e,t);if(n!==null){var r=ve();Ge(n,e,t,r)}ya(e,t)}};sd=function(){return A};ad=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};Ml=function(e,t,n){switch(t){case"input":if(Il(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Co(r);if(!i)throw Error(E(90));Ac(r),Il(r,i)}}}break;case"textarea":Uc(e,n);break;case"select":t=n.value,t!=null&&Nn(e,!!n.multiple,t,!1)}};Kc=pa;Xc=ln;var Vh={usingClientEntryPoint:!1,Events:[Xr,Sn,Co,Gc,Yc,pa]},ar={findFiberByHostInstance:Yt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Hh={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qc(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||Uh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mi.isDisabled&&mi.supportsFiber)try{xo=mi.inject(Hh),be=mi}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vh;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wa(t))throw Error(E(200));return Bh(e,t,null,n)};Le.createRoot=function(e,t){if(!wa(e))throw Error(E(299));var n=!1,r="",i=Rf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=va(e,1,!1,null,null,n,!1,r,i),e[dt]=t.current,Tr(e.nodeType===8?e.parentNode:e),new xa(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=qc(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return ln(e)};Le.hydrate=function(e,t,n){if(!Ro(t))throw Error(E(200));return To(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!wa(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Rf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Lf(t,null,e,1,n??null,i,!1,o,l),e[dt]=t.current,Tr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Lo(t)};Le.render=function(e,t,n){if(!Ro(t))throw Error(E(200));return To(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!Ro(e))throw Error(E(40));return e._reactRootContainer?(ln(function(){To(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1};Le.unstable_batchedUpdates=pa;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ro(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return To(e,t,n,!1,r)};Le.version="18.2.0-next-9e3b772b8-20220608";function Tf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tf)}catch(e){console.error(e)}}Tf(),Ic.exports=Le;var Qh=Ic.exports,Du=Qh;Cl.createRoot=Du.createRoot,Cl.hydrateRoot=Du.hydrateRoot;/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wr(){return Wr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wr.apply(this,arguments)}var jt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(jt||(jt={}));const Au="popstate";function Gh(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:s}=r.location;return gs("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:$f(i)}return Kh(t,n,null,e)}function re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Of(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Yh(){return Math.random().toString(36).substr(2,8)}function Bu(e,t){return{usr:e.state,key:e.key,idx:t}}function gs(e,t,n,r){return n===void 0&&(n=null),Wr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Zn(t):t,{state:n,key:t&&t.key||r||Yh()})}function $f(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Zn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Kh(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=jt.Pop,a=null,c=m();c==null&&(c=0,l.replaceState(Wr({},l.state,{idx:c}),""));function m(){return(l.state||{idx:null}).idx}function h(){s=jt.Pop;let _=m(),f=_==null?null:_-c;c=_,a&&a({action:s,location:w.location,delta:f})}function g(_,f){s=jt.Push;let d=gs(w.location,_,f);n&&n(d,_),c=m()+1;let p=Bu(d,c),y=w.createHref(d);try{l.pushState(p,"",y)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(y)}o&&a&&a({action:s,location:w.location,delta:1})}function v(_,f){s=jt.Replace;let d=gs(w.location,_,f);n&&n(d,_),c=m();let p=Bu(d,c),y=w.createHref(d);l.replaceState(p,"",y),o&&a&&a({action:s,location:w.location,delta:0})}function x(_){let f=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof _=="string"?_:$f(_);return d=d.replace(/ $/,"%20"),re(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let w={get action(){return s},get location(){return e(i,l)},listen(_){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Au,h),a=_,()=>{i.removeEventListener(Au,h),a=null}},createHref(_){return t(i,_)},createURL:x,encodeLocation(_){let f=x(_);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:v,go(_){return l.go(_)}};return w}var Uu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Uu||(Uu={}));function Xh(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Zn(t):t,i=Df(r.pathname||"/",n);if(i==null)return null;let o=Ff(e);Zh(o);let l=null;for(let s=0;l==null&&s<o.length;++s){let a=a1(i);l=o1(o[s],a)}return l}function Ff(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let a={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};a.relativePath.startsWith("/")&&(re(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=bt([r,a.relativePath]),m=n.concat(a);o.children&&o.children.length>0&&(re(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ff(o.children,t,m,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:r1(c,o.index),routesMeta:m})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let a of Mf(o.path))i(o,l,a)}),t}function Mf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Mf(r.join("/")),s=[];return s.push(...l.map(a=>a===""?o:[o,a].join("/"))),i&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function Zh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:i1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Jh=/^:[\w-]+$/,qh=3,bh=2,e1=1,t1=10,n1=-2,Wu=e=>e==="*";function r1(e,t){let n=e.split("/"),r=n.length;return n.some(Wu)&&(r+=n1),t&&(r+=bh),n.filter(i=>!Wu(i)).reduce((i,o)=>i+(Jh.test(o)?qh:o===""?e1:t1),r)}function i1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function o1(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let s=n[l],a=l===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",m=l1({path:s.relativePath,caseSensitive:s.caseSensitive,end:a},c);if(!m)return null;Object.assign(r,m.params);let h=s.route;o.push({params:r,pathname:bt([i,m.pathname]),pathnameBase:h1(bt([i,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(i=bt([i,m.pathnameBase]))}return o}function l1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=s1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,m,h)=>{let{paramName:g,isOptional:v}=m;if(g==="*"){let w=s[h]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const x=s[h];return v&&!x?c[g]=void 0:c[g]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function s1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Of(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function a1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Of(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Df(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function u1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Zn(e):e;return{pathname:n?n.startsWith("/")?n:c1(n,t):t,search:m1(r),hash:g1(i)}}function c1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function yl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function d1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function f1(e,t){let n=d1(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function p1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Zn(e):(i=Wr({},e),re(!i.pathname||!i.pathname.includes("?"),yl("?","pathname","search",i)),re(!i.pathname||!i.pathname.includes("#"),yl("#","pathname","hash",i)),re(!i.search||!i.search.includes("#"),yl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(l==null)s=n;else{let h=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}s=h>=0?t[h]:"/"}let a=u1(i,s),c=l&&l!=="/"&&l.endsWith("/"),m=(o||l===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(c||m)&&(a.pathname+="/"),a}const bt=e=>e.join("/").replace(/\/\/+/g,"/"),h1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),m1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,g1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function v1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Af=["post","put","patch","delete"];new Set(Af);const y1=["get",...Af];new Set(y1);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vr(){return Vr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vr.apply(this,arguments)}const Sa=C.createContext(null),x1=C.createContext(null),Oo=C.createContext(null),$o=C.createContext(null),Jn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Bf=C.createContext(null);function Fo(){return C.useContext($o)!=null}function Uf(){return Fo()||re(!1),C.useContext($o).location}function Wf(e){C.useContext(Oo).static||C.useLayoutEffect(e)}function Mo(){let{isDataRoute:e}=C.useContext(Jn);return e?R1():w1()}function w1(){Fo()||re(!1);let e=C.useContext(Sa),{basename:t,future:n,navigator:r}=C.useContext(Oo),{matches:i}=C.useContext(Jn),{pathname:o}=Uf(),l=JSON.stringify(f1(i,n.v7_relativeSplatPath)),s=C.useRef(!1);return Wf(()=>{s.current=!0}),C.useCallback(function(c,m){if(m===void 0&&(m={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let h=p1(c,JSON.parse(l),o,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:bt([t,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[t,r,l,o,e])}function S1(e,t){return k1(e,t)}function k1(e,t,n,r){Fo()||re(!1);let{navigator:i}=C.useContext(Oo),{matches:o}=C.useContext(Jn),l=o[o.length-1],s=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let c=Uf(),m;if(t){var h;let _=typeof t=="string"?Zn(t):t;a==="/"||(h=_.pathname)!=null&&h.startsWith(a)||re(!1),m=_}else m=c;let g=m.pathname||"/",v=g;if(a!=="/"){let _=a.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(_.length).join("/")}let x=Xh(e,{pathname:v}),w=P1(x&&x.map(_=>Object.assign({},_,{params:Object.assign({},s,_.params),pathname:bt([a,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:bt([a,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),o,n,r);return t&&w?C.createElement($o.Provider,{value:{location:Vr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:jt.Pop}},w):w}function C1(){let e=L1(),t=v1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,null)}const E1=C.createElement(C1,null);class j1 extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(Jn.Provider,{value:this.props.routeContext},C.createElement(Bf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _1(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(Sa);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Jn.Provider,{value:t},r)}function P1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let m=l.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);m>=0||re(!1),l=l.slice(0,Math.min(l.length,m+1))}let a=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<l.length;m++){let h=l[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=m),h.route.id){let{loaderData:g,errors:v}=n,x=h.route.loader&&g[h.route.id]===void 0&&(!v||v[h.route.id]===void 0);if(h.route.lazy||x){a=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((m,h,g)=>{let v,x=!1,w=null,_=null;n&&(v=s&&h.route.id?s[h.route.id]:void 0,w=h.route.errorElement||E1,a&&(c<0&&g===0?(T1("route-fallback",!1),x=!0,_=null):c===g&&(x=!0,_=h.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,g+1)),d=()=>{let p;return v?p=w:x?p=_:h.route.Component?p=C.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=m,C.createElement(_1,{match:h,routeContext:{outlet:m,matches:f,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?C.createElement(j1,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var Vf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Vf||{}),ao=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ao||{});function z1(e){let t=C.useContext(Sa);return t||re(!1),t}function N1(e){let t=C.useContext(x1);return t||re(!1),t}function I1(e){let t=C.useContext(Jn);return t||re(!1),t}function Hf(e){let t=I1(),n=t.matches[t.matches.length-1];return n.route.id||re(!1),n.route.id}function L1(){var e;let t=C.useContext(Bf),n=N1(ao.UseRouteError),r=Hf(ao.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function R1(){let{router:e}=z1(Vf.UseNavigateStable),t=Hf(ao.UseNavigateStable),n=C.useRef(!1);return Wf(()=>{n.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Vr({fromRouteId:t},o)))},[e,t])}const Vu={};function T1(e,t,n){!t&&!Vu[e]&&(Vu[e]=!0)}function Gt(e){re(!1)}function O1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=jt.Pop,navigator:o,static:l=!1,future:s}=e;Fo()&&re(!1);let a=t.replace(/^\/*/,"/"),c=C.useMemo(()=>({basename:a,navigator:o,static:l,future:Vr({v7_relativeSplatPath:!1},s)}),[a,s,o,l]);typeof r=="string"&&(r=Zn(r));let{pathname:m="/",search:h="",hash:g="",state:v=null,key:x="default"}=r,w=C.useMemo(()=>{let _=Df(m,a);return _==null?null:{location:{pathname:_,search:h,hash:g,state:v,key:x},navigationType:i}},[a,m,h,g,v,x,i]);return w==null?null:C.createElement(Oo.Provider,{value:c},C.createElement($o.Provider,{children:n,value:w}))}function $1(e){let{children:t,location:n}=e;return S1(vs(t),n)}new Promise(()=>{});function vs(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,vs(r.props.children,o));return}r.type!==Gt&&re(!1),!r.props.index||!r.props.children||re(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=vs(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const F1="6";try{window.__reactRouterVersion=F1}catch{}const M1="startTransition",Hu=$0[M1];function D1(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=Gh({window:i,v5Compat:!0}));let l=o.current,[s,a]=C.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},m=C.useCallback(h=>{c&&Hu?Hu(()=>a(h)):a(h)},[a,c]);return C.useLayoutEffect(()=>l.listen(m),[l,m]),C.createElement(O1,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}var Qu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Qu||(Qu={}));var Gu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gu||(Gu={}));const A1="/assets/image1-DEVwO76v.svg",B1="/assets/image2-D3-QMNJW.svg",U1="/assets/image3-Dw7jqlw9.svg",W1="data:image/svg+xml,%3csvg%20width='66'%20height='66'%20viewBox='0%200%2066%2066'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='33'%20cy='33'%20r='30.5'%20transform='rotate(-180%2033%2033)'%20stroke='white'%20stroke-width='5'/%3e%3cpath%20d='M39.375%2022.2219V42.7039C39.3749%2043.0664%2039.2404%2043.4208%2038.9886%2043.7222C38.7368%2044.0237%2038.3789%2044.2586%2037.9602%2044.3973C37.5416%2044.536%2037.0809%2044.5723%2036.6364%2044.5016C36.1919%2044.4309%2035.7836%2044.2564%2035.4631%2044.0001L22.6619%2033.7591C22.2323%2033.4153%2021.9909%2032.949%2021.9909%2032.4629C21.9909%2031.9768%2022.2323%2031.5105%2022.6619%2031.1667L35.4631%2020.9257C35.7836%2020.6694%2036.1919%2020.4949%2036.6364%2020.4242C37.0809%2020.3535%2037.5416%2020.3898%2037.9602%2020.5285C38.3789%2020.6672%2038.7368%2020.9021%2038.9886%2021.2036C39.2404%2021.505%2039.3749%2021.8594%2039.375%2022.2219Z'%20fill='white'/%3e%3c/svg%3e",V1="data:image/svg+xml,%3csvg%20width='66'%20height='66'%20viewBox='0%200%2066%2066'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='33'%20cy='33'%20r='30.5'%20stroke='white'%20stroke-width='5'/%3e%3cpath%20d='M26.625%2043.7781V23.2961C26.6251%2022.9336%2026.7596%2022.5792%2027.0114%2022.2778C27.2632%2021.9763%2027.6211%2021.7414%2028.0397%2021.6027C28.4584%2021.464%2028.9191%2021.4277%2029.3636%2021.4984C29.8081%2021.5691%2030.2164%2021.7436%2030.5369%2021.9999L43.3381%2032.2409C43.7677%2032.5847%2044.0091%2033.051%2044.0091%2033.5371C44.0091%2034.0232%2043.7677%2034.4895%2043.3381%2034.8333L30.5369%2045.0743C30.2164%2045.3306%2029.8081%2045.5051%2029.3636%2045.5758C28.9191%2045.6465%2028.4584%2045.6102%2028.0397%2045.4715C27.6211%2045.3328%2027.2632%2045.0979%2027.0114%2044.7964C26.7596%2044.495%2026.6251%2044.1406%2026.625%2043.7781Z'%20fill='white'/%3e%3c/svg%3e";var le=function(){return le=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},le.apply(this,arguments)};function Wn(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var H="-ms-",Er="-moz-",D="-webkit-",Qf="comm",Do="rule",ka="decl",H1="@import",Gf="@keyframes",Q1="@layer",Yf=Math.abs,Ca=String.fromCharCode,ys=Object.assign;function G1(e,t){return oe(e,0)^45?(((t<<2^oe(e,0))<<2^oe(e,1))<<2^oe(e,2))<<2^oe(e,3):0}function Kf(e){return e.trim()}function it(e,t){return(e=t.exec(e))?e[0]:e}function $(e,t,n){return e.replace(t,n)}function Ti(e,t,n){return e.indexOf(t,n)}function oe(e,t){return e.charCodeAt(t)|0}function Vn(e,t,n){return e.slice(t,n)}function Je(e){return e.length}function Xf(e){return e.length}function hr(e,t){return t.push(e),e}function Y1(e,t){return e.map(t).join("")}function Yu(e,t){return e.filter(function(n){return!it(n,t)})}var Ao=1,Hn=1,Zf=0,Ae=0,q=0,qn="";function Bo(e,t,n,r,i,o,l,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ao,column:Hn,length:l,return:"",siblings:s}}function yt(e,t){return ys(Bo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function pn(e){for(;e.root;)e=yt(e.root,{children:[e]});hr(e,e.siblings)}function K1(){return q}function X1(){return q=Ae>0?oe(qn,--Ae):0,Hn--,q===10&&(Hn=1,Ao--),q}function Ye(){return q=Ae<Zf?oe(qn,Ae++):0,Hn++,q===10&&(Hn=1,Ao++),q}function en(){return oe(qn,Ae)}function Oi(){return Ae}function Uo(e,t){return Vn(qn,e,t)}function xs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Z1(e){return Ao=Hn=1,Zf=Je(qn=e),Ae=0,[]}function J1(e){return qn="",e}function xl(e){return Kf(Uo(Ae-1,ws(e===91?e+2:e===40?e+1:e)))}function q1(e){for(;(q=en())&&q<33;)Ye();return xs(e)>2||xs(q)>3?"":" "}function b1(e,t){for(;--t&&Ye()&&!(q<48||q>102||q>57&&q<65||q>70&&q<97););return Uo(e,Oi()+(t<6&&en()==32&&Ye()==32))}function ws(e){for(;Ye();)switch(q){case e:return Ae;case 34:case 39:e!==34&&e!==39&&ws(q);break;case 40:e===41&&ws(e);break;case 92:Ye();break}return Ae}function em(e,t){for(;Ye()&&e+q!==57;)if(e+q===84&&en()===47)break;return"/*"+Uo(t,Ae-1)+"*"+Ca(e===47?e:Ye())}function tm(e){for(;!xs(en());)Ye();return Uo(e,Ae)}function nm(e){return J1($i("",null,null,null,[""],e=Z1(e),0,[0],e))}function $i(e,t,n,r,i,o,l,s,a){for(var c=0,m=0,h=l,g=0,v=0,x=0,w=1,_=1,f=1,d=0,p="",y=i,k=o,j=r,S=p;_;)switch(x=d,d=Ye()){case 40:if(x!=108&&oe(S,h-1)==58){Ti(S+=$(xl(d),"&","&\f"),"&\f",Yf(c?s[c-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:S+=xl(d);break;case 9:case 10:case 13:case 32:S+=q1(x);break;case 92:S+=b1(Oi()-1,7);continue;case 47:switch(en()){case 42:case 47:hr(rm(em(Ye(),Oi()),t,n,a),a);break;default:S+="/"}break;case 123*w:s[c++]=Je(S)*f;case 125*w:case 59:case 0:switch(d){case 0:case 125:_=0;case 59+m:f==-1&&(S=$(S,/\f/g,"")),v>0&&Je(S)-h&&hr(v>32?Xu(S+";",r,n,h-1,a):Xu($(S," ","")+";",r,n,h-2,a),a);break;case 59:S+=";";default:if(hr(j=Ku(S,t,n,c,m,i,s,p,y=[],k=[],h,o),o),d===123)if(m===0)$i(S,t,j,j,y,o,h,s,k);else switch(g===99&&oe(S,3)===110?100:g){case 100:case 108:case 109:case 115:$i(e,j,j,r&&hr(Ku(e,j,j,0,0,i,s,p,i,y=[],h,k),k),i,k,h,s,r?y:k);break;default:$i(S,j,j,j,[""],k,0,s,k)}}c=m=v=0,w=f=1,p=S="",h=l;break;case 58:h=1+Je(S),v=x;default:if(w<1){if(d==123)--w;else if(d==125&&w++==0&&X1()==125)continue}switch(S+=Ca(d),d*w){case 38:f=m>0?1:(S+="\f",-1);break;case 44:s[c++]=(Je(S)-1)*f,f=1;break;case 64:en()===45&&(S+=xl(Ye())),g=en(),m=h=Je(p=S+=tm(Oi())),d++;break;case 45:x===45&&Je(S)==2&&(w=0)}}return o}function Ku(e,t,n,r,i,o,l,s,a,c,m,h){for(var g=i-1,v=i===0?o:[""],x=Xf(v),w=0,_=0,f=0;w<r;++w)for(var d=0,p=Vn(e,g+1,g=Yf(_=l[w])),y=e;d<x;++d)(y=Kf(_>0?v[d]+" "+p:$(p,/&\f/g,v[d])))&&(a[f++]=y);return Bo(e,t,n,i===0?Do:s,a,c,m,h)}function rm(e,t,n,r){return Bo(e,t,n,Qf,Ca(K1()),Vn(e,2,-2),0,r)}function Xu(e,t,n,r,i){return Bo(e,t,n,ka,Vn(e,0,r),Vn(e,r+1,-1),r,i)}function Jf(e,t,n){switch(G1(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 4789:return Er+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+Er+e+H+e+e;case 5936:switch(oe(e,t+11)){case 114:return D+e+H+$(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+H+$(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+H+$(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return D+e+H+e+e;case 6165:return D+e+H+"flex-"+e+e;case 5187:return D+e+$(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+H+"flex-$1$2")+e;case 5443:return D+e+H+"flex-item-"+$(e,/flex-|-self/g,"")+(it(e,/flex-|baseline/)?"":H+"grid-row-"+$(e,/flex-|-self/g,""))+e;case 4675:return D+e+H+"flex-line-pack"+$(e,/align-content|flex-|-self/g,"")+e;case 5548:return D+e+H+$(e,"shrink","negative")+e;case 5292:return D+e+H+$(e,"basis","preferred-size")+e;case 6060:return D+"box-"+$(e,"-grow","")+D+e+H+$(e,"grow","positive")+e;case 4554:return D+$(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return $($($(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return $(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return $($(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+H+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4200:if(!it(e,/flex-|baseline/))return H+"grid-column-align"+Vn(e,t)+e;break;case 2592:case 3360:return H+$(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,it(r.props,/grid-\w+-end/)})?~Ti(e+(n=n[t].value),"span",0)?e:H+$(e,"-start","")+e+H+"grid-row-span:"+(~Ti(n,"span",0)?it(n,/\d+/):+it(n,/\d+/)-+it(e,/\d+/))+";":H+$(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return it(r.props,/grid-\w+-start/)})?e:H+$($(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Je(e)-1-t>6)switch(oe(e,t+1)){case 109:if(oe(e,t+4)!==45)break;case 102:return $(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+Er+(oe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ti(e,"stretch",0)?Jf($(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return $(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,s,a,c){return H+i+":"+o+c+(l?H+i+"-span:"+(s?a:+a-+o)+c:"")+e});case 4949:if(oe(e,t+6)===121)return $(e,":",":"+D)+e;break;case 6444:switch(oe(e,oe(e,14)===45?18:11)){case 120:return $(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+D+(oe(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+H+"$2box$3")+e;case 100:return $(e,":",":"+H)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $(e,"scroll-","scroll-snap-")+e}return e}function uo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function im(e,t,n,r){switch(e.type){case Q1:if(e.children.length)break;case H1:case ka:return e.return=e.return||e.value;case Qf:return"";case Gf:return e.return=e.value+"{"+uo(e.children,r)+"}";case Do:if(!Je(e.value=e.props.join(",")))return""}return Je(n=uo(e.children,r))?e.return=e.value+"{"+n+"}":""}function om(e){var t=Xf(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function lm(e){return function(t){t.root||(t=t.return)&&e(t)}}function sm(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ka:e.return=Jf(e.value,e.length,n);return;case Gf:return uo([yt(e,{value:$(e.value,"@","@"+D)})],r);case Do:if(e.length)return Y1(n=e.props,function(i){switch(it(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":pn(yt(e,{props:[$(i,/:(read-\w+)/,":"+Er+"$1")]})),pn(yt(e,{props:[i]})),ys(e,{props:Yu(n,r)});break;case"::placeholder":pn(yt(e,{props:[$(i,/:(plac\w+)/,":"+D+"input-$1")]})),pn(yt(e,{props:[$(i,/:(plac\w+)/,":"+Er+"$1")]})),pn(yt(e,{props:[$(i,/:(plac\w+)/,H+"input-$1")]})),pn(yt(e,{props:[i]})),ys(e,{props:Yu(n,r)});break}return""})}}var am={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_e={},Qn=typeof process<"u"&&_e!==void 0&&(_e.REACT_APP_SC_ATTR||_e.SC_ATTR)||"data-styled",qf="active",bf="data-styled-version",Wo="6.1.13",Ea=`/*!sc*/
`,co=typeof window<"u"&&"HTMLElement"in window,um=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&_e!==void 0&&_e.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&_e.REACT_APP_SC_DISABLE_SPEEDY!==""?_e.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&_e.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&_e!==void 0&&_e.SC_DISABLE_SPEEDY!==void 0&&_e.SC_DISABLE_SPEEDY!==""&&_e.SC_DISABLE_SPEEDY!=="false"&&_e.SC_DISABLE_SPEEDY),cm={},Vo=Object.freeze([]),Gn=Object.freeze({});function e0(e,t,n){return n===void 0&&(n=Gn),e.theme!==n.theme&&e.theme||t||n.theme}var t0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),dm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,fm=/(^-|-$)/g;function Zu(e){return e.replace(dm,"-").replace(fm,"")}var pm=/(a)(d)/gi,gi=52,Ju=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ss(e){var t,n="";for(t=Math.abs(e);t>gi;t=t/gi|0)n=Ju(t%gi)+n;return(Ju(t%gi)+n).replace(pm,"$1-$2")}var wl,n0=5381,zn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},r0=function(e){return zn(n0,e)};function ja(e){return Ss(r0(e)>>>0)}function hm(e){return e.displayName||e.name||"Component"}function Sl(e){return typeof e=="string"&&!0}var i0=typeof Symbol=="function"&&Symbol.for,o0=i0?Symbol.for("react.memo"):60115,mm=i0?Symbol.for("react.forward_ref"):60112,gm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},vm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ym=((wl={})[mm]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wl[o0]=l0,wl);function qu(e){return("type"in(t=e)&&t.type.$$typeof)===o0?l0:"$$typeof"in e?ym[e.$$typeof]:gm;var t}var xm=Object.defineProperty,wm=Object.getOwnPropertyNames,bu=Object.getOwnPropertySymbols,Sm=Object.getOwnPropertyDescriptor,km=Object.getPrototypeOf,ec=Object.prototype;function s0(e,t,n){if(typeof t!="string"){if(ec){var r=km(t);r&&r!==ec&&s0(e,r,n)}var i=wm(t);bu&&(i=i.concat(bu(t)));for(var o=qu(e),l=qu(t),s=0;s<i.length;++s){var a=i[s];if(!(a in vm||n&&n[a]||l&&a in l||o&&a in o)){var c=Sm(t,a);try{xm(e,a,c)}catch{}}}}return e}function sn(e){return typeof e=="function"}function _a(e){return typeof e=="object"&&"styledComponentId"in e}function Zt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function fo(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Hr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ks(e,t,n){if(n===void 0&&(n=!1),!n&&!Hr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ks(e[r],t[r]);else if(Hr(t))for(var r in t)e[r]=ks(e[r],t[r]);return e}function Pa(e,t){Object.defineProperty(e,"toString",{value:t})}function an(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Cm=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw an(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(Ea);return n},e}(),Fi=new Map,po=new Map,Mi=1,vi=function(e){if(Fi.has(e))return Fi.get(e);for(;po.has(Mi);)Mi++;var t=Mi++;return Fi.set(e,t),po.set(t,e),t},Em=function(e,t){Mi=t+1,Fi.set(e,t),po.set(t,e)},jm="style[".concat(Qn,"][").concat(bf,'="').concat(Wo,'"]'),_m=new RegExp("^".concat(Qn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Pm=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},zm=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Ea),i=[],o=0,l=r.length;o<l;o++){var s=r[o].trim();if(s){var a=s.match(_m);if(a){var c=0|parseInt(a[1],10),m=a[2];c!==0&&(Em(m,c),Pm(e,m,a[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},tc=function(e){for(var t=document.querySelectorAll(jm),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Qn)!==qf&&(zm(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Nm(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var a0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var a=Array.from(s.querySelectorAll("style[".concat(Qn,"]")));return a[a.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Qn,qf),r.setAttribute(bf,Wo);var l=Nm();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},Im=function(){function e(t){this.element=a0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw an(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Lm=function(){function e(t){this.element=a0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Rm=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),nc=co,Tm={isServer:!co,useCSSOMInjection:!um},ho=function(){function e(t,n,r){t===void 0&&(t=Gn),n===void 0&&(n={});var i=this;this.options=le(le({},Tm),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&co&&nc&&(nc=!1,tc(this)),Pa(this,function(){return function(o){for(var l=o.getTag(),s=l.length,a="",c=function(h){var g=function(f){return po.get(f)}(h);if(g===void 0)return"continue";var v=o.names.get(g),x=l.getGroup(h);if(v===void 0||!v.size||x.length===0)return"continue";var w="".concat(Qn,".g").concat(h,'[id="').concat(g,'"]'),_="";v!==void 0&&v.forEach(function(f){f.length>0&&(_+="".concat(f,","))}),a+="".concat(x).concat(w,'{content:"').concat(_,'"}').concat(Ea)},m=0;m<s;m++)c(m);return a}(i)})}return e.registerId=function(t){return vi(t)},e.prototype.rehydrate=function(){!this.server&&co&&tc(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(le(le({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Rm(i):r?new Im(i):new Lm(i)}(this.options),new Cm(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(vi(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(vi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(vi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Om=/&/g,$m=/^\s*\/\/.*$/gm;function u0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=u0(n.children,t)),n})}function Fm(e){var t,n,r,i=e===void 0?Gn:e,o=i.options,l=o===void 0?Gn:o,s=i.plugins,a=s===void 0?Vo:s,c=function(g,v,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):g},m=a.slice();m.push(function(g){g.type===Do&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Om,n).replace(r,c))}),l.prefix&&m.push(sm),m.push(im);var h=function(g,v,x,w){v===void 0&&(v=""),x===void 0&&(x=""),w===void 0&&(w="&"),t=w,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var _=g.replace($m,""),f=nm(x||v?"".concat(x," ").concat(v," { ").concat(_," }"):_);l.namespace&&(f=u0(f,l.namespace));var d=[];return uo(f,om(m.concat(lm(function(p){return d.push(p)})))),d};return h.hash=a.length?a.reduce(function(g,v){return v.name||an(15),zn(g,v.name)},n0).toString():"",h}var Mm=new ho,Cs=Fm(),c0=ee.createContext({shouldForwardProp:void 0,styleSheet:Mm,stylis:Cs});c0.Consumer;ee.createContext(void 0);function Es(){return C.useContext(c0)}var d0=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Cs);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Pa(this,function(){throw an(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Cs),this.name+t.hash},e}(),Dm=function(e){return e>="A"&&e<="Z"};function rc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Dm(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var f0=function(e){return e==null||e===!1||e===""},p0=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!f0(o)&&(Array.isArray(o)&&o.isCss||sn(o)?r.push("".concat(rc(i),":"),o,";"):Hr(o)?r.push.apply(r,Wn(Wn(["".concat(i," {")],p0(o),!1),["}"],!1)):r.push("".concat(rc(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in am||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ot(e,t,n,r){if(f0(e))return[];if(_a(e))return[".".concat(e.styledComponentId)];if(sn(e)){if(!sn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Ot(i,t,n,r)}var o;return e instanceof d0?n?(e.inject(n,r),[e.getName(r)]):[e]:Hr(e)?p0(e):Array.isArray(e)?Array.prototype.concat.apply(Vo,e.map(function(l){return Ot(l,t,n,r)})):[e.toString()]}function h0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(sn(n)&&!_a(n))return!1}return!0}var Am=r0(Wo),Bm=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&h0(t),this.componentId=n,this.baseHash=zn(Am,n),this.baseStyle=r,ho.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Zt(i,this.staticRulesId);else{var o=fo(Ot(this.rules,t,n,r)),l=Ss(zn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}i=Zt(i,l),this.staticRulesId=l}else{for(var a=zn(this.baseHash,r.hash),c="",m=0;m<this.rules.length;m++){var h=this.rules[m];if(typeof h=="string")c+=h;else if(h){var g=fo(Ot(h,t,n,r));a=zn(a,g+m),c+=g}}if(c){var v=Ss(a>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(c,".".concat(v),void 0,this.componentId)),i=Zt(i,v)}}return i},e}(),Qr=ee.createContext(void 0);Qr.Consumer;function Um(e){var t=ee.useContext(Qr),n=C.useMemo(function(){return function(r,i){if(!r)throw an(14);if(sn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw an(8);return i?le(le({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?ee.createElement(Qr.Provider,{value:n},e.children):null}var kl={};function Wm(e,t,n){var r=_a(e),i=e,o=!Sl(e),l=t.attrs,s=l===void 0?Vo:l,a=t.componentId,c=a===void 0?function(y,k){var j=typeof y!="string"?"sc":Zu(y);kl[j]=(kl[j]||0)+1;var S="".concat(j,"-").concat(ja(Wo+j+kl[j]));return k?"".concat(k,"-").concat(S):S}(t.displayName,t.parentComponentId):a,m=t.displayName,h=m===void 0?function(y){return Sl(y)?"styled.".concat(y):"Styled(".concat(hm(y),")")}(e):m,g=t.displayName&&t.componentId?"".concat(Zu(t.displayName),"-").concat(t.componentId):t.componentId||c,v=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;x=function(y,k){return w(y,k)&&_(y,k)}}else x=w}var f=new Bm(n,g,r?i.componentStyle:void 0);function d(y,k){return function(j,S,I){var T=j.attrs,R=j.componentStyle,me=j.defaultProps,tt=j.foldedComponentIds,Bt=j.styledComponentId,Jr=j.target,Ho=ee.useContext(Qr),bn=Es(),Ut=j.shouldForwardProp||bn.shouldForwardProp,z=e0(S,Ho,me)||Gn,L=function(mt,je,nt){for(var er,Vt=le(le({},je),{className:void 0,theme:nt}),Qo=0;Qo<mt.length;Qo+=1){var qr=sn(er=mt[Qo])?er(Vt):er;for(var gt in qr)Vt[gt]=gt==="className"?Zt(Vt[gt],qr[gt]):gt==="style"?le(le({},Vt[gt]),qr[gt]):qr[gt]}return je.className&&(Vt.className=Zt(Vt.className,je.className)),Vt}(T,S,z),O=L.as||Jr,B={};for(var U in L)L[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&L.theme===z||(U==="forwardedAs"?B.as=L.forwardedAs:Ut&&!Ut(U,O)||(B[U]=L[U]));var Wt=function(mt,je){var nt=Es(),er=mt.generateAndInjectStyles(je,nt.styleSheet,nt.stylis);return er}(R,L),Be=Zt(tt,Bt);return Wt&&(Be+=" "+Wt),L.className&&(Be+=" "+L.className),B[Sl(O)&&!t0.has(O)?"class":"className"]=Be,B.ref=I,C.createElement(O,B)}(p,y,k)}d.displayName=h;var p=ee.forwardRef(d);return p.attrs=v,p.componentStyle=f,p.displayName=h,p.shouldForwardProp=x,p.foldedComponentIds=r?Zt(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=g,p.target=r?i.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(k){for(var j=[],S=1;S<arguments.length;S++)j[S-1]=arguments[S];for(var I=0,T=j;I<T.length;I++)ks(k,T[I],!0);return k}({},i.defaultProps,y):y}}),Pa(p,function(){return".".concat(p.styledComponentId)}),o&&s0(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function ic(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var oc=function(e){return Object.assign(e,{isCss:!0})};function un(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(sn(e)||Hr(e))return oc(Ot(ic(Vo,Wn([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Ot(r):oc(Ot(ic(r,t)))}function js(e,t,n){if(n===void 0&&(n=Gn),!t)throw an(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,un.apply(void 0,Wn([i],o,!1)))};return r.attrs=function(i){return js(e,t,le(le({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return js(e,t,le(le({},n),i))},r}var m0=function(e){return js(Wm,e)},P=m0;t0.forEach(function(e){P[e]=m0(e)});var Vm=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=h0(t),ho.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(fo(Ot(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&ho.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Hm(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=un.apply(void 0,Wn([e],t,!1)),i="sc-global-".concat(ja(JSON.stringify(r))),o=new Vm(r,i),l=function(a){var c=Es(),m=ee.useContext(Qr),h=ee.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&s(h,a,c.styleSheet,m,c.stylis),ee.useLayoutEffect(function(){if(!c.styleSheet.server)return s(h,a,c.styleSheet,m,c.stylis),function(){return o.removeStyles(h,c.styleSheet)}},[h,a,c.styleSheet,m,c.stylis]),null};function s(a,c,m,h,g){if(o.isStatic)o.renderStyles(a,cm,m,g);else{var v=le(le({},c),{theme:e0(c,h,l.defaultProps)});o.renderStyles(a,v,m,g)}}return ee.memo(l)}function za(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=fo(un.apply(void 0,Wn([e],t,!1))),i=ja(r);return new d0(i,r)}const Qm=P.div`
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
`,Gm=P.div`
  display: flex;
  width: ${e=>e.count*100}%;  
  transform: translateX(-${e=>e.currentIndex*100}%); 
  transition: transform 0.5s ease-in-out;
`,Ym=P.img`
  flex-shrink: 0;  
  width: 100%;  
  height: 90vh;
  object-fit: cover;
`,Km=P.div`
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
  animation: ${e=>e.isVisible?lc:"none"} 0.4s ease-in-out;
  font-size: 1rem;
  color: #222;

  @media (max-width: 500px) {
    display: ${e=>e.isVisible?"block":"none"};
    animation: ${e=>e.isVisible?lc:"none"} 0.4s ease-in-out;
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
`,lc=za`
  from { opacity: 0; }
  to { opacity: 1; }
`,lt="/assets/Genie1-CXjr3A2B.svg",_s="/assets/Genie2-nNzlRH3h.svg",Xm=za`
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
  animation: ${e=>e.isDisappearing?un`${Xm} 0.5s forwards`:"none"};
`;const Zm=()=>{const[e,t]=C.useState(null),[n,r]=C.useState(0),[i,o]=C.useState(!1),l=[A1,B1,U1],[s,a]=C.useState(!0),[c,m]=C.useState(!1),[h,g]=C.useState(lt),[v,x]=C.useState(!1),[w,_]=C.useState(!1),[f,d]=C.useState(null),p=Mo(),y=T=>{t(T)},k=(T,R)=>{f===T?p(R):d(T)};C.useEffect(()=>{if(f!==null){const T=setTimeout(()=>{d(null)},4e3);return()=>clearTimeout(T)}},[f]);const j=()=>{t(null)};C.useEffect(()=>{const T=setTimeout(()=>{m(!0)},1e3),R=setInterval(()=>{g(tt=>tt===lt?_s:lt)},600),me=setTimeout(()=>{_(!0),setTimeout(()=>{a(!1)},1e3),clearInterval(R)},3e3);return()=>{clearTimeout(T),clearTimeout(me),clearInterval(R)}},[]);const S=()=>{const R=n===0?l.length-1:n-1;r(R)},I=()=>{const R=n===l.length-1?0:n+1;r(R)};return C.useEffect(()=>{if(window.innerWidth<=500){const T=setInterval(()=>{I()},3e3);return()=>{clearInterval(T)}}},[n]),u.jsx(u.Fragment,{children:u.jsxs(Qm,{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[u.jsx("img",{src:W1,alt:"Previous",onClick:S,onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),style:{cursor:"pointer",position:"absolute",top:"50%",left:"2.5vw",zIndex:1e3,transform:`translateY(-50%) scale(${v?1.1:1})`,opacity:i?.4:0,transition:"opacity 1s ease-in-out, transform 0.3s ease-in-out",transitionDelay:i?"0.1s":"0s",display:window.innerWidth<=500?"none":"block"}}),u.jsx("img",{src:V1,alt:"Next",onClick:I,onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),style:{cursor:"pointer",position:"absolute",top:"50%",right:"2.5vw",zIndex:1e3,transform:`translateY(-50%) scale(${v?1.1:1})`,opacity:i?.4:0,transition:"opacity 1s ease-in-out, transform 0.3s ease-in-out",transitionDelay:i?"0.1s":"0s",display:window.innerWidth<=500?"none":"block"}}),u.jsx(Gm,{currentIndex:n,count:l.length,children:l.map((T,R)=>u.jsx(Ym,{src:T,alt:`Slide ${R}`,style:{borderBottomLeftRadius:"20vw"}},R))}),u.jsxs(Km,{children:[u.jsx("div",{style:{width:"100%"},children:u.jsxs(ur,{onClick:()=>k(0,"/concept"),style:{backgroundColor:"#F1F5F9"},isHovered:e===0||f===0,onMouseEnter:()=>y(0),onMouseLeave:j,isClicked:f===0,children:[u.jsx(hn,{children:"양자 개념"}),u.jsxs(mn,{onClick:T=>p("/concept"),isVisible:e===0,children:["양자란 무엇일까요? 쉽게 알아봅시다!!",u.jsx("p",{})]})]})}),u.jsx("div",{style:{width:"100%"},children:u.jsxs(ur,{onClick:()=>k(1,"/description"),style:{backgroundColor:"#D0E7FE"},isHovered:e===1||f===1,onMouseEnter:()=>y(1),onMouseLeave:j,isClicked:f===1,children:[u.jsx(hn,{children:"활용 분야"}),u.jsxs(mn,{onClick:T=>p("/description"),isVisible:e===1,children:["양자 컴퓨터, 양자 암호 통신 등 양자 기술이 활용되고 있는 분야에 대해 알아봅시다.",u.jsx("p",{})]})]})}),u.jsx("div",{style:{width:"100%"},children:u.jsxs(ur,{onClick:()=>k(2,"/"),style:{backgroundColor:"#A5D2FF"},isHovered:e===2||f===2,onMouseEnter:()=>y(2),onMouseLeave:j,isClicked:f===2,children:[u.jsx(hn,{children:"최근 동향"}),u.jsxs(mn,{onClick:T=>p("/"),isVisible:e===2,children:["양자 기술의 최근 동향에 대해 알아봅시다.",u.jsx("p",{})]})]})}),u.jsx("div",{style:{width:"100%"},children:u.jsxs(ur,{onClick:()=>k(3,"/"),style:{backgroundColor:"#7EAFE0"},isHovered:e===3||f===3,onMouseEnter:()=>y(3),onMouseLeave:j,isClicked:f===3,children:[u.jsx(hn,{children:"주요 기업"}),u.jsxs(mn,{onClick:T=>p("/"),isVisible:e===3,children:["양자 기술의 발전을 이끌고 있는 국내, 해외 주요 기업들을 모아봤어요.",u.jsx("p",{})]})]})}),u.jsx("div",{style:{width:"100%"},children:u.jsxs(ur,{onClick:()=>k(4,"/quiz"),style:{backgroundColor:"#E2E0FF"},isHovered:e===4||f===4,onMouseEnter:()=>y(4),onMouseLeave:j,isClicked:f===4,children:[u.jsx(hn,{children:"양자 퀴즈"}),u.jsxs(mn,{onClick:T=>p("/quiz"),isVisible:e===4,children:["간단한 양자 개념을 확인하는 Quiz Quiz!!",u.jsx("p",{})]})]})})]})]})})};function Jm(){return u.jsx(u.Fragment,{children:u.jsx(Zm,{})})}var g0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},sc=ee.createContext&&ee.createContext(g0),qm=["attr","size","title"];function bm(e,t){if(e==null)return{};var n=eg(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function eg(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function mo(){return mo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mo.apply(this,arguments)}function ac(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function go(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ac(Object(n),!0).forEach(function(r){tg(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ac(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tg(e,t,n){return t=ng(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ng(e){var t=rg(e,"string");return typeof t=="symbol"?t:t+""}function rg(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function v0(e){return e&&e.map((t,n)=>ee.createElement(t.tag,go({key:n},t.attr),v0(t.child)))}function Na(e){return t=>ee.createElement(ig,mo({attr:go({},e.attr)},t),v0(e.child))}function ig(e){var t=n=>{var{attr:r,size:i,title:o}=e,l=bm(e,qm),s=i||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),ee.createElement("svg",mo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:a,style:go(go({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&ee.createElement("title",null,o),e.children)};return sc!==void 0?ee.createElement(sc.Consumer,null,n=>t(n)):t(g0)}function og(e){return Na({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function lg(e){return Na({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function vo(e){return Na({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}const sg=P.div`
  font-size: 3.8rem;
  font-weight: bold;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`,ag=P.img`
  max-width: 40%;
  width: 40%;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`,ug=P.div`
  font-size: 3rem;
  cursor: pointer;
`,cg=P(ug)`
  font-size: 3rem;
  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`,yi=P.div`
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
`,dg=P.nav`
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
`,fg=P.div`
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
`,uc=P.div`
  font-size: 3.4rem;
  cursor: pointer;
  @media (max-width: 700px) {
    padding-right: -10px;
    font-size: 2.5rem;
  }
`,cc="/assets/Genie-Biwo8QOg.svg";function pg(){const[e,t]=C.useState(!1),[n,r]=C.useState(!1),i=Mo();C.useEffect(()=>{const l=()=>{window.scrollY>0?t(!0):t(!1)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[]);const o=()=>{r(!n)};return u.jsxs(u.Fragment,{children:[u.jsxs(dg,{isScrolled:e,style:{paddingLeft:"5%",paddingRight:"6%"},children:[u.jsxs("div",{onClick:()=>i("/"),style:{cursor:"pointer",maxWidth:"100%",marginRight:"0px",display:"flex",flexDirection:"row",gap:"10%",alignItems:"center",justifyContent:"space-between"},children:[u.jsx(ag,{src:cc,alt:"Logo"}),u.jsx(sg,{children:"Jenie"})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"25px",alignItems:"center",justifyContent:"flex-end"},children:[u.jsx(cg,{children:u.jsx(lg,{})}),u.jsx(uc,{onClick:o,children:n?u.jsx(vo,{}):u.jsx(og,{})})]})]}),n&&u.jsxs(fg,{children:[u.jsxs("div",{style:{marginBottom:"4%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[u.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",fontSize:"1.7rem",gap:"5%"},children:[u.jsx("img",{src:cc}),u.jsx("h1",{children:"Menu List"})]}),u.jsx(uc,{onClick:o,style:{fontSize:"3rem",marginTop:"0.5vw"},children:u.jsx(vo,{})})]}),u.jsx(yi,{onClick:()=>{i("/concept"),r(!1)},children:"양자 개념"}),u.jsx(yi,{onClick:()=>{i("/description"),r(!1)},children:"양자 활용"}),u.jsx(yi,{onClick:()=>{i("/quiz"),r(!1)},children:"양자 퀴즈"}),u.jsx(yi,{onClick:()=>{i("/character"),r(!1)},children:"캐릭터 소개"})]})]})}const hg=P.footer`
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
`,mg=P.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 85%;
  margin-left: 7.5%;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`,gg=P.div`
  display: flex;
  flex-direction: column;
`,vg=P.div`
  display: flex;
  align-items: center;
  margin-bottom: 5%;

  h1 {
    font-size: 1.5rem;
    color: #fff;
  }
`,yg=P.img`
  max-width: 150px;
  margin-bottom: 5.5%;
  cursor: pointer;
`,xg=P.div`
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
`,wg=P.div`
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
`,Sg=P.div`
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
    
`,dc=P.div`
  display: flex;
  align-items: center;

  white-space: nowrap;
  span {
    font-size: 1.1rem;
    margin-left: 10px;
    margin-right: 20px;
  }
`,fc=P.div`
  background-color: #000;
  border-radius: 100%;
  align-items: center;
  text-align: center;
  p{
    font-size: 2rem;
    text-align: center;
  }
`,pc=P.div`
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
`,kg=P.div`
  text-align: center;
  margin-top: 2%;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 3%;

  p {
    font-size: 1rem;
    opacity: 0.8;
  }
`,hc=P.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5%;
`,mc="data:image/svg+xml,%3csvg%20width='43'%20height='43'%20viewBox='0%200%2043%2043'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cellipse%20cx='21'%20cy='22.5'%20rx='18'%20ry='19.5'%20fill='white'/%3e%3cg%20clip-path='url(%23clip0_0_1)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21.1676%201.05875C16.172%201.06134%2011.3402%202.83067%207.53623%206.05038C3.73223%209.27008%201.20408%2013.7302%200.403813%2018.6332C-0.396452%2023.5362%200.583349%2028.5624%203.16804%2032.813C5.75273%2037.0637%209.77375%2040.2616%2014.5121%2041.8349C15.5575%2042.0289%2015.9512%2041.381%2015.9512%2040.8301C15.9512%2040.2792%2015.9303%2038.682%2015.9233%2036.9358C10.0693%2038.2004%208.83233%2034.4655%208.83233%2034.4655C7.87757%2032.0402%206.49769%2031.4027%206.49769%2031.4027C4.58817%2030.1069%206.64057%2030.1311%206.64057%2030.1311C8.75568%2030.2801%209.86725%2032.2896%209.86725%2032.2896C11.7419%2035.4875%2014.7909%2034.5625%2015.9895%2034.022C16.1777%2032.6673%2016.7248%2031.7457%2017.3276%2031.2225C12.6514%2030.6959%207.73819%2028.9011%207.73819%2020.8838C7.7092%2018.8045%208.48519%2016.7938%209.90557%2015.2675C9.68953%2014.7409%208.96822%2012.6135%2010.1111%209.72398C10.1111%209.72398%2011.8778%209.1627%2015.899%2011.8686C19.348%2010.9308%2022.9871%2010.9308%2026.4362%2011.8686C30.4538%209.1627%2032.217%209.72398%2032.217%209.72398C33.3634%2012.6066%2032.6421%2014.7339%2032.4261%2015.2675C33.8509%2016.794%2034.6286%2018.8083%2034.5969%2020.8907C34.5969%2028.9254%2029.6733%2030.6959%2024.9901%2031.2121C25.7427%2031.8635%2026.4153%2033.135%2026.4153%2035.0891C26.4153%2037.8886%2026.3909%2040.1406%2026.3909%2040.8301C26.3909%2041.3879%2026.7707%2042.0393%2027.8369%2041.8349C32.5759%2040.2614%2036.5973%2037.0629%2039.1819%2032.8116C41.7666%2028.5602%2042.7458%2023.5333%2041.9447%2018.6298C41.1435%2013.7263%2038.6141%209.26616%2034.8088%206.04701C31.0036%202.82787%2026.1707%201.0597%2021.1745%201.05875H21.1676Z'%20fill='%23191717'/%3e%3cpath%20d='M8.09314%2031.1012C8.04784%2031.2052%207.88058%2031.2363%207.74469%2031.1636C7.60879%2031.0908%207.50775%2030.9557%207.55653%2030.8483C7.60531%2030.7409%207.76909%2030.7132%207.90498%2030.7859C8.04088%2030.8587%208.14541%2030.9973%208.09314%2031.1012Z'%20fill='%23191717'/%3e%3cpath%20d='M8.9469%2032.0471C8.87474%2032.0832%208.79218%2032.0933%208.71336%2032.0756C8.63454%2032.0579%208.56436%2032.0135%208.51482%2031.9501C8.37892%2031.8045%208.35103%2031.6036%208.45557%2031.5135C8.5601%2031.4234%208.74828%2031.465%208.88418%2031.6105C9.02008%2031.756%209.05143%2031.957%208.9469%2032.0471Z'%20fill='%23191717'/%3e%3cpath%20d='M9.77616%2033.2493C9.64723%2033.3394%209.42769%2033.2493%209.30573%2033.0691C9.27201%2033.0368%209.24519%2032.9981%209.22687%2032.9552C9.20855%2032.9124%209.1991%2032.8663%209.1991%2032.8197C9.1991%2032.7731%209.20855%2032.727%209.22687%2032.6842C9.24519%2032.6413%209.27201%2032.6026%209.30573%2032.5702C9.43466%2032.4836%209.6542%2032.5702%209.77616%2032.7469C9.89812%2032.9236%209.9016%2033.1592%209.77616%2033.2493V33.2493Z'%20fill='%23191717'/%3e%3cpath%20d='M10.9017%2034.4135C10.7867%2034.5417%2010.5533%2034.507%2010.3616%2034.3338C10.17%2034.1606%2010.1247%2033.925%2010.2396%2033.8002C10.3546%2033.6755%2010.5881%2033.7101%2010.7867%2033.8799C10.9853%2034.0497%2011.0237%2034.2887%2010.9017%2034.4135V34.4135Z'%20fill='%23191717'/%3e%3cpath%20d='M12.4801%2035.0925C12.4279%2035.2554%2012.1909%2035.3281%2011.954%2035.2588C11.717%2035.1895%2011.5602%2034.9955%2011.6055%2034.8292C11.6508%2034.6629%2011.8912%2034.5867%2012.1317%2034.6629C12.3721%2034.7391%2012.5254%2034.9228%2012.4801%2035.0925Z'%20fill='%23191717'/%3e%3cpath%20d='M14.2017%2035.2103C14.2017%2035.3801%2014.0066%2035.5256%2013.7557%2035.5291C13.5048%2035.5326%2013.2992%2035.394%2013.2992%2035.2242C13.2992%2035.0544%2013.4943%2034.9089%2013.7452%2034.9054C13.9961%2034.902%2014.2017%2035.0371%2014.2017%2035.2103Z'%20fill='%23191717'/%3e%3cpath%20d='M15.8043%2034.9436C15.8357%2035.1134%2015.6615%2035.2901%2015.4106%2035.3316C15.1597%2035.3732%2014.9402%2035.2727%2014.9088%2035.1064C14.8774%2034.9401%2015.0586%2034.76%2015.3026%2034.7149C15.5465%2034.6699%2015.773%2034.7738%2015.8043%2034.9436Z'%20fill='%23191717'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_0_1'%3e%3crect%20width='42.35'%20height='42.35'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",gc="data:image/svg+xml,%3csvg%20width='43'%20height='43'%20viewBox='0%200%2043%2043'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='21.175'%20cy='21.175'%20r='21.175'%20fill='white'/%3e%3cpath%20d='M9.77273%2030.7548H13.9091V20.7093L8%2016.2775V28.982C8%2029.9615%208.7933%2030.7548%209.77273%2030.7548Z'%20fill='%234285F4'/%3e%3cpath%20d='M28.0909%2030.7548H32.2272C33.2067%2030.7548%2034%2029.9615%2034%2028.982V16.2775L28.0909%2020.7093V30.7548Z'%20fill='%2334A853'/%3e%3cpath%20d='M28.0909%2013.0275V20.7093L34%2016.2775V13.9139C34%2011.7231%2031.4989%2010.4718%2029.7454%2011.7866L28.0909%2013.0275Z'%20fill='%23FBBC04'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.9091%2020.7093V13.0275L21%2018.3457L28.0909%2013.0275V20.7093L21%2026.0275L13.9091%2020.7093Z'%20fill='%23EA4335'/%3e%3cpath%20d='M8%2013.9139V16.2775L13.9091%2020.7093V13.0275L12.2545%2011.7866C10.501%2010.4718%208%2011.7231%208%2013.9139Z'%20fill='%23C5221F'/%3e%3c/svg%3e",Cg="/assets/Jininfra-Bh2CRpDw.svg",Eg=()=>u.jsxs(hg,{children:[u.jsxs(mg,{children:[u.jsxs(gg,{children:[u.jsx(yg,{onClick:()=>window.location.href="https://jininfra.com/",src:Cg,alt:"Footer Logo"}),u.jsx(vg,{children:u.jsx("h1",{children:"주식회사 진인프라"})}),u.jsxs(xg,{children:[u.jsxs(hc,{style:{marginBottom:"2%"},children:[u.jsx("p",{children:"Email"}),u.jsx("a",{href:"mailto:jininfra@jininfra.com",children:"jininfra@jininfra.com"})]}),u.jsxs(hc,{children:[u.jsx("p",{children:"Call"}),u.jsx("a",{href:"tel:02-330-3900",children:"02-330-3900"})]}),u.jsx("h3",{style:{marginTop:"3%"},children:"서울센터 | 서울시 송파구 가락로16길3-20 진인프라빌딩"})]})]}),u.jsxs(wg,{children:[u.jsx("h2",{children:"Contact Us"}),u.jsxs(Sg,{children:[u.jsx("hr",{style:{borderColor:"rgba(255, 255, 255, 0.2)"}}),u.jsx("h3",{style:{marginTop:"6%",marginBottom:"6%"},children:"Frontend Developer"})]}),u.jsxs(dc,{children:[u.jsx(fc,{children:u.jsx("p",{children:"👤"})}),u.jsx("span",{children:"YeEun Shin"}),u.jsxs(pc,{children:[u.jsx("a",{href:"https://github.com/yengeun",children:u.jsx("img",{src:mc,alt:"Github"})}),u.jsx("a",{href:"mailto:7613ez@gmail.com",children:u.jsx("img",{src:gc,alt:"Gmail"})})]})]}),u.jsxs(dc,{children:[u.jsx(fc,{children:u.jsx("p",{children:"👤"})}),u.jsx("span",{children:"Soeun Yoon"}),u.jsxs(pc,{children:[u.jsx("a",{href:"https://github.com/Dubabbi",children:u.jsx("img",{src:mc,alt:"Github"})}),u.jsx("a",{href:"mailto:thdms3160@naver.com",children:u.jsx("img",{src:gc,alt:"Gmail"})})]})]})]})]}),u.jsx(kg,{children:u.jsx("p",{style:{textAlign:"left",marginLeft:"7.5%"},children:"© 2024 Jenie. All rights reserved."})})]}),vc="/assets/cat-BS25M1Xq.svg",jg="data:image/svg+xml,%3csvg%20width='108'%20height='125'%20viewBox='0%200%20108%20125'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M108%2025V37.5C101.382%2037.5%2096%2043.1063%2096%2050V100C96%20113.788%2085.236%20125%2072%20125H18V50V43.75H6L0%2031.25L10.044%2017.475L10.056%2017.5063C12.144%2015.1688%2014.88%2013.475%2018%2012.8125V0C18%200%2042%206.25%2042%2025C42%2029.25%2042.054%2042.1688%2042.09%2050H48C61.254%2050%2072%2061.1938%2072%2075V112.5C78.618%20112.5%2084%20106.894%2084%20100V50C84%2036.2125%2094.764%2025%20108%2025Z'%20fill='%23BDBDBD'/%3e%3c/svg%3e",_g="/assets/bunker-DmWmHJL1.svg",yc="/assets/bottle1-DBXIxYhJ.svg",Pg="/assets/bottle2-m7aWZStB.svg",zg=P.div`
    height: 250vh;
    max-height: 250vh;
    margin-top: -5%;
    margin-bottom: -20%;
    padding-top: 5%;
    background-color: #eee;
    @media(max-width: 600px){
      height: 110vh;
      max-height: 110vh; 
    }
`,Ng=P.div`
    height: 320vh;
    max-height: 320vh;
    margin-top: -5%;
    margin-bottom: -20%;
    padding-top: 5%;
    background-color: #eee;
    @media(max-width: 600px){
      height: 250vh;
      max-height: 250vh; 
    }
`,Ig=P.div`
  max-width: 100%;
  margin-top: 10%;
  border-radius: 0.7vw;
  position: relative;
  margin-bottom: 30%;
   p{
    font-size: 2rem;
    margin-top: 2%;
   }
   h1{
    margin-left: 5%;
    font-size: 2.2rem;
      @media(max-width: 900px){
        margin-top: 15%;
        font-size: 1.9rem;
      }
      @media(max-width: 900px){
        margin-top: 18%;
      }
   }
`,Lg=P.div`
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
    font-size: 1.5rem;
    line-height: 1.8;
    border-top: 1px solid #007bff;
    h1{
      font-size: 1.7rem;
       @media (max-width: 900px) {
          font-size: 1.2rem;
       }
    }
    p{
       @media (max-width: 900px) {
          font-size: 1rem;
          margin-bottom: 1%;
       }
    }
    a{
      color: #007bff;
      font-size: 1.7rem;
      padding-left: 5%;
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
  height: 90vh;  /* 모달 자체 높이를 90vh로 설정 */
  position: relative;
  overflow-y: auto; /* 스크롤을 허용하여 내용이 다 보이도록 설정 */
  max-height: 90vh; /* 모달의 최대 높이를 90vh로 설정 */

  button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;const Rg=P.button`
padding: 10px 20px;
margin: 20px auto; 
font-size: 1rem;
display: block; 
cursor: pointer;
background-color: #007bff; !important;
color: white;
border: none;
border-radius: 5px;
text-align: center;

&:hover {
  background-color: #0056b3; !important;
}
`;P.div`
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
      font-size: 1.5rem;
  }
  @media(max-width: 900px){
    h2{
      font-size: 1.2rem;
      margin-bottom: 2%;
    }
    p {
      font-size: 1rem;
      margin: 10px 0;
    }
  }
`;P.p`
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;P.div`
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
`;P.div`
  position: relative;
  background: white;
  padding: 5%;
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
    font-size: 1.5rem;
    margin-bottom:2%;
  }
  p {
    font-size: 1.2rem;
    margin: 10px 0;
    font-family: arial;
  }
  span{
    background: linear-gradient(to top, #D0E7FE 40%, transparent 10%);
  }
  @media(max-width: 900px){
    width: 90%;
    max-width: 90%;
    p {
      font-size: 1rem;
    }
  }
`;P(vo)`
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
`;const Tg=()=>{C.useState(!1),C.useState(!1);const[e,t]=C.useState(null),n=Mo(),r=i=>{t(e===i?null:i)};return u.jsx(zg,{children:u.jsxs(Lg,{children:[u.jsx("h1",{children:"양자 개념"}),u.jsx("hr",{}),u.jsxs("div",{className:"accordion-item",children:[u.jsxs("div",{className:`accordion-title ${e===0?"active":""}`,onClick:()=>r(0),children:[u.jsx("span",{children:"양자란 ?"}),u.jsx("span",{children:e===0?"▲":"▼"})]}),e===0&&u.jsxs("div",{className:"accordion-content",children:[u.jsx("p",{style:{marginBottom:"2%"},children:"양자란, 더 이상 나눌 수 없는 에너지의 최소량의 단위입니다. 복사 에너지에서 처음 발견하여 '에너지 양자'라고 불렀으며 그것이 빛으로서 공간을 진행할 경우 '광양자'라고 합니다."}),u.jsx("p",{children:"양자는 더 이상 나눌 수 없는 에너지의 최소 단위입니다. 쉽게 말해, 우리가 에너지를 가장 작은 단위로 쪼개면 그 단위를 양자라고 부릅니다."})]})]}),u.jsxs("div",{className:"accordion-item",children:[u.jsxs("div",{className:`accordion-title ${e===1?"active":""}`,onClick:()=>r(1),children:[u.jsx("span",{children:"양자역학이란 ?"}),u.jsx("span",{children:e===1?"▲":"▼"})]}),e===1&&u.jsx("div",{className:"accordion-content",children:u.jsx("p",{children:"입자 및 입자 집단을 다루는 현대 물리학의 기초 이론입니다. 입자가 가지는 파동과 입자의 이중성, 측정에서의 불확정 관계 따위를 설명합니다. 1925년 하이젠베르크의 행렬 역학과 슈뢰딩거의 파동 역학이 통합된 이론입니다. 양자역학은 원자와 전자 같은 매우 작은 입자들이 작용하는 방식을 설명하는 이론으로, 이 입자들은 고전 물리학과는 다르게 파동과 입자 모두의 성질을 가집니다. 그로 인해 입자의 위치나 운동량을 동시에 정확하게 알 수 없다는 불확정성 원리가 등장합니다."})})]}),u.jsxs("div",{className:"accordion-item",children:[u.jsxs("div",{className:`accordion-title ${e===2?"active":""}`,onClick:()=>r(2),children:[u.jsx("span",{children:"불확정성의 원리"}),u.jsx("span",{children:e===2?"▲":"▼"})]}),e===2&&u.jsxs("div",{className:"accordion-content",children:[u.jsx("h1",{style:{marginBottom:"1%",color:"#eee"},children:'"입자의 위치나 운동량을 동시에 정확하게 알 수 없다"'}),u.jsx("p",{children:"하이젠베르크는 방정식들을 연구하는 동안 어떤 특성은 정확하게 측정하는 것이 불가능하다는 사실을 깨달았는데, 그 이유는 사용하는 실험 장치가 측정하는 원자에 영향을 미치기 때문이었습니다. 입자의 위치와 운동량은 동시에 추론할 수 없으며, 주어진 순간의 에너지도 알 수 없었습니다. 어떠한 측정이든 어느 정도의 불확정성이 있지만, 하이젠베르크의 불확정성은 측정 차원의 오류가 아닙니다. 사용하는 장비가 아무리 정확해도 운동량과 위치를 동시에 정확히 알 수 없다는 것입니다. 하나의 값을 고정하면 다른 값은 더욱 불확실해집니다."})]})]}),u.jsxs("div",{className:"accordion-item",children:[u.jsxs("div",{className:`accordion-title ${e===3?"active":""}`,onClick:()=>r(3),children:[u.jsx("span",{children:"슈뢰딩거의 고양이"}),u.jsx("span",{children:e===3?"▲":"▼"})]}),e===3&&u.jsxs("div",{className:"accordion-content",children:[u.jsx("p",{children:"슈뢰딩거의 고양이는 양자역학의 개념을 설명하기 위해 1935년 오스트리아의 물리학자 에르빈 슈뢰딩거가 제안한 사고 실험입니다. 이 실험은 양자역학의 중첩(superposition) 상태와 그로 인한 철학적 문제를 쉽게 설명하기 위한 것입니다. 특히 양자역학의 코펜하겐 해석을 이해하는 데 중요한 역할을 합니다."}),u.jsx("a",{style:{cursor:"pointer"},onClick:i=>n("/cat"),children:"detail ➡️"})]})]})]})})};function Og(){return u.jsx(u.Fragment,{children:u.jsx(Tg,{})})}const $g=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 160vh;
  max-height: 160vh;
  margin-top: -5%;
  margin-bottom: -10%;
  background-color: #eee;
`,Fg=P.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
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
`,Mg=P.div`
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
`,Dg=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  h2 {
    font-size: 24px;
    color: #333;
  }

  p {
    font-size: 20px;
    margin-top: 10px;
    color: #666;
  }
`,Ag=()=>{const e=[{question:"양자 얽힘 현상은 거리에 상관없이 두 입자가 서로 연결된 상태를 유지하는 것을 의미한다.",correctAnswer:"O",explanation:"양자 얽힘은 두 입자가 멀리 떨어져 있어도 서로의 상태가 연관된 상태를 유지하는 현상입니다. 한 입자의 상태가 변하면 즉시 다른 입자의 상태도 변합니다."},{question:"불확정성의 원리를 최초로 밝힌 사람은 하이젠베르크이다",correctAnswer:"O",explanation:"불확정성의 원리를 최초로 밝힌 사람은 하이젠베르크이다"},{question:"진인프라의 설립일은 2006년 5월 4일이다.",correctAnswer:"O",explanation:"진인프라의 설립일은 2006년 5월 4일이다."},{question:"양자란 화학 원소로서의 특성을 잃지 않는 범위에서 도달할 수 있는 물질의 기본적인 최소입자이다.",correctAnswer:"X",explanation:'해당 설명은 "원자"에 대한 설명으로, 양자란 더 이상 나눌 수 없는 에너지의 최소량의 단위이다'},{question:"양자 컴퓨터는 모든 문제를 일반 컴퓨터보다 빠르게 해결할 수 있다.",correctAnswer:"X",explanation:" 양자 컴퓨터는 특정한 문제, 특히 복잡한 최적화 문제나 암호 해독 등에서 더 뛰어난 성능을 발휘합니다. "},{question:"슈뢰딩거의 고양이 실험에서 고양이는 살았다.",correctAnswer:"X",explanation:'양자역학의 해석에 따르자면 고양이의 생사 여부를 확인해보기 전까지는 고양이의 상태를 살아있으면서도 동시에 죽어있는 상태라고 규정하기 때문에 정답은 "알 수 없다"이다.'}],[t,n]=C.useState(0),[r,i]=C.useState(0),[o,l]=C.useState(!1),[s,a]=C.useState(""),[c,m]=C.useState(""),[h,g]=C.useState(!1),v=x=>{const w=e[t];let _=1500;x===w.correctAnswer?(i(r+1),a("정답입니다!"),m("")):(a("오답입니다!"),m(w.explanation),_=3e3),l(!0),setTimeout(()=>{l(!1),t<e.length-1?n(t+1):g(!0)},_)};return u.jsx($g,{children:h?u.jsxs(Dg,{children:[u.jsx("h2",{children:"퀴즈 완료!"}),u.jsxs("p",{children:["총 ",e.length,"문제 중 ",r,"문제 맞추셨습니다."]})]}):u.jsxs(u.Fragment,{children:[u.jsx(Fg,{children:e[t].question}),u.jsxs("div",{children:[u.jsx(xc,{onClick:()=>v("O"),children:"O"}),u.jsx(xc,{onClick:()=>v("X"),children:"X"})]}),o&&u.jsxs(Mg,{children:[u.jsx("p",{children:s}),c&&u.jsx("small",{children:c})]})]})})};function Bg(){return u.jsx(u.Fragment,{children:u.jsx(Ag,{})})}const Ug=P.div`
    height: 160vh;
    max-height: 200vh;
    margin-top: -5%;
    margin-bottom: -20%;
    padding-top: 5%;
    background-color: #eee;
`,Wg=P.div`
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
    font-size: 1.5rem;
    line-height: 1.8;
    border-top: 1px solid #007bff;
    max-height: 330px;  /* Fixed height for content */
    overflow-y: auto;  /* Scroll if content exceeds height */
  }

  /* Flexbox to center the video */
  iframe {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 900px) {
    margin-top: 12%;
  }

  @media (max-width: 700px) {
    margin-top: 16%;
  }
`,Vg=()=>{const[e,t]=C.useState(null),n=r=>{t(e===r?null:r)};return u.jsx(Ug,{children:u.jsxs(Wg,{children:[u.jsx("h1",{children:"양자 활용"}),u.jsx("hr",{}),u.jsxs("div",{className:"accordion-item",children:[u.jsxs("div",{className:`accordion-title ${e===0?"active":""}`,onClick:()=>n(0),children:[u.jsx("span",{children:"양자 컴퓨터"}),u.jsx("span",{children:e===0?"▲":"▼"})]}),e===0&&u.jsxs("div",{className:"accordion-content",children:[u.jsx("p",{children:"기존 디지털컴퓨터와는 달리 양자역학의 중첩 상태를 활용한 큐비트(Quantum bit)를 기본 단위로  0과 1 두 상태를 동시에 처리할 수 있다."}),u.jsx("p",{children:" 이 같은 특성 때문에 양자컴퓨터는 기존 컴퓨터보다 월등한 계산 속도와 연산 처리 능력을 갖는데, "}),u.jsx("p",{children:"이는 슈퍼컴퓨터보다 1000배 이상 빠른 연산이 가능해 인공지능(AI), 의료·제약, 암호통신 등 다양한 분야에 활용될 수 있다. "}),u.jsx("hr",{}),u.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/gjp9301in0U",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})]}),u.jsxs("div",{className:"accordion-item",children:[u.jsxs("div",{className:`accordion-title ${e===1?"active":""}`,onClick:()=>n(1),children:[u.jsx("span",{children:"양자 암호통신"}),u.jsx("span",{children:e===1?"▲":"▼"})]}),e===1&&u.jsxs("div",{className:"accordion-content",children:[u.jsx("p",{children:"양자암호통신 기술은 통신상의 보안을 자연의 기본원리인 양자역학의 법칙에 의해서 보장하므로"}),u.jsx("p",{children:"도청이나 감청이 절대적으로 불가능한 차세대 통신보안 기술로서 최근 크게 주목받고 있다."}),u.jsx("p",{children:"즉, 양자암호통신 기술은 “양자 복제불가능성”과 같은 양자물리학의 법칙에 기초해서 송신자와 수신자 사이에 암호 키(일회용 난수표)를"}),u.jsx("p",{children:"절대적으로 안전하게 실시간으로 분배하는 기술로서 “양자 키 분배 기술”로도 알려져 있다."}),u.jsx("hr",{}),u.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/fF1cJ5F7ArI?si=9nIUWin5E9jQ6qRT",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})]}),u.jsxs("div",{className:"accordion-item",children:[u.jsxs("div",{className:`accordion-title ${e===2?"active":""}`,onClick:()=>n(2),children:[u.jsx("span",{children:"양자 센서"}),u.jsx("span",{children:e===2?"▲":"▼"})]}),e===2&&u.jsxs("div",{className:"accordion-content",children:[u.jsx("p",{children:"양자 센서의 기본 원리는 센서와 탐지 대상 물체 사이의 상호작용을 통해 발생하는 미세한 양자 위상변화(Quantum Phase Accumulation)를 측정하는 것이다."}),u.jsx("p",{children:"이때 중첩, 이중성, 얽힘과 같은 미시 세계의 양자역학적 특성들이 측정 기술로 활용된다."}),u.jsx("p",{children:"양자 센싱은 측정 대상과 센서의 종류에 따라 다양하게 분류되며, 일반적으로 큐비트와 같은 양자 시스템을 사용해 시간, 자기장 등의 물리량을 정밀하게 측정한다."}),u.jsx("hr",{}),u.jsx("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/jS6fiujLTzo?si=JBji-IeWWDn1tFDX",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})]})]})})};function Hg(){return u.jsx(u.Fragment,{children:u.jsx(Vg,{})})}const Qg="data:image/svg+xml,%3csvg%20width='100'%20height='100'%20viewBox='0%200%20100%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='50'%20cy='50'%20r='50'%20fill='%23F1F5F9'/%3e%3cpath%20d='M48.25%2070C48.25%2070.9665%2049.0335%2071.75%2050%2071.75C50.9665%2071.75%2051.75%2070.9665%2051.75%2070H48.25ZM51.2374%2034.7626C50.554%2034.0791%2049.446%2034.0791%2048.7626%2034.7626L37.6256%2045.8995C36.9422%2046.5829%2036.9422%2047.691%2037.6256%2048.3744C38.309%2049.0578%2039.4171%2049.0578%2040.1005%2048.3744L50%2038.4749L59.8995%2048.3744C60.5829%2049.0578%2061.691%2049.0578%2062.3744%2048.3744C63.0578%2047.691%2063.0578%2046.5829%2062.3744%2045.8995L51.2374%2034.7626ZM51.75%2070L51.75%2036H48.25L48.25%2070H51.75Z'%20fill='%2336597D'/%3e%3c/svg%3e",Gg=P.img`
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
`,Yg=()=>{const e=()=>{window.scrollTo({top:0,behavior:"smooth"})};return u.jsx(u.Fragment,{children:u.jsx(Gg,{onClick:e,src:Qg,alt:"Scroll to top"})})},Kg="/assets/message-D6wtI_nO.svg",Xg="/assets/flag-iLmY8AUC.svg",Zg="data:image/svg+xml,%3csvg%20width='744'%20height='619'%20viewBox='0%200%20744%20619'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_f_0_1)'%3e%3cellipse%20cx='352.58'%20cy='364.807'%20rx='208.58'%20ry='110.044'%20fill='%23FDE598'%20fill-opacity='0.7'/%3e%3c/g%3e%3cg%20filter='url(%23filter1_f_0_1)'%3e%3cellipse%20cx='395.735'%20cy='254.044'%20rx='204.265'%20ry='110.044'%20fill='%236955FF'%20fill-opacity='0.5'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_0_1'%20x='0.151413'%20y='110.915'%20width='704.858'%20height='507.786'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='71.9243'%20result='effect1_foregroundBlur_0_1'/%3e%3c/filter%3e%3cfilter%20id='filter1_f_0_1'%20x='47.6214'%20y='0.151413'%20width='696.227'%20height='507.786'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='71.9243'%20result='effect1_foregroundBlur_0_1'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",Jg="/assets/planet-D33HIdLO.svg",qg=P.div`
    margin-top: -5%;
    height: 330vh;
    max-height: 330vh;
    margin-bottom: -20%;
    padding-top: 5%;
    background-color: #eee;

`,bg=P.div`
  max-width: 100%;
  margin-top: 5%;
  border-radius: 0.7vw;
  position: relative;
`,e2=P.div`
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
`,t2=P.div`
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
`,n2=P.img`
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
`,r2=P.div`
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
`,i2=P.img`
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
`,o2=P.div`
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
`,l2=P.div`
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
`;const s2=P.div`
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
`,a2=P.div`
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
`,u2=P.img`
  width: 35%;
  margin-left: 35%;
  @media (max-width: 800px) {
    min-width: 45%;
    max-width: 45%;
    margin-left: 20%;
  }
`,c2=za`
  from {
    transform: translateY(0);
    opacity: 1;  
  }
  to {
    transform: translateY(-100px);
    opacity: 0;
  }
`,d2=P.img`
  position: fixed;
  top: 30%;
  max-width: 30%;
  left: 36%;
  z-index: 10000;
  transition: opacity 0.5s ease-out;
  animation: ${e=>e.isdisappearing?un`${c2} 0.5s forwards`:"none"};
  @media (max-width: 700px) {
    position: fixed;
    max-width: 40%;
  }
`,f2=P.img`
  position: relative;
  margin-top: 10%;
  min-width: 80%;
  max-width: 80%;
  margin-right: 15%;
`,p2=()=>{const[e,t]=C.useState(lt),[n,r]=C.useState(!1),[i,o]=C.useState(!0),[l,s]=C.useState(!1);C.useEffect(()=>{const g=setTimeout(()=>{s(!0)},1e3),v=setInterval(()=>{t(w=>w===lt?_s:lt)},600),x=setTimeout(()=>{r(!0),setTimeout(()=>{o(!1)},1e3),clearInterval(v)},3e3);return()=>{clearTimeout(g),clearTimeout(x),clearInterval(v)}},[]);const[a,c]=C.useState(lt),[m,h]=C.useState(!1);return C.useEffect(()=>{const g=setTimeout(()=>{h(!0)},1e3),v=setInterval(()=>{c(x=>x===lt?_s:lt)},600);return()=>{clearTimeout(g),clearInterval(v)}},[]),u.jsx(u.Fragment,{children:u.jsxs(qg,{children:[u.jsxs(bg,{children:[i&&u.jsx(u.Fragment,{children:u.jsx(d2,{src:e,alt:"Waving Genie",isdisappearing:n})}),u.jsxs(s2,{children:[u.jsxs(o2,{children:[u.jsx("img",{src:Zg,alt:"Gradient Background"}),u.jsxs(l2,{children:[u.jsx("h1",{children:"진인프라의"}),u.jsx("h1",{children:"양자 캐릭터"}),u.jsx("h1",{children:"‘지니’"})]})]}),u.jsx(t2,{children:u.jsx(n2,{src:Xg,alt:"Flag"})})]}),u.jsxs(a2,{children:[u.jsx(r2,{children:u.jsx(i2,{src:Jg,alt:"planet"})}),u.jsxs(e2,{children:[u.jsx("h1",{children:"지니"}),u.jsx("p",{style:{color:"#0000ff"},children:"지니(진인프라의 진+  접사 ‘-이‘)"}),u.jsx("p",{children:"🧬알라딘에 나오는 무엇이든 할 수 있는 캐릭터 지니처럼"}),u.jsx("p",{children:"🔭양자 정보 관련해서는 무엇이든 알려준다는 의미"})]})]})]}),u.jsxs("div",{style:{maxWidth:"50%",display:"flex",flexDirection:"column",marginLeft:"32%",marginTop:"10%"},children:[u.jsx(u2,{src:Kg,style:{width:"35%",marginLeft:"40%"}}),u.jsx(f2,{style:{marginLeft:"0",marginTop:"3%",marginBottom:"15%"},src:a,alt:"Waving Genie"})]})]})})};function h2(){return u.jsx(u.Fragment,{children:u.jsx(p2,{})})}const xi=P.div`
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
      font-size: 1.5rem;
  }
  @media(max-width: 900px){
    h2{
      font-size: 1.2rem;
      margin-bottom: 2%;
    }
    p {
      font-size: 1rem;
      margin: 10px 0;
    }
  }
`,wi=P.p`
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`,m2=P.div`
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
`,g2=P.div`
  position: relative;
  background: white;
  padding: 5%;
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
    font-size: 1.5rem;
    margin-bottom:2%;
  }
  p {
    font-size: 1.2rem;
    margin: 10px 0;
    font-family: arial;
  }
  span{
    background: linear-gradient(to top, #D0E7FE 40%, transparent 10%);
  }
  @media(max-width: 900px){
    width: 90%;
    max-width: 90%;
    p {
      font-size: 1rem;
    }
  }
`,v2=P(vo)`
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
`,y2=()=>{const[e,t]=C.useState(!1),n=()=>{t(!e)};return C.useState(!1),C.useState(null),Mo(),u.jsx(Ng,{children:u.jsxs(Ig,{children:[u.jsx("h1",{children:"슈뢰딩거의 고양이"}),u.jsxs(xi,{children:[u.jsxs(wi,{children:[u.jsx("img",{src:_g,alt:"bunker",style:{maxWidth:"90%"}})," "]}),u.jsxs(wi,{children:[u.jsx("img",{src:yc,alt:"bottle1"})," ",u.jsx("img",{src:vc,alt:"cat"})]}),u.jsx("p",{children:"고양이 한 마리와 독이 든 병을 벙커 안에 넣고 벙커를 닫습니다."})]}),u.jsxs(xi,{children:[u.jsxs(wi,{children:[u.jsx("img",{src:yc,alt:"bottle1"})," ",u.jsx("img",{src:Pg,alt:"bottle2"})]}),u.jsx("p",{children:"독이 든 병은 50%의 확률로 깨질 수도, 깨지지 않을 수도 있습니다."})]}),u.jsxs(xi,{children:[u.jsxs(wi,{children:[u.jsx("img",{src:vc,alt:"cat"})," ",u.jsx("img",{src:jg,alt:"cat2"})]}),u.jsx("p",{children:"이에 따라 고양이도 죽을 수도 있고 살아 있을 수도 있습니다."}),u.jsxs("p",{children:["이러한 상태를 ",u.jsx("span",{style:{color:"#0000ff"},children:"양자 중첩 상태"}),"라고 합니다."]})]}),u.jsxs(xi,{children:[u.jsxs("p",{style:{padding:"0 2%",marginBottom:"1%"},children:["슈뢰딩거의 고양이는 1935년 에르빈 슈뢰딩거가 양자역학의 이상한 특성을 설명하기 위해 제안한 사고 실험입니다.",u.jsx("br",{}),u.jsx("span",{children:"이 실험은 고양이를 상자에 넣고, 고양이의 생사 여부가 양자적 현상인 중첩에 의해 결정된다는 개념"}),"을 보여줍니다."]}),u.jsx("div",{style:{textAlign:"center",display:"flex",marginTop:"1%"},children:u.jsx(Rg,{style:{backgroundColor:"#007bff"},onClick:n,children:e?"모달 닫기":"추가 설명 보기"})})]}),e&&u.jsx(m2,{children:u.jsxs(g2,{children:[u.jsx(v2,{onClick:n}),u.jsx("h2",{children:"추가 설명"}),u.jsx("hr",{style:{marginBottom:"3%"}}),u.jsxs("p",{children:["이 사고 실험은 양자역학의 중요한 해석 중 하나인 ",u.jsx("span",{style:{fontWeight:"bold"},children:"코펜하겐 해석"}),"을 설명하기 위한 것이었습니다."]}),u.jsx("p",{children:"양자적 입자들은 측정되기 전까지 여러 상태가 동시에 존재하는데, 이 중첩 상태가 외부 관찰에 의해 무너지면서 하나의 확정된 상태가 된다는 것입니다."}),u.jsx("p",{children:u.jsx("span",{children:"고양이 역시 상자를 열어 관찰하기 전까지는 살아있으면서 동시에 죽어있는 상태로 존재합니다."})}),u.jsx("p",{children:"이 실험은 양자역학의 관측 문제와 파동 함수의 붕괴라는 개념을 설명하는 데 중요한 역할을 합니다."}),u.jsxs("p",{children:["슈뢰딩거는 이 실험을 통해 양자역학의 코펜하겐 해석이 현실에 적용될 때 얼마나 비현실적일 수 있는지를 비판했습니다. 실제로 고양이가 ",u.jsx("span",{style:{fontWeight:"bold"},children:'"살아 있으면서 죽어있다"'}),"는 개념은 우리의 일상적인 직관과는 맞지 않기 때문에, 이 실험은 양자역학의 해석에 대한 논쟁을 불러일으켰습니다."]})]})})]})})};function x2(){return u.jsx(u.Fragment,{children:u.jsx(y2,{})})}function w2(){return u.jsxs(D1,{children:[u.jsx(pg,{}),u.jsxs($1,{children:[u.jsx(Gt,{path:"/",element:u.jsx(Jm,{})}),u.jsx(Gt,{path:"/concept",element:u.jsx(Og,{})}),u.jsx(Gt,{path:"/description",element:u.jsx(Hg,{})}),u.jsx(Gt,{path:"/quiz",element:u.jsx(Bg,{})}),u.jsx(Gt,{path:"/character",element:u.jsx(h2,{})}),u.jsx(Gt,{path:"/cat",element:u.jsx(x2,{})})]}),u.jsx(Yg,{}),u.jsx(Eg,{})]})}const S2=Hm`
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
`,k2={title:un`
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
    `},C2={fonts:k2};function E2(){return u.jsx(u.Fragment,{children:u.jsxs(Um,{theme:C2,children:[u.jsx(S2,{}),u.jsx(w2,{})]})})}Cl.createRoot(document.getElementById("root")).render(u.jsx(ee.StrictMode,{children:u.jsx(E2,{})}));
