import { Box, Typography } from "@mui/material";
import Image from "next/image";

const NoDetails = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Typography variant="h3" sx={{ mb: 5 }} fontWeight={700}>
        No hay resultados para esta búsqueda
      </Typography>
      <Image
        src="https://res.cloudinary.com/ddmeptk5c/image/upload/f_auto,q_auto/v1/portfolio/assets/xpdj3e1svfrpuhpuapzt"
        width={300}
        height={300}
        alt="No hay resultados"
      />
    </Box>
  );
};

export { NoDetails };
