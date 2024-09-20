import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Stack, Typography } from "@mui/material";
import { fetchData, exercisesOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({
  setExercises,
  bodyPart,
  setBodyPart,
  search,
  setSearch,
}) => {
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exercisesOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      try {
        const exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=1000",
          exercisesOptions
        );

        const lowerCaseSearch = search.toLowerCase();
        const searchedExercises = exercisesData.filter(
          (exercise) =>
            exercise.name.toLowerCase().includes(lowerCaseSearch) ||
            exercise.target.toLowerCase().includes(lowerCaseSearch) ||
            exercise.equipment.toLowerCase().includes(lowerCaseSearch) ||
            exercise.bodyPart.toLowerCase().includes(lowerCaseSearch)
        );

        setSearch(search);
        setExercises(searchedExercises);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    }
  };

  return (
    <Stack
      alignItems={"center"}
      mt={"37px"}
      justifyContent={"center"}
      p={"20px"}
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb={"50px"}
        textAlign={"center"}
      >
        Awesome Exercises You <br /> should know
      </Typography>
      <Box
        position={"relative"}
        mb={"70px"}
      >
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "white",
            borderRadius: "40px",
          }}
          height={"76px"}
          value={search}
          placeholder={"Search for exercises"}
          type="text"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "white",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={() => {
            handleSearch();
            {
              search.length > 0 &&
                window.scrollTo({ top: 1800, left: "100", behavior: "smooth" });
            }
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          search={search}
          isBodyParts
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
