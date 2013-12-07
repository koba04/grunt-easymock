'use strict';

var grunt = require('grunt');
var http = require('http');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

function get(url, done) {
  http.get(url, function(res) {
    var body = '';
    res
    .on('data', function(chunk) {
      body += chunk;
    })
    .on('end', function() {
      done(res, body);
    });
  });
}

exports.easymock = {
  easymock_options: function(test) {
    test.expect(1);
    get('http://localhost:30000/', function(res, body) {
      test.deepEqual(JSON.parse(body), {key:"api1"});
      test.done();
    });
  },
  easymock_config: function(test) {
    test.expect(1);
    get('http://localhost:30000/users/mock', function(res, body) {
      test.deepEqual(JSON.parse(body), {name:"mock"});
      test.done();
    });
  },
};
