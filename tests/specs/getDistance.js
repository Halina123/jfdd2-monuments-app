QUnit.module('Get Distance From Marker');

QUnit.test('degrees to radians', function (assert) {
  assert.equal(dLat(0, 66.33), 66.33, 'subtracting 66°33’N (Arctic Circle) and 0° (Equator)');
  assert.equal(dLat(23.27, 66.33), 43.06, 'subtracting 66°33’N (Arctic Circle and 23°27’ (Tropic of Cancer)');
  assert.equal(dLat(undefined, 0), 0, 'Only second parameter is given');
  assert.equal(dLon(0, 66.33), 66.33, 'subtracting 66°33’N (Arctic Circle) and 0° (Equator)');
  assert.equal(dLon(23.27, 66.33), 43.06, 'subtracting 66°33’N (Arctic Circle and 23°27’ (Tropic of Cancer)');
  assert.equal(dLon(undefined, 0), 0, 'Only second parameter is given');
  assert.throws(
    function () {
      dLat('one', 'two')
      dLon('one', 'two')
    },
    /Invalid parameter/,
    'Two strings passed'
  );
  assert.throws(
    function () {
      dLat('one')
      dLon('one')
    },
    /Invalid parameter/,
    'First parameter is a string'
  );
  assert.throws(
    function () {
      dLat(undefined, 'one')
      dLon(undefined, 'one')
    },
    /Invalid parameter/,
    'Second parameter is a string'
  );
});