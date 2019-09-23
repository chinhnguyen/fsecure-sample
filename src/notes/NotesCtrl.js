import { isArray, isFunction } from 'util'

export default class NotesController {
  constructor(notesService) {
    this.notesService = notesService    
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
}