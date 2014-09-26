'use strict';

angular.module('jazoon2014Session198App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('d3', {
        url: '/d3',
        templateUrl: 'app/d3/d3.html',
        controller: 'D3Ctrl'
      });
  });