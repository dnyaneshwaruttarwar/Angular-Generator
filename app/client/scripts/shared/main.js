(function() {
  'use strict';
  angular.module('app.controllers', [])
            .controller('AppCtrl',AppCtrl)
            .controller('HeaderController',HeaderController)
            .controller('DashboardCtrl',DashboardCtrl);
    
    AppCtrl.$inject = ['$scope','$rootScope','$q','$state'];
    HeaderController.$inject = ['$scope'];
    DashboardCtrl.$inject = ['$scope','$state'];
    
    function AppCtrl($scope, $rootScope,$q,$state){
        var $window;
        
        $window = $(window);
        $scope.main = {
            brand: 'Angular Application',
            name: 'zCon'
        };
        

        $scope.goToTop = function (){
            alert('error');
        };

    }
    
    function HeaderController($scope){

    }
    
    
         
    function DashboardCtrl($scope,$state,){
		
    }
    
}).call(this);
