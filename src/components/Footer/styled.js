import styled from 'styled-components';
import { theme } from 'styled-tools';
import { rem } from 'polished';
import Logo from '../Logo';

export const StyledFooter = styled.footer`
  position: relative;
  margin-top: 80px;
  padding: 40px 0;
  text-align: center;
  background-color: ${theme('palette.white')};
  color: ${theme('palette.dark.100')};
  box-shadow: 0 -20px 25px -20px ${theme('palette.dark.50')};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, ${theme('palette.primary.300')}, ${theme('palette.secondary.300')});
  }
`;

export const LogoFooter = styled(Logo)`
  -webkit-text-fill-color: ${theme('palette.dark.100')};
  background: none;
  margin-bottom: 20px;
  &::before,
  &::after {
    background: ${theme('palette.dark.100')};;
  }
`;

export const Payments = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 30px 0;

  img {
    max-width: 100%;
  }
`;

export const MenuFooter = styled.nav`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  ${theme('breakpoint.sm')} {
    flex-direction: row;
    justify-content :center;
  }
  a {
    font-size: ${rem(13)};
    color: ${theme('palette.dark.200')};
    padding: 10px 20px;
    text-decoration: none;
    transition: ${theme('transition')};

    &:hover {
      color: ${theme('palette.primary.300')};
    }
  }
`;
