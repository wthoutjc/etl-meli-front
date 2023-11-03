import { Box, Divider, Paper, Typography } from "@mui/material";

// Interfaces
import { TopSellers } from "@/interfaces";

// Components
import { TopSellerCard } from "@/components/Seller/TopSellerCard";

interface Props {
  topSellers: TopSellers[];
}
const TopSellers = ({ topSellers }: Props) => {
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
          Top Mejores Vendedores
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
          Los mejores vendedores de la plataforma de Mercado Libre - Colombia
        </Typography>
      </Paper>

      <Paper
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {topSellers.map((seller, i) => (
          <TopSellerCard key={i} seller={seller} index={i + 1} />
        ))}
      </Paper>
    </Box>
  );
};

export { TopSellers };
