import styled from 'styled-components';
import { theme } from 'styled-tools';
import { rem } from 'polished';

export const StyledHeading = styled.h2`
  position: relative;
  font-size: ${rem(30)};
  letter-spacing: -${rem(2)};
  color: ${theme('palette.primary.300')};
  
  &::after {
    content: "";
    position: absolute;
    width: ${rem(42)};
    height: ${rem(4)};
    margin-left: -${rem(2)};
    top: inherit;
    bottom: -${rem(4)};
    left: 0;
    background: linear-gradient(to right, ${theme('palette.primary.300')}, ${theme('palette.secondary.300')});
  }
`;
