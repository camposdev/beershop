import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';
import { StyledFooter, Payments, MenuFooter } from './styled';

export default () => (
  <StyledFooter>
    <Container>
      <MenuFooter>
        <Link to="/">Dúvidas Frequentes</Link>
        <Link to="/">Como Comprar</Link>
        <Link to="/">Trocas e Devoluções</Link>
        <Link to="/">Prazos e formas de Envio</Link>
        <Link to="/">Formas de Pagamento</Link>
      </MenuFooter>
      <Payments>
        <img src="/bandeira1.png" alt="Formas de pagamento" />
        <img src="/bandeira2.png" alt="Formas de pagamento" />
      </Payments>
      <small>Todos os itens do site estão sujeitos a
        disponibilidade do estoque | Vendas sujeitas à
        análise e confirmação de dados<br />
        Copyright © {new Date().getFullYear()} BeerShop
      </small>
    </Container>
  </StyledFooter>
);
