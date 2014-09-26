'use strict';

describe('Controller: CrossfilterCtrl', function () {

  // load the controller's module
  beforeEach(module('jazoon2014Session198App'));

  var CrossfilterCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CrossfilterCtrl = $controller('CrossfilterCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
