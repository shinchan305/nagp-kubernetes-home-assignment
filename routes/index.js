var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  res.send(`
    <h1>Welcome to Node App!!</h1>
    <p>Click <a href="http://localhost:3000/users" target="_blank">here</a> and see what happens.</p>
  `);
});

module.exports = router;
