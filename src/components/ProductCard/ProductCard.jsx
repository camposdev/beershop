import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import { Card, Image, Title, Price } from './styled';
import { Context } from '../../context/Store';

const ProductCard = ({ id, photo, title, unit_price, ...props }) => {
  const [, dispatch] = useContext(Context);

  const addProductCart = () => {
    const product = { id, photo, title, unit_price };
    dispatch({ type: 'ADD_PRODUCT_CART', payload: product });
  };

  return (
    <>
      <Card {...props}>
        <Link to={`/product/${id}`}>
          <Image src={photo} />
          <Title>{title}</Title>
          <Price>{numeral(unit_price).format('$0,0.00')}</Price>
        </Link>
        <Button secondary block icon={faShoppingCart} onClick={addProductCart}>Adicionar</Button>
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
