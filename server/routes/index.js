var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
})
.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
