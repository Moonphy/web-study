define("modules/list-role/0.0.1/src/list-tpl",function(d,e,l){return'{{# if(d.model.length<=0){ }} <tr class="nodata">     <td colspan="4">\u6ca1\u6709\u7b26\u5408\u6761\u4ef6\u7684\u6570\u636e</td> </tr> {{# }else{ }}     {{# for(var i = 0, len = d.model.length; i < len; i++){ }}     {{# var model = d.model[i] }}     <tr>         <td>{{model.roleId}}</td>         <td>{{model.roleCode}}</td>         <td>{{model.roleName}}</td>         <td>             {{# if(model.state==0){ }}             \u53ef\u7528             {{# }else{ }}             \u4e0d\u53ef\u7528             {{# } }}         </td>         <td>             <a href="edit.do?id={{model.roleId}}">\u7f16\u8f91</a>\uff5c             <a href="javascript:;" class="delbtn" data-id="{{model.roleId}}">\u5220\u9664</a>\uff5c             <a href="edit-menu.do?id={{model.roleId}}">\u5206\u914d\u83dc\u5355</a>         </td>     </tr>     {{# } }} {{# } }}'});