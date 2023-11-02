interface Alert {
  message: string;
  severity: "error" | "warning" | "info" | "success";
  onClose?: () => void;
}

interface DrawerState {
  open: boolean;
}

interface UIState {
  drawer: DrawerState;
  alerts: Alert[];
}

export { Alert, DrawerState, UIState };
