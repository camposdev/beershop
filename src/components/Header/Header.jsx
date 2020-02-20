import React from 'react';
import Container from '../Container';
import { StyledHeader } from './style';
import Logo from '../Logo';
import Menu from '../Menu';
import Flex from '../Flex';
import ShoppingCart from '../ShoppingCart';

const Header = () => (
  <StyledHeader>
    <Container>
      <Flex justify="space-between" align="center">
        <Logo />

        <Flex align="center">
          <Menu />
          <ShoppingCart />
        </Flex>
      </Flex>
    </Container>
  </StyledHeader>
);

export default Header;
