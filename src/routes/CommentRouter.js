// Import các module cần thiết
const express = require('express');
const router = express.Router();
const {
    createComment,
    updateComment,
    deleteComment,
    getAllComments,
    getCommentsByArticleId
} = require('../controllers/CommentController');

// Định nghĩa các routes và gắn các controller tương ứng
router.post('/', createComment);
router.put('/:id', updateComment);
router.delete('/:id', deleteComment);
router.get('/', getAllComments);
router.get('/:articleId', getCommentsByArticleId);
// Export Router để sử dụng ở những file khác
module.exports = router;
