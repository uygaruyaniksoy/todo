import { Todo } from '@getir-todo/api-interfaces';
import { Paper, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, loadTodos } from './state/actions/todos.action';
import { selectTodoState } from './state/selectors/todos.selector';

const TodoInputField = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      dispatch(createTodo({
        text,
        completed: false,
        deadline: 0,
      }))
    }
  }

  return <TextField fullWidth onChange={event => setText(event.target.value)} onKeyPress={handleKeyPress}/>;
}

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
