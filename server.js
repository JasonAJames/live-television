var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

// app.use('/', function(req, res) {
//     express.static(__dirname + '/dist' );
//     });

app.use( express.static(__dirname + '/dist' ) );

var listener = server.listen(process.env.PORT || 8080, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 5000
});


// //Install express server
//const express = require('express');
//const app = express();

// app.configure('production', => {
//     app.use((req, res, next) => {
//       if (req.header 'x-forwarded-proto' !== 'https')
//         res.redirect(`https://${req.header('host')}${req.url}`)
//       else
//         next()
//     })
//   })

//   app.use((req, res, next) => {
//     if (req.header ['x-forwarded-proto'] !== 'https')
//       res.redirect(`https://${req.header('host')}${req.url}`)
//     else
//       next()
//   })


// Working
// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist'));

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);

// // server.js
// const express = require('express');
// const app = express();

// const path = require('path');

// // For all GET requests, send back index.html
// // so that PathLocationStrategy can be used
// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname + '/dist/index.html'));
//   });

// // If an incoming request uses
// // a protocol other than HTTPS,
// // redirect that request to the
// // same url but with HTTPS
// const forceSSL = function() {
//   return function (req, res, next) {
//     if (req.headers['x-forwarded-proto'] !== 'https') {
//       return res.redirect(
//        ['https://', req.get('Host'), req.url].join('')
//       );
//     }
//     next();
//   }
// }
// // Instruct the app
// // to use the forceSSL
// // middleware
// app.use(forceSSL());
// //