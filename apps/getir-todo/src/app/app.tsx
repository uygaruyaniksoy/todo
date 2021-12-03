import { Todo } from '@getir-todo/api-interfaces';
import { Paper, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos } from './state/actions/todos.action';
import { selectTodoState } from './state/selectors/todos.selector';

const TodoInputField = () => <TextField fullWidth/>;

const TodoItem = ({todo}: { todo: Todo }) => <Paper>{todo.text}</Paper>;
const TodosList = () => {
  const {todos} = useSelector(selectTodoState);

  return <>
    {todos.map(todo => <TodoItem key={todo._id} todo={todo}/>)}
  </>;
};

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
