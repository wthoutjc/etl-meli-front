import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

// Interfaces
import { Recently } from "@/interfaces";

// Moment
import moment from "moment";

// Icons
import InfoIcon from "@mui/icons-material/Info";

const RecentlyCard = (recently: Recently) => {
  const {
    amount_sold,
    available_quantity,
    condition,
    date,
    k_products,
    name,
    price,
  } = recently;

  const dateFormatted = moment(date).format("DD/MM/YYYY");

  return (
    <Card
      sx={{
        mb: 2,
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {k_products}
          </Typography>
          <Chip label={condition} variant="outlined" />
        </Box>
        <Typography variant="body1">{name}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {dateFormatted}
        </Typography>
        <Typography variant="body2">
          amount_sold <b>{amount_sold}</b>
          <br />
          available_quantity <b>{available_quantity}</b>
          <br />
          price <b>{price}</b>
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" endIcon={<InfoIcon />}>
          Información
        </Button>
      </CardActions>
    </Card>
  );
};

export { RecentlyCard };
