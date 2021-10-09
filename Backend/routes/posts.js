const express = require('express');
const route = express.Router();
const post = require('./../Models/post');
const user = require('./../Models/user');

route.use(express.json());

const validuser = async function (req, res, next) {
  const result = await user.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  console.log('middleware initiated');
  if (!result) {
    console.log('middleware faileds');
    res.end();
  } else {
    console.log('middleware passed');
    next();
  }
};
route.use('/newpost', validuser);
route.post('/newpost', async (req, res) => {
  try {
    var requestContent = req.body;
    var result = new post(requestContent);
    var resu = await result.save(function (err, success) {
      if (err) return console.error(err);
      console.log(success);
      res.json(resu);
    });
  } catch (error) {
    res.send(error.message);
  }
});

route.get('/post/:id', (req, res) => {
  res.send('this is the post body with id of ' + req.params.id);
});

route.get('/delall/', async (req, res) => {
  var result = await post.deleteMany();
  res.send('databse has been cleared ' + result);
});
route.get('/all', async (req, res) => {
  const result = await post.find();
  res.send(result);
});
module.exports = route;
