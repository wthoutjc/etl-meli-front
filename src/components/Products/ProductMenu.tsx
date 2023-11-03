"use client";
import {
  Divider,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import Link from "next/link";

// Icons
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemIcon from "@mui/material/ListItemIcon";
import InfoIcon from "@mui/icons-material/Info";

// Zustand
import { useProductsStore } from "@/zustand";

interface Props {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
  k_products: string;
}

const ProductMenu = ({ anchorEl, handleClose, open, k_products }: Props) => {
  const { deleteProduct } = useProductsStore();

  const handleDelete = () => {
    deleteProduct(k_products);
    handleClose();
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuList>
        <MenuItem
          onClick={handleDelete}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Borrar</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘⌫
          </Typography>
        </MenuItem>
        <Divider />
        <Link href={`/products/${k_products}`} passHref>
          <MenuItem>
            <ListItemIcon>
              <InfoIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Ver producto</ListItemText>
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export { ProductMenu };
