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
    .isLength({ min: 1 })
    .escape(),

    body("post", "Post must be at least one character long")
    .trim()
    .isLength({ min: 1 })
    .escape(),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req)

        const post = new Posts({
            title: req.body.title,
            post: req.body.post,
            publish_date: new Date()
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
    const post = await Posts.findByIdAndDelete(req.params.id)
    .exec()
    if(post === null){
        res.status(400).json('This post does not exist')
        return
    } else {
        res.status(201).json({message: 'Form submitted successfully'})
        return
    }
})

exports.posts_update_post = [
    body("title", "Title must be at least one character long")
    .trim()
    .isLength({ min: 1 })
    .escape(),

    body("post", "Post must be at least one character long")
    .trim()
    .isLength({ min: 1 })
    .escape(),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req)

        const post = new Posts({
            title: req.body.title,
            post: req.body.post,
            likes: req.body.likes,
            published: req.body.published,
            _id: req.params.id
        })

        if(!errors.isEmpty()){
            res.status(400).json({ post, errors: errors.array() })
        } else {

            await Posts.findByIdAndUpdate(req.params.id, post, {})
            res.status(201).json({message: 'Form submitted succesfully' })
            return
        }


    })
]

exports.posts_like_post = asyncHandler(async (req, res, next) => {
    const post = await Posts.findById(req.params.id)
    .exec()
    console.log(post)

    if(post === null){
        res.status(400).json('This post does not exist')
        return
    } else {
        post.likes += 1
        await Posts.findByIdAndUpdate(req.params.id, post, {})
        res.status(201).json({message: 'Form submitted succesfully' })
        return
    }
})

exports.posts_unlike_post = asyncHandler(async (req, res, next) => {
    const post = await Posts.findById(req.params.id)
    .exec()
    console.log(post)

    if(post === null){
        res.status(400).json('This post does not exist')
        return
    } else {
        post.likes -= 1
        await Posts.findByIdAndUpdate(req.params.id, post, {})
        res.status(201).json({message: 'Form submitted succesfully' })
        return
    }
})

exports.posts_publish_post = asyncHandler(async (req, res, next) => {
    const post = await Posts.findById(req.params.id)
    .exec()
    console.log(post)

    if(post === null){
        res.status(400).json('This post does not exist')
        return
    } else {
        post.published = true
        await Posts.findByIdAndUpdate(req.params.id, post, {})
        res.status(201).json({message: 'Form submitted succesfully' })
        return
    }
})

exports.posts_unpublish_post = asyncHandler(async (req, res, next) => {
    const post = await Posts.findById(req.params.id)
    .exec()
    console.log(post)

    if(post === null){
        res.status(400).json('This post does not exist')
        return
    } else {
        post.published = false
        await Posts.findByIdAndUpdate(req.params.id, post, {})
        res.status(201).json({message: 'Form submitted succesfully' })
        return
    }
})
