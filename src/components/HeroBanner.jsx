import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography
        color="#ff2625"
        fontWeight={"600"}
        fontSize={"26px"}
      >
        Fitness Club
      </Typography>
      <Typography
        color="#333333"
        fontWeight={"700"}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb={"23px"}
        mt={"30px"}
      >
        Stay fit and healthy <br /> with our fitness club.
      </Typography>
      <Typography
        fontSize={"22px"}
        lineHeight={"35px"}
        mb={5}
      >
        Checkout the most Effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color={"#ff2625"}
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize={"200px"}
        mt={4}
      >
        Fitness
      </Typography>
      <img
        src={HeroBannerImage}
        alt="banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
