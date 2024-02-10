const mongoose = require("mongoose")

const Schema = mongoose.Schema

const PostSchema = new Schema({
    title: { type: String, required: true },
    post: { type: String, required: true },
    likes: { type: Number, default: 0},
    publish_date: { type: Date, default: Date.now() },
})

PostSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/posts/${this._id}`;
  });

module.exports = mongoose.model("Posts", PostSchema)