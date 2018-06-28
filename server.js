var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Message = require('./api/models/msgModel'),
bodyParser = require('body-parser');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', '*');

    next();
}

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/msgdb');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(allowCrossDomain);
var routes = require('./api/routes/msgRoutes');
routes(app);
app.listen(port);
console.log('Message RESTful API server started on: ' + port);