import { Box, Typography } from "@mui/material";

// Components
import { Details, Welcome } from "@/components";

// Moment
import moment from "moment";

export default function Home() {
  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        height: "100%",
      }}
    >
      <Typography variant="body1" sx={{ mb: 2 }}>
        Universidad Distrital Francisco José de Caldas - {moment().toString()}
      </Typography>
      <Welcome />
      <Details />
    </Box>
  );
}
