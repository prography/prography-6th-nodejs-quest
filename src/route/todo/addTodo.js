'use strict'
import Todo from '../../models/todo'

module.exports = async (req, res) => {
  const {title, description, tags} = req.body
  if (!title || !description || !tags) {
    return res.json({
      errorMsg: '필수값들을 입력해주세요'
    })
  }
  let result = await new Todo({
    title,
    description,
    tags,
    isCompleted: true
  }).save()
  result = result.toObject()
  delete result._id
  return res.json(result)
}