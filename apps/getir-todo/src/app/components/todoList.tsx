import { useSelector } from 'react-redux';
import { selectTodoState } from '../state/selectors/todos.selector';
import { TodoItem } from './todoItem';

export const TodosList = () => {
  const {todos} = useSelector(selectTodoState);

  return <>
    {todos.map(todo => <TodoItem key={todo._id} todo={todo}/>)}
  </>;
};

