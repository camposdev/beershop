import React from 'react';
import { Link } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import { Card, Image, Title, Price } from './styled';

const ProductCard = ({ id, photo, name, price, ...props }) => (
  <>
    <Card to="/product" {...props}>
      <Link to="/product">
        <Image src={photo} />
        <Title>{name}</Title>
        <Price>{price}</Price>
      </Link>
      <Button block icon={faShoppingCart}>Adicionar</Button>
    </Card>
  </>
);

export default ProductCard;
