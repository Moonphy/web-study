/**
 * Created by Administrator on 2015/9/29.
 */

//ģ��3����װ��һ��messengerģ�飬��ʾajax�Żص�����
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