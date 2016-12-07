define("gallery/tagsinput/0.0.1/index",function(t,a,e){var n=function(t){var a=new Array,e=new Array;t.fn.doAutosize=function(a){var e=t(this).data("minwidth"),i=t(this).data("maxwidth"),n="",o=t(this),u=t("#"+t(this).data("tester_id"));if(n!==(n=o.val())){var r=n.replace(/&/g,"&amp;").replace(/\s/g," ").replace(/</g,"&lt;").replace(/>/g,"&gt;");u.html(r);var d=u.width(),s=d+a.comfortZone>=e?d+a.comfortZone:e,l=o.width(),p=l>s&&s>=e||s>e&&i>s;p&&o.width(s)}},t.fn.resetAutosize=function(a){var e=t(this).data("minwidth")||a.minInputWidth||t(this).width(),i=t(this).data("maxwidth")||a.maxInputWidth||t(this).closest(".tagsinput").width()-a.inputPadding,n=t(this),o=t("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:n.css("fontSize"),fontFamily:n.css("fontFamily"),fontWeight:n.css("fontWeight"),letterSpacing:n.css("letterSpacing"),whiteSpace:"nowrap"}),u=t(this).attr("id")+"_autosize_tester";!t("#"+u).length>0&&(o.attr("id",u),o.appendTo("body")),n.data("minwidth",e),n.data("maxwidth",i),n.data("tester_id",u),n.css("width",e)},t.fn.getAllTags=function(){var e=t(this).attr("id");return t(this).val().split(a[e])},t.fn.addTag=function(i,n){return n=jQuery.extend({focus:!1,callback:!0},n),this.each(function(){var o=t(this).attr("id"),u=t(this).val().split(a[o]);if(""==u[0]&&(u=new Array),i=jQuery.trim(i),n.unique){var r=t(this).tagExist(i);1==r&&t("#"+o+"_tag").addClass("not_valid")}else var r=!1;if(""!=i&&1!=r){if(t("<span>").addClass("tag").append(t("<span>").text(i).append("&nbsp;&nbsp;"),t("<a>",{href:"#",title:"Removing tag",text:"x"}).click(function(){return t("#"+o).removeTag(escape(i))})).insertBefore("#"+o+"_addTag"),u.push(i),t("#"+o+"_tag").val(""),n.focus?t("#"+o+"_tag").focus():t("#"+o+"_tag").blur(),t.fn.tagsInput.updateTagsField(this,u),n.callback&&e[o]&&e[o].onAddTag){var d=e[o].onAddTag;d.call(this,i,u)}if(e[o]&&e[o].onChange){var s=u.length,d=e[o].onChange;d.call(this,t(this),u[s-1])}}}),!1},t.fn.removeTag=function(n){return n=unescape(n),this.each(function(){var o=t(this).attr("id"),u=t(this).val().split(a[o]);for(t("#"+o+"_tagsinput .tag").remove(),str="",i=0;i<u.length;i++)u[i]!=n&&(str=str+a[o]+u[i]);if(t.fn.tagsInput.importTags(this,str),e[o]&&e[o].onRemoveTag){var r=e[o].onRemoveTag;r.call(this,n)}}),!1},t.fn.tagExist=function(e){var i=t(this).attr("id"),n=t(this).val().split(a[i]);return jQuery.inArray(e,n)>=0},t.fn.importTags=function(a){id=t(this).attr("id"),t("#"+id+"_tagsinput .tag").remove(),t.fn.tagsInput.importTags(this,a)},t.fn.tagsInput=function(i){var n=jQuery.extend({interactive:!0,timeout:150,defaultText:"add a tag",minChars:0,width:"300px",height:"100px",autocomplete:{selectFirst:!1},hide:!0,delimiter:",",unique:!0,removeWithBackspace:!0,placeholderColor:"#666666",autosize:!0,comfortZone:20,inputPadding:8},i);return this.each(function(){n.hide&&t(this).hide();var i=t(this).attr("id");(!i||a[t(this).attr("id")])&&(i=t(this).attr("id","tags"+(new Date).getTime()).attr("id"));var o=jQuery.extend({pid:i,real_input:"#"+i,holder:"#"+i+"_tagsinput",input_wrapper:"#"+i+"_addTag",fake_input:"#"+i+"_tag"},n);a[i]=o.delimiter,(n.onAddTag||n.onRemoveTag||n.onChange)&&(e[i]=new Array,e[i].onAddTag=n.onAddTag,e[i].onRemoveTag=n.onRemoveTag,e[i].onChange=n.onChange);var u='<div id="'+i+'_tagsinput" class="tagsinput"><div id="'+i+'_addTag">';if(n.interactive&&(u=u+'<input id="'+i+'_tag" value="" data-default="'+n.defaultText+'" />'),u+='</div><div class="tags_clear"></div></div>',t(u).insertAfter(this),t(o.holder).css("width",n.width),t(o.holder).css("min-height",n.height),t(o.holder).css("height",n.height),t(o.holder).css("_height",n.height),""!=t(o.real_input).val()&&t.fn.tagsInput.importTags(t(o.real_input),t(o.real_input).val()),n.interactive){if(t(o.fake_input).val(t(o.fake_input).attr("data-default")),t(o.fake_input).css("color",n.placeholderColor),t(o.fake_input).resetAutosize(n),t(o.holder).bind("click",o,function(a){t(a.data.fake_input).focus()}),t(o.fake_input).bind("focus",o,function(a){t(a.data.fake_input).val()==t(a.data.fake_input).attr("data-default")&&t(a.data.fake_input).val(""),t(a.data.fake_input).css("color","#000000")}),void 0!=n.autocomplete_url){autocomplete_options={source:n.autocomplete_url};for(attrname in n.autocomplete)autocomplete_options[attrname]=n.autocomplete[attrname];void 0!==jQuery.Autocompleter?(t(o.fake_input).autocomplete(n.autocomplete_url,n.autocomplete),t(o.fake_input).bind("result",o,function(a,e,o){e&&t("#"+i).addTag(e[0]+"",{focus:!0,unique:n.unique})})):void 0!==jQuery.ui.autocomplete&&(t(o.fake_input).autocomplete(autocomplete_options),t(o.fake_input).bind("autocompleteselect",o,function(a,e){return t(a.data.real_input).addTag(e.item.value,{focus:!0,unique:n.unique}),!1}))}else t(o.fake_input).bind("blur",o,function(a){var e=t(this).attr("data-default");return""!=t(a.data.fake_input).val()&&t(a.data.fake_input).val()!=e?a.data.minChars<=t(a.data.fake_input).val().length&&(!a.data.maxChars||a.data.maxChars>=t(a.data.fake_input).val().length)&&t(a.data.real_input).addTag(t(a.data.fake_input).val(),{focus:!0,unique:n.unique}):(t(a.data.fake_input).val(t(a.data.fake_input).attr("data-default")),t(a.data.fake_input).css("color",n.placeholderColor)),!1});t(o.fake_input).bind("keypress",o,function(a){return a.which==a.data.delimiter.charCodeAt(0)||13==a.which?(a.preventDefault(),a.data.minChars<=t(a.data.fake_input).val().length&&(!a.data.maxChars||a.data.maxChars>=t(a.data.fake_input).val().length)&&setTimeout(function(){t(a.data.real_input).addTag(t(a.data.fake_input).val(),{focus:!0,unique:n.unique})},n.timeout),t(a.data.fake_input).resetAutosize(n),!1):void(a.data.autosize&&t(a.data.fake_input).doAutosize(n))}),o.removeWithBackspace&&t(o.fake_input).bind("keydown",function(a){if(8==a.keyCode&&""==t(this).val()){a.preventDefault();var e=t(this).closest(".tagsinput").find(".tag:last").text(),i=t(this).attr("id").replace(/_tag$/,"");e=e.replace(/[\s]+x$/,""),t("#"+i).removeTag(escape(e)),t(this).trigger("focus")}}),t(o.fake_input).blur(),o.unique&&t(o.fake_input).keydown(function(a){(8==a.keyCode||String.fromCharCode(a.which).match(/\w+|[\u8c29\u8305\u94c6\u8d38\u7164\u8115\u8121\u8125\u812b\u8137\u5e3d\u8129,\/]+/))&&t(this).removeClass("not_valid")})}}),this},t.fn.tagsInput.updateTagsField=function(e,i){var n=t(e).attr("id");t(e).val(i.join(a[n]))},t.fn.tagsInput.importTags=function(n,o){t(n).val("");var u=t(n).attr("id"),r=o.split(a[u]);for(i=0;i<r.length;i++)t(n).addTag(r[i],{focus:!1,callback:!1});if(e[u]&&e[u].onChange){var d=e[u].onChange;d.call(n,n,r[i])}}};e.exports=n});