import * as angular from 'angular'
import uirouter from '@uirouter/angularjs'
import 'angular-aria'
import 'angular-material'
import 'angular-messages'

import '../node_modules/angular-material/angular-material.min.css'
import 'bourbon'

import './index.html'
import '../styles/app.scss'

import notesModule from './notes/NotesModule'

function config($uiRouterProvider, $mdThemingProvider) {
  // Setup MD default theme
  $mdThemingProvider.theme('default')
    .primaryPalette('blue').dark()
    .accentPalette('grey')
    .warnPalette('red')
  // .backgroundPalette('grey')

  // Setup MD light theme
  $mdThemingProvider.theme('light')
    .primaryPalette('red')

  // Setup MD dialog theme
  $mdThemingProvider.theme('dialog')
    .primaryPalette('teal')

  // Default to login state
  const $urlService = $uiRouterProvider.urlService;
  $urlService.rules.otherwise({
    state: 'notes'
  });  
}

function run($trace, $transitions, $state) {
}

const modules = [
  'ngMaterial',
  'ngAria',
  'ngAnimate',
  'ngMessages',
  uirouter,
  notesModule.name
]

export default angular
  .module('app', modules)
  .config(config)
  .run(run)
  .name