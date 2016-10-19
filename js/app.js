var app= angular.module("movieApp",['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/show', {
        templateUrl: 'partials/show.html',
        controller: 'ShowController'
      })
});
