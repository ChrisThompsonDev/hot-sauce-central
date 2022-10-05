const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  /* caption: {
    type: String,
    required: true,
  }, */
  bottleInspection: {
    type: String,
    required: true,
  },
  pourability: {
    type: String,
    required: true,
  },
  smell: {
    type: String,
    required: true,
  },
  taste: {
    type: String,
    required: true,
  },
  heat: {
    type: String,
    required: true,
  },
  thoughts: {
    type: String,
    required: true,
  },
  purchase: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
