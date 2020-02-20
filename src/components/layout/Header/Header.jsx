import React from 'react';
import Container from '../../Container';
import { StyledHeader } from './style';
import Logo from '../../Logo';
import Menu from '../Menu/Menu';
import Flex from '../../Flex/Flex';

const Header = () => (
  <StyledHeader>
    <Container>
      <Flex justify="space-between" align="center">
        <Logo />
        <Menu />
      </Flex>
    </Container>
  </StyledHeader>
);

export default Header;
