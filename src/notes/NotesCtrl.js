import { isArray, isFunction } from 'util'

export default class NotesController {
  constructor(notesService) {
    this.notesService = notesService
    
  }

  $onInit() {
    this.summary = this.notesService.summary
    this.notesService.reload().then(_ => {
      this.summary = this.notesService.summary
    })
  }
}