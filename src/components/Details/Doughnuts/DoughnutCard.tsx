import { Card, CardContent, CardHeader, Typography } from "@mui/material";

//Charts
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement } from "chart.js";
import { ProductHistory } from "@/interfaces";
ChartJS.register(ArcElement, Tooltip);

// Moment
import moment from "moment";
moment.updateLocale("es", {
  months:
    "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split(
      "_"
    ),
  monthsShort:
    "Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.".split("_"),
  weekdays: "Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado".split("_"),
  weekdaysShort: "Dom._Lun._Mar._Mier._Jue._Vier._Sab.".split("_"),
  weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sa".split("_"),
});

const DoughnutCard = (product: ProductHistory) => {
  const { year_date, month_date, total_available_quantity, total_sold } =
    product;
  return (
    <Card
      sx={{
        width: "100%",
        height: 150,
        display: "flex",
        mt: 1,
      }}
    >
      <CardHeader
        title={
          <Typography variant="body1">
            <b>Fecha</b>
          </Typography>
        }
        subheader={
          <Typography variant="body2">
            {year_date} -{" "}
            {moment()
              .month(month_date - 1)
              .format("MMMM")}
          </Typography>
        }
      />
      <CardContent>
        <Doughnut
          data={{
            labels: ["Cantidad vendida", "Cantidad disponible"],
            datasets: [
              {
                data: [total_sold, total_available_quantity],
                backgroundColor: ["rgba(26, 53, 80, 0.897)", "#66bb6a"],
                hoverBackgroundColor: ["rgba(26, 53, 80, 0.897)", "#66bb6a"],
                borderRadius: 3,
                borderColor: ["rgba(26, 53, 80, 0.897)", "#009432"],
                hoverOffset: 3,
              },
            ],
          }}
          options={{
            cutout: 15,
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              legend: {
                position: "bottom",
              },
            },
            elements: {
              arc: {
                borderWidth: 0,
              },
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

export { DoughnutCard };
