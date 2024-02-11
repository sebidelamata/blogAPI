const mongoose = require("mongoose")
const { DateTime } = require("luxon");


const Schema = mongoose.Schema

const CommentSchema = new Schema({
    comment: { type: String, required: true },
    likes: { type: Number, default: 0},
    publish_date: { type: Date, default: Date.now() },
    post_id: {type: Schema.Types.ObjectId, required: true}
})

CommentSchema.virtual("published_date_formatted").get(function () {
    return DateTime.fromJSDate(this.publish_date).toLocaleString(DateTime.DATE_MED);
  });
  

module.exports = mongoose.model("Comments", CommentSchema)