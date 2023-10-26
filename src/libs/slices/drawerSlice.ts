import { StateCreator } from "zustand";

// Interfaces
import { DrawerState } from "@/interfaces";

const drawerInitialState: DrawerState = {
  open: false,
};

interface DrawerSlice {
  drawer: DrawerState;
  setDrawer: (drawer: DrawerState) => void;
}

const createDrawerSlice: StateCreator<DrawerState> = (set) => ({
  ...drawerInitialState,
  setDrawer: (drawer: DrawerState) => {
    set({
      ...drawer,
    });
  },
});

export { createDrawerSlice };
export type { DrawerSlice };
