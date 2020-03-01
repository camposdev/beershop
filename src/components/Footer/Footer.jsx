import React from 'react';
import { StyledFooter } from './styled';
import Container from '../Container';

export default () => (
  <StyledFooter>
    <Container>
      <small>Copyright © {new Date().getFullYear()} Beershop</small>
    </Container>
  </StyledFooter>
);
