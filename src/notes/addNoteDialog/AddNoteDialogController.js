import dialog from './add-note-dialog.html'
import './add-note-dialog.scss';

function AddNoteDialogController($scope, $mdDialog, notesService) {
  $scope.note = {
    "status": "New",
    "title": "",
    "content": ""
  }
  $scope.close = () => $mdDialog.cancel()
  $scope.save = () => {
    notesService.add($scope.note).then(() => {
      console.log('saved')
      $mdDialog.hide()
    }, reason => {
      // TODO: better error handling
      console.log(reason)
    })
  }
}

export function showAddNoteDialog($mdDialog, event) {
  return $mdDialog.show({
    controller: AddNoteDialogController,
    template: dialog,
    parent: angular.element(document.body),
    targetEvent: event,
    clickOutsideToClose: true
  })
}