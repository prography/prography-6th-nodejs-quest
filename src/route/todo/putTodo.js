'use strict'
import Todo from '../../models/todo'

module.exports = async (req, res) => {
  const {todoId} = req.params
  const updateTarget = ['title', 'description', 'tags']
  const updateFields = {}
  updateTarget.map(key => {
    if (req.body[key]) updateFields[key] = req.body[key]
  })
  let result = await Todo.findOneAndUpdate({
    id: todoId
  }, updateFields, {new: true})
  result = result.toObject()
  delete result._id
  return res.json(result)
}