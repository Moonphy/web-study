BTR.define(["require","exports","module","../../base/index","../../nav/nav","../bill/state"],function(e,t,n){var r=e("../../base/index"),i=r.$,s=e("../../nav/nav"),o=e("../bill/state"),u=new s({prev:{id:"J_prev",text:'<i class="icon iconfont">&#xe61f;</i>返回'},title:"信息编辑",op:{id:"J_save",text:"保存"}});u.init(),i(function(){function E(){var t=a.val(),n=f.val(),i=l.val(),s=c.val(),o=h.val(),u=p.val(),E=d.val(),S=v.val();if(n=="-1"||r.check.null(n)){r.msg.info(f.attr("data-tip"));return}if(r.check.null(i)){r.msg.info(l.attr("placeholder"));return}if(r.check.null(s)){r.msg.info(c.attr("placeholder"));return}if(r.check.null(o)){r.msg.info(h.attr("placeholder"));return}if(r.check.null(u)){r.msg.info(p.attr("placeholder"));return}var x=m.val(),T=g.val(),N=y.val(),C=b.val(),k=w.val();if(x=="-1"||r.check.null(x)){r.msg.info(m.attr("data-tip"));return}if(T=="-1"||r.check.null(T)){r.msg.info(g.attr("data-tip"));return}if(N=="-1"||r.check.null(N)){r.msg.info(y.attr("data-tip"));return}if(C=="-1"||r.check.null(C)){r.msg.info(b.attr("data-tip"));return}if(k=="-1"||r.check.null(k)){r.msg.info(w.attr("data-tip"));return}var L={address:i,boothRoom:S,businessArea:u,buyUser:N,cactMan:o,cactTel:s,existAccount:k,id:e,liftingFrame:E,localPercent:T,memo:"",mfctyType:n,monthBuy:x,payUser:C};return r.utils.toQueryString(L)}function T(e){return e?e:""}var e=r.utils.mapQuery(window.location.search).id;if(e==undefined)return;var t=i("#J_nav"),n=i(".J_trigger"),s=[i("#J_pannel1"),i("#J_pannel2")];t.on(r.events.click,".J_trigger",function(){var e=i(this);n.removeClass("active"),e.addClass("active"),e.hasClass("J_t1")?(s[0].show(),s[1].hide()):(s[0].hide(),s[1].show())});var o=i(".sub"),u=i(".add");o.on(r.events.click,function(){var e=i(this).next(),t=parseInt(e.val());t>0?(t--,e.val(t),t==0?i(this).addClass("disabled"):i(this).removeClass("disabled")):i(this).addClass("disabled")}),u.on(r.events.click,function(){var e=i(this).prev(),t=parseInt(e.val());t++,e.val(t),t>0&&i(this).prev().prev().removeClass("disabled")});var a=i("#J_name"),f=i("#J_type"),l=i("#J_address"),c=i("#J_phone"),h=i("#J_contact"),p=i("#J_area"),d=i("#J_crane"),v=i("#J_kaoqi"),m=i("#J_purchase_crane"),g=i("#J_local_purchase"),y=i("#J_purchase"),b=i("#J_pay"),w=i("#J_have_account");i("#J_save").on(r.events.click,function(){var e=E();if(e==undefined)return;i.ajax({url:"/wx/basicSituation/modify/message",data:e,type:"POST",success:function(e){r.state.check(e,function(e){r.msg.success("更新成功，感谢使用",2e3,function(){r.data.remove("curr_factory_baseinfo_1"),r.data.remove("curr_factory_baseinfo_2");var e=r.data.get("curr_factory_baseinfo_url");e!=undefined?(r.data.remove("curr_factory_baseinfo_url"),location.replace(e)):history.back()})})}})});var S=r.data.get("curr_factory_baseinfo_1"),x=r.data.get("curr_factory_baseinfo_2");S!=null&&(a.val(T(S.mfctyName)),f.val(T(S.mfctyType)),l.val(T(S.address)),c.val(T(S.cactTel)),h.val(T(S.cactMan)),p.val(T(S.businessArea)),d.val(T(S.liftingFrame)||0),v.val(T(S.boothRoom)||0)),x!=null&&(m.val(T(x.monthBuy)),g.val(T(x.localPercent)),y.val(T(x.buyUser)),b.val(T(x.payUser)),w.val(T(x.existAccount)?1:0)),i("#J_prev").on("click",function(){history.back()}),r.pageLoaded()})});