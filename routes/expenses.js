var express = require('express');
var router = express.Router();
var nano = require('nano')('http://localhost:5984');

var expensesDb = nano.db.use('expenses');
/* GET users listing. */
router.get('/expenses', function(req, res, next) {

  expensesDb.view('expenses','byName', function(err, body){
    res.send(body.rows);
  }
);
});

module.exports = router;
