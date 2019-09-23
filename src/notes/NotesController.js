import { isArray, isFunction } from 'util'
import { isEmpty } from 'lodash'

import { showAddNoteDialog } from './addNoteDialog/AddNoteDialogController'
import { hideNotesActionsToast, showNotesActionsToast } from './notesActionsToast/NotesActionsToast'

export default class NotesController {
  constructor(notesService, $mdDialog, $mdToast) {
    this.notesService = notesService
    this.$mdDialog = $mdDialog
    this.$mdToast = $mdToast
  }

  $onInit() {
    this.sortedBy = {}
    this.summary = this.notesService.summary
    this.notes = []
    this.selectedNotes = []
    this.reload()

  }

  reload() {
    this.notesService.reload(this.sortedBy).then(_ => {
      this.summary = this.notesService.summary
      this.notes = this.notesService.notes
    })
  }

  add(event) {
    showAddNoteDialog(this.$mdDialog, event)
      .then(() => this.reload())
      .catch(() => { })
  }

  onSelectedChanged() {
    if (isEmpty(this.selectedNotes)) {
      hideNotesActionsToast(this.$mdToast)
    } else {
      const parent = angular.element(document.querySelector('#notes-container'))
      showNotesActionsToast(this.$mdToast, parent)
        .then(remove => {
          if (remove) {
            this.notesService.remove(this.selectedNotes).then(_ => {
              this.reload()
              this.selectedNotes = []
            })
          } else {
            this.selectedNotes = []
          }
        })
        .catch(() => { });
    }
  }
}