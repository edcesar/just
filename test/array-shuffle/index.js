var test = require('../util/test')(__filename);
var shuffle = require('../../packages/array-shuffle');
var compare = require('../../packages/collection-compare');

test('returns elements, randomly sorted', function(t) {
  t.plan(2);
  var arr = [1, 2, 3, 4, 5];
  var shuffled = shuffle(arr);
  t.equal(arr.length, shuffled.length);
  t.ok(compare(arr.sort(), shuffled.sort()));
  t.end();
});

test('returns duplicate when array has 0 or 1 element', function(t) {
  t.plan(2);
  var arr = [1];
  var shuffled = shuffle(arr);
  t.ok(compare(arr, shuffled));
  var arr2 = [];
  var shuffled2 = shuffle(arr2);
  t.ok(compare(arr2, shuffled2));
  t.end();
});

test('non-array arguments throw', function(t) {
  t.plan(4);
  t.throws(function() {
    shuffle({});
  });
  t.throws(function() {
    shuffle(undefined);
  });
  t.throws(function() {
    shuffle(null);
  });
  t.throws(function() {
    shuffle();
  });
  t.end();
});
