export default (paymentData, customerData, billingData, cart, totalPrice) => {
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

  const items = cart.map(item => {
    const product = {
      ...item,
      id: item.id.toString(),
      unit_price: Math.round(item.unit_price * 100).toString(),
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

  return {
    amount: Math.round(totalPrice * 100).toString(),
    ...creditCard,
    customer,
    billing,
    items,
    split_rules
  };
};
