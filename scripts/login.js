(function() {
  var po = document.createElement('script');
  po.type = 'text/javascript'; po.async = true;
  po.src = 'https://plus.google.com/js/client:plusone.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(po, s);
})();

var gpclass = (function(){

  //Defining Class Variables here
  var response = undefined;
  return {
    //Class functions / Objects

    mycoddeSignIn:function(response){
      // The user is signed in
      if (response['access_token']) {

        //Get User Info from Google Plus API
        gapi.client.load('plus','v1',this.getUserInformation);
        window.location = "http://localhost:63342/jfdd2-monuments-app/index.html"
      } else if (response['error']) {
        // There was an error, which means the user is not signed in.
        //alert('There was an error: ' + authResult['error']);
      }
    },

    getUserInformation: function(){
      var request = gapi.client.plus.people.get( {'userId' : 'me'} );
      request.execute( function(profile) {
        var email = profile['emails'].filter(function(v) {
          return v.type === 'account'; // Filter out the primary email
        })[0].value;
        var fName = profile.displayName;
        $("#inputFullname").val(fName);
        $("#inputEmail").val(email);
      });
    }

  }; //End of Return
})();

function mycoddeSignIn(gpSignInResponse){
  gpclass.mycoddeSignIn(gpSignInResponse);
}
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}
//var googleUser = {};
//var startApp = function() {
//  gapi.load('auth2', function(){
//    auth2 = gapi.auth2.init({
//      client_id: '585245968094-in0rk60v6fptor65jvj752mu0fb6mvlg.apps.googleusercontent.com',
//      cookiepolicy: 'single_host_origin'
//    });
//    attachSignin(document.getElementById('customBtn'));
//  });
//};
//
//function attachSignin(element) {
//  console.log(element.id);
//  auth2.attachClickHandler(element, {},
//    function(googleUser) {
//      window.location = "http://localhost:63342/jfdd2-monuments-app/index.html";
//      //document.getElementById('name').innerText = "Signed in: " +
//      //    googleUser.getBasicProfile().getName();
//    }, function(error) {
//      alert(JSON.stringify(error, undefined, 2));
//    });
//}



