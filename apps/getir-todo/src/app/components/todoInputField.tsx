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

export const TodoInputField = ({todoText = '', onSubmit, onBlur = () => undefined}: { todoText?: string, onSubmit?: (update: Partial<Todo>) => (void), onBlur?: () => void }) => {
  const [text, setText] = useState(todoText);
  const dispatch = useDispatch();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && text !== '') {
      if (onSubmit) {
        onSubmit({text});
      } else {
        dispatch(createTodo({
          text,
          completed: false,
          deadline: 0,
        }));
      }

      setText('');
    }
  };

  return <FlexPaper>
    <FullWidthTextField onChange={event => setText(event.target.value)}
                        onKeyPress={handleKeyPress}
                        onBlur={onBlur}
                        value={text}
                        autoFocus/>
  </FlexPaper>;
};

