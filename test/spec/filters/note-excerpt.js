'use strict';

describe('Filter: noteExcerpt', function () {

  // load the filter's module
  beforeEach(module('angularNotesApp'));

  // initialize a new instance of the filter before each test
  var noteExcerpt;
  beforeEach(inject(function ($filter) {
    noteExcerpt = $filter('noteExcerpt');
  }));

  it('should return the same text when the input does not exceed the limit', function () {
    var text = '1234567890';
    expect(noteExcerpt(text, 20)).toBe('1234567890');
  });

  it('should return the first line of the input', function () {
    var text = 'abcd\n1234567890';
    expect(noteExcerpt(text, 20)).toBe('abcd');
  });

  it('should return the first line of the input and ellipsis if it exceeds the limit', function () {
    var text = 'abcd\n1234567890';
    expect(noteExcerpt(text, 2)).toBe('ab...');
  });

});
