const Posts = require("../models/posts")
const asyncHandler = require("express-async-handler")

exports.posts_list = asyncHandler(async (req, res, next) => {
    const allPosts = await Posts.find({})
    .sort({ publish_date: -1 })
    .exec()

    res.send(allPosts)
})

exports.posts_detail = asyncHandler(async (req, res, next) => {
    const post = await Posts.findById(req.params.id)
    
    res.send(post)
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

exports.posts_like_get = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Posts like Get")
})

exports.posts_like_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Posts like Post")
})

exports.posts_publish_get = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Posts publish Get")
})

exports.posts_publish_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Posts publish Posts")
})

exports.posts_unpublish_get = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Posts unpublish Get")
})

exports.posts_unpublish_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Posts unpublish Post")
})
