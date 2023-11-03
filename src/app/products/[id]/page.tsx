// Details
import { Details } from "@/components";

// Services
import { getProductDetails } from "@/services";

interface Props {
  params: {
    id: string;
  };
  searchParams: {
    from?: string;
    to?: string;
  };
}

const ProductPage = async ({ params, searchParams }: Props) => {
  const { id } = params;
  const { from, to } = searchParams || {};

  const details = await getProductDetails(id, from, to);

  return <Details details={details} />;
};

export default ProductPage;
