import { Paper } from '@mui/material';
import styled from 'styled-components';

export const FlexPaper = styled(Paper)`
  display: flex;
  flex: 1;
  height: 56px;
  align-items: center;
  
  .MuiTypography-root {
    flex: 1;
    padding: 17px 0 17px 14px; 
    height: 22px;
  }
`;

