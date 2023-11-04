import { Box, Divider, Paper, Typography } from "@mui/material";

// Components
import { ProductCard } from "@/components";

// Services
import { getTopProducts } from "@/services";

const ProductPage = async () => {
  const products = await getTopProducts();

  return (
    <Box>
      <Paper
        sx={{
          p: 2,
          width: "100%",
          borderRadius: 1,
          mb: 2,
        }}
      >
        <Typography variant="h5" fontWeight={600} sx={{ mb: 1 }}>
          Top Mejores Productos
        </Typography>
        <Divider
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            mt: 1,
            mb: 1,
          }}
        />
        <Typography variant="body1" fontWeight={400}>
          Los mejores productos de la plataforma de Mercado Libre - Colombia
        </Typography>
      </Paper>
      <Paper sx={{ p: 2, display: "flex", flexWrap: "wrap" }}>
        {products.map((product, i) => (
          <ProductCard key={i} product={product} index={i} />
        ))}
      </Paper>
    </Box>
  );
};

export default ProductPage;
