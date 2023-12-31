import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";

const NoProducts = () => {
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
      <Paper
        elevation={3}
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" sx={{ mb: 5 }} fontWeight={700}>
          No hay productos añadidos
        </Typography>
        <Image
          src="https://res.cloudinary.com/ddmeptk5c/image/upload/f_auto,q_auto/v1/portfolio/assets/xpdj3e1svfrpuhpuapzt"
          width={300}
          height={300}
          alt="No hay resultados"
        />
      </Paper>
    </Box>
  );
};

export { NoProducts };
