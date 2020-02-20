import styled from 'styled-components';
import { theme } from 'styled-tools';
import { em, rem } from 'polished';

export const StyledLogo = styled.h1`
  position: relative;
  display: inline-block;
  font-weight: bold;
  font-size: ${rem(30)};
  line-height: 1;
  letter-spacing: -${em(2)};
  background: -webkit-linear-gradient(45deg, ${theme('palette.primary.300')}, ${theme('palette.secondary.300')});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  padding-right: 0.3em;
  padding-left: 0.16em;
  cursor: pointer;
  transition: ${theme('transition')};

  ${theme('breakpoint.sm')} {
    font-size: ${rem(38)};
  }

  &::before,
  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 0.15em;
    left: 0;
    top: -0.1em;
    background: linear-gradient(to right, ${theme('palette.primary.300')}, ${theme('palette.secondary.300')});
    transition: ${theme('transition')};
  }

  &::after {
    top: unset;
    bottom: -0.2em;
  }

  &:hover {
    -webkit-text-fill-color: white;

    &::before,
    &::after {
      height: 0.7em;
    }
  }

  &::selection {
    background: transparent;
    color: inherit;
  }
`;
