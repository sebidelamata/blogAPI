const mongoose = require("mongoose")
const { DateTime } = require("luxon");


const Schema = mongoose.Schema

const PostSchema = new Schema({
    title: { type: String, required: true },
    post: { type: String, required: true },
    likes: { type: Number, default: 0},
    publish_date: { type: Date, default: Date.now() },
    published: { type: Boolean, default: false }
})

PostSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/posts/${this._id}`;
  });

  PostSchema.virtual("published_date_formatted").get(function () {
    return DateTime.fromJSDate(this.publish_date).toLocaleString(DateTime.DATE_MED);
  });

module.exports = mongoose.model("Posts", PostSchema)