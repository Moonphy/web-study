define("gallery/layer/1.9.3/index",function(e,t,i){var o,n,a={getPath:function(){var e=document.scripts,t=e[e.length-1],i=t.src;if(!t.getAttribute("merge"))return i.substring(0,i.lastIndexOf("/")+1)}(),config:{},end:{},btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"]},r={v:"1.9.3",ie6:!!window.ActiveXObject&&!window.XMLHttpRequest,index:0,path:a.getPath,config:function(e,t){var i=0;return e=e||{},r.cache=a.config=o.extend(a.config,e),r.path=a.config.path||r.path,"string"==typeof e.extend&&(e.extend=[e.extend]),r.use("skin/layer.css",e.extend&&e.extend.length>0?function n(){var o=e.extend;r.use(o[o[i]?i:i-1],i<o.length?function(){return++i,n}():t)}():t),this},use:function(e,t,i){var n=o("head")[0],e=e.replace(/\s/g,""),a=/\.css$/.test(e),s=document.createElement(a?"link":"script"),l="layui_layer_"+e.replace(/\.|\//g,"");return r.path?(a&&(s.rel="stylesheet"),s[a?"href":"src"]=/^http:\/\//.test(e)?e:r.path+e,s.id=l,o("#"+l)[0]||n.appendChild(s),function f(){(a?1989===parseInt(o("#"+l).css("width")):r[i||l])?function(){t&&t();try{a||n.removeChild(s)}catch(e){}}():setTimeout(f,100)}(),this):void 0},ready:function(e,t){var i="function"==typeof e;return i&&(t=e),r.config(o.extend(a.config,function(){return i?{}:{path:e}}()),t),this},alert:function(e,t,i){var n="function"==typeof t;return n&&(i=t),r.open(o.extend({content:e,yes:i},n?{}:t))},confirm:function(e,t,i,n){var s="function"==typeof t;return s&&(n=i,i=t),r.open(o.extend({content:e,btn:a.btn,yes:i,cancel:n},s?{}:t))},msg:function(e,t,i){var n="function"==typeof t,s=a.config.skin,f=(s?s+" "+s+"-msg":"")||"layui-layer-msg",c=l.anim.length-1;return n&&(i=t),r.open(o.extend({content:e,time:3e3,shade:!1,skin:f,title:!1,closeBtn:!1,btn:!1,end:i},n&&!a.config.skin?{skin:f+" layui-layer-hui",shift:c}:function(){return t=t||{},(-1===t.icon||void 0===t.icon&&!a.config.skin)&&(t.skin=f+" "+(t.skin||"layui-layer-hui")),t}()))},load:function(e,t){return r.open(o.extend({type:3,icon:e||0,shade:.01},t))},tips:function(e,t,i){return r.open(o.extend({type:4,content:[e,t],closeBtn:!1,time:3e3,maxWidth:210},i))}},s=function(e){var t=this;t.index=++r.index,t.config=o.extend({},t.config,a.config,e),t.creat()};s.pt=s.prototype;var l=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];l.anim=["layui-anim","layui-anim-01","layui-anim-02","layui-anim-03","layui-anim-04","layui-anim-05","layui-anim-06"],s.pt.config={type:0,shade:.3,fix:!0,move:l[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,shift:0,icon:-1,scrollbar:!0,tips:2},s.pt.vessel=function(e,t){var i=this,o=i.index,n=i.config,r=n.zIndex+o,s="object"==typeof n.title,f=n.maxmin&&(1===n.type||2===n.type),c=n.title?'<div class="layui-layer-title" style="'+(s?n.title[1]:"")+'">'+(s?n.title[0]:n.title)+"</div>":"";return n.zIndex=r,t([n.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+o+'" times="'+o+'" style="'+("z-index:"+(r-1)+"; background-color:"+(n.shade[1]||"#000")+"; opacity:"+(n.shade[0]||n.shade)+"; filter:alpha(opacity="+(100*n.shade[0]||100*n.shade)+");")+'"></div>':"",'<div class="'+l[0]+" "+(l.anim[n.shift]||"")+(" layui-layer-"+a.type[n.type])+(0!=n.type&&2!=n.type||n.shade?"":" layui-layer-border")+" "+(n.skin||"")+'" id="'+l[0]+o+'" type="'+a.type[n.type]+'" times="'+o+'" showtime="'+n.time+'" conType="'+(e?"object":"string")+'" style="z-index: '+r+"; width:"+n.area[0]+";height:"+n.area[1]+(n.fix?"":";position:absolute;")+'">'+(e&&2!=n.type?"":c)+'<div class="layui-layer-content'+(0==n.type&&-1!==n.icon?" layui-layer-padding":"")+(3==n.type?" layui-layer-loading"+n.icon:"")+'">'+(0==n.type&&-1!==n.icon?'<i class="layui-layer-ico layui-layer-ico'+n.icon+'"></i>':"")+(1==n.type&&e?"":n.content||"")+'</div><span class="layui-layer-setwin">'+function(){var e=f?'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>':"";return n.closeBtn&&(e+='<a class="layui-layer-ico '+l[7]+" "+l[7]+(n.title?n.closeBtn:4==n.type?"1":"2")+'" href="javascript:;"></a>'),e}()+"</span>"+(n.btn?function(){var e="";"string"==typeof n.btn&&(n.btn=[n.btn]);for(var t=0,i=n.btn.length;i>t;t++)e+='<a class="'+l[6]+t+'">'+n.btn[t]+"</a>";return'<div class="'+l[6]+'">'+e+"</div>"}():"")+"</div>"],c),i},s.pt.creat=function(){var e=this,t=e.config,i=e.index,s=t.content,f="object"==typeof s;switch("string"==typeof t.area&&(t.area="auto"===t.area?["",""]:[t.area,""]),t.type){case 0:t.btn="btn"in t?t.btn:a.btn[0],r.closeAll("dialog");break;case 2:var s=t.content=f?t.content:[t.content||"http://sentsin.com?from=layer","auto"];t.content='<iframe scrolling="'+(t.content[1]||"auto")+'" allowtransparency="true" id="'+l[4]+i+'" name="'+l[4]+i+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+t.content[0]+'"></iframe>';break;case 3:t.title=!1,t.closeBtn=!1,-1===t.icon&&0===t.icon,r.closeAll("loading");break;case 4:f||(t.content=[t.content,"body"]),t.follow=t.content[1],t.content=t.content[0]+'<i class="layui-layer-TipsG"></i>',t.title=!1,t.shade=!1,t.fix=!1,t.tips="object"==typeof t.tips?t.tips:[t.tips,!0],t.tipsMore||r.closeAll("tips")}e.vessel(f,function(n,a){o("body").append(n[0]),f?function(){2==t.type||4==t.type?function(){o("body").append(n[1])}():function(){s.parents("."+l[0])[0]||(s.show().addClass("layui-layer-wrap").wrap(n[1]),o("#"+l[0]+i).find("."+l[5]).before(a))}()}():o("body").append(n[1]),e.layero=o("#"+l[0]+i),t.scrollbar||l.html.css("overflow","hidden").attr("layer-full",i)}).auto(i),2==t.type&&r.ie6&&e.layero.find("iframe").attr("src",s[0]),4==t.type?e.tips():e.offset(),t.fix&&n.on("resize",function(){e.offset(),(/^\d+%$/.test(t.area[0])||/^\d+%$/.test(t.area[1]))&&e.auto(i),4==t.type&&e.tips()}),t.time<=0||setTimeout(function(){r.close(e.index)},t.time),e.move().callback()},s.pt.auto=function(e){function t(e){e=r.find(e),e.height(s[1]-f-c-2*(0|parseFloat(e.css("padding"))))}var i=this,a=i.config,r=o("#"+l[0]+e);""===a.area[0]&&a.maxWidth>0&&(/MSIE 7/.test(navigator.userAgent)&&a.btn&&r.width(r.innerWidth()),r.outerWidth()>a.maxWidth&&r.width(a.maxWidth));var s=[r.innerWidth(),r.innerHeight()],f=r.find(l[1]).outerHeight()||0,c=r.find("."+l[6]).outerHeight()||0;switch(a.type){case 2:t("iframe");break;default:""===a.area[1]?a.fix&&s[1]>n.height()&&(s[1]=n.height(),t("."+l[5])):t("."+l[5])}return i},s.pt.offset=function(){var e=this,t=e.config,i=e.layero,o=[i.outerWidth(),i.outerHeight()],a="object"==typeof t.offset;e.offsetTop=(n.height()-o[1])/2,e.offsetLeft=(n.width()-o[0])/2,a?(e.offsetTop=t.offset[0],e.offsetLeft=t.offset[1]||e.offsetLeft):"auto"!==t.offset&&(e.offsetTop=t.offset,"rb"===t.offset&&(e.offsetTop=n.height()-o[1],e.offsetLeft=n.width()-o[0])),t.fix||(e.offsetTop=/%$/.test(e.offsetTop)?n.height()*parseFloat(e.offsetTop)/100:parseFloat(e.offsetTop),e.offsetLeft=/%$/.test(e.offsetLeft)?n.width()*parseFloat(e.offsetLeft)/100:parseFloat(e.offsetLeft),e.offsetTop+=n.scrollTop(),e.offsetLeft+=n.scrollLeft()),i.css({top:e.offsetTop,left:e.offsetLeft})},s.pt.tips=function(){var e=this,t=e.config,i=e.layero,a=[i.outerWidth(),i.outerHeight()],r=o(t.follow);r[0]||(r=o("body"));var s={width:r.outerWidth(),height:r.outerHeight(),top:r.offset().top,left:r.offset().left},f=i.find(".layui-layer-TipsG"),c=t.tips[0];t.tips[1]||f.remove(),s.autoLeft=function(){s.left+a[0]-n.width()>0?(s.tipLeft=s.left+s.width-a[0],f.css({right:12,left:"auto"})):s.tipLeft=s.left},s.where=[function(){s.autoLeft(),s.tipTop=s.top-a[1]-10,f.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",t.tips[1])},function(){s.tipLeft=s.left+s.width+10,s.tipTop=s.top,f.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",t.tips[1])},function(){s.autoLeft(),s.tipTop=s.top+s.height+10,f.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",t.tips[1])},function(){s.tipLeft=s.left-a[0]-10,s.tipTop=s.top,f.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",t.tips[1])}],s.where[c-1](),1===c?s.top-(n.scrollTop()+a[1]+16)<0&&s.where[2]():2===c?n.width()-(s.left+s.width+a[0]+16)>0||s.where[3]():3===c?s.top-n.scrollTop()+s.height+a[1]+16-n.height()>0&&s.where[0]():4===c&&a[0]+16-s.left>0&&s.where[1](),i.find("."+l[5]).css({"background-color":t.tips[1],"padding-right":t.closeBtn?"30px":""}),i.css({left:s.tipLeft,top:s.tipTop})},s.pt.move=function(){var e=this,t=e.config,i={setY:0,moveLayer:function(){var e=i.layero,t=parseInt(e.css("margin-left")),o=parseInt(i.move.css("left"));0===t||(o-=t),"fixed"!==e.css("position")&&(o-=e.parent().offset().left,i.setY=0),e.css({left:o,top:parseInt(i.move.css("top"))-i.setY})}},a=e.layero.find(t.move);return t.move&&a.attr("move","ok"),a.css({cursor:t.move?"move":"auto"}),o(t.move).on("mousedown",function(e){if(e.preventDefault(),"ok"===o(this).attr("move")){i.ismove=!0,i.layero=o(this).parents("."+l[0]);var a=2*parseFloat(i.layero.css("border-width")),r=i.layero.offset().left,s=i.layero.offset().top,f=i.layero.width()-6+a,c=i.layero.height()-6+a;o("#layui-layer-moves")[0]||o("body").append('<div id="layui-layer-moves" class="layui-layer-moves" style="left:'+r+"px; top:"+s+"px; width:"+f+"px; height:"+c+'px; z-index:2147483584"></div>'),i.move=o("#layui-layer-moves"),t.moveType&&i.move.css({visibility:"hidden"}),i.moveX=e.pageX-i.move.position().left,i.moveY=e.pageY-i.move.position().top,"fixed"!==i.layero.css("position")||(i.setY=n.scrollTop())}}),o(document).mousemove(function(e){if(i.ismove){var o=e.pageX-i.moveX,a=e.pageY-i.moveY;if(e.preventDefault(),!t.moveOut){i.setY=n.scrollTop();var r=n.width()-i.move.outerWidth(),s=i.setY;0>o&&(o=0),o>r&&(o=r),s>a&&(a=s),a>n.height()-i.move.outerHeight()+i.setY&&(a=n.height()-i.move.outerHeight()+i.setY)}i.move.css({left:o,top:a}),t.moveType&&i.moveLayer(),o=a=r=s=null}}).mouseup(function(){try{i.ismove&&(i.moveLayer(),i.move.remove()),i.ismove=!1}catch(e){i.ismove=!1}t.moveEnd&&t.moveEnd()}),e},s.pt.callback=function(){function e(){var e=n.cancel&&n.cancel(t.index);e===!1||r.close(t.index)}var t=this,i=t.layero,n=t.config;t.openLayer(),n.success&&(2==n.type?i.find("iframe")[0].onload=function(){this.className="",n.success(i,t.index)}:n.success(i,t.index)),r.ie6&&t.IE6(i),i.find("."+l[6]).children("a").on("click",function(){var a=o(this).index();0===a?n.yes?n.yes(t.index,i):r.close(t.index):1===a?e():n["btn"+(a+1)]?n["btn"+(a+1)](t.index,i):r.close(t.index)}),i.find("."+l[7]).on("click",e),n.shadeClose&&o("#layui-layer-shade"+t.index).on("click",function(){r.close(t.index)}),i.find(".layui-layer-min").on("click",function(){r.min(t.index,n),n.min&&n.min(i)}),i.find(".layui-layer-max").on("click",function(){o(this).hasClass("layui-layer-maxmin")?(r.restore(t.index),n.restore&&n.restore(i)):(r.full(t.index,n),n.full&&n.full(i))}),n.end&&(a.end[t.index]=n.end)},a.reselect=function(){o.each(o("select"),function(e,t){var i=o(this);i.parents("."+l[0])[0]||1==i.attr("layer")&&o("."+l[0]).length<1&&i.removeAttr("layer").show(),i=null})},s.pt.IE6=function(e){function t(){e.css({top:a+(i.config.fix?n.scrollTop():0)})}var i=this,a=e.offset().top;t(),n.scroll(t),o("select").each(function(e,t){var i=o(this);i.parents("."+l[0])[0]||"none"===i.css("display")||i.attr({layer:"1"}).hide(),i=null})},s.pt.openLayer=function(){var e=this;r.zIndex=e.config.zIndex,r.setTop=function(e){var t=function(){r.zIndex++,e.css("z-index",r.zIndex+1)};return r.zIndex=parseInt(e[0].style.zIndex),e.on("mousedown",t),r.zIndex}},a.record=function(e){var t=[e.outerWidth(),e.outerHeight(),e.position().top,e.position().left+parseFloat(e.css("margin-left"))];e.find(".layui-layer-max").addClass("layui-layer-maxmin"),e.attr({area:t})},a.rescollbar=function(e){l.html.attr("layer-full")==e&&(l.html[0].style.removeProperty?l.html[0].style.removeProperty("overflow"):l.html[0].style.removeAttribute("overflow"),l.html.removeAttr("layer-full"))},r.getChildFrame=function(e,t){return t=t||o("."+l[4]).attr("times"),o("#"+l[0]+t).find("iframe").contents().find(e)},r.getFrameIndex=function(e){return o("#"+e).parents("."+l[4]).attr("times")},r.iframeAuto=function(e){if(e){var t=r.getChildFrame("body",e).outerHeight(),i=o("#"+l[0]+e),n=i.find(l[1]).outerHeight()||0,a=i.find("."+l[6]).outerHeight()||0;i.css({height:t+n+a}),i.find("iframe").css({height:t})}},r.iframeSrc=function(e,t){o("#"+l[0]+e).find("iframe").attr("src",t)},r.style=function(e,t){var i=o("#"+l[0]+e),n=i.attr("type"),r=i.find(l[1]).outerHeight()||0,s=i.find("."+l[6]).outerHeight()||0;(n===a.type[1]||n===a.type[2])&&(i.css(t),n===a.type[2]&&i.find("iframe").css({height:parseFloat(t.height)-r-s}))},r.min=function(e,t){var i=o("#"+l[0]+e),n=i.find(l[1]).outerHeight()||0;a.record(i),r.style(e,{width:180,height:n,overflow:"hidden"}),i.find(".layui-layer-min").hide(),"page"===i.attr("type")&&i.find(l[4]).hide(),a.rescollbar(e)},r.restore=function(e){var t=o("#"+l[0]+e),i=t.attr("area").split(",");t.attr("type");r.style(e,{width:parseFloat(i[0]),height:parseFloat(i[1]),top:parseFloat(i[2]),left:parseFloat(i[3]),overflow:"visible"}),t.find(".layui-layer-max").removeClass("layui-layer-maxmin"),t.find(".layui-layer-min").show(),"page"===t.attr("type")&&t.find(l[4]).show(),a.rescollbar(e)},r.full=function(e){var t,i=o("#"+l[0]+e);a.record(i),l.html.attr("layer-full")||l.html.css("overflow","hidden").attr("layer-full",e),clearTimeout(t),t=setTimeout(function(){var t="fixed"===i.css("position");r.style(e,{top:t?0:n.scrollTop(),left:t?0:n.scrollLeft(),width:n.width(),height:n.height()}),i.find(".layui-layer-min").hide()},100)},r.title=function(e,t){var i=o("#"+l[0]+(t||r.index)).find(l[1]);i.html(e)},r.close=function(e){var t=o("#"+l[0]+e),i=t.attr("type");if(t[0]){if(i===a.type[1]&&"object"===t.attr("conType")){t.children(":not(."+l[5]+")").remove();for(var n=0;2>n;n++)t.find(".layui-layer-wrap").unwrap().hide()}else{if(i===a.type[2])try{var s=o("#"+l[4]+e)[0];s.contentWindow.document.write(""),s.contentWindow.close(),t.find("."+l[5])[0].removeChild(s)}catch(f){}t[0].innerHTML="",t.remove()}o("#layui-layer-moves, #layui-layer-shade"+e).remove(),r.ie6&&a.reselect(),a.rescollbar(e),"function"==typeof a.end[e]&&a.end[e](),delete a.end[e]}},r.closeAll=function(e){o.each(o("."+l[0]),function(){var t=o(this),i=e?t.attr("type")===e:1;i&&r.close(t.attr("times")),i=null})},r.loadPlugin=function(t,i){e.async("./src/"+t,function(e){i(e(r))})},a.run=function(){o=jQuery,n=o(window),l.html=o("html"),r.open=function(e){var t=new s(e);return t.index}},a.run(),i.exports=r});