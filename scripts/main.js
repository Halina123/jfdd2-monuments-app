var statusButtonLocalisation;
var distance;
var position;
var object;
var favourites = [];
var recommended = [];
var URL = 'http://isa-api-sl.herokuapp.com/api';
var MonumentsFromServer;
var filterSentence;
var popularItems;

angular.module('Workshop', ['uiGmapgoogle-maps', 'ui.bootstrap', 'ngAnimate'])
  .controller('mainController', mainController)
  .controller('ButtonsCtrl', ButtonsCtrl)
  .controller('InfoController', InfoController)
  .controller('ModalDemoCtrl', ModalDemoCtrl)
  .controller('ModalInstanceCtrl', ModalInstanceCtrl);

function ButtonsCtrl($scope) {
  $scope.singleModel = 0;
}

function InfoController($scope) {
  $scope.AddToFavourites = function () {
    $.ajax({
      type: 'get',
      url: URL + '/favs?filter[where][appId]=monuments&filter[where][objectId]=' + object.name + '&filter[where][userId]=' + login,
      dataType: 'json',
      success: function (result) {
        if (result.length === 0) {
          toAdd = {
            "appId": "monuments",
            "objectType": object.id,
            "objectId": object.name,
            "userId": login,
            "id": 0
          };
          $.ajax({
            type: 'POST',
            url: URL + '/favs',
            dataType: 'json',
            data: toAdd,
            success: function () {
              checkOnLogin();
            }
          });
        }
      }
    });
  };

  $scope.openModal = function () {
    wyczyscForm();
    $('#obiektPolec').val(object.name);
    $('#modalPolec').modal('show');
  }
}

function ModalDemoCtrl($scope, $uibModal, $log) {
  $scope.animationsEnabled = true;
  $scope.open = function (size) {
    removeMarkers = false;
    $log.info('Otworzono menu filtrowania po lokalizacji.');
    if (statusButtonLocalisation) {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      })
    } else $scope.$emit('removeMarkers');
  };
}

function ModalInstanceCtrl($scope, $uibModalInstance) {
  $scope.ok = function () {
    distance = $scope.howMuch / 1000;
    $uibModalInstance.close();
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371;
  var dLat = deg2rad(lat2 - lat1);
  var dLon = deg2rad(lon2 - lon1);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180)
}

function hideF(target) {
  document.getElementById(target).style.display = 'none';
}