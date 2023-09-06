import React from "react";
import Layouts from "../components/layouts/Layouts";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layouts>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          color: "white",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2.5rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: "0px",
            "& h4": {
              fontSize: "2rem",
            },
          },
        }}
      >
        <Typography variant="h4">
          Welcome to our Library Management System
        </Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Box>
    </Layouts>
  );
};

export default About;
