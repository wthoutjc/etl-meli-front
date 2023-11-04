const getTopProductsByLocations = async () => {
  const response = await fetch(`${process.env.API_URL}/api/locations/top-products`);
  const data = await response.json();
  return data;
};

export { getTopProductsByLocations };
