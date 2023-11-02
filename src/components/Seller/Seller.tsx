import {
  Box,
  Card,
  CardHeader,
  Chip,
  Divider,
  Paper,
  Typography,
} from "@mui/material";

// Interfaces
import { Seller as ISeller } from "@/interfaces";

// Icons
import GradeIcon from "@mui/icons-material/Grade";
import PlaceIcon from "@mui/icons-material/Place";

interface Props {
  seller: ISeller;
}

const Seller = ({ seller }: Props) => {
  const { city, country, department, k_sellers, name, rating } = seller;

  return (
    <Box
      sx={{
        p: 1,
        display: "grid",
      }}
    >
      <Card sx={{ width: "100%", mb: 2, overflow: "auto" }}>
        <CardHeader
          avatar={
            <Chip
              icon={<GradeIcon fontSize="small" />}
              label={rating}
              color={`${
                rating > 0.8 ? "success" : rating > 0.6 ? "warning" : "error"
              }`}
            />
          }
          title={
            <Typography variant="body2">
              <b>{name}</b>
            </Typography>
          }
          subheader={k_sellers}
        />
      </Card>
      <Paper elevation={3} sx={{ p: 1, mb: 2 }}>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <PlaceIcon sx={{ mr: 1 }} />
          <Typography variant="body1" sx={{ mb: 1 }}>
            <b>Ubicación</b>
          </Typography>
        </Box>
        <Divider sx={{ mb: 1 }} />
        <Typography variant="body2">{country}</Typography>
        <Typography variant="body2">{department}</Typography>
        <Typography variant="body2">{city}</Typography>
      </Paper>
    </Box>
  );
};

export { Seller };
