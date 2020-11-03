var app = angular.module('myApp',[]);

app.service('myservice',function(){
    this.message = "Hello greetings from service!";
    return this.message;
});

app.factory('myfactory',function(){
    var fact = {};
    var message = "hello gretting from factory!";
    fact.greet = function(){
        return message;
    }
    return fact;
})

app.provider('myprovider',function(){
    var message = "Bonjour! Greetings from provider";
    return{
        setname:function(name){
            message += " to " + name;
        },
        $get:function(){
            return{
                showMessage: message
            }

        }
    }
})

var name=window.prompt("type name");
app.config(function(myproviderProvider){
    
    myproviderProvider.setname(name);
})

app.controller('myctrl', function($scope, myservice, myprovider, myfactory){
     $scope.GreetMessage = [myservice.message,myprovider.showMessage,myfactory.greet()]
});