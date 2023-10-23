"use client";
import { useState } from "react";
import {
  Box,
  CircularProgress,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";

// React Hook Form
import { useForm } from "react-hook-form";

// Interfaces
import { Category } from "@/interfaces";

// Icons
import TaskIcon from "@mui/icons-material/Task";

const SearchSide = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Category>({
    defaultValues: {
      id: "",
    },
  });

  const onSubmit = async (data: Category) => {
    setLoading(true);
    console.log(data);
    setLoading(false);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          select
          disabled={loading}
          label="Tipo*"
          error={!!errors.id}
          sx={{ mb: 2, mr: 2, width: "70%" }}
          helperText={
            !!errors.name
              ? errors.name.message
              : "Selecciona el tipo de archivo"
          }
          {...register("name", {
            required: "El tipo de archivo es requerido",
          })}
          value={watch("name")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {loading ? <CircularProgress size={20} /> : <TaskIcon />}
              </InputAdornment>
            ),
          }}
        >
          <MenuItem value={"pedidos"}>Pedidos</MenuItem>
          <MenuItem value={"bodegas"}>Bodegas</MenuItem>
        </TextField>
      </form>
    </Box>
  );
};

export { SearchSide };
