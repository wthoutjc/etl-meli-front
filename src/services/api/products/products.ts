const getProducts = async (categoryId: string) => {
  const res = await fetch(`/api/products/${categoryId}`);
  const products = await res.json();
  return products;
};

export { getProducts };
