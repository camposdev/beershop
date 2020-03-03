import { createGlobalStyle } from 'styled-components';
import { normalize, rem } from 'polished';
import { theme } from 'styled-tools';

const GlobalStyles = createGlobalStyle`
  ${normalize()}
  body {
    font-family: 'Open Sans', sans-serif;
    font-size: ${rem(14)};
    color: ${theme('palette.dark.300')};
    line-height: 1.5;
  }

  * {
    box-sizing: border-box;
  }

  ::selection {
    background-color: ${(props) => props.theme.palette.primary[300]};
    color: white;
  }
`;

export default GlobalStyles;
