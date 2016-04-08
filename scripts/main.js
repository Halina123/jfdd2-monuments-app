(function () {
  var monuments = [
    {
      nazwa: 'Bazylika Mariacka',
      typ: 'kosciol',
      adres: {
        street: 'Reja',
        number: 4,
        position: {
          lat: 54.349985,
          lng: 18.653242
        }
      },
      about: 'krótki opis',
      image: 'jakies zdjecie',
      WHstatus: true,
      ID: 'xxxx'

    },
    {
      nazwa: 'Muzeum II Wojny Światowej',
      typ: 'muzeum',
      adres: {
        street: 'Mickiewicza',
        number: 4,
        position: {
          lat: 54.349718,
          lng: 18.648417
        }
      },
      about: 'krótki opis',
      image: 'jakies zdjecie',
      WHstatus: true,
      ID: 'xxxx'

    },
    {
      nazwa: 'Pomnik Obrońców Wybrzeża',
      typ: 'pomnik',
      adres: {
        street: 'Reja',
        number: 4,
        position: {
          lat: 54.406786,
          lng: 18.667375
        }
      },
      about: 'krótki opis',
      image: 'jakies zdjecie',
      WHstatus: true,
      ID: 'xxxx'

    },
    {
      nazwa: 'Kościół Świętej Trójcy',
      typ: 'kosciol',
      adres: {
        street: 'Szymborskiej',
        number: 4,
        position: {
          lat: 54.346514,
          lng: 18.646837
        }
      },
      about: 'krótki opis',
      image: 'jakies zdjecie',
      WHstatus: false,
      ID: 'xxxx'

    },
    {
      nazwa: 'Pomnik Poległych Stoczniowców 1970',
      typ: 'pomnik',
      adres: {
        street: 'Reja',
        number: 4,
        position: {
          lat: 54.360548,
          lng: 18.649052
        }
      },
      about: 'krótki opis',
      image: 'jakies zdjecie',
      WHstatus: false,
      ID: 'xxxx'

    },
    {
      nazwa: 'Europejskie Centrum Solidarności',
      typ: 'muzeum',
      adres: {
        street: 'Mickiewicza',
        number: 4,
        position: {
          lat: 54.361258,
          lng: 18.649480
        }
      },
      about: 'krótki opis',
      image: 'jakies zdjecie',
      WHstatus: false,
      ID: 'xxxx'

    },
    {
      nazwa: 'Kościół św. Katarzyny',
      typ: 'kosciol',
      adres: {
        street: 'Reja',
        number: 4,
        position: {
          lat: 54.354138,
          lng: 18.651482
        }
      },
      about: 'krótki opis',
      image: 'jakies zdjecie',
      WHstatus: true,
      ID: 'xxxx'

    },
    {
      nazwa: 'Pomnik Marszałka Józefa Piłsudskiego',
      typ: 'pomnik',
      adres: {
        street: 'Reja',
        number: 4,
        position: {
          lat: 54.386421,
          lng: 18.591431
        }
      },
      about: 'krótki opis',
      image: 'jakies zdjecie',
      WHstatus: false,
      ID: 'xxxx'

    },
    {
      nazwa: 'Narodowe Muzeum Morskie w Gdańsku',
      typ: 'muzeum',
      adres: {
        street: 'Reja',
        number: 4,
        position: {
          lat: 54.350901,
          lng: 18.659051
        }
      },
      about: 'krótki opis',
      image: 'jakies zdjecie',
      WHstatus: true,
      ID: 'xxxx'

    },
    {
      nazwa: 'Klasztor Ojców Dominikanów',
      typ: 'kosciol',
      adres: {
        street: 'Mickiewicza',
        number: 2,
        position: {
          lat: 54.352126,
          lng: 18.651477
        }
      },
      about: 'krótki opis',
      image: 'jakies zdjecie',
      WHstatus: false,
      ID: 'xxxx'

    }
  ];
  var monumentsOK = monuments.map(function (item, index) {

    return {
      nazwa: item.name,
      typ: item.typ,
      adres: {
        street: item.adres.street,
        number: item.adres.number,
        position: {
          latitude: item.adres.position.lat,
          longitude: item.adres.position.lng
        }

      },
      about: item.about,
      image: item.image,
      WHstatus: item.WHstatus,
      id: index


    }

  });






  var fMonumentsOK = monumentsOK;
  angular.module('Workshop', ['uiGmapgoogle-maps', 'ui.bootstrap'])
      .controller('mainController', mainController)
      .controller('ButtonsCtrl', function ($scope) {
      });


  function mainController($scope) {
    $scope.map = {
      center: {
        latitude: 54.379208,
        longitude: 18.653333
      },
      zoom: 12,
      bounds: {}
    };
    $scope.options = {
      scrollwheel: true
    };

    $scope.checkModel = {
      kosciol: true,
      muzeum: true,
      pomnik: true,
      wh: false
    };

    $scope.$watchCollection('checkModel', function () {
      fMonumentsOK = [];
      $scope.show = false;
      angular.forEach($scope.checkModel, function (value, key) {
        if (value) {
          monumentsOK.forEach(function (item, index) {
            if (item.typ === key && !$scope.checkModel.wh) {
              fMonumentsOK.push(item)
            } else if (item.typ === key && item.WHstatus) {
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
      $scope.windowCoords.latitude = model.adres.position.latitude;
      $scope.windowCoords.longitude = model.adres.position.longitude;
      $scope.parkName = 'dfsdfsdfsdfsdfsdf';
      $scope.show = true;
    };

  }

})();