import toast from './notes-actions-toast.html'
import './notes-actions-toast.scss';

function NotesActionsToast($scope, $mdToast) {
  $scope.cancel = () => $mdToast.hide(false)
  $scope.hide = () => $mdToast.hide(true)
}

export function hideNotesActionsToast($mdToast) {
  $mdToast.cancel()
}

export function showNotesActionsToast($mdToast, parent) {
  return $mdToast.show({
    hideDelay: 0,
    position: 'left bottom',
    parent: parent,
    controller: NotesActionsToast,
    template: toast
  })
}