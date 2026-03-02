(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const g of f.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function d(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=d(u);fetch(u.href,f)}})();function np(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var vc={exports:{}},br={};var Hm;function $g(){if(Hm)return br;Hm=1;var o=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function d(s,u,f){var g=null;if(f!==void 0&&(g=""+f),u.key!==void 0&&(g=""+u.key),"key"in u){f={};for(var y in u)y!=="key"&&(f[y]=u[y])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:g,ref:u!==void 0?u:null,props:f}}return br.Fragment=c,br.jsx=d,br.jsxs=d,br}var qm;function Kg(){return qm||(qm=1,vc.exports=$g()),vc.exports}var a=Kg(),jc={exports:{}},je={};var Gm;function Jg(){if(Gm)return je;Gm=1;var o=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),g=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),B=Symbol.iterator;function F(C){return C===null||typeof C!="object"?null:(C=B&&C[B]||C["@@iterator"],typeof C=="function"?C:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,k={};function M(C,Z,ie){this.props=C,this.context=Z,this.refs=k,this.updater=ie||V}M.prototype.isReactComponent={},M.prototype.setState=function(C,Z){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,Z,"setState")},M.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function P(){}P.prototype=M.prototype;function te(C,Z,ie){this.props=C,this.context=Z,this.refs=k,this.updater=ie||V}var le=te.prototype=new P;le.constructor=te,T(le,M.prototype),le.isPureReactComponent=!0;var N=Array.isArray;function W(){}var Q={H:null,A:null,T:null,S:null},me=Object.prototype.hasOwnProperty;function ye(C,Z,ie){var se=ie.ref;return{$$typeof:o,type:C,key:Z,ref:se!==void 0?se:null,props:ie}}function Le(C,Z){return ye(C.type,Z,C.props)}function re(C){return typeof C=="object"&&C!==null&&C.$$typeof===o}function Ce(C){var Z={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(ie){return Z[ie]})}var Ke=/\/+/g;function ee(C,Z){return typeof C=="object"&&C!==null&&C.key!=null?Ce(""+C.key):Z.toString(36)}function he(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(W,W):(C.status="pending",C.then(function(Z){C.status==="pending"&&(C.status="fulfilled",C.value=Z)},function(Z){C.status==="pending"&&(C.status="rejected",C.reason=Z)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function L(C,Z,ie,se,O){var $=typeof C;($==="undefined"||$==="boolean")&&(C=null);var ce=!1;if(C===null)ce=!0;else switch($){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(C.$$typeof){case o:case c:ce=!0;break;case b:return ce=C._init,L(ce(C._payload),Z,ie,se,O)}}if(ce)return O=O(C),ce=se===""?"."+ee(C,0):se,N(O)?(ie="",ce!=null&&(ie=ce.replace(Ke,"$&/")+"/"),L(O,Z,ie,"",function(z){return z})):O!=null&&(re(O)&&(O=Le(O,ie+(O.key==null||C&&C.key===O.key?"":(""+O.key).replace(Ke,"$&/")+"/")+ce)),Z.push(O)),1;ce=0;var Ae=se===""?".":se+":";if(N(C))for(var K=0;K<C.length;K++)se=C[K],$=Ae+ee(se,K),ce+=L(se,Z,ie,$,O);else if(K=F(C),typeof K=="function")for(C=K.call(C),K=0;!(se=C.next()).done;)se=se.value,$=Ae+ee(se,K++),ce+=L(se,Z,ie,$,O);else if($==="object"){if(typeof C.then=="function")return L(he(C),Z,ie,se,O);throw Z=String(C),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return ce}function ae(C,Z,ie){if(C==null)return C;var se=[],O=0;return L(C,se,"","",function($){return Z.call(ie,$,O++)}),se}function de(C){if(C._status===-1){var Z=C._result;Z=Z(),Z.then(function(ie){(C._status===0||C._status===-1)&&(C._status=1,C._result=ie)},function(ie){(C._status===0||C._status===-1)&&(C._status=2,C._result=ie)}),C._status===-1&&(C._status=0,C._result=Z)}if(C._status===1)return C._result.default;throw C._result}var Y=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},oe={map:ae,forEach:function(C,Z,ie){ae(C,function(){Z.apply(this,arguments)},ie)},count:function(C){var Z=0;return ae(C,function(){Z++}),Z},toArray:function(C){return ae(C,function(Z){return Z})||[]},only:function(C){if(!re(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return je.Activity=w,je.Children=oe,je.Component=M,je.Fragment=d,je.Profiler=u,je.PureComponent=te,je.StrictMode=s,je.Suspense=x,je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,je.__COMPILER_RUNTIME={__proto__:null,c:function(C){return Q.H.useMemoCache(C)}},je.cache=function(C){return function(){return C.apply(null,arguments)}},je.cacheSignal=function(){return null},je.cloneElement=function(C,Z,ie){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var se=T({},C.props),O=C.key;if(Z!=null)for($ in Z.key!==void 0&&(O=""+Z.key),Z)!me.call(Z,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&Z.ref===void 0||(se[$]=Z[$]);var $=arguments.length-2;if($===1)se.children=ie;else if(1<$){for(var ce=Array($),Ae=0;Ae<$;Ae++)ce[Ae]=arguments[Ae+2];se.children=ce}return ye(C.type,O,se)},je.createContext=function(C){return C={$$typeof:g,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:f,_context:C},C},je.createElement=function(C,Z,ie){var se,O={},$=null;if(Z!=null)for(se in Z.key!==void 0&&($=""+Z.key),Z)me.call(Z,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(O[se]=Z[se]);var ce=arguments.length-2;if(ce===1)O.children=ie;else if(1<ce){for(var Ae=Array(ce),K=0;K<ce;K++)Ae[K]=arguments[K+2];O.children=Ae}if(C&&C.defaultProps)for(se in ce=C.defaultProps,ce)O[se]===void 0&&(O[se]=ce[se]);return ye(C,$,O)},je.createRef=function(){return{current:null}},je.forwardRef=function(C){return{$$typeof:y,render:C}},je.isValidElement=re,je.lazy=function(C){return{$$typeof:b,_payload:{_status:-1,_result:C},_init:de}},je.memo=function(C,Z){return{$$typeof:p,type:C,compare:Z===void 0?null:Z}},je.startTransition=function(C){var Z=Q.T,ie={};Q.T=ie;try{var se=C(),O=Q.S;O!==null&&O(ie,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(W,Y)}catch($){Y($)}finally{Z!==null&&ie.types!==null&&(Z.types=ie.types),Q.T=Z}},je.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},je.use=function(C){return Q.H.use(C)},je.useActionState=function(C,Z,ie){return Q.H.useActionState(C,Z,ie)},je.useCallback=function(C,Z){return Q.H.useCallback(C,Z)},je.useContext=function(C){return Q.H.useContext(C)},je.useDebugValue=function(){},je.useDeferredValue=function(C,Z){return Q.H.useDeferredValue(C,Z)},je.useEffect=function(C,Z){return Q.H.useEffect(C,Z)},je.useEffectEvent=function(C){return Q.H.useEffectEvent(C)},je.useId=function(){return Q.H.useId()},je.useImperativeHandle=function(C,Z,ie){return Q.H.useImperativeHandle(C,Z,ie)},je.useInsertionEffect=function(C,Z){return Q.H.useInsertionEffect(C,Z)},je.useLayoutEffect=function(C,Z){return Q.H.useLayoutEffect(C,Z)},je.useMemo=function(C,Z){return Q.H.useMemo(C,Z)},je.useOptimistic=function(C,Z){return Q.H.useOptimistic(C,Z)},je.useReducer=function(C,Z,ie){return Q.H.useReducer(C,Z,ie)},je.useRef=function(C){return Q.H.useRef(C)},je.useState=function(C){return Q.H.useState(C)},je.useSyncExternalStore=function(C,Z,ie){return Q.H.useSyncExternalStore(C,Z,ie)},je.useTransition=function(){return Q.H.useTransition()},je.version="19.2.4",je}var Ym;function Oc(){return Ym||(Ym=1,jc.exports=Jg()),jc.exports}var j=Oc();const mn=np(j);var Nc={exports:{}},yr={},wc={exports:{}},Sc={};var Vm;function Ig(){return Vm||(Vm=1,(function(o){function c(L,ae){var de=L.length;L.push(ae);e:for(;0<de;){var Y=de-1>>>1,oe=L[Y];if(0<u(oe,ae))L[Y]=ae,L[de]=oe,de=Y;else break e}}function d(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var ae=L[0],de=L.pop();if(de!==ae){L[0]=de;e:for(var Y=0,oe=L.length,C=oe>>>1;Y<C;){var Z=2*(Y+1)-1,ie=L[Z],se=Z+1,O=L[se];if(0>u(ie,de))se<oe&&0>u(O,ie)?(L[Y]=O,L[se]=de,Y=se):(L[Y]=ie,L[Z]=de,Y=Z);else if(se<oe&&0>u(O,de))L[Y]=O,L[se]=de,Y=se;else break e}}return ae}function u(L,ae){var de=L.sortIndex-ae.sortIndex;return de!==0?de:L.id-ae.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var g=Date,y=g.now();o.unstable_now=function(){return g.now()-y}}var x=[],p=[],b=1,w=null,B=3,F=!1,V=!1,T=!1,k=!1,M=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function le(L){for(var ae=d(p);ae!==null;){if(ae.callback===null)s(p);else if(ae.startTime<=L)s(p),ae.sortIndex=ae.expirationTime,c(x,ae);else break;ae=d(p)}}function N(L){if(T=!1,le(L),!V)if(d(x)!==null)V=!0,W||(W=!0,Ce());else{var ae=d(p);ae!==null&&he(N,ae.startTime-L)}}var W=!1,Q=-1,me=5,ye=-1;function Le(){return k?!0:!(o.unstable_now()-ye<me)}function re(){if(k=!1,W){var L=o.unstable_now();ye=L;var ae=!0;try{e:{V=!1,T&&(T=!1,P(Q),Q=-1),F=!0;var de=B;try{t:{for(le(L),w=d(x);w!==null&&!(w.expirationTime>L&&Le());){var Y=w.callback;if(typeof Y=="function"){w.callback=null,B=w.priorityLevel;var oe=Y(w.expirationTime<=L);if(L=o.unstable_now(),typeof oe=="function"){w.callback=oe,le(L),ae=!0;break t}w===d(x)&&s(x),le(L)}else s(x);w=d(x)}if(w!==null)ae=!0;else{var C=d(p);C!==null&&he(N,C.startTime-L),ae=!1}}break e}finally{w=null,B=de,F=!1}ae=void 0}}finally{ae?Ce():W=!1}}}var Ce;if(typeof te=="function")Ce=function(){te(re)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,ee=Ke.port2;Ke.port1.onmessage=re,Ce=function(){ee.postMessage(null)}}else Ce=function(){M(re,0)};function he(L,ae){Q=M(function(){L(o.unstable_now())},ae)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):me=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return B},o.unstable_next=function(L){switch(B){case 1:case 2:case 3:var ae=3;break;default:ae=B}var de=B;B=ae;try{return L()}finally{B=de}},o.unstable_requestPaint=function(){k=!0},o.unstable_runWithPriority=function(L,ae){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var de=B;B=L;try{return ae()}finally{B=de}},o.unstable_scheduleCallback=function(L,ae,de){var Y=o.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?Y+de:Y):de=Y,L){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=de+oe,L={id:b++,callback:ae,priorityLevel:L,startTime:de,expirationTime:oe,sortIndex:-1},de>Y?(L.sortIndex=de,c(p,L),d(x)===null&&L===d(p)&&(T?(P(Q),Q=-1):T=!0,he(N,de-Y))):(L.sortIndex=oe,c(x,L),V||F||(V=!0,W||(W=!0,Ce()))),L},o.unstable_shouldYield=Le,o.unstable_wrapCallback=function(L){var ae=B;return function(){var de=B;B=ae;try{return L.apply(this,arguments)}finally{B=de}}}})(Sc)),Sc}var Pm;function Fg(){return Pm||(Pm=1,wc.exports=Ig()),wc.exports}var Cc={exports:{}},St={};var Xm;function Wg(){if(Xm)return St;Xm=1;var o=Oc();function c(x){var p="https://react.dev/errors/"+x;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)p+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+x+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var s={d:{f:d,r:function(){throw Error(c(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(x,p,b){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:w==null?null:""+w,children:x,containerInfo:p,implementation:b}}var g=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(x,p){if(x==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return St.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,St.createPortal=function(x,p){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(c(299));return f(x,p,null,b)},St.flushSync=function(x){var p=g.T,b=s.p;try{if(g.T=null,s.p=2,x)return x()}finally{g.T=p,s.p=b,s.d.f()}},St.preconnect=function(x,p){typeof x=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(x,p))},St.prefetchDNS=function(x){typeof x=="string"&&s.d.D(x)},St.preinit=function(x,p){if(typeof x=="string"&&p&&typeof p.as=="string"){var b=p.as,w=y(b,p.crossOrigin),B=typeof p.integrity=="string"?p.integrity:void 0,F=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;b==="style"?s.d.S(x,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:w,integrity:B,fetchPriority:F}):b==="script"&&s.d.X(x,{crossOrigin:w,integrity:B,fetchPriority:F,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},St.preinitModule=function(x,p){if(typeof x=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var b=y(p.as,p.crossOrigin);s.d.M(x,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(x)},St.preload=function(x,p){if(typeof x=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var b=p.as,w=y(b,p.crossOrigin);s.d.L(x,b,{crossOrigin:w,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},St.preloadModule=function(x,p){if(typeof x=="string")if(p){var b=y(p.as,p.crossOrigin);s.d.m(x,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(x)},St.requestFormReset=function(x){s.d.r(x)},St.unstable_batchedUpdates=function(x,p){return x(p)},St.useFormState=function(x,p,b){return g.H.useFormState(x,p,b)},St.useFormStatus=function(){return g.H.useHostTransitionStatus()},St.version="19.2.4",St}var Qm;function ex(){if(Qm)return Cc.exports;Qm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(c){console.error(c)}}return o(),Cc.exports=Wg(),Cc.exports}var Zm;function tx(){if(Zm)return yr;Zm=1;var o=Fg(),c=Oc(),d=ex();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(f(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,l=t;;){var r=n.return;if(r===null)break;var i=r.alternate;if(i===null){if(l=r.return,l!==null){n=l;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===n)return x(r),e;if(i===l)return x(r),t;i=i.sibling}throw Error(s(188))}if(n.return!==l.return)n=r,l=i;else{for(var m=!1,h=r.child;h;){if(h===n){m=!0,n=r,l=i;break}if(h===l){m=!0,l=r,n=i;break}h=h.sibling}if(!m){for(h=i.child;h;){if(h===n){m=!0,n=i,l=r;break}if(h===l){m=!0,l=i,n=r;break}h=h.sibling}if(!m)throw Error(s(189))}}if(n.alternate!==l)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,B=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),te=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),ye=Symbol.for("react.activity"),Le=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function Ce(e){return e===null||typeof e!="object"?null:(e=re&&e[re]||e["@@iterator"],typeof e=="function"?e:null)}var Ke=Symbol.for("react.client.reference");function ee(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ke?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case M:return"Profiler";case k:return"StrictMode";case N:return"Suspense";case W:return"SuspenseList";case ye:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case V:return"Portal";case te:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case le:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return t=e.displayName||null,t!==null?t:ee(e.type)||"Memo";case me:t=e._payload,e=e._init;try{return ee(e(t))}catch{}}return null}var he=Array.isArray,L=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},Y=[],oe=-1;function C(e){return{current:e}}function Z(e){0>oe||(e.current=Y[oe],Y[oe]=null,oe--)}function ie(e,t){oe++,Y[oe]=e.current,e.current=t}var se=C(null),O=C(null),$=C(null),ce=C(null);function Ae(e,t){switch(ie($,t),ie(O,e),ie(se,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?om(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=om(t),e=cm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(se),ie(se,e)}function K(){Z(se),Z(O),Z($)}function z(e){e.memoizedState!==null&&ie(ce,e);var t=se.current,n=cm(t,e.type);t!==n&&(ie(O,e),ie(se,n))}function v(e){O.current===e&&(Z(se),Z(O)),ce.current===e&&(Z(ce),pr._currentValue=de)}var H,ne;function pe(e){if(H===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);H=t&&t[1]||"",ne=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+H+e+ne}var De=!1;function Ze(e,t){if(!e||De)return"";De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var I=function(){throw Error()};if(Object.defineProperty(I.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(I,[])}catch(q){var U=q}Reflect.construct(e,[],I)}else{try{I.call()}catch(q){U=q}e.call(I.prototype)}}else{try{throw Error()}catch(q){U=q}(I=e())&&typeof I.catch=="function"&&I.catch(function(){})}}catch(q){if(q&&U&&typeof q.stack=="string")return[q.stack,U.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),m=i[0],h=i[1];if(m&&h){var S=m.split(`
`),_=h.split(`
`);for(r=l=0;l<S.length&&!S[l].includes("DetermineComponentFrameRoot");)l++;for(;r<_.length&&!_[r].includes("DetermineComponentFrameRoot");)r++;if(l===S.length||r===_.length)for(l=S.length-1,r=_.length-1;1<=l&&0<=r&&S[l]!==_[r];)r--;for(;1<=l&&0<=r;l--,r--)if(S[l]!==_[r]){if(l!==1||r!==1)do if(l--,r--,0>r||S[l]!==_[r]){var X=`
`+S[l].replace(" at new "," at ");return e.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",e.displayName)),X}while(1<=l&&0<=r);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?pe(n):""}function At(e,t){switch(e.tag){case 26:case 27:case 5:return pe(e.type);case 16:return pe("Lazy");case 13:return e.child!==t&&t!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return Ze(e.type,!1);case 11:return Ze(e.type.render,!1);case 1:return Ze(e.type,!0);case 31:return pe("Activity");default:return""}}function qe(e){try{var t="",n=null;do t+=At(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Fe=Object.prototype.hasOwnProperty,D=o.unstable_scheduleCallback,G=o.unstable_cancelCallback,tt=o.unstable_shouldYield,_e=o.unstable_requestPaint,xt=o.unstable_now,Cl=o.unstable_getCurrentPriorityLevel,lt=o.unstable_ImmediatePriority,kr=o.unstable_UserBlockingPriority,Mn=o.unstable_NormalPriority,ls=o.unstable_LowPriority,Tr=o.unstable_IdlePriority,rs=o.log,is=o.unstable_setDisableYieldValue,Al=null,Bt=null;function Ha(e){if(typeof rs=="function"&&is(e),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode(Al,e)}catch{}}var Lt=Math.clz32?Math.clz32:_p,Rp=Math.log,Op=Math.LN2;function _p(e){return e>>>=0,e===0?32:31-(Rp(e)/Op|0)|0}var Dr=256,Rr=262144,Or=4194304;function gn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _r(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var r=0,i=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var h=l&134217727;return h!==0?(l=h&~i,l!==0?r=gn(l):(m&=h,m!==0?r=gn(m):n||(n=h&~e,n!==0&&(r=gn(n))))):(h=l&~i,h!==0?r=gn(h):m!==0?r=gn(m):n||(n=l&~e,n!==0&&(r=gn(n)))),r===0?0:t!==0&&t!==r&&(t&i)===0&&(i=r&-r,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:r}function zl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Mp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yc(){var e=Or;return Or<<=1,(Or&62914560)===0&&(Or=4194304),e}function ss(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function El(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Up(e,t,n,l,r,i){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,S=e.expirationTimes,_=e.hiddenUpdates;for(n=m&~n;0<n;){var X=31-Lt(n),I=1<<X;h[X]=0,S[X]=-1;var U=_[X];if(U!==null)for(_[X]=null,X=0;X<U.length;X++){var q=U[X];q!==null&&(q.lane&=-536870913)}n&=~I}l!==0&&Vc(e,l,0),i!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=i&~(m&~t))}function Vc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Lt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function Pc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-Lt(n),r=1<<l;r&t|e[l]&t&&(e[l]|=t),n&=~r}}function Xc(e,t){var n=t&-t;return n=(n&42)!==0?1:os(n),(n&(e.suspendedLanes|t))!==0?0:n}function os(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function cs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Qc(){var e=ae.p;return e!==0?e:(e=window.event,e===void 0?32:Rm(e.type))}function Zc(e,t){var n=ae.p;try{return ae.p=e,t()}finally{ae.p=n}}var qa=Math.random().toString(36).slice(2),bt="__reactFiber$"+qa,Et="__reactProps$"+qa,Un="__reactContainer$"+qa,ds="__reactEvents$"+qa,Bp="__reactListeners$"+qa,Lp="__reactHandles$"+qa,$c="__reactResources$"+qa,kl="__reactMarker$"+qa;function us(e){delete e[bt],delete e[Et],delete e[ds],delete e[Bp],delete e[Lp]}function Bn(e){var t=e[bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Un]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=gm(e);e!==null;){if(n=e[bt])return n;e=gm(e)}return t}e=n,n=e.parentNode}return null}function Ln(e){if(e=e[bt]||e[Un]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Tl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Hn(e){var t=e[$c];return t||(t=e[$c]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ht(e){e[kl]=!0}var Kc=new Set,Jc={};function xn(e,t){qn(e,t),qn(e+"Capture",t)}function qn(e,t){for(Jc[e]=t,e=0;e<t.length;e++)Kc.add(t[e])}var Hp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ic={},Fc={};function qp(e){return Fe.call(Fc,e)?!0:Fe.call(Ic,e)?!1:Hp.test(e)?Fc[e]=!0:(Ic[e]=!0,!1)}function Mr(e,t,n){if(qp(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ur(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function ga(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gp(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(m){n=""+m,i.call(this,m)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(m){n=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fs(e){if(!e._valueTracker){var t=Wc(e)?"checked":"value";e._valueTracker=Gp(e,t,""+e[t])}}function ed(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Wc(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Yp=/[\n"\\]/g;function Kt(e){return e.replace(Yp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ms(e,t,n,l,r,i,m,h){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+$t(t)):e.value!==""+$t(t)&&(e.value=""+$t(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?ps(e,m,$t(t)):n!=null?ps(e,m,$t(n)):l!=null&&e.removeAttribute("value"),r==null&&i!=null&&(e.defaultChecked=!!i),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+$t(h):e.removeAttribute("name")}function td(e,t,n,l,r,i,m,h){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){fs(e);return}n=n!=null?""+$t(n):"",t=t!=null?""+$t(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=h?e.checked:!!l,e.defaultChecked=!!l,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),fs(e)}function ps(e,t,n){t==="number"&&Br(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Gn(e,t,n,l){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&l&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function ad(e,t,n){if(t!=null&&(t=""+$t(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+$t(n):""}function nd(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(s(92));if(he(l)){if(1<l.length)throw Error(s(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=$t(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),fs(e)}function Yn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ld(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||Vp.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function rd(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in t)l=t[r],t.hasOwnProperty(r)&&n[r]!==l&&ld(e,r,l)}else for(var i in t)t.hasOwnProperty(i)&&ld(e,i,t[i])}function hs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Lr(e){return Xp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function xa(){}var gs=null;function xs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vn=null,Pn=null;function id(e){var t=Ln(e);if(t&&(e=t.stateNode)){var n=e[Et]||null;e:switch(e=t.stateNode,t.type){case"input":if(ms(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Kt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var r=l[Et]||null;if(!r)throw Error(s(90));ms(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&ed(l)}break e;case"textarea":ad(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Gn(e,!!n.multiple,t,!1)}}}var bs=!1;function sd(e,t,n){if(bs)return e(t,n);bs=!0;try{var l=e(t);return l}finally{if(bs=!1,(Vn!==null||Pn!==null)&&(Ci(),Vn&&(t=Vn,e=Pn,Pn=Vn=null,id(t),e)))for(t=0;t<e.length;t++)id(e[t])}}function Dl(e,t){var n=e.stateNode;if(n===null)return null;var l=n[Et]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var ba=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ys=!1;if(ba)try{var Rl={};Object.defineProperty(Rl,"passive",{get:function(){ys=!0}}),window.addEventListener("test",Rl,Rl),window.removeEventListener("test",Rl,Rl)}catch{ys=!1}var Ga=null,vs=null,Hr=null;function od(){if(Hr)return Hr;var e,t=vs,n=t.length,l,r="value"in Ga?Ga.value:Ga.textContent,i=r.length;for(e=0;e<n&&t[e]===r[e];e++);var m=n-e;for(l=1;l<=m&&t[n-l]===r[i-l];l++);return Hr=r.slice(e,1<l?1-l:void 0)}function qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gr(){return!0}function cd(){return!1}function kt(e){function t(n,l,r,i,m){this._reactName=n,this._targetInst=r,this.type=l,this.nativeEvent=i,this.target=m,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(i):i[h]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Gr:cd,this.isPropagationStopped=cd,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gr)},persist:function(){},isPersistent:Gr}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yr=kt(bn),Ol=w({},bn,{view:0,detail:0}),Qp=kt(Ol),js,Ns,_l,Vr=w({},Ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ss,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_l&&(_l&&e.type==="mousemove"?(js=e.screenX-_l.screenX,Ns=e.screenY-_l.screenY):Ns=js=0,_l=e),js)},movementY:function(e){return"movementY"in e?e.movementY:Ns}}),dd=kt(Vr),Zp=w({},Vr,{dataTransfer:0}),$p=kt(Zp),Kp=w({},Ol,{relatedTarget:0}),ws=kt(Kp),Jp=w({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ip=kt(Jp),Fp=w({},bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wp=kt(Fp),eh=w({},bn,{data:0}),ud=kt(eh),th={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ah={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nh[e])?!!t[e]:!1}function Ss(){return lh}var rh=w({},Ol,{key:function(e){if(e.key){var t=th[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ah[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ss,charCode:function(e){return e.type==="keypress"?qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ih=kt(rh),sh=w({},Vr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fd=kt(sh),oh=w({},Ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ss}),ch=kt(oh),dh=w({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),uh=kt(dh),fh=w({},Vr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mh=kt(fh),ph=w({},bn,{newState:0,oldState:0}),hh=kt(ph),gh=[9,13,27,32],Cs=ba&&"CompositionEvent"in window,Ml=null;ba&&"documentMode"in document&&(Ml=document.documentMode);var xh=ba&&"TextEvent"in window&&!Ml,md=ba&&(!Cs||Ml&&8<Ml&&11>=Ml),pd=" ",hd=!1;function gd(e,t){switch(e){case"keyup":return gh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function bh(e,t){switch(e){case"compositionend":return xd(t);case"keypress":return t.which!==32?null:(hd=!0,pd);case"textInput":return e=t.data,e===pd&&hd?null:e;default:return null}}function yh(e,t){if(Xn)return e==="compositionend"||!Cs&&gd(e,t)?(e=od(),Hr=vs=Ga=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return md&&t.locale!=="ko"?null:t.data;default:return null}}var vh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vh[e.type]:t==="textarea"}function yd(e,t,n,l){Vn?Pn?Pn.push(l):Pn=[l]:Vn=l,t=Ri(t,"onChange"),0<t.length&&(n=new Yr("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Ul=null,Bl=null;function jh(e){am(e,0)}function Pr(e){var t=Tl(e);if(ed(t))return e}function vd(e,t){if(e==="change")return t}var jd=!1;if(ba){var As;if(ba){var zs="oninput"in document;if(!zs){var Nd=document.createElement("div");Nd.setAttribute("oninput","return;"),zs=typeof Nd.oninput=="function"}As=zs}else As=!1;jd=As&&(!document.documentMode||9<document.documentMode)}function wd(){Ul&&(Ul.detachEvent("onpropertychange",Sd),Bl=Ul=null)}function Sd(e){if(e.propertyName==="value"&&Pr(Bl)){var t=[];yd(t,Bl,e,xs(e)),sd(jh,t)}}function Nh(e,t,n){e==="focusin"?(wd(),Ul=t,Bl=n,Ul.attachEvent("onpropertychange",Sd)):e==="focusout"&&wd()}function wh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pr(Bl)}function Sh(e,t){if(e==="click")return Pr(t)}function Ch(e,t){if(e==="input"||e==="change")return Pr(t)}function Ah(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ht=typeof Object.is=="function"?Object.is:Ah;function Ll(e,t){if(Ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var r=n[l];if(!Fe.call(t,r)||!Ht(e[r],t[r]))return!1}return!0}function Cd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ad(e,t){var n=Cd(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cd(n)}}function zd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ed(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Br(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Br(e.document)}return t}function Es(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var zh=ba&&"documentMode"in document&&11>=document.documentMode,Qn=null,ks=null,Hl=null,Ts=!1;function kd(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ts||Qn==null||Qn!==Br(l)||(l=Qn,"selectionStart"in l&&Es(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Hl&&Ll(Hl,l)||(Hl=l,l=Ri(ks,"onSelect"),0<l.length&&(t=new Yr("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Qn)))}function yn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zn={animationend:yn("Animation","AnimationEnd"),animationiteration:yn("Animation","AnimationIteration"),animationstart:yn("Animation","AnimationStart"),transitionrun:yn("Transition","TransitionRun"),transitionstart:yn("Transition","TransitionStart"),transitioncancel:yn("Transition","TransitionCancel"),transitionend:yn("Transition","TransitionEnd")},Ds={},Td={};ba&&(Td=document.createElement("div").style,"AnimationEvent"in window||(delete Zn.animationend.animation,delete Zn.animationiteration.animation,delete Zn.animationstart.animation),"TransitionEvent"in window||delete Zn.transitionend.transition);function vn(e){if(Ds[e])return Ds[e];if(!Zn[e])return e;var t=Zn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Td)return Ds[e]=t[n];return e}var Dd=vn("animationend"),Rd=vn("animationiteration"),Od=vn("animationstart"),Eh=vn("transitionrun"),kh=vn("transitionstart"),Th=vn("transitioncancel"),_d=vn("transitionend"),Md=new Map,Rs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rs.push("scrollEnd");function sa(e,t){Md.set(e,t),xn(t,[e])}var Xr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Jt=[],$n=0,Os=0;function Qr(){for(var e=$n,t=Os=$n=0;t<e;){var n=Jt[t];Jt[t++]=null;var l=Jt[t];Jt[t++]=null;var r=Jt[t];Jt[t++]=null;var i=Jt[t];if(Jt[t++]=null,l!==null&&r!==null){var m=l.pending;m===null?r.next=r:(r.next=m.next,m.next=r),l.pending=r}i!==0&&Ud(n,r,i)}}function Zr(e,t,n,l){Jt[$n++]=e,Jt[$n++]=t,Jt[$n++]=n,Jt[$n++]=l,Os|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function _s(e,t,n,l){return Zr(e,t,n,l),$r(e)}function jn(e,t){return Zr(e,null,null,t),$r(e)}function Ud(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var r=!1,i=e.return;i!==null;)i.childLanes|=n,l=i.alternate,l!==null&&(l.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(r=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,r&&t!==null&&(r=31-Lt(n),e=i.hiddenUpdates,l=e[r],l===null?e[r]=[t]:l.push(t),t.lane=n|536870912),i):null}function $r(e){if(50<sr)throw sr=0,Po=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Kn={};function Dh(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(e,t,n,l){return new Dh(e,t,n,l)}function Ms(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ya(e,t){var n=e.alternate;return n===null?(n=qt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Bd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Kr(e,t,n,l,r,i){var m=0;if(l=e,typeof e=="function")Ms(e)&&(m=1);else if(typeof e=="string")m=Ug(e,n,se.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ye:return e=qt(31,n,t,r),e.elementType=ye,e.lanes=i,e;case T:return Nn(n.children,r,i,t);case k:m=8,r|=24;break;case M:return e=qt(12,n,t,r|2),e.elementType=M,e.lanes=i,e;case N:return e=qt(13,n,t,r),e.elementType=N,e.lanes=i,e;case W:return e=qt(19,n,t,r),e.elementType=W,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case te:m=10;break e;case P:m=9;break e;case le:m=11;break e;case Q:m=14;break e;case me:m=16,l=null;break e}m=29,n=Error(s(130,e===null?"null":typeof e,"")),l=null}return t=qt(m,n,t,r),t.elementType=e,t.type=l,t.lanes=i,t}function Nn(e,t,n,l){return e=qt(7,e,l,t),e.lanes=n,e}function Us(e,t,n){return e=qt(6,e,null,t),e.lanes=n,e}function Ld(e){var t=qt(18,null,null,0);return t.stateNode=e,t}function Bs(e,t,n){return t=qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Hd=new WeakMap;function It(e,t){if(typeof e=="object"&&e!==null){var n=Hd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:qe(t)},Hd.set(e,t),t)}return{value:e,source:t,stack:qe(t)}}var Jn=[],In=0,Jr=null,ql=0,Ft=[],Wt=0,Ya=null,fa=1,ma="";function va(e,t){Jn[In++]=ql,Jn[In++]=Jr,Jr=e,ql=t}function qd(e,t,n){Ft[Wt++]=fa,Ft[Wt++]=ma,Ft[Wt++]=Ya,Ya=e;var l=fa;e=ma;var r=32-Lt(l)-1;l&=~(1<<r),n+=1;var i=32-Lt(t)+r;if(30<i){var m=r-r%5;i=(l&(1<<m)-1).toString(32),l>>=m,r-=m,fa=1<<32-Lt(t)+r|n<<r|l,ma=i+e}else fa=1<<i|n<<r|l,ma=e}function Ls(e){e.return!==null&&(va(e,1),qd(e,1,0))}function Hs(e){for(;e===Jr;)Jr=Jn[--In],Jn[In]=null,ql=Jn[--In],Jn[In]=null;for(;e===Ya;)Ya=Ft[--Wt],Ft[Wt]=null,ma=Ft[--Wt],Ft[Wt]=null,fa=Ft[--Wt],Ft[Wt]=null}function Gd(e,t){Ft[Wt++]=fa,Ft[Wt++]=ma,Ft[Wt++]=Ya,fa=t.id,ma=t.overflow,Ya=e}var yt=null,Je=null,Re=!1,Va=null,ea=!1,qs=Error(s(519));function Pa(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gl(It(t,e)),qs}function Yd(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[bt]=e,t[Et]=l,n){case"dialog":Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":case"embed":Ee("load",t);break;case"video":case"audio":for(n=0;n<cr.length;n++)Ee(cr[n],t);break;case"source":Ee("error",t);break;case"img":case"image":case"link":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"input":Ee("invalid",t),td(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ee("invalid",t);break;case"textarea":Ee("invalid",t),nd(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||im(t.textContent,n)?(l.popover!=null&&(Ee("beforetoggle",t),Ee("toggle",t)),l.onScroll!=null&&Ee("scroll",t),l.onScrollEnd!=null&&Ee("scrollend",t),l.onClick!=null&&(t.onclick=xa),t=!0):t=!1,t||Pa(e,!0)}function Vd(e){for(yt=e.return;yt;)switch(yt.tag){case 5:case 31:case 13:ea=!1;return;case 27:case 3:ea=!0;return;default:yt=yt.return}}function Fn(e){if(e!==yt)return!1;if(!Re)return Vd(e),Re=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||rc(e.type,e.memoizedProps)),n=!n),n&&Je&&Pa(e),Vd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=hm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=hm(e)}else t===27?(t=Je,ln(e.type)?(e=dc,dc=null,Je=e):Je=t):Je=yt?aa(e.stateNode.nextSibling):null;return!0}function wn(){Je=yt=null,Re=!1}function Gs(){var e=Va;return e!==null&&(Ot===null?Ot=e:Ot.push.apply(Ot,e),Va=null),e}function Gl(e){Va===null?Va=[e]:Va.push(e)}var Ys=C(null),Sn=null,ja=null;function Xa(e,t,n){ie(Ys,t._currentValue),t._currentValue=n}function Na(e){e._currentValue=Ys.current,Z(Ys)}function Vs(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Ps(e,t,n,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var i=r.dependencies;if(i!==null){var m=r.child;i=i.firstContext;e:for(;i!==null;){var h=i;i=r;for(var S=0;S<t.length;S++)if(h.context===t[S]){i.lanes|=n,h=i.alternate,h!==null&&(h.lanes|=n),Vs(i.return,n,e),l||(m=null);break e}i=h.next}}else if(r.tag===18){if(m=r.return,m===null)throw Error(s(341));m.lanes|=n,i=m.alternate,i!==null&&(i.lanes|=n),Vs(m,n,e),m=null}else m=r.child;if(m!==null)m.return=r;else for(m=r;m!==null;){if(m===e){m=null;break}if(r=m.sibling,r!==null){r.return=m.return,m=r;break}m=m.return}r=m}}function Wn(e,t,n,l){e=null;for(var r=t,i=!1;r!==null;){if(!i){if((r.flags&524288)!==0)i=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var m=r.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var h=r.type;Ht(r.pendingProps.value,m.value)||(e!==null?e.push(h):e=[h])}}else if(r===ce.current){if(m=r.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(pr):e=[pr])}r=r.return}e!==null&&Ps(t,e,n,l),t.flags|=262144}function Ir(e){for(e=e.firstContext;e!==null;){if(!Ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Cn(e){Sn=e,ja=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function vt(e){return Pd(Sn,e)}function Fr(e,t){return Sn===null&&Cn(e),Pd(e,t)}function Pd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ja===null){if(e===null)throw Error(s(308));ja=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ja=ja.next=t;return n}var Rh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Oh=o.unstable_scheduleCallback,_h=o.unstable_NormalPriority,dt={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xs(){return{controller:new Rh,data:new Map,refCount:0}}function Yl(e){e.refCount--,e.refCount===0&&Oh(_h,function(){e.controller.abort()})}var Vl=null,Qs=0,el=0,tl=null;function Mh(e,t){if(Vl===null){var n=Vl=[];Qs=0,el=Jo(),tl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Qs++,t.then(Xd,Xd),t}function Xd(){if(--Qs===0&&Vl!==null){tl!==null&&(tl.status="fulfilled");var e=Vl;Vl=null,el=0,tl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Uh(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(l.status="rejected",l.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),l}var Qd=L.S;L.S=function(e,t){Tf=xt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Mh(e,t),Qd!==null&&Qd(e,t)};var An=C(null);function Zs(){var e=An.current;return e!==null?e:$e.pooledCache}function Wr(e,t){t===null?ie(An,An.current):ie(An,t.pool)}function Zd(){var e=Zs();return e===null?null:{parent:dt._currentValue,pool:e}}var al=Error(s(460)),$s=Error(s(474)),ei=Error(s(542)),ti={then:function(){}};function $d(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Kd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(xa,xa),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Id(e),e;default:if(typeof t.status=="string")t.then(xa,xa);else{if(e=$e,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=l}},function(l){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Id(e),e}throw En=t,al}}function zn(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(En=n,al):n}}var En=null;function Jd(){if(En===null)throw Error(s(459));var e=En;return En=null,e}function Id(e){if(e===al||e===ei)throw Error(s(483))}var nl=null,Pl=0;function ai(e){var t=Pl;return Pl+=1,nl===null&&(nl=[]),Kd(nl,e,t)}function Xl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ni(e,t){throw t.$$typeof===B?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Fd(e){function t(E,A){if(e){var R=E.deletions;R===null?(E.deletions=[A],E.flags|=16):R.push(A)}}function n(E,A){if(!e)return null;for(;A!==null;)t(E,A),A=A.sibling;return null}function l(E){for(var A=new Map;E!==null;)E.key!==null?A.set(E.key,E):A.set(E.index,E),E=E.sibling;return A}function r(E,A){return E=ya(E,A),E.index=0,E.sibling=null,E}function i(E,A,R){return E.index=R,e?(R=E.alternate,R!==null?(R=R.index,R<A?(E.flags|=67108866,A):R):(E.flags|=67108866,A)):(E.flags|=1048576,A)}function m(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function h(E,A,R,J){return A===null||A.tag!==6?(A=Us(R,E.mode,J),A.return=E,A):(A=r(A,R),A.return=E,A)}function S(E,A,R,J){var ge=R.type;return ge===T?X(E,A,R.props.children,J,R.key):A!==null&&(A.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===me&&zn(ge)===A.type)?(A=r(A,R.props),Xl(A,R),A.return=E,A):(A=Kr(R.type,R.key,R.props,null,E.mode,J),Xl(A,R),A.return=E,A)}function _(E,A,R,J){return A===null||A.tag!==4||A.stateNode.containerInfo!==R.containerInfo||A.stateNode.implementation!==R.implementation?(A=Bs(R,E.mode,J),A.return=E,A):(A=r(A,R.children||[]),A.return=E,A)}function X(E,A,R,J,ge){return A===null||A.tag!==7?(A=Nn(R,E.mode,J,ge),A.return=E,A):(A=r(A,R),A.return=E,A)}function I(E,A,R){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Us(""+A,E.mode,R),A.return=E,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case F:return R=Kr(A.type,A.key,A.props,null,E.mode,R),Xl(R,A),R.return=E,R;case V:return A=Bs(A,E.mode,R),A.return=E,A;case me:return A=zn(A),I(E,A,R)}if(he(A)||Ce(A))return A=Nn(A,E.mode,R,null),A.return=E,A;if(typeof A.then=="function")return I(E,ai(A),R);if(A.$$typeof===te)return I(E,Fr(E,A),R);ni(E,A)}return null}function U(E,A,R,J){var ge=A!==null?A.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return ge!==null?null:h(E,A,""+R,J);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case F:return R.key===ge?S(E,A,R,J):null;case V:return R.key===ge?_(E,A,R,J):null;case me:return R=zn(R),U(E,A,R,J)}if(he(R)||Ce(R))return ge!==null?null:X(E,A,R,J,null);if(typeof R.then=="function")return U(E,A,ai(R),J);if(R.$$typeof===te)return U(E,A,Fr(E,R),J);ni(E,R)}return null}function q(E,A,R,J,ge){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return E=E.get(R)||null,h(A,E,""+J,ge);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case F:return E=E.get(J.key===null?R:J.key)||null,S(A,E,J,ge);case V:return E=E.get(J.key===null?R:J.key)||null,_(A,E,J,ge);case me:return J=zn(J),q(E,A,R,J,ge)}if(he(J)||Ce(J))return E=E.get(R)||null,X(A,E,J,ge,null);if(typeof J.then=="function")return q(E,A,R,ai(J),ge);if(J.$$typeof===te)return q(E,A,R,Fr(A,J),ge);ni(A,J)}return null}function ue(E,A,R,J){for(var ge=null,Me=null,fe=A,Se=A=0,Te=null;fe!==null&&Se<R.length;Se++){fe.index>Se?(Te=fe,fe=null):Te=fe.sibling;var Ue=U(E,fe,R[Se],J);if(Ue===null){fe===null&&(fe=Te);break}e&&fe&&Ue.alternate===null&&t(E,fe),A=i(Ue,A,Se),Me===null?ge=Ue:Me.sibling=Ue,Me=Ue,fe=Te}if(Se===R.length)return n(E,fe),Re&&va(E,Se),ge;if(fe===null){for(;Se<R.length;Se++)fe=I(E,R[Se],J),fe!==null&&(A=i(fe,A,Se),Me===null?ge=fe:Me.sibling=fe,Me=fe);return Re&&va(E,Se),ge}for(fe=l(fe);Se<R.length;Se++)Te=q(fe,E,Se,R[Se],J),Te!==null&&(e&&Te.alternate!==null&&fe.delete(Te.key===null?Se:Te.key),A=i(Te,A,Se),Me===null?ge=Te:Me.sibling=Te,Me=Te);return e&&fe.forEach(function(dn){return t(E,dn)}),Re&&va(E,Se),ge}function be(E,A,R,J){if(R==null)throw Error(s(151));for(var ge=null,Me=null,fe=A,Se=A=0,Te=null,Ue=R.next();fe!==null&&!Ue.done;Se++,Ue=R.next()){fe.index>Se?(Te=fe,fe=null):Te=fe.sibling;var dn=U(E,fe,Ue.value,J);if(dn===null){fe===null&&(fe=Te);break}e&&fe&&dn.alternate===null&&t(E,fe),A=i(dn,A,Se),Me===null?ge=dn:Me.sibling=dn,Me=dn,fe=Te}if(Ue.done)return n(E,fe),Re&&va(E,Se),ge;if(fe===null){for(;!Ue.done;Se++,Ue=R.next())Ue=I(E,Ue.value,J),Ue!==null&&(A=i(Ue,A,Se),Me===null?ge=Ue:Me.sibling=Ue,Me=Ue);return Re&&va(E,Se),ge}for(fe=l(fe);!Ue.done;Se++,Ue=R.next())Ue=q(fe,E,Se,Ue.value,J),Ue!==null&&(e&&Ue.alternate!==null&&fe.delete(Ue.key===null?Se:Ue.key),A=i(Ue,A,Se),Me===null?ge=Ue:Me.sibling=Ue,Me=Ue);return e&&fe.forEach(function(Zg){return t(E,Zg)}),Re&&va(E,Se),ge}function Qe(E,A,R,J){if(typeof R=="object"&&R!==null&&R.type===T&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case F:e:{for(var ge=R.key;A!==null;){if(A.key===ge){if(ge=R.type,ge===T){if(A.tag===7){n(E,A.sibling),J=r(A,R.props.children),J.return=E,E=J;break e}}else if(A.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===me&&zn(ge)===A.type){n(E,A.sibling),J=r(A,R.props),Xl(J,R),J.return=E,E=J;break e}n(E,A);break}else t(E,A);A=A.sibling}R.type===T?(J=Nn(R.props.children,E.mode,J,R.key),J.return=E,E=J):(J=Kr(R.type,R.key,R.props,null,E.mode,J),Xl(J,R),J.return=E,E=J)}return m(E);case V:e:{for(ge=R.key;A!==null;){if(A.key===ge)if(A.tag===4&&A.stateNode.containerInfo===R.containerInfo&&A.stateNode.implementation===R.implementation){n(E,A.sibling),J=r(A,R.children||[]),J.return=E,E=J;break e}else{n(E,A);break}else t(E,A);A=A.sibling}J=Bs(R,E.mode,J),J.return=E,E=J}return m(E);case me:return R=zn(R),Qe(E,A,R,J)}if(he(R))return ue(E,A,R,J);if(Ce(R)){if(ge=Ce(R),typeof ge!="function")throw Error(s(150));return R=ge.call(R),be(E,A,R,J)}if(typeof R.then=="function")return Qe(E,A,ai(R),J);if(R.$$typeof===te)return Qe(E,A,Fr(E,R),J);ni(E,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,A!==null&&A.tag===6?(n(E,A.sibling),J=r(A,R),J.return=E,E=J):(n(E,A),J=Us(R,E.mode,J),J.return=E,E=J),m(E)):n(E,A)}return function(E,A,R,J){try{Pl=0;var ge=Qe(E,A,R,J);return nl=null,ge}catch(fe){if(fe===al||fe===ei)throw fe;var Me=qt(29,fe,null,E.mode);return Me.lanes=J,Me.return=E,Me}}}var kn=Fd(!0),Wd=Fd(!1),Qa=!1;function Ks(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Js(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $a(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(He&2)!==0){var r=l.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),l.pending=t,t=$r(e),Ud(e,null,n),t}return Zr(e,l,t,n),$r(e)}function Ql(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Pc(e,n)}}function Is(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var r=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?r=i=m:i=i.next=m,n=n.next}while(n!==null);i===null?r=i=t:i=i.next=t}else r=i=t;n={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Fs=!1;function Zl(){if(Fs){var e=tl;if(e!==null)throw e}}function $l(e,t,n,l){Fs=!1;var r=e.updateQueue;Qa=!1;var i=r.firstBaseUpdate,m=r.lastBaseUpdate,h=r.shared.pending;if(h!==null){r.shared.pending=null;var S=h,_=S.next;S.next=null,m===null?i=_:m.next=_,m=S;var X=e.alternate;X!==null&&(X=X.updateQueue,h=X.lastBaseUpdate,h!==m&&(h===null?X.firstBaseUpdate=_:h.next=_,X.lastBaseUpdate=S))}if(i!==null){var I=r.baseState;m=0,X=_=S=null,h=i;do{var U=h.lane&-536870913,q=U!==h.lane;if(q?(ke&U)===U:(l&U)===U){U!==0&&U===el&&(Fs=!0),X!==null&&(X=X.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var ue=e,be=h;U=t;var Qe=n;switch(be.tag){case 1:if(ue=be.payload,typeof ue=="function"){I=ue.call(Qe,I,U);break e}I=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=be.payload,U=typeof ue=="function"?ue.call(Qe,I,U):ue,U==null)break e;I=w({},I,U);break e;case 2:Qa=!0}}U=h.callback,U!==null&&(e.flags|=64,q&&(e.flags|=8192),q=r.callbacks,q===null?r.callbacks=[U]:q.push(U))}else q={lane:U,tag:h.tag,payload:h.payload,callback:h.callback,next:null},X===null?(_=X=q,S=I):X=X.next=q,m|=U;if(h=h.next,h===null){if(h=r.shared.pending,h===null)break;q=h,h=q.next,q.next=null,r.lastBaseUpdate=q,r.shared.pending=null}}while(!0);X===null&&(S=I),r.baseState=S,r.firstBaseUpdate=_,r.lastBaseUpdate=X,i===null&&(r.shared.lanes=0),Wa|=m,e.lanes=m,e.memoizedState=I}}function eu(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function tu(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)eu(n[e],t)}var ll=C(null),li=C(0);function au(e,t){e=Da,ie(li,e),ie(ll,t),Da=e|t.baseLanes}function Ws(){ie(li,Da),ie(ll,ll.current)}function eo(){Da=li.current,Z(ll),Z(li)}var Gt=C(null),ta=null;function Ka(e){var t=e.alternate;ie(ot,ot.current&1),ie(Gt,e),ta===null&&(t===null||ll.current!==null||t.memoizedState!==null)&&(ta=e)}function to(e){ie(ot,ot.current),ie(Gt,e),ta===null&&(ta=e)}function nu(e){e.tag===22?(ie(ot,ot.current),ie(Gt,e),ta===null&&(ta=e)):Ja()}function Ja(){ie(ot,ot.current),ie(Gt,Gt.current)}function Yt(e){Z(Gt),ta===e&&(ta=null),Z(ot)}var ot=C(0);function ri(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||oc(n)||cc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wa=0,we=null,Pe=null,ut=null,ii=!1,rl=!1,Tn=!1,si=0,Kl=0,il=null,Bh=0;function rt(){throw Error(s(321))}function ao(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ht(e[n],t[n]))return!1;return!0}function no(e,t,n,l,r,i){return wa=i,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?qu:yo,Tn=!1,i=n(l,r),Tn=!1,rl&&(i=ru(t,n,l,r)),lu(e),i}function lu(e){L.H=Fl;var t=Pe!==null&&Pe.next!==null;if(wa=0,ut=Pe=we=null,ii=!1,Kl=0,il=null,t)throw Error(s(300));e===null||ft||(e=e.dependencies,e!==null&&Ir(e)&&(ft=!0))}function ru(e,t,n,l){we=e;var r=0;do{if(rl&&(il=null),Kl=0,rl=!1,25<=r)throw Error(s(301));if(r+=1,ut=Pe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}L.H=Gu,i=t(n,l)}while(rl);return i}function Lh(){var e=L.H,t=e.useState()[0];return t=typeof t.then=="function"?Jl(t):t,e=e.useState()[0],(Pe!==null?Pe.memoizedState:null)!==e&&(we.flags|=1024),t}function lo(){var e=si!==0;return si=0,e}function ro(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function io(e){if(ii){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ii=!1}wa=0,ut=Pe=we=null,rl=!1,Kl=si=0,il=null}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?we.memoizedState=ut=e:ut=ut.next=e,ut}function ct(){if(Pe===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=ut===null?we.memoizedState:ut.next;if(t!==null)ut=t,Pe=e;else{if(e===null)throw we.alternate===null?Error(s(467)):Error(s(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},ut===null?we.memoizedState=ut=e:ut=ut.next=e}return ut}function oi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jl(e){var t=Kl;return Kl+=1,il===null&&(il=[]),e=Kd(il,e,t),t=we,(ut===null?t.memoizedState:ut.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?qu:yo),e}function ci(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Jl(e);if(e.$$typeof===te)return vt(e)}throw Error(s(438,String(e)))}function so(e){var t=null,n=we.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=we.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=oi(),we.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=Le;return t.index++,n}function Sa(e,t){return typeof t=="function"?t(e):t}function di(e){var t=ct();return oo(t,Pe,e)}function oo(e,t,n){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=n;var r=e.baseQueue,i=l.pending;if(i!==null){if(r!==null){var m=r.next;r.next=i.next,i.next=m}t.baseQueue=r=i,l.pending=null}if(i=e.baseState,r===null)e.memoizedState=i;else{t=r.next;var h=m=null,S=null,_=t,X=!1;do{var I=_.lane&-536870913;if(I!==_.lane?(ke&I)===I:(wa&I)===I){var U=_.revertLane;if(U===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),I===el&&(X=!0);else if((wa&U)===U){_=_.next,U===el&&(X=!0);continue}else I={lane:0,revertLane:_.revertLane,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},S===null?(h=S=I,m=i):S=S.next=I,we.lanes|=U,Wa|=U;I=_.action,Tn&&n(i,I),i=_.hasEagerState?_.eagerState:n(i,I)}else U={lane:I,revertLane:_.revertLane,gesture:_.gesture,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},S===null?(h=S=U,m=i):S=S.next=U,we.lanes|=I,Wa|=I;_=_.next}while(_!==null&&_!==t);if(S===null?m=i:S.next=h,!Ht(i,e.memoizedState)&&(ft=!0,X&&(n=tl,n!==null)))throw n;e.memoizedState=i,e.baseState=m,e.baseQueue=S,l.lastRenderedState=i}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function co(e){var t=ct(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var l=n.dispatch,r=n.pending,i=t.memoizedState;if(r!==null){n.pending=null;var m=r=r.next;do i=e(i,m.action),m=m.next;while(m!==r);Ht(i,t.memoizedState)||(ft=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,l]}function iu(e,t,n){var l=we,r=ct(),i=Re;if(i){if(n===void 0)throw Error(s(407));n=n()}else n=t();var m=!Ht((Pe||r).memoizedState,n);if(m&&(r.memoizedState=n,ft=!0),r=r.queue,mo(cu.bind(null,l,r,e),[e]),r.getSnapshot!==t||m||ut!==null&&ut.memoizedState.tag&1){if(l.flags|=2048,sl(9,{destroy:void 0},ou.bind(null,l,r,n,t),null),$e===null)throw Error(s(349));i||(wa&127)!==0||su(l,t,n)}return n}function su(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t=oi(),we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ou(e,t,n,l){t.value=n,t.getSnapshot=l,du(t)&&uu(e)}function cu(e,t,n){return n(function(){du(t)&&uu(e)})}function du(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ht(e,n)}catch{return!0}}function uu(e){var t=jn(e,2);t!==null&&_t(t,e,2)}function uo(e){var t=zt();if(typeof e=="function"){var n=e;if(e=n(),Tn){Ha(!0);try{n()}finally{Ha(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},t}function fu(e,t,n,l){return e.baseState=n,oo(e,Pe,typeof l=="function"?l:Sa)}function Hh(e,t,n,l,r){if(mi(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){i.listeners.push(m)}};L.T!==null?n(!0):i.isTransition=!1,l(i),n=t.pending,n===null?(i.next=t.pending=i,mu(t,i)):(i.next=n.next,t.pending=n.next=i)}}function mu(e,t){var n=t.action,l=t.payload,r=e.state;if(t.isTransition){var i=L.T,m={};L.T=m;try{var h=n(r,l),S=L.S;S!==null&&S(m,h),pu(e,t,h)}catch(_){fo(e,t,_)}finally{i!==null&&m.types!==null&&(i.types=m.types),L.T=i}}else try{i=n(r,l),pu(e,t,i)}catch(_){fo(e,t,_)}}function pu(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){hu(e,t,l)},function(l){return fo(e,t,l)}):hu(e,t,n)}function hu(e,t,n){t.status="fulfilled",t.value=n,gu(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,mu(e,n)))}function fo(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,gu(t),t=t.next;while(t!==l)}e.action=null}function gu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function xu(e,t){return t}function bu(e,t){if(Re){var n=$e.formState;if(n!==null){e:{var l=we;if(Re){if(Je){t:{for(var r=Je,i=ea;r.nodeType!==8;){if(!i){r=null;break t}if(r=aa(r.nextSibling),r===null){r=null;break t}}i=r.data,r=i==="F!"||i==="F"?r:null}if(r){Je=aa(r.nextSibling),l=r.data==="F!";break e}}Pa(l)}l=!1}l&&(t=n[0])}}return n=zt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xu,lastRenderedState:t},n.queue=l,n=Bu.bind(null,we,l),l.dispatch=n,l=uo(!1),i=bo.bind(null,we,!1,l.queue),l=zt(),r={state:t,dispatch:null,action:e,pending:null},l.queue=r,n=Hh.bind(null,we,r,i,n),r.dispatch=n,l.memoizedState=e,[t,n,!1]}function yu(e){var t=ct();return vu(t,Pe,e)}function vu(e,t,n){if(t=oo(e,t,xu)[0],e=di(Sa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Jl(t)}catch(m){throw m===al?ei:m}else l=t;t=ct();var r=t.queue,i=r.dispatch;return n!==t.memoizedState&&(we.flags|=2048,sl(9,{destroy:void 0},qh.bind(null,r,n),null)),[l,i,e]}function qh(e,t){e.action=t}function ju(e){var t=ct(),n=Pe;if(n!==null)return vu(t,n,e);ct(),t=t.memoizedState,n=ct();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function sl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=we.updateQueue,t===null&&(t=oi(),we.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function Nu(){return ct().memoizedState}function ui(e,t,n,l){var r=zt();we.flags|=e,r.memoizedState=sl(1|t,{destroy:void 0},n,l===void 0?null:l)}function fi(e,t,n,l){var r=ct();l=l===void 0?null:l;var i=r.memoizedState.inst;Pe!==null&&l!==null&&ao(l,Pe.memoizedState.deps)?r.memoizedState=sl(t,i,n,l):(we.flags|=e,r.memoizedState=sl(1|t,i,n,l))}function wu(e,t){ui(8390656,8,e,t)}function mo(e,t){fi(2048,8,e,t)}function Gh(e){we.flags|=4;var t=we.updateQueue;if(t===null)t=oi(),we.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Su(e){var t=ct().memoizedState;return Gh({ref:t,nextImpl:e}),function(){if((He&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Cu(e,t){return fi(4,2,e,t)}function Au(e,t){return fi(4,4,e,t)}function zu(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Eu(e,t,n){n=n!=null?n.concat([e]):null,fi(4,4,zu.bind(null,t,e),n)}function po(){}function ku(e,t){var n=ct();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&ao(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Tu(e,t){var n=ct();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&ao(t,l[1]))return l[0];if(l=e(),Tn){Ha(!0);try{e()}finally{Ha(!1)}}return n.memoizedState=[l,t],l}function ho(e,t,n){return n===void 0||(wa&1073741824)!==0&&(ke&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Rf(),we.lanes|=e,Wa|=e,n)}function Du(e,t,n,l){return Ht(n,t)?n:ll.current!==null?(e=ho(e,n,l),Ht(e,t)||(ft=!0),e):(wa&42)===0||(wa&1073741824)!==0&&(ke&261930)===0?(ft=!0,e.memoizedState=n):(e=Rf(),we.lanes|=e,Wa|=e,t)}function Ru(e,t,n,l,r){var i=ae.p;ae.p=i!==0&&8>i?i:8;var m=L.T,h={};L.T=h,bo(e,!1,t,n);try{var S=r(),_=L.S;if(_!==null&&_(h,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var X=Uh(S,l);Il(e,t,X,Xt(e))}else Il(e,t,l,Xt(e))}catch(I){Il(e,t,{then:function(){},status:"rejected",reason:I},Xt())}finally{ae.p=i,m!==null&&h.types!==null&&(m.types=h.types),L.T=m}}function Yh(){}function go(e,t,n,l){if(e.tag!==5)throw Error(s(476));var r=Ou(e).queue;Ru(e,r,t,de,n===null?Yh:function(){return _u(e),n(l)})}function Ou(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function _u(e){var t=Ou(e);t.next===null&&(t=e.alternate.memoizedState),Il(e,t.next.queue,{},Xt())}function xo(){return vt(pr)}function Mu(){return ct().memoizedState}function Uu(){return ct().memoizedState}function Vh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Xt();e=Za(n);var l=$a(t,e,n);l!==null&&(_t(l,t,n),Ql(l,t,n)),t={cache:Xs()},e.payload=t;return}t=t.return}}function Ph(e,t,n){var l=Xt();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},mi(e)?Lu(t,n):(n=_s(e,t,n,l),n!==null&&(_t(n,e,l),Hu(n,t,l)))}function Bu(e,t,n){var l=Xt();Il(e,t,n,l)}function Il(e,t,n,l){var r={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(mi(e))Lu(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var m=t.lastRenderedState,h=i(m,n);if(r.hasEagerState=!0,r.eagerState=h,Ht(h,m))return Zr(e,t,r,0),$e===null&&Qr(),!1}catch{}if(n=_s(e,t,r,l),n!==null)return _t(n,e,l),Hu(n,t,l),!0}return!1}function bo(e,t,n,l){if(l={lane:2,revertLane:Jo(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},mi(e)){if(t)throw Error(s(479))}else t=_s(e,n,l,2),t!==null&&_t(t,e,2)}function mi(e){var t=e.alternate;return e===we||t!==null&&t===we}function Lu(e,t){rl=ii=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hu(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Pc(e,n)}}var Fl={readContext:vt,use:ci,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useLayoutEffect:rt,useInsertionEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useSyncExternalStore:rt,useId:rt,useHostTransitionStatus:rt,useFormState:rt,useActionState:rt,useOptimistic:rt,useMemoCache:rt,useCacheRefresh:rt};Fl.useEffectEvent=rt;var qu={readContext:vt,use:ci,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:wu,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ui(4194308,4,zu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ui(4194308,4,e,t)},useInsertionEffect:function(e,t){ui(4,2,e,t)},useMemo:function(e,t){var n=zt();t=t===void 0?null:t;var l=e();if(Tn){Ha(!0);try{e()}finally{Ha(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=zt();if(n!==void 0){var r=n(t);if(Tn){Ha(!0);try{n(t)}finally{Ha(!1)}}}else r=t;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=Ph.bind(null,we,e),[l.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:function(e){e=uo(e);var t=e.queue,n=Bu.bind(null,we,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:po,useDeferredValue:function(e,t){var n=zt();return ho(n,e,t)},useTransition:function(){var e=uo(!1);return e=Ru.bind(null,we,e.queue,!0,!1),zt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=we,r=zt();if(Re){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),$e===null)throw Error(s(349));(ke&127)!==0||su(l,t,n)}r.memoizedState=n;var i={value:n,getSnapshot:t};return r.queue=i,wu(cu.bind(null,l,i,e),[e]),l.flags|=2048,sl(9,{destroy:void 0},ou.bind(null,l,i,n,t),null),n},useId:function(){var e=zt(),t=$e.identifierPrefix;if(Re){var n=ma,l=fa;n=(l&~(1<<32-Lt(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=si++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Bh++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:xo,useFormState:bu,useActionState:bu,useOptimistic:function(e){var t=zt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=bo.bind(null,we,!0,n),n.dispatch=t,[e,t]},useMemoCache:so,useCacheRefresh:function(){return zt().memoizedState=Vh.bind(null,we)},useEffectEvent:function(e){var t=zt(),n={impl:e};return t.memoizedState=n,function(){if((He&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},yo={readContext:vt,use:ci,useCallback:ku,useContext:vt,useEffect:mo,useImperativeHandle:Eu,useInsertionEffect:Cu,useLayoutEffect:Au,useMemo:Tu,useReducer:di,useRef:Nu,useState:function(){return di(Sa)},useDebugValue:po,useDeferredValue:function(e,t){var n=ct();return Du(n,Pe.memoizedState,e,t)},useTransition:function(){var e=di(Sa)[0],t=ct().memoizedState;return[typeof e=="boolean"?e:Jl(e),t]},useSyncExternalStore:iu,useId:Mu,useHostTransitionStatus:xo,useFormState:yu,useActionState:yu,useOptimistic:function(e,t){var n=ct();return fu(n,Pe,e,t)},useMemoCache:so,useCacheRefresh:Uu};yo.useEffectEvent=Su;var Gu={readContext:vt,use:ci,useCallback:ku,useContext:vt,useEffect:mo,useImperativeHandle:Eu,useInsertionEffect:Cu,useLayoutEffect:Au,useMemo:Tu,useReducer:co,useRef:Nu,useState:function(){return co(Sa)},useDebugValue:po,useDeferredValue:function(e,t){var n=ct();return Pe===null?ho(n,e,t):Du(n,Pe.memoizedState,e,t)},useTransition:function(){var e=co(Sa)[0],t=ct().memoizedState;return[typeof e=="boolean"?e:Jl(e),t]},useSyncExternalStore:iu,useId:Mu,useHostTransitionStatus:xo,useFormState:ju,useActionState:ju,useOptimistic:function(e,t){var n=ct();return Pe!==null?fu(n,Pe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:so,useCacheRefresh:Uu};Gu.useEffectEvent=Su;function vo(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jo={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Xt(),r=Za(l);r.payload=t,n!=null&&(r.callback=n),t=$a(e,r,l),t!==null&&(_t(t,e,l),Ql(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Xt(),r=Za(l);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=$a(e,r,l),t!==null&&(_t(t,e,l),Ql(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xt(),l=Za(n);l.tag=2,t!=null&&(l.callback=t),t=$a(e,l,n),t!==null&&(_t(t,e,n),Ql(t,e,n))}};function Yu(e,t,n,l,r,i,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,m):t.prototype&&t.prototype.isPureReactComponent?!Ll(n,l)||!Ll(r,i):!0}function Vu(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&jo.enqueueReplaceState(t,t.state,null)}function Dn(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function Pu(e){Xr(e)}function Xu(e){console.error(e)}function Qu(e){Xr(e)}function pi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Zu(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function No(e,t,n){return n=Za(n),n.tag=3,n.payload={element:null},n.callback=function(){pi(e,t)},n}function $u(e){return e=Za(e),e.tag=3,e}function Ku(e,t,n,l){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var i=l.value;e.payload=function(){return r(i)},e.callback=function(){Zu(t,n,l)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Zu(t,n,l),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var h=l.stack;this.componentDidCatch(l.value,{componentStack:h!==null?h:""})})}function Xh(e,t,n,l,r){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Wn(t,n,r,!0),n=Gt.current,n!==null){switch(n.tag){case 31:case 13:return ta===null?Ai():n.alternate===null&&it===0&&(it=3),n.flags&=-257,n.flags|=65536,n.lanes=r,l===ti?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),Zo(e,l,r)),!1;case 22:return n.flags|=65536,l===ti?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),Zo(e,l,r)),!1}throw Error(s(435,n.tag))}return Zo(e,l,r),Ai(),!1}if(Re)return t=Gt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,l!==qs&&(e=Error(s(422),{cause:l}),Gl(It(e,n)))):(l!==qs&&(t=Error(s(423),{cause:l}),Gl(It(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=It(l,n),r=No(e.stateNode,l,r),Is(e,r),it!==4&&(it=2)),!1;var i=Error(s(520),{cause:l});if(i=It(i,n),ir===null?ir=[i]:ir.push(i),it!==4&&(it=2),t===null)return!0;l=It(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=No(n.stateNode,l,e),Is(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(en===null||!en.has(i))))return n.flags|=65536,r&=-r,n.lanes|=r,r=$u(r),Ku(r,e,n,l),Is(n,r),!1}n=n.return}while(n!==null);return!1}var wo=Error(s(461)),ft=!1;function jt(e,t,n,l){t.child=e===null?Wd(t,null,n,l):kn(t,e.child,n,l)}function Ju(e,t,n,l,r){n=n.render;var i=t.ref;if("ref"in l){var m={};for(var h in l)h!=="ref"&&(m[h]=l[h])}else m=l;return Cn(t),l=no(e,t,n,m,i,r),h=lo(),e!==null&&!ft?(ro(e,t,r),Ca(e,t,r)):(Re&&h&&Ls(t),t.flags|=1,jt(e,t,l,r),t.child)}function Iu(e,t,n,l,r){if(e===null){var i=n.type;return typeof i=="function"&&!Ms(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Fu(e,t,i,l,r)):(e=Kr(n.type,null,l,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Do(e,r)){var m=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ll,n(m,l)&&e.ref===t.ref)return Ca(e,t,r)}return t.flags|=1,e=ya(i,l),e.ref=t.ref,e.return=t,t.child=e}function Fu(e,t,n,l,r){if(e!==null){var i=e.memoizedProps;if(Ll(i,l)&&e.ref===t.ref)if(ft=!1,t.pendingProps=l=i,Do(e,r))(e.flags&131072)!==0&&(ft=!0);else return t.lanes=e.lanes,Ca(e,t,r)}return So(e,t,n,l,r)}function Wu(e,t,n,l){var r=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~i}else l=0,t.child=null;return ef(e,t,i,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wr(t,i!==null?i.cachePool:null),i!==null?au(t,i):Ws(),nu(t);else return l=t.lanes=536870912,ef(e,t,i!==null?i.baseLanes|n:n,n,l)}else i!==null?(Wr(t,i.cachePool),au(t,i),Ja(),t.memoizedState=null):(e!==null&&Wr(t,null),Ws(),Ja());return jt(e,t,r,n),t.child}function Wl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ef(e,t,n,l,r){var i=Zs();return i=i===null?null:{parent:dt._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Wr(t,null),Ws(),nu(t),e!==null&&Wn(e,t,l,!0),t.childLanes=r,null}function hi(e,t){return t=xi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function tf(e,t,n){return kn(t,e.child,null,n),e=hi(t,t.pendingProps),e.flags|=2,Yt(t),t.memoizedState=null,e}function Qh(e,t,n){var l=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Re){if(l.mode==="hidden")return e=hi(t,l),t.lanes=536870912,Wl(null,e);if(to(t),(e=Je)?(e=pm(e,ea),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:fa,overflow:ma}:null,retryLane:536870912,hydrationErrors:null},n=Ld(e),n.return=t,t.child=n,yt=t,Je=null)):e=null,e===null)throw Pa(t);return t.lanes=536870912,null}return hi(t,l)}var i=e.memoizedState;if(i!==null){var m=i.dehydrated;if(to(t),r)if(t.flags&256)t.flags&=-257,t=tf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(ft||Wn(e,t,n,!1),r=(n&e.childLanes)!==0,ft||r){if(l=$e,l!==null&&(m=Xc(l,n),m!==0&&m!==i.retryLane))throw i.retryLane=m,jn(e,m),_t(l,e,m),wo;Ai(),t=tf(e,t,n)}else e=i.treeContext,Je=aa(m.nextSibling),yt=t,Re=!0,Va=null,ea=!1,e!==null&&Gd(t,e),t=hi(t,l),t.flags|=4096;return t}return e=ya(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function So(e,t,n,l,r){return Cn(t),n=no(e,t,n,l,void 0,r),l=lo(),e!==null&&!ft?(ro(e,t,r),Ca(e,t,r)):(Re&&l&&Ls(t),t.flags|=1,jt(e,t,n,r),t.child)}function af(e,t,n,l,r,i){return Cn(t),t.updateQueue=null,n=ru(t,l,n,r),lu(e),l=lo(),e!==null&&!ft?(ro(e,t,i),Ca(e,t,i)):(Re&&l&&Ls(t),t.flags|=1,jt(e,t,n,i),t.child)}function nf(e,t,n,l,r){if(Cn(t),t.stateNode===null){var i=Kn,m=n.contextType;typeof m=="object"&&m!==null&&(i=vt(m)),i=new n(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=jo,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Ks(t),m=n.contextType,i.context=typeof m=="object"&&m!==null?vt(m):Kn,i.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(vo(t,n,m,l),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(m=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),m!==i.state&&jo.enqueueReplaceState(i,i.state,null),$l(t,l,i,r),Zl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var h=t.memoizedProps,S=Dn(n,h);i.props=S;var _=i.context,X=n.contextType;m=Kn,typeof X=="object"&&X!==null&&(m=vt(X));var I=n.getDerivedStateFromProps;X=typeof I=="function"||typeof i.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,X||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(h||_!==m)&&Vu(t,i,l,m),Qa=!1;var U=t.memoizedState;i.state=U,$l(t,l,i,r),Zl(),_=t.memoizedState,h||U!==_||Qa?(typeof I=="function"&&(vo(t,n,I,l),_=t.memoizedState),(S=Qa||Yu(t,n,S,l,U,_,m))?(X||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=_),i.props=l,i.state=_,i.context=m,l=S):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Js(e,t),m=t.memoizedProps,X=Dn(n,m),i.props=X,I=t.pendingProps,U=i.context,_=n.contextType,S=Kn,typeof _=="object"&&_!==null&&(S=vt(_)),h=n.getDerivedStateFromProps,(_=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(m!==I||U!==S)&&Vu(t,i,l,S),Qa=!1,U=t.memoizedState,i.state=U,$l(t,l,i,r),Zl();var q=t.memoizedState;m!==I||U!==q||Qa||e!==null&&e.dependencies!==null&&Ir(e.dependencies)?(typeof h=="function"&&(vo(t,n,h,l),q=t.memoizedState),(X=Qa||Yu(t,n,X,l,U,q,S)||e!==null&&e.dependencies!==null&&Ir(e.dependencies))?(_||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,q,S),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,q,S)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||m===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=q),i.props=l,i.state=q,i.context=S,l=X):(typeof i.componentDidUpdate!="function"||m===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,gi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=kn(t,e.child,null,r),t.child=kn(t,null,n,r)):jt(e,t,n,r),t.memoizedState=i.state,e=t.child):e=Ca(e,t,r),e}function lf(e,t,n,l){return wn(),t.flags|=256,jt(e,t,n,l),t.child}var Co={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ao(e){return{baseLanes:e,cachePool:Zd()}}function zo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Pt),e}function rf(e,t,n){var l=t.pendingProps,r=!1,i=(t.flags&128)!==0,m;if((m=i)||(m=e!==null&&e.memoizedState===null?!1:(ot.current&2)!==0),m&&(r=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Re){if(r?Ka(t):Ja(),(e=Je)?(e=pm(e,ea),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:fa,overflow:ma}:null,retryLane:536870912,hydrationErrors:null},n=Ld(e),n.return=t,t.child=n,yt=t,Je=null)):e=null,e===null)throw Pa(t);return cc(e)?t.lanes=32:t.lanes=536870912,null}var h=l.children;return l=l.fallback,r?(Ja(),r=t.mode,h=xi({mode:"hidden",children:h},r),l=Nn(l,r,n,null),h.return=t,l.return=t,h.sibling=l,t.child=h,l=t.child,l.memoizedState=Ao(n),l.childLanes=zo(e,m,n),t.memoizedState=Co,Wl(null,l)):(Ka(t),Eo(t,h))}var S=e.memoizedState;if(S!==null&&(h=S.dehydrated,h!==null)){if(i)t.flags&256?(Ka(t),t.flags&=-257,t=ko(e,t,n)):t.memoizedState!==null?(Ja(),t.child=e.child,t.flags|=128,t=null):(Ja(),h=l.fallback,r=t.mode,l=xi({mode:"visible",children:l.children},r),h=Nn(h,r,n,null),h.flags|=2,l.return=t,h.return=t,l.sibling=h,t.child=l,kn(t,e.child,null,n),l=t.child,l.memoizedState=Ao(n),l.childLanes=zo(e,m,n),t.memoizedState=Co,t=Wl(null,l));else if(Ka(t),cc(h)){if(m=h.nextSibling&&h.nextSibling.dataset,m)var _=m.dgst;m=_,l=Error(s(419)),l.stack="",l.digest=m,Gl({value:l,source:null,stack:null}),t=ko(e,t,n)}else if(ft||Wn(e,t,n,!1),m=(n&e.childLanes)!==0,ft||m){if(m=$e,m!==null&&(l=Xc(m,n),l!==0&&l!==S.retryLane))throw S.retryLane=l,jn(e,l),_t(m,e,l),wo;oc(h)||Ai(),t=ko(e,t,n)}else oc(h)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,Je=aa(h.nextSibling),yt=t,Re=!0,Va=null,ea=!1,e!==null&&Gd(t,e),t=Eo(t,l.children),t.flags|=4096);return t}return r?(Ja(),h=l.fallback,r=t.mode,S=e.child,_=S.sibling,l=ya(S,{mode:"hidden",children:l.children}),l.subtreeFlags=S.subtreeFlags&65011712,_!==null?h=ya(_,h):(h=Nn(h,r,n,null),h.flags|=2),h.return=t,l.return=t,l.sibling=h,t.child=l,Wl(null,l),l=t.child,h=e.child.memoizedState,h===null?h=Ao(n):(r=h.cachePool,r!==null?(S=dt._currentValue,r=r.parent!==S?{parent:S,pool:S}:r):r=Zd(),h={baseLanes:h.baseLanes|n,cachePool:r}),l.memoizedState=h,l.childLanes=zo(e,m,n),t.memoizedState=Co,Wl(e.child,l)):(Ka(t),n=e.child,e=n.sibling,n=ya(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function Eo(e,t){return t=xi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function xi(e,t){return e=qt(22,e,null,t),e.lanes=0,e}function ko(e,t,n){return kn(t,e.child,null,n),e=Eo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sf(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Vs(e.return,t,n)}function To(e,t,n,l,r,i){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:r,treeForkCount:i}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=n,m.tailMode=r,m.treeForkCount=i)}function of(e,t,n){var l=t.pendingProps,r=l.revealOrder,i=l.tail;l=l.children;var m=ot.current,h=(m&2)!==0;if(h?(m=m&1|2,t.flags|=128):m&=1,ie(ot,m),jt(e,t,l,n),l=Re?ql:0,!h&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sf(e,n,t);else if(e.tag===19)sf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&ri(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),To(t,!1,r,n,i,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&ri(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}To(t,!0,n,null,i,l);break;case"together":To(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Ca(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Wn(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=ya(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ya(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Do(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ir(e)))}function Zh(e,t,n){switch(t.tag){case 3:Ae(t,t.stateNode.containerInfo),Xa(t,dt,e.memoizedState.cache),wn();break;case 27:case 5:z(t);break;case 4:Ae(t,t.stateNode.containerInfo);break;case 10:Xa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,to(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Ka(t),t.flags|=128,null):(n&t.child.childLanes)!==0?rf(e,t,n):(Ka(t),e=Ca(e,t,n),e!==null?e.sibling:null);Ka(t);break;case 19:var r=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Wn(e,t,n,!1),l=(n&t.childLanes)!==0),r){if(l)return of(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ie(ot,ot.current),l)break;return null;case 22:return t.lanes=0,Wu(e,t,n,t.pendingProps);case 24:Xa(t,dt,e.memoizedState.cache)}return Ca(e,t,n)}function cf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ft=!0;else{if(!Do(e,n)&&(t.flags&128)===0)return ft=!1,Zh(e,t,n);ft=(e.flags&131072)!==0}else ft=!1,Re&&(t.flags&1048576)!==0&&qd(t,ql,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=zn(t.elementType),t.type=e,typeof e=="function")Ms(e)?(l=Dn(e,l),t.tag=1,t=nf(null,t,e,l,n)):(t.tag=0,t=So(null,t,e,l,n));else{if(e!=null){var r=e.$$typeof;if(r===le){t.tag=11,t=Ju(null,t,e,l,n);break e}else if(r===Q){t.tag=14,t=Iu(null,t,e,l,n);break e}}throw t=ee(e)||e,Error(s(306,t,""))}}return t;case 0:return So(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,r=Dn(l,t.pendingProps),nf(e,t,l,r,n);case 3:e:{if(Ae(t,t.stateNode.containerInfo),e===null)throw Error(s(387));l=t.pendingProps;var i=t.memoizedState;r=i.element,Js(e,t),$l(t,l,null,n);var m=t.memoizedState;if(l=m.cache,Xa(t,dt,l),l!==i.cache&&Ps(t,[dt],n,!0),Zl(),l=m.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=lf(e,t,l,n);break e}else if(l!==r){r=It(Error(s(424)),t),Gl(r),t=lf(e,t,l,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Je=aa(e.firstChild),yt=t,Re=!0,Va=null,ea=!0,n=Wd(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wn(),l===r){t=Ca(e,t,n);break e}jt(e,t,l,n)}t=t.child}return t;case 26:return gi(e,t),e===null?(n=vm(t.type,null,t.pendingProps,null))?t.memoizedState=n:Re||(n=t.type,e=t.pendingProps,l=Oi($.current).createElement(n),l[bt]=t,l[Et]=e,Nt(l,n,e),ht(l),t.stateNode=l):t.memoizedState=vm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return z(t),e===null&&Re&&(l=t.stateNode=xm(t.type,t.pendingProps,$.current),yt=t,ea=!0,r=Je,ln(t.type)?(dc=r,Je=aa(l.firstChild)):Je=r),jt(e,t,t.pendingProps.children,n),gi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Re&&((r=l=Je)&&(l=wg(l,t.type,t.pendingProps,ea),l!==null?(t.stateNode=l,yt=t,Je=aa(l.firstChild),ea=!1,r=!0):r=!1),r||Pa(t)),z(t),r=t.type,i=t.pendingProps,m=e!==null?e.memoizedProps:null,l=i.children,rc(r,i)?l=null:m!==null&&rc(r,m)&&(t.flags|=32),t.memoizedState!==null&&(r=no(e,t,Lh,null,null,n),pr._currentValue=r),gi(e,t),jt(e,t,l,n),t.child;case 6:return e===null&&Re&&((e=n=Je)&&(n=Sg(n,t.pendingProps,ea),n!==null?(t.stateNode=n,yt=t,Je=null,e=!0):e=!1),e||Pa(t)),null;case 13:return rf(e,t,n);case 4:return Ae(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=kn(t,null,l,n):jt(e,t,l,n),t.child;case 11:return Ju(e,t,t.type,t.pendingProps,n);case 7:return jt(e,t,t.pendingProps,n),t.child;case 8:return jt(e,t,t.pendingProps.children,n),t.child;case 12:return jt(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,Xa(t,t.type,l.value),jt(e,t,l.children,n),t.child;case 9:return r=t.type._context,l=t.pendingProps.children,Cn(t),r=vt(r),l=l(r),t.flags|=1,jt(e,t,l,n),t.child;case 14:return Iu(e,t,t.type,t.pendingProps,n);case 15:return Fu(e,t,t.type,t.pendingProps,n);case 19:return of(e,t,n);case 31:return Qh(e,t,n);case 22:return Wu(e,t,n,t.pendingProps);case 24:return Cn(t),l=vt(dt),e===null?(r=Zs(),r===null&&(r=$e,i=Xs(),r.pooledCache=i,i.refCount++,i!==null&&(r.pooledCacheLanes|=n),r=i),t.memoizedState={parent:l,cache:r},Ks(t),Xa(t,dt,r)):((e.lanes&n)!==0&&(Js(e,t),$l(t,null,null,n),Zl()),r=e.memoizedState,i=t.memoizedState,r.parent!==l?(r={parent:l,cache:l},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Xa(t,dt,l)):(l=i.cache,Xa(t,dt,l),l!==r.cache&&Ps(t,[dt],n,!0))),jt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Aa(e){e.flags|=4}function Ro(e,t,n,l,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Uf())e.flags|=8192;else throw En=ti,$s}else e.flags&=-16777217}function df(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Cm(t))if(Uf())e.flags|=8192;else throw En=ti,$s}function bi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Yc():536870912,e.lanes|=t,ul|=t)}function er(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function $h(e,t,n){var l=t.pendingProps;switch(Hs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return Ie(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Na(dt),K(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Fn(t)?Aa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Gs())),Ie(t),null;case 26:var r=t.type,i=t.memoizedState;return e===null?(Aa(t),i!==null?(Ie(t),df(t,i)):(Ie(t),Ro(t,r,null,l,n))):i?i!==e.memoizedState?(Aa(t),Ie(t),df(t,i)):(Ie(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Aa(t),Ie(t),Ro(t,r,e,l,n)),null;case 27:if(v(t),n=$.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Aa(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return Ie(t),null}e=se.current,Fn(t)?Yd(t):(e=xm(r,l,n),t.stateNode=e,Aa(t))}return Ie(t),null;case 5:if(v(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Aa(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return Ie(t),null}if(i=se.current,Fn(t))Yd(t);else{var m=Oi($.current);switch(i){case 1:i=m.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:i=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":i=m.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":i=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":i=m.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?m.createElement("select",{is:l.is}):m.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?m.createElement(r,{is:l.is}):m.createElement(r)}}i[bt]=t,i[Et]=l;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)i.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=i;e:switch(Nt(i,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Aa(t)}}return Ie(t),Ro(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Aa(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(s(166));if(e=$.current,Fn(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,r=yt,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[bt]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||im(e.nodeValue,n)),e||Pa(t,!0)}else e=Oi(e).createTextNode(l),e[bt]=t,t.stateNode=e}return Ie(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=Fn(t),n!==null){if(e===null){if(!l)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[bt]=t}else wn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ie(t),e=!1}else n=Gs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Yt(t),t):(Yt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Ie(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Fn(t),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(s(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(s(317));r[bt]=t}else wn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ie(t),r=!1}else r=Gs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Yt(t),t):(Yt(t),null)}return Yt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==r&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),bi(t,t.updateQueue),Ie(t),null);case 4:return K(),e===null&&ec(t.stateNode.containerInfo),Ie(t),null;case 10:return Na(t.type),Ie(t),null;case 19:if(Z(ot),l=t.memoizedState,l===null)return Ie(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)er(l,!1);else{if(it!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ri(e),i!==null){for(t.flags|=128,er(l,!1),e=i.updateQueue,t.updateQueue=e,bi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Bd(n,e),n=n.sibling;return ie(ot,ot.current&1|2),Re&&va(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&xt()>wi&&(t.flags|=128,r=!0,er(l,!1),t.lanes=4194304)}else{if(!r)if(e=ri(i),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,bi(t,e),er(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Re)return Ie(t),null}else 2*xt()-l.renderingStartTime>wi&&n!==536870912&&(t.flags|=128,r=!0,er(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=xt(),e.sibling=null,n=ot.current,ie(ot,r?n&1|2:n&1),Re&&va(t,l.treeForkCount),e):(Ie(t),null);case 22:case 23:return Yt(t),eo(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),n=t.updateQueue,n!==null&&bi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&Z(An),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Na(dt),Ie(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Kh(e,t){switch(Hs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Na(dt),K(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return v(t),null;case 31:if(t.memoizedState!==null){if(Yt(t),t.alternate===null)throw Error(s(340));wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Yt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(ot),null;case 4:return K(),null;case 10:return Na(t.type),null;case 22:case 23:return Yt(t),eo(),e!==null&&Z(An),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Na(dt),null;case 25:return null;default:return null}}function uf(e,t){switch(Hs(t),t.tag){case 3:Na(dt),K();break;case 26:case 27:case 5:v(t);break;case 4:K();break;case 31:t.memoizedState!==null&&Yt(t);break;case 13:Yt(t);break;case 19:Z(ot);break;case 10:Na(t.type);break;case 22:case 23:Yt(t),eo(),e!==null&&Z(An);break;case 24:Na(dt)}}function tr(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var r=l.next;n=r;do{if((n.tag&e)===e){l=void 0;var i=n.create,m=n.inst;l=i(),m.destroy=l}n=n.next}while(n!==r)}}catch(h){Ye(t,t.return,h)}}function Ia(e,t,n){try{var l=t.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var i=r.next;l=i;do{if((l.tag&e)===e){var m=l.inst,h=m.destroy;if(h!==void 0){m.destroy=void 0,r=t;var S=n,_=h;try{_()}catch(X){Ye(r,S,X)}}}l=l.next}while(l!==i)}}catch(X){Ye(t,t.return,X)}}function ff(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{tu(t,n)}catch(l){Ye(e,e.return,l)}}}function mf(e,t,n){n.props=Dn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Ye(e,t,l)}}function ar(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(r){Ye(e,t,r)}}function pa(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(r){Ye(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Ye(e,t,r)}else n.current=null}function pf(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(r){Ye(e,e.return,r)}}function Oo(e,t,n){try{var l=e.stateNode;xg(l,e.type,n,t),l[Et]=t}catch(r){Ye(e,e.return,r)}}function hf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ln(e.type)||e.tag===4}function _o(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ln(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mo(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xa));else if(l!==4&&(l===27&&ln(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Mo(e,t,n),e=e.sibling;e!==null;)Mo(e,t,n),e=e.sibling}function yi(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&ln(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(yi(e,t,n),e=e.sibling;e!==null;)yi(e,t,n),e=e.sibling}function gf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Nt(t,l,n),t[bt]=e,t[Et]=n}catch(i){Ye(e,e.return,i)}}var za=!1,mt=!1,Uo=!1,xf=typeof WeakSet=="function"?WeakSet:Set,gt=null;function Jh(e,t){if(e=e.containerInfo,nc=qi,e=Ed(e),Es(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var r=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var m=0,h=-1,S=-1,_=0,X=0,I=e,U=null;t:for(;;){for(var q;I!==n||r!==0&&I.nodeType!==3||(h=m+r),I!==i||l!==0&&I.nodeType!==3||(S=m+l),I.nodeType===3&&(m+=I.nodeValue.length),(q=I.firstChild)!==null;)U=I,I=q;for(;;){if(I===e)break t;if(U===n&&++_===r&&(h=m),U===i&&++X===l&&(S=m),(q=I.nextSibling)!==null)break;I=U,U=I.parentNode}I=q}n=h===-1||S===-1?null:{start:h,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(lc={focusedElem:e,selectionRange:n},qi=!1,gt=t;gt!==null;)if(t=gt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,gt=e;else for(;gt!==null;){switch(t=gt,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,r=i.memoizedProps,i=i.memoizedState,l=n.stateNode;try{var ue=Dn(n.type,r);e=l.getSnapshotBeforeUpdate(ue,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(be){Ye(n,n.return,be)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)sc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,gt=e;break}gt=t.return}}function bf(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:ka(e,n),l&4&&tr(5,n);break;case 1:if(ka(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){Ye(n,n.return,m)}else{var r=Dn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Ye(n,n.return,m)}}l&64&&ff(n),l&512&&ar(n,n.return);break;case 3:if(ka(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{tu(e,t)}catch(m){Ye(n,n.return,m)}}break;case 27:t===null&&l&4&&gf(n);case 26:case 5:ka(e,n),t===null&&l&4&&pf(n),l&512&&ar(n,n.return);break;case 12:ka(e,n);break;case 31:ka(e,n),l&4&&jf(e,n);break;case 13:ka(e,n),l&4&&Nf(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=rg.bind(null,n),Cg(e,n))));break;case 22:if(l=n.memoizedState!==null||za,!l){t=t!==null&&t.memoizedState!==null||mt,r=za;var i=mt;za=l,(mt=t)&&!i?Ta(e,n,(n.subtreeFlags&8772)!==0):ka(e,n),za=r,mt=i}break;case 30:break;default:ka(e,n)}}function yf(e){var t=e.alternate;t!==null&&(e.alternate=null,yf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&us(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Tt=!1;function Ea(e,t,n){for(n=n.child;n!==null;)vf(e,t,n),n=n.sibling}function vf(e,t,n){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Al,n)}catch{}switch(n.tag){case 26:mt||pa(n,t),Ea(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:mt||pa(n,t);var l=We,r=Tt;ln(n.type)&&(We=n.stateNode,Tt=!1),Ea(e,t,n),ur(n.stateNode),We=l,Tt=r;break;case 5:mt||pa(n,t);case 6:if(l=We,r=Tt,We=null,Ea(e,t,n),We=l,Tt=r,We!==null)if(Tt)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(n.stateNode)}catch(i){Ye(n,t,i)}else try{We.removeChild(n.stateNode)}catch(i){Ye(n,t,i)}break;case 18:We!==null&&(Tt?(e=We,fm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),yl(e)):fm(We,n.stateNode));break;case 4:l=We,r=Tt,We=n.stateNode.containerInfo,Tt=!0,Ea(e,t,n),We=l,Tt=r;break;case 0:case 11:case 14:case 15:Ia(2,n,t),mt||Ia(4,n,t),Ea(e,t,n);break;case 1:mt||(pa(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&mf(n,t,l)),Ea(e,t,n);break;case 21:Ea(e,t,n);break;case 22:mt=(l=mt)||n.memoizedState!==null,Ea(e,t,n),mt=l;break;default:Ea(e,t,n)}}function jf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yl(e)}catch(n){Ye(t,t.return,n)}}}function Nf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yl(e)}catch(n){Ye(t,t.return,n)}}function Ih(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new xf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new xf),t;default:throw Error(s(435,e.tag))}}function vi(e,t){var n=Ih(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var r=ig.bind(null,e,l);l.then(r,r)}})}function Dt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var r=n[l],i=e,m=t,h=m;e:for(;h!==null;){switch(h.tag){case 27:if(ln(h.type)){We=h.stateNode,Tt=!1;break e}break;case 5:We=h.stateNode,Tt=!1;break e;case 3:case 4:We=h.stateNode.containerInfo,Tt=!0;break e}h=h.return}if(We===null)throw Error(s(160));vf(i,m,r),We=null,Tt=!1,i=r.alternate,i!==null&&(i.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)wf(t,e),t=t.sibling}var oa=null;function wf(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Dt(t,e),Rt(e),l&4&&(Ia(3,e,e.return),tr(3,e),Ia(5,e,e.return));break;case 1:Dt(t,e),Rt(e),l&512&&(mt||n===null||pa(n,n.return)),l&64&&za&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var r=oa;if(Dt(t,e),Rt(e),l&512&&(mt||n===null||pa(n,n.return)),l&4){var i=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(l){case"title":i=r.getElementsByTagName("title")[0],(!i||i[kl]||i[bt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=r.createElement(l),r.head.insertBefore(i,r.querySelector("head > title"))),Nt(i,l,n),i[bt]=e,ht(i),l=i;break e;case"link":var m=wm("link","href",r).get(l+(n.href||""));if(m){for(var h=0;h<m.length;h++)if(i=m[h],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(h,1);break t}}i=r.createElement(l),Nt(i,l,n),r.head.appendChild(i);break;case"meta":if(m=wm("meta","content",r).get(l+(n.content||""))){for(h=0;h<m.length;h++)if(i=m[h],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(h,1);break t}}i=r.createElement(l),Nt(i,l,n),r.head.appendChild(i);break;default:throw Error(s(468,l))}i[bt]=e,ht(i),l=i}e.stateNode=l}else Sm(r,e.type,e.stateNode);else e.stateNode=Nm(r,l,e.memoizedProps);else i!==l?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,l===null?Sm(r,e.type,e.stateNode):Nm(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Oo(e,e.memoizedProps,n.memoizedProps)}break;case 27:Dt(t,e),Rt(e),l&512&&(mt||n===null||pa(n,n.return)),n!==null&&l&4&&Oo(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Dt(t,e),Rt(e),l&512&&(mt||n===null||pa(n,n.return)),e.flags&32){r=e.stateNode;try{Yn(r,"")}catch(ue){Ye(e,e.return,ue)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,Oo(e,r,n!==null?n.memoizedProps:r)),l&1024&&(Uo=!0);break;case 6:if(Dt(t,e),Rt(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(ue){Ye(e,e.return,ue)}}break;case 3:if(Ui=null,r=oa,oa=_i(t.containerInfo),Dt(t,e),oa=r,Rt(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{yl(t.containerInfo)}catch(ue){Ye(e,e.return,ue)}Uo&&(Uo=!1,Sf(e));break;case 4:l=oa,oa=_i(e.stateNode.containerInfo),Dt(t,e),Rt(e),oa=l;break;case 12:Dt(t,e),Rt(e);break;case 31:Dt(t,e),Rt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vi(e,l)));break;case 13:Dt(t,e),Rt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ni=xt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vi(e,l)));break;case 22:r=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,_=za,X=mt;if(za=_||r,mt=X||S,Dt(t,e),mt=X,za=_,Rt(e),l&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||S||za||mt||Rn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(i=S.stateNode,r)m=i.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{h=S.stateNode;var I=S.memoizedProps.style,U=I!=null&&I.hasOwnProperty("display")?I.display:null;h.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(ue){Ye(S,S.return,ue)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=r?"":S.memoizedProps}catch(ue){Ye(S,S.return,ue)}}}else if(t.tag===18){if(n===null){S=t;try{var q=S.stateNode;r?mm(q,!0):mm(S.stateNode,!1)}catch(ue){Ye(S,S.return,ue)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,vi(e,n))));break;case 19:Dt(t,e),Rt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vi(e,l)));break;case 30:break;case 21:break;default:Dt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(hf(l)){n=l;break}l=l.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var r=n.stateNode,i=_o(e);yi(e,i,r);break;case 5:var m=n.stateNode;n.flags&32&&(Yn(m,""),n.flags&=-33);var h=_o(e);yi(e,h,m);break;case 3:case 4:var S=n.stateNode.containerInfo,_=_o(e);Mo(e,_,S);break;default:throw Error(s(161))}}catch(X){Ye(e,e.return,X)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ka(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)bf(e,t.alternate,t),t=t.sibling}function Rn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ia(4,t,t.return),Rn(t);break;case 1:pa(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&mf(t,t.return,n),Rn(t);break;case 27:ur(t.stateNode);case 26:case 5:pa(t,t.return),Rn(t);break;case 22:t.memoizedState===null&&Rn(t);break;case 30:Rn(t);break;default:Rn(t)}e=e.sibling}}function Ta(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,r=e,i=t,m=i.flags;switch(i.tag){case 0:case 11:case 15:Ta(r,i,n),tr(4,i);break;case 1:if(Ta(r,i,n),l=i,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(_){Ye(l,l.return,_)}if(l=i,r=l.updateQueue,r!==null){var h=l.stateNode;try{var S=r.shared.hiddenCallbacks;if(S!==null)for(r.shared.hiddenCallbacks=null,r=0;r<S.length;r++)eu(S[r],h)}catch(_){Ye(l,l.return,_)}}n&&m&64&&ff(i),ar(i,i.return);break;case 27:gf(i);case 26:case 5:Ta(r,i,n),n&&l===null&&m&4&&pf(i),ar(i,i.return);break;case 12:Ta(r,i,n);break;case 31:Ta(r,i,n),n&&m&4&&jf(r,i);break;case 13:Ta(r,i,n),n&&m&4&&Nf(r,i);break;case 22:i.memoizedState===null&&Ta(r,i,n),ar(i,i.return);break;case 30:break;default:Ta(r,i,n)}t=t.sibling}}function Bo(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Yl(n))}function Lo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yl(e))}function ca(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Cf(e,t,n,l),t=t.sibling}function Cf(e,t,n,l){var r=t.flags;switch(t.tag){case 0:case 11:case 15:ca(e,t,n,l),r&2048&&tr(9,t);break;case 1:ca(e,t,n,l);break;case 3:ca(e,t,n,l),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yl(e)));break;case 12:if(r&2048){ca(e,t,n,l),e=t.stateNode;try{var i=t.memoizedProps,m=i.id,h=i.onPostCommit;typeof h=="function"&&h(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Ye(t,t.return,S)}}else ca(e,t,n,l);break;case 31:ca(e,t,n,l);break;case 13:ca(e,t,n,l);break;case 23:break;case 22:i=t.stateNode,m=t.alternate,t.memoizedState!==null?i._visibility&2?ca(e,t,n,l):nr(e,t):i._visibility&2?ca(e,t,n,l):(i._visibility|=2,ol(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Bo(m,t);break;case 24:ca(e,t,n,l),r&2048&&Lo(t.alternate,t);break;default:ca(e,t,n,l)}}function ol(e,t,n,l,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,m=t,h=n,S=l,_=m.flags;switch(m.tag){case 0:case 11:case 15:ol(i,m,h,S,r),tr(8,m);break;case 23:break;case 22:var X=m.stateNode;m.memoizedState!==null?X._visibility&2?ol(i,m,h,S,r):nr(i,m):(X._visibility|=2,ol(i,m,h,S,r)),r&&_&2048&&Bo(m.alternate,m);break;case 24:ol(i,m,h,S,r),r&&_&2048&&Lo(m.alternate,m);break;default:ol(i,m,h,S,r)}t=t.sibling}}function nr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,r=l.flags;switch(l.tag){case 22:nr(n,l),r&2048&&Bo(l.alternate,l);break;case 24:nr(n,l),r&2048&&Lo(l.alternate,l);break;default:nr(n,l)}t=t.sibling}}var lr=8192;function cl(e,t,n){if(e.subtreeFlags&lr)for(e=e.child;e!==null;)Af(e,t,n),e=e.sibling}function Af(e,t,n){switch(e.tag){case 26:cl(e,t,n),e.flags&lr&&e.memoizedState!==null&&Bg(n,oa,e.memoizedState,e.memoizedProps);break;case 5:cl(e,t,n);break;case 3:case 4:var l=oa;oa=_i(e.stateNode.containerInfo),cl(e,t,n),oa=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=lr,lr=16777216,cl(e,t,n),lr=l):cl(e,t,n));break;default:cl(e,t,n)}}function zf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function rr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];gt=l,kf(l,e)}zf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ef(e),e=e.sibling}function Ef(e){switch(e.tag){case 0:case 11:case 15:rr(e),e.flags&2048&&Ia(9,e,e.return);break;case 3:rr(e);break;case 12:rr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ji(e)):rr(e);break;default:rr(e)}}function ji(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];gt=l,kf(l,e)}zf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ia(8,t,t.return),ji(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ji(t));break;default:ji(t)}e=e.sibling}}function kf(e,t){for(;gt!==null;){var n=gt;switch(n.tag){case 0:case 11:case 15:Ia(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Yl(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,gt=l;else e:for(n=e;gt!==null;){l=gt;var r=l.sibling,i=l.return;if(yf(l),l===n){gt=null;break e}if(r!==null){r.return=i,gt=r;break e}gt=i}}}var Fh={getCacheForType:function(e){var t=vt(dt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return vt(dt).controller.signal}},Wh=typeof WeakMap=="function"?WeakMap:Map,He=0,$e=null,ze=null,ke=0,Ge=0,Vt=null,Fa=!1,dl=!1,Ho=!1,Da=0,it=0,Wa=0,On=0,qo=0,Pt=0,ul=0,ir=null,Ot=null,Go=!1,Ni=0,Tf=0,wi=1/0,Si=null,en=null,pt=0,tn=null,fl=null,Ra=0,Yo=0,Vo=null,Df=null,sr=0,Po=null;function Xt(){return(He&2)!==0&&ke!==0?ke&-ke:L.T!==null?Jo():Qc()}function Rf(){if(Pt===0)if((ke&536870912)===0||Re){var e=Rr;Rr<<=1,(Rr&3932160)===0&&(Rr=262144),Pt=e}else Pt=536870912;return e=Gt.current,e!==null&&(e.flags|=32),Pt}function _t(e,t,n){(e===$e&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)&&(ml(e,0),an(e,ke,Pt,!1)),El(e,n),((He&2)===0||e!==$e)&&(e===$e&&((He&2)===0&&(On|=n),it===4&&an(e,ke,Pt,!1)),ha(e))}function Of(e,t,n){if((He&6)!==0)throw Error(s(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||zl(e,t),r=l?ag(e,t):Qo(e,t,!0),i=l;do{if(r===0){dl&&!l&&an(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!eg(n)){r=Qo(e,t,!1),i=!1;continue}if(r===2){if(i=t,e.errorRecoveryDisabledLanes&i)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var h=e;r=ir;var S=h.current.memoizedState.isDehydrated;if(S&&(ml(h,m).flags|=256),m=Qo(h,m,!1),m!==2){if(Ho&&!S){h.errorRecoveryDisabledLanes|=i,On|=i,r=4;break e}i=Ot,Ot=r,i!==null&&(Ot===null?Ot=i:Ot.push.apply(Ot,i))}r=m}if(i=!1,r!==2)continue}}if(r===1){ml(e,0),an(e,t,0,!0);break}e:{switch(l=e,i=r,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:an(l,t,Pt,!Fa);break e;case 2:Ot=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(r=Ni+300-xt(),10<r)){if(an(l,t,Pt,!Fa),_r(l,0,!0)!==0)break e;Ra=t,l.timeoutHandle=dm(_f.bind(null,l,n,Ot,Si,Go,t,Pt,On,ul,Fa,i,"Throttled",-0,0),r);break e}_f(l,n,Ot,Si,Go,t,Pt,On,ul,Fa,i,null,-0,0)}}break}while(!0);ha(e)}function _f(e,t,n,l,r,i,m,h,S,_,X,I,U,q){if(e.timeoutHandle=-1,I=t.subtreeFlags,I&8192||(I&16785408)===16785408){I={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:xa},Af(t,i,I);var ue=(i&62914560)===i?Ni-xt():(i&4194048)===i?Tf-xt():0;if(ue=Lg(I,ue),ue!==null){Ra=i,e.cancelPendingCommit=ue(Yf.bind(null,e,t,i,n,l,r,m,h,S,X,I,null,U,q)),an(e,i,m,!_);return}}Yf(e,t,i,n,l,r,m,h,S)}function eg(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var r=n[l],i=r.getSnapshot;r=r.value;try{if(!Ht(i(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t,n,l){t&=~qo,t&=~On,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var r=t;0<r;){var i=31-Lt(r),m=1<<i;l[i]=-1,r&=~m}n!==0&&Vc(e,n,t)}function Ci(){return(He&6)===0?(or(0),!1):!0}function Xo(){if(ze!==null){if(Ge===0)var e=ze.return;else e=ze,ja=Sn=null,io(e),nl=null,Pl=0,e=ze;for(;e!==null;)uf(e.alternate,e),e=e.return;ze=null}}function ml(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,vg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ra=0,Xo(),$e=e,ze=n=ya(e.current,null),ke=t,Ge=0,Vt=null,Fa=!1,dl=zl(e,t),Ho=!1,ul=Pt=qo=On=Wa=it=0,Ot=ir=null,Go=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var r=31-Lt(l),i=1<<r;t|=e[r],l&=~i}return Da=t,Qr(),n}function Mf(e,t){we=null,L.H=Fl,t===al||t===ei?(t=Jd(),Ge=3):t===$s?(t=Jd(),Ge=4):Ge=t===wo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Vt=t,ze===null&&(it=1,pi(e,It(t,e.current)))}function Uf(){var e=Gt.current;return e===null?!0:(ke&4194048)===ke?ta===null:(ke&62914560)===ke||(ke&536870912)!==0?e===ta:!1}function Bf(){var e=L.H;return L.H=Fl,e===null?Fl:e}function Lf(){var e=L.A;return L.A=Fh,e}function Ai(){it=4,Fa||(ke&4194048)!==ke&&Gt.current!==null||(dl=!0),(Wa&134217727)===0&&(On&134217727)===0||$e===null||an($e,ke,Pt,!1)}function Qo(e,t,n){var l=He;He|=2;var r=Bf(),i=Lf();($e!==e||ke!==t)&&(Si=null,ml(e,t)),t=!1;var m=it;e:do try{if(Ge!==0&&ze!==null){var h=ze,S=Vt;switch(Ge){case 8:Xo(),m=6;break e;case 3:case 2:case 9:case 6:Gt.current===null&&(t=!0);var _=Ge;if(Ge=0,Vt=null,pl(e,h,S,_),n&&dl){m=0;break e}break;default:_=Ge,Ge=0,Vt=null,pl(e,h,S,_)}}tg(),m=it;break}catch(X){Mf(e,X)}while(!0);return t&&e.shellSuspendCounter++,ja=Sn=null,He=l,L.H=r,L.A=i,ze===null&&($e=null,ke=0,Qr()),m}function tg(){for(;ze!==null;)Hf(ze)}function ag(e,t){var n=He;He|=2;var l=Bf(),r=Lf();$e!==e||ke!==t?(Si=null,wi=xt()+500,ml(e,t)):dl=zl(e,t);e:do try{if(Ge!==0&&ze!==null){t=ze;var i=Vt;t:switch(Ge){case 1:Ge=0,Vt=null,pl(e,t,i,1);break;case 2:case 9:if($d(i)){Ge=0,Vt=null,qf(t);break}t=function(){Ge!==2&&Ge!==9||$e!==e||(Ge=7),ha(e)},i.then(t,t);break e;case 3:Ge=7;break e;case 4:Ge=5;break e;case 7:$d(i)?(Ge=0,Vt=null,qf(t)):(Ge=0,Vt=null,pl(e,t,i,7));break;case 5:var m=null;switch(ze.tag){case 26:m=ze.memoizedState;case 5:case 27:var h=ze;if(m?Cm(m):h.stateNode.complete){Ge=0,Vt=null;var S=h.sibling;if(S!==null)ze=S;else{var _=h.return;_!==null?(ze=_,zi(_)):ze=null}break t}}Ge=0,Vt=null,pl(e,t,i,5);break;case 6:Ge=0,Vt=null,pl(e,t,i,6);break;case 8:Xo(),it=6;break e;default:throw Error(s(462))}}ng();break}catch(X){Mf(e,X)}while(!0);return ja=Sn=null,L.H=l,L.A=r,He=n,ze!==null?0:($e=null,ke=0,Qr(),it)}function ng(){for(;ze!==null&&!tt();)Hf(ze)}function Hf(e){var t=cf(e.alternate,e,Da);e.memoizedProps=e.pendingProps,t===null?zi(e):ze=t}function qf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=af(n,t,t.pendingProps,t.type,void 0,ke);break;case 11:t=af(n,t,t.pendingProps,t.type.render,t.ref,ke);break;case 5:io(t);default:uf(n,t),t=ze=Bd(t,Da),t=cf(n,t,Da)}e.memoizedProps=e.pendingProps,t===null?zi(e):ze=t}function pl(e,t,n,l){ja=Sn=null,io(t),nl=null,Pl=0;var r=t.return;try{if(Xh(e,r,t,n,ke)){it=1,pi(e,It(n,e.current)),ze=null;return}}catch(i){if(r!==null)throw ze=r,i;it=1,pi(e,It(n,e.current)),ze=null;return}t.flags&32768?(Re||l===1?e=!0:dl||(ke&536870912)!==0?e=!1:(Fa=e=!0,(l===2||l===9||l===3||l===6)&&(l=Gt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Gf(t,e)):zi(t)}function zi(e){var t=e;do{if((t.flags&32768)!==0){Gf(t,Fa);return}e=t.return;var n=$h(t.alternate,t,Da);if(n!==null){ze=n;return}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);it===0&&(it=5)}function Gf(e,t){do{var n=Kh(e.alternate,e);if(n!==null){n.flags&=32767,ze=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ze=e;return}ze=e=n}while(e!==null);it=6,ze=null}function Yf(e,t,n,l,r,i,m,h,S){e.cancelPendingCommit=null;do Ei();while(pt!==0);if((He&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=Os,Up(e,n,i,m,h,S),e===$e&&(ze=$e=null,ke=0),fl=t,tn=e,Ra=n,Yo=i,Vo=r,Df=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sg(Mn,function(){return Zf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=L.T,L.T=null,r=ae.p,ae.p=2,m=He,He|=4;try{Jh(e,t,n)}finally{He=m,ae.p=r,L.T=l}}pt=1,Vf(),Pf(),Xf()}}function Vf(){if(pt===1){pt=0;var e=tn,t=fl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=L.T,L.T=null;var l=ae.p;ae.p=2;var r=He;He|=4;try{wf(t,e);var i=lc,m=Ed(e.containerInfo),h=i.focusedElem,S=i.selectionRange;if(m!==h&&h&&h.ownerDocument&&zd(h.ownerDocument.documentElement,h)){if(S!==null&&Es(h)){var _=S.start,X=S.end;if(X===void 0&&(X=_),"selectionStart"in h)h.selectionStart=_,h.selectionEnd=Math.min(X,h.value.length);else{var I=h.ownerDocument||document,U=I&&I.defaultView||window;if(U.getSelection){var q=U.getSelection(),ue=h.textContent.length,be=Math.min(S.start,ue),Qe=S.end===void 0?be:Math.min(S.end,ue);!q.extend&&be>Qe&&(m=Qe,Qe=be,be=m);var E=Ad(h,be),A=Ad(h,Qe);if(E&&A&&(q.rangeCount!==1||q.anchorNode!==E.node||q.anchorOffset!==E.offset||q.focusNode!==A.node||q.focusOffset!==A.offset)){var R=I.createRange();R.setStart(E.node,E.offset),q.removeAllRanges(),be>Qe?(q.addRange(R),q.extend(A.node,A.offset)):(R.setEnd(A.node,A.offset),q.addRange(R))}}}}for(I=[],q=h;q=q.parentNode;)q.nodeType===1&&I.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<I.length;h++){var J=I[h];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}qi=!!nc,lc=nc=null}finally{He=r,ae.p=l,L.T=n}}e.current=t,pt=2}}function Pf(){if(pt===2){pt=0;var e=tn,t=fl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=L.T,L.T=null;var l=ae.p;ae.p=2;var r=He;He|=4;try{bf(e,t.alternate,t)}finally{He=r,ae.p=l,L.T=n}}pt=3}}function Xf(){if(pt===4||pt===3){pt=0,_e();var e=tn,t=fl,n=Ra,l=Df;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?pt=5:(pt=0,fl=tn=null,Qf(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(en=null),cs(n),t=t.stateNode,Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Al,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=L.T,r=ae.p,ae.p=2,L.T=null;try{for(var i=e.onRecoverableError,m=0;m<l.length;m++){var h=l[m];i(h.value,{componentStack:h.stack})}}finally{L.T=t,ae.p=r}}(Ra&3)!==0&&Ei(),ha(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===Po?sr++:(sr=0,Po=e):sr=0,or(0)}}function Qf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Yl(t)))}function Ei(){return Vf(),Pf(),Xf(),Zf()}function Zf(){if(pt!==5)return!1;var e=tn,t=Yo;Yo=0;var n=cs(Ra),l=L.T,r=ae.p;try{ae.p=32>n?32:n,L.T=null,n=Vo,Vo=null;var i=tn,m=Ra;if(pt=0,fl=tn=null,Ra=0,(He&6)!==0)throw Error(s(331));var h=He;if(He|=4,Ef(i.current),Cf(i,i.current,m,n),He=h,or(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Al,i)}catch{}return!0}finally{ae.p=r,L.T=l,Qf(e,t)}}function $f(e,t,n){t=It(n,t),t=No(e.stateNode,t,2),e=$a(e,t,2),e!==null&&(El(e,2),ha(e))}function Ye(e,t,n){if(e.tag===3)$f(e,e,n);else for(;t!==null;){if(t.tag===3){$f(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(en===null||!en.has(l))){e=It(n,e),n=$u(2),l=$a(t,n,2),l!==null&&(Ku(n,l,t,e),El(l,2),ha(l));break}}t=t.return}}function Zo(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new Wh;var r=new Set;l.set(t,r)}else r=l.get(t),r===void 0&&(r=new Set,l.set(t,r));r.has(n)||(Ho=!0,r.add(n),e=lg.bind(null,e,t,n),t.then(e,e))}function lg(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,$e===e&&(ke&n)===n&&(it===4||it===3&&(ke&62914560)===ke&&300>xt()-Ni?(He&2)===0&&ml(e,0):qo|=n,ul===ke&&(ul=0)),ha(e)}function Kf(e,t){t===0&&(t=Yc()),e=jn(e,t),e!==null&&(El(e,t),ha(e))}function rg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kf(e,n)}function ig(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(t),Kf(e,n)}function sg(e,t){return D(e,t)}var ki=null,hl=null,$o=!1,Ti=!1,Ko=!1,nn=0;function ha(e){e!==hl&&e.next===null&&(hl===null?ki=hl=e:hl=hl.next=e),Ti=!0,$o||($o=!0,cg())}function or(e,t){if(!Ko&&Ti){Ko=!0;do for(var n=!1,l=ki;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var i=0;else{var m=l.suspendedLanes,h=l.pingedLanes;i=(1<<31-Lt(42|e)+1)-1,i&=r&~(m&~h),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Wf(l,i))}else i=ke,i=_r(l,l===$e?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||zl(l,i)||(n=!0,Wf(l,i));l=l.next}while(n);Ko=!1}}function og(){Jf()}function Jf(){Ti=$o=!1;var e=0;nn!==0&&yg()&&(e=nn);for(var t=xt(),n=null,l=ki;l!==null;){var r=l.next,i=If(l,t);i===0?(l.next=null,n===null?ki=r:n.next=r,r===null&&(hl=n)):(n=l,(e!==0||(i&3)!==0)&&(Ti=!0)),l=r}pt!==0&&pt!==5||or(e),nn!==0&&(nn=0)}function If(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var m=31-Lt(i),h=1<<m,S=r[m];S===-1?((h&n)===0||(h&l)!==0)&&(r[m]=Mp(h,t)):S<=t&&(e.expiredLanes|=h),i&=~h}if(t=$e,n=ke,n=_r(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&G(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||zl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&G(l),cs(n)){case 2:case 8:n=kr;break;case 32:n=Mn;break;case 268435456:n=Tr;break;default:n=Mn}return l=Ff.bind(null,e),n=D(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&G(l),e.callbackPriority=2,e.callbackNode=null,2}function Ff(e,t){if(pt!==0&&pt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ei()&&e.callbackNode!==n)return null;var l=ke;return l=_r(e,e===$e?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Of(e,l,t),If(e,xt()),e.callbackNode!=null&&e.callbackNode===n?Ff.bind(null,e):null)}function Wf(e,t){if(Ei())return null;Of(e,t,!0)}function cg(){jg(function(){(He&6)!==0?D(lt,og):Jf()})}function Jo(){if(nn===0){var e=el;e===0&&(e=Dr,Dr<<=1,(Dr&261888)===0&&(Dr=256)),nn=e}return nn}function em(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Lr(""+e)}function tm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function dg(e,t,n,l,r){if(t==="submit"&&n&&n.stateNode===r){var i=em((r[Et]||null).action),m=l.submitter;m&&(t=(t=m[Et]||null)?em(t.formAction):m.getAttribute("formAction"),t!==null&&(i=t,m=null));var h=new Yr("action","action",null,l,r);e.push({event:h,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(nn!==0){var S=m?tm(r,m):new FormData(r);go(n,{pending:!0,data:S,method:r.method,action:i},null,S)}}else typeof i=="function"&&(h.preventDefault(),S=m?tm(r,m):new FormData(r),go(n,{pending:!0,data:S,method:r.method,action:i},i,S))},currentTarget:r}]})}}for(var Io=0;Io<Rs.length;Io++){var Fo=Rs[Io],ug=Fo.toLowerCase(),fg=Fo[0].toUpperCase()+Fo.slice(1);sa(ug,"on"+fg)}sa(Dd,"onAnimationEnd"),sa(Rd,"onAnimationIteration"),sa(Od,"onAnimationStart"),sa("dblclick","onDoubleClick"),sa("focusin","onFocus"),sa("focusout","onBlur"),sa(Eh,"onTransitionRun"),sa(kh,"onTransitionStart"),sa(Th,"onTransitionCancel"),sa(_d,"onTransitionEnd"),qn("onMouseEnter",["mouseout","mouseover"]),qn("onMouseLeave",["mouseout","mouseover"]),qn("onPointerEnter",["pointerout","pointerover"]),qn("onPointerLeave",["pointerout","pointerover"]),xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xn("onBeforeInput",["compositionend","keypress","textInput","paste"]),xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cr));function am(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],r=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var m=l.length-1;0<=m;m--){var h=l[m],S=h.instance,_=h.currentTarget;if(h=h.listener,S!==i&&r.isPropagationStopped())break e;i=h,r.currentTarget=_;try{i(r)}catch(X){Xr(X)}r.currentTarget=null,i=S}else for(m=0;m<l.length;m++){if(h=l[m],S=h.instance,_=h.currentTarget,h=h.listener,S!==i&&r.isPropagationStopped())break e;i=h,r.currentTarget=_;try{i(r)}catch(X){Xr(X)}r.currentTarget=null,i=S}}}}function Ee(e,t){var n=t[ds];n===void 0&&(n=t[ds]=new Set);var l=e+"__bubble";n.has(l)||(nm(t,e,2,!1),n.add(l))}function Wo(e,t,n){var l=0;t&&(l|=4),nm(n,e,l,t)}var Di="_reactListening"+Math.random().toString(36).slice(2);function ec(e){if(!e[Di]){e[Di]=!0,Kc.forEach(function(n){n!=="selectionchange"&&(mg.has(n)||Wo(n,!1,e),Wo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Di]||(t[Di]=!0,Wo("selectionchange",!1,t))}}function nm(e,t,n,l){switch(Rm(t)){case 2:var r=Gg;break;case 8:r=Yg;break;default:r=hc}n=r.bind(null,t,n,e),r=void 0,!ys||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function tc(e,t,n,l,r){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var m=l.tag;if(m===3||m===4){var h=l.stateNode.containerInfo;if(h===r)break;if(m===4)for(m=l.return;m!==null;){var S=m.tag;if((S===3||S===4)&&m.stateNode.containerInfo===r)return;m=m.return}for(;h!==null;){if(m=Bn(h),m===null)return;if(S=m.tag,S===5||S===6||S===26||S===27){l=i=m;continue e}h=h.parentNode}}l=l.return}sd(function(){var _=i,X=xs(n),I=[];e:{var U=Md.get(e);if(U!==void 0){var q=Yr,ue=e;switch(e){case"keypress":if(qr(n)===0)break e;case"keydown":case"keyup":q=ih;break;case"focusin":ue="focus",q=ws;break;case"focusout":ue="blur",q=ws;break;case"beforeblur":case"afterblur":q=ws;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=$p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=ch;break;case Dd:case Rd:case Od:q=Ip;break;case _d:q=uh;break;case"scroll":case"scrollend":q=Qp;break;case"wheel":q=mh;break;case"copy":case"cut":case"paste":q=Wp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=fd;break;case"toggle":case"beforetoggle":q=hh}var be=(t&4)!==0,Qe=!be&&(e==="scroll"||e==="scrollend"),E=be?U!==null?U+"Capture":null:U;be=[];for(var A=_,R;A!==null;){var J=A;if(R=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||R===null||E===null||(J=Dl(A,E),J!=null&&be.push(dr(A,J,R))),Qe)break;A=A.return}0<be.length&&(U=new q(U,ue,null,n,X),I.push({event:U,listeners:be}))}}if((t&7)===0){e:{if(U=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",U&&n!==gs&&(ue=n.relatedTarget||n.fromElement)&&(Bn(ue)||ue[Un]))break e;if((q||U)&&(U=X.window===X?X:(U=X.ownerDocument)?U.defaultView||U.parentWindow:window,q?(ue=n.relatedTarget||n.toElement,q=_,ue=ue?Bn(ue):null,ue!==null&&(Qe=f(ue),be=ue.tag,ue!==Qe||be!==5&&be!==27&&be!==6)&&(ue=null)):(q=null,ue=_),q!==ue)){if(be=dd,J="onMouseLeave",E="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(be=fd,J="onPointerLeave",E="onPointerEnter",A="pointer"),Qe=q==null?U:Tl(q),R=ue==null?U:Tl(ue),U=new be(J,A+"leave",q,n,X),U.target=Qe,U.relatedTarget=R,J=null,Bn(X)===_&&(be=new be(E,A+"enter",ue,n,X),be.target=R,be.relatedTarget=Qe,J=be),Qe=J,q&&ue)t:{for(be=pg,E=q,A=ue,R=0,J=E;J;J=be(J))R++;J=0;for(var ge=A;ge;ge=be(ge))J++;for(;0<R-J;)E=be(E),R--;for(;0<J-R;)A=be(A),J--;for(;R--;){if(E===A||A!==null&&E===A.alternate){be=E;break t}E=be(E),A=be(A)}be=null}else be=null;q!==null&&lm(I,U,q,be,!1),ue!==null&&Qe!==null&&lm(I,Qe,ue,be,!0)}}e:{if(U=_?Tl(_):window,q=U.nodeName&&U.nodeName.toLowerCase(),q==="select"||q==="input"&&U.type==="file")var Me=vd;else if(bd(U))if(jd)Me=Ch;else{Me=wh;var fe=Nh}else q=U.nodeName,!q||q.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?_&&hs(_.elementType)&&(Me=vd):Me=Sh;if(Me&&(Me=Me(e,_))){yd(I,Me,n,X);break e}fe&&fe(e,U,_),e==="focusout"&&_&&U.type==="number"&&_.memoizedProps.value!=null&&ps(U,"number",U.value)}switch(fe=_?Tl(_):window,e){case"focusin":(bd(fe)||fe.contentEditable==="true")&&(Qn=fe,ks=_,Hl=null);break;case"focusout":Hl=ks=Qn=null;break;case"mousedown":Ts=!0;break;case"contextmenu":case"mouseup":case"dragend":Ts=!1,kd(I,n,X);break;case"selectionchange":if(zh)break;case"keydown":case"keyup":kd(I,n,X)}var Se;if(Cs)e:{switch(e){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Xn?gd(e,n)&&(Te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Te="onCompositionStart");Te&&(md&&n.locale!=="ko"&&(Xn||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Xn&&(Se=od()):(Ga=X,vs="value"in Ga?Ga.value:Ga.textContent,Xn=!0)),fe=Ri(_,Te),0<fe.length&&(Te=new ud(Te,e,null,n,X),I.push({event:Te,listeners:fe}),Se?Te.data=Se:(Se=xd(n),Se!==null&&(Te.data=Se)))),(Se=xh?bh(e,n):yh(e,n))&&(Te=Ri(_,"onBeforeInput"),0<Te.length&&(fe=new ud("onBeforeInput","beforeinput",null,n,X),I.push({event:fe,listeners:Te}),fe.data=Se)),dg(I,e,_,n,X)}am(I,t)})}function dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ri(e,t){for(var n=t+"Capture",l=[];e!==null;){var r=e,i=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||i===null||(r=Dl(e,n),r!=null&&l.unshift(dr(e,r,i)),r=Dl(e,t),r!=null&&l.push(dr(e,r,i))),e.tag===3)return l;e=e.return}return[]}function pg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function lm(e,t,n,l,r){for(var i=t._reactName,m=[];n!==null&&n!==l;){var h=n,S=h.alternate,_=h.stateNode;if(h=h.tag,S!==null&&S===l)break;h!==5&&h!==26&&h!==27||_===null||(S=_,r?(_=Dl(n,i),_!=null&&m.unshift(dr(n,_,S))):r||(_=Dl(n,i),_!=null&&m.push(dr(n,_,S)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var hg=/\r\n?/g,gg=/\u0000|\uFFFD/g;function rm(e){return(typeof e=="string"?e:""+e).replace(hg,`
`).replace(gg,"")}function im(e,t){return t=rm(t),rm(e)===t}function Xe(e,t,n,l,r,i){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Yn(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Yn(e,""+l);break;case"className":Ur(e,"class",l);break;case"tabIndex":Ur(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ur(e,n,l);break;case"style":rd(e,l,i);break;case"data":if(t!=="object"){Ur(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Lr(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Xe(e,t,"name",r.name,r,null),Xe(e,t,"formEncType",r.formEncType,r,null),Xe(e,t,"formMethod",r.formMethod,r,null),Xe(e,t,"formTarget",r.formTarget,r,null)):(Xe(e,t,"encType",r.encType,r,null),Xe(e,t,"method",r.method,r,null),Xe(e,t,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Lr(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=xa);break;case"onScroll":l!=null&&Ee("scroll",e);break;case"onScrollEnd":l!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(n=l.__html,n!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=Lr(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Mr(e,"popover",l);break;case"xlinkActuate":ga(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ga(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ga(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ga(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ga(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ga(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ga(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ga(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ga(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Mr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Pp.get(n)||n,Mr(e,n,l))}}function ac(e,t,n,l,r,i){switch(n){case"style":rd(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(n=l.__html,n!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Yn(e,l):(typeof l=="number"||typeof l=="bigint")&&Yn(e,""+l);break;case"onScroll":l!=null&&Ee("scroll",e);break;case"onScrollEnd":l!=null&&Ee("scrollend",e);break;case"onClick":l!=null&&(e.onclick=xa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Jc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),i=e[Et]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,r),typeof l=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,r);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):Mr(e,n,l)}}}function Nt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var l=!1,r=!1,i;for(i in n)if(n.hasOwnProperty(i)){var m=n[i];if(m!=null)switch(i){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Xe(e,t,i,m,n,null)}}r&&Xe(e,t,"srcSet",n.srcSet,n,null),l&&Xe(e,t,"src",n.src,n,null);return;case"input":Ee("invalid",e);var h=i=m=r=null,S=null,_=null;for(l in n)if(n.hasOwnProperty(l)){var X=n[l];if(X!=null)switch(l){case"name":r=X;break;case"type":m=X;break;case"checked":S=X;break;case"defaultChecked":_=X;break;case"value":i=X;break;case"defaultValue":h=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,t));break;default:Xe(e,t,l,X,n,null)}}td(e,i,h,S,_,m,r,!1);return;case"select":Ee("invalid",e),l=m=i=null;for(r in n)if(n.hasOwnProperty(r)&&(h=n[r],h!=null))switch(r){case"value":i=h;break;case"defaultValue":m=h;break;case"multiple":l=h;default:Xe(e,t,r,h,n,null)}t=i,n=m,e.multiple=!!l,t!=null?Gn(e,!!l,t,!1):n!=null&&Gn(e,!!l,n,!0);return;case"textarea":Ee("invalid",e),i=r=l=null;for(m in n)if(n.hasOwnProperty(m)&&(h=n[m],h!=null))switch(m){case"value":l=h;break;case"defaultValue":r=h;break;case"children":i=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:Xe(e,t,m,h,n,null)}nd(e,l,r,i);return;case"option":for(S in n)n.hasOwnProperty(S)&&(l=n[S],l!=null)&&(S==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Xe(e,t,S,l,n,null));return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(l=0;l<cr.length;l++)Ee(cr[l],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in n)if(n.hasOwnProperty(_)&&(l=n[_],l!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Xe(e,t,_,l,n,null)}return;default:if(hs(t)){for(X in n)n.hasOwnProperty(X)&&(l=n[X],l!==void 0&&ac(e,t,X,l,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(l=n[h],l!=null&&Xe(e,t,h,l,n,null))}function xg(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,i=null,m=null,h=null,S=null,_=null,X=null;for(q in n){var I=n[q];if(n.hasOwnProperty(q)&&I!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":S=I;default:l.hasOwnProperty(q)||Xe(e,t,q,null,l,I)}}for(var U in l){var q=l[U];if(I=n[U],l.hasOwnProperty(U)&&(q!=null||I!=null))switch(U){case"type":i=q;break;case"name":r=q;break;case"checked":_=q;break;case"defaultChecked":X=q;break;case"value":m=q;break;case"defaultValue":h=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,t));break;default:q!==I&&Xe(e,t,U,q,l,I)}}ms(e,m,h,S,_,X,i,r);return;case"select":q=m=h=U=null;for(i in n)if(S=n[i],n.hasOwnProperty(i)&&S!=null)switch(i){case"value":break;case"multiple":q=S;default:l.hasOwnProperty(i)||Xe(e,t,i,null,l,S)}for(r in l)if(i=l[r],S=n[r],l.hasOwnProperty(r)&&(i!=null||S!=null))switch(r){case"value":U=i;break;case"defaultValue":h=i;break;case"multiple":m=i;default:i!==S&&Xe(e,t,r,i,l,S)}t=h,n=m,l=q,U!=null?Gn(e,!!n,U,!1):!!l!=!!n&&(t!=null?Gn(e,!!n,t,!0):Gn(e,!!n,n?[]:"",!1));return;case"textarea":q=U=null;for(h in n)if(r=n[h],n.hasOwnProperty(h)&&r!=null&&!l.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Xe(e,t,h,null,l,r)}for(m in l)if(r=l[m],i=n[m],l.hasOwnProperty(m)&&(r!=null||i!=null))switch(m){case"value":U=r;break;case"defaultValue":q=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:r!==i&&Xe(e,t,m,r,l,i)}ad(e,U,q);return;case"option":for(var ue in n)U=n[ue],n.hasOwnProperty(ue)&&U!=null&&!l.hasOwnProperty(ue)&&(ue==="selected"?e.selected=!1:Xe(e,t,ue,null,l,U));for(S in l)U=l[S],q=n[S],l.hasOwnProperty(S)&&U!==q&&(U!=null||q!=null)&&(S==="selected"?e.selected=U&&typeof U!="function"&&typeof U!="symbol":Xe(e,t,S,U,l,q));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in n)U=n[be],n.hasOwnProperty(be)&&U!=null&&!l.hasOwnProperty(be)&&Xe(e,t,be,null,l,U);for(_ in l)if(U=l[_],q=n[_],l.hasOwnProperty(_)&&U!==q&&(U!=null||q!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(137,t));break;default:Xe(e,t,_,U,l,q)}return;default:if(hs(t)){for(var Qe in n)U=n[Qe],n.hasOwnProperty(Qe)&&U!==void 0&&!l.hasOwnProperty(Qe)&&ac(e,t,Qe,void 0,l,U);for(X in l)U=l[X],q=n[X],!l.hasOwnProperty(X)||U===q||U===void 0&&q===void 0||ac(e,t,X,U,l,q);return}}for(var E in n)U=n[E],n.hasOwnProperty(E)&&U!=null&&!l.hasOwnProperty(E)&&Xe(e,t,E,null,l,U);for(I in l)U=l[I],q=n[I],!l.hasOwnProperty(I)||U===q||U==null&&q==null||Xe(e,t,I,U,l,q)}function sm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var r=n[l],i=r.transferSize,m=r.initiatorType,h=r.duration;if(i&&h&&sm(m)){for(m=0,h=r.responseEnd,l+=1;l<n.length;l++){var S=n[l],_=S.startTime;if(_>h)break;var X=S.transferSize,I=S.initiatorType;X&&sm(I)&&(S=S.responseEnd,m+=X*(S<h?1:(h-_)/(S-_)))}if(--l,t+=8*(i+m)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var nc=null,lc=null;function Oi(e){return e.nodeType===9?e:e.ownerDocument}function om(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function rc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ic=null;function yg(){var e=window.event;return e&&e.type==="popstate"?e===ic?!1:(ic=e,!0):(ic=null,!1)}var dm=typeof setTimeout=="function"?setTimeout:void 0,vg=typeof clearTimeout=="function"?clearTimeout:void 0,um=typeof Promise=="function"?Promise:void 0,jg=typeof queueMicrotask=="function"?queueMicrotask:typeof um<"u"?function(e){return um.resolve(null).then(e).catch(Ng)}:dm;function Ng(e){setTimeout(function(){throw e})}function ln(e){return e==="head"}function fm(e,t){var n=t,l=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(r),yl(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")ur(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ur(n);for(var i=n.firstChild;i;){var m=i.nextSibling,h=i.nodeName;i[kl]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=m}}else n==="body"&&ur(e.ownerDocument.body);n=r}while(n);yl(t)}function mm(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function sc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":sc(n),us(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function wg(e,t,n,l){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[kl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=aa(e.nextSibling),e===null)break}return null}function Sg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=aa(e.nextSibling),e===null))return null;return e}function pm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=aa(e.nextSibling),e===null))return null;return e}function oc(e){return e.data==="$?"||e.data==="$~"}function cc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Cg(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function aa(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var dc=null;function hm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return aa(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function gm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function xm(e,t,n){switch(t=Oi(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ur(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);us(e)}var na=new Map,bm=new Set;function _i(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Oa=ae.d;ae.d={f:Ag,r:zg,D:Eg,C:kg,L:Tg,m:Dg,X:Og,S:Rg,M:_g};function Ag(){var e=Oa.f(),t=Ci();return e||t}function zg(e){var t=Ln(e);t!==null&&t.tag===5&&t.type==="form"?_u(t):Oa.r(e)}var gl=typeof document>"u"?null:document;function ym(e,t,n){var l=gl;if(l&&typeof t=="string"&&t){var r=Kt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),bm.has(r)||(bm.add(r),e={rel:e,crossOrigin:n,href:t},l.querySelector(r)===null&&(t=l.createElement("link"),Nt(t,"link",e),ht(t),l.head.appendChild(t)))}}function Eg(e){Oa.D(e),ym("dns-prefetch",e,null)}function kg(e,t){Oa.C(e,t),ym("preconnect",e,t)}function Tg(e,t,n){Oa.L(e,t,n);var l=gl;if(l&&e&&t){var r='link[rel="preload"][as="'+Kt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Kt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Kt(n.imageSizes)+'"]')):r+='[href="'+Kt(e)+'"]';var i=r;switch(t){case"style":i=xl(e);break;case"script":i=bl(e)}na.has(i)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),na.set(i,e),l.querySelector(r)!==null||t==="style"&&l.querySelector(fr(i))||t==="script"&&l.querySelector(mr(i))||(t=l.createElement("link"),Nt(t,"link",e),ht(t),l.head.appendChild(t)))}}function Dg(e,t){Oa.m(e,t);var n=gl;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Kt(l)+'"][href="'+Kt(e)+'"]',i=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=bl(e)}if(!na.has(i)&&(e=w({rel:"modulepreload",href:e},t),na.set(i,e),n.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(mr(i)))return}l=n.createElement("link"),Nt(l,"link",e),ht(l),n.head.appendChild(l)}}}function Rg(e,t,n){Oa.S(e,t,n);var l=gl;if(l&&e){var r=Hn(l).hoistableStyles,i=xl(e);t=t||"default";var m=r.get(i);if(!m){var h={loading:0,preload:null};if(m=l.querySelector(fr(i)))h.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=na.get(i))&&uc(e,n);var S=m=l.createElement("link");ht(S),Nt(S,"link",e),S._p=new Promise(function(_,X){S.onload=_,S.onerror=X}),S.addEventListener("load",function(){h.loading|=1}),S.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Mi(m,t,l)}m={type:"stylesheet",instance:m,count:1,state:h},r.set(i,m)}}}function Og(e,t){Oa.X(e,t);var n=gl;if(n&&e){var l=Hn(n).hoistableScripts,r=bl(e),i=l.get(r);i||(i=n.querySelector(mr(r)),i||(e=w({src:e,async:!0},t),(t=na.get(r))&&fc(e,t),i=n.createElement("script"),ht(i),Nt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(r,i))}}function _g(e,t){Oa.M(e,t);var n=gl;if(n&&e){var l=Hn(n).hoistableScripts,r=bl(e),i=l.get(r);i||(i=n.querySelector(mr(r)),i||(e=w({src:e,async:!0,type:"module"},t),(t=na.get(r))&&fc(e,t),i=n.createElement("script"),ht(i),Nt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(r,i))}}function vm(e,t,n,l){var r=(r=$.current)?_i(r):null;if(!r)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=xl(n.href),n=Hn(r).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=xl(n.href);var i=Hn(r).hoistableStyles,m=i.get(e);if(m||(r=r.ownerDocument||r,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,m),(i=r.querySelector(fr(e)))&&!i._p&&(m.instance=i,m.state.loading=5),na.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},na.set(e,n),i||Mg(r,e,n,m.state))),t&&l===null)throw Error(s(528,""));return m}if(t&&l!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=bl(n),n=Hn(r).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function xl(e){return'href="'+Kt(e)+'"'}function fr(e){return'link[rel="stylesheet"]['+e+"]"}function jm(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Mg(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Nt(t,"link",n),ht(t),e.head.appendChild(t))}function bl(e){return'[src="'+Kt(e)+'"]'}function mr(e){return"script[async]"+e}function Nm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Kt(n.href)+'"]');if(l)return t.instance=l,ht(l),l;var r=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ht(l),Nt(l,"style",r),Mi(l,n.precedence,e),t.instance=l;case"stylesheet":r=xl(n.href);var i=e.querySelector(fr(r));if(i)return t.state.loading|=4,t.instance=i,ht(i),i;l=jm(n),(r=na.get(r))&&uc(l,r),i=(e.ownerDocument||e).createElement("link"),ht(i);var m=i;return m._p=new Promise(function(h,S){m.onload=h,m.onerror=S}),Nt(i,"link",l),t.state.loading|=4,Mi(i,n.precedence,e),t.instance=i;case"script":return i=bl(n.src),(r=e.querySelector(mr(i)))?(t.instance=r,ht(r),r):(l=n,(r=na.get(i))&&(l=w({},n),fc(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),ht(r),Nt(r,"link",l),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Mi(l,n.precedence,e));return t.instance}function Mi(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,i=r,m=0;m<l.length;m++){var h=l[m];if(h.dataset.precedence===t)i=h;else if(i!==r)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function uc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function fc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ui=null;function wm(e,t,n){if(Ui===null){var l=new Map,r=Ui=new Map;r.set(n,l)}else r=Ui,l=r.get(n),l||(l=new Map,r.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var i=n[r];if(!(i[kl]||i[bt]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var m=i.getAttribute(t)||"";m=e+m;var h=l.get(m);h?h.push(i):l.set(m,[i])}}return l}function Sm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Ug(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Cm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Bg(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=xl(l.href),i=t.querySelector(fr(r));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Bi.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,ht(i);return}i=t.ownerDocument||t,l=jm(l),(r=na.get(r))&&uc(l,r),i=i.createElement("link"),ht(i);var m=i;m._p=new Promise(function(h,S){m.onload=h,m.onerror=S}),Nt(i,"link",l),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Bi.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var mc=0;function Lg(e,t){return e.stylesheets&&e.count===0&&Hi(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&Hi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&mc===0&&(mc=62500*bg());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Hi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>mc?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function Bi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Li=null;function Hi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Li=new Map,t.forEach(Hg,e),Li=null,Bi.call(e))}function Hg(e,t){if(!(t.state.loading&4)){var n=Li.get(e);if(n)var l=n.get(null);else{n=new Map,Li.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<r.length;i++){var m=r[i];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),l=m)}l&&n.set(null,l)}r=t.instance,m=r.getAttribute("data-precedence"),i=n.get(m)||l,i===l&&n.set(null,r),n.set(m,r),this.count++,l=Bi.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),i?i.parentNode.insertBefore(r,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var pr={$$typeof:te,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function qg(e,t,n,l,r,i,m,h,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ss(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ss(0),this.hiddenUpdates=ss(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=i,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function Am(e,t,n,l,r,i,m,h,S,_,X,I){return e=new qg(e,t,n,m,S,_,X,I,h),t=1,i===!0&&(t|=24),i=qt(3,null,null,t),e.current=i,i.stateNode=e,t=Xs(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:n,cache:t},Ks(i),e}function zm(e){return e?(e=Kn,e):Kn}function Em(e,t,n,l,r,i){r=zm(r),l.context===null?l.context=r:l.pendingContext=r,l=Za(t),l.payload={element:n},i=i===void 0?null:i,i!==null&&(l.callback=i),n=$a(e,l,t),n!==null&&(_t(n,e,t),Ql(n,e,t))}function km(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function pc(e,t){km(e,t),(e=e.alternate)&&km(e,t)}function Tm(e){if(e.tag===13||e.tag===31){var t=jn(e,67108864);t!==null&&_t(t,e,67108864),pc(e,67108864)}}function Dm(e){if(e.tag===13||e.tag===31){var t=Xt();t=os(t);var n=jn(e,t);n!==null&&_t(n,e,t),pc(e,t)}}var qi=!0;function Gg(e,t,n,l){var r=L.T;L.T=null;var i=ae.p;try{ae.p=2,hc(e,t,n,l)}finally{ae.p=i,L.T=r}}function Yg(e,t,n,l){var r=L.T;L.T=null;var i=ae.p;try{ae.p=8,hc(e,t,n,l)}finally{ae.p=i,L.T=r}}function hc(e,t,n,l){if(qi){var r=gc(l);if(r===null)tc(e,t,l,Gi,n),Om(e,l);else if(Pg(r,e,t,n,l))l.stopPropagation();else if(Om(e,l),t&4&&-1<Vg.indexOf(e)){for(;r!==null;){var i=Ln(r);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var m=gn(i.pendingLanes);if(m!==0){var h=i;for(h.pendingLanes|=2,h.entangledLanes|=2;m;){var S=1<<31-Lt(m);h.entanglements[1]|=S,m&=~S}ha(i),(He&6)===0&&(wi=xt()+500,or(0))}}break;case 31:case 13:h=jn(i,2),h!==null&&_t(h,i,2),Ci(),pc(i,2)}if(i=gc(l),i===null&&tc(e,t,l,Gi,n),i===r)break;r=i}r!==null&&l.stopPropagation()}else tc(e,t,l,null,n)}}function gc(e){return e=xs(e),xc(e)}var Gi=null;function xc(e){if(Gi=null,e=Bn(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===31){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Gi=e,null}function Rm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Cl()){case lt:return 2;case kr:return 8;case Mn:case ls:return 32;case Tr:return 268435456;default:return 32}default:return 32}}var bc=!1,rn=null,sn=null,on=null,hr=new Map,gr=new Map,cn=[],Vg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Om(e,t){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gr.delete(t.pointerId)}}function xr(e,t,n,l,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:i,targetContainers:[r]},t!==null&&(t=Ln(t),t!==null&&Tm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Pg(e,t,n,l,r){switch(t){case"focusin":return rn=xr(rn,e,t,n,l,r),!0;case"dragenter":return sn=xr(sn,e,t,n,l,r),!0;case"mouseover":return on=xr(on,e,t,n,l,r),!0;case"pointerover":var i=r.pointerId;return hr.set(i,xr(hr.get(i)||null,e,t,n,l,r)),!0;case"gotpointercapture":return i=r.pointerId,gr.set(i,xr(gr.get(i)||null,e,t,n,l,r)),!0}return!1}function _m(e){var t=Bn(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,Zc(e.priority,function(){Dm(n)});return}}else if(t===31){if(t=y(n),t!==null){e.blockedOn=t,Zc(e.priority,function(){Dm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gc(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);gs=l,n.target.dispatchEvent(l),gs=null}else return t=Ln(n),t!==null&&Tm(t),e.blockedOn=n,!1;t.shift()}return!0}function Mm(e,t,n){Yi(e)&&n.delete(t)}function Xg(){bc=!1,rn!==null&&Yi(rn)&&(rn=null),sn!==null&&Yi(sn)&&(sn=null),on!==null&&Yi(on)&&(on=null),hr.forEach(Mm),gr.forEach(Mm)}function Vi(e,t){e.blockedOn===t&&(e.blockedOn=null,bc||(bc=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Xg)))}var Pi=null;function Um(e){Pi!==e&&(Pi=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Pi===e&&(Pi=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],r=e[t+2];if(typeof l!="function"){if(xc(l||n)===null)continue;break}var i=Ln(n);i!==null&&(e.splice(t,3),t-=3,go(i,{pending:!0,data:r,method:n.method,action:l},l,r))}}))}function yl(e){function t(S){return Vi(S,e)}rn!==null&&Vi(rn,e),sn!==null&&Vi(sn,e),on!==null&&Vi(on,e),hr.forEach(t),gr.forEach(t);for(var n=0;n<cn.length;n++){var l=cn[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<cn.length&&(n=cn[0],n.blockedOn===null);)_m(n),n.blockedOn===null&&cn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var r=n[l],i=n[l+1],m=r[Et]||null;if(typeof i=="function")m||Um(n);else if(m){var h=null;if(i&&i.hasAttribute("formAction")){if(r=i,m=i[Et]||null)h=m.formAction;else if(xc(r)!==null)continue}else h=m.action;typeof h=="function"?n[l+1]=h:(n.splice(l,3),l-=3),Um(n)}}}function Bm(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(m){return r=m})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function yc(e){this._internalRoot=e}Xi.prototype.render=yc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,l=Xt();Em(n,l,e,t,null,null)},Xi.prototype.unmount=yc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Em(e.current,2,null,e,null,null),Ci(),t[Un]=null}};function Xi(e){this._internalRoot=e}Xi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<cn.length&&t!==0&&t<cn[n].priority;n++);cn.splice(n,0,e),n===0&&_m(e)}};var Lm=c.version;if(Lm!=="19.2.4")throw Error(s(527,Lm,"19.2.4"));ae.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var Qg={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qi.isDisabled&&Qi.supportsFiber)try{Al=Qi.inject(Qg),Bt=Qi}catch{}}return yr.createRoot=function(e,t){if(!u(e))throw Error(s(299));var n=!1,l="",r=Pu,i=Xu,m=Qu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=Am(e,1,!1,null,null,n,l,null,r,i,m,Bm),e[Un]=t.current,ec(e),new yc(t)},yr.hydrateRoot=function(e,t,n){if(!u(e))throw Error(s(299));var l=!1,r="",i=Pu,m=Xu,h=Qu,S=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.formState!==void 0&&(S=n.formState)),t=Am(e,1,!0,t,n??null,l,r,S,i,m,h,Bm),t.context=zm(null),n=t.current,l=Xt(),l=os(l),r=Za(l),r.callback=null,$a(n,r,l),n=l,t.current.lanes=n,El(t,n),ha(t),e[Un]=t.current,ec(e),new Xi(t)},yr.version="19.2.4",yr}var $m;function ax(){if($m)return Nc.exports;$m=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(c){console.error(c)}}return o(),Nc.exports=tx(),Nc.exports}var nx=ax();const lx=np(nx);var Km="popstate";function rx(o={}){function c(s,u){let{pathname:f,search:g,hash:y}=s.location;return Tc("",{pathname:f,search:g,hash:y},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function d(s,u){return typeof u=="string"?u:wr(u)}return sx(c,d,null,o)}function nt(o,c){if(o===!1||o===null||typeof o>"u")throw new Error(c)}function ua(o,c){if(!o){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function ix(){return Math.random().toString(36).substring(2,10)}function Jm(o,c){return{usr:o.state,key:o.key,idx:c}}function Tc(o,c,d=null,s){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof c=="string"?wl(c):c,state:d,key:c&&c.key||s||ix()}}function wr({pathname:o="/",search:c="",hash:d=""}){return c&&c!=="?"&&(o+=c.charAt(0)==="?"?c:"?"+c),d&&d!=="#"&&(o+=d.charAt(0)==="#"?d:"#"+d),o}function wl(o){let c={};if(o){let d=o.indexOf("#");d>=0&&(c.hash=o.substring(d),o=o.substring(0,d));let s=o.indexOf("?");s>=0&&(c.search=o.substring(s),o=o.substring(0,s)),o&&(c.pathname=o)}return c}function sx(o,c,d,s={}){let{window:u=document.defaultView,v5Compat:f=!1}=s,g=u.history,y="POP",x=null,p=b();p==null&&(p=0,g.replaceState({...g.state,idx:p},""));function b(){return(g.state||{idx:null}).idx}function w(){y="POP";let k=b(),M=k==null?null:k-p;p=k,x&&x({action:y,location:T.location,delta:M})}function B(k,M){y="PUSH";let P=Tc(T.location,k,M);p=b()+1;let te=Jm(P,p),le=T.createHref(P);try{g.pushState(te,"",le)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;u.location.assign(le)}f&&x&&x({action:y,location:T.location,delta:1})}function F(k,M){y="REPLACE";let P=Tc(T.location,k,M);p=b();let te=Jm(P,p),le=T.createHref(P);g.replaceState(te,"",le),f&&x&&x({action:y,location:T.location,delta:0})}function V(k){return ox(k)}let T={get action(){return y},get location(){return o(u,g)},listen(k){if(x)throw new Error("A history only accepts one active listener");return u.addEventListener(Km,w),x=k,()=>{u.removeEventListener(Km,w),x=null}},createHref(k){return c(u,k)},createURL:V,encodeLocation(k){let M=V(k);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:B,replace:F,go(k){return g.go(k)}};return T}function ox(o,c=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),nt(d,"No window.location.(origin|href) available to create URL");let s=typeof o=="string"?o:wr(o);return s=s.replace(/ $/,"%20"),!c&&s.startsWith("//")&&(s=d+s),new URL(s,d)}function lp(o,c,d="/"){return cx(o,c,d,!1)}function cx(o,c,d,s){let u=typeof c=="string"?wl(c):c,f=Ua(u.pathname||"/",d);if(f==null)return null;let g=rp(o);dx(g);let y=null;for(let x=0;y==null&&x<g.length;++x){let p=jx(f);y=yx(g[x],p,s)}return y}function rp(o,c=[],d=[],s="",u=!1){let f=(g,y,x=u,p)=>{let b={relativePath:p===void 0?g.path||"":p,caseSensitive:g.caseSensitive===!0,childrenIndex:y,route:g};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(s)&&x)return;nt(b.relativePath.startsWith(s),`Absolute route path "${b.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(s.length)}let w=Ma([s,b.relativePath]),B=d.concat(b);g.children&&g.children.length>0&&(nt(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),rp(g.children,c,B,w,x)),!(g.path==null&&!g.index)&&c.push({path:w,score:xx(w,g.index),routesMeta:B})};return o.forEach((g,y)=>{if(g.path===""||!g.path?.includes("?"))f(g,y);else for(let x of ip(g.path))f(g,y,!0,x)}),c}function ip(o){let c=o.split("/");if(c.length===0)return[];let[d,...s]=c,u=d.endsWith("?"),f=d.replace(/\?$/,"");if(s.length===0)return u?[f,""]:[f];let g=ip(s.join("/")),y=[];return y.push(...g.map(x=>x===""?f:[f,x].join("/"))),u&&y.push(...g),y.map(x=>o.startsWith("/")&&x===""?"/":x)}function dx(o){o.sort((c,d)=>c.score!==d.score?d.score-c.score:bx(c.routesMeta.map(s=>s.childrenIndex),d.routesMeta.map(s=>s.childrenIndex)))}var ux=/^:[\w-]+$/,fx=3,mx=2,px=1,hx=10,gx=-2,Im=o=>o==="*";function xx(o,c){let d=o.split("/"),s=d.length;return d.some(Im)&&(s+=gx),c&&(s+=mx),d.filter(u=>!Im(u)).reduce((u,f)=>u+(ux.test(f)?fx:f===""?px:hx),s)}function bx(o,c){return o.length===c.length&&o.slice(0,-1).every((s,u)=>s===c[u])?o[o.length-1]-c[c.length-1]:0}function yx(o,c,d=!1){let{routesMeta:s}=o,u={},f="/",g=[];for(let y=0;y<s.length;++y){let x=s[y],p=y===s.length-1,b=f==="/"?c:c.slice(f.length)||"/",w=Wi({path:x.relativePath,caseSensitive:x.caseSensitive,end:p},b),B=x.route;if(!w&&p&&d&&!s[s.length-1].route.index&&(w=Wi({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},b)),!w)return null;Object.assign(u,w.params),g.push({params:u,pathname:Ma([f,w.pathname]),pathnameBase:Cx(Ma([f,w.pathnameBase])),route:B}),w.pathnameBase!=="/"&&(f=Ma([f,w.pathnameBase]))}return g}function Wi(o,c){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[d,s]=vx(o.path,o.caseSensitive,o.end),u=c.match(d);if(!u)return null;let f=u[0],g=f.replace(/(.)\/+$/,"$1"),y=u.slice(1);return{params:s.reduce((p,{paramName:b,isOptional:w},B)=>{if(b==="*"){let V=y[B]||"";g=f.slice(0,f.length-V.length).replace(/(.)\/+$/,"$1")}const F=y[B];return w&&!F?p[b]=void 0:p[b]=(F||"").replace(/%2F/g,"/"),p},{}),pathname:f,pathnameBase:g,pattern:o}}function vx(o,c=!1,d=!0){ua(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let s=[],u="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,y,x)=>(s.push({paramName:y,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(s.push({paramName:"*"}),u+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?u+="\\/*$":o!==""&&o!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,c?void 0:"i"),s]}function jx(o){try{return o.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return ua(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),o}}function Ua(o,c){if(c==="/")return o;if(!o.toLowerCase().startsWith(c.toLowerCase()))return null;let d=c.endsWith("/")?c.length-1:c.length,s=o.charAt(d);return s&&s!=="/"?null:o.slice(d)||"/"}var Nx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function wx(o,c="/"){let{pathname:d,search:s="",hash:u=""}=typeof o=="string"?wl(o):o,f;return d?(d=d.replace(/\/\/+/g,"/"),d.startsWith("/")?f=Fm(d.substring(1),"/"):f=Fm(d,c)):f=c,{pathname:f,search:Ax(s),hash:zx(u)}}function Fm(o,c){let d=c.replace(/\/+$/,"").split("/");return o.split("/").forEach(u=>{u===".."?d.length>1&&d.pop():u!=="."&&d.push(u)}),d.length>1?d.join("/"):"/"}function Ac(o,c,d,s){return`Cannot include a '${o}' character in a manually specified \`to.${c}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Sx(o){return o.filter((c,d)=>d===0||c.route.path&&c.route.path.length>0)}function sp(o){let c=Sx(o);return c.map((d,s)=>s===c.length-1?d.pathname:d.pathnameBase)}function op(o,c,d,s=!1){let u;typeof o=="string"?u=wl(o):(u={...o},nt(!u.pathname||!u.pathname.includes("?"),Ac("?","pathname","search",u)),nt(!u.pathname||!u.pathname.includes("#"),Ac("#","pathname","hash",u)),nt(!u.search||!u.search.includes("#"),Ac("#","search","hash",u)));let f=o===""||u.pathname==="",g=f?"/":u.pathname,y;if(g==null)y=d;else{let w=c.length-1;if(!s&&g.startsWith("..")){let B=g.split("/");for(;B[0]==="..";)B.shift(),w-=1;u.pathname=B.join("/")}y=w>=0?c[w]:"/"}let x=wx(u,y),p=g&&g!=="/"&&g.endsWith("/"),b=(f||g===".")&&d.endsWith("/");return!x.pathname.endsWith("/")&&(p||b)&&(x.pathname+="/"),x}var Ma=o=>o.join("/").replace(/\/\/+/g,"/"),Cx=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Ax=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,zx=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,Ex=class{constructor(o,c,d,s=!1){this.status=o,this.statusText=c||"",this.internal=s,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function kx(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function Tx(o){return o.map(c=>c.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var cp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function dp(o,c){let d=o;if(typeof d!="string"||!Nx.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let s=d,u=!1;if(cp)try{let f=new URL(window.location.href),g=d.startsWith("//")?new URL(f.protocol+d):new URL(d),y=Ua(g.pathname,c);g.origin===f.origin&&y!=null?d=y+g.search+g.hash:u=!0}catch{ua(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:u,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var up=["POST","PUT","PATCH","DELETE"];new Set(up);var Dx=["GET",...up];new Set(Dx);var Sl=j.createContext(null);Sl.displayName="DataRouter";var es=j.createContext(null);es.displayName="DataRouterState";var Rx=j.createContext(!1),fp=j.createContext({isTransitioning:!1});fp.displayName="ViewTransition";var Ox=j.createContext(new Map);Ox.displayName="Fetchers";var _x=j.createContext(null);_x.displayName="Await";var ia=j.createContext(null);ia.displayName="Navigation";var Cr=j.createContext(null);Cr.displayName="Location";var La=j.createContext({outlet:null,matches:[],isDataRoute:!1});La.displayName="Route";var _c=j.createContext(null);_c.displayName="RouteError";var mp="REACT_ROUTER_ERROR",Mx="REDIRECT",Ux="ROUTE_ERROR_RESPONSE";function Bx(o){if(o.startsWith(`${mp}:${Mx}:{`))try{let c=JSON.parse(o.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function Lx(o){if(o.startsWith(`${mp}:${Ux}:{`))try{let c=JSON.parse(o.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new Ex(c.status,c.statusText,c.data)}catch{}}function Hx(o,{relative:c}={}){nt(Ar(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:s}=j.useContext(ia),{hash:u,pathname:f,search:g}=zr(o,{relative:c}),y=f;return d!=="/"&&(y=f==="/"?d:Ma([d,f])),s.createHref({pathname:y,search:g,hash:u})}function Ar(){return j.useContext(Cr)!=null}function hn(){return nt(Ar(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Cr).location}var pp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function hp(o){j.useContext(ia).static||j.useLayoutEffect(o)}function Mc(){let{isDataRoute:o}=j.useContext(La);return o?Fx():qx()}function qx(){nt(Ar(),"useNavigate() may be used only in the context of a <Router> component.");let o=j.useContext(Sl),{basename:c,navigator:d}=j.useContext(ia),{matches:s}=j.useContext(La),{pathname:u}=hn(),f=JSON.stringify(sp(s)),g=j.useRef(!1);return hp(()=>{g.current=!0}),j.useCallback((x,p={})=>{if(ua(g.current,pp),!g.current)return;if(typeof x=="number"){d.go(x);return}let b=op(x,JSON.parse(f),u,p.relative==="path");o==null&&c!=="/"&&(b.pathname=b.pathname==="/"?c:Ma([c,b.pathname])),(p.replace?d.replace:d.push)(b,p.state,p)},[c,d,f,u,o])}j.createContext(null);function zr(o,{relative:c}={}){let{matches:d}=j.useContext(La),{pathname:s}=hn(),u=JSON.stringify(sp(d));return j.useMemo(()=>op(o,JSON.parse(u),s,c==="path"),[o,u,s,c])}function Gx(o,c){return gp(o,c)}function gp(o,c,d,s,u){nt(Ar(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=j.useContext(ia),{matches:g}=j.useContext(La),y=g[g.length-1],x=y?y.params:{},p=y?y.pathname:"/",b=y?y.pathnameBase:"/",w=y&&y.route;{let P=w&&w.path||"";bp(p,!w||P.endsWith("*")||P.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P==="/"?"*":`${P}/*`}">.`)}let B=hn(),F;if(c){let P=typeof c=="string"?wl(c):c;nt(b==="/"||P.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${P.pathname}" was given in the \`location\` prop.`),F=P}else F=B;let V=F.pathname||"/",T=V;if(b!=="/"){let P=b.replace(/^\//,"").split("/");T="/"+V.replace(/^\//,"").split("/").slice(P.length).join("/")}let k=lp(o,{pathname:T});ua(w||k!=null,`No routes matched location "${F.pathname}${F.search}${F.hash}" `),ua(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${F.pathname}${F.search}${F.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=Qx(k&&k.map(P=>Object.assign({},P,{params:Object.assign({},x,P.params),pathname:Ma([b,f.encodeLocation?f.encodeLocation(P.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?b:Ma([b,f.encodeLocation?f.encodeLocation(P.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:P.pathnameBase])})),g,d,s,u);return c&&M?j.createElement(Cr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...F},navigationType:"POP"}},M):M}function Yx(){let o=Ix(),c=kx(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),d=o instanceof Error?o.stack:null,s="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:s},f={padding:"2px 4px",backgroundColor:s},g=null;return console.error("Error handled by React Router default ErrorBoundary:",o),g=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:f},"ErrorBoundary")," or"," ",j.createElement("code",{style:f},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},c),d?j.createElement("pre",{style:u},d):null,g)}var Vx=j.createElement(Yx,null),xp=class extends j.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,c){return c.location!==o.location||c.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:c.error,location:c.location,revalidation:o.revalidation||c.revalidation}}componentDidCatch(o,c){this.props.onError?this.props.onError(o,c):console.error("React Router caught the following error during render",o)}render(){let o=this.state.error;if(this.context&&typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){const d=Lx(o.digest);d&&(o=d)}let c=o!==void 0?j.createElement(La.Provider,{value:this.props.routeContext},j.createElement(_c.Provider,{value:o,children:this.props.component})):this.props.children;return this.context?j.createElement(Px,{error:o},c):c}};xp.contextType=Rx;var zc=new WeakMap;function Px({children:o,error:c}){let{basename:d}=j.useContext(ia);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let s=Bx(c.digest);if(s){let u=zc.get(c);if(u)throw u;let f=dp(s.location,d);if(cp&&!zc.get(c))if(f.isExternal||s.reloadDocument)window.location.href=f.absoluteURL||f.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:s.replace}));throw zc.set(c,g),g}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f.absoluteURL||f.to}`})}}return o}function Xx({routeContext:o,match:c,children:d}){let s=j.useContext(Sl);return s&&s.static&&s.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=c.route.id),j.createElement(La.Provider,{value:o},d)}function Qx(o,c=[],d=null,s=null,u=null){if(o==null){if(!d)return null;if(d.errors)o=d.matches;else if(c.length===0&&!d.initialized&&d.matches.length>0)o=d.matches;else return null}let f=o,g=d?.errors;if(g!=null){let b=f.findIndex(w=>w.route.id&&g?.[w.route.id]!==void 0);nt(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),f=f.slice(0,Math.min(f.length,b+1))}let y=!1,x=-1;if(d)for(let b=0;b<f.length;b++){let w=f[b];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(x=b),w.route.id){let{loaderData:B,errors:F}=d,V=w.route.loader&&!B.hasOwnProperty(w.route.id)&&(!F||F[w.route.id]===void 0);if(w.route.lazy||V){y=!0,x>=0?f=f.slice(0,x+1):f=[f[0]];break}}}let p=d&&s?(b,w)=>{s(b,{location:d.location,params:d.matches?.[0]?.params??{},unstable_pattern:Tx(d.matches),errorInfo:w})}:void 0;return f.reduceRight((b,w,B)=>{let F,V=!1,T=null,k=null;d&&(F=g&&w.route.id?g[w.route.id]:void 0,T=w.route.errorElement||Vx,y&&(x<0&&B===0?(bp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),V=!0,k=null):x===B&&(V=!0,k=w.route.hydrateFallbackElement||null)));let M=c.concat(f.slice(0,B+1)),P=()=>{let te;return F?te=T:V?te=k:w.route.Component?te=j.createElement(w.route.Component,null):w.route.element?te=w.route.element:te=b,j.createElement(Xx,{match:w,routeContext:{outlet:b,matches:M,isDataRoute:d!=null},children:te})};return d&&(w.route.ErrorBoundary||w.route.errorElement||B===0)?j.createElement(xp,{location:d.location,revalidation:d.revalidation,component:T,error:F,children:P(),routeContext:{outlet:null,matches:M,isDataRoute:!0},onError:p}):P()},null)}function Uc(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zx(o){let c=j.useContext(Sl);return nt(c,Uc(o)),c}function $x(o){let c=j.useContext(es);return nt(c,Uc(o)),c}function Kx(o){let c=j.useContext(La);return nt(c,Uc(o)),c}function Bc(o){let c=Kx(o),d=c.matches[c.matches.length-1];return nt(d.route.id,`${o} can only be used on routes that contain a unique "id"`),d.route.id}function Jx(){return Bc("useRouteId")}function Ix(){let o=j.useContext(_c),c=$x("useRouteError"),d=Bc("useRouteError");return o!==void 0?o:c.errors?.[d]}function Fx(){let{router:o}=Zx("useNavigate"),c=Bc("useNavigate"),d=j.useRef(!1);return hp(()=>{d.current=!0}),j.useCallback(async(u,f={})=>{ua(d.current,pp),d.current&&(typeof u=="number"?await o.navigate(u):await o.navigate(u,{fromRouteId:c,...f}))},[o,c])}var Wm={};function bp(o,c,d){!c&&!Wm[o]&&(Wm[o]=!0,ua(!1,d))}j.memo(Wx);function Wx({routes:o,future:c,state:d,onError:s}){return gp(o,void 0,d,s,c)}function fn(o){nt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function e0({basename:o="/",children:c=null,location:d,navigationType:s="POP",navigator:u,static:f=!1,unstable_useTransitions:g}){nt(!Ar(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=o.replace(/^\/*/,"/"),x=j.useMemo(()=>({basename:y,navigator:u,static:f,unstable_useTransitions:g,future:{}}),[y,u,f,g]);typeof d=="string"&&(d=wl(d));let{pathname:p="/",search:b="",hash:w="",state:B=null,key:F="default"}=d,V=j.useMemo(()=>{let T=Ua(p,y);return T==null?null:{location:{pathname:T,search:b,hash:w,state:B,key:F},navigationType:s}},[y,p,b,w,B,F,s]);return ua(V!=null,`<Router basename="${y}"> is not able to match the URL "${p}${b}${w}" because it does not start with the basename, so the <Router> won't render anything.`),V==null?null:j.createElement(ia.Provider,{value:x},j.createElement(Cr.Provider,{children:c,value:V}))}function ep({children:o,location:c}){return Gx(Dc(o),c)}function Dc(o,c=[]){let d=[];return j.Children.forEach(o,(s,u)=>{if(!j.isValidElement(s))return;let f=[...c,u];if(s.type===j.Fragment){d.push.apply(d,Dc(s.props.children,f));return}nt(s.type===fn,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),nt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let g={id:s.props.id||f.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(g.children=Dc(s.props.children,f)),d.push(g)}),d}var Ji="get",Ii="application/x-www-form-urlencoded";function ts(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function t0(o){return ts(o)&&o.tagName.toLowerCase()==="button"}function a0(o){return ts(o)&&o.tagName.toLowerCase()==="form"}function n0(o){return ts(o)&&o.tagName.toLowerCase()==="input"}function l0(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function r0(o,c){return o.button===0&&(!c||c==="_self")&&!l0(o)}function Rc(o=""){return new URLSearchParams(typeof o=="string"||Array.isArray(o)||o instanceof URLSearchParams?o:Object.keys(o).reduce((c,d)=>{let s=o[d];return c.concat(Array.isArray(s)?s.map(u=>[d,u]):[[d,s]])},[]))}function i0(o,c){let d=Rc(o);return c&&c.forEach((s,u)=>{d.has(u)||c.getAll(u).forEach(f=>{d.append(u,f)})}),d}var Zi=null;function s0(){if(Zi===null)try{new FormData(document.createElement("form"),0),Zi=!1}catch{Zi=!0}return Zi}var o0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ec(o){return o!=null&&!o0.has(o)?(ua(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ii}"`),null):o}function c0(o,c){let d,s,u,f,g;if(a0(o)){let y=o.getAttribute("action");s=y?Ua(y,c):null,d=o.getAttribute("method")||Ji,u=Ec(o.getAttribute("enctype"))||Ii,f=new FormData(o)}else if(t0(o)||n0(o)&&(o.type==="submit"||o.type==="image")){let y=o.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=o.getAttribute("formaction")||y.getAttribute("action");if(s=x?Ua(x,c):null,d=o.getAttribute("formmethod")||y.getAttribute("method")||Ji,u=Ec(o.getAttribute("formenctype"))||Ec(y.getAttribute("enctype"))||Ii,f=new FormData(y,o),!s0()){let{name:p,type:b,value:w}=o;if(b==="image"){let B=p?`${p}.`:"";f.append(`${B}x`,"0"),f.append(`${B}y`,"0")}else p&&f.append(p,w)}}else{if(ts(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=Ji,s=null,u=Ii,g=o}return f&&u==="text/plain"&&(g=f,f=void 0),{action:s,method:d.toLowerCase(),encType:u,formData:f,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Lc(o,c){if(o===!1||o===null||typeof o>"u")throw new Error(c)}function d0(o,c,d,s){let u=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return d?u.pathname.endsWith("/")?u.pathname=`${u.pathname}_.${s}`:u.pathname=`${u.pathname}.${s}`:u.pathname==="/"?u.pathname=`_root.${s}`:c&&Ua(u.pathname,c)==="/"?u.pathname=`${c.replace(/\/$/,"")}/_root.${s}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${s}`,u}async function u0(o,c){if(o.id in c)return c[o.id];try{let d=await import(o.module);return c[o.id]=d,d}catch(d){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function f0(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function m0(o,c,d){let s=await Promise.all(o.map(async u=>{let f=c.routes[u.route.id];if(f){let g=await u0(f,d);return g.links?g.links():[]}return[]}));return x0(s.flat(1).filter(f0).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function tp(o,c,d,s,u,f){let g=(x,p)=>d[p]?x.route.id!==d[p].route.id:!0,y=(x,p)=>d[p].pathname!==x.pathname||d[p].route.path?.endsWith("*")&&d[p].params["*"]!==x.params["*"];return f==="assets"?c.filter((x,p)=>g(x,p)||y(x,p)):f==="data"?c.filter((x,p)=>{let b=s.routes[x.route.id];if(!b||!b.hasLoader)return!1;if(g(x,p)||y(x,p))return!0;if(x.route.shouldRevalidate){let w=x.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:d[0]?.params||{},nextUrl:new URL(o,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function p0(o,c,{includeHydrateFallback:d}={}){return h0(o.map(s=>{let u=c.routes[s.route.id];if(!u)return[];let f=[u.module];return u.clientActionModule&&(f=f.concat(u.clientActionModule)),u.clientLoaderModule&&(f=f.concat(u.clientLoaderModule)),d&&u.hydrateFallbackModule&&(f=f.concat(u.hydrateFallbackModule)),u.imports&&(f=f.concat(u.imports)),f}).flat(1))}function h0(o){return[...new Set(o)]}function g0(o){let c={},d=Object.keys(o).sort();for(let s of d)c[s]=o[s];return c}function x0(o,c){let d=new Set;return new Set(c),o.reduce((s,u)=>{let f=JSON.stringify(g0(u));return d.has(f)||(d.add(f),s.push({key:f,link:u})),s},[])}function yp(){let o=j.useContext(Sl);return Lc(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function b0(){let o=j.useContext(es);return Lc(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var Hc=j.createContext(void 0);Hc.displayName="FrameworkContext";function vp(){let o=j.useContext(Hc);return Lc(o,"You must render this element inside a <HydratedRouter> element"),o}function y0(o,c){let d=j.useContext(Hc),[s,u]=j.useState(!1),[f,g]=j.useState(!1),{onFocus:y,onBlur:x,onMouseEnter:p,onMouseLeave:b,onTouchStart:w}=c,B=j.useRef(null);j.useEffect(()=>{if(o==="render"&&g(!0),o==="viewport"){let T=M=>{M.forEach(P=>{g(P.isIntersecting)})},k=new IntersectionObserver(T,{threshold:.5});return B.current&&k.observe(B.current),()=>{k.disconnect()}}},[o]),j.useEffect(()=>{if(s){let T=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(T)}}},[s]);let F=()=>{u(!0)},V=()=>{u(!1),g(!1)};return d?o!=="intent"?[f,B,{}]:[f,B,{onFocus:vr(y,F),onBlur:vr(x,V),onMouseEnter:vr(p,F),onMouseLeave:vr(b,V),onTouchStart:vr(w,F)}]:[!1,B,{}]}function vr(o,c){return d=>{o&&o(d),d.defaultPrevented||c(d)}}function v0({page:o,...c}){let{router:d}=yp(),s=j.useMemo(()=>lp(d.routes,o,d.basename),[d.routes,o,d.basename]);return s?j.createElement(N0,{page:o,matches:s,...c}):null}function j0(o){let{manifest:c,routeModules:d}=vp(),[s,u]=j.useState([]);return j.useEffect(()=>{let f=!1;return m0(o,c,d).then(g=>{f||u(g)}),()=>{f=!0}},[o,c,d]),s}function N0({page:o,matches:c,...d}){let s=hn(),{future:u,manifest:f,routeModules:g}=vp(),{basename:y}=yp(),{loaderData:x,matches:p}=b0(),b=j.useMemo(()=>tp(o,c,p,f,s,"data"),[o,c,p,f,s]),w=j.useMemo(()=>tp(o,c,p,f,s,"assets"),[o,c,p,f,s]),B=j.useMemo(()=>{if(o===s.pathname+s.search+s.hash)return[];let T=new Set,k=!1;if(c.forEach(P=>{let te=f.routes[P.route.id];!te||!te.hasLoader||(!b.some(le=>le.route.id===P.route.id)&&P.route.id in x&&g[P.route.id]?.shouldRevalidate||te.hasClientLoader?k=!0:T.add(P.route.id))}),T.size===0)return[];let M=d0(o,y,u.unstable_trailingSlashAwareDataRequests,"data");return k&&T.size>0&&M.searchParams.set("_routes",c.filter(P=>T.has(P.route.id)).map(P=>P.route.id).join(",")),[M.pathname+M.search]},[y,u.unstable_trailingSlashAwareDataRequests,x,s,f,b,c,o,g]),F=j.useMemo(()=>p0(w,f),[w,f]),V=j0(w);return j.createElement(j.Fragment,null,B.map(T=>j.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...d})),F.map(T=>j.createElement("link",{key:T,rel:"modulepreload",href:T,...d})),V.map(({key:T,link:k})=>j.createElement("link",{key:T,nonce:d.nonce,...k,crossOrigin:k.crossOrigin??d.crossOrigin})))}function w0(...o){return c=>{o.forEach(d=>{typeof d=="function"?d(c):d!=null&&(d.current=c)})}}var S0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{S0&&(window.__reactRouterVersion="7.13.0")}catch{}function C0({basename:o,children:c,unstable_useTransitions:d,window:s}){let u=j.useRef();u.current==null&&(u.current=rx({window:s,v5Compat:!0}));let f=u.current,[g,y]=j.useState({action:f.action,location:f.location}),x=j.useCallback(p=>{d===!1?y(p):j.startTransition(()=>y(p))},[d]);return j.useLayoutEffect(()=>f.listen(x),[f,x]),j.createElement(e0,{basename:o,children:c,location:g.location,navigationType:g.action,navigator:f,unstable_useTransitions:d})}var jp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Np=j.forwardRef(function({onClick:c,discover:d="render",prefetch:s="none",relative:u,reloadDocument:f,replace:g,state:y,target:x,to:p,preventScrollReset:b,viewTransition:w,unstable_defaultShouldRevalidate:B,...F},V){let{basename:T,unstable_useTransitions:k}=j.useContext(ia),M=typeof p=="string"&&jp.test(p),P=dp(p,T);p=P.to;let te=Hx(p,{relative:u}),[le,N,W]=y0(s,F),Q=E0(p,{replace:g,state:y,target:x,preventScrollReset:b,relative:u,viewTransition:w,unstable_defaultShouldRevalidate:B,unstable_useTransitions:k});function me(Le){c&&c(Le),Le.defaultPrevented||Q(Le)}let ye=j.createElement("a",{...F,...W,href:P.absoluteURL||te,onClick:P.isExternal||f?c:me,ref:w0(V,N),target:x,"data-discover":!M&&d==="render"?"true":void 0});return le&&!M?j.createElement(j.Fragment,null,ye,j.createElement(v0,{page:te})):ye});Np.displayName="Link";var wp=j.forwardRef(function({"aria-current":c="page",caseSensitive:d=!1,className:s="",end:u=!1,style:f,to:g,viewTransition:y,children:x,...p},b){let w=zr(g,{relative:p.relative}),B=hn(),F=j.useContext(es),{navigator:V,basename:T}=j.useContext(ia),k=F!=null&&_0(w)&&y===!0,M=V.encodeLocation?V.encodeLocation(w).pathname:w.pathname,P=B.pathname,te=F&&F.navigation&&F.navigation.location?F.navigation.location.pathname:null;d||(P=P.toLowerCase(),te=te?te.toLowerCase():null,M=M.toLowerCase()),te&&T&&(te=Ua(te,T)||te);const le=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let N=P===M||!u&&P.startsWith(M)&&P.charAt(le)==="/",W=te!=null&&(te===M||!u&&te.startsWith(M)&&te.charAt(M.length)==="/"),Q={isActive:N,isPending:W,isTransitioning:k},me=N?c:void 0,ye;typeof s=="function"?ye=s(Q):ye=[s,N?"active":null,W?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let Le=typeof f=="function"?f(Q):f;return j.createElement(Np,{...p,"aria-current":me,className:ye,ref:b,style:Le,to:g,viewTransition:y},typeof x=="function"?x(Q):x)});wp.displayName="NavLink";var A0=j.forwardRef(({discover:o="render",fetcherKey:c,navigate:d,reloadDocument:s,replace:u,state:f,method:g=Ji,action:y,onSubmit:x,relative:p,preventScrollReset:b,viewTransition:w,unstable_defaultShouldRevalidate:B,...F},V)=>{let{unstable_useTransitions:T}=j.useContext(ia),k=R0(),M=O0(y,{relative:p}),P=g.toLowerCase()==="get"?"get":"post",te=typeof y=="string"&&jp.test(y),le=N=>{if(x&&x(N),N.defaultPrevented)return;N.preventDefault();let W=N.nativeEvent.submitter,Q=W?.getAttribute("formmethod")||g,me=()=>k(W||N.currentTarget,{fetcherKey:c,method:Q,navigate:d,replace:u,state:f,relative:p,preventScrollReset:b,viewTransition:w,unstable_defaultShouldRevalidate:B});T&&d!==!1?j.startTransition(()=>me()):me()};return j.createElement("form",{ref:V,method:P,action:M,onSubmit:s?x:le,...F,"data-discover":!te&&o==="render"?"true":void 0})});A0.displayName="Form";function z0(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Sp(o){let c=j.useContext(Sl);return nt(c,z0(o)),c}function E0(o,{target:c,replace:d,state:s,preventScrollReset:u,relative:f,viewTransition:g,unstable_defaultShouldRevalidate:y,unstable_useTransitions:x}={}){let p=Mc(),b=hn(),w=zr(o,{relative:f});return j.useCallback(B=>{if(r0(B,c)){B.preventDefault();let F=d!==void 0?d:wr(b)===wr(w),V=()=>p(o,{replace:F,state:s,preventScrollReset:u,relative:f,viewTransition:g,unstable_defaultShouldRevalidate:y});x?j.startTransition(()=>V()):V()}},[b,p,w,d,s,c,o,u,f,g,y,x])}function k0(o){ua(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let c=j.useRef(Rc(o)),d=j.useRef(!1),s=hn(),u=j.useMemo(()=>i0(s.search,d.current?null:c.current),[s.search]),f=Mc(),g=j.useCallback((y,x)=>{const p=Rc(typeof y=="function"?y(new URLSearchParams(u)):y);d.current=!0,f("?"+p,x)},[f,u]);return[u,g]}var T0=0,D0=()=>`__${String(++T0)}__`;function R0(){let{router:o}=Sp("useSubmit"),{basename:c}=j.useContext(ia),d=Jx(),s=o.fetch,u=o.navigate;return j.useCallback(async(f,g={})=>{let{action:y,method:x,encType:p,formData:b,body:w}=c0(f,c);if(g.navigate===!1){let B=g.fetcherKey||D0();await s(B,d,g.action||y,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:b,body:w,formMethod:g.method||x,formEncType:g.encType||p,flushSync:g.flushSync})}else await u(g.action||y,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:b,body:w,formMethod:g.method||x,formEncType:g.encType||p,replace:g.replace,state:g.state,fromRouteId:d,flushSync:g.flushSync,viewTransition:g.viewTransition})},[s,u,c,d])}function O0(o,{relative:c}={}){let{basename:d}=j.useContext(ia),s=j.useContext(La);nt(s,"useFormAction must be used inside a RouteContext");let[u]=s.matches.slice(-1),f={...zr(o||".",{relative:c})},g=hn();if(o==null){f.search=g.search;let y=new URLSearchParams(f.search),x=y.getAll("index");if(x.some(b=>b==="")){y.delete("index"),x.filter(w=>w).forEach(w=>y.append("index",w));let b=y.toString();f.search=b?`?${b}`:""}}return(!o||o===".")&&u.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(f.pathname=f.pathname==="/"?d:Ma([d,f.pathname])),wr(f)}function _0(o,{relative:c}={}){let d=j.useContext(fp);nt(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Sp("useViewTransitionState"),u=zr(o,{relative:c});if(!d.isTransitioning)return!1;let f=Ua(d.currentLocation.pathname,s)||d.currentLocation.pathname,g=Ua(d.nextLocation.pathname,s)||d.nextLocation.pathname;return Wi(u.pathname,g)!=null||Wi(u.pathname,f)!=null}const Cp=(...o)=>o.filter((c,d,s)=>!!c&&c.trim()!==""&&s.indexOf(c)===d).join(" ").trim();const M0=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const U0=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(c,d,s)=>s?s.toUpperCase():d.toLowerCase());const ap=o=>{const c=U0(o);return c.charAt(0).toUpperCase()+c.slice(1)};var B0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const L0=o=>{for(const c in o)if(c.startsWith("aria-")||c==="role"||c==="title")return!0;return!1};const H0=j.forwardRef(({color:o="currentColor",size:c=24,strokeWidth:d=2,absoluteStrokeWidth:s,className:u="",children:f,iconNode:g,...y},x)=>j.createElement("svg",{ref:x,...B0,width:c,height:c,stroke:o,strokeWidth:s?Number(d)*24/Number(c):d,className:Cp("lucide",u),...!f&&!L0(y)&&{"aria-hidden":"true"},...y},[...g.map(([p,b])=>j.createElement(p,b)),...Array.isArray(f)?f:[f]]));const Ne=(o,c)=>{const d=j.forwardRef(({className:s,...u},f)=>j.createElement(H0,{ref:f,iconNode:c,className:Cp(`lucide-${M0(ap(o))}`,`lucide-${o}`,s),...u}));return d.displayName=ap(o),d};const q0=[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]],G0=Ne("arrow-down-right",q0);const Y0=[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]],Nr=Ne("arrow-right-left",Y0);const V0=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],P0=Ne("arrow-up-right",V0);const X0=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Ba=Ne("briefcase",X0);const Q0=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],da=Ne("building-2",Q0);const Z0=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Zt=Ne("calendar",Z0);const $0=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Ap=Ne("camera",$0);const K0=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],$i=Ne("chevron-left",K0);const J0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ki=Ne("chevron-right",J0);const I0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],zp=Ne("circle-alert",I0);const F0=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Sr=Ne("circle-check-big",F0);const W0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],eb=Ne("circle-check",W0);const tb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],ab=Ne("circle-x",tb);const nb=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],lb=Ne("cloud-upload",nb);const rb=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],st=Ne("eye",rb);const ib=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Nl=Ne("file-text",ib);const sb=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],qc=Ne("funnel",sb);const ob=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],cb=Ne("grip-vertical",ob);const db=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],as=Ne("image",db);const ub=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],fb=Ne("info",ub);const mb=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],pb=Ne("layout-dashboard",mb);const hb=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],gb=Ne("log-out",hb);const xb=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],_n=Ne("mail",xb);const bb=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Fi=Ne("map-pin",bb);const yb=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],vb=Ne("menu",yb);const jb=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Gc=Ne("message-square",jb);const Nb=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Mt=Ne("package",Nb);const wb=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Er=Ne("pen-line",wb);const Sb=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],vl=Ne("pen",Sb);const Cb=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],pn=Ne("phone",Cb);const Ab=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ra=Ne("plus",Ab);const zb=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Eb=Ne("save",zb);const kb=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ns=Ne("search",kb);const Tb=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ep=Ne("settings",Tb);const Db=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],_a=Ne("shield-check",Db);const Rb=[["path",{d:"M18 21a6 6 0 0 0-12 0",key:"kaz2du"}],["circle",{cx:"12",cy:"11",r:"4",key:"1gt34v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],kp=Ne("square-user-round",Rb);const Ob=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],wt=Ne("tag",Ob);const _b=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Qt=Ne("trash-2",_b);const Mb=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],Tp=Ne("truck",Mb);const Ub=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Bb=Ne("upload",Ub);const Lb=[["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m14.305 16.53.923-.382",key:"1itpsq"}],["path",{d:"m15.228 13.852-.923-.383",key:"eplpkm"}],["path",{d:"m16.852 12.228-.383-.923",key:"13v3q0"}],["path",{d:"m16.852 17.772-.383.924",key:"1i8mnm"}],["path",{d:"m19.148 12.228.383-.923",key:"1q8j1v"}],["path",{d:"m19.53 18.696-.382-.924",key:"vk1qj3"}],["path",{d:"m20.772 13.852.924-.383",key:"n880s0"}],["path",{d:"m20.772 16.148.924.383",key:"1g6xey"}],["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Hb=Ne("user-cog",Lb);const qb=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],Dp=Ne("user-plus",qb);const Gb=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Ut=Ne("user",Gb);const Yb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ve=Ne("x",Yb),Vb="/UserManagement/assets/fislogo-CQhMnhgt.png",Pb=({isOpen:o,toggleSidebar:c})=>{const d=[{name:"Dashboard",path:"/",icon:a.jsx(pb,{size:20})},{name:"Employees",path:"/employees",icon:a.jsx(kp,{size:20})},{name:"Vendors",path:"/vendors",icon:a.jsx(Tp,{size:20})},{name:"Assets",path:"/assets",icon:a.jsx(Mt,{size:20})},{name:"Settings",path:"/settings",icon:a.jsx(Ep,{size:20})}];return a.jsxs("aside",{className:`sidebar ${o?"open":""}`,children:[a.jsxs("div",{className:"sidebar-header",children:[a.jsxs("div",{className:"logo-wrapper",children:[a.jsx("div",{className:"logo-icon",children:a.jsx("img",{src:Vb,alt:"FIS Logo",style:{width:"100%",height:"100%",objectFit:"contain"}})}),a.jsx("h2",{className:"logo-text",children:"Future Invo Solutions"})]}),a.jsx("button",{className:"mobile-close",onClick:c,children:a.jsx(Ve,{size:24})})]}),a.jsx("nav",{className:"sidebar-nav",children:d.map(s=>a.jsxs(wp,{to:s.path,className:({isActive:u})=>`nav-link ${u?"active":""}`,onClick:()=>window.innerWidth<768&&c(),children:[a.jsx("span",{className:"nav-icon",children:s.icon}),a.jsx("span",{className:"nav-text",children:s.name})]},s.path))}),a.jsx("style",{children:`
        .sidebar {
          width: var(--sidebar-width);
          background: var(--bg-sidebar);
          border-right: 1px solid var(--border-color);
          height: 100vh;
          position: fixed;
          left: 0;
          top: 0;
          z-index: 1000;
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .sidebar-header {
          height: var(--header-height);
          display: flex;
          align-items: center;
          padding: 0 var(--padding-md);
          border-bottom: 1px solid var(--divider);
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo-icon {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-text {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--primary);
          margin: 0;
        }

        .mobile-close {
          display: none;
          background: none;
          color: var(--text-muted);
        }

        .sidebar-nav {
          padding: 1rem 0.75rem;
          flex: 1;
        }

        .nav-link {
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          margin-bottom: 0.25rem;
          border-radius: var(--radius-md);
          color: var(--text-muted);
          transition: all 0.2s;
        }

        .nav-link:hover {
          background: var(--bg-main);
          color: var(--text-main);
        }

        .nav-link.active {
          background: rgba(37, 99, 235, 0.08);
          color: var(--primary);
          font-weight: 600;
        }

        .nav-icon {
          display: flex;
          margin-right: 0.75rem;
        }

        @media (max-width: 768px) {
          .sidebar {
            transform: translateX(-100%);
          }
          .sidebar.open {
            transform: translateX(0);
          }
          .mobile-close {
            display: block;
            margin-left: auto;
          }
        }
      `})]})},Xb=({toggleSidebar:o,toggleProfile:c})=>a.jsxs("header",{className:"header",children:[a.jsx("div",{className:"header-left",children:a.jsx("button",{className:"mobile-toggle",onClick:o,children:a.jsx(vb,{size:24})})}),a.jsx("div",{className:"header-right",children:a.jsxs("div",{className:"user-profile",onClick:c,style:{cursor:"pointer"},children:[a.jsxs("div",{className:"user-info",children:[a.jsx("span",{className:"user-name",children:"John Doe"}),a.jsx("span",{className:"user-role",children:"Super Admin"})]}),a.jsx("div",{className:"avatar",children:a.jsx(Ut,{size:20})})]})}),a.jsx("style",{children:`
        .header {
          height: var(--header-height);
          background: var(--bg-header);
          border-bottom: 1px solid var(--border-color);
          position: fixed;
          top: 0;
          right: 0;
          left: var(--sidebar-width);
          z-index: 900;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 var(--padding-md);
          transition: left 0.3s ease;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
        }

        .mobile-toggle {
          display: none;
          background: none;
          color: var(--text-muted);
        }

        .search-bar {
          position: relative;
          max-width: 400px;
          width: 100%;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .search-bar input {
          width: 100%;
          padding: 0.6rem 1rem 0.6rem 2.5rem;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          background: var(--bg-main);
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.2s;
        }

        .search-bar input:focus {
          border-color: var(--primary);
          background: white;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }



        .user-profile {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding-left: 1.5rem;
          border-left: 1px solid var(--divider);
        }

        .user-info {
          display: flex;
          flex-direction: column;
          text-align: right;
        }

        .user-name {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .user-role {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .avatar {
          width: 36px;
          height: 36px;
          background: var(--bg-main);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          border: 1px solid var(--border-color);
        }

        @media (max-width: 768px) {
          .header {
            left: 0;
          }
          .mobile-toggle {
            display: block;
          }
          .user-info {
            display: none;
          }
        }
      `})]}),Qb=({isOpen:o,onClose:c})=>{const[d,s]=j.useState(!1),[u,f]=j.useState({name:"Vara Laxsmi",email:"hr@futureinvo.com",phone:"+91 92475 51330",role:"Super Admin",department:"Operations",location:"Madhapur, Hyderabad",joinDate:"Jan 2021"}),[g,y]=j.useState({...u}),x=()=>{f({...g}),s(!1)},p=()=>{y({...u}),s(!1)};return o?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"drawer-overlay",onClick:c}),a.jsxs("div",{className:`profile-drawer ${o?"open":""}`,children:[a.jsxs("div",{className:"drawer-header",children:[a.jsx("h3",{children:"User Profile"}),a.jsx("button",{className:"close-btn",onClick:c,children:a.jsx(Ve,{size:20})})]}),a.jsxs("div",{className:"drawer-body",children:[a.jsxs("div",{className:"profile-badge-section",children:[a.jsx("div",{className:"profile-avatar-large",children:a.jsx(Ut,{size:40})}),a.jsxs("div",{className:"profile-info-top",children:[a.jsx("h4",{children:u.name}),a.jsx("span",{className:"status-badge-online",children:"Online"})]})]}),a.jsxs("div",{className:"drawer-section",children:[a.jsxs("div",{className:"section-title",children:[a.jsx("span",{children:"Personal Information"}),!d&&a.jsxs("button",{className:"edit-link",onClick:()=>s(!0),children:[a.jsx(vl,{size:14})," Edit"]})]}),a.jsxs("div",{className:"info-list",children:[a.jsxs("div",{className:"info-item",children:[a.jsxs("label",{children:[a.jsx(_n,{size:14})," Email"]}),d?a.jsx("input",{type:"email",value:g.email,onChange:b=>y({...g,email:b.target.value})}):a.jsx("p",{children:u.email})]}),a.jsxs("div",{className:"info-item",children:[a.jsxs("label",{children:[a.jsx(pn,{size:14})," Phone"]}),d?a.jsx("input",{type:"text",value:g.phone,onChange:b=>y({...g,phone:b.target.value})}):a.jsx("p",{children:u.phone})]}),a.jsxs("div",{className:"info-item",children:[a.jsxs("label",{children:[a.jsx(Fi,{size:14})," Location"]}),d?a.jsx("input",{type:"text",value:g.location,onChange:b=>y({...g,location:b.target.value})}):a.jsx("p",{children:u.location})]})]}),d&&a.jsxs("div",{className:"drawer-actions",children:[a.jsxs("button",{className:"primary-btn-sm",onClick:x,children:[a.jsx(Eb,{size:14})," Save Changes"]}),a.jsx("button",{className:"secondary-btn-sm",onClick:p,children:"Cancel"})]})]}),a.jsxs("div",{className:"drawer-section",children:[a.jsx("div",{className:"section-title",children:"Professional Info"}),a.jsxs("div",{className:"info-list",children:[a.jsxs("div",{className:"info-item",children:[a.jsxs("label",{children:[a.jsx(Ba,{size:14})," Role"]}),a.jsx("p",{children:u.role})]}),a.jsxs("div",{className:"info-item",children:[a.jsxs("label",{children:[a.jsx(da,{size:14})," Department"]}),a.jsx("p",{children:u.department})]}),a.jsxs("div",{className:"info-item",children:[a.jsxs("label",{children:[a.jsx(Zt,{size:14})," Joined"]}),a.jsx("p",{children:u.joinDate})]})]})]})]}),a.jsx("div",{className:"drawer-footer",children:a.jsxs("button",{className:"logout-btn",children:[a.jsx(gb,{size:16})," Logout"]})})]}),a.jsx("style",{children:`
        .drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(2px);
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }

        .profile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 380px;
          max-width: 90vw;
          background: white;
          z-index: 1001;
          display: flex;
          flex-direction: column;
          box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
          animation: slideInRight 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .drawer-header {
          padding: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .drawer-header h3 {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .close-btn {
          background: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0.25rem;
          border-radius: 6px;
          transition: all 0.2s;
        }

        .close-btn:hover {
          background: var(--bg-main);
          color: var(--text-main);
        }

        .drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem;
        }

        .profile-badge-section {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 2rem;
          background: var(--bg-main);
          padding: 1rem;
          border-radius: 12px;
        }

        .profile-avatar-large {
          width: 64px;
          height: 64px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          border: 2px solid var(--primary);
        }

        .profile-info-top h4 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .status-badge-online {
          font-size: 0.75rem;
          color: #10b981;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .status-badge-online::before {
          content: '';
          width: 6px;
          height: 6px;
          background: #10b981;
          border-radius: 50%;
        }

        .drawer-section {
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .edit-link {
          background: none;
          color: var(--primary);
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .info-item label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.25rem;
        }

        .info-item p {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .info-item input {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          font-size: 0.875rem;
          outline: none;
        }

        .drawer-actions {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .primary-btn-sm {
          background: var(--primary);
          color: white;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .secondary-btn-sm {
          background: white;
          border: 1px solid var(--border-color);
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .drawer-footer {
          padding: 1.5rem;
          border-top: 1px solid var(--border-color);
        }

        .logout-btn {
          width: 100%;
          padding: 0.75rem;
          background: #fef2f2;
          color: #ef4444;
          border: 1px solid #fecaca;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .logout-btn:hover {
          background: #fee2e2;
        }
      `})]}):null},Zb=({children:o})=>{const[c,d]=j.useState(!1),[s,u]=j.useState(!1),f=()=>d(!c),g=()=>u(!s);return a.jsxs("div",{className:"dashboard-container",children:[a.jsx(Pb,{isOpen:c,toggleSidebar:f}),a.jsxs("main",{className:"main-content",children:[a.jsx(Xb,{toggleSidebar:f,toggleProfile:g}),a.jsx("div",{className:"content-area",children:o})]}),a.jsx(Qb,{isOpen:s,onClose:()=>u(!1)}),c&&a.jsx("div",{className:"mobile-overlay",onClick:f}),a.jsx("style",{children:`
        .mobile-overlay {
          display: none;
        }

        @media (max-width: 768px) {
          .mobile-overlay {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(2px);
            z-index: 950;
          }
        }
      `})]})},$b="/api";class Kb{async request(c,d="GET",s=null){try{const u=s instanceof FormData,f={method:d,headers:{}};u||(f.headers["Content-Type"]="application/json"),d!=="GET"&&s&&(u?(f.body=s,delete f.headers["Content-Type"]):f.body=JSON.stringify(s));const g=await fetch(`${$b}${c}`,f);if(!g.ok){let p=`HTTP Error: ${g.status}`,b="";try{b=await g.text();const w=JSON.parse(b);console.error("Backend Error Object:",w),p=w.message||JSON.stringify(w)}catch{console.error("Backend Raw Error Text:",b),p=b||p}throw new Error(p)}if(g.status===204)return null;const y=await g.text();if(!y)return null;let x;try{x=JSON.parse(y)}catch{return console.warn("API returned non-JSON response:",y),y}return x&&x.data!==void 0?x.data:x}catch(u){throw console.error(`API Error (${c}):`,u),u}}get(c){return this.request(c)}post(c,d){return this.request(c,"POST",d)}put(c,d){return this.request(c,"PUT",d)}patch(c,d){return this.request(c,"PATCH",d)}delete(c){return this.request(c,"DELETE")}getDepartments(){return this.get("/departments")}createDepartment(c){const d={deptCode:c.deptCode||c.deptId,deptName:c.deptName};return this.post("/departments",d)}updateDepartment(c,d){const s={deptCode:d.deptCode||d.deptId,deptName:d.deptName};return this.put(`/departments/${c}`,s)}deleteDepartment(c){return this.delete(`/departments/${c}`)}getRoles(){return this.get("/roles")}createRole(c){const d={roleCode:c.roleCode,roleName:c.roleName};return this.post("/roles",d)}updateRole(c,d){const s={roleCode:d.roleCode,roleName:d.roleName};return this.put(`/roles/${c}`,s)}deleteRole(c){return this.delete(`/roles/${c}`)}getEntities(){return this.get("/entities")}createEntity(c){const d={entityCode:c.entityCode,entityName:c.entityName};return this.post("/entities",d)}updateEntity(c,d){const s={entityCode:d.entityCode,entityName:d.entityName};return this.put(`/entities/${c}`,s)}deleteEntity(c){return this.delete(`/entities/${c}`)}getEmployees(){return this.get("/employees")}getEmployeeDetail(c){return this.get(`/employees/${c}`)}async getEmployeesWithDetails(){const c=await this.get("/employees"),d=Array.isArray(c)?c:[];return await Promise.all(d.map(async u=>{try{const f=await this.get(`/employees/${u.id}`);return{...u,...f}}catch(f){return console.warn(`[API] Could not fetch detail for employee ${u.id}:`,f),u}}))}createEmployee(c){const d={fullName:c.name,dept:c.department,entity:c.entity,role:c.role,dateOfOnboarding:c.dateOfOnboarding,dateOfInterview:c.dateOfInterview,dateOfBirth:c.dateOfBirth,email:c.email,phone:c.phone,status:c.status||"ONBOARDING"};return this.post("/employees/employees",d)}updateEmployee(c,d){const s={fullName:d.name,dept:d.department,entity:d.entity,role:d.role,dateOfOnboarding:d.dateOfOnboarding,dateOfInterview:d.dateOfInterview,dateOfBirth:d.dateOfBirth,email:d.email,phone:d.phone,status:d.status||"Active"};return this.put(`/employees/${c}`,s)}deleteEmployee(c){return this.delete(`/employees/${c}`)}submitOnboarding(c,d){const s=d?`/onboarding/submit?token=${encodeURIComponent(d)}`:"/onboarding/submit";return this.post(s,c)}getOnboardingByToken(c){return this.get(`/onboarding/detail?token=${encodeURIComponent(c)}`)}reviewOnboarding(c,d){const s=d?`/onboarding/review?token=${encodeURIComponent(d)}`:"/onboarding/review";return this.post(s,c)}submitWithDto(c,d,s={}){const u=new FormData;return u.append("dto",new Blob([JSON.stringify(d)],{type:"application/json"})),Object.entries(s).forEach(([f,g])=>{g&&(Array.isArray(g)?g.forEach(y=>u.append(f,y)):u.append(f,g))}),this.post(c,u)}getOnboardingDetail(c){return this.get(`/onboarding/${c}`)}rejectOnboardingDocument(c,d,s){return this.post("/onboarding/reject-document",{employeeId:c,entityType:d,entityId:s})}getVendors(){return this.get("/vendors")}createVendor(c){return this.post("/vendors",c)}updateVendor(c,d){return this.put(`/vendors/${c}`,d)}deleteVendor(c){return this.delete(`/vendors/${c}`)}getVendorTypes(){return this.get("/vendor-types")}createVendorType(c){const d={typeName:c.typeName||c.name};return this.post("/vendor-types",d)}updateVendorType(c,d){const s={typeName:d.typeName||d.name};return this.put(`/vendor-types/${c}`,s)}deleteVendorType(c){return this.delete(`/vendor-types/${c}`)}getAssetTypes(){return this.get("/asset-types")}createAssetType(c){const d={typeName:c.typeName||c.name,fields:c.fields||[]};return this.post("/asset-types",d)}updateAssetType(c,d){const s={typeName:d.typeName||d.name,fields:d.fields||[]};return this.put(`/asset-types/${c}`,s)}deleteAssetType(c){return this.delete(`/asset-types/${c}`)}getAssets(){return this.get("/assets")}async createAsset(c){console.log("🔧 API Service - Creating asset (Multipart):",c);const d=new FormData;return d.append("assetName",c.assetName||c.name),d.append("assetTag",c.assetTag||c.tag),d.append("receiverName",c.receiverName||""),d.append("exchangeType",c.exchangeType||"Issue"),d.append("vendorId",c.vendorId||c.vendor?.vendorId||""),d.append("remarks",c.remarks||""),d.append("companyName",c.companyName||""),d.append("generation",c.generation||""),d.append("ram",c.ram||""),d.append("hardDisk",c.hardDisk||""),d.append("procurementType",c.procurementType||"Purchasing"),d.append("purchaseDate",c.purchaseDate||""),d.append("poNumber",c.poNumber||""),d.append("invoiceNumber",c.invoiceNumber||""),d.append("purchaseCost",c.purchaseCost||""),d.append("warrantyPeriod",c.warrantyPeriod||""),d.append("vendorContact",c.vendorContact||""),d.append("deliveryDate",c.deliveryDate||""),d.append("returnDate",c.returnDate||""),d.append("agreementNumber",c.agreementNumber||""),d.append("securityDeposit",c.securityDeposit||""),c.customFields&&d.append("customFields",JSON.stringify(c.customFields)),c.photoFiles&&c.photoFiles.length>0&&c.photoFiles.forEach(s=>{d.append("files",s)}),console.log("🚀 API Service - Sending createAsset request (Multipart) to /assets"),this.post("/assets",d)}async updateAsset(c,d){console.log("🔧 API Service - Updating asset (JSON via PATCH):",c,d);const s={assetName:d.assetName||d.name,assetTag:d.assetTag||d.tag,receiverName:d.receiverName||"",exchangeType:d.exchangeType||"Issue",remarks:d.remarks||"",companyName:d.companyName||"",generation:d.generation||"",ram:d.ram||"",hardDisk:d.hardDisk||"",procurementType:d.procurementType||"Purchasing",purchaseDate:d.purchaseDate||"",poNumber:d.poNumber||"",invoiceNumber:d.invoiceNumber||"",purchaseCost:d.purchaseCost||"",warrantyPeriod:d.warrantyPeriod||"",vendorContact:d.vendorContact||"",deliveryDate:d.deliveryDate||"",returnDate:d.returnDate||"",agreementNumber:d.agreementNumber||"",securityDeposit:d.securityDeposit||"",customFields:d.customFields||{}},u=d.vendorId||d.vendor?.vendorId;return u&&(s.vendor={vendorId:u}),console.log("🚀 API Service - Sending updateAsset request (JSON) to /assets/"+c),this.patch(`/assets/${c}`,s)}deleteAsset(c){return this.delete(`/assets/${c}`)}activateEmployee(c){return this.patch(`/employees/${c}/activate`,{})}}const xe=new Kb,Jb=()=>{const o=Mc(),[c,d]=j.useState([]),[s,u]=j.useState([]),[f,g]=j.useState({employees:0,vendors:0,assets:0});j.useEffect(()=>{(async()=>{try{const[p,b,w]=await Promise.all([xe.getEmployees(),xe.getVendors(),xe.getAssets()]),B=Array.isArray(p)?p:p?.data||[],F=Array.isArray(b)?b:b?.data||[],V=Array.isArray(w)?w:w?.data||[];d(B),g({employees:B.length,vendors:F.length,assets:V.length}),u([...B].reverse().slice(0,5))}catch(p){console.error("Failed to fetch dashboard data:",p)}})()},[]);const y=[{title:"Total Employees",value:f.employees.toString(),icon:a.jsx(kp,{}),color:"var(--success)",trend:"Live",up:!0},{title:"Active Vendors",value:f.vendors.toString(),icon:a.jsx(Tp,{}),color:"var(--info)",trend:"Live",up:!0},{title:"Total Assets",value:f.assets.toString(),icon:a.jsx(Mt,{}),color:"var(--warning)",trend:"Live",up:!0}];return a.jsxs("div",{className:"dashboard-page animate-fade-in",children:[a.jsxs("header",{className:"page-header",children:[a.jsx("h1",{children:"Dashboard Overview"}),a.jsx("p",{children:"Operational summary and recent system activities."})]}),a.jsx("div",{className:"kpi-grid",children:y.map((x,p)=>a.jsxs("div",{className:"card kpi-card",children:[a.jsx("div",{className:"kpi-icon",style:{backgroundColor:`${x.color}15`,color:x.color},children:x.icon}),a.jsxs("div",{className:"kpi-info",children:[a.jsx("span",{className:"kpi-title",children:x.title}),a.jsxs("div",{className:"kpi-value-row",children:[a.jsx("span",{className:"kpi-value",children:x.value}),a.jsxs("span",{className:`kpi-trend ${x.up?"up":"down"}`,children:[x.up?a.jsx(P0,{size:14}):a.jsx(G0,{size:14}),x.trend]})]})]})]},p))}),a.jsx("div",{className:"dashboard-content-grid",children:a.jsxs("div",{className:"card recent-activity",children:[a.jsxs("div",{className:"card-header",children:[a.jsx("h3",{children:"Recently Added Employees"}),a.jsx("button",{className:"text-btn",onClick:()=>o("/employees"),children:"View All"})]}),a.jsx("div",{className:"activity-list",children:s.length>0?s.map(x=>a.jsxs("div",{className:"activity-item",children:[a.jsx("div",{className:"activity-icon-wrapper",children:a.jsx(Dp,{size:16,color:"var(--success)"})}),a.jsxs("div",{className:"activity-details",children:[a.jsxs("p",{className:"activity-text",children:[a.jsx("strong",{children:x.fullName||x.name})," was onboarded as ",a.jsx("span",{children:x.roleName||x.role})]}),a.jsxs("div",{className:"activity-meta",children:[a.jsxs("span",{className:"activity-time",children:[a.jsx(Zt,{size:12})," ",x.dateOfOnboarding||x.onboardingDate||"N/A"]}),a.jsx("span",{className:"activity-dept",children:x.deptName||x.department||""})]})]})]},x.id)):a.jsx("div",{className:"empty-state",children:a.jsx("p",{children:"No recent employees found."})})})]})}),a.jsx("style",{children:`
        .dashboard-page {
          animation: fadeIn 0.6s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .page-header h1 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .page-header p {
          color: var(--text-muted);
          font-size: 0.875rem;
        }

        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .kpi-card {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .kpi-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .kpi-info {
          flex: 1;
        }

        .kpi-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.025em;
        }

        .kpi-value-row {
          display: flex;
          align-items: baseline;
          gap: 0.75rem;
        }

        .kpi-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .kpi-trend {
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
        }

        .kpi-trend.up { color: var(--success); }
        .kpi-trend.down { color: var(--danger); }

        .dashboard-content-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .card-header h3 {
          font-size: 1rem;
          font-weight: 600;
        }

        .text-btn {
          background: none;
          color: var(--primary);
          font-size: 0.875rem;
          font-weight: 600;
        }

        .activity-item {
          display: flex;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid var(--divider);
        }

        .activity-item:last-child {
          border-bottom: none;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-top: 6px;
        }

        .status-dot.success { background: var(--success); }
        .status-dot.danger { background: var(--danger); }
        .status-dot.info { background: var(--info); }
        .status-dot.warning { background: var(--warning); }

        .activity-icon-wrapper {
          width: 36px;
          height: 36px;
          background: rgba(34, 197, 94, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .activity-meta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-top: 0.25rem;
        }

        .activity-time {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .activity-dept {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--primary);
          background: rgba(37, 99, 235, 0.05);
          padding: 0.125rem 0.5rem;
          border-radius: 4px;
        }

        .empty-state {
          padding: 2rem;
          text-align: center;
          color: var(--text-muted);
        }

        .activity-text {
          font-size: 0.875rem;
          color: var(--text-main);
        }

        .activity-text span {
          color: var(--text-muted);
        }

        .activity-time {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .health-stats {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .health-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.875rem;
        }

        .text-secondary {
          color: var(--text-muted);
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .dashboard-content-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Ib=o=>{const c=o.getDay();return c===0||c===6},Fb=(o,c)=>{if(!o)return!1;const d=new Date(o),s=new Date;if(s<d)return!1;let u=0;const f=new Date(d);for(f.setDate(f.getDate()+1);f<=s;)Ib(f)||u++,f.setDate(f.getDate()+1);return u>=c},Wb=({isOpen:o,onClose:c,onAdd:d,departments:s=[],roles:u=[],entities:f=[]})=>{const[g,y]=j.useState({name:"",department:"",entity:"",role:"",dateOfInterview:"",dateOfOnboarding:"",dateOfBirth:"",email:"",phone:"",status:"ONBOARDING"}),x=k=>k.deptName||k.name||k.departmentName||k,p=k=>k.deptCode||k.deptId||k.id,b=k=>k.roleName||k.name||k,w=k=>k.roleCode||k.roleId||k.id,B=k=>k.entityName||k.name||k,F=k=>k.entityCode||k.entityId||k.id;if(!o)return null;const V=k=>{if(k.preventDefault(),!g.name||!g.email||!g.phone||!g.department||!g.role||!g.entity){alert("Please fill in all required fields.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g.email)){alert("Please enter a valid email address.");return}d(g),y({name:"",department:"",entity:"",role:"",dateOfInterview:"",dateOfOnboarding:"",dateOfBirth:"",email:"",phone:"",status:"ONBOARDING"}),c()},T=k=>{const{name:M,value:P}=k.target;y(te=>({...te,[M]:P}))};return a.jsxs("div",{className:"modal-overlay",onClick:c,children:[a.jsxs("div",{className:"modal-content card",onClick:k=>k.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsxs("div",{children:[a.jsx("h2",{children:"Add New Employee"}),a.jsx("p",{className:"subtitle",children:"Create a new employee record in the directory."})]}),a.jsx("button",{className:"close-btn",onClick:c,children:a.jsx(Ve,{size:20})})]}),a.jsxs("form",{onSubmit:V,className:"employee-form",children:[a.jsxs("div",{className:"form-section",children:[a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Full Name"}),a.jsx("input",{type:"text",name:"name",value:g.name,onChange:T,required:!0,placeholder:"Enter full name"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Email ID"}),a.jsx("input",{type:"email",name:"email",value:g.email,onChange:T,required:!0,placeholder:"example@company.com"})]})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Department"}),a.jsxs("select",{name:"department",value:g.department,onChange:T,required:!0,children:[a.jsx("option",{value:"",children:"Select Department"}),s.map(k=>a.jsx("option",{value:p(k),children:x(k)},p(k)))]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Role & Designation"}),a.jsxs("select",{name:"role",value:g.role,onChange:T,required:!0,children:[a.jsx("option",{value:"",children:"Select Role"}),u.map(k=>a.jsx("option",{value:w(k),children:b(k)},w(k)))]})]})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Entity"}),a.jsxs("select",{name:"entity",value:g.entity,onChange:T,required:!0,children:[a.jsx("option",{value:"",children:"Select Entity"}),f.map(k=>a.jsx("option",{value:F(k),children:B(k)},F(k)))]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Phone Number"}),a.jsx("input",{type:"tel",name:"phone",value:g.phone,onChange:T,required:!0,placeholder:"Enter phone number"})]})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Date of Birth"}),a.jsx("input",{type:"date",name:"dateOfBirth",value:g.dateOfBirth,onChange:T})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Date of Interview"}),a.jsx("input",{type:"date",name:"dateOfInterview",value:g.dateOfInterview,onChange:T})]})]}),a.jsx("div",{className:"form-row",children:a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Date of Onboarding"}),a.jsx("input",{type:"date",name:"dateOfOnboarding",value:g.dateOfOnboarding,onChange:T})]})})]}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{type:"button",className:"secondary-btn",onClick:c,children:"Cancel"}),a.jsx("button",{type:"submit",className:"primary-btn",children:"Create Employee"})]})]})]}),a.jsx("style",{children:`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.4);
                    backdrop-filter: blur(8px);
                    display: flex;
                    justify-content: center;
                    z-index: 9999;
                    padding: 2rem 1rem;
                    overflow-y: auto;
                }
                
                .modal-content {
                    width: 100%;
                    max-width: 600px;
                    background: white;
                    border-radius: 16px;
                    margin: auto;
                    position: relative;
                    overflow: visible;
                    box-shadow: 
                        0 20px 25px -5px rgba(0, 0, 0, 0.1),
                        0 10px 10px -5px rgba(0, 0, 0, 0.04),
                        0 0 0 1px rgba(0, 0, 0, 0.05);
                }

                .modal-header {
                    padding: 1.5rem;
                    border-bottom: 1px solid var(--divider);
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }

                .modal-header h2 {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: var(--text-main);
                    margin-bottom: 0.25rem;
                }

                .subtitle {
                    font-size: 0.875rem;
                    color: var(--text-muted);
                }

                .close-btn {
                    background: none;
                    color: var(--text-muted);
                    padding: 0.5rem;
                    border-radius: 6px;
                    transition: all 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .close-btn:hover {
                    background: var(--bg-main);
                    color: var(--text-main);
                }

                .employee-form {
                    padding: 1.5rem;
                }

                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                    margin-bottom: 1rem;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }

                .full-width {
                    grid-column: span 2;
                }

                .form-group label {
                    font-size: 0.8125rem;
                    font-weight: 600;
                    color: var(--text-main);
                }

                .form-group input, 
                .form-group select {
                    padding: 0.625rem 0.875rem;
                    border: 1px solid var(--border-color);
                    border-radius: 6px;
                    font-size: 0.875rem;
                    outline: none;
                    transition: all 0.2s;
                }

                .form-group input:focus, 
                .form-group select:focus {
                    border-color: var(--primary);
                    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
                }

                .modal-footer {
                    padding: 1.5rem;
                    background: var(--bg-main);
                    display: flex;
                    justify-content: flex-end;
                    gap: 0.75rem;
                    margin: 0.5rem -1.5rem -1.5rem -1.5rem;
                }

                .primary-btn {
                    background: var(--primary);
                    color: white;
                    padding: 0.625rem 1.25rem;
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: 0.875rem;
                }

                .secondary-btn {
                    background: white;
                    border: 1px solid var(--border-color);
                    color: var(--text-main);
                    padding: 0.625rem 1.25rem;
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: 0.875rem;
                }

                @media (max-width: 640px) {
                    .form-row {
                        grid-template-columns: 1fr;
                    }
                    .full-width {
                        grid-column: span 1;
                    }
                }
            `})]})},ey=({isOpen:o,onClose:c,onUpdate:d,employee:s,departments:u=[],roles:f=[],entities:g=[]})=>{const[y,x]=j.useState({name:"",department:"",entity:"",role:"",dateOfInterview:"",dateOfOnboarding:"",dateOfBirth:"",email:"",phone:"",status:"ACTIVE"}),p=M=>M.deptName||M.name||M.departmentName||M,b=M=>M.deptCode||M.deptId||M.id,w=M=>M.roleName||M.name||M,B=M=>M.roleCode||M.roleId||M.id,F=M=>M.entityName||M.name||M,V=M=>M.entityCode||M.entityId||M.id;if(j.useEffect(()=>{if(s){const M=(P,te,le,N)=>{if(!P)return"";const W=te.find(me=>le(me)===P);if(W)return le(W);const Q=te.find(me=>N(me)===P);return Q?le(Q):P};x({name:s.name||s.fullName||"",department:M(s.dept||s.deptCode||s.dept_id||s.department&&b(s.department),u,b,p),entity:M(s.entity||s.entityCode||s.entity_name||s.entity&&V(s.entity),g,V,F),role:M(s.role||s.roleCode||s.role_id||s.role&&B(s.role),f,B,w),dateOfInterview:s.dateOfInterview||"",dateOfOnboarding:s.onboardingDate||s.dateOfOnboarding||"",dateOfBirth:s.dateOfBirth||s.dob||"",email:s.email||"",phone:s.phone||"",status:s.status})}},[s,u,f,g]),!o||!s)return null;const T=M=>{if(M.preventDefault(),!y.name||!y.department||!y.role||!y.email||!y.phone||!y.entity){alert("Please fill in all required fields.");return}d(y),c()},k=M=>{const{name:P,value:te}=M.target;x(le=>({...le,[P]:te}))};return a.jsxs("div",{className:"modal-overlay",onClick:c,children:[a.jsxs("div",{className:"modal-content animate-slide-up",onClick:M=>M.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("div",{className:"header-icon",children:a.jsx(Er,{size:24})}),a.jsxs("div",{className:"header-text",children:[a.jsx("h2",{children:"Edit Employee Profile"}),a.jsxs("p",{className:"subtitle",children:["Update records for ",s.name,"."]})]}),a.jsx("button",{className:"close-btn",onClick:c,children:a.jsx(Ve,{size:20})})]}),a.jsxs("form",{onSubmit:T,className:"employee-form",children:[a.jsxs("div",{className:"form-section",children:[a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(Ut,{size:14})," Full Name"]}),a.jsx("input",{type:"text",name:"name",value:y.name,onChange:k,required:!0,placeholder:"e.g. John Doe"})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(_n,{size:14})," Email Address"]}),a.jsx("input",{type:"email",name:"email",value:y.email,onChange:k,required:!0,placeholder:"john@example.com"})]})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(da,{size:14})," Department"]}),a.jsxs("select",{name:"department",value:y.department,onChange:k,className:"form-select",required:!0,children:[a.jsx("option",{value:"",children:"Select Department"}),u.map(M=>a.jsx("option",{value:b(M),children:p(M)},b(M)))]})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(Ba,{size:14})," Role / Designation"]}),a.jsxs("select",{name:"role",value:y.role,onChange:k,className:"form-select",required:!0,children:[a.jsx("option",{value:"",children:"Select Role"}),f.map(M=>a.jsx("option",{value:B(M),children:w(M)},B(M)))]})]})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(da,{size:14})," Entity"]}),a.jsxs("select",{name:"entity",value:y.entity,onChange:k,className:"form-select",required:!0,children:[a.jsx("option",{value:"",children:"Select Entity"}),g.map(M=>a.jsx("option",{value:V(M),children:F(M)},V(M)))]})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(pn,{size:14})," Phone Number"]}),a.jsx("input",{type:"tel",name:"phone",value:y.phone,onChange:k,required:!0,placeholder:"+91 XXXXX XXXXX"})]})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(Zt,{size:14})," Date of Birth"]}),a.jsx("input",{type:"date",name:"dateOfBirth",value:y.dateOfBirth,onChange:k})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(Zt,{size:14})," Date of Interview"]}),a.jsx("input",{type:"date",name:"dateOfInterview",value:y.dateOfInterview,onChange:k})]})]}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(Zt,{size:14})," Date of Onboarding"]}),a.jsx("input",{type:"date",name:"dateOfOnboarding",value:y.dateOfOnboarding,onChange:k})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(_a,{size:14})," Status"]}),a.jsxs("select",{name:"status",value:y.status,onChange:k,className:"form-select",children:[a.jsx("option",{value:"ACTIVE",children:"Active"}),a.jsx("option",{value:"INACTIVE",children:"Inactive"}),a.jsx("option",{value:"ONBOARDING",children:"Onboarding"})]})]})]})]}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{type:"button",className:"secondary-btn",onClick:c,children:"Cancel"}),a.jsx("button",{type:"submit",className:"primary-btn",children:"Update Profile"})]})]})]}),a.jsx("style",{children:`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.4);
                    backdrop-filter: blur(8px);
                    display: flex;
                    justify-content: center;
                    z-index: 9999;
                    padding: 2rem 1rem;
                    overflow-y: auto;
                }

                .modal-content {
                    width: 100%;
                    max-width: 600px;
                    background: white;
                    border-radius: 16px;
                    margin: auto;
                    position: relative;
                    overflow: visible;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                }

                .modal-header {
                    padding: 1.5rem 2rem;
                    border-bottom: 1px solid var(--divider);
                    display: flex;
                    align-items: center;
                    gap: 1.25rem;
                    background: #f8fafc;
                }

                .header-icon {
                    width: 48px;
                    height: 48px;
                    background: #e0f2fe;
                    color: #0ea5e9;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .header-text h2 {
                    font-size: 1.25rem;
                    font-weight: 800;
                    margin-bottom: 0.125rem;
                }

                .subtitle {
                    font-size: 0.8125rem;
                    color: var(--text-muted);
                }

                .close-btn {
                    margin-left: auto;
                    background: white;
                    border: 1px solid var(--divider);
                    padding: 0.5rem;
                    border-radius: 8px;
                    cursor: pointer;
                }

                .close-btn:hover {
                    background: #fee2e2;
                    color: #ef4444;
                }

                .employee-form {
                    padding: 2rem;
                }

                .form-section {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.25rem;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .form-group.full-width {
                    grid-column: 1 / -1;
                }

                .form-group label {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--text-muted);
                    text-transform: uppercase;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .form-group input, 
                .form-group select {
                    padding: 0.75rem 1rem;
                    border: 1px solid var(--border-color);
                    border-radius: 10px;
                    font-size: 0.875rem;
                    outline: none;
                }

                .form-group input:focus, 
                .form-group select:focus {
                    border-color: var(--primary);
                    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
                }

                .readonly-field {
                    background: #f8fafc;
                    color: var(--text-muted);
                    cursor: not-allowed;
                }

                .modal-footer {
                    padding: 1.5rem 2rem;
                    background: #f8fafc;
                    display: flex;
                    justify-content: flex-end;
                    gap: 1rem;
                    border-top: 1px solid var(--divider);
                }

                .primary-btn {
                    background: var(--primary);
                    color: white;
                    padding: 0.75rem 1.75rem;
                    border-radius: 10px;
                    font-weight: 700;
                    cursor: pointer;
                }

                .secondary-btn {
                    background: white;
                    border: 1px solid var(--border-color);
                    padding: 0.75rem 1.75rem;
                    border-radius: 10px;
                    font-weight: 600;
                    cursor: pointer;
                }

                .animate-slide-up {
                    animation: slideUp 0.3s ease-out;
                }

                @keyframes slideUp {
                    from { transform: translateY(10px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                @media (max-width: 640px) {
                    .form-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `})]})},jr=o=>{if(!o)return"-";if(Array.isArray(o)){const[c,d,s]=o;return`${c}-${String(d).padStart(2,"0")}-${String(s).padStart(2,"0")}`}if(typeof o=="string"){if(o.includes("T")){let c;return o.endsWith("Z")?c=new Date(o):c=new Date(o+"Z"),isNaN(c.getTime())?o.split("T")[0]:c.toLocaleDateString("en-CA")}return o}return String(o)},ty=o=>{if(!o)return{date:"-",time:"-"};if(Array.isArray(o)){const[c,d,s,u,f]=o;return{date:`${c}-${String(d).padStart(2,"0")}-${String(s).padStart(2,"0")}`,time:`${String(u||0).padStart(2,"0")}:${String(f||0).padStart(2,"0")}`}}if(typeof o=="string"){if(o.includes("T")){let d;if(o.endsWith("Z")?d=new Date(o):d=new Date(o+"Z"),!isNaN(d.getTime()))return{date:d.toLocaleDateString("en-CA"),time:d.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"})}}const c=o.split(/[T ]/);return{date:c[0]||"-",time:c[1]?c[1].substring(0,5):"-"}}return{date:"-",time:"-"}},Be=(o,c)=>{if(!o||typeof o!="object")return null;for(const d of Object.keys(o))if(c.some(s=>d.toLowerCase().includes(s.toLowerCase()))){let s=o[d];if(typeof s=="string"&&(s.trim().startsWith("{")||s.trim().startsWith("[")))try{s=JSON.parse(s)}catch{}if(s!=null&&s!=="-"&&s!=="")return s}for(const d of Object.keys(o)){const s=o[d];if(s&&typeof s=="object")if(Array.isArray(s))for(const u of s){const f=Be(u,c);if(f)return f}else{const u=Be(s,c);if(u)return u}}return null},la=(o,c)=>{if(!o||typeof o!="object")return null;const d=c.toUpperCase();if(Array.isArray(o))return o.find(u=>{const f=(u.proofType||u.type||"").toUpperCase();return f.includes(d)||d.includes(f)})||null;const s=o.identityProofs||Be(o,["identityProofs","proofs","identities"]);if(Array.isArray(s)){const u=s.find(f=>{const g=(f.proofType||f.type||"").toUpperCase();return g.includes(d)||d.includes(g)});if(u)return u}return Be(o,[d+"Proof",d+"_proof",d])},ve=(o,c,d=new Set,s=[])=>{if(!o||d.has(o))return null;d.add(o);const u=c.map(g=>g.toUpperCase()),f=s.map(g=>g.toUpperCase());if(typeof o=="object"&&!Array.isArray(o)){const g=Object.keys(o);for(const y of g){const x=y.toUpperCase();if(u.some(p=>x.includes(p))){if(f.some(b=>x.includes(b)))continue;let p=o[y];if(typeof p=="string"&&p.length>2&&(p.trim().startsWith("{")||p.trim().startsWith("[")))try{p=JSON.parse(p)}catch{}if(p!=null&&p!=="-"&&p!=="")return p}}}if(Array.isArray(o))for(const g of o){const y=ve(g,c,d,s);if(y!=null&&y!=="-")return y}else if(typeof o=="object"){const g=Object.keys(o);for(const y of g){const x=y.toUpperCase();if(f.some(w=>x.includes(w)))continue;const p=o[y],b=ve(p,c,d,s);if(b!=null&&b!=="-")return b}}return null},et=(o,c)=>{const d=[...c,"Path","File","Doc","Url","Certificate","Image","Photo","Memo"],s=ve(o,d),u=g=>typeof g=="string"&&(g.includes("/")||g.includes("\\")||g.includes(".")||g.length>20);if(u(s))return s;if(s&&typeof s=="object"){const g=s.filePath||s.path||s.certificatePath||s.url||Be(s,["PATH","FILE","URL"]);if(u(g))return g}const f=ve(o,c);return u(f)?f:null},un=(o,c={},d="")=>{if((!o||o==="-")&&d&&c&&typeof c=="object"){const x=d.toLowerCase(),p=ve(c,[x+"School",x+"Institution",x+"College",x+"Name"]),b=ve(c,[x+"Year",x+"Passout",x+"Date"]),w=ve(c,[x+"Percentage",x+"Cgpa",x+"Marks"]);(p||b||w)&&(o={institutionName:p,passoutYear:b,percentageCgpa:w,hallTicketNo:ve(c,[x+"HallTicket",x+"RollNo",x+"Id"]),certificatePath:et(c,[x+"Certificate",x+"File",x+"Doc"]),marksMemoPath:et(c,[x+"Marks",x+"Memo",x+"Transcript"])})}if(!o||o==="-")return null;let s=o;if(typeof o=="string"&&(o.trim().startsWith("{")||o.trim().startsWith("[")))try{s=JSON.parse(o)}catch{}if(!s||typeof s!="object"||s==="-")return null;const u=s.institutionName||ve(s,["institution","college","school","university","board"]),f=s.passoutYear||ve(s,["year","passout","date","passing","completion"]),g=s.percentageCgpa||ve(s,["percentage","cgpa","marks","score","grade"]),y={...s,institutionName:u||"-",passoutYear:f||"-",percentageCgpa:g||"-",hallTicketNo:s.hallTicketNo||ve(s,["hallTicket","htNumber","rollNo"]),certificatePath:s.certificatePath||et(s,["certificate","certPath","doc","file"]),marksMemoPath:s.marksMemoPath||et(s,["marksMemo","marks","memo","transcript"])};return y.institutionName==="-"&&y.passoutYear==="-"&&y.percentageCgpa==="-"?null:y},ay=o=>{if(!o||typeof o!="object")return[];const c=[],d=x=>{for(const p of Object.keys(o))if(x.some(b=>p.toLowerCase().includes(b.toLowerCase()))){const b=o[p];if(b&&(typeof b=="object"||typeof b=="string"&&b.length>5))return b}return null},s=o.panProof||d(["panProof","pan_card","pan_file"]);s?c.push({type:"PAN",proofType:"PAN",entityType:"IDENTITY_PROOF",id:s.id,...typeof s=="object"?s:{filePath:s}}):o.panPath&&c.push({type:"PAN",proofType:"PAN",entityType:"IDENTITY_PROOF",id:null,filePath:o.panPath});const u=o.aadharProof||d(["aadharProof","aadhar_card","aadhar_file"]);u?c.push({type:"AADHAR",proofType:"AADHAR",entityType:"IDENTITY_PROOF",id:u.id,...typeof u=="object"?u:{filePath:u}}):o.aadharPath&&c.push({type:"AADHAR",proofType:"AADHAR",entityType:"IDENTITY_PROOF",id:null,filePath:o.aadharPath});const f=o.photoProof||d(["photoProof","photo","passportPhoto"]);f?c.push({type:"PHOTO",proofType:"PHOTO",entityType:"IDENTITY_PROOF",id:f.id,...typeof f=="object"?f:{filePath:f}}):o.photoPath&&c.push({type:"PHOTO",proofType:"PHOTO",entityType:"IDENTITY_PROOF",id:null,filePath:o.photoPath});const g=o.passportProof||d(["passportProof","passportDoc","passport_file","passport_document"]);g?c.push({type:"PASSPORT",proofType:"PASSPORT",entityType:"IDENTITY_PROOF",id:g.id,...typeof g=="object"?g:{filePath:g}}):o.passportPath&&c.push({type:"PASSPORT",proofType:"PASSPORT",entityType:"IDENTITY_PROOF",id:null,filePath:o.passportPath});const y=o.voterProof||d(["voterProof","voterId","voter_file","voter_card"]);return y?c.push({type:"VOTER",proofType:"VOTER",entityType:"IDENTITY_PROOF",id:y.id,...typeof y=="object"?y:{filePath:y}}):o.voterPath&&c.push({type:"VOTER",proofType:"VOTER",entityType:"IDENTITY_PROOF",id:null,filePath:o.voterPath}),c},jl=(o,c=[],d=[],s=[])=>{if(!o)return null;console.log("🔍 [DEBUG] normalizeEmployee Input Keys:",Object.keys(o));let u={...o};Object.keys(o).forEach(N=>{const W=o[N];if(typeof W=="string"&&W.length>2&&(W.trim().startsWith("{")||W.trim().startsWith("[")))try{const Q=JSON.parse(W);Q&&typeof Q=="object"&&(u[N]=Q)}catch{}});let f=ay(u);f.length===0&&Array.isArray(o.identityProofs)&&(f=o.identityProofs.map(N=>({...N,entityType:N.entityType||"IDENTITY_PROOF",id:N.id||(N.type||N.proofType||"").toUpperCase()})));const g=N=>N.deptName||N.name||N.departmentName||N,y=N=>N.deptCode||N.deptId||N.id,x=N=>N.roleName||N.name||N,p=N=>N.roleCode||N.roleId||N.id,b=N=>N.entityName||N.name||N,w=N=>N.entityCode||N.entityId||N.id;let B=u.deptName||u.dept||Be(o,["deptName","department","dept"])||"-",F=typeof B=="string"&&B!=="-"?B:B?.name||B?.deptName||"-";if(F==="-"||typeof B=="string"&&B.length<5){const N=c.find(W=>y(W)===B||g(W)===B);N&&(F=g(N))}let V=u.roleName||u.role||u.designation||Be(o,["roleName","designation","role"])||"-",T=typeof V=="string"&&V!=="-"?V:V?.name||V?.roleName||V?.designation||"-";if(T==="-"||typeof V=="string"&&V.length<5){const N=d.find(W=>p(W)===V||x(W)===V);N&&(T=x(N))}let k=u.entityName||u.entity||Be(o,["entityName","entity"])||"-",M=typeof k=="string"&&k!=="-"?k:k?.name||k?.entityName||"-";if(M==="-"||typeof k=="string"&&k.length<5){const N=s.find(W=>w(W)===k||b(W)===k);N&&(M=b(N))}const P=(u.educations||[]).sort((N,W)=>{const Q=parseInt(N.passoutYear||N.year||0)||0,me=parseInt(W.passoutYear||W.year||0)||0;return Q-me}),te=(function(){const N=u.ssc||ve(u,["ssc","10th","secondary"])||P[0];return N?parseInt(N.passoutYear||N.year||0):null})(),le={...u,identityProofs:f,name:u.fullName||u.name||Be(u,["name"])||"",phone:u.phoneNumber||u.phone||u.mobileNumber||"",employeeId:u.id||u.employeeId||"",empCode:u.empId||u.emp_id||u.empCode||u.employee_code||"-",onboardingDate:jr(u.dateOfOnboarding||u.onboardingDate||Be(u,["onboard"])),dateOfInterview:jr(u.dateOfInterview||u.interviewDate||Be(u,["interview"])),dateOfBirth:jr(u.dateOfBirth||u.dob||Be(u,["dob","birth"])),deptName:F,roleName:T,entityName:M,createdAt:ty(u.createdAt||u.createdDate||Be(u,["createdAt","createdDate"])),bloodGroup:u.bloodGroup||Be(u,["bloodGroup","blood"])||"-",bankName:u.bankName||Be(u,["bankName","bank"])||"",branchName:u.branchName||u.branch||Be(u,["branchName","branch"])||"",accountNumber:u.accountNumber||Be(u,["accountNumber","account"])||"",ifscCode:u.ifscCode||Be(u,["ifscCode","ifsc"])||"",upiId:u.upiId||Be(u,["upiId","upi"])||"",ssc:un(u.ssc||ve(u,["ssc","10th","secondary"]),u,"ssc")||un(P.find(N=>(N.institutionName||"").toLowerCase().includes("school")||(N.educationType||"").toLowerCase()==="ssc")||P[0]),intermediate:un(u.intermediate||ve(u,["inter","12th","higherSecondary"]),u,"inter")||un(P.find(N=>(N.institutionName||"").toLowerCase().includes("college")||(N.educationType||"").toLowerCase().includes("inter")||N.passoutYear&&te&&parseInt(N.passoutYear)>te&&parseInt(N.passoutYear)<=te+3)||(P.length>1?P[1]:null)),graduation:un(u.graduation||ve(u,["graduation","degree","ug"]),u,"grad")||un(P.find(N=>(N.institutionName||"").toLowerCase().includes("university")||(N.educationType||"").toLowerCase().includes("grad")||N.passoutYear&&te&&parseInt(N.passoutYear)>te+3)||(P.length>2?P[2]:null)),postGraduations:(function(){const N=u.postGraduations||Be(u,["postGrad","masters","pg"]);return N?(Array.isArray(N)?N:[N]).map(un).filter(Boolean):P.length>3?P.slice(3).map(un).filter(Boolean):[]})(),otherCertificates:(function(){const N=u.otherCertificates||Be(u,["otherCert","certification","certs"]);return(Array.isArray(N)?N:N?[N]:[]).map(W=>({...W,instituteName:W.instituteName||W.institute||W.school||Be(W,["institute","school","college"])||"-",certificateNumber:W.certificateNumber||W.certNumber||Be(W,["certificateNumber","certNumber","regNo"])||"-",certificatePath:W.certificatePath||et(W,["certificate","certPath","file"])}))})(),internships:(u.internships||Be(u,["internship"])||[]).map(N=>({...N,companyName:N.companyName||N.company||N.employer||Be(N,["company","employer"])||"-",joiningDate:jr(N.joiningDate||N.joining||Be(N,["joining","startDate"])),relievingDate:jr(N.relievingDate||N.relieving||N.endDate||Be(N,["relieving","endDate"])),internshipId:N.internshipId||N.id||Be(N,["internshipId","id"])||"-",duration:N.duration||Be(N,["duration","period"])||"-",offerLetterPath:N.offerLetterPath||et(N,["offerLetter","offer"]),experienceCertificatePath:N.experienceCertificatePath||N.relievingLetterPath||et(N,["experienceCertificate","experienceCert","relievingLetter","certificate"])})),workExperiences:(u.workExperiences||Be(u,["workHistory","workExperience","experience"])||[]).map(N=>({...N,companyName:N.companyName||N.company||N.employer||Be(N,["company","employer"])||"-",yearsOfExp:N.yearsOfExp||N.years||N.duration||Be(N,["years","duration","experience"])||"-",offerLetterPath:N.offerLetterPath||et(N,["offerLetter","offer"]),relievingLetterPath:N.relievingLetterPath||et(N,["relievingLetter","relieving"]),payslipsPath:N.payslipsPath||et(N,["payslip","salarySlip"]),experienceCertificatePath:N.experienceCertificatePath||N.experienceCert||et(N,["experienceCertificate","experienceCert","certificate"])})),fathersName:u.fathersName||ve(u,["fatherName","fathersName"]),fathersPhone:u.fathersPhone||ve(u,["fatherPhone","fathersPhone"]),mothersName:u.mothersName||ve(u,["motherName","mothersName"]),mothersPhone:u.mothersPhone||ve(u,["motherPhone","mothersPhone"]),emergencyContactName:u.emergencyContactName||ve(u,["emergencyName","emergencyContactName"]),emergencyRelationship:u.emergencyRelationship||ve(u,["emergencyRel","emergencyRelationship"]),emergencyNumber:u.emergencyNumber||ve(u,["emergencyPhone","emergencyNumber"]),presentAddress:u.presentAddress||ve(u,["presentAddress","presAddress"]),permanentAddress:u.permanentAddress||ve(u,["permanentAddress","permAddress"]),passbookPath:u.passbookPath||et(u,["passbook","bankPassbook"]),panPath:u.panPath||la(u,"PAN")?.filePath||et(u,["pan_card","pan_file","panProof"]),aadharPath:u.aadharPath||la(u,"AADHAR")?.filePath||et(u,["aadhar_card","aadhar_file","aadharProof"]),photoPath:u.photoPath||la(u,"PHOTO")?.filePath||et(u,["photo","passportPhoto","photoProof","Photo","Image","PassportPhoto","ProfilePhoto","ProfilePic","Avatar","Face"]),voterPath:u.voterPath||la(u,"VOTER")?.filePath||et(u,["voter","voterId","voter_file","voterProof","voter_proof"]),passportPath:u.passportPath||la(u,"PASSPORT")?.filePath||et(u,["passport","passportDoc","passport_document","passport_file","passportProof","passport_proof"]),panNumber:(()=>{const N=Q=>typeof Q=="string"&&/\.(png|jpg|jpeg|gif|webp|pdf)$/i.test(Q),W=u.panNumber||la(u,"PAN")?.documentNumber||ve(u,["panNumber","panId","panNo","pan_number","pan"]);return N(W)?null:W})(),aadharNumber:(()=>{const N=Q=>typeof Q=="string"&&/\.(png|jpg|jpeg|gif|webp|pdf)$/i.test(Q),W=u.aadharNumber||la(u,"AADHAR")?.documentNumber||ve(u,["aadharNumber","aadharId","aadharNo","aadhar_number","aadhar"]);return N(W)?null:W})(),educationCount:(u.ssc?1:0)+(u.intermediate?1:0)+(u.graduation?1:0)+(u.postGraduations?.length||0)+(u.otherCertificates?.length||0),internshipCount:(u.internships||[]).length,workExperienceCount:(u.workExperiences||[]).length,identityProofCount:f.length};return console.log("✅ [DEBUG] normalizeEmployee Normalized Output:",{id:le.id,ssc:!!le.ssc,voter:!!le.voterPath,passport:!!le.passportPath}),le},at=o=>{if(!o)return"/placeholder.png";const c=x=>typeof x=="string"&&(x.includes("/")||x.includes("\\")||x.includes("."));let d=null;if(typeof o=="string"?d=o.trim():typeof o=="object"&&o!==null&&(d=o.filePath||o.path||o.certificatePath||o.url||Object.values(o).find(c)),!d||typeof d=="string"&&d.trim()==="")return"/placeholder.png";console.log("getFileUrl input:",o);const s=d.toString().trim();if(s.startsWith("data:")||s.startsWith("blob:"))return s;let u=s.replace(/\\/g,"/");u.startsWith("http")&&(u.includes("/api/files/")?u=u.split("/api/files/").pop():u.includes("/api/onboarding/files/")?u=u.split("/api/onboarding/files/").pop():u.includes("/uploads/")&&(u=u.split("/uploads/").pop())),u=u.replace(/^\/+/,""),u.startsWith("uploads/")&&(u=u.slice(8)),u.startsWith("api/files/")&&(u=u.slice(10)),u.startsWith("api/onboarding/files/")&&(u=u.slice(21)),u=u.replace(/^\/+/,"");const y=`/api/onboarding/files/${u.split("/").map(x=>encodeURIComponent(x)).join("/")}`;return console.log("Final photo URL:",y),y},ny=({isOpen:o,onClose:c,employee:d,onApprove:s,onRejectDocument:u})=>{if(mn.useEffect(()=>{if(o&&d){console.log("[DEBUG] ViewEmployeeModal opened with raw employee:",d);const p=jl(d);console.log("[DEBUG] ViewEmployeeModal normalized emp:",p),console.log("[DEBUG] PAN Number:",p.panNumber,"| Aadhar Number:",p.aadharNumber),console.log("[DEBUG] Identity Proofs Array:",p.identityProofs)}},[o,d]),!o||!d)return null;const f=jl(d),g=async p=>{if(p){if(p.startsWith("data:")||p.startsWith("blob:")){window.open(p,"_blank");return}try{if((await fetch(p,{method:"HEAD"})).ok)window.open(p,"_blank");else{const w=p.split("/").pop();let B="";p.includes("/api/onboarding/files/")?B=`/api/files/${w}`:p.includes("/api/files/")&&(B=`/api/onboarding/files/${w}`),B&&(await fetch(B,{method:"HEAD"})).ok?window.open(B,"_blank"):window.open(p,"_blank")}}catch(b){console.error("[ViewEmployeeModal] Failed to scout file, opening directly:",b),window.open(p,"_blank")}}},y=p=>{if(!f?.identityProofs)return null;const b=p.toUpperCase();return f.identityProofs.find(w=>{const B=(w.proofType||w.type||"").toUpperCase();return B.includes(b)||b.includes(B)})},x=(p,b,w)=>{const B=P=>typeof P=="string"&&(P.includes("/")||P.includes("\\")||P.includes("."));let F=B(b)?b:null;if(!F&&b&&typeof b=="object"&&(F=b.filePath||b.path||b.certificatePath||b.url||Object.values(b).find(B)),!F)return a.jsxs("div",{className:"doc-card doc-missing",children:[a.jsxs("div",{className:"doc-info",children:[a.jsx("span",{className:"doc-label",children:p}),a.jsx("span",{className:"doc-status",children:"Missing"})]}),a.jsx("div",{className:"doc-placeholder",children:a.jsx(ab,{size:20})})]});const V=(F||"").toLowerCase(),T=/\.(jpg|jpeg|png|gif|webp)$/i.test(V),k=V.endsWith(".pdf"),M=at(F);return a.jsxs("div",{className:"doc-card",children:[T?a.jsx("div",{className:"doc-preview",children:a.jsx("img",{src:M,alt:p,onLoad:P=>{P.target.parentElement.classList.remove("doc-loading")},onError:P=>{const te=P.target;if(te.dataset.errorHandled)return;te.dataset.errorHandled="true";const le=te.src;let N="";if(le.includes("/api/files/")?N=le.split("/api/files/").pop():le.includes("/api/onboarding/files/")&&(N=le.split("/api/onboarding/files/").pop()),le.includes("/api/files/"))te.src=`/api/onboarding/files/${N}`;else if(le.includes("/api/onboarding/files/"))te.src=`/api/files/${N}`,te.dataset.errorHandled="final";else{te.style.display="none",te.parentElement.classList.add("doc-load-failed");const W=document.createElement("div");W.className="error-overlay",W.innerHTML="<span>⚠️ Load Failed</span>",te.parentElement.appendChild(W)}}})}):k?a.jsxs("div",{className:"doc-preview doc-pdf-icon",children:[a.jsx(Nl,{size:40,color:"#ef4444"}),a.jsx("span",{className:"pdf-label",children:"PDF Document"})]}):a.jsx("div",{className:"doc-preview doc-generic-icon",children:a.jsx(Nl,{size:40,color:"#94a3b8"})}),a.jsxs("div",{className:"doc-info",children:[a.jsx("span",{className:"doc-label",children:p}),a.jsx("span",{className:"doc-status",children:"Uploaded"})]}),a.jsxs("div",{className:"doc-actions",children:[a.jsx("button",{className:"doc-view-btn",title:"View Document",onClick:()=>g(M),children:a.jsx(st,{size:14})}),["onboarding","under_review"].includes(f.status?.toLowerCase())&&a.jsxs("button",{className:"doc-reject-btn",title:"Reject & Request Re-upload",onClick:()=>u(b,p),children:[a.jsx(Ve,{size:14}),"Reject"]})]})]})};return a.jsxs("div",{className:"modal-overlay",onClick:c,children:[a.jsxs("div",{className:"modal-content animate-slide-up",onClick:p=>p.stopPropagation(),children:[a.jsxs("div",{className:"modal-header-banner",children:[a.jsxs("div",{className:"header-info",children:[a.jsx("div",{className:"profile-badge",children:f.photoPath?(()=>{const p=at(f.photoPath);return console.log("Rendering photo →",p,"| raw photoPath:",f.photoPath),a.jsx("img",{src:p,alt:f.name,onError:b=>{const w=b.target.src;if(b.target.dataset.fallbackExhausted){b.target.style.display="none",b.target.parentElement.innerText=(f.name||"").split(" ").map(V=>V[0]).join("");return}const B=w.match(/\/api\/(?:onboarding\/)?files\/(.+)$/),F=B?B[1]:"";w.includes("/api/files/")?b.target.src=`/api/onboarding/files/${F}`:(b.target.src=`/api/files/${F}`,b.target.dataset.fallbackExhausted="true")},style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"50%"}})})():(f.name||"").split(" ").map(p=>p[0]).join("")}),a.jsxs("div",{className:"header-text",children:[a.jsx("h2",{children:f.name}),a.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.25rem"},children:[a.jsxs("span",{className:"emp-id-tag",children:["ID: ",f.employeeId||f.id]}),f.empCode&&a.jsxs("span",{className:"emp-id-tag",style:{background:"rgba(255,255,255,0.2)"},children:["Code: ",f.empCode]})]})]})]}),a.jsx("button",{className:"close-btn-light",onClick:c,children:a.jsx(Ve,{size:20})})]}),a.jsxs("div",{className:"profile-body",children:[a.jsxs("div",{className:"status-banner",children:[a.jsx("span",{className:`badge-large badge-${(f.status||"Active").toLowerCase()}`,children:f.status||"Active"}),a.jsx("span",{className:"entity-label",children:f.entityName||f.entity||"N/A"})]}),a.jsxs("div",{className:"info-tabs",children:[a.jsxs("div",{className:"info-section",children:[a.jsx("h3",{className:"section-title",children:"Professional Details"}),a.jsxs("div",{className:"info-row-grid",children:[a.jsxs("div",{className:"detail-item-compact",children:[a.jsx(Ba,{size:14}),a.jsxs("div",{children:[a.jsx("label",{children:"Role"}),a.jsx("span",{children:f.roleName||f.role||"-"})]})]}),a.jsxs("div",{className:"detail-item-compact",children:[a.jsx(da,{size:14}),a.jsxs("div",{children:[a.jsx("label",{children:"Department"}),a.jsx("span",{children:f.deptName||f.department||"-"})]})]}),a.jsxs("div",{className:"detail-item-compact",children:[a.jsx(da,{size:14}),a.jsxs("div",{children:[a.jsx("label",{children:"Entity"}),a.jsx("span",{children:f.entityName||f.entity||"N/A"})]})]}),a.jsxs("div",{className:"detail-item-compact",children:[a.jsx(Zt,{size:14}),a.jsxs("div",{children:[a.jsx("label",{children:"Interview Date"}),a.jsx("span",{children:f.dateOfInterview||"-"})]})]}),a.jsxs("div",{className:"detail-item-compact",children:[a.jsx(Zt,{size:14}),a.jsxs("div",{children:[a.jsx("label",{children:"Onboarding Date"}),a.jsx("span",{children:f.onboardingDate||"-"})]})]}),a.jsxs("div",{className:"detail-item-compact",children:[a.jsx(Zt,{size:14}),a.jsxs("div",{children:[a.jsx("label",{children:"Created Date"}),a.jsx("span",{children:f.createdAt?.date||"-"})]})]})]})]}),a.jsxs("div",{className:"info-section",children:[a.jsx("h3",{className:"section-title",children:"Personal & Family"}),a.jsxs("div",{className:"info-row-grid",children:[a.jsxs("div",{className:"detail-item-compact",children:[a.jsx(Zt,{size:14}),a.jsxs("div",{children:[a.jsx("label",{children:"Date of Birth"}),a.jsx("span",{children:f.dateOfBirth||f.dob||"-"})]})]}),a.jsxs("div",{className:"detail-item-compact",children:[a.jsx(wt,{size:14}),a.jsxs("div",{children:[a.jsx("label",{children:"Blood Group"}),a.jsx("span",{children:f.bloodGroup||"-"})]})]}),a.jsxs("div",{className:"detail-item-compact",children:[a.jsx(Ut,{size:14}),a.jsxs("div",{children:[a.jsx("label",{children:"Father's Name"}),a.jsxs("span",{children:[f.fathersName||"-"," (",f.fathersPhone||"N/A",")"]})]})]}),a.jsxs("div",{className:"detail-item-compact",children:[a.jsx(Ut,{size:14}),a.jsxs("div",{children:[a.jsx("label",{children:"Mother's Name"}),a.jsxs("span",{children:[f.mothersName||"-"," (",f.mothersPhone||"N/A",")"]})]})]})]})]}),a.jsxs("div",{className:"info-section",children:[a.jsx("h3",{className:"section-title",children:"Identity & Proofs"}),a.jsxs("div",{className:"info-row-grid",children:[a.jsxs("div",{className:"detail-item-compact",children:[a.jsx(_a,{size:14}),a.jsxs("div",{children:[a.jsx("label",{children:"PAN Number"}),a.jsx("span",{className:"font-mono text-primary",children:f.panNumber||"-"}),f.panPath&&a.jsxs("a",{href:"#",className:"view-cert-link",onClick:p=>{p.preventDefault(),window.open(at(f.panPath),"_blank")},children:[a.jsx(st,{size:12})," View Proof"]})]})]}),a.jsxs("div",{className:"detail-item-compact",children:[a.jsx(_a,{size:14}),a.jsxs("div",{children:[a.jsx("label",{children:"Aadhar Number"}),a.jsx("span",{className:"font-mono text-primary",children:f.aadharNumber||"-"}),f.aadharPath&&a.jsxs("a",{href:"#",className:"view-cert-link",onClick:p=>{p.preventDefault(),window.open(at(f.aadharPath),"_blank")},children:[a.jsx(st,{size:12})," View Proof"]})]})]})]})]}),a.jsxs("div",{className:"info-section",children:[a.jsx("h3",{className:"section-title",children:"Emergency Contact"}),a.jsxs("div",{className:"info-row-grid",children:[a.jsxs("div",{className:"detail-item-compact",children:[a.jsx(_a,{size:14}),a.jsxs("div",{children:[a.jsx("label",{children:"Contact Person"}),a.jsx("span",{children:f.emergencyContactName||"-"})]})]}),a.jsxs("div",{className:"detail-item-compact",children:[a.jsx(wt,{size:14}),a.jsxs("div",{children:[a.jsx("label",{children:"Relationship"}),a.jsx("span",{children:f.emergencyRelationship||"-"})]})]}),a.jsxs("div",{className:"detail-item-compact",children:[a.jsx(pn,{size:14}),a.jsxs("div",{children:[a.jsx("label",{children:"Emergency Phone"}),a.jsx("span",{children:f.emergencyNumber||"-"})]})]})]})]}),a.jsxs("div",{className:"info-section",children:[a.jsx("h3",{className:"section-title",children:"Bank Information"}),a.jsxs("div",{className:"info-row-grid",children:[a.jsxs("div",{className:"detail-item-compact",children:[a.jsx(da,{size:14}),a.jsxs("div",{children:[a.jsx("label",{children:"Bank Name"}),a.jsx("span",{children:f.bankName||"-"})]})]}),a.jsxs("div",{className:"detail-item-compact",children:[a.jsx(Fi,{size:14}),a.jsxs("div",{children:[a.jsx("label",{children:"Branch"}),a.jsx("span",{children:f.branchName||"-"})]})]}),a.jsxs("div",{className:"detail-item-compact",children:[a.jsx(wt,{size:14}),a.jsxs("div",{children:[a.jsx("label",{children:"IFSC Code"}),a.jsx("span",{children:f.ifscCode||"-"})]})]}),a.jsxs("div",{className:"detail-item-compact",children:[a.jsx(_a,{size:14}),a.jsxs("div",{children:[a.jsx("label",{children:"Account Number"}),a.jsx("span",{children:f.accountNumber||"-"})]})]}),a.jsxs("div",{className:"detail-item-compact",children:[a.jsx(wt,{size:14}),a.jsxs("div",{children:[a.jsx("label",{children:"UPI ID"}),a.jsx("span",{children:f.upiId||"-"})]})]})]})]}),a.jsxs("div",{className:"info-section",children:[a.jsx("h3",{className:"section-title",children:"Contact & Address"}),a.jsxs("div",{className:"info-row-grid",children:[a.jsxs("div",{className:"detail-item-compact",children:[a.jsx(_n,{size:14}),a.jsxs("div",{children:[a.jsx("label",{children:"Email"}),a.jsx("span",{children:f.email||"-"})]})]}),a.jsxs("div",{className:"detail-item-compact",children:[a.jsx(pn,{size:14}),a.jsxs("div",{children:[a.jsx("label",{children:"Phone"}),a.jsx("span",{children:f.phoneNumber||f.phone||"-"})]})]}),a.jsxs("div",{className:"detail-item-compact full-width",children:[a.jsx(Fi,{size:14}),a.jsxs("div",{children:[a.jsx("label",{children:"Present Address"}),a.jsx("span",{children:f.presentAddress||"-"})]})]}),a.jsxs("div",{className:"detail-item-compact full-width",children:[a.jsx(Fi,{size:14}),a.jsxs("div",{children:[a.jsx("label",{children:"Permanent Address"}),a.jsx("span",{children:f.permanentAddress||"-"})]})]})]})]}),a.jsxs("div",{className:"info-section",children:[a.jsx("h3",{className:"section-title",children:"Summary of Records"}),a.jsxs("div",{className:"stats-pills",children:[a.jsxs("div",{className:"stat-pill",children:[a.jsx("span",{className:"count",children:f.educationCount||0}),a.jsx("span",{className:"label",children:"Educations"})]}),a.jsxs("div",{className:"stat-pill",children:[a.jsx("span",{className:"count",children:f.internshipCount||0}),a.jsx("span",{className:"label",children:"Internships"})]}),a.jsxs("div",{className:"stat-pill",children:[a.jsx("span",{className:"count",children:f.workExperienceCount||0}),a.jsx("span",{className:"label",children:"Exp"})]}),a.jsxs("div",{className:"stat-pill",children:[a.jsx("span",{className:"count",children:f.identityProofCount||0}),a.jsx("span",{className:"label",children:"Proofs"})]})]})]}),a.jsxs("div",{className:"info-section",children:[a.jsx("h3",{className:"section-title",children:"Uploaded Documents"}),a.jsxs("div",{className:"doc-viewer-grid",children:[x("Bank Passbook",f.bankProof||{filePath:f.passbookPath,entityType:"BANK_DETAILS",id:f.id}),f.ssc&&x("SSC Certificate",{...f.ssc,filePath:f.ssc.certificatePath,entityType:"EDUCATION",id:f.ssc.id}),f.ssc&&x("SSC Marks Memo",{...f.ssc,filePath:f.ssc.marksMemoPath,entityType:"EDUCATION",id:f.ssc.id}),f.intermediate&&x("Inter Certificate",{...f.intermediate,filePath:f.intermediate.certificatePath,entityType:"EDUCATION",id:f.intermediate.id}),f.intermediate&&x("Inter Marks Memo",{...f.intermediate,filePath:f.intermediate.marksMemoPath,entityType:"EDUCATION",id:f.intermediate.id}),f.graduation&&x("Grad Certificate",{...f.graduation,filePath:f.graduation.certificatePath,entityType:"EDUCATION",id:f.graduation.id}),f.graduation&&x("Grad Marks Memo",{...f.graduation,filePath:f.graduation.marksMemoPath,entityType:"EDUCATION",id:f.graduation.id}),(()=>{const b=y("PAN")||{filePath:f.panPath};return x(`PAN Card (${f.panNumber||"-"})`,b)})(),(()=>{const p=y("AADHAR")||{filePath:f.aadharPath};return x(`Aadhar Card (${f.aadharNumber||"-"})`,p)})(),(()=>{const p=y("PHOTO")||{filePath:f.photoPath};return x("Passport Photo",p)})(),(()=>{const p=y("PASSPORT")||{filePath:f.passportPath};return x("Passport Document",p)})(),(()=>{const p=y("VOTER")||{filePath:f.voterPath};return x("Voter ID Card",p)})(),(f.identityProofs||[]).map((p,b)=>{const w=(p.type||p.proofType||"").toUpperCase();return["PAN","AADHAR","VOTER","PHOTO","PASSPORT"].includes(w)?null:a.jsx(mn.Fragment,{children:x(`${p.type||p.proofType||"Extra Proof"} (${b+1})`,p)},`extra-proof-${b}`)}),f.postGraduations&&f.postGraduations.map((p,b)=>a.jsxs(mn.Fragment,{children:[x(`Post-Grad Cert (${b+1})`,{...p,filePath:p.certificatePath,entityType:"POST_GRADUATION",id:p.id||b}),x(`Post-Grad Marks (${b+1})`,{...p,filePath:p.marksMemoPath,entityType:"POST_GRADUATION",id:p.id||b})]},`pg-${b}`)),f.otherCertificates&&f.otherCertificates.map((p,b)=>a.jsx(mn.Fragment,{children:x(`Cert: ${p.certificateNumber||"Record "+(b+1)}`,{...p,filePath:p.certificatePath,entityType:"CERTIFICATION",id:p.certificateId||p.id||b})},`other-${b}`)),f.internships&&f.internships.map((p,b)=>a.jsxs(mn.Fragment,{children:[x(`Intern Offer (${p.companyName})`,{...p,filePath:p.offerLetterPath,entityType:"INTERNSHIP",id:p.internshipId||p.id||b}),x(`Intern Cert (${p.companyName})`,{...p,filePath:p.experienceCertificatePath,entityType:"INTERNSHIP",id:p.internshipId||p.id||b})]},`int-${b}`)),f.workExperiences&&f.workExperiences.map((p,b)=>a.jsxs(mn.Fragment,{children:[x(`Work Offer (${p.companyName})`,{...p,filePath:p.offerLetterPath,entityType:"WORK_EXPERIENCE",id:p.workExperienceId||p.id||b}),x(`Relieving Letter (${p.companyName})`,{...p,filePath:p.relievingLetterPath,entityType:"WORK_EXPERIENCE",id:p.workExperienceId||p.id||b}),x(`Payslips (${p.companyName})`,{...p,filePath:p.payslipsPath,entityType:"WORK_EXPERIENCE",id:p.workExperienceId||p.id||b}),x(`Exp Cert (${p.companyName})`,{...p,filePath:p.experienceCertificatePath,entityType:"WORK_EXPERIENCE",id:p.workExperienceId||p.id||b})]},`exp-${b}`))]})]}),(f.ssc||f.intermediate||f.graduation)&&a.jsxs("div",{className:"info-section",children:[a.jsx("h3",{className:"section-title",children:"Education History"}),a.jsxs("div",{className:"detail-cards-grid",children:[f.ssc&&a.jsxs("div",{className:"detail-card",children:[a.jsx("label",{className:"card-tag",children:"SSC / 10th"}),a.jsxs("div",{className:"card-content",children:[a.jsx("strong",{children:f.ssc.institutionName}),a.jsxs("span",{children:["Year: ",f.ssc.passoutYear," | ",f.ssc.percentageCgpa,"%"]}),f.ssc.hallTicketNo&&a.jsxs("span",{className:"text-xs text-muted",children:["ID: ",f.ssc.hallTicketNo]}),f.ssc.certificatePath&&a.jsxs("a",{href:"#",className:"view-cert-link",onClick:p=>{p.preventDefault(),window.open(at(f.ssc.certificatePath),"_blank")},children:[a.jsx(st,{size:12})," View Certificate"]}),f.ssc.marksMemoPath&&a.jsxs("a",{href:"#",className:"view-cert-link",onClick:p=>{p.preventDefault(),window.open(at(f.ssc.marksMemoPath),"_blank")},children:[a.jsx(st,{size:12})," View Marks Memo"]})]})]}),f.intermediate&&a.jsxs("div",{className:"detail-card",children:[a.jsx("label",{className:"card-tag",children:"Intermediate / 12th"}),a.jsxs("div",{className:"card-content",children:[a.jsx("strong",{children:f.intermediate.institutionName}),a.jsxs("span",{children:["Year: ",f.intermediate.passoutYear," | ",f.intermediate.percentageCgpa,"%"]}),f.intermediate.hallTicketNo&&a.jsxs("span",{className:"text-xs text-muted",children:["ID: ",f.intermediate.hallTicketNo]}),f.intermediate.certificatePath&&a.jsxs("a",{href:"#",className:"view-cert-link",onClick:p=>{p.preventDefault(),window.open(at(f.intermediate.certificatePath),"_blank")},children:[a.jsx(st,{size:12})," View Certificate"]}),f.intermediate.marksMemoPath&&a.jsxs("a",{href:"#",className:"view-cert-link",onClick:p=>{p.preventDefault(),window.open(at(f.intermediate.marksMemoPath),"_blank")},children:[a.jsx(st,{size:12})," View Marks Memo"]})]})]}),f.graduation&&a.jsxs("div",{className:"detail-card",children:[a.jsx("label",{className:"card-tag",children:"Graduation"}),a.jsxs("div",{className:"card-content",children:[a.jsx("strong",{children:f.graduation.institutionName}),a.jsxs("span",{children:["Year: ",f.graduation.passoutYear," | ",f.graduation.percentageCgpa,"%"]}),f.graduation.hallTicketNo&&a.jsxs("span",{className:"text-xs text-muted",children:["ID: ",f.graduation.hallTicketNo]}),f.graduation.certificatePath&&a.jsxs("a",{href:"#",className:"view-cert-link",onClick:p=>{p.preventDefault(),window.open(at(f.graduation.certificatePath),"_blank")},children:[a.jsx(st,{size:12})," View Certificate"]}),f.graduation.marksMemoPath&&a.jsxs("a",{href:"#",className:"view-cert-link",onClick:p=>{p.preventDefault(),window.open(at(f.graduation.marksMemoPath),"_blank")},children:[a.jsx(st,{size:12})," View Marks Memo"]})]})]}),f.postGraduations&&f.postGraduations.length>0&&f.postGraduations.map((p,b)=>a.jsxs("div",{className:"detail-card",children:[a.jsx("label",{className:"card-tag",children:"Post-Grad"}),a.jsxs("div",{className:"card-content",children:[a.jsx("strong",{children:p.institutionName}),a.jsxs("span",{children:["Year: ",p.passoutYear," | ",p.percentageCgpa,"%"]}),p.hallTicketNo&&a.jsxs("span",{className:"text-xs text-muted",children:["ID: ",p.hallTicketNo]}),a.jsxs("div",{className:"card-actions-inline",children:[p.certificatePath&&a.jsxs("a",{href:"#",className:"view-cert-link",onClick:w=>{w.preventDefault(),window.open(at(p.certificatePath),"_blank")},children:[a.jsx(st,{size:12})," View Certificate"]}),p.marksMemoPath&&a.jsxs("a",{href:"#",className:"view-cert-link",onClick:w=>{w.preventDefault(),window.open(at(p.marksMemoPath),"_blank")},children:[a.jsx(st,{size:12})," View Marks Memo"]})]})]})]},b)),f.otherCertificates&&f.otherCertificates.length>0&&f.otherCertificates.map((p,b)=>a.jsxs("div",{className:"detail-card",children:[a.jsx("label",{className:"card-tag",children:"Certification"}),a.jsxs("div",{className:"card-content",children:[a.jsx("strong",{children:p.instituteName||p.institute}),a.jsxs("span",{children:["Number: ",p.certificateNumber]}),p.certificatePath&&a.jsxs("a",{href:"#",className:"view-cert-link",onClick:w=>{w.preventDefault(),window.open(at(p.certificatePath),"_blank")},children:[a.jsx(st,{size:12})," View Certificate"]})]})]},b))]})]}),f.internships&&f.internships.length>0&&a.jsxs("div",{className:"info-section",children:[a.jsx("h3",{className:"section-title",children:"Internships"}),a.jsx("div",{className:"detail-cards-grid",children:f.internships.map((p,b)=>a.jsx("div",{className:"detail-card",children:a.jsxs("div",{className:"card-content",children:[a.jsx("strong",{children:p.companyName}),a.jsxs("span",{className:"text-muted",children:[p.duration," ",p.internshipId&&`(ID: ${p.internshipId})`]}),a.jsx("div",{className:"card-footer-mini",children:a.jsxs("span",{children:[p.joiningDate," to ",p.relievingDate]})}),a.jsxs("div",{className:"card-actions-inline",children:[p.offerLetterPath&&a.jsxs("a",{href:"#",className:"view-cert-link",onClick:w=>{w.preventDefault(),window.open(at(p.offerLetterPath),"_blank")},children:[a.jsx(st,{size:12})," Offer Letter"]}),p.experienceCertificatePath&&a.jsxs("a",{href:"#",className:"view-cert-link",onClick:w=>{w.preventDefault(),window.open(at(p.experienceCertificatePath),"_blank")},children:[a.jsx(st,{size:12})," Exp Certificate"]})]})]})},b))})]}),f.workExperiences&&f.workExperiences.length>0&&a.jsxs("div",{className:"info-section",children:[a.jsx("h3",{className:"section-title",children:"Work Experience"}),a.jsx("div",{className:"detail-cards-grid",children:f.workExperiences.map((p,b)=>a.jsx("div",{className:"detail-card",children:a.jsxs("div",{className:"card-content",children:[a.jsx("strong",{children:p.companyName}),a.jsx("span",{className:"text-muted",children:p.yearsOfExp}),a.jsxs("div",{className:"card-actions-inline",children:[p.offerLetterPath&&a.jsxs("a",{href:"#",className:"view-cert-link",onClick:w=>{w.preventDefault(),window.open(at(p.offerLetterPath),"_blank")},children:[a.jsx(st,{size:12})," Offer"]}),p.relievingLetterPath&&a.jsxs("a",{href:"#",className:"view-cert-link",onClick:w=>{w.preventDefault(),window.open(at(p.relievingLetterPath),"_blank")},children:[a.jsx(st,{size:12})," Relieving"]}),p.payslipsPath&&a.jsxs("a",{href:"#",className:"view-cert-link",onClick:w=>{w.preventDefault(),window.open(at(p.payslipsPath),"_blank")},children:[a.jsx(st,{size:12})," Payslips"]}),p.experienceCertificatePath&&a.jsxs("a",{href:"#",className:"view-cert-link",onClick:w=>{w.preventDefault(),window.open(at(p.experienceCertificatePath),"_blank")},children:[a.jsx(st,{size:12})," Exp Cert"]})]})]})},b))})]})]})]}),a.jsxs("div",{className:"modal-footer-centered",style:{display:"flex",gap:"1rem",width:"100%",padding:"1.5rem 2rem"},children:[a.jsx("button",{className:"secondary-btn-wide",onClick:c,style:{flex:1},children:"Close Profile"}),["onboarding","under_review"].includes(f.status?.toLowerCase())&&a.jsxs("button",{className:"submit-btn-wide",onClick:()=>s(d),style:{flex:2,background:"#10b981",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem"},children:[a.jsx(eb,{size:18}),"Approve Onboarding"]})]})]}),a.jsx("style",{children:`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.4);
                    backdrop-filter: blur(8px);
                    display: flex;
                    justify-content: center;
                    z-index: 9999;
                    padding: 2rem 1rem;
                    overflow-y: auto;
                }

                .modal-content {
                    width: 100%;
                    max-width: 550px;
                    background: white;
                    border-radius: 20px;
                    margin: auto;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                }

                .modal-header-banner {
                    background: var(--primary);
                    background: linear-gradient(135deg, var(--primary) 0%, #1e40af 100%);
                    padding: 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    color: white;
                }

                .header-info {
                    display: flex;
                    align-items: center;
                    gap: 1.25rem;
                }

                .profile-badge {
                    width: 64px;
                    height: 64px;
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(4px);
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: white;
                }

                .header-text h2 {
                    font-size: 1.5rem;
                    font-weight: 800;
                    margin-bottom: 0.25rem;
                }

                .emp-id-tag {
                    font-size: 0.875rem;
                    opacity: 0.8;
                    font-family: monospace;
                    background: rgba(255, 255, 255, 0.1);
                    padding: 2px 8px;
                    border-radius: 4px;
                }

                .close-btn-light {
                    background: rgba(255, 255, 255, 0.1);
                    border: none;
                    color: white;
                    padding: 0.5rem;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .close-btn-light:hover {
                    background: rgba(255, 255, 255, 0.2);
                }

                .profile-body {
                    padding: 2rem;
                }

                .status-banner {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2rem;
                    padding-bottom: 1.5rem;
                    border-bottom: 1px solid var(--divider);
                }

                .badge-large {
                    padding: 6px 14px;
                    border-radius: 20px;
                    font-size: 0.875rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .entity-label {
                    font-weight: 600;
                    color: var(--text-muted);
                    font-size: 0.875rem;
                }

                .info-tabs {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .info-section {
                    background: #f8fafc;
                    padding: 1.25rem;
                    border-radius: 12px;
                    border: 1px solid var(--divider);
                }

                .section-title {
                    font-size: 0.7rem;
                    font-weight: 800;
                    color: var(--primary);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .info-row-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;
                }

                .detail-item-compact {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .detail-item-compact svg {
                    color: #64748b;
                    flex-shrink: 0;
                }

                .detail-item-compact div {
                    display: flex;
                    flex-direction: column;
                }

                .detail-item-compact label {
                    font-size: 0.625rem;
                    color: var(--text-muted);
                    font-weight: 600;
                    margin-bottom: 1px;
                }

                .detail-item-compact span {
                    font-size: 0.8125rem;
                    font-weight: 600;
                    color: var(--text-main);
                }

                .full-width {
                    grid-column: span 2;
                }

                .stats-pills {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                }

                .stat-pill {
                    background: white;
                    border: 1px solid var(--divider);
                    padding: 0.5rem 1rem;
                    border-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    min-width: 80px;
                }

                .stat-pill .count {
                    font-size: 1.125rem;
                    font-weight: 800;
                    color: var(--primary);
                }

                .stat-pill .label {
                    font-size: 0.625rem;
                    font-weight: 700;
                    color: var(--text-muted);
                    text-transform: uppercase;
                }

                .modal-footer-centered {
                    padding: 1.5rem 2rem;
                    background: #f8fafc;
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    border-top: 1px solid var(--divider);
                }

                .secondary-btn-wide {
                    background: white;
                    border: 1px solid var(--border-color);
                    color: var(--text-main);
                    padding: 0.75rem 3rem;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
                }

                .secondary-btn-wide:hover {
                    background: var(--bg-main);
                    border-color: var(--primary);
                    color: var(--primary);
                    transform: translateY(-1px);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                }

                .secondary-btn-wide:active {
                    transform: translateY(0);
                }

                .submit-btn-wide {
                    background: #10b981;
                    color: white;
                    border: none;
                    padding: 0.75rem 3rem;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.2);
                }

                .submit-btn-wide:hover {
                    background: #059669;
                    transform: translateY(-1px);
                    box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.3);
                }

                .submit-btn-wide:active {
                    transform: translateY(0);
                }

                .action-group-wide {
                    display: flex;
                    gap: 1rem;
                    width: 100%;
                    max-width: 450px;
                }

                .approve-btn-wide {
                    flex: 1;
                    background: #10b981;
                    color: white;
                    border: none;
                    padding: 0.75rem 1.5rem;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    transition: all 0.2s;
                    box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.2);
                }

                .approve-btn-wide:hover {
                    background: #059669;
                    transform: translateY(-1px);
                    box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.3);
                }

                .reject-btn-wide {
                    flex: 1;
                    background: white;
                    border: 1px solid #ef4444;
                    color: #ef4444;
                    padding: 0.75rem 1.5rem;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    transition: all 0.2s;
                }

                .reject-btn-wide:hover {
                    background: #fef2f2;
                    transform: translateY(-1px);
                }

                .doc-viewer-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;
                }

                .doc-card {
                    background: white;
                    border: 1px solid var(--divider);
                    border-radius: 12px;
                    padding: 0.75rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    transition: all 0.2s;
                    position: relative;
                    overflow: hidden;
                }

                .doc-preview {
                    width: 100%;
                    height: 100px;
                    border-radius: 8px;
                    overflow: hidden;
                    background: #f8fafc;
                    border: 1px solid #f1f5f9;
                }

                .doc-preview img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    background: #fff;
                }

                .doc-card:hover {
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                    border-color: var(--primary);
                }

                .doc-missing {
                    background: #fef2f2;
                    border-color: #fee2e2;
                    opacity: 0.8;
                }

                .doc-info {
                    display: flex;
                    flex-direction: column;
                }

                .doc-label {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--text-main);
                }

                .doc-status {
                    font-size: 0.625rem;
                    font-weight: 600;
                    color: var(--text-muted);
                }

                .view-cert-link {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    font-size: 0.75rem;
                    color: var(--primary);
                    margin-top: 0.5rem;
                    text-decoration: none;
                    font-weight: 600;
                }
                
                .view-cert-link:hover {
                    text-decoration: underline;
                }

                .card-actions-inline {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                    margin-top: 0.5rem;
                }

                .doc-actions {
                    display: flex;
                    gap: 0.5rem;
                }

                .doc-view-btn {
                    padding: 4px 8px;
                    border-radius: 6px;
                    background: var(--bg-main);
                    border: 1px solid var(--divider);
                    color: var(--primary);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .doc-view-btn:hover {
                    background: white;
                    border-color: var(--primary);
                }

                .doc-reject-btn {
                    flex: 1;
                    padding: 4px 8px;
                    border-radius: 6px;
                    background: #fef2f2;
                    border: 1px solid #fee2e2;
                    color: #ef4444;
                    font-size: 0.65rem;
                    font-weight: 700;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.25rem;
                    transition: all 0.2s;
                }

                .doc-reject-btn:hover {
                    background: #ef4444;
                    color: white;
                }

                .doc-placeholder {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.5rem;
                    color: #cbd5e1;
                }

                .animate-slide-up {
                    animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                @media (max-width: 600px) {
                    .modal-overlay {
                        padding: 0.5rem;
                    }

                    .modal-content {
                        border-radius: 12px;
                    }

                    .modal-header-banner {
                        padding: 1.25rem;
                        flex-direction: column;
                        gap: 1rem;
                    }

                    .header-info {
                        gap: 0.75rem;
                    }

                    .profile-badge {
                        width: 48px;
                        height: 48px;
                        font-size: 1.25rem;
                        border-radius: 12px;
                    }

                    .header-text h2 {
                        font-size: 1.25rem;
                    }

                    .profile-body {
                        padding: 1.25rem;
                    }

                    .info-section {
                        padding: 1rem;
                    }

                    .info-row-grid {
                        grid-template-columns: 1fr;
                        gap: 1.25rem;
                    }

                    .doc-viewer-grid {
                        grid-template-columns: 1fr;
                    }

                    .stats-pills {
                        justify-content: center;
                    }

                    .stat-pill {
                        flex: 1;
                        min-width: 70px;
                        padding: 0.4rem;
                    }

                    .modal-footer-centered {
                        padding: 1.25rem;
                    }

                    .action-group-wide {
                        flex-direction: column-reverse; /* Put Reject below Approve on mobile */
                        max-width: 100%;
                    }

                    .secondary-btn-wide, .approve-btn-wide, .reject-btn-wide {
                        width: 100%;
                        padding: 0.875rem;
                    }

                    .close-btn-light {
                        position: absolute;
                        top: 1.25rem;
                        right: 1.25rem;
                    }
                }

                .full-width {
                    grid-column: span 2;
                }

                @media (max-width: 600px) {
                    .full-width {
                        grid-column: span 1;
                    }
                }

                .detail-cards-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .detail-card {
                    background: white;
                    border: 1px solid var(--divider);
                    border-radius: 12px;
                    padding: 1rem;
                    position: relative;
                    transition: transform 0.2s;
                }

                .detail-card:hover {
                    border-color: var(--primary);
                    transform: translateX(4px);
                }

                .card-tag {
                    position: absolute;
                    top: -8px;
                    right: 12px;
                    background: var(--primary);
                    color: white;
                    font-size: 0.625rem;
                    font-weight: 800;
                    padding: 2px 8px;
                    border-radius: 4px;
                    text-transform: uppercase;
                }

                .card-content {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .card-content strong {
                    font-size: 0.875rem;
                    color: var(--text-main);
                }

                .card-content span {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }

                .card-footer-mini {
                    margin-top: 0.5rem;
                    padding-top: 0.5rem;
                    border-top: 1px dashed var(--divider);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 0.65rem;
                    color: var(--primary);
                    font-weight: 600;
                }

                .emp-id-tag-mini {
                    font-size: 0.65rem;
                    background: var(--bg-main);
                    padding: 1px 6px;
                    border-radius: 3px;
                    color: var(--primary);
                }

                @keyframes slideUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .doc-pdf-icon, .doc-generic-icon {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: #f8fafc;
                    gap: 0.5rem;
                }

                .pdf-label {
                    font-size: 0.65rem;
                    font-weight: 700;
                    color: #ef4444;
                    text-transform: uppercase;
                }

                .doc-preview.doc-load-failed {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: #f1f5f9;
                    position: relative;
                    gap: 0.5rem;
                }

                .doc-preview.doc-load-failed::before {
                    content: '⚠';
                    font-size: 1.5rem;
                    color: #94a3b8;
                }

                .doc-preview.doc-load-failed::after {
                    content: 'Preview Unavailable';
                    font-size: 0.6rem;
                    color: #64748b;
                    font-weight: 700;
                    text-transform: uppercase;
                }
            `})]})},ly=({message:o,type:c="success",onClose:d,duration:s=5e3})=>{const[u,f]=j.useState(!1);j.useEffect(()=>{if(o){f(!0);const y=setTimeout(()=>{g()},s);return()=>clearTimeout(y)}},[o,s]);const g=()=>{f(!1),setTimeout(d,300)};return o?a.jsxs("div",{className:`toast-container ${u?"show":""}`,children:[a.jsxs("div",{className:`toast-content ${c}`,children:[a.jsx("div",{className:"toast-icon",children:c==="success"?a.jsx(Sr,{size:20}):a.jsx(zp,{size:20})}),a.jsx("div",{className:"toast-message",children:o}),a.jsx("button",{className:"toast-close",onClick:g,children:a.jsx(Ve,{size:16})})]}),a.jsx("style",{children:`
                .toast-container {
                    position: fixed;
                    bottom: 2rem;
                    right: 2rem;
                    z-index: 10000;
                    transform: translateY(100px);
                    opacity: 0;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    pointer-events: none;
                }

                .toast-container.show {
                    transform: translateY(0);
                    opacity: 1;
                    pointer-events: auto;
                }

                .toast-content {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    background: white;
                    padding: 1rem 1.25rem;
                    border-radius: 12px;
                    box-shadow: 
                        0 10px 15px -3px rgba(0, 0, 0, 0.1),
                        0 4px 6px -2px rgba(0, 0, 0, 0.05),
                        0 0 0 1px rgba(0, 0, 0, 0.05);
                    min-width: 320px;
                    max-width: 450px;
                }

                .toast-content.success {
                    border-left: 4px solid var(--success, #10b981);
                }

                .toast-content.error {
                    border-left: 4px solid var(--danger, #ef4444);
                }

                .toast-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .success .toast-icon { color: var(--success, #10b981); }
                .error .toast-icon { color: var(--danger, #ef4444); }

                .toast-message {
                    flex: 1;
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: var(--text-main, #1e293b);
                }

                .toast-close {
                    background: none;
                    color: var(--text-muted, #64748b);
                    padding: 0.25rem;
                    border-radius: 4px;
                    display: flex;
                    transition: all 0.2s;
                }

                .toast-close:hover {
                    background: var(--bg-main, #f8fafc);
                    color: var(--text-main, #1e293b);
                }

                @media (max-width: 640px) {
                    .toast-container {
                        bottom: 1rem;
                        right: 1rem;
                        left: 1rem;
                    }
                    .toast-content {
                        min-width: 0;
                        width: 100%;
                    }
                }
            `})]}):null},ry=()=>{const[o,c]=j.useState([]),[d,s]=j.useState(!1),[u,f]=j.useState(!1),[g,y]=j.useState(!1),[x,p]=j.useState(null),[b,w]=j.useState(""),[B,F]=j.useState(!1),[V,T]=j.useState({department:"All",status:"All",entity:"All",assignmentStatus:"All"}),[k,M]=j.useState([]),[P,te]=j.useState([]),[le,N]=j.useState([]),[W,Q]=j.useState({show:!1,message:"",type:"success"}),me=O=>O.deptName||O.name||O.departmentName||O,ye=O=>O.entityName||O.name||O,Le=(O,$)=>{if(!O)return null;let ce=O.employeeId;$.status?.toLowerCase()==="active"&&Fb(O.onboardingDate,10)&&(ce=`EMP/${ce}`);const K=JSON.parse(localStorage.getItem("asset_assignments")||"[]").find(z=>z.employeeName===O.name);return{...O,displayId:ce,hasAssets:!!K,assignedAssetName:K?K.assetName:null,assignedAssetDate:K?K.assignedDate:null}},re=async()=>{const O=$=>{if(Array.isArray($))return $;if($&&typeof $=="object"){if(Array.isArray($.data))return $.data;if(Array.isArray($.content))return $.content;if(Array.isArray($.employees))return $.employees;if(Array.isArray($.employeeList))return $.employeeList}return[]};try{const[$,ce,Ae,K]=await Promise.all([xe.getDepartments(),xe.getRoles(),xe.getEntities(),xe.getEmployeesWithDetails()]),z=O($),v=O(ce),H=O(Ae),ne=O(K);M(z),te(v),N(H),c(ne.map(pe=>Le(jl(pe,z,v,H),pe)))}catch($){console.error("Failed to fetch data:",$)}};j.useEffect(()=>{re()},[]);const Ce=async O=>{try{const $=await xe.createEmployee(O);console.log("[DEBUG] Backend Response (createEmployee):",$);const ce=jl($,k,P,le);console.log("[DEBUG] Normalized Employee (createEmployee):",ce),c([...o,Le(ce,$)]),s(!1),Q({show:!0,message:`Employee added successfully! Generated Code: ${ce.empCode||"N/A"}. An onboarding link has been sent to their email.`,type:"success"})}catch($){console.error("Failed to create employee:",$),Q({show:!0,message:"Failed to add employee: "+$.message,type:"error"})}},Ke=async O=>{try{const $=x.id||x.employeeId,ce=await xe.updateEmployee($,O);c(Ae=>Ae.map(K=>(K.id||K.employeeId)===$?Le(jl(ce,k,P,le),ce):K)),f(!1),p(null),Q({show:!0,message:"Employee updated successfully!",type:"success"})}catch($){Q({show:!0,message:"Failed to update: "+$.message,type:"error"})}},ee=async O=>{try{const $=O.id||O.employeeId;await xe.reviewOnboarding({employeeId:$,status:"APPROVED",remarks:"Self-Approved",rejectedDocuments:[]}),Q({show:!0,message:"Onboarding approved successfully!",type:"success"}),y(!1),re()}catch($){console.error("Failed to approve onboarding:",$),Q({show:!0,message:"Failed to approve: "+$.message,type:"error"})}},he=async O=>{if(window.confirm("Are you sure?"))try{await xe.deleteEmployee(O),c(o.filter($=>($.id||$.employeeId)!==O)),Q({show:!0,message:"Employee deleted successfully!",type:"success"})}catch($){Q({show:!0,message:"Failed to delete: "+$.message,type:"error"})}},L=async O=>{try{const $=O.id||O.employeeId;if($){const ce=await xe.getEmployeeDetail($);if(ce){const Ae=jl(ce);p(Ae),y(!0);return}}}catch($){console.warn("Detailed employee fetch failed, falling back to list data:",$)}p(O),y(!0)},ae=O=>{p(O),f(!0)},de=async(O,$)=>{const ce=x;if(ce&&window.confirm(`Are you sure you want to reject the "${$}" for ${ce.name}? This will trigger a re-onboarding email where this field will be empty.`))try{const Ae=ce.id||ce.employeeId,K=O.id&&!isNaN(O.id)?Number(O.id):null;console.log("Reject Payload Detail:",{employeeId:Ae,entityType:O.entityType,entityId:K,fullDoc:O}),await xe.rejectOnboardingDocument(Ae,O.entityType,K),Q({show:!0,message:`Document "${$}" rejected successfully. A re-onboarding email has been sent to ${ce.name}.`,type:"success"}),re(),y(!1)}catch(Ae){console.error("Failed to reject document:",Ae),Q({show:!0,message:"Failed to reject document: "+Ae.message,type:"error"})}},Y=(Array.isArray(o)?o:[]).filter(O=>{if(!O)return!1;const $=(O.name||"").toLowerCase().includes(b.toLowerCase())||String(O.employeeId||"").toLowerCase().includes(b.toLowerCase())||String(O.empCode||"").toLowerCase().includes(b.toLowerCase())||(O.roleName||"").toLowerCase().includes(b.toLowerCase())||(O.deptName||"").toLowerCase().includes(b.toLowerCase()),ce=V.department==="All"||O.deptName===V.department,Ae=V.status==="All"||O.status?.toLowerCase()===V.status.toLowerCase(),K=V.entity==="All"||O.entityName===V.entity,z=V.assignmentStatus==="All"||(V.assignmentStatus==="Assigned"?O.hasAssets:!O.hasAssets);return $&&ce&&Ae&&K&&z}),oe=O=>{T($=>({...$,[O]:"All"}))},C=Object.values(V).some(O=>O!=="All"),Z=["All","Active","Onboarding","Inactive"],ie=["All",...k.map(me)],se=["All",...le.map(ye)];return a.jsxs("div",{className:"employees-page",children:[a.jsxs("header",{className:"page-header",children:[a.jsxs("div",{className:"header-title",children:[a.jsx("h1",{children:"Employee Directory"}),a.jsx("p",{children:"Global workforce management and HR records."})]}),a.jsx("div",{className:"header-actions",style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",justifyContent:"flex-end"},children:a.jsx("button",{className:"primary-btn",onClick:()=>s(!0),children:"Add Employee"})})]}),a.jsx(ny,{isOpen:g,onClose:()=>y(!1),employee:x,onApprove:ee,onRejectDocument:de}),a.jsx(Wb,{isOpen:d,onClose:()=>s(!1),onAdd:Ce,departments:k,roles:P,entities:le}),a.jsx(ey,{isOpen:u,onClose:()=>{f(!1),p(null)},onUpdate:Ke,employee:x,departments:k,roles:P,entities:le}),a.jsx(ly,{message:W.show?W.message:"",type:W.type,onClose:()=>Q({...W,show:!1})}),a.jsxs("div",{className:"table-container card",children:[a.jsxs("div",{className:"table-controls",children:[a.jsxs("div",{className:"search-box",children:[a.jsx(ns,{size:18}),a.jsx("input",{type:"text",placeholder:"Search by name, code, role or department...",value:b,onChange:O=>w(O.target.value)})]}),a.jsx("div",{className:"filter-group",children:a.jsxs("div",{className:"filter-popover-wrapper",children:[a.jsxs("button",{className:`control-btn ${C?"active":""}`,onClick:()=>F(!B),children:[a.jsx(qc,{size:16}),a.jsx("span",{children:"Filters"}),C&&a.jsx("span",{className:"filter-indicator"})]}),B&&a.jsxs("div",{className:"filter-popover card",children:[a.jsxs("div",{className:"popover-header",children:[a.jsx("h3",{children:"Filter Directory"}),a.jsx("button",{className:"icon-btn-sm",onClick:()=>F(!1),children:a.jsx(Ve,{size:14})})]}),a.jsxs("div",{className:"popover-body",children:[a.jsxs("div",{className:"filter-item",children:[a.jsx("label",{children:"Department"}),a.jsx("select",{value:V.department,onChange:O=>T($=>({...$,department:O.target.value})),children:ie.map(O=>a.jsx("option",{value:O,children:O},O))})]}),a.jsxs("div",{className:"filter-item",children:[a.jsx("label",{children:"Entity"}),a.jsx("select",{value:V.entity,onChange:O=>T($=>({...$,entity:O.target.value})),children:se.map(O=>a.jsx("option",{value:O,children:O},O))})]}),a.jsxs("div",{className:"filter-item",children:[a.jsx("label",{children:"Status"}),a.jsx("select",{value:V.status,onChange:O=>T($=>({...$,status:O.target.value})),children:Z.map(O=>a.jsx("option",{value:O,children:O},O))})]}),a.jsxs("div",{className:"filter-item",children:[a.jsx("label",{children:"Asset Assignment"}),a.jsxs("select",{value:V.assignmentStatus,onChange:O=>T($=>({...$,assignmentStatus:O.target.value})),children:[a.jsx("option",{value:"All",children:"All"}),a.jsx("option",{value:"Assigned",children:"Assigned"}),a.jsx("option",{value:"Unassigned",children:"Unassigned"})]})]})]}),a.jsxs("div",{className:"popover-footer",children:[a.jsx("button",{className:"text-btn",onClick:()=>T({department:"All",status:"All",entity:"All",assignmentStatus:"All"}),children:"Reset All"}),a.jsx("button",{className:"apply-btn",onClick:()=>F(!1),children:"Apply"})]})]})]})})]}),C&&a.jsxs("div",{className:"active-filters",children:[Object.entries(V).map(([O,$])=>$!=="All"&&a.jsxs("div",{className:"filter-badge",children:[a.jsxs("span",{className:"badge-label",children:[O,":"]}),a.jsx("span",{className:"badge-value",children:$}),a.jsx("button",{onClick:()=>oe(O),children:a.jsx(Ve,{size:12})})]},O)),a.jsx("button",{className:"clear-all-link",onClick:()=>T({department:"All",status:"All",entity:"All",assignmentStatus:"All"}),children:"Clear all"})]}),a.jsx("div",{className:"table-wrapper",children:a.jsxs("table",{className:"employee-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Emp ID"}),a.jsx("th",{children:"Emp Code"}),a.jsx("th",{children:"Name"}),a.jsx("th",{children:"Role"}),a.jsx("th",{children:"Department"}),a.jsx("th",{children:"Entity"}),a.jsx("th",{children:"Onboarding Date"}),a.jsx("th",{children:"Email ID"}),a.jsx("th",{children:"Phone Number"}),a.jsx("th",{children:"Status"}),a.jsx("th",{className:"text-center",children:"Action"})]})}),a.jsx("tbody",{children:Y.map(O=>a.jsxs("tr",{children:[a.jsx("td",{className:"emp-id-cell",children:O.employeeId||O.id||"-"}),a.jsx("td",{className:"emp-code-cell",children:O.empCode||"-"}),a.jsx("td",{className:"emp-name-cell",children:a.jsxs("div",{className:"name-wrapper",children:[a.jsx("div",{className:"emp-thumbnail",children:O.photoPath?a.jsx("img",{src:at(O.photoPath),alt:O.name,onError:$=>{const ce=$.target.src;if($.target.dataset.fallbackExhausted){$.target.style.display="none",$.target.parentElement.innerText=(O.name||"").split(" ").map(z=>z[0]).join("");return}const Ae=ce.match(/\/api\/(?:onboarding\/)?files\/(.+)$/),K=Ae?Ae[1]:"";ce.includes("/api/files/")?$.target.src=`/api/onboarding/files/${K}`:ce.includes("/api/onboarding/files/")?($.target.src=`/api/files/${K}`,$.target.dataset.fallbackExhausted="true"):($.target.dataset.fallbackExhausted="true",$.target.style.display="none",$.target.parentElement.innerText=(O.name||"").split(" ").map(z=>z[0]).join(""))}}):(O.name||"").split(" ").map($=>$[0]).join("")}),a.jsx("span",{children:O.name})]})}),a.jsx("td",{children:O.roleName}),a.jsx("td",{children:O.deptName}),a.jsx("td",{children:O.entityName}),a.jsx("td",{className:"no-wrap",children:O.onboardingDate}),a.jsx("td",{children:O.email}),a.jsx("td",{className:"no-wrap",children:O.phone}),a.jsx("td",{children:a.jsx("span",{className:`badge badge-${O.status.toLowerCase()}`,children:O.status})}),a.jsx("td",{className:"text-center",children:a.jsxs("div",{className:"action-buttons",children:[a.jsx("button",{className:"icon-btn-v3",onClick:()=>L(O),title:"View Profile",children:a.jsx(st,{size:16})}),a.jsx("button",{className:"icon-btn-v3",onClick:()=>ae(O),title:"Edit Employee",children:a.jsx(Er,{size:16})}),a.jsx("button",{className:"icon-btn-v3 danger",onClick:()=>he(O.id||O.employeeId),title:"Delete Record",children:a.jsx(Qt,{size:16})})]})})]},O.id||O.employeeId))})]})})]}),a.jsx("style",{children:`
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
        }

        .header-actions {
          display: flex;
          gap: 0.75rem;
        }

        .table-container {
          padding: 0;
          overflow: hidden;
          background: white;
          border-radius: 12px;
          border: 1px solid var(--divider);
          margin-top: 1rem;
        }

        .table-controls {
          padding: 1.25rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--divider);
          background: #fcfcfd;
        }

        .search-box {
          position: relative;
          flex: 1;
          max-width: 400px;
        }

        .search-box svg {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
        }

        .search-box input {
          width: 100%;
          padding: 0.625rem 1rem 0.625rem 2.5rem;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 0.875rem;
          background: white;
        }

        .filter-group {
          display: flex;
          gap: 0.75rem;
        }

        .control-btn {
          background: white;
          border: 1px solid #e2e8f0;
          padding: 0.625rem 1rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #475569;
          cursor: pointer;
          position: relative;
          transition: all 0.2s;
        }

        .control-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
          background: #f8faff;
        }

        .control-btn.active {
          border-color: var(--primary);
          color: var(--primary);
          background: #eff6ff;
        }

        .filter-indicator {
          width: 6px;
          height: 6px;
          background: var(--primary);
          border-radius: 50%;
          position: absolute;
          top: 8px;
          right: 8px;
        }

        .filter-popover-wrapper {
          position: relative;
        }

        .filter-popover {
          position: absolute;
          top: calc(100% + 12px);
          right: 0;
          width: 280px;
          z-index: 100;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--divider);
          background: white;
          border-radius: 12px;
          padding: 0 !important;
          animation: popIn 0.2s ease-out;
          overflow: hidden;
        }

        @keyframes popIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .popover-header {
          padding: 1rem 1.25rem;
          border-bottom: 1px solid var(--divider);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .popover-header h3 {
          font-size: 0.875rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
        }

        .popover-body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .filter-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .filter-item label {
          font-size: 0.75rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .filter-item select {
          padding: 0.5rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 0.875rem;
          background: #f8fafc;
          outline: none;
        }

        .popover-footer {
          padding: 1rem 1.25rem;
          background: #f8fafc;
          border-top: 1px solid var(--divider);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .text-btn {
          background: none;
          border: none;
          color: #64748b;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
        }

        .text-btn:hover {
          color: var(--primary);
        }

        .apply-btn {
          background: var(--primary);
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
        }

        .active-filters {
          padding: 0.75rem 1.5rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          align-items: center;
          border-bottom: 1px solid var(--divider);
          background: white;
        }

        .filter-badge {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: #eff6ff;
          color: var(--primary);
          padding: 0.25rem 0.625rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          border: 1px solid #dbeafe;
        }

        .badge-label {
          color: #60a5fa;
          text-transform: capitalize;
        }

        .filter-badge button {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          color: var(--primary);
          cursor: pointer;
          padding: 0;
          border-radius: 50%;
        }

        .clear-all-link {
          font-size: 0.75rem;
          font-weight: 600;
          color: #64748b;
          background: none;
          border: none;
          cursor: pointer;
          margin-left: 0.5rem;
        }

        .clear-all-link:hover {
          color: var(--primary);
          text-decoration: underline;
        }

        .icon-btn-sm {
          width: 24px;
          height: 24px;
          border-radius: 4px;
          border: none;
          background: transparent;
          color: #94a3b8;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-btn-sm:hover {
          background: #f1f5f9;
          color: #475569;
        }

        .table-wrapper {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .employee-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 1200px;
          font-size: 0.875rem;
        }

        .employee-table th {
          background: #f8fafc;
          padding: 1rem 1.5rem;
          text-align: left;
          font-weight: 600;
          color: var(--text-muted);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid var(--divider);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .employee-table td {
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--divider);
          color: var(--text-main);
          vertical-align: middle;
        }

        .employee-table tr:hover td {
          background: #f1f5f9;
        }

        .emp-id-cell {
          font-family: monospace;
          font-weight: 600;
          color: var(--primary);
        }

        .emp-name-cell .name-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .emp-thumbnail {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--primary);
          overflow: hidden;
          border: 1px solid var(--divider);
          flex-shrink: 0;
        }

        .emp-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .mini-avatar {
          width: 32px;
          height: 32px;
          background: var(--primary);
          color: white;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.75rem;
        }

        .emp-name-cell span {
          font-weight: 600;
        }

        .no-wrap {
          white-space: nowrap;
        }

        .timestamp-group {
          display: flex;
          flex-direction: column;
        }

        .timestamp-group .date {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .timestamp-group .time {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-family: monospace;
        }

        .text-right {
          text-align: right !important;
        }

        .action-buttons {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
        }

        .icon-btn-v3 {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          transition: all 0.2s;
        }

        .icon-btn-v3:hover {
          color: var(--primary);
          border-color: var(--primary);
          background: #eff6ff;
        }

        .icon-btn-v3.danger:hover {
          color: var(--danger);
          border-color: var(--danger);
          background: #fee2e2;
        }

        .icon-btn-v3.success:hover {
          color: #10b981;
          border-color: #10b981;
          background: #ecfdf5;
        }

        .primary-btn {
          background: var(--primary);
          color: white;
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.875rem;
        }

        .secondary-btn {
          background: white;
          border: 1px solid var(--border-color);
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.875rem;
        }

        @media (max-width: 640px) {
          .page-header {
            flex-direction: column;
            gap: 1rem;
          }
          .header-actions {
            width: 100%;
          }
          .header-actions button {
            flex: 1;
          }
        }
      `})]})},iy=({isOpen:o,onClose:c,onAdd:d})=>{const[s,u]=j.useState([]),[f,g]=j.useState({vendorName:"",vendorType:"",contactPersonName:"",address:"",contractStart:"",contractEnd:"",phone:"",email:"",securityDeposit:"",status:"Active"});j.useEffect(()=>{o&&y()},[o]);const y=async()=>{try{const b=await xe.getVendorTypes();u(Array.isArray(b)?b:[])}catch(b){console.error("Failed to fetch vendor types:",b)}};if(!o)return null;const x=b=>{if(b.preventDefault(),!f.vendorName||!f.vendorType||!f.contactPersonName||!f.contractStart||!f.contractEnd||!f.phone||!f.email||!f.address||!f.securityDeposit){alert("Please fill in all required fields including Contact Person, Address and Security Deposit.");return}d(f),g({vendorName:"",vendorType:"",contactPersonName:"",address:"",contractStart:"",contractEnd:"",phone:"",email:"",securityDeposit:"",status:"Active"}),c()},p=b=>{const{name:w,value:B}=b.target;g(F=>({...F,[w]:B}))};return a.jsxs("div",{className:"modal-overlay",onClick:c,children:[a.jsxs("div",{className:"modal-content animate-slide-up",onClick:b=>b.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("div",{className:"header-icon",children:a.jsx(Ba,{size:24})}),a.jsxs("div",{className:"header-text",children:[a.jsx("h2",{children:"Register New Vendor"}),a.jsx("p",{className:"subtitle",children:"Onboard a new service provider to the ecosystem."})]}),a.jsx("button",{className:"close-btn",onClick:c,children:a.jsx(Ve,{size:20})})]}),a.jsxs("form",{onSubmit:x,className:"vendor-form",children:[a.jsxs("div",{className:"form-section",children:[a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(Ba,{size:14})," Vendor Name"]}),a.jsx("input",{type:"text",name:"vendorName",value:f.vendorName,onChange:p,required:!0,placeholder:"Enter Vendor Name"})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(wt,{size:14})," Vendor Type"]}),a.jsxs("select",{name:"vendorType",value:f.vendorType,onChange:p,className:"form-select",children:[a.jsx("option",{value:"",children:"Select Vendor Type"}),s.map((b,w)=>a.jsx("option",{value:b.typeName||b.name||b,children:b.typeName||b.name||b},w))]})]})]}),a.jsxs("div",{className:"form-group full-width",children:[a.jsxs("label",{children:[a.jsx(Ut,{size:14})," Contact Person Name"]}),a.jsx("input",{type:"text",name:"contactPersonName",value:f.contactPersonName,onChange:p,required:!0,placeholder:"Enter the name of the primary contact person"})]}),a.jsxs("div",{className:"form-group full-width",children:[a.jsxs("label",{children:[a.jsx(wt,{size:14})," Vendor Address"]}),a.jsx("textarea",{name:"address",value:f.address,onChange:p,required:!0,placeholder:"Enter full physical address of the vendor",className:"form-textarea",rows:"2"})]}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(Zt,{size:14})," Contract Start Date"]}),a.jsx("input",{type:"date",name:"contractStart",value:f.contractStart,onChange:p,required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(Zt,{size:14})," Contract End Date"]}),a.jsx("input",{type:"date",name:"contractEnd",value:f.contractEnd,onChange:p,required:!0})]})]}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(_n,{size:14})," Email Address"]}),a.jsx("input",{type:"email",name:"email",value:f.email,onChange:p,required:!0,placeholder:"vendor@example.com"})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(pn,{size:14})," Phone Number"]}),a.jsx("input",{type:"tel",name:"phone",value:f.phone,onChange:p,required:!0,placeholder:"+91 XXXXX XXXXX"})]})]}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(_a,{size:14})," Security Deposit Amount"]}),a.jsx("input",{type:"text",name:"securityDeposit",value:f.securityDeposit,onChange:p,required:!0,placeholder:"e.g. ₹ 50,000"})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(_a,{size:14})," Partnership Status"]}),a.jsxs("select",{name:"status",value:f.status,onChange:p,className:"form-select",children:[a.jsx("option",{value:"Active",children:"Active"}),a.jsx("option",{value:"Inactive",children:"Inactive"})]})]})]})]}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{type:"button",className:"glass-btn secondary",onClick:c,children:"Cancel"}),a.jsx("button",{type:"submit",className:"primary-glow-btn",children:"Complete Onboarding"})]})]})]}),a.jsx("style",{children:`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.4);
                    backdrop-filter: blur(8px);
                    display: flex;
                    justify-content: center;
                    z-index: 9999;
                    padding: 2rem 1rem;
                    overflow-y: auto;
                }

                .animate-backdrop {
                    animation: fadeIn 0.3s ease-out;
                }

                .modal-content {
                    width: 100%;
                    max-width: 600px;
                    background: rgba(255, 255, 255, 0.95);
                    border-radius: 24px;
                    margin: auto;
                    position: relative;
                    overflow: visible;
                    box-shadow: 
                        0 20px 25px -5px rgba(0, 0, 0, 0.1),
                        0 10px 10px -5px rgba(0, 0, 0, 0.04),
                        0 0 0 1px rgba(0, 0, 0, 0.05);
                }

                .animate-slide-up {
                    animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                .modal-header {
                    padding: 1.75rem 2rem;
                    border-bottom: 1px solid var(--divider);
                    display: flex;
                    align-items: center;
                    gap: 1.25rem;
                    background: #fafafa;
                }

                .header-icon {
                    width: 48px;
                    height: 48px;
                    background: #eff6ff;
                    color: #2563eb;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .header-text h2 {
                    font-size: 1.25rem;
                    font-weight: 800;
                    margin-bottom: 0.125rem;
                    color: var(--text-main);
                    letter-spacing: -0.01em;
                }

                .subtitle {
                    font-size: 0.8125rem;
                    color: var(--text-muted);
                }

                .close-btn {
                    margin-left: auto;
                    background: white;
                    color: var(--text-muted);
                    padding: 0.5rem;
                    border-radius: 10px;
                    border: 1px solid var(--border-color);
                    transition: all 0.2s;
                    align-self: flex-start;
                }

                .close-btn:hover {
                    background: #fee2e2;
                    color: #ef4444;
                    border-color: #fecaca;
                }

                .vendor-form {
                    padding: 2rem;
                }

                .form-section {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.25rem;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.625rem;
                }

                .form-group label {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--text-main);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .form-group label svg {
                    color: var(--primary);
                }

                .form-group input, 
                .form-group select,
                .form-textarea {
                    padding: 0.875rem 1rem;
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    font-size: 0.9375rem;
                    outline: none;
                    transition: all 0.2s;
                    background: white;
                    width: 100%;
                    font-family: inherit;
                }

                .form-textarea {
                    resize: vertical;
                    min-height: 80px;
                }

                .form-group input:focus, 
                .form-group select:focus,
                .form-textarea:focus {
                    border-color: var(--primary);
                    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
                }

                .tag-input-container {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    padding: 0.5rem;
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    background: white;
                }

                .tag-input-container:focus-within {
                    border-color: var(--primary);
                    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
                }

                .tags-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .tag-pill {
                    display: flex;
                    align-items: center;
                    gap: 0.35rem;
                    padding: 0.25rem 0.75rem;
                    background: #eff6ff;
                    color: #2563eb;
                    border-radius: 20px;
                    font-size: 0.8125rem;
                    font-weight: 600;
                    border: 1px solid #dbeafe;
                }

                .tag-pill button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: none;
                    border: none;
                    color: #2563eb;
                    cursor: pointer;
                    padding: 0;
                    border-radius: 50%;
                }

                .tag-pill button:hover {
                    color: #1d4ed8;
                }

                .tag-input-container input {
                    border: none !important;
                    box-shadow: none !important;
                    padding: 0.375rem 0.5rem !important;
                }

                .modal-footer {
                    margin-top: 2rem;
                    padding-top: 1.5rem;
                    display: flex;
                    justify-content: flex-end;
                    gap: 1rem;
                    border-top: 1px solid var(--divider);
                }

                .primary-glow-btn {
                    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                    color: white;
                    padding: 0.75rem 1.75rem;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 0.875rem;
                    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
                    transition: all 0.2s;
                }

                .primary-glow-btn:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 8px 16px rgba(37, 99, 235, 0.3);
                }

                .glass-btn {
                    background: white;
                    border: 1px solid var(--border-color);
                    color: var(--text-main);
                    padding: 0.75rem 1.75rem;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    transition: all 0.2s;
                }

                .glass-btn:hover {
                    background: #f8fafc;
                    border-color: var(--text-muted);
                }

                @media (max-width: 480px) {
                    .form-grid {
                        grid-template-columns: 1fr;
                    }
                    .modal-header {
                        padding: 1.25rem 1.5rem;
                    }
                    .vendor-form {
                        padding: 1.5rem;
                    }
                }
            `})]})},sy=({isOpen:o,onClose:c,onUpdate:d,vendor:s})=>{const[u,f]=j.useState([]),[g,y]=j.useState({vendorName:"",vendorType:"",contactPersonName:"",address:"",contractStart:"",contractEnd:"",phone:"",email:"",securityDeposit:"",status:""});j.useEffect(()=>{o&&x()},[o]);const x=async()=>{try{const w=await xe.getVendorTypes();f(Array.isArray(w)?w:[])}catch(w){console.error("Failed to fetch vendor types:",w)}};if(j.useEffect(()=>{s&&y({vendorName:s.vendorName||s.name,vendorType:s.vendorType||s.type||s.category,contactPersonName:s.contactPersonName||"",address:s.address||"",contractStart:s.contractStart||s.startDate||"",contractEnd:s.contractEnd||s.endDate||"",phone:s.phone||"",email:s.email||"",securityDeposit:s.securityDeposit||"",status:s.status})},[s]),!o||!s)return null;const p=w=>{if(w.preventDefault(),!g.vendorName||!g.vendorType||!g.contactPersonName||!g.contractStart||!g.contractEnd||!g.phone||!g.email||!g.address||!g.securityDeposit){alert("Required fields are missing including Contact Person, Address and Security Deposit.");return}d({...s,...g}),c()},b=w=>{const{name:B,value:F}=w.target;y(V=>({...V,[B]:F}))};return a.jsxs("div",{className:"modal-overlay",onClick:c,children:[a.jsxs("div",{className:"modal-content animate-slide-up",onClick:w=>w.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("div",{className:"header-icon",children:a.jsx(Er,{size:24})}),a.jsxs("div",{className:"header-text",children:[a.jsx("h2",{children:"Edit Vendor Details"}),a.jsxs("p",{className:"subtitle",children:["Update partnership information for ",s.vendorName||s.name,"."]})]}),a.jsx("button",{className:"close-btn",onClick:c,children:a.jsx(Ve,{size:20})})]}),a.jsxs("form",{onSubmit:p,className:"vendor-form",children:[a.jsxs("div",{className:"form-section",children:[a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(Ba,{size:14})," Vendor Name"]}),a.jsx("input",{type:"text",name:"vendorName",value:g.vendorName,onChange:b,required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(wt,{size:14})," Vendor Type"]}),a.jsxs("select",{name:"vendorType",value:g.vendorType,onChange:b,className:"form-select",children:[a.jsx("option",{value:"",children:"Select Vendor Type"}),u.map((w,B)=>a.jsx("option",{value:w.typeName||w.name||w,children:w.typeName||w.name||w},B))]})]})]}),a.jsxs("div",{className:"form-group full-width",children:[a.jsxs("label",{children:[a.jsx(Ut,{size:14})," Contact Person Name"]}),a.jsx("input",{type:"text",name:"contactPersonName",value:g.contactPersonName,onChange:b,required:!0,placeholder:"Enter the name of the primary contact person"})]}),a.jsxs("div",{className:"form-group full-width",children:[a.jsxs("label",{children:[a.jsx(wt,{size:14})," Vendor Address"]}),a.jsx("textarea",{name:"address",value:g.address,onChange:b,required:!0,placeholder:"Enter full physical address",className:"form-textarea",rows:"2"})]}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(Zt,{size:14})," Contract Start Date"]}),a.jsx("input",{type:"date",name:"contractStart",value:g.contractStart,onChange:b,required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(Zt,{size:14})," Contract End Date"]}),a.jsx("input",{type:"date",name:"contractEnd",value:g.contractEnd,onChange:b,required:!0})]})]}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(_n,{size:14})," Email Address"]}),a.jsx("input",{type:"email",name:"email",value:g.email,onChange:b,required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(pn,{size:14})," Phone Number"]}),a.jsx("input",{type:"tel",name:"phone",value:g.phone,onChange:b,required:!0})]})]}),a.jsxs("div",{className:"form-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(_a,{size:14})," Security Deposit Amount"]}),a.jsx("input",{type:"text",name:"securityDeposit",value:g.securityDeposit,onChange:b,required:!0,placeholder:"e.g. ₹ 50,000"})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(_a,{size:14})," Partnership Status"]}),a.jsxs("select",{name:"status",value:g.status,onChange:b,className:"form-select",children:[a.jsx("option",{value:"Active",children:"Active"}),a.jsx("option",{value:"Inactive",children:"Inactive"})]})]})]})]}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{type:"button",className:"glass-btn secondary",onClick:c,children:"Cancel"}),a.jsx("button",{type:"submit",className:"primary-glow-btn",children:"Save Changes"})]})]})]}),a.jsx("style",{children:`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.4);
                    backdrop-filter: blur(8px);
                    display: flex;
                    align-items: center; /* Center vertically */
                    justify-content: center; /* Center horizontally */
                    z-index: 9999; /* Fixed z-index */
                    padding: 2rem 1rem;
                    overflow-y: auto; /* Allow scrolling if content is too tall */
                }

                .animate-backdrop {
                    animation: fadeIn 0.3s ease-out;
                }

                .modal-content {
                    width: 100%;
                    max-width: 600px; /* Increased max-width */
                    background: rgba(255, 255, 255, 0.95);
                    border-radius: 24px;
                    margin: auto; /* Ensures centering with flexbox */
                    position: relative; /* Needed for potential absolute children */
                    overflow: visible;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                }

                .animate-slide-up {
                    animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

                .modal-header {
                    padding: 1.75rem 2rem;
                    border-bottom: 1px solid var(--divider);
                    display: flex;
                    align-items: center;
                    gap: 1.25rem;
                    background: #fafafa;
                }

                .header-icon {
                    width: 48px;
                    height: 48px;
                    background: #f0f9ff;
                    color: #0369a1;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .header-text h2 {
                    font-size: 1.25rem;
                    font-weight: 800;
                    color: var(--text-main);
                }

                .subtitle { font-size: 0.8125rem; color: var(--text-muted); }

                .close-btn {
                    margin-left: auto;
                    background: white;
                    color: var(--text-muted);
                    padding: 0.5rem;
                    border-radius: 10px;
                    border: 1px solid var(--border-color);
                }

                .vendor-form { padding: 2rem; }
                .form-section { display: flex; flex-direction: column; gap: 1.5rem; }
                .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
                .form-group { display: flex; flex-direction: column; gap: 0.625rem; }
                .form-group label {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--text-main);
                    text-transform: uppercase;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .form-group input, 
                .form-group select,
                .form-textarea {
                    padding: 0.875rem 1rem;
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    font-size: 0.9375rem;
                    outline: none;
                    transition: all 0.2s;
                    background: white;
                    width: 100%;
                    font-family: inherit;
                }

                .form-textarea {
                    resize: vertical;
                    min-height: 80px;
                }

                .form-group input:focus, 
                .form-group select:focus,
                .form-textarea:focus {
                    border-color: var(--primary);
                    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
                }

                .tag-input-container {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    padding: 0.5rem;
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    background: white;
                }

                .tag-input-container:focus-within {
                    border-color: var(--primary);
                    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
                }

                .tags-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .tag-pill {
                    display: flex;
                    align-items: center;
                    gap: 0.35rem;
                    padding: 0.25rem 0.75rem;
                    background: #eff6ff;
                    color: #2563eb;
                    border-radius: 20px;
                    font-size: 0.8125rem;
                    font-weight: 600;
                    border: 1px solid #dbeafe;
                }

                .tag-pill button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: none;
                    border: none;
                    color: #2563eb;
                    cursor: pointer;
                    padding: 0;
                    border-radius: 50%;
                }

                .tag-pill button:hover {
                    color: #1d4ed8;
                }

                .tag-input-container input {
                    border: none !important;
                    box-shadow: none !important;
                    padding: 0.375rem 0.5rem !important;
                }
                .modal-footer {
                    margin-top: 2rem;
                    padding-top: 1.5rem;
                    display: flex;
                    justify-content: flex-end;
                    gap: 1rem;
                    border-top: 1px solid var(--divider);
                }
                .primary-glow-btn {
                    background: var(--text-main);
                    color: white;
                    padding: 0.75rem 1.75rem;
                    border-radius: 12px;
                    font-weight: 700;
                }
                .glass-btn {
                    background: white;
                    border: 1px solid var(--border-color);
                    padding: 0.75rem 1.75rem;
                    border-radius: 12px;
                    font-weight: 600;
                }
            `})]})},oy=({isOpen:o,onClose:c,vendor:d})=>!o||!d?null:a.jsxs("div",{className:"modal-overlay",onClick:c,children:[a.jsxs("div",{className:"modal-content animate-slide-up",onClick:s=>s.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("div",{className:"header-icon",children:a.jsx(st,{size:24})}),a.jsxs("div",{className:"header-text",children:[a.jsx("h2",{children:"Vendor Profile"}),a.jsxs("p",{className:"subtitle",children:["Partnership details for ",a.jsx("span",{className:"highlight",children:d.vendorName||d.name})]})]}),a.jsx("button",{className:"close-btn",onClick:c,children:a.jsx(Ve,{size:20})})]}),a.jsxs("div",{className:"modal-body",children:[a.jsx("div",{className:"info-section primary",children:a.jsxs("div",{className:"info-row",children:[a.jsxs("div",{className:"info-item",children:[a.jsx("span",{className:"label",children:"Vendor Name"}),a.jsx("span",{className:"value large",children:d.vendorName||d.name})]}),a.jsxs("div",{className:"info-item right-align",children:[a.jsx("span",{className:"label",children:"Current Status"}),a.jsxs("span",{className:`status-pill ${(d.status||"").replace(/\s+/g,"").toLowerCase()}`,children:[a.jsx("span",{className:"dot"}),d.status]})]})]})}),a.jsx("div",{className:"divider"}),a.jsxs("div",{className:"info-grid",children:[a.jsxs("div",{className:"grid-column",children:[a.jsxs("h4",{className:"section-title",children:[a.jsx(Ba,{size:14})," Core Details"]}),a.jsxs("div",{className:"info-item",children:[a.jsx("span",{className:"label",children:"Vendor Type"}),a.jsx("span",{className:"value",children:d.vendorType||d.type})]}),a.jsxs("div",{className:"info-item",children:[a.jsx("span",{className:"label",children:"Contact Person"}),a.jsx("span",{className:"value",children:d.contactPersonName||"Not specified"})]}),a.jsxs("div",{className:"info-item",children:[a.jsx("span",{className:"label",children:"Physical Address"}),a.jsx("span",{className:"value address-text",children:d.address||"Not specified"})]}),a.jsxs("div",{className:"info-item",children:[a.jsx("span",{className:"label",children:"Security Deposit"}),a.jsx("span",{className:"value",children:d.securityDeposit||"N/A"})]}),a.jsxs("div",{className:"info-item",children:[a.jsx("span",{className:"label",children:"Onboarded On"}),a.jsx("span",{className:"value",children:d.createdAt||"N/A"})]})]}),a.jsxs("div",{className:"grid-column",children:[a.jsxs("h4",{className:"section-title",children:[a.jsx(Nl,{size:14})," Contract & Contact"]}),a.jsxs("div",{className:"info-group",children:[a.jsxs("div",{className:"info-item half",children:[a.jsx("span",{className:"label",children:"Start Date"}),a.jsx("span",{className:"value",children:d.contractStart||d.startDate})]}),a.jsxs("div",{className:"info-item half",children:[a.jsx("span",{className:"label",children:"End Date"}),a.jsx("span",{className:"value",children:d.contractEnd||d.endDate})]})]}),a.jsxs("div",{className:"info-item",children:[a.jsx("span",{className:"label",children:"Email Address"}),a.jsxs("div",{className:"value-with-icon",children:[a.jsx(_n,{size:14}),a.jsx("a",{href:`mailto:${d.email}`,children:d.email})]})]}),a.jsxs("div",{className:"info-item",children:[a.jsx("span",{className:"label",children:"Phone Number"}),a.jsxs("div",{className:"value-with-icon",children:[a.jsx(pn,{size:14}),a.jsx("a",{href:`tel:${d.phone}`,children:d.phone})]})]})]})]})]}),a.jsx("div",{className:"modal-footer",children:a.jsx("button",{type:"button",className:"close-action-btn",onClick:c,children:"Close View"})})]}),a.jsx("style",{children:`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.5);
                    backdrop-filter: blur(4px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    padding: 1rem;
                }

                .animate-slide-up {
                    animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }

                @keyframes slideUp { 
                    from { transform: scale(0.95); opacity: 0; } 
                    to { transform: scale(1); opacity: 1; } 
                }

                .modal-content {
                    width: 100%;
                    max-width: 650px;
                    background: white;
                    border-radius: 16px;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }

                .modal-header {
                    padding: 1.5rem 2rem;
                    background: #f8fafc;
                    border-bottom: 1px solid #e2e8f0;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .header-icon {
                    width: 44px;
                    height: 44px;
                    background: white;
                    border: 1px solid #e2e8f0;
                    color: #0ea5e9;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
                }

                .header-text h2 {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0;
                }

                .subtitle { 
                    font-size: 0.8125rem; 
                    color: #64748b; 
                    margin: 2px 0 0 0; 
                }

                .highlight {
                    color: #0f172a;
                    font-weight: 600;
                }

                .close-btn {
                    margin-left: auto;
                    background: transparent;
                    border: none;
                    color: #94a3b8;
                    cursor: pointer;
                    padding: 0.5rem;
                    border-radius: 8px;
                    transition: all 0.2s;
                }

                .close-btn:hover {
                    background: #e2e8f0;
                    color: #64748b;
                }

                .modal-body {
                    padding: 2rem;
                }

                .info-section.primary {
                    margin-bottom: 1.5rem;
                }

                .info-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                }

                .right-align {
                    align-items: flex-end;
                }

                .divider {
                    height: 1px;
                    background: #f1f5f9;
                    margin: 0 0 2rem 0;
                }

                .info-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 3rem;
                }

                .grid-column {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                }

                .section-title {
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: #94a3b8;
                    font-weight: 700;
                    margin: 0 0 0.5rem 0;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .info-item {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .info-group {
                    display: flex;
                    gap: 1rem;
                }

                .info-item.half {
                    flex: 1;
                }

                .label {
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: #64748b;
                }

                .value {
                    font-size: 0.9375rem;
                    color: #1e293b;
                    font-weight: 500;
                }

                .value.large {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #0f172a;
                }

                .address-text {
                    line-height: 1.5;
                    color: #475569;
                    font-size: 0.875rem;
                }



                .value-with-icon {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.9375rem;
                    color: #1e293b;
                }

                .value-with-icon svg {
                    color: #94a3b8;
                }

                .value-with-icon a {
                    color: #2563eb;
                    text-decoration: none;
                    font-weight: 500;
                }

                .value-with-icon a:hover {
                    text-decoration: underline;
                }

                .status-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 6px 12px;
                    border-radius: 20px;
                    font-size: 0.8125rem;
                    font-weight: 600;
                }

                .status-pill .dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                }

                .status-pill.active { background: #dcfce7; color: #166534; }
                .status-pill.active .dot { background: #166534; }
                .status-pill.onhold { background: #fef9c3; color: #854d0e; }
                .status-pill.onhold .dot { background: #854d0e; }
                .status-pill.blacklisted { background: #fee2e2; color: #991b1b; }
                .status-pill.blacklisted .dot { background: #991b1b; }

                .modal-footer {
                    padding: 1.25rem 2rem;
                    background: #f8fafc;
                    border-top: 1px solid #e2e8f0;
                    display: flex;
                    justify-content: flex-end;
                }

                .close-action-btn {
                    padding: 0.625rem 1.5rem;
                    background: white;
                    border: 1px solid #cbd5e1;
                    color: #475569;
                    font-weight: 600;
                    font-size: 0.875rem;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .close-action-btn:hover {
                    background: #f1f5f9;
                    border-color: #94a3b8;
                }
            `})]}),cy=()=>{const[o,c]=j.useState([]),[d,s]=j.useState(!0),[u,f]=j.useState(!1),[g,y]=j.useState(!1),[x,p]=j.useState(!1),[b,w]=j.useState(null),[B,F]=j.useState(""),[V,T]=j.useState(!1),[k,M]=j.useState({type:"All",status:"All"}),P=["All",...new Set(o.map(ee=>ee.vendorType||ee.type))],te=["All",...new Set(o.map(ee=>ee.status))],le=ee=>ee?{...ee,vendorId:ee.vendorId||ee.id||`V-${Date.now()}`,vendorName:ee.vendorName||ee.name||"Unnamed Vendor",vendorType:ee.vendorType||ee.type||"N/A",status:ee.status||"Active"}:null,N=async()=>{s(!0);try{const ee=await xe.getVendors(),he=Array.isArray(ee)?ee:ee.data||[];c(he.map(le))}catch(ee){console.error("Failed to fetch vendors:",ee)}finally{s(!1)}};j.useEffect(()=>{N()},[]);const W=async ee=>{try{await xe.createVendor(ee),N(),f(!1)}catch(he){console.error("Error adding vendor:",he),alert("Failed to add vendor")}},Q=ee=>{w(ee),p(!0)},me=ee=>{w(ee),y(!0)},ye=async ee=>{try{const he=ee.id||ee.vendorId;await xe.updateVendor(he,ee),N(),y(!1),w(null)}catch(he){console.error("Error updating vendor:",he),alert("Failed to update vendor")}},Le=async ee=>{if(window.confirm("Are you sure you want to delete this vendor?"))try{await xe.deleteVendor(ee),N()}catch(he){console.error("Error deleting vendor:",he),alert("Failed to delete vendor")}},re=o.filter(ee=>{const he=ee.vendorName||ee.name||"",L=ee.vendorType||ee.type||"",ae=ee.vendorId||ee.id||"",de=he.toLowerCase().includes(B.toLowerCase())||L.toLowerCase().includes(B.toLowerCase())||String(ae).toLowerCase().includes(B.toLowerCase()),Y=k.type==="All"||(ee.vendorType||ee.type)===k.type,oe=k.status==="All"||ee.status===k.status;return de&&Y&&oe}),Ce=ee=>{M(he=>({...he,[ee]:"All"}))},Ke=Object.values(k).some(ee=>ee!=="All");return a.jsxs("div",{className:"vendors-page animate-fade-in",children:[a.jsxs("header",{className:"page-header",children:[a.jsxs("div",{className:"header-title",children:[a.jsx("h1",{children:"Vendor Ecosystem"}),a.jsx("p",{children:"Orchestrate and monitor external service partnerships and compliance."})]}),a.jsx("div",{className:"header-actions",children:a.jsxs("button",{className:"primary-btn",onClick:()=>f(!0),children:[a.jsx(ra,{size:18}),a.jsx("span",{children:"Onboard Vendor"})]})})]}),a.jsx(iy,{isOpen:u,onClose:()=>f(!1),onAdd:W}),a.jsx(sy,{isOpen:g,onClose:()=>{y(!1),w(null)},onUpdate:ye,vendor:b}),a.jsx(oy,{isOpen:x,onClose:()=>{p(!1),w(null)},vendor:b}),a.jsxs("div",{className:"main-table-container",children:[a.jsxs("div",{className:"table-controls",children:[a.jsxs("div",{className:"search-box",children:[a.jsx(ns,{size:18}),a.jsx("input",{type:"text",placeholder:"Search by name, type, or ID...",value:B,onChange:ee=>F(ee.target.value)})]}),a.jsx("div",{className:"filter-group",children:a.jsxs("div",{className:"filter-popover-wrapper",children:[a.jsxs("button",{className:`control-btn ${Ke?"active":""}`,onClick:()=>T(!V),children:[a.jsx(qc,{size:16}),a.jsx("span",{children:"Filters"}),Ke&&a.jsx("span",{className:"filter-indicator"})]}),V&&a.jsxs("div",{className:"filter-popover card",children:[a.jsxs("div",{className:"popover-header",children:[a.jsx("h3",{children:"Filter Ecosystem"}),a.jsx("button",{className:"icon-btn-sm",onClick:()=>T(!1),children:a.jsx(Ve,{size:14})})]}),a.jsxs("div",{className:"popover-body",children:[a.jsxs("div",{className:"filter-item",children:[a.jsx("label",{children:"Vendor Type"}),a.jsx("select",{value:k.type,onChange:ee=>M(he=>({...he,type:ee.target.value})),children:P.map(ee=>a.jsx("option",{value:ee,children:ee},ee))})]}),a.jsxs("div",{className:"filter-item",children:[a.jsx("label",{children:"Status"}),a.jsx("select",{value:k.status,onChange:ee=>M(he=>({...he,status:ee.target.value})),children:te.map(ee=>a.jsx("option",{value:ee,children:ee},ee))})]})]}),a.jsxs("div",{className:"popover-footer",children:[a.jsx("button",{className:"text-btn",onClick:()=>M({type:"All",status:"All"}),children:"Reset All"}),a.jsx("button",{className:"apply-btn",onClick:()=>T(!1),children:"Apply"})]})]})]})})]}),Ke&&a.jsxs("div",{className:"active-filters",children:[Object.entries(k).map(([ee,he])=>he!=="All"&&a.jsxs("div",{className:"filter-badge",children:[a.jsxs("span",{className:"badge-label",children:[ee,":"]}),a.jsx("span",{className:"badge-value",children:he}),a.jsx("button",{onClick:()=>Ce(ee),children:a.jsx(Ve,{size:12})})]},ee)),a.jsx("button",{className:"clear-all-link",onClick:()=>M({type:"All",status:"All"}),children:"Clear all"})]}),a.jsx("div",{className:"table-overflow",children:a.jsxs("table",{className:"premium-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Vendor ID"}),a.jsx("th",{children:"Vendor Profile"}),a.jsx("th",{children:"Vendor Type"}),a.jsx("th",{children:"Contact Access"}),a.jsx("th",{children:"Lifecycle"}),a.jsx("th",{children:"Actions"})]})}),a.jsx("tbody",{children:re.map((ee,he)=>a.jsxs("tr",{className:"table-row-hover",children:[a.jsx("td",{children:a.jsx("span",{className:"vendor-id-cell",children:ee.vendorId||ee.id})}),a.jsx("td",{children:a.jsxs("div",{className:"name-wrapper",children:[a.jsx("span",{className:"vendor-name",children:ee.vendorName||ee.name||"Unknown Vendor"}),a.jsx("span",{className:"contact-sub text-muted",style:{fontSize:"0.75rem"},children:ee.address})]})}),a.jsx("td",{children:a.jsx("div",{className:"contact-cell",children:a.jsx("span",{className:"domain-pill",children:ee.vendorType||ee.type||"N/A"})})}),a.jsx("td",{children:a.jsxs("div",{className:"contact-cell",children:[a.jsxs("div",{className:"contact-info",style:{gap:"0.35rem"},children:[a.jsx(pn,{size:12,className:"text-muted"}),a.jsx("span",{style:{fontSize:"0.8125rem"},children:ee.phone})]}),a.jsxs("div",{className:"contact-info",style:{gap:"0.35rem"},children:[a.jsx(_n,{size:12,className:"text-muted"}),a.jsx("span",{style:{fontSize:"0.8125rem"},children:ee.email})]})]})}),a.jsx("td",{children:a.jsxs("span",{className:`status-badge ${(ee.status||"active").replace(/\s+/g,"").toLowerCase()}`,children:[a.jsx("span",{className:"dot"}),ee.status||"Active"]})}),a.jsx("td",{className:"actions-cell",children:a.jsxs("div",{className:"action-hub",children:[a.jsx("button",{className:"icon-btn ghost",title:"View Profile",onClick:()=>Q(ee),children:a.jsx(st,{size:16})}),a.jsx("button",{className:"icon-btn ghost",title:"Edit Details",onClick:()=>me(ee),children:a.jsx(Er,{size:16})}),a.jsx("button",{className:"icon-btn ghost danger",title:"Terminate Partnership",onClick:()=>Le(ee.vendorId||ee.id),children:a.jsx(Qt,{size:16})})]})})]},ee.vendorId||he))})]})})]}),a.jsx("style",{children:`
        .vendors-page {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding-bottom: 2rem;
        }

        .animate-fade-in {
            animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .page-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header-title h1 {
            font-size: 2rem;
            font-weight: 700;
            color: #1e293b;
            letter-spacing: -0.02em;
            margin-bottom: 0.25rem;
        }

        .header-title p {
            color: #64748b;
            font-size: 0.9375rem;
        }

        .header-actions {
            display: flex;
            gap: 0.75rem;
        }

        .primary-btn {
            background: #2563eb;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 10px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.2s;
            border: none;
        }

        .primary-btn:hover {
            background: #1d4ed8;
            transform: translateY(-1px);
        }

        /* Clean Table Container */
        .main-table-container {
            background: white;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            overflow: hidden;
        }

        .table-controls {
            padding: 1.25rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #f1f5f9;
        }

        .search-box {
            position: relative;
            flex: 1;
            max-width: 400px;
        }

        .search-box svg {
            position: absolute;
            left: 12px;
            top: 50%;
            transform: translateY(-50%);
            color: #94a3b8;
        }

        .search-box input {
            width: 100%;
            padding: 0.625rem 1rem 0.625rem 2.5rem;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            font-size: 0.875rem;
            transition: all 0.2s;
        }

        .search-box input:focus {
            outline: none;
            border-color: #2563eb;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.08);
        }

        .filter-group {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .control-btn {
            background: white;
            border: 1px solid #e2e8f0;
            padding: 0.625rem 1rem;
            border-radius: 8px;
            font-size: 0.875rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #475569;
            cursor: pointer;
            position: relative;
            transition: all 0.2s;
        }

        .control-btn:hover {
            border-color: #2563eb;
            color: #2563eb;
            background: #f8faff;
        }

        .control-btn.active {
            border-color: #2563eb;
            color: #2563eb;
            background: #eff6ff;
        }

        .filter-indicator {
            width: 6px;
            height: 6px;
            background: #2563eb;
            border-radius: 50%;
            position: absolute;
            top: 8px;
            right: 8px;
        }

        .filter-popover-wrapper {
            position: relative;
        }

        .filter-popover {
            position: absolute;
            top: calc(100% + 12px);
            right: 0;
            width: 280px;
            z-index: 100;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            border: 1px solid #e2e8f0;
            background: white;
            border-radius: 12px;
            padding: 0 !important;
            animation: popIn 0.2s ease-out;
            overflow: hidden;
        }

        @keyframes popIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .popover-header {
            padding: 1rem 1.25rem;
            border-bottom: 1px solid #f1f5f9;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .popover-header h3 {
            font-size: 0.875rem;
            font-weight: 700;
            color: #1e293b;
            margin: 0;
        }

        .popover-body {
            padding: 1.25rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .filter-item {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .filter-item label {
            font-size: 0.75rem;
            font-weight: 700;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .filter-item select {
            padding: 0.5rem;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            font-size: 0.875rem;
            background: #f8fafc;
            outline: none;
        }

        .popover-footer {
            padding: 1rem 1.25rem;
            background: #f8fafc;
            border-top: 1px solid #f1f5f9;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .text-btn {
            background: none;
            border: none;
            color: #64748b;
            font-size: 0.875rem;
            font-weight: 600;
            cursor: pointer;
        }

        .text-btn:hover {
            color: #2563eb;
        }

        .apply-btn {
            background: #2563eb;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 6px;
            font-size: 0.875rem;
            font-weight: 600;
            cursor: pointer;
        }

        .active-filters {
            padding: 0.75rem 1.5rem;
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            align-items: center;
            border-bottom: 1px solid #f1f5f9;
            background: white;
        }

        .filter-badge {
            display: flex;
            align-items: center;
            gap: 0.35rem;
            background: #eff6ff;
            color: #2563eb;
            padding: 0.25rem 0.625rem;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
            border: 1px solid #dbeafe;
        }

        .badge-label {
            color: #60a5fa;
            text-transform: capitalize;
        }

        .filter-badge button {
            display: flex;
            align-items: center;
            justify-content: center;
            background: none;
            border: none;
            color: #2563eb;
            cursor: pointer;
            padding: 0;
            border-radius: 50%;
        }

        .clear-all-link {
            font-size: 0.75rem;
            font-weight: 600;
            color: #64748b;
            background: none;
            border: none;
            cursor: pointer;
            margin-left: 0.5rem;
        }

        .clear-all-link:hover {
            color: #2563eb;
            text-decoration: underline;
        }

        .icon-btn-sm {
            width: 24px;
            height: 24px;
            border-radius: 4px;
            border: none;
            background: transparent;
            color: #94a3b8;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .icon-btn-sm:hover {
            background: #f1f5f9;
            color: #475569;
        }

        /* Simplified Table Layout */
        .table-overflow {
            overflow-x: auto;
        }

        .premium-table {
            width: 100%;
            border-collapse: collapse;
        }

        th {
            text-align: left;
            padding: 1rem 1.5rem;
            font-size: 0.75rem;
            font-weight: 600;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            background: #f8fafc;
            border-bottom: 1px solid #e2e8f0;
        }

        td {
            padding: 1rem 1.5rem;
            vertical-align: middle;
            border-bottom: 1px solid #f1f5f9;
            transition: background 0.2s;
        }

        .table-row-hover:hover {
            background: #fcfdfe;
        }

        .vendor-profile-cell {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .vendor-avatar {
            width: 40px;
            height: 40px;
            background: #eff6ff;
            color: #2563eb;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.125rem;
            font-weight: 700;
        }

        .vendor-main {
            display: flex;
            flex-direction: column;
        }

        .vendor-name {
            font-weight: 600;
            color: #1e293b;
            font-size: 0.9375rem;
        }

        .vendor-id {
            font-size: 0.75rem;
            color: #64748b;
            font-family: inherit;
        }

        .domain-pill {
            display: inline-flex;
            padding: 4px 10px;
            background: #f1f5f9;
            color: #475569;
            border-radius: 6px;
            font-size: 0.75rem;
            font-weight: 600;
            margin-bottom: 4px;
        }

        .contact-cell {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }

        .contact-sub {
            font-size: 0.8125rem;
            color: #64748b;
        }



        .contract-info {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.8125rem;
            font-weight: 500;
            color: #334155;
        }

        .contract-info svg {
            color: #94a3b8;
        }

        /* Simplified Status Badges */
        .status-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 0.75rem;
            font-weight: 600;
        }

        .status-badge .dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
        }

        .status-badge.active { background: #dcfce7; color: #15803d; }
        .status-badge.active .dot { background: #22c55e; }

        .status-badge.onhold { background: #fffbeb; color: #92400e; }
        .status-badge.onhold .dot { background: #f59e0b; }

        .status-badge.blacklisted { background: #fef2f2; color: #b91c1c; }
        .status-badge.blacklisted .dot { background: #ef4444; }

        .status-badge.underreview { background: #f8fafc; color: #475569; }
        .status-badge.underreview .dot { background: #94a3b8; }

        .timestamp-group {
            display: flex;
            flex-direction: column;
        }

        .timestamp-group .date {
            font-size: 0.8125rem;
            font-weight: 600;
            color: #1e293b;
        }

        .timestamp-group .time {
            font-size: 0.75rem;
            color: #64748b;
            font-family: monospace;
        }

        .action-hub {
            display: flex;
            gap: 0.25rem;
            justify-content: flex-end;
        }

        .icon-btn {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            transition: all 0.2s;
            background: transparent;
            border: none;
            color: #64748b;
        }

        .icon-btn:hover {
            background: #f1f5f9;
            color: #1e293b;
        }

        .icon-btn.danger:hover {
            background: #fee2e2;
            color: #ef4444;
        }

        @media (max-width: 768px) {
            .page-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 1.25rem;
            }
            .header-actions {
                width: 100%;
            }
            .header-actions button {
                flex: 1;
            }
            .table-controls {
                flex-direction: column;
                gap: 1rem;
                padding: 1.25rem 1rem;
            }
            .search-box {
                max-width: none;
            }
        }
      `})]})},dy=({isOpen:o,onClose:c,onAdd:d})=>{const[s,u]=j.useState({assetName:"",assetTag:"",receiverName:"",exchangeType:"Issue",newAssetId:"",remarks:"",photos:[],vendor:null,quantity:1,bulkAssets:[{name:"",tag:"",assetType:"",companyName:"",generation:"",ram:"",hardDisk:""}],companyName:"",generation:"",ram:"",hardDisk:"",procurementType:"Purchasing",purchaseDate:"",poNumber:"",invoiceNumber:"",purchaseCost:"",warrantyPeriod:"",vendorContact:"",deliveryDate:"",assetType:"",includeCharger:!1,chargerQuantity:0,includeMouse:!1,mouseQuantity:0,customFields:{}}),[f,g]=j.useState([]),[y,x]=j.useState("create"),[p,b]=j.useState([]),[w,B]=j.useState([]),[F,V]=j.useState(""),[T,k]=j.useState(null),[M,P]=j.useState(!1),[te,le]=j.useState(!1),N=j.useRef(null),W=j.useRef(null),[Q,me]=j.useState([]),[ye,Le]=j.useState(null),[re,Ce]=j.useState([]),[Ke,ee]=j.useState([]),[he,L]=j.useState(null);if(j.useEffect(()=>{o&&(x("create"),g([]),b([]),k(null),V(""),le(!1),me([]),Le(null),L(null),(async()=>{try{const v=await xe.getVendors();Ce(Array.isArray(v)?v:v.data||[])}catch(v){console.error("Failed to fetch vendors:",v)}})(),(async()=>{try{const v=await xe.getAssetTypes();ee(Array.isArray(v)?v:v.data||[])}catch(v){console.error("Failed to fetch asset types:",v)}})())},[o]),j.useEffect(()=>{y==="assign"&&w.length===0&&(async()=>{try{const z=await xe.getEmployees();B(Array.isArray(z)?z:z.data||[])}catch(z){console.error("Failed to fetch employees",z)}})()},[y]),!o)return null;const ae=K=>{const{name:z,value:v}=K.target;u(H=>({...H,[z]:v}))},de=K=>{const z=K.target.value,v=re.find(H=>H.vendorId===z);u(H=>({...H,vendor:v||null}))},Y=K=>{const z=K.target.value,v=Ke.find(ne=>(ne.id||ne.typeId)===z);L(v||null);const H={};v?.fields&&v.fields.forEach(ne=>{H[ne.name]=""}),u(ne=>({...ne,assetType:z,customFields:H}))},oe=(K,z,v)=>{u(H=>{const ne=[...H.bulkAssets];return ne[K]={...ne[K],[z]:v},{...H,bulkAssets:ne}})},C=K=>{const z=parseInt(K.target.value)||1;u(v=>{const H=[...v.bulkAssets];let ne;if(z>H.length){const pe=Array(z-H.length).fill(null).map((De,Ze)=>({name:"",tag:"",companyName:"",generation:"",ram:"",hardDisk:""}));ne=[...H,...pe]}else ne=H.slice(0,z);return{...v,quantity:z,bulkAssets:ne}})},Z=async()=>{if(!T||p.length===0)return f;P(!0);try{const K=p.map(async H=>{const ne=f.find(De=>De.id===H),pe={...ne,receiverName:T.fullName||T.name,assignedDate:new Date().toISOString().split("T")[0],assignedBy:"Admin",exchangeType:"Issue"};return{...ne,...pe}}),z=await Promise.all(K),v=f.map(H=>z.find(pe=>pe.id===H.id)||H);return g(v),v}catch(K){throw console.error("Assignment failed:",K),K}finally{P(!1)}},ie=K=>{const z=Array.from(K.target.files);if(Q.length+z.length>4){alert("You can only add up to 4 photos.");return}me(H=>[...H,...z]);const v=z.map(H=>URL.createObjectURL(H));u(H=>({...H,photos:[...H.photos,...v]}))},se=K=>{u(z=>({...z,photos:z.photos.filter((v,H)=>H!==K)})),me(z=>z.filter((v,H)=>H!==K))},O=K=>{const z=K.target.files[0];z&&Le(z)},$=()=>{Le(null),W.current&&(W.current.value="")},ce=async K=>{K&&K.preventDefault(),le(!0);try{const z={...s,vendorId:s.vendor?.vendorId||"",photoFiles:Q,invoiceFile:ye};if(s.quantity===1){const v=await xe.createAsset(z),H=v.data||v,ne={...H,...s,id:H.id||`TEMP-${Date.now()}`};g([ne]),b([ne.id])}else{d(z),Ae(),c();return}x("prompt")}catch(z){console.error("Error adding asset:",z),alert("Failed to add asset: "+z.message)}finally{le(!1)}},Ae=()=>{u({assetName:"",assetTag:"",receiverName:"",exchangeType:"Issue",newAssetId:"",remarks:"",photos:[],vendor:null,quantity:1,bulkAssets:[{name:"",tag:"",companyName:"",generation:"",ram:"",hardDisk:""}],companyName:"",generation:"",ram:"",hardDisk:"",procurementType:"Purchasing",purchaseDate:"",poNumber:"",invoiceNumber:"",purchaseCost:"",warrantyPeriod:"",vendorContact:"",deliveryDate:"",assetType:"",includeCharger:!1,chargerQuantity:0,includeMouse:!1,mouseQuantity:0,customFields:{}}),me([]),Le(null),L(null)};return a.jsxs("div",{className:"modal-overlay",onClick:c,children:[a.jsxs("div",{className:"modal-container scrollable animate-pop",onClick:K=>K.stopPropagation(),children:[y==="create"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"modal-header",children:[a.jsxs("div",{className:"header-info",children:[a.jsx("div",{className:"header-icon",children:a.jsx(Mt,{size:20})}),a.jsxs("div",{children:[a.jsx("h3",{children:"Onboard New Asset"}),a.jsx("p",{children:"Register hardware or software assets to the inventory."})]})]}),a.jsx("button",{className:"close-btn",onClick:c,children:a.jsx(Ve,{size:20})})]}),a.jsxs("form",{onSubmit:ce,className:"modal-form",children:[a.jsxs("div",{className:"form-sections",children:[a.jsxs("div",{className:"form-section",children:[a.jsx("h4",{className:"section-subtitle",children:"Asset Information"}),a.jsxs("div",{className:"form-grid-2",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(Nr,{size:14})," Procurement Type"]}),a.jsxs("select",{name:"procurementType",value:s.procurementType,onChange:ae,className:"select-input",children:[a.jsx("option",{value:"Purchasing",children:"Purchasing"}),a.jsx("option",{value:"Vendor",children:"Vendor (Lease)"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(Mt,{size:14})," Asset Type"]}),a.jsxs("select",{name:"assetType",value:s.assetType||"",onChange:Y,className:"select-input",required:!0,children:[a.jsx("option",{value:"",children:"-- Select --"}),Ke.map(K=>a.jsx("option",{value:K.id||K.typeId,children:K.typeName||K.name},K.id||K.typeId))]})]}),he&&(he.typeName==="Laptop"||he.name==="Laptop")&&a.jsxs("div",{className:"accessories-section",style:{gridColumn:"1 / -1",background:"#f8fafc",padding:"15px",borderRadius:"8px",border:"1px solid #e2e8f0",marginTop:"10px"},children:[a.jsxs("h5",{style:{fontSize:"13px",fontWeight:"600",color:"#64748b",marginBottom:"12px",display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(Mt,{size:14})," Included Accessories"]}),a.jsxs("div",{className:"accessories-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"20px"},children:[a.jsxs("div",{className:"accessory-item",style:{display:"flex",flexDirection:"column",gap:"8px"},children:[a.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",fontSize:"13px",fontWeight:"500"},children:[a.jsx("input",{type:"checkbox",checked:s.includeCharger,onChange:K=>{const z=K.target.checked;u(v=>({...v,includeCharger:z,chargerQuantity:z?v.quantity:0}))}}),"Add Chargers"]}),s.includeCharger&&a.jsxs("div",{className:"qty-input",style:{display:"flex",alignItems:"center",gap:"8px",marginLeft:"24px"},children:[a.jsx("span",{style:{fontSize:"12px",color:"#94a3b8"},children:"Qty:"}),a.jsx("input",{type:"number",value:s.chargerQuantity,onChange:K=>u(z=>({...z,chargerQuantity:parseInt(K.target.value)||0})),style:{width:"60px",padding:"4px 8px",fontSize:"12px"},min:"0"})]})]}),a.jsxs("div",{className:"accessory-item",style:{display:"flex",flexDirection:"column",gap:"8px"},children:[a.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",fontSize:"13px",fontWeight:"500"},children:[a.jsx("input",{type:"checkbox",checked:s.includeMouse,onChange:K=>{const z=K.target.checked;u(v=>({...v,includeMouse:z,mouseQuantity:z?v.quantity:0}))}}),"Add Mice"]}),s.includeMouse&&a.jsxs("div",{className:"qty-input",style:{display:"flex",alignItems:"center",gap:"8px",marginLeft:"24px"},children:[a.jsx("span",{style:{fontSize:"12px",color:"#94a3b8"},children:"Qty:"}),a.jsx("input",{type:"number",value:s.mouseQuantity,onChange:K=>u(z=>({...z,mouseQuantity:parseInt(K.target.value)||0})),style:{width:"60px",padding:"4px 8px",fontSize:"12px"},min:"0"})]})]})]})]})]}),s.quantity===1&&he&&["Laptop","Desktop","Server","Workstation","IT Hardware"].includes(he.typeName||he.name)&&a.jsxs("div",{className:"technical-specs-section",children:[a.jsx("h4",{className:"section-subtitle-inner",children:"Hardware Specifications"}),a.jsxs("div",{className:"specs-grid-compact",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Company"}),a.jsxs("select",{name:"companyName",value:s.companyName,onChange:ae,className:"select-input",children:[a.jsx("option",{value:"",children:"-- Select --"}),a.jsx("option",{value:"Dell",children:"Dell"}),a.jsx("option",{value:"HP",children:"HP"}),a.jsx("option",{value:"Lenovo",children:"Lenovo"}),a.jsx("option",{value:"Apple",children:"Apple"}),a.jsx("option",{value:"Asus",children:"Asus"}),a.jsx("option",{value:"Acer",children:"Acer"}),a.jsx("option",{value:"MSI",children:"MSI"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Gen"}),a.jsxs("select",{name:"generation",value:s.generation,onChange:ae,className:"select-input",children:[a.jsx("option",{value:"",children:"-- Select --"}),a.jsx("option",{value:"i3 10th Gen",children:"i3 10th Gen"}),a.jsx("option",{value:"i3 11th Gen",children:"i3 11th Gen"}),a.jsx("option",{value:"i3 12th Gen",children:"i3 12th Gen"}),a.jsx("option",{value:"i5 10th Gen",children:"i5 10th Gen"}),a.jsx("option",{value:"i5 11th Gen",children:"i5 11th Gen"}),a.jsx("option",{value:"i5 12th Gen",children:"i5 12th Gen"}),a.jsx("option",{value:"i5 13th Gen",children:"i5 13th Gen"}),a.jsx("option",{value:"i7 10th Gen",children:"i7 10th Gen"}),a.jsx("option",{value:"i7 11th Gen",children:"i7 11th Gen"}),a.jsx("option",{value:"i7 12th Gen",children:"i7 12th Gen"}),a.jsx("option",{value:"i7 13th Gen",children:"i7 13th Gen"}),a.jsx("option",{value:"i9 11th Gen",children:"i9 11th Gen"}),a.jsx("option",{value:"i9 12th Gen",children:"i9 12th Gen"}),a.jsx("option",{value:"i9 13th Gen",children:"i9 13th Gen"}),a.jsx("option",{value:"Ryzen 5 5000",children:"Ryzen 5 5000"}),a.jsx("option",{value:"Ryzen 7 5000",children:"Ryzen 7 5000"}),a.jsx("option",{value:"Ryzen 9 5000",children:"Ryzen 9 5000"}),a.jsx("option",{value:"M1",children:"M1"}),a.jsx("option",{value:"M2",children:"M2"}),a.jsx("option",{value:"M3",children:"M3"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"RAM"}),a.jsxs("select",{name:"ram",value:s.ram,onChange:ae,className:"select-input",children:[a.jsx("option",{value:"",children:"-- Select --"}),a.jsx("option",{value:"4GB",children:"4GB"}),a.jsx("option",{value:"8GB",children:"8GB"}),a.jsx("option",{value:"16GB",children:"16GB"}),a.jsx("option",{value:"32GB",children:"32GB"}),a.jsx("option",{value:"64GB",children:"64GB"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Disk"}),a.jsxs("select",{name:"hardDisk",value:s.hardDisk,onChange:ae,className:"select-input",children:[a.jsx("option",{value:"",children:"-- Select --"}),a.jsx("option",{value:"256GB SSD",children:"256GB SSD"}),a.jsx("option",{value:"512GB SSD",children:"512GB SSD"}),a.jsx("option",{value:"1TB SSD",children:"1TB SSD"}),a.jsx("option",{value:"2TB SSD",children:"2TB SSD"}),a.jsx("option",{value:"512GB HDD",children:"512GB HDD"}),a.jsx("option",{value:"1TB HDD",children:"1TB HDD"}),a.jsx("option",{value:"2TB HDD",children:"2TB HDD"})]})]})]})]}),a.jsxs("div",{className:"form-grid-2",children:[s.procurementType==="Vendor"&&a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(da,{size:14})," Vendor"]}),a.jsxs("select",{name:"vendor",value:s.vendor?.vendorId||"",onChange:de,className:"select-input",required:!0,children:[a.jsx("option",{value:"",children:"-- Select --"}),re.map(K=>a.jsx("option",{value:K.vendorId,children:K.vendorName},K.vendorId))]})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(Mt,{size:14})," Quantity"]}),a.jsx("input",{type:"number",name:"quantity",value:s.quantity,onChange:C,min:"1",max:"50",required:!0})]})]}),s.quantity===1&&a.jsxs("div",{className:"form-grid-2",style:{marginTop:"10px"},children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(Mt,{size:14})," Asset Name"]}),a.jsx("input",{type:"text",name:"assetName",value:s.assetName,onChange:ae,required:!0,placeholder:"MacBook Pro"})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(wt,{size:14})," Tag"]}),a.jsx("input",{type:"text",name:"assetTag",value:s.assetTag,onChange:ae,required:!0,placeholder:"IT-2024"})]})]}),s.quantity>1&&a.jsxs("div",{className:"bulk-entry-section",children:[a.jsxs("div",{className:"section-subtitle",children:[a.jsx(Mt,{size:14})," Bulk Asset Details"]}),a.jsx("div",{className:"bulk-assets-grid",children:s.bulkAssets.map((K,z)=>a.jsxs("div",{className:"bulk-asset-card",children:[a.jsx("div",{className:"bulk-card-header",children:a.jsxs("span",{className:"asset-index",children:["#",z+1]})}),a.jsx("div",{className:"bulk-input-row",children:a.jsxs("div",{className:"bulk-input-group",children:[a.jsx("label",{children:"Tag"}),a.jsx("input",{type:"text",value:K.tag,onChange:v=>oe(z,"tag",v.target.value),placeholder:"Asset Tag",required:!0})]})}),s.assetType&&(()=>{const v=Ke.find(ne=>(ne.id||ne.typeId)===s.assetType),H=v?.typeName||v?.name||"";return["Laptop","Desktop","Server","Workstation","IT Hardware"].includes(H)})()&&a.jsxs("div",{className:"bulk-specs-section",children:[a.jsxs("div",{className:"bulk-input-row",children:[a.jsxs("div",{className:"bulk-input-group",children:[a.jsx("label",{children:"Company"}),a.jsxs("select",{value:K.companyName||"",onChange:v=>oe(z,"companyName",v.target.value),className:"select-input",children:[a.jsx("option",{value:"",children:"-- Select --"}),a.jsx("option",{value:"Dell",children:"Dell"}),a.jsx("option",{value:"HP",children:"HP"}),a.jsx("option",{value:"Lenovo",children:"Lenovo"}),a.jsx("option",{value:"Apple",children:"Apple"}),a.jsx("option",{value:"Asus",children:"Asus"}),a.jsx("option",{value:"Acer",children:"Acer"}),a.jsx("option",{value:"MSI",children:"MSI"})]})]}),a.jsxs("div",{className:"bulk-input-group",children:[a.jsx("label",{children:"Gen"}),a.jsxs("select",{value:K.generation||"",onChange:v=>oe(z,"generation",v.target.value),className:"select-input",children:[a.jsx("option",{value:"",children:"-- Select --"}),a.jsx("option",{value:"i3 10th Gen",children:"i3 10th Gen"}),a.jsx("option",{value:"i3 11th Gen",children:"i3 11th Gen"}),a.jsx("option",{value:"i3 12th Gen",children:"i3 12th Gen"}),a.jsx("option",{value:"i5 10th Gen",children:"i5 10th Gen"}),a.jsx("option",{value:"i5 11th Gen",children:"i5 11th Gen"}),a.jsx("option",{value:"i5 12th Gen",children:"i5 12th Gen"}),a.jsx("option",{value:"i5 13th Gen",children:"i5 13th Gen"}),a.jsx("option",{value:"i7 10th Gen",children:"i7 10th Gen"}),a.jsx("option",{value:"i7 11th Gen",children:"i7 11th Gen"}),a.jsx("option",{value:"i7 12th Gen",children:"i7 12th Gen"}),a.jsx("option",{value:"i7 13th Gen",children:"i7 13th Gen"}),a.jsx("option",{value:"i9 11th Gen",children:"i9 11th Gen"}),a.jsx("option",{value:"i9 12th Gen",children:"i9 12th Gen"}),a.jsx("option",{value:"i9 13th Gen",children:"i9 13th Gen"}),a.jsx("option",{value:"Ryzen 5 5000",children:"Ryzen 5 5000"}),a.jsx("option",{value:"Ryzen 7 5000",children:"Ryzen 7 5000"}),a.jsx("option",{value:"Ryzen 9 5000",children:"Ryzen 9 5000"}),a.jsx("option",{value:"M1",children:"M1"}),a.jsx("option",{value:"M2",children:"M2"}),a.jsx("option",{value:"M3",children:"M3"})]})]})]}),a.jsxs("div",{className:"bulk-input-row",children:[a.jsxs("div",{className:"bulk-input-group",children:[a.jsx("label",{children:"RAM"}),a.jsxs("select",{value:K.ram||"",onChange:v=>oe(z,"ram",v.target.value),className:"select-input",children:[a.jsx("option",{value:"",children:"-- Select --"}),a.jsx("option",{value:"4GB",children:"4GB"}),a.jsx("option",{value:"8GB",children:"8GB"}),a.jsx("option",{value:"16GB",children:"16GB"}),a.jsx("option",{value:"32GB",children:"32GB"}),a.jsx("option",{value:"64GB",children:"64GB"})]})]}),a.jsxs("div",{className:"bulk-input-group",children:[a.jsx("label",{children:"Disk"}),a.jsxs("select",{value:K.hardDisk||"",onChange:v=>oe(z,"hardDisk",v.target.value),className:"select-input",children:[a.jsx("option",{value:"",children:"-- Select --"}),a.jsx("option",{value:"256GB SSD",children:"256GB SSD"}),a.jsx("option",{value:"512GB SSD",children:"512GB SSD"}),a.jsx("option",{value:"1TB SSD",children:"1TB SSD"}),a.jsx("option",{value:"2TB SSD",children:"2TB SSD"}),a.jsx("option",{value:"512GB HDD",children:"512GB HDD"}),a.jsx("option",{value:"1TB HDD",children:"1TB HDD"}),a.jsx("option",{value:"2TB HDD",children:"2TB HDD"})]})]})]})]})]},z))})]}),s.procurementType==="Vendor"&&a.jsxs("div",{className:"form-grid-2",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(Ut,{size:14})," Receiver"]}),a.jsx("input",{type:"text",name:"receiverName",value:s.receiverName,onChange:ae,required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(Nr,{size:14})," Exchange"]}),a.jsxs("select",{name:"exchangeType",value:s.exchangeType,onChange:ae,className:"select-input",children:[a.jsx("option",{value:"Issue",children:"Issue"}),a.jsx("option",{value:"Return",children:"Return"}),a.jsx("option",{value:"Replace",children:"Replace"})]})]})]})]}),a.jsxs("div",{className:"form-section",children:[a.jsxs("div",{className:"procurement-details-section",children:[a.jsx("h4",{className:"section-subtitle",children:s.procurementType==="Purchasing"?"Purchasing Details":"Delivery Details"}),a.jsx("div",{className:"specs-grid-compact",children:s.procurementType==="Purchasing"?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Date"}),a.jsx("input",{type:"date",name:"purchaseDate",value:s.purchaseDate,onChange:ae})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Invoice #"}),a.jsx("input",{type:"text",name:"invoiceNumber",value:s.invoiceNumber,onChange:ae,placeholder:"INV-001"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Cost"}),a.jsx("input",{type:"number",name:"purchaseCost",value:s.purchaseCost,onChange:ae,placeholder:"50000"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Warranty"}),a.jsx("input",{type:"text",name:"warrantyPeriod",value:s.warrantyPeriod,onChange:ae,placeholder:"12m"})]})]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Contact"}),a.jsx("input",{type:"text",name:"vendorContact",value:s.vendorContact,onChange:ae,placeholder:"John Sales"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Delivery"}),a.jsx("input",{type:"date",name:"deliveryDate",value:s.deliveryDate,onChange:ae})]})]})})]}),a.jsx("div",{className:"attachments-section",children:a.jsxs("div",{className:"form-grid-2-equal",children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(Nl,{size:14})," Invoice"]}),a.jsxs("div",{className:"invoice-upload-box-compact",children:[ye?a.jsxs("div",{className:"invoice-item-compact",children:[a.jsx("span",{className:"file-name-compact",children:ye.name}),a.jsx("button",{type:"button",className:"remove-invoice-btn",onClick:$,children:a.jsx(Ve,{size:12})})]}):a.jsxs("div",{className:"upload-placeholder-compact",onClick:()=>W.current.click(),children:[a.jsx(lb,{size:16}),a.jsx("span",{children:"Click to upload"})]}),a.jsx("input",{type:"file",ref:W,onChange:O,style:{display:"none"},accept:".pdf,.jpg,.jpeg,.png"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(as,{size:14})," Photos"]}),a.jsxs("div",{className:"photo-upload-grid-compact",children:[s.photos.map((K,z)=>a.jsxs("div",{className:"photo-preview-item-compact",children:[a.jsx("img",{src:at(K),alt:""}),a.jsx("button",{type:"button",className:"photo-remove",onClick:()=>se(z),children:a.jsx(Ve,{size:10})})]},z)),s.photos.length<4&&a.jsx("button",{type:"button",className:"photo-upload-btn-compact",onClick:()=>N.current.click(),children:a.jsx(Ap,{size:14})})]}),a.jsx("input",{type:"file",ref:N,onChange:ie,multiple:!0,accept:"image/*",style:{display:"none"}})]})]})}),a.jsxs("div",{className:"form-group",style:{marginTop:"0.5rem"},children:[a.jsxs("label",{children:[a.jsx(Gc,{size:14})," Remarks"]}),a.jsx("textarea",{name:"remarks",value:s.remarks,onChange:ae,placeholder:"Notes...",rows:"2"})]})]})]}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{type:"button",className:"secondary-btn",onClick:c,children:"Cancel"}),a.jsx("button",{type:"submit",className:"submit-btn primary-glow",disabled:te,children:te?"Adding...":"Add Asset"})]})]})]}),y==="prompt"&&a.jsxs("div",{className:"prompt-content animate-fade-in",style:{padding:"3rem 2rem",textAlign:"center"},children:[a.jsx("div",{className:"success-icon-large",style:{width:"80px",height:"80px",background:"#ecfdf5",color:"#10b981",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 1.5rem",fontSize:"40px"},children:a.jsx(Sr,{size:40})}),a.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:"800",color:"#1e293b",marginBottom:"0.5rem"},children:"Asset Added Successfully!"}),a.jsx("p",{style:{color:"#64748b",marginBottom:"2.5rem",fontSize:"1rem"},children:"The asset has been registered to the inventory. Would you like to assign it to an employee now?"}),a.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center"},children:[a.jsx("button",{className:"secondary-btn",onClick:()=>{d({assets:f}),c()},style:{padding:"0.75rem 2.5rem"},children:"Finish & Close"}),a.jsxs("button",{className:"submit-btn",onClick:()=>x("assign"),style:{padding:"0.75rem 2.5rem"},children:["Assign to Employee ",a.jsx(Nr,{size:18})]})]})]}),y==="assign"&&a.jsxs("div",{className:"assign-view animate-fade-in",children:[a.jsxs("div",{className:"modal-header",children:[a.jsxs("div",{className:"header-info",children:[a.jsx("div",{className:"header-icon",style:{background:"#fef3c7",color:"#d97706"},children:a.jsx(Ut,{size:20})}),a.jsxs("div",{children:[a.jsx("h3",{children:"Assign Asset"}),a.jsx("p",{children:"Select an employee to link with the newly added asset."})]})]}),a.jsx("button",{className:"close-btn",onClick:()=>x("prompt"),children:a.jsx(Ve,{size:20})})]}),a.jsxs("div",{className:"modal-form",style:{background:"white"},children:[a.jsxs("div",{className:"search-box",style:{marginBottom:"1.5rem"},children:[a.jsx("label",{style:{display:"block",fontSize:"0.75rem",fontWeight:"700",color:"#94a3b8",textTransform:"uppercase",marginBottom:"0.5rem"},children:"Search Employee"}),a.jsxs("div",{style:{position:"relative"},children:[a.jsx("input",{type:"text",placeholder:"Search by Employee ID or Name...",value:F,onChange:K=>V(K.target.value),className:"form-input",style:{paddingLeft:"2.5rem"}}),a.jsx(Ut,{size:18,style:{position:"absolute",left:"0.75rem",top:"50%",transform:"translateY(-50%)",color:"#94a3b8"}})]})]}),a.jsx("div",{className:"employee-list",style:{maxHeight:"350px",overflowY:"auto",border:"1px solid #e2e8f0",borderRadius:"12px"},children:w.filter(K=>(K.fullName||K.name||"").toLowerCase().includes(F.toLowerCase())).map(K=>a.jsxs("div",{className:`emp-item ${T?.id===K.id?"selected":""}`,onClick:()=>k(K),style:{padding:"1rem",borderBottom:"1px solid #f1f5f9",cursor:"pointer",display:"flex",alignItems:"center",gap:"1rem",backgroundColor:T?.id===K.id?"#eff6ff":"transparent",transition:"all 0.2s"},children:[a.jsx("div",{style:{width:"40px",height:"40px",background:"#f8fafc",borderRadius:"50%",display:"flex",alignItems:"center",justifycontent:"center",color:"#64748b"},children:a.jsx(Ut,{size:20})}),a.jsxs("div",{style:{flex:1},children:[a.jsx("div",{style:{fontWeight:"700",color:"#1e293b"},children:K.fullName||K.name}),a.jsxs("div",{style:{fontSize:"0.75rem",color:"#94a3b8"},children:[K.dept||"Department Name"," • ",K.role||"Role"]})]}),T?.id===K.id&&a.jsx(Sr,{size:20,color:"#2563eb"})]},K.id))})]}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{type:"button",className:"secondary-btn",onClick:()=>x("prompt"),children:"Back"}),a.jsx("button",{className:"submit-btn",disabled:!T,onClick:async()=>{P(!0);try{const K=await Z();d({assets:K}),c()}catch{alert("Assignment failed.")}finally{P(!1)}},children:M?"Assigning...":"Confirm Assignment"})]})]})]}),a.jsx("style",{children:`
                .procurement-toggle-container {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 2rem;
                    background: #f1f5f9;
                    padding: 0.5rem;
                    border-radius: 12px;
                }

                .toggle-btn {
                    flex: 1;
                    padding: 0.75rem;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    cursor: pointer;
                    transition: all 0.2s;
                    background: transparent;
                    color: #64748b;
                }

                .toggle-btn.active {
                    background: white;
                    color: #2563eb;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                }

                .procurement-details-section {
                    background: #f8fafc;
                    padding: 1rem;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                    margin-bottom: 1rem;
                }

                .modal-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(15, 23, 42, 0.4);
                    backdrop-filter: blur(4px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2000;
                    padding: 1rem;
                }

                .modal-container {
                    background: white;
                    width: 100%;
                    max-width: 1000px;
                    border-radius: 20px;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2);
                    display: flex;
                    flex-direction: column;
                    max-height: 90vh;
                    overflow-x: hidden;
                }

                .modal-container.scrollable {
                    overflow-y: auto;
                }

                .animate-pop {
                    animation: pop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                @keyframes pop {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }

                .modal-header {
                    padding: 1rem 1.75rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #f1f5f9;
                    position: sticky;
                    top: 0;
                    background: white;
                    z-index: 10;
                }

                .header-info {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .header-icon {
                    width: 36px;
                    height: 36px;
                    background: #eff6ff;
                    color: #2563eb;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .header-info h3 {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: #1e293b;
                    margin-bottom: 0px;
                }

                .header-info p {
                    font-size: 0.875rem;
                    color: #64748b;
                }
            `}),a.jsx("style",{children:`
                :root {
                    --primary: #2563eb;
                    --primary-soft: #eff6ff;
                    --primary-glow: rgba(37, 99, 235, 0.15);
                    --slate-50: #f8fafc;
                    --slate-100: #f1f5f9;
                    --slate-200: #e2e8f0;
                    --slate-300: #cbd5e1;
                    --slate-400: #94a3b8;
                    --slate-600: #475569;
                    --slate-700: #334155;
                    --slate-800: #1e293b;
                    --success: #10b981;
                    --success-soft: #ecfdf5;
                }

                .modal-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(15, 23, 42, 0.3);
                    backdrop-filter: blur(8px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2000;
                    padding: 1rem;
                    animation: overlay-fade 0.3s ease-out;
                }

                @keyframes overlay-fade {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .modal-container {
                    background: white;
                    width: 100%;
                    max-width: 950px;
                    border-radius: 20px;
                    box-shadow: 0 25px 70px -12px rgba(15, 23, 42, 0.15);
                    display: flex;
                    flex-direction: column;
                    max-height: 90vh;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.8);
                }

                .modal-header {
                    padding: 1rem 1.75rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid var(--slate-100);
                    position: sticky;
                    top: 0;
                    z-index: 10;
                }

                .header-info {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .header-icon {
                    width: 40px;
                    height: 40px;
                    background: linear-gradient(135deg, var(--primary-soft) 0%, #dbeafe 100%);
                    color: var(--primary);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: inset 0 -2px 4px rgba(37, 99, 235, 0.1);
                }

                .header-info h3 {
                    font-size: 1.125rem;
                    font-weight: 800;
                    color: var(--slate-800);
                    letter-spacing: -0.01em;
                    margin: 0;
                }

                .header-info p {
                    font-size: 0.8125rem;
                    color: var(--slate-400);
                    margin: 0;
                }

                .modal-form {
                    padding: 1.25rem 1.75rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                    overflow-y: auto;
                    background: #fafbfc;
                }

                .form-sections {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.25rem;
                }

                .form-section {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    background: white;
                    padding: 1.25rem;
                    border-radius: 16px;
                    border: 1px solid var(--slate-100);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
                }

                .section-subtitle {
                    font-size: 0.875rem;
                    font-weight: 800;
                    color: var(--slate-800);
                    margin-bottom: 0px;
                    display: flex;
                    align-items: center;
                    gap: 0.625rem;
                    padding-bottom: 0.625rem;
                    border-bottom: 1px solid var(--slate-100);
                }

                .section-subtitle::before {
                    content: '';
                    width: 3px;
                    height: 16px;
                    background: var(--primary);
                    border-radius: 2px;
                }

                .form-grid-2 {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.375rem;
                }

                .form-group label {
                    font-size: 0.7rem;
                    font-weight: 700;
                    color: var(--slate-400);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    display: flex;
                    align-items: center;
                    gap: 0.375rem;
                }

                .form-group input, 
                .form-group select, 
                .form-group textarea {
                    padding: 0.625rem 0.875rem;
                    border: 1.5px solid var(--slate-200);
                    border-radius: 10px;
                    font-size: 0.875rem;
                    color: var(--slate-800);
                    background: var(--slate-50);
                    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                    width: 100%;
                }

                .form-group input:hover,
                .form-group select:hover {
                    border-color: var(--slate-300);
                    background: white;
                }

                .form-group input:focus, 
                .form-group select:focus {
                    outline: none;
                    border-color: var(--primary);
                    background: white;
                    box-shadow: 0 0 0 4px var(--primary-glow);
                }

                .technical-specs-section {
                    background: #f8fafc;
                    padding: 1rem;
                    border-radius: 12px;
                    border: 1px solid var(--slate-100);
                    margin-top: 0.25rem;
                }

                .section-subtitle-inner {
                    font-size: 0.7rem;
                    font-weight: 800;
                    color: var(--slate-600);
                    margin-bottom: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.075em;
                }

                .specs-grid-compact {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                }

                .procurement-details-section {
                    background: linear-gradient(135deg, #f0f7ff 0%, #e0efff 100%);
                    padding: 1rem;
                    border-radius: 12px;
                    border: 1px solid #d0e5ff;
                }

                .attachments-section {
                    margin-top: 0.25rem;
                }

                .form-grid-2-equal {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.25rem;
                }

                /* Compact Invoice Upload */
                .invoice-upload-box-compact {
                    margin-top: 0.25rem;
                }

                .invoice-item-compact {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: #f0fdf4;
                    padding: 0.5rem 0.875rem;
                    border-radius: 10px;
                    border: 1px solid #bbf7d0;
                    animation: slide-up 0.3s ease-out;
                }

                @keyframes slide-up {
                    from {transform: translateY(5px); opacity: 0; }
                    to {transform: translateY(0); opacity: 1; }
                }

                .file-name-compact {
                    font-size: 0.8125rem;
                    font-weight: 700;
                    color: #15803d;
                    max-width: 140px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .upload-placeholder-compact {
                    border: 2px dashed var(--slate-200);
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.625rem;
                    border-radius: 10px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: var(--slate-400);
                    cursor: pointer;
                    background: var(--slate-50);
                    transition: all 0.2s;
                }

                .upload-placeholder-compact:hover {
                    border-color: var(--primary);
                    color: var(--primary);
                    background: var(--primary-soft);
                    transform: translateY(-1px);
                }

                /* Photo Grid Compact */
                .photo-upload-grid-compact {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 0.5rem;
                    margin-top: 0.25rem;
                }

                .photo-preview-item-compact {
                    aspect-ratio: 1;
                    position: relative;
                    border-radius: 6px;
                    overflow: hidden;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }

                .photo-preview-item-compact img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .photo-remove {
                    position: absolute;
                    top: 2px;
                    right: 2px;
                    background: rgba(15, 23, 42, 0.7);
                    backdrop-filter: blur(4px);
                    color: white;
                    border: none;
                    width: 16px;
                    height: 16px;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .photo-remove:hover {
                    background: #f43f5e;
                    transform: scale(1.1);
                }

                .photo-upload-btn-compact {
                    aspect-ratio: 1;
                    border: 2px dashed var(--slate-200);
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--slate-400);
                    cursor: pointer;
                    background: var(--slate-50);
                    transition: all 0.2s;
                }

                .photo-upload-btn-compact:hover {
                    border-color: var(--primary);
                    color: var(--primary);
                    background: var(--primary-soft);
                }

                .modal-footer {
                    padding: 1.25rem 1.75rem;
                    display: flex;
                    justify-content: flex-end;
                    gap: 1rem;
                    background: white;
                    border-top: 1px solid var(--slate-100);
                }

                .secondary-btn {
                    padding: 0.625rem 1.75rem;
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: var(--slate-600);
                    background: white;
                    border: 1.5px solid var(--slate-200);
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all 0.2s ease-out;
                }

                .secondary-btn:hover {
                    background: var(--slate-50);
                    color: var(--slate-800);
                    border-color: var(--slate-300);
                    transform: translateY(-1px);
                }

                .submit-btn {
                    padding: 0.625rem 2rem;
                    font-size: 0.875rem;
                    font-weight: 800;
                    color: white;
                    background: linear-gradient(135deg, var(--primary) 0%, #1d4ed8 100%);
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                    box-shadow: 0 10px 20px -5px var(--primary-glow);
                    display: flex;
                    align-items: center;
                    gap: 0.625rem;
                }

                .submit-btn:hover {
                    transform: translateY(-3px) scale(1.02);
                    box-shadow: 0 15px 30px -5px var(--primary-glow);
                    filter: brightness(1.05);
                }

                .submit-btn:active {
                    transform: translateY(-1px) scale(0.98);
                }

                .close-btn {
                    background: var(--slate-50);
                    border: none;
                    width: 32px;
                    height: 32px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--slate-400);
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .close-btn:hover {
                    background: #fee2e2;
                    color: #ef4444;
                    transform: rotate(90deg);
                }

                /* Scrollbar Refinement */
                .modal-form::-webkit-scrollbar {
                    width: 5px;
                }

                .modal-form::-webkit-scrollbar-track {
                    background: transparent;
                }

                .modal-form::-webkit-scrollbar-thumb {
                    background: var(--slate-200);
                    border-radius: 10px;
                }

                .modal-form::-webkit-scrollbar-thumb:hover {
                    background: var(--slate-300);
                }

                @media (max-width: 900px) {
                    .form-sections { grid-template-columns: 1fr; }
                    .modal-container { max-width: 95vw; }
                    .modal-form { padding: 1.25rem; }
                }
                /* Bulk Asset Styling */
                .bulk-entry-section {
                    margin-top: 1rem;
                    background: #f8fafc;
                    padding: 1rem;
                    border-radius: 12px;
                    border: 1px solid var(--slate-100);
                }

                .bulk-assets-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1rem;
                    margin-top: 0.75rem;
                }

                .bulk-asset-card {
                    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
                    border: 2px solid var(--slate-200);
                    border-radius: 12px;
                    padding: 1.25rem;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 2px 4px rgba(0,0,0,0.04);
                    position: relative;
                    overflow: hidden;
                }

                .bulk-asset-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, var(--primary), var(--accent));
                    opacity: 0;
                    transition: opacity 0.3s;
                }

                .bulk-asset-card:hover {
                    border-color: var(--primary);
                    box-shadow: 0 8px 16px -4px rgba(59, 130, 246, 0.15);
                    transform: translateY(-2px);
                }

                .bulk-asset-card:hover::before {
                    opacity: 1;
                }

                .bulk-card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                    padding-bottom: 0.75rem;
                    border-bottom: 1px solid var(--slate-100);
                }

                .asset-index {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: black;
                    background: linear-gradient(135deg, var(--slate-500), var(--slate-600));
                    padding: 4px 10px;
                    border-radius: 6px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    transition: all 0.3s;
                }

                .bulk-asset-card:hover .asset-index {
                    background: linear-gradient(135deg, var(--primary), var(--accent));
                    transform: scale(1.05);
                }

                .bulk-input-row {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 0.75rem;
                }

                .bulk-input-row:last-child {
                    margin-bottom: 0;
                }

                .bulk-input-group {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 0.375rem;
                }

                .bulk-input-group label {
                    font-size: 0.6875rem;
                    font-weight: 700;
                    color: var(--slate-600);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                }

                .bulk-input-group input,
                .bulk-input-group select {
                    width: 100%;
                    padding: 0.625rem 0.75rem;
                    border: 1.5px solid var(--slate-200);
                    border-radius: 8px;
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: var(--slate-800);
                    transition: all 0.2s ease;
                    background: white;
                }

                .bulk-input-group input:focus,
                .bulk-input-group select:focus {
                    background: white;
                    border-color: var(--primary);
                    outline: none;
                    box-shadow: 0 0 0 3px var(--primary-glow);
                }
                
                .bulk-input-group input::placeholder {
                    color: var(--slate-400);
                    font-weight: 400;
                }

                /* Hardware Specs Section Styling */
                .bulk-specs-section {
                    margin-top: 1rem;
                    padding-top: 1rem;
                    border-top: 2px dashed var(--slate-200);
                    background: linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(99, 102, 241, 0.03) 100%);
                    padding: 1rem;
                    border-radius: 8px;
                    animation: fadeIn 0.4s ease-in-out;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .bulk-specs-section .bulk-input-row {
                    margin-bottom: 0.75rem;
                }

                .bulk-specs-section .bulk-input-group label {
                    color: var(--primary);
                }

                @media (max-width: 768px) {
                    .bulk-assets-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .bulk-input-row {
                        flex-direction: column;
                        gap: 0.75rem;
                    }
                    
                    .bulk-asset-card {
                        padding: 1rem;
                    }
                }
            `})]})},uy=({isOpen:o,onClose:c,onUpdate:d,asset:s})=>{const[u,f]=useState({assetName:"",assetTag:"",receiverName:"",exchangeType:"Issue",newAssetId:"",remarks:"",assetCode:"",photos:[],vendor:null,companyName:"",generation:"",ram:"",hardDisk:"",procurementType:"Purchasing",purchaseDate:"",poNumber:"",invoiceNumber:"",purchaseCost:"",warrantyPeriod:"",vendorContact:"",deliveryDate:"",returnDate:"",agreementNumber:"",securityDeposit:"",customFields:{}}),[g,y]=useState([]),[x,p]=useState(null),[b,w]=useState([]),[B,F]=useState([]),V=useRef(null);if(useEffect(()=>{o&&((async()=>{try{const Q=await xe.getVendors();F(Array.isArray(Q)?Q:Q.data||[])}catch(Q){console.error("Failed to fetch vendors:",Q)}})(),(async()=>{try{const Q=await xe.getAssetTypes();y(Array.isArray(Q)?Q:Q.data||[])}catch(Q){console.error("Error fetching asset types:",Q)}})())},[o]),useEffect(()=>{s&&f({id:s.id||"",assetName:s.assetName||s.name||"",assetTag:s.assetTag||s.tag||"",receiverName:s.receiverName||"",exchangeType:s.exchangeType||"Issue",newAssetId:s.newAssetId||"",remarks:s.remarks||"",assetCode:s.assetCode||"-",photos:s.photos||[],vendor:s.vendor?{...s.vendor,vendorId:String(s.vendor.vendorId||s.vendor.id)}:null,companyName:s.companyName||"",generation:s.generation||"",ram:s.ram||"",hardDisk:s.hardDisk||"",procurementType:s.procurementType||"Purchasing",purchaseDate:s.purchaseDate||"",poNumber:s.poNumber||"",invoiceNumber:s.invoiceNumber||"",purchaseCost:s.purchaseCost||"",warrantyPeriod:s.warrantyPeriod||"",vendorContact:s.vendorContact||"",deliveryDate:s.deliveryDate||"",returnDate:s.returnDate||"",agreementNumber:s.agreementNumber||"",securityDeposit:s.securityDeposit||""})},[s]),useEffect(()=>{if(g.length>0&&s){const N=s.assetType||s.type,W=g.find(Q=>Q.id===N||Q.typeId===N||Q.typeName===N||Q.name===N);p(W||null),s.customFields&&f(Q=>({...Q,customFields:s.customFields}))}},[g,s]),!o||!s)return null;const T=N=>{const{name:W,value:Q}=N.target;f(me=>({...me,[W]:Q}))},k=N=>{const W=N.target.value,Q=B.find(me=>me.vendorId===W);f(me=>({...me,vendor:Q||null}))},M=(N,W)=>{f(Q=>({...Q,customFields:{...Q.customFields,[N]:W}}))},P=N=>{const W=Array.from(N.target.files);if(b.length+W.length>4){alert("You can only add up to 4 photos.");return}w(me=>[...me,...W]);const Q=W.map(me=>URL.createObjectURL(me));f(me=>({...me,photos:[...me.photos,...Q]}))},te=N=>{w(W=>W.filter((Q,me)=>me!==N)),f(W=>({...W,photos:W.photos.filter((Q,me)=>me!==N)}))},le=N=>{N.preventDefault();const W={...u,vendorId:u.vendor?.vendorId||""};d(W)};return a.jsxs("div",{className:"modal-overlay",onClick:c,children:[a.jsxs("div",{className:"modal-container scrollable animate-pop",onClick:N=>N.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsxs("div",{className:"header-info",children:[a.jsx("div",{className:"header-icon",children:a.jsx(Mt,{size:20})}),a.jsxs("div",{children:[a.jsx("h3",{children:"Edit Asset Details"}),a.jsxs("p",{children:["Update information for ",s.id]})]})]}),a.jsx("button",{className:"close-btn",onClick:c,children:a.jsx(Ve,{size:20})})]}),a.jsxs("form",{onSubmit:le,className:"modal-form",children:[a.jsxs("div",{className:"procurement-toggle-container",children:[a.jsx("button",{type:"button",className:`toggle-btn ${u.procurementType==="Purchasing"?"active":""}`,onClick:()=>f(N=>({...N,procurementType:"Purchasing"})),children:"Purchasing"}),a.jsx("button",{type:"button",className:`toggle-btn ${u.procurementType==="Vendor"?"active":""}`,onClick:()=>f(N=>({...N,procurementType:"Vendor"})),children:"Taking from Vendor"})]}),a.jsxs("div",{className:"form-sections",children:[a.jsxs("div",{className:"form-section",children:[u.procurementType==="Vendor"&&a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(da,{size:14})," Vendor"]}),a.jsxs("select",{name:"vendor",value:u.vendor?.vendorId||"",onChange:k,className:"select-input",required:!0,children:[a.jsx("option",{value:"",children:"-- Select Vendor --"}),B.map(N=>a.jsxs("option",{value:N.vendorId,children:[N.vendorName," (",N.vendorType,")"]},N.vendorId))]})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(Mt,{size:14})," Asset Name"]}),a.jsx("input",{type:"text",name:"assetName",value:u.assetName,onChange:T,required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(wt,{size:14})," Asset Code (Auto-generated)"]}),a.jsx("input",{type:"text",name:"assetCode",value:u.assetCode,readOnly:!0,className:"read-only-input"})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(wt,{size:14})," Asset Tag"]}),a.jsx("input",{type:"text",name:"assetTag",value:u.assetTag,onChange:T,required:!0})]}),u.procurementType==="Vendor"&&a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(Ut,{size:14})," Receiver Name"]}),a.jsx("input",{type:"text",name:"receiverName",value:u.receiverName,onChange:T,required:!0})]}),x&&["Laptop","Desktop","Server","Workstation","IT Hardware"].includes(x.typeName||x.name)&&a.jsxs("div",{className:"technical-specs-section",children:[a.jsx("h4",{className:"section-subtitle",children:"Hardware Specifications"}),a.jsxs("div",{className:"specs-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Company Name"}),a.jsx("input",{type:"text",name:"companyName",value:u.companyName,onChange:T,placeholder:"e.g. Lenovo, Dell"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Generation"}),a.jsx("input",{type:"text",name:"generation",value:u.generation,onChange:T,placeholder:"e.g. 12th Gen, M2"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"RAM"}),a.jsx("input",{type:"text",name:"ram",value:u.ram,onChange:T,placeholder:"e.g. 16GB, 32GB"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Hard Disk"}),a.jsx("input",{type:"text",name:"hardDisk",value:u.hardDisk,onChange:T,placeholder:"e.g. 512GB SSD, 1TB HDD"})]})]})]}),x?.fields&&x.fields.length>0&&a.jsxs("div",{className:"technical-specs-section",children:[a.jsx("h4",{className:"section-subtitle",children:"Custom Attributes"}),a.jsx("div",{className:"specs-grid",children:x.fields.map((N,W)=>a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[N.name,N.required&&"*"]}),N.type==="select"?a.jsxs("select",{value:u.customFields?.[N.name]||"",onChange:Q=>M(N.name,Q.target.value),className:"select-input",children:[a.jsx("option",{value:"",children:"Select"}),N.options?.map((Q,me)=>a.jsx("option",{value:Q,children:Q},me))]}):a.jsx("input",{type:N.type,value:u.customFields?.[N.name]||"",onChange:Q=>M(N.name,Q.target.value),placeholder:N.name})]},W))})]}),u.procurementType==="Vendor"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(Nr,{size:14})," Exchange Type"]}),a.jsxs("select",{name:"exchangeType",value:u.exchangeType,onChange:T,className:"select-input",children:[a.jsx("option",{value:"Issue",children:"Issue"}),a.jsx("option",{value:"Return",children:"Return"}),a.jsx("option",{value:"Replace",children:"Replace"})]})]}),u.exchangeType==="Replace"&&a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(wt,{size:14})," New Asset ID"]}),a.jsx("input",{type:"text",name:"newAssetId",value:u.newAssetId,onChange:T,required:!0,placeholder:"e.g. AST-NEW-001"})]})]})]}),a.jsxs("div",{className:"form-section",children:[a.jsxs("div",{className:"procurement-details-section",children:[a.jsx("h4",{className:"section-subtitle",children:u.procurementType==="Purchasing"?"Purchasing Details":"Vendor Procurement Details"}),u.procurementType==="Purchasing"?a.jsxs("div",{className:"specs-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Purchase Date"}),a.jsx("input",{type:"date",name:"purchaseDate",value:u.purchaseDate,onChange:T})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"PO Number"}),a.jsx("input",{type:"text",name:"poNumber",value:u.poNumber,onChange:T,placeholder:"e.g. PO-123"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Invoice Number"}),a.jsx("input",{type:"text",name:"invoiceNumber",value:u.invoiceNumber,onChange:T,placeholder:"e.g. INV-456"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Purchase Cost"}),a.jsx("input",{type:"number",name:"purchaseCost",value:u.purchaseCost,onChange:T,placeholder:"e.g. 50000"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Warranty (Months)"}),a.jsx("input",{type:"text",name:"warrantyPeriod",value:u.warrantyPeriod,onChange:T,placeholder:"e.g. 12"})]})]}):a.jsxs("div",{className:"specs-grid",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Vendor Contact"}),a.jsx("input",{type:"text",name:"vendorContact",value:u.vendorContact,onChange:T,placeholder:"e.g. John Sales"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Delivery Date"}),a.jsx("input",{type:"date",name:"deliveryDate",value:u.deliveryDate,onChange:T})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Expected Return"}),a.jsx("input",{type:"date",name:"returnDate",value:u.returnDate,onChange:T})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Agreement #"}),a.jsx("input",{type:"text",name:"agreementNumber",value:u.agreementNumber,onChange:T,placeholder:"e.g. AGR-789"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Security Deposit"}),a.jsx("input",{type:"number",name:"securityDeposit",value:u.securityDeposit,onChange:T,placeholder:"e.g. 10000"})]})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(Gc,{size:14})," Remarks"]}),a.jsx("textarea",{name:"remarks",value:u.remarks,onChange:T,rows:"3"})]}),a.jsxs("div",{className:"form-group",children:[a.jsxs("label",{children:[a.jsx(as,{size:14})," Photos (Max 4)"]}),a.jsxs("div",{className:"photo-upload-grid",children:[u.photos.map((N,W)=>a.jsxs("div",{className:"photo-preview-item",children:[a.jsx("img",{src:at(N),alt:`Asset ${W+1}`}),a.jsx("button",{type:"button",className:"photo-remove",onClick:()=>te(W),children:a.jsx(Ve,{size:12})})]},W)),u.photos.length<4&&a.jsxs("button",{type:"button",className:"photo-upload-btn",onClick:()=>V.current.click(),children:[a.jsx(Ap,{size:20}),a.jsx("span",{children:"Add"})]})]}),a.jsx("input",{type:"file",ref:V,onChange:P,multiple:!0,accept:"image/*",style:{display:"none"}})]})]})]}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{type:"button",className:"secondary-btn",onClick:c,children:"Cancel"}),a.jsx("button",{type:"submit",className:"submit-btn primary-glow",children:"Update Asset"})]})]})]}),a.jsx("style",{children:`
                .procurement-toggle-container {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 2rem;
                    background: #f1f5f9;
                    padding: 0.5rem;
                    border-radius: 12px;
                }

                .toggle-btn {
                    flex: 1;
                    padding: 0.75rem;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    cursor: pointer;
                    transition: all 0.2s;
                    background: transparent;
                    color: #64748b;
                }

                .toggle-btn.active {
                    background: white;
                    color: #2563eb;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                }

                .procurement-details-section {
                    background: #f8fafc;
                    padding: 1.25rem;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                    margin-bottom: 1.5rem;
                }

                .modal-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(15, 23, 42, 0.4);
                    backdrop-filter: blur(4px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2000;
                    padding: 1rem;
                }

                .modal-container {
                    background: white;
                    width: 100%;
                    max-width: 1000px;
                    border-radius: 20px;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2);
                    display: flex;
                    flex-direction: column;
                    max-height: 90vh;
                    overflow-x: hidden;
                }

                .modal-container.scrollable {
                    overflow-y: auto;
                }

                .animate-pop {
                    animation: pop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                @keyframes pop {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }

                .modal-header {
                    padding: 1.5rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #f1f5f9;
                    position: sticky;
                    top: 0;
                    background: white;
                    z-index: 10;
                }

                .header-info {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .header-icon {
                    width: 42px;
                    height: 42px;
                    background: #f8fafc;
                    color: #2563eb;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .header-info h3 {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #1e293b;
                }

                .header-info p {
                    font-size: 0.875rem;
                    color: #64748b;
                }

                .close-btn {
                    background: #f8fafc;
                    border: none;
                    color: #64748b;
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .modal-form {
                    padding: 2rem;
                }

                .form-sections {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                    margin-bottom: 2rem;
                }

                @media (max-width: 640px) {
                    .form-sections {
                        grid-template-columns: 1fr;
                    }
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    margin-bottom: 1.25rem;
                }

                .form-group label {
                    font-size: 0.8125rem;
                    font-weight: 700;
                    color: #475569;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .form-group input, 
                .form-group select, 
                .form-group textarea {
                    padding: 0.75rem 1rem;
                    border: 1px solid #e2e8f0;
                    border-radius: 10px;
                    font-size: 0.875rem;
                    background: #f8fafc;
                    max-width: 400px;
                    width: 100%;
                }

                .form-group input:read-only {
                    background: #f1f5f9;
                    color: #64748b;
                    cursor: not-allowed;
                    border-color: #e2e8f0;
                }

                .photo-upload-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 0.75rem;
                }

                .photo-preview-item {
                    position: relative;
                    aspect-ratio: 1;
                    border-radius: 8px;
                    overflow: hidden;
                    border: 1px solid #e2e8f0;
                }

                .photo-preview-item img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .photo-remove {
                    position: absolute;
                    top: 4px;
                    right: 4px;
                    background: rgba(0, 0, 0, 0.5);
                    color: white;
                    border: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .photo-upload-btn {
                    aspect-ratio: 1;
                    border: 2px dashed #e2e8f0;
                    border-radius: 8px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 0.25rem;
                    color: #64748b;
                    background: #f8fafc;
                    font-size: 0.625rem;
                    font-weight: 700;
                    text-transform: uppercase;
                }

                .modal-footer {
                    display: flex;
                    justify-content: flex-end;
                    gap: 1rem;
                    padding-top: 1.5rem;
                    border-top: 1px solid #f1f5f9;
                }

                .secondary-btn {
                    padding: 0.75rem 1.5rem;
                    border-radius: 10px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    background: white;
                    border: 1px solid #e2e8f0;
                    color: #475569;
                }

                .submit-btn {
                    padding: 0.75rem 2rem;
                    border-radius: 10px;
                    font-weight: 700;
                    font-size: 0.875rem;
                    background: #2563eb;
                    color: white;
                    border: none;
                }

                .technical-specs-section {
                    background: #f1f5f9;
                    padding: 1.25rem;
                    border-radius: 12px;
                    margin: 0.5rem 0 1.5rem;
                }

                .section-subtitle {
                    font-size: 0.75rem;
                    font-weight: 800;
                    color: #475569;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 1rem;
                }

                .specs-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                }

                .specs-grid .form-group {
                    margin-bottom: 0;
                }

                .specs-grid label {
                    font-size: 0.7rem;
                    color: #64748b;
                }
            `})]})},fy=({isOpen:o,onClose:c,asset:d})=>!o||!d?null:a.jsxs("div",{className:"modal-overlay",onClick:c,children:[a.jsxs("div",{className:"modal-container animate-pop",onClick:s=>s.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsxs("div",{className:"header-info",children:[a.jsx("div",{className:"header-icon",children:a.jsx(Mt,{size:20})}),a.jsxs("div",{children:[a.jsx("h3",{children:"Asset Profile"}),a.jsxs("p",{children:["Global identifier: ",d.id]})]})]}),a.jsx("button",{className:"close-btn",onClick:c,children:a.jsx(Ve,{size:20})})]}),a.jsxs("div",{className:"modal-content",children:[a.jsxs("div",{className:"info-grid_assets",children:[a.jsxs("div",{className:"info-item_assets",children:[a.jsxs("label",{children:[a.jsx(Mt,{size:14})," Asset Name"]}),a.jsx("span",{className:"value",children:d.name})]}),a.jsxs("div",{className:"info-item_assets",children:[a.jsxs("label",{children:[a.jsx(wt,{size:14})," Asset Code"]}),a.jsx("span",{className:"value tag-value",children:d.assetCode||"-"})]}),a.jsxs("div",{className:"info-item_assets",children:[a.jsxs("label",{children:[a.jsx(wt,{size:14})," Asset Tag"]}),a.jsx("span",{className:"value tag-value",children:d.tag||d.assetTag})]}),d.procurementType==="Vendor"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"info-item_assets",children:[a.jsxs("label",{children:[a.jsx(Ut,{size:14})," Receiver Name"]}),a.jsx("span",{className:"value",children:d.receiverName||"-"})]}),a.jsxs("div",{className:"info-item_assets",children:[a.jsxs("label",{children:[a.jsx(Nr,{size:14})," Exchange Type"]}),a.jsxs("span",{className:`value status-badge ${d.exchangeType?.toLowerCase()||"issue"}`,children:[a.jsx("span",{className:"dot"}),d.exchangeType||"Issue"]})]}),d.vendor&&a.jsxs("div",{className:"info-item_assets",children:[a.jsxs("label",{children:[a.jsx(da,{size:14})," Vendor"]}),a.jsxs("div",{className:"vendor-info",children:[a.jsx("span",{className:"vendor-name-view",children:d.vendor.vendorName}),a.jsx("span",{className:"vendor-type-view",children:d.vendor.vendorType})]})]}),d.exchangeType==="Replace"&&d.newAssetId&&a.jsxs("div",{className:"info-item_assets",children:[a.jsxs("label",{children:[a.jsx(wt,{size:14})," New Asset ID"]}),a.jsx("span",{className:"value tag-value",children:d.newAssetId})]})]}),["Laptop","Desktop","Server","Workstation","IT Hardware"].includes(d.assetType||d.type||d.typeName)&&a.jsxs("div",{className:"info-item_assets full-width technical-specs-view",children:[a.jsxs("label",{children:[a.jsx(Mt,{size:14})," Technical Specifications"]}),a.jsxs("div",{className:"specs-view-grid",children:[a.jsxs("div",{className:"spec-item",children:[a.jsx("span",{className:"spec-label",children:"Company:"}),a.jsx("span",{className:"spec-value",children:d.companyName||"-"})]}),a.jsxs("div",{className:"spec-item",children:[a.jsx("span",{className:"spec-label",children:"Gen:"}),a.jsx("span",{className:"spec-value",children:d.generation||"-"})]}),a.jsxs("div",{className:"spec-item",children:[a.jsx("span",{className:"spec-label",children:"RAM:"}),a.jsx("span",{className:"spec-value",children:d.ram||"-"})]}),a.jsxs("div",{className:"spec-item",children:[a.jsx("span",{className:"spec-label",children:"Disk:"}),a.jsx("span",{className:"spec-value",children:d.hardDisk||"-"})]})]})]}),d.customFields&&Object.keys(d.customFields).length>0&&a.jsxs("div",{className:"info-item_assets full-width technical-specs-view",children:[a.jsxs("label",{children:[a.jsx(wt,{size:14})," Custom Attributes"]}),a.jsx("div",{className:"specs-view-grid",children:Object.entries(d.customFields).map(([s,u])=>a.jsxs("div",{className:"spec-item",children:[a.jsxs("span",{className:"spec-label",children:[s,":"]}),a.jsx("span",{className:"spec-value",children:u||"-"})]},s))})]}),a.jsxs("div",{className:"info-item_assets full-width",children:[a.jsxs("label",{children:[a.jsx(Gc,{size:14})," Remarks"]}),a.jsx("span",{className:"value remarks-box",children:d.remarks||"No additional remarks provided."})]}),d.procurementType&&a.jsxs("div",{className:"info-item_assets full-width procurement-details-view",children:[a.jsxs("label",{children:[a.jsx(da,{size:14})," Procurement Details (",d.procurementType==="Purchasing"?"Purchased":"From Vendor",")"]}),a.jsx("div",{className:"specs-view-grid",children:d.procurementType==="Purchasing"?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"spec-item",children:[a.jsx("span",{className:"spec-label",children:"Purchase Date:"}),a.jsx("span",{className:"spec-value",children:d.purchaseDate||"-"})]}),a.jsxs("div",{className:"spec-item",children:[a.jsx("span",{className:"spec-label",children:"PO Number:"}),a.jsx("span",{className:"spec-value",children:d.poNumber||"-"})]}),a.jsxs("div",{className:"spec-item",children:[a.jsx("span",{className:"spec-label",children:"Invoice Number:"}),a.jsx("span",{className:"spec-value",children:d.invoiceNumber||"-"})]}),a.jsxs("div",{className:"spec-item",children:[a.jsx("span",{className:"spec-label",children:"Purchase Cost:"}),a.jsx("span",{className:"spec-value",children:d.purchaseCost?`₹${d.purchaseCost}`:"-"})]}),a.jsxs("div",{className:"spec-item",children:[a.jsx("span",{className:"spec-label",children:"Warranty:"}),a.jsx("span",{className:"spec-value",children:d.warrantyPeriod?`${d.warrantyPeriod} Months`:"-"})]})]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"spec-item",children:[a.jsx("span",{className:"spec-label",children:"Vendor Contact:"}),a.jsx("span",{className:"spec-value",children:d.vendorContact||"-"})]}),a.jsxs("div",{className:"spec-item",children:[a.jsx("span",{className:"spec-label",children:"Delivery Date:"}),a.jsx("span",{className:"spec-value",children:d.deliveryDate||"-"})]}),a.jsxs("div",{className:"spec-item",children:[a.jsx("span",{className:"spec-label",children:"Expected Return:"}),a.jsx("span",{className:"spec-value",children:d.returnDate||"-"})]}),a.jsxs("div",{className:"spec-item",children:[a.jsx("span",{className:"spec-label",children:"Agreement #:"}),a.jsx("span",{className:"spec-value",children:d.agreementNumber||"-"})]}),a.jsxs("div",{className:"spec-item",children:[a.jsx("span",{className:"spec-label",children:"Security Deposit:"}),a.jsx("span",{className:"spec-value",children:d.securityDeposit?`₹${d.securityDeposit}`:"-"})]})]})})]})]}),a.jsxs("div",{className:"detail-section",children:[a.jsx("label",{className:"section-label",children:"Media & Photos"}),a.jsx("div",{className:"photos-container",children:d.photos&&d.photos.length>0?d.photos.map((s,u)=>{const f=at(s),g=f.toLowerCase(),y=/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(g),x=g.endsWith(".pdf");return a.jsx("div",{className:"photo-wrapper",onClick:()=>window.open(f,"_blank"),style:{cursor:"pointer"},children:y?a.jsx("img",{src:f,alt:`Asset ${u+1}`,onError:p=>{const b=p.target;if(b.dataset.errorHandled)return;b.dataset.errorHandled="true";const w=b.src,B=w.match(/\/api\/(?:onboarding\/)?files\/(.+)$/),F=B?B[1]:"";w.includes("/api/files/")?b.src=`/api/onboarding/files/${F}`:w.includes("/api/onboarding/files/")?(b.src=`/api/files/${F}`,b.dataset.errorHandled="final"):(b.src="/placeholder.png",b.classList.add("broken-link"))}}):x?a.jsxs("div",{className:"pdf-preview-container",children:[a.jsx(Nl,{size:48,color:"#ef4444"}),a.jsx("span",{children:"PDF"})]}):a.jsxs("div",{className:"generic-preview-container",children:[a.jsx(Nl,{size:48,color:"#94a3b8"}),a.jsx("span",{children:"File"})]})},u)}):a.jsxs("div",{className:"no-photos",children:[a.jsx(as,{size:48}),a.jsx("p",{children:"No photos attached to this asset."})]})})]})]}),a.jsx("div",{className:"modal-footer",children:a.jsx("button",{className:"primary-btn",onClick:c,children:"Done"})})]}),a.jsx("style",{children:`
                .procurement-details-view {
                    background: #f8fafc;
                    padding: 1.25rem;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                    margin-top: 0.5rem;
                    border-left: 4px solid #2563eb;
                }

                .modal-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(15, 23, 42, 0.4);
                    backdrop-filter: blur(4px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2000;
                    padding: 1rem;
                }

                .modal-container {
                    background: white;
                    width: 100%;
                    max-width: 1000px;
                    border-radius: 20px;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2);
                    display: flex;
                    flex-direction: column;
                    max-height: 90vh;
                    overflow: hidden;
                }

                .animate-pop {
                    animation: pop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                @keyframes pop {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }

                .modal-header {
                    padding: 1.5rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #f1f5f9;
                }

                .header-info {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .header-icon {
                    width: 42px;
                    height: 42px;
                    background: #f8fafc;
                    color: #2563eb;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .header-info h3 {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #1e293b;
                    margin: 0;
                }

                .header-info p {
                    font-size: 0.875rem;
                    color: #64748b;
                    margin: 0.125rem 0 0;
                }

                .close-btn {
                    background: #f8fafc;
                    border: none;
                    color: #64748b;
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .modal-content {
                    padding: 2rem;
                    overflow-y: auto;
                }

                .info-grid_assets {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }

                .info-item_assets {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .info-item_assets.full-width {
                    grid-column: span 2;
                }

                .info-item_assets label {
                    font-size: 0.75rem;
                    font-weight: 800;
                    color: #94a3b8;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .info-item_assets .value {
                    font-size: 1rem;
                    font-weight: 600;
                    color: #1e293b;
                }

                .tag-value {
                    font-family: monospace;
                    background: #f1f5f9;
                    padding: 4px 8px;
                    border-radius: 6px;
                    width: fit-content;
                }

                .remarks-box {
                    background: #f8fafc;
                    padding: 1rem;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                    font-weight: 400 !important;
                    line-height: 1.6;
                    color: #475569 !important;
                }

                .status-badge {
                    width: fit-content;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 4px 10px;
                    border-radius: 6px;
                    font-size: 0.8125rem !important;
                }

                .status-badge .dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                }

                .status-badge.issue { background: #eff6ff; color: #1d4ed8; }
                .status-badge.issue .dot { background: #2563eb; }

                .status-badge.return { background: #fff1f2; color: #be123c; }
                .status-badge.return .dot { background: #ef4444; }

                .status-badge.replace { background: #fefce8; color: #a16207; }
                .status-badge.replace .dot { background: #eab308; }

                .vendor-info {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .vendor-name-view {
                    font-size: 1rem;
                    font-weight: 600;
                    color: #1e293b;
                }

                .vendor-type-view {
                    font-size: 0.875rem;
                    color: #64748b;
                    background: #f1f5f9;
                    padding: 4px 8px;
                    border-radius: 6px;
                    width: fit-content;
                }

                .detail-section {
                    margin-top: 2rem;
                }

                .section-label {
                    font-size: 0.75rem;
                    font-weight: 800;
                    color: #94a3b8;
                    text-transform: uppercase;
                    margin-bottom: 1rem;
                    display: block;
                }

                .photos-container {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1rem;
                }

                .photo-wrapper {
                    aspect-ratio: 1;
                    border-radius: 12px;
                    overflow: hidden;
                    border: 1px solid #e2e8f0;
                }

                .photo-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .no-photos {
                    grid-column: span 4;
                    background: #f8fafc;
                    border: 2px dashed #e2e8f0;
                    border-radius: 12px;
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: #94a3b8;
                    gap: 0.5rem;
                }

                .modal-footer {
                    padding: 1.5rem 2rem;
                    border-top: 1px solid #f1f5f9;
                    display: flex;
                    justify-content: flex-end;
                }

                .primary-btn {
                    background: #2563eb;
                    color: white;
                    padding: 0.75rem 2rem;
                    border-radius: 10px;
                    font-weight: 700;
                    border: none;
                }

                .technical-specs-view {
                    background: #f8fafc;
                    padding: 1.25rem;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                    margin-top: 0.5rem;
                }

                .specs-view-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;
                    margin-top: 1rem;
                }

                .spec-item {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .spec-label {
                    font-size: 0.7rem;
                    font-weight: 700;
                    color: #94a3b8;
                    text-transform: uppercase;
                }

                .spec-value {
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: #1e293b;
                }
                .pdf-preview-container, .generic-preview-container {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: #f8fafc;
                    gap: 0.5rem;
                }

                .pdf-preview-container span {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: #ef4444;
                }

                .generic-preview-container span {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: #94a3b8;
                }
            `})]}),my=({isOpen:o,onClose:c,onAssign:d,assetName:s})=>{const[u,f]=j.useState("prompt"),[g,y]=j.useState(""),[x,p]=j.useState(null),[b,w]=j.useState(""),[B,F]=j.useState([]),[V,T]=j.useState(!1);if(mn.useEffect(()=>{o&&(u==="search"||B.length===0)&&(async()=>{T(!0);try{const le=await xe.getEmployees(),N=Array.isArray(le)?le:le?.data||[];F(N)}catch(le){console.error("Failed to fetch employees:",le)}finally{T(!1)}})()},[o,u]),!o)return null;const k=te=>{if(te.preventDefault(),w(""),!g.trim()){w("Please enter an Employee ID");return}const le=B.find(N=>String(N.employeeId||N.id).toUpperCase()===g.trim().toUpperCase());le?p({id:le.employeeId||le.id,name:le.fullName||le.name,designation:le.role||le.designation,dept:le.dept||le.department}):(w("Employee not found with this ID"),p(null))},M=()=>{x&&(d(x),P())},P=()=>{f("prompt"),y(""),p(null),w(""),c()};return a.jsxs("div",{className:"modal-overlay",children:[a.jsxs("div",{className:"modal-container animate-pop",children:[a.jsx("button",{className:"close-btn-abs",onClick:P,children:a.jsx(Ve,{size:20})}),u==="prompt"&&a.jsxs("div",{className:"prompt-content",children:[a.jsx("div",{className:"icon-circle",children:a.jsx(Sr,{size:32})}),a.jsx("h3",{children:"Asset Created Successfully!"}),a.jsxs("p",{children:["Do you want to assign ",a.jsx("strong",{children:s})," to an employee now?"]}),a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{className:"btn-secondary",onClick:P,children:"No, Later"}),a.jsx("button",{className:"btn-primary",onClick:()=>f("search"),children:"Yes, Assign"})]})]}),u==="search"&&a.jsxs("div",{className:"search-content",children:[a.jsx("h3",{children:"Assign Asset"}),a.jsxs("p",{children:["Search employee by ID to assign ",a.jsx("strong",{children:s})]}),a.jsxs("div",{className:"search-group",children:[a.jsx("input",{type:"text",placeholder:"Enter Employee ID (e.g. EMP001)",value:g,onChange:te=>y(te.target.value)}),a.jsx("button",{className:"btn-search",onClick:k,children:a.jsx(ns,{size:18})})]}),b&&a.jsxs("p",{className:"error-msg",children:[a.jsx(zp,{size:14})," ",b]}),x&&a.jsxs("div",{className:"employee-card animate-fade",children:[a.jsx("div",{className:"emp-avatar",children:a.jsx(Ut,{size:24})}),a.jsxs("div",{className:"emp-info",children:[a.jsx("h4",{children:x.name}),a.jsxs("span",{children:[x.designation," • ",x.dept]})]})]}),a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{className:"btn-secondary",onClick:()=>f("prompt"),children:"Back"}),a.jsx("button",{className:"btn-primary",disabled:!x,onClick:M,children:"Confirm Assignment"})]})]})]}),a.jsx("style",{children:`
                .modal-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(15, 23, 42, 0.5);
                    backdrop-filter: blur(5px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 2100;
                    padding: 1rem;
                }

                .modal-container {
                    background: white;
                    width: 100%;
                    max-width: 450px;
                    border-radius: 16px;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                    position: relative;
                    overflow: hidden;
                    padding: 2rem;
                    text-align: center;
                }

                .close-btn-abs {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: transparent;
                    border: none;
                    color: #94a3b8;
                    cursor: pointer;
                }

                .animate-pop { animation: pop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
                .animate-fade { animation: fade 0.3s ease-out; }
                
                @keyframes pop { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
                @keyframes fade { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }

                .icon-circle {
                    width: 64px;
                    height: 64px;
                    background: #dcfce7;
                    color: #16a34a;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1.5rem;
                }

                h3 { color: #1e293b; font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; }
                p { color: #64748b; font-size: 0.9rem; margin-bottom: 2rem; line-height: 1.5; }
                strong { color: #334155; }

                .modal-actions {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                }

                .btn-primary, .btn-secondary {
                    padding: 0.75rem 1.5rem;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    cursor: pointer;
                    flex: 1;
                }

                .btn-primary { background: #2563eb; color: white; border: none; }
                .btn-primary:hover { background: #1d4ed8; }
                .btn-primary:disabled { background: #94a3b8; cursor: not-allowed; }

                .btn-secondary { background: white; border: 1px solid #e2e8f0; color: #475569; }
                .btn-secondary:hover { background: #f8fafc; }

                /* Search Styles */
                .search-group {
                    display: flex;
                    gap: 0.5rem;
                    margin-bottom: 1.5rem;
                }

                .search-group input {
                    flex: 1;
                    padding: 0.75rem;
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                    font-size: 0.9rem;
                    outline: none;
                }

                .search-group input:focus { border-color: #2563eb; }

                .btn-search {
                    background: #eff6ff;
                    color: #2563eb;
                    border: 1px solid #dbeafe;
                    border-radius: 8px;
                    width: 42px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }

                .btn-search:hover { background: #dbeafe; }

                .error-msg {
                    color: #ef4444;
                    font-size: 0.8rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.25rem;
                    margin-top: -1rem;
                    margin-bottom: 1rem;
                }

                .employee-card {
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 12px;
                    padding: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 2rem;
                    text-align: left;
                }

                .emp-avatar {
                    width: 40px;
                    height: 40px;
                    background: #e2e8f0;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #64748b;
                }

                .emp-info h4 { margin: 0; font-size: 0.95rem; color: #1e293b; }
                .emp-info span { font-size: 0.8rem; color: #64748b; }
            `})]})},py=()=>{const[o,c]=j.useState([]),[d,s]=j.useState(!0),[u,f]=j.useState(!1),[g,y]=j.useState(!1),[x,p]=j.useState(!1),[b,w]=j.useState(!1),[B,F]=j.useState(null),[V,T]=j.useState(null),[k,M]=j.useState(""),[P,te]=j.useState(!1),[le,N]=j.useState({exchangeType:"All",assignmentStatus:"All"}),W=Y=>Y?{...Y,id:Y.id||Y.assetId,name:Y.assetName||Y.name||"Unnamed Asset",tag:Y.assetTag||Y.tag||"-",assetCode:Y.assetCode||Y.id||"-",exchangeType:Y.exchangeType||"Issue",procurementType:Y.procurementType||"Purchasing",receiverName:Y.receiverName||"",photos:Y.photos||Y.filePaths||[],vendor:Y.vendor||(Y.vendorId?{vendorId:Y.vendorId,vendorName:"Vendor "+Y.vendorId}:null)}:null,Q=async()=>{s(!0);try{const Y=await xe.getAssets();let oe=[];Y&&Y.data?oe=Y.data:Array.isArray(Y)?oe=Y:Y&&Y.content&&(oe=Y.content),c(oe.map(W))}catch(Y){console.error("Failed to fetch assets:",Y)}finally{s(!1)}};j.useEffect(()=>{Q()},[]);const me=["All",...new Set(o.map(Y=>Y.exchangeType))],ye=async Y=>{if(Y.assets&&Array.isArray(Y.assets)){Q(),f(!1);return}try{await xe.createAsset(Y),Q(),f(!1)}catch(oe){console.error("Failed to add asset:",oe),alert("Failed to add asset: "+oe.message)}},Le=async Y=>{try{await xe.updateAsset(Y.id,Y),Q(),y(!1),T(null)}catch(oe){console.error("Failed to update asset:",oe),alert("Failed to update asset: "+oe.message)}},re=async Y=>{if(window.confirm("Are you sure you want to delete this asset from the database?"))try{await xe.deleteAsset(Y),c(oe=>oe.filter(C=>C.id!==Y))}catch(oe){console.error("Failed to delete asset:",oe),alert("Failed to delete asset: "+oe.message)}},Ce=async Y=>{if(B)try{const oe={...B,receiverName:Y.name,exchangeType:"Issue",remarks:`${B.remarks?B.remarks+". ":""}Assigned to ${Y.name} (${Y.dept})`};await xe.updateAsset(B.id,oe),Q(),w(!1)}catch(oe){console.error("Failed to assign asset:",oe),alert("Failed to assign asset: "+oe.message)}},Ke=Y=>{T(Y),y(!0)},ee=Y=>{F(Y),w(!0)},he=Y=>{T(Y),p(!0)},L=o.filter(Y=>{const oe=(Y.name||"").toLowerCase().includes(k.toLowerCase())||(Y.tag||"").toLowerCase().includes(k.toLowerCase())||(Y.id||"").toLowerCase().includes(k.toLowerCase()),C=le.exchangeType==="All"||Y.exchangeType===le.exchangeType,Z=le.assignmentStatus==="All"||(le.assignmentStatus==="Assigned"?Y.receiverName:!Y.receiverName);return oe&&C&&Z}),ae=Y=>{N(oe=>({...oe,[Y]:"All"}))},de=Object.values(le).some(Y=>Y!=="All");return a.jsxs("div",{className:"assets-page animate-fade-in",children:[a.jsxs("header",{className:"page-header",children:[a.jsxs("div",{className:"header-title",children:[a.jsx("h1",{children:"Asset Management"}),a.jsx("p",{children:"Track hardware and software assignments across the organization."})]}),a.jsx("div",{className:"header-actions",children:a.jsxs("button",{className:"primary-btn",onClick:()=>f(!0),children:[a.jsx(ra,{size:18}),a.jsx("span",{children:"Add Asset"})]})})]}),a.jsx(dy,{isOpen:u,onClose:()=>f(!1),onAdd:ye}),a.jsx(my,{isOpen:b,onClose:()=>w(!1),onAssign:Ce,assetName:B?.name||"Asset"}),V&&a.jsxs(a.Fragment,{children:[a.jsx(uy,{isOpen:g,onClose:()=>y(!1),onUpdate:Le,asset:V}),a.jsx(fy,{isOpen:x,onClose:()=>p(!1),asset:V})]}),a.jsxs("div",{className:"main-table-container",children:[a.jsxs("div",{className:"table-controls",children:[a.jsxs("div",{className:"search-box",children:[a.jsx(ns,{size:18}),a.jsx("input",{type:"text",placeholder:"Search by name, tag, or ID...",value:k,onChange:Y=>M(Y.target.value)})]}),a.jsx("div",{className:"filter-group",children:a.jsxs("div",{className:"filter-popover-wrapper",children:[a.jsxs("button",{className:`control-btn ${de?"active":""}`,onClick:()=>te(!P),children:[a.jsx(qc,{size:16}),a.jsx("span",{children:"Filters"}),de&&a.jsx("span",{className:"filter-indicator"})]}),P&&a.jsxs("div",{className:"filter-popover card",children:[a.jsxs("div",{className:"popover-header",children:[a.jsx("h3",{children:"Filter Assets"}),a.jsx("button",{className:"icon-btn-sm",onClick:()=>te(!1),children:a.jsx(Ve,{size:14})})]}),a.jsxs("div",{className:"popover-body",children:[a.jsxs("div",{className:"filter-item",children:[a.jsx("label",{children:"Exchange Type"}),a.jsx("select",{value:le.exchangeType,onChange:Y=>N(oe=>({...oe,exchangeType:Y.target.value})),children:me.map(Y=>a.jsx("option",{value:Y,children:Y},Y))})]}),a.jsxs("div",{className:"filter-item",children:[a.jsx("label",{children:"Assignment Status"}),a.jsxs("select",{value:le.assignmentStatus,onChange:Y=>N(oe=>({...oe,assignmentStatus:Y.target.value})),children:[a.jsx("option",{value:"All",children:"All"}),a.jsx("option",{value:"Assigned",children:"Assigned"}),a.jsx("option",{value:"Unassigned",children:"Unassigned"})]})]})]}),a.jsxs("div",{className:"popover-footer",children:[a.jsx("button",{className:"text-btn",onClick:()=>N({exchangeType:"All",assignmentStatus:"All"}),children:"Reset All"}),a.jsx("button",{className:"apply-btn",onClick:()=>te(!1),children:"Apply"})]})]})]})})]}),de&&a.jsxs("div",{className:"active-filters",children:[Object.entries(le).map(([Y,oe])=>oe!=="All"&&a.jsxs("div",{className:"filter-badge",children:[a.jsxs("span",{className:"badge-label",children:[Y,":"]}),a.jsx("span",{className:"badge-value",children:oe}),a.jsx("button",{onClick:()=>ae(Y),children:a.jsx(Ve,{size:12})})]},Y)),a.jsx("button",{className:"clear-all-link",onClick:()=>N({exchangeType:"All",assignmentStatus:"All"}),children:"Clear all"})]}),a.jsx("div",{className:"table-overflow",children:d?a.jsxs("div",{className:"loading-state",children:[a.jsx("div",{className:"loader"}),a.jsx("p",{children:"Loading assets from database..."})]}):a.jsxs("table",{className:"premium-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Asset Code"}),a.jsx("th",{children:"Procurement"}),a.jsx("th",{children:"Asset Name"}),a.jsx("th",{children:"Asset Tag"}),a.jsx("th",{children:"Receiver Name"}),a.jsx("th",{children:"Vendor"}),a.jsx("th",{children:"Exchange Type"}),a.jsx("th",{children:"Media"}),a.jsx("th",{className:"text-center",children:"Action"})]})}),a.jsx("tbody",{children:L.length>0?L.map(Y=>a.jsxs("tr",{className:"table-row-hover",children:[a.jsx("td",{children:a.jsx("div",{className:"tag-cell font-mono",children:a.jsx("span",{className:"asset-id",children:Y.assetCode||"-"})})}),a.jsx("td",{children:a.jsx("span",{className:`procurement-badge ${Y.procurementType==="Vendor"?"vendor":"purchased"}`,children:Y.procurementType==="Vendor"?"From Vendor":"Purchased"})}),a.jsx("td",{children:a.jsxs("div",{className:"asset-profile-cell",children:[a.jsx("div",{className:"asset-icon",children:a.jsx(Mt,{size:20})}),a.jsx("div",{className:"asset-main",children:a.jsx("span",{className:"asset-name",children:Y.name})})]})}),a.jsx("td",{children:a.jsxs("div",{className:"tag-cell",children:[a.jsx(wt,{size:14}),a.jsx("span",{children:Y.tag})]})}),a.jsx("td",{children:a.jsx("div",{className:"receiver-cell",children:a.jsx("span",{className:"receiver-name",children:Y.receiverName||"-"})})}),a.jsx("td",{children:a.jsx("div",{className:"vendor-cell",children:Y.vendor?a.jsx(a.Fragment,{children:a.jsx("span",{className:"vendor-name",children:Y.vendor.vendorName})}):a.jsx("span",{className:"text-muted",children:"No vendor"})})}),a.jsx("td",{children:a.jsxs("div",{className:`status-badge ${(Y.exchangeType||"unknown").toLowerCase()}`,children:[a.jsx("span",{className:"dot"}),a.jsx("span",{children:Y.exchangeType||"N/A"})]})}),a.jsx("td",{children:a.jsxs("div",{className:"media-cell",children:[a.jsx(as,{size:14}),a.jsx("span",{children:Y.photos?.length||0})]})}),a.jsx("td",{className:"text-center",children:a.jsxs("div",{className:"action-buttons",children:[a.jsx("button",{className:"icon-btn",onClick:()=>he(Y),title:"View Detail",children:a.jsx(st,{size:16})}),a.jsx("button",{className:"icon-btn highlight",onClick:()=>ee(Y),title:"Assign Asset",children:a.jsx(Dp,{size:16})}),a.jsx("button",{className:"icon-btn",onClick:()=>Ke(Y),title:"Edit Asset",children:a.jsx(Er,{size:16})}),a.jsx("button",{className:"icon-btn danger",onClick:()=>re(Y.id),title:"Delete Asset",children:a.jsx(Qt,{size:16})})]})})]},Y.id)):a.jsx("tr",{children:a.jsx("td",{colSpan:"9",className:"text-center py-8 text-muted",children:"No assets found in the database."})})})]})})]}),a.jsx("style",{children:`
                .assets-page {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    padding-bottom: 2rem;
                }

                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .page-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .header-title h1 {
                    font-size: 2rem;
                    font-weight: 700;
                    color: #1e293b;
                    margin-bottom: 0.25rem;
                }

                .header-title p {
                    color: #64748b;
                    font-size: 0.9375rem;
                }

                .primary-btn {
                    background: #2563eb;
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 10px;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    border: none;
                    transition: all 0.2s;
                }

                .primary-btn:hover {
                    background: #1d4ed8;
                    transform: translateY(-1px);
                }

                .main-table-container {
                    background: white;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
                    overflow: hidden;
                }

                .table-controls {
                    padding: 1.25rem 1.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #f1f5f9;
                }

                .search-box {
                    position: relative;
                    flex: 1;
                    max-width: 400px;
                }

                .search-box svg {
                    position: absolute;
                    left: 12px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #94a3b8;
                }

                .search-box input {
                    width: 100%;
                    padding: 0.625rem 1rem 0.625rem 2.5rem;
                    border: 1px solid #e2e8f0;
                    border-radius: 10px;
                    font-size: 0.875rem;
                }

                .filter-group {
                    display: flex;
                    gap: 0.75rem;
                }

                .control-btn {
                    background: white;
                    border: 1px solid #e2e8f0;
                    padding: 0.625rem 1rem;
                    border-radius: 8px;
                    font-size: 0.875rem;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #475569;
                    cursor: pointer;
                    position: relative;
                    transition: all 0.2s;
                    white-space: nowrap;
                }

                .control-btn:hover {
                    border-color: #2563eb;
                    color: #2563eb;
                    background: #f8faff;
                }

                .control-btn.active {
                    border-color: #2563eb;
                    color: #2563eb;
                    background: #eff6ff;
                }

                .filter-indicator {
                    width: 6px;
                    height: 6px;
                    background: #2563eb;
                    border-radius: 50%;
                    position: absolute;
                    top: 8px;
                    right: 8px;
                }

                .filter-popover-wrapper {
                    position: relative;
                }

                .filter-popover {
                    position: absolute;
                    top: calc(100% + 12px);
                    right: 0;
                    width: 280px;
                    z-index: 100;
                    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
                    border: 1px solid #e2e8f0;
                    background: white;
                    border-radius: 12px;
                    padding: 0 !important;
                    animation: popIn 0.2s ease-out;
                    overflow: hidden;
                }

                @keyframes popIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .popover-header {
                    padding: 1rem 1.25rem;
                    border-bottom: 1px solid #f1f5f9;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .popover-header h3 {
                    font-size: 0.875rem;
                    font-weight: 700;
                    color: #1e293b;
                    margin: 0;
                }

                .popover-body {
                    padding: 1.25rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .filter-item {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .filter-item label {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: #64748b;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .filter-item select {
                    padding: 0.5rem;
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                    font-size: 0.875rem;
                    background: #f8fafc;
                    outline: none;
                }

                .popover-footer {
                    padding: 1rem 1.25rem;
                    background: #f8fafc;
                    border-top: 1px solid #f1f5f9;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .text-btn {
                    background: none;
                    border: none;
                    color: #64748b;
                    font-size: 0.875rem;
                    font-weight: 600;
                    cursor: pointer;
                }

                .text-btn:hover {
                    color: #2563eb;
                }

                .apply-btn {
                    background: #2563eb;
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: 6px;
                    font-size: 0.875rem;
                    font-weight: 600;
                    cursor: pointer;
                }

                .active-filters {
                    padding: 0.75rem 1.5rem;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    align-items: center;
                    border-bottom: 1px solid #f1f5f9;
                    background: white;
                }

                .filter-badge {
                    display: flex;
                    align-items: center;
                    gap: 0.35rem;
                    background: #eff6ff;
                    color: #2563eb;
                    padding: 0.25rem 0.625rem;
                    border-radius: 20px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    border: 1px solid #dbeafe;
                }

                .badge-label {
                    color: #60a5fa;
                    text-transform: capitalize;
                }

                .filter-badge button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: none;
                    border: none;
                    color: #2563eb;
                    cursor: pointer;
                    padding: 0;
                    border-radius: 50%;
                }

                .clear-all-link {
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: #64748b;
                    background: none;
                    border: none;
                    cursor: pointer;
                    margin-left: 0.5rem;
                }

                .clear-all-link:hover {
                    color: #2563eb;
                    text-decoration: underline;
                }

                .icon-btn-sm {
                    width: 24px;
                    height: 24px;
                    border-radius: 4px;
                    border: none;
                    background: transparent;
                    color: #94a3b8;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .premium-table {
                    width: 100%;
                    border-collapse: collapse;
                    min-width: 1100px;
                }

                .table-overflow {
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    padding-bottom: 1rem;
                }

                th {
                    text-align: left;
                    padding: 1rem 1.5rem;
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: #64748b;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    background: #f8fafc;
                    border-bottom: 1px solid #e2e8f0;
                }

                td {
                    padding: 1rem 1.5rem;
                    vertical-align: middle;
                    border-bottom: 1px solid #f1f5f9;
                }

                .table-row-hover:hover {
                    background: #fcfdfe;
                }

                .asset-profile-cell {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .asset-icon {
                    width: 40px;
                    height: 40px;
                    background: #f8fafc;
                    color: #64748b;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid #e2e8f0;
                }

                .asset-main {
                    display: flex;
                    flex-direction: column;
                }

                .asset-name {
                    font-weight: 600;
                    color: #1e293b;
                    font-size: 0.9375rem;
                }

                .asset-id {
                    font-size: 0.75rem;
                }

                .receiver-cell {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .receiver-name {
                    font-weight: 500;
                    color: #1e293b;
                    font-size: 0.875rem;
                }

                .vendor-cell {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .vendor-name {
                    font-weight: 500;
                    color: #1e293b;
                    font-size: 0.875rem;
                }

                .tag-cell, .media-cell {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #64748b;
                    font-size: 0.875rem;
                }

                .status-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 4px 10px;
                    border-radius: 6px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: capitalize;
                }

                .status-badge .dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                }

                .status-badge.issue { background: #eff6ff; color: #1d4ed8; }
                .status-badge.issue .dot { background: #2563eb; }

                .status-badge.return { background: #fff1f2; color: #be123c; }
                .status-badge.return .dot { background: #ef4444; }

                .status-badge.replace { background: #fefce8; color: #a16207; }
                .status-badge.replace .dot { background: #eab308; }

                .procurement-badge {
                    padding: 4px 10px;
                    border-radius: 6px;
                    font-size: 0.7rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    display: inline-block;
                }

                .procurement-badge.purchased {
                    background: #ecfdf5;
                    color: #059669;
                    border: 1px solid #d1fae5;
                }

                .procurement-badge.vendor {
                    background: #fef2f2;
                    color: #dc2626;
                    border: 1px solid #fee2e2;
                }

                .action-buttons {
                    display: flex;
                    gap: 0.5rem;
                    justify-content: center;
                }

                .icon-btn {
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    background: white;
                    border: 1px solid #e2e8f0;
                    color: #64748b;
                    transition: all 0.2s;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
                }

                .icon-btn:hover {
                    background: #f8fafc;
                    border-color: #2563eb;
                    color: #2563eb;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
                }

                .icon-btn.danger:hover {
                    background: #fef2f2;
                    border-color: #ef4444;
                    color: #ef4444;
                }

                .icon-btn.highlight:hover {
                    background: #f0fdf4;
                    border-color: #22c55e;
                    color: #22c55e;
                }

                .loading-state {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 4rem;
                    gap: 1rem;
                    color: #64748b;
                }

                .loader {
                    width: 40px;
                    height: 40px;
                    border: 3px solid #f1f5f9;
                    border-top: 3px solid #2563eb;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `})]})},hy=({isOpen:o,onClose:c,onSave:d,initialData:s=null})=>{const[u,f]=j.useState(""),[g,y]=j.useState("");if(j.useEffect(()=>{o&&s?(f(s.deptName||s.name||""),y(s.deptCode||s.deptId||s.id||"")):o&&(f(""),y(""))},[o,s]),!o)return null;const x=p=>{if(p.preventDefault(),!u.trim()||!g.trim()){alert("Please enter both Department Name and Department ID.");return}d({deptName:u.trim(),deptCode:g.trim(),id:s?s.id||s.deptId:null}),c()};return a.jsxs("div",{className:"modal-overlay",onClick:c,children:[a.jsxs("div",{className:"modal-content card",style:{maxWidth:"400px"},onClick:p=>p.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsxs("div",{children:[a.jsx("h2",{children:s?"Edit Department":"Add New Department"}),a.jsx("p",{className:"subtitle",children:s?"Update department details.":"Create a new department category."})]}),a.jsx("button",{className:"close-btn",onClick:c,children:a.jsx(Ve,{size:20})})]}),a.jsxs("form",{onSubmit:x,className:"employee-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Department Code"}),a.jsx("input",{type:"text",value:g,onChange:p=>y(p.target.value),required:!0,placeholder:"e.g. FIN001",disabled:!!s})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Department Name"}),a.jsx("input",{type:"text",value:u,onChange:p=>f(p.target.value),required:!0,placeholder:"e.g. Finance, Marketing",autoFocus:!0})]}),a.jsxs("div",{className:"modal-footer",style:{marginTop:"1.5rem",display:"flex",gap:"1rem",justifyContent:"flex-end"},children:[a.jsx("button",{type:"button",className:"secondary-btn",onClick:c,children:"Cancel"}),a.jsxs("button",{type:"submit",className:"primary-btn",children:[s?"Update":"Create"," Department"]})]})]})]}),a.jsx("style",{children:`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.4);
                    backdrop-filter: blur(8px);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 9999;
                    padding: 1rem;
                }
                
                .modal-content {
                    width: 100%;
                    background: white;
                    border-radius: 16px;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    overflow: visible;
                    position: relative;
                }

                .modal-header {
                    padding: 1.5rem;
                    border-bottom: 1px solid #e2e8f0;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }

                .modal-header h2 {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #1e293b;
                    margin-bottom: 0.25rem;
                }

                .subtitle {
                    font-size: 0.875rem;
                    color: #64748b;
                }

                .close-btn {
                    background: none;
                    border: none;
                    color: #94a3b8;
                    cursor: pointer;
                    padding: 0.5rem;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                }

                .close-btn:hover {
                    background: #f1f5f9;
                    color: #475569;
                }

                .employee-form {
                    padding: 1.5rem;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }

                .form-group label {
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: #1e293b;
                }

                .form-group input {
                    padding: 0.625rem 0.875rem;
                    border: 1px solid #cbd5e1;
                    border-radius: 6px;
                    font-size: 0.875rem;
                    outline: none;
                    transition: border-color 0.2s;
                }

                .form-group input:focus {
                    border-color: #3b82f6;
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                }

                .modal-footer {
                    margin-top: 1.5rem;
                }

                .primary-btn {
                    background: #3b82f6;
                    color: white;
                    padding: 0.625rem 1.25rem;
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    border: none;
                    cursor: pointer;
                    transition: background 0.2s;
                }

                .primary-btn:hover {
                    background: #2563eb;
                }

                .secondary-btn {
                    background: white;
                    border: 1px solid #e2e8f0;
                    color: #1e293b;
                    padding: 0.625rem 1.25rem;
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .secondary-btn:hover {
                    background: #f8fafc;
                    border-color: #cbd5e1;
                }
            `})]})},gy=({isOpen:o,onClose:c,onSave:d,initialData:s=null})=>{const[u,f]=j.useState(""),[g,y]=j.useState("");if(j.useEffect(()=>{o&&s?(f(s.roleName||s.name||""),y(s.roleCode||s.roleId||s.id||"")):o&&(f(""),y(""))},[o,s]),!o)return null;const x=p=>{if(p.preventDefault(),!u.trim()||!g.trim()){alert("Please enter both Role Name and Role Code.");return}d({roleName:u.trim(),roleCode:g.trim(),id:s?s.id||s.roleId:null}),c()};return a.jsxs("div",{className:"modal-overlay",onClick:c,children:[a.jsxs("div",{className:"modal-content card",style:{maxWidth:"400px"},onClick:p=>p.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsxs("div",{children:[a.jsx("h2",{children:s?"Edit Job Role":"Add New Role"}),a.jsx("p",{className:"subtitle",children:s?"Update role details.":"Create a new job title/role."})]}),a.jsx("button",{className:"close-btn",onClick:c,children:a.jsx(Ve,{size:20})})]}),a.jsxs("form",{onSubmit:x,className:"employee-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Role Code"}),a.jsx("input",{type:"text",value:g,onChange:p=>y(p.target.value),required:!0,placeholder:"e.g. DEV, HR, ADMIN",disabled:!!s})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Role Name"}),a.jsx("input",{type:"text",value:u,onChange:p=>f(p.target.value),required:!0,placeholder:"e.g. Lead Designer",autoFocus:!0})]}),a.jsxs("div",{className:"modal-footer",style:{marginTop:"1.5rem",display:"flex",gap:"1rem",justifyContent:"flex-end"},children:[a.jsx("button",{type:"button",className:"secondary-btn",onClick:c,children:"Cancel"}),a.jsxs("button",{type:"submit",className:"primary-btn",children:[s?"Update":"Create"," Role"]})]})]})]}),a.jsx("style",{children:`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.4);
                    backdrop-filter: blur(8px);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 9999;
                    padding: 1rem;
                }
                
                .modal-content {
                    width: 100%;
                    background: white;
                    border-radius: 16px;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    overflow: visible;
                    position: relative;
                }

                .modal-header {
                    padding: 1.5rem;
                    border-bottom: 1px solid #e2e8f0;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }

                .modal-header h2 {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #1e293b;
                    margin-bottom: 0.25rem;
                }

                .subtitle {
                    font-size: 0.875rem;
                    color: #64748b;
                }

                .close-btn {
                    background: none;
                    border: none;
                    color: #94a3b8;
                    cursor: pointer;
                    padding: 0.5rem;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                }

                .close-btn:hover {
                    background: #f1f5f9;
                    color: #475569;
                }

                .employee-form {
                    padding: 1.5rem;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }

                .form-group label {
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: #1e293b;
                }

                .form-group input {
                    padding: 0.625rem 0.875rem;
                    border: 1px solid #cbd5e1;
                    border-radius: 6px;
                    font-size: 0.875rem;
                    outline: none;
                    transition: border-color 0.2s;
                }

                .form-group input:focus {
                    border-color: #3b82f6;
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                }

                .modal-footer {
                    margin-top: 1.5rem;
                }

                .primary-btn {
                    background: #3b82f6;
                    color: white;
                    padding: 0.625rem 1.25rem;
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    border: none;
                    cursor: pointer;
                    transition: background 0.2s;
                }

                .primary-btn:hover {
                    background: #2563eb;
                }

                .secondary-btn {
                    background: white;
                    border: 1px solid #e2e8f0;
                    color: #1e293b;
                    padding: 0.625rem 1.25rem;
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .secondary-btn:hover {
                    background: #f8fafc;
                    border-color: #cbd5e1;
                }
            `})]})},xy=({isOpen:o,onClose:c,onSave:d,initialData:s=null})=>{const[u,f]=j.useState(""),[g,y]=j.useState("");if(j.useEffect(()=>{o&&s?(f(s.entityName||s.name||""),y(s.entityCode||s.entityId||s.id||"")):o&&(f(""),y(""))},[o,s]),!o)return null;const x=p=>{if(p.preventDefault(),!u.trim()||!g.trim()){alert("Please enter both Entity Name and Entity Code.");return}d({entityName:u.trim(),entityCode:g.trim(),id:s?s.id||s.entityId:null}),c()};return a.jsxs("div",{className:"modal-overlay",onClick:c,children:[a.jsxs("div",{className:"modal-content card",style:{maxWidth:"400px"},onClick:p=>p.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsxs("div",{children:[a.jsx("h2",{children:s?"Edit Entity":"Add New Entity"}),a.jsx("p",{className:"subtitle",children:s?"Update entity details.":"Create a new company entity."})]}),a.jsx("button",{className:"close-btn",onClick:c,children:a.jsx(Ve,{size:20})})]}),a.jsxs("form",{onSubmit:x,className:"employee-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Entity Code"}),a.jsx("input",{type:"text",value:g,onChange:p=>y(p.target.value),required:!0,placeholder:"e.g. ACME, GLOBAL",disabled:!!s})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Entity Name"}),a.jsx("input",{type:"text",value:u,onChange:p=>f(p.target.value),required:!0,placeholder:"e.g. Acme Corp",autoFocus:!0})]}),a.jsxs("div",{className:"modal-footer",style:{marginTop:"1.5rem",display:"flex",gap:"1rem",justifyContent:"flex-end"},children:[a.jsx("button",{type:"button",className:"secondary-btn",onClick:c,children:"Cancel"}),a.jsxs("button",{type:"submit",className:"primary-btn",children:[s?"Update":"Create"," Entity"]})]})]})]}),a.jsx("style",{children:`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.4);
                    backdrop-filter: blur(8px);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 9999;
                    padding: 1rem;
                }
                
                .modal-content {
                    width: 100%;
                    background: white;
                    border-radius: 16px;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    overflow: visible;
                    position: relative;
                }

                .modal-header {
                    padding: 1.5rem;
                    border-bottom: 1px solid #e2e8f0;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }

                .modal-header h2 {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #1e293b;
                    margin-bottom: 0.25rem;
                }

                .subtitle {
                    font-size: 0.875rem;
                    color: #64748b;
                }

                .close-btn {
                    background: none;
                    border: none;
                    color: #94a3b8;
                    cursor: pointer;
                    padding: 0.5rem;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                }

                .close-btn:hover {
                    background: #f1f5f9;
                    color: #475569;
                }

                .employee-form {
                    padding: 1.5rem;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }

                .form-group label {
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: #1e293b;
                }

                .form-group input {
                    padding: 0.625rem 0.875rem;
                    border: 1px solid #cbd5e1;
                    border-radius: 6px;
                    font-size: 0.875rem;
                    outline: none;
                    transition: border-color 0.2s;
                }

                .form-group input:focus {
                    border-color: #3b82f6;
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                }

                .modal-footer {
                    margin-top: 1.5rem;
                }

                .primary-btn {
                    background: #3b82f6;
                    color: white;
                    padding: 0.625rem 1.25rem;
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    border: none;
                    cursor: pointer;
                    transition: background 0.2s;
                }

                .primary-btn:hover {
                    background: #2563eb;
                }

                .secondary-btn {
                    background: white;
                    border: 1px solid #e2e8f0;
                    color: #1e293b;
                    padding: 0.625rem 1.25rem;
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .secondary-btn:hover {
                    background: #f8fafc;
                    border-color: #cbd5e1;
                }
            `})]})},by=({isOpen:o,onClose:c,onSave:d,initialData:s=null})=>{const[u,f]=j.useState("");if(j.useEffect(()=>{o&&s?f(s.typeName||s.name||""):o&&f("")},[o,s]),!o)return null;const g=y=>{if(y.preventDefault(),!u.trim()){alert("Please enter Vendor Type Name.");return}d({typeName:u.trim(),id:s?s.id||s.typeId:null}),c()};return a.jsxs("div",{className:"modal-overlay",onClick:c,children:[a.jsxs("div",{className:"modal-content card",style:{maxWidth:"400px"},onClick:y=>y.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsxs("div",{children:[a.jsx("h2",{children:s?"Edit Vendor Type":"Add New Vendor Type"}),a.jsx("p",{className:"subtitle",children:s?"Update vendor type details.":"Create a new vendor classification."})]}),a.jsx("button",{className:"close-btn",onClick:c,children:a.jsx(Ve,{size:20})})]}),a.jsxs("form",{onSubmit:g,className:"type-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Type Name"}),a.jsx("input",{type:"text",value:u,onChange:y=>f(y.target.value),required:!0,placeholder:"e.g. IT Infrastructure, Shipping",autoFocus:!0})]}),a.jsxs("div",{className:"modal-footer",style:{marginTop:"1.5rem",display:"flex",gap:"1rem",justifyContent:"flex-end"},children:[a.jsx("button",{type:"button",className:"secondary-btn",onClick:c,children:"Cancel"}),a.jsxs("button",{type:"submit",className:"primary-btn",children:[s?"Update":"Create"," Type"]})]})]})]}),a.jsx("style",{children:`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.4);
                    backdrop-filter: blur(8px);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 9999;
                    padding: 1rem;
                }
                
                .modal-content {
                    width: 100%;
                    background: white;
                    border-radius: 16px;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    overflow: visible;
                    position: relative;
                }

                .modal-header {
                    padding: 1.5rem;
                    border-bottom: 1px solid #e2e8f0;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }

                .modal-header h2 {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #1e293b;
                    margin-bottom: 0.25rem;
                }

                .subtitle {
                    font-size: 0.875rem;
                    color: #64748b;
                }

                .close-btn {
                    background: none;
                    border: none;
                    color: #94a3b8;
                    cursor: pointer;
                    padding: 0.5rem;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                }

                .close-btn:hover {
                    background: #f1f5f9;
                    color: #475569;
                }

                .type-form {
                    padding: 1.5rem;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }

                .form-group label {
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: #1e293b;
                }

                .form-group input {
                    padding: 0.625rem 0.875rem;
                    border: 1px solid #cbd5e1;
                    border-radius: 6px;
                    font-size: 0.875rem;
                    outline: none;
                    transition: border-color 0.2s;
                }

                .form-group input:focus {
                    border-color: #3b82f6;
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                }

                .modal-footer {
                    margin-top: 1.5rem;
                }

                .primary-btn {
                    background: #3b82f6;
                    color: white;
                    padding: 0.625rem 1.25rem;
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    border: none;
                    cursor: pointer;
                    transition: background 0.2s;
                }

                .primary-btn:hover {
                    background: #2563eb;
                }

                .secondary-btn {
                    background: white;
                    border: 1px solid #e2e8f0;
                    color: #1e293b;
                    padding: 0.625rem 1.25rem;
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .secondary-btn:hover {
                    background: #f8fafc;
                    border-color: #cbd5e1;
                }
            `})]})},yy=({isOpen:o,onClose:c,onSave:d,initialData:s})=>{const[u,f]=j.useState(""),[g,y]=j.useState([]),[x,p]=j.useState(!1);j.useEffect(()=>{s?(f(s.typeName||""),y(s.fields||[])):(f(""),y([]))},[s,o]);const b=()=>{y([...g,{name:"",type:"text",required:!1,options:[]}])},w=V=>{y(g.filter((T,k)=>k!==V))},B=(V,T)=>{const k=[...g];k[V]={...k[V],...T},y(k)},F=async V=>{if(V.preventDefault(),!u.trim()){alert("Please enter an asset type name");return}p(!0);try{await d({id:s?.id,typeName:u,fields:g}),c()}catch(T){console.error("Error saving asset type:",T)}finally{p(!1)}};return o?a.jsx("div",{className:"modal-overlay",onClick:c,children:a.jsxs("div",{className:"modal-container-wide animate-pop",onClick:V=>V.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("div",{className:"header-info",children:a.jsxs("div",{children:[a.jsx("h3",{children:s?"Edit Asset Configuration":"New Asset Configuration"}),a.jsx("p",{children:"Define custom fields and technical specifications for this asset type."})]})}),a.jsx("button",{className:"close-btn",onClick:c,children:a.jsx(Ve,{size:20})})]}),a.jsxs("form",{onSubmit:F,className:"modal-body scrollable-body",children:[a.jsxs("div",{className:"form-group-sticky",children:[a.jsx("label",{children:"Asset Type Name"}),a.jsx("input",{type:"text",value:u,onChange:V=>f(V.target.value),placeholder:"e.g. Laptop, Monitor, Charger",required:!0,className:"primary-input"})]}),a.jsxs("div",{className:"configuration-section",children:[a.jsxs("div",{className:"section-title-bar",children:[a.jsx("h4",{children:"Custom Maintenance Fields"}),a.jsxs("button",{type:"button",className:"add-field-btn",onClick:b,children:[a.jsx(ra,{size:14})," Add Field"]})]}),g.length===0?a.jsxs("div",{className:"empty-fields-state",children:[a.jsx(fb,{size:32}),a.jsx("p",{children:"No custom fields defined. Add fields like RAM, Processor, or Serial Number patterns."})]}):a.jsx("div",{className:"fields-list",children:g.map((V,T)=>a.jsxs("div",{className:"field-row-card",children:[a.jsx("div",{className:"field-drag-handle",children:a.jsx(cb,{size:16})}),a.jsxs("div",{className:"field-controls",children:[a.jsxs("div",{className:"field-input-group",children:[a.jsx("label",{children:"Field Name"}),a.jsx("input",{type:"text",value:V.name,onChange:k=>B(T,{name:k.target.value}),placeholder:"Field Name (e.g. RAM)"})]}),a.jsxs("div",{className:"field-input-group",children:[a.jsx("label",{children:"Data Type"}),a.jsxs("select",{value:V.type,onChange:k=>B(T,{type:k.target.value}),children:[a.jsx("option",{value:"text",children:"Text"}),a.jsx("option",{value:"number",children:"Number"}),a.jsx("option",{value:"select",children:"Dropdown"}),a.jsx("option",{value:"date",children:"Date"})]})]}),a.jsx("div",{className:"field-checkbox-group",children:a.jsxs("label",{className:"checkbox-container",children:[a.jsx("input",{type:"checkbox",checked:V.required,onChange:k=>B(T,{required:k.target.checked})}),a.jsx("span",{className:"checkmark"}),"Required"]})}),a.jsx("button",{type:"button",className:"remove-field-btn",onClick:()=>w(T),children:a.jsx(Qt,{size:16})})]}),V.type==="select"&&a.jsxs("div",{className:"field-options-row",children:[a.jsx("label",{children:"Options (comma separated)"}),a.jsx("input",{type:"text",value:V.options?.join(", ")||"",onChange:k=>B(T,{options:k.target.value.split(",").map(M=>M.trim()).filter(M=>M)}),placeholder:"Option 1, Option 2, Option 3"})]})]},T))})]}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{type:"button",className:"secondary-btn",onClick:c,children:"Cancel"}),a.jsx("button",{type:"submit",className:"submit-btn primary-glow",disabled:x,children:x?"Saving...":s?"Update Configuration":"Create Configuration"})]})]}),a.jsx("style",{children:`
                    .modal-overlay {
                        position: fixed;
                        inset: 0;
                        background: rgba(15, 23, 42, 0.4);
                        backdrop-filter: blur(4px);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 2100;
                        padding: 1rem;
                    }

                    .modal-container-wide {
                        background: white;
                        width: 100%;
                        max-width: 800px;
                        border-radius: 20px;
                        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2);
                        display: flex;
                        flex-direction: column;
                        max-height: 90vh;
                        overflow: hidden;
                    }

                    .modal-header {
                        padding: 1.5rem 2rem;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        border-bottom: 1px solid #f1f5f9;
                        background: #fff;
                    }

                    // .asset-config-icon {
                    //     background: #eff6ff !important;
                    //     color: #2563eb !important;
                    // }

                    .modal-footer {
                        display: flex;
                        justify-content: flex-end;
                        gap: 1rem;
                        padding: 1.5rem 2rem;
                        background: #f8fafc;
                        border-top: 1px solid #f1f5f9;
                    }

                    .secondary-btn {
                        padding: 0.75rem 1.75rem;
                        border-radius: 12px;
                        font-weight: 600;
                        font-size: 0.875rem;
                        background: white;
                        border: 1px solid #e2e8f0;
                        color: #64748b;
                        cursor: pointer;
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    }

                    .secondary-btn:hover {
                        background: #f8fafc;
                        color: #1e293b;
                        border-color: #cbd5e1;
                        transform: translateY(-1px);
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
                    }

                    .secondary-btn:active {
                        transform: translateY(0);
                    }

                    .submit-btn {
                        padding: 0.75rem 2.25rem;
                        border-radius: 12px;
                        font-weight: 700;
                        font-size: 0.875rem;
                        background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                        color: white;
                        border: none;
                        cursor: pointer;
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                    }

                    .submit-btn:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
                        filter: brightness(1.1);
                    }

                    .submit-btn:active {
                        transform: translateY(-1px);
                    }

                    .submit-btn:disabled {
                        opacity: 0.7;
                        cursor: not-allowed;
                        transform: none;
                        box-shadow: none;
                    }

                    .modal-body {
                        padding: 2rem;
                        overflow-y: auto;
                        flex: 1;
                    }

                    .form-group-sticky {
                        margin-bottom: 2rem;
                        padding-bottom: 1.5rem;
                        border-bottom: 1px dashed #e2e8f0;
                    }

                    .primary-input {
                        width: 100%;
                        padding: 1rem 1.25rem;
                        border: 2px solid #e2e8f0;
                        border-radius: 12px;
                        font-size: 1rem;
                        font-weight: 600;
                        transition: all 0.2s;
                    }

                    .primary-input:focus {
                        border-color: #2563eb;
                        box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
                        outline: none;
                    }

                    .section-title-bar {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 1.5rem;
                    }

                    .add-field-btn {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        background: #3b82f6;
                        color: white;
                        border: none;
                        padding: 0.5rem 1rem;
                        border-radius: 8px;
                        font-size: 0.8125rem;
                        font-weight: 700;
                        cursor: pointer;
                        transition: all 0.2s;
                    }

                    .add-field-btn:hover {
                        background: #2563eb;
                        transform: translateY(-1px);
                    }

                    .field-row-card {
                        background: #f8fafc;
                        border: 1px solid #e2e8f0;
                        border-radius: 12px;
                        padding: 1.25rem;
                        margin-bottom: 1rem;
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;
                        position: relative;
                        transition: all 0.2s;
                    }

                    .field-row-card:hover {
                        border-color: #cbd5e1;
                        background: #fff;
                    }

                    .field-drag-handle {
                        position: absolute;
                        left: 4px;
                        top: 50%;
                        transform: translateY(-50%);
                        color: #cbd5e1;
                        cursor: grab;
                    }

                    .field-controls {
                        display: flex;
                        align-items: flex-end;
                        gap: 1rem;
                        padding-left: 0.5rem;
                    }

                    .field-input-group {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        gap: 0.375rem;
                    }

                    .field-input-group label {
                        font-size: 0.6875rem;
                        font-weight: 800;
                        color: #64748b;
                        text-transform: uppercase;
                        letter-spacing: 0.025em;
                    }

                    .field-input-group input, 
                    .field-input-group select {
                        padding: 0.625rem 0.875rem;
                        border: 1px solid #e2e8f0;
                        border-radius: 8px;
                        font-size: 0.875rem;
                    }

                    .field-checkbox-group {
                        padding-bottom: 0.75rem;
                    }

                    .checkbox-container {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        font-size: 0.8125rem;
                        font-weight: 600;
                        color: #475569;
                        cursor: pointer;
                    }

                    .remove-field-btn {
                        background: #fef2f2;
                        color: #ef4444;
                        border: none;
                        width: 36px;
                        height: 36px;
                        border-radius: 8px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        transition: all 0.2s;
                    }

                    .remove-field-btn:hover {
                        background: #fee2e2;
                        color: #dc2626;
                    }

                    .field-options-row {
                        padding-top: 0.75rem;
                        border-top: 1px solid #f1f5f9;
                        display: flex;
                        flex-direction: column;
                        gap: 0.375rem;
                    }

                    .field-options-row label {
                        font-size: 0.6875rem;
                        font-weight: 800;
                        color: #64748b;
                        text-transform: uppercase;
                    }

                    .field-options-row input {
                        padding: 0.625rem 0.875rem;
                        border: 1px solid #e2e8f0;
                        border-radius: 8px;
                        font-size: 0.875rem;
                        background: #fff;
                    }

                    .empty-fields-state {
                        padding: 3rem;
                        text-align: center;
                        background: #f8fafc;
                        border: 2px dashed #e2e8f0;
                        border-radius: 16px;
                        color: #94a3b8;
                    }

                    .empty-fields-state p {
                        margin-top: 1rem;
                        font-size: 0.875rem;
                        max-width: 300px;
                        margin-left: auto;
                        margin-right: auto;
                    }
                `})]})}):null},vy=()=>{const[o,c]=j.useState("departments"),[d,s]=j.useState([]),[u,f]=j.useState([]),[g,y]=j.useState([]),[x,p]=j.useState([]),[b,w]=j.useState([]),[B,F]=j.useState(!1),[V,T]=j.useState(!1),[k,M]=j.useState(!1),[P,te]=j.useState(!1),[le,N]=j.useState(!1),[W,Q]=j.useState(null),[me,ye]=j.useState(null),[Le,re]=j.useState(null),[Ce,Ke]=j.useState(null),[ee,he]=j.useState(null),L=async()=>{const D=G=>Array.isArray(G)?G:G&&G.data&&Array.isArray(G.data)?G.data:G&&G.content&&Array.isArray(G.content)?G.content:[];try{s(D(await xe.getDepartments()))}catch(G){console.error(G)}try{f(D(await xe.getRoles()))}catch(G){console.error(G)}try{y(D(await xe.getEntities()))}catch(G){console.error(G)}try{p(D(await xe.getVendorTypes()))}catch(G){console.error(G)}try{const G=await xe.getAssetTypes();w(D(G))}catch(G){console.error("Failed to fetch asset types:",G),w([])}};j.useEffect(()=>{L()},[]);const ae=async D=>{try{D.id?(await xe.updateDepartment(D.id,D),alert("Department updated successfully!")):(await xe.createDepartment(D),alert("Department added successfully!")),L()}catch(G){alert("Failed to save department: "+G.message)}},de=async D=>{if(window.confirm("Are you sure you want to delete this department?"))try{await xe.deleteDepartment(D),L()}catch(G){alert("Failed to delete department: "+G.message)}},Y=async D=>{try{D.id?(await xe.updateRole(D.id,D),alert("Role updated successfully!")):(await xe.createRole(D),alert("Role added successfully!")),L()}catch(G){alert("Failed to save role: "+G.message)}},oe=async D=>{if(window.confirm("Are you sure you want to delete this role?"))try{await xe.deleteRole(D),L()}catch(G){alert("Failed to delete role: "+G.message)}},C=async D=>{try{D.id?(await xe.updateEntity(D.id,D),alert("Entity updated successfully!")):(await xe.createEntity(D),alert("Entity added successfully!")),L()}catch(G){alert("Failed to save entity: "+G.message)}},Z=async D=>{if(window.confirm("Are you sure you want to delete this entity?"))try{await xe.deleteEntity(D),L()}catch(G){alert("Failed to delete entity: "+G.message)}},ie=async D=>{try{D.id?(await xe.updateVendorType(D.id,D),alert("Vendor type updated successfully!")):(await xe.createVendorType(D),alert("Vendor type added successfully!")),L()}catch(G){alert("Failed to save vendor type: "+G.message)}},se=async D=>{if(window.confirm("Are you sure you want to delete this vendor type?"))try{await xe.deleteVendorType(D),L()}catch(G){alert("Failed to delete vendor type: "+G.message)}},O=async D=>{try{D.id?(await xe.updateAssetType(D.id,D),alert("Asset configuration updated successfully!")):(await xe.createAssetType(D),alert("Asset configuration added successfully!")),L()}catch(G){alert("Failed to save asset configuration: "+G.message)}},$=async D=>{if(window.confirm("Are you sure you want to delete this asset configuration?"))try{await xe.deleteAssetType(D),L()}catch(G){alert("Failed to delete asset configuration: "+G.message)}},ce=D=>{Q(D),F(!0)},Ae=D=>{ye(D),T(!0)},K=D=>{re(D),M(!0)},z=D=>{Ke(D),te(!0)},v=D=>{he(D),N(!0)},H=D=>D.deptName||D.name||D.departmentName||D,ne=D=>D.deptCode||D.deptId||D.id||"-",pe=D=>D.roleName||D.name||D,De=D=>D.roleCode||D.roleId||D.id||"-",Ze=D=>D.entityName||D.name||D,At=D=>D.entityCode||D.entityId||D.id||"-",qe=D=>D.typeName||D.name||D,Fe=()=>{switch(o){case"departments":return a.jsxs("div",{className:"settings-section animate-fade-in",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{children:[a.jsx("h3",{children:"Departments"}),a.jsx("p",{children:"Manage company departments and assign IDs."})]}),a.jsxs("button",{className:"primary-btn",onClick:()=>{Q(null),F(!0)},children:[a.jsx(ra,{size:16})," Add Department"]})]}),a.jsx("div",{className:"list-container",children:d.length===0?a.jsx("div",{className:"empty-state",children:"No departments found."}):a.jsxs("table",{className:"settings-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"ID"}),a.jsx("th",{children:"Department Name"}),a.jsx("th",{className:"text-center",children:"Action"})]})}),a.jsx("tbody",{children:d.map((D,G)=>a.jsxs("tr",{children:[a.jsx("td",{className:"id-cell",children:ne(D)}),a.jsx("td",{children:H(D)}),a.jsx("td",{className:"text-center",children:a.jsxs("div",{className:"action-buttons",children:[a.jsx("button",{className:"icon-btn-sm",onClick:()=>ce(D),title:"Edit",children:a.jsx(vl,{size:14})}),a.jsx("button",{className:"icon-btn-sm danger",onClick:()=>de(D.id||D.deptId),title:"Delete",children:a.jsx(Qt,{size:14})})]})})]},G))})]})})]});case"roles":return a.jsxs("div",{className:"settings-section animate-fade-in",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{children:[a.jsx("h3",{children:"Job Roles"}),a.jsx("p",{children:"Define job titles and designations available for employees."})]}),a.jsxs("button",{className:"primary-btn",onClick:()=>{ye(null),T(!0)},children:[a.jsx(ra,{size:16})," Add Role"]})]}),a.jsx("div",{className:"list-container",children:u.length===0?a.jsx("div",{className:"empty-state",children:"No roles found."}):a.jsxs("table",{className:"settings-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Role Code"}),a.jsx("th",{children:"Role Name"}),a.jsx("th",{className:"text-center",children:"Action"})]})}),a.jsx("tbody",{children:u.map((D,G)=>a.jsxs("tr",{children:[a.jsx("td",{className:"id-cell",children:De(D)}),a.jsx("td",{children:pe(D)}),a.jsx("td",{className:"text-center",children:a.jsxs("div",{className:"action-buttons",children:[a.jsx("button",{className:"icon-btn-sm",onClick:()=>Ae(D),title:"Edit",children:a.jsx(vl,{size:14})}),a.jsx("button",{className:"icon-btn-sm danger",onClick:()=>oe(D.id||D.roleId),title:"Delete",children:a.jsx(Qt,{size:14})})]})})]},G))})]})})]});case"entities":return a.jsxs("div",{className:"settings-section animate-fade-in",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{children:[a.jsx("h3",{children:"Business Entities"}),a.jsx("p",{children:"Manage legal entities and subsidiaries."})]}),a.jsxs("button",{className:"primary-btn",onClick:()=>{re(null),M(!0)},children:[a.jsx(ra,{size:16})," Add Entity"]})]}),a.jsx("div",{className:"list-container",children:g.length===0?a.jsx("div",{className:"empty-state",children:"No entities found."}):a.jsxs("table",{className:"settings-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Entity Code"}),a.jsx("th",{children:"Entity Name"}),a.jsx("th",{className:"text-center",children:"Action"})]})}),a.jsx("tbody",{children:g.map((D,G)=>a.jsxs("tr",{children:[a.jsx("td",{className:"id-cell",children:At(D)}),a.jsx("td",{children:Ze(D)}),a.jsx("td",{className:"text-center",children:a.jsxs("div",{className:"action-buttons",children:[a.jsx("button",{className:"icon-btn-sm",onClick:()=>K(D),title:"Edit",children:a.jsx(vl,{size:14})}),a.jsx("button",{className:"icon-btn-sm danger",onClick:()=>Z(D.id||D.entityId),title:"Delete",children:a.jsx(Qt,{size:14})})]})})]},G))})]})})]});case"vendor-types":return a.jsxs("div",{className:"settings-section animate-fade-in",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{children:[a.jsx("h3",{children:"Vendor Types"}),a.jsx("p",{children:"Manage vendor classifications and categories."})]}),a.jsxs("button",{className:"primary-btn",onClick:()=>{Ke(null),te(!0)},children:[a.jsx(ra,{size:16})," Add Type"]})]}),a.jsx("div",{className:"list-container",children:x.length===0?a.jsx("div",{className:"empty-state",children:"No vendor types found."}):a.jsxs("table",{className:"settings-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Type Name"}),a.jsx("th",{className:"text-center",children:"Action"})]})}),a.jsx("tbody",{children:x.map((D,G)=>a.jsxs("tr",{children:[a.jsx("td",{children:qe(D)}),a.jsx("td",{className:"text-center",children:a.jsxs("div",{className:"action-buttons",children:[a.jsx("button",{className:"icon-btn-sm",onClick:()=>z(D),title:"Edit",children:a.jsx(vl,{size:14})}),a.jsx("button",{className:"icon-btn-sm danger",onClick:()=>se(D.id||D.typeId),title:"Delete",children:a.jsx(Qt,{size:14})})]})})]},G))})]})})]});case"asset-configs":return a.jsxs("div",{className:"settings-section animate-fade-in",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{children:[a.jsx("h3",{children:"Asset Configurations"}),a.jsx("p",{children:"Define custom hardware specs and technical fields for different asset types."})]}),a.jsxs("button",{className:"primary-btn asset-btn",onClick:()=>{he(null),N(!0)},children:[a.jsx(ra,{size:16})," New Asset Type"]})]}),a.jsx("div",{className:"list-container",children:b.length===0?a.jsx("div",{className:"empty-state",children:"No asset configurations found."}):a.jsxs("table",{className:"settings-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Asset Type"}),a.jsx("th",{children:"Custom Fields"}),a.jsx("th",{className:"text-center",children:"Action"})]})}),a.jsx("tbody",{children:b.map((D,G)=>a.jsxs("tr",{children:[a.jsx("td",{className:"font-bold",children:D.typeName||D.name}),a.jsx("td",{children:a.jsxs("div",{className:"field-badges",children:[(D.fields||[]).slice(0,3).map((tt,_e)=>a.jsx("span",{className:"field-badge",children:tt.name},_e)),(D.fields||[]).length>3&&a.jsxs("span",{className:"field-badge-more",children:["+ ",(D.fields||[]).length-3," more"]}),(D.fields||[]).length===0&&a.jsx("span",{className:"text-muted italic",children:"No custom fields"})]})}),a.jsx("td",{className:"text-center",children:a.jsxs("div",{className:"action-buttons",children:[a.jsx("button",{className:"icon-btn-sm",onClick:()=>v(D),title:"Edit",children:a.jsx(vl,{size:14})}),a.jsx("button",{className:"icon-btn-sm danger",onClick:()=>$(D.id||D.typeId),title:"Delete",children:a.jsx(Qt,{size:14})})]})})]},G))})]})})]});default:return null}};return a.jsxs("div",{className:"settings-page",children:[a.jsx("header",{className:"page-header",children:a.jsxs("div",{className:"header-title",children:[a.jsx("h1",{children:"System Settings"}),a.jsx("p",{children:"Configure core system data and master lists."})]})}),a.jsxs("div",{className:"settings-container",children:[a.jsxs("div",{className:"settings-nav-bar",children:[a.jsxs("button",{className:`nav-tab ${o==="departments"?"active":""}`,onClick:()=>c("departments"),children:[a.jsx(da,{size:18}),a.jsx("span",{children:"Departments"})]}),a.jsxs("button",{className:`nav-tab ${o==="roles"?"active":""}`,onClick:()=>c("roles"),children:[a.jsx(Hb,{size:18}),a.jsx("span",{children:"Roles & Designations"})]}),a.jsxs("button",{className:`nav-tab ${o==="entities"?"active":""}`,onClick:()=>c("entities"),children:[a.jsx(Ba,{size:18}),a.jsx("span",{children:"Entities"})]}),a.jsxs("button",{className:`nav-tab ${o==="vendor-types"?"active":""}`,onClick:()=>c("vendor-types"),children:[a.jsx(Ep,{size:18}),a.jsx("span",{children:"Vendor Types"})]}),a.jsxs("button",{className:`nav-tab ${o==="asset-configs"?"active":""}`,onClick:()=>c("asset-configs"),children:[a.jsx(Ba,{size:18}),a.jsx("span",{children:"Asset Configurations"})]})]}),a.jsx("div",{className:"settings-content card",children:Fe()})]}),a.jsx(hy,{isOpen:B,onClose:()=>F(!1),onSave:ae,initialData:W}),a.jsx(gy,{isOpen:V,onClose:()=>T(!1),onSave:Y,initialData:me}),a.jsx(xy,{isOpen:k,onClose:()=>M(!1),onSave:C,initialData:Le}),a.jsx(by,{isOpen:P,onClose:()=>te(!1),onSave:ie,initialData:Ce}),a.jsx(yy,{isOpen:le,onClose:()=>N(!1),onSave:O,initialData:ee}),a.jsx("style",{children:`
                .settings-page {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .page-header {
                    margin-bottom: 2rem;
                }

                .settings-container {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .settings-nav-bar {
                    display: flex;
                    gap: 1rem;
                    border-bottom: 1px solid var(--border-color);
                    padding-bottom: 1rem;
                    overflow-x: auto;
                }

                .nav-tab {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.875rem 1.5rem;
                    border: none;
                    background: white;
                    color: var(--text-muted);
                    font-weight: 600;
                    font-size: 0.875rem;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s;
                    box-shadow: var(--shadow-sm);
                    border: 1px solid transparent;
                }

                .nav-tab:hover {
                    color: var(--text-main);
                    background: #f8fafc;
                }

                .nav-tab.active {
                    background: var(--primary);
                    color: white;
                    box-shadow: var(--shadow-md);
                }

                .settings-content {
                    padding: 2rem;
                    min-height: 500px;
                }

                .section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2rem;
                }

                .section-header h3 {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: var(--text-main);
                    margin-bottom: 0.25rem;
                }

                .section-header p {
                    font-size: 0.875rem;
                    color: var(--text-muted);
                }

                .settings-table {
                    width: 100%;
                    border-collapse: collapse;
                }

                .settings-table th {
                    text-align: left;
                    padding: 0.75rem 1rem;
                    background: #f8fafc;
                    color: var(--text-muted);
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    border-bottom: 1px solid var(--divider);
                }

                .settings-table td {
                    padding: 0.875rem 1rem;
                    border-bottom: 1px solid var(--divider);
                    font-size: 0.875rem;
                    color: var(--text-main);
                }

                .id-cell {
                    font-family: monospace;
                    color: var(--primary);
                    font-weight: 600;
                }

                .empty-state {
                    padding: 3rem;
                    text-align: center;
                    color: var(--text-muted);
                    font-style: italic;
                    background: #f8fafc;
                    border-radius: 8px;
                    border: 1px dashed var(--divider);
                }

                .animate-fade-in {
                    animation: fadeIn 0.3s ease-out;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(5px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .field-badges {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 4px;
                }

                .field-badge {
                    background: #eff6ff;
                    color: #2563eb;
                    padding: 2px 8px;
                    border-radius: 4px;
                    font-size: 0.75rem;
                    font-weight: 600;
                }

                .field-badge-more {
                    color: #64748b;
                    font-size: 0.75rem;
                    font-weight: 600;
                    padding: 2px 4px;
                }

                .asset-btn {
                    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%) !important;
                    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
                }
                .asset-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3) !important;
                    filter: brightness(1.1);
                }

                .primary-btn {
                    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
                    color: white;
                    padding: 0.625rem 1.25rem;
                    border-radius: 8px;
                    font-weight: 700;
                    font-size: 0.875rem;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
                }

                .primary-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
                    filter: brightness(1.1);
                }

                .primary-btn:active {
                    transform: translateY(-1px);
                }

                .action-buttons {
                    display: flex;
                    justify-content: center;
                    gap: 0.5rem;
                }

                .icon-btn-sm {
                    background: white;
                    border: 1px solid #e2e8f0;
                    color: #64748b;
                    padding: 0.4rem;
                    border-radius: 6px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                }

                .icon-btn-sm:hover {
                    background: #f1f5f9;
                    color: #3b82f6;
                    border-color: #cbd5e1;
                }

                .icon-btn-sm.danger:hover {
                    background: #fef2f2;
                    color: #ef4444;
                    border-color: #fca5a5;
                }

                @media (max-width: 768px) {
                    .settings-layout {
                        grid-template-columns: 1fr;
                    }
                }
            `})]})},jy=()=>{const[o]=k0(),c=o.get("token"),[d,s]=j.useState(1),[u,f]=j.useState({}),[g,y]=j.useState(!1),[x,p]=j.useState([]);j.useEffect(()=>{c&&b(c)},[c]);const b=async z=>{y(!0);try{console.log("🔍 Fetching existing onboarding data for token:",z);const v=await xe.getOnboardingByToken(z);v&&(console.log("✅ [DEBUG] Oboarding Data Found:",v),console.log("📦 [DEBUG] Data Keys:",Object.keys(v)),v.rejectedDocuments&&p(v.rejectedDocuments),w(v))}catch(v){console.error("❌ Failed to fetch existing data:",v)}finally{y(!1)}},w=z=>{if(!z)return;let v={...z};Object.keys(z).forEach(G=>{const tt=z[G];if(typeof tt=="string"&&tt.length>2&&(tt.trim().startsWith("{")||tt.trim().startsWith("[")))try{const _e=JSON.parse(tt);_e&&typeof _e=="object"&&(v[G]=_e)}catch{}}),k({fullName:v.fullName||"",phone:v.phoneNumber||v.phone||"",bloodGroup:v.bloodGroup||"",email:v.email||"",permAddress:v.permanentAddress||v.permAddress||"",presAddress:v.presentAddress||v.presAddress||"",fatherName:v.fathersName||v.fatherName||"",fatherPhone:v.fathersPhone||v.fatherPhone||"",motherName:v.mothersName||v.motherName||"",motherPhone:v.mothersPhone||v.motherPhone||"",emergencyName:v.emergencyContactName||v.emergencyName||"",emergencyRel:v.emergencyRelationship||v.emergencyRel||"",emergencyPhone:v.emergencyNumber||v.emergencyPhone||"",dateOfBirth:v.dateOfBirth?Array.isArray(v.dateOfBirth)?B(v.dateOfBirth):v.dateOfBirth.split("T")[0]:""});const H=(G,tt=[])=>{let _e=G;if(!_e&&tt.length>0&&(_e=ve(v,tt)),typeof _e=="string"&&tt.length>0){const lt=tt[0].toLowerCase(),kr=ve(v,[lt+"School",lt+"Institution",lt+"College",lt+"Name"])||_e,Mn=ve(v,[lt+"HallTicket",lt+"RollNo",lt+"Id"]),ls=ve(v,[lt+"Year",lt+"Passout",lt+"Date"]),Tr=ve(v,[lt+"Percentage",lt+"Cgpa",lt+"Marks"]),rs=et(v,[lt+"Certificate",lt+"File",lt+"Doc"]),is=et(v,[lt+"Marks",lt+"Memo",lt+"Transcript"]);_e={institutionName:kr,hallTicketNo:Mn,passoutYear:ls,percentageCgpa:Tr,certificatePath:rs,marksMemoPath:is}}if(!_e)return{school:"",htNumber:"",year:"",percentage:"",certificate:null};const xt=_e.certificatePath||et(_e,["certificate","certPath","doc","file"]),Cl=_e.marksMemoPath||et(_e,["marksMemo","marks","memo","transcript"]);return{school:_e.institutionName||ve(_e,["institution","college","school","university","board"])||"",htNumber:_e.hallTicketNo||ve(_e,["hallTicket","htNumber","rollNo"])||"",year:_e.passoutYear||ve(_e,["year","passout","date","passing","completion"])||"",percentage:_e.percentageCgpa||ve(_e,["percentage","cgpa","marks","score","grade"])||"",certificate:xt?{name:xt.split("/").pop(),isServerFile:!0,path:xt}:null,marksMemo:Cl?{name:Cl.split("/").pop(),isServerFile:!0,path:Cl}:null}},ne={ssc:H(v.ssc,["ssc","10th","secondary"]),inter:H(v.intermediate,["inter","12th","higherSecondary"]),grad:H(v.graduation,["graduation","degree","ug"]),postGrad:(v.postGraduations||[]).map(G=>H(G)),otherCerts:(v.otherCertificates||[]).map(G=>({institute:G.instituteName||ve(G,["institute","school","college"])||"",certNumber:G.certificateNumber||ve(G,["certificateNumber","regNo"])||"",certificate:G.certificatePath||et(G,["certificate","file"])?{name:(G.certificatePath||et(G,["certificate","file"])).split("/").pop(),isServerFile:!0,path:G.certificatePath||et(G,["certificate","file"])}:null}))};console.log("📚 [DEBUG] Mapped Education State:",ne),P(ne),le({internships:(v.internships||[]).map(G=>({company:G.companyName||"",joining:G.joiningDate||"",relieving:G.relievingDate||"",id:G.internshipId||"",duration:G.duration||"",offerLetter:G.offerLetterPath?{name:G.offerLetterPath.split("/").pop(),isServerFile:!0,path:G.offerLetterPath}:null,relievingLetter:G.experienceCertificatePath?{name:G.experienceCertificatePath.split("/").pop(),isServerFile:!0,path:G.experienceCertificatePath}:null})),workHistory:(v.workExperiences||[]).map(G=>({company:G.companyName||"",years:G.yearsOfExp||"",offerLetter:G.offerLetterPath?{name:G.offerLetterPath.split("/").pop(),isServerFile:!0,path:G.offerLetterPath}:null,relievingLetter:G.relievingLetterPath?{name:G.relievingLetterPath.split("/").pop(),isServerFile:!0,path:G.relievingLetterPath}:null,payslips:G.payslipsPath?{name:G.payslipsPath.split("/").pop(),isServerFile:!0,path:G.payslipsPath}:null,experienceCert:G.experienceCertificatePath?{name:G.experienceCertificatePath.split("/").pop(),isServerFile:!0,path:G.experienceCertificatePath}:null}))}),Le({name:v.bankName||"",branch:v.branchName||"",accNumber:v.accountNumber||"",ifsc:v.ifscCode||"",docType:(v.passbookPath,"Passbook"),docImage:v.passbookPath?{name:v.passbookPath.split("/").pop(),isServerFile:!0,path:v.passbookPath}:null,upiId:v.upiId||""});const pe=la(v,"PAN")||v.panProof||ve(v,["pan_card","pan_file","panProof"])||{},De=la(v,"AADHAR")||v.aadharProof||ve(v,["aadhar_card","aadhar_file","aadharProof"])||{},Ze=la(v,"PHOTO")||v.photoProof||ve(v,["photo","passportPhoto","photoProof"])||{},At=la(v,"PASSPORT")||v.passportProof||ve(v,["passport","passportDoc","passport_file","passportProof"])||{},qe=la(v,"VOTER")||v.voterProof||ve(v,["voter","voterId","voter_file","voterProof"])||{},Fe=G=>{if(!G)return null;const tt=_e=>typeof _e=="string"&&(_e.includes("/")||_e.includes("\\")||_e.includes("."));return tt(G)?G:typeof G=="object"?G.filePath||G.path||G.certificatePath||G.url||Object.values(G).find(tt):null},D={panNumber:pe.documentNumber||ve(v,["panNumber","panId","panNo"])||"",panCard:Fe(pe)?{name:Fe(pe).split("/").pop(),isServerFile:!0,path:Fe(pe)}:null,aadharNumber:De.documentNumber||ve(v,["aadharNumber","aadharId","aadharNo"])||"",aadharCard:Fe(De)?{name:Fe(De).split("/").pop(),isServerFile:!0,path:Fe(De)}:null,passportPhoto:Fe(Ze)?{name:Fe(Ze).split("/").pop(),isServerFile:!0,path:Fe(Ze)}:null,passportDoc:Fe(At)?{name:Fe(At).split("/").pop(),isServerFile:!0,path:Fe(At)}:null,voterId:Fe(qe)?{name:Fe(qe).split("/").pop(),isServerFile:!0,path:Fe(qe)}:null};console.log("📄 [DEBUG] Mapped Documents State:",D),W(D)},B=z=>{if(!z||!Array.isArray(z))return"";const[v,H,ne]=z;return`${v}-${String(H).padStart(2,"0")}-${String(ne).padStart(2,"0")}`},F=z=>{let v={};if(z===1){const H=["fullName","phone","email","dateOfBirth","permAddress","presAddress","fatherName","fatherPhone","motherName","motherPhone","emergencyName","emergencyRel","emergencyPhone"];for(const ne of H)T[ne]||(v[ne]="This field is required")}else if(z===2){const H=["ssc","inter","grad"];for(const ne of H){const pe=M[ne];pe.school||pe.college||(v[`${ne}_college`]="Required"),pe.htNumber||(v[`${ne}_htNumber`]="Required"),pe.year||(v[`${ne}_year`]="Required"),pe.percentage||(v[`${ne}_percentage`]="Required"),pe.certificate||(v[`${ne}_certificate`]="Required")}}else if(z===4){const H=["name","branch","accNumber","ifsc","upiId"];for(const ne of H)ye[ne]||(v[ne]="Required");ye.docImage||(v.bankDoc="Required")}else z===5&&(N.panNumber||(v.panNumber="Required"),N.panCard||(v.panCard="Required"),N.aadharNumber||(v.aadharNumber="Required"),N.aadharCard||(v.aadharCard="Required"),N.passportPhoto||(v.passportPhoto="Required"));return f(v),Object.keys(v).length>0?(setTimeout(()=>{const H=document.querySelector(".input-group.error");H&&H.scrollIntoView({behavior:"smooth",block:"center"})},100),!1):!0},V=z=>{z>d&&!F(d)||(f({}),s(z),window.scrollTo({top:0,behavior:"smooth"}))},[T,k]=j.useState({fullName:"",phone:"",bloodGroup:"",email:"",permAddress:"",presAddress:"",fatherName:"",fatherPhone:"",motherName:"",motherPhone:"",emergencyName:"",emergencyRel:"",emergencyPhone:"",dateOfBirth:""}),[M,P]=j.useState({ssc:{school:"",htNumber:"",year:"",percentage:"",certificate:null},inter:{college:"",htNumber:"",year:"",percentage:"",certificate:null},grad:{college:"",htNumber:"",year:"",percentage:"",marksMemo:null},postGrad:[],otherCerts:[]}),[te,le]=j.useState({internships:[],workHistory:[]}),[N,W]=j.useState({panNumber:"",panCard:null,aadharNumber:"",aadharCard:null,passportPhoto:null,passportDoc:null,voterId:null}),[Q,me]=j.useState(null),[ye,Le]=j.useState({name:"",branch:"",accNumber:"",ifsc:"",docType:"Passbook",docImage:null,upiId:""}),re=z=>!x||x.length===0?!1:x.some(v=>{const H=v.toLowerCase(),ne=z.toLowerCase();return ne.includes(H)||H.includes(ne)}),Ce=z=>{const{name:v,value:H}=z.target;k(ne=>({...ne,[v]:H})),u[v]&&f(ne=>{const pe={...ne};return delete pe[v],pe})},Ke=(z,v,H)=>{P(pe=>({...pe,[z]:{...pe[z],[v]:H}}));const ne=`${z}_${v==="college"?"college":v}`;u[ne]&&f(pe=>{const De={...pe};return delete De[ne],De})},ee=(z,v,H,ne,pe=null)=>{if(z==="education")if(pe!==null){const De=[...M[v]];De[pe][H]=ne,P(Ze=>({...Ze,[v]:De}))}else{P(Ze=>({...Ze,[v]:{...Ze[v],[H]:ne}}));const De=`${v}_${H}`;u[De]&&f(Ze=>{const At={...Ze};return delete At[De],At})}else if(z==="experience"){const De=[...te[v]];De[pe][H]=ne,le(Ze=>({...Ze,[v]:De}))}else z==="bank"?(Le(De=>({...De,[H]:ne})),H==="docImage"&&u.bankDoc&&f(De=>{const Ze={...De};return delete Ze.bankDoc,Ze})):z==="documents"&&(W(De=>({...De,[H]:ne})),u[H]&&f(De=>{const Ze={...De};return delete Ze[H],Ze}))},he=z=>{const{name:v,value:H}=z.target;Le(ne=>({...ne,[v]:H})),u[v]&&f(ne=>{const pe={...ne};return delete pe[v],pe})},L=z=>{const{name:v,value:H}=z.target;W(ne=>({...ne,[v]:H})),u[v]&&f(ne=>{const pe={...ne};return delete pe[v],pe})},ae=()=>{P(z=>({...z,postGrad:[...z.postGrad,{college:"",year:"",percentage:"",certificate:null}]}))},de=(z,v,H)=>{const ne=[...M.postGrad];ne[z][v]=H,P(pe=>({...pe,postGrad:ne}))},Y=z=>{P(v=>({...v,postGrad:v.postGrad.filter((H,ne)=>ne!==z)}))},oe=()=>{P(z=>({...z,otherCerts:[...z.otherCerts,{institute:"",certNumber:"",certificate:null}]}))},C=(z,v,H)=>{const ne=[...M.otherCerts];ne[z][v]=H,P(pe=>({...pe,otherCerts:ne}))},Z=z=>{P(v=>({...v,otherCerts:v.otherCerts.filter((H,ne)=>ne!==z)}))},ie=()=>{le(z=>({...z,internships:[...z.internships,{company:"",joining:"",relieving:"",id:"",duration:"",offerLetter:null,relievingLetter:null}]}))},se=(z,v,H)=>{const ne=[...te.internships];ne[z][v]=H,le(pe=>({...pe,internships:ne}))},O=z=>{le(v=>({...v,internships:v.internships.filter((H,ne)=>ne!==z)}))},$=()=>{le(z=>({...z,workHistory:[...z.workHistory,{company:"",years:"",offerLetter:null,relievingLetter:null,payslips:null,experienceCert:null}]}))},ce=(z,v,H)=>{const ne=[...te.workHistory];ne[z][v]=H,le(pe=>({...pe,workHistory:ne}))},Ae=z=>{le(v=>({...v,workHistory:v.workHistory.filter((H,ne)=>ne!==z)}))},K=async z=>{if(z.preventDefault(),!!F(5))try{console.log("🚀 Starting Onboarding Submission (Action Plan: Multipart)...");const v=(D,G)=>{if(!D)return null;const tt=D.name||"document";if(console.log(`📄 Field: ${G}, Name: ${tt}, Length: ${tt.length}`),tt.length>200)throw new Error(`Filename for ${G} is too long (${tt.length} chars). Max 200.`);return tt},H=D=>D?{institutionName:D.school||D.college||"",hallTicketNo:D.htNumber||"",passoutYear:D.year||"",percentageCgpa:D.percentage||"",certificatePath:v(D.certificate,"Edu Cert"),marksMemoPath:v(D.marksMemo,"Edu Marks")}:null,ne={fullName:T.fullName,email:T.email,phoneNumber:T.phone,dateOfBirth:T.dateOfBirth,bloodGroup:T.bloodGroup,permanentAddress:T.permAddress,presentAddress:T.presAddress,fathersName:T.fatherName,fathersPhone:T.fatherPhone,mothersName:T.motherName,mothersPhone:T.motherPhone,emergencyContactName:T.emergencyName,emergencyRelationship:T.emergencyRel,emergencyNumber:T.emergencyPhone,bankName:ye.name,branchName:ye.branch,accountNumber:ye.accNumber,ifscCode:ye.ifsc,upiId:ye.upiId,passbookPath:v(ye.docImage,"Passbook"),ssc:H(M.ssc),intermediate:H(M.inter),graduation:H(M.grad),postGraduations:M.postGrad.map(D=>H(D)),otherCertificates:M.otherCerts.map(D=>({instituteName:D.institute,certificateNumber:D.certNumber,certificatePath:v(D.certificate,"Other Cert")})),internships:te.internships.map(D=>({companyName:D.company,joiningDate:D.joining,relievingDate:D.relieving,internshipId:D.id,duration:D.duration,offerLetterPath:v(D.offerLetter,"Internship Offer"),experienceCertificatePath:v(D.relievingLetter,"Internship Cert")})),workExperiences:te.workHistory.map(D=>({companyName:D.company,yearsOfExp:D.years,offerLetterPath:v(D.offerLetter,"Work Offer"),relievingLetterPath:v(D.relievingLetter,"Work Relieving"),payslipsPath:v(D.payslips,"Work Payslip"),experienceCertificatePath:v(D.experienceCert,"Work Exp Cert")})),panProof:{proofType:"PAN",documentNumber:N.panNumber,filePath:v(N.panCard,"PAN Card")},aadharProof:{proofType:"AADHAR",documentNumber:N.aadharNumber,filePath:v(N.aadharCard,"Aadhar Card")},photoProof:{proofType:"PHOTO",filePath:v(N.passportPhoto,"Passport Photo")},passportProof:{proofType:"PASSPORT",filePath:v(N.passportDoc,"Passport Doc")},voterProof:{proofType:"VOTER",filePath:v(N.voterId,"Voter ID")}},pe=new URLSearchParams(window.location.search).get("token"),De="/api/onboarding/submit",Ze=`?token=${encodeURIComponent(c||pe||"")}`;console.log("Token from URL:",c||pe),console.log("Current page URL:",window.location.href),console.log("Full request URL will be:",De+Ze),console.log("Method: POST");const At=new FormData;At.append("data",new Blob([JSON.stringify(ne)],{type:"application/json"})),console.log("📦 FormData entries:");for(let[D,G]of At.entries())console.log(D,G instanceof File?`📄 File: ${G.name} (${G.size} bytes)`:G instanceof Blob?"📦 Blob/JSON":G);const qe=(D,G)=>{G&&G instanceof File&&At.append(D,G)};qe("passbook",ye.docImage),qe("ssc_certificate",M.ssc.certificate),qe("ssc_marks",M.ssc.marksMemo),qe("inter_certificate",M.inter.certificate),qe("inter_marks",M.inter.marksMemo),qe("grad_certificate",M.grad.certificate),qe("grad_marks",M.grad.marksMemo),M.postGrad.forEach((D,G)=>{qe(`post_grad_file_${G}`,D.certificate),qe(`post_grad_marks_file_${G}`,D.marksMemo)}),te.internships.forEach((D,G)=>{qe(`internship_offer_file_${G}`,D.offerLetter),qe(`internship_cert_file_${G}`,D.relievingLetter)}),te.workHistory.forEach((D,G)=>{qe(`work_offer_file_${G}`,D.offerLetter),qe(`work_relieving_file_${G}`,D.relievingLetter),qe(`work_payslips_file_${G}`,D.payslips),qe(`work_exp_cert_file_${G}`,D.experienceCert)}),qe("pan",N.panCard),qe("aadhar",N.aadharCard),qe("photo",N.passportPhoto),qe("passport",N.passportDoc),qe("voter",N.voterId),console.log("📤 Submitting Multipart data to backend...");const Fe=await xe.submitOnboarding(At,c);console.log("✅ Onboarding Submit Success:",Fe),console.log("✅ Onboarding Submit Success:",Fe),alert("Registration successful! Our team will review your application."),s(1)}catch(v){console.error("❌ Submission Failed:",v),alert(`Error: ${v.message}`)}};return a.jsxs("div",{className:"form-container",children:[a.jsxs("div",{className:"form-card",children:[a.jsxs("div",{className:"form-header",children:[a.jsx("h1",{children:"Employee Onboarding"}),a.jsx("p",{children:"Please fill out your details accurately."})]}),g&&a.jsxs("div",{className:"loading-overlay",children:[a.jsx("div",{className:"spinner"}),a.jsx("p",{children:"Loading your details..."})]}),a.jsxs("div",{className:"step-indicator",children:[a.jsx("span",{className:d>=1?"active":"",children:"1. Personal"}),a.jsx("span",{className:"line"}),a.jsx("span",{className:d>=2?"active":"",children:"2. Education"}),a.jsx("span",{className:"line"}),a.jsx("span",{className:d>=3?"active":"",children:"3. Experience"}),a.jsx("span",{className:"line"}),a.jsx("span",{className:d>=4?"active":"",children:"4. Bank"}),a.jsx("span",{className:"line"}),a.jsx("span",{className:d>=5?"active":"",children:"5. Documents"})]}),a.jsxs("form",{onSubmit:K,children:[d===1&&a.jsxs("div",{className:"form-section animate-fade-in",children:[a.jsx("h2",{children:"Personal Details"}),a.jsxs("div",{className:"row",children:[a.jsx(Oe,{label:"Full Name (as per Aadhar)",name:"fullName",val:T.fullName,fn:Ce,req:!0,error:u.fullName,rejected:re("fullName")}),a.jsx(Oe,{label:"Phone Number",name:"phone",val:T.phone,fn:Ce,req:!0,type:"tel",error:u.phone,rejected:re("phone")})]}),a.jsxs("div",{className:"row",children:[a.jsx(Oe,{label:"Email ID",name:"email",val:T.email,fn:Ce,req:!0,type:"email",error:u.email,rejected:re("email")}),a.jsxs("div",{className:`input-group ${u.bloodGroup||re("bloodGroup")?"error":""}`,children:[a.jsxs("label",{children:["Blood Group ",re("bloodGroup")&&a.jsx("span",{className:"rejected-badge",children:"Rejected"})]}),a.jsxs("select",{name:"bloodGroup",value:T.bloodGroup,onChange:Ce,className:`form-input ${u.bloodGroup||re("bloodGroup")?"error":""}`,children:[a.jsx("option",{value:"",children:"Select"}),a.jsx("option",{value:"A+",children:"A+"}),a.jsx("option",{value:"A-",children:"A-"}),a.jsx("option",{value:"B+",children:"B+"}),a.jsx("option",{value:"B-",children:"B-"}),a.jsx("option",{value:"O+",children:"O+"}),a.jsx("option",{value:"O-",children:"O-"}),a.jsx("option",{value:"AB+",children:"AB+"}),a.jsx("option",{value:"AB-",children:"AB-"})]}),u.bloodGroup&&a.jsx("span",{className:"error-msg",children:u.bloodGroup}),re("bloodGroup")&&a.jsx("span",{className:"error-msg",children:"This field was rejected."})]}),a.jsx(Oe,{label:"Date of Birth",name:"dateOfBirth",val:T.dateOfBirth,fn:Ce,req:!0,type:"date",error:u.dateOfBirth,rejected:re("dateOfBirth")})]}),a.jsx("h3",{children:"Address"}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:`input-group ${u.permAddress||re("permanentAddress")?"error":""}`,children:[a.jsxs("label",{children:["Permanent Address ",re("permanentAddress")&&a.jsx("span",{className:"rejected-badge",children:"Rejected"})]}),a.jsx("textarea",{name:"permAddress",value:T.permAddress,onChange:Ce,className:`form-input ${u.permAddress||re("permanentAddress")?"error":""}`,required:!0,rows:"3"}),u.permAddress&&a.jsx("span",{className:"error-msg",children:u.permAddress}),re("permanentAddress")&&a.jsx("span",{className:"error-msg",children:"This field was rejected."})]}),a.jsxs("div",{className:`input-group ${u.presAddress||re("presentAddress")?"error":""}`,children:[a.jsxs("label",{children:["Present Address ",re("presentAddress")&&a.jsx("span",{className:"rejected-badge",children:"Rejected"})]}),a.jsx("textarea",{name:"presAddress",value:T.presAddress,onChange:Ce,className:`form-input ${u.presAddress||re("presentAddress")?"error":""}`,required:!0,rows:"3"}),u.presAddress&&a.jsx("span",{className:"error-msg",children:u.presAddress}),re("presentAddress")&&a.jsx("span",{className:"error-msg",children:"This field was rejected."})]})]}),a.jsx("h3",{children:"Family Details"}),a.jsxs("div",{className:"row",children:[a.jsx(Oe,{label:"Father's Name",name:"fatherName",val:T.fatherName,fn:Ce,req:!0,error:u.fatherName,rejected:re("fathersName")}),a.jsx(Oe,{label:"Father's Phone",name:"fatherPhone",val:T.fatherPhone,fn:Ce,req:!0,error:u.fatherPhone,rejected:re("fathersPhone")})]}),a.jsxs("div",{className:"row",children:[a.jsx(Oe,{label:"Mother's Name",name:"motherName",val:T.motherName,fn:Ce,req:!0,error:u.motherName,rejected:re("mothersName")}),a.jsx(Oe,{label:"Mother's Phone",name:"motherPhone",val:T.motherPhone,fn:Ce,req:!0,error:u.motherPhone,rejected:re("mothersPhone")})]}),a.jsx("h3",{children:"Emergency Contact"}),a.jsxs("div",{className:"row",children:[a.jsx(Oe,{label:"Contact Name",name:"emergencyName",val:T.emergencyName,fn:Ce,req:!0,error:u.emergencyName,rejected:re("emergencyContactName")}),a.jsx(Oe,{label:"Relationship",name:"emergencyRel",val:T.emergencyRel,fn:Ce,req:!0,error:u.emergencyRel,rejected:re("emergencyRelationship")})]}),a.jsx("div",{className:"row",children:a.jsx(Oe,{label:"Emergency Number",name:"emergencyPhone",val:T.emergencyPhone,fn:Ce,req:!0,error:u.emergencyPhone,rejected:re("emergencyNumber")})}),a.jsx("div",{className:"form-actions right",children:a.jsxs("button",{type:"button",className:"btn-primary",onClick:()=>V(2),children:["Next ",a.jsx(Ki,{size:16})]})})]}),d===2&&a.jsxs("div",{className:"form-section animate-fade-in",children:[a.jsx("h2",{children:"Education Details"}),a.jsx(kc,{title:"SSC",data:M.ssc,onChange:(z,v)=>Ke("ssc",z,v),schoolLabel:"School Name",req:!0,errors:u,rejected:re("SSC")}),a.jsx(kc,{title:"Intermediate",data:M.inter,onChange:(z,v)=>Ke("inter",z,v),req:!0,errors:u,rejected:re("Intermediate")}),a.jsx(kc,{title:"Graduation",data:M.grad,onChange:(z,v)=>Ke("grad",z,v),hasMarskMemo:!0,certLabel:"Provisional Certificate",schoolLabel:"College Name",req:!0,errors:u,rejected:re("Graduation")}),a.jsxs("div",{className:"dynamic-section",children:[a.jsxs("div",{className:"sec-head",children:[a.jsx("h3",{children:"Post Graduation"}),a.jsxs("button",{type:"button",className:"btn-add",onClick:ae,children:[a.jsx(ra,{size:14})," Add"]})]}),M.postGrad.map((z,v)=>a.jsxs("div",{className:"dynamic-card",children:[a.jsx("button",{type:"button",className:"btn-del",onClick:()=>Y(v),children:a.jsx(Qt,{size:16})}),a.jsxs("div",{className:"row",children:[a.jsx(Oe,{label:"College Name",val:z.college,fn:H=>de(v,"college",H.target.value)}),a.jsx(Oe,{label:"Year",val:z.year,fn:H=>de(v,"year",H.target.value)})]}),a.jsxs("div",{className:"row",children:[a.jsx(Oe,{label:"Percentage/CGPA",val:z.percentage,fn:H=>de(v,"percentage",H.target.value)}),a.jsx(Ct,{label:"Certificate",onChange:H=>de(v,"certificate",H),fileName:z.certificate?.name})]})]},v))]}),a.jsxs("div",{className:"dynamic-section",children:[a.jsxs("div",{className:"sec-head",children:[a.jsx("h3",{children:"Other Certificates"}),a.jsxs("button",{type:"button",className:"btn-add",onClick:oe,children:[a.jsx(ra,{size:14})," Add"]})]}),M.otherCerts.map((z,v)=>a.jsxs("div",{className:"dynamic-card",children:[a.jsx("button",{type:"button",className:"btn-del",onClick:()=>Z(v),children:a.jsx(Qt,{size:16})}),a.jsxs("div",{className:"row",children:[a.jsx(Oe,{label:"Institute Name",val:z.institute,fn:H=>C(v,"institute",H.target.value)}),a.jsx(Oe,{label:"Certificate Number",val:z.certNumber,fn:H=>C(v,"certNumber",H.target.value)})]}),a.jsx("div",{className:"row",children:a.jsx(Ct,{label:"Upload Certificate (File/Image)",onChange:H=>C(v,"certificate",H),fileName:z.certificate?.name})})]},v))]}),a.jsxs("div",{className:"form-actions",children:[a.jsxs("button",{type:"button",className:"btn-secondary",onClick:()=>V(1),children:[a.jsx($i,{size:16})," Back"]}),a.jsxs("button",{type:"button",className:"btn-primary",onClick:()=>V(3),children:["Next ",a.jsx(Ki,{size:16})]})]})]}),d===3&&a.jsxs("div",{className:"form-section animate-fade-in",children:[a.jsx("h2",{children:"Experience Details"}),a.jsxs("div",{className:"dynamic-section",children:[a.jsxs("div",{className:"sec-head",children:[a.jsx("h3",{children:"Internships"}),a.jsxs("button",{type:"button",className:"btn-add",onClick:ie,children:[a.jsx(ra,{size:14})," Add"]})]}),te.internships.map((z,v)=>a.jsxs("div",{className:`dynamic-card ${re("Internship")?"error":""}`,children:[a.jsx("button",{type:"button",className:"btn-del",onClick:()=>O(v),children:a.jsx(Qt,{size:16})}),a.jsx("div",{className:"row",children:a.jsx(Oe,{label:"Company Name",val:z.company,fn:H=>se(v,"company",H.target.value),rejected:re("Internship")})}),a.jsxs("div",{className:"row",children:[a.jsx(Oe,{type:"date",label:"Joining Date",val:z.joining,fn:H=>se(v,"joining",H.target.value),rejected:re("Internship")}),a.jsx(Oe,{type:"date",label:"Relieving Date",val:z.relieving,fn:H=>se(v,"relieving",H.target.value),rejected:re("Internship")})]}),a.jsxs("div",{className:"row",children:[a.jsx(Oe,{label:"Internship ID",val:z.id,fn:H=>se(v,"id",H.target.value),rejected:re("Internship")}),a.jsx(Oe,{label:"Duration (Months/Years)",val:z.duration,fn:H=>se(v,"duration",H.target.value),rejected:re("Internship")})]}),a.jsxs("div",{className:"row",children:[a.jsx(Ct,{label:"Offer Letter",onChange:H=>ee("experience","internships","offerLetter",H,v),fileName:z.offerLetter?.name,rejected:re("Internship")}),a.jsx(Ct,{label:"Experience Certificate",onChange:H=>ee("experience","internships","relievingLetter",H,v),fileName:z.relievingLetter?.name,rejected:re("Internship")})]})]},v))]}),a.jsxs("div",{className:"dynamic-section",children:[a.jsxs("div",{className:"sec-head",children:[a.jsx("h3",{children:"Work Experience"}),a.jsxs("button",{type:"button",className:"btn-add",onClick:$,children:[a.jsx(ra,{size:14})," Add"]})]}),te.workHistory.map((z,v)=>a.jsxs("div",{className:`dynamic-card ${re("Work Experience")?"error":""}`,children:[a.jsx("button",{type:"button",className:"btn-del",onClick:()=>Ae(v),children:a.jsx(Qt,{size:16})}),a.jsxs("div",{className:"row",children:[a.jsx(Oe,{label:"Company Name",val:z.company,fn:H=>ce(v,"company",H.target.value),rejected:re("Work Experience")}),a.jsx(Oe,{label:"Years of Exp",val:z.years,fn:H=>ce(v,"years",H.target.value),rejected:re("Work Experience")})]}),a.jsxs("div",{className:"row",children:[a.jsx(Ct,{label:"Offer Letter",onChange:H=>ce(v,"offerLetter",H),fileName:z.offerLetter?.name,rejected:re("Work Experience")}),a.jsx(Ct,{label:"Relieving Letter",onChange:H=>ce(v,"relievingLetter",H),fileName:z.relievingLetter?.name,rejected:re("Work Experience")})]}),a.jsxs("div",{className:"row",children:[a.jsx(Ct,{label:"Payslips (Last 3 Months)",onChange:H=>ce(v,"payslips",H),fileName:z.payslips?.name,rejected:re("Work Experience")}),a.jsx(Ct,{label:"Experience Certificate",onChange:H=>ce(v,"experienceCert",H),fileName:z.experienceCert?.name,rejected:re("Work Experience")})]})]},v))]}),a.jsxs("div",{className:"form-actions",children:[a.jsxs("button",{type:"button",className:"btn-secondary",onClick:()=>V(2),children:[a.jsx($i,{size:16})," Back"]}),a.jsxs("button",{type:"button",className:"btn-primary",onClick:()=>V(4),children:["Next ",a.jsx(Ki,{size:16})]})]})]}),d===4&&a.jsxs("div",{className:"form-section animate-fade-in",children:[a.jsx("h2",{children:"Bank Details"}),a.jsxs("div",{className:"row",children:[a.jsx(Oe,{label:"Bank Name",name:"name",val:ye.name,fn:he,req:!0,error:u.name,rejected:re("bankName")}),a.jsx(Oe,{label:"Branch Name",name:"branch",val:ye.branch,fn:he,req:!0,error:u.branch,rejected:re("branchName")})]}),a.jsxs("div",{className:"row",children:[a.jsx(Oe,{label:"Account Number",name:"accNumber",val:ye.accNumber,fn:he,req:!0,error:u.accNumber,rejected:re("accountNumber")}),a.jsx(Oe,{label:"IFSC Code",name:"ifsc",val:ye.ifsc,fn:he,req:!0,error:u.ifsc,rejected:re("ifscCode")})]}),a.jsx("div",{className:"row",children:a.jsx(Oe,{label:"UPI ID",name:"upiId",val:ye.upiId,fn:he,req:!0,error:u.upiId,rejected:re("upiId")})}),a.jsx("h3",{children:"Document Upload"}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:`input-group ${re("passbookPath")?"error":""}`,children:[a.jsxs("label",{children:["Document Type ",re("passbookPath")&&a.jsx("span",{className:"rejected-badge",children:"Rejected"})]}),a.jsxs("select",{name:"docType",value:ye.docType,onChange:he,className:`form-input ${re("passbookPath")?"error":""}`,children:[a.jsx("option",{value:"Passbook",children:"Passbook"}),a.jsx("option",{value:"Statement",children:"Bank Statement"}),a.jsx("option",{value:"Cheque",children:"Cancelled Cheque"})]}),re("passbookPath")&&a.jsx("span",{className:"error-msg",children:"This document was rejected."})]}),a.jsx(Ct,{label:`Upload ${ye.docImage?" (Selected)":ye.docType}`,onChange:z=>ee("bank",null,"docImage",z),fileName:ye.docImage?.name,error:u.bankDoc,rejected:re("passbookPath")})]}),a.jsxs("div",{className:"form-actions",children:[a.jsxs("button",{type:"button",className:"btn-secondary",onClick:()=>V(3),children:[a.jsx($i,{size:16})," Back"]}),a.jsxs("button",{type:"button",className:"btn-primary",onClick:()=>V(5),children:["Next ",a.jsx(Ki,{size:16})]})]})]}),d===5&&a.jsxs("div",{className:"form-section animate-fade-in",children:[a.jsx("h2",{children:"Other Documents"}),a.jsx("h3",{children:"Identity Proofs"}),a.jsxs("div",{className:"row",children:[a.jsx(Oe,{label:"PAN Card Number",name:"panNumber",val:N.panNumber,fn:L,req:!0,error:u.panNumber,rejected:re("PAN")}),a.jsx(Ct,{label:"Upload PAN Card",onChange:z=>ee("documents",null,"panCard",z),fileName:N.panCard?.name,req:!0,error:u.panCard,rejected:re("PAN")})]}),a.jsxs("div",{className:"row",children:[a.jsx(Oe,{label:"Aadhar Card Number",name:"aadharNumber",val:N.aadharNumber,fn:L,req:!0,error:u.aadharNumber,rejected:re("AADHAR")}),a.jsx(Ct,{label:"Upload Aadhar Card",onChange:z=>ee("documents",null,"aadharCard",z),fileName:N.aadharCard?.name,req:!0,error:u.aadharCard,rejected:re("AADHAR")})]}),a.jsx("h3",{children:"Photos & Other IDs"}),a.jsxs("div",{className:"row",children:[a.jsx(Ct,{label:"Passport Size Photo",onChange:z=>ee("documents",null,"passportPhoto",z),fileName:N.passportPhoto?.name,req:!0,error:u.passportPhoto,rejected:re("PHOTO")}),a.jsx(Ct,{label:"Passport Document (Optional)",onChange:z=>ee("documents",null,"passportDoc",z),fileName:N.passportDoc?.name,rejected:re("PASSPORT")})]}),a.jsx("div",{className:"row",children:a.jsx(Ct,{label:"Voter ID Card (Optional)",onChange:z=>ee("documents",null,"voterId",z),fileName:N.voterId?.name,rejected:re("VOTER")})}),a.jsxs("div",{className:"form-actions",children:[a.jsxs("button",{type:"button",className:"btn-secondary",onClick:()=>V(4),children:[a.jsx($i,{size:16})," Back"]}),a.jsxs("button",{type:"submit",className:"btn-submit",children:["Submit ",a.jsx(Sr,{size:16})]})]})]})]})]}),a.jsx("style",{children:`
                .form-container {
                    min-height: 100vh;
                    background: #f0f2f5;
                    padding: 2rem;
                    display: flex;
                    justify-content: center;
                    font-family: 'Inter', sans-serif;
                }

                .form-card {
                    background: white;
                    width: 100%;
                    max-width: 900px;
            margin: 2rem auto;
                    border-radius: 8px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                    overflow: hidden;
                    position: relative;
                }

                .form-header {
                    padding: 2rem 2rem 1rem;
                    border-bottom: 1px solid #e0e0e0;
                }

                .form-header h1 {
                    font-size: 2rem;
                    color: #202124;
                    margin: 0 0 0.5rem 0;
                }

                .form-header p {
                    color: #5f6368;
                    font-size: 0.9rem;
                }

                .step-indicator {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;
                    background: #f8f9fa;
                    border-bottom: 1px solid #e0e0e0;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .step-indicator span:not(.line) {
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: #bdc1c6;
                    padding: 0.25rem 0.5rem;
                    border-radius: 4px;
                    white-space: nowrap;
                }

                .step-indicator span.active {
                    color: #673ab7;
                    background: #ede7f6;
                }

                .step-indicator .line {
                    height: 1px;
                    width: 20px;
                    background: #dadce0;
                    margin: 0;
                    flex-shrink: 0;
                }

                .form-section {
                    padding: 2rem;
                }

                .form-section h2 {
                    font-size: 1.25rem;
                    color: #202124;
                    margin-bottom: 1.5rem;
                    padding-bottom: 0.5rem;
                    border-bottom: 2px solid #673ab7;
                    display: inline-block;
                }

                .form-section h3 {
                    font-size: 1rem;
                    color: #3c4043;
                    margin-top: 1.5rem;
                    margin-bottom: 1rem;
                    font-weight: 600;
                }

                .row {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.5rem;
                    margin-bottom: 1rem;
                }
 
                .input-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
 
                .input-group.full {
                    grid-column: span 2;
                }

                .input-group label {
                    font-size: 0.85rem;
                    font-weight: 500;
                    color: #202124;
                }

                .form-input {
                    width: 100%;
                    max-width: 100%;
                    padding: 0.75rem;
                    border: 1px solid #dadce0;
                    border-radius: 4px;
                    font-size: 0.9rem;
                    transition: all 0.2s;
                    box-sizing: border-box;
                }
 
                .form-input.error {
                    border-color: #d93025;
                    background-color: #fdf4f4;
                }
 
                .error-msg {
                    color: #d93025;
                    font-size: 0.75rem;
                    margin-top: 0.25rem;
                }
 
                .file-upload-box.error {
                    border: 2px dashed #d93025;
                    background-color: #fdf4f4;
                }

                .form-input:focus {
                    outline: none;
                    border-color: #673ab7;
                    border-width: 2px;
                    margin: -1px; /* visual fix for width jump */
                    margin-bottom: 0px;
                }

                .file-upload-box {
                    border: 1px dashed #dadce0;
                    padding: 1rem;
                    border-radius: 4px;
                    text-align: center;
                    color: #5f6368;
                    font-size: 0.85rem;
                    cursor: pointer;
                    transition: background 0.2s;
                }

                .file-upload-box:hover {
                    background: #f1f3f4;
                }

                /* Education Block */
                .edu-block {
                    background: #f8f9fa;
                    padding: 1rem;
                    border-radius: 8px;
                    margin-bottom: 1rem;
                    border: 1px solid #e0e0e0;
                }

                /* Dynamic Section */
                .dynamic-section {
                    margin-bottom: 2rem;
                }

                .sec-head {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                }

                .dynamic-card {
                    background: #fff;
                    border: 1px solid #dadce0;
                    padding: 1.5rem;
                    border-radius: 8px;
                    margin-bottom: 1rem;
                    position: relative;
                }

                .btn-add {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    background: #e8f0fe;
                    color: #1a73e8;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    cursor: pointer;
                    font-size: 0.8rem;
                    font-weight: 600;
                }

                .btn-del {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: none;
                    border: none;
                    color: #d93025;
                    cursor: pointer;
                    opacity: 0.6;
                }

                .btn-del:hover {
                    opacity: 1;
                }

                /* Actions */
                .form-actions {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 2rem;
                    padding-top: 1rem;
                    border-top: 1px solid #e0e0e0;
                }

                .form-actions.right {
                    justify-content: flex-end;
                }

                .btn-primary, .btn-secondary, .btn-submit {
                    padding: 0.75rem 1.5rem;
                    border-radius: 4px;
                    font-weight: 600;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    border: none;
                }

                .btn-primary {
                    background: #673ab7;
                    color: white;
                }

                .btn-secondary {
                    background: white;
                    color: #673ab7;
                    border: 1px solid #dadce0;
                }

                .btn-submit {
                    background: #1e8e3e;
                    color: white;
                }

                .animate-fade-in {
                    animation: fadeIn 0.4s ease-out;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .rejected-badge {
                    background: #fdf4f4;
                    color: #d93025;
                    font-size: 0.7rem;
                    font-weight: 700;
                    padding: 2px 6px;
                    border-radius: 4px;
                    border: 1px solid #d93025;
                    text-transform: uppercase;
                    margin-left: 0.5rem;
                }

                .loading-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(255, 255, 255, 0.8);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    z-index: 100;
                    border-radius: 12px;
                }

                .spinner {
                    width: 40px;
                    height: 40px;
                    border: 4px solid #f3f3f3;
                    border-top: 4px solid #2563eb;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin-bottom: 1rem;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                @media (max-width: 600px) {
                    .row { grid-template-columns: 1fr; gap: 1rem; }
                    .form-container { padding: 1rem 0.5rem; }
                    .input-group.full { grid-column: span 1; }
                }
            `})]})},Oe=({label:o,name:c,val:d,fn:s,req:u,type:f="text",error:g,rejected:y})=>a.jsxs("div",{className:`input-group ${g||y?"error":""}`,children:[a.jsxs("label",{children:[o," ",u&&a.jsx("span",{style:{color:"red"},children:"*"}),y&&a.jsx("span",{className:"rejected-badge",children:"Rejected"})]}),a.jsx("input",{type:f,name:c,value:d||"",onChange:s,required:u,className:`form-input ${g||y?"error":""}`}),g&&a.jsx("span",{className:"error-msg",children:g}),y&&a.jsx("span",{className:"error-msg",children:"This field was rejected. Please update it."})]}),Ct=({label:o,onChange:c,fileName:d,req:s,error:u,rejected:f})=>{const g=mn.useRef(null);return a.jsxs("div",{className:`input-group ${u||f?"error":""}`,children:[a.jsxs("label",{children:[o," ",s&&a.jsx("span",{style:{color:"red"},children:"*"}),f&&a.jsx("span",{className:"rejected-badge",children:"Rejected"})]}),a.jsxs("div",{className:`file-upload-box ${u||f?"error":""}`,onClick:()=>g.current.click(),children:[a.jsx("input",{type:"file",ref:g,style:{display:"none"},onChange:y=>c(y.target.files[0])}),a.jsx(Bb,{size:18,style:{marginBottom:"0.25rem"}}),a.jsx("div",{children:d||"Click to upload file"})]}),u&&a.jsx("span",{className:"error-msg",children:u}),f&&a.jsx("span",{className:"error-msg",children:"This document was rejected. Please re-upload."})]})},kc=({title:o,data:c,onChange:d,hasMarskMemo:s,schoolLabel:u="School/College Name",certLabel:f,req:g,errors:y={},rejected:x})=>{const p=o.toLowerCase().includes("ssc")?"ssc":o.toLowerCase().includes("inter")?"inter":"grad";return a.jsxs("div",{className:`edu-block ${x?"error":""}`,children:[a.jsxs("h3",{children:[o," ",x&&a.jsx("span",{className:"rejected-badge",children:"Rejected"})]}),a.jsxs("div",{className:"row",children:[a.jsx(Oe,{label:u,val:c.school||c.college,fn:b=>d("college",b.target.value),req:g,error:y[`${p}_college`]}),a.jsx(Oe,{label:"Hall Ticket No.",val:c.htNumber,fn:b=>d("htNumber",b.target.value),req:g,error:y[`${p}_htNumber`]})]}),a.jsxs("div",{className:"row",children:[a.jsx(Oe,{label:"Passout Year",type:"number",val:c.year,fn:b=>d("year",b.target.value),req:g,error:y[`${p}_year`],rejected:x}),a.jsx(Oe,{label:"Percentage/CGPA",val:c.percentage,fn:b=>d("percentage",b.target.value),req:g,error:y[`${p}_percentage`],rejected:x})]}),a.jsxs("div",{className:"row",children:[a.jsx(Ct,{label:f||`${o} Certificate`,onChange:b=>d("certificate",b),fileName:c.certificate?.name,req:g,error:y[`${p}_certificate`],rejected:x}),s&&a.jsx(Ct,{label:"Marks Memo",onChange:b=>d("marksMemo",b),fileName:c.marksMemo?.name,req:g,rejected:x})]})]})};function Ny(){return a.jsx(C0,{children:a.jsxs(ep,{children:[a.jsx(fn,{path:"/onboarding",element:a.jsx(jy,{})}),a.jsx(fn,{path:"/*",element:a.jsx(Zb,{children:a.jsxs(ep,{children:[a.jsx(fn,{path:"/",element:a.jsx(Jb,{})}),a.jsx(fn,{path:"/employees",element:a.jsx(ry,{})}),a.jsx(fn,{path:"/vendors",element:a.jsx(cy,{})}),a.jsx(fn,{path:"/assets",element:a.jsx(py,{})}),a.jsx(fn,{path:"/settings",element:a.jsx(vy,{})})]})})})]})})}lx.createRoot(document.getElementById("root")).render(a.jsx(Ny,{}));
