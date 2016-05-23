var app = angular.module('investApp', [
  'portfolioController',
  'ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/portfolio1');

  $stateProvider
    .state('p1', {
      url: '/portfolio1',
      templateUrl: 'app/portfolio.html',
      controller: 'portfolioController'
    })
});

