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
import { TopSellers } from "@/interfaces";

//Charts
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement } from "chart.js";
import Link from "next/link";
ChartJS.register(ArcElement, Tooltip);

interface Props {
  seller: TopSellers;
  index: number;
}

const TopSellerCard = ({ seller, index }: Props) => {
  const {
    city,
    country,
    department,
    k_sellers,
    name,
    total_available,
    total_sales,
    total_sold,
  } = seller;

  return (
    <Card sx={{ width: 550, m: 2 }}>
      <CardHeader title={`${index} - ${name}`} subheader={k_sellers} />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="body1">
            <b>Ubicación</b>
          </Typography>
          <Typography variant="body2">{country}</Typography>
          <Typography variant="body2">{department}</Typography>
          <Typography variant="body2">{city}</Typography>
        </Box>
        <Box>
          <Typography variant="body1">
            <b>Rendimiento</b>
          </Typography>
          <Typography variant="body2">
            Cantidad disponible: {total_available}
          </Typography>
          <Typography variant="body2">
            Total cantidad vendida: {total_sold}
          </Typography>
          <Typography variant="body2">
            Ventas registradas: {total_sales}
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
        <Link href={`/sellers/${k_sellers}`} passHref>
          <Button size="small" variant="contained" color="info">
            Ver más
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export { TopSellerCard };
