import { StateCreator } from "zustand";

// Interfaces
import { Alert, DrawerState, UIState } from "@/interfaces";

const uiInitialState: UIState = {
  drawer: {
    open: false,
  },
  alerts: [],
};

interface UISlice {
  drawer: DrawerState;
  alerts: Alert[];
  setDrawer: (drawer: DrawerState) => void;
  setAlerts: (alerts: Alert[]) => void;
}

const createUISlice: StateCreator<UIState> = (set) => ({
  ...uiInitialState,
  setDrawer: (drawer: DrawerState) => set({ drawer }),
  setAlerts: (alerts: Alert[]) => set({ alerts }),
});

export { createUISlice };
export type { UISlice };
