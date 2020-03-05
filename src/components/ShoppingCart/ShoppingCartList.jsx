import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import { Context } from '../../context/Store';
import {
  WrapperItems,
  ItemCart,
  ItemCartPhoto,
  ItemCartTitle,
  ItemCartPrice,
  ItemCartEmpty
} from './styled';

const ShoppingCartList = ({ onClose, ...props }) => {
  const [store] = useContext(Context);

  return (
    <WrapperItems {...props}>
      {store.cart.length > 0 ? store.cart.map((item) => (
        <ItemCart
          key={item.id}
          to={`/product/${item.id}`}
          onClick={() => onClose()}
        >
          <ItemCartPhoto>
            <img src={item.photo} alt={item.title} />
          </ItemCartPhoto>

          <div>
            <ItemCartTitle>{item.title}</ItemCartTitle>
            <ItemCartPrice>
              {item.quantity > 1 && <span>x{item.quantity}</span>}
              {numeral(item.unit_price * item.quantity).format('$0,0.00')}
            </ItemCartPrice>
          </div>
        </ItemCart>
      )) : (
        <ItemCartEmpty>Carrinho vazio!</ItemCartEmpty>
      )}
    </WrapperItems>
  );
};

ShoppingCartList.propTypes = {
  onClose: PropTypes.func
};

ShoppingCartList.defaultProps = {
  onClose: () => {}
};

export default ShoppingCartList;
