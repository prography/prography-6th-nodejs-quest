'use strict'
import Todo from '../../models/todo'

module.exports = async (req, res) => {
  const {todoId} = req.params
  let result = await Todo.findOneAndUpdate({
    id: todoId
  }, {isCompleted: true}, {new: true})
  if (!result) return res.status(404).send()
  result = result.toObject()
  delete result._id
  return res.json(result)
}