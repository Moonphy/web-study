define("modules/factory-account/0.0.1/src/list-tpl",function(e,l,t){return'{{# if(d.model.length<=0){ }} <tr class="nodata">     <td colspan="5">\u6ca1\u6709\u8d26\u53f7\u4fe1\u606f</td> </tr> {{# }else{ }}     {{# for(var i = 0, len = d.model.length; i < len; i++){ }}     {{# var model = d.model[i] }}     <tr>         <td>{{# if(model.isChild===1){ }}\u5b50\u8d26\u53f7{{# }else{ }}\u4e3b\u8d26\u53f7{{# } }}</td>         <td>             <input type="text" class="J_no" name="loginMobile" value="{{model.loginMobile}}" placeholder="\u8bf7\u8f93\u5165\u624b\u673a\u8d26\u53f7"/>         </td>         <td>             <input type="text" class="J_no" name="loginEmail" value="{{model.loginEmail}}" placeholder="\u8bf7\u8f93\u5165\u90ae\u7bb1\u8d26\u53f7"/>         </td>         <td><input type="text" class="user" name="userName" value="{{model.userName}}" placeholder="\u8bf7\u8f93\u5165\u4f7f\u7528\u8005\u540d\u79f0"/></td>         <td>             <a href="#" class="reset" data-id="{{model.userID}}">\u91cd\u7f6e\u5bc6\u7801</a>             <input type="hidden" name="userID" value="{{model.userID}}"/>             <input type="hidden" name="isChild" value="{{model.isChild}}"/>         </td>     </tr>     {{# } }} {{# } }} '});