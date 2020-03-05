import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Heading from '../../../components/Heading';
import TextField from '../../../components/TextField';
import { CheckoutForm, PayButton, InlineForm, LinkDemo } from '../styled';

const CustomerForm = ({ data, onSubmit }) => {
  const [customerData, setCustomerData] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(customerData);
  };

  const handleChange = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  const autoFill = () => {
    setCustomerData({
      name: 'Morpheus Fishburne',
      email: 'mopheus@nabucodonozor.com',
      phone: '+5511999998888',
      birthday: '1965-01-01',
      cpf: '43964207063',
      country: 'br'
    });
  };

  return (
    <CheckoutForm onSubmit={handleSubmit}>
      <Heading sub>Dados pessoais</Heading>
      <TextField name="name" label="Nome completo" value={customerData.name || ''} onChange={handleChange} />
      <TextField type="email" name="email" label="E-mail" value={customerData.email || ''} onChange={handleChange} />
      <InlineForm>
        <TextField type="tel" name="phone" label="Telefone" value={customerData.phone || ''} onChange={handleChange} />
        <TextField type="date" name="birthday" label="Data de nascimento" value={customerData.birthday || ''} onChange={handleChange} />
      </InlineForm>
      <InlineForm>
        <TextField type="number" name="cpf" label="CPF" value={customerData.cpf || ''} onChange={handleChange} />
        <TextField name="country" label="Nacionalidade" value={customerData.country || ''} onChange={handleChange} />
      </InlineForm>
      <LinkDemo type="button" onClick={autoFill}>Preencher dados automaticamente</LinkDemo>

      <PayButton large icon={faArrowRight}>Endereço</PayButton>
    </CheckoutForm>
  );
};

CustomerForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  data: PropTypes.oneOfType([PropTypes.object])
};

CustomerForm.defaultProps = {
  data: {}
};

export default CustomerForm;
