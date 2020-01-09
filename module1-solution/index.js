(function (){
'use strict';
angular.module('LunchApp',[])

.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];

function LunchController($scope){
    $scope.item="";
    $scope.items1="";

    $scope.ShowItems = function(){
        
        $scope.items1= calculateItems($scope.item);
    }
}
function calculateItems(string){
    
    var totalItems=string.split(",");
    totalItems = totalItems.filter(Boolean);
    var len=totalItems.length;
    if(len==0){
        return "Please Enter Data First"
    }
    else if (len<=3){
        return "Enjoy!"
    }
    else{
        return "Too much!"
    }
}

})();