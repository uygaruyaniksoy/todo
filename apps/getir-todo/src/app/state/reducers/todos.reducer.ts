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
    case TodosActionType.LOAD_TODOS_SUCCCESS:
      return {todos: action.payload};
    default:
      return state;
  }
};

export default todosReducer;
