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

function portfolioController($scope, $http, ngDialog) {
  $scope.data = {};
  $scope.data.capital = 10000;
  $scope.investSplit = [60, 40];
  $scope.pieLabels = ['Stocks', 'Bonds'];

  $scope.labels = [2016, 2017, 2018, 2019, 2020];
  $scope.series = ['Stocks', 'Bonds'];
  $scope.data = [
    [6000, 6000 * 1.06 , 6000 * 1.06 * 1.06, 6000 * Math.pow(1.06, 3), 6000 * Math.pow(1.06, 4), 6000 * Math.pow(1.06, 5), 6000 * Math.pow(1.06, 6)],
    [4000, 4000 * 1.03 , 4000 * 1.03 * 1.03, 4000 * Math.pow(1.03, 3), 4000 * Math.pow(1.03, 4), 4000 * Math.pow(1.03, 5), 4000 * Math.pow(1.03, 6)]
  ];

  $scope.changeRisk = function(selectRisk) {
    console.log(selectRisk);
    if (selectRisk === 'high') {
      this.portfolio.stocks.total = 70;
      this.portfolio.bonds.total = 30;
    } else if (selectRisk === 'medium') {
      this.portfolio.stocks.total = 55;
      this.portfolio.bonds.total = 45;
    } else if (selectRisk === 'low') {
      this.portfolio.stocks.total = 35;
      this.portfolio.bonds.total = 65;
    }
  }

  $scope.fetch = function() {
    return $http({
      method: 'GET',
      url: '/fetch',
    })
    .then(function(res) {
      $scope.data.portfolios = res.data;
      return res;
    })
  }();

  $scope.save = function(portfolio) {
    return $http({
      method: 'POST',
      url: '/save',
      data: portfolio
    })
    .then(function(res) {
      console.log('Portfolio sent', portfolio);
      return res;
    });
  };

  $scope.sendMail = function(portfolio) {
    return $http({
      method: 'POST',
      url: '/send',
      data: portfolio
    })
    .then(function(res) {
      console.log('E-Mail data send to server');
      return res;
    })
  };

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

  $scope.openPopup = function(portfolio) {
    $scope.portfolio = portfolio;
    ngDialog.open({
      template: 'app/savePopup.html',
      controller: 'portfolioController',
      className: 'ngdialog-theme-default',
      scope: $scope
    });
  };

  $scope.slider = {
  options: {
    floor: 0,
    ceil: 100
  }
};
}