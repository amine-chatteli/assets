app.directive('navbar', function () {
  return {
    restrict: 'E',
    templateUrl: 'navbar/navbar.html',
    controller: 'NavbarController'
  };
});

app.controller('NavbarController', function ($scope, $location, AuthService) {
  const currentUser = localStorage.getItem('currentUser');
  $scope.username = currentUser;
  $scope.currentPage = 'directory';
  $scope.navigateTo = function (page) {
    $scope.currentPage = page;
  };
  $scope.logout = function () {
    AuthService.logout();
    $location.path('/login');
  }
  
});