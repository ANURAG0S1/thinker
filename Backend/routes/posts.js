const express = require('express');
const route = express.Router();
const post = require('./../Models/post');

route.use(express.json());

route.post('/post', async (req, res) => {
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
  res.json(result);
});
module.exports = route;
