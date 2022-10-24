const express=require('express');
const router=express.Router();
const controller=require('../controllers/blogController');


router.get('/',controller.getListBlog);
router.get('/blog/:id',controller.getBlogById);
router.post('/blog/add',controller.createNewBlog);
router.get('/create-form',controller.getForm);
router.post('/blog/:id/comment',controller.addComment);
router.delete('/blog/:id/delete',controller.deleteBlog);
router.put('/blog/:id/update',controller.handleUpdate);

module.exports={
    router,
}