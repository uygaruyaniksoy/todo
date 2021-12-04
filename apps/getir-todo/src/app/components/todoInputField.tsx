import { Todo } from '@getir-todo/api-interfaces';
import { MobileDateTimePicker } from '@mui/lab';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createTodo } from '../state/actions/todos.action';
import { FlexPaper } from './flexPaper';

const FullWidthTextField = styled(TextField)`
  flex: 1;
  background-color: #f9f9f9;
  
  input::placeholder {
    color: #6F4C5B;
    font-style: italic;
  }
`;

export const TodoInputField = ({todo, onSubmit, onBlur = () => undefined}: { todo?: Todo, onSubmit?: (update: Partial<Todo>) => (void), onBlur?: () => void }) => {
  const datePicker = useRef<HTMLInputElement>(null);
  const [text, setText] = useState(todo?.text ?? '');
  const [deadline, setDeadline] = useState<number | null>(todo?.deadline ?? null);
  const dispatch = useDispatch();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && text !== '') {
      if (onSubmit) {
        onSubmit({text, deadline});
      } else {
        dispatch(createTodo({
          text,
          completed: false,
          deadline,
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
                        placeholder="Enter a todo"
                        autoFocus/>
    <MobileDateTimePicker renderInput={(props) => <TextField {...props}
                                                             className="date-picker"
                                                             variant="filled"
                                                             placeholder="select due date"
                                                             InputProps={{
                                                               endAdornment: <InputAdornment position="end">
                                                                 <IconButton
                                                                   onClick={() => datePicker.current?.click()}
                                                                   edge="end"
                                                                 >
                                                                   <EventIcon />
                                                                 </IconButton>
                                                               </InputAdornment>,
                                                             }}/>}
                          inputFormat="'due' dd/MM/yyyy hh:mm"
                          inputRef={datePicker}
                          clearable
                          value={deadline}
                          onChange={(newValue) => {
                            setDeadline(newValue);
                          }}/>
  </FlexPaper>;
};
