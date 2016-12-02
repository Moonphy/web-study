/**
 * Created by Administrator on 2015/9/29.
 */

//模块3，封装的一个messenger模块，显示ajax放回的数据
define(['jquery','dataService'],function ($,dataService) {
    var showMessage = function (id) {
        dataService.getMessage(id, function (message) {
            $("#messagebox").html(message);
        });
    };

    return{
        showMessage: showMessage
    };

});