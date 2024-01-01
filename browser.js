// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r=void 0!==Object.getOwnPropertySymbols,t=Object,n=t.getOwnPropertySymbols;e=r?function(e){return n(t(e))}:function(){return[]};var o=e,i=void 0!==Object.getOwnPropertyNames,a=t.getOwnPropertyNames;function u(e){return Object.keys(Object(e))}var c=void 0!==Object.keys,f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function l(){return f&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,p=Object.prototype.hasOwnProperty;function g(e,r){return null!=e&&p.call(e,r)}var y,d="function"==typeof Symbol?Symbol:void 0,h="function"==typeof d?d.toStringTag:"",b=l()?function(e){var r,t,n;if(null==e)return s.call(e);t=e[h],r=g(e,h);try{e[h]=void 0}catch(r){return s.call(e)}return n=s.call(e),r?e[h]=t:delete e[h],n}:function(e){return s.call(e)};function v(e){return"[object Arguments]"===b(e)}y=function(){return v(arguments)}();var w=y,m="function"==typeof Object.defineProperty?Object.defineProperty:null,j=Object.defineProperty;function O(e){return"number"==typeof e}function S(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function _(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+S(o):S(o)+e,n&&(e="-"+e)),e}var E=String.prototype.toLowerCase,k=String.prototype.toUpperCase;function T(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!O(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=_(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=_(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===k.call(e.specifier)?k.call(t):E.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function x(e){return"string"==typeof e}var I=Math.abs,P=String.prototype.toLowerCase,A=String.prototype.toUpperCase,V=String.prototype.replace,F=/e\+(\d)$/,N=/e-(\d)$/,$=/^(\d+)$/,C=/^(\d+)e/,B=/\.0$/,L=/\.0*e/,R=/(\..*[^0])0*e/;function G(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!O(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":I(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=V.call(t,R,"$1e"),t=V.call(t,L,"e"),t=V.call(t,B,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=V.call(t,F,"e+0$1"),t=V.call(t,N,"e-0$1"),e.alternate&&(t=V.call(t,$,"$1."),t=V.call(t,C,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===A.call(e.specifier)?A.call(t):P.call(t)}function W(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function X(e,r,t){var n=r-e.length;return n<0?e:e=t?e+W(n):W(n)+e}var Z=String.fromCharCode,M=isNaN,Y=Array.isArray;function U(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function H(e){var r,t,n,o,i,a,u,c,f;if(!Y(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,c=0;c<e.length;c++)if(x(n=e[c]))a+=n;else{if(r=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,M(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,M(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=T(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!M(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=M(i)?String(n.arg):Z(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=G(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=_(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=X(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var z=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function D(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function q(e){var r,t,n,o;for(t=[],o=0,n=z.exec(e);n;)(r=e.slice(o,z.lastIndex-n[0].length)).length&&t.push(r),t.push(D(n)),o=z.lastIndex,n=z.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function J(e){return"string"==typeof e}function K(e){var r,t,n;if(!J(e))throw new TypeError(K("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=q(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return H.apply(null,t)}var Q,ee=Object.prototype,re=ee.toString,te=ee.__defineGetter__,ne=ee.__defineSetter__,oe=ee.__lookupGetter__,ie=ee.__lookupSetter__;Q=function(){try{return m({},"x",{}),!0}catch(e){return!1}}()?j:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===re.call(e))throw new TypeError(K("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===re.call(t))throw new TypeError(K("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(oe.call(e,r)||ie.call(e,r)?(n=e.__proto__,e.__proto__=ee,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&te&&te.call(e,r,t.get),a&&ne&&ne.call(e,r,t.set),e};var ae=Q;function ue(e,r,t){ae(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ce(e){return"string"==typeof e}var fe=String.prototype.valueOf,le=l();function se(e){return"object"==typeof e&&(e instanceof String||(le?function(e){try{return fe.call(e),!0}catch(e){return!1}}(e):"[object String]"===b(e)))}function pe(e){return ce(e)||se(e)}function ge(e){return"number"==typeof e}ue(pe,"isPrimitive",ce),ue(pe,"isObject",se);var ye=Number,de=ye.prototype.toString,he=l();function be(e){return"object"==typeof e&&(e instanceof ye||(he?function(e){try{return de.call(e),!0}catch(e){return!1}}(e):"[object Number]"===b(e)))}function ve(e){return ge(e)||be(e)}function we(e){return e!=e}function me(e){return ge(e)&&we(e)}function je(e){return be(e)&&we(e.valueOf())}function Oe(e){return me(e)||je(e)}ue(ve,"isPrimitive",ge),ue(ve,"isObject",be),ue(Oe,"isPrimitive",me),ue(Oe,"isObject",je);var Se=Number.POSITIVE_INFINITY,_e=ye.NEGATIVE_INFINITY,Ee=Math.floor;function ke(e){return Ee(e)===e}function Te(e){return e<Se&&e>_e&&ke(e)}function xe(e){return ge(e)&&Te(e)}function Ie(e){return be(e)&&Te(e.valueOf())}function Pe(e){return xe(e)||Ie(e)}ue(Pe,"isPrimitive",xe),ue(Pe,"isObject",Ie);var Ae,Ve=Object.prototype.propertyIsEnumerable,Fe=!Ve.call("beep","0");function Ne(e,r){var t;return null!=e&&(!(t=Ve.call(e,r))&&Fe&&pe(e)?!me(r=+r)&&xe(r)&&r>=0&&r<e.length:t)}Ae=Array.isArray?Array.isArray:function(e){return"[object Array]"===b(e)};var $e,Ce=Ae;$e=w?v:function(e){return null!==e&&"object"==typeof e&&!Ce(e)&&"number"==typeof e.length&&ke(e.length)&&e.length>=0&&e.length<=4294967295&&g(e,"callee")&&!Ne(e,"callee")};var Be=$e,Le=Array.prototype.slice;function Re(e){return null!==e&&"object"==typeof e}var Ge=function(e){if("function"!=typeof e)throw new TypeError(K("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Ce(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Re);ue(Re,"isObjectLikeArray",Ge);var We=Ne((function(){}),"prototype"),Xe=!Ne({toString:null},"toString");function Ze(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&ke(e.length)&&e.length>=0&&e.length<=9007199254740991}function Me(e,r,t){var n,o;if(!Ze(e)&&!ce(e))throw new TypeError(K("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!xe(t))throw new TypeError(K("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Oe(r)){for(;o<n;o++)if(Oe(e[o]))return o}else for(;o<n;o++)if(e[o]===r)return o;return-1}var Ye=/./;function Ue(e){return"boolean"==typeof e}var He=Boolean,ze=Boolean.prototype.toString,De=l();function qe(e){return"object"==typeof e&&(e instanceof He||(De?function(e){try{return ze.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===b(e)))}function Je(e){return Ue(e)||qe(e)}function Ke(){return new Function("return this;")()}ue(Je,"isPrimitive",Ue),ue(Je,"isObject",qe);var Qe="object"==typeof self?self:null,er="object"==typeof window?window:null,rr="object"==typeof globalThis?globalThis:null,tr=function(e){if(arguments.length){if(!Ue(e))throw new TypeError(K("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Ke()}if(rr)return rr;if(Qe)return Qe;if(er)return er;throw new Error("unexpected error. Unable to resolve global object.")}(),nr=tr.document&&tr.document.childNodes,or=Int8Array;function ir(){return/^\s*function\s*([^(]*)/i}var ar=/^\s*function\s*([^(]*)/i;function ur(e){var r,t,n,o;if(("Object"===(t=b(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ar.exec(n.toString()))return r[1]}return Re(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}ue(ir,"REGEXP",ar);var cr="function"==typeof Ye||"object"==typeof or||"function"==typeof nr?function(e){return ur(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?ur(e).toLowerCase():r};function fr(e){return e.constructor&&e.constructor.prototype===e}var lr,sr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],pr="undefined"==typeof window?void 0:window,gr=function(){var e;if("undefined"===cr(pr))return!1;for(e in pr)try{-1===Me(sr,e)&&g(pr,e)&&null!==pr[e]&&"object"===cr(pr[e])&&fr(pr[e])}catch(e){return!0}return!1}(),yr="undefined"!=typeof window,dr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];lr=c?function(){return 2!==(u(arguments)||"").length}(1,2)?function(e){return Be(e)?u(Le.call(e)):u(e)}:u:function(e){var r,t,n,o,i,a,u;if(o=[],Be(e)){for(u=0;u<e.length;u++)o.push(u.toString());return o}if("string"==typeof e){if(e.length>0&&!g(e,"0"))for(u=0;u<e.length;u++)o.push(u.toString())}else{if(0==(n="function"==typeof e)&&!Re(e))return o;t=We&&n}for(i in e)t&&"prototype"===i||!g(e,i)||o.push(String(i));if(Xe)for(r=function(e){if(!1===yr&&!gr)return fr(e);try{return fr(e)}catch(e){return!1}}(e),u=0;u<dr.length;u++)a=dr[u],r&&"constructor"===a||!g(e,a)||o.push(String(a));return o};var hr,br=lr;hr=i?function(e){return a(t(e))}:function(e){return br(t(e))};var vr,wr,mr=hr,jr=Object.getPrototypeOf;wr=Object.getPrototypeOf,vr="function"===cr(wr)?jr:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===b(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Or=vr;function Sr(e){return null==e?null:(e=t(e),Or(e))}function _r(e,r){return!1!==g(e,r)&&!1===Ne(e,r)}return function(e){var r,t,n,i,a,u;if(null==e)return[];n=Object(e),r={},t=[];do{for(i=mr(n),u=0;u<i.length;u++)!1===g(r,a=i[u])&&_r(n,a)&&t.push(a),r[a]=!0;for(i=o(n),u=0;u<i.length;u++)!1===g(r,a=i[u])&&_r(n,a)&&t.push(a),r[a]=!0;n=Sr(n)}while(n);return t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).nonEnumerablePropertiesIn=r();
//# sourceMappingURL=browser.js.map