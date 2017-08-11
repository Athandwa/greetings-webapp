var express = require('express');
var app = express();
var greetedNames = [];

// create a route
app.get('/', function (req, res) {
 res.send('Hello World!');
});

// create a route
app.get('/greeted', function (req, res) {
 res.send(greetedNames);
});

//creat new route
app.get('/greetings/:name', function (req, res) {
 res.send('Hello, ' + req.params.name);
  greetedNames.push(req.params.name)
});

//start the server
var server = app.listen(3000, function () {

 var host = server.address().address;
 var port = server.address().port;

 console.log('Example app listening at http://%s:%s', host, port);

});
