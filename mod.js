// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r,e=void 0!==Object.getOwnPropertySymbols,t=Object,n=t.getOwnPropertySymbols;r=e?function(r){return n(t(r))}:function(){return[]};var o=r,i=void 0!==Object.getOwnPropertyNames,a=t.getOwnPropertyNames;function u(r){return Object.keys(Object(r))}var c=void 0!==Object.keys;var f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function l(){return f&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;function g(r,e){return null!=r&&p.call(r,e)}var y="function"==typeof Symbol?Symbol:void 0,d="function"==typeof y?y.toStringTag:"";var b=l()?function(r){var e,t,n;if(null==r)return s.call(r);t=r[d],e=g(r,d);try{r[d]=void 0}catch(e){return s.call(r)}return n=s.call(r),e?r[d]=t:delete r[d],n}:function(r){return s.call(r)};function h(r){return"[object Arguments]"===b(r)}var v=function(){return h(arguments)}(),w="function"==typeof Object.defineProperty?Object.defineProperty:null;var m=Object.defineProperty;function j(r){return"number"==typeof r}function O(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function S(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+O(o):O(o)+r,n&&(r="-"+r)),r}var _=String.prototype.toLowerCase,E=String.prototype.toUpperCase;function k(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!j(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=S(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=S(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===E.call(r.specifier)?E.call(t):_.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function x(r){return"string"==typeof r}var I=Math.abs,T=String.prototype.toLowerCase,P=String.prototype.toUpperCase,A=String.prototype.replace,V=/e\+(\d)$/,F=/e-(\d)$/,N=/^(\d+)$/,$=/^(\d+)e/,C=/\.0$/,B=/\.0*e/,L=/(\..*[^0])0*e/;function R(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!j(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":I(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=A.call(t,L,"$1e"),t=A.call(t,B,"e"),t=A.call(t,C,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=A.call(t,V,"e+0$1"),t=A.call(t,F,"e-0$1"),r.alternate&&(t=A.call(t,N,"$1."),t=A.call(t,$,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===P.call(r.specifier)?P.call(t):T.call(t)}function G(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function W(r,e,t){var n=e-r.length;return n<0?r:r=t?r+G(n):G(n)+r}var X=String.fromCharCode,Z=isNaN,M=Array.isArray;function Y(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,t,n,o,i,a,u,c,f;if(!M(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(x(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=Y(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Z(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,Z(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=k(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Z(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Z(i)?String(n.arg):X(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=R(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=S(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=W(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var H=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function z(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function D(r){var e,t,n,o;for(t=[],o=0,n=H.exec(r);n;)(e=r.slice(o,H.lastIndex-n[0].length)).length&&t.push(e),t.push(z(n)),o=H.lastIndex,n=H.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function q(r){return"string"==typeof r}function J(r){var e,t,n;if(!q(r))throw new TypeError(J("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=D(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return U.apply(null,t)}var K,Q=Object.prototype,rr=Q.toString,er=Q.__defineGetter__,tr=Q.__defineSetter__,nr=Q.__lookupGetter__,or=Q.__lookupSetter__;K=function(){try{return w({},"x",{}),!0}catch(r){return!1}}()?m:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===rr.call(r))throw new TypeError(J("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===rr.call(t))throw new TypeError(J("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(nr.call(r,e)||or.call(r,e)?(n=r.__proto__,r.__proto__=Q,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&er&&er.call(r,e,t.get),a&&tr&&tr.call(r,e,t.set),r};var ir=K;function ar(r,e,t){ir(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ur(r){return"string"==typeof r}var cr=String.prototype.valueOf;var fr=l();function lr(r){return"object"==typeof r&&(r instanceof String||(fr?function(r){try{return cr.call(r),!0}catch(r){return!1}}(r):"[object String]"===b(r)))}function sr(r){return ur(r)||lr(r)}function pr(r){return"number"==typeof r}ar(sr,"isPrimitive",ur),ar(sr,"isObject",lr);var gr=Number,yr=gr.prototype.toString;var dr=l();function br(r){return"object"==typeof r&&(r instanceof gr||(dr?function(r){try{return yr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===b(r)))}function hr(r){return pr(r)||br(r)}function vr(r){return r!=r}function wr(r){return pr(r)&&vr(r)}function mr(r){return br(r)&&vr(r.valueOf())}function jr(r){return wr(r)||mr(r)}ar(hr,"isPrimitive",pr),ar(hr,"isObject",br),ar(jr,"isPrimitive",wr),ar(jr,"isObject",mr);var Or=Number.POSITIVE_INFINITY,Sr=gr.NEGATIVE_INFINITY,_r=Math.floor;function Er(r){return _r(r)===r}function kr(r){return r<Or&&r>Sr&&Er(r)}function xr(r){return pr(r)&&kr(r)}function Ir(r){return br(r)&&kr(r.valueOf())}function Tr(r){return xr(r)||Ir(r)}ar(Tr,"isPrimitive",xr),ar(Tr,"isObject",Ir);var Pr=Object.prototype.propertyIsEnumerable;var Ar,Vr=!Pr.call("beep","0");function Fr(r,e){var t;return null!=r&&(!(t=Pr.call(r,e))&&Vr&&sr(r)?!wr(e=+e)&&xr(e)&&e>=0&&e<r.length:t)}Ar=Array.isArray?Array.isArray:function(r){return"[object Array]"===b(r)};var Nr,$r=Ar;Nr=v?h:function(r){return null!==r&&"object"==typeof r&&!$r(r)&&"number"==typeof r.length&&Er(r.length)&&r.length>=0&&r.length<=4294967295&&g(r,"callee")&&!Fr(r,"callee")};var Cr=Nr,Br=Array.prototype.slice;function Lr(r){return null!==r&&"object"==typeof r}var Rr=function(r){if("function"!=typeof r)throw new TypeError(J("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!$r(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Lr);ar(Lr,"isObjectLikeArray",Rr);var Gr=Fr((function(){}),"prototype"),Wr=!Fr({toString:null},"toString");function Xr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Er(r.length)&&r.length>=0&&r.length<=9007199254740991}function Zr(r,e,t){var n,o;if(!Xr(r)&&!ur(r))throw new TypeError(J("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!xr(t))throw new TypeError(J("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(jr(e)){for(;o<n;o++)if(jr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}var Mr=/./;function Yr(r){return"boolean"==typeof r}var Ur=Boolean,Hr=Boolean.prototype.toString;var zr=l();function Dr(r){return"object"==typeof r&&(r instanceof Ur||(zr?function(r){try{return Hr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===b(r)))}function qr(r){return Yr(r)||Dr(r)}function Jr(){return new Function("return this;")()}ar(qr,"isPrimitive",Yr),ar(qr,"isObject",Dr);var Kr="object"==typeof self?self:null,Qr="object"==typeof window?window:null,re="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ee="object"==typeof re?re:null,te="object"==typeof globalThis?globalThis:null;var ne=function(r){if(arguments.length){if(!Yr(r))throw new TypeError(J("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Jr()}if(te)return te;if(Kr)return Kr;if(Qr)return Qr;if(ee)return ee;throw new Error("unexpected error. Unable to resolve global object.")}(),oe=ne.document&&ne.document.childNodes,ie=Int8Array;function ae(){return/^\s*function\s*([^(]*)/i}var ue=/^\s*function\s*([^(]*)/i;function ce(r){var e,t,n,o;if(("Object"===(t=b(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ue.exec(n.toString()))return e[1]}return Lr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}ar(ae,"REGEXP",ue);var fe="function"==typeof Mr||"object"==typeof ie||"function"==typeof oe?function(r){return ce(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ce(r).toLowerCase():e};function le(r){return r.constructor&&r.constructor.prototype===r}var se=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],pe="undefined"==typeof window?void 0:window;var ge=function(){var r;if("undefined"===fe(pe))return!1;for(r in pe)try{-1===Zr(se,r)&&g(pe,r)&&null!==pe[r]&&"object"===fe(pe[r])&&le(pe[r])}catch(r){return!0}return!1}(),ye="undefined"!=typeof window;var de,be=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];de=c?function(){return 2!==(u(arguments)||"").length}(1,2)?function(r){return Cr(r)?u(Br.call(r)):u(r)}:u:function(r){var e,t,n,o,i,a,u;if(o=[],Cr(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!g(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!Lr(r))return o;t=Gr&&n}for(i in r)t&&"prototype"===i||!g(r,i)||o.push(String(i));if(Wr)for(e=function(r){if(!1===ye&&!ge)return le(r);try{return le(r)}catch(r){return!1}}(r),u=0;u<be.length;u++)a=be[u],e&&"constructor"===a||!g(r,a)||o.push(String(a));return o};var he,ve=de;he=i?function(r){return a(t(r))}:function(r){return ve(t(r))};var we=he;var me,je,Oe=Object.getPrototypeOf;je=Object.getPrototypeOf,me="function"===fe(je)?Oe:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===b(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Se=me;function _e(r){return null==r?null:(r=t(r),Se(r))}function Ee(r,e){return!1!==g(r,e)&&!1===Fr(r,e)}function ke(r){var e,t,n,i,a,u;if(null==r)return[];n=Object(r),e={},t=[];do{for(i=we(n),u=0;u<i.length;u++)!1===g(e,a=i[u])&&Ee(n,a)&&t.push(a),e[a]=!0;for(i=o(n),u=0;u<i.length;u++)!1===g(e,a=i[u])&&Ee(n,a)&&t.push(a),e[a]=!0;n=_e(n)}while(n);return t}export{ke as default};
//# sourceMappingURL=mod.js.map
