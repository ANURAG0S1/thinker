const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  likes: {
    type: Number,
    default: 0,
  },
  likers: [
    {
      name: { type: String, required: true },
      liketype: {
        type: String,
        default: 'heart',
        enum: ['heart', 'thumbs', 'osm', 'dislike'],
      },
    },
  ],
});
