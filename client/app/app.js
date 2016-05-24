var app = angular.module('investApp', [
  'portfolioController',
  'ui.router',
  'rzModule',
  'ngDialog']);

app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/portfolio1');

  $stateProvider
    .state('p1', {
      url: '/portfolio1',
      templateUrl: 'app/portfolio.html',
      controller: 'portfolioController'
    })
    .state('p1.charts', {
      url: '/portfolio1',
      templateUrl: 'app/portfolio.html',
      controller: 'portfolioController'
    })
    .state('p2', {
      url: '/portfolio2',
      templateUrl: 'app/portfolio.html',
      controller: 'portfolioController'
    })
    .state('p2.charts', {
      url: '/portfolio2',
      templateUrl: 'app/portfolio.html',
      controller: 'portfolioController'
    })
});

