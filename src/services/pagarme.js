import pagarme from 'pagarme';

export const createTransaction = (data) => (
  pagarme.client.connect({ api_key: process.env.REACT_APP_PAGARME_API_KEY })
    .then(client => client.transactions.create(data))
);
