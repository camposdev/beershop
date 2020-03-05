import styled from 'styled-components';
import { rem } from 'polished';
import { theme, ifProp } from 'styled-tools';

export const StyledButton = styled.button`
  position: relative;
  z-index: 1;
  display: inline-flex;
  width: ${ifProp('block', '100%', 'auto')};
  height: ${ifProp('large', '50px', '40px')};
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  border: none;
  padding: 0 ${ifProp('large', '30px', '16px')};
  border-radius: 30px;
  background-color: ${ifProp('secondary', theme('palette.white'), theme('palette.primary.300'))};
  color: ${ifProp('secondary', theme('palette.primary.300'), theme('palette.white'))};
  border: ${ifProp('secondary', '1px solid', '0')} ${ifProp('secondary', theme('palette.primary.300'), theme('palette.white'))};
  font-size: ${rem(12)};
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  letter-spacing: ${rem(1)};
  text-decoration: none;
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  transition: ${theme('transition')};

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background: linear-gradient(to right,  ${theme('palette.primary.300')}, ${theme('palette.secondary.300')});
    opacity: ${ifProp('secondary', '0', '1')};
    transition: ${theme('transition')};
  }

  &:hover {
    box-shadow: 0 10px 15px -10px ${theme('palette.secondary.100')};
    color: ${theme('palette.white')};
    border: none;
    &:after {
      opacity: ${ifProp('secondary', '1', '0')};
    }
  }

  &:active {
    box-shadow: 0 5px 10px -10px ${theme('palette.secondary.200')};
  }

  svg {
    margin-right: ${({ hasChildren }) => hasChildren && '10px'};
    font-size: ${rem(14)};
  }
`;
