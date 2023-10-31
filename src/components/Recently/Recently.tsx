"use client";
import { useEffect, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";

// Icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// Services
import { getRecently } from "@/services";

// Moment
import moment from "moment";

// Interfaces
import { Recently } from "@/interfaces";

// Components
import { RecentlyCard } from "@/components/Recently/RecentlyCard";
import { RecentlySkeleton } from "@/components/Recently/RecentlySkeleton";

const date = moment().format("YYYY-MM-DDTHH:mm:ss").replace(" ", "T");

const Recently = () => {
  const [loading, setLoading] = useState(false);
  const [recently, setRecently] = useState<Recently[]>([]);

  useEffect(() => {
    setLoading(true);
    getRecently(date).then((res) => {
      setRecently(res);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", p: 1.5, alignItems: "center" }}>
        <AddShoppingCartIcon sx={{ mr: 1 }} />
        <Typography variant="h6" fontWeight={500}>
          Añadidos recientemente
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          p: 1,
          overflow: "auto",
        }}
      >
        {loading ? (
          <RecentlySkeleton />
        ) : (
          recently.map((item, i) => <RecentlyCard key={i} {...item} />)
        )}
      </Box>
    </>
  );
};

export { Recently };
