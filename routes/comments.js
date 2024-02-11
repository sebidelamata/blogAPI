const express = require("express")
const router = express.Router()

const comment_controller = require('../controllers/commentController')

router.post('/create', comment_controller.comments_create_post)

router.get('/all_comments', comment_controller.comments_list)

router.post('/:id/delete', comment_controller.comments_delete_post)

router.post('/:id/like', comment_controller.comments_like_post)

router.post('/:id/unlike', comment_controller.comments_unlike_post)

router.get('/:id', comment_controller.comments_detail)

module.exports = router