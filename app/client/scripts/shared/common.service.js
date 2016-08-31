(function (){
    "use strict";
angular.module('app.common')
        .factory('CONSTANT',CONSTANT)
        .factory('MESSAGE',MESSAGE)
		.factory('logger',logger)
        .factory('GLOBAL',GLOBAL);

CONSTANT.$inject=[];
MESSAGE.$inject=[];
logger.$inject =[];
GLOBAL.$inject=['CONSTANT','tokenStorage'];

	function CONSTANT(){
        var CONSTANT = {};

        CONSTANT.SERVICEURL = "/app_name";

        CONSTANT.DISPLAYNAME = "Username";
        CONSTANT.PROFILEPATH = "images/default.jpg";

       return CONSTANT;
    };
	
	function logger (){
        var logIt;
        toastr.options = {
            "closeButton": true,
            "positionClass": "toast-top-right",
            "timeOut": "3000"
        };
        logIt = function(message, type) {
          return toastr[type](message);
        };
        return {
            logInfo: function(message) {
              logIt(message, 'info');
            },
            logWarning: function(message) {
              logIt(message, 'warning');
            },
            logSuccess: function(message) {
              logIt(message, 'success');
            },
            logError: function(message) {
              logIt(message, 'error');
            }
        };
    };
	
	function MESSAGE()
    {
       var MESSAGE={};
       MESSAGE.REQUIRED ="is required";
       return MESSAGE;
    };

    function GLOBAL(CONSTANT,tokenStorage)
    {
        var GLOBAL={};
        GLOBAL.LOGO = "images/logo.jpg";
        return GLOBAL;
    };

})();
