import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './pages/Products';
import Product from './pages/Product';
import Store from './context/Store';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import SuccessOrder from './pages/SuccessOrder';

const App = () => (
  <ThemeProvider theme={theme}>
    <Store>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/beer" component={Products} />
          <Route path="/kits" component={Products} />
          <Route path="/accessories" component={Products} />
          <Route path="/sale" component={Products} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/success-order/:id" component={SuccessOrder} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Store>
  </ThemeProvider>
);

export default App;
