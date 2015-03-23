const port = process.env.NODE_PORT || 9090;

var http = require('http');
var path = require('path');
var express = require('express');
var swig = require('swig');

var app = express();

app.set('port', port);
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/layouts'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (req, res) {
    res.render('base.html', {
        mainJS: 'http://localhost:8080/build/bundle.js'
    });
});

http.createServer(app).listen(app.get('port'), function () {
    console.info('Demo app is listening on localhost:%s"', app.get('port'));
});
