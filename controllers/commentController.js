const Comments = require("../models/comments")
const asyncHandler = require("express-async-handler")
const { body, validationResult } = require("express-validator");


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

exports.comments_create_post = [
    body("comment", "Comment must be at least one character long")
    .trim()
    .isLength({ min: 3 })
    .escape(),

    asyncHandler(async (req, res, next) => {

    const errors = validationResult(req)

    const comment = new Comments({
        comment: req.body.comment,
        post_id: req.body.post_id
    })

    if(!errors.isEmpty()){
        res.status(400).json({ comment, errors: errors.array() })
        return
    } else {
        await comment.save()
        res.status(201).json({message: 'Form submitted succesfully' })
        return
    }
    })
]

exports.comments_delete_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Comments Delete Posts")
})

exports.comments_like_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Comments like Posts")
})

exports.comments_unlike_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Comments unlike Posts")
})
