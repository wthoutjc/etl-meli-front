"use client";
import { Box } from "@mui/material";

// Zustand
import { useDetailsStore } from "@/zustand";

// Components
import { DetailCard } from "@/components/Details/DetailCard";

const Details = () => {
  const { productDetails } = useDetailsStore();
  const { details } = productDetails;
  console.log(details);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {details.length > 0 ? (
        details.map((product, i) => <DetailCard key={i} product={product} />)
      ) : (
        <Box
          sx={{
            p: 2,
          }}
        >
          Accede al menú de búsqueda y selecciona un producto
        </Box>
      )}
    </Box>
  );
};

export { Details };
