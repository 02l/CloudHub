var app = angular.module('app', ['ngRoute', 'ngMaterial', 'ngMessages'])

    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/home.html',
                controller: 'indexController'
            })
            .otherwise( { redirectTo: '/' } )
    })

    app.controller('AppCtrl', function($scope) {
        var imagePath = 'img/list/60.jpeg';

        var submitToDb = function() {

        }

        $scope.listData = function() {
            $scope.todos = [];
            for (var i = 0; i < 15; i++) {
                $scope.todos.push({
                face: imagePath,
                what: "Brunch this weekend?",
                who: "Min Li Chan",
                notes: "I'll be in your neighborhood doing errands."
                });
            }
        }



        $scope.project = {
            description: '',
            rate: ''
        }
    });

    app.controller ('indexController', function() {

    })

    app.factory('dataSend', function($http) {
        
    })