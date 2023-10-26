import { Card, CardContent, CardHeader, Typography } from "@mui/material";

// Interfaces
import { ProductDetails } from "@/interfaces";

interface Props {
  product: ProductDetails;
}

const DetailCard = ({ product }: Props) => {
  const {
    amount_sold,
    available_quantity,
    date,
    k_product_details,
    k_products,
    k_sellers,
  } = product;
  return (
    <Card sx={{ width: 325, m: 1 }}>
      <CardHeader title={k_products} subheader={k_product_details} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {k_sellers} - {date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          available_quantity: {available_quantity}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          amount_sold: {amount_sold}
        </Typography>
      </CardContent>
    </Card>
  );
};

export { DetailCard };
