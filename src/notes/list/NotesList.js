import view from './notes-list.html'
import './notes-list.scss'
import { isEmpty } from 'lodash'
import { isFunction } from 'util'

export default class NotesList {
  constructor() {
    this.restrict = 'E'
    this.scope = {
      notes: '=', 
      sortedBy: '=',
      sortedByChange: '&'
    }
    this.template = view
  }
  link(scope) {
    scope.rows = []
    scope.$watch('notes', notes => {
      if (!isEmpty(notes)) {
        scope.rows = notes.map(note => ({
          ...note,
          selected: false
        }))
      }
    })

    scope.isAllSelected = () => {
      return scope.rows.filter(r => r.selected).length === scope.rows.length
    }

    scope.toggleSelectAll = () => {
      const selected = !scope.isAllSelected()
      angular.forEach(scope.rows, r => r.selected = selected)
    }
  }
}
