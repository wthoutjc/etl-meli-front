import {
  Box,
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";

// Interfaces
import { ProductDetails, Order } from "@/interfaces";

interface HeadCell {
  disablePadding: boolean;
  id: keyof ProductDetails;
  label: string;
  numeric: boolean;
}

interface Props {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof ProductDetails
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

const headCells: readonly HeadCell[] = [
  {
    id: "k_products",
    numeric: false,
    disablePadding: true,
    label: "ID Producto",
  },
  {
    id: "name",
    numeric: true,
    disablePadding: false,
    label: "Producto",
  },
  {
    id: "etl_date",
    numeric: true,
    disablePadding: false,
    label: "Fecha ETL",
  },
  {
    id: "available_quantity",
    numeric: true,
    disablePadding: false,
    label: "Cantidad Disponible",
  },
  {
    id: "amount_sold",
    numeric: true,
    disablePadding: false,
    label: "Cantidad Vendida",
  },
  {
    id: "k_sellers",
    numeric: true,
    disablePadding: false,
    label: "Vendedor",
  },
];

const EnhancedTableHead = (props: Props) => {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof ProductDetails) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export { EnhancedTableHead };
