import styled from 'styled-components';
import { theme } from 'styled-tools';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  ${theme('breakpoint.sm')} {
    grid-template-columns: 1fr 1fr;
  }
  
  ${theme('breakpoint.lg')} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
