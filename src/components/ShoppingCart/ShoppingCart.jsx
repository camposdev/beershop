import React, { useState, useRef, useEffect, useContext } from 'react';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../../context/Store';
import ShoppingCartList from './ShoppingCartList';
import {
  Wrapper,
  StyledCart,
  IconCart,
  Count,
  DropdownCart,
  CartLink
} from './styled';

export default () => {
  const [openCart, setOpenCart] = useState(false);
  const dropdownRef = useRef(null);
  const cartRef = useRef(null);
  const [store] = useContext(Context);

  useEffect(() => {
    const listenClose = (e) => {
      const clickedOut = openCart
        && dropdownRef.current && !dropdownRef.current.contains(e.target)
        && cartRef.current && !cartRef.current.contains(e.target);

      if (clickedOut) {
        setOpenCart(false);
      }
    };

    document.addEventListener('click', listenClose);
    return () => {
      document.removeEventListener('click', listenClose);
    };
  }, [openCart]);

  return (
    <Wrapper isOpen={openCart}>
      <StyledCart ref={cartRef} onClick={() => setOpenCart(!openCart)}>
        <IconCart icon={faShoppingBasket} />
        <Count>{store.cart.length}</Count>
      </StyledCart>

      {openCart && (
        <DropdownCart ref={dropdownRef}>
          <ShoppingCartList onClose={() => setOpenCart(false)} />
          <CartLink to="/cart" onClick={() => setOpenCart(false)}>Meu carrinho</CartLink>
        </DropdownCart>
      )}
    </Wrapper>
  );
};
