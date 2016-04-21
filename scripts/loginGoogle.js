var login;
function checkOnLogin() {
    $.ajax({
        type: 'GET',
        url: URL + '/favs?filter[where][appId]=monuments&filter[where][userId]=' + login,
        dataType: 'json',
        success: function (result) {
            if (result.length != 0) {
                console.log(result + "to jest wynik resulta przy odswiezaniu");
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
                    recommended.push('Użytkownik: ' + val.senderId + ' polecił ' + val.objectId);
                });
                numberOfRec()
            }
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
      'text-align': 'center',
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
      window.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost:63342/jfdd2-monuments-app/index.html#"
    });
  }
