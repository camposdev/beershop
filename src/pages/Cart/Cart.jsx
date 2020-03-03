import React, { useContext, useEffect, useState } from 'react';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import { Context } from '../../context/Store';
import EmptyState from './EmptyState';
import mergeDuplicates from '../../utils/mergeDuplicates';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [store, dispatch] = useContext(Context);

  useEffect(() => {
    setProducts(mergeDuplicates(store.cart, 'id'));
  }, [store]);

  const removeItem = (item) => {
    dispatch({ type: 'REMOVE_PRODUCT_CART', payload: item.id });
  };

  return (
    <Container>
      <Heading>Meu carrinho</Heading>
      {store.cart.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th />
              <th>Produto</th>
              <th>Qtd</th>
              <th>Valor unitário</th>
              <th>Valor total</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.photo} alt={item.name} width="120" />
                </td>
                <td>{item.name}</td>
                <td><input type="number" value={item.count} /></td>
                <td>{item.price}</td>
                <td>{item.price}</td>
                <td>
                  <Button onClick={() => removeItem(item)}>x</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : <EmptyState />}
    </Container>
  );
};

export default Cart;
