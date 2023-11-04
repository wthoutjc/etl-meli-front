"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

// Interfaces
import { TopProductsLocation } from "@/interfaces";

//Charts
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement } from "chart.js";
import { ProductHistory } from "@/interfaces";
import Link from "next/link";
ChartJS.register(ArcElement, Tooltip);

interface Props {
  location: TopProductsLocation;
  index: number;
}

const LocationCard = ({ location, index }: Props) => {
  const {
    Country,
    city,
    department,
    total_available,
    total_sellers,
    total_sold,
  } = location;

  return (
    <Card sx={{ width: 550, m: 1 }}>
      <CardHeader
        title={`${index + 1} - ${city}`}
        subheader={`Vendedores: ${total_sellers}`}
      />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="body1">
            <strong>Departamento: </strong>
            {department}
          </Typography>
          <Typography variant="body1">
            <strong>País: </strong>
            {Country}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1">
            <strong>Productos disponibles: </strong>
            {total_available}
          </Typography>
          <Typography variant="body1">
            <strong>Productos vendidos: </strong>
            {total_sold}
          </Typography>
        </Box>
        <Box
          sx={{
            width: 100,
          }}
        >
          <Doughnut
            data={{
              labels: ["Cantidad vendida", "Cantidad disponible"],
              datasets: [
                {
                  data: [total_sold, total_available],
                  backgroundColor: ["rgba(26, 53, 80, 0.897)", "#66bb6a"],
                  hoverBackgroundColor: ["rgba(26, 53, 80, 0.897)", "#66bb6a"],
                  borderRadius: 3,
                  borderColor: ["rgba(26, 53, 80, 0.897)", "#009432"],
                  hoverOffset: 3,
                },
              ],
            }}
            options={{
              cutout: 15,
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                legend: {
                  position: "bottom",
                },
              },
              elements: {
                arc: {
                  borderWidth: 0,
                },
              },
            }}
          />
        </Box>
      </CardContent>
      <CardActions>
        <Link href={`/locations/${city}`}>
          <Button variant="contained" color="info" size="small">
            Ver más
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export { LocationCard };
