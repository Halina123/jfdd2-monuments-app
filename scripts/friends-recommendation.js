/**
 * Created by michal on 07.04.16.
 */
//var $loginUsera = localStorage.getItem('login');
var $loginUsera = 'michal.fraczyk@wp.pl';

var $form = $('#form');
var $inputLogin = $('#loginPolec');
var $inputEmail = $('#email');
var $inputObiekt = $('#obiektPolec');

function store() {
  var $inputSocialMedia = $('#socialMedia option:selected');
  //poszukac wpisu w localstorage dla danego maila
    if (localStorage.getItem($inputEmail.val()) === null) {
        //jezeli nie ma to tworzymy nowy
        var dane = new Array($loginUsera + ": " + $inputObiekt.val());
        localStorage.setItem($inputEmail.val(), JSON.stringify(dane));
    }
    else {
        //jezeli jest to odczytujemy i dodajemy do listy
        var dane = JSON.parse(localStorage.getItem($inputEmail.val()));
        dane.push($loginUsera + ": " + $inputObiekt.val());
        localStorage.setItem($inputEmail.val(), JSON.stringify(dane));
    }
  $form.css({'display': 'none'});
  var $alert = $('<p>').addClass('alert').text('Dziękuję za Twoje polecenie zabytku');
  $('#alert').append($alert);
}
$(document).ready(function() {
$form.submit(function (item) {
    if ($.trim($inputLogin.val()) === "" || $.trim($inputEmail.val()) === ""){
      alert('Wypełnij wszystkie pola , aby polecenie zabytku było możliwe');
      return false;
    }
    store();
    numberOfRec();
  });
   numberOfRec();

});

function numberOfRec () {
    var dane = JSON.parse(localStorage.getItem($loginUsera));
    var ilosc = dane.length;
    $('#numberOfRecommendation').html(ilosc);

}

function getStore(polecone) {
    //pobieramy liste poleconych dla danego usera
    var dane = JSON.parse(localStorage.getItem($loginUsera));
    var ilosc = dane.length;
    //kazdy element z listy dodajemy do dropdowna
    for(var i = 0; i < ilosc; i++) {
        if (polecone.indexOf(dane[i]) === -1) {
            polecone.push("Użytkownik " + dane[i]);

        }
    }
}

function wyczyscForm(){
    $form[0].reset();
    $form.removeAttr('style');
    $('#alert').html('');
}

$('#btnPolec').click(function(){
    alert('tq')
    //$('#modalPolec').modal('show');
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