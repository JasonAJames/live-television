var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

// Browser Cache
// var cacheTime = 86400000*7;     // 7 days
app.use( express.static(__dirname + '/dist') );

// app.use( express.static(__dirname + '/dist',{ maxAge: cacheTime } ) );

app.use(function (req, res, next) {
  if (req.url.match(/^\/(css|js|img|font)\/.+/)) {
      res.setHeader('Cache-Control', 'public, max-age=3600'); // cache header
  }
  next();
});

app.get('/*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, '/dist'));
  });

var listener = server.listen(process.env.PORT || 8080, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 5000
});