var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/login/login.html',
      controller: 'LoginController'
    })
    .when('/home', {
      templateUrl: '/home/home.html',
      controller: 'HomeController',
      resolve: {
        auth: function ($q, $location, AuthService) {
          if (!AuthService.isAuthenticated()) {
            $location.path('/login');
            return $q.reject("Not Authorized");
          }
        }
      }
    })
    .when('/directory', {
      template: '<directory></directory>'
    })
    .when('/manager', {
      template: '<manager></manager>'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.controller('MainController', function ($scope, $http) {
  $http.get('/data/data.json').then(function (response) {
    if (!localStorage.getItem('employees')) {
      localStorage.setItem('employees', JSON.stringify(response.data));
    }
  }).catch(err => console.log(err))
});

app.service('AuthService', function () {

  this.login = function (username) {
    return localStorage.setItem('currentUser', username)
  }
  this.isAuthenticated = function () {
    return localStorage.getItem('currentUser')
  }
  this.logout = function () {
    return localStorage.removeItem('currentUser')
  }

});
