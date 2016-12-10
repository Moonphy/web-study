function WeixinController($scope,$http){

    $http.get("weixin2.json").success(function(data){
        $scope.vm = data;
    });


    $scope.insertUp = function(item){
        $scope.vm.contents.push({type:"img",url:item.url,imgId:item.id,class:["img"]});
    };

    $scope.clear = function(){
        $scope.vm.contents = [];
    };

    $scope

    /*$scope.add = function(){
        $scope.vm.contents.push({type:"text",content:"haha"});
    };

    $scope.addClassFb = function(){
        $scope.vm.contents.class["fb"];
    };*/
}