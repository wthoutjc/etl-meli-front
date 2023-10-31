"use client";
import { Chip, Divider, Paper, Stack, Typography } from "@mui/material";

// Zustand
import { useDetailsStore } from "@/zustand";

const Welcome = () => {
  const { productDetails } = useDetailsStore();
  const { details } = productDetails;

  return details.length === 0 ? (
    <Paper
      sx={{
        p: 2,
        width: "100%",
        borderRadius: 1,
        mb: 2,
      }}
    >
      <Typography variant="h5" fontWeight={600} sx={{ mb: 1 }}>
        Bienvenido a la aplicación de búsqueda de productos de Mercado Libre
      </Typography>
      <Stack direction="row" spacing={2}>
        <Chip size="small" label="Mercado Libre" />
        <Chip size="small" label="Mercado Libre" />
      </Stack>
      <Divider
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          mt: 1,
          mb: 1,
        }}
      />
      <Typography variant="body1" fontWeight={400}>
        Accede al menú de búsqueda y selecciona un producto
      </Typography>
    </Paper>
  ) : null;
};

export { Welcome };
