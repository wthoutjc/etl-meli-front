import { Skeleton } from "@mui/material";

const RecentlySkeleton = () => {
  return (
    <>
      <Skeleton variant="rounded" width={"100%"} height={180} sx={{ mb: 2 }} />
      <Skeleton variant="rounded" width={"100%"} height={180} sx={{ mb: 2 }} />
    </>
  );
};

export { RecentlySkeleton };
