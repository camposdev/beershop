import React, { useEffect, useState } from 'react';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import ProductsGrid from '../../components/ProductsGrid/ProductsGrid';
import ProductCard from '../../components/ProductCard/ProductCard';

const Products = () => {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    fetch('/api.json')
      .then((res) => res.json())
      .then((res) => {
        const { products } = res;
        setProductsList(products);
      });
  }, []);

  return (
    <Container>
      <Heading>Produtos</Heading>
      <ProductsGrid>
        {productsList.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductsGrid>
    </Container>
  );
};

export default Products;
