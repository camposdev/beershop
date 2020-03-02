import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../components/Container';
import Heading from '../../components/Heading';

const Product = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Heading>Produto {id}</Heading>
    </Container>
  );
};

export default Product;
