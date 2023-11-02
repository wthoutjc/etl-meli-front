"use client";
import { useEffect, useState } from "react";
import { Snackbar, Stack } from "@mui/material";

// Zustand
import { useUIStore } from "@/zustand";

// Components
import { Alert } from "@/components/ui/Alert/Alert";

const Alerts = () => {
  const { alerts, setAlerts } = useUIStore((state) => state);
  const [open, setOpen] = useState(false);

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setAlerts([]);
  };

  useEffect(() => {
    if (alerts.length > 0) setOpen(true);
  }, [alerts]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{
        horizontal: "right",
        vertical: "top",
      }}
    >
      <Stack spacing={2} sx={{ width: "100%" }}>
        {alerts.map((alert, i) => (
          <Alert key={i} {...alert} />
        ))}
      </Stack>
    </Snackbar>
  );
};

export { Alerts };
