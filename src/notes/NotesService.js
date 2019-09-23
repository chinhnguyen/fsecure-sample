

export default class NotesService {
  constructor($q) {
    this.$q = $q
    this.summary = {
      completed: 0,
      total: 0
    }
  }

  reload() {
    const deferred = this.$q.defer()
    setTimeout(() => {
      this.summary = {
        completed: 7,
        total: 10
      }
      deferred.resolve()
    }, 0)

    return deferred.promise
  }
}