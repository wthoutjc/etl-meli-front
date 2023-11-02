"use client";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CircularProgress,
  Divider,
  InputAdornment,
  MenuItem,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

// Services
import { getCategories, getProducts } from "@/services";

// Zustand
import { useUIStore } from "@/zustand";

// React Hook Form
import { useForm } from "react-hook-form";

// Icons
import TaskIcon from "@mui/icons-material/Task";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Interfaces
import { Category, Product } from "@/interfaces";

interface SearchProps {
  category: string;
  product: string;
  from?: string;
  to?: string;
}

const SearchMenu = () => {
  const router = useRouter();
  const [expanded, setExpanded] = useState<boolean>(false);

  const { drawer, setDrawer } = useUIStore();
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
    reset();
    setDrawer({ open: !open });
    setProducts([]);
    setExpanded(false);
    router.push(`/products/${product}`);
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
        <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Fecha</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Búsqueda avanzada
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              fullWidth
              type="date"
              disabled={loading}
              autoComplete="off"
              sx={{ marginBottom: "1em" }}
              placeholder="Ej: 2021-10-01"
              label="Desde"
              error={!!errors.from}
              helperText={
                !!errors.from
                  ? errors.from.message
                  : "Selecciona la fecha de inicio"
              }
              {...register("from", {
                validate: (value) =>
                  value &&
                  expanded &&
                  (watch("to") === undefined ||
                    value <= (watch("to") ?? Infinity))
                    ? "La fecha no puede ser mayor"
                    : undefined,
              })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {loading ? <CircularProgress size={20} /> : <TaskIcon />}
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              type="date"
              disabled={loading}
              autoComplete="off"
              sx={{ marginBottom: "1em" }}
              placeholder="Ej: 2021-10-02"
              label="Hasta"
              error={!!errors.to}
              helperText={
                !!errors.to ? errors.to.message : "Selecciona la fecha de fin"
              }
              {...register("to", {
                required:
                  expanded && watch("from") !== undefined
                    ? "La fecha es requerida"
                    : undefined,
                validate: (value) =>
                  value &&
                  expanded &&
                  (watch("from") === undefined ||
                    value >= (watch("from") ?? -Infinity))
                    ? "La fecha no puede ser menor"
                    : undefined,
              })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {loading ? <CircularProgress size={20} /> : <TaskIcon />}
                  </InputAdornment>
                ),
              }}
            />
          </AccordionDetails>
        </Accordion>
        <Button
          fullWidth
          type="submit"
          disabled={loading || !categoryId || !productId}
          variant="contained"
          color="success"
          endIcon={<ManageSearchIcon />}
          sx={{ mt: 2 }}
        >
          <Typography variant="button">Buscar</Typography>
        </Button>
      </form>
    </Box>
  );
};

export { SearchMenu };
