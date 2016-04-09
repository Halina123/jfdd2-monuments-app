(function () {
  var position;
  var object = [];
  var favorite = [];
  var monuments = [
    {
      name: 'Bazylika Mariacka',
      type: 'church',
      address: {
        street: 'Reja',
        number: 4,
        position: {
          lat: 54.349985,
          lng: 18.653242
        }
      },
      about: 'Opis zabytku nr 1',
      image: '0',
      WHstatus: true,
      ID: 'xxxx'
    },
    {
      name: 'Muzeum II Wojny Światowej',
      type: 'museum',
      address: {
        street: 'Mickiewicza',
        number: 4,
        position: {
          lat: 54.349718,
          lng: 18.648417
        }
      },
      about: 'Opis zabytku nr 2',
      image: '1',
      WHstatus: true,
      ID: 'xxxx'
    },
    {
      name: 'Pomnik Obrońców Wybrzeża',
      type: 'monument',
      address: {
        street: 'Reja',
        number: 4,
        position: {
          lat: 54.406786,
          lng: 18.667375
        }
      },
      about: 'Opis zabytku nr 3',
      image: '2',
      WHstatus: true,
      ID: 'xxxx'
    },
    {
      name: 'Kościół Świętej Trójcy',
      type: 'church',
      address: {
        street: 'Szymborskiej',
        number: 4,
        position: {
          lat: 54.346514,
          lng: 18.646837
        }
      },
      about: 'Opis zabytku nr 4',
      image: '3',
      WHstatus: false,
      ID: 'xxxx'
    },
    {
      name: 'Pomnik Poległych Stoczniowców 1970',
      type: 'monument',
      address: {
        street: 'Reja',
        number: 4,
        position: {
          lat: 54.360548,
          lng: 18.649052
        }
      },
      about: 'Opis zabytku nr 5',
      image: '4',
      WHstatus: false,
      ID: 'xxxx'
    },
    {
      name: 'Europejskie Centrum Solidarności',
      type: 'museum',
      address: {
        street: 'Mickiewicza',
        number: 4,
        position: {
          lat: 54.361258,
          lng: 18.649480
        }
      },
      about: 'Opis zabytku nr 6',
      image: '5',
      WHstatus: false,
      ID: 'xxxx'
    },
    {
      name: 'Kościół św. Katarzyny',
      type: 'church',
      address: {
        street: 'Reja',
        number: 4,
        position: {
          lat: 54.354138,
          lng: 18.651482
        }
      },
      about: 'Opis zabytku nr 7',
      image: '6',
      WHstatus: true,
      ID: 'xxxx'
    },
    {
      name: 'Pomnik Marszałka Józefa Piłsudskiego',
      type: 'monument',
      address: {
        street: 'Reja',
        number: 4,
        position: {
          lat: 54.386421,
          lng: 18.591431
        }
      },
      about: 'Opis zabytku nr 8',
      image: '7',
      WHstatus: false,
      ID: 'xxxx'
    },
    {
      name: 'Narodowe Muzeum Morskie w Gdańsku',
      type: 'museum',
      address: {
        street: 'Reja',
        number: 4,
        position: {
          lat: 54.350901,
          lng: 18.659051
        }
      },
      about: 'Opis zabytku nr 9',
      image: '8',
      WHstatus: true,
      ID: 'xxxx'
    },
    {
      name: 'Klasztor Ojców Dominikanów',
      type: 'church',
      address: {
        street: 'Mickiewicza',
        number: 2,
        position: {
          lat: 54.352126,
          lng: 18.651477
        }
      },
      about: 'Opis zabytku nr 10',
      image: '9',
      WHstatus: false,
      ID: 'xxxx'
    }
  ];

  var monumentsOK = monuments.map(function (item, index) {
    return {
      name: item.name,
      type: item.type,
      address: {
        street: item.address.street,
        number: item.address.number,
        position: {
          latitude: item.address.position.lat,
          longitude: item.address.position.lng
        }
      },
      about: item.about,
      image: item.image,
      WHstatus: item.WHstatus,
      id: index,
      like: ''
    }
  });

  var fMonumentsOK = monumentsOK;

  angular.module('Workshop', ['uiGmapgoogle-maps', 'ui.bootstrap'])
    .controller('mainController', mainController)
    .controller('ButtonsCtrl', function ($scope) {
      $scope.singleModel = 0;
    })
    .controller('InfoController', function ($scope) {
      $scope.templateValue = 'hello from the template itself';
      $scope.clickedButtonInWindow = function () {
        if (favorite.indexOf(object.name) === -1) {
          favorite.push(object.name);
          object.like = 'favorite';
        }
      }
    });

  function mainController($scope) {
    $scope.position = position;
    $scope.favorite = favorite;
    $scope.map = {
      center: {
        latitude: 54.379208,
        longitude: 18.653333
      },
      zoom: 12,
      events: {
        tilesloaded: function (map, eventName, originalEventArgs) {
        },
        click: function (mapModel, eventName, originalEventArgs) {
          var e = originalEventArgs[0];
          var lat = e.latLng.lat(),
            lon = e.latLng.lng();
          $scope.map.clickedMarker = {
            id: 0,
            latitude: lat,
            longitude: lon
          };
          position = $scope.map.clickedMarker;
          console.log(position);
          $scope.$apply();
        }
      },
      clickedMarker: {
        id: 0,
        title: ''
      },
      bounds: {}
    };

    $scope.options = {
      scrollwheel: true
    };

    $scope.checkModel = {
      church: true,
      museum: true,
      monument: true,
      wh: false
    };

    $scope.$watchCollection('checkModel', function () {
      fMonumentsOK = [];
      $scope.show = false;
      angular.forEach($scope.checkModel, function (value, key) {
        if (value) {
          monumentsOK.forEach(function (item) {
            if (item.type === key && !$scope.checkModel.wh) {
              fMonumentsOK.push(item)
            } else if (item.type === key && item.WHstatus) {
              fMonumentsOK.push(item)
            }
          })
        }
      });
      $scope.randomMarkers = fMonumentsOK;
    });

    $scope.closeClick = function () {
      $scope.show = false;
    };

    $scope.windowCoords = {};

    $scope.onClick = function (marker, eventName, model) {
      $scope.windowCoords.latitude = model.address.position.latitude;
      $scope.windowCoords.longitude = model.address.position.longitude;
      $scope.images = model.id;
      $scope.show = true;
      $scope.nameMonuments = model.name;
      $scope.opis = model.about;
      $scope.like = model.like;
      object = model;
    };
  }
})();

function hideF(target) {
  document.getElementById(target).style.display = 'none';
}