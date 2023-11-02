const getSeller = async (sellerId: string) => {
  const res = await fetch(`/api/sellers/${sellerId}`);
  const seller = await res.json();
  return seller;
};

export { getSeller };
