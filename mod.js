// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r,e=void 0!==Object.getOwnPropertySymbols,t=Object,n=t.getOwnPropertySymbols;r=e?function(r){return n(t(r))}:function(){return[]};var i=r,o=void 0!==Object.getOwnPropertyNames,a=Object,c=a.getOwnPropertyNames;function u(r){return Object.keys(Object(r))}var s=void 0!==Object.keys;var l="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function f(){return l&&"symbol"==typeof Symbol.toStringTag}var p=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function d(r,e){return null!=r&&g.call(r,e)}var h="function"==typeof Symbol?Symbol:void 0,b="function"==typeof h?h.toStringTag:"";var v=f()?function(r){var e,t,n;if(null==r)return p.call(r);t=r[b],e=d(r,b);try{r[b]=void 0}catch(e){return p.call(r)}return n=p.call(r),e?r[b]=t:delete r[b],n}:function(r){return p.call(r)};function y(r){return"[object Arguments]"===v(r)}var w=function(){return y(arguments)}(),m="function"==typeof Object.defineProperty?Object.defineProperty:null;var j=Object.defineProperty;function E(r){return"number"==typeof r}function S(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function k(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+S(i):S(i)+r,n&&(r="-"+r)),r}var x=String.prototype.toLowerCase,O=String.prototype.toUpperCase;function T(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!E(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=k(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=k(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===O.call(r.specifier)?O.call(t):x.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function I(r){return"string"==typeof r}var V=Math.abs,_=String.prototype.toLowerCase,A=String.prototype.toUpperCase,F=String.prototype.replace,$=/e\+(\d)$/,P=/e-(\d)$/,C=/^(\d+)$/,R=/^(\d+)e/,N=/\.0$/,L=/\.0*e/,B=/(\..*[^0])0*e/;function Z(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!E(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":V(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=F.call(t,B,"$1e"),t=F.call(t,L,"e"),t=F.call(t,N,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=F.call(t,$,"e+0$1"),t=F.call(t,P,"e-0$1"),r.alternate&&(t=F.call(t,C,"$1."),t=F.call(t,R,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===A.call(r.specifier)?A.call(t):_.call(t)}function W(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function G(r,e,t){var n=e-r.length;return n<0?r:r=t?r+W(n):W(n)+r}var X=String.fromCharCode,M=isNaN,U=Array.isArray;function Y(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function z(r){var e,t,n,i,o,a,c,u,s;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(I(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=Y(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,M(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,M(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=T(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!M(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=M(o)?String(n.arg):X(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Z(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=k(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=G(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var H=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function D(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function q(r){var e,t,n,i;for(t=[],i=0,n=H.exec(r);n;)(e=r.slice(i,H.lastIndex-n[0].length)).length&&t.push(e),t.push(D(n)),i=H.lastIndex,n=H.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function J(r){return"string"==typeof r}function K(r){var e,t;if(!J(r))throw new TypeError(K("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[q(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return z.apply(null,e)}var Q,rr=Object.prototype,er=rr.toString,tr=rr.__defineGetter__,nr=rr.__defineSetter__,ir=rr.__lookupGetter__,or=rr.__lookupSetter__;Q=function(){try{return m({},"x",{}),!0}catch(r){return!1}}()?j:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===er.call(r))throw new TypeError(K("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===er.call(t))throw new TypeError(K("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(ir.call(r,e)||or.call(r,e)?(n=r.__proto__,r.__proto__=rr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&tr&&tr.call(r,e,t.get),a&&nr&&nr.call(r,e,t.set),r};var ar=Q;function cr(r,e,t){ar(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ur(r){return"string"==typeof r}var sr=Object.prototype.toString;var lr="function"==typeof h?h.toStringTag:"";var fr=f()?function(r){var e,t,n;if(null==r)return sr.call(r);t=r[lr],e=d(r,lr);try{r[lr]=void 0}catch(e){return sr.call(r)}return n=sr.call(r),e?r[lr]=t:delete r[lr],n}:function(r){return sr.call(r)},pr=String.prototype.valueOf;var gr=f();function dr(r){return"object"==typeof r&&(r instanceof String||(gr?function(r){try{return pr.call(r),!0}catch(r){return!1}}(r):"[object String]"===fr(r)))}function hr(r){return ur(r)||dr(r)}function br(r){return"number"==typeof r}cr(hr,"isPrimitive",ur),cr(hr,"isObject",dr);var vr=Object.prototype.toString;var yr="function"==typeof h?h.toStringTag:"";var wr=f()?function(r){var e,t,n;if(null==r)return vr.call(r);t=r[yr],e=d(r,yr);try{r[yr]=void 0}catch(e){return vr.call(r)}return n=vr.call(r),e?r[yr]=t:delete r[yr],n}:function(r){return vr.call(r)},mr=Number,jr=mr.prototype.toString;var Er=f();function Sr(r){return"object"==typeof r&&(r instanceof mr||(Er?function(r){try{return jr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===wr(r)))}function kr(r){return br(r)||Sr(r)}function xr(r){return r!=r}function Or(r){return br(r)&&xr(r)}function Tr(r){return Sr(r)&&xr(r.valueOf())}function Ir(r){return Or(r)||Tr(r)}cr(kr,"isPrimitive",br),cr(kr,"isObject",Sr),cr(Ir,"isPrimitive",Or),cr(Ir,"isObject",Tr);var Vr=Number.POSITIVE_INFINITY,_r=mr.NEGATIVE_INFINITY,Ar=Math.floor;function Fr(r){return Ar(r)===r}function $r(r){return r<Vr&&r>_r&&Fr(r)}function Pr(r){return br(r)&&$r(r)}function Cr(r){return Sr(r)&&$r(r.valueOf())}function Rr(r){return Pr(r)||Cr(r)}cr(Rr,"isPrimitive",Pr),cr(Rr,"isObject",Cr);var Nr=Object.prototype.propertyIsEnumerable;var Lr,Br=!Nr.call("beep","0");function Zr(r,e){var t;return null!=r&&(!(t=Nr.call(r,e))&&Br&&hr(r)?!Or(e=+e)&&Pr(e)&&e>=0&&e<r.length:t)}Lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===v(r)};var Wr,Gr=Lr;Wr=w?y:function(r){return null!==r&&"object"==typeof r&&!Gr(r)&&"number"==typeof r.length&&Fr(r.length)&&r.length>=0&&r.length<=4294967295&&d(r,"callee")&&!Zr(r,"callee")};var Xr=Wr,Mr=Array.prototype.slice;function Ur(r){return"number"==typeof r}function Yr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function zr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+Yr(i):Yr(i)+r,n&&(r="-"+r)),r}var Hr=String.prototype.toLowerCase,Dr=String.prototype.toUpperCase;function qr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Ur(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=zr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=zr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Dr.call(r.specifier)?Dr.call(t):Hr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Jr(r){return"string"==typeof r}var Kr=Math.abs,Qr=String.prototype.toLowerCase,re=String.prototype.toUpperCase,ee=String.prototype.replace,te=/e\+(\d)$/,ne=/e-(\d)$/,ie=/^(\d+)$/,oe=/^(\d+)e/,ae=/\.0$/,ce=/\.0*e/,ue=/(\..*[^0])0*e/;function se(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Ur(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Kr(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=ee.call(t,ue,"$1e"),t=ee.call(t,ce,"e"),t=ee.call(t,ae,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=ee.call(t,te,"e+0$1"),t=ee.call(t,ne,"e-0$1"),r.alternate&&(t=ee.call(t,ie,"$1."),t=ee.call(t,oe,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===re.call(r.specifier)?re.call(t):Qr.call(t)}function le(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function fe(r,e,t){var n=e-r.length;return n<0?r:r=t?r+le(n):le(n)+r}var pe=String.fromCharCode,ge=isNaN,de=Array.isArray;function he(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function be(r){var e,t,n,i,o,a,c,u,s;if(!de(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(Jr(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=he(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,ge(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,ge(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=qr(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!ge(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ge(o)?String(n.arg):pe(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=se(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=zr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=fe(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var ve=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ye(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function we(r){var e,t,n,i;for(t=[],i=0,n=ve.exec(r);n;)(e=r.slice(i,ve.lastIndex-n[0].length)).length&&t.push(e),t.push(ye(n)),i=ve.lastIndex,n=ve.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function me(r){return"string"==typeof r}function je(r){var e,t;if(!me(r))throw new TypeError(je("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[we(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return be.apply(null,e)}function Ee(r){return null!==r&&"object"==typeof r}var Se=function(r){if("function"!=typeof r)throw new TypeError(je("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Gr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ee);cr(Ee,"isObjectLikeArray",Se);var ke=Zr((function(){}),"prototype"),xe=!Zr({toString:null},"toString");function Oe(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Fr(r.length)&&r.length>=0&&r.length<=9007199254740991}function Te(r,e,t){var n,i;if(!Oe(r)&&!ur(r))throw new TypeError(je("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Pr(t))throw new TypeError(je("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Ir(e)){for(;i<n;i++)if(Ir(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var Ie=/./;function Ve(r){return"boolean"==typeof r}var _e=Boolean,Ae=Boolean.prototype.toString;var Fe=f();function $e(r){return"object"==typeof r&&(r instanceof _e||(Fe?function(r){try{return Ae.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===v(r)))}function Pe(r){return Ve(r)||$e(r)}function Ce(){return new Function("return this;")()}cr(Pe,"isPrimitive",Ve),cr(Pe,"isObject",$e);var Re="object"==typeof self?self:null,Ne="object"==typeof window?window:null,Le="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Be="object"==typeof Le?Le:null,Ze="object"==typeof globalThis?globalThis:null;var We=function(r){if(arguments.length){if(!Ve(r))throw new TypeError(je("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Ce()}if(Ze)return Ze;if(Re)return Re;if(Ne)return Ne;if(Be)return Be;throw new Error("unexpected error. Unable to resolve global object.")}(),Ge=We.document&&We.document.childNodes,Xe=Int8Array;function Me(){return/^\s*function\s*([^(]*)/i}var Ue=/^\s*function\s*([^(]*)/i;function Ye(r){var e,t,n,i;if(("Object"===(t=v(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Ue.exec(n.toString()))return e[1]}return Ee(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}cr(Me,"REGEXP",Ue);var ze="function"==typeof Ie||"object"==typeof Xe||"function"==typeof Ge?function(r){return Ye(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Ye(r).toLowerCase():e};function He(r){return r.constructor&&r.constructor.prototype===r}var De=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],qe="undefined"==typeof window?void 0:window;var Je=function(){var r;if("undefined"===ze(qe))return!1;for(r in qe)try{-1===Te(De,r)&&d(qe,r)&&null!==qe[r]&&"object"===ze(qe[r])&&He(qe[r])}catch(r){return!0}return!1}(),Ke="undefined"!=typeof window;var Qe,rt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Qe=s?function(){return 2!==(u(arguments)||"").length}(1,2)?function(r){return Xr(r)?u(Mr.call(r)):u(r)}:u:function(r){var e,t,n,i,o,a,c;if(i=[],Xr(r)){for(c=0;c<r.length;c++)i.push(c.toString());return i}if("string"==typeof r){if(r.length>0&&!d(r,"0"))for(c=0;c<r.length;c++)i.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!Ee(r))return i;t=ke&&n}for(o in r)t&&"prototype"===o||!d(r,o)||i.push(String(o));if(xe)for(e=function(r){if(!1===Ke&&!Je)return He(r);try{return He(r)}catch(r){return!1}}(r),c=0;c<rt.length;c++)a=rt[c],e&&"constructor"===a||!d(r,a)||i.push(String(a));return i};var et,tt=Qe;et=o?function(r){return c(a(r))}:function(r){return tt(a(r))};var nt=et,it=Object,ot=/./;function at(r){return"boolean"==typeof r}var ct=Object.prototype.toString;var ut="function"==typeof h?h.toStringTag:"";var st=f()?function(r){var e,t,n;if(null==r)return ct.call(r);t=r[ut],e=d(r,ut);try{r[ut]=void 0}catch(e){return ct.call(r)}return n=ct.call(r),e?r[ut]=t:delete r[ut],n}:function(r){return ct.call(r)},lt=Boolean,ft=Boolean.prototype.toString;var pt=f();function gt(r){return"object"==typeof r&&(r instanceof lt||(pt?function(r){try{return ft.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===st(r)))}function dt(r){return at(r)||gt(r)}function ht(r){return"number"==typeof r}function bt(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function vt(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+bt(i):bt(i)+r,n&&(r="-"+r)),r}cr(dt,"isPrimitive",at),cr(dt,"isObject",gt);var yt=String.prototype.toLowerCase,wt=String.prototype.toUpperCase;function mt(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!ht(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=vt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=vt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===wt.call(r.specifier)?wt.call(t):yt.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function jt(r){return"string"==typeof r}var Et=Math.abs,St=String.prototype.toLowerCase,kt=String.prototype.toUpperCase,xt=String.prototype.replace,Ot=/e\+(\d)$/,Tt=/e-(\d)$/,It=/^(\d+)$/,Vt=/^(\d+)e/,_t=/\.0$/,At=/\.0*e/,Ft=/(\..*[^0])0*e/;function $t(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!ht(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Et(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=xt.call(t,Ft,"$1e"),t=xt.call(t,At,"e"),t=xt.call(t,_t,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=xt.call(t,Ot,"e+0$1"),t=xt.call(t,Tt,"e-0$1"),r.alternate&&(t=xt.call(t,It,"$1."),t=xt.call(t,Vt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===kt.call(r.specifier)?kt.call(t):St.call(t)}function Pt(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Ct(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Pt(n):Pt(n)+r}var Rt=String.fromCharCode,Nt=isNaN,Lt=Array.isArray;function Bt(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Zt(r){var e,t,n,i,o,a,c,u,s;if(!Lt(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(jt(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=Bt(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Nt(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Nt(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=mt(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Nt(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Nt(o)?String(n.arg):Rt(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=$t(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=vt(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Ct(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var Wt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Gt(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Xt(r){var e,t,n,i;for(t=[],i=0,n=Wt.exec(r);n;)(e=r.slice(i,Wt.lastIndex-n[0].length)).length&&t.push(e),t.push(Gt(n)),i=Wt.lastIndex,n=Wt.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Mt(r){return"string"==typeof r}function Ut(r){var e,t;if(!Mt(r))throw new TypeError(Ut("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Xt(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Zt.apply(null,e)}function Yt(){return new Function("return this;")()}var zt="object"==typeof self?self:null,Ht="object"==typeof window?window:null,Dt="object"==typeof Le?Le:null,qt="object"==typeof globalThis?globalThis:null;var Jt=function(r){if(arguments.length){if(!at(r))throw new TypeError(Ut("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Yt()}if(qt)return qt;if(zt)return zt;if(Ht)return Ht;if(Dt)return Dt;throw new Error("unexpected error. Unable to resolve global object.")}(),Kt=Jt.document&&Jt.document.childNodes,Qt=Int8Array;function rn(){return/^\s*function\s*([^(]*)/i}var en,tn=/^\s*function\s*([^(]*)/i;cr(rn,"REGEXP",tn),en=Array.isArray?Array.isArray:function(r){return"[object Array]"===st(r)};var nn=en;function on(r){return null!==r&&"object"==typeof r}var an=function(r){if("function"!=typeof r)throw new TypeError(Ut("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!nn(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(on);function cn(r){var e,t,n,i;if(("Object"===(t=st(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=tn.exec(n.toString()))return e[1]}return on(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}cr(on,"isObjectLikeArray",an);var un="function"==typeof ot||"object"==typeof Qt||"function"==typeof Kt?function(r){return cn(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?cn(r).toLowerCase():e};var sn,ln,fn=Object.getPrototypeOf;ln=Object.getPrototypeOf,sn="function"===un(ln)?fn:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===st(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var pn=sn;function gn(r){return null==r?null:(r=it(r),pn(r))}function dn(r,e){return!1!==d(r,e)&&!1===Zr(r,e)}function hn(r){var e,t,n,o,a,c;if(null==r)return[];n=Object(r),e={},t=[];do{for(o=nt(n),c=0;c<o.length;c++)!1===d(e,a=o[c])&&dn(n,a)&&t.push(a),e[a]=!0;for(o=i(n),c=0;c<o.length;c++)!1===d(e,a=o[c])&&dn(n,a)&&t.push(a),e[a]=!0;n=gn(n)}while(n);return t}export{hn as default};
//# sourceMappingURL=mod.js.map
