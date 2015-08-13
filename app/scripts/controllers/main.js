'use strict';

/**
 * @ngdoc function
 * @name angularNotesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularNotesApp
 */
angular.module('angularNotesApp')
  .controller('MainCtrl', function ($scope, $filter, Note, NoteService) {
    $scope.notes = NoteService.findAll();
    $scope.search = {keyword: ''};
    $scope.selectedNote = $scope.notes[0] || {};
    $scope.editingNote = null;
    $scope.editMode = false;
    $scope.setEditMode = setEditMode;
    $scope.selectNote = selectNote;
    $scope.saveOrUpdateNote = saveOrUpdateNote;
    $scope.deleteNote = deleteNote;
    $scope.createNote = createNote;

    $scope.$watch('editMode', function (newVal) {
      if (newVal) {
        $scope.editingNote = angular.copy($scope.selectedNote);
      }
    });

    function setEditMode(value) {
      $scope.editMode = value;
    }

    function selectNote(note) {
      $scope.selectedNote = note;
      setEditMode(false);
    }

    function saveOrUpdateNote(note) {
      $scope.selectedNote = NoteService.saveOrUpdate(note);
      setEditMode(false);
    }

    function deleteNote(note) {
      NoteService.remove(note);
      $scope.selectedNote = $scope.notes[0] || {};
      setEditMode(false);
    }

    function createNote() {
      $scope.selectedNote = NoteService.create();
      setEditMode(true);
    }
  });
