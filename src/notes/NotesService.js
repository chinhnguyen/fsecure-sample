import { orderBy, keys, each, isEmpty, maxBy, without } from 'lodash'
import { isNullOrUndefined } from 'util'

let mockNotes = [
  {
    "id": 1,
    "title": "delectus aut autem",
    "content": "Lorem ipsum",
    "status": "New"
  },
  {
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "content": "Lorem ipsum",
    "status": "Completed"
  },
  {
    "id": 3,
    "title": "fugiat veniam minus",
    "content": "Lorem ipsum",
    "status": "Not completed"
  }
]

export default class NotesService {
  constructor($q) {
    this.$q = $q
    this.notes = []
    this.summary = {
      completed: 0,
      total: 0
    }
  }

  reload(sortedBy) {
    const deferred = this.$q.defer()
    setTimeout(() => {
      const sortKeys = []
      const sortDirections = []
      each(sortedBy, (v, k) => {
        if (isEmpty(v)) {
          return
        }
        sortKeys.push(k)
        sortDirections.push(v)
      })
      this.notes = orderBy(mockNotes, sortKeys, sortDirections)
      this.summary = {
        completed: this.notes.filter(n => n.status === 'Completed').length,
        total: this.notes.length
      }
      deferred.resolve()
    }, 0)

    return deferred.promise
  }

  add(note) {
    const deferred = this.$q.defer()
    setTimeout(() => {
      const max = maxBy(mockNotes, 'id')
      if (isNullOrUndefined(max)) {
        note.id = 1
      } else {
        note.id = (max.id || 0) + 1
      }
      note.status = 'New'
      mockNotes.push(note)
      deferred.resolve()
    }, 0)
    return deferred.promise
  }

  remove(ids) {
    const deferred = this.$q.defer()
    setTimeout(() => {
      mockNotes = mockNotes.filter(n => !ids.includes(n.id))
      console.log(mockNotes)
      deferred.resolve()
    }, 0)
    return deferred.promise
  }
}