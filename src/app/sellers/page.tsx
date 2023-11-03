import { Box } from "@mui/material";

// Services
import { getSellers } from "@/services";

// Components
import { TopSellers } from "@/components";

const SellersPage = async () => {
  const sellers = await getSellers();

  return (
    <Box>
      <TopSellers topSellers={sellers} />
    </Box>
  );
};

export default SellersPage;
