"use client";
import { useState, useEffect } from "react";
import { Paper } from "@mui/material";

// Services
import { getTopLocations } from "@/services";

// Components
import { LocationCard } from "@/components/Locations/LocationCard";

// Interfaces
import { TopLocation } from "@/interfaces";

const Locations = () => {
  const [topLocations, setTopLocations] = useState<TopLocation[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTopLocations = async () => {
      const cities = await getTopLocations();
      setTopLocations(cities);
      setIsLoading(false);
    };

    fetchTopLocations();
  }, []);

  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        p: 2,
      }}
    >
      {topLocations.map((city, index) => (
        <LocationCard key={index} location={city} index={index} />
      ))}
    </Paper>
  );
};

export { Locations };
