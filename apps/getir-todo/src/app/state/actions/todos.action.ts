import { Todo } from '@getir-todo/api-interfaces';
import { Action } from 'redux';

export enum TodosActionType {
  LOAD_TODOS = 'LOAD_TODOS',
  LOAD_TODOS_SUCCCESS = 'LOAD_TODOS_SUCCCESS',
  CREATE_TODO = 'CREATE_TODO',
  EDIT_TODO = 'EDIT_TODO',
  DELETE_TODOS = 'DELETE_TODOS',
  ERROR_TODOS = 'ERROR_TODOS',
}

export interface TodosAction extends Action<TodosActionType> {
  payload?: any;
}

export const loadTodos = (): TodosAction => ({
  type: TodosActionType.LOAD_TODOS,
});

export const loadTodosSuccess = (todos: Todo[]): TodosAction => ({
  type: TodosActionType.LOAD_TODOS_SUCCCESS,
  payload: todos,
});
