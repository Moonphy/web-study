/**
 * Created by Administrator on 2015/9/29.
 */

//模块2，请求数据模块
define(['jquery','config'], function ($,config) {
    var callApi = function (url,type,callback) {
            $.ajax({
                url: url,
                type: type,
                dataType: 'json',
                success: function (data) {
                    callback(data);
                }
            })
        },
        getMessage = function (id,callback) {
            var url = config.baseUrl + id;
            callApi(url,'GET',callback);
        };

    return{
        getMessage: getMessage
    };
});