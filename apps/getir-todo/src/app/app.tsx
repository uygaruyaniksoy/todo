import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TodoInputField } from './components/todoInputField';
import { TodosList } from './components/todoList';
import { loadTodos } from './state/actions/todos.action';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  return (
    <>
      <TodoInputField/>
      <TodosList/>
    </>
  );
};

export default App;
