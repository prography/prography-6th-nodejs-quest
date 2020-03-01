'use strict'
import Comment from '../../models/comment'

module.exports = async (req, res) => {
  const {todoId, commentId} = req.params
  const result = await Comment.findOneAndDelete({
    id: commentId,
    todoId
  })
  if (!result) return res.status(404).send()
  return res.json({
    msg: 'success'
  })
}