"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

// Services
import { getCategories, getProducts, getProductDetails } from "@/services";

// Zustand
import { useDrawerStore, useDetailsStore } from "@/zustand";

// React Hook Form
import { useForm } from "react-hook-form";

// Icons
import TaskIcon from "@mui/icons-material/Task";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

// Interfaces
import { Category, Product } from "@/interfaces";

interface SearchProps {
  category: string;
  product: string;
}

const SearchMenu = () => {
  const { drawer, setDrawer } = useDrawerStore();
  const { setDetails } = useDetailsStore();
  const { open } = drawer;

  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<SearchProps>({
    defaultValues: {
      category: "Seleccionar",
      product: "Seleccionar",
    },
  });

  const categoryId =
    watch("category") === "Seleccionar" ? "" : watch("category");
  const productId = watch("product") === "Seleccionar" ? "" : watch("product");

  const onSubmit = async ({ product }: SearchProps) => {
    setLoading(true);
    getProductDetails(product).then((res) => {
      setDetails({ details: res });
      setLoading(false);
      reset();
      setDrawer({ open: !open });
    });
  };

  useEffect(() => {
    if (open && categories.length === 0) {
      setLoading(true);
      getCategories().then((res) => {
        setLoading(false);
        setCategories(res);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (categoryId) {
      setLoading(true);
      getProducts(categoryId).then((res) => {
        setLoading(false);
        setProducts(res);
      });
    }
  }, [categoryId]);

  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Typography variant="h6" sx={{ mb: 1 }}>
        Menú de búsqueda
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          select
          disabled={loading}
          label="Categoria*"
          error={!!errors.category}
          sx={{ mb: 2 }}
          helperText={
            !!errors.category
              ? errors.category.message
              : "Selecciona la categoría"
          }
          {...register("category", {
            required: "La categoría es requerida",
          })}
          value={watch("category")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {loading ? <CircularProgress size={20} /> : <TaskIcon />}
              </InputAdornment>
            ),
          }}
        >
          <MenuItem value={"Seleccionar"}>
            <em>Seleccionar</em>
          </MenuItem>
          {categories.map(({ k_categories, name }: Category, index) => (
            <MenuItem key={index} value={k_categories}>
              {name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          select
          disabled={loading}
          label="Producto*"
          error={!!errors.product}
          sx={{ mb: 2 }}
          helperText={
            !!errors.product ? errors.product.message : "Selecciona el producto"
          }
          {...register("product", {
            required: "El producto es requerido",
          })}
          value={watch("product")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {loading ? <CircularProgress size={20} /> : <TaskIcon />}
              </InputAdornment>
            ),
          }}
        >
          <MenuItem value={"Seleccionar"}>
            <em>Seleccionar</em>
          </MenuItem>
          {products.map(({ k_products, name }: Product, index) => (
            <MenuItem key={index} value={k_products}>
              {name}
            </MenuItem>
          ))}
        </TextField>
        <Button
          fullWidth
          type="submit"
          disabled={loading || !categoryId || !productId}
          variant="contained"
          color="success"
          endIcon={<ManageSearchIcon />}
        >
          <Typography variant="button">Buscar</Typography>
        </Button>
      </form>
    </Box>
  );
};

export { SearchMenu };
