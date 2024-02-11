const Posts = require("../models/posts")
const asyncHandler = require("express-async-handler")
const { body, validationResult } = require("express-validator");


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

exports.posts_create_post = [
    body("title", "Title must be at least one character long")
    .trim()
    .isLength({ min: 3 })
    .escape(),

    body("post", "Post must be at least one character long")
    .trim()
    .isLength({ min: 3 })
    .escape(),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req)

        const post = new Posts({
            title: req.body.title,
            post: req.body.post
        })

        if(!errors.isEmpty()){
            res.status(400).json({ post, errors: errors.array() })
            return
        } else {
            await post.save()
            res.status(201).json({message: 'Form submitted succesfully' })
            return
        }
    })
]

exports.posts_delete_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Posts Delete Posts")
})

exports.posts_update_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Posts Update Posts")
})

exports.posts_like_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Posts like Post")
})

exports.posts_unlike_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Posts unlikelike Post")
})

exports.posts_publish_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Posts publish Posts")
})

exports.posts_unpublish_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Posts unpublish Post")
})
