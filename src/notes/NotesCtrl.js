import { isArray, isFunction } from 'util'

export default class NotesController {
  constructor(notesService) {
    this.notesService = notesService
  }
}