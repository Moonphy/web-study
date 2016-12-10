/**
 * Created by Administrator on 2014/10/29.
 */
var bookListModule = angular.module("BookListModule",[]);
bookListModule.controller('BookListCtrl',function($scope,$http,$state,$stateParams){
    $scope.filterOptions = {
        filterText:"",
        useExternalFilter: true
    };
    $scope.totalServerItems = 0;
    $scope.pagingOptions = {
        pageSizes:[5,10,20],
        pageSize:5,
        currentPage:1
    };
    $scope.setPaginDate =  function(data,page,pageSize){
        var pagedData = data.slice((page-1)*pageSize,page*pageSize);
        $scope.book = pagedData;
        $scope.totalServerItems = data.length;
        if(!$scope.$$phase){
            $scope.$apply();
        }
    };

    console.log($stateParams);
    $scope.getPagedDataAaync = function(pageSize,page,searchText){
        setTimeout(function(){
            var data;
            if(searchText){
                var ft = searchText.toLowerCase();
                $http.get('../data/books'+$stateParams.bookType+'.json')
                    .success(function(largeLoad){
                        data = largeLoad.filter(function(tiem){
                            return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                        });
                        $scope.setPaginDate(data,page,pageSize);
                    });
            } else {
                $http.get('../data/book'  + $stateParams.bookType + '.json')
                    .success(function(largeLoad){
                        $scope.setPaginDate(largeLoad,page,pageSize);
                    });
            }
        },100);
    };

    $scope.getPagedDataAaync($scope.pagingOptions.pageSize,$scope.pagingOptions.currentPage);

    $scope.$watch('pagingOption',function(newVal,oldVal){
        if(newVal !== oldVal && newVal.currentPage !== oldVal.currentPage){
            $scope.getPagedDataAaync($scope.pagingOptions.pageSize,$scope.pagingOptions.currentPage,$scope.filterOptions.filterText);
        }
    },true);
    $scope.$watch('filterOptions',function(newVal,oldVal){
        if(newVal !== oldVal){
            $scope.getPagedDataAaync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    },true);

    $scope.gridOptions = {
        data:'books',
        rowTemplate: '<div style="height: 100%"><div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell ">' +
            '<div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }"> </div>' +
            '<div ng-cell></div>' +
            '</div></div>',
        multiSelect:false,
        enableCellSelection:true,
        enableRowSelection:false,
        enableCellEdit:true,
        enablePinning:true,
        columnDefs:[{
            field: 'index',
            displayName: '序号',
            width: 60,
            pinnable: false,
            sortable: false
        }, {
            field: 'name',
            displayName: '书名',
            enableCellEdit: true
        }, {
            field: 'author',
            displayName: '作者',
            enableCellEdit: true,
            width: 220
        }, {
            field: 'pubTime',
            displayName: '出版日期',
            enableCellEdit: true,
            width: 120
        }, {
            field: 'price',
            displayName: '定价',
            enableCellEdit: true,
            width: 120,
            cellFilter: 'currency:"￥"'
        }, {
            field: 'bookId',
            displayName: '操作',
            enableCellEdit: false,
            sortable: false,
            pinnable: false,
            cellTemplate: '<div><a ui-sref="bookdetail({bookId:row.getProperty(col.field)})" id="{{row.getProperty(col.field)}}">详情</a></div>'
        }],
        enablePaging:true,
        showFooter:true,
        totalServerTtems:'totalServerItems',
        pagingOptions:$scope.pagingOptions,
        filterOptions:$scope.filterOptions
    };
});

var bookDetailModule = angular.module("BookDetailModule",[]);
bookDetailModule.controller('BookDetailCtrl',function($scope,$http,$state,$stateParams){
    console.log($stateParams);
    $scope.getBookData = function(){

    };
});