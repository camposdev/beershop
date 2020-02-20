import styled from 'styled-components';
import { theme } from 'styled-tools';
import { em, rem } from 'polished';

export const StyledLogo = styled.h1`
  position: relative;
  display: inline-block;
  font-weight: bold;
  font-size: ${rem(38)};
  line-height: 1;
  letter-spacing: -${em(2)};
  color: ${theme('palette.primary.300')};
  margin: 0;
  padding-right: 0.3em;
  padding-left: 0.16em;
  cursor: pointer;
  transition: ${theme('transition')};

  &::before,
  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 0.15em;
    left: 0;
    top: -0.1em;
    background-color: ${theme('palette.primary.300')};
    transition: ${theme('transition')};
  }

  &::after {
    top: unset;
    bottom: -0.2em;
  }

  &:hover {
    color: ${theme('palette.white')};
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
