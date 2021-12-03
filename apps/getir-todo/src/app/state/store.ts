import { applyMiddleware, combineReducers, createStore } from 'redux';
import todosReducer from './reducers/todos.reducer';
import createSagaMiddleware from 'redux-saga';
import todosSaga from './sagas/todos.saga';

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
  todos: todosReducer,
});

export const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(todosSaga);
