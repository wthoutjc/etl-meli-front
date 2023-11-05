import { Box, Divider, Paper, Typography } from "@mui/material";

// Services
import { getTopLocations } from "@/services";

// Components
import { Locations } from "@/components";

const LocationsPage = async () => {
  const cities = await getTopLocations();

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
          Top Mejores Locaciones
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
          Las mejores locaciones de la plataforma de Mercado Libre - Colombia
        </Typography>
      </Paper>
      <Locations cities={cities} />
    </Box>
  );
};

export default LocationsPage;
