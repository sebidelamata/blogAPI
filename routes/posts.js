const express = require("express")
const router = express.Router()

const post_controller = require('../controllers/postController')

router.post('/create', post_controller.posts_create_post)

router.get('/all_posts', post_controller.posts_list)

router.post('/:id/delete', post_controller.posts_delete_post)

router.post('/:id/update', post_controller.posts_update_post)

router.post('/:id/publish', post_controller.posts_publish_post)

router.post('/:id/unpublish', post_controller.posts_unpublish_post)

router.post('/:id/like', post_controller.posts_like_post)

router.post('/:id/unlike', post_controller.posts_unlike_post)

router.get('/:id', post_controller.posts_detail)

module.exports = router