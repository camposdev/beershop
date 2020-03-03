import React, { useEffect, useState } from 'react';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import ProductsGrid from '../../components/ProductsGrid/ProductsGrid';
import ProductCard from '../../components/ProductCard/ProductCard';
import { getProducts } from '../../services/api';
import shuffle from '../../utils/shuffle';

const Products = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getProducts();
      const products = shuffle(response);
      setProductsList(products);
    })();
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
