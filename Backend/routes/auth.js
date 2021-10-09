const express = require('express');
const userroute = express.Router();
const user = require('./../Models/user');

userroute.use(express.json());

userroute.post('/', async (req, res, next) => {
  try {
    var requestContent = req.body;
    var result = new user(requestContent);
    var resu = await result.save(function (err, success) {
      if (err) return console.error(err);
      console.log(success);
      res.send('user created with ', resu);
    });
  } catch (error) {}
  console.log('middleware');
});

userroute.post('/', async (req, res, next) => {
  try {
    var requestContent = req.body;
    var result = new user(requestContent);
    var resu = await result.save(function (err, success) {
      if (err) return console.error(err);
      console.log(success);
      next();
    });
  } catch (error) {}
});

userroute.get('/all', async (req, res) => {
  const result = await user.find();
  res.json(result);
});
module.exports = userroute;
