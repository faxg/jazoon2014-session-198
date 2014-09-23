'use strict';

describe('Controller: DcCtrl', function () {

  // load the controller's module
  beforeEach(module('jazoon2014Session198App'));

  var DcCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DcCtrl = $controller('DcCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
