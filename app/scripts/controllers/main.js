'use strict';

/**
 * @ngdoc function
 * @name angularNotesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularNotesApp
 */
angular.module('angularNotesApp')
  .controller('MainCtrl', function ($scope, NoteService) {
    $scope.notes = NoteService.findAll();
    $scope.search = {keyword: ''};
    $scope.selectedNote = $scope.notes[0] || {};
    $scope.editMode = false;
    $scope.setEditMode = setEditMode;
    $scope.selectNote = selectNote;
    $scope.saveOrUpdateNote = saveOrUpdateNote;

    function setEditMode(value) {
      $scope.editMode = value;
    }

    function selectNote(note) {
      $scope.selectedNote = note;
      setEditMode(false);
    }

    function saveOrUpdateNote(note) {
      $scope.selectedNote = NoteService.saveOrUpdate(note);
      $scope.notes = NoteService.findAll();
      setEditMode(false);
    }
  });
