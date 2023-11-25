"use client";
import { useState } from "react";
import { Card, CardActions, CardHeader, Chip, Typography } from "@mui/material";

// Icons
import GradeIcon from "@mui/icons-material/Grade";

interface Props {
  comment: string;
  score: number;
}

const Comment = ({ comment, score }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <Card
      sx={{
        mb: 2,
      }}
    >
      <CardHeader
        sx={{
          display: "flex",
          alignItems: "flex-start",
          p: 2,
          maxHeight: expanded ? "none" : "100px",
          textOverflow: "ellipsis",
          overflow: "hidden",
        }}
        avatar={
          <Chip
            icon={<GradeIcon fontSize="small" />}
            label={score}
            color={`${
              score > 0.4 ? "success" : score > 0 ? "warning" : "error"
            }`}
          />
        }
        title={<Typography variant="body2">{comment}</Typography>}
      />
      <CardActions>
        <Typography
          variant="body2"
          sx={{ cursor: "pointer" }}
          onClick={toggleExpanded}
        >
          {expanded ? "Ver menos" : "Ver más"}
        </Typography>
      </CardActions>
    </Card>
  );
};

export { Comment };
