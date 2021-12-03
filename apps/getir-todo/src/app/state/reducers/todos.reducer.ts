import { Todo } from '@getir-todo/api-interfaces';
import { TodosAction, TodosActionType } from '../actions/todos.action';

export interface TodosState {
  todos: Todo[]
}

const initialState: TodosState = {
  todos: [],
};

export const todosReducer = (state = initialState, action: TodosAction) => {
  switch (action.type) {
    case TodosActionType.LOAD_TODOS_SUCCESS:
      return {todos: action.payload};
    case TodosActionType.CREATE_TODO_SUCCESS:
      return {todos: [...state.todos, action.payload]};
    case TodosActionType.EDIT_TODO_SUCCESS:
      return {todos: state.todos.map(todo => todo._id === action.payload._id ? action.payload : todo)};
    case TodosActionType.DELETE_TODO_SUCCESS:
      return {todos: state.todos.filter(({_id}) => action.payload._id !== _id)};
    default:
      return state;
  }
};

export default todosReducer;
