import { Todo } from '@getir-todo/api-interfaces';
import { Action } from 'redux';

export enum TodosActionType {
  LOAD_TODOS = 'LOAD_TODOS',
  LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS',
  CREATE_TODO = 'CREATE_TODO',
  CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS',
  EDIT_TODO = 'EDIT_TODO',
  EDIT_TODO_SUCCESS = 'EDIT_TODO_SUCCESS',
  DELETE_TODO = 'DELETE_TODO',
  DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS',
  ERROR_TODOS = 'ERROR_TODOS',
}

export interface TodosAction extends Action<TodosActionType> {
  payload?: any;
}

export const loadTodos = (): TodosAction => ({
  type: TodosActionType.LOAD_TODOS,
});

export const createTodo = (todo: Omit<Todo, '_id'>): TodosAction => ({
  type: TodosActionType.CREATE_TODO,
  payload: todo,
});

export const editTodo = (todo: Todo): TodosAction => ({
  type: TodosActionType.EDIT_TODO,
  payload: todo,
});

export const deleteTodo = (todo: Todo): TodosAction => ({
  type: TodosActionType.DELETE_TODO,
  payload: todo,
});

export const loadTodosSuccess = (todos: Todo[]): TodosAction => ({
  type: TodosActionType.LOAD_TODOS_SUCCESS,
  payload: todos,
});

export const createTodoSuccess = (todo: Todo): TodosAction => ({
  type: TodosActionType.CREATE_TODO_SUCCESS,
  payload: todo,
});

export const editTodoSuccess = (todo: Todo): TodosAction => ({
  type: TodosActionType.EDIT_TODO_SUCCESS,
  payload: todo,
});

export const deleteTodoSuccess = (todo: Todo): TodosAction => ({
  type: TodosActionType.DELETE_TODO_SUCCESS,
  payload: todo,
});
