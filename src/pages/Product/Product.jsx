import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import numeral from 'numeral';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import ProductsGrid from '../../components/ProductsGrid/ProductsGrid';
import ProductCard from '../../components/ProductCard/ProductCard';
import Loading from '../../components/Loading';
import { getProducts, getProductById } from '../../services/api';
import shuffle from '../../utils/shuffle';
import { Context } from '../../context/Store';
import { ProductGrid, Photo, Title, ProductInfo, PriceBox, Price, Installments } from './styled';

const Product = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [similarProducts, setSimilarProducts] = useState([]);
  const { id } = useParams();
  const [, dispatch] = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    (async () => {
      const response = await getProductById(id);
      setProduct(response);
      setLoading(false);
    })();

    (async () => {
      const response = await getProducts();
      const shuffleList = shuffle(response);
      const similarList = shuffleList.filter((item) => item.id !== Number(id)).slice(0, 4);
      setSimilarProducts(similarList);
      setLoading(false);
    })();
  }, [id]);

  const addProductCart = () => {
    dispatch({ type: 'ADD_PRODUCT_CART', payload: product });
    history.push('/cart');
  };

  return (
    <Container>
      {!loading ? (
        <ProductGrid>
          <Photo>
            <img src={product.photo} alt={product.title} />
          </Photo>
          <ProductInfo>
            <Title>{product.title}</Title>
            <PriceBox>
              <Price>
                {numeral(product.unit_price).format('$0,0.00')}
              </Price>
              <Installments>
                em até <span>12x</span> de <span>{numeral(product.unit_price / 12).format('$0,0.00')}</span>
              </Installments>
            </PriceBox>
            <Button icon={faShoppingCart} block large onClick={addProductCart}>Comprar</Button>
            <Heading>Descrição</Heading>
            <p>{product.description}</p>
          </ProductInfo>
        </ProductGrid>
      ) : <Loading />}

      <Heading>Produtos similares</Heading>
      {!loading ? (
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
