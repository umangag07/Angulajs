var app = angular.module('myApp',[]);

app.factory('random',function(){
    var randomObject = {};
    var num = Math.floor(Math.random()*10);
    randomObject.generate = function(){
        return num; 
    }
    return randomObject;
})

app.controller('myctrl',function($scope, random){
    $scope.GenerateRandom = function(){
        console.log(random);
        $scope.randomNumber = random.generate();
       
    }
});