'use strict';

angular.module('jazoon2014Session198App')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'Slides',
      'link': '/slides'
    },
    {
      'title': 'D3 demo',
      'link': '/d3'
    },
    {
      'title': 'Crossfilter demo',
      'link': '/crossfilter'
    },
    {
      'title': 'dc.js demo',
      'link': '/dc'
    }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
