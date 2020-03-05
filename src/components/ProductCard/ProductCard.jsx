import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import { faShoppingCart, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import { Card, Image, Title, Price } from './styled';
import { Context } from '../../context/Store';

const ProductCard = ({ id, photo, title, unit_price, ...props }) => {
  const [loading, setLoading] = useState(false);
  const [, dispatch] = useContext(Context);

  const addProductCart = () => {
    const product = { id, photo, title, unit_price };
    dispatch({ type: 'ADD_PRODUCT_CART', payload: product });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Card {...props}>
        <Link to={`/product/${id}`}>
          <Image src={photo} />
          <Title>{title}</Title>
          <Price>{numeral(unit_price).format('$0,0.00')}</Price>
        </Link>
        <Button secondary block icon={loading ? faSpinner : faShoppingCart} spin={loading} onClick={addProductCart} disabled={loading}>
          {!loading && 'Adicionar'}
        </Button>
      </Card>
    </>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  unit_price: PropTypes.number.isRequired
};

export default ProductCard;
