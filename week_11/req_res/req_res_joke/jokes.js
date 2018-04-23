//CREATE A NEW APPLICATION INSDIE A JOKES_APP FOLDER
//CREATE A PACKAGE JSON
//INSTALL EXPRESS // MORGAN
//HAVE THE APP LISTEN ON PORT 3000
//YOU SHOULD HAVE THE FOLLOWING ROUTES

// '/about' SHOULD GIVE A BRIEF DESCRIPTION ABOUT THE application
// '/bananas' SHOULD GIVE A JOKE ABOUT bananas
// '/joke' should return a random joke (out of 3 jokes)
// '/joke/:name' should return a personalized joke


const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));

app.get('/about', function(req, res) {
  res.send('APP THAT TELLS DAD JOKES');
});

app.get('/bananas', function(req, res) {
  res.send('Why do bananas wear suntan lotion? A: Because they peel!');
});

app.get('/joke', function(req, res) {
  const jokes = ['What do you call two banana skins? A: A pair of slippers',
  'What is the hippest kind of fruit? A: A bae-nae-nae.',
  'What did the banana do when he saw a monkey? A: The banana split!'];
  const index = Math.floor(Math.random * Math.floor(2))
  res.send(jokes[index]);
});

app.get('/joke/:name', function(req, res) {
  const name = req.params.name;
  res.send(`funny joke for ${name}`);
});

app.listen(3000);
