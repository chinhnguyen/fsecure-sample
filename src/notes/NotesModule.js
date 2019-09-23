import * as angular from 'angular'

import notesController from './NotesCtrl'
import notesView from './notes.html'
import './notes.scss'

import notesService from './NotesService'
 
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
  .controller(notesController.name, notesController)
  .config(routes)
