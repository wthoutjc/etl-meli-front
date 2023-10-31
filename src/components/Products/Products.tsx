//Charts
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement, defaults } from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip);
defaults.color = "white";

const Products = () => {
  return <div>Products</div>;
};

export { Products };
