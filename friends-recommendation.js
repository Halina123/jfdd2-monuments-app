/**
 * Created by michal on 07.04.16.
 */

var storedLogin = localStorage.getItem('login');
var storedName = localStorage.getItem('name');
var storedSocialMedia = localStorage.getItem('socialMedia');

var $form = $('#form');
var $inputLogin = $('#login');
var $inputName = $('#name');

function store() {
  var $inputSocialMedia = $('#socialMedia option:selected');

  localStorage.setItem('login', $inputLogin.val());
  localStorage.setItem('name', $inputName.val());
  localStorage.setItem('socialMedia', $inputSocialMedia.val());

  $form.css({'display': 'none'});
  var $alert = $('<p>').addClass('alert').text('Dziękuję za Twoje polecenie zabytku');
  $('#alert').append($alert);
}
$(document).ready(function() {
$form.submit(function (item) {
    if ($.trim($inputLogin.val()) === "" || $.trim($inputName.val()) === ""){
      alert('Wypełnij wszystkie pola , aby polecenie zabytku było możliwe');
      return false;
    }
    store()
  });

});

//angular.module('ui.bootstrap.demo').controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {
//
//  $scope.items = ['item1', 'item2', 'item3'];
//
//  $scope.animationsEnabled = true;
//
//  $scope.open = function (size) {
//
//    var modalInstance = $uibModal.open({
//      animation: $scope.animationsEnabled,
//      templateUrl: 'myModalContent.html',
//      controller: 'ModalInstanceCtrl',
//      size: size,
//      resolve: {
//        items: function () {
//          return $scope.items;
//        }
//      }
//    });
//
//    modalInstance.result.then(function (selectedItem) {
//      $scope.selected = selectedItem;
//    }, function () {
//      $log.info('Modal dismissed at: ' + new Date());
//    });
//  };
//
//  $scope.toggleAnimation = function () {
//    $scope.animationsEnabled = !$scope.animationsEnabled;
//  };
//
//});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

//angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {
//
//  $scope.items = items;
//  $scope.selected = {
//    item: $scope.items[0]
//  };
//
//  $scope.ok = function () {
//    $uibModalInstance.close($scope.selected.item);
//  };
//
//  $scope.cancel = function () {
//    $uibModalInstance.dismiss('cancel');
//  };
//});

//app = angular.module('ModalDemo', []);
//app.directive('modalDialog', function() {
//  return {
//    restrict: 'E',
//    scope: {
//      show: '=info'
//    },
//    replace: true, // Replace with the template below
//    transclude: true, // we want to insert custom content inside the directive
//    link: function(scope, element, attrs) {
//      scope.dialogStyle = {};
//      if (attrs.width)
//        scope.dialogStyle.width = attrs.width;
//      if (attrs.height)
//        scope.dialogStyle.height = attrs.height;
//      scope.hideModal = function() {
//        scope.show = false;
//      };
//    },
//    template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
//  };
//});
//
//app.controller('MyCtrl', ['$scope', function($scope) {
//  $scope.modalShown = false;
//  $scope.toggleModal = function() {
//    $scope.modalShown = !$scope.modalShown;
//  };
//  $scope.modalShown1 = false;
//  $scope.toggleModal1 = function() {
//    $scope.modalShown1 = !$scope.modalShown1;
//  };
//}]);