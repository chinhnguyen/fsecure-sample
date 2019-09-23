import { isArray, isFunction } from 'util'

import { showAddNoteDialog } from './addNoteDialog/AddNoteDialogController'

export default class NotesController {
  constructor(notesService, $mdDialog) {
    this.notesService = notesService    
    this.$mdDialog = $mdDialog
  }

  $onInit() {
    this.sortedBy = {}
    this.summary = this.notesService.summary
    this.notes = []
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
  }
}