import { IconButton, Alert as MUIAlert } from "@mui/material";

// Interfaces
import { Alert as IAlert } from "@/interfaces";

// Icons
import CloseIcon from "@mui/icons-material/Close";

const Alert = (alert: IAlert) => {
  const { message, severity, onClose } = alert;

  return (
    <MUIAlert
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          // onClick={onClose}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
      onClose={onClose}
      severity={severity}
      sx={{ width: "100%" }}
    >
      {message}
    </MUIAlert>
  );
};

export { Alert };
