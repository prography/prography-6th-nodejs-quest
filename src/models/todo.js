'use strict'
const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')
const Schema = mongoose.Schema

const TodoSchema = new Schema({
    id: Number, // 숫자, 자동 생성
    title: String, // 문자열, 필수값
    description: String, // 문자열, 필수 값,
    tags: [String], // 배열, 옵션 ex) ["prography", "nodejs"]
    isCompleted: Boolean, // 참불, 초깃값: false
    createdAt: Date, // 날짜, 생성시 자동 생성
    updatedAt: Date, // 날짜, 생성시 자동 생성, 수정시 자동 갱신,
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  })

TodoSchema.plugin(autoIncrement.plugin, {
  model: 'todo',
  field: 'id',
  startAt: 1,
  increment: 1
});

const Todo = mongoose.model('todo', TodoSchema)
module.exports = Todo
