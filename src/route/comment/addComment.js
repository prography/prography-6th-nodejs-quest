'use strict'
import Comment from '../../models/comment'

module.exports = async (req, res) => {
  const {todoId} = req.params
  const {contents} = req.body
  if (!contents) {
    return res.status(400).json({
      errorMsg: '필수값들을 입력해주세요'
    })
  }
  let result = await new Comment({
    todoId,
    contents
  }).save()
  result = result.toObject()
  delete result._id
  delete result.todoId
  return res.json(result)
}