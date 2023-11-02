"use client";
import { useState, useEffect } from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";

// Services
import { getProductHistory } from "@/services";

// Interfaces
import { ProductHistory } from "@/interfaces";

// Components
import { DoughnutCard } from "@/components/Details/Doughnuts/DoughnutCard";

// Icons
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";

interface Props {
  productId: string;
}

const DoughnutDetails = ({ productId }: Props) => {
  const [details, setDetails] = useState<ProductHistory[]>([]);

  useEffect(() => {
    getProductHistory(productId).then((res) => setDetails(res));
  }, [productId]);

  return (
    <Paper
      sx={{
        width: "20%",
        display: "flex",
        flexDirection: "column",
        mb: 2,
        height: "100%",
        p: 1,
      }}
      elevation={3}
    >
      <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
        <DataSaverOffIcon sx={{ mr: 1 }} />
        <Typography variant="body1" fontWeight={200}>
          <b>Ventas</b>
        </Typography>
      </Box>
      <Divider />
      {details.map((product, i) => (
        <DoughnutCard key={i} {...product} />
      ))}
    </Paper>
  );
};

export { DoughnutDetails };
