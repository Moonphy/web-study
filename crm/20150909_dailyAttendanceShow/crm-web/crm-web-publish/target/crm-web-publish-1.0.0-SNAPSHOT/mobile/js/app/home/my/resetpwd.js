BTR.define(["require","exports","module","../../base/index","../../nav/nav","../../storage/storage"],function(e,t,n){var r=e("../../base/index"),i=r.$,s=e("../../nav/nav"),o=e("../../storage/storage"),u=new s({prev:{text:'<a href="profile.html"><i class="icon iconfont">&#xe61f;</i>返回</a>'},op:{text:"修改",id:"J_edit"},title:"修改密码"});u.init(),function(){i(function(){function s(){var i=e.val(),s=t.val(),o=n.val();if(r.check.null(i)){r.msg.info("旧密码不能为空啊，亲");return}if(r.check.null(s)){r.msg.info("新密码类型没选呐，亲");return}if(r.check.null(o)){r.msg.info("请重复输入新密码啊，亲");return}if(s!=o){r.msg.info("两次新密码输入不一致啊，亲");return}var u={oldPwd:i,newPwd:s};return r.utils.toQueryString(u)}var e=i("#J_oldpwd"),t=i("#J_pwd"),n=i("#J_repwd");i("#J_edit").on(r.events.click,function(){var e=s();e!=undefined&&i.ajax({url:"/wx/user/edit/pwd",data:e,success:function(e){r.state.check(e,function(){r.msg.success("密码修改成功！",2e3,function(){location.replace("../login.html")})})}})}),r.pageLoaded()})}()});