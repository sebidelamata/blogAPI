const mongoose = require("mongoose")

const Schema = mongoose.Schema

const CommentSchema = new Schema({
    comment: { type: String, required: true },
    likes: { type: Number, default: 0},
    publish_date: { type: Date, default: Date.now() },
    post_id: {type: Schema.Types.ObjectId, required: true}
})

module.exports = mongoose.model("Comments", CommentSchema)