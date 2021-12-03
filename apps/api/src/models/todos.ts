import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';

const Todos = mongoose.model('Todo', new Schema({
  text: String,
  completed: Boolean,
  deadline: Number,
}))
