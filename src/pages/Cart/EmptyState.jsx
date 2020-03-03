import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import { EmptyState } from './styled';

export default () => {
  const history = useHistory();
  return (
    <EmptyState>
      <h2>Ops!</h2>
      <p>Seu carrinho está vazio!</p>
      <Button onClick={() => history.push('/')}>Voltar para o início</Button>
    </EmptyState>
  );
};
