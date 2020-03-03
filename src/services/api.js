import { products } from '../mock';

export const getProducts = async () => new Promise((resolve) => setTimeout(() => {
  resolve(products);
}, 1000));

export const getProductById = async (id) => new Promise((resolve) => setTimeout(() => {
  const product = products.filter((item) => item.id === Number(id));
  resolve(product[0]);
}, 1000));
