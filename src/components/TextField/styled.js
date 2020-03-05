import styled from 'styled-components';
import { theme } from 'styled-tools';
import { rem } from 'polished';

export const Wrapper = styled.div`
  flex: 1;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  font-size: ${rem(12)};
  font-weight: bold;
  margin-bottom: 2px;
`;

export const StyledInput = styled.input`
  border: 1px solid ${theme('palette.dark.100')};
  padding: 0 16px;
  border-radius: 4px;
  height: 40px;
  outline: none;
  transition: ${theme('transition')};
  width: 100%;

  &:focus {
    border-color: ${theme('palette.primary.300')};
    box-shadow: 0 10px 15px -10px ${theme('palette.secondary.100')};
  }
`;
