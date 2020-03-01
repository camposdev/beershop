import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import ProductCard from '../../components/ProductCard/ProductCard';
import Heading from '../../components/Heading';
import ProductsGrid from '../../components/ProductsGrid/ProductsGrid';

const Home = () => (
  <Container>
    <Banner img="/banners/banner.jpg" alt="Ofertas do dia" />
    <Heading icon={faHome}>Destaques</Heading>
    <ProductsGrid>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ProductsGrid>
  </Container>
);

export default Home;
