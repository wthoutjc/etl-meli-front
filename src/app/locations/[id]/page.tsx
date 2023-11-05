import { Box, Divider, Paper, Typography } from "@mui/material";

// Services
import { getTopProductsByLocations } from "@/services";

// Components
import { LocationProducts } from "@/components";

const LocationPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id } = params;
  const products = await getTopProductsByLocations(id);

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
          Productos más vendidos en {id}
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
          Los mejores productos de la plataforma de Mercado Libre - {id} -
          Colombia
        </Typography>
      </Paper>
      <LocationProducts products={products} />
    </Box>
  );
};

export default LocationPage;
