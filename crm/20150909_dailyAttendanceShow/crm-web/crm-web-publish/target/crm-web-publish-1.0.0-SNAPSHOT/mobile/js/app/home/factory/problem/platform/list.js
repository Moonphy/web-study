BTR.define(["require","exports","module","../../../../base/index","../../../../nav/nav","../../../../gallery/iscroll/api","../../../../gallery/template/main","../../../../gallery/moment/main","../../../problem/icon","../../../../gallery/iscroll/list-api","text!./list-item.tpl"],function(e,t,n){var r=e("../../../../base/index"),i=r.$,s=e("../../../../nav/nav"),o=e("../../../../gallery/iscroll/api"),u=e("../../../../gallery/template/main"),a=e("../../../../gallery/moment/main"),f=e("../../../problem/icon"),l=new s({prev:{id:"J_prev",text:'<i class="icon iconfont">&#xe61f;</i>返回'},title:"平台问题",op:{text:'<a href="add.html"><i class="icon iconfont">&#xe637;</i></a>'}});l.init();var c=e("../../../../gallery/iscroll/list-api");i(function(){function s(){return n.template||(n.template=e("text!./list-item.tpl")),n.template}var t=i("#J_result_list"),n={},l=new c({loadDataContainer:t,url:"/wx/visit/platFormList",buildParam:function(){return"?taskID="+r.data.get("curr_taskid")+"&size="+l.size+"&current="+l.current},success:function(e){return r.state.check(e,function(t){if(t){t||(t=[]),i.each(t,function(e,t){t.icon=f.get(t.platTypeID),t.createDate=a(t.createTime).format("YYYY-MM-DD")});var n=u.compile(s());l.appendData(n(e)),r.mobileDevice&&i("#wrapper").off(r.events.click,".item a").on(r.events.click,".item a",function(e){location.href=i(this).attr("href")})}}),e},container:"#J_result_list",loadedCallback:function(){console.log("数据加载完了"),h.scroll&&h.scroll.refresh()},canDel:!1}),h=new o({id:"#wrapper",pulldownAction:function(){l.refresh()},pullupAction:function(){var e=this;l.nomore=!0,l.loadNext(function(){e.refresh()})}});h.initialize(),l.initialize(),t.on(r.events.over,"li.item",function(){i(this).css({background:"#ddd"})}).on(r.events.out,"li.item",function(){i(this).css({background:"#fff"})}),i("#J_prev").on("click",function(){var e=r.data.get("curr_factory_url");e?location.href=e:history.back()}),r.pageLoaded()})});