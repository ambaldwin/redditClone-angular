//this is what should be on this page from pirates
var app = angular.module('reddit', ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/allposts.html',
        controller: 'mainController'
      })
      .when('/signup', {
        templateUrl: '../views/signup.html',
        controller: 'signUpController'
      })
      .when('/login', {
        templateUrl: '../views/login.html',
        controller: 'signUpController'
      })
});
