// CREATE A CALCULATOR IN A NEW FOLDER CALLED CALC_EXPRESS
// INSTALL EXPRESS AND MORGAN

const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));

// THE APP SHOULD HAVE THE FOLLOWING ROUTES
app.get('/add/:num1:num2', function (req, res) {
  // let num1 = req.params.num1;
  const num1 = parseInt(req.query.num1);
  // let num2 = req.params.num2;
  const result = (num1 + num2);
  // const result = (num1 + num2).toString();
  //or
  const result = (parseInt(num1) + parseInt(num2).toString());
  // res.send(result);
  // res.send(`${num1} + ${num2}`);
  res.send(result);

});
// '/add' WHICH WILL TAKE TWO QUERY PARAMS, ADD THEM TOGETHER, AND SEND THE RESULT TO THE USER

app.get('/subtract', function (req, res) {
  let num1 = req.params.num1;
  let num2 = req.params.num2;
  const result = num1 - num2
  res.send(result);
});
// '/subtract' WHICH WILL TAKE TWO QUERY PARAMS, SUBTRACT THEM TOGETHER, AND SEND THE RESULT TO THE USER

app.get('/divide', function(req, res) {
  let num1 = req.params.num1;
  let num2 = req.params.num2;
  res.send(result(num1 / num2));
});
// '/divide' WHICH WILL TAKE TWO ROUTE PARAMS, DIVIDE THEM, AND SEND THE RESULT TO THE USER

app.get('/multiply', function(req, res) {
  let num1 = req.params.num1;
  let num2 = req.params.num2;
  res.send(result(num1 * num2));
});
// '/multiply' WHICH WILL TAKE TWO ROUTE PARAMS, MULTIPLY THEM TOGETHER, AND SEND THE RESULT TO THE USER

app.listen(3000)
