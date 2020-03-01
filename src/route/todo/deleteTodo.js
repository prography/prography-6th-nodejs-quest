'use strict'
import Todo from '../../models/todo'

module.exports = async (req, res) => {
  const {todoId} = req.params
  const result = await Todo.findOneAndDelete({
    id: todoId
  })
  if (!result) return res.status(404).send()
  return res.json({
    msg: 'success'
  })
}