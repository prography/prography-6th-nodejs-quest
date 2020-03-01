'use strict'
import Comment from '../../models/comment'

module.exports = async (req, res) => {
  const {todoId, commentId} = req.params
  const result = await Comment.find({todoId, id: commentId}).select('-_id -todoId')
  return res.json(result[0])
}