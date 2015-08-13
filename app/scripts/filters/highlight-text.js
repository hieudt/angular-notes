'use strict';

/**
 * @ngdoc filter
 * @name angularNotesApp.filter:highlightText
 * @function
 * @description
 * # highlightText
 * Filter in the angularNotesApp.
 */
angular.module('angularNotesApp')
  .filter('highlightText', function ($sce) {
    return function (text, phrase) {
      if (text) {
        if (phrase) {
          text = text.replace(new RegExp('(' + phrase + ')', 'gi'), '<span class="highlighted">$1</span>');
        }
        return $sce.trustAsHtml(text)
      }
      return text;
    };
  });
