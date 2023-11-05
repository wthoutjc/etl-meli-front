import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

// Interfaces
import { Product } from "@/interfaces";
import Link from "next/link";

// Icons
import InfoIcon from "@mui/icons-material/Info";

interface TopProducts extends Product {
  total_sold?: number;
  total_available?: number;
}

interface Props {
  product: TopProducts;
  index: number;
}

const ProductCard = ({ product, index }: Props) => {
  const { condition, k_categories, k_products, name, price } = product;

  return (
    <Card
      sx={{
        m: 1,
        width: 350,
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {index + 1} - {k_products}
          </Typography>
          <Chip label={condition} variant="outlined" />
        </Box>
        <Typography variant="body1">{name}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Categoria: {k_categories}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/products/${k_products}`} passHref>
          <Button variant="contained" size="small" endIcon={<InfoIcon />}>
            Información
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export { ProductCard };
