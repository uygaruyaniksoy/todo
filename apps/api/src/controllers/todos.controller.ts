import { Request, Response } from 'express';
import { Types } from 'mongoose';
import { TodoModel } from '../models/todo-model';

export const postTodo = async (req: Request, res: Response) => {
  const {text, deadline} = req.body;

  if (text === undefined || text.length === 0) {
    return res.status(400).send('Todo text must not be empty');
  }

  const newTodo = new TodoModel({text, deadline, completed: false});
  await newTodo.save();

  res.status(200).send(newTodo);
};

export const getTodos = async (req: Request, res: Response) => {
  const todos = await TodoModel.find();

  res.status(200).send(todos);
};

export const editTodo = async (req: Request, res: Response) => {
  const {id} = req.params;
  const {_id, ...todo} = req.body;

  if (todo.text === undefined || todo.text.length === 0) {
    return res.status(400).send('Todo text must not be empty');
  }

  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).send('Incorrect id for todo');
  }

  const oldTodo = await TodoModel.findById(id);

  if (oldTodo === null) {
    return res.status(400).send('Can\'t update non existent todo');
  }

  const newTodo = {...oldTodo.toObject(), ...todo};
  await TodoModel.findByIdAndUpdate(id, {$set: newTodo});

  res.status(200).send('Successfully updated');
};

export const deleteTodo = async (req: Request, res: Response) => {
  const {id} = req.params;

  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).send('Incorrect id for todo');
  }

  const todo = await TodoModel.findOne({_id: id});

  if (todo  === null) {
    return res.status(400).send('Can\'t update non existent todo');
  }

  await TodoModel.findByIdAndDelete(id);

  res.status(200).send('Successfully deleted');
};
