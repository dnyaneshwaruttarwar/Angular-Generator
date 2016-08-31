(function (){
    "use strict";
angular.module('app.common')
        .factory('stateService',stateService)
        .factory('dispatchRegionListService',dispatchRegionListService)
        .factory('countryService',countryService)
        .factory('countryListService',countryListService)
        .factory('facilityListService',facilityListService)
        .factory('bodypartModalityListService',bodypartModalityListService)
        .factory('modalityListService',modalityListService)
        .factory('logger',logger)
        .factory('confirmService',confirmService)
        .factory('payerListService',payerListService)
        .factory('cptCodeListService',cptCodeListService)
        .factory('affiliatesListService',affiliatesListService)
        .factory('examListService',examListService)
        .factory('bodypartListService',bodypartListService)
        .factory('rosQuestionListService',rosQuestionListService)
        .factory('technologistListService',technologistListService)
        .factory('commonService',commonService)
        .factory('CONSTANT',CONSTANT)
        .factory('NAVCONSTANT',NAVCONSTANT)
        .factory('MESSAGE',MESSAGE)
        .factory('GLOBAL',GLOBAL);

CONSTANT.$inject=[];
NAVCONSTANT.$inject=[];
stateService.$inject =['$resource','CONSTANT'];
dispatchRegionListService.$inject =['$resource','CONSTANT','$q'];
countryService.$inject =['$resource','$q','$log','CONSTANT'];
countryListService.$inject =['$resource','$q','$log','CONSTANT'];
logger.$inject =[];
confirmService.$inject =['$modal'];
payerListService.$inject=['$resource','CONSTANT','$q'];
cptCodeListService.$inject=['$resource','CONSTANT','$q'];
affiliatesListService.$inject=['$resource','CONSTANT','$q'];
examListService.$inject=['$resource','CONSTANT','$q'];
facilityListService.$inject=['$resource','CONSTANT'];
bodypartModalityListService.$inject=['$resource','CONSTANT'];
modalityListService.$inject =['$resource','CONSTANT'];
bodypartListService.$inject=['$resource','CONSTANT'];
rosQuestionListService.$inject=['$resource','CONSTANT'];
MESSAGE.$inject=[];
commonService.$inject=['CONSTANT'];
GLOBAL.$inject=['CONSTANT','tokenStorage'];
technologistListService.$inject=['$resource','CONSTANT'];

function CONSTANT(){
        var CONSTANT = {};

        CONSTANT.SERVICEURL = "http://10.235.11.75:9596/mobileris";
//        CONSTANT.SERVICEURL = "/mobileris";
        CONSTANT.SADMIN = "ROLE_SADMIN";
        CONSTANT.DCADMIN = "ROLE_DCADMIN";
        CONSTANT.DCOPERATOR = "ROLE_DCOPERATOR";
        CONSTANT.FACILITY = "ROLE_FACILITY";
        CONSTANT.TECHNOLOGIST = "ROLE_TECHNICIAN";
        CONSTANT.PATIENT = "ROLE_PATIENT";

        CONSTANT.ROLESFORTENANT =['ROLE_SADMIN'];
        CONSTANT.ROLESFORFACILITY =['ROLE_FACILITY'];
        CONSTANT.ROLESFORDCADMIN =['ROLE_DCADMIN'];
        CONSTANT.ROLESFORDCADMINANDOPERATOR = ['ROLE_SADMIN','ROLE_DCADMIN'];
        CONSTANT.ROLESFORSADMINDCADMINAN = ['ROLE_DCADMIN','ROLE_DCOPERATOR'];
        CONSTANT.ROLESFORDCADMINANDOPERATORFACILITY = ['ROLE_DCADMIN','ROLE_DCOPERATOR','ROLE_FACILITY'];
        CONSTANT.ROLESFORALLEXCEPTDCADMIN =['ROLE_DCOPERATOR','ROLE_TECHNICIAN','ROLE_FACILITY','ROLE_PATIENT'];
        CONSTANT.ROLESFORALLEXCEPTPATIENT =['ROLE_SADMIN','ROLE_DCOPERATOR','ROLE_TECHNICIAN','ROLE_FACILITY','ROLE_TECHNICIAN'];
        CONSTANT.ROLESFORDCADMINANDOPERATORTECHANICIAN = ['ROLE_DCADMIN','ROLE_DCOPERATOR','ROLE_TECHNICIAN'];

        CONSTANT.ACTIVATEFLAG = false;

        CONSTANT.YESNOVALUES =[{id:true,text:'Yes'},{id:false,text:'No'}];
        CONSTANT.ACTIVEINACTIVEVALUES =[{id:true,text:'Active'},{id:false,text:'Inactive'}];
        CONSTANT.GENDERVALUES =[{id:"Male",text:'Male'},{id:"Female",text:"Female"}];
        CONSTANT.MARITALVALUES =[{id:"Married",text:'Married'},{id:"Unmarried",text:"Unmarried"}];

        CONSTANT.ROLES =['ROLE_SADMIN','ROLE_DCADMIN','ROLE_DCOPERATOR','ROLE_TECHNICIAN','ROLE_PATIENT','ROLE_FACILITY'];

        CONSTANT.ROLE = [{roleType:1,roleName:'DC Admin'},{roleType:2,roleName:'DC Operator'}];

        CONSTANT.DISPLAYNAME = "Username";
        CONSTANT.PROFILEPATH = "images/default.jpg";

        //Provider constants
        CONSTANT.ORDERINGSTATUS = ['Ordering','Patient Centerderd Decision Support','Portability','Patient Safety Features','intutive Human Interface','Mangement','Billing'];
        CONSTANT.PROVIDERTYPE = ['Physician','Nurse','Refering Physician','Ordering Physican'];
        CONSTANT.NEWCORPERXROLE =['NewCrop Admin','NewCrop Nurse','NewCrop Manager','NewCrop Doctor','NewCrop Midlevel Prescriber,'];
        CONSTANT.TAXANOMYCODE=['Acupuncturist','Adult Companion','Advanced Practice Dental Therapist','Advanced Practice Midwife','Air Carrier','Allergy & Immunology','Ambulance','Anaplastologist'];

        //Payer constants
        CONSTANT.DEFAULTRATE =['Payer Allowed','Payer Pay','Patient Pay','My charges','Discounted Charges'];
        CONSTANT.IDENTIFICATION =['0B-State Licence','1A – Blue Cross Provider No','1B – Blue Sheild Provider No','1C – Medicare Provider No'];
        CONSTANT.CLEARINGHOUSE=['Navicure Inc','Pverify Inc'];
        CONSTANT.SUBMISSIONTYPE=['Individual','Batch'];
        CONSTANT.INSURANCETYPE=['Medicare','Medicaid','Long Term Policy','Auto Insurance Policy','HMO','Commercial Insurance Company','CHCS Commercial','CHCS Employer group','Individual Policy','Campus Supplement'];
        CONSTANT.CLAIMTYPE=['Liability','Liability Insurance','Managed Dental','Madicare Part A','Madicare Part B','Madicare Part C','Madicare Part D'];

        //Facility constants
        CONSTANT.POSCODE =['Unassigned','School','Homeless Shelter','Indian Health Service','Tribal 638 Free','Office','Assisted Living Facility'];

       return CONSTANT;
    };

    function NAVCONSTANT(){
        var NAVCONSTANT = {};

        NAVCONSTANT.PATIENTID = null;
        NAVCONSTANT.REQUISITIONLIST = true;
        NAVCONSTANT.PROVIDERLIST=true;
        return NAVCONSTANT;
    };

function countryService($resource,$q,$log,CONSTANT){
        var countries =[];
        var countryUrl = $resource(CONSTANT.SERVICEURL + '/api/list/countries');

        return {
            countries:countries,
            getCountries: getCountries,
            setCountries: setCountries

        };

        function getCountries(){
            return countries;
        }
        function setCountries(){
            var deferred = $q.defer();
            countryUrl.query(function (data){
                $log.debug("inside service layer cntry ");
                countries = data;
                deferred.resolve(data);
            },
            function (error){
                deferred.reject("Server responded with " + error);
                alert(error.status);
            });
            return deferred.promise;
        }
};

function countryListService($resource,$q,$log,CONSTANT){
        var countries =null;
        var countryUrl = $resource(CONSTANT.SERVICEURL + '/api/list/countries');

        return {
            countries:countries,
            setCountries: setCountries

        };
        function setCountries(){
            var deferred = $q.defer();
            if(countries !== null)
            {
                console.log("inside service layer dispatch region 1 ");
                deferred.resolve(countries);
            }else{
                countryUrl.query(function (data){
                $log.debug("inside service layer cntry ");
                countries = data;
                deferred.resolve(data);
                },
                function (error){
                    deferred.reject("Server responded with " + error);
                    alert(error.status);
                });
            }
            return deferred.promise;
        }
};

function stateService($resource,CONSTANT){
    return $resource(CONSTANT.SERVICEURL + '/api/list/states/:country_id',{country_id:'@country_id'},{
        update:{
             method: 'PUT'
        }
    });

};

function dispatchRegionListService($resource,CONSTANT,$q){
        var dispatchRegionList = null;
        var dispatchRegionUrl = $resource(CONSTANT.SERVICEURL + '/api/list/dispatch-regions');

        return {
            setDispatchRegions:setDispatchRegions,
            dispatchRegionList :dispatchRegionList
        };
        function setDispatchRegions(){
            var deferred = $q.defer();
            if(dispatchRegionList !== null)
            {
                deferred.resolve(dispatchRegionList);
            }else {
                dispatchRegionUrl.query().$promise.then(function (data){
                    dispatchRegionList = data;
                    deferred.resolve(data);
                }).catch(function (error){
                    alert(error.status);
                    deferred.reject();
                });
            }
           return deferred.promise;
        }
    };

    function confirmService($modal){
        var confirmFlag =false;
         return{
             isConfirmed:isConfirmed,
             confirmFlag:confirmFlag
         };
         function isConfirmed(){
            var modalInstance;
            confirmFlag = false;
            return confirmFlag;
         }
    };

    function facilityListService($resource,CONSTANT){
        return $resource(CONSTANT.SERVICEURL + '/api/list/facilities',{},{
            getFacility:{
                method:'GET',
                isArray:true
            }
        });
    };

    function technologistListService($resource,CONSTANT){
        return $resource(CONSTANT.SERVICEURL + '/api/list/technologist',{},{
            update:{
                method:'PUT'
            }
        });
    };

    function rosQuestionListService($resource,CONSTANT){
        return $resource(CONSTANT.SERVICEURL + '/api/list/rosQuestionAnswersByROSGroup/:reviewofSystemGroupId',{reviewofSystemGroupId:'@reviewofSystemGroupId'},{
            update:{
                method:'PUT'
            }
        });
    };

    function bodypartModalityListService($resource,CONSTANT){
        return $resource(CONSTANT.SERVICEURL + '/api/list/modalitiesByBodyPart/:bodyPartId',{bodyPartId:'@bodyPartId'},{
            getModalitiesByBodypart:{
                method:'GET',
                isArray:true
            }
        });
    };

    function bodypartListService($resource,CONSTANT){
        return $resource(CONSTANT.SERVICEURL + '/api/getBodyParts/:modalityId',{modalityId:'@modalityId'},{
            getBodypartsByModality:{
                method:'GET',
                isArray:true
            }
        });
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

    function modalityListService($resource,CONSTANT){
        return $resource(CONSTANT.SERVICEURL + '/api/list/modalities',{},{
            getModalities:{
                method:'GET',
                isArray:true
            }
        });
    };

    function payerListService($resource,CONSTANT,$q){
        var payerList =null;
        var payerUrl = $resource(CONSTANT.SERVICEURL + '/api/list/payers');

        return {
            getPayers:getPayers,
            payerList :payerList
        };
        function getPayers(){
            var deferred = $q.defer();
            if(payerList !== null)
            {
                deferred.resolve(payerList);
            }else {
                payerUrl.query().$promise.then(function (data){
                    payerList = data;
                    deferred.resolve(data);
                }).catch(function (error){
                    alert(error.status);
                    deferred.reject();
                });
            }
           return deferred.promise;
        }
    };

    function cptCodeListService($resource,CONSTANT,$q){
        var cptCodeList =null;
        var cptCodeUrl = $resource(CONSTANT.SERVICEURL + '/api/list/cptcode');

        return {
            getCptCode:getCptCode,
            cptCodeList :cptCodeList
        };
        function getCptCode(){
            var deferred = $q.defer();
            if(cptCodeList !== null)
            {
                deferred.resolve(cptCodeList);
            }else {
                cptCodeUrl.query().$promise.then(function (data){
                    cptCodeList = data;
                    deferred.resolve(data);
                }).catch(function (error){
                    alert(error.status);
                    deferred.reject();
                });
            }
           return deferred.promise;
        }
    };

    function affiliatesListService($resource,CONSTANT,$q){

        var affiliateList = null;
        var affiliateUrl = $resource(CONSTANT.SERVICEURL + '/api/list/affiliates');

        return {
            getAffiliate:getAffiliate,
            affiliateList :affiliateList
        };
        function getAffiliate(){
            var deferred = $q.defer();
            if(affiliateList !== null)
            {
                deferred.resolve(affiliateList);
            }else {
                affiliateUrl.query().$promise.then(function (data){
                    affiliateList = data;
                    deferred.resolve(data);
                }).catch(function (error){
                    alert(error.status);
                    deferred.reject();
                });
            }
           return deferred.promise;
        }
    };

    function examListService($resource,CONSTANT,$q){
        var examList = null;
        var examUrl = $resource(CONSTANT.SERVICEURL + '/api/list/exams');

        return {
            getExam:getExam,
            examList :examList
        };
        function getExam(){
            var deferred = $q.defer();
            if(examList !== null)
            {
                deferred.resolve(examList);
            }else {
                examUrl.query().$promise.then(function (data){
                    examList = data;
                    deferred.resolve(data);
                }).catch(function (error){
                    alert(error.status);
                    deferred.reject();
                });
            }
           return deferred.promise;
        }
    };

    function commonService(CONSTANT){
        var common = {};
        common.CalculateAge = function (date){
            var age = null;
            var ageDifMs = Date.now() - new Date(date);
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            age = Math.abs(ageDate.getUTCFullYear() - 1970);
            return age;
        };

        return common;
    };

    function MESSAGE()
    {
       var MESSAGE={};
       MESSAGE.REQUIRED ="is required";
       MESSAGE.NUMBER="should be number only";
       MESSAGE.TEXT="should be text only";
       MESSAGE.COUNTRY="Please select country";
       MESSAGE.FACILITY="Please select facility";
       MESSAGE.CONTACT="Please select contact";
       MESSAGE.MODALITY="Please select modality";
       MESSAGE.GROUP="Please select group";
       MESSAGE.PATIENT_AT="Please select patient at";
       MESSAGE.BILL_TO="Please select bill to";
       MESSAGE.REQUIRED_CHECK="Please fill the required fields";
       MESSAGE.ADD_SUCCESS="Record successfully added";
       MESSAGE.UPDATE_SUCCESS="Record successfully updated";
       MESSAGE.DELETE_SUCCESS="Record successfully deleted";
       MESSAGE.MASTERDATA="Please select masterdata";
       return MESSAGE;
    };

    function GLOBAL(CONSTANT,tokenStorage)
    {
        var GLOBAL={};
        var userId = null;
        GLOBAL.LOGO = CONSTANT.SERVICEURL + "/app/Resources/MobileRIS_Files/Tenent_1/Tenent_Logos/logo.png";
        GLOBAL.TENANTNAME = "mobileris_mirth";
        GLOBAL.USERID = function (){
            if(userId !== null){

            }else{
                var userFromToken = JSON.parse(atob(tokenStorage.retrive().split('.')[0]));
                userId = userFromToken.id;
            }
            return userId;
        };
        return GLOBAL;
    };
})();
