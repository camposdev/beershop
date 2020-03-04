import React, { useContext } from 'react';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import { Context } from '../../context/Store';
import EmptyState from '../../components/EmptyState';

const Checkout = () => {
  const [store] = useContext(Context);

  return (
    <Container>
      <Heading>Checkout</Heading>
      {store.cart.length > 0 ? (
        ""
      ) : (
        <EmptyState>Seu carrinho está vazio.</EmptyState>
      )}
    </Container>
  );
};

export default Checkout;
