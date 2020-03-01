'use strict'
import Todo from '../../models/todo'

module.exports = async (req, res) => {
  const {todoId} = req.params
  const result = await Todo.find({id: todoId}).select('-_id')
  return res.json(result[0])
}