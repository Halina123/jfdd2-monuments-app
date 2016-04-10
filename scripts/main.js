var object = [];


(function () {
    var actualPosition = [];
    var buttonLocalisation;
    var howMuch;
    var position;
    var object = [];
    var favourite = [];
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
            about: 'Konkatedralna Bazylika Mariacka jest największą w Europie świątynią wybudowaną z cegły. ' +
            'Potężne  jej mury i wieże wznoszą się wysoko nad panoramą miasta oraz nad rozległą okolicą. ' +
            'Kamień węgielny pod Bazylikę położono 25 marca 1343 r. Świątynia budowana była etapami przez 159 lat. ' +
            'Długość budowli, łącznie z przyporami wieży, wynosi 105,5 m; sklepienia sięgają do 30 m ponad posadzkę. ' +
            'Wysoką na 77,6 m (do kalenicy dachu 82 m) masywną wieżę wieńczy galeryjka widokowa, ' +
            'z której podziwiać można panoramę miasta. Wiedzie do niej prawie 400 stopni!',
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
            about: 'Muzeum zostało powołane 1 września 2008 roku zarządzeniem Ministra Kultury i Dziedzictwa Narodowego ' +
            'pod nazwą Muzeum Westerplatte. Ma za cel upowszechniać wiedzę o II wojnie światowej oraz służyć ' +
            'pielęgnowaniu pamięci o jej ofiarach i bohaterach; ma być nowoczesnym obiektem pod względem formy, ' +
            'a także prowadzonej działalności wystawienniczej, edukacyjnej i badawczej. Oczekuje się, ' +
            'że muzeum wypromuje Polskę, jako kraj wartości i postaw obywatelskich, realizujący program zbliżania ' +
            'do siebie ludzi. Placówka prowadzi działalność w formie wystawy plenerowej, wystaw czasowych, ' +
            'działań edukacyjnych, wydawniczych oraz prac naukowo-badawczych.',
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
            about: 'Ogromny pomnik Obrońców Wybrzeża upamiętnia polskich żołnierzy, którzy jesienią 1939 r. ' +
            'na terenie Pomorza bohatersko stawili czoła przeważającym, świetnie uzbrojonym wojskom hitlerowskim. ' +
            'Umiejscowienie pomnika jest bardzo wymownym symbolem, gdyż właśnie obrona Westerplatte stała się jednym ' +
            'z najbardziej dramatycznych wątków całej kampanii wrześniowej. Pomnik o wysokości 25 m, ' +
            'dzieło Adama Haupta, Franciszka Duszenki oraz Henryka Kitkowskiego, ustawiono na potężnym kopcu ' +
            'i odsłonięto 9 X 1966 r. Monument złożono z bloków granitowych o łącznej wadze 1150 t i przyozdobiono ' +
            'płaskorzeźbami oraz napisami uwieczniającymi wojenną dramaturgię tamtych czasów. W najbliższej okolicy ' +
            'obejrzeć również można zabytki związane z heroiczną obroną placówki z 1939 r., groby bohaterskich ' +
            'żołnierzy oraz czołg T-34 Polskiej Brygady Pancernej im. Bohaterów Westerplatte.',
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
            about: 'Późnogotycka świątynia wzniesiona dla osadzonych w 1419 franciszkanów na terenie Starego ' +
            'Przedmieścia (Lastadii), południowej części historycznego Gdańska. Kościół stanowi część dawnego zespołu ' +
            'klasztornego Braci Mniejszych Konwentualnych, w którego skład wchodzą kaplica św. Anny, dom ryglowy i ' +
            'przylegające do kościoła od strony południowej zabudowania klasztorne z wirydarzem. Po reformacji w 1522 r. ' +
            'założono tu Gdańskie Gimnazjum Akademickie oraz bibliotekę. Po 1872 siedziba Muzeum Miejskiego, obecnie ' +
            'oddział Muzeum Narodowego. Cenne dzieło późnogotyckiej architektury ceglanej, z charakterystycznymi ' +
            'schodkowymi szczytami elewacji korpusu nawowego i prezbiterium i niewielkimi wieżyczkami ' +
            'kontrastującymi z masywną bryłą kościoła.',
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
            about: 'Majestatyczne trzy krzyże z kotwicami - symbolami nadziei upamiętniają krwawe ofiary strajków ' +
            'robotniczych Grudnia 1970 r. Żądanie zgody na postawienie u bram stoczni pomnika było jednym z najważniejszych ' +
            'postulatów strajkujących stoczniowców gdańskich w sierpniu 1980 r. Krzyże mają 42 m wysokości i ważą ' +
            'prawie 140 ton. U stóp pomnika składają kwiaty wszystkie oficjalne delegacje odwiedzające Gdańsk.',
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
            about: 'Instytucja z siedzibą w Gdańsku, powołana dnia 8 listopada 2007 pod nazwą Europejskie Centrum ' +
            'Solidarności. Deklarowanym celem działalności Centrum jest upowszechnienie dziedzictwa Solidarności w Polsce ' +
            'i innych krajach oraz czynne uczestnictwo w budowie tożsamości europejskiej. Centrum ma przyczynić się ' +
            'do tego, aby ideały ruchu Solidarność – demokracja, społeczeństwo otwarte i solidarne, kultura dialogu ' +
            '– zachowały swoją atrakcyjność i aktualność. Ma zachować w pamięci Polaków i Europejczyków doświadczenie ' +
            'Solidarności jako pokojowej europejskiej rewolucji, aby we wspólnocie europejskich demokracji Solidarność ' +
            'była ważną częścią mitu założycielskiego Europy. Ma sprawić, by Solidarność była źródłem inspiracji i ' +
            'nadziei dla tych, którzy nie żyją w społeczeństwach otwartych i demokratycznych.',
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
            about: 'Najstarszy kościół parafialny Starego Miasta, określany mianem Matrona Loci (matka kościołów ' +
            'lub matka miasta), wzniesiony w latach 1227-1239 z fundacji książąt gdańsko - pomorskich i znacznie ' +
            'rozbudowany w XIV wieku. Do 1944 r. kościół zachwycał wyposażeniem pełnym zabytków gotyckich, ' +
            'manierystycznych i barokowych. W 1945 roku uległ zniszczeniu. Obecnie zabytek został w całości ' +
            'odrestaurowany. Tutaj znajduje się grób i epitafium słynnego astronoma Jana Heweliusza.' +
            'Na 76 - metrowej wieży kościelnej zamontowany jest pięknie brzmiący carillon. ' +
            'W wieży kościoła ma siedzibę Muzeum Zegarów Wieżowych.',
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
            about: 'U zbiegu ulic Wojska Polskiego i Alei Grunwaldzkiej w Gdańsku Strzyża dnia 11 listopada 2006 ' +
            'roku został odsłonięty pomnik Marszałka Józefa Piłsudskiego. Odsłonięcia dokonał ostatni Prezydent ' +
            'Polski na Uchodźstwie Pan Ryszard Kaczorowski. Autorem pomnika jest rzeźbiarz Tomasz Radziewicz. ' +
            'Wysokość rzeźby odlana w brązie ma wysokość ok. 380 cm i orientacyjną wagę ok. 1200 kg. Marszałek był ' +
            'więziony przez tydzień w 1917 roku w areszcie na ul. Kurkowej, który istnieje do dzisiaj. Był przetrzymywany ' +
            'przez tydzień, tak krótko, gdyż Niemcy uwierzyli w pogłoski, że Polacy w całym kraju organizują się zbrojnie, ' +
            'by odbić przyszłego naczelnika. Razem z Józefem Piłsudskim był więziony gen. Kazimierz Sosnkowski. ' +
            'Plac na którym stoi pomnik nazywany jest Placem Piłsudskiego.',
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
            about: 'Narodowa instytucja kultury, muzeum przyjmujące za swoje posłannictwo ochronę dziedzictwa ' +
            'nautologicznego, poprzez gromadzenie i zabezpieczanie zabytków związanych z żeglugą, szkutnictwem, ' +
            'okrętownictwem, rybołówstwem oraz upowszechniające wiedzę o nich, a także o morskiej historii ' +
            'Polski i jej gospodarce. Muzeum realizuje swoją misję poprzez prace badawcze, konserwację zabytków, ' +
            'organizację wystaw i uczestnictwo w stowarzyszeniach muzealniczych. Muzeum stara się skupić wokół ' +
            'siebie ludzi, instytucje, urzędy i firmy związane z gospodarką morską, tak aby móc przy ich wsparciu ' +
            'realizować swoje cele i wypełniać wyznaczoną misję.',
            image: '8',
            WHstatus: true,
            ID: 'xxxx'

        },
        {
            name: 'Klasztor Ojców Dominikanów',
            type: 'church',
            address: {
                street: 'Świętojańska',
                number: 2,
                position: {
                    lat: 54.352126,
                    lng: 18.651477
                }
            },
            about: 'Kościół pod wezwaniem św. Mikołaja to jedna z najstarszych świątyń Gdańska. Jego historia ' +
            'rozpoczyna się w XII w. Został on zbudowany na skrzyżowaniu dwóch ważnych szlaków handlowych: ' +
            'starożytnej drogi kupców (via mercatorum) i traktu wiodącego z gdańskiego zamku do książęcych ' +
            'posiadłości na Pomorzu. Kościół od początku służył zarówno ludności miejscowej, jak i przybywającym ' +
            'tu licznie ze wszystkich stron świata kupcom i żeglarzom. Jest on najstarszą świątynią w tym mieście ' +
            'a tym samym jednym z najważniejszych świadków jego pięknej i dramatycznej historii. Świadkiem tym ' +
            'bardziej wiarygodnym, że ocalałym z zawieruchy ostatniej wojny. Gromadzone przez wieki elementy ' +
            'wyposażenia nadaja mu niepowtarzalną atmosferę.',
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
    angular.module('Workshop', ['uiGmapgoogle-maps', 'ui.bootstrap', 'ngAnimate'])
        .controller('mainController', mainController)
        .controller('ButtonsCtrl', ButtonsCtrl)
        .controller('InfoController', InfoController)
        .controller('ModalDemoCtrl', ModalDemoCtrl)
        .controller('ModalInstanceCtrl', ModalInstanceCtrl);

    function ButtonsCtrl($scope) {
        $scope.singleModel = 0;
    }

    function InfoController($scope, $log) {
        $scope.clickedButtonInWindow = function () {
            if (favourite.indexOf(object.name) === -1) {
                favourite.push(object.name);
                object.like = 'favourite';
            }
        }
    }

    function ModalDemoCtrl($scope, $uibModal, $log) {
        $scope.animationsEnabled = true;
        $scope.open = function (size) {
            if (buttonLocalisation) {
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
        }
    }

    function ModalInstanceCtrl($scope, $uibModalInstance, items) {
        $scope.ok = function () {
            howMuch = $scope.howMuch;
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
        $scope.nameMonuments = "W tym miesjcu wyświetlane będą dane wybranego zabytku.";
        $scope.favourite = favourite;
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
                }
            },
            clickedMarker: {
                id: 0,
                latitude: actualPosition[0],
                longitude: actualPosition[1],
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
            church: true,
            museum: true,
            monument: true,
            wh: false
        };
        $scope.$watchCollection('position', checkModel);
        $scope.$watchCollection('checkModel', checkModel);
        function checkModel() {
            buttonLocalisation = $scope.checkModel.lokalizacja;
            fMonumentsOK = [];
            monumentsfilredPosition = monumentsOK;
            $scope.show = false;
            angular.forEach($scope.checkModel, function (value, key) {
                if (value && key === 'lokalizacja') {
                    monumentsfilredPosition = [];
                    monumentsOK.forEach(function (item) {
                        oldeglosc = getDistanceFromLatLonInKm(item.address.position.latitude, item.address.position.longitude, position[0], position[1]);
                        console.log(oldeglosc);
                        if (oldeglosc <= howMuch) {
                            monumentsfilredPosition.push(item)
                        }
                    })
                }
                if (value && key !== 'lokalizacja' && key !== 'wh') {
                    monumentsfilredPosition.forEach(function (item, index) {
                        if (item.type === key && !$scope.checkModel.wh) {
                            fMonumentsOK.push(item)
                        } else if (item.type === key && item.WHstatus) {
                            fMonumentsOK.push(item)
                        }
                    })
                }
            });
            $scope.randomMarkers = fMonumentsOK;
        }

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
            $scope.about = model.about;
            $scope.like = model.like;
            object = model;
        };
    }
})();

function hideF(target) {
    document.getElementById(target).style.display = 'none';
}



