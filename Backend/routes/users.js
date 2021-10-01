const express = require('express');
const route = express.Router();
const user = require('./../Models/user');

route.use(express.json());

route.post('/user', async (req, res) => {
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
