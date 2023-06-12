var express = require('express');
var router = express.Router();
const USER = require("../models/user");

router.post('/store', async function (req, res, next) {
  try {
    console.log("inside post request");
    const user = await USER.create(req.body);
    res.send(user);
  } catch (err) {
    console.log(err);
  }
});

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const users = await USER.find({});
    res.send(users);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
