// Details
import { Details } from "@/components";

// Services
import { getProductDetails } from "@/services";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const details = await getProductDetails(id);

  return <Details details={details} />;
};

export default ProductPage;
