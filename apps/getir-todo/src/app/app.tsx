import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TodoInputField } from './components/todoInputField';
import { TodosList } from './components/todoList';
import { TodosListCard } from './components/todosListCard';
import { loadTodos } from './state/actions/todos.action';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  return (
    <TodosListCard>
      <TodoInputField/>
      <TodosList/>
    </TodosListCard>
  );
};

export default App;
