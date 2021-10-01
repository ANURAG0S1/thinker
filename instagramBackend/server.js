var express = require('express');
const mongoose = require('mongoose');
const app = new express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

mongoose
  .connect(
    'mongodb+srv://anurag:0213@cluster0.powe3.mongodb.net/instagram?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => console.log('Database connected!'))
  .catch((err) => console.log(err));

app.use('/', require('./routes/posts'));
app.use('/user', require('./routes/users'));
app.use('/comment', require('./routes/comments'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('server is listening at ', PORT);
});
