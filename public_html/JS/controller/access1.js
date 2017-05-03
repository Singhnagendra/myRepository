/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('tutorialCtrlModule',[])
        .controller("TutorialCtrl",['$scope', "calculation", function($scope, calculation){
         $scope.tutorialObject = {};
        $scope.tutorialObject.title="Main Page";
        $scope.tutorialObject.subtitle="Sub name";
        $scope.tutorialObject.bindOutput=2;
        
        $scope.tutorialObject.firstName = "Bruce ";
        $scope.tutorialObject.secondName= "Wayne";
        
        $scope.doubleit= function(){
            $scope.tutorialObject.bindOutput = calculation.doubleit($scope.tutorialObject.bindOutput);
        };
   

}])


        .factory("calculation", function(){
            var calculation= {};
            calculation.doubleit = function(a){
                return a*2;
            };
             return calculation;      
                    
        })
//.directive("tbfirstDirective", function() {
//  return {
//    restrict: "E",
//    template: "<div>Hi How are you</div>"
//  };
//})
//



 .controller("TutorialCtrl2", ["$scope", function($scope){
         
         $scope.secondtutorial = "welcome to next tutorial";
 }]);
