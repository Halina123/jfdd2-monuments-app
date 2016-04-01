function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 54.360, lng: 18.639}
  });

  var marker = new google.maps.Marker({
    map: map,
    // Define the place with a location, and a query string.
    place: {
      location: {lat: -33.8666, lng: 151.1958},
      query: 'Bazylika Mariacka'

    },
    // Attributions help users find your site again.
    attribution: {
      source: 'Google Maps JavaScript API',
      webUrl: 'https://developers.google.com/maps/'
    }
  });

  // Construct a new InfoWindow.
  var infoWindow = new google.maps.InfoWindow({
    content: 'Google Sydney'
  });

  // Opens the InfoWindow when marker is clicked.
  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });

  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer({
    draggable: true,
    map: map,
    panel: document.getElementById('right-panel')
  });

  directionsDisplay.addListener('directions_changed', function() {
    computeTotalDistance(directionsDisplay.getDirections());
  });

  displayRoute('Bazylika Mariacka Wniebowzięcia Najświętszej Maryi Panny w Gdańsku, Podkramarska, Gdańsk', 'Kościół św. Jana, Świętojańska, Gdańsk', directionsService,
    directionsDisplay);
}

function displayRoute(origin, destination, service, display) {
  service.route({
    origin: origin,
    destination: destination,
    waypoints: [{location: 'Kaplica Królewska, Świętego Ducha, Gdańsk'}, {location: 'Jarmark św. Dominika, Gdańsk'}],
    travelMode: google.maps.TravelMode.WALKING,
    avoidTolls: true
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      display.setDirections(response);
    } else {
      alert('Could not display directions due to: ' + status);
    }
  });
}

function computeTotalDistance(result) {
  var total = 0;
  var myroute = result.routes[0];
  for (var i = 0; i < myroute.legs.length; i++) {
    total += myroute.legs[i].distance.value;
  }
  total = total / 1000;
  document.getElementById('total').innerHTML = total + ' km';
}


//(function () {
//  var monuments = [
//    {
//      name: 'Bazylika Mariacka',
//      type: 'church',
//      address: {
//        street: 'Reja',
//        number: 4,
//        position: {
//          lat: 54.349985,
//          lng: 18.653242
//        }
//      },
//      about: 'krótki opis',
//      image: 'jakies zdjecie',
//      WHstatus: true,
//      ID: 'xxxx'
//    },
//    {
//      name: 'Muzeum II Wojny Światowej',
//      type: 'museum',
//      address: {
//        street: 'Mickiewicza',
//        number: 4,
//        position: {
//          lat: 54.349718,
//          lng: 18.648417
//        }
//      },
//      about: 'krótki opis',
//      image: 'jakies zdjecie',
//      WHstatus: true,
//      ID: 'xxxx'
//    },
//    {
//      name: 'Pomnik Obrońców Wybrzeża',
//      type: 'monument',
//      address: {
//        street: 'Reja',
//        number: 4,
//        position: {
//          lat: 54.406786,
//          lng: 18.667375
//        }
//      },
//      about: 'krótki opis',
//      image: 'jakies zdjecie',
//      WHstatus: true,
//      ID: 'xxxx'
//    },
//    {
//      name: 'Kościół Świętej Trójcy',
//      type: 'church',
//      address: {
//        street: 'Szymborskiej',
//        number: 4,
//        position: {
//          lat: 54.346514,
//          lng: 18.646837
//        }
//      },
//      about: 'krótki opis',
//      image: 'jakies zdjecie',
//      WHstatus: false,
//      ID: 'xxxx'
//    },
//    {
//      name: 'Pomnik Poległych Stoczniowców 1970',
//      type: 'monument',
//      address: {
//        street: 'Reja',
//        number: 4,
//        position: {
//          lat: 54.360548,
//          lng: 18.649052
//        }
//      },
//      about: 'krótki opis',
//      image: 'jakies zdjecie',
//      WHstatus: false,
//      ID: 'xxxx'
//    },
//    {
//      name: 'Europejskie Centrum Solidarności',
//      type: 'museum',
//      address: {
//        street: 'Mickiewicza',
//        number: 4,
//        position: {
//          lat: 54.361258,
//          lng: 18.649480
//        }
//      },
//      about: 'krótki opis',
//      image: 'jakies zdjecie',
//      WHstatus: false,
//      ID: 'xxxx'
//    },
//    {
//      name: 'Kościół św. Katarzyny',
//      type: 'church',
//      address: {
//        street: 'Reja',
//        number: 4,
//        position: {
//          lat: 54.354138,
//          lng: 18.651482
//        }
//      },
//      about: 'krótki opis',
//      image: 'jakies zdjecie',
//      WHstatus: true,
//      ID: 'xxxx'
//    },
//    {
//      name: 'Pomnik Marszałka Józefa Piłsudskiego',
//      type: 'monument',
//      address: {
//        street: 'Reja',
//        number: 4,
//        position: {
//          lat: 54.386421,
//          lng: 18.591431
//        }
//      },
//      about: 'krótki opis',
//      image: 'jakies zdjecie',
//      WHstatus: false,
//      ID: 'xxxx'
//    },
//    {
//      name: 'Narodowe Muzeum Morskie w Gdańsku',
//      type: 'museum',
//      address: {
//        street: 'Reja',
//        number: 4,
//        position: {
//          lat: 54.350901,
//          lng: 18.659051
//        }
//      },
//      about: 'krótki opis',
//      image: 'jakies zdjecie',
//      WHstatus: true,
//      ID: 'xxxx'
//    },
//    {
//      name: 'Klasztor Ojców Dominikanów',
//      type: 'church',
//      address: {
//        street: 'Mickiewicza',
//        number: 2,
//        position: {
//          lat: 54.352126,
//          lng: 18.651477
//        }
//      },
//      about: 'krótki opis',
//      image: 'jakies zdjecie',
//      WHstatus: false,
//      ID: 'xxxx'
//    }
//  ];
//  var monumentsOK = monuments.map(function (item, index) {
//    return {
//      name: item.name,
//      type: item.type,
//      address: {
//        street: item.address.street,
//        number: item.address.number,
//        position: {
//          latitude: item.address.position.lat,
//          longitude: item.address.position.lng
//        }
//      },
//      about: item.about,
//      image: item.image,
//      WHstatus: item.WHstatus,
//      id: index
//    }
//  });

//  var fMonumentsOK = monumentsOK;
//  angular.module('Workshop', ['uiGmapgoogle-maps', 'ui.bootstrap'])
//    .controller('mainController', mainController)
//    .controller('ButtonsCtrl', function ($scope) {
//    });
//
//  function mainController($scope) {
//    $scope.map = {
//      center: {
//        latitude: 54.379208,
//        longitude: 18.653333
//      },
//      zoom: 12,
//      bounds: {}
//    };
//    $scope.options = {
//      scrollwheel: true
//    };
//
//    $scope.checkModel = {
//      church: true,
//      museum: true,
//      monument: true,
//      wh: false
//    };
//
//    $scope.$watchCollection('checkModel', function () {
//      fMonumentsOK = [];
//      $scope.show = false;
//      angular.forEach($scope.checkModel, function (value, key) {
//        if (value) {
//          monumentsOK.forEach(function (item, index) {
//            if (item.type === key && !$scope.checkModel.wh) {
//              fMonumentsOK.push(item)
//            } else if (item.type === key && item.WHstatus) {
//              fMonumentsOK.push(item)
//            }
//          })
//        }
//      });
//      $scope.randomMarkers = fMonumentsOK;
//    });
//
//    $scope.closeClick = function () {
//      $scope.show = false;
//    };
//
//    $scope.windowCoords = {};
//
//    $scope.onClick = function (marker, eventName, model) {
//      $scope.windowCoords.latitude = model.address.position.latitude;
//      $scope.windowCoords.longitude = model.address.position.longitude;
//      $scope.parkName = 'dfsdfsdfsdfsdfsdf';
//      $scope.show = true;
//    };
//  }
//})();