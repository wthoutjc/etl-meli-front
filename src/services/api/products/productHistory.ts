const getProductHistory = async (productId: string) => {
  const res = await fetch(`/api/product-details/history/${productId}`);
  const productHistory = await res.json();
  return productHistory;
};

export { getProductHistory };
