import React, { useState, useRef, useEffect, useContext } from 'react';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import numeral from 'numeral';
import { Context } from '../../../context/Store';
import {
  Wrapper,
  StyledCart,
  IconCart,
  Count,
  DropdownCart,
  WrapperItems,
  ItemCart,
  ItemCartPhoto,
  ItemCartTitle,
  ItemCartPrice,
  ItemCartEmpty,
  CartLink
} from './styled';

export default () => {
  const [openCart, setOpenCart] = useState(false);
  const dropdownRef = useRef(null);
  const cartRef = useRef(null);
  const [cart] = useContext(Context);

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
        <Count>{cart.products.length}</Count>
      </StyledCart>

      {openCart && (
        <DropdownCart ref={dropdownRef}>
          <WrapperItems>
            {cart.products.length > 0 ? cart.products.map((item) => (
              <ItemCart
                key={item.id}
                to={`/product/${item.id}`}
                onClick={() => setOpenCart(false)}
              >
                <ItemCartPhoto>
                  <img src={item.photo} alt={item.name} />
                </ItemCartPhoto>

                <div>
                  <ItemCartTitle>{item.name}</ItemCartTitle>
                  <ItemCartPrice>{numeral(item.price).format('$0,0.00')}</ItemCartPrice>
                </div>
              </ItemCart>
            )) : (
              <ItemCartEmpty>Carrinho vazio!</ItemCartEmpty>
            )}
          </WrapperItems>

          <CartLink to="/cart" onClick={() => setOpenCart(false)}>Meu carrinho</CartLink>
        </DropdownCart>
      )}
    </Wrapper>
  );
};
