var express = require('express')
var router = express.Router();
var appRootPath = require('app-root-path');
var datastorage = require(appRootPath + '/utils/datastorage.js'); 

router.get('/',function(req, res){
	console.dir(datastorage.tasks);
	res.json(datastorage.tasks);
});

router.post('/',function(req, res){
	datastorage.tasks.push(req.body.task);
});

module.exports = router; 
