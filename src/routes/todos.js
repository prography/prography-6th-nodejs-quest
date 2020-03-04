import {postTodo} from '../controllers/todo.controller'
import {getTodos} from '../controllers/todo.controller'
import {getTodo} from '../controllers/todo.controller'
import {deleteTodo} from '../controllers/todo.controller'
import {updateTodo} from '../controllers/todo.controller'
import {completeTodo} from '../controllers/todo.controller'
import {getComments} from '../controllers/todo.controller'
import {postComment} from '../controllers/todo.controller'
import {getComment} from '../controllers/todo.controller'
import {updateComment} from '../controllers/todo.controller'
import {deleteComment} from '../controllers/todo.controller'


const express = require('express');
const router = express.Router();

router.get('/',getTodos)
router.post('/',postTodo)
router.get('/:todoId', getTodo)
router.delete('/:todoId', deleteTodo)
router.put('/:todoId', updateTodo)
router.put('/:todoId/complete', completeTodo)

router.get('/:todoId/comments', getComments)
router.post('/:todoId/comments', postComment)
router.get('/:todoId/comments/:commentID', getComment)
router.put('/:todoId/comments/:commentID', updateComment)
router.delete('/:todoId/comments/:commentID', deleteComment)



module.exports = router;