import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import { Card, Image, Title, Price } from './styled';

const ProductCard = ({ id, photo, name, price, ...props }) => (
  <>
    <Card {...props}>
      <Link to={`/product/${id}`}>
        <Image src={photo} />
        <Title>{name}</Title>
        <Price>{numeral(price).format('$0,0.00')}</Price>
      </Link>
      <Button block icon={faShoppingCart}>Adicionar</Button>
    </Card>
  </>
);

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default ProductCard;
