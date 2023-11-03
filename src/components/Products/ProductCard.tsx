"use client";
import { useState } from "react";
import { Avatar, Card, CardHeader, IconButton } from "@mui/material";

// Interfaces
import { ProductDetails } from "@/interfaces";

// Icons
import MoreVertIcon from "@mui/icons-material/MoreVert";

// Components
import { ProductMenu } from "@/components/Products/ProductMenu";

interface Props {
  product: ProductDetails;
  color: string;
}

const ProductCard = ({ product, color }: Props) => {
  const { name, k_products } = product;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Card sx={{ mt: 1 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: color }} aria-label="recipe">
              {name[0]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          }
          title={name}
          subheader={k_products}
        />
      </Card>
      <ProductMenu open={open} handleClose={handleClose} anchorEl={anchorEl} k_products={k_products} />
    </>
  );
};

export { ProductCard };
