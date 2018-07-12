var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Classic Site');
});

app.get('/feature', function(req, res){
    res.send('Classic site feature');
});

app.listen(8080, function () {
    console.log('started');
});