var statusButtonLocalisation;
var distance;
var position;
var object;
var favourites = [];
var recommended = [];
var URL = 'http://isa-api-sl.herokuapp.com/api';
var MonumentsFromServer;
var filterSentence;


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
            "objectType": "favourite",
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
    $log.info('otworzono menu filtrowania po lokalizacji');
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
    }
  };
}

function ModalInstanceCtrl($scope, $uibModalInstance) {
  $scope.ok = function () {
    distance = $scope.howMuch;
    $uibModalInstance.close();
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1);  // deg2rad below
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

function mainController($scope) {
  function getMonuments(filter) {
    $.ajax({
      type: 'GET',
      url: URL + '/monuments?' + filter,
      // url: URL + '/monuments',
      dataType: 'json',
      success: function (result) {
        MonumentsFromServer = result;
        update();
      }
    });
  }

  $scope.randomMarkers = [];
  $scope.nameMonuments = "W tym miesjcu wyświetlane będą dane wybranego zabytku.";
  $scope.polecone = recommended;
  $scope.map = {
    center: {
      latitude: 54.379208,
      longitude: 18.653333
    },
    zoom: 12,
    events: {
      click: function (mapModel, eventName, originalEventArgs) {
        var e = originalEventArgs[0];
        var lat = e.latLng.lat(),
          lon = e.latLng.lng();
        $scope.map.clickedMarker = {
          id: 0,
          latitude: lat,
          longitude: lon,
          options: {
            animation: 1
          }
        };
        position = [$scope.map.clickedMarker.latitude, $scope.map.clickedMarker.longitude];
        $scope.position = position;
        $scope.$apply();
        update();
      }
    },
    clickedMarker: {
      id: 0,
      latitude: 0,
      longitude: 0,
      //latitude: actualPosition[0],
      //longitude: actualPosition[1],
      options: {
        animation: 1
      }
    },
    bounds: {}
  };
  $scope.options = {
    scrollwheel: true
  };
  $scope.checkModel = {
    lokalizacja: false,
    church: false,
    museum: false,
    monument: false,
    wh: false
  };
  $scope.$watchCollection('checkModel', checkModel);
  function checkModel() {
    var licznik = 0;
    filterSentence = '';
    statusButtonLocalisation = $scope.checkModel.lokalizacja;
    MonumentsForDisplay = [];
    monumentsfilredPosition = MonumentsFromServer;
    $scope.show = false;
    $scope.nameMonuments = "W tym miesjcu wyświetlane będą dane wybranego zabytku.";
    $scope.about = '';
    $scope.images = 'xxx';
    angular.forEach($scope.checkModel, function (value, key) {
      if (value && key != 'wh' && key != 'lokalizacja') {
        licznik++
      }
    });
    angular.forEach($scope.checkModel, function (value, key) {
      if (value && key !== 'lokalizacja' && key !== 'wh' && licznik > 1) {
        filterSentence += '&filter[where][type][inq]=' + key
      } else if (value && key !== 'lokalizacja' && key !== 'wh') {
        filterSentence += '&filter[where][type]=' + key
      }
      if (value && key === 'wh') {
        filterSentence += '&filter[where][WHstatus]=true'
      }
    });
    console.log(filterSentence);
    getMonuments(filterSentence);

  }

  function update() {
    if ($scope.checkModel.lokalizacja == true) {
      monumentsfilredPosition = [];
      MonumentsFromServer.forEach(function (item) {
        markerDistance = getDistanceFromLatLonInKm(item.address.position.latitude, item.address.position.longitude, position[0], position[1]);
        if (markerDistance <= distance) {
          monumentsfilredPosition.push(item)
        }
      });
      $scope.randomMarkers = monumentsfilredPosition;
      $scope.$apply();
      return
    }
    $scope.randomMarkers = MonumentsFromServer;
    $scope.$apply();
  }

  $scope.closeClick = function () {
    $scope.show = false;
  };
  $scope.windowCoords = {};

  $scope.onClick = function (marker, eventName, model) {
    $scope.windowCoords.latitude = model.address.position.latitude;
    $scope.windowCoords.longitude = model.address.position.longitude;
    $scope.images = model.image;
    $scope.show = true;
    $scope.nameMonuments = model.name;
    $scope.about = model.about;
    $scope.like = model.like;
    object = model;
  };

  $scope.loadRecommendations = function () {
    $scope.polecone = recommended;
  };
  $scope.loadFav = function () {
    $scope.favourites = favourites;
  }

}

function hideF(target) {
  document.getElementById(target).style.display = 'none';
}



