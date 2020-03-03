import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import ProductCard from '../../components/ProductCard/ProductCard';
import Heading from '../../components/Heading';
import ProductsGrid from '../../components/ProductsGrid/ProductsGrid';
import { GridBanners } from './styled';
import Loading from '../../components/Loading';
import { getProducts } from '../../services/api';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [otherProducts, setOtherProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getProducts();
      const featured = res.filter((item) => item.featured);
      const others = res.filter((item) => !item.featured);
      setFeaturedProducts(featured);
      setOtherProducts(others);
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <Banner
        img="/banners/banner.jpg"
        imgMobile="/banners/banner_mobile.jpg"
        alt="Ofertas do dia"
      />
      <Heading>Destaques</Heading>
      {featuredProducts.length ? (
        <ProductsGrid>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </ProductsGrid>
      ) : <Loading />}
      <GridBanners>
        <img src="/banners/banner1.jpg" alt="Camisetas" />
        <img src="/banners/banner2.jpg" alt="Elvis Juice" />
        <img src="/banners/banner3.jpg" alt="Hocus Pocus" />
      </GridBanners>
      <Heading>Outros produtos</Heading>
      {otherProducts.length ? (
        <ProductsGrid>
          {otherProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </ProductsGrid>
      ) : <Loading />}
    </Container>
  );
};

export default Home;
