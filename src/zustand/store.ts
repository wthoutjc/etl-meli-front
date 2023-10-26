import { create } from "zustand";

// Slices & Initial states
import { DrawerSlice, DetailsSlice } from "@/libs";

// Interfaces
import { DrawerState, DetailsState } from "@/interfaces";

const drawerInitialState: DrawerState = {
  open: false,
};

const detailsInitialState: DetailsState = {
  details: [],
};

export const useDrawerStore = create<DrawerSlice>()((set) => ({
  drawer: drawerInitialState,
  setDrawer: (drawer: DrawerState) =>
    set({
      drawer,
    }),
}));

export const useDetailsStore = create<DetailsSlice>()((set) => ({
  productDetails: detailsInitialState,
  setDetails: (productDetails: DetailsState) =>
    set({
      productDetails,
    }),
}));
