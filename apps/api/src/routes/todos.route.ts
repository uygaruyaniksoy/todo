import { Router } from 'express';
import { deleteTodo, editTodo, getTodos, postTodo } from '../controllers/todos.controller';

export const todosRouter = Router();

todosRouter.get('/', getTodos);
todosRouter.post('/', postTodo);
todosRouter.put('/:id', editTodo);
todosRouter.delete('/:id', deleteTodo);
