var app = angular.module("luxis",[]);

app.controller("FirstCtrl",function($scope){

    $scope.array=[
        {
            "name" : "Danny" ,
            "age"  : 26 ,
            "debe" : 500
        },
        {
            "name" : "Andrey",
            "age"  : 21,
            "debe" : 500
        },
        {
            "name" : "Deyby",
            "age"  : 21,
            "debe" : 500
        },
        {
            "name" : "Javier",
            "age"  : 21,
            "debe" : 500
        }
    ]

    $scope.doSomething = function(){
        $scope.array.push($scope.persona);
        $scope.persona=null;
    }

    $scope.eliminar = function($index){
        alert($index);
        $scope.array.splice($index,1);
    }

})