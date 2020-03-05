import express from 'express';
const router = express.Router();
const todoController = require('../controller/todoController');

router.post('/', todoController.createTodo);
router.get('/', todoController.readTodos);
router.get('/:todoId', todoController.readTodo);
router.put('/:todoId', todoController.updateTodo);
router.put('/:todoId/complete', todoController.updateTodoToComplete);
router.delete('/:todoId', todoController.deleteTodo);

// router.post('/:todoId/comments', commentController.createComment);
// router.get('/:todoId/comments', commentController.readComments);
// router.get('/:todoId/comments/:commentId', commentController.readComment);
// router.put('/:todoId/comments/:commentId', commentController.updateComment);
// router.delete('/:todoId/comments/:commentId', commentController.deleteComment);
module.exports = router;
