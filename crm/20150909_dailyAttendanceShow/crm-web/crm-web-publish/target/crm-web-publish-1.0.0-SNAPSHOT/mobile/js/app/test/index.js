BTR.define(["require","exports","module","../base/index"],function(e,t,n){var r=e("../base/index"),i=r.$;i(window).scroll(function(){var e=i(this).scrollTop();e>=25?(i("#J_nav").css({position:"fixed","z-index":"10",left:"0",top:"0","padding-left":"25%"}),i("#J_content").css({position:"relative",top:"30px"})):(i("#J_nav").css({position:"static","padding-left":"0"}),i("#J_content").css({position:"static",top:"0px"}))});var s=i("#J_nav"),o=i("#J_left"),u=i("#J_content");i(u).scroll(function(){var e=i(this),t=i(this).scrollLeft(),n=i(this).scrollTop();s.scrollLeft(t),o.scrollTop(n),console.log(n,o.scrollTop())}),i(o).scroll(function(){var e=i(this),t=i(this).scrollTop();u.scrollTop(t)}),i(s).scroll(function(){var e=i(this),t=i(this).scrollLeft();u.scrollLeft(t)});var a=i("#contentval");for(var f=99;f>=0;f--){var l=["<tr>","<td>中国银行</td>","<td>中国银行</td>","<td>中国银行</td>","<td>中国银行</td>","<td>中国银行</td>","</tr>"].join("");a.append(l)}var c=i("#leftval");for(var f=99;f>=0;f--)c.append('<li class="item">农业银行</li>');r.pageLoaded(),n.exports={}});