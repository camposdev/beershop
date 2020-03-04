import React, { useContext, useEffect, useState } from 'react';
import { faTimes, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import numeral from 'numeral';
import { useHistory } from 'react-router-dom';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import { Context } from '../../context/Store';
import EmptyState from '../../components/EmptyState';
import {
  CardCart,
  CardCartPhoto,
  CardCartInfo,
  CardCartTitle,
  CardCartQtd,
  CardCartPrices,
  CardCartValue,
  CardCartAction,
  TotalCart,
  TotalPrice
} from './styled';
import TextField from '../../components/TextField/TextField';

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(null);
  const [store, dispatch] = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    if (store.cart.length > 0) {
      const sumTotal = store.cart.reduce((prevVal, item) => prevVal + (item.price * item.count), 0);
      setTotalPrice(sumTotal);
    }
  }, [store]);

  const removeItem = (item) => {
    dispatch({ type: 'REMOVE_PRODUCT_CART', payload: item.id });
  };

  const handleQtdChange = (value, product) => {
    dispatch({ type: 'UPDATE_COUNT_CART', payload: { id: product.id, value } });
  };

  return (
    <Container>
      <Heading>Meu carrinho</Heading>
      {store.cart.length > 0 ? store.cart.map((item) => (
        <CardCart key={item.id}>
          <CardCartPhoto>
            <img src={item.photo} alt={item.name} width="120" />
          </CardCartPhoto>
          <CardCartInfo>
            <CardCartTitle>{item.name}</CardCartTitle>
            <CardCartPrices>
              <CardCartQtd>
                <TextField type="number" min="1" max="10" value={item.count} onChange={(e) => handleQtdChange(e.target.value, item)} />
              </CardCartQtd>
              <CardCartValue secondary>
                <h5>Unitário</h5>
                {numeral(item.price).format('$0,0.00')}
              </CardCartValue>
              <CardCartValue>
                <h5>Total</h5>
                {numeral(item.price * item.count).format('$0,0.00')}
              </CardCartValue>
            </CardCartPrices>
          </CardCartInfo>
          <CardCartAction onClick={() => removeItem(item)} icon={faTimes} />
        </CardCart>
      )) : <EmptyState>Seu carrinho está vazio</EmptyState>}

      {store.cart.length > 0 && (
        <TotalCart>
          <TotalPrice>Total {numeral(totalPrice).format('$0,0.00')}</TotalPrice>
          <Button large icon={faArrowRight} onClick={() => history.push('/checkout')}>Finalizar pedido</Button>
        </TotalCart>
      )}
    </Container>
  );
};

export default Cart;
