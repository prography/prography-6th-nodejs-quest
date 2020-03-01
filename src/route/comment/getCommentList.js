'use strict'
import Comment from '../../models/comment'

module.exports = async (req, res) => {
  const {todoId} = req.params
  const result = await Comment.find({todoId}).select('-_id -todoId')
  return res.json(result)
}