'use strict';

var koa = require('./koa');
var app = koa();

app.use(function (req, res, next) {
	req.a = 1;
	// next()
})

app.use(function (req, res, next) {
	res.end('hello world!')
	// next()
})


app.use(function (req, res, next) {
	res.end('404')
	// next()
})

app.listen({port: 3000})