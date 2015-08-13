'use strict';

/**
 * @ngdoc service
 * @name angularNotesApp.NoteService
 * @description
 * # NoteService
 * Factory in the angularNotesApp.
 */
angular.module('angularNotesApp')
  .factory('NoteService', function ($window, $filter, Note) {
    var notes = [];

    fetchAll();

    function fetchAll() {
      var notesFromLS = JSON.parse($window.localStorage.getItem('notes'));
      if (notesFromLS) {
        angular.forEach(notesFromLS, function (note) {
          notes.push(new Note(note.id, note.content, note.modifiedAt));
        });
      }
    }

    function persist() {
      $window.localStorage.setItem('notes', JSON.stringify(notes));
    }

    function findAll() {
      return notes;
    }

    function saveOrUpdate(noteToBeSaved) {
      var note;
      if (noteToBeSaved) {
        if (!noteToBeSaved.id) {
          // saving new note
          note = new Note(notes.length + 1, noteToBeSaved.content, new Date());
          notes.push(note);
          persist();
        } else {
            // updating note
          note = $filter('filter')(notes, {id: noteToBeSaved.id}, true)[0];
          if (note && note.content !== noteToBeSaved.content) {
            note.content = noteToBeSaved.content;
            note.modifiedAt = new Date();
            persist();
          }
        }
      }
      return note;
    }

    function remove(noteToBeDeleted) {
      var index = notes.indexOf(noteToBeDeleted);
      if (index !== -1) {
        notes.splice(index, 1);
        persist();
      }
      return index;
    }

    function create() {
      var note = new Note(notes.length + 1, '', new Date());
      notes.push(note);
      persist();
      return note;
    }

    return {
      findAll: findAll,
      saveOrUpdate: saveOrUpdate,
      remove: remove,
      create: create
    };
  });
