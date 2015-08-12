'use strict';

/**
 * @ngdoc filter
 * @name angularNotesApp.filter:noteExcerpt
 * @function
 * @description
 * # noteExcerpt
 * Returns an excerpt of a note (use first line if found)
 */
angular.module('angularNotesApp')
  .filter('noteExcerpt', function ($filter) {
    return function (input, limit) {
      if (input) {
        var firstLine = input.split('\n')[0];
        var result = $filter('limitTo')(firstLine, limit);
        return firstLine.length > limit ? result + '...' : result;
      }
      return input;
    };
  });
