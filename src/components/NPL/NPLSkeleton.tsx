import {
  Box,
  Card,
  CardHeader,
  Chip,
  Divider,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";

// Icons
import SmartToyIcon from "@mui/icons-material/SmartToy";
import GradeIcon from "@mui/icons-material/Grade";

const NPLSkeleton = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: 1.5,
        height: "100%",
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
        }}
      >
        <SmartToyIcon sx={{ mr: 1 }} />
        <Typography variant="h6" fontWeight={500}>
          NPL
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 1,
          height: "100%1",
          overflow: "auto",
        }}
      >
        <Box>
          <Card sx={{ width: "100%", mb: 2, overflow: "auto" }}>
            <CardHeader
              avatar={
                <Chip
                  icon={<GradeIcon fontSize="small" />}
                  label={"Cargando..."}
                />
              }
              title={
                <>
                  <Typography variant="body2">
                    <b>Comentarios</b> - Cargando...
                  </Typography>
                  <Typography variant="body2">Cargando...</Typography>
                </>
              }
            />
          </Card>
        </Box>
        <Box>
          <Skeleton
            variant="rounded"
            width={"100%"}
            sx={{ mb: 1 }}
            height={85}
          />
          <Skeleton
            variant="rounded"
            width={"100%"}
            sx={{ mb: 1 }}
            height={85}
          />
          <Skeleton
            variant="rounded"
            width={"100%"}
            sx={{ mb: 1 }}
            height={85}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export { NPLSkeleton };
