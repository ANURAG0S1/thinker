const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  likes: {
    type: Number,
    default: 0,
  },
  likers: [
    {
      name: { type: String, required: true },
      date: Date.now(),
    },
  ],
});
