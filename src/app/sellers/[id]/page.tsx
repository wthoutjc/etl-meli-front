import { Box, Paper, Typography } from "@mui/material";

// Services
import { getProductsBySeller } from "@/services";

// Components
import { SellerInfo, ProductCard } from "@/components";

const SellerPageId = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const products = await getProductsBySeller(id);

  return (
    <Box>
      <Paper elevation={3} sx={{ mb: 2 }}>
        <SellerInfo sellerId={id} />
      </Paper>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" fontWeight={600}>
          Productos del vendedor
        </Typography>
        {products.map((product, i) => (
          <ProductCard key={i} product={product} index={i} />
        ))}
      </Paper>
    </Box>
  );
};

export default SellerPageId;
