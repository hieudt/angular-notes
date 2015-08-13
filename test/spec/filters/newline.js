'use strict';

describe('Filter: newLine', function () {

  // load the filter's module
  beforeEach(module('angularNotesApp'));

  // initialize a new instance of the filter before each test
  var newLine;
  beforeEach(inject(function ($filter) {
    newLine = $filter('newLine');
  }));

});
