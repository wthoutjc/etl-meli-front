"use client";
import { Box, Divider, Typography } from "@mui/material";

// Moment
import moment from "moment";

//Charts
import { Chart as ChartJS, Tooltip, ArcElement, defaults } from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip);
defaults.color = "white";

// Zustand
import { useProductsStore } from "@/zustand";

// Components
import { NoProducts } from "@/components/Products/NoProducts";
import { ProductCard } from "@/components/Products/ProductCard";

// Data
import { OPTIONS } from "./ProductOptions";

// Utils
import { getRandomColor } from "@/utils";

// Icons
import ChecklistIcon from "@mui/icons-material/Checklist";

const Products = () => {
  const { products } = useProductsStore();
  if (products.length === 0) return <NoProducts />;

  const labelProducts = products.reduce((maxProduct, currentProduct) =>
    maxProduct.length > currentProduct.length ? maxProduct : currentProduct
  );

  const productsWithColor = products.map((product) => {
    const color = getRandomColor();
    return {
      product,
      color,
    };
  });

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#001122",
        }}
      >
        <Line
          style={{
            width: "100%",
            padding: "15px",
          }}
          options={OPTIONS}
          data={{
            labels: labelProducts.map(({ etl_date }) =>
              moment(etl_date).toDate().toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            ),
            datasets: productsWithColor.map(({ product, color }) => ({
              label: `Cantidad vendida para ${product[0].name}`,
              fill: false,
              borderColor: color,
              pointBorderColor: color,
              pointBackgroundColor: "#fff",
              pointBorderWidth: 2,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#001122",
              pointHoverBorderColor: "white",
              pointHoverBorderWidth: 1,
              pointRadius: 3,
              data: product.map(({ amount_sold }) => amount_sold),
            })),
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
        }}
      >
        <Box sx={{ display: "flex", p: 1.5, alignItems: "center" }}>
          <ChecklistIcon sx={{ mr: 1 }} />
          <Typography variant="h6" fontWeight={500}>
            Productos añadidos
          </Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            p: 1,
          }}
        >
          {productsWithColor.map(({ product, color }, i) => (
            <ProductCard key={i} product={product[0]} color={color} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export { Products };
