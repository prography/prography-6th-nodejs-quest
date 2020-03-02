import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Tilte is required"
  },
  description: {
    type: String,
    required: "Description is required"
  },
  tags: {
    type: Array
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

TodoSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
  }
});

const model = mongoose.model("Video", TodoSchema);
export default model;
