(function() {
  'use strict';
  angular.module('app.directives', []).directive('zcConfirmClick', ['$log',
        function($log){
            return {
                priority: 1,
                terminal: true,
                link: function (scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Are you sure you want to delete this record?";
                    var clickAction = attr.ngClick;
                    element.bind('click',function (event) {
                        if ( window.confirm(msg) ) {
                            scope.$eval(clickAction);
                        }
                    });
                }
            };
    }])

}).call(this);
