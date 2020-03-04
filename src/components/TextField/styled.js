import styled from 'styled-components';
import { theme } from 'styled-tools';

export const StyledInput = styled.input`
  border: 1px solid ${theme('palette.dark.100')};
  padding: 0 16px;
  border-radius: 4px;
  height: 40px;
  outline: none;
  transition: ${theme('transition')};

  &:focus {
    border-color: ${theme('palette.primary.300')};
    box-shadow: 0 10px 15px -10px ${theme('palette.secondary.100')};
  }
`;
