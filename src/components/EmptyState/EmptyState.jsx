import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import { EmptyState } from './styled';

export default ({ children }) => {
  const history = useHistory();
  return (
    <EmptyState>
      <h2>Ops!</h2>
      <p>{children}</p>
      <Button onClick={() => history.push('/')}>Voltar para o início</Button>
    </EmptyState>
  );
};
