import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";

import { fetchData, exercisesOptions } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ search, exercises, bodyPart, setExercises }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage; // 9 * 1 = 9
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage; // 9 - 9 = 0
  const currentExercises = Array.isArray(exercises)
    ? exercises.slice(indexOfFirstExercise, indexOfLastExercise)
    : [];
  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      const selectedBodyPart = bodyPart || "all";

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=100",
          exercisesOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}?limit=100&offset=0`,
          exercisesOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box
      id="exercises"
      sx={{ mt: { lg: "110px" } }}
      mt="50px"
      p="20px"
    >
      {search.length > 0 ? (
        <Typography
          variant="h4"
          mb={"46px"}
        >
          Showing search results for{" "}
          <span style={{ color: "red", textTransform: "capitalize" }}>
            {search}
          </span>{" "}
          Excercises
        </Typography>
      ) : (
        <Typography
          variant="h4"
          mb={"46px"}
        >
          Showing results for{" "}
          <span style={{ color: "red", textTransform: "capitalize" }}>
            {bodyPart}
          </span>{" "}
          Excercises
        </Typography>
      )}

      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard
            exercise={exercise}
            key={index}
          />
        ))}
      </Stack>
      <Stack
        mt={"100px"}
        alignItems={"center"}
      >
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
