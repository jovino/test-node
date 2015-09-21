var express = require('express');
var router = express.Router();
var nano = require('nano')('http://localhost:5984');

var expensesDb = nano.db.use('expenses');
/* GET users listing. */
router.get('/expenses', function(req, res, next) {

  expensesDb.view('expenses','byName', function(err, body){
    var responseRows = [];
    for(var i=0; i<body.rows.length;i++)
    {
      responseRows.push( body.rows[i].value);
    }
    res.send(responseRows);
  }
);
});

module.exports = router;
