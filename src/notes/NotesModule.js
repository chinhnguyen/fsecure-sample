import * as angular from 'angular'

import notesController from './NotesCtrl'
import notesView from './notes.html'
import './notes.scss'

import notesService from './NotesService'

import NotesStatistic from './statistic/NotesStatistic'

import NotesList from './list/NotesList'
import NotesTableHeader from './list/NotesTableHeader'
 
function routes($stateProvider) {
  $stateProvider.state('notes', {
    url: '',
    controller: notesController.name,
    controllerAs: "$ctrl",
    template: notesView
  })
}

export default angular
  .module('app.notes', [
  ])
  .service('notesService', notesService)
  .directive("notesStatistic", () => new NotesStatistic)
  .directive("notesTh", () => new NotesTableHeader)
  .directive("notesList", () => new NotesList)
  .controller(notesController.name, notesController)
  .config(routes)
