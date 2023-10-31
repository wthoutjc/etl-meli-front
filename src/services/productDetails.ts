const getProductDetails = async (id: string) => {
  const res = await fetch(`/api/product-details/${id}`);
  const productDetails = await res.json();
  return productDetails;
};

const getRecently = async (date: string) => {
  const res = await fetch(`/api/product-details/recently?date=${date}`);
  const recently = await res.json();
  return recently;
};

export { getProductDetails, getRecently };
