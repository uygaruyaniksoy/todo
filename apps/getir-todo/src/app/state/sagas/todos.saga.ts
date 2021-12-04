import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  createTodoSuccess,
  deleteTodoSuccess,
  editTodoSuccess,
  loadTodosSuccess,
  TodosAction,
  TodosActionType,
} from '../actions/todos.action';

function* loadTodos(): unknown {
  const response = yield call(() => axios.get('/api/todos'));
  const todos = response.data;
  yield put(loadTodosSuccess(todos));
}

function* createTodo({payload}: TodosAction): unknown {
  const response = yield call(() => axios.post('/api/todos', payload));
  const todo = response.data;
  yield put(createTodoSuccess(todo));
}

function* editTodo({payload: todo}: TodosAction): unknown {
  yield put(editTodoSuccess(todo));
  yield call(() => axios.put(`/api/todos/${todo._id}`, todo));
}

function* deleteTodo({payload: todo}: TodosAction): unknown {
  yield put(deleteTodoSuccess(todo));
  yield call(() => axios.delete(`/api/todos/${todo._id}`, todo));
}

function* todosSaga() {
  yield takeEvery(TodosActionType.LOAD_TODOS, loadTodos);
  yield takeEvery(TodosActionType.CREATE_TODO, createTodo);
  yield takeEvery(TodosActionType.EDIT_TODO, editTodo);
  yield takeEvery(TodosActionType.DELETE_TODO, deleteTodo);
}

export default todosSaga;
