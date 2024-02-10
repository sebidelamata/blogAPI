const express = require("express")
const router = express.Router()

const post_controller = require('../controllers/postController')

router.get('/create', post_controller.posts_create_get)

router.post('/create', post_controller.posts_create_post)

router.get('/all_posts', post_controller.posts_list)

router.get('/:id/delete', post_controller.posts_delete_get)

router.post('/:id/delete', post_controller.posts_delete_post)

router.get('/:id/update', post_controller.posts_update_get)

router.post('/:id/update', post_controller.posts_update_post)

router.get('/:id/like', post_controller.posts_like_get)

router.post('/:id/like', post_controller.posts_like_post)

router.get('/:id', post_controller.posts_detail)

module.exports = router