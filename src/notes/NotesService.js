

export default class NotesService {
  constructor() {
    this.summary = {
      completed: 0,
      total: 0
    }
  }

  reload() {
    setTimeout(() => {
      this.summary = {
        completed: 7,
        total: 10
      }
    }, 0)
  }
}