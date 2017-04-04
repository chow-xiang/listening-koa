'use strict';

var App = require('./app-express');
// var App = require('./app-koa');

module.exports = koa;

function  koa () {
	return new App();
}


