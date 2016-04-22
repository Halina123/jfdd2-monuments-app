/**
 * Created by drwal on 22.04.16.
 */
function mainController($scope) {
  function getMonuments(filter, callback) {
    $.ajax({
      type: 'GET',
      url: URL + '/monuments?' + filter,
      dataType: 'json',
      success: function (result) {
        callback(result);

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
    getMonuments(filterSentence + '&filter[fields][id]=true&filter[fields][name]=true&filter[fields][address]=true&filter[fields][image]=true',callBack);

  }
function callBack (result){
  MonumentsFromServer = result;
  update();
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
getMonuments('&filter[where][id]=' + model.id + '&filter[fields][about]=true', onClickSecondPart);
    function onClickSecondPart (result){
      $scope.windowCoords.latitude = model.address.position.latitude;
      $scope.windowCoords.longitude = model.address.position.longitude;
      $scope.images = model.image;
      $scope.show = true;
      $scope.nameMonuments = model.name;
      $scope.about = result[0].about;
      object = model;
      $scope.$apply();
    }
  };

  $scope.loadRecommendations = function () {
    $scope.polecone = recommended;
  };
  $scope.loadPopular = function () {
    $scope.popularItems = popularItems;
  };
  $scope.loadFav = function () {
    $scope.favourites = favourites;
  }

}