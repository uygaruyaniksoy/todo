import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';

export const TodoModel = mongoose.model('Todo', new Schema({
  text: String,
  completed: Boolean,
  deadline: Number,
}))
