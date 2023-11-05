import Link from "next/link";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Typography,
} from "@mui/material";

// Interfaces
import { TopProductsLocation } from "@/interfaces";

interface Props {
  product: TopProductsLocation;
  index: number;
}

const LocationProductCard = ({ product, index }: Props) => {
  const {
    condition,
    k_products,
    k_sellers,
    price,
    product_name,
    rating,
    seller_name,
    total_available,
    total_sold,
  } = product;

  return (
    <Card sx={{ width: 720, m: 1 }}>
      <CardHeader
        title={`${index + 1} - ${product_name} | ${k_products}`}
        subheader={`Vendedor ${seller_name} - ${k_sellers} | Rating ${rating}`}
        action={
          <Link href={`/sellers/${k_sellers}`} passHref>
            <Button variant="outlined" color="warning">
              Ver vendedor
            </Button>
          </Link>
        }
        avatar={<Chip label={condition} />}
      />
      <CardContent>
        <Typography variant="body1" component="p">
          <strong>Precio:</strong> {price}
        </Typography>
        <Typography variant="body1" component="p">
          <strong>Total disponible:</strong> {total_available}
        </Typography>
        <Typography variant="body1" component="p">
          <strong>Total vendido:</strong> {total_sold}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/products/${k_products}`} passHref>
          <Button variant="contained" color="info">
            Ver producto
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export { LocationProductCard };
