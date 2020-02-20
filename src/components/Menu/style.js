import styled from 'styled-components';
import { rem } from 'polished';
import { theme, ifProp } from 'styled-tools';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Nav = styled.nav`
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  height: 100vh;
  min-width: 260px;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  background-color: ${theme('palette.white')};
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  transform: ${ifProp('open', 'translateX(0)', 'translateX(100%)')};
  opacity: ${ifProp('open', '1', '0')};
  transition: ${theme('transition')};

  ${theme('breakpoint.md')} {
    position: relative;
    height: auto;
    min-width: auto;
    max-width: 100%;
    background-color: transparent;
    box-shadow: none;
    transform: none;
    opacity: 1;
    flex-direction: row;
  }
`;

export const NavItem = styled(Link)`
  display: block;
  padding: 20px;
  font-size: ${rem(18)};
  font-weight: bold;
  color: ${theme('palette.dark.300')};
  text-decoration: none;
  transition: ${theme('transition')};
  
  &:hover,
  &:active {
    color: ${theme('palette.primary.300')};
  }
`;

export const ButtonMobileMenu = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 0;
  outline: none;
  margin-left: 5px;
  transition: ${theme('transition')};
  order: 1;

  &:hover {
    background-color: ${theme('palette.dark.50')};
  }

  ${theme('breakpoint.md')} {
    display: none;
  }
`;

export const MobileMenu = styled(FontAwesomeIcon)`
  font-size: ${rem(30)};
  color: ${theme('palette.primary.300')};
`;

export const ButtonCloseMenu = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  border: none;
  background-color: ${theme('palette.primary.300')};
  font-weight: bold;
  color: ${theme('palette.white')};
  text-transform: uppercase;
  font-size: ${rem(12)};
  outline: none;
  margin-bottom: 5px; 

  &:hover {
    background-color: ${theme('palette.primary.400')};
  }

  ${theme('breakpoint.md')} {
    display: none;
  }
`;

export const IconCloseMenu = styled(FontAwesomeIcon)`
  font-size: ${rem(28)};
  margin-left: 10px;
`;
