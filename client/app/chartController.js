var chart = angular.module('chartController', [])

chart.controller('chartController', chartController);

function chartController($scope) {
  $scope.data = {
    p1: 12,
    p2: 15
  };
}