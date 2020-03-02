import styled from 'styled-components';
import { theme } from 'styled-tools';

export const GridBanners = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  margin: 30px 0;

  ${theme('breakpoint.sm')} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  img {
    width: 100%;
  }
`;
