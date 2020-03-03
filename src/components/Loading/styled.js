import styled from 'styled-components';
import { theme } from 'styled-tools';
import { rem } from 'polished';

export const StyledLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;

  svg {
    color: ${theme('palette.dark.100')};
    font-size: ${rem(60)};
  }
`;
