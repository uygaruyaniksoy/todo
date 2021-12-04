import { Todo } from '@getir-todo/api-interfaces';
import { MobileDateTimePicker } from '@mui/lab';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import SendIcon from '@mui/icons-material/Send';
import React, { useEffect, useRef, useState } from 'react';
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

export const TodoInputField = ({todo, onSubmit, onBlur}: { todo?: Todo, onSubmit?: (update: Partial<Todo>) => (void), onBlur?: () => void }) => {
  const input = useRef<HTMLInputElement>(null);
  const [text, setText] = useState(todo?.text ?? '');
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [textFieldFocus, setTextFieldFocus] = useState(true);
  const [deadline, setDeadline] = useState<number>(todo?.deadline ?? -1);
  const dispatch = useDispatch();
  const mainClass = !todo ? 'main' : '';

  const submitNew = () => {
    if (text !== '') {
      dispatch(createTodo({
        text,
        completed: false,
        deadline,
      }));
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && text !== '') {
      if (onSubmit) {
        onSubmit({text});
      } else {
        submitNew();
      }

      setText('');
    }
  };

  const blurTextField = () => {
    setTimeout(() => setTextFieldFocus(false), 150);
  }

  useEffect(() => {
    if (!datePickerOpen && !textFieldFocus) {
      onBlur?.();
    }
  }, [datePickerOpen, textFieldFocus]);

  useEffect(() => {
    if (textFieldFocus) {
      input.current?.focus();
    }
  }, [textFieldFocus]);

  return <FlexPaper className={mainClass}>
    <FullWidthTextField onChange={event => setText(event.target.value)}
                        onKeyPress={handleKeyPress}
                        onBlur={blurTextField}
                        value={text}
                        placeholder="Enter a todo"
                        inputRef={input}
                        InputProps={{
                          endAdornment: (
                            <>
                              <MobileDateTimePicker renderInput={(props) => <TextField {...props}
                                                                                       className="date-picker"
                                                                                       variant="filled"
                                                                                       placeholder="select due date"
                                                                                       InputProps={{
                                                                                         endAdornment: <InputAdornment
                                                                                           position="end">
                                                                                           <IconButton
                                                                                             onClick={() => setDatePickerOpen(true)}
                                                                                             edge="end"
                                                                                           >
                                                                                             <EventIcon/>
                                                                                           </IconButton>
                                                                                         </InputAdornment>,
                                                                                       }}/>}
                                                    inputFormat="'due' dd/MM/yyyy hh:mm"
                                                    clearable
                                                    open={datePickerOpen}
                                                    onOpen={() => setDatePickerOpen(true)}
                                                    onClose={() => setDatePickerOpen(false)}
                                                    onAccept={() => onSubmit?.({deadline})}
                                                    value={deadline >= 0 ? deadline : null}
                                                    onChange={(newValue) => {
                                                      setDeadline(newValue !== null ? Date.parse(newValue.toString()) : -1);
                                                    }}/>
                              {
                                todo === undefined &&
								<IconButton onClick={submitNew} edge="end">
									<SendIcon/>
								</IconButton>
                              }
                            </>
                          ),
                        }}/>

  </FlexPaper>;
};
