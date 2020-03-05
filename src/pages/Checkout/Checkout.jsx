import React, { useContext, useState, useEffect } from 'react';
import { useHistory, Switch, Route, useRouteMatch, useLocation } from 'react-router-dom';
import { createTransaction } from '../../services/pagarme';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import { Context } from '../../context/Store';
import EmptyState from '../../components/EmptyState';
import Loading from '../../components/Loading';
import CustomerForm from './components/CustomerForm';
import PaymentForm from './components/PaymentForm';
import ResumeOrder from './components/ResumeOrder';
import { CheckoutGrid, CheckoutAside } from './styled';
import BillingForm from './components/BillingForm';
import mountTransactionBody from './mountTransactionBody';

const Checkout = () => {
  const [customerData, setCustomerData] = useState({});
  const [billingData, setBillingData] = useState({});
  const [totalPrice, setTotalPrice] = useState(null);
  const [showLoading, setShowLoading] = useState(false);
  const [store, dispatch] = useContext(Context);
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
    const transactionBody = mountTransactionBody(
      paymentData,
      customerData,
      billingData,
      store.cart,
      totalPrice
    );

    setShowLoading(true);
    createTransaction(transactionBody)
      .then(transaction => {
        setShowLoading(false);
        dispatch({ type: 'CLEAN_PRODUCTS_CART' });
        history.push(`/success-order/${transaction.id}`);
      })
      .catch(exception => {
        console.error(exception.response);
        setShowLoading(false);
      });
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
          </Switch>

          <CheckoutAside>
            <ResumeOrder />
          </CheckoutAside>
        </CheckoutGrid>
      ) : (
        <EmptyState>Seu carrinho está vazio.</EmptyState>
      )}
      {showLoading && <Loading fullscreen />}
    </Container>
  );
};

export default Checkout;
