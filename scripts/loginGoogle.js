function onSuccess(googleUser) {
  console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  $('#welcomeLogin').hide();
  $('#myModal').hide();
  $('.modal-backdrop').hide();
  localStorage.setItem('login', googleUser.getBasicProfile().getEmail());
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
        $log.info('User signed in');
      },
      'onfailure': onFailure
    });
  }

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
