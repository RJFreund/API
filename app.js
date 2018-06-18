var express = require('express');
var app = express();
var router = express.Router();

app.use('/', require('./routes');
