BTR.define(["require","exports","module","../../../base/index","../../../nav/nav","../../../gallery/iscroll/api","../../../gallery/template/main","../../../gallery/moment/main","../../../gallery/iscroll/list-api","text!./list-item.tpl"],function(e,t,n){var r=e("../../../base/index"),i=r.$,s=e("../../../nav/nav"),o=e("../../../gallery/iscroll/api"),u=e("../../../gallery/template/main"),a=e("../../../gallery/moment/main"),f=new s({prev:{text:'<a href="../my.html"><i class="icon iconfont">&#xe61f;</i>我</a>'},title:"问题与建议",op:{text:'<a href="add.html"><i class="icon iconfont">&#xe637;</i></a>'}});f.init();var l=e("../../../gallery/iscroll/list-api");i(function(){function s(){return n.template||(n.template=e("text!./list-item.tpl")),n.template}var t=i("#J_result_list"),n={},f=new l({loadDataContainer:t,url:"/wx/marketFeedBack/find/marketFeedBackList",buildParam:function(){return"?size="+f.size+"&current="+f.current},success:function(e){return r.state.check(e,function(e){if(e){e.model||(e.model=[]),i.each(e.model,function(e,t){t.createDate=a(t.createTime).format("YYYY-MM-DD")});var t=u.compile(s());f.appendData(t(e)),r.mobileDevice&&i("#wrapper").off(r.events.click,".item a").on(r.events.click,".item a",function(e){location.href=i(this).attr("href")})}}),e.model},container:"#J_result_list",loadedCallback:function(){console.log("数据加载完了"),c.scroll&&c.scroll.refresh()},canDel:!0,delCallback:function(){var e=i(this).parents("li.item");i.ajax({url:"/wx/marketFeedBack/del",type:"POST",data:"feedBackID="+e.attr("data-id"),success:function(t){r.state.check(t,function(){e.remove()})}})}}),c=new o({id:"#wrapper",pulldownAction:function(){f.refresh()},pullupAction:function(){var e=this;f.loadNext(function(){e.refresh()})}});c.initialize(),f.initialize(),t.on(r.events.over,"li.item",function(){i(this).css({background:"#ddd"})}).on(r.events.out,"li.item",function(){i(this).css({background:"#fff"})}),r.pageLoaded()})});