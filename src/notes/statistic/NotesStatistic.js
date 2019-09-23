import { isArray, isFunction } from 'util'
import view from './notes-statistic.html'
import './notes-statistic.scss'

export default class NotesStatistic {
  constructor() {
    this.restrict = 'E'
    this.scope = {
      summary: '='
    }
    this.template = view
  }
}
