var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.send('hello world');
});

router.use('/tasks', require('./tasks/tasks.js'));

module.exports = router;
