"use client";
import {
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButtonGroup,
  Tooltip,
} from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";

// Icons
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ToggleButton from "@mui/material/ToggleButton";
import AddIcon from "@mui/icons-material/Add";

// Zustand
import { useProductsStore, useUIStore } from "@/zustand";

// Interfaces
import { ProductDetails } from "@/interfaces";

type ViewDetails = "grid" | "list" | "graph";

interface Props {
  view: ViewDetails;
  setView: React.Dispatch<React.SetStateAction<ViewDetails>>;
  details: ProductDetails[];
}

const ToggleMenu = ({ view, setView, details }: Props) => {
  const theme = useTheme<Theme>();
  const { products, addProducts } = useProductsStore();
  const { setAlerts } = useUIStore((state) => state);

  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    nextView: ViewDetails
  ) => {
    setView(nextView);
  };

  const handleProduct = () => {
    addProducts([...products, details]);
    setAlerts([
      {
        severity: "success",
        message: "Producto añadido correctamente",
      },
    ]);
  };

  return (
    <Stack spacing={3} direction="column">
      <ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        onChange={handleChange}
        sx={{ p: 1 }}
      >
        <ToggleButton value="graph" aria-label="graph">
          <ViewListIcon />
        </ToggleButton>
        <ToggleButton value="grid" aria-label="grid">
          <ViewModuleIcon />
        </ToggleButton>
        <ToggleButton value="list" aria-label="list">
          <ViewQuiltIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Tooltip title="Añadir a general">
          <IconButton
            size="small"
            key="one"
            sx={{
              backgroundColor: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
            onClick={handleProduct}
          >
            <AddIcon
              sx={{
                fill: theme.palette.primary.contrastText,
              }}
            />
          </IconButton>
        </Tooltip>
      </ButtonGroup>
    </Stack>
  );
};

export { ToggleMenu };
