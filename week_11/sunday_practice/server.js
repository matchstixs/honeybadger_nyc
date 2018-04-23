// routing dictates what the user sees and does not see
// "/" is home
//
//
// how to make a controller
//
// 4 words associated to http
//   -put/patch
//   -post
//   -get
//   -delete

const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));

app.get('/something', function(req, res) {
  res.send('yayayaya');
});

app.get('/', function(req, res) {
// get request under http protocol
// accepts request and gives request
    // res argument is response
  res.send('HELLO WORLD');
  // app open port 3000 and listens for a request
});

app.get('/sayHello', function(req, res) {
  // queryString
  const name = req.query.name;

  res.send(`Hello ${name}`);
});

app.get('/teamName/:name', function(req, res) {
  // Parameters, dictated by whatever is after :
  const teamName = req.params.name;

  res.send(`LETS GO ${teamName}`);
});

app.listen(3000);


//CREATE A NEW APPLICATION INSDIE A JOKES_APP FOLDER
//CREATE A PACKAGE JSON
//INSTALL EXPRESS // MORGAN
//HAVE THE APP LISTEN ON PORT 3000
//YOU SHOULD HAVE THE FOLLOWING ROUTES

// '/about' SHOULD GIVE A BRIED DESCRIPTION ABOUT THE application
// '/bananas' SHOULD GIVE A JOKE ABOUT bananas
// '/joke' should return a random joke (out of 3 jokes)
// '/joke/:name' should return a personalized joke
