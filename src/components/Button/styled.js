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
  background: none;
  border: none;
  padding: 0 ${rem(16)};
  border-radius: 30px;
  background-color: ${theme('palette.primary.300')};
  color: ${theme('palette.white')};
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
    background: linear-gradient(to right, transparent, ${theme('palette.secondary.300')});
    transition: ${theme('transition')};
  }

  &:hover {
    box-shadow: 0 10px 15px -10px ${theme('palette.secondary.100')};
    &:after {
      opacity: 0;
    }
  }

  svg {
    margin-right: ${({ hasChildren }) => hasChildren && '10px'};
    font-size: ${rem(14)};
  }
`;
