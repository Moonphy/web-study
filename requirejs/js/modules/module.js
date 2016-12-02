/**
 * Created by Administrator on 2015/9/29.
 */

//模块1，全局设置模块
var config = (function () {
    var baseUrl = 'api/messenger';

    return{
        baseUrl: baseUrl
    };
})();


//模块2，请求数据模块
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


//模块3，封装的一个messenger模块，显示ajax放回的数据
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

//模块4，匿名函数，传id，调用messenger的showMessage()方法（直接执行）
(function (messenger) {
    var id = 55;
    messenger.showMessage(id);
})(messenger);