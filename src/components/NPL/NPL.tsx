import { Box, Paper, Divider, Typography } from "@mui/material";

// Icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const NPL = () => {
  return (
    <Paper
      sx={{
        width: "35%",
        display: "flex",
        flexDirection: "column",
        p: 1.5,
        ml: 2,
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <AddShoppingCartIcon sx={{ mr: 1 }} />
        <Typography variant="h6" fontWeight={500}>
          NPL
        </Typography>
      </Box>
      <Divider />
    </Paper>
  );
};

export { NPL };
