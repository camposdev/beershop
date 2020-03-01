import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLogo } from './styled';

export default (props) => (
  <Link to="/">
    <StyledLogo {...props}>BeerShop</StyledLogo>
  </Link>
);
