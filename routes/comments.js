const express = require("express")
const router = express.Router()

const comment_controller = require('../controllers/commentController')

router.get('/create', comment_controller.comments_create_get)

router.post('/create', comment_controller.comments_create_post)

router.get('/all_posts', comment_controller.comments_list)

router.get('/:id/delete', comment_controller.comments_delete_get)

router.post('/:id/delete', comment_controller.comments_delete_post)

router.get('/:id/like', comment_controller.comments_like_get)

router.post('/:id/like', comment_controller.comments_like_post)

router.get('/:id', comment_controller.comments_detail)

