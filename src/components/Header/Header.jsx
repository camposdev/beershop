import React from 'react';
import Logo from '../Logo';
import Menu from './Menu';
import ShoppingCart from '../ShoppingCart';
import Search from './Search';
import { HeaderContainer, StyledHeader, HeaderActions } from './styled';

const Header = () => (
  <>
    <StyledHeader>
      <HeaderContainer>
        <Logo />
        <HeaderActions>
          <Search />
          <ShoppingCart />
        </HeaderActions>
      </HeaderContainer>
    </StyledHeader>
    <Menu />
  </>
);

export default Header;
