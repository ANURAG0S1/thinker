var express = require('express');
const mongoose = require('mongoose');
const app = new express();
var bodyParser = require('body-parser');
require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require('cors');
const user = require('./Models/user');

//middlewares
app.use(express.json());
app.use(cors());

// db connection
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected!'))
  .catch((err) => console.log(err));

// routes

app.use('/post', require('./routes/posts'));
app.use('/user', require('./routes/users'));
app.use('/comment', require('./routes/comments'));

// server listening om port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('server is listening at ', PORT);
});
