var express = require('express');
var app = express();
var greetedNames = [];

// create a route
app.get('/', function (req, res) {
 res.send('Hello World!');
});

// create a route for names greeted
app.get('/greeted', function (req, res) {
 res.send(greetedNames);
});

//creat a route to greet people
app.get('/greetings/:name', function (req, res) {
 res.send('Hello, ' + req.params.name);
  greetedNames.push(req.params.name)
});

//creat route for counter
app.get('/counter/:name', function(req, res) {
    var name = req.params.name;

    var greetCounter = [];

    //loop through all the names greeted
    greetedNames.forEach(function(name) {

        if (greetCounter[name] === undefined) {
            greetCounter[name] = 0;
        }
        // increment the counter for each name greeted
        greetCounter[name] = greetCounter[name] + 1;
    });
    console.log((greetCounter));
    res.send(name + " " + "has been greeted " + greetCounter[name] + " " + 'time(s)')
});

//start the server
var server = app.listen(3000, function () {

 var host = server.address().address;
 var port = server.address().port;

 console.log('Example app listening at http://%s:%s', host, port);

});
