import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: [String],
  isCompleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: Date,
});

todoSchema.plugin(require('@meanie/mongoose-to-json')); // _id to id (https://www.npmjs.com/package/@meanie/mongoose-to-json)
module.exports = mongoose.model('todo', todoSchema);
