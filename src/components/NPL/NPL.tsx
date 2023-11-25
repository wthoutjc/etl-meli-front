"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Divider,
  Typography,
  Card,
  CardHeader,
  Chip,
} from "@mui/material";

// Icons
import SmartToyIcon from "@mui/icons-material/SmartToy";
import GradeIcon from "@mui/icons-material/Grade";

// Services
import { getNPL } from "@/services";
import { NPL as INPL } from "@/interfaces";

// Components
import { NPLSkeleton } from "./NPLSkeleton";
import { Comment } from "./Comment";

interface Props {
  id: string;
}

const NPL = ({ id }: Props) => {
  const [npl, setNPL] = useState<INPL[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [weigth, setWeigth] = useState<null | number>();

  useEffect(() => {
    getNPL(id).then((npl) => {
      setNPL(npl);
      setIsLoading(false);
      setWeigth(npl.reduce((acc, { score }) => acc + score, 0) / npl.length);
    });
  }, [id]);

  if (isLoading) return <NPLSkeleton />;

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: 1.5,
        height: "100%",
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
        }}
      >
        <SmartToyIcon sx={{ mr: 1 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" fontWeight={500} sx={{ mr: 2 }}>
            NPL
          </Typography>
          <Typography variant="body2">
            -1 a 1, donde 1 es muy positivo y -1 muy negativo
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 1,
          height: "100%1",
          overflow: "auto",
        }}
      >
        <Box>
          {weigth && (
            <Card sx={{ width: "100%", mb: 2, overflow: "auto" }}>
              <CardHeader
                avatar={
                  <Chip
                    icon={<GradeIcon fontSize="small" />}
                    label={weigth?.toFixed(2)}
                    color={`${
                      weigth > 0.4
                        ? "success"
                        : weigth > 0
                        ? "warning"
                        : "error"
                    }`}
                  />
                }
                title={
                  <>
                    <Typography variant="body2">
                      <b>Comentarios</b> - {npl.length}
                    </Typography>
                    <Typography variant="body2">
                      Generalmente{" "}
                      {weigth > 0.4
                        ? "positivos"
                        : weigth > 0
                        ? "regulares"
                        : "negativos"}
                    </Typography>
                  </>
                }
              />
            </Card>
          )}
        </Box>
        <Box>
          {npl.map(({ comment, score }, i) => (
            <Comment key={i} comment={comment} score={score} />
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export { NPL };
