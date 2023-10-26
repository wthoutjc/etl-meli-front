const getProductDetails = async (id: string) => {
  const res = await fetch(`/api/product-details/${id}`);
  const productDetails = await res.json();
  return productDetails;
};

export { getProductDetails };
