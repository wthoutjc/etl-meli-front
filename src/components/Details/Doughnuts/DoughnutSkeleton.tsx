import { Card, CardContent, CardHeader, Skeleton } from "@mui/material";

const DoughnutSkeleton = () => {
  return (
    <Card
      sx={{
        minWidth: "100%",
        height: 150,
        display: "flex",
        mt: 1,
      }}
    >
      <CardHeader
        title={<Skeleton variant="rounded" width={70} height={30} />}
        subheader={
          <Skeleton variant="rounded" width={60} height={20} sx={{ mt: 2 }} />
        }
      />
      <CardContent>
        <Skeleton variant="circular" width={110} height={110} />
      </CardContent>
    </Card>
  );
};

export { DoughnutSkeleton };
