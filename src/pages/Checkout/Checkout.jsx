import React, { useContext, useState, useEffect } from 'react';
import { useHistory, Switch, Route, useRouteMatch, useLocation } from 'react-router-dom';
import * as pagarme from '../../services/pagarme';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import { Context } from '../../context/Store';
import EmptyState from '../../components/EmptyState';
import CustomerForm from './components/CustomerForm';
import PaymentForm from './components/PaymentForm';
import ResumeOrder from './components/ResumeOrder';
import { CheckoutGrid, CheckoutAside } from './styled';
import BillingForm from './components/BillingForm';

const Checkout = () => {
  const [customerData, setCustomerData] = useState({});
  const [billingData, setBillingData] = useState({});
  const [totalPrice, setTotalPrice] = useState(null);
  const [store] = useContext(Context);
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const { key } = useLocation();

  const submitCustomer = (data) => {
    setCustomerData(data);
    history.push(`${url}/billing`);
  };

  const submitBilling = (data) => {
    setBillingData(data);
    history.push(`${url}/payment`);
  };

  const submitPayment = (paymentData) => {
    const creditCard = {
      ...paymentData
    };

    const customer = {
      external_id: '#123',
      name: customerData.name,
      email: customerData.email,
      country: customerData.country,
      type: 'individual',
      documents: [
        {
          type: 'cpf',
          number: customerData.cpf
        }
      ],
      phone_numbers: [customerData.phone],
      birthday: customerData.birthday
    };

    const billing = {
      name: billingData.name,
      address: {
        country: billingData.country,
        state: billingData.state,
        city: billingData.city,
        neighborhood: billingData.neighborhood,
        street: billingData.street,
        street_number: billingData.street_number,
        zipcode: billingData.zipcode
      }
    };

    const items = store.cart.map(item => {
      const product = {
        ...item,
        id: item.id.toString(),
        unit_price: parseInt(item.unit_price.toString().replace('.', ''), 10),
        tangible: true
      };
      delete product.photo;
      delete product.description;
      return product;
    });

    const split_rules = [
      {
        recipient_id: 're_ck7cxxyiz04njnb6duejccfkf',
        percentage: 15,
        liable: false,
        charge_processing_fee: false
      },
      {
        recipient_id: 're_ck7drdm5n01f2oz6dn7sn187i',
        percentage: 85,
        liable: true,
        charge_processing_fee: true
      }
    ];

    const transactionBody = {
      amount: totalPrice.toFixed(2).replace('.', ''),
      ...creditCard,
      customer,
      billing,
      items,
      split_rules
    };

    pagarme.createTransaction(transactionBody)
      .then(transaction => {
        console.log(transaction);
      })
      .catch(exception => console.error(exception.response));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [key]);

  useEffect(() => {
    if (store.cart.length > 0) {
      const sumTotal = store.cart.reduce(
        (prevVal, item) => prevVal + (item.unit_price * item.quantity), 0
      );
      setTotalPrice(sumTotal);
    }
  }, [store]);

  return (
    <Container>
      <Heading>Checkout</Heading>
      {store.cart.length > 0 ? (
        <CheckoutGrid>
          <Switch>
            <Route exact path={path}>
              <CustomerForm data={customerData} onSubmit={submitCustomer} />
            </Route>
            <Route path={`${path}/billing`}>
              <BillingForm data={billingData} onSubmit={submitBilling} />
            </Route>
            <Route path={`${path}/payment`}>
              <PaymentForm onSubmit={submitPayment} />
            </Route>
            <Route path={`${path}/finish`}>
              <h1>Finish</h1>
            </Route>
          </Switch>

          <CheckoutAside>
            <ResumeOrder />
          </CheckoutAside>
        </CheckoutGrid>
      ) : (
        <EmptyState>Seu carrinho está vazio.</EmptyState>
      )}
    </Container>
  );
};

export default Checkout;
