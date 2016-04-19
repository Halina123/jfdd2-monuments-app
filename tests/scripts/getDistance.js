function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371;
  var dLat = deg2rad(lat2 - lat1);
  var dLon = deg2rad(lon2 - lon1);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

var dLat = function (lat1, lat2) {
  lat1 = lat1 || 0;
  lat2 = lat2 || 0;

  if (typeof lat1 == 'string' || typeof lat2 == 'string')
    throw 'Invalid parameter type';

  return lat2 - lat1;
};

var dLon = function (lon1, lon2) {
  lon1 = lon1 || 0;
  lon2 = lon2 || 0;

  if (typeof lon1 == 'string' || typeof lon2 == 'string')
    throw 'Invalid parameter type';

  return lon2 - lon1;
};

var c = function (a) {

  return 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

};

var d = function (R, c) {

  if (typeof R == 'string' || typeof c == 'string') {
    throw 'Invalid parameter type';
  }

  if (R == undefined || c == undefined) {
    throw 'Two parameters are required';
  }

  return R * c;
};