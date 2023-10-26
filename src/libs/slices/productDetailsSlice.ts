import { StateCreator } from "zustand";

// Interfaces
import { DetailsState } from "@/interfaces";

const detailsInitialState: DetailsState = {
  details: [],
};

interface DetailsSlice {
  productDetails: DetailsState;
  setDetails: (productDetails: DetailsState) => void;
}

const createDetailsSlice: StateCreator<DetailsState> = (set) => ({
  ...detailsInitialState,
  setDetails: (productDetails: DetailsState) => {
    set({
      ...productDetails,
    });
  },
});

export { createDetailsSlice };
export type { DetailsSlice };
