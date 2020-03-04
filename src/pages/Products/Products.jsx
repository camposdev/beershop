import React, { useEffect, useState } from 'react';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import ProductsGrid from '../../components/ProductsGrid/ProductsGrid';
import ProductCard from '../../components/ProductCard/ProductCard';
import { getProducts } from '../../services/api';
import Loading from '../../components/Loading';

const Products = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();
      setProductsList(response);
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <Heading>Produtos</Heading>
      {productsList.length > 0 ? (
        <ProductsGrid>
          {productsList.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </ProductsGrid>
      ) : <Loading />}
    </Container>
  );
};

export default Products;
