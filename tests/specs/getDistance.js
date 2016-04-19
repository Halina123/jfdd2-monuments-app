QUnit.module('Get Distance From Marker');

QUnit.test('degrees to radians', function (assert) {
  assert.equal(dLat(0, 59.95), 59.95, 'subtracting 0° (Equator) and 59°57’N (Oslo)');
  assert.equal(dLat(51.48, 59.95), 8.470000000000006, 'subtracting 51°28’48″N (Greenwich) and 59°57’N (Oslo)');
  assert.equal(dLat(59.95, -33.925278), -93.87527800000001, 'subtracting 59°57’N (Oslo) and 33°55’31″S (Cape Town)');
  assert.equal(dLat(undefined, 0), 0, 'Only second parameter is given');
  assert.throws(
    function () {
      dLat('one', 'two')
    },
    /Invalid parameter/,
    'Two strings passed'
  );
  assert.throws(
    function () {
      dLat('one')
    },
    /Invalid parameter/,
    'First parameter is a string'
  );
  assert.throws(
    function () {
      dLat(undefined, 'one')
    },
    /Invalid parameter/,
    'Second parameter is a string'
  );
  assert.equal(dLon(0, 18.6333), 18.6333, 'subtracting 0° (Greenwich) and 18°38’E (Gdansk)');
  assert.equal(dLon(10.75, 18.6333), 7.883299999999998, 'subtracting 10°45’E (Oslo) and 18°38’E (Gdansk)');
  assert.equal(dLon(18.6333, -74.0059), -92.63919999999999, 'subtracting 18°38’E (Gdansk) and 74°0’21″W (New York City)');
  assert.equal(dLon(undefined, 0), 0, 'Only second parameter is given');
  assert.throws(
    function () {
      dLon('one', 'two')
    },
    /Invalid parameter/,
    'Two strings passed'
  );
  assert.throws(
    function () {
      dLon('one')
    },
    /Invalid parameter/,
    'First parameter is a string'
  );
  assert.throws(
    function () {
      dLon(undefined, 'one')
    },
    /Invalid parameter/,
    'Second parameter is a string'
  );
});

QUnit.test('arcus tangens', function (assert) {
assert.equal(Math.atan2(90, 15), 1.4056476493802699, 'Both parameters are given');
assert.equal(Math.atan2(15, 90), 0.16514867741462683, 'Both parameters are given');
assert.equal(Math.atan2(0, 0), 0, 'Both parameters are given');
assert.equal(Math.atan2(Infinity, Infinity), 0.7853981633974483, 'Both parameters are given');
});