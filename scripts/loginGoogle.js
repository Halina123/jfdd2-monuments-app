var login;
function checkOnLogin() {
    $.ajax({
        type: 'GET',
        url: URL + '/favs?filter[where][appId]=monuments&filter[where][userId]=' + login,
        dataType: 'json',
        success: function (result) {
            if (result.length != 0) {
                favourites = [];
                result.forEach(function (val) {
                    favourites.push(val.objectId)
                });
                numberOfRec()
            }
        }
    });
    $.ajax({
        type: 'GET',
        url: URL + '/recommendations?filter[where][appId]=monuments&filter[where][receiverId]=' + login,
        dataType: 'json',
        success: function (result) {
            if (result.length != 0) {
                recommended = [];
                result.forEach(function (val) {
                    recommended.push({user: val.senderId, what: val.objectId});
                });
                numberOfRec()
            }
        }
    });
    popular();
}

function popular() {
    //helpArray = [];
    //popularCount = [];
    var accumulator = {};
    popularItems = [];
    $.ajax({
        type: 'GET',
        url: URL + '/favs?filter[where][appId]=monuments',
        dataType: 'json',
        success: function (result) {
            result.forEach(function (item) {
                accumulator[item.objectId] = (accumulator[item.objectId] || 0) + 1;
            });
            $.ajax({
                type: 'GET',
                url: URL + '/recommendations?filter[where][appId]=monuments',
                dataType: 'json',
                success: function (result) {
                    result.forEach(function (item) {
                        accumulator[item.objectId] = (accumulator[item.objectId] || 0) + 2;
                    });
                    for (var itemName in accumulator) {
                        if (accumulator.hasOwnProperty(itemName)) {
                            popularItems.push({
                                name: itemName,
                                occurrences: accumulator[itemName]
                            })
                        }
                    }
                    popularItems.sort(function (a, b) {
                        return b.occurrences - a.occurrences
                    });
                    popularItems = popularItems.slice(0,3);
                }
            });
        }
    });
}












function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    $('#welcomeLogin').hide();
    $('#myModal').hide();
    $('.modal-backdrop').hide();
    login = googleUser.getBasicProfile().getEmail();
    checkOnLogin();

}

function onFailure(error) {
  console.log(error);
}

  function renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 250,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',

      'onsuccess': function (googleUser) {
        onSuccess(googleUser);
        //$log.info('User signed in');
      },
      'onfailure': onFailure
    });
  }

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      window.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://monuments.jfdd2.infoshareaca.nazwa.pl"
    });
  }
