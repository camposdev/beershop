import styled from 'styled-components';
import { theme, ifProp } from 'styled-tools';
import { rem } from 'polished';

export const StyledHeading = styled.h2`
  position: relative;
  font-size: ${ifProp('sub', rem(16), rem(30))};
  letter-spacing: -${ifProp('sub', rem(1), rem(2))};
  text-transform: ${ifProp('sub', 'uppercase', 'inherit')};
  color: ${ifProp('sub', theme('palette.dark.100'), theme('palette.primary.300'))};
  
  &::after {
    content: "";
    display: ${ifProp('sub', 'none', 'block')};
    position: absolute;
    width: ${rem(42)};
    height: ${rem(4)};
    margin-left: -${ifProp('center', rem(21), '2')};
    top: inherit;
    bottom: -${rem(4)};
    left: ${ifProp('center', '50%', '0')};
    background: linear-gradient(to right, ${theme('palette.primary.300')}, ${theme('palette.secondary.300')});
  }
`;
