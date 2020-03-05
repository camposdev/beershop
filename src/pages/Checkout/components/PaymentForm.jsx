import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Heading from '../../../components/Heading';
import TextField from '../../../components/TextField';
import { CheckoutForm, PayButton, LinkDemo, InlineForm } from '../styled';

const PaymentForm = ({ data, onSubmit }) => {
  const [paymentData, setPaymentData] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(paymentData);
  };

  const handleChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const autoFill = () => {
    setPaymentData({
      card_number: '4111111111111111',
      card_cvv: '123',
      card_expiration_date: '0922',
      card_holder_name: 'Morpheus Fishburne',
    });
  };

  return (
    <CheckoutForm onSubmit={handleSubmit}>
      <Heading sub>Pagamento</Heading>
      <InlineForm>
        <TextField name="card_holder_name" label="Nome" value={paymentData.card_holder_name || ''} onChange={handleChange} />
        <TextField type="number" name="card_number" label="Número do cartão" value={paymentData.card_number || ''} onChange={handleChange} />
      </InlineForm>
      <InlineForm>
        <TextField type="number" name="card_expiration_date" label="Data de expiração" value={paymentData.card_expiration_date || ''} onChange={handleChange} />
        <TextField type="number" name="card_cvv" label="CVV" value={paymentData.card_cvv || ''} onChange={handleChange} />
      </InlineForm>
      <LinkDemo type="button" onClick={autoFill}>Preencher dados automaticamente</LinkDemo>

      <PayButton large icon={faArrowRight}>Finalizar compra</PayButton>
    </CheckoutForm>
  );
};

PaymentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  data: PropTypes.oneOfType([PropTypes.object])
};

PaymentForm.defaultProps = {
  data: {}
};

export default PaymentForm;
