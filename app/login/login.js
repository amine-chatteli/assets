app.controller('LoginController', function ($scope, $location, AuthService) {
  $scope.login = function () {
    if ($scope.username === 'admin' && $scope.password === 'admin') {
      AuthService.login($scope.username)
      $location.path('/home');
    } else {
      alert('Invalid credentials');
    }
  };
});
