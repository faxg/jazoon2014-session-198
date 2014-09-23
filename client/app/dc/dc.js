'use strict';

angular.module('jazoon2014Session198App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dc', {
        url: '/dc',
        templateUrl: 'app/dc/dc.html',
        controller: 'DcCtrl'
      });
  });