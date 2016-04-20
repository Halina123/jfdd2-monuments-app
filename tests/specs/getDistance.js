QUnit.module('Get Distance From Marker');


QUnit.test("local variables", function (assert) {
  var R = 6371;
  assert.equal(R, 6371, "Assign a value to the variable R.");
});


QUnit.test('degrees to radians', function (assert) {
  assert.equal(dLat(0, 59.95), 59.95, 'subtracting 0° (Equator) and 59°57’N (Oslo).');
  assert.equal(dLat(51.48, 59.95), 8.470000000000006, 'subtracting 51°28’48″N (Greenwich) and 59°57’N (Oslo).');
  assert.equal(dLat(59.95, -33.925278), -93.87527800000001, 'subtracting 59°57’N (Oslo) and 33°55’31″S (Cape Town).');
  assert.equal(dLat(undefined, 0), 0, 'Only second parameter is given.');
  assert.equal(dLon(0, 18.6333), 18.6333, 'subtracting 0° (Greenwich) and 18°38’E (Gdansk).');
  assert.equal(dLon(10.75, 18.6333), 7.883299999999998, 'subtracting 10°45’E (Oslo) and 18°38’E (Gdansk).');
  assert.equal(dLon(18.6333, -74.0059), -92.63919999999999, 'subtracting 18°38’E (Gdansk) and 74°0’21″W (New York City).');
  assert.equal(dLon(undefined, 0), 0, 'Only second parameter is given.');
});


QUnit.test('degrees to radians - exceptions', function (assert) {
  assert.throws(
    function () {
      dLat('one', 'two')
    },
    /Invalid parameter/,
    'Two strings passed.'
  );

  assert.throws(
    function () {
      dLon('one', 'two')
    },
    /Invalid parameter/,
    'Two strings passed.'
  );

  assert.throws(
    function () {
      dLat('one')
    },
    /Invalid parameter/,
    'First parameter is a string.'
  );

  assert.throws(
    function () {
      dLon('one')
    },
    /Invalid parameter/,
    'First parameter is a string.'
  );

  assert.throws(
    function () {
      dLat(undefined, 'one')
    },
    /Invalid parameter/,
    'Second parameter is a string.'
  );

  assert.throws(
    function () {
      dLon(undefined, 'one')
    },
    /Invalid parameter/,
    'Second parameter is a string.'
  );
});


QUnit.test('arcus tangens', function (assert) {
  assert.equal(2 * Math.atan2(Math.sqrt(90), Math.sqrt(15)), 2.366399280279432, 'Counterclockwise angle in radians y = 90, x = 15.');
  assert.equal(2 * Math.atan2(Math.sqrt(15), Math.sqrt(90)), 0.7751933733103613, 'Counterclockwise angle in radians y = 15, x = 90.');
  assert.equal(2 * Math.atan2(Math.sqrt(0), Math.sqrt(0)), 0, 'Counterclockwise angle in radians y = 0, x = 0.');
});


QUnit.test('multiply parameters', function (assert) {
  assert.equal(d(6371, 0.5), 3185.5, 'Multiply 6371 and 0.5.');
  assert.equal(d(-20, 10), -200, 'Multiply -20 and 10.');
  assert.equal(d(-10, -10), 100, 'Multiply -10 and -10.');
  assert.equal(d(6371, 0), 0, 'Multiply 6371 and 0.');
  assert.equal(d(0, 6371), 0, 'Multiply 0 and 6371.');
});


QUnit.test('multiply parameters - exceptions', function (assert) {

  assert.throws(
    function () {
      d('one', 'two')
    },
    /Invalid parameter/,
    'Two strings passed.'
  );

  assert.throws(
    function () {
      d('one')
    },
    /Invalid parameter/,
    'First parameter is a string.'
  );

  assert.throws(
    function () {
      d(undefined, 'one')
    },
    /Invalid parameter/,
    'Second parameter is a string.'
  );

  assert.throws(
    function () {
      d(10)
    },
    /Two parameters are required/,
    'Passing only first parameter throws exception.'
  );

  assert.throws(
    function () {
      d(undefined, 10)
    },
    /Two parameters are required/,
    'Passing only second parameter throws exception.'
  );
});