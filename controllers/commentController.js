const Comments = require("../models/comments")
const asyncHandler = require("express-async-handler")

exports.comments_list = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Comments Lists")
})

exports.comments_detail = asyncHandler(async (req, res, next) => {
    res.send(`Not Implemented: Comments Detail ${req.params.id}`)
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