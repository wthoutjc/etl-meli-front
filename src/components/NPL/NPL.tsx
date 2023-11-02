import { Box, Paper, Divider, Typography } from "@mui/material";

// Icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const NPL = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: 1.5,
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
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
