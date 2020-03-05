import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import numeral from 'numeral';
import Heading from '../../../components/Heading';
import { Context } from '../../../context/Store';
import ShoppingCartList from '../../../components/ShoppingCart/ShoppingCartList';
import Button from '../../../components/Button';
import { CheckoutTotal } from '../styled';

const ResumeOrder = () => {
  const [totalPrice, setTotalPrice] = useState(null);
  const [store] = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    if (store.cart.length > 0) {
      const sumTotal = store.cart.reduce(
        (prevVal, item) => prevVal + (item.unit_price * item.quantity), 0
      );
      setTotalPrice(sumTotal);
    }
  }, [store]);

  return (
    <>
      <Heading sub>Resumo do pedido</Heading>
      <ShoppingCartList style={{ maxHeight: '100%' }} />
      <CheckoutTotal>
        Total {numeral(totalPrice).format('$0,0.00')}
      </CheckoutTotal>
      <Button block secondary onClick={() => history.push('/cart')} icon={faShoppingCart}>Ver Carrinho</Button>
    </>
  );
};

export default ResumeOrder;
