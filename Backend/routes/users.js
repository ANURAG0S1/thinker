const express = require('express');
const route = express.Router();
const user = require('./../Models/user');
route.use(express.json());

let status = '';

const existingUser = async (req, res, next) => {
  const result = await user.findOne({
    username: req.body.username,
  });
  console.log('middleware initiated');
  if (!result) {
    console.log('user created successfully');
    status = true;
    next();
  } else {
    console.log('username unavailable');
    status = false;
    next();
  }
};

route.use(existingUser);
route.post('/', async (req, res) => {
  const passed = { message: 'user created successfully', status: true };
  const failed = { message: 'username unavailable', status: false };

  if (status) {
    try {
      var requestContent = req.body;
      var result = new user(requestContent);
      var resu = await result.save(function (err, success) {
        if (err) return console.error(err);
        console.log(success);
      });
      res.send(passed);
    } catch (error) {
      res.send(error.message);
    }
  } else {
    res.send(failed);
  }
});

route.get('/user/:id', (req, res) => {
  res.send('this is the user body with id of ' + req.params.id);
});

route.get('/all', async (req, res) => {
  const result = await user.find();
  res.json({ data: result });
});

module.exports = route;
