"use client";
import { Box } from "@mui/material";

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

// Data
import { OPTIONS } from "./ProductOptions";

// Utils
import { getRandomColor } from "@/utils";

const Products = () => {
  const { products } = useProductsStore();
  if (products.length === 0) return <NoProducts />;

  const labelProducts = products.reduce((maxProduct, currentProduct) =>
    maxProduct.length > currentProduct.length ? maxProduct : currentProduct
  );

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        backgroundColor: "#001122",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
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
          datasets: products.map((product) => {
            const color = getRandomColor();
            return {
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
            };
          }),
        }}
      />
    </Box>
  );
};

export { Products };
