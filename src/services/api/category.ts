const getCategories = async () => {
  const res = await fetch(`/api/category`);
  const categories = await res.json();
  return categories;
};

export { getCategories };
