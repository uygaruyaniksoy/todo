import { Todo } from '@getir-todo/api-interfaces';
import { Close } from '@mui/icons-material';
import { Checkbox, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../state/actions/todos.action';
import { FlexPaper } from './flexPaper';
import { TodoInputField } from './todoInputField';

export const TodoItem = ({todo}: { todo: Todo }) => {
  const [completed, setCompleted] = useState(todo.completed);
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();

  const updateTodo = (update: Partial<Todo>) => {
    dispatch(editTodo({...todo, ...update}));
  };

  useEffect(() => {
    if (completed !== todo.completed) {
      updateTodo({completed});
    }
  }, [completed]);

  const submitEdit = (update: Partial<Todo>): void => {
    updateTodo(update);
    setEditing(false);
  };

  return <FlexPaper>
    <Checkbox color="success" checked={completed} onChange={event => setCompleted(event.target.checked)}/>
    {!editing && <Typography variant="body1" component="span" onClick={() => setEditing(true)}> {todo.text} </Typography>}
    {editing && <TodoInputField todoText={todo.text} onSubmit={submitEdit}/>}
    <IconButton color="primary" onClick={() => dispatch(deleteTodo(todo))}>
      <Close/>
    </IconButton>
  </FlexPaper>;
};

