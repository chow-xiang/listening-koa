'use strict';

var http = require('http');

module.exports = class App{

	constructor(){

		this.middleWares = [];
	}
	use(mid){

		this.middleWares.push(mid)
	}
	listen(opt){
		// is end
		var middleWares = this.middleWares;

		var server = http.createServer(function (req, res) {

			var runCHain = runChainFactory(req, res, middleWares);
			runCHain()
		})
		server.listen((opt && opt.port) || 8080);
	}
}

function runChainFactory(req, res, mids){
	return function run(i=0){
		var mid = mids[i];
		mid && mid(req, res, () => { run(++i) });
	}
}