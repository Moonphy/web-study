var weixinApp = angular.module("weixin",[]);

function findInArray(classes,clsName){
    var pos = -1;
    if(classes){
        for(var i=0;i<classes.length;i++){
            if(classes[i]==clsName){
                pos = i;
                break;
            }
        }
    }
    return pos;
}

weixinApp.controller("WeixinController",function ($scope,$http) {
    $http.get("weixin2.json").success(function(data) {
        $scope.vm = data;

        $scope.setTarget = function(index){
            var contents = $scope.vm.contents;
            var p = contents[index];

            for(var i=0;i<contents.length;i++){
                if(i!=index){
                    var pos = findInArray(contents[i].class,'target');
                    if(pos!=-1){
                        contents[i].class.splice(pos,1);
                    }
                }
            }
            var classes = p.class;
            var pos = findInArray(classes,'target');
            if(pos==-1){
                $scope.targetIndex = index;
                if(!p.class){
                    p.class = ["target"];
                }else{
                    p.class.push("target");
                }
            }else{
                $scope.targetIndex = -1;
                p.class.splice(pos,1);
            }
        };

        $scope.insertUp = function(index){
            insert("up",index);
        };

        $scope.insertDown = function(index){
            insert("down",index);
        };

        $scope.moveUp = function(index){
            var contents = $scope.vm.contents;
            var data = contents[index];
            if($scope.targetIndex==-1){
                contents.splice(index,1);
                contents.push(data);
            }else{
                contents.splice(index,1);
                contents.splice($scope.targetIndex,0,data);
            }
        };

        $scope.delete = function(index){
            $scope.vm.contents.splice(index,1);
        };

        $scope.moveDown = function(index){
            var contents = $scope.vm.contents;
            var data = contents[index];
            if($scope.targetIndex==-1){
                contents.splice(index,1);
                contents.push(data);
            }else{
                contents.splice(index,1);
                contents.splice($scope.targetIndex+1,0,data);
            }
        };

        $scope.add = function(){
            $scope.vm.contents.push({type:"text",editable:true});
        };

        $scope.fb = function(){
            toggleClass("fb");
        };

        $scope.tc = function(){
            toggleClass("tc");
        };

        $scope.ti = function(){
            toggleClass("ti");
        };

        $scope.clear = function(index){
            $scope.vm.contents = [];
            var images = $scope.vm.images;
            for(var i=0;i<images.length;i++){
                images[i].class = "move";
            }
        };

        function getPos(direction){
            var pos;
            if("up"==direction){
                pos = $scope.targetIndex;
            }else if("down" == direction){
                pos = $scope.targetIndex+1;
            }
            //$scope.targetIndex++;
            return pos;
        }

        function move(direction,index){
            var contents = $scope.vm.contents;
            var data = contents[index];
            if($scope.targetIndex==-1){
                contents.splice(index,1);
                contents.push(data);
            }else{
                contents.splice(index,1);
                contents.splice(getPos(direction),0,data);
            }
        }

        function insert(direction,index){
            var image = $scope.vm.images[index];
            image.class = "";
            var data = {type:"img",url:image.url,class:["img"]};
            if($scope.targetIndex==-1){
                $scope.vm.contents.push(data);
            }else{
                $scope.vm.contents.splice(getPos(direction),0,data);
            }
        }

        function toggleClass(clsName){
            var p = $scope.vm.contents[$scope.targetIndex];
            var classes = p.class;
            var pos = findInArray(classes,clsName);
            if(pos==-1){
                if(!p.class){
                    p.class = [clsName];
                }else{
                    p.class.push(clsName);
                }
            }else{
                p.class.splice(pos,1);
            }
        }
    });
});
