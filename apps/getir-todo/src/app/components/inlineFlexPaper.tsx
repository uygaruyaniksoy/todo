import styled from 'styled-components';
import { FlexPaper } from './flexPaper';

export const InlineFlexPaper = styled(FlexPaper)`
  overflow: hidden;
  height: 0;
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
  
  &.created {
    height: 56px;
    border-radius: 0;
  }
  
  &.completed {
    color: gray;
    .completed-marker {
       width: 100%;
       border-bottom: 1px gray solid; 
     }
  }
  
  .text-wrapper {
    position: relative;
  }
 
 .completed-marker {
    transition: all 0.3s;
    position: absolute;
    height: 50%;
    display: block;
    top: 0; 
    width: 0;
  }
  
  &.deleted {
    height: 0;
  }
`
