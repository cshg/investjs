var app = angular.module('investApp', [
  'chartController',
  'ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/chart');
  console.log($stateProvider);

  $stateProvider
    .state('chart', {
      url: '/chart',
      templateUrl: 'app/chart.html',
      controller: 'chartController'
    })
});

