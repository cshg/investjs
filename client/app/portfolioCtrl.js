var portfolio = angular.module('portfolioController', ['chart.js'])

portfolio.config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      responsive: false,
      datasetFill: true
    });
    // Configure all line charts
    ChartJsProvider.setOptions('Line', {
      datasetFill: true
    });
  }]);

portfolio.controller('portfolioController', portfolioController);

function portfolioController($scope, $http) {
  $scope.stocks = 60;
  $scope.bonds = 100 - $scope.stocks;

  $scope.pieData = [$scope.stocks, $scope.bonds];
  $scope.pieLabels = ['Stocks', 'Bonds'];

  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [$scope.stocks, 59, 80, 81, 56, 55, 40],
    [$scope.bonds, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

  $scope.save = function(stocks, bonds) {
    var portfolio = {
      stocks: stocks,
      bonds: bonds
    }
    return $http({
      method: 'POST',
      url: '/save',
      data: portfolio
    })
    .then(function(res) {
      console.log('Portfolio sent', portfolio);
      return res;
    });
  }
}