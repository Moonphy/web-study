BTR.define(["require","exports","module","../../base/index","../../gallery/datepicker/api","../../gallery/moment/main","../../gallery/iscroll/api","../../gallery/template/main","touch","../../nav/nav","../../footer/footer","../../gallery/iscroll/list-api","text!./list-item.tpl"],function(e,t,n){var r=e("../../base/index"),i=e("../../gallery/datepicker/api"),s=e("../../gallery/moment/main"),o=e("../../gallery/iscroll/api"),u=e("../../gallery/template/main"),a=r.$;e("touch")(a);var f=e("../../nav/nav"),l=e("../../footer/footer"),c=new f({title:"任务",op:{text:'<a href="add.html"><i class="icon iconfont">&#xe637;</i></a>'}}),h=new l;c.init(),h.init();var p=e("../../gallery/iscroll/list-api");a(function(){function t(){return c.template||(c.template=e("text!./list-item.tpl")),c.template}i.init(a);var n=a("#J_result_list"),f=a("#J_search_in"),l=a(".icon2"),c={};f.scroller("destroy").scroller({theme:"sense-ui",lang:"zh",preset:"date",stepMinute:5});var h=new p({loadDataContainer:n,container:"#J_result_list",url:"/wx/task/find/list",buildParam:function(){return"?key="+a.trim(f.val())+"&size="+h.size+"&current="+h.current},success:function(e){return r.state.check(e,function(e){if(e){e.model||(e.model=[]),a.each(e.model,function(e,t){var n=s(t.planTime);t.time=n.format("HH:mm"),t.date=n.format("YYYY-MM-DD"),t.state=t.state==3?"state done":t.state==2?"state lost":""});var n=u.compile(t());h.appendData(n(e)),r.mobileDevice&&a("#wrapper").off(r.events.click,".item a").on(r.events.click,".item a",function(e){location.href=a(this).attr("href")})}}),e.model},container:"#J_result_list",search:!1,loadedCallback:function(){console.log("数据加载完了"),d.scroll&&d.scroll.refresh(),r.pageLoaded()},canDel:!0,delCallback:function(){var e=a(this).parents("li.item");if(!confirm("删除任务时会删除该任务下的拜访信息以及相关的事故车信息，您确定删除吗？"))return;a.ajax({url:"/wx/task/del/specifiTask",type:"GET",data:"taskID="+e.attr("data-id"),success:function(t){r.state.check(t,function(){e.remove(),d.scroll&&d.scroll.refresh()})}})}});f.on("change",function(){var e=a(this).val();h.settings.loadFirst=!0,h.loadData(),e?l.show():l.hide()}),l.on(r.events.click,function(e){window._timeStamp&&e.timeStamp-window._timeStamp<50?(f.val(""),f.trigger("change"),a(this).hide()):window._timeStamp=e.timeStamp});var d=new o({id:"#wrapper",pulldownAction:function(){h.refresh()},pullupAction:function(){var e=this;h.loadNext(function(){e.refresh()})}});d.initialize(),h.initialize(),n.on(r.events.over,"li.item",function(){a(this).css({background:"#ddd"})}).on(r.events.out,"li.item",function(){a(this).css({background:"#fff"})}),r.pageLoaded()})});