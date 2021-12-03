import { Card } from '@mui/material';
import styled from 'styled-components';

export const TodosListCard = styled(Card)`
  margin: 128px auto;
  max-width: 840px;
  
  @media (max-width: 1200px) {
    margin: 128px 0;
    width: 100%;
    max-width: 100%;
  }
`

