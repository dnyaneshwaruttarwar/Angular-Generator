(function() {
  'use strict';
    angular.module('app', ['ngRoute','ui.router','ui.bootstrap','ngResource','app.common', 'app.directives'])
            .config(function($stateProvider,$logProvider,$provide,$httpProvider) {
                $httpProvider.defaults.withCredentials = false;
                $httpProvider.defaults.useXDomain = true;
                $logProvider.debugEnabled(true);
                
                $provide.decorator('$log', function ($delegate) {
                    var date = new Date();                   
                    // Keep track of the original debug method.
                    var origDebug = $delegate.debug;
                    var origInfo = $delegate.info;
                    var origError = $delegate.error;
                    $delegate.debug = function () {
                        var args = [].slice.call(arguments);
                        args[0] = ['[DEBUG]: ', new Date().toLocaleString(), ': ', args[0]].join('');

                        // Send on our enhanced message to the original debug method.
                        origDebug.apply(null, args);
                            //origDebug = enable;
                    };
                    $delegate.info = function () {
                        var args = [].slice.call(arguments);
                        args[0] = ['[INFO]: ', new Date().toLocaleString(), ': ', args[0]].join('');

                        // Send on our enhanced message to the original debug method.
                        origInfo.apply(null, args);
                    };
                    $delegate.error = function () {
                        var args = [].slice.call(arguments);
                        args[0] = ['[ERROR]: ', new Date().toLocaleString(), ': ', args[0]].join('');

                        // Send on our enhanced message to the original debug method.
                        origError.apply(null, args);
                    };

                    return $delegate;
                });
                $provide.decorator("$exceptionHandler",function ($delegate) {
                    return function (exception, cause) {
                        exception.message = "Some error has occured. Please try again, if error persist then please contact help desk: [" + exception.message + "]";
                        $delegate(exception, cause);
//                        $ngBootboxConfigProvider.$get().$ngBootbox.alert(exception.message);
                        alert(exception.message);
                    };
                });
                $stateProvider.state('dashboard', {
                      url: '/dashboard',
                      templateUrl:'views/dashboard.html',
                      controller:'DashboardCtrl'
                });
          }).run(function ($window,$state){
                function LogOut(){
//                    $state.go('signin');
                }
                $window.onbeforeunload = function () {
                        LogOut();
                };
          }).factory('$exceptionHandler',function ($log){
               return function (exception, cause) {
//                    $ngBootbox.alert(exception.message);
                    $log.error(exception, cause);
                };
          }).factory('AuthorizationService', function ($log, $q, $state) {
            return {
                permissionCheck: function (roleCollection) {
                    var deferred = $q.defer();
                    var ifPermissionPassed = false;
                    angular.forEach(roleCollection,function (role){
                        if (sessionService.getUserRole() === role) {
                            ifPermissionPassed = true;
                        }
                    });
                    if (!ifPermissionPassed) {
                            $log.debug("Resolved the state change watch");
                            alert("You are not authorised user to access this page !!");
                            deferred.reject();
                    } else {
                        deferred.resolve();
                    }
                    return deferred.promise;
                }
            };
        }).call(this);


