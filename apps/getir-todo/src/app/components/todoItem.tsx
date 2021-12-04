import { Todo } from '@getir-todo/api-interfaces';
import { Close } from '@mui/icons-material';
import { Checkbox, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteTodo, editTodo } from '../state/actions/todos.action';
import { InlineFlexPaper } from './inlineFlexPaper';
import { TodoInputField } from './todoInputField';

const BlueCheckbox = styled(Checkbox)`
  &.MuiCheckbox-root.Mui-checked {
    color: #5f97ce;
  }
`;

export const TodoItem = ({todo}: { todo: Todo }) => {
  const [className, setClassName] = useState('');
  const [completed, setCompleted] = useState(todo.completed);
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();

  const updateTodo = (update: Partial<Todo>) => {
    dispatch(editTodo({...todo, ...update}));
  };

  const deleteTodoItem = async () => {
    if (className !== 'deleted') {
      setClassName('deleted');
      setTimeout(() => dispatch(deleteTodo(todo)), 300);
    }
  }

  useEffect(() => {
    if (completed !== todo.completed) {
      updateTodo({completed});
    }
  }, [completed]);

  useEffect(() => {
    setClassName('created');
  }, []);

  const submitEdit = (update: Partial<Todo>): void => {
    updateTodo(update);
    setEditing(false);
  };

  return <InlineFlexPaper className={`${className} ${completed ? 'completed' : ''}`}>
    <BlueCheckbox checked={completed} onChange={event => setCompleted(event.target.checked)}/>
    {!editing && <Typography variant="body1" component="span" onClick={() => setEditing(true)}>
      <span className="text-wrapper">
        <span className="todo-text">{todo.text}</span>
        <span className="completed-marker"/>
      </span>
    </Typography>}
    {editing && <TodoInputField todoText={todo.text} onSubmit={submitEdit} onBlur={() => setEditing(false)}/>}
    <IconButton color="primary" onClick={deleteTodoItem}>
      <Close/>
    </IconButton>
  </InlineFlexPaper>;
};

