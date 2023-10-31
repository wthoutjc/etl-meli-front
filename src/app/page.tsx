import { Box, Typography } from "@mui/material";

// Components
import { Details, Welcome } from "@/components";

// Moment
import moment from "moment";

export default function Home() {
  return (
    <Box
      sx={{
        p: 1.4,
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Typography variant="body1" sx={{ mb: 1 }}>
          Universidad Distrital Francisco José de Caldas
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <i>
            {moment().toDate().toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </i>
        </Typography>
      </Box>

      <Welcome />
      <Details />
    </Box>
  );
}
