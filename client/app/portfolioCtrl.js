var portfolio = angular.module('portfolioController', ['chart.js'])

portfolio.config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      // responsive: false,
      datasetFill: true
    });
    // Configure all line charts
    ChartJsProvider.setOptions('Line', {
      datasetFill: true
    });
  }]);

portfolio.controller('portfolioController', portfolioController);

function portfolioController($scope, $http) {
  $scope.capital = 10000;
  $scope.investSplit = [60, 40];
  $scope.pieLabels = ['Stocks', 'Bonds'];

  $scope.labels = [2016, 2017, 2018, 2019, 2020];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [$scope.investSplit[0], 59, 80, 81, 56, 55, 40],
    [$scope.investSplit[1], 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

  $scope.save = function(investSplit) {
    var portfolio = {
      stocks: investSplit[0],
      bonds: investSplit[1]
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