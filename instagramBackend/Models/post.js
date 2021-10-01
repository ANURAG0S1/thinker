const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  name: String,
  date: { default: Date.now(), type: Date },
  postCaption: {
    type: String,
    required: true,
  },
  postLikes: {
    likes: {
      type: Number,
      default: 0,
    },
    likers: {
      type: [
        {
          name: { type: String },
          liketype: {
            type: String,
            default: 'heart',
            enum: ['heart', 'thumbs', 'osm', 'dislike'],
          },
        },
      ],
      default: undefined,
    },
  },
  postComments: {
    noOfcomments: 0,
    Comments: {
      type: [
        {
          name: String,
          id: String,
          comment: String,
          time: { default: Date.now(), type: Date },
          commentLikes: 0,
        },
      ],
    },
  },
});

const demoData = {
  name: 'seema',
  postCaption: '',
  postLikes: {
    likes: 12,
    likers: [{ name: 'anurag', liketype: 'heart' }],
  },
  postComments: {
    noOfcomments: 12,
    Comments: [
      {
        name: 'random',
        id: 'anonymous',
        comment: 'you are awesome',
      },
    ],
  },
};
const post = new mongoose.model('post', postSchema);

module.exports = post;
