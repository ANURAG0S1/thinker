const express = require('express');
const route = express.Router();
const user = require('./../Models/user');

route.use(express.json());

const existingUser = async (req, res, next) => {
  const result = await user.findOne({
    username: req.body.username,
  });
  console.log('middleware initiated');
  if (!result) {
    console.log('username available');
    res.send({ message: 'username available', status: 'success' });
    next();
  } else {
    console.log('username unavailable');
    res.send({ message: 'username unavailable', status: 'failed' }).end();
  }
};

route.use(existingUser);
route.post('/', async (req, res) => {
  try {
    var requestContent = req.body;
    var result = new user(requestContent);
    var resu = await result.save(function (err, success) {
      if (err) return console.error(err);
      console.log(success);
    });
    res.json({ data: result });
  } catch (error) {
    res.send(error.message);
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
