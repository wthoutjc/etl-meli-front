// Details
import { Details } from "@/components";

interface Props {
  params: {
    id: string;
  };
  searchParams: {
    from?: string;
    to?: string;
  };
}

const ProductPageId = async ({ params, searchParams }: Props) => {
  const { id } = params;
  const { from, to } = searchParams || {};

  return <Details id={id} from={from} to={to} />;
};

export default ProductPageId;
