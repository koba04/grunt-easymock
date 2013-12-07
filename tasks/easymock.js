/*
 * grunt-easymock
 * https://github.com/koba04/grunt-easymock
 *
 * Copyright (c) 2013 koba04
 * Licensed under the MIT license.
 */

'use strict';

var MockServer = require('easymock').MockServer;

module.exports = function(grunt) {
  grunt.registerMultiTask('easymock', 'easymock server', function() {

    var done = this.async();

    var options = this.options({});
    grunt.verbose.writeln(JSON.stringify(options));
    var keepalive = options.keepalive;
    delete options.keepalive;

    // start easymock
    var server = new MockServer(options);
    grunt.log.writeln('Starting easymock server');
    server.start();

    if (!keepalive) {
      done();
    }
  });
};
