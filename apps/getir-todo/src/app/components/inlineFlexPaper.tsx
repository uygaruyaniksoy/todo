import styled from 'styled-components';
import { FlexPaper } from './flexPaper';

export const InlineFlexPaper = styled(FlexPaper)`
  transition: all 0.3s !important;
  background-color: #FDFCE5 !important;
  &:hover {
    background-color: #D7E9F7 !important;
  }

  .MuiIconButton-root {
    transition: opacity 0.1s;
    opacity: 0;
  }
  &:hover .MuiIconButton-root {
    opacity: 1;
  }
`
