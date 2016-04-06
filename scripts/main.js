(function () {
  var monuments = [
    {
      nazwa: 'Bazylika Mariacka',
      typ: 'kościół',
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
      typ: 'kościół',
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
      typ: 'kościół',
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
      typ: 'kościół',
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

  angular.module('Workshop', ['uiGmapgoogle-maps', 'ui.bootstrap'])
      .controller('mainController', mainController)
      .controller('ButtonsCtrl', function ($scope) {


        $scope.checkModel = {
          kosioly: false,
          muzea: false,
          pomniki: false,
          wh: false
        };

        $scope.randomMarkers = [];
        if ($scope.checkModel.kosioly === true){
          dupa.foreach(function (item, index){
            if (item.typ==='kościół'){
              $scope.randomMarkers.push(item[index])
            }
          })
        }
        $scope.checkResults = [];

        $scope.$watchCollection('checkModel', function () {
          $scope.checkResults = [];
          angular.forEach($scope.checkModel, function (value, key) {
            if (value) {
              $scope.checkResults.push(key);
            }
          });
        });
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

    console.log($scope.koscioly);

    dupa = monuments.map(function (item, index) {

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

    // $scope.closeClick = function() {
    //   $scope.show = false;
    // };
    //
    // $scope.windowCoords = {};
    //
    // $scope.onClick = function(marker, eventName, model) {
    //   $scope.map.center.latitude = model.adres.position.latitude;
    //   $scope.map.center.longitude = model.adres.position.longitude;
    //   $scope.windowCoords.latitude = model.adres.position.latitude;
    //   $scope.windowCoords.longitude = model.adres.position.longitude;
    //   $scope.parkName = 'dfsdfsdfsdfsdfsdf';
    //   $scope.show = true;
    // };


        $scope.randomMarkers = dupa;

  }





  function DropdownCtrl($scope, $log) {
    $scope.items = [
      'The first choice!',
      'And another choice for you.',
      'but wait! A third!'
    ];

    $scope.status = {
      isopen: false
    };

    $scope.toggled = function(open) {
      $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
    };

    $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
    $scope.type = type;
    function type (typ){
      clearMarkers();
      if(typ === 'wszystkie'){
        return callback(monuments)
      }
      var kategorie = [];
      monuments.forEach( function (value, index) {
        monuments[index].typ === typ ? kategorie.push(monuments[index]): false
      });
      callback(kategorie);
      console.log(kategorie)

    }
  }




})();