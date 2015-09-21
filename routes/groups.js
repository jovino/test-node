var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([
    {id:1, text:'group 1'},
    {id:2, text:'group 2'},
    {id:3, text:'group 3'},
    {id:4, text:'group 4'},
    {id:5, text:'group 5'}
]);
});

module.exports = router;
