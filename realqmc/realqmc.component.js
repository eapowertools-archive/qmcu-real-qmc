(function()
{
    "use strict";
    var module = angular.module("QMCUtilities",[]);


    function realQMCController($scope, $http, $sce, qmcuWindowLocationService)
     {
         console.log("realQMC from controller");
         console.log(qmcuWindowLocationService)
        var model =this;
        model.host="";
        model.proxyPath = "";
        model.qmcUrl ="";
        model.$onInit = function()
        {
        model.host = qmcuWindowLocationService.host;
        model.proxyPath = qmcuWindowLocationService.virtualProxyPath;
        model.qmcUrl = $sce.trustAsResourceUrl("https://" + model.host + (model.proxyPath.length >0 ? model.proxyPath : "") + "/qmc");
        console.log(model.qmcUrl);

        }
        
    }

    module.component("realQmc",{
        transclude: true,
        templateUrl: "plugins/realqmc/real-qmc-body.html",
        controllerAs: "model",
        controller: ["$scope", "$http", "$sce", "qmcuWindowLocationService", realQMCController]
    });
}());