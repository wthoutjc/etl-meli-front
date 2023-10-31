// Interfaces
import { ProductDetails } from "@/interfaces";

// Moment
import moment from "moment";

//Charts
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  ArcElement,
  defaults,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
ChartJS.register(
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);
defaults.color = "white";

interface Props {
  details: ProductDetails[];
}

const GraphDetails = ({ details }: Props) => {
  return (
    <Line
      style={{
        width: "100%",
        padding: "15px",
      }}
      options={{
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          x: {
            title: {
              display: true,
              text: "Fecha",
              font: {
                family: "Montserrat",
                size: 14,
              },
            },
            grid: {
              display: true,
              color: "#001122",
            },
          },
          y: {
            title: {
              display: true,
              text: "Cantidad vendida",
              font: {
                family: "Montserrat",
                size: 14,
              },
            },
            grid: {
              display: true,
              color: "#001122",
            },
          },
        },
      }}
      data={{
        labels: details.map(({ etl_date }) =>
          moment(etl_date).toDate().toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        ),
        datasets: [
          {
            label: "Cantidad vendida",
            fill: false,
            borderColor: "#8e44ad",
            pointBorderColor: "#8e44ad",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#001122",
            pointHoverBorderColor: "white",
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            data: details.map(({ amount_sold }) => Number(amount_sold)),
          },
          {
            label: "Cantidad disponible",
            fill: false,
            borderColor: "#2ecc71",
            pointBorderColor: "#27ae60",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#001122",
            pointHoverBorderColor: "white",
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            data: details.map(({ available_quantity }) =>
              Number(available_quantity)
            ),
          },
        ],
      }}
    />
  );
};

export { GraphDetails };
