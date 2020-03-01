import React, { useState, useRef, useEffect } from 'react';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Wrapper, StyledCart, IconCart, Count, DropdownCart, ItemCart, ItemCartPhoto, ItemCartTitle, ItemCartPrice, CartLink } from './styled';

export default () => {
  const [openCart, setOpenCart] = useState(false);
  const dropdownRef = useRef(null);
  const cartRef = useRef(null);

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
        <Count>3</Count>
      </StyledCart>

      {openCart && (
        <DropdownCart ref={dropdownRef}>
          <ItemCart>
            <ItemCartPhoto>
              <img src="https://picsum.photos/40/40?random=1" alt="Lorem ipsum" />
            </ItemCartPhoto>

            <div>
              <ItemCartTitle>Lorem ipsum dolor</ItemCartTitle>
              <ItemCartPrice>R$ 99,90</ItemCartPrice>
            </div>
          </ItemCart>

          <ItemCart>
            <ItemCartPhoto>
              <img src="https://picsum.photos/40/40?random=2" alt="Lorem ipsum" />
            </ItemCartPhoto>

            <div>
              <ItemCartTitle>Lorem ipsum dolor</ItemCartTitle>
              <ItemCartPrice>R$ 99,90</ItemCartPrice>
            </div>
          </ItemCart>

          <ItemCart>
            <ItemCartPhoto>
              <img src="https://picsum.photos/40/40?random=3" alt="Lorem ipsum" />
            </ItemCartPhoto>

            <div>
              <ItemCartTitle>Lorem ipsum dolor</ItemCartTitle>
              <ItemCartPrice>R$ 99,90</ItemCartPrice>
            </div>
          </ItemCart>

          <CartLink to="/cart" onClick={() => setOpenCart(false)}>Ir para o carrinho</CartLink>
        </DropdownCart>
      )}
    </Wrapper>
  );
};
