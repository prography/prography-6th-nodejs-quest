'use strict'
import Todo from '../../models/todo'

module.exports = async (req, res) => {
  const result = await Todo.find({}).select('-_id')
  return res.json(result)
}