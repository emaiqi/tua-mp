!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.TuaWx={})}(this,function(t){"use strict";var d={enumerable:!0,configurable:!0},v=function(t){return"function"==typeof t},h=function(e,n){Object.keys(e).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))})},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},f=null,m=function(i,u){return function(t){var e,n,r,o=t.path,a=t.newVal,c=t.oldVal;f=b({},f,(r=a,(n=o)in(e={})?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e)),Promise.resolve().then(function(){if(f){i.setData(b({},i.$computed,f));var t=u[o];v(t)&&t.call(i,f[o],c),f=null}})}},j=function(s){return function u(f){var t,a,c,i,l=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";if(Array.isArray(f)){var e=f.map(function(t,e){return u(t,l+"["+e+"]")});return a=(t={arr:e,path:l,asyncSetData:s}).arr,c=t.path,i=t.asyncSetData,["pop","push","sort","shift","splice","unshift","reverse"].forEach(function(t){var o=a[t];a[t]=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=o.apply(this,e);return i({path:c,newVal:a}),r}}),a}if("object"===(void 0===f?"undefined":n(f))){var p=Object.create(null);return Object.keys(f).forEach(function(t){if(!/^__.*__$/.test(t)){var e,n,r,o,a,c,i=""===l?t:l+"."+t;e={obj:p,key:t,val:u(f[t],i),path:i,asyncSetData:s},n=e.obj,r=e.key,o=e.val,a=e.path,c=e.asyncSetData,Object.defineProperty(n,r,b({},d,{get:function(){return o},set:function(t){if(t!==o){var e=o;c({path:a,newVal:o=t,oldVal:e})}}}))}}),p}return f}};console.log("Tua-Mp Version: 0.5.0");t.TuaPage=function(t){var e=t.data,n=t.watch,p=void 0===n?{}:n,r=t.methods,o=void 0===r?{}:r,a=t.computed,s=void 0===a?{}:a,y=function(t,e){var n={};for(var r in t)0<=e.indexOf(r)||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["data","watch","methods","computed"]),c=v(e)?e():e;return Page(b({},y,o,{data:c,onLoad:function(){var t,e,o,a,c,i,n=m(this,p),r=j(n);e=r((t=this).data),t.$data=e,h(e,t),o=this,a=s,c=p,i=Object.create(null),Object.keys(a).forEach(function(n){var r=a[n].call(o);Object.defineProperty(i,n,b({},d,{get:function(){var t=a[n].call(o),e=c[n];return v(e)&&t!==r&&(e.call(o,t,r),r=t),t},set:function(){}}))}),o.$computed=i,h(i,o),o.setData(i);for(var u=arguments.length,f=Array(u),l=0;l<u;l++)f[l]=arguments[l];y.onLoad&&y.onLoad.apply(this,f)}}))},Object.defineProperty(t,"__esModule",{value:!0})});
