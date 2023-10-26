import { Box, Divider, Typography } from "@mui/material";

// Icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Recently = () => {
  return (
    <>
      <Box sx={{ display: "flex", p: 1.5, alignItems: "center" }}>
        <AddShoppingCartIcon sx={{ mr: 1 }} />
        <Typography variant="h6" fontWeight={500}>
          Añadidos recientemente
        </Typography>
      </Box>
      <Divider />
    </>
  );
};

export { Recently };
