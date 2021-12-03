import { TodosState } from '../reducers/todos.reducer';
import { RootState } from '../store';

export const selectTodoState = (state: RootState): TodosState => state.todos;
