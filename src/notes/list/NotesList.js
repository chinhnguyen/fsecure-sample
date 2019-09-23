import view from './notes-list.html'
import './notes-list.scss'
import { isEmpty, without } from 'lodash'
import { isFunction } from 'util'

export default class NotesList {
  constructor() {
    this.restrict = 'E'
    this.scope = {
      rows: '=notes',
      sortedBy: '=',
      selectedNotes: '=',
      sortedByChange: '&',
      selectedChange: '&',
    }
    this.template = view
  }
  link(scope) {
    scope.isSelected = note => scope.selectedNotes.includes(note.id)

    scope.isAllSelected = () => scope.selectedNotes.length == scope.rows.length

    scope.toggleSelectAll = () => {
      const selected = !scope.isAllSelected()
      if (selected) {
        scope.selectedNotes = scope.rows.map(r => r.id)
      } else {
        scope.selectedNotes = []
      }
      if (isFunction(scope.selectedChange)) {
        setTimeout(() => scope.selectedChange(), 0)
      }
    }

    scope.toggleSelection = note => {
      if (scope.isSelected(note)) {
        scope.selectedNotes = without(scope.selectedNotes, note.id)
      } else {
        scope.selectedNotes = scope.selectedNotes.concat([note.id])
      }
      
      if (isFunction(scope.selectedChange)) {
        setTimeout(() => scope.selectedChange(), 0)
      }
    }
  }
}
