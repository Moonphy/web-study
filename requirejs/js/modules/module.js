/**
 * Created by Administrator on 2015/9/29.
 */

//ģ��1��ȫ������ģ��
var config = (function () {
    var baseUrl = 'api/messenger';

    return{
        baseUrl: baseUrl
    };
})();


//ģ��2����������ģ��
var dataService = (function ($,config) {
    var callApi = function (url,type,callback) {
            $.ajax({
                url: url,
                type: type,
                dataType: 'json',
                success: function(data){
                    callback(data);
                }
            });
        },
        getMessage = function (id,callback) {
            url = config.baseUrl + id;
            callApi(url,'GET',callback);
        };

    return{
        getMessage: getMessage
    };
})($,config);


//ģ��3����װ��һ��messengerģ�飬��ʾajax�Żص�����
var messenger = (function ($,dataService) {
    var showMessage = function (id) {
        dataService.getMessage(id, function (message) {
            $("#messagebox").html(message);
        });
    };

    return{
        showMessage: showMessage
    };

})($,dataService);

//ģ��4��������������id������messenger��showMessage()������ֱ��ִ�У�
(function (messenger) {
    var id = 55;
    messenger.showMessage(id);
})(messenger);