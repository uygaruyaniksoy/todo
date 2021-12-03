import { Card } from '@mui/material';
import styled from 'styled-components';

export const TodosListCard = styled(Card)`
  margin: 32px auto 0;
  max-width: 840px;
  
  @media (max-width: 1200px) {
    margin: 128px 0;
    width: 100%;
    max-width: 100%;
  }
`

