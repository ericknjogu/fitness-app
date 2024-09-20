import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetVideos, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography
        variant="h4"
        mb={6}
      >
        Exercises that Target the same muscle:
      </Typography>
      <Stack
        direction="row"
        sx={{ p: "2", position: "relative", mb: "30px" }}
      >
        {targetVideos.length ? (
          <HorizontalScrollbar data={targetVideos} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        variant="h4"
        mb={6}
      >
        Exercises that use the same equipment:
      </Typography>
      <Stack
        direction="row"
        sx={{ p: "2", position: "relative" }}
      >
        {targetVideos.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
