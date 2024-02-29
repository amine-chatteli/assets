app.component('directory', {
  templateUrl: 'directory/directory.html',
  controller: 'directoryController'
});

app.controller('directoryController', function ($scope, $http) {
  $scope.showModal = false;
  $scope.showDelete = false;
  $scope.idToDelete;
  $scope.newEmployee = {};
  $scope.employees = JSON.parse(localStorage.getItem('employees')) || [];

  $http.get('data/companies.json').then(function (response) {
    $scope.companies = response.data;
  });
  $http.get('data/departments.json').then(function (response) {
    $scope.departments = response.data;
  });

  $scope.toggleModal = function () {
    $scope.showModal = !$scope.showModal;
    $('#addNewEmp').modal('show');
  };

  $scope.prepareDelete = function (index) {
    console.log(index);
    $scope.showDelete = true;
    $scope.idToDelete = index;
  };

  $scope.delete = function () {
    $scope.employees.splice($scope.idToDelete, 1);
    $scope.showDelete = false;
    localStorage.setItem('employees', JSON.stringify($scope.employees));
    console.log($scope.employees);
  };

  $scope.addEmployee = function () {
    console.log('Adding employee:', $scope.newEmployee, $scope.employees);
    $scope.employees.push($scope.newEmployee);
    localStorage.setItem('employees', JSON.stringify($scope.employees));
    $scope.newEmployee = {};
    $('#addNewEmp').modal('hide');
  };

});
