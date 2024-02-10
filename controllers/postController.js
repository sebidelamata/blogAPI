const Posts = require("../models/posts")
const asyncHandler = require("express-async-handler")

exports.posts_list = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Posts Lists")
})

exports.posts_detail = asyncHandler(async (req, res, next) => {
    res.send(`Not Implemented: Post Detail ${req.params.id}`)
})

exports.posts_create_get = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Posts Create Get")
})

exports.posts_create_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Posts Create Posts")
})

exports.posts_delete_get = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Posts Delete Get")
})

exports.posts_delete_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Posts Delete Posts")
})

exports.posts_update_get = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Posts Update Get")
})

exports.posts_update_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Posts Update Posts")
})