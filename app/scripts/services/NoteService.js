'use strict';

/**
 * @ngdoc service
 * @name angularNotesApp.NoteService
 * @description
 * # NoteService
 * Factory in the angularNotesApp.
 */
angular.module('angularNotesApp')
  .factory('NoteService', function ($window, $filter) {

    function Note(id, content, modifiedAt) {
      this.id = id;
      this.content = content;
      this.modifiedAt = modifiedAt;
    }

    function findAll() {
      var result = [];
      var notes = JSON.parse($window.localStorage.getItem('notes'));
      if (notes) {
        angular.forEach(notes, function (note) {
          result.push(new Note(note.id, note.content, note.modifiedAt));
        });
      }
      return result;
    }

    function saveOrUpdate(noteToBeSaved) {
      var notes = findAll();
      var note;
      if (!noteToBeSaved.id) {
        note = new Note(notes.length + 1, noteToBeSaved.content, new Date());
        notes.push(note);
      } else {
        note = $filter('filter')(notes, {id: noteToBeSaved.id}, true)[0];
        if (note && note.content !== noteToBeSaved.content) {
          note.content = noteToBeSaved.content;
          note.modifiedAt = new Date();
        }
      }
      $window.localStorage.setItem('notes', JSON.stringify(notes));
      return note;
    }

    return {
      findAll: findAll,
      saveOrUpdate: saveOrUpdate
    };
  });
