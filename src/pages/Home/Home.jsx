import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import ProductCard from '../../components/ProductCard/ProductCard';
import Heading from '../../components/Heading';
import ProductsGrid from '../../components/ProductsGrid/ProductsGrid';
import { GridBanners } from './styled';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [otherProducts, setOtherProducts] = useState([]);

  useEffect(() => {
    fetch('/api.json')
      .then((res) => res.json())
      .then((res) => {
        const featured = res.products.slice(0, 4);
        const others = res.products.slice(4, 12);
        setFeaturedProducts(featured);
        setOtherProducts(others);
      });
  }, []);

  return (
    <Container>
      <Banner
        img="/banners/banner.jpg"
        imgMobile="/banners/banner_mobile.jpg"
        alt="Ofertas do dia"
      />
      <Heading>Destaques</Heading>
      <ProductsGrid>
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductsGrid>
      <GridBanners>
        <img src="/banners/banner1.jpg" alt="Camisetas" />
        <img src="/banners/banner2.jpg" alt="Elvis Juice" />
        <img src="/banners/banner3.jpg" alt="Hocus Pocus" />
      </GridBanners>
      <Heading>Outros produtos</Heading>
      <ProductsGrid>
        {otherProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductsGrid>
    </Container>
  );
};

export default Home;
