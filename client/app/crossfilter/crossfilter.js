'use strict';

angular.module('jazoon2014Session198App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('crossfilter', {
        url: '/crossfilter',
        templateUrl: 'app/crossfilter/crossfilter.html',
        controller: 'CrossfilterCtrl'
      });
  });