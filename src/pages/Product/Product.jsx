import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import numeral from 'numeral';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import { ProductGrid, Photo, Title, ProductInfo, PriceBox, Price, Installments } from './styled';
import ProductsGrid from '../../components/ProductsGrid/ProductsGrid';
import ProductCard from '../../components/ProductCard/ProductCard';
import Loading from '../../components/Loading';

const Product = () => {
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('/api.json')
      .then((res) => res.json())
      .then((res) => {
        const current = res.products.filter((item) => item.id === Number(id));
        setProduct(current[0]);
        const similar = res.products.filter((item) => item.id !== Number(id)).slice(0, 4);
        setTimeout(() => {
          setSimilarProducts(similar);
        }, 1000);
      });
  }, [id]);

  return (
    <Container>
      <ProductGrid>
        <Photo>
          <img src={product.photo} alt={product.name} />
        </Photo>
        <ProductInfo>
          <Title>{product.name}</Title>
          <PriceBox>
            <Price>
              {numeral(product.price).format('$0,0.00')}
            </Price>
            <Installments>
              em até <span>12x</span> de <span>{numeral(product.price / 12).format('$0,0.00')}</span>
            </Installments>
          </PriceBox>
          <Button icon={faShoppingCart} block large>Comprar</Button>
          <Heading>Descrição</Heading>
          <p>{product.description}</p>
        </ProductInfo>
      </ProductGrid>

      <Heading>Produtos similares</Heading>
      {similarProducts.length ? (
        <ProductsGrid>
          {similarProducts.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </ProductsGrid>
      ) : <Loading />}
    </Container>
  );
};

export default Product;
