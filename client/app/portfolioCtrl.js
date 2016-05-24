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
  $scope.data = {};
  $scope.data.capital = 10000;
  $scope.investSplit = [60, 40];
  $scope.pieLabels = ['Stocks', 'Bonds'];

  $scope.labels = [2016, 2017, 2018, 2019, 2020];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [6000, 6000 * 1.06 , 6000 * 1.06 * 1.06, 6000 * Math.pow(1.06, 3), 6000 * Math.pow(1.06, 4), 6000 * Math.pow(1.06, 5), 6000 * Math.pow(1.06, 6)],
    [4000, 4000 * 1.03 , 4000 * 1.03 * 1.03, 4000 * Math.pow(1.03, 3), 4000 * Math.pow(1.03, 4), 4000 * Math.pow(1.03, 5), 4000 * Math.pow(1.03, 6)]
  ];

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
  },

  $scope.fetch = function() {
    return $http({
      method: 'GET',
      url: '/fetch',
    })
    .then(function(res) {
      $scope.data.portfolios = res.data;
      $scope.data;
      return res;
    })
  }();

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
}