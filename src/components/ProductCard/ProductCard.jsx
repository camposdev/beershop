import React from 'react';
import { Link } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import { Card, Image, Title, Price } from './styled';

const ProductCard = () => (
  <>
    <Card to="/product">
      <Link to="/product">
        <Image src="https://appsisecommerces3.s3.amazonaws.com/clientes/cliente15180/produtos/2905/L4201.jpg" />
        <Title>Dogma Hop Brut IPA - Lata 473ml</Title>
        <Price>R$ 37,90</Price>
        <Button block icon={faShoppingCart}>Adicionar</Button>
      </Link>
    </Card>
  </>
);

export default ProductCard;
