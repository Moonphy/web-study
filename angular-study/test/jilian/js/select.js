
angular.module('testselect',[]).controller('sc',function ($scope, $http) {
    var vm = $scope.vm = {};
    $http.get("city.json").success(function(data){
        vm.countries = data;
    });
    $http.get("city2.json").success(function(data){
        vm.cs = data;
    });
    // 更换省的时候清空城市
    $scope.$watch('vm.t.p', function(province) {
        vm.c = null;
    });

});