BTR.define(["require","exports","module","../../base/index","../../nav/nav","../../footer/footer"],function(e,t,n){var r=e("../../base/index"),i=r.$,s=e("../../nav/nav"),o=e("../../footer/footer"),u=new s({title:"我"}),a=new o;u.init(),a.init(),i(function(){r.data.remove("curr_id");var e=i("#J_accidentcar_remind");i.ajax({url:"/wx/accidentCarsRemain/remain",success:function(t){r.state.check(t,function(t){t==1&&e.find(".my_icon").attr("class","my_icon clock2")})}}),i(".content .item").on(r.events.over,function(e){i(this).addClass("highlight")}).on(r.events.out,function(e){i(this).removeClass("highlight")}),r.pageLoaded()})});