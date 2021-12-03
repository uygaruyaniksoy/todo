import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { TodoInputField } from './components/todoInputField';
import { TodosList } from './components/todoList';
import { TodosListCard } from './components/todosListCard';
import { loadTodos } from './state/actions/todos.action';

const Title = styled(Typography)`
  font-size: 72px !important;
  text-align: center;
  margin-top: 32px !important; 
  font-weight: bold !important;
  color: #6F4C5BBB;
`;

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  return (
    <>
      <Title>todos</Title>
      <TodosListCard>
        <TodoInputField/>
        <TodosList/>
      </TodosListCard>
    </>

  );
};

export default App;
