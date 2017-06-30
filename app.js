'use strict';

var express = require('express'),
    app = express(),
    load = require('express-load');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

//Load Controllers / Models / Views
load('library')
    .then('models')
    .then('controllers')
    .then('routes')
    .into(app);

app.listen(PORT, HOST);
console.log('Running on http://' + HOST + ':' + PORT);