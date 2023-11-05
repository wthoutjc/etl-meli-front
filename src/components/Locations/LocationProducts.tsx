import { Paper } from "@mui/material";

// Interfaces
import { TopProductsLocation } from "@/interfaces";

// Components
import { LocationProductCard } from "./LocationProductCard";

interface Props {
  products: TopProductsLocation[];
}

const LocationProducts = ({ products }: Props) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {products.map((product, i) => (
        <LocationProductCard key={i} product={product} index={i} />
      ))}
    </Paper>
  );
};

export { LocationProducts };
