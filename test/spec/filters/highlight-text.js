'use strict';

describe('Filter: highlightText', function () {

  // load the filter's module
  beforeEach(module('angularNotesApp'));

  // initialize a new instance of the filter before each test
  var highlightText;
  beforeEach(inject(function ($filter) {
    highlightText = $filter('highlightText');
  }));

  it('should return the input prefixed with "highlightText filter:"', function () {
    var text = 'angularjs';
    expect(highlightText(text)).toBe('highlightText filter: ' + text);
  });

});
