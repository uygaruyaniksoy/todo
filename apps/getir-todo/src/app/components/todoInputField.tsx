import { Todo } from '@getir-todo/api-interfaces';
import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createTodo } from '../state/actions/todos.action';
import { FlexPaper } from './flexPaper';

const FullWidthTextField = styled(TextField)`
  flex: 1;
`;

export const TodoInputField = ({todoText = '', onSubmit}: { todoText?: string, onSubmit?: (update: Partial<Todo>) => (void) }) => {
  const [text, setText] = useState(todoText);
  const dispatch = useDispatch();

  const submitIfAvailable = () => {
    if (onSubmit) {
      onSubmit({text});
    }
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      if (onSubmit) {
        onSubmit({text});
      } else {
        dispatch(createTodo({
          text,
          completed: false,
          deadline: 0,
        }));
      }
    }
  };

  return <FlexPaper>
    <FullWidthTextField onChange={event => setText(event.target.value)}
                        onKeyPress={handleKeyPress}
                        onBlur={submitIfAvailable}
                        value={text}
                        autoFocus/>
  </FlexPaper>;
};

