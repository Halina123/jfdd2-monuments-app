(function () {
  var pozycja;
  var obiekt = [];
  var ulubione = [];
  var polecone = [];
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
      about: 'jakiś opis zabytku nr 1 ',
      image: '1',
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
      about: 'jakiś opis zabytku nr 2 ',
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
      about: 'jakiś opis zabytku nr 3 ',
      image: '2',
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
      about: 'jakiś opis zabytku nr 4 ',
      image: '3',
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
      about: 'jakiś opis zabytku nr 5 ',
      image: '4',
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
      about: 'jakiś opis zabytku nr 6 ',
      image: '5',
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
      about: 'jakiś opis zabytku nr 7 ',
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
      about: 'jakiś opis zabytku nr 8 ',
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
      about: 'jakiś opis zabytku nr 9 ',
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
      about: 'jakiś opis zabytku nr 10 ',
      image: 'jakies zdjecie',
      WHstatus: false,
      ID: 'xxxx'

    }
  ];
  var monumentsOK = monuments.map(function (item, index) {

    return {
      nazwa: item.nazwa,
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
      .controller('InfoController', function ($scope, $log) {
        $scope.templateValue = 'hello from the template itself';
        $scope.clickedButtonInWindow = function () {
          if (ulubione.indexOf(obiekt.nazwa) === -1){
            ulubione.push(obiekt.nazwa);
            obiekt.like = 'ulubione';
          }
          if (polecone.indexOf(obiekt.nazwa) === -1) {
            polecone.push(obiekt.nazwa);
            obiekt.recommend = 'polecone';
          }
        }
        $scope.openModal = function(){
          $('#modalPolec').modal('show');
        }
      });




  function mainController($scope) {
    $scope.pozycja = pozycja;
    $scope.ulubione = ulubione;
    $scope.polecone = polecone;
    $scope.map = {
      center: {
        latitude: 54.379208,
        longitude: 18.653333
      },
      zoom: 12,
      events: {
        tilesloaded: function (map, eventName, originalEventArgs) {
          //map is trueley ready then this callback is hit
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
          pozycja = $scope.map.clickedMarker;
          console.log(pozycja);
          //scope apply required because this event handler is outside of the angular domain
          $scope.$apply();
        }
      },

      clickedMarker: {
        id:0,
        title: ''
      },

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
      $scope.images = model.id;
      $scope.show = true;
      $scope.nameMonuments = model.nazwa;
      $scope.opis = model.about;
      $scope.like= model.like;
      obiekt = model;

    };





  }

})();

function hideF(target) {
  document.getElementById(target).style.display = 'none';
}



