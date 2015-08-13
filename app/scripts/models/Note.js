'use strict';

/**
 * @ngdoc model
 * @name angularNotesApp.Note
 * @description
 * # Note Model
 * Model in the angularNotesApp.
 */
angular.module('angularNotesApp')
  .factory('Note', function () {
    function Note(id, content, modifiedAt) {
      this.id = id;
      this.content = content;
      this.modifiedAt = modifiedAt;
    }
    return Note;
  });
