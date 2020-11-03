var app = angular.module('myApp',[]);

app.service('random',function(){
    var num = Math.floor(Math.random()*10);
    this.generate = function(){
        return num; 
    }
    return this;
})

app.controller('myctrl',function($scope, random){
    $scope.GenerateRandom = function(){
        console.log(random);
        $scope.randomNumber = random.generate();
       
    }
});