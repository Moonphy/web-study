BTR.define(["require","exports","module","../../base/index"],function(e,t,n){var r=e("../../base/index"),i=r.$,s=function(e){this.settings=i.extend({},s.defaults,e),this.defaults={url:"",loadDataContainer:"",buildParam:function(){return""},success:function(){},container:"",loadFirst:!1,loadedCallback:function(){},canDel:!1,delTpl:'<div class="del">删除</div>',search:!1,searchInId:"",searchClose:"",searchCallback:null,delCallback:function(e){},nomore:!1},this.initialize=function(){this.loadData(),this.settings.search&&this.listenChange()},this.appendData=function(e){this.settings.loadFirst&&(i(this.settings.loadDataContainer).empty(),this.settings.loadFirst=!1),i(this.settings.loadDataContainer).append(e)},this.loadData=function(){var e=this;e.settings.loadFirst&&(e.current=0);var t=i.ajax({url:e.settings.url,data:e.settings.buildParam(),success:function(t){var n=e.settings.success.call(this,t);i.isFunction(e.settings.loadedCallback)&&e.settings.loadedCallback.call(this),e.total=r.utils.getTotalPage(n.total,n.size),console.log(e.total-1,e.current),e.total-1==e.current&&(e.nomore=!0);if(e.settings.canDel){i(e.settings.container).find(".item").off("swipeLeft").on("swipeLeft",function(){i(this).parents("ul").find(".del").remove(),i(this).parents("ul").find("a").css({left:"0%"}),i(this).append(e.defaults.delTpl),i(this).find("a").css({left:"-20%"})}).off("swipeRight").on("swipeRight",function(){i(this).find(".del").remove(),i(this).find("a").css({left:"0%"})});var s=0;i(".del").die(r.events.click).live(r.events.click,function(t){r.log(t.timeStamp),s!=0&&t.timeStamp-s<1e4?s=0:(s=t.timeStamp,i.isFunction(e.settings.delCallback)&&e.settings.delCallback.call(this))})}}})},this.loadNext=function(e){this.nomore?(i("#pullup-label").text("已无更多数据"),i("#pullup").removeClass("loading"),i("#pullup").find(".pullup-icon").remove()):(this.current++,this.loadData(),i.isFunction(e)&&(this.settings.loadedCallback=e))},this.refresh=function(){window.location.reload()},this.listenChange=function(){function t(t){n.value?i(e.settings.searchClose).show():i(e.settings.searchClose).hide(),i(e.settings.container).empty(),e.settings.searchCallback.call(this)}var e=this,n=document.getElementById(e.settings.searchInId);n.addEventListener("input",t,!1),i(e.settings.searchClose).on(r.events.click,function(t){n.value="",e._timeStamp&&t.timeStamp-e._timeStamp<50?(e.settings.searchCallback.call(this),i(this).hide()):e._timeStamp=t.timeStamp})},this.current=0,this.total=0,this.size=10};n.exports=s});