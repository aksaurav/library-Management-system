import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "White", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: "2px",
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <GitHubIcon />
        </Box>
        <Typography
          variant="h4"
          sx={{ "@media (max-widht:600px)": { fontSize: "1rem" } }}
        >
          All right Resered &copy; Library Managent
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
