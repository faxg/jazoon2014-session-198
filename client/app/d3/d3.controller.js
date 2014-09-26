'use strict';

angular.module('jazoon2014Session198App')
  .controller('D3Ctrl', function ($scope) {
    mixpanel.track("D3 example");

    $scope.message = 'Hello';
  });
