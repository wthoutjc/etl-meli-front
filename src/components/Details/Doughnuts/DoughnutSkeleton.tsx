import { Box, Skeleton } from "@mui/material";

const DoughnutSkeleton = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Skeleton variant="rounded" width={"40%"} height={40} />
        <Skeleton variant="circular" width={90} height={90} />
      </Box>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Skeleton variant="rounded" width={"40%"} height={40} />
        <Skeleton variant="circular" width={90} height={90} />
      </Box>
    </>
  );
};

export { DoughnutSkeleton };
