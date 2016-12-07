define("gallery/raty/0.0.1/index",["jquery"],function(t,e,a){var s=t("jquery"),i={init:function(t){return this.each(function(){this.self=s(this),i.destroy.call(this.self),this.opt=s.extend(!0,{},s.fn.raty.defaults,t),i._adjustCallback.call(this),i._adjustNumber.call(this),i._adjustHints.call(this),this.opt.score=i._adjustedScore.call(this,this.opt.score),"img"!==this.opt.starType&&i._adjustStarType.call(this),i._adjustPath.call(this),i._createStars.call(this),this.opt.cancel&&i._createCancel.call(this),this.opt.precision&&i._adjustPrecision.call(this),i._createScore.call(this),i._apply.call(this,this.opt.score),i._setTitle.call(this,this.opt.score),i._target.call(this,this.opt.score),this.opt.readOnly?i._lock.call(this):(this.style.cursor="pointer",i._binds.call(this))})},_adjustCallback:function(){for(var t=["number","readOnly","score","scoreName","target"],e=0;e<t.length;e++)"function"==typeof this.opt[t[e]]&&(this.opt[t[e]]=this.opt[t[e]].call(this))},_adjustedScore:function(t){return t?i._between(t,0,this.opt.number):t},_adjustHints:function(){if(this.opt.hints||(this.opt.hints=[]),this.opt.halfShow||this.opt.half)for(var t=this.opt.precision?10:2,e=0;e<this.opt.number;e++){var a=this.opt.hints[e];"[object Array]"!==Object.prototype.toString.call(a)&&(a=[a]),this.opt.hints[e]=[];for(var s=0;t>s;s++){var i=a[s],o=a[a.length-1];void 0===o&&(o=null),this.opt.hints[e][s]=void 0===i?o:i}}},_adjustNumber:function(){this.opt.number=i._between(this.opt.number,1,this.opt.numberMax)},_adjustPath:function(){this.opt.path=this.opt.path||"",this.opt.path&&"/"!==this.opt.path.charAt(this.opt.path.length-1)&&(this.opt.path+="/")},_adjustPrecision:function(){this.opt.half=!0},_adjustStarType:function(){var t=["cancelOff","cancelOn","starHalf","starOff","starOn"];this.opt.path="";for(var e=0;e<t.length;e++)this.opt[t[e]]=this.opt[t[e]].replace(".","-")},_apply:function(t){i._fill.call(this,t),t&&(t>0&&this.score.val(t),i._roundStars.call(this,t))},_between:function(t,e,a){return Math.min(Math.max(parseFloat(t),e),a)},_binds:function(){this.cancel&&(i._bindOverCancel.call(this),i._bindClickCancel.call(this),i._bindOutCancel.call(this)),i._bindOver.call(this),i._bindClick.call(this),i._bindOut.call(this)},_bindClick:function(){var t=this;t.stars.on("click.raty",function(e){var a=!0,o=t.opt.half||t.opt.precision?t.self.data("score"):this.alt||s(this).data("alt");t.opt.click&&(a=t.opt.click.call(t,+o,e)),(a||void 0===a)&&(t.opt.half&&!t.opt.precision&&(o=i._roundHalfScore.call(t,o)),i._apply.call(t,o))})},_bindClickCancel:function(){var t=this;t.cancel.on("click.raty",function(e){t.score.removeAttr("value"),t.opt.click&&t.opt.click.call(t,null,e)})},_bindOut:function(){var t=this;t.self.on("mouseleave.raty",function(e){var a=+t.score.val()||void 0;i._apply.call(t,a),i._target.call(t,a,e),i._resetTitle.call(t),t.opt.mouseout&&t.opt.mouseout.call(t,a,e)})},_bindOutCancel:function(){var t=this;t.cancel.on("mouseleave.raty",function(e){var a=t.opt.cancelOff;if("img"!==t.opt.starType&&(a=t.opt.cancelClass+" "+a),i._setIcon.call(t,this,a),t.opt.mouseout){var s=+t.score.val()||void 0;t.opt.mouseout.call(t,s,e)}})},_bindOver:function(){var t=this,e=t.opt.half?"mousemove.raty":"mouseover.raty";t.stars.on(e,function(e){var a=i._getScoreByPosition.call(t,e,this);i._fill.call(t,a),t.opt.half&&(i._roundStars.call(t,a,e),i._setTitle.call(t,a,e),t.self.data("score",a)),i._target.call(t,a,e),t.opt.mouseover&&t.opt.mouseover.call(t,a,e)})},_bindOverCancel:function(){var t=this;t.cancel.on("mouseover.raty",function(e){var a=t.opt.path+t.opt.starOff,s=t.opt.cancelOn;"img"===t.opt.starType?t.stars.attr("src",a):(s=t.opt.cancelClass+" "+s,t.stars.attr("class",a)),i._setIcon.call(t,this,s),i._target.call(t,null,e),t.opt.mouseover&&t.opt.mouseover.call(t,null)})},_buildScoreField:function(){return s("<input />",{name:this.opt.scoreName,type:"hidden"}).appendTo(this)},_createCancel:function(){var t=this.opt.path+this.opt.cancelOff,e=s("<"+this.opt.starType+" />",{title:this.opt.cancelHint,"class":this.opt.cancelClass});"img"===this.opt.starType?e.attr({src:t,alt:"x"}):e.attr("data-alt","x").addClass(t),"left"===this.opt.cancelPlace?this.self.prepend("&#160;").prepend(e):this.self.append("&#160;").append(e),this.cancel=e},_createScore:function(){var t=s(this.opt.targetScore);this.score=t.length?t:i._buildScoreField.call(this)},_createStars:function(){for(var t=1;t<=this.opt.number;t++){var e=i._nameForIndex.call(this,t),a={alt:t,src:this.opt.path+this.opt[e]};"img"!==this.opt.starType&&(a={"data-alt":t,"class":a.src}),a.title=i._getHint.call(this,t),s("<"+this.opt.starType+" />",a).appendTo(this),this.opt.space&&this.self.append(t<this.opt.number?"&#160;":"")}this.stars=this.self.children(this.opt.starType)},_error:function(t){s(this).text(t),s.error(t)},_fill:function(t){for(var e=0,a=1;a<=this.stars.length;a++){var s,o=this.stars[a-1],r=i._turnOn.call(this,a,t);if(this.opt.iconRange&&this.opt.iconRange.length>e){var n=this.opt.iconRange[e];s=i._getRangeIcon.call(this,n,r),a<=n.range&&i._setIcon.call(this,o,s),a===n.range&&e++}else s=this.opt[r?"starOn":"starOff"],i._setIcon.call(this,o,s)}},_getFirstDecimal:function(t){var e=t.toString().split(".")[1],a=0;return e&&(a=parseInt(e.charAt(0),10),"9999"===e.slice(1,5)&&a++),a},_getRangeIcon:function(t,e){return e?t.on||this.opt.starOn:t.off||this.opt.starOff},_getScoreByPosition:function(t,e){var a=parseInt(e.alt||e.getAttribute("data-alt"),10);if(this.opt.half){var o=i._getWidth.call(this),r=parseFloat((t.pageX-s(e).offset().left)/o);a=a-1+r}return a},_getHint:function(t,e){if(0!==t&&!t)return this.opt.noRatedMsg;var a=i._getFirstDecimal.call(this,t),s=Math.ceil(t),o=this.opt.hints[(s||1)-1],r=o,n=!e||this.move;return this.opt.precision?(n&&(a=0===a?9:a-1),r=o[a]):(this.opt.halfShow||this.opt.half)&&(a=n&&0===a?1:a>5?1:0,r=o[a]),""===r?"":r||t},_getWidth:function(){var t=this.stars[0].width||parseFloat(this.stars.eq(0).css("font-size"));return t||i._error.call(this,"Could not get the icon width!"),t},_lock:function(){var t=i._getHint.call(this,this.score.val());this.style.cursor="",this.title=t,this.score.prop("readonly",!0),this.stars.prop("title",t),this.cancel&&this.cancel.hide(),this.self.data("readonly",!0)},_nameForIndex:function(t){return this.opt.score&&this.opt.score>=t?"starOn":"starOff"},_resetTitle:function(t){for(var e=0;e<this.opt.number;e++)this.stars[e].title=i._getHint.call(this,e+1)},_roundHalfScore:function(t){var e=parseInt(t,10),a=i._getFirstDecimal.call(this,t);return 0!==a&&(a=a>5?1:.5),e+a},_roundStars:function(t,e){var a,s=(t%1).toFixed(2);if(e||this.move?a=s>.5?"starOn":"starHalf":s>this.opt.round.down&&(a="starOn",this.opt.halfShow&&s<this.opt.round.up?a="starHalf":s<this.opt.round.full&&(a="starOff")),a){var o=this.opt[a],r=this.stars[Math.ceil(t)-1];i._setIcon.call(this,r,o)}},_setIcon:function(t,e){t["img"===this.opt.starType?"src":"className"]=this.opt.path+e},_setTarget:function(t,e){e&&(e=this.opt.targetFormat.toString().replace("{score}",e)),t.is(":input")?t.val(e):t.html(e)},_setTitle:function(t,e){if(t){var a=parseInt(Math.ceil(t),10),s=this.stars[a-1];s.title=i._getHint.call(this,t,e)}},_target:function(t,e){if(this.opt.target){var a=s(this.opt.target);a.length||i._error.call(this,"Target selector invalid or missing!");var o=e&&"mouseover"===e.type;if(void 0===t)t=this.opt.targetText;else if(null===t)t=o?this.opt.cancelHint:this.opt.targetText;else{"hint"===this.opt.targetType?t=i._getHint.call(this,t,e):this.opt.precision&&(t=parseFloat(t).toFixed(1));var r=e&&"mousemove"===e.type;o||r||this.opt.targetKeep||(t=this.opt.targetText)}i._setTarget.call(this,a,t)}},_turnOn:function(t,e){return this.opt.single?t===e:e>=t},_unlock:function(){this.style.cursor="pointer",this.removeAttribute("title"),this.score.removeAttr("readonly"),this.self.data("readonly",!1);for(var t=0;t<this.opt.number;t++)this.stars[t].title=i._getHint.call(this,t+1);this.cancel&&this.cancel.css("display","")},cancel:function(t){return this.each(function(){var e=s(this);e.data("readonly")!==!0&&(i[t?"click":"score"].call(e,null),this.score.removeAttr("value"))})},click:function(t){return this.each(function(){s(this).data("readonly")!==!0&&(t=i._adjustedScore.call(this,t),i._apply.call(this,t),this.opt.click&&this.opt.click.call(this,t,s.Event("click")),i._target.call(this,t))})},destroy:function(){return this.each(function(){var t=s(this),e=t.data("raw");e?t.off(".raty").empty().css({cursor:e.style.cursor}).removeData("readonly"):t.data("raw",t.clone()[0])})},getScore:function(){var t,e=[];return this.each(function(){t=this.score.val(),e.push(t?+t:void 0)}),e.length>1?e:e[0]},move:function(t){return this.each(function(){var e=parseInt(t,10),a=i._getFirstDecimal.call(this,t);e>=this.opt.number&&(e=this.opt.number-1,a=10);var o=i._getWidth.call(this),r=o/10,n=s(this.stars[e]),l=n.offset().left+r*a,c=s.Event("mousemove",{pageX:l});this.move=!0,n.trigger(c),this.move=!1})},readOnly:function(t){return this.each(function(){var e=s(this);e.data("readonly")!==t&&(t?(e.off(".raty").children("img").off(".raty"),i._lock.call(this)):(i._binds.call(this),i._unlock.call(this)),e.data("readonly",t))})},reload:function(){return i.set.call(this,{})},score:function(){var t=s(this);return arguments.length?i.setScore.apply(t,arguments):i.getScore.call(t)},set:function(t){return this.each(function(){s(this).raty(s.extend({},this.opt,t))})},setScore:function(t){return this.each(function(){s(this).data("readonly")!==!0&&(t=i._adjustedScore.call(this,t),i._apply.call(this,t),i._target.call(this,t))})}};s.fn.raty=function(t){return i[t]?i[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void s.error("Method "+t+" does not exist!"):i.init.apply(this,arguments)},s.fn.raty.defaults={cancel:!1,cancelClass:"raty-cancel",cancelHint:"Cancel this rating!",cancelOff:"cancel-off.png",cancelOn:"cancel-on.png",cancelPlace:"left",click:void 0,half:!1,halfShow:!0,hints:["bad","poor","regular","good","gorgeous"],iconRange:void 0,mouseout:void 0,mouseover:void 0,noRatedMsg:"Not rated yet!",number:5,numberMax:20,path:void 0,precision:!1,readOnly:!1,round:{down:.25,full:.6,up:.76},score:void 0,scoreName:"score",single:!1,space:!0,starHalf:"star-half.png",starOff:"star-off.png",starOn:"star-on.png",starType:"img",target:void 0,targetFormat:"{score}",targetKeep:!1,targetScore:void 0,targetText:"",targetType:"hint"},a.exports=s});