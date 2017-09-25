(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.food = "";
    $scope.msg = "Please enter data first!";

    $scope.myFood = function () {
      
    }
  }
})();
