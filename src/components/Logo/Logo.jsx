import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLogo } from './style';

export default () => (
  <Link to="/">
    <StyledLogo>BeerShop</StyledLogo>
  </Link>
);
