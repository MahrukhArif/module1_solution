(function(){
    'use strict';
   angular.module('myApp',[])
 .controller('myAppController',function($scope){
   $scope.name="";
   $scope.comment="";


    $scope.writeLine=function()
    {
         var str=$scope.name;
         var str2=str.split(',');
         if(str2=="")
         {
            $scope.comment="please enter data first ";

         }
         else if(str2.length<=3)
         {
            $scope.comment="enjoy!";

         }
         else if(str2.length>3)
         {
            $scope.comment="Too much!";

         }


    };
 })
})();