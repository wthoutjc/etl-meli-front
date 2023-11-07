import { Box, Paper, Typography } from "@mui/material";

// Components
import { SellerInfo, Sellers } from "@/components";

const SellerPageId = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <Box>
      <Paper elevation={3} sx={{ mb: 2 }}>
        <SellerInfo sellerId={id} />
      </Paper>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" fontWeight={600}>
          Productos del vendedor
        </Typography>
        <Sellers sellerId={id} />
      </Paper>
    </Box>
  );
};

export default SellerPageId;
