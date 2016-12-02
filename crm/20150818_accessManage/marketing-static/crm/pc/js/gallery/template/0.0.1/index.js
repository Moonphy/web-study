define("gallery/template/0.0.1/index",function(e,n,r){function t(e){return e.replace(x,"").replace(j,",").replace(T,"").replace(k,"").replace(E,"").split(/^$|,+/)}function a(e){return"'"+e.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"}function i(e,n){function r(e){return p+=e.split(/\n/).length-1,u&&(e=e.replace(/\s+/g," ").replace(/<!--.*?-->/g,"")),e&&(e=g[1]+a(e)+g[2]+"\n"),e}function i(e){var r=p;if(s?e=s(e,n):o&&(e=e.replace(/\n/g,function(){return p++,"$line="+p+";"})),0===e.indexOf("=")){var a=f&&!/^=[=#]/.test(e);if(e=e.replace(/^=[=#]?|[\s;]*$/g,""),a){var i=e.replace(/\s*\([^\)]+\)/,"");h[i]||/^(include|print)$/.test(i)||(e="$escape("+e+")")}else e="$string("+e+")";e=g[1]+e+g[2]}return o&&(e="$line="+r+";"+e),b(t(e),function(e){if(e&&!$[e]){var n;n="print"===e?y:"include"===e?w:h[e]?"$utils."+e:v[e]?"$helpers."+e:"$data."+e,x+=e+"="+n+",",$[e]=!0}}),e+"\n"}var o=n.debug,c=n.openTag,l=n.closeTag,s=n.parser,u=n.compress,f=n.escape,p=1,$={$data:1,$filename:1,$utils:1,$helpers:1,$out:1,$line:1},d="".trim,g=d?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],m=d?"$out+=text;return $out;":"$out.push(text);",y="function(){var text=''.concat.apply('',arguments);"+m+"}",w="function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);"+m+"}",x="'use strict';var $utils=this,$helpers=$utils.$helpers,"+(o?"$line=0,":""),j=g[0],T="return new String("+g[3]+");";b(e.split(c),function(e){e=e.split(l);var n=e[0],t=e[1];1===e.length?j+=r(n):(j+=i(n),t&&(j+=r(t)))});var k=x+j+T;o&&(k="try{"+k+"}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:"+a(e)+".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try{var E=new Function("$data","$filename",k);return E.prototype=h,E}catch(S){throw S.temp="function anonymous($data,$filename) {"+k+"}",S}}var o=function(e,n){return"string"==typeof n?y(n,{filename:e}):s(e,n)};o.version="3.0.0",o.config=function(e,n){c[e]=n};var c=o.defaults={openTag:"<%",closeTag:"%>",escape:!0,cache:!0,compress:!1,parser:null},l=o.cache={};o.render=function(e,n){return y(e,n)};var s=o.renderFile=function(e,n){var r=o.get(e)||m({filename:e,name:"Render Error",message:"Template not found"});return n?r(n):r};o.get=function(e){var n;if(l[e])n=l[e];else if("object"==typeof document){var r=document.getElementById(e);if(r){var t=(r.value||r.innerHTML).replace(/^\s*|\s*$/g,"");n=y(t,{filename:e})}}return n};var u=function(e,n){return"string"!=typeof e&&(n=typeof e,"number"===n?e+="":e="function"===n?u(e.call(e)):""),e},f={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},p=function(e){return f[e]},$=function(e){return u(e).replace(/&(?![\w#]+;)|[<>"']/g,p)},d=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},g=function(e,n){var r,t;if(d(e))for(r=0,t=e.length;t>r;r++)n.call(e,e[r],r,e);else for(r in e)n.call(e,e[r],r)},h=o.utils={$helpers:{},$include:s,$string:u,$escape:$,$each:g};o.helper=function(e,n){v[e]=n};var v=o.helpers=h.$helpers;o.onerror=function(e){var n="Template Error\n\n";for(var r in e)n+="<"+r+">\n"+e[r]+"\n\n";"object"==typeof console&&console.error(n)};var m=function(e){return o.onerror(e),function(){return"{Template Error}"}},y=o.compile=function(e,n){function r(r){try{return new o(r,a)+""}catch(t){return n.debug?m(t)():(n.debug=!0,y(e,n)(r))}}n=n||{};for(var t in c)void 0===n[t]&&(n[t]=c[t]);var a=n.filename;try{var o=i(e,n)}catch(s){return s.filename=a||"anonymous",s.name="Syntax Error",m(s)}return r.prototype=o.prototype,r.toString=function(){return o.toString()},a&&n.cache&&(l[a]=r),r},b=h.$each,w="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",x=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,j=/[^\w$]+/g,T=new RegExp(["\\b"+w.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),k=/^\d[^,]*|,\d[^,]*/g,E=/^,+|,+$/g;c.openTag="{{",c.closeTag="}}";var S=function(e,n){var r=n.split(":"),t=r.shift(),a=r.join(":")||"";return a&&(a=", "+a),"$helpers."+t+"("+e+a+")"};return c.parser=function(e,n){e=e.replace(/^\s/,"");var r=e.split(" "),t=r.shift(),a=r.join(" ");switch(t){case"if":e="if("+a+"){";break;case"else":r="if"===r.shift()?" if("+r.join(" ")+")":"",e="}else"+r+"{";break;case"/if":e="}";break;case"each":var i=r[0]||"$data",c=r[1]||"as",l=r[2]||"$value",s=r[3]||"$index",u=l+","+s;"as"!==c&&(i="[]"),e="$each("+i+",function("+u+"){";break;case"/each":e="});";break;case"echo":e="print("+a+");";break;case"print":case"include":e=t+"("+r.join(",")+");";break;default:if(-1!==a.indexOf("|")){var f=n.escape;0===e.indexOf("#")&&(e=e.substr(1),f=!1);for(var p=0,$=e.split("|"),d=$.length,g=f?"$escape":"$string",h=g+"("+$[p++]+")";d>p;p++)h=S(h,$[p]);e="=#"+h}else e=o.helpers[t]?"=#"+t+"("+r.join(",")+");":"="+e}return e},"function"==typeof define?o:void("undefined"!=typeof n?r.exports=o:this.template=o)});