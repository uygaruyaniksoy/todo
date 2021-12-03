import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { loadTodosSuccess, TodosActionType } from '../actions/todos.action';

function* fetchTodos(): unknown {
  const response = yield call(() => axios.get('/api/todos'));
  const todos = response.data;
  yield put(loadTodosSuccess(todos));
}

function* todosSaga() {
  yield takeEvery(TodosActionType.LOAD_TODOS, fetchTodos)
}

export default todosSaga;
