(function(e){String.prototype.trim===e&&(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}),Array.prototype.reduce===e&&(Array.prototype.reduce=function(t){if(this===void 0||this===null)throw new TypeError;var n=Object(this),r=n.length>>>0,i=0,s;if(typeof t!="function")throw new TypeError;if(r==0&&arguments.length==1)throw new TypeError;if(arguments.length>=2)s=arguments[1];else do{if(i in n){s=n[i++];break}if(++i>=r)throw new TypeError}while(!0);while(i<r)i in n&&(s=t.call(e,s,n[i],i,n)),i++;return s})})();var Zepto=function(){function E(e){return{}.toString.call(e)=="[object Function]"}function S(e){return e instanceof Object}function x(e){return e instanceof Array}function T(e){return typeof e.length=="number"}function N(t){return t.filter(function(t){return t!==e&&t!==null})}function C(e){return e.length>0?[].concat.apply([],e):e}function k(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})}function L(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function A(e){return e.filter(function(e,t,n){return n.indexOf(e)==t})}function O(e){return e in a?a[e]:a[e]=new RegExp("(^|\\s)"+e+"(\\s|$)")}function M(e,t){return typeof t=="number"&&!l[L(e)]?t+"px":t}function _(e){var t,n;return u[e]||(t=o.createElement(e),o.body.appendChild(t),n=f(t,"").getPropertyValue("display"),t.parentNode.removeChild(t),n=="none"&&(n="block"),u[e]=n),u[e]}function D(t,n){n===e&&c.test(t)&&RegExp.$1,n in m||(n="*");var r=m[n];return r.innerHTML=""+t,s.call(r.childNodes)}function P(e,t){return e=e||i,e.__proto__=P.prototype,e.selector=t||"",e}function H(t,r){if(!t)return P();if(r!==e)return H(r).find(t);if(E(t))return H(o).ready(t);if(t instanceof P)return t;var i;return x(t)?i=N(t):h.indexOf(t.nodeType)>=0||t===window?(i=[t],t=null):c.test(t)?(i=D(t.trim(),RegExp.$1),t=null):t.nodeType&&t.nodeType==3?i=[t]:i=n(o,t),P(i,t)}function B(t,n){return n===e?H(t):H(t).filter(n)}function j(e,t,n,r){return E(t)?t.call(e,n,r):t}function F(e,t,n){var r=e%2?t:t.parentNode;r&&r.insertBefore(n,e?e==1?r.firstChild:e==2?t:null:t.nextSibling)}function I(e,t){t(e);for(var n in e.childNodes)I(e.childNodes[n],t)}var e,t,n,r,i=[],s=i.slice,o=window.document,u={},a={},f=o.defaultView.getComputedStyle,l={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},c=/^\s*<(\w+)[^>]*>/,h=[1,9,11],p=["after","prepend","before","append"],d=o.createElement("table"),v=o.createElement("tr"),m={tr:o.createElement("tbody"),tbody:d,thead:d,tfoot:d,td:v,th:v,"*":o.createElement("div")},g=/complete|loaded|interactive/,y=/^\.([\w-]+)$/,b=/^#([\w-]+)$/,w=/^[\w-]+$/;return H.extend=function(e){return s.call(arguments,1).forEach(function(n){for(t in n)e[t]=n[t]}),e},H.qsa=n=function(e,t){var n;return e===o&&b.test(t)?(n=e.getElementById(RegExp.$1))?[n]:i:s.call(y.test(t)?e.getElementsByClassName(RegExp.$1):w.test(t)?e.getElementsByTagName(t):e.querySelectorAll(t))},H.isFunction=E,H.isObject=S,H.isArray=x,H.map=function(e,t){var n,r=[],i,s;if(T(e))for(i=0;i<e.length;i++)n=t(e[i],i),n!=null&&r.push(n);else for(s in e)n=t(e[s],s),n!=null&&r.push(n);return C(r)},H.each=function(e,t){var n,r;if(T(e)){for(n=0;n<e.length;n++)if(t(n,e[n])===!1)return e}else for(r in e)if(t(r,e[r])===!1)return e;return e},H.fn={forEach:i.forEach,reduce:i.reduce,push:i.push,indexOf:i.indexOf,concat:i.concat,map:function(e){return H.map(this,function(t,n){return e.call(t,n,t)})},slice:function(){return H(s.apply(this,arguments))},ready:function(e){return g.test(o.readyState)?e(H):o.addEventListener("DOMContentLoaded",function(){e(H)},!1),this},get:function(t){return t===e?this:this[t]},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(e){return this.forEach(function(t,n){e.call(t,n,t)}),this},filter:function(e){return H([].filter.call(this,function(t){return t.parentNode&&n(t.parentNode,e).indexOf(t)>=0}))},end:function(){return this.prevObject||H()},andSelf:function(){return this.add(this.prevObject||H())},add:function(e,t){return H(A(this.concat(H(e,t))))},is:function(e){return this.length>0&&H(this[0]).filter(e).length>0},not:function(t){var n=[];if(E(t)&&t.call!==e)this.each(function(e){t.call(this,e)||n.push(this)});else{var r=typeof t=="string"?this.filter(t):T(t)&&E(t.item)?s.call(t):H(t);this.forEach(function(e){r.indexOf(e)<0&&n.push(e)})}return H(n)},eq:function(e){return e===-1?this.slice(e):this.slice(e,+e+1)},first:function(){var e=this[0];return e&&!S(e)?e:H(e)},last:function(){var e=this[this.length-1];return e&&!S(e)?e:H(e)},find:function(e){var t;return this.length==1?t=n(this[0],e):t=this.map(function(){return n(this,e)}),H(t)},closest:function(e,t){var r=this[0],i=n(t||o,e);i.length||(r=null);while(r&&i.indexOf(r)<0)r=r!==t&&r!==o&&r.parentNode;return H(r)},parents:function(e){var t=[],n=this;while(n.length>0)n=H.map(n,function(e){if((e=e.parentNode)&&e!==o&&t.indexOf(e)<0)return t.push(e),e});return B(t,e)},parent:function(e){return B(A(this.pluck("parentNode")),e)},children:function(e){return B(this.map(function(){return s.call(this.children)}),e)},siblings:function(e){return B(this.map(function(e,t){return s.call(t.parentNode.children).filter(function(e){return e!==t})}),e)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return this.map(function(){return this[e]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=null),f(this,"").getPropertyValue("display")=="none"&&(this.style.display=_(this.nodeName))})},replaceWith:function(e){return this.each(function(){H(this).before(e).remove()})},wrap:function(e){return this.each(function(){H(this).wrapAll(H(e)[0].cloneNode(!1))})},wrapAll:function(e){return this[0]&&(H(this[0]).before(e=H(e)),e.append(this)),this},unwrap:function(){return this.parent().each(function(){H(this).replaceWith(H(this).children())}),this},hide:function(){return this.css("display","none")},toggle:function(t){return(t===e?this.css("display")=="none":t)?this.show():this.hide()},prev:function(){return H(this.pluck("previousElementSibling"))},next:function(){return H(this.pluck("nextElementSibling"))},html:function(t){return t===e?this.length>0?this[0].innerHTML:null:this.each(function(e){var n=this.innerHTML;H(this).empty().append(j(this,t,e,n))})},text:function(t){return t===e?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t})},attr:function(n,r){var i;return typeof n=="string"&&r===e?this.length==0?e:n=="value"&&this[0].nodeName=="INPUT"?this.val():!(i=this[0].getAttribute(n))&&n in this[0]?this[0][n]:i:this.each(function(e){if(S(n))for(t in n)this.setAttribute(t,n[t]);else this.setAttribute(n,j(this,r,e,this.getAttribute(n)))})},removeAttr:function(e){return this.each(function(){this.removeAttribute(e)})},data:function(e,t){return this.attr("data-"+e,t)},val:function(t){return t===e?this.length>0?this[0].value:null:this.each(function(e){this.value=j(this,t,e,this.value)})},offset:function(){if(this.length==0)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:e.width,height:e.height}},css:function(n,r){if(r===e&&typeof n=="string")return this.length==0?e:this[0].style[k(n)]||f(this[0],"").getPropertyValue(n);var i="";for(t in n)i+=L(t)+":"+M(t,n[t])+";";return typeof n=="string"&&(i=L(n)+":"+M(n,r)),this.each(function(){this.style.cssText+=";"+i})},index:function(e){return e?this.indexOf(H(e)[0]):this.parent().children().indexOf(this[0])},hasClass:function(e){return this.length<1?!1:O(e).test(this[0].className)},addClass:function(e){return this.each(function(t){r=[];var n=this.className,i=j(this,e,t,n);i.split(/\s+/g).forEach(function(e){H(this).hasClass(e)||r.push(e)},this),r.length&&(this.className+=(n?" ":"")+r.join(" "))})},removeClass:function(t){return this.each(function(n){if(t===e)return this.className="";r=this.className,j(this,t,n,r).split(/\s+/g).forEach(function(e){r=r.replace(O(e)," ")}),this.className=r.trim()})},toggleClass:function(t,n){return this.each(function(r){var i=j(this,t,r,this.className);(n===e?!H(this).hasClass(i):n)?H(this).addClass(i):H(this).removeClass(i)})}},"filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(e){var t=H.fn[e];H.fn[e]=function(){var e=t.apply(this,arguments);return e.prevObject=this,e}}),["width","height"].forEach(function(t){H.fn[t]=function(n){var r,i=t.replace(/./,function(e){return e[0].toUpperCase()});return n===e?this[0]==window?window["inner"+i]:this[0]==o?o.documentElement["offset"+i]:(r=this.offset())&&r[t]:this.each(function(e){var r=H(this);r.css(t,j(this,n,e,r[t]()))})}}),p.forEach(function(e,t){H.fn[e]=function(e){var n=S(e)?e:D(e);if(!("length"in n)||n.nodeType)n=[n];if(n.length<1)return this;var r=this.length,i=r>1,s=t<2;return this.each(function(e,o){for(var u=0;u<n.length;u++){var a=n[s?n.length-u-1:u];I(a,function(e){e.nodeName!=null&&e.nodeName.toUpperCase()==="SCRIPT"&&(!e.type||e.type==="text/javascript")&&window.eval.call(window,e.innerHTML)}),i&&e<r-1&&(a=a.cloneNode(!0)),F(t,o,a)}})};var n=t%2?e+"To":"insert"+(t?"Before":"After");H.fn[n]=function(t){return H(t)[e](this),this}}),P.prototype=H.fn,H}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(e){function s(e){return e._zid||(e._zid=r++)}function o(e,t,r,i){t=u(t);if(t.ns)var o=a(t.ns);return(n[s(e)]||[]).filter(function(e){return e&&(!t.e||e.e==t.e)&&(!t.ns||o.test(e.ns))&&(!r||e.fn==r)&&(!i||e.sel==i)})}function u(e){var t=(""+e).split(".");return{e:t[0],ns:t.slice(1).sort().join(" ")}}function a(e){return new RegExp("(?:^| )"+e.replace(" "," .* ?")+"(?: |$)")}function f(t,n,r){e.isObject(t)?e.each(t,r):t.split(/\s/).forEach(function(e){r(e,n)})}function l(t,r,i,o,a){var l=s(t),c=n[l]||(n[l]=[]);f(r,i,function(n,r){var i=a&&a(r,n),s=i||r,f=function(e){var n=s.apply(t,[e].concat(e.data));return n===!1&&e.preventDefault(),n},l=e.extend(u(n),{fn:r,proxy:f,sel:o,del:i,i:c.length});c.push(l),t.addEventListener(l.e,f,!1)})}function c(e,t,r,i){var u=s(e);f(t||"",r,function(t,r){o(e,t,r,i).forEach(function(t){delete n[u][t.i],e.removeEventListener(t.e,t.proxy,!1)})})}function v(t){var n=e.extend({originalEvent:t},t);return e.each(d,function(e,r){n[e]=function(){return this[r]=h,t[e].apply(t,arguments)},n[r]=p}),n}function m(e){if(!("defaultPrevented"in e)){e.defaultPrevented=!1;var t=e.preventDefault;e.preventDefault=function(){this.defaultPrevented=!0,t.call(this)}}}var t=e.qsa,n={},r=1,i={};i.click=i.mousedown=i.mouseup=i.mousemove="MouseEvents",e.event={add:l,remove:c},e.fn.bind=function(e,t){return this.each(function(){l(this,e,t)})},e.fn.unbind=function(e,t){return this.each(function(){c(this,e,t)})},e.fn.one=function(e,t){return this.each(function(n,r){l(this,e,t,null,function(e,t){return function(){var n=e.apply(r,arguments);return c(r,t,e),n}})})};var h=function(){return!0},p=function(){return!1},d={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,n,r){return this.each(function(i,s){l(s,n,r,t,function(n){return function(r){var i,o=e(r.target).closest(t,s).get(0);if(o)return i=e.extend(v(r),{currentTarget:o,liveFired:s}),n.apply(o,[i].concat([].slice.call(arguments,1)))}})})},e.fn.undelegate=function(e,t,n){return this.each(function(){c(this,t,n,e)})},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,r){return n===undefined||e.isFunction(n)?this.bind(t,n):this.delegate(n,t,r)},e.fn.off=function(t,n,r){return n===undefined||e.isFunction(n)?this.unbind(t,n):this.undelegate(n,t,r)},e.fn.trigger=function(t,n){return typeof t=="string"&&(t=e.Event(t)),m(t),t.data=n,this.each(function(){this.dispatchEvent(t)})},e.fn.triggerHandler=function(t,n){var r,i;return this.each(function(s,u){r=v(typeof t=="string"?e.Event(t):t),r.data=n,r.target=u,e.each(o(u,t.type||t),function(e,t){i=t.proxy(r);if(r.isImmediatePropagationStopped())return!1})}),i},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return this.bind(t,e)}}),["focus","blur"].forEach(function(t){e.fn[t]=function(e){if(e)this.bind(t,e);else if(this.length)try{this.get(0)[t]()}catch(n){}return this}}),e.Event=function(e,t){var n=document.createEvent(i[e]||"Events"),r=!0;if(t)for(var s in t)s=="bubbles"?r=!!t[s]:n[s]=t[s];return n.initEvent(e,r,!0,null,null,null,null,null,null,null,null,null,null,null,null),n}}(Zepto),function(e){function t(e){var t=this.os={},n=this.browser={},r=e.match(/WebKit\/([\d.]+)/),i=e.match(/(Android)\s+([\d.]+)/),s=e.match(/(iPad).*OS\s([\d_]+)/),o=!s&&e.match(/(iPhone\sOS)\s([\d_]+)/),u=e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),a=u&&e.match(/TouchPad/),f=e.match(/(BlackBerry).*Version\/([\d.]+)/);r&&(n.version=r[1]),n.webkit=!!r,i&&(t.android=!0,t.version=i[2]),o&&(t.ios=!0,t.version=o[2].replace(/_/g,"."),t.iphone=!0),s&&(t.ios=!0,t.version=s[2].replace(/_/g,"."),t.ipad=!0),u&&(t.webos=!0,t.version=u[2]),a&&(t.touchpad=!0),f&&(t.blackberry=!0,t.version=f[2])}t.call(e,navigator.userAgent),e.__detect=t}(Zepto),function(e,t){function l(e){return e.toLowerCase()}function c(e){return r?r+e:l(e)}var n="",r,i,s,o={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},u=window.document,a=u.createElement("div"),f=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;e.each(o,function(e,i){if(a.style[e+"TransitionProperty"]!==t)return n="-"+l(e)+"-",r=i,!1}),e.fx={off:r===t&&a.style.transitionProperty===t,cssPrefix:n,transitionEnd:c("TransitionEnd"),animationEnd:c("AnimationEnd")},e.fn.animate=function(t,n,r,i){return e.isObject(n)&&(r=n.easing,i=n.complete,n=n.duration),n&&(n/=1e3),this.anim(t,n,r,i)},e.fn.anim=function(r,i,s,o){var u,a={},l,c=this,h,p=e.fx.transitionEnd;i===t&&(i=.4),e.fx.off&&(i=0);if(typeof r=="string")a[n+"animation-name"]=r,a[n+"animation-duration"]=i+"s",p=e.fx.animationEnd;else{for(l in r)f.test(l)?(u||(u=[]),u.push(l+"("+r[l]+")")):a[l]=r[l];u&&(a[n+"transform"]=u.join(" ")),e.fx.off||(a[n+"transition"]="all "+i+"s "+(s||""))}return h=function(){var t={};t[n+"transition"]=t[n+"animation-name"]="none",e(this).css(t),o&&o.call(this)},i>0&&this.one(p,h),setTimeout(function(){c.css(a),i<=0&&setTimeout(function(){c.each(function(){h.call(this)})},0)},0),this},a=null}(Zepto),function(e){function o(t,n,r){var i=e.Event(n);return e(t).trigger(i,r),!i.defaultPrevented}function u(e,t,n,i){if(e.global)return o(t||r,n,i)}function a(t){t.global&&e.active++===0&&u(t,null,"ajaxStart")}function f(t){t.global&&!--e.active&&u(t,null,"ajaxStop")}function l(e,t){var n=t.context;if(t.beforeSend.call(n,e,t)===!1||u(t,n,"ajaxBeforeSend",[e,t])===!1)return!1;u(t,n,"ajaxSend",[e,t])}function c(e,t,n){var r=n.context,i="success";n.success.call(r,e,i,t),u(n,r,"ajaxSuccess",[t,n,e]),p(i,t,n)}function h(e,t,n,r){var i=r.context;r.error.call(i,n,t,e),u(r,i,"ajaxError",[n,r,e]),p(t,n,r)}function p(e,t,n){var r=n.context;n.complete.call(r,t,e),u(n,r,"ajaxComplete",[t,n]),f(n)}function d(){}function m(t,r,i,s){var o=e.isArray(r);e.each(r,function(r,u){s&&(r=i?s:s+"["+(o?"":r)+"]"),!s&&o?t.add(u.name,u.value):(i?e.isArray(u):n(u))?m(t,u,i,r):t.add(r,u)})}var t=0,n=e.isObject,r=window.document,i,s;e.active=0,e.ajaxJSONP=function(n){var i="jsonp"+ ++t,s=r.createElement("script"),o=function(){e(s).remove(),i in window&&(window[i]=d),p(u,n,"abort")},u={abort:o},a;return window[i]=function(t){clearTimeout(a),e(s).remove(),delete window[i],c(t,u,n)},s.src=n.url.replace(/=\?/,"="+i),e("head").append(s),n.timeout>0&&(a=setTimeout(function(){u.abort(),p(u,n,"timeout")},n.timeout)),u},e.ajaxSettings={type:"GET",beforeSend:d,success:d,error:d,complete:d,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"},crossDomain:!1,timeout:0},e.ajax=function(t){var r=e.extend({},t||{});for(i in e.ajaxSettings)r[i]===undefined&&(r[i]=e.ajaxSettings[i]);a(r),r.crossDomain||(r.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(r.url)&&RegExp.$2!=window.location.host);if(/=\?/.test(r.url))return e.ajaxJSONP(r);r.url||(r.url=window.location.toString()),r.data&&!r.contentType&&(r.contentType="application/x-www-form-urlencoded"),n(r.data)&&(r.data=e.param(r.data));if(r.type.match(/get/i)&&r.data){var o=r.data;r.url.match(/\?.*=/)?o="&"+o:o[0]!="?"&&(o="?"+o),r.url+=o}var u=r.accepts[r.dataType],f={},p=/^([\w-]+:)\/\//.test(r.url)?RegExp.$1:window.location.protocol,v=e.ajaxSettings.xhr(),m;r.crossDomain||(f["X-Requested-With"]="XMLHttpRequest"),u&&(f.Accept=u),r.headers=e.extend(f,r.headers||{}),v.onreadystatechange=function(){if(v.readyState==4){clearTimeout(m);var e,t=!1;if(v.status>=200&&v.status<300||v.status==0&&p=="file:"){if(u=="application/json"&&!/^\s*$/.test(v.responseText))try{e=JSON.parse(v.responseText)}catch(n){t=n}else e=v.responseText;t?h(t,"parsererror",v,r):c(e,v,r)}else h(null,"error",v,r)}},v.open(r.type,r.url,!0),r.contentType&&(r.headers["Content-Type"]=r.contentType);for(s in r.headers)v.setRequestHeader(s,r.headers[s]);return l(v,r)===!1?(v.abort(),!1):(r.timeout>0&&(m=setTimeout(function(){v.onreadystatechange=d,v.abort(),h(null,"timeout",v,r)},r.timeout)),v.send(r.data),v)},e.get=function(t,n){return e.ajax({url:t,success:n})},e.post=function(t,n,r,i){return e.isFunction(n)&&(i=i||r,r=n,n=null),e.ajax({type:"POST",url:t,data:n,success:r,dataType:i})},e.getJSON=function(t,n){return e.ajax({url:t,success:n,dataType:"json"})},e.fn.load=function(t,n){if(!this.length)return this;var i=this,s=t.split(/\s/),o;return s.length>1&&(t=s[0],o=s[1]),e.get(t,function(t){i.html(o?e(r.createElement("div")).html(t).find(o).html():t),n&&n.call(i)}),this};var v=encodeURIComponent;e.param=function(e,t){var n=[];return n.add=function(e,t){this.push(v(e)+"="+v(t))},m(n,e,t),n.join("&").replace("%20","+")}}(Zepto),function(e){e.fn.serializeArray=function(){var t=[],n;return e(Array.prototype.slice.call(this.get(0).elements)).each(function(){n=e(this);var r=n.attr("type");!this.disabled&&r!="submit"&&r!="reset"&&r!="button"&&(r!="radio"&&r!="checkbox"||this.checked)&&t.push({name:n.attr("name"),value:n.val()})}),t},e.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")},e.fn.submit=function(t){if(t)this.bind("submit",t);else if(this.length){var n=e.Event("submit");this.eq(0).trigger(n),n.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(e){function r(e){return"tagName"in e?e:e.parentNode}function i(e,t,n,r){var i=Math.abs(e-t),s=Math.abs(n-r);return i>=s?e-t>0?"Left":"Right":n-r>0?"Up":"Down"}function o(){t.last&&Date.now()-t.last>=s&&(e(t.target).trigger("longTap"),t={})}var t={},n,s=750;e(document).ready(function(){e(document.body).bind("touchstart",function(e){var i=Date.now(),u=i-(t.last||i);t.target=r(e.touches[0].target),n&&clearTimeout(n),t.x1=e.touches[0].pageX,t.y1=e.touches[0].pageY,u>0&&u<=250&&(t.isDoubleTap=!0),t.last=i,setTimeout(o,s)}).bind("touchmove",function(e){t.x2=e.touches[0].pageX,t.y2=e.touches[0].pageY}).bind("touchend",function(r){t.isDoubleTap?(e(t.target).trigger("doubleTap"),t={}):t.x2>0||t.y2>0?((Math.abs(t.x1-t.x2)>30||Math.abs(t.y1-t.y2)>30)&&e(t.target).trigger("swipe")&&e(t.target).trigger("swipe"+i(t.x1,t.x2,t.y1,t.y2)),t.x1=t.x2=t.y1=t.y2=t.last=0):"last"in t&&(n=setTimeout(function(){n=null,e(t.target).trigger("tap"),t={}},250))}).bind("touchcancel",function(){t={}})}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","longTap"].forEach(function(t){e.fn[t]=function(e){return this.bind(t,e)}})}(Zepto);