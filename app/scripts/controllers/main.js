'use strict';

/**
 * @ngdoc function
 * @name angularNotesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularNotesApp
 */
angular.module('angularNotesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.notes = [];
    $scope.search = {keyword: ''};
    $scope.selectedNote = $scope.notes[0];
    $scope.editMode = false;
    $scope.selectNote = selectNote;
    $scope.enableEditMode = enableEditMode;

    function selectNote(note) {
      $scope.selectedNote = note;
      $scope.editMode = false;
    }

    function enableEditMode() {
      $scope.editMode = true;
    }
  });
