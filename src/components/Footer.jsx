import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <Box
      mt="80px"
      bgcolor={"#fff3f4"}
    >
      <Stack
        gap={"40px"}
        alignItems={"center"}
        px={"40px"}
        pt={"24px"}
      >
        <img
          src={Logo}
          alt="logo"
          width={"50px"}
          height={"40px"}
        />
        <Typography
          variant="h5"
          pb={"30px"}
          mt={"10px"}
        >
          © 2024 Fitness App. All rights reserved. Made by Erick Njogu
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
