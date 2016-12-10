/**
 * Created by Administrator on 2014/10/29.
 */
var routerApp = angular.module('routerApp',['ui.router','ngGrid','BookListModule','BookDetailModule']);
routerApp.run(function($rootScope,$state,$stateParams){
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});
routerApp.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index',{
            url:'/index',
            view:{
                '':{
                    templateUrl:'tpls/home.html'
                },
                'main@index':{
                    templateUrl:'tpls/loginForm.html'
                }
            }
        })
        .state('booklist',{
            url:'/{bookType:[0-9]{1,4}}',
            view:{
                '':{
                    templateUrl:'tpls/bookList.html'
                },
                'booktype@booklist':{
                    templateUrl:'tpls/bookType.html'
                },
                'bookgrid@bookList':{
                    templateUrl:'tpls/bookGrid.html'
                }
            }
        })
        .state('addbook',{
            rul:'/addbook',
            templateUrl:'tpls/addBookForm.html'
        })
        .state('bookdetal',{
            url:'/bookdetail/:bookId',
            templateUrl:'tpls/bookDetail.html'
        })
});