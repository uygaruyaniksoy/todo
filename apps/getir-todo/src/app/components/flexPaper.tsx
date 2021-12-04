import { Paper } from '@mui/material';
import styled from 'styled-components';

export const FlexPaper = styled(Paper)`
  display: flex;
  flex: 1;
  height: 56px;
  align-items: center;
  position: relative;
  
  .MuiTypography-root {
    flex: 1;
    padding: 17px 0 17px 14px; 
    height: 22px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap; 
  }
  
  .MuiOutlinedInput-root {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding-right: 261px; 
  } 
  
  .date-picker {
    position: absolute;
    right: 0; 
    height: 50px;
    overflow: hidden;
    margin: 2px;
    
    .MuiInputBase-root {
      input {
        text-align: right; 
        padding-top: 12px;
      }
      
      ::before, ::after {
        border-bottom: none !important;
      }
      
      input::placeholder {
        color: #6F4C5B;
        font-style: italic;
      }
      background-color: #f9f9f9;
    }
  }
`;

