import { Box, Paper } from "@mui/material";

// Components
import { Recently, Welcome } from "@/components";

// Client Components
import { Products } from "@/components/Products/Products";

export default function Home() {
  return (
    <>
      <Welcome />
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          height: "100%",
        }}
      >
        <Paper
          sx={{
            width: "80%",
            height: "100%",
            overflow: "auto",
          }}
        >
          <Products />
        </Paper>
        <Box
          sx={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
            ml: 2,
          }}
        >
          <Paper
            sx={{
              overflow: "auto",
            }}
          >
            <Recently />
          </Paper>
        </Box>
      </Box>
    </>
  );
}
