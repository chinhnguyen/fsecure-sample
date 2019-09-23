import view from './notes-table-header-cell.html'

export default class NotesTableHeader {
  constructor() {
    this.restrict = 'E'
    this.scope = {
      title: '@', 
      sorted: '=', 
      click: '&'
    }
    this.template = view
  }
  link(scope) {
    scope.toggle = () => {
      if (scope.sorted === 'asc') {
        scope.sorted = 'desc'
      } else if (scope.sorted === 'desc') {
        scope.sorted = ''
      } else {
        scope.sorted = 'asc'
      }
      if (scope.click) {
        scope.click()
      }
    }
  }
}