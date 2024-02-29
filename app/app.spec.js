'use strict';

describe('myApp module', function() {

  beforeEach(module('app'));

  var $controller, $rootScope;

  beforeEach(inject(function(_$controller_, _$rootScope_){
    $controller = _$controller_;
    $rootScope = _$rootScope_;
  }));

  it('should ....', inject(function() {
    var $scope = $rootScope.$new();
    const MainController = $controller('MainController', { $scope: $scope });
    expect(MainController).toBeDefined();
  }));

  it('should set credentials on login', function() {
    var $scope = $rootScope.$new();
    var controller = $controller('LoginController', { $scope: $scope });

    $scope.username = 'testuser';
    $scope.password = 'testpassword';
    $scope.login();

    expect(authService.getCredentials()).toEqual({ username: 'testuser', password: 'testpassword' });
  });
});


