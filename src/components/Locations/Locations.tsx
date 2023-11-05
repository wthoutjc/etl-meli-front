import { Paper } from "@mui/material";

// Components
import { LocationCard } from "@/components/Locations/LocationCard";

// Interfaces
import { TopLocation } from "@/interfaces";

interface Props {
  cities: TopLocation[];
}

const Locations = ({ cities }: Props) => {
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        p: 2,
      }}
    >
      {cities.map((city, index) => (
        <LocationCard key={index} location={city} index={index} />
      ))}
    </Paper>
  );
};

export { Locations };
