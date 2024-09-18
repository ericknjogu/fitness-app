import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Typography, Button } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      className="exercise-card"
      to={"/exercise/${exercise.id}"}
    >
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
      />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "white",
            background: "#ffa9a9",
            fontSize: "14px",
            textTransform: "capitalize",
            borderRadius: "20px",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "white",
            background: "#fcc757",
            fontSize: "14px",
            textTransform: "capitalize",
            borderRadius: "20px",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml={"21px"}
        color={"#000"}
        fontWeight={"bold"}
        mt={"11px"}
        pb={"11px"}
        textTransform={"capitalize"}
        fontSize={"20px"}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
