import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import numeral from 'numeral';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import { ThankBox, Table } from './styled';
import { getTransactionById, getPayablesById } from '../../services/pagarme';
import Loading from '../../components/Loading';
import Button from '../../components/Button';

const SuccessOrder = () => {
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState({});
  const [payables, setPayables] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    getTransactionById(id)
      .then(response => {
        setLoading(false);
        setOrder(response);
      });
    getPayablesById(id)
      .then(response => {
        setPayables(response);
      });
  }, [id]);

  return (
    <Container>
      <ThankBox>
        <FontAwesomeIcon icon={faGlassCheers} />
        <Heading center>Compra realizada com sucesso</Heading>
      </ThankBox>

      {loading && <Loading />}
      {order.id && (
        <>
          <Heading sub>Detalhes do pedido</Heading>
          <Table>
            <thead>
              <tr>
                <th align="left">Produto</th>
                <th align="center">Qtd</th>
                <th align="right">Valor</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map(item => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td align="center">{item.quantity}</td>
                  <td align="right"><b>{numeral(item.unit_price / 100).format('$0,0.00')}</b></td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" align="right">
                  <b>Total {numeral(order.amount / 100).format('$0,0.00')}</b>
                </td>
              </tr>
            </tfoot>
          </Table>

          <Heading sub>Recebedores</Heading>

          <Table>
            <thead>
              <tr>
                <th align="left">Recebedor</th>
                <th align="right">Valor</th>
              </tr>
            </thead>
            <tbody>
              {payables.length > 0 && payables.map(payable => (
                <tr key={payable.id}>
                  <td>{payable.recipient_id}</td>
                  <td align="right"><b>{numeral(payable.amount / 100).format('$0,0.00')}</b></td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div style={{ textAlign: 'center' }}>
            <Button onClick={() => history.push('/')}>Voltar para o início</Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default SuccessOrder;
