import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Heading from '../../../components/Heading';
import TextField from '../../../components/TextField';
import { CheckoutForm, PayButton, InlineForm, LinkDemo } from '../styled';

const BillingForm = ({ data, onSubmit }) => {
  const [billingData, setBillingData] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(billingData);
  };

  const handleChange = (e) => {
    setBillingData({ ...billingData, [e.target.name]: e.target.value });
  };

  const autoFill = () => {
    setBillingData({
      name: 'Trinity Moss',
      country: 'br',
      state: 'sp',
      city: 'Cotia',
      neighborhood: 'Rio Cotia',
      street: 'Rua Matrix',
      street_number: '9999',
      zipcode: '06714360'
    });
  };

  return (
    <CheckoutForm onSubmit={handleSubmit}>
      <Heading sub>Endereço</Heading>
      <InlineForm>
        <TextField name="name" label="Título do endereço" onChange={handleChange} value={billingData.name || ''} />
        <TextField name="zipcode" label="CEP" onChange={handleChange} value={billingData.zipcode || ''} />
      </InlineForm>
      <InlineForm>
        <TextField name="street" label="Rua" value={billingData.street || ''} onChange={handleChange} />
        <TextField name="street_number" label="Número" value={billingData.street_number || ''} onChange={handleChange} />
      </InlineForm>
      <InlineForm>
        <TextField name="city" label="Cidade" value={billingData.city || ''} onChange={handleChange} />
        <TextField name="state" label="Estado" value={billingData.state || ''} onChange={handleChange} />
        <TextField name="country" label="País" value={billingData.country || ''} onChange={handleChange} />
      </InlineForm>
      <LinkDemo type="button" onClick={autoFill}>Preencher dados automaticamente</LinkDemo>

      <PayButton large icon={faArrowRight}>Pagamento</PayButton>
    </CheckoutForm>
  );
};

BillingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  data: PropTypes.oneOfType([PropTypes.object])
};

BillingForm.defaultProps = {
  data: {}
};

export default BillingForm;
