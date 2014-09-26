'use strict';

angular.module('jazoon2014Session198App')
  .controller('DcCtrl', function ($scope) {
    mixpanel.track("DC example");

    $scope.message = 'Hello';
  });
