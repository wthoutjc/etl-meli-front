"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Divider,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";

// Components
import { DetailCard } from "@/components/Details/DetailCard";
import { SellerInfo } from "@/components/Seller/SellerInfo";
import { ToggleMenu } from "@/components/ui/ToggleMenu/ToggleMenu";
import { GraphDetails } from "@/components/Details/Line/GraphDetails";
import { NPL } from "@/components/NPL/NPL";
import { DoughnutDetails } from "@/components/Details/Doughnuts/DoughnutDetails";

// Icons
import HelpIcon from "@mui/icons-material/Help";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

// Interfaces
import { ProductDetails } from "@/interfaces";
import { EnhancedTable } from "../ui/Table";

// Services
import { getProductDetails } from "@/services";

type ViewDetails = "grid" | "list" | "graph";

interface Props {
  id: string;
  from?: string;
  to?: string;
}

const Details = ({ id, from, to }: Props) => {
  const [view, setView] = useState<ViewDetails>("graph");
  const [details, setDetails] = useState<ProductDetails[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDetails = async () => {
      const details = await getProductDetails(id, from, to);
      setDetails(details);
      setIsLoading(false);
    };

    fetchDetails();
  }, [id, from, to]);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {details.length > 0 && (
        <>
          <Paper
            sx={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                p: 1.5,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <QueryStatsIcon sx={{ mr: 1 }} />
                <Typography variant="h6" fontWeight={500}>
                  Resultados -{" "}
                  <b>
                    {details[0].k_products} - {details[0].name}
                  </b>
                </Typography>
              </Box>
              <Tooltip title="Ayuda">
                <IconButton size="small">
                  <HelpIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
            <Divider />

            <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "100%",
                overflow: "auto",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                }}
              >
                <ToggleMenu view={view} setView={setView} details={details} />
                <DoughnutDetails productId={details[0].k_products} />
                {view === "graph" && (
                  <Paper
                    sx={{
                      width: "100%",
                      backgroundColor: "#001122",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <GraphDetails details={details} />
                  </Paper>
                )}
                {view === "list" && (
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      p: 2,
                    }}
                  >
                    <EnhancedTable rows={details} />
                  </Box>
                )}
                {view === "grid" && (
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      alignItems: "center",
                      overflow: "auto",
                    }}
                  >
                    {details.map((product, i) => (
                      <DetailCard key={i} product={product} />
                    ))}
                  </Box>
                )}
              </Box>
            </Box>
          </Paper>
          <Box
            sx={{
              width: "20%",
              display: "flex",
              flexDirection: "column",
              ml: 2,
            }}
          >
            <Paper>
              <SellerInfo sellerId={details[0].k_sellers} />
            </Paper>
            <NPL id={details[0].k_products} />
          </Box>
        </>
      )}
    </Box>
  );
};

export { Details };
