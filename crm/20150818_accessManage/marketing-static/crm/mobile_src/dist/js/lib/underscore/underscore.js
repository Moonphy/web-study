(function(){function x(e){function t(t,n,r,i,s,o){for(;s>=0&&s<o;s+=e){var u=i?i[s]:s;r=n(r,t[u],u,t)}return r}return function(n,r,i,s){r=v(r,s,4);var o=!S(n)&&d.keys(n),u=(o||n).length,a=e>0?0:u-1;return arguments.length<3&&(i=n[o?o[a]:a],a+=e),t(n,r,i,o,a,u)}}function C(e){return function(t,n,r){n=m(n,r);var i=E(t),s=e>0?0:i-1;for(;s>=0&&s<i;s+=e)if(n(t[s],s,t))return s;return-1}}function k(e,t,n){return function(r,i,s){var u=0,a=E(r);if(typeof s=="number")e>0?u=s>=0?s:Math.max(s+a,u):a=s>=0?Math.min(s+1,a):s+a+1;else if(n&&s&&a)return s=n(r,i),r[s]===i?s:-1;if(i!==i)return s=t(o.call(r,u,a),d.isNaN),s>=0?s+u:-1;for(s=e>0?u:a-1;s>=0&&s<a;s+=e)if(r[s]===i)return s;return-1}}function M(e,t){var n=O.length,i=e.constructor,s=d.isFunction(i)&&i.prototype||r,o="constructor";d.has(e,o)&&!d.contains(t,o)&&t.push(o);while(n--)o=O[n],o in e&&e[o]!==s[o]&&!d.contains(t,o)&&t.push(o)}var e=this,t=e._,n=Array.prototype,r=Object.prototype,i=Function.prototype,s=n.push,o=n.slice,u=r.toString,a=r.hasOwnProperty,f=Array.isArray,l=Object.keys,c=i.bind,h=Object.create,p=function(){},d=function(e){if(e instanceof d)return e;if(!(this instanceof d))return new d(e);this._wrapped=e};typeof exports!="undefined"?(typeof module!="undefined"&&module.exports&&(exports=module.exports=d),exports._=d):e._=d,d.VERSION="1.8.3";var v=function(e,t,n){if(t===void 0)return e;switch(n==null?3:n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)};case 4:return function(n,r,i,s){return e.call(t,n,r,i,s)}}return function(){return e.apply(t,arguments)}},m=function(e,t,n){return e==null?d.identity:d.isFunction(e)?v(e,t,n):d.isObject(e)?d.matcher(e):d.property(e)};d.iteratee=function(e,t){return m(e,t,Infinity)};var g=function(e,t){return function(n){var r=arguments.length;if(r<2||n==null)return n;for(var i=1;i<r;i++){var s=arguments[i],o=e(s),u=o.length;for(var a=0;a<u;a++){var f=o[a];if(!t||n[f]===void 0)n[f]=s[f]}}return n}},y=function(e){if(!d.isObject(e))return{};if(h)return h(e);p.prototype=e;var t=new p;return p.prototype=null,t},b=function(e){return function(t){return t==null?void 0:t[e]}},w=Math.pow(2,53)-1,E=b("length"),S=function(e){var t=E(e);return typeof t=="number"&&t>=0&&t<=w};d.each=d.forEach=function(e,t,n){t=v(t,n);var r,i;if(S(e))for(r=0,i=e.length;r<i;r++)t(e[r],r,e);else{var s=d.keys(e);for(r=0,i=s.length;r<i;r++)t(e[s[r]],s[r],e)}return e},d.map=d.collect=function(e,t,n){t=m(t,n);var r=!S(e)&&d.keys(e),i=(r||e).length,s=Array(i);for(var o=0;o<i;o++){var u=r?r[o]:o;s[o]=t(e[u],u,e)}return s},d.reduce=d.foldl=d.inject=x(1),d.reduceRight=d.foldr=x(-1),d.find=d.detect=function(e,t,n){var r;S(e)?r=d.findIndex(e,t,n):r=d.findKey(e,t,n);if(r!==void 0&&r!==-1)return e[r]},d.filter=d.select=function(e,t,n){var r=[];return t=m(t,n),d.each(e,function(e,n,i){t(e,n,i)&&r.push(e)}),r},d.reject=function(e,t,n){return d.filter(e,d.negate(m(t)),n)},d.every=d.all=function(e,t,n){t=m(t,n);var r=!S(e)&&d.keys(e),i=(r||e).length;for(var s=0;s<i;s++){var o=r?r[s]:s;if(!t(e[o],o,e))return!1}return!0},d.some=d.any=function(e,t,n){t=m(t,n);var r=!S(e)&&d.keys(e),i=(r||e).length;for(var s=0;s<i;s++){var o=r?r[s]:s;if(t(e[o],o,e))return!0}return!1},d.contains=d.includes=d.include=function(e,t,n,r){S(e)||(e=d.values(e));if(typeof n!="number"||r)n=0;return d.indexOf(e,t,n)>=0},d.invoke=function(e,t){var n=o.call(arguments,2),r=d.isFunction(t);return d.map(e,function(e){var i=r?t:e[t];return i==null?i:i.apply(e,n)})},d.pluck=function(e,t){return d.map(e,d.property(t))},d.where=function(e,t){return d.filter(e,d.matcher(t))},d.findWhere=function(e,t){return d.find(e,d.matcher(t))},d.max=function(e,t,n){var r=-Infinity,i=-Infinity,s,o;if(t==null&&e!=null){e=S(e)?e:d.values(e);for(var u=0,a=e.length;u<a;u++)s=e[u],s>r&&(r=s)}else t=m(t,n),d.each(e,function(e,n,s){o=t(e,n,s);if(o>i||o===-Infinity&&r===-Infinity)r=e,i=o});return r},d.min=function(e,t,n){var r=Infinity,i=Infinity,s,o;if(t==null&&e!=null){e=S(e)?e:d.values(e);for(var u=0,a=e.length;u<a;u++)s=e[u],s<r&&(r=s)}else t=m(t,n),d.each(e,function(e,n,s){o=t(e,n,s);if(o<i||o===Infinity&&r===Infinity)r=e,i=o});return r},d.shuffle=function(e){var t=S(e)?e:d.values(e),n=t.length,r=Array(n);for(var i=0,s;i<n;i++)s=d.random(0,i),s!==i&&(r[i]=r[s]),r[s]=t[i];return r},d.sample=function(e,t,n){return t==null||n?(S(e)||(e=d.values(e)),e[d.random(e.length-1)]):d.shuffle(e).slice(0,Math.max(0,t))},d.sortBy=function(e,t,n){return t=m(t,n),d.pluck(d.map(e,function(e,n,r){return{value:e,index:n,criteria:t(e,n,r)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||n===void 0)return 1;if(n<r||r===void 0)return-1}return e.index-t.index}),"value")};var T=function(e){return function(t,n,r){var i={};return n=m(n,r),d.each(t,function(r,s){var o=n(r,s,t);e(i,r,o)}),i}};d.groupBy=T(function(e,t,n){d.has(e,n)?e[n].push(t):e[n]=[t]}),d.indexBy=T(function(e,t,n){e[n]=t}),d.countBy=T(function(e,t,n){d.has(e,n)?e[n]++:e[n]=1}),d.toArray=function(e){return e?d.isArray(e)?o.call(e):S(e)?d.map(e,d.identity):d.values(e):[]},d.size=function(e){return e==null?0:S(e)?e.length:d.keys(e).length},d.partition=function(e,t,n){t=m(t,n);var r=[],i=[];return d.each(e,function(e,n,s){(t(e,n,s)?r:i).push(e)}),[r,i]},d.first=d.head=d.take=function(e,t,n){return e==null?void 0:t==null||n?e[0]:d.initial(e,e.length-t)},d.initial=function(e,t,n){return o.call(e,0,Math.max(0,e.length-(t==null||n?1:t)))},d.last=function(e,t,n){return e==null?void 0:t==null||n?e[e.length-1]:d.rest(e,Math.max(0,e.length-t))},d.rest=d.tail=d.drop=function(e,t,n){return o.call(e,t==null||n?1:t)},d.compact=function(e){return d.filter(e,d.identity)};var N=function(e,t,n,r){var i=[],s=0;for(var o=r||0,u=E(e);o<u;o++){var a=e[o];if(S(a)&&(d.isArray(a)||d.isArguments(a))){t||(a=N(a,t,n));var f=0,l=a.length;i.length+=l;while(f<l)i[s++]=a[f++]}else n||(i[s++]=a)}return i};d.flatten=function(e,t){return N(e,t,!1)},d.without=function(e){return d.difference(e,o.call(arguments,1))},d.uniq=d.unique=function(e,t,n,r){d.isBoolean(t)||(r=n,n=t,t=!1),n!=null&&(n=m(n,r));var i=[],s=[];for(var o=0,u=E(e);o<u;o++){var a=e[o],f=n?n(a,o,e):a;t?((!o||s!==f)&&i.push(a),s=f):n?d.contains(s,f)||(s.push(f),i.push(a)):d.contains(i,a)||i.push(a)}return i},d.union=function(){return d.uniq(N(arguments,!0,!0))},d.intersection=function(e){var t=[],n=arguments.length;for(var r=0,i=E(e);r<i;r++){var s=e[r];if(d.contains(t,s))continue;for(var o=1;o<n;o++)if(!d.contains(arguments[o],s))break;o===n&&t.push(s)}return t},d.difference=function(e){var t=N(arguments,!0,!0,1);return d.filter(e,function(e){return!d.contains(t,e)})},d.zip=function(){return d.unzip(arguments)},d.unzip=function(e){var t=e&&d.max(e,E).length||0,n=Array(t);for(var r=0;r<t;r++)n[r]=d.pluck(e,r);return n},d.object=function(e,t){var n={};for(var r=0,i=E(e);r<i;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},d.findIndex=C(1),d.findLastIndex=C(-1),d.sortedIndex=function(e,t,n,r){n=m(n,r,1);var i=n(t),s=0,o=E(e);while(s<o){var u=Math.floor((s+o)/2);n(e[u])<i?s=u+1:o=u}return s},d.indexOf=k(1,d.findIndex,d.sortedIndex),d.lastIndexOf=k(-1,d.findLastIndex),d.range=function(e,t,n){t==null&&(t=e||0,e=0),n=n||1;var r=Math.max(Math.ceil((t-e)/n),0),i=Array(r);for(var s=0;s<r;s++,e+=n)i[s]=e;return i};var L=function(e,t,n,r,i){if(r instanceof t){var s=y(e.prototype),o=e.apply(s,i);return d.isObject(o)?o:s}return e.apply(n,i)};d.bind=function(e,t){if(c&&e.bind===c)return c.apply(e,o.call(arguments,1));if(!d.isFunction(e))throw new TypeError("Bind must be called on a function");var n=o.call(arguments,2),r=function(){return L(e,r,t,this,n.concat(o.call(arguments)))};return r},d.partial=function(e){var t=o.call(arguments,1),n=function(){var r=0,i=t.length,s=Array(i);for(var o=0;o<i;o++)s[o]=t[o]===d?arguments[r++]:t[o];while(r<arguments.length)s.push(arguments[r++]);return L(e,n,this,this,s)};return n},d.bindAll=function(e){var t,n=arguments.length,r;if(n<=1)throw new Error("bindAll must be passed function names");for(t=1;t<n;t++)r=arguments[t],e[r]=d.bind(e[r],e);return e},d.memoize=function(e,t){var n=function(r){var i=n.cache,s=""+(t?t.apply(this,arguments):r);return d.has(i,s)||(i[s]=e.apply(this,arguments)),i[s]};return n.cache={},n},d.delay=function(e,t){var n=o.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},d.defer=d.partial(d.delay,d,1),d.throttle=function(e,t,n){var r,i,s,o=null,u=0;n||(n={});var a=function(){u=n.leading===!1?0:d.now(),o=null,s=e.apply(r,i),o||(r=i=null)};return function(){var f=d.now();!u&&n.leading===!1&&(u=f);var l=t-(f-u);return r=this,i=arguments,l<=0||l>t?(o&&(clearTimeout(o),o=null),u=f,s=e.apply(r,i),o||(r=i=null)):!o&&n.trailing!==!1&&(o=setTimeout(a,l)),s}},d.debounce=function(e,t,n){var r,i,s,o,u,a=function(){var f=d.now()-o;f<t&&f>=0?r=setTimeout(a,t-f):(r=null,n||(u=e.apply(s,i),r||(s=i=null)))};return function(){s=this,i=arguments,o=d.now();var f=n&&!r;return r||(r=setTimeout(a,t)),f&&(u=e.apply(s,i),s=i=null),u}},d.wrap=function(e,t){return d.partial(t,e)},d.negate=function(e){return function(){return!e.apply(this,arguments)}},d.compose=function(){var e=arguments,t=e.length-1;return function(){var n=t,r=e[t].apply(this,arguments);while(n--)r=e[n].call(this,r);return r}},d.after=function(e,t){return function(){if(--e<1)return t.apply(this,arguments)}},d.before=function(e,t){var n;return function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=null),n}},d.once=d.partial(d.before,2);var A=!{toString:null}.propertyIsEnumerable("toString"),O=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];d.keys=function(e){if(!d.isObject(e))return[];if(l)return l(e);var t=[];for(var n in e)d.has(e,n)&&t.push(n);return A&&M(e,t),t},d.allKeys=function(e){if(!d.isObject(e))return[];var t=[];for(var n in e)t.push(n);return A&&M(e,t),t},d.values=function(e){var t=d.keys(e),n=t.length,r=Array(n);for(var i=0;i<n;i++)r[i]=e[t[i]];return r},d.mapObject=function(e,t,n){t=m(t,n);var r=d.keys(e),i=r.length,s={},o;for(var u=0;u<i;u++)o=r[u],s[o]=t(e[o],o,e);return s},d.pairs=function(e){var t=d.keys(e),n=t.length,r=Array(n);for(var i=0;i<n;i++)r[i]=[t[i],e[t[i]]];return r},d.invert=function(e){var t={},n=d.keys(e);for(var r=0,i=n.length;r<i;r++)t[e[n[r]]]=n[r];return t},d.functions=d.methods=function(e){var t=[];for(var n in e)d.isFunction(e[n])&&t.push(n);return t.sort()},d.extend=g(d.allKeys),d.extendOwn=d.assign=g(d.keys),d.findKey=function(e,t,n){t=m(t,n);var r=d.keys(e),i;for(var s=0,o=r.length;s<o;s++){i=r[s];if(t(e[i],i,e))return i}},d.pick=function(e,t,n){var r={},i=e,s,o;if(i==null)return r;d.isFunction(t)?(o=d.allKeys(i),s=v(t,n)):(o=N(arguments,!1,!1,1),s=function(e,t,n){return t in n},i=Object(i));for(var u=0,a=o.length;u<a;u++){var f=o[u],l=i[f];s(l,f,i)&&(r[f]=l)}return r},d.omit=function(e,t,n){if(d.isFunction(t))t=d.negate(t);else{var r=d.map(N(arguments,!1,!1,1),String);t=function(e,t){return!d.contains(r,t)}}return d.pick(e,t,n)},d.defaults=g(d.allKeys,!0),d.create=function(e,t){var n=y(e);return t&&d.extendOwn(n,t),n},d.clone=function(e){return d.isObject(e)?d.isArray(e)?e.slice():d.extend({},e):e},d.tap=function(e,t){return t(e),e},d.isMatch=function(e,t){var n=d.keys(t),r=n.length;if(e==null)return!r;var i=Object(e);for(var s=0;s<r;s++){var o=n[s];if(t[o]!==i[o]||!(o in i))return!1}return!0};var _=function(e,t,n,r){if(e===t)return e!==0||1/e===1/t;if(e==null||t==null)return e===t;e instanceof d&&(e=e._wrapped),t instanceof d&&(t=t._wrapped);var i=u.call(e);if(i!==u.call(t))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":if(+e!==+e)return+t!==+t;return+e===0?1/+e===1/t:+e===+t;case"[object Date]":case"[object Boolean]":return+e===+t}var s=i==="[object Array]";if(!s){if(typeof e!="object"||typeof t!="object")return!1;var o=e.constructor,a=t.constructor;if(o!==a&&!(d.isFunction(o)&&o instanceof o&&d.isFunction(a)&&a instanceof a)&&"constructor"in e&&"constructor"in t)return!1}n=n||[],r=r||[];var f=n.length;while(f--)if(n[f]===e)return r[f]===t;n.push(e),r.push(t);if(s){f=e.length;if(f!==t.length)return!1;while(f--)if(!_(e[f],t[f],n,r))return!1}else{var l=d.keys(e),c;f=l.length;if(d.keys(t).length!==f)return!1;while(f--){c=l[f];if(!d.has(t,c)||!_(e[c],t[c],n,r))return!1}}return n.pop(),r.pop(),!0};d.isEqual=function(e,t){return _(e,t)},d.isEmpty=function(e){return e==null?!0:S(e)&&(d.isArray(e)||d.isString(e)||d.isArguments(e))?e.length===0:d.keys(e).length===0},d.isElement=function(e){return!!e&&e.nodeType===1},d.isArray=f||function(e){return u.call(e)==="[object Array]"},d.isObject=function(e){var t=typeof e;return t==="function"||t==="object"&&!!e},d.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(e){d["is"+e]=function(t){return u.call(t)==="[object "+e+"]"}}),d.isArguments(arguments)||(d.isArguments=function(e){return d.has(e,"callee")}),typeof /./!="function"&&typeof Int8Array!="object"&&(d.isFunction=function(e){return typeof e=="function"||!1}),d.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},d.isNaN=function(e){return d.isNumber(e)&&e!==+e},d.isBoolean=function(e){return e===!0||e===!1||u.call(e)==="[object Boolean]"},d.isNull=function(e){return e===null},d.isUndefined=function(e){return e===void 0},d.has=function(e,t){return e!=null&&a.call(e,t)},d.noConflict=function(){return e._=t,this},d.identity=function(e){return e},d.constant=function(e){return function(){return e}},d.noop=function(){},d.property=b,d.propertyOf=function(e){return e==null?function(){}:function(t){return e[t]}},d.matcher=d.matches=function(e){return e=d.extendOwn({},e),function(t){return d.isMatch(t,e)}},d.times=function(e,t,n){var r=Array(Math.max(0,e));t=v(t,n,1);for(var i=0;i<e;i++)r[i]=t(i);return r},d.random=function(e,t){return t==null&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))},d.now=Date.now||function(){return(new Date).getTime()};var D={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},P=d.invert(D),H=function(e){var t=function(t){return e[t]},n="(?:"+d.keys(e).join("|")+")",r=RegExp(n),i=RegExp(n,"g");return function(e){return e=e==null?"":""+e,r.test(e)?e.replace(i,t):e}};d.escape=H(D),d.unescape=H(P),d.result=function(e,t,n){var r=e==null?void 0:e[t];return r===void 0&&(r=n),d.isFunction(r)?r.call(e):r};var B=0;d.uniqueId=function(e){var t=++B+"";return e?e+t:t},d.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var j=/(.)^/,F={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},I=/\\|'|\r|\n|\u2028|\u2029/g,q=function(e){return"\\"+F[e]};d.template=function(e,t,n){!t&&n&&(t=n),t=d.defaults({},t,d.templateSettings);var r=RegExp([(t.escape||j).source,(t.interpolate||j).source,(t.evaluate||j).source].join("|")+"|$","g"),i=0,s="__p+='";e.replace(r,function(t,n,r,o,u){return s+=e.slice(i,u).replace(I,q),i=u+t.length,n?s+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?s+="'+\n((__t=("+r+"))==null?'':__t)+\n'":o&&(s+="';\n"+o+"\n__p+='"),t}),s+="';\n",t.variable||(s="with(obj||{}){\n"+s+"}\n"),s="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+s+"return __p;\n";try{var o=new Function(t.variable||"obj","_",s)}catch(u){throw u.source=s,u}var a=function(e){return o.call(this,e,d)},f=t.variable||"obj";return a.source="function("+f+"){\n"+s+"}",a},d.chain=function(e){var t=d(e);return t._chain=!0,t};var R=function(e,t){return e._chain?d(t).chain():t};d.mixin=function(e){d.each(d.functions(e),function(t){var n=d[t]=e[t];d.prototype[t]=function(){var e=[this._wrapped];return s.apply(e,arguments),R(this,n.apply(d,e))}})},d.mixin(d),d.each(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=n[e];d.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),(e==="shift"||e==="splice")&&n.length===0&&delete n[0],R(this,n)}}),d.each(["concat","join","slice"],function(e){var t=n[e];d.prototype[e]=function(){return R(this,t.apply(this._wrapped,arguments))}}),d.prototype.value=function(){return this._wrapped},d.prototype.valueOf=d.prototype.toJSON=d.prototype.value,d.prototype.toString=function(){return""+this._wrapped},typeof BTR.define=="function"&&BTR.define.amd&&BTR.define("underscore",[],function(){return d})}).call(this);