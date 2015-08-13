'use strict';

/**
 * @ngdoc directive
 * @name angularNotesApp.directive:focus
 * @description
 * # focus
 */
angular.module('angularNotesApp')
  .directive('focus', function ($timeout) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        if (attrs.focus) {
          scope.$watch(attrs.focus, function (newVal) {
            if (newVal) {
              $timeout(function () {
                element.focus();
              });
            }
          }, 0);
        }
      }
    };
  });
