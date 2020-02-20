import React from 'react';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { StyledCart, IconCart, Count } from './style';

export default () => {
  return (
    <StyledCart to="/cart">
      <IconCart icon={faShoppingBasket} />
      <Count>9</Count>
    </StyledCart>
  );
};
