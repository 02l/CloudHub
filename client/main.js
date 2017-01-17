var app = angular.module('app', ['ngRoute', 'ngMaterial'])

    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/home.html',
                controller: 'indexController'
            })
            .otherwise( { redirectTo: '/' } )
    })

    .controller('TitleController', function($scope) {
        $scope.title = 'CloudHub';
    })

    .controller('AppCtrl', function($scope) {
        var imagePath = 'img/list/60.jpeg';

        $scope.todos = [];
        for (var i = 0; i < 15; i++) {
            $scope.todos.push({
            face: imagePath,
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            notes: "I'll be in your neighborhood doing errands."
            });
        }
    });

    app.controller ('indexController', function() {

    })