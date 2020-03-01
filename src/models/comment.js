'use strict'
const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    id: Number, // 숫자, 자동 생성
    todoId: Number, // 할일 ID
    contents: String, // 문자열, 필수값
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

CommentSchema.plugin(autoIncrement.plugin, {
  model: 'comment',
  field: 'id',
  startAt: 1,
  increment: 1
});

const Comment = mongoose.model('comment', CommentSchema)
module.exports = Comment
