const express = require('express');
const route = express.Router();
const post = require('../Models/post');

route.use(express.json());

route.post('/:id', async (req, res) => {
  try {
    var requestContent = req.body;
    var lstcmt = await post.find({ _id: req.params.id });
    var latestcmnts = lstcmt[0].postComments.Comments;

    var poste = await post.findByIdAndUpdate(req.params.id, {
      ...this.post,
      postComments: {
        Comments: [...latestcmnts, requestContent],
      },
    });

    var resu = await poste.save(function (err, success) {
      if (err) return console.error(err);

      res.send(poste);
    });
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

route.get('/:id', async (req, res) => {
  var poste = await post.find({ _id: req.params.id });
  console.log(poste);
  res.send(poste);
});

// route.get('/post/', (req, res) => {
//   res.send('this is the post body with all ');
// });
// route.get('/all', async (req, res) => {
//   const result = await post.find();
//   res.json(result);
// });
module.exports = route;
