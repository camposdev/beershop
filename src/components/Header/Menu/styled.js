import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { theme, ifProp } from 'styled-tools';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from '../../Container';

export const NavBar = styled.div`
  background: linear-gradient(to right, ${theme('palette.primary.300')}, ${theme('palette.secondary.300')});
`;

export const NavContainer = styled(Container)`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`;

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
    z-index: unset;
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

const styleMenuItem = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${rem(12)};
  text-decoration: none;
  white-space: nowrap;
  border: none;
  padding: 10px;
  outline: none;
  cursor: pointer;
  transition: ${theme('transition')};

  ${theme('breakpoint.md')} {
    padding: 15px;
  }

  ${theme('breakpoint.lg')} {
    padding: 15px 25px;
  }

  &:hover {
    background: ${theme('palette.white')};
    color: ${theme('palette.secondary.300')};
    box-shadow: 0 20px 25px -20px ${theme('palette.secondary.100')};
  }

  svg {
    font-size: ${rem(22)};
    margin-right: 10px;
  }
`;

export const NavItem = styled(Link)`
  ${styleMenuItem}
  color: ${theme('palette.primary.300')};
  justify-content: flex-start;
  padding: 15px 25px;

  ${theme('breakpoint.md')} {
    ${styleMenuItem}
  }
`;

export const ButtonMobileMenu = styled.button`
  ${styleMenuItem}

  ${theme('breakpoint.md')} {
    display: none;
  }
`;

export const AccountMenu = styled(Link)`
  ${styleMenuItem}

  svg {
    margin: 0 0 0 10px;
  }
`;

export const ButtonCloseMenu = styled.button`
  ${styleMenuItem}
  justify-content: flex-end;
  background: linear-gradient(to right, ${theme('palette.primary.300')}, ${theme('palette.secondary.300')});

  ${theme('breakpoint.md')} {
    display: none;
  }
`;

export const IconCloseMenu = styled(FontAwesomeIcon)`
  font-size: ${rem(28)};
  margin-left: 10px;
`;
