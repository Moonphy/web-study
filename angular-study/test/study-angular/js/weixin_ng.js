/**
 * Created by Administrator on 2014/10/27.
 */
angular.module("myweixinModule",[]).controller("TextCtrl",function($scope,$http){
    var p = $scope.p = {};
    $http.get("weixin2.json").success(function (data) {
        p.content = data;
    })
});