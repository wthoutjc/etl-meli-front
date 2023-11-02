import { Box, Skeleton } from "@mui/material";

const SellerSkeleton = () => {
  return (
    <Box
      sx={{
        p: 1,
      }}
    >
      <Skeleton variant="rounded" width={"100%"} height={120} sx={{ mb: 2 }} />
      <Skeleton variant="rounded" width={"100%"} height={100} sx={{ mb: 2 }} />
    </Box>
  );
};

export { SellerSkeleton };
