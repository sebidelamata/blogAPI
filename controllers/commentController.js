const Comments = require("../models/comments")
const asyncHandler = require("express-async-handler")

exports.comments_list = asyncHandler(async (req, res, next) => {
    const allComments = await Comments.find({})
    .sort({ publish_date: -1 })
    .exec()
    
    res.send(allComments)
})

exports.comments_detail = asyncHandler(async (req, res, next) => {
    const comment = await Comments.findById(req.params.id)

    res.send(comment)
})

exports.comments_create_get = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Comments Create Get")
})

exports.comments_create_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Comments Create Post")
})

exports.comments_delete_get = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Comments Delete Get")
})

exports.comments_delete_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Comments Delete Posts")
})

exports.comments_like_get = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Comments like Get")
})

exports.comments_like_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Comments like Posts")
})
