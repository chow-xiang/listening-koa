'use strict';

var co   = require('./my-co');
var http = require('http');


module.exports = class App{

	constructor(){

		this.mids = []
	}
	use(mid){

		this.mids.push(mid);
	}
	listen(opt){

		var mids = this.mids;
		var server = http.createServer((req, res) => {

			for(let i=0;i<mids.length;i++){
				co(function* () {
					yield done => {
						mids[i](req, res);
						done()
					}
				})
			}
		})
		server.listen((opt && opt.port) || 8080);
	}
}